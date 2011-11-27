(function() {
    var E = FusionCharts(["private","modules.renderer.highcharts-charts"]);
    if (E !== void 0) {
        var n = E.hcLib,r = n.BLANKSTRING,aa = n.createTrendLine,i = n.pluck,L = n.getValidValue,l = n.pluckNumber,v = n.defaultPaletteOptions,Q = n.getFirstValue,ka = n.getDefinedColor,F = n.parseUnsafeString,D = n.FC_CONFIG_STRING,ba = n.extend2,ca = n.getDashStyle,la = n.toPrecision,E = n.stubFN,R = n.hasSVG,ma = n.graphics.getColumnColor,s = n.getFirstColor,U = n.setLineHeight,da = n.pluckFontSize,V = n.getFirstAlpha,ea = n.graphics.getDarkColor,W = n.graphics.getLightColor,
            O = n.graphics.convertColor,P = n.COLOR_TRANSPARENT,X = n.POSITION_CENTER,na = n.POSITION_TOP,fa = n.POSITION_BOTTOM,oa = n.POSITION_RIGHT,pa = n.POSITION_LEFT,a = n.chartAPI,qa = n.titleSpaceManager,ra = n.placeLegendBlockBottom,sa = n.placeLegendBlockRight,ga = n.graphics.mapSymbolName,ha = a.singleseries,ta = a.multiseries,x = n.COMMASTRING,J = n.ZEROSTRING,S = n.ONESTRING,K = n.HUNDREDSTRING,T = n.PXSTRING,ua = n.COMMASPACE;
        a("column2d", {standaloneInit:!0,creditLabel:!0}, a.column2dbase);
        a("column3d", {defaultSeriesType:"column3d",defaultPlotShadow:1},
            a.column2d);
        a("bar2d", {isBar:!0,defaultSeriesType:"bar",spaceManager:a.barbase}, a.column2d);
        a("line", {standaloneInit:!0,creditLabel:!0}, a.linebase);
        a("area2d", {standaloneInit:!0,creditLabel:!0}, a.area2dbase);
        a("pie2d", {standaloneInit:!0,defaultSeriesType:"pie",defaultPlotShadow:1,point:function(e, d, c, b, j) {
            var a,f,h,o,m,k,G,n = 0,t = 0,p = [],q = i(b.plotborderthickness, S),g = l(b.use3dlighting, 1) ? l(b.radius3d, b["3dradius"], 90) : 100;
            h = l(b.showzeropies, 1);
            var u = !0,H = l(b.showpercentintooltip, 1),y = l(b.showlabels,
                1),A = l(b.showvalues, 1),w = l(b.showpercentvalues, b.showpercentagevalues, 0),s = i(b.tooltipsepchar, b.hovercapsepchar, ua),z = i(b.labelsepchar, s),B = i(b.plotbordercolor, b.piebordercolor),C = j[D].numberFormatter;
            o = c.length;
            g > 100 && (g = 100);
            g < 0 && (g = 0);
            if (l(b.showlegend, 0))j.legend.enabled = !0,j.legend.reversed = !Boolean(l(b.reverselegend, 0)),d.showInLegend = !0;
            if (!y && !A)j.plotOptions.series.dataLabels.enabled = !1,j.tooltip.enabled === !1 && (u = !1);
            for (e = 0; e < o; e += 1)f = c[e],a = C.getCleanValue(f.value, !0),a === null || !h && a ===
                0 || (p.push(f),n += a);
            d.enableRotation = p.length > 1 ? i(b.enablerotation, 1) : 0;
            for (e = p.length - 1; e >= 0; e -= 1)if (f = p[e],a = C.getCleanValue(f.value, !0),c = F(i(f.label, f.name, r)),o = i(f.color, j.colors[e % j.colors.length]),m = i(f.alpha, b.plotfillalpha, K),k = i(f.bordercolor, B, W(o, 25)).split(x)[0],G = b.showplotborder == J ? J : i(f.borderalpha, b.plotborderalpha, b.pieborderalpha, "80"),h = {opacity:Math.max(m, G) / 100},d.data.push({showInLegend:c !== r,y:a,name:c,shadow:h,color:this.getPointColor(o, m, g),borderColor:O(k, G),borderWidth:q,
                link:L(f.link),sliced:Boolean(l(f.issliced, 0))}),u)o = C.percentValue(a / n * 100),m = C.dataLabels(a) || r,h = H === 1 ? o : m,a = y === 1 ? c : r,o = A === 1 ? w === 1 ? o : m : r,o = (f = L(f.displayvalue)) ? f : o !== r && a !== r ? a + z + o : i(a, o),c = c != r ? c + s + h : h,d.data[t].displayValue = o,d.data[t].toolText = c,t += 1;
            j.legend.enabled = b.showlegend == S ? !0 : !1;
            j.chart.startingAngle = i(b.startingangle, 0);
            return d
        },getPointColor:function(e, d, c) {
            var b,j,e = s(e),d = V(d);
            c < 100 && R ? (b = Math.floor((100 - 0.35 * c) * 85) / 100,b = ea(e, b),j = Math.floor((100 + c) * 50) / 100,e = W(e, j),d = {FCcolor:{color:e +
                x + b,alpha:d + x + d,ratio:c + ",100",radialGradient:!0}}) : d = {FCcolor:{color:e + x + e,alpha:d + x + d,ratio:"0,100"}};
            return d
        },configureAxis:function(e) {
            var d = 0,c = e[D],b;
            e.plotOptions.series.dataLabels.style = e.xAxis.labels.style;
            e.plotOptions.series.dataLabels.color = e.xAxis.labels.style.color;
            delete c.x;
            delete c[0];
            delete c[1];
            e.chart.plotBorderColor = e.chart.plotBackgroundColor = P;
            c = c.pieDATALabels = [];
            if (e.series.length === 1 && (b = e.series[0].data) && (d = e.series[0].data.length) > 0 && e.plotOptions.series.dataLabels.enabled)for (; d--;)b[d] &&
                L(b[d].displayValue) !== void 0 && c.push(b[d].displayValue)
        },spaceManager:function(e, d, c, b) {
            var j = e[D],a = j.FCchartName,f = j.smartLabel,h = l(j.pieDATALabels && j.pieDATALabels.length, 0),o = 0,m = d.chart;
            l(m.managelabeloverflow, 0);
            var k = l(m.slicingdistance, 20),G = l(m.pieradius, 0),n = l(m.enablesmartlabels, m.enablesmartlabel, 1);
            l(m.skipoverlaplabels, m.skipoverlaplabel, 1);
            var t = l(m.issmartlineslanted, 1),p = l(m.labeldistance, m.nametbdistance, 5),q = l(m.smartlabelclearance, 5);
            c -= e.chart.marginRight + e.chart.marginLeft;
            var g = b - (e.chart.marginTop + e.chart.marginBottom),b = Math.min(g, c),u = i(m.smartlinecolor, v.plotFillColor[e.chart.paletteIndex]),r = l(m.smartlinealpha, 100),y = l(m.smartlinethickness, 1),s = e.plotOptions.series.dataLabels,b = G === 0 ? b * 0.15 : G,w = 0,w = 2 * b;
            s.connectorWidth = y;
            s.connectorColor = O(u, r);
            g -= qa(e, d, c, w < g ? g - w : g / 2);
            m.showlegend == S && (i(m.legendposition, fa).toLowerCase() != oa ? g -= ra(e, d, c, g / 2, !0) : c -= sa(e, d, c / 3, g, !0));
            for (f.setStyle(s.style); h--;)d = f.getOriSize(j.pieDATALabels[h]),o = Math.max(o, d.width);
            n && (p = q +
                k);
            G === 0 && (w = Math.min(c / 2 - o, g / 2) - p,w >= b ? b = w : p = Math.max(p - (b - w), k));
            e.plotOptions.pie.slicedOffset = k;
            e.plotOptions.pie.size = 2 * b;
            e.plotOptions.series.dataLabels.distance = p;
            e.plotOptions.series.dataLabels.isSmartLineSlanted = t;
            e.plotOptions.series.dataLabels.enableSmartLabels = n;
            if (a === "doughnut2d" || a === "doughnut3d")if (j = l(m.doughnutradius, 0),h = l(m.use3dlighting, 1) ? l(m.radius3d, m["3dradius"], 50) : 100,h > 100 && (h = 100),h < 0 && (h = 0),m = j === 0 || j >= b ? b / 2 : j,e.plotOptions.pie.innerSize = 2 * m,h > 0 && R && (m = parseInt(m / b * 100,
                10),j = (100 - m) / 2,h = parseInt(j * h / 100, 10),m = m + x + h + x + 2 * (j - h) + x + h,e.series[0] && e.series[0].data)) {
                a = e.series[0].data;
                e = 0;
                for (h = a.length; e < h; e += 1)if (j = a[e],j.color.FCcolor)j.color.FCcolor.ratio = m
            }
        },creditLabel:!0,eiMethods:{togglePieSlice:function(e) {
            var d = this.jsVars.hcObj,c;
            if (d && d.series && (c = d.series[0]) && c.data && c.data[e] && c.data[e].slice)return c.data[c.xIncrement - 1 - e].slice()
        }}}, ha);
        a("pie3d", {defaultSeriesType:"pie",creditLabel:!0,defaultPlotShadow:0}, a.pie2d);
        a("doughnut2d", {getPointColor:function(e, d, c) {
            var b,e = s(e),d = V(d);
            c < 100 && R ? (b = Math.floor((85 - 0.2 * (100 - c)) * 100) / 100,b = ea(e, b),c = Math.floor((100 - 0.5 * c) * 100) / 100,e = W(e, c),d = {FCcolor:{color:b + x + e + x + e + x + b,alpha:d + x + d + x + d + x + d,radialGradient:!0}}) : d = O(e, d);
            return d
        }}, a.pie2d);
        a("doughnut3d", {defaultPlotShadow:0}, a.doughnut2d);
        a("pareto2d", {standaloneInit:!0,point:function(e, d, c, b, j) {
            var a,f,h,o,m,k,n,ia,t,p,q,g,u,H,y,e = c.length,A = 0;
            k = {};
            u = j.chart.paletteIndex;
            var w = /3d$/.test(j.chart.defaultSeriesType),va = this.isBar,z = i(360 - b.plotfillangle, 90),
                B = l(b.plotborderthickness, 1),C = j.chart.useRoundEdges,I = i(b.tooltipsepchar, ", "),$ = i(b.plotbordercolor, v.plotBorderColor[u]).split(x)[0],N = b.showplotborder == J ? J : i(b.plotborderalpha, b.plotfillalpha, K),ja = j.xAxis,E = l(b.showcumulativeline, 1),Y = j[D],R = Y.axisGridManager,U = Y.x,W = b.showtooltip != J,Z = [],P = [],X = l(b.use3dlighting, 1),S = j[D].numberFormatter,T = l(b.showlinevalues, b.showvalues),N = w ? b.showplotborder ? N : J : N,$ = w ? i(b.plotbordercolor, "#FFFFFF") : $;
            for (g = f = 0; f < e; f += 1)if (q = c[f],c[f].vline)R.addVline(ja, q,
                g, j); else if (a = S.getCleanValue(q.value, !0),a !== null)q.value = a,Z.push(q),g += 1;
            e = Z.length;
            Z.sort(function(b, c) {
                return c.value - b.value
            });
            if (E)n = l(b.linedashed, 0),H = s(i(b.linecolor, v.plotBorderColor[u])),f = i(b.linealpha, 100),ia = l(b.linedashlen, 5),t = l(b.linedashgap, 4),k = l(b.linethickness, 2),p = {opacity:f / 100},y = l(b.drawanchors, b.showanchors),y === void 0 && (y = f != J),h = l(b.anchorborderthickness, 1),m = l(b.anchorsides, 0),o = l(b.anchorradius, 3),g = s(i(b.anchorbordercolor, H)),a = s(i(b.anchorbgcolor, v.anchorBgColor[u])),
                c = V(i(b.anchoralpha, K)),q = V(i(b.anchorbgalpha, c)) * c / 100,n = n ? ca(ia, t, k) : void 0,k = {yAxis:1,data:[],type:"line",color:O(H, f),lineWidth:k,marker:{enabled:y,fillColor:O(a, q),lineColor:O(g, c),lineWidth:h,radius:o,symbol:ga(m)}}; else {
                if (b.showsecondarylimits !== "1")b.showsecondarylimits = "0";
                if (b.showdivlinesecondaryvalue !== "1")b.showdivlinesecondaryvalue = "0"
            }
            for (f = 0; f < e; f += 1)q = Z[f],a = l(q.showlabel, 1),c = F(!a ? r : Q(q.label, q.name)),R.addXaxisCat(ja, f, f, c),A += a = q.value,h = i(q.color, j.colors[f % j.colors.length]) +
                x + ka(b.plotgradientcolor, v.plotGradientColor[u]),o = i(q.alpha, b.plotfillalpha, K),m = i(q.ratio, b.plotfillratio),g = {opacity:o / 100},H = i(q.alpha, N) + r,h = ma(h, o, m, z, C, $, H, va, w),d.data.push(ba(this.getPointStub(q, a, c, j), {y:a,shadow:g,color:h[0],borderColor:h[1],borderWidth:B,use3DLighting:X})),this.pointValueWatcher(j, a),E && P.push({value:A,dataLabel:c,tooltext:L(q.tooltext)});
            U.catCount = e;
            Y[1] || (Y[1] = {});
            Y[1].stacking100Percent = !0;
            if (E && A > 0) {
                f = 0;
                for (e = P.length; f < e; f += 1)q = P[f],j = d.data[f],a = q.value / A * 100,u =
                    S.percentValue(a),b = j.displayValue !== r ? u : r,T == 1 && (b = u),T == 0 && (b = r),c = q.dataLabel,u = W ? q.tooltext !== void 0 ? q.tooltext : (c !== r ? c + I : r) + u : r,k.data.push({shadow:p,y:a,toolText:u,displayValue:b,link:j.link,dashStyle:n});
                return[d,k]
            } else return d
        },defaultSeriesType:"column",isDual:!0,creditLabel:!0}, ha);
        a("pareto3d", {defaultSeriesType:"column3d",defaultPlotShadow:1}, a.pareto2d);
        a("ssgrid", {standaloneInit:!0,defaultSeriesType:"ssgrid",init:function(e, d, c) {
            d = ba({}, d);
            d.chart = d.chart || d.graph || {};
            delete d.graph;
            var b,a,M,f = 0,h,o,m = [],k = d.chart,G = d.data,x = G && G.length,d = new n.SmartLabelManager,t = new n.NumberFormatter(k, this.name),p = e.offsetHeight,q = e.offsetWidth,g = {},u = f = 0,f = (k.palette > 0 && k.palette < 6 ? k.palette : l(this.paletteIndex, 1)) - 1,e = {chart:{renderTo:e,ignoreHiddenSeries:!1,events:{},spacingTop:0,spacingRight:0,spacingBottom:0,spacingLeft:0,marginTop:0,marginRight:0,marginBottom:0,marginLeft:0,borderRadius:0,borderColor:"#000000",borderWidth:1,defaultSeriesType:"ssgrid",style:{fontFamily:i(k.basefont,
                "Verdana"),fontSize:da(k.basefontsize, 20) + T,color:i(k.basefontcolor, v.baseFontColor[f]).replace(/^#?([a-f0-9]+)/ig, "#$1")},plotBackgroundColor:P},labels:{smartLabel:d},colors:["AFD8F8","F6BD0F","8BBA00","FF8E46","008E8E","D64646","8E468E","588526","B3AA00","008ED6","9D080D","A186BE","CC6600","FDC689","ABA000","F26D7D","FFF200","0054A6","F7941C","CC3300","006600","663300","6DCFF6"],credits:{href:"http://www.fusioncharts.com?BS=FCHSEvalMark",text:"FusionCharts",enabled:this.creditLabel},legend:{enabled:!1},
                series:[],subtitle:{text:r},title:{text:r},tooltip:{enabled:!1},exporting:{buttons:{exportButton:{},printButton:{enabled:!1}}}},H = e.colors,y = e.colors.length,A = 0,w = h = a = 0,u = b = o = 0;
            a = c.jsVars.cfgStore;
            c = e.chart;
            U(e.chart.style);
            g.showPercentValues = l(a.showpercentvalues, k.showpercentvalues, 0);
            g.numberItemsPerPage = i(a.numberitemsperpage, k.numberitemsperpage);
            g.showShadow = l(a.showshadow, k.showshadow, 0);
            g.baseFont = i(a.basefont, k.basefont, "Verdana");
            M = da(a.basefontsize, k.basefontsize, 10);
            g.baseFontSize = M +
                T;
            g.baseFontColor = s(i(a.basefontcolor, k.basefontcolor, v.baseFontColor[f]));
            g.alternateRowBgColor = s(i(a.alternaterowbgcolor, k.alternaterowbgcolor, v.altHGridColor[f]));
            g.alternateRowBgAlpha = i(a.alternaterowbgalpha, k.alternaterowbgalpha, v.altHGridAlpha[f]) + r;
            g.listRowDividerThickness = l(a.listrowdividerthickness, k.listrowdividerthickness, 1);
            g.listRowDividerColor = s(i(a.listrowdividercolor, k.listrowdividercolor, v.borderColor[f]));
            g.listRowDividerAlpha = l(a.listrowdivideralpha, k.listrowdivideralpha, v.altHGridAlpha[f]) +
                15 + r;
            g.colorBoxWidth = l(a.colorboxwidth, k.colorboxwidth, 8);
            g.colorBoxHeight = l(a.colorboxheight, k.colorboxheight, 8);
            g.navButtonRadius = l(a.navbuttonradius, k.navbuttonradius, 7);
            g.navButtonColor = s(i(a.navbuttoncolor, k.navbuttoncolor, v.canvasBorderColor[f]));
            g.navButtonHoverColor = s(i(a.navbuttonhovercolor, k.navbuttonhovercolor, v.altHGridColor[f]));
            g.textVerticalPadding = l(a.textverticalpadding, k.textverticalpadding, 3);
            g.navButtonPadding = l(a.navbuttonpadding, k.navbuttonpadding, 5);
            g.colorBoxPadding = l(a.colorboxpadding,
                k.colorboxpadding, 10);
            g.valueColumnPadding = l(a.valuecolumnpadding, k.valuecolumnpadding, 10);
            g.nameColumnPadding = l(a.namecolumnpadding, k.namecolumnpadding, 5);
            g.borderThickness = l(a.borderthickness, k.borderthickness, 1);
            g.borderColor = s(i(a.bordercolor, k.bordercolor, v.borderColor[f]));
            g.borderAlpha = i(a.borderalpha, k.borderalpha, v.borderAlpha[f]) + r;
            g.bgColor = i(a.bgcolor, k.bgcolor, "FFFFFF");
            g.bgAlpha = i(a.bgalpha, k.bgalpha, K);
            g.bgRatio = i(a.bgratio, k.bgratio, K);
            g.bgAngle = i(a.bgangle, k.bgangle, J);
            c.borderRadius =
                g.borderThickness / 16;
            c.borderWidth = g.borderThickness;
            c.borderColor = {FCcolor:{color:g.borderColor,alpha:g.borderAlpha}};
            c.backgroundColor = {FCcolor:{color:g.bgColor,alpha:g.bgAlpha,ratio:g.bgRatio,angle:g.bgAngle}};
            M = {fontFamily:g.baseFont,fontSize:g.baseFontSize,color:g.baseFontColor};
            U(M);
            d.setStyle(M);
            for (f = 0; f < x; f += 1)if (b = G[f],h = t.getCleanValue(b.value),o = F(Q(b.label, b.name)),a = s(i(b.color, H[f % y])),i(b.alpha, k.plotfillalpha, K),o != r || h != null)m.push({value:h,label:o,color:a}),A += h,u += 1;
            for (f = 0; f <
                u; f += 1)b = m[f],h = b.value,b.dataLabel = b.label,b.displayValue = g.showPercentValues ? t.percentValue(h / A * 100) : t.dataLabels(h),G = d.getOriSize(b.displayValue),w = Math.max(w, G.width + g.valueColumnPadding);
            g.numberItemsPerPage ? g.numberItemsPerPage >= u ? (g.numberItemsPerPage = u,h = p / g.numberItemsPerPage,a = u) : (t = p,t -= 2 * (g.navButtonPadding + g.navButtonRadius),a = g.numberItemsPerPage,h = t / a) : (f = parseInt(M.lineHeight, 10),f += 2 * g.textVerticalPadding,f = Math.max(f, g.colorBoxHeight),p / f >= u ? (h = p / u,a = u) : (t = p,t -= 2 * (g.navButtonPadding +
                g.navButtonRadius),a = Math.floor(t / f),h = t / a));
            o = q - g.colorBoxPadding - g.colorBoxWidth - g.nameColumnPadding - w - g.valueColumnPadding;
            b = g.colorBoxPadding + g.colorBoxWidth + g.nameColumnPadding;
            c.height = p;
            c.width = q;
            c.rowHeight = h;
            c.labelX = b;
            c.colorBoxWidth = g.colorBoxWidth;
            c.colorBoxHeight = g.colorBoxHeight;
            c.colorBoxX = g.colorBoxPadding;
            c.valueX = g.colorBoxPadding + g.colorBoxWidth + g.nameColumnPadding + o + g.valueColumnPadding;
            c.valueColumnPadding = g.valueColumnPadding;
            c.textStyle = M;
            c.listRowDividerAttr = {"stroke-width":g.listRowDividerThickness,
                stroke:{FCcolor:{color:g.listRowDividerColor,alpha:g.listRowDividerAlpha}}};
            c.alternateRowColor = {FCcolor:{color:g.alternateRowBgColor,alpha:g.alternateRowBgAlpha}};
            c.navButtonRadius = g.navButtonRadius;
            c.navButtonPadding = g.navButtonPadding;
            c.navButtonColor = g.navButtonColor;
            c.navButtonHoverColor = g.navButtonHoverColor;
            c.lineHeight = parseInt(M.lineHeight, 10);
            p = [];
            g = 0;
            t = !0;
            for (f = 0; f < u & a != 0; f += 1)f % a == 0 && (p.push({data:[],visible:t}),t = !1,g += 1),b = m[f],p[g - 1].data.push({label:d.getSmartText(b.dataLabel, o, h).text,
                displayValue:b.displayValue,y:b.value,color:b.color});
            e.series = p;
            e.exporting.enabled = k.exportenabled == "1" ? !0 : !1;
            e.exporting.buttons.exportButton.enabled = k.exportshowmenuitem == "0" ? !1 : !0;
            e.exporting.filename = k.exportfilename ? k.exportfilename : "FusionCharts";
            e.exporting.width = q;
            return e
        },creditLabel:!0});
        a("mscolumn2d", {standaloneInit:!0,creditLabel:!0}, a.mscolumn2dbase);
        a("mscolumn3d", {defaultSeriesType:"column3d",defaultPlotShadow:1}, a.mscolumn2d);
        a("msbar2d", {isBar:!0,defaultSeriesType:"bar",spaceManager:a.barbase},
            a.mscolumn2d);
        a("msbar3d", {defaultSeriesType:"bar3d",defaultPlotShadow:1}, a.msbar2d);
        a("msline", {standaloneInit:!0,creditLabel:!0}, a.mslinebase);
        a("msarea", {standaloneInit:!0,creditLabel:!0}, a.msareabase);
        a("stackedcolumn2d", {isStacked:!0}, a.mscolumn2d);
        a("stackedcolumn3d", {isStacked:!0}, a.mscolumn3d);
        a("stackedbar2d", {isStacked:!0}, a.msbar2d);
        a("stackedbar3d", {isStacked:!0}, a.msbar3d);
        a("stackedarea2d", {isStacked:!0,showSum:0}, a.msarea);
        a("marimekko", {isValueAbs:!0,distributedColumns:!0,isStacked:!0,
            xAxisMinMaxSetter:E,postSeriesAddition:function(a, d) {
                var c = a[D],b,j,i,f,h,o = 0;
                f = a.xAxis;
                var m,k = 100 / c.marimekkoTotal,n = [],r = a.series,t,p = 0,q,g = l(d.chart.plotborderthickness, 1),u = a.chart.rotateValues,s = l(d.chart.rotatexaxispercentvalues, 0),g = g * -0.5 - (g % 2 + (s ? 0 : 4)),y = s ? 3 : 0,x = u ? 270 : 0;
                j = c[0];
                var w = !j.stacking100Percent,v = c.inCanvasStyle;
                c.isXYPlot = !0;
                c.distributedColumns = !0;
                f.min = 0;
                f.max = 100;
                f.labels.enabled = !1;
                f.gridLineWidth = 0;
                f.alternateGridColor = P;
                b = j.stack;
                d.chart.interactivelegend = "0";
                h = 0;
                for (j = a.xAxis.plotLines.length; h <
                    j; h += 1)if (m = f.plotLines[h],m.isGrid)m.isCat = !0,n[m.value] = m;
                if (b.floatedcolumn && (i = b.floatedcolumn[0])) {
                    b = 0;
                    for (j = i.length; b < j;) {
                        o += f = i[b].p || 0;
                        t = f * k;
                        m = p + t / 2;
                        q = p + t;
                        for (h = 0; h < r.length; h += 1)a.series[h].data[b]._FCX = p,a.series[h].data[b]._FCW = t;
                        c.showStackTotal && a.xAxis.plotLines.push({value:m,width:0,isVline:w,isTrend:!w,label:{align:X,textAlign:x,rotation:u ? 270 : 0,style:c.trendStyle,verticalAlign:na,y:0,x:0,text:c.numberFormatter.yAxis(la(f, 10))}});
                        if (n[b])n[b].value = m,n[b]._weight = t;
                        b += 1;
                        c.showXAxisPercentValues &&
                            b < j && a.xAxis.plotLines.push({value:q,width:0,isVine:!0,label:{align:X,textAlign:s ? pa : X,rotation:s ? 270 : 0,style:{color:v.color,fontSize:v.fontSize,fontFamily:v.fontFamily,lineHeight:v.lineHeight,border:"1px solid",borderColor:v.color,backgroundColor:"#ffffff",backgroundOpacity:1},verticalAlign:fa,y:g,x:y,text:c.numberFormatter.percentValue(q)},zIndex:5});
                        p = q
                    }
                }
            },defaultSeriesType:"floatedcolumn"}, a.stackedcolumn2d);
        a("msstackedcolumn2d", {series:function(e, d, c) {
            var b,j,i,f,h = d[D],o = 0,m,k;
            m = [];
            var n;
            d.legend.enabled =
                Boolean(l(e.chart.showlegend, 1));
            if (e.dataset && e.dataset.length > 0) {
                this.categoryAdder(e, d);
                b = 0;
                for (j = e.dataset.length; b < j; b += 1)if (n = e.dataset[b].dataset) {
                    i = 0;
                    for (f = n.length; i < f; i += 1,o += 1)m = {data:[],stack:b},k = Math.min(h.oriCatTmp.length, n[i].data && n[i].data.length),m = this.point(c, m, n[i], e.chart, d, k, o, b),d.series.push(m)
                }
                if (this.isDual && e.lineset && e.lineset.length > 0) {
                    i = 0;
                    for (f = e.lineset.length; i < f; i += 1,o += 1)m = {data:[],yAxis:1,type:"line"},c = e.lineset[i],k = Math.min(h.oriCatTmp.length, c.data && c.data.length),
                        d.series.push(a.msline.point.call(this, "msline", m, c, e.chart, d, k, o))
                }
                this.configureAxis(d, e);
                e.trendlines && aa(e.trendlines, d.yAxis, d[D], !1, this.isBar)
            }
        }}, a.stackedcolumn2d);
        a("mscombi2d", {series:function(e, d, c) {
            var b,j,n,f,h = e.chart,o,m = [],k = [],s = [],v,t,p = d[D],q = this.isDual;
            d.legend.enabled = Boolean(l(e.chart.showlegend, 1));
            if (e.dataset && e.dataset.length > 0) {
                this.categoryAdder(e, d);
                f = p.oriCatTmp.length;
                b = 0;
                for (j = e.dataset.length; b < j; b += 1) {
                    n = e.dataset[b];
                    v = q && i(n.parentyaxis, "p").toLowerCase() === "s" ?
                        !0 : !1;
                    o = {data:[]};
                    if (v)o.yAxis = 1;
                    t = Q(n.renderas, r).toLowerCase();
                    switch (t) {
                        case "line":
                            o.type = "line";
                            m.push(a.msline.point.call(this, c, o, n, h, d, f, b));
                            break;
                        case "area":
                            o.type = "area";
                            d.chart.series2D3Dshift = !0;
                            s.push(a.msarea.point.call(this, c, o, n, h, d, f, b));
                            break;
                        case "column":
                            k.push(a.mscolumn2d.point.call(this, c, o, e.dataset[b], h, d, f, b));
                            break;
                        default:
                            v ? (o.type = "line",m.push(a.msline.point.call(this, c, o, n, h, d, f, b))) : k.push(a.mscolumn2d.point.call(this, c, o, e.dataset[b], h, d, f, b))
                    }
                }
                d.series = h.areaovercolumns !==
                    "0" ? d.series.concat(k, s, m) : d.series.concat(s, k, m);
                if (k.length === 0)p.hasNoColumn = !0;
                this.configureAxis(d, e);
                e.trendlines && aa(e.trendlines, d.yAxis, d[D], !1, this.isBar)
            }
        }}, a.mscolumn2d);
        a("mscombi3d", {series:a.mscombi2d.series,eiMethods:"view2D,view3D,resetView,rotateView,getViewAngles,fitToStage"}, a.mscolumn3d);
        a("mscolumnline3d", {}, a.mscombi3d);
        a("stackedcolumn2dline", {isStacked:!0,stack100percent:0}, a.mscombi2d);
        a("stackedcolumn3dline", {isStacked:!0,stack100percent:0}, a.mscombi3d);
        a("mscombidy2d",
            {isDual:!0}, a.mscombi2d);
        a("mscolumn3dlinedy", {isDual:!0}, a.mscolumnline3d);
        a("stackedcolumn3dlinedy", {isDual:!0}, a.stackedcolumn3dline);
        a("msstackedcolumn2dlinedy", {isDual:!0,stack100percent:0}, a.msstackedcolumn2d);
        a("scrollcolumn2d", {postSeriesAddition:a.scrollbase.postSeriesAddition,avgScrollPointWidth:40}, a.mscolumn2d);
        a("scrollline2d", {postSeriesAddition:a.scrollbase.postSeriesAddition,avgScrollPointWidth:75}, a.msline);
        a("scrollarea2d", {postSeriesAddition:a.scrollbase.postSeriesAddition,avgScrollPointWidth:75},
            a.msarea);
        a("scrollstackedcolumn2d", {postSeriesAddition:a.scrollbase.postSeriesAddition,avgScrollPointWidth:75}, a.stackedcolumn2d);
        a("scrollcombi2d", {postSeriesAddition:a.scrollbase.postSeriesAddition,avgScrollPointWidth:40}, a.mscombi2d);
        a("scrollcombidy2d", {postSeriesAddition:a.scrollbase.postSeriesAddition,avgScrollPointWidth:40}, a.mscombidy2d);
        a("scatter", {standaloneInit:!0,defaultSeriesType:"scatter",creditLabel:!0}, a.scatterbase);
        a("bubble", {standaloneInit:!0,standaloneInut:!0,defaultSeriesType:"bubble",
            point:function(e, d, c, b, j, n, f) {
                if (c.data) {
                    var h,o,m,k,r,v,t,p,q,g,u = !1,x,y,e = a[e],n = c.data,A = n.length,w = j[D],E = l(c.showvalues, w.showValues);
                    m = l(b.bubblescale, 1);
                    var z = i(b.negativecolor, "FF0000"),B = j.plotOptions.bubble,w = w.numberFormatter,C = l(c.showregressionline, b.showregressionline, 0);
                    B.bubbleScale = m;
                    d.name = L(c.seriesname);
                    if (l(c.includeinlegend) === 0 || d.name === void 0)d.showInLegend = !1;
                    m = Boolean(l(c.drawanchors, c.showanchors, b.drawanchors, 1));
                    t = i(c.plotfillalpha, c.bubblefillalpha, b.plotfillalpha, K);
                    p = l(c.showplotborder, b.showplotborder, 1);
                    q = s(i(c.plotbordercolor, b.plotbordercolor, "666666"));
                    h = i(c.plotborderthickness, b.plotborderthickness, 1);
                    g = i(c.plotborderalpha, b.plotborderalpha, "95");
                    p = p == 1 ? h : 0;
                    f = i(c.color, c.plotfillcolor, b.plotfillcolor, j.colors[f % j.colors.length]);
                    d.marker = {enabled:m,fillColor:this.getPointColor(f, K),lineColor:{FCcolor:{color:q,alpha:g}},lineWidth:p,symbol:"circle"};
                    if (C) {
                        d.events = {hide:this.hideRLine,show:this.showRLine};
                        var I = {sumX:0,sumY:0,sumXY:0,sumXsqure:0,sumYsqure:0,
                            xValues:[],yValues:[]},F = l(c.showyonx, b.showyonx, 1),N = s(i(c.regressionlinecolor, b.regressionlinecolor, f)),J = l(c.regressionlinethickness, b.regressionlinethickness, 1);
                        h = V(l(c.regressionlinealpha, b.regressionlinealpha, 100));
                        N = O(N, h)
                    }
                    for (o = 0; o < A; o += 1)if (k = n[o])if (h = w.getCleanValue(k.y),x = w.getCleanValue(k.x),y = w.getCleanValue(k.z, !0),h === null)d.data.push({y:null,x:x}); else {
                        u = !0;
                        r = s(i(k.color, k.z < 0 ? z : f));
                        v = i(k.alpha, t);
                        k = e.getPointStub(k, h, x, j, c, E);
                        r = l(b.use3dlighting) === 0 ? r : e.getPointColor(r, v);
                        if (y !==
                            null)B.zMax = B.zMax > y ? B.zMax : y,B.zMin = B.zMin < y ? B.zMin : y;
                        d.data.push({y:h,x:x,z:y,displayValue:k.displayValue,toolText:k.toolText,link:k.link,marker:{enabled:m,fillColor:r,lineColor:{FCcolor:{color:q,alpha:g}},lineWidth:p,symbol:"circle"}});
                        this.pointValueWatcher(j, h, x, C && I)
                    } else d.data.push({y:null});
                    C && (c = {type:"line",color:N,showInLegend:!1,lineWidth:J,enableMouseTracking:!1,marker:{enabled:!1},data:this.getRegressionLineSeries(I, F, A),zIndex:0},d = [d,c])
                }
                if (!u)d.showInLegend = !1;
                return d
            },getPointStub:function(a, d, c, b, j, n) {
                var b = b[D],d = d === null ? d : b.numberFormatter.dataLabels(d),f,h = b.tooltipSepChar;
                b.showTooltip ? L(a.tooltext) !== void 0 ? j = F(a.tooltext) : d === null ? j = !1 : (b.seriesNameInToolTip && (f = i(j && j.seriesname)),j = f ? f + h : r,j += c ? c + h : r,j += d,j += a.z ? h + a.z : r) : j = r;
                c = l(a.showvalue, n, b.showValues) ? i(a.name, a.label) !== void 0 ? F(i(a.name, a.label)) : d : r;
                a = L(a.link);
                return{displayValue:c,toolText:j,link:a}
            }}, a.scatter);
        a("zoomline", {standaloneInit:!0,hasVDivLine:!0,point:function(a, d, c, b, j, n, f) {
                var h,o,m,k,v,x,t,p,q,g,u,
                    H,y,A,w,E,z,B,C = c.data,I = j[D],a = i(d.type, this.defaultSeriesType),F = j.plotOptions[a] && j.plotOptions[a].stacking,J = i(this.isValueAbs, I.isValueAbs, !1);
                l(c.showvalues, I.showValues);
                var L = l(d.yAxis, 0),I = I.numberFormatter;
                p = l(b.compactdatamode, 0);
                B = i(b.dataseparator, "|");
                h = i(c.seriesname, r);
                o = s(i(c.color, b.linecolor, j.colors[f % j.colors.length]));
                m = i(c.alpha, b.linealpha, K);
                k = l(c.linethickness, b.linethickness, 2);
                v = Boolean(l(c.dashed, b.linedashed, 0));
                x = l(c.linedashlen, b.linedashlen, 5);
                t = l(c.linedashgap, b.linedashgap,
                    4);
                l(c.includeinlegend, 1);
                i(c.valueposition, b.valueposition);
                f = l(c.showvalues, b.showvalues);
                l(b.displaystartindex);
                l(b.displayendindex);
                l(b.pixelsperpoint, 15);
                q = l(c.drawanchors, c.showanchors, b.drawanchors, b.showanchors);
                g = l(c.anchorsides, b.anchorsides, 0);
                u = l(c.anchorradius, b.anchorradius, 3);
                H = s(i(c.anchorbordercolor, b.anchorbordercolor, o));
                y = l(c.anchorborderthickness, b.anchorborderthickness, 1);
                A = s(i(c.anchorbgcolor, b.anchorbgcolor, o));
                w = i(c.anchoralpha, b.anchoralpha, K);
                b = i(c.anchorbgalpha, b.anchorbgalpha,
                    w);
                d.marker = {enabled:q === void 0 ? m != 0 : !!q,fillColor:{FCcolor:{color:A,alpha:b * w / 100 + r}},lineColor:{FCcolor:{color:H,alpha:w + r}},lineWidth:y,radius:u,symbol:ga(g)};
                d.name = h;
                d.color = {FCcolor:{color:o,alpha:m}};
                d.lineWidth = k;
                d.dashStyle = v ? ca(x, t, k) : void 0;
                if (l(c.includeinlegend) === 0 || d.name === void 0 || m == 0 && q !== 1)d.showInLegend = !1;
                if (C)if (p) {
                    C = C[0].split(B);
                    k = {opacity:z / 100};
                    for (c = 0; c < n; c += 1)h = I.getCleanValue(C[c]),h === null ? d.data.push({y:null}) : (E = !0,p = I.dataLabels(h),v = f ? p : r,d.data.push({y:h,displayValue:v,
                        shadow:k,toolText:p}),this.pointValueWatcher(j, h, L, F, c, 0, a))
                } else for (c = 0; c < n; c += 1)(z = C[c]) ? (h = I.getCleanValue(z.value, J),h === null ? d.data.push({y:null}) : (E = !0,l(z.anchorsides, g),l(z.anchorradius, u),s(i(z.anchorbordercolor, H)),l(z.anchorborderthickness, y),s(i(z.anchorbgcolor, A)),i(z.anchoralpha, w),i(z.anchorbgalpha, b),B = s(i(z.color, o)),z = i(z.alpha, m),k = {opacity:z / 100},p = I.dataLabels(h),v = f ? p : r,d.data.push({displayValue:v,toolText:p,y:h,shadow:k,color:{FCcolor:{color:B,alpha:z}}}),this.pointValueWatcher(j,
                    h, L, F, c, 0, a))) : d.data.push({y:null});
                if (!E)d.showInLegend = !1;
                return d
            },categoryAdder:function(a, d) {
                var c,b = 0,j,n = d[D],f = n.axisGridManager,h = d.xAxis,o,n = n.x;
                c = a.chart;
                if (a.categories && a.categories[0] && a.categories[0].category) {
                    if (a.categories[0].font)d.xAxis.labels.style.fontFamily = a.categories[0].font;
                    if ((j = l(a.categories[0].fontsize)) !== void 0)j < 1 && (j = 1),d.xAxis.labels.style.fontSize = j + T,U(d.xAxis.labels.style);
                    if (a.categories[0].fontcolor)d.xAxis.labels.style.color = a.categories[0].fontcolor.split(x)[0].replace(/^\#?/,
                        "#");
                    j = d[D].oriCatTmp;
                    var m = a.categories[0].category;
                    o = l(c.compactdatamode, 0);
                    c = i(c.dataseparator, "|");
                    if (o) {
                        m = m[0].split(c);
                        for (c = 0; c < m.length; c += 1)o = F(Q(m[c], m[c].name)),f.addXaxisCat(h, b, b, o),j[b] = o,b += 1
                    } else for (c = 0; c < m.length; c += 1)m[c].vline ? f.addVline(h, m[c], b) : (o = m[c].showlabel === "0" ? r : F(Q(a.categories[0].category[c].label, a.categories[0].category[c].name)),f.addXaxisCat(h, b, b, o),j[b] = Q(F(a.categories[0].category[c].tooltext), o),b += 1)
                }
                n.catCount = b
            },defaultSeriesType:"line",creditLabel:!0,defaultPlotShadow:1},
            ta)
    }
})();
