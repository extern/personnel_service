/*
 FusionCharts JavaScript Library
 Copyright FusionCharts Technologies LLP
 License Information at <http://www.fusioncharts.com/license>

 @author FusionCharts Technologies LLP
 @version fusioncharts/3.2.2-release.3880

 Third-party attributions:
 SWFObject v2.2 <http://code.google.com/p/swfobject/>
 JSON v2 <http://www.JSON.org/js.html>
 Firebug Lite 1.3.0 <http://getfirebug.com/firebuglite>
 jQuery 1.4.2 <http://jquery.com/>
 */
(function() {
    if (typeof window.FusionCharts === "undefined") {
        var a = {},h = a.modules = {},f = ["swfUrl","id","width","height","debugMode","registerWithJS","bgColor","scaleMode","lang","detectFlashVersion","autoInstallRedirect"],g = Object.prototype.toString,e = function(a, d) {
            var b,k;
            if (d instanceof Array)for (b = 0; b < d.length; b += 1)typeof d[b] !== "object" ? a[b] = d[b] : (typeof a[b] !== "object" && (a[b] = d[b]instanceof Array ? [] : {}),e(a[b], d[b])); else for (b in d)typeof d[b] === "object" ? (k = g.call(d[b]),k === "[object Object]" ? (typeof a[b] !==
                "object" && (a[b] = {}),e(a[b], d[b])) : k === "[object Array]" ? (a[b]instanceof Array || (a[b] = []),e(a[b], d[b])) : a[b] = d[b]) : a[b] = d[b];
            return a
        };
        a.extend = function(a, d, b, k) {
            var j;
            if (b && a.prototype)a = a.prototype;
            if (k === !0)e(a, d); else for (j in d)a[j] = d[j];
            return a
        };
        a.uniqueId = function() {
            return"chartobject-" + (a.uniqueId.lastId += 1)
        };
        a.uniqueId.lastId = 0;
        a.policies = {options:{product:["product","v3"],insertMode:["insertMode","replace"],safeMode:["safeMode",!0],overlayButton:["overlayButton",void 0]},attributes:{lang:["lang",
            "EN"],"class":["className","FusionCharts"],id:["id",void 0]},width:["width","400"],height:["height","300"],src:["swfUrl",""],__state:{}};
        a.parsePolicies = function(c, d, b) {
            var k,j,m;
            for (j in d)if (a.policies[j]instanceof Array)m = b[d[j][0]],c[j] = m === void 0 ? d[j][1] : m; else for (k in typeof c[j] !== "object" && (c[j] = {}),d[j])m = b[d[j][k][0]],c[j][k] = m === void 0 ? d[j][k][1] : m
        };
        a.core = function(c) {
            if (!(this instanceof a.core)) {
                if (arguments.length === 1 && c instanceof Array && c[0] === "private") {
                    if (h[c[1]] === !0)return;
                    h[c[1]] =
                        !0;
                    return a
                }
                if (arguments.length === 1 && typeof c === "string")return a.core.items[c];
                a.raiseError(this, "25081840", "run", "", new SyntaxError('Use the "new" keyword while creating a new FusionCharts object'))
            }
            var d = {},b;
            if (arguments.length === 1 && typeof arguments[0] === "object")d = arguments[0]; else for (b in f)d[f[b]] = arguments[b];
            typeof arguments[arguments.length - 1] === "object" && (delete d[arguments.length - 1],a.extend(d, arguments[arguments.length - 1]));
            this.id = typeof d.id === "undefined" ? this.id = a.uniqueId() : d.id;
            this.args = d;
            if (a.core.items[this.id]instanceof a.core)a.raiseWarning(this, "06091847", "param", "", Error('A FusionChart oject with the specified id "' + this.id + '" already exists. Renaming it to ' + (this.id = a.uniqueId())));
            if (d.type && d.type.toString)d.swfUrl = d.type;
            a.parsePolicies(this, a.policies, d);
            this.attributes.id = this.id;
            this.resizeTo(d.width, d.height, !0);
            a.raiseEvent("BeforeInitialize", d, this);
            a.core.items[this.id] = this;
            a.raiseEvent("Initialized", d, this);
            return this
        };
        a.core.prototype = {};
        a.core.prototype.constructor =
            a.core;
        a.extend(a.core, {id:"FusionCharts",version:[3,2,2,"release",3880],items:{},options:{},getObjectReference:function(c) {
            return a.core.items[c].ref
        }}, !1);
        window.FusionCharts = a.core
    }
})();
(function() {
    var a = FusionCharts(["private","EventManager"]);
    if (a !== void 0) {
        window.FusionChartsEvents = {BeforeInitialize:"beforeinitialize",Initialized:"initialized",Loaded:"loaded",Rendered:"rendered",DataLoadRequested:"dataloadrequested",DataLoadRequestCancelled:"dataloadrequestcancelled",DataLoadRequestCompleted:"dataloadrequestcompleted",BeforeDataUpdate:"beforedataupdate",DataUpdateCancelled:"dataupdatecancelled",DataUpdated:"dataupdated",DataLoadCancelled:"dataloadcancelled",DataLoaded:"dataloaded",
            DataLoadError:"dataloaderror",NoDataToDisplay:"nodatatodisplay",DataXMLInvalid:"dataxmlinvalid",InvalidDataError:"invaliddataerror",DrawComplete:"drawcomplete",Resized:"resized",BeforeDispose:"beforedispose",Disposed:"disposed"};
        var h = function(a, c, d, b) {
            try {
                a[0].call(c, d, b || {})
            } catch(k) {
                setTimeout(function() {
                    throw k;
                }, 0)
            }
        },f = function(e, c, d) {
            if (e instanceof Array)for (var b = 0,k; b < e.length; b += 1) {
                if (e[b][1] === c.sender || e[b][1] === void 0)k = e[b][1] === c.sender ? c.sender : a.core,h(e[b], k, c, d);
                if (c.cancel === !0)break
            }
        },
            g = {listeners:{},lastEventId:0,addListener:function(e, c, d) {
                if (e instanceof Array)for (var b = 0; b < e.length; b += 1)g.addListener(e[b], c, d); else typeof e !== "string" ? a.raiseError(this, "03091549", "param", "::EventTarget.addListener", Error("Unspecified Event Type")) : typeof c !== "function" ? a.raiseError(this, "03091550", "param", "::EventTarget.addListener", Error("Invalid Event Listener")) : (e = e.toLowerCase(),g.listeners[e]instanceof Array || (g.listeners[e] = []),g.listeners[e].push([c,d]))
            },removeListener:function(e, c, d) {
                var b;
                if (e instanceof Array)for (b = 0; b < e.length; b += 1)g.removeListener(e[b], c, d); else if (typeof e !== "string")a.raiseError(this, "03091559", "param", "::EventTarget.removeListener", Error("Unspecified Event Type")); else if (typeof c !== "function")a.raiseError(this, "03091560", "param", "::EventTarget.removeListener", Error("Invalid Event Listener")); else if (e = e.toLowerCase(),e = g.listeners[e],e instanceof Array)for (b = 0; b < e.length; b += 1)e[b][0] === c && e[b][1] === d && (e.splice(b, 1),b -= 1)
            },triggerEvent:function(e, c, d) {
                if (typeof e !== "string")a.raiseError(this, "03091602", "param", "::EventTarget.dispatchEvent", Error("Invalid Event Type")); else return e = e.toLowerCase(),c = {eventType:e,eventId:g.lastEventId += 1,sender:c || Error("Orphan Event"),stopPropagation:function() {
                    return(this.cancel = !0) === !1
                }},f(g.listeners[e], c, d),f(g.listeners["*"], c, d),!0
            }};
        a.raiseEvent = function(a, c, d) {
            return g.triggerEvent(a, d, c)
        };
        a.addEventListener = function(a, c) {
            return g.addListener(a, c)
        };
        a.removeEventListener = function(a, c) {
            return g.removeListener(a,
                c)
        };
        a.extend(a.core, {addEventListener:a.addEventListener,removeEventListener:a.removeEventListener}, !1);
        a.extend(a.core, {addEventListener:function(a, c) {
            return g.addListener(a, c, this)
        },removeEventListener:function(a, c) {
            return g.removeListener(a, c, this)
        }}, !0);
        a.addEventListener("BeforeDispose", function(a) {
            var c,d;
            for (c in g.listeners)for (d = 0; d < g.listeners[c].length; d += 1)g.listeners[c][d][1] === a.sender && g.listeners[c].splice(d, 1)
        })
    }
})();
(function() {
    var a = FusionCharts(["private","ErrorHandler"]);
    if (a !== void 0) {
        var h = {type:"TypeException",range:"ValueRangeException",impl:"NotImplementedException",param:"ParameterException",run:"RuntimeException",comp:"DesignTimeError",undefined:"UnspecifiedException"},f = function(e, c, d, b, k, j) {
            var m = "#" + c + " " + (e ? e.id : "unknown-source") + b + " " + j + " >> ";
            k instanceof Error ? (k.name = h[d],k.module = "FusionCharts" + b,k.level = j,k.message = m + k.message,m = k.message,window.setTimeout(function() {
                throw k;
            }, 0)) : m += k;
            c =
            {id:c,nature:h[d],source:"FusionCharts" + b,message:m};
            a.raiseEvent(j, c, e);
            if (typeof window["FC_" + j] === "function")window["FC_" + j](c)
        };
        a.raiseError = function(a, c, d, b, k) {
            f(a, c, d, b, k, "Error")
        };
        a.raiseWarning = function(a, c, d, b, k) {
            f(a, c, d, b, k, "Warning")
        };
        var g = {outputHelpers:{text:function(a, c) {
            g.outputTo("#" + a.eventId + " [" + (a.sender.id || a.sender).toString() + '] fired "' + a.eventType + '" event. ' + (a.eventType === "error" || a.eventType === "warning" ? c.message : ""))
        },event:function(a, c) {
            this.outputTo(a, c)
        },verbose:function(a, c) {
            g.outputTo(a.eventId, a.sender.id, a.eventType, c)
        }},outputHandler:function(e, c) {
            typeof g.outputTo !== "function" ? a.core.debugMode.outputFailed = !0 : (a.core.debugMode.outputFailed = !1,g.currentOutputHelper(e, c))
        },currentOutputHelper:void 0,outputTo:void 0,enabled:!1};
        g.currentOutputHelper = g.outputHelpers.text;
        a.extend(a.core, {debugMode:{syncStateWithCharts:!0,outputFormat:function(a) {
            if (a && typeof a.toLowerCase === "function" && typeof g.outputHelpers[a = a.toLowerCase()] === "function")return g.currentOutputHelper =
                g.outputHelpers[a],!0;
            return!1
        },outputTo:function(e) {
            typeof e === "function" ? g.outputTo = e : e === null && (a.core.debugMode.enabled(!1),delete g.outputTo)
        },enabled:function(e, c, d) {
            var b;
            if (typeof e === "object" && arguments.length === 1)b = e,e = b.state,c = b.outputTo,d = b.outputFormat;
            if (typeof e === "function") {
                if (typeof c === "string" && (arguments.length === 2 || b))d = c;
                c = e;
                e = !0
            }
            if (typeof e === "boolean" && e !== g.enabled)a.core[(g.enabled = e) ? "addEventListener" : "removeEventListener"]("*", g.outputHandler);
            if (typeof c === "function")g.outputTo =
                c;
            a.core.debugMode.outputFormat(d);
            return g.enabled
        },_enableFirebugLite:function() {
            window.console && window.console.firebug ? a.core.debugMode.enabled(console.log, "verbose") : a.loadScript("firebug-lite.js", function() {
                a.core.debugMode.enabled(console.log, "verbose")
            }, "{ startOpened: true }")
        }}}, !1)
    }
})();
(function() {
    var a = FusionCharts(["private","mantle.ajax"]);
    if (a) {
        var h = window,f = h.location.protocol === "file:",g = h.ActiveXObject,e = (!g || !f) && h.XMLHttpRequest,c;
        c = e ? function() {
            return new e
        } : function() {
            try {
                return c = function() {
                    return new g("Microsoft.XMLHTTP")
                },new g("Microsoft.XMLHTTP")
            } catch(a) {
                throw c = !1,"AJAX support not detected.";
            }
        };
        a = a.ajax = function(a, b) {
            this.xhr = c();
            this.onSuccess = a;
            this.onError = b
        };
        a.prototype.headers = {"If-Modified-Since":"Sat, 29 Oct 1994 19:43:31 GMT","X-Requested-With":"XMLHttpRequest",
            "X-Requested-By":"FusionCharts",Accept:"text/plain, */*"};
        a.prototype.get = function(a, b) {
            var c = this,j = c.xhr,m = c.headers,i = c.onError,o = c.onSuccess,e;
            j.onreadystatechange = function() {
                try {
                    j.readyState === 4 && o && (!j.status && f || j.status >= 200 && j.status < 300 || j.status === 304 || j.status === 1223 || j.status === 0 ? o(j.responseText, c, b, a) : i && i(Error("XmlHttprequest Error"), c, b, a))
                } catch(m) {
                    i && i(m, c, b, a)
                }
            };
            try {
                j.overrideMimeType && j.overrideMimeType("text/plain");
                j.open("GET", a, !0);
                if (j.setRequestHeader)for (e in m)j.setRequestHeader(e,
                    m[e]);
                j.send(null)
            } catch(g) {
                i && i(g, c, b, a)
            }
            return j
        };
        a.prototype.abort = function() {
            var a = this.xhr;
            return a && typeof a.abort === "function" && a.readyState && a.readyState !== 0 && a.abort()
        }
    }
})();
(function() {
    var a = FusionCharts(["private","modules.mantle.runtime;1.1"]);
    if (a !== void 0) {
        var h = /(^|[\/\\])(fusioncharts\.js|fusioncharts\.debug\.js|fusioncharts\.core\.js|fusioncharts\.min\.js|fusioncharts\.packed\.js)([\?#].*)?$/ig;
        a.core.options.scriptBaseUri = function() {
            var b = document.getElementsByTagName("script"),c = b.length,k,j;
            for (j = 0; j < c; j += 1)if (k = b[j].getAttribute("src"),!(k === void 0 || k === null || k.match(h) === null))return k.replace(h, "$1");
            a.raiseError(FusionCharts, "1603111624", "run", ">GenericRuntime~scriptBaseUri",
                "Unable to locate FusionCharts script source location (URL).");
            return""
        }();
        var f = /[\\\"<>;&]/,g = /^[^\S]*?(sf|f|ht)(tp|tps):\/\//ig,e = {},c = {},d = {};
        a.isXSSSafe = function(b, a) {
            if (a && g.exec(b) !== null)return!1;
            return f.exec(b) === null
        };
        a.loadScript = function(b, i, k, j) {
            if (!b)return!1;
            var f = i && i.success || i,g = i && i.failure,h;
            h = a.core.options.scriptBaseUri + b;
            a.isXSSSafe(h, !0) || (h = typeof window.encodeURIComponent === "function" ? window.encodeURIComponent(h) : window.escape(h));
            if (c[h] === !0 && j)return typeof i === "function" &&
                i(),!0;
            if (e[h] && j)return!1;
            e[h] = !0;
            i = document.createElement("script");
            i.type = "text/javascript";
            i.src = h;
            k && (i.innerHTML = k);
            if (typeof f === "function")c[h] = !1,clearTimeout(d[h]),i.onload = function() {
                c[h] = !0;
                clearTimeout(d[h]);
                f()
            },i.onreadystatechange = function() {
                if (this.readyState === "complete" || this.readyState === "loaded")c[h] = !0,clearTimeout(d[h]),f(b, h)
            };
            document.getElementsByTagName("head")[0].appendChild(i);
            typeof g === "function" && (d[h] = setTimeout(function() {
                c[h] || g(b, h)
            }, a.core.options.html5ResourceLoadTimeout ||
                3E4));
            return!0
        };
        var b = function(b, a, c) {
            for (var k in b) {
                var j;
                if (b[k]instanceof Array)a[b[k][0]] = c[k]; else for (j in b[k])a[b[k][j][0]] = c[k][j]
            }
        },k = /[^\%\d]*$/ig,j = /^FusionCharts/;
        a.extend(a.core, {dispose:function() {
            a.raiseEvent("BeforeDispose", {}, this);
            a.renderer.dispose(this);
            delete a.core.items[this.id];
            a.raiseEvent("Disposed", {}, this);
            for (var b in this)delete this[b]
        },clone:function(c, k) {
            var j = typeof c,d = {},e = a.extend({}, this.args, !1, !1);
            b(a.policies, e, this);
            b(a.renderer.getRendererPolicy(this.options.renderer),
                e, this);
            delete e.id;
            delete e.animate;
            delete e.stallLoad;
            d.link = e.link;
            e = a.extend({}, e, !1, !1);
            e.link = d.link;
            switch (j) {
                case "object":
                    a.extend(e, c);
                    break;
                case "boolean":
                    k = c
            }
            return k ? e : new a.core(e)
        },isActive:function() {
            if (!this.ref || document.getElementById(this.id) !== this.ref || typeof this.ref.signature !== "function")return!1;
            try {
                return j.test(this.ref.signature())
            } catch(b) {
                return!1
            }
        },resizeTo:function(b, c, j) {
            var d = {width:b,height:c};
            if (typeof b === "object")d.width = b.width,d.height = b.height,j = c;
            if (d.width &&
                typeof d.width.toString === "function")this.width = d.width.toString().replace(k, "");
            if (d.height && typeof d.height.toString === "function")this.height = d.height.toString().replace(k, "");
            j !== !0 && a.renderer.resize(this, d)
        },chartType:function() {
            var b;
            return(b = (b = this.src.substring(this.src.indexOf(".swf"), 0)) ? b : this.src).substring(b.lastIndexOf("/") + 1).toLowerCase()
        }}, !0);
        window.getChartFromId = function(b) {
            a.raiseWarning(this, "11133001041", "run", "GenericRuntime~getChartFromId()", 'Use of deprecated "getChartFromId()". Replace with "FusionCharts()" or FusionCharts.items[].');
            return a.core.items[b]instanceof a.core ? a.core.items[b].ref : window.swfobject.getObjectById(b)
        }
    }
})();
(function() {
    var a = FusionCharts(["private","RendererManager"]);
    if (a !== void 0) {
        a.policies.options.containerElementId = ["renderAt",void 0];
        a.policies.options.renderer = ["renderer",void 0];
        var h = function() {
            a.raiseError(this, "25081845", "run", "::RendererManager", Error("No active renderer"))
        },f = {undefined:{render:h,update:h,resize:h,config:h,policies:{}}},g = {};
        a.normalizeCSSDimension = function(b, a, c) {
            var b = b === void 0 ? c.offsetWidth : b,a = a === void 0 ? c.offsetHeight : a,d;
            c.style.width = b = b.toString ? b.toString() : "0";
            c.style.height = a = a.toString ? a.toString() : "0";
            if (b.match(/^\s*\d*\.?\d*\%\s*$/) && !b.match(/^\s*0\%\s*$/) && c.offsetWidth === 0)for (; d = c.offsetParent;)if (d.offsetWidth > 0) {
                b = (d.offsetWidth * parseFloat(b.match(/\d*/)[0]) / 100).toString();
                break
            }
            if (a.match(/^\s*\d*\.?\d*\%\s*$/) && !a.match(/^\s*0\%\s*$/) && c.offsetHeight <= 20)for (; d = c.offsetParent;)if (d.offsetHeight > 0) {
                a = (d.offsetHeight * parseFloat(a.match(/\d*/)[0]) / 100).toString();
                break
            }
            d = {width:b.replace ? b.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : b,height:a.replace ?
                a.replace(/^\s*(\d*\.?\d*)\s*$/ig, "$1px") : a};
            c.style.width = d.width;
            c.style.height = d.height;
            return d
        };
        a.renderer = {register:function(b, c) {
            if (!b || typeof b.toString !== "function")throw"#03091436 ~renderer.register() Invalid value for renderer name.";
            b = b.toString().toLowerCase();
            if (f[b] !== void 0)return a.raiseError(a.core, "03091438", "param", "::RendererManager>register", 'Duplicate renderer name specified in "name"'),!1;
            f[b] = c;
            return!0
        },setDefault:function(b) {
            if (!b || typeof b.toString !== "function")return a.raiseError(a.core,
                "25081731", "param", "::RendererManager>setDefault", 'Invalid renderer name specified in "name"'),!1;
            if (f[b = b.toString().toLowerCase()] === void 0)return a.raiseError(a.core, "25081733", "range", "::RendererManager>setDefault", "The specified renderer does not exist."),!1;
            a.policies.options.renderer = ["renderer",b];
            return!0
        },notifyRender:function(b) {
            b.success === !1 && a.raiseError(a.core.items[b.id], "25081850", "run", "::RendererManager", Error("There was an error rendering the chart. Enable FusionCharts JS debugMode for more information."));
            if (a.core.items[b.id].ref = b.ref)b.ref.FusionCharts = a.core.items[b.id];
            a.raiseEvent("internal.DOMElementCreated", b, a.core.items[b.id])
        },protectedMethods:{options:!0,attributes:!0,src:!0,ref:!0,constructor:!0,signature:!0,link:!0},getRenderer:function(b) {
            return f[b]
        },getRendererPolicy:function(b) {
            b = f[b].policies;
            return typeof b === "object" ? b : {}
        },currentRendererName:function() {
            return a.policies.options.renderer[1]
        },update:function(b) {
            g[b.id].update.apply(b, Array.prototype.slice.call(arguments, 1))
        },render:function(b) {
            g[b.id].render.apply(b,
                Array.prototype.slice.call(arguments, 1))
        },resize:function(b) {
            g[b.id].resize.apply(b, Array.prototype.slice.call(arguments, 1))
        },config:function(b) {
            g[b.id].config.apply(b, Array.prototype.slice.call(arguments, 1))
        },dispose:function(b) {
            g[b.id].dispose.apply(b, Array.prototype.slice.call(arguments, 1))
        }};
        var e = function(b) {
            return function() {
                if (this.ref === void 0 || this.ref === null || typeof this.ref[b] !== "function")a.raiseError(this, "25081617", "run", "~" + b + "()", "ExternalInterface call failed. Check whether chart has been rendered.");
                else return this.ref[b].apply(this.ref, arguments)
            }
        };
        a.addEventListener("BeforeInitialize", function(b) {
            var b = b.sender,c;
            if (typeof b.options.renderer === "string" && f[b.options.renderer.toLowerCase()] === void 0)b.options.renderer = a.policies.options.renderer[1];
            b.options.renderer = b.options.renderer.toLowerCase();
            g[b.id] = f[b.options.renderer];
            if (g[b.id].initialized !== !0 && typeof g[b.id].init === "function")g[b.id].init(),g[b.id].initialized = !0;
            a.parsePolicies(b, g[b.id].policies || {}, b.args);
            for (var d in g[b.id].prototype)b[d] =
                g[b.id].prototype[d];
            for (c in g[b.id].events)b.addEventListener(c, g[b.id].events[c])
        });
        a.addEventListener("Loaded", function(b) {
            var c = b.sender,b = b.sender.ref;
            c instanceof a.core && delete c.__state.rendering;
            if (!(b === void 0 || b === null || typeof b.getExternalInterfaceMethods !== "function")) {
                var d;
                try {
                    d = b.getExternalInterfaceMethods(),d = typeof d === "string" ? d.split(",") : []
                } catch(m) {
                    d = [],a.raiseError(c, "13111126041", "run", "RendererManager^Loaded", Error("Error while retrieving data from the chart-object." + (m.message &&
                        m.message.indexOf("NPObject") >= 0 ? " Possible cross-domain security restriction." : "")))
                }
                for (b = 0; b < d.length; b += 1)c[d[b]] === void 0 && (c[d[b]] = e(d[b]))
            }
        });
        var c = function(b, a) {
            if (typeof b[a] === "function")return function() {
                return b[a].apply(b, arguments)
            };
            return b[a]
        };
        a.addEventListener("loaded", function(b) {
            var d = b.sender;
            if (d.ref) {
                var j = a.renderer.protectedMethods,e = a.renderer.getRenderer(d.options.renderer).protectedMethods,i;
                for (i in b.sender)if (e && !j[i] && !(e[i] || d.ref[i] !== void 0))try {
                    d.ref[i] = c(b.sender,
                        i)
                } catch(o) {
                }
            }
        });
        var d = function(b, a) {
            var c = document.getElementById(b),d = a.getAttribute("id");
            if (c === null)return!1;
            if (b === d)return!0;
            for (var d = a.getElementsByTagName("*"),i = 0; i < d.length; i += 1)if (d[i] === c)return!1;
            return!0
        };
        a.extend(a.core, {render:function(b) {
            var c;
            ((c = window[this.id]) && c.FusionCharts && c.FusionCharts === this || (c = this.ref) && c.FusionCharts && c.FusionCharts === this) && a.renderer.dispose(this);
            window[this.id] !== void 0 && a.raiseError(this, "25081843", "comp", ".render", Error("#25081843:IECompatibility() Chart Id is same as a JavaScript variable name. Variable naming error. Please use unique name for chart JS variable, chart-id and container id."));
            c = document.createElement(this.options.containerElementType || "span");
            var j = this.options.insertMode.toLowerCase() || "replace";
            if (b === void 0)b = this.options.containerElementId;
            typeof b === "string" && (b = document.getElementById(b));
            if (b === void 0 || b === null)return a.raiseError(this, "03091456", "run", ".render()", Error("Unable to find the container DOM element.")),this;
            if (d(this.id, b))return a.raiseError(this, "05102109", "run", ".render()", Error("A duplicate object already exists with the specific Id: " + this.id)),
                this;
            c.setAttribute("id", this.id);
            if (j !== "append" && j !== "prepend")for (; b.hasChildNodes();)b.removeChild(b.firstChild);
            j === "prepend" && b.firstChild ? b.insertBefore(c, b.firstChild) : b.appendChild(c);
            this.options.containerElement = b;
            this.options.containerElementId = b.id;
            if (b = c.style)b.lineHeight = "100%",b.display = "inline-block",b.zoom = "1",b["*DISPLAY"] = "inline";
            a.normalizeCSSDimension(this.width, this.height, c);
            this.__state.rendering = !0;
            a.renderer.render(this, c, a.renderer.notifyRender);
            return this
        },configure:function(b, c) {
            var d;
            b && (typeof b === "string" ? (d = {},d[b] = c) : d = b,a.renderer.config(this, d))
        }}, !0);
        a.extend(a.core, {setCurrentRenderer:a.renderer.setDefault,render:function() {
            var b = ["swfUrl","id","width","height","renderAt","dataSource","dataFormat"],c = {},d;
            if (arguments[0]instanceof a.core)return arguments[0].render(),arguments[0];
            for (d = 0; d < arguments.length && d < b.length; d += 1)c[b[d]] = arguments[d];
            typeof arguments[arguments.length - 1] === "object" && (delete c[b[d - 1]],a.extend(c, arguments[arguments.length - 1]));
            if (c.dataFormat ===
                void 0)c.dataFormat = FusionChartsDataFormats.XMLURL;
            return(new a.core(c)).render()
        }}, !1)
    }
})();
(function() {
    var a = FusionCharts(["private","DataHandlerManager"]);
    if (a !== void 0) {
        window.FusionChartsDataFormats = {};
        var h = {},f = {},g = {},e = /url$/i,c = function(b, c, d, e) {
            var i = !1,o = d.obj,f = d.format,d = d.silent;
            a.raiseEvent("DataLoadRequestCompleted", {source:"XmlHttpRequest",url:e,data:b,dataFormat:f,cancelDataLoad:function() {
                i = !0;
                c.abort();
                this.cancelDataLoad = function() {
                    return!1
                };
                return!0
            },xmlHttpRequestObject:c.xhr}, o);
            i !== !0 ? o.setChartData(b, f, d) : a.raiseEvent("DataLoadCancelled", {source:"XmlHttpRequest",
                url:e,dataFormat:f,xmlHttpRequestObject:c.xhr}, o)
        },d = function(b, c, d, e) {
            d = d.obj;
            b = {source:"XmlHttpRequest",url:e,xmlHttpRequestObject:c.xhr,error:b,httpStatus:c.xhr && c.xhr.status ? c.xhr.status : -1};
            a.raiseEvent("DataLoadError", b, d);
            typeof window.FC_DataLoadError === "function" && window.FC_DataLoadError(d.id, b)
        };
        a.policies.options.dataSource = ["dataSource",void 0];
        a.policies.options.dataFormat = ["dataFormat",void 0];
        a.policies.options.dataConfiguration = ["dataConfiguration",void 0];
        a.policies.options.showDataLoadingMessage =
            ["showDataLoadingMessage",!0];
        a.addDataHandler = function(b, c) {
            if (typeof b !== "string" || h[b.toLowerCase()] !== void 0)a.raiseError(a.core, "03091606", "param", "::DataManager.addDataHandler", Error("Invalid Data Handler Name")); else {
                var d = {},e = b.toLowerCase();
                h[e] = c;
                d["set" + b + "Url"] = function(a) {
                    return this.setChartDataUrl(a, b)
                };
                d["set" + b + "Data"] = function(a, c) {
                    return this.setChartData(a, b, !1, c)
                };
                d["get" + b + "Data"] = function() {
                    return this.getChartData(b)
                };
                window.FusionChartsDataFormats[b] = e;
                window.FusionChartsDataFormats[b +
                    "URL"] = e + "URL";
                a.extend(a.core, d, !0)
            }
        };
        a.addEventListener("BeforeInitialize", function(b) {
            b = b.sender;
            f[b.id] = "";
            g[b.id] = {};
            b.options.dataSource !== void 0 && typeof b.options.dataFormat === "string" && b.setChartData(b.options.dataSource, b.options.dataFormat)
        });
        a.addEventListener("BeforeDispose", function(b) {
            var a = b.sender;
            delete f[b.sender.id];
            delete g[b.sender.id];
            a && a.__state && a.__state.dhmXhrObj && a.__state.dhmXhrObj.abort()
        });
        a.extend(a.core, {setChartDataUrl:function(b, k, j) {
            if (k === void 0 || k === null || typeof k.toString !==
                "function")a.raiseError(a.core, "03091609", "param", ".setChartDataUrl", Error("Invalid Data Format")); else {
                var k = k.toString().toLowerCase(),f,i = this,o = !1;
                e.test(k) ? f = k.slice(0, -3) : (f = k,k += "url");
                a.raiseEvent("DataLoadRequested", {source:"XmlHttpRequest",url:b,dataFormat:f,cancelDataLoadRequest:function() {
                    o = !0;
                    a.raiseEvent("DataLoadRequestCancelled", {source:"XmlHttpRequest",url:b,dataFormat:f}, i);
                    this.__state && this.__state.dhmXhrObj && this.__state.dhmXhrObj.abort();
                    this.cancelDataLoadRequest = function() {
                        return!1
                    };
                    return!0
                }}, i);
                if (!o) {
                    this.options.dataSource = b;
                    if (!this.__state.dhmXhrObj)this.__state.dhmXhrObj = new a.ajax(c, d);
                    this.__state.dhmXhrObj.get(typeof window.decodeURIComponent === "function" ? window.decodeURIComponent(b) : window.unescape(b), {obj:this,format:f,silent:j})
                }
            }
        },setChartData:function(b, c, d) {
            (c === void 0 || c === null || typeof c.toString !== "function") && a.raiseError(a.core, "03091610", "param", ".setChartData", Error("Invalid Data Format"));
            var c = c.toString().toLowerCase(),m;
            if (e.test(c))this.setChartDataUrl(b,
                c, d); else {
                this.options.dataSource = b;
                m = c;
                this.options.dataFormat = c;
                var c = h[m],i = !1;
                if (typeof c === "undefined")a.raiseError(a.core, "03091611", "param", ".setChartData", Error("Data Format not recognized")); else if (c = c.encode(b, this, this.options.dataConfiguration) || {},c.format = c.dataFormat = m,c.dataSource = b,c.cancelDataUpdate = function() {
                    i = !0;
                    this.cancelDataUpdate = function() {
                        return!1
                    };
                    return!0
                },a.raiseEvent("BeforeDataUpdate", c, this),delete c.cancelDataUpdate,i === !0)a.raiseEvent("DataUpdateCancelled", c, this);
                else {
                    f[this.id] = c.data || "";
                    g[this.id] = {};
                    if (d !== !0)this.options.safeMode === !0 && this.__state.rendering === !0 && !this.isActive() ? (this.__state.updatePending = c,a.raiseWarning(this, "23091255", "run", "::DataHandler~update", "Renderer update was postponed due to async loading.")) : (delete this.__state.updatePending,a.renderer.update(this, c));
                    a.raiseEvent("DataUpdated", c, this)
                }
            }
        },getChartData:function(b, c) {
            var i;
            var d;
            if (b === void 0 || typeof b.toString !== "function" || (d = h[b = b.toString().toLowerCase()]) === void 0)a.raiseError(this,
                "25081543", "param", "~getChartData()", Error('Unrecognized data-format specified in "format"')); else return i = typeof g[this.id][b] === "object" ? g[this.id][b] : g[this.id][b] = d.decode(f[this.id], this, this.options.dataConfiguration),d = i,Boolean(c) === !0 ? d : d.data
        }}, !0);
        a.extend(a.core, {transcodeData:function(b, c, d, e, i) {
            if (!c || typeof c.toString !== "function" || !d || typeof d.toString !== "function" || h[d = d.toString().toLowerCase()] === void 0 || h[c = c.toString().toLowerCase()] === void 0)a.raiseError(this, "14090217", "param",
                "transcodeData()", Error("Unrecognized data-format specified during transcoding.")); else {
                b = h[c].encode(b, this, i);
                d = h[d].decode(b.data, this, i);
                if (!(d.error instanceof Error))d.error = b.error;
                return e ? d : d.data
            }
        }}, !1);
        a.addEventListener("Disposed", function(b) {
            delete g[b.sender.id]
        });
        a.addEventListener("Loaded", function(b) {
            b = b.sender;
            b instanceof a.core && b.__state.updatePending !== void 0 && (a.renderer.update(b, b.__state.updatePending),delete b.__state.updatePending)
        })
    }
})();
var swfobject = window.swfobject = function() {
    function a() {
        if (!A) {
            try {
                var b = n.getElementsByTagName("body")[0].appendChild(n.createElement("span"));
                b.parentNode.removeChild(b)
            } catch(a) {
                return
            }
            A = !0;
            for (var b = D.length,c = 0; c < b; c++)D[c]()
        }
    }

    function h(b) {
        A ? b() : D[D.length] = b
    }

    function f(b) {
        if (typeof v.addEventListener != r)v.addEventListener("load", b, !1); else if (typeof n.addEventListener != r)n.addEventListener("load", b, !1); else if (typeof v.attachEvent != r)p(v, "onload", b); else if (typeof v.onload == "function") {
            var a =
                v.onload;
            v.onload = function() {
                a();
                b()
            }
        } else v.onload = b
    }

    function g() {
        var b = n.getElementsByTagName("body")[0],a = n.createElement(w);
        a.setAttribute("type", E);
        var c = b.appendChild(a);
        if (c) {
            var d = 0;
            (function() {
                if (typeof c.GetVariable != r) {
                    var i;
                    try {
                        i = c.GetVariable("$version")
                    } catch(f) {
                    }
                    if (i)i = i.split(" ")[1].split(","),l.pv = [parseInt(i[0], 10),parseInt(i[1], 10),parseInt(i[2], 10)]
                } else if (d < 10) {
                    d++;
                    setTimeout(arguments.callee, 10);
                    return
                }
                b.removeChild(a);
                c = null;
                e()
            })()
        } else e()
    }

    function e() {
        var a = y.length;
        if (a >
            0)for (var i = 0; i < a; i++) {
            var e = y[i].id,f = y[i].callbackFn,j = {success:!1,id:e};
            if (l.pv[0] > 0) {
                var m = o(e);
                if (m)if (s(y[i].swfVersion) && !(l.wk && l.wk < 312)) {
                    if (t(e, !0),f)j.success = !0,j.ref = c(e),f(j)
                } else if (y[i].expressInstall && d()) {
                    j = {};
                    j.data = y[i].expressInstall;
                    j.width = m.getAttribute("width") || "0";
                    j.height = m.getAttribute("height") || "0";
                    if (m.getAttribute("class"))j.styleclass = m.getAttribute("class");
                    if (m.getAttribute("align"))j.align = m.getAttribute("align");
                    for (var g = {},m = m.getElementsByTagName("param"),
                             h = m.length,p = 0; p < h; p++)m[p].getAttribute("name").toLowerCase() != "movie" && (g[m[p].getAttribute("name")] = m[p].getAttribute("value"));
                    b(j, g, e, f)
                } else k(m),f && f(j)
            } else if (t(e, !0),f) {
                if ((e = c(e)) && typeof e.SetVariable != r)j.success = !0,j.ref = e;
                f(j)
            }
        }
    }

    function c(b) {
        var a,c = null;
        if (!document.embeds || !(a = document.embeds[b]))if (!((a = o(b)) && a.nodeName == "OBJECT"))a = window[b];
        if (!a)return c;
        typeof a.SetVariable != r ? c = a : (b = a.getElementsByTagName(w)[0]) && (c = b);
        return c
    }

    function d() {
        return!F && s("6.0.65") && (l.win ||
            l.mac) && !(l.wk && l.wk < 312)
    }

    function b(b, a, c, d) {
        F = !0;
        I = d || null;
        K = {success:!1,id:c};
        var i = o(c);
        if (i) {
            i.nodeName == "OBJECT" ? (C = j(i),G = null) : (C = i,G = c);
            b.id = L;
            if (typeof b.width == r || !/%$/.test(b.width) && parseInt(b.width, 10) < 310)b.width = "310";
            if (typeof b.height == r || !/%$/.test(b.height) && parseInt(b.height, 10) < 137)b.height = "137";
            n.title = n.title.slice(0, 47) + " - Flash Player Installation";
            d = l.ie && l.win ? "ActiveX" : "PlugIn";
            d = "MMredirectURL=" + v.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + d + "&MMdoctitle=" +
                n.title;
            typeof a.flashvars != r ? a.flashvars += "&" + d : a.flashvars = d;
            if (l.ie && l.win && i.readyState != 4)d = n.createElement("div"),c += "SWFObjectNew",d.setAttribute("id", c),i.parentNode.insertBefore(d, i),i.style.display = "none",function() {
                i.readyState == 4 ? i.parentNode.removeChild(i) : setTimeout(arguments.callee, 10)
            }();
            m(b, a, c)
        }
    }

    function k(b) {
        if (l.ie && l.win && b.readyState != 4) {
            var a = n.createElement("div");
            b.parentNode.insertBefore(a, b);
            a.parentNode.replaceChild(j(b), a);
            b.style.display = "none";
            (function() {
                b.readyState ==
                    4 ? b.parentNode.removeChild(b) : setTimeout(arguments.callee, 10)
            })()
        } else b.parentNode.replaceChild(j(b), b)
    }

    function j(b) {
        var a = n.createElement("div");
        if (l.win && l.ie)a.innerHTML = b.innerHTML; else if (b = b.getElementsByTagName(w)[0])if (b = b.childNodes)for (var c = b.length,d = 0; d < c; d++)!(b[d].nodeType == 1 && b[d].nodeName == "PARAM") && b[d].nodeType != 8 && a.appendChild(b[d].cloneNode(!0));
        return a
    }

    function m(b, a, c) {
        var d,c = o(c);
        if (l.wk && l.wk < 312)return d;
        if (c) {
            if (typeof b.id == r)b.id = c.id;
            if (l.ie && l.win) {
                var i = "",e;
                for (e in b)if (b[e] !=
                    Object.prototype[e])e.toLowerCase() == "data" ? a.movie = b[e] : e.toLowerCase() == "styleclass" ? i += ' class="' + b[e] + '"' : e.toLowerCase() != "classid" && (i += " " + e + '="' + b[e] + '"');
                e = "";
                for (var f in a)a[f] != Object.prototype[f] && (e += '<param name="' + f + '" value="' + a[f] + '" />');
                c.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + i + ">" + e + "</object>";
                H[H.length] = b.id;
                d = o(b.id)
            } else {
                f = n.createElement(w);
                f.setAttribute("type", E);
                for (var j in b)b[j] != Object.prototype[j] && (j.toLowerCase() == "styleclass" ?
                    f.setAttribute("class", b[j]) : j.toLowerCase() != "classid" && f.setAttribute(j, b[j]));
                for (i in a)a[i] != Object.prototype[i] && i.toLowerCase() != "movie" && (b = f,e = i,j = a[i],d = n.createElement("param"),d.setAttribute("name", e),d.setAttribute("value", j),b.appendChild(d));
                c.parentNode.replaceChild(f, c);
                d = f
            }
        }
        return d
    }

    function i(b) {
        var a = o(b);
        if (a && a.nodeName == "OBJECT")l.ie && l.win ? (a.style.display = "none",function() {
            if (a.readyState == 4) {
                var c = o(b);
                if (c) {
                    for (var d in c)typeof c[d] == "function" && (c[d] = null);
                    c.parentNode.removeChild(c)
                }
            } else setTimeout(arguments.callee,
                10)
        }()) : a.parentNode.removeChild(a)
    }

    function o(b) {
        var a = null;
        if (typeof b === "string")try {
            a = n.getElementById(b)
        } catch(c) {
        } else b && b.id && (a = b);
        return a
    }

    function p(b, a, c) {
        b.attachEvent(a, c);
        B[B.length] = [b,a,c]
    }

    function s(b) {
        var a = l.pv,b = b.split(".");
        b[0] = parseInt(b[0], 10);
        b[1] = parseInt(b[1], 10) || 0;
        b[2] = parseInt(b[2], 10) || 0;
        return a[0] > b[0] || a[0] == b[0] && a[1] > b[1] || a[0] == b[0] && a[1] == b[1] && a[2] >= b[2] ? !0 : !1
    }

    function u(b, a, c, d) {
        if (!l.ie || !l.mac) {
            var i = n.getElementsByTagName("head")[0];
            if (i) {
                c = c && typeof c ==
                    "string" ? c : "screen";
                d && (J = x = null);
                if (!x || J != c)d = n.createElement("style"),d.setAttribute("type", "text/css"),d.setAttribute("media", c),x = i.appendChild(d),l.ie && l.win && typeof n.styleSheets != r && n.styleSheets.length > 0 && (x = n.styleSheets[n.styleSheets.length - 1]),J = c;
                l.ie && l.win ? x && typeof x.addRule == w && x.addRule(b, a) : x && typeof n.createTextNode != r && x.appendChild(n.createTextNode(b + " {" + a + "}"))
            }
        }
    }

    function t(b, a) {
        if (M) {
            var c = a ? "visible" : "hidden";
            A && o(b) ? o(b).style.visibility = c : u("#" + b, "visibility:" + c)
        }
    }

    function q(b) {
        return/[\\\"<>\.;]/.exec(b) !=
            null && typeof encodeURIComponent != r ? encodeURIComponent(b) : b
    }

    var r = "undefined",w = "object",E = "application/x-shockwave-flash",L = "SWFObjectExprInst",v = window,n = document,z = navigator,N = !1,D = [function() {
        N ? g() : e()
    }],y = [],H = [],B = [],C,G,I,K,A = !1,F = !1,x,J,M = !0,l = function() {
        var b = typeof n.getElementById != r && typeof n.getElementsByTagName != r && typeof n.createElement != r,a = z.userAgent.toLowerCase(),c = z.platform.toLowerCase(),d = c ? /win/.test(c) : /win/.test(a),c = c ? /mac/.test(c) : /mac/.test(a),a = /webkit/.test(a) ? parseFloat(a.replace(/^.*webkit\/(\d+(\.\d+)?).*$/,
            "$1")) : !1,i = !+"\u000b1",e = [0,0,0],f = null;
        if (typeof z.plugins != r && typeof z.plugins["Shockwave Flash"] == w) {
            if ((f = z.plugins["Shockwave Flash"].description) && !(typeof z.mimeTypes != r && z.mimeTypes[E] && !z.mimeTypes[E].enabledPlugin))N = !0,i = !1,f = f.replace(/^.*\s+(\S+\s+\S+$)/, "$1"),e[0] = parseInt(f.replace(/^(.*)\..*$/, "$1"), 10),e[1] = parseInt(f.replace(/^.*\.(.*)\s.*$/, "$1"), 10),e[2] = /[a-zA-Z]/.test(f) ? parseInt(f.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
        } else if (typeof v.ActiveXObject != r)try {
            var j = new ActiveXObject("ShockwaveFlash.ShockwaveFlash");
            if (j) {
                try {
                    f = j.GetVariable("$version")
                } catch(m) {
                }
                f && (i = !0,f = f.split(" ")[1].split(","),e = [parseInt(f[0], 10),parseInt(f[1], 10),parseInt(f[2], 10)])
            }
        } catch(o) {
        }
        return{w3:b,pv:e,wk:a,ie:i,win:d,mac:c}
    }();
    (function() {
        l.w3 && ((typeof n.readyState != r && n.readyState == "complete" || typeof n.readyState == r && (n.getElementsByTagName("body")[0] || n.body)) && a(),A || (typeof n.addEventListener != r && n.addEventListener("DOMContentLoaded", a, !1),l.ie && l.win && (n.attachEvent("onreadystatechange", function() {
            n.readyState == "complete" &&
            (n.detachEvent("onreadystatechange", arguments.callee),a())
        }),v == top && function() {
            if (!A) {
                try {
                    n.documentElement.doScroll("left")
                } catch(b) {
                    setTimeout(arguments.callee, 0);
                    return
                }
                a()
            }
        }()),l.wk && function() {
            A || (/loaded|complete/.test(n.readyState) ? a() : setTimeout(arguments.callee, 0))
        }(),f(a)))
    })();
    (function() {
        l.ie && l.win && window.attachEvent("onunload", function() {
            for (var b = B.length,a = 0; a < b; a++)B[a][0].detachEvent(B[a][1], B[a][2]);
            b = H.length;
            for (a = 0; a < b; a++)i(H[a]);
            for (var c in l)l[c] = null;
            l = null;
            for (var d in swfobject)swfobject[d] =
                null;
            swfobject = null
        })
    })();
    return{FusionChartsModified:!0,registerObject:function(b, a, c, d) {
        if (l.w3 && b && a) {
            var i = {};
            i.id = b;
            i.swfVersion = a;
            i.expressInstall = c;
            i.callbackFn = d;
            y[y.length] = i;
            t(b, !1)
        } else d && d({success:!1,id:b})
    },getObjectById:function(b) {
        if (l.w3)return c(b)
    },embedSWF:function(a, c, i, e, f, j, o, k, g, p) {
        var u = {success:!1,id:typeof c === "string" ? c : c.id};
        l.w3 && !(l.wk && l.wk < 312) && a && c && i && e && f ? (t(c, !1),h(function() {
            i += "";
            e += "";
            var h = {};
            if (g && typeof g === w)for (var l in g)h[l] = g[l];
            h.data = a;
            h.width = i;
            h.height = e;
            l = {};
            if (k && typeof k === w)for (var n in k)l[n] = k[n];
            if (o && typeof o === w)for (var q in o)typeof l.flashvars != r ? l.flashvars += "&" + q + "=" + o[q] : l.flashvars = q + "=" + o[q];
            if (s(f))n = m(h, l, c),h.id == u.id && t(c, !0),u.success = !0,u.ref = n; else if (j && d()) {
                h.data = j;
                b(h, l, c, p);
                return
            } else t(c.id || c, !0);
            p && p(u)
        })) : p && p(u)
    },switchOffAutoHideShow:function() {
        M = !1
    },ua:l,getFlashPlayerVersion:function() {
        return{major:l.pv[0],minor:l.pv[1],release:l.pv[2]}
    },hasFlashPlayerVersion:s,createSWF:function(b, a, c) {
        if (l.w3)return m(b,
            a, c)
    },showExpressInstall:function(a, c, i, e) {
        l.w3 && d() && b(a, c, i, e)
    },removeSWF:function(b) {
        l.w3 && i(b)
    },createCSS:function(b, a, c, d) {
        l.w3 && u(b, a, c, d)
    },addDomLoadEvent:h,addLoadEvent:f,getQueryParamValue:function(b) {
        var a = n.location.search || n.location.hash;
        if (a) {
            /\?/.test(a) && (a = a.split("?")[1]);
            if (b == null)return q(a);
            for (var a = a.split("&"),c = 0; c < a.length; c++)if (a[c].substring(0, a[c].indexOf("=")) == b)return q(a[c].substring(a[c].indexOf("=") + 1))
        }
        return""
    },expressInstallCallback:function() {
        if (F) {
            var b = o(L);
            if (b && C) {
                b.parentNode.replaceChild(C, b);
                if (G && (t(G, !0),l.ie && l.win))C.style.display = "block";
                I && I(K)
            }
            F = !1
        }
    }}
}();
(function() {
    var a = FusionCharts(["private","FlashRenderer"]);
    if (a !== void 0) {
        try {
            a.swfobject = window.swfobject,window.swfobject.createCSS("object.FusionCharts:focus, embed.FusionCharts:focus", "outline: none")
        } catch(h) {
        }
        a.core.options.requiredFlashPlayerVersion = "8";
        a.core.options.flashInstallerUrl = "http://get.adobe.com/flashplayer/";
        a.core.options.installRedirectMessage = "You need Adobe Flash Player 8 (or above) to view the charts on this page. It is a free, lightweight and safe installation from Adobe Systems Incorporated.\n\nWould you like to go to Adobe's website and install Flash Player?";
        a.core.hasRequiredFlashVersion =
            function(c) {
                if (typeof c === "undefined")c = a.core.options.requiredFlashPlayerVersion;
                return window.swfobject ? window.swfobject.hasFlashPlayerVersion(c) : void 0
            };
        var f = !1,g = function(c, d) {
            if (!(d && d.source === "XmlHttpRequest")) {
                var b = c.sender;
                if (b.ref && typeof b.ref.dataInvokedOnSWF === "function" && b.ref.dataInvokedOnSWF() && typeof b.ref.getXML === "function")a.raiseWarning(b, "08300116", "run", "::DataHandler~__fusioncharts_vars", "Data was set in UTF unsafe manner"),b.setChartData(window.unescape(c.sender.ref.getXML({escaped:!0})),
                    FusionChartsDataFormats.XML, !0),b.flashVars.dataXML = b.getChartData(FusionChartsDataFormats.XML),delete b.flashVars.dataURL;
                c.sender.removeEventListener("DataLoaded", g)
            }
        };
        window.__fusioncharts_dimension = function() {
            var c = /.*?\%\s*?$/g;
            return function(d) {
                var b,e;
                return!((b = a.core(d))instanceof a.core && b.ref && (e = b.ref.parentNode)) ? {} : {width:e.offsetWidth * (c.test(b.width) ? parseInt(b.width, 10) / 100 : 1),height:e.offsetHeight * (c.test(b.height) ? parseInt(b.height, 10) / 100 : 1)}
            }
        }();
        window.__fusioncharts_vars = function(c, d) {
            var b = a.core.items[c];
            if (!(b instanceof a.core))return setTimeout(function() {
                var b;
                if (b = c !== void 0) {
                    var d = window.swfobject.getObjectById(c),e,i,f;
                    b = {};
                    var g;
                    if (!d && typeof d.tagName !== "string")b = void 0; else {
                        if ((e = d.parentNode) && e.tagName && e.tagName.toLowerCase() === "object" && e.parentNode)e = e.parentNode;
                        if (e) {
                            b.renderAt = e;
                            if (!(d.tagName !== "OBJECT" && d.getAttribute && (g = d.getAttribute("flashvars") || "")) && d.hasChildNodes && d.hasChildNodes()) {
                                f = d.childNodes;
                                e = 0;
                                for (d = f.length; e < d; e += 1)if (f[e].tagName ===
                                    "PARAM" && (i = f[e].getAttribute("name")) && i.toLowerCase() === "flashvars")g = f[e].getAttribute("value") || ""
                            }
                            if (g && typeof g.toString === "function") {
                                g = g.split(/\=|&/g);
                                b.flashVars = {};
                                e = 0;
                                for (d = g.length; e < d; e += 2)b.flashVars[g[e]] = g[e + 1]
                            }
                        } else b = void 0
                    }
                }
                b || a.raiseError(a.core, "25081621", "run", "::FlashRenderer", "FusionCharts Flash object is accessing flashVars of non-existent object.")
            }, 0),!1;
            if (typeof d === "object") {
                if (b.ref && typeof b.ref.dataInvokedOnSWF === "function" && b.ref.dataInvokedOnSWF())if (d.dataURL !==
                    void 0)b.addEventListener("DataLoaded", g); else {
                    if (d.dataXML !== void 0)d.dataXML = window.unescape(d.dataXML)
                } else delete d.dataURL,delete d.dataXML;
                a.extend(b.flashVars, d);
                return!0
            }
            return b.flashVars
        };
        window.__fusioncharts_event = function(c, d) {
            setTimeout(function() {
                a.raiseEvent(c.type, d, a.core.items[c.sender])
            }, 0)
        };
        var e = function(c) {
            c = c.sender;
            if (c.options.renderer === "flash") {
                if (c.width === void 0)c.width = a.renderer.policies.flashVars.chartWidth[1];
                if (c.height === void 0)c.height = a.renderer.policies.flashVars.chartHeight[1];
                if (c.flashVars.DOMId === void 0)c.flashVars.DOMId = c.id;
                a.extend(c.flashVars, {registerWithJS:"1",chartWidth:c.width,chartHeight:c.height,InvalidXMLText:"Invalid data."});
                if (Boolean(c.options.autoInstallRedirect) === !0 && !window.swfobject.hasFlashPlayerVersion(a.core.options.requiredFlashPlayerVersion.toString()) && f === !1 && (f = !0,window.confirm(a.core.options.installRedirectMessage)))window.location.href = a.core.options.flashInstallerUrl;
                if (c.options.dataFormat === void 0 && c.options.dataSource === void 0)c.options.dataFormat =
                    FusionChartsDataFormats.XMLURL,c.options.dataSource = "Data.xml"
            }
        };
        a.renderer.register("flash", {dataFormat:"xml",init:function() {
            a.addEventListener("BeforeInitialize", e)
        },policies:{params:{scaleMode:["scaleMode","noScale"],scale:["scaleMode","noScale"],wMode:["wMode","opaque"],menu:["menu",void 0],bgColor:["bgColor",void 0],allowScriptAccess:["allowScriptAccess","always"],quality:["quality","best"],swLiveConnect:["swLiveConnect",void 0],base:["base",void 0],align:["align",void 0],salign:["sAlign",void 0]},
            flashVars:{lang:["lang","EN"],debugMode:["debugMode",void 0],scaleMode:["scaleMode","noScale"],animation:["animate",void 0]},options:{autoInstallRedirect:["autoInstallRedirect",!1],useLegacyXMLTransport:["_useLegacyXMLTransport",!1]}},render:function(c, d) {
            Boolean(this.flashVars.animation) === !0 && delete this.flashVars.animation;
            this.src || a.raiseError(this, "03102348", "run", "::FlashRenderer.render", 'Could not find a valid "src" attribute. swfUrl or chart type missing.');
            var b = {},e = this.flashVars.dataXML,
                f = this.flashVars.dataURL;
            a.extend(b, this.flashVars);
            if (this.flashVars.stallLoad === !0) {
                if (this.options.dataFormat === FusionChartsDataFormats.XML)e = this.options.dataSource;
                if (this.options.dataFormat === FusionChartsDataFormats.XMLURL)f = this.options.dataSource
            }
            if (a.core.debugMode.enabled() && a.core.debugMode.syncStateWithCharts && b.debugMode === void 0 && this.options.safeMode)b.debugMode = "1";
            this.__state.lastRenderedSrc = this.src;
            b.dataXML = (typeof window.encodeURIComponent === "function" ? window.encodeURIComponent(e) :
                window.escape(e)) || "";
            b.dataURL = a.isXSSSafe(f) ? f || "" : (typeof window.encodeURIComponent === "function" ? window.encodeURIComponent(f) : window.escape(f)) || "";
            if (!window.swfobject || !window.swfobject.embedSWF || !window.swfobject.FusionChartsModified)window.swfobject = a.swfobject;
            window.swfobject && window.swfobject.embedSWF ? window.swfobject.embedSWF(this.src, c, this.width, this.height, a.core.options.requiredFlashPlayerVersion, void 0, b, this.params, this.attributes, d) : a.raiseError(this, "1113061611", "run", "FlashRenderer~render",
                Error("Could not find swfobject library or embedSWF API"))
        },update:function(a) {
            var d = this.ref,b = a.data;
            this.flashVars.dataXML = b;
            a.error === void 0 ? this.isActive() && typeof d.setDataXML === "function" ? this.src !== this.__state.lastRenderedSrc ? this.render() : d.setDataXML(b, !1) : (delete this.flashVars.dataURL,delete this.flashVars.animation) : this.isActive() && typeof d.showChartMessage === "function" ? d.showChartMessage("InvalidXMLText") : (this.flashVars.dataXML = "<Invalid" + a.format.toUpperCase() + ">",delete this.flashVars.dataURL,
                delete this.flashVars.animation)
        },resize:function() {
            this.flashVars.chartWidth = this.width;
            this.flashVars.chartHeight = this.height;
            if (this.ref !== void 0)this.ref.width = this.width,this.ref.height = this.height,typeof this.ref.resize === "function" && this.ref.resize(this.ref.offsetWidth, this.ref.offsetHeight)
        },config:function(c) {
            a.extend(this.flashVars, c)
        },dispose:function() {
            var a;
            window.swfobject.removeSWF(this.id);
            (a = this.ref) && a.parentNode && a.parentNode.removeChild(a)
        },protectedMethods:{flashVars:!0,params:!0,
            setDataXML:!0,setDataURL:!0,hasRendered:!0,getXML:!0,getDataAsCSV:!0,print:!0,exportChart:!0},events:{Loaded:function(a) {
            a.sender.flashVars.animation = "0"
        },DataLoadRequested:function(c, d) {
            var b = c.sender,e = d.url,f = !1;
            if (d.dataFormat === FusionChartsDataFormats.XML && (window.location.protocol === "file:" && Boolean(b.options.safeMode) || Boolean(b.options.useLegacyXMLTransport)))b.ref ? b.ref.setDataURL ? b.ref.setDataURL(e, !1) : a.raiseError(this, "0109112330", "run", ">FlashRenderer^DataLoadRequested", Error("Unable to fetch URL due to security restriction on Flash Player. Update global security settings.")) :
                b.flashVars.dataURL = e,c.stopPropagation(),f = !0,d.cancelDataLoadRequest(),b.addEventListener("DataLoaded", g);
            if (b.ref && b.showChartMessage)delete b.flashVars.stallLoad,b.options.showDataLoadingMessage && b.ref.showChartMessage("XMLLoadingText"); else if (!f)b.flashVars.stallLoad = !0
        },DataLoadRequestCancelled:function(a) {
            a = a.sender;
            a.ref && typeof a.showChartMessage === "function" && a.ref.showChartMessage();
            delete a.flashVars.stallLoad
        },DataLoadError:function(a, d) {
            var b = a.sender;
            b.ref && typeof b.ref.showChartMessage ===
                "function" && d.source === "XmlHttpRequest" ? b.ref.showChartMessage("LoadDataErrorText") : (delete b.flashVars.dataURL,b.flashVars.dataXML = "<JSON parsing error>",delete b.flashVars.stallLoad)
        },DataLoadRequestCompleted:function(a, d) {
            d.source === "XmlHttpRequest" && delete a.sender.flashVars.stallLoad
        }},prototype:{getSWFHTML:function() {
            var a = document.createElement("span"),d = document.createElement("span"),b = "RnVzaW9uQ2hhcnRz" + (new Date).getTime();
            a.appendChild(d);
            d.setAttribute("id", b);
            a.style.display = "none";
            document.getElementsByTagName("body")[0].appendChild(a);
            window.swfobject.embedSWF(this.src, b, this.width, this.height, "8.0.0", void 0, this.flashVars, this.params, this.attrs);
            d = a.innerHTML.replace(b, this.id);
            window.swfobject.removeSWF(b);
            a.parentNode.removeChild(a);
            return d
        },setTransparent:function(a) {
            typeof a !== "boolean" && a !== null && (a = !0);
            this.params.wMode = a === null ? "window" : a === !0 ? "transparent" : "opaque"
        },registerObject:function() {
        },addVariable:function() {
            a.raiseWarning(this, "1012141919", "run", "FlashRenderer~addVariable()", 'Use of deprecated "addVariable()". Replace with "configure()".');
            a.core.prototype.configure.apply(this, arguments)
        },setDataXML:function(c) {
            a.raiseWarning(this, "11033001081", "run", "GenericRuntime~setDataXML()", 'Use of deprecated "setDataXML()". Replace with "setXMLData()".');
            c === void 0 || c === null || typeof c.toString !== "function" ? a.raiseError(this, "25081627", "param", "~setDataXML", 'Invalid data type for parameter "xml"') : this.ref === void 0 || this.ref === null || typeof this.ref.setDataXML !== "function" ? this.setChartData(c.toString(), FusionChartsDataFormats.XML) : this.ref.setDataXML(c.toString())
        },
            setDataURL:function(c) {
                a.raiseWarning(this, "11033001082", "run", "GenericRuntime~setDataURL()", 'Use of deprecated "setDataURL()". Replace with "setXMLUrl()".');
                c === void 0 || c === null || typeof c.toString !== "function" ? a.raiseError(this, "25081724", "param", "~setDataURL", 'Invalid data type for parameter "url"') : this.ref === void 0 || this.ref === null || typeof this.ref.setDataURL !== "function" ? this.setChartData(c.toString(), FusionChartsDataFormats.XMLURL) : this.ref.setDataURL(c.toString())
            }}});
        a.renderer.setDefault("flash")
    }
})();
(function() {
    var a;
    a = FusionCharts(["private","modules.renderer.highcharts"]);
    if (a !== void 0) {
        a.core.options.jQuerySourceFileName = "jquery.min.js";
        var h = function() {
        },f = a.hcLib = {cmdQueue:[],moduleCmdQueue:{jquery:[],base:[],charts:[],powercharts:[],widgets:[],maps:[]}},g = f.chartAPI = function() {
        },e = f.moduleDependencies = {},c = f.moduleMeta = {jquery:"jquery.min.js",base:"FusionCharts.HC.js",charts:"FusionCharts.HC.Charts.js",powercharts:"FusionCharts.HC.PowerCharts.js",widgets:"FusionCharts.HC.Widgets.js",maps:"FusionCharts.HC.Maps.js"};
        f.getDependentModuleName = function(b) {
            var a,c,d = [];
            for (a in e)if ((c = e[a][b]) !== void 0)d[c] = a;
            return d
        };
        var d = f.hasModule = function(b) {
            if (c[b] && c[b].blocked)return!0;
            return Boolean(a.modules["modules.renderer.highcharts-" + b])
        },b = f.loadModule = function(b, d) {
            b instanceof Array || (b = [b]);
            var e = b.length,f = 0,j = function() {
                if (f >= e)d(); else {
                    var g,k = b[f];
                    f += 1;
                    if (!(g = c[k]) || !g.blocked)a.loadScript((k === "jquery" ? a.core.options.jQuerySourceFileName : a.core.options["Html5" + k + "Src"]) || g, {success:j,failure:function() {
                        }},
                        void 0, !0)
                }
            };
            j()
        },k = f.executeWaitingCommands = function(b) {
            for (var a; a = b.shift();)h[a.cmd].apply(a.obj, a.args)
        },j = function() {
            var b = function() {
            };
            b.prototype = {LoadDataErrorText:"Error in loading data.",XMLLoadingText:"Retrieving Data. Please Wait",InvalidXMLText:"Invalid data.",ChartNoDataText:"No data to display.",ReadingDataText:"Reading Data. Please Wait",ChartNotSupported:"Chart Type Not Supported."};
            return b.prototype.constructor = b
        }();
        h.dataFormat = "json";
        h.policies = {jsVars:{}};
        h.init = function() {
            window.jQuery ?
                d("base") ? h.ready = !0 : b("base", function() {
                    h.ready = !0;
                    k(f.cmdQueue)
                }) : b("jquery", function() {
                jQuery.noConflict();
                if (window.$ === void 0)window.$ = jQuery;
                h.init()
            })
        };
        h.render = function() {
            f.cmdQueue.push({cmd:"render",obj:this,args:arguments})
        };
        h.update = function() {
            f.cmdQueue.push({cmd:"update",obj:this,args:arguments})
        };
        h.resize = function() {
            f.cmdQueue.push({cmd:"resize",obj:this,args:arguments})
        };
        h.dispose = function() {
            var b = f.cmdQueue,a,c;
            a = 0;
            for (c = b.length; a < c; a += 1)b[a].obj === this && b[a].splice(a, 1)
        };
        h.config =
            function() {
                f.cmdQueue.push({cmd:"config",obj:this,args:arguments})
            };
        h.load = function() {
            f.cmdQueue.push({cmd:"load",obj:this,args:arguments})
        };
        h.protectedMethods = {};
        h.events = {BeforeInitialize:function(b) {
            var b = b.sender,a = b.jsVars,c = this.chartType();
            a.fcObj = b;
            a.msgStore = a.msgStore || new j;
            a.cfgStore = a.cfgStore || {};
            a.drawCount = 0;
            g[c] || h.load.call(b)
        },DataLoadRequested:function(b) {
            var b = b.sender,a = b.jsVars;
            delete a.loadError;
            b.ref && b.options.showDataLoadingMessage ? a.hcObj && !a.hasNativeMessage && a.hcObj.showLoading ?
                a.hcObj.showLoading(a.msgStore.XMLLoadingText) : b.ref.showChartMessage ? b.ref.showChartMessage("XMLLoadingText") : a.stallLoad = !0 : a.stallLoad = !0
        },DataLoadRequestCompleted:function(b) {
            delete b.sender.id.stallLoad
        },DataLoadError:function(b) {
            var b = b.sender,a = b.jsVars;
            delete a.stallLoad;
            a.loadError = !0;
            b.ref && typeof b.ref.showChartMessage === "function" && b.ref.showChartMessage("LoadDataErrorText")
        }};
        a.extend(h.prototype, {getSWFHTML:function() {
        },getSVGString:function() {
            return this.jsVars && this.jsVars.hcObj &&
                this.jsVars.hcObj.getSVG && this.jsVars.hcObj.getSVG()
        },addVariable:function() {
            a.raiseWarning(this, "11090611381", "run", "JavaScriptRenderer~addVariable()", 'Use of deprecated "addVariable()". Replace with "configure()".');
            a.core.prototype.configure.apply(this, arguments)
        },getXML:function() {
            return this.getXMLData.apply(this, arguments)
        },setDataXML:function() {
            return this.setXMLData.apply(this, arguments)
        },setDataURL:function() {
            return this.setXMLUrl.apply(this, arguments)
        },hasRendered:function() {
            return this.jsVars.hcObj &&
                this.jsVars.hcObj.hasRendered
        },print:function() {
            return this.jsVars.hcObj && this.jsVars.hcObj.hasRendered && this.jsVars.hcObj.print()
        },exportChart:function(b) {
            var a = this.jsVars.hcObj,c = {},d;
            if (a && a.options && a.options.exporting && a.options.exporting.enabled) {
                if (!(b === void 0 || b === null))for (d in b)switch (d.toLowerCase()) {
                    case "exportfilename":
                        c.filename = b[d];
                        break;
                    case "exportformat":
                        c.type = {png:"image/png",jpg:"image/jpeg",pdf:"application/pdf",svg:"image/svg+xml"}[b[d].toLowerCase()] || "image/png"
                }
                a.exportChart(c)
            }
        }});
        h.prototype.setTransparent = function(b) {
            var a;
            if (a = this.jsVars)typeof b !== "boolean" && b !== null && (b = !0),a.transparent = b === null ? !1 : b === !0 ? !0 : !1
        };
        a.extend(a.core, {_fallbackJSChartWhenNoFlash:function() {
            window.swfobject.hasFlashPlayerVersion(a.core.options.requiredFlashPlayerVersion) || a.renderer.setDefault("javascript")
        },_enableJSChartsForSelectedBrowsers:function(b) {
            b === void 0 || b === null || a.renderer.setDefault(RegExp(b).test(navigator.userAgent) ? "javascript" : "flash")
        },_doNotLoadExternalScript:function(b) {
            var a,
                d;
            for (a in b)if (d = a.toLowerCase(),c[d])c[d].blocked = Boolean(b[a])
        },_preloadJSChartModule:function() {
            throw"NotImplemented()";
        }});
        a.renderer.register("javascript", h);
        window.swfobject && window.swfobject.hasFlashPlayerVersion && !window.swfobject.hasFlashPlayerVersion(a.core.options.requiredFlashPlayerVersion) && (a.raiseWarning(a.core, "1204111846", "run", "JSRenderer", "Switched to JavaScript as default rendering due to absence of required Flash Player."),a.renderer.setDefault("javascript"))
    }
})();
(function() {
    var a = FusionCharts(["private","XMLDataHandler"]);
    if (a !== void 0) {
        var h = function(a) {
            return{data:a,error:void 0}
        };
        a.addDataHandler("XML", {encode:h,decode:h});
        var f = a._interactiveCharts = {selectscatter:[!0,!1],dragcolumn2d:[!0,!0],dragarea:[!0,!0],dragline:[!0,!0],dragnode:[!0,!0]},g = function(a) {
            if (a === !1 && typeof this.constructor.prototype.getXMLData === "function")return this.constructor.prototype.getXMLData.apply(this);
            return this.ref.getXMLData()
        };
        a.addEventListener("Loaded", function(a) {
            a =
                a.sender;
            if (a.chartType && f[a.chartType()] && f[a.chartType()][0] && a.options && a.options.renderer === "flash")a.getXMLData = g
        })
    }
})();
var JSON;
JSON || (JSON = {});
(function() {
    function a(b) {
        return b < 10 ? "0" + b : b
    }

    function h(a) {
        e.lastIndex = 0;
        return e.test(a) ? '"' + a.replace(e, function(a) {
            var c = b[a];
            return typeof c === "string" ? c : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
        }) + '"' : '"' + a + '"'
    }

    function f(b, a) {
        var e,g,p,s,u = c,t,q = a[b];
        q && typeof q === "object" && typeof q.toJSON === "function" && (q = q.toJSON(b));
        typeof k === "function" && (q = k.call(a, b, q));
        switch (typeof q) {
            case "string":
                return h(q);
            case "number":
                return isFinite(q) ? String(q) : "null";
            case "boolean":
            case "null":
                return String(q);
            case "object":
                if (!q)return"null";
                c += d;
                t = [];
                if (Object.prototype.toString.apply(q) === "[object Array]") {
                    s = q.length;
                    for (e = 0; e < s; e += 1)t[e] = f(e, q) || "null";
                    p = t.length === 0 ? "[]" : c ? "[\n" + c + t.join(",\n" + c) + "\n" + u + "]" : "[" + t.join(",") + "]";
                    c = u;
                    return p
                }
                if (k && typeof k === "object") {
                    s = k.length;
                    for (e = 0; e < s; e += 1)typeof k[e] === "string" && (g = k[e],(p = f(g, q)) && t.push(h(g) + (c ? ": " : ":") + p))
                } else for (g in q)Object.prototype.hasOwnProperty.call(q, g) && (p = f(g, q)) && t.push(h(g) + (c ? ": " : ":") + p);
                p = t.length === 0 ? "{}" : c ? "{\n" + c + t.join(",\n" +
                    c) + "\n" + u + "}" : "{" + t.join(",") + "}";
                c = u;
                return p
        }
    }

    if (typeof Date.prototype.toJSON !== "function")Date.prototype.toJSON = function() {
        return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "Z" : null
    },String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
        return this.valueOf()
    };
    var g = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,
        e = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,c,d,b = {"\u0008":"\\b","\t":"\\t","\n":"\\n","\u000c":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},k;
    if (typeof JSON.stringify !== "function")JSON.stringify = function(b, a, e) {
        var g;
        d = c = "";
        if (typeof e === "number")for (g = 0; g < e; g += 1)d += " "; else typeof e === "string" && (d = e);
        if ((k = a) && typeof a !== "function" && (typeof a !== "object" || typeof a.length !== "number"))throw Error("JSON.stringify");
        return f("",
            {"":b})
    };
    if (typeof JSON.parse !== "function")JSON.parse = function(b, a) {
        function c(b, d) {
            var e,f,g = b[d];
            if (g && typeof g === "object")for (e in g)Object.prototype.hasOwnProperty.call(g, e) && (f = c(g, e),f !== void 0 ? g[e] = f : delete g[e]);
            return a.call(b, d, g)
        }

        var d,b = String(b);
        g.lastIndex = 0;
        g.test(b) && (b = b.replace(g, function(b) {
            return"\\u" + ("0000" + b.charCodeAt(0).toString(16)).slice(-4)
        }));
        if (/^[\],:{}\s]*$/.test(b.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
            "]").replace(/(?:^|:|,)(?:\s*\[)+/g, "")))return d = eval("(" + b + ")"),typeof a === "function" ? c({"":d}, "") : d;
        throw new SyntaxError("JSON.parse");
    }
})();
(function() {
    var a = FusionCharts(["private","JSON_DataHandler"]);
    if (a !== void 0) {
        window.JSON === void 0 && a.raiseError(this, "1113062012", "run", "JSONDataHandler", Error("Could not find library support for JSON parsing."));
        var h = function(a) {
            if (a === null || a === void 0 || typeof a.toString !== "function")return"";
            return a = a.toString().replace(/&/g, "&amp;").replace(/\'/g, "&#39;").replace(/\"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        },f = function() {
            var e = {arr:{set:!0,trendlines:!0,vtrendlines:!0,line:{trendlines:!0,
                vtrendlines:!0},data:!0,dataset:!0,lineset:!0,categories:!0,category:!0,linkeddata:!0,application:!0,definition:!0,axis:!0,connectors:!0,connector:{connectors:!0},trendset:!0,row:{rows:!0},column:{columns:!0},color:{colorrange:!0},label:{labels:!0}},tag:{chart:"linkedchart",map:"linkedmap",graph:"linkedgraph",set:"data",vline:{chart:"data",graph:"data",dataset:"data",categories:"category",linkedchart:"data",linkedgraph:"data"},apply:{application:"application"},style:{definition:"definition"}},attr:{vline:{vline:"true"}},
                ins:{chart:!0,map:!0,graph:!0},text:{dataset:"data",categories:"category"},group:{styles:{definition:!0,application:!0}}},c = {append:function(b, a, c, d) {
                e.arr[c] && (e.arr[c] === !0 || e.arr[c][d] === !0) ? (a[c]instanceof Array || (a[c] = []),a[c].push(b)) : a[c] = b
            },child:function(b, d, f, g) {
                var i,h,p,s;
                for (i = 0; i < d.length; i += 1)if (h = d[i].nodeName.toLowerCase(),d[i].nodeType === 1)p = c.attr(d[i].attributes),e.ins[h] === !0 && (s = p,p = {},p[h] = s),typeof e.attr[h] === "object" && a.extend(p, e.attr[h]),typeof e.tag[h] === "object" && typeof e.tag[h][f] ===
                    "string" && (h = e.tag[h][f]),typeof e.tag[h] === "string" && (h = e.tag[h]),d[i].childNodes.length && (e.group[f] && e.group[f][h] ? c.child(b, d[i].childNodes, h, g) : c.child(p, d[i].childNodes, h, g)),(!e.group[f] || !e.group[f][h]) && c.append(p, b, h, f); else if (d[i].nodeType === 3 && g.chart && parseInt(g.chart.compactdatamode, 10) && typeof e.text[f] === "string")h = e.text[f],p = d[i].data,c.append(p, b, h, f)
            },attr:function(b) {
                var a,c = {};
                if (!b || !b.length)return c;
                for (a = 0; a < b.length; a += 1)c[b[a].nodeName.toLowerCase()] = b[a].nodeValue;
                return c
            }},
                d = function(b) {
                    var a = {},e,f,i;
                    if (typeof b !== "object" && typeof b.toString !== "function")return d.errorObject = new TypeError("xml2json.parse()"),a;
                    b = b.toString().replace(/<\!--[\s\S]*?--\>/g, "").replace(/<\?xml[\s\S]*?\?>/ig, "").replace(/&(?!([^;\n\r]+?;))/g, "&amp;$1");
                    b = b.replace(/^\s\s*/, "");
                    e = /\s/;
                    for (var g = b.length; e.test(b.charAt(g -= 1)););
                    b = b.slice(0, g + 1);
                    if (!b)return a;
                    window.DOMParser ? e = (new window.DOMParser).parseFromString(b, "text/xml") : (e = new ActiveXObject("Microsoft.XMLDOM"),e.async = "false",
                        e.loadXML(b));
                    if (!(e.childNodes.length === 1 && (f = e.childNodes[0]) && f.nodeName && (i = f.nodeName.toLowerCase()) && (i === "chart" || i === "map" || i === "graph")))return d.errorObject = new TypeError("xml2json.parse()"),a;
                    a[i] = c.attr(f.attributes);
                    f.childNodes && c.child(a, f.childNodes, i, a);
                    delete d.errorObject;
                    return a
                };
            return function(b) {
                delete d.errorObject;
                return{data:d(b),error:d.errorObject}
            }
        }(),g = function() {
            var a = {items:{explode:{data:"set"},attr:{chart:{chart:"chart",graph:"chart"},graph:{graph:"graph",chart:"graph"},
                map:{map:"map"},linkedchart:{chart:"chart",graph:"graph",map:"map"}},group:{styles:{definition:"style",application:"apply"}}},qualify:function(a, b, c) {
                return typeof this.items[a][c] === "object" ? this.items[a][c][b] : this.items[a][c]
            }},c = function(d, b) {
                var f = "",g = "",m = "",i = "",o,p,s;
                b && typeof b.toLowerCase === "function" && (b = b.toLowerCase());
                if (d instanceof Array)for (o = 0; o < d.length; o += 1)i += typeof d[o] === "string" ? h(d[o]) : c(d[o], b); else {
                    for (o in d)p = o.toLowerCase(),d[o]instanceof Array && (s = a.qualify("group",
                        p, b)) ? g += "<" + p + ">" + c(d[o], s) + "</" + p + ">" : typeof d[o] === "object" ? (s = a.qualify("attr", p, b)) ? (m = c(d[o], s).replace(/\/\>/ig, ""),b = p) : g += c(d[o], p) : p === "vline" && Boolean(d[o]) ? b = "vline" : f += " " + p + '="' + h(d[o]).toString().replace(/\"/ig, "&quot;") + '"';
                    if (s = a.qualify("explode", p, b))b = s;
                    i = (m !== "" ? m : "<" + b) + f + (g !== "" ? ">" + g + "</" + b + ">" : " />")
                }
                return i
            };
            return function(a) {
                delete c.errorObject;
                if (a && typeof a === "string")try {
                    a = JSON.parse(a)
                } catch(b) {
                    c.errorObject = b
                }
                return{data:c(a, a && a.graph ? "graph" : "chart"),error:c.errorObject}
            }
        }();
        a.addDataHandler("JSON", {encode:g,decode:f})
    }
})();
(function() {
    var a = FusionCharts(["private","CSVDataHandler"]);
    if (a !== void 0) {
        var h = function(a) {
            this._data = [];
            this.columnCount = this.rowCount = 0;
            this.configure(a)
        };
        h.prototype.set = function(a, g, e) {
            var c;
            if (this.rowCount <= a) {
                for (c = this.rowCount; c <= a; c += 1)this._data[c] = [];
                this.rowCount = a + 1
            }
            if (this.columnCount <= g)this.columnCount = g + 1;
            this._data[a][g] = e
        };
        h.prototype.configure = function(a) {
            this.delimiter = this._decodePseudoCode(a.delimiter, ",");
            this.qualifier = this._decodePseudoCode(a.qualifier, '"');
            this.eolCharacter =
                this._decodePseudoCode(a.eolCharacter, "\r\n")
        };
        h.prototype._decodePseudoCode = function(a, g) {
            if (a === void 0 || a === null || !a.toString)return g;
            return a.replace("{tab}", "\t").replace("{quot}", '"').replace("{apos}", "'")
        };
        h.prototype.toString = function() {
            var a,g,e = "";
            for (a = 0; a < this.rowCount; a += 1)g = this.qualifier + this._data[a].join(this.qualifier + this.delimiter + this.qualifier) + this.qualifier,e += g === '""' ? this.eolCharacter : g + this.eolCharacter;
            this.rowCount > 0 && (e = e.slice(0, e.length - 2));
            return e
        };
        a.addDataHandler("CSV",
            {encode:function(f, g) {
                a.raiseError(g, "0604111215A", "run", "::CSVDataHandler.encode()", "FusionCharts CSV data-handler only supports encoding of data.");
                throw"FeatureNotSupportedException()";
            },decode:function(f) {
                var f = a.core.transcodeData(f, "xml", "json") || {},g,e,c,d,b,k;
                if (typeof f.chart !== "object")f.chart = {};
                g = new h({separator:f.chart.exportdataseparator,qualifier:f.chart.exportdataqualifier});
                if (f.dataset && f.categories && f.categories[0] && f.categories[0].category)for (e = 0; e < f.dataset.length; e += 1) {
                    g.set(0,
                        e + 1, f.dataset[e].seriesname);
                    d = c = 0;
                    for (b = f.categories[0].category.length; c < b; c += 1)f.categories[0].category[c].vline || (g.set(d + 1, 0, f.categories[0].category[c].label || f.categories[0].category[c].name),k = parseFloat(f.dataset[e] && f.dataset[e].data && f.dataset[e].data[d] ? f.dataset[e].data[d].value : ""),k = isNaN(k) ? "" : k,g.set(d + 1, e + 1, k),d += 1)
                } else if (f.data instanceof Array) {
                    g.set(0, 1, f.chart && f.chart.yaxisname ? f.chart.yaxisname : "Value");
                    b = f.data.length;
                    for (e = 0; e < b; e += 1)f.data[e].vline || (g.set(e + 1, 0, f.data[e].label ||
                        f.data[e].name),k = parseFloat(f.data[e].value ? f.data[e].value : ""),k = isNaN(k) ? "" : k,g.set(e + 1, 1, k))
                }
                g.rowCount > 0 && g.set(0, 0, f.chart && f.chart.xaxisname ? f.chart.xaxisname : "Label");
                return{data:g.toString(),error:void 0}
            }});
        a.core.addEventListener("Loaded", function(a) {
            a = a.sender;
            if (a.options.renderer === "javascript")a.getDataAsCSV = a.ref.getDataAsCSV = a.getCSVData
        })
    }
})();
(function() {
    var a = FusionCharts(["private","DynamicChartAttributes"]);
    a !== void 0 && a.extend(a.core, {setChartAttribute:function(a, f) {
        if (typeof a === "string") {
            var g = a,a = {};
            a[g] = f
        } else if (a === null || typeof a !== "object")return;
        var g = 0,e = this.getChartData(FusionChartsDataFormats.JSON),c,d = e.chart || e.graph || {};
        for (c in a)g += 1,a[c] === null ? delete d[c.toLowerCase()] : d[c.toLowerCase()] = a[c];
        if (g > 0) {
            if (typeof d.animation === "undefined")d.animation = "0";
            this.setChartData(e, FusionChartsDataFormats.JSON)
        }
    },getChartAttribute:function(h) {
        var f =
            (f = this.getChartData(FusionChartsDataFormats.JSON)).chart || f.graph;
        if (arguments.length === 0 || h === void 0 || f === void 0)return f;
        var g,e;
        if (typeof h === "string")g = f[h.toString().toLowerCase()]; else if (h instanceof Array) {
            g = {};
            for (e = 0; e < h.length; e += 1)g[h[e]] = f[h[e].toString().toLowerCase()]
        } else a.raiseError(this, "25081429", "param", "~getChartAttribute()", 'Unexpected value of "attribute"');
        return g
    }}, !0)
})();
(function() {
    var a = FusionCharts(["private","api.LinkManager"]);
    if (a !== void 0) {
        a.policies.link = ["link",void 0];
        var h = window.FusionChartsDOMInsertModes = {REPLACE:"replace",APPEND:"append",PREPEND:"prepend"},f = {},g = function(c, d) {
            this.items = {};
            this.root = c;
            this.parent = d;
            d instanceof a.core ? this.level = this.parent.link.level + 1 : (f[c.id] = [
                {}
            ],this.level = 0)
        },e = function(a, d) {
            return(a.options.containerElement === d.options.containerElement || a.options.containerElementId === d.options.containerElementId) && a.options.insertMode ===
                h.REPLACE
        };
        g.prototype.configuration = function() {
            return f[this.root.id][this.level] || (f[this.root.id][this.level] = {})
        };
        a.extend(a.core, {configureLink:function(c, d) {
            var b;
            if (c instanceof Array) {
                for (b = 0; b < c.length; b += 1)typeof f[this.link.root.id][b] !== "object" && (f[this.link.root.id][b] = {}),a.extend(f[this.link.root.id][b], c[b]);
                f[this.link.root.id].splice(c.length)
            } else if (typeof c === "object") {
                if (typeof d !== "number")d = this.link.level;
                f[this.link.root.id][d] === void 0 && (f[this.link.root.id][d] = {});
                a.extend(f[this.link.root.id][d],
                    c)
            } else a.raiseError(this, "25081731", "param", "~configureLink()", "Unable to update link configuration from set parameters")
        }}, !0);
        a.addEventListener("BeforeInitialize", function(c) {
            if (c.sender.link instanceof g) {
                if (c.sender.link.parent instanceof a.core)c.sender.link.parent.link.items[c.sender.id] = c.sender
            } else c.sender.link = new g(c.sender)
        });
        a.addEventListener("LinkedChartInvoked", function(c, d) {
            var b = c.sender,f = b.clone({dataSource:d.data,dataFormat:d.linkType,link:new g(b.link.root, b)}, !0);
            b.args &&
                parseInt(b.args.animate, 10) !== 0 && delete f.animate;
            a.extend(f, b.link.configuration());
            a.raiseEvent("BeforeLinkedItemOpen", {level:b.link.level}, b.link.root);
            a.core.items[f.id]instanceof a.core && a.core.items[f.id].dispose();
            f = new a.core(f);
            if (!e(f, b) && (!b.options.overlayButton || !b.options.overlayButton.message)) {
                if (typeof b.options.overlayButton !== "object")b.options.overlayButton = {};
                b.options.overlayButton.message = "Close"
            }
            f.render();
            a.raiseEvent("LinkedItemOpened", {level:b.link.level,item:f}, b.link.root)
        });
        a.addEventListener("OverlayButtonClick", function(c, d) {
            if (d.id === "LinkManager") {
                var b = c.sender,f = b.link.level - 1,g = b.link.parent,h = b.link.root;
                a.raiseEvent("BeforeLinkedItemClose", {level:f,item:b}, h);
                setTimeout(function() {
                    a.core.items[b.id] && b.dispose();
                    a.raiseEvent("LinkedItemClosed", {level:f}, h)
                }, 0);
                !g.isActive() && e(b, g) && g.render()
            }
        });
        a.addEventListener("Loaded", function(c) {
            if ((c = c.sender) && c.link !== void 0 && c.link.root !== c && c.link.parent instanceof a.core)if (c.ref && typeof c.ref.drawOverlayButton ===
                "function") {
                var d = a.extend({show:!0,id:"LinkManager"}, c.link.parent.options.overlayButton);
                a.extend(d, c.link.parent.link.configuration().overlayButton || {});
                c.ref.drawOverlayButton(d)
            } else a.raiseWarning(c, "04091602", "run", "::LinkManager^Loaded", "Unable to draw overlay button on object. -" + c.id)
        });
        a.addEventListener("BeforeDispose", function(c) {
            var d = c.sender;
            d && d.link instanceof g && (d.link.parent instanceof a.core && delete d.link.parent.link.items[c.sender.id],delete f[d.id])
        });
        FusionChartsEvents.LinkedItemOpened =
            "linkeditemopened";
        FusionChartsEvents.BeforeLinkedItemOpen = "beforelinkeditemopen";
        FusionChartsEvents.LinkedItemClosed = "linkeditemclosed";
        FusionChartsEvents.BeforeLinkedItemClose = "beforelinkeditemclose"
    }
})();
(function() {
    var a = FusionCharts(["private","PrintManager"]);
    if (a !== void 0) {
        var h = {enabled:!1,invokeCSS:!0,processPollInterval:2E3,message:"Chart is being prepared for print.",useExCanvas:!1,bypass:!1},f = {getCanvasElementOf:function(b, c, d) {
            if (b.__fusioncharts__canvascreated !== !0) {
                var e = document.createElement("canvas"),f = a.core.items[b.id].attributes["class"];
                h.useExCanvas && G_vmlCanvasManager && G_vmlCanvasManager.initElement(e);
                e.setAttribute("class", f);
                e.__fusioncharts__reference = b.id;
                b.parentNode.insertBefore(e,
                    b.nextSibling);
                b.__fusioncharts__canvascreated = !0
            }
            b.nextSibling.setAttribute("width", c || b.offsetWidth || 2);
            b.nextSibling.setAttribute("height", d || b.offsetHeight || 2);
            return b.nextSibling
        },removeCanvasElementOf:function(a) {
            var b = a.ref && a.ref.parentNode ? a.ref.parentNode : a.options.containerElement || window.getElementById(a.options.containerElementId);
            if (b) {
                var c = b.getElementsByTagName("canvas"),d,e;
                e = 0;
                for (d = c.length; e < d; e += 1)if (c[e].__fusioncharts__reference === a.id && (b.removeChild(c[e]),a.ref))a.ref.__fusioncharts__canvascreated =
                    !1
            }
        },rle2rgba:function(a, b, c) {
            typeof c !== "string" && (c = "FFFFFF");
            var a = a.split(/[;,_]/),d,e,f,g,h,j = 0;
            for (e = 0; e < a.length; e += 2) {
                a[e] === "" && (a[e] = c);
                a[e] = ("000000" + a[e]).substr(-6);
                f = parseInt("0x" + a[e].substring(0, 2), 16);
                g = parseInt("0x" + a[e].substring(2, 4), 16);
                h = parseInt("0x" + a[e].substring(4, 6), 16);
                for (d = 0; d < a[e + 1]; d += 1)b[j] = f,b[j + 1] = g,b[j + 2] = h,b[j + 3] = 255,j += 4
            }
            return b
        },rle2array:function(a, b) {
            typeof b !== "string" && (b = "FFFFFF");
            var c = a.split(";"),d,e;
            for (d in c) {
                c[d] = c[d].split(/[_,]/);
                for (e = 0; e < c[d].length; e +=
                    2)c[d][e] = c[d][e] === "" ? b : ("000000" + c[d][e]).substr(-6)
            }
            return c
        },drawText:function(b, c, d, e) {
            b = b.getContext("2d");
            d = d || 2;
            e = e || 2;
            b.clearRect(0, 0, d, e);
            b.textBaseline = "middle";
            b.textAlign = "center";
            b.font = "8pt verdana";
            b.fillStyle = "#776666";
            typeof b.fillText === "function" ? b.fillText(c, d / 2, e / 2) : typeof b.mozDrawText === "function" ? (b.translate(d / 2, e / 2),b.mozDrawText(c)) : a.raiseWarning(a.core, "25081803", "run", "::PrintManager>lib.drawText", "Canvas text drawing is not supported in browser");
            return!0
        },appendCSS:function(a) {
            var b =
                document.createElement("style");
            b.setAttribute("type", "text/css");
            typeof b.styleSheet === "undefined" ? b.appendChild(document.createTextNode(a)) : b.styleSheet.cssText = a;
            return document.getElementsByTagName("head")[0].appendChild(b)
        }};
        f.drawRLE = function(a, b, c, d, e) {
            c = c || 2;
            d = d || 2;
            a.setAttribute("width", c);
            a.setAttribute("height", d);
            a = a.getContext("2d");
            if (typeof a.putImageData === "function" && typeof a.createImageData === "function")c = a.createImageData(c, d),f.rle2rgba(b, c.data, e),a.putImageData(c, 0, 0); else for (e in c =
                f.rle2array(b, e),d = e = b = 0,c)for (d = b = 0; d < c[e].length; d += 2)a.fillStyle = "#" + c[e][d],a.fillRect(b, e, c[e][d + 1], 1),b += parseInt(c[e][d + 1], 10);
            return!0
        };
        var g = {styles:{print:"canvas.FusionCharts{display:none;}@media print{object.FusionCharts{display:none;}canvas.FusionCharts{display:block;}}",error:"canvas.FusionCharts{display:none;}",normal:""},cssNode:void 0},e = {},c = {},d = 0,b;
        g.invoke = function(a) {
            typeof this.styles[a] !== "undefined" && (a = this.styles[a]);
            if (typeof a !== "undefined")this.cssNode !== void 0 && this.cssNode.parentNode !==
                void 0 && this.cssNode.parentNode.removeChild(this.cssNode),g.cssNode = f.appendCSS(a)
        };
        var k = function(c) {
            var j = c.sender.ref,k,m;
            if (j === void 0 || typeof j.prepareImageDataStream !== "function" || j.prepareImageDataStream() === !1)b(c.sender); else {
                e[c.sender.id] || (e[c.sender.id] = j,d += 1,d === 1 && a.raiseEvent("PrintReadyStateChange", {ready:!1,bypass:h.bypass}, c.sender));
                try {
                    k = j.offsetWidth,m = j.offsetHeight,f.drawText(f.getCanvasElementOf(j, k, m), h.message, k, m)
                } catch(u) {
                    g.invoke("error"),a.raiseError(c.sender, "25081807",
                        "run", "::PrintManager>onDrawComplete", "There was an error while showing message to user via canvas.")
                }
            }
        },j = function(b, c) {
            try {
                f.drawRLE(f.getCanvasElementOf(b.sender.ref, c.width, c.height), c.stream, c.width, c.height, c.bgColor) === !0 && e[b.sender.id] && (delete e[b.sender.id],d -= 1,d === 0 && a.raiseEvent("PrintReadyStateChange", {ready:!0,bypass:h.bypass}, b.sender))
            } catch(j) {
                g.invoke("error"),a.raiseError(b.sender, "25081810", "run", "::PrintManager>onImageStreamReady", "There was an error while drawing canvas.")
            }
        },
            m = function(a) {
                f.removeCanvasElementOf(a.sender)
            };
        b = function(b) {
            var d;
            if (b instanceof a.core)c[b.id] = b; else for (d in c)k({sender:c[d]}, {}),delete c[d]
        };
        a.extend(a.core, {printManager:{configure:function(b) {
            a.extend(h, b || {})
        },isReady:function() {
            if (h.bypass)return!0;
            if (d > 0 || !h.enabled)return!1;
            var b,c;
            for (b in a.core.items)if ((c = a.core.items[b].ref) !== void 0 && c.hasRendered && c.hasRendered() === !1)return!1;
            return!0
        },enabled:function(c) {
            if (c === void 0)return h.enabled;
            if (a.renderer.currentRendererName() !==
                "flash" || typeof document.createElement("canvas").getContext !== "function")return h.bypass = !0,a.raiseEvent("PrintReadyStateChange", {ready:!0,bypass:h.bypass}),a.raiseWarning(a.core, "25081816", "run", ".printManager.enabled", "printManager is not compatible with your browser"),h.enabled;
            h.bypass = !1;
            var d = c ? "addEventListener" : "removeEventListener";
            a.core[d]("ImageStreamReady", j);
            a.core[d]("DrawComplete", k);
            a.core[d]("BeforeDispose", m);
            if (c === !0) {
                var e;
                h.invokeCSS === !0 && g.invoke("print");
                for (e in a.core.items)b(a.core.items[e]),
                    b()
            } else {
                var s;
                g.invoke("error");
                for (s in a.core.items)f.removeCanvasElementOf(a.core.items[s]);
                h.bypass || a.raiseEvent("PrintReadyStateChange", {ready:!1,bypass:h.bypass});
                g.invoke("normal")
            }
            return h.enabled = c
        },managedPrint:function(b) {
            h.bypass ? window.print() : a.core.printManager.isReady() ? typeof b === "object" && b.ready !== !0 || (a.removeEventListener("PrintReadyStateChange", a.core.printManager.managedPrint),window.print()) : a.core.printManager.enabled(!0) !== !0 ? window.print() : a.addEventListener("PrintReadyStateChange",
                a.core.printManager.managedPrint)
        }}}, !1);
        FusionChartsEvents.PrintReadyStateChange = "printreadystatechange"
    }
})();
