window.BMAP_AUTHENTIC_KEY = "d7bod7ejOdqMwrxWRLvCjGCVFafi1LcG";
(function() {
    function aa(a) {
        throw a;
    }
    var j = void 0,
        o = !0,
        p = null,
        q = !1;

    function s() {
        return function() {}
    }

    function ba(a) {
        return function(b) {
            this[a] = b
        }
    }

    function u(a) {
        return function() {
            return this[a]
        }
    }

    function ca(a) {
        return function() {
            return a
        }
    }
    var da, ga = [];

    function ha(a) {
        return function() {
            return ga[a].apply(this, arguments)
        }
    }

    function ia(a, b) {
        return ga[a] = b
    }
    var ja, x = ja = x || {
        version: "1.3.4"
    };
    x.ba = "$BAIDU$";
    window[x.ba] = window[x.ba] || {};
    x.object = x.object || {};
    x.extend = x.object.extend = function(a, b) {
        for (var c in b)
            b.hasOwnProperty(c) && (a[c] = b[c]);
        return a
    };
    x.D = x.D || {};
    x.D.$ = function(a) {
        return "string" == typeof a || a instanceof String ? document.getElementById(a) : a && a.nodeName && (1 == a.nodeType || 9 == a.nodeType) ? a : p
    };
    x.$ = x.Dc = x.D.$;
    x.D.U = function(a) {
        a = x.D.$(a);
        if (a === p)
            return a;
        a.style.display = "none";
        return a
    };
    x.U = x.D.U;
    x.lang = x.lang || {};
    x.lang.tg = function(a) {
        return "[object String]" == Object.prototype.toString.call(a)
    };
    x.tg = x.lang.tg;
    x.D.Pj = function(a) {
        return x.lang.tg(a) ? document.getElementById(a) : a
    };
    x.Pj = x.D.Pj;
    x.D.getElementsByClassName = function(a, b) {
        var c;
        if (a.getElementsByClassName)
            c = a.getElementsByClassName(b);
        else {
            var d = a;
            d == p && (d = document);
            c = [];
            var d = d.getElementsByTagName("*"),
                e = d.length,
                f = RegExp("(^|\\s)" + b + "(\\s|$)"),
                g, i;
            for (i = g = 0; g < e; g++)
                f.test(d[g].className) && (c[i] = d[g],
                    i++)
        }
        return c
    };
    x.getElementsByClassName = x.D.getElementsByClassName;
    x.D.contains = function(a, b) {
        var c = x.D.Pj,
            a = c(a),
            b = c(b);
        return a.contains ? a != b && a.contains(b) : !!(a.compareDocumentPosition(b) & 16)
    };
    x.da = x.da || {};
    /msie (\d+\.\d)/i.test(navigator.userAgent) && (x.da.la = x.la = document.documentMode || +RegExp.$1);
    var ka = {
        cellpadding: "cellPadding",
        cellspacing: "cellSpacing",
        colspan: "colSpan",
        rowspan: "rowSpan",
        valign: "vAlign",
        usemap: "useMap",
        frameborder: "frameBorder"
    };
    8 > x.da.la ? (ka["for"] = "htmlFor",
        ka["class"] = "className") : (ka.htmlFor = "for",
        ka.className = "class");
    x.D.AG = ka;
    x.D.mF = function(a, b, c) {
        a = x.D.$(a);
        if (a === p)
            return a;
        if ("style" == b)
            a.style.cssText = c;
        else {
            b = x.D.AG[b] || b;
            a.setAttribute(b, c)
        }
        return a
    };
    x.mF = x.D.mF;
    x.D.nF = function(a, b) {
        a = x.D.$(a);
        if (a === p)
            return a;
        for (var c in b)
            x.D.mF(a, c, b[c]);
        return a
    };
    x.nF = x.D.nF;
    x.Rk = x.Rk || {};
    (function() {
        var a = RegExp("(^[\\s\\t\\xa0\\u3000]+)|([\\u3000\\xa0\\s\\t]+$)", "g");
        x.Rk.trim = function(b) {
            return ("" + b).replace(a, "")
        }
    })();
    x.trim = x.Rk.trim;
    x.Rk.Po = function(a, b) {
        var a = "" + a,
            c = Array.prototype.slice.call(arguments, 1),
            d = Object.prototype.toString;
        if (c.length) {
            c = c.length == 1 ? b !== p && /\[object Array\]|\[object Object\]/.test(d.call(b)) ? b : c : c;
            return a.replace(/#\{(.+?)\}/g, function(a, b) {
                var g = c[b];
                "[object Function]" == d.call(g) && (g = g(b));
                return "undefined" == typeof g ? "" : g
            })
        }
        return a
    };
    x.Po = x.Rk.Po;
    x.D.Sb = function(a, b) {
        a = x.D.$(a);
        if (a === p)
            return a;
        for (var c = a.className.split(/\s+/), d = b.split(/\s+/), e, f = d.length, g, i = 0; i < f; ++i) {
            g = 0;
            for (e = c.length; g < e; ++g)
                if (c[g] == d[i]) {
                    c.splice(g, 1);
                    break
                }
        }
        a.className = c.join(" ");
        return a
    };
    x.Sb = x.D.Sb;
    x.D.Ix = function(a, b, c) {
        a = x.D.$(a);
        if (a === p)
            return a;
        var d;
        if (a.insertAdjacentHTML)
            a.insertAdjacentHTML(b, c);
        else {
            d = a.ownerDocument.createRange();
            b = b.toUpperCase();
            if (b == "AFTERBEGIN" || b == "BEFOREEND") {
                d.selectNodeContents(a);
                d.collapse(b == "AFTERBEGIN")
            } else {
                b = b == "BEFOREBEGIN";
                d[b ? "setStartBefore" : "setEndAfter"](a);
                d.collapse(b)
            }
            d.insertNode(d.createContextualFragment(c))
        }
        return a
    };
    x.Ix = x.D.Ix;
    x.D.show = function(a) {
        a = x.D.$(a);
        if (a === p)
            return a;
        a.style.display = "";
        return a
    };
    x.show = x.D.show;
    x.D.ED = function(a) {
        a = x.D.$(a);
        return a === p ? a : a.nodeType == 9 ? a : a.ownerDocument || a.document
    };
    x.D.Ua = function(a, b) {
        a = x.D.$(a);
        if (a === p)
            return a;
        for (var c = b.split(/\s+/), d = a.className, e = " " + d + " ", f = 0, g = c.length; f < g; f++)
            e.indexOf(" " + c[f] + " ") < 0 && (d = d + (" " + c[f]));
        a.className = d;
        return a
    };
    x.Ua = x.D.Ua;
    x.D.CB = x.D.CB || {};
    x.D.Kl = x.D.Kl || [];
    x.D.Kl.filter = function(a, b, c) {
        for (var d = 0, e = x.D.Kl, f; f = e[d]; d++)
            if (f = f[c])
                b = f(a, b);
        return b
    };
    x.Rk.rO = function(a) {
        return a.indexOf("-") < 0 && a.indexOf("_") < 0 ? a : a.replace(/[-_][^-_]/g, function(a) {
            return a.charAt(1).toUpperCase()
        })
    };
    x.D.D_ = function(a) {
        x.D.$s(a, "expand") ? x.D.Sb(a, "expand") : x.D.Ua(a, "expand")
    };
    x.D.$s = function(a) {
        if (arguments.length <= 0 || typeof a === "function")
            return this;
        if (this.size() <= 0)
            return q;
        var a = a.replace(/^\s+/g, "").replace(/\s+$/g, "").replace(/\s+/g, " "),
            b = a.split(" "),
            c;
        x.forEach(this, function(a) {
            for (var a = a.className, e = 0; e < b.length; e++)
                if (!~(" " + a + " ").indexOf(" " + b[e] + " ")) {
                    c = q;
                    return
                }
            c !== q && (c = o)
        });
        return c
    };
    x.D.sj = function(a, b) {
        var c = x.D,
            a = c.$(a);
        if (a === p)
            return a;
        var b = x.Rk.rO(b),
            d = a.style[b];
        if (!d)
            var e = c.CB[b],
                d = a.currentStyle || (x.da.la ? a.style : getComputedStyle(a, p)),
                d = e && e.get ? e.get(a, d) : d[e || b];
        if (e = c.Kl)
            d = e.filter(b, d, "get");
        return d
    };
    x.sj = x.D.sj;
    /opera\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.opera = +RegExp.$1);
    x.da.kM = /webkit/i.test(navigator.userAgent);
    x.da.lY = /gecko/i.test(navigator.userAgent) && !/like gecko/i.test(navigator.userAgent);
    x.da.qE = "CSS1Compat" == document.compatMode;
    x.D.ha = function(a) {
        a = x.D.$(a);
        if (a === p)
            return a;
        var b = x.D.ED(a),
            c = x.da,
            d = x.D.sj;
        c.lY > 0 && b.getBoxObjectFor && d(a, "position");
        var e = {
                left: 0,
                top: 0
            },
            f;
        if (a == (c.la && !c.qE ? b.body : b.documentElement))
            return e;
        if (a.getBoundingClientRect) {
            a = a.getBoundingClientRect();
            e.left = Math.floor(a.left) + Math.max(b.documentElement.scrollLeft, b.body.scrollLeft);
            e.top = Math.floor(a.top) + Math.max(b.documentElement.scrollTop, b.body.scrollTop);
            e.left = e.left - b.documentElement.clientLeft;
            e.top = e.top - b.documentElement.clientTop;
            a = b.body;
            b = parseInt(d(a, "borderLeftWidth"));
            d = parseInt(d(a, "borderTopWidth"));
            if (c.la && !c.qE) {
                e.left = e.left - (isNaN(b) ? 2 : b);
                e.top = e.top - (isNaN(d) ? 2 : d)
            }
        } else {
            f = a;
            do {
                e.left = e.left + f.offsetLeft;
                e.top = e.top + f.offsetTop;
                if (c.kM > 0 && d(f, "position") == "fixed") {
                    e.left = e.left + b.body.scrollLeft;
                    e.top = e.top + b.body.scrollTop;
                    break
                }
                f = f.offsetParent
            } while (f && f != a);
            if (c.opera > 0 || c.kM > 0 && d(a, "position") == "absolute")
                e.top = e.top - b.body.offsetTop;
            for (f = a.offsetParent; f && f != b.body;) {
                e.left = e.left - f.scrollLeft;
                if (!c.opera || f.tagName != "TR")
                    e.top = e.top - f.scrollTop;
                f = f.offsetParent
            }
        }
        return e
    };
    /firefox\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.nf = +RegExp.$1);
    /BIDUBrowser/i.test(navigator.userAgent) && (x.da.u1 = o);
    var la = navigator.userAgent;
    /(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(la) && !/chrome/i.test(la) && (x.da.gF = +(RegExp.$1 || RegExp.$2));
    /chrome\/(\d+\.\d)/i.test(navigator.userAgent) && (x.da.cC = +RegExp.$1);
    x.kc = x.kc || {};
    x.kc.Gb = function(a, b) {
        var c, d, e = a.length;
        if ("function" == typeof b)
            for (d = 0; d < e; d++) {
                c = a[d];
                c = b.call(a, c, d);
                if (c === q)
                    break
            }
        return a
    };
    x.Gb = x.kc.Gb;
    x.lang.ba = function() {
        return "TANGRAM__" + (window[x.ba]._counter++).toString(36)
    };
    window[x.ba]._counter = window[x.ba]._counter || 1;
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.jt = function(a) {
        return "[object Function]" == Object.prototype.toString.call(a)
    };
    x.lang.Ca = function(a) {
        this.ba = a || x.lang.ba();
        window[x.ba]._instances[this.ba] = this
    };
    window[x.ba]._instances = window[x.ba]._instances || {};
    x.lang.Ca.prototype.gi = ha(0);
    x.lang.Ca.prototype.toString = function() {
        return "[object " + (this.wQ || "Object") + "]"
    };
    x.lang.Xy = function(a, b) {
        this.type = a;
        this.returnValue = o;
        this.target = b || p;
        this.currentTarget = p
    };
    x.lang.Ca.prototype.addEventListener = function(a, b, c) {
        if (x.lang.jt(b)) {
            !b.al && (b.al = {});
            !this.Gi && (this.Gi = {});
            var d = this.Gi,
                e;
            if (typeof c == "string" && c) {
                /[^\w\-]/.test(c) && aa("nonstandard key:" + c);
                e = b.Ax = c
            }
            a.indexOf("on") != 0 && (a = "on" + a);
            typeof d[a] != "object" && (d[a] = {});
            typeof b.al[a] != "object" && (b.al[a] = {});
            e = e || x.lang.ba();
            b.al[a].Ax = e;
            d[a][e] = b
        }
    };
    x.lang.Ca.prototype.removeEventListener = function(a, b) {
        a.indexOf("on") != 0 && (a = "on" + a);
        if (x.lang.jt(b)) {
            if (!b.al || !b.al[a])
                return;
            b = b.al[a].Ax
        } else if (!x.lang.tg(b))
            return;
        !this.Gi && (this.Gi = {});
        var c = this.Gi;
        c[a] && c[a][b] && delete c[a][b]
    };
    x.lang.Ca.prototype.dispatchEvent = function(a, b) {
        x.lang.tg(a) && (a = new x.lang.Xy(a));
        !this.Gi && (this.Gi = {});
        var b = b || {},
            c;
        for (c in b)
            a[c] = b[c];
        var d = this.Gi,
            e = a.type;
        a.target = a.target || this;
        a.currentTarget = this;
        e.indexOf("on") != 0 && (e = "on" + e);
        x.lang.jt(this[e]) && this[e].apply(this, arguments);
        if (typeof d[e] == "object")
            for (c in d[e])
                d[e][c].apply(this, arguments);
        return a.returnValue
    };
    x.lang.ua = function(a, b, c) {
        var d, e, f = a.prototype;
        e = new Function;
        e.prototype = b.prototype;
        e = a.prototype = new e;
        for (d in f)
            e[d] = f[d];
        a.prototype.constructor = a;
        a.u_ = b.prototype;
        if ("string" == typeof c)
            e.wQ = c
    };
    x.ua = x.lang.ua;
    x.lang.Kc = function(a) {
        return window[x.ba]._instances[a] || p
    };
    x.platform = x.platform || {};
    x.platform.dM = /macintosh/i.test(navigator.userAgent);
    x.platform.h3 = /MicroMessenger/i.test(navigator.userAgent);
    x.platform.lM = /windows/i.test(navigator.userAgent);
    x.platform.tY = /x11/i.test(navigator.userAgent);
    x.platform.Fm = /android/i.test(navigator.userAgent);
    /android (\d+\.\d)/i.test(navigator.userAgent) && (x.platform.OJ = x.OJ = RegExp.$1);
    x.platform.nY = /ipad/i.test(navigator.userAgent);
    x.platform.mE = /iphone/i.test(navigator.userAgent);

    function ma(a, b) {
        a.domEvent = b = window.event || b;
        a.clientX = b.clientX || b.pageX;
        a.clientY = b.clientY || b.pageY;
        a.offsetX = b.offsetX || b.layerX;
        a.offsetY = b.offsetY || b.layerY;
        a.screenX = b.screenX;
        a.screenY = b.screenY;
        a.ctrlKey = b.ctrlKey || b.metaKey;
        a.shiftKey = b.shiftKey;
        a.altKey = b.altKey;
        if (b.touches) {
            a.touches = [];
            for (var c = 0; c < b.touches.length; c++)
                a.touches.push({
                    clientX: b.touches[c].clientX,
                    clientY: b.touches[c].clientY,
                    screenX: b.touches[c].screenX,
                    screenY: b.touches[c].screenY,
                    pageX: b.touches[c].pageX,
                    pageY: b.touches[c].pageY,
                    target: b.touches[c].target,
                    identifier: b.touches[c].identifier
                })
        }
        if (b.changedTouches) {
            a.changedTouches = [];
            for (c = 0; c < b.changedTouches.length; c++)
                a.changedTouches.push({
                    clientX: b.changedTouches[c].clientX,
                    clientY: b.changedTouches[c].clientY,
                    screenX: b.changedTouches[c].screenX,
                    screenY: b.changedTouches[c].screenY,
                    pageX: b.changedTouches[c].pageX,
                    pageY: b.changedTouches[c].pageY,
                    target: b.changedTouches[c].target,
                    identifier: b.changedTouches[c].identifier
                })
        }
        if (b.targetTouches) {
            a.targetTouches = [];
            for (c = 0; c < b.targetTouches.length; c++)
                a.targetTouches.push({
                    clientX: b.targetTouches[c].clientX,
                    clientY: b.targetTouches[c].clientY,
                    screenX: b.targetTouches[c].screenX,
                    screenY: b.targetTouches[c].screenY,
                    pageX: b.targetTouches[c].pageX,
                    pageY: b.targetTouches[c].pageY,
                    target: b.targetTouches[c].target,
                    identifier: b.targetTouches[c].identifier
                })
        }
        a.rotation = b.rotation;
        a.scale = b.scale;
        return a
    }
    x.lang.Rw = function(a) {
        var b = window[x.ba];
        b.HS && delete b.HS[a]
    };
    x.event = {};
    x.M = x.event.M = function(a, b, c) {
        if (!(a = x.$(a)))
            return a;
        b = b.replace(/^on/, "");
        a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c);
        return a
    };
    x.bd = x.event.bd = function(a, b, c) {
        if (!(a = x.$(a)))
            return a;
        b = b.replace(/^on/, "");
        a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c);
        return a
    };
    x.D.$s = function(a, b) {
        if (!a || !a.className || typeof a.className != "string")
            return q;
        var c = -1;
        try {
            c = a.className == b || a.className.search(RegExp("(\\s|^)" + b + "(\\s|$)"))
        } catch (d) {
            return q
        }
        return c > -1
    };
    x.SK = function() {
        function a(a) {
            document.addEventListener && (this.element = a,
                this.VK = this.yk ? "touchstart" : "mousedown",
                this.mD = this.yk ? "touchmove" : "mousemove",
                this.lD = this.yk ? "touchend" : "mouseup",
                this.ph = q,
                this.eu = this.du = 0,
                this.element.addEventListener(this.VK, this, q),
                ja.M(this.element, "mousedown", s()),
                this.handleEvent(p))
        }
        a.prototype = {
            yk: "ontouchstart" in window || "createTouch" in document,
            start: function(a) {
                na(a);
                this.ph = q;
                this.du = this.yk ? a.touches[0].clientX : a.clientX;
                this.eu = this.yk ? a.touches[0].clientY : a.clientY;
                this.element.addEventListener(this.mD, this, q);
                this.element.addEventListener(this.lD, this, q)
            },
            move: function(a) {
                oa(a);
                var c = this.yk ? a.touches[0].clientY : a.clientY;
                if (10 < Math.abs((this.yk ? a.touches[0].clientX : a.clientX) - this.du) || 10 < Math.abs(c - this.eu))
                    this.ph = o
            },
            end: function(a) {
                oa(a);
                this.ph || (a = document.createEvent("Event"),
                    a.initEvent("tap", q, o),
                    this.element.dispatchEvent(a));
                this.element.removeEventListener(this.mD, this, q);
                this.element.removeEventListener(this.lD, this, q)
            },
            handleEvent: function(a) {
                if (a)
                    switch (a.type) {
                        case this.VK:
                            this.start(a);
                            break;
                        case this.mD:
                            this.move(a);
                            break;
                        case this.lD:
                            this.end(a)
                    }
            }
        };
        return function(b) {
            return new a(b)
        }
    }();
    var z = window.BMap || {};
    z.version = "2.0";
    z.GU = 0.34 > Math.random();
    0 <= z.version.indexOf("#") && (z.version = "2.0");
    z.Ar = [];
    z.Ue = function(a) {
        this.Ar.push(a)
    };
    z.qr = [];
    z.Rm = function(a) {
        this.qr.push(a)
    };
    z.UU = z.apiLoad || function() {
        z.version && z.version >= 1.5 && pa(z.Ac + "?qt=verify&ak=" + qa, function(a) {
            if (a && a.error !== 0) {
                if (typeof map !== "undefined") {
                    map.Na().innerHTML = "";
                    map.Gi = {}
                }
                z = p;
                var b = "\u767e\u5ea6\u672a\u6388\u6743\u4f7f\u7528\u5730\u56feAPI\uff0c\u53ef\u80fd\u662f\u56e0\u4e3a\u60a8\u63d0\u4f9b\u7684\u5bc6\u94a5\u4e0d\u662f\u6709\u6548\u7684\u767e\u5ea6LBS\u5f00\u653e\u5e73\u53f0\u5bc6\u94a5\uff0c\u6216\u6b64\u5bc6\u94a5\u672a\u5bf9\u672c\u5e94\u7528\u7684\u767e\u5ea6\u5730\u56feJavaScriptAPI\u6388\u6743\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                switch (a.error) {
                    case 101:
                        b = "\u5f00\u53d1\u8005\u7981\u7528\u4e86\u8be5ak\u7684jsapi\u670d\u52a1\u6743\u9650\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002";
                        break;
                    case 102:
                        b = "\u5f00\u53d1\u8005Referer\u4e0d\u6b63\u786e\u3002\u60a8\u53ef\u4ee5\u8bbf\u95ee\u5982\u4e0b\u7f51\u5740\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6709\u6548\u7684\u5bc6\u94a5\uff1ahttp://lbsyun.baidu.com/apiconsole/key#\u3002"
                }
                alert(b)
            }
        })
    };
    var qa = window.BMAP_AUTHENTIC_KEY;
    window.BMAP_AUTHENTIC_KEY = p;
    var ra = window.BMap_loadScriptTime,
        sa = (new Date).getTime(),
        ta = p,
        ua = o,
        va = 5042,
        wa = 5002,
        xa = 5003,
        ya = "load_mapclick",
        za = 5038,
        Ba = 5041,
        Ca = 5047,
        Da = 5036,
        Fa = 5039,
        Ga = 5037,
        Ha = 5040,
        Ia = 5011,
        Ja = 7E3;
    var Ka = 0;

    function La(a, b) {
        if (a = x.$(a)) {
            var c = this;
            x.lang.Ca.call(c);
            b = b || {};
            c.K = {
                iC: 200,
                Yb: o,
                Zw: q,
                eD: o,
                Mo: o,
                No: b.enableWheelZoom || q,
                QK: o,
                gD: o,
                Fs: o,
                Xw: o,
                km: o,
                Ko: b.enable3DBuilding || q,
                Gc: 25,
                m0: 240,
                IU: 450,
                Xb: E.Xb,
                Fd: E.Fd,
                Lx: !!b.Lx,
                gc: Math.round(b.minZoom) || 1,
                $b: Math.round(b.maxZoom) || 19,
                Ib: b.mapType || Ma,
                Y3: q,
                MK: b.drawer || Ka,
                Yw: o,
                Vw: 500,
                uW: b.enableHighResolution !== q,
                lj: b.enableMapClick !== q,
                devicePixelRatio: b.devicePixelRatio || window.devicePixelRatio || 1,
                RF: 99,
                ue: b.mapStyle || p,
                BY: b.logoControl === q ? q : o,
                aV: [],
                xw: b.beforeClickIcon || p
            };
            c.K.ue && (this.cY(c.K.ue.controls),
                this.YL(c.K.ue.geotableId));
            c.K.ue && c.K.ue.styleId && c.R2(c.K.ue.styleId);
            c.K.cm = {
                dark: {
                    backColor: "#2D2D2D",
                    textColor: "#bfbfbf",
                    iconUrl: "dicons"
                },
                normal: {
                    backColor: "#F3F1EC",
                    textColor: "#c61b1b",
                    iconUrl: "icons"
                },
                light: {
                    backColor: "#EBF8FC",
                    textColor: "#017fb4",
                    iconUrl: "licons"
                }
            };
            b.enableAutoResize && (c.K.Xw = b.enableAutoResize);
            b.enableStreetEntrance === q && (c.K.km = b.enableStreetEntrance);
            b.enableDeepZoom === q && (c.K.QK = b.enableDeepZoom);
            var d = c.K.aV;
            if (G())
                for (var e = 0, f = d.length; e < f; e++)
                    if (x.da[d[e]]) {
                        c.K.devicePixelRatio = 1;
                        break
                    }
            d = -1 < navigator.userAgent.toLowerCase().indexOf("android");
            e = -1 < navigator.userAgent.toLowerCase().indexOf("mqqbrowser");
            if (-1 < navigator.userAgent.toLowerCase().indexOf("UCBrowser") || d && e)
                c.K.RF = 99;
            c.Va = a;
            c.vB(a);
            a.unselectable = "on";
            a.innerHTML = "";
            a.appendChild(c.va());
            b.size && this.ye(b.size);
            d = c.Bb();
            c.width = d.width;
            c.height = d.height;
            c.offsetX = 0;
            c.offsetY = 0;
            c.platform = a.firstChild;
            c.ve = c.platform.firstChild;
            c.ve.style.width = c.width + "px";
            c.ve.style.height = c.height + "px";
            c.Vd = {};
            c.gf = new H(0, 0);
            c.mc = new H(0, 0);
            c.Oa = 3;
            c.Lc = 0;
            c.AC = p;
            c.zC = p;
            c.Wb = "";
            c.Dw = "";
            c.Oh = {};
            c.Oh.custom = {};
            c.Ta = 0;
            b.useWebGL === q && Na(q);
            c.P = new Oa(a, {
                Pf: "api",
                MS: o
            });
            c.P.U();
            c.P.rF(c);
            b = b || {};
            d = c.Ib = c.K.Ib;
            c.xe = d.ap();
            d === Pa && Ra(wa);
            d === Sa && Ra(xa);
            d = c.K;
            d.JO = Math.round(b.minZoom);
            d.IO = Math.round(b.maxZoom);
            c.Su();
            c.R = {
                Hc: q,
                lc: 0,
                nt: 0,
                pM: 0,
                l3: 0,
                $B: q,
                ZE: -1,
                Pe: []
            };
            c.platform.style.cursor = c.K.Xb;
            for (e = 0; e < z.Ar.length; e++)
                z.Ar[e](c);
            c.R.ZE = e;
            c.ca();
            I.load("map", function() {
                c.yb()
            });
            c.K.lj && (setTimeout(function() {
                    Ra(ya)
                }, 1E3),
                I.load("mapclick", function() {
                    window.MPC_Mgr = window.MPC_Mgr || {};
                    window.MPC_Mgr[c.ba] = new Ta(c)
                }, o));
            Va() && I.load("oppc", function() {
                c.pz()
            });
            G() && I.load("opmb", function() {
                c.pz()
            });
            a = p;
            c.JB = []
        }
    }
    x.lang.ua(La, x.lang.Ca, "Map");
    x.extend(La.prototype, {
        va: function() {
            var a = M("div"),
                b = a.style;
            b.overflow = "visible";
            b.position = "absolute";
            b.zIndex = "0";
            b.top = b.left = "0px";
            var b = M("div", {
                    "class": "BMap_mask"
                }),
                c = b.style;
            c.position = "absolute";
            c.top = c.left = "0px";
            c.zIndex = "9";
            c.overflow = "hidden";
            c.WebkitUserSelect = "none";
            a.appendChild(b);
            return a
        },
        vB: function(a) {
            var b = a.style;
            b.overflow = "hidden";
            "absolute" !== Wa(a).position && (b.position = "relative",
                b.zIndex = 0);
            b.backgroundColor = "#F3F1EC";
            b.color = "#000";
            b.textAlign = "left"
        },
        ca: function() {
            var a = this;
            a.Ur = function() {
                var b = a.Bb();
                if (a.width !== b.width || a.height !== b.height) {
                    var c = new N(a.width, a.height),
                        d = new O("onbeforeresize");
                    d.size = c;
                    a.dispatchEvent(d);
                    a.hk((b.width - a.width) / 2, (b.height - a.height) / 2);
                    a.ve.style.width = (a.width = b.width) + "px";
                    a.ve.style.height = (a.height = b.height) + "px";
                    c = new O("onresize");
                    c.size = b;
                    a.dispatchEvent(c)
                }
            };
            a.K.Xw && (a.R.Yr = setInterval(a.Ur, 80))
        },
        hk: function(a, b, c, d) {
            var e = this.pa().Bc(this.fa()),
                f = this.xe,
                g = o;
            c && H.cM(c) && (this.gf = new H(c.lng, c.lat),
                g = q);
            if (c = c && d ? f.Im(c, this.Wb) : this.mc)
                if (this.mc = new H(c.lng + a * e, c.lat - b * e),
                    (a = f.oh(this.mc, this.Wb)) && g)
                    this.gf = a
        },
        Dg: function(a, b) {
            if (Xa(a) && (this.Su(),
                    this.dispatchEvent(new O("onzoomstart")),
                    a = this.Tn(a).zoom,
                    a !== this.Oa)) {
                this.Lc = this.Oa;
                this.Oa = a;
                var c;
                b ? c = b : this.hh() && (c = this.hh().ha());
                c && (c = this.bc(c, this.Lc),
                    this.hk(this.width / 2 - c.x, this.height / 2 - c.y, this.wb(c, this.Lc), o));
                this.dispatchEvent(new O("onzoomstartcode"))
            }
        },
        Nc: function(a) {
            this.Dg(a)
        },
        VF: function(a) {
            this.Dg(this.Oa + 1, a)
        },
        WF: function(a) {
            this.Dg(this.Oa - 1, a)
        },
        ui: function(a) {
            a instanceof H && (this.mc = this.xe.Im(a, this.Wb),
                this.gf = H.cM(a) ? new H(a.lng, a.lat) : this.xe.oh(this.mc, this.Wb))
        },
        xg: function(a, b) {
            a = Math.round(a) || 0;
            b = Math.round(b) || 0;
            this.hk(-a, -b)
        },
        mw: function(a) {
            a && Ya(a.Ee) && (a.Ee(this),
                this.dispatchEvent(new O("onaddcontrol", a)))
        },
        zN: function(a) {
            a && Ya(a.remove) && (a.remove(),
                this.dispatchEvent(new O("onremovecontrol", a)))
        },
        so: function(a) {
            a && Ya(a.ra) && (a.ra(this),
                this.dispatchEvent(new O("onaddcontextmenu", a)))
        },
        zp: function(a) {
            a && Ya(a.remove) && (this.dispatchEvent(new O("onremovecontextmenu", a)),
                a.remove())
        },
        Ja: function(a) {
            a && Ya(a.Ee) && (a.Ee(this),
                this.dispatchEvent(new O("onaddoverlay", a)))
        },
        Tb: function(a) {
            a && Ya(a.remove) && (a.remove(),
                this.dispatchEvent(new O("onremoveoverlay", a)))
        },
        hK: function() {
            this.dispatchEvent(new O("onclearoverlays"))
        },
        Wg: function(a) {
            a && this.dispatchEvent(new O("onaddtilelayer", a))
        },
        xh: function(a) {
            a && this.dispatchEvent(new O("onremovetilelayer", a))
        },
        Ag: function(a) {
            if (this.Ib !== a) {
                var b = new O("onsetmaptype");
                b.P3 = this.Ib;
                this.Ib = this.K.Ib = a;
                this.xe = this.Ib.ap();
                this.hk(0, 0, this.Ka(), o);
                this.Su();
                var c = this.Tn(this.fa()).zoom;
                this.Dg(c);
                this.dispatchEvent(b);
                b = new O("onmaptypechange");
                b.Oa = c;
                b.Ib = a;
                this.dispatchEvent(b);
                (a === Za || a === Sa) && Ra(xa)
            }
        },
        Wf: function(a) {
            var b = this;
            if (a instanceof H)
                b.ui(a, {
                    noAnimation: o
                });
            else if ($a(a))
                if (b.Ib === Pa) {
                    var c = E.eC[a];
                    c && (pt = c.m,
                        b.Wf(pt))
                } else {
                    var d = this.HH();
                    d.uF(function(c) {
                        0 === d.tm() && 2 === d.Fa.result.type && (b.Wf(c.wk(0).point),
                            Pa.sk(a) && b.oF(a))
                    });
                    d.search(a, {
                        log: "center"
                    })
                }
        },
        Dd: function(a, b) {
            "[object Undefined]" !== Object.prototype.toString.call(b) && (b = parseInt(b));
            z.An("cus.fire", "time", {
                z_loadscripttime: sa - ra
            });
            var c = this;
            if ($a(a))
                if (c.Ib === Pa) {
                    var d = E.eC[a];
                    d && (pt = d.m,
                        c.Dd(pt, b))
                } else {
                    var e = c.HH();
                    e.uF(function(d) {
                        if (0 === e.tm() && (2 === e.Fa.result.type || 11 === e.Fa.result.type)) {
                            var d = d.wk(0).point,
                                f = b || P.bx(e.Fa.content.level, c);
                            c.Dd(d, f);
                            Pa.sk(a) && c.oF(a)
                        }
                    });
                    e.search(a, {
                        log: "center"
                    })
                }
            else if (a instanceof H && b) {
                b = c.Tn(b).zoom;
                c.Lc = c.Oa || b;
                c.Oa = b;
                d = c.gf;
                c.gf = new H(a.lng, a.lat);
                c.mc = c.xe.Im(c.gf, c.Wb);
                c.AC = c.AC || c.Oa;
                c.zC = c.zC || c.gf;
                var f = new O("onload"),
                    g = new O("onloadcode");
                f.point = new H(a.lng, a.lat);
                f.pixel = c.bc(c.gf, c.Oa);
                f.zoom = b;
                c.loaded || (c.loaded = o,
                    c.dispatchEvent(f),
                    ta || (ta = ab()));
                c.dispatchEvent(g);
                f = new O("onmoveend");
                f.jH = "centerAndZoom";
                d.nb(c.gf) || c.dispatchEvent(f);
                c.dispatchEvent(new O("onmoveend"));
                c.Lc !== c.Oa && (d = new O("onzoomend"),
                    d.jH = "centerAndZoom",
                    c.dispatchEvent(d));
                c.K.Ko && c.Ko()
            }
        },
        HH: function() {
            this.R.zM || (this.R.zM = new bb(1));
            return this.R.zM
        },
        reset: function() {
            this.Dd(this.zC, this.AC, o)
        },
        enableDragging: function() {
            this.K.Yb = o
        },
        disableDragging: function() {
            this.K.Yb = q
        },
        enableInertialDragging: function() {
            this.K.Yw = o
        },
        disableInertialDragging: function() {
            this.K.Yw = q
        },
        enableScrollWheelZoom: function() {
            this.K.No = o
        },
        disableScrollWheelZoom: function() {
            this.K.No = q
        },
        enableContinuousZoom: function() {
            this.K.Mo = o
        },
        disableContinuousZoom: function() {
            this.K.Mo = q
        },
        enableDoubleClickZoom: function() {
            this.K.eD = o
        },
        disableDoubleClickZoom: function() {
            this.K.eD = q
        },
        enableKeyboard: function() {
            this.K.Zw = o
        },
        disableKeyboard: function() {
            this.K.Zw = q
        },
        enablePinchToZoom: function() {
            this.K.Fs = o
        },
        disablePinchToZoom: function() {
            this.K.Fs = q
        },
        enableAutoResize: function() {
            this.K.Xw = o;
            this.Ur();
            this.R.Yr || (this.R.Yr = setInterval(this.Ur, 80))
        },
        disableAutoResize: function() {
            this.K.Xw = q;
            this.R.Yr && (clearInterval(this.R.Yr),
                this.R.Yr = p)
        },
        Ko: function() {
            this.K.Ko = o;
            this.In || (this.In = new cb({
                    ZK: o
                }),
                this.Wg(this.In))
        },
        eW: function() {
            this.K.Ko = q;
            this.In && (this.xh(this.In),
                this.In = p,
                delete this.In)
        },
        Bb: function() {
            return this.ns && this.ns instanceof N ? new N(this.ns.width, this.ns.height) : new N(this.Va.clientWidth, this.Va.clientHeight)
        },
        ye: function(a) {
            a && a instanceof N ? (this.ns = a,
                this.Va.style.width = a.width + "px",
                this.Va.style.height = a.height + "px") : this.ns = p
        },
        Ka: u("gf"),
        fa: u("Oa"),
        vV: function() {
            this.Ur()
        },
        Tn: function(a) {
            var b = this.K.gc,
                c = this.K.$b,
                d = q,
                a = Math.round(a);
            a < b && (d = o,
                a = b);
            a > c && (d = o,
                a = c);
            return {
                zoom: a,
                nD: d
            }
        },
        Na: u("Va"),
        bc: function(a, b) {
            b = b || this.fa();
            return this.xe.bc(a, b, this.mc, this.Bb(), this.Wb)
        },
        wb: function(a, b) {
            b = b || this.fa();
            return this.xe.wb(a, b, this.mc, this.Bb(), this.Wb)
        },
        Te: function(a, b) {
            if (a) {
                var c = this.bc(new H(a.lng, a.lat), b);
                c.x -= this.offsetX;
                c.y -= this.offsetY;
                return c
            }
        },
        nN: function(a, b) {
            if (a) {
                var c = new Q(a.x, a.y);
                c.x += this.offsetX;
                c.y += this.offsetY;
                return this.wb(c, b)
            }
        },
        pointToPixelFor3D: function(a, b) {
            var c = map.Wb;
            this.Ib === Pa && c && db.nK(a, this, b)
        },
        J3: function(a, b) {
            var c = map.Wb;
            this.Ib === Pa && c && db.mK(a, this, b)
        },
        K3: function(a, b) {
            var c = this,
                d = map.Wb;
            c.Ib === Pa && d && db.nK(a, c, function(a) {
                a.x -= c.offsetX;
                a.y -= c.offsetY;
                b && b(a)
            })
        },
        H3: function(a, b) {
            var c = map.Wb;
            this.Ib === Pa && c && (a.x += this.offsetX,
                a.y += this.offsetY,
                db.mK(a, this, b))
        },
        Hd: function(a) {
            if (!this.Kx())
                return new eb;
            var b = a || {},
                a = b.margins || [0, 0, 0, 0],
                c = b.zoom || p,
                b = this.wb({
                    x: a[3],
                    y: this.height - a[2]
                }, c),
                a = this.wb({
                    x: this.width - a[1],
                    y: a[0]
                }, c);
            return new eb(b, a)
        },
        Kx: function() {
            return !!this.loaded
        },
        OR: function(a, b) {
            for (var c = this.pa(), d = b.margins || [10, 10, 10, 10], e = b.zoomFactor || 0, f = d[1] + d[3], d = d[0] + d[2], g = c.Wo(), i = c = c.pm(); i >= g; i--) {
                var k = this.pa().Bc(i);
                if (a.JF().lng / k < this.width - f && a.JF().lat / k < this.height - d)
                    break
            }
            i += e;
            i < g && (i = g);
            i > c && (i = c);
            return i
        },
        Zs: function(a, b) {
            var c = {
                center: this.Ka(),
                zoom: this.fa()
            };
            if (!a || !a instanceof eb && 0 === a.length || a instanceof eb && a.xj())
                return c;
            var d = [];
            a instanceof eb ? (d.push(a.of()),
                d.push(a.se())) : d = a.slice(0);
            for (var b = b || {}, e = [], f = 0, g = d.length; f < g; f++)
                e.push(this.xe.Im(d[f], this.Wb));
            d = new eb;
            for (f = e.length - 1; 0 <= f; f--)
                d.extend(e[f]);
            if (d.xj())
                return c;
            c = d.Ka();
            e = this.OR(d, b);
            b.margins && (d = b.margins,
                f = (d[1] - d[3]) / 2,
                d = (d[0] - d[2]) / 2,
                g = this.pa().Bc(e),
                b.offset && (f = b.offset.width,
                    d = b.offset.height),
                c.lng += g * f,
                c.lat += g * d);
            c = this.xe.oh(c, this.Wb);
            return {
                center: c,
                zoom: e
            }
        },
        Ah: function(a, b) {
            var c;
            c = a && a.center ? a : this.Zs(a, b);
            var b = b || {},
                d = b.delay || 200;
            if (c.zoom === this.Oa && b.enableAnimation !== q) {
                var e = this;
                setTimeout(function() {
                    e.ui(c.center, {
                        duration: 210
                    })
                }, d)
            } else
                this.Dd(c.center, c.zoom)
        },
        Rf: u("Vd"),
        hh: function() {
            return this.R.ob && this.R.ob.Wa() ? this.R.ob : p
        },
        getDistance: function(a, b) {
            if (a && b) {
                if (a.nb(b))
                    return 0;
                var c = 0,
                    c = R.To(a, b);
                if (c === p || c === j)
                    c = 0;
                return c
            }
        },
        tx: function() {
            var a = [],
                b = this.wa,
                c = this.Be;
            if (b)
                for (var d in b)
                    b[d] instanceof fb && a.push(b[d]);
            if (c) {
                d = 0;
                for (b = c.length; d < b; d++)
                    a.push(c[d])
            }
            return a
        },
        pa: u("Ib"),
        pz: function() {
            for (var a = this.R.ZE; a < z.Ar.length; a++)
                z.Ar[a](this);
            this.R.ZE = a
        },
        oF: function(a) {
            this.Wb = Pa.sk(a);
            this.Dw = Pa.kL(this.Wb);
            this.Ib === Pa && this.xe instanceof gb && (this.xe.ej = this.Wb)
        },
        setDefaultCursor: function(a) {
            this.K.Xb = a;
            this.platform && (this.platform.style.cursor = this.K.Xb)
        },
        getDefaultCursor: function() {
            return this.K.Xb
        },
        setDraggingCursor: function(a) {
            this.K.Fd = a
        },
        getDraggingCursor: function() {
            return this.K.Fd
        },
        Fx: function() {
            return this.K.uW && 1.5 <= this.K.devicePixelRatio
        },
        ow: function(a, b) {
            b ? this.Oh[b] || (this.Oh[b] = {}) : b = "custom";
            a.tag = b;
            a instanceof hb && (this.Oh[b][a.ba] = a,
                a.ra(this));
            var c = this;
            I.load("hotspot", function() {
                c.pz()
            }, o)
        },
        nZ: function(a, b) {
            b || (b = "custom");
            this.Oh[b][a.ba] && delete this.Oh[b][a.ba]
        },
        am: function(a) {
            a || (a = "custom");
            this.Oh[a] = {}
        },
        Su: function() {
            var a = this.Ib.Wo(),
                b = this.Ib.pm(),
                c = this.K;
            c.gc = c.JO || a;
            c.$b = c.IO || b;
            c.gc < a && (c.gc = a);
            c.$b > b && (c.$b = b)
        },
        setMinZoom: function(a) {
            a = Math.round(a);
            a > this.K.$b && (a = this.K.$b);
            this.K.JO = a;
            this.qJ()
        },
        setMaxZoom: function(a) {
            a = Math.round(a);
            a < this.K.gc && (a = this.K.gc);
            this.K.IO = a;
            this.qJ()
        },
        qJ: function() {
            this.Su();
            var a = this.K;
            this.Oa < a.gc ? this.Nc(a.gc) : this.Oa > a.$b && this.Nc(a.$b);
            var b = new O("onzoomspanchange");
            b.gc = a.gc;
            b.$b = a.$b;
            this.dispatchEvent(b)
        },
        T2: u("JB"),
        getKey: function() {
            return qa
        },
        Qt: function(a) {
            var b = this;
            window.MPC_Mgr && window.MPC_Mgr[b.ba] && window.MPC_Mgr[b.ba].close();
            b.K.lj = q;
            z.An("cus.fire", "count", "z_setmapstylecount");
            if (a) {
                b = this;
                a.styleJson && (a.styleStr = b.r_(a.styleJson));
                G() && x.da.gF ? setTimeout(function() {
                    b.K.ue = a;
                    b.dispatchEvent(new O("onsetcustomstyles", a))
                }, 50) : (this.K.ue = a,
                    this.dispatchEvent(new O("onsetcustomstyles", a)),
                    this.YL(b.K.ue.geotableId));
                var c = {
                    style: a.style
                };
                a.features && 0 < a.features.length && (c.features = o);
                a.styleJson && 0 < a.styleJson.length && (c.styleJson = o);
                Ra(5050, c);
                a.style && (c = b.K.cm[a.style] ? b.K.cm[a.style].backColor : b.K.cm.normal.backColor) && (this.Na().style.backgroundColor = c)
            }
        },
        cY: function(a) {
            this.controls || (this.controls = {
                navigationControl: new ib,
                scaleControl: new jb,
                overviewMapControl: new kb,
                mapTypeControl: new lb
            });
            var b = this,
                c;
            for (c in this.controls)
                b.zN(b.controls[c]);
            a = a || [];
            x.kc.Gb(a, function(a) {
                b.mw(b.controls[a])
            })
        },
        YL: function(a) {
            a ? this.ks && this.ks.Af === a || (this.xh(this.ks),
                this.ks = new mb({
                    geotableId: a
                }),
                this.Wg(this.ks)) : this.xh(this.ks)
        },
        Vb: function() {
            var a = this.fa() >= this.K.RF && this.pa() === Ma && 18 >= this.fa(),
                b = q;
            try {
                document.createElement("canvas").getContext("2d"),
                    b = o
            } catch (c) {
                b = q
            }
            return a && b
        },
        getCurrentCity: function() {
            return {
                name: this.Yg,
                code: this.Zr
            }
        },
        qm: function() {
            this.P.Yn();
            return this.P
        },
        setPanorama: function(a) {
            this.P = a;
            this.P.rF(this)
        },
        r_: function(a) {
            for (var b = {
                    featureType: "t",
                    elementType: "e",
                    visibility: "v",
                    color: "c",
                    lightness: "l",
                    saturation: "s",
                    weight: "w",
                    zoom: "z",
                    hue: "h"
                }, c = {
                    all: "all",
                    geometry: "g",
                    "geometry.fill": "g.f",
                    "geometry.stroke": "g.s",
                    labels: "l",
                    "labels.text.fill": "l.t.f",
                    "labels.text.stroke": "l.t.s",
                    "lables.text": "l.t",
                    "labels.icon": "l.i"
                }, d = [], e = 0, f; f = a[e]; e++) {
                var g = f.stylers;
                delete f.stylers;
                x.extend(f, g);
                var g = [],
                    i;
                for (i in b)
                    if (f[i])
                        if ("elementType" === i)
                            g.push(b[i] + ":" + c[f[i]]);
                        else {
                            switch (f[i]) {
                                case "poilabel":
                                    f[i] = "poi";
                                    break;
                                case "districtlabel":
                                    f[i] = "label"
                            }
                            g.push(b[i] + ":" + f[i])
                        }
                2 < g.length && d.push(g.join("|"))
            }
            return d.join(",")
        }
    });

    function Ra(a, b) {
        if (a) {
            var b = b || {},
                c = "",
                d;
            for (d in b)
                c = c + "&" + d + "=" + encodeURIComponent(b[d]);
            var e = function(a) {
                    a && (nb = o,
                        setTimeout(function() {
                            ob.src = z.Ac + "images/blank.gif?" + a.src
                        }, 50))
                },
                f = function() {
                    var a = pb.shift();
                    a && e(a)
                };
            d = (1E8 * Math.random()).toFixed(0);
            nb ? pb.push({
                src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            }) : e({
                src: "product=jsapi&sub_product=jsapi&v=" + z.version + "&sub_product_v=" + z.version + "&t=" + d + "&code=" + a + "&da_src=" + a + c
            });
            qb || (x.M(ob, "load", function() {
                    nb = q;
                    f()
                }),
                x.M(ob, "error", function() {
                    nb = q;
                    f()
                }),
                qb = o)
        }
    }
    var nb, qb, pb = [],
        ob = new Image;
    Ra(5E3, {
        device_pixel_ratio: window.devicePixelRatio,
        platform: navigator.platform
    });
    z.SL = {
        TILE_BASE_URLS: ["gss0.bdstatic.com/5bwHcj7lABFU8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFV8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFS8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFT8t_jkk_Z1zRvfdw6buu", "gss0.bdstatic.com/5bwHcj7lABFY8t_jkk_Z1zRvfdw6buu"],
        TILE_ONLINE_URLS: ["gss0.bdstatic.com/8bo_dTSlR1gBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRMgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRcgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlRsgBo1vgoIiO_jowehsv", "gss0.bdstatic.com/8bo_dTSlQ1gBo1vgoIiO_jowehsv"],
        TIlE_PERSPECT_URLS: ["gss0.bdstatic.com/-OR1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-ON1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OZ1cTe9KgQFm2e88IuM_a", "gss0.bdstatic.com/-OV1cTe9KgQFm2e88IuM_a"],
        geolocControl: "gsp0.baidu.com/8LkJsjOpB1gCo2Kml5_Y_D3",
        TILES_YUN_HOST: ["gsp0.baidu.com/-eR1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eN1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eZ1bSahKgkFkRGko9WTAnF6hhy", "gsp0.baidu.com/-eV1bSahKgkFkRGko9WTAnF6hhy"],
        traffic: "gsp0.baidu.com/7_AZsjOpB1gCo2Kml5_Y_DAcsMJiwa",
        iw_pano: "gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_",
        message: "gsp0.baidu.com/7vo0bSba2gU2pMbgoY3K",
        baidumap: "gsp0.baidu.com/80MWsjip0QIZ8tyhnq",
        wuxian: "gsp0.baidu.com/6a1OdTeaKgQFm2e88IuM_a",
        pano: ["gss0.bdstatic.com/5LUZemba_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemfa_QUU8t7mm9GUKT-xh_", "gss0.bdstatic.com/5LUZemja_QUU8t7mm9GUKT-xh_"],
        main_domain_nocdn: {
            baidu: "gsp0.baidu.com/9_Q4sjOpB1gCo2Kml5_Y_D3",
            other: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["gss0.bdstatic.com/9_Q4vHSd2RZ3otebn9fN2DJv", "gss0.baidu.com/9_Q4vXSd2RZ3otebn9fN2DJv", "gss0.bdstatic.com/9_Q4vnSd2RZ3otebn9fN2DJv"],
            other: ["api.map.baidu.com"],
            webmap: ["gss0.baidu.com/6b1IcTe9R1gBo1vgoIiO_jowehsv"]
        },
        map_click: "gsp0.baidu.com/80MWbzKh2wt3n2qy8IqW0jdnxx1xbK",
        vector_traffic: "gss0.bdstatic.com/8aZ1cTe9KgQIm2_p8IuM_a"
    };
    z.XX = {
        TILE_BASE_URLS: ["shangetu0.map.bdimg.com", "shangetu1.map.bdimg.com", "shangetu2.map.bdimg.com", "shangetu3.map.bdimg.com", "shangetu4.map.bdimg.com"],
        TILE_ONLINE_URLS: ["online0.map.bdimg.com", "online1.map.bdimg.com", "online2.map.bdimg.com", "online3.map.bdimg.com", "online4.map.bdimg.com"],
        TIlE_PERSPECT_URLS: ["d0.map.baidu.com", "d1.map.baidu.com", "d2.map.baidu.com", "d3.map.baidu.com"],
        geolocControl: "loc.map.baidu.com",
        TILES_YUN_HOST: ["g0.api.map.baidu.com", "g1.api.map.baidu.com", "g2.api.map.baidu.com", "g3.api.map.baidu.com"],
        traffic: "its.map.baidu.com:8002",
        iw_pano: "pcsv0.map.bdimg.com",
        message: "j.map.baidu.com",
        baidumap: "map.baidu.com",
        wuxian: "wuxian.baidu.com",
        pano: ["pcsv0.map.bdimg.com", "pcsv1.map.bdimg.com", "pcsv2.map.bdimg.com"],
        main_domain_nocdn: {
            baidu: "api.map.baidu.com"
        },
        main_domain_cdn: {
            baidu: ["api0.map.bdimg.com", "api1.map.bdimg.com", "api2.map.bdimg.com"],
            webmap: ["webmap0.map.bdimg.com"]
        },
        map_click: "mapclick.map.baidu.com",
        vector_traffic: "or.map.bdimg.com"
    };
    z.U_ = {
        "0": {
            proto: "http://",
            domain: z.XX
        },
        1: {
            proto: "https://",
            domain: z.SL
        },
        2: {
            proto: "https://",
            domain: z.SL
        }
    };
    z.Ny = window.HOST_TYPE || "0";
    z.url = z.U_[z.Ny];
    z.qp = z.url.proto + z.url.domain.baidumap + "/";
    z.Ac = z.url.proto + ("2" == z.Ny ? z.url.domain.main_domain_nocdn.other : z.url.domain.main_domain_nocdn.baidu) + "/";
    z.ma = z.url.proto + ("2" == z.Ny ? z.url.domain.main_domain_cdn.other[0] : z.url.domain.main_domain_cdn.baidu[0]) + "/";
    z.cj = z.url.proto + z.url.domain.main_domain_cdn.webmap[0] + "/";
    z.sg = function(a, b) {
        var c, d, b = b || "";
        switch (a) {
            case "main_domain_nocdn":
                c = z.Ac + b;
                break;
            case "main_domain_cdn":
                c = z.ma + b;
                break;
            default:
                d = z.url.domain[a],
                    "[object Array]" == Object.prototype.toString.call(d) ? (c = [],
                        x.kc.Gb(d, function(a, d) {
                            c[d] = z.url.proto + a + "/" + b
                        })) : c = z.url.proto + z.url.domain[a] + "/" + b
        }
        return c
    };

    function rb(a) {
        var b = {
            duration: 1E3,
            Gc: 30,
            Go: 0,
            jc: sb.xM,
            Bt: s()
        };
        this.Zf = [];
        if (a)
            for (var c in a)
                b[c] = a[c];
        this.k = b;
        if (Xa(b.Go)) {
            var d = this;
            setTimeout(function() {
                d.start()
            }, b.Go)
        } else
            b.Go != tb && this.start()
    }
    var tb = "INFINITE";
    rb.prototype.start = function() {
        this.Ku = ab();
        this.Vz = this.Ku + this.k.duration;
        ub(this)
    };
    rb.prototype.add = function(a) {
        this.Zf.push(a)
    };

    function ub(a) {
        var b = ab();
        b >= a.Vz ? (Ya(a.k.va) && a.k.va(a.k.jc(1)),
            Ya(a.k.finish) && a.k.finish(),
            0 < a.Zf.length && (b = a.Zf[0],
                b.Zf = [].concat(a.Zf.slice(1)),
                b.start())) : (a.uy = a.k.jc((b - a.Ku) / a.k.duration),
            Ya(a.k.va) && a.k.va(a.uy),
            a.DF || (a.Rr = setTimeout(function() {
                ub(a)
            }, 1E3 / a.k.Gc)))
    }
    rb.prototype.stop = function(a) {
        this.DF = o;
        for (var b = 0; b < this.Zf.length; b++)
            this.Zf[b].stop(),
            this.Zf[b] = p;
        this.Zf.length = 0;
        this.Rr && (clearTimeout(this.Rr),
            this.Rr = p);
        this.k.Bt(this.uy);
        a && (this.Vz = this.Ku,
            ub(this))
    };
    rb.prototype.cancel = ha(1);
    var sb = {
        xM: function(a) {
            return a
        },
        reverse: function(a) {
            return 1 - a
        },
        $C: function(a) {
            return a * a
        },
        ZC: function(a) {
            return Math.pow(a, 3)
        },
        Ds: function(a) {
            return -(a * (a - 2))
        },
        OK: function(a) {
            return Math.pow(a - 1, 3) + 1
        },
        NK: function(a) {
            return 0.5 > a ? 2 * a * a : -2 * (a - 2) * a - 1
        },
        V1: function(a) {
            return 0.5 > a ? 4 * Math.pow(a, 3) : 4 * Math.pow(a - 1, 3) + 1
        },
        W1: function(a) {
            return (1 - Math.cos(Math.PI * a)) / 2
        }
    };
    sb["ease-in"] = sb.$C;
    sb["ease-out"] = sb.Ds;
    var E = {
        ZF: 34,
        $F: 21,
        aG: new N(21, 32),
        $O: new N(10, 32),
        ZO: new N(24, 36),
        YO: new N(12, 36),
        XF: new N(13, 1),
        qa: z.ma + "images/",
        c3: "http://api0.map.bdimg.com/images/",
        YF: z.ma + "images/markers_new.png",
        WO: 24,
        XO: 73,
        eC: {
            "\u5317\u4eac": {
                jy: "bj",
                m: new H(116.403874, 39.914889)
            },
            "\u4e0a\u6d77": {
                jy: "sh",
                m: new H(121.487899, 31.249162)
            },
            "\u6df1\u5733": {
                jy: "sz",
                m: new H(114.025974, 22.546054)
            },
            "\u5e7f\u5dde": {
                jy: "gz",
                m: new H(113.30765, 23.120049)
            }
        },
        fontFamily: "arial,sans-serif"
    };
    x.da.nf ? (x.extend(E, {
            CK: "url(" + E.qa + "ruler.cur),crosshair",
            Xb: "-moz-grab",
            Fd: "-moz-grabbing"
        }),
        x.platform.lM && (E.fontFamily = "arial,simsun,sans-serif")) : x.da.cC || x.da.gF ? x.extend(E, {
        CK: "url(" + E.qa + "ruler.cur) 2 6,crosshair",
        Xb: "url(" + E.qa + "openhand.cur) 8 8,default",
        Fd: "url(" + E.qa + "closedhand.cur) 8 8,move"
    }) : x.extend(E, {
        CK: "url(" + E.qa + "ruler.cur),crosshair",
        Xb: "url(" + E.qa + "openhand.cur),default",
        Fd: "url(" + E.qa + "closedhand.cur),move"
    });

    function vb(a, b) {
        var c = a.style;
        c.left = b[0] + "px";
        c.top = b[1] + "px"
    }

    function wb(a) {
        0 < x.da.la ? a.unselectable = "on" : a.style.MozUserSelect = "none"
    }

    function xb(a) {
        return a && a.parentNode && 11 !== a.parentNode.nodeType
    }

    function yb(a, b) {
        x.D.Ix(a, "beforeEnd", b);
        return a.lastChild
    }

    function zb(a) {
        for (var b = {
                left: 0,
                top: 0
            }; a && a.offsetParent;)
            b.left += a.offsetLeft,
            b.top += a.offsetTop,
            a = a.offsetParent;
        return b
    }

    function na(a) {
        a = window.event || a;
        a.stopPropagation ? a.stopPropagation() : a.cancelBubble = o
    }

    function Ab(a) {
        a = window.event || a;
        a.preventDefault ? a.preventDefault() : a.returnValue = q;
        return q
    }

    function oa(a) {
        na(a);
        return Ab(a)
    }

    function Bb() {
        var a = document.documentElement,
            b = document.body;
        return a && (a.scrollTop || a.scrollLeft) ? [a.scrollTop, a.scrollLeft] : b ? [b.scrollTop, b.scrollLeft] : [0, 0]
    }

    function Cb(a, b) {
        if (a && b)
            return Math.round(Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2)))
    }

    function Db(a, b) {
        var c = [],
            b = b || function(a) {
                return a
            },
            d;
        for (d in a)
            c.push(d + "=" + b(a[d]));
        return c.join("&")
    }

    function M(a, b, c) {
        var d = document.createElement(a);
        c && (d = document.createElementNS(c, a));
        return x.D.nF(d, b || {})
    }

    function Wa(a) {
        if (a.currentStyle)
            return a.currentStyle;
        if (a.ownerDocument && a.ownerDocument.defaultView)
            return a.ownerDocument.defaultView.getComputedStyle(a, p)
    }

    function Ya(a) {
        return "function" === typeof a
    }

    function Xa(a) {
        return "number" === typeof a
    }

    function $a(a) {
        return "string" == typeof a
    }

    function Eb(a) {
        return "undefined" != typeof a
    }

    function Gb(a) {
        return "object" == typeof a
    }
    var Hb = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function Ib(a) {
        var b = "",
            c, d, e = "",
            f, g = "",
            i = 0;
        f = /[^A-Za-z0-9\+\/\=]/g;
        if (!a || f.exec(a))
            return a;
        a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");
        do
            c = Hb.indexOf(a.charAt(i++)),
            d = Hb.indexOf(a.charAt(i++)),
            f = Hb.indexOf(a.charAt(i++)),
            g = Hb.indexOf(a.charAt(i++)),
            c = c << 2 | d >> 4,
            d = (d & 15) << 4 | f >> 2,
            e = (f & 3) << 6 | g,
            b += String.fromCharCode(c),
            64 != f && (b += String.fromCharCode(d)),
            64 != g && (b += String.fromCharCode(e));
        while (i < a.length);
        return b
    }
    var O = x.lang.Xy;

    function G() {
        return !(!x.platform.mE && !x.platform.nY && !x.platform.Fm)
    }

    function Va() {
        return !(!x.platform.lM && !x.platform.dM && !x.platform.tY)
    }

    function ab() {
        return (new Date).getTime()
    }

    function Jb() {
        var a = document.body.appendChild(M("div"));
        a.innerHTML = '<v:shape id="vml_tester1" adj="1" />';
        var b = a.firstChild;
        if (!b.style)
            return q;
        b.style.behavior = "url(#default#VML)";
        b = b ? "object" === typeof b.adj : o;
        a.parentNode.removeChild(a);
        return b
    }

    function Kb() {
        return !!document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Shape", "1.1")
    }

    function Nb() {
        return !!M("canvas").getContext
    }

    function Ob(a) {
        return a * Math.PI / 180
    }
    z.AY = function() {
        var a = o,
            b = o,
            c = o,
            d = o,
            e = 0,
            f = 0,
            g = 0,
            i = 0;
        return {
            HQ: function() {
                e += 1;
                a && (a = q,
                    setTimeout(function() {
                        Ra(5054, {
                            pic: e
                        });
                        a = o;
                        e = 0
                    }, 1E4))
            },
            G0: function() {
                f += 1;
                b && (b = q,
                    setTimeout(function() {
                        Ra(5055, {
                            move: f
                        });
                        b = o;
                        f = 0
                    }, 1E4))
            },
            I0: function() {
                g += 1;
                c && (c = q,
                    setTimeout(function() {
                        Ra(5056, {
                            zoom: g
                        });
                        c = o;
                        g = 0
                    }, 1E4))
            },
            H0: function(a) {
                i += a;
                d && (d = q,
                    setTimeout(function() {
                        Ra(5057, {
                            tile: i
                        });
                        d = o;
                        i = 0
                    }, 5E3))
            }
        }
    }();
    z.cq = {
        mG: "#83a1ff",
        fq: "#808080"
    };

    function Pb(a, b, c) {
        b.Lm || (b.Lm = [],
            b.handle = {});
        b.Lm.push({
            filter: c,
            lm: a
        });
        b.addEventListener || (b.addEventListener = function(a, c) {
            b.attachEvent("on" + a, c)
        });
        b.handle.click || (b.addEventListener("click", function(a) {
                for (var c = a.target || a.srcElement; c != b;) {
                    Qb(b.Lm, function(b, g) {
                        RegExp(g.filter).test(c.getAttribute("filter")) && g.lm.call(c, a, c.getAttribute("filter"))
                    });
                    c = c.parentNode
                }
            }, q),
            b.handle.click = o)
    }

    function Qb(a, b) {
        for (var c = 0, d = a.length; c < d; c++)
            b(c, a[c])
    }
    void

    function(a, b, c) {
        void

        function(a, b, c) {
            function g(a) {
                if (!a.Fo) {
                    for (var c = o, d = [], f = a.rZ, i = 0; f && i < f.length; i++) {
                        var k = f[i],
                            l = ea[k] = ea[k] || {};
                        if (l.Fo || l == a)
                            d.push(l.Kc);
                        else {
                            c = q;
                            if (!l.YV && (k = (Ea.get("alias") || {})[k] || k + ".js", !J[k])) {
                                J[k] = o;
                                var m = b.createElement("script"),
                                    n = b.getElementsByTagName("script")[0];
                                m.async = o;
                                m.src = k;
                                n.parentNode.insertBefore(m, n)
                            }
                            l.Oy = l.Oy || {};
                            l.Oy[a.name] = a
                        }
                    }
                    if (c) {
                        a.Fo = o;
                        a.uK && (a.Kc = a.uK.apply(a, d));
                        for (var t in a.Oy)
                            g(a.Oy[t])
                    }
                }
            }

            function i(a) {
                return (a || new Date) - D
            }

            function k(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                        b = a,
                        a = L);
                    try {
                        a == L ? (K[b] = K[b] || [],
                            K[b].unshift(c)) : a.addEventListener ? a.addEventListener(b, c, q) : a.attachEvent && a.attachEvent("on" + b, c)
                    } catch (d) {}
                }
            }

            function l(a, b, c) {
                if (a) {
                    "string" == typeof a && (c = b,
                        b = a,
                        a = L);
                    try {
                        if (a == L) {
                            var d = K[b];
                            if (d)
                                for (var e = d.length; e--;)
                                    d[e] === c && d.splice(e, 1)
                        } else
                            a.removeEventListener ? a.removeEventListener(b, c, q) : a.detachEvent && a.detachEvent("on" + b, c)
                    } catch (f) {}
                }
            }

            function m(a) {
                var b = K[a],
                    c = 0;
                if (b) {
                    for (var d = [], e = arguments, f = 1; f < e.length; f++)
                        d.push(e[f]);
                    for (f = b.length; f--;)
                        b[f].apply(this, d) && c++;
                    return c
                }
            }

            function n(a, b) {
                if (a && b) {
                    var c = new Image(1, 1),
                        d = [],
                        e = "img_" + +new Date,
                        f;
                    for (f in b)
                        b[f] && d.push(f + "=" + encodeURIComponent(b[f]));
                    L[e] = c;
                    c.onload = c.onerror = function() {
                        L[e] = c = c.onload = c.onerror = p;
                        delete L[e]
                    };
                    c.src = a + "?" + d.join("&")
                }
            }

            function t() {
                var a = arguments,
                    b = a[0];
                if (this.tK || /^(on|un|set|get|create)$/.test(b)) {
                    for (var b = w.prototype[b], c = [], d = 1, e = a.length; d < e; d++)
                        c.push(a[d]);
                    "function" == typeof b && b.apply(this, c)
                } else
                    this.TJ.push(a)
            }

            function v(a, b) {
                var c = {},
                    d;
                for (d in a)
                    a.hasOwnProperty(d) && (c[d] = a[d]);
                for (d in b)
                    b.hasOwnProperty(d) && (c[d] = b[d]);
                return c
            }

            function w(a) {
                this.name = a;
                this.Is = {
                    protocolParameter: {
                        postUrl: p,
                        protocolParameter: p
                    }
                };
                this.TJ = [];
                this.alog = L
            }

            function y(a) {
                a = a || "default";
                if ("*" == a) {
                    var a = [],
                        b;
                    for (b in W)
                        a.push(W[b]);
                    return a
                }
                (b = W[a]) || (b = W[a] = new w(a));
                return b
            }
            var C = c.alog;
            if (!C || !C.Fo) {
                var A = b.all && a.attachEvent,
                    D = C && C.vE || +new Date,
                    B = a.o3 || (+new Date).toString(36) + Math.random().toString(36).substr(2, 3),
                    F = 0,
                    J = {},
                    L = function(a) {
                        var b = arguments,
                            c, d, e, f;
                        if ("define" == a || "require" == a) {
                            for (d = 1; d < b.length; d++)
                                switch (typeof b[d]) {
                                    case "string":
                                        c = b[d];
                                        break;
                                    case "object":
                                        e = b[d];
                                        break;
                                    case "function":
                                        f = b[d]
                                }
                            "require" == a && (c && !e && (e = [c]),
                                c = p);
                            c = !c ? "#" + F++ : c;
                            d = ea[c] = ea[c] || {};
                            d.Fo || (d.name = c,
                                d.rZ = e,
                                d.uK = f,
                                "define" == a && (d.YV = o),
                                g(d))
                        } else
                            "function" == typeof a ? a(L) : ("" + a).replace(/^(?:([\w$_]+)\.)?(\w+)$/, function(a, c, d) {
                                b[0] = d;
                                t.apply(L.MF(c), b)
                            })
                    },
                    K = {},
                    W = {},
                    ea = {
                        p1: {
                            name: "alog",
                            Fo: o,
                            Kc: L
                        }
                    };
                w.prototype.start = w.prototype.create = function(a) {
                    if (!this.tK) {
                        "object" == typeof a && this.set(a);
                        this.tK = new Date;
                        for (this.Js("create", this); a = this.TJ.shift();)
                            t.apply(this, a)
                    }
                };
                w.prototype.send = function(a, b) {
                    var c = v({
                        ts: i().toString(36),
                        t: a,
                        sid: B
                    }, this.Is);
                    if ("object" == typeof b)
                        c = v(c, b);
                    else {
                        var d = arguments;
                        switch (a) {
                            case "pageview":
                                d[1] && (c.page = d[1]);
                                d[2] && (c.title = d[2]);
                                break;
                            case "event":
                                d[1] && (c.eventCategory = d[1]);
                                d[2] && (c.eventAction = d[2]);
                                d[3] && (c.eventLabel = d[3]);
                                d[4] && (c.eventValue = d[4]);
                                break;
                            case "timing":
                                d[1] && (c.timingCategory = d[1]);
                                d[2] && (c.timingVar = d[2]);
                                d[3] && (c.timingValue = d[3]);
                                d[4] && (c.timingLabel = d[4]);
                                break;
                            case "exception":
                                d[1] && (c.exDescription = d[1]);
                                d[2] && (c.exFatal = d[2]);
                                break;
                            default:
                                return
                        }
                    }
                    this.Js("send", c);
                    var e;
                    if (d = this.Is.protocolParameter) {
                        var f = {};
                        for (e in c)
                            d[e] !== p && (f[d[e] || e] = c[e]);
                        e = f
                    } else
                        e = c;
                    n(this.Is.postUrl, e)
                };
                w.prototype.set = function(a, b) {
                    if ("string" == typeof a)
                        "protocolParameter" == a && (b = v({
                            postUrl: p,
                            protocolParameter: p
                        }, b)),
                        this.Is[a] = b;
                    else if ("object" == typeof a)
                        for (var c in a)
                            this.set(c, a[c])
                };
                w.prototype.get = function(a, b) {
                    var c = this.Is[a];
                    "function" == typeof b && b(c);
                    return c
                };
                w.prototype.Js = function(a, b) {
                    return L.Js(this.name + "." + a, b)
                };
                w.prototype.M = function(a, b) {
                    L.M(this.name + "." + a, b)
                };
                w.prototype.bd = function(a, b) {
                    L.bd(this.name + "." + a, b)
                };
                L.name = "alog";
                L.bO = B;
                L.Fo = o;
                L.timestamp = i;
                L.bd = l;
                L.M = k;
                L.Js = m;
                L.MF = y;
                L("init");
                var fa = w.prototype;
                S(fa, {
                    start: fa.start,
                    create: fa.create,
                    send: fa.send,
                    set: fa.set,
                    get: fa.get,
                    on: fa.M,
                    un: fa.bd,
                    fire: fa.Js
                });
                var Ea = y();
                Ea.set("protocolParameter", {
                    o1: p
                });
                if (C) {
                    fa = [].concat(C.ub || [], C.Vm || []);
                    C.ub = C.Vm = p;
                    for (var Ua in L)
                        L.hasOwnProperty(Ua) && (C[Ua] = L[Ua]);
                    L.ub = L.Vm = {
                        push: function(a) {
                            L.apply(L, a)
                        }
                    };
                    for (C = 0; C < fa.length; C++)
                        L.apply(L, fa[C])
                }
                c.alog = L;
                A && k(b, "mouseup", function(a) {
                    a = a.target || a.srcElement;
                    1 == a.nodeType && /^ajavascript:/i.test(a.tagName + a.href)
                });
                var Qa = q;
                a.onerror = function(a, b, d, e) {
                    var g = o;
                    !b && /^script error/i.test(a) && (Qa ? g = q : Qa = o);
                    g && c.alog("exception.send", "exception", {
                        yt: a,
                        uE: b,
                        ut: d,
                        as: e
                    });
                    return q
                };
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        yt: a.yt,
                        uE: a.path,
                        ut: a.ut,
                        method: a.method,
                        aL: "catch"
                    })
                })
            }
        }(a, b, c);
        void

        function(a, b, c) {
            var g = "18_1";
            G() && (g = "18_2");
            var i = "http://static.tieba.baidu.com";
            "https:" === a.location.protocol && (i = "https://gsp0.baidu.com/5aAHeD3nKhI2p27j8IqW0jdnxx1xbK");
            var k = Math.random,
                i = i + "/tb/pms/img/st.gif",
                l = {
                    yh: "0.1"
                },
                m = {
                    yh: "0.1"
                },
                n = {
                    yh: "0.1"
                },
                t = {
                    yh: "0"
                };
            if (l && l.yh && k() < l.yh) {
                var v = c.alog.MF("monkey"),
                    w, l = a.screen,
                    y = b.referrer;
                v.set("ver", 5);
                v.set("pid", 241);
                l && v.set("px", l.width + "*" + l.height);
                v.set("ref", y);
                c.alog("monkey.on", "create", function() {
                    w = c.alog.timestamp;
                    v.set("protocolParameter", {
                        reports: p
                    })
                });
                c.alog("monkey.on", "send", function(a) {
                    "pageview" == a.t && (a.cmd = "open");
                    a.now && (a.ts = w(a.now).toString(36),
                        a.now = "")
                });
                c.alog("monkey.create", {
                    page: g,
                    pid: "241",
                    p: "18",
                    dv: 6,
                    postUrl: i,
                    reports: {
                        refer: 1
                    }
                });
                c.alog("monkey.send", "pageview", {
                    now: +new Date
                })
            }
            if (m && m.yh && k() < m.yh) {
                var C = q;
                a.onerror = function(a, b, d, e) {
                    var g = o;
                    !b && /^script error/i.test(a) && (C ? g = q : C = o);
                    g && c.alog("exception.send", "exception", {
                        yt: a,
                        uE: b,
                        ut: d,
                        as: e
                    });
                    return q
                };
                c.alog("exception.on", "catch", function(a) {
                    c.alog("exception.send", "exception", {
                        yt: a.yt,
                        uE: a.path,
                        ut: a.ut,
                        method: a.method,
                        aL: "catch"
                    })
                });
                c.alog("exception.create", {
                    postUrl: i,
                    dv: 7,
                    page: g,
                    pid: "170",
                    p: "18"
                })
            }
            n && (n.yh && k() < n.yh) && (c.alog("cus.on", "time", function(a) {
                    var b = {},
                        d = q,
                        e;
                    if ("[object Object]" === a.toString()) {
                        for (var g in a)
                            "page" == g ? b.page = a[g] : (e = parseInt(a[g]),
                                0 < e && /^z_/.test(g) && (d = o,
                                    b[g] = e));
                        d && c.alog("cus.send", "time", b)
                    }
                }),
                c.alog("cus.on", "count", function(a) {
                    var b = {},
                        d = q;
                    "string" === typeof a && (a = [a]);
                    if (a instanceof Array)
                        for (var e = 0; e < a.length; e++)
                            /^z_/.test(a[e]) ? (d = o,
                                b[a[e]] = 1) : /^page:/.test(a[e]) && (b.page = a[e].substring(5));
                    d && c.alog("cus.send", "count", b)
                }),
                c.alog("cus.create", {
                    dv: 3,
                    postUrl: i,
                    page: g,
                    p: "18"
                }));
            if (t && t.yh && k() < t.yh) {
                var A = ["Moz", "O", "ms", "Webkit"],
                    D = ["-webkit-", "-moz-", "-o-", "-ms-"],
                    B = function() {
                        return typeof b.createElement !== "function" ? b.createElement(arguments[0]) : b.createElement.apply(b, arguments)
                    },
                    F = B("dpFeatureTest").style,
                    J = function(a) {
                        return L(a, j, j)
                    },
                    L = function(a, b, c) {
                        var d = a.charAt(0).toUpperCase() + a.slice(1),
                            e = (a + " " + A.join(d + " ") + d).split(" ");
                        if (typeof b === "string" || typeof b === "undefined")
                            return K(e, b);
                        e = (a + " " + A.join(d + " ") + d).split(" ");
                        a: {
                            var a = e,
                                f;
                            for (f in a)
                                if (a[f] in b) {
                                    if (c === q) {
                                        b = a[f];
                                        break a
                                    }
                                    f = b[a[f]];
                                    b = typeof f === "function" ? fnBind(f, c || b) : f;
                                    break a
                                }
                            b = q
                        }
                        return b
                    },
                    K = function(a, b) {
                        var c, d, e;
                        d = a.length;
                        for (c = 0; c < d; c++) {
                            e = a[c];
                            ~("" + e).indexOf("-") && (e = W(e));
                            if (F[e] !== j)
                                return b == "pfx" ? e : o
                        }
                        return q
                    },
                    W = function(a) {
                        return a.replace(/([a-z])-([a-z])/g, function(a, b, c) {
                            return b + c.toUpperCase()
                        }).replace(/^-/, "")
                    },
                    ea = function(a, b, c) {
                        if (a.indexOf("@") === 0)
                            return atRule(a);
                        a.indexOf("-") != -1 && (a = W(a));
                        return !b ? L(a, "pfx") : L(a, b, c)
                    },
                    fa = function() {
                        var a = B("canvas");
                        return !(!a.getContext || !a.getContext("2d"))
                    },
                    Ea = function() {
                        var a = B("div");
                        return "draggable" in a || "ondragstart" in a && "ondrop" in a
                    },
                    Ua = function() {
                        try {
                            localStorage.setItem("localStorage", "localStorage");
                            localStorage.removeItem("localStorage");
                            return o
                        } catch (a) {
                            return q
                        }
                    },
                    Qa = function() {
                        return "content" in b.createElement("template")
                    },
                    Aa = function() {
                        return "createShadowRoot" in b.createElement("a")
                    },
                    lc = function() {
                        return "registerElement" in b
                    },
                    pe = function() {
                        return "import" in b.createElement("link")
                    },
                    nf = function() {
                        return "getItems" in b
                    },
                    fd = function() {
                        return "EventSource" in window
                    },
                    Lb = function(a, b) {
                        var c = new Image;
                        c.onload = function() {
                            b(a, c.width > 0 && c.height > 0)
                        };
                        c.onerror = function() {
                            b(a, q)
                        };
                        c.src = "data:image/webp;base64," + {
                            r3: "UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
                            q3: "UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",
                            alpha: "UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",
                            jk: "UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"
                        }[a]
                    },
                    mc = function(a, b) {
                        return Mb.ii["WebP-" + a] = b
                    },
                    qe = function() {
                        return "openDatabase" in a
                    },
                    re = function() {
                        return "performance" in a && "timing" in a.performance
                    },
                    Mc = function() {
                        return "performance" in a && "mark" in a.performance
                    },
                    gd = function() {
                        return !(!Array.prototype || !Array.prototype.every || !Array.prototype.filter || !Array.prototype.forEach || !Array.prototype.indexOf || !Array.prototype.lastIndexOf || !Array.prototype.map || !Array.prototype.some || !Array.prototype.reduce || !Array.prototype.reduceRight || !Array.isArray)
                    },
                    se = function() {
                        return "Promise" in a && "cast" in a.gq && "resolve" in a.gq && "reject" in a.gq && "all" in a.gq && "race" in a.gq && function() {
                            var b;
                            new a.gq(function(a) {
                                b = a
                            });
                            return typeof b === "function"
                        }()
                    },
                    hd = function() {
                        var b = !!a.t0,
                            c = a.XMLHttpRequest && "withCredentials" in new XMLHttpRequest;
                        return !!a.w0 && b && c
                    },
                    of = function() {
                        return "geolocation" in navigator
                    },
                    te = function() {
                        var b = B("canvas"),
                            c = "probablySupportsContext" in b ? "probablySupportsContext" : "supportsContext";
                        return c in b ? b[c]("webgl") || b[c]("experimental-webgl") : "WebGLRenderingContext" in a
                    },
                    fi = function() {
                        return !!b.createElementNS && !!b.createElementNS("http://www.w3.org/2000/svg", "svg").H1
                    },
                    gi = function() {
                        return !!a.D0
                    },
                    hi = function() {
                        return "WebSocket" in a && a.A0.q0 === 2
                    },
                    ii = function() {
                        return !!b.createElement("video").canPlayType
                    },
                    ji = function() {
                        return !!b.createElement("audio").canPlayType
                    },
                    ki = function() {
                        return !!(a.history && "pushState" in a.history)
                    },
                    li = function() {
                        return !(!a.r0 || !a.s0)
                    },
                    mi = function() {
                        return "postMessage" in window
                    },
                    ni = function() {
                        return !!a.webkitNotifications || "Notification" in a && "permission" in a.sP && "requestPermission" in a.sP
                    },
                    oi = function() {
                        for (var b = ["webkit", "moz", "o", "ms"], c = a.requestAnimationFrame, e = 0; e < b.length && !c; ++e)
                            c = a[b[e] + "RequestAnimationFrame"];
                        return !!c
                    },
                    pi = function() {
                        return "JSON" in a && "parse" in JSON && "stringify" in JSON
                    },
                    qi = function() {
                        return !(!ea("exitFullscreen", b, q) && !ea("cancelFullScreen", b, q))
                    },
                    ri = function() {
                        return !!ea("Intl", a)
                    },
                    si = function() {
                        return J("flexBasis")
                    },
                    ti = function() {
                        return !!J("perspective")
                    },
                    ui = function() {
                        return J("shapeOutside")
                    },
                    vi = function() {
                        var a = B("div");
                        a.style.cssText = D.join("filter:blur(2px); ");
                        return !!a.style.length && (b.documentMode === j || b.documentMode > 9)
                    },
                    wi = function() {
                        return "XMLHttpRequest" in a && "withCredentials" in new XMLHttpRequest
                    },
                    xi = function() {
                        return B("progress").max !== j
                    },
                    yi = function() {
                        return B("meter").max !== j
                    },
                    zi = function() {
                        return "sendBeacon" in navigator
                    },
                    Ai = function() {
                        return J("borderRadius")
                    },
                    Bi = function() {
                        return J("boxShadow")
                    },
                    Ci = function() {
                        var a = B("div").style;
                        a.cssText = D.join("opacity:.55;");
                        return /^0.55$/.test(a.opacity)
                    },
                    Di = function() {
                        return K(["textShadow"], j)
                    },
                    Ei = function() {
                        return J("animationName")
                    },
                    Fi = function() {
                        return J("transition")
                    },
                    Gi = function() {
                        return navigator.userAgent.indexOf("Android 2.") === -1 && J("transform")
                    },
                    Mb = {
                        ii: {},
                        oa: function(a, b, c) {
                            this.ii[a] = b.apply(this, [].slice.call(arguments, 2))
                        },
                        Cd: function(a, b) {
                            a.apply(this, [].slice.call(arguments, 1))
                        },
                        yZ: function() {
                            this.oa("bdrs", Ai);
                            this.oa("bxsd", Bi);
                            this.oa("opat", Ci);
                            this.oa("txsd", Di);
                            this.oa("anim", Ei);
                            this.oa("trsi", Fi);
                            this.oa("trfm", Gi);
                            this.oa("flex", si);
                            this.oa("3dtr", ti);
                            this.oa("shpe", ui);
                            this.oa("fltr", vi);
                            this.oa("cavs", fa);
                            this.oa("dgdp", Ea);
                            this.oa("locs", Ua);
                            this.oa("wctem", Qa);
                            this.oa("wcsdd", Aa);
                            this.oa("wccse", lc);
                            this.oa("wchti", pe);
                            this.Cd(Lb, "lossy", mc);
                            this.Cd(Lb, "lossless", mc);
                            this.Cd(Lb, "alpha", mc);
                            this.Cd(Lb, "animation", mc);
                            this.oa("wsql", qe);
                            this.oa("natm", re);
                            this.oa("ustm", Mc);
                            this.oa("arra", gd);
                            this.oa("prms", se);
                            this.oa("xhr2", hd);
                            this.oa("wbgl", te);
                            this.oa("geol", of);
                            this.oa("svg", fi);
                            this.oa("work", gi);
                            this.oa("wbsk", hi);
                            this.oa("vido", ii);
                            this.oa("audo", ji);
                            this.oa("hsty", ki);
                            this.oa("file", li);
                            this.oa("psmg", mi);
                            this.oa("wknf", ni);
                            this.oa("rqaf", oi);
                            this.oa("json", pi);
                            this.oa("flsc", qi);
                            this.oa("i18n", ri);
                            this.oa("cors", wi);
                            this.oa("prog", xi);
                            this.oa("metr", yi);
                            this.oa("becn", zi);
                            this.oa("mcrd", nf);
                            this.oa("esrc", fd)
                        }
                    },
                    v = c.alog.MF("feature");
                v.M("commit", function() {
                    Mb.yZ();
                    var a = setInterval(function() {
                        if ("WebP-lossy" in Mb.ii && "WebP-lossless" in Mb.ii && "WebP-alpha" in Mb.ii && "WebP-animation" in Mb.ii) {
                            for (var b in Mb.ii)
                                Mb.ii[b] = Mb.ii[b] ? "y" : "n";
                            v.send("feature", Mb.ii);
                            clearInterval(a)
                        }
                    }, 500)
                });
                c.alog("feature.create", {
                    S1: 4,
                    L3: i,
                    page: g,
                    ub: "18"
                });
                c.alog("feature.fire", "commit")
            }
        }(a, b, c)
    }(window, document, z);
    z.An = z.alog || s();
    z.alog("cus.fire", "count", "z_loadscriptcount");
    "https:" === location.protocol && z.alog("cus.fire", "count", "z_httpscount");

    function Rb(a) {
        var b = window.TILE_VERSION,
            c = "20170927";
        b && b.ditu && (b = b.ditu,
            b[a] && b[a].updateDate && (c = b[a].updateDate));
        return c
    };

    function pa(a, b) {
        if (b) {
            var c = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + c] = function(a) {
                b && b(a);
                delete z._rd["_cbk" + c]
            };
            a += "&callback=BMap._rd._cbk" + c
        }
        var d = M("script", {
            type: "text/javascript"
        });
        d.charset = "utf-8";
        d.src = a;
        d.addEventListener ? d.addEventListener("load", function(a) {
            a = a.target;
            a.parentNode.removeChild(a)
        }, q) : d.attachEvent && d.attachEvent("onreadystatechange", function() {
            var a = window.event.srcElement;
            a && ("loaded" == a.readyState || "complete" == a.readyState) && a.parentNode.removeChild(a)
        });
        setTimeout(function() {
            document.getElementsByTagName("head")[0].appendChild(d);
            d = p
        }, 1)
    };
    var Sb = {
        map: "o3b5bq",
        common: "1jsk53",
        style: "hfbhis",
        tile: "5irhqt",
        vectordrawlib: "0bpbg4",
        newvectordrawlib: "3o4bcm",
        groundoverlay: "0rdnfr",
        pointcollection: "cjur4d",
        marker: "0zevs2",
        symbol: "eaver3",
        canvablepath: "gp22yf",
        vmlcontext: "o3pgbb",
        markeranimation: "4tffwc",
        poly: "4ewt5e",
        draw: "bc5lis",
        drawbysvg: "lp2q1e",
        drawbyvml: "0mz2sl",
        drawbycanvas: "ie5t54",
        infowindow: "d5ltk0",
        oppc: "yxewaq",
        opmb: "2b3mge",
        menu: "uaqnov",
        control: "zrzowm",
        navictrl: "ekcmmq",
        geoctrl: "szvqac",
        copyrightctrl: "owa3ga",
        citylistcontrol: "dieiks",
        scommon: "akkd5g",
        local: "spxcwu",
        route: "ik12uy",
        othersearch: "csvxvv",
        mapclick: "4wrbpj",
        buslinesearch: "yd05l4",
        hotspot: "ws2ryj",
        autocomplete: "4onici",
        coordtrans: "4kmffa",
        coordtransutils: "wu2txp",
        convertor: "onqilg",
        clayer: "hb2rzc",
        pservice: "srzrr4",
        pcommon: "nutdcf",
        panorama: "lecrxd",
        panoramaflash: "0odiws",
        vector: "g5id20"
    };
    x.Iy = function() {
        function a(a) {
            return d && !!c[b + a + "_" + Sb[a]]
        }
        var b = "BMap_",
            c = window.localStorage,
            d = "localStorage" in window && c !== p && c !== j;
        return {
            pY: d,
            set: function(a, f) {
                if (d) {
                    for (var g = b + a + "_", i = c.length, k; i--;)
                        k = c.key(i), -1 < k.indexOf(g) && c.removeItem(k);
                    try {
                        c.setItem(b + a + "_" + Sb[a], f)
                    } catch (l) {
                        c.clear()
                    }
                }
            },
            get: function(e) {
                return d && a(e) ? c.getItem(b + e + "_" + Sb[e]) : q
            },
            dK: a
        }
    }();

    function I() {}
    x.object.extend(I, {
        Fj: {
            nG: -1,
            GP: 0,
            Yp: 1
        },
        oL: function() {
            var a = "canvablepath",
                b = z.GU ? "newvectordrawlib" : "vectordrawlib";
            if (!G() || !Nb())
                Kb() || (Jb() ? a = "vmlcontext" : Nb());
            return {
                tile: [b, "style"],
                control: [],
                marker: ["symbol"],
                symbol: ["canvablepath", "common"],
                canvablepath: "canvablepath" === a ? [] : [a],
                vmlcontext: [],
                style: [],
                poly: ["marker", "drawbycanvas", "drawbysvg", "drawbyvml"],
                drawbysvg: ["draw"],
                drawbyvml: ["draw"],
                drawbycanvas: ["draw"],
                infowindow: ["common", "marker"],
                menu: [],
                oppc: [],
                opmb: [],
                scommon: [],
                local: ["scommon"],
                route: ["scommon"],
                othersearch: ["scommon"],
                autocomplete: ["scommon"],
                citylistcontrol: ["autocomplete"],
                mapclick: ["scommon"],
                buslinesearch: ["route"],
                hotspot: [],
                coordtransutils: ["coordtrans"],
                convertor: [],
                clayer: ["tile"],
                pservice: [],
                pcommon: ["style", "pservice"],
                panorama: ["pcommon"],
                panoramaflash: ["pcommon"]
            }
        },
        O3: {},
        gG: {
            XP: z.ma + "getmodules?v=2.0&t=20140707",
            xU: 5E3
        },
        BC: q,
        Pd: {
            rl: {},
            Cn: [],
            Qv: []
        },
        load: function(a, b, c) {
            var d = this.ib(a);
            if (d.Bd == this.Fj.Yp)
                c && b();
            else {
                if (d.Bd == this.Fj.nG) {
                    this.jK(a);
                    this.wN(a);
                    var e = this;
                    e.BC == q && (e.BC = o,
                        setTimeout(function() {
                            for (var a = [], b = 0, c = e.Pd.Cn.length; b < c; b++) {
                                var d = e.Pd.Cn[b],
                                    l = "";
                                ja.Iy.dK(d) ? l = ja.Iy.get(d) : (l = "",
                                    a.push(d + "_" + Sb[d]));
                                e.Pd.Qv.push({
                                    QM: d,
                                    IE: l
                                })
                            }
                            e.BC = q;
                            e.Pd.Cn.length = 0;
                            0 == a.length ? e.UK() : pa(e.gG.XP + "&mod=" + a.join(","))
                        }, 1));
                    d.Bd = this.Fj.GP
                }
                d.Ou.push(b)
            }
        },
        jK: function(a) {
            if (a && this.oL()[a])
                for (var a = this.oL()[a], b = 0; b < a.length; b++)
                    this.jK(a[b]),
                    this.Pd.rl[a[b]] || this.wN(a[b])
        },
        wN: function(a) {
            for (var b = 0; b < this.Pd.Cn.length; b++)
                if (this.Pd.Cn[b] == a)
                    return;
            this.Pd.Cn.push(a)
        },
        xZ: function(a, b) {
            var c = this.ib(a);
            try {
                eval(b)
            } catch (d) {
                return
            }
            c.Bd = this.Fj.Yp;
            for (var e = 0, f = c.Ou.length; e < f; e++)
                c.Ou[e]();
            c.Ou.length = 0
        },
        dK: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                c.Pd.rl[a].Bd != c.Fj.Yp ? (c.remove(a),
                    c.load(a, b)) : clearTimeout(c.timeout)
            }, c.gG.xU)
        },
        ib: function(a) {
            this.Pd.rl[a] || (this.Pd.rl[a] = {},
                this.Pd.rl[a].Bd = this.Fj.nG,
                this.Pd.rl[a].Ou = []);
            return this.Pd.rl[a]
        },
        remove: function(a) {
            delete this.ib(a)
        },
        sV: function(a, b) {
            for (var c = this.Pd.Qv, d = o, e = 0, f = c.length; e < f; e++)
                "" == c[e].IE && (c[e].QM == a ? c[e].IE = b : d = q);
            d && this.UK()
        },
        UK: function() {
            for (var a = this.Pd.Qv, b = 0, c = a.length; b < c; b++)
                this.xZ(a[b].QM, a[b].IE);
            this.Pd.Qv.length = 0
        }
    });

    function Q(a, b) {
        this.x = a || 0;
        this.y = b || 0;
        this.x = this.x;
        this.y = this.y
    }
    Q.prototype.nb = function(a) {
        return a && a.x == this.x && a.y == this.y
    };

    function N(a, b) {
        this.width = a || 0;
        this.height = b || 0
    }
    N.prototype.nb = function(a) {
        return a && this.width == a.width && this.height == a.height
    };

    function hb(a, b) {
        a && (this.Lb = a,
            this.ba = "spot" + hb.ba++,
            b = b || {},
            this.Tg = b.text || "",
            this.wv = b.offsets ? b.offsets.slice(0) : [5, 5, 5, 5],
            this.sJ = b.userData || p,
            this.Qh = b.minZoom || p,
            this.Ff = b.maxZoom || p)
    }
    hb.ba = 0;
    x.extend(hb.prototype, {
        ra: function(a) {
            this.Qh == p && (this.Qh = a.K.gc);
            this.Ff == p && (this.Ff = a.K.$b)
        },
        ta: function(a) {
            a instanceof H && (this.Lb = a)
        },
        ha: u("Lb"),
        Ut: ba("Tg"),
        UD: u("Tg"),
        setUserData: ba("sJ"),
        getUserData: u("sJ")
    });

    function Tb() {
        this.C = p;
        this.Mb = "control";
        this.Qa = this.XJ = o
    }
    x.lang.ua(Tb, x.lang.Ca, "Control");
    x.extend(Tb.prototype, {
        initialize: function(a) {
            this.C = a;
            if (this.B)
                return a.Va.appendChild(this.B),
                    this.B
        },
        Ee: function(a) {
            !this.B && (this.initialize && Ya(this.initialize)) && (this.B = this.initialize(a));
            this.k = this.k || {
                zg: q
            };
            this.vB();
            this.Ir();
            this.B && (this.B.hr = this)
        },
        vB: function() {
            var a = this.B;
            if (a) {
                var b = a.style;
                b.position = "absolute";
                b.zIndex = this.uz || "10";
                b.MozUserSelect = "none";
                b.WebkitTextSizeAdjust = "none";
                this.k.zg || x.D.Ua(a, "BMap_noprint");
                G() || x.M(a, "contextmenu", oa)
            }
        },
        remove: function() {
            this.C = p;
            this.B && (this.B.parentNode && this.B.parentNode.removeChild(this.B),
                this.B = this.B.hr = p)
        },
        Aa: function() {
            this.B = yb(this.C.Va, "<div unselectable='on'></div>");
            this.Qa == q && x.D.U(this.B);
            return this.B
        },
        Ir: function() {
            this.qc(this.k.anchor)
        },
        qc: function(a) {
            if (this.q1 || !Xa(a) || isNaN(a) || a < Ub || 3 < a)
                a = this.defaultAnchor;
            this.k = this.k || {
                zg: q
            };
            this.k.za = this.k.za || this.defaultOffset;
            var b = this.k.anchor;
            this.k.anchor = a;
            if (this.B) {
                var c = this.B,
                    d = this.k.za.width,
                    e = this.k.za.height;
                c.style.left = c.style.top = c.style.right = c.style.bottom = "auto";
                switch (a) {
                    case Ub:
                        c.style.top = e + "px";
                        c.style.left = d + "px";
                        break;
                    case Vb:
                        c.style.top = e + "px";
                        c.style.right = d + "px";
                        break;
                    case Wb:
                        c.style.bottom = e + "px";
                        c.style.left = d + "px";
                        break;
                    case 3:
                        c.style.bottom = e + "px",
                            c.style.right = d + "px"
                }
                c = ["TL", "TR", "BL", "BR"];
                x.D.Sb(this.B, "anchor" + c[b]);
                x.D.Ua(this.B, "anchor" + c[a])
            }
        },
        wD: function() {
            return this.k.anchor
        },
        getContainer: u("B"),
        Ve: function(a) {
            a instanceof N && (this.k = this.k || {
                    zg: q
                },
                this.k.za = new N(a.width, a.height),
                this.B && this.qc(this.k.anchor))
        },
        Qf: function() {
            return this.k.za
        },
        Id: u("B"),
        show: function() {
            this.Qa != o && (this.Qa = o,
                this.B && x.D.show(this.B))
        },
        U: function() {
            this.Qa != q && (this.Qa = q,
                this.B && x.D.U(this.B))
        },
        isPrintable: function() {
            return !!this.k.zg
        },
        kh: function() {
            return !this.B && !this.C ? q : !!this.Qa
        }
    });
    var Ub = 0,
        Vb = 1,
        Wb = 2;

    function ib(a) {
        Tb.call(this);
        a = a || {};
        this.k = {
            zg: q,
            zF: a.showZoomInfo || o,
            anchor: a.anchor,
            za: a.offset,
            type: a.type,
            tW: a.enableGeolocation || q
        };
        this.defaultAnchor = G() ? 3 : Ub;
        this.defaultOffset = new N(10, 10);
        this.qc(a.anchor);
        this.fn(a.type);
        this.Ae()
    }
    x.lang.ua(ib, Tb, "NavigationControl");
    x.extend(ib.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        fn: function(a) {
            this.k.type = Xa(a) && 0 <= a && 3 >= a ? a : 0
        },
        ep: function() {
            return this.k.type
        },
        Ae: function() {
            var a = this;
            I.load("navictrl", function() {
                a.xf()
            })
        }
    });

    function Xb(a) {
        Tb.call(this);
        a = a || {};
        this.k = {
            anchor: a.anchor || Wb,
            za: a.offset || new N(10, 30),
            h_: a.showAddressBar !== q,
            Y1: a.enableAutoLocation || q,
            EM: a.locationIcon || p
        };
        var b = this;
        this.uz = 1200;
        b.W_ = [];
        this.le = [];
        I.load("geoctrl", function() {
            (function d() {
                if (0 !== b.le.length) {
                    var a = b.le.shift();
                    b[a.method].apply(b, a.arguments);
                    d()
                }
            })();
            b.WP()
        });
        Ra(Ja)
    }
    x.lang.ua(Xb, Tb, "GeolocationControl");
    x.extend(Xb.prototype, {
        location: function() {
            this.le.push({
                method: "location",
                arguments: arguments
            })
        },
        getAddressComponent: ca(p)
    });

    function Yb(a) {
        Tb.call(this);
        a = a || {};
        this.k = {
            zg: q,
            anchor: a.anchor,
            za: a.offset
        };
        this.dc = [];
        this.defaultAnchor = Wb;
        this.defaultOffset = new N(5, 2);
        this.qc(a.anchor);
        this.XJ = q;
        this.Ae()
    }
    x.lang.ua(Yb, Tb, "CopyrightControl");
    x.object.extend(Yb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        nw: function(a) {
            if (a && Xa(a.id) && !isNaN(a.id)) {
                var b = {
                        bounds: p,
                        content: ""
                    },
                    c;
                for (c in a)
                    b[c] = a[c];
                if (a = this.nm(a.id))
                    for (var d in b)
                        a[d] = b[d];
                else
                    this.dc.push(b)
            }
        },
        nm: function(a) {
            for (var b = 0, c = this.dc.length; b < c; b++)
                if (this.dc[b].id == a)
                    return this.dc[b]
        },
        DD: u("dc"),
        $E: function(a) {
            for (var b = 0, c = this.dc.length; b < c; b++)
                this.dc[b].id == a && (r = this.dc.splice(b, 1),
                    b--,
                    c = this.dc.length)
        },
        Ae: function() {
            var a = this;
            I.load("copyrightctrl", function() {
                a.xf()
            })
        }
    });

    function kb(a) {
        Tb.call(this);
        a = a || {};
        this.k = {
            zg: q,
            size: a.size || new N(150, 150),
            padding: 5,
            Wa: a.isOpen === o ? o : q,
            k0: 4,
            za: a.offset,
            anchor: a.anchor
        };
        this.defaultAnchor = 3;
        this.defaultOffset = new N(0, 0);
        this.wq = this.xq = 13;
        this.qc(a.anchor);
        this.ye(this.k.size);
        this.Ae()
    }
    x.lang.ua(kb, Tb, "OverviewMapControl");
    x.extend(kb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        qc: function(a) {
            Tb.prototype.qc.call(this, a)
        },
        ne: function() {
            this.ne.ho = o;
            this.k.Wa = !this.k.Wa;
            this.B || (this.ne.ho = q)
        },
        ye: function(a) {
            a instanceof N || (a = new N(150, 150));
            a.width = 0 < a.width ? a.width : 150;
            a.height = 0 < a.height ? a.height : 150;
            this.k.size = a
        },
        Bb: function() {
            return this.k.size
        },
        Wa: function() {
            return this.k.Wa
        },
        Ae: function() {
            var a = this;
            I.load("control", function() {
                a.xf()
            })
        }
    });

    function Zb(a) {
        Tb.call(this);
        a = a || {};
        this.defaultAnchor = Ub;
        this.pV = a.canCheckSize === q ? q : o;
        this.ej = "";
        this.defaultOffset = new N(10, 10);
        this.onChangeBefore = [];
        this.onChangeAfter = [];
        this.onChangeSuccess = [];
        this.k = {
            zg: q,
            za: a.offset || this.defaultOffset,
            anchor: a.anchor || this.defaultAnchor,
            expand: !!a.expand
        };
        a.onChangeBefore && Ya(a.onChangeBefore) && this.onChangeBefore.push(a.onChangeBefore);
        a.onChangeAfter && Ya(a.onChangeAfter) && this.onChangeAfter.push(a.onChangeAfter);
        a.onChangeSuccess && Ya(a.onChangeSuccess) && this.onChangeSuccess.push(a.onChangeSuccess);
        this.qc(a.anchor);
        this.Ae()
    }
    x.lang.ua(Zb, Tb, "CityListControl");
    x.object.extend(Zb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Ae: function() {
            var a = this;
            I.load("citylistcontrol", function() {
                a.xf()
            }, o)
        }
    });

    function jb(a) {
        Tb.call(this);
        a = a || {};
        this.k = {
            zg: q,
            color: "black",
            cd: "metric",
            za: a.offset
        };
        this.defaultAnchor = Wb;
        this.defaultOffset = new N(81, 18);
        this.qc(a.anchor);
        this.Zh = {
            metric: {
                name: "metric",
                lK: 1,
                XL: 1E3,
                CO: "\u7c73",
                DO: "\u516c\u91cc"
            },
            us: {
                name: "us",
                lK: 3.2808,
                XL: 5280,
                CO: "\u82f1\u5c3a",
                DO: "\u82f1\u91cc"
            }
        };
        this.Zh[this.k.cd] || (this.k.cd = "metric");
        this.RI = p;
        this.qI = {};
        this.Ae()
    }
    x.lang.ua(jb, Tb, "ScaleControl");
    x.object.extend(jb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Jk: function(a) {
            this.k.color = a + ""
        },
        p2: function() {
            return this.k.color
        },
        wF: function(a) {
            this.k.cd = this.Zh[a] && this.Zh[a].name || this.k.cd
        },
        MX: function() {
            return this.k.cd
        },
        Ae: function() {
            var a = this;
            I.load("control", function() {
                a.xf()
            })
        }
    });
    var $b = 0;

    function lb(a) {
        Tb.call(this);
        a = a || {};
        this.defaultAnchor = Vb;
        this.defaultOffset = new N(10, 10);
        this.k = {
            zg: q,
            nh: [Ma, Za, Sa, Pa],
            XV: ["B_DIMENSIONAL_MAP", "B_SATELLITE_MAP", "B_NORMAL_MAP"],
            type: a.type || $b,
            za: a.offset || this.defaultOffset,
            xW: o
        };
        this.qc(a.anchor);
        "[object Array]" == Object.prototype.toString.call(a.mapTypes) && (this.k.nh = a.mapTypes.slice(0));
        this.Ae()
    }
    x.lang.ua(lb, Tb, "MapTypeControl");
    x.object.extend(lb.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Jy: function(a) {
            this.C.Wn = a
        },
        Ae: function() {
            var a = this;
            I.load("control", function() {
                a.xf()
            }, o)
        }
    });

    function ac(a) {
        Tb.call(this);
        a = a || {};
        this.k = {
            zg: q,
            za: a.offset,
            anchor: a.anchor
        };
        this.Qi = q;
        this.Uv = p;
        this.zI = new bc({
            Pf: "api"
        });
        this.AI = new cc(p, {
            Pf: "api"
        });
        this.defaultAnchor = Vb;
        this.defaultOffset = new N(10, 10);
        this.qc(a.anchor);
        this.Ae();
        Ra(va)
    }
    x.lang.ua(ac, Tb, "PanoramaControl");
    x.extend(ac.prototype, {
        initialize: function(a) {
            this.C = a;
            return this.B
        },
        Ae: function() {
            var a = this;
            I.load("control", function() {
                a.xf()
            })
        }
    });

    function dc(a) {
        x.lang.Ca.call(this);
        this.k = {
            Va: p,
            cursor: "default"
        };
        this.k = x.extend(this.k, a);
        this.Mb = "contextmenu";
        this.C = p;
        this.ya = [];
        this.If = [];
        this.Ce = [];
        this.Pw = this.hs = p;
        this.Ph = q;
        var b = this;
        I.load("menu", function() {
            b.yb()
        })
    }
    x.lang.ua(dc, x.lang.Ca, "ContextMenu");
    x.object.extend(dc.prototype, {
        ra: function(a, b) {
            this.C = a;
            this.wl = b || p
        },
        remove: function() {
            this.C = this.wl = p
        },
        qw: function(a) {
            if (a && !("menuitem" != a.Mb || "" == a.Tg || 0 >= a.Zi)) {
                for (var b = 0, c = this.ya.length; b < c; b++)
                    if (this.ya[b] === a)
                        return;
                this.ya.push(a);
                this.If.push(a)
            }
        },
        removeItem: function(a) {
            if (a && "menuitem" == a.Mb) {
                for (var b = 0, c = this.ya.length; b < c; b++)
                    this.ya[b] === a && (this.ya[b].remove(),
                        this.ya.splice(b, 1),
                        c--);
                b = 0;
                for (c = this.If.length; b < c; b++)
                    this.If[b] === a && (this.If[b].remove(),
                        this.If.splice(b, 1),
                        c--)
            }
        },
        PB: function() {
            this.ya.push({
                Mb: "divider",
                Nj: this.Ce.length
            });
            this.Ce.push({
                D: p
            })
        },
        bF: function(a) {
            if (this.Ce[a]) {
                for (var b = 0, c = this.ya.length; b < c; b++)
                    this.ya[b] && ("divider" == this.ya[b].Mb && this.ya[b].Nj == a) && (this.ya.splice(b, 1),
                        c--),
                    this.ya[b] && ("divider" == this.ya[b].Mb && this.ya[b].Nj > a) && this.ya[b].Nj--;
                this.Ce.splice(a, 1)
            }
        },
        Id: u("B"),
        show: function() {
            this.Ph != o && (this.Ph = o)
        },
        U: function() {
            this.Ph != q && (this.Ph = q)
        },
        NZ: function(a) {
            a && (this.k.cursor = a)
        },
        getItem: function(a) {
            return this.If[a]
        }
    });
    var ec = E.qa + "menu_zoom_in.png",
        fc = E.qa + "menu_zoom_out.png";

    function gc(a, b, c) {
        if (a && Ya(b)) {
            x.lang.Ca.call(this);
            this.k = {
                width: 100,
                id: "",
                Bm: ""
            };
            c = c || {};
            this.k.width = 1 * c.width ? c.width : 100;
            this.k.id = c.id ? c.id : "";
            this.k.Bm = c.iconUrl ? c.iconUrl : "";
            this.Tg = a + "";
            this.xz = b;
            this.C = p;
            this.Mb = "menuitem";
            this.Pr = this.lv = this.B = this.Hh = p;
            this.Lh = o;
            var d = this;
            I.load("menu", function() {
                d.yb()
            })
        }
    }
    x.lang.ua(gc, x.lang.Ca, "MenuItem");
    x.object.extend(gc.prototype, {
        ra: function(a, b) {
            this.C = a;
            this.Hh = b
        },
        remove: function() {
            this.C = this.Hh = p
        },
        Ut: function(a) {
            a && (this.Tg = a + "")
        },
        Ub: function(a) {
            a && (this.k.Bm = a)
        },
        Id: u("B"),
        enable: function() {
            this.Lh = o
        },
        disable: function() {
            this.Lh = q
        }
    });

    function eb(a, b) {
        a && !b && (b = a);
        this.Ge = this.Fe = this.Le = this.Ke = this.Ll = this.ul = p;
        a && (this.Ll = new H(a.lng, a.lat),
            this.ul = new H(b.lng, b.lat),
            this.Le = a.lng,
            this.Ke = a.lat,
            this.Ge = b.lng,
            this.Fe = b.lat)
    }
    x.object.extend(eb.prototype, {
        xj: function() {
            return !this.Ll || !this.ul
        },
        nb: function(a) {
            return !(a instanceof eb) || this.xj() ? q : this.se().nb(a.se()) && this.of().nb(a.of())
        },
        se: u("Ll"),
        of: u("ul"),
        GV: function(a) {
            return !(a instanceof eb) || this.xj() || a.xj() ? q : a.Le > this.Le && a.Ge < this.Ge && a.Ke > this.Ke && a.Fe < this.Fe
        },
        Ka: function() {
            return this.xj() ? p : new H((this.Le + this.Ge) / 2, (this.Ke + this.Fe) / 2)
        },
        gt: function(a) {
            if (!(a instanceof eb) || Math.max(a.Le, a.Ge) < Math.min(this.Le, this.Ge) || Math.min(a.Le, a.Ge) > Math.max(this.Le, this.Ge) || Math.max(a.Ke, a.Fe) < Math.min(this.Ke, this.Fe) || Math.min(a.Ke, a.Fe) > Math.max(this.Ke, this.Fe))
                return p;
            var b = Math.max(this.Le, a.Le),
                c = Math.min(this.Ge, a.Ge),
                d = Math.max(this.Ke, a.Ke),
                a = Math.min(this.Fe, a.Fe);
            return new eb(new H(b, d), new H(c, a))
        },
        cs: function(a) {
            return !(a instanceof H) || this.xj() ? q : a.lng >= this.Le && a.lng <= this.Ge && a.lat >= this.Ke && a.lat <= this.Fe
        },
        extend: function(a) {
            if (a instanceof H) {
                var b = a.lng,
                    a = a.lat;
                this.Ll || (this.Ll = new H(0, 0));
                this.ul || (this.ul = new H(0, 0));
                if (!this.Le || this.Le > b)
                    this.Ll.lng = this.Le = b;
                if (!this.Ge || this.Ge < b)
                    this.ul.lng = this.Ge = b;
                if (!this.Ke || this.Ke > a)
                    this.Ll.lat = this.Ke = a;
                if (!this.Fe || this.Fe < a)
                    this.ul.lat = this.Fe = a
            }
        },
        JF: function() {
            return this.xj() ? new H(0, 0) : new H(Math.abs(this.Ge - this.Le), Math.abs(this.Fe - this.Ke))
        }
    });

    function H(a, b) {
        isNaN(a) && (a = Ib(a),
            a = isNaN(a) ? 0 : a);
        $a(a) && (a = parseFloat(a));
        isNaN(b) && (b = Ib(b),
            b = isNaN(b) ? 0 : b);
        $a(b) && (b = parseFloat(b));
        this.lng = a;
        this.lat = b
    }
    H.cM = function(a) {
        return a && 180 >= a.lng && -180 <= a.lng && 74 >= a.lat && -74 <= a.lat
    };
    H.prototype.nb = function(a) {
        return a && this.lat == a.lat && this.lng == a.lng
    };

    function hc() {}
    hc.prototype.lh = function() {
        aa("lngLatToPoint\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };
    hc.prototype.zj = function() {
        aa("pointToLngLat\u65b9\u6cd5\u672a\u5b9e\u73b0")
    };

    function ic() {};
    var db = {
        nK: function(a, b, c) {
            I.load("coordtransutils", function() {
                db.ZU(a, b, c)
            }, o)
        },
        mK: function(a, b, c) {
            I.load("coordtransutils", function() {
                db.YU(a, b, c)
            }, o)
        }
    };

    function jc() {
        this.Pa = [];
        var a = this;
        I.load("convertor", function() {
            a.UP()
        })
    }
    x.ua(jc, x.lang.Ca, "Convertor");
    x.extend(jc.prototype, {
        translate: function(a, b, c, d) {
            this.Pa.push({
                method: "translate",
                arguments: [a, b, c, d]
            })
        }
    });
    S(jc.prototype, {
        translate: jc.prototype.translate
    });

    function R() {}
    R.prototype = new hc;
    x.extend(R, {
        jP: 6370996.81,
        rG: [1.289059486E7, 8362377.87, 5591021, 3481989.83, 1678043.12, 0],
        Bu: [75, 60, 45, 30, 15, 0],
        pP: [
            [1.410526172116255E-8, 8.98305509648872E-6, -1.9939833816331, 200.9824383106796, -187.2403703815547, 91.6087516669843, -23.38765649603339, 2.57121317296198, -0.03801003308653, 1.73379812E7],
            [-7.435856389565537E-9, 8.983055097726239E-6, -0.78625201886289, 96.32687599759846, -1.85204757529826, -59.36935905485877, 47.40033549296737, -16.50741931063887, 2.28786674699375, 1.026014486E7],
            [-3.030883460898826E-8, 8.98305509983578E-6, 0.30071316287616, 59.74293618442277, 7.357984074871, -25.38371002664745, 13.45380521110908, -3.29883767235584, 0.32710905363475, 6856817.37],
            [-1.981981304930552E-8, 8.983055099779535E-6, 0.03278182852591, 40.31678527705744, 0.65659298677277, -4.44255534477492, 0.85341911805263, 0.12923347998204, -0.04625736007561, 4482777.06],
            [3.09191371068437E-9, 8.983055096812155E-6, 6.995724062E-5, 23.10934304144901, -2.3663490511E-4, -0.6321817810242, -0.00663494467273, 0.03430082397953, -0.00466043876332, 2555164.4],
            [2.890871144776878E-9, 8.983055095805407E-6, -3.068298E-8, 7.47137025468032, -3.53937994E-6, -0.02145144861037, -1.234426596E-5, 1.0322952773E-4, -3.23890364E-6, 826088.5]
        ],
        oG: [
            [-0.0015702102444, 111320.7020616939, 1704480524535203, -10338987376042340, 26112667856603880, -35149669176653700, 26595700718403920, -10725012454188240, 1800819912950474, 82.5],
            [8.277824516172526E-4, 111320.7020463578, 6.477955746671607E8, -4.082003173641316E9, 1.077490566351142E10, -1.517187553151559E10, 1.205306533862167E10, -5.124939663577472E9, 9.133119359512032E8, 67.5],
            [0.00337398766765, 111320.7020202162, 4481351.045890365, -2.339375119931662E7, 7.968221547186455E7, -1.159649932797253E8, 9.723671115602145E7, -4.366194633752821E7, 8477230.501135234, 52.5],
            [0.00220636496208, 111320.7020209128, 51751.86112841131, 3796837.749470245, 992013.7397791013, -1221952.21711287, 1340652.697009075, -620943.6990984312, 144416.9293806241, 37.5],
            [-3.441963504368392E-4, 111320.7020576856, 278.2353980772752, 2485758.690035394, 6070.750963243378, 54821.18345352118, 9540.606633304236, -2710.55326746645, 1405.483844121726, 22.5],
            [-3.218135878613132E-4, 111320.7020701615, 0.00369383431289, 823725.6402795718, 0.46104986909093, 2351.343141331292, 1.58060784298199, 8.77738589078284, 0.37238884252424, 7.45]
        ],
        u2: function(a, b) {
            if (!a || !b)
                return 0;
            var c, d, a = this.Ab(a);
            if (!a)
                return 0;
            c = this.Sk(a.lng);
            d = this.Sk(a.lat);
            b = this.Ab(b);
            return !b ? 0 : this.Re(c, this.Sk(b.lng), d, this.Sk(b.lat))
        },
        To: function(a, b) {
            if (!a || !b)
                return 0;
            a.lng = this.MD(a.lng, -180, 180);
            a.lat = this.QD(a.lat, -74, 74);
            b.lng = this.MD(b.lng, -180, 180);
            b.lat = this.QD(b.lat, -74, 74);
            return this.Re(this.Sk(a.lng), this.Sk(b.lng), this.Sk(a.lat), this.Sk(b.lat))
        },
        Ab: function(a) {
            if (a === p || a === j)
                return new H(0, 0);
            var b, c;
            b = new H(Math.abs(a.lng), Math.abs(a.lat));
            for (var d = 0; d < this.rG.length; d++)
                if (b.lat >= this.rG[d]) {
                    c = this.pP[d];
                    break
                }
            a = this.oK(a, c);
            return a = new H(a.lng.toFixed(6), a.lat.toFixed(6))
        },
        zb: function(a) {
            if (a === p || a === j || 180 < a.lng || -180 > a.lng || 90 < a.lat || -90 > a.lat)
                return new H(0, 0);
            var b, c;
            a.lng = this.MD(a.lng, -180, 180);
            a.lat = this.QD(a.lat, -74, 74);
            b = new H(a.lng, a.lat);
            for (var d = 0; d < this.Bu.length; d++)
                if (b.lat >= this.Bu[d]) {
                    c = this.oG[d];
                    break
                }
            if (!c)
                for (d = 0; d < this.Bu.length; d++)
                    if (b.lat <= -this.Bu[d]) {
                        c = this.oG[d];
                        break
                    }
            a = this.oK(a, c);
            return a = new H(a.lng.toFixed(2), a.lat.toFixed(2))
        },
        oK: function(a, b) {
            if (a && b) {
                var c = b[0] + b[1] * Math.abs(a.lng),
                    d = Math.abs(a.lat) / b[9],
                    d = b[2] + b[3] * d + b[4] * d * d + b[5] * d * d * d + b[6] * d * d * d * d + b[7] * d * d * d * d * d + b[8] * d * d * d * d * d * d,
                    c = c * (0 > a.lng ? -1 : 1),
                    d = d * (0 > a.lat ? -1 : 1);
                return new H(c, d)
            }
        },
        Re: function(a, b, c, d) {
            return this.jP * Math.acos(Math.sin(c) * Math.sin(d) + Math.cos(c) * Math.cos(d) * Math.cos(b - a))
        },
        Sk: function(a) {
            return Math.PI * a / 180
        },
        t4: function(a) {
            return 180 * a / Math.PI
        },
        QD: function(a, b, c) {
            b != p && (a = Math.max(a, b));
            c != p && (a = Math.min(a, c));
            return a
        },
        MD: function(a, b, c) {
            for (; a > c;)
                a -= c - b;
            for (; a < b;)
                a += c - b;
            return a
        }
    });
    x.extend(R.prototype, {
        Im: function(a) {
            return R.zb(a)
        },
        lh: function(a) {
            a = R.zb(a);
            return new Q(a.lng, a.lat)
        },
        oh: function(a) {
            return R.Ab(a)
        },
        zj: function(a) {
            a = new H(a.x, a.y);
            return R.Ab(a)
        },
        bc: function(a, b, c, d, e) {
            if (a)
                return a = this.Im(a, e),
                    b = this.Bc(b),
                    new Q(Math.round((a.lng - c.lng) / b + d.width / 2), Math.round((c.lat - a.lat) / b + d.height / 2))
        },
        wb: function(a, b, c, d, e) {
            if (a)
                return b = this.Bc(b),
                    this.oh(new H(c.lng + b * (a.x - d.width / 2), c.lat - b * (a.y - d.height / 2)), e)
        },
        Bc: function(a) {
            return Math.pow(2, 18 - a)
        }
    });

    function gb() {
        this.ej = "bj"
    }
    gb.prototype = new R;
    x.extend(gb.prototype, {
        Im: function(a, b) {
            return this.EQ(b, R.zb(a))
        },
        oh: function(a, b) {
            return R.Ab(this.FQ(b, a))
        },
        lngLatToPointFor3D: function(a, b) {
            var c = this,
                d = R.zb(a);
            I.load("coordtrans", function() {
                var a = ic.OD(c.ej || "bj", d),
                    a = new Q(a.x, a.y);
                b && b(a)
            }, o)
        },
        pointToLngLatFor3D: function(a, b) {
            var c = this,
                d = new H(a.x, a.y);
            I.load("coordtrans", function() {
                var a = ic.ND(c.ej || "bj", d),
                    a = new H(a.lng, a.lat),
                    a = R.Ab(a);
                b && b(a)
            }, o)
        },
        EQ: function(a, b) {
            if (I.ib("coordtrans").Bd == I.Fj.Yp) {
                var c = ic.OD(a || "bj", b);
                return new H(c.x, c.y)
            }
            I.load("coordtrans", s());
            return new H(0, 0)
        },
        FQ: function(a, b) {
            if (I.ib("coordtrans").Bd == I.Fj.Yp) {
                var c = ic.ND(a || "bj", b);
                return new H(c.lng, c.lat)
            }
            I.load("coordtrans", s());
            return new H(0, 0)
        },
        Bc: function(a) {
            return Math.pow(2, 20 - a)
        }
    });

    function kc() {
        this.Mb = "overlay"
    }
    x.lang.ua(kc, x.lang.Ca, "Overlay");
    kc.xm = function(a) {
        a *= 1;
        return !a ? 0 : -1E5 * a << 1
    };
    x.extend(kc.prototype, {
        Ee: function(a) {
            if (!this.V && Ya(this.initialize) && (this.V = this.initialize(a)))
                this.V.style.WebkitUserSelect = "none";
            this.draw()
        },
        initialize: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        draw: function() {
            aa("draw\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            this.V && this.V.parentNode && this.V.parentNode.removeChild(this.V);
            this.V = p;
            this.dispatchEvent(new O("onremove"))
        },
        U: function() {
            this.V && x.D.U(this.V)
        },
        show: function() {
            this.V && x.D.show(this.V)
        },
        kh: function() {
            return !this.V || "none" == this.V.style.display || "hidden" == this.V.style.visibility ? q : o
        }
    });
    z.Ue(function(a) {
        function b(a, b) {
            var c = M("div"),
                g = c.style;
            g.position = "absolute";
            g.top = g.left = g.width = g.height = "0";
            g.zIndex = b;
            a.appendChild(c);
            return c
        }
        var c = a.R;
        c.od = a.od = b(a.platform, 200);
        a.Vd.qD = b(c.od, 800);
        a.Vd.EE = b(c.od, 700);
        a.Vd.bL = b(c.od, 600);
        a.Vd.wE = b(c.od, 500);
        a.Vd.IM = b(c.od, 400);
        a.Vd.JM = b(c.od, 300);
        a.Vd.PO = b(c.od, 201);
        a.Vd.vt = b(c.od, 200)
    });

    function fb() {
        x.lang.Ca.call(this);
        kc.call(this);
        this.map = p;
        this.Qa = o;
        this.Cb = p;
        this.eH = 0
    }
    x.lang.ua(fb, kc, "OverlayInternal");
    x.extend(fb.prototype, {
        initialize: function(a) {
            this.map = a;
            x.lang.Ca.call(this, this.ba);
            return p
        },
        nx: u("map"),
        draw: s(),
        Hj: s(),
        remove: function() {
            this.map = p;
            x.lang.Rw(this.ba);
            kc.prototype.remove.call(this)
        },
        U: function() {
            this.Qa !== q && (this.Qa = q)
        },
        show: function() {
            this.Qa !== o && (this.Qa = o)
        },
        kh: function() {
            return !this.V ? q : !!this.Qa
        },
        Na: u("V"),
        ON: function(a) {
            var a = a || {},
                b;
            for (b in a)
                this.z[b] = a[b]
        },
        Vt: ba("zIndex"),
        mj: function() {
            this.z.mj = o
        },
        gW: function() {
            this.z.mj = q
        },
        so: ba("hg"),
        zp: function() {
            this.hg = p
        }
    });

    function nc() {
        this.map = p;
        this.wa = {};
        this.Be = []
    }
    z.Ue(function(a) {
        var b = new nc;
        b.map = a;
        a.wa = b.wa;
        a.Be = b.Be;
        a.addEventListener("load", function(a) {
            b.draw(a)
        });
        a.addEventListener("moveend", function(a) {
            b.draw(a)
        });
        x.da.la && 8 > x.da.la || "BackCompat" === document.compatMode ? a.addEventListener("zoomend", function(a) {
            setTimeout(function() {
                b.draw(a)
            }, 20)
        }) : a.addEventListener("zoomend", function(a) {
            b.draw(a)
        });
        a.addEventListener("maptypechange", function(a) {
            b.draw(a)
        });
        a.addEventListener("addoverlay", function(a) {
            a = a.target;
            if (a instanceof fb)
                b.wa[a.ba] || (b.wa[a.ba] = a);
            else {
                for (var d = q, e = 0, f = b.Be.length; e < f; e++)
                    if (b.Be[e] === a) {
                        d = o;
                        break
                    }
                d || b.Be.push(a)
            }
        });
        a.addEventListener("removeoverlay", function(a) {
            a = a.target;
            if (a instanceof fb)
                delete b.wa[a.ba];
            else
                for (var d = 0, e = b.Be.length; d < e; d++)
                    if (b.Be[d] === a) {
                        b.Be.splice(d, 1);
                        break
                    }
        });
        a.addEventListener("clearoverlays", function() {
            this.Wc();
            for (var a in b.wa)
                b.wa[a].z.mj && (b.wa[a].remove(),
                    delete b.wa[a]);
            a = 0;
            for (var d = b.Be.length; a < d; a++)
                b.Be[a].enableMassClear !== q && (b.Be[a].remove(),
                    b.Be[a] = p,
                    b.Be.splice(a, 1),
                    a--,
                    d--)
        });
        a.addEventListener("infowindowopen", function() {
            var a = this.Cb;
            a && (x.D.U(a.xc),
                x.D.U(a.cc))
        });
        a.addEventListener("movestart", function() {
            this.hh() && this.hh().XI()
        });
        a.addEventListener("moveend", function() {
            this.hh() && this.hh().MI()
        })
    });
    nc.prototype.draw = function(a) {
        if (z.bq) {
            var b = z.bq.Ps(this.map);
            "canvas" === b.Mb && b.canvas && b.zQ(b.canvas.getContext("2d"))
        }
        for (var c in this.wa)
            this.wa[c].draw(a);
        x.kc.Gb(this.Be, function(a) {
            a.draw()
        });
        this.map.R.ob && this.map.R.ob.ta();
        z.bq && b.tF()
    };

    function oc(a) {
        fb.call(this);
        a = a || {};
        this.z = {
            strokeColor: a.strokeColor || "#3a6bdb",
            nc: a.strokeWeight || 5,
            rd: a.strokeOpacity || 0.65,
            strokeStyle: a.strokeStyle || "solid",
            mj: a.enableMassClear === q ? q : o,
            vk: p,
            rm: p,
            lf: a.enableEditing === o ? o : q,
            RM: 5,
            V_: q,
            hf: a.enableClicking === q ? q : o,
            ni: a.icons && 0 < a.icons.length ? a.icons : p
        };
        0 >= this.z.nc && (this.z.nc = 5);
        if (0 > this.z.rd || 1 < this.z.rd)
            this.z.rd = 0.65;
        if (0 > this.z.qg || 1 < this.z.qg)
            this.z.qg = 0.65;
        "solid" != this.z.strokeStyle && "dashed" != this.z.strokeStyle && (this.z.strokeStyle = "solid");
        this.V = p;
        this.Lu = new eb(0, 0);
        this.ef = [];
        this.oc = [];
        this.Ra = {}
    }
    x.lang.ua(oc, fb, "Graph");
    oc.ix = function(a) {
        var b = [];
        if (!a)
            return b;
        $a(a) && x.kc.Gb(a.split(";"), function(a) {
            a = a.split(",");
            b.push(new H(a[0], a[1]))
        });
        "[object Array]" == Object.prototype.toString.apply(a) && 0 < a.length && (b = a);
        return b
    };
    oc.OE = [0.09, 0.0050, 1.0E-4, 1.0E-5];
    x.extend(oc.prototype, {
        initialize: function(a) {
            this.map = a;
            return p
        },
        draw: s(),
        Hr: function(a) {
            this.ef.length = 0;
            this.ia = oc.ix(a).slice(0);
            this.Eh()
        },
        he: function(a) {
            this.Hr(a)
        },
        Eh: function() {
            if (this.ia) {
                var a = this;
                a.Lu = new eb;
                x.kc.Gb(this.ia, function(b) {
                    a.Lu.extend(b)
                })
            }
        },
        qe: u("ia"),
        dn: function(a, b) {
            b && this.ia[a] && (this.ef.length = 0,
                this.ia[a] = new H(b.lng, b.lat),
                this.Eh())
        },
        setStrokeColor: function(a) {
            this.z.strokeColor = a
        },
        DX: function() {
            return this.z.strokeColor
        },
        Op: function(a) {
            0 < a && (this.z.nc = a)
        },
        CL: function() {
            return this.z.nc
        },
        Mp: function(a) {
            a == j || (1 < a || 0 > a) || (this.z.rd = a)
        },
        EX: function() {
            return this.z.rd
        },
        Ot: function(a) {
            1 < a || 0 > a || (this.z.qg = a)
        },
        aX: function() {
            return this.z.qg
        },
        Np: function(a) {
            "solid" != a && "dashed" != a || (this.z.strokeStyle = a)
        },
        BL: function() {
            return this.z.strokeStyle
        },
        setFillColor: function(a) {
            this.z.fillColor = a || ""
        },
        $W: function() {
            return this.z.fillColor
        },
        Hd: u("Lu"),
        remove: function() {
            this.map && this.map.removeEventListener("onmousemove", this.iv);
            fb.prototype.remove.call(this);
            this.ef.length = 0
        },
        lf: function() {
            if (!(2 > this.ia.length)) {
                this.z.lf = o;
                var a = this;
                I.load("poly", function() {
                    a.Rl()
                }, o)
            }
        },
        fW: function() {
            this.z.lf = q;
            var a = this;
            I.load("poly", function() {
                a.mk()
            }, o)
        },
        XW: function() {
            return this.z.lf
        }
    });

    function pc(a) {
        fb.call(this);
        this.V = this.map = p;
        this.z = {
            width: 0,
            height: 0,
            za: new N(0, 0),
            opacity: 1,
            background: "transparent",
            Qx: 1,
            vM: "#000",
            yY: "solid",
            point: p
        };
        this.ON(a);
        this.point = this.z.point
    }
    x.lang.ua(pc, fb, "Division");
    x.extend(pc.prototype, {
        Hj: function() {
            var a = this.z,
                b = this.content,
                c = ['<div class="BMap_Division" style="position:absolute;'];
            c.push("width:" + a.width + "px;display:block;");
            c.push("overflow:hidden;");
            "none" != a.borderColor && c.push("border:" + a.Qx + "px " + a.yY + " " + a.vM + ";");
            c.push("opacity:" + a.opacity + "; filter:(opacity=" + 100 * a.opacity + ")");
            c.push("background:" + a.background + ";");
            c.push('z-index:60;">');
            c.push(b);
            c.push("</div>");
            this.V = yb(this.map.Rf().EE, c.join(""))
        },
        initialize: function(a) {
            this.map = a;
            this.Hj();
            this.V && x.M(this.V, G() ? "touchstart" : "mousedown", function(a) {
                na(a)
            });
            return this.V
        },
        draw: function() {
            var a = this.map.Te(this.z.point);
            this.z.za = new N(-Math.round(this.z.width / 2) - Math.round(this.z.Qx), -Math.round(this.z.height / 2) - Math.round(this.z.Qx));
            this.V.style.left = a.x + this.z.za.width + "px";
            this.V.style.top = a.y + this.z.za.height + "px"
        },
        ha: function() {
            return this.z.point
        },
        U0: function() {
            return this.map.bc(this.ha())
        },
        ta: function(a) {
            this.z.point = a;
            this.draw()
        },
        OZ: function(a, b) {
            this.z.width = Math.round(a);
            this.z.height = Math.round(b);
            this.V && (this.V.style.width = this.z.width + "px",
                this.V.style.height = this.z.height + "px",
                this.draw())
        }
    });

    function qc(a, b, c) {
        a && b && (this.imageUrl = a,
            this.size = b,
            a = new N(Math.floor(b.width / 2), Math.floor(b.height / 2)),
            c = c || {},
            a = c.anchor || a,
            b = c.imageOffset || new N(0, 0),
            this.imageSize = c.imageSize,
            this.anchor = a,
            this.imageOffset = b,
            this.infoWindowAnchor = c.infoWindowAnchor || this.anchor,
            this.printImageUrl = c.printImageUrl || "")
    }
    x.extend(qc.prototype, {
        PN: function(a) {
            a && (this.imageUrl = a)
        },
        d_: function(a) {
            a && (this.printImageUrl = a)
        },
        ye: function(a) {
            a && (this.size = new N(a.width, a.height))
        },
        qc: function(a) {
            a && (this.anchor = new N(a.width, a.height))
        },
        Pt: function(a) {
            a && (this.imageOffset = new N(a.width, a.height))
        },
        UZ: function(a) {
            a && (this.infoWindowAnchor = new N(a.width, a.height))
        },
        RZ: function(a) {
            a && (this.imageSize = new N(a.width, a.height))
        },
        toString: ca("Icon")
    });

    function rc(a, b) {
        if (a) {
            b = b || {};
            this.style = {
                anchor: b.anchor || new N(0, 0),
                fillColor: b.fillColor || "#000",
                qg: b.fillOpacity || 0,
                scale: b.scale || 1,
                rotation: b.rotation || 0,
                strokeColor: b.strokeColor || "#000",
                rd: b.strokeOpacity || 1,
                nc: b.strokeWeight
            };
            this.Mb = "number" === typeof a ? a : "UserDefined";
            this.Hi = this.style.anchor;
            this.nr = new N(0, 0);
            this.anchor = p;
            this.iB = a;
            var c = this;
            I.load("symbol", function() {
                c.Hn()
            }, o)
        }
    }
    x.extend(rc.prototype, {
        setPath: ba("iB"),
        setAnchor: function(a) {
            this.Hi = this.style.anchor = a
        },
        setRotation: function(a) {
            this.style.rotation = a
        },
        setScale: function(a) {
            this.style.scale = a
        },
        setStrokeWeight: function(a) {
            this.style.nc = a
        },
        setStrokeColor: function(a) {
            a = x.bs.pC(a, this.style.rd);
            this.style.strokeColor = a
        },
        setStrokeOpacity: function(a) {
            this.style.rd = a
        },
        setFillOpacity: function(a) {
            this.style.qg = a
        },
        setFillColor: function(a) {
            this.style.fillColor = a
        }
    });

    function sc(a, b, c, d) {
        a && (this.Bv = {},
            this.$K = d ? !!d : q,
            this.Uc = [],
            this.v_ = a instanceof rc ? a : p,
            this.FI = b === j ? o : !!(b.indexOf("%") + 1),
            this.Zj = isNaN(parseFloat(b)) ? 1 : this.FI ? parseFloat(b) / 100 : parseFloat(b),
            this.GI = !!(c.indexOf("%") + 1),
            this.repeat = c != j ? this.GI ? parseFloat(c) / 100 : parseFloat(c) : 0)
    };

    function tc(a, b) {
        x.lang.Ca.call(this);
        this.content = a;
        this.map = p;
        b = b || {};
        this.z = {
            width: b.width || 0,
            height: b.height || 0,
            maxWidth: b.maxWidth || 730,
            za: b.offset || new N(0, 0),
            title: b.title || "",
            FE: b.maxContent || "",
            ah: b.enableMaximize || q,
            Es: b.enableAutoPan === q ? q : o,
            cD: b.enableCloseOnClick === q ? q : o,
            margin: b.margin || [10, 10, 40, 10],
            kC: b.collisions || [
                [10, 10],
                [10, 10],
                [10, 10],
                [10, 10]
            ],
            YX: q,
            TY: b.onClosing || ca(o),
            RK: q,
            hD: b.enableParano === o ? o : q,
            message: b.message,
            jD: b.enableSearchTool === o ? o : q,
            Bx: b.headerContent || "",
            dD: b.enableContentScroll || q
        };
        if (0 != this.z.width && (220 > this.z.width && (this.z.width = 220),
                730 < this.z.width))
            this.z.width = 730;
        if (0 != this.z.height && (60 > this.z.height && (this.z.height = 60),
                650 < this.z.height))
            this.z.height = 650;
        if (0 != this.z.maxWidth && (220 > this.z.maxWidth && (this.z.maxWidth = 220),
                730 < this.z.maxWidth))
            this.z.maxWidth = 730;
        this.be = q;
        this.Di = E.qa;
        this.ab = p;
        var c = this;
        I.load("infowindow", function() {
            c.yb()
        })
    }
    x.lang.ua(tc, x.lang.Ca, "InfoWindow");
    x.extend(tc.prototype, {
        setWidth: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
                    730 < a && (a = 730)),
                this.z.width = a)
        },
        setHeight: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (60 > a && (a = 60),
                    650 < a && (a = 650)),
                this.z.height = a)
        },
        SN: function(a) {
            !a && 0 != a || (isNaN(a) || 0 > a) || (0 != a && (220 > a && (a = 220),
                    730 < a && (a = 730)),
                this.z.maxWidth = a)
        },
        Cc: function(a) {
            this.z.title = a
        },
        getTitle: function() {
            return this.z.title
        },
        ad: ba("content"),
        tk: u("content"),
        Rt: function(a) {
            this.z.FE = a + ""
        },
        ge: s(),
        Es: function() {
            this.z.Es = o
        },
        disableAutoPan: function() {
            this.z.Es = q
        },
        enableCloseOnClick: function() {
            this.z.cD = o
        },
        disableCloseOnClick: function() {
            this.z.cD = q
        },
        ah: function() {
            this.z.ah = o
        },
        Uw: function() {
            this.z.ah = q
        },
        show: function() {
            this.Qa = o
        },
        U: function() {
            this.Qa = q
        },
        close: function() {
            this.U()
        },
        Ux: function() {
            this.be = o
        },
        restore: function() {
            this.be = q
        },
        kh: function() {
            return this.Wa()
        },
        Wa: ca(q),
        ha: function() {
            if (this.ab && this.ab.ha)
                return this.ab.ha()
        },
        Qf: function() {
            return this.z.za
        }
    });
    La.prototype.Nb = function(a, b) {
        if (a instanceof tc && b instanceof H) {
            var c = this.R;
            c.Km ? c.Km.ta(b) : (c.Km = new T(b, {
                    icon: new qc(E.qa + "blank.gif", {
                        width: 1,
                        height: 1
                    }),
                    offset: new N(0, 0),
                    clickable: q
                }),
                c.Km.CR = 1);
            this.Ja(c.Km);
            c.Km.Nb(a)
        }
    };
    La.prototype.Wc = function() {
        var a = this.R.ob || this.R.ll;
        a && a.ab && a.ab.Wc()
    };
    fb.prototype.Nb = function(a) {
        this.map && (this.map.Wc(),
            a.Qa = o,
            this.map.R.ll = a,
            a.ab = this,
            x.lang.Ca.call(a, a.ba))
    };
    fb.prototype.Wc = function() {
        this.map && this.map.R.ll && (this.map.R.ll.Qa = q,
            x.lang.Rw(this.map.R.ll.ba),
            this.map.R.ll = p)
    };

    function uc(a, b) {
        fb.call(this);
        this.content = a;
        this.V = this.map = p;
        b = b || {};
        this.z = {
            width: 0,
            za: b.offset || new N(0, 0),
            Rp: {
                backgroundColor: "#fff",
                border: "1px solid #f00",
                padding: "1px",
                whiteSpace: "nowrap",
                font: "12px " + E.fontFamily,
                zIndex: "80",
                MozUserSelect: "none"
            },
            position: b.position || p,
            mj: b.enableMassClear === q ? q : o,
            hf: o
        };
        0 > this.z.width && (this.z.width = 0);
        Eb(b.enableClicking) && (this.z.hf = b.enableClicking);
        this.point = this.z.position;
        var c = this;
        I.load("marker", function() {
            c.yb()
        })
    }
    x.lang.ua(uc, fb, "Label");
    x.extend(uc.prototype, {
        ha: function() {
            return this.qv ? this.qv.ha() : this.point
        },
        ta: function(a) {
            a instanceof H && !this.ox() && (this.point = this.z.position = new H(a.lng, a.lat))
        },
        ad: ba("content"),
        sF: function(a) {
            0 <= a && 1 >= a && (this.z.opacity = a)
        },
        Ve: function(a) {
            a instanceof N && (this.z.za = new N(a.width, a.height))
        },
        Qf: function() {
            return this.z.za
        },
        Ld: function(a) {
            a = a || {};
            this.z.Rp = x.extend(this.z.Rp, a)
        },
        xi: function(a) {
            return this.Ld(a)
        },
        Cc: function(a) {
            this.z.title = a || ""
        },
        getTitle: function() {
            return this.z.title
        },
        RN: function(a) {
            this.point = (this.qv = a) ? this.z.position = a.ha() : this.z.position = p
        },
        ox: function() {
            return this.qv || p
        },
        tk: u("content")
    });

    function vc(a, b) {
        if (0 !== arguments.length) {
            fb.apply(this, arguments);
            b = b || {};
            this.z = {
                hb: a,
                opacity: b.opacity || 1,
                Dm: b.Dm || "",
                ss: b.displayOnMinLevel || 1,
                mj: b.enableMassClear === q ? q : o,
                rs: b.displayOnMaxLevel || 19,
                p_: b.stretch || q
            };
            var c = this;
            I.load("groundoverlay", function() {
                c.yb()
            })
        }
    }
    x.lang.ua(vc, fb, "GroundOverlay");
    x.extend(vc.prototype, {
        setBounds: function(a) {
            this.z.hb = a
        },
        getBounds: function() {
            return this.z.hb
        },
        setOpacity: function(a) {
            this.z.opacity = a
        },
        getOpacity: function() {
            return this.z.opacity
        },
        setImageURL: function(a) {
            this.z.Dm = a
        },
        getImageURL: function() {
            return this.z.Dm
        },
        setDisplayOnMinLevel: function(a) {
            this.z.ss = a
        },
        getDisplayOnMinLevel: function() {
            return this.z.ss
        },
        setDisplayOnMaxLevel: function(a) {
            this.z.rs = a
        },
        getDisplayOnMaxLevel: function() {
            return this.z.rs
        }
    });
    var wc = 3,
        xc = 4;

    function yc() {
        var a = document.createElement("canvas");
        return !(!a.getContext || !a.getContext("2d"))
    }

    function zc(a, b) {
        var c = this;
        yc() && (a === j && aa(Error("\u6ca1\u6709\u4f20\u5165points\u6570\u636e")),
            "[object Array]" !== Object.prototype.toString.call(a) && aa(Error("points\u6570\u636e\u4e0d\u662f\u6570\u7ec4")),
            b = b || {},
            fb.apply(c, arguments),
            c.ea = {
                ia: a
            },
            c.z = {
                shape: b.shape || wc,
                size: b.size || xc,
                color: b.color || "#fa937e",
                mj: o
            },
            this.fB = [],
            this.le = [],
            I.load("pointcollection", function() {
                for (var a = 0, b; b = c.fB[a]; a++)
                    c[b.method].apply(c, b.arguments);
                for (a = 0; b = c.le[a]; a++)
                    c[b.method].apply(c, b.arguments)
            }))
    }
    x.lang.ua(zc, fb, "PointCollection");
    x.extend(zc.prototype, {
        initialize: function(a) {
            this.fB && this.fB.push({
                method: "initialize",
                arguments: arguments
            })
        },
        setPoints: function(a) {
            this.le && this.le.push({
                method: "setPoints",
                arguments: arguments
            })
        },
        setStyles: function(a) {
            this.le && this.le.push({
                method: "setStyles",
                arguments: arguments
            })
        },
        clear: function() {
            this.le && this.le.push({
                method: "clear",
                arguments: arguments
            })
        },
        remove: function() {
            this.le && this.le.push({
                method: "remove",
                arguments: arguments
            })
        }
    });
    var Ac = new qc(E.qa + "marker_red_sprite.png", new N(19, 25), {
            anchor: new N(10, 25),
            infoWindowAnchor: new N(10, 0)
        }),
        Bc = new qc(E.qa + "marker_red_sprite.png", new N(20, 11), {
            anchor: new N(6, 11),
            imageOffset: new N(-19, -13)
        });

    function T(a, b) {
        fb.call(this);
        b = b || {};
        this.point = a;
        this.rq = this.map = p;
        this.z = {
            za: b.offset || new N(0, 0),
            uj: b.icon || Ac,
            Mk: Bc,
            title: b.title || "",
            label: p,
            WJ: b.baseZIndex || 0,
            hf: o,
            N4: q,
            rE: q,
            mj: b.enableMassClear === q ? q : o,
            Yb: q,
            yN: b.raiseOnDrag === o ? o : q,
            FN: q,
            Fd: b.draggingCursor || E.Fd,
            rotation: b.rotation || 0
        };
        b.icon && !b.shadow && (this.z.Mk = p);
        b.enableDragging && (this.z.Yb = b.enableDragging);
        Eb(b.enableClicking) && (this.z.hf = b.enableClicking);
        var c = this;
        I.load("marker", function() {
            c.yb()
        })
    }
    T.Gu = kc.xm(-90) + 1E6;
    T.kG = T.Gu + 1E6;
    x.lang.ua(T, fb, "Marker");
    x.extend(T.prototype, {
        Ub: function(a) {
            if (a instanceof qc || a instanceof rc)
                this.z.uj = a
        },
        Uo: function() {
            return this.z.uj
        },
        zy: function(a) {
            a instanceof qc && (this.z.Mk = a)
        },
        getShadow: function() {
            return this.z.Mk
        },
        an: function(a) {
            this.z.label = a || p
        },
        KD: function() {
            return this.z.label
        },
        Yb: function() {
            this.z.Yb = o
        },
        IC: function() {
            this.z.Yb = q
        },
        ha: u("point"),
        ta: function(a) {
            a instanceof H && (this.point = new H(a.lng, a.lat))
        },
        yi: function(a, b) {
            this.z.rE = !!a;
            a && (this.GG = b || 0)
        },
        Cc: function(a) {
            this.z.title = a + ""
        },
        getTitle: function() {
            return this.z.title
        },
        Ve: function(a) {
            a instanceof N && (this.z.za = a)
        },
        Qf: function() {
            return this.z.za
        },
        $m: ba("rq"),
        Lp: function(a) {
            this.z.rotation = a
        },
        zL: function() {
            return this.z.rotation
        }
    });

    function Cc(a, b) {
        oc.call(this, b);
        b = b || {};
        this.z.qg = b.fillOpacity ? b.fillOpacity : 0.65;
        this.z.fillColor = "" == b.fillColor ? "" : b.fillColor ? b.fillColor : "#fff";
        this.he(a);
        var c = this;
        I.load("poly", function() {
            c.yb()
        })
    }
    x.lang.ua(Cc, oc, "Polygon");
    x.extend(Cc.prototype, {
        he: function(a, b) {
            this.po = oc.ix(a).slice(0);
            var c = oc.ix(a).slice(0);
            1 < c.length && c.push(new H(c[0].lng, c[0].lat));
            oc.prototype.he.call(this, c, b)
        },
        dn: function(a, b) {
            this.po[a] && (this.po[a] = new H(b.lng, b.lat),
                this.ia[a] = new H(b.lng, b.lat),
                0 == a && !this.ia[0].nb(this.ia[this.ia.length - 1]) && (this.ia[this.ia.length - 1] = new H(b.lng, b.lat)),
                this.Eh())
        },
        qe: function() {
            var a = this.po;
            0 == a.length && (a = this.ia);
            return a
        }
    });

    function Dc(a, b) {
        oc.call(this, b);
        this.Hr(a);
        var c = this;
        I.load("poly", function() {
            c.yb()
        })
    }
    x.lang.ua(Dc, oc, "Polyline");

    function Ec(a, b, c) {
        this.point = a;
        this.xa = Math.abs(b);
        Cc.call(this, [], c)
    }
    Ec.OE = [0.01, 1.0E-4, 1.0E-5, 4.0E-6];
    x.lang.ua(Ec, Cc, "Circle");
    x.extend(Ec.prototype, {
        initialize: function(a) {
            this.map = a;
            this.ia = this.ev(this.point, this.xa);
            this.Eh();
            return p
        },
        Ka: u("point"),
        Wf: function(a) {
            a && (this.point = a)
        },
        xL: u("xa"),
        vf: function(a) {
            this.xa = Math.abs(a)
        },
        ev: function(a, b) {
            if (!a || !b || !this.map)
                return [];
            for (var c = [], d = b / 6378800, e = Math.PI / 180 * a.lat, f = Math.PI / 180 * a.lng, g = 0; 360 > g; g += 9) {
                var i = Math.PI / 180 * g,
                    k = Math.asin(Math.sin(e) * Math.cos(d) + Math.cos(e) * Math.sin(d) * Math.cos(i)),
                    i = new H(((f - Math.atan2(Math.sin(i) * Math.sin(d) * Math.cos(e), Math.cos(d) - Math.sin(e) * Math.sin(k)) + Math.PI) % (2 * Math.PI) - Math.PI) * (180 / Math.PI), k * (180 / Math.PI));
                c.push(i)
            }
            d = c[0];
            c.push(new H(d.lng, d.lat));
            return c
        }
    });
    var Fc = {};

    function Gc(a) {
        this.map = a;
        this.Jm = [];
        this.Xf = [];
        this.Cg = [];
        this.lV = 300;
        this.YE = 0;
        this.vg = {};
        this.dj = {};
        this.qh = 0;
        this.lE = o;
        this.wK = {};
        this.Zn = this.Kn(1);
        this.ld = this.Kn(2);
        this.vl = this.Kn(3);
        a.platform.appendChild(this.Zn);
        a.platform.appendChild(this.ld);
        a.platform.appendChild(this.vl);
        var b = 256 * Math.pow(2, 15),
            c = 3 * b,
            a = R.zb(new H(180, 0)).lng,
            c = c - a,
            b = -3 * b,
            d = R.zb(new H(-180, 0)).lng;
        this.iI = a;
        this.jI = d;
        this.MA = c + (d - b);
        this.kI = a - d
    }
    z.Ue(function(a) {
        var b = new Gc(a);
        b.ra();
        a.cb = b
    });
    x.extend(Gc.prototype, {
        ra: function() {
            var a = this,
                b = a.map;
            b.addEventListener("loadcode", function() {
                a.Rx()
            });
            b.addEventListener("addtilelayer", function(b) {
                a.Wg(b)
            });
            b.addEventListener("removetilelayer", function(b) {
                a.xh(b)
            });
            b.addEventListener("setmaptype", function(b) {
                a.Ag(b)
            });
            b.addEventListener("zoomstartcode", function(b) {
                a.Jc(b)
            });
            b.addEventListener("setcustomstyles", function(b) {
                a.Qt(b.target);
                a.Uf(o)
            })
        },
        Rx: function() {
            var a = this;
            if (x.da.la)
                try {
                    document.execCommand("BackgroundImageCache", q, o)
                } catch (b) {}
            this.loaded || a.Hx();
            a.Uf();
            this.loaded || (this.loaded = o,
                I.load("tile", function() {
                    a.VP()
                }))
        },
        Hx: function() {
            for (var a = this.map.pa().ir, b = 0; b < a.length; b++) {
                var c = new Hc;
                x.extend(c, a[b]);
                this.Jm.push(c);
                c.ra(this.map, this.Zn)
            }
            this.Qt()
        },
        Kn: function(a) {
            var b = M("div");
            b.style.position = "absolute";
            b.style.overflow = "visible";
            b.style.left = b.style.top = "0";
            b.style.zIndex = a;
            return b
        },
        yf: function() {
            this.qh--;
            var a = this;
            this.lE && (this.map.dispatchEvent(new O("onfirsttileloaded")),
                this.lE = q);
            0 == this.qh && (this.Li && (clearTimeout(this.Li),
                    this.Li = p),
                this.Li = setTimeout(function() {
                    if (a.qh == 0) {
                        a.map.dispatchEvent(new O("ontilesloaded"));
                        a.lE = o
                    }
                    a.Li = p
                }, 80))
        },
        VD: function(a, b) {
            return "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Ex: function(a) {
            var b = a.Hb;
            b && xb(b) && b.parentNode.removeChild(b);
            delete this.vg[a.name];
            a.loaded || (Ic(a),
                a.Hb = p,
                a.Mm = p)
        },
        wm: function(a, b, c) {
            var d = this.map,
                e = d.pa(),
                f = d.Oa,
                g = d.mc,
                i = e.Bc(f),
                k = this.mL(),
                l = k[0],
                m = k[1],
                n = k[2],
                t = k[3],
                v = k[4],
                c = "undefined" != typeof c ? c : 0,
                e = e.k.Pb,
                k = d.ba.replace(/^TANGRAM_/, "");
            for (this.Qc ? this.Qc.length = 0 : this.Qc = []; l < n; l++)
                for (var w = m; w < t; w++) {
                    var y = l,
                        C = w;
                    this.Qc.push([y, C]);
                    y = k + "_" + b + "_" + y + "_" + C + "_" + f;
                    this.wK[y] = y
                }
            this.Qc.sort(function(a) {
                return function(b, c) {
                    return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                }
            }([v[0] - 1, v[1] - 1]));
            g = [Math.round(-g.lng / i), Math.round(g.lat / i)];
            l = -d.offsetY + d.height / 2;
            a.style.left = -d.offsetX + d.width / 2 + "px";
            a.style.top = l + "px";
            this.Me ? this.Me.length = 0 : this.Me = [];
            l = 0;
            for (d = a.childNodes.length; l < d; l++)
                w = a.childNodes[l],
                w.er = q,
                this.Me.push(w);
            if (l = this.Pm)
                for (var A in l)
                    delete l[A];
            else
                this.Pm = {};
            this.Ne ? this.Ne.length = 0 : this.Ne = [];
            l = 0;
            for (d = this.Qc.length; l < d; l++) {
                A = this.Qc[l][0];
                i = this.Qc[l][1];
                w = 0;
                for (m = this.Me.length; w < m; w++)
                    if (n = this.Me[w],
                        n.id == k + "_" + b + "_" + A + "_" + i + "_" + f) {
                        n.er = o;
                        this.Pm[n.id] = n;
                        break
                    }
            }
            l = 0;
            for (d = this.Me.length; l < d; l++)
                n = this.Me[l],
                n.er || this.Ne.push(n);
            this.kn = [];
            w = (e + c) * this.map.K.devicePixelRatio;
            l = 0;
            for (d = this.Qc.length; l < d; l++)
                A = this.Qc[l][0],
                i = this.Qc[l][1],
                t = A * e + g[0] - c / 2,
                v = (-1 - i) * e + g[1] - c / 2,
                y = k + "_" + b + "_" + A + "_" + i + "_" + f,
                m = this.Pm[y],
                n = p,
                m ? (n = m.style,
                    n.left = t + "px",
                    n.top = v + "px",
                    m.Ze || this.kn.push([A, i, m])) : (0 < this.Ne.length ? (m = this.Ne.shift(),
                        m.getContext("2d").clearRect(-c / 2, -c / 2, w, w),
                        n = m.style) : (m = document.createElement("canvas"),
                        n = m.style,
                        n.position = "absolute",
                        n.width = e + c + "px",
                        n.height = e + c + "px",
                        this.Mx() && (n.WebkitTransform = "scale(1.001)"),
                        m.setAttribute("width", w),
                        m.setAttribute("height", w),
                        a.appendChild(m)),
                    m.id = y,
                    n.left = t + "px",
                    n.top = v + "px", -1 < y.indexOf("bg") && (t = "#F3F1EC",
                        this.map.K.xo && (t = this.map.K.xo),
                        n.background = t ? t : ""),
                    this.kn.push([A, i, m])),
                m.style.visibility = "";
            l = 0;
            for (d = this.Ne.length; l < d; l++)
                this.Ne[l].style.visibility = "hidden";
            return this.kn
        },
        Mx: function() {
            return /M040/i.test(navigator.userAgent)
        },
        mL: function() {
            var a = this.map,
                b = a.pa(),
                c = b.$D(a.Oa),
                d = a.mc,
                e = Math.ceil(d.lng / c),
                f = Math.ceil(d.lat / c),
                b = b.k.Pb,
                c = [e, f, (d.lng - e * c) / c * b, (d.lat - f * c) / c * b];
            return [c[0] - Math.ceil((a.width / 2 - c[2]) / b), c[1] - Math.ceil((a.height / 2 - c[3]) / b), c[0] + Math.ceil((a.width / 2 + c[2]) / b), c[1] + Math.ceil((a.height / 2 + c[3]) / b), c]
        },
        k_: function(a, b, c, d) {
            var e = this;
            e.B1 = b;
            var f = this.map.pa(),
                g = e.VD(a, c),
                i = f.k.Pb,
                b = [a[0] * i + b[0], (-1 - a[1]) * i + b[1]],
                k = this.vg[g];
            if (this.map.pa() !== Za && this.map.pa() !== Sa) {
                var l = this.yw(a[0], a[2]).offsetX;
                b[0] += l;
                b.Y0 = l
            }
            k && k.Hb ? (vb(k.Hb, b),
                d && (d = new Q(a[0], a[1]),
                    f = this.map.K.ue ? this.map.K.ue.style : "normal",
                    d = c.getTilesUrl(d, a[2], f),
                    k.loaded = q,
                    Jc(k, d)),
                k.loaded ? this.yf() : Kc(k, function() {
                    e.yf()
                })) : (k = this.dj[g]) && k.Hb ? (c.Qb.insertBefore(k.Hb, c.Qb.lastChild),
                this.vg[g] = k,
                vb(k.Hb, b),
                d && (d = new Q(a[0], a[1]),
                    f = this.map.K.ue ? this.map.K.ue.style : "normal",
                    d = c.getTilesUrl(d, a[2], f),
                    k.loaded = q,
                    Jc(k, d)),
                k.loaded ? this.yf() : Kc(k, function() {
                    e.yf()
                })) : (k = i * Math.pow(2, f.pm() - a[2]),
                new H(a[0] * k, a[1] * k),
                d = new Q(a[0], a[1]),
                f = this.map.K.ue ? this.map.K.ue.style : "normal",
                d = c.getTilesUrl(d, a[2], f),
                k = new Lc(this, d, b, a, c),
                Kc(k, function() {
                    e.yf()
                }),
                k.Yn(),
                this.vg[g] = k)
        },
        yf: function() {
            this.qh--;
            var a = this;
            0 == this.qh && (this.Li && (clearTimeout(this.Li),
                    this.Li = p),
                this.Li = setTimeout(function() {
                    if (a.qh == 0) {
                        a.map.dispatchEvent(new O("ontilesloaded"));
                        if (ua) {
                            if (ra && sa && ta) {
                                var b = ab(),
                                    c = a.map.Bb();
                                setTimeout(function() {
                                    Ra(5030, {
                                        load_script_time: sa - ra,
                                        load_tiles_time: b - ta,
                                        map_width: c.width,
                                        map_height: c.height,
                                        map_size: c.width * c.height
                                    })
                                }, 1E4);
                                z.An("cus.fire", "time", {
                                    z_imgfirstloaded: b - ta
                                })
                            }
                            ua = q
                        }
                    }
                    a.Li = p
                }, 80))
        },
        VD: function(a, b) {
            return this.map.pa() === Pa ? "TILE-" + b.ba + "-" + this.map.Dw + "-" + a[0] + "-" + a[1] + "-" + a[2] : "TILE-" + b.ba + "-" + a[0] + "-" + a[1] + "-" + a[2]
        },
        Ex: function(a) {
            var b = a.Hb;
            b && (Nc(b),
                xb(b) && b.parentNode.removeChild(b));
            delete this.vg[a.name];
            a.loaded || (Nc(b),
                Ic(a),
                a.Hb = p,
                a.Mm = p)
        },
        yw: function(a, b) {
            for (var c = 0, d = 6 * Math.pow(2, b - 3), e = d / 2 - 1, f = -d / 2; a > e;)
                a -= d,
                c -= this.MA;
            for (; a < f;)
                a += d,
                c += this.MA;
            c = Math.round(c / Math.pow(2, 18 - b));
            return {
                offsetX: c,
                as: a
            }
        },
        nV: function(a) {
            for (var b = a.lng; b > this.iI;)
                b -= this.kI;
            for (; b < this.jI;)
                b += this.kI;
            a.lng = b;
            return a
        },
        oV: function(a, b) {
            for (var c = 256 * Math.pow(2, 18 - b), d = Math.floor(this.iI / c), e = Math.floor(this.jI / c), c = Math.floor(this.MA / c), f = [], g = 0; g < a.length; g++) {
                var i = a[g],
                    k = i[0],
                    i = i[1];
                if (k >= d) {
                    var k = k + c,
                        l = "id_" + k + "_" + i + "_" + b;
                    a[l] || (a[l] = o,
                        f.push([k, i]))
                } else
                    k <= e && (k -= c,
                        l = "id_" + k + "_" + i + "_" + b,
                        a[l] || (a[l] = o,
                            f.push([k, i])))
            }
            for (g = 0; g < f.length; g++)
                a.push(f[g]);
            return a
        },
        Uf: function(a) {
            var b = this;
            if (b.map.pa() == Pa)
                I.load("coordtrans", function() {
                    b.map.Wb || (b.map.Wb = Pa.sk(b.map.Yg),
                        b.map.Dw = Pa.kL(b.map.Wb));
                    b.mI()
                }, o);
            else {
                if (a && a)
                    for (var c in this.dj)
                        delete this.dj[c];
                b.mI(a)
            }
        },
        mI: function(a) {
            var b = this.Jm.concat(this.Xf),
                c = b.length,
                d = this.map,
                e = d.pa(),
                f = d.mc;
            this.map.pa() !== Za && this.map.pa() !== Sa && (f = this.nV(f));
            for (var g = 0; g < c; g++) {
                var i = b[g];
                if (i.gc && d.Oa < i.gc)
                    break;
                if (i.ww) {
                    var k = this.Qb = i.Qb;
                    if (a) {
                        var l = k;
                        if (l && l.childNodes)
                            for (var m = l.childNodes.length, n = m - 1; 0 <= n; n--)
                                m = l.childNodes[n],
                                l.removeChild(m),
                                m = p
                    }
                    if (this.map.Vb()) {
                        this.ld.style.display = "block";
                        k.style.display = "none";
                        this.map.dispatchEvent(new O("vectorchanged"), {
                            isvector: o
                        });
                        continue
                    } else
                        k.style.display = "block",
                        this.ld.style.display = "none",
                        this.map.dispatchEvent(new O("vectorchanged"), {
                            isvector: q
                        })
                }
                if (!i.$H && !(i.mp && !this.map.Vb() || i.jM && this.map.Vb())) {
                    d = this.map;
                    e = d.pa();
                    k = e.ap();
                    m = d.Oa;
                    f = d.mc;
                    e == Pa && f.nb(new H(0, 0)) && (f = d.mc = k.Im(d.gf, d.Wb));
                    var t = e.Bc(m),
                        k = e.$D(m),
                        l = Math.ceil(f.lng / k),
                        v = Math.ceil(f.lat / k),
                        w = e.k.Pb,
                        k = [l, v, (f.lng - l * k) / k * w, (f.lat - v * k) / k * w],
                        n = k[0] - Math.ceil((d.width / 2 - k[2]) / w),
                        l = k[1] - Math.ceil((d.height / 2 - k[3]) / w),
                        v = k[0] + Math.ceil((d.width / 2 + k[2]) / w),
                        y = 0;
                    e === Pa && 15 == d.fa() && (y = 1);
                    e = k[1] + Math.ceil((d.height / 2 + k[3]) / w) + y;
                    this.RJ = new H(f.lng, f.lat);
                    var C = this.vg,
                        w = -this.RJ.lng / t,
                        y = this.RJ.lat / t,
                        t = [Math.ceil(w), Math.ceil(y)],
                        f = d.fa(),
                        A;
                    for (A in C) {
                        var D = C[A],
                            B = D.info;
                        (B[2] != f || B[2] == f && (n > B[0] || v <= B[0] || l > B[1] || e <= B[1])) && this.Ex(D)
                    }
                    C = -d.offsetX + d.width / 2;
                    D = -d.offsetY + d.height / 2;
                    i.Qb && (i.Qb.style.left = Math.ceil(w + C) - t[0] + "px",
                        i.Qb.style.top = Math.ceil(y + D) - t[1] + "px",
                        i.Qb.style.WebkitTransform = "translate3d(0,0,0)");
                    w = [];
                    for (d.JB = []; n < v; n++)
                        for (y = l; y < e; y++)
                            w.push([n, y]),
                            d.JB.push({
                                x: n,
                                y: y
                            });
                    this.map.pa() !== Za && this.map.pa() !== Sa && (w = this.oV(w, m));
                    w.sort(function(a) {
                        return function(b, c) {
                            return 0.4 * Math.abs(b[0] - a[0]) + 0.6 * Math.abs(b[1] - a[1]) - (0.4 * Math.abs(c[0] - a[0]) + 0.6 * Math.abs(c[1] - a[1]))
                        }
                    }([k[0] - 1, k[1] - 1]));
                    m = w.length;
                    this.qh += m;
                    for (n = 0; n < m; n++)
                        this.k_([w[n][0], w[n][1], f], t, i, a)
                }
            }
        },
        Wg: function(a) {
            var b = this,
                c = a.target,
                a = b.map.Vb();
            if (c instanceof cb)
                a && !c.Em && (c.ra(this.map, this.ld),
                    c.Em = o);
            else if (c.Ch && this.map.Wg(c.Ch),
                c.mp) {
                for (a = 0; a < b.Cg.length; a++)
                    if (b.Cg[a] == c)
                        return;
                I.load("vector", function() {
                    c.ra(b.map, b.ld);
                    b.Cg.push(c)
                }, o)
            } else {
                for (a = 0; a < b.Xf.length; a++)
                    if (b.Xf[a] == c)
                        return;
                c.ra(this.map, this.vl);
                b.Xf.push(c)
            }
        },
        xh: function(a) {
            var a = a.target,
                b = this.map.Vb();
            if (a instanceof cb)
                b && a.Em && (a.remove(),
                    a.Em = q);
            else {
                a.Ch && this.map.xh(a.Ch);
                if (a.mp)
                    for (var b = 0, c = this.Cg.length; b < c; b++)
                        a == this.Cg[b] && this.Cg.splice(b, 1);
                else {
                    b = 0;
                    for (c = this.Xf.length; b < c; b++)
                        a == this.Xf[b] && this.Xf.splice(b, 1)
                }
                a.remove()
            }
        },
        Ag: function() {
            for (var a = this.Jm, b = 0, c = a.length; b < c; b++)
                a[b].remove();
            delete this.Qb;
            this.Jm = [];
            this.dj = this.vg = {};
            this.Hx();
            this.Uf()
        },
        Jc: function() {
            var a = this;
            a.td && x.D.U(a.td);
            setTimeout(function() {
                a.Uf();
                a.map.dispatchEvent(new O("onzoomend"))
            }, 10)
        },
        D4: s(),
        Qt: function(a) {
            var b = this.map.pa();
            if (!this.map.Vb() && (a ? this.map.K.s_ = a : a = this.map.K.s_,
                    a))
                for (var c = p, c = "2" == z.Ny ? [z.url.proto + z.url.domain.main_domain_cdn.other[0] + "/"] : [z.url.proto + z.url.domain.main_domain_cdn.baidu[0] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[1] + "/", z.url.proto + z.url.domain.main_domain_cdn.baidu[2] + "/"], d = 0, e; e = this.Jm[d]; d++)
                    if (e.f_ == o) {
                        b.k.$b = 18;
                        e.getTilesUrl = function(b, d) {
                            var e = b.x,
                                e = this.map.cb.yw(e, d).as,
                                k = b.y,
                                l = Rb("normal"),
                                m = 1;
                            this.map.Fx() && (m = 2);
                            l = "customimage/tile?&x=" + e + "&y=" + k + "&z=" + d + "&udt=" + l + "&scale=" + m + "&ak=" + qa;
                            l = a.styleStr ? l + ("&styles=" + encodeURIComponent(a.styleStr)) : l + ("&customid=" + a.style);
                            return c[Math.abs(e + k) % c.length] + l
                        };
                        break
                    }
        }
    });

    function Lc(a, b, c, d, e) {
        this.Mm = a;
        this.position = c;
        this.Qu = [];
        this.name = a.VD(d, e);
        this.info = d;
        this.pJ = e.mt();
        d = M("img");
        wb(d);
        d.dL = q;
        var f = d.style,
            a = a.map.pa();
        f.position = "absolute";
        f.border = "none";
        f.width = a.k.Pb + "px";
        f.height = a.k.Pb + "px";
        f.left = c[0] + "px";
        f.top = c[1] + "px";
        f.maxWidth = "none";
        this.Hb = d;
        this.src = b;
        Oc && (this.Hb.style.opacity = 0);
        var g = this;
        this.Hb.onload = function() {
            z.AY.HQ();
            g.loaded = o;
            if (g.Mm) {
                var a = g.Mm,
                    b = a.dj;
                if (!b[g.name]) {
                    a.YE++;
                    b[g.name] = g
                }
                if (g.Hb && !xb(g.Hb) && e.Qb) {
                    e.Qb.appendChild(g.Hb);
                    if (x.da.la <= 6 && x.da.la > 0 && g.pJ)
                        g.Hb.style.cssText = g.Hb.style.cssText + (';filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src="' + g.src + '",sizingMethod=scale);')
                }
                var c = a.YE - a.lV,
                    d;
                for (d in b) {
                    if (c <= 0)
                        break;
                    if (!a.vg[d]) {
                        b[d].Mm = p;
                        var f = b[d].Hb;
                        if (f && f.parentNode) {
                            f.parentNode.removeChild(f);
                            Nc(f)
                        }
                        f = p;
                        b[d].Hb = p;
                        delete b[d];
                        a.YE--;
                        c--
                    }
                }
                Oc && new rb({
                    Gc: 20,
                    duration: 200,
                    va: function(a) {
                        if (g.Hb && g.Hb.style)
                            g.Hb.style.opacity = a * 1
                    },
                    finish: function() {
                        g.Hb && g.Hb.style && delete g.Hb.style.opacity
                    }
                });
                Ic(g)
            }
        };
        this.Hb.onerror = function() {
            Ic(g);
            if (g.Mm) {
                var a = g.Mm.map.pa();
                if (a.k.kD) {
                    g.error = o;
                    g.Hb.src = a.k.kD;
                    g.Hb && !xb(g.Hb) && e.Qb.appendChild(g.Hb)
                }
            }
        };
        d = p
    }

    function Kc(a, b) {
        a.Qu.push(b)
    }
    Lc.prototype.Yn = function() {
        this.Hb.src = 0 < x.da.la && 6 >= x.da.la && this.pJ ? E.qa + "blank.gif" : "" !== this.src && this.Hb.src == this.src ? this.src + "&t = " + Date.now() : this.src
    };

    function Ic(a) {
        for (var b = 0; b < a.Qu.length; b++)
            a.Qu[b]();
        a.Qu.length = 0
    }

    function Nc(a) {
        if (a) {
            a.onload = a.onerror = p;
            var b = a.attributes,
                c, d, e;
            if (b) {
                d = b.length;
                for (c = 0; c < d; c += 1)
                    e = b[c].name,
                    Ya(a[e]) && (a[e] = p)
            }
            if (b = a.children) {
                d = b.length;
                for (c = 0; c < d; c += 1)
                    Nc(a.children[c])
            }
        }
    }

    function Jc(a, b) {
        a.src = b;
        a.Yn()
    }
    var Oc = !x.da.la || 8 < x.da.la;

    function Hc(a) {
        this.rh = a || {};
        this.IV = this.rh.copyright || p;
        this.R_ = this.rh.transparentPng || q;
        this.ww = this.rh.baseLayer || q;
        this.zIndex = this.rh.zIndex || 0;
        this.ba = Hc.vS++
    }
    Hc.vS = 0;
    x.lang.ua(Hc, x.lang.Ca, "TileLayer");
    x.extend(Hc.prototype, {
        ra: function(a, b) {
            this.ww && (this.zIndex = -100);
            this.map = a;
            if (!this.Qb) {
                var c = M("div"),
                    d = c.style;
                d.position = "absolute";
                d.overflow = "visible";
                d.zIndex = this.zIndex;
                d.left = Math.ceil(-a.offsetX + a.width / 2) + "px";
                d.top = Math.ceil(-a.offsetY + a.height / 2) + "px";
                b.appendChild(c);
                this.Qb = c
            }
        },
        remove: function() {
            this.Qb && this.Qb.parentNode && (this.Qb.innerHTML = "",
                this.Qb.parentNode.removeChild(this.Qb));
            delete this.Qb
        },
        mt: u("R_"),
        getTilesUrl: function(a, b) {
            if (this.map.pa() !== Za && this.map.pa() !== Sa)
                var c = this.map.cb.yw(a.x, b).as;
            var d = "";
            this.rh.tileUrlTemplate && (d = this.rh.tileUrlTemplate.replace(/\{X\}/, c),
                d = d.replace(/\{Y\}/, a.y),
                d = d.replace(/\{Z\}/, b));
            return d
        },
        nm: u("IV"),
        pa: function() {
            return this.Ib || Ma
        }
    });

    function Pc(a, b) {
        Gb(a) ? b = a || {} : (b = b || {},
            b.databoxId = a);
        this.k = {
            xK: b.databoxId,
            dh: b.geotableId,
            Vm: b.q || "",
            gu: b.tags || "",
            filter: b.filter || "",
            Gy: b.sortby || "",
            q_: b.styleId || "",
            Sl: b.ak || qa,
            tw: b.age || 36E5,
            zIndex: 11,
            wY: "VectorCloudLayer",
            Ak: b.hotspotName || "vector_md_" + (1E5 * Math.random()).toFixed(0),
            TU: "LBS\u4e91\u9ebb\u70b9\u5c42"
        };
        this.mp = o;
        Hc.call(this, this.k);
        this.aW = z.Ac + "geosearch/detail/";
        this.bW = z.Ac + "geosearch/v2/detail/";
        this.hp = {}
    }
    x.ua(Pc, Hc, "VectorCloudLayer");

    function Qc(a) {
        a = a || {};
        this.k = x.extend(a, {
            zIndex: 1,
            wY: "VectorTrafficLayer",
            TU: "\u77e2\u91cf\u8def\u51b5\u5c42"
        });
        this.mp = o;
        Hc.call(this, this.k);
        this.N_ = z.url.proto + z.url.domain.vector_traffic + "/gvd/?qt=lgvd&styles=pl&layers=tf";
        this.Fb = {
            "0": [2, 1354709503, 2, 2, 0, [], 0, 0],
            1: [2, 1354709503, 3, 2, 0, [], 0, 0],
            10: [2, -231722753, 2, 2, 0, [], 0, 0],
            11: [2, -231722753, 3, 2, 0, [], 0, 0],
            12: [2, -231722753, 4, 2, 0, [], 0, 0],
            13: [2, -231722753, 5, 2, 0, [], 0, 0],
            14: [2, -231722753, 6, 2, 0, [], 0, 0],
            15: [2, -1, 4, 0, 0, [], 0, 0],
            16: [2, -1, 5.5, 0, 0, [], 0, 0],
            17: [2, -1, 7, 0, 0, [], 0, 0],
            18: [2, -1, 8.5, 0, 0, [], 0, 0],
            19: [2, -1, 10, 0, 0, [], 0, 0],
            2: [2, 1354709503, 4, 2, 0, [], 0, 0],
            3: [2, 1354709503, 5, 2, 0, [], 0, 0],
            4: [2, 1354709503, 6, 2, 0, [], 0, 0],
            5: [2, -6350337, 2, 2, 0, [], 0, 0],
            6: [2, -6350337, 3, 2, 0, [], 0, 0],
            7: [2, -6350337, 4, 2, 0, [], 0, 0],
            8: [2, -6350337, 5, 2, 0, [], 0, 0],
            9: [2, -6350337, 6, 2, 0, [], 0, 0]
        }
    }
    x.ua(Qc, Hc, "VectorTrafficLayer");

    function cb(a) {
        this.mV = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/gvd/?", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/gvd/?"];
        this.k = {
            ZK: q
        };
        for (var b in a)
            this.k[b] = a[b];
        this.Yh = this.Ih = this.Xa = this.B = this.C = p;
        this.oM = 0;
        var c = this;
        I.load("vector", function() {
            c.Ae()
        })
    }
    x.extend(cb.prototype, {
        ra: function(a, b) {
            this.C = a;
            this.B = b
        },
        remove: function() {
            this.B = this.C = p
        }
    });

    function Rc(a) {
        Hc.call(this, a);
        this.k = a || {};
        this.jM = o;
        if (this.k.predictDate) {
            if (1 > this.k.predictDate.weekday || 7 < this.k.predictDate.weekday)
                this.k.predictDate = 1;
            if (0 > this.k.predictDate.hour || 23 < this.k.predictDate.hour)
                this.k.predictDate.hour = 0
        }
        this.wU = z.url.proto + z.url.domain.traffic + "/traffic/"
    }
    Rc.prototype = new Hc;
    Rc.prototype.ra = function(a, b) {
        Hc.prototype.ra.call(this, a, b);
        this.C = a
    };
    Rc.prototype.mt = ca(o);
    Rc.prototype.getTilesUrl = function(a, b) {
        var c = "";
        this.k.predictDate ? c = "HistoryService?day=" + (this.k.predictDate.weekday - 1) + "&hour=" + this.k.predictDate.hour + "&t=" + (new Date).getTime() + "&" : (c = "TrafficTileService?time=" + (new Date).getTime() + "&",
            c += "label=web2D&v=016&");
        var c = this.wU + c + "level=" + b + "&x=" + a.x + "&y=" + a.y,
            d = 1;
        this.C.Fx() && (d = 2);
        return (c + "&scaler=" + d).replace(/-(\d+)/gi, "M$1")
    };
    var Sc = [z.url.proto + z.url.domain.TILES_YUN_HOST[0] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[1] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[2] + "/georender/gss", z.url.proto + z.url.domain.TILES_YUN_HOST[3] + "/georender/gss"],
        Tc = z.url.proto + z.url.domain.main_domain_nocdn.baidu + "/style/poi/rangestyle",
        Uc = 100;

    function mb(a, b) {
        Hc.call(this);
        var c = this;
        this.jM = o;
        var d = q;
        try {
            document.createElement("canvas").getContext("2d"),
                d = o
        } catch (e) {
            d = q
        }
        d && (this.Ch = new Pc(a, b),
            this.Ch.GF = this);
        Gb(a) ? b = a || {} : (c.Nn = a,
            b = b || {});
        b.geotableId && (c.Af = b.geotableId);
        b.databoxId && (c.Nn = b.databoxId);
        d = z.Ac + "geosearch";
        c.pc = {
            tN: b.pointDensity || Uc,
            VX: d + "/detail/",
            WX: d + "/v2/detail/",
            tw: b.age || 36E5,
            Vm: b.q || "",
            A_: "png",
            a3: [5, 5, 5, 5],
            vY: {
                backgroundColor: "#FFFFD5",
                borderColor: "#808080"
            },
            Sl: b.ak || qa,
            gu: b.tags || "",
            filter: b.filter || "",
            Gy: b.sortby || "",
            Ak: b.hotspotName || "tile_md_" + (1E5 * Math.random()).toFixed(0),
            PF: o
        };
        I.load("clayer", function() {
            c.Qd()
        })
    }
    mb.prototype = new Hc;
    mb.prototype.ra = function(a, b) {
        Hc.prototype.ra.call(this, a, b);
        this.C = a
    };
    mb.prototype.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = this.pc,
            c = Sc[Math.abs(c + d) % Sc.length] + "/image?grids=" + c + "_" + d + "_" + b + "&q=" + e.Vm + "&tags=" + e.gu + "&filter=" + e.filter + "&sortby=" + e.Gy + "&ak=" + this.pc.Sl + "&age=" + e.tw + "&page_size=" + e.tN + "&format=" + e.A_;
        e.PF || (e = (1E5 * Math.random()).toFixed(0),
            c += "&timeStamp=" + e);
        this.Af ? c += "&geotable_id=" + this.Af : this.Nn && (c += "&databox_id=" + this.Nn);
        return c
    };
    mb.prototype.enableUseCache = function() {
        this.pc.PF = o
    };
    mb.prototype.disableUseCache = function() {
        this.pc.PF = q
    };
    mb.UT = /^point\(|\)$/ig;
    mb.VT = /\s+/;
    mb.XT = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

    function Vc(a, b, c) {
        this.cf = a;
        this.ir = b instanceof Hc ? [b] : b.slice(0);
        c = c || {};
        this.k = {
            B_: c.tips || "",
            xE: "",
            gc: c.minZoom || 3,
            $b: c.maxZoom || 18,
            Z2: c.minZoom || 3,
            Y2: c.maxZoom || 18,
            Pb: 256,
            EF: c.textColor || "black",
            kD: c.errorImageUrl || "",
            xe: c.projection || new R
        };
        1 <= this.ir.length && (this.ir[0].ww = o);
        x.extend(this.k, c)
    }
    x.extend(Vc.prototype, {
        getName: u("cf"),
        Ys: function() {
            return this.k.B_
        },
        E2: function() {
            return this.k.xE
        },
        IX: function() {
            return this.ir[0]
        },
        S2: u("ir"),
        JX: function() {
            return this.k.Pb
        },
        Wo: function() {
            return this.k.gc
        },
        pm: function() {
            return this.k.$b
        },
        setMaxZoom: function(a) {
            this.k.$b = a
        },
        vm: function() {
            return this.k.EF
        },
        ap: function() {
            return this.k.xe
        },
        v2: function() {
            return this.k.kD
        },
        JX: function() {
            return this.k.Pb
        },
        Bc: function(a) {
            return Math.pow(2, 18 - a)
        },
        $D: function(a) {
            return this.Bc(a) * this.k.Pb
        }
    });
    var Wc = [z.url.proto + z.url.domain.TILE_BASE_URLS[0] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[1] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[2] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[3] + "/it/", z.url.proto + z.url.domain.TILE_BASE_URLS[4] + "/it/"],
        Xc = [z.url.proto + z.url.domain.TILE_ONLINE_URLS[0] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[1] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[2] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[3] + "/tile/", z.url.proto + z.url.domain.TILE_ONLINE_URLS[4] + "/tile/"],
        Yc = {
            dark: "dl",
            light: "ll",
            normal: "pl"
        },
        Zc = new Hc;
    Zc.f_ = o;
    Zc.getTilesUrl = function(a, b, c) {
        var d = a.x,
            a = a.y,
            e = Rb("normal"),
            f = 1,
            c = Yc[c];
        this.map.Fx() && (f = 2);
        d = this.map.cb.yw(d, b).as;
        return (Xc[Math.abs(d + a) % Xc.length] + "?qt=tile&x=" + (d + "").replace(/-/gi, "M") + "&y=" + (a + "").replace(/-/gi, "M") + "&z=" + b + "&styles=" + c + "&scaler=" + f + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Ma = new Vc("\u5730\u56fe", Zc, {
            tips: "\u663e\u793a\u666e\u901a\u5730\u56fe",
            maxZoom: 19
        }),
        $c = new Hc;
    $c.oO = [z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[0] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[1] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[2] + "/resource/mappic/", z.url.proto + z.url.domain.TIlE_PERSPECT_URLS[3] + "/resource/mappic/"];
    $c.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = 256 * Math.pow(2, 20 - b),
            d = Math.round((9998336 - e * d) / e) - 1;
        return url = this.oO[Math.abs(c + d) % this.oO.length] + this.map.Wb + "/" + this.map.Dw + "/3/lv" + (21 - b) + "/" + c + "," + d + ".jpg"
    };
    var Pa = new Vc("\u4e09\u7ef4", $c, {
        tips: "\u663e\u793a\u4e09\u7ef4\u5730\u56fe",
        minZoom: 15,
        maxZoom: 20,
        textColor: "white",
        projection: new gb
    });
    Pa.Bc = function(a) {
        return Math.pow(2, 20 - a)
    };
    Pa.sk = function(a) {
        if (!a)
            return "";
        var b = E.eC,
            c;
        for (c in b)
            if (-1 < a.search(c))
                return b[c].jy;
        return ""
    };
    Pa.kL = function(a) {
        return {
            bj: 2,
            gz: 1,
            sz: 14,
            sh: 4
        }[a]
    };
    var ad = new Hc({
        ww: o
    });
    ad.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y;
        return (Wc[Math.abs(c + d) % Wc.length] + "u=x=" + c + ";y=" + d + ";z=" + b + ";v=009;type=sate&fm=46&udt=" + Rb("satellite")).replace(/-(\d+)/gi, "M$1")
    };
    var Za = new Vc("\u536b\u661f", ad, {
            tips: "\u663e\u793a\u536b\u661f\u5f71\u50cf",
            minZoom: 1,
            maxZoom: 19,
            textColor: "white"
        }),
        bd = new Hc({
            transparentPng: o
        });
    bd.getTilesUrl = function(a, b) {
        var c = a.x,
            d = a.y,
            e = Rb("satelliteStreet");
        return (Xc[Math.abs(c + d) % Xc.length] + "?qt=tile&x=" + (c + "").replace(/-/gi, "M") + "&y=" + (d + "").replace(/-/gi, "M") + "&z=" + b + "&styles=sl" + (6 == x.da.la ? "&color_dep=32&colors=50" : "") + "&udt=" + e).replace(/-(\d+)/gi, "M$1")
    };
    var Sa = new Vc("\u6df7\u5408", [ad, bd], {
        tips: "\u663e\u793a\u5e26\u6709\u8857\u9053\u7684\u536b\u661f\u5f71\u50cf",
        labelText: "\u8def\u7f51",
        minZoom: 1,
        maxZoom: 19,
        textColor: "white"
    });
    var cd = 1,
        U = {};
    window.n0 = U;

    function V(a, b) {
        x.lang.Ca.call(this);
        this.yd = {};
        this.bn(a);
        b = b || {};
        b.ka = b.renderOptions || {};
        this.k = {
            ka: {
                Ha: b.ka.panel || p,
                map: b.ka.map || p,
                Xg: b.ka.autoViewport || o,
                Lt: b.ka.selectFirstResult,
                bt: b.ka.highlightMode,
                Yb: b.ka.enableDragging || q
            },
            by: b.onSearchComplete || s(),
            fN: b.onMarkersSet || s(),
            eN: b.onInfoHtmlSet || s(),
            hN: b.onResultsHtmlSet || s(),
            dN: b.onGetBusListComplete || s(),
            cN: b.onGetBusLineComplete || s(),
            aN: b.onBusListHtmlSet || s(),
            $M: b.onBusLineHtmlSet || s(),
            LE: b.onPolylinesSet || s(),
            Ap: b.reqFrom || ""
        };
        this.k.ka.Xg = "undefined" != typeof b && "undefined" != typeof b.renderOptions && "undefined" != typeof b.renderOptions.autoViewport ? b.renderOptions.autoViewport : o;
        this.k.ka.Ha = x.Dc(this.k.ka.Ha)
    }
    x.ua(V, x.lang.Ca);
    x.extend(V.prototype, {
        getResults: function() {
            return this.Fc ? this.Ii : this.ja
        },
        enableAutoViewport: function() {
            this.k.ka.Xg = o
        },
        disableAutoViewport: function() {
            this.k.ka.Xg = q
        },
        bn: function(a) {
            a && (this.yd.src = a)
        },
        uF: function(a) {
            this.k.by = a || s()
        },
        setMarkersSetCallback: function(a) {
            this.k.fN = a || s()
        },
        setPolylinesSetCallback: function(a) {
            this.k.LE = a || s()
        },
        setInfoHtmlSetCallback: function(a) {
            this.k.eN = a || s()
        },
        setResultsHtmlSetCallback: function(a) {
            this.k.hN = a || s()
        },
        tm: u("Bd")
    });
    var dd = {
        tG: z.Ac,
        bb: function(a, b, c, d, e) {
            this.kZ(b);
            var f = (1E5 * Math.random()).toFixed(0);
            z._rd["_cbk" + f] = function(b) {
                b.result && b.result.error && 202 === b.result.error ? alert("\u8be5AK\u56e0\u4e3a\u6076\u610f\u884c\u4e3a\u5df2\u7ecf\u88ab\u7ba1\u7406\u5458\u5c01\u7981\uff01") : (c = c || {},
                    a && a(b, c),
                    delete z._rd["_cbk" + f])
            };
            d = d || "";
            b = c && c.GO ? Db(b, encodeURI) : Db(b, encodeURIComponent);
            this.tG = c && c.Gs ? c.EN ? c.EN : z.qp : z.Ac;
            d = this.tG + d + "?" + b + "&ie=utf-8&oue=1&fromproduct=jsapi";
            e || (d += "&res=api");
            d = d + ("&callback=BMap._rd._cbk" + f) + ("&ak=" + qa);
            pa(d)
        },
        kZ: function(a) {
            if (a.qt) {
                var b = "";
                switch (a.qt) {
                    case "bt":
                        b = "z_qt|bt";
                        break;
                    case "nav":
                        b = "z_qt|nav";
                        break;
                    case "walk":
                        b = "z_qt|walk";
                        break;
                    case "bse":
                        b = "z_qt|bse";
                        break;
                    case "nse":
                        b = "z_qt|nse";
                        break;
                    case "drag":
                        b = "z_qt|drag";
                        break;
                    case "s":
                        b = "z_qt|s";
                        break;
                    case "ext":
                        b = "z_qt|ext";
                        break;
                    case "gc":
                        b = "z_qt|gc";
                        break;
                    case "rgc":
                        b = "z_qt|rgc";
                        break;
                    case "bl":
                        b = "z_qt|bl";
                        break;
                    case "bsl":
                        b = "z_qt|bsl";
                        break;
                    case "con":
                        b = "z_qt|con";
                        break;
                    case "bd":
                        b = "z_qt|bd";
                        break;
                    case "nb":
                        b = "z_qt|nb";
                        break;
                    case "bda":
                        b = "z_qt|bda";
                        break;
                    case "sa":
                        b = "z_qt|sa";
                        break;
                    case "nba":
                        b = "z_qt|nba";
                        break;
                    case "dec":
                        b = "z_qt|dec"
                }
                "" !== b && z.alog("cus.fire", "count", b)
            }
        }
    };
    window.z0 = dd;
    z._rd = {};
    var P = {};
    window.y0 = P;
    P.AN = function(a) {
        a = a.replace(/<\/?[^>]*>/g, "");
        return a = a.replace(/[ | ]* /g, " ")
    };
    P.aZ = function(a) {
        return a.replace(/([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*),([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0|[1-9]\d*)(,)/g, "$1,$2;")
    };
    P.bZ = function(a, b) {
        return a.replace(RegExp("(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);)(((-?\\d+)(\\.\\d+)?),((-?\\d+)(\\.\\d+)?);){" + b + "}", "ig"), "$1")
    };
    var ed = 2,
        id = 3,
        jd = 0,
        kd = "bt",
        ld = "nav",
        md = "walk",
        nd = "bl",
        od = "bsl",
        pd = 14,
        qd = 15,
        rd = 18,
        sd = 20,
        td = 31;
    z.I = window.Instance = x.lang.Kc;

    function ud(a, b, c) {
        x.lang.Ca.call(this);
        if (a) {
            this.Va = "object" == typeof a ? a : x.Dc(a);
            this.page = 1;
            this.Jd = 100;
            this.SJ = "pg";
            this.Vf = 4;
            this.$J = b;
            this.update = o;
            a = {
                page: 1,
                We: 100,
                Jd: 100,
                Vf: 4,
                SJ: "pg",
                update: o
            };
            c || (c = a);
            for (var d in c)
                "undefined" != typeof c[d] && (this[d] = c[d]);
            this.va()
        }
    }
    x.extend(ud.prototype, {
        va: function() {
            this.ra()
        },
        ra: function() {
            this.uV();
            this.Va.innerHTML = this.QV()
        },
        uV: function() {
            isNaN(parseInt(this.page)) && (this.page = 1);
            isNaN(parseInt(this.Jd)) && (this.Jd = 1);
            1 > this.page && (this.page = 1);
            1 > this.Jd && (this.Jd = 1);
            this.page > this.Jd && (this.page = this.Jd);
            this.page = parseInt(this.page);
            this.Jd = parseInt(this.Jd)
        },
        J2: function() {
            location.search.match(RegExp("[?&]?" + this.SJ + "=([^&]*)[&$]?", "gi"));
            this.page = RegExp.$1
        },
        QV: function() {
            var a = [],
                b = this.page - 1,
                c = this.page + 1;
            a.push('<p style="margin:0;padding:0;white-space:nowrap">');
            if (!(1 > b)) {
                if (this.page >= this.Vf) {
                    var d;
                    a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp1}">\u9996\u9875</a></span>'.replace("{temp1}", "BMap.I('" + this.ba + "').toPage(1);"))
                }
                a.push('<span style="margin-right:3px"><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp2}">\u4e0a\u4e00\u9875</a></span>'.replace("{temp2}", "BMap.I('" + this.ba + "').toPage(" + b + ");"))
            }
            if (this.page < this.Vf)
                d = 0 == this.page % this.Vf ? this.page - this.Vf - 1 : this.page - this.page % this.Vf + 1,
                b = d + this.Vf - 1;
            else {
                d = Math.floor(this.Vf / 2);
                var e = this.Vf % 2 - 1,
                    b = this.Jd > this.page + d ? this.page + d : this.Jd;
                d = this.page - d - e
            }
            this.page > this.Jd - this.Vf && this.page >= this.Vf && (d = this.Jd - this.Vf + 1,
                b = this.Jd);
            for (e = d; e <= b; e++)
                0 < e && (e == this.page ? a.push('<span style="margin-right:3px">' + e + "</span>") : 1 <= e && e <= this.Jd && (d = '<span><a style="color:#7777cc;margin-right:3px" href="javascript:void(0)" onclick="{temp3}">[' + e + "]</a></span>",
                    a.push(d.replace("{temp3}", "BMap.I('" + this.ba + "').toPage(" + e + ");"))));
            c > this.Jd || a.push('<span><a style="color:#7777cc" href="javascript:void(0)" onclick="{temp4}">\u4e0b\u4e00\u9875</a></span>'.replace("{temp4}", "BMap.I('" + this.ba + "').toPage(" + c + ");"));
            a.push("</p>");
            return a.join("")
        },
        toPage: function(a) {
            a = a ? a : 1;
            "function" == typeof this.$J && (this.$J(a),
                this.page = a);
            this.update && this.va()
        }
    });

    function bb(a, b) {
        V.call(this, a, b);
        b = b || {};
        b.renderOptions = b.renderOptions || {};
        this.Kp(b.pageCapacity);
        "undefined" != typeof b.renderOptions.selectFirstResult && !b.renderOptions.selectFirstResult ? this.JC() : this.fD();
        this.wa = [];
        this.wf = [];
        this.kb = -1;
        this.Pa = [];
        var c = this;
        I.load("local", function() {
            c.Az()
        }, o)
    }
    x.ua(bb, V, "LocalSearch");
    bb.$p = 10;
    bb.v0 = 1;
    bb.zn = 100;
    bb.jG = 2E3;
    bb.qG = 1E5;
    x.extend(bb.prototype, {
        search: function(a, b) {
            this.Pa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Zm: function(a, b, c) {
            this.Pa.push({
                method: "searchInBounds",
                arguments: [a, b, c]
            })
        },
        Gp: function(a, b, c, d) {
            this.Pa.push({
                method: "searchNearby",
                arguments: [a, b, c, d]
            })
        },
        Oe: function() {
            delete this.Fa;
            delete this.Bd;
            delete this.ja;
            delete this.ga;
            this.kb = -1;
            this.sb();
            this.k.ka.Ha && (this.k.ka.Ha.innerHTML = "")
        },
        ym: s(),
        fD: function() {
            this.k.ka.Lt = o
        },
        JC: function() {
            this.k.ka.Lt = q
        },
        Kp: function(a) {
            this.k.Ek = "number" == typeof a && !isNaN(a) ? 1 > a ? bb.$p : a > bb.zn ? bb.$p : a : bb.$p
        },
        pf: function() {
            return this.k.Ek
        },
        toString: ca("LocalSearch")
    });
    var vd = bb.prototype;
    S(vd, {
        clearResults: vd.Oe,
        setPageCapacity: vd.Kp,
        getPageCapacity: vd.pf,
        gotoPage: vd.ym,
        searchNearby: vd.Gp,
        searchInBounds: vd.Zm,
        search: vd.search,
        enableFirstResultSelection: vd.fD,
        disableFirstResultSelection: vd.JC
    });

    function wd(a, b) {
        V.call(this, a, b)
    }
    x.ua(wd, V, "BaseRoute");
    x.extend(wd.prototype, {
        Oe: s()
    });

    function xd(a, b) {
        V.call(this, a, b);
        b = b || {};
        this.Tt(b.policy);
        this.Kp(b.pageCapacity);
        this.ud = kd;
        this.Cu = pd;
        this.Du = cd;
        this.wa = [];
        this.kb = -1;
        this.k.ed = b.enableTraffic || q;
        this.Pa = [];
        var c = this;
        I.load("route", function() {
            c.Qd()
        })
    }
    xd.zn = 100;
    xd.lP = [0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1];
    x.ua(xd, wd, "TransitRoute");
    x.extend(xd.prototype, {
        Tt: function(a) {
            this.k.$c = 0 <= a && 4 >= a ? a : 0
        },
        AA: function(a, b) {
            this.Pa.push({
                method: "_internalSearch",
                arguments: [a, b]
            })
        },
        search: function(a, b) {
            this.Pa.push({
                method: "search",
                arguments: [a, b]
            })
        },
        Kp: function(a) {
            if ("string" === typeof a && (a = parseInt(a, 10),
                    isNaN(a))) {
                this.k.Ek = xd.zn;
                return
            }
            this.k.Ek = "number" !== typeof a ? xd.zn : 1 <= a && a <= xd.zn ? Math.round(a) : xd.zn
        },
        toString: ca("TransitRoute"),
        iU: function(a) {
            return a.replace(/\(.*\)/, "")
        }
    });
    var yd = xd.prototype;
    S(yd, {
        _internalSearch: yd.AA
    });

    function zd(a, b) {
        V.call(this, a, b);
        this.wa = [];
        this.kb = -1;
        this.Pa = [];
        var c = this,
            d = this.k.ka;
        1 !== d.bt && 2 !== d.bt && (d.bt = 1);
        this.Uz = this.k.ka.Yb ? o : q;
        I.load("route", function() {
            c.Qd()
        });
        this.iE && this.iE()
    }
    zd.zP = " \u73af\u5c9b \u65e0\u5c5e\u6027\u9053\u8def \u4e3b\u8def \u9ad8\u901f\u8fde\u63a5\u8def \u4ea4\u53c9\u70b9\u5185\u8def\u6bb5 \u8fde\u63a5\u9053\u8def \u505c\u8f66\u573a\u5185\u90e8\u9053\u8def \u670d\u52a1\u533a\u5185\u90e8\u9053\u8def \u6865 \u6b65\u884c\u8857 \u8f85\u8def \u531d\u9053 \u5168\u5c01\u95ed\u9053\u8def \u672a\u5b9a\u4e49\u4ea4\u901a\u533a\u57df POI\u8fde\u63a5\u8def \u96a7\u9053 \u6b65\u884c\u9053 \u516c\u4ea4\u4e13\u7528\u9053 \u63d0\u524d\u53f3\u8f6c\u9053".split(" ");
    x.ua(zd, wd, "DWRoute");
    x.extend(zd.prototype, {
        search: function(a, b, c) {
            this.Pa.push({
                method: "search",
                arguments: [a, b, c]
            })
        }
    });

    function Ad(a, b) {
        zd.call(this, a, b);
        b = b || {};
        this.k.ed = b.enableTraffic || q;
        this.Tt(b.policy);
        this.ud = ld;
        this.Cu = sd;
        this.Du = id
    }
    x.ua(Ad, zd, "DrivingRoute");
    Ad.prototype.Tt = function(a) {
        this.k.$c = 0 <= a && 2 >= a ? a : 0
    };

    function Bd(a, b) {
        zd.call(this, a, b);
        this.ud = md;
        this.Cu = td;
        this.Du = ed;
        this.Uz = q
    }
    x.ua(Bd, zd, "WalkingRoute");

    function Cd(a, b) {
        x.lang.Ca.call(this);
        this.Tf = [];
        this.Sm = [];
        this.k = b;
        this.fc = a;
        this.map = this.k.ka.map || p;
        this.ty = this.k.ty;
        this.Cb = p;
        this.fj = 0;
        this.Hy = "";
        this.ae = 1;
        this.$w = "";
        this.Bp = [0, 0, 0, 0, 0, 0, 0];
        this.AE = [];
        this.gs = [1, 1, 1, 1, 1, 1, 1];
        this.wO = [1, 1, 1, 1, 1, 1, 1];
        this.Jt = [0, 0, 0, 0, 0, 0, 0];
        this.Cp = [0, 0, 0, 0, 0, 0, 0];
        this.Ma = [{
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }, {
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }, {
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }, {
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }, {
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }, {
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }, {
            o: "",
            Cd: 0,
            mn: 0,
            x: 0,
            y: 0,
            oa: -1
        }];
        this.fi = -1;
        this.iu = [];
        this.ju = [];
        I.load("route", s())
    }
    x.lang.ua(Cd, x.lang.Ca, "RouteAddr");
    var Dd = navigator.userAgent;
    /ipad|iphone|ipod|iph/i.test(Dd);
    var Ed = /android/i.test(Dd);

    function Fd(a) {
        this.rh = a || {}
    }
    x.extend(Fd.prototype, {
        KN: function(a, b, c) {
            var d = this;
            I.load("route", function() {
                d.Qd(a, b, c)
            })
        }
    });

    function Gd(a) {
        this.k = {};
        x.extend(this.k, a);
        this.Pa = [];
        var b = this;
        I.load("othersearch", function() {
            b.Qd()
        })
    }
    x.ua(Gd, x.lang.Ca, "Geocoder");
    x.extend(Gd.prototype, {
        sm: function(a, b, c) {
            this.Pa.push({
                method: "getPoint",
                arguments: [a, b, c]
            })
        },
        Vo: function(a, b, c) {
            this.Pa.push({
                method: "getLocation",
                arguments: [a, b, c]
            })
        },
        toString: ca("Geocoder")
    });
    var Hd = Gd.prototype;
    S(Hd, {
        getPoint: Hd.sm,
        getLocation: Hd.Vo
    });

    function Geolocation(a) {
        a = a || {};
        this.K = {
            timeout: a.timeout || 1E4,
            maximumAge: a.maximumAge || 6E5
        };
        this.le = [];
        var b = this;
        I.load("othersearch", function() {
            for (var a = 0, d; d = b.le[a]; a++)
                b[d.method].apply(b, d.arguments)
        })
    }
    x.extend(Geolocation.prototype, {
        getCurrentPosition: function(a, b) {
            this.le.push({
                method: "getCurrentPosition",
                arguments: arguments
            })
        },
        getStatus: ca(2)
    });

    function Id(a) {
        a = a || {};
        a.ka = a.renderOptions || {};
        this.k = {
            ka: {
                map: a.ka.map || p
            }
        };
        this.Pa = [];
        var b = this;
        I.load("othersearch", function() {
            b.Qd()
        })
    }
    x.ua(Id, x.lang.Ca, "LocalCity");
    x.extend(Id.prototype, {
        get: function(a) {
            this.Pa.push({
                method: "get",
                arguments: [a]
            })
        },
        toString: ca("LocalCity")
    });

    function Jd() {
        this.Pa = [];
        var a = this;
        I.load("othersearch", function() {
            a.Qd()
        })
    }
    x.ua(Jd, x.lang.Ca, "Boundary");
    x.extend(Jd.prototype, {
        get: function(a, b) {
            this.Pa.push({
                method: "get",
                arguments: [a, b]
            })
        },
        toString: ca("Boundary")
    });

    function Kd(a, b) {
        V.call(this, a, b);
        this.wP = nd;
        this.yP = qd;
        this.vP = od;
        this.xP = rd;
        this.Pa = [];
        var c = this;
        I.load("buslinesearch", function() {
            c.Qd()
        })
    }
    Kd.mv = E.qa + "iw_plus.gif";
    Kd.BS = E.qa + "iw_minus.gif";
    Kd.sU = E.qa + "stop_icon.png";
    x.ua(Kd, V);
    x.extend(Kd.prototype, {
        getBusList: function(a) {
            this.Pa.push({
                method: "getBusList",
                arguments: [a]
            })
        },
        getBusLine: function(a) {
            this.Pa.push({
                method: "getBusLine",
                arguments: [a]
            })
        },
        setGetBusListCompleteCallback: function(a) {
            this.k.dN = a || s()
        },
        setGetBusLineCompleteCallback: function(a) {
            this.k.cN = a || s()
        },
        setBusListHtmlSetCallback: function(a) {
            this.k.aN = a || s()
        },
        setBusLineHtmlSetCallback: function(a) {
            this.k.$M = a || s()
        },
        setPolylinesSetCallback: function(a) {
            this.k.LE = a || s()
        }
    });

    function Ld(a) {
        V.call(this, a);
        a = a || {};
        this.pc = {
            input: a.input || p,
            UB: a.baseDom || p,
            types: a.types || [],
            by: a.onSearchComplete || s()
        };
        this.yd.src = a.location || "\u5168\u56fd";
        this.$i = "";
        this.mg = p;
        this.WH = "";
        this.Pi();
        Ra(Ia);
        var b = this;
        I.load("autocomplete", function() {
            b.Qd()
        })
    }
    x.ua(Ld, V, "Autocomplete");
    x.extend(Ld.prototype, {
        Pi: s(),
        show: s(),
        U: s(),
        vF: function(a) {
            this.pc.types = a
        },
        bn: function(a) {
            this.yd.src = a
        },
        search: ba("$i"),
        wy: ba("WH")
    });
    var Ta;

    function Oa(a, b) {
        function c() {
            e.k.visible ? ("inter" === e.Ie && e.k.haveBreakId && e.k.indoorExitControl === o ? x.D.show(e.tA) : x.D.U(e.tA),
                this.k.closeControl && this.zf && this.C && this.C.Na() === this.B ? x.D.show(e.zf) : x.D.U(e.zf),
                this.k.forceCloseControl && x.D.show(e.zf)) : (x.D.U(e.zf),
                x.D.U(e.tA))
        }
        this.B = "string" == typeof a ? x.$(a) : a;
        this.ba = Md++;
        this.k = {
            enableScrollWheelZoom: o,
            panoramaRenderer: "flash",
            swfSrc: z.sg("main_domain_nocdn", "res/swf/") + "APILoader.swf",
            visible: o,
            indoorExitControl: o,
            indoorFloorControl: q,
            linksControl: o,
            clickOnRoad: o,
            navigationControl: o,
            closeControl: o,
            indoorSceneSwitchControl: o,
            albumsControl: q,
            albumsControlOptions: {},
            copyrightControlOptions: {},
            forceCloseControl: q,
            haveBreakId: q
        };
        var b = b || {},
            d;
        for (d in b)
            this.k[d] = b[d];
        b.closeControl === o && (this.k.forceCloseControl = o);
        b.useWebGL === q && Na(q);
        this.Da = {
            heading: 0,
            pitch: 0
        };
        this.Xn = [];
        this.Lb = this.Ya = p;
        this.ck = this.Xq();
        this.wa = [];
        this.Jc = 1;
        this.Ie = this.ZS = this.dl = "";
        this.He = {};
        this.Mf = p;
        this.Pg = [];
        this.tr = [];
        "cvsRender" == this.ck || Na() ? (this.Vj = 90,
            this.Xj = -90) : "cssRender" == this.ck && (this.Vj = 45,
            this.Xj = -45);
        this.xr = q;
        var e = this;
        this.Yn = function() {
            this.ck === "flashRender" ? I.load("panoramaflash", function() {
                e.Pi()
            }, o) : I.load("panorama", function() {
                e.yb()
            }, o);
            b.Pf == "api" ? Ra(Da) : Ra(Fa);
            this.Yn = s()
        };
        this.k.MS !== o && (this.Yn(),
            z.An("cus.fire", "count", "z_loadpanoramacount"));
        this.CT(this.B);
        this.addEventListener("id_changed", function() {
            Ra(Ca, {
                from: b.Pf
            })
        });
        this.QP();
        this.addEventListener("indoorexit_options_changed", c);
        this.addEventListener("scene_type_changed", c);
        this.addEventListener("onclose_options_changed", c);
        this.addEventListener("onvisible_changed", c)
    }
    var Nd = 4,
        Od = 1,
        Md = 0;
    x.lang.ua(Oa, x.lang.Ca, "Panorama");
    x.extend(Oa.prototype, {
        QP: function() {
            var a = this,
                b = this.zf = M("div");
            b.className = "pano_close";
            b.style.cssText = "z-index: 1201;display: none";
            b.title = "\u9000\u51fa\u5168\u666f";
            b.onclick = function() {
                a.U()
            };
            this.B.appendChild(b);
            var c = this.tA = M("a");
            c.className = "pano_pc_indoor_exit";
            c.style.cssText = "z-index: 1201;display: none";
            c.innerHTML = '<span style="float:right;margin-right:12px;">\u51fa\u53e3</span>';
            c.title = "\u9000\u51fa\u5ba4\u5185\u666f";
            c.onclick = function() {
                a.Oo()
            };
            this.B.appendChild(c);
            window.ActiveXObject && !document.addEventListener && (b.style.backgroundColor = "rgb(37,37,37)",
                c.style.backgroundColor = "rgb(37,37,37)")
        },
        Oo: s(),
        CT: function(a) {
            var b, c;
            b = a.style;
            c = Wa(a).position;
            "absolute" != c && "relative" != c && (b.position = "relative",
                b.zIndex = 0);
            if ("absolute" === c || "relative" === c)
                if (a = Wa(a).zIndex, !a || "auto" === a)
                    b.zIndex = 0
        },
        iX: u("Xn"),
        Zb: u("Ya"),
        KX: u("Vv"),
        ZN: u("Vv"),
        ha: u("Lb"),
        Ea: u("Da"),
        fa: u("Jc"),
        fh: u("dl"),
        L2: function() {
            return this.c1 || []
        },
        G2: u("ZS"),
        Xs: u("Ie"),
        yy: function(a) {
            a !== this.Ie && (this.Ie = a,
                this.dispatchEvent(new O("onscene_type_changed")))
        },
        rc: function(a, b, c) {
            "object" === typeof b && (c = b,
                b = j);
            a != this.Ya && (this.ol = this.Ya,
                this.pl = this.Lb,
                this.Ya = a,
                this.Ie = b || "street",
                this.Lb = p,
                c && c.pov && this.Mc(c.pov))
        },
        ta: function(a) {
            a.nb(this.Lb) || (this.ol = this.Ya,
                this.pl = this.Lb,
                this.Lb = a,
                this.Ya = p)
        },
        Mc: function(a) {
            a && (this.Da = a,
                a = this.Da.pitch,
                a > this.Vj ? a = this.Vj : a < this.Xj && (a = this.Xj),
                this.xr = o,
                this.Da.pitch = a)
        },
        a_: function(a, b) {
            this.Xj = 0 <= a ? 0 : a;
            this.Vj = 0 >= b ? 0 : b
        },
        Nc: function(a) {
            a != this.Jc && (a > Nd && (a = Nd),
                a < Od && (a = Od),
                a != this.Jc && (this.Jc = a),
                "cssRender" === this.ck && this.Mc(this.Da))
        },
        tB: function() {
            if (this.C)
                for (var a = this.C.tx(), b = 0; b < a.length; b++)
                    (a[b] instanceof T || a[b] instanceof uc) && a[b].point && this.wa.push(a[b])
        },
        rF: ba("C"),
        St: function(a) {
            this.Mf = a || "none"
        },
        Kk: function(a) {
            for (var b in a) {
                if ("object" == typeof a[b])
                    for (var c in a[b])
                        this.k[b][c] = a[b][c];
                else
                    this.k[b] = a[b];
                a.closeControl === o && (this.k.forceCloseControl = o);
                a.closeControl === q && (this.k.forceCloseControl = q);
                switch (b) {
                    case "linksControl":
                        this.dispatchEvent(new O("onlinks_visible_changed"));
                        break;
                    case "clickOnRoad":
                        this.dispatchEvent(new O("onclickonroad_changed"));
                        break;
                    case "navigationControl":
                        this.dispatchEvent(new O("onnavigation_visible_changed"));
                        break;
                    case "indoorSceneSwitchControl":
                        this.dispatchEvent(new O("onindoor_default_switch_mode_changed"));
                        break;
                    case "albumsControl":
                        this.dispatchEvent(new O("onalbums_visible_changed"));
                        break;
                    case "albumsControlOptions":
                        this.dispatchEvent(new O("onalbums_options_changed"));
                        break;
                    case "copyrightControlOptions":
                        this.dispatchEvent(new O("oncopyright_options_changed"));
                        break;
                    case "closeControl":
                        this.dispatchEvent(new O("onclose_options_changed"));
                        break;
                    case "indoorExitControl":
                        this.dispatchEvent(new O("onindoorexit_options_changed"));
                        break;
                    case "indoorFloorControl":
                        this.dispatchEvent(new O("onindoorfloor_options_changed"))
                }
            }
        },
        zk: function() {
            this.xl.style.visibility = "hidden"
        },
        Cy: function() {
            this.xl.style.visibility = "visible"
        },
        wW: function() {
            this.k.enableScrollWheelZoom = o
        },
        hW: function() {
            this.k.enableScrollWheelZoom = q
        },
        show: function() {
            this.k.visible = o
        },
        U: function() {
            this.k.visible = q
        },
        Xq: function() {
            return Va() && !G() && "javascript" !== this.k.panoramaRenderer ? "flashRender" : !G() && Nb() ? "cvsRender" : "cssRender"
        },
        Ja: function(a) {
            this.He[a.hd] = a
        },
        Tb: function(a) {
            delete this.He[a]
        },
        YD: function() {
            return this.k.visible
        },
        eh: function() {
            return new N(this.B.clientWidth, this.B.clientHeight)
        },
        Na: u("B"),
        gL: function() {
            var a = z.sg("baidumap", "?"),
                b = this.Zb();
            if (b) {
                var b = {
                        panotype: this.Xs(),
                        heading: this.Ea().heading,
                        pitch: this.Ea().pitch,
                        pid: b,
                        panoid: b,
                        from: "api"
                    },
                    c;
                for (c in b)
                    a += c + "=" + b[c] + "&"
            }
            return a.slice(0, -1)
        },
        Cx: function() {
            this.Kk({
                copyrightControlOptions: {
                    logoVisible: q
                }
            })
        },
        yF: function() {
            this.Kk({
                copyrightControlOptions: {
                    logoVisible: o
                }
            })
        },
        OB: function(a) {
            function b(a, b) {
                return function() {
                    a.tr.push({
                        NM: b,
                        MM: arguments
                    })
                }
            }
            for (var c = a.getPanoMethodList(), d = "", e = 0, f = c.length; e < f; e++)
                d = c[e],
                this[d] = b(this, d);
            this.Pg.push(a)
        },
        aF: function(a) {
            for (var b = this.Pg.length; b--;)
                this.Pg[b] === a && this.Pg.splice(b, 1)
        },
        qF: s()
    });
    var Pd = Oa.prototype;
    S(Pd, {
        setId: Pd.rc,
        setPosition: Pd.ta,
        setPov: Pd.Mc,
        setZoom: Pd.Nc,
        setOptions: Pd.Kk,
        getId: Pd.Zb,
        getPosition: Pd.ha,
        getPov: Pd.Ea,
        getZoom: Pd.fa,
        getLinks: Pd.iX,
        getBaiduMapUrl: Pd.gL,
        hideMapLogo: Pd.Cx,
        showMapLogo: Pd.yF,
        enableDoubleClickZoom: Pd.a2,
        disableDoubleClickZoom: Pd.O1,
        enableScrollWheelZoom: Pd.wW,
        disableScrollWheelZoom: Pd.hW,
        show: Pd.show,
        hide: Pd.U,
        addPlugin: Pd.OB,
        removePlugin: Pd.aF,
        getVisible: Pd.YD,
        addOverlay: Pd.Ja,
        removeOverlay: Pd.Tb,
        getSceneType: Pd.Xs,
        setPanoramaPOIType: Pd.St,
        exitInter: Pd.Oo,
        setInteractiveState: Pd.qF
    });
    S(window, {
        BMAP_PANORAMA_POI_HOTEL: "hotel",
        BMAP_PANORAMA_POI_CATERING: "catering",
        BMAP_PANORAMA_POI_MOVIE: "movie",
        BMAP_PANORAMA_POI_TRANSIT: "transit",
        BMAP_PANORAMA_POI_INDOOR_SCENE: "indoor_scene",
        BMAP_PANORAMA_POI_NONE: "none",
        BMAP_PANORAMA_INDOOR_SCENE: "inter",
        BMAP_PANORAMA_STREET_SCENE: "street"
    });

    function Qd() {
        x.lang.Ca.call(this);
        this.hd = "PanoramaOverlay_" + this.ba;
        this.P = p;
        this.Qa = o
    }
    x.lang.ua(Qd, x.lang.Ca, "PanoramaOverlayBase");
    x.extend(Qd.prototype, {
        H2: u("hd"),
        ra: function() {
            aa("initialize\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        remove: function() {
            aa("remove\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Lf: function() {
            aa("_setOverlayProperty\u65b9\u6cd5\u672a\u5b9e\u73b0")
        }
    });

    function Rd(a, b) {
        Qd.call(this);
        var c = {
                position: p,
                altitude: 2,
                displayDistance: o
            },
            b = b || {},
            d;
        for (d in b)
            c[d] = b[d];
        this.Lb = c.position;
        this.Lj = a;
        this.qq = c.altitude;
        this.bR = c.displayDistance;
        this.EF = c.color;
        this.QL = c.hoverColor;
        this.backgroundColor = c.backgroundColor;
        this.UJ = c.backgroundHoverColor;
        this.borderColor = c.borderColor;
        this.YJ = c.borderHoverColor;
        this.fontSize = c.fontSize;
        this.padding = c.padding;
        this.dE = c.imageUrl;
        this.size = c.size;
        this.te = c.image;
        this.width = c.width;
        this.height = c.height;
        this.ZX = c.imageData;
        this.borderWidth = c.borderWidth
    }
    x.lang.ua(Rd, Qd, "PanoramaLabel");
    x.extend(Rd.prototype, {
        m2: u("borderWidth"),
        getImageData: u("ZX"),
        vm: u("EF"),
        A2: u("QL"),
        i2: u("backgroundColor"),
        j2: u("UJ"),
        k2: u("borderColor"),
        l2: u("YJ"),
        x2: u("fontSize"),
        I2: u("padding"),
        B2: u("dE"),
        Bb: u("size"),
        jx: u("te"),
        ta: function(a) {
            this.Lb = a;
            this.Lf("position", a)
        },
        ha: u("Lb"),
        ad: function(a) {
            this.Lj = a;
            this.Lf("content", a)
        },
        tk: u("Lj"),
        lF: function(a) {
            this.qq = a;
            this.Lf("altitude", a)
        },
        Ro: u("qq"),
        Ea: function() {
            var a = this.ha(),
                b = p,
                c = p;
            this.P && (c = this.P.ha());
            if (a && c)
                if (a.nb(c))
                    b = this.P.Ea();
                else {
                    b = {};
                    b.heading = Sd(a.lng - c.lng, a.lat - c.lat) || 0;
                    var a = b,
                        c = this.Ro(),
                        d = this.Sn();
                    a.pitch = Math.round(180 * (Math.atan(c / d) / Math.PI)) || 0
                }
            return b
        },
        Sn: function() {
            var a = 0,
                b, c;
            this.P && (b = this.P.ha(),
                (c = this.ha()) && !c.nb(b) && (a = R.To(b, c)));
            return a
        },
        U: function() {
            aa("hide\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        show: function() {
            aa("show\u65b9\u6cd5\u672a\u5b9e\u73b0")
        },
        Lf: s()
    });
    var Td = Rd.prototype;
    S(Td, {
        setPosition: Td.ta,
        getPosition: Td.ha,
        setContent: Td.ad,
        getContent: Td.tk,
        setAltitude: Td.lF,
        getAltitude: Td.Ro,
        getPov: Td.Ea,
        show: Td.show,
        hide: Td.U
    });

    function Ud(a, b) {
        Qd.call(this);
        var c = {
                icon: "",
                title: "",
                panoInfo: p,
                altitude: 2
            },
            b = b || {},
            d;
        for (d in b)
            c[d] = b[d];
        this.Lb = a;
        this.RH = c.icon;
        this.nJ = c.title;
        this.qq = c.altitude;
        this.pT = c.panoInfo;
        this.Da = {
            heading: 0,
            pitch: 0
        }
    }
    x.lang.ua(Ud, Qd, "PanoramaMarker");
    x.extend(Ud.prototype, {
        ta: function(a) {
            this.Lb = a;
            this.Lf("position", a)
        },
        ha: u("Lb"),
        Cc: function(a) {
            this.nJ = a;
            this.Lf("title", a)
        },
        cp: u("nJ"),
        Ub: function(a) {
            this.RH = icon;
            this.Lf("icon", a)
        },
        Uo: u("RH"),
        lF: function(a) {
            this.qq = a;
            this.Lf("altitude", a)
        },
        Ro: u("qq"),
        PD: u("pT"),
        Ea: function() {
            var a = p;
            if (this.P) {
                var a = this.P.ha(),
                    b = this.ha(),
                    a = Sd(b.lng - a.lng, b.lat - a.lat);
                isNaN(a) && (a = 0);
                a = {
                    heading: a,
                    pitch: 0
                }
            } else
                a = this.Da;
            return a
        },
        Lf: s()
    });
    var Vd = Ud.prototype;
    S(Vd, {
        setPosition: Vd.ta,
        getPosition: Vd.ha,
        setTitle: Vd.Cc,
        getTitle: Vd.cp,
        setAltitude: Vd.lF,
        getAltitude: Vd.Ro,
        getPanoInfo: Vd.PD,
        getIcon: Vd.Uo,
        setIcon: Vd.Ub,
        getPov: Vd.Ea
    });

    function Sd(a, b) {
        var c = 0;
        if (0 !== a && 0 !== b) {
            var c = 180 * (Math.atan(a / b) / Math.PI),
                d = 0;
            0 < a && 0 > b && (d = 90);
            0 > a && 0 > b && (d = 180);
            0 > a && 0 < b && (d = 270);
            c = (c + 90) % 90 + d
        } else
            0 === a ? c = 0 > b ? 180 : 0 : 0 === b && (c = 0 < a ? 90 : 270);
        return Math.round(c)
    }

    function Na(a) {
        if ("boolean" === typeof Wd)
            return Wd;
        if (a === q || !window.WebGLRenderingContext || x.platform.Fm && -1 == navigator.userAgent.indexOf("Android 5"))
            return Wd = q;
        var a = document.createElement("canvas"),
            b = p;
        try {
            b = a.getContext("webgl")
        } catch (c) {
            Wd = q
        }
        return Wd = b === p ? q : o
    }
    var Wd;

    function Xd() {
        if ("boolean" === typeof Yd)
            return Yd;
        Yd = o;
        if (x.platform.mE)
            return o;
        var a = navigator.userAgent;
        return -1 < a.indexOf("Chrome") || -1 < a.indexOf("SAMSUNG-GT-I9508") ? o : Yd = q
    }
    var Yd;

    function cc(a, b) {
        this.P = a || p;
        var c = this;
        c.P && c.ca();
        I.load("pservice", function() {
            c.uQ()
        });
        "api" == (b || {}).Pf ? Ra(Ga) : Ra(Ha);
        this.vd = {
            getPanoramaById: [],
            getPanoramaByLocation: [],
            getVisiblePOIs: [],
            getRecommendPanosById: [],
            getPanoramaVersions: [],
            checkPanoSupportByCityCode: [],
            getPanoramaByPOIId: [],
            getCopyrightProviders: []
        }
    }
    z.Rm(function(a) {
        "flashRender" !== a.Xq() && new cc(a, {
            Pf: "api"
        })
    });
    x.extend(cc.prototype, {
        ca: function() {
            function a(a) {
                if (a) {
                    if (a.id != b.Vv) {
                        b.ZN(a.id);
                        b.ea = a;
                        Xd() || b.dispatchEvent(new O("onthumbnail_complete"));
                        b.Ya != p && (b.pl = b._position);
                        for (var c in a)
                            if (a.hasOwnProperty(c))
                                switch (b["_" + c] = a[c],
                                    c) {
                                    case "position":
                                        b.Lb = a[c];
                                        break;
                                    case "id":
                                        b.Ya = a[c];
                                        break;
                                    case "links":
                                        b.Xn = a[c];
                                        break;
                                    case "zoom":
                                        b.Jc = a[c]
                                }
                        if (b.pl) {
                            var f = b.pl,
                                g = b._position;
                            c = f.lat;
                            var i = g.lat,
                                k = Ob(i - c),
                                f = Ob(g.lng - f.lng);
                            c = Math.sin(k / 2) * Math.sin(k / 2) + Math.cos(Ob(c)) * Math.cos(Ob(i)) * Math.sin(f / 2) * Math.sin(f / 2);
                            b.fH = 6371E3 * 2 * Math.atan2(Math.sqrt(c), Math.sqrt(1 - c))
                        }
                        c = new O("ondataload");
                        c.data = a;
                        b.dispatchEvent(c);
                        b.dispatchEvent(new O("onposition_changed"));
                        b.dispatchEvent(new O("onlinks_changed"));
                        b.dispatchEvent(new O("oncopyright_changed"), {
                            copyright: a.copyright
                        });
                        a.Zl && b.k.closeControl ? x.D.show(b.xR) : x.D.U(b.xR)
                    }
                } else
                    b.Ya = b.ol,
                    b.Lb = b.pl,
                    b.dispatchEvent(new O("onnoresult"))
            }
            var b = this.P,
                c = this;
            b.addEventListener("id_changed", function() {
                c.Zo(b.Zb(), a)
            });
            b.addEventListener("iid_changed", function() {
                c.Qg(cc.$k + "qt=idata&iid=" + b.pA + "&fn=", function(b) {
                    if (b && b.result && 0 == b.result.error) {
                        var b = b.content[0].interinfo,
                            e = {};
                        e.Zl = b.BreakID;
                        for (var f = b.Defaultfloor, g = p, i = 0; i < b.Floors.length; i++)
                            if (b.Floors[i].Floor == f) {
                                g = b.Floors[i];
                                break
                            }
                        e.id = g.StartID || g.Points[0].PID;
                        c.Zo(e.id, a, e)
                    }
                })
            });
            b.addEventListener("position_changed_inner", function() {
                c.pj(b.ha(), a)
            })
        },
        Zo: function(a, b) {
            this.vd.getPanoramaById.push(arguments)
        },
        pj: function(a, b, c) {
            this.vd.getPanoramaByLocation.push(arguments)
        },
        ZD: function(a, b, c, d) {
            this.vd.getVisiblePOIs.push(arguments)
        },
        wx: function(a, b) {
            this.vd.getRecommendPanosById.push(arguments)
        },
        vx: function(a) {
            this.vd.getPanoramaVersions.push(arguments)
        },
        bC: function(a, b) {
            this.vd.checkPanoSupportByCityCode.push(arguments)
        },
        ux: function(a, b) {
            this.vd.getPanoramaByPOIId.push(arguments)
        },
        lL: function(a) {
            this.vd.getCopyrightProviders.push(arguments)
        }
    });
    var Zd = cc.prototype;
    S(Zd, {
        getPanoramaById: Zd.Zo,
        getPanoramaByLocation: Zd.pj,
        getPanoramaByPOIId: Zd.ux
    });

    function bc(a) {
        Hc.call(this);
        "api" == (a || {}).Pf ? Ra(za) : Ra(Ba)
    }
    bc.xG = z.sg("pano", "tile/");
    bc.prototype = new Hc;
    bc.prototype.getTilesUrl = function(a, b) {
        var c = bc.xG[(a.x + a.y) % bc.xG.length] + "?udt=20150114&qt=tile&styles=pl&x=" + a.x + "&y=" + a.y + "&z=" + b;
        x.da.la && 6 >= x.da.la && (c += "&color_dep=32");
        return c
    };
    bc.prototype.mt = ca(o);
    $d.Ud = new R;

    function $d() {}
    x.extend($d, {
        iW: function(a, b, c) {
            c = x.lang.Kc(c);
            b = {
                data: b
            };
            "position_changed" == a && (b.data = $d.Ud.zj(new Q(b.data.mercatorX, b.data.mercatorY)));
            c.dispatchEvent(new O("on" + a), b)
        }
    });
    var ae = $d;
    S(ae, {
        dispatchFlashEvent: ae.iW
    });
    var be = {
        nP: 50
    };
    be.Eu = z.sg("pano")[0];
    be.Au = {
        width: 220,
        height: 60
    };
    x.extend(be, {
        jp: function(a, b, c, d) {
            if (!b || !c || !c.lngLat || !c.panoInstance)
                d();
            else {
                this.co === j && (this.co = new cc(p, {
                    Pf: "api"
                }));
                var e = this;
                this.co.bC(b, function(b) {
                    b ? e.co.pj(c.lngLat, be.nP, function(b) {
                        if (b && b.id) {
                            var f = b.id,
                                k = b.th,
                                b = b.uh,
                                l = cc.Ud.lh(c.lngLat),
                                m = e.cS(l, {
                                    x: k,
                                    y: b
                                }),
                                k = e.vL(f, m, 0, be.Au.width, be.Au.height);
                            a.content = e.dS(a.content, k, c.titleTip, c.beforeDomId);
                            a.addEventListener("open", function() {
                                ja.M(x.Dc("infoWndPano"), "click", function() {
                                    c.panoInstance.rc(f);
                                    c.panoInstance.show();
                                    c.panoInstance.Mc({
                                        heading: m,
                                        pitch: 0
                                    })
                                })
                            })
                        }
                        d()
                    }) : d()
                })
            }
        },
        dS: function(a, b, c, d) {
            var c = c || "",
                e;
            !d || !a.split(d)[0] ? (d = a,
                a = "") : (d = a.split(d)[0],
                e = d.lastIndexOf("<"),
                d = a.substring(0, e),
                a = a.substring(e));
            e = [];
            var f = be.Au.width,
                g = be.Au.height;
            e.push(d);
            e.push("<div id='infoWndPano' class='panoInfoBox' style='height:" + g + "px;width:" + f + "px; margin-top: -19px;'>");
            e.push("<img class='pano_thumnail_img' width='" + f + "' height='" + g + "' border='0' alt='" + c + "\u5916\u666f' title='" + c + "\u5916\u666f' src='" + b + "' onerror='Pano.PanoEntranceUtil.thumbnailNotFound(this, " + f + ", " + g + ");' />");
            e.push("<div class='panoInfoBoxTitleBg' style='width:" + f + "px;'></div><a href='javascript:void(0)' class='panoInfoBoxTitleContent' >\u8fdb\u5165\u5168\u666f&gt;&gt;</a>");
            e.push("</div>");
            e.push(a);
            return e.join("")
        },
        cS: function(a, b) {
            var c = 90 - 180 * Math.atan2(a.y - b.y, a.x - b.x) / Math.PI;
            0 > c && (c += 360);
            return c
        },
        vL: function(a, b, c, d, e) {
            var f = {
                panoId: a,
                panoHeading: b || 0,
                panoPitch: c || 0,
                width: d,
                height: e
            };
            return (be.Eu + "?qt=pr3d&fovy=75&quality=80&panoid={panoId}&heading={panoHeading}&pitch={panoPitch}&width={width}&height={height}").replace(/\{(.*?)\}/g, function(a, b) {
                return f[b]
            })
        }
    });
    var ce = document,
        de = Math,
        ee = ce.createElement("div").style,
        fe;
    a: {
        for (var ge = ["t", "webkitT", "MozT", "msT", "OT"], he, ie = 0, je = ge.length; ie < je; ie++)
            if (he = ge[ie] + "ransform",
                he in ee) {
                fe = ge[ie].substr(0, ge[ie].length - 1);
                break a
            }
        fe = q
    }
    var ke = fe ? "-" + fe.toLowerCase() + "-" : "",
        ne = le("transform"),
        oe = le("transitionProperty"),
        ue = le("transitionDuration"),
        ve = le("transformOrigin"),
        we = le("transitionTimingFunction"),
        xe = le("transitionDelay"),
        Ed = /android/gi.test(navigator.appVersion),
        ye = /iphone|ipad/gi.test(navigator.appVersion),
        ze = /hp-tablet/gi.test(navigator.appVersion),
        Ae = le("perspective") in ee,
        Be = "ontouchstart" in window && !ze,
        Ce = fe !== q,
        De = le("transition") in ee,
        Ee = "onorientationchange" in window ? "orientationchange" : "resize",
        Fe = Be ? "touchstart" : "mousedown",
        Ge = Be ? "touchmove" : "mousemove",
        He = Be ? "touchend" : "mouseup",
        Ie = Be ? "touchcancel" : "mouseup",
        Je = fe === q ? q : {
            "": "transitionend",
            webkit: "webkitTransitionEnd",
            Moz: "transitionend",
            O: "otransitionend",
            ms: "MSTransitionEnd"
        }[fe],
        Ke = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(a) {
            return setTimeout(a, 1)
        },
        Le = window.cancelRequestAnimationFrame || window.K4 || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout,
        Me = Ae ? " translateZ(0)" : "";

    function Ne(a, b) {
        var c = this,
            d;
        c.tn = "object" == typeof a ? a : ce.getElementById(a);
        c.tn.style.overflow = "hidden";
        c.Ob = c.tn.children[0];
        c.options = {
            gp: o,
            nn: o,
            x: 0,
            y: 0,
            zo: o,
            iV: q,
            Vx: o,
            BE: o,
            Tk: o,
            Ai: q,
            E_: 0,
            Cw: q,
            zx: o,
            mi: o,
            Bi: o,
            pD: Ed,
            Dx: ye,
            DW: ye && Ae,
            iF: "",
            zoom: q,
            Vk: 1,
            Wp: 4,
            kW: 2,
            TO: "scroll",
            au: q,
            Fy: 1,
            gN: p,
            ZM: function(a) {
                a.preventDefault()
            },
            jN: p,
            YM: p,
            iN: p,
            XM: p,
            ay: p,
            kN: p,
            bN: p,
            vp: p,
            lN: p,
            up: p
        };
        for (d in b)
            c.options[d] = b[d];
        c.x = c.options.x;
        c.y = c.options.y;
        c.options.Tk = Ce && c.options.Tk;
        c.options.mi = c.options.gp && c.options.mi;
        c.options.Bi = c.options.nn && c.options.Bi;
        c.options.zoom = c.options.Tk && c.options.zoom;
        c.options.Ai = De && c.options.Ai;
        c.options.zoom && Ed && (Me = "");
        c.Ob.style[oe] = c.options.Tk ? ke + "transform" : "top left";
        c.Ob.style[ue] = "0";
        c.Ob.style[ve] = "0 0";
        c.options.Ai && (c.Ob.style[we] = "cubic-bezier(0.33,0.66,0.66,1)");
        c.options.Tk ? c.Ob.style[ne] = "translate(" + c.x + "px," + c.y + "px)" + Me : c.Ob.style.cssText += ";position:absolute;top:" + c.y + "px;left:" + c.x + "px";
        c.options.Ai && (c.options.pD = o);
        c.refresh();
        c.ca(Ee, window);
        c.ca(Fe);
        !Be && "none" != c.options.TO && (c.ca("DOMMouseScroll"),
            c.ca("mousewheel"));
        c.options.Cw && (c.tV = setInterval(function() {
            c.rQ()
        }, 500));
        this.options.zx && (Event.prototype.stopImmediatePropagation || (document.body.removeEventListener = function(a, b, c) {
                    var d = Node.prototype.removeEventListener;
                    a === "click" ? d.call(document.body, a, b.OL || b, c) : d.call(document.body, a, b, c)
                },
                document.body.addEventListener = function(a, b, c) {
                    var d = Node.prototype.addEventListener;
                    a === "click" ? d.call(document.body, a, b.OL || (b.OL = function(a) {
                        a.jZ || b(a)
                    }), c) : d.call(document.body, a, b, c)
                }
            ),
            c.ca("click", document.body, o))
    }
    Ne.prototype = {
        enabled: o,
        x: 0,
        y: 0,
        Aj: [],
        scale: 1,
        wC: 0,
        xC: 0,
        Se: [],
        uf: [],
        TB: p,
        Py: 0,
        handleEvent: function(a) {
            switch (a.type) {
                case Fe:
                    if (!Be && 0 !== a.button)
                        break;
                    this.Ov(a);
                    break;
                case Ge:
                    this.aT(a);
                    break;
                case He:
                case Ie:
                    this.$u(a);
                    break;
                case Ee:
                    this.mB();
                    break;
                case "DOMMouseScroll":
                case "mousewheel":
                    this.EU(a);
                    break;
                case Je:
                    this.AU(a);
                    break;
                case "click":
                    this.CQ(a)
            }
        },
        rQ: function() {
            !this.ph && (!this.Wk && !(this.Vl || this.vy == this.Ob.offsetWidth * this.scale && this.Fp == this.Ob.offsetHeight * this.scale)) && this.refresh()
        },
        Fv: function(a) {
            var b;
            this[a + "Scrollbar"] ? (this[a + "ScrollbarWrapper"] || (b = ce.createElement("div"),
                    this.options.iF ? b.className = this.options.iF + a.toUpperCase() : b.style.cssText = "position:absolute;z-index:100;" + ("h" == a ? "height:7px;bottom:1px;left:2px;right:" + (this.Bi ? "7" : "2") + "px" : "width:7px;bottom:" + (this.mi ? "7" : "2") + "px;top:2px;right:1px"),
                    b.style.cssText += ";pointer-events:none;" + ke + "transition-property:opacity;" + ke + "transition-duration:" + (this.options.DW ? "350ms" : "0") + ";overflow:hidden;opacity:" + (this.options.Dx ? "0" : "1"),
                    this.tn.appendChild(b),
                    this[a + "ScrollbarWrapper"] = b,
                    b = ce.createElement("div"),
                    this.options.iF || (b.style.cssText = "position:absolute;z-index:100;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);" + ke + "background-clip:padding-box;" + ke + "box-sizing:border-box;" + ("h" == a ? "height:100%" : "width:100%") + ";" + ke + "border-radius:3px;border-radius:3px"),
                    b.style.cssText += ";pointer-events:none;" + ke + "transition-property:" + ke + "transform;" + ke + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1);" + ke + "transition-duration:0;" + ke + "transform: translate(0,0)" + Me,
                    this.options.Ai && (b.style.cssText += ";" + ke + "transition-timing-function:cubic-bezier(0.33,0.66,0.66,1)"),
                    this[a + "ScrollbarWrapper"].appendChild(b),
                    this[a + "ScrollbarIndicator"] = b),
                "h" == a ? (this.LL = this.ML.clientWidth,
                    this.SX = de.max(de.round(this.LL * this.LL / this.vy), 8),
                    this.RX.style.width = this.SX + "px") : (this.KO = this.LO.clientHeight,
                    this.Z_ = de.max(de.round(this.KO * this.KO / this.Fp), 8),
                    this.Y_.style.height = this.Z_ + "px"),
                this.nB(a, o)) : this[a + "ScrollbarWrapper"] && (Ce && (this[a + "ScrollbarIndicator"].style[ne] = ""),
                this[a + "ScrollbarWrapper"].parentNode.removeChild(this[a + "ScrollbarWrapper"]),
                this[a + "ScrollbarWrapper"] = p,
                this[a + "ScrollbarIndicator"] = p)
        },
        mB: function() {
            var a = this;
            setTimeout(function() {
                a.refresh()
            }, Ed ? 200 : 0)
        },
        wr: function(a, b) {
            this.Wk || (a = this.gp ? a : 0,
                b = this.nn ? b : 0,
                this.options.Tk ? this.Ob.style[ne] = "translate(" + a + "px," + b + "px) scale(" + this.scale + ")" + Me : (a = de.round(a),
                    b = de.round(b),
                    this.Ob.style.left = a + "px",
                    this.Ob.style.top = b + "px"),
                this.x = a,
                this.y = b,
                this.nB("h"),
                this.nB("v"))
        },
        nB: function(a, b) {
            var c = "h" == a ? this.x : this.y;
            this[a + "Scrollbar"] && (c *= this[a + "ScrollbarProp"],
                0 > c ? (this.options.pD || (c = this[a + "ScrollbarIndicatorSize"] + de.round(3 * c),
                        8 > c && (c = 8),
                        this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px"),
                    c = 0) : c > this[a + "ScrollbarMaxScroll"] && (this.options.pD ? c = this[a + "ScrollbarMaxScroll"] : (c = this[a + "ScrollbarIndicatorSize"] - de.round(3 * (c - this[a + "ScrollbarMaxScroll"])),
                    8 > c && (c = 8),
                    this[a + "ScrollbarIndicator"].style["h" == a ? "width" : "height"] = c + "px",
                    c = this[a + "ScrollbarMaxScroll"] + (this[a + "ScrollbarIndicatorSize"] - c))),
                this[a + "ScrollbarWrapper"].style[xe] = "0",
                this[a + "ScrollbarWrapper"].style.opacity = b && this.options.Dx ? "0" : "1",
                this[a + "ScrollbarIndicator"].style[ne] = "translate(" + ("h" == a ? c + "px,0)" : "0," + c + "px)") + Me)
        },
        CQ: function(a) {
            if (a.yR === o)
                return this.LB = a.target,
                    this.ax = Date.now(),
                    o;
            if (this.LB && this.ax) {
                if (600 < Date.now() - this.ax)
                    return this.ax = this.LB = p,
                        o
            } else {
                for (var b = a.target; b != this.Ob && b != document.body;)
                    b = b.parentNode;
                if (b == document.body)
                    return o
            }
            for (b = a.target; 1 != b.nodeType;)
                b = b.parentNode;
            b = b.tagName.toLowerCase();
            if ("select" != b && "input" != b && "textarea" != b)
                return a.stopImmediatePropagation ? a.stopImmediatePropagation() : a.jZ = o,
                    a.stopPropagation(),
                    a.preventDefault(),
                    this.ax = this.LB = p,
                    q
        },
        Ov: function(a) {
            var b = Be ? a.touches[0] : a,
                c, d;
            if (this.enabled) {
                this.options.ZM && this.options.ZM.call(this, a);
                (this.options.Ai || this.options.zoom) && this.oJ(0);
                this.Wk = this.Vl = this.ph = q;
                this.GC = this.FC = this.gw = this.fw = this.MC = this.LC = 0;
                this.options.zoom && (Be && 1 < a.touches.length) && (d = de.abs(a.touches[0].pageX - a.touches[1].pageX),
                    c = de.abs(a.touches[0].pageY - a.touches[1].pageY),
                    this.G_ = de.sqrt(d * d + c * c),
                    this.dy = de.abs(a.touches[0].pageX + a.touches[1].pageX - 2 * this.TF) / 2 - this.x,
                    this.ey = de.abs(a.touches[0].pageY + a.touches[1].pageY - 2 * this.UF) / 2 - this.y,
                    this.options.vp && this.options.vp.call(this, a));
                if (this.options.Vx && (this.options.Tk ? (c = getComputedStyle(this.Ob, p)[ne].replace(/[^0-9\-.,]/g, "").split(","),
                            d = +(c[12] || c[4]),
                            c = +(c[13] || c[5])) : (d = +getComputedStyle(this.Ob, p).left.replace(/[^0-9-]/g, ""),
                            c = +getComputedStyle(this.Ob, p).top.replace(/[^0-9-]/g, "")),
                        d != this.x || c != this.y))
                    this.options.Ai ? this.Wd(Je) : Le(this.TB),
                    this.Aj = [],
                    this.wr(d, c),
                    this.options.ay && this.options.ay.call(this);
                this.hw = this.x;
                this.jw = this.y;
                this.du = this.x;
                this.eu = this.y;
                this.th = b.pageX;
                this.uh = b.pageY;
                this.startTime = a.timeStamp || Date.now();
                this.options.jN && this.options.jN.call(this, a);
                this.ca(Ge, window);
                this.ca(He, window);
                this.ca(Ie, window)
            }
        },
        aT: function(a) {
            var b = Be ? a.touches[0] : a,
                c = b.pageX - this.th,
                d = b.pageY - this.uh,
                e = this.x + c,
                f = this.y + d,
                g = a.timeStamp || Date.now();
            this.options.YM && this.options.YM.call(this, a);
            if (this.options.zoom && Be && 1 < a.touches.length)
                e = de.abs(a.touches[0].pageX - a.touches[1].pageX),
                f = de.abs(a.touches[0].pageY - a.touches[1].pageY),
                this.F_ = de.sqrt(e * e + f * f),
                this.Wk = o,
                b = 1 / this.G_ * this.F_ * this.scale,
                b < this.options.Vk ? b = 0.5 * this.options.Vk * Math.pow(2, b / this.options.Vk) : b > this.options.Wp && (b = 2 * this.options.Wp * Math.pow(0.5, this.options.Wp / b)),
                this.op = b / this.scale,
                e = this.dy - this.dy * this.op + this.x,
                f = this.ey - this.ey * this.op + this.y,
                this.Ob.style[ne] = "translate(" + e + "px," + f + "px) scale(" + b + ")" + Me,
                this.options.lN && this.options.lN.call(this, a);
            else {
                this.th = b.pageX;
                this.uh = b.pageY;
                if (0 < e || e < this.fe)
                    e = this.options.zo ? this.x + c / 2 : 0 <= e || 0 <= this.fe ? 0 : this.fe;
                if (f > this.rf || f < this.nd)
                    f = this.options.zo ? this.y + d / 2 : f >= this.rf || 0 <= this.nd ? this.rf : this.nd;
                this.LC += c;
                this.MC += d;
                this.fw = de.abs(this.LC);
                this.gw = de.abs(this.MC);
                6 > this.fw && 6 > this.gw || (this.options.BE && (this.fw > this.gw + 5 ? (f = this.y,
                        d = 0) : this.gw > this.fw + 5 && (e = this.x,
                        c = 0)),
                    this.ph = o,
                    this.wr(e, f),
                    this.FC = 0 < c ? -1 : 0 > c ? 1 : 0,
                    this.GC = 0 < d ? -1 : 0 > d ? 1 : 0,
                    300 < g - this.startTime && (this.startTime = g,
                        this.du = this.x,
                        this.eu = this.y),
                    this.options.iN && this.options.iN.call(this, a))
            }
        },
        $u: function(a) {
            if (!(Be && 0 !== a.touches.length)) {
                var b = this,
                    c = Be ? a.changedTouches[0] : a,
                    d, e, f = {
                        Ba: 0,
                        time: 0
                    },
                    g = {
                        Ba: 0,
                        time: 0
                    },
                    i = (a.timeStamp || Date.now()) - b.startTime;
                d = b.x;
                e = b.y;
                b.Wd(Ge, window);
                b.Wd(He, window);
                b.Wd(Ie, window);
                b.options.XM && b.options.XM.call(b, a);
                if (b.Wk)
                    d = b.scale * b.op,
                    d = Math.max(b.options.Vk, d),
                    d = Math.min(b.options.Wp, d),
                    b.op = d / b.scale,
                    b.scale = d,
                    b.x = b.dy - b.dy * b.op + b.x,
                    b.y = b.ey - b.ey * b.op + b.y,
                    b.Ob.style[ue] = "200ms",
                    b.Ob.style[ne] = "translate(" + b.x + "px," + b.y + "px) scale(" + b.scale + ")" + Me,
                    b.Wk = q,
                    b.refresh(),
                    b.options.up && b.options.up.call(b, a);
                else {
                    if (b.ph) {
                        if (300 > i && b.options.Vx) {
                            f = d ? b.lI(d - b.du, i, -b.x, b.vy - b.su + b.x, b.options.zo ? b.su : 0) : f;
                            g = e ? b.lI(e - b.eu, i, -b.y, 0 > b.nd ? b.Fp - b.vn + b.y - b.rf : 0, b.options.zo ? b.vn : 0) : g;
                            d = b.x + f.Ba;
                            e = b.y + g.Ba;
                            if (0 < b.x && 0 < d || b.x < b.fe && d < b.fe)
                                f = {
                                    Ba: 0,
                                    time: 0
                                };
                            if (b.y > b.rf && e > b.rf || b.y < b.nd && e < b.nd)
                                g = {
                                    Ba: 0,
                                    time: 0
                                }
                        }
                        f.Ba || g.Ba ? (c = de.max(de.max(f.time, g.time), 10),
                            b.options.au && (f = d - b.hw,
                                g = e - b.jw,
                                de.abs(f) < b.options.Fy && de.abs(g) < b.options.Fy ? b.scrollTo(b.hw, b.jw, 200) : (f = b.fJ(d, e),
                                    d = f.x,
                                    e = f.y,
                                    c = de.max(f.time, c))),
                            b.scrollTo(de.round(d), de.round(e), c)) : b.options.au ? (f = d - b.hw,
                            g = e - b.jw,
                            de.abs(f) < b.options.Fy && de.abs(g) < b.options.Fy ? b.scrollTo(b.hw, b.jw, 200) : (f = b.fJ(b.x, b.y),
                                (f.x != b.x || f.y != b.y) && b.scrollTo(f.x, f.y, f.time))) : b.fo(200)
                    } else {
                        if (Be)
                            if (b.EK && b.options.zoom)
                                clearTimeout(b.EK),
                                b.EK = p,
                                b.options.vp && b.options.vp.call(b, a),
                                b.zoom(b.th, b.uh, 1 == b.scale ? b.options.kW : 1),
                                b.options.up && setTimeout(function() {
                                    b.options.up.call(b, a)
                                }, 200);
                            else if (this.options.zx) {
                            for (d = c.target; 1 != d.nodeType;)
                                d = d.parentNode;
                            e = d.tagName.toLowerCase();
                            "select" != e && "input" != e && "textarea" != e ? (e = ce.createEvent("MouseEvents"),
                                e.initMouseEvent("click", o, o, a.view, 1, c.screenX, c.screenY, c.clientX, c.clientY, a.ctrlKey, a.altKey, a.shiftKey, a.metaKey, 0, p),
                                e.yR = o,
                                d.dispatchEvent(e)) : d.focus()
                        }
                        b.fo(400)
                    }
                    b.options.kN && b.options.kN.call(b, a)
                }
            }
        },
        fo: function(a) {
            var b = 0 <= this.x ? 0 : this.x < this.fe ? this.fe : this.x,
                c = this.y >= this.rf || 0 < this.nd ? this.rf : this.y < this.nd ? this.nd : this.y;
            if (b == this.x && c == this.y) {
                if (this.ph && (this.ph = q,
                        this.options.ay && this.options.ay.call(this)),
                    this.mi && this.options.Dx && ("webkit" == fe && (this.ML.style[xe] = "300ms"),
                        this.ML.style.opacity = "0"),
                    this.Bi && this.options.Dx)
                    "webkit" == fe && (this.LO.style[xe] = "300ms"),
                    this.LO.style.opacity = "0"
            } else
                this.scrollTo(b, c, a || 0)
        },
        EU: function(a) {
            var b = this,
                c, d;
            if ("wheelDeltaX" in a)
                c = a.wheelDeltaX / 12,
                d = a.wheelDeltaY / 12;
            else if ("wheelDelta" in a)
                c = d = a.wheelDelta / 12;
            else if ("detail" in a)
                c = d = 3 * -a.detail;
            else
                return;
            if ("zoom" == b.options.TO) {
                if (d = b.scale * Math.pow(2, 1 / 3 * (d ? d / Math.abs(d) : 0)),
                    d < b.options.Vk && (d = b.options.Vk),
                    d > b.options.Wp && (d = b.options.Wp),
                    d != b.scale)
                    !b.Py && b.options.vp && b.options.vp.call(b, a),
                    b.Py++,
                    b.zoom(a.pageX, a.pageY, d, 400),
                    setTimeout(function() {
                        b.Py--;
                        !b.Py && b.options.up && b.options.up.call(b, a)
                    }, 400)
            } else
                c = b.x + c,
                d = b.y + d,
                0 < c ? c = 0 : c < b.fe && (c = b.fe),
                d > b.rf ? d = b.rf : d < b.nd && (d = b.nd),
                0 > b.nd && b.scrollTo(c, d, 0)
        },
        AU: function(a) {
            a.target == this.Ob && (this.Wd(Je),
                this.zB())
        },
        zB: function() {
            var a = this,
                b = a.x,
                c = a.y,
                d = Date.now(),
                e, f, g;
            a.Vl || (a.Aj.length ? (e = a.Aj.shift(),
                e.x == b && e.y == c && (e.time = 0),
                a.Vl = o,
                a.ph = o,
                a.options.Ai) ? (a.oJ(e.time),
                a.wr(e.x, e.y),
                a.Vl = q,
                e.time ? a.ca(Je) : a.fo(0)) : (g = function() {
                    var i = Date.now(),
                        k;
                    if (i >= d + e.time) {
                        a.wr(e.x, e.y);
                        a.Vl = q;
                        a.options.SY && a.options.SY.call(a);
                        a.zB()
                    } else {
                        i = (i - d) / e.time - 1;
                        f = de.sqrt(1 - i * i);
                        i = (e.x - b) * f + b;
                        k = (e.y - c) * f + c;
                        a.wr(i, k);
                        if (a.Vl)
                            a.TB = Ke(g)
                    }
                },
                g()) : a.fo(400))
        },
        oJ: function(a) {
            a += "ms";
            this.Ob.style[ue] = a;
            this.mi && (this.RX.style[ue] = a);
            this.Bi && (this.Y_.style[ue] = a)
        },
        lI: function(a, b, c, d, e) {
            var b = de.abs(a) / b,
                f = b * b / 0.0012;
            0 < a && f > c ? (c += e / (6 / (6.0E-4 * (f / b))),
                b = b * c / f,
                f = c) : 0 > a && f > d && (d += e / (6 / (6.0E-4 * (f / b))),
                b = b * d / f,
                f = d);
            return {
                Ba: f * (0 > a ? -1 : 1),
                time: de.round(b / 6.0E-4)
            }
        },
        Zj: function(a) {
            for (var b = -a.offsetLeft, c = -a.offsetTop; a = a.offsetParent;)
                b -= a.offsetLeft,
                c -= a.offsetTop;
            a != this.tn && (b *= this.scale,
                c *= this.scale);
            return {
                left: b,
                top: c
            }
        },
        fJ: function(a, b) {
            var c, d, e;
            e = this.Se.length - 1;
            c = 0;
            for (d = this.Se.length; c < d; c++)
                if (a >= this.Se[c]) {
                    e = c;
                    break
                }
            e == this.wC && (0 < e && 0 > this.FC) && e--;
            a = this.Se[e];
            d = (d = de.abs(a - this.Se[this.wC])) ? 500 * (de.abs(this.x - a) / d) : 0;
            this.wC = e;
            e = this.uf.length - 1;
            for (c = 0; c < e; c++)
                if (b >= this.uf[c]) {
                    e = c;
                    break
                }
            e == this.xC && (0 < e && 0 > this.GC) && e--;
            b = this.uf[e];
            c = (c = de.abs(b - this.uf[this.xC])) ? 500 * (de.abs(this.y - b) / c) : 0;
            this.xC = e;
            e = de.round(de.max(d, c)) || 200;
            return {
                x: a,
                y: b,
                time: e
            }
        },
        ca: function(a, b, c) {
            (b || this.Ob).addEventListener(a, this, !!c)
        },
        Wd: function(a, b, c) {
            (b || this.Ob).removeEventListener(a, this, !!c)
        },
        CC: ha(2),
        refresh: function() {
            var a, b, c, d = 0;
            b = 0;
            this.scale < this.options.Vk && (this.scale = this.options.Vk);
            this.su = this.tn.clientWidth || 1;
            this.vn = this.tn.clientHeight || 1;
            this.rf = -this.options.E_ || 0;
            this.vy = de.round(this.Ob.offsetWidth * this.scale);
            this.Fp = de.round((this.Ob.offsetHeight + this.rf) * this.scale);
            this.fe = this.su - this.vy;
            this.nd = this.vn - this.Fp + this.rf;
            this.GC = this.FC = 0;
            this.options.gN && this.options.gN.call(this);
            this.gp = this.options.gp && 0 > this.fe;
            this.nn = this.options.nn && (!this.options.iV && !this.gp || this.Fp > this.vn);
            this.mi = this.gp && this.options.mi;
            this.Bi = this.nn && this.options.Bi && this.Fp > this.vn;
            a = this.Zj(this.tn);
            this.TF = -a.left;
            this.UF = -a.top;
            if ("string" == typeof this.options.au) {
                this.Se = [];
                this.uf = [];
                c = this.Ob.querySelectorAll(this.options.au);
                a = 0;
                for (b = c.length; a < b; a++)
                    d = this.Zj(c[a]),
                    d.left += this.TF,
                    d.top += this.UF,
                    this.Se[a] = d.left < this.fe ? this.fe : d.left * this.scale,
                    this.uf[a] = d.top < this.nd ? this.nd : d.top * this.scale
            } else if (this.options.au) {
                for (this.Se = []; d >= this.fe;)
                    this.Se[b] = d,
                    d -= this.su,
                    b++;
                this.fe % this.su && (this.Se[this.Se.length] = this.fe - this.Se[this.Se.length - 1] + this.Se[this.Se.length - 1]);
                b = d = 0;
                for (this.uf = []; d >= this.nd;)
                    this.uf[b] = d,
                    d -= this.vn,
                    b++;
                this.nd % this.vn && (this.uf[this.uf.length] = this.nd - this.uf[this.uf.length - 1] + this.uf[this.uf.length - 1])
            }
            this.Fv("h");
            this.Fv("v");
            this.Wk || (this.Ob.style[ue] = "0",
                this.fo(400))
        },
        scrollTo: function(a, b, c, d) {
            var e = a;
            this.stop();
            e.length || (e = [{
                x: a,
                y: b,
                time: c,
                lZ: d
            }]);
            a = 0;
            for (b = e.length; a < b; a++)
                e[a].lZ && (e[a].x = this.x - e[a].x,
                    e[a].y = this.y - e[a].y),
                this.Aj.push({
                    x: e[a].x,
                    y: e[a].y,
                    time: e[a].time || 0
                });
            this.zB()
        },
        disable: function() {
            this.stop();
            this.fo(0);
            this.enabled = q;
            this.Wd(Ge, window);
            this.Wd(He, window);
            this.Wd(Ie, window)
        },
        enable: function() {
            this.enabled = o
        },
        stop: function() {
            this.options.Ai ? this.Wd(Je) : Le(this.TB);
            this.Aj = [];
            this.Vl = this.ph = q
        },
        zoom: function(a, b, c, d) {
            var e = c / this.scale;
            this.options.Tk && (this.Wk = o,
                d = d === j ? 200 : d,
                a = a - this.TF - this.x,
                b = b - this.UF - this.y,
                this.x = a - a * e + this.x,
                this.y = b - b * e + this.y,
                this.scale = c,
                this.refresh(),
                this.x = 0 < this.x ? 0 : this.x < this.fe ? this.fe : this.x,
                this.y = this.y > this.rf ? this.rf : this.y < this.nd ? this.nd : this.y,
                this.Ob.style[ue] = d + "ms",
                this.Ob.style[ne] = "translate(" + this.x + "px," + this.y + "px) scale(" + c + ")" + Me,
                this.Wk = q)
        }
    };

    function le(a) {
        if ("" === fe)
            return a;
        a = a.charAt(0).toUpperCase() + a.substr(1);
        return fe + a
    }
    ee = p;

    function Oe(a) {
        this.k = {
            anchor: Wb,
            offset: new N(0, 0),
            maxWidth: "100%",
            imageHeight: 80
        };
        var a = a || {},
            b;
        for (b in a)
            this.k[b] = a[b];
        this.Hl = new cc(p, {
            Pf: "api"
        });
        this.$j = [];
        this.P = p;
        this.eg = {
            height: this.k.imageHeight,
            width: this.k.imageHeight * Pe
        };
        this.Oc = this.oB = this.Zl = this.Xc = p
    }
    var Qe = [0, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 5, 5, 5, 6, 6, 7, 8, 8, 8, 9, 10],
        Re = "\u5176\u4ed6 \u6b63\u95e8 \u623f\u578b \u8bbe\u65bd \u6b63\u95e8 \u9910\u996e\u8bbe\u65bd \u5176\u4ed6\u8bbe\u65bd \u6b63\u95e8 \u8bbe\u65bd \u89c2\u5f71\u5385 \u5176\u4ed6\u8bbe\u65bd".split(" ");
    z.Rm(function(a) {
        var b = p;
        a.addEventListener("position_changed", function() {
            a.k.visible && a.k.albumsControl === o && (b ? b.ny(a.Zb()) : (b = new Oe(a.k.albumsControlOptions),
                b.ra(a)))
        });
        a.addEventListener("albums_visible_changed", function() {
            a.k.albumsControl === o ? (b ? b.ny(a.Zb()) : (b = new Oe(a.k.albumsControlOptions),
                    b.ra(a)),
                b.show()) : b.U()
        });
        a.addEventListener("albums_options_changed", function() {
            b && b.Kk(a.k.albumsControlOptions)
        });
        a.addEventListener("visible_changed", function() {
            b && (a.YD() ? a.k.albumsControl === o && (b.B.style.visibility = "visible") : b.B.style.visibility = "hidden")
        })
    });
    var Pe = 1.8;
    G() && (Pe = 1);
    x.extend(Oe.prototype, {
        Kk: function(a) {
            for (var b in a)
                this.k[b] = a[b];
            a = this.k.imageHeight + "px";
            this.qc(this.k.anchor);
            this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            this.B.style.height = a;
            this.fk.style.height = a;
            this.Wh.style.height = a;
            this.eg = {
                height: this.k.imageHeight,
                width: this.k.imageHeight * Pe
            };
            this.ek.style.height = this.eg.height - 6 + "px";
            this.ek.style.width = this.eg.width - 6 + "px";
            this.ny(this.P.Zb(), o)
        },
        ra: function(a) {
            this.P = a;
            this.es();
            this.aQ();
            this.fY();
            this.ny(a.Zb())
        },
        es: function() {
            var a = this.k.imageHeight + "px";
            this.B = M("div");
            var b = this.B.style;
            b.cssText = "background:rgb(37,37,37);background:rgba(37,37,37,0.9);";
            b.position = "absolute";
            b.zIndex = "2000";
            b.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px";
            b.padding = "8px 0";
            b.visibility = "hidden";
            b.height = a;
            this.fk = M("div");
            b = this.fk.style;
            b.position = "absolute";
            b.overflow = "hidden";
            b.width = "100%";
            b.height = a;
            this.Wh = M("div");
            b = this.Wh.style;
            b.height = a;
            this.fk.appendChild(this.Wh);
            this.B.appendChild(this.fk);
            this.P.B.appendChild(this.B);
            this.ek = M("div", {
                "class": "pano_photo_item_seleted"
            });
            this.ek.style.height = this.eg.height - 6 + "px";
            this.ek.style.width = this.eg.width - 6 + "px";
            this.qc(this.k.anchor)
        },
        CH: function(a) {
            for (var b = this.$j, c = b.length - 1; 0 <= c; c--)
                if (b[c].panoId == a)
                    return c;
            return -1
        },
        ny: function(a, b) {
            if (b || !this.$j[this.Xc] || !(this.$j[this.Xc].panoId == a && 3 !== this.$j[this.Xc].recoType)) {
                var c = this,
                    d = this.CH(a);
                !b && -1 !== d && this.$j[d] && 3 !== this.$j[d].recoType ? this.Jp(d) : this.xX(function(a) {
                    for (var b = {}, d, i, k = q, l = [], m = 0, n = a.length; m < n; m++)
                        d = a[m].catlog,
                        i = a[m].floor,
                        j !== d && ("" === d && j !== i ? (k = o,
                            b[i] || (b[i] = []),
                            b[i].push(a[m])) : (b[Qe[d]] || (b[Qe[d]] = []),
                            b[Qe[d]].push(a[m])));
                    for (var t in b)
                        k ? l.push({
                            data: t + "F",
                            index: t
                        }) : l.push({
                            data: Re[t],
                            index: t
                        });
                    c.TG = b;
                    c.Ni = l;
                    c.Dl(a);
                    0 == a.length ? c.U() : c.show()
                })
            }
        },
        RV: function() {
            if (!this.Ki) {
                var a = this.lX(this.Ni),
                    b = M("div");
                b.style.cssText = ["width:" + 134 * this.Ni.length + "px;", "overflow:hidden;-ms-user-select:none;-moz-user-select:none;-webkit-user-select:none;"].join("");
                b.innerHTML = a;
                a = M("div");
                a.appendChild(b);
                a.style.cssText = "position:absolute;top:-25px;background:rgb(37,37,37);background:rgba(37,37,37,0.9);border-bottom:1px solid #4e596a;width:100%;line-height:25px;height:25px;overflow:scroll;outline:0";
                new Ne(a, {
                    zo: q,
                    Vx: o,
                    mi: q,
                    Bi: q,
                    nn: q,
                    BE: o,
                    Cw: o,
                    zx: o
                });
                this.B.appendChild(a);
                for (var c = this, d = b.getElementsByTagName("span"), e = 0, f = d.length; e < f; e++)
                    b = d[e],
                    x.M(b, "click", function() {
                        if (this.getAttribute("dataindex")) {
                            c.Dl(c.TG[this.getAttribute("dataindex")]);
                            for (var a = 0, b = d.length; a < b; a++)
                                d[a].style.color = "#FFFFFF";
                            this.style.color = "#3383FF"
                        }
                    });
                this.Ki = a
            }
        },
        OV: function() {
            if (this.Ki)
                a = this.jL(this.Ni),
                this.qQ.innerHTML = a;
            else {
                var a = this.jL(this.Ni),
                    b = M("ul"),
                    c = this;
                b.style.cssText = "list-style: none;padding:0px;margin:0px;display:block;width:60px;position:absolute;top:7px";
                b.innerHTML = a;
                x.M(b, "click", function(a) {
                    if (a = (a.srcElement || a.target).getAttribute("dataindex")) {
                        c.Dl(c.TG[a]);
                        for (var d = b.getElementsByTagName("li"), e = 0, f = d.length; e < f; e++)
                            d[e].childNodes[0].getAttribute("dataindex") === a ? x.D.Ua(d[e], "pano_catlogLiActive") : x.D.Sb(d[e], "pano_catlogLiActive")
                    }
                });
                var a = M("div"),
                    d = M("a"),
                    e = M("span"),
                    f = M("a"),
                    g = M("span"),
                    i = ["background:url(" + E.qa + "panorama/catlog_icon.png) no-repeat;", "display:block;width:10px;height:7px;margin:0 auto;"].join("");
                e.style.cssText = i + "background-position:-18px 0;";
                d.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                g.style.cssText = i + "background-position:0 0;";
                f.style.cssText = "background:#1C1C1C;display:block;position:absolute;width:58px;";
                f.style.top = this.k.imageHeight - 7 + "px";
                a.style.cssText = "position:absolute;top:0px;left:0px;width:60px;";
                d.appendChild(e);
                f.appendChild(g);
                x.M(d, "mouseover", function() {
                    var a = parseInt(b.style.top, 10);
                    7 !== a && (e.style.backgroundPosition = "-27px 0");
                    new rb({
                        Gc: 60,
                        jc: sb.Ds,
                        duration: 300,
                        va: function(c) {
                            b.style.top = a + (7 - a) * c + "px"
                        }
                    })
                });
                x.M(d, "mouseout", function() {
                    e.style.backgroundPosition = "-18px 0"
                });
                x.M(f, "mouseover", function() {
                    var a = parseInt(b.style.top, 10),
                        d = c.k.imageHeight - 14;
                    if (!(parseInt(b.offsetHeight, 10) < d)) {
                        var e = d - parseInt(b.offsetHeight, 10) + 7;
                        e !== a && (g.style.backgroundPosition = "-9px 0");
                        new rb({
                            Gc: 60,
                            jc: sb.Ds,
                            duration: 300,
                            va: function(c) {
                                b.style.top = a + (e - a) * c + "px"
                            }
                        })
                    }
                });
                x.M(f, "mouseout", function() {
                    g.style.backgroundPosition = "0 0"
                });
                a.appendChild(d);
                a.appendChild(f);
                d = M("div");
                d.style.cssText = ["position:absolute;z-index:2001;left:20px;", "height:" + this.k.imageHeight + "px;", "width:62px;overflow:hidden;background:rgb(37,37,37);background:rgba(37,37,37,0.9);"].join("");
                d.appendChild(b);
                d.appendChild(a);
                this.Ki = d;
                this.qQ = b;
                this.B.appendChild(d)
            }
        },
        PV: function() {
            if (this.Ni && !(0 >= this.Ni.length)) {
                var a = M("div");
                a.innerHTML = this.Wz;
                a.style.cssText = "position:absolute;background:#252525";
                this.B.appendChild(a);
                this.Hs = a;
                this.Oc.fg.style.left = this.eg.width + 8 + "px";
                this.Ki && (this.Ki.style.left = parseInt(this.Ki.style.left, 10) + this.eg.width + 8 + "px");
                var b = this;
                x.M(a, "click", function() {
                    b.P.rc(b.zW)
                })
            }
        },
        Dl: function(a) {
            this.$j = a;
            this.k.showCatalog && (0 < this.Ni.length ? (Va() ? this.OV() : this.RV(),
                this.Oc.offsetLeft = 60) : (this.Hs && (this.B.removeChild(this.Hs),
                    this.Hs = p,
                    this.Oc.fg.style.left = "0px"),
                this.Ki && (this.B.removeChild(this.Ki),
                    this.Ki = p),
                this.Oc.offsetLeft = 0));
            var b = this.fX(a);
            Va() && (this.Ni && 0 < this.Ni.length && this.k.showExit && this.Wz) && (this.Oc.offsetLeft += this.eg.width + 8,
                this.Hs ? this.Hs.innerHTML = this.Wz : this.PV());
            this.Wh.innerHTML = b;
            this.Wh.style.width = (this.eg.width + 8) * a.length + 8 + "px";
            a = this.B.offsetWidth;
            b = this.Wh.offsetWidth;
            this.Oc.Os && (b += this.Oc.Os());
            b < a - 2 * this.Oc.Ei - this.Oc.offsetLeft ? this.B.style.width = b + this.Oc.offsetLeft + "px" : (this.B.style.width = isNaN(Number(this.k.maxWidth)) === o ? this.k.maxWidth : this.k.maxWidth + "px",
                b < this.B.offsetWidth - 2 * this.Oc.Ei - this.Oc.offsetLeft && (this.B.style.width = b + this.Oc.offsetLeft + "px"));
            this.Oc.refresh();
            this.oB = this.Wh.children;
            this.Wh.appendChild(this.ek);
            this.ek.style.left = "-100000px";
            a = this.CH(this.P.Zb(), this.g1); -
            1 !== a && this.Jp(a)
        },
        lX: function(a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++)
                c = '<div style="color:white;opacity:0.5;margin:0 35px;float:left;text-align: center"><span  dataIndex="' + a[d].index + '">' + a[d].data + "</span></div>",
                b += c;
            return b
        },
        jL: function(a) {
            for (var b = "", c, d = 0, e = a.length; d < e; d++)
                c = '<li class="pano_catlogLi"><span style="display:block;width:100%;" dataIndex="' + a[d].index + '">' + a[d].data + "</span></li>",
                b += c;
            return b
        },
        fX: function(a) {
            for (var b, c, d, e, f = [], g = this.eg.height, i = this.eg.width, k = 0; k < a.length; k++)
                b = a[k],
                recoType = b.recoType,
                d = b.panoId,
                e = b.name,
                c = b.heading,
                b = b.pitch,
                c = be.vL(d, c, b, 198, 108),
                b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><span class="pano_photo_decs" data-index="' + k + '" style="width:' + i + "px;font-size:" + Math.floor(g / 6) + "px; line-height:" + Math.floor(g / 6) + 'px;"><em class="pano_poi_' + recoType + '"></em>' + e + "</span></a>",
                3 === recoType ? Va() ? (this.Wz = b,
                    this.zW = d,
                    a.splice(k, 1),
                    k--) : (b = '<a href="javascript:void(0);" class="pano_photo_item" data-index="' + k + '"><img style="width:' + (i - 2) + "px;height:" + (g - 2) + 'px;" data-index="' + k + '" name="' + e + '" src="' + c + '" alt="' + e + '"/><div style="background:rgba(37,37,37,0.5);position:absolute;top:0px;left:0px;width:100%;height:100%;text-align: center;line-height:' + this.k.imageHeight + 'px;" data-index="' + k + '"><img src="' + E.qa + 'panorama/photoexit.png" style="border:none;vertical-align:middle;" data-index="' + k + '" alt=""/></div></a>',
                    f.push(b)) : f.push(b);
            return f.join("")
        },
        xX: function(a) {
            var b = this,
                c = this.P.Zb();
            c && this.Hl.wx(c, function(d) {
                b.P.Zb() === c && a(d)
            })
        },
        qc: function(a) {
            if (!Xa(a) || isNaN(a) || a < Ub || 3 < a)
                a = this.defaultAnchor;
            var b = this.B,
                c = this.k.offset.width,
                d = this.k.offset.height;
            b.style.left = b.style.top = b.style.right = b.style.bottom = "auto";
            switch (a) {
                case Ub:
                    b.style.top = d + "px";
                    b.style.left = c + "px";
                    break;
                case Vb:
                    b.style.top = d + "px";
                    b.style.right = c + "px";
                    break;
                case Wb:
                    b.style.bottom = d + "px";
                    b.style.left = c + "px";
                    break;
                case 3:
                    b.style.bottom = d + "px",
                        b.style.right = c + "px"
            }
        },
        aQ: function() {
            this.ZP()
        },
        ZP: function() {
            var a = this;
            x.M(this.B, "touchstart", function(a) {
                a.stopPropagation()
            });
            x.M(this.fk, "click", function(b) {
                if ((b = (b.srcElement || b.target).getAttribute("data-index")) && b != a.Xc)
                    a.Jp(b),
                    a.P.rc(a.$j[b].panoId)
            });
            x.M(this.Wh, "mouseover", function(b) {
                b = (b.srcElement || b.target).getAttribute("data-index");
                b !== p && a.kK(b, o)
            });
            this.P.addEventListener("size_changed", function() {
                isNaN(Number(a.k.maxWidth)) && a.Kk({
                    maxWidth: a.k.maxWidth
                })
            })
        },
        Jp: function(a) {
            this.ek.style.left = this.oB[a].offsetLeft + 8 + "px";
            this.ek.setAttribute("data-index", this.oB[a].getAttribute("data-index"));
            this.Xc = a;
            this.kK(a)
        },
        kK: function(a, b) {
            var c = this.eg.width + 8,
                d = 0;
            this.Oc.Os && (d = this.Oc.Os() / 2);
            var e = this.fk.offsetWidth - 2 * d,
                f = this.Wh.offsetLeft || this.Oc.x,
                f = f - d,
                g = -a * c;
            g > f && this.Oc.scrollTo(g + d);
            c = g - c;
            f -= e;
            c < f && (!b || b && 8 < g - f) && this.Oc.scrollTo(c + e + d)
        },
        fY: function() {
            this.Oc = G() ? new Ne(this.fk, {
                zo: q,
                Vx: o,
                mi: q,
                Bi: q,
                nn: q,
                BE: o,
                Cw: o,
                zx: o
            }) : new Se(this.fk)
        },
        U: function() {
            this.B.style.visibility = "hidden"
        },
        show: function() {
            this.B.style.visibility = "visible"
        }
    });

    function Se(a) {
        this.B = a;
        this.Sg = a.children[0];
        this.Kr = p;
        this.Ei = 20;
        this.offsetLeft = 0;
        this.ra()
    }
    Se.prototype = {
        ra: function() {
            this.Sg.style.position = "relative";
            this.refresh();
            this.es();
            this.Xl()
        },
        refresh: function() {
            this.ao = this.B.offsetWidth - this.Os();
            this.OA = -(this.Sg.offsetWidth - this.ao - this.Ei);
            this.rv = this.Ei + this.offsetLeft;
            this.Sg.style.left = this.rv + "px";
            this.Sg.children[0] && (this.Kr = this.Sg.children[0].offsetWidth);
            this.fg && (this.fg.children[0].style.marginTop = this.Cr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px")
        },
        Os: function() {
            return 2 * this.Ei
        },
        es: function() {
            this.Gv = M("div");
            this.Gv.innerHTML = '<a class="pano_photo_arrow_l" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0a\u4e00\u9875"><span class="pano_arrow_l"></span></a><a class="pano_photo_arrow_r" style="background:rgb(37,37,37);background:rgba(37,37,37,0.9);" href="javascript:void(0)" title="\u4e0b\u4e00\u9875"><span class="pano_arrow_r"></span></a>';
            this.fg = this.Gv.children[0];
            this.Cr = this.Gv.children[1];
            this.B.appendChild(this.Gv);
            this.fg.children[0].style.marginTop = this.Cr.children[0].style.marginTop = this.fg.offsetHeight / 2 - this.fg.children[0].offsetHeight / 2 + "px"
        },
        Xl: function() {
            var a = this;
            x.M(this.fg, "click", function() {
                a.scrollTo(a.Sg.offsetLeft + a.ao)
            });
            x.M(this.Cr, "click", function() {
                a.scrollTo(a.Sg.offsetLeft - a.ao)
            })
        },
        BU: function() {
            x.D.Sb(this.fg, "pano_arrow_disable");
            x.D.Sb(this.Cr, "pano_arrow_disable");
            var a = this.Sg.offsetLeft;
            a >= this.rv && x.D.Ua(this.fg, "pano_arrow_disable");
            a - this.ao <= this.OA && x.D.Ua(this.Cr, "pano_arrow_disable")
        },
        scrollTo: function(a) {
            a = a < this.Sg.offsetLeft ? Math.ceil((a - this.Ei - this.ao) / this.Kr) * this.Kr + this.ao + this.Ei - 8 : Math.ceil((a - this.Ei) / this.Kr) * this.Kr + this.Ei;
            a < this.OA ? a = this.OA : a > this.rv && (a = this.rv);
            var b = this.Sg.offsetLeft,
                c = this;
            new rb({
                Gc: 60,
                jc: sb.Ds,
                duration: 300,
                va: function(d) {
                    c.Sg.style.left = b + (a - b) * d + "px"
                },
                finish: function() {
                    c.BU()
                }
            })
        }
    };
    z.Map = La;
    z.Hotspot = hb;
    z.MapType = Vc;
    z.Point = H;
    z.Pixel = Q;
    z.Size = N;
    z.Bounds = eb;
    z.TileLayer = Hc;
    z.Projection = hc;
    z.MercatorProjection = R;
    z.PerspectiveProjection = gb;
    z.Copyright = function(a, b, c) {
        this.id = a;
        this.hb = b;
        this.content = c
    };
    z.Overlay = kc;
    z.Label = uc;
    z.GroundOverlay = vc;
    z.PointCollection = zc;
    z.Marker = T;
    z.Icon = qc;
    z.IconSequence = sc;
    z.Symbol = rc;
    z.Polyline = Dc;
    z.Polygon = Cc;
    z.InfoWindow = tc;
    z.Circle = Ec;
    z.Control = Tb;
    z.NavigationControl = ib;
    z.GeolocationControl = Xb;
    z.OverviewMapControl = kb;
    z.CopyrightControl = Yb;
    z.ScaleControl = jb;
    z.MapTypeControl = lb;
    z.CityListControl = Zb;
    z.PanoramaControl = ac;
    z.TrafficLayer = Rc;
    z.CustomLayer = mb;
    z.ContextMenu = dc;
    z.MenuItem = gc;
    z.LocalSearch = bb;
    z.TransitRoute = xd;
    z.DrivingRoute = Ad;
    z.WalkingRoute = Bd;
    z.Autocomplete = Ld;
    z.RouteSearch = Fd;
    z.Geocoder = Gd;
    z.LocalCity = Id;
    z.Geolocation = Geolocation;
    z.Convertor = jc;
    z.BusLineSearch = Kd;
    z.Boundary = Jd;
    z.VectorCloudLayer = Pc;
    z.VectorTrafficLayer = Qc;
    z.Panorama = Oa;
    z.PanoramaLabel = Rd;
    z.PanoramaService = cc;
    z.PanoramaCoverageLayer = bc;
    z.PanoramaFlashInterface = $d;

    function S(a, b) {
        for (var c in b)
            a[c] = b[c]
    }
    S(window, {
        BMap: z,
        _jsload2: function(a, b) {
            ja.Iy.pY && ja.Iy.set(a, b);
            I.sV(a, b)
        },
        BMAP_API_VERSION: "2.0"
    });
    var X = La.prototype;
    S(X, {
        getBounds: X.Hd,
        getCenter: X.Ka,
        getMapType: X.pa,
        getSize: X.Bb,
        setSize: X.ye,
        getViewport: X.Zs,
        getZoom: X.fa,
        centerAndZoom: X.Dd,
        panTo: X.ui,
        panBy: X.xg,
        setCenter: X.Wf,
        setCurrentCity: X.oF,
        setMapType: X.Ag,
        setViewport: X.Ah,
        setZoom: X.Nc,
        highResolutionEnabled: X.Fx,
        zoomTo: X.Dg,
        zoomIn: X.VF,
        zoomOut: X.WF,
        addHotspot: X.ow,
        removeHotspot: X.nZ,
        clearHotspots: X.am,
        checkResize: X.vV,
        addControl: X.mw,
        removeControl: X.zN,
        getContainer: X.Na,
        addContextMenu: X.so,
        removeContextMenu: X.zp,
        addOverlay: X.Ja,
        removeOverlay: X.Tb,
        clearOverlays: X.hK,
        openInfoWindow: X.Nb,
        closeInfoWindow: X.Wc,
        pointToOverlayPixel: X.Te,
        overlayPixelToPoint: X.nN,
        getInfoWindow: X.hh,
        getOverlays: X.tx,
        getPanes: function() {
            return {
                floatPane: this.Vd.qD,
                markerMouseTarget: this.Vd.EE,
                floatShadow: this.Vd.bL,
                labelPane: this.Vd.wE,
                markerPane: this.Vd.IM,
                markerShadow: this.Vd.JM,
                mapPane: this.Vd.vt,
                vertexPane: this.Vd.PO
            }
        },
        addTileLayer: X.Wg,
        removeTileLayer: X.xh,
        pixelToPoint: X.wb,
        pointToPixel: X.bc,
        setFeatureStyle: X.Ip,
        selectBaseElement: X.c4,
        setMapStyle: X.Qt,
        enable3DBuilding: X.Ko,
        disable3DBuilding: X.eW,
        getPanorama: X.qm
    });
    var Te = Vc.prototype;
    S(Te, {
        getTileLayer: Te.IX,
        getMinZoom: Te.Wo,
        getMaxZoom: Te.pm,
        getProjection: Te.ap,
        getTextColor: Te.vm,
        getTips: Te.Ys
    });
    S(window, {
        BMAP_NORMAL_MAP: Ma,
        BMAP_PERSPECTIVE_MAP: Pa,
        BMAP_SATELLITE_MAP: Za,
        BMAP_HYBRID_MAP: Sa
    });
    var Ue = R.prototype;
    S(Ue, {
        lngLatToPoint: Ue.lh,
        pointToLngLat: Ue.zj
    });
    var Ve = gb.prototype;
    S(Ve, {
        lngLatToPoint: Ve.lh,
        pointToLngLat: Ve.zj
    });
    var We = eb.prototype;
    S(We, {
        equals: We.nb,
        containsPoint: We.cs,
        containsBounds: We.GV,
        intersects: We.gt,
        extend: We.extend,
        getCenter: We.Ka,
        isEmpty: We.xj,
        getSouthWest: We.se,
        getNorthEast: We.of,
        toSpan: We.JF
    });
    var Xe = kc.prototype;
    S(Xe, {
        isVisible: Xe.kh,
        show: Xe.show,
        hide: Xe.U
    });
    kc.getZIndex = kc.xm;
    var Ye = fb.prototype;
    S(Ye, {
        openInfoWindow: Ye.Nb,
        closeInfoWindow: Ye.Wc,
        enableMassClear: Ye.mj,
        disableMassClear: Ye.gW,
        show: Ye.show,
        hide: Ye.U,
        getMap: Ye.nx,
        addContextMenu: Ye.so,
        removeContextMenu: Ye.zp
    });
    var Ze = T.prototype;
    S(Ze, {
        setIcon: Ze.Ub,
        getIcon: Ze.Uo,
        setPosition: Ze.ta,
        getPosition: Ze.ha,
        setOffset: Ze.Ve,
        getOffset: Ze.Qf,
        getLabel: Ze.KD,
        setLabel: Ze.an,
        setTitle: Ze.Cc,
        setTop: Ze.yi,
        enableDragging: Ze.Yb,
        disableDragging: Ze.IC,
        setZIndex: Ze.Vt,
        getMap: Ze.nx,
        setAnimation: Ze.$m,
        setShadow: Ze.zy,
        hide: Ze.U,
        setRotation: Ze.Lp,
        getRotation: Ze.zL
    });
    S(window, {
        BMAP_ANIMATION_DROP: 1,
        BMAP_ANIMATION_BOUNCE: 2
    });
    var $e = uc.prototype;
    S($e, {
        setStyle: $e.Ld,
        setStyles: $e.xi,
        setContent: $e.ad,
        setPosition: $e.ta,
        getPosition: $e.ha,
        setOffset: $e.Ve,
        getOffset: $e.Qf,
        setTitle: $e.Cc,
        setZIndex: $e.Vt,
        getMap: $e.nx,
        getContent: $e.tk
    });
    var af = qc.prototype;
    S(af, {
        setImageUrl: af.PN,
        setSize: af.ye,
        setAnchor: af.qc,
        setImageOffset: af.Pt,
        setImageSize: af.RZ,
        setInfoWindowAnchor: af.UZ,
        setPrintImageUrl: af.d_
    });
    var bf = tc.prototype;
    S(bf, {
        redraw: bf.ge,
        setTitle: bf.Cc,
        setContent: bf.ad,
        getContent: bf.tk,
        getPosition: bf.ha,
        enableMaximize: bf.ah,
        disableMaximize: bf.Uw,
        isOpen: bf.Wa,
        setMaxContent: bf.Rt,
        maximize: bf.Ux,
        enableAutoPan: bf.Es
    });
    var cf = oc.prototype;
    S(cf, {
        getPath: cf.qe,
        setPath: cf.he,
        setPositionAt: cf.dn,
        getStrokeColor: cf.DX,
        setStrokeWeight: cf.Op,
        getStrokeWeight: cf.CL,
        setStrokeOpacity: cf.Mp,
        getStrokeOpacity: cf.EX,
        setFillOpacity: cf.Ot,
        getFillOpacity: cf.aX,
        setStrokeStyle: cf.Np,
        getStrokeStyle: cf.BL,
        getFillColor: cf.$W,
        getBounds: cf.Hd,
        enableEditing: cf.lf,
        disableEditing: cf.fW,
        getEditing: cf.XW
    });
    var df = Ec.prototype;
    S(df, {
        setCenter: df.Wf,
        getCenter: df.Ka,
        getRadius: df.xL,
        setRadius: df.vf
    });
    var ef = Cc.prototype;
    S(ef, {
        getPath: ef.qe,
        setPath: ef.he,
        setPositionAt: ef.dn
    });
    var ff = hb.prototype;
    S(ff, {
        getPosition: ff.ha,
        setPosition: ff.ta,
        getText: ff.UD,
        setText: ff.Ut
    });
    H.prototype.equals = H.prototype.nb;
    Q.prototype.equals = Q.prototype.nb;
    N.prototype.equals = N.prototype.nb;
    S(window, {
        BMAP_ANCHOR_TOP_LEFT: Ub,
        BMAP_ANCHOR_TOP_RIGHT: Vb,
        BMAP_ANCHOR_BOTTOM_LEFT: Wb,
        BMAP_ANCHOR_BOTTOM_RIGHT: 3
    });
    var gf = Tb.prototype;
    S(gf, {
        setAnchor: gf.qc,
        getAnchor: gf.wD,
        setOffset: gf.Ve,
        getOffset: gf.Qf,
        show: gf.show,
        hide: gf.U,
        isVisible: gf.kh,
        toString: gf.toString
    });
    var hf = ib.prototype;
    S(hf, {
        getType: hf.ep,
        setType: hf.fn
    });
    S(window, {
        BMAP_NAVIGATION_CONTROL_LARGE: 0,
        BMAP_NAVIGATION_CONTROL_SMALL: 1,
        BMAP_NAVIGATION_CONTROL_PAN: 2,
        BMAP_NAVIGATION_CONTROL_ZOOM: 3
    });
    var jf = kb.prototype;
    S(jf, {
        changeView: jf.ne,
        setSize: jf.ye,
        getSize: jf.Bb
    });
    var kf = jb.prototype;
    S(kf, {
        getUnit: kf.MX,
        setUnit: kf.wF
    });
    S(window, {
        BMAP_UNIT_METRIC: "metric",
        BMAP_UNIT_IMPERIAL: "us"
    });
    var lf = Yb.prototype;
    S(lf, {
        addCopyright: lf.nw,
        removeCopyright: lf.$E,
        getCopyright: lf.nm,
        getCopyrightCollection: lf.DD
    });
    S(window, {
        BMAP_MAPTYPE_CONTROL_HORIZONTAL: $b,
        BMAP_MAPTYPE_CONTROL_DROPDOWN: 1,
        BMAP_MAPTYPE_CONTROL_MAP: 2
    });
    var mf = Hc.prototype;
    S(mf, {
        getMapType: mf.pa,
        getCopyright: mf.nm,
        isTransparentPng: mf.mt
    });
    var pf = dc.prototype;
    S(pf, {
        addItem: pf.qw,
        addSeparator: pf.PB,
        removeSeparator: pf.bF
    });
    var qf = gc.prototype;
    S(qf, {
        setText: qf.Ut
    });
    var rf = V.prototype;
    S(rf, {
        getStatus: rf.tm,
        setSearchCompleteCallback: rf.uF,
        getPageCapacity: rf.pf,
        setPageCapacity: rf.Kp,
        setLocation: rf.bn,
        disableFirstResultSelection: rf.JC,
        enableFirstResultSelection: rf.fD,
        gotoPage: rf.ym,
        searchNearby: rf.Gp,
        searchInBounds: rf.Zm,
        search: rf.search
    });
    S(window, {
        BMAP_STATUS_SUCCESS: 0,
        BMAP_STATUS_CITY_LIST: 1,
        BMAP_STATUS_UNKNOWN_LOCATION: 2,
        BMAP_STATUS_UNKNOWN_ROUTE: 3,
        BMAP_STATUS_INVALID_KEY: 4,
        BMAP_STATUS_INVALID_REQUEST: 5,
        BMAP_STATUS_PERMISSION_DENIED: 6,
        BMAP_STATUS_SERVICE_UNAVAILABLE: 7,
        BMAP_STATUS_TIMEOUT: 8
    });
    S(window, {
        BMAP_POI_TYPE_NORMAL: 0,
        BMAP_POI_TYPE_BUSSTOP: 1,
        BMAP_POI_TYPE_BUSLINE: 2,
        BMAP_POI_TYPE_SUBSTOP: 3,
        BMAP_POI_TYPE_SUBLINE: 4
    });
    S(window, {
        BMAP_TRANSIT_POLICY_LEAST_TIME: 0,
        BMAP_TRANSIT_POLICY_LEAST_TRANSFER: 2,
        BMAP_TRANSIT_POLICY_LEAST_WALKING: 3,
        BMAP_TRANSIT_POLICY_AVOID_SUBWAYS: 4,
        BMAP_LINE_TYPE_BUS: 0,
        BMAP_LINE_TYPE_SUBWAY: 1,
        BMAP_LINE_TYPE_FERRY: 2
    });
    var sf = wd.prototype;
    S(sf, {
        clearResults: sf.Oe
    });
    yd = xd.prototype;
    S(yd, {
        setPolicy: yd.Tt,
        toString: yd.toString,
        setPageCapacity: yd.Kp
    });
    S(window, {
        BMAP_DRIVING_POLICY_LEAST_TIME: 0,
        BMAP_DRIVING_POLICY_LEAST_DISTANCE: 1,
        BMAP_DRIVING_POLICY_AVOID_HIGHWAYS: 2
    });
    S(window, {
        BMAP_MODE_DRIVING: "driving",
        BMAP_MODE_TRANSIT: "transit",
        BMAP_MODE_WALKING: "walking",
        BMAP_MODE_NAVIGATION: "navigation"
    });
    var tf = Fd.prototype;
    S(tf, {
        routeCall: tf.KN
    });
    S(window, {
        BMAP_HIGHLIGHT_STEP: 1,
        BMAP_HIGHLIGHT_ROUTE: 2
    });
    S(window, {
        BMAP_ROUTE_TYPE_DRIVING: id,
        BMAP_ROUTE_TYPE_WALKING: ed
    });
    S(window, {
        BMAP_ROUTE_STATUS_NORMAL: jd,
        BMAP_ROUTE_STATUS_EMPTY: 1,
        BMAP_ROUTE_STATUS_ADDRESS: 2
    });
    var uf = Ad.prototype;
    S(uf, {
        setPolicy: uf.Tt
    });
    var vf = Ld.prototype;
    S(vf, {
        show: vf.show,
        hide: vf.U,
        setTypes: vf.vF,
        setLocation: vf.bn,
        search: vf.search,
        setInputValue: vf.wy
    });
    S(mb.prototype, {});
    var wf = Jd.prototype;
    S(wf, {
        get: wf.get
    });
    S(bc.prototype, {});
    S(cb.prototype, {});
    S(window, {
        BMAP_POINT_DENSITY_HIGH: 200,
        BMAP_POINT_DENSITY_MEDIUM: Uc,
        BMAP_POINT_DENSITY_LOW: 50
    });
    S(window, {
        BMAP_POINT_SHAPE_STAR: 1,
        BMAP_POINT_SHAPE_WATERDROP: 2,
        BMAP_POINT_SHAPE_CIRCLE: wc,
        BMAP_POINT_SHAPE_SQUARE: 4,
        BMAP_POINT_SHAPE_RHOMBUS: 5
    });
    S(window, {
        BMAP_POINT_SIZE_TINY: 1,
        BMAP_POINT_SIZE_SMALLER: 2,
        BMAP_POINT_SIZE_SMALL: 3,
        BMAP_POINT_SIZE_NORMAL: xc,
        BMAP_POINT_SIZE_BIG: 5,
        BMAP_POINT_SIZE_BIGGER: 6,
        BMAP_POINT_SIZE_HUGE: 7
    });
    S(window, {
        BMap_Symbol_SHAPE_CAMERA: 11,
        BMap_Symbol_SHAPE_WARNING: 12,
        BMap_Symbol_SHAPE_SMILE: 13,
        BMap_Symbol_SHAPE_CLOCK: 14,
        BMap_Symbol_SHAPE_POINT: 9,
        BMap_Symbol_SHAPE_PLANE: 10,
        BMap_Symbol_SHAPE_CIRCLE: 1,
        BMap_Symbol_SHAPE_RECTANGLE: 2,
        BMap_Symbol_SHAPE_RHOMBUS: 3,
        BMap_Symbol_SHAPE_STAR: 4,
        BMap_Symbol_SHAPE_BACKWARD_CLOSED_ARROW: 5,
        BMap_Symbol_SHAPE_FORWARD_CLOSED_ARROW: 6,
        BMap_Symbol_SHAPE_BACKWARD_OPEN_ARROW: 7,
        BMap_Symbol_SHAPE_FORWARD_OPEN_ARROW: 8
    });
    S(window, {
        BMAP_CONTEXT_MENU_ICON_ZOOMIN: ec,
        BMAP_CONTEXT_MENU_ICON_ZOOMOUT: fc
    });
    S(window, {
        BMAP_SYS_DRAWER: Ka,
        BMAP_SVG_DRAWER: 1,
        BMAP_VML_DRAWER: 2,
        BMAP_CANVAS_DRAWER: 3,
        BMAP_SVG_DRAWER_FIRST: 4
    });
    z.UU();
})()