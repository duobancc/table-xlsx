(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[514,608],{8829:function(module,__unused_webpack_exports,__webpack_require__){(function(){"use strict";var __webpack_modules__={"./src/exportFile.ts":function srcExportFileTs(__unused_webpack_module,exports,__webpack_require__){eval("\nvar __assign = (this && this.__assign) || function () {\n    __assign = Object.assign || function(t) {\n        for (var s, i = 1, n = arguments.length; i < n; i++) {\n            s = arguments[i];\n            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))\n                t[p] = s[p];\n        }\n        return t;\n    };\n    return __assign.apply(this, arguments);\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.exportFile = void 0;\nvar base_1 = __webpack_require__(/*! ./utils/base */ \"./src/utils/base.ts\");\nvar columnsUtils_1 = __webpack_require__(/*! ./utils/columnsUtils */ \"./src/utils/columnsUtils.ts\");\nvar valueUtils_1 = __webpack_require__(/*! ./utils/valueUtils */ \"./src/utils/valueUtils.ts\");\nvar cellStylesUtils_1 = __webpack_require__(/*! ./utils/cellStylesUtils */ \"./src/utils/cellStylesUtils.ts\");\nvar XLSX = __webpack_require__(/*! @pengchen/xlsx */ \"@pengchen/xlsx\");\nvar ROW_HPX = 25;\n/**\n * \u5bfc\u51fa\n * @param fileName\n * @param sheetNames\n * @param columns\n * @param dataSource\n * @param showHeader \u662f\u5426\u663e\u793a\u8868\u5934\n * @param raw \u662f\u5426\u683c\u5f0f\u5316\u503c\u7684\u7c7b\u578b\n * @param cellStyle \u5355\u5143\u683c\u6837\u5f0f\n * @param headerCellStyle \u5355\u5143\u683c\u6837\u5f0f\n * @param bodyCellStyle \u5355\u5143\u683c\u6837\u5f0f\n * @param useRender \u662f\u5426\u4f7f\u7528render\u8fd4\u56de\u7684\u503c\n */\nvar exportFile = function (_a) {\n    var _b = _a.fileName, fileName = _b === void 0 ? 'table.xlsx' : _b, _c = _a.sheetNames, sheetNames = _c === void 0 ? ['sheet1'] : _c, _d = _a.columns, columns = _d === void 0 ? [] : _d, _e = _a.dataSource, dataSource = _e === void 0 ? [] : _e, _f = _a.showHeader, showHeader = _f === void 0 ? true : _f, _g = _a.raw, raw = _g === void 0 ? false : _g, _h = _a.cellStyle, cellStyle = _h === void 0 ? {} : _h, _j = _a.headerCellStyle, headerCellStyle = _j === void 0 ? {} : _j, _k = _a.bodyCellStyle, bodyCellStyle = _k === void 0 ? {} : _k, _l = _a.useRender, useRender = _l === void 0 ? true : _l;\n    var Sheets = {};\n    sheetNames.forEach(function (sheetName, sheetIndex) {\n        var _columns = base_1.sameType(columns[sheetIndex], 'Array') ? columns[sheetIndex] : columns;\n        var _dataSource = base_1.sameType(dataSource[sheetIndex], 'Array') ? dataSource[sheetIndex] : dataSource;\n        var sheet = formatToSheet({\n            columns: _columns,\n            dataSource: _dataSource,\n            showHeader: showHeader,\n            raw: raw,\n            cellStyle: cellStyle,\n            headerCellStyle: headerCellStyle,\n            bodyCellStyle: bodyCellStyle,\n        }).sheet;\n        Sheets[sheetName] = sheet;\n    });\n    var wb = {\n        SheetNames: sheetNames,\n        Sheets: Sheets,\n    };\n    XLSX.writeFile(wb, fileName);\n    return wb;\n};\nexports.exportFile = exportFile;\n/**\n * \u8f6c\u6362\u6210sheet\u5bf9\u8c61\n */\nvar formatToSheet = function (_a) {\n    var columns = _a.columns, dataSource = _a.dataSource, showHeader = _a.showHeader, raw = _a.raw, cellStyle = _a.cellStyle, headerCellStyle = _a.headerCellStyle, bodyCellStyle = _a.bodyCellStyle, useRender = _a.useRender;\n    var sheet = {};\n    var $cols = [];\n    var $rows = [];\n    var $merges = [];\n    //\n    var _b = columnsUtils_1.flattenColumns({ columns: columns }), flatColumns = _b.columns, level = _b.level;\n    var headerLevel = level;\n    if (showHeader) {\n        for (var i = 0; i < headerLevel; i++) {\n            $rows.push({ hpx: ROW_HPX });\n        }\n        // \u8868\u5934\u4fe1\u606f\n        var headerData = getHeaderData({ columns: columns, headerLevel: headerLevel, cellStyle: cellStyle, headerCellStyle: headerCellStyle });\n        Object.assign(sheet, headerData.sheet);\n        $merges.push.apply($merges, headerData.merges);\n    }\n    else {\n        headerLevel = 0;\n    }\n    //\n    flatColumns.forEach(function (col, colIndex) {\n        var key = col.dataIndex || col.key;\n        $cols.push({ wpx: columnsUtils_1.formatToWpx(col.width) });\n        var xAxis = XLSX.utils.encode_col(colIndex);\n        dataSource.forEach(function (data, rowIndex) {\n            if (colIndex === 0) {\n                $rows.push({ hpx: ROW_HPX });\n            }\n            var value = valueUtils_1.getPathValue(data, key);\n            if (col.render) {\n                var renderResult = col.render(value, data, rowIndex);\n                value = useRender ? valueUtils_1.getRenderValue(renderResult) : value;\n                var merge = getMerge({ renderResult: renderResult, colIndex: colIndex, rowIndex: rowIndex, headerLevel: headerLevel });\n                if (merge) {\n                    $merges.push(merge);\n                }\n            }\n            sheet[\"\" + xAxis + (headerLevel + rowIndex + 1)] = {\n                t: (raw && typeof value === 'number') ? 'n' : 's',\n                v: value,\n                s: cellStylesUtils_1.getStyles(__assign(__assign({ alignmentHorizontal: 'left' }, cellStyle), bodyCellStyle)),\n            };\n        });\n    });\n    var xe = XLSX.utils.encode_col(flatColumns.length - 1);\n    var ye = headerLevel + dataSource.length;\n    sheet['!ref'] = \"A1:\" + xe + ye;\n    sheet['!cols'] = $cols;\n    sheet['!rows'] = $rows;\n    sheet['!merges'] = $merges;\n    return {\n        sheet: sheet\n    };\n};\n/**\n * \u83b7\u53d6\u8868\u5934\u6570\u636e\n */\nvar getHeaderData = function (_a) {\n    var columns = _a.columns, headerLevel = _a.headerLevel, cellStyle = _a.cellStyle, headerCellStyle = _a.headerCellStyle;\n    var sheet = {};\n    var merges = [];\n    var headerArr = columnsUtils_1.getHeader2dArray({ columns: columns, headerLevel: headerLevel });\n    headerArr.forEach(function (rowsArr, rowIndex) {\n        rowsArr.forEach(function (cols, colIndex) {\n            var xAxis = XLSX.utils.encode_col(colIndex);\n            // https://github.com/SheetJS/sheetjs#cell-object\n            sheet[\"\" + xAxis + (rowIndex + 1)] = {\n                t: 's',\n                v: cols.title,\n                s: cellStylesUtils_1.getStyles(__assign(__assign({ fillFgColorRgb: 'e9ebf0', fontBold: true }, cellStyle), headerCellStyle)),\n            };\n            if (cols.merges) {\n                merges.push(cols.merges);\n            }\n        });\n    });\n    return {\n        sheet: sheet,\n        merges: merges\n    };\n};\n/**\n * \u83b7\u53d6\u5355\u4e2a\u5408\u5e76\u4fe1\u606f\n */\nvar getMerge = function (_a) {\n    var renderResult = _a.renderResult, colIndex = _a.colIndex, rowIndex = _a.rowIndex, headerLevel = _a.headerLevel;\n    if (renderResult.props) {\n        var _b = renderResult.props, colSpan = _b.colSpan, rowSpan = _b.rowSpan;\n        if ((colSpan && colSpan !== 1) || (rowSpan && rowSpan !== 1)) {\n            var realRowIndex = rowIndex + headerLevel;\n            var merge = {\n                s: { c: colIndex, r: realRowIndex },\n                e: { c: undefined, r: undefined },\n            };\n            merge.e.c = colIndex + (colSpan || 1) - 1;\n            merge.e.r = realRowIndex + (rowSpan || 1) - 1;\n            return merge;\n        }\n    }\n    return false;\n};\n\n\n//# sourceURL=webpack://table-xlsx/./src/exportFile.ts?")},"./src/index.ts":function srcIndexTs(__unused_webpack_module,exports,__webpack_require__){eval('\nObject.defineProperty(exports, "__esModule", ({ value: true }));\nexports.exportFile = exports.parseFile = void 0;\nvar parseFile_1 = __webpack_require__(/*! ./parseFile */ "./src/parseFile.ts");\nObject.defineProperty(exports, "parseFile", ({ enumerable: true, get: function () { return parseFile_1.parseFile; } }));\nvar exportFile_1 = __webpack_require__(/*! ./exportFile */ "./src/exportFile.ts");\nObject.defineProperty(exports, "exportFile", ({ enumerable: true, get: function () { return exportFile_1.exportFile; } }));\n\n\n//# sourceURL=webpack://table-xlsx/./src/index.ts?')},"./src/parseFile.ts":function srcParseFileTs(__unused_webpack_module,exports,__webpack_require__){eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getMergesObj = exports.getColumns = exports.parseFile = void 0;\nvar XLSX = __webpack_require__(/*! @pengchen/xlsx */ \"@pengchen/xlsx\");\n/**\n * \u8bfb\u53d6\u6587\u4ef6\n */\nvar parseFile = function (_a) {\n    var file = _a.file;\n    return new Promise(function (resolve, reject) {\n        var reader = new FileReader();\n        var rABS = !!reader.readAsBinaryString;\n        reader.onload = function (e) {\n            /* Parse data */\n            var bstr = e.target && e.target.result;\n            var wb = XLSX.read(bstr, {\n                type: rABS ? 'binary' : 'array',\n                cellStyles: true\n            });\n            /* Get Tables */\n            var tables = [];\n            wb.SheetNames.forEach(function (sheetName) {\n                var ws = wb.Sheets[sheetName];\n                // https://github.com/SheetJS/sheetjs#json\n                var dataSource = XLSX.utils.sheet_to_json(ws, { header: 'A', blankrows: true });\n                var columns = exports.getColumns({\n                    refStr: ws['!ref'],\n                    mergesArr: ws['!merges'],\n                });\n                tables.push({\n                    sheetName: sheetName,\n                    dataSource: dataSource,\n                    columns: columns,\n                });\n            });\n            resolve({\n                wb: wb,\n                tables: tables,\n            });\n        };\n        reader.onerror = function (e) {\n            reject(e);\n        };\n        if (rABS)\n            reader.readAsBinaryString(file);\n        else\n            reader.readAsArrayBuffer(file);\n    });\n};\nexports.parseFile = parseFile;\n/**\n * \u751f\u6210\u5217\n */\nvar getColumns = function (_a) {\n    var refStr = _a.refStr, mergesArr = _a.mergesArr;\n    var columns = [];\n    if (!refStr) {\n        return columns;\n    }\n    var mergesObj = exports.getMergesObj(mergesArr);\n    var columnsLen = XLSX.utils.decode_range(refStr).e.c + 1;\n    var _loop_1 = function (colIndex) {\n        columns[colIndex] = {\n            key: XLSX.utils.encode_col(colIndex),\n            title: XLSX.utils.encode_col(colIndex),\n            dataIndex: XLSX.utils.encode_col(colIndex),\n            mergesObj: mergesObj,\n            render: function (value, row, rowIndex) {\n                return {\n                    children: value,\n                    props: mergesObj[colIndex + \":\" + rowIndex],\n                };\n            },\n        };\n    };\n    for (var colIndex = 0; colIndex < columnsLen; ++colIndex) {\n        _loop_1(colIndex);\n    }\n    return columns;\n};\nexports.getColumns = getColumns;\n/**\n * \u83b7\u53d6\u5408\u5e76\u9879\n */\nvar getMergesObj = function (mergesArr) {\n    if (mergesArr === void 0) { mergesArr = []; }\n    var mergesObj = {};\n    mergesArr.forEach(function (m) {\n        var msc = m.s.c;\n        var msr = m.s.r;\n        var mec = m.e.c;\n        var mer = m.e.r;\n        for (var sc = msc; sc <= mec; sc++) {\n            for (var sr = msr; sr <= mer; sr++) {\n                mergesObj[sc + \":\" + sr] = {\n                    colSpan: msr === sr ? 0 : undefined,\n                    rowSpan: 0,\n                };\n            }\n        }\n        mergesObj[msc + \":\" + msr] = {\n            colSpan: mec - msc + 1,\n            rowSpan: mer - msr + 1,\n        };\n    });\n    return mergesObj;\n};\nexports.getMergesObj = getMergesObj;\n\n\n//# sourceURL=webpack://table-xlsx/./src/parseFile.ts?")},"./src/utils/base.ts":function srcUtilsBaseTs(__unused_webpack_module,exports){eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.sameType = void 0;\n/**\n * \u5224\u65ad\u7c7b\u578b\n * @param {any} value \u9700\u8981\u6bd4\u5bf9\u7684\u503c\n * @param {string} type \u6bd4\u5bf9\u7c7b\u578b\n * @return {boolean} \u6bd4\u5bf9\u7ed3\u679c\n */\nvar sameType = function (value, type) {\n    if (type === 'String') {\n        return Object.prototype.toString.call(value) === '[object String]';\n    }\n    if (type === 'Number') {\n        return Object.prototype.toString.call(value) === '[object Number]';\n    }\n    if (type === 'Symbol') {\n        return Object.prototype.toString.call(value) === '[object Symbol]';\n    }\n    if (type === 'Null') {\n        return Object.prototype.toString.call(value) === '[object Null]';\n    }\n    if (type === 'Undefined') {\n        return Object.prototype.toString.call(value) === '[object Undefined]';\n    }\n    if (type === 'Function') {\n        return Object.prototype.toString.call(value) === '[object Function]';\n    }\n    if (type === 'Object') {\n        return Object.prototype.toString.call(value) === '[object Object]';\n    }\n    if (type === 'Array') {\n        return Object.prototype.toString.call(value) === '[object Array]';\n    }\n    if (type === 'Boolean') {\n        return Object.prototype.toString.call(value) === '[object Boolean]';\n    }\n};\nexports.sameType = sameType;\n\n\n//# sourceURL=webpack://table-xlsx/./src/utils/base.ts?")},"./src/utils/cellStylesUtils.ts":function srcUtilsCellStylesUtilsTs(__unused_webpack_module,exports){eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getStyles = void 0;\nvar getStyles = function (_a) {\n    var _b = _a.fontName, fontName = _b === void 0 ? 'Calibri' : _b, _c = _a.fontColorRgb, fontColorRgb = _c === void 0 ? '333333' : _c, _d = _a.fontBold, fontBold = _d === void 0 ? false : _d, _e = _a.fillFgColorRgb, fillFgColorRgb = _e === void 0 ? 'ffffff' : _e, _f = _a.borderStyle, borderStyle = _f === void 0 ? 'thin' : _f, _g = _a.borderColorRgb, borderColorRgb = _g === void 0 ? 'd1d3d8' : _g, _h = _a.alignmentHorizontal, alignmentHorizontal = _h === void 0 ? 'center' : _h, // left center right\n    _j = _a.alignmentVertical, // left center right\n    alignmentVertical = _j === void 0 ? 'center' : _j;\n    return {\n        fill: {\n            fgColor: { rgb: fillFgColorRgb }\n        },\n        font: {\n            name: fontName,\n            color: { rgb: fontColorRgb },\n            bold: fontBold,\n        },\n        border: getDefaultBorder({ style: borderStyle, colorRgb: borderColorRgb }),\n        numFmt: undefined,\n        alignment: {\n            horizontal: alignmentHorizontal,\n            vertical: alignmentVertical,\n        },\n    };\n};\nexports.getStyles = getStyles;\nvar getDefaultBorder = function (_a) {\n    var _b = _a.style, style = _b === void 0 ? 'thin' : _b, _c = _a.colorRgb, colorRgb = _c === void 0 ? 'd1d3d8' : _c;\n    var border = {\n        top: {\n            style: style,\n            color: {\n                rgb: colorRgb, // ARGB\n                // auto: 1,\n                // theme: '1',\n                // tint: '-0.25',\n                // index: 64\n            }\n        },\n        left: {\n            style: style,\n            color: { rgb: colorRgb }\n        },\n        bottom: {\n            style: style,\n            color: { rgb: colorRgb }\n        },\n        right: {\n            style: style,\n            color: { rgb: colorRgb }\n        },\n        diagonal: {\n            style: style,\n            color: { rgb: colorRgb }\n        }\n    };\n    return border;\n};\n\n\n//# sourceURL=webpack://table-xlsx/./src/utils/cellStylesUtils.ts?")},"./src/utils/columnsUtils.ts":function srcUtilsColumnsUtilsTs(__unused_webpack_module,exports){eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.formatToWpx = exports.getHeader2dArray = exports.flattenColumns = void 0;\n/**\n * \u6241\u5e73\u5316\u5217\n */\nvar flattenColumns = function (_a) {\n    var columns = _a.columns, _b = _a.childrenField, childrenField = _b === void 0 ? 'children' : _b;\n    var newColumns = [];\n    var level = [];\n    var flatten = function (_columns, index) {\n        if (index === void 0) { index = 0; }\n        level[index] = true;\n        index += 1;\n        _columns.forEach(function (column) {\n            var childColumns = column[childrenField];\n            if (childColumns && childColumns.length > 0) {\n                flatten(childColumns, index);\n            }\n            else {\n                newColumns.push(column);\n            }\n        });\n    };\n    flatten(columns);\n    return {\n        level: level.length,\n        columns: newColumns\n    };\n};\nexports.flattenColumns = flattenColumns;\n/**\n * \u83b7\u53d6\u8868\u5934\u4e8c\u7ef4\u6570\u7ec4\n */\nvar getHeader2dArray = function (_a) {\n    var columns = _a.columns, headerLevel = _a.headerLevel, _b = _a.childrenField, childrenField = _b === void 0 ? 'children' : _b;\n    var arr = [];\n    var deal = function (_columns, startCol, rowLevel) {\n        if (startCol === void 0) { startCol = 0; }\n        if (rowLevel === void 0) { rowLevel = 0; }\n        _columns.reduce(function (prevCol, currentColumn) {\n            if (!arr[rowLevel]) {\n                arr[rowLevel] = [];\n            }\n            arr[rowLevel][prevCol] = currentColumn;\n            var nextCol = prevCol;\n            var childColumns = currentColumn[childrenField];\n            if (childColumns) {\n                deal(childColumns, prevCol, rowLevel + 1);\n                var flatChildColumns = exports.flattenColumns({ columns: childColumns, childrenField: childrenField }).columns;\n                nextCol += flatChildColumns.length;\n                arr[rowLevel][prevCol].merges = {\n                    s: { c: prevCol, r: rowLevel },\n                    e: { c: nextCol - 1, r: rowLevel },\n                };\n                // \u8865\u5168\u503c \u8de8\u884c\u7684\u503c\n                for (var c = prevCol + 1; c < nextCol; c++) {\n                    arr[rowLevel][c] = currentColumn;\n                }\n            }\n            else {\n                nextCol += 1;\n                // \u6709\u8de8\u5217\n                if (headerLevel - 1 - rowLevel > 0) {\n                    arr[rowLevel][prevCol].merges = {\n                        s: { c: prevCol, r: rowLevel },\n                        e: { c: prevCol, r: headerLevel - 1 },\n                    };\n                    // \u8865\u5168\u503c \u8de8\u5217\u7684\u503c\n                    for (var r = rowLevel + 1; r < headerLevel; r++) {\n                        if (!arr[r]) {\n                            arr[r] = [];\n                        }\n                        arr[r][prevCol] = currentColumn;\n                    }\n                }\n            }\n            return nextCol;\n        }, startCol);\n    };\n    deal(columns);\n    return arr;\n};\nexports.getHeader2dArray = getHeader2dArray;\n/**\n * \u83b7\u53d6\u5217\u5bbd\n */\nvar formatToWpx = function (width) {\n    var wpx = width || 100;\n    if (typeof wpx === 'string') {\n        wpx = Number(wpx.replace(/[^0-9]/ig, ''));\n    }\n    return wpx;\n};\nexports.formatToWpx = formatToWpx;\n\n\n//# sourceURL=webpack://table-xlsx/./src/utils/columnsUtils.ts?")},"./src/utils/valueUtils.ts":function srcUtilsValueUtilsTs(__unused_webpack_module,exports,__webpack_require__){eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.getRenderValue = exports.getPathValue = void 0;\nvar base_1 = __webpack_require__(/*! ./base */ \"./src/utils/base.ts\");\nfunction toArray(arr) {\n    if (arr === undefined || arr === null) {\n        return [];\n    }\n    return (Array.isArray(arr) ? arr : [arr]);\n}\n/**\n * \u901a\u8fc7path\u83b7\u53d6\u503c\n */\nvar getPathValue = function (record, path) {\n    // Skip if path is empty\n    if (!path && typeof path !== 'number') {\n        return '';\n    }\n    var pathList = toArray(path);\n    var current = record;\n    for (var i = 0; i < pathList.length; i += 1) {\n        if (!current) {\n            return '';\n        }\n        var prop = pathList[i];\n        current = current[prop];\n    }\n    return current;\n};\nexports.getPathValue = getPathValue;\n/**\n * \u83b7\u53d6render\u503c\n */\nvar getRenderValue = function (renderResult) {\n    var values = [];\n    var dealChildren = function (child) {\n        if (base_1.sameType(child, 'String') || base_1.sameType(child, 'Number')) {\n            values.push(child);\n        }\n        if (base_1.sameType(child, 'Object')) {\n            var children = child.props.children;\n            if (base_1.sameType(children, 'String') || base_1.sameType(children, 'Number')) {\n                values.push(children);\n            }\n            if (base_1.sameType(children, 'Array')) {\n                children.forEach(function (_child) {\n                    dealChildren(_child);\n                });\n            }\n        }\n    };\n    if (renderResult.children) {\n        dealChildren(renderResult.children);\n    }\n    else {\n        dealChildren(renderResult);\n    }\n    return values.join('');\n};\nexports.getRenderValue = getRenderValue;\n\n\n//# sourceURL=webpack://table-xlsx/./src/utils/valueUtils.ts?")},"@pengchen/xlsx":function(e){e.exports=__webpack_require__(5173)}},__webpack_module_cache__={};function __nested_webpack_require_21689__(e){var n=__webpack_module_cache__[e];if(void 0!==n)return n.exports;var r=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(r.exports,r,r.exports,__nested_webpack_require_21689__),r.exports}var __webpack_exports__=__nested_webpack_require_21689__("./src/index.ts");module.exports=__webpack_exports__})()},3616:function(e,n,r){"use strict";r.r(n),r.d(n,{default:function(){return G}});var t=r(7294),a=r(3905),l=r(2263),o=r(6291),s=r(6016),i=r(7462),c=r(3366),u=r(6010),d=r(9306),m=r(1839),_=r(3783),p=r(7898),b=r(6742),v=r(3919),h=r(5537),f=function(e){return t.createElement("svg",(0,i.Z)({width:"20",height:"20","aria-hidden":"true"},e),t.createElement("g",{fill:"#7a7a7a"},t.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),t.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))},g=r(4478),x=r(8617),y=r(4973),S="sidebar_15mo",C="sidebarWithHideableNavbar_267A",w="sidebarHidden_2kNb",k="sidebarLogo_3h0W",E="menu_Bmed",I="menuLinkText_2aKo",R="menuWithAnnouncementBar_2WvA",L="collapseSidebarButton_1CGd",N="collapseSidebarButtonIcon_3E-R",F="sidebarMenuIcon_fgN0",j="sidebarMenuCloseIcon_1lpH",A=["items"],T=["item","onItemClick","collapsible","activePath"],Z=["item","onItemClick","activePath","collapsible"],O=function e(n,r){return"link"===n.type?(0,d.Mg)(n.href,r):"category"===n.type&&n.items.some((function(n){return e(n,r)}))},P=(0,t.memo)((function(e){var n=e.items,r=(0,c.Z)(e,A);return n.map((function(e,n){return t.createElement(U,(0,i.Z)({key:n,item:e},r))}))}));function U(e){switch(e.item.type){case"category":return t.createElement(M,e);case"link":default:return t.createElement(H,e)}}function M(e){var n,r=e.item,a=e.onItemClick,l=e.collapsible,o=e.activePath,s=(0,c.Z)(e,T),m=r.items,_=r.label,p=O(r,o),b=(0,d.D9)(p),v=(0,t.useState)((function(){return!!l&&(!p&&r.collapsed)})),h=v[0],f=v[1],g=(0,t.useRef)(null),x=(0,t.useState)(void 0),y=x[0],S=x[1],C=function(e){var n;void 0===e&&(e=!0),S(e?(null==(n=g.current)?void 0:n.scrollHeight)+"px":void 0)};(0,t.useEffect)((function(){p&&!b&&h&&f(!1)}),[p,b,h]);var w=(0,t.useCallback)((function(e){e.preventDefault(),y||C(),setTimeout((function(){return f((function(e){return!e}))}),100)}),[y]);return 0===m.length?null:t.createElement("li",{className:(0,u.Z)("menu__list-item",{"menu__list-item--collapsed":h})},t.createElement("a",(0,i.Z)({className:(0,u.Z)("menu__link",(n={"menu__link--sublist":l,"menu__link--active":l&&p},n[I]=!l,n)),onClick:l?w:void 0,href:l?"#":void 0},s),_),t.createElement("ul",{className:"menu__list",ref:g,style:{height:y},onTransitionEnd:function(){h||C(!1)}},t.createElement(P,{items:m,tabIndex:h?"-1":"0",onItemClick:a,collapsible:l,activePath:o})))}function H(e){var n=e.item,r=e.onItemClick,a=e.activePath,l=(e.collapsible,(0,c.Z)(e,Z)),o=n.href,s=n.label,d=O(n,a);return t.createElement("li",{className:"menu__list-item",key:s},t.createElement(b.Z,(0,i.Z)({className:(0,u.Z)("menu__link",{"menu__link--active":d}),to:o},(0,v.Z)(o)&&{isNavLink:!0,exact:!0,onClick:r},l),(0,v.Z)(o)?s:t.createElement("span",null,s,t.createElement(x.Z,null))))}function B(e){var n=e.onClick;return t.createElement("button",{type:"button",title:(0,y.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,u.Z)("button button--secondary button--outline",L),onClick:n},t.createElement(f,{className:N}))}function X(e){var n=e.responsiveSidebarOpened,r=e.onClick;return t.createElement("button",{"aria-label":n?(0,y.I)({id:"theme.docs.sidebar.responsiveCloseButtonLabel",message:"Close menu",description:"The ARIA label for close button of mobile doc sidebar"}):(0,y.I)({id:"theme.docs.sidebar.responsiveOpenButtonLabel",message:"Open menu",description:"The ARIA label for open button of mobile doc sidebar"}),"aria-haspopup":"true",className:"button button--secondary button--sm menu__button",type:"button",onClick:r},n?t.createElement("span",{className:(0,u.Z)(F,j)},"\xd7"):t.createElement(g.Z,{className:F,height:24,width:24}))}var q=function(e){var n,r,a=e.path,l=e.sidebar,o=e.sidebarCollapsible,s=void 0===o||o,i=e.onCollapse,c=e.isHidden,b=function(){var e=(0,d.nT)().isClosed,n=(0,t.useState)(!e),r=n[0],a=n[1];return(0,p.Z)((function(n){var r=n.scrollY;e||a(0===r)})),r}(),v=(0,d.LU)(),f=v.navbar.hideOnScroll,g=v.hideableSidebar,x=(0,d.nT)().isClosed,I=function(){var e=(0,t.useState)(!1),n=e[0],r=e[1];(0,m.Z)(n);var a=(0,_.Z)();return(0,t.useEffect)((function(){a===_.D.desktop&&r(!1)}),[a]),{showResponsiveSidebar:n,closeResponsiveSidebar:(0,t.useCallback)((function(e){e.target.blur(),r(!1)}),[r]),toggleResponsiveSidebar:(0,t.useCallback)((function(){r((function(e){return!e}))}),[r])}}(),L=I.showResponsiveSidebar,N=I.closeResponsiveSidebar,F=I.toggleResponsiveSidebar;return t.createElement("div",{className:(0,u.Z)(S,(n={},n[C]=f,n[w]=c,n))},f&&t.createElement(h.Z,{tabIndex:-1,className:k}),t.createElement("nav",{className:(0,u.Z)("menu","menu--responsive","thin-scrollbar",E,(r={"menu--show":L},r[R]=!x&&b,r)),"aria-label":(0,y.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Sidebar navigation",description:"The ARIA label for documentation menu"})},t.createElement(X,{responsiveSidebarOpened:L,onClick:F}),t.createElement("ul",{className:"menu__list"},t.createElement(P,{items:l,onItemClick:N,collapsible:s,activePath:a}))),g&&t.createElement(B,{onClick:i}))},W=r(3924),D=r(4608),V=r(5977),$={docPage:"docPage_31aa",docMainContainer:"docMainContainer_3ufF",docMainContainerEnhanced:"docMainContainerEnhanced_3NYZ",docSidebarContainer:"docSidebarContainer_3Kbt",docSidebarContainerHidden:"docSidebarContainerHidden_3pA8",collapsedDocSidebar:"collapsedDocSidebar_2JMH",expandSidebarButtonIcon:"expandSidebarButtonIcon_1naQ",docItemWrapperEnhanced:"docItemWrapperEnhanced_2vyJ"};function z(e){var n,r,o,i,c,m=e.currentDocRoute,_=e.versionMetadata,p=e.children,b=(0,l.Z)(),v=b.siteConfig,h=b.isClient,g=_.pluginId,x=_.version,S=function(e){var n,r=e.versionMetadata,t=e.currentDocRoute,a=r.permalinkToSidebar,l=r.docsSidebars,o=a[t.path]||a[(n=t.path,n.endsWith("/")?n:n+"/")]||a[function(e){return e.endsWith("/")?e.slice(0,-1):e}(t.path)];return{sidebar:l[o],sidebarName:o}}({versionMetadata:_,currentDocRoute:m}),C=S.sidebarName,w=S.sidebar,k=(0,t.useState)(!1),E=k[0],I=k[1],R=(0,t.useState)(!1),L=R[0],N=R[1],F=(0,t.useCallback)((function(){L&&N(!1),I(!E)}),[L]);return t.createElement(s.Z,{key:h,wrapperClassName:d.kM.wrapper.docPages,pageClassName:d.kM.page.docPage,searchMetadatas:{version:x,tag:(0,d.os)(g,x)}},t.createElement("div",{className:$.docPage},w&&t.createElement("aside",{className:(0,u.Z)($.docSidebarContainer,(n={},n[$.docSidebarContainerHidden]=E,n)),onTransitionEnd:function(e){e.currentTarget.classList.contains($.docSidebarContainer)&&E&&N(!0)}},t.createElement(q,{key:C,sidebar:w,path:m.path,sidebarCollapsible:null==(r=null==(o=v.themeConfig)?void 0:o.sidebarCollapsible)||r,onCollapse:F,isHidden:L}),L&&t.createElement("div",{className:$.collapsedDocSidebar,title:(0,y.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,y.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:F,onClick:F},t.createElement(f,{className:$.expandSidebarButtonIcon}))),t.createElement("main",{className:(0,u.Z)($.docMainContainer,(i={},i[$.docMainContainerEnhanced]=E||!w,i))},t.createElement("div",{className:(0,u.Z)("container padding-top--md padding-bottom--lg",$.docItemWrapper,(c={},c[$.docItemWrapperEnhanced]=E,c))},t.createElement(a.Zo,{components:W.Z},p)))))}var G=function(e){var n=e.route.routes,r=e.versionMetadata,a=e.location,l=n.find((function(e){return(0,V.LX)(a.pathname,e)}));return l?t.createElement(z,{currentDocRoute:l,versionMetadata:r},(0,o.Z)(n,{versionMetadata:r})):t.createElement(D.default,e)}},4608:function(e,n,r){"use strict";r.r(n);var t=r(7294),a=r(6016),l=r(4973);n.default=function(){return t.createElement(a.Z,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})},t.createElement("main",{className:"container margin-vert--xl"},t.createElement("div",{className:"row"},t.createElement("div",{className:"col col--6 col--offset-3"},t.createElement("h1",{className:"hero__title"},t.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),t.createElement("p",null,t.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),t.createElement("p",null,t.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."))))))}},4235:function(e,n,r){"use strict";r.d(n,{Z:function(){return g}});var t=r(7462),a=r(3366),l=r(7294),o=r(776),s=r(6010),i=r(4973),c=r(2263),u=r(3583),d="playgroundContainer_1E3C",m="playgroundHeader_ZeFq",_="playgroundEditor_2kyF",p="playgroundPreview_1zeG",b=["children","transformCode"];function v(e){var n=e.children;return l.createElement("div",{className:(0,s.Z)(m)},n)}function h(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(i.Z,{id:"theme.Playground.result",description:"The result label of the live codeblocks"},"Result")),l.createElement("div",{className:p},l.createElement(o.i5,null),l.createElement(o.IF,null)))}function f(){return l.createElement(l.Fragment,null,l.createElement(v,null,l.createElement(i.Z,{id:"theme.Playground.liveEditor",description:"The live editor label of the live codeblocks"},"Live Editor")),l.createElement(o.uz,{className:_}))}function g(e){var n=e.children,r=e.transformCode,s=(0,a.Z)(e,b),i=(0,c.Z)(),m=i.isClient,_=i.siteConfig.themeConfig.liveCodeBlock.playgroundPosition,p=(0,u.Z)();return l.createElement("div",{className:d},l.createElement(o.nu,(0,t.Z)({key:m,code:m?n.replace(/\n$/,""):"",transformCode:r||function(e){return e+";"},theme:p},s),"top"===_?l.createElement(l.Fragment,null,l.createElement(h,null),l.createElement(f,null)):l.createElement(l.Fragment,null,l.createElement(f,null),l.createElement(h,null))))}},6922:function(e,n,r){"use strict";var t=r(7294),a=r(2464),l=r(4044),o=r(1262),s=r(3347),i=r(8829);r(7772);var c=Object.assign({React:t},t,{Table:a.Z,Upload:l.Z,InboxOutlined:s.Z,VTablePro:function(e){return t.createElement(o.Z,{fallback:t.createElement("div",null,"...")},(function(){var n=r(5386).VTablePro;return t.createElement(n,e)}))},exportFile:i.exportFile,parseFile:i.parseFile});n.Z=c},7879:function(){},6793:function(){},2085:function(){}}]);