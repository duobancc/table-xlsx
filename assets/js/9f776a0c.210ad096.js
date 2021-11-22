"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[375],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||a;return n?r.createElement(f,c(c({ref:t},s),{},{components:n})):r.createElement(f,c({ref:t},s))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var u=2;u<a;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1257:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return d}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),c=["components"],i={sidebar_position:6},l="\u5927\u6570\u636e\u91cf-\u5bfc\u51fa",u={unversionedId:"tutorial-extras/vt-large-data",id:"tutorial-extras/vt-large-data",isDocsHomePage:!1,title:"\u5927\u6570\u636e\u91cf-\u5bfc\u51fa",description:"`jsx live",source:"@site/docs/tutorial-extras/vt-large-data.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/vt-large-data",permalink:"/table-xlsx/docs/tutorial-extras/vt-large-data",editUrl:"https://github.com/PengChen96/table-xlsx/edit/master/website/docs/tutorial-extras/vt-large-data.md",version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"\u4e0d\u663e\u793a\u8868\u5934-\u5bfc\u51fa",permalink:"/table-xlsx/docs/tutorial-extras/show-header"}},s=[],p={toc:s};function d(e){var t=e.components,n=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u5927\u6570\u636e\u91cf-\u5bfc\u51fa"},"\u5927\u6570\u636e\u91cf-\u5bfc\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyComponent() {\n\n  const COL_NUM = 25;\n  const DATA_NUM = 1000;\n  const getColumns = (colNum = COL_NUM) => {\n    const columns = [];\n    for (let i = 0; i < colNum; i++) {\n      columns.push({\n        title: `\u6807\u9898${i}`,\n        dataIndex: `title${i}`,\n        key: `title${i}`,\n        width: 120\n      });\n    }\n    return columns;\n  }\n  const getDataSource = (colNum = COL_NUM, dataNum = DATA_NUM) => {\n    const dataSource = [];\n    for (let r = 0; r < dataNum; r++) {\n      let row = {};\n      for (let c = 0; c < colNum; c++) {\n        row[`title${c}`] = `\u5185\u5bb9${r}:${c}`;\n      }\n      dataSource.push(row);\n    }\n    return dataSource;\n  }\n\n  const columns = getColumns();\n  const dataSource = getDataSource();\n  const onExportFileClick = () => {\n    exportFile({\n      columns: columns,\n      dataSource: dataSource,\n    });\n  };\n  return (\n    <div>\n      <button onClick={() => onExportFileClick()}>export</button>\n      <div style={{marginTop: 20}}>\n        <VTablePro\n          dataSource={dataSource}\n          columns={columns}\n          bordered\n          scroll={{x: COL_NUM*120, y: 300}}\n        />\n      </div>\n    </div>\n  );\n}\n")))}d.isMDXComponent=!0}}]);