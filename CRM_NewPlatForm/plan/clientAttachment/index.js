(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control271_Ok9JMk: function (elem) {},
    doAction_uiControl265_Q44OP5: function (data, elem) {
      if (data.eventType == 'AndroidBack') {
        ysp.customHelper.AndroidDocument = elem.ownerDocument;ysp.customHelper.AndroidName = '客户详情';ysp.customHelper.AndroidBackModel = 'clientInfo';ysp.customHelper.AndroidBackFlag = 'Client&Store';
      }if (data.eventType === 'back') {
        var doc = elem.ownerDocument;var targetEl = doc.querySelector('#clientMenu');ysp.customHelper.toPlan(targetEl, "客户详情", "clientInfo");
      }
    },
    getTemplate_uiControl265_Q44OP5: function () {
      var selfTemplate = 'import {Component} from \'react\'; \nimport {CustomHeader} from \'ysp-custom-components\';\nexport default class extends Component{\n   componentDidMount(){\n    var _this = this;\n    var handler = _this.props.customHanlder;\n    if(handler){\n      handler({\n        eventType:\'AndroidBack\'\n      })\n    } \n \xA0 \xA0// const {customHandler} = _this.props;\n \xA0 \xA0// customHandler({\n \xA0 \xA0// eventType:\'AndroidBack\'\n \xA0 \xA0// })\n  }\n   render = () => {\n       var _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:"\u9644\u4EF6",rightText:"\u7B5B\u9009"}} \n           backIsShow={true} \n           back={()=>{ \n              var handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: \'back\'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info("header filter ...")}}/>\n       );\n   }\n}\n\n\n';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: "\u9644\u4EF6", rightText: "\u7B5B\u9009" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: \'back\'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info("header filter ...");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: \'componentDidMount\',\n    value: function componentDidMount() {\n      var _this = this;\n      var handler = _this.props.customHanlder;\n      if (handler) {\n        handler({\n          eventType: \'AndroidBack\'\n        });\n      }\n      // const {customHandler} = _this.props;\n      // customHandler({\n      // eventType:\'AndroidBack\'\n      // })\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    },
    getData_control272_am5i7T: function (elem) {
      if (!elem) {
        return [];
      }var data = { flags: [], urls: [], datas: [] };var da = ysp.customHelper.getTableData(elem, ["附件名称", "附件类型", "是否原件回收", "修改时间"]);data.datas.push(da);var trs = elem.ownerDocument.querySelector("#additionBody").querySelectorAll("tr");var flag;var url;for (var i = 0; i < trs.length; i++) {
        var aa = [];var bb = [];var a = trs[i].querySelectorAll("td")[0].querySelector("a");if (a) {
          var href = a.getAttribute("href");flag = true;url = href;
        } else {
          flag = false;url = "";
        }aa.push(flag);bb.push(url);data.flags.push(aa);data.urls.push(bb);
      }return data;
    },
    doAction_uiControl266_dffH95: function (data, elem) {
      if ("click" == data.eventType) {
        var url = data.customData;var _url = 'http://192.168.1.227' + url;if (ysp.appMain.isIOS()) {
          top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
        } else if (ysp.appMain.isAndroid()) {
          top.location.href = _url;
        }
      } // function reviewFiles(jumpUrl) {
      //   var _url = 'host' + jumpUrl;
      //   if (ysp.appMain.isIOS()) {
      //     top.EAPI.openWindow(_url + "&_ysp_filepreview=1");
      //   } else if (ysp.appMain.isAndroid()) {
      //     top.location.href = _url;
      //   }
      // }
    },
    getTemplate_uiControl266_dffH95: function () {
      var selfTemplate = 'import {\n  Component\n} from \'react\';\nimport {\n  CustomHeader\n} from \'ysp-custom-components\';\nexport default class extends Component {\n   handlerClick = (e) =>{\n    var _this = this;\n    var url = e.currentTarget.dataset.url;\n    var handler = _this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\'click\',\n\t\t\t\tdata: url\n      })\n    }\n  }\n  render = () => {\n    var  _this = this;\n    var data = (this.props.customData && this.props.customData.datas && this.props.customData.datas[0].content) || [];\n    var flags = this.props.customData && this.props.customData.flags && this.props.customData.flags;\n    var urls = this.props.customData && this.props.customData.urls && this.props.customData.urls;\n    if (data.length == 0) {\n      return (<div className="ysp-no-data">\n        \t\t\t\t<div></div>\n                <div>\u6682\u65F6\u6CA1\u6709\u6570\u636E~</div>  \n        \t\t\t</div>);\n    }\n    return (\n      <div className="ysp-attachment-wrapper">\n       {data.map((item,index)=>{\n           return (\n\t\t\t\t\t\t <div className="ysp-attachment-content-wrapper">\n               <div>\n                 <span>\u9644\u4EF6\u7C7B\u578B:</span>\n                 <span>{item[1]}</span>\n               </div>\n               {\n                 urls[index] != "" ?  \n                \t<div className="ysp-attachment-namedown" onClick={this.handlerClick.bind(this)} data-url = {urls[index]}>\n                   <span>\u6587\u4EF6\u540D\u79F0:</span>\n                   <span>{item[0]}</span>\n                   <span></span>\n                 </div> : \n                 <div className="ysp-attachment-name">\n                   <span>\u6587\u4EF6\u540D\u79F0:</span>\n                   <span>{item[0]}</span>\n                 </div>\n               }\n               \n               <div>\n                 <div>\n                   <span>\u662F\u5426\u539F\u4EF6\u56DE\u6536:</span>\n                   <span className={item[3] == "N" ? "ysp-attachment-red" : "ysp-attachment-blue"}>{item[3] == "N" ? "\u5426" : "\u662F"}</span>\n                 </div>\n                 <div>\n                   <span>\u4FEE\u6539\u65F6\u95F4:</span>\n                   <span>{item[2]}</span>\n                 </div>\n               </div>\n             </div>\n           );\n         }) \n       }  \n    </div>\n    );\n  }\n}';
      return '\'use strict\';\n\nObject.defineProperty(exports, "__esModule", {\n  value: true\n});\n\nvar _react = require(\'react\');\n\nvar _yspCustomComponents = require(\'ysp-custom-components\');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn\'t been initialised - super() hasn\'t been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.handlerClick = function (e) {\n      var _this = _this2;\n      var url = e.currentTarget.dataset.url;\n      var handler = _this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \'click\',\n          data: url\n        });\n      }\n    }, _this2.render = function () {\n      var _this = _this2;\n      var data = _this2.props.customData && _this2.props.customData.datas && _this2.props.customData.datas[0].content || [];\n      var flags = _this2.props.customData && _this2.props.customData.flags && _this2.props.customData.flags;\n      var urls = _this2.props.customData && _this2.props.customData.urls && _this2.props.customData.urls;\n      if (data.length == 0) {\n        return React.createElement(\n          \'div\',\n          { className: \'ysp-no-data\' },\n          React.createElement(\'div\', null),\n          React.createElement(\n            \'div\',\n            null,\n            \'\\u6682\\u65F6\\u6CA1\\u6709\\u6570\\u636E~\'\n          )\n        );\n      }\n      return React.createElement(\n        \'div\',\n        { className: \'ysp-attachment-wrapper\' },\n        data.map(function (item, index) {\n          return React.createElement(\n            \'div\',\n            { className: \'ysp-attachment-content-wrapper\' },\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u9644\\u4EF6\\u7C7B\\u578B:\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[1]\n              )\n            ),\n            urls[index] != "" ? React.createElement(\n              \'div\',\n              { className: \'ysp-attachment-namedown\', onClick: _this2.handlerClick.bind(_this2), \'data-url\': urls[index] },\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u6587\\u4EF6\\u540D\\u79F0:\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[0]\n              ),\n              React.createElement(\'span\', null)\n            ) : React.createElement(\n              \'div\',\n              { className: \'ysp-attachment-name\' },\n              React.createElement(\n                \'span\',\n                null,\n                \'\\u6587\\u4EF6\\u540D\\u79F0:\'\n              ),\n              React.createElement(\n                \'span\',\n                null,\n                item[0]\n              )\n            ),\n            React.createElement(\n              \'div\',\n              null,\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u662F\\u5426\\u539F\\u4EF6\\u56DE\\u6536:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  { className: item[3] == "N" ? "ysp-attachment-red" : "ysp-attachment-blue" },\n                  item[3] == "N" ? "\u5426" : "\u662F"\n                )\n              ),\n              React.createElement(\n                \'div\',\n                null,\n                React.createElement(\n                  \'span\',\n                  null,\n                  \'\\u4FEE\\u6539\\u65F6\\u95F4:\'\n                ),\n                React.createElement(\n                  \'span\',\n                  null,\n                  item[2]\n                )\n              )\n            )\n          );\n        })\n      );\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;';
    }
  });
})(window, ysp);