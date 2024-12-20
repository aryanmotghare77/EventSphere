(function() {
    var scheme = (("https:" == document.location.protocol) ? "https" : "http");
    var adnxs_domain = 'secure.adnxs.com';
    var aol_domain = 'secure.leadback.advertising.com';
    window.adroll_seg_eid = "FKZIJRDZ4JHOBA6ZUNYVZB";
    window.adroll_sendrolling_cross_device = true;
    window.adroll_form_fields = {};
    window.adroll_third_party_forms = {};
    window.adroll_third_party_detected = {
        "RGOD2I433VD2BF36MU42G4": {
            "advertisable_eid": "RGOD2I433VD2BF36MU42G4",
            "has_hubspot": false,
            "has_mailchimp": false,
            "has_marketo": false
        }
    };
    window.adroll_snippet_errors = [];
    if (typeof __adroll._form_attach != 'undefined') {
        __adroll._form_attach();
    }
    if (typeof __adroll._form_tp_attach != 'undefined') {
        __adroll._form_tp_attach();
    }
    window.adroll_rule_type = "p";
    var rule = ["*", "*"];
    if (scheme == 'http') {
        adnxs_domain = 'ib.adnxs.com';
        aol_domain = 'leadback.advertising.com';
    }
    var el = document.createElement("div");
    el.style["width"] = "1px";
    el.style["height"] = "1px";
    el.style["display"] = "inline";
    el.style["position"] = "absolute";
    var content = '';

    if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
        ! function(f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function() {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window,
            document, 'script', '//connect.facebook.net/en_US/fbevents.js');
    }

    try {
        try {

            (function() {
                var queue = [];
                var start = new Date().getTime();
                var lastMouseSnap = 0;
                var mousemoveDelay = 100;
                var mousePath = "";
                var mlength = 255;

                var focused = document.hasFocus();
                var focusTimeOnPage = 0;
                var outfocusTimeOnPage = 0;

                var focusedFlushInterval = 10000;
                var unfocusedFlushInterval = 60000;
                var flushInterval = focused === true ? focusedFlushInterval : unfocusedFlushInterval;
                var flushTimeout;

                var scrollTimeout;
                var ieVers = 0,
                    maxUrl = 3900;
                var ve = navigator.appVersion;
                if (ve) {
                    (ve.indexOf("MSIE 6.") > -1 ?
                        (ieVers = 6, maxUrl = 1700) :
                        ve.indexOf("MSIE 7.") > -1 ?
                        (ieVers = 7, maxUrl = 1900) :
                        ve.indexOf("MSIE 8.") > -1 && (ieVer = 8));
                }
                var onp_path = "/onp/" + adroll_adv_id + "/" + adroll_pix_id;

                function trunc(s, at) {
                    return isString(s) ? s.slice(0, at) : s
                }

                function isObject(o) {
                    return o && "object" == typeof o || false
                }

                function isString(s) {
                    return "string" == typeof s || isObject(s) && Object.prototype.toString(s) == "[object String]" || false
                }


                function getTarget(evt) {
                    return evt.target || evt.srcElement;
                }

                function getClassName(t) {
                    var e = function(t) {
                        return 1 === t.nodeType && "http://www.w3.org/2000/svg" === t.namespaceURI
                    };
                    if (void 0 === t) return void 0
                    return (e(t) ? t.className ? t.className.baseVal : t.getAttribute("class") : t.className) || ""
                }

                function getAttr(t, e) {
                    return "form" === t.tagName.toLowerCase() ? t.getAttribute(e) || "" : t[e]
                }

                function getPath(t) {
                    var e, r, o, u;
                    for (r = ""; t && t.tagName && "BODY" !== t.tagName && "HTML" !== t.tagName && (e = "@" + t.tagName.toLowerCase() + ";", u = getAttr(t, "id"), u && (e += "#" + u.replace(/\s/g, "") + ";"), o = getClassName(t), o && (e += "." + o.split(/\s+/).sort().join(";.") + ";"), e += "|", !(r.length + e.length > 1024));) r = e + r, t = t.parentElement;
                    return r
                }

                function cleanAndTrim(t) {
                    if (t == undefined) return t;
                    return t = t.toString(), t.length > 255 && (t = t.slice(0, 255).split(" ").slice(0, -1).join(" ")), t.replace(/[\(\)\!\@\#\$\%\^\&\*]/g, "")
                }


                function queueEvent(evt) {
                    var evt = evt || window.event,
                        target = getTarget(evt),
                        evtName = trunc("mouseup" === evt.type ? "click" : evt.type, 255),
                        className = getClassName(target),
                        // This is cool but invasive
                        // tagValue = trunc(content(target).replace(/^\s+|\s+$/g, ""), 64),
                        tagPath = evt.type === "scroll" ? "" : getPath(target);

                    var ev = {}

                    if (target != undefined && (evtName == "click" || evtName == "change" || evtName == "submit")) {
                        ev['i'] = trunc(getAttr(target, "id"), 255);
                        ev['c'] = cleanAndTrim(className);
                        ev['n'] = trunc(target.tagName.toLowerCase(), 255);
                    }
                    switch (evtName) {
                        case "click":
                            ev['t'] = 'cli';
                            ev['p'] = tagPath;
                            ev['h'] = trunc(findAHRef(target), 1024);
                            break;
                        case "change":
                            ev['t'] = 'cha';
                            ev['p'] = tagPath;
                            break;
                        case "scroll":
                            ev['t'] = 'scr';
                            ev['x'] = evt.x;
                            ev['y'] = evt.y;
                            break;
                        case "mousemove":
                            if (queue.length && queue[queue.length - 1].t == 'mmv') {
                                ev = undefined;
                                queue[queue.length - 1].m += "x" + Math.floor(evt.clientX / 5).toString(16) + "y" + Math.floor(evt.clientY / 5).toString(16) + ".";
                            } else {
                                ev['t'] = 'mmv';
                                ev['m'] = "x" + Math.floor(evt.clientX / 5).toString(16) + "y" + Math.floor(evt.clientY / 5).toString(16) + ".";
                            }
                            break;
                        case "submit":
                            ev['t'] = 'sub';
                            ev['p'] = tagPath;
                            break;
                        case "top":
                            ev['t'] = 'top';
                            ev['f'] = evt.time;
                            break;
                        case "focus":
                        case "focusin":
                        case "pageshow":
                            ev['t'] = 'foc'
                            break;
                        case "blur":
                        case "focusout":
                        case "pagehide":
                            ev['t'] = 'blu'
                            break;
                        case "error":
                            ev['t'] = 'err'
                            break;
                        default:
                            return;
                    }
                    if (ev != undefined) {
                        var toQueue = "ev=" + encodeURIComponent(objToString(ev));
                        if ((queue.join("&").length + toQueue.length) > maxUrl) {
                            flush();
                        }
                        queue.push(toQueue);
                        if (evtName == 'click') {
                            flush();
                        }
                    }
                }

                function clearQueue() {
                    queue = [];
                }

                function onClick(evt) {
                    var target, btn;
                    if (evt = evt || window.event,
                        button = evt.which || evt.button,
                        target = getTarget(evt),
                        (!ieVers || target === evt.currentTarget) && target && target.tagName) {
                        if ("click" === evt.type) {
                            queueEvent(evt)
                        }
                    }
                }

                function onSubmit(evt) {
                    evt = evt || window.event,
                        queueEvent(evt)
                }

                function findAHRef(t) {
                    for (var e = null; t && "BODY" !== t.tagName && "HTML" !== t.tagName;) {
                        if (e = t.getAttribute("href")) return e;
                        t = t.parentElement
                    }
                    return e
                }

                function onScroll(evt) {
                    if (scrollTimeout) {
                        clearTimeout(scrollTimeout);
                    }
                    scrollTimeout = setTimeout(saveScrollPos, 500)
                }

                function saveScrollPos() {
                    queueEvent({
                        "type": "scroll",
                        "x": window.pageXOffset,
                        "y": window.pageYOffset
                    });
                }

                function onMousemove(evt) {
                    evt = evt || window.event;
                    var now = new Date().getTime();
                    if (now - lastMouseSnap > mousemoveDelay) {
                        queueEvent(evt);
                        lastMouseSnap = now;
                    }
                }

                function onFocusIn(evt) {
                    if (getTarget(evt) != window) {
                        return;
                    }
                    focused = true;
                    start = new Date().getTime();
                    queueEvent(evt);
                    flushInterval = focusedFlushInterval;
                    clearTimeout(flushTimeout);
                    flush();
                }

                function onFocusOut(evt) {
                    if (getTarget(evt) != window) {
                        return;
                    }
                    queueEvent(evt);
                    focused = false;
                    flush();
                    // Take this out and it will continue to sync even out of focus, but that's not useful.
                    clearTimeout(flushTimeout);
                    flushInterval = unfocusedFlushInterval;
                }

                function listen(tag, evt, handler, args) {
                    document.addEventListener ? tag.addEventListener(evt, handler, args) : document.attachEvent ? tag.attachEvent("on" + evt, function() {
                        var e = window.event;
                        e.currentTarget = tag;
                        e.target = e.srcElement;
                        handler.call(tag, e)
                    }) : tag["on" + evt] = handler
                }

                function unlisten(tag, evt, handler, args) {
                    return tag.removeEventListener ? (tag.removeEventListener(evt, handler, args), !0) : t.detachEvent ? t.detachEvent("on" + evt, handler) : void(tag["on" + evt] == handler && delete tag["on" + evt])
                }

                function listenAll() {

                    function wrapException(func) {
                        return function wrapper(evt) {
                            try {
                                return func(evt);
                            } catch (e) {}
                        }
                    }
                    try {
                        //document.addEventListener("change", wrapException(queueEvent), true);
                        //document.addEventListener("click", wrapException(onClick), true);
                        //document.addEventListener("submit", wrapException(onSubmit), true);
                        //document.addEventListener("scroll", wrapException(onScroll), true);
                        //document.addEventListener("mousemove", wrapException(onMousemove), true);
                        window.addEventListener("beforeunload", wrapException(flush), true);
                        window.addEventListener("focus", wrapException(onFocusIn), true);
                        window.addEventListener("blur", wrapException(onFocusOut), true);
                    } catch (e) {}


                    var oldonerror = window.onerror;
                    window.onerror = function() {
                        queueEvent({
                            "type": "error",
                            "msg": arguments[0],
                            "url": arguments[1],
                            "lineno": arguments[2],
                            "colno": arguments[3],
                            "error": arguments[4]
                        });
                        if (oldonerror) oldonerror.apply(this, arguments);
                        return false;
                    };

                };

                function objToString(obj, i) {
                    var str = "";
                    for (var key in obj) {
                        if (!obj.hasOwnProperty(key)) continue
                        if (!obj[key]) continue
                        if (str != "") {
                            str += "&";
                        }
                        str += key + "=" + encodeURIComponent(obj[key]);
                    }
                    return str;
                }


                function flush() {
                    try {
                        if (focused) {
                            var now = new Date().getTime();
                            focusTimeOnPage = focusTimeOnPage + parseInt((now - start) / 1000);
                            start = now;
                            queue.splice(0, 0, "ev=" + encodeURIComponent("t=top&f=" + focusTimeOnPage));
                        }
                        send(queue);
                        clearQueue();
                        clearTimeout(flushTimeout);
                        flushTimeout = setTimeout(flush, flushInterval);
                    } catch (e) {}
                }

                function send(paramsList) {
                    var toSend = paramsList.join("&");
                    if (toSend.length > 0) {
                        var fullPath = __adroll._srv(onp_path + "?" + "pv=" + __adroll.pv + "&" + paramsList.join("&"));
                        var img = new window.Image();
                        img.src = fullPath;
                    }
                }


                listenAll();
                flush();

            })();

        } catch (e) {
            window.adroll_snippet_errors['track-everything'] = e;
        }
        try {

            (function() {
                var rtb = document.createElement("div");
                rtb.style["width"] = "1px";
                rtb.style["height"] = "1px";
                rtb.style["display"] = "inline";
                rtb.style["position"] = "absolute";
                rtb.innerHTML = ["/cm/b/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/experian/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/g/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/index/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/l/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/n/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/o/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/outbrain/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/pubmatic/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/r/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/taboola/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/triplelift/out?advertisable=RGOD2I433VD2BF36MU42G4", "/cm/x/out?advertisable=RGOD2I433VD2BF36MU42G4"].reduce(function(acc, cmURL) {
                    return acc + '<img height="1" width="1" style="border-style:none;" alt="" src="' + __adroll._srv(cmURL) + '"/>';
                }, '');
                __adroll._head().appendChild(rtb);
            })();

        } catch (e) {
            window.adroll_snippet_errors['maya_snippet'] = e;
        }
        try {

            (function() {
                var scr = document.createElement("script");
                scr.type = "text/javascript";
                scr.src = "//s.adroll.com/j/sendrolling.js";
                ((document.getElementsByTagName("head") || [null])[0] || document.getElementsByTagName("script")[0].parentNode).appendChild(scr);
            }());

        } catch (e) {
            window.adroll_snippet_errors['sendrolling'] = e;
        }
        try {
            if (__adroll.consent_allowed(__adroll.consent_networks.facebook)) {
                var fbLimitedDataUse = true;
                if (typeof __adroll.fb === 'undefined') {
                    if (fbLimitedDataUse) {
                        fbq('dataProcessingOptions', ['LDU'], 0, 0);
                    }
                    fbq('init', '616100948585653');
                    fbq('set', 'autoConfig', 'false', '616100948585653');
                    __adroll.fb = true;

                    var __fbcd = {
                        segment_eid: "FKZIJRDZ4JHOBA6ZUNYVZB"
                    };
                    for (var prop in __adroll.get_external_data()) {
                        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
                    }

                    fbq('track', "PageView", __fbcd);
                } else {
                    var __fbcd = {
                        event: "EventSegment",
                        segment_eid: "FKZIJRDZ4JHOBA6ZUNYVZB"
                    };
                    for (var prop in __adroll.get_external_data()) {
                        __fbcd['ar_' + prop] = __adroll.get_external_data()[prop];
                    }

                    fbq('track', "CustomEvent", __fbcd);
                }
            }

        } catch (e) {
            window.adroll_snippet_errors['FacebookExternalDataWCASnippet'] = e;
        }
    } catch (e) {}

    var r = Math.random() * 10000000000000000;
    content = content.replace(/\[ord\]/gi, r);
    content = content.replace(/\[protocol\]/gi, scheme);
    content = content.replace(/\[adnxs_domain\]/gi, adnxs_domain);
    content = content.replace(/\[aol_domain\]/gi, aol_domain);
    var adroll_tpc = __adroll._global('adroll_tpc');
    if (adroll_tpc) {
        var srv_parts = __adroll._srv().split('?');
        var srv_host = srv_parts[0].substr(srv_parts[0].indexOf(':') + 1);
        var srv_re = new RegExp(srv_host + '([^\?\"\'\>\#\S]+)\\?*', 'gi');
        content = content.replace(srv_re, srv_host + '$1?' + srv_parts[1] + '&');
    }
    content = __adroll.replace_external_data(content);
    el.innerHTML = content;
    __adroll._head().appendChild(el);
    if (typeof __adroll.set_pixel_cookie != 'undefined') {
        __adroll.set_pixel_cookie(adroll_adv_id, adroll_pix_id, "FKZIJRDZ4JHOBA6ZUNYVZB");
    }
}());