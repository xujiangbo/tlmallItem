(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control59_TdmpDC: function (elem) {},
    doAction_uiControl56_cTNTVK: function (data, elem) {
      if (data.eventType == 'back') {
        ysp.appMain.back();
      }
    },
    getTemplate_uiControl56_cTNTVK: function () {
      var selfTemplate = "import {\n  Header,\n  HeaderLeft,\n  HeaderRight\n} from 'ysp-interior-components';\n\nexport default class extends React.Component {\n  constructor(props) {\n    super(props);\n  }\n  onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         // data:e.target.className,\n         data:this.props.customData,\n         eventType:'click'                         \n       })\n     }\n  }\n  render() {\n    var  _this = this;\n    var data=this.props.customData\t||\t[];\n    if(data){\n      return (\n      <Header amStyle=\"primary\" title=\"\u5DE5\u4F5C\u9879\u6267\u884C\"\tclassName=\"ysp-flex-top\">\n        <HeaderLeft>\n          <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }} onClick={()=>{\n              const handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  data:data,\n                  eventType: 'back'\n                });\n              }\n            }}>\n            <span className='icon icon-left-nav'></span>\n          </AMUI.Button>\n        </HeaderLeft>\n        <HeaderRight>\n          {\tdata ? <AMUI.Button amStyle=\"primary\" style={{ margin: 0 }}\tclassName='ysp-Receive' onClick={_this.onClick} >{data}</AMUI.Button>\t: <div style={{display:'none'}}></div>\t}\n          \n        </HeaderRight>\n      </Header>\n    \t);\n    }else{\n      return(<div style={{display:'none'}}></div>)\n    }\n  }\n}\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _yspInteriorComponents = require('ysp-interior-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          // data:e.target.className,\n          data: _this2.props.customData,\n          eventType: 'click'\n        });\n      }\n    };\n\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      var data = this.props.customData || [];\n      if (data) {\n        return React.createElement(\n          _yspInteriorComponents.Header,\n          { amStyle: 'primary', title: '\\u5DE5\\u4F5C\\u9879\\u6267\\u884C', className: 'ysp-flex-top' },\n          React.createElement(\n            _yspInteriorComponents.HeaderLeft,\n            null,\n            React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, onClick: function onClick() {\n                  var handler = _this.props.customHandler;\n                  if (handler) {\n                    handler({\n                      data: data,\n                      eventType: 'back'\n                    });\n                  }\n                } },\n              React.createElement('span', { className: 'icon icon-left-nav' })\n            )\n          ),\n          React.createElement(\n            _yspInteriorComponents.HeaderRight,\n            null,\n            data ? React.createElement(\n              AMUI.Button,\n              { amStyle: 'primary', style: { margin: 0 }, className: 'ysp-Receive', onClick: _this.onClick },\n              data\n            ) : React.createElement('div', { style: { display: 'none' } })\n          )\n        );\n      } else {\n        return React.createElement('div', { style: { display: 'none' } });\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control60_40OEw6: function (elem) {
      if (!elem) {
        return;
      }if (elem) {
        var data = { title: [], content: [], total: [] };var tTrs = elem.querySelectorAll('tr	.form_label');var trsLen = tTrs.length;for (var i = 0; i < trsLen; i++) {
          data.title.push(tTrs[i].textContent);
        }var _table = elem.querySelectorAll('tr');if (_table.length > 2) {
          var trs = _table;var trsLen = trs.length - 1;for (var i = 1; i < trsLen; i++) {
            var tds = trs[i].querySelectorAll('td');var tdsLen = tds.length;var pData = [];for (var j = 0; j < tdsLen; j++) {
              var children = {};children.cont = [];var _a = tds[j].querySelector('a');if (_a) {
                children.attr = 'A';
              } else {
                children.attr = 'INPUT';
              }children.cont.push(tds[j].textContent);pData.push(children);
            }data.content.push(pData);
          }var totalTrs = elem.querySelectorAll('tbody	tr:last-child td');var totalLen = totalTrs.length;for (var i = 0; i < totalLen; i++) {
            data.total.push(totalTrs[i].textContent.trim());
          }
        }return data;
      }
    },
    doAction_uiControl57_IzXfNJ: function (data, elem) {
      if (data.eventType == 'click') {
        var d = data.dataCustom;var line = parseInt(d[1]) + 1;var column = parseInt(d[2]);var _btn = elem.querySelectorAll('tr')[line].querySelectorAll('td')[column].querySelector('a');_btn.click(); //   var url = _btn.href;
        //   var xhr = new XMLHttpRequest();
        //   xhr.open('GET', url, false);
        //   xhr.onreadystatechange = function () {
        //     if (xhr.status == 200 && xhr.readyState == 4) {
        //       if (ysp.appMain.isIOS()) {
        //         top.EAPI.openWindow(url + '&_ysp_filepreview=1');
        //       } else if (ysp.appMain.isAndroid()) {
        //         top.location.href = url;
        //       }
        //     } else {
        //       elem.ownerDocument.defaultView.open(url, '404 - found');
        //     }
        //   };
        //   xhr.send();
      }
    },
    getTemplate_uiControl57_IzXfNJ: function () {
      var selfTemplate = "export\tdefault\tclass\textends\tReact.Component{\n   onClick=(e)=>{\n    var handler=this.props.customHandler;\n     if(handler) {                                    \n       handler({\n         data:[e.target.className,e.target.dataset.line,e.target.dataset.column],\n         eventType:'click'                         \n       })\n     }\n  }\n  render(){\n  \tvar data = this.props.customData || [];\n    var _this=this\n    if(\tdata\t&&\tdata.total.length\t&&\tdata.total.length>0\t){\n       var total=[];\n      total.push(<div\tstyle={{display:'none'}}></div>)\n      \ttotal.push(\n        \t<div\tclassName='ysp-flowsheet' style={{marginTop:'30px',marginBottom:'10px'}}>\n          \t<div>\n        \t\t\t<div className='ysp-total'>\n        \t\t\t\t<h1 style={{color:'rgb(255,32,0)'}}>\n                  {data.total[1]}\t\n          \t\t\t</h1>\n        \t\t\t</div>\n        \t\t</div>\n        \t</div>\n        )\n    }else{\n      var total=[];\n      total.push(<div\tstyle={{display:'none'}}></div>)\n    }\n    if(\tdata\t&&\tdata.content.length\t&&\tdata.content.length>0\t){\n      var _container=[];\n      {\tdata\t&&\tdata.content.map((item,i)=>{\n      \t\t_container.push(\n          \t<div\tclassName='ysp-flowsheet-twoPart-card'>\n              {\titem.map(function(value,index){\n              \t\tif(index==0){\n                  \treturn(\n                  \t\t<p className='ysp-twoPart-cardTit'>\n                    \t\t<span>\n                      \t\t<b></b>\n                        \t{value.cont[0]}\n                      \t</span>\n                    \t</p>\n                  \t\t)\n                \t\t}else{\n                      if(\tvalue.attr=='A'\t){\n                        return(\n                \t\t\t\t\t<div>\n                  \t\t\t\t\t<span>\n                  \t\t\t\t\t\t{data.title[index]}:\n                \t\t\t\t\t\t</span>\n              \t\t\t\t\t\t\t<label\tclassName=\"ysp-address-a\"\tstyle={{color:'#0000EE'}}\tonClick={_this.onClick.bind(_this)}\tdata-column={index}\tdata-line={i}\t>\n                            \t{value.cont[0]}\n                          \t</label>\n            \t\t\t\t\t\t\t</div>\n                \t\t\t\t)\t\n                      }else{\n                        return(\n                \t\t\t\t\t<div>\n                  \t\t\t\t\t<span>\n                  \t\t\t\t\t\t{data.title[index]}:\n                \t\t\t\t\t\t</span>\n              \t\t\t\t\t\t\t<label>\n                            \t{value.cont[0]}\n                          \t</label>\n            \t\t\t\t\t\t\t</div>\n                \t\t\t\t)\t\n                      }\n                \t\t}\n              \t})\n              }\n            </div>\n          )\n      \t})\t\n      }\n    }else{\n    \tvar _container=[];\n      _container.push(\n        <div\tstyle={{display:'none'}}></div>\n      ) \n    }\n    if(data){\n     \treturn(\n    \t\t<div className='ysp-flowsheet'>\n          {total}\n      \t\t<div  className='ysp-flowsheet-twoPart'>\n      \t\t\t{_container}\n      \t\t</div>\n      \t</div>\n    \t) \n    }else{\n      return(\n      \t<div\tclassName=\"ysp-no-data\">\n        \t<i></i>\n        \t<div>\u6682\u65E0\u6570\u636E</div>\n        </div>\n      )\n    }\n\t}\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.onClick = function (e) {\n      var handler = _this2.props.customHandler;\n      if (handler) {\n        handler({\n          data: [e.target.className, e.target.dataset.line, e.target.dataset.column],\n          eventType: 'click'\n        });\n      }\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData || [];\n      var _this = this;\n      if (data && data.total.length && data.total.length > 0) {\n        var total = [];\n        total.push(React.createElement('div', { style: { display: 'none' } }));\n        total.push(React.createElement(\n          'div',\n          { className: 'ysp-flowsheet', style: { marginTop: '30px', marginBottom: '10px' } },\n          React.createElement(\n            'div',\n            null,\n            React.createElement(\n              'div',\n              { className: 'ysp-total' },\n              React.createElement(\n                'h1',\n                { style: { color: 'rgb(255,32,0)' } },\n                data.total[1]\n              )\n            )\n          )\n        ));\n      } else {\n        var total = [];\n        total.push(React.createElement('div', { style: { display: 'none' } }));\n      }\n      if (data && data.content.length && data.content.length > 0) {\n        var _container = [];\n        {\n          data && data.content.map(function (item, i) {\n            _container.push(React.createElement(\n              'div',\n              { className: 'ysp-flowsheet-twoPart-card' },\n              item.map(function (value, index) {\n                if (index == 0) {\n                  return React.createElement(\n                    'p',\n                    { className: 'ysp-twoPart-cardTit' },\n                    React.createElement(\n                      'span',\n                      null,\n                      React.createElement('b', null),\n                      value.cont[0]\n                    )\n                  );\n                } else {\n                  if (value.attr == 'A') {\n                    return React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'span',\n                        null,\n                        data.title[index],\n                        ':'\n                      ),\n                      React.createElement(\n                        'label',\n                        { className: 'ysp-address-a', style: { color: '#0000EE' }, onClick: _this.onClick.bind(_this), 'data-column': index, 'data-line': i },\n                        value.cont[0]\n                      )\n                    );\n                  } else {\n                    return React.createElement(\n                      'div',\n                      null,\n                      React.createElement(\n                        'span',\n                        null,\n                        data.title[index],\n                        ':'\n                      ),\n                      React.createElement(\n                        'label',\n                        null,\n                        value.cont[0]\n                      )\n                    );\n                  }\n                }\n              })\n            ));\n          });\n        }\n      } else {\n        var _container = [];\n        _container.push(React.createElement('div', { style: { display: 'none' } }));\n      }\n      if (data) {\n        return React.createElement(\n          'div',\n          { className: 'ysp-flowsheet' },\n          total,\n          React.createElement(\n            'div',\n            { className: 'ysp-flowsheet-twoPart' },\n            _container\n          )\n        );\n      } else {\n        return React.createElement(\n          'div',\n          { className: 'ysp-no-data' },\n          React.createElement('i', null),\n          React.createElement(\n            'div',\n            null,\n            '\\u6682\\u65E0\\u6570\\u636E'\n          )\n        );\n      }\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    }
  }, "Address");
})(window, ysp);