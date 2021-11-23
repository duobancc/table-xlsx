"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[806],{3905:function(n,e,t){t.d(e,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),u=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},s=function(n){var e=u(n.components);return r.createElement(c.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,s=l(n,["components","mdxType","originalType","parentName"]),p=u(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?r.createElement(f,i(i({ref:e},s),{},{components:t})):r.createElement(f,i({ref:e},s))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=p;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var u=2;u<a;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}p.displayName="MDXCreateElement"},9996:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return u},toc:function(){return s},default:function(){return p}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:2},c="Grouping Table Head",u={unversionedId:"tutorial-extras/grouping-columns",id:"tutorial-extras/grouping-columns",isDocsHomePage:!1,title:"Grouping Table Head",description:"`jsx live",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-extras/grouping-columns.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/grouping-columns",permalink:"/table-xlsx/en/docs/tutorial-extras/grouping-columns",editUrl:"https://github.com/PengChen96/table-xlsx/edit/master/website/docs/tutorial-extras/grouping-columns.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"colSpan and rowSpan",permalink:"/table-xlsx/en/docs/tutorial-extras/colspan-rowspan"},next:{title:"Set Style",permalink:"/table-xlsx/en/docs/tutorial-extras/export-style"}},s=[],d={toc:s};function p(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"grouping-table-head"},"Grouping Table Head"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyComponent() {\n\n  const columns = [\n    {\n    title: 'Name',\n    dataIndex: 'name',\n    key: 'name',\n    width: 100,\n    },\n    {\n      title: 'Other',\n      children: [\n        {\n          title: 'Age',\n          dataIndex: 'age',\n          key: 'age',\n          width: 150,\n        },\n        {\n          title: 'Address',\n          children: [\n            {\n              title: 'Street',\n              dataIndex: 'street',\n              key: 'street',\n              width: 150,\n            },\n            {\n              title: 'Block',\n              children: [\n                {\n                  title: 'Building',\n                  dataIndex: 'building',\n                  key: 'building',\n                  width: 100,\n                },\n                {\n                  title: 'Door No.',\n                  dataIndex: 'number',\n                  key: 'number',\n                  width: 100,\n                },\n              ],\n            },\n          ],\n        },\n      ],\n    },\n    {\n      title: 'Company',\n      children: [\n        {\n          title: 'Company Address',\n          dataIndex: 'companyAddress',\n          key: 'companyAddress',\n          width: 200,\n        },\n        {\n          title: 'Company Name',\n          dataIndex: 'companyName',\n          key: 'companyName',\n        },\n      ],\n    },\n    {\n      title: 'Gender',\n      dataIndex: 'gender',\n      key: 'gender',\n      width: 80,\n    },\n  ];\n    \n  const dataSource = [];\n  for (let i = 0; i < 3; i++) {\n    dataSource.push({\n      key: i,\n      name: 'John Brown',\n      age: i + 1,\n      street: 'Lake Park',\n      building: 'C',\n      number: 2035,\n      companyAddress: 'Lake Street 42',\n      companyName: 'SoftLake Co',\n      gender: 'M',\n    });\n  }\n\n  const onExportFileClick = () => {\n    exportFile({\n      columns: columns,\n      dataSource: dataSource,\n    });\n  };\n  return (\n    <div>\n    <button onClick={() => onExportFileClick()}>export</button>\n    <div>\n      <Table\n        style={{marginTop: 20}}\n        dataSource={dataSource}\n        columns={columns}\n        bordered\n        size={'small'}\n        pagination={false}\n      />\n    </div>\n    </div>\n  );\n\n}\n")))}p.isMDXComponent=!0}}]);