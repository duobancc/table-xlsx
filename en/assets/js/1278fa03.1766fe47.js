"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[515],{3905:function(n,e,t){t.d(e,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function i(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function l(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},a=Object.keys(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);for(r=0;r<a.length;r++)t=a[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var c=r.createContext({}),s=function(n){var e=r.useContext(c),t=e;return n&&(t="function"==typeof n?n(e):i(i({},e),n)),t},p=function(n){var e=s(n.components);return r.createElement(c.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(n,e){var t=n.components,o=n.mdxType,a=n.originalType,c=n.parentName,p=l(n,["components","mdxType","originalType","parentName"]),d=s(t),m=o,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return t?r.createElement(f,i(i({ref:e},p),{},{components:t})):r.createElement(f,i({ref:e},p))}));function m(n,e){var t=arguments,o=e&&e.mdxType;if("string"==typeof n||o){var a=t.length,i=new Array(a);i[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=n,l.mdxType="string"==typeof n?n:o,i[1]=l;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},3836:function(n,e,t){t.r(e),t.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return p},default:function(){return d}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),i=["components"],l={sidebar_position:1},c="colSpan and rowSpan",s={unversionedId:"tutorial-extras/colspan-rowspan",id:"tutorial-extras/colspan-rowspan",isDocsHomePage:!1,title:"colSpan and rowSpan",description:"`jsx live",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/tutorial-extras/colspan-rowspan.md",sourceDirName:"tutorial-extras",slug:"/tutorial-extras/colspan-rowspan",permalink:"/table-xlsx/en/docs/tutorial-extras/colspan-rowspan",editUrl:"https://github.com/PengChen96/table-xlsx/edit/master/website/docs/tutorial-extras/colspan-rowspan.md",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"parseFile",permalink:"/table-xlsx/en/docs/tutorial-api/parse-file-api"},next:{title:"Grouping Table Head",permalink:"/table-xlsx/en/docs/tutorial-extras/grouping-columns"}},p=[],u={toc:p};function d(n){var e=n.components,t=(0,o.Z)(n,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"colspan-and-rowspan"},"colSpan and rowSpan"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx",metastring:"live",live:!0},"function MyComponent() {\n\n  const renderContent = (value, row, index) => {\n    const obj = {\n      children: value,\n      props: {},\n    };\n    if (index === 4) {\n      obj.props.colSpan = 0;\n    }\n    return obj;\n  };\n  \n  const columns = [\n    {\n      title: 'Name',\n      dataIndex: 'name',\n      render: (text, row, index) => {\n        if (index < 4) {\n          return <a>{text}</a>;\n        }\n        return {\n          children: <a>{text}</a>,\n          props: {\n            colSpan: 5,\n          },\n        };\n      },\n    },\n    {\n      title: 'Age',\n      dataIndex: 'age',\n      render: renderContent,\n    },\n    {\n      title: 'Home phone',\n      colSpan: 2,\n      dataIndex: 'tel',\n      render: (value, row, index) => {\n        const obj = {\n          children: value,\n          props: {},\n        };\n        if (index === 2) {\n          obj.props.rowSpan = 2;\n        }\n        // These two are merged into above cell\n        if (index === 3) {\n          obj.props.rowSpan = 0;\n        }\n        if (index === 4) {\n          obj.props.colSpan = 0;\n        }\n        return obj;\n      },\n    },\n    {\n      title: 'Phone',\n      colSpan: 0,\n      dataIndex: 'phone',\n      render: renderContent,\n    },\n    {\n      title: 'Address',\n      dataIndex: 'address',\n      render: renderContent,\n    },\n  ];\n  \n  const dataSource = [\n    {\n      key: '1',\n      name: 'John Brown',\n      age: 32,\n      tel: '0571-22098909',\n      phone: 18889898989,\n      address: 'New York No. 1 Lake Park',\n    },\n    {\n      key: '2',\n      name: 'Jim Green',\n      tel: '0571-22098333',\n      phone: 18889898888,\n      age: 42,\n      address: 'London No. 1 Lake Park',\n    },\n    {\n      key: '3',\n      name: 'Joe Black',\n      age: 32,\n      tel: '0575-22098909',\n      phone: 18900010002,\n      address: 'Sidney No. 1 Lake Park',\n    },\n    {\n      key: '4',\n      name: 'Jim Red',\n      age: 18,\n      tel: '0575-22098909',\n      phone: 18900010002,\n      address: 'London No. 2 Lake Park',\n    },\n    {\n      key: '5',\n      name: 'Jake White',\n      age: 18,\n      tel: '0575-22098909',\n      phone: 18900010002,\n      address: 'Dublin No. 2 Lake Park',\n    },\n  ];\n\n  const onExportFileClick = () => {\n    exportFile({\n      columns: columns,\n      dataSource: dataSource,\n    });\n  };\n  return (\n    <div>\n    <button onClick={() => onExportFileClick()}>export</button>\n    <div>\n      <Table\n        style={{marginTop: 20}}\n        dataSource={dataSource}\n        columns={columns}\n        bordered\n        size={'small'}\n        pagination={false}\n      />\n    </div>\n    </div>\n  );\n\n}\n")))}d.isMDXComponent=!0}}]);