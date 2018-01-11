function getRacingData() {
    return {
        next: {
            geo: {
                lat: "43.6203",
                lng: "39.7120",
                location: "AUSTRALIA"
            },
            dates: {
                ps1: "2017-03-23T00:00:00+01:00",
                ps2: "2017-03-23T00:00:00+01:00",
                ps3: "2017-03-24T00:00:00+01:00",
                qualify: "2017-03-24T00:00:00+01:00",
                race: "2018-03-25T06:00:00+01:00"
            }
        }
    }
}
function setTimeForCountdown(t, e, n) {
    var i = moment(t);
    $("#hiddenCountDown").countdown("destroy"),
        $("#hiddenCountDown").countdown({
            until: i.toDate(),
            timezone: i.utcOffset(),
            onTick: countdownTicker
        }),
        $("span.startTime").text(i.utcOffset($("#timezone").val()).format("HH:mm on LL")),
        $("h2.grandprixtitle").text("2018 Formula 1 Grand Prix in " + n.location)
}
function countdownTicker(t) {
    $("div.days").html(t[3] + "<span>Days</span>"),
        $("div.hours").html(t[4] + "<span>Hours</span>"),
        $("div.minutes").html(t[5] + "<span>Minutes</span>"),
        $("div.seconds").html(t[6] + "<span>Seconds</span>"),
        window.progressbars.days.animate(100 / 24 * t[3] / 100),
        window.progressbars.hours.animate(100 / 60 * t[4] / 100),
        window.progressbars.minutes.animate(100 / 60 * t[5] / 100),
        window.progressbars.seconds.animate(100 / 60 * t[6] / 100)
}
function init() {
    $('#timezone option[value="' + moment().format("Z") + '"]').prop("selected", !0),
        setTimeForCountdown(new Date(getRacingData().next.dates.race), 0, getRacingData().next.geo)
}
!function(t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function(t) {
            if (!t.document)
                throw new Error("jQuery requires a window with a document");
            return e(t)
        }
        : e(t)
}("undefined" != typeof window ? window : this, function(t, e) {
    function n(t) {
        var e = "length"in t && t.length
            , n = K.type(t);
        return "function" === n || K.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
    }
    function i(t, e, n) {
        if (K.isFunction(e))
            return K.grep(t, function(t, i) {
                return !!e.call(t, i, t) !== n
            });
        if (e.nodeType)
            return K.grep(t, function(t) {
                return t === e !== n
            });
        if ("string" == typeof e) {
            if (at.test(e))
                return K.filter(e, t, n);
            e = K.filter(e, t)
        }
        return K.grep(t, function(t) {
            return B.call(e, t) >= 0 !== n
        })
    }
    function r(t, e) {
        for (; (t = t[e]) && 1 !== t.nodeType; )
            ;
        return t
    }
    function o(t) {
        var e = pt[t] = {};
        return K.each(t.match(dt) || [], function(t, n) {
            e[n] = !0
        }),
            e
    }
    function s() {
        X.removeEventListener("DOMContentLoaded", s, !1),
            t.removeEventListener("load", s, !1),
            K.ready()
    }
    function a() {
        Object.defineProperty(this.cache = {}, 0, {
            get: function() {
                return {}
            }
        }),
            this.expando = K.expando + a.uid++
    }
    function u(t, e, n) {
        var i;
        if (void 0 === n && 1 === t.nodeType)
            if (i = "data-" + e.replace(wt, "-$1").toLowerCase(),
                    n = t.getAttribute(i),
                "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : _t.test(n) ? K.parseJSON(n) : n
                } catch (r) {}
                vt.set(t, e, n)
            } else
                n = void 0;
        return n
    }
    function l() {
        return !0
    }
    function c() {
        return !1
    }
    function f() {
        try {
            return X.activeElement
        } catch (t) {}
    }
    function h(t, e) {
        return K.nodeName(t, "table") && K.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }
    function d(t) {
        return t.type = (null !== t.getAttribute("type")) + "/" + t.type,
            t
    }
    function p(t) {
        var e = Lt.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"),
            t
    }
    function m(t, e) {
        for (var n = 0, i = t.length; i > n; n++)
            yt.set(t[n], "globalEval", !e || yt.get(e[n], "globalEval"))
    }
    function g(t, e) {
        var n, i, r, o, s, a, u, l;
        if (1 === e.nodeType) {
            if (yt.hasData(t) && (o = yt.access(t),
                    s = yt.set(e, o),
                    l = o.events)) {
                delete s.handle,
                    s.events = {};
                for (r in l)
                    for (n = 0,
                             i = l[r].length; i > n; n++)
                        K.event.add(e, r, l[r][n])
            }
            vt.hasData(t) && (a = vt.access(t),
                u = K.extend({}, a),
                vt.set(e, u))
        }
    }
    function y(t, e) {
        var n = t.getElementsByTagName ? t.getElementsByTagName(e || "*") : t.querySelectorAll ? t.querySelectorAll(e || "*") : [];
        return void 0 === e || e && K.nodeName(t, e) ? K.merge([t], n) : n
    }
    function v(t, e) {
        var n = e.nodeName.toLowerCase();
        "input" === n && Dt.test(t.type) ? e.checked = t.checked : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
    }
    function _(e, n) {
        var i, r = K(n.createElement(e)).appendTo(n.body), o = t.getDefaultComputedStyle && (i = t.getDefaultComputedStyle(r[0])) ? i.display : K.css(r[0], "display");
        return r.detach(),
            o
    }
    function w(t) {
        var e = X
            , n = It[t];
        return n || (n = _(t, e),
        "none" !== n && n || (Wt = (Wt || K("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement),
            e = Wt[0].contentDocument,
            e.write(),
            e.close(),
            n = _(t, e),
            Wt.detach()),
            It[t] = n),
            n
    }
    function b(t, e, n) {
        var i, r, o, s, a = t.style;
        return n = n || Ut(t),
        n && (s = n.getPropertyValue(e) || n[e]),
        n && ("" !== s || K.contains(t.ownerDocument, t) || (s = K.style(t, e)),
        zt.test(s) && qt.test(e) && (i = a.width,
            r = a.minWidth,
            o = a.maxWidth,
            a.minWidth = a.maxWidth = a.width = s,
            s = n.width,
            a.width = i,
            a.minWidth = r,
            a.maxWidth = o)),
            void 0 !== s ? s + "" : s
    }
    function x(t, e) {
        return {
            get: function() {
                return t() ? void delete this.get : (this.get = e).apply(this, arguments)
            }
        }
    }
    function T(t, e) {
        if (e in t)
            return e;
        for (var n = e[0].toUpperCase() + e.slice(1), i = e, r = Qt.length; r--; )
            if (e = Qt[r] + n,
                e in t)
                return e;
        return i
    }
    function D(t, e, n) {
        var i = $t.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }
    function S(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += K.css(t, n + xt[o], !0, r)),
                i ? ("content" === n && (s -= K.css(t, "padding" + xt[o], !0, r)),
                "margin" !== n && (s -= K.css(t, "border" + xt[o] + "Width", !0, r))) : (s += K.css(t, "padding" + xt[o], !0, r),
                "padding" !== n && (s += K.css(t, "border" + xt[o] + "Width", !0, r)));
        return s
    }
    function C(t, e, n) {
        var i = !0
            , r = "width" === e ? t.offsetWidth : t.offsetHeight
            , o = Ut(t)
            , s = "border-box" === K.css(t, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = b(t, e, o),
                (0 > r || null == r) && (r = t.style[e]),
                    zt.test(r))
                return r;
            i = s && (J.boxSizingReliable() || r === t.style[e]),
                r = parseFloat(r) || 0
        }
        return r + S(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }
    function k(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; a > s; s++)
            i = t[s],
            i.style && (o[s] = yt.get(i, "olddisplay"),
                n = i.style.display,
                e ? (o[s] || "none" !== n || (i.style.display = ""),
                "" === i.style.display && Tt(i) && (o[s] = yt.access(i, "olddisplay", w(i.nodeName)))) : (r = Tt(i),
                "none" === n && r || yt.set(i, "olddisplay", r ? n : K.css(i, "display"))));
        for (s = 0; a > s; s++)
            i = t[s],
            i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }
    function M(t, e, n, i, r) {
        return new M.prototype.init(t,e,n,i,r)
    }
    function E() {
        return setTimeout(function() {
            Jt = void 0
        }),
            Jt = K.now()
    }
    function O(t, e) {
        var n, i = 0, r = {
            height: t
        };
        for (e = e ? 1 : 0; 4 > i; i += 2 - e)
            n = xt[i],
                r["margin" + n] = r["padding" + n] = t;
        return e && (r.opacity = r.width = t),
            r
    }
    function A(t, e, n) {
        for (var i, r = (ne[e] || []).concat(ne["*"]), o = 0, s = r.length; s > o; o++)
            if (i = r[o].call(n, e, t))
                return i
    }
    function N(t, e, n) {
        var i, r, o, s, a, u, l, c, f = this, h = {}, d = t.style, p = t.nodeType && Tt(t), m = yt.get(t, "fxshow");
        n.queue || (a = K._queueHooks(t, "fx"),
        null == a.unqueued && (a.unqueued = 0,
                u = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || u()
                }
        ),
            a.unqueued++,
            f.always(function() {
                f.always(function() {
                    a.unqueued--,
                    K.queue(t, "fx").length || a.empty.fire()
                })
            })),
        1 === t.nodeType && ("height"in e || "width"in e) && (n.overflow = [d.overflow, d.overflowX, d.overflowY],
            l = K.css(t, "display"),
            c = "none" === l ? yt.get(t, "olddisplay") || w(t.nodeName) : l,
        "inline" === c && "none" === K.css(t, "float") && (d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden",
            f.always(function() {
                d.overflow = n.overflow[0],
                    d.overflowX = n.overflow[1],
                    d.overflowY = n.overflow[2]
            }));
        for (i in e)
            if (r = e[i],
                    Zt.exec(r)) {
                if (delete e[i],
                        o = o || "toggle" === r,
                    r === (p ? "hide" : "show")) {
                    if ("show" !== r || !m || void 0 === m[i])
                        continue;
                    p = !0
                }
                h[i] = m && m[i] || K.style(t, i)
            } else
                l = void 0;
        if (K.isEmptyObject(h))
            "inline" === ("none" === l ? w(t.nodeName) : l) && (d.display = l);
        else {
            m ? "hidden"in m && (p = m.hidden) : m = yt.access(t, "fxshow", {}),
            o && (m.hidden = !p),
                p ? K(t).show() : f.done(function() {
                    K(t).hide()
                }),
                f.done(function() {
                    var e;
                    yt.remove(t, "fxshow");
                    for (e in h)
                        K.style(t, e, h[e])
                });
            for (i in h)
                s = A(p ? m[i] : 0, i, f),
                i in m || (m[i] = s.start,
                p && (s.end = s.start,
                    s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function F(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (i = K.camelCase(n),
                    r = e[i],
                    o = t[n],
                K.isArray(o) && (r = o[1],
                    o = t[n] = o[0]),
                n !== i && (t[i] = o,
                    delete t[n]),
                    s = K.cssHooks[i],
                s && "expand"in s) {
                o = s.expand(o),
                    delete t[i];
                for (n in o)
                    n in t || (t[n] = o[n],
                        e[n] = r)
            } else
                e[i] = r
    }
    function P(t, e, n) {
        var i, r, o = 0, s = ee.length, a = K.Deferred().always(function() {
            delete u.elem
        }), u = function() {
            if (r)
                return !1;
            for (var e = Jt || E(), n = Math.max(0, l.startTime + l.duration - e), i = n / l.duration || 0, o = 1 - i, s = 0, u = l.tweens.length; u > s; s++)
                l.tweens[s].run(o);
            return a.notifyWith(t, [l, o, n]),
                1 > o && u ? n : (a.resolveWith(t, [l]),
                    !1)
        }, l = a.promise({
            elem: t,
            props: K.extend({}, e),
            opts: K.extend(!0, {
                specialEasing: {}
            }, n),
            originalProperties: e,
            originalOptions: n,
            startTime: Jt || E(),
            duration: n.duration,
            tweens: [],
            createTween: function(e, n) {
                var i = K.Tween(t, l.opts, e, n, l.opts.specialEasing[e] || l.opts.easing);
                return l.tweens.push(i),
                    i
            },
            stop: function(e) {
                var n = 0
                    , i = e ? l.tweens.length : 0;
                if (r)
                    return this;
                for (r = !0; i > n; n++)
                    l.tweens[n].run(1);
                return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]),
                    this
            }
        }), c = l.props;
        for (F(c, l.opts.specialEasing); s > o; o++)
            if (i = ee[o].call(l, t, c, l.opts))
                return i;
        return K.map(c, A, l),
        K.isFunction(l.opts.start) && l.opts.start.call(t, l),
            K.fx.timer(K.extend(u, {
                elem: t,
                anim: l,
                queue: l.opts.queue
            })),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }
    function Y(t) {
        return function(e, n) {
            "string" != typeof e && (n = e,
                e = "*");
            var i, r = 0, o = e.toLowerCase().match(dt) || [];
            if (K.isFunction(n))
                for (; i = o[r++]; )
                    "+" === i[0] ? (i = i.slice(1) || "*",
                        (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }
    function L(t, e, n, i) {
        function r(a) {
            var u;
            return o[a] = !0,
                K.each(t[a] || [], function(t, a) {
                    var l = a(e, n, i);
                    return "string" != typeof l || s || o[l] ? s ? !(u = l) : void 0 : (e.dataTypes.unshift(l),
                        r(l),
                        !1)
                }),
                u
        }
        var o = {}
            , s = t === _e;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }
    function j(t, e) {
        var n, i, r = K.ajaxSettings.flatOptions || {};
        for (n in e)
            void 0 !== e[n] && ((r[n] ? t : i || (i = {}))[n] = e[n]);
        return i && K.extend(!0, t, i),
            t
    }
    function H(t, e, n) {
        for (var i, r, o, s, a = t.contents, u = t.dataTypes; "*" === u[0]; )
            u.shift(),
            void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
        if (i)
            for (r in a)
                if (a[r] && a[r].test(i)) {
                    u.unshift(r);
                    break
                }
        if (u[0]in n)
            o = u[0];
        else {
            for (r in n) {
                if (!u[0] || t.converters[r + " " + u[0]]) {
                    o = r;
                    break
                }
                s || (s = r)
            }
            o = o || s
        }
        return o ? (o !== u[0] && u.unshift(o),
            n[o]) : void 0
    }
    function W(t, e, n, i) {
        var r, o, s, a, u, l = {}, c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters)
                l[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o; )
            if (t.responseFields[o] && (n[t.responseFields[o]] = e),
                !u && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
                    u = o,
                    o = c.shift())
                if ("*" === o)
                    o = u;
                else if ("*" !== u && u !== o) {
                    if (s = l[u + " " + o] || l["* " + o],
                            !s)
                        for (r in l)
                            if (a = r.split(" "),
                                a[1] === o && (s = l[u + " " + a[0]] || l["* " + a[0]])) {
                                s === !0 ? s = l[r] : l[r] !== !0 && (o = a[0],
                                    c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && t["throws"])
                            e = s(e);
                        else
                            try {
                                e = s(e)
                            } catch (f) {
                                return {
                                    state: "parsererror",
                                    error: s ? f : "No conversion from " + u + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: e
        }
    }
    function I(t, e, n, i) {
        var r;
        if (K.isArray(e))
            K.each(e, function(e, r) {
                n || De.test(t) ? i(t, r) : I(t + "[" + ("object" == typeof r ? e : "") + "]", r, n, i)
            });
        else if (n || "object" !== K.type(e))
            i(t, e);
        else
            for (r in e)
                I(t + "[" + r + "]", e[r], n, i)
    }
    function q(t) {
        return K.isWindow(t) ? t : 9 === t.nodeType && t.defaultView
    }
    var z = []
        , U = z.slice
        , R = z.concat
        , $ = z.push
        , B = z.indexOf
        , G = {}
        , V = G.toString
        , Q = G.hasOwnProperty
        , J = {}
        , X = t.document
        , Z = "2.1.4"
        , K = function(t, e) {
        return new K.fn.init(t,e)
    }
        , tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
        , et = /^-ms-/
        , nt = /-([\da-z])/gi
        , it = function(t, e) {
        return e.toUpperCase()
    };
    K.fn = K.prototype = {
        jquery: Z,
        constructor: K,
        selector: "",
        length: 0,
        toArray: function() {
            return U.call(this)
        },
        get: function(t) {
            return null != t ? 0 > t ? this[t + this.length] : this[t] : U.call(this)
        },
        pushStack: function(t) {
            var e = K.merge(this.constructor(), t);
            return e.prevObject = this,
                e.context = this.context,
                e
        },
        each: function(t, e) {
            return K.each(this, t, e)
        },
        map: function(t) {
            return this.pushStack(K.map(this, function(e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function() {
            return this.pushStack(U.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(t) {
            var e = this.length
                , n = +t + (0 > t ? e : 0);
            return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: $,
        sort: z.sort,
        splice: z.splice
    },
        K.extend = K.fn.extend = function() {
            var t, e, n, i, r, o, s = arguments[0] || {}, a = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof s && (l = s,
                s = arguments[a] || {},
                a++),
                 "object" == typeof s || K.isFunction(s) || (s = {}),
                 a === u && (s = this,
                     a--); u > a; a++)
                if (null != (t = arguments[a]))
                    for (e in t)
                        n = s[e],
                            i = t[e],
                        s !== i && (l && i && (K.isPlainObject(i) || (r = K.isArray(i))) ? (r ? (r = !1,
                            o = n && K.isArray(n) ? n : []) : o = n && K.isPlainObject(n) ? n : {},
                            s[e] = K.extend(l, o, i)) : void 0 !== i && (s[e] = i));
            return s
        }
        ,
        K.extend({
            expando: "jQuery" + (Z + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(t) {
                throw new Error(t)
            },
            noop: function() {},
            isFunction: function(t) {
                return "function" === K.type(t)
            },
            isArray: Array.isArray,
            isWindow: function(t) {
                return null != t && t === t.window
            },
            isNumeric: function(t) {
                return !K.isArray(t) && t - parseFloat(t) + 1 >= 0
            },
            isPlainObject: function(t) {
                return "object" !== K.type(t) || t.nodeType || K.isWindow(t) ? !1 : !t.constructor || Q.call(t.constructor.prototype, "isPrototypeOf")
            },
            isEmptyObject: function(t) {
                var e;
                for (e in t)
                    return !1;
                return !0
            },
            type: function(t) {
                return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? G[V.call(t)] || "object" : typeof t
            },
            globalEval: function(t) {
                var e, n = eval;
                t = K.trim(t),
                t && (1 === t.indexOf("use strict") ? (e = X.createElement("script"),
                    e.text = t,
                    X.head.appendChild(e).parentNode.removeChild(e)) : n(t))
            },
            camelCase: function(t) {
                return t.replace(et, "ms-").replace(nt, it)
            },
            nodeName: function(t, e) {
                return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
            },
            each: function(t, e, i) {
                var r, o = 0, s = t.length, a = n(t);
                if (i) {
                    if (a)
                        for (; s > o && (r = e.apply(t[o], i),
                        r !== !1); o++)
                            ;
                    else
                        for (o in t)
                            if (r = e.apply(t[o], i),
                                r === !1)
                                break
                } else if (a)
                    for (; s > o && (r = e.call(t[o], o, t[o]),
                    r !== !1); o++)
                        ;
                else
                    for (o in t)
                        if (r = e.call(t[o], o, t[o]),
                            r === !1)
                            break;
                return t
            },
            trim: function(t) {
                return null == t ? "" : (t + "").replace(tt, "")
            },
            makeArray: function(t, e) {
                var i = e || [];
                return null != t && (n(Object(t)) ? K.merge(i, "string" == typeof t ? [t] : t) : $.call(i, t)),
                    i
            },
            inArray: function(t, e, n) {
                return null == e ? -1 : B.call(e, t, n)
            },
            merge: function(t, e) {
                for (var n = +e.length, i = 0, r = t.length; n > i; i++)
                    t[r++] = e[i];
                return t.length = r,
                    t
            },
            grep: function(t, e, n) {
                for (var i, r = [], o = 0, s = t.length, a = !n; s > o; o++)
                    i = !e(t[o], o),
                    i !== a && r.push(t[o]);
                return r
            },
            map: function(t, e, i) {
                var r, o = 0, s = t.length, a = n(t), u = [];
                if (a)
                    for (; s > o; o++)
                        r = e(t[o], o, i),
                        null != r && u.push(r);
                else
                    for (o in t)
                        r = e(t[o], o, i),
                        null != r && u.push(r);
                return R.apply([], u)
            },
            guid: 1,
            proxy: function(t, e) {
                var n, i, r;
                return "string" == typeof e && (n = t[e],
                    e = t,
                    t = n),
                    K.isFunction(t) ? (i = U.call(arguments, 2),
                        r = function() {
                            return t.apply(e || this, i.concat(U.call(arguments)))
                        }
                        ,
                        r.guid = t.guid = t.guid || K.guid++,
                        r) : void 0
            },
            now: Date.now,
            support: J
        }),
        K.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
            G["[object " + e + "]"] = e.toLowerCase()
        });
    var rt = function(t) {
        function e(t, e, n, i) {
            var r, o, s, a, u, l, f, d, p, m;
            if ((e ? e.ownerDocument || e : I) !== N && A(e),
                    e = e || N,
                    n = n || [],
                    a = e.nodeType,
                "string" != typeof t || !t || 1 !== a && 9 !== a && 11 !== a)
                return n;
            if (!i && P) {
                if (11 !== a && (r = vt.exec(t)))
                    if (s = r[1]) {
                        if (9 === a) {
                            if (o = e.getElementById(s),
                                !o || !o.parentNode)
                                return n;
                            if (o.id === s)
                                return n.push(o),
                                    n
                        } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(s)) && H(e, o) && o.id === s)
                            return n.push(o),
                                n
                    } else {
                        if (r[2])
                            return Z.apply(n, e.getElementsByTagName(t)),
                                n;
                        if ((s = r[3]) && b.getElementsByClassName)
                            return Z.apply(n, e.getElementsByClassName(s)),
                                n
                    }
                if (b.qsa && (!Y || !Y.test(t))) {
                    if (d = f = W,
                            p = e,
                            m = 1 !== a && t,
                        1 === a && "object" !== e.nodeName.toLowerCase()) {
                        for (l = S(t),
                                 (f = e.getAttribute("id")) ? d = f.replace(wt, "\\$&") : e.setAttribute("id", d),
                                 d = "[id='" + d + "'] ",
                                 u = l.length; u--; )
                            l[u] = d + h(l[u]);
                        p = _t.test(t) && c(e.parentNode) || e,
                            m = l.join(",")
                    }
                    if (m)
                        try {
                            return Z.apply(n, p.querySelectorAll(m)),
                                n
                        } catch (g) {} finally {
                            f || e.removeAttribute("id")
                        }
                }
            }
            return k(t.replace(ut, "$1"), e, n, i)
        }
        function n() {
            function t(n, i) {
                return e.push(n + " ") > x.cacheLength && delete t[e.shift()],
                    t[n + " "] = i
            }
            var e = [];
            return t
        }
        function i(t) {
            return t[W] = !0,
                t
        }
        function r(t) {
            var e = N.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e),
                    e = null
            }
        }
        function o(t, e) {
            for (var n = t.split("|"), i = t.length; i--; )
                x.attrHandle[n[i]] = e
        }
        function s(t, e) {
            var n = e && t
                , i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
            if (i)
                return i;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === e)
                        return -1;
            return t ? 1 : -1
        }
        function a(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return "input" === n && e.type === t
            }
        }
        function u(t) {
            return function(e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }
        function l(t) {
            return i(function(e) {
                return e = +e,
                    i(function(n, i) {
                        for (var r, o = t([], n.length, e), s = o.length; s--; )
                            n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                    })
            })
        }
        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }
        function f() {}
        function h(t) {
            for (var e = 0, n = t.length, i = ""; n > e; e++)
                i += t[e].value;
            return i
        }
        function d(t, e, n) {
            var i = e.dir
                , r = n && "parentNode" === i
                , o = z++;
            return e.first ? function(e, n, o) {
                    for (; e = e[i]; )
                        if (1 === e.nodeType || r)
                            return t(e, n, o)
                }
                : function(e, n, s) {
                    var a, u, l = [q, o];
                    if (s) {
                        for (; e = e[i]; )
                            if ((1 === e.nodeType || r) && t(e, n, s))
                                return !0
                    } else
                        for (; e = e[i]; )
                            if (1 === e.nodeType || r) {
                                if (u = e[W] || (e[W] = {}),
                                    (a = u[i]) && a[0] === q && a[1] === o)
                                    return l[2] = a[2];
                                if (u[i] = l,
                                        l[2] = t(e, n, s))
                                    return !0
                            }
                }
        }
        function p(t) {
            return t.length > 1 ? function(e, n, i) {
                    for (var r = t.length; r--; )
                        if (!t[r](e, n, i))
                            return !1;
                    return !0
                }
                : t[0]
        }
        function m(t, n, i) {
            for (var r = 0, o = n.length; o > r; r++)
                e(t, n[r], i);
            return i
        }
        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, u = t.length, l = null != e; u > a; a++)
                (o = t[a]) && (n && !n(o, i, r) || (s.push(o),
                l && e.push(a)));
            return s
        }
        function y(t, e, n, r, o, s) {
            return r && !r[W] && (r = y(r)),
            o && !o[W] && (o = y(o, s)),
                i(function(i, s, a, u) {
                    var l, c, f, h = [], d = [], p = s.length, y = i || m(e || "*", a.nodeType ? [a] : a, []), v = !t || !i && e ? y : g(y, h, t, a, u), _ = n ? o || (i ? t : p || r) ? [] : s : v;
                    if (n && n(v, _, a, u),
                            r)
                        for (l = g(_, d),
                                 r(l, [], a, u),
                                 c = l.length; c--; )
                            (f = l[c]) && (_[d[c]] = !(v[d[c]] = f));
                    if (i) {
                        if (o || t) {
                            if (o) {
                                for (l = [],
                                         c = _.length; c--; )
                                    (f = _[c]) && l.push(v[c] = f);
                                o(null, _ = [], l, u)
                            }
                            for (c = _.length; c--; )
                                (f = _[c]) && (l = o ? tt(i, f) : h[c]) > -1 && (i[l] = !(s[l] = f))
                        }
                    } else
                        _ = g(_ === s ? _.splice(p, _.length) : _),
                            o ? o(null, s, _, u) : Z.apply(s, _)
                })
        }
        function v(t) {
            for (var e, n, i, r = t.length, o = x.relative[t[0].type], s = o || x.relative[" "], a = o ? 1 : 0, u = d(function(t) {
                return t === e
            }, s, !0), l = d(function(t) {
                return tt(e, t) > -1
            }, s, !0), c = [function(t, n, i) {
                var r = !o && (i || n !== M) || ((e = n).nodeType ? u(t, n, i) : l(t, n, i));
                return e = null,
                    r
            }
            ]; r > a; a++)
                if (n = x.relative[t[a].type])
                    c = [d(p(c), n)];
                else {
                    if (n = x.filter[t[a].type].apply(null, t[a].matches),
                            n[W]) {
                        for (i = ++a; r > i && !x.relative[t[i].type]; i++)
                            ;
                        return y(a > 1 && p(c), a > 1 && h(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(ut, "$1"), n, i > a && v(t.slice(a, i)), r > i && v(t = t.slice(i)), r > i && h(t))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function _(t, n) {
            var r = n.length > 0
                , o = t.length > 0
                , s = function(i, s, a, u, l) {
                var c, f, h, d = 0, p = "0", m = i && [], y = [], v = M, _ = i || o && x.find.TAG("*", l), w = q += null == v ? 1 : Math.random() || .1, b = _.length;
                for (l && (M = s !== N && s); p !== b && null != (c = _[p]); p++) {
                    if (o && c) {
                        for (f = 0; h = t[f++]; )
                            if (h(c, s, a)) {
                                u.push(c);
                                break
                            }
                        l && (q = w)
                    }
                    r && ((c = !h && c) && d--,
                    i && m.push(c))
                }
                if (d += p,
                    r && p !== d) {
                    for (f = 0; h = n[f++]; )
                        h(m, y, s, a);
                    if (i) {
                        if (d > 0)
                            for (; p--; )
                                m[p] || y[p] || (y[p] = J.call(u));
                        y = g(y)
                    }
                    Z.apply(u, y),
                    l && !i && y.length > 0 && d + n.length > 1 && e.uniqueSort(u)
                }
                return l && (q = w,
                    M = v),
                    m
            };
            return r ? i(s) : s
        }
        var w, b, x, T, D, S, C, k, M, E, O, A, N, F, P, Y, L, j, H, W = "sizzle" + 1 * new Date, I = t.document, q = 0, z = 0, U = n(), R = n(), $ = n(), B = function(t, e) {
            return t === e && (O = !0),
                0
        }, G = 1 << 31, V = {}.hasOwnProperty, Q = [], J = Q.pop, X = Q.push, Z = Q.push, K = Q.slice, tt = function(t, e) {
            for (var n = 0, i = t.length; i > n; n++)
                if (t[n] === e)
                    return n;
            return -1
        }, et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", nt = "[\\x20\\t\\r\\n\\f]", it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", rt = it.replace("w", "w#"), ot = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + rt + "))|)" + nt + "*\\]", st = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ot + ")*)|.*)\\)|)", at = new RegExp(nt + "+","g"), ut = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$","g"), lt = new RegExp("^" + nt + "*," + nt + "*"), ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"), ft = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]","g"), ht = new RegExp(st), dt = new RegExp("^" + rt + "$"), pt = {
            ID: new RegExp("^#(" + it + ")"),
            CLASS: new RegExp("^\\.(" + it + ")"),
            TAG: new RegExp("^(" + it.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + ot),
            PSEUDO: new RegExp("^" + st),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)","i"),
            bool: new RegExp("^(?:" + et + ")$","i"),
            needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)","i")
        }, mt = /^(?:input|select|textarea|button)$/i, gt = /^h\d$/i, yt = /^[^{]+\{\s*\[native \w/, vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, _t = /[+~]/, wt = /'|\\/g, bt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)","ig"), xt = function(t, e, n) {
            var i = "0x" + e - 65536;
            return i !== i || n ? e : 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        }, Tt = function() {
            A()
        };
        try {
            Z.apply(Q = K.call(I.childNodes), I.childNodes),
                Q[I.childNodes.length].nodeType
        } catch (Dt) {
            Z = {
                apply: Q.length ? function(t, e) {
                        X.apply(t, K.call(e))
                    }
                    : function(t, e) {
                        for (var n = t.length, i = 0; t[n++] = e[i++]; )
                            ;
                        t.length = n - 1
                    }
            }
        }
        b = e.support = {},
            D = e.isXML = function(t) {
                var e = t && (t.ownerDocument || t).documentElement;
                return e ? "HTML" !== e.nodeName : !1
            }
            ,
            A = e.setDocument = function(t) {
                var e, n, i = t ? t.ownerDocument || t : I;
                return i !== N && 9 === i.nodeType && i.documentElement ? (N = i,
                    F = i.documentElement,
                    n = i.defaultView,
                n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)),
                    P = !D(i),
                    b.attributes = r(function(t) {
                        return t.className = "i",
                            !t.getAttribute("className")
                    }),
                    b.getElementsByTagName = r(function(t) {
                        return t.appendChild(i.createComment("")),
                            !t.getElementsByTagName("*").length
                    }),
                    b.getElementsByClassName = yt.test(i.getElementsByClassName),
                    b.getById = r(function(t) {
                        return F.appendChild(t).id = W,
                        !i.getElementsByName || !i.getElementsByName(W).length
                    }),
                    b.getById ? (x.find.ID = function(t, e) {
                            if ("undefined" != typeof e.getElementById && P) {
                                var n = e.getElementById(t);
                                return n && n.parentNode ? [n] : []
                            }
                        }
                            ,
                            x.filter.ID = function(t) {
                                var e = t.replace(bt, xt);
                                return function(t) {
                                    return t.getAttribute("id") === e
                                }
                            }
                    ) : (delete x.find.ID,
                            x.filter.ID = function(t) {
                                var e = t.replace(bt, xt);
                                return function(t) {
                                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                                    return n && n.value === e
                                }
                            }
                    ),
                    x.find.TAG = b.getElementsByTagName ? function(t, e) {
                            return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : b.qsa ? e.querySelectorAll(t) : void 0
                        }
                        : function(t, e) {
                            var n, i = [], r = 0, o = e.getElementsByTagName(t);
                            if ("*" === t) {
                                for (; n = o[r++]; )
                                    1 === n.nodeType && i.push(n);
                                return i
                            }
                            return o
                        }
                    ,
                    x.find.CLASS = b.getElementsByClassName && function(t, e) {
                        return P ? e.getElementsByClassName(t) : void 0
                    }
                    ,
                    L = [],
                    Y = [],
                (b.qsa = yt.test(i.querySelectorAll)) && (r(function(t) {
                    F.appendChild(t).innerHTML = "<a id='" + W + "'></a><select id='" + W + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    t.querySelectorAll("[msallowcapture^='']").length && Y.push("[*^$]=" + nt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length || Y.push("\\[" + nt + "*(?:value|" + et + ")"),
                    t.querySelectorAll("[id~=" + W + "-]").length || Y.push("~="),
                    t.querySelectorAll(":checked").length || Y.push(":checked"),
                    t.querySelectorAll("a#" + W + "+*").length || Y.push(".#.+[+~]")
                }),
                    r(function(t) {
                        var e = i.createElement("input");
                        e.setAttribute("type", "hidden"),
                            t.appendChild(e).setAttribute("name", "D"),
                        t.querySelectorAll("[name=d]").length && Y.push("name" + nt + "*[*^$|!~]?="),
                        t.querySelectorAll(":enabled").length || Y.push(":enabled", ":disabled"),
                            t.querySelectorAll("*,:x"),
                            Y.push(",.*:")
                    })),
                (b.matchesSelector = yt.test(j = F.matches || F.webkitMatchesSelector || F.mozMatchesSelector || F.oMatchesSelector || F.msMatchesSelector)) && r(function(t) {
                    b.disconnectedMatch = j.call(t, "div"),
                        j.call(t, "[s!='']:x"),
                        L.push("!=", st)
                }),
                    Y = Y.length && new RegExp(Y.join("|")),
                    L = L.length && new RegExp(L.join("|")),
                    e = yt.test(F.compareDocumentPosition),
                    H = e || yt.test(F.contains) ? function(t, e) {
                            var n = 9 === t.nodeType ? t.documentElement : t
                                , i = e && e.parentNode;
                            return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
                        }
                        : function(t, e) {
                            if (e)
                                for (; e = e.parentNode; )
                                    if (e === t)
                                        return !0;
                            return !1
                        }
                    ,
                    B = e ? function(t, e) {
                            if (t === e)
                                return O = !0,
                                    0;
                            var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                            return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1,
                                1 & n || !b.sortDetached && e.compareDocumentPosition(t) === n ? t === i || t.ownerDocument === I && H(I, t) ? -1 : e === i || e.ownerDocument === I && H(I, e) ? 1 : E ? tt(E, t) - tt(E, e) : 0 : 4 & n ? -1 : 1)
                        }
                        : function(t, e) {
                            if (t === e)
                                return O = !0,
                                    0;
                            var n, r = 0, o = t.parentNode, a = e.parentNode, u = [t], l = [e];
                            if (!o || !a)
                                return t === i ? -1 : e === i ? 1 : o ? -1 : a ? 1 : E ? tt(E, t) - tt(E, e) : 0;
                            if (o === a)
                                return s(t, e);
                            for (n = t; n = n.parentNode; )
                                u.unshift(n);
                            for (n = e; n = n.parentNode; )
                                l.unshift(n);
                            for (; u[r] === l[r]; )
                                r++;
                            return r ? s(u[r], l[r]) : u[r] === I ? -1 : l[r] === I ? 1 : 0
                        }
                    ,
                    i) : N
            }
            ,
            e.matches = function(t, n) {
                return e(t, null, null, n)
            }
            ,
            e.matchesSelector = function(t, n) {
                if ((t.ownerDocument || t) !== N && A(t),
                        n = n.replace(ft, "='$1']"),
                    b.matchesSelector && P && (!L || !L.test(n)) && (!Y || !Y.test(n)))
                    try {
                        var i = j.call(t, n);
                        if (i || b.disconnectedMatch || t.document && 11 !== t.document.nodeType)
                            return i
                    } catch (r) {}
                return e(n, N, null, [t]).length > 0
            }
            ,
            e.contains = function(t, e) {
                return (t.ownerDocument || t) !== N && A(t),
                    H(t, e)
            }
            ,
            e.attr = function(t, e) {
                (t.ownerDocument || t) !== N && A(t);
                var n = x.attrHandle[e.toLowerCase()]
                    , i = n && V.call(x.attrHandle, e.toLowerCase()) ? n(t, e, !P) : void 0;
                return void 0 !== i ? i : b.attributes || !P ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
            }
            ,
            e.error = function(t) {
                throw new Error("Syntax error, unrecognized expression: " + t)
            }
            ,
            e.uniqueSort = function(t) {
                var e, n = [], i = 0, r = 0;
                if (O = !b.detectDuplicates,
                        E = !b.sortStable && t.slice(0),
                        t.sort(B),
                        O) {
                    for (; e = t[r++]; )
                        e === t[r] && (i = n.push(r));
                    for (; i--; )
                        t.splice(n[i], 1)
                }
                return E = null,
                    t
            }
            ,
            T = e.getText = function(t) {
                var e, n = "", i = 0, r = t.nodeType;
                if (r) {
                    if (1 === r || 9 === r || 11 === r) {
                        if ("string" == typeof t.textContent)
                            return t.textContent;
                        for (t = t.firstChild; t; t = t.nextSibling)
                            n += T(t)
                    } else if (3 === r || 4 === r)
                        return t.nodeValue
                } else
                    for (; e = t[i++]; )
                        n += T(e);
                return n
            }
            ,
            x = e.selectors = {
                cacheLength: 50,
                createPseudo: i,
                match: pt,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(t) {
                        return t[1] = t[1].replace(bt, xt),
                            t[3] = (t[3] || t[4] || t[5] || "").replace(bt, xt),
                        "~=" === t[2] && (t[3] = " " + t[3] + " "),
                            t.slice(0, 4)
                    },
                    CHILD: function(t) {
                        return t[1] = t[1].toLowerCase(),
                            "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]),
                                t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])),
                                t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]),
                            t
                    },
                    PSEUDO: function(t) {
                        var e, n = !t[6] && t[2];
                        return pt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ht.test(n) && (e = S(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e),
                            t[2] = n.slice(0, e)),
                            t.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(t) {
                        var e = t.replace(bt, xt).toLowerCase();
                        return "*" === t ? function() {
                                return !0
                            }
                            : function(t) {
                                return t.nodeName && t.nodeName.toLowerCase() === e
                            }
                    },
                    CLASS: function(t) {
                        var e = U[t + " "];
                        return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && U(t, function(t) {
                            return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(t, n, i) {
                        return function(r) {
                            var o = e.attr(r, t);
                            return null == o ? "!=" === n : n ? (o += "",
                                "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(at, " ") + " ").indexOf(i) > -1 : "|=" === n ? o === i || o.slice(0, i.length + 1) === i + "-" : !1) : !0
                        }
                    },
                    CHILD: function(t, e, n, i, r) {
                        var o = "nth" !== t.slice(0, 3)
                            , s = "last" !== t.slice(-4)
                            , a = "of-type" === e;
                        return 1 === i && 0 === r ? function(t) {
                                return !!t.parentNode
                            }
                            : function(e, n, u) {
                                var l, c, f, h, d, p, m = o !== s ? "nextSibling" : "previousSibling", g = e.parentNode, y = a && e.nodeName.toLowerCase(), v = !u && !a;
                                if (g) {
                                    if (o) {
                                        for (; m; ) {
                                            for (f = e; f = f[m]; )
                                                if (a ? f.nodeName.toLowerCase() === y : 1 === f.nodeType)
                                                    return !1;
                                            p = m = "only" === t && !p && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (p = [s ? g.firstChild : g.lastChild],
                                        s && v) {
                                        for (c = g[W] || (g[W] = {}),
                                                 l = c[t] || [],
                                                 d = l[0] === q && l[1],
                                                 h = l[0] === q && l[2],
                                                 f = d && g.childNodes[d]; f = ++d && f && f[m] || (h = d = 0) || p.pop(); )
                                            if (1 === f.nodeType && ++h && f === e) {
                                                c[t] = [q, d, h];
                                                break
                                            }
                                    } else if (v && (l = (e[W] || (e[W] = {}))[t]) && l[0] === q)
                                        h = l[1];
                                    else
                                        for (; (f = ++d && f && f[m] || (h = d = 0) || p.pop()) && ((a ? f.nodeName.toLowerCase() !== y : 1 !== f.nodeType) || !++h || (v && ((f[W] || (f[W] = {}))[t] = [q, h]),
                                        f !== e)); )
                                            ;
                                    return h -= r,
                                    h === i || h % i === 0 && h / i >= 0
                                }
                            }
                    },
                    PSEUDO: function(t, n) {
                        var r, o = x.pseudos[t] || x.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                        return o[W] ? o(n) : o.length > 1 ? (r = [t, t, "", n],
                                x.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function(t, e) {
                                    for (var i, r = o(t, n), s = r.length; s--; )
                                        i = tt(t, r[s]),
                                            t[i] = !(e[i] = r[s])
                                }) : function(t) {
                                    return o(t, 0, r)
                                }
                        ) : o
                    }
                },
                pseudos: {
                    not: i(function(t) {
                        var e = []
                            , n = []
                            , r = C(t.replace(ut, "$1"));
                        return r[W] ? i(function(t, e, n, i) {
                            for (var o, s = r(t, null, i, []), a = t.length; a--; )
                                (o = s[a]) && (t[a] = !(e[a] = o))
                        }) : function(t, i, o) {
                            return e[0] = t,
                                r(e, null, o, n),
                                e[0] = null,
                                !n.pop()
                        }
                    }),
                    has: i(function(t) {
                        return function(n) {
                            return e(t, n).length > 0
                        }
                    }),
                    contains: i(function(t) {
                        return t = t.replace(bt, xt),
                            function(e) {
                                return (e.textContent || e.innerText || T(e)).indexOf(t) > -1
                            }
                    }),
                    lang: i(function(t) {
                        return dt.test(t || "") || e.error("unsupported lang: " + t),
                            t = t.replace(bt, xt).toLowerCase(),
                            function(e) {
                                var n;
                                do
                                    if (n = P ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                        return n = n.toLowerCase(),
                                        n === t || 0 === n.indexOf(t + "-");
                                while ((e = e.parentNode) && 1 === e.nodeType);return !1
                            }
                    }),
                    target: function(e) {
                        var n = t.location && t.location.hash;
                        return n && n.slice(1) === e.id
                    },
                    root: function(t) {
                        return t === F
                    },
                    focus: function(t) {
                        return t === N.activeElement && (!N.hasFocus || N.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                    },
                    enabled: function(t) {
                        return t.disabled === !1
                    },
                    disabled: function(t) {
                        return t.disabled === !0
                    },
                    checked: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && !!t.checked || "option" === e && !!t.selected
                    },
                    selected: function(t) {
                        return t.parentNode && t.parentNode.selectedIndex,
                        t.selected === !0
                    },
                    empty: function(t) {
                        for (t = t.firstChild; t; t = t.nextSibling)
                            if (t.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(t) {
                        return !x.pseudos.empty(t)
                    },
                    header: function(t) {
                        return gt.test(t.nodeName)
                    },
                    input: function(t) {
                        return mt.test(t.nodeName)
                    },
                    button: function(t) {
                        var e = t.nodeName.toLowerCase();
                        return "input" === e && "button" === t.type || "button" === e
                    },
                    text: function(t) {
                        var e;
                        return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                    },
                    first: l(function() {
                        return [0]
                    }),
                    last: l(function(t, e) {
                        return [e - 1]
                    }),
                    eq: l(function(t, e, n) {
                        return [0 > n ? n + e : n]
                    }),
                    even: l(function(t, e) {
                        for (var n = 0; e > n; n += 2)
                            t.push(n);
                        return t
                    }),
                    odd: l(function(t, e) {
                        for (var n = 1; e > n; n += 2)
                            t.push(n);
                        return t
                    }),
                    lt: l(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; --i >= 0; )
                            t.push(i);
                        return t
                    }),
                    gt: l(function(t, e, n) {
                        for (var i = 0 > n ? n + e : n; ++i < e; )
                            t.push(i);
                        return t
                    })
                }
            },
            x.pseudos.nth = x.pseudos.eq;
        for (w in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            x.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        })
            x.pseudos[w] = u(w);
        return f.prototype = x.filters = x.pseudos,
            x.setFilters = new f,
            S = e.tokenize = function(t, n) {
                var i, r, o, s, a, u, l, c = R[t + " "];
                if (c)
                    return n ? 0 : c.slice(0);
                for (a = t,
                         u = [],
                         l = x.preFilter; a; ) {
                    i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                        u.push(o = [])),
                        i = !1,
                    (r = ct.exec(a)) && (i = r.shift(),
                        o.push({
                            value: i,
                            type: r[0].replace(ut, " ")
                        }),
                        a = a.slice(i.length));
                    for (s in x.filter)
                        !(r = pt[s].exec(a)) || l[s] && !(r = l[s](r)) || (i = r.shift(),
                            o.push({
                                value: i,
                                type: s,
                                matches: r
                            }),
                            a = a.slice(i.length));
                    if (!i)
                        break
                }
                return n ? a.length : a ? e.error(t) : R(t, u).slice(0)
            }
            ,
            C = e.compile = function(t, e) {
                var n, i = [], r = [], o = $[t + " "];
                if (!o) {
                    for (e || (e = S(t)),
                             n = e.length; n--; )
                        o = v(e[n]),
                            o[W] ? i.push(o) : r.push(o);
                    o = $(t, _(r, i)),
                        o.selector = t
                }
                return o
            }
            ,
            k = e.select = function(t, e, n, i) {
                var r, o, s, a, u, l = "function" == typeof t && t, f = !i && S(t = l.selector || t);
                if (n = n || [],
                    1 === f.length) {
                    if (o = f[0] = f[0].slice(0),
                        o.length > 2 && "ID" === (s = o[0]).type && b.getById && 9 === e.nodeType && P && x.relative[o[1].type]) {
                        if (e = (x.find.ID(s.matches[0].replace(bt, xt), e) || [])[0],
                                !e)
                            return n;
                        l && (e = e.parentNode),
                            t = t.slice(o.shift().value.length)
                    }
                    for (r = pt.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r],
                        !x.relative[a = s.type]); )
                        if ((u = x.find[a]) && (i = u(s.matches[0].replace(bt, xt), _t.test(o[0].type) && c(e.parentNode) || e))) {
                            if (o.splice(r, 1),
                                    t = i.length && h(o),
                                    !t)
                                return Z.apply(n, i),
                                    n;
                            break
                        }
                }
                return (l || C(t, f))(i, e, !P, n, _t.test(t) && c(e.parentNode) || e),
                    n
            }
            ,
            b.sortStable = W.split("").sort(B).join("") === W,
            b.detectDuplicates = !!O,
            A(),
            b.sortDetached = r(function(t) {
                return 1 & t.compareDocumentPosition(N.createElement("div"))
            }),
        r(function(t) {
            return t.innerHTML = "<a href='#'></a>",
            "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(t, e, n) {
            return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }),
        b.attributes && r(function(t) {
            return t.innerHTML = "<input/>",
                t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
        }) || o("value", function(t, e, n) {
            return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
        }),
        r(function(t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function(t, e, n) {
            var i;
            return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }),
            e
    }(t);
    K.find = rt,
        K.expr = rt.selectors,
        K.expr[":"] = K.expr.pseudos,
        K.unique = rt.uniqueSort,
        K.text = rt.getText,
        K.isXMLDoc = rt.isXML,
        K.contains = rt.contains;
    var ot = K.expr.match.needsContext
        , st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
        , at = /^.[^:#\[\.,]*$/;
    K.filter = function(t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"),
            1 === e.length && 1 === i.nodeType ? K.find.matchesSelector(i, t) ? [i] : [] : K.find.matches(t, K.grep(e, function(t) {
                return 1 === t.nodeType
            }))
    }
        ,
        K.fn.extend({
            find: function(t) {
                var e, n = this.length, i = [], r = this;
                if ("string" != typeof t)
                    return this.pushStack(K(t).filter(function() {
                        for (e = 0; n > e; e++)
                            if (K.contains(r[e], this))
                                return !0
                    }));
                for (e = 0; n > e; e++)
                    K.find(t, r[e], i);
                return i = this.pushStack(n > 1 ? K.unique(i) : i),
                    i.selector = this.selector ? this.selector + " " + t : t,
                    i
            },
            filter: function(t) {
                return this.pushStack(i(this, t || [], !1))
            },
            not: function(t) {
                return this.pushStack(i(this, t || [], !0))
            },
            is: function(t) {
                return !!i(this, "string" == typeof t && ot.test(t) ? K(t) : t || [], !1).length
            }
        });
    var ut, lt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, ct = K.fn.init = function(t, e) {
            var n, i;
            if (!t)
                return this;
            if ("string" == typeof t) {
                if (n = "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3 ? [null, t, null] : lt.exec(t),
                    !n || !n[1] && e)
                    return !e || e.jquery ? (e || ut).find(t) : this.constructor(e).find(t);
                if (n[1]) {
                    if (e = e instanceof K ? e[0] : e,
                            K.merge(this, K.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : X, !0)),
                        st.test(n[1]) && K.isPlainObject(e))
                        for (n in e)
                            K.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
                    return this
                }
                return i = X.getElementById(n[2]),
                i && i.parentNode && (this.length = 1,
                    this[0] = i),
                    this.context = X,
                    this.selector = t,
                    this
            }
            return t.nodeType ? (this.context = this[0] = t,
                this.length = 1,
                this) : K.isFunction(t) ? "undefined" != typeof ut.ready ? ut.ready(t) : t(K) : (void 0 !== t.selector && (this.selector = t.selector,
                this.context = t.context),
                K.makeArray(t, this))
        }
    ;
    ct.prototype = K.fn,
        ut = K(X);
    var ft = /^(?:parents|prev(?:Until|All))/
        , ht = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    K.extend({
        dir: function(t, e, n) {
            for (var i = [], r = void 0 !== n; (t = t[e]) && 9 !== t.nodeType; )
                if (1 === t.nodeType) {
                    if (r && K(t).is(n))
                        break;
                    i.push(t)
                }
            return i
        },
        sibling: function(t, e) {
            for (var n = []; t; t = t.nextSibling)
                1 === t.nodeType && t !== e && n.push(t);
            return n
        }
    }),
        K.fn.extend({
            has: function(t) {
                var e = K(t, this)
                    , n = e.length;
                return this.filter(function() {
                    for (var t = 0; n > t; t++)
                        if (K.contains(this, e[t]))
                            return !0
                })
            },
            closest: function(t, e) {
                for (var n, i = 0, r = this.length, o = [], s = ot.test(t) || "string" != typeof t ? K(t, e || this.context) : 0; r > i; i++)
                    for (n = this[i]; n && n !== e; n = n.parentNode)
                        if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && K.find.matchesSelector(n, t))) {
                            o.push(n);
                            break
                        }
                return this.pushStack(o.length > 1 ? K.unique(o) : o)
            },
            index: function(t) {
                return t ? "string" == typeof t ? B.call(K(t), this[0]) : B.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(t, e) {
                return this.pushStack(K.unique(K.merge(this.get(), K(t, e))))
            },
            addBack: function(t) {
                return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
            }
        }),
        K.each({
            parent: function(t) {
                var e = t.parentNode;
                return e && 11 !== e.nodeType ? e : null
            },
            parents: function(t) {
                return K.dir(t, "parentNode")
            },
            parentsUntil: function(t, e, n) {
                return K.dir(t, "parentNode", n)
            },
            next: function(t) {
                return r(t, "nextSibling")
            },
            prev: function(t) {
                return r(t, "previousSibling")
            },
            nextAll: function(t) {
                return K.dir(t, "nextSibling")
            },
            prevAll: function(t) {
                return K.dir(t, "previousSibling")
            },
            nextUntil: function(t, e, n) {
                return K.dir(t, "nextSibling", n)
            },
            prevUntil: function(t, e, n) {
                return K.dir(t, "previousSibling", n)
            },
            siblings: function(t) {
                return K.sibling((t.parentNode || {}).firstChild, t)
            },
            children: function(t) {
                return K.sibling(t.firstChild)
            },
            contents: function(t) {
                return t.contentDocument || K.merge([], t.childNodes)
            }
        }, function(t, e) {
            K.fn[t] = function(n, i) {
                var r = K.map(this, e, n);
                return "Until" !== t.slice(-5) && (i = n),
                i && "string" == typeof i && (r = K.filter(i, r)),
                this.length > 1 && (ht[t] || K.unique(r),
                ft.test(t) && r.reverse()),
                    this.pushStack(r)
            }
        });
    var dt = /\S+/g
        , pt = {};
    K.Callbacks = function(t) {
        t = "string" == typeof t ? pt[t] || o(t) : K.extend({}, t);
        var e, n, i, r, s, a, u = [], l = !t.once && [], c = function(o) {
            for (e = t.memory && o,
                     n = !0,
                     a = r || 0,
                     r = 0,
                     s = u.length,
                     i = !0; u && s > a; a++)
                if (u[a].apply(o[0], o[1]) === !1 && t.stopOnFalse) {
                    e = !1;
                    break
                }
            i = !1,
            u && (l ? l.length && c(l.shift()) : e ? u = [] : f.disable())
        }, f = {
            add: function() {
                if (u) {
                    var n = u.length;
                    !function o(e) {
                        K.each(e, function(e, n) {
                            var i = K.type(n);
                            "function" === i ? t.unique && f.has(n) || u.push(n) : n && n.length && "string" !== i && o(n)
                        })
                    }(arguments),
                        i ? s = u.length : e && (r = n,
                            c(e))
                }
                return this
            },
            remove: function() {
                return u && K.each(arguments, function(t, e) {
                    for (var n; (n = K.inArray(e, u, n)) > -1; )
                        u.splice(n, 1),
                        i && (s >= n && s--,
                        a >= n && a--)
                }),
                    this
            },
            has: function(t) {
                return t ? K.inArray(t, u) > -1 : !(!u || !u.length)
            },
            empty: function() {
                return u = [],
                    s = 0,
                    this
            },
            disable: function() {
                return u = l = e = void 0,
                    this
            },
            disabled: function() {
                return !u
            },
            lock: function() {
                return l = void 0,
                e || f.disable(),
                    this
            },
            locked: function() {
                return !l
            },
            fireWith: function(t, e) {
                return !u || n && !l || (e = e || [],
                    e = [t, e.slice ? e.slice() : e],
                    i ? l.push(e) : c(e)),
                    this
            },
            fire: function() {
                return f.fireWith(this, arguments),
                    this
            },
            fired: function() {
                return !!n
            }
        };
        return f
    }
        ,
        K.extend({
            Deferred: function(t) {
                var e = [["resolve", "done", K.Callbacks("once memory"), "resolved"], ["reject", "fail", K.Callbacks("once memory"), "rejected"], ["notify", "progress", K.Callbacks("memory")]]
                    , n = "pending"
                    , i = {
                    state: function() {
                        return n
                    },
                    always: function() {
                        return r.done(arguments).fail(arguments),
                            this
                    },
                    then: function() {
                        var t = arguments;
                        return K.Deferred(function(n) {
                            K.each(e, function(e, o) {
                                var s = K.isFunction(t[e]) && t[e];
                                r[o[1]](function() {
                                    var t = s && s.apply(this, arguments);
                                    t && K.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }),
                                t = null
                        }).promise()
                    },
                    promise: function(t) {
                        return null != t ? K.extend(t, i) : i
                    }
                }
                    , r = {};
                return i.pipe = i.then,
                    K.each(e, function(t, o) {
                        var s = o[2]
                            , a = o[3];
                        i[o[1]] = s.add,
                        a && s.add(function() {
                            n = a
                        }, e[1 ^ t][2].disable, e[2][2].lock),
                            r[o[0]] = function() {
                                return r[o[0] + "With"](this === r ? i : this, arguments),
                                    this
                            }
                            ,
                            r[o[0] + "With"] = s.fireWith
                    }),
                    i.promise(r),
                t && t.call(r, r),
                    r
            },
            when: function(t) {
                var e, n, i, r = 0, o = U.call(arguments), s = o.length, a = 1 !== s || t && K.isFunction(t.promise) ? s : 0, u = 1 === a ? t : K.Deferred(), l = function(t, n, i) {
                    return function(r) {
                        n[t] = this,
                            i[t] = arguments.length > 1 ? U.call(arguments) : r,
                            i === e ? u.notifyWith(n, i) : --a || u.resolveWith(n, i)
                    }
                };
                if (s > 1)
                    for (e = new Array(s),
                             n = new Array(s),
                             i = new Array(s); s > r; r++)
                        o[r] && K.isFunction(o[r].promise) ? o[r].promise().done(l(r, i, o)).fail(u.reject).progress(l(r, n, e)) : --a;
                return a || u.resolveWith(i, o),
                    u.promise()
            }
        });
    var mt;
    K.fn.ready = function(t) {
        return K.ready.promise().done(t),
            this
    }
        ,
        K.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(t) {
                t ? K.readyWait++ : K.ready(!0)
            },
            ready: function(t) {
                (t === !0 ? --K.readyWait : K.isReady) || (K.isReady = !0,
                t !== !0 && --K.readyWait > 0 || (mt.resolveWith(X, [K]),
                K.fn.triggerHandler && (K(X).triggerHandler("ready"),
                    K(X).off("ready"))))
            }
        }),
        K.ready.promise = function(e) {
            return mt || (mt = K.Deferred(),
                "complete" === X.readyState ? setTimeout(K.ready) : (X.addEventListener("DOMContentLoaded", s, !1),
                    t.addEventListener("load", s, !1))),
                mt.promise(e)
        }
        ,
        K.ready.promise();
    var gt = K.access = function(t, e, n, i, r, o, s) {
            var a = 0
                , u = t.length
                , l = null == n;
            if ("object" === K.type(n)) {
                r = !0;
                for (a in n)
                    K.access(t, e, a, n[a], !0, o, s)
            } else if (void 0 !== i && (r = !0,
                K.isFunction(i) || (s = !0),
                l && (s ? (e.call(t, i),
                    e = null) : (l = e,
                        e = function(t, e, n) {
                            return l.call(K(t), n)
                        }
                )),
                    e))
                for (; u > a; a++)
                    e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : l ? e.call(t) : u ? e(t[0], n) : o
        }
    ;
    K.acceptData = function(t) {
        return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType
    }
        ,
        a.uid = 1,
        a.accepts = K.acceptData,
        a.prototype = {
            key: function(t) {
                if (!a.accepts(t))
                    return 0;
                var e = {}
                    , n = t[this.expando];
                if (!n) {
                    n = a.uid++;
                    try {
                        e[this.expando] = {
                            value: n
                        },
                            Object.defineProperties(t, e)
                    } catch (i) {
                        e[this.expando] = n,
                            K.extend(t, e)
                    }
                }
                return this.cache[n] || (this.cache[n] = {}),
                    n
            },
            set: function(t, e, n) {
                var i, r = this.key(t), o = this.cache[r];
                if ("string" == typeof e)
                    o[e] = n;
                else if (K.isEmptyObject(o))
                    K.extend(this.cache[r], e);
                else
                    for (i in e)
                        o[i] = e[i];
                return o
            },
            get: function(t, e) {
                var n = this.cache[this.key(t)];
                return void 0 === e ? n : n[e]
            },
            access: function(t, e, n) {
                var i;
                return void 0 === e || e && "string" == typeof e && void 0 === n ? (i = this.get(t, e),
                    void 0 !== i ? i : this.get(t, K.camelCase(e))) : (this.set(t, e, n),
                    void 0 !== n ? n : e)
            },
            remove: function(t, e) {
                var n, i, r, o = this.key(t), s = this.cache[o];
                if (void 0 === e)
                    this.cache[o] = {};
                else {
                    K.isArray(e) ? i = e.concat(e.map(K.camelCase)) : (r = K.camelCase(e),
                        e in s ? i = [e, r] : (i = r,
                            i = i in s ? [i] : i.match(dt) || [])),
                        n = i.length;
                    for (; n--; )
                        delete s[i[n]]
                }
            },
            hasData: function(t) {
                return !K.isEmptyObject(this.cache[t[this.expando]] || {})
            },
            discard: function(t) {
                t[this.expando] && delete this.cache[t[this.expando]]
            }
        };
    var yt = new a
        , vt = new a
        , _t = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
        , wt = /([A-Z])/g;
    K.extend({
        hasData: function(t) {
            return vt.hasData(t) || yt.hasData(t)
        },
        data: function(t, e, n) {
            return vt.access(t, e, n)
        },
        removeData: function(t, e) {
            vt.remove(t, e)
        },
        _data: function(t, e, n) {
            return yt.access(t, e, n)
        },
        _removeData: function(t, e) {
            yt.remove(t, e)
        }
    }),
        K.fn.extend({
            data: function(t, e) {
                var n, i, r, o = this[0], s = o && o.attributes;
                if (void 0 === t) {
                    if (this.length && (r = vt.get(o),
                        1 === o.nodeType && !yt.get(o, "hasDataAttrs"))) {
                        for (n = s.length; n--; )
                            s[n] && (i = s[n].name,
                            0 === i.indexOf("data-") && (i = K.camelCase(i.slice(5)),
                                u(o, i, r[i])));
                        yt.set(o, "hasDataAttrs", !0)
                    }
                    return r
                }
                return "object" == typeof t ? this.each(function() {
                    vt.set(this, t)
                }) : gt(this, function(e) {
                    var n, i = K.camelCase(t);
                    if (o && void 0 === e) {
                        if (n = vt.get(o, t),
                            void 0 !== n)
                            return n;
                        if (n = vt.get(o, i),
                            void 0 !== n)
                            return n;
                        if (n = u(o, i, void 0),
                            void 0 !== n)
                            return n
                    } else
                        this.each(function() {
                            var n = vt.get(this, i);
                            vt.set(this, i, e),
                            -1 !== t.indexOf("-") && void 0 !== n && vt.set(this, t, e)
                        })
                }, null, e, arguments.length > 1, null, !0)
            },
            removeData: function(t) {
                return this.each(function() {
                    vt.remove(this, t)
                })
            }
        }),
        K.extend({
            queue: function(t, e, n) {
                var i;
                return t ? (e = (e || "fx") + "queue",
                    i = yt.get(t, e),
                n && (!i || K.isArray(n) ? i = yt.access(t, e, K.makeArray(n)) : i.push(n)),
                i || []) : void 0
            },
            dequeue: function(t, e) {
                e = e || "fx";
                var n = K.queue(t, e)
                    , i = n.length
                    , r = n.shift()
                    , o = K._queueHooks(t, e)
                    , s = function() {
                    K.dequeue(t, e)
                };
                "inprogress" === r && (r = n.shift(),
                    i--),
                r && ("fx" === e && n.unshift("inprogress"),
                    delete o.stop,
                    r.call(t, s, o)),
                !i && o && o.empty.fire()
            },
            _queueHooks: function(t, e) {
                var n = e + "queueHooks";
                return yt.get(t, n) || yt.access(t, n, {
                    empty: K.Callbacks("once memory").add(function() {
                        yt.remove(t, [e + "queue", n])
                    })
                })
            }
        }),
        K.fn.extend({
            queue: function(t, e) {
                var n = 2;
                return "string" != typeof t && (e = t,
                    t = "fx",
                    n--),
                    arguments.length < n ? K.queue(this[0], t) : void 0 === e ? this : this.each(function() {
                        var n = K.queue(this, t, e);
                        K._queueHooks(this, t),
                        "fx" === t && "inprogress" !== n[0] && K.dequeue(this, t)
                    })
            },
            dequeue: function(t) {
                return this.each(function() {
                    K.dequeue(this, t)
                })
            },
            clearQueue: function(t) {
                return this.queue(t || "fx", [])
            },
            promise: function(t, e) {
                var n, i = 1, r = K.Deferred(), o = this, s = this.length, a = function() {
                    --i || r.resolveWith(o, [o])
                };
                for ("string" != typeof t && (e = t,
                    t = void 0),
                         t = t || "fx"; s--; )
                    n = yt.get(o[s], t + "queueHooks"),
                    n && n.empty && (i++,
                        n.empty.add(a));
                return a(),
                    r.promise(e)
            }
        });
    var bt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
        , xt = ["Top", "Right", "Bottom", "Left"]
        , Tt = function(t, e) {
        return t = e || t,
        "none" === K.css(t, "display") || !K.contains(t.ownerDocument, t)
    }
        , Dt = /^(?:checkbox|radio)$/i;
    !function() {
        var t = X.createDocumentFragment()
            , e = t.appendChild(X.createElement("div"))
            , n = X.createElement("input");
        n.setAttribute("type", "radio"),
            n.setAttribute("checked", "checked"),
            n.setAttribute("name", "t"),
            e.appendChild(n),
            J.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
            e.innerHTML = "<textarea>x</textarea>",
            J.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue
    }();
    var St = "undefined";
    J.focusinBubbles = "onfocusin"in t;
    var Ct = /^key/
        , kt = /^(?:mouse|pointer|contextmenu)|click/
        , Mt = /^(?:focusinfocus|focusoutblur)$/
        , Et = /^([^.]*)(?:\.(.+)|)$/;
    K.event = {
        global: {},
        add: function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, m, g = yt.get(t);
            if (g)
                for (n.handler && (o = n,
                    n = o.handler,
                    r = o.selector),
                     n.guid || (n.guid = K.guid++),
                     (u = g.events) || (u = g.events = {}),
                     (s = g.handle) || (s = g.handle = function(e) {
                             return typeof K !== St && K.event.triggered !== e.type ? K.event.dispatch.apply(t, arguments) : void 0
                         }
                     ),
                         e = (e || "").match(dt) || [""],
                         l = e.length; l--; )
                    a = Et.exec(e[l]) || [],
                        d = m = a[1],
                        p = (a[2] || "").split(".").sort(),
                    d && (f = K.event.special[d] || {},
                        d = (r ? f.delegateType : f.bindType) || d,
                        f = K.event.special[d] || {},
                        c = K.extend({
                            type: d,
                            origType: m,
                            data: i,
                            handler: n,
                            guid: n.guid,
                            selector: r,
                            needsContext: r && K.expr.match.needsContext.test(r),
                            namespace: p.join(".")
                        }, o),
                    (h = u[d]) || (h = u[d] = [],
                        h.delegateCount = 0,
                    f.setup && f.setup.call(t, i, p, s) !== !1 || t.addEventListener && t.addEventListener(d, s, !1)),
                    f.add && (f.add.call(t, c),
                    c.handler.guid || (c.handler.guid = n.guid)),
                        r ? h.splice(h.delegateCount++, 0, c) : h.push(c),
                        K.event.global[d] = !0)
        },
        remove: function(t, e, n, i, r) {
            var o, s, a, u, l, c, f, h, d, p, m, g = yt.hasData(t) && yt.get(t);
            if (g && (u = g.events)) {
                for (e = (e || "").match(dt) || [""],
                         l = e.length; l--; )
                    if (a = Et.exec(e[l]) || [],
                            d = m = a[1],
                            p = (a[2] || "").split(".").sort(),
                            d) {
                        for (f = K.event.special[d] || {},
                                 d = (i ? f.delegateType : f.bindType) || d,
                                 h = u[d] || [],
                                 a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                                 s = o = h.length; o--; )
                            c = h[o],
                            !r && m !== c.origType || n && n.guid !== c.guid || a && !a.test(c.namespace) || i && i !== c.selector && ("**" !== i || !c.selector) || (h.splice(o, 1),
                            c.selector && h.delegateCount--,
                            f.remove && f.remove.call(t, c));
                        s && !h.length && (f.teardown && f.teardown.call(t, p, g.handle) !== !1 || K.removeEvent(t, d, g.handle),
                            delete u[d])
                    } else
                        for (d in u)
                            K.event.remove(t, d + e[l], n, i, !0);
                K.isEmptyObject(u) && (delete g.handle,
                    yt.remove(t, "events"))
            }
        },
        trigger: function(e, n, i, r) {
            var o, s, a, u, l, c, f, h = [i || X], d = Q.call(e, "type") ? e.type : e, p = Q.call(e, "namespace") ? e.namespace.split(".") : [];
            if (s = a = i = i || X,
                3 !== i.nodeType && 8 !== i.nodeType && !Mt.test(d + K.event.triggered) && (d.indexOf(".") >= 0 && (p = d.split("."),
                    d = p.shift(),
                    p.sort()),
                    l = d.indexOf(":") < 0 && "on" + d,
                    e = e[K.expando] ? e : new K.Event(d,"object" == typeof e && e),
                    e.isTrigger = r ? 2 : 3,
                    e.namespace = p.join("."),
                    e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                    e.result = void 0,
                e.target || (e.target = i),
                    n = null == n ? [e] : K.makeArray(n, [e]),
                    f = K.event.special[d] || {},
                r || !f.trigger || f.trigger.apply(i, n) !== !1)) {
                if (!r && !f.noBubble && !K.isWindow(i)) {
                    for (u = f.delegateType || d,
                         Mt.test(u + d) || (s = s.parentNode); s; s = s.parentNode)
                        h.push(s),
                            a = s;
                    a === (i.ownerDocument || X) && h.push(a.defaultView || a.parentWindow || t)
                }
                for (o = 0; (s = h[o++]) && !e.isPropagationStopped(); )
                    e.type = o > 1 ? u : f.bindType || d,
                        c = (yt.get(s, "events") || {})[e.type] && yt.get(s, "handle"),
                    c && c.apply(s, n),
                        c = l && s[l],
                    c && c.apply && K.acceptData(s) && (e.result = c.apply(s, n),
                    e.result === !1 && e.preventDefault());
                return e.type = d,
                r || e.isDefaultPrevented() || f._default && f._default.apply(h.pop(), n) !== !1 || !K.acceptData(i) || l && K.isFunction(i[d]) && !K.isWindow(i) && (a = i[l],
                a && (i[l] = null),
                    K.event.triggered = d,
                    i[d](),
                    K.event.triggered = void 0,
                a && (i[l] = a)),
                    e.result
            }
        },
        dispatch: function(t) {
            t = K.event.fix(t);
            var e, n, i, r, o, s = [], a = U.call(arguments), u = (yt.get(this, "events") || {})[t.type] || [], l = K.event.special[t.type] || {};
            if (a[0] = t,
                    t.delegateTarget = this,
                !l.preDispatch || l.preDispatch.call(this, t) !== !1) {
                for (s = K.event.handlers.call(this, t, u),
                         e = 0; (r = s[e++]) && !t.isPropagationStopped(); )
                    for (t.currentTarget = r.elem,
                             n = 0; (o = r.handlers[n++]) && !t.isImmediatePropagationStopped(); )
                        t.namespace_re && !t.namespace_re.test(o.namespace) || (t.handleObj = o,
                            t.data = o.data,
                            i = ((K.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a),
                        void 0 !== i && (t.result = i) === !1 && (t.preventDefault(),
                            t.stopPropagation()));
                return l.postDispatch && l.postDispatch.call(this, t),
                    t.result
            }
        },
        handlers: function(t, e) {
            var n, i, r, o, s = [], a = e.delegateCount, u = t.target;
            if (a && u.nodeType && (!t.button || "click" !== t.type))
                for (; u !== this; u = u.parentNode || this)
                    if (u.disabled !== !0 || "click" !== t.type) {
                        for (i = [],
                                 n = 0; a > n; n++)
                            o = e[n],
                                r = o.selector + " ",
                            void 0 === i[r] && (i[r] = o.needsContext ? K(r, this).index(u) >= 0 : K.find(r, this, null, [u]).length),
                            i[r] && i.push(o);
                        i.length && s.push({
                            elem: u,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }),
                s
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode),
                    t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(t, e) {
                var n, i, r, o = e.button;
                return null == t.pageX && null != e.clientX && (n = t.target.ownerDocument || X,
                    i = n.documentElement,
                    r = n.body,
                    t.pageX = e.clientX + (i && i.scrollLeft || r && r.scrollLeft || 0) - (i && i.clientLeft || r && r.clientLeft || 0),
                    t.pageY = e.clientY + (i && i.scrollTop || r && r.scrollTop || 0) - (i && i.clientTop || r && r.clientTop || 0)),
                t.which || void 0 === o || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                    t
            }
        },
        fix: function(t) {
            if (t[K.expando])
                return t;
            var e, n, i, r = t.type, o = t, s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = kt.test(r) ? this.mouseHooks : Ct.test(r) ? this.keyHooks : {}),
                     i = s.props ? this.props.concat(s.props) : this.props,
                     t = new K.Event(o),
                     e = i.length; e--; )
                n = i[e],
                    t[n] = o[n];
            return t.target || (t.target = X),
            3 === t.target.nodeType && (t.target = t.target.parentNode),
                s.filter ? s.filter(t, o) : t
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    return this !== f() && this.focus ? (this.focus(),
                        !1) : void 0
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === f() && this.blur ? (this.blur(),
                        !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return "checkbox" === this.type && this.click && K.nodeName(this, "input") ? (this.click(),
                        !1) : void 0
                },
                _default: function(t) {
                    return K.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(t) {
                    void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function(t, e, n, i) {
            var r = K.extend(new K.Event, n, {
                type: t,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? K.event.trigger(r, null, e) : K.event.dispatch.call(e, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
        K.removeEvent = function(t, e, n) {
            t.removeEventListener && t.removeEventListener(e, n, !1)
        }
        ,
        K.Event = function(t, e) {
            return this instanceof K.Event ? (t && t.type ? (this.originalEvent = t,
                this.type = t.type,
                this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? l : c) : this.type = t,
            e && K.extend(this, e),
                this.timeStamp = t && t.timeStamp || K.now(),
                void (this[K.expando] = !0)) : new K.Event(t,e)
        }
        ,
        K.Event.prototype = {
            isDefaultPrevented: c,
            isPropagationStopped: c,
            isImmediatePropagationStopped: c,
            preventDefault: function() {
                var t = this.originalEvent;
                this.isDefaultPrevented = l,
                t && t.preventDefault && t.preventDefault()
            },
            stopPropagation: function() {
                var t = this.originalEvent;
                this.isPropagationStopped = l,
                t && t.stopPropagation && t.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var t = this.originalEvent;
                this.isImmediatePropagationStopped = l,
                t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
                    this.stopPropagation()
            }
        },
        K.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(t, e) {
            K.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var n, i = this, r = t.relatedTarget, o = t.handleObj;
                    return r && (r === i || K.contains(i, r)) || (t.type = o.origType,
                        n = o.handler.apply(this, arguments),
                        t.type = e),
                        n
                }
            }
        }),
    J.focusinBubbles || K.each({
        focus: "focusin",
        blur: "focusout"
    }, function(t, e) {
        var n = function(t) {
            K.event.simulate(e, t.target, K.event.fix(t), !0)
        };
        K.event.special[e] = {
            setup: function() {
                var i = this.ownerDocument || this
                    , r = yt.access(i, e);
                r || i.addEventListener(t, n, !0),
                    yt.access(i, e, (r || 0) + 1)
            },
            teardown: function() {
                var i = this.ownerDocument || this
                    , r = yt.access(i, e) - 1;
                r ? yt.access(i, e, r) : (i.removeEventListener(t, n, !0),
                    yt.remove(i, e))
            }
        }
    }),
        K.fn.extend({
            on: function(t, e, n, i, r) {
                var o, s;
                if ("object" == typeof t) {
                    "string" != typeof e && (n = n || e,
                        e = void 0);
                    for (s in t)
                        this.on(s, e, n, t[s], r);
                    return this
                }
                if (null == n && null == i ? (i = e,
                        n = e = void 0) : null == i && ("string" == typeof e ? (i = n,
                        n = void 0) : (i = n,
                        n = e,
                        e = void 0)),
                    i === !1)
                    i = c;
                else if (!i)
                    return this;
                return 1 === r && (o = i,
                    i = function(t) {
                        return K().off(t),
                            o.apply(this, arguments)
                    }
                    ,
                    i.guid = o.guid || (o.guid = K.guid++)),
                    this.each(function() {
                        K.event.add(this, t, i, n, e)
                    })
            },
            one: function(t, e, n, i) {
                return this.on(t, e, n, i, 1)
            },
            off: function(t, e, n) {
                var i, r;
                if (t && t.preventDefault && t.handleObj)
                    return i = t.handleObj,
                        K(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler),
                        this;
                if ("object" == typeof t) {
                    for (r in t)
                        this.off(r, e, t[r]);
                    return this
                }
                return e !== !1 && "function" != typeof e || (n = e,
                    e = void 0),
                n === !1 && (n = c),
                    this.each(function() {
                        K.event.remove(this, t, n, e)
                    })
            },
            trigger: function(t, e) {
                return this.each(function() {
                    K.event.trigger(t, e, this)
                })
            },
            triggerHandler: function(t, e) {
                var n = this[0];
                return n ? K.event.trigger(t, e, n, !0) : void 0
            }
        });
    var Ot = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
        , At = /<([\w:]+)/
        , Nt = /<|&#?\w+;/
        , Ft = /<(?:script|style|link)/i
        , Pt = /checked\s*(?:[^=]|=\s*.checked.)/i
        , Yt = /^$|\/(?:java|ecma)script/i
        , Lt = /^true\/(.*)/
        , jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
        , Ht = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        thead: [1, "<table>", "</table>"],
        col: [2, "<table><colgroup>", "</colgroup></table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: [0, "", ""]
    };
    Ht.optgroup = Ht.option,
        Ht.tbody = Ht.tfoot = Ht.colgroup = Ht.caption = Ht.thead,
        Ht.th = Ht.td,
        K.extend({
            clone: function(t, e, n) {
                var i, r, o, s, a = t.cloneNode(!0), u = K.contains(t.ownerDocument, t);
                if (!(J.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || K.isXMLDoc(t)))
                    for (s = y(a),
                             o = y(t),
                             i = 0,
                             r = o.length; r > i; i++)
                        v(o[i], s[i]);
                if (e)
                    if (n)
                        for (o = o || y(t),
                                 s = s || y(a),
                                 i = 0,
                                 r = o.length; r > i; i++)
                            g(o[i], s[i]);
                    else
                        g(t, a);
                return s = y(a, "script"),
                s.length > 0 && m(s, !u && y(t, "script")),
                    a
            },
            buildFragment: function(t, e, n, i) {
                for (var r, o, s, a, u, l, c = e.createDocumentFragment(), f = [], h = 0, d = t.length; d > h; h++)
                    if (r = t[h],
                        r || 0 === r)
                        if ("object" === K.type(r))
                            K.merge(f, r.nodeType ? [r] : r);
                        else if (Nt.test(r)) {
                            for (o = o || c.appendChild(e.createElement("div")),
                                     s = (At.exec(r) || ["", ""])[1].toLowerCase(),
                                     a = Ht[s] || Ht._default,
                                     o.innerHTML = a[1] + r.replace(Ot, "<$1></$2>") + a[2],
                                     l = a[0]; l--; )
                                o = o.lastChild;
                            K.merge(f, o.childNodes),
                                o = c.firstChild,
                                o.textContent = ""
                        } else
                            f.push(e.createTextNode(r));
                for (c.textContent = "",
                         h = 0; r = f[h++]; )
                    if ((!i || -1 === K.inArray(r, i)) && (u = K.contains(r.ownerDocument, r),
                            o = y(c.appendChild(r), "script"),
                        u && m(o),
                            n))
                        for (l = 0; r = o[l++]; )
                            Yt.test(r.type || "") && n.push(r);
                return c
            },
            cleanData: function(t) {
                for (var e, n, i, r, o = K.event.special, s = 0; void 0 !== (n = t[s]); s++) {
                    if (K.acceptData(n) && (r = n[yt.expando],
                        r && (e = yt.cache[r]))) {
                        if (e.events)
                            for (i in e.events)
                                o[i] ? K.event.remove(n, i) : K.removeEvent(n, i, e.handle);
                        yt.cache[r] && delete yt.cache[r]
                    }
                    delete vt.cache[n[vt.expando]]
                }
            }
        }),
        K.fn.extend({
            text: function(t) {
                return gt(this, function(t) {
                    return void 0 === t ? K.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t)
                    })
                }, null, t, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.appendChild(t)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(t) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var e = h(this, t);
                        e.insertBefore(t, e.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(t) {
                    this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
                })
            },
            remove: function(t, e) {
                for (var n, i = t ? K.filter(t, this) : this, r = 0; null != (n = i[r]); r++)
                    e || 1 !== n.nodeType || K.cleanData(y(n)),
                    n.parentNode && (e && K.contains(n.ownerDocument, n) && m(y(n, "script")),
                        n.parentNode.removeChild(n));
                return this
            },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    1 === t.nodeType && (K.cleanData(y(t, !1)),
                        t.textContent = "");
                return this
            },
            clone: function(t, e) {
                return t = null == t ? !1 : t,
                    e = null == e ? t : e,
                    this.map(function() {
                        return K.clone(this, t, e)
                    })
            },
            html: function(t) {
                return gt(this, function(t) {
                    var e = this[0] || {}
                        , n = 0
                        , i = this.length;
                    if (void 0 === t && 1 === e.nodeType)
                        return e.innerHTML;
                    if ("string" == typeof t && !Ft.test(t) && !Ht[(At.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Ot, "<$1></$2>");
                        try {
                            for (; i > n; n++)
                                e = this[n] || {},
                                1 === e.nodeType && (K.cleanData(y(e, !1)),
                                    e.innerHTML = t);
                            e = 0
                        } catch (r) {}
                    }
                    e && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function() {
                var t = arguments[0];
                return this.domManip(arguments, function(e) {
                    t = this.parentNode,
                        K.cleanData(y(this)),
                    t && t.replaceChild(e, this)
                }),
                    t && (t.length || t.nodeType) ? this : this.remove()
            },
            detach: function(t) {
                return this.remove(t, !0)
            },
            domManip: function(t, e) {
                t = R.apply([], t);
                var n, i, r, o, s, a, u = 0, l = this.length, c = this, f = l - 1, h = t[0], m = K.isFunction(h);
                if (m || l > 1 && "string" == typeof h && !J.checkClone && Pt.test(h))
                    return this.each(function(n) {
                        var i = c.eq(n);
                        m && (t[0] = h.call(this, n, i.html())),
                            i.domManip(t, e)
                    });
                if (l && (n = K.buildFragment(t, this[0].ownerDocument, !1, this),
                        i = n.firstChild,
                    1 === n.childNodes.length && (n = i),
                        i)) {
                    for (r = K.map(y(n, "script"), d),
                             o = r.length; l > u; u++)
                        s = n,
                        u !== f && (s = K.clone(s, !0, !0),
                        o && K.merge(r, y(s, "script"))),
                            e.call(this[u], s, u);
                    if (o)
                        for (a = r[r.length - 1].ownerDocument,
                                 K.map(r, p),
                                 u = 0; o > u; u++)
                            s = r[u],
                            Yt.test(s.type || "") && !yt.access(s, "globalEval") && K.contains(a, s) && (s.src ? K._evalUrl && K._evalUrl(s.src) : K.globalEval(s.textContent.replace(jt, "")))
                }
                return this
            }
        }),
        K.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(t, e) {
            K.fn[t] = function(t) {
                for (var n, i = [], r = K(t), o = r.length - 1, s = 0; o >= s; s++)
                    n = s === o ? this : this.clone(!0),
                        K(r[s])[e](n),
                        $.apply(i, n.get());
                return this.pushStack(i)
            }
        });
    var Wt, It = {}, qt = /^margin/, zt = new RegExp("^(" + bt + ")(?!px)[a-z%]+$","i"), Ut = function(e) {
        return e.ownerDocument.defaultView.opener ? e.ownerDocument.defaultView.getComputedStyle(e, null) : t.getComputedStyle(e, null)
    };
    !function() {
        function e() {
            s.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                s.innerHTML = "",
                r.appendChild(o);
            var e = t.getComputedStyle(s, null);
            n = "1%" !== e.top,
                i = "4px" === e.width,
                r.removeChild(o)
        }
        var n, i, r = X.documentElement, o = X.createElement("div"), s = X.createElement("div");
        s.style && (s.style.backgroundClip = "content-box",
            s.cloneNode(!0).style.backgroundClip = "",
            J.clearCloneStyle = "content-box" === s.style.backgroundClip,
            o.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
            o.appendChild(s),
        t.getComputedStyle && K.extend(J, {
            pixelPosition: function() {
                return e(),
                    n
            },
            boxSizingReliable: function() {
                return null == i && e(),
                    i
            },
            reliableMarginRight: function() {
                var e, n = s.appendChild(X.createElement("div"));
                return n.style.cssText = s.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                    n.style.marginRight = n.style.width = "0",
                    s.style.width = "1px",
                    r.appendChild(o),
                    e = !parseFloat(t.getComputedStyle(n, null).marginRight),
                    r.removeChild(o),
                    s.removeChild(n),
                    e
            }
        }))
    }(),
        K.swap = function(t, e, n, i) {
            var r, o, s = {};
            for (o in e)
                s[o] = t.style[o],
                    t.style[o] = e[o];
            r = n.apply(t, i || []);
            for (o in e)
                t.style[o] = s[o];
            return r
        }
    ;
    var Rt = /^(none|table(?!-c[ea]).+)/
        , $t = new RegExp("^(" + bt + ")(.*)$","i")
        , Bt = new RegExp("^([+-])=(" + bt + ")","i")
        , Gt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
        , Vt = {
        letterSpacing: "0",
        fontWeight: "400"
    }
        , Qt = ["Webkit", "O", "Moz", "ms"];
    K.extend({
        cssHooks: {
            opacity: {
                get: function(t, e) {
                    if (e) {
                        var n = b(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": "cssFloat"
        },
        style: function(t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = K.camelCase(e), u = t.style;
                return e = K.cssProps[a] || (K.cssProps[a] = T(u, a)),
                    s = K.cssHooks[e] || K.cssHooks[a],
                    void 0 === n ? s && "get"in s && void 0 !== (r = s.get(t, !1, i)) ? r : u[e] : (o = typeof n,
                    "string" === o && (r = Bt.exec(n)) && (n = (r[1] + 1) * r[2] + parseFloat(K.css(t, e)),
                        o = "number"),
                    null != n && n === n && ("number" !== o || K.cssNumber[a] || (n += "px"),
                    J.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (u[e] = "inherit"),
                    s && "set"in s && void 0 === (n = s.set(t, n, i)) || (u[e] = n)),
                        void 0)
            }
        },
        css: function(t, e, n, i) {
            var r, o, s, a = K.camelCase(e);
            return e = K.cssProps[a] || (K.cssProps[a] = T(t.style, a)),
                s = K.cssHooks[e] || K.cssHooks[a],
            s && "get"in s && (r = s.get(t, !0, n)),
            void 0 === r && (r = b(t, e, i)),
            "normal" === r && e in Vt && (r = Vt[e]),
                "" === n || n ? (o = parseFloat(r),
                    n === !0 || K.isNumeric(o) ? o || 0 : r) : r
        }
    }),
        K.each(["height", "width"], function(t, e) {
            K.cssHooks[e] = {
                get: function(t, n, i) {
                    return n ? Rt.test(K.css(t, "display")) && 0 === t.offsetWidth ? K.swap(t, Gt, function() {
                        return C(t, e, i)
                    }) : C(t, e, i) : void 0
                },
                set: function(t, n, i) {
                    var r = i && Ut(t);
                    return D(t, n, i ? S(t, e, i, "border-box" === K.css(t, "boxSizing", !1, r), r) : 0)
                }
            }
        }),
        K.cssHooks.marginRight = x(J.reliableMarginRight, function(t, e) {
            return e ? K.swap(t, {
                display: "inline-block"
            }, b, [t, "marginRight"]) : void 0
        }),
        K.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(t, e) {
            K.cssHooks[t + e] = {
                expand: function(n) {
                    for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++)
                        r[t + xt[i] + e] = o[i] || o[i - 2] || o[0];
                    return r
                }
            },
            qt.test(t) || (K.cssHooks[t + e].set = D)
        }),
        K.fn.extend({
            css: function(t, e) {
                return gt(this, function(t, e, n) {
                    var i, r, o = {}, s = 0;
                    if (K.isArray(e)) {
                        for (i = Ut(t),
                                 r = e.length; r > s; s++)
                            o[e[s]] = K.css(t, e[s], !1, i);
                        return o
                    }
                    return void 0 !== n ? K.style(t, e, n) : K.css(t, e)
                }, t, e, arguments.length > 1)
            },
            show: function() {
                return k(this, !0)
            },
            hide: function() {
                return k(this)
            },
            toggle: function(t) {
                return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function() {
                    Tt(this) ? K(this).show() : K(this).hide()
                })
            }
        }),
        K.Tween = M,
        M.prototype = {
            constructor: M,
            init: function(t, e, n, i, r, o) {
                this.elem = t,
                    this.prop = n,
                    this.easing = r || "swing",
                    this.options = e,
                    this.start = this.now = this.cur(),
                    this.end = i,
                    this.unit = o || (K.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var t = M.propHooks[this.prop];
                return t && t.get ? t.get(this) : M.propHooks._default.get(this)
            },
            run: function(t) {
                var e, n = M.propHooks[this.prop];
                return this.options.duration ? this.pos = e = K.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t,
                    this.now = (this.end - this.start) * e + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                    n && n.set ? n.set(this) : M.propHooks._default.set(this),
                    this
            }
        },
        M.prototype.init.prototype = M.prototype,
        M.propHooks = {
            _default: {
                get: function(t) {
                    var e;
                    return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = K.css(t.elem, t.prop, ""),
                        e && "auto" !== e ? e : 0) : t.elem[t.prop]
                },
                set: function(t) {
                    K.fx.step[t.prop] ? K.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[K.cssProps[t.prop]] || K.cssHooks[t.prop]) ? K.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
                }
            }
        },
        M.propHooks.scrollTop = M.propHooks.scrollLeft = {
            set: function(t) {
                t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
            }
        },
        K.easing = {
            linear: function(t) {
                return t
            },
            swing: function(t) {
                return .5 - Math.cos(t * Math.PI) / 2
            }
        },
        K.fx = M.prototype.init,
        K.fx.step = {};
    var Jt, Xt, Zt = /^(?:toggle|show|hide)$/, Kt = new RegExp("^(?:([+-])=|)(" + bt + ")([a-z%]*)$","i"), te = /queueHooks$/, ee = [N], ne = {
        "*": [function(t, e) {
            var n = this.createTween(t, e)
                , i = n.cur()
                , r = Kt.exec(e)
                , o = r && r[3] || (K.cssNumber[t] ? "" : "px")
                , s = (K.cssNumber[t] || "px" !== o && +i) && Kt.exec(K.css(n.elem, t))
                , a = 1
                , u = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                    r = r || [],
                    s = +i || 1;
                do
                    a = a || ".5",
                        s /= a,
                        K.style(n.elem, t, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a && --u)
            }
            return r && (s = n.start = +s || +i || 0,
                n.unit = o,
                n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
                n
        }
        ]
    };
    K.Animation = K.extend(P, {
        tweener: function(t, e) {
            K.isFunction(t) ? (e = t,
                t = ["*"]) : t = t.split(" ");
            for (var n, i = 0, r = t.length; r > i; i++)
                n = t[i],
                    ne[n] = ne[n] || [],
                    ne[n].unshift(e)
        },
        prefilter: function(t, e) {
            e ? ee.unshift(t) : ee.push(t)
        }
    }),
        K.speed = function(t, e, n) {
            var i = t && "object" == typeof t ? K.extend({}, t) : {
                complete: n || !n && e || K.isFunction(t) && t,
                duration: t,
                easing: n && e || e && !K.isFunction(e) && e
            };
            return i.duration = K.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in K.fx.speeds ? K.fx.speeds[i.duration] : K.fx.speeds._default,
            null != i.queue && i.queue !== !0 || (i.queue = "fx"),
                i.old = i.complete,
                i.complete = function() {
                    K.isFunction(i.old) && i.old.call(this),
                    i.queue && K.dequeue(this, i.queue)
                }
                ,
                i
        }
        ,
        K.fn.extend({
            fadeTo: function(t, e, n, i) {
                return this.filter(Tt).css("opacity", 0).show().end().animate({
                    opacity: e
                }, t, n, i)
            },
            animate: function(t, e, n, i) {
                var r = K.isEmptyObject(t)
                    , o = K.speed(e, n, i)
                    , s = function() {
                    var e = P(this, K.extend({}, t), o);
                    (r || yt.get(this, "finish")) && e.stop(!0)
                };
                return s.finish = s,
                    r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
            },
            stop: function(t, e, n) {
                var i = function(t) {
                    var e = t.stop;
                    delete t.stop,
                        e(n)
                };
                return "string" != typeof t && (n = e,
                    e = t,
                    t = void 0),
                e && t !== !1 && this.queue(t || "fx", []),
                    this.each(function() {
                        var e = !0
                            , r = null != t && t + "queueHooks"
                            , o = K.timers
                            , s = yt.get(this);
                        if (r)
                            s[r] && s[r].stop && i(s[r]);
                        else
                            for (r in s)
                                s[r] && s[r].stop && te.test(r) && i(s[r]);
                        for (r = o.length; r--; )
                            o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n),
                                e = !1,
                                o.splice(r, 1));
                        !e && n || K.dequeue(this, t)
                    })
            },
            finish: function(t) {
                return t !== !1 && (t = t || "fx"),
                    this.each(function() {
                        var e, n = yt.get(this), i = n[t + "queue"], r = n[t + "queueHooks"], o = K.timers, s = i ? i.length : 0;
                        for (n.finish = !0,
                                 K.queue(this, t, []),
                             r && r.stop && r.stop.call(this, !0),
                                 e = o.length; e--; )
                            o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0),
                                o.splice(e, 1));
                        for (e = 0; s > e; e++)
                            i[e] && i[e].finish && i[e].finish.call(this);
                        delete n.finish
                    })
            }
        }),
        K.each(["toggle", "show", "hide"], function(t, e) {
            var n = K.fn[e];
            K.fn[e] = function(t, i, r) {
                return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(O(e, !0), t, i, r)
            }
        }),
        K.each({
            slideDown: O("show"),
            slideUp: O("hide"),
            slideToggle: O("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(t, e) {
            K.fn[t] = function(t, n, i) {
                return this.animate(e, t, n, i)
            }
        }),
        K.timers = [],
        K.fx.tick = function() {
            var t, e = 0, n = K.timers;
            for (Jt = K.now(); e < n.length; e++)
                t = n[e],
                t() || n[e] !== t || n.splice(e--, 1);
            n.length || K.fx.stop(),
                Jt = void 0
        }
        ,
        K.fx.timer = function(t) {
            K.timers.push(t),
                t() ? K.fx.start() : K.timers.pop()
        }
        ,
        K.fx.interval = 13,
        K.fx.start = function() {
            Xt || (Xt = setInterval(K.fx.tick, K.fx.interval))
        }
        ,
        K.fx.stop = function() {
            clearInterval(Xt),
                Xt = null
        }
        ,
        K.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        K.fn.delay = function(t, e) {
            return t = K.fx ? K.fx.speeds[t] || t : t,
                e = e || "fx",
                this.queue(e, function(e, n) {
                    var i = setTimeout(e, t);
                    n.stop = function() {
                        clearTimeout(i)
                    }
                })
        }
        ,
        function() {
            var t = X.createElement("input")
                , e = X.createElement("select")
                , n = e.appendChild(X.createElement("option"));
            t.type = "checkbox",
                J.checkOn = "" !== t.value,
                J.optSelected = n.selected,
                e.disabled = !0,
                J.optDisabled = !n.disabled,
                t = X.createElement("input"),
                t.value = "t",
                t.type = "radio",
                J.radioValue = "t" === t.value
        }();
    var ie, re, oe = K.expr.attrHandle;
    K.fn.extend({
        attr: function(t, e) {
            return gt(this, K.attr, t, e, arguments.length > 1)
        },
        removeAttr: function(t) {
            return this.each(function() {
                K.removeAttr(this, t)
            })
        }
    }),
        K.extend({
            attr: function(t, e, n) {
                var i, r, o = t.nodeType;
                if (t && 3 !== o && 8 !== o && 2 !== o)
                    return typeof t.getAttribute === St ? K.prop(t, e, n) : (1 === o && K.isXMLDoc(t) || (e = e.toLowerCase(),
                        i = K.attrHooks[e] || (K.expr.match.bool.test(e) ? re : ie)),
                        void 0 === n ? i && "get"in i && null !== (r = i.get(t, e)) ? r : (r = K.find.attr(t, e),
                            null == r ? void 0 : r) : null !== n ? i && "set"in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""),
                            n) : void K.removeAttr(t, e))
            },
            removeAttr: function(t, e) {
                var n, i, r = 0, o = e && e.match(dt);
                if (o && 1 === t.nodeType)
                    for (; n = o[r++]; )
                        i = K.propFix[n] || n,
                        K.expr.match.bool.test(n) && (t[i] = !1),
                            t.removeAttribute(n)
            },
            attrHooks: {
                type: {
                    set: function(t, e) {
                        if (!J.radioValue && "radio" === e && K.nodeName(t, "input")) {
                            var n = t.value;
                            return t.setAttribute("type", e),
                            n && (t.value = n),
                                e
                        }
                    }
                }
            }
        }),
        re = {
            set: function(t, e, n) {
                return e === !1 ? K.removeAttr(t, n) : t.setAttribute(n, n),
                    n
            }
        },
        K.each(K.expr.match.bool.source.match(/\w+/g), function(t, e) {
            var n = oe[e] || K.find.attr;
            oe[e] = function(t, e, i) {
                var r, o;
                return i || (o = oe[e],
                    oe[e] = r,
                    r = null != n(t, e, i) ? e.toLowerCase() : null,
                    oe[e] = o),
                    r
            }
        });
    var se = /^(?:input|select|textarea|button)$/i;
    K.fn.extend({
        prop: function(t, e) {
            return gt(this, K.prop, t, e, arguments.length > 1)
        },
        removeProp: function(t) {
            return this.each(function() {
                delete this[K.propFix[t] || t]
            })
        }
    }),
        K.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(t, e, n) {
                var i, r, o, s = t.nodeType;
                if (t && 3 !== s && 8 !== s && 2 !== s)
                    return o = 1 !== s || !K.isXMLDoc(t),
                    o && (e = K.propFix[e] || e,
                        r = K.propHooks[e]),
                        void 0 !== n ? r && "set"in r && void 0 !== (i = r.set(t, n, e)) ? i : t[e] = n : r && "get"in r && null !== (i = r.get(t, e)) ? i : t[e]
            },
            propHooks: {
                tabIndex: {
                    get: function(t) {
                        return t.hasAttribute("tabindex") || se.test(t.nodeName) || t.href ? t.tabIndex : -1
                    }
                }
            }
        }),
    J.optSelected || (K.propHooks.selected = {
        get: function(t) {
            var e = t.parentNode;
            return e && e.parentNode && e.parentNode.selectedIndex,
                null
        }
    }),
        K.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            K.propFix[this.toLowerCase()] = this
        });
    var ae = /[\t\r\n\f]/g;
    K.fn.extend({
        addClass: function(t) {
            var e, n, i, r, o, s, a = "string" == typeof t && t, u = 0, l = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).addClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(dt) || []; l > u; u++)
                    if (n = this[u],
                            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : " ")) {
                        for (o = 0; r = e[o++]; )
                            i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                        s = K.trim(i),
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        removeClass: function(t) {
            var e, n, i, r, o, s, a = 0 === arguments.length || "string" == typeof t && t, u = 0, l = this.length;
            if (K.isFunction(t))
                return this.each(function(e) {
                    K(this).removeClass(t.call(this, e, this.className))
                });
            if (a)
                for (e = (t || "").match(dt) || []; l > u; u++)
                    if (n = this[u],
                            i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(ae, " ") : "")) {
                        for (o = 0; r = e[o++]; )
                            for (; i.indexOf(" " + r + " ") >= 0; )
                                i = i.replace(" " + r + " ", " ");
                        s = t ? K.trim(i) : "",
                        n.className !== s && (n.className = s)
                    }
            return this
        },
        toggleClass: function(t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : K.isFunction(t) ? this.each(function(n) {
                K(this).toggleClass(t.call(this, n, this.className, e), e)
            }) : this.each(function() {
                if ("string" === n)
                    for (var e, i = 0, r = K(this), o = t.match(dt) || []; e = o[i++]; )
                        r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else
                    n !== St && "boolean" !== n || (this.className && yt.set(this, "__className__", this.className),
                        this.className = this.className || t === !1 ? "" : yt.get(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", n = 0, i = this.length; i > n; n++)
                if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(ae, " ").indexOf(e) >= 0)
                    return !0;
            return !1
        }
    });
    var ue = /\r/g;
    K.fn.extend({
        val: function(t) {
            var e, n, i, r = this[0];
            {
                if (arguments.length)
                    return i = K.isFunction(t),
                        this.each(function(n) {
                            var r;
                            1 === this.nodeType && (r = i ? t.call(this, n, K(this).val()) : t,
                                null == r ? r = "" : "number" == typeof r ? r += "" : K.isArray(r) && (r = K.map(r, function(t) {
                                    return null == t ? "" : t + ""
                                })),
                                e = K.valHooks[this.type] || K.valHooks[this.nodeName.toLowerCase()],
                            e && "set"in e && void 0 !== e.set(this, r, "value") || (this.value = r))
                        });
                if (r)
                    return e = K.valHooks[r.type] || K.valHooks[r.nodeName.toLowerCase()],
                        e && "get"in e && void 0 !== (n = e.get(r, "value")) ? n : (n = r.value,
                            "string" == typeof n ? n.replace(ue, "") : null == n ? "" : n)
            }
        }
    }),
        K.extend({
            valHooks: {
                option: {
                    get: function(t) {
                        var e = K.find.attr(t, "value");
                        return null != e ? e : K.trim(K.text(t))
                    }
                },
                select: {
                    get: function(t) {
                        for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || 0 > r, s = o ? null : [], a = o ? r + 1 : i.length, u = 0 > r ? a : o ? r : 0; a > u; u++)
                            if (n = i[u],
                                (n.selected || u === r) && (J.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !K.nodeName(n.parentNode, "optgroup"))) {
                                if (e = K(n).val(),
                                        o)
                                    return e;
                                s.push(e)
                            }
                        return s
                    },
                    set: function(t, e) {
                        for (var n, i, r = t.options, o = K.makeArray(e), s = r.length; s--; )
                            i = r[s],
                            (i.selected = K.inArray(i.value, o) >= 0) && (n = !0);
                        return n || (t.selectedIndex = -1),
                            o
                    }
                }
            }
        }),
        K.each(["radio", "checkbox"], function() {
            K.valHooks[this] = {
                set: function(t, e) {
                    return K.isArray(e) ? t.checked = K.inArray(K(t).val(), e) >= 0 : void 0
                }
            },
            J.checkOn || (K.valHooks[this].get = function(t) {
                    return null === t.getAttribute("value") ? "on" : t.value
                }
            )
        }),
        K.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) {
            K.fn[e] = function(t, n) {
                return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
            }
        }),
        K.fn.extend({
            hover: function(t, e) {
                return this.mouseenter(t).mouseleave(e || t)
            },
            bind: function(t, e, n) {
                return this.on(t, null, e, n)
            },
            unbind: function(t, e) {
                return this.off(t, null, e)
            },
            delegate: function(t, e, n, i) {
                return this.on(e, t, n, i)
            },
            undelegate: function(t, e, n) {
                return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
            }
        });
    var le = K.now()
        , ce = /\?/;
    K.parseJSON = function(t) {
        return JSON.parse(t + "")
    }
        ,
        K.parseXML = function(t) {
            var e, n;
            if (!t || "string" != typeof t)
                return null;
            try {
                n = new DOMParser,
                    e = n.parseFromString(t, "text/xml")
            } catch (i) {
                e = void 0
            }
            return e && !e.getElementsByTagName("parsererror").length || K.error("Invalid XML: " + t),
                e
        }
    ;
    var fe = /#.*$/
        , he = /([?&])_=[^&]*/
        , de = /^(.*?):[ \t]*([^\r\n]*)$/gm
        , pe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
        , me = /^(?:GET|HEAD)$/
        , ge = /^\/\//
        , ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
        , ve = {}
        , _e = {}
        , we = "*/".concat("*")
        , be = t.location.href
        , xe = ye.exec(be.toLowerCase()) || [];
    K.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: be,
            type: "GET",
            isLocal: pe.test(xe[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": we,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": K.parseJSON,
                "text xml": K.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(t, e) {
            return e ? j(j(t, K.ajaxSettings), e) : j(K.ajaxSettings, t)
        },
        ajaxPrefilter: Y(ve),
        ajaxTransport: Y(_e),
        ajax: function(t, e) {
            function n(t, e, n, s) {
                var u, c, y, v, w, x = e;
                2 !== _ && (_ = 2,
                a && clearTimeout(a),
                    i = void 0,
                    o = s || "",
                    b.readyState = t > 0 ? 4 : 0,
                    u = t >= 200 && 300 > t || 304 === t,
                n && (v = H(f, b, n)),
                    v = W(f, v, b, u),
                    u ? (f.ifModified && (w = b.getResponseHeader("Last-Modified"),
                    w && (K.lastModified[r] = w),
                        w = b.getResponseHeader("etag"),
                    w && (K.etag[r] = w)),
                        204 === t || "HEAD" === f.type ? x = "nocontent" : 304 === t ? x = "notmodified" : (x = v.state,
                            c = v.data,
                            y = v.error,
                            u = !y)) : (y = x,
                    !t && x || (x = "error",
                    0 > t && (t = 0))),
                    b.status = t,
                    b.statusText = (e || x) + "",
                    u ? p.resolveWith(h, [c, x, b]) : p.rejectWith(h, [b, x, y]),
                    b.statusCode(g),
                    g = void 0,
                l && d.trigger(u ? "ajaxSuccess" : "ajaxError", [b, f, u ? c : y]),
                    m.fireWith(h, [b, x]),
                l && (d.trigger("ajaxComplete", [b, f]),
                --K.active || K.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (e = t,
                t = void 0),
                e = e || {};
            var i, r, o, s, a, u, l, c, f = K.ajaxSetup({}, e), h = f.context || f, d = f.context && (h.nodeType || h.jquery) ? K(h) : K.event, p = K.Deferred(), m = K.Callbacks("once memory"), g = f.statusCode || {}, y = {}, v = {}, _ = 0, w = "canceled", b = {
                readyState: 0,
                getResponseHeader: function(t) {
                    var e;
                    if (2 === _) {
                        if (!s)
                            for (s = {}; e = de.exec(o); )
                                s[e[1].toLowerCase()] = e[2];
                        e = s[t.toLowerCase()]
                    }
                    return null == e ? null : e
                },
                getAllResponseHeaders: function() {
                    return 2 === _ ? o : null
                },
                setRequestHeader: function(t, e) {
                    var n = t.toLowerCase();
                    return _ || (t = v[n] = v[n] || t,
                        y[t] = e),
                        this
                },
                overrideMimeType: function(t) {
                    return _ || (f.mimeType = t),
                        this
                },
                statusCode: function(t) {
                    var e;
                    if (t)
                        if (2 > _)
                            for (e in t)
                                g[e] = [g[e], t[e]];
                        else
                            b.always(t[b.status]);
                    return this
                },
                abort: function(t) {
                    var e = t || w;
                    return i && i.abort(e),
                        n(0, e),
                        this
                }
            };
            if (p.promise(b).complete = m.add,
                    b.success = b.done,
                    b.error = b.fail,
                    f.url = ((t || f.url || be) + "").replace(fe, "").replace(ge, xe[1] + "//"),
                    f.type = e.method || e.type || f.method || f.type,
                    f.dataTypes = K.trim(f.dataType || "*").toLowerCase().match(dt) || [""],
                null == f.crossDomain && (u = ye.exec(f.url.toLowerCase()),
                    f.crossDomain = !(!u || u[1] === xe[1] && u[2] === xe[2] && (u[3] || ("http:" === u[1] ? "80" : "443")) === (xe[3] || ("http:" === xe[1] ? "80" : "443")))),
                f.data && f.processData && "string" != typeof f.data && (f.data = K.param(f.data, f.traditional)),
                    L(ve, f, e, b),
                2 === _)
                return b;
            l = K.event && f.global,
            l && 0 === K.active++ && K.event.trigger("ajaxStart"),
                f.type = f.type.toUpperCase(),
                f.hasContent = !me.test(f.type),
                r = f.url,
            f.hasContent || (f.data && (r = f.url += (ce.test(r) ? "&" : "?") + f.data,
                delete f.data),
            f.cache === !1 && (f.url = he.test(r) ? r.replace(he, "$1_=" + le++) : r + (ce.test(r) ? "&" : "?") + "_=" + le++)),
            f.ifModified && (K.lastModified[r] && b.setRequestHeader("If-Modified-Since", K.lastModified[r]),
            K.etag[r] && b.setRequestHeader("If-None-Match", K.etag[r])),
            (f.data && f.hasContent && f.contentType !== !1 || e.contentType) && b.setRequestHeader("Content-Type", f.contentType),
                b.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + we + "; q=0.01" : "") : f.accepts["*"]);
            for (c in f.headers)
                b.setRequestHeader(c, f.headers[c]);
            if (f.beforeSend && (f.beforeSend.call(h, b, f) === !1 || 2 === _))
                return b.abort();
            w = "abort";
            for (c in {
                success: 1,
                error: 1,
                complete: 1
            })
                b[c](f[c]);
            if (i = L(_e, f, e, b)) {
                b.readyState = 1,
                l && d.trigger("ajaxSend", [b, f]),
                f.async && f.timeout > 0 && (a = setTimeout(function() {
                    b.abort("timeout")
                }, f.timeout));
                try {
                    _ = 1,
                        i.send(y, n)
                } catch (x) {
                    if (!(2 > _))
                        throw x;
                    n(-1, x)
                }
            } else
                n(-1, "No Transport");
            return b
        },
        getJSON: function(t, e, n) {
            return K.get(t, e, n, "json")
        },
        getScript: function(t, e) {
            return K.get(t, void 0, e, "script")
        }
    }),
        K.each(["get", "post"], function(t, e) {
            K[e] = function(t, n, i, r) {
                return K.isFunction(n) && (r = r || i,
                    i = n,
                    n = void 0),
                    K.ajax({
                        url: t,
                        type: e,
                        dataType: r,
                        data: n,
                        success: i
                    })
            }
        }),
        K._evalUrl = function(t) {
            return K.ajax({
                url: t,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        K.fn.extend({
            wrapAll: function(t) {
                var e;
                return K.isFunction(t) ? this.each(function(e) {
                    K(this).wrapAll(t.call(this, e))
                }) : (this[0] && (e = K(t, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && e.insertBefore(this[0]),
                    e.map(function() {
                        for (var t = this; t.firstElementChild; )
                            t = t.firstElementChild;
                        return t
                    }).append(this)),
                    this)
            },
            wrapInner: function(t) {
                return K.isFunction(t) ? this.each(function(e) {
                    K(this).wrapInner(t.call(this, e))
                }) : this.each(function() {
                    var e = K(this)
                        , n = e.contents();
                    n.length ? n.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) {
                var e = K.isFunction(t);
                return this.each(function(n) {
                    K(this).wrapAll(e ? t.call(this, n) : t)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    K.nodeName(this, "body") || K(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        K.expr.filters.hidden = function(t) {
            return t.offsetWidth <= 0 && t.offsetHeight <= 0
        }
        ,
        K.expr.filters.visible = function(t) {
            return !K.expr.filters.hidden(t)
        }
    ;
    var Te = /%20/g
        , De = /\[\]$/
        , Se = /\r?\n/g
        , Ce = /^(?:submit|button|image|reset|file)$/i
        , ke = /^(?:input|select|textarea|keygen)/i;
    K.param = function(t, e) {
        var n, i = [], r = function(t, e) {
            e = K.isFunction(e) ? e() : null == e ? "" : e,
                i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
        };
        if (void 0 === e && (e = K.ajaxSettings && K.ajaxSettings.traditional),
            K.isArray(t) || t.jquery && !K.isPlainObject(t))
            K.each(t, function() {
                r(this.name, this.value)
            });
        else
            for (n in t)
                I(n, t[n], e, r);
        return i.join("&").replace(Te, "+")
    }
        ,
        K.fn.extend({
            serialize: function() {
                return K.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var t = K.prop(this, "elements");
                    return t ? K.makeArray(t) : this
                }).filter(function() {
                    var t = this.type;
                    return this.name && !K(this).is(":disabled") && ke.test(this.nodeName) && !Ce.test(t) && (this.checked || !Dt.test(t))
                }).map(function(t, e) {
                    var n = K(this).val();
                    return null == n ? null : K.isArray(n) ? K.map(n, function(t) {
                        return {
                            name: e.name,
                            value: t.replace(Se, "\r\n")
                        }
                    }) : {
                        name: e.name,
                        value: n.replace(Se, "\r\n")
                    }
                }).get()
            }
        }),
        K.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (t) {}
        }
    ;
    var Me = 0
        , Ee = {}
        , Oe = {
        0: 200,
        1223: 204
    }
        , Ae = K.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function() {
        for (var t in Ee)
            Ee[t]()
    }),
        J.cors = !!Ae && "withCredentials"in Ae,
        J.ajax = Ae = !!Ae,
        K.ajaxTransport(function(t) {
            var e;
            return J.cors || Ae && !t.crossDomain ? {
                send: function(n, i) {
                    var r, o = t.xhr(), s = ++Me;
                    if (o.open(t.type, t.url, t.async, t.username, t.password),
                            t.xhrFields)
                        for (r in t.xhrFields)
                            o[r] = t.xhrFields[r];
                    t.mimeType && o.overrideMimeType && o.overrideMimeType(t.mimeType),
                    t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
                    for (r in n)
                        o.setRequestHeader(r, n[r]);
                    e = function(t) {
                        return function() {
                            e && (delete Ee[s],
                                e = o.onload = o.onerror = null,
                                "abort" === t ? o.abort() : "error" === t ? i(o.status, o.statusText) : i(Oe[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? {
                                    text: o.responseText
                                } : void 0, o.getAllResponseHeaders()))
                        }
                    }
                        ,
                        o.onload = e(),
                        o.onerror = e("error"),
                        e = Ee[s] = e("abort");
                    try {
                        o.send(t.hasContent && t.data || null)
                    } catch (a) {
                        if (e)
                            throw a
                    }
                },
                abort: function() {
                    e && e()
                }
            } : void 0
        }),
        K.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(t) {
                    return K.globalEval(t),
                        t
                }
            }
        }),
        K.ajaxPrefilter("script", function(t) {
            void 0 === t.cache && (t.cache = !1),
            t.crossDomain && (t.type = "GET")
        }),
        K.ajaxTransport("script", function(t) {
            if (t.crossDomain) {
                var e, n;
                return {
                    send: function(i, r) {
                        e = K("<script>").prop({
                            async: !0,
                            charset: t.scriptCharset,
                            src: t.url
                        }).on("load error", n = function(t) {
                                e.remove(),
                                    n = null,
                                t && r("error" === t.type ? 404 : 200, t.type)
                            }
                        ),
                            X.head.appendChild(e[0])
                    },
                    abort: function() {
                        n && n()
                    }
                }
            }
        });
    var Ne = []
        , Fe = /(=)\?(?=&|$)|\?\?/;
    K.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var t = Ne.pop() || K.expando + "_" + le++;
            return this[t] = !0,
                t
        }
    }),
        K.ajaxPrefilter("json jsonp", function(e, n, i) {
            var r, o, s, a = e.jsonp !== !1 && (Fe.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Fe.test(e.data) && "data");
            return a || "jsonp" === e.dataTypes[0] ? (r = e.jsonpCallback = K.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Fe, "$1" + r) : e.jsonp !== !1 && (e.url += (ce.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return s || K.error(r + " was not called"),
                        s[0]
                }
                ,
                e.dataTypes[0] = "json",
                o = t[r],
                t[r] = function() {
                    s = arguments
                }
                ,
                i.always(function() {
                    t[r] = o,
                    e[r] && (e.jsonpCallback = n.jsonpCallback,
                        Ne.push(r)),
                    s && K.isFunction(o) && o(s[0]),
                        s = o = void 0
                }),
                "script") : void 0
        }),
        K.parseHTML = function(t, e, n) {
            if (!t || "string" != typeof t)
                return null;
            "boolean" == typeof e && (n = e,
                e = !1),
                e = e || X;
            var i = st.exec(t)
                , r = !n && [];
            return i ? [e.createElement(i[1])] : (i = K.buildFragment([t], e, r),
            r && r.length && K(r).remove(),
                K.merge([], i.childNodes))
        }
    ;
    var Pe = K.fn.load;
    K.fn.load = function(t, e, n) {
        if ("string" != typeof t && Pe)
            return Pe.apply(this, arguments);
        var i, r, o, s = this, a = t.indexOf(" ");
        return a >= 0 && (i = K.trim(t.slice(a)),
            t = t.slice(0, a)),
            K.isFunction(e) ? (n = e,
                e = void 0) : e && "object" == typeof e && (r = "POST"),
        s.length > 0 && K.ajax({
            url: t,
            type: r,
            dataType: "html",
            data: e
        }).done(function(t) {
            o = arguments,
                s.html(i ? K("<div>").append(K.parseHTML(t)).find(i) : t)
        }).complete(n && function(t, e) {
            s.each(n, o || [t.responseText, e, t])
        }
        ),
            this
    }
        ,
        K.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(t, e) {
            K.fn[e] = function(t) {
                return this.on(e, t)
            }
        }),
        K.expr.filters.animated = function(t) {
            return K.grep(K.timers, function(e) {
                return t === e.elem
            }).length
        }
    ;
    var Ye = t.document.documentElement;
    K.offset = {
        setOffset: function(t, e, n) {
            var i, r, o, s, a, u, l, c = K.css(t, "position"), f = K(t), h = {};
            "static" === c && (t.style.position = "relative"),
                a = f.offset(),
                o = K.css(t, "top"),
                u = K.css(t, "left"),
                l = ("absolute" === c || "fixed" === c) && (o + u).indexOf("auto") > -1,
                l ? (i = f.position(),
                    s = i.top,
                    r = i.left) : (s = parseFloat(o) || 0,
                    r = parseFloat(u) || 0),
            K.isFunction(e) && (e = e.call(t, n, a)),
            null != e.top && (h.top = e.top - a.top + s),
            null != e.left && (h.left = e.left - a.left + r),
                "using"in e ? e.using.call(t, h) : f.css(h)
        }
    },
        K.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        K.offset.setOffset(this, t, e)
                    });
                var e, n, i = this[0], r = {
                    top: 0,
                    left: 0
                }, o = i && i.ownerDocument;
                if (o)
                    return e = o.documentElement,
                        K.contains(e, i) ? (typeof i.getBoundingClientRect !== St && (r = i.getBoundingClientRect()),
                            n = q(o),
                            {
                                top: r.top + n.pageYOffset - e.clientTop,
                                left: r.left + n.pageXOffset - e.clientLeft
                            }) : r
            },
            position: function() {
                if (this[0]) {
                    var t, e, n = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === K.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(),
                        e = this.offset(),
                    K.nodeName(t[0], "html") || (i = t.offset()),
                        i.top += K.css(t[0], "borderTopWidth", !0),
                        i.left += K.css(t[0], "borderLeftWidth", !0)),
                        {
                            top: e.top - i.top - K.css(n, "marginTop", !0),
                            left: e.left - i.left - K.css(n, "marginLeft", !0)
                        }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    for (var t = this.offsetParent || Ye; t && !K.nodeName(t, "html") && "static" === K.css(t, "position"); )
                        t = t.offsetParent;
                    return t || Ye
                })
            }
        }),
        K.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(e, n) {
            var i = "pageYOffset" === n;
            K.fn[e] = function(r) {
                return gt(this, function(e, r, o) {
                    var s = q(e);
                    return void 0 === o ? s ? s[n] : e[r] : void (s ? s.scrollTo(i ? t.pageXOffset : o, i ? o : t.pageYOffset) : e[r] = o)
                }, e, r, arguments.length, null)
            }
        }),
        K.each(["top", "left"], function(t, e) {
            K.cssHooks[e] = x(J.pixelPosition, function(t, n) {
                return n ? (n = b(t, e),
                    zt.test(n) ? K(t).position()[e] + "px" : n) : void 0
            })
        }),
        K.each({
            Height: "height",
            Width: "width"
        }, function(t, e) {
            K.each({
                padding: "inner" + t,
                content: e,
                "": "outer" + t
            }, function(n, i) {
                K.fn[i] = function(i, r) {
                    var o = arguments.length && (n || "boolean" != typeof i)
                        , s = n || (i === !0 || r === !0 ? "margin" : "border");
                    return gt(this, function(e, n, i) {
                        var r;
                        return K.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement,
                            Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : void 0 === i ? K.css(e, n, s) : K.style(e, n, i, s)
                    }, e, o ? i : void 0, o, null)
                }
            })
        }),
        K.fn.size = function() {
            return this.length
        }
        ,
        K.fn.andSelf = K.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return K
    });
    var Le = t.jQuery
        , je = t.$;
    return K.noConflict = function(e) {
        return t.$ === K && (t.$ = je),
        e && t.jQuery === K && (t.jQuery = Le),
            K
    }
        ,
    typeof e === St && (t.jQuery = t.$ = K),
        K
}),
    function() {
        var t = !1;
        window.JQClass = function() {}
            ,
            JQClass.classes = {},
            JQClass.extend = function e(n) {
                function i() {
                    !t && this._init && this._init.apply(this, arguments)
                }
                var r = this.prototype;
                t = !0;
                var o = new this;
                t = !1;
                for (var s in n)
                    o[s] = "function" == typeof n[s] && "function" == typeof r[s] ? function(t, e) {
                        return function() {
                            var n = this._super;
                            this._super = function(e) {
                                return r[t].apply(this, e || [])
                            }
                            ;
                            var i = e.apply(this, arguments);
                            return this._super = n,
                                i
                        }
                    }(s, n[s]) : n[s];
                return i.prototype = o,
                    i.prototype.constructor = i,
                    i.extend = e,
                    i
            }
    }(),
    function($) {
        function camelCase(t) {
            return t.replace(/-([a-z])/g, function(t, e) {
                return e.toUpperCase()
            })
        }
        JQClass.classes.JQPlugin = JQClass.extend({
            name: "plugin",
            defaultOptions: {},
            regionalOptions: {},
            _getters: [],
            _getMarker: function() {
                return "is-" + this.name
            },
            _init: function() {
                $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
                var t = camelCase(this.name);
                $[t] = this,
                    $.fn[t] = function(e) {
                        var n = Array.prototype.slice.call(arguments, 1);
                        return $[t]._isNotChained(e, n) ? $[t][e].apply($[t], [this[0]].concat(n)) : this.each(function() {
                            if ("string" == typeof e) {
                                if ("_" === e[0] || !$[t][e])
                                    throw "Unknown method: " + e;
                                $[t][e].apply($[t], [this].concat(n))
                            } else
                                $[t]._attach(this, e)
                        })
                    }
            },
            setDefaults: function(t) {
                $.extend(this.defaultOptions, t || {})
            },
            _isNotChained: function(t, e) {
                return "option" === t && (0 === e.length || 1 === e.length && "string" == typeof e[0]) ? !0 : $.inArray(t, this._getters) > -1
            },
            _attach: function(t, e) {
                if (t = $(t),
                        !t.hasClass(this._getMarker())) {
                    t.addClass(this._getMarker()),
                        e = $.extend({}, this.defaultOptions, this._getMetadata(t), e || {});
                    var n = $.extend({
                        name: this.name,
                        elem: t,
                        options: e
                    }, this._instSettings(t, e));
                    t.data(this.name, n),
                        this._postAttach(t, n),
                        this.option(t, e)
                }
            },
            _instSettings: function(t, e) {
                return {}
            },
            _postAttach: function(t, e) {},
            _getMetadata: function(d) {
                try {
                    var f = d.data(this.name.toLowerCase()) || "";
                    f = f.replace(/'/g, '"'),
                        f = f.replace(/([a-zA-Z0-9]+):/g, function(t, e, n) {
                            var i = f.substring(0, n).match(/"/g);
                            return i && i.length % 2 !== 0 ? e + ":" : '"' + e + '":'
                        }),
                        f = $.parseJSON("{" + f + "}");
                    for (var g in f) {
                        var h = f[g];
                        "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                    }
                    return f
                } catch (e) {
                    return {}
                }
            },
            _getInst: function(t) {
                return $(t).data(this.name) || {}
            },
            option: function(t, e, n) {
                t = $(t);
                var i = t.data(this.name);
                if (!e || "string" == typeof e && null == n) {
                    var r = (i || {}).options;
                    return r && e ? r[e] : r
                }
                if (t.hasClass(this._getMarker())) {
                    var r = e || {};
                    "string" == typeof e && (r = {},
                        r[e] = n),
                        this._optionsChanged(t, i, r),
                        $.extend(i.options, r)
                }
            },
            _optionsChanged: function(t, e, n) {},
            destroy: function(t) {
                t = $(t),
                t.hasClass(this._getMarker()) && (this._preDestroy(t, this._getInst(t)),
                    t.removeData(this.name).removeClass(this._getMarker()))
            },
            _preDestroy: function(t, e) {}
        }),
            $.JQPlugin = {
                createPlugin: function(t, e) {
                    "object" == typeof t && (e = t,
                        t = "JQPlugin"),
                        t = camelCase(t);
                    var n = camelCase(e.name);
                    JQClass.classes[n] = JQClass.classes[t].extend(e),
                        new JQClass.classes[n]
                }
            }
    }(jQuery),
    function(t) {
        var e = "countdown"
            , n = 0
            , i = 1
            , r = 2
            , o = 3
            , s = 4
            , a = 5
            , u = 6;
        t.JQPlugin.createPlugin({
            name: e,
            defaultOptions: {
                until: null,
                since: null,
                timezone: null,
                serverSync: null,
                format: "dHMS",
                layout: "",
                compact: !1,
                padZeroes: !1,
                significant: 0,
                description: "",
                expiryUrl: "",
                expiryText: "",
                alwaysExpire: !1,
                onExpiry: null,
                onTick: null,
                tickInterval: 1
            },
            regionalOptions: {
                "": {
                    labels: ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"],
                    labels1: ["Year", "Month", "Week", "Day", "Hour", "Minute", "Second"],
                    compactLabels: ["y", "m", "w", "d"],
                    whichLabels: null,
                    digits: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
                    timeSeparator: ":",
                    isRTL: !1
                }
            },
            _getters: ["getTimes"],
            _rtlClass: e + "-rtl",
            _sectionClass: e + "-section",
            _amountClass: e + "-amount",
            _periodClass: e + "-period",
            _rowClass: e + "-row",
            _holdingClass: e + "-holding",
            _showClass: e + "-show",
            _descrClass: e + "-descr",
            _timerElems: [],
            _init: function() {
                function e(t) {
                    var a = 1e12 > t ? r ? performance.now() + performance.timing.navigationStart : i() : t || i();
                    a - s >= 1e3 && (n._updateElems(),
                        s = a),
                        o(e)
                }
                var n = this;
                this._super(),
                    this._serverSyncs = [];
                var i = "function" == typeof Date.now ? Date.now : function() {
                    return (new Date).getTime()
                }
                    , r = window.performance && "function" == typeof window.performance.now
                    , o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null
                    , s = 0;
                !o || t.noRequestAnimationFrame ? (t.noRequestAnimationFrame = null,
                    setInterval(function() {
                        n._updateElems()
                    }, 980)) : (s = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || i(),
                    o(e))
            },
            UTCDate: function(t, e, n, i, r, o, s, a) {
                "object" == typeof e && e.constructor == Date && (a = e.getMilliseconds(),
                    s = e.getSeconds(),
                    o = e.getMinutes(),
                    r = e.getHours(),
                    i = e.getDate(),
                    n = e.getMonth(),
                    e = e.getFullYear());
                var u = new Date;
                return u.setUTCFullYear(e),
                    u.setUTCDate(1),
                    u.setUTCMonth(n || 0),
                    u.setUTCDate(i || 1),
                    u.setUTCHours(r || 0),
                    u.setUTCMinutes((o || 0) - (Math.abs(t) < 30 ? 60 * t : t)),
                    u.setUTCSeconds(s || 0),
                    u.setUTCMilliseconds(a || 0),
                    u
            },
            periodsToSeconds: function(t) {
                return 31557600 * t[0] + 2629800 * t[1] + 604800 * t[2] + 86400 * t[3] + 3600 * t[4] + 60 * t[5] + t[6]
            },
            resync: function() {
                var e = this;
                t("." + this._getMarker()).each(function() {
                    var n = t.data(this, e.name);
                    if (n.options.serverSync) {
                        for (var i = null, r = 0; r < e._serverSyncs.length; r++)
                            if (e._serverSyncs[r][0] == n.options.serverSync) {
                                i = e._serverSyncs[r];
                                break
                            }
                        if (null == i[2]) {
                            var o = t.isFunction(n.options.serverSync) ? n.options.serverSync.apply(this, []) : null;
                            i[2] = (o ? (new Date).getTime() - o.getTime() : 0) - i[1]
                        }
                        n._since && n._since.setMilliseconds(n._since.getMilliseconds() + i[2]),
                            n._until.setMilliseconds(n._until.getMilliseconds() + i[2])
                    }
                });
                for (var n = 0; n < e._serverSyncs.length; n++)
                    null != e._serverSyncs[n][2] && (e._serverSyncs[n][1] += e._serverSyncs[n][2],
                        delete e._serverSyncs[n][2])
            },
            _instSettings: function(t, e) {
                return {
                    _periods: [0, 0, 0, 0, 0, 0, 0]
                }
            },
            _addElem: function(t) {
                this._hasElem(t) || this._timerElems.push(t)
            },
            _hasElem: function(e) {
                return t.inArray(e, this._timerElems) > -1
            },
            _removeElem: function(e) {
                this._timerElems = t.map(this._timerElems, function(t) {
                    return t == e ? null : t
                })
            },
            _updateElems: function() {
                for (var t = this._timerElems.length - 1; t >= 0; t--)
                    this._updateCountdown(this._timerElems[t])
            },
            _optionsChanged: function(e, n, i) {
                i.layout && (i.layout = i.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")),
                    this._resetExtraLabels(n.options, i);
                var r = n.options.timezone != i.timezone;
                t.extend(n.options, i),
                    this._adjustSettings(e, n, null != i.until || null != i.since || r);
                var o = new Date;
                (n._since && n._since < o || n._until && n._until > o) && this._addElem(e[0]),
                    this._updateCountdown(e, n)
            },
            _updateCountdown: function(e, n) {
                if (e = e.jquery ? e : t(e),
                        n = n || this._getInst(e)) {
                    if (e.html(this._generateHTML(n)).toggleClass(this._rtlClass, n.options.isRTL),
                            t.isFunction(n.options.onTick)) {
                        var i = "lap" != n._hold ? n._periods : this._calculatePeriods(n, n._show, n.options.significant, new Date);
                        1 != n.options.tickInterval && this.periodsToSeconds(i) % n.options.tickInterval != 0 || n.options.onTick.apply(e[0], [i])
                    }
                    var r = "pause" != n._hold && (n._since ? n._now.getTime() < n._since.getTime() : n._now.getTime() >= n._until.getTime());
                    if (r && !n._expiring) {
                        if (n._expiring = !0,
                            this._hasElem(e[0]) || n.options.alwaysExpire) {
                            if (this._removeElem(e[0]),
                                t.isFunction(n.options.onExpiry) && n.options.onExpiry.apply(e[0], []),
                                    n.options.expiryText) {
                                var o = n.options.layout;
                                n.options.layout = n.options.expiryText,
                                    this._updateCountdown(e[0], n),
                                    n.options.layout = o
                            }
                            n.options.expiryUrl && (window.location = n.options.expiryUrl)
                        }
                        n._expiring = !1
                    } else
                        "pause" == n._hold && this._removeElem(e[0])
                }
            },
            _resetExtraLabels: function(t, e) {
                for (var n in e)
                    n.match(/[Ll]abels[02-9]|compactLabels1/) && (t[n] = e[n]);
                for (var n in t)
                    n.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof e[n] && (t[n] = null)
            },
            _adjustSettings: function(e, n, i) {
                for (var r = null, o = 0; o < this._serverSyncs.length; o++)
                    if (this._serverSyncs[o][0] == n.options.serverSync) {
                        r = this._serverSyncs[o][1];
                        break
                    }
                if (null != r)
                    var s = n.options.serverSync ? r : 0
                        , a = new Date;
                else {
                    var u = t.isFunction(n.options.serverSync) ? n.options.serverSync.apply(e[0], []) : null
                        , a = new Date
                        , s = u ? a.getTime() - u.getTime() : 0;
                    this._serverSyncs.push([n.options.serverSync, s])
                }
                var l = n.options.timezone;
                l = null == l ? -a.getTimezoneOffset() : l,
                (i || !i && null == n._until && null == n._since) && (n._since = n.options.since,
                null != n._since && (n._since = this.UTCDate(l, this._determineTime(n._since, null)),
                n._since && s && n._since.setMilliseconds(n._since.getMilliseconds() + s)),
                    n._until = this.UTCDate(l, this._determineTime(n.options.until, a)),
                s && n._until.setMilliseconds(n._until.getMilliseconds() + s)),
                    n._show = this._determineShow(n)
            },
            _preDestroy: function(t, e) {
                this._removeElem(t[0]),
                    t.empty()
            },
            pause: function(t) {
                this._hold(t, "pause")
            },
            lap: function(t) {
                this._hold(t, "lap")
            },
            resume: function(t) {
                this._hold(t, null)
            },
            toggle: function(e) {
                var n = t.data(e, this.name) || {};
                this[n._hold ? "resume" : "pause"](e)
            },
            toggleLap: function(e) {
                var n = t.data(e, this.name) || {};
                this[n._hold ? "resume" : "lap"](e)
            },
            _hold: function(e, n) {
                var i = t.data(e, this.name);
                if (i) {
                    if ("pause" == i._hold && !n) {
                        i._periods = i._savePeriods;
                        var r = i._since ? "-" : "+";
                        i[i._since ? "_since" : "_until"] = this._determineTime(r + i._periods[0] + "y" + r + i._periods[1] + "o" + r + i._periods[2] + "w" + r + i._periods[3] + "d" + r + i._periods[4] + "h" + r + i._periods[5] + "m" + r + i._periods[6] + "s"),
                            this._addElem(e)
                    }
                    i._hold = n,
                        i._savePeriods = "pause" == n ? i._periods : null,
                        t.data(e, this.name, i),
                        this._updateCountdown(e, i)
                }
            },
            getTimes: function(e) {
                var n = t.data(e, this.name);
                return n ? "pause" == n._hold ? n._savePeriods : n._hold ? this._calculatePeriods(n, n._show, n.options.significant, new Date) : n._periods : null
            },
            _determineTime: function(t, e) {
                var n = this
                    , i = function(t) {
                    var e = new Date;
                    return e.setTime(e.getTime() + 1e3 * t),
                        e
                }
                    , r = function(t) {
                    t = t.toLowerCase();
                    for (var e = new Date, i = e.getFullYear(), r = e.getMonth(), o = e.getDate(), s = e.getHours(), a = e.getMinutes(), u = e.getSeconds(), l = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, c = l.exec(t); c; ) {
                        switch (c[2] || "s") {
                            case "s":
                                u += parseInt(c[1], 10);
                                break;
                            case "m":
                                a += parseInt(c[1], 10);
                                break;
                            case "h":
                                s += parseInt(c[1], 10);
                                break;
                            case "d":
                                o += parseInt(c[1], 10);
                                break;
                            case "w":
                                o += 7 * parseInt(c[1], 10);
                                break;
                            case "o":
                                r += parseInt(c[1], 10),
                                    o = Math.min(o, n._getDaysInMonth(i, r));
                                break;
                            case "y":
                                i += parseInt(c[1], 10),
                                    o = Math.min(o, n._getDaysInMonth(i, r))
                        }
                        c = l.exec(t)
                    }
                    return new Date(i,r,o,s,a,u,0)
                }
                    , o = null == t ? e : "string" == typeof t ? r(t) : "number" == typeof t ? i(t) : t;
                return o && o.setMilliseconds(0),
                    o
            },
            _getDaysInMonth: function(t, e) {
                return 32 - new Date(t,e,32).getDate()
            },
            _normalLabels: function(t) {
                return t
            },
            _generateHTML: function(e) {
                var l = this;
                e._periods = e._hold ? e._periods : this._calculatePeriods(e, e._show, e.options.significant, new Date);
                for (var c = !1, f = 0, h = e.options.significant, d = t.extend({}, e._show), p = n; u >= p; p++)
                    c |= "?" == e._show[p] && e._periods[p] > 0,
                        d[p] = "?" != e._show[p] || c ? e._show[p] : null,
                        f += d[p] ? 1 : 0,
                        h -= e._periods[p] > 0 ? 1 : 0;
                for (var m = [!1, !1, !1, !1, !1, !1, !1], p = u; p >= n; p--)
                    e._show[p] && (e._periods[p] ? m[p] = !0 : (m[p] = h > 0,
                        h--));
                var g = e.options.compact ? e.options.compactLabels : e.options.labels
                    , y = e.options.whichLabels || this._normalLabels
                    , v = function(t) {
                    var n = e.options["compactLabels" + y(e._periods[t])];
                    return d[t] ? l._translateDigits(e, e._periods[t]) + (n ? n[t] : g[t]) + " " : ""
                }
                    , _ = e.options.padZeroes ? 2 : 1
                    , w = function(t) {
                    var n = e.options["labels" + y(e._periods[t])];
                    return !e.options.significant && d[t] || e.options.significant && m[t] ? '<span class="' + l._sectionClass + '"><span class="' + l._amountClass + '">' + l._minDigits(e, e._periods[t], _) + '</span><span class="' + l._periodClass + '">' + (n ? n[t] : g[t]) + "</span></span>" : ""
                };
                return e.options.layout ? this._buildLayout(e, d, e.options.layout, e.options.compact, e.options.significant, m) : (e.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (e._hold ? " " + this._holdingClass : "") + '">' + v(n) + v(i) + v(r) + v(o) + (d[s] ? this._minDigits(e, e._periods[s], 2) : "") + (d[a] ? (d[s] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[a], 2) : "") + (d[u] ? (d[s] || d[a] ? e.options.timeSeparator : "") + this._minDigits(e, e._periods[u], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (e.options.significant || f) + (e._hold ? " " + this._holdingClass : "") + '">' + w(n) + w(i) + w(r) + w(o) + w(s) + w(a) + w(u)) + "</span>" + (e.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + e.options.description + "</span>" : "")
            },
            _buildLayout: function(e, l, c, f, h, d) {
                for (var p = e.options[f ? "compactLabels" : "labels"], m = e.options.whichLabels || this._normalLabels, g = function(t) {
                    return (e.options[(f ? "compactLabels" : "labels") + m(e._periods[t])] || p)[t]
                }, y = function(t, n) {
                    return e.options.digits[Math.floor(t / n) % 10]
                }, v = {
                    desc: e.options.description,
                    sep: e.options.timeSeparator,
                    yl: g(n),
                    yn: this._minDigits(e, e._periods[n], 1),
                    ynn: this._minDigits(e, e._periods[n], 2),
                    ynnn: this._minDigits(e, e._periods[n], 3),
                    y1: y(e._periods[n], 1),
                    y10: y(e._periods[n], 10),
                    y100: y(e._periods[n], 100),
                    y1000: y(e._periods[n], 1e3),
                    ol: g(i),
                    on: this._minDigits(e, e._periods[i], 1),
                    onn: this._minDigits(e, e._periods[i], 2),
                    onnn: this._minDigits(e, e._periods[i], 3),
                    o1: y(e._periods[i], 1),
                    o10: y(e._periods[i], 10),
                    o100: y(e._periods[i], 100),
                    o1000: y(e._periods[i], 1e3),
                    wl: g(r),
                    wn: this._minDigits(e, e._periods[r], 1),
                    wnn: this._minDigits(e, e._periods[r], 2),
                    wnnn: this._minDigits(e, e._periods[r], 3),
                    w1: y(e._periods[r], 1),
                    w10: y(e._periods[r], 10),
                    w100: y(e._periods[r], 100),
                    w1000: y(e._periods[r], 1e3),
                    dl: g(o),
                    dn: this._minDigits(e, e._periods[o], 1),
                    dnn: this._minDigits(e, e._periods[o], 2),
                    dnnn: this._minDigits(e, e._periods[o], 3),
                    d1: y(e._periods[o], 1),
                    d10: y(e._periods[o], 10),
                    d100: y(e._periods[o], 100),
                    d1000: y(e._periods[o], 1e3),
                    hl: g(s),
                    hn: this._minDigits(e, e._periods[s], 1),
                    hnn: this._minDigits(e, e._periods[s], 2),
                    hnnn: this._minDigits(e, e._periods[s], 3),
                    h1: y(e._periods[s], 1),
                    h10: y(e._periods[s], 10),
                    h100: y(e._periods[s], 100),
                    h1000: y(e._periods[s], 1e3),
                    ml: g(a),
                    mn: this._minDigits(e, e._periods[a], 1),
                    mnn: this._minDigits(e, e._periods[a], 2),
                    mnnn: this._minDigits(e, e._periods[a], 3),
                    m1: y(e._periods[a], 1),
                    m10: y(e._periods[a], 10),
                    m100: y(e._periods[a], 100),
                    m1000: y(e._periods[a], 1e3),
                    sl: g(u),
                    sn: this._minDigits(e, e._periods[u], 1),
                    snn: this._minDigits(e, e._periods[u], 2),
                    snnn: this._minDigits(e, e._periods[u], 3),
                    s1: y(e._periods[u], 1),
                    s10: y(e._periods[u], 10),
                    s100: y(e._periods[u], 100),
                    s1000: y(e._periods[u], 1e3)
                }, _ = c, w = n; u >= w; w++) {
                    var b = "yowdhms".charAt(w)
                        , x = new RegExp("\\{" + b + "<\\}([\\s\\S]*)\\{" + b + ">\\}","g");
                    _ = _.replace(x, !h && l[w] || h && d[w] ? "$1" : "")
                }
                return t.each(v, function(t, e) {
                    var n = new RegExp("\\{" + t + "\\}","g");
                    _ = _.replace(n, e)
                }),
                    _
            },
            _minDigits: function(t, e, n) {
                return e = "" + e,
                    e.length >= n ? this._translateDigits(t, e) : (e = "0000000000" + e,
                        this._translateDigits(t, e.substr(e.length - n)))
            },
            _translateDigits: function(t, e) {
                return ("" + e).replace(/[0-9]/g, function(e) {
                    return t.options.digits[e]
                })
            },
            _determineShow: function(t) {
                var e = t.options.format
                    , l = [];
                return l[n] = e.match("y") ? "?" : e.match("Y") ? "!" : null,
                    l[i] = e.match("o") ? "?" : e.match("O") ? "!" : null,
                    l[r] = e.match("w") ? "?" : e.match("W") ? "!" : null,
                    l[o] = e.match("d") ? "?" : e.match("D") ? "!" : null,
                    l[s] = e.match("h") ? "?" : e.match("H") ? "!" : null,
                    l[a] = e.match("m") ? "?" : e.match("M") ? "!" : null,
                    l[u] = e.match("s") ? "?" : e.match("S") ? "!" : null,
                    l
            },
            _calculatePeriods: function(t, e, l, c) {
                t._now = c,
                    t._now.setMilliseconds(0);
                var f = new Date(t._now.getTime());
                t._since ? c.getTime() < t._since.getTime() ? t._now = c = f : c = t._since : (f.setTime(t._until.getTime()),
                c.getTime() > t._until.getTime() && (t._now = c = f));
                var h = [0, 0, 0, 0, 0, 0, 0];
                if (e[n] || e[i]) {
                    var d = this._getDaysInMonth(c.getFullYear(), c.getMonth())
                        , p = this._getDaysInMonth(f.getFullYear(), f.getMonth())
                        , m = f.getDate() == c.getDate() || f.getDate() >= Math.min(d, p) && c.getDate() >= Math.min(d, p)
                        , g = function(t) {
                        return 60 * (60 * t.getHours() + t.getMinutes()) + t.getSeconds()
                    }
                        , y = Math.max(0, 12 * (f.getFullYear() - c.getFullYear()) + f.getMonth() - c.getMonth() + (f.getDate() < c.getDate() && !m || m && g(f) < g(c) ? -1 : 0));
                    h[n] = e[n] ? Math.floor(y / 12) : 0,
                        h[i] = e[i] ? y - 12 * h[n] : 0,
                        c = new Date(c.getTime());
                    var v = c.getDate() == d
                        , _ = this._getDaysInMonth(c.getFullYear() + h[n], c.getMonth() + h[i]);
                    c.getDate() > _ && c.setDate(_),
                        c.setFullYear(c.getFullYear() + h[n]),
                        c.setMonth(c.getMonth() + h[i]),
                    v && c.setDate(_)
                }
                var w = Math.floor((f.getTime() - c.getTime()) / 1e3)
                    , b = function(t, n) {
                    h[t] = e[t] ? Math.floor(w / n) : 0,
                        w -= h[t] * n
                };
                if (b(r, 604800),
                        b(o, 86400),
                        b(s, 3600),
                        b(a, 60),
                        b(u, 1),
                    w > 0 && !t._since)
                    for (var x = [1, 12, 4.3482, 7, 24, 60, 60], T = u, D = 1, S = u; S >= n; S--)
                        e[S] && (h[T] >= D && (h[T] = 0,
                            w = 1),
                        w > 0 && (h[S]++,
                            w = 0,
                            T = S,
                            D = 1)),
                            D *= x[S];
                if (l)
                    for (var S = n; u >= S; S++)
                        l && h[S] ? l-- : l || (h[S] = 0);
                return h
            }
        })
    }(jQuery),
    !function(t) {
        if ("object" == typeof exports && "undefined" != typeof module)
            module.exports = t();
        else if ("function" == typeof define && define.amd)
            define([], t);
        else {
            var e;
            e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this,
                e.ProgressBar = t()
        }
    }(function() {
        var t;
        return function e(t, n, i) {
            function r(s, a) {
                if (!n[s]) {
                    if (!t[s]) {
                        var u = "function" == typeof require && require;
                        if (!a && u)
                            return u(s, !0);
                        if (o)
                            return o(s, !0);
                        var l = new Error("Cannot find module '" + s + "'");
                        throw l.code = "MODULE_NOT_FOUND",
                            l
                    }
                    var c = n[s] = {
                        exports: {}
                    };
                    t[s][0].call(c.exports, function(e) {
                        var n = t[s][1][e];
                        return r(n ? n : e)
                    }, c, c.exports, e, t, n, i)
                }
                return n[s].exports
            }
            for (var o = "function" == typeof require && require, s = 0; s < i.length; s++)
                r(i[s]);
            return r
        }({
            1: [function(e, n, i) {
                (function() {
                        var e = this || Function("return this")()
                            , r = function() {
                            "use strict";
                            function r() {}
                            function o(t, e) {
                                var n;
                                for (n in t)
                                    Object.hasOwnProperty.call(t, n) && e(n)
                            }
                            function s(t, e) {
                                return o(e, function(n) {
                                    t[n] = e[n]
                                }),
                                    t
                            }
                            function a(t, e) {
                                o(e, function(n) {
                                    "undefined" == typeof t[n] && (t[n] = e[n])
                                })
                            }
                            function u(t, e, n, i, r, o, s) {
                                var a, u, c, f = o > t ? 0 : (t - o) / r;
                                for (a in e)
                                    e.hasOwnProperty(a) && (u = s[a],
                                        c = "function" == typeof u ? u : p[u],
                                        e[a] = l(n[a], i[a], c, f));
                                return e
                            }
                            function l(t, e, n, i) {
                                return t + (e - t) * n(i)
                            }
                            function c(t, e) {
                                var n = d.prototype.filter
                                    , i = t._filterArgs;
                                o(n, function(r) {
                                    "undefined" != typeof n[r][e] && n[r][e].apply(t, i)
                                })
                            }
                            function f(t, e, n, i, r, o, s, a, l, f, h) {
                                b = e + n + i,
                                    x = Math.min(h || w(), b),
                                    T = x >= b,
                                    D = i - (b - x),
                                t.isPlaying() && (T ? (l(s, t._attachment, D),
                                    t.stop(!0)) : (t._scheduleId = f(t._timeoutHandler, v),
                                    c(t, "beforeTween"),
                                    e + n > x ? u(1, r, o, s, 1, 1, a) : u(x, r, o, s, i, e + n, a),
                                    c(t, "afterTween"),
                                    l(r, t._attachment, D)))
                            }
                            function h(t, e) {
                                var n = {}
                                    , i = typeof e;
                                return "string" === i || "function" === i ? o(t, function(t) {
                                    n[t] = e
                                }) : o(t, function(t) {
                                    n[t] || (n[t] = e[t] || g)
                                }),
                                    n
                            }
                            function d(t, e) {
                                this._currentState = t || {},
                                    this._configured = !1,
                                    this._scheduleFunction = m,
                                "undefined" != typeof e && this.setConfig(e)
                            }
                            var p, m, g = "linear", y = 500, v = 1e3 / 60, _ = Date.now ? Date.now : function() {
                                return +new Date
                            }
                                , w = "undefined" != typeof SHIFTY_DEBUG_NOW ? SHIFTY_DEBUG_NOW : _;
                            m = "undefined" != typeof window ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || window.mozCancelRequestAnimationFrame && window.mozRequestAnimationFrame || setTimeout : setTimeout;
                            var b, x, T, D;
                            return d.prototype.tween = function(t) {
                                return this._isTweening ? this : (void 0 === t && this._configured || this.setConfig(t),
                                    this._timestamp = w(),
                                    this._start(this.get(), this._attachment),
                                    this.resume())
                            }
                                ,
                                d.prototype.setConfig = function(t) {
                                    t = t || {},
                                        this._configured = !0,
                                        this._attachment = t.attachment,
                                        this._pausedAtTime = null,
                                        this._scheduleId = null,
                                        this._delay = t.delay || 0,
                                        this._start = t.start || r,
                                        this._step = t.step || r,
                                        this._finish = t.finish || r,
                                        this._duration = t.duration || y,
                                        this._currentState = s({}, t.from) || this.get(),
                                        this._originalState = this.get(),
                                        this._targetState = s({}, t.to) || this.get();
                                    var e = this;
                                    this._timeoutHandler = function() {
                                        f(e, e._timestamp, e._delay, e._duration, e._currentState, e._originalState, e._targetState, e._easing, e._step, e._scheduleFunction)
                                    }
                                    ;
                                    var n = this._currentState
                                        , i = this._targetState;
                                    return a(i, n),
                                        this._easing = h(n, t.easing || g),
                                        this._filterArgs = [n, this._originalState, i, this._easing],
                                        c(this, "tweenCreated"),
                                        this
                                }
                                ,
                                d.prototype.get = function() {
                                    return s({}, this._currentState)
                                }
                                ,
                                d.prototype.set = function(t) {
                                    this._currentState = t
                                }
                                ,
                                d.prototype.pause = function() {
                                    return this._pausedAtTime = w(),
                                        this._isPaused = !0,
                                        this
                                }
                                ,
                                d.prototype.resume = function() {
                                    return this._isPaused && (this._timestamp += w() - this._pausedAtTime),
                                        this._isPaused = !1,
                                        this._isTweening = !0,
                                        this._timeoutHandler(),
                                        this
                                }
                                ,
                                d.prototype.seek = function(t) {
                                    t = Math.max(t, 0);
                                    var e = w();
                                    return this._timestamp + t === 0 ? this : (this._timestamp = e - t,
                                    this.isPlaying() || (this._isTweening = !0,
                                        this._isPaused = !1,
                                        f(this, this._timestamp, this._delay, this._duration, this._currentState, this._originalState, this._targetState, this._easing, this._step, this._scheduleFunction, e),
                                        this.pause()),
                                        this)
                                }
                                ,
                                d.prototype.stop = function(t) {
                                    return this._isTweening = !1,
                                        this._isPaused = !1,
                                        this._timeoutHandler = r,
                                        (e.cancelAnimationFrame || e.webkitCancelAnimationFrame || e.oCancelAnimationFrame || e.msCancelAnimationFrame || e.mozCancelRequestAnimationFrame || e.clearTimeout)(this._scheduleId),
                                    t && (c(this, "beforeTween"),
                                        u(1, this._currentState, this._originalState, this._targetState, 1, 0, this._easing),
                                        c(this, "afterTween"),
                                        c(this, "afterTweenEnd"),
                                        this._finish.call(this, this._currentState, this._attachment)),
                                        this
                                }
                                ,
                                d.prototype.isPlaying = function() {
                                    return this._isTweening && !this._isPaused
                                }
                                ,
                                d.prototype.setScheduleFunction = function(t) {
                                    this._scheduleFunction = t
                                }
                                ,
                                d.prototype.dispose = function() {
                                    var t;
                                    for (t in this)
                                        this.hasOwnProperty(t) && delete this[t]
                                }
                                ,
                                d.prototype.filter = {},
                                d.prototype.formula = {
                                    linear: function(t) {
                                        return t
                                    }
                                },
                                p = d.prototype.formula,
                                s(d, {
                                    now: w,
                                    each: o,
                                    tweenProps: u,
                                    tweenProp: l,
                                    applyFilter: c,
                                    shallowCopy: s,
                                    defaults: a,
                                    composeEasingObject: h
                                }),
                            "function" == typeof SHIFTY_DEBUG_NOW && (e.timeoutHandler = f),
                                "object" == typeof i ? n.exports = d : "function" == typeof t && t.amd ? t(function() {
                                    return d
                                }) : "undefined" == typeof e.Tweenable && (e.Tweenable = d),
                                d
                        }();
                        !function() {
                            r.shallowCopy(r.prototype.formula, {
                                easeInQuad: function(t) {
                                    return Math.pow(t, 2)
                                },
                                easeOutQuad: function(t) {
                                    return -(Math.pow(t - 1, 2) - 1)
                                },
                                easeInOutQuad: function(t) {
                                    return (t /= .5) < 1 ? .5 * Math.pow(t, 2) : -.5 * ((t -= 2) * t - 2)
                                },
                                easeInCubic: function(t) {
                                    return Math.pow(t, 3)
                                },
                                easeOutCubic: function(t) {
                                    return Math.pow(t - 1, 3) + 1
                                },
                                easeInOutCubic: function(t) {
                                    return (t /= .5) < 1 ? .5 * Math.pow(t, 3) : .5 * (Math.pow(t - 2, 3) + 2)
                                },
                                easeInQuart: function(t) {
                                    return Math.pow(t, 4)
                                },
                                easeOutQuart: function(t) {
                                    return -(Math.pow(t - 1, 4) - 1)
                                },
                                easeInOutQuart: function(t) {
                                    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                                },
                                easeInQuint: function(t) {
                                    return Math.pow(t, 5)
                                },
                                easeOutQuint: function(t) {
                                    return Math.pow(t - 1, 5) + 1
                                },
                                easeInOutQuint: function(t) {
                                    return (t /= .5) < 1 ? .5 * Math.pow(t, 5) : .5 * (Math.pow(t - 2, 5) + 2)
                                },
                                easeInSine: function(t) {
                                    return -Math.cos(t * (Math.PI / 2)) + 1
                                },
                                easeOutSine: function(t) {
                                    return Math.sin(t * (Math.PI / 2))
                                },
                                easeInOutSine: function(t) {
                                    return -.5 * (Math.cos(Math.PI * t) - 1)
                                },
                                easeInExpo: function(t) {
                                    return 0 === t ? 0 : Math.pow(2, 10 * (t - 1))
                                },
                                easeOutExpo: function(t) {
                                    return 1 === t ? 1 : -Math.pow(2, -10 * t) + 1
                                },
                                easeInOutExpo: function(t) {
                                    return 0 === t ? 0 : 1 === t ? 1 : (t /= .5) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (-Math.pow(2, -10 * --t) + 2)
                                },
                                easeInCirc: function(t) {
                                    return -(Math.sqrt(1 - t * t) - 1)
                                },
                                easeOutCirc: function(t) {
                                    return Math.sqrt(1 - Math.pow(t - 1, 2))
                                },
                                easeInOutCirc: function(t) {
                                    return (t /= .5) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                                },
                                easeOutBounce: function(t) {
                                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                },
                                easeInBack: function(t) {
                                    var e = 1.70158;
                                    return t * t * ((e + 1) * t - e)
                                },
                                easeOutBack: function(t) {
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                },
                                easeInOutBack: function(t) {
                                    var e = 1.70158;
                                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                                },
                                elastic: function(t) {
                                    return -1 * Math.pow(4, -8 * t) * Math.sin((6 * t - 1) * (2 * Math.PI) / 2) + 1
                                },
                                swingFromTo: function(t) {
                                    var e = 1.70158;
                                    return (t /= .5) < 1 ? .5 * (t * t * (((e *= 1.525) + 1) * t - e)) : .5 * ((t -= 2) * t * (((e *= 1.525) + 1) * t + e) + 2)
                                },
                                swingFrom: function(t) {
                                    var e = 1.70158;
                                    return t * t * ((e + 1) * t - e)
                                },
                                swingTo: function(t) {
                                    var e = 1.70158;
                                    return (t -= 1) * t * ((e + 1) * t + e) + 1
                                },
                                bounce: function(t) {
                                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                                },
                                bouncePast: function(t) {
                                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 2 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : 2.5 / 2.75 > t ? 2 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 2 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                                },
                                easeFromTo: function(t) {
                                    return (t /= .5) < 1 ? .5 * Math.pow(t, 4) : -.5 * ((t -= 2) * Math.pow(t, 3) - 2)
                                },
                                easeFrom: function(t) {
                                    return Math.pow(t, 4)
                                },
                                easeTo: function(t) {
                                    return Math.pow(t, .25)
                                }
                            })
                        }(),
                            function() {
                                function t(t, e, n, i, r, o) {
                                    function s(t) {
                                        return ((d * t + p) * t + m) * t
                                    }
                                    function a(t) {
                                        return ((g * t + y) * t + v) * t
                                    }
                                    function u(t) {
                                        return (3 * d * t + 2 * p) * t + m
                                    }
                                    function l(t) {
                                        return 1 / (200 * t)
                                    }
                                    function c(t, e) {
                                        return a(h(t, e))
                                    }
                                    function f(t) {
                                        return t >= 0 ? t : 0 - t
                                    }
                                    function h(t, e) {
                                        var n, i, r, o, a, l;
                                        for (r = t,
                                                 l = 0; 8 > l; l++) {
                                            if (o = s(r) - t,
                                                f(o) < e)
                                                return r;
                                            if (a = u(r),
                                                f(a) < 1e-6)
                                                break;
                                            r -= o / a
                                        }
                                        if (n = 0,
                                                i = 1,
                                                r = t,
                                            n > r)
                                            return n;
                                        if (r > i)
                                            return i;
                                        for (; i > n; ) {
                                            if (o = s(r),
                                                f(o - t) < e)
                                                return r;
                                            t > o ? n = r : i = r,
                                                r = .5 * (i - n) + n
                                        }
                                        return r
                                    }
                                    var d = 0
                                        , p = 0
                                        , m = 0
                                        , g = 0
                                        , y = 0
                                        , v = 0;
                                    return m = 3 * e,
                                        p = 3 * (i - e) - m,
                                        d = 1 - m - p,
                                        v = 3 * n,
                                        y = 3 * (r - n) - v,
                                        g = 1 - v - y,
                                        c(t, l(o))
                                }
                                function e(e, n, i, r) {
                                    return function(o) {
                                        return t(o, e, n, i, r, 1)
                                    }
                                }
                                r.setBezierFunction = function(t, n, i, o, s) {
                                    var a = e(n, i, o, s);
                                    return a.displayName = t,
                                        a.x1 = n,
                                        a.y1 = i,
                                        a.x2 = o,
                                        a.y2 = s,
                                        r.prototype.formula[t] = a
                                }
                                    ,
                                    r.unsetBezierFunction = function(t) {
                                        delete r.prototype.formula[t]
                                    }
                            }(),
                            function() {
                                function t(t, e, n, i, o, s) {
                                    return r.tweenProps(i, e, t, n, 1, s, o)
                                }
                                var e = new r;
                                e._filterArgs = [],
                                    r.interpolate = function(n, i, o, s, a) {
                                        var u = r.shallowCopy({}, n)
                                            , l = a || 0
                                            , c = r.composeEasingObject(n, s || "linear");
                                        e.set({});
                                        var f = e._filterArgs;
                                        f.length = 0,
                                            f[0] = u,
                                            f[1] = n,
                                            f[2] = i,
                                            f[3] = c,
                                            r.applyFilter(e, "tweenCreated"),
                                            r.applyFilter(e, "beforeTween");
                                        var h = t(n, u, i, o, c, l);
                                        return r.applyFilter(e, "afterTween"),
                                            h
                                    }
                            }(),
                            function(t) {
                                function e(t, e) {
                                    var n, i = [], r = t.length;
                                    for (n = 0; r > n; n++)
                                        i.push("_" + e + "_" + n);
                                    return i
                                }
                                function n(t) {
                                    var e = t.match(b);
                                    return e ? (1 === e.length || t[0].match(w)) && e.unshift("") : e = ["", ""],
                                        e.join(C)
                                }
                                function i(e) {
                                    t.each(e, function(t) {
                                        var n = e[t];
                                        "string" == typeof n && n.match(S) && (e[t] = r(n))
                                    })
                                }
                                function r(t) {
                                    return u(S, t, o)
                                }
                                function o(t) {
                                    var e = s(t);
                                    return "rgb(" + e[0] + "," + e[1] + "," + e[2] + ")"
                                }
                                function s(t) {
                                    return t = t.replace(/#/, ""),
                                    3 === t.length && (t = t.split(""),
                                        t = t[0] + t[0] + t[1] + t[1] + t[2] + t[2]),
                                        k[0] = a(t.substr(0, 2)),
                                        k[1] = a(t.substr(2, 2)),
                                        k[2] = a(t.substr(4, 2)),
                                        k
                                }
                                function a(t) {
                                    return parseInt(t, 16)
                                }
                                function u(t, e, n) {
                                    var i = e.match(t)
                                        , r = e.replace(t, C);
                                    if (i)
                                        for (var o, s = i.length, a = 0; s > a; a++)
                                            o = i.shift(),
                                                r = r.replace(C, n(o));
                                    return r
                                }
                                function l(t) {
                                    return u(T, t, c)
                                }
                                function c(t) {
                                    for (var e = t.match(x), n = e.length, i = t.match(D)[0], r = 0; n > r; r++)
                                        i += parseInt(e[r], 10) + ",";
                                    return i = i.slice(0, -1) + ")"
                                }
                                function f(i) {
                                    var r = {};
                                    return t.each(i, function(t) {
                                        var o = i[t];
                                        if ("string" == typeof o) {
                                            var s = y(o);
                                            r[t] = {
                                                formatString: n(o),
                                                chunkNames: e(s, t)
                                            }
                                        }
                                    }),
                                        r
                                }
                                function h(e, n) {
                                    t.each(n, function(t) {
                                        for (var i = e[t], r = y(i), o = r.length, s = 0; o > s; s++)
                                            e[n[t].chunkNames[s]] = +r[s];
                                        delete e[t]
                                    })
                                }
                                function d(e, n) {
                                    t.each(n, function(t) {
                                        var i = e[t]
                                            , r = p(e, n[t].chunkNames)
                                            , o = m(r, n[t].chunkNames);
                                        i = g(n[t].formatString, o),
                                            e[t] = l(i)
                                    })
                                }
                                function p(t, e) {
                                    for (var n, i = {}, r = e.length, o = 0; r > o; o++)
                                        n = e[o],
                                            i[n] = t[n],
                                            delete t[n];
                                    return i
                                }
                                function m(t, e) {
                                    M.length = 0;
                                    for (var n = e.length, i = 0; n > i; i++)
                                        M.push(t[e[i]]);
                                    return M
                                }
                                function g(t, e) {
                                    for (var n = t, i = e.length, r = 0; i > r; r++)
                                        n = n.replace(C, +e[r].toFixed(4));
                                    return n
                                }
                                function y(t) {
                                    return t.match(x)
                                }
                                function v(e, n) {
                                    t.each(n, function(t) {
                                        var i, r = n[t], o = r.chunkNames, s = o.length, a = e[t];
                                        if ("string" == typeof a) {
                                            var u = a.split(" ")
                                                , l = u[u.length - 1];
                                            for (i = 0; s > i; i++)
                                                e[o[i]] = u[i] || l
                                        } else
                                            for (i = 0; s > i; i++)
                                                e[o[i]] = a;
                                        delete e[t]
                                    })
                                }
                                function _(e, n) {
                                    t.each(n, function(t) {
                                        var i = n[t]
                                            , r = i.chunkNames
                                            , o = r.length
                                            , s = e[r[0]]
                                            , a = typeof s;
                                        if ("string" === a) {
                                            for (var u = "", l = 0; o > l; l++)
                                                u += " " + e[r[l]],
                                                    delete e[r[l]];
                                            e[t] = u.substr(1)
                                        } else
                                            e[t] = s
                                    })
                                }
                                var w = /(\d|\-|\.)/
                                    , b = /([^\-0-9\.]+)/g
                                    , x = /[0-9.\-]+/g
                                    , T = new RegExp("rgb\\(" + x.source + /,\s*/.source + x.source + /,\s*/.source + x.source + "\\)","g")
                                    , D = /^.*\(/
                                    , S = /#([0-9]|[a-f]){3,6}/gi
                                    , C = "VAL"
                                    , k = []
                                    , M = [];
                                t.prototype.filter.token = {
                                    tweenCreated: function(t, e, n, r) {
                                        i(t),
                                            i(e),
                                            i(n),
                                            this._tokenData = f(t)
                                    },
                                    beforeTween: function(t, e, n, i) {
                                        v(i, this._tokenData),
                                            h(t, this._tokenData),
                                            h(e, this._tokenData),
                                            h(n, this._tokenData)
                                    },
                                    afterTween: function(t, e, n, i) {
                                        d(t, this._tokenData),
                                            d(e, this._tokenData),
                                            d(n, this._tokenData),
                                            _(i, this._tokenData)
                                    }
                                }
                            }(r)
                    }
                ).call(null)
            }
                , {}],
            2: [function(t, e, n) {
                var i = t("./shape")
                    , r = t("./utils")
                    , o = function(t, e) {
                    this._pathTemplate = "M 50,50 m 0,-{radius} a {radius},{radius} 0 1 1 0,{2radius} a {radius},{radius} 0 1 1 0,-{2radius}",
                        this.containerAspectRatio = 1,
                        i.apply(this, arguments)
                };
                o.prototype = new i,
                    o.prototype.constructor = o,
                    o.prototype._pathString = function(t) {
                        var e = t.strokeWidth;
                        t.trailWidth && t.trailWidth > t.strokeWidth && (e = t.trailWidth);
                        var n = 50 - e / 2;
                        return r.render(this._pathTemplate, {
                            radius: n,
                            "2radius": 2 * n
                        })
                    }
                    ,
                    o.prototype._trailString = function(t) {
                        return this._pathString(t)
                    }
                    ,
                    e.exports = o
            }
                , {
                    "./shape": 7,
                    "./utils": 8
                }],
            3: [function(t, e, n) {
                var i = t("./shape")
                    , r = t("./utils")
                    , o = function(t, e) {
                    this._pathTemplate = "M 0,{center} L 100,{center}",
                        i.apply(this, arguments)
                };
                o.prototype = new i,
                    o.prototype.constructor = o,
                    o.prototype._initializeSvg = function(t, e) {
                        t.setAttribute("viewBox", "0 0 100 " + e.strokeWidth),
                            t.setAttribute("preserveAspectRatio", "none")
                    }
                    ,
                    o.prototype._pathString = function(t) {
                        return r.render(this._pathTemplate, {
                            center: t.strokeWidth / 2
                        })
                    }
                    ,
                    o.prototype._trailString = function(t) {
                        return this._pathString(t)
                    }
                    ,
                    e.exports = o
            }
                , {
                    "./shape": 7,
                    "./utils": 8
                }],
            4: [function(t, e, n) {
                e.exports = {
                    Line: t("./line"),
                    Circle: t("./circle"),
                    SemiCircle: t("./semicircle"),
                    Path: t("./path"),
                    Shape: t("./shape"),
                    utils: t("./utils")
                }
            }
                , {
                    "./circle": 2,
                    "./line": 3,
                    "./path": 5,
                    "./semicircle": 6,
                    "./shape": 7,
                    "./utils": 8
                }],
            5: [function(t, e, n) {
                var i = t("shifty")
                    , r = t("./utils")
                    , o = {
                    easeIn: "easeInCubic",
                    easeOut: "easeOutCubic",
                    easeInOut: "easeInOutCubic"
                }
                    , s = function a(t, e) {
                    if (!(this instanceof a))
                        throw new Error("Constructor was called without new keyword");
                    e = r.extend({
                        duration: 800,
                        easing: "linear",
                        from: {},
                        to: {},
                        step: function() {}
                    }, e);
                    var n;
                    n = r.isString(t) ? document.querySelector(t) : t,
                        this.path = n,
                        this._opts = e,
                        this._tweenable = null;
                    var i = this.path.getTotalLength();
                    this.path.style.strokeDasharray = i + " " + i,
                        this.set(0)
                };
                s.prototype.value = function() {
                    var t = this._getComputedDashOffset()
                        , e = this.path.getTotalLength()
                        , n = 1 - t / e;
                    return parseFloat(n.toFixed(6), 10)
                }
                    ,
                    s.prototype.set = function(t) {
                        this.stop(),
                            this.path.style.strokeDashoffset = this._progressToOffset(t);
                        var e = this._opts.step;
                        if (r.isFunction(e)) {
                            var n = this._easing(this._opts.easing)
                                , i = this._calculateTo(t, n)
                                , o = this._opts.shape || this;
                            e(i, o, this._opts.attachment)
                        }
                    }
                    ,
                    s.prototype.stop = function() {
                        this._stopTween(),
                            this.path.style.strokeDashoffset = this._getComputedDashOffset()
                    }
                    ,
                    s.prototype.animate = function(t, e, n) {
                        e = e || {},
                        r.isFunction(e) && (n = e,
                            e = {});
                        var o = r.extend({}, e)
                            , s = r.extend({}, this._opts);
                        e = r.extend(s, e);
                        var a = this._easing(e.easing)
                            , u = this._resolveFromAndTo(t, a, o);
                        this.stop(),
                            this.path.getBoundingClientRect();
                        var l = this._getComputedDashOffset()
                            , c = this._progressToOffset(t)
                            , f = this;
                        this._tweenable = new i,
                            this._tweenable.tween({
                                from: r.extend({
                                    offset: l
                                }, u.from),
                                to: r.extend({
                                    offset: c
                                }, u.to),
                                duration: e.duration,
                                easing: a,
                                step: function(t) {
                                    f.path.style.strokeDashoffset = t.offset;
                                    var n = e.shape || f;
                                    e.step(t, n, e.attachment)
                                },
                                finish: function(t) {
                                    r.isFunction(n) && n()
                                }
                            })
                    }
                    ,
                    s.prototype._getComputedDashOffset = function() {
                        var t = window.getComputedStyle(this.path, null);
                        return parseFloat(t.getPropertyValue("stroke-dashoffset"), 10)
                    }
                    ,
                    s.prototype._progressToOffset = function(t) {
                        var e = this.path.getTotalLength();
                        return e - t * e
                    }
                    ,
                    s.prototype._resolveFromAndTo = function(t, e, n) {
                        return n.from && n.to ? {
                            from: n.from,
                            to: n.to
                        } : {
                            from: this._calculateFrom(e),
                            to: this._calculateTo(t, e)
                        }
                    }
                    ,
                    s.prototype._calculateFrom = function(t) {
                        return i.interpolate(this._opts.from, this._opts.to, this.value(), t)
                    }
                    ,
                    s.prototype._calculateTo = function(t, e) {
                        return i.interpolate(this._opts.from, this._opts.to, t, e)
                    }
                    ,
                    s.prototype._stopTween = function() {
                        null !== this._tweenable && (this._tweenable.stop(),
                            this._tweenable = null)
                    }
                    ,
                    s.prototype._easing = function(t) {
                        return o.hasOwnProperty(t) ? o[t] : t
                    }
                    ,
                    e.exports = s
            }
                , {
                    "./utils": 8,
                    shifty: 1
                }],
            6: [function(t, e, n) {
                var i = t("./shape")
                    , r = t("./circle")
                    , o = t("./utils")
                    , s = function(t, e) {
                    this._pathTemplate = "M 50,50 m -{radius},0 a {radius},{radius} 0 1 1 {2radius},0",
                        this.containerAspectRatio = 2,
                        i.apply(this, arguments)
                };
                s.prototype = new i,
                    s.prototype.constructor = s,
                    s.prototype._initializeSvg = function(t, e) {
                        t.setAttribute("viewBox", "0 0 100 50")
                    }
                    ,
                    s.prototype._initializeTextContainer = function(t, e, n) {
                        t.text.style && (n.style.top = "auto",
                            n.style.bottom = "0",
                            t.text.alignToBottom ? o.setStyle(n, "transform", "translate(-50%, 0)") : o.setStyle(n, "transform", "translate(-50%, 50%)"))
                    }
                    ,
                    s.prototype._pathString = r.prototype._pathString,
                    s.prototype._trailString = r.prototype._trailString,
                    e.exports = s
            }
                , {
                    "./circle": 2,
                    "./shape": 7,
                    "./utils": 8
                }],
            7: [function(t, e, n) {
                var i = t("./path")
                    , r = t("./utils")
                    , o = "Object is destroyed"
                    , s = function a(t, e) {
                    if (!(this instanceof a))
                        throw new Error("Constructor was called without new keyword");
                    if (0 !== arguments.length) {
                        this._opts = r.extend({
                            color: "#555",
                            strokeWidth: 1,
                            trailColor: null,
                            trailWidth: null,
                            fill: null,
                            text: {
                                style: {
                                    color: null,
                                    position: "absolute",
                                    left: "50%",
                                    top: "50%",
                                    padding: 0,
                                    margin: 0,
                                    transform: {
                                        prefix: !0,
                                        value: "translate(-50%, -50%)"
                                    }
                                },
                                autoStyleContainer: !0,
                                alignToBottom: !0,
                                value: null,
                                className: "progressbar-text"
                            },
                            svgStyle: {
                                display: "block",
                                width: "100%"
                            },
                            warnings: !1
                        }, e, !0),
                        r.isObject(e) && void 0 !== e.svgStyle && (this._opts.svgStyle = e.svgStyle),
                        r.isObject(e) && r.isObject(e.text) && void 0 !== e.text.style && (this._opts.text.style = e.text.style);
                        var n, o = this._createSvgView(this._opts);
                        if (n = r.isString(t) ? document.querySelector(t) : t,
                                !n)
                            throw new Error("Container does not exist: " + t);
                        this._container = n,
                            this._container.appendChild(o.svg),
                        this._opts.warnings && this._warnContainerAspectRatio(this._container),
                        this._opts.svgStyle && r.setStyles(o.svg, this._opts.svgStyle),
                            this.svg = o.svg,
                            this.path = o.path,
                            this.trail = o.trail,
                            this.text = null;
                        var s = r.extend({
                            attachment: void 0,
                            shape: this
                        }, this._opts);
                        this._progressPath = new i(o.path,s),
                        r.isObject(this._opts.text) && null !== this._opts.text.value && this.setText(this._opts.text.value)
                    }
                };
                s.prototype.animate = function(t, e, n) {
                    if (null === this._progressPath)
                        throw new Error(o);
                    this._progressPath.animate(t, e, n)
                }
                    ,
                    s.prototype.stop = function() {
                        if (null === this._progressPath)
                            throw new Error(o);
                        void 0 !== this._progressPath && this._progressPath.stop()
                    }
                    ,
                    s.prototype.destroy = function() {
                        if (null === this._progressPath)
                            throw new Error(o);
                        this.stop(),
                            this.svg.parentNode.removeChild(this.svg),
                            this.svg = null,
                            this.path = null,
                            this.trail = null,
                            this._progressPath = null,
                        null !== this.text && (this.text.parentNode.removeChild(this.text),
                            this.text = null)
                    }
                    ,
                    s.prototype.set = function(t) {
                        if (null === this._progressPath)
                            throw new Error(o);
                        this._progressPath.set(t)
                    }
                    ,
                    s.prototype.value = function() {
                        if (null === this._progressPath)
                            throw new Error(o);
                        return void 0 === this._progressPath ? 0 : this._progressPath.value()
                    }
                    ,
                    s.prototype.setText = function(t) {
                        if (null === this._progressPath)
                            throw new Error(o);
                        null === this.text && (this.text = this._createTextContainer(this._opts, this._container),
                            this._container.appendChild(this.text)),
                            r.isObject(t) ? (r.removeChildren(this.text),
                                this.text.appendChild(t)) : this.text.innerHTML = t
                    }
                    ,
                    s.prototype._createSvgView = function(t) {
                        var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        this._initializeSvg(e, t);
                        var n = null;
                        (t.trailColor || t.trailWidth) && (n = this._createTrail(t),
                            e.appendChild(n));
                        var i = this._createPath(t);
                        return e.appendChild(i),
                            {
                                svg: e,
                                path: i,
                                trail: n
                            }
                    }
                    ,
                    s.prototype._initializeSvg = function(t, e) {
                        t.setAttribute("viewBox", "0 0 100 100")
                    }
                    ,
                    s.prototype._createPath = function(t) {
                        var e = this._pathString(t);
                        return this._createPathElement(e, t)
                    }
                    ,
                    s.prototype._createTrail = function(t) {
                        var e = this._trailString(t)
                            , n = r.extend({}, t);
                        return n.trailColor || (n.trailColor = "#eee"),
                        n.trailWidth || (n.trailWidth = n.strokeWidth),
                            n.color = n.trailColor,
                            n.strokeWidth = n.trailWidth,
                            n.fill = null,
                            this._createPathElement(e, n)
                    }
                    ,
                    s.prototype._createPathElement = function(t, e) {
                        var n = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        return n.setAttribute("d", t),
                            n.setAttribute("stroke", e.color),
                            n.setAttribute("stroke-width", e.strokeWidth),
                            e.fill ? n.setAttribute("fill", e.fill) : n.setAttribute("fill-opacity", "0"),
                            n
                    }
                    ,
                    s.prototype._createTextContainer = function(t, e) {
                        var n = document.createElement("div");
                        n.className = t.text.className;
                        var i = t.text.style;
                        return i && (t.text.autoStyleContainer && (e.style.position = "relative"),
                            r.setStyles(n, i),
                        i.color || (n.style.color = t.color)),
                            this._initializeTextContainer(t, e, n),
                            n
                    }
                    ,
                    s.prototype._initializeTextContainer = function(t, e, n) {}
                    ,
                    s.prototype._pathString = function(t) {
                        throw new Error("Override this function for each progress bar")
                    }
                    ,
                    s.prototype._trailString = function(t) {
                        throw new Error("Override this function for each progress bar")
                    }
                    ,
                    s.prototype._warnContainerAspectRatio = function(t) {
                        if (this.containerAspectRatio) {
                            var e = window.getComputedStyle(t, null)
                                , n = parseFloat(e.getPropertyValue("width"), 10)
                                , i = parseFloat(e.getPropertyValue("height"), 10);
                            r.floatEquals(this.containerAspectRatio, n / i) || (console.warn("Incorrect aspect ratio of container", "#" + t.id, "detected:", e.getPropertyValue("width") + "(width)", "/", e.getPropertyValue("height") + "(height)", "=", n / i),
                                console.warn("Aspect ratio of should be", this.containerAspectRatio))
                        }
                    }
                    ,
                    e.exports = s
            }
                , {
                    "./path": 5,
                    "./utils": 8
                }],
            8: [function(t, e, n) {
                function i(t, e, n) {
                    t = t || {},
                        e = e || {},
                        n = n || !1;
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            var o = t[r]
                                , s = e[r];
                            n && f(o) && f(s) ? t[r] = i(o, s, n) : t[r] = s
                        }
                    return t
                }
                function r(t, e) {
                    var n = t;
                    for (var i in e)
                        if (e.hasOwnProperty(i)) {
                            var r = e[i]
                                , o = "\\{" + i + "\\}"
                                , s = new RegExp(o,"g");
                            n = n.replace(s, r)
                        }
                    return n
                }
                function o(t, e, n) {
                    for (var i = t.style, r = 0; r < m.length; ++r) {
                        var o = m[r];
                        i[o + a(e)] = n
                    }
                    i[e] = n
                }
                function s(t, e) {
                    h(e, function(e, n) {
                        null !== e && void 0 !== e && (f(e) && e.prefix === !0 ? o(t, n, e.value) : t.style[n] = e)
                    })
                }
                function a(t) {
                    return t.charAt(0).toUpperCase() + t.slice(1)
                }
                function u(t) {
                    return "string" == typeof t || t instanceof String
                }
                function l(t) {
                    return "function" == typeof t
                }
                function c(t) {
                    return "[object Array]" === Object.prototype.toString.call(t)
                }
                function f(t) {
                    if (c(t))
                        return !1;
                    var e = typeof t;
                    return "object" === e && !!t
                }
                function h(t, e) {
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var i = t[n];
                            e(i, n)
                        }
                }
                function d(t, e) {
                    return Math.abs(t - e) < g
                }
                function p(t) {
                    for (; t.firstChild; )
                        t.removeChild(t.firstChild)
                }
                var m = "Webkit Moz O ms".split(" ")
                    , g = .001;
                e.exports = {
                    extend: i,
                    render: r,
                    setStyle: o,
                    setStyles: s,
                    capitalize: a,
                    isString: u,
                    isFunction: l,
                    isObject: f,
                    forEachObject: h,
                    floatEquals: d,
                    removeChildren: p
                }
            }
                , {}]
        }, {}, [4])(4)
    }),
    function() {
        var t, e, n, i, r, o = function(t, e) {
                return function() {
                    return t.apply(e, arguments)
                }
            }, s = [].indexOf || function(t) {
                for (var e = 0, n = this.length; n > e; e++)
                    if (e in this && this[e] === t)
                        return e;
                return -1
            }
        ;
        e = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var n, i;
                for (n in e)
                    i = e[n],
                    null == t[n] && (t[n] = i);
                return t
            }
                ,
                t.prototype.isMobile = function(t) {
                    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(t)
                }
                ,
                t.prototype.createEvent = function(t, e, n, i) {
                    var r;
                    return null == e && (e = !1),
                    null == n && (n = !1),
                    null == i && (i = null),
                        null != document.createEvent ? (r = document.createEvent("CustomEvent"),
                            r.initCustomEvent(t, e, n, i)) : null != document.createEventObject ? (r = document.createEventObject(),
                            r.eventType = t) : r.eventName = t,
                        r
                }
                ,
                t.prototype.emitEvent = function(t, e) {
                    return null != t.dispatchEvent ? t.dispatchEvent(e) : e in (null != t) ? t[e]() : "on" + e in (null != t) ? t["on" + e]() : void 0
                }
                ,
                t.prototype.addEvent = function(t, e, n) {
                    return null != t.addEventListener ? t.addEventListener(e, n, !1) : null != t.attachEvent ? t.attachEvent("on" + e, n) : t[e] = n
                }
                ,
                t.prototype.removeEvent = function(t, e, n) {
                    return null != t.removeEventListener ? t.removeEventListener(e, n, !1) : null != t.detachEvent ? t.detachEvent("on" + e, n) : delete t[e]
                }
                ,
                t.prototype.innerHeight = function() {
                    return "innerHeight"in window ? window.innerHeight : document.documentElement.clientHeight
                }
                ,
                t
        }(),
            n = this.WeakMap || this.MozWeakMap || (n = function() {
                function t() {
                    this.keys = [],
                        this.values = []
                }
                return t.prototype.get = function(t) {
                    var e, n, i, r, o;
                    for (o = this.keys,
                             e = i = 0,
                             r = o.length; r > i; e = ++i)
                        if (n = o[e],
                            n === t)
                            return this.values[e]
                }
                    ,
                    t.prototype.set = function(t, e) {
                        var n, i, r, o, s;
                        for (s = this.keys,
                                 n = r = 0,
                                 o = s.length; o > r; n = ++r)
                            if (i = s[n],
                                i === t)
                                return void (this.values[n] = e);
                        return this.keys.push(t),
                            this.values.push(e)
                    }
                    ,
                    t
            }()),
            t = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (t = function() {
                function t() {
                    "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."),
                    "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
                }
                return t.notSupported = !0,
                    t.prototype.observe = function() {}
                    ,
                    t
            }()),
            i = this.getComputedStyle || function(t, e) {
                return this.getPropertyValue = function(e) {
                    var n;
                    return "float" === e && (e = "styleFloat"),
                    r.test(e) && e.replace(r, function(t, e) {
                        return e.toUpperCase()
                    }),
                    (null != (n = t.currentStyle) ? n[e] : void 0) || null
                }
                    ,
                    this
            }
            ,
            r = /(\-([a-z]){1})/g,
            this.WOW = function() {
                function r(t) {
                    null == t && (t = {}),
                        this.scrollCallback = o(this.scrollCallback, this),
                        this.scrollHandler = o(this.scrollHandler, this),
                        this.resetAnimation = o(this.resetAnimation, this),
                        this.start = o(this.start, this),
                        this.scrolled = !0,
                        this.config = this.util().extend(t, this.defaults),
                        this.animationNameCache = new n,
                        this.wowEvent = this.util().createEvent(this.config.boxClass)
                }
                return r.prototype.defaults = {
                    boxClass: "wow",
                    animateClass: "animated",
                    offset: 0,
                    mobile: !0,
                    live: !0,
                    callback: null
                },
                    r.prototype.init = function() {
                        var t;
                        return this.element = window.document.documentElement,
                            "interactive" === (t = document.readyState) || "complete" === t ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start),
                            this.finished = []
                    }
                    ,
                    r.prototype.start = function() {
                        var e, n, i, r;
                        if (this.stopped = !1,
                                this.boxes = function() {
                                    var t, n, i, r;
                                    for (i = this.element.querySelectorAll("." + this.config.boxClass),
                                             r = [],
                                             t = 0,
                                             n = i.length; n > t; t++)
                                        e = i[t],
                                            r.push(e);
                                    return r
                                }
                                    .call(this),
                                this.all = function() {
                                    var t, n, i, r;
                                    for (i = this.boxes,
                                             r = [],
                                             t = 0,
                                             n = i.length; n > t; t++)
                                        e = i[t],
                                            r.push(e);
                                    return r
                                }
                                    .call(this),
                                this.boxes.length)
                            if (this.disabled())
                                this.resetStyle();
                            else
                                for (r = this.boxes,
                                         n = 0,
                                         i = r.length; i > n; n++)
                                    e = r[n],
                                        this.applyStyle(e, !0);
                        return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler),
                            this.util().addEvent(window, "resize", this.scrollHandler),
                            this.interval = setInterval(this.scrollCallback, 50)),
                            this.config.live ? new t(function(t) {
                                return function(e) {
                                    var n, i, r, o, s;
                                    for (s = [],
                                             n = 0,
                                             i = e.length; i > n; n++)
                                        o = e[n],
                                            s.push(function() {
                                                var t, e, n, i;
                                                for (n = o.addedNodes || [],
                                                         i = [],
                                                         t = 0,
                                                         e = n.length; e > t; t++)
                                                    r = n[t],
                                                        i.push(this.doSync(r));
                                                return i
                                            }
                                                .call(t));
                                    return s
                                }
                            }(this)).observe(document.body, {
                                childList: !0,
                                subtree: !0
                            }) : void 0
                    }
                    ,
                    r.prototype.stop = function() {
                        return this.stopped = !0,
                            this.util().removeEvent(window, "scroll", this.scrollHandler),
                            this.util().removeEvent(window, "resize", this.scrollHandler),
                            null != this.interval ? clearInterval(this.interval) : void 0
                    }
                    ,
                    r.prototype.sync = function(e) {
                        return t.notSupported ? this.doSync(this.element) : void 0
                    }
                    ,
                    r.prototype.doSync = function(t) {
                        var e, n, i, r, o;
                        if (null == t && (t = this.element),
                            1 === t.nodeType) {
                            for (t = t.parentNode || t,
                                     r = t.querySelectorAll("." + this.config.boxClass),
                                     o = [],
                                     n = 0,
                                     i = r.length; i > n; n++)
                                e = r[n],
                                    s.call(this.all, e) < 0 ? (this.boxes.push(e),
                                        this.all.push(e),
                                        this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e, !0),
                                        o.push(this.scrolled = !0)) : o.push(void 0);
                            return o
                        }
                    }
                    ,
                    r.prototype.show = function(t) {
                        return this.applyStyle(t),
                            t.className = t.className + " " + this.config.animateClass,
                        null != this.config.callback && this.config.callback(t),
                            this.util().emitEvent(t, this.wowEvent),
                            this.util().addEvent(t, "animationend", this.resetAnimation),
                            this.util().addEvent(t, "oanimationend", this.resetAnimation),
                            this.util().addEvent(t, "webkitAnimationEnd", this.resetAnimation),
                            this.util().addEvent(t, "MSAnimationEnd", this.resetAnimation),
                            t
                    }
                    ,
                    r.prototype.applyStyle = function(t, e) {
                        var n, i, r;
                        return i = t.getAttribute("data-wow-duration"),
                            n = t.getAttribute("data-wow-delay"),
                            r = t.getAttribute("data-wow-iteration"),
                            this.animate(function(o) {
                                return function() {
                                    return o.customStyle(t, e, i, n, r)
                                }
                            }(this))
                    }
                    ,
                    r.prototype.animate = function() {
                        return "requestAnimationFrame"in window ? function(t) {
                                return window.requestAnimationFrame(t)
                            }
                            : function(t) {
                                return t()
                            }
                    }(),
                    r.prototype.resetStyle = function() {
                        var t, e, n, i, r;
                        for (i = this.boxes,
                                 r = [],
                                 e = 0,
                                 n = i.length; n > e; e++)
                            t = i[e],
                                r.push(t.style.visibility = "visible");
                        return r
                    }
                    ,
                    r.prototype.resetAnimation = function(t) {
                        var e;
                        return t.type.toLowerCase().indexOf("animationend") >= 0 ? (e = t.target || t.srcElement,
                            e.className = e.className.replace(this.config.animateClass, "").trim()) : void 0
                    }
                    ,
                    r.prototype.customStyle = function(t, e, n, i, r) {
                        return e && this.cacheAnimationName(t),
                            t.style.visibility = e ? "hidden" : "visible",
                        n && this.vendorSet(t.style, {
                            animationDuration: n
                        }),
                        i && this.vendorSet(t.style, {
                            animationDelay: i
                        }),
                        r && this.vendorSet(t.style, {
                            animationIterationCount: r
                        }),
                            this.vendorSet(t.style, {
                                animationName: e ? "none" : this.cachedAnimationName(t)
                            }),
                            t
                    }
                    ,
                    r.prototype.vendors = ["moz", "webkit"],
                    r.prototype.vendorSet = function(t, e) {
                        var n, i, r, o;
                        i = [];
                        for (n in e)
                            r = e[n],
                                t["" + n] = r,
                                i.push(function() {
                                    var e, i, s, a;
                                    for (s = this.vendors,
                                             a = [],
                                             e = 0,
                                             i = s.length; i > e; e++)
                                        o = s[e],
                                            a.push(t["" + o + n.charAt(0).toUpperCase() + n.substr(1)] = r);
                                    return a
                                }
                                    .call(this));
                        return i
                    }
                    ,
                    r.prototype.vendorCSS = function(t, e) {
                        var n, r, o, s, a, u;
                        for (a = i(t),
                                 s = a.getPropertyCSSValue(e),
                                 o = this.vendors,
                                 n = 0,
                                 r = o.length; r > n; n++)
                            u = o[n],
                                s = s || a.getPropertyCSSValue("-" + u + "-" + e);
                        return s
                    }
                    ,
                    r.prototype.animationName = function(t) {
                        var e;
                        try {
                            e = this.vendorCSS(t, "animation-name").cssText
                        } catch (n) {
                            e = i(t).getPropertyValue("animation-name")
                        }
                        return "none" === e ? "" : e
                    }
                    ,
                    r.prototype.cacheAnimationName = function(t) {
                        return this.animationNameCache.set(t, this.animationName(t))
                    }
                    ,
                    r.prototype.cachedAnimationName = function(t) {
                        return this.animationNameCache.get(t)
                    }
                    ,
                    r.prototype.scrollHandler = function() {
                        return this.scrolled = !0
                    }
                    ,
                    r.prototype.scrollCallback = function() {
                        var t;
                        return !this.scrolled || (this.scrolled = !1,
                            this.boxes = function() {
                                var e, n, i, r;
                                for (i = this.boxes,
                                         r = [],
                                         e = 0,
                                         n = i.length; n > e; e++)
                                    t = i[e],
                                    t && (this.isVisible(t) ? this.show(t) : r.push(t));
                                return r
                            }
                                .call(this),
                        this.boxes.length || this.config.live) ? void 0 : this.stop()
                    }
                    ,
                    r.prototype.offsetTop = function(t) {
                        for (var e; void 0 === t.offsetTop; )
                            t = t.parentNode;
                        for (e = t.offsetTop; t = t.offsetParent; )
                            e += t.offsetTop;
                        return e
                    }
                    ,
                    r.prototype.isVisible = function(t) {
                        var e, n, i, r, o;
                        return n = t.getAttribute("data-wow-offset") || this.config.offset,
                            o = window.pageYOffset,
                            r = o + Math.min(this.element.clientHeight, this.util().innerHeight()) - n,
                            i = this.offsetTop(t),
                            e = i + t.clientHeight,
                        r >= i && e >= o
                    }
                    ,
                    r.prototype.util = function() {
                        return null != this._util ? this._util : this._util = new e
                    }
                    ,
                    r.prototype.disabled = function() {
                        return !this.config.mobile && this.util().isMobile(navigator.userAgent)
                    }
                    ,
                    r
            }()
    }
        .call(this),
    function() {
        Date.shortMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            Date.longMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            Date.shortDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            Date.longDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var t = {
            d: function() {
                return (this.getDate() < 10 ? "0" : "") + this.getDate()
            },
            D: function() {
                return Date.shortDays[this.getDay()]
            },
            j: function() {
                return this.getDate()
            },
            l: function() {
                return Date.longDays[this.getDay()]
            },
            N: function() {
                return 0 == this.getDay() ? 7 : this.getDay()
            },
            S: function() {
                return this.getDate() % 10 == 1 && 11 != this.getDate() ? "st" : this.getDate() % 10 == 2 && 12 != this.getDate() ? "nd" : this.getDate() % 10 == 3 && 13 != this.getDate() ? "rd" : "th"
            },
            w: function() {
                return this.getDay()
            },
            z: function() {
                var t = new Date(this.getFullYear(),0,1);
                return Math.ceil((this - t) / 864e5)
            },
            W: function() {
                var t = new Date(this.valueOf())
                    , e = (this.getDay() + 6) % 7;
                t.setDate(t.getDate() - e + 3);
                var n = t.valueOf();
                return t.setMonth(0, 1),
                4 !== t.getDay() && t.setMonth(0, 1 + (4 - t.getDay() + 7) % 7),
                1 + Math.ceil((n - t) / 6048e5)
            },
            F: function() {
                return Date.longMonths[this.getMonth()]
            },
            m: function() {
                return (this.getMonth() < 9 ? "0" : "") + (this.getMonth() + 1)
            },
            M: function() {
                return Date.shortMonths[this.getMonth()]
            },
            n: function() {
                return this.getMonth() + 1
            },
            t: function() {
                var t = this.getFullYear()
                    , e = this.getMonth() + 1;
                return 12 === e && (t = t++,
                    e = 0),
                    new Date(t,e,0).getDate()
            },
            L: function() {
                var t = this.getFullYear();
                return t % 400 == 0 || t % 100 != 0 && t % 4 == 0
            },
            o: function() {
                var t = new Date(this.valueOf());
                return t.setDate(t.getDate() - (this.getDay() + 6) % 7 + 3),
                    t.getFullYear()
            },
            Y: function() {
                return this.getFullYear()
            },
            y: function() {
                return ("" + this.getFullYear()).substr(2)
            },
            a: function() {
                return this.getHours() < 12 ? "am" : "pm"
            },
            A: function() {
                return this.getHours() < 12 ? "AM" : "PM"
            },
            B: function() {
                return Math.floor(1e3 * ((this.getUTCHours() + 1) % 24 + this.getUTCMinutes() / 60 + this.getUTCSeconds() / 3600) / 24)
            },
            g: function() {
                return this.getHours() % 12 || 12
            },
            G: function() {
                return this.getHours()
            },
            h: function() {
                return ((this.getHours() % 12 || 12) < 10 ? "0" : "") + (this.getHours() % 12 || 12)
            },
            H: function() {
                return (this.getHours() < 10 ? "0" : "") + this.getHours()
            },
            i: function() {
                return (this.getMinutes() < 10 ? "0" : "") + this.getMinutes()
            },
            s: function() {
                return (this.getSeconds() < 10 ? "0" : "") + this.getSeconds()
            },
            u: function() {
                var t = this.getMilliseconds();
                return (10 > t ? "00" : 100 > t ? "0" : "") + t
            },
            e: function() {
                return /\((.*)\)/.exec((new Date).toString())[1]
            },
            I: function() {
                for (var t = null, e = 0; 12 > e; ++e) {
                    var n = new Date(this.getFullYear(),e,1)
                        , i = n.getTimezoneOffset();
                    if (null === t)
                        t = i;
                    else {
                        if (t > i) {
                            t = i;
                            break
                        }
                        if (i > t)
                            break
                    }
                }
                return this.getTimezoneOffset() == t | 0
            },
            O: function() {
                return (-this.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(this.getTimezoneOffset() / 60) + "00"
            },
            P: function() {
                return (-this.getTimezoneOffset() < 0 ? "-" : "+") + (Math.abs(this.getTimezoneOffset() / 60) < 10 ? "0" : "") + Math.abs(this.getTimezoneOffset() / 60) + ":00"
            },
            T: function() {
                return this.toTimeString().replace(/^.+ \(?([^\)]+)\)?$/, "$1")
            },
            Z: function() {
                return 60 * -this.getTimezoneOffset()
            },
            c: function() {
                return this.format("Y-m-d\\TH:i:sP")
            },
            r: function() {
                return this.toString()
            },
            U: function() {
                return this.getTime() / 1e3
            }
        };
        Date.prototype.format = function(e) {
            var n = this;
            return e.replace(/(\\?)(.)/g, function(e, i, r) {
                return "" === i && t[r] ? t[r].call(n) : r
            })
        }
    }
        .call(this),
    function(t) {
        function e(t) {
            var e = function(t, n) {
                var r = o({}, e, n || {});
                return i(t, r)
            };
            return o(e, {
                language: "en",
                delimiter: ", ",
                spacer: " ",
                units: ["y", "mo", "w", "d", "h", "m", "s"],
                languages: {},
                round: !1,
                unitMeasures: {
                    y: 315576e5,
                    mo: 26298e5,
                    w: 6048e5,
                    d: 864e5,
                    h: 36e5,
                    m: 6e4,
                    s: 1e3,
                    ms: 1
                }
            }, t)
        }
        function n() {
            return f.apply(f, arguments)
        }
        function i(t, e) {
            t = Math.abs(t);
            var n = e.languages[e.language] || c[e.language];
            if (!n)
                throw new Error("No language " + n + ".");
            for (var i, o, s, a = [], u = 0, l = e.units.length; l > u && (i = e.units[u],
                o = e.unitMeasures[i],
                u + 1 === l ? (s = t / o,
                e.round && (s = Math.round(s))) : s = Math.floor(t / o),
            s && a.push(r(s, i, n, e)),
                !(e.largest && e.largest <= a.length)); u++)
                t -= s * o;
            return a.length ? a.join(e.delimiter) : r(0, e.units[e.units.length - 1], n, e)
        }
        function r(t, e, n, i) {
            var r;
            r = void 0 === i.decimal ? n.decimal : i.decimal;
            var o, s = t.toString().replace(".", r), a = n[e];
            return o = "function" == typeof a ? a(t) : a,
            s + i.spacer + o
        }
        function o(t) {
            for (var e, n = 1; n < arguments.length; n++) {
                e = arguments[n];
                for (var i in e)
                    e.hasOwnProperty(i) && (t[i] = e[i])
            }
            return t
        }
        function s(t) {
            return 1 === t ? 0 : Math.floor(t) !== t ? 1 : t % 10 >= 2 && 4 >= t % 10 && 10 > t % 100 ? 2 : 3
        }
        function a(t) {
            return 1 === t ? 0 : Math.floor(t) !== t ? 1 : t % 10 >= 2 && 4 >= t % 10 && !(t % 100 > 10 && 20 > t % 100) ? 2 : 3
        }
        function u(t) {
            return Math.floor(t) !== t ? 2 : t >= 5 && 20 >= t || t % 10 >= 5 && 9 >= t % 10 || t % 10 === 0 ? 0 : t % 10 === 1 ? 1 : t > 1 ? 2 : 0
        }
        function l() {
            var t = [];
            for (var e in c)
                c.hasOwnProperty(e) && t.push(e);
            return t
        }
        var c = {
            ar: {
                y: function(t) {
                    return 1 === t ? "سنة" : "سنوات"
                },
                mo: function(t) {
                    return 1 === t ? "شهر" : "أشهر"
                },
                w: function(t) {
                    return 1 === t ? "أسبوع" : "أسابيع"
                },
                d: function(t) {
                    return 1 === t ? "يوم" : "أيام"
                },
                h: function(t) {
                    return 1 === t ? "ساعة" : "ساعات"
                },
                m: function(t) {
                    return 1 === t ? "دقيقة" : "دقائق"
                },
                s: function(t) {
                    return 1 === t ? "ثانية" : "ثواني"
                },
                ms: function(t) {
                    return 1 === t ? "جزء من الثانية" : "أجزاء من الثانية"
                },
                decimal: ","
            },
            ca: {
                y: function(t) {
                    return "any" + (1 !== t ? "s" : "")
                },
                mo: function(t) {
                    return "mes" + (1 !== t ? "os" : "")
                },
                w: function(t) {
                    return "setman" + (1 !== t ? "es" : "a")
                },
                d: function(t) {
                    return "di" + (1 !== t ? "es" : "a")
                },
                h: function(t) {
                    return "hor" + (1 !== t ? "es" : "a")
                },
                m: function(t) {
                    return "minut" + (1 !== t ? "s" : "")
                },
                s: function(t) {
                    return "segon" + (1 !== t ? "s" : "")
                },
                ms: function(t) {
                    return "milisegon" + (1 !== t ? "s" : "")
                },
                decimal: ","
            },
            cs: {
                y: function(t) {
                    return ["rok", "roku", "roky", "let"][s(t)]
                },
                mo: function(t) {
                    return ["měsíc", "měsíce", "měsíce", "měsíců"][s(t)]
                },
                w: function(t) {
                    return ["týden", "týdne", "týdny", "týdnů"][s(t)]
                },
                d: function(t) {
                    return ["den", "dne", "dny", "dní"][s(t)]
                },
                h: function(t) {
                    return ["hodina", "hodiny", "hodiny", "hodin"][s(t)]
                },
                m: function(t) {
                    return ["minuta", "minuty", "minuty", "minut"][s(t)]
                },
                s: function(t) {
                    return ["sekunda", "sekundy", "sekundy", "sekund"][s(t)]
                },
                ms: function(t) {
                    return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][s(t)]
                },
                decimal: ","
            },
            da: {
                y: "år",
                mo: function(t) {
                    return "måned" + (1 !== t ? "er" : "")
                },
                w: function(t) {
                    return "uge" + (1 !== t ? "r" : "")
                },
                d: function(t) {
                    return "dag" + (1 !== t ? "e" : "")
                },
                h: function(t) {
                    return "time" + (1 !== t ? "r" : "")
                },
                m: function(t) {
                    return "minut" + (1 !== t ? "ter" : "")
                },
                s: function(t) {
                    return "sekund" + (1 !== t ? "er" : "")
                },
                ms: function(t) {
                    return "millisekund" + (1 !== t ? "er" : "")
                },
                decimal: ","
            },
            de: {
                y: function(t) {
                    return "Jahr" + (1 !== t ? "e" : "")
                },
                mo: function(t) {
                    return "Monat" + (1 !== t ? "e" : "")
                },
                w: function(t) {
                    return "Woche" + (1 !== t ? "n" : "")
                },
                d: function(t) {
                    return "Tag" + (1 !== t ? "e" : "")
                },
                h: function(t) {
                    return "Stunde" + (1 !== t ? "n" : "")
                },
                m: function(t) {
                    return "Minute" + (1 !== t ? "n" : "")
                },
                s: function(t) {
                    return "Sekunde" + (1 !== t ? "n" : "")
                },
                ms: function(t) {
                    return "Millisekunde" + (1 !== t ? "n" : "")
                },
                decimal: ","
            },
            en: {
                y: function(t) {
                    return "year" + (1 !== t ? "s" : "")
                },
                mo: function(t) {
                    return "month" + (1 !== t ? "s" : "")
                },
                w: function(t) {
                    return "week" + (1 !== t ? "s" : "")
                },
                d: function(t) {
                    return "day" + (1 !== t ? "s" : "")
                },
                h: function(t) {
                    return "hour" + (1 !== t ? "s" : "")
                },
                m: function(t) {
                    return "minute" + (1 !== t ? "s" : "")
                },
                s: function(t) {
                    return "second" + (1 !== t ? "s" : "")
                },
                ms: function(t) {
                    return "millisecond" + (1 !== t ? "s" : "")
                },
                decimal: "."
            },
            es: {
                y: function(t) {
                    return "año" + (1 !== t ? "s" : "")
                },
                mo: function(t) {
                    return "mes" + (1 !== t ? "es" : "")
                },
                w: function(t) {
                    return "semana" + (1 !== t ? "s" : "")
                },
                d: function(t) {
                    return "día" + (1 !== t ? "s" : "")
                },
                h: function(t) {
                    return "hora" + (1 !== t ? "s" : "")
                },
                m: function(t) {
                    return "minuto" + (1 !== t ? "s" : "")
                },
                s: function(t) {
                    return "segundo" + (1 !== t ? "s" : "")
                },
                ms: function(t) {
                    return "milisegundo" + (1 !== t ? "s" : "")
                },
                decimal: ","
            },
            fr: {
                y: function(t) {
                    return "an" + (1 !== t ? "s" : "")
                },
                mo: "mois",
                w: function(t) {
                    return "semaine" + (1 !== t ? "s" : "")
                },
                d: function(t) {
                    return "jour" + (1 !== t ? "s" : "")
                },
                h: function(t) {
                    return "heure" + (1 !== t ? "s" : "")
                },
                m: function(t) {
                    return "minute" + (1 !== t ? "s" : "")
                },
                s: function(t) {
                    return "seconde" + (1 !== t ? "s" : "")
                },
                ms: function(t) {
                    return "milliseconde" + (1 !== t ? "s" : "")
                },
                decimal: ","
            },
            gr: {
                y: function(t) {
                    return 1 === t ? "χρόνος" : "χρόνια"
                },
                mo: function(t) {
                    return 1 === t ? "μήνας" : "μήνες"
                },
                w: function(t) {
                    return 1 === t ? "εβδομάδα" : "εβδομάδες"
                },
                d: function(t) {
                    return 1 === t ? "μέρα" : "μέρες"
                },
                h: function(t) {
                    return 1 === t ? "ώρα" : "ώρες"
                },
                m: function(t) {
                    return 1 === t ? "λεπτό" : "λεπτά"
                },
                s: function(t) {
                    return 1 === t ? "δευτερόλεπτο" : "δευτερόλεπτα"
                },
                ms: function(t) {
                    return 1 === t ? "χιλιοστό του δευτερολέπτου" : "χιλιοστά του δευτερολέπτου"
                },
                decimal: ","
            },
            hu: {
                y: "év",
                mo: "hónap",
                w: "hét",
                d: "nap",
                h: "óra",
                m: "perc",
                s: "másodperc",
                ms: "ezredmásodperc",
                decimal: ","
            },
            it: {
                y: function(t) {
                    return "ann" + (1 !== t ? "i" : "o")
                },
                mo: function(t) {
                    return "mes" + (1 !== t ? "i" : "e")
                },
                w: function(t) {
                    return "settiman" + (1 !== t ? "e" : "a")
                },
                d: function(t) {
                    return "giorn" + (1 !== t ? "i" : "o")
                },
                h: function(t) {
                    return "or" + (1 !== t ? "e" : "a")
                },
                m: function(t) {
                    return "minut" + (1 !== t ? "i" : "o")
                },
                s: function(t) {
                    return "second" + (1 !== t ? "i" : "o")
                },
                ms: function(t) {
                    return "millisecond" + (1 !== t ? "i" : "o")
                },
                decimal: ","
            },
            ja: {
                y: "年",
                mo: "月",
                w: "週",
                d: "日",
                h: "時間",
                m: "分",
                s: "秒",
                ms: "ミリ秒",
                decimal: "."
            },
            ko: {
                y: "년",
                mo: "개월",
                w: "주일",
                d: "일",
                h: "시간",
                m: "분",
                s: "초",
                ms: "밀리 초",
                decimal: "."
            },
            nl: {
                y: "jaar",
                mo: function(t) {
                    return 1 === t ? "maand" : "maanden"
                },
                w: function(t) {
                    return 1 === t ? "week" : "weken"
                },
                d: function(t) {
                    return 1 === t ? "dag" : "dagen"
                },
                h: "uur",
                m: function(t) {
                    return 1 === t ? "minuut" : "minuten"
                },
                s: function(t) {
                    return 1 === t ? "seconde" : "seconden"
                },
                ms: function(t) {
                    return 1 === t ? "milliseconde" : "milliseconden"
                },
                decimal: ","
            },
            no: {
                y: "år",
                mo: function(t) {
                    return "måned" + (1 !== t ? "er" : "")
                },
                w: function(t) {
                    return "uke" + (1 !== t ? "r" : "")
                },
                d: function(t) {
                    return "dag" + (1 !== t ? "er" : "")
                },
                h: function(t) {
                    return "time" + (1 !== t ? "r" : "")
                },
                m: function(t) {
                    return "minutt" + (1 !== t ? "er" : "")
                },
                s: function(t) {
                    return "sekund" + (1 !== t ? "er" : "")
                },
                ms: function(t) {
                    return "millisekund" + (1 !== t ? "er" : "")
                },
                decimal: ","
            },
            pl: {
                y: function(t) {
                    return ["rok", "roku", "lata", "lat"][a(t)]
                },
                mo: function(t) {
                    return ["miesiąc", "miesiąca", "miesiące", "miesięcy"][a(t)]
                },
                w: function(t) {
                    return ["tydzień", "tygodnia", "tygodnie", "tygodni"][a(t)]
                },
                d: function(t) {
                    return ["dzień", "dnia", "dni", "dni"][a(t)]
                },
                h: function(t) {
                    return ["godzina", "godziny", "godziny", "godzin"][a(t)]
                },
                m: function(t) {
                    return ["minuta", "minuty", "minuty", "minut"][a(t)]
                },
                s: function(t) {
                    return ["sekunda", "sekundy", "sekundy", "sekund"][a(t)]
                },
                ms: function(t) {
                    return ["milisekunda", "milisekundy", "milisekundy", "milisekund"][a(t)]
                },
                decimal: ","
            },
            pt: {
                y: function(t) {
                    return "ano" + (1 !== t ? "s" : "")
                },
                mo: function(t) {
                    return 1 !== t ? "meses" : "mês"
                },
                w: function(t) {
                    return "semana" + (1 !== t ? "s" : "")
                },
                d: function(t) {
                    return "dia" + (1 !== t ? "s" : "")
                },
                h: function(t) {
                    return "hora" + (1 !== t ? "s" : "")
                },
                m: function(t) {
                    return "minuto" + (1 !== t ? "s" : "")
                },
                s: function(t) {
                    return "segundo" + (1 !== t ? "s" : "")
                },
                ms: function(t) {
                    return "milissegundo" + (1 !== t ? "s" : "")
                },
                decimal: ","
            },
            ru: {
                y: function(t) {
                    return ["лет", "год", "года"][u(t)]
                },
                mo: function(t) {
                    return ["месяцев", "месяц", "месяца"][u(t)]
                },
                w: function(t) {
                    return ["недель", "неделя", "недели"][u(t)]
                },
                d: function(t) {
                    return ["дней", "день", "дня"][u(t)]
                },
                h: function(t) {
                    return ["часов", "час", "часа"][u(t)]
                },
                m: function(t) {
                    return ["минут", "минута", "минуты"][u(t)]
                },
                s: function(t) {
                    return ["секунд", "секунда", "секунды"][u(t)]
                },
                ms: function(t) {
                    return ["миллисекунд", "миллисекунда", "миллисекунды"][u(t)]
                },
                decimal: ","
            },
            uk: {
                y: function(t) {
                    return ["років", "рік", "роки"][u(t)]
                },
                mo: function(t) {
                    return ["місяців", "місяць", "місяці"][u(t)]
                },
                w: function(t) {
                    return ["неділь", "неділя", "неділі"][u(t)]
                },
                d: function(t) {
                    return ["днів", "день", "дні"][u(t)]
                },
                h: function(t) {
                    return ["годин", "година", "години"][u(t)]
                },
                m: function(t) {
                    return ["хвилин", "хвилина", "хвилини"][u(t)]
                },
                s: function(t) {
                    return ["секунд", "секунда", "секунди"][u(t)]
                },
                ms: function(t) {
                    return ["мілісекунд", "мілісекунда", "мілісекунди"][u(t)]
                },
                decimal: ","
            },
            sv: {
                y: "år",
                mo: function(t) {
                    return "månad" + (1 !== t ? "er" : "")
                },
                w: function(t) {
                    return "veck" + (1 !== t ? "or" : "a")
                },
                d: function(t) {
                    return "dag" + (1 !== t ? "ar" : "")
                },
                h: function(t) {
                    return "timm" + (1 !== t ? "ar" : "e")
                },
                m: function(t) {
                    return "minut" + (1 !== t ? "er" : "")
                },
                s: function(t) {
                    return "sekund" + (1 !== t ? "er" : "")
                },
                ms: function(t) {
                    return "millisekund" + (1 !== t ? "er" : "")
                },
                decimal: ","
            },
            tr: {
                y: "yıl",
                mo: "ay",
                w: "hafta",
                d: "gün",
                h: "saat",
                m: "dakika",
                s: "saniye",
                ms: "milisaniye",
                decimal: ","
            },
            zh_CN: {
                y: "年",
                mo: "个月",
                w: "周",
                d: "天",
                h: "小时",
                m: "分钟",
                s: "秒",
                ms: "毫秒",
                decimal: "."
            },
            zh_TW: {
                y: "年",
                mo: "個月",
                w: "周",
                d: "天",
                h: "小時",
                m: "分鐘",
                s: "秒",
                ms: "毫秒",
                decimal: "."
            }
        }
            , f = e({});
        n.humanizer = e,
            n.getSupportedLanguages = l,
            "function" == typeof define && define.amd ? define(function() {
                return n
            }) : "undefined" != typeof module && module.exports ? module.exports = n : t.humanizeDuration = n
    }(this),
    !function(t, e) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.moment = e()
    }(this, function() {
        "use strict";
        function t() {
            return Pn.apply(null, arguments)
        }
        function e(t) {
            Pn = t
        }
        function n(t) {
            return "[object Array]" === Object.prototype.toString.call(t)
        }
        function i(t) {
            return t instanceof Date || "[object Date]" === Object.prototype.toString.call(t)
        }
        function r(t, e) {
            var n, i = [];
            for (n = 0; n < t.length; ++n)
                i.push(e(t[n], n));
            return i
        }
        function o(t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }
        function s(t, e) {
            for (var n in e)
                o(e, n) && (t[n] = e[n]);
            return o(e, "toString") && (t.toString = e.toString),
            o(e, "valueOf") && (t.valueOf = e.valueOf),
                t
        }
        function a(t, e, n, i) {
            return Mt(t, e, n, i, !0).utc()
        }
        function u() {
            return {
                empty: !1,
                unusedTokens: [],
                unusedInput: [],
                overflow: -2,
                charsLeftOver: 0,
                nullInput: !1,
                invalidMonth: null,
                invalidFormat: !1,
                userInvalidated: !1,
                iso: !1
            }
        }
        function l(t) {
            return null == t._pf && (t._pf = u()),
                t._pf
        }
        function c(t) {
            if (null == t._isValid) {
                var e = l(t);
                t._isValid = !(isNaN(t._d.getTime()) || !(e.overflow < 0) || e.empty || e.invalidMonth || e.invalidWeekday || e.nullInput || e.invalidFormat || e.userInvalidated),
                t._strict && (t._isValid = t._isValid && 0 === e.charsLeftOver && 0 === e.unusedTokens.length && void 0 === e.bigHour)
            }
            return t._isValid
        }
        function f(t) {
            var e = a(NaN);
            return null != t ? s(l(e), t) : l(e).userInvalidated = !0,
                e
        }
        function h(t, e) {
            var n, i, r;
            if ("undefined" != typeof e._isAMomentObject && (t._isAMomentObject = e._isAMomentObject),
                "undefined" != typeof e._i && (t._i = e._i),
                "undefined" != typeof e._f && (t._f = e._f),
                "undefined" != typeof e._l && (t._l = e._l),
                "undefined" != typeof e._strict && (t._strict = e._strict),
                "undefined" != typeof e._tzm && (t._tzm = e._tzm),
                "undefined" != typeof e._isUTC && (t._isUTC = e._isUTC),
                "undefined" != typeof e._offset && (t._offset = e._offset),
                "undefined" != typeof e._pf && (t._pf = l(e)),
                "undefined" != typeof e._locale && (t._locale = e._locale),
                Ln.length > 0)
                for (n in Ln)
                    i = Ln[n],
                        r = e[i],
                    "undefined" != typeof r && (t[i] = r);
            return t
        }
        function d(e) {
            h(this, e),
                this._d = new Date(null != e._d ? e._d.getTime() : NaN),
            jn === !1 && (jn = !0,
                t.updateOffset(this),
                jn = !1)
        }
        function p(t) {
            return t instanceof d || null != t && null != t._isAMomentObject
        }
        function m(t) {
            return 0 > t ? Math.ceil(t) : Math.floor(t)
        }
        function g(t) {
            var e = +t
                , n = 0;
            return 0 !== e && isFinite(e) && (n = m(e)),
                n
        }
        function y(t, e, n) {
            var i, r = Math.min(t.length, e.length), o = Math.abs(t.length - e.length), s = 0;
            for (i = 0; r > i; i++)
                (n && t[i] !== e[i] || !n && g(t[i]) !== g(e[i])) && s++;
            return s + o
        }
        function v() {}
        function _(t) {
            return t ? t.toLowerCase().replace("_", "-") : t
        }
        function w(t) {
            for (var e, n, i, r, o = 0; o < t.length; ) {
                for (r = _(t[o]).split("-"),
                         e = r.length,
                         n = _(t[o + 1]),
                         n = n ? n.split("-") : null; e > 0; ) {
                    if (i = b(r.slice(0, e).join("-")))
                        return i;
                    if (n && n.length >= e && y(r, n, !0) >= e - 1)
                        break;
                    e--
                }
                o++
            }
            return null
        }
        function b(t) {
            var e = null;
            if (!Hn[t] && "undefined" != typeof module && module && module.exports)
                try {
                    e = Yn._abbr,
                        require("./locale/" + t),
                        x(e)
                } catch (n) {}
            return Hn[t]
        }
        function x(t, e) {
            var n;
            return t && (n = "undefined" == typeof e ? D(t) : T(t, e),
            n && (Yn = n)),
                Yn._abbr
        }
        function T(t, e) {
            return null !== e ? (e.abbr = t,
                Hn[t] = Hn[t] || new v,
                Hn[t].set(e),
                x(t),
                Hn[t]) : (delete Hn[t],
                null)
        }
        function D(t) {
            var e;
            if (t && t._locale && t._locale._abbr && (t = t._locale._abbr),
                    !t)
                return Yn;
            if (!n(t)) {
                if (e = b(t))
                    return e;
                t = [t]
            }
            return w(t)
        }
        function S(t, e) {
            var n = t.toLowerCase();
            Wn[n] = Wn[n + "s"] = Wn[e] = t
        }
        function C(t) {
            return "string" == typeof t ? Wn[t] || Wn[t.toLowerCase()] : void 0
        }
        function k(t) {
            var e, n, i = {};
            for (n in t)
                o(t, n) && (e = C(n),
                e && (i[e] = t[n]));
            return i
        }
        function M(e, n) {
            return function(i) {
                return null != i ? (O(this, e, i),
                    t.updateOffset(this, n),
                    this) : E(this, e)
            }
        }
        function E(t, e) {
            return t._d["get" + (t._isUTC ? "UTC" : "") + e]()
        }
        function O(t, e, n) {
            return t._d["set" + (t._isUTC ? "UTC" : "") + e](n)
        }
        function A(t, e) {
            var n;
            if ("object" == typeof t)
                for (n in t)
                    this.set(n, t[n]);
            else if (t = C(t),
                "function" == typeof this[t])
                return this[t](e);
            return this
        }
        function N(t, e, n) {
            var i = "" + Math.abs(t)
                , r = e - i.length
                , o = t >= 0;
            return (o ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, r)).toString().substr(1) + i
        }
        function F(t, e, n, i) {
            var r = i;
            "string" == typeof i && (r = function() {
                    return this[i]()
                }
            ),
            t && (Un[t] = r),
            e && (Un[e[0]] = function() {
                    return N(r.apply(this, arguments), e[1], e[2])
                }
            ),
            n && (Un[n] = function() {
                    return this.localeData().ordinal(r.apply(this, arguments), t)
                }
            )
        }
        function P(t) {
            return t.match(/\[[\s\S]/) ? t.replace(/^\[|\]$/g, "") : t.replace(/\\/g, "")
        }
        function Y(t) {
            var e, n, i = t.match(In);
            for (e = 0,
                     n = i.length; n > e; e++)
                Un[i[e]] ? i[e] = Un[i[e]] : i[e] = P(i[e]);
            return function(r) {
                var o = "";
                for (e = 0; n > e; e++)
                    o += i[e]instanceof Function ? i[e].call(r, t) : i[e];
                return o
            }
        }
        function L(t, e) {
            return t.isValid() ? (e = j(e, t.localeData()),
                zn[e] = zn[e] || Y(e),
                zn[e](t)) : t.localeData().invalidDate()
        }
        function j(t, e) {
            function n(t) {
                return e.longDateFormat(t) || t
            }
            var i = 5;
            for (qn.lastIndex = 0; i >= 0 && qn.test(t); )
                t = t.replace(qn, n),
                    qn.lastIndex = 0,
                    i -= 1;
            return t
        }
        function H(t) {
            return "function" == typeof t && "[object Function]" === Object.prototype.toString.call(t)
        }
        function W(t, e, n) {
            ri[t] = H(e) ? e : function(t) {
                return t && n ? n : e
            }
        }
        function I(t, e) {
            return o(ri, t) ? ri[t](e._strict, e._locale) : new RegExp(q(t))
        }
        function q(t) {
            return t.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(t, e, n, i, r) {
                return e || n || i || r
            }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
        }
        function z(t, e) {
            var n, i = e;
            for ("string" == typeof t && (t = [t]),
                 "number" == typeof e && (i = function(t, n) {
                         n[e] = g(t)
                     }
                 ),
                     n = 0; n < t.length; n++)
                oi[t[n]] = i
        }
        function U(t, e) {
            z(t, function(t, n, i, r) {
                i._w = i._w || {},
                    e(t, i._w, i, r)
            })
        }
        function R(t, e, n) {
            null != e && o(oi, t) && oi[t](e, n._a, n, t)
        }
        function $(t, e) {
            return new Date(Date.UTC(t, e + 1, 0)).getUTCDate()
        }
        function B(t) {
            return this._months[t.month()]
        }
        function G(t) {
            return this._monthsShort[t.month()]
        }
        function V(t, e, n) {
            var i, r, o;
            for (this._monthsParse || (this._monthsParse = [],
                this._longMonthsParse = [],
                this._shortMonthsParse = []),
                     i = 0; 12 > i; i++) {
                if (r = a([2e3, i]),
                    n && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(r, "").replace(".", "") + "$","i"),
                        this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(r, "").replace(".", "") + "$","i")),
                    n || this._monthsParse[i] || (o = "^" + this.months(r, "") + "|^" + this.monthsShort(r, ""),
                        this._monthsParse[i] = new RegExp(o.replace(".", ""),"i")),
                    n && "MMMM" === e && this._longMonthsParse[i].test(t))
                    return i;
                if (n && "MMM" === e && this._shortMonthsParse[i].test(t))
                    return i;
                if (!n && this._monthsParse[i].test(t))
                    return i
            }
        }
        function Q(t, e) {
            var n;
            return "string" == typeof e && (e = t.localeData().monthsParse(e),
            "number" != typeof e) ? t : (n = Math.min(t.date(), $(t.year(), e)),
                t._d["set" + (t._isUTC ? "UTC" : "") + "Month"](e, n),
                t)
        }
        function J(e) {
            return null != e ? (Q(this, e),
                t.updateOffset(this, !0),
                this) : E(this, "Month")
        }
        function X() {
            return $(this.year(), this.month())
        }
        function Z(t) {
            var e, n = t._a;
            return n && -2 === l(t).overflow && (e = n[ai] < 0 || n[ai] > 11 ? ai : n[ui] < 1 || n[ui] > $(n[si], n[ai]) ? ui : n[li] < 0 || n[li] > 24 || 24 === n[li] && (0 !== n[ci] || 0 !== n[fi] || 0 !== n[hi]) ? li : n[ci] < 0 || n[ci] > 59 ? ci : n[fi] < 0 || n[fi] > 59 ? fi : n[hi] < 0 || n[hi] > 999 ? hi : -1,
            l(t)._overflowDayOfYear && (si > e || e > ui) && (e = ui),
                l(t).overflow = e),
                t
        }
        function K(e) {
            t.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e)
        }
        function tt(t, e) {
            var n = !0;
            return s(function() {
                return n && (K(t + "\n" + (new Error).stack),
                    n = !1),
                    e.apply(this, arguments)
            }, e)
        }
        function et(t, e) {
            mi[t] || (K(e),
                mi[t] = !0)
        }
        function nt(t) {
            var e, n, i = t._i, r = gi.exec(i);
            if (r) {
                for (l(t).iso = !0,
                         e = 0,
                         n = yi.length; n > e; e++)
                    if (yi[e][1].exec(i)) {
                        t._f = yi[e][0];
                        break
                    }
                for (e = 0,
                         n = vi.length; n > e; e++)
                    if (vi[e][1].exec(i)) {
                        t._f += (r[6] || " ") + vi[e][0];
                        break
                    }
                i.match(ei) && (t._f += "Z"),
                    bt(t)
            } else
                t._isValid = !1
        }
        function it(e) {
            var n = _i.exec(e._i);
            return null !== n ? void (e._d = new Date(+n[1])) : (nt(e),
                void (e._isValid === !1 && (delete e._isValid,
                    t.createFromInputFallback(e))))
        }
        function rt(t, e, n, i, r, o, s) {
            var a = new Date(t,e,n,i,r,o,s);
            return 1970 > t && a.setFullYear(t),
                a
        }
        function ot(t) {
            var e = new Date(Date.UTC.apply(null, arguments));
            return 1970 > t && e.setUTCFullYear(t),
                e
        }
        function st(t) {
            return at(t) ? 366 : 365
        }
        function at(t) {
            return t % 4 === 0 && t % 100 !== 0 || t % 400 === 0
        }
        function ut() {
            return at(this.year())
        }
        function lt(t, e, n) {
            var i, r = n - e, o = n - t.day();
            return o > r && (o -= 7),
            r - 7 > o && (o += 7),
                i = Et(t).add(o, "d"),
                {
                    week: Math.ceil(i.dayOfYear() / 7),
                    year: i.year()
                }
        }
        function ct(t) {
            return lt(t, this._week.dow, this._week.doy).week
        }
        function ft() {
            return this._week.dow
        }
        function ht() {
            return this._week.doy
        }
        function dt(t) {
            var e = this.localeData().week(this);
            return null == t ? e : this.add(7 * (t - e), "d")
        }
        function pt(t) {
            var e = lt(this, 1, 4).week;
            return null == t ? e : this.add(7 * (t - e), "d")
        }
        function mt(t, e, n, i, r) {
            var o, s = 6 + r - i, a = ot(t, 0, 1 + s), u = a.getUTCDay();
            return r > u && (u += 7),
                n = null != n ? 1 * n : r,
                o = 1 + s + 7 * (e - 1) - u + n,
                {
                    year: o > 0 ? t : t - 1,
                    dayOfYear: o > 0 ? o : st(t - 1) + o
                }
        }
        function gt(t) {
            var e = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
            return null == t ? e : this.add(t - e, "d")
        }
        function yt(t, e, n) {
            return null != t ? t : null != e ? e : n
        }
        function vt(t) {
            var e = new Date;
            return t._useUTC ? [e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate()] : [e.getFullYear(), e.getMonth(), e.getDate()]
        }
        function _t(t) {
            var e, n, i, r, o = [];
            if (!t._d) {
                for (i = vt(t),
                     t._w && null == t._a[ui] && null == t._a[ai] && wt(t),
                     t._dayOfYear && (r = yt(t._a[si], i[si]),
                     t._dayOfYear > st(r) && (l(t)._overflowDayOfYear = !0),
                         n = ot(r, 0, t._dayOfYear),
                         t._a[ai] = n.getUTCMonth(),
                         t._a[ui] = n.getUTCDate()),
                         e = 0; 3 > e && null == t._a[e]; ++e)
                    t._a[e] = o[e] = i[e];
                for (; 7 > e; e++)
                    t._a[e] = o[e] = null == t._a[e] ? 2 === e ? 1 : 0 : t._a[e];
                24 === t._a[li] && 0 === t._a[ci] && 0 === t._a[fi] && 0 === t._a[hi] && (t._nextDay = !0,
                    t._a[li] = 0),
                    t._d = (t._useUTC ? ot : rt).apply(null, o),
                null != t._tzm && t._d.setUTCMinutes(t._d.getUTCMinutes() - t._tzm),
                t._nextDay && (t._a[li] = 24)
            }
        }
        function wt(t) {
            var e, n, i, r, o, s, a;
            e = t._w,
                null != e.GG || null != e.W || null != e.E ? (o = 1,
                    s = 4,
                    n = yt(e.GG, t._a[si], lt(Et(), 1, 4).year),
                    i = yt(e.W, 1),
                    r = yt(e.E, 1)) : (o = t._locale._week.dow,
                    s = t._locale._week.doy,
                    n = yt(e.gg, t._a[si], lt(Et(), o, s).year),
                    i = yt(e.w, 1),
                    null != e.d ? (r = e.d,
                    o > r && ++i) : r = null != e.e ? e.e + o : o),
                a = mt(n, i, r, s, o),
                t._a[si] = a.year,
                t._dayOfYear = a.dayOfYear
        }
        function bt(e) {
            if (e._f === t.ISO_8601)
                return void nt(e);
            e._a = [],
                l(e).empty = !0;
            var n, i, r, o, s, a = "" + e._i, u = a.length, c = 0;
            for (r = j(e._f, e._locale).match(In) || [],
                     n = 0; n < r.length; n++)
                o = r[n],
                    i = (a.match(I(o, e)) || [])[0],
                i && (s = a.substr(0, a.indexOf(i)),
                s.length > 0 && l(e).unusedInput.push(s),
                    a = a.slice(a.indexOf(i) + i.length),
                    c += i.length),
                    Un[o] ? (i ? l(e).empty = !1 : l(e).unusedTokens.push(o),
                        R(o, i, e)) : e._strict && !i && l(e).unusedTokens.push(o);
            l(e).charsLeftOver = u - c,
            a.length > 0 && l(e).unusedInput.push(a),
            l(e).bigHour === !0 && e._a[li] <= 12 && e._a[li] > 0 && (l(e).bigHour = void 0),
                e._a[li] = xt(e._locale, e._a[li], e._meridiem),
                _t(e),
                Z(e)
        }
        function xt(t, e, n) {
            var i;
            return null == n ? e : null != t.meridiemHour ? t.meridiemHour(e, n) : null != t.isPM ? (i = t.isPM(n),
            i && 12 > e && (e += 12),
            i || 12 !== e || (e = 0),
                e) : e
        }
        function Tt(t) {
            var e, n, i, r, o;
            if (0 === t._f.length)
                return l(t).invalidFormat = !0,
                    void (t._d = new Date(NaN));
            for (r = 0; r < t._f.length; r++)
                o = 0,
                    e = h({}, t),
                null != t._useUTC && (e._useUTC = t._useUTC),
                    e._f = t._f[r],
                    bt(e),
                c(e) && (o += l(e).charsLeftOver,
                    o += 10 * l(e).unusedTokens.length,
                    l(e).score = o,
                (null == i || i > o) && (i = o,
                    n = e));
            s(t, n || e)
        }
        function Dt(t) {
            if (!t._d) {
                var e = k(t._i);
                t._a = [e.year, e.month, e.day || e.date, e.hour, e.minute, e.second, e.millisecond],
                    _t(t)
            }
        }
        function St(t) {
            var e = new d(Z(Ct(t)));
            return e._nextDay && (e.add(1, "d"),
                e._nextDay = void 0),
                e
        }
        function Ct(t) {
            var e = t._i
                , r = t._f;
            return t._locale = t._locale || D(t._l),
                null === e || void 0 === r && "" === e ? f({
                    nullInput: !0
                }) : ("string" == typeof e && (t._i = e = t._locale.preparse(e)),
                    p(e) ? new d(Z(e)) : (n(r) ? Tt(t) : r ? bt(t) : i(e) ? t._d = e : kt(t),
                        t))
        }
        function kt(e) {
            var o = e._i;
            void 0 === o ? e._d = new Date : i(o) ? e._d = new Date(+o) : "string" == typeof o ? it(e) : n(o) ? (e._a = r(o.slice(0), function(t) {
                return parseInt(t, 10)
            }),
                _t(e)) : "object" == typeof o ? Dt(e) : "number" == typeof o ? e._d = new Date(o) : t.createFromInputFallback(e)
        }
        function Mt(t, e, n, i, r) {
            var o = {};
            return "boolean" == typeof n && (i = n,
                n = void 0),
                o._isAMomentObject = !0,
                o._useUTC = o._isUTC = r,
                o._l = n,
                o._i = t,
                o._f = e,
                o._strict = i,
                St(o)
        }
        function Et(t, e, n, i) {
            return Mt(t, e, n, i, !1)
        }
        function Ot(t, e) {
            var i, r;
            if (1 === e.length && n(e[0]) && (e = e[0]),
                    !e.length)
                return Et();
            for (i = e[0],
                     r = 1; r < e.length; ++r)
                (!e[r].isValid() || e[r][t](i)) && (i = e[r]);
            return i
        }
        function At() {
            var t = [].slice.call(arguments, 0);
            return Ot("isBefore", t)
        }
        function Nt() {
            var t = [].slice.call(arguments, 0);
            return Ot("isAfter", t)
        }
        function Ft(t) {
            var e = k(t)
                , n = e.year || 0
                , i = e.quarter || 0
                , r = e.month || 0
                , o = e.week || 0
                , s = e.day || 0
                , a = e.hour || 0
                , u = e.minute || 0
                , l = e.second || 0
                , c = e.millisecond || 0;
            this._milliseconds = +c + 1e3 * l + 6e4 * u + 36e5 * a,
                this._days = +s + 7 * o,
                this._months = +r + 3 * i + 12 * n,
                this._data = {},
                this._locale = D(),
                this._bubble()
        }
        function Pt(t) {
            return t instanceof Ft
        }
        function Yt(t, e) {
            F(t, 0, 0, function() {
                var t = this.utcOffset()
                    , n = "+";
                return 0 > t && (t = -t,
                    n = "-"),
                n + N(~~(t / 60), 2) + e + N(~~t % 60, 2)
            })
        }
        function Lt(t) {
            var e = (t || "").match(ei) || []
                , n = e[e.length - 1] || []
                , i = (n + "").match(Di) || ["-", 0, 0]
                , r = +(60 * i[1]) + g(i[2]);
            return "+" === i[0] ? r : -r
        }
        function jt(e, n) {
            var r, o;
            return n._isUTC ? (r = n.clone(),
                o = (p(e) || i(e) ? +e : +Et(e)) - +r,
                r._d.setTime(+r._d + o),
                t.updateOffset(r, !1),
                r) : Et(e).local()
        }
        function Ht(t) {
            return 15 * -Math.round(t._d.getTimezoneOffset() / 15)
        }
        function Wt(e, n) {
            var i, r = this._offset || 0;
            return null != e ? ("string" == typeof e && (e = Lt(e)),
            Math.abs(e) < 16 && (e = 60 * e),
            !this._isUTC && n && (i = Ht(this)),
                this._offset = e,
                this._isUTC = !0,
            null != i && this.add(i, "m"),
            r !== e && (!n || this._changeInProgress ? ee(this, Jt(e - r, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0,
                t.updateOffset(this, !0),
                this._changeInProgress = null)),
                this) : this._isUTC ? r : Ht(this)
        }
        function It(t, e) {
            return null != t ? ("string" != typeof t && (t = -t),
                this.utcOffset(t, e),
                this) : -this.utcOffset()
        }
        function qt(t) {
            return this.utcOffset(0, t)
        }
        function zt(t) {
            return this._isUTC && (this.utcOffset(0, t),
                this._isUTC = !1,
            t && this.subtract(Ht(this), "m")),
                this
        }
        function Ut() {
            return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(Lt(this._i)),
                this
        }
        function Rt(t) {
            return t = t ? Et(t).utcOffset() : 0,
            (this.utcOffset() - t) % 60 === 0
        }
        function $t() {
            return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
        }
        function Bt() {
            if ("undefined" != typeof this._isDSTShifted)
                return this._isDSTShifted;
            var t = {};
            if (h(t, this),
                    t = Ct(t),
                    t._a) {
                var e = t._isUTC ? a(t._a) : Et(t._a);
                this._isDSTShifted = this.isValid() && y(t._a, e.toArray()) > 0
            } else
                this._isDSTShifted = !1;
            return this._isDSTShifted
        }
        function Gt() {
            return !this._isUTC
        }
        function Vt() {
            return this._isUTC
        }
        function Qt() {
            return this._isUTC && 0 === this._offset
        }
        function Jt(t, e) {
            var n, i, r, s = t, a = null;
            return Pt(t) ? s = {
                ms: t._milliseconds,
                d: t._days,
                M: t._months
            } : "number" == typeof t ? (s = {},
                e ? s[e] = t : s.milliseconds = t) : (a = Si.exec(t)) ? (n = "-" === a[1] ? -1 : 1,
                s = {
                    y: 0,
                    d: g(a[ui]) * n,
                    h: g(a[li]) * n,
                    m: g(a[ci]) * n,
                    s: g(a[fi]) * n,
                    ms: g(a[hi]) * n
                }) : (a = Ci.exec(t)) ? (n = "-" === a[1] ? -1 : 1,
                s = {
                    y: Xt(a[2], n),
                    M: Xt(a[3], n),
                    d: Xt(a[4], n),
                    h: Xt(a[5], n),
                    m: Xt(a[6], n),
                    s: Xt(a[7], n),
                    w: Xt(a[8], n)
                }) : null == s ? s = {} : "object" == typeof s && ("from"in s || "to"in s) && (r = Kt(Et(s.from), Et(s.to)),
                s = {},
                s.ms = r.milliseconds,
                s.M = r.months),
                i = new Ft(s),
            Pt(t) && o(t, "_locale") && (i._locale = t._locale),
                i
        }
        function Xt(t, e) {
            var n = t && parseFloat(t.replace(",", "."));
            return (isNaN(n) ? 0 : n) * e
        }
        function Zt(t, e) {
            var n = {
                milliseconds: 0,
                months: 0
            };
            return n.months = e.month() - t.month() + 12 * (e.year() - t.year()),
            t.clone().add(n.months, "M").isAfter(e) && --n.months,
                n.milliseconds = +e - +t.clone().add(n.months, "M"),
                n
        }
        function Kt(t, e) {
            var n;
            return e = jt(e, t),
                t.isBefore(e) ? n = Zt(t, e) : (n = Zt(e, t),
                    n.milliseconds = -n.milliseconds,
                    n.months = -n.months),
                n
        }
        function te(t, e) {
            return function(n, i) {
                var r, o;
                return null === i || isNaN(+i) || (et(e, "moment()." + e + "(period, number) is deprecated. Please use moment()." + e + "(number, period)."),
                    o = n,
                    n = i,
                    i = o),
                    n = "string" == typeof n ? +n : n,
                    r = Jt(n, i),
                    ee(this, r, t),
                    this
            }
        }
        function ee(e, n, i, r) {
            var o = n._milliseconds
                , s = n._days
                , a = n._months;
            r = null == r ? !0 : r,
            o && e._d.setTime(+e._d + o * i),
            s && O(e, "Date", E(e, "Date") + s * i),
            a && Q(e, E(e, "Month") + a * i),
            r && t.updateOffset(e, s || a)
        }
        function ne(t, e) {
            var n = t || Et()
                , i = jt(n, this).startOf("day")
                , r = this.diff(i, "days", !0)
                , o = -6 > r ? "sameElse" : -1 > r ? "lastWeek" : 0 > r ? "lastDay" : 1 > r ? "sameDay" : 2 > r ? "nextDay" : 7 > r ? "nextWeek" : "sameElse";
            return this.format(e && e[o] || this.localeData().calendar(o, this, Et(n)))
        }
        function ie() {
            return new d(this)
        }
        function re(t, e) {
            var n;
            return e = C("undefined" != typeof e ? e : "millisecond"),
                "millisecond" === e ? (t = p(t) ? t : Et(t),
                +this > +t) : (n = p(t) ? +t : +Et(t),
                n < +this.clone().startOf(e))
        }
        function oe(t, e) {
            var n;
            return e = C("undefined" != typeof e ? e : "millisecond"),
                "millisecond" === e ? (t = p(t) ? t : Et(t),
                +t > +this) : (n = p(t) ? +t : +Et(t),
                +this.clone().endOf(e) < n)
        }
        function se(t, e, n) {
            return this.isAfter(t, n) && this.isBefore(e, n)
        }
        function ae(t, e) {
            var n;
            return e = C(e || "millisecond"),
                "millisecond" === e ? (t = p(t) ? t : Et(t),
                +this === +t) : (n = +Et(t),
                +this.clone().startOf(e) <= n && n <= +this.clone().endOf(e))
        }
        function ue(t, e, n) {
            var i, r, o = jt(t, this), s = 6e4 * (o.utcOffset() - this.utcOffset());
            return e = C(e),
                "year" === e || "month" === e || "quarter" === e ? (r = le(this, o),
                    "quarter" === e ? r /= 3 : "year" === e && (r /= 12)) : (i = this - o,
                    r = "second" === e ? i / 1e3 : "minute" === e ? i / 6e4 : "hour" === e ? i / 36e5 : "day" === e ? (i - s) / 864e5 : "week" === e ? (i - s) / 6048e5 : i),
                n ? r : m(r)
        }
        function le(t, e) {
            var n, i, r = 12 * (e.year() - t.year()) + (e.month() - t.month()), o = t.clone().add(r, "months");
            return 0 > e - o ? (n = t.clone().add(r - 1, "months"),
                i = (e - o) / (o - n)) : (n = t.clone().add(r + 1, "months"),
                i = (e - o) / (n - o)),
                -(r + i)
        }
        function ce() {
            return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
        }
        function fe() {
            var t = this.clone().utc();
            return 0 < t.year() && t.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : L(t, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : L(t, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
        }
        function he(e) {
            var n = L(this, e || t.defaultFormat);
            return this.localeData().postformat(n)
        }
        function de(t, e) {
            return this.isValid() ? Jt({
                to: this,
                from: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }
        function pe(t) {
            return this.from(Et(), t)
        }
        function me(t, e) {
            return this.isValid() ? Jt({
                from: this,
                to: t
            }).locale(this.locale()).humanize(!e) : this.localeData().invalidDate()
        }
        function ge(t) {
            return this.to(Et(), t)
        }
        function ye(t) {
            var e;
            return void 0 === t ? this._locale._abbr : (e = D(t),
            null != e && (this._locale = e),
                this)
        }
        function ve() {
            return this._locale
        }
        function _e(t) {
            switch (t = C(t)) {
                case "year":
                    this.month(0);
                case "quarter":
                case "month":
                    this.date(1);
                case "week":
                case "isoWeek":
                case "day":
                    this.hours(0);
                case "hour":
                    this.minutes(0);
                case "minute":
                    this.seconds(0);
                case "second":
                    this.milliseconds(0)
            }
            return "week" === t && this.weekday(0),
            "isoWeek" === t && this.isoWeekday(1),
            "quarter" === t && this.month(3 * Math.floor(this.month() / 3)),
                this
        }
        function we(t) {
            return t = C(t),
                void 0 === t || "millisecond" === t ? this : this.startOf(t).add(1, "isoWeek" === t ? "week" : t).subtract(1, "ms")
        }
        function be() {
            return +this._d - 6e4 * (this._offset || 0)
        }
        function xe() {
            return Math.floor(+this / 1e3)
        }
        function Te() {
            return this._offset ? new Date(+this) : this._d
        }
        function De() {
            var t = this;
            return [t.year(), t.month(), t.date(), t.hour(), t.minute(), t.second(), t.millisecond()]
        }
        function Se() {
            var t = this;
            return {
                years: t.year(),
                months: t.month(),
                date: t.date(),
                hours: t.hours(),
                minutes: t.minutes(),
                seconds: t.seconds(),
                milliseconds: t.milliseconds()
            }
        }
        function Ce() {
            return c(this)
        }
        function ke() {
            return s({}, l(this))
        }
        function Me() {
            return l(this).overflow
        }
        function Ee(t, e) {
            F(0, [t, t.length], 0, e)
        }
        function Oe(t, e, n) {
            return lt(Et([t, 11, 31 + e - n]), e, n).week
        }
        function Ae(t) {
            var e = lt(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
            return null == t ? e : this.add(t - e, "y")
        }
        function Ne(t) {
            var e = lt(this, 1, 4).year;
            return null == t ? e : this.add(t - e, "y")
        }
        function Fe() {
            return Oe(this.year(), 1, 4)
        }
        function Pe() {
            var t = this.localeData()._week;
            return Oe(this.year(), t.dow, t.doy)
        }
        function Ye(t) {
            return null == t ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (t - 1) + this.month() % 3)
        }
        function Le(t, e) {
            return "string" != typeof t ? t : isNaN(t) ? (t = e.weekdaysParse(t),
                "number" == typeof t ? t : null) : parseInt(t, 10)
        }
        function je(t) {
            return this._weekdays[t.day()]
        }
        function He(t) {
            return this._weekdaysShort[t.day()]
        }
        function We(t) {
            return this._weekdaysMin[t.day()]
        }
        function Ie(t) {
            var e, n, i;
            for (this._weekdaysParse = this._weekdaysParse || [],
                     e = 0; 7 > e; e++)
                if (this._weekdaysParse[e] || (n = Et([2e3, 1]).day(e),
                        i = "^" + this.weekdays(n, "") + "|^" + this.weekdaysShort(n, "") + "|^" + this.weekdaysMin(n, ""),
                        this._weekdaysParse[e] = new RegExp(i.replace(".", ""),"i")),
                        this._weekdaysParse[e].test(t))
                    return e
        }
        function qe(t) {
            var e = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
            return null != t ? (t = Le(t, this.localeData()),
                this.add(t - e, "d")) : e
        }
        function ze(t) {
            var e = (this.day() + 7 - this.localeData()._week.dow) % 7;
            return null == t ? e : this.add(t - e, "d")
        }
        function Ue(t) {
            return null == t ? this.day() || 7 : this.day(this.day() % 7 ? t : t - 7)
        }
        function Re(t, e) {
            F(t, 0, 0, function() {
                return this.localeData().meridiem(this.hours(), this.minutes(), e)
            })
        }
        function $e(t, e) {
            return e._meridiemParse
        }
        function Be(t) {
            return "p" === (t + "").toLowerCase().charAt(0)
        }
        function Ge(t, e, n) {
            return t > 11 ? n ? "pm" : "PM" : n ? "am" : "AM"
        }
        function Ve(t, e) {
            e[hi] = g(1e3 * ("0." + t))
        }
        function Qe() {
            return this._isUTC ? "UTC" : ""
        }
        function Je() {
            return this._isUTC ? "Coordinated Universal Time" : ""
        }
        function Xe(t) {
            return Et(1e3 * t)
        }
        function Ze() {
            return Et.apply(null, arguments).parseZone()
        }
        function Ke(t, e, n) {
            var i = this._calendar[t];
            return "function" == typeof i ? i.call(e, n) : i
        }
        function tn(t) {
            var e = this._longDateFormat[t]
                , n = this._longDateFormat[t.toUpperCase()];
            return e || !n ? e : (this._longDateFormat[t] = n.replace(/MMMM|MM|DD|dddd/g, function(t) {
                return t.slice(1)
            }),
                this._longDateFormat[t])
        }
        function en() {
            return this._invalidDate
        }
        function nn(t) {
            return this._ordinal.replace("%d", t)
        }
        function rn(t) {
            return t
        }
        function on(t, e, n, i) {
            var r = this._relativeTime[n];
            return "function" == typeof r ? r(t, e, n, i) : r.replace(/%d/i, t)
        }
        function sn(t, e) {
            var n = this._relativeTime[t > 0 ? "future" : "past"];
            return "function" == typeof n ? n(e) : n.replace(/%s/i, e)
        }
        function an(t) {
            var e, n;
            for (n in t)
                e = t[n],
                    "function" == typeof e ? this[n] = e : this["_" + n] = e;
            this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
        }
        function un(t, e, n, i) {
            var r = D()
                , o = a().set(i, e);
            return r[n](o, t)
        }
        function ln(t, e, n, i, r) {
            if ("number" == typeof t && (e = t,
                    t = void 0),
                    t = t || "",
                null != e)
                return un(t, e, n, r);
            var o, s = [];
            for (o = 0; i > o; o++)
                s[o] = un(t, o, n, r);
            return s
        }
        function cn(t, e) {
            return ln(t, e, "months", 12, "month")
        }
        function fn(t, e) {
            return ln(t, e, "monthsShort", 12, "month")
        }
        function hn(t, e) {
            return ln(t, e, "weekdays", 7, "day")
        }
        function dn(t, e) {
            return ln(t, e, "weekdaysShort", 7, "day")
        }
        function pn(t, e) {
            return ln(t, e, "weekdaysMin", 7, "day")
        }
        function mn() {
            var t = this._data;
            return this._milliseconds = Qi(this._milliseconds),
                this._days = Qi(this._days),
                this._months = Qi(this._months),
                t.milliseconds = Qi(t.milliseconds),
                t.seconds = Qi(t.seconds),
                t.minutes = Qi(t.minutes),
                t.hours = Qi(t.hours),
                t.months = Qi(t.months),
                t.years = Qi(t.years),
                this
        }
        function gn(t, e, n, i) {
            var r = Jt(e, n);
            return t._milliseconds += i * r._milliseconds,
                t._days += i * r._days,
                t._months += i * r._months,
                t._bubble()
        }
        function yn(t, e) {
            return gn(this, t, e, 1)
        }
        function vn(t, e) {
            return gn(this, t, e, -1)
        }
        function _n(t) {
            return 0 > t ? Math.floor(t) : Math.ceil(t)
        }
        function wn() {
            var t, e, n, i, r, o = this._milliseconds, s = this._days, a = this._months, u = this._data;
            return o >= 0 && s >= 0 && a >= 0 || 0 >= o && 0 >= s && 0 >= a || (o += 864e5 * _n(xn(a) + s),
                s = 0,
                a = 0),
                u.milliseconds = o % 1e3,
                t = m(o / 1e3),
                u.seconds = t % 60,
                e = m(t / 60),
                u.minutes = e % 60,
                n = m(e / 60),
                u.hours = n % 24,
                s += m(n / 24),
                r = m(bn(s)),
                a += r,
                s -= _n(xn(r)),
                i = m(a / 12),
                a %= 12,
                u.days = s,
                u.months = a,
                u.years = i,
                this
        }
        function bn(t) {
            return 4800 * t / 146097
        }
        function xn(t) {
            return 146097 * t / 4800
        }
        function Tn(t) {
            var e, n, i = this._milliseconds;
            if (t = C(t),
                "month" === t || "year" === t)
                return e = this._days + i / 864e5,
                    n = this._months + bn(e),
                    "month" === t ? n : n / 12;
            switch (e = this._days + Math.round(xn(this._months)),
                t) {
                case "week":
                    return e / 7 + i / 6048e5;
                case "day":
                    return e + i / 864e5;
                case "hour":
                    return 24 * e + i / 36e5;
                case "minute":
                    return 1440 * e + i / 6e4;
                case "second":
                    return 86400 * e + i / 1e3;
                case "millisecond":
                    return Math.floor(864e5 * e) + i;
                default:
                    throw new Error("Unknown unit " + t)
            }
        }
        function Dn() {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * g(this._months / 12)
        }
        function Sn(t) {
            return function() {
                return this.as(t)
            }
        }
        function Cn(t) {
            return t = C(t),
                this[t + "s"]()
        }
        function kn(t) {
            return function() {
                return this._data[t]
            }
        }
        function Mn() {
            return m(this.days() / 7)
        }
        function En(t, e, n, i, r) {
            return r.relativeTime(e || 1, !!n, t, i)
        }
        function On(t, e, n) {
            var i = Jt(t).abs()
                , r = fr(i.as("s"))
                , o = fr(i.as("m"))
                , s = fr(i.as("h"))
                , a = fr(i.as("d"))
                , u = fr(i.as("M"))
                , l = fr(i.as("y"))
                , c = r < hr.s && ["s", r] || 1 === o && ["m"] || o < hr.m && ["mm", o] || 1 === s && ["h"] || s < hr.h && ["hh", s] || 1 === a && ["d"] || a < hr.d && ["dd", a] || 1 === u && ["M"] || u < hr.M && ["MM", u] || 1 === l && ["y"] || ["yy", l];
            return c[2] = e,
                c[3] = +t > 0,
                c[4] = n,
                En.apply(null, c)
        }
        function An(t, e) {
            return void 0 === hr[t] ? !1 : void 0 === e ? hr[t] : (hr[t] = e,
                !0)
        }
        function Nn(t) {
            var e = this.localeData()
                , n = On(this, !t, e);
            return t && (n = e.pastFuture(+this, n)),
                e.postformat(n)
        }
        function Fn() {
            var t, e, n, i = dr(this._milliseconds) / 1e3, r = dr(this._days), o = dr(this._months);
            t = m(i / 60),
                e = m(t / 60),
                i %= 60,
                t %= 60,
                n = m(o / 12),
                o %= 12;
            var s = n
                , a = o
                , u = r
                , l = e
                , c = t
                , f = i
                , h = this.asSeconds();
            return h ? (0 > h ? "-" : "") + "P" + (s ? s + "Y" : "") + (a ? a + "M" : "") + (u ? u + "D" : "") + (l || c || f ? "T" : "") + (l ? l + "H" : "") + (c ? c + "M" : "") + (f ? f + "S" : "") : "P0D"
        }
        var Pn, Yn, Ln = t.momentProperties = [], jn = !1, Hn = {}, Wn = {}, In = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g, qn = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, zn = {}, Un = {}, Rn = /\d/, $n = /\d\d/, Bn = /\d{3}/, Gn = /\d{4}/, Vn = /[+-]?\d{6}/, Qn = /\d\d?/, Jn = /\d{1,3}/, Xn = /\d{1,4}/, Zn = /[+-]?\d{1,6}/, Kn = /\d+/, ti = /[+-]?\d+/, ei = /Z|[+-]\d\d:?\d\d/gi, ni = /[+-]?\d+(\.\d{1,3})?/, ii = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, ri = {}, oi = {}, si = 0, ai = 1, ui = 2, li = 3, ci = 4, fi = 5, hi = 6;
        F("M", ["MM", 2], "Mo", function() {
            return this.month() + 1
        }),
            F("MMM", 0, 0, function(t) {
                return this.localeData().monthsShort(this, t)
            }),
            F("MMMM", 0, 0, function(t) {
                return this.localeData().months(this, t)
            }),
            S("month", "M"),
            W("M", Qn),
            W("MM", Qn, $n),
            W("MMM", ii),
            W("MMMM", ii),
            z(["M", "MM"], function(t, e) {
                e[ai] = g(t) - 1
            }),
            z(["MMM", "MMMM"], function(t, e, n, i) {
                var r = n._locale.monthsParse(t, i, n._strict);
                null != r ? e[ai] = r : l(n).invalidMonth = t
            });
        var di = "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
            , pi = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_")
            , mi = {};
        t.suppressDeprecationWarnings = !1;
        var gi = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/
            , yi = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]]
            , vi = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]]
            , _i = /^\/?Date\((\-?\d+)/i;
        t.createFromInputFallback = tt("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(t) {
            t._d = new Date(t._i + (t._useUTC ? " UTC" : ""))
        }),
            F(0, ["YY", 2], 0, function() {
                return this.year() % 100
            }),
            F(0, ["YYYY", 4], 0, "year"),
            F(0, ["YYYYY", 5], 0, "year"),
            F(0, ["YYYYYY", 6, !0], 0, "year"),
            S("year", "y"),
            W("Y", ti),
            W("YY", Qn, $n),
            W("YYYY", Xn, Gn),
            W("YYYYY", Zn, Vn),
            W("YYYYYY", Zn, Vn),
            z(["YYYYY", "YYYYYY"], si),
            z("YYYY", function(e, n) {
                n[si] = 2 === e.length ? t.parseTwoDigitYear(e) : g(e)
            }),
            z("YY", function(e, n) {
                n[si] = t.parseTwoDigitYear(e)
            }),
            t.parseTwoDigitYear = function(t) {
                return g(t) + (g(t) > 68 ? 1900 : 2e3)
            }
        ;
        var wi = M("FullYear", !1);
        F("w", ["ww", 2], "wo", "week"),
            F("W", ["WW", 2], "Wo", "isoWeek"),
            S("week", "w"),
            S("isoWeek", "W"),
            W("w", Qn),
            W("ww", Qn, $n),
            W("W", Qn),
            W("WW", Qn, $n),
            U(["w", "ww", "W", "WW"], function(t, e, n, i) {
                e[i.substr(0, 1)] = g(t)
            });
        var bi = {
            dow: 0,
            doy: 6
        };
        F("DDD", ["DDDD", 3], "DDDo", "dayOfYear"),
            S("dayOfYear", "DDD"),
            W("DDD", Jn),
            W("DDDD", Bn),
            z(["DDD", "DDDD"], function(t, e, n) {
                n._dayOfYear = g(t)
            }),
            t.ISO_8601 = function() {}
        ;
        var xi = tt("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var t = Et.apply(null, arguments);
            return this > t ? this : t
        })
            , Ti = tt("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var t = Et.apply(null, arguments);
            return t > this ? this : t
        });
        Yt("Z", ":"),
            Yt("ZZ", ""),
            W("Z", ei),
            W("ZZ", ei),
            z(["Z", "ZZ"], function(t, e, n) {
                n._useUTC = !0,
                    n._tzm = Lt(t)
            });
        var Di = /([\+\-]|\d\d)/gi;
        t.updateOffset = function() {}
        ;
        var Si = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/
            , Ci = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
        Jt.fn = Ft.prototype;
        var ki = te(1, "add")
            , Mi = te(-1, "subtract");
        t.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
        var Ei = tt("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(t) {
            return void 0 === t ? this.localeData() : this.locale(t)
        });
        F(0, ["gg", 2], 0, function() {
            return this.weekYear() % 100
        }),
            F(0, ["GG", 2], 0, function() {
                return this.isoWeekYear() % 100
            }),
            Ee("gggg", "weekYear"),
            Ee("ggggg", "weekYear"),
            Ee("GGGG", "isoWeekYear"),
            Ee("GGGGG", "isoWeekYear"),
            S("weekYear", "gg"),
            S("isoWeekYear", "GG"),
            W("G", ti),
            W("g", ti),
            W("GG", Qn, $n),
            W("gg", Qn, $n),
            W("GGGG", Xn, Gn),
            W("gggg", Xn, Gn),
            W("GGGGG", Zn, Vn),
            W("ggggg", Zn, Vn),
            U(["gggg", "ggggg", "GGGG", "GGGGG"], function(t, e, n, i) {
                e[i.substr(0, 2)] = g(t)
            }),
            U(["gg", "GG"], function(e, n, i, r) {
                n[r] = t.parseTwoDigitYear(e)
            }),
            F("Q", 0, 0, "quarter"),
            S("quarter", "Q"),
            W("Q", Rn),
            z("Q", function(t, e) {
                e[ai] = 3 * (g(t) - 1)
            }),
            F("D", ["DD", 2], "Do", "date"),
            S("date", "D"),
            W("D", Qn),
            W("DD", Qn, $n),
            W("Do", function(t, e) {
                return t ? e._ordinalParse : e._ordinalParseLenient
            }),
            z(["D", "DD"], ui),
            z("Do", function(t, e) {
                e[ui] = g(t.match(Qn)[0], 10)
            });
        var Oi = M("Date", !0);
        F("d", 0, "do", "day"),
            F("dd", 0, 0, function(t) {
                return this.localeData().weekdaysMin(this, t)
            }),
            F("ddd", 0, 0, function(t) {
                return this.localeData().weekdaysShort(this, t)
            }),
            F("dddd", 0, 0, function(t) {
                return this.localeData().weekdays(this, t)
            }),
            F("e", 0, 0, "weekday"),
            F("E", 0, 0, "isoWeekday"),
            S("day", "d"),
            S("weekday", "e"),
            S("isoWeekday", "E"),
            W("d", Qn),
            W("e", Qn),
            W("E", Qn),
            W("dd", ii),
            W("ddd", ii),
            W("dddd", ii),
            U(["dd", "ddd", "dddd"], function(t, e, n) {
                var i = n._locale.weekdaysParse(t);
                null != i ? e.d = i : l(n).invalidWeekday = t
            }),
            U(["d", "e", "E"], function(t, e, n, i) {
                e[i] = g(t)
            });
        var Ai = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_")
            , Ni = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_")
            , Fi = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
        F("H", ["HH", 2], 0, "hour"),
            F("h", ["hh", 2], 0, function() {
                return this.hours() % 12 || 12
            }),
            Re("a", !0),
            Re("A", !1),
            S("hour", "h"),
            W("a", $e),
            W("A", $e),
            W("H", Qn),
            W("h", Qn),
            W("HH", Qn, $n),
            W("hh", Qn, $n),
            z(["H", "HH"], li),
            z(["a", "A"], function(t, e, n) {
                n._isPm = n._locale.isPM(t),
                    n._meridiem = t
            }),
            z(["h", "hh"], function(t, e, n) {
                e[li] = g(t),
                    l(n).bigHour = !0
            });
        var Pi = /[ap]\.?m?\.?/i
            , Yi = M("Hours", !0);
        F("m", ["mm", 2], 0, "minute"),
            S("minute", "m"),
            W("m", Qn),
            W("mm", Qn, $n),
            z(["m", "mm"], ci);
        var Li = M("Minutes", !1);
        F("s", ["ss", 2], 0, "second"),
            S("second", "s"),
            W("s", Qn),
            W("ss", Qn, $n),
            z(["s", "ss"], fi);
        var ji = M("Seconds", !1);
        F("S", 0, 0, function() {
            return ~~(this.millisecond() / 100)
        }),
            F(0, ["SS", 2], 0, function() {
                return ~~(this.millisecond() / 10)
            }),
            F(0, ["SSS", 3], 0, "millisecond"),
            F(0, ["SSSS", 4], 0, function() {
                return 10 * this.millisecond()
            }),
            F(0, ["SSSSS", 5], 0, function() {
                return 100 * this.millisecond()
            }),
            F(0, ["SSSSSS", 6], 0, function() {
                return 1e3 * this.millisecond()
            }),
            F(0, ["SSSSSSS", 7], 0, function() {
                return 1e4 * this.millisecond()
            }),
            F(0, ["SSSSSSSS", 8], 0, function() {
                return 1e5 * this.millisecond()
            }),
            F(0, ["SSSSSSSSS", 9], 0, function() {
                return 1e6 * this.millisecond()
            }),
            S("millisecond", "ms"),
            W("S", Jn, Rn),
            W("SS", Jn, $n),
            W("SSS", Jn, Bn);
        var Hi;
        for (Hi = "SSSS"; Hi.length <= 9; Hi += "S")
            W(Hi, Kn);
        for (Hi = "S"; Hi.length <= 9; Hi += "S")
            z(Hi, Ve);
        var Wi = M("Milliseconds", !1);
        F("z", 0, 0, "zoneAbbr"),
            F("zz", 0, 0, "zoneName");
        var Ii = d.prototype;
        Ii.add = ki,
            Ii.calendar = ne,
            Ii.clone = ie,
            Ii.diff = ue,
            Ii.endOf = we,
            Ii.format = he,
            Ii.from = de,
            Ii.fromNow = pe,
            Ii.to = me,
            Ii.toNow = ge,
            Ii.get = A,
            Ii.invalidAt = Me,
            Ii.isAfter = re,
            Ii.isBefore = oe,
            Ii.isBetween = se,
            Ii.isSame = ae,
            Ii.isValid = Ce,
            Ii.lang = Ei,
            Ii.locale = ye,
            Ii.localeData = ve,
            Ii.max = Ti,
            Ii.min = xi,
            Ii.parsingFlags = ke,
            Ii.set = A,
            Ii.startOf = _e,
            Ii.subtract = Mi,
            Ii.toArray = De,
            Ii.toObject = Se,
            Ii.toDate = Te,
            Ii.toISOString = fe,
            Ii.toJSON = fe,
            Ii.toString = ce,
            Ii.unix = xe,
            Ii.valueOf = be,
            Ii.year = wi,
            Ii.isLeapYear = ut,
            Ii.weekYear = Ae,
            Ii.isoWeekYear = Ne,
            Ii.quarter = Ii.quarters = Ye,
            Ii.month = J,
            Ii.daysInMonth = X,
            Ii.week = Ii.weeks = dt,
            Ii.isoWeek = Ii.isoWeeks = pt,
            Ii.weeksInYear = Pe,
            Ii.isoWeeksInYear = Fe,
            Ii.date = Oi,
            Ii.day = Ii.days = qe,
            Ii.weekday = ze,
            Ii.isoWeekday = Ue,
            Ii.dayOfYear = gt,
            Ii.hour = Ii.hours = Yi,
            Ii.minute = Ii.minutes = Li,
            Ii.second = Ii.seconds = ji,
            Ii.millisecond = Ii.milliseconds = Wi,
            Ii.utcOffset = Wt,
            Ii.utc = qt,
            Ii.local = zt,
            Ii.parseZone = Ut,
            Ii.hasAlignedHourOffset = Rt,
            Ii.isDST = $t,
            Ii.isDSTShifted = Bt,
            Ii.isLocal = Gt,
            Ii.isUtcOffset = Vt,
            Ii.isUtc = Qt,
            Ii.isUTC = Qt,
            Ii.zoneAbbr = Qe,
            Ii.zoneName = Je,
            Ii.dates = tt("dates accessor is deprecated. Use date instead.", Oi),
            Ii.months = tt("months accessor is deprecated. Use month instead", J),
            Ii.years = tt("years accessor is deprecated. Use year instead", wi),
            Ii.zone = tt("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", It);
        var qi = Ii
            , zi = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        }
            , Ui = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        }
            , Ri = "Invalid date"
            , $i = "%d"
            , Bi = /\d{1,2}/
            , Gi = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        }
            , Vi = v.prototype;
        Vi._calendar = zi,
            Vi.calendar = Ke,
            Vi._longDateFormat = Ui,
            Vi.longDateFormat = tn,
            Vi._invalidDate = Ri,
            Vi.invalidDate = en,
            Vi._ordinal = $i,
            Vi.ordinal = nn,
            Vi._ordinalParse = Bi,
            Vi.preparse = rn,
            Vi.postformat = rn,
            Vi._relativeTime = Gi,
            Vi.relativeTime = on,
            Vi.pastFuture = sn,
            Vi.set = an,
            Vi.months = B,
            Vi._months = di,
            Vi.monthsShort = G,
            Vi._monthsShort = pi,
            Vi.monthsParse = V,
            Vi.week = ct,
            Vi._week = bi,
            Vi.firstDayOfYear = ht,
            Vi.firstDayOfWeek = ft,
            Vi.weekdays = je,
            Vi._weekdays = Ai,
            Vi.weekdaysMin = We,
            Vi._weekdaysMin = Fi,
            Vi.weekdaysShort = He,
            Vi._weekdaysShort = Ni,
            Vi.weekdaysParse = Ie,
            Vi.isPM = Be,
            Vi._meridiemParse = Pi,
            Vi.meridiem = Ge,
            x("en", {
                ordinalParse: /\d{1,2}(th|st|nd|rd)/,
                ordinal: function(t) {
                    var e = t % 10
                        , n = 1 === g(t % 100 / 10) ? "th" : 1 === e ? "st" : 2 === e ? "nd" : 3 === e ? "rd" : "th";
                    return t + n
                }
            }),
            t.lang = tt("moment.lang is deprecated. Use moment.locale instead.", x),
            t.langData = tt("moment.langData is deprecated. Use moment.localeData instead.", D);
        var Qi = Math.abs
            , Ji = Sn("ms")
            , Xi = Sn("s")
            , Zi = Sn("m")
            , Ki = Sn("h")
            , tr = Sn("d")
            , er = Sn("w")
            , nr = Sn("M")
            , ir = Sn("y")
            , rr = kn("milliseconds")
            , or = kn("seconds")
            , sr = kn("minutes")
            , ar = kn("hours")
            , ur = kn("days")
            , lr = kn("months")
            , cr = kn("years")
            , fr = Math.round
            , hr = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        }
            , dr = Math.abs
            , pr = Ft.prototype;
        pr.abs = mn,
            pr.add = yn,
            pr.subtract = vn,
            pr.as = Tn,
            pr.asMilliseconds = Ji,
            pr.asSeconds = Xi,
            pr.asMinutes = Zi,
            pr.asHours = Ki,
            pr.asDays = tr,
            pr.asWeeks = er,
            pr.asMonths = nr,
            pr.asYears = ir,
            pr.valueOf = Dn,
            pr._bubble = wn,
            pr.get = Cn,
            pr.milliseconds = rr,
            pr.seconds = or,
            pr.minutes = sr,
            pr.hours = ar,
            pr.days = ur,
            pr.weeks = Mn,
            pr.months = lr,
            pr.years = cr,
            pr.humanize = Nn,
            pr.toISOString = Fn,
            pr.toString = Fn,
            pr.toJSON = Fn,
            pr.locale = ye,
            pr.localeData = ve,
            pr.toIsoString = tt("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", Fn),
            pr.lang = Ei,
            F("X", 0, 0, "unix"),
            F("x", 0, 0, "valueOf"),
            W("x", ti),
            W("X", ni),
            z("X", function(t, e, n) {
                n._d = new Date(1e3 * parseFloat(t, 10))
            }),
            z("x", function(t, e, n) {
                n._d = new Date(g(t))
            }),
            t.version = "2.10.6",
            e(Et),
            t.fn = qi,
            t.min = At,
            t.max = Nt,
            t.utc = a,
            t.unix = Xe,
            t.months = cn,
            t.isDate = i,
            t.locale = x,
            t.invalid = f,
            t.duration = Jt,
            t.isMoment = p,
            t.weekdays = hn,
            t.parseZone = Ze,
            t.localeData = D,
            t.isDuration = Pt,
            t.monthsShort = fn,
            t.weekdaysMin = pn,
            t.defineLocale = T,
            t.weekdaysShort = dn,
            t.normalizeUnits = C,
            t.relativeTimeThreshold = An;
        var mr = t;
        return mr
    }),
    window.progressbars = {
        days: new ProgressBar.Circle("div.days-progress",{
            color: "#008fff",
            duration: 500,
            strokeWidth: 4,
            easing: "easeInOut"
        }),
        hours: new ProgressBar.Circle("div.hours-progress",{
            color: "#ffffff",
            duration: 500,
            strokeWidth: 4,
            easing: "easeInOut"
        }),
        minutes: new ProgressBar.Circle("div.minutes-progress",{
            color: "#ffe53a",
            duration: 500,
            strokeWidth: 4,
            easing: "easeInOut"
        }),
        seconds: new ProgressBar.Circle("div.seconds-progress",{
            color: "#ff001e",
            duration: 500,
            strokeWidth: 4,
            easing: "easeInOut"
        })
    },
    function() {
        var t = "race"
            , e = getRacingData()
            , n = new Date(e.next.dates[t]);
        setTimeForCountdown(n, 0, e.next.geo),
            $("#timezone").on("change", function() {
                setTimeForCountdown(n, this.value, e.next.geo)
            }),
            $(".eventlist > li").on("click", function() {
                $(".eventlist > li.active").removeClass("active"),
                    t = this.dataset.racingType;
                var i = "Race";
                "ps1" == t ? i = "FP1" : "ps2" == t ? i = "FP2" : "ps3" == t ? i = "FP3" : "qualify" == t && (i = "QUALI"),
                    $(".eventlist > li[data-racing-type='" + t + "']").each(function() {
                        $(this).addClass("active")
                    }),
                    $("span.racetype").text(i),
                    n = new Date(e.next.dates[t]),
                    setTimeForCountdown(n, 0, e.next.geo)
            })
    }(),
    init();
