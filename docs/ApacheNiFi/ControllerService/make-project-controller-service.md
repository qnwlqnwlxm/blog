---
prev: ./
next: ./HikariCPControllerService-1
disqus: true
---

# NiFi Custom Controller Service 프로젝트 생성

## Step for creating Apache NiFi Custom Controller Service

### 1. Maven archetype을 통한 Custom Controller Service project 생성

NiFi는 Controller Service 생성을 위한 maven archetype을 제공합니다.

```bash{1}
mvn archetype:generate
```

위의 명령어를 치면 아래와 같은 화면이 표시됩니다.

![maven-archetype-generate](../images/controller-service/maven-archetype-generate.png)

### 2. mvn archetype list에서 nifi Controller Service 프로젝트 선택

maven archetype list에서 filter를 nifi로 줍니다.
![maven-archetype-generate-nifi](../images/controller-service/maven-archetype-generate-nifi.png)

controller service를 개발할 예정이기 떄문에 2번 service bundle을 선택합니다.

### 3. nifi 버전 선택

1.9.2버전을 기준으로 개발 예정이기 때문에 29번을 선택해줍니다.

![maven-archetype-generate-nifi-version](../images/controller-service/maven-archetype-generate-nifi-version.png)

:::tip
위의 과정은 아래 명령어로 한번에 해도됩니다.
mvn archetype:generate -DarchetypeGroupId=org.apache.nifi -DarchetypeArtifactId=nifi-service-bundle-archetype -DarchetypeVersion=1.9.2 -DnifiVersion=1.9.2
:::

### 4. maven 프로젝트 속성 설정

![maven-archetype-define](../images/controller-service/maven-archetype-define.png)

### 5. 생성 완료된 nifi custom Controller Service 구조

NiFi Custom Controller Service archetype 생성후 Tree구조

![nifi-custom-service-tree](../images/controller-service/nifi-custom-service-tree.png)

이제 첫 번째 Controller Service가 생성되었습니다.

Nifi Controller Service MAVEN project는 기본적으로 [multi-module-project](https://maven.apache.org/guides/mini/guide-multiple-modules.html)로 되어있습니다.

총 5개의 pom.xml이 생성되어 Project의 root에 parent pom.xml이 위치하고, 하위에 nifi-${artifactId}, nifi-${artifactId}-nar, nifi-${artifactId}-api, nifi-${artifactId}-api-nar 프로젝트에 각각 pom.xml이 생성됩니다.

controller service는 여러 processor에서 참조하여 사용하기 때문에 로직이 변경되어도 하위 프로세서가 영향을 받지 않게 하기 위해 api프로젝트로 interface를 제공하고, 실제 로직은 nifi-${artifactId} 프로젝트에 작성합니다.

### 6. maven build

프로젝트가 정상적으로 생성되었는지 확인을 위해 생성된 프로젝트 폴더로 이동한 후 maven 빌드를 수행합니다.

```bash{1}
mvn clean package
```

![maven-build-success](../images/controller-service/maven-build-success.png)

위처럼 BUILD SUCCESS가 표시되면 완료입니다.

### 7. NiFi에 Custom controller service 배포 및 NiFi 시작

이제 NiFi에 방금 빌드한 NiFi controller service를 추가하고 NiFi를 시작합니다.

```bash
cp nifi-HikariCP-nar/target/nifi-HikariCP-nar-1.0-SNAPSHOT.nar $NIFI_HOME/lib
cp nifi-HikariCP-api-nar/target/nifi-HikariCP-api-nar-1.0-SNAPSHOT.nar $NIFI_HOME/lib
sh $NIFI_HOME/bin/nifi.sh start
```

### 8. Custom controller service 배포 확인

![nifi-StandardMyService-add](../images/controller-service/nifi-StandardMyService-add.png)

위 그림처럼 StandardMyService가 보이면 배포 성공입니다.

축하합니다. 첫 번째 NiFi Custom controller service를 추가했습니다.
