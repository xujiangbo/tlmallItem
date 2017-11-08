(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control104_PuEuF8: function (elem) {},
    doAction_uiControl90_IPmdwU: function (data, elem) {
      if (data.eventType == 'click') {
        ysp.customHelper.back();
      }if (data.eventType == 'save1') {
        $(elem).click();
      }
    },
    getTemplate_uiControl90_IPmdwU: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CommonHeader } from \'ysp-custom-components\';\nexport default class extends Component {\n\trender() {\n\t\tvar title = "\u516C\u6587\u5BA1\u6279\u5355";\n\t\treturn (\n\t\t\t<CommonHeader\n\t\t\t\tdata={{ centerText: title && title }}\n\t\t\t\tbackIsShow={true}\n\t\t\t\teditIsShow={true}\n\t\t\t\trightText=\'\u4FDD\u5B58\'\n\t\t\t\tsave={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'save1\'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t\tback={(e) => {\n\t\t\t\t\tvar handler = this.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'click\'\n\t\t\t\t\t\t})\n\t\t\t\t\t}\n\t\t\t\t}}\n\t\t\t/>\n\t\t)\n\t}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class() {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n\t}\n\n\t_createClass(_class, [{\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this2 = this;\n\n\t\t\tvar title = "\u516C\u6587\u5BA1\u6279\u5355";\n\t\t\treturn React.createElement(_yspCustomComponents.CommonHeader, {\n\t\t\t\tdata: { centerText: title && title },\n\t\t\t\tbackIsShow: true,\n\t\t\t\teditIsShow: true,\n\t\t\t\trightText: \'\\u4FDD\\u5B58\',\n\t\t\t\tsave: function save(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'save1\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t},\n\t\t\t\tback: function back(e) {\n\t\t\t\t\tvar handler = _this2.props.customHandler;\n\t\t\t\t\tif (handler) {\n\t\t\t\t\t\thandler({\n\t\t\t\t\t\t\teventType: \'click\'\n\t\t\t\t\t\t});\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t});\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control99_sLORzW: function (elem) {
      if (!elem) {
        return;
      }var doc = elem.ownerDocument;var data = {};var title = doc.querySelector('p.bt').textContent;var numbering = doc.querySelector('p.bh span').textContent;data.title = title;data.numbering = numbering;var ddddsadf = 0;return data;
    },
    doAction_uiControl87_xuKO3S: function (data, elem) {},
    getTemplate_uiControl87_xuKO3S: function () {
      var selfTemplate = 'module.exports = React.createClass({\n  render: function() {\n    var data = this.props.data.customData||{};\n    var title = data.title||"";\n    var numbering = data.numbering||"";\n    return (\n      <div>\n        <div className="ysp-manager-audit-title">\n        \t<div className="ysp-manager-audit-main-title">{title}</div>\n          <div className="ysp-manager-audit-subtitle">\n            {/*<span>\u7F16\u53F7\uFF1A</span>\n            <span>{numbering}</span>*/}\n          </div>\n        </div>\n      </div>\n    )\n  }\n});';
      return '"use strict";\n\nmodule.exports = React.createClass({\n  displayName: "exports",\n\n  render: function render() {\n    var data = this.props.data.customData || {};\n    var title = data.title || "";\n    var numbering = data.numbering || "";\n    return React.createElement(\n      "div",\n      null,\n      React.createElement(\n        "div",\n        { className: "ysp-manager-audit-title" },\n        React.createElement(\n          "div",\n          { className: "ysp-manager-audit-main-title" },\n          title\n        ),\n        React.createElement("div", { className: "ysp-manager-audit-subtitle" })\n      )\n    );\n  }\n});';
    },
    getData_control105_7JX5Xl: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = {};var content = [];var titles = [];var trs = $(elem.querySelector('tbody')).children('tr');[].forEach.call(trs, function (trItem, trIndex) {
          var rows = [[], []];$(trItem).children("td:nth-child(odd)").each(function (idx, dt) {
            if (dt.textContent.indexOf('签字意见') == -1) {
              titles.push(dt.textContent.replace(/\s/g, "").trim());
            }
          });$(trItem).children("td:nth-child(even)").each(function (idx, dt) {
            if (dt.querySelector("select")) {
              var optionIndex = dt.querySelector('select').selectedIndex;content.push(dt.querySelector("select").querySelectorAll('option')[optionIndex].textContent.replace(/\s/g, "").trim());
            } else if (dt.querySelector("span") && dt.querySelector("input[type='hidden']")) {
              if (dt.querySelector("span").textContent.indexOf('编辑器工具') == -1) {
                if (trIndex == 5) {} else {
                  content.push(dt.querySelector("span").textContent.replace(/\s/g, "").trim());
                }
              }
            } else if (dt.querySelector("input[type='text']")) {
              content.push(dt.querySelector("input").value.replace(/\s/g, "").trim());
            } else if (dt.querySelector("textarea")) {
              content.push(dt.querySelector("textarea").value.replace(/\s/g, "").trim());
            }
          });
        });data.titles = titles;data.content = content;return data;
      }
    },
    doAction_uiControl91_tQHRMw: function (data, elem) {
      var data = data.dataCustom;switch (data.type) {case 'select':
          elem.querySelector('select[temptitle="文件缓急"]').value = data.value;break;case 'title':
          elem.querySelector('input[id="requestname"]').value = data.value;break;case 'zhaiyao':
          elem.querySelector('textarea[temptitle="摘要"]').value = data.value;break;}
    },
    getTemplate_uiControl91_tQHRMw: function () {
      var selfTemplate = 'import {\n\tComponent\n} from \'react\';\nimport {\n\tCustomHeader, Dialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n\tconstructor(props) {\n    super(props);\n\t\t// this.state = {\n\t\t// \tdisplayFlg: false\n\t\t// }\n\t}\n\n\t// btnClick() {\n\t// \tthis.setState((prevState, props) => ({\n\t// \t\tdisplayFlg: !prevState.displayFlg\n\t// \t}));\n\t// }\n\n\t// downLoadClick(e) {\n\t// \tlet handler = this.props.customHandler;\n\t// \tvar target = e.target;\n\t// \tif (handler) {\n\t// \t\thandler({\n\t// \t\t\tdata: target.getAttribute(\'data-index\'),\n\t// \t\t\teventType: "downLoad"\n\t// \t\t})\n\t// \t}\n\t// }\n  \n  changeValue(e) {\n\t\tvar handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data: {value: e.target.value, type: e.target.getAttribute(\'data-type\')},\n        eventType: \'change\'\n      })\n    }\n\t}\n\n\trender() {\n\t\tvar _this = this;\n\t\tvar data = this.props.data.customData || {};\n\t\tvar titles = data.titles || [];\n\t\tvar content = data.content || [];\n\t\t// var fileSize = data.fileSize || [];\n\t\t\n\t\treturn (\n\t\t\t<div className="ysp-manager-audit-wrapper">\n\t\t\t\t<span className="left-border"></span><span>\u57FA\u672C\u4FE1\u606F</span>\n\t\t\t\t{titles ? titles.map((item, index) => {\n\t\t\t\t\t// if (!this.state.displayFlg && index > 4) {\n\t\t\t\t\t// \treturn null;\n\t\t\t\t\t// }\n\t\t\t\t\tif (item===\'\u6B63\u6587\') {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\treturn (\n\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t{/*item===\'\u9644\u4EF6\' &&\n\t\t\t\t\t\t\t\t<div>\n\t\t\t\t\t\t\t\t\t<div className="title">{item}</div>\n\t\t\t\t\t\t\t\t\t{content[index] instanceof Array&&content[index].length > 0 ?\n\t\t\t\t\t\t\t\t\t\tcontent[index].map((fileItem, fileIndex) => {\n\t\t\t\t\t\t\t\t\t\t\treturn (\n\t\t\t\t\t\t\t\t\t\t\t\t<div className="annex-download">\n\t\t\t\t\t\t\t\t\t\t\t\t\t{fileItem}\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span className="download-log" data-index={fileIndex} onClick={_this.downLoadClick.bind(_this)}></span>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<span>{fileSize[fileIndex]}</span>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t\t:\'\u6682\u65E0\u6570\u636E\'}\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t*/}\n              \n              {item==\'\u6807\u9898\'&&\n\t\t\t\t\t\t\t<div>\n                <div className="title">{item}</div>\n                <input onChange={_this.changeValue.bind(_this)} data-type="title"></input>\n              </div>\n              }\n              \n              {item==\'\u6458\u8981\'&&\n\t\t\t\t\t\t\t<div>\n                <div className="title">{item}</div>\n                <textarea onChange={_this.changeValue.bind(_this)} data-type=\'zhaiyao\'></textarea>\n              </div>\n              }\n              \n\t\t\t\t\t\t\t{item==\'\u6587\u4EF6\u7F13\u6025\'&&\n\t\t\t\t\t\t\t<div>\n                  <div className="title">\u6587\u4EF6\u7F13\u6025</div>\n                  <select className="select-style" onChange={_this.changeValue.bind(_this)} data-type="select">\n                  \t<option value=\'0\'>\u5E73\u6025</option>\n                    <option value=\'1\'>\u52A0\u6025</option>\n                    <option value=\'2\'>\u7279\u6025</option>\n                  </select>\n              </div>\n              }\n              \n              {item!==\'\u6807\u9898\'&&item!==\'\u6458\u8981\'&&item!==\'\u6587\u4EF6\u7F13\u6025\'&&\n\t\t\t\t\t\t\t<div>\n                <div className="title">{item}</div>\n                <div className="content">{content[index]}</div>\n              </div>\n              }\n\t\t\t\t\t\t</div>\n\t\t\t\t\t);\n\t\t\t\t}) : \'\u65E0\u6570\u636E\'}\n\t\t\t\t{/* <div className={_this.state.displayFlg ? "load-up-arrow" : "load-more-arrow"} onClick={_this.btnClick.bind(_this)}>\n\t\t\t\t\t{_this.state.displayFlg ? \'\u6536\u8D77\u5168\u90E8\u5185\u5BB9\' : \'\u663E\u793A\u66F4\u591A\'}\n\t\t\t\t</div> */}\n\t\t\t</div>\n\t\t);\n\t}\n\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n\t_inherits(_class, _Component);\n\n\tfunction _class(props) {\n\t\t_classCallCheck(this, _class);\n\n\t\treturn _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\t\t// this.state = {\n\t\t// \tdisplayFlg: false\n\t\t// }\n\t}\n\n\t// btnClick() {\n\t// \tthis.setState((prevState, props) => ({\n\t// \t\tdisplayFlg: !prevState.displayFlg\n\t// \t}));\n\t// }\n\n\t// downLoadClick(e) {\n\t// \tlet handler = this.props.customHandler;\n\t// \tvar target = e.target;\n\t// \tif (handler) {\n\t// \t\thandler({\n\t// \t\t\tdata: target.getAttribute(\'data-index\'),\n\t// \t\t\teventType: "downLoad"\n\t// \t\t})\n\t// \t}\n\t// }\n\n\t_createClass(_class, [{\n\t\tkey: \'changeValue\',\n\t\tvalue: function changeValue(e) {\n\t\t\tvar handler = this.props.customHandler;\n\t\t\tif (handler) {\n\t\t\t\thandler({\n\t\t\t\t\tdata: { value: e.target.value, type: e.target.getAttribute(\'data-type\') },\n\t\t\t\t\teventType: \'change\'\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: \'render\',\n\t\tvalue: function render() {\n\t\t\tvar _this = this;\n\t\t\tvar data = this.props.data.customData || {};\n\t\t\tvar titles = data.titles || [];\n\t\t\tvar content = data.content || [];\n\t\t\t// var fileSize = data.fileSize || [];\n\n\t\t\treturn React.createElement(\n\t\t\t\t\'div\',\n\t\t\t\t{ className: \'ysp-manager-audit-wrapper\' },\n\t\t\t\tReact.createElement(\'span\', { className: \'left-border\' }),\n\t\t\t\tReact.createElement(\n\t\t\t\t\t\'span\',\n\t\t\t\t\tnull,\n\t\t\t\t\t\'\\u57FA\\u672C\\u4FE1\\u606F\'\n\t\t\t\t),\n\t\t\t\ttitles ? titles.map(function (item, index) {\n\t\t\t\t\t// if (!this.state.displayFlg && index > 4) {\n\t\t\t\t\t// \treturn null;\n\t\t\t\t\t// }\n\t\t\t\t\tif (item === \'\u6B63\u6587\') {\n\t\t\t\t\t\treturn null;\n\t\t\t\t\t}\n\t\t\t\t\treturn React.createElement(\n\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\tnull,\n\t\t\t\t\t\titem == \'\u6807\u9898\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\'input\', { onChange: _this.changeValue.bind(_this), \'data-type\': \'title\' })\n\t\t\t\t\t\t),\n\t\t\t\t\t\titem == \'\u6458\u8981\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\'textarea\', { onChange: _this.changeValue.bind(_this), \'data-type\': \'zhaiyao\' })\n\t\t\t\t\t\t),\n\t\t\t\t\t\titem == \'\u6587\u4EF6\u7F13\u6025\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\t\'\\u6587\\u4EF6\\u7F13\\u6025\'\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'select\',\n\t\t\t\t\t\t\t\t{ className: \'select-style\', onChange: _this.changeValue.bind(_this), \'data-type\': \'select\' },\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\t\t{ value: \'0\' },\n\t\t\t\t\t\t\t\t\t\'\\u5E73\\u6025\'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\t\t{ value: \'1\' },\n\t\t\t\t\t\t\t\t\t\'\\u52A0\\u6025\'\n\t\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\t\'option\',\n\t\t\t\t\t\t\t\t\t{ value: \'2\' },\n\t\t\t\t\t\t\t\t\t\'\\u7279\\u6025\'\n\t\t\t\t\t\t\t\t)\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\titem !== \'\u6807\u9898\' && item !== \'\u6458\u8981\' && item !== \'\u6587\u4EF6\u7F13\u6025\' && React.createElement(\n\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'title\' },\n\t\t\t\t\t\t\t\titem\n\t\t\t\t\t\t\t),\n\t\t\t\t\t\t\tReact.createElement(\n\t\t\t\t\t\t\t\t\'div\',\n\t\t\t\t\t\t\t\t{ className: \'content\' },\n\t\t\t\t\t\t\t\tcontent[index]\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t)\n\t\t\t\t\t);\n\t\t\t\t}) : \'\u65E0\u6570\u636E\'\n\t\t\t);\n\t\t}\n\t}]);\n\n\treturn _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control110_mHsZAV: function (elem) {
      if (!elem) {
        return;
      }return elem.textContent.trim();
    },
    doAction_uiControl93_MgqcKS: function (data, elem) {},
    getTemplate_uiControl93_MgqcKS: function () {
      var selfTemplate = '  import { Component } from \'react\';\n  import { CustomHeader } from \'ysp-custom-components\';\n  \n  export default class extends Component {\n    \n    render(){\n        var data = this.props.customData;\n        return <div className="ysp-manager-audit-title-icon"><span>{data}</span></div>;\n    }\n  }';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \'render\',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manager-audit-title-icon\' },\n        React.createElement(\n          \'span\',\n          null,\n          data\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control111_yUR1xo: function (elem) {},
    doAction_uiControl94_EApRep: function (data, elem) {
      var eventType = data.eventType;if (eventType == 'dataChange') {
        var p = document.createElement('p');elem.contentDocument.querySelector('body').innerHTML = "";elem.contentDocument.querySelector('body').appendChild(p).textContent = data.dataCustom;
      }
    },
    getTemplate_uiControl94_EApRep: function () {
      var selfTemplate = 'import { Component } from \'react\';\nimport { CustomHeader } from \'ysp-custom-components\';\n\nexport default class extends Component {\nconstructor(){\n    super();\n}\n\nonChange=(e)=>{\n    var handler = this.props.customHandler;\n    if(handler){\n    handler({\n        data:e.target.value,\n        eventType:\'dataChange\'\n    })\n    }\n}\n\nrender(){\n    var _this = this;\n    return (\n    \n        <div className="ysp-textarea-content"><textarea onChange={_this.onChange.bind(_this)}></textarea></div>\n    )\n}\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n    _inherits(_class, _Component);\n\n    function _class() {\n        _classCallCheck(this, _class);\n\n        var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n        _this2.onChange = function (e) {\n            var handler = _this2.props.customHandler;\n            if (handler) {\n                handler({\n                    data: e.target.value,\n                    eventType: \'dataChange\'\n                });\n            }\n        };\n\n        return _this2;\n    }\n\n    _createClass(_class, [{\n        key: \'render\',\n        value: function render() {\n            var _this = this;\n            return React.createElement(\n                \'div\',\n                { className: \'ysp-textarea-content\' },\n                React.createElement(\'textarea\', { onChange: _this.onChange.bind(_this) })\n            );\n        }\n    }]);\n\n    return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control112_qbRwBy: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('td').textContent.trim();
    },
    doAction_uiControl95_V9xDDs: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl95_V9xDDs: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n\tCommonHeader,Dialog\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  \n  btnClick(e){\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:"docClick"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.customData;\n    return (\n      <div className="ysp-manageraudit-relate-doc">\n        <span style={{\'color\':\'#000\'}}>{data}</span>\n        <div className="border-bottom"><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></div>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick(e) {\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: "docClick"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manageraudit-relate-doc\' },\n        React.createElement(\n          \'span\',\n          { style: { \'color\': \'#000\' } },\n          data\n        ),\n        React.createElement(\n          \'div\',\n          { className: \'border-bottom\' },\n          React.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control113_Hb7TgW: function (elem) {
      if (!elem) {
        return;
      }return elem.querySelector('td').textContent.trim();
    },
    doAction_uiControl96_rfpcXz: function (data, elem) {
      var clickType = data.eventType;if (clickType === 'docClick') {
        elem.querySelector('.Browser').click();
      }
    },
    getTemplate_uiControl96_rfpcXz: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n\tCustomHeader,Dialog,Alert\n} from \'ysp-custom-components\';\nexport default class extends Component {\n  constructor(props){\n    super(props);\n  }\n  btnClick(e){//\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n    let handler=this.props.customHandler;\n    var target=e.target;\n    if(handler){\n      handler({\n        eventType:"docClick"\n      })\n    }\n  }\n  render() {\n    var _this = this;\n    var data = this.props.customData;\n    return (\n      <div className="ysp-manageraudit-relate-doc">\n        <span style={{\'color\':\'#000\'}}>{data}</span>\n        <span><span onClick={_this.btnClick.bind(_this)} className="ysp-search-icon"></span></span>\n      </div>\n    )\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n  }\n\n  _createClass(_class, [{\n    key: \'btnClick\',\n    value: function btnClick(e) {\n      //\u5BA2\u6237\u4FE1\u606F\u548C\u5BA2\u6237\u7ECF\u8425\u4FE1\u606F\u5207\u6362\n      var handler = this.props.customHandler;\n      var target = e.target;\n      if (handler) {\n        handler({\n          eventType: "docClick"\n        });\n      }\n    }\n  }, {\n    key: \'render\',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-manageraudit-relate-doc\' },\n        React.createElement(\n          \'span\',\n          { style: { \'color\': \'#000\' } },\n          data\n        ),\n        React.createElement(\n          \'span\',\n          null,\n          React.createElement(\'span\', { onClick: _this.btnClick.bind(_this), className: \'ysp-search-icon\' })\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);