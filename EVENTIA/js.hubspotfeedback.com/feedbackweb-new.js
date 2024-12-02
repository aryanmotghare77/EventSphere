! function() {
    "use strict";
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function t(e, t) {
        return e(t = {
            exports: {}
        }, t.exports), t.exports
    }
    var n = function(e) {
            return e && e.Math == Math && e
        },
        r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || Function("return this")(),
        o = function(e) {
            try {
                return !!e()
            } catch (e) {
                return !0
            }
        },
        i = !o((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        s = {}.propertyIsEnumerable,
        a = Object.getOwnPropertyDescriptor,
        c = {
            f: a && !s.call({
                1: 2
            }, 1) ? function(e) {
                var t = a(this, e);
                return !!t && t.enumerable
            } : s
        },
        u = function(e, t) {
            return {
                enumerable: !(1 & e),
                configurable: !(2 & e),
                writable: !(4 & e),
                value: t
            }
        },
        d = {}.toString,
        h = function(e) {
            return d.call(e).slice(8, -1)
        },
        l = "".split,
        f = o((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(e) {
            return "String" == h(e) ? l.call(e, "") : Object(e)
        } : Object,
        p = function(e) {
            if (null == e) throw TypeError("Can't call method on " + e);
            return e
        },
        b = function(e) {
            return f(p(e))
        },
        m = function(e) {
            return "object" == typeof e ? null !== e : "function" == typeof e
        },
        g = function(e, t) {
            if (!m(e)) return e;
            var n, r;
            if (t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r;
            if ("function" == typeof(n = e.valueOf) && !m(r = n.call(e))) return r;
            if (!t && "function" == typeof(n = e.toString) && !m(r = n.call(e))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        y = {}.hasOwnProperty,
        w = function(e, t) {
            return y.call(e, t)
        },
        v = r.document,
        $ = m(v) && m(v.createElement),
        k = function(e) {
            return $ ? v.createElement(e) : {}
        },
        E = !i && !o((function() {
            return 7 != Object.defineProperty(k("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        x = Object.getOwnPropertyDescriptor,
        S = {
            f: i ? x : function(e, t) {
                e = b(e);
                t = g(t, !0);
                if (E) try {
                    return x(e, t)
                } catch (e) {}
                if (w(e, t)) return u(!c.f.call(e, t), e[t])
            }
        },
        O = function(e) {
            if (!m(e)) throw TypeError(String(e) + " is not an object");
            return e
        },
        I = Object.defineProperty,
        L = {
            f: i ? I : function(e, t, n) {
                O(e);
                t = g(t, !0);
                O(n);
                if (E) try {
                    return I(e, t, n)
                } catch (e) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                "value" in n && (e[t] = n.value);
                return e
            }
        },
        T = i ? function(e, t, n) {
            return L.f(e, t, u(1, n))
        } : function(e, t, n) {
            e[t] = n;
            return e
        },
        _ = function(e, t) {
            try {
                T(r, e, t)
            } catch (n) {
                r[e] = t
            }
            return t
        },
        M = "__core-js_shared__",
        j = r[M] || _(M, {}),
        W = Function.toString;
    "function" != typeof j.inspectSource && (j.inspectSource = function(e) {
        return W.call(e)
    });
    var q, P, C, F = j.inspectSource,
        N = r.WeakMap,
        R = "function" == typeof N && /native code/.test(F(N)),
        H = !1,
        z = t((function(e) {
            (e.exports = function(e, t) {
                return j[e] || (j[e] = void 0 !== t ? t : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: H ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        A = 0,
        U = Math.random(),
        D = function(e) {
            return "Symbol(" + String(void 0 === e ? "" : e) + ")_" + (++A + U).toString(36)
        },
        B = z("keys"),
        V = function(e) {
            return B[e] || (B[e] = D(e))
        },
        Q = {},
        G = r.WeakMap,
        J = function(e) {
            return C(e) ? P(e) : q(e, {})
        },
        K = function(e) {
            return function(t) {
                var n;
                if (!m(t) || (n = P(t)).type !== e) throw TypeError("Incompatible receiver, " + e + " required");
                return n
            }
        };
    if (R) {
        var Y = new G,
            Z = Y.get,
            X = Y.has,
            ee = Y.set;
        q = function(e, t) {
            ee.call(Y, e, t);
            return t
        };
        P = function(e) {
            return Z.call(Y, e) || {}
        };
        C = function(e) {
            return X.call(Y, e)
        }
    } else {
        var te = V("state");
        Q[te] = !0;
        q = function(e, t) {
            T(e, te, t);
            return t
        };
        P = function(e) {
            return w(e, te) ? e[te] : {}
        };
        C = function(e) {
            return w(e, te)
        }
    }
    var ne = {
            set: q,
            get: P,
            has: C,
            enforce: J,
            getterFor: K
        },
        re = (ne.set, ne.get, ne.has, ne.enforce, ne.getterFor, t((function(e) {
            var t = ne.get,
                n = ne.enforce,
                o = String(String).split("String");
            (e.exports = function(e, t, i, s) {
                var a = !!s && !!s.unsafe,
                    c = !!s && !!s.enumerable,
                    u = !!s && !!s.noTargetGet;
                if ("function" == typeof i) {
                    "string" != typeof t || w(i, "name") || T(i, "name", t);
                    n(i).source = o.join("string" == typeof t ? t : "")
                }
                if (e !== r) {
                    a ? !u && e[t] && (c = !0) : delete e[t];
                    c ? e[t] = i : T(e, t, i)
                } else c ? e[t] = i : _(t, i)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && t(this).source || F(this)
            }))
        }))),
        oe = r,
        ie = function(e) {
            return "function" == typeof e ? e : void 0
        },
        se = function(e, t) {
            return arguments.length < 2 ? ie(oe[e]) || ie(r[e]) : oe[e] && oe[e][t] || r[e] && r[e][t]
        },
        ae = Math.ceil,
        ce = Math.floor,
        ue = function(e) {
            return isNaN(e = +e) ? 0 : (e > 0 ? ce : ae)(e)
        },
        de = Math.min,
        he = function(e) {
            return e > 0 ? de(ue(e), 9007199254740991) : 0
        },
        le = Math.max,
        fe = Math.min,
        pe = function(e, t) {
            var n = ue(e);
            return n < 0 ? le(n + t, 0) : fe(n, t)
        },
        be = function(e) {
            return function(t, n, r) {
                var o, i = b(t),
                    s = he(i.length),
                    a = pe(r, s);
                if (e && n != n) {
                    for (; s > a;)
                        if ((o = i[a++]) != o) return !0
                } else
                    for (; s > a; a++)
                        if ((e || a in i) && i[a] === n) return e || a || 0;
                return !e && -1
            }
        },
        me = {
            includes: be(!0),
            indexOf: be(!1)
        },
        ge = (me.includes, me.indexOf, me.indexOf),
        ye = function(e, t) {
            var n, r = b(e),
                o = 0,
                i = [];
            for (n in r) !w(Q, n) && w(r, n) && i.push(n);
            for (; t.length > o;) w(r, n = t[o++]) && (~ge(i, n) || i.push(n));
            return i
        },
        we = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        ve = we.concat("length", "prototype"),
        $e = {
            f: Object.getOwnPropertyNames || function(e) {
                return ye(e, ve)
            }
        },
        ke = {
            f: Object.getOwnPropertySymbols
        },
        Ee = se("Reflect", "ownKeys") || function(e) {
            var t = $e.f(O(e)),
                n = ke.f;
            return n ? t.concat(n(e)) : t
        },
        xe = function(e, t) {
            for (var n = Ee(t), r = L.f, o = S.f, i = 0; i < n.length; i++) {
                var s = n[i];
                w(e, s) || r(e, s, o(t, s))
            }
        },
        Se = /#|\.prototype\./,
        Oe = function(e, t) {
            var n = Le[Ie(e)];
            return n == _e || n != Te && ("function" == typeof t ? o(t) : !!t)
        },
        Ie = Oe.normalize = function(e) {
            return String(e).replace(Se, ".").toLowerCase()
        },
        Le = Oe.data = {},
        Te = Oe.NATIVE = "N",
        _e = Oe.POLYFILL = "P",
        Me = Oe,
        je = S.f,
        We = function(e, t) {
            var n, o, i, s, a, c = e.target,
                u = e.global,
                d = e.stat;
            if (n = u ? r : d ? r[c] || _(c, {}) : (r[c] || {}).prototype)
                for (o in t) {
                    s = t[o];
                    i = e.noTargetGet ? (a = je(n, o)) && a.value : n[o];
                    if (!Me(u ? o : c + (d ? "." : "#") + o, e.forced) && void 0 !== i) {
                        if (typeof s == typeof i) continue;
                        xe(s, i)
                    }(e.sham || i && i.sham) && T(s, "sham", !0);
                    re(n, o, s, e)
                }
        },
        qe = Object.keys || function(e) {
            return ye(e, we)
        },
        Pe = function(e) {
            return Object(p(e))
        },
        Ce = Object.assign,
        Fe = Object.defineProperty,
        Ne = !Ce || o((function() {
            if (i && 1 !== Ce({
                    b: 1
                }, Ce(Fe({}, "a", {
                    enumerable: !0,
                    get: function() {
                        Fe(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var e = {},
                t = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            e[n] = 7;
            r.split("").forEach((function(e) {
                t[e] = e
            }));
            return 7 != Ce({}, e)[n] || qe(Ce({}, t)).join("") != r
        })) ? function(e, t) {
            for (var n = Pe(e), r = arguments.length, o = 1, s = ke.f, a = c.f; r > o;)
                for (var u, d = f(arguments[o++]), h = s ? qe(d).concat(s(d)) : qe(d), l = h.length, p = 0; l > p;) {
                    u = h[p++];
                    i && !a.call(d, u) || (n[u] = d[u])
                }
            return n
        } : Ce;
    We({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Ne
    }, {
        assign: Ne
    })
}();
! function() {
    "use strict";
    const e = "na1";

    function t(t = "") {
        return t && t !== e ? `-${t}` : ""
    }
    const n = "PREVIEW_EDITOR",
        r = "PREVIEW_UI",
        o = "FETCHER",
        i = "UI",
        s = "change-expand",
        a = "expand",
        c = "focus",
        u = "hide",
        d = "load-survey",
        h = "location-change",
        l = "ready",
        f = "reset",
        p = "resize-popup",
        b = "setup",
        m = "show",
        g = "fetched",
        y = "update",
        w = "load-config-only",
        v = "config-fetched",
        $ = "show-loaded-config",
        k = e => {
            if (!e || "" === e) return ".*";
            const t = e.split("/");
            return `${t[0]}//${t[2]}`
        };
    var E = e => {
            let t = !0,
                n = [];
            const r = (...e) => {
                n.forEach((t => {
                    t(...e)
                }))
            };
            return o => {
                t && 0 === n.length && (t = e(r));
                n.push(o);
                return () => {
                    const e = n.length;
                    n = n.filter((e => e !== o));
                    t && 0 === n.length && e > 0 && t()
                }
            }
        },
        x = (e, t, n = {}) => E((r => {
            e.addEventListener(t, r, n);
            return () => {
                e.removeEventListener(t, r, n)
            }
        }));
    const S = (e, t) => {
            const n = new RegExp(`^${k(e)}`),
                r = x(window, "message");
            return e => r((({
                data: r,
                origin: o,
                source: i
            }) => {
                if (!r || !n.test(o)) return;
                let s;
                try {
                    s = JSON.parse(r)
                } catch (e) {
                    return
                }
                const {
                    payload: a,
                    type: c
                } = s;
                if (!a || c !== L) return;
                const {
                    channel: u,
                    payload: {
                        messageType: d,
                        payload: h
                    }
                } = a;
                u === t && e(d, h, o, i)
            }))
        },
        O = e => S(document.referrer, e),
        I = (e, t) => S(e.src, t);
    const L = "hubspot-servicehub-feedback",
        T = (e, t, n) => (r, o) => {
            t.postMessage(JSON.stringify({
                payload: {
                    channel: e,
                    payload: {
                        messageType: r,
                        payload: o
                    }
                },
                type: L
            }), n || "*")
        },
        _ = (e, t) => T(t, e.contentWindow, e.src),
        M = e => T(e, window.parent, document.referrer),
        j = (e, t, n) => {
            const r = I(e, t),
                o = _(e, t),
                i = r((e => {
                    if (e === l) {
                        n({
                            sender: o,
                            subscribe: r
                        });
                        i()
                    }
                }))
        };
    var W = (e, t) => E((n => {
        const r = setInterval(n, e);
        return () => {
            t && t();
            clearInterval(r)
        }
    }));
    const q = (e, t) => e === t;
    var P = ((e, t = q, n = 1e3) => {
        let r, o = !0;
        const i = W(n, (() => {
            o = !0
        }));
        return n => i((() => {
            const i = e();
            if (!t(i, r)) {
                o || n(i);
                r = i
            }
            o = !1
        }))
    })((() => location.href));
    const C = "live-preview",
        F = "preview",
        N = "standard",
        R = "feedback-web",
        H = `${R}-fetcher`,
        z = `${R}-ui`,
        A = (e, t) => {
            Object.keys(t).forEach((n => {
                e.setAttribute(n, t[n])
            }));
            return e
        },
        U = (e, t = {}) => A(document.createElement(e), t),
        D = (e, t) => {
            const n = (e.childNodes || {})[0];
            if (n) {
                e.insertBefore(t, n);
                return e
            }
            e.appendChild(t);
            return e
        },
        B = e => e.replace(/(^ *| *$)/g, "").replace(/ +/g, " "),
        V = (e, t) => {
            e.className = B(`${e.className} ${t}`)
        },
        Q = (e, t) => {
            e.className = B(e.className.replace(new RegExp(t, "g"), ""))
        },
        G = "1070",
        J = .4,
        K = 350,
        Y = K + 200,
        Z = 480,
        X = 450,
        ee = Math.max(Z, K, Y, X),
        te = 416,
        ne = 420,
        re = 544,
        oe = 768,
        ie = 600,
        se = "hs-feedback-ui",
        ae = "hs-feedback-fetcher",
        ce = "hs-feedback-extended-width",
        ue = "hs-feedback-shown",
        de = "hs-feedback-slid-out",
        he = "hs-feedback-expanded",
        le = (e, t) => `\n  @keyframes feedback-slide-in-${e} {\n    from {transform: translate(0, ${100*t}%);}\n    to {transform: translate(0, 0);}\n  }\n\n  @keyframes feedback-slide-out-${e} {\n    from {transform: translate(0, 0);}\n    to {transform: translate(0, ${100*t}%);}\n  }\n\n  #${se}.${e} {\n    animation-name: feedback-slide-in-${e};\n  }\n\n  #${se}.${e}.${de} {\n    animation-name: feedback-slide-out-${e};\n    animation-fill-mode: forwards;\n  }\n`,
        fe = `\n  #${se} {\n    animation-duration: ${J}s;\n    animation-timing-function: ease-out;\n    display: none;\n    height: 0;\n    overflow: hidden;\n    position: fixed;\n    z-index: 2147483647;\n    max-width: 100%;\n  }\n\n  .hubspot.space-sword #${se} {\n    z-index: ${window.hsFeedbackWebZIndex||G};\n  }\n\n  #${se}.${ue} {\n    display: block;\n  }\n\n  #${ae} {\n    display: none\n  }\n\n  ${le("hs-feedback-left",1)}\n  ${le("hs-feedback-right",1)}\n  ${le("hs-feedback-top",-1)}\n\n  #${se} > iframe {\n    width: 100%;\n    height: 100%;\n  }\n\n  #${se}:not(.hs-feedback-top) {\n    bottom: 0;\n  }\n\n  #${se}.hs-feedback-left {\n    left: 0;\n  }\n\n  #${se}.hs-feedback-right {\n    right: 0;\n  }\n\n  .zorse #${se}:not(.hs-feedback-top) {\n    bottom: 6px;\n  }\n\n  .zorse #${se}.hs-feedback-right {\n    right: 0;\n  }\n\n  #${se}.hs-feedback-top {\n    left: 0;\n    top: 0;\n    width: 100%;\n  }\n\n  #${se}.hs-feedback-nps:not(.hs-feedback-top) {\n    width: ${Z}px;\n  }\n\n  #${se}.hs-feedback-csat:not(.hs-feedback-top) {\n    width: ${K}px;\n  }\n\n  #${se}.hs-feedback-csat.${ce}:not(.hs-feedback-top) {\n    width: ${Y}px;\n  }\n\n  @media only screen and (min-width: ${re}px) {\n    #${se}.hs-feedback-csat:not(.hs-feedback-top):not(.${he}) {\n      width: ${X}px;\n    }\n  }\n\n  #${se}.hs-feedback-csat.${ce}:not(.hs-feedback-top) {\n    width: ${Y}px !important;\n  }\n\n  #${se}.preview.hs-feedback-csat.hs-feedback-callout:not(.${he}):not(.hs-feedback-top) {\n    width: ${X}px !important;\n  }\n\n  @media only screen and (max-width: ${oe}px) {\n    #${se}:not(.preview):not(.hs-feedback-callout):not(.hs-feedback-top),\n    #${se}.${he}:not(.preview):not(.hs-feedback-top) {\n      width: 100% !important;\n    }\n  }\n\n  @media only screen and (max-width: ${ie}px) {\n    #${se}.preview:not(.hs-feedback-top),\n    #${se}.${he}.preview:not(.hs-feedback-top) {\n      width: 100% !important;\n    }\n  }\n\n  #${se}.${ue} ~ #tally-widget-container,\n  #${se}.${ue} ~ #wootric-modal {\n    display: none !important;\n  }\n\n  /* hide all popups in the same position as us */\n  @media only screen and (min-width: ${re}px) {\n    #${se}.hs-feedback-right.${ue} ~ #hubspot-messages-iframe-container,\n    #${se}.hs-feedback-right.${ue} ~ .leadinModal-theme-bottom-right-corner,\n    #${se}.hs-feedback-left.${ue}  ~ .leadinModal-theme-bottom-left-corner,\n    #${se}.hs-feedback-top.${ue}   ~ .leadinModal-theme-top {\n      display: none !important;\n    }\n  }\n\n  /* hide leadflows when we're tablet-stretched across from them */\n  @media only screen and (min-width: ${re}px) and (max-width: ${Math.max(oe,ee+ne)}px) {\n    #${se}.hs-feedback-left.${ue}  ~ .leadinModal-theme-bottom-right-corner,\n    #${se}.hs-feedback-right.${ue} ~ .leadinModal-theme-bottom-left-corner {\n      display: none !important;\n    }\n  }\n\n  /* hide messages when we're tablet-stretched across from them */\n  @media only screen and (max-width: ${Math.max(oe,ee+te)}px) {\n    #${se}.hs-feedback-left.${ue} ~ #hubspot-messages-iframe-container {\n      display: none !important;\n    }\n  }\n\n  @media only screen and (max-width: ${re}px) {\n\n    /* repeat above rules for small screens when we're set to display on mobile */\n    #${se}.hs-feedback-right.${ue}:not(.hs-feedback-no-mobile) ~ #hubspot-messages-iframe-container,\n    #${se}.hs-feedback-left.${ue}:not(.hs-feedback-no-mobile)  ~ #hubspot-messages-iframe-container,\n    #${se}.hs-feedback-right.${ue}:not(.hs-feedback-no-mobile) ~ .leadinModal-theme-bottom-right-corner,\n    #${se}.hs-feedback-left.${ue}:not(.hs-feedback-no-mobile)  ~ .leadinModal-theme-bottom-left-corner,\n    #${se}.hs-feedback-top.${ue}:not(.hs-feedback-no-mobile)   ~ .leadinModal-theme-top,\n    #${se}.hs-feedback-left.${ue}:not(.hs-feedback-no-mobile)  ~ .leadinModal-theme-bottom-right-corner,\n    #${se}.hs-feedback-right.${ue}:not(.hs-feedback-no-mobile) ~ .leadinModal-theme-bottom-left-corner {\n      display: none !important;\n    }\n\n    /* don't display us on small screens if we're set to not display on mobile */\n    #${se}.hs-feedback-no-mobile {\n      display: none;\n    }\n  }\n`,
        pe = M(o),
        be = 1e3,
        me = () => {
            const e = document.querySelector("#isc-zorse-widget") || document.querySelector("#chat-widget"),
                t = document.getElementById("hs-feedback-ui");
            if (e) {
                const n = e.children[0];
                if (n) {
                    const e = n.clientWidth + 20;
                    t && (t.style.marginRight = `${e}px`)
                }
            } else t && (t.style.marginRight = "0px")
        };
    class ge {
        constructor() {
            this.setFetcher = e => {
                this.fetcher = e;
                this._runQueuedEvents();
                return this
            };
            this.initialiseUI = ({
                iframe: e,
                parent: t,
                sender: n
            }) => {
                this.iframe = e;
                this.sendToIframe = n;
                this.iframeWrapper = t;
                this._runQueuedEvents();
                setInterval(me, 100)
            };
            this._runQueuedEvents = () => {
                const e = this.queuedEvents;
                this.queuedEvents = [];
                e.forEach((e => e(this)))
            };
            this._onSurveyLoaded = e => {
                this._setMetaData(e);
                this.onSurveyLoad && this.onSurveyLoad(e)
            };
            this._queueEvent = e => {
                this.queuedEvents.push(e);
                return this
            };
            this._push = e => {
                this._queueEvent(e);
                this.fetcher && this._runQueuedEvents()
            };
            this._setSurveyLanguage = e => {
                this.surveyLanguage = e.config.language
            };
            this._setMetaData = e => {
                this._setSurveyLanguage(e);
                this.config = e;
                return this
            };
            this._onConfigLoaded = e => {
                this._setMetaData(e);
                this.onConfigLoaded && this.onConfigLoaded(e);
                return this
            };
            this.hide = () => {
                if (!this.iframeWrapper) return this._queueEvent(this.hide);
                V(this.iframeWrapper, de);
                window.setTimeout((() => {
                    Q(this.iframeWrapper, ue)
                }), 500);
                return this
            };
            this.show = () => {
                if (!this.iframeWrapper) return this._queueEvent(this.show);
                Q(this.iframeWrapper, de);
                V(this.iframeWrapper, ue);
                return this
            };
            this.expand = () => {
                if (!this.iframeWrapper) return this._queueEvent(this.expand);
                V(this.iframeWrapper, he);
                this.sendToIframe(s, !0);
                return this
            };
            this.minimize = () => {
                if (!this.iframeWrapper) return this._queueEvent(this.minimize);
                Q(this.iframeWrapper, he);
                this.sendToIframe(s, !1);
                return this
            };
            this.reset = () => {
                if (!this.iframeWrapper) return this._queueEvent(this.reset);
                this.sendToIframe(f, !1);
                return this
            };
            this.showOnMouseLeave = (e = !1) => {
                const t = () => {
                    e && this.expand();
                    this.show();
                    document.removeEventListener("mouseleave", t)
                };
                document.addEventListener("mouseleave", t);
                return this
            };
            this.showOnScroll = (e = !1) => {
                const t = Math.max(document.body.offsetHeight, document.body.scrollHeight),
                    n = .5 * (t - window.innerHeight),
                    r = () => {
                        e && this.expand();
                        this.show()
                    };
                if (t === window.innerHeight) {
                    setTimeout(r, be);
                    return this
                }
                const o = () => {
                    const e = document.body.scrollTop || window.pageYOffset;
                    if (window.innerHeight + e > n) {
                        r();
                        document.removeEventListener("scroll", o)
                    }
                };
                document.addEventListener("scroll", o);
                return this
            };
            this.loadConfigOnly = (e, t) => {
                if (!this.fetcher) return this._queueEvent((() => this.loadConfigOnly(e, t)));
                this.fetcher(w, {
                    surveyType: e,
                    surveyId: t
                });
                return this
            };
            this.loadSurvey = (e, t) => {
                if (!this.fetcher) return this._queueEvent((() => this.loadSurvey(e, t)));
                this.fetcher(d, {
                    surveyType: e,
                    surveyId: t
                });
                return this
            };
            this.showSurvey = e => {
                if (!this.fetcher) return this._queueEvent((() => this.showSurvey()));
                if (!e) return this;
                this.fetcher($, e);
                return this
            };
            this.checkIsLanguageValid = e => e === this.surveyLanguage;
            this.renderSurvey = () => {
                if (!this.config) return this._queueEvent((() => this.renderSurvey()));
                pe(g, this.config);
                return this
            };
            this.getSurveyConfig = () => this.config;
            this.fetcher = null;
            this.onSurveyLoad = null;
            this._onReady = null;
            this.iframeWrapper = null;
            this.iframe = null;
            this.sendToIframe = null;
            this.onConfigLoaded = null;
            this.surveyLanguage = null;
            this.config = null;
            this.queuedEvents = window.onHsFeedbackReady || [];
            window.hsFeedback = this;
            window.onHsFeedbackReady = {
                push: this._push
            }
        }
    }
    var ye = ge;
    var we = e => {
        const t = document.querySelector(`script[${e}]`);
        return t ? t.getAttribute(e) : null
    };
    const ve = "hsWebSurveyPreview",
        $e = "hsWebSurveyTestId",
        ke = "data-hubspot-feedback-portal-id",
        Ee = "data-hubspot-feedback-customer-portal-id",
        xe = "data-hubspot-feedback-env",
        Se = "data-hubspot-feedback-hubspot-app",
        Oe = "data-hubspot-feedback-hubspot-email",
        Ie = "data-hubspot-feedback-user-lang",
        Le = "data-hubspot-feedback-client-load-only",
        Te = "data-hsjs-hublet",
        _e = {},
        Me = window.location.hash,
        je = window.location.search;
    (() => {
        if (Me.length > 0) {
            const e = Me.split("?");
            if (e.length > 1) return `?${e[1]}`
        }
        return je
    })().replace(/[(?|&)]([^=]+)=([^&#]+)/g, ((e, t, n) => {
        _e[t] = n
    }));
    const We = e => {
        try {
            return "true" === localStorage.getItem(e)
        } catch (e) {
            return !1
        }
    };

    function qe() {
        return window.location.hostname.split(".")[0].split("-")[1] || ""
    }
    const Pe = we(xe),
        Ce = we(ke),
        Fe = we(Ee),
        Ne = _e[ve],
        Re = _e[$e],
        He = Boolean(window.feedbackTestPage) || Boolean(Ne),
        ze = Boolean(window.hsFeedbackPreview),
        Ae = Boolean(we(Se)),
        Ue = we(Oe),
        De = we(Ie),
        Be = we(Te) || qe(),
        Ve = "true" === we(Le),
        Qe = We("LOCAL_RENDERER"),
        Ge = /MSIE\s/.test(navigator.userAgent) && parseFloat(navigator.appVersion.split("MSIE")[1]) < 11,
        Je = /bot|python-requests|hubspot|phantomjs|bingpreview/i.test(navigator.userAgent);
    /hsWebSurveyTestId/.test(document.referrer);
    if (Qe) {
        const e = document.querySelector("body"),
            t = document.createElement("div");
        t.setAttribute("class", "UIRibbon-sc-1wnhcos-0 hwuPWx");
        t.innerText = "Web renderer local";
        t.style.top = "130px";
        t.style.zIndex = 5;
        e.appendChild(t)
    }
    const Ke = document.head || document.getElementsByTagName("head")[0],
        Ye = e => {
            const t = document.createElement("style");
            t.type = "text/css";
            t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e));
            return t
        };
    const Ze = () => location,
        Xe = () => innerWidth;
    (e => {
        Ke.appendChild(Ye(e))
    })(fe);
    const et = window._hsq = window._hsq || [],
        tt = {
            portalId: Ce,
            isPreview: ze,
            isTest: He
        },
        nt = t(Be),
        rt = `https://${ze&&/local/.test(Ze().origin)||Qe?"local":"app"}${nt}.hubspot${"prod"===Pe?"":"qa"}.com`,
        ot = {};
    let it;
    window.hsFeedbackLoaded || (it = new ye);
    const st = (e, t) => {
            switch (e) {
                case g:
                    ft(i, b, {
                        mode: N,
                        payload: {
                            isHubspot: Ae,
                            portalId: Ce,
                            response: t,
                            pageTitle: document.title,
                            pageUrl: location.href,
                            utk: tt.utk,
                            windowWidth: Xe(),
                            hublet: Be,
                            clientLoadOnly: Ve
                        }
                    });
                    it._onSurveyLoaded(t);
                    break;
                case v:
                    it._onConfigLoaded(t)
            }
        },
        at = () => {
            const e = ot[i];
            return e && e.data && e.data.parent.className.indexOf(ue) >= 0
        },
        ct = M(n),
        ut = e => () => {
            e(y, {
                pageTitle: document.title,
                pageUrl: Ze().href,
                windowWidth: Xe()
            })
        },
        dt = {
            FETCHER: {
                onInit: ({
                    sender: e
                }) => {
                    P((t => {
                        at() || e(h, t)
                    }))
                },
                handleMessages: st,
                parentAttrs: {
                    id: ae,
                    title: "submit hubspot feedback"
                },
                path: H
            },
            UI: {
                onInit: e => {
                    const {
                        sender: t
                    } = e, n = ut(t);
                    P(n);
                    x(window, "resize")(n);
                    x(document, "focus")((() => {
                        t(c)
                    }));
                    it.initialiseUI(e);
                    return {
                        client: it
                    }
                },
                handleMessages: (e, t) => {
                    lt(i, (({
                        parent: n
                    }) => {
                        switch (e) {
                            case m:
                                {
                                    const {
                                        classes: e,
                                        displayOnScroll: r,
                                        surveyId: o,
                                        surveyLanguage: i,
                                        surveyType: s,
                                        userLocale: a
                                    } = t;
                                    if (Ae && i !== (De || a) || window.disabledHsPopups && window.disabledHsPopups.indexOf("FEEDBACK") > -1) return;
                                    const c = [...e, ...ze ? ["preview"] : []].join(" ").toLowerCase();Ne || void 0 === o || et.push(["trackFeedbackView", {
                                        surveyId: o,
                                        surveyType: s
                                    }]);n.baseClasses = c;n.className = c;r ? it.showOnScroll() : it.show();
                                    break
                                }
                            case a:
                                t ? V(n, he) : Q(n, he);
                                ct(e, t);
                                break;
                            case u:
                                it.hide();
                                setTimeout((() => {
                                    n.className = n.baseClasses
                                }), 1e3);
                                break;
                            case p:
                                {
                                    const {
                                        newHeight: e,
                                        newWidth: r
                                    } = t;n.style.width = r ? `${r}px` : null;n.style.height = `${e}px`;
                                    break
                                }
                            default:
                                ct(e, t)
                        }
                    }))
                },
                parentAttrs: {
                    id: se,
                    title: "submit hubspot feedback"
                },
                path: z
            }
        },
        ht = e => {
            const {
                path: t,
                parentAttrs: n
            } = dt[e], r = U("iframe", {
                frameborder: 0,
                title: "Submit HubSpot product feedback",
                src: `${rt}/${t}`
            }), o = U("div", n);
            D(o, r);
            D(document.body, o);
            return [r, o]
        },
        lt = (e, t) => {
            if (ot[e]) {
                ot[e](t);
                return
            }
            const n = [t];
            ot[e] = e => {
                n.push(e)
            };
            const [r, o] = ht(e);
            j(r, e, (({
                sender: t,
                subscribe: i
            }) => {
                const {
                    handleMessages: s,
                    onInit: a
                } = dt[e];
                i(s);
                let c = {
                    frame: r,
                    parent: o,
                    subscribe: i,
                    sender: t
                };
                c = Object.assign({}, c, a(c) || {});
                const u = e => {
                    e(c)
                };
                ot[e] = u;
                u.data = c;
                n.forEach(ot[e])
            }))
        },
        ft = (e, t, n = {}) => {
            lt(e, (({
                sender: e
            }) => {
                e(t, n)
            }))
        },
        pt = ({
            frame: e
        }) => {
            const t = _(e, r);
            O(n)(t);
            ct(l)
        };
    if (!Je && !Ge && !window.hsFeedbackLoaded)
        if (Ne || ze) {
            let e, t = {
                pageUrl: Ze().href
            };
            lt(i, (n => {
                const {
                    sender: r
                } = n;
                if (Ne) {
                    e = C;
                    t = {
                        livePreviewId: Re
                    }
                } else {
                    e = F;
                    pt(n)
                }
                r(b, {
                    mode: e,
                    hublet: Be,
                    clientLoadOnly: Ve,
                    windowWidth: Xe(),
                    payload: Object.assign({}, tt, t)
                })
            }))
        } else if (Ae) {
        tt.hsEmail = Ue;
        lt(o, (({
            sender: e
        }) => {
            e(b, {
                email: Ue,
                portalId: Fe,
                pageUrl: Ze().href,
                targetPortalId: Ce,
                isHubspot: Ae,
                hublet: Be,
                clientLoadOnly: Ve
            });
            it.setFetcher(e)
        }))
    } else et.push(["addCookieListener", e => {
        if (!e) return;
        const t = e.split(".")[1];
        tt.utk = t;
        lt(o, (e => {
            const {
                sender: n
            } = e;
            n(b, {
                pageUrl: Ze().href,
                portalId: Ce,
                utk: t,
                hublet: Be,
                clientLoadOnly: Ve
            });
            it.setFetcher(n)
        }))
    }]);
    window.hsFeedbackLoaded = !0
}();
//# sourceMappingURL=//static.hsappstatic.net/feedback-web-renderer-ui/static-1.22604/bundles/popupInjector.js.map