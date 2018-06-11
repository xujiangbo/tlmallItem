(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control0_WPCK9i: function (elem) {
      if (elem) {
        var arr = [];var select = elem.querySelector("#authSelect");var options = select.querySelectorAll("option");var sel = { a: [], selected: "" };for (var i = 0; i < options.length; i++) {
          sel.a.push(options[i].textContent);if (options[i].getAttribute("selected") == "selected") {
            var selected = options[i].textContent;
          }
        }sel.selected = selected;arr.push(sel);var date = elem.querySelector("#BizDate").value;arr.push(date);var userName = elem.querySelector("#txt_UserID").value;arr.push(userName);var passWord = elem.querySelector("#txt_Password").value;arr.push(passWord);var loginStats = elem.querySelector('#cb_rmbUserInfo').checked;arr.push(loginStats);var user = elem.querySelector('#cb_rmbUserName').checked;arr.push(user);return arr;
      }return [];
    }, doAction_uiControl0_7vokyT: function (data, elem) {
      if (data.eventType == "click") {
        elem.querySelector(".combo-value").click();
      } else if (data.eventType == "onchange") {
        var val = data.dataCustom.val;var clas = data.dataCustom.clas;if (clas == "userName") {
          elem.querySelector("#txt_UserID").value = val;
        } else {
          elem.querySelector("#txt_Password").value = val;
        }
      } else if (data.eventType == "btnclick") {
        elem.querySelector("#btn-login").click();
      } else if (data.eventType == "radioclick1") {
        elem.querySelector("#cb_rmbUserName").click();
      } else if (data.eventType == "radioclick2") {
        elem.querySelector("#cb_rmbUserInfo").click();
      } else if (data.eventType == "dateclick") {
        elem.querySelector(".combo.datebox").querySelector("span").click();
      }
    },
    getTemplate_uiControl0_7vokyT: function () {
      var selfTemplate = "import {Component} from \"react\";\nexport default class extends Component{\n  componentDidMount() {\n    this.log = loglog(\"componentDidMount\");\n    this.timer = setInterval(\n      () => this.tick(),\n      100\n    );\n  }\n  componentWillUnmount() {\n    clearInterval(this.timer);\n  }\n\n  tick() {\n    this.setState({\n      open:!this.state.open\n    });\n  }\n  constructor(props){\n    super(props);\n    this.state={\n      loginStatus: props.customData[4],\n      user:props.customData[5],\n    \topen:true\n    }\n  }\n  click(e){\n    this.setState={\n      open:!this.state.open\n    }\n  }\n  onClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"click\"\n      })\n    }\n  }\n  dateClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"dateclick\"\n      })\n    }\n  }\n  radioClick1(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"radioclick1\"\n      })\n    }\n    this.setState({\n      user:!this.state.user\n    })\n  }\n  radioClick2(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"radioclick2\"\n      })\n    }\n    this.setState({\n      loginStatus:!this.state.loginStatus\n    })\n  }\n  onChange(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:{clas:target.className,val:target.value},\n        eventType:\"onchange\"\n      })\n    }\n  }\n  btnClick(e){\n    var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:\"btnclick\"\n      })\n    }\n  }\n  render() {\n    var data = this.props.customData;\n    var _this = this;\n    return (\n      <div>\n        {_this.state.open ? <div style={{'background':'#fff','color':'#FF0000','width':'100%','height':'300vh','text-align':'center','margin-top':'50%'}}>\u767B\u5F55\u4E2D...</div> : <div className=\"ysp_logo_background\">\n        <div className=\"ysp-login-card\">\n          <div className=\"date\">\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<input type=\"date\" className=\"dateval\" onClick={_this.dateClick.bind(_this)} value={data[1]}/>\n          </div>\n \xA0 \xA0 \xA0 \xA0  <input type=\"text\" className=\"userName\" onChange={_this.onChange.bind(_this)} placeholder=\"\u7528\u6237\u8D26\u53F7/\u90AE\u7BB1/\u624B\u673A\u53F7\" value={data[2]}/>\n          <input type=\"password\" className=\"pass\" onChange={_this.onChange.bind(_this)} placeholder=\"\u8BF7\u8F93\u5165\u5BC6\u7801\" value={data[3]}/>\n          <div className=\"rmbbox\">\n            <label>\n              <span className={_this.state.user ? \"checked\":\"unchecked\"}  onClick={_this.radioClick1.bind(_this)}></span>\n              <span className=\"text\">\u8BB0\u4F4F\u7528\u6237\u540D</span>\n            </label>\n            <label>\n               <span className={_this.state.loginStatus ? \"checked\":\"unchecked\"} onClick={_this.radioClick2.bind(_this)}></span>\n              <span className=\"text\">\u8BB0\u4F4F\u767B\u5F55\u4FE1\u606F</span>\n            </label>\n          </div>\n          <div>\n \xA0 \xA0 \xA0 \xA0 \xA0 \xA0<span className=\"btn\" onClick={_this.btnClick.bind(_this)}>\u767B\u5F55</span>\n          </div>\n \xA0 \xA0 \xA0 \xA0</div>\n      </div>}\n      </div>\n    )\n  }\n};";
      return "\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require(\"react\");\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  _createClass(_class, [{\n    key: \"componentDidMount\",\n    value: function componentDidMount() {\n      var _this3 = this;\n\n      this.log = loglog(\"componentDidMount\");\n      this.timer = setInterval(function () {\n        return _this3.tick();\n      }, 100);\n    }\n  }, {\n    key: \"componentWillUnmount\",\n    value: function componentWillUnmount() {\n      clearInterval(this.timer);\n    }\n  }, {\n    key: \"tick\",\n    value: function tick() {\n      this.setState({\n        open: !this.state.open\n      });\n    }\n  }]);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      loginStatus: props.customData[4],\n      user: props.customData[5],\n      open: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: \"click\",\n    value: function click(e) {\n      this.setState = {\n        open: !this.state.open\n      };\n    }\n  }, {\n    key: \"onClick\",\n    value: function onClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"click\"\n        });\n      }\n    }\n  }, {\n    key: \"dateClick\",\n    value: function dateClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"dateclick\"\n        });\n      }\n    }\n  }, {\n    key: \"radioClick1\",\n    value: function radioClick1(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"radioclick1\"\n        });\n      }\n      this.setState({\n        user: !this.state.user\n      });\n    }\n  }, {\n    key: \"radioClick2\",\n    value: function radioClick2(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"radioclick2\"\n        });\n      }\n      this.setState({\n        loginStatus: !this.state.loginStatus\n      });\n    }\n  }, {\n    key: \"onChange\",\n    value: function onChange(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: { clas: target.className, val: target.value },\n          eventType: \"onchange\"\n        });\n      }\n    }\n  }, {\n    key: \"btnClick\",\n    value: function btnClick(e) {\n      var target = e.target;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          eventType: \"btnclick\"\n        });\n      }\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var data = this.props.customData;\n      var _this = this;\n      return React.createElement(\n        \"div\",\n        null,\n        _this.state.open ? React.createElement(\n          \"div\",\n          { style: { 'background': '#fff', 'color': '#FF0000', 'width': '100%', 'height': '300vh', 'text-align': 'center', 'margin-top': '50%' } },\n          \"\\u767B\\u5F55\\u4E2D...\"\n        ) : React.createElement(\n          \"div\",\n          { className: \"ysp_logo_background\" },\n          React.createElement(\n            \"div\",\n            { className: \"ysp-login-card\" },\n            React.createElement(\n              \"div\",\n              { className: \"date\" },\n              \"\\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0\",\n              React.createElement(\"input\", { type: \"date\", className: \"dateval\", onClick: _this.dateClick.bind(_this), value: data[1] })\n            ),\n            \"\\xA0 \\xA0 \\xA0 \\xA0  \",\n            React.createElement(\"input\", { type: \"text\", className: \"userName\", onChange: _this.onChange.bind(_this), placeholder: \"\\u7528\\u6237\\u8D26\\u53F7/\\u90AE\\u7BB1/\\u624B\\u673A\\u53F7\", value: data[2] }),\n            React.createElement(\"input\", { type: \"password\", className: \"pass\", onChange: _this.onChange.bind(_this), placeholder: \"\\u8BF7\\u8F93\\u5165\\u5BC6\\u7801\", value: data[3] }),\n            React.createElement(\n              \"div\",\n              { className: \"rmbbox\" },\n              React.createElement(\n                \"label\",\n                null,\n                React.createElement(\"span\", { className: _this.state.user ? \"checked\" : \"unchecked\", onClick: _this.radioClick1.bind(_this) }),\n                React.createElement(\n                  \"span\",\n                  { className: \"text\" },\n                  \"\\u8BB0\\u4F4F\\u7528\\u6237\\u540D\"\n                )\n              ),\n              React.createElement(\n                \"label\",\n                null,\n                React.createElement(\"span\", { className: _this.state.loginStatus ? \"checked\" : \"unchecked\", onClick: _this.radioClick2.bind(_this) }),\n                React.createElement(\n                  \"span\",\n                  { className: \"text\" },\n                  \"\\u8BB0\\u4F4F\\u767B\\u5F55\\u4FE1\\u606F\"\n                )\n              )\n            ),\n            React.createElement(\n              \"div\",\n              null,\n              \"\\xA0 \\xA0 \\xA0 \\xA0 \\xA0 \\xA0\",\n              React.createElement(\n                \"span\",\n                { className: \"btn\", onClick: _this.btnClick.bind(_this) },\n                \"\\u767B\\u5F55\"\n              )\n            ),\n            \"\\xA0 \\xA0 \\xA0 \\xA0\"\n          )\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;\n;";
    },
    getData_control23_Ph6GKU: function (elem) {
      if (elem) {
        var arr = { messager: [], btns: [] };var title = elem.querySelector(".panel-title");arr.messager.push(title.textContent);var text = elem.querySelector(".messager-body").querySelectorAll("div")[1];arr.messager.push(text.textContent);var btn = elem.querySelector(".messager-button").querySelectorAll("a");for (var i = 0; i < btn.length; i++) {
          arr.btns.push(btn[i].textContent);
        }return arr;
      }return [];
    },
    doAction_uiControl17_soZhyd: function (data, elem) {
      if (data.eventType == "click") {
        var ind = parseInt(data.customData);elem.querySelector(".messager-button").querySelectorAll("a")[ind].click();
      }
    },
    getTemplate_uiControl17_soZhyd: function () {
      var selfTemplate = "module.exports = React.createClass({\n  onClick:function(e){\n     var target=e.target;\n    var handler=this.props.customHandler;\n    if(handler){\n      handler({\n        data:target.getAttribute(\"data-index\"),\n        eventType:\"click\"\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData || [];\n    var _this = this;\n    var lis = data&&data!=\"\"&&data.btns.map(function(d,i){\n      return(\n        <div className=\"btns\">\n          <span className=\"btn\" data-index={i} onClick={_this.onClick.bind(_this)}>{d}</span>\n        </div>\n      )\n    })\n    return (\n      <div className=\"messagers\">{data!=\"\" ? <div className=\"messager\">\n        <div className=\"messager-title\">{data.messager[0]}</div>\n        <div className=\"messager-body\">\n          <div className=\"messager-news\">{data.messager[1]}</div>\n          {lis}\n        </div>\n      </div> : \"\"}</div>\n    )\n  }\n});";
      return "\"use strict\";\n\nmodule.exports = React.createClass({\n  displayName: \"exports\",\n\n  onClick: function onClick(e) {\n    var target = e.target;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: target.getAttribute(\"data-index\"),\n        eventType: \"click\"\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    var _this = this;\n    var lis = data && data != \"\" && data.btns.map(function (d, i) {\n      return React.createElement(\n        \"div\",\n        { className: \"btns\" },\n        React.createElement(\n          \"span\",\n          { className: \"btn\", \"data-index\": i, onClick: _this.onClick.bind(_this) },\n          d\n        )\n      );\n    });\n    return React.createElement(\n      \"div\",\n      { className: \"messagers\" },\n      data != \"\" ? React.createElement(\n        \"div\",\n        { className: \"messager\" },\n        React.createElement(\n          \"div\",\n          { className: \"messager-title\" },\n          data.messager[0]\n        ),\n        React.createElement(\n          \"div\",\n          { className: \"messager-body\" },\n          React.createElement(\n            \"div\",\n            { className: \"messager-news\" },\n            data.messager[1]\n          ),\n          lis\n        )\n      ) : \"\"\n    );\n  }\n});";
    }
  }, "login");
})(window, ysp);