/*
 Highcharts JS v2.1.6 (2011-07-08)
 Exporting module

 (c) 2010-2011 Torstein H?nsi

 License: www.highcharts.com/license
 */
(function() {
    var P = FusionCharts(["private","modules.renderer.highcharts-lib"]);
    if (P !== void 0) {
        var u = "",k = "0",Q = ".",w = !!document.createElementNS && !!document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,mb = /msie/i.test(navigator.userAgent) && !window.opera,d = /\s+/g,t = /^#?/,b = /^rgba/i,j = /[#\s]/ig,p = /\{br\}/ig,L = Math.abs,C = Object.prototype.toString,I = function(b, d) {
            return!b && b !== !1 && b !== 0 ? d : b
        },sa = function() {
            var b,d,q;
            d = 0;
            for (q = arguments.length; d < q; d += 1)if ((b = arguments[d]) || !(b !== !1 &&
                b !== 0))return b;
            return u
        },J = function() {
            var b,d,q;
            d = 0;
            for (q = arguments.length; d < q; d += 1)if ((b = arguments[d]) || !(b !== !1 && b !== 0))return b
        },da = function() {
            var b,d,q;
            d = 0;
            for (q = arguments.length; d < q; d += 1)if ((b = arguments[d]) || !(b !== !1 && b !== 0))if (!isNaN(b = Number(b)))return b
        },ya = function(b, d) {
            b = !b && b !== !1 && b !== 0 ? NaN : Number(b);
            return isNaN(b) ? null : d ? L(b) : b
        },ka = function(b) {
            return typeof b === "string" ? b.replace(p, "<br />") : u
        },Na = function(b, d) {
            var q,j;
            if (d instanceof Array)for (q = 0; q < d.length; q += 1)typeof d[q] !== "object" ?
                b[q] = d[q] : (typeof b[q] !== "object" && (b[q] = d[q]instanceof Array ? [] : {}),Na(b[q], d[q])); else for (q in d)typeof d[q] === "object" ? (j = C.call(d[q]),j === "[object Object]" ? (typeof b[q] !== "object" && (b[q] = {}),Na(b[q], d[q])) : j === "[object Array]" ? (b[q]instanceof Array || (b[q] = []),Na(b[q], d[q])) : b[q] = d[q]) : b[q] = d[q];
            return b
        },xb = function(b, d) {
            if (typeof b !== "object" && typeof d !== "object")return null;
            typeof d !== "object" && (d = b,b = void 0);
            typeof b !== "object" && (b = d instanceof Array ? [] : {});
            Na(b, d);
            return b
        },Hb = function(b, d) {
            b = Number(b);
            b = isNaN(b) ? 100 : b;
            d !== void 0 && (b = b * d / 100);
            return b % 101
        },Eb = function(b, d, q) {
            var b = b.split(","),j;
            q !== void 0 && (q = da(q.split(",")[0]));
            b[0] = Hb(b[0], q);
            for (j = 1; j < d; j += 1)b[j] = b[0] * Hb(b[j], q) / 100;
            return b.join(",")
        },S = function(d, p, q) {
            var t = 0,k = 0,$a = 0;
            q && q.match(b) && (q = q.split(","),t = q[0].slice(q[0].indexOf("(") + 1),k = q[1],$a = q[2],!p && p !== 0 && (p = parseInt(q[3].slice(0, q[3].indexOf(")")) * 100, 10)));
            if (d)if (d.match(b))q = d.split(","),t = q[0].slice(q[0].indexOf("(") + 1),k = q[1],$a = q[2]; else {
                d = d.replace(j,
                    u).split(",")[0];
                switch (d.length) {
                    case 3:
                        d = d[0] + d[0] + d[1] + d[1] + d[2] + d[2];
                        break;
                    case 6:
                        break;
                    default:
                        d = (d + "FFFFFF").slice(0, 6)
                }
                t = parseInt(d.slice(0, 2), 16);
                k = parseInt(d.slice(2, 4), 16);
                $a = parseInt(d.slice(4, 6), 16)
            }
            !p && p != 0 && (p = 100);
            typeof p === "string" && (p = p.split(",")[0]);
            p = parseInt(p, 10) / 100;
            return"rgba(" + t + "," + k + "," + $a + "," + p + ")"
        },D = function(b, d) {
            d = d < 0 || d > 100 ? 100 : d;
            d /= 100;
            var b = b.replace(j, u),q = parseInt(b, 16),p = Math.floor(q / 65536),t = Math.floor((q - p * 65536) / 256);
            return("000000" + (p * d << 16 | t * d << 8 | (q - p * 65536 -
                t * 256) * d).toString(16)).slice(-6)
        },F = function(b, d) {
            d = d < 0 || d > 100 ? 100 : d;
            d /= 100;
            var b = b.replace(j, u),q = parseInt(b, 16),p = Math.floor(q / 65536),t = Math.floor((q - p * 65536) / 256);
            return("000000" + (256 - (256 - p) * d << 16 | 256 - (256 - t) * d << 8 | 256 - (256 - (q - p * 65536 - t * 256)) * d).toString(16)).slice(-6)
        },Ua = {circle:"circle",triangle:"triangle",square:"square",diamond:"diamond",poly:"poly_"},eb,hb = function() {
            function b(d) {
                var Y;
                if (d && d.offsetWidth && d.offsetHeight) {
                    if (d.appendChild)return d.appendChild(Y = document.createElement("span")),
                        Y.className = "_SmartLabel_Container",Y
                } else if ((d = document.getElementsByTagName("body")[0]) && d.appendChild)return Y = document.createElement("span"),Y.className = "_SmartLabel_Container",C += 1,d.appendChild(Y),Y
            }

            function d(b, Y, q) {
                q.innerHTML = b;
                var p,j,t,k = q.offsetWidth;
                p = Y;
                j = Math.ceil(Y / G);
                if (k < Y)return b.length - 1;
                if (j > b.length)p = Y - k,j = b.length;
                for (; p > 0;)if (q.innerHTML = b.substr(0, j),p = Y - q.offsetWidth,t = Math.floor(p / G))j += t; else return j;
                for (j += t; p < 0;)if (q.innerHTML = b.substr(0, j),p = Y - q.offsetWidth,t = Math.floor(p /
                    G))j += t; else break;
                return j
            }

            function q(d, Y) {
                typeof d === "string" && (d = document.getElementById(d));
                this.parentContainer = d;
                this.container = b(d);
                this.showNoEllipses = !Y;
                this.style = {}
            }

            var p = {font:"font",fontFamily:"font-family","font-family":"font-family",fontWeight:"font-weight","font-weight":"font-weight",fontSize:"font-size","font-size":"font-size",lineHeight:"line-height","line-height":"line-height",textDecoration:"text-decoration","text-decoration":"text-decoration",color:"color",whiteSpace:"white-space",
                "white-space":"white-space",padding:"padding",margin:"margin",background:"background",backgroundColor:"background-color","background-color":"background-color",backgroundImage:"background-image","background-image":"background-image",backgroundPosition:"background-position","background-position":"background-position",backgroundPositionLeft:"background-position-left","background-position-left":"background-position-left",backgroundPositionTop:"background-position-top","background-position-top":"background-position-top",
                backgroundRepeat:"background-repeat","background-repeat":"background-repeat",border:"border",borderColor:"border-color","border-color":"border-color",borderStyle:"border-style","border-style":"border-style",borderThickness:"border-thickness","border-thickness":"border-thickness",borderTop:"border-top","border-top":"border-top",borderTopColor:"border-top-color","border-top-color":"border-top-color",borderTopStyle:"border-top-style","border-top-style":"border-top-style",borderTopThickness:"border-top-thickness",
                "border-top-thickness":"border-top-thickness",borderRight:"border-right","border-right":"border-right",borderRightColor:"border-right-color","border-right-color":"border-right-color",borderRightStyle:"border-right-style","border-right-style":"border-right-style",borderRightThickness:"border-right-thickness","border-right-thickness":"border-right-thickness",borderBottom:"border-bottom","border-bottom":"border-bottom",borderBottomColor:"border-bottom-color","border-bottom-color":"border-bottom-color",
                borderBottomStyle:"border-bottom-style","border-bottom-style":"border-bottom-style",borderBottomThickness:"border-bottom-thickness","border-bottom-thickness":"border-bottom-thickness",borderLeft:"border-left","border-left":"border-left",borderLeftColor:"border-left-color","border-left-color":"border-left-color",borderLeftStyle:"border-left-style","border-left-Style":"border-left-style",borderLeftThickness:"border-left-thickness","border-left-thickness":"border-left-thickness"};
            eb = function() {
                var b =
                    document.createElement("span"),d,Y = {lineHeight:!0,"line-height":!0},q = function() {
                    return da(parseInt(b.style.fontSize, 10), 10) * 1.4 + "px"
                };
                b.innerHTML = "fy";
                d = window.getComputedStyle ? function() {
                    return window.getComputedStyle(b, null).lineHeight
                } : b.currentStyle ? function() {
                    return b.currentStyle.lineHeight
                } : q;
                return function(j) {
                    var t,k = "";
                    for (t in j)!Y[t] && p[t] && (k += p[t] + " : " + j[t] + ";");
                    mb && !w ? b.style.setAttribute("cssText", k) : b.setAttribute("style", k);
                    t = d();
                    parseFloat(t) || (t = q());
                    return j.lineHeight = t
                }
            }();
            var j = {position:"absolute",top:"-9999em",whiteSpace:"nowrap"},t = 0,Y = /\b_SmartLabel\b/,k = /\b_SmartLabelBR\b/,u = /(\<[^\<\>]+?\>)|(&(?:[a-z]+|#[0-9]+);|.)/ig,L = RegExp("<span[^>]+?_SmartLabel[^>]+?>(.*?)</span>", "ig"),Ba = /<[^>][^<]*[^>]+>/i,I = 0,U = 0,G = 0,J = 0,C = 0,D,P,ra;
            document.getElementsByClassName ? (D = "getElementsByClassName",P = "_SmartLabel",ra = !0) : (D = "getElementsByTagName",P = "span",ra = !1);
            q.prototype = {getSmartText:function(q, p, j, wb) {
                if (!this.container)this.container = b(this.parentContainer),this.setStyle();
                var $ = {text:q,maxWidth:p,maxHeight:j,width:null,height:null,oriTextWidth:null,oriTextHeight:null,oriText:q,isTruncated:!1},w = !1,G,C,F,S = -1,Q = -1,la = this.container,ka,da = [],sa = this.showNoEllipses ? "" : "...",Ha = function(b) {
                    for (var b = b.replace(/^\s\s*/, ""),d = /\s/,q = b.length; d.test(b.charAt(q -= 1)););
                    return b.slice(0, q + 1)
                };
                if (la) {
                    la.innerHTML = q;
                    $.oriTextWidth = F = la.offsetWidth;
                    $.oriTextHeight = w = la.offsetHeight;
                    if (w <= j && F <= p)return $.width = $.oriTextWidth = F,$.height = $.oriTextHeight = w,$;
                    if (I > j)return $.text =
                        "",$.width = $.oriTextWidth = 0,$.height = $.oriTextHeight = 0,$;
                    q = Ha(q).replace(/(\s+)/g, " ");
                    w = Ba.test(q);
                    i = 0;
                    F = this.showNoEllipses ? p : p - t;
                    if (w) {
                        q = q.replace(u, '$1<span class="_SmartLabel">$2</span>');
                        q = q.replace(/(\<br\s*\/*\>)/g, "<span class='_SmartLabel _SmartLabelBR'>$1</span>");
                        la.innerHTML = q;
                        var w = la[D](P),ta;
                        ka = [];
                        for (var ya = -1,Ha = 0,S = w.length; Ha < S; Ha += 1)if (q = w[Ha],ra || Y.test(q.className))if (ta = q.innerHTML,ta != "") {
                            if (ta == " ")ya = ka.length;
                            ka.push({spaceIdx:ya,elem:q});
                            da.push(ta)
                        }
                        delete w;
                        i = 0;
                        w = ka.length;
                        U = ka[0].elem.offsetWidth;
                        if (U > p)return $.text = "",$.width = $.oriTextWidth = $.height = $.oriTextHeight = 0,$; else U > F && !this.showNoEllipses && (F = p - 2 * J,F > U ? sa = ".." : (F = p - J,F > U ? sa = "." : (F = 0,sa = "")));
                        if (wb)for (; i < w; i += 1)q = ka[i].elem,Ha = q.offsetLeft + q.offsetWidth,Ha > F && (C || (C = i),la.offsetWidth > p && (G = i,i = w)); else for (; i < w; i += 1)if (q = ka[i].elem,S = q.offsetHeight + q.offsetTop,Ha = q.offsetLeft + q.offsetWidth,wb = null,Ha > F) {
                            if (C || (C = i),Ha > p)S = ka[i].spaceIdx,S > Q ? (ka[S].elem.innerHTML = "<br/>",Q = S) : q.parentNode.insertBefore(wb =
                                document.createElement("br"), q),q.offsetHeight + q.offsetTop > j ? (wb ? wb.parentNode.removeChild(wb) : ka[S].elem.innerHTML = " ",G = i,i = w) : C = null
                        } else S > j && (G = i,i = w);
                        if (G < w) {
                            $.isTruncated = !0;
                            C = C ? C : G;
                            for (i = w - 1; i >= C; i -= 1)q = ka[i].elem,q.parentNode.removeChild(q);
                            for (; i >= 0; i -= 1)q = ka[i].elem,k.test(q.className) ? q.parentNode.removeChild(q) : i = 0
                        }
                        $.text = la.innerHTML.replace(L, "$1");
                        if ($.isTruncated)$.text += sa,$.text = '<span title="' + da.join("") + '">' + $.text + "</span>"
                    } else {
                        da = q.split("");
                        w = da.length;
                        G = "";
                        C = [];
                        la.innerHTML =
                            da[0];
                        U = la.offsetWidth;
                        if (F > U)C = q.substr(0, d(q, F, la)).split(""),i = C.length - 1; else if (U > p)return $.text = "",$.width = $.oriTextWidth = $.height = $.oriTextHeight = 0,$; else this.showNoEllipses || (F = p - 2 * J,F > U ? sa = ".." : (F = p - J,F > U ? sa = "." : (F = 0,sa = "")));
                        if (wb)for (; i < w; i += 1) {
                            if (C[i] = da[i],la.innerHTML = ka = C.join(""),la.offsetWidth > F && (G || (G = ka.substr(0, ka.length - 1)),la.offsetWidth > p))return la.innerHTML = $.text = '<span title="' + $.oriText + '">' + Ha(G) + sa + "</span>",$.width = la.offsetWidth,$.height = la.offsetHeight,$
                        } else for (; i <
                                          w; i += 1)if (C[i] = da[i],la.innerHTML = ka = C.join(""),la.offsetWidth > F && (G || (G = ka.substr(0, ka.length - 1)),la.offsetWidth > p))if (S = q.substr(0, C.length).lastIndexOf(" "),S > Q ? (C.splice(S, 1, "<br/>"),Q = S,wb = S + 1) : (C.splice(C.length - 1, 1, "<br/>" + da[i]),wb = i),la.innerHTML = ka = C.join(""),la.offsetHeight > j)return $.text = la.innerHTML = "<span title='" + $.oriText + "'>" + Ha(G) + sa + "</span>",$.width = la.offsetWidth,$.height = la.offsetHeight,$; else G = null,S = d(q.substr(wb), F, la),C.length < wb + S && (C = C.concat(q.substr(C.length, wb + S - C.length).split("")),
                            i = C.length - 1);
                        $.text = la.innerHTML = ka;
                        $.width = la.offsetWidth;
                        $.height = la.offsetHeight;
                        return $
                    }
                    $.height = la.offsetHeight;
                    $.width = la.offsetWidth
                } else $.error = Error("Body Tag Missing!");
                return $
            },setStyle:function(b) {
                if (b !== this.style || this.styleNotSet) {
                    if (b)delete this.style,this.style = b;
                    if (this.container) {
                        var b = this.container,d = this.style,q;
                        for (q in d)b.style[q] = d[q];
                        for (q in j)b.style[q] = j[q];
                        this.container.innerHTML = "WgI";
                        G = Math.ceil(this.container.offsetWidth / 3);
                        I = this.container.offsetHeight;
                        this.container.innerHTML =
                            "...";
                        t = this.container.offsetWidth;
                        this.container.innerHTML = ".";
                        J = this.container.offsetWidth;
                        this.styleNotSet = !1
                    } else this.styleNotSet = !0
                }
            },getTextSize:function(d, q, Y) {
                if (!this.container)this.container = b(this.parentContainer),this.setStyle();
                var p = {text:d,width:null,height:null,oriTextWidth:null,oriTextHeight:null,isTruncated:!1},j = this.container;
                if (j && (j.innerHTML = d,p.oriTextWidth = j.offsetWidth,p.oriTextHeight = j.offsetHeight,p.width = Math.min(p.oriTextWidth, q),p.height = Math.min(p.oriTextHeight, Y),
                    p.width < p.oriTextWidth || p.height < p.oriTextHeight))p.isTruncated = !0;
                return p
            },getOriSize:function(d) {
                if (!this.container)this.container = b(this.parentContainer),this.setStyle();
                var q = {text:d,width:null,height:null},Y = this.container;
                if (Y)Y.innerHTML = d,q.width = Y.offsetWidth,q.height = Y.offsetHeight;
                return q
            }};
            return q.prototype.constructor = q
        }(),Pa = function() {
            var b = {top:{align:"center",verticalAlign:"top",textAlign:"center"},right:{align:"right",verticalAlign:"middle",textAlign:"left"},bottom:{align:"center",
                verticalAlign:"bottom",textAlign:"center"},left:{align:"left",verticalAlign:"middle",textAlign:"right"}},d = /([^\,^\s]+)\)$/g,q = function(b, d) {
                var q;
                if (/^(bar|bar3d)$/.test(b))this.isBar = !0,this.yPos = "bottom",this.yOppPos = "top",this.xPos = "left",this.xOppPos = "right";
                q = parseInt(d.labelstep, 10);
                this.labelStep = q > 1 ? q : 1;
                this.showLabel = da(d.showlabels, d.shownames, 1);
                this.is3D = /3d$/.test(b)
            };
            q.prototype = {isBar:!1,yPos:"left",yOppPos:"right",xPos:"bottom",xOppPos:"top",addAxisGridLine:function(q, p, j, Y, t, k, u, w) {
                var L = j === "" ? !1 : !0,U = Y > 0 || k.match(d)[1] > 0 ? !0 : !1;
                if (L || U) {
                    U || (k = "rgba(0,0,0,0)",Y = 0.1);
                    p = {isGrid:!0,width:Y,dashStyle:t,color:k,value:p,zIndex:u === void 0 ? 2 : u};
                    if (L)w = q.opposite ? w ? this.xOppPos : this.yOppPos : w ? this.xPos : this.yPos,w = b[w],p.label = {text:j,style:q.labels.style,textAlign:w.textAlign,align:w.align,verticalAlign:w.verticalAlign,rotation:0,x:0,y:0};
                    q.plotLines.push(p)
                }
            },addAxisAltGrid:function(b, d) {
                if (!this.is3D) {
                    var q = da(b._lastValue, b.min),Y = J(b._altGrid, !1);
                    Y && b.plotBands.push({isGrid:!0,
                        color:b.alternateGridColor,to:d,from:q,zIndex:1});
                    b._lastValue = d;
                    b._altGrid = !Y
                }
            },addXaxisCat:function(d, q, p, Y) {
                this.showLabel && Y !== "" && p % this.labelStep === 0 && (p = d.opposite ? this.xOppPos : this.xPos,p = b[p],q = {isGrid:!0,width:0.1,color:"rgba(0,0,0,0)",value:q,label:{text:Y,style:d.labels.style,textAlign:p.textAlign,align:p.align,verticalAlign:p.verticalAlign,rotation:0,x:0,y:0}},d.plotLines.push(q))
            },addVline:function(b, d, q, Y) {
                var p = Y._FCconf,j = p.isBar,Y = Y.chart.plotBorderWidth,t = Y % 2,k = p.divlineStyle,w =
                    ka(d.label),u = Boolean(da(d.showlabelborder, p.showVLineLabelBorder, 1)),G = Boolean(da(d.showlabelbackground, 1)),L = J(d.labelhalign, j ? "left" : "center"),C = J(d.labelvalign, j ? "middle" : "bottom").toLowerCase(),Za = da(d.labelposition, 0),I = da(d.lineposition, 0.5),D = da(d.alpha, p.vLineAlpha, 80),F = J(d.color, p.vLineColor, "333333").replace(/^#?/, "#"),P = J(d.labelbgcolor, p.vLineLabelBgColor, "333333").replace(/^#?/, "#"),Q = F,vb = da(d.thickness, p.vLineThickness, 1),sa = vb * 0.5,ta = Boolean(Number(J(d.dashed, 0))),ya = da(d.dashlen,
                    5),Ka = da(d.dashgap, 2),ca = p.smartLabel,Na = parseInt(k.fontSize, 10) + 2,Pa = 0,Xa = da(d.rotatelabel, p.rotateVLineLabels) ? 270 : 0,I = I < 0 || I > 1 ? 0.5 : I,Za = Za < 0 || Za > 1 ? 0 : Za;
                ca.setStyle(k);
                ca = ca.getOriSize(w);
                F = S(F, D);
                if (j) {
                    switch (C) {
                        case "top":
                            Na -= ca.height + sa + 2;
                            break;
                        case "middle":
                            Na -= ca.height * 0.5 + 1;
                            break;
                        default:
                            Na += sa
                    }
                    d.labelhalign || (Pa -= ca.width * Za)
                } else {
                    switch (C) {
                        case "top":
                            Na -= ca.height + 2 + (Y || 1) * (1 - Za) + Za;
                            break;
                        case "middle":
                            Na -= ca.height * 0.5 + Y * (1 - Za * 2);
                            break;
                        default:
                            Na += (Y - t) * Za
                    }
                    switch (L) {
                        case "left":
                            Pa += vb;
                            break;
                        case "right":
                            Pa -= vb + 1
                    }
                }
                b.plotLines.push({isVline:!0,color:F,width:vb,value:q - 1 + I,zIndex:!p.is3d && d.showontop === "1" ? 5 : 3,dashStyle:ta ? qb(ya, Ka, vb) : void 0,label:{text:w,align:j ? "left" : "center",offsetScale:Za,rotation:Xa,y:Na,x:Pa,textAlign:L,style:{color:Q,fontSize:k.fontSize,fontFamily:k.fontFamily,lineHeight:k.lineHeight,border:u ? "1px solid" : void 0,borderColor:u ? Q : void 0,backgroundColor:G ? P : void 0,backgroundOpacity:G ? J(d.labelbgalpha, p.vLineLabelBgAlpha) / 100 : 0}}})
            }};
            return q.prototype.constructor =
                q
        }(),kb = function() {
            function b(d, q, p) {
                var j;
                if (q <= 0)return String(Math.round(d));
                if (isNaN(q))return d = d.toString(),d.length > 12 && d.indexOf(Q) != -1 && (q = 12 - d.split(Q)[0].length,j = Math.pow(10, q),d = String(Math.round(d * j) / j)),d;
                j = Math.pow(10, q);
                d = String(Math.round(d * j) / j);
                if (p == 1) {
                    d.indexOf(Q) == -1 && (d += ".0");
                    p = d.split(Q);
                    q -= p[1].length;
                    for (p = 1; p <= q; p++)d += k
                }
                return d
            }

            function d(b, q, p) {
                var j = Number(b);
                if (isNaN(j))return u;
                var t = u,k = !1,w = u,$ = u,Za = w = 0,w = 0,Za = b.length;
                b.indexOf(Q) != -1 && (t = b.substring(b.indexOf(Q) +
                    1, b.length),Za = b.indexOf(Q));
                j < 0 && (k = !0,w = 1);
                w = b.substring(w, Za);
                if (w.length > 3) {
                    b = w.length;
                    for (j = 0; j <= b; j++)$ = j > 2 && (j - 1) % 3 == 0 ? w.charAt(b - j) + p + $ : w.charAt(b - j) + $
                } else $ = w;
                t != u && ($ = $ + q + t);
                k == !0 && ($ = "-" + $);
                return $
            }

            var q = {formatnumber:"1",formatnumberscale:"1",defaultnumberscale:u,numberscaleunit:["K","M"],numberscalevalue:[1E3,1E3],numberprefix:u,numbersuffix:u,decimals:u,forcedecimals:k,yaxisvaluedecimals:"2",decimalseparator:Q,thousandseparator:",",indecimalseparator:u,inthousandseparator:u,sformatnumber:"1",
                sformatnumberscale:k,sdefaultnumberscale:u,snumberscaleunit:["K","M"],snumberscalevalue:[1E3,1E3],snumberprefix:u,snumbersuffix:u,sdecimals:"2",sforcedecimals:k,syaxisvaluedecimals:"2",xFormatNumber:k,xFormatNumberScale:k,xDefaultNumberScale:u,xNumberScaleUnit:["K","M"],xNumberScaleValue:[1E3,1E3],xNumberPrefix:u,xNumberSuffix:u},p = {mscombidy2d:{formatnumberscale:"1"}},j = function(b, d) {
                var j,t,k,w,u = p[d];
                typeof u !== "object" && (u = q);
                I(b.numberscaleunit) && (j = b.numberscaleunit.split(","));
                I(b.snumberscaleunit) &&
                (t = b.snumberscaleunit.split(","));
                I(b.numberscalevalue) && (k = b.numberscalevalue.split(","));
                I(b.snumberscalevalue) && (w = b.snumberscalevalue.split(","));
                this.paramLabels = j = {formatnumber:J(b.formatnumber, u.formatnumber, q.formatnumber),formatnumberscale:J(b.formatnumberscale, u.formatnumberscale, q.formatnumberscale),defaultnumberscale:sa(b.defaultnumberscale, u.defaultnumberscale, q.defaultnumberscale),numberscaleunit:J(j, u.numberscaleunit, q.numberscaleunit),numberscalevalue:J(k, u.numberscalevalue, q.numberscalevalue),
                    numberprefix:sa(b.numberprefix, u.numberprefix, q.numberprefix),numbersuffix:sa(b.numbersuffix, u.numbersuffix, q.numbersuffix),decimalprecision:parseInt(J(b.decimals, b.decimalprecision, u.decimals, q.decimals, u.decimalprecision, q.decimalprecision), 10),forcedecimals:J(b.forcedecimals, u.forcedecimals, q.forcedecimals),decimalseparator:J(b.decimalseparator, u.decimalseparator, q.decimalseparator),thousandseparator:J(b.thousandseparator, u.thousandseparator, q.thousandseparator),indecimalseparator:sa(b.indecimalseparator,
                        u.indecimalseparator, q.indecimalseparator),inthousandseparator:sa(b.inthousandseparator, u.inthousandseparator, q.inthousandseparator)};
                this.param1 = k = {formatnumber:j.formatnumber,formatnumberscale:j.formatnumberscale,defaultnumberscale:j.defaultnumberscale,numberscaleunit:j.numberscaleunit,numberscalevalue:j.numberscalevalue,numberprefix:j.numberprefix,numbersuffix:j.numbersuffix,decimalprecision:parseInt(J(b.yaxisvaluedecimals, j.decimalprecision)),forcedecimals:J(b.forceyaxisvaluedecimals, j.forcedecimals),
                    decimalseparator:j.decimalseparator,thousandseparator:j.thousandseparator,indecimalseparator:j.indecimalseparator,inthousandseparator:j.inthousandseparator};
                this.paramX = {formatnumber:J(b.xformatnumber, j.formatnumber),formatnumberscale:J(b.xformatnumberscale, j.formatnumberscale),defaultnumberscale:sa(b.xdefaultnumberscale, j.defaultnumberscale),numberscaleunit:J(b.xnumberscaleunit, j.numberscaleunit),numberscalevalue:J(b.xnumberscalevalue, j.numberscalevalue),numberprefix:J(b.xnumberprefix, j.numberprefix),
                    numbersuffix:J(b.xnumbersuffix, j.numbersuffix),decimalprecision:parseInt(J(b.xaxisvaluedecimals, b.xaxisvaluesdecimals, j.decimalprecision)),forcedecimals:J(b.forcexaxisvaluedecimals, 0),decimalseparator:j.decimalseparator,thousandseparator:j.thousandseparator,indecimalseparator:j.indecimalseparator,inthousandseparator:j.inthousandseparator};
                this.param2 = {formatnumber:J(b.sformatnumber, q.sformatnumber),formatnumberscale:J(b.sformatnumberscale, q.sformatnumberscale),defaultnumberscale:sa(b.sdefaultnumberscale,
                    q.sdefaultnumberscale),numberscaleunit:J(t, q.snumberscaleunit),numberscalevalue:J(w, q.snumberscalevalue),numberprefix:sa(b.snumberprefix, q.snumberprefix),numbersuffix:sa(b.snumbersuffix, q.snumbersuffix),decimalprecision:parseInt(J(b.syaxisvaluedecimals, b.sdecimals, q.sdecimals), 10),forcedecimals:J(b.forcesyaxisvaluedecimals, b.sforcedecimals, q.sforcedecimals),decimalseparator:J(b.decimalseparator, q.decimalseparator),thousandseparator:J(b.thousandseparator, q.thousandseparator),indecimalseparator:J(b.indecimalseparator,
                    q.indecimalseparator),inthousandseparator:J(b.inthousandseparator, q.inthousandseparator)};
                if (/^(bubble|scatter|selectscatter)$/.test(d))k.formatnumber = J(b.yformatnumber, k.formatnumber),k.formatnumberscale = J(b.yformatnumberscale, k.formatnumberscale),k.defaultnumberscale = sa(b.ydefaultnumberscale, k.defaultnumberscale),k.numberscaleunit = J(b.ynumberscaleunit, k.numberscaleunit),k.numberscalevalue = J(b.ynumberscalevalue, k.numberscalevalue),k.numberprefix = J(b.ynumberprefix, k.numberprefix),k.numbersuffix = J(b.ynumbersuffix,
                    k.numbersuffix),j.formatnumber = J(b.yformatnumber, j.formatnumber),j.formatnumberscale = J(b.yformatnumberscale, j.formatnumberscale),j.defaultnumberscale = sa(b.ydefaultnumberscale, j.defaultnumberscale),j.numberscaleunit = J(b.ynumberscaleunit, j.numberscaleunit),j.numberscalevalue = J(b.ynumberscalevalue, j.numberscalevalue),j.numberprefix = J(b.ynumberprefix, j.numberprefix),j.numbersuffix = J(b.ynumbersuffix, j.numbersuffix);
                if (/^(mscombidy2d|mscombidy3d)$/.test(d))this.param2.formatnumberscale = da(b.sformatnumberscale,
                    "1");
                if (/^(pie2d|pie3d|doughnut2d|doughnut3d|marimekko|pareto2d|pareto3d)$/.test(d))j.decimalprecision = J(b.decimals, "2")
            };
            j.prototype = {percentValue:function(q) {
                return d(b(q, this.paramLabels.decimalprecision, this.paramLabels.forcedecimals), this.paramLabels.decimalseparator, this.paramLabels.thousandseparator) + "%"
            },getCleanValue:function(b, d) {
                var q = b,j = this.paramLabels.indecimalseparator,p = this.paramLabels.inthousandseparator,q = j !== u ? q.toString().replace(j, Q) : q;
                p && p.toString && (p = p.toString().replace(/(\W)/ig,
                    "\\$1"));
                q = p !== u ? q.toString().replace(RegExp(p, "g"), u) : q;
                b = !isNaN(q = parseFloat(q)) && isFinite(q) ? q : NaN;
                return isNaN(b) ? null : d ? L(b) : b
            },dataLabels:function(b, d) {
                return t(b, d ? this.param2 : this.paramLabels)
            },yAxis:function(b) {
                return t(b, this.param1)
            },xAxis:function(b) {
                return t(b, this.paramX)
            },sYAxis:function(b) {
                return t(b, this.param2)
            }};
            j.prototype.constructor = j;
            var t = function(q, j) {
                if (q !== null) {
                    var q = Number(q),p = q + u,t;
                    t = j.formatnumberscale == 1 ? j.defaultnumberscale : u;
                    var k;
                    k = (k = p.split(".")[1]) ? k.length :
                        j.forcedecimals ? "2" : u;
                    if (j.formatnumberscale == 1) {
                        var p = q,w = j.numberscalevalue,$ = j.numberscaleunit;
                        t = {};
                        var L = j.defaultnumberscale,C = 0;
                        if (w.length === $.length)for (C = 0; C < w.length; C++)if (w[C] && Math.abs(Number(p)) >= w[C])L = $[C] || u,p = Number(p) / w[C]; else break;
                        t.value = p;
                        t.scale = L;
                        q = p = t.value;
                        t = t.scale
                    }
                    j.formatnumber == 1 && (p = b(q, J(j.decimalprecision, k), j.forcedecimals),p = d(p, j.decimalseparator, j.thousandseparator));
                    return p = (j.numberprefix || u) + p + t + (j.numbersuffix || u)
                }
            };
            return j
        }(),Ka = function() {
            var b = function(b, j, p, t, k) {
                b = Math.abs(j - b);
                j = b / (p + 1);
                d(b / (p + 1)) > d(t) && (k && Number(j) / Number(t) < (t > 1 ? 2 : 0.5) && (t /= 10),j = (Math.floor(j / t) + 1) * t,b = j * (p + 1));
                return b
            },d = function(b) {
                var b = Math.abs(b),b = String(b),d = 0,j = b.indexOf(Q);
                j != -1 && (d = b.length - j - 1);
                return d
            };
            return function(q, j, p, t, k, w, C, L) {
                var I,q = isNaN(q) == !0 || q == void 0 ? 0.1 : q,j = isNaN(j) == !0 || j == void 0 ? 0 : j;
                q == j && q == 0 && (q = 0.1);
                var w = typeof w === void 0 ? !0 : w,J = Math.max(Math.floor(Math.log(Math.abs(j)) / Math.LN10), Math.floor(Math.log(Math.abs(q)) / Math.LN10));
                I = Math.pow(10,
                    J);
                Math.abs(q) / I < 2 && Math.abs(j) / I < 2 && (J--,I = Math.pow(10, J));
                J = Math.pow(10, Math.floor(Math.log(q - j) / Math.LN10));
                q - j > 0 && I / J >= 10 && (I = J);
                var J = (Math.floor(q / I) + 1) * I,U;
                j < 0 ? U = -1 * (Math.floor(Math.abs(j / I)) + 1) * I : w ? U = 0 : (U = Math.floor(Math.abs(j / I) - 1) * I,U = U < 0 ? 0 : U);
                (typeof k === void 0 || k) && q <= 0 && (J = 0);
                k = p == null || p == void 0 || p == u ? !1 : !0;
                w = t == null || t == void 0 || t == u || isNaN(Number(t)) ? !1 : !0;
                q = k == !1 || k == !0 && Number(p) < q ? J : Number(p);
                j = w == !1 || w == !0 && Number(t) > j ? U : Number(t);
                t = Math.abs(q - j);
                if (w == !1 && k == !1 && L == !0)if (q > 0 &&
                    j < 0)for (var L = !1,p = I > 10 ? I / 10 : I,k = b(j, q, C, p, !1) - (C + 1) * p,G,F,D,S; L == !1;) {
                    if (k += (C + 1) * p,!(d(k / (C + 1)) > d(p)))if (G = k - t,w = k / (C + 1),U = Math.min(Math.abs(j), q),J = U == Math.abs(j) ? -1 : 1,C == 0)L = !0; else for (S = 1; S <= Math.floor((C + 1) / 2); S++)F = w * S,!(F - U > G) && F > U && (D = k - F,D / w == Math.floor(D / w) && F / w == Math.floor(F / w) && (t = k,q = J == -1 ? D : F,j = J == -1 ? -F : -D,L = !0))
                } else L = b(j, q, C, I, !0),G = L - t,t = L,q > 0 ? q += G : j -= G; else if (L == !0 && C > 0) {
                    L = 0;
                    for (p = 1; ;) {
                        G = C + L * p;
                        G = G == 0 ? 1 : G;
                        if (!(d(t / (G + 1)) > d(I)))break;
                        L = p == -1 || L > C ? ++L : L;
                        if (L > 25) {
                            G = 0;
                            break
                        }
                        p = L <=
                            C ? p * -1 : 1
                    }
                    C = G
                }
                return{Max:q,Min:j,Range:t,interval:I,divGap:(q - j) / (C + 1)}
            }
        }(),rb = function() {
            var b = function(b, d) {
                this.title.y = b.offsetHeight / 2;
                if (d !== void 0)this.title.text = d
            };
            b.prototype = {chart:{events:{},margin:[0,0,0,0]},credits:{href:"http://www.fusioncharts.com?BS=FCHSEvalMark",text:"FusionCharts",enabled:!0},legend:{enabled:!1},title:{text:"Chart Placeholder",style:{fontFamily:"Verdana",fontSize:"10px",color:"#666666"}},plotOptions:{series:{}},series:[],exporting:{enabled:!1}};
            return b.prototype.constructor =
                b
        }(),ta = {"true":{"true":"bottom","false":"top"},"false":{"true":"top","false":"bottom"}},ca = function() {
            var b = /^s$/i,d = function() {
                return{x:this.category,y:this.y,series:this.series,point:this,percentage:this.percentage,total:this.total || this.stackTotal}
            },j = function(b) {
                var j;
                j = {series:{},chart:this.chart,id:this.id,label:this.label,options:this.options,svgElm:this.svgElm,toolText:b,getLabelConfig:d};
                return{mouseover:function(b) {
                    var d = this.chart.plotLeft,q = this.chart.plotTop;
                    j.tooltipPos = [J(b.layerX,
                        b.x) - d + 20,J(b.layerY, b.y) - q - 15];
                    this.chart.tooltip.refresh(j)
                },mousemove:function(b) {
                    var d = this.chart.plotLeft,q = this.chart.plotTop;
                    j.tooltipPos = [J(b.layerX, b.x) - d + 20,J(b.layerY, b.y) - q - 15];
                    this.chart.tooltip.refresh(j)
                },mouseout:function() {
                    this.chart.tooltip.hide()
                }}
            };
            return function(d, p, k, w, u, L) {
                var C,I = k.trendStyle,F,U,G,D,la,P,Q,ra,vb,sa,ca,ya,Na = parseInt(I.fontSize, 10) / 2 + 2;
                C = 0;
                for (U = d.length; C < U; C += 1)if (d[C].line) {
                    F = 0;
                    for (G = d[C].line.length; F < G; F += 1)if (D = d[C].line[F],ca = da(D.startvalue, D.value,
                        0),ya = da(D.endvalue, ca),vb = L ? p : w && D.parentyaxis && b.test(D.parentyaxis) ? p[1] : p[0],P = vb.max,la = vb.min,P >= ca && P >= ya && la <= ca && la <= ya) {
                        la = D.parentyaxis && b.test(D.parentyaxis) ? D.valueonleft !== "1" : D.valueonright === "1";
                        P = Boolean(da(D.istrendzone, L ? 1 : 0));
                        if (Q = ka(J(D.displayvalue, k.numberFormatter[L ? "xAxis" : "dataLabels"](ca)))) {
                            if (la = {text:Q,textAlign:u ? "center" : la ? "left" : "right",align:u ? P ? "center" : ca < ya ? "right" : "left" : la ? "right" : "left",verticalAlign:u ? "bottom" : P ? "middle" : ta[ca > ya][la],rotation:0,x:0,y:u ? Na :
                                2,style:xb(I)},Q = J(D.color, "333333"),D.alwaysVisible = P,Q)la.style.color = Q.replace(t, "#")
                        } else la = void 0;
                        ra = J(D.tooltext);
                        Q = ra !== void 0 ? j(ra) : void 0;
                        sa = da(D.thickness, 1);
                        P ? vb.plotBands.push({isTrend:!0,color:S(J(D.color, "333333"), J(D.alpha, 40)),from:ca,to:ya,label:la,zIndex:!k.is3d && D.showontop === "1" ? 5 : 3,events:Q,tooltext:ra,alwaysVisible:D.alwaysVisible}) : vb.plotLines.push({isTrend:!0,color:S(J(D.color, "333333"), J(D.alpha, 99)),value:ca,to:ya,width:sa,dashStyle:D.dashed == "1" ? qb(da(D.dashlen, 5), da(D.dashgap,
                            2), sa) : void 0,label:la,zIndex:!k.is3d && D.showontop === "1" ? 5 : 3,events:Q,tooltext:ra})
                    }
                }
            }
        }(),qb = function(b, d, j, p) {
            if (p || p === void 0)return j = j ? j : 1,da(b, 5) / j + "," + da(d, 3) / j
        },fb = function() {
        },Xa = function(b, d, j) {
            var p,t = Xa[b];
            if (!t)t = function() {
            },t.prototype = j instanceof fb ? j : new fb,t.prototype.constructor = t,t = Xa[b] = new t;
            if (j)t.base = j;
            t.name = b;
            for (p in d)switch (typeof d[p]) {
                case "object":
                    if (d[p]instanceof fb) {
                        t[p] = d[p][p];
                        break
                    }
                default:
                    t[p] = d[p];
                    break;
                case "undefined":
                    delete t[p]
            }
            return t
        };
        P.extend(P.hcLib,
            {BLANKSTRINGPLACEHOLDER:"#BLANK#",BLANKSTRING:u,COLOR_BLACK:"000000",COLOR_WHITE:"FFFFFF",COLOR_TRANSPARENT:"rgba(0,0,0,0)",HASHSTRING:"#",BREAKSTRING:"<br />",STRINGSTRING:"string",OBJECTSTRING:"object",COMMASTRING:",",ZEROSTRING:k,SAMPLESTRING:"Ay0",TESTSTR:"Ag",ONESTRING:"1",DECIMALSTRING:Q,STRINGUNDEFINED:"undefined",POSITION_TOP:"top",POSITION_RIGHT:"right",POSITION_BOTTOM:"bottom",POSITION_LEFT:"left",POSITION_CENTER:"center",POSITION_MIDDLE:"middle",FC_CONFIG_STRING:"_FCconf",HUNDREDSTRING:"100",
                PXSTRING:"px",COMMASPACE:", ",regex:{stripWhitespace:d,dropHash:t,startsRGBA:b,cleanColorCode:j,breakPlaceholder:p,hexcode:/^#?[0-9a-f]{6}/i},extend2:xb,pluck:J,pluckNumber:da,pluckFontSize:function() {
                var b,d,j;
                d = 0;
                for (j = arguments.length; d < j; d += 1)if ((b = arguments[d]) || !(b !== !1 && b !== 0))if (!isNaN(b = Number(b)))return b < 1 ? 1 : b;
                return 1
            },getValidValue:I,getDefinedColor:function(b, d) {
                return!b && b != 0 && b != !1 ? d : b
            },getFirstValue:sa,getFirstColor:function(b) {
                b = b.split(",")[0];
                b = b.replace(d, u);
                b == u && (b = "000000");
                return b.replace(t, "#")
            },pluckColor:function(b) {
                if (I(b))return b = b.split(",")[0],b = b.replace(d, u),b == u && (b = "000000"),b.replace(t, "#")
            },getFirstAlpha:function(b) {
                b = parseInt(b, 10);
                if (isNaN(b) || b > 100 || b < 0)b = 100;
                return b
            },parsePointValue:ya,parseUnsafeString:ka,toPrecision:function(b, d) {
                return b.toPrecision && b.toPrecision(d) || b
            },stubFN:function() {
            },falseFN:function() {
                return!1
            },hasSVG:w,getLinkAction:function(b, d) {
                return function() {
                    var j,p,t,k,w;
                    k = window;
                    w = sa(this.link, u);
                    w = J(w, this.options && this.options.chart &&
                        this.options.chart.link || u, this.series && this.series.chart && this.series.chart.options && this.series.chart.options.chart && this.series.chart.options.chart.link || u);
                    if (w !== void 0)switch (w = k.decodeURIComponent(w).replace(/^\s+/, u).replace(/\s+$/, u),w.search(/^[a-z]*\s*[\-\:]\s*/i) !== -1 && (j = w.split(/\s*[\-\:]\s*/)[0].toUpperCase()),j) {
                        case "J":
                            w = w.replace(/^j\s*\-/i, "j-");
                            j = w.indexOf("-", 2);
                            if (j === -1)try {
                                eval(w.slice(2))
                            } catch(C) {
                            } else try {
                                k[w.substr(2, j - 2).replace(/\s/g, u)](w.slice(j + 1))
                            } catch(L) {
                            }
                            break;
                        case "JAVASCRIPT":
                            w = w.replace(/^JAVASCRIPT\s*\:/i, "javascript:");
                            try {
                                eval(w.slice(11))
                            } catch(I) {
                            }
                            break;
                        case "N":
                            w.replace(/^n\s*\-/i, "n-");
                            k.open(w.slice(2));
                            break;
                        case "F":
                            w = w.replace(/^f\s*\-/i, "f-");
                            j = w.indexOf("-", 2);
                            j !== -1 ? (p = w.substr(2, j - 2)) && k.frames[p] ? k.frames[p].location = w.slice(j + 1) : k.open(w.slice(j + 1), p) : k.open(w.slice(2));
                            break;
                        case "P":
                            w = w.replace(/p\s*\-/i, "p-");
                            j = w.indexOf("-", 2);
                            p = w.indexOf(",", 2);
                            j === -1 && (j = 1);
                            t = w.slice(j + 1);
                            k.open(t, w.substr(2, p - 2), w.substr(p + 1, j - p - 1)).focus();
                            break;
                        case "NEWCHART":
                            j = w.indexOf("-", 9);
                            k = w.substring(9, j).toUpperCase();
                            if (k == "XMLURL")p = w.substring(j + 1, w.length); else if (k == "JSONURL")p = w.substring(j + 1, w.length); else if (k == "XML" || k == "JSON") {
                                w = w.substring(j + 1, w.length);
                                k = {chart:{}};
                                FcJSON = b;
                                w = w.toLowerCase();
                                if (FcJSON.linkeddata)for (j = 0; j < FcJSON.linkeddata.length; j += 1)if (FcJSON.linkeddata[j].id.toLowerCase() === w)k = FcJSON.linkeddata[j].linkedchart;
                                p = k;
                                k = "JSON"
                            }
                            P.raiseEvent("LinkedChartInvoked", {linkType:k,data:p}, d);
                            break;
                        default:
                            k.location.href =
                                w
                    }
                }
            },graphics:{parseAlpha:Eb,convertColor:S,getDarkColor:D,getLightColor:F,mapSymbolName:function(b) {
                var d = Ua.circle,b = ya(b);
                if (b >= 3)switch (b) {
                    case 3:
                        d = Ua.triangle;
                        break;
                    case 4:
                        d = Ua.diamond;
                        break;
                    default:
                        d = Ua.poly + b
                }
                return d
            },getColumnColor:function(b, d, j, p, t, w, k, u, C) {
                var L,I;
                L = b.split(",");
                I = d.split(",");
                w = w.split(",");
                k = k.split(",");
                C ? u = {FCcolor:{color:L[0],alpha:I[0]}} : t ? (b = L[0],I = I[0],u = {FCcolor:{color:D(b, 75) + "," + F(b, 25) + "," + D(b, 80) + "," + F(b, 65) + "," + D(b, 80),alpha:I + "," + I + "," + I + "," + I + "," + I,ratio:"0,10,13,57,20",
                    angle:u ? "-180" : "0"}},w = [D(b, 70)]) : (d = Eb(d, L.length),u = {FCcolor:{color:b,alpha:d,ratio:j,angle:u ? 180 - p : p}});
                return[u,{FCcolor:{color:w[0],alpha:k[0]}}]
            },getAngle:function(b, d, j) {
                b = Math.atan(d / b) * 180 / Math.PI;
                j == 2 ? b = 180 - b : j == 3 ? b += 180 : j == 4 && (b = 360 - b);
                return b
            }},setImageDisplayMode:function(b, d, j, p, t, w, k, u) {
                var L = u.width * (p / 100),p = u.height * (p / 100),u = {},C,I = w - t * 2;
                C = k - t * 2;
                var D = function(b, d, j, p, q, w) {
                    var k = {};
                    switch (b) {
                        case "top":
                            k.y = t;
                            break;
                        case "bottom":
                            k.y = w - p - t;
                            break;
                        case "middle":
                            k.y = (w - p) / 2
                    }
                    switch (d) {
                        case "left":
                            k.x =
                                t;
                            break;
                        case "right":
                            k.x = q - j - t;
                            break;
                        case "middle":
                            k.x = (q - j) / 2
                    }
                    return k
                };
                switch (b) {
                    case "center":
                        u.width = L;
                        u.height = p;
                        u.y = k / 2 - p / 2;
                        u.x = w / 2 - L / 2;
                        break;
                    case "stretch":
                        u.width = w - t * 2;
                        u.height = k - t * 2;
                        u.y = t;
                        u.x = t;
                        break;
                    case "tile":
                        u.width = L;
                        u.height = p;
                        u.tileInfo = {};
                        u.tileInfo.xCount = b = Math.ceil(I / L);
                        u.tileInfo.yCount = C = Math.ceil(C / p);
                        alignObj = D(d, j, L * b, p * C, w, k);
                        u.y = alignObj.y;
                        u.x = alignObj.x;
                        break;
                    case "fit":
                        b = L / p > I / C ? I / L : C / p;
                        u.width = L * b;
                        u.height = p * b;
                        alignObj = D(d, j, u.width, u.height, w, k);
                        u.y = alignObj.y;
                        u.x =
                            alignObj.x;
                        break;
                    case "fill":
                        b = L / p > I / C ? C / p : I / L;
                        u.width = L * b;
                        u.height = p * b;
                        alignObj = D(d, j, u.width, u.height, w, k);
                        u.y = alignObj.y;
                        u.x = alignObj.x;
                        break;
                    default:
                        alignObj = D(d, j, L, p, w, k),u.width = L,u.height = p,u.y = alignObj.y,u.x = alignObj.x
                }
                return u
            },SmartLabelManager:hb,setLineHeight:eb,NumberFormatter:kb,getAxisLimits:Ka,createTrendLine:ca,getDashStyle:qb,axisLabelAdder:Pa,chartAPI:Xa,createDialog:rb,defaultPaletteOptions:{bgColor:["CBCBCB,E9E9E9","CFD4BE,F3F5DD","C5DADD,EDFBFE","A86402,FDC16D","FF7CA0,FFD1DD"],
                bgAngle:[270,270,270,270,270],bgRatio:["0,100","0,100","0,100","0,100","0,100"],bgAlpha:["50,50","60,50","40,20","20,10","30,30"],canvasBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],canvasBgAngle:[0,0,0,0,0],canvasBgAlpha:["100","100","100","100","100"],canvasBgRatio:[u,u,u,u,u],canvasBorderColor:["545454","545454","415D6F","845001","68001B"],canvasBorderAlpha:[100,100,100,90,100],showShadow:[0,1,1,1,1],divLineColor:["717170","7B7D6D","92CDD6","965B01","68001B"],divLineAlpha:[40,45,65,40,
                    30],altHGridColor:["EEEEEE","D8DCC5","99C4CD","DEC49C","FEC1D0"],altHGridAlpha:[50,35,10,20,15],altVGridColor:["767575","D8DCC5","99C4CD","DEC49C","FEC1D0"],altVGridAlpha:[10,20,10,15,10],anchorBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],toolTipBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],toolTipBorderColor:["545454","545454","415D6F","845001","68001B"],baseFontColor:["555555","60634E","025B6A","A15E01","68001B"],borderColor:["767575","545454","415D6F","845001","68001B"],borderAlpha:[50,
                    50,50,50,50],legendBgColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],legendBorderColor:["545454","545454","415D6F","845001","D55979"],plotGradientColor:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],plotBorderColor:["333333","8A8A8A","FFFFFF","FFFFFF","FFFFFF"],plotFillColor:["767575","D8DCC5","99C4CD","DEC49C","FEC1D0"],bgColor3D:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],bgAlpha3D:["100","100","100","100","100"],bgAngle3D:[90,90,90,90,90],bgRatio3D:[u,u,u,u,u],canvasBgColor3D:["DDE3D5",
                    "D8D8D7","EEDFCA","CFD2D8","FEE8E0"],canvasBaseColor3D:["ACBB99","BCBCBD","C8A06C","96A4AF","FAC7BC"],divLineColor3D:["ACBB99","A4A4A4","BE9B6B","7C8995","D49B8B"],divLineAlpha3D:[100,100,100,100,100],legendBgColor3D:["F0F3ED","F3F3F3","F7F0E8","EEF0F2","FEF8F5"],legendBorderColor3D:["C6CFB8","C8C8C8","DFC29C","CFD5DA","FAD1C7"],toolTipbgColor3D:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"],toolTipBorderColor3D:["49563A","666666","49351D","576373","681C09"],baseFontColor3D:["49563A","4A4A4A","49351D",
                    "48505A","681C09"],anchorBgColor3D:["FFFFFF","FFFFFF","FFFFFF","FFFFFF","FFFFFF"]}})
    }
})();
(function(P) {
    P.fn.drag = function(b, d, p) {
        var t = typeof b == "string" ? b : "",k = P.isFunction(b) ? b : P.isFunction(d) ? d : null;
        t.indexOf("drag") !== 0 && (t = "drag" + t);
        p = (b == k ? d : p) || {};
        return k ? this.bind(t, p, k) : this.trigger(t)
    };
    var u = P.event,k = "ontouchstart"in document.documentElement,Q = k ? "touchstart" : "mousedown",w = k ? "touchmove touchend" : "mousemove mouseup",mb = function(b, d) {
        if (!d.touchXY || !b.originalEvent)return b;
        var p = b.originalEvent.changedTouches || b.originalEvent.touches;
        p && p.length && P.extend(b, p[0]);
        return b
    },d =
        u.special,t = d.drag = {defaults:{which:1,distance:0,not:":input",handle:null,relative:!1,drop:!1,click:!1,touchXY:!0},datakey:"dragdata",livekey:"livedrag",add:function(b) {
        var d = P.data(this, t.datakey),p = b.data || {};
        d.related += 1;
        if (!d.live && b.selector)d.live = !0,u.add(this, "draginit." + t.livekey, t.delegate);
        P.each(t.defaults, function(b) {
            p[b] !== void 0 && (d[b] = p[b])
        })
    },remove:function() {
        P.data(this, t.datakey).related -= 1
    },setup:function() {
        if (!P.data(this, t.datakey)) {
            var b = P.extend({related:0}, t.defaults);
            P.data(this,
                t.datakey, b);
            u.add(this, Q, t.init, b);
            this.attachEvent && this.attachEvent("ondragstart", t.dontstart)
        }
    },teardown:function() {
        P.data(this, t.datakey).related || (P.removeData(this, t.datakey),u.remove(this, Q, t.init),u.remove(this, "draginit", t.delegate),t.textselect(!0),this.detachEvent && this.detachEvent("ondragstart", t.dontstart))
    },init:function(b) {
        var j = b.data,p;
        if ((p = b.originalEvent ? b.originalEvent.changedTouches || b.originalEvent.touches : []) && p.length) {
            if (p.length > 1)return
        } else if (j.which > 0 && b.which != j.which)return;
        if (!P(b.target).is(j.not) && (!j.handle || P(b.target).closest(j.handle, b.currentTarget).length))if (j.propagates = 1,j.interactions = [t.interaction(this, j)],j.target = b.target,j.pageX = b.pageX,j.pageY = b.pageY,j.dragging = null,p = t.hijack(b, "draginit", j),j.propagates) {
            if ((p = t.flatten(p)) && p.length)j.interactions = [],P.each(p, function() {
                j.interactions.push(t.interaction(this, j))
            });
            j.propagates = j.interactions.length;
            j.drop !== !1 && d.drop && d.drop.handler(b, j);
            t.textselect(!1);
            u.add(document, w, t.handler, j);
            if (!k)return!1
        }
    },
        interaction:function(b, d) {
            return{drag:b,callback:new t.callback,droppable:[],offset:P(b)[d.relative ? "position" : "offset"]() || {top:0,left:0}}
        },handler:function(b) {
            var j = b.data;
            if (!j.dragging && (b.type === "mousemove" || b.type === "touchmove")) {
                if (Math.pow(b.pageX - j.pageX, 2) + Math.pow(b.pageY - j.pageY, 2) < Math.pow(j.distance, 2))return;
                b.target = j.target;
                t.hijack(b, "dragstart", j);
                if (j.propagates)j.dragging = !0
            }
            switch (b.type) {
                case "touchmove":
                    j.dragging && (b.preventDefault(),mb(b, j));
                case "mousemove":
                    if (j.dragging) {
                        t.hijack(b,
                            "drag", j);
                        if (j.propagates) {
                            j.drop !== !1 && d.drop && d.drop.handler(b, j);
                            break
                        }
                        b.type = "mouseup"
                    }
                case "mouseup":
                case "touchend":
                    if (u.remove(document, w, t.handler),j.dragging && (j.drop !== !1 && d.drop && d.drop.handler(b, j),t.hijack(b, "dragend", j)),t.textselect(!0),j.click === !1 && j.dragging)jQuery.event.triggered = !0,setTimeout(function() {
                        jQuery.event.triggered = !1
                    }, 20),j.dragging = !1
            }
        },delegate:function(b) {
            var d = [],p,k = P.data(this, "events") || {};
            P.each(k.live || [], function(k, w) {
                if (w.preType.indexOf("drag") === 0 && (p =
                    P(b.target).closest(w.selector, b.currentTarget)[0]))u.add(p, w.origType + "." + t.livekey, w.origHandler, w.data),P.inArray(p, d) < 0 && d.push(p)
            });
            if (!d.length)return!1;
            return P(d).bind("dragend." + t.livekey, function() {
                u.remove(this, "." + t.livekey)
            })
        },hijack:function(b, d, p, k, w) {
            if (p) {
                var I = {event:b.originalEvent,type:b.type},Q = d.indexOf("drop") ? "drag" : "drop",J,da = k || 0,ya,ka,k = !isNaN(k) ? k : p.interactions.length;
                b.type = d;
                b.sourceEvent = I.event;
                b.originalEvent = null;
                p.results = [];
                do if ((ya = p.interactions[da]) && !(d !==
                    "dragend" && ya.cancelled)) {
                    ka = t.properties(b, p, ya);
                    ya.results = [];
                    P(w || ya[Q] || p.droppable).each(function(k, w) {
                        J = (ka.target = w) ? u.handle.call(w, b, ka) : null;
                        if (J === !1) {
                            if (Q == "drag")ya.cancelled = !0,p.propagates -= 1;
                            d == "drop" && (ya[Q][k] = null)
                        } else d == "dropinit" && ya.droppable.push(t.element(J) || w);
                        if (d == "dragstart")ya.proxy = P(t.element(J) || ya.drag)[0];
                        ya.results.push(J);
                        delete b.result;
                        if (d !== "dropinit")return J
                    });
                    p.results[da] = t.flatten(ya.results);
                    if (d == "dropinit")ya.droppable = t.flatten(ya.droppable);
                    d ==
                        "dragstart" && !ya.cancelled && ka.update()
                } while (++da < k);
                b.type = I.type;
                b.originalEvent = I.event;
                return t.flatten(p.results)
            }
        },properties:function(b, d, p) {
            var k = p.callback;
            k.drag = p.drag;
            k.proxy = p.proxy || p.drag;
            k.startX = d.pageX;
            k.startY = d.pageY;
            k.deltaX = b.pageX - d.pageX;
            k.deltaY = b.pageY - d.pageY;
            k.originalX = p.offset.left;
            k.originalY = p.offset.top;
            k.offsetX = b.pageX - (d.pageX - k.originalX);
            k.offsetY = b.pageY - (d.pageY - k.originalY);
            k.drop = t.flatten((p.drop || []).slice());
            k.available = t.flatten((p.droppable || []).slice());
            return k
        },element:function(b) {
            if (b && (b.jquery || b.nodeType == 1))return b
        },flatten:function(b) {
            return P.map(b, function(b) {
                return b && b.jquery ? P.makeArray(b) : b && b.length ? t.flatten(b) : b
            })
        },textselect:function(b) {
            P(document)[b ? "unbind" : "bind"]("selectstart", t.dontstart).attr("unselectable", b ? "off" : "on").css("MozUserSelect", b ? "" : "none")
        },dontstart:function() {
            return!1
        },callback:function() {
        }};
    t.callback.prototype = {update:function() {
        d.drop && this.available.length && P.each(this.available, function(b) {
            d.drop.locate(this,
                b)
        })
    }};
    d.draginit = d.dragstart = d.dragend = t
})(jQuery);
(function(P) {
    function u(k) {
        var w = k || window.event,u = [].slice.call(arguments, 1),d = 0,t = 0,b = 0,k = P.event.fix(w);
        k.type = "wheelchange";
        k.wheelDelta && (d = k.wheelDelta / 120);
        k.detail && (d = -k.detail / 3);
        b = d;
        w.axis !== void 0 && w.axis === w.HORIZONTAL_AXIS && (b = 0,t = -1 * d);
        w.wheelDeltaY !== void 0 && (b = w.wheelDeltaY / 120);
        w.wheelDeltaX !== void 0 && (t = -1 * w.wheelDeltaX / 120);
        u.unshift(k, d, t, b);
        return P.event.handle.apply(this, u)
    }

    var k = ["DOMMouseScroll","mousewheel"];
    P.event.special.wheelchange = {setup:function() {
        if (this.addEventListener)for (var P =
            k.length; P;)this.addEventListener(k[--P], u, !1); else this.onmousewheel = u
    },teardown:function() {
        if (this.removeEventListener)for (var P = k.length; P;)this.removeEventListener(k[--P], u, !1); else this.onmousewheel = null
    }};
    P.fn.extend({wheelchange:function(k) {
        return k ? this.bind("wheelchange", k) : this.trigger("wheelchange")
    },unwheelchange:function(k) {
        return this.unbind("wheelchange", k)
    }})
})(jQuery);
(function() {
    var P = FusionCharts(["private","modules.renderer.highcharts-interface"]);
    if (P !== void 0) {
        var u = P.hcLib,k = P.renderer.getRenderer("javascript"),Q = u.hasModule,w = u.loadModule,mb = u.moduleCmdQueue,d = u.executeWaitingCommands,t = u.moduleDependencies,b = u.getDependentModuleName,j = u.eventList = {loaded:"FC_Loaded",dataloaded:"FC_DataLoaded",rendered:"FC_Rendered",drawcomplete:"FC_DrawComplete",resized:"FC_Resized",dataxmlinvalid:"FC_DataXMLInvalid",nodatatodisplay:"FC_NoDataToDisplay"};
        u.raiseEvent = function(b, d, k, t) {
            var w = j[b];
            P.raiseEvent(b, d, k);
            w && typeof window[w] === "function" && setTimeout(function() {
                window[w].apply(window, t)
            }, 0)
        };
        t.charts = P.extend(t.charts || {}, {column2d:0,column3d:0,pie2d:0,pie3d:0,line:0,bar2d:0,area2d:0,doughnut2d:0,doughnut3d:0,pareto2d:0,pareto3d:0,mscolumn2d:0,mscolumn3d:0,msline:0,msarea:0,msbar2d:0,msbar3d:0,stackedcolumn2d:0,marimekko:0,stackedcolumn3d:0,stackedarea2d:0,stackedcolumn2dline:0,stackedcolumn3dline:0,stackedbar2d:0,stackedbar3d:0,msstackedcolumn2d:0,mscombi2d:0,
            mscombi3d:0,mscolumnline3d:0,mscombidy2d:0,mscolumn3dlinedy:0,stackedcolumn3dlinedy:0,msstackedcolumn2dlinedy:0,scatter:0,bubble:0,ssgrid:0,scrollcolumn2d:0,scrollcolumn3d:0,scrollline2d:0,scrollarea2d:0,scrollstackedcolumn2d:0,scrollcombi2d:0,scrollcombidy2d:0,zoomline:0});
        t.powercharts = P.extend(t.powercharts || {}, {spline:0,splinearea:0,msspline:0,mssplinearea:0,multiaxisline:0,multilevelpie:0,waterfall2d:0,msstepline:0,inversemsline:0,inversemscolumn2d:0,inversemsarea:0,errorbar2d:0,horizontalerrorbar2d:0,
            errorscatter:0,errorline:0,logmsline:0,logmscolumn2d:0,radar:0,dragnode:0,candlestick:0,selectscatter:0,dragcolumn2d:0,dragline:0,dragarea:0});
        P.extend(k, {render:function(d, j) {
            var t = this.chartType(),w = this.jsVars;
            u.chartAPI[t] ? (this.__state.lastRenderedSrc = this.src,delete w.waitingModule,P.hcLib.createChart(this, d, t, j),u.raiseEvent("rendered", {}, w.fcObj, [w.fcObj.id])) : (t = b(t),mb[t[t.length - 1]].push({cmd:"render",obj:this,args:arguments}),w.waitingModule || k.load.apply(this))
        },update:function(b) {
            var d =
                this.ref,j = this.jsVars;
            b.error === void 0 ? (delete j.stallLoad,delete j.loadError,this.isActive() && (this.src !== this.__state.lastRenderedSrc ? this.render() : P.hcLib.createChart(this, j.container, j.type))) : (this.isActive() && typeof d.showChartMessage === "function" && d.showChartMessage("InvalidXMLText"),delete j.loadError)
        },resize:function(b) {
            var d = this.ref,j,k = this.jsVars;
            if (d && d.resize) {
                if (k.isResizing)k.isResizing = clearTimeout(k.isResizing);
                k.isResizing = setTimeout(function() {
                    j = P.normalizeCSSDimension(b.width,
                        b.height, d);
                    if (b.width !== void 0)d.style.width = j.width;
                    if (b.height !== void 0)d.style.height = j.height;
                    d.resize();
                    delete k.isResizing
                }, 0)
            }
        },dispose:function() {
            var b,d = this.jsVars.hcObj || {};
            (b = this.ref) && b.parentNode && b.parentNode.removeChild(b);
            return d && d.destroy && d.destroy()
        },load:function() {
            var j = this.jsVars,k = this.chartType(),t = P.hcLib.chartAPI[k],k = b(k),I = k[k.length - 1];
            if (t || !k || k && k.length === 0 || Q(I))delete j.waitingModule; else if (!j.waitingModule)j.waitingModule = !0,w(k, function() {
                delete j.waitingModule;
                d(u.moduleCmdQueue[I] || [])
            })
        },config:function(b) {
            var d,j = this.jsVars,k = j.msgStore,j = j.cfgStore;
            for (d in b)k[d] ? k[d] = b[d] : j[d.toLowerCase()] = b[d]
        }})
    }
})();
(function() {
    function P(a, f, l, A, b, e, c) {
        var v = [o],e = $a(typeof e.color === "string" ? e.color : e.color.FCcolor.color),g,d,n;
        n = c.box.tagName && c.box.tagName.toLowerCase() === "div";
        c = e.replace(kb, "");
        g = eb(c, 40);
        e = Ua(c, 60).replace(kb, ta);
        c = {FCcolor:{color:c + "," + c + "," + g + "," + c + "," + c,ratio:"0,30,30,30,10",angle:0,alpha:"100,100,100,100,100"}};
        switch (b) {
            case "column":
            case "column3d":
                g = parseInt(l * 25) / 100;
                d = parseInt(g * 50) / 100;
                b = parseInt(A * 30) / 100;
                n = parseInt(A * 60) / 100;
                v = v.concat([a,f + A,T,a,f + b,a + g,f + b,a + g,f + A,a + g + d,
                    f + A,a + g + d,f,a + g + g + d,f,a + g + g + d,f + A,a + g + g + d + d,f + A,a + g + g + d + d,f + n,a + l,f + n,a + l,f + A,"Z"]);
                c.FCcolor.angle = 270;
                break;
            case "bar":
            case "bar3d":
                g = l * 0.3;
                d = l * 0.6;
                b = A / 4;
                n = b / 2;
                v = v.concat([a,f,T,a + d,f,a + d,f + b,a,f + b,a,f + b + n,a + l,f + b + n,a + l,f + b + n + b,a,f + 2 * b + n,a,f + 2 * (b + n),a + g,f + 2 * (b + n),a + g,f + A,a,f + A,"Z"]);
                break;
            case "area":
            case "area3d":
                b = A * 0.6;
                n = A * 0.2;
                A *= 0.8;
                v = v.concat([a,f + A,T,a,f + b,a + l * 0.3,f + n,a + l * 0.6,f + b,a + l,f + n,a + l,f + A,"Z"]);
                c.FCcolor.angle = 270;
                break;
            case "pie":
            case "pie3d":
                g = l / 2;
                d = l * 0.7;
                b = A / 2;
                v = n ? v.concat([a + g,
                    f + b,T,a + d,f,"at",a,f,a + l,f + A,a + d,f,a,f + b,T,a + g,f + b,o,a + g,f + b,T,a,f + b,"at",a,f,a + l,f + A,a,f + b,a + d,f + A,T,a + g,f + b,o,a + g,f + b,T,a + d,f + A,"at",a,f,a + l,f + A,a + d,f + A,a + d,f,"Z"]) : v.concat([a + g,f + b,T,a + d,f,"A",g,b,0,0,0,a,f + b,T,a + g,f + b,o,a + g,f + b,T,a,f + b,"A",g,b,0,0,0,a + d,f + A,T,a + g,f + b,o,a + g,f + b,T,a + d,f + A,"A",g + 1,b + 1,0,0,0,a + d,f,"Z"]);
                break;
            default:
                v = v.concat([a,f,T,a + l,f,a + l,f + A,a,f + A,"Z"]),c.FCcolor.angle = 270,c.FCcolor.ratio = "0,70,30"
        }
        return{path:v,color:c,strokeWidth:0.5,strokeColor:e}
    }

    function u(a, f) {
        var l;
        a || (a = {});
        for (l in f)a[l] = f[l];
        return a
    }

    function k(a, f) {
        return parseInt(a, f || 10)
    }

    function Q(a) {
        return typeof a === "string"
    }

    function w(a) {
        return typeof a === "object"
    }

    function mb(a) {
        return typeof a === "number"
    }

    function d(a, f) {
        for (var l = a.length; l--;)if (a[l] === f) {
            a.splice(l, 1);
            break
        }
    }

    function t(a) {
        return a !== e && a !== null
    }

    function b(a, f, l) {
        var A,b;
        if (Q(f))t(l) ? a.setAttribute(f, l) : a && a.getAttribute && (b = a.getAttribute(f)); else if (t(f) && w(f))for (A in f)a.setAttribute(A, f[A]);
        return b
    }

    function j(a) {
        if (!a || a.constructor !==
            Array)a = [a];
        return a
    }

    function p() {
        var a = arguments,f,l,A = a.length;
        for (f = 0; f < A; f++)if (l = a[f],typeof l !== "undefined" && l !== null)return l
    }

    function L(a, f) {
        if (Lb && f && f.opacity !== e)f.filter = "alpha(opacity=" + f.opacity * 100 + ")";
        u(a.style, f)
    }

    function C(a, f, l, A, b) {
        a = Ba.createElement(a);
        f && u(a, f);
        b && L(a, {padding:0,border:ba,margin:0});
        l && L(a, l);
        A && A.appendChild(a);
        return a
    }

    function I(a, f) {
        var l = function() {
        };
        l.prototype = new a;
        u(l.prototype, f);
        return l
    }

    function sa(a, f, l, b) {
        var x = Va.lang,c = isNaN(f = ra(f)) ? 2 : f,f = l ===
            void 0 ? x.decimalPoint : l,b = b === void 0 ? x.thousandsSep : b,x = a < 0 ? "-" : "",l = String(k(a = ra(+a || 0).toFixed(c))),e = l.length > 3 ? l.length % 3 : 0;
        return x + (e ? l.substr(0, e) + b : "") + l.substr(e).replace(/(\d{3})(?=\d)/g, "$1" + b) + (c ? f + ra(a - l).toFixed(c).slice(2) : "")
    }

    function J(a) {
        for (var f = {left:a.offsetLeft,top:a.offsetTop},a = a.offsetParent; a;)f.left += a.offsetLeft,f.top += a.offsetTop,a !== Ba.body && a !== Ba.documentElement && (f.left -= a.scrollLeft,f.top -= a.scrollTop),a = a.offsetParent;
        return f
    }

    function da() {
        this.symbol = this.color =
            0
    }

    function ya(a, f) {
        g = p(a, f.animation)
    }

    function ka() {
        var a = Va.global.useUTC;
        wa = a ? Date.UTC : function(a, l, b, x, c, e) {
            return(new Date(a, l, p(b, 1), p(x, 0), p(c, 0), p(e, 0))).getTime()
        };
        E = a ? "getUTCMinutes" : "getMinutes";
        ic = a ? "getUTCHours" : "getHours";
        Ia = a ? "getUTCDay" : "getDay";
        oc = a ? "getUTCDate" : "getDate";
        ua = a ? "getUTCMonth" : "getMonth";
        N = a ? "getUTCFullYear" : "getFullYear";
        Z = a ? "setUTCMinutes" : "setMinutes";
        W = a ? "setUTCHours" : "setHours";
        tc = a ? "setUTCDate" : "setDate";
        vc = a ? "setUTCMonth" : "setMonth";
        wc = a ? "setUTCFullYear" : "setFullYear"
    }

    function Na(a) {
        Fb || (Fb = C(h));
        a && Fb.appendChild(a);
        Fb.innerHTML = ""
    }

    function xb() {
    }

    function Hb(a, f) {
        function l(a, f) {
            function l(a, f) {
                this.pos = a;
                this.minor = f;
                this.isNew = !0;
                f || this.addLabel()
            }

            function b(a) {
                if (a)this.options = a,this.id = a.id;
                return this
            }

            function A(a, f, l) {
                this.isNegative = f;
                this.options = a;
                this.x = l;
                this.alignOptions = {align:a.align || (Qa ? f ? "left" : "right" : "center"),verticalAlign:a.verticalAlign || (Qa ? "middle" : f ? "bottom" : "top"),y:p(a.y, Qa ? 4 : f ? 14 : -6),x:p(a.x, Qa ? f ? -6 : 6 : 0)};
                this.textAlign = a.textAlign ||
                    (Qa ? f ? "right" : "left" : "center")
            }

            function x() {
                var a = [],l = [],b;
                C = X = null;
                R = [];
                z(ab, function(x) {
                    b = !1;
                    z(["xAxis","yAxis"], function(a) {
                        if (x.isCartesian && (a === "xAxis" && j || a === "yAxis" && !j) && (x.options[a] === f.index || x.options[a] === e && f.index === 0))x[a] = r,R.push(x),b = !0
                    });
                    !x.visible && va.ignoreHiddenSeries && (b = !1);
                    if (b) {
                        var c,v,g,oa,aa;
                        if (!j) {
                            c = x.options.stacking;
                            S = c === "percent";
                            if (c)oa = x.type + p(x.options.stack, ""),aa = "-" + oa,x.stackKey = oa,v = a[oa] || [],a[oa] = v,g = l[aa] || [],l[aa] = g;
                            S && (C = 0,X = 99)
                        }
                        x.isCartesian && (z(x.data,
                            function(a) {
                                var l = a.x,b = a.y,x = b < 0,e = x ? g : v,d = x ? aa : oa;
                                C === null && (C = X = a[Rb]);
                                j ? l > X ? X = l : l < C && (C = l) : t(b) && (c && (e[l] = t(e[l]) ? e[l] + b : b),b = e ? e[l] : b,a = p(a.low, b),S || (b > X ? X = b : a < C && (C = a)),c && (s[d] || (s[d] = {}),s[d][l] || (s[d][l] = new A(f.stackLabels, x, l)),s[d][l].setTotal(b)))
                            }),/(area|column|bar)/.test(x.type) && !j && (C >= 0 ? (C = 0,zc = !0) : X < 0 && (X = 0,ja = !0)))
                    }
                })
            }

            function v(a, l) {
                var b,A;
                Y = l ? 1 : U.pow(10, ib(U.log(a) / U.LN10));
                b = a / Y;
                if (!l && (l = [1,2,2.5,5,10],f.allowDecimals === !1 || w))Y === 1 ? l = [1,2,5,10] : Y <= 0.1 && (l = [1 / Y]);
                for (A =
                         0; A < l.length; A++)if (a = l[A],b <= (l[A] + (l[A + 1] || l[A])) / 2)break;
                a *= Y;
                return a
            }

            function g(a) {
                var f;
                f = a;
                Y = p(Y, U.pow(10, ib(U.log(cb) / U.LN10)));
                Y < 1 && (f = G(1 / Y) * 10,f = G(a * f) / f);
                return f
            }

            function oa() {
                var l,b,A,x,c = f.tickInterval,e = f.tickPixelInterval;
                l = f.maxZoom || (j && !t(f.min) && !t(f.max) ? jb(a.smallestInterval * 5, X - C) : null);
                ba = qa ? Wa : Ta;
                ma ? (A = a[j ? "xAxis" : "yAxis"][f.linkedTo],x = A.getExtremes(),K = p(x.min, x.dataMin),F = p(x.max, x.dataMax)) : (K = p(J, f.min, C),F = p(zb, f.max, X));
                w && (K = U.log(K) / U.LN10,F = U.log(F) / U.LN10);
                F -
                    K < l && (x = (l - F + K) / 2,K = za(K - x, p(f.min, K - x), C),F = jb(K + l, p(f.max, K + l), X));
                if (!Oa && !S && !ma && t(K) && t(F)) {
                    l = F - K || 1;
                    if (!t(f.min) && !t(J) && Zb && (C < 0 || !zc))K -= l * Zb;
                    if (!t(f.max) && !t(zb) && yc && (X > 0 || !ja))F += l * yc
                }
                cb = K === F ? 1 : ma && !c && e === A.options.tickPixelInterval ? A.tickInterval : p(c, Oa ? 1 : (F - K) * e / ba);
                !lb && !t(f.tickInterval) && (cb = v(cb));
                r.tickInterval = cb;
                ka = f.minorTickInterval === "auto" && cb ? cb / 5 : f.minorTickInterval;
                if (lb) {
                    La = [];
                    var c = Va.global.useUTC,aa = 1E3 / Db,d = 6E4 / Db,n = 36E5 / Db,e = 864E5 / Db;
                    l = 6048E5 / Db;
                    x = 2592E6 / Db;
                    var h =
                        31556952E3 / Db,Aa = [
                        ["second",aa,[1,2,5,10,15,30]],
                        ["minute",d,[1,2,5,10,15,30]],
                        ["hour",n,[1,2,3,4,6,8,12]],
                        ["day",e,[1,2]],
                        ["week",l,[1,2]],
                        ["month",x,[1,2,3,4,6]],
                        ["year",h,null]
                    ],m = Aa[6],o = m[1],ga = m[2];
                    for (A = 0; A < Aa.length; A++)if (m = Aa[A],o = m[1],ga = m[2],Aa[A + 1] && cb <= (o * ga[ga.length - 1] + Aa[A + 1][1]) / 2)break;
                    o === h && cb < 5 * o && (ga = [1,2,5]);
                    Aa = v(cb / o, ga);
                    ga = new Date(K * Db);
                    ga.setMilliseconds(0);
                    o >= aa && ga.setSeconds(o >= d ? 0 : Aa * ib(ga.getSeconds() / Aa));
                    if (o >= d)ga[Z](o >= n ? 0 : Aa * ib(ga[E]() / Aa));
                    if (o >= n)ga[W](o >= e ?
                        0 : Aa * ib(ga[ic]() / Aa));
                    if (o >= e)ga[tc](o >= x ? 1 : Aa * ib(ga[oc]() / Aa));
                    o >= x && (ga[vc](o >= h ? 0 : Aa * ib(ga[ua]() / Aa)),b = ga[N]());
                    o >= h && (b -= b % Aa,ga[wc](b));
                    if (o === l)ga[tc](ga[oc]() - ga[Ia]() + f.startOfWeek);
                    A = 1;
                    b = ga[N]();
                    aa = ga.getTime() / Db;
                    d = ga[ua]();
                    for (n = ga[oc](); aa < F && A < Wa;)La.push(aa),o === h ? aa = wa(b + A * Aa, 0) / Db : o === x ? aa = wa(b, d + A * Aa) / Db : !c && (o === e || o === l) ? aa = wa(b, d, n + A * Aa * (o === e ? 1 : 7)) : aa += o * Aa,A++;
                    La.push(aa);
                    yb = f.dateTimeLabelFormats[m[0]]
                } else {
                    A = g(ib(K / cb) * cb);
                    b = g(la(F / cb) * cb);
                    La = [];
                    for (A = g(A); A <= b;)La.push(A),
                        A = g(A + cb)
                }
                if (!ma) {
                    if (Oa || j && a.hasColumn) {
                        b = (Oa ? 1 : cb) * 0.5;
                        if (Oa || !t(p(f.min, J)))K -= b;
                        if (Oa || !t(p(f.max, zb)))F += b
                    }
                    b = La[0];
                    A = La[La.length - 1];
                    f.startOnTick ? K = b : K > b && La.shift();
                    f.endOnTick ? F = A : F < A && La.pop();
                    Qb || (Qb = {x:0,y:0});
                    if (!lb && La.length > Qb[Rb])Qb[Rb] = La.length
                }
            }

            function aa() {
                var a,f;
                L = K;
                fa = F;
                x();
                oa();
                M = Ea;
                Ea = ba / (F - K || 1);
                if (!j)for (a in s)for (f in s[a])s[a][f].cum = 0;
                if (!r.isDirty)r.isDirty = K !== L || F !== fa
            }

            function n(a) {
                a = (new b(a)).render();
                ia.push(a);
                return a
            }

            function h() {
                var A = f.title,x = f.stackLabels,
                    c = f.alternateGridColor,v = f.lineWidth,aa,g,oa = a.hasRendered,d = oa && t(L) && !isNaN(L);
                aa = D(f.showAlways, R.length && t(K) && t(F));
                ba = qa ? Wa : Ta;
                Ea = ba / (F - K || 1);
                V = qa ? Fa : Ab;
                if (aa || ma) {
                    if (ka && !Oa)for (aa = K + (La[0] - K) % ka; aa <= F; aa += ka)fc[aa] || (fc[aa] = new l(aa, !0)),d && fc[aa].isNew && fc[aa].render(null, !0),fc[aa].isActive = !0,fc[aa].render();
                    z(La, function(a, f) {
                        if (!ma || a >= K && a <= F)d && Ga[a].isNew && Ga[a].render(f, !0),Ga[a].isActive = !0,Ga[a].render(f)
                    });
                    c && z(La, function(a, f) {
                        if (f % 2 === 0 && a < F)jc[a] || (jc[a] = new b),jc[a].options =
                        {from:a,to:La[f + 1] !== e ? La[f + 1] : F,color:c},jc[a].render(),jc[a].isActive = !0
                    });
                    oa || z((f.plotLines || []).concat(f.plotBands || []), function(a) {
                        ia.push((new b(a)).render())
                    })
                }
                z([Ga,fc,jc], function(a) {
                    for (var f in a)a[f].isActive ? a[f].isActive = !1 : (a[f].destroy(),delete a[f])
                });
                v && (aa = Fa + (m ? Wa : 0) + q,g = Ra - Ab - (m ? Ta : 0) + q,aa = xa.crispLine([o,qa ? Fa : aa,qa ? g : Ja,T,qa ? bb - db : aa,qa ? g : Ra - Ab], v),Sb ? Sb.animate({d:aa}) : Sb = xa.path(aa).attr({stroke:f.lineColor,"stroke-width":v,zIndex:7}).add());
                r.axisTitle && (aa = qa ? Fa : Ja,v = k(A.style.fontSize ||
                    12),aa = {low:aa + (qa ? 0 : ba),middle:aa + ba / 2,high:aa + (qa ? ba : 0)}[A.align],v = (qa ? Ja + Ta : Fa) + (qa ? 1 : -1) * (m ? -1 : 1) * Yb + (ga === 2 ? v : 0),r.axisTitle[oa ? "animate" : "attr"]({x:qa ? aa : v + (m ? Wa : 0) + q + (A.x || 0),y:qa ? v - (m ? Ta : 0) + q : aa + (A.y || 0)}));
                if (x && x.enabled) {
                    var n,Aa,x = r.stackTotalGroup;
                    if (!x)r.stackTotalGroup = x = xa.g("stack-labels").attr({visibility:O,zIndex:6}).translate(Fa, Ja).add();
                    for (n in s)for (Aa in A = s[n],A)A[Aa].render(x)
                }
                n = f.scroll;
                Aa = r.scroller;
                if (n && n.enabled && (qa ? (A = Fa + q - 2,x = Ra - Ab - (!m ? 0 : Ta) + q + n.padding - 1) : (A = Fa +
                    (m ? Wa : 0),x = Ra - Ab),!Aa))Aa = r.scroller = xa.scroller(A, x, ba + 4, n.height, qa, {size:n.buttonWidth,padding:n.buttonPadding}, !1).attr({fill:n.color}).setScrollRatio(n.scrollRatio).setScrollPosition(n.startPercent).callback(
                    function() {
                        r.scroll.apply(r, arguments)
                    }).add(Gb);
                r.isDirty = !1
            }

            function Aa(a) {
                for (var f = ia.length; f--;)ia[f].id === a && ia[f].destroy()
            }

            var j = f.isX,m = f.opposite,qa = Qa ? !j : j,ga = qa ? m ? 0 : 2 : m ? 1 : 3,s = {},f = ha(j ? pc : uc, [Bc,Cc,xc,Dc][ga], f),r = this,y = f.type,lb = y === "datetime",w = y === "logarithmic",q = f.offset ||
                0,Rb = j ? "x" : "y",ba,Ea,M,V = qa ? Fa : Ab,tb,ub,Gb,I,Sb,C,X,R,J,zb,F = null,K = null,L,fa,Zb = f.minPadding,yc = f.maxPadding,ma = t(f.linkedTo),zc,ja,S,y = f.events,P,ia = [],cb,ka,Y,La,Ga = {},fc = {},jc = {},Kb,Q,Yb,yb,Oa = f.categories,Fc = f.labels.formatter || function() {
                var a = this.value;
                return yb ? c(yb, a) : cb % 1E6 === 0 ? a / 1E6 + "M" : cb % 1E3 === 0 ? a / 1E3 + "k" : !Oa && a >= 1E3 ? sa(a, 0) : a
            },da = qa && f.labels.staggerLines,ca = f.reversed,ec = Oa && f.tickmarkPlacement === "between" ? 0.5 : 0;
            l.prototype = {addLabel:function() {
                var a = this.pos,l = f.labels,b = !(a === K &&
                    !p(f.showFirstLabel, 1) || a === F && !p(f.showLastLabel, 0)),A = Oa && qa && Oa.length && !l.step && !l.staggerLines && !l.rotation && Wa / Oa.length || !qa && Wa / 2,x = this.label,a = Fc.call({isFirst:a === La[0],isLast:a === La[La.length - 1],dateTimeLabelFormat:yb,value:Oa && Oa[a] ? Oa[a] : a}),A = A && {width:za(1, G(A - 2 * (l.padding || 10))) + B},A = u(A, l.style);
                x === e ? this.label = t(a) && b && l.enabled ? xa.text(a, 0, 0).attr({align:l.align,rotation:l.rotation}).css(A).add(Gb) : null : x && x.attr({text:a}).css(A)
            },getLabelSize:function() {
                var a = this.label;
                return a ?
                    (this.labelBBox = a.getBBox())[qa ? "height" : "width"] : 0
            },render:function(a, l) {
                var b = !this.minor,A = this.label,x = this.pos,c = f.labels,v = this.gridLine,aa = b ? f.gridLineWidth : f.minorGridLineWidth,g = b ? f.gridLineColor : f.minorGridLineColor,oa = b ? f.gridLineDashStyle : f.minorGridLineDashStyle,d = this.mark,n = b ? f.tickLength : f.minorTickLength,Aa = b ? f.tickWidth : f.minorTickWidth || 0,h = b ? f.tickColor : f.minorTickColor,j = b ? f.tickPosition : f.minorTickPosition,b = c.step,ga = l && Ma || Ra,r;
                r = qa ? tb(x + ec, null, null, l) + V : Fa + q + (m ? (l && Ka || bb) -
                    db - Fa : 0);
                ga = qa ? ga - Ab + q - (m ? Ta : 0) : ga - tb(x + ec, null, null, l) - V;
                if (aa) {
                    x = ub(x + ec, aa, l);
                    if (v === e) {
                        v = {stroke:g,"stroke-width":aa};
                        if (oa)v.dashstyle = oa;
                        this.gridLine = v = aa ? xa.path(x).attr(v).add(I) : null
                    }
                    v && x && v.animate({d:x})
                }
                if (Aa)j === "inside" && (n = -n),m && (n = -n),aa = xa.crispLine([o,r,ga,T,r + (qa ? 0 : -n),ga + (qa ? n : 0)], Aa),d ? d.animate({d:aa}) : this.mark = xa.path(aa).attr({stroke:h,"stroke-width":Aa}).add(Gb);
                if (A && !isNaN(r)) {
                    r = r + c.x - (ec && qa ? ec * Ea * (ca ? -1 : 1) : 0);
                    ga = ga + c.y - (ec && !qa ? ec * Ea * (ca ? 1 : -1) : 0);
                    t(c.y) || (ga += k(A.styles.lineHeight) *
                        0.9 - A.getBBox().height / 2);
                    da && (ga += a / (b || 1) % da * 16);
                    if (b)A[a % b ? "hide" : "show"]();
                    A[this.isNew ? "attr" : "animate"]({x:r,y:ga})
                }
                this.isNew = !1
            },destroy:function() {
                for (var a in this)this[a] && this[a].destroy && this[a].destroy()
            }};
            b.prototype = {render:function() {
                var f = this,l = f.options,b = l.label,A = f.label,x = l.width,c = l.to,v,e = l.from,aa = l.dashStyle,g = f.svgElem,oa = [],d,n,Aa = l.color;
                n = l.zIndex;
                var h = l.events;
                f.chart = a;
                x === 0 && b && t(b.text) && (x = 1,Aa = $);
                if (x) {
                    if (oa = ub([l.value,D(l.to, l.value)], x),l = {stroke:Aa,"stroke-width":x},
                        aa)l.dashstyle = aa
                } else if (t(e) && t(c))e = za(e, K),c = jb(c, F),v = ub(c),(oa = ub(e)) && v ? (this.options.alwaysVisible && (qa ? v[1] = v[4] += oa[1] === v[1] && oa[4] === v[4] : v[2] = v[5] += oa[2] === v[2] && oa[5] === v[5]),oa.push(v[4], v[5], v[1], v[2])) : oa = null,l = {fill:Aa}; else return;
                if (t(n))l.zIndex = n;
                if (g)oa ? g.animate({d:oa}, null, g.onGetPath) : (g.hide(),g.onGetPath = function() {
                    g.show()
                }); else if (oa && oa.length && (f.svgElem = g = xa.path(oa).attr(l).add(),h))for (d in aa = function(a) {
                    g.on(a, function(l) {
                        h[a].apply(f, [l])
                    })
                },h)aa(d);
                if (b && t(b.text) &&
                    oa && oa.length && Wa > 0 && Ta > 0) {
                    b = ha({align:qa && v && "center",x:qa ? !v && 4 : 10,verticalAlign:!qa && v && "middle",y:qa ? v ? 16 : 10 : v ? 6 : -4,rotation:qa && !v && 90}, b);
                    if (!A)f.label = A = xa.text(b.text, 0, 0).attr({align:b.textAlign || b.align,rotation:b.rotation,zIndex:n}).css(b.style).add();
                    d = [oa[1],oa[4],p(oa[6], oa[1])];
                    n = [oa[2],oa[5],p(oa[7], oa[2])];
                    oa = jb.apply(U, d);
                    v = jb.apply(U, n);
                    d = za.apply(U, d) - oa;
                    n = za.apply(U, n) - v;
                    b.offsetScale !== void 0 && (b.offsetScaleIndex !== void 0 ? (aa = (j ? a.yAxis : a.xAxis)[b.offsetScaleIndex],qa ? v += aa.translate(b.offsetScale,
                        0, 1) : oa = aa.translate(b.offsetScale, 0, 1) + oa) : qa ? v += Ta * b.offsetScale : oa += Wa * b.offsetScale);
                    A.align(b, !1, {x:oa,y:v,width:d,height:n});
                    A.textBound();
                    A.show()
                } else A && A.hide();
                return f
            },destroy:function() {
                for (var a in this)this[a] && this[a].destroy && this[a].destroy(),delete this[a];
                d(ia, this)
            }};
            A.prototype = {setTotal:function(a) {
                this.cum = this.total = a
            },render:function(f) {
                var l = this.options.formatter.call(this);
                this.label ? this.label.attr({text:l,visibility:na}) : this.label = a.renderer.text(l, 0, 0).css(this.options.style).attr({align:this.textAlign,
                    rotation:this.options.rotation,visibility:na}).add(f)
            },setOffset:function(f, l) {
                var b = this.isNegative,A = r.translate(this.total),x = r.translate(0),x = ra(A - x),v = a.xAxis[0].translate(this.x) + f,c = a.plotHeight,b = {x:Qa ? b ? A : A - x : v,y:Qa ? c - v - l : b ? c - A - x : c - A,width:Qa ? x : l,height:Qa ? l : x};
                this.label && this.label.align(this.alignOptions, null, b).attr({visibility:O})
            }};
            tb = function(a, f, l, b, A, x) {
                var v = 1,c = 0,aa = b ? M : Ea,b = b ? L : K;
                aa || (aa = Ea);
                l && (v *= -1,c = ba);
                ca && (v *= -1,c -= v * ba);
                x ? f ? (a /= aa,w && A && (a = U.pow(10, a))) : (w && A && (a = U.log(a) /
                    U.LN10),a *= aa) : f ? (ca && (a = ba - a),a = a / aa + b,w && A && (a = U.pow(10, a))) : (w && A && (a = U.log(a) / U.LN10),a = v * (a - b) * aa + c);
                return a
            };
            ub = function(a, f, l) {
                var b,A,x,v,c = l && Ma || Ra,aa = l && Ka || bb,e;
                a instanceof Array || (a = [a,a]);
                x = tb(a[0], null, null, l);
                v = tb(a[1], null, null, l);
                a = G(x + V);
                b = G(v + V);
                l = G(c - x - V);
                A = G(c - v - V);
                if (isNaN(x) || isNaN(v))e = !0; else if (qa) {
                    if (l = Ja,A = c - Ab,a < Fa || a > Fa + Wa)e = !0
                } else if (a = Fa,b = aa - db,l < Ja || l > Ja + Ta)e = !0;
                return e ? null : xa.crispLine([o,a,l,T,b,A], f || 0)
            };
            Qa && j && ca === e && (ca = !0);
            u(r, {addPlotBand:n,addPlotLine:n,
                adjustTickAmount:function() {
                    if (Qb && !lb && !Oa && !ma) {
                        var a = Kb,f = La.length;
                        Kb = Qb[Rb];
                        if (f < Kb) {
                            for (; La.length < Kb;)La.push(g(La[La.length - 1] + cb));
                            Ea *= (f - 1) / (Kb - 1);
                            F = La[La.length - 1]
                        }
                        if (t(a) && Kb !== a)r.isDirty = !0
                    }
                },categories:Oa,getExtremes:function() {
                    return{min:K,max:F,dataMin:C,dataMax:X,userMin:J,userMax:zb}
                },getPlotLinePath:ub,getThreshold:function(a) {
                    K > a ? a = K : F < a && (a = F);
                    return tb(a, 0, 1)
                },isXAxis:j,options:f,plotLinesAndBands:ia,getOffset:function() {
                    var a = D(f.showAlways, R.length && t(K) && t(F)),b = 0,A = 0,x =
                        f.title,v = f.labels,c = [-1,1,1,-1][ga],aa;
                    Gb || (Gb = xa.g("axis").attr({zIndex:7}).add(),I = xa.g("grid").attr({zIndex:1}).add());
                    Q = 0;
                    if (a || ma)z(La, function(a) {
                        Ga[a] ? Ga[a].addLabel() : Ga[a] = new l(a);
                        if (ga === 0 || ga === 2 || {1:"left",3:"right"}[ga] === v.align)Q = za(Ga[a].getLabelSize(), Q)
                    }),da && (Q += (da - 1) * 16); else for (aa in Ga)Ga[aa].destroy(),delete Ga[aa];
                    if (x && x.text) {
                        if (!r.axisTitle)r.axisTitle = xa.text(x.text, 0, 0).attr({zIndex:7,rotation:x.rotation || 0,align:x.textAlign || {low:"left",middle:"center",high:"right"}[x.align]}).css(x.style).add();
                        b = r.axisTitle.getBBox()[qa ? "height" : "width"];
                        A = p(x.margin, qa ? 5 : 10)
                    }
                    q = c * (f.offset || ta[ga]);
                    Yb = Q + (ga !== 2 && Q && c * f.labels[qa ? "y" : "x"]) + A;
                    ta[ga] = za(ta[ga], Yb + b + c * q)
                },render:h,setCategories:function(f, l) {
                    r.categories = Oa = f;
                    z(R, function(a) {
                        a.translate();
                        a.setTooltipPoints(!0)
                    });
                    r.isDirty = !0;
                    p(l, !0) && a.redraw()
                },setExtremes:function(f, l, b, A) {
                    b = p(b, !0);
                    pa(r, "setExtremes", {min:f,max:l}, function() {
                        J = f;
                        zb = l;
                        b && a.redraw(A)
                    })
                },setScale:aa,setTickPositions:oa,translate:tb,redraw:function() {
                    eb.resetTracker && eb.resetTracker();
                    h();
                    z(ia, function(a) {
                        a.render()
                    });
                    z(R, function(a) {
                        a.isDirty = !0
                    })
                },removePlotBand:Aa,removePlotLine:Aa,reversed:ca,stacks:s,scroll:function(f, l, b) {
                    var A = this.options,x = A.scroll,A = A.min,v = x.vxLength,c = x.viewPortMin,f = (x.viewPortMax - c - v) * f + c,x = f + v,aa;
                    b === void 0 && (b = !0);
                    eb.resetTracker && (b ? eb.resetTracker() : a.tooltip && a.tooltip.hide());
                    J = f;
                    zb = x;
                    ya(p(l, !1), a);
                    pb && (Fb || (Qb = null,this.setScale()),z(ia, function(a) {
                        a.render()
                    }),aa = Ea * (f - A),z(R, function(a) {
                        a.scroll(aa, 0, b)
                    }));
                    pa(a, "scroll")
                }});
            for (P in y)ea(r,
                P, y[P]);
            aa()
        }

        function A() {
            var f = {};
            return{add:function(l, b, A, x) {
                f[l] || (b = xa.text(b, 0, 0).css(a.toolbar.itemStyle).align({align:"right",x:-db - 20,y:Ja + 30}).on("click", x).attr({align:"right",zIndex:20}).add(),f[l] = b)
            },remove:function(a) {
                Na(f[a].element);
                f[a] = null
            }}
        }

        function x(a) {
            function f() {
                var a = this.points || j(this),l = a[0].series.xAxis,b = this.x,l = l && l.options.type === "datetime",A = Q(b) || l,x;
                x = A ? ['<span style="font-size: 10px">' + (l ? c("%A, %b %e, %Y", b) : b) + "</span>"] : [];
                z(a, function(a) {
                    x.push(a.point.tooltipFormatter(A))
                });
                return x.join("<br/>")
            }

            function l(a, f) {
                o = n ? a : (2 * o + a) / 3;
                ga = n ? f : (ga + f) / 2;
                qa.translate(o, ga);
                kc = ra(a - o) > 1 || ra(f - ga) > 1 ? function() {
                    l(a, f)
                } : null
            }

            function b() {
                if (!n) {
                    var a = X.hoverPoints;
                    qa.hide();
                    z(aa, function(a) {
                        a && a.hide()
                    });
                    a && z(a, function(a) {
                        a.setState()
                    });
                    X.hoverPoints = null;
                    n = !0
                }
            }

            var A,x = a.borderWidth,v = a.crosshairs,aa = [],e = a.style,oa = a.shared,g = k(e.padding),d = x + g,n = !0,Aa,h,o = 0,ga = 0,m = !1;
            e.padding = 0;
            var qa = xa.g("tooltip").attr({zIndex:8}).add(),r = xa.rect(d, d, 0, 0, a.borderRadius, x).attr({fill:a.backgroundColor,
                "stroke-width":x}).add(qa).shadow(a.shadow, void 0, a.shadow),s = xa.text("", g + d, k(e.fontSize) + g + d).attr({zIndex:1}).css(e).add(qa);
            qa.hide();
            return{shared:oa,refresh:function(x) {
                var c,e,o,ga = 0,y = {},lb = [];
                o = x.tooltipPos;
                c = a.formatter || f;
                y = X.hoverPoints;
                if (m)b(); else if (oa ? (y && z(y, function(a) {
                    a.setState()
                }),X.hoverPoints = x,z(x, function(a) {
                    a.setState(M);
                    ga += a.plotY;
                    lb.push(a.getLabelConfig())
                }),e = x[0].plotX,ga = G(ga) / x.length,y = {x:x[0].category},y.points = lb,x = x[0]) : y = x.getLabelConfig(),y = c.call(y),A = x.series,
                    e = oa ? e : x.plotX,ga = oa ? ga : x.plotY,c = G(o ? o[0] : Qa ? Wa - ga : e),e = G(o ? o[1] : Qa ? Ta - e : ga),o = oa || !x.series.isCartesian || Mb(c, e),y === !1 || !o ? b() : (n && (qa.show(),n = !1),s.attr({text:y}),o = s.getBBox(),Aa = o.width + 2 * g,h = o.height + 2 * g,r.attr({width:Aa,height:h,stroke:a.borderColor || x.color || A.color || "#606060"}),o = c - Aa + Fa - 25,e = e - h + Ja + 10,o < 7 && (o = Fa + c + 15),e < 5 ? e = 5 : e + h > Ra && (e = Ra - h - 5),l(G(o - d), G(e - d))),v) {
                    v = j(v);
                    for (c = v.length; c--;)if (e = x.series[c ? "yAxis" : "xAxis"],v[c] && e)if (e = e.getPlotLinePath(x[c ? "y" : "x"], 1),aa[c])aa[c].attr({d:e,
                        visibility:O}); else {
                        o = {"stroke-width":v[c].width || 1,stroke:v[c].color || "#C0C0C0",zIndex:2};
                        if (v[c].dashStyle)o.dashstyle = v[c].dashStyle;
                        aa[c] = xa.path(e).attr(o).add()
                    }
                }
            },hide:b,move:l,block:function(a) {
                (m = Boolean(a)) && b()
            }}
        }

        function oa(a, f) {
            function l(a) {
                var f,b = hc && Ba.width / Ba.documentElement.clientWidth - 1,A,x,v,a = a || gb.event;
                if (!a.target)a.target = a.srcElement;
                f = a.touches ? a.touches.item(0) : a;
                if (a.type !== "mousemove" || gb.opera || b)Bb = J(Sa),A = Bb.left,x = Bb.top;
                Lb ? (v = a.x,f = a.y) : f.layerX === e ? (v = f.pageX -
                    A,f = f.pageY - x) : (v = a.layerX,f = a.layerY);
                b && (v += G((b + 1) * A - A),f += G((b + 1) * x - x));
                return u(a, {chartX:v,chartY:f})
            }

            function A(a) {
                var f = {xAxis:[],yAxis:[]};
                z(sb, function(l) {
                    var b = l.translate,A = l.isXAxis;
                    f[A ? "xAxis" : "yAxis"].push({axis:l,value:b((Qa ? !A : A) ? a.chartX - Fa : Ta - a.chartY + Ja, !0)})
                });
                return f
            }

            function v() {
                var f = a.hoverSeries,l = a.hoverPoint;
                if (l)l.onMouseOut();
                if (f)f.onMouseOut();
                Ub && Ub.hide();
                Nb = null
            }

            function c() {
                if (d) {
                    var f = {xAxis:[],yAxis:[]},l = d.getBBox(),b = l.x - Fa,A = l.y - Ja;
                    g && (z(sb, function(a) {
                        var x =
                            a.translate,v = a.isXAxis,c = Qa ? !v : v,e = x(c ? b : Ta - A - l.height, !0, 0, 0, 1),x = x(c ? b + l.width : Ta - A, !0, 0, 0, 1);
                        f[v ? "xAxis" : "yAxis"].push({axis:a,min:jb(e, x),max:za(e, x)})
                    }),pa(a, "selection", f, cc));
                    d = d.destroy()
                }
                a.mouseIsDown = nb = g = !1;
                yb(Ba, Ha ? "touchend" : "mouseup", c)
            }

            var aa,oa,g,d,n = va.zoomType,Aa = /x/.test(n),h = /y/.test(n),o = Aa && !Qa || h && Qa,ga = h && !Qa || Aa && Qa;
            rb = function() {
                qb ? (qb.translate(Fa, Ja),Qa && qb.attr({width:a.plotWidth,height:a.plotHeight}).invert()) : a.trackerGroup = qb = xa.g("tracker").attr({zIndex:9}).add()
            };
            rb();
            if (f.enabled)a.tooltip = Ub = x(f);
            (function() {
                var x = !0;
                Sa.onmousedown = function(f) {
                    f = l(f);
                    !Ha && f.preventDefault && f.preventDefault();
                    a.mouseIsDown = nb = !0;
                    aa = f.chartX;
                    oa = f.chartY;
                    ea(Ba, Ha ? "touchend" : "mouseup", c)
                };
                var e = function(A) {
                    if (!A || !(A.touches && A.touches.length > 1)) {
                        A = l(A);
                        if (!Ha)A.returnValue = !1;
                        var c = A.chartX,e = A.chartY,n = !Mb(c - Fa, e - Ja);
                        Ha && A.type === "touchstart" && (b(A.target, "isTracker") ? a.runTrackerClick || A.preventDefault() : !mb && !n && A.preventDefault());
                        n && (x || v(),c < Fa ? c = Fa : c > Fa + Wa && (c = Fa + Wa),
                            e < Ja ? e = Ja : e > Ja + Ta && (e = Ja + Ta));
                        if (nb && A.type !== "touchstart") {
                            if (g = Math.sqrt(Math.pow(aa - c, 2) + Math.pow(oa - e, 2)),g > 10) {
                                if (pb && (Aa || h) && Mb(aa - Fa, oa - Ja))d || (d = xa.rect(Fa, Ja, o ? 1 : Wa, ga ? 1 : Ta, 0).attr({fill:"rgba(69,114,167,0.25)",zIndex:7}).add());
                                d && o && (c -= aa,d.attr({width:ra(c),x:(c > 0 ? 0 : c) + aa}));
                                d && ga && (e -= oa,d.attr({height:ra(e),y:(e > 0 ? 0 : e) + oa}))
                            }
                        } else if (!n) {
                            var qa,e = a.hoverPoint,c = a.hoverSeries,j,m,r = bb,s = Qa ? A.chartY : A.chartX - Fa;
                            if (Ub && f.shared) {
                                qa = [];
                                j = ab.length;
                                for (m = 0; m < j; m++)if (ab[m].visible && ab[m].tooltipPoints.length)A =
                                    ab[m].tooltipPoints[s],A._dist = ra(s - A.plotX),r = jb(r, A._dist),qa.push(A);
                                for (j = qa.length; j--;)qa[j]._dist > r && qa.splice(j, 1);
                                if (qa.length && qa[0].plotX !== Nb)Ub.refresh(qa),Nb = qa[0].plotX
                            }
                            if (c && c.tracker && (A = c.tooltipPoints[s + ((Qa ? c.yShift : c.xShift) || 0)]) && A !== e)A.onMouseOver()
                        }
                        return(x = n) || !pb
                    }
                };
                Sa.onmousemove = e;
                ea(Sa, "mouseleave", v);
                Sa.ontouchstart = function(a) {
                    if (Aa || h)Sa.onmousedown(a);
                    e(a)
                };
                Sa.ontouchmove = e;
                Sa.ontouchend = function() {
                    g && v()
                };
                Sa.onclick = function(f) {
                    var x = a.hoverPoint,f = l(f);
                    f.cancelBubble =
                        !0;
                    if (!g)if (x && b(f.target, "isTracker")) {
                        var c = x.plotX,v = x.plotY;
                        u(x, {pageX:Bb.left + Fa + (Qa ? Wa - v : c),pageY:Bb.top + Ja + (Qa ? Ta - c : v)});
                        pa(x.series, "click", u(f, {point:x}));
                        x.firePointEvent("click", f)
                    } else u(f, A(f)),pa(a, "click", f);
                    g = !1
                }
            })();
            Ob = setInterval(function() {
                kc && kc()
            }, 32);
            u(this, {zoomX:Aa,zoomY:h,resetTracker:v})
        }

        function aa(a) {
            var f = a.type || va.type || va.defaultSeriesType,l = fa[f],b = X.hasRendered;
            if (b)if (Qa && f === "column")l = fa.bar; else if (!Qa && f === "bar")l = fa.column;
            f = new l;
            f.init(X, a);
            !b && f.inverted &&
            (Qa = !0);
            if (f.isCartesian)pb = f.isCartesian;
            ab.push(f);
            return f
        }

        function v() {
            va.alignTicks !== !1 && z(sb, function(a) {
                a.adjustTickAmount()
            });
            Qb = null
        }

        function n(a) {
            var f = X.isDirtyLegend,l,b = X.isDirtyBox,A = ab.length,x = A,c = X.clipRect;
            for (ya(a, X); x--;)if (a = ab[x],a.isDirty && a.options.stacking) {
                l = !0;
                break
            }
            if (l)for (x = A; x--;)if (a = ab[x],a.options.stacking)a.isDirty = !0;
            z(ab, function(a) {
                a.isDirty && (a.cleanData(),a.getSegments(),a.options.legendType === "point" && (f = !0))
            });
            if (f && Cb.renderLegend)Cb.renderLegend(),X.isDirtyLegend =
                !1;
            pb && (Fb || (Qb = null,z(sb, function(a) {
                a.setScale()
            })),v(),gc(),z(sb, function(a) {
                if (a.isDirty || b)a.redraw(),b = !0
            }));
            b && (Pb(),rb(),c && (ia(c),c.animate({width:X.plotSizeX,height:X.plotSizeY})));
            z(ab, function(a) {
                a.isDirty && a.visible && (!a.isCartesian || a.xAxis) && a.redraw()
            });
            eb && eb.resetTracker && eb.resetTracker();
            pa(X, "redraw")
        }

        function ga() {
            var f = a.xAxis || {},b = a.yAxis || {},A,f = j(f);
            z(f, function(a, f) {
                a.index = f;
                a.isX = !0
            });
            b = j(b);
            z(b, function(a, f) {
                a.index = f
            });
            sb = f.concat(b);
            X.xAxis = [];
            X.yAxis = [];
            sb = dc(sb,
                function(a) {
                    A = new l(X, a);
                    X[A.isXAxis ? "xAxis" : "yAxis"].push(A);
                    return A
                });
            v()
        }

        function qa(f, l) {
            Ga = ha(a.title, f);
            Kb = ha(a.subtitle, l);
            z([
                ["title",f,Ga],
                ["subtitle",l,Kb]
            ], function(a) {
                var f = a[0],l = X[f],b = a[1],a = a[2];
                l && b && (l.destroy(),l = null);
                a && a.text && !l && (X[f] = xa.text(a.text, 0, 0).attr({align:a.align,"class":"highcharts-" + f,zIndex:1}).css(a.style).add().align(a, !1, Y))
            })
        }

        function lb() {
            Oa = va.renderTo;
            ob = s + Wb++;
            Q(Oa) && (Oa = Ba.getElementById(Oa));
            Oa.innerHTML = "";
            Oa.offsetWidth || (Da = Oa.cloneNode(0),L(Da,
                {position:y,top:"-9999px",display:""}),Ba.body.appendChild(Da));
            Yb = (Da || Oa).offsetWidth;
            Ca = (Da || Oa).offsetHeight;
            X.chartWidth = bb = va.width || Yb || 600;
            X.chartHeight = Ra = va.height || Ca || 400;
            X.container = Sa = C(h, {className:"highcharts-container" + (va.className ? " " + va.className : ""),id:ob}, u({position:m,overflow:na,width:bb + B,height:Ra + B,textAlign:"left"}, va.style), Da || Oa);
            X.renderer = xa = va.forExport ? new qc(Sa, bb, Ra, !0) : new Xb(Sa, bb, Ra);
            xa.lighting3D = X.options.chart.use3DLighting;
            var a,f;
            nc && Sa.getBoundingClientRect &&
            (a = function() {
                L(Sa, {left:0,top:0});
                f = Sa.getBoundingClientRect();
                L(Sa, {left:-(f.left - k(f.left)) + B,top:-(f.top - k(f.top)) + B})
            },a(),ea(gb, "resize", a),ea(X, "destroy", function() {
                yb(gb, "resize", a)
            }))
        }

        function Rb() {
            function a() {
                var l = va.width || Oa.offsetWidth,b = va.height || Oa.offsetHeight;
                if (l && b) {
                    if (l !== Yb || b !== Ca)clearTimeout(f),f = setTimeout(function() {
                        bc(l, b, !1)
                    }, 100);
                    Yb = l;
                    Ca = b
                }
            }

            var f;
            ea(gb, "resize", a);
            ea(X, "destroy", function() {
                yb(gb, "resize", a)
            })
        }

        function Ea() {
            var a = this.options.chart.canvasBaseColor3D,
                f = this.options.chart.canvasBaseDepth,l = this.options.chart.canvasBgDepth,b = this.options.chart.canvasBgColor,A = this.renderer,x = this.options.chart.defaultSeriesType,c = this.xDepth,v = this.yDepth;
            if (this.options.chart.showCanvasBase)this.base3D = x === "bar3d" ? A.rect3d(this.plotLeft - c - f, this.plotTop + v, f, this.plotHeight, c, v, 0, "canvasBase3D") : A.rect3d(this.plotLeft - c, this.plotTop + this.plotHeight + v, this.plotWidth, f, c, v, 0, "canvasBase3D"),this.base3D.attr({fill:a,lighting3D:this.options.chart.use3DLighting}).add();
            if (this.options.chart.showCanvasBg)Ya.depth3D = x === "bar3d" ? A.path(["M",this.plotLeft,this.plotTop,"L",this.plotLeft + l * 1.2,this.plotTop - l,this.plotLeft + this.plotWidth - l,this.plotTop - l,this.plotLeft + this.plotWidth,this.plotTop,"Z"]).attr({fill:b}).add() : A.path(["M",this.plotLeft + this.plotWidth,this.plotTop,"L",this.plotLeft + this.plotWidth + l,this.plotTop + l * 1.2,this.plotLeft + this.plotWidth + l,this.plotTop + this.plotHeight - l,this.plotLeft + this.plotWidth,this.plotTop + this.plotHeight,"Z"]).attr({fill:b}).add()
        }

        function tb() {
            var f = a.labels,l = a.credits,b,x = {},c;
            qa();
            Cb = X.legend = new Ec(X);
            gc();
            z(sb, function(a) {
                a.setTickPositions(!0)
            });
            v();
            gc();
            Pb();
            pb && z(sb, function(a) {
                a.render()
            });
            if (!X.seriesGroup)X.seriesGroup = xa.g("series-group").attr({zIndex:3}).add();
            z(ab, function(f) {
                f.translate();
                f.setTooltipPoints();
                a.chart.is3D ? (c = f.type,x[c] || (x[c] = []),x[c].push(f)) : f.render()
            });
            if (a.chart.is3D)X.xDepth = F(a.chart.xDepth, 10),X.yDepth = F(a.chart.yDepth, 10),Ea.call(X),sc(X, x);
            f.items && z(f.items, function() {
                var a = u(f.style,
                    this.style),l = k(a.left) + Fa,b = k(a.top) + Ja;
                delete a.left;
                delete a.top;
                a = xa.text(this.html, l, b).attr({zIndex:F(this.zIndex, 2),align:D(this.textAlign, "left")}).css(a).add();
                this.vAlign === "bottom" && a.attr({y:b - a.getBBox().height});
                this.vAlign === "middle" && a.attr({y:b - a.getBBox().height / 2})
            });
            if (!X.toolbar)X.toolbar = A(X);
            if (l.enabled && !X.credits)b = l.href,xa.text(l.text, 0, 0).on("click",
                function() {
                    if (b)location.href = b
                }).attr({align:l.position.align,zIndex:8}).css(l.style).add().align(l.position);
            rb();
            if (a.subCharts &&
                a.subCharts.length && !xa.forExport)X.subCharts = [],z(a.subCharts, function(a) {
                var f = a.chart,l = f.renderTo = Ba.createElement("div");
                L(l, {position:"relative",background:"transparent",left:f.left + B,top:(Lb && !Jb ? f.top : f.top - Ra) + B,width:f.width + B,height:f.height + B});
                Sa.appendChild(l);
                X.subCharts.push(new Hb(a))
            });
            X.hasRendered = !0;
            Da && (Oa.appendChild(Sa),Na(Da))
        }

        function Gb() {
            var a = ab.length,f = Sa && Sa.parentNode;
            X.subCharts && X.subCharts.length && z(X.subCharts, function(a) {
                a.destroy && a.destroy()
            });
            pa(X, "destroy");
            yb(gb, "unload", Gb);
            yb(X);
            for (z(sb, function(a) {
                yb(a)
            }); a--;)ab[a].destroy();
            if (Sa)Sa.innerHTML = "",yb(Sa),f && f.removeChild(Sa),Sa = null;
            if (xa)xa.alignedObjects = null;
            clearInterval(Ob);
            for (a in X)delete X[a]
        }

        function Sb() {
            !Jb && gb == gb.top && Ba.readyState !== "complete" ? Ba.attachEvent("onreadystatechange", function() {
                Ba.detachEvent("onreadystatechange", Sb);
                Ba.readyState === "complete" && Sb()
            }) : (lb(),Vb(),ac(),z(a.series || [], function(a) {
                aa(a)
            }),X.inverted = Qa = p(Qa, a.chart.inverted),ga(),X.render = tb,X.tracker = eb =
                new oa(X, a.tooltip),tb(),pa(X, "load"),f && f.apply(X, [X]),z(X.callbacks, function(a) {
                a.apply(X, [X])
            }))
        }

        pc = ha(pc, Va.xAxis);
        uc = ha(uc, Va.yAxis);
        Va.xAxis = Va.yAxis = null;
        var a = ha(Va, a),va = a.chart,I = va.margin,I = w(I) ? I : [I,I,I,I],ub = p(va.marginTop, I[0]),zb = p(va.marginRight, I[1]),K = p(va.marginBottom, I[2]),ma = p(va.marginLeft, I[3]),Zb = va.spacingTop,S = va.spacingRight,La = va.spacingBottom,ka = va.spacingLeft,Y,Ga,Kb,Ja,db,Ab,Fa,ta,Oa,Da,Sa,ob,Yb,Ca,bb,Ra,Ka,Ma,rc,Ya,Pa,lc,Ua,Ib,$b,$a,X = this,mb = (I = va.events) && !!I.click,
            hb,Mb,Ub,nb,Tb,mc,xb,Ta,Wa,eb,qb,rb,Cb,kb,Eb,Bb,pb = va.showAxes,Fb = 0,sb = [],Qb,ab = [],Qa,xa,kc,Ob,Nb,Pb,gc,Vb,ac,bc,cc,Ac,Ec = function(a) {
            function f(a) {
                var l = a.pageX + Ea.dragOffsetX,a = a.pageY + Ea.dragOffsetY;
                if (l < Ea.movementBoundaryOrigin)l = Ea.movementBoundaryOrigin; else if (l > Ea.movementBoundaryX)l = Ea.movementBoundaryX;
                if (a < Ea.movementBoundaryOrigin)a = Ea.movementBoundaryOrigin; else if (a > Ea.movementBoundaryY)a = Ea.movementBoundaryY;
                Ea.translate(l, a)
            }

            function l(a, f) {
                var b = a.legendItem,A = a.legendLine,x = a.legendSymbol,
                    c = h.color,e = f ? v.itemStyle.color : c,oa = f ? a.color : c,g = a.customSymbol,c = f ? a.pointAttr[V] : {stroke:c,fill:c};
                b && b.css({fill:e});
                A && A.attr({stroke:oa,"stroke-width":2,"stroke-opacity":1});
                x && (x.attr(c),x.attr({r:la(aa / (A ? 4 : 2)),"stroke-width":1,"stroke-opacity":1,"fill-opacity":1}));
                g && g.attr(f ? g.symbolAttr : c)
            }

            function b(a, f, l) {
                var A = a.legendItem,x = a.legendLine,v = a.legendSymbol,c = a.checkbox,e = a.customSymbol,aa = a.legendLabelHeight;
                A && A.align({x:f,y:l,height:aa,verticalAlign:"middle"}, !0, {height:a.legendItemHeight});
                x && x.translate(f, l);
                v && v.attr({x:f + q,y:l + na});
                e && a.customSymbol.translate(f, l);
                if (c)c.x = f,c.y = l
            }

            function A() {
                z(g, function(a) {
                    var f = a.checkbox,l = Ia.alignAttr;
                    f && L(f, {left:l.translateX + a.legendItemWidth + f.x - 40 + B,top:l.translateY + f.y - 11 + B})
                })
            }

            function x(a) {
                var f,A,c,g = a.legendItem,d = a.series || a;
                f = d.options;
                if (!g) {
                    c = /^(bar|pie|area|column|column3d|bar3d|floatedcolumn|radar)$/.test(d.type);
                    a.legendItem = g = xa.text(v.labelFormatter.call(a), 0, 0).css(a.visible ? n : h).on("mouseover",
                        function() {
                            a.setState(M);
                            g.css(Aa)
                        }).on("mouseout",
                        function() {
                            g.css(a.visible ? n : h);
                            a.setState()
                        }).on("click",
                        function() {
                            var f = function() {
                                a.setVisible(void 0, !1)
                            };
                            if (Ia.dragActive)return delete Ia.dragActive,!1;
                            a.firePointEvent ? a.firePointEvent("legendItemClick", null, f) : pa(a, "legendItemClick", null, f)
                        }).attr({zIndex:2}).add(Ia);
                    if (!c && f && f.lineWidth) {
                        var qa = {"stroke-width":f.lineWidth,zIndex:2};
                        if (f.dashStyle)qa.dashstyle = f.dashStyle;
                        a.legendLine = xa.path([o,t,na,T,t + aa,na]).attr(qa).add(Ia)
                    }
                    c ? (c = P(t, w, aa, aa, d.type, a, xa),a.customSymbol = xa.path(c.path).attr({"stroke-width":c.strokeWidth,
                        zIndex:3}).add(Ia),a.customSymbol.symbolAttr = {stroke:c.strokeColor,fill:c.color}) : f && f.marker && f.marker.enabled && (A = xa.symbol(a.symbol, q, na, aa / 2).attr({zIndex:3}).add(Ia));
                    a.legendSymbol = A;
                    l(a, a.visible);
                    if (A = A || a.customSymbol)A.css(v.symbolStyle).on("click", function() {
                        pa(g.element, "click")
                    });
                    if (f && f.showCheckbox)a.checkbox = C("input", {type:"checkbox",checked:a.selected,defaultChecked:a.selected}, v.itemCheckboxStyle, Sa),ea(a.checkbox, "click", function(f) {
                        pa(a, "checkboxClick", {checked:f.target.checked},
                            function() {
                                a.select()
                            })
                    })
                }
                f = g.getBBox();
                A = a.legendItemWidth = v.itemWidth || aa + oa + f.width + j;
                N = a.legendItemHeight = za(f.height, ub);
                a.legendLabelHeight = f.height;
                a.symbolSize = aa;
                a.lineHeight = ub;
                if (e)if (ub && Gb) {
                    for (; E[tb] === !0;)tb += 1;
                    I = ib(tb / Gb);
                    Sb = tb % Gb;
                    I > va && (wa += ub * (I - va),va = I);
                    R = O + Sb * A;
                    E[tb] = !0;
                    K = N / ub;
                    F = tb;
                    for (X = 0; X < K; X += 1,F += Gb)E[F] = !0
                } else if (R - O + A > (W || bb - 2 * ga - O))R = O,wa += N;
                J = wa;
                b(a, R, wa);
                e ? R += A : wa += N;
                ua = W || za(e ? R - O : A, ua)
            }

            function c() {
                var l = Z * 0.5;
                R = O;
                wa = r;
                J = ua = 0;
                if (!Ia) {
                    var b,aa,oa;
                    lb && lb.enabled ? (Ea =
                        xa.g("legend-box").attr({zIndex:10}).add(),b = qa + l,aa = cb = W - lb.scrollBarWidth - lb.scrollBarPadding,oa = D - qa - Z,b = xa.clipRect(0, b, aa, oa),Rb = xa.g("legend-container").attr({zIndex:1}).clip(b).add(Ea),Ia = xa.g("legend").add(Rb),xa.scroller(aa + qa - l, l, 10, oa + 1, !1, !1, !1, Ea).attr({zIndex:3,fill:v.legendScrollBgColor}).setScrollRatio((oa + ga) / v.totalHeight).callback(
                        function(a) {
                            Ia.translate(0, (oa - v.totalHeight) * a)
                        }).add(Ea)) : Rb = Ea = Ia = xa.g("legend").attr({zIndex:10}).add();
                    v.legendAllowDrag && (Ea.css({cursor:"move"}),
                        ea(Ea.element, "dragstart dragend", function(a) {
                            Ea.movementBoundaryOrigin = Z || 0;
                            Ea.movementBoundaryX = bb - W - Ea.movementBoundaryOrigin;
                            Ea.movementBoundaryY = Ra - D - Ea.movementBoundaryOrigin;
                            Ea.dragOffsetX = Ea.attr("translateX") - a.pageX;
                            Ea.dragOffsetY = Ea.attr("translateY") - a.pageY;
                            Ea.dragActive = !0;
                            Ub && Ub.block(a.type === "dragstart")
                        }),ea(Ea.element, "drag", f))
                }
                v.title && v.title.text !== ca && (p = xa.text(v.title.text, 0, 0).css(v.title.style).attr({zIndex:2,align:"center"}).add(Ia),l = p.getBBox(),p.align({align:"center",
                    verticalAlign:"top",y:wa}, !1, {x:0,y:0,width:cb,height:l.height}),wa += (l.height || 0) + s);
                g = [];
                z(La, function(a) {
                    var f = a.options;
                    f.showInLegend && (f.legendType === "point" ? z(a.data, function(a) {
                        a.showInLegend && (g = g.concat(a))
                    }) : g = g.concat(a))
                });
                g.sort(function(a, f) {
                    return(a.options.legendIndex || 0) - (f.options.legendIndex || 0)
                });
                ma && g.reverse();
                z(g, x);
                kb = W || ua;
                Eb = J - r + N;
                if (Z || G)zb ? kb > 0 && Eb > 0 && zb.animate(zb.crisp(null, null, null, kb, D)) : zb = xa.rect(0, 0, kb, D, v.borderRadius, Z || 0).attr({stroke:v.borderColor,"stroke-width":Z ||
                    0,fill:G || ba}).add(Ea).shadow(v.shadow, void 0, v.shadow),zb[g.length ? "show" : "hide"]();
                l = ["left","right","top","bottom"];
                for (b = 4; b--;)aa = l[b],d[aa] && d[aa] !== "auto" && (v[b < 2 ? "align" : "verticalAlign"] = aa,v[b < 2 ? "x" : "y"] = k(d[aa]) * (b % 2 ? -1 : 1));
                if (!e)v.y = (a.options.chart.marginTop - a.options.chart.marginBottom) / 2;
                Ea.align(u(v, {width:kb,height:D}), !0, Y);
                Fb || A()
            }

            var v = a.options.legend;
            if (v.enabled) {
                var e = v.layout === "horizontal",aa = v.symbolWidth,oa = v.symbolPadding,g,d = v.style,n = v.itemStyle,Aa = v.itemHoverStyle,h =
                    v.itemHiddenStyle,ga = v.padding || 4,qa = ga * 0.5,j = 20,m = k(n.fontSize) || 10,r = m + ga,s = v.title.padding,y = v.textPadding,O = y + ga + aa + 2 * oa + v.initialItemX,lb = v.scroll,p,t = -y - oa - aa,w = -m + oa,q = -y - oa - aa / 2,na = -m + oa + aa / 2,Rb,Ea,E = [],tb = 0,va = 0,ub = v.rowHeight,Gb = v.legendNumColumns,I,Sb,K,F,X,D = v.height,R,wa,J,N = 0,zb,Z = v.borderWidth,G = v.backgroundColor,Ia,ua,W = v.width,cb = W,La = a.series,ma = v.reversed;
                c();
                ea(a, "endResize", A);
                return{colorizeItem:l,destroyItem:function(a) {
                    var f = a.checkbox;
                    z(["legendItem","legendLine","legendSymbol"],
                        function(f) {
                            a[f] && a[f].destroy()
                        });
                    f && Na(a.checkbox)
                },renderLegend:c}
            }
        };
        Mb = function(a, f) {
            return a >= 0 && a <= Wa && f >= 0 && f <= Ta
        };
        Ac = function() {
            pa(X, "selection", {resetSelection:!0}, cc);
            X.toolbar.remove("zoom")
        };
        cc = function(a) {
            var f = Va.lang,l = X.pointCount < 100;
            X.toolbar.add("zoom", f.resetZoom, f.resetZoomTitle, Ac);
            !a || a.resetSelection ? z(sb, function(a) {
                a.setExtremes(null, null, !1, l)
            }) : z(a.xAxis.concat(a.yAxis), function(a) {
                var f = a.axis;
                X.tracker[f.isXAxis ? "zoomX" : "zoomY"] && f.setExtremes(a.min, a.max, !1, l)
            });
            n()
        };
        gc = function() {
            var f = a.legend,l = p(f.margin, 10),b = f.x,A = f.y,x = f.align,v = f.verticalAlign,c;
            Vb();
            if ((X.title || X.subtitle) && !t(ub))(c = za(X.title && !Ga.floating && !Ga.verticalAlign && Ga.y || 0, X.subtitle && !Kb.floating && !Kb.verticalAlign && Kb.y || 0)) && (Ja = za(Ja, c + p(Ga.margin, 15) + Zb));
            f.enabled && !f.floating && (x === "right" ? t(zb) || (db = za(db, kb - b + l + S)) : x === "left" ? t(ma) || (Fa = za(Fa, kb + b + l + ka)) : v === "top" ? t(ub) || (Ja = za(Ja, Eb + A + l + Zb)) : v === "bottom" && (t(K) || (Ab = za(Ab, Eb - A + l + La))));
            pb && z(sb, function(a) {
                a.getOffset()
            });
            t(ma) ||
            (Fa += ta[3]);
            t(ub) || (Ja += ta[0]);
            t(K) || (Ab += ta[2]);
            t(zb) || (db += ta[1]);
            ac()
        };
        bc = function(a, f, l) {
            var b = X.title,A = X.subtitle;
            Fb += 1;
            ya(l, X);
            Ma = Ra;
            Ka = bb;
            X.chartWidth = bb = G(a);
            X.chartHeight = Ra = G(f);
            L(Sa, {width:bb + B,height:Ra + B});
            xa.setSize(bb, Ra, l);
            Wa = bb - Fa - db;
            Ta = Ra - Ja - Ab;
            Qb = null;
            z(sb, function(a) {
                a.isDirty = !0;
                a.setScale()
            });
            z(ab, function(a) {
                a.isDirty = !0
            });
            X.isDirtyLegend = !0;
            X.isDirtyBox = !0;
            gc();
            b && b.align(null, null, Y);
            A && A.align(null, null, Y);
            n(l);
            Ma = null;
            pa(X, "resize");
            setTimeout(function() {
                pa(X, "endResize",
                    null, function() {
                        Fb -= 1
                    })
            }, g && g.duration || 500)
        };
        ac = function() {
            X.plotLeft = Fa = G(Fa);
            X.plotTop = Ja = G(Ja);
            X.plotWidth = Wa = G(bb - Fa - db);
            X.plotHeight = Ta = G(Ra - Ja - Ab);
            X.plotSizeX = Qa ? Ta : Wa;
            X.plotSizeY = Qa ? Wa : Ta;
            Y = {x:ka,y:Zb,width:bb - ka - S,height:Ra - Zb - La}
        };
        Vb = function() {
            Ja = p(ub, Zb);
            db = p(zb, S);
            Ab = p(K, La);
            Fa = p(ma, ka);
            ta = [0,0,0,0]
        };
        Pb = function() {
            var a = va.borderWidth || 0,f = va.backgroundColor,l = va.plotBackgroundColor,b = va.plotBackgroundImage,A = va.bgSWF,x = va.bgSWFAlpha / 100,v = va.bgImageDisplayMode,c = va.bgImageVAlign,e = va.bgImageHAlign,
                aa = va.bgImageScale,oa = va.logoURL,g = va.logoAlpha / 100,d = va.logoPosition,n = va.logoLink,h = va.logoScale,Aa = va.logoLeftMargin,o = va.logoTopMargin,ga,qa = {x:Fa,y:Ja,width:Wa,height:Ta};
            ga = a + (va.shadow ? 8 : 0);
            if (a || f)rc ? rc.animate(rc.crisp(null, null, null, bb - ga, Ra - ga)) : rc = xa.rect(ga / 2, ga / 2, bb - ga, Ra - ga, va.borderRadius, a).attr({stroke:va.borderColor,"stroke-width":a,fill:f || ba}).add().shadow(va.shadow);
            f = xa.clipRect(a, a, bb - a * 2, Ra - a * 2);
            if (A && !lc) {
                var m = new Image,j,s = 1,y = 1,lb,p;
                Ua || (Ua = xa.g("group").attr({visibility:na}).clip(f).add());
                m.onload = function() {
                    j = fb(v, c, e, aa, a, bb, Ra, m);
                    lc = [];
                    if (j.tileInfo) {
                        s = j.tileInfo.xCount;
                        y = lb = j.tileInfo.yCount;
                        p = j.y;
                        for (delete j.tileInfo; s; lb -= 1) {
                            if (lb == 0)lb = y,s -= 1,j.x += j.width,j.y = p;
                            lc[void 0] = xa.image(A).attr(j).css({opacity:x}).add(Ua.attr({visibility:O}));
                            j.y += j.height
                        }
                    } else lc[0] = xa.image(A).attr(j).css({opacity:x}).add(Ua.attr({visibility:O}))
                };
                m.src = A
            }
            l && (Ya ? Ya.animate(qa) : Ya = xa.rect(Fa, Ja, Wa, Ta, F(va.plotBorderRadius, 0)).attr({fill:l}).add().shadow(va.plotShadow, void 0, va.plotShadow));
            b &&
            (Pa ? Pa.animate(qa) : Pa = xa.image(b, Fa, Ja, Wa, Ta).add());
            if (va.plotBorderWidth)l = va.plotBorderWidth,b = l * 0.5,b = {x:Fa - b,y:Ja - b,width:Wa + l,height:Ta + l,r:F(va.plotBorderRadius, 0)},$a ? $a.animate($a.crisp(null, b.x, b.y, b.width, b.height)) : $a = xa.rect(b.x, b.y, b.width, b.height, b.r, l).attr({stroke:va.plotBorderColor,"stroke-width":l,"stroke-linejoin":"round",zIndex:2}).add();
            if (oa && !Ib) {
                var k = new Image,B,t,w,T;
                switch (d) {
                    case "tr":
                        t = Xa;
                        w = Za;
                        break;
                    case "bl":
                        t = vb;
                        w = q;
                        break;
                    case "br":
                        t = vb;
                        w = Za;
                        break;
                    case "cc":
                        w = t = wb;
                        break;
                    default:
                        t = Xa,w = q
                }
                $b || ($b = xa.g("group").attr({visibility:na,zIndex:7}).clip(f).add());
                n && (T = xa.rect(0, 0, 1, 1, 0).attr({isTracker:!0,stroke:r,fill:r,"stroke-width":0,visibility:O,zIndex:10}).css({cursor:"pointer",_cursor:"hand"}).on("mouseover",
                    function() {
                        X.tooltip && X.tooltip.hide()
                    }).on("click",
                    function() {
                        va.events.click.call({link:n})
                    }).add());
                k.onload = function() {
                    B = fb("none", t, w, h, a, bb, Ra, k);
                    Ib = xa.image(oa).attr(B).translate(Aa, o).css({opacity:g}).add($b.attr({visibility:O}));
                    if (n)B.r = 0,T.attr(B)
                };
                k.src = oa
            }
            X.isDirtyBox = !1
        };
        ea(gb, "unload", Gb);
        va.reflow !== !1 && ea(X, "load", Rb);
        if (I)for (hb in I)ea(X, hb, I[hb]);
        X.options = a;
        X.series = ab;
        X.addSeries = function(a, f, l) {
            var b;
            a && (ya(l, X),f = p(f, !0),pa(X, "addSeries", {options:a}, function() {
                b = aa(a);
                b.isDirty = !0;
                X.isDirtyLegend = !0;
                f && X.redraw()
            }));
            return b
        };
        X.animation = p(va.animation, !0);
        X.destroy = Gb;
        X.get = function(a) {
            var f,l,b;
            for (f = 0; f < sb.length; f++)if (sb[f].options.id === a)return sb[f];
            for (f = 0; f < ab.length; f++)if (ab[f].options.id === a)return ab[f];
            for (f = 0; f < ab.length; f++) {
                b =
                    ab[f].data;
                for (l = 0; l < b.length; l++)if (b[l].id === a)return b[l]
            }
            return null
        };
        X.getSelectedPoints = function() {
            var a = [];
            z(ab, function(f) {
                a = a.concat(R(f.data, function(a) {
                    return a.selected
                }))
            });
            return a
        };
        X.getSelectedSeries = function() {
            return R(ab, function(a) {
                return a.selected
            })
        };
        X.hideLoading = function() {
            ja(Tb, {opacity:0}, {duration:a.loading.hideDuration,complete:function() {
                L(Tb, {display:ba})
            }});
            xb = !1
        };
        X.isInsidePlot = Mb;
        X.redraw = n;
        X.setSize = bc;
        X.setTitle = qa;
        X.showLoading = function(f) {
            var l = a.loading,b = l.labelStyle;
            Tb || (Tb = C(h, {className:"highcharts-loading"}, u(l.style, {left:0,top:0,width:bb + B,height:Ra + B,zIndex:22,display:ba}), Sa),u(b, {top:Ra / 2 - 3 + B}),mc = C("span", null, b, Tb));
            mc.innerHTML = f || a.lang.loading;
            xb || (L(Tb, {opacity:0,display:""}),ja(Tb, {opacity:l.style.opacity}, {duration:l.showDuration}),xb = !0)
        };
        X.pointCount = 0;
        X.counters = new da;
        Sb()
    }

    function Eb(a, f, l, b, x, c) {
        var e = U.atan((f - b) / (a - l)),v = [];
        e < 0 && (e = 2 * U.PI + e);
        if (b > f) {
            if (l >= a && e > U.PI || l < a && e > U.PI)e -= U.PI
        } else if (l >= a && e < U.PI && e != 0 || l < a && e < U.PI)e += U.PI;
        typeof c ==
            "undefined" ? (l = a + x * Ca(e),x = f + x * Ma(e)) : (x = ra(x) / 2,c = ra(c) / 2,l = a + (x = a < l ? x : -x),x = f + x * U.tan(e),ra(f - x) > ra(c) && (x = f + (c = f < b ? c : -c),l = a + c / U.tan(e)));
        v.push(o);
        v.push(l + 10 * Ca(e + 0.79));
        v.push(x + 10 * Ma(e + 0.79));
        v.push(T);
        v.push(l);
        v.push(x);
        v.push(l + 10 * Ca(e - 0.79));
        v.push(x + 10 * Ma(e - 0.79));
        return v
    }

    var S = FusionCharts(["private","modules.renderer.highcharts-src"]);
    if (S !== void 0) {
        var S = S.hcLib,D = S.pluck,F = S.pluckNumber,Ua = S.graphics.getDarkColor,eb = S.graphics.getLightColor,hb = S.graphics.convertColor,Pa = S.graphics.getAngle,
            kb = S.regex.dropHash,Ka = S.regex.startsRGBA,rb = S.regex.hexcode,ta = S.HASHSTRING,ca = S.BLANKSTRING,qb = S.SmartLabelManager,fb = S.setImageDisplayMode,Xa = S.POSITION_TOP,Za = S.POSITION_RIGHT,vb = S.POSITION_BOTTOM,q = S.POSITION_LEFT,wb = S.POSITION_MIDDLE,$ = S.COLOR_TRANSPARENT,$a = S.getFirstColor,Y = S.COMMASTRING,Nb = {column3d:function(a, f) {
            var l,b,x = 0,c,e,v,g = [];
            l = 0;
            for (b = a.length; l < b; l += 1)x = za(a[l].data.length, x);
            if (x > 0) {
                e = a[0];
                f = e.chart;
                e.initGroup();
                v = f.column3DStacked = D(e.options.stacking, f.options.plotOptions.column3d &&
                    f.options.plotOptions.column3d.stacking, f.options.plotOptions.series.stacking) !== void 0 ? !0 : !1;
                for (l = 0; l < x; l += 1) {
                    c = 0;
                    for (b = a.length; c < b; c += 1)e = a[c],(e = e.data[l]) && e.y !== null && (e.y <= 0 && v ? g.push(c) : a[c].drawNthPoint(l));
                    if (v)for (b = g.length - 1; b >= 0; b -= 1)a[g.pop()].drawNthPoint(l)
                }
                c = 0;
                for (b = a.length; c < b; c += 1)a[c].render()
            }
        },bar3d:function(a, f) {
            var l,b,x = 0,c,e,v = [];
            l = 0;
            for (b = a.length; l < b; l += 1)x = za(a[l].data.length, x);
            if (x > 0) {
                c = a[0];
                f = c.chart;
                c.initGroup();
                e = f.column3DStacked = D(c.options.stacking, f.options.plotOptions.column3d &&
                    f.options.plotOptions.column3d.stacking, f.options.plotOptions.series.stacking) !== void 0 ? !0 : !1;
                for (l = x - 1; l >= 0; l -= 1) {
                    x = 0;
                    for (b = a.length; x < b; x += 1)c = a[x],(c = c.data[l]) && c.y !== null && (c.y <= 0 && e ? v.push(x) : a[x].drawNthPoint(l));
                    if (e)for (b = v.length - 1; b >= 0; b -= 1)a[v.pop()].drawNthPoint(l)
                }
                x = 0;
                for (b = a.length; x < b; x += 1)a[x].render()
            }
        },common:function() {
        }},cc = {column3d:!0,bar3d:!0,area3d:!0,line3d:!0},sc = function(a, f, l) {
            var b = 0,x = 0,c = 0,e = 0,v = 0,g,d = a.xDepth,n = a.yDepth,h = a.options.chart.series2D3Dshift,o = 0,j = 0;
            if (f.column3d)b =
                f.column3d.length;
            if (f.bar3d)e = f.bar3d.length;
            if (f.area3d)x = f.area3d.length;
            if (f.line3d)c = f.line3d.length;
            v = l ? (b ? 1 : 0) + (e ? 1 : 0) + (x ? 1 : 0) + (c ? 1 : 0) : (b ? 1 : 0) + (e ? 1 : 0) + x + c;
            a.num3dSeriesType = v;
            j = o = 0;
            b = n / v;
            d /= v;
            for (g in f)if (cc[g]) {
                x = f[g];
                c = g === "column3d" || g === "bar3d" || l ? !1 : !0;
                o += d;
                j += b;
                v = 0;
                for (e = x.length; v < e; v += 1)n = x[v],n.depthXDisplacement = -o,n.depthYDisplacement = j,c ? (o += n.xDepth = d,j += n.yDepth = b) : (n.xDepth = d,n.yDepth = b);
                v = Nb[g] ? Nb[g] : Nb.common;
                v(x, a);
                delete f[g]
            }
            for (g in f) {
                b = a.plotLeft - o;
                d = h ? a.plotTop + j : a.plotTop;
                v = 0;
                for (l = f[g].length; v < l; v += 1)f[g][v].options.zIndex = 4,f[g][v].render(),f[g][v].group.translate(b, d)
            }
        },Ba = document,gb = window,U = Math,G = U.round,ib = U.floor,la = U.ceil,za = U.max,jb = U.min,ra = U.abs,Ca = U.cos,Ma = U.sin,nb = U.PI,Bb = nb * 2 / 360,ac = U.atan2,bc = nb / 2,Vb = nb * 1.5,Ob = nb * 2,Cb = navigator.userAgent,Lb = /msie/i.test(Cb) && !gb.opera,pb = Ba.documentMode === 8,hc = /AppleWebKit/.test(Cb),nc = /Firefox/.test(Cb),Jb = !!Ba.createElementNS && !!Ba.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect,Xb,Ha = Ba.documentElement.ontouchstart !==
            void 0,Pb = {},Wb = 0,Db = 1,Fb,Va,c,g,n,e,h = "div",y = "absolute",m = "relative",na = "hidden",s = "highcharts-",O = "visible",B = "px",ba = "none",o = "M",T = "L",r = "rgba(192,192,192," + (Jb ? 1.0E-6 : 0.0020) + ")",V = "",M = "hover",wa,E,ic,Ia,oc,ua,N,Z,W,tc,vc,wc,K = gb.HighchartsAdapter,db = K || {},z = db.each,R = db.grep,dc = db.map,ha = db.merge,ea = db.addEvent,yb = db.removeEvent,pa = db.fireEvent,ja = db.animate,ia = db.stop,fa = {};
        c = function(a, f, l) {
            function b(a) {
                return a.toString().replace(/^([0-9])$/, "0$1")
            }

            if (!t(f) || isNaN(f))return"Invalid date";
            var a = p(a, "%Y-%m-%d %H:%M:%S"),f = new Date(f * Db),x,c = f[ic](),e = f[Ia](),v = f[oc](),g = f[ua](),d = f[N](),n = Va.lang,h = n.weekdays,n = n.months,f = {a:h[e].substr(0, 3),A:h[e],d:b(v),e:v,b:n[g].substr(0, 3),B:n[g],m:b(g + 1),y:d.toString().substr(2, 2),Y:d,H:b(c),I:b(c % 12 || 12),l:c % 12 || 12,M:b(f[E]()),p:c < 12 ? "AM" : "PM",P:c < 12 ? "am" : "pm",S:b(f.getSeconds())};
            for (x in f)a = a.replace("%" + x, f[x]);
            return l ? a.substr(0, 1).toUpperCase() + a.substr(1) : a
        };
        da.prototype = {wrapColor:function(a) {
            if (this.color >= a)this.color = 0
        },wrapSymbol:function(a) {
            if (this.symbol >=
                a)this.symbol = 0
        }};
        K && K.init && K.init();
        if (!K && gb.jQuery) {
            var Ga = jQuery,z = function(a, f) {
                for (var l = 0,b = a.length; l < b; l++)if (f.call(a[l], a[l], l, a) === !1)return l
            },R = Ga.grep,dc = function(a, f) {
                for (var l = [],b = 0,x = a.length; b < x; b++)l[b] = f.call(a[b], a[b], b, a);
                return l
            },ha = function() {
                var a = arguments;
                return Ga.extend(!0, null, a[0], a[1], a[2], a[3])
            },ea = function(a, f, l, b) {
                Ga(a).bind(f, b, l)
            },yb = function(a, f, l) {
                var b = Ba.removeEventListener ? "removeEventListener" : "detachEvent";
                Ba[b] && !a[b] && (a[b] = function() {
                });
                Ga(a).unbind(f,
                    l)
            },pa = function(a, f, l, b) {
                var x = Ga.Event(f),c = "detached" + f;
                u(x, l);
                a[f] && (a[c] = a[f],a[f] = null);
                Ga(a).trigger(x);
                a[c] && (a[f] = a[c],a[c] = null);
                b && !x.isDefaultPrevented() && b(x)
            },ja = function(a, f, l) {
                var b = Ga(a);
                if (f.d)a.toD = f.d,f.d = 1;
                b.stop();
                b.animate(f, l)
            },ia = function(a) {
                Ga(a).stop()
            };
            Ga.extend(Ga.easing, {easeOutQuad:function(a, f, l, b, x) {
                return-b * (f /= x) * (f - 2) + l
            }});
            var ma = jQuery.fx.step._default,Ab = jQuery.fx.prototype.cur;
            Ga.fx.step._default = function(a) {
                var f = a.elem;
                f.attr ? f.attr(a.prop, a.now) : ma.apply(this,
                    arguments)
            };
            Ga.fx.step.d = function(a) {
                var f = a.elem;
                if (!a.started) {
                    var l = n.init(f, f.d, f.toD);
                    a.start = l[0];
                    a.end = l[1];
                    a.started = !0
                }
                f.attr("d", n.step(a.start, a.end, a.pos, f.toD))
            };
            Ga.fx.prototype.cur = function() {
                var a = this.elem;
                return a.attr ? a.attr(this.prop) : Ab.apply(this, arguments)
            }
        }
        n = {init:function(a, f, l) {
            var f = f || "",b = a.shift,x = f.indexOf("C") > -1,c = x ? 7 : 3,e,f = f.split(" "),l = [].concat(l),v,g,d = function(a) {
                for (e = a.length; e--;)a[e] === o && a.splice(e + 1, 0, a[e + 1], a[e + 2], a[e + 1], a[e + 2])
            };
            x && (d(f),d(l));
            a.isArea &&
            (v = f.splice(f.length - 6, 6),g = l.splice(l.length - 6, 6));
            if (b)l = [].concat(l).splice(0, c).concat(l),a.shift = !1;
            if (f.length)for (a = l.length; f.length < a;)b = [].concat(f).splice(f.length - c, c),x && (b[c - 6] = b[c - 2],b[c - 5] = b[c - 1]),f = f.concat(b);
            v && (f = f.concat(v),l = l.concat(g));
            return[f,l]
        },step:function(a, f, l, b) {
            var x = [],c = a.length;
            if (l === 1)x = b; else if (c === f.length && l < 1)for (; c--;)b = parseFloat(a[c]),x[c] = isNaN(b) ? a[c] : l * parseFloat(f[c] - b) + b; else x = f;
            return x
        }};
        K = {enabled:!0,align:"center",x:0,y:15,style:{color:"#666",
            fontSize:"11px",lineHeight:"14px"}};
        Va = {colors:["#4572A7","#AA4643","#89A54E","#80699B","#3D96AE","#DB843D","#92A8CD","#A47D7C","#B5CA92"],symbols:["circle","diamond","square","triangle","triangle-down"],lang:{loading:"Loading...",months:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],decimalPoint:".",resetZoom:"Reset zoom",resetZoomTitle:"Reset zoom level 1:1",
            thousandsSep:","},global:{useUTC:!0},chart:{borderColor:"#4572A7",borderRadius:5,defaultSeriesType:"line",ignoreHiddenSeries:!0,spacingTop:10,spacingRight:10,spacingBottom:15,spacingLeft:10,style:{fontFamily:'"Lucida Grande", "Lucida Sans Unicode", Verdana, Arial, Helvetica, sans-serif',fontSize:"12px"},backgroundColor:"#FFFFFF",plotBorderColor:"#C0C0C0"},title:{text:"Chart title",align:"center",y:15,style:{color:"#3E576F",fontSize:"16px"}},subtitle:{text:"",align:"center",y:30,style:{color:"#6D869F"}},
            plotOptions:{line:{allowPointSelect:!1,showCheckbox:!1,animation:{duration:1E3},events:{},lineWidth:2,shadow:!0,marker:{enabled:!0,lineWidth:0,radius:4,lineColor:"#FFFFFF",states:{hover:{},select:{fillColor:"#FFFFFF",lineColor:"#000000",lineWidth:2}}},point:{events:{}},dataLabels:ha(K, {enabled:!1,y:-6,formatter:function() {
                return this.y
            }}),showInLegend:!0,states:{hover:{marker:{}},select:{marker:{}}},stickyTracking:!0}},labels:{style:{position:y,color:"#3E576F"}},legend:{enabled:!0,align:"center",
                layout:"horizontal",labelFormatter:function() {
                    return this.name
                },borderWidth:1,borderColor:"#909090",borderRadius:5,shadow:!1,style:{padding:"5px"},itemStyle:{cursor:"pointer",color:"#3E576F"},itemHoverStyle:{cursor:"pointer"},itemHiddenStyle:{color:"#C0C0C0"},itemCheckboxStyle:{position:y,width:"13px",height:"13px"},symbolWidth:16,symbolPadding:5,verticalAlign:"bottom",x:0,y:0},loading:{hideDuration:100,labelStyle:{position:m,fontFamily:"Verdana",fontSize:"10px",color:"#ffffff"},showDuration:100,
                style:{position:y,backgroundColor:"black",opacity:0.2,textAlign:"center"}},tooltip:{enabled:!0,backgroundColor:"rgba(255, 255, 255, .85)",borderWidth:2,borderRadius:5,shadow:!0,snap:Ha ? 25 : 10,style:{color:"#333333",fontSize:"12px",padding:"5px",whiteSpace:"nowrap"}},toolbar:{itemStyle:{color:"#4572A7",cursor:"pointer"}},credits:{enabled:!0,text:"Highcharts.com",href:"http://www.highcharts.com",position:{align:"right",x:-10,verticalAlign:"bottom",y:-5},style:{cursor:"pointer",color:"#909090",fontSize:"10px"}}};
        var pc = {dateTimeLabelFormats:{second:"%H:%M:%S",minute:"%H:%M",hour:"%H:%M",day:"%e. %b",week:"%e. %b",month:"%b '%y",year:"%Y"},endOnTick:!1,gridLineColor:"#C0C0C0",labels:K,lineColor:"#C0D0E0",lineWidth:1,max:null,min:null,minPadding:0.01,maxPadding:0.01,minorGridLineColor:"#E0E0E0",minorGridLineWidth:1,minorTickColor:"#A0A0A0",minorTickLength:2,minorTickPosition:"outside",startOfWeek:1,startOnTick:!1,tickColor:"#C0D0E0",tickLength:5,tickmarkPlacement:"between",tickPixelInterval:100,tickPosition:"outside",
            tickWidth:1,title:{align:"middle",style:{color:"#6D869F",fontWeight:"bold"}},type:"linear"},uc = ha(pc, {endOnTick:!0,gridLineWidth:1,tickPixelInterval:72,showLastLabel:!0,labels:{align:"right",x:-8,y:3},lineWidth:0,maxPadding:0.05,minPadding:0.05,startOnTick:!0,tickWidth:0,title:{rotation:270,text:"Y-values"},stackLabels:{enabled:!1,formatter:function() {
            return this.total
        },style:K.style}}),Dc = {labels:{align:"right",x:-8,y:null},title:{rotation:270}},Cc = {labels:{align:"left",x:8,y:null},title:{rotation:90}},
            xc = {labels:{align:"center",x:0,y:14},title:{rotation:0}},Bc = ha(xc, {labels:{y:-5}}),Da = Va.plotOptions,K = Da.line;
        Da.spline = ha(K);
        Da.scatter = ha(K, {lineWidth:0,states:{hover:{lineWidth:0}}});
        Da.area = ha(K, {});
        Da.areaspline = ha(Da.area);
        Da.column = ha(K, {borderColor:"#FFFFFF",borderWidth:1,borderRadius:0,groupPadding:0.2,marker:null,pointPadding:0.1,minPointLength:0,states:{hover:{brightness:0.1,shadow:!1},select:{color:"#C0C0C0",borderColor:"#000000",shadow:!1}},dataLabels:{y:null,verticalAlign:null}});
        Da.bar =
            ha(Da.column, {dataLabels:{align:"left",x:5,y:0}});
        Da.pie = ha(K, {borderColor:"#FFFFFF",borderWidth:1,center:["50%","50%"],colorByPoint:!0,dataLabels:{distance:30,enabled:!0,formatter:function() {
            return this.point.name
        },y:5},legendType:"point",marker:null,size:"75%",showInLegend:!1,slicedOffset:10,states:{hover:{brightness:0.1,shadow:!1}}});
        ka();
        var Ib = function(a) {
            var f = [],l;
            (function(a) {
                (l = /rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]?(?:\.[0-9]+)?)\s*\)/.exec(a)) ? f = [k(l[1]),
                    k(l[2]),k(l[3]),parseFloat(l[4], 10)] : (l = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(a)) && (f = [k(l[1], 16),k(l[2], 16),k(l[3], 16),1])
            })(a);
            return{get:function(l) {
                return f && !isNaN(f[0]) ? l === "rgb" ? "rgb(" + f[0] + "," + f[1] + "," + f[2] + ")" : l === "hex" ? "#" + ("000000" + (f[0] << 16 | f[1] << 8 | f[2]).toString(16)).slice(-6) : l === "a" ? f[3] : "rgba(" + f.join(",") + ")" : a
            },brighten:function(a) {
                if (mb(a) && a !== 0) {
                    var l;
                    for (l = 0; l < 3; l++)f[l] += k(a * 255),f[l] < 0 && (f[l] = 0),f[l] > 255 && (f[l] = 255)
                }
                return this
            },setOpacity:function(a) {
                f[3] =
                    a;
                return this
            }}
        };
        xb.prototype = {init:function(a, f) {
            this.element = Ba.createElementNS("http://www.w3.org/2000/svg", f);
            this.renderer = a
        },animate:function(a, f, l) {
            if (f = p(f, g, !0)) {
                f = ha(f);
                if (l)f.complete = l;
                ja(this, a, f)
            } else this.attr(a),l && l()
        },attr:function(a, f) {
            var l,A,x,c,e,v = this.element,g = v.nodeName,d = this.renderer,n,h = this.shadows,o,j = this;
            Q(a) && t(f) && (l = a,a = {},a[l] = f);
            if (Q(a))l = a,g === "circle" ? l = {x:"cx",y:"cy"}[l] || l : l === "strokeWidth" && (l = "stroke-width"),j = b(v, l) || this[l] || 0,l !== "d" && l !== "visibility" &&
                (j = parseFloat(j)); else for (l in a) {
                n = !1;
                A = a[l];
                if (l === "d")A && A.join && (A = A.join(" ")),/(NaN| {2}|^$)/.test(A) && (A = "M 0 0"),this.d = A; else if (l === "x" && g === "text") {
                    for (x = 0; x < v.childNodes.length; x++)c = v.childNodes[x],b(c, "x") === b(v, "x") && b(c, "x", A);
                    this.rotation && b(v, "transform", "rotate(" + this.rotation + " " + A + " " + k(a.y || b(v, "y")) + ")")
                } else if (l === "fill")A = d.color(A, v, l); else if (g === "circle" && (l === "x" || l === "y"))l = {x:"cx",y:"cy"}[l] || l; else if (l === "translateX" || l === "translateY" || l === "rotation" || l === "verticalAlign")this[l] =
                    A,this.updateTransform(),n = !0; else if (l === "stroke")A = d.color(A, v, l); else if (l === "dashstyle")if (l = "stroke-dasharray",A = A && A.toLowerCase(),A === "solid")A = ba; else {
                    if (A) {
                        A = A.replace("shortdashdotdot", "3,1,1,1,1,1,").replace("shortdashdot", "3,1,1,1").replace("shortdot", "1,1,").replace("shortdash", "3,1,").replace("longdash", "8,3,").replace(/dot/g, "1,3,").replace("dash", "4,3,").replace(/,$/, "").split(",");
                        for (x = A.length; x--;)A[x] = parseFloat(A[x]) * a["stroke-width"];
                        A = A.join(",")
                    }
                } else l === "isTracker" ? this[l] =
                    A : l === "width" ? A = k(A) : l === "align" && (l = "text-anchor",A = {left:"start",center:"middle",right:"end"}[A]);
                l === "strokeWidth" && (l = "stroke-width");
                hc && l === "stroke-width" && A === 0 && (A = 1.0E-6);
                this.symbolName && /^(x|y|r|start|end|innerR)/.test(l) && (o || (this.symbolAttr(a),o = !0),n = !0);
                if (h && (l === "opacity" || l === "stroke-opacity")) {
                    e = 0.06 * A;
                    x = 0;
                    for (c = h.length; x < c;)b(h[x], l, (x += 1) * e)
                }
                if (h && /^(width|height|visibility|x|y|d)$/.test(l))for (x = h.length; x--;)b(h[x], l, A);
                if ((l === "width" || l === "height") && g === "rect" && A < 0)A = 0;
                l === "text" ? (this.textStr = A,this.added && d.buildText(this)) : n || b(v, l, A)
            }
            return j
        },symbolAttr:function(a) {
            var f = this;
            z(["x","y","r","start","end","width","height","innerR"], function(l) {
                f[l] = p(a[l], f[l])
            });
            f.attr({d:f.renderer.symbols[f.symbolName](G(f.x * 2) / 2, G(f.y * 2) / 2, f.r, {start:f.start,end:f.end,width:f.width,height:f.height,innerR:f.innerR})})
        },clip:function(a) {
            return this.attr("clip-path", "url(" + this.renderer.url + "#" + a.id + ")")
        },crisp:function(a, f, l, b, x) {
            var c,e = {},v = {},g,a = a || this.strokeWidth || 0;
            g = a % 2 / 2;
            v.x = ib(f || this.x || 0) + g;
            v.y = ib(l || this.y || 0) + g;
            v.width = ib((b || this.width || 0) - 2 * g);
            v.height = ib((x || this.height || 0) - 2 * g);
            v.strokeWidth = a;
            if (v.width === 0 && b !== 0)v.width = 1;
            for (c in v)this[c] !== v[c] && (this[c] = e[c] = v[c]);
            return e
        },css:function(a) {
            var f = this.element,f = a && a.width && f.nodeName === "text",l,b = "",x = function(a, f) {
                return"-" + f.toLowerCase()
            };
            if (a && a.color)a.fill = a.color;
            this.styles = a = u(this.styles, a);
            if (Lb && !Jb)f && delete a.width,L(this.element, a); else {
                for (l in a)b += l.replace(/([A-Z])/g, x) + ":" +
                    a[l] + ";";
                this.attr({style:b})
            }
            f && this.added && this.renderer.buildText(this);
            return this
        },on:function(a, f) {
            var l = f;
            Ha && a === "click" && (a = "touchstart",l = function(a) {
                a.preventDefault();
                f()
            });
            this.element["on" + a] = l;
            return this
        },translate:function(a, f) {
            return this.attr({translateX:a,translateY:f})
        },invert:function() {
            this.inverted = !0;
            this.updateTransform();
            return this
        },updateTransform:function() {
            var a = this.translateX || 0,f = this.translateY || 0,l = this.inverted,A = this.rotation,x = [];
            l && (a += this.attr("width"),f +=
                this.attr("height"));
            (a || f) && x.push("translate(" + a + "," + f + ")");
            l ? x.push("rotate(90) scale(-1,1)") : A && x.push("rotate(" + A + " " + this.x + " " + this.y + ")");
            x.length && b(this.element, "transform", x.join(" "))
        },toFront:function() {
            var a = this.element;
            a.parentNode.appendChild(a);
            return this
        },align:function(a, f, l) {
            a ? (this.alignOptions = a,this.alignByTranslate = f,l || this.renderer.alignedObjects.push(this)) : (a = this.alignOptions,f = this.alignByTranslate);
            var l = p(l, this.renderer),b = a.align,x = a.verticalAlign,c = (l.x || 0) + (a.x ||
                0),e = (l.y || 0) + (a.y || 0),v = {};
            /^(right|center)$/.test(b) && (c += (l.width - (a.width || 0)) / {right:1,center:2}[b]);
            v[f ? "translateX" : "x"] = G(c);
            /^(bottom|middle)$/.test(x) && (e += (l.height - (a.height || 0)) / ({bottom:1,middle:2}[x] || 1));
            v[f ? "translateY" : "y"] = G(e);
            this[this.placed ? "animate" : "attr"](v);
            this.placed = !0;
            this.alignAttr = v;
            return this
        },getBBox:function() {
            var a,f,l,b = this.rotation,x = b * Bb;
            try {
                a = u({}, this.element.getBBox())
            } catch(c) {
                a = {width:0,height:0}
            }
            f = a.width;
            l = a.height;
            if (b)a.width = ra(l * Ma(x)) + ra(f * Ca(x)),
                a.height = ra(l * Ca(x)) + ra(f * Ma(x));
            return a
        },show:function() {
            return this.attr({visibility:O})
        },hide:function() {
            return this.attr({visibility:na})
        },add:function(a) {
            var f = this.renderer,l = a || f,A = l.element || f.box,x = A.childNodes,c = this.element,e = b(c, "zIndex");
            this.parentInverted = a && a.inverted;
            this.textStr !== void 0 && f.buildText(this);
            if (e)l.handleZ = !0,e = k(e);
            if (l.handleZ)for (l = 0; l < x.length; l++)if (a = x[l],f = b(a, "zIndex"),a !== c && (k(f) > e || !t(e) && t(f)))return A.insertBefore(c, a),this;
            A.appendChild(c);
            this.added =
                !0;
            return this
        },destroy:function() {
            var a = this.element || {},f = this.shadows,l = a.parentNode,b;
            a.onclick = a.onmouseout = a.onmouseover = a.onmousemove = null;
            ia(this);
            l && l.removeChild(a);
            f && z(f, function(a) {
                (l = a.parentNode) && l.removeChild(a)
            });
            d(this.renderer.alignedObjects, this);
            for (b in this)delete this[b];
            return null
        },empty:function() {
            for (var a = this.element,f = a.childNodes,l = f.length; l--;)a.removeChild(f[l])
        },shadow:function(a, f, l) {
            l || (l = {});
            var A = [],x,c = this.element,e = l.color || "rgb(0,0,0)",v = "translate" + (!this.parentInverted !=
                !l.inverted ? "(-1,-1)" : "(1,1)"),g = k(this.attr("stroke-width") || 1, 10) + 6,l = D(l.opacity, 1) * 0.06;
            if (a) {
                for (a = 1; a <= 3; a++)x = c.cloneNode(0),b(x, {isShadow:"true",stroke:e,"stroke-opacity":l * a,"stroke-width":g - 2 * a,transform:v,fill:ba}),f ? f.element.appendChild(x) : c.parentNode.insertBefore(x, c),A.push(x);
                this.shadows = A
            }
            return this
        },textBound:function() {
            var a = this.renderer,f = this.textBoundWrapper,l = this.styles,b,x,c,e;
            if (this.element.nodeName !== "text" || !l || !l.backgroundColor && !l.borderColor || !this.textStr || this.rotation %
                90 !== 0)return this.textBoundWrapper && this.textBoundWrapper.destroy(),this;
            b = this.getBBox();
            c = b.width + 4;
            e = b.height + 4;
            x = b.x;
            b = b.y;
            this.rotation === 270 && (x = this.attr("x") - c / 2 - 2,b = this.attr("y") - e + 4);
            if (!f)f = this.textBoundWrapper = a.rect(0, 0, 0, 0, 0, 1),this.element.parentNode.insertBefore(f.element, this.element);
            f.attr({fill:l.backgroundColor || ba,stroke:l.borderColor || ca,"fill-opacity":D(l.backgroundOpacity, 1),"stroke-opacity":D(l.borderOpacity, 1)});
            f.attr(f.crisp(1, x - 1.5, b - 1.5, c, e))
        }};
        var qc = function() {
            this.init.apply(this,
                arguments)
        };
        qc.prototype = {Element:xb,type:"SVG",init:function(a, f, l, b) {
            var x = location,c;
            c = this.createElement("svg").attr({xmlns:"http://www.w3.org/2000/svg",version:"1.1"});
            a.appendChild(c.element);
            this.box = c.element;
            this.boxWrapper = c;
            this.alignedObjects = [];
            this.url = Lb ? "" : x.href.replace(/#.*?$/, "");
            this.defs = this.createElement("defs").add();
            this.forExport = b;
            this.setSize(f, l, !1)
        },createElement:function(a) {
            var f = new this.Element;
            f.init(this, a);
            return f
        },buildText:function(a) {
            for (var f = a.element,l = p(a.textStr,
                "").toString().replace(/<(b|strong)>/g, '<span style="font-weight:bold">').replace(/<(i|em)>/g, '<span style="font-style:italic">').replace(/<a/g, "<span").replace(/<\/(b|strong|i|em|a)>/g, "</span>").split(/<br.*?>/g),A = f.childNodes,x = /style="([^"]+)"/,c = /href="([^"]+)"/,e = b(f, "x"),v = a.styles,g = nc && v && v.HcDirection === "rtl" && !this.forExport && k(Cb.split("Firefox/")[1]) < 4,d,n = v && k(v.width),h = v && v.lineHeight,o,j = A.length; j--;)f.removeChild(A[j]);
            n && !a.added && this.box.appendChild(f);
            A = /title="([^"]+)"/;
            A.test(l[0]) &&
            b(f, "title", l[0].match(A)[1]);
            z(l, function(l, A) {
                var v,m = 0,r,l = l.replace(/<span/g, "|||<span").replace(/<\/span>/g, "</span>|||");
                v = l.split("|||");
                z(v, function(l) {
                    if (l !== "" || v.length === 1) {
                        var s = {},y = Ba.createElementNS("http://www.w3.org/2000/svg", "tspan");
                        x.test(l) && b(y, "style", l.match(x)[1].replace(/(;| |^)color([ :])/, "$1fill$2"));
                        c.test(l) && (b(y, "onclick", 'location.href="' + l.match(c)[1] + '"'),L(y, {cursor:"pointer"}));
                        l = (l.replace(/<(.|\n)*?>/g, "") || " ").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
                        if (g) {
                            d =
                                [];
                            for (j = l.length; j--;)d.push(l.charAt(j));
                            l = d.join("")
                        }
                        var O = Ba.createTextNode(l);
                        y.appendChild(O);
                        m ? s.dx = 3 : s.x = e;
                        if (!m) {
                            if (A) {
                                !Jb && a.renderer.forExport && L(y, {display:"block"});
                                r = gb.getComputedStyle && k(gb.getComputedStyle(o, null).getPropertyValue("line-height"));
                                if (!r || isNaN(r))r = h || o.offsetHeight || 18;
                                b(y, "dy", r)
                            }
                            o = y
                        }
                        b(y, s);
                        f.appendChild(y);
                        m++;
                        if (n)for (var l = l.replace(/-/g, "- ").split(" "),p = []; l.length || p.length;)O = f.getBBox().width,s = O > n,!s || l.length === 1 ? (l = p,p = [],l.length && (y = Ba.createElementNS("http://www.w3.org/2000/svg",
                            "tspan"),b(y, {dy:h || 16,x:e}),f.appendChild(y),O > n && (n = O))) : (y.removeChild(y.firstChild),p.unshift(l.pop())),l.length && y.appendChild(Ba.createTextNode(l.join(" ").replace(/- /g, "-")))
                    }
                })
            })
        },crispLine:function(a, f) {
            a[1] === a[4] && (a[1] = a[4] = G(a[1]) + f % 2 / 2);
            a[2] === a[5] && (a[2] = a[5] = G(a[2]) + f % 2 / 2);
            return a
        },path:function(a) {
            return this.createElement("path").attr({d:a,fill:ba})
        },circle:function(a, f, l) {
            a = w(a) ? a : {x:a,y:f,r:l};
            return this.createElement("circle").attr(a)
        },arc:function(a, f, l, b, x, c) {
            if (w(a))f = a.y,
                l = a.r,b = a.innerR,x = a.start,c = a.end,a = a.x;
            return this.symbol("arc", a || 0, f || 0, l || 0, {innerR:b || 0,start:x || 0,end:c || 0})
        },rect:function(a, f, l, b, c, e) {
            if (w(a))f = a.y,l = a.width,b = a.height,c = a.r,e = a.strokeWidth,a = a.x;
            c = this.createElement("rect").attr({rx:c,ry:c,fill:ba});
            return c.attr(c.crisp(e, a, f, za(l, 0), za(b, 0)))
        },rect3d:function() {
            var a = {x:{drawTop:!0,drawRight:!0,drawFront:!0,drawShadow:!0},y:{drawTop:!0,drawRight:!0,drawFront:!0,drawShadow:!0},width:{drawTop:!0,drawRight:!0,drawFront:!0,drawShadow:!0},
                height:{drawRight:!0,drawFront:!0,drawShadow:!0},strokeWidth:!0,"stroke-width":!0,stroke:!0,x3D:{drawTop:!0,drawRight:!0,drawShadow:!0},y3D:{drawTop:!0,drawRight:!0,drawShadow:!0},fill:!0},f = function(f, l) {
                var b,c,e,g = this,d,n,h = this._3dAttr;
                Q(f) && t(l) && (b = f,f = {},f[b] = l);
                if (Q(f))g = a[f] ? this._3dAttr[f] : this._attr(f); else for (b in f)if (c = f[b],a[b]) {
                    e = a[b];
                    h[b] = c;
                    if (b === "stroke" || b === "stroke-width" || b === "strokeWidth")this.frontRect.attr(b, c),this.topRect.attr(b, c),this.rightRect.attr(b, c);
                    if (b === "fill")c &&
                        c.linearGradient && c.stops && c.stops[0] && (c = c.stops[0][1]),Ka.test(c) ? (n = Ib(c),d = n.get("hex"),n = n.get("a") * 100) : c && c.FCcolor ? (d = c.FCcolor.color.split(Y)[0],n = c.FCcolor.alpha.split(Y)[0]) : rb.test(c) && (d = c.replace(kb, ta),n = 100),h.color = d,h.alpha = n,h.lighting3D === !1 ? (h.frontColor = hb(h.color, h.alpha),h.rightColor = hb(Ua(h.color, 60), h.alpha),h.topColor = hb(Ua(h.color, 75), h.alpha)) : (h.frontColor = {FCcolor:{color:Ua(h.color, 65) + Y + eb(h.color, 55),alpha:n + Y + n,angle:270}},h.rightColor = {FCcolor:{color:Ua(h.color,
                        35) + Y + Ua(h.color, 75),alpha:n + Y + n,angle:Pa(h.x3D, h.height + h.y3D, 3)}},h.topColor = {FCcolor:{color:Ua(h.color, 85) + Y + eb(h.color, 35),alpha:n + Y + n,angle:Pa(h.width + h.x3D, h.y3D, 4)}}),this.topRect.attr({fill:h.topColor}),this.rightRect.attr({fill:h.rightColor}),this.frontRect.attr({fill:h.frontColor});
                    if (e.drawTop) {
                        if (h.lighting3D !== !1 && h.topColor.FCcolor)h.topColor.FCcolor.angle = Pa(h.width + h.x3D, h.y3D, 4);
                        this.topRect.attr({d:["M",h.x,h.y,"L",h.x + h.width,h.y,h.x + h.width + h.x3D,h.y - h.y3D,h.x + h.x3D,h.y - h.y3D,
                            "Z"],fill:h.topColor})
                    }
                    if (e.drawRight) {
                        if (h.lighting3D !== !1 && h.rightColor.FCcolor)h.rightColor.FCcolor.angle = Pa(h.x3D, h.height + h.y3D, 3);
                        this.rightRect.attr({d:["M",h.x + h.width,h.y,"L",h.x + h.width + h.x3D,h.y - h.y3D,h.x + h.width + h.x3D,h.y - h.y3D + h.height,h.x + h.width,h.y + h.height,"Z"],fill:h.rightRect})
                    }
                    e.drawFront && this.frontRect.attr(b, c);
                    e.drawShadow && this.shadowElement.attr({d:["M",h.x + h.x3D,h.y - h.y3D,"L",h.x + h.x3D + h.width,h.y - h.y3D,h.x + h.x3D + h.width,h.y - h.y3D + h.height]})
                } else this._attr(b, c);
                return g
            },
                l = function() {
                    var a = this.shadowElement;
                    l && a.shadow.apply(a, arguments)
                };
            return function(a, b, c, e, v, g, d, h) {
                if (w(a))b = a.y,c = a.width,e = a.height,a = a.x,d = a.strokeWidth,v = a.x3D,g = a.y3D;
                var v = F(v, 10),g = F(g, 10),n = {x:a,y:b,width:c,height:e,r:0},o = ["M",a,b,"L",a + c,b,a + c + v,b - g,a + v,b - g,"Z"],j = ["M",a + c,b,"L",a + c + v,b - g,a + c + v,b - g + e,a + c,b + e,"Z"],m = ["M",a + v,b - g,"L",a + v + c,b - g,a + v + c,b - g + e],h = this.g(h);
                h.shadowElement = this.path(m).add(h);
                h.frontRect = this.rect(n).attr({"stroke-width":d}).add(h);
                h.topRect = this.path(o).attr({"stroke-width":d}).add(h);
                h.rightRect = this.path(j).attr({"stroke-width":d}).add(h);
                h._attr = h.attr;
                h.attr = f;
                h.shadow = l;
                h._3dAttr = {y:b,width:c,height:e,x:a,strokeWidth:d,x3D:v,y3D:g,lighting3D:this.lighting3D};
                return h
            }
        }(),scroller:function() {
            var a = Ha ? "touchstart" : "mousedown",f = function(a) {
                var f = a.type === "dragend",l = a.data;
                l.dragActive = !f;
                if (f) {
                    if (l.onChange)l.onChange(l.scrollPosition, !1, !0);
                    if (l.onEnd)l.onEnd(l.scrollPosition, !1, !0)
                } else l.dragInitPos = l.scrollPosition,l.dragStartX = a.pageX,l.dragStartY = a.pageY;
                Ha && l.anchor.attr("height",
                    l.anchor.attr("height") * (f ? 0.625 : 1.6))
            },l = function(a) {
                var f = a.data;
                f.group.setScrollPosition(f.dragInitPos + (f.horiz ? a.pageX - f.dragStartX : a.pageY - f.dragStartY) / f.zoneLength)
            },b = function(a, f) {
                if (!arguments.length)return this;
                u(this.config, {onChange:a,onEnd:f});
                return this
            },c = function(a) {
                var f = this.config;
                f.zoneLength = f.trackLength - f.trackLength * (f.scrollRatio = a);
                this.elements.anchor.attr({width:this.config.trackLength * a});
                return this.setScrollPosition()
            },e = function(a, f) {
                var l = this.config,b = l.horiz,
                    c = l.anchor,A = Lb && !Jb && !b;
                t(a) ? (a <= 0 ? a = 0.0010 : a > 1 && (a = 1),l.scrollPosition = a) : a = l.scrollPosition;
                b = (b ? a : 1 - a) * l.zoneLength;
                b === 0 && (b = 0.0010);
                A ? c.translate(void 0, -b) : c.translate(b);
                if (l.onChange)l.onChange(a, f, !1);
                return this
            },g = function(a) {
                var f = this.renderer,l = this.config,b,c,A;
                if (w(a) && "fill"in a) {
                    b = a.fill;
                    c = l.flat;
                    A = !l.horiz && Lb && !Jb ? 180 : 90;
                    var x = {base:b,light:ta + eb(b, 15),dark:ta + Ua(b, c ? 50 : 30)};
                    x.darkFill = c ? x.dark : {FCcolor:{color:x.dark + Y + b,alpha:"100",angle:A}};
                    x.lightFill = c ? x.base : {FCcolor:{color:b +
                        Y + x.light,alpha:"100",angle:A}};
                    b = x;
                    c = {fill:b.dark};
                    A = {fill:b.lightFill};
                    l.buttons && (this.elements.start.attr(A),this.elements.end.attr(A),this.elements.startArrow.attr(c),this.elements.endArrow.attr(c));
                    this.elements.track.attr(A);
                    this.elements.anchor.attr({fill:b.darkFill,stroke:b.dark,"stroke-width":0.2});
                    delete a.fill
                }
                return f.Element.prototype.attr.apply(this, arguments)
            };
            return function(v, d, h, n, j, m, r, y) {
                j || (h += n,n = h - n,h -= n);
                var s = this.g("scroller").attr({translateX:v,translateY:d,width:h,height:n}),
                    v = s.config = {},d = s.elements = {},O,p = !m ? 0 : m.size || n,k = p * 0.25,B = n * 0.25,t = p + (m && m.padding || 0),w = h - 2 * t;
                d.track = this.rect(t, 0, w, n, 0);
                d.anchor = this.rect(t, r ? 0 : B * 0.5, w, r ? n : n - B, r ? 0 : jb(k, B));
                if (m)d.start = this.rect(0, 0, p, n, 0),d.startArrow = this.path([o,k,0,T,0,B,k,B * 2,k,0]).translate(p * 0.4, B),d.end = this.rect(h - p, 0, p, n, 0),d.endArrow = this.path([o,0,0,T,k,B,0,B * 2,0,0]).translate(h - p * 0.6, B);
                j || s.attr({width:n,height:h}).invert();
                for (O in d)d[O].add(s);
                u(v, {group:s,anchor:d.anchor,width:h,horiz:j,flat:r,buttons:!!m,
                    scrollRatio:1,trackOffset:t,trackLength:w,zoneLength:w,scrollPosition:0});
                u(s, {attr:g,setScrollRatio:c,setScrollPosition:e,callback:b});
                ea(d.anchor.element, "dragstart dragend", f, v);
                ea(d.anchor.element, "drag", l, v);
                m && (ea([s.elements.start.element,s.elements.startArrow.element], a, function() {
                    s.setScrollPosition(s.config.scrollPosition - 0.1)
                }, v),ea([s.elements.end.element,s.elements.endArrow.element], a, function() {
                    s.setScrollPosition(s.config.scrollPosition + 0.1)
                }, v));
                y && ea(y.element, "wheelchange", function(a, f) {
                    s.setScrollPosition(s.config.scrollPosition - f * 0.5);
                    a.preventDefault()
                });
                return s
            }
        }(),setSize:function(a, f, l) {
            var b = this.alignedObjects,c = b.length;
            this.width = a;
            this.height = f;
            for (this.boxWrapper[p(l, !0) ? "animate" : "attr"]({width:a,height:f}); c--;)b[c].align()
        },g:function(a) {
            return this.createElement("g").attr(t(a) && {"class":s + a})
        },image:function(a, f, l, b, c) {
            var e = {preserveAspectRatio:ba};
            arguments.length > 1 && u(e, {x:f,y:l,width:b,height:c});
            e = this.createElement("image").attr(e);
            e.element.setAttributeNS ?
                e.element.setAttributeNS("http://www.w3.org/1999/xlink", "href", a) : e.element.setAttribute("hc-svg-href", a);
            return e
        },symbol:function(a, f, l, b, c) {
            var e;
            if (/^poly\_\d+$/.test(a))e = F(parseInt(a.split("_")[1], 10), 3),a = "poly",typeof c !== "object" && (c = {}),c.innerR = e;
            var g;
            e = (e = this.symbols[a]) && e(G(f), G(l), b, c);
            var v = /^url\((.*?)\)$/,d;
            if (e)g = this.path(e),u(g, {symbolName:a,x:f,y:l,r:b}),c && u(g, c); else if (v.test(a)) {
                var h = function(a, f) {
                    a.attr({width:f[0],height:f[1]}).translate(-G(f[0] / 2), -G(f[1] / 2))
                };
                d = a.match(v)[1];
                a = Pb[d];
                g = this.image(d).attr({x:f,y:l});
                a ? h(g, a) : (g.attr({width:0,height:0}),C("img", {onload:function() {
                    h(g, Pb[d] = [this.width,this.height])
                },src:d}))
            } else g = this.circle(f, l, b);
            return g
        },symbols:{poly:function(a, f, l, b) {
            var b = b.innerR,c = 2 * U.PI / b,e,g,v = U.PI / 2;
            if (b > 2) {
                e = [o,a + l * Ca(-v),f + l * Ma(-v),T];
                for (g = 1; g < b; g++)e.push(a + l * Ca(-(v + g * c))),e.push(f + l * Ma(-(v + g * c)));
                e.push("Z")
            } else e = [o,a,f,"Z"];
            return e
        },square:function(a, f, l) {
            l *= 0.707;
            return[o,a - l,f - l,T,a + l,f - l,a + l,f + l,a - l,f + l,"Z"]
        },triangle:function(a, f, l) {
            return[o,a,f - 1.33 * l,T,a + l,f + 0.67 * l,a - l,f + 0.67 * l,"Z"]
        },"triangle-down":function(a, f, l) {
            return[o,a,f + 1.33 * l,T,a - l,f - 0.67 * l,a + l,f - 0.67 * l,"Z"]
        },diamond:function(a, f, l) {
            return[o,a,f - l,T,a + l,f,a,f + l,a - l,f,"Z"]
        },arc:function(a, f, l, b) {
            var c = b.start,e = b.end - 1.0E-6,g = b.innerR,v = Ca(c),d = Ma(c),h = Ca(e),e = Ma(e),b = b.end - c < nb ? 0 : 1;
            return[o,a + l * v,f + l * d,"A",l,l,0,b,1,a + l * h,f + l * e,T,a + g * h,f + g * e,"A",g,g,0,b,0,a + g * v,f + g * d,"Z"]
        }},clipRect:function(a, f, l, b) {
            var c = s + Wb++,e = this.createElement("clipPath").attr({id:c}).add(this.defs),
                a = this.rect(a, f, l, b, 0).add(e);
            a.id = c;
            return a
        },color:function(a, f, l) {
            var c,e = /^rgba/;
            if (a && a.linearGradient) {
                var g = this,l = "linearGradient",d = a[l],f = s + Wb++,v,h,n;
                v = g.createElement(l).attr({id:f,gradientUnits:"userSpaceOnUse",x1:d[0],y1:d[1],x2:d[2],y2:d[3]}).add(g.defs);
                z(a.stops, function(a) {
                    e.test(a[1]) ? (c = Ib(a[1]),h = c.get("rgb"),n = c.get("a")) : (h = a[1],n = 1);
                    g.createElement("stop").attr({offset:a[0],"stop-color":h,"stop-opacity":n}).add(v)
                });
                return"url(" + this.url + "#" + f + ")"
            } else if (a && a.FCcolor) {
                var o =
                    a.FCcolor.element,g = this;
                if (o && o.parentNode && !g.forExport)return a.FCcolor.url;
                var o = D(a.FCcolor.color, "000000"),j = D(a.FCcolor.alpha, "100"),m,r,y = 0,O = 100,p = D(a.FCcolor.ratio, "0");
                m = F(a.FCcolor.angle, "0");
                o = o.replace(/\s+/ig, "").replace(/\,+$/ig, "").split(",");
                j = j.replace(/\s+/ig, "").replace(/\,+$/ig, "").split(",");
                p = p.replace(/\s+/ig, "").replace(/\,+$/ig, "").split(",");
                m %= 360;
                m < 0 && (m = 360 + m);
                if (a.FCcolor.radialGradient) {
                    f = s + Wb++;
                    v = g.createElement("radialGradient").attr({id:f,gradientUnits:D(a.FCcolor.gradientUnits,
                        "userSpaceOnUse"),cx:a.FCcolor.cx,cy:a.FCcolor.cy,r:a.FCcolor.r}).add(g.defs);
                    for (m = 0; m < o.length && y < 100; m += 1)l = o[m].replace(/^#?/, "#"),O = d = F(j[m], O),r = F(p[m], m !== 0 ? (100 - y) / (o.length - m) : 0),y += r,y > 100 && (y = 100),g.createElement("stop").attr({offset:y + "%","stop-color":l,"stop-opacity":d / 100}).add(v);
                    a.FCcolor.element = v.element;
                    a.FCcolor.url = "url(" + this.url + "#" + f + ")";
                    return a.FCcolor.url
                } else if (o.length === 1)return b(f, l + "-opacity", F(j[0], 100) / 100),o[0].replace(/^#?/, "#"); else {
                    var k,B,t,y = 0,l = "linearGradient",
                        d = a[l],f = s + Wb++;
                    r = Math.tan(m * Math.PI / 180);
                    d = Math.round(50 - 50 * r);
                    r = Math.round(50 - 50 / r);
                    r = r < 0 ? 0 : r;
                    r = r > 100 ? 100 : r;
                    d = d < 0 ? 0 : d;
                    d = d > 100 ? 100 : d;
                    k = 100 - r;
                    B = 100 - d;
                    m > 90 && m <= 270 && (t = d,d = B,B = t);
                    m > 180 && m <= 360 && (t = r,r = k,k = t);
                    v = g.createElement(l).attr({id:f,gradientUnits:D(a.FCcolor.gradientUnits, "objectBoundingBox"),x1:r + "%",y1:d + "%",x2:k + "%",y2:B + "%"}).add(g.defs);
                    for (m = 0; m < o.length && y < 100; m += 1)l = o[m].replace(/^#?/, "#"),O = d = F(j[m], O),r = F(p[m], m !== 0 ? (100 - y) / (o.length - m) : 0),y += r,y > 100 && (y = 100),g.createElement("stop").attr({offset:y +
                        "%","stop-color":l,"stop-opacity":d / 100}).add(v);
                    a.FCcolor.element = v.element;
                    a.FCcolor.url = "url(" + this.url + "#" + f + ")";
                    return a.FCcolor.url
                }
            } else return e.test(a) ? (c = Ib(a),b(f, l + "-opacity", c.get("a")),c.get("rgb")) : a
        },text:function(a, f, l) {
            var b = Va.chart.style,f = G(p(f, 0)),l = G(p(l, 0)),a = this.createElement("text").attr({x:f,y:l,text:a}).css({fontFamily:b.fontFamily,fontSize:b.fontSize});
            a.x = f;
            a.y = l;
            return a
        }};
        Xb = qc;
        if (!Jb)db = I(xb, {type:"VML",init:function(a, f) {
            var l = ["<",f,' filled="f" stroked="f"'],b =
                ["position: ",y,";"];
            (f === "shape" || f === h) && b.push("left:0;top:0;width:10px;height:10px;");
            pb && b.push("visibility: ", f === h ? na : O);
            l.push(' style="', b.join(""), '"/>');
            if (f)l = f === h || f === "span" || f === "img" ? l.join("") : a.prepVML(l),this.element = C(l);
            this.renderer = a
        },add:function(a) {
            var f = this.renderer,l = this.element,b = f.box,b = a ? a.element || a : b;
            a && a.inverted && f.invertChild(l, b);
            pb && b.gVis === na && L(l, {visibility:na});
            b.appendChild(l);
            this.added = !0;
            this.alignOnAdd && this.updateTransform();
            return this
        },attr:function(a, f) {
            var l,c,e,g,d,v = this.element || {},h = v.style,n = v.nodeName,o = this.renderer,m = this.symbolName,j,r = this.shadows,y,s = this;
            Q(a) && t(f) && (l = a,a = {},a[l] = f);
            if (Q(a))l = a,s = l === "strokeWidth" || l === "stroke-width" ? this.strokeweight : this[l]; else for (l in a) {
                c = a[l];
                y = !1;
                if (m && /^(x|y|r|start|end|width|height|innerR)/.test(l))j || (this.symbolAttr(a),j = !0),y = !0; else if (l === "d") {
                    c = c || [];
                    this.d = c.join(" ");
                    e = c.length;
                    for (g = []; e--;)g[e] = mb(c[e]) ? G(c[e] * 10) - 5 : c[e] === "Z" ? "x" : c[e];
                    c = g.join(" ") || "x";
                    v.path = c;
                    if (r)for (e = r.length; e--;)r[e].path =
                        c;
                    y = !0
                } else if (l === "zIndex" || l === "visibility") {
                    if (pb && l === "visibility" && n === "DIV") {
                        v.gVis = c;
                        g = v.childNodes;
                        for (e = g.length; e--;)L(g[e], {visibility:c});
                        c === O && (c = null)
                    }
                    c && (h[l] = c);
                    y = !0
                } else if (/^(width|height)$/.test(l))this.updateClipping ? (this[l] = c,this.updateClipping()) : h[l] = c,y = !0; else if (/^(x|y)$/.test(l))this[l] = c,this.updateClipping ? (this[{x:"left",y:"top"}[l]] = c,this.updateClipping()) : v.tagName === "SPAN" ? this.updateTransform() : h[{x:"left",y:"top"}[l]] = c; else if (l === "class")v.className = c; else if (l ===
                    "stroke")c = o.color(c, v, l),l = "strokecolor"; else if (l === "stroke-width" || l === "strokeWidth")v.stroked = c ? !0 : !1,l = "strokeweight",this[l] = c,mb(c) && (c += B); else if (l === "stroke-linecap" || l === "strokeLinecap")this[l] = c,l = "endcap",c = c === "butt" ? "flat" : c || "flat",e = v.getElementsByTagName("stroke")[0] || C(o.prepVML(["<stroke/>"]), null, null, v),e[l] = c,y = !0; else if (l === "dashstyle")e = v.getElementsByTagName("stroke")[0] || C(o.prepVML(["<stroke/>"]), null, null, v),e[l] = c || "solid",this.dashstyle = c,y = !0; else if (l === "fill")n ===
                    "SPAN" ? h.color = c : (v.filled = c !== ba ? !0 : !1,c = o.color(c, v, l),l = "fillcolor"); else if (l === "translateX" || l === "translateY" || l === "rotation" || l === "align")l === "align" && (l = "textAlign"),this[l] = c,this.updateTransform(),y = !0; else if (l === "text")this.bBox = null,v.innerHTML = c,y = !0;
                if (r && l === "visibility")for (e = r.length; e--;)r[e].style[l] = c;
                if (r && (l === "opacity" || l === "stroke-opacity")) {
                    d = 6 * c;
                    e = 0;
                    for (g = r.length; e < g;)b(r[e], l, (e += 1) * d)
                }
                y || (pb ? v[l] = c : b(v, l, c))
            }
            return s
        },clip:function(a) {
            var f = this,l = a.members;
            l.push(f);
            f.destroyClip = function() {
                d(l, f)
            };
            return f.css(a.getCSS(f.inverted))
        },css:function(a) {
            var f = this.element;
            if (f = a && f.tagName === "SPAN" && a.width)delete a.width,this.textWidth = f,this.updateTransform();
            this.styles = u(this.styles, a);
            L(this.element, a);
            return this
        },destroy:function() {
            this.destroyClip && this.destroyClip();
            xb.prototype.destroy.apply(this)
        },empty:function() {
            for (var a = this.element.childNodes,f = a.length,l; f--;)l = a[f],l.parentNode.removeChild(l)
        },getBBox:function() {
            var a = this.element,f = this.bBox;
            if (!f) {
                if (a.nodeName ===
                    "text")a.style.position = y;
                f = this.bBox = {x:a.offsetLeft,y:a.offsetTop,width:a.offsetWidth,height:a.offsetHeight}
            }
            return f
        },on:function(a, f) {
            this.element["on" + a] = function() {
                var a = gb.event;
                a.target = a.srcElement;
                f(a)
            };
            return this
        },updateTransform:function() {
            if (this.added) {
                var a = this,f = a.element,l = a.translateX || 0,b = a.translateY || 0,c = a.x || 0,e = a.y || 0,g = a.textAlign || "left",v = {left:0,center:0.5,right:1}[g],d = g && g !== "left";
                (l || b) && a.css({marginLeft:l,marginTop:b});
                a.inverted && z(f.childNodes, function(b) {
                    a.renderer.invertChild(b,
                        f)
                });
                if (f.tagName === "SPAN") {
                    var h,n,l = a.rotation,o;
                    h = 0;
                    var b = 1,m = 0,j;
                    o = k(a.textWidth);
                    var r = a.xCorr || 0,y = a.yCorr || 0,s = [l,g,f.innerHTML,a.textWidth].join(",");
                    if (s !== a.cTT)t(l) && (h = l * Bb,b = Ca(h),m = Ma(h),L(f, {filter:l ? ["progid:DXImageTransform.Microsoft.Matrix(M11=",b,", M12=",-m,", M21=",m,", M22=",b,", sizingMethod='auto expand')"].join("") : ba})),h = f.offsetWidth,n = f.offsetHeight,h > o && (L(f, {width:o + B,display:"block",whiteSpace:"normal"}),h = o),o = G((k(f.style.fontSize) || 12) * 1.2),r = b < 0 && -h,y = m < 0 && -n,j =
                        b * m < 0,r += m * o * (j ? 1 - v : v),y -= b * o * (l ? j ? v : 1 - v : 1),d && (r -= h * v * (b < 0 ? -1 : 1),l && (y -= n * v * (m < 0 ? -1 : 1)),L(f, {textAlign:g})),a.xCorr = r,a.yCorr = y;
                    L(f, {left:c + r,top:e + y});
                    a.cTT = s
                }
            } else this.alignOnAdd = !0
        },shadow:function(a, f, b) {
            b || (b = {});
            var c = [],e = this.element,g = this.renderer,d,v = e.style,h,n = e.path,o = b.color || "black",m = k(this.attr("stroke-width") || 1, 10) + 6,j = D(b.opacity, 1) * 0.06,b = !this.parentInverted != !b.inverted ? -1 : 1;
            n && typeof n.value !== "string" && (n = "x");
            if (a) {
                for (a = 1; a <= 3; a++)h = ['<shape isShadow="true" strokeweight="',
                    m - 2 * a,'" filled="false" path="',n,'" coordsize="100,100" style="',v.cssText,'" />'],d = C(g.prepVML(h), null, {left:k(v.left) + b,top:k(v.top) + b}),h = ['<stroke endcap="round" color="',o,'" opacity="',j * a,'"/>'],C(g.prepVML(h), null, null, d),f ? f.element.appendChild(d) : e.parentNode.insertBefore(d, e),c.push(d);
                this.shadows = c
            }
            return this
        },textBound:function() {
            var a = this.styles;
            if (this.element.nodeName.toLowerCase() === "span" && a && (a.backgroundColor || a.borderColor) && this.element.innerHTML == "")return L(this.element,
                {backgroundColor:ca,borderColor:ca,border:ca}),this;
            a && a.backgroundOpacity && this.attr({opacity:a.backgroundOpacity});
            return this
        }}),K = function() {
            this.init.apply(this, arguments)
        },K.prototype = ha(qc.prototype, {Element:db,isIE8:Cb.indexOf("MSIE 8.0") > -1,init:function(a, f, b) {
            var c;
            this.alignedObjects = [];
            c = this.createElement(h);
            a.appendChild(c.element);
            this.box = c.element;
            this.boxWrapper = c;
            this.setSize(f, b, !1);
            if (!Ba.namespaces.hcv)Ba.namespaces.add("hcv", "urn:schemas-microsoft-com:vml"),Ba.createStyleSheet().cssText =
                "hcv\\:fill, hcv\\:path, hcv\\:shape, hcv\\:stroke{ behavior:url(#default#VML); display: inline-block; } "
        },clipRect:function(a, f, b, c) {
            var e = this.createElement();
            return u(e, {members:[],left:a,top:f,width:b,height:c,getCSS:function(a) {
                var f = this.top,b = this.left,l = b + this.width,c = f + this.height,f = {clip:"rect(" + G(a ? b : f) + "px," + G(a ? c : l) + "px," + G(a ? l : c) + "px," + G(a ? f : b) + "px)"};
                !a && pb && u(f, {width:(l < 0 ? 0 : l) + B,height:(c < 0 ? 0 : c) + B});
                return f
            },updateClipping:function() {
                z(e.members, function(a) {
                    a.css(e.getCSS(a.inverted))
                })
            }})
        },
            color:function(a, f, b) {
                var c,e = /^rgba/;
                if (a && a.linearGradient) {
                    var g,d,v = a.linearGradient,h,n,o,m;
                    z(a.stops, function(a, f) {
                        e.test(a[1]) ? (c = Ib(a[1]),g = c.get("rgb"),d = c.get("a")) : (g = a[1],d = 1);
                        f ? (o = g,m = d) : (h = g,n = d)
                    });
                    a = 90 - U.atan((v[3] - v[1]) / (v[2] - v[0])) * 180 / nb;
                    b = ["<",b,' colors="0% ',h,",100% ",o,'" angle="',a,'" opacity="',m,'" o:opacity2="',n,'" type="gradient" focus="100%" />'];
                    C(this.prepVML(b), null, null, f)
                } else if (a && a.FCcolor) {
                    var v = D(a.FCcolor.color, "000000"),j = D(a.FCcolor.alpha, "100"),r = D(a.FCcolor.ratio,
                        "0"),y = F(a.FCcolor.angle, "0"),s = 100,v = v.replace(/\s+/ig, "").replace(/\,+$/ig, "").split(","),j = j.replace(/\s+/ig, "").replace(/\,+$/ig, "").split(","),r = r.replace(/\s+/ig, "").replace(/\,+$/ig, "").split(",");
                    y -= 90;
                    y *= -1;
                    y %= 360;
                    y < 0 && (y = 360 + y);
                    if (v.length === 1)return b = ["<",b,' opacity="',F(j[0], 100) / 100,'"/>'],C(this.prepVML(b), null, null, f),v[0].replace(/^#?/, "#"); else {
                        var O,p,k,B,t = 0,w = "";
                        h = v[0].replace(/^#?/, "#");
                        n = F(j[0], 100) / 100;
                        for (O = 0; O < v.length && t < 100; O += 1)p = v[O].replace(/^#?/, "#"),s = k = F(j[O], s),
                            B = F(r[O], O !== 0 ? (100 - t) / (v.length - O) : 0),t += B,t > 100 && (t = 100),w += t + "% " + p + ",";
                        o = p;
                        m = k / 100;
                        b = a.FCcolor.radialGradient ? ["<",b,' colors="',w,'" color="',h,'" color2="',o,'" focusposition="',a.FCcolor.cx + "," + a.FCcolor.cy,'" opacity="',m,'" o:opacity2="',n,'" type="gradientTitle" focus="100%" />'] : ["<",b,' colors="',w,'" angle="',y,'" color="',h,'" color2="',o,'" opacity="',m,'" o:opacity2="',n,'" type="gradient" focus="100%" />'];
                        C(this.prepVML(b), null, null, f)
                    }
                } else return e.test(a) && f.tagName !== "IMG" ? (c =
                    Ib(a),b = ["<",b,' opacity="',c.get("a"),'"/>'],C(this.prepVML(b), null, null, f),c.get("rgb")) : a
            },prepVML:function(a) {
                var f = this.isIE8,a = a.join("");
                f ? (a = a.replace("/>", ' xmlns="urn:schemas-microsoft-com:vml" />'),a = a.indexOf('style="') === -1 ? a.replace("/>", ' style="display:inline-block;behavior:url(#default#VML);" />') : a.replace('style="', 'style="display:inline-block;behavior:url(#default#VML);')) : a = a.replace("<", "<hcv:");
                return a
            },text:function(a, f, b) {
                var c = Va.chart.style;
                return this.createElement("span").attr({text:a,
                    x:G(f),y:G(b)}).css({whiteSpace:"nowrap",fontFamily:c.fontFamily,fontSize:c.fontSize})
            },path:function(a) {
                return this.createElement("shape").attr({coordsize:"100 100",d:a})
            },circle:function(a, f, b) {
                return this.symbol("circle").attr({x:a,y:f,r:b})
            },g:function(a) {
                var f;
                a && (f = {className:s + a,"class":s + a});
                return this.createElement(h).attr(f)
            },image:function(a, f, b, c, e) {
                var g = this.createElement("img").attr({src:a});
                arguments.length > 1 && g.css({left:f,top:b,width:c,height:e});
                return g
            },rect:function(a, f, b, c, e, g) {
                if (w(a))f = a.y,b = a.width,c = a.height,e = a.r,g = a.strokeWidth,a = a.x;
                var d = this.symbol("rect");
                d.r = e;
                return d.attr(d.crisp(g, a, f, za(b, 0), za(c, 0)))
            },invertChild:function(a, f) {
                var b = f.style;
                L(a, {flip:"x",left:k(b.width) - 10,top:k(b.height) - 10,rotation:-90})
            },symbols:{arc:function(a, f, b, c) {
                var e = c.start,g = c.end,d = Ca(e),v = Ma(e),h = Ca(g),n = Ma(g),c = c.innerR,o = 0.07 / b,m = c && 0.1 / c || 0;
                if (g - e === 0)return["x"]; else 2 * nb - g + e < o ? h = -o : g - e < m && (h = Ca(e + m));
                return["wa",a - b,f - b,a + b,f + b,a + b * d,f + b * v,a + b * h,f + b * n,"at",a - c,f - c,
                    a + c,f + c,a + c * h,f + c * n,a + c * d,f + c * v,"x","e"]
            },circle:function(a, f, b) {
                return["wa",a - b,f - b,a + b,f + b,a + b,f,a + b,f,"e"]
            },rect:function(a, f, b, c) {
                if (!t(c))return[];
                var e = c.width,c = c.height,g = a + e,d = f + c,b = jb(b, e, c);
                return[o,a + b,f,T,g - b,f,"wa",g - 2 * b,f,g,f + 2 * b,g - b,f,g,f + b,T,g,d - b,"wa",g - 2 * b,d - 2 * b,g,d,g,d - b,g - b,d,T,a + b,d,"wa",a,d - 2 * b,a + 2 * b,d,a + b,d,a,d - b,T,a,f + b,"wa",a,f,a + 2 * b,f + 2 * b,a,f + b,a + b,f,"x","e"]
            }}}),Xb = K;
        Hb.prototype.callbacks = [];
        var Mb = function() {
        };
        Mb.prototype = {init:function(a, f) {
            var b = a.chart.counters,c;
            this.series = a;
            this.applyOptions(f);
            this.pointAttr = {};
            if (a.options.colorByPoint) {
                c = a.chart.options.colors;
                if (!this.options)this.options = {};
                this.color = this.options.color = this.color || c[b.color++];
                b.wrapColor(c.length)
            }
            a.chart.pointCount++;
            return this
        },applyOptions:function(a) {
            var f = this.series;
            this.config = a;
            if (mb(a) || a === null)this.y = a; else if (w(a) && !mb(a.length))u(this, a),this.options = a; else if (Q(a[0]))this.name = a[0],this.y = a[1]; else if (mb(a[0]))this.x = a[0],this.y = a[1];
            if (this.x === e)this.x = f.autoIncrement()
        },
            destroy:function() {
                var a = this,f = a.series,b;
                f.chart.pointCount--;
                if (a === f.chart.hoverPoint)a.onMouseOut();
                f.chart.hoverPoints = null;
                yb(a);
                z(["graphic","tracker","group","dataLabel","connector"], function(f) {
                    a[f] && a[f].destroy()
                });
                a.legendItem && a.series.chart.legend.destroyItem(a);
                for (b in a)a[b] = null
            },getLabelConfig:function() {
                return{x:this.category,y:this.y,series:this.series,point:this,percentage:this.percentage,total:this.total || this.stackTotal}
            },select:function(a, f) {
                var b = this,c = b.series.chart;
                b.selected =
                    a = p(a, !b.selected);
                b.firePointEvent(a ? "select" : "unselect");
                b.setState(a && "select");
                f || z(c.getSelectedPoints(), function(a) {
                    if (a.selected && a !== b)a.selected = !1,a.setState(V),a.firePointEvent("unselect")
                })
            },onMouseOver:function() {
                var a = this.series.chart,f = a.tooltip,b = a.hoverPoint;
                if (b && b !== this)b.onMouseOut();
                this.firePointEvent("mouseOver");
                f && !f.shared && f.refresh(this);
                this.link !== void 0 && this.series.tracker && this.series.tracker.css({cursor:"pointer"});
                this.setState(M);
                a.hoverPoint = this
            },onMouseOut:function() {
                this.firePointEvent("mouseOut");
                this.setState();
                this.series.chart.hoverPoint = null;
                this.link !== void 0 && this.series.tracker && this.series.tracker.css({cursor:"auto"})
            },tooltipFormatter:function(a) {
                var f = this.series;
                return['<span style="color:' + f.color + '">',this.name || f.name,"</span>: ",!a ? "<b>x = " + (this.name || this.x) + ",</b> " : "","<b>",!a ? "y = " : "",this.y,"</b>"].join("")
            },update:function(a, f, b) {
                var c = this,e = c.series,g = c.graphic,d = e.chart,f = p(f, !0);
                c.firePointEvent("update", {options:a}, function() {
                    c.applyOptions(a);
                    w(a) && (e.getAttribs(),
                        g && g.attr(c.pointAttr[e.state]));
                    e.isDirty = !0;
                    f && d.redraw(b)
                })
            },remove:function(a, f) {
                var b = this,c = b.series,e = c.chart,g = c.data;
                ya(f, e);
                a = p(a, !0);
                b.firePointEvent("remove", null, function() {
                    d(g, b);
                    b.destroy();
                    c.isDirty = !0;
                    a && e.redraw()
                })
            },firePointEvent:function(a, f, b) {
                var c = this,e = this.series.options;
                (e.point.events[a] || c.options && c.options.events && c.options.events[a]) && this.importEvents();
                a === "click" && e.allowPointSelect && (b = function(a) {
                    c.select(null, a.ctrlKey || a.metaKey || a.shiftKey)
                });
                pa(this, a, f, b)
            },
            importEvents:function() {
                if (!this.hasImportedEvents) {
                    var a = ha(this.series.options.point, this.options).events,f;
                    this.events = a;
                    for (f in a)ea(this, f, a[f]);
                    this.hasImportedEvents = !0
                }
            },setState:function(a) {
                var f = this.series,b = f.options.states,c = Da[f.type].marker && f.options.marker,e = c && !c.enabled,g = (c = c && c.states[a]) && c.enabled === !1,d = f.stateMarkerGraphic,v = f.chart,h = this.pointAttr,a = a || V;
                if (!(a === this.state || this.selected && a !== "select" || b[a] && b[a].enabled === !1 || a && (g || e && !c.enabled))) {
                    if (this.graphic)this.graphic.attr(h[a]);
                    else {
                        if (a) {
                            if (!d)f.stateMarkerGraphic = d = v.renderer.circle(0, 0, h[a].r).attr(h[a]).add(f.group);
                            d.translate(this.plotX, this.plotY)
                        }
                        if (d)d[a ? "show" : "hide"]()
                    }
                    this.state = a
                }
            }};
        var ob = function() {
        };
        ob.prototype = {isCartesian:!0,type:"line",pointClass:Mb,pointAttrToOptions:{stroke:"lineColor","stroke-width":"lineWidth",fill:"fillColor",r:"radius"},init:function(a, f) {
            var b,c;
            c = a.series.length;
            this.chart = a;
            f = this.setOptions(f);
            u(this, {index:c,options:f,name:D(f.name) === void 0 ? "" : f.name,state:V,pointAttr:{},
                visible:f.visible !== !1,selected:f.selected === !0});
            c = f.events;
            for (b in c)ea(this, b, c[b]);
            if (c && c.click || f.point && f.point.events && f.point.events.click || f.allowPointSelect)a.runTrackerClick = !0;
            this.getColor();
            this.getSymbol();
            this.setData(f.data, !1)
        },autoIncrement:function() {
            var a = this.options,f = this.xIncrement,f = p(f, a.pointStart, 0);
            this.pointInterval = p(this.pointInterval, a.pointInterval, 1);
            this.xIncrement = f + this.pointInterval;
            return f
        },cleanData:function() {
            var a = this.chart,f = this.data,b,c,g = a.smallestInterval,
                d,h;
            f.sort(function(a, f) {
                return a.x - f.x
            });
            if (this.options.connectNulls)for (h = f.length - 1; h >= 0; h--)f[h].y === null && f[h - 1] && f[h + 1] && f.splice(h, 1);
            for (h = f.length - 1; h >= 0; h--)if (f[h - 1] && (d = f[h].x - f[h - 1].x,d > 0 && (c === e || d < c)))c = d,b = h;
            if (g === e || c < g)a.smallestInterval = c;
            this.closestPoints = b
        },getSegments:function() {
            var a = -1,f = [],b = this.data;
            this.options.connectNullData ? (z(b, function(a, c) {
                typeof a.y == "number" && f.push(b[c])
            }),f = [f]) : z(b, function(c, e) {
                typeof c.y != "number" ? (e > a + 1 && f.push(b.slice(a + 1, e)),a = e) : e ==
                    b.length - 1 && f.push(b.slice(a + 1, e + 1))
            });
            this.segments = f
        },setOptions:function(a) {
            var f = this.chart.options.plotOptions;
            return ha(f[this.type], f.series, a)
        },getColor:function() {
            var a = this.chart.options.colors,f = this.chart.counters;
            this.color = this.options.color || a[f.color++] || "#0000ff";
            f.wrapColor(a.length)
        },getSymbol:function() {
            var a = this.chart.options.symbols,f = this.chart.counters;
            this.symbol = this.options.marker.symbol || a[f.symbol++];
            f.wrapSymbol(a.length)
        },addPoint:function(a, f, b, c) {
            var e = this.data,
                g = this.graph,d = this.area,v = this.chart,a = (new this.pointClass).init(this, a);
            ya(c, v);
            if (g && b)g.shift = b;
            if (d)d.shift = b,d.isArea = !0;
            f = p(f, !0);
            e.push(a);
            b && e[0].remove(!1);
            this.getAttribs();
            this.isDirty = !0;
            f && v.redraw()
        },setData:function(a, f) {
            var b = this,c = b.data,e = b.initialColor,g = b.chart,d = c && c.length || 0;
            b.xIncrement = null;
            if (t(e))g.counters.color = e;
            for (a = dc(j(a || []), function(a) {
                return(new b.pointClass).init(b, a)
            }); d--;)c[d].destroy();
            b.data = a;
            b.cleanData();
            b.getSegments();
            b.getAttribs();
            b.isDirty = !0;
            g.isDirtyBox = !0;
            p(f, !0) && g.redraw(!1)
        },remove:function(a, f) {
            var b = this,c = b.chart,a = p(a, !0);
            if (!b.isRemoving)b.isRemoving = !0,pa(b, "remove", null, function() {
                b.destroy();
                c.isDirtyLegend = c.isDirtyBox = !0;
                a && c.redraw(f)
            });
            b.isRemoving = !1
        },translate:function() {
            for (var a = this.chart,f = this.options.stacking,b = this.xAxis.categories,c = this.yAxis,g = this.data,d = g.length; d--;) {
                var h = g[d],v = h.x,n = h.y,o = h.low,m = c.stacks[(n < 0 ? "-" : "") + this.stackKey];
                h.plotX = this.xAxis.translate(v);
                if (f && m && m[v]) {
                    var v = m[v],m = v.total,
                        j = c.options.min,o = v.cum;
                    v.cum += n;
                    n = za(j, o + n);
                    o = za(j, o);
                    f === "percent" && (o = m ? o * 100 / m : 0,n = m ? n * 100 / m : 0);
                    h.percentage = m ? h.y * 100 / m : 0;
                    h.stackTotal = m
                }
                if (t(o))h.yBottom = c.translate(o, 0, 1, 0, 1);
                if (n !== null)h.plotY = c.translate(n, 0, 1, 0, 1);
                h.clientX = a.inverted ? a.plotHeight - h.plotX : h.plotX;
                h.category = b && b[h.x] !== e ? b[h.x] : h.x
            }
        },setTooltipPoints:function(a) {
            var f = this.chart,b = f.inverted,c = [],e = G((b ? f.plotTop : f.plotLeft) + f.plotSizeX),g,d,h = [];
            if (a)this.tooltipPoints = null;
            z(this.segments, function(a) {
                c = c.concat(a)
            });
            this.xAxis && this.xAxis.reversed && (c = c.reverse());
            z(c, function(a, f) {
                g = c[f - 1] ? c[f - 1]._high + 1 : 0;
                for (d = a._high = c[f + 1] ? ib((a.plotX + (c[f + 1] ? c[f + 1].plotX : e)) / 2) : ib(a.plotX + 30); g <= d;)h[b ? e - g++ : g++] = a
            });
            this.tooltipPoints = h
        },onMouseOver:function() {
            var a = this.chart,f = a.hoverSeries;
            if (Ha || !a.mouseIsDown) {
                if (f && f !== this)f.onMouseOut();
                this.options.events.mouseOver && pa(this, "mouseOver");
                this.tracker && this.tracker.toFront();
                this.setState(M);
                a.hoverSeries = this
            }
        },onMouseOut:function() {
            var a = this.options,f = this.chart,
                b = f.tooltip,c = f.hoverPoint;
            if (c)c.onMouseOut();
            this && a.events.mouseOut && pa(this, "mouseOut");
            b && !a.stickyTracking && b.hide();
            this.setState();
            f.hoverSeries = null
        },animate:function(a) {
            var f = this.clipRect,b = this.options.animation;
            b && !w(b) && (b = {});
            if (a) {
                if (!f.isAnimating)f.attr({width:0}),f.isAnimating = !0
            } else f.animate({width:f.cliprectW}, b),this.animate = null
        },drawPoints:function() {
            var a,f = this.data,b = this.chart,c = this.options,g,d,h,v,n,m;
            if (this.options.marker.enabled)for (h = f.length; h--;)if (v = f[h],g = v.plotX,
                d = v.plotY,m = v.graphic,d !== e && !isNaN(d)) {
                var j,r,y;
                a = [];
                var s;
                if (v.errorValue)j = v.errorValue,y = g,n = d,s = c.errorBarWidth,s /= 2,a.push(o, y, n, T),r = this.yAxis.translate(j, 0, 0, 0, 0, 1),j = n - r,r = n + r,a.push(y, j, o, y + s, j, T, y - s, j),c.halfErrorBar === 0 && a.push(o, y, n, T, y, r, o, y - s, r, T, y + s, r),v.errorPath = a,(n = v.errorGraph) ? (ia(n),n.animate({d:a})) : v.errorGraph = b.renderer.path(a).attr({"stroke-width":c.errorBarThickness,stroke:c.errorBarColor}).add(this.group);
                if (v.vErrorValue)j = v.vErrorValue,y = g,n = d,s = c.verticalErrorBarWidth,
                    s /= 2,a.push(o, y, n, T),r = this.yAxis.translate(j, 0, 0, 0, 0, 1),j = n - r,r = n + r,a.push(y, j, o, y + s, j, T, y - s, j),c.halfVerticalErrorBar === 0 && a.push(o, y, n, T, y, r, o, y - s, r, T, y + s, r),v.vErrorPath = a,(n = v.vErrorGraph) ? (ia(n),n.animate({d:a})) : v.vErrorGraph = b.renderer.path(a).attr({"stroke-width":c.verticalErrorBarThickness,stroke:c.verticalErrorBarColor}).add(this.group);
                if (v.hErrorValue)j = v.hErrorValue,y = g,n = d,s = c.horizontalErrorBarWidth,s /= 2,a.push(o, y, n, T),j = this.xAxis.translate(j, 0, 0, 0, 0, 1),a.push(y + j, n, o, y + j, n + s, T,
                    y + j, n - s),c.halfHorizontalErrorBar === 0 && a.push(o, y, n, T, y - j, n, o, y - j, n + s, T, y - j, n - s),v.hErrorPath = a,(n = v.hErrorGraph) ? (ia(n),n.animate({d:a})) : v.hErrorGraph = b.renderer.path(a).attr({"stroke-width":c.verticalErrorBarThickness,stroke:c.verticalErrorBarColor}).add(this.group);
                a = v.pointAttr[v.selected ? "select" : V];
                n = a.r;
                m ? m.animate({x:g,y:d,r:n}) : v.graphic = b.renderer.symbol(p(v.marker && v.marker.symbol, this.symbol), g, d, n).attr(a).add(this.group)
            }
        },convertAttribs:function(a, f, b, c) {
            var e = this.pointAttrToOptions,
                g,d,h = {},a = a || {},f = f || {},b = b || {},c = c || {};
            for (g in e)d = e[g],h[g] = p(a[d], f[g], b[g], c[g]);
            return h
        },getAttribs:function() {
            var a = this,f = Da[a.type].marker ? a.options.marker : a.options,b = f.states,c = b[M],e,g = a.color,d = {stroke:g,fill:g},h = a.data,n = [],o,m = a.pointAttrToOptions,j;
            a.options.marker ? (c.radius = c.radius || f.radius + 2,c.lineWidth = c.lineWidth || f.lineWidth + 1) : c.color = c.color || Ib(c.color || g).brighten(c.brightness).get();
            n[V] = a.convertAttribs(f, d);
            z([M,"select"], function(f) {
                n[f] = a.convertAttribs(b[f], n[V])
            });
            a.pointAttr = n;
            for (g = h.length; g--;) {
                d = h[g];
                if ((f = d.options && d.options.marker || d.options) && f.enabled === !1)f.radius = 0;
                e = !1;
                if (d.options)for (j in m)t(f[m[j]]) && (e = !0);
                if (e) {
                    o = [];
                    b = f.states || {};
                    e = b[M] = b[M] || {};
                    if (!a.options.marker)e.color = Ib(e.color || d.options.color).brighten(e.brightness || c.brightness).get();
                    o[V] = a.convertAttribs(f, n[V]);
                    o[M] = a.convertAttribs(b[M], n[M], o[V]);
                    o.select = a.convertAttribs(b.select, n.select, o[V])
                } else o = n;
                d.pointAttr = o
            }
        },destroy:function() {
            var a = this,f = a.chart,b = /\/5[0-9\.]+ (Safari|Mobile)\//.test(Cb),
                c,e;
            pa(a, "destroy");
            yb(a);
            a.legendItem && a.chart.legend.destroyItem(a);
            z(a.data, function(a) {
                a.destroy()
            });
            a.graphLine && z(a.graphLine, function(a) {
                a.destroy()
            });
            z(["area","graph","dataLabelsGroup","group","tracker"], function(f) {
                a[f] && (c = b && f === "group" ? "hide" : "destroy",a[f][c]())
            });
            if (f.hoverSeries === a)f.hoverSeries = null;
            d(f.series, a);
            for (e in a)delete a[e]
        },drawDataLabels:function() {
            if (this.options.dataLabels.enabled) {
                var a = this,f,b,c = a.data,e = a.options.dataLabels,g,d = a.dataLabelsGroup,h = a.chart,n = h.renderer,
                    o = h.options.chart,m = h.inverted,j = a.type,y = a.options.stacking,r = /^(column|column3d|bar|bar3d|floatedcolumn)$/.test(j),s = e.verticalAlign === null,B = e.y === null,w = h.plotWidth,q = h.plotHeight,T = new qb(o.renderTo, F(h.options.useellipseswhenoverflow, 1)),ba,u,E,M,V,I,C,K,R,D = /^(line)$/.test(j),wa = a.depthYDisplacement || 0,N = a.depthXDisplacement || 0,J,Ia = e.style.fontSize.replace(/px/, ""),Z = n.box.nodeName == "svg" && !y ? 2 : 0,G = o.valuePosition && o.valuePosition.toLowerCase(),ua = !1,W = o.valuePadding,L = 2 + W,ma = j == "floatedcolumn";
                T.setStyle(e.style);
                if (r)y ? (s && (e = ha(e, {verticalAlign:"middle"})),B && (e = ha(e, {y:{top:14,middle:4,bottom:-6}[e.verticalAlign]})),e.align = "center") : s && (e = ha(e, {verticalAlign:"top"}));
                if (!/^(bar|pie|bar3d)$/.test(j))e.rotation = M = o.rotateValues == 1 ? 270 : void 0;
                /^(column|column3d|bar|bar3d|floatedcolumn)$/.test(j) ? ba = o.placeValuesInside : D && (ba = G === "below");
                if (!d)d = a.dataLabelsGroup = n.g("data-labels").attr({visibility:a.visible ? O : na,zIndex:6}).translate(h.plotLeft, h.plotTop).add(),h.options.chart.hasScroll &&
                    d.clip(a.clipRect);
                h = e.color;
                h === "auto" && (h = null);
                e.style.color = p(h, a.color);
                z(c, function(h, v) {
                    var o = h.barX,s = o && o + h.barW / 2 || (h.plotX != null ? h.plotX : -999),O = p(h.plotY, -999),ga = h.dataLabel,z = e.align,na = B ? h.y >= 0 ? -6 : 12 : e.y;
                    K = e.formatter.call(h.getLabelConfig());
                    if (K != null) {
                        ma && (O = F(h.barY, O));
                        C = T.getOriSize(K, void 0, void 0, !1);
                        g = C.text;
                        f = (m ? w - O : s) + e.x;
                        b = (m ? q - s : O) + na;
                        R = void 0;
                        D && !G && (ba = 0,c[v - 1] && c[v - 1].plotY < h.plotY && (ba = 1));
                        ua = h.y < 0;
                        s = Number(ma ? h.barY : h.plotY);
                        if (M) {
                            z = "left";
                            na = ua ? -4 - W : na + 2 - W;
                            E = C.width -
                                na;
                            u = C.height - na;
                            J = C.width;
                            V = F(h.barH, q - s);
                            I = s;
                            if (E <= I) {
                                b = I + na;
                                if (ua) {
                                    b = O - na + wa;
                                    z = "right";
                                    if (ba && V > E || E > q - O)b = O + na + wa,z = "left";
                                    f += N
                                }
                                ba && !ua && h.y != 0 && E <= V && (z = ua ? "center" : "right",b = I - na + wa,f += N)
                            } else E <= V ? (z = "right",b = I - na + wa,f += N,ua && (b = I - na + wa)) : (b = I + na,R = I,V > I && ma && (b = q + wa,f += N,R = V),b < J && (b = 0,z = "right"));
                            f += Ia / 2 - Z
                        } else na = ua ? -4 - W : na + 2 - W,u = C.width + L,E = Ia - na,J = Ia,V = q - s,I = s,/^(bar|bar3d)$/.test(j) ? (b -= Z,V = h.barH,I = w - h.barH,ua ? (I = w - s,ba && V > u || u > I && V > u ? (f = I + W + 2 + N,b += wa) : u < I ? (f = I - (W + 2) + N,b += wa,z = "right") :
                            (f = 6,z = "left")) : (I = s,ba && V > u || u > I && V > u ? (f = w - I - (W + 2) + N,z = "right",b += wa) : u < I ? f = w - I + (W + 2) : (f = w - 6,b += wa,z = "right")),f < 0 && (f = 6,z = "left"),f > w && (f = w - 6,z = "right")) : (ua ? (I = F(h.barH, s),b = ba && I > E || E > V ? O + na + wa : O + E + wa,f += N) : (V = F(h.barH, q - s),ba && V >= E && h.y != 0 || E > I ? (b = O + E + wa,f += N) : b = O + na,j == "bubble" && (b = O - na / 2)),b > q && (b = q),b < 0 && (b = J));
                        z = y ? "center" : z;
                        if (R)C = T.getOriSize(K, R, void 0, !0),g = C.text;
                        if (ga)m && !e.y && (b = b + k(ga.styles.lineHeight) * 0.9 - ga.getBBox().height / 2),ga.attr({text:g}).animate({x:f,y:b}); else if (t(g) &&
                            (ga = h.dataLabel = n.text(g, f, b).attr({align:z,rotation:e.rotation,zIndex:1}).css(e.style).add(d),m && !e.y && ga.attr({y:b + k(ga.styles.lineHeight) * 0.9 - ga.getBBox().height / 2}),r && a.options.stacking))O = h.barY,z = h.barW,na = h.barH,ga.align(e, null, {x:m ? w - O - na : o + N,y:m ? q - o - z + Ia / 2 + wa : O,width:m ? na : z,height:m ? z : na})
                    }
                })
            }
        },drawGraph:function() {
            var a = this,f = a.options,b = [],c,e = a.area,g = a.group,h = f.lineColor || a.color,d = f.lineWidth,n = f.dashStyle,m,j = a.chart.renderer,y = a.yAxis.getThreshold(f.threshold || 0),r = /^area/.test(a.type),
                s = [],O = [],k,B = [],t = [],w,q = 0,na = [],ba = a.shadowGroup;
            if (!ba && f.shadow)ba = a.shadowGroup = j.g("shadow").add(g),ba.floated = !0;
            z(a.segments, function(c) {
                m = [];
                z(c, function(b, l) {
                    if (a.getPointSpline) {
                        m.push.apply(m, a.getPointSpline(c, b, l));
                        var e = a.getPointSpline(c, b, l);
                        e[0] == "C" ? (g = c[l - 1],B.push(na.concat(e)),t.push(g.config),q++,na = ["M"].concat(e.slice(e.length - 2))) : na = e
                    } else {
                        m.push(l ? T : o);
                        if (l && f.step) {
                            var g = c[l - 1];
                            m.push(b.plotX, g.plotY)
                        }
                        l && (g = c[l - 1],B[q] = [],f.step ? (B[q].push(o, g.plotX, g.plotY, T, b.plotX,
                            g.plotY),f.drawVerticalJoins && B[q].push(b.plotX, b.plotY)) : B[q].push(o, g.plotX, g.plotY, T, b.plotX, b.plotY),t.push(g.config),q++);
                        m.push(b.plotX, b.plotY)
                    }
                });
                c.length > 1 ? b = b.concat(m) : s.push(c[0]);
                if (r) {
                    var e = [],g,h = m.length;
                    for (g = 0; g < h; g++)e.push(m[g]);
                    h === 3 && e.push(T, m[1], m[2]);
                    if (f.stacking && a.type !== "areaspline")for (g = c.length - 1; g >= 0; g--)e.push(c[g].plotX, c[g].yBottom); else e.push(T, c[c.length - 1].plotX, y, T, c[0].plotX, y);
                    O = O.concat(e)
                }
            });
            if (r) {
                var u = [];
                z(B, function(b) {
                    var c = [],l,e = b.length;
                    for (l = 0; l <
                        e; l++)c.push(b[l]);
                    if (f.stacking && a.type !== "areaspline")for (l = B.length - 1; l >= 0; l--); else c.push(T, b[b.length - 2], y, T, b[1], y);
                    u.push(c)
                })
            }
            a.graphPath = b;
            a.singlePoints = s;
            if (r)c = p(f.fillColor, Ib(a.color).setOpacity(f.fillOpacity || 0.75).get()),e ? e.animate({d:O}) : a.area = a.chart.renderer.path(O).attr({fill:c}).add(g);
            var E,V;
            if (r || a.getPointSpline)if (V = a.graphLine,k = {stroke:h,"stroke-width":d,"stroke-linecap":"round",dashstyle:n},V)V.animate({d:m}); else {
                if (d)w = t,a.graphLine = j.path(m).attr(k).add(g).shadow(f.shadow,
                    ba, w.shadow)
            } else {
                if (!a.graphLine)a.graphLine = [];
                z(B, function(b, c) {
                    E = a.graphLine;
                    (V = E[c]) ? V.animate({d:b}) : d && (w = t[c],k = {stroke:D(w.color, h),"stroke-width":d,"stroke-linecap":"round",dashstyle:D(w.dashStyle, n)},E[c] = j.path(b).attr(k).add(g).shadow(f.shadow, ba, w.shadow))
                })
            }
        },render:function() {
            var a = this,b = a.chart,c,e,g = a.options,h = g.animation,d = h && a.animate,h = d ? h && h.duration || 500 : 0,n = a.clipRect,m = b.renderer;
            if (!n) {
                var o = 0,j = 0,y = b.plotSizeX,r = b.plotSizeY;
                b.options.chart.hasScroll || (o = -(b.inverted ? b.plotTop :
                    b.plotLeft),j = -(b.inverted ? b.plotLeft : b.plotTop),y = b.inverted ? b.chartHeight : b.chartWidth,r = b.inverted ? b.chartWidth : b.chartHeight);
                n = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : m.clipRect(o, j, y, r);
                n.cliprectX = o;
                n.cliprectY = j;
                n.cliprectW = y;
                n.cliprectH = r;
                if (!b.clipRect)b.clipRect = n
            }
            if (!a.group)c = a.group = m.g("series"),b.inverted && (e = function() {
                c.attr({width:b.plotWidth,height:b.plotHeight}).invert()
            },e(),ea(b, "resize", e),ea(a, "destroy", function() {
                yb(b, "resize", e)
            })),c.clip(a.clipRect).attr({visibility:a.visible ?
                O : na,zIndex:g.zIndex}).translate(b.plotLeft, b.plotTop).add(b.seriesGroup);
            a.drawDataLabels();
            d && a.animate(!0);
            a.drawGraph && a.drawGraph();
            a.drawPoints();
            a.options.enableMouseTracking !== !1 && a.drawTracker();
            d && a.animate();
            setTimeout(function() {
                n.isAnimating = !1;
                if ((c = a.group) && n !== b.clipRect && n.renderer)c.clip(a.clipRect = b.clipRect),n.destroy()
            }, h);
            a.isDirty = !1
        },redraw:function() {
            var a = this.chart,b = this.group;
            b && (a.inverted && b.attr({width:a.plotWidth,height:a.plotHeight}),b.animate({translateX:a.plotLeft,
                translateY:a.plotTop}));
            this.translate();
            this.setTooltipPoints(!0);
            this.render()
        },setState:function(a) {
            var b = this.options,c = this.graph,e = b.states,b = b.lineWidth,a = a || V;
            if (this.state !== a)this.state = a,e[a] && e[a].enabled === !1 || (a && (b = e[a].lineWidth || b + 1),c && !c.dashstyle && c.attr({"stroke-width":b}, a ? 0 : 500))
        },setVisible:function(a, b) {
            var c = this.chart,g = this.legendItem,h = this.group,d = this.tracker,n = this.dataLabelsGroup,v = this.shadowGroup,m,o = this.data,j = c.options.chart.ignoreHiddenSeries;
            m = this.visible;
            m = (this.visible = a = a === e ? !m : a) ? "show" : "hide";
            if (h)h[m]();
            if (v && v.floated)v[m]();
            if (d)d[m](); else for (h = o.length; h--;)if (d = o[h],d.tracker)d.tracker[m]();
            if (n)n[m]();
            g && c.legend.colorizeItem(this, a);
            this.isDirty = !0;
            this.options.stacking && z(c.series, function(a) {
                if (a.options.stacking && a.visible)a.isDirty = !0
            });
            if (j)c.isDirtyBox = !0;
            b !== !1 && c.redraw();
            pa(this, m)
        },show:function() {
            this.setVisible(!0)
        },hide:function() {
            this.setVisible(!1)
        },scroll:function(a, b, c) {
            var e = this.chart,g = this.clipRect,h = e.plotLeft -
                a,d = e.plotTop - b,n = this.data,m = 0,o = n.length;
            this.group.translate(h, d);
            this.dataLabelsGroup.translate(h, d);
            e.trackerGroup.translate(h, d);
            g.attr({x:a,y:b});
            if (c === void 0 || c) {
                for (; m < o; m += 1)if (c = n[m],c.y !== null)e = c.plotX - a + 20,g = c.plotY - b - 15,e = e < 0 ? 0 : e,g = g < 0 ? 0 : g,c.tooltipPos = [e,g];
                this.xShift = G(a);
                this.yShift = G(b)
            }
        },select:function(a) {
            this.selected = a = a === e ? !this.selected : a;
            if (this.checkbox)this.checkbox.checked = a;
            pa(this, a ? "select" : "unselect")
        },drawTracker:function() {
            var a = this,b = a.options,c = [].concat(a.graphPath),
                e = c.length,g = a.chart,h = g.options.tooltip.snap,d = a.tracker,n = b.cursor,m = n && {cursor:n},n = a.singlePoints,j;
            g.options.chart.hasScroll && g.trackerGroup.clip(a.clipRect);
            var y,s,p,k,B = +new Date;
            z(a.data, function(c) {
                if (y = c.errorValue)s = c.errorPath,(p = c.errorTracker) ? p.attr({d:s}) : (k = {series:a,chart:g,id:c.id,label:c.label,options:c.options,svgElm:c.svgElm,toolText:y + "",getLabelConfig:c.getLabelConfig},c.errorTracker = g.renderer.path(s).attr({"stroke-width":b.errorBarThickness,stroke:r,isTracker:B,fill:r,visibility:a.visible ?
                    O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover", function(a, b) {
                    return function(f) {
                        var c = b.plotLeft,l = b.plotTop;
                        a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                        b.tooltip.refresh(a)
                    }
                }(k, g)).on("mousemove", function(a, b) {
                    return function(f) {
                        var c = b.plotLeft,l = b.plotTop;
                        a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                        b.tooltip.refresh(a)
                    }
                }(k, g)).on("mouseout", function(a) {
                    return function() {
                        a.tooltip.hide()
                    }
                }(g)).css(m).add(c.group || g.trackerGroup))
            });
            if (e)for (j = e + 1; j--;)c[j] === o && c.splice(j +
                1, 0, c[j + 1] - h, c[j + 2], T),(j && c[j] === o || j === e) && c.splice(j, 0, T, c[j - 2] + h, c[j - 1]);
            for (j = 0; j < n.length; j++)e = n[j],c.push(o, e.plotX - h, e.plotY, T, e.plotX + h, e.plotY);
            d ? d.attr({d:c}) : a.tracker = g.renderer.path(c).attr({isTracker:!0,stroke:r,fill:ba,"stroke-width":b.lineWidth + 2 * h,visibility:a.visible ? O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover",
                function() {
                    if (g.hoverSeries !== a)a.onMouseOver()
                }).on("mouseout",
                function() {
                    if (!b.stickyTracking)a.onMouseOut()
                }).css(m).add(g.trackerGroup)
        }};
        K = I(ob);
        fa.line = K;
        K = I(ob,
            {type:"area"});
        fa.area = K;
        K = I(ob, {type:"spline",getPointSpline:function(a, b, c) {
            var e = b.plotX,g = b.plotY,h = a[c - 1],d = a[c + 1],n,m,j,y;
            if (c && c < a.length - 1) {
                a = h.plotY;
                j = d.plotX;
                var d = d.plotY,r;
                n = (1.5 * e + h.plotX) / 2.5;
                m = (1.5 * g + a) / 2.5;
                j = (1.5 * e + j) / 2.5;
                y = (1.5 * g + d) / 2.5;
                r = (y - m) * (j - e) / (j - n) + g - y;
                m += r;
                y += r;
                m > a && m > g ? (m = za(a, g),y = 2 * g - m) : m < a && m < g && (m = jb(a, g),y = 2 * g - m);
                y > d && y > g ? (y = za(d, g),m = 2 * g - y) : y < d && y < g && (y = jb(d, g),m = 2 * g - y);
                b.rightContX = j;
                b.rightContY = y
            }
            c ? (b = ["C",h.rightContX || h.plotX,h.rightContY || h.plotY,n || e,m || g,e,
                g],h.rightContX = h.rightContY = null) : b = [o,e,g];
            return b
        }});
        fa.spline = K;
        K = I(K, {type:"areaspline"});
        fa.areaspline = K;
        var $b = I(ob, {type:"column",pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color",r:"borderRadius",dashstyle:"dashStyle"},init:function() {
            ob.prototype.init.apply(this, arguments);
            var a = this,b = a.chart;
            b.hasColumn = !0;
            b.hasRendered && z(b.series, function(b) {
                if (b.type === a.type)b.isDirty = !0
            })
        },translate:function() {
            var a = this,b = a.chart,c = a.options,g = c.stacking,h = c.borderWidth,
                d = 0,n = a.xAxis.reversed,v = a.xAxis.categories,m = {},j,o;
            ob.prototype.translate.apply(a);
            z(b.series, function(b) {
                if (b.type === a.type)b.options.stacking ? (j = b.stackKey,m[j] === e && (m[j] = d++),o = m[j]) : o = d++,b.columnIndex = o
            });
            var y = a.data,r = a.closestPoints,b = ra(y[1] ? y[r].plotX - y[r - 1].plotX : b.plotSizeX / (v && v.length || 1)),v = b * c.groupPadding,r = (b - 2 * v) / d,s = c.pointWidth,O = t(s) ? (r - s) / 2 : r * c.pointPadding,k = za(p(s, r - 2 * O), 1),s = ra(F(c.maxColWidth, 50)) || 1;
            k > s && c.groupPadding === 0.1 && (v += (k - s) * d / 2,r = k = s);
            var B = O + (v + ((n ? d - a.columnIndex :
                a.columnIndex) || 0) * r - b / 2) * (n ? -1 : 1),n = F(c.threshold, za(a.yAxis.options.min, 0), 0),w = a.yAxis.getThreshold(n),q = p(c.minPointLength, 5);
            z(y, function(b) {
                var f = b.plotY,e = F(b.yBottom, w),d = b.plotX + B,n = la(jb(f, e)),v = la(za(f, e) - n),m = a.yAxis.stacks[(b.y < 0 ? "-" : "") + a.stackKey],j;
                g && m && m[b.x] && m[b.x].setOffset(B, k);
                ra(v) < q && (q && (v = q,n = ra(n - w) > q ? e - q : w - (f <= w ? q : 0)),j = n - 3);
                u(b, {barX:d,barY:n,barW:k,barH:v});
                b.shapeType = "rect";
                f = {x:G(d),y:G(n),width:G(k),height:G(v),r:c.borderRadius};
                h % 2 && (f.y -= 1,f.height += 1);
                b.shapeArgs =
                    f;
                b.trackerArgs = t(j) && ha(b.shapeArgs, {height:za(6, v + 3),y:j})
            })
        },getSymbol:function() {
        },drawGraph:function() {
        },drawPoints:function() {
            var a = this,b = a.options,c = a.chart.renderer,g,h,d = a.shadowGroup,n,v,m,j,y,r,s = a.yAxis,O = s.reversed && s.options.min < 0 ? !0 : !1,p = c.box.nodeName.toLowerCase() === "div" ? !0 : !1,k = a.inverted;
            z(a.data, function(s) {
                var B = s.plotY;
                if (B !== e && !isNaN(B) && s.y !== null && (g = s.graphic,h = s.shapeArgs,g ? (ia(g),g.animate(h)) : (m = h.y,j = h.width,y = h.height,n = h.r,v = h.x,r = s.pointAttr[s.selected ? "select" :
                    V]["stroke-width"] % 2 === 0 ? void 0 : 1,O && s.color && s.color.FCcolor && (s.color.FCcolor.angle += 180),p && k && s.color && s.color.FCcolor && (s.color.FCcolor.angle += 90),s.graphic = c[s.shapeType](v, m, j, y, n, r).attr(s.pointAttr[s.selected ? "select" : V]).add(a.group).shadow(b.shadow, d, s.shadow)),s.errorValue)) {
                    var w = s.errorGraph,t,q,z = v + j / 2,na = [o,z,B,T],ba = j * b.errorBarWidthPercent / 100 / 2;
                    t = a.yAxis.translate(s.errorValue, 0, 0, 0, 0, 1);
                    q = B - t;
                    t = B + t;
                    na.push(z, q, o, z + ba, q, T, z - ba, q);
                    b.halfErrorBar === 0 && na.push(o, z, B, T, z, t, o, z - ba, t,
                        T, z + ba, t);
                    s.errorPath = na;
                    w ? (ia(w),g.animate({d:na})) : s.errorGraph = c.path(na).attr({"stroke-width":b.errorBarThickness,stroke:b.errorBarColor}).add(a.group)
                }
            })
        },drawTracker:function() {
            var a = this,f = a.chart,c = f.renderer,e,g,h = +new Date,d;
            f.options.chart.hasScroll && f.trackerGroup.clip(a.clipRect);
            z(a.data, function(n) {
                g = n.tracker;
                var m = n.errorTracker,j = n.errorValue;
                e = n.trackerArgs || n.shapeArgs;
                delete e.strokeWidth;
                if (n.y !== null) {
                    if (g)g.attr(e); else {
                        if (n.link !== void 0)var o = {cursor:"pointer",_cursor:"hand"};
                        n.tracker = c[n.shapeType](e).attr({isTracker:h,fill:r,visibility:a.visible ? O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover",
                            function(c) {
                                d = c.relatedTarget || c.fromElement;
                                if (f.hoverSeries !== a && b(d, "isTracker") !== h)a.onMouseOver();
                                n.onMouseOver()
                            }).on("mouseout",
                            function(f) {
                                if (!a.options.stickyTracking && (d = f.relatedTarget || f.toElement,b(d, "isTracker") !== h))a.onMouseOut()
                            }).css(o).add(n.group || f.trackerGroup)
                    }
                    if (j)j = n.errorPath,m ? m.attr({d:j}) : (m = {series:a,chart:f,id:n.id,label:n.label,options:n.options,
                        svgElm:n.svgElm,toolText:n.errorValue + "",getLabelConfig:n.getLabelConfig},n.errorTracker = c.path(j).attr({"stroke-width":za(a.options.errorBarThickness, 10),stroke:r,isTracker:h,fill:r,visibility:a.visible ? O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover", function(a, b) {
                        return function(f) {
                            var c = b.plotLeft,l = b.plotTop;
                            a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                            b.tooltip.refresh(a)
                        }
                    }(m, f)).on("mousemove", function(a, b) {
                        return function(f) {
                            var c = b.plotLeft,l = b.plotTop;
                            a.tooltipPos = [D(f.layerX,
                                f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                            b.tooltip.refresh(a)
                        }
                    }(m, f)).on("mouseout", function(a) {
                        return function() {
                            a.tooltip.hide()
                        }
                    }(f)).css(o).add(n.group || f.trackerGroup))
                }
            })
        },animate:function(a) {
            var b = this,c = b.data;
            if (!a)z(c, function(a) {
                var c = a.graphic,a = a.shapeArgs;
                c && (c.attr({height:0,y:b.yAxis.getThreshold(b.options.threshold || 0)}),c.animate({height:a.height,y:a.y}, b.options.animation))
            }),b.animate = null
        },remove:function() {
            var a = this,b = a.chart;
            b.hasRendered && z(b.series, function(b) {
                if (b.type === a.type)b.isDirty =
                    !0
            });
            ob.prototype.remove.apply(a, arguments)
        }});
        fa.column = $b;
        K = I($b, {type:"bar",init:function(a) {
            a.inverted = this.inverted = !0;
            $b.prototype.init.apply(this, arguments)
        }});
        fa.bar = K;
        K = I(ob, {type:"scatter",translate:function() {
            var a = this;
            ob.prototype.translate.apply(a);
            z(a.data, function(b) {
                b.shapeType = "circle";
                b.shapeArgs = {x:b.plotX,y:b.plotY,r:a.chart.options.tooltip.snap}
            })
        },drawTracker:function() {
            var a = this,b = a.chart,c;
            z(a.data, function(e) {
                var g,h,d = b.renderer,n = e.hErrorValue,m = e.vErrorValue;
                if (n)g = e.hErrorPath,
                    (h = e.hErrorTracker) ? h.attr({d:g}) : (h = {series:a,chart:b,id:e.id,label:e.label,options:e.options,svgElm:e.svgElm,toolText:n + "",getLabelConfig:e.getLabelConfig},e.hErrorTracker = d.path(g).attr({"stroke-width":a.options.verticalErrorBarThickness,stroke:r,isTracker:void 0,fill:r,visibility:a.visible ? O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover", function(a, b) {
                        return function(f) {
                            var c = b.plotLeft,l = b.plotTop;
                            a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                            b.tooltip.refresh(a)
                        }
                    }(h, b)).on("mousemove",
                        function(a, b) {
                            return function(f) {
                                var c = b.plotLeft,l = b.plotTop;
                                a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                                b.tooltip.refresh(a)
                            }
                        }(h, b)).on("mouseout", function(a) {
                        return function() {
                            a.tooltip.hide()
                        }
                    }(b)).css(j).add(e.group || b.trackerGroup));
                if (m)g = e.vErrorPath,(h = e.vErrorTracker) ? h.attr({d:g}) : (h = {series:a,chart:b,id:e.id,label:e.label,options:e.options,svgElm:e.svgElm,toolText:m + "",getLabelConfig:e.getLabelConfig},e.vErrorTracker = d.path(g).attr({"stroke-width":a.options.horizontalErrorBarThickness,
                    stroke:r,isTracker:void 0,fill:r,visibility:a.visible ? O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover", function(a, b) {
                    return function(f) {
                        var c = b.plotLeft,l = b.plotTop;
                        a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                        b.tooltip.refresh(a)
                    }
                }(h, b)).on("mousemove", function(a, b) {
                    return function(f) {
                        var c = b.plotLeft,l = b.plotTop;
                        a.tooltipPos = [D(f.layerX, f.x) - c + 20,D(f.layerY, f.y) - l - 15];
                        b.tooltip.refresh(a)
                    }
                }(h, b)).on("mouseout", function(a) {
                    return function() {
                        a.tooltip.hide()
                    }
                }(b)).css(j).add(e.group || b.trackerGroup));
                if (e.link !== void 0)var j = {cursor:"pointer",_cursor:"hand"};
                (c = e.graphic) && c.attr({isTracker:!0}).on("mouseover",
                    function() {
                        a.onMouseOver();
                        e.onMouseOver()
                    }).on("mouseout",
                    function() {
                        if (!a.options.stickyTracking)a.onMouseOut()
                    }).css(j)
            })
        },cleanData:function() {
        }});
        fa.scatter = K;
        var K = I(Mb, {init:function() {
            Mb.prototype.init.apply(this, arguments);
            var a = this,b;
            u(a, {visible:a.visible !== !1,name:p(a.name, "Slice")});
            !a.link && !a.doNotSlice && ea(a, "click", function() {
                a.series && a.series.rotationStartInstanceAngle ?
                    delete a.series.rotationStartInstanceAngle : a.slice()
            });
            return a
        },setVisible:function(a) {
            var b = this.series.chart,c = this.tracker,g = this.dataLabel,h = this.connector,d = this.shadowGroup,n;
            n = (this.visible = a = a === e ? !this.visible : a) ? "show" : "hide";
            this.group[n]();
            if (c)c[n]();
            if (g)g[n]();
            if (h)h[n]();
            if (d)d[n]();
            this.legendItem && b.legend.colorizeItem(this, a)
        },slice:function(a, b, c) {
            var e = this,g = e.series.chart,h = e.slicedTranslation;
            ya(c, g);
            b = p(b, !0);
            a = e.sliced = t(a) ? a : !e.sliced;
            b = {translateX:a ? h[0] : g.plotLeft,translateY:a ?
                h[1] : g.plotTop};
            e.group.animate(b);
            e.shadowGroup && e.shadowGroup.animate(b);
            b = h[0] - g.plotLeft;
            g = h[1] - g.plotTop;
            e.connectorPath && (e.connectorPath[1] += a ? b : -b,e.connectorPath[2] += a ? g : -g,e.connectorPath[4] += a ? b : -b,e.connectorPath[6] += a ? b : -b,e.connector.animate({d:e.connectorPath}));
            e.dataLabel && (e.dataLabel.animate({x:a ? e.dataLabel._x + b : e.dataLabel._x}),e.dataLabelBG && e.dataLabelBG.animate({x:a ? e.dataLabelBG.x + b : e.dataLabelBG.x}, void 0, function() {
                a || e.dataLabel.textBound()
            }))
        }}),Tb = function(a, b) {
            return ac(a[1] -
                this.pageY + b.top, a[0] - this.pageX + b.left)
        },K = I(ob, {type:"pie",isCartesian:!1,pointClass:K,pointAttrToOptions:{stroke:"borderColor","stroke-width":"borderWidth",fill:"color"},getColor:function() {
            this.initialColor = this.chart.counters.color
        },animate:function() {
            var a = this;
            z(a.data, function(b) {
                var c = b.graphic,b = b.shapeArgs,e = 2 * nb;
                c && (c.attr({start:e,end:e}),c.animate({r:b.r,start:b.start,end:b.end}, a.options.animation))
            });
            a.animate = null
        },rotate:function(a) {
            var b = this.data,c = this.options.slicedOffset,e =
                this.chart.plotLeft,g = this.chart.plotTop,h = F(this.chart.options.chart.startingAngle, 0),d;
            d = (a - h) % 360;
            this.chart.options.chart.startingAngle = F(a, this.chart.options.chart.startingAngle) % 360;
            d = d * nb / 180;
            z(b, function(a) {
                var b = a.graphic,f = a.shadowGroup,h = a.tracker,n = a.shapeArgs,m = {start:n.start += d,end:n.end += d},j = a.centerAngle = (m.start + m.end) / 2 % Ob,o = a.sliced,y = n.r * 0.7,s;
                a.slicedTranslation = dc([Ca(j) * c + e,Ma(j) * c + g], G);
                s = {translateX:a.slicedTranslation[0],translateY:a.slicedTranslation[1]};
                a.tooltipPos = [n.x +
                    Ca(j) * y,n.y + Ma(j) * y];
                h && h.attr(m);
                b && (b.attr(m),o && a.group.attr(s));
                f && o && a.shadowGroup.attr(s)
            });
            this.drawDataLabels(!0)
        },translate:function() {
            var a = 0,b = this,c = b.options,e = -1 * (D(this.chart.options.chart.startingAngle, 0) % 360 / 360),g = F(c.dataLabels.distance, 20),h = c.slicedOffset,d = h + c.borderWidth,n = c.center,m = b.chart,j = m.plotWidth,o = m.plotHeight,y,s,r,O = b.data,p = 2 * nb,B,t = jb(j, o),w,q,na,T = c.dataLabels.distance;
            n.push(c.size, c.innerSize || 0);
            n = dc(n, function(a, b) {
                return(w = /%$/.test(a)) ? [j,o,t,t][b] * k(a) /
                    100 : a
            });
            b.getX = function(a, b) {
                r = U.asin((a - n[1]) / (n[2] / 2 + T));
                return n[0] + (b ? -1 : 1) * Ca(r) * (n[2] / 2 + T)
            };
            b.center = n;
            z(O, function(b) {
                a += b.y
            });
            b.labelsRadius = n[2] / 2 + g;
            b.quadrantHeight = o / 2;
            b.quadrantWidth = j / 2;
            g = c.dataLabels;
            c = F(parseInt(g.style.fontSize, 10), 10) + 4;
            b.maxLabels = Math.floor(b.quadrantHeight / c);
            b.labelFontSize = c;
            b.connectorPadding = F(g.connectorPadding, 5);
            b.isSmartLineSlanted = D(g.isSmartLineSlanted, !0);
            b.connectorWidth = F(g.connectorWidth, 1);
            b.enableSmartLabels = g.enableSmartLabels;
            z(O, function(c) {
                B =
                    a ? c.y / a : 0;
                y = G(e * p * 1E3) / 1E3;
                e += B;
                s = G(e * p * 1E3) / 1E3;
                c.shapeType = "arc";
                c.shapeArgs = {x:n[0],y:n[1],r:n[2] / 2,innerR:n[3] / 2,start:y,end:s};
                if (c.color.FCcolor)c.color.FCcolor.cx = n[0],c.color.FCcolor.cy = n[1],c.color.FCcolor.r = n[2] / 2;
                c.centerAngle = r = (s + y) / 2 % Ob;
                c.slicedTranslation = dc([Ca(r) * h + m.plotLeft,Ma(r) * h + m.plotTop], G);
                q = Ca(r) * n[2] / 2;
                b.radiusY = na = Ma(r) * n[2] / 2;
                c.tooltipPos = [n[0] + q * 0.7,n[1] + na * 0.7];
                c.labelPos = [n[0] + q + Ca(r) * T,n[1] + na + Ma(r) * T,n[0] + q + Ca(r) * d,n[1] + na + Ma(r) * d,n[0] + q,n[1] + na,T < 0 ? "center" : r < p /
                    4 ? "left" : "right",r];
                c.percentage = B * 100;
                c.total = a
            });
            this.setTooltipPoints()
        },render:function() {
            this.drawPoints();
            this.options.enableMouseTracking !== !1 && this.drawTracker();
            this.drawDataLabels();
            this.options.animation && this.animate && this.animate();
            this.isDirty = !1
        },drawPoints:function() {
            var a = this.chart,b = a.renderer,c,e,g,h = this.options.shadow,d,n;
            z(this.data, function(m) {
                e = m.graphic;
                n = m.shapeArgs;
                g = m.group;
                d = m.shadowGroup;
                if (h && !d)d = m.shadowGroup = b.g("shadow").attr({zIndex:4}).add();
                if (!g)g = m.group = b.g("point").attr({zIndex:5}).add();
                c = m.sliced ? m.slicedTranslation : [a.plotLeft,a.plotTop];
                g.translate(c[0], c[1]);
                d && d.translate(c[0], c[1]);
                e ? e.animate(n) : m.graphic = b.arc(n).attr(u(m.pointAttr[V], {"stroke-linejoin":"round"})).add(m.group).shadow(h, d, m.shadow);
                m.visible === !1 && m.setVisible(!1)
            })
        },drawDataLabels:function() {
            var a = function(a, b) {
                return a.point.y - b.point.y
            },b = function(a, b) {
                return a.angle - b.angle
            },c = ["left","left","right","right"],e = [-1,1,1,-1],g = [1,1,-1,-1];
            return function(h) {
                var d = this.data,n,m,j = this.chart,y = this.options.dataLabels;
                n = y.placeInside;
                var r = this.connectorPadding,s = this.connectorWidth,p,B,k = y.distance > 0,t,w = this.center[1],q = this.center[0],ba = this.center[2] / 2,u = [
                    [],
                    [],
                    [],
                    []
                ],E,V = j.plotLeft,M = j.plotTop,I,C,K,wa,R,N,j = this.labelsRadius,D,J = this.labelFontSize,Ia = J / 2,r = [r,r,-r,-r];
                t = this.maxLabels;
                var Z = this.isSmartLineSlanted,ua = this.enableSmartLabels,W;
                h || ob.prototype.drawDataLabels.apply(this);
                if (d.length == 1) {
                    if (n = d[0],W = n.dataLabel,n.slicedTranslation = [V,M],W)W.attr({visibility:O,align:"center",x:q,y:w + Ia - 2}),W.x =
                        q
                } else if (n) {
                    var y = F(this.center[3], 0) / 2,G = y + (ba - y) / 2;
                    z(d, function(a) {
                        if (W = a.dataLabel) {
                            var b = a.centerAngle;
                            N = w + G * Ma(b) + Ia - 2;
                            K = q + G * Ca(b);
                            W.x = K;
                            W._x = K;
                            W.y = N;
                            if (a.sliced) {
                                var b = a.slicedTranslation,f = b[1] - M;
                                K += b[0] - V;
                                N += f
                            }
                            W.attr({visibility:O,align:"center",x:K,y:N});
                            a.dataLabelBG = W.textBound()
                        }
                    })
                } else {
                    z(d, function(a) {
                        if (W = a.dataLabel) {
                            var b = a.centerAngle;
                            b < 0 && (b = Ob + b);
                            u[b < bc ? 1 : b < nb ? 2 : b < Vb ? 3 : 0].push({point:a,angle:b})
                        }
                    });
                    for (h = d = 4; h--;) {
                        n = u[h].length - t;
                        if (n > 0) {
                            u[h].sort(a);
                            D = u[h].splice(0, n);
                            I = 0;
                            for (C =
                                     D.length; I < C; I += 1)n = D[I].point,n.dataLabel.attr({visibility:na}),n.connector && n.connector.attr({visibility:na})
                        }
                        u[h].sort(b)
                    }
                    h = za(u[0].length, u[1].length, u[2].length, u[3].length);
                    D = za(h * J, j);
                    u[1].reverse();
                    for (u[3].reverse(); d--;) {
                        I = u[d];
                        C = I.length;
                        n = C * J - Ia;
                        t = D + Ia;
                        for (h = 0; h < C; h += 1,n -= J)B = ra(D * Ma(I[h].angle)),t - B < J ? B = t - J : B < n && (B = n),t = I[h].oriY = B;
                        E = c[d];
                        C = D - C * J + Ia;
                        t = -Ia;
                        for (h = I.length - 1; h >= 0; h -= 1,C += J) {
                            n = I[h].point;
                            m = I[h].angle;
                            p = n.sliced;
                            W = n.dataLabel;
                            B = ra(D * Ma(m));
                            B - t < J ? B = t + J : B > C && (B = C);
                            t = B;
                            wa = (B +
                                I[h].oriY) / 2;
                            B = q + g[d] * j * Ca(U.asin(wa / D));
                            wa *= e[d];
                            wa += w;
                            R = w + ba * Ma(m);
                            m = q + ba * Ca(m);
                            K = B + r[d];
                            N = wa + Ia - 2;
                            W.x = K;
                            W._x = K;
                            W.y = N;
                            if (p) {
                                var ma = n.slicedTranslation;
                                p = ma[0] - V;
                                ma = ma[1] - M;
                                K += p;
                                B += p;
                                m += p;
                                R += ma
                            }
                            W.attr({visibility:O,align:E,x:K,y:N});
                            n.dataLabelBG = W.textBound();
                            if (k && s && ua)p = n.connector,n.connectorPath = B = [o,m,R,T,Z ? B : m,wa,K,wa],p ? (p.attr({d:B}),p.attr("visibility", O)) : n.connector = p = this.chart.renderer.path(B).attr({"stroke-width":s,stroke:y.connectorColor || "#606060",visibility:O,zIndex:3}).translate(V,
                                M).add()
                        }
                    }
                }
            }
        }(),drawTracker:function() {
            var a = this,b,c = [a.center[0] + a.chart.plotLeft,a.center[1] + a.chart.plotTop],e,g = a.options.enableRotation,h;
            g && (h = function(b) {
                e = J(a.chart.container);
                a.rotationStartInstanceAngle = Tb.call(b, c, e) - a.chart.options.chart.startingAngle * Bb;
                a.chart.tooltip && (b.type === "dragstart" ? a.chart.tooltip.block(!0) : (a.chart.tooltip.block(!1),a.chart.tooltip.refresh(b.data, !0)))
            });
            $b.prototype.drawTracker.apply(this, arguments);
            z(a.data, function(d) {
                if (d.y === null || !(b = d.tracker) || b.canRotate ===
                    !0)return!0;
                g && (ea(b.element, "dragstart dragend", h, d),ea(b.element, "drag", function(b) {
                    a.rotate((Tb.call(b, c, e) - a.rotationStartInstanceAngle) / Bb)
                }))
            })
        },getSymbol:function() {
        }});
        fa.pie = K;
        var Ya = S.Highcharts = {Chart:Hb,dateFormat:c,pathAnim:n,getOptions:function() {
            return Va
        },numberFormat:sa,Point:Mb,Color:Ib,Renderer:Xb,seriesTypes:fa,setOptions:function(a) {
            Va = ha(Va, a);
            ka();
            return Va
        },Series:ob,addEvent:ea,createElement:C,discardElement:Na,css:L,each:z,extend:u,map:dc,merge:ha,pick:p,extendClass:I,product:"Highcharts",
            version:"2.1.6",pvt:{},FusionChartsModified:"3.2.2"};
        Da.floatedcolumn = ha(Da.column, {states:{hover:{}}});
        S = Ya.extendClass(fa.column, {type:"floatedcolumn",translate:function() {
            var a = this,b = a.chart,c = 0,g = a.xAxis.reversed,h = a.xAxis.categories,d = {},n,m,j,o;
            ob.prototype.translate.apply(a);
            z(b.series, function(b) {
                if (b.type == a.type)b.options.stacking ? (n = b.stackKey,d[n] === e && (d[n] = c++),o = d[n]) : o = c++,b.columnIndex = o
            });
            var y = a.options,r = a.data,s = a.closestPoints,h = ra(r[1] ? r[s].plotX - r[s - 1].plotX : b.plotSizeX / (h ?
                h.length : 1)),s = h * y.groupPadding,O = (h - 2 * s) / c,B = y.pointWidth,k = t(B) ? (O - B) / 2 : O * y.pointPadding,w = za(p(B, O - 2 * k), 1),q = k + (s + ((g ? c - a.columnIndex : a.columnIndex) || 0) * O - h / 2) * (g ? -1 : 1),g = y.threshold || 0,na = a.xAxis,h = a.yAxis,T = na.getExtremes(),ba = h.getExtremes(),E = a.yAxis.getThreshold(g),V = p(y.minPointLength, 5);
            z(r, function(c) {
                var e = c.plotY,l = c.yBottom || E,g = c.plotX + q,h = la(jb(e, l)),d = la(za(e, l) - h),n,o;
                c._FCX !== void 0 && (g = na.translate(c._FCX, 0, 0, 0, 1));
                c._FCY !== void 0 && (h = a.yAxis.translate(c._FCY, 0, 1, 0, 1));
                c._FCH !==
                    void 0 && (d = G(c._FCH * Math.abs(b.plotSizeY / (ba.max - ba.min)) * 100) / 100);
                o = c._FCW !== void 0 ? G(c._FCW * Math.abs(b.plotSizeX / (T.max - T.min)) * 100) / 100 : w;
                ra(d) < V && (V && (d = V,h = ra(h - E) > V ? l - V : E - (e <= E ? V : 0)),n = h - 3);
                u(c, {barX:g,barY:h,barW:o,barH:d});
                c.shapeType = "rect";
                c.shapeArgs = {x:g,y:h,width:o,height:d,r:y.borderRadius};
                m = g + o / 2 + 15;
                j = h - 15;
                c.tooltipPos = [m < 0 ? 0 : m,j < 0 ? 0 : j];
                c.trackerArgs = t(n) && ha(c.shapeArgs, {height:za(6, d + 3),y:n})
            })
        }});
        fa.floatedcolumn = S;
        Da.ssgrid = ha(Da.pie, {states:{hover:{}}});
        var kc = function(a, b) {
            var c =
                a.currentSeriesIndex,e = a.series,g = b ? c - 1 : c + 1;
            if (e[g])e[c].hide(),e[g].show(),a.currentSeriesIndex = g,Ub(a)
        },Ub = function(a) {
            var b = a.series.length,c = a.currentSeriesIndex,e = a.naviigator;
            e.translate(0, a.series[c].data.length * a.options.chart.rowHeight);
            c === 0 ? e.navElePrv.hide() : e.navElePrv.show();
            c === b - 1 ? e.navEleNxt.hide() : e.navEleNxt.show()
        },gc = function(a) {
            var b = a.renderer,c = a.options.chart,e = c.navButtonRadius,g = e * 0.67,h = c.navButtonPadding + g,d = c.width - 20,n = c.navButtonHoverColor,m = c.navButtonColor,j,y;
            if (a.series.length >
                1) {
                var r = a.naviigator = b.g("navigator").attr({zIndex:4}).add();
                r.navElePrv = c = b.g("navElePrv").add(r);
                j = b.path([o,20,h,T,20 + e + g,h - g,20 + e,h,20 + e + g,h + g,"Z"]).attr({fill:m}).add(c);
                b.circle(20 + e, h, e).attr({fill:$,cursor:"pointer"}).on("mouseover",
                    function() {
                        j.attr({fill:n,cursor:"pointer"})
                    }).on("mouseout",
                    function() {
                        j.attr({fill:m})
                    }).on("click",
                    function() {
                        kc(a, !0)
                    }).add(c);
                r.navEleNxt = c = b.g("navEleNxt").add(r);
                y = b.path([o,d,h,T,d - e - g,h - g,d - e,h,d - e - g,h + g,"Z"]).attr({fill:m,cursor:"pointer"}).add(c);
                b.circle(d -
                    e, h, e).attr({fill:$,cursor:"pointer"}).on("mouseover",
                    function() {
                        y.attr({fill:n})
                    }).on("mouseout",
                    function() {
                        y.attr({fill:m})
                    }).on("click",
                    function() {
                        kc(a)
                    }).attr({fill:m}).add(c)
            }
        },S = Ya.extendClass(fa.pie, {type:"ssgrid",translate:function() {
            var a = this.chart.options.chart,b = 0,c = a.width,e = a.rowHeight,g = a.colorBoxWidth,h = a.colorBoxHeight,d = a.colorBoxX,n = a.labelX,m = a.valueX;
            z(this.data, function(a) {
                a.shapeType = "rect";
                a.alternateGradientBox = {x:0,y:b,width:c,height:e,r:0};
                a.rowDivider = [o,0,b,T,c,b];
                a.colorBoxArgs =
                {x:d,y:b + e / 2 - h / 2,width:g,height:h,r:0};
                a.labelX = n;
                a.valueX = m;
                b += e
            });
            this.options.lastRowDivider = [o,0,b,T,c,b]
        },drawPoints:function() {
            var a = this.chart.options.chart,b = this.chart.renderer,c,e = this.group,g = a.alternateRowColor,h = a.listRowDividerAttr,d = this.options.lastRowDivider,n = a.rowHeight,m = a.textStyle,j = a.lineHeight,o = a.width,y = a.valueColumnPadding,r,s,O,p,B,k,t;
            z(this.data, function(a, d) {
                c = a.graphic;
                r = a.rowDivider;
                s = a.colorBoxArgs;
                O = a.alternateGradientBox;
                k = a.valueX;
                if (!c)a.graphic = b.path(r).attr(h).add(e),
                    d % 2 == 0 && b.rect(O).attr({fill:g,"stroke-width":0}).add(e),a.symbol = b.rect(s).attr({fill:a.color,"stroke-width":0,stroke:"#000000"}).add(e),p = b.text(a.label, a.labelX).css(m).add(e),B = r[2] + n / 2 + j - p.getBBox().height / 2,p.attr({y:B}),p = b.text(a.displayValue, k).css(m).add(e),t = p.getBBox(),B = r[2] + n / 2 + j - t.height / 2,p.attr({y:B,x:k + (o - k - y - t.width)})
            });
            b.path(d).attr(h).add(e)
        },render:function() {
            var f;
            var a,b = this.chart;
            a = b.renderer;
            var c = this.options;
            b.naviigator || gc(b);
            if (!this.group)f = this.group = a.g("series"),
                a = f,a.attr({visibility:this.visible ? O : na,zIndex:c.zIndex}).translate(b.plotLeft, b.plotTop).add(b.seriesGroup);
            this.drawPoints();
            this.drawDataLabels();
            if (this.visible)b.currentSeriesIndex = this.index,b.naviigator && Ub(b);
            this.options.animation && this.animate && this.animate();
            this.isDirty = !1
        },drawDataLabels:function() {
        },drawTracker:function() {
        },animate:function() {
        }});
        fa.ssgrid = S;
        var lc = function() {
            var a = this.radarAxis,b = a.catLength,c = this.renderer,e,g = this.plotWidth / 2,h = this.plotHeight / 2,d = a.radius,n = a.xAxis;
            e = a.yAxis;
            var m = e.plotLines,j = n.plotLines,y = e.min,r = a.xTrans,s = a.startAngle,O = [],p = [o],B = [],k = m.length,t = a.yTrans,w,q,z,na,ba,u,E = U.PI * 2,V = U.PI / 2,M = U.PI + V,I = ["right","center","left"],C = d + 10,K = e.labels,wa,N = c.g("axis");
            N.attr({zIndex:2,width:this.plotWidth,height:this.plotHeight}).translate(this.plotLeft, this.plotTop).add();
            a.divline = [];
            for (q = 0; q < k; q += 1) {
                B[q] = [o];
                w = !0;
                e = b;
                wa = m[q];
                for (u = wa.value; e--;) {
                    ba = ra(u - y) * t;
                    z = g + ba * Ca(-(s + e * r));
                    na = h + ba * Ma(-(s + e * r));
                    B[q].splice(B[q].length, 0, z, na);
                    if (e == 0 && wa.label)K =
                        wa.label,((ba = K.text) || ba === 0) && c.text(ba, z, na).attr({align:K.textAlign,rotation:K.rotation}).css(K.style).add(N);
                    w && (B[q].push(T),w = !1)
                }
                B[q].push("Z");
                a.divline[q] = c.path(B[q]).attr({zIndex:2,stroke:wa.color,"stroke-width":wa.width}).add(N)
            }
            w = !0;
            for (e = j.length; e--;)if (wa = j[e],u = wa.value,b = s + u * r,m = b % E,z = g + d * Ca(-b),na = h + d * Ma(-b),O.splice(O.length, 0, o, g, h, T, z, na),p.splice(p.length, 0, z, na),w && (p.push(T),w = !1),wa.label && (K = wa.label,(ba = K.text) || ba === 0))z = m > V && m < M ? 0 : m == V || m == M ? 1 : 2,c.text(ba, g + C * Ca(-b),
                h + C * Ma(-b)).attr({align:I[z],rotation:K.rotation}).css(K.style).add(N);
            p.push("Z");
            a.spikeGraph = c.path(O).attr({zIndex:1,stroke:n.gridLineColor,"stroke-width":D(n.gridLineWidth, 1)}).add(N);
            if (n.showRadarBorder)a.borderGraph = c.path(p).attr({stroke:n.radarBorderColor,"stroke-width":D(n.radarBorderThickness, 2),fill:n.radarFillColor}).add(N)
        };
        Da.radar = ha(Da.area, {states:{hover:{}}});
        S = Ya.extendClass(fa.pie, {type:"radar",isCartesian:!1,pointClass:fa.area.prototype.pointClass,pointAttrToOptions:fa.area.prototype.pointAttrToOptions,
            translate:function() {
                var a = this.chart,b = this.data,c = b.length,e,g,h,d,n,m,j;
                if (typeof a.radarAxis === "undefined") {
                    m = a.plotWidth / 2;
                    j = a.plotHeight / 2;
                    e = a.options;
                    var o = e.xAxis,y = o.max - o.min + 1,r = e.yAxis instanceof Array ? e.yAxis[0] : e.yAxis,s = t(e.chart.axisRadius) ? e.chart.axisRadius : jb(m, j);
                    s < 0 && (s = jb(m, j));
                    g = r.min;
                    h = ra(r.max - g);
                    d = s / h;
                    e = 2 * U.PI / y;
                    n = U.PI / 2;
                    a.radarAxis = {};
                    a.radarAxis.yTrans = d;
                    a.radarAxis.xTrans = e;
                    a.radarAxis.yRange = h;
                    a.radarAxis.startAngle = n;
                    a.radarAxis.yMin = g;
                    a.radarAxis.centerX = m;
                    a.radarAxis.centerY =
                        j;
                    a.radarAxis.radius = s;
                    a.radarAxis.categories = [];
                    a.radarAxis.catLength = y;
                    a.radarAxis.yAxis = r;
                    a.radarAxis.xAxis = o
                } else m = a.radarAxis.centerX,d = a.radarAxis.yTrans,g = a.radarAxis.yMin,n = a.radarAxis.startAngle,e = a.radarAxis.xTrans,j = a.radarAxis.centerY;
                for (; c--;)a = b[c],o = t(a.y) ? a.y : g,a.plotX = m + d * ra(o - g) * Ca(-(n + c * e)),a.plotY = j + d * ra(o - g) * Ma(-(n + c * e)),a.clientX = a.plotX
            },drawGraph:function() {
                var a = this.options,b = this.chart,c = this.graph,e = [],g = this.group,h = this.color,d = a.lineWidth,n = a.lineColor || h,a = p(a.fillColor,
                    Ib(h).setOpacity(a.fillOpacity || 0.5).get()),m,b = b.renderer,h = [];
                this.data.length > 1 ? (m = [],z(this.data, function(a, b) {
                    b < 2 && m.push([o,T][b]);
                    m.push(a.plotX, a.plotY)
                }),m.push("Z"),e = e.concat(m)) : h.push(this.segment[0][0]);
                this.graphPath = e;
                this.singlePoints = h;
                c ? c.attr({d:e}) : this.graph = b.path(e).attr({stroke:n,fill:a,"stroke-width":d + B}).add(g).shadow()
            },drawTracker:function() {
                var a = this,b = a.options.cursor,c = b && {cursor:b},e;
                z(a.data, function(b) {
                    (e = b.graphic) && e.attr({isTracker:!0}).on("mouseover",
                        function() {
                            a.onMouseOver();
                            b.onMouseOver()
                        }).on("mouseout",
                        function() {
                            if (!a.options.stickyTracking)a.onMouseOut()
                        }).css(c)
                })
            },setVisible:function(a, b) {
                var c = this.chart,g = this.legendItem,h = this.group,d = this.dataLabelsGroup,n = this.shadowGroup,m,j = this.data,o = c.options.chart.ignoreHiddenSeries;
                m = this.visible;
                m = (this.visible = a = a === e ? !m : a) ? "show" : "hide";
                if (h)h[m]();
                if (n && n.floated)n[m]();
                for (h = j.length; h--;)if (n = j[h],n.graphic)n.graphic[m]();
                if (d)d[m]();
                g && c.legend.colorizeItem(this, a);
                this.isDirty = !0;
                this.options.stacking && z(c.series,
                    function(a) {
                        if (a.options.stacking && a.visible)a.isDirty = !0
                    });
                if (o)c.isDirtyBox = !0;
                b !== !1 && c.redraw();
                pa(this, m)
            },getColor:fa.area.prototype.getColor,drawDataLabels:fa.area.prototype.drawDataLabels,animate:function() {
            },getSymbol:fa.area.prototype.getSymbol,drawPoints:function() {
                var a,b = this.data,c = this.chart,g,h,d,n,m,j;
                if (this.options.marker.enabled)for (d = b.length; d--;)if (n = b[d],g = n.plotX,h = n.plotY,j = n.graphic,h !== e && !isNaN(h))a = n.pointAttr[n.selected ? "select" : V],m = a.r,j ? j.animate({x:g,y:h,r:m}) : n.graphic =
                    c.renderer.symbol(p(n.marker && n.marker.symbol, this.symbol), g, h, m).attr(a).add(c.trackerGroup || this.group)
            },rotate:function() {
            },render:function() {
                var a = this,b = a.chart,c,e = a.options.animation,g = e && a.animate,e = g ? e && e.duration || 500 : 0,h,d,n,m,j = b.renderer,o = a.clipRect;
                if (!o && (h = -b.plotLeft,d = -b.plotTop,n = b.chartWidth,m = b.chartHeight,o = a.clipRect = !b.hasRendered && b.clipRect ? b.clipRect : j.clipRect(h, d, n, m),o.cliprectX = h,o.cliprectY = d,o.cliprectW = n,o.cliprectH = m,!b.clipRect))b.clipRect = a.clipRect;
                if (b.drawRadarAxis !==
                    !0)lc.call(b),b.drawRadarAxis = !0;
                if (!a.group)c = a.group = j.g("series"),b.inverted && c.attr({width:b.plotWidth,height:b.plotHeight}).invert(),c.clip(a.clipRect).attr({visibility:a.visible ? O : na,zIndex:3}).translate(b.plotLeft, b.plotTop).add(b.seriesGroup);
                a.drawDataLabels();
                g && a.animate(!0);
                a.drawGraph && a.drawGraph();
                a.drawPoints();
                a.options.enableMouseTracking !== !1 && a.drawTracker();
                g && a.animate();
                setTimeout(function() {
                    o.isAnimating = !1;
                    if ((c = a.group) && o !== b.clipRect && o.renderer)c.clip(a.clipRect = b.clipRect),
                        o.destroy()
                }, e);
                a.isDirty = !1
            }});
        fa.radar = S;
        Da.column3d = ha(Da.column, {states:{hover:{}}});
        S = Ya.extendClass(fa.column, {type:"column3d",initGroup:function() {
            var a = this.chart,b = a.renderer,c = this.xDepth,e = this.yDepth,g,h,d,n,m,j = this.yAxis;
            if (!a.column3DGroups)m = a.column3DGroups = b.g("series-3d"),m.translate(a.plotLeft - c, a.plotTop + e).add(a.seriesGroup);
            if (j.options.min < 0 && j.options.max >= 0) {
                g = a.options.chart.zeroPlaneColor;
                h = a.options.chart.zeroPlaneBorderColor;
                d = 0;
                n = j.translate(0, 0, 1);
                var o = 1,y = a.plotSizeX;
                a.inverted && (d = o,o = y,y = d,d = a.plotSizeY - n - y,n = 0);
                j.zeroPlane = b.rect3d(d, n, y, o, c, e, 1, "zeroPlane").attr({fill:g,stroke:h,"stroke-width":1,zIndex:2}).add(m)
            }
        },drawNthPoint:function(a) {
            var b = this.chart,c = b.column3DGroups,g = b.renderer,h = this.xDepth,d = this.yDepth,n = this.data[a],m,j;
            m = n.plotY;
            var y,r,s,O,p,B,k,t;
            if (m !== e && !isNaN(m)) {
                y = n.shapeArgs;
                r = n.color;
                t = n.borderColor;
                O = n.borderWidth;
                s = n.graphic;
                m = parseInt(y.x, 10);
                j = parseInt(y.y, 10);
                p = m;
                B = j;
                k = parseInt(y.height, 10);
                y = parseInt(y.width, 10);
                if (this.options.enableMouseTracking !==
                    !1) {
                    var w = m - h,q = j + d;
                    n.trackerArgs = [o,w,q,T,w,q + k,w + y,q + k,w + y + h,q + k - d,w + y + h,q - d,w + h,q - d,"Z"];
                    this.drawTracker(a)
                }
                b.inverted && (a = k,k = y,y = a,p = b.plotSizeY - j - y,B = b.plotSizeX - m - k);
                s ? g.attr({x:p,y:B,width:y,height:k,x3D:h,y3D:d,strokeWidth:O,fill:r,stroke:t,zIndex:n.y >= 0 ? 3 : 1}) : (n.graphic = g.rect3d(p, B, y, k, h, d, O, "point").attr({fill:r,stroke:t,zIndex:n.y >= 0 ? 3 : 1}).add(c),n.graphic.shadow(this.options.shadow, void 0, n.shadow))
            }
        },render:function() {
            var a = this.options.animation && this.animate;
            this.drawDataLabels();
            a && this.animate();
            this.isDirty = !1
        },animate:function(a) {
            var b = this,c = b.data,e = b.chart,g,h;
            if (!a)z(c, function(a) {
                var c = a.graphic;
                c && (e.inverted ? (g = c.attr("width"),h = c.attr("x"),c.attr({x:e.plotSizeY - b.yAxis.getThreshold(b.options.threshold || 0),width:0}),c.animate({x:h,width:g}, b.options.animation)) : (c.attr({height:0,y:b.yAxis.getThreshold(b.options.threshold || 0)}),c.animate({height:a.barH,y:a.barY}, b.options.animation)))
            }),b.animate = null
        },drawTracker:function(a) {
            var c = this,e = c.chart,g = e.renderer,h,
                d = +new Date,n = c.options.cursor,n = n && {cursor:n},m,j = c.data[a];
            h = j.tracker;
            e.options.chart.hasScroll && e.trackerGroup.clip(c.clipRect);
            a = j.trackerArgs || j.shapeArgs;
            if (j.y !== null)h ? h.attr(a) : (j.link !== void 0 && (n = {cursor:"pointer"}),j.tracker = g.path(a).attr({isTracker:d,fill:r,visibility:c.visible ? O : na,zIndex:j.y > 0 ? -1 : -3}).on(Ha ? "touchstart" : "mouseover",
                function(a) {
                    m = a.relatedTarget || a.fromElement;
                    if (e.hoverSeries != c && b(m, "isTracker") != d)c.onMouseOver();
                    j.onMouseOver()
                }).on("mouseout",
                function(a) {
                    if (!c.options.stickyTracking &&
                        (m = a.relatedTarget || a.toElement,b(m, "isTracker") != d))c.onMouseOut()
                }).css(n).add(e.trackerGroup))
        },setVisible:function(a, b) {
            var c = this.chart,g = this.legendItem,h = this.dataLabelsGroup,n,d,m = this.data,j,o = c.options.chart.ignoreHiddenSeries;
            n = this.visible;
            n = (this.visible = a = a === e ? !n : a) ? "show" : "hide";
            for (d = m.length; d--;) {
                j = m[d];
                if (j.tracker)j.tracker[n]();
                if (j.graphic)j.graphic[n]()
            }
            if (h)h[n]();
            g && c.legend.colorizeItem(this, a);
            this.isDirty = !0;
            this.options.stacking && z(c.series, function(a) {
                if (a.options.stacking &&
                    a.visible)a.isDirty = !0
            });
            if (o)c.isDirtyBox = !0;
            b !== !1 && c.redraw();
            pa(this, n)
        }});
        fa.column3d = S;
        Da.bar3d = ha(Da.bar, {states:{hover:{}}});
        S = Ya.extendClass(S, {type:"bar3d",init:function(a) {
            a.inverted = this.inverted = !0;
            fa.column.prototype.init.apply(this, arguments)
        }});
        fa.bar3d = S;
        Da.bubble = ha(Da.scatter, {states:{hover:{}}});
        S = Ya.extendClass(fa.scatter, {type:"bubble",drawPoints:function() {
            var a,b = this.data,c = this.chart,g,h,n,d,m,j,o = this.chart.plotWidth;
            g = this.chart.plotHeight;
            a = this.options.zMax;
            var y = this.options.bubbleScale,
                r,o = (o > g ? g : o) / 8;
            r = Math.sqrt(a);
            if (this.options.marker.enabled)for (n = b.length; n--;)if (d = b[n],g = d.plotX,h = d.plotY,j = d.graphic,h !== e && !isNaN(h))a = d.pointAttr[d.selected ? "select" : V],m = Math.sqrt(d.z),m = Math.round(m * o / r) * y,a.r = m,j ? j.animate({x:g,y:h,r:m}) : d.graphic = c.renderer.symbol(p(d.marker && d.marker.symbol, this.symbol), g, h, m).attr(a).add(this.group)
        }});
        fa.bubble = S;
        Da.candlestick = ha(Da.column, {states:{hover:{}}});
        S = Ya.extendClass(fa.column, {type:"candlestick",drawPoints:function() {
            var a = this,b = a.options,
                c = a.chart.renderer,e,g,h;
            z(a.data, function(d) {
                if (t(d.plotY))if (e = d.graphic,g = d.shapeArgs,e)e.attr(g); else {
                    h = {stroke:d.borderColor,fill:d.color,"stroke-width":d.borderWidth,"stroke-linecap":"round",dashstyle:d.dashStyle};
                    if (d.bar)d.bar.graphic = c[d.bar.shapeType](d.bar.shapeArgs).attr(h).add(a.group).shadow(b.shadow, void 0, b.shadow);
                    if (g)d.graphic = c[d.shapeType](g).attr(h).add(a.group).shadow(b.shadow, void 0, b.shadow)
                }
            })
        },translate:function() {
            var a = this,b = a.chart,c = 0,e = a.xAxis.reversed,g = a.xAxis.categories,
                h,d = a.options.plotType;
            ob.prototype.translate.apply(a);
            z(b.series, function(b) {
                if (b.type == a.type)b.options.stacking ? (t(h) || (h = c++),b.columnIndex = h) : b.columnIndex = c++
            });
            for (var n = a.options,m,j = a.data,y = a.closestPoints,g = ra(j[1] ? j[y].plotX - j[y - 1].plotX : b.plotSizeX / (g && g.length ? g.length : 1)),y = g * n.groupPadding,r = (g - 2 * y) / c,b = n.pointWidth,s = t(b) ? (r - b) / 2 : r * n.pointPadding,b = p(b, r - 2 * s),y = s + (y + ((e ? c - a.columnIndex : a.columnIndex) || 0) * r - g / 2) * (e ? -1 : 1),r = a.yAxis.getThreshold(n.threshold || 0),s = n.minPointLength,e =
                0; e < j.length; e += 1)if (g = j[e],d == "line") {
                if (e > 0)m = j[e - 1],m.shapeType = "path",m.shapeArgs = [o,m.plotX,m.plotY,T,g.plotX,g.plotY];
                g.trackerShapeType = "rect";
                g.trackerArgs = {x:g.plotX - 3,y:g.plotY - 3,width:6,height:6}
            } else {
                m = g.plotX + y;
                var O = g.plotY,B = a.yAxis.getThreshold(g.MY),k = la(jb(O, B)),w = la(ra(O - B)),q = b,na = q / 2,ba;
                if (w < (s || 5))s && (w = s,k = r - (O <= r ? s : 0)),ba = k - 3;
                w < 1 && (w = 1);
                u(g, {barX:m,barY:k,barW:q,barH:w});
                d == "bar" ? (g.trackerShapeType = "rect",g.shapeType = "path",g.shapeArgs = [o,g.plotX,B,T,g.plotX - na,B,o,g.plotX,
                    O,T,g.plotX + na,O],g.trackerArgs = {x:m,y:t(ba) ? ba : k,width:q,height:t(ba) ? 6 : w}) : (g.shapeType = "rect",g.shapeArgs = {x:m,y:k,width:q,height:w,r:n.borderRadius},g.trackerShapeType = "rect",g.trackerArgs = t(ba) && ha(g.shapeArgs, {height:6,y:ba}));
                g.bar = {shapeType:"path",shapeArgs:[o,g.plotX,a.yAxis.getThreshold(parseFloat(g.high)),T,g.plotX,a.yAxis.getThreshold(parseFloat(g.low))]}
            }
        },drawTracker:function() {
            var a = this,c = a.chart,e = c.renderer,g,h,d = +new Date,n;
            z(a.data, function(m) {
                h = m.tracker;
                g = m.trackerArgs;
                delete g.strokeWidth;
                if (m.y !== null)if (h)h.attr(g); else {
                    if (m.link !== void 0)var j = {cursor:"pointer",_cursor:"hand"};
                    m.tracker = e[m.trackerShapeType](g).attr({isTracker:d,fill:r,visibility:a.visible ? O : na,zIndex:1}).on(Ha ? "touchstart" : "mouseover",
                        function(e) {
                            n = e.relatedTarget || e.fromElement;
                            if (c.hoverSeries !== a && b(n, "isTracker") !== d)a.onMouseOver();
                            m.onMouseOver()
                        }).on("mouseout",
                        function(c) {
                            if (!a.options.stickyTracking && (n = c.relatedTarget || c.toElement,b(n, "isTracker") !== d))a.onMouseOut()
                        }).css(j).add(m.group || c.trackerGroup)
                }
            })
        }});
        fa.candlestick = S;
        var mc = {};
        Da.dragnode = ha(Da.scatter, {states:{hover:{}}});
        S = Ya.extendClass(fa.scatter, {type:"dragnode",drawPoints:function() {
            var a = this,b,c = a.data,g = a.chart,h,d,n,m,j,y,r,s,B,k,w,t,q = g.options.connectors,ba = g.renderer,u = a.options.dataLabels.style,E,M,I,K,C,wa,N,R;
            if (a.options.marker.enabled) {
                for (m = c.length; m--;)if (j = c[m],h = j.options,d = j.plotX,n = j.plotY,r = j.graphic,w = j.marker,k = F(w && w.height),B = F(w && w.width),y = F(w && w.radius),t = D(w && w.symbol),s = j.id,E = h.imageNode,M = h.imageURL,I = h.imageAlign,
                    wa = t == "square" ? B : y * 1.5,K = F(h.imageWidth, wa),N = t == "square" ? k : y * 1.5,h = F(h.imageHeight, N),R = D(w && w.lineWidth),n !== e && !isNaN(n) && (b = j.pointAttr[j.selected ? "select" : V],b.r *= 1,y = b.r,r ? r.animate({x:d,y:n,r:y}) : (t = p(w && w.symbol, a.symbol),t == "square" ? j.graphic = ba.rect(d - B / 2, n - k / 2, B, k).attr(b).add(a.group) : (t = t === "triangle" ? "poly_3" : t,t = t === "diamond" ? "poly_4" : t,j.graphic = ba.symbol(t, d, n, y).attr(b).add(a.group)),mc[s] = j),E && M)) {
                    switch (I) {
                        case "middle":
                            n -= h / 2;
                            break;
                        case "bottom":
                            n = N > h ? n - h + wa / 2 : n - h / 2;
                            break;
                        default:
                            n =
                                N > h ? n - wa / 2 : n - h / 2
                    }
                    C || (C = ba.g("group").attr({visibility:na}).add());
                    j.imageNodeGraph = ba.image(M).attr({width:K,height:h}).translate(d - K / 2, n).css({opacity:1}).add(a.group)
                }
                var J,W,Ia,Z,ua,G,ma,L,ea,fa,ic,ha,ia,U,ja,S,P,Ga;
                for (m = 0; m < q.length; m += 1)ea || (ea = ba.g("connectors").attr({visibility:O}).translate(g.plotLeft, g.plotTop).add()),z(q[m].connector, function(b) {
                    J = b.from;
                    W = b.to;
                    Ia = b.label;
                    R = b.conStrength * b.stdThickness;
                    fa = b.color;
                    Ia = b.label;
                    ia = mc[J];
                    U = mc[W];
                    if (ia && U) {
                        Z = ia.plotY;
                        ua = ia.plotX;
                        ma = U.plotY;
                        G =
                            U.plotX;
                        ja = ia.marker;
                        S = U.marker;
                        ic = (ua + G) / 2;
                        ha = (Z + ma) / 2;
                        L = [o,ua,Z,T,G,ma];
                        a.connector = ba.path(L).attr({"stroke-width":R,stroke:fa}).add(ea);
                        P = [];
                        if (b.arrowAtStart)ja.symbol == "square" ? (y = ja.width,H = ja.height) : (y = ja.radius,H = void 0),P = P.concat(Eb(ua, Z, G, ma, y, H));
                        if (b.arrowAtEnd)S.symbol == "square" ? (y = S.width,H = S.height) : (y = S.radius,H = void 0),P = P.concat(Eb(G, ma, ua, Z, y, H));
                        P.length && ba.path(P).attr({"stroke-width":R,stroke:fa}).add(ea);
                        Ga = fa && fa.FCcolor && fa.FCcolor.color;
                        j.connectorText = ba.text(Ia, ic,
                            ha).attr({align:"center",rotation:0}).css(u).css({backgroundColor:Ga,borderColor:Ga}).add(ea).textBound()
                    }
                })
            }
        }});
        fa.dragnode = S;
        Hb = Ya.Chart;
        C = Ya.createElement;
        Na = Ya.discardElement;
        L = Ya.css;
        Va = Ya.setOptions({lang:{downloadPNG:"Download PNG image",downloadJPEG:"Download JPEG image",downloadPDF:"Download PDF document",downloadSVG:"Download SVG vector image",exportButtonTitle:"Export to raster or vector image",printButtonTitle:"Print the chart"}});
        Va.navigation = {menuStyle:{border:"1px solid #A0A0A0",background:"#FFFFFF"},
            menuItemStyle:{fontFamily:"Verdana, Arial",padding:"3px 5px",background:ba,color:"#303030",fontSize:Ha ? "14px" : "11px"},menuItemHoverStyle:{background:"#999999",color:"#FFFFFF"},buttonOptions:{align:"right",backgroundColor:{linearGradient:[0,0,0,15],stops:[
                [0.4,"#F7F7F7"],
                [0.6,"#E3E3E3"]
            ]},borderColor:"#B0B0B0",borderRadius:2,borderWidth:1,height:15,hoverBorderColor:"#909090",hoverSymbolFill:"#81A7CF",hoverSymbolStroke:"#4572A5",symbolFill:"#E0E0E0",symbolStroke:"#A0A0A0",symbolX:8,symbolY:7.5,verticalAlign:"top",
                width:16,y:10}};
        Va.exporting = {type:"image/png",url:"http://export.highcharts.com/",width:800,enableImages:!1,buttons:{exportButton:{symbol:"exportIcon",x:-10,symbolFill:"#A8BF77",hoverSymbolFill:"#768F3E",_titleKey:"exportButtonTitle",menuItems:[
            {textKey:"downloadPNG",onclick:function() {
                this.exportChart()
            }},
            {textKey:"downloadJPEG",onclick:function() {
                this.exportChart({type:"image/jpeg"})
            }},
            {textKey:"downloadPDF",onclick:function() {
                this.exportChart({type:"application/pdf"})
            }},
            {textKey:"downloadSVG",
                onclick:function() {
                    this.exportChart({type:"image/svg+xml"})
                }}
        ]},printButton:{symbol:"printIcon",x:-36,symbolFill:"#B5C9DF",hoverSymbolFill:"#779ABF",_titleKey:"printButtonTitle",onclick:function() {
            this.print()
        }}}};
        u(Hb.prototype, {getSVG:function(a) {
            var b = this,c,g,d,n,m,j,o = ha(b.options, a);
            if (!Ba.createElementNS)Ba.createElementNS = function(a, b) {
                var c = Ba.createElement(b);
                c.getBBox = function() {
                    return Ya.Renderer.prototype.Element.prototype.getBBox.apply({element:c})
                };
                return c
            };
            a = C(h, null, {position:y,
                top:"-9999em",width:b.chartWidth + B,height:b.chartHeight + B}, Ba.body);
            u(o.chart, {renderTo:a,forExport:!0});
            o.exporting.enabled = !1;
            if (!o.exporting.enableImages)o.chart.plotBackgroundImage = null,o.chart.bgSWF = void 0,o.chart.bgImage = void 0,o.chart.logoURL = void 0;
            o.series = [];
            z(b.series, function(a) {
                d = a.options;
                d.animation = !1;
                d.showCheckbox = !1;
                d.visible = a.visible;
                if (!o.exporting.enableImages && d && d.marker && /^url\(/.test(d.marker.symbol))d.marker.symbol = "circle";
                d.data = [];
                z(a.data, function(a) {
                    n = a.config;
                    m = {x:a.x,
                        y:a.y,name:a.name};
                    typeof n == "object" && a.config && n.constructor != Array && u(m, n);
                    m.visible = a.visible;
                    d.data.push(m);
                    o.exporting.enableImages || (j = a.config && a.config.marker) && /^url\(/.test(j.symbol) && delete j.symbol
                });
                o.series.push(d)
            });
            c = new Ya.Chart(o);
            z(["xAxis","yAxis"], function(a) {
                z(b[a], function(b, f) {
                    var g = c[a][f],h = b.getExtremes(),d = h.userMin,h = h.userMax;
                    (d !== e || h !== e) && g.setExtremes(d, h, !0, !1)
                })
            });
            g = c.container.innerHTML;
            o = null;
            c.destroy();
            Na(a);
            g = g.replace(/zIndex="[^"]+"/g, "").replace(/isShadow="[^"]+"/g,
                "").replace(/symbolName="[^"]+"/g, "").replace(/jQuery[0-9]+="[^"]+"/g, "").replace(/isTracker="[^"]+"/g, "").replace(/url\([^#]+#/g, "url(#").replace(/<svg /, '<svg xmlns:xlink="http://www.w3.org/1999/xlink" ').replace(/ href=/g, " xlink:href=").replace(/id=([^" >]+)/g, 'id="$1"').replace(/class=([^" ]+)/g, 'class="$1"').replace(/ transform /g, " ").replace(/:(path|rect)/g, "$1").replace(/<img ([^>]*)>/gi, "<image $1 />").replace(/<\/image>/g, "").replace(/<image ([^>]*)([^\/])>/gi, "<image $1$2 />").replace(/width=(\d+)/g,
                'width="$1"').replace(/height=(\d+)/g, 'height="$1"').replace(/hc-svg-href="/g, 'xlink:href="').replace(/style="([^"]+)"/g, function(a) {
                    return a.toLowerCase()
                });
            g = g.replace(/(url\(#highcharts-[0-9]+)&quot;/g, "$1").replace(/&quot;/g, "'");
            g.match(/ xmlns="/g).length == 2 && (g = g.replace(/xmlns="[^"]+"/, ""));
            return g
        },exportChart:function(a, b) {
            var c,e = this.getSVG(b),a = ha(this.options.exporting, a);
            c = C("form", {method:"post",action:a.url}, {display:ba}, Ba.body);
            z(["filename","type","width","svg"], function(b) {
                C("input",
                    {type:na,name:b,value:{filename:a.filename || "chart",type:a.type,width:a.width,svg:e}[b]}, null, c)
            });
            c.submit();
            Na(c)
        },print:function() {
            var a = this,b = a.container,c = [],e = b.parentNode,g = Ba.body,h = g.childNodes;
            if (!a.isPrinting)a.isPrinting = !0,z(h, function(a, b) {
                if (a.nodeType == 1)c[b] = a.style.display,a.style.display = ba
            }),g.appendChild(b),gb.print(),setTimeout(function() {
                e.appendChild(b);
                z(h, function(a, b) {
                    if (a.nodeType == 1)a.style.display = c[b]
                });
                a.isPrinting = !1
            }, 1E3)
        },contextMenu:function(a, b, c, e, g, d) {
            var n =
                this,m = n.options.navigation,j = m.menuItemStyle,o = n.chartWidth,r = n.chartHeight,O = "cache-" + a,p = n[O],k = za(g, d),w,t;
            if (!p)n[O] = p = C(h, {className:s + a}, {position:y,zIndex:1E3,padding:k + B}, n.container),w = C(h, null, u({MozBoxShadow:"1px 1px 3px rgba(0,0,0,0.5)",WebkitBoxShadow:"1px 1px 3px rgba(0,0,0,0.5)",boxShadow:"1px 1px 3px rgba(0,0,0,0.5)"}, m.menuStyle), p),t = function() {
                L(p, {display:ba})
            },ea(p, "mouseleave", t),z(b, function(a) {
                a && (C(h, {onmouseover:function() {
                    L(this, m.menuItemHoverStyle)
                },onmouseout:function() {
                    L(this,
                        j)
                },innerHTML:a.text || Ya.getOptions().lang[a.textKey]}, u({cursor:"pointer"}, j), w)[Ha ? "ontouchstart" : "onclick"] = function() {
                    t();
                    a.onclick.apply(n, arguments)
                })
            }),n.exportMenuWidth = p.offsetWidth,n.exportMenuHeight = p.offsetHeight;
            a = {display:"block"};
            c + n.exportMenuWidth > o ? a.right = o - c - g - k + B : a.left = c - k + B;
            e + d + n.exportMenuHeight > r ? a.bottom = r - e - k + B : a.top = e + d - k + B;
            L(p, a)
        },addButton:function(a) {
            function b() {
                o.attr(s);
                j.attr(r)
            }

            var c = this,e = c.renderer,g = ha(c.options.navigation.buttonOptions, a),h = g.onclick,d = g.menuItems,
                n = g.width,m = g.height,j,o,y,a = g.borderWidth,r = {stroke:g.borderColor},s = {stroke:g.symbolStroke,fill:g.symbolFill};
            g.enabled !== !1 && (j = e.rect(0, 0, n, m, g.borderRadius, a).align(g, !0).attr(u({fill:g.backgroundColor,"stroke-width":a,zIndex:19}, r)).add(),y = e.rect(0, 0, n, m, 0).align(g).attr({fill:"rgba(255, 255, 255, 0.001)",title:Ya.getOptions().lang[g._titleKey],zIndex:21}).css({cursor:"pointer"}).on("mouseover",
                function() {
                    o.attr({stroke:g.hoverSymbolStroke,fill:g.hoverSymbolFill});
                    j.attr({stroke:g.hoverBorderColor})
                }).on("mouseout",
                b).on("click", b).add(),d && (h = function() {
                b();
                var a = y.getBBox();
                c.contextMenu("export-menu", d, a.x, a.y, n, m)
            }),y.on("click", function() {
                h.apply(c, arguments)
            }),o = e.symbol(g.symbol, g.symbolX, g.symbolY, (g.symbolSize || 8) / 2).align(g, !0).attr(u(s, {"stroke-width":g.symbolStrokeWidth || 1,zIndex:20})).add())
        }});
        Ya.Renderer.prototype.symbols.exportIcon = function(a, b, c) {
            return[o,a - c,b + c,T,a + c,b + c,a + c,b + c * 0.5,a - c,b + c * 0.5,"Z",o,a,b + c * 0.5,T,a - c * 0.5,b - c / 3,a - c / 6,b - c / 3,a - c / 6,b - c,a + c / 6,b - c,a + c / 6,b - c / 3,a + c * 0.5,b - c / 3,"Z"]
        };
        Ya.Renderer.prototype.symbols.printIcon = function(a, b, c) {
            return[o,a - c,b + c * 0.5,T,a + c,b + c * 0.5,a + c,b - c / 3,a - c,b - c / 3,"Z",o,a - c * 0.5,b - c / 3,T,a - c * 0.5,b - c,a + c * 0.5,b - c,a + c * 0.5,b - c / 3,"Z",o,a - c * 0.5,b + c * 0.5,T,a - c * 0.75,b + c,a + c * 0.75,b + c,a + c * 0.5,b + c * 0.5,"Z"]
        };
        Hb.prototype.callbacks.push(function(a) {
            var b,c = a.options.exporting,e = c.buttons;
            if (c.enabled !== !1)for (b in e)a.addButton(e[b])
        })
    }
})();
(function() {
    function P(c, g, d) {
        var c = c.chart,e = b(c.charttopmargin, 15),h = b(c.chartrightmargin, 15),j = b(c.chartbottommargin, 15),m = b(c.chartleftmargin, 15),p = e + j,s = m + h;
        d *= 0.7;
        g *= 0.7;
        p > d && (e -= (p - d) * e / p,j -= (p - d) * j / p);
        s > g && (m -= (s - g) * m / s,h -= (s - g) * h / s);
        g = {_FCconf:{0:{stack:{}},1:{stack:{}},x:{stack:{}},oriCatTmp:[],noWrap:!1,marginLeftExtraSpace:0,marginRightExtraSpace:0,marginBottomExtraSpace:0,marginTopExtraSpace:0,marimekkoTotal:0},chart:{alignTicks:!1,renderTo:w,ignoreHiddenSeries:!1,events:{},reflow:!1,
            spacingTop:e,spacingRight:h,spacingBottom:j,spacingLeft:m,marginTop:e,marginRight:h,marginBottom:j,marginLeft:m,borderRadius:0,plotBackgroundColor:"#FFFFFF",style:{}},colors:["AFD8F8","F6BD0F","8BBA00","FF8E46","008E8E","D64646","8E468E","588526","B3AA00","008ED6","9D080D","A186BE","CC6600","FDC689","ABA000","F26D7D","FFF200","0054A6","F7941C","CC3300","006600","663300","6DCFF6"],credits:{href:"http://www.fusioncharts.com?BS=FCHSEvalMark",text:"FusionCharts",enabled:!0},global:{},labels:{items:[]},
            lang:{},legend:{enabled:!0,symbolWidth:12,borderRadius:1,backgroundColor:"#FFFFFF",initialItemX:0,title:{text:w,x:0,y:0,padding:2},scroll:{},itemStyle:{}},loading:{},plotOptions:{series:{pointPadding:0,borderColor:"#333333",events:{},animation:c.animation == ca ? !1 : {duration:1E3},states:{hover:{enabled:!1},select:{enabled:!1}},dataLabels:{enabled:!0,color:"#555555",style:{},formatter:function() {
                return this.point.showPercentValues ? parseInt(this.percentage * 100, 10) / 100 + "%" : this.point.displayValue
            }},point:{events:{}}},
                area:{states:{hover:{enabled:!1}},marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},radar:{states:{hover:{enabled:!1}},marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},areaspline:{states:{hover:{enabled:!1}},marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},line:{shadow:!0,states:{hover:{enabled:!1}},marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},scatter:{states:{hover:{enabled:!1}},
                    marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},bubble:{states:{hover:{enabled:!1}},marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},spline:{states:{hover:{enabled:!1}},marker:{lineWidth:1,radius:3,states:{hover:{enabled:!1},select:{enabled:!1}}}},pie:{size:"80%",allowPointSelect:!0,cursor:"pointer",point:{events:{legendItemClick:c.interactivelegend === ca ? Nb : function() {
                    this.slice();
                    return!1
                }}}},column:{},floatedcolumn:{},column3d:{},bar:{},
                bar3d:{}},point:{},series:[],subtitle:{text:w,style:{}},symbols:[],title:{text:w,style:{}},toolbar:{},tooltip:{borderRadius:1,style:{},formatter:function() {
                return this.point.showPercentInToolTip ? this.point.toolText + parseInt(this.percentage * 100, 10) / 100 + "%" : this.point.toolText
            }},xAxis:{labels:{x:0,style:{},enabled:!1},lineWidth:0,plotLines:[],plotBands:[],title:{style:{},text:w},tickWidth:0,scroll:{enabled:!1}},yAxis:[
                {startOnTick:!1,endOnTick:!1,title:{style:{},text:w},tickLength:0,labels:{x:0,style:{}},
                    plotBands:[],plotLines:[]},
                {tickLength:0,gridLineWidth:0,startOnTick:!1,endOnTick:!1,title:{style:{},text:w},labels:{x:0,style:{},enabled:!1,formatter:function() {
                    return this.value !== Q ? this.value : w
                }},opposite:!0,plotBands:[],plotLines:[]}
            ],exporting:{buttons:{exportButton:{},printButton:{enabled:!1}}}};
        if (c.palettecolors && typeof c.palettecolors === "string")g.colors = c.palettecolors.split(ta);
        return g
    }

    var u = FusionCharts(["private","modules.renderer.highcharts-base"]);
    if (u !== void 0) {
        var k = u.hcLib,Q = k.BLANKSTRINGPLACEHOLDER,
            w = k.BLANKSTRING,mb = k.createTrendLine,d = k.pluck,t = k.getValidValue,b = k.pluckNumber,j = k.defaultPaletteOptions,p = k.getFirstValue,L = k.getDefinedColor,C = k.parseUnsafeString,I = k.FC_CONFIG_STRING,sa = k.extend2,J = k.getDashStyle,da = k.toPrecision,ya = k.graphics.getColumnColor,ka = k.getFirstColor,Na = k.setLineHeight,xb = k.pluckFontSize,Hb = k.getFirstAlpha,Eb = k.graphics.getDarkColor,S = k.graphics.getLightColor,D = k.graphics.convertColor,F = k.COLOR_TRANSPARENT,Ua = k.POSITION_CENTER,eb = k.POSITION_TOP,hb = k.POSITION_BOTTOM,
            Pa = k.POSITION_RIGHT,kb = k.POSITION_LEFT,Ka = k.chartAPI,rb = k.graphics.mapSymbolName,ta = k.COMMASTRING,ca = k.ZEROSTRING,qb = k.ONESTRING,fb = k.HUNDREDSTRING,Xa = k.PXSTRING,Za = k.BGRATIOSTRING,vb = k.COMMASPACE,q = k.TESTSTR,wb = k.graphics.getAngle,$ = k.POSITION_MIDDLE,$a = k.STRINGUNDEFINED,Y = k.axisLabelAdder,Nb = k.falseFN,cc = k.SmartLabelManager,sc = k.NumberFormatter,Ba = k.getLinkAction,gb = k.getAxisLimits,U = k.HASHSTRING,G = k.createDialog,ib = k.regex.dropHash,la = Math.max,za = Math.min,jb = k.Highcharts,ra = {fontWeight:{1:"bold",
            0:"normal"},fontStyle:{1:"italic",0:"normal"},textDecoration:{1:"underline",0:"none"}},Ca = {font:function(b, g) {
            g.style.fontFamily = b
        },size:function(b, g) {
            if (b)g.style.fontSize = xb(b) + Xa
        },color:function(b, g, d) {
            g.style.color = b && b.replace && b.replace(ib, U) || w;
            if (d)g.color = g.style.color
        },bgcolor:function(b, g) {
            g.style.backgroundColor = b && b.replace && b.replace(ib, U) || w
        },bordercolor:function(b, g) {
            g.style.border = "1px solid";
            g.style.borderColor = b && b.replace && b.replace(ib, U) || w
        },ishtml:w,leftmargin:function(c, g) {
            g.style.marginLeft =
                b(c, 0) + Xa
        },letterspacing:function(c, g) {
            g.style.letterSpacing = b(c, 0) + Xa
        },bold:function(b, g) {
            g.style.fontWeight = ra.fontWeight[b] || ""
        },italic:function(b, g) {
            g.style.fontStyle = ra.fontStyle[b] || ""
        },underline:function(b, g) {
            g.style.textDecoration = ra.textDecoration[b] || ""
        }},Ma = {text:"",style:{}},nb = {font:function(b, g, d) {
            var e,h = !1,j,m,p;
            switch (g) {
                case "caption":
                    g = b.title;
                    break;
                case "datalabels":
                    g = b.xAxis.labels;
                    break;
                case "datavalues":
                    g = b.plotOptions.series.dataLabels;
                    h = !0;
                    break;
                case "subcaption":
                    g = b.subtitle;
                    break;
                case "tooltip":
                    g = b.tooltip;
                    break;
                case "trendvalues":
                    g = {style:b[I].trendStyle};
                    break;
                case "xaxisname":
                    g = b.xAxis.title;
                    break;
                case "yaxisname":
                    g = [];
                    j = 0;
                    for (m = b.yAxis.length; j < m; j += 1)g.push(b.yAxis[j].title);
                    break;
                case "yaxisvalues":
                    g = [];
                    j = 0;
                    for (m = b.yAxis.length; j < m; j += 1)g.push(b.yAxis[j].labels);
                    break;
                case "vlinelabels":
                    g = {style:b[I].divlineStyle};
                    break;
                default:
                    g = Ma
            }
            if (typeof g === "object")if (g instanceof Array) {
                j = 0;
                for (m = g.length; j < m; j += 1) {
                    p = g[j];
                    for (e in d)if (b = e.toLowerCase(),typeof Ca[b] ===
                        "function")Ca[b](d[e], p, h);
                    Na(p.style)
                }
            } else {
                for (e in d)if (b = e.toLowerCase(),typeof Ca[b] === "function")Ca[b](d[e], g, h);
                Na(g.style)
            }
        }},Bb = {chart2D:{bgColor:"bgColor",bgAlpha:"bgAlpha",bgAngle:"bgAngle",bgRatio:"bgRatio",canvasBgColor:"canvasBgColor",canvasBaseColor:"canvasBaseColor",divLineColor:"divLineColor",legendBgColor:"legendBgColor",legendBorderColor:"legendBorderColor",toolTipbgColor:"toolTipbgColor",toolTipBorderColor:"toolTipBorderColor",baseFontColor:"baseFontColor",anchorBgColor:"anchorBgColor"},
            chart3D:{bgColor:"bgColor3D",bgAlpha:"bgAlpha3D",bgAngle:"bgAngle3D",bgRatio:"bgRatio3D",canvasBgColor:"canvasBgColor3D",canvasBaseColor:"canvasBaseColor3D",divLineColor:"divLineColor3D",divLineAlpha:"divLineAlpha3D",legendBgColor:"legendBgColor3D",legendBorderColor:"legendBorderColor3D",toolTipbgColor:"toolTipbgColor3D",toolTipBorderColor:"toolTipBorderColor3D",baseFontColor:"baseFontColor3D",anchorBgColor:"anchorBgColor3D"}},ac = function() {
            var b = {},g,d = function() {
                var e,h,d,n,j = 0;
                for (e in b)if (j +=
                    1,h = b[e],d = h.jsVars,n = h.ref && h.ref.parentNode) {
                    if (!d.resizeLocked && (d._containerOffsetW !== n.offsetWidth || d._containerOffsetH !== n.offsetHeight))h.ref.resize(),d._containerOffsetW = n.offsetWidth,d._containerOffsetH = n.offsetHeight
                } else delete b[e],j -= 1;
                j || (g = clearInterval(g))
            };
            return function(e) {
                var h = e.jsVars,j = e.ref && e.ref.parentNode || {};
                h._containerOffsetW = j.offsetWidth;
                h._containerOffsetH = j.offsetHeight;
                b[e.id] = e;
                g || (g = setInterval(d, 300))
            }
        }(),bc = {getExternalInterfaceMethods:function() {
            var b = Ka[this.jsVars.type],
                b = b && b.eiMethods,g = "saveAsImage,print,exportChart,getXML,hasRendered,signature,cancelExport,";
            if (typeof b === "string")g += b + ta; else if (b !== void 0 || b !== null)for (var d in b)g += d + ta;
            return g.substr(0, g.length - 1)
        },drawOverlayButton:function(b) {
            if (b && b.show) {
                var g = this.jsVars,d = g.$overlayButton || (g.$overlayButton = jQuery("<span>"));
                d.html(b.message ? b.message : "Back");
                d.click(function() {
                    u.raiseEvent("OverlayButtonClick", b, g.fcObj)
                });
                d.css({border:"1px solid #" + (b.borderColor ? b.borderColor : "7f8975"),backgroundColor:"#" +
                    (b.bgColor ? b.bgColor : "edefec"),fontFamily:b.font ? b.font : "Verdana",color:"#" + b.fontColor ? b.fontColor : "49563a",fontSize:(b.fontSize ? b.fontSize : "10") + Xa,padding:(b.padding ? b.padding : "3") + Xa,fontWeight:parseInt(b.bold, 10) === 0 ? "normal" : "bold",position:"absolute",top:"0",right:"1px",_cursor:"hand",cursor:"pointer"});
                g.hcObj.container.appendChild(d[0])
            }
        },getSVGString:function() {
            return this.jsVars && this.jsVars.hcObj && this.jsVars.hcObj.getSVG && this.jsVars.hcObj.getSVG()
        },resize:function() {
            var b = this.jsVars,
                g = b.container,d = b.fcObj,e = b.hcObj;
            e && (e && e.destroy && e.destroy(),k.createChart(b.fcObj, g, b.type, void 0, void 0, !1),delete b.isResizing,k.raiseEvent("resized", {width:d.width,height:d.height,prevWidth:b.width,prevHeight:b.height}, d, [d.id]))
        },lockResize:function(b) {
            return this.jsVars.resizeLocked = b === void 0 && !0 || b
        },showChartMessage:function(b) {
            var g = this.jsVars,d = g.hcObj;
            g.msgStore[b] && (b = g.msgStore[b]);
            d && d.destroy && d.destroy();
            k.createChart(g.fcObj, g.container, g.type, void 0, b);
            return b
        },signature:function() {
            return"FusionCharts/3.2.2 (XT)"
        }};
        k.createChart = function(b, g, d, e, h, j) {
            var m = b.jsVars,p = m.msgStore,s,O = new Ka(d);
            if (h !== void 0) {
                if (typeof h === "string")h = new G(g, h),m.hasNativeMessage = !0
            } else!O || !O.init ? (h = new G(g, p.ChartNotSupported),m.hasNativeMessage = !0) : m.message ? (h = new G(g, m.message),m.hasNativeMessage = !0) : m.loadError ? (h = new G(g, p.LoadDataErrorText),m.hasNativeMessage = !0) : m.stallLoad ? (h = new G(g, p.XMLLoadingText),m.hasNativeMessage = !0) : (h = b.getChartData(FusionChartsDataFormats.JSON, !0),s = h.data,h.error instanceof Error ? (h = new G(g,
                p.InvalidXMLText),m.hasNativeMessage = !0,k.raiseEvent("dataxmlinvalid", {}, m.fcObj, [m.fcObj.id])) : (k.raiseEvent("dataloaded", {}, m.fcObj, [m.fcObj.id]),h = O.init(g, s, b),m.drawCount += 1,h.series.length === 0 ? (h = new G(g, p.ChartNoDataText),m.hasNativeMessage = !0,k.raiseEvent("nodatatodisplay", {}, m.fcObj, [m.fcObj.id])) : (m.hasNativeMessage = !1,delete m.message)));
            if (!h)h = new G(g, "Error rendering chart"),m.hasNativeMessage = !0;
            h.chart = h.chart || {};
            h.chart.renderTo = g;
            h.credits = h.credits || {};
            h.credits.enabled = O && O.creditLabel ===
                !0 ? !0 : !1;
            if (j === !1)h.chart.animation = !1,h.plotOptions.series.animation = !1;
            return new jb.Chart(h, function(h) {
                var j,o = m.fcObj,y = o.width,r = o.height;
                j = O && O.eiMethods;
                g.jsVars = b.jsVars;
                m.container = g;
                m.hcObj = h;
                m.type = d;
                m.width = g.offsetWidth;
                m.height = g.offsetHeight;
                g.style.backgroundColor = m.transparent ? "transparent" : "#ffffff";
                if (h.hasRendered) {
                    u.extend(g, bc);
                    if (j && typeof j !== "string")for (var s in j)g[s] = j[s];
                    j = {width:m.width,height:m.height,drawCount:m.drawCount};
                    k.raiseEvent("drawcomplete", j, o, [o.id])
                }
                e &&
                (e({success:h.hasRendered,ref:g,id:b.id}),h.hasRendered && (y = Number((y && y.match && y.match(/^\s*(\d*\.?\d*)\%\s*$/) || [])[1]),r = Number((r && r.match && r.match(/^\s*(\d*\.?\d*)\%\s*$/) || [])[1]),(y || r) && o.ref && o.ref.parentNode && ac(o),k.raiseEvent("loaded", {type:d}, o, [o.id])))
            })
        };
        var Vb = k.axisMinMaxSetter = function(c, g, d, e, h, j, m, p) {
            d = g.stacking100Percent ? gb(99, 1, 100, 0, h, j, m, p) : gb(b(g.max, d), b(g.min, e), d, e, h, j, m, p);
            c.min = Number(da(d.Min, 10));
            c.max = Number(da(d.Max, 10));
            c.tickInterval = Number(da(d.divGap, 10));
            if (d.Range /
                d.divGap <= 2)c.alternateGridColor = F;
            delete g.max;
            delete g.min
        },Ob = k.configureAxis = function(c, g, n, e, h, y, m, p, s, O) {
            var B;
            B = n.min;
            var k = n.max,o = n.tickInterval,t = O ? "xAxis" : e.stacking100Percent ? "percentValue" : s ? "sYAxis" : "yAxis",r = B,q = 1,u,C = n.gridLineColor,E = n.gridLineWidth,J = n.gridLineDashStyle,Ia = B < 0 && k > 0 ? !0 : !1,G = !0,ua,N = 1,Z = g[I].axisGridManager;
            if (O && !e.catOccupied)e.catOccupied = {};
            if (Ia && (!O || !e.catOccupied[0]))O ? (G = Boolean(b(c.showvzeroplane, 1)),u = b(c.vzeroplanethickness, 1),c = u > 0 ? D(d(c.vzeroplanecolor,
                C), d(c.vzeroplanealpha, c.vdivlinealpha, j.divLineAlpha[g.chart.paletteIndex])) : F) : (ua = b(c.divlinealpha, j.divLineAlpha[g.chart.paletteIndex]),g.chart.defaultSeriesType === "line" || g.chart.defaultSeriesType === "spline" || g[I].is3d ? (G = Boolean(b(c.showzeroplane, 1)),u = 1) : (u = E === 1 ? 2 : E,N = 5,ua *= 2),u = b(c.zeroplanethickness, u),c = u > 0 ? D(d(c.zeroplanecolor, C), d(c.zeroplanealpha, ua)) : F),G && (G = y === 1 ? p[t](0) : w,Z.addAxisGridLine(n, 0, G, u, J, c, N, O));
            if (h === 1 && (!O || !e.catOccupied[B]))G = p[t](B),Z.addAxisGridLine(n, B, G, 0.1,
                void 0, F, 1, O);
            E <= 0 && (E = 0.1,C = F);
            for (B = Number(da(r + o, 10)); B < k; B = Number(da(B + o, 10)),q += 1) {
                Ia && r < 0 && B > 0 && !s && (Z.addAxisAltGrid(n, 0),q += 1);
                if (B !== 0 && (!O || !e.catOccupied[B]))G = y === 1 && q % m === 0 ? p[t](B) : w,Z.addAxisGridLine(n, B, G, E, J, C, 2, O);
                r = B;
                s || Z.addAxisAltGrid(n, B)
            }
            s || Z.addAxisAltGrid(n, k);
            if (h === 1 && q % m === 0 && (!O || !e.catOccupied[k]))G = p[t](k),Z.addAxisGridLine(n, k, G, 0.1, J, F, 2, O);
            n.labels.enabled = !1;
            n.gridLineWidth = 0;
            n.alternateGridColor = F;
            n.plotLines.sort(Ha)
        },Cb = k.placeVerticalAxis = function(c, g, d, e, h, j, m, p, s, O) {
            var B = d[I],k = B.smartLabel,o,T,r,u,M = 0,p = B.marginRightExtraSpace,C = B.marginLeftExtraSpace,E = {},J = {},D = {},F = c.plotLines,G = c.plotBands,N = g.verticalAxisValuesPadding,Z = g.verticalAxisValuesPadding,W = g.verticalAxisNamePadding,L = g.verticalAxisNameWidth,U = g.rotateVerticalAxisName,S = 0,K = 0,P = 0,z = 0,R = 0,Y = 0,ha,ea,$,pa,ja,B = 2,ia = function(b, c) {
                var e,d;
                if (b && b.label && t(b.label.text) !== void 0) {
                    pa = b.label;
                    if (pa.style && pa.style !== $)$ = pa.style,k.setStyle($);
                    o = k.getOriSize(b.label.text);
                    d = (e = o.width) ? e + 2 : 0;
                    if (b.isGrid) {
                        if (E[c] = {width:e,height:o.height,label:pa},P <= d)P = d,g.lYLblIdx = c
                    } else b.isTrend && (m && pa.textAlign === kb || pa.textAlign === Pa ? (J[c] = {width:e,height:o.height,label:pa},z = la(z, d)) : (D[c] = {width:e,height:o.height,label:pa},R = la(R, d)))
                }
            },Y = function(b, e) {
                var g,d = e ? M : M + b;
                return d > 0 ? (U ? (d < T.height && (T = k.getSmartText(c.title.text, h, d)),g = T.height) : (d < T.width && (T = k.getSmartText(c.title.text, d, h)),g = T.width),c.title.text = T.text,e ? d - g + b : d - g) : (c.title.text = w,0)
            },fa = function(b, c, e) {
                for (var g in b)b[g].label.x =
                    c,b[g].label.y = e
            };
            ha = 0;
            for (ea = G.length; ha < ea; ha += 1)ia(G[ha], ha);
            ha = 0;
            for (ea = F.length; ha < ea; ha += 1)ia(F[ha], ha);
            if (c.title && c.title.text != w)$ = c.title.style,k.setStyle($),r = k.getOriSize(q).height,U ? (T = k.getSmartText(c.title.text, h, j),M = T.height,u = r) : (c.title.rotation = 0,T = k.getSmartText(c.title.text, L !== void 0 ? L : j, h),M = T.width,u = 20);
            R > 0 && (K = R + Z);
            s && (e = b(e.chart.maxlabelwidthpercent, 0),e >= 1 && e <= 100 && (s = e * s / 100,P > s && (P = s)));
            S = la(z, P);
            M > 0 && (S += M + 2 + W);
            (function() {
                if (K + S > j) {
                    ja = K + S - j;
                    if (K)if (Z >= ja) {
                        Z -= ja;
                        return
                    } else ja -=
                        Z,Z = 0;
                    if (N + W >= ja)W >= ja ? W -= ja : (N -= ja - W,W = 0); else {
                        ja -= N + W;
                        W = N = 0;
                        if (R > 20)if (z > P)if (R - z >= ja) {
                            R -= ja;
                            return
                        } else if (z - R >= ja) {
                            z -= ja;
                            return
                        } else if (z > R ? (ja -= z - R,z = R) : (ja -= R - z,R = z),2 * (z - P) >= ja) {
                            R -= ja / 2;
                            z -= ja / 2;
                            return
                        } else ja -= 2 * (z - P),R = z = P; else if (R - 20 >= ja) {
                            R -= ja;
                            return
                        } else ja -= R - 20,R = 20;
                        if (z > P)if (z - P >= ja) {
                            z -= ja;
                            return
                        } else ja -= z - P,z = P;
                        M - u >= ja ? M -= ja : (ja -= M - u,M = u,R >= ja ? R = 0 : (ja -= R,R = 0,M >= ja ? M = 0 : (ja -= M,M = 0,P >= ja && (P -= ja,z = P))))
                    }
                }
            })();
            surplusWidth = function(b, c) {
                var e,g = 0,d = c ? R - 2 : R + b - 2;
                if (R > 0) {
                    for (ha in D)if (pa =
                        D[ha].label,D[ha].width > d) {
                        if (pa.style && pa.style !== $)$ = pa.style,k.setStyle($);
                        e = k.getSmartText(pa.text, d, h, !0);
                        pa.text = e.text;
                        D[ha].height = e.height;
                        g = Math.max(g, e.width)
                    } else g = Math.max(g, D[ha].width);
                    return c ? d - g + b : d - g
                } else {
                    for (ha in D)D[ha].label.text = w;
                    return 0
                }
            }(0, !0);
            surplusWidth = Y(surplusWidth, !0);
            surplusWidth = function(b) {
                var c = 0,e = Math.max(P, z) + b - 2;
                if (e > 0) {
                    for (ha in E)if (pa = E[ha].label,E[ha].width > e) {
                        if (pa.style && pa.style !== $)$ = pa.style,k.setStyle($);
                        b = k.getSmartText(pa.text, e, h, !0);
                        pa.text =
                            b.text;
                        E[ha].height = b.height;
                        c = Math.max(c, b.width)
                    } else c = Math.max(c, E[ha].width);
                    for (ha in J)if (pa = J[ha].label,J[ha].width > e) {
                        if (pa.style && pa.style !== $)$ = pa.style,k.setStyle($);
                        b = k.getSmartText(pa.text, e, h, !0);
                        pa.text = b.text;
                        J[ha].height = b.height;
                        c = Math.max(c, b.width)
                    } else c = Math.max(c, J[ha].width);
                    return e - c
                } else {
                    for (ha in E)E[ha].label.text = w;
                    for (ha in J)J[ha].label.text = w;
                    return 0
                }
            }(surplusWidth);
            surplusWidth = Y(surplusWidth);
            s = g.verticalAxisNamePadding - W;
            surplusWidth && s && (surplusWidth > s ? (W += s,
                surplusWidth -= s) : (W += surplusWidth,surplusWidth = 0));
            s = g.verticalAxisValuesPadding - N;
            surplusWidth && s && (surplusWidth > s ? (N += s,surplusWidth -= s) : (N += surplusWidth,surplusWidth = 0));
            s = g.verticalAxisOppValuesPadding - Z;
            surplusWidth && s && (surplusWidth > s ? (Z += s,surplusWidth -= s) : (Z += surplusWidth,surplusWidth = 0));
            R > 0 && (K = R + Z);
            S = la(z, P) + N;
            M > 0 && (S += M + W);
            s = la(z, P);
            s += s > 0 ? W : 0;
            M > 0 ? (s += W + (s > 0 ? 2 : 0),U ? M < T.height && (T = k.getSmartText(c.title.text, h, M)) : (M < T.width && (T = k.getSmartText(c.title.text, M, h)),c.title.y = -((T.height - r) /
                2)),c.title.text = T.text,c.title.margin = s + C + (U ? T.height - r : T.width / 2)) : c.title.text = w;
            r = -(N + C + 2);
            p = p + N + 2;
            Y = la(z, P);
            c.labels.style && (B = parseInt(c.labels.style.fontSize, 10) * 0.35);
            m ? (R > 0 && fa(D, r, B),Y > 0 && (fa(E, p, B),fa(J, p, B))) : (R > 0 && fa(D, p, B),Y > 0 && (fa(E, r, B),fa(J, r, B)));
            O ? (d.chart.marginLeft += m ? K : S - O,d.chart.marginRight += m ? S - O : K) : (d.chart.marginLeft += m ? K : S,d.chart.marginRight += m ? S : K);
            return K + S
        },Lb = k.titleSpaceManager = function(c, g, d, e) {
            var h = g.chart,j = C(h.caption),g = C(h.subcaption),m = h = b(h.captionpadding,
                10),p = c[I].smartLabel,s = !1,O = 0,k,t,o = 0,q = 0,r = 0,u = 0,M = 0,wa = 0,E = c.title,J = c.subtitle;
            if (j !== w)k = E.style,r = b(parseInt(k.fontHeight, 10), parseInt(k.lineHeight, 10), 12),wa = b(parseInt(k.fontSize, 10), 10);
            if (g !== w)t = J.style,u = b(parseInt(t.fontHeight, 10), parseInt(t.lineHeight, 10), 12),M = b(parseInt(t.fontSize, 10), 10);
            if (r > 0 || u > 0) {
                O = r + u + h;
                O > e ? (o = O - e,s = !0,o < h ? h -= o : (o -= h,h = 0,u > o ? (q = u - o + 10,u = 0) : (o -= u,u = 0,r > o && (q = r - o),r = 0))) : q = e - O;
                if (r > 0)p.setStyle(k),r += q,e = p.getSmartText(j, d, r),q = r - e.height,r = e.height,E.text = e.text,
                    E.y = wa;
                if (u > 0)p.setStyle(t),u += q,d = p.getSmartText(g, d, u),q = u - d.height,u = d.height,J.text = d.text,J.y = M + r;
                s && q > 0 && (h += za(m - h, q));
                O = r + u + h;
                c.chart.marginTop += O
            }
            return O
        },pb = k.stepYAxisNames = function(b, g, d, e, h, j) {
            for (var m = 0,p = e.plotLines,s = [],O,k = e.plotLines.length,g = g[I].smartLabel,t = parseFloat(xb(d.basefontsize, 10)),o; m < k; m += 1)d = p[m],d.isGrid && d.label && d.label.text && (s.push(d),d.value === 0 && (O = s.length - 1));
            if (k = s.length)if (e.labels.style ? g.setStyle(e.labels.style) : s[0].label && s[0].label.style && g.setStyle(e.labels.style),
                m = g.getOriSize("W").height,j || (m += t * 0.4),b /= k - 1,b < m) {
                j = Math.ceil(m / b);
                for (m = b = O; m < k; m += 1) {
                    d = s[m];
                    if (m === h) {
                        if ((m - b) % j && o)o.label.text = "";
                        b = h
                    }
                    if (d && d.label)(m - b) % j ? d.label.text = w : o = d
                }
                for (m = b = O; m >= 0; m -= 1) {
                    d = s[m];
                    if (m === h) {
                        if ((b - m) % j && o)o.label.text = "";
                        b = h
                    }
                    if (d && d.label)(b - m) % j ? d.label.text = w : o = d
                }
            }
        },hc = k.placeHorizontalAxis = function(c, g, d, e, h, j, m) {
            var p = d[I],s,k,B,q,o,u,r,V,M,C,E = 0,J = 0,D = 10,F = 1,G = 0,N = G = 0,Z = !1,W = !1,P = !1,L = b(e.chart.labelstep, 0),S = g.labelDisplay,K = g.horizontalLabelPadding,U = p.marginBottomExtraSpace;
            M = d.chart.marginLeft;
            var z = d.chart.marginRight,R = p.smartLabel,$ = g.catCount,ha = g.slantLabels,ea = h / (c.max - c.min),Y = 0,pa = 0,N = {w:0,h:0};
            if (c.labels.style)u = c.labels.style,R.setStyle(u),V = R.getOriSize("W"),D = V.height,r = V.width + 4,C = R.getOriSize("WWW").width + 4;
            var ja,ia,fa = [],ka = [],ma = 0,Q = 0,ca,da,ta,ra = g.horizontalAxisNamePadding;
            ja = 0;
            var g = g.staggerLines,sa = Y,ya = !1;
            if (c.title && c.title.text != w)u = c.title.style,R.setStyle(u),G = R.getOriSize("W").height,c.title.rotation = 0,q = R.getSmartText(c.title.text, h, j),
                J = q.height;
            d.chart.marginLeft != parseInt(e.chart.chartleftmargin, 10) && (s = !0);
            d.chart.marginRight != parseInt(e.chart.chartrightmargin, 10) && (ia = !0);
            ja = h - m;
            switch (S) {
                case "none":
                    Z = P = !0;
                    break;
                case "rotate":
                    E = ha ? 300 : 270;
                    V = D;
                    D = r;
                    r = V;
                    Z = !0;
                    break;
                case "stagger":
                    W = Z = !0,e = Math.floor((j - G) / D),e < g && (g = e)
            }
            p.isBar && (Z = !0);
            e = 0;
            m = c.plotLines;
            if (typeof d._FCconf.isXYPlot === $a && !p.isBar) {
                for (ca = m.length; e < ca; e += 1)(k = m[e]) && k.label && typeof k.label.text !== $a && (k.isGrid ? fa.push(k) : k.isTrend && ka.push(k));
                q = c.plotBands;
                e =
                    0;
                for (ca = q.length; e < ca; e += 1)(k = q[e]) && k.label && typeof k.label.text !== $a && ka.push(k);
                q = fa.length - 1;
                ca = fa.length;
                W && (g > ca ? g = ca : g < 2 && (g = 2));
                if (ca) {
                    c.scroll && c.scroll.viewPortMin && c.scroll.viewPortMax ? (V = c.scroll.viewPortMin,B = c.scroll.viewPortMax,ia = s = !1) : (V = c.min,B = c.max);
                    e = (fa[q].value - fa[0].value) * ea;
                    da = e / ($ - 1);
                    ta = (fa[0].value - V) * ea;
                    e = (B - fa[q].value) * ea;
                    S === "auto" ? da < C && (E = ha ? 300 : 270,V = D,D = r,r = V,Z = !0) : S === "stagger" && (da *= g);
                    M = (ta + M) * 2;
                    if ((o = m[0].label) && o.text)o.style && R.setStyle(o.style),C = Math.min(da,
                        R.getOriSize(o.text).width + 4),C > M && (ma = (C - M) / 2);
                    M = (e + z) * 2;
                    if ((o = m[q].label) && o.text)o.style && R.setStyle(o.style),C = Math.min(da, R.getOriSize(o.text).width + 4),C > M && (Q = (C - M) / 2);
                    e = ma + Q;
                    e > 0 && (ja > e ? (z = (z = Q * h / (Q + h)) ? z + 4 : 0,d.chart.marginRight += z,h -= z,z = (z = ma * h / (ma + h)) ? z + 4 : 0,d.chart.marginLeft += z,h -= z,ea = h / (c.max - c.min)) : ma < Q ? ja >= Q && ia ? (z = (z = Q * h / (Q + h)) ? z + 4 : 0,d.chart.marginRight += z,h -= z,ea = h / (c.max - c.min)) : s && (z = (z = ma * h / (ma + h)) ? z + 4 : 0,d.chart.marginLeft += z,h -= z,ea = h / (c.max - c.min)) : ja >= ma && s ? (z = (z = ma * h / (ma + h)) ?
                        z + 4 : 0,d.chart.marginLeft += z,h -= z,ea = h / (c.max - c.min)) : ia && (z = (z = Q * h / (Q + h)) ? z + 4 : 0,d.chart.marginRight += z,h -= z,ea = h / (c.max - c.min)),e = (fa[q].value - fa[0].value) * ea,da = e / ($ - 1));
                    !W && !P && (L ? (da *= L,da = Math.max(da, r)) : (F = Math.ceil(r / da),da *= F));
                    for (B = 0; B < ca; B += 1)if (k = fa[B],B % F && k.label)k.label.text = w; else if (k && k.label && t(k.label.text) !== void 0) {
                        o = k.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        if (!P)s = E || W ? R.getOriSize(o.text) : R.getSmartText(o.text, da - 4, j, Z),N.w = la(N.w, s.width + 4),N.h = la(N.h, s.height)
                    }
                }
                B =
                    0;
                for (ca = ka.length; B < ca; B += 1)if ((k = ka[B]) && k.label && t(k.label.text) !== void 0) {
                    o = k.label;
                    if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                    s = R.getOriSize(o.text);
                    o.verticalAlign === hb ? Y = la(Y, s.height) : pa = la(pa, s.height)
                }
                c.scroll && c.scroll.enabled && !E && !P && (z = N.w / 2,d.chart.marginLeft < z && (M = z - d.chart.marginLeft,ja > M && (h -= M,ja -= M,d.chart.marginLeft += M)),d.chart.marginRight < z && (M = z - d.chart.marginRight,ja > M && (h -= M,ja -= M,d.chart.marginRight += M)))
            } else {
                var L = {},Da;
                ta = Q = 0;
                var za = null,Ba = null,$ = {},ya = !0,ea = h /
                    (c.max - c.min),S = function(b, e, g) {
                    var h,j,m,s,y,p;
                    p = b.plotObj;
                    y = b.labelTextWidth;
                    if (!y) {
                        o = p.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        y = R.getOriSize(o.text).width + 4;
                        b.oriWidth = y;
                        y > Da && (y = Da);
                        b.labelTextWidth = y;
                        b.leftEdge = p.value * ea - y / 2;
                        b.rightEdge = p.value * ea + y / 2;
                        if (g)y = Math.min(y, 2 * (k.value - c.min) * ea + d.chart.marginLeft),b.labelTextWidth = y
                    }
                    if (typeof e !== $a) {
                        g = e.plotObj;
                        o = g.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        e.oriWidth ? m = e.oriWidth : (m = R.getOriSize(o.text).width + 4,e.oriWidth =
                            m);
                        m > Da && (m = Da);
                        e.labelTextWidth = m;
                        e.leftEdge = g.value * ea - m / 2;
                        e.rightEdge = g.value * ea + m / 2;
                        h = p.value * ea;
                        j = h + y / 2;
                        s = g.value * ea;
                        m = s - m / 2;
                        if (m < j)if (h + r < s - r)j -= m,h = s - h,b.labelTextWidth = j > h ? Math.min(y, h) : Math.max(r, y - j / 2),e.labelTextWidth = 2 * (h - b.labelTextWidth / 2),b.leftEdge = p.value * ea - b.labelTextWidth / 2,b.rightEdge = p.value * ea + b.labelTextWidth / 2,e.leftEdge = g.value * ea - e.labelTextWidth / 2,e.rightEdge = g.value * ea + e.labelTextWidth / 2; else return e.labelTextWidth = 0,g.label.text = w,!1
                    } else if (g)y = Math.min(y, 2 * (c.max -
                        k.value) * ea + d.chart.marginRight),b.labelTextWidth = y,b.leftEdge = p.value * ea - y / 2,b.rightEdge = p.value * ea + y / 2;
                    b.nextCat = e;
                    return!0
                };
                W ? g > ca ? g = ca : g < 2 && (g = 2) : g = 1;
                for (ca = m.length; e < ca; e += 1)if ((k = m[e]) && k.label && typeof k.label.text !== $a)k.isGrid ? (ma = {plotObj:k},k.isCat && (q = e % g,L[q] || (L[q] = []),za ? (Ba = ma,L[q].push(Ba)) : (Ba = za = ma,L[q].push(za))),fa.push(ma)) : k.isTrend && ka.push({plotObj:k});
                q = c.plotBands;
                e = 0;
                for (ca = q.length; e < ca; e += 1)(k = q[e]) && k.isTrend && k.label && typeof k.label.text !== $a && ka.push({plotObj:k});
                if (fa.length)if (!P && !E)if (p.distributedColumns) {
                    e = 0;
                    for (ca = fa.length; e < ca; e += 1)if (B = fa[e],ia = e % g,k = B.plotObj,k.label && k.isCat) {
                        e - g >= 0 ? (s = fa[e - g],ia = s.plotObj.value * ea + s.plotObj._weight * ea / 2) : (s = null,ia = c.min * ea - M);
                        e + g < ca ? (V = fa[e + g],V = V.plotObj.value * ea - V.plotObj._weight * ea / 2) : (V = null,V = c.max * ea + z);
                        o = k.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        ma = k.value * ea;
                        ja = ma - k._weight * ea / 2;
                        L = ma + k._weight * ea / 2;
                        g > 1 ? (s = ja - ia,ia = L + V,ia = L - ja + Math.min(s, ia)) : ia = L - ja;
                        ia < r ? (k.label.text = w,B.labelTextWidth =
                            0) : (B.labelTextWidth = ia,o = k.label,o.style && o.style !== u && R.setStyle(o.style),s = R.getSmartText(o.text, ia - 4, j, Z),ia = s.width + 4,B.labelTextWidth = ia,N.h = Math.max(N.h, s.height))
                    }
                } else {
                    ca = fa.length;
                    q = fa.length - 1;
                    (e = (fa[q].plotObj.value - fa[0].plotObj.value) * ea) ? (Da = e * 0.1,m = Math.max(e * 0.2, e / ca)) : m = Da = h;
                    for (B in L) {
                        e = 0;
                        for (C = L[B].length; e < C;) {
                            for (ma = e + 1; !S(L[B][e], L[B][ma]);)ma += 1;
                            e = ma
                        }
                    }
                    za && (ta = (za.plotObj.value - c.min) * ea + M - za.labelTextWidth / 2);
                    k = fa[0].plotObj;
                    if (!za || k !== za.plotObj) {
                        o = k.label;
                        if (o.style && o.style !==
                            u)u = o.style,R.setStyle(u);
                        C = R.getOriSize(o.text).width + 4;
                        ma = (k.value - c.min) * ea + M;
                        za && (e = ta - ma,C = e < C && e > r / 2 ? e * 2 : 0);
                        fa[0].labelTextWidth = C;
                        C > 0 && (V = ma - C / 2);
                        V < ta && (ta = V)
                    }
                    if (Ba)C = Ba.labelTextWidth,Q = (c.max - Ba.plotObj.value) * ea + z - C / 2;
                    k = fa[q].plotObj;
                    if (!Ba || k !== Ba.plotObj) {
                        o = k.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        C = R.getOriSize(o.text).width + 4;
                        ma = (c.max - k.value) * ea + z;
                        Ba && (e = ma - Q,C = e < C && e > r / 2 ? e * 2 : 0);
                        fa[q].labelTextWidth = C;
                        C > 0 && (V = ma - C / 2);
                        V < Q && (Q = V)
                    }
                    ma = ta < 0 ? -ta : 0;
                    Q = Q < 0 ? -Q : 0;
                    e = ma + Q;
                    if (e > 0)for (B in ja >
                        e ? (z = (z = Q * h / (Q + h)) ? z + 4 : 0,d.chart.marginRight += z,h -= z,z = (z = ma * h / (ma + h)) ? z + 4 : 0,d.chart.marginLeft += z,h -= z,ea = h / (c.max - c.min)) : ma < Q ? ja >= Q && ia ? (z = (z = Q * h / (Q + h)) ? z + 4 : 0,d.chart.marginRight += z,h -= z,ea = h / (c.max - c.min)) : s && (z = (z = ma * h / (ma + h)) ? z + 4 : 0,d.chart.marginLeft += z,h -= z,ea = h / (c.max - c.min)) : ja >= ma && s ? (z = (z = ma * h / (ma + h)) ? z + 4 : 0,d.chart.marginLeft += z,h -= z,ea = h / (c.max - c.min)) : ia && (z = (z = Q * h / (Q + h)) ? z + 4 : 0,d.chart.marginRight += z,h -= z,ea = h / (c.max - c.min)),z = d.chart.marginRight,M = d.chart.marginLeft,e = (fa[q].plotObj.value -
                        fa[0].plotObj.value) * ea,Da = e * 0.1,m = Math.max(e * 0.2, e / ca),L) {
                        e = 0;
                        for (C = L[B].length; e < C;) {
                            for (ma = e + 1; !S(L[B][e], L[B][ma], !0);)ma += 1;
                            e = ma
                        }
                        B += 1
                    }
                    e = 0;
                    for (ca = fa.length; e < ca; e += 1)if (B = fa[e],ia = e % g,k = B.plotObj,k.label)if (k.isCat)B.labelTextWidth && ($[ia] = B); else {
                        V = (s = $[ia]) ? s.nextCat : L[ia] ? L[ia][0] : null;
                        s = null;
                        if (e >= g) {
                            ia = e - g;
                            for (s = fa[ia]; !s.labelTextWidth;)if (ia >= g)ia -= g,s = fa[ia]; else {
                                s = null;
                                break
                            }
                        }
                        ia = s ? s.rightEdge : c.min * ea - M;
                        V = V ? V.leftEdge : c.max * ea + z;
                        o = k.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        C = R.getOriSize(o.text).width + 4;
                        ja = k.value * ea - C / 2;
                        if (p.isBar && e == ca - 1 && s) {
                            if (ia > ja)s.plotObj.label.text = w,s.labelTextWidth = 0,ia = s.leftEdge
                        } else if (ia > ja || V < ja + C) {
                            k.label.text = w;
                            B.labelTextWidth = 0;
                            continue
                        }
                        ia = Math.max(ia, ja);
                        ma = k.value * ea;
                        ia = 2 * Math.min(ma - ia, V - ma);
                        ia < r ? (k.label.text = w,B.labelTextWidth = 0) : (B.labelTextWidth = ia,o = k.label,o.style && o.style !== u && R.setStyle(o.style),s = R.getSmartText(o.text, ia - 4, j, Z),ia = s.width + 4,B.labelTextWidth = ia,B.leftEdge = ma - ia / 2,B.rightEdge = ma + ia / 2,N.h = Math.max(N.h, s.height))
                    }
                    s =
                        z = ia = M = null;
                    e = 0;
                    for (ca = fa.length; e < ca; e += 1)if (B = fa[e],k = B.plotObj,ia = e % g,k.isCat && B.labelTextWidth) {
                        s = z = null;
                        ma = k.value * ea;
                        if (e >= g) {
                            ia = e - g;
                            for (s = fa[ia]; !s.labelTextWidth;)if (ia > g)ia -= g,s = fa[ia]; else {
                                s = null;
                                break
                            }
                        }
                        s = s ? ma - s.rightEdge : ma - c.min * ea + d.chart.marginLeft;
                        if (e + g < ca) {
                            M = e + g;
                            for (z = fa[M]; !z.labelTextWidth;)if (M + g < ca - 1)M += g,z = fa[M]; else {
                                z = null;
                                break
                            }
                        }
                        ia = z ? z.leftEdge - ma : c.max * ea + d.chart.marginRight - ma;
                        ia = Math.min(s, ia) * 2;
                        ia > m && (ia = m);
                        if (ia > B.oriWidth)ia = B.oriWidth;
                        B.labelTextWidth = ia;
                        o = k.label;
                        o.style &&
                            o.style !== u && R.setStyle(o.style);
                        s = R.getSmartText(o.text, ia - 4, j, Z);
                        B.labelTextWidth = s.width + 4;
                        N.h = Math.max(N.h, s.height);
                        B.rightEdge = ma + B.labelTextWidth / 2
                    }
                } else if (E) {
                    e = 0;
                    for (ca = fa.length; e < ca; e += 1)if ((k = fa[e].plotObj) && k.label && k.label.text) {
                        o = k.label;
                        if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                        B = 1;
                        if (e + B < ca)for (z = fa[B + e].plotObj; z && (z.value - k.value) * ea < r;)if (k.isCat) {
                            if (z.label) {
                                z.label.text = w;
                                B += 1;
                                if (B + e >= ca - 1)break;
                                z = m[B + e].plotObj
                            }
                        } else if (z.isCat) {
                            k.label.text = w;
                            k = z;
                            e += B - 1;
                            o = k.label;
                            if (o.style &&
                                o.style !== u)u = o.style,R.setStyle(u);
                            break
                        }
                        N.w = Math.max(N.w, R.getOriSize(o.text).width + 4)
                    }
                }
                B = 0;
                for (ca = ka.length; B < ca; B += 1)if ((k = ka[B].plotObj) && k.label && t(k.label.text) !== void 0) {
                    o = k.label;
                    if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                    s = R.getOriSize(o.text);
                    o.verticalAlign === hb ? Y = la(Y, s.height) : pa = la(pa, s.height)
                }
            }
            ja = P ? D : E ? N.w : W ? g * D : N.h;
            ja > 0 && (sa += K + ja);
            J > 0 && (sa += J + ra);
            N = pa + sa + 2;
            V = 0;
            N > j && (e = N - j,ra > e ? (ra -= e,e = 0) : (e -= ra,ra = 0,K > e ? (K -= e,e = 0) : (e -= K,K = 0)),pa > e ? (pa -= e,e = 0) : (pa > 0 && (e -= pa,pa = 0),e > 0 && (Y > e ?
                (Y -= e,e = 0) : (Y > 0 && (e -= Y,Y = 0),e > 0 && ((V = J - G) > e ? (J -= e,e = 0) : (e -= V,J = G,e > 0 && ((V = ja - D) > e ? (ja -= e,e = 0) : (e -= V,ja = D,e > 0 && (e -= J + ra,J = 0,e > 0 && (e -= ja,ja = 0,e > 0 && (K -= e)))))))))));
            K += U;
            var sa = p.is3d ? -d.chart.xDepth : 0,j = ja + K,Ca,p = sa,z = D * 0.5,G = D + K;
            ca = fa.length;
            N = 0;
            if (ya)if (E) {
                da = Pa;
                Ca = ha ? K + 8 : K + 4;
                ca = fa.length;
                for (B = 0; B < ca; B += 1)if ((k = fa[B].plotObj) && k.label && t(k.label.text) !== void 0) {
                    o = k.label;
                    if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                    e = 1;
                    s = R.getSmartText(o.text, ja - 4, r, Z);
                    o.text = s.text;
                    p = sa + z / 2;
                    o.y = Ca;
                    o.x = p;
                    o.rotation =
                        E;
                    o.textAlign = da;
                    N += 1
                }
            } else {
                ya = ja;
                da = Ua;
                Ca = G;
                for (B = 0; B < ca; B += F)if ((k = fa[B].plotObj) && k.label && t(k.label.text) !== void 0) {
                    o = k.label;
                    if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                    if (!P)s = R.getSmartText(o.text, fa[B].labelTextWidth - 4, ya, Z),o.text = s.text,W && (Ca = G + N % g * D);
                    o.y = Ca;
                    o.x = p;
                    o.rotation = E;
                    o.textAlign = da;
                    N += 1
                }
            } else {
                E ? (ya = da,M = ja - 4,da = Pa,Ca = ha ? K + 8 : K + 4) : W ? (ya = D,M = da * g - 4,da = Ua) : (ya = ja,M = da - 4,da = Ua,Ca = G);
                for (B = 0; B < ca; B += F)if ((k = fa[B]) && k.label && t(k.label.text) !== void 0) {
                    o = k.label;
                    if (o.style && o.style !==
                        u)u = o.style,R.setStyle(u);
                    if (!P)s = R.getSmartText(o.text, M, ya, Z),o.text = s.text,W && (Ca = G + N % g * D),E && (p = sa + z / 2);
                    o.y = Ca;
                    o.x = p;
                    o.rotation = E;
                    o.textAlign = da;
                    N += 1
                }
            }
            ca = ka.length;
            for (B = D = E = 0; B < ca; B += 1)if ((k = ka[B].plotObj ? ka[B].plotObj : ka[B]) && k.label && t(k.label.text) !== void 0) {
                o = k.label;
                if (o.style && o.style !== u)u = o.style,R.setStyle(u);
                o.verticalAlign === hb ? (s = R.getSmartText(o.text, h, Y, !0),D = Math.max(D, s.height),o.text = s.text,o.y = j + R.getOriSize("W").height,o.x = p) : (s = R.getSmartText(o.text, h, pa, !0),E = Math.max(E,
                    s.height),o.text = s.text,o.y = -(pa - R.getOriSize("W").height + K + 2))
            }
            if (J > 0)R.setStyle(c.title.style),q = R.getSmartText(c.title.text, h, J),c.title.text = q.text,c.title.margin = j + D + ra;
            sa = D;
            ja > 0 && (sa += K + ja - U);
            J > 0 && (sa += J + ra);
            d.chart.marginBottom += sa;
            E > 0 && (d.chart.marginTop += E,sa += E);
            return sa
        },nc = function(c, g, n, e, h) {
            var y = c.legend,m = c.chart,k = m.paletteIndex,s = m.is3D ? Bb.chart3D : Bb.chart2D,q = m.useRoundEdges,B = b(g.legendiconscale, 1),t = (parseInt(y.itemStyle.fontSize, 10) || 10) - 1,o = 3;
            if (B <= 0 || B > 5)B = 1;
            y.padding = 4;
            t <=
                0 && (t = 1);
            h -= 8;
            t *= B;
            o *= B;
            t = Math.min(t, h);
            t <= 0 && (o = t = 0);
            y.symbolWidth = t;
            y.symbolPadding = o;
            y.textPadding = 4;
            y.legendHeight = h = t + 2 * o;
            y.rowHeight = Math.max(parseInt(y.itemStyle.lineHeight, 10) || 12, h);
            n ? (y.align = Pa,y.verticalAlign = "middle",y.layout = "vertical") : y.x = (m.marginLeft - m.spacingLeft - m.marginRight + m.spacingRight) / 2;
            n = d(g.legendbordercolor, j[s.legendBorderColor][k]);
            m = b(g.legendborderalpha, 100);
            h = b(g.legendbgalpha, 100);
            y.backgroundColor = D(d(g.legendbgcolor, j[s.legendBgColor][k]), h);
            y.borderColor = D(n,
                m);
            y.borderWidth = b(g.legendborderthickness, !q || g.legendbordercolor ? 1 : 0);
            y.shadow = Boolean(b(g.legendshadow, 1));
            if (y.shadow)y.shadow = {enabled:y.shadow,opacity:la(m, h) / 100};
            y.reversed = Boolean(b(g.reverselegend, 0));
            if (e)y.reversed = !y.reversed;
            y.style = {padding:4};
            Boolean(b(g.interactivelegend, 1)) ? y.symbolStyle = {_cursor:"hand",cursor:"pointer"} : (c.plotOptions.series.events.legendItemClick = Nb,y.itemStyle.cursor = "default",y.itemHoverStyle = {cursor:"inherit"});
            y.borderRadius = q ? 3 : 0;
            y.legendAllowDrag = Boolean(b(g.legendallowdrag,
                0));
            y.title.text = C(p(g.legendcaption, w));
            y.legendScrollBgColor = ka(d(g.legendscrollbgcolor, j.altHGridColor[c.chart.paletteIndex]));
            y.legendScrollBarColor = d(g.legendscrollbarcolor, n);
            y.legendScrollBtnColor = d(g.legendscrollbtncolor, n);
            y.title.style = sa({fontWeight:"bold"}, y.itemStyle)
        },Jb = k.placeLegendBlockRight = function(c, g, d, e, h) {
            nc(c, g.chart, !0, h, d);
            var j = 0,m = c.series,k,s,p = c[I].smartLabel,q = c.legend,t,o = q.textPadding,u = q.title.padding,r = q.symbolWidth + 2 * q.symbolPadding,C = e * 2,M = 0,g = b(g.chart.legendpadding,
                7),D = 2 * q.padding,E = {width:D,height:D};
            d -= D;
            h && (m = m && m[0] && m[0].data);
            if (typeof m === $a || typeof m.length === $a)return 0; else k = m.length;
            t = d - r - 2 - o;
            t < 0 && (t = 0);
            for (p.setStyle(q.itemStyle); j < k; j += 1)if (s = m[j],s.showInLegend !== !1)t === 0 ? (E.height += r,s.name = w) : (h = p.getSmartText(s.name, t, C),s.name = h.text,E.height += Math.max(h.height, r),M = Math.max(h.width, M));
            q.width = M + r + 2 + o + D;
            if (q.title.text !== w) {
                p.setStyle(q.title.style);
                h = p.getSmartText(q.title.text, d, C);
                q.title.text = h.text;
                j = h.width + D;
                if (q.width < j)q.initialItemX =
                    (j - q.width) / 2,q.width = j;
                E.height += h.height + u
            }
            q.height = q.totalHeight = E.height;
            if (q.height > e)q.height = e,q.scroll.enabled = !0,q.width += (q.scroll.scrollBarWidth = 10) + (q.scroll.scrollBarPadding = 2);
            g = Math.min(q.width + g, d);
            c.chart.marginRight += g;
            return g
        },Xb = k.placeLegendBlockBottom = function(c, g, d, e, h) {
            nc(c, g.chart, !1, h, d);
            var j = 0,m = c.series,k = c[I].smartLabel,s = c.legend,p,t,u = s.textPadding,o = s.title.padding,T = s.symbolPadding;
            t = s.legendHeight;
            var r = g.chart,C = 0,M = e * 2,D = s.rowHeight,E = [],J = b(r.minimisewrappinginlegend,
                0),r = b(parseInt(r.legendnumcolumns, 10), 0),F = 0,G = 0,L = 0,N = p = 0,Z = 2 * s.padding,g = b(g.chart.legendpadding, 7),W = {width:Z,height:Z};
            r < 0 && (r = 0);
            d -= Z;
            k.setStyle(s.itemStyle);
            p = k.getSmartText(q).height;
            g = Math.min(g, e - p - 8);
            e -= g;
            h && (m = m && m[0] && m[0].data);
            if (typeof m === $a || typeof m.length === $a)return 0; else h = m.length;
            for (k.setStyle(s.itemStyle); j < h; j += 1)m[j].showInLegend !== !1 && (p = k.getOriSize(m[j].name),F = Math.max(F, p.width),G += p.width,L += 1);
            p = G / L;
            p += t + 2 + u;
            F += t + 2 + u;
            r > 0 && L < r && (r = L);
            r > 0 && (N = d / r) > p ? N > F && (N = F) : d >
                F && (J || p * 1.5 > F) ? (r = Math.floor(d / F),L < r && (r = L),N = F) : d >= 2 * p ? (r = Math.floor(d / p),L < r && (r = L),N = Math.floor(d / r),N > F && (N = F)) : (r = 1,N = d);
            s.itemWidth = N;
            t = N - t - 2 - u;
            t < 0 && (T = t = u = 0);
            s.symbolPadding = T;
            s.textPadding = u;
            s.width = N * r + Z;
            if (s.title.text !== w) {
                k.setStyle(s.title.style);
                p = k.getSmartText(s.title.text, d, M);
                s.title.text = p.text;
                j = p.width + Z;
                if (s.width < j)s.initialItemX = (j - s.width) / 2,s.width = j;
                C = p.height + o
            }
            k.setStyle(s.itemStyle);
            o = 0;
            if (s.reversed)for (j = h - 1; j >= 0; j -= 1) {
                if (d = m[j],d.showInLegend !== !1) {
                    if (t === 0)E[o] =
                        !0,d.name = w; else {
                        p = k.getSmartText(d.name, t, M);
                        for (d.name = p.text; E[o] === !0;)o += 1;
                        d = p.height / D;
                        T = o;
                        for (u = 0; u < d; u += 1,T += r)E[T] = !0
                    }
                    o += 1
                }
            } else for (j = 0; j < h; j += 1)if (d = m[j],d.showInLegend !== !1) {
                if (t === 0)E[o] = !0,d.name = w; else {
                    p = k.getSmartText(d.name, t, M);
                    for (d.name = p.text; E[o] === !0;)o += 1;
                    d = p.height / D;
                    T = o;
                    for (u = 0; u < d; u += 1,T += r)E[T] = !0
                }
                o += 1
            }
            W.height += Math.ceil(E.length / r) * D + C;
            s.height = s.totalHeight = W.height;
            s.rowHeight = D;
            s.legendNumColumns = r;
            if (s.height > e)s.height = e,s.scroll.enabled = !0,s.width += (s.scroll.scrollBarWidth =
                10) + (s.scroll.scrollBarPadding = 2);
            g += s.height;
            c.chart.marginBottom += g;
            return g
        },Ha = function(b, d) {
            return b.value - d.value
        },Pb = k.adjustVerticalCanvasMargin = function(c, d, n, e) {
            var h = d.chart,j = d = 0,m = 0,k = b(h.canvastopmargin, 0),h = b(h.canvasbottommargin, 0),s = k / (k + h),p = c.chart.marginTop,q = c.chart.marginBottom;
            h > q && (d += h - q);
            k > p && (d += k - p);
            d > n ? k > p && h > q ? (j = n * s,m = n * (1 - s)) : k > p ? j = n : m = n : d > 0 && (h > q && (m = h - q),k > p && (j = k - p));
            j && (c.chart.marginTop += j);
            m && (c.chart.marginBottom += m,e && e.title && (e.title.margin += m));
            return j +
                m
        },Wb = k.adjustHorizontalCanvasMargin = function(c, d, n, e, h) {
            var j = d.chart,d = b(j.canvasleftmargin, 0),j = b(j.canvasrightmargin, 0),m = d / (d + j),k = 0,s = c.chart.marginLeft,p = c.chart.marginRight,q = 0,t = 0;
            d > s && (k += d - s);
            j > p && (k += j - p);
            k > n ? d > s && j > p ? (q = n * m,t = n * (1 - m)) : j > p ? t = n : q = n : k > 0 && (d > s && (q = d - s),j > p && (t = j - p));
            q && (c.chart.marginLeft += q,e && e.title && (e.title.margin += q));
            t && (c.chart.marginRight += t,h && h.title && (h.title.margin += t));
            return t + q
        };
        Ka("base", {init:function(b, d, n) {
            if (!this.standaloneInit)return new k.createDialog(b,
                "Chart type not supported");
            d = sa({}, d);
            d.chart = d.chart || d.graph || {};
            delete d.graph;
            return this.chart(b, this.name, d, b.offsetWidth || parseFloat(b.style.width), b.offsetHeight || parseFloat(b.style.height), n)
        },chart:function(c, g, n, e, h, k) {
            var m,p,s,q,u,ba = this.defaultSeriesType,o,T,r = n.chart,V,M,F,E;
            m = P(n, e, h);
            E = m.chart;
            F = m.xAxis;
            o = m[I];
            o.useEllipsesWhenOverflow = b(r.useellipseswhenoverflow, r.useellipsewhenoverflow, 1);
            m.labels.smartLabel = u = o.smartLabel = new cc(c, o.useEllipsesWhenOverflow);
            o.width = e;
            o.height =
                h;
            T = m.plotOptions;
            o.isDual = this.isDual;
            o.numberFormatter = new sc(r, g);
            o.axisGridManager = new Y(ba, r);
            o.FCchartName = g;
            E.is3D = c = o.is3d = /3d$/.test(ba);
            E.isBar = p = o.isBar = this.isBar;
            M = r.useroundedges == 1;
            s = c ? Bb.chart3D : Bb.chart2D;
            E.events.click = m.plotOptions.series.point.events.click = o.linkClickFN = Ba(n, k);
            E.defaultSeriesType = ba;
            k = r.palette > 0 && r.palette < 6 ? r.palette : b(this.paletteIndex, 1);
            k -= 1;
            E.paletteIndex = k;
            if (d(r.clickurl) !== void 0)E.link = r.clickurl,E.style.cursor = "pointer",m.plotOptions.series.point.events.click =
                function() {
                    E.events.click.call({link:r.clickurl})
                };
            var G = d(r.basefont, "Verdana"),L = xb(r.basefontsize, 10),U = d(r.basefontcolor, j[s.baseFontColor][k]);
            V = d(r.outcnvbasefont, G);
            var ua = xb(r.outcnvbasefontsize, L),N = ua + Xa,Z = d(r.outcnvbasefontcolor, U).replace(/^#?([a-f0-9]+)/ig, "#$1"),W;
            L += Xa;
            U = U.replace(/^#?([a-f0-9]+)/ig, "#$1");
            o.trendStyle = o.outCanvasStyle = {fontFamily:V,color:Z,fontSize:N};
            W = Na(o.trendStyle);
            o.inCanvasStyle = {fontFamily:G,fontSize:L,color:U};
            q = Na(o.inCanvasStyle);
            o.divlineStyle = {fontFamily:G,
                fontSize:L,color:U,lineHeight:q};
            F.labels.style = {fontFamily:V,fontSize:N,lineHeight:W,color:Z};
            m.yAxis[0].labels.style = {fontFamily:V,fontSize:N,lineHeight:W,color:Z};
            m.yAxis[1].labels.style = {fontFamily:V,fontSize:N,lineHeight:W,color:Z};
            m.legend.itemStyle = {fontFamily:V,fontSize:N,lineHeight:W,color:Z};
            m.plotOptions.series.dataLabels.style = {fontFamily:G,fontSize:L,lineHeight:q,color:U};
            m.plotOptions.series.dataLabels.color = m.plotOptions.series.dataLabels.style.color;
            m.tooltip.style = {fontFamily:G,fontSize:L,
                lineHeight:q,color:U};
            m.title.style = {fontFamily:V,color:Z,fontSize:ua + 3 + Xa,fontWeight:"bold"};
            Na(m.title.style);
            m.subtitle.style = {fontFamily:V,color:Z,fontSize:ua + 1 + Xa,fontWeight:"bold"};
            Na(m.subtitle.style);
            F.title.style = {fontFamily:V,color:Z,fontSize:N,fontWeight:"bold"};
            G = Na(F.title.style);
            m.yAxis[0].title.style = {fontFamily:V,color:Z,fontSize:N,lineHeight:G,fontWeight:"bold"};
            m.yAxis[1].title.style = {fontFamily:V,color:Z,fontSize:N,lineHeight:G,fontWeight:"bold"};
            N = {};
            if (n.styles && n.styles.definition instanceof
                Array && n.styles.application instanceof Array) {
                for (V = 0; V < n.styles.definition.length; V += 1)Z = n.styles.definition[V],typeof nb[Z.type.toLowerCase()] === "function" && (N[Z.name.toLowerCase()] = Z);
                for (V = 0; V < n.styles.application.length; V += 1) {
                    Z = n.styles.application[V].styles.split(ta);
                    for (L = 0; L < Z.length; L += 1)if (G = Z[L].toLowerCase(),N[G])nb[N[G].type.toLowerCase()](m, n.styles.application[V].toobject.toLowerCase(), N[G])
                }
            }
            delete m.xAxis.labels.style.backgroundColor;
            delete m.xAxis.labels.style.borderColor;
            delete m.yAxis[0].labels.style.backgroundColor;
            delete m.yAxis[0].labels.style.borderColor;
            delete m.yAxis[1].labels.style.backgroundColor;
            delete m.yAxis[1].labels.style.borderColor;
            o.showTooltip = b(r.showtooltip, 1);
            o.tooltipSepChar = d(r.tooltipsepchar, vb);
            o.showValues = b(r.showvalues, this.showValues, 1);
            o.seriesNameInToolTip = b(r.seriesnameintooltip, 1);
            o.showVLineLabelBorder = b(r.showvlinelabelborder, 1);
            o.rotateVLineLabels = b(r.rotatevlinelabels, 0);
            o.vLineColor = d(r.vlinecolor, "333333");
            o.vLineThickness = d(r.vlinethickness, 1);
            o.vLineAlpha = b(r.vlinealpha,
                80);
            o.vLineLabelBgColor = d(r.vlinelabelbgcolor, "ffffff");
            o.vLineLabelBgAlpha = b(r.vlinelabelbgalpha, c ? 50 : 100);
            m.plotOptions.series.connectNullData = b(r.connectnulldata, 0);
            E.backgroundColor = {FCcolor:{color:d(r.bgcolor, j[s.bgColor][k]),alpha:d(r.bgalpha, j[s.bgAlpha][k]),angle:d(r.bgangle, j[s.bgAngle][k]),ratio:d(r.bgratio, j[s.bgRatio][k])}};
            E.rotateValues = b(r.rotatevalues, 0);
            E.placeValuesInside = b(r.placevaluesinside, 0);
            E.valuePosition = r.valueposition;
            E.valuePadding = b(r.valuepadding, 2);
            E.borderColor = D(d(r.bordercolor,
                c ? "#666666" : j.borderColor[k]), d(r.borderalpha, c ? "100" : j.borderAlpha[k]));
            V = b(r.showborder, c ? 0 : 1);
            E.borderWidth = V ? b(r.borderthickness, 1) : 0;
            E.plotBorderColor = D(d(r.canvasbordercolor, j.canvasBorderColor[k]), d(r.canvasborderalpha, j.canvasBorderAlpha[k]));
            E.plotBorderWidth = c ? 0 : b(r.canvasborderthickness, 2);
            E.bgSWF = d(r.bgimage, r.bgswf);
            E.bgSWFAlpha = b(r.bgimagealpha, r.bgswfalpha, 100);
            V = d(r.bgimagedisplaymode, "none").toLowerCase();
            N = t(r.bgimagevalign, w).toLowerCase();
            Z = t(r.bgimagehalign, w).toLowerCase();
            V ==
                "tile" || V == "fill" || V == "fit" ? (N != eb && N != $ && N != hb && (N = $),Z != kb && Z != $ && Z != Pa && (Z = $)) : (N != eb && N != $ && N != hb && (N = eb),Z != kb && Z != $ && Z != Pa && (Z = kb));
            E.bgImageDisplayMode = V;
            E.bgImageVAlign = N;
            E.bgImageHAlign = Z;
            E.bgImageScale = b(r.bgimagescale, 100);
            E.logoURL = t(r.logourl);
            E.logoPosition = d(r.logoposition, "tl").toLowerCase();
            E.logoAlpha = b(r.logoalpha, 100);
            E.logoLink = t(r.logolink);
            E.logoScale = b(r.logoscale, 100);
            E.logoLeftMargin = b(r.logoleftmargin, 0);
            E.logoTopMargin = b(r.logotopmargin, 0);
            U = d(r.divlinecolor, j[s.divLineColor][k]);
            L = d(r.divlinealpha, c ? j.divLineAlpha3D[k] : j.divLineAlpha[k]);
            V = b(r.divlinethickness, 1);
            N = Boolean(b(r.divlineisdashed, this.divLineIsDashed, 0));
            Z = b(r.divlinedashlen, 4);
            G = b(r.divlinedashgap, 2);
            m.yAxis[0].gridLineColor = D(U, L);
            m.yAxis[0].gridLineWidth = V;
            m.yAxis[0].gridLineDashStyle = N ? J(Z, G, V) : void 0;
            m.yAxis[0].alternateGridColor = p ? D(d(r.alternatevgridcolor, j.altVGridColor[k]), b(r.showalternatevgridcolor, 1) === 1 ? d(r.alternatevgridalpha, j.altVGridAlpha[k]) : ca) : D(d(r.alternatehgridcolor, j.altHGridColor[k]),
                r.showalternatehgridcolor == 0 ? 0 : d(r.alternatehgridalpha, j.altHGridAlpha[k]));
            ua = b(r.vdivlinethickness, 1);
            W = Boolean(b(r.vdivlineisdashed, 0));
            q = b(r.vdivlinedashlen, 4);
            var Q = b(r.vdivlinedashgap, 2);
            F.gridLineColor = D(d(r.vdivlinecolor, j[s.divLineColor][k]), d(r.vdivlinealpha, j.divLineAlpha[k]));
            F.gridLineWidth = ua;
            F.gridLineDashStyle = W ? J(q, Q, ua) : void 0;
            F.alternateGridColor = D(d(r.alternatevgridcolor, j.altVGridColor[k]), r.showalternatehgridcolor === "1" ? d(r.alternatevgridalpha, j.altVGridAlpha[k]) : 0);
            var ua = d(r.canvasbgcolor,
                j[s.canvasBgColor][k]),da;
            W = d(r.canvasbgalpha, j.canvasBgAlpha[k]);
            d(r.showcanvasbg, qb) == ca && (W = "0");
            m.plotOptions.series.shadow = b(r.showshadow, r.showcolumnshadow, this.defaultPlotShadow, j.showShadow[k]);
            if (this.inversed)m.yAxis[0].reversed = !0,m.yAxis[1].reversed = !0;
            if (this.isStacked)this.distributedColumns ? (o.showStackTotal = Boolean(b(r.showsum, 1)),q = b(r.usepercentdistribution, 1),Q = b(r.showpercentvalues, 0),da = b(r.showpercentintooltip, 1),o.showXAxisPercentValues = b(r.showxaxispercentvalues, 1)) : (o.showStackTotal =
                Boolean(b(this.showSum, r.showsum, 0)),q = b(this.stack100percent, r.stack100percent, 0),Q = b(r.showpercentvalues, q),da = b(r.showpercentintooltip, Q)),o.showPercentValues = Q,o.showPercentInToolTip = da,q ? (o.isValueAbs = !0,T[ba].stacking = "percent",o[0].stacking100Percent = !0) : T[ba].stacking = "normal";
            if (this.isDual) {
                if (r.primaryaxisonleft === "0")m.yAxis[0].opposite = !0,m.yAxis[1].opposite = !1;
                m.yAxis[0].showAlways = !0;
                m.yAxis[1].showAlways = !0
            }
            E.useRoundEdges = M && !c && !this.distributedColumns && this.defaultSeriesType !==
                "pie";
            if (E.useRoundEdges)m.plotOptions.series.shadow = b(r.showshadow, r.showcolumnshadow, 1),m.plotOptions.series.borderRadius = 1,m.tooltip.borderRadius = 2,E.plotBorderRadius = 3,E.plotBorderWidth = 0,E.plotShadow = m.plotOptions.series.shadow ? {enabled:!0,opacity:W / 100} : 0;
            m.plotOptions.series.maxColWidth = Math.abs(b(p ? r.maxbarheight : r.maxcolwidth, 50)) || 1;
            m.title.text = C(r.caption);
            m.subtitle.text = C(r.subcaption);
            if (r.showtooltip == ca)m.tooltip.enabled = !1;
            ba = m.tooltip.style;
            m.tooltip.backgroundColor = D(d(ba.backgroundColor,
                r.tooltipbgcolor, j.toolTipBgColor[k]), d(r.tooltipbgalpha, 100));
            m.tooltip.borderColor = D(d(ba.borderColor, r.tooltipbordercolor, j.toolTipBorderColor[k]), d(r.tooltipborderalpha, 100));
            ba.backgroundColor = void 0;
            ba.borderColor = void 0;
            ba.border = void 0;
            m.tooltip.shadow = r.showtooltipshadow == qb ? {enabled:!0,opacity:b(la(r.tooltipbgalpha, r.tooltipborderalpha), 100) / 100} : !1;
            m.tooltip.borderWidth = b(r.tooltipborderthickness, 1);
            if (r.tooltipborderradius)m.tooltip.borderRadius = b(r.tooltipborderradius, 1);
            m.tooltip.padding =
                b(r.tooltippadding, 2);
            if (r.tooltipcolor)ba.color = ka(r.tooltipcolor);
            ba = b(r.plotspacepercent, 20);
            if (ba > 80 || ba < 0)ba = 20;
            o.plotSpacePercent = m.plotOptions.series.groupPadding = ba / 200;
            c ? (E.series2D3Dshift = g === "mscombi3d" ? !0 : Boolean(b(r.use3dlineshift, 0)),E.canvasBaseColor3D = d(r.canvasbasecolor, j.canvasBaseColor3D[k]),E.canvasBaseDepth = b(r.canvasbasedepth, 10),E.canvasBgDepth = b(r.canvasbgdepth, 3),E.showCanvasBg = Boolean(b(r.showcanvasbg, 1)),E.showCanvasBase = Boolean(b(r.showcanvasbase, 1)),p ? (E.xDepth = 5,E.yDepth =
                5,E.showCanvasBg && (o.marginTopExtraSpace += E.canvasBgDepth),o.marginLeftExtraSpace += E.yDepth + (E.showCanvasBase ? E.canvasBaseDepth : 0),o.marginBottomExtraSpace += 5) : (E.xDepth = 10,E.yDepth = 10,E.showCanvasBg && (o.marginRightExtraSpace += E.canvasBgDepth),o.marginBottomExtraSpace += E.yDepth + (E.showCanvasBase ? E.canvasBaseDepth : 0)),ua = ua.split(ta)[0],W = W.split(ta)[0],E.use3DLighting = Boolean(b(r.use3dlighting, 1)),E.plotBackgroundColor = E.use3DLighting ? {FCcolor:{color:Eb(ua, 85) + ta + S(ua, 55),alpha:W + ta + W,ratio:Za,angle:wb(e -
                (E.marginLeft + E.marginRight), h - (E.marginTop + E.marginBottom), 1)}} : D(ua, W),E.canvasBgColor = D(Eb(ua, 80), W),p = d(r.zeroplanecolor, r.divlinecolor, j[s.divLineColor][k]),s = d(r.zeroplanealpha, r.divlinealpha, j.divLineAlpha[k]),E.zeroPlaneColor = D(p, s),E.zeroPlaneBorderColor = D(d(r.zeroplanebordercolor, p), b(r.zeroplaneshowborder, 1) ? s : 0)) : E.plotBackgroundColor = {FCcolor:{color:ua,alpha:W,angle:d(r.canvasbgangle, j.canvasBgAngle[k]),ratio:d(r.canvasbgratio, j.canvasBgRatio[k])}};
            m.exporting.enabled = r.exportenabled ==
                "1" ? !0 : !1;
            m.exporting.url = Boolean(b(r.exportatclient)) ? t(r.exporturl) : m.exporting.url;
            m.exporting.buttons.exportButton.enabled = r.exportshowmenuitem == "0" ? !1 : !0;
            m.exporting.filename = r.exportfilename ? r.exportfilename : "FusionCharts";
            m.exporting.width = e;
            this.series(n, m, g, e, h);
            this.postSeriesAddition(m, n, e, h);
            this.spaceManager(m, n, e, h);
            g = b(r.drawquadrant, 0);
            if (o.isXYPlot && g && (W = F.min,q = F.max,T = m.yAxis[0].min,M = m.yAxis[0].max,Q = b(r.quadrantxval, (W + q) / 2),ua = b(r.quadrantyval, (T + M) / 2),ua >= T && ua <= M && Q >= W && Q <=
                q)) {
                da = D(d(r.quadrantlinecolor, E.plotBorderColor), d(r.quadrantlinealpha, fb));
                var sa = b(r.quadrantlinethickness, E.plotBorderWidth),K = b(r.quadrantlineisdashed, 0),ra = b(r.quadrantlinedashLen, 4),z = b(r.quadrantlinedashgap, 2);
                s = t(r.quadrantlabeltl, w);
                g = t(r.quadrantlabeltr, w);
                n = t(r.quadrantlabelbl, w);
                p = t(r.quadrantlabelbr, w);
                ba = b(r.quadrantlabelpadding, 3);
                K = K ? J(ra, z, sa) : void 0;
                F.plotLines.push({color:da,value:Q,width:sa,dashStyle:K,zIndex:3});
                m.yAxis[0].plotLines.push({color:da,value:ua,width:sa,dashStyle:K,
                    zIndex:3});
                e = e - E.marginRight - E.marginLeft;
                da = h - E.marginTop - E.marginBottom;
                h = o.inCanvasStyle;
                sa = parseInt(h.fontSize, 10);
                W = e / (q - W) * (Q - W);
                q = e - W;
                M = da / (M - T) * (ua - T);
                T = da - M;
                W -= ba;
                q -= ba;
                T -= ba;
                M -= ba;
                ua = ba + sa + Xa;
                Q = da - ba + sa + Xa;
                da = ba + Xa;
                e = e - ba + Xa;
                u.setStyle(h);
                T > 0 && (s !== w && W > 0 && (s = u.getSmartText(s, W, T),m.labels.items.push({html:s.text,zIndex:3,style:{left:da,top:ua,fontSize:h.fontSize,lineHeight:h.lineHeight,fontFamily:h.fontFamily,color:h.color}})),g !== w && q > 0 && (s = u.getSmartText(g, q, T),m.labels.items.push({html:s.text,
                    textAlign:Pa,zIndex:3,style:{left:e,top:ua,fontSize:h.fontSize,lineHeight:h.lineHeight,fontFamily:h.fontFamily,color:h.color}})));
                M > 0 && (n !== w && W > 0 && (s = u.getSmartText(n, W, M),m.labels.items.push({html:s.text,vAlign:hb,zIndex:3,style:{left:da,top:Q,fontSize:h.fontSize,lineHeight:h.lineHeight,fontFamily:h.fontFamily,color:h.color}})),p !== w && q > 0 && (s = u.getSmartText(p, q, M),m.labels.items.push({html:s.text,textAlign:Pa,vAlign:hb,zIndex:3,style:{left:e,top:Q,fontSize:h.fontSize,lineHeight:h.lineHeight,fontFamily:h.fontFamily,
                    color:h.color}})))
            }
            if (this.hasVDivLine && (h = b(r.numvdivlines, 0) + 1,h > 1)) {
                o = o.x.catCount - 1;
                u = F.max;
                var h = o / h,e = !0,g = F.min,R,U = d(r.vdivlinecolor, U),L = b(r.vdivlinealpha, L),ua = b(r.vdivlinethickness, V);
                W = b(r.vdivlineisdashed, N);
                q = b(r.vdivlinedashlen, Z);
                Q = b(r.vdivlinedashgap, G);
                (V = b(r.showalternatevgridcolor, 0)) && (R = D(d(r.alternatevgridcolor, j.altVGridColor[k]), d(r.alternateVGridAlpha, j.altVGridAlpha[k])));
                for (k = h; k < o; k += h,e = !e)e && V && F.plotBands.push({color:R,from:g,to:k,zIndex:1}),F.plotLines.push({width:ua,
                    color:D(U, L),dashStyle:W ? J(q, Q, ua) : void 0,value:k,zIndex:1}),g = k;
                e && V && F.plotBands.push({color:R,from:g,to:u,zIndex:1})
            }
            if (c && E.xDepth > E.marginLeft)E.marginLeft = E.xDepth;
            delete m._FCconf;
            window.console && window.console.log && window.FC_DEV_ENVIRONMENT && console.log(m);
            return m
        },defaultSeriesType:w,paletteIndex:1,creditLabel:!0,placeTitle:Lb,placeLegendBottom:Xb,placeLegendRight:Jb,placeHorizontalAxis:hc,placeVerticalAxis:Cb,placeHorizontalCanvasMarginAdjustment:Wb,placeVerticalCanvasMarginAdjustment:Pb,
            placeHorizontalXYSpaceManager:function(c, g, n, e) {
                var h = c[I],j,m,k,p = g.chart,q,t,w,o,u = h.marginLeftExtraSpace,r = h.marginTopExtraSpace,C = h.marginBottomExtraSpace,M = h.marginRightExtraSpace;
                k = n - (u + M + c.chart.marginRight + c.chart.marginLeft);
                var D = e - (C + c.chart.marginBottom + c.chart.marginTop),E = k * 0.3,n = D * 0.3;
                j = k - E;
                e = D - n;
                q = d(p.legendposition, hb).toLowerCase();
                c.legend.enabled && q === Pa && (j -= Jb(c, g, j / 2, D));
                t = b(p.xaxisnamepadding, 5);
                w = b(p.labelpadding, 2);
                o = p.rotatexaxisname !== ca;
                m = h.x;
                m.verticalAxisNamePadding =
                    t;
                m.verticalAxisValuesPadding = w;
                m.rotateVerticalAxisName = o;
                m.verticalAxisNameWidth = b(p.xaxisnamewidth);
                j -= Cb(c.xAxis, m, c, g, D, j, !1, !1, k);
                j -= Wb(c, g, j, c.xAxis);
                k = j + E;
                c.legend.enabled && q !== Pa && (e -= Xb(c, g, k, e / 2));
                e -= Lb(c, g, k, e / 2);
                m = h[0];
                m.horizontalAxisNamePadding = b(p.yaxisnamepadding, 5);
                m.horizontalLabelPadding = b(p.yaxisvaluespadding, 2);
                m.labelDisplay = "auto";
                m.staggerLines = b(p.staggerlines, 2);
                m.slantLabels = b(p.slantlabels, 0);
                this.xAxisMinMaxSetter(c, g, k);
                e -= hc(c.yAxis[0], m, c, g, k, e, E);
                e -= Pb(c, g, e, c.yAxis[0]);
                pb(n + e, c, p, c.xAxis, h.x.lYLblIdx, !0);
                if (c.legend.enabled && q === Pa) {
                    g = c.legend;
                    h = n + e;
                    if (g.height > h)g.height = h,g.scroll.enabled = !0,h = (g.scroll.scrollBarWidth = 10) + (g.scroll.scrollBarPadding = 2),g.width += h,c.chart.marginRight += h;
                    g.y = 20
                }
                g = (c.chart.marginLeft - b(c.chart.spacingLeft, 0) - (c.chart.marginRight - b(c.chart.spacingRight, 0))) / 2;
                h = c.chart.marginLeft - b(c.chart.spacingLeft, 0);
                p = -(c.chart.marginRight - b(c.chart.spacingRight, 0));
                switch (c.title.align) {
                    case "left":
                        c.title.x = h;
                        break;
                    case "right":
                        c.title.x = p;
                        break;
                    default:
                        c.title.x = g
                }
                switch (c.subtitle.align) {
                    case "left":
                        c.subtitle.x = h;
                        break;
                    case "right":
                        c.subtitle.x = p;
                        break;
                    default:
                        c.subtitle.x = g
                }
                c.chart.marginLeft += u;
                c.chart.marginTop += r;
                c.chart.marginBottom += C;
                c.chart.marginRight += M
            },placeVerticalXYSpaceManager:function(c, g, n, e) {
                var h = c[I],j,m = !0,k = g.chart,p = !1,q,t,w,o = h.marginLeftExtraSpace,u = h.marginTopExtraSpace,r = h.marginBottomExtraSpace,C = h.marginRightExtraSpace,M = n - (o + C + c.chart.marginRight + c.chart.marginLeft),D = e - (r + c.chart.marginBottom + c.chart.marginTop),
                    n = M * 0.3,e = D * 0.3,E = M - n,M = D - e,F = d(k.legendposition, hb).toLowerCase();
                c.legend.enabled && F === Pa && (E -= Jb(c, g, E / 2, D));
                q = b(k.yaxisnamepadding, 5);
                t = b(k.yaxisvaluespadding, 2);
                w = k.rotateyaxisname !== ca;
                if (h.isDual)p = !0,j = h[1],j.verticalAxisNamePadding = q,j.verticalAxisValuesPadding = t,j.rotateVerticalAxisName = w,j.verticalAxisNameWidth = b(k.syaxisnamewidth),m = c.yAxis[1].opposite,E -= Cb(c.yAxis[1], j, c, g, D, E / 2, m, p);
                j = h[0];
                j.verticalAxisNamePadding = q;
                j.verticalAxisValuesPadding = t;
                j.rotateVerticalAxisName = w;
                j.verticalAxisNameWidth =
                    b(p ? k.pyaxisnamewidth : k.yaxisnamewidth);
                E -= Cb(c.yAxis[0], j, c, g, D, E, !m, p);
                E -= Wb(c, g, E, c.yAxis[0], c.yAxis[1]);
                m = E + n;
                c.legend.enabled && F !== Pa && (M -= Xb(c, g, m, M / 2));
                M -= Lb(c, g, m, M / 2);
                j = h.x;
                j.horizontalAxisNamePadding = b(k.xaxisnamepadding, 5);
                j.horizontalLabelPadding = b(k.labelpadding, 2);
                j.labelDisplay = k.rotatelabels == "1" ? "rotate" : d(k.labeldisplay, "auto").toLowerCase();
                j.staggerLines = b(k.staggerlines, 2);
                j.slantLabels = b(k.slantlabels, k.slantlabel, 0);
                this.xAxisMinMaxSetter(c, g, m);
                M -= hc(c.xAxis, j, c, g, m, M, n);
                M -=
                    Pb(c, g, M, c.xAxis);
                p && pb(e + M, c, k, c.yAxis[1], h[1].lYLblIdx);
                pb(e + M, c, k, c.yAxis[0], h[0].lYLblIdx);
                if (c.legend.enabled && F === Pa) {
                    g = c.legend;
                    h = e + M;
                    if (g.height > h)g.height = h,g.scroll.enabled = !0,h = (g.scroll.scrollBarWidth = 10) + (g.scroll.scrollBarPadding = 2),g.width += h,c.chart.marginRight += h;
                    g.y = 20
                }
                g = (c.chart.marginLeft - b(c.chart.spacingLeft, 0) - (c.chart.marginRight - b(c.chart.spacingRight, 0))) / 2;
                h = c.chart.marginLeft - b(c.chart.spacingLeft, 0);
                k = -(c.chart.marginRight - b(c.chart.spacingRight, 0));
                switch (c.title.align) {
                    case "left":
                        c.title.x =
                            h;
                        break;
                    case "right":
                        c.title.x = k;
                        break;
                    default:
                        c.title.x = g
                }
                switch (c.subtitle.align) {
                    case "left":
                        c.subtitle.x = h;
                        break;
                    case "right":
                        c.subtitle.x = k;
                        break;
                    default:
                        c.subtitle.x = g
                }
                c.chart.marginLeft += o;
                c.chart.marginTop += u;
                c.chart.marginBottom += r;
                c.chart.marginRight += C
            },spaceManager:function() {
                return this.placeVerticalXYSpaceManager.apply(this, arguments)
            },xAxisMinMaxSetter:function(c, d, j) {
                var e = c[I],h = e.x,k = d.chart,m = h.min = b(h.min, 0),p = h.max = b(h.max, h.catCount - 1),s,q = 0,t = 0,w = c.chart.defaultSeriesType,o =
                    /^(column|column3d|bar|bar3d|floatedcolumn)$/.test(w);
                /^(line|area|spline|areaspline)$/.test(w);
                var w = /^(scatter|bubble|candlestick)$/.test(w),u = c.xAxis,r = u.scroll,C = s = Math.min(b(k.canvaspadding, 0), j / 2 - 10);
                if (h.adjustMinMax) {
                    var p = m = !b(k.setadaptivexmin, 1),D = b(this.numVDivLines, k.numvdivlines, 4),J = k.adjustvdiv !== ca,E = b(k.showxaxisvalues, k.showxaxisvalue, 1),G = b(k.showvlimits, E),E = b(k.showvdivlinevalue, k.showvdivlinevalues, E);
                    Vb(u, h, k.xaxismaxvalue, k.xaxisminvalue, m, p, D, J);
                    m = u.min;
                    p = u.max;
                    h.requaredAutoNumeicLabels &&
                    (D = b(parseInt(k.xaxisvaluesstep, 10), 1),Ob(k, c, u, h, G, E, D < 1 ? 1 : D, e.numberFormatter, !1, !0));
                    u.plotLines.sort(Ha)
                }
                u.labels.enabled = !1;
                u.gridLineWidth = 0;
                u.alternateGridColor = F;
                if ((o || e.isScroll) && !e.hasNoColumn)t = e.isBar ? q = 0.55 : q = 0.5;
                e.is3d && (C += b(c.chart.xDepth, 0));
                c = (j - (C + s)) / (p - m + (q + t));
                u.min = m - (q + C / c);
                u.max = p + (t + s / c);
                if (r && r.enabled)q = r.vxLength,t = r.startPercent,c = u.max - u.min,r.viewPortMin = u.min,r.viewPortMax = u.max,r.scrollRatio = q / c,u.min += (c - q) * t,u.max = u.min + q;
                w && d.vtrendlines && mb(d.vtrendlines, u,
                    e, !1, !0, !0)
            },postSeriesAddition:function(b) {
                var d = b[I],j = d.isBar,e = d.is3d,h = b.chart.rotateValues && !j ? 270 : 0;
                if (this.isStacked && d.showStackTotal) {
                    var k,m,p,s = 1 - d.plotSpacePercent,q,t,w,o,u,r,C,D,F,E = parseFloat(d.trendStyle.fontSize);
                    m = d[0];
                    var J = !m.stacking100Percent;
                    p = m.stack;
                    for (k in p) {
                        m = p[k].length;
                        q = s / m;
                        w = -(s - q) / 2;
                        for (t = 0; t < m; t += 1,w += q) {
                            C = p[k][t];
                            r = 0;
                            for (u = C.length; r < u; r += 1)D = C[r],o = r,F = o + w,o = (D.n || 0) + (D.p || 0),D = o < 0 ? D.n : D.p,b.xAxis.plotLines.push({value:F,width:0,isVline:J,isTrend:!J,zIndex:4,
                                label:{align:Ua,textAlign:!e && h === 270 ? o < 0 ? Pa : kb : Ua,offsetScale:J ? D : void 0,offsetScaleIndex:0,rotation:h,style:d.trendStyle,verticalAlign:eb,y:j ? 0 : o < 0 ? h === 270 ? 4 : E : -4,x:0,text:d.numberFormatter.yAxis(o)}})
                        }
                    }
                }
            }});
        Ka("barbase", {spaceManager:function() {
            return this.placeHorizontalXYSpaceManager.apply(this, arguments)
        }}, Ka.base);
        Ka("singleseries", {series:function(b, d, j) {
            if (b.data && b.data.length > 0)d.legend.enabled = !1,j = this.point(j, {data:[],colorByPoint:!0}, b.data, b.chart, d),j instanceof Array ? d.series = d.series.concat(j) :
                d.series.push(j),this.configureAxis(d, b),b.trendlines && mb(b.trendlines, d.yAxis, d[I], !1, this.isBar)
        },defaultSeriesType:w,configureAxis:function(c, d) {
            var j = c[I],e = d.chart,h,k,m,p,s,q,t,w,o,u,r,D,F;
            c.xAxis.title.text = C(e.xaxisname);
            F = b(parseInt(e.yaxisvaluesstep, 10), parseInt(e.yaxisvaluestep, 10), 1);
            F = F < 1 ? 1 : F;
            h = c.yAxis[0];
            k = j[0];
            j.isDual ? (m = e.pyaxismaxvalue,p = e.pyaxisminvalue,h.title.text = C(e.pyaxisname)) : (m = e.yaxismaxvalue,p = e.yaxisminvalue,h.title.text = C(e.yaxisname));
            t = b(this.isStacked ? 0 : this.setAdaptiveYMin,
                e.setadaptiveymin, 0);
            q = s = !t;
            w = b(j.numdivlines, e.numdivlines, 4);
            o = e.adjustdiv !== ca;
            u = b(this.showYAxisValues, e.showyaxisvalues, e.showyaxisvalue, 1);
            r = b(e.showlimits, u);
            D = b(e.showdivlinevalue, e.showdivlinevalues, u);
            Vb(h, k, m, p, s, q, w, o);
            Ob(e, c, h, k, r, D, F, j.numberFormatter, !1);
            if (h.reversed && h.min >= 0)c.plotOptions.series.threshold = h.max;
            if (j.isDual)m = e.syaxismaxvalue,p = e.syaxisminvalue,t = b(e.setadaptivesymin, t),q = s = !t,r = b(e.showsecondarylimits, r),D = b(e.showdivlinesecondaryvalue, u),h = c.yAxis[1],k = j[1],Vb(h,
                k, m, p, s, q, w, o),Ob(e, c, h, k, r, D, F, j.numberFormatter, !0),h.title.text = C(e.syaxisname)
        },pointValueWatcher:function(c, g, j, e, h, k, m) {
            if (g !== null) {
                c = c[I];
                j = b(j, 0);
                c[j] || (c[j] = {});
                j = c[j];
                if (e)this.distributedColumns && (c.marimekkoTotal += g),e = j.stack,h = b(h, 0),k = b(k, 0),m = d(m, $a),e[m] || (e[m] = []),m = e[m],m[k] || (m[k] = []),k = m[k],k[h] || (k[h] = {}),h = k[h],g >= 0 ? h.p ? g = h.p += g : h.p = g : h.n ? g = h.n += g : h.n = g;
                j.max = j.max > g ? j.max : g;
                j.min = j.min < g ? j.min : g
            }
        },getPointStub:function(c, g, j, e) {
            var e = e[I],g = g === null ? g : e.numberFormatter.dataLabels(g),
                h = t(C(c.tooltext)),k = t(C(c.displayvalue)),j = e.showTooltip ? h !== void 0 ? h : g === null ? !1 : j !== w ? j + e.tooltipSepChar + g : g : w,e = b(c.showvalue, e.showValues) ? k !== void 0 ? k : g : w,c = d(c.link);
            return{displayValue:e,toolText:j,link:c}
        }}, Ka.base);
        Ka("multiseries", {series:function(c, d, j) {
            var e,h,k = d[I],m;
            d.legend.enabled = Boolean(b(c.chart.showlegend, 1));
            if (c.dataset && c.dataset.length > 0) {
                this.categoryAdder(c, d);
                e = 0;
                for (h = c.dataset.length; e < h; e += 1)m = {data:[]},m = this.point(j, m, c.dataset[e], c.chart, d, k.oriCatTmp.length, e),
                    m instanceof Array ? d.series = d.series.concat(m) : d.series.push(m);
                this.configureAxis(d, c);
                c.trendlines && !this.isLog && mb(c.trendlines, d.yAxis, k, !1, this.isBar)
            }
        },categoryAdder:function(c, d) {
            var j,e = 0,h = d[I],k = h.axisGridManager,m = d.xAxis,q,h = h.x;
            if (c.categories && c.categories[0] && c.categories[0].category) {
                if (c.categories[0].font)d.xAxis.labels.style.fontFamily = c.categories[0].font;
                if ((j = b(c.categories[0].fontsize)) !== void 0)j < 1 && (j = 1),d.xAxis.labels.style.fontSize = j + Xa,Na(d.xAxis.labels.style);
                if (c.categories[0].fontcolor)d.xAxis.labels.style.color =
                    c.categories[0].fontcolor.split(ta)[0].replace(/^\#?/, "#");
                var s = d[I].oriCatTmp,t = c.categories[0].category;
                for (j = 0; j < t.length; j += 1)t[j].vline ? k.addVline(m, t[j], e, d) : (q = t[j].showlabel === "0" ? w : C(p(c.categories[0].category[j].label, c.categories[0].category[j].name)),k.addXaxisCat(m, e, e, q),s[e] = p(C(c.categories[0].category[j].tooltext), q),e += 1)
            }
            h.catCount = e
        },getPointStub:function(c, g, j, e, h, k, m) {
            var q,e = e[I],s,u,g = g === null ? g : e.numberFormatter.dataLabels(g, m === 1 ? !0 : !1),B,D = t(C(c.tooltext)),m = e.tooltipSepChar;
            e.showTooltip ? D !== void 0 ? h = D : g === null ? h = !1 : (e.seriesNameInToolTip && (B = p(h && h.seriesname)),h = B ? B + m : w,h += j ? j + m : w,e.showPercentInToolTip ? u = !0 : h += g) : h = !1;
            b(c.showvalue, k) ? t(c.displayvalue) !== void 0 ? q = c.displayvalue : e.showPercentValues ? s = !0 : q = g : q = w;
            c = d(c.link);
            return{displayValue:q,toolText:h,link:c,showPercentValues:s,showPercentInToolTip:u}
        }}, Ka.singleseries);
        var Db = function(b, d) {
            return b - d
        };
        Ka("xybase", {hideRLine:function() {
            var b = this.chart.series[this.index + 1];
            b && b.hide && b.hide()
        },showRLine:function() {
            var b =
                this.chart.series[this.index + 1];
            b && b.show && b.show()
        },getRegressionLineSeries:function(b, d, j) {
            var e,h,k,m;
            m = b.sumXY;
            var p = b.sumX,s = b.sumY;
            h = b.xValues;
            k = b.sumXsqure;
            e = b.yValues;
            b = b.sumYsqure;
            d ? (h.sort(Db),e = h[0],h = h[h.length - 1],m = (j * m - p * s) / (j * k - Math.pow(p, 2)),k = !isNaN(m) ? m * (e - p / j) + s / j : s / j,j = !isNaN(m) ? m * (h - p / j) + s / j : s / j,j = [
                {x:e,y:k},
                {x:h,y:j}
            ]) : (e.sort(Db),k = e[0],e = e[e.length - 1],m = (j * m - p * s) / (j * b - Math.pow(s, 2)),h = !isNaN(m) ? m * (k - s / j) + p / j : p / j,j = !isNaN(m) ? m * (e - s / j) + p / j : p / j,j = [
                {x:h,y:k},
                {x:j,y:e}
            ]);
            return j
        },
            pointValueWatcher:function(b, d, j, e) {
                var h = b[I];
                if (d !== null)b = h[0],b.max = b.max > d ? b.max : d,b.min = b.min < d ? b.min : d;
                if (j !== null)b = h.x,b.max = b.max > j ? b.max : j,b.min = b.min < j ? b.min : j;
                e && (j = j || 0,d = d || 0,e.sumX += j,e.sumY += d,e.sumXY += j * d,e.sumXsqure += Math.pow(j, 2),e.xValues.push(j),e.sumYsqure += Math.pow(d, 2),e.yValues.push(d))
            }}, Ka.multiseries);
        Ka("scrollbase", {postSeriesAddition:function(c, g) {
            c.chart.hasScroll = !0;
            var n = c.xAxis.scroll,e = c[I],h = e.width,k = e.x.catCount,m = g.chart;
            e.isScroll = !0;
            if (this.isStacked)p = 1;
            else {
                var p = 0,s = 0,q,t = c.series,u,o = c.chart.defaultSeriesType;
                for (q = t.length; s < q; s++)u = d(t[s].type, o),u === "column" && (p += 1);
                p < 1 && (p = 1)
            }
            k *= p;
            h = b(m.numvisibleplot, Math.floor(h / this.avgScrollPointWidth));
            if (n && h >= 2 && h < k)n.enabled = !0,n.vxLength = h / p,n.startPercent = m.scrolltoend === qb ? 1 : 0,n.padding = b(m.scrollpadding, c.chart.plotBorderWidth / 2),n.height = b(m.scrollheight, 16),n.buttonWidth = b(m.scrollbtnwidth, m.scrollheight, 16),n.buttonPadding = b(m.scrollbtnpadding, 0),n.color = ka(d(m.scrollcolor, j.altHGridColor[c.chart.paletteIndex])),
                e.marginBottomExtraSpace += n.padding + n.height
        }}, Ka.multiseries);
        var Fb = Ka.singleseries,Va = Ka.multiseries;
        Ka("column2dbase", {point:function(c, g, n, e, h) {
            var k,m,q,s,t,u,D,o,F,r,c = n.length;
            k = h[I];
            var G = k.axisGridManager,M = h.xAxis,P = h.chart.paletteIndex,E = k.x,U = h.colors,S = h.colors.length,Q = /3d$/.test(h.chart.defaultSeriesType),ua = this.isBar,N = d(e.showplotborder, Q ? ca : qb) === qb ? Q ? 1 : b(e.plotborderthickness, 1) : 0,Z = h.chart.useRoundEdges,W = b(e.plotborderalpha, e.plotfillalpha, 100),$ = d(e.plotbordercolor, j.plotBorderColor[P]).split(ta)[0],
                Y = 0,da = Boolean(b(e.use3dlighting, 1)),K = h[I].numberFormatter,ka = b(e.plotborderdashed, 0),z = b(e.plotborderdashlen, 5),R = b(e.plotborderdashgap, 4);
            for (q = m = 0; m < c; m += 1)o = n[m],o.vline ? G.addVline(M, o, Y, h) : (k = K.getCleanValue(o.value),s = b(o.showlabel, 1),s = C(!s ? w : p(o.label, o.name)),G.addXaxisCat(M, Y, Y, s),Y += 1,t = d(o.color, U[q % S]) + ta + L(e.plotgradientcolor, j.plotGradientColor[P]),u = d(o.alpha, e.plotfillalpha, fb),D = d(o.ratio, e.plotfillratio),F = d(360 - e.plotfillangle, 90),k < 0 && (F = 360 - F),r = {opacity:u / 100,inverted:ua},
                t = ya(t, u, D, F, Z, $, d(o.alpha, W) + w, ua, Q),u = b(o.dashed, ka) ? J(d(o.dashlen, z), d(o.dashgap, R), N) : void 0,g.data.push(sa(this.getPointStub(o, k, s, h), {y:k,shadow:r,color:t[0],borderColor:t[1],borderWidth:N,use3DLighting:da,dashStyle:u})),this.pointValueWatcher(h, k),q += 1);
            E.catCount = Y;
            return g
        },defaultSeriesType:"column"}, Fb);
        Ka("linebase", {defaultSeriesType:"line",hasVDivLine:!0,defaultPlotShadow:1,point:function(c, g, n, e, h) {
            var k,m,q,s,t,u,D,o,F,r,G,M,L,E,P,U,S,Q,N,Z,W,Y,ca,$,c = n.length,K = h.xAxis;
            k = h[I];
            var da =
                k.axisGridManager,z = 0,R = k.x,la = h.chart.paletteIndex,ha = h[I].numberFormatter;
            P = ka(d(e.linecolor, e.palettecolors, j.plotFillColor[la]));
            U = d(e.linealpha, fb);
            M = b(e.linethickness, 4);
            L = Boolean(b(e.linedashed, 0));
            o = b(e.linedashlen, 5);
            F = b(e.linedashgap, 4);
            g.color = {FCcolor:{color:P,alpha:U}};
            g.lineWidth = M;
            E = b(e.drawanchors, e.showanchors);
            for (t = m = 0; m < c; m += 1)s = n[m],s.vline ? da.addVline(K, s, z, h) : (k = ha.getCleanValue(s.value),q = b(s.showlabel, 1),q = C(!q ? w : p(s.label, s.name)),da.addXaxisCat(K, z, z, q),z += 1,r = ka(d(s.color,
                P)),G = d(s.alpha, U),u = d(s.dashed, L) ? J(o, F, M) : void 0,D = {opacity:G / 100},Q = b(s.anchorsides, e.anchorsides, 0),W = b(s.anchorradius, e.anchorradius, 3),Z = ka(d(s.anchorbordercolor, e.anchorbordercolor, P)),N = b(s.anchorborderthickness, e.anchorborderthickness, 1),Y = ka(d(s.anchorbgcolor, e.anchorbgcolor, j.anchorBgColor[la])),ca = d(s.anchoralpha, e.anchoralpha, fb),$ = d(s.anchorbgalpha, e.anchorbgalpha, ca),S = E === void 0 ? G != 0 : !!E,g.data.push(sa(this.getPointStub(s, k, q, h), {y:k,color:{FCcolor:{color:r,alpha:G}},shadow:D,dashStyle:u,
                marker:{enabled:!!S,fillColor:{FCcolor:{color:Y,alpha:$ * ca / 100 + w}},lineColor:{FCcolor:{color:Z,alpha:ca}},lineWidth:N,radius:W,symbol:rb(Q)}})),this.pointValueWatcher(h, k),t += 1);
            R.catCount = z;
            return g
        }}, Fb);
        Ka("area2dbase", {defaultSeriesType:"area",hasVDivLine:!0,point:function(c, g, n, e, h) {
            var k,m,q,s,u,B,D,o,F,r,G,M,P,E,U,S,Q,Y,N,Z,W,$,c = n.length,da = h.xAxis;
            s = h[I];
            var la = h.chart.paletteIndex,K = s.axisGridManager,ra = s.x,z = 0,R = h[I].numberFormatter;
            s = d(e.plotfillcolor, e.areabgcolor, t(e.palettecolors) ?
                h.colors[0] : j.plotFillColor[la]).split(ta)[0];
            W = ta + L(e.plotgradientcolor, j.plotGradientColor[la]);
            u = d(e.plotfillalpha, e.areaalpha, "90");
            B = b(e.plotfillangle, 270);
            D = d(e.plotbordercolor, e.areabordercolor, t(e.palettecolors) ? h.colors[0] : j.plotBorderColor[la]).split(ta)[0];
            o = e.showplotborder == ca ? ca : d(e.plotborderalpha, e.plotfillalpha, e.areaalpha, fb);
            k = b(e.plotborderangle, 270);
            m = Boolean(b(e.plotborderdashed, 0));
            M = b(e.plotborderdashlen, 5);
            S = b(e.plotborderdashgap, 4);
            Q = b(e.plotborderthickness, e.areaborderthickness,
                1);
            $ = g.fillColor = {FCcolor:{color:s + W,alpha:u,ratio:Za,angle:B}};
            g.lineWidth = Q;
            g.dashStyle = m ? J(M, S, Q) : void 0;
            g.lineColor = {FCcolor:{color:D,alpha:o,ratio:fb,angle:k}};
            S = Boolean(b(e.drawanchors, e.showanchors, 1));
            for (Q = m = 0; m < c; m += 1)M = n[m],M.vline ? K.addVline(da, M, z, h) : (k = R.getCleanValue(M.value),q = b(M.showlabel, 1),q = C(!q ? w : p(M.label, M.name)),K.addXaxisCat(da, z, z, q),z += 1,F = b(M.anchorsides, e.anchorsides, 0),r = b(M.anchorradius, e.anchorradius, 3),G = ka(d(M.anchorbordercolor, e.anchorbordercolor, D)),Y = b(M.anchorborderthickness,
                e.anchorborderthickness, 1),P = ka(d(M.anchorbgcolor, e.anchorbgcolor, j.anchorBgColor[la])),E = d(M.anchoralpha, e.anchoralpha, this.anchorAlpha, ca),U = d(M.anchorbgalpha, e.anchorbgalpha, E),N = t(M.color),Z = b(M.alpha),N = N !== void 0 || Z !== void 0 ? {FCcolor:{color:N ? ka(N) + W : s,alpha:void 0 === Z ? Hb(Z) + w : u,ratio:Za,angle:B}} : $,Z = {opacity:Math.max(Z, o) / 100,inverted:!0},g.data.push(sa(this.getPointStub(M, k, q, h), {y:k,shadow:Z,color:N,marker:{enabled:S,fillColor:{FCcolor:{color:P,alpha:U * E / 100 + w}},lineColor:{FCcolor:{color:G,
                alpha:E}},lineWidth:Y,radius:r,symbol:rb(F)}})),this.pointValueWatcher(h, k),Q += 1);
            ra.catCount = z;
            return g
        }}, Fb);
        Ka("mscolumn2dbase", {point:function(c, g, n, e, h, k, m, p) {
            c = !1;
            if (n.data) {
                var q,u,B,D,o,C,r,F,G,P,E,U,S,Q,Y,N,Z = n.data,W = h[I],$ = d(g.type, this.defaultSeriesType),da = h.plotOptions[$] && h.plotOptions[$].stacking,ka = d(this.isValueAbs, W.isValueAbs, !1),K = b(n.showvalues, W.showValues),la = b(g.yAxis, 0),z = b(e.use3dlighting, 1),R = h[I].numberFormatter,ra = h.chart.paletteIndex,ha = b(n.dashed, e.plotborderdashed,
                    0),ea = b(n.dashlen, e.plotborderdashlen, 5),za = b(n.dashgap, e.plotborderdashgap, 4);
                g.name = t(n.seriesname);
                if (b(n.includeinlegend) === 0 || g.name === void 0)g.showInLegend = !1;
                g.color = d(n.color, h.colors[m % h.colors.length]).split(ta)[0].replace(/^#?/g, "#");
                F = d(e.plotborderthickness, qb);
                G = h.chart.useRoundEdges;
                P = this.isBar;
                E = /3d$/.test(h.chart.defaultSeriesType);
                U = d(e.plotbordercolor, j.plotBorderColor[ra]).split(ta)[0];
                S = e.showplotborder == ca ? ca : d(e.plotborderalpha, fb);
                S = E ? e.showplotborder ? S : ca : S;
                U = E ? d(e.plotbordercolor,
                    "#FFFFFF") : U;
                for (u = 0; u < k; u += 1)(o = Z[u]) ? (q = R.getCleanValue(o.value, ka),q === null ? g.data.push({y:null}) : (c = !0,Q = W.oriCatTmp[u],B = d(o.color, n.color, h.colors[m % h.colors.length]) + ta + L(e.plotgradientcolor, j.plotGradientColor[ra]),D = d(o.alpha, n.alpha, e.plotfillalpha, fb),C = d(o.ratio, n.ratio, e.plotfillratio),r = d(360 - e.plotfillangle, 90),q < 0 && (r = 360 - r),Y = {opacity:D / 100},N = Math.min(D, S) + w,B = ya(B, D, C, r, G, U, N, P, E),D = b(o.dashed, ha) ? J(d(o.dashlen, ea), d(o.dashgap, za), F) : void 0,g.data.push(sa(this.getPointStub(o, q,
                    Q, h, n, K, la), {y:q,shadow:Y,color:B[0],borderColor:B[1],borderWidth:F,use3DLighting:z,dashStyle:D})),this.pointValueWatcher(h, q, la, da, u, p, $))) : g.data.push({y:null})
            }
            if (!c)g.showInLegend = !1;
            return g
        },defaultSeriesType:"column"}, Va);
        Ka("mslinebase", {hasVDivLine:!0,point:function(c, g, k, e, h, p, m) {
            c = !1;
            if (k.data) {
                var q,s,u,B,D,o,C,r,F,G,L,E,P,U,S,Q,N,Z,W,Y,$,ca,K,da,z,R,la,ha,ea = k.data,ra = h[I],pa = d(g.type, this.defaultSeriesType),ja = h.plotOptions[pa] && h.plotOptions[pa].stacking,ia = d(this.isValueAbs, ra.isValueAbs,
                    !1),fa = b(k.showvalues, ra.showValues),ta = b(g.yAxis, 0),ma = ra.numberFormatter;
                g.name = t(k.seriesname);
                R = ka(d(k.color, e.linecolor, h.colors[m % h.colors.length]));
                z = d(k.alpha, e.linealpha, fb);
                m = b(k.linethickness, e.linethickness, 2);
                B = Boolean(b(k.dashed, e.linedashed, 0));
                D = b(k.linedashlen, e.linedashlen, 5);
                o = b(k.linedashgap, e.linedashgap, 4);
                g.color = {FCcolor:{color:R,alpha:z}};
                g.step = this.stepLine;
                g.drawVerticalJoins = Boolean(b(e.drawverticaljoins, 1));
                g.lineWidth = m;
                C = b(k.drawanchors, k.showanchors, e.drawanchors,
                    e.showanchors);
                Z = b(k.anchorsides, e.anchorsides, 0);
                W = b(k.anchorradius, e.anchorradius, 3);
                Y = ka(d(k.anchorbordercolor, e.anchorbordercolor, R));
                $ = b(k.anchorborderthickness, e.anchorborderthickness, 1);
                ca = ka(d(k.anchorbgcolor, e.anchorbgcolor, j.anchorBgColor[h.chart.paletteIndex]));
                K = d(k.anchoralpha, e.anchoralpha, fb);
                da = d(k.anchorbgalpha, e.anchorbgalpha, K);
                if (b(k.includeinlegend) === 0 || g.name === void 0 || z == 0 && C !== 1)g.showInLegend = !1;
                g.marker = {fillColor:{FCcolor:{color:ca,alpha:da * K / 100 + w}},lineColor:{FCcolor:{color:Y,
                    alpha:K + w}},lineWidth:$,radius:W,symbol:rb(Z)};
                for (q = 0; q < p; q += 1)(Q = ea[q]) ? (e = ma.getCleanValue(Q.value, ia),e === null ? g.data.push({y:null}) : (c = !0,U = b(Q.anchorsides, Z),P = b(Q.anchorradius, W),L = ka(d(Q.anchorbordercolor, Y)),E = b(Q.anchorborderthickness, $),G = ka(d(Q.anchorbgcolor, ca)),r = d(Q.anchoralpha, K),F = d(Q.anchorbgalpha, da),s = ka(d(Q.color, R)),u = d(Q.alpha, z),ha = b(Q.dashed, B) ? J(D, o, m) : void 0,N = {opacity:u / 100},la = C === void 0 ? u != 0 : !!C,S = ra.oriCatTmp[q],g.data.push(sa(this.getPointStub(Q, e, S, h, k, fa, ta), {y:e,
                    shadow:N,dashStyle:ha,color:{FCcolor:{color:s,alpha:u}},marker:{enabled:la,fillColor:{FCcolor:{color:G,alpha:F * r / 100 + w}},lineColor:{FCcolor:{color:L,alpha:r}},lineWidth:E,radius:P,symbol:rb(U)}})),this.pointValueWatcher(h, e, ta, ja, q, 0, pa))) : g.data.push({y:null})
            }
            if (!c)g.showInLegend = !1;
            return g
        },defaultSeriesType:"line",defaultPlotShadow:1}, Va);
        Ka("msareabase", {hasVDivLine:!0,point:function(c, g, k, e, h, p, m) {
            c = !1;
            if (k.data) {
                var q,s,t,u,D,o,C,r,F,G,P,E,Q,U,S,Y,N,Z,W,$,da,la,K,ra = k.data,z = h[I],R = d(g.type,
                    this.defaultSeriesType),ya = h.plotOptions[R] && h.plotOptions[R].stacking,ha = d(this.isValueAbs, z.isValueAbs, !1),ea = h._FCconf.linkClickFN;
                W = h.chart.paletteIndex;
                var za = b(k.showvalues, z.showValues),pa = b(g.yAxis, 0),ja = h[I].numberFormatter;
                g.name = d(k.seriesname, w);
                if (b(k.includeinlegend) === 0 || g.name === void 0)g.showInLegend = !1;
                u = d(k.color, h.colors[m % h.colors.length]).split(ta)[0].replace(/^#?/g, "#").split(ta)[0];
                this.isRadar || (u += ta + L(e.plotgradientcolor, j.plotGradientColor[W]));
                D = d(k.alpha, e.plotfillalpha,
                    e.areaalpha, this.isRadar ? "50" : "70");
                o = b(e.plotfillangle, 270);
                C = d(k.plotbordercolor, e.plotbordercolor, e.areabordercolor, this.isRadar ? h.colors[m % h.colors.length] : j.plotFillColor[h.chart.paletteIndex]).split(ta)[0];
                m = d(k.showplotborder, e.showplotborder) == ca ? ca : d(k.plotborderalpha, e.plotborderalpha, k.plotfillalpha, e.plotfillalpha, "95");
                r = b(e.plotborderangle, 270);
                Y = Boolean(b(k.dashed, e.plotborderdashed, 0));
                N = b(k.dashlen, e.plotborderdashlen, 5);
                Z = b(k.dashgap, e.plotborderdashgap, 4);
                q = d(k.plotborderthickness,
                    e.plotborderthickness, 1);
                g.fillColor = {FCcolor:{color:u,alpha:D,ratio:Za,angle:o}};
                g.color = u;
                g.lineColor = {FCcolor:{color:C,alpha:m,ratio:fb,angle:r}};
                g.lineWidth = q;
                g.dashStyle = Y ? J(N, Z, q) : void 0;
                o = Boolean(b(e.drawanchors, e.showanchors, 1));
                C = b(k.anchorsides, e.anchorsides, 0);
                r = b(k.anchorradius, e.anchorradius, 3);
                Y = ka(d(k.anchorbordercolor, e.anchorbordercolor, u));
                N = b(k.anchorborderthickness, e.anchorborderthickness, 1);
                W = ka(d(k.anchorbgcolor, e.anchorbgcolor, j.anchorBgColor[W]));
                Z = b(k.anchoralpha, e.anchoralpha,
                    this.anchorAlpha, 0);
                $ = b(k.anchorbgalpha, e.anchorbgalpha, Z);
                g.marker = {fillColor:{FCcolor:{color:W,alpha:$ * Z / 100 + w}},lineColor:{FCcolor:{color:Y,alpha:Z + w}},lineWidth:N,radius:r,symbol:rb(C)};
                for (q = 0; q < p; q += 1)(t = ra[q]) ? (e = t ? ja.getCleanValue(t.value, ha) : null,e === null ? g.data.push({y:null}) : (c = !0,s = z.oriCatTmp[q],F = b(t.anchorsides, C),G = b(t.anchorradius, r),P = ka(d(t.anchorbordercolor, Y)),E = b(t.anchorborderthickness, N),Q = ka(d(t.anchorbgcolor, W)),U = d(t.anchoralpha, Z),S = d(t.anchorbgalpha, $),da = d(t.color, u),
                    la = d(t.alpha, D),K = {opacity:Math.max(la, m) / 100,inverted:!0},g.data.push(sa(this.getPointStub(t, e, s, h, k, za, pa), {y:e,shadow:K,color:{FCcolor:{color:da,alpha:la}},marker:{enabled:o,fillColor:{FCcolor:{color:Q,alpha:S * U / 100 + w}},lineColor:{FCcolor:{color:P,alpha:U + w}},lineWidth:E,radius:G,symbol:rb(F)},events:{click:ea}})),this.pointValueWatcher(h, e, pa, ya, q, 0, R))) : g.data.push({y:null})
            }
            if (!c)g.showInLegend = !1;
            return g
        },defaultSeriesType:"area",defaultPlotShadow:0}, Va);
        Ka("scatterbase", {showValues:0,defaultPlotShadow:0,
            point:function(c, g, k, e, h, p, m) {
                if (k.data) {
                    var q,s,u,B,C,o,F,r,G,M,L,E,P,Q,U,S,N = !1,Z,c = Ka[c];
                    u = b(k.drawline, 0);
                    B = b(k.drawprogressioncurve, 0);
                    var W = h[I],p = k.data,Y = p.length,$ = b(k.showvalues, W.showValues),W = W.numberFormatter,ca = b(k.showregressionline, e.showregressionline, 0);
                    g.zIndex = 1;
                    g.name = t(k.seriesname);
                    if (b(k.includeinlegend) === 0 || g.name === void 0)g.showInLegend = !1;
                    if (u || B) {
                        if (B)g.type = "spline";
                        s = ka(d(k.color, e.linecolor, h.colors[m % h.colors.length]));
                        u = d(k.alpha, e.linealpha, fb);
                        B = b(k.linethickness,
                            e.linethickness, 2);
                        C = Boolean(b(k.dashed, e.linedashed, 0));
                        o = b(k.linedashlen, e.linedashlen, 5);
                        F = b(k.linedashgap, e.linedashgap, 4);
                        g.color = {FCcolor:{color:s,alpha:u}};
                        g.lineWidth = B;
                        g.dashStyle = C ? J(o, F, B) : void 0
                    }
                    u = Boolean(b(k.drawanchors, k.showanchors, e.drawanchors, e.showanchors, 1));
                    B = b(k.anchorsides, e.anchorsides, m + 3);
                    C = b(k.anchorradius, e.anchorradius, 3);
                    m = ka(d(k.anchorbordercolor, k.color, e.anchorbordercolor, s, h.colors[m % h.colors.length]));
                    s = b(k.anchorborderthickness, e.anchorborderthickness, 1);
                    o = ka(d(k.anchorbgcolor,
                        e.anchorbgcolor, j.anchorBgColor[h.chart.paletteIndex]));
                    F = d(k.anchoralpha, e.anchoralpha, fb);
                    G = d(k.anchorbgalpha, e.anchorbgalpha, F);
                    g.marker = {fillColor:this.getPointColor(o, fb),lineColor:{FCcolor:{color:m,alpha:F + w}},lineWidth:s,radius:C,symbol:rb(B)};
                    if (ca) {
                        g.events = {hide:this.hideRLine,show:this.showRLine};
                        var K = {sumX:0,sumY:0,sumXY:0,sumXsqure:0,sumYsqure:0,xValues:[],yValues:[]},da = b(k.showyonx, e.showyonx, 1),z = ka(d(k.regressionlinecolor, e.regressionlinecolor, m)),R = b(k.regressionlinethickness, e.regressionlinethickness,
                            s),e = Hb(b(k.regressionlinealpha, e.regressionlinealpha, F)),z = D(z, e)
                    }
                    for (q = 0; q < Y; q += 1)(r = p[q]) ? (e = W.getCleanValue(r.y),S = W.getCleanValue(r.x),e === null ? g.data.push({y:null,x:S}) : (N = !0,Z = c.getPointStub(r, e, W.xAxis(S), h, k, $),M = b(r.anchorsides, B),L = b(r.anchorradius, C),E = ka(d(r.anchorbordercolor, m)),P = b(r.anchorborderthickness, s),Q = ka(d(r.anchorbgcolor, o)),U = d(r.anchoralpha, F),r = d(r.anchorbgalpha, G),g.data.push({y:e,x:S,displayValue:Z.displayValue,toolText:Z.toolText,link:Z.link,marker:{enabled:u,fillColor:{FCcolor:{color:Q,
                        alpha:r * U / 100 + w}},lineColor:{FCcolor:{color:E,alpha:U}},lineWidth:P,radius:L,symbol:rb(M)}}),this.pointValueWatcher(h, e, S, ca && K))) : g.data.push({y:null});
                    ca && (k = this.getRegressionLineSeries(K, da, Y),this.pointValueWatcher(h, k[0].y, k[0].x),this.pointValueWatcher(h, k[1].y, k[1].x),h = {type:"line",color:z,showInLegend:!1,lineWidth:R,enableMouseTracking:!1,marker:{enabled:!1},data:k,zIndex:0},g = [g,h])
                }
                if (!N)g.showInLegend = !1;
                return g
            },categoryAdder:function(c, g) {
                var k,e = 0,h,q = g[I].x,m,t = g.xAxis,s,u;
                u = c.chart;
                var B = parseInt(u.labelstep, 10),F = b(u.showlabels, 1),o = d(u.xaxislabelmode, "categories").toLowerCase(),G = g[I].numberFormatter;
                g._FCconf.isXYPlot = !0;
                B = B > 1 ? B : 1;
                q.catOccupied = {};
                if (o !== "auto" && c.categories && c.categories[0] && c.categories[0].category) {
                    u = c.categories[0];
                    if (u.font)g.xAxis.labels.style.fontFamily = u.font;
                    if ((h = b(u.fontsize)) !== void 0)h < 1 && (h = 1),g.xAxis.labels.style.fontSize = h + Xa,Na(g.xAxis.labels.style);
                    if (u.fontcolor)g.xAxis.labels.style.color = u.fontcolor.split(ta)[0].replace(/^\#?/, "#");
                    k =
                        d(u.verticallinecolor, j.divLineColor[g.chart.paletteIndex]);
                    h = b(u.verticallinethickness, 1);
                    m = b(u.verticallinealpha, j.divLineAlpha[g.chart.paletteIndex]);
                    var r = b(u.verticallinedashed, 0),L = b(u.verticallinedashlen, 4),M = b(u.verticallinedashgap, 2),P = D(k, m),E,Q,S;
                    for (k = 0; k < u.category.length; k += 1)s = u.category[k],m = G.getCleanValue(s.x),m !== null && !s.vline && (q.catOccupied[m] = !0,S = b(s.showlabel, s.showname, F),E = b(s.showverticalline, s.showline, s.sl, 0),Q = b(s.linedashed, r),s = S === 0 || e % B !== 0 ? w : C(p(s.label, s.name)),
                        t.plotLines.push({isGrid:!0,isCat:!0,width:E ? h : 0,color:P,dashStyle:J(L, M, h, Q),value:m,label:{text:s,style:t.labels.style,align:Ua,verticalAlign:hb,textAlign:Ua,rotation:0,x:0,y:0}}),this.pointValueWatcher(g, null, m),e += 1);
                    if (o === "mixed")q.requaredAutoNumeicLabels = b(this.requaredAutoNumeicLabels, 1)
                } else q.requaredAutoNumeicLabels = b(this.requaredAutoNumeicLabels, 1);
                q.adjustMinMax = !0
            },getPointColor:function(b, d) {
                var j,e,b = ka(b),d = Hb(d);
                j = S(b, 70);
                e = Eb(b, 50);
                return{FCcolor:{gradientUnits:"objectBoundingBox",
                    cx:0.4,cy:0.4,r:"100%",color:j + ta + e,alpha:d + ta + d,ratio:Za,radialGradient:!0}}
            },defaultSeriesType:"scatter"}, Ka.xybase)
    }
})();
