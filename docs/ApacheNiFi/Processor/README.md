---
prev: ../
next: ./make-project
disqus: true
---

# NiFi Custom Processor 개발 가이드

## NiFi의 Custom Processor를 만드는 이유

### 이유 1. 아쉬움

NiFi로 Logic을 작성하다보면 수백여개의 기본 Processor를 제공하지만 공통적인 기능을 컴포넌트화 했기 때문에 비즈니스 환경에 따라 아쉬운 부분이 있습니다.

간단한 예를 들면, 내부 API를 호출 할때 특정 토큰 값을 생성해서 전달해야 할수 있습니다. API호출 프로세서에 토큰 생성 로직을 포함하면 API 호출 Processor하나로 처리가 되지만, 아니면 토큰을 만들기 위한 여러 Processor를 생성해야합니다.

### 이유 2. 복잡도 증가

기본으로 제공되는 프로세서는 훌륭하지만, 이것만으로 Logic을 작성하다보면 점점 비대해져가는 Dataflow를 볼 수 있습니다. ProcessGroup이라는 모듈화 방법을 제공하지만 flow가 거대해질 수록 debug가 어렵고 FlowFile의 추적이 어려워 집니다. 이러한 단점을 Custom Processor 개발을 통해 해결 할 수 있습니다.

### 이유 3. Well Structured Framework

특히, 자바 개발자라면 "아.. 이건 자바로 짜면 바로 되는데" 하는 생각이 드는 순간이 자주 있습니다. NiFi는 JAVA기반으로 작성되었고, JAVA 개발자를 위한 well structured된 framework를 제공합니다.

Processor의 생성/시작/실행/종료/삭제 시점에 대해 ThreadPool을 분리하여 제공하여 thread-safe하게만 작성하면, multi-thread 프로세서를 쉽게 만들 수 있습니다.

추가로 TDD를 따르는 개발자를 위해 훌륭한 Unit Test 환경을 제공합니다. Unit Test단계에서 NiFi Cluster 환경설정, runtime thread count 설정과 함께 테스트할 수 있습니다. thread-safe하지 않게 작성했다면, 이 단계에서 문제를 발견할 수 있습니다.

::: tip
JAVA개발자 외에도 Clojure, ECMAScript, Groovy, lua, python, ruby개발자를 위한 ExecuteScript Processor를 제공합니다. JAVA Framework가 제공하는 만큼 대형 Processor 제작은 어렵지만, 간단한 처리를 스크립트를 이용해서도 할 수 있습니다.
:::
