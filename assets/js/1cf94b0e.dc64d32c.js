"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[533],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6555:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={sidebar_position:5},s="\u4e0d\u663e\u793a\u8868\u5934-\u5bfc\u51fa",c={unversionedId:"tutorial-extras/show-header",id:"tutorial-extras/show-header",isDocsHomePage:!1,title:"\u4e0d\u663e\u793a\u8868\u5934-\u5bfc\u51fa",description:"\u8bbe\u7f6eshowHeader\u4e0d\u663e\u793a\u8868\u5934",source:"@site/docs/tutorial-extras/show-header.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/show-header",permalink:"/table-xlsx/docs/tutorial-extras/show-header",editUrl:"https://github.com/PengChen96/table-xlsx/edit/master/website/docs/tutorial-extras/show-header.md",version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"tutorialSidebar",previous:{title:"\u591asheet\u9875-\u5bfc\u51fa",permalink:"/table-xlsx/docs/tutorial-extras/multi-sheet"},next:{title:"\u5927\u6570\u636e\u91cf-\u5bfc\u51fa",permalink:"/table-xlsx/docs/tutorial-extras/vt-large-data"}},u=[],p={toc:u};function d(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u4e0d\u663e\u793a\u8868\u5934-\u5bfc\u51fa"},"\u4e0d\u663e\u793a\u8868\u5934-\u5bfc\u51fa"),(0,a.kt)("p",null,"\u8bbe\u7f6eshowHeader\u4e0d\u663e\u793a\u8868\u5934"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"// import { Button, Table } from 'antd';\n// import { exportFile } from 'table-xlsx';\nfunction MyComponent() {\n\n  const dataSource = [\n    {\n      key: '1',\n      name: '\u80e1\u5f66\u658c',\n      age: 32,\n      address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n    },\n    {\n      key: '2',\n      name: '\u80e1\u5f66\u7956',\n      age: 42,\n      address: '\u897f\u6e56\u533a\u6e56\u5e95\u516c\u56ed1\u53f7',\n    },\n  ];\n\n  const columns = [\n    {\n      title: '\u59d3\u540d',\n      dataIndex: 'name',\n      key: 'name',\n    },\n    {\n      title: '\u5e74\u9f84',\n      dataIndex: 'age',\n      key: 'age',\n    },\n    {\n      title: '\u4f4f\u5740',\n      dataIndex: 'address',\n      key: 'address',\n    },\n  ];\n  const onExportFileClick = () => {\n    exportFile({\n      showHeader: false,\n      columns: columns,\n      dataSource: dataSource,\n    });\n  };\n  return (\n    <div>\n      <Button onClick={() => onExportFileClick()}>export</Button>\n      <div>\n        <Table\n          style={{marginTop: 20}}\n          dataSource={dataSource}\n          columns={columns}\n          bordered\n          size={'small'}\n          pagination={false}\n        />\n      </div>\n    </div>\n  );\n}\n")))}d.isMDXComponent=!0}}]);