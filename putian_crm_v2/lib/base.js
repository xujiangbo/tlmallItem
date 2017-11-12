//订阅模式
;
(function(exports) {
  function PSubscribe() {
    this.topicList = [];
  }
  PSubscribe.prototype = {
    subscribe: function(topic, cb, caller) {
      if (!cb || !topic) return;
      var exist = false;
      this.topicList.forEach(function(item) {
        if (item.topic === topic) {
          exist = true;
          item.list.push({
            callback: cb,
            caller: caller
          });
        }
      });
      if (!exist) {
        this.topicList.push({
          topic: topic,
          list: [{
            callback: cb,
            caller: caller
          }]
        });
      }
    },
    publish: function(topic, data) {
      this.topicList.forEach(function(item) {
        if (item.topic === topic) {
          item.list.forEach(function(listener) {
            listener.callback.call(listener.caller ? listener.caller : null, data);
          });
        }
      });
    },
    remove: function(topic, cb) {
      if (!cb || !topic) return;
      this.topicList.forEach(function(item) {
        if (item.topic === topic) {
          if (Array.isArray(item.list)) {
            var start;
            item.list.forEach(function(listener, index) {
              if (listener.callback === cb) {
                start = parseInt(index);
              }
            });
            if (start !== undefined) {
              item.list.splice(start, 1);
            }
          }
        }
      });
    }
  };
  exports.pt_oberseve = new PSubscribe();
})(window);;
(function(win, ysp) {
  var utils = ysp.utils;
  ysp.customHelper = {};
  var topWin = null;
  var loginWin = null;
  var forEach = Array.prototype.forEach;
  var currentModelID = ""; //当前动作
  var singleTaskManager = null; //单例任务池
  var taskTimeoutId;
  var winContainer = [];
  var clientEntry;
  var currentSecondMenuId;
  var isFirstLoaded = true;
  
  //行为拦截器
  function intercepter(type, menuId) {
    switch (type) {
      case 'visitManager':
        ysp.customHelper.secondMenu.toPlanByMenuName('拜访总览', null, menuId);
        break;
      case 'SalesReached':
        ysp.customHelper.secondMenu.toPlanByMenuName('库存查询', null, menuId);
        break;
      case 'achievementSecondMenu':
        ysp.customHelper.secondMenu.toPlanByMenuName('业绩总览', null, menuId);
        break;
      case 'newInformationTotle':
        ysp.customHelper.secondMenu.toPlanByMenuName('客户信息录入', null, menuId);
        break;
      case "clientStoreCard":
        ysp.customHelper.secondMenu.toPlanByMenuName('客户360', null, menuId);
        break;
    }
  }
  //强制执行适配方案
  function executePlan(modelID, menuId) {
    if (ysp.runtime.Model.setForceMatchModels && modelID) {
      var matchs = [];
      //@todo 暂时放在这里处理
     //if(modelID === 'newInformationTotle1') modelID && matchs.push('newInformationTotle');
      //else  modelID && matchs.push(modelID);
       modelID && matchs.push(modelID);
      ysp.runtime.Model.setForceMatchModels(matchs);
      intercepter(modelID, menuId);
      setTimeout(function() {
        var taskPool = getSingletonTask();
        taskPool.status = "idle";
        taskPool.executeFinalTask();
      }, 100);
    }
  }
  //分发消息策略
  function executeAction(task) {
    var _this = this;
    var operation = '';
    clearTimeout(taskTimeoutId);
    if (task.intercepter) {
      operation = task.intercepter;
    } else {
      operation = task.title;
    }
    var flag = false;
    var onceExecuteFlag = true;
    var onceExecuteTimeoutId;

    function execute() {
      function clickMenu() {
        if (topWin && topWin.document.readyState === "complete") {
          if (topWin.location.href.indexOf('index.html') != -1) {
            var xpath = '//nav[@id="menu"]//a//descendant::span[@menucode="' + operation + '"]';
            var doc = topWin.document;
            var menuItem = ysp.utils.xfind(xpath, doc) && ysp.utils.xfind(xpath, doc)[0];
            if (menuItem) {
              var ancestorFirstAEl = menuItem;
              while (ancestorFirstAEl) {
                if (ancestorFirstAEl.tagName.toLowerCase() !== 'a') {
                  ancestorFirstAEl = ancestorFirstAEl.parentElement;
                } else {
                  break;
                }
              }
              flag = true;
              if (ancestorFirstAEl) {
                var menu = JSON.parse(ancestorFirstAEl.getAttribute('menu'));
                //currentSecondMenuId = menu && menu.id;
                var hrefStr = ancestorFirstAEl.getAttribute('val');
                if (!!hrefStr) {
                  ysp.customHelper.openWindow(hrefStr, operation);
                  if (!parent.EAPI.isIOS()) {
                    menuItem.click();
                    clearTimeout(onceExecuteTimeoutId);
                    if (!task.intercepter) {
                      executePlan(task.type, menu && menu.id);
                    }
                  }
                } else {
                  menuItem.click();
                  clearTimeout(onceExecuteTimeoutId);
                  if (!task.intercepter) {
                    executePlan(task.type, menu && menu.id);
                  }
                }
              }
            }
          }
        }
        if (!flag) {
          taskTimeoutId = setTimeout(clickMenu.bind(_this), 200);
        }
      }
      clickMenu();
    }
    //关键点，在此处需要设置一个权限验证，如果查询菜单查询超过5s钟，就提示没有权限
    function validatePrivilege() {
      var _this = this;
      var xhr = new topWin.XMLHttpRequest();
      xhr.open('POST', 'http://192.168.220.82:8080/pttlCrm/sys/auth/rela/getSystemLeftMenuList', true);
      xhr.error = function(e) {
        console.error(e);
      }
      xhr.onreadystatechange = function() {
        if (xhr.readyState === topWin.XMLHttpRequest.DONE) {
          if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
            var menuInfo = xhr.responseText;
            if (menuInfo.indexOf(operation) == -1) {
              //flag = true; //如果没有权限的话，监控马上终止
              menuInfo = JSON.parse(menuInfo);
              if (menuInfo.isHaveSession && menuInfo.isHaveSession == 'no') {
                //alert('正在登录中...');
                //return;
                ysp.customHelper.statusManager.currentStatus = 'LOADING'; //LOADING 数据加载中 NO_PRIVILEGE 无此权限  LOGINING 登录中 NETWORK_ERROR 网路异常
                setTimeout(validatePrivilege.bind(_this), 100);
              } else {
                //alert('没有此权限');
                ysp.customHelper.statusManager.currentStatus = 'NO_PRIVILEGE';
                var rtWin = ysp.customHelper.getRTWin();
                if (rtWin && rtWin.frames) {
                  var frames = rtWin.frames;
                  ysp.runtime.Model.setForceMatchModels(['index']);
                  [].forEach.call(frames, function(frame) {
                    if (frame.name != 'sourcePageFrame') {
                      frame.close();
                    }
                  });
                }
                //parent.EAPI.back();
              }

              //return;
            } else {
              ysp.customHelper.statusManager.currentStatus = 'LOADING';
              execute();
            }
          } else {
            ysp.customHelper.statusManager.currentStatus = 'LOADING';
            setTimeout(validatePrivilege.bind(_this), 100);
            //alert('网络异常');
          }
        }
      }

      xhr.send(null);
    }
    validatePrivilege();
    //写一个方法,刚进入页面弹出一个alert提示加载中.500ms后自动关闭
    // if (onceExecuteFlag && !flag) {
    //   onceExecuteTimeoutId = setTimeout(validatePrivilege.bind(this), 1500);
    // }
    onceExecuteFlag = false;
    if (topWin.location.href.indexOf('login') != -1) {
      executePlan('login');
    }

  }

  function _getThirdMenuList(parentId, callback) {
    var xhr = new topWin.XMLHttpRequest();
    xhr.open('POST', 'http://192.168.220.82:8080/pttlCrm/sys/auth/menu/getThirdMenuList', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhr.onreadystatechange = function() {
      if (xhr.readyState === topWin.XMLHttpRequest.DONE) {
        if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
          var menuInfo = xhr.responseText;
          callback(menuInfo);
          //callback("分货查询,产品上下架信息查询");
        }
      }
    }
    xhr.send('parentMenuId=' + parentId);
  }
  /*
   * type 消息类型
   */
  function dispatchMsg(task) {
    var type = task.type;
    var msgType = "";
    console.log('webview send msg type is: ' + type);
    if (!task.name) {
      switch (type) {
        case 'clientList': //客户360视图 导航进入
          clientEntry = 'clientList';
          task.title = "CUST360";
          break;
        case 'clientListCard': //客户360视图 一级菜单中进入
          clientEntry = 'clientListCard';
          type = 'clientList';
          task.title = "CUST360";
          break;
        case 'customerWorkspace': //工作台
          task.title = "VISIT_WORKSPACE";
          break;
        case 'saleTask': //达成情况
          task.title = "RESULT_INFO";
          break;
          // case 'newInformationTotle':// case 'informationFill': //信息录入
          //    task.title = "DATA_ENTRY_MOBILE";
          //    break;
        // case 'customerInformationFIll': //信息录入(新)
        //   task.title = "DATA_ENTRY";
        //   break;
        case 'newInformationTotle': //信息录入(新+1)
          task.title = "ENTRY_DATA_TOTLE";
          break;
          // case 'newInformationTotle': //信息录入(新+1)
          // task.title = "ENTRY_DATA_TOTLE";
          // break;
        case 'SalesReached': //数据看版
          task.title = "dataShowColection";
          break;
        case 'visitManager': //拜访管理
          //task.title = "VISIT_MANAGE";
          task.title = "BFGLBB";
          break;
        case 'visitIndex': //拜访总览
          task.title = "VISIT_TOTAL";
          //task.intercepter = "拜访管理";
          break;
        case 'achievementIndex':
          task.title = "YJDCBB";
          break;
        case 'achievementSecondMenu':
          task.title = "YJDCBB";
          break;
        case 'clientStoreCard': // 客户和门店
          task.title = "cs_customerAndStore";
          break;
        case 'storeList'://门店
          task.title = "STORE360";
          break;
        default:
          msgType = "no"
          break;
      }
      task.name = msgType;
    }
    currentModelID = type;
    //intercepter(msgType, type);
    executeAction(task);
  }
  //任务池，防止用户疯狂点击，造成系统卡死
  function TasksManager() {
    this.tasks = [];
    this._status = 'idle';
    this.currentTask = null;
  }
  TasksManager.prototype.addTask = function(task) {
    this.tasks.push(task);
  }
  TasksManager.prototype.removeTasks = function() {
    this.tasks = [];
  }
  TasksManager.prototype.executeTask = function(task) { //{title:,trails:,type:} name为任务名称，data为数据,type 任务类型
    var _this = this;
    if (typeof task === 'string') {
      task = {
        type: task
      }
    }
    setTimeout(function() { //确保用户在意外情况，强制让其进入闲置状态
      if (_this.status == 'busy') {
        _this.status = 'idle';
        _this.executeFinalTask();
      }
    }, 3000);
    if (this.status == 'idle') {
      //ysp.appMain.showLoading();
      this.status = 'busy';
      this.currentTask = task;
      dispatchMsg(task);
      console.info('TasksManager is executing ' + task.name);
    } else {
      this.addTask(task);
    }
  }
  TasksManager.prototype.existTask = function() {
    if (this.tasks.length > 0) {
      return true;
    } else {
      return false;
    }
  }
  TasksManager.prototype.executeFinalTask = function() { 
    if (this.status == 'idle' && this.existTask()) {
      var task = this.tasks[this.tasks.length - 1];
      task = ysp.utils.assign({}, task);
      this.removeTasks();
      if (task.name != this.currentTask.name) {
        this.executeTask(task);
      }
    }
  }
  Object.defineProperty(TasksManager.prototype, 'status', {
    set: function(newVaule) {
      this._status = newVaule;
    },
    get: function() {
      return this._status;
    }
  });

  function getSingletonTask() {
    if (!singleTaskManager) {
      singleTaskManager = new TasksManager();
    }
    return singleTaskManager;
  }
  var cwin = window.parent;
  var waittingAction = "";
  var recoverSceneId;
  var timeStamps = [];
  cwin._yspNativeEventHandler = function(type, stop) {
    cwin.sessionStorage.clear();
    cwin.sessionStorage.setItem('msg', type);
    if (ysp.customHelper && ysp.customHelper.statusManager)
      ysp.customHelper.statusManager.currentStatus = "LOADING";
    timeStamps.push(Date.now());
    if (timeStamps.length >= 3) {
      timeStamps.splice(0, timeStamps.length - 2);
    }
    clearTimeout(recoverSceneId);
    var aWin = ysp.runtime.Browser.activeBrowser.contentWindow;
    var activeContext = ysp.runtime.Context.activeContext;
    var realType = type;
    if(realType === "newInformationTotle"){
       realType = "customerInformationFIll";
       aWin && (aWin.location.href.indexOf('index.html') == -1) && aWin.location.reload()
    }
    // if (type === "achievement" || type === "dataPanel" || type === "customerIn" || type === "achievementSecondMenu" || type == 'newInformationTotle' || type === "clientStoreCard") {
    //   if (activeContext && activeContext.model.id == realType) {
    //     console.log('小伙子，你在当前方案下继续触发当前方案，驳回，_yspNativeEventHandler type is ' + type + 'real type is ' + realType);
    //     return;
    //   }
    // }
    

    if (type === "achievement" || type === "dataPanel" || type === "customerIn" || type === "achievementSecondMenu" || type == 'newInformationTotle' || type === "clientStoreCard" || type === "newInformationTotle1") {
      if (activeContext && activeContext.model.id == realType) {
        console.log('小伙子，你在当前方案下继续触发当前方案，驳回，_yspNativeEventHandler type is ' + type + 'real type is ' + realType);
         return;
      }
      if(activeContext && activeContext.model.id == 'customerInformationFIll' && type != "achievement" && type != "dataPanel" && type != "customerIn" && type != "achievementSecondMenu" && type != "clientStoreCard"){ // 信息录入页面加载无刷新
        aWin && (aWin.location.href.indexOf('index.html') == -1) && aWin.location.reload();
        return;
      }
    }
    //频繁点击，恢复现场
    function recoverScene() {
      var taskPool = getSingletonTask();

      function execute() {
        var activeContext = ysp.runtime.Context.activeContext;
        if (!activeContext && !stop) {
          cwin._yspNativeEventHandler(type, true);
          return;
        }
        if (activeContext && activeContext.model.id != realType && !stop) {
          cwin._yspNativeEventHandler(type, true);
        }
      }
      execute();
    }
    //recoverSceneId = setTimeout(recoverScene.bind(this),2000);
    var timeGapLen = timeStamps.length;
    if (timeGapLen >= 2) {
      var timeGap = timeStamps[timeGapLen - 1] - timeStamps[timeGapLen - 2];
      if (timeGap <= 1000) {
        recoverScene();
      }
    }

    switch (type) {
      case "dataPanel":
        type = "SalesReached";
        break;
      case "achievement":
        type = "achievementSecondMenu";
        break;
      case "newInformationTotle1":
        type = "newInformationTotle";
        break;
    }

    if (topWin) {
      var activeBrowser = ysp.runtime.Browser.activeBrowser;
      if (activeBrowser) {
        var activeBrowserId = activeBrowser.id;
        if (activeBrowserId != "firstLevelIframeContainer" && activeBrowserId != "mainFrame") {
          activeBrowser.contentWindow && activeBrowser.contentWindow.close();
        }
      }
      //test
      // if (type == 'visitLookerTest') {
      //   topWin.open("http://192.168.220.82:8080/pttlCrm/res/page/visitManager/visitLook/visitlook.html", type);
      //   executePlan('visitLookerTest');
      //   return;
      // } else if (type == 'atMyReportTest') {
      //   topWin.open("http://192.168.220.82:8080/pttlCrm/res/page/customerAtReport/customerAtReport.html", type);
      //   executePlan('atMyReportTest');
      //   return;
      // } else if (type == 'personVisitAchieveTest') {
      //   if (parent.EAPI.isIOS()) {
      //     ysp.appMain.openWindow('http://192.168.220.82:8080/ptDataShow/commonReports/commonReportsByEncoder?reportPid=customerView&filter_userId=SONGFEI&encoder=U09OR0ZFSSswNy8xOTIvMjAxNyAxMzo0NjoxOA==');
      //   } else {
      //     topWin.open('http://192.168.220.82:8080/ptDataShow/commonReports/commonReportsByEncoder?reportPid=customerView&filter_userId=SONGFEI&encoder=U09OR0ZFSSswNy8xOTIvMjAxNyAxMzo0NjoxOA==', type);
      //     executePlan('personVisitAchieveTest');
      //   }
      // }
      //test
    }
    if (type == 'login') {
      var doc = topWin.document;
      var flag = false;
      if (topWin) {
        var logout = doc.getElementById('logout');
        if (logout) {
          //logout.click();
          //ysp.runtime.Model.setForceMatchModels(['login']);
        }
        var activeWin = ysp.runtime.Browser.activeBrowser.contentWindow;
        if (activeWin) {
          activeWin.close();
        }
        topWin.location.href = "http://192.168.220.82:8080/pttlCrm/res/page/login/login.html";
      }
      return;
    }
    var taskPool = getSingletonTask();
    taskPool.executeTask(type);
  }
  //获取放大图片器
  var _bigPicture = {
    getImgEl: function() {
      if (topWin) {
        var doc = topWin.document;
        var layerPicBox = ysp.utils.xfind('//div[contains(@class,"viewer-container") and contains(@class,"viewer-in")]', doc)[0];
        if (layerPicBox) {
          var imgEl = layerPicBox.querySelector("img");
          if (imgEl) {
            return imgEl
          }
        }
      }
    }
  }
  //获取不是当前iframe里的alert/div/弹框
  var _tipMsg = {
    getMsg: function() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var contentEl = layerTipEl.querySelector('div.layui-layer-content');
          if (contentEl) {
            return contentEl.textContent;
          }
        }
      }
    },
    cancelText: function() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var cancelTxt = layerTipEl.querySelector('a.layui-layer-btn1');
          if (cancelTxt) {
            return cancelTxt.textContent
          }
        }
      }
    },
    confirm: function() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var confirmBtn = layerTipEl.querySelector('a.layui-layer-btn0');
          if (confirmBtn) {
            confirmBtn.click();
          }
        }
      }
    },
    cancel: function() {
      if (topWin) {
        var doc = topWin.document;
        var layerTipEl = ysp.utils.xfind('//div[contains(@class,"layui-layer") and @type="dialog" and contains(@id,"layui-layer")]', doc)[0];
        if (layerTipEl) {
          var cancelBtn = layerTipEl.querySelector('a.layui-layer-btn1');
          if (cancelBtn) {
            cancelBtn.click();
          }
        }
      }
    }
  }
  //通过标记法来优化销售达成
  var _saleReachStamp = {
    tip: 0,
    increment: function() {
      this.tip += 1;
    },
    decrement: function() {
      if (this.tip < 0) {
        this.tip = 0;
      } else {
        this.tip -= 1;
      }
    },
    getTipValue: function() {
      return this.tip;
    },
    clear: function() {
      this.tip = 0;
    }
  }

  function _refreshWinAfterWinName(name, cb) {
    var flag = false;
    var rtWin = ysp.customHelper.getRTWin();
    if (!flag) {
      function refreshWin() {
        if (!ysp.customHelper.getWinFromRTByName(name)) {
          flag = true;
          cb();
        }
        if (!flag) {
          setTimeout(refreshWin.bind(this), 200);
        }
      }
      refreshWin();
    }
  }
  utils.extend(ysp.customHelper, {
    getTableData: _getTableData,
    trim: _trim,
    forceMatchModels: _forceMatchModels,
    toPlan: _toPlan,
    back: _back,
    tipMsg: _tipMsg,
    bigPicture: _bigPicture,
    refreshWinAfterWinName: _refreshWinAfterWinName,
    getTableClassData:_getTableClassData,
    getRTWin: function() {
      var aWin = ysp.runtime.Browser.activeBrowser.contentWindow;
      if (aWin) {
        return aWin.frameElement.ownerDocument.defaultView;
      }
      return;
    },
    pageId: _pageId,
    yearId: _yearId,
    /**
     * @description 登录状态管理器
     * @param currentStatus LOADING 数据加载中 NO_PRIVILEGE 无此权限  LOGINING 登录中  NETWORK_ERROR 网络异常
     */
    statusManager: {
      _currentStatus: 'LOADING',
      get currentStatus() {
        return this._currentStatus;
      },
      set currentStatus(currentStatus) {
        if (typeof currentStatus === 'string')
          this._currentStatus = currentStatus;
        else
          this._currentStatus = 0;
      }
    },
    getRootPath: function(win) {
      var href = win.location.href;
      return href && href.match(/^http.*\//) && href.match(/^http.*\//)[0];
    },
    closeLoading: function() {

    },
    // 把image 转换为 canvas对象  
    convertImageToCanvas: function(image) {
      // 创建canvas DOM元素，并设置其宽高和图片一样   
      var canvas = document.createElement("canvas");
      canvas.width = image.naturalWidth;
      canvas.height = image.naturalHeight;
      // 坐标(0,0) 表示从此处开始绘制，相当于偏移。  
      canvas.getContext("2d").drawImage(image, 0, 0);
      return canvas;
    },
    // 从 canvas 提取图片 image  
    convertCanvasToImage: function(canvas) {
      // canvas.toDataURL 返回的是一串Base64编码的URL，当然,浏览器自己肯定支持  
      return canvas.toDataURL("image/png");
    },
    dealImage: function(path, obj, callback) {
      var img = new Image();
      img.src = path;
      img.onload = function srcImg() {
        var that = this;
        // 默认按比例压缩
        var w = that.width,
          h = that.height,
          scale = w / h;
        w = obj.width || w;
        h = obj.height || (w / scale);
        var quality = 0.7; // 默认图片质量为0.7
        //生成canvas
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        // 创建属性节点
        var anw = document.createAttribute("width");
        anw.nodeValue = w;
        var anh = document.createAttribute("height");
        anh.nodeValue = h;
        canvas.setAttributeNode(anw);
        canvas.setAttributeNode(anh);
        ctx.drawImage(that, 0, 0, w, h);
        // 图像质量
        if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
          quality = obj.quality;
        }
        // quality值越小，所绘制出的图像越模糊
        var base64 = canvas.toDataURL('image/png', quality);
        // 回调函数返回base64的值
        callback(base64);
      }
    },
    secondMenu: {
      menuMap: {},
      currentMenuId: "",
      init: function() {
        this.menuMap = {
          visitLook: "拜访查看",
          AtReport: "@我的报告",
          personVisitAchieveTest: "人员拜访达成",
          productFrom: "产品上下架信息查询",
          goodsMessages: "分货查询",
          stockInquire: "库存查询",
          visitIndex: "拜访总览",
          achievement: "业绩总览",
          saleReachMonth: "月度销售达成",
          saleReachYear: "年度销售达成",
          customerInformationFIll: "客户信息录入",
          HESInformationFill: "门店信息录入（HES）",
          storeList: "门店360",
          clientList: '客户360'
        };
        for (var key in this.menuMap) {
          if (this.menuMap.hasOwnProperty(key)) {
            this.menuMap[this.menuMap[key]] = key;
          }
        }
        this.menuNames = {
          visitManager: ["拜访总览", "拜访查看", "@我的报告"],
          dataPanel: ["库存查询", "分货查询", "产品上下架信息查询"],
          achievement: ["业绩总览", "月度销售达成", "年度销售达成"],
          customerIn: ["客户信息录入", "门店信息录入（HES）"],
          clientStoreCard: ["客户360", "门店360"]
        }
      },
      getMenuNames: function(parentMenuType) { //parentMenuType 相当于是modelId'
        var secondMenuIframe = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
        if (!secondMenuIframe) {
          return;
        }
        var doc = secondMenuIframe.document;
        var menu = doc.getElementById('menu');
        if (!menu) {
          return;
        }
        var as = menu.querySelectorAll('a');
        var content = [];
        [].forEach.call(as, function(item, index, self) {
          content.push(ysp.customHelper.trim(item.textContent));
        });
        var realMenuNames = [];
        if (!!parentMenuType) {
          var menuNames = this._getMenuNamesByMenuType(parentMenuType) || [];
          menuNames.forEach(function(item) {
            if (content.indexOf(item) != -1)
              realMenuNames.push(item);
          });
        }
        return parentMenuType ? realMenuNames : content;
      },
       
      _getMenuNamesByMenuType: function(menuType) {
        return this.menuNames && this.menuNames[menuType];
      },
      _toPlanByMenuName: function(menuName) {
        var planName = this.getPlanNameByMenuName(menuName);
        this.currentMenuId = planName;
        planName = planName === "saleReachMonth" || planName === "saleReachYear" ? "saleReach" : planName;
        var activeModel = ysp.runtime.Model.getActiveModel();
        var flag = false;

        function findSecondMenu() {
          var secondMenuIframe = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          var doc = secondMenuIframe && secondMenuIframe.document;
          var menu = doc && doc.getElementById('menu');
          var as = (menu && menu.querySelectorAll('a')) || [];
          var activeWin = ysp.runtime.Browser.activeBrowser.contentWindow;
          [].forEach.call(as, function(item, index, self) {
            var text = ysp.customHelper.trim(item.textContent);
            if (menuName === text) {
              if (activeWin && activeWin.frameElement.name !== 'firstLevelIframeContainer') {
                // var iframeParent = activeWin.frameElement.parentElement;
                // var iframeGrand = iframeParent.parentElement;
                // if (iframeGrand) {
                //   iframeGrand.removeChild(iframeParent);
                // }
                if (activeModel) {
                  var modelId = activeModel.id;
                  if (modelId != planName) {
                    activeWin.close();
                  }
                }
              };
              var win = item.ownerDocument.defaultView;
              if (item.href && item.href.indexOf('javascript') == -1) {
                if (activeModel) {
                  var modelId = activeModel.id;
                  if (modelId == planName) {
                    //win[planName].location.href = item.href;
                    var currentWin = ysp.customHelper.getWinFromRTByName(planName);
                    currentWin && (currentWin.location.href = item.href);
                  } else {
                    win.open(item.href, planName);
                    ysp.runtime.Model.setForceMatchModels([planName]);
                  }
                }

                flag = true;
              }
            }
          });
          if (!flag) {
            setTimeout(findSecondMenu.bind(this), 200);
            return;
          }
        }
        findSecondMenu();
      },
      toPlanByMenuName: function(menuName, planName, parentMenuId) {
        var _this = this;
        var parentMenuType;

        if (typeof menuName !== 'string') {
          return;
        }
        if (parentMenuId) { //有parentMenuId 就代表入口是从首页面进入的，也即_yspNativeEventHandler
          switch (menuName) {
            case "库存查询":
              parentMenuType = "dataPanel";
              break;
            case "拜访总览":
              parentMenuType = "visitManager";
              break;
            case "业绩总览":
              parentMenuType = "achievement";
              break;
            case "客户信息录入":
              parentMenuType = "customerIn";
              break;
          }
          var callback = function(menuInfo) {
            if (menuInfo.indexOf(menuName) != -1) {
              _this._toPlanByMenuName(menuName);
            } else {
              //var menuInfo = JSON.parse(menuInfo);
              var menuNames = _this._getMenuNamesByMenuType(parentMenuType) || [];
              for (var i = 0; i < menuNames.length; i++) {
                if (menuInfo.indexOf(menuNames[i]) !== -1) {
                  _this._toPlanByMenuName(menuNames[i]);
                  break;
                }
              }
            }
          }
          _getThirdMenuList(parentMenuId, callback);
          // var flag = false;
          // function findSecondMenu() {
          //     var secondMenuIframe = ysp.customHelper.getWinFromRTByName('firstLevelIframeContainer');
          //     var doc = secondMenuIframe && secondMenuIframe.document;
          //     var menu = doc && doc.getElementById('menu');
          //     var as = (menu && menu.querySelectorAll('a')) || [];

          //     var activeWin = ysp.runtime.Browser.activeBrowser.contentWindow;
          //     var secondMenuNames = [];
          //     [].forEach.call(as, function(item, index, self) {
          //       var text = ysp.customHelper.trim(item.textContent);
          //       secondMenuNames.push(text);
          //     });
          //     if(as && as.length > 0 && as.length === secondMenuNames.length){
          //         flag = true;
          //         var dataPanelMenu = _this.menuNames[menuName];
          //         if(dataPanelMenu){
          //            for(var i=0;i<dataPanelMenu.length;i++){
          //               if(secondMenuNames.indexOf(dataPanelMenu[i]) != -1){
          //                 _this._toPlanByMenuName(dataPanelMenu[i]);
          //                 break;
          //               }
          //            }
          //         }
          //     }
          //     if (!flag) {
          //       setTimeout(findSecondMenu.bind(this), 200);
          //       return;
          //     }
          // }
          // findSecondMenu();
        } else {
          this._toPlanByMenuName(menuName);
        }
      },
      getPlanNameByMenuName: function(menuName) {
        var planName;
        if (this.menuMap[menuName]) {
          return this.menuMap[menuName];
        }
        return;
      },
      getCurrentMenuName: function() {
        var activeContext = ysp.runtime.Context.activeContext;
        if (activeContext) {
          var modelId = activeContext.model.id;
          if (this.menuMap[this.currentMenuId]) {
            return this.menuMap[this.currentMenuId];
          }
        }
      }
    },
    getWinFromRTByName: function(name) {
      if (typeof name !== 'string') {
        console.error('getWinFromRTByName arg is not string,this type is ' + name);
      }
      var rtWin = this.getRTWin();
      if (rtWin) {
        return rtWin.frames[name];
      }
      return;
    },
    saleReachStamp: _saleReachStamp,
    getClientEntry: function() {
      return clientEntry;
    },
    getTopWin: function() {
      if (topWin) {
        return topWin;
      }
    },
    getCurrentOpenedWins: function() {
      return winContainer;
    },
    backHome: function() {
      if (parent.EAPI.isIOS() || parent.EAPI.isAndroid()) {
        parent.EAPI.back();
      } else {
        ysp.appMain.back();
      }
    },
    openWindow: function(url, title) {
      if (typeof url !== "string") {
        return;
      }
      if (typeof title !== "string") {
        title = "新窗口";
      }
      title = this.trim(title);
      var flag = winContainer.some(function(winTitle) {
        if (winTitle == title) {
          return true;
        }
      });
      if (!flag) {
        winContainer.push(title);
      }
      var contentWin = ysp.runtime.Browser.activeBrowser && ysp.runtime.Browser.activeBrowser.contentWindow;
      // if (url.indexOf("192.168.1.174") != -1) {
      //   if (parent.EAPI.isIOS()) {
      //     ysp.appMain.openWindow(url);
      //   } else {
      //     return contentWin.open(url, title);
      //   }
      // } else {
      //   if (contentWin) {
      //     return contentWin.open(url, title);
      //   }
      // }
      if (contentWin) {
        if (title === 'firstLevelIframeContainer') {
          var firstLevelEl = contentWin.document.querySelector('iframe[name^="firstLevelIframeContainer"]');
          firstLevelEl && firstLevelEl.parentElement.removeChild(firstLevelEl);
        }
        return contentWin.open(url, title);
      }
    },
    formatStringToDate(str) {
      var strArray = str.split('/');
      for (var i = 0; i < strArray.length; i++) {
        if (+strArray[i] < 10) {
          strArray[i] = '0' + strArray[i];
        }
      }
      return strArray.join('-');
    },
    getDataIndex(array, tag) {
      if (!array) {
        return;
      }
      if (!ysp.customHelper.isArray(array)) {
        console.log('getDataIndex接收了一个假的数组');
        return;
      }
      for (var i = 0; i < array.length; i++) {
        var arrayItem = array[i].trim();
        if (arrayItem.indexOf(tag) != -1) {
          return i;
        }
      }
    },
    getIndexInTitles(array, tag) {
      for (var i = 0; i < array.length; i++) {
        if (array[i].indexOf(tag) != -1) {
          return i;
        }
      }
    },
    isStringNull(str) {
      if (str && str.trim().length === 0) {
        return true;
      } else {
        return false;
      }
    },
    isArray(array) {
      if (Object.prototype.toString.call(array).indexOf('Array') != -1) {
        return true;
      } else {
        return false;
      }
    },
    isAllNull(array) {
      var tag = true;
      for (var i = 0; i < array.length; i++) {
        var item = ysp.customHelper.trim(array[i]);
        if (item != '') {
          tag = false;
        }
      }
      return tag;
    },
    //判断array.tag是存在一个值等于item
    isExist(item, tag, array) {
      for (var i = 0; i < array.length; i++) {
        if (item == array[i][tag]) {
          return true;
        }
      }
      return false;
    },
    //数组去重
    unique(array) {
      var data = [];
      for (var i = 0; i < array.length; i++) {
        if (!this.isExist(array[i].title, 'title', data)) {
          data.push(array[i]);
        }
      }
      return data;
    },
    getTemplateSaleReachData: function(elem, headerConfig, tags) { //[{lable:'',title:'',data:''}]
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      var weights = [];
      var titlesSort = [];
      for (var i = 0; i < titlesThs.length; i++) {
        var titleTh = titlesThs[i];
        titles.push(titleTh.textContent);
        weights.push(titleTh.textContent);
        var sortEl = titleTh.querySelector('div > span:first-child');
        if (sortEl && sortEl.style.display != 'none' && sortEl.classList.contains('s-ico')) {
          var ascEl = sortEl.querySelector('span[sort^="asc"]');
          var desEl = sortEl.querySelector('span[sort^="desc"]');
          var sortType = null;
          if (ascEl && ascEl.classList.contains('ui-disabled')) {
            sortType = 'desc';
          } else {
            sortType = 'asc';
          }
          titlesSort.push(sortType);
        } else {
          titlesSort.push(null);
        }
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbodys = elem.querySelectorAll('tbody');
      var counter = 1;
      var tbody = tbodys[0];
      var _this = this;
      while (tbody.textContent == '') {
        tbody = tbodys[counter];
        counter++;
      }
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      var headerTitle = null;
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          if (tds[j].getAttribute('aria-describedby') && tds[j].getAttribute('aria-describedby').indexOf('table_list_1_rank') != -1) {
            var isDrilled = false;
          } else {
            var isDrilled = !!tds[j].querySelector('a');
            if (!!tds[j].querySelector('a')) {
              var head = true;
            }
            if (!isDrilled) {
              var flag = !!tds[j].querySelector('span') && j >= 2;
              if (flag) {
                var index = null;
                if (flag && this.trim(tds[j].textContent) != '') {
                  isDrilled = true;
                  index = j;
                }
              }
            }
          }
          item.push({
            content: tds[j].textContent,
            isDrilled: isDrilled
          });
          if (!headerTitle && isDrilled) {
            headerTitle = titles[j];
            if (head) {
              var zou = true;
            }
          } else if (!head && isDrilled && index != null) {
            headerTitle = weights[index];
          }
        }
        content.push(item);
        if (!tbodyTrs[i].querySelector('a') && !tbodyTrs[i].querySelector('span') && tds.length > 7) {
          var Wu = true;
        }
      }
      if (!zou && !headerTitle && !Wu) {

        if (!headerTitle) {
          headerTitle = '销售人员';
        }

        function isAllNull(array) {
          var tag = true;
          for (var i = 0; i < array.length; i++) {
            var item = ysp.customHelper.trim(array[i].content);
            if (item != '') {
              tag = false;
            }
          }
          return tag;
        }
        //根据传入的tags的字段，挑选出相应的值，最后返回
        var data = [];
        var exportTitles = [];
        if (headerTitle && headerConfig) {
          headerConfig.title = headerTitle;
        }
        if (headerConfig.title) {
          tags.unshift(headerConfig);
        }
        var filterTitles = [];
        for (var i = 0; i < content.length; i++) {
          var item = [];
          for (var j = 0; j < tags.length; j++) {
            //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
            var tag = tags[j];
            if (tag !== undefined && tag !== null) {
              var title = tag.title;
              title = title.trim();
              var index = ysp.customHelper.getDataIndex(titles, title);
              if (content[i][index] && content[i][index]['content'].trim() == '' && index == 9) {
                // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                index = 9;
                if (content[i][index] && content[i][index]['content'].trim() == '' && index != 9) {
                  index = ysp.customHelper.getDataIndex(titles, '销售人员');
                }
              }
              filterTitles.push(titlesSort[index]);
              if (index != undefined) {
                item.push({
                  label: tag.label,
                  content: content[i][index] && content[i][index]['content'],
                  isDrilled: content[i][index] && content[i][index]['isDrilled'],
                  title: title,
                  data: tag.data
                });
              }
            } else {
              console.log('tag is null');
              continue;
            }
          }
          if (!isAllNull(item)) {
            if (exportTitles.length != item.length) {
              item.forEach(function(value, index) {
                exportTitles.push({
                  label: value.label ? value.label : value.title,
                  title: value.title,
                  sort: (filterTitles && filterTitles[index]) || null
                });
              });
            }
            data.push(item);
          }
        }
        //去重
        exportTitles = this.unique(exportTitles);
        return {
          content: data,
          titles: exportTitles
        };
      }

      if (!zou && headerTitle) {

        if (!headerTitle) {
          headerTitle = '分公司';
        }

        function isAllNull(array) {
          var tag = true;
          for (var i = 0; i < array.length; i++) {
            var item = ysp.customHelper.trim(array[i].content);
            if (item != '') {
              tag = false;
            }
          }
          return tag;
        }
        //根据传入的tags的字段，挑选出相应的值，最后返回
        var data = [];
        var exportTitles = [];
        if (headerTitle && headerConfig) {
          headerConfig.title = headerTitle;
        }
        if (headerConfig.title) {
          tags.unshift(headerConfig);
        }
        var filterTitles = [];

        for (var i = 0; i < content.length; i++) {
          var item = [];
          for (var j = 0; j < tags.length; j++) {
            //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
            var tag = tags[j];
            if (tag !== undefined && tag !== null) {
              var title = tag.title;
              title = title.trim();
              var index = ysp.customHelper.getDataIndex(titles, title);
              if (index == 6 && titles[6].trim() == "机型编码") {
                index += 1;
              }
              if (index == 7 && titles[7].trim() == "机型编码") {
                index += 1;
              }
              if (title == '物料描述' || title == '机型' || title == '产品系列') {
                if (title == '物料描述') {
                  index = content[i][index]['content'].trim() == "" ? (content[i][index - 2]['content'].trim() == "" ? (content[i][index - 4]['content'].trim() == "" ? (content[i][index - 6]['content'].trim() == "" ? (index - 7) : index - 6) : index - 4) : index - 2) : index;
                  index = index == 3 ? index - 1 : index;
                }
                if (title == '产品系列' && !ysp.customHelper.getDataIndex(titles, '客户名称')) {
                  index = content[i][index]['content'].trim() == "" ? (content[i][index + 2]['content'].trim() == "" ? (content[i][index + 4]['content'].trim() == "" ? (content[i][index - 2]['content'].trim() == "" ? index - 3 : index - 2) : index + 4) : index + 2) : index;
                }
                if (title == '产品系列' && ysp.customHelper.getDataIndex(titles, '客户名称')) {
                  index = 2;
                }
                if (title == '产品系列' && ysp.customHelper.getDataIndex(titles, '门店名称')) {
                  index = ysp.customHelper.getDataIndex(titles, '门店名称');
                  if (content[i][index]['content'].trim() == "") {
                    index = 2;
                  } else {
                    index = 3;
                  }

                }
                if (title == '机型') {
                  index = content[i][index]['content'].trim() == "" ? (content[i][index + 2]['content'].trim() == "" ? (content[i][index - 2]['content'].trim() == "" ? (content[i][index - 4]['content'].trim() == "" ? 2 : index - 4) : index - 2) : index + 2) : index;
                }
              }
              if (content[i][index] && content[i][index]['content'].trim() == '' && index == 9) {
                // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                index = 9;
                if (content[i][index] && content[i][index]['content'].trim() == '' && index != 9) {
                  index = ysp.customHelper.getDataIndex(titles, '销售人员');
                }
              }
              if (content[i][index] && content[i][index]['content'].trim() == '' && index == 12) {
                // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                index = 12;
              }
              filterTitles.push(titlesSort[index]);
              if (index != undefined) {
                item.push({
                  label: tag.label,
                  content: content[i][index] && content[i][index]['content'],
                  isDrilled: content[i][index] && content[i][index]['isDrilled'],
                  title: title,
                  data: tag.data
                });
              }
            } else {
              console.log('tag is null');
              continue;
            }
          }
          if (!isAllNull(item)) {
            if (exportTitles.length != item.length) {
              item.forEach(function(value, index) {
                exportTitles.push({
                  label: value.label ? value.label : value.title,
                  title: value.title,
                  sort: (filterTitles && filterTitles[index]) || null
                });
              });
            }
            data.push(item);
          }
        }
        //去重
        exportTitles = this.unique(exportTitles);
        return {
          content: data,
          titles: exportTitles
        };
      }
      if (zou || Wu) {

        if (!headerTitle && zou == undefined) {
          headerTitle = '项目';
        }
        if (!headerTitle) {
          headerTitle = '分公司';
        }

        function isAllNull(array) {
          var tag = true;
          for (var i = 0; i < array.length; i++) {
            var item = ysp.customHelper.trim(array[i].content);
            if (item != '') {
              tag = false;
            }
          }
          return tag;
        }
        //根据传入的tags的字段，挑选出相应的值，最后返回
        var data = [];
        var exportTitles = [];
        var tit = false;
        if (headerTitle == '项目' && Wu && ysp.customHelper.getDataIndex(titles, '项目')) {
          headerTitle = '项目';
        } else if (headerTitle == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && !ysp.customHelper.getDataIndex(titles, '客户名称') && !ysp.customHelper.getDataIndex(titles, '销售人员')) {
          headerTitle = '分公司';
        } else if (headerTitle == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && ysp.customHelper.getDataIndex(titles, '客户名称')) {
          headerTitle = '客户名称';
        } else if (headerTitle == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && ysp.customHelper.getDataIndex(titles, '门店名称')) {
          headerTitle = '门店名称';
        } else if (headerTitle == '项目' && !ysp.customHelper.getDataIndex(titles, '项目') && ysp.customHelper.getDataIndex(titles, '销售人员')) {
          headerTitle = '销售人员';
        } else {
          headerTitle = headerTitle;
        }
        if (headerTitle && headerConfig) {
          headerConfig.title = headerTitle;
        }
        if (headerConfig.title) {
          tags.unshift(headerConfig);
        }
        var filterTitles = [];
        for (var i = 0; i < content.length; i++) {
          var item = [];
          for (var j = 0; j < tags.length; j++) {
            //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
            var tag = tags[j];
            if (tag !== undefined && tag !== null) {
              var title = tag.title;
              title = title.trim();
              var index = ysp.customHelper.getDataIndex(titles, title);
              if (title == '客户名称') {
                index += content[i][index]['content'].trim() == '' ? 1 : 0;
              }
              if (content[i][index] && content[i][index]['content'].trim() == '' && index == 9) {
                // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                index = 9;

              }
              if (content[i][index] && content[i][index]['content'].trim() == '' && index == 12) {
                // index = ysp.customHelper.getDataIndex(titles, '销售达成率')
                index = 12;
              }
              filterTitles.push(titlesSort[index]);
              if (index != undefined) {
                item.push({
                  label: tag.label,
                  content: content[i][index] && content[i][index]['content'],
                  isDrilled: content[i][index] && content[i][index]['isDrilled'],
                  title: title,
                  data: tag.data
                });
              }
            } else {
              console.log('tag is null');
              continue;
            }
          }
          if (!isAllNull(item)) {
            if (exportTitles.length != item.length) {
              item.forEach(function(value, index) {
                exportTitles.push({
                  label: value.label ? value.label : value.title,
                  title: value.title,
                  sort: (filterTitles && filterTitles[index]) || null
                });
              });
            }
            data.push(item);
          }
        }
        //去重
        exportTitles = this.unique(exportTitles);
        return {
          content: data,
          titles: exportTitles
        };
      }
    },
    getTemplateData: function(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    getSaleData: function(elem, tags) {
      if (!elem) {
        return;
      }
      //获取头部标题，存入数组，包括空标签的内容
      if (!elem.querySelector('thead')) {
        console.warn('getTemplateData没有找到table thead');
        return [];
      }
      var thead = elem.querySelector('thead');
      if (!thead.querySelectorAll('th')) {
        console.warn('getTemplateData thead里面竟然没有th');
        return [];
      }
      var titlesThs = thead.querySelectorAll('th');
      var titles = [];
      for (var i = 0; i < titlesThs.length; i++) {
        titles.push(titlesThs[i].textContent);
      }
      //获取table的body数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var tbody = elem.querySelector('tbody');
      if (!tbody.querySelectorAll('tr')) {
        console.warn('getTemplateData tbody里面竟然没有tr');
        return [];
      }
      var tbodyTrs = tbody.querySelectorAll('tr');
      var content = [];
      for (var i = 0; i < tbodyTrs.length; i++) {
        var item = [];
        if (!tbodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = tbodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据传入的tags的字段，挑选出相应的值，最后返回
      var data = [];
      var con = []
      var num = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          num.push(i)
          con.push(item);
        }
      }
      data.push(con, num)
      return data;
    },
    /*用于筛选客户其他信息采集里面在手机端产生的对适配无用的td
    @param fakeTds：原网页采集过来的包含无用td的数组 -zyt
    */
    filterTd(fakeTds) {
      var tds = [];
      for (var i = 0; i < fakeTds.length; i++) {
        if (!fakeTds[i].querySelector('input[type="checkbox"]')) {
          tds.push(fakeTds[i]);
        }
      }
      return tds;
    }, //信息协同部分表格采集函数模板
    getDataInInformation: function(elem, tags) {
      if (!elem) {
        return;
      }
      //采集头部table字段
      var head = elem.querySelector('.l-grid-header');
      var headTable = head.querySelector('table');
      if (!headTable) {
        return [];
      }
      var headTds = headTable.querySelectorAll('tbody tr td');
      var titles = [];
      for (var i = 0; i < headTds.length; i++) {
        titles.push(headTds[i].textContent);
      }
      //采集body部分数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var body = elem.querySelector('.l-grid-body');
      var bodyTable = body.querySelector('table');
      if (!bodyTable) {
        return [];
      }
      var bodyTrs = bodyTable.querySelectorAll('tbody tr');
      var content = [];
      for (var i = 0; i < bodyTrs.length; i++) {
        var item = [];
        if (!bodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = bodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据tags返回相应的数据
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            if (tag == '客户') {
              index += 1;
            }
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    },
    /* 适配中定制的公共代码放在这里 */
    /*
    // 可以实现一个foo方法，在定制适配组件中被使用，如：ysp.customHelper.foo()
    foo: function(){

    }
    */
    //重新过滤url,由于url在ios下可能出现某个参数重复很多次的情况,暂时没有定位问题出现的原因,由于时间原因,这里直接将重复的参数删除,只保留一个,如果url没有出现重复参数的情况则不做任何处理.
    filterUrl(url) {
      var firstSite = url.indexOf('?');
      var startString = url.slice(0, firstSite + 1);
      var cutUrl = url.slice(firstSite + 1);
      var args = ysp.customHelper.uniqueString(cutUrl.split('&'));
      var argsString = args.join('&');
      var filterUrl = startString + argsString;
      return filterUrl;
    },
    uniqueString(array) {
      var data = [];
      for (var i = 0, len = array.length; i < len; i++) {
        if (data.join('').indexOf(array[i]) == -1) {
          data.push(array[i]);
        }
      }
      return data;
    },
    // 以下两个方法用于修改原页面中的错误, 但执行时机不同
    // 当目标页面加载完onload时执行, aWin为当前页面的window对象, doc为当前页面的document对象
    onTargetLoad: function(aWin, doc) {
      
      if (aWin) {
        if (aWin.location.href == 'http://192.168.220.82:8080/pttlCrm/res/index.html' ) {
          var _this = this;
          var xhr = new aWin.XMLHttpRequest();
          xhr.open('GET', 'http://192.168.220.82:8080/pttlCrm/login/addMobileLoginLog', true);
          xhr.send();
        }
      }
    },
    // 目标页面加载前执行, aWin为当前页面的window对象, doc为当前页面的document对象
    beforeTargetLoad: function(aWin, doc) {
      //为了使移动端的日期方法toLocaleDateString和移动端保持一致
      aWin.Date.prototype.toLocaleDateString = function() {
        var date = this;
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var date = date.getDate();
        return year + '/' + month + '/' + date;
      }
      if (aWin.frameElement && aWin.frameElement.name == "sourcePageFrame" && aWin.frameElement.dataset.browser) {
        topWin = aWin;
        if (aWin.location.href.indexOf('login') !== -1) {
          ysp.runtime.Model.setForceMatchModels(['login']);
        }
      }
      aWin.Object.defineProperty(aWin, 'getTopWin', {
        configurable: false,
        writable: false,
        value: function() {
          // var currentWin = aWin;
          // var topWin;
          // try {
          //   while (currentWin.parent != null) {
          //     if (currentWin.frameElement && currentWin.frameElement.name == "runtimeEngineWithIframe") {
          //       topWin = currentWin.frames['sourcePageFrame'].contentWindow;
          //       currentWin = null;
          //     } else {
          //       currentWin = currentWin.parent;
          //     }
          //   }
          // } catch (e) {
          //   console.error(e);
          // }
          if (topWin) {
            return topWin;
          } else {
            console.error('无top，是有问题的')
          }
        }
      });
      aWin.addEventListener('DOMContentLoaded', function() {
        if (aWin.location.href.indexOf('index.html') !== -1) {
          var actionEvent = '{"target":"null","data":"closePreLoading"}';
          //关闭主webview的loading状态
          var parent = aWin.frameElement.ownerDocument.defaultView;
          parent && parent.EAPI.postMessageToNative('closePreLoading', actionEvent);
          sessionStorage.setItem('closePreLoading-domcontentloaded', true);
        }

        aWin.createIframe = function createIframe(name, targetUrl, mount, data) {
          // if (parent.EAPI.isIOS() && targetUrl.indexOf("192.168.1.174") != -1) {
          //   var topWin = aWin.getTopWin(aWin);
          //   if (topWin.frames[name]) {
          //     var childrenWin = topWin.frames[name];
          //     if (childrenWin.location.href.indexOf(targetUrl) == -1) {
          //       aWin.postMsgToIframe(name, data, targetUrl);
          //     } else {
          //       aWin.postMsgToIframe(name, data);
          //     }
          //   } else {
          //     var doc = topWin.document;
          //     var temp = "<iframe src=" + targetUrl + " name=" + name + "></iframe>";
          //     var mountEl = doc.querySelector(mount);
          //     var iframe = void 0;
          //     try {
          //       iframe = doc.createElement("<iframe src=" + targetUrl + " name=" + name + "></iframe>");
          //     } catch (e) {
          //       iframe = doc.createElement('iframe');
          //       iframe.name = name;
          //       iframe.src = targetUrl;
          //     }
          //     if (iframe) {
          //       mountEl.appendChild(iframe);
          //     }
          //     aWin.postMsg(name, data);
          //   }
          //   return;
          // }

          var childWin = ysp.customHelper.openWindow(targetUrl, name);
          var flag = false;

          function postMsg(data) {
            if (childWin.receiveMsg) {
              childWin.receiveMsg(data);
              flag = true;
            }
            if (!flag) {
              setTimeout(postMsg.bind(this, data), 200);
            }
          }
          if (data) {
            postMsg(data);
          }
        }
        //观察页面是否等待状态,选择合适的showLoading和hideLoading
        if (aWin.location.href.indexOf('index.html') !== -1) {
          try {
            var MutationObserver = aWin.MutationObserver ||
              aWin.WebKitMutationObserver ||
              aWin.MozMutationObserver;
            var mutationObserverSupport = !!MutationObserver;
            var callback = function(records) {
              var someFlag = records.some(function(record) {
                if (record.type == "attributes") {
                  console.log('Mutation type: ' + record.type, ', target: ', record.target.nodeName);
                  if (record.target.tagName.toLowerCase() === 'html' && record.target.classList && record.target.classList.contains('loading')) {
                    ysp.appMain.showLoading();
                  } else {
                    ysp.appMain.hideLoading();
                  }
                }
              });
            };
            var mo = new MutationObserver(callback);
            var option = {
              'attributes': true,
              'childList': true
            };
            var docEl = doc.documentElement
            if (docEl) {
              mo.observe(docEl, option);
            }
          } catch (e) {
            console.log("mutationobserver is not supported! the compatibility starting ...");
          }
        }
      }, false);
      //日历组件，Date原型方法
      aWin.Date.prototype.isLeapYear = function() {
        var year = this.getFullYear();
        return (0 == year % 4 && ((year % 100 != 0) || (year % 400 == 0)));
      }
      //.判断当前月份有多少天
      aWin.Date.prototype.getDaysOfMonth = function() {
        return (new Date(this.getFullYear(), this.getMonth() + 1, 0)).getDate();
      }
      // . 比较日期
      aWin.Date.prototype.dateCompare = function(date) {
        if (typeof(date) != "object" || !(/Date/.test(date.constructor)))
          thrownewError(-1, "dateCompare(date)的date参数为Date类型.");
        var d = this.getTime() - date.getTime();
        return d > 0 ? 1 : (d == 0 ? 0 : -1);
      }
      //判断studio和手机上body的显示
      var doc = window.document;
      var yspStlyeEl = doc.createElement('style');
      yspStlyeEl.setAttribute("type", "text/css");
      var cssString = "@media screen and (max-width:960px){body{height: auto;overflow: initial}}";
      var cssText = doc.createTextNode(cssString);
      yspStlyeEl.appendChild(cssText);
      doc.head.appendChild(yspStlyeEl);
    },
    //登录相关接口
    //判断是否需要跳转到登录页面, 当页面匹配不上的时候会执行该方法, 若返回值为true则跳转, 否则不跳转.
    //判断是否需要跳转的思路为: 当前未登录, 系统自动跳转到了错误提示页面,
    //此时需要提取错误提示页面的特征, 保证只有跳转到错误提示页面的时候,needToLogin的返回值才为true
    needToLogin: function(doc) {
      return false;
    },
    //判断是否登录成功, 当页面匹配不上的时候会执行该方法, 若返回值为true则登录成功刷新页面, 否则不成功不刷新页面.
    //时机: 当登录后的页面不是登录前打开的页面时, 需要用到此方法实现跳转.
    //思路与needToLogin类似, 保证能够唯一区分该页面即可.
    isLoginSuccess: function(doc) {
      return false;
    }
  });
  //二级菜单需要初始化
  ysp.customHelper.secondMenu.init();
  /*调用场景：该方法用于采集表格数据*/
  function _getTableData(elem, titleArgs) {
    if (!elem) {
      return;
    }
    //获取头部标题，存入数组，包括空标签的内容
    if (!elem.querySelector('thead')) {
      console.warn('_getTableData没有找到table thead');
      return null;
    }
    var thead = elem.querySelector('thead');
    if (!thead.querySelectorAll('th')) {
      console.warn('_getTableData thead里面竟然没有th');
      return null;
    }
    var titlesThs = thead.querySelectorAll('th');
    var titles = [];
    var titlesIndexs = [];
    for (var i = 0; i < titlesThs.length; i++) {
      var titleValue = _trim(titlesThs[i].textContent);
      var someCallback = function(value, index, array) {
        if (value == titleValue) {
          return true;
        }
      }
      var flag = titleArgs.some(someCallback);
      if (flag) {
        titles.push(titleValue);
        titlesIndexs.push(i);
      }
    }
    if (titlesIndexs.length == 0) {
      // console.warn('_getTableData没有找到相对应的titles');
      return null;
    }
    //获取table的body数据
    if (!elem.querySelector('tbody')) {
      console.warn('_getTableData没有找到table tbody');
      return null;
    }
    var tbody = elem.querySelector('tbody');
    if (!tbody.querySelectorAll('tr')) {
      console.warn('_getTableData tbody里面竟然没有tr');
      return null;
    }
    var tbodyTrs = tbody.querySelectorAll('tr');
    var content = [];
    for (var i = 0; i < tbodyTrs.length; i++) {
      var item = [];
      if (!tbodyTrs[i].querySelectorAll('td')) {
        console.warn('_getTableData 当前tr没有td');
        continue;
      }
      var tds = tbodyTrs[i].querySelectorAll('td');
      for (var j = 0; j < tds.length; j++) {
        var someCallback = function(value, index, array) {
          if (value == j) {
            return true;
          }
        }
        var flag = titlesIndexs.some(someCallback);
        if (flag) {
          //zyt
          if (tds[j].querySelectorAll("input[type='text']").length != 0) {
            item.push(tds[j].querySelector("input[type='text']").value)
          } else if (tds[j].querySelector("select")) {
            var optionarry = [];
            var options = tds[j].querySelector("select").querySelectorAll("option")
            for (var v = 0; v < options.length; v++) {
              optionarry.push(options[v].textContent)
            }
            item.push(optionarry)
          } else {
            item.push(tds[j].textContent.trim());
          }
        }
      }
      content.push(item);
    }
    return {
      titles: titles,
      content: content
    }
  }
  /*调用场景：字符串前后需要去除空格时调用*/
  function _trim(str) {
    return str ? str.replace(/(^\s*)|(\s*$)/g, "") : '';
  }
  /*调用场景：页面返回时使用*/
  function _back(type) {
    if (typeof type === 'string') {
      if (window.parent.EAPI.isAndroid() || window.parent.EAPI.isStudio()) {
        ysp.appMain.back();
      } else {
        var actionEvent = '{"target":"null","data":"' + type + '"}';
        window.parent.EAPI.postMessageToNative('dispatchNativeEventToWebview', actionEvent);
        setTimeout(function() {
          window.parent.EAPI.back();
        }, 1000);
      }
    } else {
      ysp.appMain.back();
    }
  }
  /*调用场景：页面返回或者进入无效，需要强制匹配方案时*/
  function _forceMatchModels(args) {
    if (typeof args === 'string') {
      ysp.runtime.Model.setForceMatchModels([args]);
    } else if (args instanceof Array) {
      ysp.runtime.Model.setForceMatchModels(args);
    } else {
      console.error('forceMatchModels 参数类型不正确');
    }
  }
  /*调用场景：页面返回或者进入无效，需要强制匹配方案时*/
  function _toPlan(elem, operation, planName) {
    if (typeof planName != 'string') {
      console.error('_toPlan参赛planName类型不正确');
    }
    var aEls = elem.querySelectorAll('ul > li > a');
    [].forEach.call(aEls, function(item, index) {
      if (item.textContent == operation) {
        item.click();
        _forceMatchModels(planName);
      }
    });
  }
  //关闭首页loading
  var closeCount = 0;

  function closePreLoading() {
    var actionEvent = '{"target":"null","data":"closePreLoading"}';
    //关闭主webview的loading状态
    parent.EAPI.postMessageToNative('closePreLoading', actionEvent);
    sessionStorage.setItem('closePreLoading-rt' + closeCount, true);
    closeCount++;
    if (closeCount < 10) { //关闭10次，确保真正关闭
      setTimeout(closePreLoading.bind(this), 1500);
    }
  }
  closePreLoading();
  
  //调用场景:当table表格结构中没有THead时调用.用于取表格内的数据
    function _getTableClassData(elem, tags) {
      if (!elem) {
        return;
      }
      //采集头部table字段
      var head = elem.querySelector('.l-grid-header');
      var headTable = head.querySelector('table');
      if (!headTable) {
        return [];
      }
      var headTds = headTable.querySelectorAll('tbody tr td');
      var titles = [];
      for (var i = 0; i < headTds.length; i++) {
        titles.push(headTds[i].textContent);
      }
      //采集body部分数据
      if (!elem.querySelector('tbody')) {
        console.warn('getTemplateData没有找到table tbody');
        return [];
      }
      var body = elem.querySelector('.l-grid-body');
      var bodyTable = body.querySelector('table');
      if (!bodyTable) {
        return [];
      }
      var bodyTrs = bodyTable.querySelectorAll('tbody tr');
      var content = [];
      for (var i = 0; i < bodyTrs.length; i++) {
        var item = [];
        if (!bodyTrs[i].querySelectorAll('td')) {
          console.warn('getTemplateData 当前tr没有td');
          continue;
        }
        var tds = bodyTrs[i].querySelectorAll('td');
        for (var j = 0; j < tds.length; j++) {
          item.push(tds[j].textContent);
        }
        content.push(item);
      }
      //根据tags返回相应的数据
      var data = [];
      for (var i = 0; i < content.length; i++) {
        var item = [];
        for (var j = 0; j < tags.length; j++) {
          //根据相应字段从titles中获取相应的下标，然后取出content的该下标的值，即为需要的值
          var tag = tags[j];
          if (tag !== undefined && tag !== null) {
            tag = tag.trim();
            var index = ysp.customHelper.getDataIndex(titles, tag);
            if (tag == '客户') {
              index += 1;
            }
            item.push(content[i][index]);
          } else {
            console.log('tag is null');
            continue;
          }
        }
        if (!ysp.customHelper.isAllNull(item)) {
          data.push(item);
        }
      }
      return data;
    }
  
  function _pageId(){
    var id = ysp.runtime.Context.activeContext.id;
    win.beforePageId = id;
    return win.beforePageId;
  }
  function _yearId(id){
    win.selectId = id;
    return win.selectId;
  }
})(window, ysp);