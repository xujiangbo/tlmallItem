(function (win, ysp) {
  ysp.runtime.Model.extendLoadingModel({
    getData_control221_xcSa0P: function (elem) {},
    doAction_uiControl215_MC9Z9J: function (data, elem) {
      if (data.eventType === 'back') {
        //ysp.customHelper.back(); 
        ysp.appMain.getActiveWindow().close();
      }
    },
    getTemplate_uiControl215_MC9Z9J: function () {
      var selfTemplate = "import {Component} from 'react'; \nimport {CustomHeader} from 'ysp-custom-components';\nexport default class extends Component{\n   \n   render = () => {\n       let _this = this;\n       return (\n         <CustomHeader \n           data={{centerText:\"\u95E8\u5E97\u8BE6\u60C5\",rightText:\"\u7B5B\u9009\"}} \n           backIsShow={true} \n           back={()=>{ \n              let handler = _this.props.customHandler;\n              if (handler) {\n                handler({\n                  eventType: 'back'\n                });\n              }\n           }} \n           filterIsShow={false} \n           filter={()=>{console.info(\"header filter ...\")}}/>\n       );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n  _inherits(_class, _Component);\n\n  function _class() {\n    var _ref;\n\n    var _temp, _this2, _ret;\n\n    _classCallCheck(this, _class);\n\n    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    return _ret = (_temp = (_this2 = _possibleConstructorReturn(this, (_ref = _class.__proto__ || Object.getPrototypeOf(_class)).call.apply(_ref, [this].concat(args))), _this2), _this2.render = function () {\n      var _this = _this2;\n      return React.createElement(_yspCustomComponents.CustomHeader, {\n        data: { centerText: \"\u95E8\u5E97\u8BE6\u60C5\", rightText: \"\u7B5B\u9009\" },\n        backIsShow: true,\n        back: function back() {\n          var handler = _this.props.customHandler;\n          if (handler) {\n            handler({\n              eventType: 'back'\n            });\n          }\n        },\n        filterIsShow: false,\n        filter: function filter() {\n          console.info(\"header filter ...\");\n        } });\n    }, _temp), _possibleConstructorReturn(_this2, _ret);\n  }\n\n  return _class;\n}(_react.Component);\n\nexports.default = _class;";
    },
    getData_control222_HEnUUn: function (elem) {
      if (!elem) {
        return [];
      }var uls = elem.querySelector(".order-ul");var storeName = uls.querySelector("#storeName").textContent;var storeNumber = uls.querySelector("#storeNumber").textContent;var storeType = ysp.customHelper.trim(uls.querySelector("#storeType").textContent);var storeLevel = ysp.customHelper.trim(uls.querySelector("#storeLevel").textContent);var storeOrg = ysp.customHelper.trim(uls.querySelector("#storeOrg").textContent);var userName = uls.querySelector("#userName").textContent;var storeAddr = uls.querySelector("#storeAddr").textContent;return { storeName: storeName, storeNumber: storeNumber, storeType: storeType, storeLevel: storeLevel, storeOrg: storeOrg, userName: userName, storeAddr: storeAddr };
    },
    doAction_uiControl216_XgJf2k: function (data, elem) {},
    getTemplate_uiControl216_XgJf2k: function () {
      var selfTemplate = "var React = require('react');\n\nmodule.exports = React.createClass({\n  render: function(){\n    var data=this.props.data.customData||[];\n    return (\n      <section className='ysp-store-details'>\n      \t<h1>{data.storeName}</h1>\n\n        <footer>\n          <div>\n          \t<ul>\n              <li>\u95E8\u5E97\u7F16\u7801</li>\n              <li>|</li>\n              <li>{data.storeNumber}</li>\n            </ul>\n            <ul>\n              <li>\u95E8\u5E97\u7C7B\u578B</li>\n              <li>|</li>\n              <li>{data.storeType}</li>\n            </ul>\n          </div>\n          <div>\n          \t<ul>\n              <li>\u5206\u7EA7</li>\n              <li>|</li>\n              <li>{data.storeLevel}</li>\n            </ul>\n            <ul>\n              <li>\u6240\u5C5E\u673A\u6784</li>\n              <li>|</li>\n              <li>{data.storeOrg}</li>\n            </ul>\n          </div>\n          \n          <div>\n            <ul>\n              <li>\u5BA2\u6237</li>\n              <li>|</li>\n              <li>{data.userName}</li>\n            </ul>\n          </div>\n          \n          <div>\n            <ul>\n              <li>\u5730\u5740</li>\n              <li>|</li>\n              <li>{data.storeAddr}</li>\n            </ul>\n          </div>\n        </footer>\n      </section>\n    )\n  }\n});";
      return "'use strict';\n\nvar React = require('react');\n\nmodule.exports = React.createClass({\n  displayName: 'exports',\n\n  render: function render() {\n    var data = this.props.data.customData || [];\n    return React.createElement(\n      'section',\n      { className: 'ysp-store-details' },\n      React.createElement(\n        'h1',\n        null,\n        data.storeName\n      ),\n      React.createElement(\n        'footer',\n        null,\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'ul',\n            null,\n            React.createElement(\n              'li',\n              null,\n              '\\u95E8\\u5E97\\u7F16\\u7801'\n            ),\n            React.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            React.createElement(\n              'li',\n              null,\n              data.storeNumber\n            )\n          ),\n          React.createElement(\n            'ul',\n            null,\n            React.createElement(\n              'li',\n              null,\n              '\\u95E8\\u5E97\\u7C7B\\u578B'\n            ),\n            React.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            React.createElement(\n              'li',\n              null,\n              data.storeType\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'ul',\n            null,\n            React.createElement(\n              'li',\n              null,\n              '\\u5206\\u7EA7'\n            ),\n            React.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            React.createElement(\n              'li',\n              null,\n              data.storeLevel\n            )\n          ),\n          React.createElement(\n            'ul',\n            null,\n            React.createElement(\n              'li',\n              null,\n              '\\u6240\\u5C5E\\u673A\\u6784'\n            ),\n            React.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            React.createElement(\n              'li',\n              null,\n              data.storeOrg\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'ul',\n            null,\n            React.createElement(\n              'li',\n              null,\n              '\\u5BA2\\u6237'\n            ),\n            React.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            React.createElement(\n              'li',\n              null,\n              data.userName\n            )\n          )\n        ),\n        React.createElement(\n          'div',\n          null,\n          React.createElement(\n            'ul',\n            null,\n            React.createElement(\n              'li',\n              null,\n              '\\u5730\\u5740'\n            ),\n            React.createElement(\n              'li',\n              null,\n              '|'\n            ),\n            React.createElement(\n              'li',\n              null,\n              data.storeAddr\n            )\n          )\n        )\n      )\n    );\n  }\n});";
    },
    getData_control223_JBWGJC: function (elem) {},
    doAction_uiControl217_fDSFF9: function (data, elem) {},
    getTemplate_uiControl217_fDSFF9: function () {
      var selfTemplate = "export default class extends React.Component {\n\trender(){\n  \treturn (\n    \t<div className='ysp-360-view'>\n        <i></i>\n        <span>\u95E8\u5E97360\u89C6\u56FE</span>\n      </div>\n    )\n  }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_React$Component) {\n  _inherits(_class, _React$Component);\n\n  function _class() {\n    _classCallCheck(this, _class);\n\n    return _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).apply(this, arguments));\n  }\n\n  _createClass(_class, [{\n    key: 'render',\n    value: function render() {\n      return React.createElement(\n        'div',\n        { className: 'ysp-360-view' },\n        React.createElement('i', null),\n        React.createElement(\n          'span',\n          null,\n          '\\u95E8\\u5E97360\\u89C6\\u56FE'\n        )\n      );\n    }\n  }]);\n\n  return _class;\n}(React.Component);\n\nexports.default = _class;";
    },
    getData_control224_t9VHLX: function (elem) {},
    doAction_uiControl218_vTu1Sk: function (data, elem) {
      if (data.eventType === 'click') {
        var operation = data.dataCustom.operation;var planName = data.dataCustom.planName;ysp.customHelper.toPlan(elem, operation, planName);ysp.appMain.showLoading();
      }
    },
    getTemplate_uiControl218_vTu1Sk: function () {
      var selfTemplate = "import {Component} from 'react';\nimport {CustomHeader} from 'ysp-custom-components';\nimport {Dialog} from 'ysp-custom-components';\nexport default class extends Component{\n  constructor(props){\n  \tsuper(props);\n    this.state = {\n    \topen: false\n    }\n  }\n  // handlerInfo(e){\n  //   if(e.target.dataset.key == 'info'){\n  //     window.dispatchEvent(new Event('ysp-company-msg-show'));\n  //   }\n  // }\n   render = ()=>{\n      let data = (this.props.customData && this.props.customData.list) || [];\n      let _this = this;\n      return (\n        <section className=\"ysp-storeinfo-wrapper\">\n         <section className=\"ysp-storeinfo-list\">\n            <div className=\"ysp-storeinfo-list-item\">\n              <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u95E8\u5E97\u8BA2\u5355',\n                             planName:'storeOrderForm'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-storeOrderForm-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u95E8\u5E97\u8BA2\u5355</span>\n                 </div>\n              </div>\n              <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u95E8\u5E97\u5206\u7C7B',\n                             planName:'storeClassify'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-storeClassify-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u95E8\u5E97\u5206\u7C7B</span>\n                 </div>\n              </div>\n              <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u5E97\u5956\u4FE1\u606F',\n                             planName:'storeAwardMessage'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-storeAwardMessage-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u5E97\u5956\u4FE1\u606F</span>\n                 </div>\n              </div>\n              <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u5E97\u5458\u4FE1\u606F',\n                             planName:'storeClerkMessage'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-clerkMessage-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u5E97\u5458\u4FE1\u606F</span>\n                 </div>\n              </div>\n              \n            </div>\n           <div className=\"ysp-storeinfo-list-item\">\n              <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u8D23\u4EFB\u56E2\u961F',\n                             planName:'storeResponsibilityTem'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-responsibilityTeam-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u8D23\u4EFB\u56E2\u961F</span>\n                 </div>\n              </div>\n             <div  onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u95E8\u5E97\u8FC7\u5F80\u4E1A\u7EE9',\n                             planName:'storeEndAchievement'\n                          }\n                        });\n                      }\n                 }}>\n                 <div>\n                    <span className=\"ysp-storePerformance-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u95E8\u5E97\u8FC7\u5F80\u4E1A\u7EE9</span>\n                 </div>\n              </div>\n             <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u95E8\u5E97\u62DC\u8BBF',\n                             planName:'storePayVisit'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-storeVisit-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u95E8\u5E97\u62DC\u8BBF</span>\n                 </div>\n              </div>\n              <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u95E8\u5E97\u9500\u552E\u8FBE\u6210',\n                             planName:'storeSalesReacheds'\n                          }\n                        });\n                      }\n                }}>\n                 <div>\n                    <span className=\"ysp-storeSalesReached-icon\"></span>\n                 </div>\n                 <div>\n                    <span>\u95E8\u5E97\u9500\u552E\u8FBE\u6210</span>\n                 </div>\n              </div>\n            </div>\n           \n           <div className=\"ysp-storeinfo-list-item\">\n             <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      if (handler) {\n                        handler({\n                          eventType: 'click',\n                          data:{\n                             operation:'\u95E8\u5E97\u7167\u7247',\n                             planName:'storePhoto'\n                          }\n                        });\n                      }\n                 }}>\n               <div>\n                  <span className=\"ysp-storePhoto-icon\"></span>\n               </div>\n               <div>\n                  <span>\u95E8\u5E97\u7167\u7247</span>\n               </div>\n             </div>\n             <div onClick={()=>{\n                     var handler = this.props.customHandler;\n                      // if (handler) {\n                      //   handler({\n                      //     eventType: 'click',\n                      //     data:{\n                      //        operation:'\u5E97\u5956\u4FE1\u606F',\n                      //        planName:'storeAwardMessage'\n                      //     }\n                      //   });\n                      // }\n                }}>\n                 <div>\n                    <span className=\"\"></span>\n                 </div>\n                 <div>\n                    <span></span>\n                 </div>\n              </div>\n             <div>\n                 <div>\n                    <span></span>\n                 </div>\n                 <div>\n                    <span></span>\n                 </div>\n              </div>\n              <div>\n                 <div>\n                    <span></span>\n                 </div>\n                 <div>\n                    <span></span>\n                 </div>\n              </div>\n            </div>\n    \n         </section>\n      </section>\n      );\n   }\n}";
      return "'use strict';\n\nObject.defineProperty(exports, \"__esModule\", {\n   value: true\n});\n\nvar _react = require('react');\n\nvar _yspCustomComponents = require('ysp-custom-components');\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar _class = function (_Component) {\n   _inherits(_class, _Component);\n\n   function _class(props) {\n      _classCallCheck(this, _class);\n\n      var _this2 = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));\n\n      _this2.render = function () {\n         var data = _this2.props.customData && _this2.props.customData.list || [];\n         var _this = _this2;\n         return React.createElement(\n            'section',\n            { className: 'ysp-storeinfo-wrapper' },\n            React.createElement(\n               'section',\n               { className: 'ysp-storeinfo-list' },\n               React.createElement(\n                  'div',\n                  { className: 'ysp-storeinfo-list-item' },\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u95E8\u5E97\u8BA2\u5355',\n                                    planName: 'storeOrderForm'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storeOrderForm-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u95E8\\u5E97\\u8BA2\\u5355'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u95E8\u5E97\u5206\u7C7B',\n                                    planName: 'storeClassify'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storeClassify-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u95E8\\u5E97\\u5206\\u7C7B'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u5E97\u5956\u4FE1\u606F',\n                                    planName: 'storeAwardMessage'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storeAwardMessage-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u5E97\\u5956\\u4FE1\\u606F'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u5E97\u5458\u4FE1\u606F',\n                                    planName: 'storeClerkMessage'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-clerkMessage-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u5E97\\u5458\\u4FE1\\u606F'\n                        )\n                     )\n                  )\n               ),\n               React.createElement(\n                  'div',\n                  { className: 'ysp-storeinfo-list-item' },\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u8D23\u4EFB\u56E2\u961F',\n                                    planName: 'storeResponsibilityTem'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-responsibilityTeam-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u8D23\\u4EFB\\u56E2\\u961F'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u95E8\u5E97\u8FC7\u5F80\u4E1A\u7EE9',\n                                    planName: 'storeEndAchievement'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storePerformance-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u95E8\\u5E97\\u8FC7\\u5F80\\u4E1A\\u7EE9'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u95E8\u5E97\u62DC\u8BBF',\n                                    planName: 'storePayVisit'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storeVisit-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u95E8\\u5E97\\u62DC\\u8BBF'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u95E8\u5E97\u9500\u552E\u8FBE\u6210',\n                                    planName: 'storeSalesReacheds'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storeSalesReached-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u95E8\\u5E97\\u9500\\u552E\\u8FBE\\u6210'\n                        )\n                     )\n                  )\n               ),\n               React.createElement(\n                  'div',\n                  { className: 'ysp-storeinfo-list-item' },\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           if (handler) {\n                              handler({\n                                 eventType: 'click',\n                                 data: {\n                                    operation: '\u95E8\u5E97\u7167\u7247',\n                                    planName: 'storePhoto'\n                                 }\n                              });\n                           }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: 'ysp-storePhoto-icon' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement(\n                           'span',\n                           null,\n                           '\\u95E8\\u5E97\\u7167\\u7247'\n                        )\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     { onClick: function onClick() {\n                           var handler = _this2.props.customHandler;\n                           // if (handler) {\n                           //   handler({\n                           //     eventType: 'click',\n                           //     data:{\n                           //        operation:'\u5E97\u5956\u4FE1\u606F',\n                           //        planName:'storeAwardMessage'\n                           //     }\n                           //   });\n                           // }\n                        } },\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', { className: '' })\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', null)\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     null,\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', null)\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', null)\n                     )\n                  ),\n                  React.createElement(\n                     'div',\n                     null,\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', null)\n                     ),\n                     React.createElement(\n                        'div',\n                        null,\n                        React.createElement('span', null)\n                     )\n                  )\n               )\n            )\n         );\n      };\n\n      _this2.state = {\n         open: false\n      };\n      return _this2;\n   }\n   // handlerInfo(e){\n   //   if(e.target.dataset.key == 'info'){\n   //     window.dispatchEvent(new Event('ysp-company-msg-show'));\n   //   }\n   // }\n\n\n   return _class;\n}(_react.Component);\n\nexports.default = _class;";
    }
  });
})(window, ysp);