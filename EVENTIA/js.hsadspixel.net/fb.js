! function() {
    "use strict";
    const n = "na1",
        e = {
            APP: "app",
            APP_API: "app-api"
        };

    function t(e, t) {
        const i = t && t.hubletOverride ? t.hubletOverride : e;
        return i === n ? "" : `-${i}`
    }

    function i(n, i, o) {
        if (o && o.hubletPostfixLocation && "domain" === o.hubletPostfixLocation) return i;
        i === e.APP_API && (i = e.APP);
        return `${i}${t(n,o)}`
    }

    function o(n, e, t) {
        return `${r(t)}${a(e,t)}${d(n,t)}`
    }

    function a(n, e) {
        return "qa" === (e && e.envOverride ? e.envOverride : n) ? "qa" : ""
    }

    function r(n) {
        return n && n.domainOverride ? n.domainOverride : "hubspot"
    }

    function d(n, e) {
        return e && e.hubletPostfixLocation && "domain" === e.hubletPostfixLocation ? t(n, e) : ""
    }

    function s(n) {
        return n && n.tldOverride ? n.tldOverride : "com"
    }

    function c(n) {
        return n === e.APP_API ? "/api" : ""
    }

    function l(n, e, t, a) {
        return `https://${i(e,n,a)}.${o(e,t,a)}.${s(a)}${c(n)}`
    }
    const u = "data-hsjs-portal",
        p = "data-hsjs-env",
        f = "data-hsjs-hublet",
        w = {
            PROD: "prod",
            QA: "qa"
        };

    function h(n) {
        if (!n) return null;
        const e = document.querySelectorAll(`script[${n}]`);
        return e.length ? e[0].getAttribute(n) : null
    }

    function b() {
        return h(p) || w.PROD
    }

    function v() {
        let n = h(u);
        n = parseInt(n, 10);
        if (!n) throw new Error(`HS Pixel Loader can't identify portalId via ${u}`);
        return n
    }

    function g() {
        return h(f) || n
    }

    function m() {
        return "withCredentials" in new XMLHttpRequest
    }

    function O() {
        return l("api", g(), b(), {
            domainOverride: "hubapi"
        }).split("https://")[1]
    }

    function P(n, e) {
        ! function(n, e, t, i, o, a, r) {
            if (!n.fbq) {
                o = n.fbq = function() {
                    o.callMethod ? o.callMethod.apply(o, arguments) : o.queue.push(arguments)
                };
                n._fbq || (n._fbq = o);
                o.push = o;
                o.loaded = !0;
                o.version = "2.0";
                o.queue = [];
                (a = e.createElement(t)).async = !0;
                a.src = i;
                (r = e.getElementsByTagName(t)[0]).parentNode.insertBefore(a, r)
            }
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        for (var t = 0; t < n.length; t++) {
            n[t].limitedDataUseEnabled && fbq("dataProcessingOptions", ["LDU"], 0, 0);
            fbq("init", `${n[t].pixelId}`, {
                external_id: e
            });
            fbq("set", "agent", "hubspot", `${n[t].pixelId}`)
        }
        fbq("track", "PageView")
    }

    function _(n) {
        const e = document.createElement("script");
        e.async = !0;
        e.src = `https://www.googletagmanager.com/gtag/js?id=AW-${n}`;
        document.head.appendChild(e)
    }

    function E(n) {
        window.dataLayer = window.dataLayer || [];
        var e = "qa" === b() ? "dZWU5Zm" : "dZTQ1Zm";

        function t() {
            dataLayer.push(arguments)
        }
        t("js", new Date);
        t("set", "developer_id." + e, !0);
        for (var i = 0; i < n.length; i++) t("config", `AW-${n[i].pixelId}`)
    }

    function A(n) {
        for (var e = 0; e < n.length; e++) {
            const t = n[e].pixelId;
            window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
            window._linkedin_data_partner_ids.push(t)
        }! function() {
            var n = document.getElementsByTagName("script")[0],
                e = document.createElement("script");
            e.type = "text/javascript";
            e.async = !0;
            e.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
            n.parentNode.insertBefore(e, n)
        }()
    }

    function y(n, e) {
        for (var t in n)
            if (n.hasOwnProperty(t) && n[t].length > 0) {
                var i = n[t];
                switch (t) {
                    case "FACEBOOK":
                        if (e && !n.loadedFbPixel) {
                            P(i, e);
                            n.loadedFbPixel = !0
                        }
                        break;
                    case "ADWORDS":
                        _(i[0].pixelId);
                        E(i);
                        break;
                    case "LINKEDIN":
                        A(i)
                }
            }
    }

    function $(n, e) {
        for (var t in n)
            if (n.hasOwnProperty(t) && n[t].length > 0 && "FACEBOOK" === t)
                if (!n.loadedFbPixel) {
                    P(n[t], e);
                    n.loadedFbPixel = !0
                }
    }

    function I(n, e) {
        for (var t in n)
            if (n.hasOwnProperty(t) && n[t].length > 0) switch (t) {
                case "FACEBOOK":
                    fbq("consent", "grant");
                    break;
                case "ADWORDS":
                    dataLayer.push("consent", "update", {
                        ad_storage: "granted",
                        analytics_storage: "granted"
                    })
            }
    }

    function L(n) {
        if (n.hasOwnProperty("LINKEDIN")) window.location.reload();
        else
            for (var e in n)
                if (n.hasOwnProperty(e) && n[e].length > 0) switch (e) {
                    case "FACEBOOK":
                        fbq("consent", "revoke");
                        break;
                    case "ADWORDS":
                        dataLayer.push("consent", "update", {
                            ad_storage: "denied",
                            analytics_storage: "denied"
                        })
                }
    }
    const S = function(n) {
            return `https://${n}?portalId=${v()}`
        },
        q = function(n, e) {
            const t = new XMLHttpRequest;
            t.addEventListener("load", (() => {
                const n = JSON.parse(t.responseText);
                e(n)
            }));
            t.open("GET", S(n));
            t.send()
        },
        x = n => `hubspotJsonpCallbackName${n}`,
        D = function(n, e) {
            return `https://${n}?${[`portalId=${v()}`,`callback=${e}`].join("&")}`
        },
        j = function(n, e, t) {
            const i = document.createElement("script"),
                o = x(t);
            window[o] = function(n) {
                e(n);
                document.body.removeChild(i);
                delete window[o]
            };
            i.src = D(n, o);
            document.body.appendChild(i)
        };

    function C({
        jsonUrl: n,
        jsonpUrl: e
    }, t, i) {
        if (!n && !e) throw new Error("Missing jsonUrl and jsonpUrl args");
        m() ? q(n, t) : j(e, t, i)
    }
    const k = function() {
        const n = O();
        let e, t = null,
            i = null;
        window.enabledEventSettings = {
            FACEBOOK: [],
            ADWORDS: []
        };
        if (!(window.disabledHsPopups && window.disabledHsPopups.indexOf("ADS") > -1)) {
            window._hsp = window._hsp || [];
            window._hsp.push(["addPrivacyConsentListener", function(e) {
                e.categories.advertisement ? t ? I(t, i) : C({
                    jsonUrl: `${n}/hs-script-loader-public/v1/config/pixels-and-events/json`,
                    jsonpUrl: `${n}/hs-script-loader-public/v1/config/pixels-and-events/jsonp`
                }, (n => {
                    t = n.pixels;
                    y(n.pixels, i);
                    window.enabledEventSettings = n.enhancedConversionEventSettings
                }), "addPixels") : t && L(t)
            }]);
            window._hsq = window._hsq || [];
            window._hsq.push(["addUserTokenListener", function(n) {
                i = n;
                t && $(t, i)
            }]);
            window.addEventListener("message", (n => {
                if (n.data && "hsFormCallback" === n.data.type && "onFormSubmitted" === n.data.eventName) {
                    window.enabledEventSettings.FACEBOOK && window.enabledEventSettings.FACEBOOK.forEach((e => {
                        o(e, n.data.data)
                    }));
                    window.enabledEventSettings.ADWORDS && window.enabledEventSettings.ADWORDS.forEach((e => {
                        a(e, n.data.data)
                    }))
                }
            }), !1)
        }

        function o(n, e) {
            if (void 0 === window.fbq) return;
            const {
                hubSpotFormId: t,
                eventCategory: i
            } = n, {
                conversionId: o,
                formGuid: a
            } = e;
            a === t && window.fbq("track", i, {}, {
                eventID: o
            })
        }

        function a(n, t) {
            const {
                hubSpotFormId: i,
                pixelId: o,
                conversionLabel: a
            } = n, {
                conversionId: r,
                formGuid: d
            } = t;
            e = function() {
                window.dataLayer.push(arguments)
            };
            d === i && null !== a && e("event", "conversion", {
                send_to: `AW-${o}/${a}`,
                transaction_id: r
            })
        }
    };
    window.PIXELS_RAN = window.PIXELS_RAN || !1;
    if (!window.PIXELS_RAN) {
        window.PIXELS_RAN = !0;
        k()
    }
}();
//# sourceMappingURL=//static.hsappstatic.net/adsscriptloaderstatic/static-1.833/bundles/pixels-release.js.map