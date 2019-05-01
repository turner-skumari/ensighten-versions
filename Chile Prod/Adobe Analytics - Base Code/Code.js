Bootstrapper.AF=function(){var i={data:{},_dataConfig:{},logHistory:[],debug:!0,dataObj:function(t){var i=t?[]:"";return i.finalized=!1,i.type=t,i},validateInput:function(t){return"object"!=typeof t||"number"!=typeof t.length?this.log("Error, input must be type Array"):(/set|push|call|eval|finalize|join/.test(t[0])||this.log("Error, '"+t[0]+"' is not a valid command"),!0)},storeData:function(t,i,o,e,n){return n=this.getConfig(i,o,n),i=this.data[i][o],n.finalized?(this.log("Error, cannot modify finalized key '"+o+"'"),i):void 0!==i&&n.multi?("join"==t?i=i.concat(e):i.push(e),i):(n.multi?(o=[e],"join"==t&&(o=[].concat(e))):o=e,o)},getConfig:function(t,i,o,e){return e={},void 0===(t=this._dataConfig[t]||{})[i]?(e.multi=o,e.finalized=!1,e):t[i]},store:function(t,i,o,e,n){return this.data[i]=this.data[i]||{},this.data[i][o]=this.storeData(t,i,o,e,n),this.data[i][o]},parseCode:function(t){return((t||function(){})+"").replace(/^functions*(s*)s*{|}$/g,"")},callFn:function(t,i,o,e){if("function"==typeof t){if(!o)return t.apply(window,e);void 0!==window.execScript?window.execScript(this.parseCode(t)):t.call(window)}else{if("function"!=typeof this.data[t][i])return this.log("Error, '"+i+"' is not a function");if(!o)return e="object"==typeof e&&"number"==typeof e.length?e:[],this.data[t][i].apply(this.data[t],e);void 0!==window.execScript?window.execScript(this.parseCode(this.data[t][i])):this.data[t][i].call(window)}},parse:function(t){if(this.validateInput(t)){var i=(t=Array.prototype.slice.call(t,0)).shift(),o=t.shift(),e=t.shift(),n=t[0];if(/set|push|join/.test(i))return this.store(i,o,e,n,/push|join/.test(i));if(/call|eval/.test(i))return this.callFn(o,e,"eval"==i,t);if("finalize"==i)return(t=(t=this._dataConfig[o]=this._dataConfig[o]||{})[e]||{multi:!1}).finalized=!0,this._dataConfig[o][e]=t}},log:function(t){return this.logHistory.push(t),!(!this.debug||"object"!=typeof console)&&(console.log(t)&&!1)}};if("object"==typeof Bootstrapper.AF&&"[object Array]"!==Object.prototype.toString.call(Bootstrapper.AF))return Bootstrapper.AF;if("[object Array]"===Object.prototype.toString.call(Bootstrapper.AF))for(var t=Bootstrapper.AF,o=0;o<t.length;o++)i.parse(t[o]);return{push:function(t){return i.parse(t)}}}();Bootstrapper._SC=Bootstrapper._SC||{};Bootstrapper._SC.log=function(a){if(Bootstrapper._SC.logEnabled)try{console.log("AA App Log - "+a)}catch(f){}};Bootstrapper.AF.push(["set","SiteCatalyst","block",function(a){this.ignore=this.ignore||{};this.ignore[a]=1}]);
Bootstrapper.AF.push(["set","SiteCatalyst","exec",function(){if(!this.ar){Bootstrapper.AF.push(["push","SiteCatalyst","ar",!0]);for(var a=this.ns||[],f={},c=0;c<a.length;c++)f[a[c]]=1,Bootstrapper.AF.push(["set",a[c],"exec",function(a){return function(){var c=this.dl||[],b=this.DMFDelay||!1;Bootstrapper._SC.log("Delay for DMF: "+b);var f=function(c){if("object"!=typeof window[a])setTimeout.call(this,function(){f.call(this,c)},250);else{for(var g=["pre","post"],e=0;e<g.length;e++){var b=this[g[e]];
if("object"==typeof b)for(var k=0;k<b.length;k++){var d=b[k],h=window[a];if("object"==typeof d[0]&&d[0].length){do h=h[d[0].shift()];while(1<d[0].length);d[0]=d[0].shift()}if(d[1]&&"function"==typeof d[1])try{h[d[0]]=d[1].call(this,c)}catch(l){}else h[d[0]]=d[1]}}window[a].t();Bootstrapper.AF.push(["set",a,"getCallbacks",function(){return this.callback||[]}]);g=Bootstrapper.AF.push(["call",a,"getCallbacks"]);for(e=0;e<g.length;e++)"function"==typeof g[e]&&g[e].call(window)}},l=function(){Bootstrapper.data?
Bootstrapper.data.resolve.call(this,c,function(){for(var a={},b=0;b<c.length;b++)a[c[b]]=arguments[b];f.call(this,a)}):f.call(this,{})},m=this;b?Bootstrapper.bindDOMParsed(function(){l.call(m)}):l.call(this)}}(a[c])]);var a=0,b;for(b in f)this.ignore&&b in this.ignore||(a?setTimeout(function(a){return function(){Bootstrapper.AF.push(["call",a,"exec"])}}(b),250*a):Bootstrapper.AF.push(["call",b,"exec"]),a++)}}]);Bootstrapper.bindPageSpecificCompletion(function(){setTimeout(function(){Bootstrapper.AF.push(["call","SiteCatalyst","exec"])},250)});Bootstrapper.AF.push(['eval', function(){
window.sName = 'tdi_s';
/*
 ============== DO NOT ALTER ANYTHING BELOW THIS LINE ! ===============

AppMeasurement for JavaScript version: 2.3.0
Copyright 1996-2016 Adobe, Inc. All Rights Reserved
More info available at http://www.adobe.com/marketing-cloud.html
*/
window.AppMeasurement = function(r) {
    var a = this;
    a.version = "2.3.0";
    var k = window;
    k.s_c_in || (k.s_c_il = [], k.s_c_in = 0);
    a._il = k.s_c_il;
    a._in = k.s_c_in;
    a._il[a._in] = a;
    k.s_c_in++;
    a._c = "s_c";
    var p = k.AppMeasurement.Pb;
    p || (p = null);
    var n = k,
        m, s;
    try { for (m = n.parent, s = n.location; m && m.location && s && "" + m.location != "" + s && n.location && "" + m.location != "" + n.location && m.location.host == s.host;) n = m, m = n.parent } catch (u) {} a.F = function(a) { try { console.log(a) } catch (b) {} };
    a.Ma = function(a) { return "" + parseInt(a) == "" + a };
    a.replace = function(a, b, d) {
        return !a ||
            0 > a.indexOf(b) ? a : a.split(b).join(d)
    };
    a.escape = function(c) {
        var b, d;
        if (!c) return c;
        c = encodeURIComponent(c);
        for (b = 0; 7 > b; b++) d = "+~!*()'".substring(b, b + 1), 0 <= c.indexOf(d) && (c = a.replace(c, d, "%" + d.charCodeAt(0).toString(16).toUpperCase()));
        return c
    };
    a.unescape = function(c) {
        if (!c) return c;
        c = 0 <= c.indexOf("+") ? a.replace(c, "+", " ") : c;
        try { return decodeURIComponent(c) } catch (b) {}
        return unescape(c)
    };
    a.wb = function() {
        var c = k.location.hostname,
            b = a.fpCookieDomainPeriods,
            d;
        b || (b = a.cookieDomainPeriods);
        if (c && !a.Ea && !/^[0-9.]+$/.test(c) &&
            (b = b ? parseInt(b) : 2, b = 2 < b ? b : 2, d = c.lastIndexOf("."), 0 <= d)) {
            for (; 0 <= d && 1 < b;) d = c.lastIndexOf(".", d - 1), b--;
            a.Ea = 0 < d ? c.substring(d) : c
        }
        return a.Ea
    };
    a.c_r = a.cookieRead = function(c) {
        c = a.escape(c);
        var b = " " + a.d.cookie,
            d = b.indexOf(" " + c + "="),
            f = 0 > d ? d : b.indexOf(";", d);
        c = 0 > d ? "" : a.unescape(b.substring(d + 2 + c.length, 0 > f ? b.length : f));
        return "[[B]]" != c ? c : ""
    };
    a.c_w = a.cookieWrite = function(c, b, d) {
        var f = a.wb(),
            e = a.cookieLifetime,
            g;
        b = "" + b;
        e = e ? ("" + e).toUpperCase() : "";
        d && "SESSION" != e && "NONE" != e && ((g = "" != b ? parseInt(e ? e : 0) : -60) ?
            (d = new Date, d.setTime(d.getTime() + 1E3 * g)) : 1 == d && (d = new Date, g = d.getYear(), d.setYear(g + 5 + (1900 > g ? 1900 : 0))));
        return c && "NONE" != e ? (a.d.cookie = a.escape(c) + "=" + a.escape("" != b ? b : "[[B]]") + "; path=/;" + (d && "SESSION" != e ? " expires=" + d.toGMTString() + ";" : "") + (f ? " domain=" + f + ";" : ""), a.cookieRead(c) == b) : 0
    };
    a.L = [];
    a.ia = function(c, b, d) {
        if (a.Fa) return 0;
        a.maxDelay || (a.maxDelay = 250);
        var f = 0,
            e = (new Date).getTime() + a.maxDelay,
            g = a.d.visibilityState,
            h = ["webkitvisibilitychange", "visibilitychange"];
        g || (g = a.d.webkitVisibilityState);
        if (g && "prerender" == g) {
            if (!a.ja)
                for (a.ja = 1, d = 0; d < h.length; d++) a.d.addEventListener(h[d], function() {
                    var c = a.d.visibilityState;
                    c || (c = a.d.webkitVisibilityState);
                    "visible" == c && (a.ja = 0, a.delayReady())
                });
            f = 1;
            e = 0
        } else d || a.p("_d") && (f = 1);
        f && (a.L.push({ m: c, a: b, t: e }), a.ja || setTimeout(a.delayReady, a.maxDelay));
        return f
    };
    a.delayReady = function() {
        var c = (new Date).getTime(),
            b = 0,
            d;
        for (a.p("_d") ? b = 1 : a.xa(); 0 < a.L.length;) {
            d = a.L.shift();
            if (b && !d.t && d.t > c) {
                a.L.unshift(d);
                setTimeout(a.delayReady, parseInt(a.maxDelay / 2));
                break
            }
            a.Fa = 1;
            a[d.m].apply(a, d.a);
            a.Fa = 0
        }
    };
    a.setAccount = a.sa = function(c) {
        var b, d;
        if (!a.ia("setAccount", arguments))
            if (a.account = c, a.allAccounts)
                for (b = a.allAccounts.concat(c.split(",")), a.allAccounts = [], b.sort(), d = 0; d < b.length; d++) 0 != d && b[d - 1] == b[d] || a.allAccounts.push(b[d]);
            else a.allAccounts = c.split(",")
    };
    a.foreachVar = function(c, b) {
        var d, f, e, g, h = "";
        e = f = "";
        if (a.lightProfileID) d = a.P, (h = a.lightTrackVars) && (h = "," + h + "," + a.na.join(",") + ",");
        else {
            d = a.g;
            if (a.pe || a.linkType) h = a.linkTrackVars, f = a.linkTrackEvents,
                a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (h = a[e].Nb, f = a[e].Mb));
            h && (h = "," + h + "," + a.H.join(",") + ",");
            f && h && (h += ",events,")
        }
        b && (b = "," + b + ",");
        for (f = 0; f < d.length; f++) e = d[f], (g = a[e]) && (!h || 0 <= h.indexOf("," + e + ",")) && (!b || 0 <= b.indexOf("," + e + ",")) && c(e, g)
    };
    a.r = function(c, b, d, f, e) {
        var g = "",
            h, l, k, q, m = 0;
        "contextData" == c && (c = "c");
        if (b) {
            for (h in b)
                if (!(Object.prototype[h] || e && h.substring(0, e.length) != e) && b[h] && (!d || 0 <= d.indexOf("," + (f ? f + "." : "") + h + ","))) {
                    k = !1;
                    if (m)
                        for (l = 0; l < m.length; l++) h.substring(0,
                            m[l].length) == m[l] && (k = !0);
                    if (!k && ("" == g && (g += "&" + c + "."), l = b[h], e && (h = h.substring(e.length)), 0 < h.length))
                        if (k = h.indexOf("."), 0 < k) l = h.substring(0, k), k = (e ? e : "") + l + ".", m || (m = []), m.push(k), g += a.r(l, b, d, f, k);
                        else if ("boolean" == typeof l && (l = l ? "true" : "false"), l) {
                        if ("retrieveLightData" == f && 0 > e.indexOf(".contextData.")) switch (k = h.substring(0, 4), q = h.substring(4), h) {
                            case "transactionID":
                                h = "xact";
                                break;
                            case "channel":
                                h = "ch";
                                break;
                            case "campaign":
                                h = "v0";
                                break;
                            default:
                                a.Ma(q) && ("prop" == k ? h = "c" + q : "eVar" == k ? h = "v" +
                                    q : "list" == k ? h = "l" + q : "hier" == k && (h = "h" + q, l = l.substring(0, 255)))
                        }
                        g += "&" + a.escape(h) + "=" + a.escape(l)
                    }
                }
            "" != g && (g += "&." + c)
        }
        return g
    };
    a.usePostbacks = 0;
    a.zb = function() {
        var c = "",
            b, d, f, e, g, h, l, k, q = "",
            m = "",
            n = e = "";
        if (a.lightProfileID) b = a.P, (q = a.lightTrackVars) && (q = "," + q + "," + a.na.join(",") + ",");
        else {
            b = a.g;
            if (a.pe || a.linkType) q = a.linkTrackVars, m = a.linkTrackEvents, a.pe && (e = a.pe.substring(0, 1).toUpperCase() + a.pe.substring(1), a[e] && (q = a[e].Nb, m = a[e].Mb));
            q && (q = "," + q + "," + a.H.join(",") + ",");
            m && (m = "," + m + ",", q && (q +=
                ",events,"));
            a.events2 && (n += ("" != n ? "," : "") + a.events2)
        }
        if (a.visitor && a.visitor.getCustomerIDs) {
            e = p;
            if (g = a.visitor.getCustomerIDs())
                for (d in g) Object.prototype[d] || (f = g[d], "object" == typeof f && (e || (e = {}), f.id && (e[d + ".id"] = f.id), f.authState && (e[d + ".as"] = f.authState)));
            e && (c += a.r("cid", e))
        }
        a.AudienceManagement && a.AudienceManagement.isReady() && (c += a.r("d", a.AudienceManagement.getEventCallConfigParams()));
        for (d = 0; d < b.length; d++) {
            e = b[d];
            g = a[e];
            f = e.substring(0, 4);
            h = e.substring(4);
            g || ("events" == e && n ? (g = n, n =
                "") : "marketingCloudOrgID" == e && a.visitor && (g = a.visitor.marketingCloudOrgID));
            if (g && (!q || 0 <= q.indexOf("," + e + ","))) {
                switch (e) {
                    case "customerPerspective":
                        e = "cp";
                        break;
                    case "marketingCloudOrgID":
                        e = "mcorgid";
                        break;
                    case "supplementalDataID":
                        e = "sdid";
                        break;
                    case "timestamp":
                        e = "ts";
                        break;
                    case "dynamicVariablePrefix":
                        e = "D";
                        break;
                    case "visitorID":
                        e = "vid";
                        break;
                    case "marketingCloudVisitorID":
                        e = "mid";
                        break;
                    case "analyticsVisitorID":
                        e = "aid";
                        break;
                    case "audienceManagerLocationHint":
                        e = "aamlh";
                        break;
                    case "audienceManagerBlob":
                        e =
                            "aamb";
                        break;
                    case "authState":
                        e = "as";
                        break;
                    case "pageURL":
                        e = "g";
                        255 < g.length && (a.pageURLRest = g.substring(255), g = g.substring(0, 255));
                        break;
                    case "pageURLRest":
                        e = "-g";
                        break;
                    case "referrer":
                        e = "r";
                        break;
                    case "vmk":
                    case "visitorMigrationKey":
                        e = "vmt";
                        break;
                    case "visitorMigrationServer":
                        e = "vmf";
                        a.ssl && a.visitorMigrationServerSecure && (g = "");
                        break;
                    case "visitorMigrationServerSecure":
                        e = "vmf";
                        !a.ssl && a.visitorMigrationServer && (g = "");
                        break;
                    case "charSet":
                        e = "ce";
                        break;
                    case "visitorNamespace":
                        e = "ns";
                        break;
                    case "cookieDomainPeriods":
                        e =
                            "cdp";
                        break;
                    case "cookieLifetime":
                        e = "cl";
                        break;
                    case "variableProvider":
                        e = "vvp";
                        break;
                    case "currencyCode":
                        e = "cc";
                        break;
                    case "channel":
                        e = "ch";
                        break;
                    case "transactionID":
                        e = "xact";
                        break;
                    case "campaign":
                        e = "v0";
                        break;
                    case "latitude":
                        e = "lat";
                        break;
                    case "longitude":
                        e = "lon";
                        break;
                    case "resolution":
                        e = "s";
                        break;
                    case "colorDepth":
                        e = "c";
                        break;
                    case "javascriptVersion":
                        e = "j";
                        break;
                    case "javaEnabled":
                        e = "v";
                        break;
                    case "cookiesEnabled":
                        e = "k";
                        break;
                    case "browserWidth":
                        e = "bw";
                        break;
                    case "browserHeight":
                        e = "bh";
                        break;
                    case "connectionType":
                        e = "ct";
                        break;
                    case "homepage":
                        e = "hp";
                        break;
                    case "events":
                        n && (g += ("" != g ? "," : "") + n);
                        if (m)
                            for (h = g.split(","), g = "", f = 0; f < h.length; f++) l = h[f], k = l.indexOf("="), 0 <= k && (l = l.substring(0, k)), k = l.indexOf(":"), 0 <= k && (l = l.substring(0, k)), 0 <= m.indexOf("," + l + ",") && (g += (g ? "," : "") + h[f]);
                        break;
                    case "events2":
                        g = "";
                        break;
                    case "contextData":
                        c += a.r("c", a[e], q, e);
                        g = "";
                        break;
                    case "lightProfileID":
                        e = "mtp";
                        break;
                    case "lightStoreForSeconds":
                        e = "mtss";
                        a.lightProfileID || (g = "");
                        break;
                    case "lightIncrementBy":
                        e =
                            "mti";
                        a.lightProfileID || (g = "");
                        break;
                    case "retrieveLightProfiles":
                        e = "mtsr";
                        break;
                    case "deleteLightProfiles":
                        e = "mtsd";
                        break;
                    case "retrieveLightData":
                        a.retrieveLightProfiles && (c += a.r("mts", a[e], q, e));
                        g = "";
                        break;
                    default:
                        a.Ma(h) && ("prop" == f ? e = "c" + h : "eVar" == f ? e = "v" + h : "list" == f ? e = "l" + h : "hier" == f && (e = "h" + h, g = g.substring(0, 255)))
                }
                g && (c += "&" + e + "=" + ("pev" != e.substring(0, 3) ? a.escape(g) : g))
            }
            "pev3" == e && a.e && (c += a.e)
        }
        return c
    };
    a.D = function(a) {
        var b = a.tagName;
        if ("undefined" != "" + a.Sb || "undefined" != "" + a.Ib && "HTML" !=
            ("" + a.Ib).toUpperCase()) return "";
        b = b && b.toUpperCase ? b.toUpperCase() : "";
        "SHAPE" == b && (b = "");
        b && (("INPUT" == b || "BUTTON" == b) && a.type && a.type.toUpperCase ? b = a.type.toUpperCase() : !b && a.href && (b = "A"));
        return b
    };
    a.Ia = function(a) {
        var b = k.location,
            d = a.href ? a.href : "",
            f, e, g;
        f = d.indexOf(":");
        e = d.indexOf("?");
        g = d.indexOf("/");
        d && (0 > f || 0 <= e && f > e || 0 <= g && f > g) && (e = a.protocol && 1 < a.protocol.length ? a.protocol : b.protocol ? b.protocol : "", f = b.pathname.lastIndexOf("/"), d = (e ? e + "//" : "") + (a.host ? a.host : b.host ? b.host : "") + ("/" != d.substring(0,
            1) ? b.pathname.substring(0, 0 > f ? 0 : f) + "/" : "") + d);
        return d
    };
    a.M = function(c) {
        var b = a.D(c),
            d, f, e = "",
            g = 0;
        return b && (d = c.protocol, f = c.onclick, !c.href || "A" != b && "AREA" != b || f && d && !(0 > d.toLowerCase().indexOf("javascript")) ? f ? (e = a.replace(a.replace(a.replace(a.replace("" + f, "\r", ""), "\n", ""), "\t", ""), " ", ""), g = 2) : "INPUT" == b || "SUBMIT" == b ? (c.value ? e = c.value : c.innerText ? e = c.innerText : c.textContent && (e = c.textContent), g = 3) : "IMAGE" == b && c.src && (e = c.src) : e = a.Ia(c), e) ? { id: e.substring(0, 100), type: g } : 0
    };
    a.Qb = function(c) {
        for (var b =
                a.D(c), d = a.M(c); c && !d && "BODY" != b;)
            if (c = c.parentElement ? c.parentElement : c.parentNode) b = a.D(c), d = a.M(c);
        d && "BODY" != b || (c = 0);
        c && (b = c.onclick ? "" + c.onclick : "", 0 <= b.indexOf(".tl(") || 0 <= b.indexOf(".trackLink(")) && (c = 0);
        return c
    };
    a.Hb = function() {
        var c, b, d = a.linkObject,
            f = a.linkType,
            e = a.linkURL,
            g, h;
        a.oa = 1;
        d || (a.oa = 0, d = a.clickObject);
        if (d) {
            c = a.D(d);
            for (b = a.M(d); d && !b && "BODY" != c;)
                if (d = d.parentElement ? d.parentElement : d.parentNode) c = a.D(d), b = a.M(d);
            b && "BODY" != c || (d = 0);
            if (d && !a.linkObject) {
                var l = d.onclick ? "" + d.onclick :
                    "";
                if (0 <= l.indexOf(".tl(") || 0 <= l.indexOf(".trackLink(")) d = 0
            }
        } else a.oa = 1;
        !e && d && (e = a.Ia(d));
        e && !a.linkLeaveQueryString && (g = e.indexOf("?"), 0 <= g && (e = e.substring(0, g)));
        if (!f && e) {
            var m = 0,
                q = 0,
                n;
            if (a.trackDownloadLinks && a.linkDownloadFileTypes)
                for (l = e.toLowerCase(), g = l.indexOf("?"), h = l.indexOf("#"), 0 <= g ? 0 <= h && h < g && (g = h) : g = h, 0 <= g && (l = l.substring(0, g)), g = a.linkDownloadFileTypes.toLowerCase().split(","), h = 0; h < g.length; h++)(n = g[h]) && l.substring(l.length - (n.length + 1)) == "." + n && (f = "d");
            if (a.trackExternalLinks &&
                !f && (l = e.toLowerCase(), a.La(l) && (a.linkInternalFilters || (a.linkInternalFilters = k.location.hostname), g = 0, a.linkExternalFilters ? (g = a.linkExternalFilters.toLowerCase().split(","), m = 1) : a.linkInternalFilters && (g = a.linkInternalFilters.toLowerCase().split(",")), g))) {
                for (h = 0; h < g.length; h++) n = g[h], 0 <= l.indexOf(n) && (q = 1);
                q ? m && (f = "e") : m || (f = "e")
            }
        }
        a.linkObject = d;
        a.linkURL = e;
        a.linkType = f;
        if (a.trackClickMap || a.trackInlineStats) a.e = "", d && (f = a.pageName, e = 1, d = d.sourceIndex, f || (f = a.pageURL, e = 0), k.s_objectID && (b.id =
            k.s_objectID, d = b.type = 1), f && b && b.id && c && (a.e = "&pid=" + a.escape(f.substring(0, 255)) + (e ? "&pidt=" + e : "") + "&oid=" + a.escape(b.id.substring(0, 100)) + (b.type ? "&oidt=" + b.type : "") + "&ot=" + c + (d ? "&oi=" + d : "")))
    };
    a.Ab = function() {
        var c = a.oa,
            b = a.linkType,
            d = a.linkURL,
            f = a.linkName;
        b && (d || f) && (b = b.toLowerCase(), "d" != b && "e" != b && (b = "o"), a.pe = "lnk_" + b, a.pev1 = d ? a.escape(d) : "", a.pev2 = f ? a.escape(f) : "", c = 1);
        a.abort && (c = 0);
        if (a.trackClickMap || a.trackInlineStats || a.ActivityMap) {
            var b = {},
                d = 0,
                e = a.cookieRead("s_sq"),
                g = e ? e.split("&") :
                0,
                h, l, k, e = 0;
            if (g)
                for (h = 0; h < g.length; h++) l = g[h].split("="), f = a.unescape(l[0]).split(","), l = a.unescape(l[1]), b[l] = f;
            f = a.account.split(",");
            h = {};
            for (k in a.contextData) k && !Object.prototype[k] && "a.activitymap." == k.substring(0, 14) && (h[k] = a.contextData[k], a.contextData[k] = "");
            a.e = a.r("c", h) + (a.e ? a.e : "");
            if (c || a.e) {
                c && !a.e && (e = 1);
                for (l in b)
                    if (!Object.prototype[l])
                        for (k = 0; k < f.length; k++)
                            for (e && (g = b[l].join(","), g == a.account && (a.e += ("&" != l.charAt(0) ? "&" : "") + l, b[l] = [], d = 1)), h = 0; h < b[l].length; h++) g = b[l][h],
                                g == f[k] && (e && (a.e += "&u=" + a.escape(g) + ("&" != l.charAt(0) ? "&" : "") + l + "&u=0"), b[l].splice(h, 1), d = 1);
                c || (d = 1);
                if (d) {
                    e = "";
                    h = 2;
                    !c && a.e && (e = a.escape(f.join(",")) + "=" + a.escape(a.e), h = 1);
                    for (l in b) !Object.prototype[l] && 0 < h && 0 < b[l].length && (e += (e ? "&" : "") + a.escape(b[l].join(",")) + "=" + a.escape(l), h--);
                    a.cookieWrite("s_sq", e)
                }
            }
        }
        return c
    };
    a.Bb = function() {
        if (!a.Lb) {
            var c = new Date,
                b = n.location,
                d, f, e = f = d = "",
                g = "",
                h = "",
                l = "1.2",
                k = a.cookieWrite("s_cc", "true", 0) ? "Y" : "N",
                m = "",
                p = "";
            if (c.setUTCDate && (l = "1.3", (0).toPrecision &&
                    (l = "1.5", c = [], c.forEach))) {
                l = "1.6";
                f = 0;
                d = {};
                try { f = new Iterator(d), f.next && (l = "1.7", c.reduce && (l = "1.8", l.trim && (l = "1.8.1", Date.parse && (l = "1.8.2", Object.create && (l = "1.8.5"))))) } catch (r) {}
            }
            d = screen.width + "x" + screen.height;
            e = navigator.javaEnabled() ? "Y" : "N";
            f = screen.pixelDepth ? screen.pixelDepth : screen.colorDepth;
            g = a.w.innerWidth ? a.w.innerWidth : a.d.documentElement.offsetWidth;
            h = a.w.innerHeight ? a.w.innerHeight : a.d.documentElement.offsetHeight;
            try { a.b.addBehavior("#default#homePage"), m = a.b.Rb(b) ? "Y" : "N" } catch (s) {}
            try {
                a.b.addBehavior("#default#clientCaps"),
                    p = a.b.connectionType
            } catch (t) {} a.resolution = d;
            a.colorDepth = f;
            a.javascriptVersion = l;
            a.javaEnabled = e;
            a.cookiesEnabled = k;
            a.browserWidth = g;
            a.browserHeight = h;
            a.connectionType = p;
            a.homepage = m;
            a.Lb = 1
        }
    };
    a.Q = {};
    a.loadModule = function(c, b) {
        var d = a.Q[c];
        if (!d) {
            d = k["AppMeasurement_Module_" + c] ? new k["AppMeasurement_Module_" + c](a) : {};
            a.Q[c] = a[c] = d;
            d.eb = function() { return d.ib };
            d.jb = function(b) { if (d.ib = b) a[c + "_onLoad"] = b, a.ia(c + "_onLoad", [a, d], 1) || b(a, d) };
            try {
                Object.defineProperty ? Object.defineProperty(d, "onLoad", { get: d.eb, set: d.jb }) : d._olc = 1
            } catch (f) { d._olc = 1 }
        }
        b && (a[c + "_onLoad"] = b, a.ia(c + "_onLoad", [a, d], 1) || b(a, d))
    };
    a.p = function(c) {
        var b, d;
        for (b in a.Q)
            if (!Object.prototype[b] && (d = a.Q[b]) && (d._olc && d.onLoad && (d._olc = 0, d.onLoad(a, d)), d[c] && d[c]())) return 1;
        return 0
    };
    a.Db = function() {
        var c = Math.floor(1E13 * Math.random()),
            b = a.visitorSampling,
            d = a.visitorSamplingGroup,
            d = "s_vsn_" + (a.visitorNamespace ? a.visitorNamespace : a.account) + (d ? "_" + d : ""),
            f = a.cookieRead(d);
        if (b) {
            b *= 100;
            f && (f = parseInt(f));
            if (!f) {
                if (!a.cookieWrite(d,
                        c)) return 0;
                f = c
            }
            if (f % 1E4 > b) return 0
        }
        return 1
    };
    a.R = function(c, b) {
        var d, f, e, g, h, l;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++)
                if (g = f[e], (h = c[g]) || c["!" + g]) {
                    if (!b && ("contextData" == g || "retrieveLightData" == g) && a[g])
                        for (l in a[g]) h[l] || (h[l] = a[g][l]);
                    a[g] = h
                }
    };
    a.Va = function(c, b) {
        var d, f, e, g;
        for (d = 0; 2 > d; d++)
            for (f = 0 < d ? a.Aa : a.g, e = 0; e < f.length; e++) g = f[e], c[g] = a[g], b || c[g] || (c["!" + g] = 1)
    };
    a.vb = function(a) {
        var b, d, f, e, g, h = 0,
            l, k = "",
            m = "";
        if (a && 255 < a.length && (b = "" + a, d = b.indexOf("?"), 0 < d && (l = b.substring(d +
                1), b = b.substring(0, d), e = b.toLowerCase(), f = 0, "http://" == e.substring(0, 7) ? f += 7 : "https://" == e.substring(0, 8) && (f += 8), d = e.indexOf("/", f), 0 < d && (e = e.substring(f, d), g = b.substring(d), b = b.substring(0, d), 0 <= e.indexOf("google") ? h = ",q,ie,start,search_key,word,kw,cd," : 0 <= e.indexOf("yahoo.co") && (h = ",p,ei,"), h && l)))) {
            if ((a = l.split("&")) && 1 < a.length) {
                for (f = 0; f < a.length; f++) e = a[f], d = e.indexOf("="), 0 < d && 0 <= h.indexOf("," + e.substring(0, d) + ",") ? k += (k ? "&" : "") + e : m += (m ? "&" : "") + e;
                k && m ? l = k + "&" + m : m = ""
            }
            d = 253 - (l.length - m.length) -
                b.length;
            a = b + (0 < d ? g.substring(0, d) : "") + "?" + l
        }
        return a
    };
    a.ab = function(c) {
        var b = a.d.visibilityState,
            d = ["webkitvisibilitychange", "visibilitychange"];
        b || (b = a.d.webkitVisibilityState);
        if (b && "prerender" == b) {
            if (c)
                for (b = 0; b < d.length; b++) a.d.addEventListener(d[b], function() {
                    var b = a.d.visibilityState;
                    b || (b = a.d.webkitVisibilityState);
                    "visible" == b && c()
                });
            return !1
        }
        return !0
    };
    a.ea = !1;
    a.J = !1;
    a.lb = function() {
        a.J = !0;
        a.j()
    };
    a.ca = !1;
    a.V = !1;
    a.hb = function(c) {
        a.marketingCloudVisitorID = c;
        a.V = !0;
        a.j()
    };
    a.fa = !1;
    a.W = !1;
    a.mb =
        function(c) {
            a.visitorOptedOut = c;
            a.W = !0;
            a.j()
        };
    a.Z = !1;
    a.S = !1;
    a.Xa = function(c) {
        a.analyticsVisitorID = c;
        a.S = !0;
        a.j()
    };
    a.ba = !1;
    a.U = !1;
    a.Za = function(c) {
        a.audienceManagerLocationHint = c;
        a.U = !0;
        a.j()
    };
    a.aa = !1;
    a.T = !1;
    a.Ya = function(c) {
        a.audienceManagerBlob = c;
        a.T = !0;
        a.j()
    };
    a.$a = function(c) { a.maxDelay || (a.maxDelay = 250); return a.p("_d") ? (c && setTimeout(function() { c() }, a.maxDelay), !1) : !0 };
    a.da = !1;
    a.I = !1;
    a.xa = function() {
        a.I = !0;
        a.j()
    };
    a.isReadyToTrack = function() {
        var c = !0,
            b = a.visitor,
            d, f, e;
        a.ea || a.J || (a.ab(a.lb) ? a.J = !0 : a.ea = !0);
        if (a.ea && !a.J) return !1;
        b && b.isAllowed() && (a.ca || a.marketingCloudVisitorID || !b.getMarketingCloudVisitorID || (a.ca = !0, a.marketingCloudVisitorID = b.getMarketingCloudVisitorID([a, a.hb]), a.marketingCloudVisitorID && (a.V = !0)), a.fa || a.visitorOptedOut || !b.isOptedOut || (a.fa = !0, a.visitorOptedOut = b.isOptedOut([a, a.mb]), a.visitorOptedOut != p && (a.W = !0)), a.Z || a.analyticsVisitorID || !b.getAnalyticsVisitorID || (a.Z = !0, a.analyticsVisitorID = b.getAnalyticsVisitorID([a, a.Xa]), a.analyticsVisitorID && (a.S = !0)), a.ba ||
            a.audienceManagerLocationHint || !b.getAudienceManagerLocationHint || (a.ba = !0, a.audienceManagerLocationHint = b.getAudienceManagerLocationHint([a, a.Za]), a.audienceManagerLocationHint && (a.U = !0)), a.aa || a.audienceManagerBlob || !b.getAudienceManagerBlob || (a.aa = !0, a.audienceManagerBlob = b.getAudienceManagerBlob([a, a.Ya]), a.audienceManagerBlob && (a.T = !0)), c = a.ca && !a.V && !a.marketingCloudVisitorID, b = a.Z && !a.S && !a.analyticsVisitorID, d = a.ba && !a.U && !a.audienceManagerLocationHint, f = a.aa && !a.T && !a.audienceManagerBlob,
            e = a.fa && !a.W, c = c || b || d || f || e ? !1 : !0);
        a.da || a.I || (a.$a(a.xa) ? a.I = !0 : a.da = !0);
        a.da && !a.I && (c = !1);
        return c
    };
    a.o = p;
    a.u = 0;
    a.callbackWhenReadyToTrack = function(c, b, d) {
        var f;
        f = {};
        f.qb = c;
        f.pb = b;
        f.nb = d;
        a.o == p && (a.o = []);
        a.o.push(f);
        0 == a.u && (a.u = setInterval(a.j, 100))
    };
    a.j = function() {
        var c;
        if (a.isReadyToTrack() && (a.kb(), a.o != p))
            for (; 0 < a.o.length;) c = a.o.shift(), c.pb.apply(c.qb, c.nb)
    };
    a.kb = function() { a.u && (clearInterval(a.u), a.u = 0) };
    a.fb = function(c) {
        var b, d, f = p,
            e = p;
        if (!a.isReadyToTrack()) {
            b = [];
            if (c != p)
                for (d in f = {}, c) f[d] = c[d];
            e = {};
            a.Va(e, !0);
            b.push(f);
            b.push(e);
            a.callbackWhenReadyToTrack(a, a.track, b);
            return !0
        }
        return !1
    };
    a.xb = function() {
        var c = a.cookieRead("s_fid"),
            b = "",
            d = "",
            f;
        f = 8;
        var e = 4;
        if (!c || 0 > c.indexOf("-")) {
            for (c = 0; 16 > c; c++) f = Math.floor(Math.random() * f), b += "0123456789ABCDEF".substring(f, f + 1), f = Math.floor(Math.random() * e), d += "0123456789ABCDEF".substring(f, f + 1), f = e = 16;
            c = b + "-" + d
        }
        a.cookieWrite("s_fid", c, 1) || (c = 0);
        return c
    };
    a.t = a.track = function(c, b) {
        var d, f = new Date,
            e = "s" + Math.floor(f.getTime() / 108E5) % 10 +
            Math.floor(1E13 * Math.random()),
            g = f.getYear(),
            g = "t=" + a.escape(f.getDate() + "/" + f.getMonth() + "/" + (1900 > g ? g + 1900 : g) + " " + f.getHours() + ":" + f.getMinutes() + ":" + f.getSeconds() + " " + f.getDay() + " " + f.getTimezoneOffset());
        a.visitor && a.visitor.getAuthState && (a.authState = a.visitor.getAuthState());
        a.p("_s");
        a.fb(c) || (b && a.R(b), c && (d = {}, a.Va(d, 0), a.R(c)), a.Db() && !a.visitorOptedOut && (a.analyticsVisitorID || a.marketingCloudVisitorID || (a.fid = a.xb()), a.Hb(), a.usePlugins && a.doPlugins && a.doPlugins(a), a.account && (a.abort ||
            (a.trackOffline && !a.timestamp && (a.timestamp = Math.floor(f.getTime() / 1E3)), f = k.location, a.pageURL || (a.pageURL = f.href ? f.href : f), a.referrer || a.Wa || (f = a.Util.getQueryParam("adobe_mc_ref", null, null, !0), a.referrer = f || void 0 === f ? void 0 === f ? "" : f : n.document.referrer), a.Wa = 1, a.referrer = a.vb(a.referrer), a.p("_g")), a.Ab() && !a.abort && (a.visitor && !a.supplementalDataID && a.visitor.getSupplementalDataID && (a.supplementalDataID = a.visitor.getSupplementalDataID("AppMeasurement:" + a._in, a.expectSupplementalData ? !1 : !0)),
                a.Bb(), g += a.zb(), a.Gb(e, g), a.p("_t"), a.referrer = ""))), c && a.R(d, 1));
        a.abort = a.supplementalDataID = a.timestamp = a.pageURLRest = a.linkObject = a.clickObject = a.linkURL = a.linkName = a.linkType = k.s_objectID = a.pe = a.pev1 = a.pev2 = a.pev3 = a.e = a.lightProfileID = 0
    };
    a.za = [];
    a.registerPreTrackCallback = function(c) { for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]); "function" == typeof c ? a.za.push([c, b]) : a.debugTracking && a.F("DEBUG: Non function type passed to registerPreTrackCallback") };
    a.cb = function(c) {
        a.wa(a.za,
            c)
    };
    a.ya = [];
    a.registerPostTrackCallback = function(c) { for (var b = [], d = 1; d < arguments.length; d++) b.push(arguments[d]); "function" == typeof c ? a.ya.push([c, b]) : a.debugTracking && a.F("DEBUG: Non function type passed to registerPostTrackCallback") };
    a.bb = function(c) { a.wa(a.ya, c) };
    a.wa = function(c, b) {
        if ("object" == typeof c)
            for (var d = 0; d < c.length; d++) {
                var f = c[d][0],
                    e = c[d][1];
                e.unshift(b);
                if ("function" == typeof f) try { f.apply(null, e) } catch (g) { a.debugTracking && a.F(g.message) }
            }
    };
    a.tl = a.trackLink = function(c, b, d, f, e) {
        a.linkObject =
            c;
        a.linkType = b;
        a.linkName = d;
        e && (a.l = c, a.A = e);
        return a.track(f)
    };
    a.trackLight = function(c, b, d, f) {
        a.lightProfileID = c;
        a.lightStoreForSeconds = b;
        a.lightIncrementBy = d;
        return a.track(f)
    };
    a.clearVars = function() {
        var c, b;
        for (c = 0; c < a.g.length; c++)
            if (b = a.g[c], "prop" == b.substring(0, 4) || "eVar" == b.substring(0, 4) || "hier" == b.substring(0, 4) || "list" == b.substring(0, 4) || "channel" == b || "events" == b || "eventList" == b || "products" == b || "productList" == b || "purchaseID" == b || "transactionID" == b || "state" == b || "zip" == b || "campaign" == b) a[b] =
                void 0
    };
    a.tagContainerMarker = "";
    a.Gb = function(c, b) {
        var d, f = a.trackingServer;
        d = "";
        var e = a.dc,
            g = "sc.",
            h = a.visitorNamespace;
        f ? a.trackingServerSecure && a.ssl && (f = a.trackingServerSecure) : (h || (h = a.account, f = h.indexOf(","), 0 <= f && (h = h.substring(0, f)), h = h.replace(/[^A-Za-z0-9]/g, "")), d || (d = "2o7.net"), e = e ? ("" + e).toLowerCase() : "d1", "2o7.net" == d && ("d1" == e ? e = "112" : "d2" == e && (e = "122"), g = ""), f = h + "." + e + "." + g + d);
        d = a.ssl ? "https://" : "http://";
        e = a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks;
        d +=
            f + "/b/ss/" + a.account + "/" + (a.mobile ? "5." : "") + (e ? "10" : "1") + "/JS-" + a.version + (a.Kb ? "T" : "") + (a.tagContainerMarker ? "-" + a.tagContainerMarker : "") + "/" + c + "?AQB=1&ndh=1&pf=1&" + (e ? "callback=s_c_il[" + a._in + "].doPostbacks&et=1&" : "") + b + "&AQE=1";
        a.cb(d);
        a.tb(d);
        a.ka()
    };
    a.Ua = /{(%?)(.*?)(%?)}/;
    a.Ob = RegExp(a.Ua.source, "g");
    a.ub = function(c) {
        if ("object" == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
                var d = c.dests[b];
                if ("string" == typeof d.c && "aa." == d.id.substr(0, 3))
                    for (var f = d.c.match(a.Ob), e = 0; e < f.length; ++e) {
                        var g =
                            f[e],
                            h = g.match(a.Ua),
                            k = "";
                        "%" == h[1] && "timezone_offset" == h[2] ? k = (new Date).getTimezoneOffset() : "%" == h[1] && "timestampz" == h[2] && (k = a.yb());
                        d.c = d.c.replace(g, a.escape(k))
                    }
            }
    };
    a.yb = function() {
        var c = new Date,
            b = new Date(6E4 * Math.abs(c.getTimezoneOffset()));
        return a.k(4, c.getFullYear()) + "-" + a.k(2, c.getMonth() + 1) + "-" + a.k(2, c.getDate()) + "T" + a.k(2, c.getHours()) + ":" + a.k(2, c.getMinutes()) + ":" + a.k(2, c.getSeconds()) + (0 < c.getTimezoneOffset() ? "-" : "+") + a.k(2, b.getUTCHours()) + ":" + a.k(2, b.getUTCMinutes())
    };
    a.k = function(a,
        b) { return (Array(a + 1).join(0) + b).slice(-a) };
    a.ta = {};
    a.doPostbacks = function(c) {
        if ("object" == typeof c)
            if (a.ub(c), "object" == typeof a.AudienceManagement && "function" == typeof a.AudienceManagement.isReady && a.AudienceManagement.isReady() && "function" == typeof a.AudienceManagement.passData) a.AudienceManagement.passData(c);
            else if ("object" == typeof c && "object" == typeof c.dests)
            for (var b = 0; b < c.dests.length; ++b) {
                var d = c.dests[b];
                "object" == typeof d && "string" == typeof d.c && "string" == typeof d.id && "aa." == d.id.substr(0,
                    3) && (a.ta[d.id] = new Image, a.ta[d.id].alt = "", a.ta[d.id].src = d.c)
            }
    };
    a.tb = function(c) {
        a.i || a.Cb();
        a.i.push(c);
        a.ma = a.C();
        a.Sa()
    };
    a.Cb = function() {
        a.i = a.Eb();
        a.i || (a.i = [])
    };
    a.Eb = function() {
        var c, b;
        if (a.ra()) {
            try {
                (b = k.localStorage.getItem(a.pa())) && (c = k.JSON.parse(b))
            } catch (d) {}
            return c
        }
    };
    a.ra = function() {
        var c = !0;
        a.trackOffline && a.offlineFilename && k.localStorage && k.JSON || (c = !1);
        return c
    };
    a.Ja = function() {
        var c = 0;
        a.i && (c = a.i.length);
        a.q && c++;
        return c
    };
    a.ka = function() {
        if (a.q && (a.B && a.B.complete && a.B.G && a.B.va(),
                a.q)) return;
        a.Ka = p;
        if (a.qa) a.ma > a.O && a.Qa(a.i), a.ua(500);
        else {
            var c = a.ob();
            if (0 < c) a.ua(c);
            else if (c = a.Ga()) a.q = 1, a.Fb(c), a.Jb(c)
        }
    };
    a.ua = function(c) { a.Ka || (c || (c = 0), a.Ka = setTimeout(a.ka, c)) };
    a.ob = function() {
        var c;
        if (!a.trackOffline || 0 >= a.offlineThrottleDelay) return 0;
        c = a.C() - a.Pa;
        return a.offlineThrottleDelay < c ? 0 : a.offlineThrottleDelay - c
    };
    a.Ga = function() { if (0 < a.i.length) return a.i.shift() };
    a.Fb = function(c) {
        if (a.debugTracking) {
            var b = "AppMeasurement Debug: " + c;
            c = c.split("&");
            var d;
            for (d = 0; d < c.length; d++) b +=
                "\n\t" + a.unescape(c[d]);
            a.F(b)
        }
    };
    a.gb = function() { return a.marketingCloudVisitorID || a.analyticsVisitorID };
    a.Y = !1;
    var t;
    try { t = JSON.parse('{"x":"y"}') } catch (w) { t = null } t && "y" == t.x ? (a.Y = !0, a.X = function(a) { return JSON.parse(a) }) : k.$ && k.$.parseJSON ? (a.X = function(a) { return k.$.parseJSON(a) }, a.Y = !0) : a.X = function() { return null };
    a.Jb = function(c) {
        var b, d, f;
        a.gb() && 2047 < c.length && ("undefined" != typeof XMLHttpRequest && (b = new XMLHttpRequest, "withCredentials" in b ? d = 1 : b = 0), b || "undefined" == typeof XDomainRequest || (b =
            new XDomainRequest, d = 2), b && (a.AudienceManagement && a.AudienceManagement.isReady() || 0 != a.usePostbacks) && (a.Y ? b.Ba = !0 : b = 0));
        !b && a.Ta && (c = c.substring(0, 2047));
        !b && a.d.createElement && (0 != a.usePostbacks || a.AudienceManagement && a.AudienceManagement.isReady()) && (b = a.d.createElement("SCRIPT")) && "async" in b && ((f = (f = a.d.getElementsByTagName("HEAD")) && f[0] ? f[0] : a.d.body) ? (b.type = "text/javascript", b.setAttribute("async", "async"), d = 3) : b = 0);
        b || (b = new Image, b.alt = "", b.abort || "undefined" === typeof k.InstallTrigger ||
            (b.abort = function() { b.src = p }));
        b.Da = function() { try { b.G && (clearTimeout(b.G), b.G = 0) } catch (a) {} };
        b.onload = b.va = function() {
            a.bb(c);
            b.Da();
            a.sb();
            a.ga();
            a.q = 0;
            a.ka();
            if (b.Ba) { b.Ba = !1; try { a.doPostbacks(a.X(b.responseText)) } catch (d) {} }
        };
        b.onabort = b.onerror = b.Ha = function() {
            b.Da();
            (a.trackOffline || a.qa) && a.q && a.i.unshift(a.rb);
            a.q = 0;
            a.ma > a.O && a.Qa(a.i);
            a.ga();
            a.ua(500)
        };
        b.onreadystatechange = function() { 4 == b.readyState && (200 == b.status ? b.va() : b.Ha()) };
        a.Pa = a.C();
        if (1 == d || 2 == d) {
            var e = c.indexOf("?");
            f = c.substring(0,
                e);
            e = c.substring(e + 1);
            e = e.replace(/&callback=[a-zA-Z0-9_.\[\]]+/, "");
            1 == d ? (b.open("POST", f, !0), b.send(e)) : 2 == d && (b.open("POST", f), b.send(e))
        } else if (b.src = c, 3 == d) {
            if (a.Na) try { f.removeChild(a.Na) } catch (g) {} f.firstChild ? f.insertBefore(b, f.firstChild) : f.appendChild(b);
            a.Na = a.B
        }
        b.G = setTimeout(function() { b.G && (b.complete ? b.va() : (a.trackOffline && b.abort && b.abort(), b.Ha())) }, 5E3);
        a.rb = c;
        a.B = k["s_i_" + a.replace(a.account, ",", "_")] = b;
        if (a.useForcedLinkTracking && a.K || a.A) a.forcedLinkTrackingTimeout || (a.forcedLinkTrackingTimeout =
            250), a.ha = setTimeout(a.ga, a.forcedLinkTrackingTimeout)
    };
    a.sb = function() { if (a.ra() && !(a.Oa > a.O)) try { k.localStorage.removeItem(a.pa()), a.Oa = a.C() } catch (c) {} };
    a.Qa = function(c) { if (a.ra()) { a.Sa(); try { k.localStorage.setItem(a.pa(), k.JSON.stringify(c)), a.O = a.C() } catch (b) {} } };
    a.Sa = function() { if (a.trackOffline) { if (!a.offlineLimit || 0 >= a.offlineLimit) a.offlineLimit = 10; for (; a.i.length > a.offlineLimit;) a.Ga() } };
    a.forceOffline = function() { a.qa = !0 };
    a.forceOnline = function() { a.qa = !1 };
    a.pa = function() {
        return a.offlineFilename +
            "-" + a.visitorNamespace + a.account
    };
    a.C = function() { return (new Date).getTime() };
    a.La = function(a) { a = a.toLowerCase(); return 0 != a.indexOf("#") && 0 != a.indexOf("about:") && 0 != a.indexOf("opera:") && 0 != a.indexOf("javascript:") ? !0 : !1 };
    a.setTagContainer = function(c) {
        var b, d, f;
        a.Kb = c;
        for (b = 0; b < a._il.length; b++)
            if ((d = a._il[b]) && "s_l" == d._c && d.tagContainerName == c) {
                a.R(d);
                if (d.lmq)
                    for (b = 0; b < d.lmq.length; b++) f = d.lmq[b], a.loadModule(f.n);
                if (d.ml)
                    for (f in d.ml)
                        if (a[f])
                            for (b in c = a[f], f = d.ml[f], f) !Object.prototype[b] && ("function" !=
                                typeof f[b] || 0 > ("" + f[b]).indexOf("s_c_il")) && (c[b] = f[b]);
                if (d.mmq)
                    for (b = 0; b < d.mmq.length; b++) f = d.mmq[b], a[f.m] && (c = a[f.m], c[f.f] && "function" == typeof c[f.f] && (f.a ? c[f.f].apply(c, f.a) : c[f.f].apply(c)));
                if (d.tq)
                    for (b = 0; b < d.tq.length; b++) a.track(d.tq[b]);
                d.s = a;
                break
            }
    };
    a.Util = {
        urlEncode: a.escape,
        urlDecode: a.unescape,
        cookieRead: a.cookieRead,
        cookieWrite: a.cookieWrite,
        getQueryParam: function(c, b, d, f) {
            var e, g = "";
            b || (b = a.pageURL ? a.pageURL : k.location);
            d = d ? d : "&";
            if (!c || !b) return g;
            b = "" + b;
            e = b.indexOf("?");
            if (0 >
                e) return g;
            b = d + b.substring(e + 1) + d;
            if (!f || !(0 <= b.indexOf(d + c + d) || 0 <= b.indexOf(d + c + "=" + d))) {
                e = b.indexOf("#");
                0 <= e && (b = b.substr(0, e) + d);
                e = b.indexOf(d + c + "=");
                if (0 > e) return g;
                b = b.substring(e + d.length + c.length + 1);
                e = b.indexOf(d);
                0 <= e && (b = b.substring(0, e));
                0 < b.length && (g = a.unescape(b));
                return g
            }
        }
    };
    a.H = "supplementalDataID timestamp dynamicVariablePrefix visitorID marketingCloudVisitorID analyticsVisitorID audienceManagerLocationHint authState fid vmk visitorMigrationKey visitorMigrationServer visitorMigrationServerSecure charSet visitorNamespace cookieDomainPeriods fpCookieDomainPeriods cookieLifetime pageName pageURL customerPerspective referrer contextData currencyCode lightProfileID lightStoreForSeconds lightIncrementBy retrieveLightProfiles deleteLightProfiles retrieveLightData".split(" ");
    a.g = a.H.concat("purchaseID variableProvider channel server pageType transactionID campaign state zip events events2 products audienceManagerBlob tnt".split(" "));
    a.na = "timestamp charSet visitorNamespace cookieDomainPeriods cookieLifetime contextData lightProfileID lightStoreForSeconds lightIncrementBy".split(" ");
    a.P = a.na.slice(0);
    a.Aa = "account allAccounts debugTracking visitor visitorOptedOut trackOffline offlineLimit offlineThrottleDelay offlineFilename usePlugins doPlugins configURL visitorSampling visitorSamplingGroup linkObject clickObject linkURL linkName linkType trackDownloadLinks trackExternalLinks trackClickMap trackInlineStats linkLeaveQueryString linkTrackVars linkTrackEvents linkDownloadFileTypes linkExternalFilters linkInternalFilters useForcedLinkTracking forcedLinkTrackingTimeout trackingServer trackingServerSecure ssl abort mobile dc lightTrackVars maxDelay expectSupplementalData usePostbacks registerPreTrackCallback registerPostTrackCallback AudienceManagement".split(" ");
    for (m = 0; 250 >= m; m++) 76 > m && (a.g.push("prop" + m), a.P.push("prop" + m)), a.g.push("eVar" + m), a.P.push("eVar" + m), 6 > m && a.g.push("hier" + m), 4 > m && a.g.push("list" + m);
    m = "pe pev1 pev2 pev3 latitude longitude resolution colorDepth javascriptVersion javaEnabled cookiesEnabled browserWidth browserHeight connectionType homepage pageURLRest marketingCloudOrgID".split(" ");
    a.g = a.g.concat(m);
    a.H = a.H.concat(m);
    a.ssl = 0 <= k.location.protocol.toLowerCase().indexOf("https");
    a.charSet = "UTF-8";
    a.contextData = {};
    a.offlineThrottleDelay =
        0;
    a.offlineFilename = "AppMeasurement.offline";
    a.Pa = 0;
    a.ma = 0;
    a.O = 0;
    a.Oa = 0;
    a.linkDownloadFileTypes = "exe,zip,wav,mp3,mov,mpg,avi,wmv,pdf,doc,docx,xls,xlsx,ppt,pptx";
    a.w = k;
    a.d = k.document;
    try { if (a.Ta = !1, navigator) { var v = navigator.userAgent; if ("Microsoft Internet Explorer" == navigator.appName || 0 <= v.indexOf("MSIE ") || 0 <= v.indexOf("Trident/") && 0 <= v.indexOf("Windows NT 6")) a.Ta = !0 } } catch (x) {} a.ga = function() {
        a.ha && (k.clearTimeout(a.ha), a.ha = p);
        a.l && a.K && a.l.dispatchEvent(a.K);
        a.A && ("function" == typeof a.A ? a.A() :
            a.l && a.l.href && (a.d.location = a.l.href));
        a.l = a.K = a.A = 0
    };
    a.Ra = function() {
        a.b = a.d.body;
        a.b ? (a.v = function(c) {
            var b, d, f, e, g;
            if (!(a.d && a.d.getElementById("cppXYctnr") || c && c["s_fe_" + a._in])) {
                if (a.Ca)
                    if (a.useForcedLinkTracking) a.b.removeEventListener("click", a.v, !1);
                    else {
                        a.b.removeEventListener("click", a.v, !0);
                        a.Ca = a.useForcedLinkTracking = 0;
                        return
                    }
                else a.useForcedLinkTracking = 0;
                a.clickObject = c.srcElement ? c.srcElement : c.target;
                try {
                    if (!a.clickObject || a.N && a.N == a.clickObject || !(a.clickObject.tagName || a.clickObject.parentElement ||
                            a.clickObject.parentNode)) a.clickObject = 0;
                    else {
                        var h = a.N = a.clickObject;
                        a.la && (clearTimeout(a.la), a.la = 0);
                        a.la = setTimeout(function() { a.N == h && (a.N = 0) }, 1E4);
                        f = a.Ja();
                        a.track();
                        if (f < a.Ja() && a.useForcedLinkTracking && c.target) {
                            for (e = c.target; e && e != a.b && "A" != e.tagName.toUpperCase() && "AREA" != e.tagName.toUpperCase();) e = e.parentNode;
                            if (e && (g = e.href, a.La(g) || (g = 0), d = e.target, c.target.dispatchEvent && g && (!d || "_self" == d || "_top" == d || "_parent" == d || k.name && d == k.name))) {
                                try { b = a.d.createEvent("MouseEvents") } catch (l) {
                                    b =
                                        new k.MouseEvent
                                }
                                if (b) { try { b.initMouseEvent("click", c.bubbles, c.cancelable, c.view, c.detail, c.screenX, c.screenY, c.clientX, c.clientY, c.ctrlKey, c.altKey, c.shiftKey, c.metaKey, c.button, c.relatedTarget) } catch (m) { b = 0 } b && (b["s_fe_" + a._in] = b.s_fe = 1, c.stopPropagation(), c.stopImmediatePropagation && c.stopImmediatePropagation(), c.preventDefault(), a.l = c.target, a.K = b) }
                            }
                        }
                    }
                } catch (n) { a.clickObject = 0 }
            }
        }, a.b && a.b.attachEvent ? a.b.attachEvent("onclick", a.v) : a.b && a.b.addEventListener && (navigator && (0 <= navigator.userAgent.indexOf("WebKit") &&
            a.d.createEvent || 0 <= navigator.userAgent.indexOf("Firefox/2") && k.MouseEvent) && (a.Ca = 1, a.useForcedLinkTracking = 1, a.b.addEventListener("click", a.v, !0)), a.b.addEventListener("click", a.v, !1))) : setTimeout(a.Ra, 30)
    };
    a.Ra();
    r ? a.setAccount(r) : a.F("Error, missing Report Suite ID in AppMeasurement initialization");
    a.loadModule("ActivityMap")
}

function tdi_s_gi(r) {
    var a, k = window.s_c_il,
        p, n, m = r.split(","),
        s, u, t = 0;
    if (k)
        for (p = 0; !t && p < k.length;) {
            a = k[p];
            if ("s_c" == a._c && (a.account || a.oun))
                if (a.account && a.account == r) t = 1;
                else
                    for (n = a.account ? a.account : a.oun, n = a.allAccounts ? a.allAccounts : n.split(","), s = 0; s < m.length; s++)
                        for (u = 0; u < n.length; u++) m[s] == n[u] && (t = 1);
            p++
        }
    t || (a = new AppMeasurement(r));
    return a
}
AppMeasurement.getInstance = tdi_s_gi;
window.s_objectID || (window.s_objectID = 0);

function tdi_s_pgicq() {
    var r = window,
        a = r.s_giq,
        k, p, n;
    if (a)
        for (k = 0; k < a.length; k++) p = a[k], n = s_gi(p.oun), n.setAccount(p.un), n.setTagContainer(p.tagContainerName);
    r.s_giq = 0
}
tdi_s_pgicq();

/**** See Configuration Tag in Ensighten ****/
var tAAC = ((window.tdi || {}).configuration || {}).adobeAnalytics || {}; 

var s = window[tAAC.adobeObj] = new AppMeasurement((function(){
    var tAAC = ((window.tdi || {}).configuration || {}).adobeAnalytics || {},
    rsid = "";

    if (tAAC && typeof tAAC.isProd !== 'undefined') {
        if (tAAC.isProd && typeof tAAC.rsidPROD === 'string'){
            return tAAC.rsidPROD;
        }
        else if (!tAAC.isProd && typeof tAAC.rsidDEV === 'string'){
            return tAAC.rsidDEV;
        }
    }

  return "turnerintglobaldev";
})());



/************************** CONFIG SECTION **************************/
s.trackingServer = tAAC.trackingServer;
s.trackingServerSecure = tAAC.trackingServerSecure;
s.visitorNamespace = tAAC.visitorNamespace;
s.trackDownloadLinks = tAAC.trackDownloadLinks;
s.trackExternalLinks = tAAC.trackExternalLinks;
s.trackInlineStats = tAAC.trackInlineStats;
s.linkDownloadFileTypes = tAAC.linkDownloadFileTypes;
s.linkInternalFilters = tAAC.linkInternalFilters
s.linkLeaveQueryString = tAAC.linkLeaveQueryString
s.linkTrackVars = 'None';
s.linkTrackEvents = 'None';
s.visitor = window.Visitor.getInstance(tAAC.expCldID);
s.charSet = tAAC.charSet
s.usePlugins = true;


s.doPlugins = function (s) {
    s.contextData["previouspage"] = s.getPreviousValue(s.pageName || s.contextData.pageName,"gpv_pn");
    s.contextData["percentpageviewed"] = s.getPercentPageViewed();
};

s.loadModule("Activity Map");


/************************** PLUGINS SECTION *************************/

/*
 * Plugin: getPreviousValue_v1.0 - return previous value of designated
 *   variable (requires split utility)
 */
s.getPreviousValue=new Function("v","c","el",""
+"var s=this,t=new Date,i,j,r='';t.setTime(t.getTime()+1800000);if(el"
+"){if(s.events){i=s.split(el,',');j=s.split(s.events,',');for(x in i"
+"){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t)"
+":s.c_w(c,'no value',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?"
+"s.c_w(c,v,t):s.c_w(c,'no value',t);return r}");
/*
 * Utility Function: split v1.5 - split a string (JS 1.0 compatible)
 */
s.split=new Function("l","d",""
+"var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x"
+"++]=l.substring(0,i);l=l.substring(i+d.length);}return a");

/* Adobe Consulting Plugin: getPercentPageViewed v3.0 w/handlePPVevents helper function (Requires AppMeasurement and p_fo plugin) */
s.getPercentPageViewed=function(pid,ch){var s=this,a=s.c_r("s_ppv");a=-1<a.indexOf(",")?a.split(","):[];a[0]=s.unescape(a[0]); pid=pid?pid:s.pageName?s.pageName:document.location.href;s.ppvChange=ch?ch:!0;if("undefined"===typeof s.linkType||"o"!==s.linkType)s.ppvID&&s.ppvID===pid||(s.ppvID=pid,s.c_w("s_ppv",""),s.handlePPVevents()),s.p_fo("s_gppvLoad")&&window.addEventListener&&(window.addEventListener("load",s.handlePPVevents,!1),window.addEventListener("click",s.handlePPVevents, !1),window.addEventListener("scroll",s.handlePPVevents,!1),window.addEventListener("resize",s.handlePPVevents,!1)),s._ppvPreviousPage=a[0]?a[0]:"",s._ppvHighestPercentViewed=a[1]?a[1]:"",s._ppvInitialPercentViewed=a[2]?a[2]:"",s._ppvHighestPixelsSeen=a[3]?a[3]:""};

/* Adobe Consulting Plugin: handlePPVevents helper function (for getPercentPageViewed v3.0 Plugin) */
s.handlePPVevents=function(){if(s_c_il){for(var b=0,d=s_c_il.length;b<d;b++)if("undefined"!=typeof s_c_il[b]&&s_c_il[b]._c&&"s_c"==s_c_il[b]._c){var a=s_c_il[b];break}if(a&&a.ppvID){var f=Math.max(Math.max(document.body.scrollHeight,document.documentElement.scrollHeight),Math.max(document.body.offsetHeight,document.documentElement.offsetHeight),Math.max(document.body.clientHeight,document.documentElement.clientHeight));b=(window.pageYOffset||window.document.documentElement.scrollTop||window.document.body.scrollTop)+(window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight);d=Math.min(Math.round(b/f*100),100);var e="";!a.c_r("s_tp")||a.unescape(a.c_r("s_ppv").split(",")[0]) !==a.ppvID||1==a.ppvChange&&a.c_r("s_tp")&&f!=a.c_r("s_tp")?(a.c_w("s_tp",f),a.c_w("s_ppv","")):e=a.c_r("s_ppv");var c=e&&-1<e.indexOf(",")?e.split(",",4):[];f=0<c.length?c[0]:escape(a.ppvID);var g=1<c.length?parseInt(c[1]):d,h=2<c.length?parseInt(c[2]) :d;c=3<c.length?parseInt(c[3]):b;0<d&&(e=f+","+(d>g?d:g)+","+h+","+(b>c?b:c));a.c_w("s_ppv",e)}}};

/* Adobe Consulting Plugin: p_fo (pageFirstOnly) v2.0 (Requires AppMeasurement) */ 
s.p_fo=function(on){var s=this;s.__fo||(s.__fo={});if(s.__fo[on])return!1;s.__fo[on]={};return!0};
/************************** MODULES SECTION *************************/

function AppMeasurement_Module_ActivityMap(t){function e(t,e){var n,i,r;if(t&&e&&(n=c.c[e]||(c.c[e]=e.split(","))))for(r=0;r<n.length&&(i=n[r++]);)if(-1<t.indexOf(i))return null;return u=1,t}function n(e,n,i,r,a){var c,s;if(e.dataset&&(s=e.dataset[n])?c=s:e.getAttribute&&((s=e.getAttribute("data-"+i))?c=s:(s=e.getAttribute(i))&&(c=s)),!c&&t.useForcedLinkTracking&&a&&(c="",n=e.onclick?""+e.onclick:"")){var u,o;if(0<=(i=n.indexOf(r))){for(i+=10;i<n.length&&0<="= \t\r\n".indexOf(n.charAt(i));)i++;if(i<n.length){for(s=i,u=o=0;s<n.length&&(";"!=n.charAt(s)||u);)u?n.charAt(s)!=u||o?o="\\"==n.charAt(s)?!o:0:u=0:'"'!=(u=n.charAt(s))&&"'"!=u&&(u=0),s++;(n=n.substring(i,s))&&(e.e=new Function("s","var e;try{s.w."+r+"="+n+"}catch(e){}"),e.e(t))}}}return c||a&&t.w[r]}function i(t,n,i){var r;return(r=c[n](t,i))&&(u?(u=0,r):e(a(r),c[n+"Exclusions"]))}function r(t,e,n){var i;if(t&&!(1===(i=t.nodeType)&&(i=t.nodeName)&&(i=i.toUpperCase())&&o[i])&&(1===t.nodeType&&(i=t.nodeValue)&&(e[e.length]=i),n.a||n.t||n.s||!t.getAttribute||((i=t.getAttribute("alt"))?n.a=i:(i=t.getAttribute("title"))?n.t=i:"IMG"==(""+t.nodeName).toUpperCase()&&(i=t.getAttribute("src")||t.src)&&(n.s=i)),(i=t.childNodes)&&i.length))for(t=0;t<i.length;t++)r(i[t],e,n)}function a(t){if(null==t||void 0==t)return t;try{return t.replace(RegExp("^[\\s\\n\\f\\r\\t\t-\r ┬ас??са?т??-т??\u2028\u2029т??у??\ufeff]+","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r ┬ас??са?т??-т??\u2028\u2029т??у??\ufeff]+$","mg"),"").replace(RegExp("[\\s\\n\\f\\r\\t\t-\r ┬ас??са?т??-т??\u2028\u2029т??у??\ufeff]{1,}","mg")," ").substring(0,254)}catch(t){}}var c=this;c.s=t;var s=window;s.s_c_in||(s.s_c_il=[],s.s_c_in=0),c._il=s.s_c_il,c._in=s.s_c_in,c._il[c._in]=c,s.s_c_in++,c._c="s_m",c.c={};var u=0,o={SCRIPT:1,STYLE:1,LINK:1,CANVAS:1};c._g=function(){var e,n,r,a=t.contextData,c=t.linkObject;(e=t.pageName||t.pageURL)&&(n=i(c,"link",t.linkName))&&(r=i(c,"region"))&&(a["a.activitymap.page"]=e.substring(0,255),a["a.activitymap.link"]=128<n.length?n.substring(0,128):n,a["a.activitymap.region"]=127<r.length?r.substring(0,127):r,a["a.activitymap.pageIDType"]=t.pageName?1:0)},c.link=function(t,i){var s;if(i)s=e(a(i),c.linkExclusions);else if((s=t)&&!(s=n(t,"sObjectId","s-object-id","s_objectID",1))){var u,o;(o=e(a(t.innerText||t.textContent),c.linkExclusions))||(r(t,u=[],s={a:void 0,t:void 0,s:void 0}),(o=e(a(u.join(""))))||(o=e(a(s.a?s.a:s.t?s.t:s.s?s.s:void 0)))||!(u=(u=t.tagName)&&u.toUpperCase?u.toUpperCase():"")||("INPUT"==u||"SUBMIT"==u&&t.value?o=e(a(t.value)):"IMAGE"==u&&t.src&&(o=e(a(t.src))))),s=o}return s},c.region=function(t){for(var e,i=c.regionIDAttribute||"id";t&&(t=t.parentNode);){if(e=n(t,i,i,i))return e;if("BODY"==t.nodeName)return"BODY"}}}window.tdi_s_gi = tdi_s_gi;window.tdi_s_pgicq = tdi_s_pgicq;
 window.AppMeasurement = AppMeasurement;window.AppMeasurement_Module_ActivityMap = AppMeasurement_Module_ActivityMap;
}]);Bootstrapper.AF.push(['call', 'SiteCatalyst', 'block', 'tdi_s']);Bootstrapper.AF.push(['push', 'SiteCatalyst', 'ns', 'tdi_s']);Bootstrapper.AF.push(['set', 'SiteCatalyst', 'clearData', function() { if (this.ns) {for (var i = 0; i < this.ns.length; i++) {var sObj = this.ns[i]; Bootstrapper.AF.push(['set', sObj, 'clearData', function() {this.pre = [];}]);}}}]);
Bootstrapper.AF.push(['call', 'SiteCatalyst', 'clearData']);