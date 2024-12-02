! function() {
    "use strict";
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};

    function e(t, e) {
        return t(e = {
            exports: {}
        }, e.exports), e.exports
    }
    var n = function(t) {
            return t && t.Math == Math && t
        },
        r = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof t && t) || Function("return this")(),
        o = function(t) {
            try {
                return !!t()
            } catch (t) {
                return !0
            }
        },
        c = !o((function() {
            return 7 != Object.defineProperty({}, 1, {
                get: function() {
                    return 7
                }
            })[1]
        })),
        i = {}.propertyIsEnumerable,
        u = Object.getOwnPropertyDescriptor,
        a = {
            f: u && !i.call({
                1: 2
            }, 1) ? function(t) {
                var e = u(this, t);
                return !!e && e.enumerable
            } : i
        },
        s = function(t, e) {
            return {
                enumerable: !(1 & t),
                configurable: !(2 & t),
                writable: !(4 & t),
                value: e
            }
        },
        f = {}.toString,
        l = function(t) {
            return f.call(t).slice(8, -1)
        },
        p = "".split,
        d = o((function() {
            return !Object("z").propertyIsEnumerable(0)
        })) ? function(t) {
            return "String" == l(t) ? p.call(t, "") : Object(t)
        } : Object,
        y = function(t) {
            if (null == t) throw TypeError("Can't call method on " + t);
            return t
        },
        g = function(t) {
            return d(y(t))
        },
        h = function(t) {
            return "object" == typeof t ? null !== t : "function" == typeof t
        },
        b = function(t, e) {
            if (!h(t)) return t;
            var n, r;
            if (e && "function" == typeof(n = t.toString) && !h(r = n.call(t))) return r;
            if ("function" == typeof(n = t.valueOf) && !h(r = n.call(t))) return r;
            if (!e && "function" == typeof(n = t.toString) && !h(r = n.call(t))) return r;
            throw TypeError("Can't convert object to primitive value")
        },
        v = {}.hasOwnProperty,
        m = function(t, e) {
            return v.call(t, e)
        },
        O = r.document,
        j = h(O) && h(O.createElement),
        w = function(t) {
            return j ? O.createElement(t) : {}
        },
        S = !c && !o((function() {
            return 7 != Object.defineProperty(w("div"), "a", {
                get: function() {
                    return 7
                }
            }).a
        })),
        E = Object.getOwnPropertyDescriptor,
        I = {
            f: c ? E : function(t, e) {
                t = g(t);
                e = b(e, !0);
                if (S) try {
                    return E(t, e)
                } catch (t) {}
                if (m(t, e)) return s(!a.f.call(t, e), t[e])
            }
        },
        k = function(t) {
            if (!h(t)) throw TypeError(String(t) + " is not an object");
            return t
        },
        $ = Object.defineProperty,
        T = {
            f: c ? $ : function(t, e, n) {
                k(t);
                e = b(e, !0);
                k(n);
                if (S) try {
                    return $(t, e, n)
                } catch (t) {}
                if ("get" in n || "set" in n) throw TypeError("Accessors not supported");
                "value" in n && (t[e] = n.value);
                return t
            }
        },
        x = c ? function(t, e, n) {
            return T.f(t, e, s(1, n))
        } : function(t, e, n) {
            t[e] = n;
            return t
        },
        P = function(t, e) {
            try {
                x(r, t, e)
            } catch (n) {
                r[t] = e
            }
            return e
        },
        C = "__core-js_shared__",
        N = r[C] || P(C, {}),
        R = Function.toString;
    "function" != typeof N.inspectSource && (N.inspectSource = function(t) {
        return R.call(t)
    });
    var L, M, F, A = N.inspectSource,
        D = r.WeakMap,
        H = "function" == typeof D && /native code/.test(A(D)),
        q = !1,
        U = e((function(t) {
            (t.exports = function(t, e) {
                return N[t] || (N[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.6.5",
                mode: q ? "pure" : "global",
                copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
            })
        })),
        _ = 0,
        G = Math.random(),
        X = function(t) {
            return "Symbol(" + String(void 0 === t ? "" : t) + ")_" + (++_ + G).toString(36)
        },
        B = U("keys"),
        z = function(t) {
            return B[t] || (B[t] = X(t))
        },
        J = {},
        K = r.WeakMap,
        V = function(t) {
            return F(t) ? M(t) : L(t, {})
        },
        W = function(t) {
            return function(e) {
                var n;
                if (!h(e) || (n = M(e)).type !== t) throw TypeError("Incompatible receiver, " + t + " required");
                return n
            }
        };
    if (H) {
        var Y = new K,
            Q = Y.get,
            Z = Y.has,
            tt = Y.set;
        L = function(t, e) {
            tt.call(Y, t, e);
            return e
        };
        M = function(t) {
            return Q.call(Y, t) || {}
        };
        F = function(t) {
            return Z.call(Y, t)
        }
    } else {
        var et = z("state");
        J[et] = !0;
        L = function(t, e) {
            x(t, et, e);
            return e
        };
        M = function(t) {
            return m(t, et) ? t[et] : {}
        };
        F = function(t) {
            return m(t, et)
        }
    }
    var nt = {
            set: L,
            get: M,
            has: F,
            enforce: V,
            getterFor: W
        },
        rt = (nt.set, nt.get, nt.has, nt.enforce, nt.getterFor, e((function(t) {
            var e = nt.get,
                n = nt.enforce,
                o = String(String).split("String");
            (t.exports = function(t, e, c, i) {
                var u = !!i && !!i.unsafe,
                    a = !!i && !!i.enumerable,
                    s = !!i && !!i.noTargetGet;
                if ("function" == typeof c) {
                    "string" != typeof e || m(c, "name") || x(c, "name", e);
                    n(c).source = o.join("string" == typeof e ? e : "")
                }
                if (t !== r) {
                    u ? !s && t[e] && (a = !0) : delete t[e];
                    a ? t[e] = c : x(t, e, c)
                } else a ? t[e] = c : P(e, c)
            })(Function.prototype, "toString", (function() {
                return "function" == typeof this && e(this).source || A(this)
            }))
        }))),
        ot = r,
        ct = function(t) {
            return "function" == typeof t ? t : void 0
        },
        it = function(t, e) {
            return arguments.length < 2 ? ct(ot[t]) || ct(r[t]) : ot[t] && ot[t][e] || r[t] && r[t][e]
        },
        ut = Math.ceil,
        at = Math.floor,
        st = function(t) {
            return isNaN(t = +t) ? 0 : (t > 0 ? at : ut)(t)
        },
        ft = Math.min,
        lt = function(t) {
            return t > 0 ? ft(st(t), 9007199254740991) : 0
        },
        pt = Math.max,
        dt = Math.min,
        yt = function(t, e) {
            var n = st(t);
            return n < 0 ? pt(n + e, 0) : dt(n, e)
        },
        gt = function(t) {
            return function(e, n, r) {
                var o, c = g(e),
                    i = lt(c.length),
                    u = yt(r, i);
                if (t && n != n) {
                    for (; i > u;)
                        if ((o = c[u++]) != o) return !0
                } else
                    for (; i > u; u++)
                        if ((t || u in c) && c[u] === n) return t || u || 0;
                return !t && -1
            }
        },
        ht = {
            includes: gt(!0),
            indexOf: gt(!1)
        },
        bt = (ht.includes, ht.indexOf, ht.indexOf),
        vt = function(t, e) {
            var n, r = g(t),
                o = 0,
                c = [];
            for (n in r) !m(J, n) && m(r, n) && c.push(n);
            for (; e.length > o;) m(r, n = e[o++]) && (~bt(c, n) || c.push(n));
            return c
        },
        mt = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
        Ot = mt.concat("length", "prototype"),
        jt = {
            f: Object.getOwnPropertyNames || function(t) {
                return vt(t, Ot)
            }
        },
        wt = {
            f: Object.getOwnPropertySymbols
        },
        St = it("Reflect", "ownKeys") || function(t) {
            var e = jt.f(k(t)),
                n = wt.f;
            return n ? e.concat(n(t)) : e
        },
        Et = function(t, e) {
            for (var n = St(e), r = T.f, o = I.f, c = 0; c < n.length; c++) {
                var i = n[c];
                m(t, i) || r(t, i, o(e, i))
            }
        },
        It = /#|\.prototype\./,
        kt = function(t, e) {
            var n = Tt[$t(t)];
            return n == Pt || n != xt && ("function" == typeof e ? o(e) : !!e)
        },
        $t = kt.normalize = function(t) {
            return String(t).replace(It, ".").toLowerCase()
        },
        Tt = kt.data = {},
        xt = kt.NATIVE = "N",
        Pt = kt.POLYFILL = "P",
        Ct = kt,
        Nt = I.f,
        Rt = function(t, e) {
            var n, o, c, i, u, a = t.target,
                s = t.global,
                f = t.stat;
            if (n = s ? r : f ? r[a] || P(a, {}) : (r[a] || {}).prototype)
                for (o in e) {
                    i = e[o];
                    c = t.noTargetGet ? (u = Nt(n, o)) && u.value : n[o];
                    if (!Ct(s ? o : a + (f ? "." : "#") + o, t.forced) && void 0 !== c) {
                        if (typeof i == typeof c) continue;
                        Et(i, c)
                    }(t.sham || c && c.sham) && x(i, "sham", !0);
                    rt(n, o, i, t)
                }
        },
        Lt = Object.keys || function(t) {
            return vt(t, mt)
        },
        Mt = function(t) {
            return Object(y(t))
        },
        Ft = Object.assign,
        At = Object.defineProperty,
        Dt = !Ft || o((function() {
            if (c && 1 !== Ft({
                    b: 1
                }, Ft(At({}, "a", {
                    enumerable: !0,
                    get: function() {
                        At(this, "b", {
                            value: 3,
                            enumerable: !1
                        })
                    }
                }), {
                    b: 2
                })).b) return !0;
            var t = {},
                e = {},
                n = Symbol(),
                r = "abcdefghijklmnopqrst";
            t[n] = 7;
            r.split("").forEach((function(t) {
                e[t] = t
            }));
            return 7 != Ft({}, t)[n] || Lt(Ft({}, e)).join("") != r
        })) ? function(t, e) {
            for (var n = Mt(t), r = arguments.length, o = 1, i = wt.f, u = a.f; r > o;)
                for (var s, f = d(arguments[o++]), l = i ? Lt(f).concat(i(f)) : Lt(f), p = l.length, y = 0; p > y;) {
                    s = l[y++];
                    c && !u.call(f, s) || (n[s] = f[s])
                }
            return n
        } : Ft;
    Rt({
        target: "Object",
        stat: !0,
        forced: Object.assign !== Dt
    }, {
        assign: Dt
    })
}();
! function() {
    "use strict";

    function t(t, e) {
        if (null == t) return {};
        var n, r, o = {},
            c = Object.keys(t);
        for (r = 0; r < c.length; r++) {
            n = c[r];
            e.indexOf(n) >= 0 || (o[n] = t[n])
        }
        return o
    }
    const e = "na1";

    function n(t = "") {
        return t && t !== e ? `-${t}` : ""
    }
    const r = "FETCHER",
        o = "load-survey",
        c = "location-change",
        i = "ready",
        u = "setup",
        a = "fetched",
        s = "load-config-only",
        f = "config-fetched",
        l = "show-loaded-config",
        p = () => location,
        d = /^.*hsappstatic\.net\/feedback-web-renderer-ui\/static-(\d+(?:-\w+-?)*\.\d+).*$/,
        y = [].slice.call(document.getElementsByTagName("script")).map((t => t.src)).filter((t => d.test(t)))[0],
        g = y && d.exec(y) ? d.exec(y)[1] : "unknown",
        h = !/hubspot\.com$/.test(p().host),
        b = URL.createObjectURL(new Blob([])).slice(-36).replace(/-/g, "");
    document.location.pathname.indexOf("nps"), p().href;
    var v = (t, e, {
        onerror: n,
        headers: r = {},
        withCredentials: o = !1
    } = {}) => {
        const c = new XMLHttpRequest;
        c.onreadystatechange = () => {
            if (c.readyState === XMLHttpRequest.DONE) {
                const {
                    responseText: t,
                    status: r
                } = c;
                r >= 200 && r < 300 ? e(JSON.parse(t)) : n && n(c)
            }
        };
        c.open("GET", t);
        o && (c.withCredentials = !0);
        Object.keys(r).forEach((t => {
            c.setRequestHeader(t, r[t])
        }));
        c.send()
    };
    const m = "CSAT",
        O = "NPS",
        j = "INFINITE";

    function w(t) {
        var e = S(t, "string");
        return "symbol" == typeof e ? e : String(e)
    }

    function S(t, e) {
        if ("object" != typeof t || null === t) return t;
        var n = t[Symbol.toPrimitive];
        if (void 0 !== n) {
            var r = n.call(t, e || "default");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
        }
        return ("string" === e ? String : Number)(t)
    }
    const E = "FEEDBACK_IGNORED",
        I = "&",
        k = t => {
            let e;
            try {
                e = localStorage.getItem(t)
            } catch (t) {
                console.error(t)
            }
            if (!e) return !1;
            if (new Date(e) > new Date) return !0;
            try {
                localStorage.removeItem(t)
            } catch (t) {
                console.error(t)
            }
            return !1
        };
    Object.keys(localStorage || {}).forEach((t => {
        0 === t.indexOf(E) && k(t)
    }));
    const $ = (t, e, n, r) => {
            const o = [E, t, e, n].join(I);
            return r !== j && k(o)
        },
        T = t => new RegExp(`FEEDBACK_IGNORED&(CSAT|NPS)&(\\d+)&${t}`),
        x = e => {
            const n = T(e);
            return Object.keys(localStorage || {}).reduce(((r, o) => {
                const c = o.match(n);
                if (null === c) return r;
                const i = parseInt(c[2], 10),
                    u = c[1];
                if (!$(u, i, e)) return r;
                const {
                    [u]: a
                } = r, s = t(r, [u].map(w));
                return Object.assign({}, s, {
                    [u]: [...a, i].sort()
                })
            }), {
                [m]: [],
                [O]: []
            })
        },
        P = t => {
            if (!t || "" === t) return ".*";
            const e = t.split("/");
            return `${e[0]}//${e[2]}`
        },
        C = (t, e) => `${encodeURIComponent(t)}=${encodeURIComponent(e)}`,
        N = t => Object.keys(t).reduce(((e, n) => {
            const r = t[n];
            return [...e, ...Array.isArray(r) ? r.map((t => C(n, t))) : [C(n, r)]]
        }), []).join("&");
    var R = t => {
            let e = !0,
                n = [];
            const r = (...t) => {
                n.forEach((e => {
                    e(...t)
                }))
            };
            return o => {
                e && 0 === n.length && (e = t(r));
                n.push(o);
                return () => {
                    const t = n.length;
                    n = n.filter((t => t !== o));
                    e && 0 === n.length && t > 0 && e()
                }
            }
        },
        L = (t, e, n = {}) => R((r => {
            t.addEventListener(e, r, n);
            return () => {
                t.removeEventListener(e, r, n)
            }
        }));
    const M = (t, e) => {
            const n = new RegExp(`^${P(t)}`),
                r = L(window, "message");
            return t => r((({
                data: r,
                origin: o,
                source: c
            }) => {
                if (!r || !n.test(o)) return;
                let i;
                try {
                    i = JSON.parse(r)
                } catch (t) {
                    return
                }
                const {
                    payload: u,
                    type: a
                } = i;
                if (!u || a !== A) return;
                const {
                    channel: s,
                    payload: {
                        messageType: f,
                        payload: l
                    }
                } = u;
                s === e && t(f, l, o, c)
            }))
        },
        F = t => M(document.referrer, t);
    const A = "hubspot-servicehub-feedback",
        D = (t, e, n) => (r, o) => {
            e.postMessage(JSON.stringify({
                payload: {
                    channel: t,
                    payload: {
                        messageType: r,
                        payload: o
                    }
                },
                type: A
            }), n || "*")
        },
        H = ["customerPortalId", "portalId"],
        q = ["pageUrl", "isHubspot", "hublet", "clientLoadOnly"];
    let U, _, G, X;
    const B = h ? "qa" : "",
        z = `hubapi${B}.com/feedback`,
        J = `hubspot${B}.com/feedback`,
        K = (t => D(t, window.parent, document.referrer))(r),
        V = [];
    let W;
    const Y = () => {
            const t = x(_.portalId);
            return Object.keys(t).reduce(((e, n) => Object.assign({}, e, {
                [`excludedIds.${n}`]: t[n]
            })), {})
        },
        Q = t => {
            W = !1;
            rt();
            t.config && K(a, t)
        },
        Z = t => {
            t.config && K(a, t)
        },
        tt = t => {
            if (!t.config) return;
            const {
                portalId: e
            } = _;
            K(f, Object.assign({}, t, {
                config: Object.assign({}, t.config, {
                    portalId: e
                })
            }))
        },
        et = t => {
            const e = /csrf.app=([^;]+);?/.exec(t);
            return e && e[1]
        },
        nt = (e, r, o = (() => {})) => {
            W = !0;
            const {
                customerPortalId: c,
                portalId: i
            } = _, u = t(_, H), a = Object.assign({}, u, {
                bundleVersion: g,
                portalId: c || i
            }), s = et(window.document.cookie), f = n(U);
            v(`${`https://api${f}.${J}/v1`}/survey-config/${e}/${r}?${N(a)}`, o, {
                headers: {
                    Accept: "application/json, text/javascript, */*; q=0.01",
                    "Content-type": "application/json",
                    "X-HubSpot-CSRF-hubspotapi": s
                },
                withCredentials: !0
            })
        },
        rt = () => {
            if (!_.portalId) return;
            if (G && X) return;
            if (W || 0 === V.length) return;
            W = !0;
            const t = V.shift(),
                e = Y(),
                r = Object.assign({}, _, {
                    bundleVersion: g,
                    currentUrl: t,
                    pageUrl: t
                }, e);
            if (!r.portalId) return;
            let o = {
                "X-HS-Referer": t
            };
            if (G) {
                const t = et(window.document.cookie);
                o = Object.assign({}, o, {
                    Accept: "application/json, text/javascript, */*; q=0.01",
                    "Content-type": "application/json",
                    "X-HubSpot-CSRF-hubspotapi": t
                })
            }
            const c = n(U);
            v(`${G?`https://api${c}.${J}/v1/survey-config/web`:`https://feedback${c}.${z}/public/v1/web-config`}?${N(r)}`, Q, {
                headers: o,
                withCredentials: G
            })
        },
        ot = (e, n) => {
            switch (e) {
                case u:
                    {
                        const {
                            pageUrl: e,
                            isHubspot: r,
                            hublet: o,
                            clientLoadOnly: c
                        } = n,
                        i = t(n, q);V.push(e);U = o;_ = i;G = r;X = c;
                        break
                    }
                case s:
                    {
                        const {
                            surveyType: t,
                            surveyId: e
                        } = n;nt(t, e, tt);
                        break
                    }
                case c:
                    V.push(n);
                    break;
                case o:
                    {
                        const {
                            surveyType: t,
                            surveyId: e
                        } = n;nt(t, e, Q);
                        break
                    }
                case l:
                    Z(n)
            }
            rt()
        };
    F(r)(ot);
    K(i)
}();
//# sourceMappingURL=//static.hsappstatic.net/feedback-web-renderer-ui/static-1.22604/bundles/fetcher.js.map