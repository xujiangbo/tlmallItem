(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control11_eZMddr: function (elem) {
      if (elem) {
        var data = { title: "", content: "" };data.title = elem.querySelector("#shortmsg").textContent;data.content = elem.querySelector("#longmsg").textContent;return data;
      }
    },
    doAction_uiControl11_VTiae6: function (data, elem) {
      if (data.eventType == "click") {
        elem.querySelector("#msgokbutton").click();
      }
    },
    getTemplate_uiControl11_VTiae6: function () {
      var selfTemplate = "import {Component} from 'react';\n\nexport default class extends React.Component{\n  click(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  }\n  render(){\n    var _this=this;\n    var data=this.props.customData;\n    return(\n    \t<div className=\"ysp_alert_mask\">\n      \t<div className=\"ysp_alert_modal\">\n          <div className=\"ysp_content_twoLine\">\n            <div className=\"ysp_alert_title\">{data&&data.title}</div>\n            <div className=\"ysp_alert_content\">{data&&data.content}</div>\n          </div>\n        \t<div className=\"oneButton\">\n          \t<div className=\"sure\" onClick={_this.click.bind(_this)}>\u786E\u5B9A</div>\n          </div>\n        </div>\n      </div>\n    )\n  }\n}";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: \"click\",\n    value: function click(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData;\n      return React.createElement(\n        \"div\",\n        { className: \"ysp_alert_mask\" },\n        React.createElement(\n          \"div\",\n          { className: \"ysp_alert_modal\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp_content_twoLine\" },\n            React.createElement(\n              \"div\",\n              { className: \"ysp_alert_title\" },\n              data && data.title\n            ),\n            React.createElement(\n              \"div\",\n              { className: \"ysp_alert_content\" },\n              data && data.content\n            )\n          ),\n          React.createElement(\n            \"div\",\n            { className: \"oneButton\" },\n            React.createElement(\n              \"div\",\n              { className: \"sure\", onClick: _this.click.bind(_this) },\n              \"\\u786E\\u5B9A\"\n            )\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);