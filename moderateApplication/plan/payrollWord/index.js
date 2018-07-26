(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control773_ZVOOtN: function (elem) {},
    doAction_uiControl773_uX2PUQ: function (data, elem) {
      if ('click' == data.eventType) {
        ysp.customHelper.backHome();
      }
    },
    getTemplate_uiControl773_uX2PUQ: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    return (\n      <div className='ysp-flash-hard'>\n        <div onClick={this.handlerClick.bind(this)}>\n          <span onClick={this.handlerClick.bind(this)}></span>\n          <span onClick={this.handlerClick.bind(this)}>\u8FD4\u56DE</span>\n        </div>\n        <div>\n        \t<span>\u5DE5\u8D44\u5355</span>\n        </div>\n        \n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    return React.createElement(\n      'div',\n      { className: 'ysp-flash-hard' },\n      React.createElement(\n        'div',\n        { onClick: this.handlerClick.bind(this) },\n        React.createElement('span', { onClick: this.handlerClick.bind(this) }),\n        React.createElement(\n          'span',\n          { onClick: this.handlerClick.bind(this) },\n          '\\u8FD4\\u56DE'\n        )\n      ),\n      React.createElement(\n        'div',\n        null,\n        React.createElement(\n          'span',\n          null,\n          '\\u5DE5\\u8D44\\u5355'\n        )\n      )\n    );\n  }\n});";
    },
    getData_control774_4vB8WK: function (elem) {
      if (!elem) {
        return;
      }var data = { name: [], number: [] };var name = elem.querySelector("#txtUserName").value;var number = elem.querySelector("#txtNumber").value;data.name.push(name);data.number.push(number);return data;
    },
    doAction_uiControl774_EPDrCd: function (data, elem) {
      if ('change' == data.eventType) {
        var value = data.dataCustom.value;elem.querySelector("#txtPassword").value = value;
      }if ('click' == data.eventType) {
        elem.querySelector("#btnLogin").click();
      }
    },
    getTemplate_uiControl774_EPDrCd: function () {
      var selfTemplate = "module.exports = React.createClass({\n  handlerChange:function(e){\n    var target = e.target;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        data:{\n          value:value\n        },\n        eventType:'change'\n      })\n    }\n  },\n  handlerClick:function(e){\n    var handler = this.props.customHandler;\n    if(handler){\n      handler({\n        eventType:'click'\n      })\n    }\n  },\n  render: function() {\n    var data = this.props.customData ||[];\n    return (\n      <div className=\"ysp-payroll-word\">\n        <div className=\"ysp-payroll-word-content\">\n          <span>\u59D3\u540D\uFF1A</span>\n          <span>{data.name}</span>\n        </div>\n        <div className=\"ysp-payroll-word-content\">\n          <span>\u5DE5\u53F7\uFF1A</span>\n          <span>{data.number}</span>\n        </div>\n        <div className=\"ysp-payroll-word-pass\">\n          <span>\u5BC6\u7801\uFF1A</span>\n          <span>\n          \t<input type=\"password\" onChange={this.handlerChange.bind(this)}/>\n          </span>\n        </div>\n        \n        <div className=\"ysp-payroll-word-button\" onClick={this.handlerClick.bind(this)}>\u786E\u8BA4</div>\n      </div>\n    )\n  }\n});";
      return "'use strict';\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  handlerChange: function handlerChange(e) {\n    var target = e.target;\n    var value = target.value;\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        data: {\n          value: value\n        },\n        eventType: 'change'\n      });\n    }\n  },\n  handlerClick: function handlerClick(e) {\n    var handler = this.props.customHandler;\n    if (handler) {\n      handler({\n        eventType: 'click'\n      });\n    }\n  },\n  render: function render() {\n    var data = this.props.customData || [];\n    return React.createElement(\n      'div',\n      { className: 'ysp-payroll-word' },\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-word-content' },\n        React.createElement(\n          'span',\n          null,\n          '\\u59D3\\u540D\\uFF1A'\n        ),\n        React.createElement(\n          'span',\n          null,\n          data.name\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-word-content' },\n        React.createElement(\n          'span',\n          null,\n          '\\u5DE5\\u53F7\\uFF1A'\n        ),\n        React.createElement(\n          'span',\n          null,\n          data.number\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-word-pass' },\n        React.createElement(\n          'span',\n          null,\n          '\\u5BC6\\u7801\\uFF1A'\n        ),\n        React.createElement(\n          'span',\n          null,\n          React.createElement('input', { type: 'password', onChange: this.handlerChange.bind(this) })\n        )\n      ),\n      React.createElement(\n        'div',\n        { className: 'ysp-payroll-word-button', onClick: this.handlerClick.bind(this) },\n        '\\u786E\\u8BA4'\n      )\n    );\n  }\n});";
    }
  });
})(window, ysp);