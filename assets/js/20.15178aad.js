(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{277:function(e,r,o){"use strict";o.r(r);var t=o(1),i=Object(t.a)({},(function(){var e=this,r=e.$createElement,o=e._self._c||r;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"nifi-custom-controller-service-개발-가이드"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nifi-custom-controller-service-개발-가이드","aria-hidden":"true"}},[e._v("#")]),e._v(" NiFi Custom Controller Service 개발 가이드")]),e._v(" "),o("h2",{attrs:{id:"nifi의-custom-controller-service를-만드는-이유"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#nifi의-custom-controller-service를-만드는-이유","aria-hidden":"true"}},[e._v("#")]),e._v(" NiFi의 Custom Controller Service를 만드는 이유")]),e._v(" "),o("p",[e._v("controller service는 processor에 비하면 만들어서 사용하는 경우가 적습니다.")]),e._v(" "),o("p",[e._v("공통적으로 사용하는 service는 대부분 기본적으로 제공되는 걸로 충분하기 때문입니다.")]),e._v(" "),o("p",[e._v("하지만 기본적으로 제공되는 service가 아쉬운경우, 예를 들면 기본적으로 제공되는 db connection pool 서비스는 apache common dbcp2를 기반으로 하고있는데 이보다 더 빠른 HikarCP를 사용하고 싶을 수 있습니다.")]),e._v(" "),o("p",[e._v("또는 DBCP connection pool을 기반으로한 hibernate를 사용하고 싶을때 개별 개발자가 hibernate 설정을 따로 할 필요없이 service로 작성할 수 있습니다.")]),e._v(" "),o("p",[e._v("rabbitMQ를 사용할때도 개별 processor별로 커넥션을 맺지 않고 db처럼 connection pool을 관리하고 프로세서에서는 이를 할당받아서 사용하도록 처리할 수 있습니다.")]),e._v(" "),o("p",[e._v("이런식으로 서비스를 제공하면 개별 processor 개발자는 해당 로직을 전부 구현하지 않고 단순히 service를 참조하는 것만으로 해당 기능을 사용할 수 있습니다.")])])}),[],!1,null,null,null);r.default=i.exports}}]);