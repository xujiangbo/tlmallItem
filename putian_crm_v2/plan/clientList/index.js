"use strict";

(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control5_ReXFd8: function (elem) {
      var content = ysp.customHelper.getTableData(elem, ["客户全称", "使用状态"]);return content;
    },
    doAction_uiControl8_FRlQqF: function (data, elem) {
      if (data.eventType === 'click') {
        var operation = data.dataCustom;var aEls = elem.querySelectorAll('table tr td a');[].forEach.call(aEls, function (item, index) {
          var value = ysp.customHelper.trim(item.textContent);
          if (value == operation) {
            item.click();
          }
        });
      }
    },
    getTemplate_uiControl8_FRlQqF: function getTemplate_uiControl8_FRlQqF() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n     let content = (this.props.data.customData && this.props.data.customData.content) || [];\n     let titles = (this.props.data.customData && this.props.data.customData.titles) || [];\n       return (\n         <section className='ysp-client-list-wrapper-container'>\n             {content.length > 0 ?  content.map((item,index)=>{\n                 return (\n                  <section className=\"ysp-client-list-wrapper\" onClick={()=>{\n                          var handler = this.props.customHandler;\n                          if (handler) {\n                            handler({\n                              eventType: 'click',\n                              data:item[0]\n                            });\n                          }\n                       }}>\n                    <article>\n                       <header className=\"ysp-client-list-header\">\n                         <span classNam='ysp-normal-large-font'>{item[0]}</span>\n                       </header>\n                       <div className=\"ysp-client-list-container\">\n                         <span><span className=\"ysp-forbidden-state ysp-normal-font\">{titles[1]} :  </span><span className={item[1]== \"\u901A\u8FC7\" ? \"ysp-forbidden-state ysp-normal-font\":\"ysp-success-state ysp-normal-font\"}>{item[1]}</span></span>\n                       </div>\n                    </article>\n                    <aside>\n                       <span className=\"ysp-entry-icon\"></span>\n                    </aside>\n                 </section>\n                 );\n               }) \n             :<div style={{color:'blur', padding:'20px' , textAlign:'center',fontSize:'18px'}}>\u641C\u7D22\u5185\u5BB9\u4E3A\u7A7A</div>}\n             \n         </section>  \n       );\n   }\n}\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this), _this.render = function () {\n      var content = _this.props.data.customData && _this.props.data.customData.content || [];\n      var titles = _this.props.data.customData && _this.props.data.customData.titles || [];\n      return React.createElement(\n        'section',\n        { className: 'ysp-client-list-wrapper-container' },\n        content.length > 0 ? content.map(function (item, index) {\n          return React.createElement(\n            'section',\n            { className: 'ysp-client-list-wrapper', onClick: function onClick() {\n                var handler = _this.props.customHandler;\n                if (handler) {\n                  handler({\n                    eventType: 'click',\n                    data: item[0]\n                  });\n                }\n              } },\n            React.createElement(\n              'article',\n              null,\n              React.createElement(\n                'header',\n                { className: 'ysp-client-list-header' },\n                React.createElement(\n                  'span',\n                  { classNam: 'ysp-normal-large-font' },\n                  item[0]\n                )\n              ),\n              React.createElement(\n                'div',\n                { className: 'ysp-client-list-container' },\n                React.createElement(\n                  'span',\n                  null,\n                  React.createElement(\n                    'span',\n                    { className: 'ysp-forbidden-state ysp-normal-font' },\n                    titles[1],\n                    ' :  '\n                  ),\n                  React.createElement(\n                    'span',\n                    { className: item[1] == \"\u901A\u8FC7\" ? \"ysp-forbidden-state ysp-normal-font\" : \"ysp-success-state ysp-normal-font\" },\n                    item[1]\n                  )\n                )\n              )\n            ),\n            React.createElement(\n              'aside',\n              null,\n              React.createElement('span', { className: 'ysp-entry-icon' })\n            )\n          );\n        }) : React.createElement(\n          'div',\n          { style: { color: 'blur', padding: '20px', textAlign: 'center', fontSize: '18px' } },\n          '\\u641C\\u7D22\\u5185\\u5BB9\\u4E3A\\u7A7A'\n        )\n      );\n    }, _temp), _possibleConstructorReturn(_this, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },

    getData_control29_Mfu81p: function (elem) {
      if (!elem) {
        return;
      }if (ysp.customHelper.getClientEntry()) {
        return ysp.customHelper.getClientEntry() != "clientList" ? true : false;
      }
    },
    doAction_uiControl33_9KK0th: function (data, elem) {
      data.eventType == 'back' ? ysp.customHelper.backHome() : '回不去了';
    },
    getTemplate_uiControl33_9KK0th: function getTemplate_uiControl33_9KK0th() {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       let flag = this.props.customData;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u5BA2\u6237&\u95E8\u5E97\u4FE1\u606F\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={flag} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      var flag = _this2.props.customData;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u5BA2\u6237&\u95E8\u5E97\u4FE1\u606F\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: flag,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control37_5gPfm7: function (elem) {
      if (!elem) return;var data = {};var item = [];data.prev = false;data.next = false;if (elem.querySelector('.skip')) {
        data.numberTaotal = elem.querySelector('.skip').querySelectorAll('span')[0].textContent.replace(/[^0-9]/g, '');
      }var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
        var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
          switch (as[j].getAttribute('title')) {case 'Go to previous page':
              data.prev = true;break;case 'Go to next page':
              data.next = true;;break;}
        }
      }var liss = elem.querySelectorAll('li');for (var k = 0; k < liss.length; k++) {
        var active = liss[k].className;if (active == 'active') {
          data.currentPage = liss[k].querySelector('a').textContent;
        }
      }data.page = elem.ownerDocument.querySelector('#clientListTbody').querySelectorAll('tr').length != 0 ? true : false;return data;
    },
    doAction_uiControl40_brtH0s: function (data, elem) {
      switch (data.eventType) {case 'prev':
          prevtitle(data.dataCustom);break;case 'next':
          prevtitle(data.dataCustom);break;case 'click':
          click(data.dataCustom);break;}function click(data) {
        var input = elem.ownerDocument.querySelector('.skip-num');input.value = data;input.blur();elem.ownerDocument.querySelector('#Page').querySelector('.skip_right_goto').querySelector('.skip-right-icon').click();
      }function prevtitle(data) {
        var lis = elem.querySelectorAll('li');for (var i = 0; i < lis.length; i++) {
          var as = lis[i].querySelectorAll('a');for (var j = 0; j < as.length; j++) {
            if (data == 'prev' && as[j].getAttribute('title') == 'Go to previous page') {
              as[j].click();
            } else if (data == 'next' && as[j].getAttribute('title') == 'Go to next page') {
              as[j].click();
            }
          }
        }
      }
    },
    getTemplate_uiControl40_brtH0s: function getTemplate_uiControl40_brtH0s() {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {\n  Page\n} from 'ysp-custom-components';\nexport default class extends Component {\n  constructor(props) {\n    super(props);\n    this.state = {\n      prevState: props.customData.prev,\n      pageState:props.customData.page,\n      nextState:props.customData.next\n    }\n  }\n  componentWillReceiveProps(nextProps){\n    this.setState({\n      prevState: nextProps.customData.prev,\n      pageState: nextProps.customData.page,\n      nextState: nextProps.customData.next\n    })\n  }\n  render() {\n    let _this = this;\n    return (\n      <div>\n      \t<Page \n          pageState = {this.state.pageState}\n      \t  prevState = {this.state.prevState}\n          nextState = {this.state.nextState}\n        \tprev={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"prev\",\n              eventType:'prev'\n            })\n          }\n            e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n        }}\n          currentPage = {this.props.customData && this.props.customData.currentPage}\n        \tpageNumber={this.props.customData.numberTaotal}\n        \tnext={(e)=>{\n          var handler = _this.props.customHandler;\n          if(handler){\n            handler({\n              data:\"next\",\n              eventType:\"next\"\n            })\n          }\n            e.target.previousSibling.querySelector('input').value = '';\n        }}\n          Click={(e)=>{\n            var handler = this.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,'')\n            var value = target.parentElement.querySelector('input').value;\n            value = value.replace(/[^0-9]/g,'');\n            if(handler){\n              handler({\n                data:value,\n                eventType:'click'\n              })\n            }\n          }}\n          Change={(e)=>{\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g,'');\n          }}\n      />\n    </div>\n    )\n  }\n}\n\n\n\n";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class(props) {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n    _this2.state = {\n      prevState: props.customData.prev,\n      pageState: props.customData.page,\n      nextState: props.customData.next\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'componentWillReceiveProps',\n    value: function componentWillReceiveProps(nextProps) {\n      this.setState({\n        prevState: nextProps.customData.prev,\n        pageState: nextProps.customData.page,\n        nextState: nextProps.customData.next\n      });\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this3 = this;\n\n      var _this = this;\n      return React.createElement(\n        'div',\n        null,\n        React.createElement(_yspCustomComponents.Page, {\n          pageState: this.state.pageState,\n          prevState: this.state.prevState,\n          nextState: this.state.nextState,\n          prev: function prev(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"prev\",\n                eventType: 'prev'\n              });\n            }\n            e.target.parentElement.querySelector('.input-serch').querySelector('input').value = '';\n          },\n          currentPage: this.props.customData && this.props.customData.currentPage,\n          pageNumber: this.props.customData.numberTaotal,\n          next: function next(e) {\n            var handler = _this.props.customHandler;\n            if (handler) {\n              handler({\n                data: \"next\",\n                eventType: \"next\"\n              });\n            }\n            e.target.previousSibling.querySelector('input').value = '';\n          },\n          Click: function Click(e) {\n            var handler = _this3.props.customHandler;\n            var target = e.target;\n            // target.value = target.value.replace(/[^0-9]/g,'')\n            var value = target.parentElement.querySelector('input').value;\n            value = value.replace(/[^0-9]/g, '');\n            if (handler) {\n              handler({\n                data: value,\n                eventType: 'click'\n              });\n            }\n          },\n          Change: function Change(e) {\n            var target = e.target;\n            target.value = target.value.replace(/[^0-9]/g, '');\n          }\n        })\n      );\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control97_glUzoq: function (elem) {},
    doAction_uiControl105_IDov3N: function (data, elem) {
      if (data.eventType == 'click') {
        elem.querySelector('#customerList_name').value = data.dataCustom;elem.querySelector('#customerList_search').click();
      }
    },
    getTemplate_uiControl105_IDov3N: function getTemplate_uiControl105_IDov3N() {
      var selfTemplate = "import {Component} from 'react';\nimport {CustomerSerch} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(){\n    super();\n    this.state={\n      buttonState : false,\n      commitState : false,\n      commitStateBtn : false,\n      width:false,\n      flag: true\n    }\n  }\n  click(e){\n   // debugger;\n    let _this = this;\n    var handler = this.props.customHandler;\n      if(handler){\n        handler({\n          data:e.target.previousSibling.value,\n          eventType:'click'\n        })\n      }\n      _this.setState({\n        buttonState : false,\n        commitState : false,\n        commitStateBtn : false,\n        width:false,\n        flag:true\n      })\n    e.target.previousSibling.value = '';\n  \t}\n  render(){\n    let _this = this;\n    return(\n    \t<CustomerSerch \n        placeholder='\u641C\u7D22'\n        commitStateBtn ={this.state.commitStateBtn}\n\t\t\t\tclick={_this.click.bind(_this)}\n        buttonState = {this.state.buttonState}\n        commitState = {this.state.commitState}\n        width = {this.state.width}\n        flag = {this.state.flag}\n        />\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this));\n\n    _this2.state = {\n      buttonState: false,\n      commitState: false,\n      commitStateBtn: false,\n      width: false,\n      flag: true\n    };\n    return _this2;\n  }\n\n  _createClass(_class, [{\n    key: 'click',\n    value: function click(e) {\n      // debugger;\n      var _this = this;\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: e.target.previousSibling.value,\n          eventType: 'click'\n        });\n      }\n      _this.setState({\n        buttonState: false,\n        commitState: false,\n        commitStateBtn: false,\n        width: false,\n        flag: true\n      });\n      e.target.previousSibling.value = '';\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this = this;\n      return React.createElement(_yspCustomComponents.CustomerSerch, {\n        placeholder: '\\u641C\\u7D22',\n        commitStateBtn: this.state.commitStateBtn,\n        click: _this.click.bind(_this),\n        buttonState: this.state.buttonState,\n        commitState: this.state.commitState,\n        width: this.state.width,\n        flag: this.state.flag\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control253_T387SK: function (elem) {
      if (!elem) {
        return;
      }return { checkedTitle: ysp.customHelper.secondMenu.getCurrentMenuName(), titles: ysp.customHelper.secondMenu.getMenuNames('clientStoreCard') };
    },
    doAction_uiControl247_DHv8u2: function (data, elem) {
      if (data.eventType === 'click') {
        var as = elem.querySelectorAll('a');var operation = data.dataCustom.value;var win = elem.ownerDocument.defaultView;var planName = ysp.customHelper.secondMenu.getPlanNameByMenuName(operation);ysp.customHelper.secondMenu.toPlanByMenuName(operation, planName);
      }
    },
    getTemplate_uiControl247_DHv8u2: function () {
      var selfTemplate = "import {\n  Component\n} from 'react';\nimport {SecondMenu} from 'ysp-custom-components';\nexport default class extends Component {\n    handlerClick(value,e) {\n      const handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n    render () {\n      let data = this.props.customData;\n      return (\n        <SecondMenu \n          data={data && data.titles}\n          className=\"ysp-vistPlan\"\n          clickItemCb={this.handlerClick.bind(this)}\n          checkedTitle={data && data.checkedTitle}\n          flag = \"true\"\n          />\n        \n      )\n    }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'handlerClick',\n    value: function handlerClick(value, e) {\n      var handler = this.props.customHandler;\n      if (handler) {\n        handler({\n          data: {\n            value: value\n          },\n          eventType: 'click'\n        });\n      }\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var data = this.props.customData;\n      return React.createElement(_yspCustomComponents.SecondMenu, {\n        data: data && data.titles,\n        className: 'ysp-vistPlan',\n        clickItemCb: this.handlerClick.bind(this),\n        checkedTitle: data && data.checkedTitle,\n        flag: 'true'\n      });\n    }\n  }]);\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  }, "clientList");
})(window, ysp);