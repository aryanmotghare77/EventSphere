! function(e) {
    var t = {};

    function i(s) {
        if (t[s]) return t[s].exports;
        var n = t[s] = {
            i: s,
            l: !1,
            exports: {}
        };
        e[s].call(n.exports, n, n.exports, i);
        n.l = !0;
        return n.exports
    }
    i.m = e;
    i.c = t;
    i.d = function(e, t, s) {
        i.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: s
        })
    };
    i.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        });
        Object.defineProperty(e, "__esModule", {
            value: !0
        })
    };
    i.t = function(e, t) {
        1 & t && (e = i(e));
        if (8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var s = Object.create(null);
        i.r(s);
        Object.defineProperty(s, "default", {
            enumerable: !0,
            value: e
        });
        if (2 & t && "string" != typeof e)
            for (var n in e) i.d(s, n, function(t) {
                return e[t]
            }.bind(null, n));
        return s
    };
    i.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        i.d(t, "a", t);
        return t
    };
    i.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    };
    i.p = "//static.hsappstatic.net/conversations-embed/static-1.18938/";
    i(i.s = 0)
}([function(e, t, i) {
    "use strict";
    var s = i(1);
    (0, i(85).markStartPreDelay)();
    const n = () => {
        (0, s.startOnceReady)();
        document.removeEventListener("DOMContentLoaded", n)
    };
    "loading" === document.readyState ? document.addEventListener("DOMContentLoaded", n) : (0, s.startOnceReady)()
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.startOnceReady = I;
    var n = i(3),
        o = i(91),
        r = i(94),
        a = i(121),
        l = i(40),
        d = i(33),
        c = i(34),
        u = s(i(43)),
        h = i(41),
        g = s(i(42)),
        f = i(122),
        p = i(103),
        m = i(107);
    const E = () => {
        console.warn(`loadImmediately is set to false and widget.load() has not been called on window.${c.GLOBAL_VARIABLE} yet. Please call widget.load() first or set loadImmediately on window.${c.SETTINGS_VARIABLE} to true.`)
    };

    function _({
        eventEmitter: e,
        logError: t
    }) {
        const i = (0, r.createEmbedScriptContext)(),
            s = new n.WidgetShell(i, t, e);
        if (window.hubspot_live_messages_running) console.warn("duplicate instance of live chat exists on page");
        else {
            window.hubspot_live_messages_running = !0;
            s.start()
        }
        return s
    }

    function v(e) {
        (0, o.loadWidgetCss)(document);
        if ((0, d.getExternalApiSettings)().loadImmediately) _({
            logError: e
        });
        else {
            const t = new u.default,
                i = new g.default;
            (0, l.setupExternalApi)({
                debug: E,
                on: t.on,
                off: t.off,
                clear: E,
                resetAndReloadWidget: E,
                widget: {
                    load: () => {
                        _({
                            eventEmitter: t,
                            logError: e
                        }).loadWidget()
                    },
                    remove: E,
                    open: E,
                    close: E,
                    refresh: E,
                    status: () => ({
                        loaded: !1
                    })
                }
            });
            (0, h.flushOnReadyCallbacks)({
                logger: i
            })
        }
    }

    function I() {
        if ((0, a.hasRequiredFeatures)(window)) {
            const e = (0, m.getFullUrl)("app-api");
            if (!new RegExp(`^${e}/conversations/assistants/v1/content-embed`, "i").test(window.location.href)) {
                const e = new f.ErrorLogger;
                (0, p.getIsLocal)() ? v(): e.captureErrors(() => {
                    v(e)
                })
            }
        }
    }
}, function(e, t, i) {
    "use strict";

    function s(e) {
        return e && e.__esModule ? e : {
            default: e
        }
    }
    e.exports = s, e.exports.__esModule = !0, e.exports.default = e.exports
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WidgetShell = void 0;
    var n = i(4),
        o = i(7),
        r = i(8),
        a = i(9),
        l = s(i(13)),
        d = i(15),
        c = i(16),
        u = i(18),
        h = s(i(17)),
        g = i(19),
        f = i(22),
        p = i(23),
        m = i(24),
        E = i(25),
        _ = i(26),
        v = i(30),
        I = i(39),
        b = i(40),
        T = i(41),
        O = s(i(42)),
        S = s(i(43)),
        y = i(49),
        A = i(50),
        P = i(52),
        C = i(53),
        w = i(54),
        M = i(32),
        R = s(i(57)),
        D = s(i(61)),
        L = i(62),
        k = i(64),
        N = i(66),
        x = i(67),
        U = i(21),
        W = i(69),
        H = i(70),
        j = i(72),
        G = i(74),
        F = i(75),
        B = i(76),
        q = i(77),
        V = i(81),
        $ = i(82),
        K = i(83),
        z = i(86),
        Y = i(87),
        X = i(20),
        Q = i(48),
        Z = i(33),
        J = i(88),
        ee = i(89),
        te = i(90);
    const ie = "help-widget",
        se = () => {};
    class ne {
        constructor(e, t, i) {
            this.handleDragStart = e => {
                const t = document.getElementById(I.PARENT_ID);
                this.isDragging = !0;
                const i = "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION];
                this.offsetX = i ? t.getBoundingClientRect().right - e.clientX : e.clientX - t.getBoundingClientRect().left;
                this.offsetY = t.getBoundingClientRect().bottom - e.clientY;
                this.dragOverlayEl instanceof HTMLDivElement && this.dragOverlayEl.style.setProperty("display", "block");
                this.dragHandleEl instanceof HTMLDivElement && this.dragHandleEl.style.setProperty("cursor", "grabbing")
            };
            this.handleDragEnd = () => {
                if (!this.dragHandleEl || !this.isDragging) return;
                this.iframeMessage.post(r.TRACK_WIDGET_DRAGGED, {
                    timeOnPage: performance && Math.round(performance.now() / 1e3),
                    isOpen: this.isOpen || !1
                });
                this.dragHandleEl.style.setProperty("cursor", "grab");
                this.dragOverlayEl instanceof HTMLDivElement && this.dragOverlayEl.style.setProperty("display", "none");
                this.isDragging = !1;
                const e = this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION] : "RIGHT_ALIGNED",
                    t = e ? "right" : "left",
                    i = `${u.cookies.WIDGET_POSITION}_${t}`,
                    s = document.getElementById(I.PARENT_ID),
                    n = window.getComputedStyle(s),
                    o = parseInt(n.bottom, 10),
                    a = e ? parseInt(n.right, 10) : parseInt(n.left, 10);
                if (a || o)(0, c.setCookie)(i, JSON.stringify({
                    bottom: o,
                    horizontal: a
                }), h.default.THIRTY_MINUTES);
                else {
                    s.style.removeProperty(t);
                    s.style.removeProperty("bottom");
                    (0, X.deleteCookie)(i)
                }
            };
            this.handleDrag = e => {
                if (!this.isDragging) return;
                const t = document.getElementById(I.PARENT_ID),
                    i = this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION] : "RIGHT_ALIGNED",
                    s = i ? "right" : "left",
                    n = i ? window.innerWidth - e.clientX - this.offsetX : e.clientX - this.offsetX,
                    o = window.innerHeight - e.clientY - this.offsetY;
                t.style.setProperty(s, Math.min(Math.max(0, n), window.innerWidth - t.clientWidth) + "px", "important");
                t.style.setProperty("bottom", Math.min(Math.max(0, o), window.innerHeight - t.clientHeight) + "px", "important");
                t.style.setProperty("position", "fixed", "!important")
            };
            this.unintializeDrag = () => {
                if (this.dragHandleEl) {
                    this.dragHandleEl.removeEventListener("mousedown", this.handleDragStart);
                    window.removeEventListener("mousemove", this.handleDrag);
                    window.removeEventListener("mouseup", this.handleDragEnd);
                    window.removeEventListener("mouseleave", this.handleDragEnd);
                    this.dragHandleEl.remove()
                }
            };
            this.initalizeDrag = () => {
                const {
                    accentColor: e,
                    draggable: t
                } = this.widgetData;
                if (!t || (0, n.isAnyMobile)() || (0, Z.getExternalApiSettings)().isFullscreen) return;
                const i = "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION] ? "right" : "left";
                this.dragHandleEl = document.createElement("div");
                this.dragHandleEl.classList.add("hs-drag-handle", "hs-drag-handle--" + i);
                this.dragHandleEl.title = "Drag";
                this.dragHandleEl.style.setProperty("color", e);
                this.dragHandleEl.innerHTML = '\n      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_2202_11221)"><path d="M11.1417 0H13.4333C14.0642 0 14.575 0.510833 14.575 1.14167V3.43333C14.575 4.06417 14.0642 4.575 13.4333 4.575H11.1417C10.5108 4.575 10 4.06417 10 3.43333V1.14167C10 0.510833 10.5108 0 11.1417 0ZM11.1417 6.85833H13.4333C14.0642 6.85833 14.575 7.36917 14.575 8V10.2917C14.575 10.9225 14.0642 11.4333 13.4333 11.4333H11.1417C10.5108 11.4333 10 10.9225 10 10.2917V8C10 7.36917 10.5108 6.85833 11.1417 6.85833ZM11.1417 13.7167H13.4333C14.0642 13.7167 14.575 14.2275 14.575 14.8583V17.15C14.575 17.7808 14.0642 18.2917 13.4333 18.2917H11.1417C10.5108 18.2917 10 17.7808 10 17.15V14.8583C10 14.2275 10.5108 13.7167 11.1417 13.7167ZM11.1417 20.575H13.4333C14.0642 20.575 14.575 21.0858 14.575 21.7167V24.0083C14.575 24.6392 14.0642 25.15 13.4333 25.15H11.1417C10.5108 25.15 10 24.6392 10 24.0083V21.7167C10 21.0858 10.5108 20.575 11.1417 20.575ZM18 0H20.2917C20.9225 0 21.4333 0.510833 21.4333 1.14167V3.43333C21.4333 4.06417 20.9225 4.575 20.2917 4.575H18C17.3692 4.575 16.8583 4.06417 16.8583 3.43333V1.14167C16.8583 0.510833 17.3692 0 18 0ZM18 6.85833H20.2917C20.9225 6.85833 21.4333 7.36917 21.4333 8V10.2917C21.4333 10.9225 20.9225 11.4333 20.2917 11.4333H18C17.3692 11.4333 16.8583 10.9225 16.8583 10.2917V8C16.8583 7.36917 17.3692 6.85833 18 6.85833ZM18 13.7167H20.2917C20.9225 13.7167 21.4333 14.2275 21.4333 14.8583V17.15C21.4333 17.7808 20.9225 18.2917 20.2917 18.2917H18C17.3692 18.2917 16.8583 17.7808 16.8583 17.15V14.8583C16.8583 14.2275 17.3692 13.7167 18 13.7167ZM18 20.575H20.2917C20.9225 20.575 21.4333 21.0858 21.4333 21.7167V24.0083C21.4333 24.6392 20.9225 25.15 20.2917 25.15H18C17.3692 25.15 16.8583 24.6392 16.8583 24.0083V21.7167C16.8583 21.0858 17.3692 20.575 18 20.575ZM11.1417 27.425H13.4333C14.0642 27.425 14.575 27.9358 14.575 28.5667V30.8583C14.575 31.4892 14.0642 32 13.4333 32H11.1417C10.5108 32 10 31.4892 10 30.8583V28.5667C10 27.9358 10.5108 27.425 11.1417 27.425ZM18 27.425H20.2917C20.9225 27.425 21.4333 27.9358 21.4333 28.5667V30.8583C21.4333 31.4892 20.9225 32 20.2917 32H18C17.3692 32 16.8583 31.4892 16.8583 30.8583V28.5667C16.8583 27.9358 17.3692 27.425 18 27.425Z" fill="currentColor"></path></g><defs><clipPath id="clip0_2202_11221"><rect width="32" height="32" fill="white"></rect></clipPath></defs></svg>\n    ';
                this.dragOverlayEl = document.createElement("div");
                this.dragOverlayEl.classList.add("hs-drag-overlay");
                const s = document.getElementById(I.PARENT_ID);
                s.appendChild(this.dragOverlayEl);
                s.appendChild(this.dragHandleEl);
                s.style.setProperty("user-select", "none");
                this.dragHandleEl.addEventListener("mousedown", this.handleDragStart);
                window.addEventListener("mousemove", this.handleDrag);
                window.addEventListener("mouseup", this.handleDragEnd);
                window.addEventListener("mouseleave", this.handleDragEnd)
            };
            this.getDefaultSize = () => ({
                width: 100,
                height: 96
            });
            this.getStartPosition = () => {
                if (!this.widgetData.draggable || (0, n.isAnyMobile)() || (0, Z.getExternalApiSettings)().isFullscreen) return null;
                const e = (this.widgetData ? "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION] : "RIGHT_ALIGNED") ? "right" : "left",
                    t = `${u.cookies.WIDGET_POSITION}_${e}`,
                    i = (0, c.getCookie)(t);
                if (!i) return null;
                try {
                    return JSON.parse(i)
                } catch (e) {
                    console.error("Error parsing cookie", e);
                    return null
                }
            };
            this.loadIFrame = () => {
                !(0, ee.isSafari)() && this.widgetData.fontFamily && this.widgetData.fontGroup === te.WEB_FONTS && setTimeout(() => (0, J.preloadFont)(this.widgetData.fontFamily));
                (0, n.isAnyMobile)() && document.documentElement.classList.add(f.MOBILE);
                const e = document.createElement("iframe");
                this.iframeSrc = this.embedScriptContext.getIFrameSrc();
                e.src = this.iframeSrc;
                e.id = I.IFRAME_ID;
                e.title = "Chat Widget";
                e.allowFullscreen = !0;
                e.setAttribute("data-test-id", "chat-widget-iframe");
                e.addEventListener("load", this.handleIframeLoad);
                const t = document.createElement("div");
                t.role = "region";
                t.ariaLabel = "Chat Widget";
                if ((0, M.shouldEmbedInline)()) {
                    const i = document.querySelector((0, M.getInlineEmbedSelector)());
                    if (!i) {
                        this.devLogger.error(`cannot embed widget - element at \`${(0,M.getInlineEmbedSelector)()}\` cannot be found`);
                        return
                    }
                    t.id = I.INLINE_PARENT_ID;
                    e.id = I.INLINE_IFRAME_ID;
                    this.iframe = t.appendChild(e);
                    i.appendChild(t);
                    return
                }
                if (document.getElementById(I.PARENT_ID)) {
                    console.warn(`Element with id ${I.PARENT_ID} already exists. Unable to load HubSpot Conversations Widget.`);
                    return
                }
                t.id = I.PARENT_ID;
                const i = this.getStartPosition();
                if (i) {
                    const e = "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION] ? "right" : "left";
                    t.style.setProperty(e, i.horizontal + "px", "important");
                    t.style.setProperty("bottom", i.bottom + "px", "important")
                }
                const {
                    height: s,
                    width: o
                } = this.getDefaultSize();
                t.style.minHeight = s + "px";
                t.style.minWidth = o + "px";
                const r = document.createElement("div");
                r.className = f.SHADOW_CONTAINER;
                const a = (0, E.isEmbeddedInProduct)(this.embedScriptContext);
                if (a) {
                    t.classList.add(f.INTERNAL);
                    r.classList.add(f.INTERNAL)
                }
                t.appendChild(r);
                a && (e.id = ie);
                this.iframe = t.appendChild(e);
                document.body.appendChild(t);
                this.initalizeDrag();
                this.setFrameClass()
            };
            this.handleI18nLabels = ({
                data: e
            }) => {
                if (!this.iframe || !e) return;
                const t = e["conversations-visitor-ui.visitorExperienceAriaLabels.chatWidget"],
                    i = e["conversations-visitor-experience-components.visitorExperienceAriaLabels.drag"],
                    s = document.getElementById(I.PARENT_ID);
                t && s && (s.ariaLabel = t);
                i && this.dragHandleEl && this.dragHandleEl.setAttribute("title", i)
            };
            this.clampPosition = () => {
                var e;
                if (null === (e = this.widgetData) || void 0 === e || !e.draggable || (0, n.isAnyMobile)() || (0, Z.getExternalApiSettings)().isFullscreen) return;
                let t = !1;
                const i = document.getElementById(I.PARENT_ID),
                    s = "RIGHT_ALIGNED" === this.widgetData[N.WIDGET_LOCATION];
                if (!i || !i.getBoundingClientRect) return;
                const {
                    top: o,
                    left: r,
                    right: a
                } = i.getBoundingClientRect(), {
                    innerWidth: l,
                    innerHeight: d
                } = window, {
                    clientWidth: c,
                    clientHeight: u
                } = i;
                if (o < 0) {
                    t = !0;
                    i.style.setProperty("bottom", Math.max(d - u, 0) + "px", "important")
                }
                if (s && r < 0) {
                    t = !0;
                    i.style.setProperty("right", Math.max(l - c, 0) + "px", "important")
                }
                if (!s && l - a < 0) {
                    t = !0;
                    i.style.setProperty("left", Math.max(l - c, 0) + "px", "important")
                }
                t && this.handleDragEnd()
            };
            this.setWidgetData = e => {
                this.widgetData = e;
                this.setFrameClass()
            };
            this.embedScriptContext = e;
            this.dragHandleEl = null;
            this.dragOverlayEl = null;
            this.isDragging = !1;
            this.offsetX = 0;
            this.offsetY = 0;
            this.isOpen = (0, v.shouldWidgetStartOpen)();
            this.iframe = null;
            this.iframeSrc = null;
            this.hasLoadedIframe = !1;
            this.isLoadingIframe = !1;
            this.requestWidgetOpen = this.requestWidgetOpen.bind(this);
            this.requestWidgetClose = this.requestWidgetClose.bind(this);
            this.requestWidgetRefresh = (0, C.throttle)(this.requestWidgetRefresh.bind(this), 1e3);
            this.handleWindowResize = this.handleWindowResize.bind(this);
            this.handleIframeLoad = this.handleIframeLoad.bind(this);
            this.handleResizeMessage = this.handleResizeMessage.bind(this);
            this.handleOpenChange = this.handleOpenChange.bind(this);
            this.handleStoreMessagesCookie = this.handleStoreMessagesCookie.bind(this);
            this.handleRequestWidget = this.handleRequestWidget.bind(this);
            this.handleWidgetRefresh = this.handleWidgetRefresh.bind(this);
            this.setWidgetNotLoaded = this.setWidgetNotLoaded.bind(this);
            this.removeIframe = this.removeIframe.bind(this);
            this.handleExternalApiEventMessage = this.handleExternalApiEventMessage.bind(this);
            this.loadWidget = (0, C.throttle)(this.loadWidget.bind(this), 1e3);
            this.resetAndReloadWidget = this.resetAndReloadWidget.bind(this);
            this.setWidgetOpenCookie = this.setWidgetOpenCookie.bind(this);
            this.getStatus = this.getStatus.bind(this);
            this.handleScroll = this.handleScroll.bind(this);
            this.handleExitIntent = this.handleExitIntent.bind(this);
            this.extendedClearCookiesFunction = this.extendedClearCookiesFunction.bind(this);
            this.openToNewThread = this.openToNewThread.bind(this);
            this.devLogger = new O.default;
            this.eventEmitter = i || new S.default;
            this.logError = t ? t.logError : se;
            this.scrollPercentageTracker = new R.default({
                onScroll: this.handleScroll
            });
            this.exitIntentTracker = new D.default({
                onExitIntent: this.handleExitIntent
            });
            this.iframeMessage = (0, q.iframeMessagePool)({
                iframeSrc: this.embedScriptContext.getIFrameSrc()
            });
            this.apiUsageTracker = new W.ApiUsageTracker({
                postMessageToIframe: this.iframeMessage.post
            });
            const s = new H.PostMessageApiClient(this.iframeMessage.post),
                d = new l.default;
            this.postMessageReceiver = new a.PostMessageReceiver({
                [o.SHOW_PAGE_TITLE_NOTIFICATION]: d.handleShow,
                [o.CLEAR_PAGE_TITLE_NOTIFICATION]: d.handleClear,
                [o.REQUEST_WIDGET]: this.handleRequestWidget,
                [r.REFRESH_WIDGET_DATA]: this.requestWidgetRefresh,
                [o.IFRAME_RESIZE]: this.handleResizeMessage,
                [o.OPEN_CHANGE]: this.handleOpenChange,
                [o.CLOSED_WELCOME_MESSAGE]: V.hideWelcomeMessage,
                [o.STORE_MESSAGES_COOKIE]: this.handleStoreMessagesCookie,
                [o.EXTERNAL_API_EVENT]: this.handleExternalApiEventMessage,
                [o.API_REQUEST]: s.makeApiRequest,
                [o.I18N_LABELS]: this.handleI18nLabels
            }, {
                allowedOrigin: this.embedScriptContext.getIFrameDomain(),
                iframeUuid: this.embedScriptContext.iframeUuid
            });
            this.exitIntentTracker.registerPostMessageReceivers(this.postMessageReceiver);
            this.scrollPercentageTracker.registerPostMessageReceivers(this.postMessageReceiver)
        }
        handleExternalApiEventMessage(e) {
            (0, y.handleExternalApiEventMessage)(e, {
                eventEmitter: this.eventEmitter
            })
        }
        handleScroll({
            scrollPercentage: e
        }) {
            this.iframeMessage.post(r.SCROLL_PERCENTAGE_CHANGE, {
                scrollPercentage: e
            })
        }
        handleExitIntent() {
            this.iframeMessage.post(r.EXIT_INTENT)
        }
        getStatus() {
            return {
                loaded: this.hasLoadedIframe,
                pending: this.isLoadingIframe
            }
        }
        handleIframeLoad() {
            setTimeout(() => this.eventEmitter.trigger("widgetLoaded", {
                message: "widget has loaded"
            }));
            this.handleWindowResize();
            this.hasLoadedIframe = !0;
            this.isLoadingIframe = !1;
            (0, L.markEndPostDelay)();
            this.postPerfAttributes(this.embedScriptContext.getPerfAttributes())
        }
        postPerfAttributes(e) {
            Math.random() < .5 && this.iframeMessage.post(r.PERF_ATTRIBUTES, {
                perfAttributes: e
            })
        }
        resetAndReloadWidget() {
            this.removeIframe();
            (0, x.resetAndLaunchWidget)()
        }
        removeIframe() {
            this.unintializeDrag();
            const e = (0, M.shouldEmbedInline)() ? document.getElementById(I.INLINE_PARENT_ID) : document.getElementById(I.PARENT_ID);
            e && e.remove();
            this.iframeSrc = null;
            this.hasLoadedIframe = !1;
            this.isLoadingIframe = !1
        }
        handleResizeMessage({
            data: {
                height: e,
                width: t
            } = {}
        }) {
            (0, $.resizeWidgetIframe)({
                height: e,
                width: t
            });
            e && e > 60 && this.dragHandleEl ? this.dragHandleEl.style.setProperty("display", "flex") : this.dragHandleEl && this.dragHandleEl.style.setProperty("display", "none");
            this.clampPosition()
        }
        setWidgetOpenCookie({
            isOpen: e
        }) {
            (0, c.setCookie)(u.cookies.IS_OPEN, e, h.default.THIRTY_MINUTES)
        }
        handleOpenChange({
            data: {
                isOpen: e,
                isUser: t
            }
        }) {
            const i = document.documentElement,
                s = document.getElementById(I.PARENT_ID).getElementsByClassName(f.SHADOW_CONTAINER)[0];
            this.isOpen = e;
            t && this.setWidgetOpenCookie({
                isOpen: this.isOpen
            });
            if (this.isOpen) {
                i.classList.add(f.ACTIVE);
                s.classList.add("active")
            } else {
                i.classList.remove(f.ACTIVE);
                s.classList.remove("active")
            }
        }
        handleRequestWidget({
            source: e
        }) {
            (0, j.sendWidgetDataToIframe)({
                source: e,
                widgetData: this.widgetData,
                embedScriptContext: this.embedScriptContext,
                apiUsageTracker: this.apiUsageTracker
            })
        }
        handleStoreMessagesCookie({
            data: e
        }) {
            this.iframeMessage.post(r.FIRST_VISITOR_SESSION, {
                isFirstVisitorSession: !1
            });
            "yes" === (0, z.getGlobalCookieOptOut)() && this.widgetData.gdprConsentOptions.cookieConsentPrompt !== Y.NEVER && window._hsp.push(["showBanner"]);
            (0, m.setMessagesUtk)(e)
        }
        requestWidgetOpen() {
            this.isOpen ? this.devLogger.log("cannot open the widget, it is already open.") : this.iframeMessage.post(r.REQUEST_OPEN)
        }
        requestWidgetClose() {
            this.isOpen ? this.iframeMessage.post(r.REQUEST_CLOSE) : this.devLogger.log("cannot close the widget, it is already closed")
        }
        handleWindowResize() {
            const e = {
                height: window.innerHeight,
                width: window.innerWidth
            };
            this.iframeMessage.post(r.BROWSER_WINDOW_RESIZE, e);
            this.clampPosition()
        }
        requestWidgetRefresh({
            openToNewThread: e
        } = {}) {
            const {
                portalId: t
            } = this.embedScriptContext;
            if (this.hasLoadedIframe || !this.isLoadingIframe)
                if (this.hasLoadedIframe) {
                    const i = this.embedScriptContext.getInitialRequestUrl();
                    (0, A.fetchWidgetData)({
                        requestUrl: i,
                        portalId: t
                    }, t => {
                        this.handleWidgetRefresh(t);
                        e && this.openToNewThread()
                    })
                } else {
                    this.loadWidget();
                    e && this.openToNewThread()
                }
            else this.devLogger.log("Cannot refresh the widget - it is currently loading.")
        }
        openToNewThread() {
            this.iframeMessage.post(r.OPEN_TO_NEW_THREAD)
        }
        extendedClearCookiesFunction(e) {
            e && e[U.RESET_WIDGET] && this.removeIframe();
            (0, g.clearCookies)(e)
        }
        handleWidgetRefresh(e) {
            this.setWidgetData(e);
            (0, d.getWidgetDataResponseType)(this.widgetData) === p.HIDE_WIDGET ? this.removeIframe() : this.iframeMessage.post(r.REFRESH_WIDGET_DATA, Object.assign({}, this.widgetData, (0, w.getIframeQueryParams)(this.embedScriptContext)))
        }
        setWidgetNotLoaded({
            reason: e,
            description: t
        }) {
            this.hasLoadedIframe = !1;
            this.isLoadingIframe = !1;
            (e || t) && this.eventEmitter.trigger(Q.WIDGET_HIDDEN, {
                reason: e,
                description: t
            })
        }
        loadWidget(e = {}) {
            const {
                portalId: t
            } = this.embedScriptContext;
            if (this.isLoadingIframe) {
                this.devLogger.log("Cannot load the widget - The widget is already being loaded.");
                this.logError("load widget called while public widget request is pending")
            } else if (this.hasLoadedIframe) this.devLogger.log("Cannot load the widget - the widget has already loaded.");
            else {
                this.isLoadingIframe = !0;
                e.widgetOpen && this.setWidgetOpenCookie({
                    isOpen: !0
                });
                (0, A.fetchWidgetData)({
                    requestUrl: this.embedScriptContext.getInitialRequestUrl(),
                    portalId: t
                }, (0, K.handleTargetingAndDelay)(this.setWidgetData, this.loadIFrame, this.setWidgetNotLoaded), () => {
                    P.EVENTS.messagesInitialized({
                        messageWillRender: !1
                    })
                })
            }
        }
        start() {
            const {
                shouldRender: e
            } = (0, _.shouldRenderWidget)(this.embedScriptContext);
            if (e) {
                (0, b.setupExternalApi)({
                    debug: this.devLogger.debug,
                    on: (e, t) => {
                        this.eventEmitter.on(e, t);
                        this.apiUsageTracker.trackEventListener(e)
                    },
                    off: this.eventEmitter.off,
                    clear: e => {
                        this.extendedClearCookiesFunction(e);
                        this.apiUsageTracker.trackMethod("clear")
                    },
                    resetAndReloadWidget: this.resetAndReloadWidget,
                    widget: {
                        load: (...e) => {
                            this.loadWidget(...e);
                            this.apiUsageTracker.trackMethod("load")
                        },
                        remove: () => {
                            this.removeIframe();
                            this.apiUsageTracker.trackMethod("remove")
                        },
                        open: () => {
                            this.requestWidgetOpen();
                            this.apiUsageTracker.trackMethod("open")
                        },
                        close: () => {
                            this.requestWidgetClose();
                            this.apiUsageTracker.trackMethod("close")
                        },
                        refresh: (...e) => {
                            this.requestWidgetRefresh(...e);
                            this.apiUsageTracker.trackMethod("refresh")
                        },
                        status: () => {
                            this.apiUsageTracker.trackMethod("status");
                            return this.getStatus()
                        }
                    }
                });
                (0, T.flushOnReadyCallbacks)({
                    logger: this.devLogger,
                    trackCallback: this.apiUsageTracker.trackOnReady
                });
                (0, F.registerHashChangeListener)({
                    requestWidgetOpen: this.requestWidgetOpen,
                    isOpen: this.isOpen
                });
                (0, B.registerWindowResizeListener)({
                    resizeCallbackFn: this.handleWindowResize
                });
                (0, G.registerCookieListeners)({
                    postMessageToIframe: this.iframeMessage.post
                });
                (0, M.shouldLoadImmediately)() && this.loadWidget();
                this.postVisitorIdentificationAttributes()
            } else try {
                P.EVENTS.messagesInitialized({
                    messageWillRender: !1
                })
            } catch (e) {
                this.devLogger.log("widget load aborted")
            }
        }
        postVisitorIdentificationAttributes() {
            const {
                identificationEmail: e,
                identificationToken: t
            } = this.embedScriptContext;
            this.iframeMessage.post(r.VISITOR_IDENTIFICATION_ATTRIBUTES, {
                identificationEmail: e,
                identificationToken: t
            })
        }
        setFrameClass() {
            const e = document.getElementById(I.PARENT_ID);
            if (!e) return;
            const t = this.widgetData[N.WIDGET_LOCATION];
            (0, k.setClassInClassList)({
                widgetLocation: t,
                classList: e.classList
            })
        }
    }
    t.WidgetShell = ne
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getMobileState = a;
    t.isAnyMobile = l;
    t.isIOSMobile = u;
    t.isMobileSafari = d;
    t.isWindowsMobile = c;
    var n = s(i(5));
    const o = /WebKit/i;

    function r(e, t) {
        return e.test(t)
    }

    function a(e = window.navigator.userAgent) {
        let t = e,
            i = t.split("[FBAN");
        void 0 !== i[1] && (t = i[0]);
        i = t.split("Twitter");
        void 0 !== i[1] && (t = i[0]);
        const s = new n.default(t);
        s.other.webkit = r(o, t);
        s.safari = s.apple.device && s.other.webkit && !s.other.opera && !s.other.chrome;
        return s
    }

    function l() {
        const e = a();
        return e.any && !e.tablet
    }

    function d() {
        return a().safari
    }

    function c() {
        return a().windows.phone
    }

    function u() {
        return a().apple.phone
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var s = {};
    Object.defineProperty(t, "default", {
        enumerable: !0,
        get: function() {
            return n.default
        }
    });
    var n = r(i(6));
    Object.keys(n).forEach((function(e) {
        "default" !== e && "__esModule" !== e && (Object.prototype.hasOwnProperty.call(s, e) || e in t && t[e] === n[e] || Object.defineProperty(t, e, {
            enumerable: !0,
            get: function() {
                return n[e]
            }
        }))
    }));

    function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            i = new WeakMap;
        return (o = function(e) {
            return e ? i : t
        })(e)
    }

    function r(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var i = o(t);
        if (i && i.has(e)) return i.get(e);
        var s = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                a && (a.get || a.set) ? Object.defineProperty(s, r, a) : s[r] = e[r]
            }
        s.default = e;
        i && i.set(e, s);
        return s
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = I;
    var s = /iPhone/i,
        n = /iPod/i,
        o = /iPad/i,
        r = /\biOS-universal(?:.+)Mac\b/i,
        a = /\bAndroid(?:.+)Mobile\b/i,
        l = /Android/i,
        d = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
        c = /Silk/i,
        u = /Windows Phone/i,
        h = /\bWindows(?:.+)ARM\b/i,
        g = /BlackBerry/i,
        f = /BB10/i,
        p = /Opera Mini/i,
        m = /\b(CriOS|Chrome)(?:.+)Mobile/i,
        E = /Mobile(?:.+)Firefox\b/i,
        _ = function(e) {
            return void 0 !== e && "MacIntel" === e.platform && "number" == typeof e.maxTouchPoints && e.maxTouchPoints > 1 && "undefined" == typeof MSStream
        };

    function v(e) {
        return function(t) {
            return t.test(e)
        }
    }

    function I(e) {
        var t = {
            userAgent: "",
            platform: "",
            maxTouchPoints: 0
        };
        e || "undefined" == typeof navigator ? "string" == typeof e ? t.userAgent = e : e && e.userAgent && (t = {
            userAgent: e.userAgent,
            platform: e.platform,
            maxTouchPoints: e.maxTouchPoints || 0
        }) : t = {
            userAgent: navigator.userAgent,
            platform: navigator.platform,
            maxTouchPoints: navigator.maxTouchPoints || 0
        };
        var i = t.userAgent,
            I = i.split("[FBAN");
        void 0 !== I[1] && (i = I[0]);
        void 0 !== (I = i.split("Twitter"))[1] && (i = I[0]);
        var b = v(i),
            T = {
                apple: {
                    phone: b(s) && !b(u),
                    ipod: b(n),
                    tablet: !b(s) && (b(o) || _(t)) && !b(u),
                    universal: b(r),
                    device: (b(s) || b(n) || b(o) || b(r) || _(t)) && !b(u)
                },
                amazon: {
                    phone: b(d),
                    tablet: !b(d) && b(c),
                    device: b(d) || b(c)
                },
                android: {
                    phone: !b(u) && b(d) || !b(u) && b(a),
                    tablet: !b(u) && !b(d) && !b(a) && (b(c) || b(l)),
                    device: !b(u) && (b(d) || b(c) || b(a) || b(l)) || b(/\bokhttp\b/i)
                },
                windows: {
                    phone: b(u),
                    tablet: b(h),
                    device: b(u) || b(h)
                },
                other: {
                    blackberry: b(g),
                    blackberry10: b(f),
                    opera: b(p),
                    firefox: b(E),
                    chrome: b(m),
                    device: b(g) || b(f) || b(p) || b(E) || b(m)
                },
                any: !1,
                phone: !1,
                tablet: !1
            };
        T.any = T.apple.device || T.android.device || T.windows.device || T.other.device;
        T.phone = T.apple.phone || T.android.phone || T.windows.phone;
        T.tablet = T.apple.tablet || T.android.tablet || T.windows.tablet;
        return T
    }
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.STORE_MESSAGES_COOKIE = t.STOP_TRACK_SCROLL_PERCENTAGE = t.STOP_TRACK_EXIT_INTENT = t.START_TRACK_SCROLL_PERCENTAGE = t.START_TRACK_EXIT_INTENT = t.SHOW_PAGE_TITLE_NOTIFICATION = t.REQUEST_WIDGET = t.REFRESH_WIDGET_DATA = t.OPEN_CHANGE = t.IFRAME_RESIZE = t.I18N_LABELS = t.EXTERNAL_API_EVENT = t.CLOSED_WELCOME_MESSAGE = t.CLEAR_PAGE_TITLE_NOTIFICATION = t.API_REQUEST = void 0;
    t.SHOW_PAGE_TITLE_NOTIFICATION = "show-page-title-notification", t.CLEAR_PAGE_TITLE_NOTIFICATION = "clear-page-title-notification", t.IFRAME_RESIZE = "iframe-resize", t.OPEN_CHANGE = "open-change", t.CLOSED_WELCOME_MESSAGE = "closed-welcome-message", t.REQUEST_WIDGET = "request-widget", t.STORE_MESSAGES_COOKIE = "store-messages-cookie", t.EXTERNAL_API_EVENT = "external-api-event", t.START_TRACK_SCROLL_PERCENTAGE = "start-track-scroll-percentage", t.STOP_TRACK_SCROLL_PERCENTAGE = "stop-track-scroll-percentage", t.START_TRACK_EXIT_INTENT = "start-track-exit-intent", t.STOP_TRACK_EXIT_INTENT = "stop-track-exit-intent", t.API_REQUEST = "api-request", t.I18N_LABELS = "i18n-labels", t.REFRESH_WIDGET_DATA = "refresh-widget-data"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WIDGET_DATA = t.VISITOR_IDENTIFICATION_ATTRIBUTES = t.TRACK_WIDGET_DRAGGED = t.TRACK_API_USAGE = t.SCROLL_PERCENTAGE_CHANGE = t.REQUEST_OPEN = t.REQUEST_CLOSE = t.REFRESH_WIDGET_DATA = t.PERF_ATTRIBUTES = t.OPEN_TO_NEW_THREAD = t.HUBSPOT_UTK = t.GLOBAL_COOKIE_OPT_OUT = t.FIRST_VISITOR_SESSION = t.EXIT_INTENT = t.BROWSER_WINDOW_RESIZE = t.API_REQUEST_RESULT = void 0;
    t.WIDGET_DATA = "widget-data", t.HUBSPOT_UTK = "hubspot-utk", t.GLOBAL_COOKIE_OPT_OUT = "global-cookie-opt-out", t.FIRST_VISITOR_SESSION = "first-visitor-session", t.REFRESH_WIDGET_DATA = "refresh-widget-data", t.REQUEST_OPEN = "request-open", t.REQUEST_CLOSE = "request-close", t.BROWSER_WINDOW_RESIZE = "browser-window-resize", t.SCROLL_PERCENTAGE_CHANGE = "scroll-percentage-change", t.EXIT_INTENT = "exit-intent", t.PERF_ATTRIBUTES = "perf-attributes", t.TRACK_API_USAGE = "track-api-usage", t.TRACK_WIDGET_DRAGGED = "track-widget-dragged", t.OPEN_TO_NEW_THREAD = "open-to-new-thread", t.API_REQUEST_RESULT = "api-request-result", t.VISITOR_IDENTIFICATION_ATTRIBUTES = "visitor-identification-attributes"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PostMessageReceiver = void 0;
    var s = i(10),
        n = i(12);
    class o {
        constructor(e, {
            allowedOrigin: t,
            iframeUuid: i
        }) {
            (0, n.objectInvariant)(e);
            (0, s.stringInvariant)(t);
            (0, s.stringInvariant)(i);
            this.allowedOrigin = t;
            this.iframeUuid = i;
            this._handlers = e;
            this.handleMessage = this.handleMessage.bind(this);
            window.addEventListener("message", this.handleMessage)
        }
        isOriginAllowed(e) {
            return e === this.allowedOrigin
        }
        handleMessage(e) {
            const {
                data: t,
                origin: i,
                source: s
            } = e;
            if (this.isOriginAllowed(i)) try {
                const e = JSON.parse(t);
                if (e.uuid !== this.iframeUuid) return;
                const {
                    type: i,
                    data: n
                } = e, o = this._handlers[i];
                "function" == typeof o && o({
                    data: n,
                    source: s
                })
            } catch (e) {
                return
            }
        }
        register(e, t) {
            this._handlers[e] = t
        }
    }
    t.PostMessageReceiver = o
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.stringInvariant = void 0;
    var n = s(i(11));
    const o = (e, t = "") => (0, n.default)("string" == typeof e, "Expected %s to be a string, not a %s", t || e, typeof e);
    t.stringInvariant = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    const s = (e, t, ...i) => {
        if (e) return;
        let s;
        if (void 0 === t) s = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
        else {
            let e = 0;
            s = new Error("Invariant Violation: " + t.replace(/%s/g, () => i[e++]))
        }
        throw s
    };
    t.default = s;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.objectInvariant = void 0;
    var n = s(i(11));
    const o = (e, t = "") => (0, n.default)("object" == typeof e && null !== e, "Expected %s to be an object", t || e);
    t.objectInvariant = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var s = i(10),
        n = i(14);
    class o {
        constructor() {
            this.handleShow = this.handleShow.bind(this);
            this.handleClear = this.handleClear.bind(this);
            this.notificationIntervalId = 0;
            this.notificationMessageIsInPageTitle = !1;
            this.cachedOriginalDocumentTitle = ""
        }
        clearNotificationInterval() {
            clearInterval(this.notificationIntervalId)
        }
        notificationIntervalIsRunning() {
            return Boolean(this.notificationIntervalId)
        }
        start({
            title: e
        }) {
            if (!this.notificationIntervalIsRunning()) {
                this.cachedOriginalDocumentTitle = document.title;
                this.togglePageTitle({
                    notificationTitle: e
                });
                this.notificationIntervalId = setInterval(() => {
                    this.togglePageTitle({
                        notificationTitle: e
                    })
                }, n.NOTIFICATION_INTERVAL_MS)
            }
        }
        stop() {
            this.clearNotificationInterval();
            this.updatePageTitle(this.cachedOriginalDocumentTitle);
            this.notificationIntervalId = 0;
            this.notificationMessageIsInPageTitle = !1;
            this.cachedOriginalDocumentTitle = ""
        }
        togglePageTitle({
            notificationTitle: e
        }) {
            if (this.notificationMessageIsInPageTitle) {
                this.updatePageTitle(this.cachedOriginalDocumentTitle);
                this.notificationMessageIsInPageTitle = !1
            } else {
                this.updatePageTitle(e);
                this.notificationMessageIsInPageTitle = !0
            }
        }
        handleShow({
            data: e
        }) {
            this.start({
                title: e.title
            })
        }
        handleClear() {
            this.stop()
        }
        updatePageTitle(e) {
            (0, s.stringInvariant)(e);
            document.title = e
        }
    }
    t.default = o;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.NOTIFICATION_INTERVAL_MS = void 0;
    t.NOTIFICATION_INTERVAL_MS = 1250
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getWidgetDataResponseType = void 0;
    const s = "@type",
        n = e => null == e ? void 0 : e[s];
    t.getWidgetDataResponseType = n
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getCookie = r;
    t.getHostnameWithoutWww = a;
    t.setCookie = l;
    var n = s(i(17));
    let o = !1;

    function r(e) {
        let t = "";
        if (document.cookie && "" !== document.cookie) {
            const i = document.cookie.split(";");
            for (let s = 0; s < i.length; s++) {
                const n = i[s].trim();
                if (n.substring(0, e.length + 1) === e + "=") {
                    t = n.substring(e.length + 1);
                    break
                }
            }
        }
        return t
    }

    function a() {
        return window.location.hostname.replace(/^www\./, "")
    }

    function l(e, t, i = n.default.SIX_MONTHS) {
        const s = [`${e}=${t}`, "expires=" + new Date(Date.now() + i).toUTCString(), "domain=" + ("." + a()), "path=/", "SameSite=Lax"];
        if (window.location.protocol.indexOf("https") > -1) s.push("Secure");
        else if (!o) {
            console.warn("HubSpot Conversations: You are using conversations on a non-https site! Not using https puts your visitor's data at risk, please enforce using https.");
            o = !0
        }
        const r = s.join(";");
        document.cookie = r
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    const s = 864e5,
        n = {
            TWO_MINUTES: 12e4,
            THIRTY_MINUTES: 18e5,
            ONE_DAY: s,
            SIX_MONTHS: 30 * s * 6
        };
    t.default = n;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.cookies = t.cookieValues = void 0;
    t.cookies = {
        HUBSPOT: "hubspotutk",
        MESSAGES: "messagesUtk",
        IS_OPEN: "hs-messages-is-open",
        HIDE_WELCOME_MESSAGE: "hs-messages-hide-welcome-message",
        WIDGET_POSITION: "hs-messages-widget-position",
        HUBSPOT_API_CSRF: "hubspotapi-csrf",
        HSTC: "__hstc",
        HSSC: "__hssc",
        GLOBAL_COOKIE_OPT_OUT: "__hs_opt_out"
    }, t.cookieValues = {
        GLOBAL_COOKIE_OPT_OUT_YES: "yes",
        GLOBAL_COOKIE_OPT_OUT_NO: "no"
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.clearCookies = a;
    var s = i(18),
        n = i(20),
        o = i(1),
        r = i(21);

    function a(e) {
        (0, n.deleteCookie)(s.cookies.MESSAGES);
        (0, n.deleteCookie)(s.cookies.IS_OPEN);
        (0, n.deleteCookie)(s.cookies.HIDE_WELCOME_MESSAGE);
        (0, n.deleteCookie)(s.cookies.WIDGET_POSITION + "_right");
        (0, n.deleteCookie)(s.cookies.WIDGET_POSITION + "_left");
        if (null != e && e[r.RESET_WIDGET]) {
            window.hubspot_live_messages_running = !1;
            (0, o.startOnceReady)()
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.deleteCookie = n;
    var s = i(16);

    function n(e) {
        (0, s.setCookie)(e, "", -1)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.RESET_WIDGET = void 0;
    t.RESET_WIDGET = "resetWidget"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SHADOW_CONTAINER = t.MOBILE = t.INTERNAL = t.ALIGNED_RIGHT_CLASS = t.ALIGNED_LEFT_CLASS = t.ACTIVE = void 0;
    t.ACTIVE = "hs-messages-widget-open", t.MOBILE = "hs-messages-mobile", t.SHADOW_CONTAINER = "hs-shadow-container", t.INTERNAL = "internal", t.ALIGNED_LEFT_CLASS = "widget-align-left", t.ALIGNED_RIGHT_CLASS = "widget-align-right"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.V1 = t.HIDE_WIDGET = void 0;
    t.V1 = "V1", t.HIDE_WIDGET = "HIDE_WIDGET"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setMessagesUtk = o;
    var s = i(16),
        n = i(18);

    function o(e) {
        (0, s.setCookie)(n.cookies.MESSAGES, e)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isEmbeddedInProduct = c;
    const s = 53,
        n = 99535353,
        o = 100048175,
        r = /^(?:app|local)\.hubspot(?:qa)?\.com$/,
        a = /(?:pricing)\/[0-9]+/,
        l = /signup-hubspot/,
        d = "pricing";

    function c({
        portalId: e,
        hostname: t = window.location.hostname,
        pathname: i = window.location.pathname
    }) {
        const c = -1 !== i.indexOf(d) && !a.test(i),
            u = l.test(i);
        return !(!r.test(t) || c || u) && (-1 !== t.indexOf("qa") ? e === s || e === n || e === o : e === s)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldRenderWidget = void 0;
    var s = i(4),
        n = i(25),
        o = i(27),
        r = i(28);
    const a = ({
        portalId: e
    }) => {
        var t;
        const i = !!(0, o.getPortalIdFromPath)(window.location.pathname),
            a = (0, n.isEmbeddedInProduct)({
                portalId: e
            }) && !i,
            l = null === (t = window) || void 0 === t || null === (t = t.disabledHsPopups) || void 0 === t ? void 0 : t.includes("LIVE_CHAT");
        return (0, s.isWindowsMobile)() ? {
            shouldRender: !1,
            reason: "WINDOWS_PHONE"
        } : (0, r.isUsingUnsupportedFramework)() ? {
            shouldRender: !1,
            reason: "UNSUPPORTED_FRAMEWORK"
        } : a ? {
            shouldRender: !1,
            reason: "MISSING_PORTAL_ID"
        } : l ? {
            shouldRender: !1,
            reason: "IS_EMBEDDED_MEETINGS"
        } : {
            shouldRender: !0
        }
    };
    t.shouldRenderWidget = a
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPortalIdFromPath = n;
    const s = /^\/(?:[A-Za-z0-9-_]*)\/(\d+)(?:\/|$)/;

    function n(e) {
        try {
            return s.exec(e)[1]
        } catch (e) {
            return ""
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isUsingUnsupportedFramework = void 0;
    var s = i(29);
    const n = () => {
        const e = s.METHODS.filter(e => !!e).length;
        return Boolean(e)
    };
    t.isUsingUnsupportedFramework = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.METHODS = void 0;
    t.METHODS = [Object.prototype.toJSON, Array.prototype.toJSON, String.prototype.toJSON]
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldWidgetStartOpen = d;
    var s = i(31),
        n = i(16),
        o = i(32),
        r = i(18),
        a = i(37),
        l = i(38);

    function d() {
        const e = (0, o.shouldEmbedInline)();
        if (!e && (0, s.cookieIsSet)(r.cookies.IS_OPEN)) {
            const e = (0, n.getCookie)(r.cookies.IS_OPEN);
            return (0, l.stringToBoolean)(e)
        }
        return e || (0, a.urlHasHsChatHashLink)(window.location.href) || void 0
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.cookieIsSet = void 0;
    var s = i(16);
    const n = e => Boolean((0, s.getCookie)(e));
    t.cookieIsSet = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldLoadImmediately = t.shouldHideScrollToButton = t.shouldEmbedInline = t.shouldDisableInitialInputFocus = t.shouldDisableAttachment = t.shouldBeFullscreen = t.getInlineEmbedSelector = t.getIdentificationToken = t.getIdentificationEmail = t.getEnableWidgetCookieBanner = void 0;
    var s = i(33);
    const n = () => !!(0, s.getExternalApiSettings)().loadImmediately;
    t.shouldLoadImmediately = n;
    const o = () => !!(0, s.getExternalApiSettings)().isFullscreen;
    t.shouldBeFullscreen = o;
    const r = () => (0, s.getExternalApiSettings)().inlineEmbedSelector;
    t.getInlineEmbedSelector = r;
    const a = () => !!(0, s.getExternalApiSettings)().inlineEmbedSelector;
    t.shouldEmbedInline = a;
    const l = () => !!(0, s.getExternalApiSettings)().disableAttachment;
    t.shouldDisableAttachment = l;
    const d = () => !!(0, s.getExternalApiSettings)().disableInitialInputFocus;
    t.shouldDisableInitialInputFocus = d;
    const c = () => (0, s.getExternalApiSettings)().enableWidgetCookieBanner;
    t.getEnableWidgetCookieBanner = c;
    const u = () => (0, s.getExternalApiSettings)().identificationEmail;
    t.getIdentificationEmail = u;
    const h = () => (0, s.getExternalApiSettings)().identificationToken;
    t.getIdentificationToken = h;
    const g = () => (0, s.getExternalApiSettings)().hideScrollToButton;
    t.shouldHideScrollToButton = g
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.defaultSettings = void 0;
    t.getExternalApiSettings = d;
    var s = i(34),
        n = i(35),
        o = i(10),
        r = i(36);
    const a = t.defaultSettings = {
        loadImmediately: !0,
        isFullscreen: !1,
        inlineEmbedSelector: "",
        disableAttachment: !1,
        enableWidgetCookieBanner: !1,
        identificationEmail: "",
        identificationToken: "",
        disableInitialInputFocus: !1,
        hideScrollToButton: !0
    };

    function l(e) {
        return Object.fromEntries(Object.entries(e).filter(([e, t]) => void 0 !== t))
    }

    function d() {
        const e = window[s.SETTINGS_VARIABLE],
            t = Object.assign({}, a, l(e || {}));
        (0, n.booleanInvariant)(t.loadImmediately, "mergedSettings.loadImmediately");
        (0, n.booleanInvariant)(t.isFullscreen, "mergedSettings.isFullscreen");
        (0, n.booleanInvariant)(t.disableAttachment, "mergedSettings.disableAttachment");
        (0, n.booleanInvariant)(t.disableInitialInputFocus, "mergedSettings.disableInitialInputFocus");
        (0, r.oneOfListInvariant)(t.enableWidgetCookieBanner, "mergedSettings.enableWidgetCookieBanner", [!1, !0, s.ON_WIDGET_LOAD, s.ON_EXIT_INTENT]);
        (0, o.stringInvariant)(t.inlineEmbedSelector, "mergedSettings.inlineEmbedSelector");
        (0, o.stringInvariant)(t.identificationEmail, "mergedSettings.identificationEmail");
        (0, o.stringInvariant)(t.identificationToken, "mergedSettings.identificationToken");
        return t
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.SETTINGS_VARIABLE = t.ON_WIDGET_LOAD = t.ON_READY_CALLBACKS = t.ON_EXIT_INTENT = t.GLOBAL_VARIABLE = void 0;
    t.GLOBAL_VARIABLE = "HubSpotConversations", t.ON_READY_CALLBACKS = "hsConversationsOnReady", t.SETTINGS_VARIABLE = "hsConversationsSettings", t.ON_EXIT_INTENT = "ON_EXIT_INTENT", t.ON_WIDGET_LOAD = "ON_WIDGET_LOAD"
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.booleanInvariant = void 0;
    var n = s(i(11));
    const o = (e, t) => (0, n.default)(!0 === e || !1 === e, "Expected %s to be a boolean but received a %s", t || e, typeof e);
    t.booleanInvariant = o
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.oneOfListInvariant = o;
    var n = s(i(11));

    function o(e, t, i) {
        (0, n.default)(i.indexOf(e) > -1, `Expected %s to be one of ${i.toString()} but got %s`, t, e)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.urlHasHsChatHashLink = void 0;
    const s = new RegExp("#hs-chat-open", "i"),
        n = e => s.test(e);
    t.urlHasHsChatHashLink = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.stringToBoolean = void 0;
    const s = e => "true" === e;
    t.stringToBoolean = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PARENT_ID = t.INLINE_PARENT_ID = t.INLINE_IFRAME_ID = t.IFRAME_ID = void 0;
    t.PARENT_ID = "hubspot-messages-iframe-container", t.INLINE_PARENT_ID = "hubspot-conversations-inline-parent", t.INLINE_IFRAME_ID = "hubspot-conversations-inline-iframe", t.IFRAME_ID = "hubspot-conversations-iframe"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setupExternalApi = n;
    var s = i(34);

    function n(e) {
        window[s.GLOBAL_VARIABLE] = e
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.flushOnReadyCallbacks = n;
    var s = i(34);

    function n(e) {
        let {
            logger: t,
            trackCallback: i
        } = e;
        const n = window[s.ON_READY_CALLBACKS];
        if (Array.isArray(n)) {
            i && i();
            n.forEach(e => {
                try {
                    e()
                } catch (e) {
                    e instanceof Error && t.error(e.message)
                }
            })
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    class s {
        constructor({
            debug: e
        } = {}) {
            this._debug = Boolean(e);
            this.debug = this.debug.bind(this)
        }
        _isDebugMode() {
            return this._debug
        }
        debug(e) {
            this._debug = e
        }
        log(e) {
            this._isDebugMode() && console.log(`${s.LOGGING_PREFIX} ${e}`)
        }
        error(e) {
            this._isDebugMode() && console.error(`${s.LOGGING_PREFIX} ${e}`)
        }
    }
    s.LOGGING_PREFIX = "HubSpot Conversations log:";
    t.default = s;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var n = s(i(44)),
        o = i(10),
        r = i(45),
        a = i(46),
        l = i(47);
    class d {
        constructor() {
            this._eventEmitter = new n.default;
            this._namespacedEventType = this._namespacedEventType.bind(this);
            this.on = this.on.bind(this);
            this.off = this.off.bind(this);
            this.trigger = this.trigger.bind(this)
        }
        _namespacedEventType(e) {
            return `${a.EVENT_NAMESPACE}:${e}`
        }
        on(e, t) {
            (0, o.stringInvariant)(e);
            (0, r.functionInvariant)(t);
            if (!e.length) return;
            const i = this._namespacedEventType(e);
            this._eventEmitter.addListener(i, t)
        }
        off(e, t) {
            (0, o.stringInvariant)(e);
            (0, r.functionInvariant)(t);
            if (!e.length) return;
            const i = this._namespacedEventType(e);
            this._eventEmitter.removeListener(i, t)
        }
        trigger(e, t) {
            (0, l.eventTypeInvariant)(e);
            const i = this._namespacedEventType(e);
            this._eventEmitter.emit(i, t)
        }
    }
    t.default = d;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    var s, n;
    n = function() {
        return function e(t, i, n) {
            function o(a, l) {
                if (!i[a]) {
                    if (!t[a]) {
                        if (!l && "function" == typeof s && s) return s(a, !0);
                        if (r) return r(a, !0);
                        var d = new Error("Cannot find module '" + a + "'");
                        throw d.code = "MODULE_NOT_FOUND", d
                    }
                    var c = i[a] = {
                        exports: {}
                    };
                    t[a][0].call(c.exports, (function(e) {
                        return o(t[a][1][e] || e)
                    }), c, c.exports, e, t, i, n)
                }
                return i[a].exports
            }
            for (var r = "function" == typeof s && s, a = 0; a < n.length; a++) o(n[a]);
            return o
        }({
            1: [function(e, t, i) {
                var s = Object.prototype.hasOwnProperty,
                    n = "~";

                function o() {}

                function r(e, t, i) {
                    this.fn = e, this.context = t, this.once = i || !1
                }

                function a(e, t, i, s, o) {
                    if ("function" != typeof i) throw new TypeError("The listener must be a function");
                    var a = new r(i, s || e, o),
                        l = n ? n + t : t;
                    return e._events[l] ? e._events[l].fn ? e._events[l] = [e._events[l], a] : e._events[l].push(a) : (e._events[l] = a, e._eventsCount++), e
                }

                function l(e, t) {
                    0 == --e._eventsCount ? e._events = new o : delete e._events[t]
                }

                function d() {
                    this._events = new o, this._eventsCount = 0
                }
                Object.create && (o.prototype = Object.create(null), (new o).__proto__ || (n = !1)), d.prototype.eventNames = function() {
                    var e, t, i = [];
                    if (0 === this._eventsCount) return i;
                    for (t in e = this._events) s.call(e, t) && i.push(n ? t.slice(1) : t);
                    return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
                }, d.prototype.listeners = function(e) {
                    var t = n ? n + e : e,
                        i = this._events[t];
                    if (!i) return [];
                    if (i.fn) return [i.fn];
                    for (var s = 0, o = i.length, r = new Array(o); s < o; s++) r[s] = i[s].fn;
                    return r
                }, d.prototype.listenerCount = function(e) {
                    var t = n ? n + e : e,
                        i = this._events[t];
                    return i ? i.fn ? 1 : i.length : 0
                }, d.prototype.emit = function(e, t, i, s, o, r) {
                    var a = n ? n + e : e;
                    if (!this._events[a]) return !1;
                    var l, d, c = this._events[a],
                        u = arguments.length;
                    if (c.fn) {
                        switch (c.once && this.removeListener(e, c.fn, void 0, !0), u) {
                            case 1:
                                return c.fn.call(c.context), !0;
                            case 2:
                                return c.fn.call(c.context, t), !0;
                            case 3:
                                return c.fn.call(c.context, t, i), !0;
                            case 4:
                                return c.fn.call(c.context, t, i, s), !0;
                            case 5:
                                return c.fn.call(c.context, t, i, s, o), !0;
                            case 6:
                                return c.fn.call(c.context, t, i, s, o, r), !0
                        }
                        for (d = 1, l = new Array(u - 1); d < u; d++) l[d - 1] = arguments[d];
                        c.fn.apply(c.context, l)
                    } else {
                        var h, g = c.length;
                        for (d = 0; d < g; d++) switch (c[d].once && this.removeListener(e, c[d].fn, void 0, !0), u) {
                            case 1:
                                c[d].fn.call(c[d].context);
                                break;
                            case 2:
                                c[d].fn.call(c[d].context, t);
                                break;
                            case 3:
                                c[d].fn.call(c[d].context, t, i);
                                break;
                            case 4:
                                c[d].fn.call(c[d].context, t, i, s);
                                break;
                            default:
                                if (!l)
                                    for (h = 1, l = new Array(u - 1); h < u; h++) l[h - 1] = arguments[h];
                                c[d].fn.apply(c[d].context, l)
                        }
                    }
                    return !0
                }, d.prototype.on = function(e, t, i) {
                    return a(this, e, t, i, !1)
                }, d.prototype.once = function(e, t, i) {
                    return a(this, e, t, i, !0)
                }, d.prototype.removeListener = function(e, t, i, s) {
                    var o = n ? n + e : e;
                    if (!this._events[o]) return this;
                    if (!t) return l(this, o), this;
                    var r = this._events[o];
                    if (r.fn) r.fn !== t || s && !r.once || i && r.context !== i || l(this, o);
                    else {
                        for (var a = 0, d = [], c = r.length; a < c; a++)(r[a].fn !== t || s && !r[a].once || i && r[a].context !== i) && d.push(r[a]);
                        d.length ? this._events[o] = 1 === d.length ? d[0] : d : l(this, o)
                    }
                    return this
                }, d.prototype.removeAllListeners = function(e) {
                    var t;
                    return e ? (t = n ? n + e : e, this._events[t] && l(this, t)) : (this._events = new o, this._eventsCount = 0), this
                }, d.prototype.off = d.prototype.removeListener, d.prototype.addListener = d.prototype.on, d.prefixed = n, d.EventEmitter = d, void 0 !== t && (t.exports = d)
            }, {}]
        }, {}, [1])(1)
    }, e.exports = n()
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.functionInvariant = void 0;
    var n = s(i(11));
    const o = e => (0, n.default)("function" == typeof e && null !== e, "Expected %s to be a function", e);
    t.functionInvariant = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.EVENT_NAMESPACE = void 0;
    t.EVENT_NAMESPACE = "HubSpotConversations"
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.eventTypeInvariant = void 0;
    var n = s(i(11)),
        o = a(i(48));

    function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            i = new WeakMap;
        return (r = function(e) {
            return e ? i : t
        })(e)
    }

    function a(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var i = r(t);
        if (i && i.has(e)) return i.get(e);
        var s = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(s, o, a) : s[o] = e[o]
            }
        s.default = e;
        i && i.set(e, s);
        return s
    }
    const l = Object.values(o),
        d = e => (0, n.default)(-1 !== l.indexOf(e), "Expected a valid event type but received %s. Valid event types include %s.", e, l);
    t.eventTypeInvariant = d
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WIDGET_LOADED = t.WIDGET_HIDDEN = t.WIDGET_CLOSED = t.USER_SELECTED_THREAD = t.USER_INTERACTED_WITH_WIDGET = t.UNREAD_CONVERSATION_COUNT_CHANGED = t.QUICK_REPLY_BUTTON_CLICK = t.INPUT_STAGING = t.CONVERSATION_STARTED = t.CONVERSATION_CLOSED = t.CONTACT_ASSOCIATED = void 0;
    t.CONVERSATION_STARTED = "conversationStarted", t.CONVERSATION_CLOSED = "conversationClosed", t.UNREAD_CONVERSATION_COUNT_CHANGED = "unreadConversationCountChanged", t.INPUT_STAGING = "inputStaging", t.CONTACT_ASSOCIATED = "contactAssociated", t.USER_INTERACTED_WITH_WIDGET = "userInteractedWithWidget", t.QUICK_REPLY_BUTTON_CLICK = "quickReplyButtonClick", t.WIDGET_LOADED = "widgetLoaded", t.WIDGET_CLOSED = "widgetClosed", t.USER_SELECTED_THREAD = "userSelectedThread", t.WIDGET_HIDDEN = "widgetHidden"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.handleExternalApiEventMessage = void 0;
    var s = i(12),
        n = i(10);
    const o = ({
        data: e
    }, {
        eventEmitter: t
    }) => {
        (0, n.stringInvariant)(e.eventType);
        (0, s.objectInvariant)(e.payload);
        t.trigger(e.eventType, e.payload)
    };
    t.handleExternalApiEventMessage = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WIDGET_WILL_LOAD_CODES = t.EXPECTED_WIDGET_WILL_NOT_LOAD_CODES = void 0;
    t.fetchWidgetData = h;
    var s = i(25),
        n = i(51);
    const o = "X-HubSpot-Messages-Uri",
        r = 4,
        a = t.WIDGET_WILL_LOAD_CODES = [200, 304],
        l = t.EXPECTED_WIDGET_WILL_NOT_LOAD_CODES = [204, 404],
        d = e => a.indexOf(e) > -1,
        c = e => !d(e) && l.indexOf(e) < 0,
        u = () => {};

    function h({
        requestUrl: e,
        portalId: t
    }, i, a = u) {
        const l = new XMLHttpRequest;
        l.addEventListener("readystatechange", () => {
            if (l.readyState === r)
                if (d(l.status)) try {
                    const e = JSON.parse(l.responseText);
                    i(e)
                } catch (e) {
                    console.warn("Initial messages API response is invalid");
                    a()
                } else {
                    c(l.status) && console.warn("Initial messages API call failed");
                    a()
                }
        });
        l.open("GET", e);
        const h = "about:srcdoc" === window.location.href ? window.top.location.href : window.location.href;
        l.setRequestHeader(o, h);
        (0, s.isEmbeddedInProduct)({
            portalId: t
        }) && (0, n.addAuthToRequest)(l);
        l.send()
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.addCsrfHeader = t.addAuthToRequest = void 0;
    var s = i(16),
        n = i(18);
    const o = e => {
        e.setRequestHeader("X-HubSpot-CSRF-hubspotapi", (0, s.getCookie)(n.cookies.HUBSPOT_API_CSRF))
    };
    t.addCsrfHeader = o;
    const r = e => {
        o(e);
        e.withCredentials = !0
    };
    t.addAuthToRequest = r
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.EVENTS = void 0;
    t.triggerEvent = n;
    const s = "hubspot:messages:";

    function n(e, t) {
        let i;
        const n = `${s}${e}`;
        if ("function" == typeof window.Event) i = Object.assign(new Event(n), t);
        else {
            i = Object.assign(document.createEvent("Event"), t);
            i.initEvent(n, !0, !0)
        }
        window.dispatchEvent(i)
    }
    t.EVENTS = {
        messagesInitialized: ({
            messageWillRender: e,
            reason: t
        }) => {
            n("initialized", {
                messageWillRender: e,
                reason: t
            })
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.throttle = s;

    function s(e, t) {
        let i = !1,
            s = null;
        return (...n) => {
            if (i) s = () => {
                e(...n)
            };
            else {
                i = !0;
                e(...n);
                setTimeout(() => {
                    i = !1;
                    "function" == typeof s && s();
                    s = null
                }, t)
            }
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getIframeQueryParams = c;
    var s = i(16),
        n = i(4),
        o = i(25),
        r = i(55),
        a = i(30),
        l = i(32),
        d = i(56);

    function c({
        messagesUtk: e,
        hubspotUtk: t,
        portalId: i,
        iframeUuid: c,
        globalCookieOptOut: u,
        isFirstVisitorSession: h,
        hstc: g
    }) {
        const f = (0, n.isAnyMobile)(),
            p = (0, l.shouldEmbedInline)(),
            m = (0, a.shouldWidgetStartOpen)(),
            E = (0, l.shouldDisableInitialInputFocus)(),
            _ = p && E;
        !p && E && console.warn("hsConversationsSettings: the `disableInitialInputFocus` object is only enabled for use when an `inlineEmbedSelector` object is also set");
        const v = {
            uuid: c,
            mobile: f,
            mobileSafari: (0, n.isMobileSafari)(),
            hideWelcomeMessage: (0, r.shouldHideWelcomeMessage)(),
            hstc: g,
            domain: (0, s.getHostnameWithoutWww)(),
            inApp53: (0, o.isEmbeddedInProduct)({
                portalId: i
            }),
            messagesUtk: e,
            url: window.location.href,
            inline: p,
            isFullscreen: (0, l.shouldBeFullscreen)(),
            globalCookieOptOut: u,
            isFirstVisitorSession: h,
            isAttachmentDisabled: (0, l.shouldDisableAttachment)(),
            isInitialInputFocusDisabled: _,
            enableWidgetCookieBanner: (0, l.getEnableWidgetCookieBanner)(),
            isInCMS: (0, d.isInCMS)(),
            hideScrollToButton: (0, l.shouldHideScrollToButton)(),
            isIOSMobile: (0, n.isIOSMobile)()
        };
        void 0 !== m && (v.startOpen = m);
        t && (v.hubspotUtk = t);
        return v
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.shouldHideWelcomeMessage = o;
    var s = i(16),
        n = i(18);

    function o() {
        return !!(0, s.getCookie)(n.cookies.HIDE_WELCOME_MESSAGE) || !1
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isInCMS = void 0;
    const s = () => void 0 !== window.hsVars;
    t.isInCMS = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var s = i(58),
        n = i(59),
        o = i(60),
        r = i(7);
    class a {
        constructor({
            onScroll: e
        }) {
            this._onScroll = e;
            this._handleScroll = this._handleScroll.bind(this);
            this.add = this.add.bind(this);
            this.remove = this.remove.bind(this)
        }
        _handleScroll() {
            const e = (0, o.getPageHeight)() - (0, n.getViewportHeight)();
            if (0 === e) return;
            const t = 100 * (0, s.getBodyScrollTop)() / e;
            this._onScroll({
                scrollPercentage: t
            })
        }
        _add() {
            window.addEventListener("scroll", this._handleScroll, {
                capture: !0,
                passive: !0
            })
        }
        add() {
            this.remove();
            this._add()
        }
        remove() {
            window.removeEventListener("scroll", this._handleScroll, {
                capture: !0
            })
        }
        registerPostMessageReceivers(e) {
            e.register(r.START_TRACK_SCROLL_PERCENTAGE, this.add);
            e.register(r.STOP_TRACK_SCROLL_PERCENTAGE, this.remove)
        }
    }
    t.default = a;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getBodyScrollTop = void 0;
    const s = () => document.body.scrollTop || document.documentElement.scrollTop;
    t.getBodyScrollTop = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getViewportHeight = void 0;
    const s = () => Math.max(window.innerHeight || 0, document.documentElement.clientHeight);
    t.getViewportHeight = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPageHeight = void 0;
    const s = () => Math.max(document.body.offsetHeight, document.body.scrollHeight);
    t.getPageHeight = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    var s = i(7);
    class n {
        constructor({
            onExitIntent: e
        }) {
            this._onExitIntent = e;
            this._handleMouseOut = this._handleMouseOut.bind(this);
            this._isExitIntent = this._isExitIntent.bind(this);
            this.add = this.add.bind(this);
            this.remove = this.remove.bind(this)
        }
        _isExitIntent(e) {
            if (!e) return !1;
            const t = e.relatedTarget || e.toElement;
            return (!t || "HTML" === t.nodeName) && e.clientY < 100
        }
        _handleMouseOut(e) {
            this._isExitIntent(e) && this._onExitIntent()
        }
        _add() {
            window.document.addEventListener("mouseout", this._handleMouseOut)
        }
        add() {
            this.remove();
            this._add()
        }
        remove() {
            window.document.removeEventListener("mouseout", this._handleMouseOut)
        }
        addExitIntentTracker() {
            this.add()
        }
        removeExitIntentTracker() {
            this.remove()
        }
        registerPostMessageReceivers(e) {
            e.register(s.START_TRACK_EXIT_INTENT, this.add);
            e.register(s.STOP_TRACK_EXIT_INTENT, this.remove)
        }
    }
    t.default = n;
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.markEndPostDelay = n;
    t.markEndPreDelay = o;
    var s = i(63);

    function n() {
        try {
            performance.mark(s.END_MARK_POST_DELAY)
        } catch (e) {}
    }

    function o() {
        try {
            performance.mark(s.END_MARK_PRE_DELAY)
        } catch (e) {}
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.START_MARK_PRE_DELAY = t.START_MARK_POST_DELAY = t.EXECUTION_MEASUREMENT_PRE_DELAY = t.EXECUTION_MEASUREMENT_POST_DELAY = t.END_MARK_PRE_DELAY = t.END_MARK_POST_DELAY = void 0;
    t.START_MARK_PRE_DELAY = "embed-script-start-pre-delay", t.END_MARK_PRE_DELAY = "embed-script-end-pre-delay", t.START_MARK_POST_DELAY = "embed-script-start-post-delay", t.END_MARK_POST_DELAY = "embed-script-end-post-delay", t.EXECUTION_MEASUREMENT_POST_DELAY = "embed-script-load-time-post-delay", t.EXECUTION_MEASUREMENT_PRE_DELAY = "embed-script-load-time-pre-delay"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.setClassInClassList = void 0;
    var s = i(65),
        n = i(22);
    const o = {
            [s.LEFT_ALIGNED]: n.ALIGNED_LEFT_CLASS,
            [s.RIGHT_ALIGNED]: n.ALIGNED_RIGHT_CLASS
        },
        r = ({
            widgetLocation: e,
            classList: t
        }) => {
            const i = o[e];
            if (t.contains(i)) return;
            Object.keys(o).filter(t => t !== e).forEach(e => {
                t.remove(e)
            });
            t.add(i)
        };
    t.setClassInClassList = r
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.RIGHT_ALIGNED = t.LEFT_ALIGNED = void 0;
    t.LEFT_ALIGNED = "LEFT_ALIGNED", t.RIGHT_ALIGNED = "RIGHT_ALIGNED"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WIDGET_LOCATION = void 0;
    t.WIDGET_LOCATION = "widgetLocation"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.resetAndLaunchWidget = void 0;
    var s = i(19),
        n = i(1),
        o = i(68);
    const r = () => {
        (0, s.clearCookies)();
        window[o.USER_TOKEN_KEY] = "";
        window.hubspot_live_messages_running = !1;
        (0, n.startOnceReady)()
    };
    t.resetAndLaunchWidget = r
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.USER_TOKEN_KEY = void 0;
    t.USER_TOKEN_KEY = "__hsUserToken"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ApiUsageTracker = void 0;
    var s = i(8);
    class n {
        constructor({
            postMessageToIframe: e
        }) {
            if ("function" != typeof e) throw new TypeError("ApiUsageTracker: postMessageToIframe was not a function");
            this._postMessageToIframe = e;
            this.sendEventToTracker = this.sendEventToTracker.bind(this);
            this.trackSettingsUsed = this.trackSettingsUsed.bind(this);
            this.trackMethod = this.trackMethod.bind(this);
            this.trackEventListener = this.trackEventListener.bind(this);
            this.trackOnReady = this.trackOnReady.bind(this)
        }
        sendEventToTracker(e, t = {}) {
            this._postMessageToIframe(s.TRACK_API_USAGE, {
                eventName: e,
                properties: t
            })
        }
        trackSettingsUsed(e) {
            const t = {};
            !1 === e.loadImmediately && (t.loadImmediately = !0);
            e.inlineEmbedSelector && (t.inlineEmbedSelector = !0);
            e.enableWidgetCookieBanner && (t.enableWidgetCookieBanner = !0);
            e.disableAttachment && (t.disableAttachment = !0);
            e.disableInitialInputFocus && (t.disableInitialInputFocus = !0);
            Object.keys(t).length > 0 && this.sendEventToTracker("HubspotConversations-hsConversationsSettings-used", t)
        }
        trackMethod(e) {
            this.sendEventToTracker("HubspotConversations-api-method-used", {
                method: e
            })
        }
        trackEventListener(e) {
            this.sendEventToTracker("HubspotConversations-api-event-listener-registered", {
                event: e
            })
        }
        trackOnReady() {
            this.sendEventToTracker("HubspotConversations-hsConversationsOnReady-used", {
                method: "hsConversationsOnReady"
            })
        }
    }
    t.ApiUsageTracker = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.PostMessageApiClient = void 0;
    var s = i(71),
        n = i(8);
    class o {
        constructor(e) {
            this.makeApiRequest = ({
                data: e
            }) => {
                const {
                    type: t,
                    url: i,
                    data: o
                } = e, r = "/_hcms" + i;
                this.currentRequest && this.currentRequest.readyState !== s.DONE_STATE && this.abortCurrentApiRequest();
                this.currentRequest = (0, s.doRequest)(t)(r, o)((e, t) => {
                    t ? this.postMessage(n.API_REQUEST_RESULT, {
                        result: "failed",
                        data: t,
                        url: i
                    }) : this.postMessage(n.API_REQUEST_RESULT, {
                        result: "succeeded",
                        data: e,
                        url: i
                    })
                })
            };
            this.postMessage = e;
            this.currentRequest = null
        }
        abortCurrentApiRequest() {
            this.currentRequest && this.currentRequest.abort()
        }
    }
    t.PostMessageApiClient = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.put = t.post = t.get = t.doRequest = t.DONE_STATE = void 0;
    const s = t.DONE_STATE = 4,
        n = e => e >= 300,
        o = e => (t, i) => o => {
            const r = new XMLHttpRequest;
            r.addEventListener("readystatechange", () => {
                if (r.readyState === s) try {
                    const e = JSON.parse(r.responseText);
                    n(r.status) ? o(null, e) : o(e)
                } catch (e) {
                    o(null, "Invalid api response")
                }
            });
            r.open(e, t);
            r.send(i);
            return r
        };
    t.doRequest = o;
    t.get = o("GET"), t.post = o("POST"), t.put = o("PUT")
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.sendWidgetDataToIframe = void 0;
    var s = i(73),
        n = i(33),
        o = i(54),
        r = i(8);
    const a = ({
        source: e,
        widgetData: t,
        embedScriptContext: i,
        apiUsageTracker: a
    }) => {
        const {
            notificationAudio: l
        } = (0, n.getExternalApiSettings)();
        e.postMessage(JSON.stringify({
            type: r.WIDGET_DATA,
            data: Object.assign({}, t, (0, o.getIframeQueryParams)(i), {
                notificationAudio: l
            })
        }), "*");
        (0, s.throttleInProductInitialMessagePopups)(i);
        a.trackSettingsUsed((0, n.getExternalApiSettings)())
    };
    t.sendWidgetDataToIframe = a
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.throttleInProductInitialMessagePopups = d;
    var n = i(16),
        o = i(18),
        r = s(i(17)),
        a = i(25),
        l = i(55);

    function d({
        portalId: e
    }) {
        (0, a.isEmbeddedInProduct)({
            portalId: e
        }) && !(0, l.shouldHideWelcomeMessage)() && (0, n.setCookie)(o.cookies.HIDE_WELCOME_MESSAGE, !0, r.default.ONE_DAY)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.registerCookieListeners = void 0;
    var s = i(8),
        n = i(18),
        o = i(20);
    const r = ({
        postMessageToIframe: e
    }) => {
        const t = t => {
            const i = t.categories ? t.categories.functionality : t.allowed,
                r = i ? n.cookieValues.GLOBAL_COOKIE_OPT_OUT_NO : n.cookieValues.GLOBAL_COOKIE_OPT_OUT_YES;
            e(s.GLOBAL_COOKIE_OPT_OUT, {
                globalCookieOptOut: r
            });
            i || (0, o.deleteCookie)(n.cookies.MESSAGES)
        };
        window._hsq = window._hsq || [];
        window._hsq.push(["addPrivacyConsentListener", t]);
        window._hsq.push(["addUserTokenListener", t => e(s.HUBSPOT_UTK, {
            utk: t
        })])
    };
    t.registerCookieListeners = r
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.registerHashChangeListener = void 0;
    var s = i(37);
    const n = ({
        requestWidgetOpen: e,
        isOpen: t
    }) => {
        window.addEventListener("hashchange", () => {
            (0, s.urlHasHsChatHashLink)(window.location.href) && !t && e()
        })
    };
    t.registerHashChangeListener = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.registerWindowResizeListener = void 0;
    const s = ({
        resizeCallbackFn: e
    }) => {
        window.addEventListener("resize", e, {
            passive: !0
        })
    };
    t.registerWindowResizeListener = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.iframeMessagePool = t.createQueue = void 0;
    var s = i(78),
        n = i(79),
        o = i(80);
    const r = () => {
        const e = [];
        return {
            enqueue: t => e.unshift(t),
            dequeue: () => e.shift(),
            peek: () => e[0]
        }
    };
    t.createQueue = r;
    const a = ({
        iframeSrc: e
    }) => {
        const t = r();
        return {
            post: (i, r = {}) => {
                var a;
                const l = (0, s.getIframeFromDocumentQuery)(),
                    d = "about:blank" === (null == l || null === (a = l.contentDocument) || void 0 === a ? void 0 : a.URL);
                if (!l || d) t.enqueue({
                    type: i,
                    data: r
                });
                else {
                    (0, n.postMessageToIframe)({
                        iframe: l,
                        iframeSrc: e,
                        type: i,
                        data: r
                    });
                    (0, o.executeAllIframeMessageQueueEvents)({
                        iframe: l,
                        iframeSrc: e,
                        eventQueue: t
                    })
                }
            }
        }
    };
    t.iframeMessagePool = a
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getIframeFromDocumentQuery = void 0;
    var s = i(32),
        n = i(39);
    const o = () => {
        const e = (0, s.shouldEmbedInline)() ? (0, s.getInlineEmbedSelector)() : "#" + n.PARENT_ID;
        return document.querySelector(e + " iframe")
    };
    t.getIframeFromDocumentQuery = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.postMessageToIframe = void 0;
    const s = ({
        iframe: e,
        iframeSrc: t,
        type: i,
        data: s
    }) => {
        var n;
        let o;
        try {
            o = null == e ? void 0 : e.contentWindow
        } catch (t) {
            o = null == e ? void 0 : e.contentWindow
        }
        return null === (n = o) || void 0 === n ? void 0 : n.postMessage(JSON.stringify({
            type: i,
            data: s
        }), t)
    };
    t.postMessageToIframe = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.executeAllIframeMessageQueueEvents = void 0;
    var s = i(79);
    const n = ({
        iframe: e,
        iframeSrc: t,
        eventQueue: i
    }) => {
        do {
            const n = i.dequeue();
            if (n) {
                const {
                    type: i,
                    data: o
                } = n;
                (0, s.postMessageToIframe)({
                    iframe: e,
                    iframeSrc: t,
                    type: i,
                    data: o
                })
            }
        } while (i.peek() && 0 !== Object.keys(i.peek()).length)
    };
    t.executeAllIframeMessageQueueEvents = n
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hideWelcomeMessage = void 0;
    var n = i(18),
        o = i(16),
        r = s(i(17));
    const a = () => {
        (0, o.setCookie)(n.cookies.HIDE_WELCOME_MESSAGE, !0, r.default.THIRTY_MINUTES)
    };
    t.hideWelcomeMessage = a
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.resizeWidgetIframe = void 0;
    var s = i(39);
    const n = ({
        height: e,
        width: t
    }) => {
        const i = document.getElementById(s.PARENT_ID);
        if (i && t && e) {
            i.style.width = t + "px";
            i.style.height = e + "px"
        }
    };
    t.resizeWidgetIframe = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.handleTargetingAndDelay = void 0;
    var s = i(4),
        n = i(15),
        o = i(23),
        r = i(84),
        a = i(52),
        l = i(62),
        d = i(85);
    const c = (e, t, i) => c => {
        const u = !((0, n.getWidgetDataResponseType)(c) === o.HIDE_WIDGET) && !!c.sessionId;
        if (u) {
            const {
                shouldDelayLoadingIframe: i,
                timeDelay: n
            } = (0, r.getDelayLoadingWidgetIframe)(c, (0, s.isAnyMobile)());
            (0, l.markEndPreDelay)();
            if (i) setTimeout(() => {
                e(c);
                (0, d.markStartPostDelay)();
                t()
            }, n);
            else {
                e(c);
                (0, d.markStartPostDelay)();
                t()
            }
        } else {
            const {
                description: e,
                reason: t
            } = c.metadata || {};
            i({
                description: e,
                reason: t
            })
        }
        a.EVENTS.messagesInitialized({
            messageWillRender: u
        })
    };
    t.handleTargetingAndDelay = c
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getDelayLoadingWidgetIframe = void 0;
    const s = (e, t) => {
        const {
            message: i
        } = e, {
            popOpenWelcomeMessage: s,
            popOpenWidget: n,
            popMessageOnSmallScreens: o,
            clientTriggers: r
        } = i, {
            displayOnTimeDelay: a
        } = r, {
            enabled: l,
            timeDelaySeconds: d
        } = a, c = 1e3 * d;
        return t ? {
            shouldDelayLoadingIframe: !o && l && !window.ONLY_53_DISPLAY_LAUNCHER_ON_MOBILE,
            timeDelay: c
        } : {
            shouldDelayLoadingIframe: !n && !s && l,
            timeDelay: c
        }
    };
    t.getDelayLoadingWidgetIframe = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.markStartPostDelay = o;
    t.markStartPreDelay = n;
    var s = i(63);

    function n() {
        try {
            performance.mark(s.START_MARK_PRE_DELAY)
        } catch (e) {}
    }

    function o() {
        try {
            performance.mark(s.START_MARK_POST_DELAY)
        } catch (e) {}
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getGlobalCookieOptOut = o;
    var s = i(16),
        n = i(18);

    function o() {
        return (0, s.getCookie)(n.cookies.GLOBAL_COOKIE_OPT_OUT)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ON_WIDGET_LOAD = t.ON_EXIT_INTENT = t.NEVER = void 0;
    t.NEVER = "NEVER", t.ON_WIDGET_LOAD = "ON_WIDGET_LOAD", t.ON_EXIT_INTENT = "ON_EXIT_INTENT"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.preloadFont = void 0;
    const s = e => e.replace(/ +/g, "_"),
        n = e => `https://cdn1.hubspot.net/googlefonts/fonts/${s(e)}/regular.woff2`,
        o = e => {
            const t = document.createElement("link");
            t.id = "live-chat-font-preload";
            t.rel = "preload";
            t.href = n(e);
            t.as = "font";
            t.type = "font/woff2";
            t.crossOrigin = "anonymous";
            document.head.appendChild(t)
        };
    t.preloadFont = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isSafari = void 0;
    var s;
    const n = null === (s = window) || void 0 === s || null === (s = s.navigator) || void 0 === s || null === (s = s.userAgent) || void 0 === s ? void 0 : s.toLowerCase(),
        o = () => (null == n ? void 0 : n.includes("safari/")) && !(null != n && n.includes("chrome/")) && !(null != n && n.includes("edge/"));
    t.isSafari = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.WEB_FONTS = t.SYSTEM_FONTS = void 0;
    t.WEB_FONTS = "Web Fonts", t.SYSTEM_FONTS = "System Fonts"
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.loadWidgetCss = o;
    var n = s(i(92));

    function o(e) {
        const {
            hsConversationsSettings: t
        } = window;
        if (null != t && t.avoidInlineStyles) {
            const t = e.createElement("link");
            t.setAttribute("rel", "stylesheet");
            t.setAttribute("type", "text/css");
            t.setAttribute("href", n.default.replace(".sass", ".css"));
            e.head.appendChild(t);
            return
        }
        const s = i(93),
            o = e.createElement("style");
        o.setAttribute("type", "text/css");
        const r = document.createTextNode(s);
        o.appendChild(r);
        e.head.appendChild(o)
    }
}, function(e, t) {
    e.exports = "//static.hsappstatic.net/conversations-embed/static-1.18938/sass/messagesWidgetShell.sass"
}, function(e, t) {
    e.exports = 'html.hs-messages-widget-open.hs-messages-mobile,html.hs-messages-widget-open.hs-messages-mobile body{overflow:hidden!important;position:relative!important}html.hs-messages-widget-open.hs-messages-mobile body{height:100%!important;margin:0!important}#hubspot-messages-iframe-container{display:initial!important;z-index:2147483647;position:fixed!important;bottom:0!important}#hubspot-messages-iframe-container.widget-align-left{left:0!important}#hubspot-messages-iframe-container.widget-align-right{right:0!important}#hubspot-messages-iframe-container.internal{z-index:1016}#hubspot-messages-iframe-container.internal iframe{min-width:108px}#hubspot-messages-iframe-container .hs-shadow-container{display:initial!important;z-index:-1;position:absolute;width:0;height:0;bottom:0;content:""}#hubspot-messages-iframe-container .hs-shadow-container.internal{display:none!important}#hubspot-messages-iframe-container .hs-shadow-container.active{width:400px;height:400px}#hubspot-messages-iframe-container iframe{display:initial!important;width:100%!important;height:100%!important;border:none!important;position:absolute!important;bottom:0!important;right:0!important;background:transparent!important}.hs-drag-handle{position:absolute;bottom:16px;cursor:grab;height:60px;display:none;align-items:center}.hs-drag-handle--right{right:76px}.hs-drag-handle--left{left:76px}.hs-drag-overlay{position:absolute;top:0;left:0;right:0;bottom:0;user-select:none;z-index:999;display:none}'
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.createEmbedScriptContext = d;
    var n = i(95),
        o = i(96),
        r = i(103),
        a = s(i(104)),
        l = i(32);

    function d() {
        var e;
        const {
            messagesEnv: t,
            portalId: i,
            messagesHublet: s
        } = (0, r.getScriptEnvParams)();
        let d = !1;
        try {
            d = localStorage && "true" === localStorage["live-chat-local-toggle"]
        } catch (e) {}
        const c = (null === (e = window) || void 0 === e || null === (e = e.messagesConfig) || void 0 === e ? void 0 : e.iFrameDomain) || "",
            u = (0, n.getUuid)(),
            h = encodeURIComponent(document.referrer),
            {
                messagesUtk: g,
                hubspotUtk: f,
                hstc: p,
                hssc: m,
                globalCookieOptOut: E,
                isFirstVisitorSession: _
            } = (0, o.prepareVisitorIdentifiers)();
        return new a.default({
            messagesHublet: s,
            globalCookieOptOut: E,
            hubspotUtk: f,
            hstc: p,
            hssc: m,
            iFrameDomainOverride: c,
            iframeUuid: u,
            isFirstVisitorSession: _,
            messagesEnv: t,
            messagesUtk: g,
            referrer: h,
            portalId: i,
            useLocalBuild: d,
            identificationEmail: (0, l.getIdentificationEmail)(),
            identificationToken: (0, l.getIdentificationToken)()
        })
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getUuid = o;

    function s() {
        let e = (new Date).getTime();
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, t => {
            const i = (e + 16 * Math.random()) % 16 | 0;
            e = Math.floor(e / 16);
            return ("x" === t ? i : 3 & i | 8).toString(16)
        })
    }

    function n() {
        const e = window.crypto || window.msCrypto,
            t = new Uint16Array(8);
        e.getRandomValues(t);
        const i = e => {
            let t = e.toString(16);
            for (; t.length < 4;) t = "0" + t;
            return t
        };
        return i(t[0]) + i(t[1]) + i(t[2]) + i(t[3]) + i(t[4]) + i(t[5]) + i(t[6]) + i(t[7])
    }

    function o() {
        var e;
        const t = window.crypto || window.msCrypto;
        return null == t || !t.getRandomValues || null !== (e = window) && void 0 !== e && e.Uint16Array ? s() : n()
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.prepareVisitorIdentifiers = void 0;
    var s = i(97),
        n = i(98),
        o = i(100),
        r = i(86),
        a = i(101),
        l = i(102),
        d = i(24);
    const c = () => {
        const e = (0, n.getMessagesUtkFromCookie)();
        e && (0, d.setMessagesUtk)(e);
        const t = (0, o.getHubSpotUtkFromCookie)(),
            i = (0, a.getHstcFromCookie)(),
            c = (0, l.getHsscFromCookie)(),
            u = (0, r.getGlobalCookieOptOut)(),
            {
                messagesUtk: h,
                isFirstVisitorSession: g
            } = (0, s.chooseMessagesUtk)({
                existingMessagesUtk: e
            });
        return {
            messagesUtk: h,
            hubspotUtk: t,
            hstc: i,
            hssc: c,
            globalCookieOptOut: u,
            isFirstVisitorSession: g
        }
    };
    t.prepareVisitorIdentifiers = c
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.chooseMessagesUtk = n;
    var s = i(95);

    function n({
        existingMessagesUtk: e
    } = {}) {
        let t, i = !1;
        if (e) t = e;
        else {
            i = !0;
            t = (0, s.getUuid)()
        }
        return {
            messagesUtk: t,
            isFirstVisitorSession: i
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getMessagesUtkFromCookie = r;
    var s = i(16),
        n = i(99),
        o = i(18);

    function r() {
        const e = (0, s.getCookie)(o.cookies.MESSAGES);
        return (0, n.isUtk)(e) ? e : void 0
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.UTK_REGEX = void 0;
    t.isUtk = n;
    const s = t.UTK_REGEX = /[a-zA-Z\d]{32}/;

    function n(e) {
        return s.test(e)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHubSpotUtkFromCookie = o;
    var s = i(18),
        n = i(16);

    function o() {
        return (0, n.getCookie)(s.cookies.HUBSPOT)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHstcFromCookie = o;
    var s = i(18),
        n = i(16);

    function o() {
        return (0, n.getCookie)(s.cookies.HSTC)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getHsscFromCookie = o;
    var s = i(18),
        n = i(16);

    function o() {
        return (0, n.getCookie)(s.cookies.HSSC)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPortalId = t.getMessagesHublet = t.getMessagesEnv = t.getIsLocal = void 0;
    t.getScriptEnvParams = a;
    const s = () => {
        const e = document.getElementById("hubspot-messages-loader");
        return parseInt(e.getAttribute("data-hsjs-portal"), 10)
    };
    t.getPortalId = s;
    const n = () => document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-env");
    t.getMessagesEnv = n;
    const o = () => document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-hublet");
    t.getMessagesHublet = o;
    const r = () => "true" === document.getElementById("hubspot-messages-loader").getAttribute("data-hsjs-local");
    t.getIsLocal = r;

    function a() {
        return {
            ungatedFor: document.getElementById("hubspot-messages-loader").getAttribute("ungated-for"),
            portalId: s(),
            messagesEnv: n(),
            messagesHublet: o(),
            isLocal: r()
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = t.EmbedScriptContext = void 0;
    var s = i(105),
        n = i(10),
        o = i(25),
        r = i(106),
        a = i(115),
        l = i(54),
        d = i(56),
        c = i(116),
        u = i(32),
        h = i(120),
        g = i(107),
        f = i(111);
    class p {
        constructor(e) {
            const {
                globalCookieOptOut: t,
                hubspotUtk: i,
                hstc: o,
                hssc: r,
                iFrameDomainOverride: a,
                iframeUuid: l,
                isFirstVisitorSession: d,
                messagesEnv: c,
                messagesUtk: u,
                referrer: h,
                portalId: g,
                useLocalBuild: p,
                identificationEmail: m,
                identificationToken: E,
                messagesHublet: _
            } = e;
            (0, n.stringInvariant)(l, "iframeUuid");
            (0, n.stringInvariant)(c, "messagesEnv");
            (0, n.stringInvariant)(u, "messagesUtk");
            (0, s.numberInvariant)(g, "portalId");
            this.globalCookieOptOut = t;
            this.hubspotUtk = i;
            this.hstc = o;
            this.hssc = r;
            this.iFrameDomainOverride = a;
            this.iframeUuid = l;
            this.isFirstVisitorSession = d;
            this.messagesEnv = c;
            this.messagesUtk = u;
            this.referrer = h;
            this.portalId = g;
            this.useLocalBuild = p;
            this.identificationEmail = m;
            this.identificationToken = E;
            this.messagesHublet = _ || f.na1;
            this.getIFrameDomain = this.getIFrameDomain.bind(this);
            this.getIFrameSrc = this.getIFrameSrc.bind(this);
            this.getInitialRequestUrl = this.getInitialRequestUrl.bind(this)
        }
        getIFrameDomain() {
            return this.iFrameDomainOverride ? this.iFrameDomainOverride : (0, g.getFullUrl)(this.useLocalBuild ? "local" : "app", {
                envOverride: this.messagesEnv,
                hubletOverride: this.messagesHublet
            })
        }
        getIFrameSrc() {
            const e = (0, a.serializeQueryParameters)((0, l.getIframeQueryParams)({
                messagesUtk: this.messagesUtk,
                hubspotUtk: this.hubspotUtk,
                portalId: this.portalId,
                iframeUuid: this.iframeUuid,
                globalCookieOptOut: this.globalCookieOptOut,
                isFirstVisitorSession: this.isFirstVisitorSession,
                hstc: this.hstc
            }));
            return `${this.getIFrameDomain()}/conversations-visitor/${this.portalId}/threads/utk/${this.messagesUtk}?${e}`
        }
        getEncodedIdentificationEmail() {
            let e = this.identificationEmail;
            e.includes("@") || (e = decodeURIComponent(e));
            return encodeURIComponent(e)
        }
        getInitialRequestUrl() {
            if ((0, d.isInCMS)()) return (0, r.getCMSRequestUrl)({
                messagesUtk: this.messagesUtk,
                hubspotUtk: this.hubspotUtk,
                portalId: this.portalId,
                referrer: this.referrer,
                hstc: this.hstc,
                hssc: this.hssc,
                email: this.identificationEmail && this.getEncodedIdentificationEmail(),
                identificationToken: this.identificationToken
            });
            if ((0, o.isEmbeddedInProduct)({
                    portalId: this.portalId
                })) return (0, r.getInternalRequestUrl)({
                messagesHublet: this.messagesHublet,
                messagesEnv: this.messagesEnv,
                messagesUtk: this.messagesUtk,
                portalId: this.portalId
            });
            return ((0, h.isInSDK)() ? r.getPublicRequestUrlForMobileSDK : r.getPublicRequestUrl)({
                messagesHublet: this.messagesHublet,
                messagesEnv: this.messagesEnv,
                messagesUtk: this.messagesUtk,
                hubspotUtk: this.hubspotUtk,
                portalId: this.portalId,
                referrer: this.referrer,
                hstc: this.hstc,
                hssc: this.hssc,
                email: this.identificationEmail && this.getEncodedIdentificationEmail(),
                identificationToken: this.identificationToken
            })
        }
        getPerfAttributes() {
            const e = (0, c.getPerfAttributes)({
                portalId: this.portalId,
                messagesEnv: this.messagesEnv
            });
            if ((0, u.shouldLoadImmediately)() && e) return e
        }
    }
    t.EmbedScriptContext = p;
    t.default = p
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.numberInvariant = void 0;
    var n = s(i(11));
    const o = (e, t = "") => (0, n.default)("number" == typeof e, "Expected %s to be a number, not a %s", t || e, typeof e);
    t.numberInvariant = o
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getCMSRequestUrl = c;
    t.getInternalRequestUrl = l;
    t.getPublicRequestUrl = u;
    t.getPublicRequestUrlForMobileSDK = h;
    var s = i(107),
        n = i(113),
        o = i(114),
        r = i(27),
        a = i(4);

    function l({
        messagesEnv: e,
        portalId: t,
        messagesUtk: i,
        messagesHublet: n
    }) {
        const o = (0, r.getPortalIdFromPath)(window.location.pathname);
        return `${(0,s.getFullUrl)("api",{envOverride:e,hubletOverride:n})}/livechat/v1/message/public/hubspot-app?portalId=${o}&mobile=${(0,a.isAnyMobile)()}&embeddedPortalId=${t}&traceId=${i}`
    }

    function d({
        messagesUtk: e,
        hubspotUtk: t,
        portalId: i,
        referrer: s,
        hstc: o,
        hssc: r,
        email: l,
        identificationToken: d
    }) {
        let c = `?portalId=${i}&${n.bender.project}=${n.bender.depVersions[n.bender.project]}&mobile=${(0,a.isAnyMobile)()}`;
        e && (c = `${c}&messagesUtk=${e}&traceId=${e}`);
        t && (c = `${c}&hubspotUtk=${t}`);
        o && (c = `${c}&__hstc=${o}`);
        r && (c = `${c}&__hssc=${r}`);
        s && (c = `${c}&referrer=${s}`);
        d && (c = `${c}&identificationToken=${d}`);
        l && (c = `${c}&email=${l}`);
        return c
    }

    function c({
        messagesUtk: e,
        hubspotUtk: t,
        portalId: i,
        referrer: s,
        hstc: n,
        hssc: o,
        email: r,
        identificationToken: a
    }) {
        return "/_hcms/livechat/widget" + d({
            messagesUtk: e,
            hubspotUtk: t,
            portalId: i,
            referrer: s,
            hstc: n,
            hssc: o,
            email: r,
            identificationToken: a
        })
    }

    function u({
        messagesHublet: e,
        messagesEnv: t,
        messagesUtk: i,
        hubspotUtk: n,
        portalId: o,
        referrer: r,
        hstc: a,
        hssc: l,
        email: c,
        identificationToken: u
    }) {
        return `${(0,s.getFullUrl)("api",{envOverride:t,hubletOverride:e})}/livechat-public/v1/message/public${d({messagesUtk:i,hubspotUtk:n,portalId:o,referrer:r,hstc:a,hssc:l,email:c,identificationToken:u})}`
    }

    function h({
        messagesHublet: e,
        messagesEnv: t,
        messagesUtk: i,
        hubspotUtk: n,
        portalId: r,
        referrer: a,
        hstc: l,
        hssc: c,
        email: u,
        identificationToken: h
    }) {
        return `${(0,s.getFullUrl)("api",{envOverride:t,hubletOverride:e})}/livechat-public/v1/message/public/mobile${d({messagesUtk:i,hubspotUtk:n,portalId:r,referrer:a,hstc:l,hssc:c,email:u,identificationToken:h})}&chatflow=${(0,o.getChatflowTagFromQueryParams)()}`
    }
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getFullUrl = r;
    t.getFullUrlWithCurrentSubDomain = a;
    var n = s(i(108)),
        o = i(109);

    function r(e, t) {
        return `https://${(0,o.getSubDomain)(e,t)}.${(0,o.getDomain)(t)}.${(0,o.getTld)(t)}${(0,o.getPathPrefix)(e)}`
    }

    function a() {
        return r(n.default.deployed() ? "app" : "local")
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.default = void 0;
    const s = ["api", "local", "app", "private", "platform", "tools", "meetings"],
        n = ["hubspotstarter", "hubspotfree", "hubspotemail"],
        o = ["growth"],
        r = {
            com: ["hubspot", "hubteam", "grader", "getsignals", "getsidekick", "gettally", "hubspotemail", "customer-hub", "hubspotservicehub", "hubspotquote", "hubspotdocuments"].join("|"),
            net: n.join("|"),
            org: o.join("|")
        },
        a = function e(t) {
            const i = new RegExp(`^(?!local|test|selenium)(.*\\.)?(${Object.entries(r).map(([e,t])=>`(?:${t})(qa)?\\.${e}`).join("|")}|(?:connect)\\.com|(?:connect)(qa)\\.co|wthubspot\\.(com|de|es|fr|jp))$`).test(t.hostname),
                n = new RegExp(Object.entries(r).map(([e, t]) => `(?:${t})qa\\.${e}`).join("|") + "|(?:connect)qa\\.co|wthubspot\\.(com|de|es|fr|jp)|hsqa-sales(?:crm)?-sub\\.com|(?:hubspotstarter|hubspotfree|hubspotemail)(qa)(?:-.*)\\.net|(?:hubspotemail)(qa)(?:-.*)\\.com"),
                o = [new RegExp(`^(?:${s.join("|")})-(.*).(?:hubspot|hubteam)(?:qa)?.com`), new RegExp("^(.*).(?:hubspotquote)(?:qa)?.com"), new RegExp("^app-(.*).(?:hubspotdocuments)(?:qa)?.com"), new RegExp("^(?:[0-9]+).(.*).hs(?:qa)?-sales(?:crm)?-sub.com"), new RegExp("^hs-(?:[0-9]+).s.(?:hubspotfree|hubspotstarter|hubspotemail)(?:qa)?-(.*).net"), new RegExp("^hs-(?:[0-9]+).s.(?:hubspotemail)(?:qa)?-(.*).com"), new RegExp("^t.sidekickopen(?:\\d)+-([a-z]+[0-9]).com")],
                a = "ENV",
                l = "Enviro error: the default argument for .get and .getShort is no longer supported",
                d = e => {
                    let t = window[e];
                    if (null == t) try {
                        t = window.sessionStorage.getItem(e)
                    } catch (e) {}
                    if (null == t) try {
                        t = window.localStorage.getItem(e)
                    } catch (e) {}
                    return t
                },
                c = () => {
                    const e = d(a);
                    return e || (n.test(t.host) ? "qa" : "prod")
                },
                u = (e, t) => {
                    window[e] = t;
                    return t
                },
                h = {
                    prod: "production",
                    qa: "development"
                },
                g = e => {
                    if ("string" == typeof e) {
                        const t = e.toLowerCase();
                        return h[t] || t
                    }
                    return e
                },
                f = e => {
                    e = "string" == typeof e ? e.toLowerCase() : void 0;
                    return Object.keys(h).find(t => e === h[t]) || e
                },
                p = (e, t) => {
                    if (null != t) throw new Error(l);
                    let i = null;
                    if (e) {
                        const t = e.split(".").reverse();
                        for (let e = 0; e < t.length; e++) {
                            const s = t[e];
                            i = d(s.toUpperCase() + "_ENV");
                            if (i) break
                        }
                    }
                    if (null == i) {
                        const e = c();
                        i = null != e ? e : "qa"
                    }
                    return g(i)
                },
                m = (e, t) => {
                    if (null != t) throw new Error(l);
                    return f(p(e))
                },
                E = m,
                _ = e => "prod" === E(e),
                v = e => "qa" === E(e),
                I = () => {
                    const e = d("HUBLET");
                    if (e) return e;
                    for (const e of o)
                        if (e.test(t.hostname)) return e.exec(t.hostname)[1];
                    return "na1"
                };

            function b({
                isNa1: e,
                isNonNa1: t
            }, i) {
                i || (i = I());
                return "na1" === i ? "function" == typeof e ? e(i) : void 0 : "function" == typeof t ? t(i) : void 0
            }
            return {
                createEnviro: e,
                debug: (e, t = !1) => {
                    let i;
                    "string" == typeof e && (i = d(e.toUpperCase() + "_DEBUG"));
                    null == i && (i = d("DEBUG"));
                    return null == i ? t : i
                },
                denormalize: f,
                deployed: e => {
                    let t;
                    "string" == typeof e && (t = d(e.toUpperCase() + "_DEPLOYED"));
                    null == t && (t = d("DEPLOYED"));
                    return null == t ? i : !!t
                },
                enabled: (e, t = !1) => {
                    let i = d(e.toUpperCase() + "_ENABLED");
                    null == i && (i = JSON.stringify(t));
                    return "true" === ("" + i).toLowerCase()
                },
                get: p,
                getHublet: I,
                getInternal: m,
                getShort: E,
                isProd: _,
                isQa: v,
                ifHublet: b,
                normalize: g,
                set: function(e, t) {
                    if (1 === arguments.length) {
                        t = e;
                        e = a
                    }
                    return u(e, t)
                },
                setDebug: (e, t = !0) => {
                    if ("string" == typeof e) try {
                        t ? localStorage.setItem(e.toUpperCase() + "_DEBUG", JSON.stringify(!0)) : localStorage.removeItem(e.toUpperCase() + "_DEBUG")
                    } catch (i) {
                        u(e.toUpperCase() + "_DEBUG", t || void 0)
                    } else {
                        t = null == e || e;
                        try {
                            t ? localStorage.setItem("DEBUG", JSON.stringify(t)) : localStorage.removeItem("DEBUG")
                        } catch (e) {
                            u("DEBUG", t || void 0)
                        }
                    }
                }
            }
        };
    t.default = a(document.location);
    e.exports = t.default
}, function(e, t, i) {
    "use strict";
    var s = i(2);
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getDomain = h;
    t.getDomainPrefix = f;
    t.getEnvPostfix = g;
    t.getHubletDomainPostfix = p;
    t.getHubletPostfix = c;
    t.getPathPrefix = E;
    t.getSubDomain = u;
    t.getTld = m;
    var n = s(i(108)),
        o = a(i(110));

    function r(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            i = new WeakMap;
        return (r = function(e) {
            return e ? i : t
        })(e)
    }

    function a(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var i = r(t);
        if (i && i.has(e)) return i.get(e);
        var s = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var o in e)
            if ("default" !== o && Object.prototype.hasOwnProperty.call(e, o)) {
                var a = n ? Object.getOwnPropertyDescriptor(e, o) : null;
                a && (a.get || a.set) ? Object.defineProperty(s, o, a) : s[o] = e[o]
            }
        s.default = e;
        i && i.set(e, s);
        return s
    }

    function l(e) {
        return e && e.hubletOverride ? e.hubletOverride : n.default.getHublet()
    }

    function d(e) {
        return e && e.envOverride ? e.envOverride : n.default.getShort()
    }

    function c(e) {
        const t = l(e);
        return o.getHubletPostfix(t, e)
    }

    function u(e, t) {
        const i = l(t);
        return o.getSubDomain(i, e, t)
    }

    function h(e) {
        const t = l(e),
            i = d(e);
        return o.getDomain(t, i, e)
    }

    function g(e) {
        const t = d(e);
        return o.getEnvPostfix(t, e)
    }

    function f(e) {
        return o.getDomainPrefix(e)
    }

    function p(e) {
        const t = l(e);
        return o.getHubletDomainPostfix(t, e)
    }

    function m(e) {
        return o.getTld(e)
    }

    function E(e) {
        return o.getPathPrefix(e)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getDomain = d;
    t.getDomainPrefix = u;
    t.getEnvPostfix = c;
    t.getHubletDomainPostfix = h;
    t.getHubletPostfix = a;
    t.getPathPrefix = f;
    t.getSubDomain = l;
    t.getTld = g;
    var s = r(i(111)),
        n = i(112);

    function o(e) {
        if ("function" != typeof WeakMap) return null;
        var t = new WeakMap,
            i = new WeakMap;
        return (o = function(e) {
            return e ? i : t
        })(e)
    }

    function r(e, t) {
        if (!t && e && e.__esModule) return e;
        if (null === e || "object" != typeof e && "function" != typeof e) return {
            default: e
        };
        var i = o(t);
        if (i && i.has(e)) return i.get(e);
        var s = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
        for (var r in e)
            if ("default" !== r && Object.prototype.hasOwnProperty.call(e, r)) {
                var a = n ? Object.getOwnPropertyDescriptor(e, r) : null;
                a && (a.get || a.set) ? Object.defineProperty(s, r, a) : s[r] = e[r]
            }
        s.default = e;
        i && i.set(e, s);
        return s
    }

    function a(e, t) {
        const i = t && t.hubletOverride ? t.hubletOverride : e;
        return i === s.na1 ? "" : "-" + i
    }

    function l(e, t, i) {
        if (i && i.hubletPostfixLocation && "domain" === i.hubletPostfixLocation) return t;
        t === n.Subdomains.APP_API && (t = n.Subdomains.APP);
        return `${t}${a(e,i)}`
    }

    function d(e, t, i) {
        return `${u(i)}${c(t,i)}${h(e,i)}`
    }

    function c(e, t) {
        return "qa" === (t && t.envOverride ? t.envOverride : e) ? "qa" : ""
    }

    function u(e) {
        return e && e.domainOverride ? e.domainOverride : "hubspot"
    }

    function h(e, t) {
        return t && t.hubletPostfixLocation && "domain" === t.hubletPostfixLocation ? a(e, t) : ""
    }

    function g(e) {
        return e && e.tldOverride ? e.tldOverride : "com"
    }

    function f(e) {
        return e === n.Subdomains.APP_API ? "/api" : ""
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.test2 = t.na1 = t.eu1 = void 0;
    t.na1 = "na1", t.test2 = "test2", t.eu1 = "eu1"
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.Subdomains = void 0;
    t.Subdomains = {
        APP: "app",
        APP_API: "app-api"
    }
}, function(e, t) {
    e.exports = {
        mode: "compressed",
        staticDomainPrefix: "//static.hsappstatic.net",
        bender: {
            depVersions: {
                "conversations-embed": "static-1.18938",
                "browserslist-config-hubspot": "static-1.122",
                classnames: "static-2.10",
                "conversations-internal-schema": "static-1.9042",
                csstype: "static-1.8",
                cssUtils: "static-1.308",
                enviro: "static-4.247",
                "floating-ui": "static-1.5",
                "foundations-assets": "static-1.1070",
                "foundations-components": "static-1.1947",
                "foundations-theming": "static-1.179",
                "framer-motion": "static-1.21",
                "head-dlb": "static-1.1391",
                HeadJS: "static-2.459",
                "hoist-non-react-statics": "static-3.9",
                "hs-story-utils": "static-1.4727",
                "hs-test-utils": "static-1.3859",
                "hubspot-url-utils": "static-1.916",
                HubStyle: "static-2.7728",
                HubStyleTokens: "static-2.7418",
                I18n: "static-7.1189",
                "i18n-data": "static-1.175",
                icons: "static-2.577",
                immutable: "static-2.19",
                isMobile: "static-1.7",
                jasmine: "static-4.795",
                "jasmine-runner": "static-1.2390",
                "metrics-js": "static-1.5299",
                "moment-timezone": "static-5.17",
                PortalIdParser: "static-2.227",
                quartz: "static-1.2768",
                react: "static-7.123",
                "react-aria": "static-1.7",
                "react-dom": "static-7.85",
                "react-input-autosize": "static-2.17",
                "react-select-plus": "static-1.41",
                "react-utils": "static-2.2104",
                "react-virtualized": "static-2.26",
                sassPrefix: "static-1.110",
                sinon: "static-1.9",
                "styled-components": "static-2.40",
                StyleGuideUI: "static-3.409",
                "tanstack-table": "static-1.1",
                "testing-library": "static-1.102",
                transmute: "static-2.29",
                "ui-fonts": "static-1.322",
                "ui-images": "static-2.708",
                UIComponents: "static-3.4369",
                "webpack-env": "static-1.4",
                "hs-promise-rejection-tracking": "static-1.1385",
                raven: "static-3.1416",
                "raven-hubspot": "static-1.1723",
                moment: "static-3.26",
                "bend-plugin-uicomponents": "static-1.498"
            },
            depPathPrefixes: {
                "conversations-embed": "/conversations-embed/static-1.18938",
                "browserslist-config-hubspot": "/browserslist-config-hubspot/static-1.122",
                classnames: "/classnames/static-2.10",
                "conversations-internal-schema": "/conversations-internal-schema/static-1.9042",
                csstype: "/csstype/static-1.8",
                cssUtils: "/cssUtils/static-1.308",
                enviro: "/enviro/static-4.247",
                "floating-ui": "/floating-ui/static-1.5",
                "foundations-assets": "/foundations-assets/static-1.1070",
                "foundations-components": "/foundations-components/static-1.1947",
                "foundations-theming": "/foundations-theming/static-1.179",
                "framer-motion": "/framer-motion/static-1.21",
                "head-dlb": "/head-dlb/static-1.1391",
                HeadJS: "/HeadJS/static-2.459",
                "hoist-non-react-statics": "/hoist-non-react-statics/static-3.9",
                "hs-story-utils": "/hs-story-utils/static-1.4727",
                "hs-test-utils": "/hs-test-utils/static-1.3859",
                "hubspot-url-utils": "/hubspot-url-utils/static-1.916",
                HubStyle: "/HubStyle/static-2.7728",
                HubStyleTokens: "/HubStyleTokens/static-2.7418",
                I18n: "/I18n/static-7.1189",
                "i18n-data": "/i18n-data/static-1.175",
                icons: "/icons/static-2.577",
                immutable: "/immutable/static-2.19",
                isMobile: "/isMobile/static-1.7",
                jasmine: "/jasmine/static-4.795",
                "jasmine-runner": "/jasmine-runner/static-1.2390",
                "metrics-js": "/metrics-js/static-1.5299",
                "moment-timezone": "/moment-timezone/static-5.17",
                PortalIdParser: "/PortalIdParser/static-2.227",
                quartz: "/quartz/static-1.2768",
                react: "/react/static-7.123",
                "react-aria": "/react-aria/static-1.7",
                "react-dom": "/react-dom/static-7.85",
                "react-input-autosize": "/react-input-autosize/static-2.17",
                "react-select-plus": "/react-select-plus/static-1.41",
                "react-utils": "/react-utils/static-2.2104",
                "react-virtualized": "/react-virtualized/static-2.26",
                sassPrefix: "/sassPrefix/static-1.110",
                sinon: "/sinon/static-1.9",
                "styled-components": "/styled-components/static-2.40",
                StyleGuideUI: "/StyleGuideUI/static-3.409",
                "tanstack-table": "/tanstack-table/static-1.1",
                "testing-library": "/testing-library/static-1.102",
                transmute: "/transmute/static-2.29",
                "ui-fonts": "/ui-fonts/static-1.322",
                "ui-images": "/ui-images/static-2.708",
                UIComponents: "/UIComponents/static-3.4369",
                "webpack-env": "/webpack-env/static-1.4",
                "hs-promise-rejection-tracking": "/hs-promise-rejection-tracking/static-1.1385",
                raven: "/raven/static-3.1416",
                "raven-hubspot": "/raven-hubspot/static-1.1723",
                moment: "/moment/static-3.26",
                "bend-plugin-uicomponents": "/bend-plugin-uicomponents/static-1.498"
            },
            project: "conversations-embed",
            staticDomain: "//static.hsappstatic.net",
            staticDomainPrefix: "//static.hsappstatic.net"
        }
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getChatflowTagFromQueryParams = s;

    function s() {
        return new URL(window.location.href).searchParams.get("chatflow") || ""
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.withValuesConvertedToString = t.serializeQueryParameters = void 0;
    const s = e => Object.keys(e).map(t => [t, "" + e[t]]);
    t.withValuesConvertedToString = s;
    const n = e => new URLSearchParams(s(e)).toString();
    t.serializeQueryParameters = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.getPerfAttributes = a;
    var s = i(63),
        n = i(117),
        o = i(118),
        r = i(119);

    function a({
        portalId: e,
        messagesEnv: t
    }) {
        try {
            const i = "qa" === t ? "qa" : "",
                a = (0, r.buildNonCmsScriptLoaderPath)({
                    env: i,
                    portalId: e
                }),
                l = (0, n.buildCmsScriptLoaderSrc)({
                    portalId: e
                }),
                d = (0, o.buildCmsScriptLoaderPath)({
                    portalId: e
                }),
                c = `https://js.usemessages${i}.com/conversations-embed.js`,
                u = performance.getEntries().map(({
                    name: e
                }) => e),
                h = u.find(e => e.includes(a)) || a,
                g = u.find(e => e.includes(d)) || d,
                f = Boolean(document.querySelector(`script[src^="${l}"]`));
            performance.measure(s.EXECUTION_MEASUREMENT_PRE_DELAY, s.START_MARK_PRE_DELAY, s.END_MARK_PRE_DELAY);
            performance.measure(s.EXECUTION_MEASUREMENT_POST_DELAY, s.START_MARK_POST_DELAY, s.END_MARK_POST_DELAY);
            const p = performance.getEntriesByName(s.EXECUTION_MEASUREMENT_PRE_DELAY)[0],
                m = performance.getEntriesByName(s.EXECUTION_MEASUREMENT_POST_DELAY)[0],
                E = p.duration + m.duration,
                _ = performance.getEntriesByName(h)[0],
                v = performance.getEntriesByName(g)[0],
                I = (f ? v : _).duration,
                b = performance.getEntriesByName(c)[0].duration;
            if (E && I && b) return {
                iframeLoadTime: E,
                scriptLoaderScriptTime: I,
                embedScriptTime: b
            }
        } catch (e) {}
        return null
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buildCmsScriptLoaderSrc = void 0;
    const s = ({
        portalId: e
    }) => `/hs/scriptloader/${e}.js`;
    t.buildCmsScriptLoaderSrc = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buildCmsScriptLoaderPath = void 0;
    var s = i(117);
    const n = ({
        portalId: e
    }) => {
        const t = (0, s.buildCmsScriptLoaderSrc)({
            portalId: e
        });
        return `${document.location.origin}${t}`
    };
    t.buildCmsScriptLoaderPath = n
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.buildNonCmsScriptLoaderPath = void 0;
    const s = ({
        env: e = "",
        portalId: t
    }) => `${document.location.protocol}//js.hs-scripts${e}.com/${t}.js`;
    t.buildNonCmsScriptLoaderPath = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.isInSDK = void 0;
    const s = () => /\bHub[sS]pot ?Mobile ?SDK\b/.test(window.navigator.userAgent);
    t.isInSDK = s
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.hasRequiredFeatures = s;

    function s(e) {
        return ["function" == typeof e.WeakMap, "function" == typeof e.requestAnimationFrame, "function" == typeof e.URLSearchParams, "function" == typeof Object.fromEntries].every(e => e)
    }
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.ErrorLogger = void 0;
    var s = i(123),
        n = i(103);
    const o = "https://exceptions.hubspot.com/api/1/store/?sentry_key=7ab6425e7a7c4b01b71fdb51e76514bf&sentry_version=7&sentry_client=raven-js%2F3.19.1",
        r = 4;

    function a() {
        return Date.now() / 1e3
    }

    function l() {
        const e = window.crypto || window.msCrypto;
        if (void 0 !== typeof e && e.getRandomValues) {
            const t = new Uint16Array(8);
            e.getRandomValues(t);
            t[3] = 4095 & t[3] | 16384;
            t[4] = 16383 & t[4] | 32768;
            const i = function(e) {
                let t = e.toString(16);
                for (; t.length < 4;) t = "0" + t;
                return t
            };
            return i(t[0]) + i(t[1]) + i(t[2]) + i(t[3]) + i(t[4]) + i(t[5]) + i(t[6]) + i(t[7])
        }
        return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, e => {
            const t = 16 * Math.random() | 0;
            return ("x" === e ? t : 3 & t | 8).toString(16)
        })
    }

    function d(e) {
        const t = new XMLHttpRequest;
        t.addEventListener("readystatechange", () => {
            t.readyState === r && t.status >= 300 && console.warn("Failed logging HSConversations error")
        });
        t.open("POST", o);
        t.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
        t.send(JSON.stringify(e))
    }
    class c {
        constructor() {
            this.config = {
                environment: (0, n.getMessagesEnv)(),
                tags: {
                    portalId: (0, n.getPortalId)(),
                    env: (0, n.getMessagesEnv)(),
                    project: "conversations-embed"
                },
                logger: "javascript",
                platform: "javascript",
                request: {
                    headers: {
                        "User-Agent": navigator.userAgent
                    },
                    url: window.location.href
                }
            };
            this.logError = this.logError.bind(this)
        }
        logError(e) {
            const t = a();
            d(Object.assign({}, this.config, {
                event_id: l(),
                transaction: "conversations embed error",
                level: "error",
                exception: {
                    values: [{
                        mechanism: {
                            handled: !0,
                            type: "generic"
                        },
                        type: e,
                        value: e
                    }]
                },
                timestamp: t
            }))
        }
        captureErrors(e) {
            try {
                e()
            } catch (e) {
                const t = a();
                if (e instanceof Error && "Aborting: redirection in progress" !== e.message) {
                    const i = (0, s.computeStackTrace)(e);
                    d(Object.assign({}, this.config, {
                        event_id: l(),
                        transaction: i.stack[0].filename,
                        level: "error",
                        exception: {
                            values: [{
                                mechanism: {
                                    handled: !0,
                                    type: "generic"
                                },
                                type: i.name,
                                value: i.message,
                                stacktrace: {
                                    frames: i.stack.reverse()
                                }
                            }]
                        },
                        timestamp: t
                    }))
                }
                throw e
            }
        }
    }
    t.ErrorLogger = c
}, function(e, t, i) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    t.computeStackTrace = d;
    const s = "?";

    function n() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.href
    }

    function o() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.origin ? document.location.origin : `${document.location.protocol}//${document.location.hostname}${document.location.port?":"+document.location.port:""}`
    }

    function r(e) {
        if (void 0 === e.stack || !e.stack) return null;
        const t = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
            i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx(?:-web)|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
            r = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i,
            a = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
            l = /\((\S*)(?::(\d+))(?::(\d+))\)/,
            d = e.stack.split("\n"),
            c = [];
        let u, h, g;
        for (let n = 0, f = d.length; n < f; ++n) {
            if (h = t.exec(d[n])) {
                const e = h[2] && 0 === h[2].indexOf("native");
                if (h[2] && 0 === h[2].indexOf("eval") && (u = l.exec(h[2]))) {
                    h[2] = u[1];
                    h[3] = u[2];
                    h[4] = u[3]
                }
                g = {
                    filename: e ? null : h[2],
                    function: h[1] || s,
                    args: e ? [h[2]] : [],
                    lineno: h[3] ? +h[3] : null,
                    colno: h[4] ? +h[4] : null
                }
            } else if (h = i.exec(d[n])) g = {
                filename: h[2],
                function: h[1] || s,
                args: [],
                lineno: +h[3],
                colno: h[4] ? +h[4] : null
            };
            else {
                if (!(h = r.exec(d[n]))) continue;
                if (h[3] && h[3].indexOf(" > eval") > -1 && (u = a.exec(h[3]))) {
                    h[3] = u[1];
                    h[4] = u[2];
                    h[5] = null
                } else 0 !== n || h[5] || void 0 === e.columnNumber || (c[0].column = e.columnNumber + 1);
                g = {
                    filename: h[3],
                    function: h[1] || s,
                    args: h[2] ? h[2].split(",") : [],
                    lineno: h[4] ? +h[4] : null,
                    colno: h[5] ? +h[5] : null
                }
            }!g.function && g.line && (g.function = s);
            if (g.filename && "blob:" === g.filename.substr(0, 5)) {
                const e = new XMLHttpRequest;
                e.open("GET", g.filename, !1);
                e.send(null);
                if (200 === e.status) {
                    let t = e.responseText || "";
                    t = t.slice(-300);
                    const i = t.match(/\/\/# sourceMappingURL=(.*)$/);
                    if (i) {
                        let e = i[1];
                        "~" === e.charAt(0) && (e = o() + e.slice(1));
                        g.url = e.slice(0, -4)
                    }
                }
            }
            c.push(g)
        }
        return c.length ? {
            name: e.name,
            message: e.message,
            url: n(),
            stack: c
        } : null
    }

    function a(e, t, i) {
        const n = {
            filename: t,
            lineno: i
        };
        if (n.filename && n.lineno) {
            e.incomplete = !1;
            n.function || (n.function = s);
            if (e.stack.length > 0 && e.stack[0].filename === n.filename) {
                if (e.stack[0].lineno === n.lineno) return !1;
                if (!e.stack[0].lineno && e.stack[0].function === n.function) {
                    e.stack[0].lineno = n.lineno;
                    return !1
                }
            }
            e.stack.unshift(n);
            e.partial = !0;
            return !0
        }
        e.incomplete = !0;
        return !1
    }

    function l(e, t) {
        const i = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i,
            o = [],
            r = {};
        let c, u, h = !1;
        for (let e = l.caller; e && !h; e = e.caller)
            if (e !== d) {
                u = {
                    filename: null,
                    function: s,
                    lineno: null,
                    colno: null
                };
                e.name ? u.function = e.name : (c = i.exec(e.toString())) && (u.function = c[1]);
                if (void 0 === u.function) try {
                    u.function = c.input.substring(0, c.input.indexOf("{"))
                } catch (e) {}
                r["" + e] ? h = !0 : r["" + e] = !0;
                o.push(u)
            }
        t && o.splice(0, t);
        const g = {
            name: e.name,
            message: e.message,
            filename: n(),
            stack: o
        };
        a(g, e.sourceURL || e.fileName, e.line || e.lineNumber, e.message || e.description);
        return g
    }

    function d(e, t) {
        let i = null;
        t = null == t ? 0 : +t;
        try {
            i = r(e);
            if (i) return i
        } catch (e) {}
        try {
            i = l(e, t + 1);
            if (i) return i
        } catch (e) {}
        return {
            name: e.name,
            message: e.message,
            filename: n()
        }
    }
}]);
//# sourceMappingURL=//static.hsappstatic.net/conversations-embed/static-1.18938/bundles/project.js.map