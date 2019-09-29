# Apache NiFi

## Apache NiFi 소개

Apache NiFi는 NSA(National Security Agency)에서 Apache 재단에 기증한 Datalflow 엔진.  
특히 빅데이터 시스템처럼 전송경로가 복잡하고 실시간 처리가 중요한 곳에서 사용하기 좋은 솔루션.

## NiFi 핵심 Concept

NiFi의 핵심 디자인 컨셉은 Flow Based Programming(FBP)를 기본으로 함.  
Processor를 이용해 데이터의 수집,가공,변형을 여러 단계에 걸쳐서 할 수 있음.

### NiFi와 FBP 용어 비교

| NiFi Term          | FBP Term           | Description                                                                                                                                                         |
| ------------------ | ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| FlowFile           | Information Packet | FlowFile은 NiFi에서 데이터를 표현하는 최소 단위. Key/Value 형태의 속성(Attribute)과 0바이트 이상의 데이터(Content)를 갖는다. FlowFile을 이용해 Dataflow를 구현한다. |
| FlowFile Processor | Black Box          | FlowFile은 프로세서를 통해 데이터 라우팅, 가공, 시스템간 이동을 할 수 있다. NiFi는 약 190여개에 이르는 기본 Processor를 제공한다.                                   |
| Connection         | Bounded Buffer     | 프로세서간의 연결을 말한다. NiFi의 Connection은 FlowFile의 queue뿐만 아니라 라우팅, 처리량 제한, 우선순위 제어, 모니터링 등의 여러 기능을 제공한다.                 |
| Flow Controller    | Scheduler          | 프로세서의 실행 시점을 관리한다.                                                                                                                                    |
| Process Group      | subnet             | 업무, 기능 단위로 여러 Processor를 하나의 그룹으로 묶어서 관리할 수 있고, input/output Port를 통해 프로세스 그룹간 이동이 가능하다.                                 |

## NiFi 아키텍처

![NiFi architecture](./zero-master-node.png)
NiFi는 JAVA기반으로 작성되어 host os의 JVM 머신 위에서 동작함.  
JVM 내에서 NiFi의 주요 구성요소는 다음과 같다.

### Web Server

HTTP 기반의 UI를 제공하고 API를 컨트롤하기 위한 Web Server.

### Flow Controller

### FlowFile Repository

작성중...

### Content Repository

작성중...

### Provenance Repository

작성중...

## NiFi Cluster 아키텍처

![NiFi architecture](./zero-master-cluster.png)
작성중...

## NiFi local 설치 및 실행

### For Windows

작성중...

### For linux

작성중...

## NiFi Web UI 구성요소

작성중...
