(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{239:function(e,s,a){e.exports=a.p+"assets/img/maven-archetype-generate.793ed076.png"},240:function(e,s,a){e.exports=a.p+"assets/img/maven-archetype-generate-nifi.aed59f5f.png"},241:function(e,s,a){e.exports=a.p+"assets/img/maven-archetype-generate-nifi-version.66fed9e6.png"},242:function(e,s,a){e.exports=a.p+"assets/img/maven-archetype-define.79b012b5.png"},243:function(e,s,a){e.exports=a.p+"assets/img/nifi-custom-processor-tree.c8655da4.png"},244:function(e,s,a){e.exports=a.p+"assets/img/maven-build-success.3d0cccb7.png"},245:function(e,s,a){e.exports=a.p+"assets/img/nifi-myprocessor-add.0eb87444.png"},282:function(e,s,a){"use strict";a.r(s);var t=a(1),r=Object(t.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"nifi-custom-processor-프로젝트-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nifi-custom-processor-프로젝트-생성","aria-hidden":"true"}},[e._v("#")]),e._v(" NiFi Custom Processor 프로젝트 생성")]),e._v(" "),t("h2",{attrs:{id:"step-for-creating-apache-nifi-custom-processor"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#step-for-creating-apache-nifi-custom-processor","aria-hidden":"true"}},[e._v("#")]),e._v(" Step for creating Apache NiFi Custom Processor")]),e._v(" "),t("h3",{attrs:{id:"_1-maven-archetype을-통한-custom-processor-project-생성"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-maven-archetype을-통한-custom-processor-project-생성","aria-hidden":"true"}},[e._v("#")]),e._v(" 1. Maven archetype을 통한 custom processor project 생성")]),e._v(" "),t("p",[e._v("NiFi는 Processor 생성을 위한 maven archetype을 제공합니다.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("mvn archetype:generate\n")])])]),t("p",[e._v("위의 명령어를 치면 아래와 같은 화면이 표시됩니다.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(239),alt:"maven-archetype-generate"}})]),e._v(" "),t("h3",{attrs:{id:"_2-mvn-archetype-list에서-nifi-processor-프로젝트-선택"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-mvn-archetype-list에서-nifi-processor-프로젝트-선택","aria-hidden":"true"}},[e._v("#")]),e._v(" 2. mvn archetype list에서 nifi processor 프로젝트 선택")]),e._v(" "),t("p",[e._v("maven archetype list에서 filter를 nifi로 줍니다.\n"),t("img",{attrs:{src:a(240),alt:"maven-archetype-generate-nifi"}})]),e._v(" "),t("h3",{attrs:{id:"_3-nifi-버전-선택"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-nifi-버전-선택","aria-hidden":"true"}},[e._v("#")]),e._v(" 3. nifi 버전 선택")]),e._v(" "),t("p",[e._v("1.9.2버전을 기준으로 개발 예정이기 때문에 33번을 선택해줍니다.")]),e._v(" "),t("p",[t("img",{attrs:{src:a(241),alt:"maven-archetype-generate-nifi-version"}})]),e._v(" "),t("div",{staticClass:"custom-block tip"},[t("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),t("p",[e._v("위의 과정은 아래 명령어로 한번에 해도됩니다.\nmvn archetype:generate -DarchetypeGroupId=org.apache.nifi -DarchetypeArtifactId=nifi-processor-bundle-archetype -DarchetypeVersion=1.9.2 -DnifiVersion=1.9.2")])]),e._v(" "),t("h3",{attrs:{id:"_4-maven-프로젝트-속성-설정"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-maven-프로젝트-속성-설정","aria-hidden":"true"}},[e._v("#")]),e._v(" 4. maven 프로젝트 속성 설정")]),e._v(" "),t("p",[t("img",{attrs:{src:a(242),alt:"maven-archetype-define"}})]),e._v(" "),t("h3",{attrs:{id:"_5-생성-완료된-nifi-custom-processor-구조"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-생성-완료된-nifi-custom-processor-구조","aria-hidden":"true"}},[e._v("#")]),e._v(" 5. 생성 완료된 nifi custom processor 구조")]),e._v(" "),t("p",[e._v("NiFi Custom Processor archetype 생성후 Tree구조\n"),t("img",{attrs:{src:a(243),alt:"nifi-custom-processor-tree"}})]),e._v(" "),t("p",[e._v("이제 첫 번째 MyProcessor가 생성되었습니다.")]),e._v(" "),t("p",[e._v("Nifi custom processor MAVEN project는 기본적으로 "),t("a",{attrs:{href:"https://maven.apache.org/guides/mini/guide-multiple-modules.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("multi-module-project"),t("OutboundLink")],1),e._v("로 되어있습니다.")]),e._v(" "),t("p",[e._v("총 3개의 pom.xml이 생성되어 Project의 root에 parent pom.xml이 위치하고, 하위에 *-processors 프로젝트, *-nar 프로젝트에 각각 pom.xml이 생성됩니다..")]),e._v(" "),t("p",[e._v("processors 프로젝트에서 실질적인 로직을 작성하고, nar 프로젝트는 NiFi가 load할 수 있게 *.nar 파일로 묶어주는 역할을 합니다.")]),e._v(" "),t("h3",{attrs:{id:"_6-maven-build"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-maven-build","aria-hidden":"true"}},[e._v("#")]),e._v(" 6. maven build")]),e._v(" "),t("p",[e._v("프로젝트가 정상적으로 생성되었는지 확인을 위해 maven 빌드를 수행한다.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("div",{staticClass:"highlight-lines"},[t("div",{staticClass:"highlighted"},[e._v(" ")]),t("br")]),t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[e._v("mvn clean package\n")])])]),t("p",[t("img",{attrs:{src:a(244),alt:"maven-build-success"}})]),e._v(" "),t("p",[e._v("위처럼 BUILD SUCCESS가 표시되면 완료입니다.")]),e._v(" "),t("h3",{attrs:{id:"_7-nifi에-custom-processor-배포-및-nifi-시작"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-nifi에-custom-processor-배포-및-nifi-시작","aria-hidden":"true"}},[e._v("#")]),e._v(" 7. NiFi에 Custom Processor 배포 및 NiFi 시작")]),e._v(" "),t("p",[e._v("이제 NiFi에 방금 빌드한 NiFi Processor를 추가하고 NiFi를 시작합니다.")]),e._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" nifi-sample-nar/target/nifi-sample-nar-1.0-SNAPSHOT.nar "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NIFI_HOME")]),e._v("/lib\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sh")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$NIFI_HOME")]),e._v("/bin/nifi.sh start\n")])])]),t("h3",{attrs:{id:"_8-custom-processor-배포-확인"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_8-custom-processor-배포-확인","aria-hidden":"true"}},[e._v("#")]),e._v(" 8. Custom Processor 배포 확인")]),e._v(" "),t("p",[t("img",{attrs:{src:a(245),alt:"nifi-myprocessor-add"}})]),e._v(" "),t("p",[e._v("위 그림처럼 MyProcessor가 보이면 배포 성공입니다.")]),e._v(" "),t("p",[e._v("축하합니다. 첫 번째 NiFi Custom Processor를 추가했습니다.")])])}),[],!1,null,null,null);s.default=r.exports}}]);