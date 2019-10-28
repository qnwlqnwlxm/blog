---
prev: ./HikariCPControllerService-1
next: ./HikariCPControllerService-3
disqus: true
---

# HikariCP Controller Service 

## HikariCPControllerService - 2

### dependency 추가

Controller Service는 processor에 비해 로직이 없고, 기술적인 부분만 있기때문에 상대적으로 수정할 코드 양은 적습니다.

HikariCP를 사용하기 위해 dependency를 추가해줍니다.

그리고 postgreSQL을 위한 드라이버, 테스트를 위한 apache derby, meric데이터를 위한 dropwizard-metrics까지 추가합니다.


아래 내용을 최상위 pom.xml에 추가해줍니다.

<details ><summary>parent pom.xml</summary>
<p>

```xml
    <properties>
		<hikaricp.version>3.4.1</hikaricp.version>
		<dropwizard.version>1.3.11</dropwizard.version>
		<postgresql.jdbc.version>42.2.8</postgresql.jdbc.version>
		<derby.version>10.14.2.0</derby.version>
		
		<maven.compiler.source>1.8</maven.compiler.source>
		<maven.compiler.target>1.8</maven.compiler.target>
		<project.build.sourceEncoding>UTF-8</project.build.sourceEncoding>
		<project.reporting.outputEncoding>UTF-8</project.reporting.outputEncoding>
	</properties>

    <dependencyManagement>
		<dependencies>
			<dependency>
				<groupId>com.zaxxer</groupId>
				<artifactId>HikariCP</artifactId>
				<version>${hikaricp.version}</version>
			</dependency>
			<dependency>
				<groupId>org.postgresql</groupId>
				<artifactId>postgresql</artifactId>
				<version>${postgresql.jdbc.version}</version>
			</dependency>
			<dependency>
				<groupId>io.dropwizard</groupId>
				<artifactId>dropwizard-metrics</artifactId>
				<version>${dropwizard.version}</version>
			</dependency>
			<dependency>
				<groupId>org.apache.derby</groupId>
				<artifactId>derbyclient</artifactId>
				<version>${derby.version}</version>
			</dependency>
			<dependency>
				<groupId>org.apache.derby</groupId>
				<artifactId>derbynet</artifactId>
				<version>${derby.version}</version>
			</dependency>
		</dependencies>
	</dependencyManagement>
```

</p>
</details>


최상위 pom.xml에 dependency를 추가했으면 service(nifi-hikaricp)의 pom.xml에도 dependency를 추가해줍니다.

<details ><summary>nifi-hikaricp pom.xml</summary>
<p>

```xml
    <dependency>
			<groupId>com.zaxxer</groupId>
			<artifactId>HikariCP</artifactId>
		</dependency>
		<dependency>
			<groupId>org.postgresql</groupId>
			<artifactId>postgresql</artifactId>
		</dependency>
		<dependency>
			<groupId>io.dropwizard</groupId>
			<artifactId>dropwizard-metrics</artifactId>
		</dependency>
		<dependency>
			<groupId>org.apache.derby</groupId>
			<artifactId>derbyclient</artifactId>
		</dependency>
		<dependency>
			<groupId>org.apache.derby</groupId>
			<artifactId>derbynet</artifactId>
			<scope>test</scope>
```

</p>
</details>

그리고 interface는 nifi에서 제공해주던 dbcp service의 인터페이스를 상속받아서 사용합니다. 그래야 기존 dbcp service를 사용하던 프로세서에서도 hikariCP를 사용할 수 이습니다.

아래처럼 nifi-hikaricp-api의 pom.xml에 dependency를 추가합니다.
  
<details ><summary>nifi-hikaricp-api pom.xml</summary>
<p>

```xml{1,6}
    <dependencies>
        <dependency>
            <groupId>org.apache.nifi</groupId>
            <artifactId>nifi-dbcp-service-api</artifactId>
            <version>1.9.2</version>
        </dependency>
        <dependency>
            <groupId>org.apache.nifi</groupId>
            <artifactId>nifi-api</artifactId>
            <scope>provided</scope>
        </dependency>
    </dependencies>
```

</p>
</details>



### Interface 정의

nifi dbcp의 인터페이스를 상속받았기 때문에 아래처럼 Tags 정보와 description정보정도만 추가하고, extends를 DBCPService로 변경합니다.

```java
Tags({"DBCP", "SQL", "Database", "HikariCP", "NICE"})
@CapabilityDescription("Database connection pooling using HikariCP API")
public interface HikariCPService extends DBCPService {

}

```

### StandardHikariCPService 코드 수정

interface가 변경되었기 때문에 StandardHikariCPService class에서 unimplemented method를 작성하라고 에러를 표시할 것입니다.

해당 메소드를 추가하고 기존에 있던 overrid 한 execute() 는 삭제합니다.

그럼 코드가 아래와 같은 형태로 변경됩니다.

<details ><summary>StandardHikariCPService.java</summary>
<p>

```java
public class StandardHikariCPService extends AbstractControllerService implements HikariCPService {

    public static final PropertyDescriptor MY_PROPERTY = new PropertyDescriptor.Builder().name("MY_PROPERTY")
            .displayName("My Property").description("Example Property").required(true)
            .addValidator(StandardValidators.NON_EMPTY_VALIDATOR).build();

    private static final List<PropertyDescriptor> properties;

    static {
        final List<PropertyDescriptor> props = new ArrayList<>();
        props.add(MY_PROPERTY);
        properties = Collections.unmodifiableList(props);
    }

    @Override
    protected List<PropertyDescriptor> getSupportedPropertyDescriptors() {
        return properties;
    }

    /**
     * @param context the configuration context
     * @throws InitializationException if unable to create a database connection
     */
    @OnEnabled
    public void onEnabled(final ConfigurationContext context) throws InitializationException {

    }

    @OnDisabled
    public void shutdown() {

    }

    @Override
    public Connection getConnection() throws ProcessException {
        // TODO Auto-generated method stub
        return null;
    }

}

```

</p>
</details>


### property 정의

이제 custom processor를 작성했을 때와 마찬가지로 property를 작성합니다.

service의 경우 input, output이 있는 형태가 아니기 때문에 relation은 따로 없습니다.

마찬가지로 StandardHikariCPService class와 동일한 위치에 ConfigUtil class를 작성합니다. 코드는 아래와 같습니다.

<details ><summary>DataSourcePropertyValidator.java</summary>
<p>

```java
package com.mbio.custom.hikaricp;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import org.apache.derby.jdbc.ClientDataSource;
import org.apache.nifi.components.AllowableValue;
import org.apache.nifi.components.PropertyDescriptor;
import org.apache.nifi.processor.util.StandardValidators;
import org.postgresql.ds.PGSimpleDataSource;

public enum ConfigUtil {

    INSTANCE;
  
    private static List<PropertyDescriptor> properties;
  
    private static final AllowableValue DERBY_DS = new AllowableValue(
        ClientDataSource.class.getName(), "Apache Derby", "Apache Derby Datasource");
  
    private static final AllowableValue PGSQL_DS =
        new AllowableValue(PGSimpleDataSource.class.getName(), "PostgreSQL", "PostgreSQL Datasource");
  
    public static final PropertyDescriptor DATASOURCE_CLASSNAME = new PropertyDescriptor.Builder()
        .name("dataSourceClassName").displayName("Datasource classname")
        .description("Fully qualified classname of datasource")
        .allowableValues(getAllowableValue()).addValidator(StandardValidators.NON_EMPTY_VALIDATOR)
        .required(true).build();
  
    public static final PropertyDescriptor USERNAME = new PropertyDescriptor.Builder()
        .name("userName").displayName("User Name").description("Database account user name")
        .addValidator(StandardValidators.NON_EMPTY_VALIDATOR).required(true).build();
  
    public static final PropertyDescriptor PASSWORD = new PropertyDescriptor.Builder()
        .name("password").displayName("Password").description("Database account password")
        .addValidator(StandardValidators.NON_EMPTY_VALIDATOR).required(true).sensitive(true).build();
  
    public static final PropertyDescriptor AUTO_COMMIT = new PropertyDescriptor.Builder()
        .name("autoCommit").displayName("Auto commit").description("Database account user name")
        .allowableValues("true", "false").defaultValue("true")
        .addValidator(StandardValidators.BOOLEAN_VALIDATOR).required(false).build();
  
    public static final PropertyDescriptor METRICS = new PropertyDescriptor.Builder().name("metrics")
        .displayName("Metrics").description("Whether or not to log metrics")
        .allowableValues("true", "false").defaultValue("false")
        .addValidator(StandardValidators.BOOLEAN_VALIDATOR).required(false).build();
  
    static {
      List<PropertyDescriptor> properties = new ArrayList<>();
      properties.add(DATASOURCE_CLASSNAME);
      properties.add(USERNAME);
      properties.add(PASSWORD);
      properties.add(AUTO_COMMIT);
      properties.add(METRICS);
      ConfigUtil.properties = Collections.unmodifiableList(properties);
    }
  
    public static List<PropertyDescriptor> getProperties() {
      return properties;
    }
  
    public static PropertyDescriptor getDynamicProperty(String propertyDescriptorName) {
      return new PropertyDescriptor.Builder().name(propertyDescriptorName).required(false)
          .addValidator(new DataSourcePropertyValidator()).dynamic(true).build();
    }
    
    private static AllowableValue[] getAllowableValue() {
      List<AllowableValue> values = new ArrayList<AllowableValue>();
      values.add(DERBY_DS);
      values.add(PGSQL_DS);
      
      return values.toArray(new AllowableValue[values.size()]);
    }
  
  }
  

```

</p>
</details>

### Dynamic Property 를 위한 validation 추가

위의 소스를 이용하여 ConfigUtil을 만들면 에러가 발생할 것입니다.

NiFi의 Dynamic Property를 지원하기 위해 Dynamic Validation을 추가했습니다.

DBCP연결시에 jdbcurl의 경우 아래와 같이 ? 뒤에 설정을 추가할 수 있습니다.

이와 같은 형태를 dynamic property로 지원하고, 잘못된 옵션을 추가했을때 service가 실행 되지 않고 에러를 뱉어내기 위해 validation을 추가했습니다.

```
jdbc:mysql://localhost:3306/dbname?characterEncoding=utf8
```

ConfigUtil과 동일 한 위치에 DataSourcePropertyValidator class를 생성합니다.

<details ><summary>ConfigUtil.java</summary>
<p>

```java  
package com.mbio.custom.hikaricp;

import java.beans.Introspector;
import java.lang.reflect.Method;
import org.apache.nifi.components.ValidationContext;
import org.apache.nifi.components.ValidationResult;
import org.apache.nifi.components.Validator;

public class DataSourcePropertyValidator implements Validator {

  @Override
  public ValidationResult validate(String propertyName, String PropertyValue,
      ValidationContext context) {

    String dsClassName = context.getProperty(ConfigUtil.DATASOURCE_CLASSNAME).getValue();
    return new ValidationResult.Builder().subject(propertyName).input(PropertyValue)
        .valid(isValidProperty(dsClassName, propertyName))
        .explanation(propertyName + " is not a valid property").build();
  }

  private boolean isValidProperty(final String dsClassName, final String propertyName) {
    try {
      Class<?> dsClass = Class.forName(dsClassName);

      Method[] methods = dsClass.getMethods();

      for (Method method : methods) {

        String methodName = method.getName();
        if (methodName.startsWith("set")) {
          String dsProperty = Introspector.decapitalize(methodName.substring(3));
          if (dsProperty.equals(propertyName)) {
            return true;
          }
        }
      }

    } catch (Exception e) {
      return false;
    }
    return false;
  }
}

```

</p>
</details>


### StandardHikariCPService 작성

이제 property 설정까지 마쳤으니 HikariCP를 이용하여 DBCP를 생성하는 로직을 작성합니다.

StandardHikariCPService class를 다음과 같이 변경합니다.

<details ><summary>StandardHikariCPService.java</summary>
<p>

```java  
/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package com.mbio.custom.hikaricp;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.List;
import java.util.concurrent.atomic.AtomicReference;

import com.codahale.metrics.MetricRegistry;
import com.zaxxer.hikari.HikariDataSource;

import org.apache.nifi.annotation.behavior.DynamicProperty;
import org.apache.nifi.annotation.documentation.CapabilityDescription;
import org.apache.nifi.annotation.documentation.Tags;
import org.apache.nifi.annotation.lifecycle.OnDisabled;
import org.apache.nifi.annotation.lifecycle.OnEnabled;
import org.apache.nifi.components.PropertyDescriptor;
import org.apache.nifi.controller.AbstractControllerService;
import org.apache.nifi.controller.ConfigurationContext;
import org.apache.nifi.processor.exception.ProcessException;
import org.apache.nifi.reporting.InitializationException;

@Tags({"DBCP", "SQL", "Database", "HikariCP", "NICE"})
@CapabilityDescription("Database connection pooling using HikariCP API")
@DynamicProperty(name = "DataSource property", value = "The value to set it to",
    description = "Property for the selected DataSource")
public class StandardHikariCPService extends AbstractControllerService implements HikariCPService {

    private AtomicReference<HikariDataSource> ds = new AtomicReference<>();

    @Override
    protected List<PropertyDescriptor> getSupportedPropertyDescriptors() {
      return ConfigUtil.getProperties();
    }
  
    @Override
    protected PropertyDescriptor getSupportedDynamicPropertyDescriptor(
        String propertyDescriptorName) {
  
      return ConfigUtil.getDynamicProperty(propertyDescriptorName);
    }
  
    /**
     * @param context the configuration context
     * @throws InitializationException if unable to create a database connection
     */
    @OnEnabled
    public void onEnabled(final ConfigurationContext context) throws InitializationException {
  
      HikariDataSource ds = new HikariDataSource();
  
      final String dsClassName = context.getProperty(ConfigUtil.DATASOURCE_CLASSNAME).getValue();
      final String userName = context.getProperty(ConfigUtil.USERNAME).getValue();
      final String password = context.getProperty(ConfigUtil.PASSWORD).getValue();
      final boolean autoCommit = context.getProperty(ConfigUtil.AUTO_COMMIT).asBoolean();
      final boolean metrics = context.getProperty(ConfigUtil.METRICS).asBoolean();
  
      ds.setDataSourceClassName(dsClassName);
      ds.setUsername(userName);
      ds.setPassword(password);
      ds.setAutoCommit(autoCommit);
  
      if (metrics) {
        ds.setMetricRegistry(new MetricRegistry());
      }
  
      context.getProperties().entrySet().parallelStream().filter(e -> e.getKey().isDynamic())
          .forEach(e -> {
            ds.addDataSourceProperty(e.getKey().getName(), e.getValue());
          });
  
      this.ds.set(ds);
    }
  
    @OnDisabled
    public void shutdown() {
      ds.get().close();
    }
  
    @Override
    public Connection getConnection() throws ProcessException {
      try {
        return ds.get().getConnection();
      }catch(SQLException e) {
        getLogger().error("Could not get connecdtion from datasources", e);
      }
      return null;
    }

}

```

</p>
</details>


여기까지 진행했으면 전체 소스는 다 완성한 것입니다.

이제 다음시간에는 정상적으로 HikariCP를 이용한 커넥션풀이 생성되는지 확인하기 위한 테스트 코드를 작성하겠습니다.


----------------
  
변경사항은 아래에서 확인할 수 있습니다.

[https://github.com/qnwlqnwlxm/HikariCPService/compare/HikariCPControllerSerivce-1...HikariCPControllerSerivce-2](https://github.com/qnwlqnwlxm/HikariCPService/compare/HikariCPControllerSerivce-1...HikariCPControllerSerivce-2)


전체소스는 아래 에서 다운로드 가능합니다.
[https://github.com/qnwlqnwlxm/HikariCPService/tree/HikariCPControllerSerivce-2](https://github.com/qnwlqnwlxm/HikariCPService/tree/HikariCPControllerSerivce-2)