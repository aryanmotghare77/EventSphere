(function() {
    function q(a, c) {
        for (a = a.parentElement; a; a = a.parentElement)
            if (c(a)) return a;
        return null
    }

    function v(a) {
        for (var c = [], b = a.parentNode.children, e = 0; e < b.length; e++) b[e] !== a && b[e].tagName && "label" === b[e].tagName.toLowerCase() && c.push(b[e].textContent);
        return c.join(" ")
    }

    function w(a, c, b) {
        if (q(a, function(a) {
                return a.id && a.id.toLowerCase && -1 !== a.id.toLowerCase().indexOf("privy")
            }) || a.id && a.id.toLowerCase && -1 !== a.id.toLowerCase().indexOf("_adrollpoproll")) return !1;
        var e = x(a);
        return e ? (window.__adroll_idem0(e,
            c, a, b), !0) : !1
    }

    function r(a) {
        if ("form" === a.target.tagName.toLowerCase()) {
            a = a.target.getElementsByTagName("input");
            for (var c = 0; c < a.length; c++) w(a[c], "submit")
        }
    }

    function x(a) {
        if (!a.value || 8 > a.value.length) return null;
        if ("input" !== a.tagName.toLowerCase() || -1 !== "button checkbox color date datetime datetime-local file hidden image month number password radio range reset submit tel time week".split(" ").indexOf(a.type.toLowerCase())) return null;
        for (var c = ["id", "name", "type"], b = 0; b < c.length; b++)
            if (a[c[b]] &&
                -1 !== a[c[b]].toLowerCase().indexOf("password")) return null;
        a = a.value.trim();
        return !t[a.toLowerCase()] && y.test(a) && z.test(a) ? a : null
    }

    function A(a) {
        var c = window.__adroll._srv("/emailc"),
            b = [];
        try {
            b.push("keyw=" + encodeURIComponent(window.__adroll.get_keywords()))
        } catch (g) {}
        try {
            window.adroll_segments && b.push("name=" + encodeURIComponent(window.adroll_segments.toLowerCase()))
        } catch (g) {}
        try {
            var e = window.__adroll.get_conversion_value();
            e && (e.conv_value && b.push("conv_value=" + encodeURIComponent(e.conv_value)),
                e.currency && b.push("adroll_currency=" + encodeURIComponent(e.currency)))
        } catch (g) {}
        try {
            e = [];
            a && a.adroll_email && window.__adroll._reg_lpq && (b.push(window.__adroll._reg_lpq("epq", {
                adroll_email: a.adroll_email
            })), delete a.adroll_email);
            for (var d in a) a.hasOwnProperty(d) && e.push(encodeURIComponent(d) + "=" + encodeURIComponent(a[d]));
            b.push("adroll_external_data=" + encodeURIComponent(e.join("&")))
        } catch (g) {}
        a = [
            [window.adroll_adv_id, window.adroll_pix_id]
        ];
        window.__adroll._has_global("adroll_inc_ids") && (a = a.concat(window.__adroll._global("adroll_inc_ids")));
        for (d = 0; d < a.length; d++) window.__adroll.add_script_element(window.__adroll.get_base_url(c, a[d][0], a[d][1], null, "", b), {
            async: "true"
        })
    }

    function k(a) {
        window.__adroll_loaded || window.__adroll && window.__adroll._loaded ? A(a) : window.setTimeout(function() {
            k(a)
        }, 500)
    }

    function B(a, c, b, e, d, g) {
        var f = {},
            h;
        for (h in l) l.hasOwnProperty(h) && (f[h] = l[h]);
        f.adroll_email = a;
        f.sibling_label_text = e || "";
        f.source = d;
        c && (f.input_id = c.id || "", f.input_name = c.name || "", f.input_type = c.type || "", f.input_class = c.className || "");
        b && (f.form_id =
            b.getAttribute("id") || "", f.form_name = b.getAttribute("name") || "", f.form_action = b.getAttribute("action") || "", f.form_method = b.getAttribute("method") || "", f.form_class = b.className);
        g && (f.click_tag = String(g.tagName || "").toLowerCase(), f.click_id = g.getAttribute("id") || "", f.click_class = g.className);
        k(f)
    }

    function m(a) {
        a = a.split(".");
        a.unshift("window");
        for (var c = window, b = 0; b < a.length; b++) c = c[a[b]];
        return c
    }

    function n(a) {
        a = a.split(".");
        a.unshift("window");
        for (var c = 1; c < a.length; c++) {
            for (var b = a.slice(0, c), e =
                    a[c], d = window, g = 0; g < b.length; g++) d = d[b[g]];
            if (!d.hasOwnProperty(e)) return !1
        }
        return !0
    }

    function C(a) {
        a.email = a.adroll_email;
        delete a.adroll_email;
        return a
    }
    window.__adroll_idem0 = function(a, c, b, e) {
        if (!1 !== window.adroll_sendrolling_email_collection && !window.adroll_sendrolling_hashed_only) {
            if (b) {
                var d = q(b, function(a) {
                    return "form" === a.tagName.toLowerCase()
                });
                var g = v(b)
            }
            B(a, b, d, g, c, e);
            !1 === window.adroll_sendrolling_cross_device && (window.__adroll || {}).record_adroll_private_email && (window._adroll_email = a, window.__adroll.record_adroll_private_email("sendrolling"))
        }!1 !==
            window.adroll_sendrolling_cross_device && window.__adroll.record_adroll_email && (window._adroll_email = a, window.__adroll.record_adroll_email("sendrolling"))
    };
    for (var u = ["name@yourmail.com"], t = {}, p = 0; p < u.length; p++) t[u[p].toLowerCase()] = 1;
    var y = /^(?:(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?[\w!#$%&\'\*\+\-/=\?\^`\{\|\}~]+(?:\.[\w!#$%&\'\*\+\-/=\?\^`\{\|\}~]+)*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?|(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?"(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?"(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?)@(?:(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?[\w!#$%&\'\*\+\-/=\?\^`\{\|\}~]+(?:\.[\w!#$%&\'\*\+\-/=\?\^`\{\|\}~]+)*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?|(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?\[(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x5a\x5e-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\](?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\))*(?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\((?:(?:(?:[ \t]*(?:\r\n))?[ \t]+)?(?:[\x01-\x08\x0b\x0c\x0f-\x1f\x7f\x21-\x27\x2a-\x5b\x5d-\x7e]|(?:\\.)))*(?:(?:[ \t]*(?:\r\n))?[ \t]+)?\)|(?:(?:[ \t]*(?:\r\n))?[ \t]+))?)$/i,
        z = /\.[a-z]{2,}$/i,
        l = {
            shotgun: "1"
        };
    (function() {
        window.document.body.addEventListener ? window.document.body.addEventListener("submit", r, !0) : window.document.body.attachEvent && window.document.body.attachEvent("onsubmit", r);
        window.setTimeout(function() {
            if (window.Shopify) {
                var a = {
                    source: "shopify"
                };
                var c = ["adroll_email", "Shopify.checkout.email", "Shopify.Checkout.customer.email", "BOLD.order.customer.email"],
                    b = ["adroll_user_id", "Shopify.checkout.customer_id", "Shopify.Checkout.customer.customer_id"],
                    e = ["adroll_accepts_marketing",
                        "Shopify.checkout.buyer_accepts_marketing"
                    ],
                    d;
                for (d = 0; d < c.length; d++)
                    if (n(c[d])) {
                        a.adroll_email = m(c[d]);
                        break
                    }
                for (d = 0; d < b.length; d++)
                    if (n(b[d])) {
                        a.userId = m(b[d]);
                        break
                    }
                for (d = 0; d < e.length; d++)
                    if (n(e[d])) {
                        a.accepts_marketing = m(e[d]);
                        break
                    }
                a = a.hasOwnProperty("adroll_email") && a.adroll_email && a.hasOwnProperty("accepts_marketing") ? a : null
            } else a = null;
            a && (window.adroll_sendrolling_hashed_only || k(a), window.__adroll.identify(C(a), "sendrolling-shopify"))
        }, 500)
    })()
})();