(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[610],{3500:function(e,t,r){!function(){"use strict";var t={462:function(e,t,r){var a=this&&this.__assign||function(){return(a=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)};Object.defineProperty(t,"__esModule",{value:!0}),t.exportFile=void 0;var n=r(218),l=r(826),o=r(140),i=r(237),c=r(852);t.exportFile=function(e){var t=e.fileName,r=void 0===t?"table.xlsx":t,a=e.sheetNames,l=void 0===a?["sheet1"]:a,o=e.columns,i=void 0===o?[]:o,u=e.dataSource,m=void 0===u?[]:u,d=e.showHeader,g=void 0===d||d,f=e.raw,p=void 0!==f&&f,v=e.cellStyle,h=void 0===v?{}:v,b=e.headerCellStyle,y=void 0===b?{}:b,E=e.bodyCellStyle,_=void 0===E?{}:E,S=(e.useRender,{});l.forEach((function(e,t){var r=n.sameType(i[t],"Array")?i[t]:i,a=n.sameType(m[t],"Array")?m[t]:m,l=s({columns:r,dataSource:a,showHeader:g,raw:p,cellStyle:h,headerCellStyle:y,bodyCellStyle:_}).sheet;S[e]=l}));var N={SheetNames:l,Sheets:S};return c.writeFile(N,r),N};var s=function(e){var t=e.columns,r=e.dataSource,n=e.showHeader,s=e.raw,d=e.cellStyle,g=e.headerCellStyle,f=e.bodyCellStyle,p=e.useRender,v={},h=[],b=[],y=[],E=l.flattenColumns({columns:t}),_=E.columns,S=E.level;if(n){for(var N=0;N<S;N++)b.push({hpx:25});var Z=u({columns:t,headerLevel:S,cellStyle:d,headerCellStyle:g});Object.assign(v,Z.sheet),y.push.apply(y,Z.merges)}else S=0;_.forEach((function(e,t){var n=e.dataIndex||e.key;h.push({wpx:l.formatToWpx(e.width)});var u=c.utils.encode_col(t);r.forEach((function(r,l){0===t&&b.push({hpx:25});var c=o.getPathValue(r,n);if(e.render){var g=e.render(c,r,l);c=p?o.getRenderValue(g):c;var h=m({renderResult:g,colIndex:t,rowIndex:l,headerLevel:S});h&&y.push(h)}v[""+u+(S+l+1)]={t:s&&"number"==typeof c?"n":"s",v:c,s:i.getStyles(a(a({alignmentHorizontal:"left"},d),f))}}))}));var w=c.utils.encode_col(Math.max(_.length-1,0)),j=S+r.length;return v["!ref"]="A1:"+w+j,v["!cols"]=h,v["!rows"]=b,v["!merges"]=y,{sheet:v}},u=function(e){var t=e.columns,r=e.headerLevel,n=e.cellStyle,o=e.headerCellStyle,s={},u=[];return l.getHeader2dArray({columns:t,headerLevel:r}).forEach((function(e,t){e.forEach((function(e,r){var l=c.utils.encode_col(r);s[""+l+(t+1)]={t:"s",v:e.title,s:i.getStyles(a(a({fillFgColorRgb:"e9ebf0",fontBold:!0},n),o))},e.merges&&u.push(e.merges)}))})),{sheet:s,merges:u}},m=function(e){var t=e.renderResult,r=e.colIndex,a=e.rowIndex,n=e.headerLevel;if(t.props){var l=t.props,o=l.colSpan,i=l.rowSpan;if(o&&1!==o||i&&1!==i){var c=a+n,s={s:{c:r,r:c},e:{c:void 0,r:void 0}};return s.e.c=r+(o||1)-1,s.e.r=c+(i||1)-1,s}}return!1}},932:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getMergesObj=t.getColumns=t.parseFile=void 0;var a=r(852);t.parseFile=function(e){var r=e.file;return new Promise((function(e,n){var l=new FileReader,o=!!l.readAsBinaryString;l.onload=function(r){var n=r.target&&r.target.result,l=a.read(n,{type:o?"binary":"array",cellStyles:!0}),i=[];l.SheetNames.forEach((function(e){var r=l.Sheets[e],n=a.utils.sheet_to_json(r,{header:"A",blankrows:!0}),o=t.getColumns({refStr:r["!ref"],mergesArr:r["!merges"]});i.push({sheetName:e,dataSource:n,columns:o})})),e({wb:l,tables:i})},l.onerror=function(e){n(e)},o?l.readAsBinaryString(r):l.readAsArrayBuffer(r)}))},t.getColumns=function(e){var r=e.refStr,n=e.mergesArr,l=[];if(!r)return l;for(var o=t.getMergesObj(n),i=a.utils.decode_range(r).e.c+1,c=function(e){l[e]={key:a.utils.encode_col(e),title:a.utils.encode_col(e),dataIndex:a.utils.encode_col(e),mergesObj:o,render:function(t,r,a){return{children:t,props:o[e+":"+a]}}}},s=0;s<i;++s)c(s);return l},t.getMergesObj=function(e){void 0===e&&(e=[]);var t={};return e.forEach((function(e){for(var r=e.s.c,a=e.s.r,n=e.e.c,l=e.e.r,o=r;o<=n;o++)for(var i=a;i<=l;i++)t[o+":"+i]={colSpan:a===i?0:void 0,rowSpan:0};t[r+":"+a]={colSpan:n-r+1,rowSpan:l-a+1}})),t}},218:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.sameType=void 0,t.sameType=function(e,t){return"String"===t?"[object String]"===Object.prototype.toString.call(e):"Number"===t?"[object Number]"===Object.prototype.toString.call(e):"Symbol"===t?"[object Symbol]"===Object.prototype.toString.call(e):"Null"===t?"[object Null]"===Object.prototype.toString.call(e):"Undefined"===t?"[object Undefined]"===Object.prototype.toString.call(e):"Function"===t?"[object Function]"===Object.prototype.toString.call(e):"Object"===t?"[object Object]"===Object.prototype.toString.call(e):"Array"===t?"[object Array]"===Object.prototype.toString.call(e):"Boolean"===t?"[object Boolean]"===Object.prototype.toString.call(e):void 0}},237:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getStyles=void 0,t.getStyles=function(e){var t=e.fontName,n=void 0===t?"Calibri":t,l=e.fontColorRgb,o=void 0===l?"333333":l,i=e.fontBold,c=void 0!==i&&i,s=e.fillFgColorRgb,u=void 0===s?"ffffff":s,m=e.borderStyle,d=void 0===m?"thin":m,g=e.borderColorRgb,f=void 0===g?"d1d3d8":g,p=e.alignmentHorizontal,v=void 0===p?"center":p,h=e.alignmentVertical,b=void 0===h?"center":h;return{fill:{fgColor:{rgb:a(u)}},font:{name:n,color:{rgb:a(o)},bold:c},border:r({style:d,colorRgb:a(f)}),numFmt:void 0,alignment:{horizontal:v,vertical:b}}};var r=function(e){var t=e.style,r=void 0===t?"thin":t,a=e.colorRgb,n=void 0===a?"d1d3d8":a;return{top:{style:r,color:{rgb:n}},left:{style:r,color:{rgb:n}},bottom:{style:r,color:{rgb:n}},right:{style:r,color:{rgb:n}},diagonal:{style:r,color:{rgb:n}}}},a=function(e){return e.replace("#","")}},826:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.formatToWpx=t.getHeader2dArray=t.flattenColumns=void 0,t.flattenColumns=function(e){var t=e.columns,r=e.childrenField,a=void 0===r?"children":r,n=[],l=[];return function e(t,r){void 0===r&&(r=0),l[r]=!0,r+=1,t.forEach((function(t){var l=t[a];l&&l.length>0?e(l,r):n.push(t)}))}(t),{level:l.length,columns:n}},t.getHeader2dArray=function(e){var r=e.columns,a=e.headerLevel,n=e.childrenField,l=void 0===n?"children":n,o=[];return function e(r,n,i){void 0===n&&(n=0),void 0===i&&(i=0),r.reduce((function(r,n){o[i]||(o[i]=[]),o[i][r]=n;var c=r,s=n[l];if(s){e(s,r,i+1),c+=t.flattenColumns({columns:s,childrenField:l}).columns.length,o[i][r].merges={s:{c:r,r:i},e:{c:c-1,r:i}};for(var u=r+1;u<c;u++)o[i][u]=n}else if(c+=1,a-1-i>0){o[i][r].merges={s:{c:r,r:i},e:{c:r,r:a-1}};for(var m=i+1;m<a;m++)o[m]||(o[m]=[]),o[m][r]=n}return c}),n)}(r),o},t.formatToWpx=function(e){var t=e||100;return"string"==typeof t&&(t=Number(t.replace(/[^0-9]/gi,""))),t}},140:function(e,t,r){Object.defineProperty(t,"__esModule",{value:!0}),t.getRenderValue=t.getPathValue=void 0;var a=r(218);t.getPathValue=function(e,t){if(!t&&"number"!=typeof t)return"";for(var r,a=null==(r=t)?[]:Array.isArray(r)?r:[r],n=e,l=0;l<a.length;l+=1){if(!n)return"";n=n[a[l]]}return n},t.getRenderValue=function(e){var t=[],r=function e(r){if((a.sameType(r,"String")||a.sameType(r,"Number"))&&t.push(r),a.sameType(r,"Object")){var n=r.props.children;(a.sameType(n,"String")||a.sameType(n,"Number"))&&t.push(n),a.sameType(n,"Array")&&n.forEach((function(t){e(t)}))}};return e.children?r(e.children):r(e),t.join("")}},852:function(e){e.exports=r(5173)}},a={};function n(e){var r=a[e];if(void 0!==r)return r.exports;var l=a[e]={exports:{}};return t[e].call(l.exports,l,l.exports,n),l.exports}var l={};(function(){var e=l;Object.defineProperty(e,"__esModule",{value:!0}),e.exportFile=e.parseFile=void 0;var t=n(932);Object.defineProperty(e,"parseFile",{enumerable:!0,get:function(){return t.parseFile}});var r=n(462);Object.defineProperty(e,"exportFile",{enumerable:!0,get:function(){return r.exportFile}})})(),e.exports=l}()},8743:function(e,t,r){"use strict";e.exports=r(3500)},3146:function(e,t,r){"use strict";r.d(t,{Z:function(){return p}});var a=r(7294),n=r(6010),l=r(3905),o=r(4973),i=r(6742),c=r(9306),s=r(3924),u=r(1217),m=r(6146),d="blogPostTitle_GeHD",g="blogPostData_291c",f="blogPostDetailsFull_3kfx";var p=function(e){var t,r,p,v=(r=(0,c.c2)().selectMessage,function(e){var t=Math.ceil(e);return r(t,(0,o.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),h=e.children,b=e.frontMatter,y=e.metadata,E=e.truncated,_=e.isBlogPostPage,S=void 0!==_&&_,N=y.date,Z=y.formattedDate,w=y.permalink,j=y.tags,x=y.readingTime,T=y.title,k=y.editUrl,C=b.author,F=b.image,P=b.keywords,O=b.author_url||b.authorURL,A=b.author_title||b.authorTitle,M=b.author_image_url||b.authorImageURL;return a.createElement(a.Fragment,null,a.createElement(u.Z,{keywords:P,image:F}),a.createElement("article",{className:S?void 0:"margin-bottom--xl"},(p=S?"h1":"h2",a.createElement("header",null,a.createElement(p,{className:d},S?T:a.createElement(i.Z,{to:w},T)),a.createElement("div",{className:(0,n.Z)(g,"margin-vert--md")},a.createElement("time",{dateTime:N},Z),x&&a.createElement(a.Fragment,null," \xb7 ",v(x))),a.createElement("div",{className:"avatar margin-vert--md"},M&&a.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:O},a.createElement("img",{src:M,alt:C})),a.createElement("div",{className:"avatar__intro"},C&&a.createElement(a.Fragment,null,a.createElement("div",{className:"avatar__name"},a.createElement(i.Z,{href:O},C)),a.createElement("small",{className:"avatar__subtitle"},A)))))),a.createElement("div",{className:"markdown"},a.createElement(l.Zo,{components:s.Z},h)),(j.length>0||E)&&a.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",(t={},t[f]=S,t))},j.length>0&&a.createElement("div",{className:"col"},a.createElement("b",null,a.createElement(o.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),j.map((function(e){var t=e.label,r=e.permalink;return a.createElement(i.Z,{key:r,className:"margin-horiz--sm",to:r},t)}))),S&&k&&a.createElement("div",{className:"col margin-top--sm"},a.createElement(m.Z,{editUrl:k})),!S&&E&&a.createElement("div",{className:"col text--right"},a.createElement(i.Z,{to:y.permalink,"aria-label":"Read more about "+T},a.createElement("b",null,a.createElement(o.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,r){"use strict";r.d(t,{Z:function(){return g}});var a=r(7294),n=r(6010),l=r(6742),o="sidebar_2ahu",i="sidebarItemTitle_2hhb",c="sidebarItemList_2xAf",s="sidebarItem_2UVv",u="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM",d=r(4973);function g(e){var t=e.sidebar;return 0===t.items.length?null:a.createElement("nav",{className:(0,n.Z)(o,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},a.createElement("div",{className:(0,n.Z)(i,"margin-bottom--md")},t.title),a.createElement("ul",{className:c},t.items.map((function(e){return a.createElement("li",{key:e.permalink,className:s},a.createElement(l.Z,{isNavLink:!0,to:e.permalink,className:u,activeClassName:m},e.title))}))))}},9404:function(e,t,r){"use strict";r.r(t);var a=r(7294),n=r(6016),l=r(3146),o=r(6742),i=r(5601),c=r(4973),s=r(9306);t.default=function(e){var t,r=e.metadata,u=e.items,m=e.sidebar,d=r.allTagsPath,g=r.name,f=r.count,p=(t=(0,s.c2)().selectMessage,function(e){return t(e,(0,c.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:e}))}),v=(0,c.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:p(f),tagName:g});return a.createElement(n.Z,{title:v,wrapperClassName:s.kM.wrapper.blogPages,pageClassName:s.kM.page.blogTagsPostPage,searchMetadatas:{tag:"blog_tags_posts"}},a.createElement("div",{className:"container margin-vert--lg"},a.createElement("div",{className:"row"},a.createElement("aside",{className:"col col--3"},a.createElement(i.Z,{sidebar:m})),a.createElement("main",{className:"col col--7"},a.createElement("header",{className:"margin-bottom--xl"},a.createElement("h1",null,v),a.createElement(o.Z,{href:d},a.createElement(c.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page"},"View All Tags"))),u.map((function(e){var t=e.content;return a.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:!0},a.createElement(t,null))}))))))}},6146:function(e,t,r){"use strict";r.d(t,{Z:function(){return m}});var a=r(7294),n=r(4973),l=r(7462),o=r(3366),i=r(6010),c="iconEdit_2_ui",s=["className"],u=function(e){var t=e.className,r=(0,o.Z)(e,s);return a.createElement("svg",(0,l.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(c,t),"aria-hidden":"true"},r),a.createElement("g",null,a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function m(e){var t=e.editUrl;return a.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},a.createElement(u,null),a.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},4235:function(e,t,r){"use strict";r.d(t,{Z:function(){return y}});var a=r(7462),n=r(3366),l=r(7294),o=r(776),i=r(6010),c=r(4973),s=r(2263),u=r(3583),m="playgroundContainer_1E3C",d="playgroundHeader_ZeFq",g="playgroundEditor_2kyF",f="playgroundPreview_1zeG",p=["children","transformCode"];function v(e){var t=e.children;return l.createElement("div",{className:(0,i.Z)(d)},t)}function h(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(c.Z,{id:"theme.Playground.\u7ed3\u679c",description:"The result label of the live codeblocks"},"\u7ed3\u679c")),l.createElement("div",{className:f},l.createElement(o.i5,null),l.createElement(o.IF,null)))}function b(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(c.Z,{id:"theme.Playground.\u7f16\u8f91\u5668",description:"The live editor label of the live codeblocks"},"\u7f16\u8f91\u5668")),l.createElement(o.uz,{className:g}))}function y(e){var t=e.children,r=e.transformCode,i=(0,n.Z)(e,p),c=(0,s.Z)(),d=c.isClient,g=c.siteConfig.themeConfig.liveCodeBlock.playgroundPosition,f=(0,u.Z)();return l.createElement("div",{className:m},l.createElement(o.nu,(0,a.Z)({key:d,code:d?t.replace(/\n$/,""):"",transformCode:r||function(e){return e+";"},theme:f},i),"top"===g?l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(b,null)):l.createElement(l.Fragment,null,l.createElement(b,null),l.createElement(h,null))))}},6922:function(e,t,r){"use strict";var a=r(7294),n=r(8222),l=r(2464),o=r(4044),i=r(1262),c=r(3347),s=r(8743);r(7772);var u=Object.assign({React:a},a,{Button:n.Z,Table:l.Z,Upload:o.Z,InboxOutlined:c.Z,VTablePro:function(e){return a.createElement(i.Z,{fallback:a.createElement("div",null,"...")},(function(){var t=r(5386).VTablePro;return a.createElement(t,e)}))},exportFile:s.exportFile,parseFile:s.parseFile});t.Z=u},7879:function(){},6793:function(){},2085:function(){}}]);