! function(t, e) {
    function i(t) { var e = ft[t] = {}; return G.each(t.split(et), function(t, i) { e[i] = !0 }), e }

    function n(t, i, n) { if (n === e && 1 === t.nodeType) { var s = "data-" + i.replace(mt, "-$1").toLowerCase(); if ("string" == typeof(n = t.getAttribute(s))) { try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : gt.test(n) ? G.parseJSON(n) : n) } catch (t) {} G.data(t, i, n) } else n = e } return n }

    function s(t) {
        var e;
        for (e in t)
            if (("data" !== e || !G.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function o() { return !1 }

    function a() { return !0 }

    function r(t) { return !t || !t.parentNode || 11 === t.parentNode.nodeType }

    function l(t, e) { do { t = t[e] } while (t && 1 !== t.nodeType); return t }

    function h(t, e, i) {
        if (e = e || 0, G.isFunction(e)) return G.grep(t, function(t, n) { return !!e.call(t, n, t) === i });
        if (e.nodeType) return G.grep(t, function(t, n) { return t === e === i });
        if ("string" == typeof e) {
            var n = G.grep(t, function(t) { return 1 === t.nodeType });
            if (At.test(e)) return G.filter(e, n, !i);
            e = G.filter(e, n)
        }
        return G.grep(t, function(t, n) { return G.inArray(t, e) >= 0 === i })
    }

    function c(t) {
        var e = Ft.split("|"),
            i = t.createDocumentFragment();
        if (i.createElement)
            for (; e.length;) i.createElement(e.pop());
        return i
    }

    function u(t, e) { return t.getElementsByTagName(e)[0] || t.appendChild(t.ownerDocument.createElement(e)) }

    function d(t, e) {
        if (1 === e.nodeType && G.hasData(t)) {
            var i, n, s, o = G._data(t),
                a = G._data(e, o),
                r = o.events;
            if (r) {
                delete a.handle, a.events = {};
                for (i in r)
                    for (n = 0, s = r[i].length; n < s; n++) G.event.add(e, i, r[i][n])
            }
            a.data && (a.data = G.extend({}, a.data))
        }
    }

    function p(t, e) {
        var i;
        1 === e.nodeType && (e.clearAttributes && e.clearAttributes(), e.mergeAttributes && e.mergeAttributes(t), i = e.nodeName.toLowerCase(), "object" === i ? (e.parentNode && (e.outerHTML = t.outerHTML), G.support.html5Clone && t.innerHTML && !G.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === i && Vt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === i ? e.selected = t.defaultSelected : "input" === i || "textarea" === i ? e.defaultValue = t.defaultValue : "script" === i && e.text !== t.text && (e.text = t.text), e.removeAttribute(G.expando))
    }

    function f(t) { return void 0 !== t.getElementsByTagName ? t.getElementsByTagName("*") : void 0 !== t.querySelectorAll ? t.querySelectorAll("*") : [] }

    function g(t) { Vt.test(t.type) && (t.defaultChecked = t.checked) }

    function m(t, e) {
        if (e in t) return e;
        for (var i = e.charAt(0).toUpperCase() + e.slice(1), n = e, s = ve.length; s--;)
            if ((e = ve[s] + i) in t) return e;
        return n
    }

    function v(t, e) { return t = e || t, "none" === G.css(t, "display") || !G.contains(t.ownerDocument, t) }

    function b(t, e) { for (var i, n, s = [], o = 0, a = t.length; o < a; o++) i = t[o], i.style && (s[o] = G._data(i, "olddisplay"), e ? (s[o] || "none" !== i.style.display || (i.style.display = ""), "" === i.style.display && v(i) && (s[o] = G._data(i, "olddisplay", x(i.nodeName)))) : (n = ie(i, "display"), s[o] || "none" === n || G._data(i, "olddisplay", n))); for (o = 0; o < a; o++) i = t[o], i.style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? s[o] || "" : "none")); return t }

    function y(t, e, i) { var n = ce.exec(e); return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e }

    function _(t, e, i, n) { for (var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; s < 4; s += 2) "margin" === i && (o += G.css(t, i + me[s], !0)), n ? ("content" === i && (o -= parseFloat(ie(t, "padding" + me[s])) || 0), "margin" !== i && (o -= parseFloat(ie(t, "border" + me[s] + "Width")) || 0)) : (o += parseFloat(ie(t, "padding" + me[s])) || 0, "padding" !== i && (o += parseFloat(ie(t, "border" + me[s] + "Width")) || 0)); return o }

    function w(t, e, i) {
        var n = "width" === e ? t.offsetWidth : t.offsetHeight,
            s = !0,
            o = G.support.boxSizing && "border-box" === G.css(t, "boxSizing");
        if (n <= 0 || null == n) {
            if (n = ie(t, e), (n < 0 || null == n) && (n = t.style[e]), ue.test(n)) return n;
            s = o && (G.support.boxSizingReliable || n === t.style[e]), n = parseFloat(n) || 0
        }
        return n + _(t, e, i || (o ? "border" : "content"), s) + "px"
    }

    function x(t) {
        if (pe[t]) return pe[t];
        var e = G("<" + t + ">").appendTo(R.body),
            i = e.css("display");
        return e.remove(), "none" !== i && "" !== i || (ne = R.body.appendChild(ne || G.extend(R.createElement("iframe"), { frameBorder: 0, width: 0, height: 0 })), se && ne.createElement || (se = (ne.contentWindow || ne.contentDocument).document, se.write("<!doctype html><html><body>"), se.close()), e = se.body.appendChild(se.createElement(t)), i = ie(e, "display"), R.body.removeChild(ne)), pe[t] = i, i
    }

    function C(t, e, i, n) {
        var s;
        if (G.isArray(e)) G.each(e, function(e, s) { i || _e.test(t) ? n(t, s) : C(t + "[" + ("object" == typeof s ? e : "") + "]", s, i, n) });
        else if (i || "object" !== G.type(e)) n(t, e);
        else
            for (s in e) C(t + "[" + s + "]", e[s], i, n)
    }

    function k(t) {
        return function(e, i) {
            "string" != typeof e && (i = e, e = "*");
            var n, s, o, a = e.toLowerCase().split(et),
                r = 0,
                l = a.length;
            if (G.isFunction(i))
                for (; r < l; r++) n = a[r], o = /^\+/.test(n), o && (n = n.substr(1) || "*"), s = t[n] = t[n] || [], s[o ? "unshift" : "push"](i)
        }
    }

    function T(t, i, n, s, o, a) { o = o || i.dataTypes[0], a = a || {}, a[o] = !0; for (var r, l = t[o], h = 0, c = l ? l.length : 0, u = t === Ae; h < c && (u || !r); h++) "string" == typeof(r = l[h](i, n, s)) && (!u || a[r] ? r = e : (i.dataTypes.unshift(r), r = T(t, i, n, s, r, a))); return !u && r || a["*"] || (r = T(t, i, n, s, "*", a)), r }

    function z(t, i) {
        var n, s, o = G.ajaxSettings.flatOptions || {};
        for (n in i) i[n] !== e && ((o[n] ? t : s || (s = {}))[n] = i[n]);
        s && G.extend(!0, t, s)
    }

    function D(t, i, n) {
        var s, o, a, r, l = t.contents,
            h = t.dataTypes,
            c = t.responseFields;
        for (o in c) o in n && (i[c[o]] = n[o]);
        for (;
            "*" === h[0];) h.shift(), s === e && (s = t.mimeType || i.getResponseHeader("content-type"));
        if (s)
            for (o in l)
                if (l[o] && l[o].test(s)) { h.unshift(o); break }
        if (h[0] in n) a = h[0];
        else { for (o in n) { if (!h[0] || t.converters[o + " " + h[0]]) { a = o; break } r || (r = o) } a = a || r }
        if (a) return a !== h[0] && h.unshift(a), n[a]
    }

    function S(t, e) {
        var i, n, s, o, a = t.dataTypes.slice(),
            r = a[0],
            l = {},
            h = 0;
        if (t.dataFilter && (e = t.dataFilter(e, t.dataType)), a[1])
            for (i in t.converters) l[i.toLowerCase()] = t.converters[i];
        for (; s = a[++h];)
            if ("*" !== s) {
                if ("*" !== r && r !== s) {
                    if (!(i = l[r + " " + s] || l["* " + s]))
                        for (n in l)
                            if (o = n.split(" "), o[1] === s && (i = l[r + " " + o[0]] || l["* " + o[0]])) {!0 === i ? i = l[n] : !0 !== l[n] && (s = o[0], a.splice(h--, 0, s)); break }
                    if (!0 !== i)
                        if (i && t.throws) e = i(e);
                        else try { e = i(e) } catch (t) { return { state: "parsererror", error: i ? t : "No conversion from " + r + " to " + s } }
                }
                r = s
            }
        return { state: "success", data: e }
    }

    function I() { try { return new t.XMLHttpRequest } catch (t) {} }

    function P() { try { return new t.ActiveXObject("Microsoft.XMLHTTP") } catch (t) {} }

    function W() { return setTimeout(function() { Xe = e }, 0), Xe = G.now() }

    function O(t, e) {
        G.each(e, function(e, i) {
            for (var n = (Ge[e] || []).concat(Ge["*"]), s = 0, o = n.length; s < o; s++)
                if (n[s].call(t, e, i)) return
        })
    }

    function E(t, e, i) {
        var n, s = 0,
            o = Qe.length,
            a = G.Deferred().always(function() { delete r.elem }),
            r = function() { for (var e = Xe || W(), i = Math.max(0, l.startTime + l.duration - e), n = i / l.duration || 0, s = 1 - n, o = 0, r = l.tweens.length; o < r; o++) l.tweens[o].run(s); return a.notifyWith(t, [l, s, i]), s < 1 && r ? i : (a.resolveWith(t, [l]), !1) },
            l = a.promise({ elem: t, props: G.extend({}, e), opts: G.extend(!0, { specialEasing: {} }, i), originalProperties: e, originalOptions: i, startTime: Xe || W(), duration: i.duration, tweens: [], createTween: function(e, i, n) { var s = G.Tween(t, l.opts, e, i, l.opts.specialEasing[e] || l.opts.easing); return l.tweens.push(s), s }, stop: function(e) { for (var i = 0, n = e ? l.tweens.length : 0; i < n; i++) l.tweens[i].run(1); return e ? a.resolveWith(t, [l, e]) : a.rejectWith(t, [l, e]), this } }),
            h = l.props;
        for (H(h, l.opts.specialEasing); s < o; s++)
            if (n = Qe[s].call(l, t, h, l.opts)) return n;
        return O(l, h), G.isFunction(l.opts.start) && l.opts.start.call(t, l), G.fx.timer(G.extend(r, { anim: l, queue: l.opts.queue, elem: t })), l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always)
    }

    function H(t, e) {
        var i, n, s, o, a;
        for (i in t)
            if (n = G.camelCase(i), s = e[n], o = t[i], G.isArray(o) && (s = o[1], o = t[i] = o[0]), i !== n && (t[n] = o, delete t[i]), (a = G.cssHooks[n]) && "expand" in a) { o = a.expand(o), delete t[n]; for (i in o) i in t || (t[i] = o[i], e[i] = s) } else e[n] = s
    }

    function M(t, e, i) {
        var n, s, o, a, r, l, h, c, u, d = this,
            p = t.style,
            f = {},
            g = [],
            m = t.nodeType && v(t);
        i.queue || (c = G._queueHooks(t, "fx"), null == c.unqueued && (c.unqueued = 0, u = c.empty.fire, c.empty.fire = function() { c.unqueued || u() }), c.unqueued++, d.always(function() { d.always(function() { c.unqueued--, G.queue(t, "fx").length || c.empty.fire() }) })), 1 === t.nodeType && ("height" in e || "width" in e) && (i.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === G.css(t, "display") && "none" === G.css(t, "float") && (G.support.inlineBlockNeedsLayout && "inline" !== x(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), i.overflow && (p.overflow = "hidden", G.support.shrinkWrapBlocks || d.done(function() { p.overflow = i.overflow[0], p.overflowX = i.overflow[1], p.overflowY = i.overflow[2] }));
        for (n in e)
            if (o = e[n], Ke.exec(o)) {
                if (delete e[n], l = l || "toggle" === o, o === (m ? "hide" : "show")) continue;
                g.push(n)
            }
        if (a = g.length) {
            r = G._data(t, "fxshow") || G._data(t, "fxshow", {}), "hidden" in r && (m = r.hidden), l && (r.hidden = !m), m ? G(t).show() : d.done(function() { G(t).hide() }), d.done(function() {
                var e;
                G.removeData(t, "fxshow", !0);
                for (e in f) G.style(t, e, f[e])
            });
            for (n = 0; n < a; n++) s = g[n], h = d.createTween(s, m ? r[s] : 0), f[s] = r[s] || G.style(t, s), s in r || (r[s] = h.start, m && (h.end = h.start, h.start = "width" === s || "height" === s ? 1 : 0))
        }
    }

    function A(t, e, i, n, s) { return new A.prototype.init(t, e, i, n, s) }

    function L(t, e) {
        var i, n = { height: t },
            s = 0;
        for (e = e ? 1 : 0; s < 4; s += 2 - e) i = me[s], n["margin" + i] = n["padding" + i] = t;
        return e && (n.opacity = n.width = t), n
    }

    function N(t) { return G.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow) }
    var F, j, R = t.document,
        B = t.location,
        $ = t.navigator,
        q = t.jQuery,
        Y = t.$,
        X = Array.prototype.push,
        U = Array.prototype.slice,
        K = Array.prototype.indexOf,
        V = Object.prototype.toString,
        Z = Object.prototype.hasOwnProperty,
        Q = String.prototype.trim,
        G = function(t, e) { return new G.fn.init(t, e, F) },
        J = /[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,
        tt = /\S/,
        et = /\s+/,
        it = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        nt = /^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,
        st = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        ot = /^[\],:{}\s]*$/,
        at = /(?:^|:|,)(?:\s*\[)+/g,
        rt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
        lt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,
        ht = /^-ms-/,
        ct = /-([\da-z])/gi,
        ut = function(t, e) { return (e + "").toUpperCase() },
        dt = function() { R.addEventListener ? (R.removeEventListener("DOMContentLoaded", dt, !1), G.ready()) : "complete" === R.readyState && (R.detachEvent("onreadystatechange", dt), G.ready()) },
        pt = {};
    G.fn = G.prototype = {
        constructor: G,
        init: function(t, i, n) {
            var s, o, a;
            if (!t) return this;
            if (t.nodeType) return this.context = this[0] = t, this.length = 1, this;
            if ("string" == typeof t) {
                if (!(s = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : nt.exec(t)) || !s[1] && i) return !i || i.jquery ? (i || n).find(t) : this.constructor(i).find(t);
                if (s[1]) return i = i instanceof G ? i[0] : i, a = i && i.nodeType ? i.ownerDocument || i : R, t = G.parseHTML(s[1], a, !0), st.test(s[1]) && G.isPlainObject(i) && this.attr.call(t, i, !0), G.merge(this, t);
                if ((o = R.getElementById(s[2])) && o.parentNode) {
                    if (o.id !== s[2]) return n.find(t);
                    this.length = 1, this[0] = o
                }
                return this.context = R, this.selector = t, this
            }
            return G.isFunction(t) ? n.ready(t) : (t.selector !== e && (this.selector = t.selector, this.context = t.context), G.makeArray(t, this))
        },
        selector: "",
        jquery: "1.8.3",
        length: 0,
        size: function() { return this.length },
        toArray: function() { return U.call(this) },
        get: function(t) { return null == t ? this.toArray() : t < 0 ? this[this.length + t] : this[t] },
        pushStack: function(t, e, i) { var n = G.merge(this.constructor(), t); return n.prevObject = this, n.context = this.context, "find" === e ? n.selector = this.selector + (this.selector ? " " : "") + i : e && (n.selector = this.selector + "." + e + "(" + i + ")"), n },
        each: function(t, e) { return G.each(this, t, e) },
        ready: function(t) { return G.ready.promise().done(t), this },
        eq: function(t) { return t = +t, -1 === t ? this.slice(t) : this.slice(t, t + 1) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        slice: function() { return this.pushStack(U.apply(this, arguments), "slice", U.call(arguments).join(",")) },
        map: function(t) { return this.pushStack(G.map(this, function(e, i) { return t.call(e, i, e) })) },
        end: function() { return this.prevObject || this.constructor(null) },
        push: X,
        sort: [].sort,
        splice: [].splice
    }, G.fn.init.prototype = G.fn, G.extend = G.fn.extend = function() {
        var t, i, n, s, o, a, r = arguments[0] || {},
            l = 1,
            h = arguments.length,
            c = !1;
        for ("boolean" == typeof r && (c = r, r = arguments[1] || {}, l = 2), "object" == typeof r || G.isFunction(r) || (r = {}), h === l && (r = this, --l); l < h; l++)
            if (null != (t = arguments[l]))
                for (i in t) n = r[i], s = t[i], r !== s && (c && s && (G.isPlainObject(s) || (o = G.isArray(s))) ? (o ? (o = !1, a = n && G.isArray(n) ? n : []) : a = n && G.isPlainObject(n) ? n : {}, r[i] = G.extend(c, a, s)) : s !== e && (r[i] = s));
        return r
    }, G.extend({
        noConflict: function(e) { return t.$ === G && (t.$ = Y), e && t.jQuery === G && (t.jQuery = q), G },
        isReady: !1,
        readyWait: 1,
        holdReady: function(t) { t ? G.readyWait++ : G.ready(!0) },
        ready: function(t) {
            if (!0 === t ? !--G.readyWait : !G.isReady) {
                if (!R.body) return setTimeout(G.ready, 1);
                G.isReady = !0, !0 !== t && --G.readyWait > 0 || (j.resolveWith(R, [G]), G.fn.trigger && G(R).trigger("ready").off("ready"))
            }
        },
        isFunction: function(t) { return "function" === G.type(t) },
        isArray: Array.isArray || function(t) { return "array" === G.type(t) },
        isWindow: function(t) { return null != t && t == t.window },
        isNumeric: function(t) { return !isNaN(parseFloat(t)) && isFinite(t) },
        type: function(t) { return null == t ? String(t) : pt[V.call(t)] || "object" },
        isPlainObject: function(t) { if (!t || "object" !== G.type(t) || t.nodeType || G.isWindow(t)) return !1; try { if (t.constructor && !Z.call(t, "constructor") && !Z.call(t.constructor.prototype, "isPrototypeOf")) return !1 } catch (t) { return !1 } var i; for (i in t); return i === e || Z.call(t, i) },
        isEmptyObject: function(t) { var e; for (e in t) return !1; return !0 },
        error: function(t) { throw new Error(t) },
        parseHTML: function(t, e, i) { var n; return t && "string" == typeof t ? ("boolean" == typeof e && (i = e, e = 0), e = e || R, (n = st.exec(t)) ? [e.createElement(n[1])] : (n = G.buildFragment([t], e, i ? null : []), G.merge([], (n.cacheable ? G.clone(n.fragment) : n.fragment).childNodes))) : null },
        parseJSON: function(e) { return e && "string" == typeof e ? (e = G.trim(e), t.JSON && t.JSON.parse ? t.JSON.parse(e) : ot.test(e.replace(rt, "@").replace(lt, "]").replace(at, "")) ? new Function("return " + e)() : void G.error("Invalid JSON: " + e)) : null },
        parseXML: function(i) { var n, s; if (!i || "string" != typeof i) return null; try { t.DOMParser ? (s = new DOMParser, n = s.parseFromString(i, "text/xml")) : (n = new ActiveXObject("Microsoft.XMLDOM"), n.async = "false", n.loadXML(i)) } catch (t) { n = e } return n && n.documentElement && !n.getElementsByTagName("parsererror").length || G.error("Invalid XML: " + i), n },
        noop: function() {},
        globalEval: function(e) { e && tt.test(e) && (t.execScript || function(e) { t.eval.call(t, e) })(e) },
        camelCase: function(t) { return t.replace(ht, "ms-").replace(ct, ut) },
        nodeName: function(t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() },
        each: function(t, i, n) {
            var s, o = 0,
                a = t.length,
                r = a === e || G.isFunction(t);
            if (n)
                if (r) {
                    for (s in t)
                        if (!1 === i.apply(t[s], n)) break
                } else
                    for (; o < a && !1 !== i.apply(t[o++], n););
            else if (r) {
                for (s in t)
                    if (!1 === i.call(t[s], s, t[s])) break
            } else
                for (; o < a && !1 !== i.call(t[o], o, t[o++]););
            return t
        },
        trim: Q && !Q.call("\ufeff ") ? function(t) { return null == t ? "" : Q.call(t) } : function(t) { return null == t ? "" : (t + "").replace(it, "") },
        makeArray: function(t, e) { var i, n = e || []; return null != t && (i = G.type(t), null == t.length || "string" === i || "function" === i || "regexp" === i || G.isWindow(t) ? X.call(n, t) : G.merge(n, t)), n },
        inArray: function(t, e, i) {
            var n;
            if (e) {
                if (K) return K.call(e, t, i);
                for (n = e.length, i = i ? i < 0 ? Math.max(0, n + i) : i : 0; i < n; i++)
                    if (i in e && e[i] === t) return i
            }
            return -1
        },
        merge: function(t, i) {
            var n = i.length,
                s = t.length,
                o = 0;
            if ("number" == typeof n)
                for (; o < n; o++) t[s++] = i[o];
            else
                for (; i[o] !== e;) t[s++] = i[o++];
            return t.length = s, t
        },
        grep: function(t, e, i) {
            var n, s = [],
                o = 0,
                a = t.length;
            for (i = !!i; o < a; o++) n = !!e(t[o], o), i !== n && s.push(t[o]);
            return s
        },
        map: function(t, i, n) {
            var s, o, a = [],
                r = 0,
                l = t.length;
            if (t instanceof G || l !== e && "number" == typeof l && (l > 0 && t[0] && t[l - 1] || 0 === l || G.isArray(t)))
                for (; r < l; r++) null != (s = i(t[r], r, n)) && (a[a.length] = s);
            else
                for (o in t) null != (s = i(t[o], o, n)) && (a[a.length] = s);
            return a.concat.apply([], a)
        },
        guid: 1,
        proxy: function(t, i) { var n, s, o; return "string" == typeof i && (n = t[i], i = t, t = n), G.isFunction(t) ? (s = U.call(arguments, 2), o = function() { return t.apply(i, s.concat(U.call(arguments))) }, o.guid = t.guid = t.guid || G.guid++, o) : e },
        access: function(t, i, n, s, o, a, r) {
            var l, h = null == n,
                c = 0,
                u = t.length;
            if (n && "object" == typeof n) {
                for (c in n) G.access(t, i, c, n[c], 1, a, s);
                o = 1
            } else if (s !== e) {
                if (l = r === e && G.isFunction(s), h && (l ? (l = i, i = function(t, e, i) { return l.call(G(t), i) }) : (i.call(t, s), i = null)), i)
                    for (; c < u; c++) i(t[c], n, l ? s.call(t[c], c, i(t[c], n)) : s, r);
                o = 1
            }
            return o ? t : h ? i.call(t) : u ? i(t[0], n) : a
        },
        now: function() { return (new Date).getTime() }
    }), G.ready.promise = function(e) {
        if (!j)
            if (j = G.Deferred(), "complete" === R.readyState) setTimeout(G.ready, 1);
            else if (R.addEventListener) R.addEventListener("DOMContentLoaded", dt, !1), t.addEventListener("load", G.ready, !1);
        else { R.attachEvent("onreadystatechange", dt), t.attachEvent("onload", G.ready); var i = !1; try { i = null == t.frameElement && R.documentElement } catch (t) {} i && i.doScroll && function t() { if (!G.isReady) { try { i.doScroll("left") } catch (e) { return setTimeout(t, 50) } G.ready() } }() }
        return j.promise(e)
    }, G.each("Boolean Number String Function Array Date RegExp Object".split(" "), function(t, e) { pt["[object " + e + "]"] = e.toLowerCase() }), F = G(R);
    var ft = {};
    G.Callbacks = function(t) {
        t = "string" == typeof t ? ft[t] || i(t) : G.extend({}, t);
        var n, s, o, a, r, l, h = [],
            c = !t.once && [],
            u = function(e) {
                for (n = t.memory && e, s = !0, l = a || 0, a = 0, r = h.length, o = !0; h && l < r; l++)
                    if (!1 === h[l].apply(e[0], e[1]) && t.stopOnFalse) { n = !1; break }
                o = !1, h && (c ? c.length && u(c.shift()) : n ? h = [] : d.disable())
            },
            d = {
                add: function() { if (h) { var e = h.length;! function e(i) { G.each(i, function(i, n) { var s = G.type(n); "function" === s ? t.unique && d.has(n) || h.push(n) : n && n.length && "string" !== s && e(n) }) }(arguments), o ? r = h.length : n && (a = e, u(n)) } return this },
                remove: function() {
                    return h && G.each(arguments, function(t, e) {
                        for (var i;
                            (i = G.inArray(e, h, i)) > -1;) h.splice(i, 1), o && (i <= r && r--, i <= l && l--)
                    }), this
                },
                has: function(t) { return G.inArray(t, h) > -1 },
                empty: function() { return h = [], this },
                disable: function() { return h = c = n = e, this },
                disabled: function() { return !h },
                lock: function() { return c = e, n || d.disable(), this },
                locked: function() { return !c },
                fireWith: function(t, e) { return e = e || [], e = [t, e.slice ? e.slice() : e], !h || s && !c || (o ? c.push(e) : u(e)), this },
                fire: function() { return d.fireWith(this, arguments), this },
                fired: function() { return !!s }
            };
        return d
    }, G.extend({
        Deferred: function(t) {
            var e = [
                    ["resolve", "done", G.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", G.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", G.Callbacks("memory")]
                ],
                i = "pending",
                n = {
                    state: function() { return i },
                    always: function() { return s.done(arguments).fail(arguments), this },
                    then: function() {
                        var t = arguments;
                        return G.Deferred(function(i) {
                            G.each(e, function(e, n) {
                                var o = n[0],
                                    a = t[e];
                                s[n[1]](G.isFunction(a) ? function() {
                                    var t = a.apply(this, arguments);
                                    t && G.isFunction(t.promise) ? t.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[o + "With"](this === s ? i : this, [t])
                                } : i[o])
                            }), t = null
                        }).promise()
                    },
                    promise: function(t) { return null != t ? G.extend(t, n) : n }
                },
                s = {};
            return n.pipe = n.then, G.each(e, function(t, o) {
                var a = o[2],
                    r = o[3];
                n[o[1]] = a.add, r && a.add(function() { i = r }, e[1 ^ t][2].disable, e[2][2].lock), s[o[0]] = a.fire, s[o[0] + "With"] = a.fireWith
            }), n.promise(s), t && t.call(s, s), s
        },
        when: function(t) {
            var e, i, n, s = 0,
                o = U.call(arguments),
                a = o.length,
                r = 1 !== a || t && G.isFunction(t.promise) ? a : 0,
                l = 1 === r ? t : G.Deferred(),
                h = function(t, i, n) { return function(s) { i[t] = this, n[t] = arguments.length > 1 ? U.call(arguments) : s, n === e ? l.notifyWith(i, n) : --r || l.resolveWith(i, n) } };
            if (a > 1)
                for (e = new Array(a), i = new Array(a), n = new Array(a); s < a; s++) o[s] && G.isFunction(o[s].promise) ? o[s].promise().done(h(s, n, o)).fail(l.reject).progress(h(s, i, e)) : --r;
            return r || l.resolveWith(n, o), l.promise()
        }
    }), G.support = function() {
        var e, i, n, s, o, a, r, l, h, c, u, d = R.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = d.getElementsByTagName("*"), n = d.getElementsByTagName("a")[0], !i || !n || !i.length) return {};
        s = R.createElement("select"), o = s.appendChild(R.createElement("option")), a = d.getElementsByTagName("input")[0], n.style.cssText = "top:1px;float:left;opacity:.5", e = { leadingWhitespace: 3 === d.firstChild.nodeType, tbody: !d.getElementsByTagName("tbody").length, htmlSerialize: !!d.getElementsByTagName("link").length, style: /top/.test(n.getAttribute("style")), hrefNormalized: "/a" === n.getAttribute("href"), opacity: /^0.5/.test(n.style.opacity), cssFloat: !!n.style.cssFloat, checkOn: "on" === a.value, optSelected: o.selected, getSetAttribute: "t" !== d.className, enctype: !!R.createElement("form").enctype, html5Clone: "<:nav></:nav>" !== R.createElement("nav").cloneNode(!0).outerHTML, boxModel: "CSS1Compat" === R.compatMode, submitBubbles: !0, changeBubbles: !0, focusinBubbles: !1, deleteExpando: !0, noCloneEvent: !0, inlineBlockNeedsLayout: !1, shrinkWrapBlocks: !1, reliableMarginRight: !0, boxSizingReliable: !0, pixelPosition: !1 }, a.checked = !0, e.noCloneChecked = a.cloneNode(!0).checked, s.disabled = !0, e.optDisabled = !o.disabled;
        try { delete d.test } catch (t) { e.deleteExpando = !1 }
        if (!d.addEventListener && d.attachEvent && d.fireEvent && (d.attachEvent("onclick", u = function() { e.noCloneEvent = !1 }), d.cloneNode(!0).fireEvent("onclick"), d.detachEvent("onclick", u)), a = R.createElement("input"), a.value = "t", a.setAttribute("type", "radio"), e.radioValue = "t" === a.value, a.setAttribute("checked", "checked"), a.setAttribute("name", "t"), d.appendChild(a), r = R.createDocumentFragment(), r.appendChild(d.lastChild), e.checkClone = r.cloneNode(!0).cloneNode(!0).lastChild.checked, e.appendChecked = a.checked, r.removeChild(a), r.appendChild(d), d.attachEvent)
            for (h in { submit: !0, change: !0, focusin: !0 }) l = "on" + h, c = l in d, c || (d.setAttribute(l, "return;"), c = "function" == typeof d[l]), e[h + "Bubbles"] = c;
        return G(function() {
            var i, n, s, o, a = "padding:0;margin:0;border:0;display:block;overflow:hidden;",
                r = R.getElementsByTagName("body")[0];
            r && (i = R.createElement("div"), i.style.cssText = "visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px", r.insertBefore(i, r.firstChild), n = R.createElement("div"), i.appendChild(n), n.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", s = n.getElementsByTagName("td"), s[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === s[0].offsetHeight, s[0].style.display = "", s[1].style.display = "none", e.reliableHiddenOffsets = c && 0 === s[0].offsetHeight, n.innerHTML = "", n.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", e.boxSizing = 4 === n.offsetWidth, e.doesNotIncludeMarginInBodyOffset = 1 !== r.offsetTop, t.getComputedStyle && (e.pixelPosition = "1%" !== (t.getComputedStyle(n, null) || {}).top, e.boxSizingReliable = "4px" === (t.getComputedStyle(n, null) || { width: "4px" }).width, o = R.createElement("div"), o.style.cssText = n.style.cssText = a, o.style.marginRight = o.style.width = "0", n.style.width = "1px", n.appendChild(o), e.reliableMarginRight = !parseFloat((t.getComputedStyle(o, null) || {}).marginRight)), void 0 !== n.style.zoom && (n.innerHTML = "", n.style.cssText = a + "width:1px;padding:1px;display:inline;zoom:1", e.inlineBlockNeedsLayout = 3 === n.offsetWidth, n.style.display = "block", n.style.overflow = "visible", n.innerHTML = "<div></div>", n.firstChild.style.width = "5px", e.shrinkWrapBlocks = 3 !== n.offsetWidth, i.style.zoom = 1), r.removeChild(i), i = n = s = o = null)
        }), r.removeChild(d), i = n = s = o = a = r = d = null, e
    }();
    var gt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
        mt = /([A-Z])/g;
    G.extend({
        cache: {},
        deletedIds: [],
        uuid: 0,
        expando: "jQuery" + (G.fn.jquery + Math.random()).replace(/\D/g, ""),
        noData: { embed: !0, object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000", applet: !0 },
        hasData: function(t) { return !!(t = t.nodeType ? G.cache[t[G.expando]] : t[G.expando]) && !s(t) },
        data: function(t, i, n, s) {
            if (G.acceptData(t)) {
                var o, a, r = G.expando,
                    l = "string" == typeof i,
                    h = t.nodeType,
                    c = h ? G.cache : t,
                    u = h ? t[r] : t[r] && r;
                if (u && c[u] && (s || c[u].data) || !l || n !== e) return u || (h ? t[r] = u = G.deletedIds.pop() || G.guid++ : u = r), c[u] || (c[u] = {}, h || (c[u].toJSON = G.noop)), "object" != typeof i && "function" != typeof i || (s ? c[u] = G.extend(c[u], i) : c[u].data = G.extend(c[u].data, i)), o = c[u], s || (o.data || (o.data = {}), o = o.data), n !== e && (o[G.camelCase(i)] = n), l ? null == (a = o[i]) && (a = o[G.camelCase(i)]) : a = o, a
            }
        },
        removeData: function(t, e, i) {
            if (G.acceptData(t)) {
                var n, o, a, r = t.nodeType,
                    l = r ? G.cache : t,
                    h = r ? t[G.expando] : G.expando;
                if (l[h]) { if (e && (n = i ? l[h] : l[h].data)) { G.isArray(e) || (e in n ? e = [e] : (e = G.camelCase(e), e = e in n ? [e] : e.split(" "))); for (o = 0, a = e.length; o < a; o++) delete n[e[o]]; if (!(i ? s : G.isEmptyObject)(n)) return }(i || (delete l[h].data, s(l[h]))) && (r ? G.cleanData([t], !0) : G.support.deleteExpando || l != l.window ? delete l[h] : l[h] = null) }
            }
        },
        _data: function(t, e, i) { return G.data(t, e, i, !0) },
        acceptData: function(t) { var e = t.nodeName && G.noData[t.nodeName.toLowerCase()]; return !e || !0 !== e && t.getAttribute("classid") === e }
    }), G.fn.extend({
        data: function(t, i) {
            var s, o, a, r, l, h = this[0],
                c = 0,
                u = null;
            if (t === e) {
                if (this.length && (u = G.data(h), 1 === h.nodeType && !G._data(h, "parsedAttrs"))) {
                    for (a = h.attributes, l = a.length; c < l; c++) r = a[c].name, r.indexOf("data-") || (r = G.camelCase(r.substring(5)), n(h, r, u[r]));
                    G._data(h, "parsedAttrs", !0)
                }
                return u
            }
            return "object" == typeof t ? this.each(function() { G.data(this, t) }) : (s = t.split(".", 2), s[1] = s[1] ? "." + s[1] : "", o = s[1] + "!", G.access(this, function(i) {
                if (i === e) return u = this.triggerHandler("getData" + o, [s[0]]), u === e && h && (u = G.data(h, t), u = n(h, t, u)), u === e && s[1] ? this.data(s[0]) : u;
                s[1] = i, this.each(function() {
                    var e = G(this);
                    e.triggerHandler("setData" + o, s), G.data(this, t, i), e.triggerHandler("changeData" + o, s)
                })
            }, null, i, arguments.length > 1, null, !1))
        },
        removeData: function(t) { return this.each(function() { G.removeData(this, t) }) }
    }), G.extend({
        queue: function(t, e, i) { var n; if (t) return e = (e || "fx") + "queue", n = G._data(t, e), i && (!n || G.isArray(i) ? n = G._data(t, e, G.makeArray(i)) : n.push(i)), n || [] },
        dequeue: function(t, e) {
            e = e || "fx";
            var i = G.queue(t, e),
                n = i.length,
                s = i.shift(),
                o = G._queueHooks(t, e),
                a = function() { G.dequeue(t, e) };
            "inprogress" === s && (s = i.shift(), n--), s && ("fx" === e && i.unshift("inprogress"), delete o.stop, s.call(t, a, o)), !n && o && o.empty.fire()
        },
        _queueHooks: function(t, e) { var i = e + "queueHooks"; return G._data(t, i) || G._data(t, i, { empty: G.Callbacks("once memory").add(function() { G.removeData(t, e + "queue", !0), G.removeData(t, i, !0) }) }) }
    }), G.fn.extend({
        queue: function(t, i) {
            var n = 2;
            return "string" != typeof t && (i = t, t = "fx", n--), arguments.length < n ? G.queue(this[0], t) : i === e ? this : this.each(function() {
                var e = G.queue(this, t, i);
                G._queueHooks(this, t), "fx" === t && "inprogress" !== e[0] && G.dequeue(this, t)
            })
        },
        dequeue: function(t) { return this.each(function() { G.dequeue(this, t) }) },
        delay: function(t, e) {
            return t = G.fx ? G.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function(e, i) {
                var n = setTimeout(e, t);
                i.stop = function() { clearTimeout(n) }
            })
        },
        clearQueue: function(t) { return this.queue(t || "fx", []) },
        promise: function(t, i) {
            var n, s = 1,
                o = G.Deferred(),
                a = this,
                r = this.length,
                l = function() {--s || o.resolveWith(a, [a]) };
            for ("string" != typeof t && (i = t, t = e), t = t || "fx"; r--;)(n = G._data(a[r], t + "queueHooks")) && n.empty && (s++, n.empty.add(l));
            return l(), o.promise(i)
        }
    });
    var vt, bt, yt, _t = /[\t\r\n]/g,
        wt = /\r/g,
        xt = /^(?:button|input)$/i,
        Ct = /^(?:button|input|object|select|textarea)$/i,
        kt = /^a(?:rea|)$/i,
        Tt = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,
        zt = G.support.getSetAttribute;
    G.fn.extend({
        attr: function(t, e) { return G.access(this, G.attr, t, e, arguments.length > 1) },
        removeAttr: function(t) { return this.each(function() { G.removeAttr(this, t) }) },
        prop: function(t, e) { return G.access(this, G.prop, t, e, arguments.length > 1) },
        removeProp: function(t) { return t = G.propFix[t] || t, this.each(function() { try { this[t] = e, delete this[t] } catch (t) {} }) },
        addClass: function(t) {
            var e, i, n, s, o, a, r;
            if (G.isFunction(t)) return this.each(function(e) { G(this).addClass(t.call(this, e, this.className)) });
            if (t && "string" == typeof t)
                for (e = t.split(et), i = 0, n = this.length; i < n; i++)
                    if (s = this[i], 1 === s.nodeType)
                        if (s.className || 1 !== e.length) {
                            for (o = " " + s.className + " ", a = 0, r = e.length; a < r; a++) o.indexOf(" " + e[a] + " ") < 0 && (o += e[a] + " ");
                            s.className = G.trim(o)
                        } else s.className = t;
            return this
        },
        removeClass: function(t) {
            var i, n, s, o, a, r, l;
            if (G.isFunction(t)) return this.each(function(e) { G(this).removeClass(t.call(this, e, this.className)) });
            if (t && "string" == typeof t || t === e)
                for (i = (t || "").split(et), r = 0, l = this.length; r < l; r++)
                    if (s = this[r], 1 === s.nodeType && s.className) {
                        for (n = (" " + s.className + " ").replace(_t, " "), o = 0, a = i.length; o < a; o++)
                            for (; n.indexOf(" " + i[o] + " ") >= 0;) n = n.replace(" " + i[o] + " ", " ");
                        s.className = t ? G.trim(n) : ""
                    }
            return this
        },
        toggleClass: function(t, e) {
            var i = typeof t,
                n = "boolean" == typeof e;
            return G.isFunction(t) ? this.each(function(i) { G(this).toggleClass(t.call(this, i, this.className, e), e) }) : this.each(function() {
                if ("string" === i)
                    for (var s, o = 0, a = G(this), r = e, l = t.split(et); s = l[o++];) r = n ? r : !a.hasClass(s), a[r ? "addClass" : "removeClass"](s);
                else "undefined" !== i && "boolean" !== i || (this.className && G._data(this, "__className__", this.className), this.className = this.className || !1 === t ? "" : G._data(this, "__className__") || "")
            })
        },
        hasClass: function(t) {
            for (var e = " " + t + " ", i = 0, n = this.length; i < n; i++)
                if (1 === this[i].nodeType && (" " + this[i].className + " ").replace(_t, " ").indexOf(e) >= 0) return !0;
            return !1
        },
        val: function(t) {
            var i, n, s, o = this[0]; {
                if (arguments.length) return s = G.isFunction(t), this.each(function(n) {
                    var o, a = G(this);
                    1 === this.nodeType && (o = s ? t.call(this, n, a.val()) : t, null == o ? o = "" : "number" == typeof o ? o += "" : G.isArray(o) && (o = G.map(o, function(t) { return null == t ? "" : t + "" })), (i = G.valHooks[this.type] || G.valHooks[this.nodeName.toLowerCase()]) && "set" in i && i.set(this, o, "value") !== e || (this.value = o))
                });
                if (o) return (i = G.valHooks[o.type] || G.valHooks[o.nodeName.toLowerCase()]) && "get" in i && (n = i.get(o, "value")) !== e ? n : (n = o.value, "string" == typeof n ? n.replace(wt, "") : null == n ? "" : n)
            }
        }
    }), G.extend({
        valHooks: {
            option: { get: function(t) { var e = t.attributes.value; return !e || e.specified ? t.value : t.text } },
            select: {
                get: function(t) {
                    for (var e, i, n = t.options, s = t.selectedIndex, o = "select-one" === t.type || s < 0, a = o ? null : [], r = o ? s + 1 : n.length, l = s < 0 ? r : o ? s : 0; l < r; l++)
                        if (i = n[l], (i.selected || l === s) && (G.support.optDisabled ? !i.disabled : null === i.getAttribute("disabled")) && (!i.parentNode.disabled || !G.nodeName(i.parentNode, "optgroup"))) {
                            if (e = G(i).val(), o) return e;
                            a.push(e)
                        }
                    return a
                },
                set: function(t, e) { var i = G.makeArray(e); return G(t).find("option").each(function() { this.selected = G.inArray(G(this).val(), i) >= 0 }), i.length || (t.selectedIndex = -1), i }
            }
        },
        attrFn: {},
        attr: function(t, i, n, s) { var o, a, r, l = t.nodeType; if (t && 3 !== l && 8 !== l && 2 !== l) return s && G.isFunction(G.fn[i]) ? G(t)[i](n) : void 0 === t.getAttribute ? G.prop(t, i, n) : (r = 1 !== l || !G.isXMLDoc(t), r && (i = i.toLowerCase(), a = G.attrHooks[i] || (Tt.test(i) ? bt : vt)), n !== e ? null === n ? void G.removeAttr(t, i) : a && "set" in a && r && (o = a.set(t, n, i)) !== e ? o : (t.setAttribute(i, n + ""), n) : a && "get" in a && r && null !== (o = a.get(t, i)) ? o : (o = t.getAttribute(i), null === o ? e : o)) },
        removeAttr: function(t, e) {
            var i, n, s, o, a = 0;
            if (e && 1 === t.nodeType)
                for (n = e.split(et); a < n.length; a++)(s = n[a]) && (i = G.propFix[s] || s, o = Tt.test(s), o || G.attr(t, s, ""), t.removeAttribute(zt ? s : i), o && i in t && (t[i] = !1))
        },
        attrHooks: {
            type: {
                set: function(t, e) {
                    if (xt.test(t.nodeName) && t.parentNode) G.error("type property can't be changed");
                    else if (!G.support.radioValue && "radio" === e && G.nodeName(t, "input")) { var i = t.value; return t.setAttribute("type", e), i && (t.value = i), e }
                }
            },
            value: {
                get: function(t, e) { return vt && G.nodeName(t, "button") ? vt.get(t, e) : e in t ? t.value : null },
                set: function(t, e, i) {
                    if (vt && G.nodeName(t, "button")) return vt.set(t, e, i);
                    t.value = e
                }
            }
        },
        propFix: { tabindex: "tabIndex", readonly: "readOnly", for: "htmlFor", class: "className", maxlength: "maxLength", cellspacing: "cellSpacing", cellpadding: "cellPadding", rowspan: "rowSpan", colspan: "colSpan", usemap: "useMap", frameborder: "frameBorder", contenteditable: "contentEditable" },
        prop: function(t, i, n) { var s, o, a, r = t.nodeType; if (t && 3 !== r && 8 !== r && 2 !== r) return a = 1 !== r || !G.isXMLDoc(t), a && (i = G.propFix[i] || i, o = G.propHooks[i]), n !== e ? o && "set" in o && (s = o.set(t, n, i)) !== e ? s : t[i] = n : o && "get" in o && null !== (s = o.get(t, i)) ? s : t[i] },
        propHooks: { tabIndex: { get: function(t) { var i = t.getAttributeNode("tabindex"); return i && i.specified ? parseInt(i.value, 10) : Ct.test(t.nodeName) || kt.test(t.nodeName) && t.href ? 0 : e } } }
    }), bt = { get: function(t, i) { var n, s = G.prop(t, i); return !0 === s || "boolean" != typeof s && (n = t.getAttributeNode(i)) && !1 !== n.nodeValue ? i.toLowerCase() : e }, set: function(t, e, i) { var n; return !1 === e ? G.removeAttr(t, i) : (n = G.propFix[i] || i, n in t && (t[n] = !0), t.setAttribute(i, i.toLowerCase())), i } }, zt || (yt = { name: !0, id: !0, coords: !0 }, vt = G.valHooks.button = { get: function(t, i) { var n; return n = t.getAttributeNode(i), n && (yt[i] ? "" !== n.value : n.specified) ? n.value : e }, set: function(t, e, i) { var n = t.getAttributeNode(i); return n || (n = R.createAttribute(i), t.setAttributeNode(n)), n.value = e + "" } }, G.each(["width", "height"], function(t, e) { G.attrHooks[e] = G.extend(G.attrHooks[e], { set: function(t, i) { if ("" === i) return t.setAttribute(e, "auto"), i } }) }),
        G.attrHooks.contenteditable = { get: vt.get, set: function(t, e, i) { "" === e && (e = "false"), vt.set(t, e, i) } }), G.support.hrefNormalized || G.each(["href", "src", "width", "height"], function(t, i) { G.attrHooks[i] = G.extend(G.attrHooks[i], { get: function(t) { var n = t.getAttribute(i, 2); return null === n ? e : n } }) }), G.support.style || (G.attrHooks.style = { get: function(t) { return t.style.cssText.toLowerCase() || e }, set: function(t, e) { return t.style.cssText = e + "" } }), G.support.optSelected || (G.propHooks.selected = G.extend(G.propHooks.selected, { get: function(t) { var e = t.parentNode; return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null } })), G.support.enctype || (G.propFix.enctype = "encoding"), G.support.checkOn || G.each(["radio", "checkbox"], function() { G.valHooks[this] = { get: function(t) { return null === t.getAttribute("value") ? "on" : t.value } } }), G.each(["radio", "checkbox"], function() { G.valHooks[this] = G.extend(G.valHooks[this], { set: function(t, e) { if (G.isArray(e)) return t.checked = G.inArray(G(t).val(), e) >= 0 } }) });
    var Dt = /^(?:textarea|input|select)$/i,
        St = /^([^\.]*|)(?:\.(.+)|)$/,
        It = /(?:^|\s)hover(\.\S+|)\b/,
        Pt = /^key/,
        Wt = /^(?:mouse|contextmenu)|click/,
        Ot = /^(?:focusinfocus|focusoutblur)$/,
        Et = function(t) { return G.event.special.hover ? t : t.replace(It, "mouseenter$1 mouseleave$1") };
    G.event = {
            add: function(t, i, n, s, o) {
                var a, r, l, h, c, u, d, p, f, g, m;
                if (3 !== t.nodeType && 8 !== t.nodeType && i && n && (a = G._data(t))) {
                    for (n.handler && (f = n, n = f.handler, o = f.selector), n.guid || (n.guid = G.guid++), l = a.events, l || (a.events = l = {}), r = a.handle, r || (a.handle = r = function(t) { return void 0 === G || t && G.event.triggered === t.type ? e : G.event.dispatch.apply(r.elem, arguments) }, r.elem = t), i = G.trim(Et(i)).split(" "), h = 0; h < i.length; h++) c = St.exec(i[h]) || [], u = c[1], d = (c[2] || "").split(".").sort(), m = G.event.special[u] || {}, u = (o ? m.delegateType : m.bindType) || u, m = G.event.special[u] || {}, p = G.extend({ type: u, origType: c[1], data: s, handler: n, guid: n.guid, selector: o, needsContext: o && G.expr.match.needsContext.test(o), namespace: d.join(".") }, f), g = l[u], g || (g = l[u] = [], g.delegateCount = 0, m.setup && !1 !== m.setup.call(t, s, d, r) || (t.addEventListener ? t.addEventListener(u, r, !1) : t.attachEvent && t.attachEvent("on" + u, r))), m.add && (m.add.call(t, p), p.handler.guid || (p.handler.guid = n.guid)), o ? g.splice(g.delegateCount++, 0, p) : g.push(p), G.event.global[u] = !0;
                    t = null
                }
            },
            global: {},
            remove: function(t, e, i, n, s) {
                var o, a, r, l, h, c, u, d, p, f, g, m = G.hasData(t) && G._data(t);
                if (m && (d = m.events)) {
                    for (e = G.trim(Et(e || "")).split(" "), o = 0; o < e.length; o++)
                        if (a = St.exec(e[o]) || [], r = l = a[1], h = a[2], r) {
                            for (p = G.event.special[r] || {}, r = (n ? p.delegateType : p.bindType) || r, f = d[r] || [], c = f.length, h = h ? new RegExp("(^|\\.)" + h.split(".").sort().join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = 0; u < f.length; u++) g = f[u], !s && l !== g.origType || i && i.guid !== g.guid || h && !h.test(g.namespace) || n && n !== g.selector && ("**" !== n || !g.selector) || (f.splice(u--, 1), g.selector && f.delegateCount--, p.remove && p.remove.call(t, g));
                            0 === f.length && c !== f.length && (p.teardown && !1 !== p.teardown.call(t, h, m.handle) || G.removeEvent(t, r, m.handle), delete d[r])
                        } else
                            for (r in d) G.event.remove(t, r + e[o], i, n, !0);
                    G.isEmptyObject(d) && (delete m.handle, G.removeData(t, "events", !0))
                }
            },
            customEvent: { getData: !0, setData: !0, changeData: !0 },
            trigger: function(i, n, s, o) {
                if (!s || 3 !== s.nodeType && 8 !== s.nodeType) {
                    var a, r, l, h, c, u, d, p, f, g, m = i.type || i,
                        v = [];
                    if (!Ot.test(m + G.event.triggered) && (m.indexOf("!") >= 0 && (m = m.slice(0, -1), r = !0), m.indexOf(".") >= 0 && (v = m.split("."), m = v.shift(), v.sort()), s && !G.event.customEvent[m] || G.event.global[m]))
                        if (i = "object" == typeof i ? i[G.expando] ? i : new G.Event(m, i) : new G.Event(m), i.type = m, i.isTrigger = !0, i.exclusive = r, i.namespace = v.join("."), i.namespace_re = i.namespace ? new RegExp("(^|\\.)" + v.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, u = m.indexOf(":") < 0 ? "on" + m : "", s) {
                            if (i.result = e, i.target || (i.target = s), n = null != n ? G.makeArray(n) : [], n.unshift(i), d = G.event.special[m] || {}, !d.trigger || !1 !== d.trigger.apply(s, n)) {
                                if (f = [
                                        [s, d.bindType || m]
                                    ], !o && !d.noBubble && !G.isWindow(s)) {
                                    for (g = d.delegateType || m, h = Ot.test(g + m) ? s : s.parentNode, c = s; h; h = h.parentNode) f.push([h, g]), c = h;
                                    c === (s.ownerDocument || R) && f.push([c.defaultView || c.parentWindow || t, g])
                                }
                                for (l = 0; l < f.length && !i.isPropagationStopped(); l++) h = f[l][0], i.type = f[l][1], p = (G._data(h, "events") || {})[i.type] && G._data(h, "handle"), p && p.apply(h, n), (p = u && h[u]) && G.acceptData(h) && p.apply && !1 === p.apply(h, n) && i.preventDefault();
                                return i.type = m, o || i.isDefaultPrevented() || d._default && !1 !== d._default.apply(s.ownerDocument, n) || "click" === m && G.nodeName(s, "a") || !G.acceptData(s) || u && s[m] && ("focus" !== m && "blur" !== m || 0 !== i.target.offsetWidth) && !G.isWindow(s) && (c = s[u], c && (s[u] = null), G.event.triggered = m, s[m](), G.event.triggered = e, c && (s[u] = c)), i.result
                            }
                        } else { a = G.cache; for (l in a) a[l].events && a[l].events[m] && G.event.trigger(i, n, a[l].handle.elem, !0) }
                }
            },
            dispatch: function(i) {
                i = G.event.fix(i || t.event);
                var n, s, o, a, r, l, h, c, u, d = (G._data(this, "events") || {})[i.type] || [],
                    p = d.delegateCount,
                    f = U.call(arguments),
                    g = !i.exclusive && !i.namespace,
                    m = G.event.special[i.type] || {},
                    v = [];
                if (f[0] = i, i.delegateTarget = this, !m.preDispatch || !1 !== m.preDispatch.call(this, i)) {
                    if (p && (!i.button || "click" !== i.type))
                        for (o = i.target; o != this; o = o.parentNode || this)
                            if (!0 !== o.disabled || "click" !== i.type) {
                                for (r = {}, h = [], n = 0; n < p; n++) c = d[n], u = c.selector, r[u] === e && (r[u] = c.needsContext ? G(u, this).index(o) >= 0 : G.find(u, this, null, [o]).length), r[u] && h.push(c);
                                h.length && v.push({ elem: o, matches: h })
                            }
                    for (d.length > p && v.push({ elem: this, matches: d.slice(p) }), n = 0; n < v.length && !i.isPropagationStopped(); n++)
                        for (l = v[n], i.currentTarget = l.elem, s = 0; s < l.matches.length && !i.isImmediatePropagationStopped(); s++) c = l.matches[s], (g || !i.namespace && !c.namespace || i.namespace_re && i.namespace_re.test(c.namespace)) && (i.data = c.data, i.handleObj = c, (a = ((G.event.special[c.origType] || {}).handle || c.handler).apply(l.elem, f)) !== e && (i.result = a, !1 === a && (i.preventDefault(), i.stopPropagation())));
                    return m.postDispatch && m.postDispatch.call(this, i), i.result
                }
            },
            props: "attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(t, e) { return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t } },
            mouseHooks: {
                props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(t, i) {
                    var n, s, o, a = i.button,
                        r = i.fromElement;
                    return null == t.pageX && null != i.clientX && (n = t.target.ownerDocument || R, s = n.documentElement, o = n.body, t.pageX = i.clientX + (s && s.scrollLeft || o && o.scrollLeft || 0) - (s && s.clientLeft || o && o.clientLeft || 0), t.pageY = i.clientY + (s && s.scrollTop || o && o.scrollTop || 0) - (s && s.clientTop || o && o.clientTop || 0)), !t.relatedTarget && r && (t.relatedTarget = r === t.target ? i.toElement : r), t.which || a === e || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
                }
            },
            fix: function(t) {
                if (t[G.expando]) return t;
                var e, i, n = t,
                    s = G.event.fixHooks[t.type] || {},
                    o = s.props ? this.props.concat(s.props) : this.props;
                for (t = G.Event(n), e = o.length; e;) i = o[--e], t[i] = n[i];
                return t.target || (t.target = n.srcElement || R), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, n) : t
            },
            special: { load: { noBubble: !0 }, focus: { delegateType: "focusin" }, blur: { delegateType: "focusout" }, beforeunload: { setup: function(t, e, i) { G.isWindow(this) && (this.onbeforeunload = i) }, teardown: function(t, e) { this.onbeforeunload === e && (this.onbeforeunload = null) } } },
            simulate: function(t, e, i, n) {
                var s = G.extend(new G.Event, i, { type: t, isSimulated: !0, originalEvent: {} });
                n ? G.event.trigger(s, null, e) : G.event.dispatch.call(e, s), s.isDefaultPrevented() && i.preventDefault()
            }
        }, G.event.handle = G.event.dispatch, G.removeEvent = R.removeEventListener ? function(t, e, i) { t.removeEventListener && t.removeEventListener(e, i, !1) } : function(t, e, i) {
            var n = "on" + e;
            t.detachEvent && (void 0 === t[n] && (t[n] = null), t.detachEvent(n, i))
        }, G.Event = function(t, e) {
            if (!(this instanceof G.Event)) return new G.Event(t, e);
            t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || !1 === t.returnValue || t.getPreventDefault && t.getPreventDefault() ? a : o) : this.type = t, e && G.extend(this, e), this.timeStamp = t && t.timeStamp || G.now(), this[G.expando] = !0
        }, G.Event.prototype = {
            preventDefault: function() {
                this.isDefaultPrevented = a;
                var t = this.originalEvent;
                t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
            },
            stopPropagation: function() {
                this.isPropagationStopped = a;
                var t = this.originalEvent;
                t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
            },
            stopImmediatePropagation: function() { this.isImmediatePropagationStopped = a, this.stopPropagation() },
            isDefaultPrevented: o,
            isPropagationStopped: o,
            isImmediatePropagationStopped: o
        }, G.each({ mouseenter: "mouseover", mouseleave: "mouseout" }, function(t, e) {
            G.event.special[t] = {
                delegateType: e,
                bindType: e,
                handle: function(t) {
                    var i, n = this,
                        s = t.relatedTarget,
                        o = t.handleObj;
                    o.selector;
                    return s && (s === n || G.contains(n, s)) || (t.type = o.origType, i = o.handler.apply(this, arguments), t.type = e), i
                }
            }
        }), G.support.submitBubbles || (G.event.special.submit = {
            setup: function() {
                if (G.nodeName(this, "form")) return !1;
                G.event.add(this, "click._submit keypress._submit", function(t) {
                    var i = t.target,
                        n = G.nodeName(i, "input") || G.nodeName(i, "button") ? i.form : e;
                    n && !G._data(n, "_submit_attached") && (G.event.add(n, "submit._submit", function(t) { t._submit_bubble = !0 }), G._data(n, "_submit_attached", !0))
                })
            },
            postDispatch: function(t) { t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && G.event.simulate("submit", this.parentNode, t, !0)) },
            teardown: function() {
                if (G.nodeName(this, "form")) return !1;
                G.event.remove(this, "._submit")
            }
        }), G.support.changeBubbles || (G.event.special.change = {
            setup: function() {
                if (Dt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (G.event.add(this, "propertychange._change", function(t) { "checked" === t.originalEvent.propertyName && (this._just_changed = !0) }), G.event.add(this, "click._change", function(t) { this._just_changed && !t.isTrigger && (this._just_changed = !1), G.event.simulate("change", this, t, !0) })), !1;
                G.event.add(this, "beforeactivate._change", function(t) {
                    var e = t.target;
                    Dt.test(e.nodeName) && !G._data(e, "_change_attached") && (G.event.add(e, "change._change", function(t) {!this.parentNode || t.isSimulated || t.isTrigger || G.event.simulate("change", this.parentNode, t, !0) }), G._data(e, "_change_attached", !0))
                })
            },
            handle: function(t) { var e = t.target; if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments) },
            teardown: function() { return G.event.remove(this, "._change"), !Dt.test(this.nodeName) }
        }), G.support.focusinBubbles || G.each({ focus: "focusin", blur: "focusout" }, function(t, e) {
            var i = 0,
                n = function(t) { G.event.simulate(e, t.target, G.event.fix(t), !0) };
            G.event.special[e] = { setup: function() { 0 == i++ && R.addEventListener(t, n, !0) }, teardown: function() { 0 == --i && R.removeEventListener(t, n, !0) } }
        }), G.fn.extend({
            on: function(t, i, n, s, a) {
                var r, l;
                if ("object" == typeof t) { "string" != typeof i && (n = n || i, i = e); for (l in t) this.on(l, i, n, t[l], a); return this }
                if (null == n && null == s ? (s = i, n = i = e) : null == s && ("string" == typeof i ? (s = n, n = e) : (s = n, n = i, i = e)), !1 === s) s = o;
                else if (!s) return this;
                return 1 === a && (r = s, s = function(t) { return G().off(t), r.apply(this, arguments) }, s.guid = r.guid || (r.guid = G.guid++)), this.each(function() { G.event.add(this, t, s, n, i) })
            },
            one: function(t, e, i, n) { return this.on(t, e, i, n, 1) },
            off: function(t, i, n) { var s, a; if (t && t.preventDefault && t.handleObj) return s = t.handleObj, G(t.delegateTarget).off(s.namespace ? s.origType + "." + s.namespace : s.origType, s.selector, s.handler), this; if ("object" == typeof t) { for (a in t) this.off(a, i, t[a]); return this } return !1 !== i && "function" != typeof i || (n = i, i = e), !1 === n && (n = o), this.each(function() { G.event.remove(this, t, n, i) }) },
            bind: function(t, e, i) { return this.on(t, null, e, i) },
            unbind: function(t, e) { return this.off(t, null, e) },
            live: function(t, e, i) { return G(this.context).on(t, this.selector, e, i), this },
            die: function(t, e) { return G(this.context).off(t, this.selector || "**", e), this },
            delegate: function(t, e, i, n) { return this.on(e, t, i, n) },
            undelegate: function(t, e, i) { return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", i) },
            trigger: function(t, e) { return this.each(function() { G.event.trigger(t, e, this) }) },
            triggerHandler: function(t, e) { if (this[0]) return G.event.trigger(t, e, this[0], !0) },
            toggle: function(t) {
                var e = arguments,
                    i = t.guid || G.guid++,
                    n = 0,
                    s = function(i) { var s = (G._data(this, "lastToggle" + t.guid) || 0) % n; return G._data(this, "lastToggle" + t.guid, s + 1), i.preventDefault(), e[s].apply(this, arguments) || !1 };
                for (s.guid = i; n < e.length;) e[n++].guid = i;
                return this.click(s)
            },
            hover: function(t, e) { return this.mouseenter(t).mouseleave(e || t) }
        }), G.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(t, e) { G.fn[e] = function(t, i) { return null == i && (i = t, t = null), arguments.length > 0 ? this.on(e, null, t, i) : this.trigger(e) }, Pt.test(e) && (G.event.fixHooks[e] = G.event.keyHooks), Wt.test(e) && (G.event.fixHooks[e] = G.event.mouseHooks) }),
        function(t, e) {
            function i(t, e, i, n) {
                i = i || [], e = e || P;
                var s, o, a, r, l = e.nodeType;
                if (!t || "string" != typeof t) return i;
                if (1 !== l && 9 !== l) return [];
                if (!(a = w(e)) && !n && (s = tt.exec(t)))
                    if (r = s[1]) { if (9 === l) { if (!(o = e.getElementById(r)) || !o.parentNode) return i; if (o.id === r) return i.push(o), i } else if (e.ownerDocument && (o = e.ownerDocument.getElementById(r)) && x(e, o) && o.id === r) return i.push(o), i } else { if (s[2]) return M.apply(i, A.call(e.getElementsByTagName(t), 0)), i; if ((r = s[3]) && ct && e.getElementsByClassName) return M.apply(i, A.call(e.getElementsByClassName(r), 0)), i }
                return g(t.replace(V, "$1"), e, i, n, a)
            }

            function n(t) { return function(e) { return "input" === e.nodeName.toLowerCase() && e.type === t } }

            function s(t) { return function(e) { var i = e.nodeName.toLowerCase(); return ("input" === i || "button" === i) && e.type === t } }

            function o(t) { return N(function(e) { return e = +e, N(function(i, n) { for (var s, o = t([], i.length, e), a = o.length; a--;) i[s = o[a]] && (i[s] = !(n[s] = i[s])) }) }) }

            function a(t, e, i) {
                if (t === e) return i;
                for (var n = t.nextSibling; n;) {
                    if (n === e) return -1;
                    n = n.nextSibling
                }
                return 1
            }

            function r(t, e) { var n, s, o, a, r, l, h, c = R[S][t + " "]; if (c) return e ? 0 : c.slice(0); for (r = t, l = [], h = y.preFilter; r;) { n && !(s = Z.exec(r)) || (s && (r = r.slice(s[0].length) || r), l.push(o = [])), n = !1, (s = Q.exec(r)) && (o.push(n = new I(s.shift())), r = r.slice(n.length), n.type = s[0].replace(V, " ")); for (a in y.filter) !(s = ot[a].exec(r)) || h[a] && !(s = h[a](s)) || (o.push(n = new I(s.shift())), r = r.slice(n.length), n.type = a, n.matches = s); if (!n) break } return e ? r.length : r ? i.error(t) : R(t, l).slice(0) }

            function l(t, e, i) {
                var n = e.dir,
                    s = i && "parentNode" === e.dir,
                    o = E++;
                return e.first ? function(e, i, o) {
                    for (; e = e[n];)
                        if (s || 1 === e.nodeType) return t(e, i, o)
                } : function(e, i, a) {
                    if (a) {
                        for (; e = e[n];)
                            if ((s || 1 === e.nodeType) && t(e, i, a)) return e
                    } else
                        for (var r, l = O + " " + o + " ", h = l + v; e = e[n];)
                            if (s || 1 === e.nodeType) {
                                if ((r = e[S]) === h) return e.sizset;
                                if ("string" == typeof r && 0 === r.indexOf(l)) { if (e.sizset) return e } else {
                                    if (e[S] = h, t(e, i, a)) return e.sizset = !0, e;
                                    e.sizset = !1
                                }
                            }
                }
            }

            function h(t) {
                return t.length > 1 ? function(e, i, n) {
                    for (var s = t.length; s--;)
                        if (!t[s](e, i, n)) return !1;
                    return !0
                } : t[0]
            }

            function c(t, e, i, n, s) { for (var o, a = [], r = 0, l = t.length, h = null != e; r < l; r++)(o = t[r]) && (i && !i(o, n, s) || (a.push(o), h && e.push(r))); return a }

            function u(t, e, i, n, s, o) {
                return n && !n[S] && (n = u(n)), s && !s[S] && (s = u(s, o)), N(function(o, a, r, l) {
                    var h, u, d, p = [],
                        g = [],
                        m = a.length,
                        v = o || f(e || "*", r.nodeType ? [r] : r, []),
                        b = !t || !o && e ? v : c(v, p, t, r, l),
                        y = i ? s || (o ? t : m || n) ? [] : a : b;
                    if (i && i(b, y, r, l), n)
                        for (h = c(y, g), n(h, [], r, l), u = h.length; u--;)(d = h[u]) && (y[g[u]] = !(b[g[u]] = d));
                    if (o) {
                        if (s || t) {
                            if (s) {
                                for (h = [], u = y.length; u--;)(d = y[u]) && h.push(b[u] = d);
                                s(null, y = [], h, l)
                            }
                            for (u = y.length; u--;)(d = y[u]) && (h = s ? L.call(o, d) : p[u]) > -1 && (o[h] = !(a[h] = d))
                        }
                    } else y = c(y === a ? y.splice(m, y.length) : y), s ? s(null, a, y, l) : M.apply(a, y)
                })
            }

            function d(t) {
                for (var e, i, n, s = t.length, o = y.relative[t[0].type], a = o || y.relative[" "], r = o ? 1 : 0, c = l(function(t) { return t === e }, a, !0), p = l(function(t) { return L.call(e, t) > -1 }, a, !0), f = [function(t, i, n) { return !o && (n || i !== z) || ((e = i).nodeType ? c(t, i, n) : p(t, i, n)) }]; r < s; r++)
                    if (i = y.relative[t[r].type]) f = [l(h(f), i)];
                    else { if (i = y.filter[t[r].type].apply(null, t[r].matches), i[S]) { for (n = ++r; n < s && !y.relative[t[n].type]; n++); return u(r > 1 && h(f), r > 1 && t.slice(0, r - 1).join("").replace(V, "$1"), i, r < n && d(t.slice(r, n)), n < s && d(t = t.slice(n)), n < s && t.join("")) } f.push(i) }
                return h(f)
            }

            function p(t, e) {
                var n = e.length > 0,
                    s = t.length > 0,
                    o = function(a, r, l, h, u) {
                        var d, p, f, g = [],
                            m = 0,
                            b = "0",
                            _ = a && [],
                            w = null != u,
                            x = z,
                            C = a || s && y.find.TAG("*", u && r.parentNode || r),
                            k = O += null == x ? 1 : Math.E;
                        for (w && (z = r !== P && r, v = o.el); null != (d = C[b]); b++) {
                            if (s && d) {
                                for (p = 0; f = t[p]; p++)
                                    if (f(d, r, l)) { h.push(d); break }
                                w && (O = k, v = ++o.el)
                            }
                            n && ((d = !f && d) && m--, a && _.push(d))
                        }
                        if (m += b, n && b !== m) {
                            for (p = 0; f = e[p]; p++) f(_, g, r, l);
                            if (a) {
                                if (m > 0)
                                    for (; b--;) _[b] || g[b] || (g[b] = H.call(h));
                                g = c(g)
                            }
                            M.apply(h, g), w && !a && g.length > 0 && m + e.length > 1 && i.uniqueSort(h)
                        }
                        return w && (O = k, z = x), _
                    };
                return o.el = 0, n ? N(o) : o
            }

            function f(t, e, n) { for (var s = 0, o = e.length; s < o; s++) i(t, e[s], n); return n }

            function g(t, e, i, n, s) {
                var o, a, l, h, c, u = r(t);
                u.length;
                if (!n && 1 === u.length) {
                    if (a = u[0] = u[0].slice(0), a.length > 2 && "ID" === (l = a[0]).type && 9 === e.nodeType && !s && y.relative[a[1].type]) {
                        if (!(e = y.find.ID(l.matches[0].replace(st, ""), e, s)[0])) return i;
                        t = t.slice(a.shift().length)
                    }
                    for (o = ot.POS.test(t) ? -1 : a.length - 1; o >= 0 && (l = a[o], !y.relative[h = l.type]); o--)
                        if ((c = y.find[h]) && (n = c(l.matches[0].replace(st, ""), et.test(a[0].type) && e.parentNode || e, s))) { if (a.splice(o, 1), !(t = n.length && a.join(""))) return M.apply(i, A.call(n, 0)), i; break }
                }
                return C(t, u)(n, e, s, i, et.test(t)), i
            }

            function m() {}
            var v, b, y, _, w, x, C, k, T, z, D = !0,
                S = ("sizcache" + Math.random()).replace(".", ""),
                I = String,
                P = t.document,
                W = P.documentElement,
                O = 0,
                E = 0,
                H = [].pop,
                M = [].push,
                A = [].slice,
                L = [].indexOf || function(t) {
                    for (var e = 0, i = this.length; e < i; e++)
                        if (this[e] === t) return e;
                    return -1
                },
                N = function(t, e) { return t[S] = null == e || e, t },
                F = function() {
                    var t = {},
                        e = [];
                    return N(function(i, n) { return e.push(i) > y.cacheLength && delete t[e.shift()], t[i + " "] = n }, t)
                },
                j = F(),
                R = F(),
                B = F(),
                $ = "[\\x20\\t\\r\\n\\f]",
                q = "(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",
                Y = q.replace("w", "w#"),
                X = "\\[" + $ + "*(" + q + ")" + $ + "*(?:([*^$|!~]?=)" + $ + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + Y + ")|)|)" + $ + "*\\]",
                U = ":(" + q + ")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:" + X + ")|[^:]|\\\\.)*|.*))\\)|)",
                K = ":(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + $ + "*((?:-\\d)?\\d*)" + $ + "*\\)|)(?=[^-]|$)",
                V = new RegExp("^" + $ + "+|((?:^|[^\\\\])(?:\\\\.)*)" + $ + "+$", "g"),
                Z = new RegExp("^" + $ + "*," + $ + "*"),
                Q = new RegExp("^" + $ + "*([\\x20\\t\\r\\n\\f>+~])" + $ + "*"),
                J = new RegExp(U),
                tt = /^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,
                et = /[\x20\t\r\n\f]*[+~]/,
                it = /h\d/i,
                nt = /input|select|textarea|button/i,
                st = /\\(?!\\)/g,
                ot = { ID: new RegExp("^#(" + q + ")"), CLASS: new RegExp("^\\.(" + q + ")"), NAME: new RegExp("^\\[name=['\"]?(" + q + ")['\"]?\\]"), TAG: new RegExp("^(" + q.replace("w", "w*") + ")"), ATTR: new RegExp("^" + X), PSEUDO: new RegExp("^" + U), POS: new RegExp(K, "i"), CHILD: new RegExp("^:(only|nth|first|last)-child(?:\\(" + $ + "*(even|odd|(([+-]|)(\\d*)n|)" + $ + "*(?:([+-]|)" + $ + "*(\\d+)|))" + $ + "*\\)|)", "i"), needsContext: new RegExp("^" + $ + "*[>+~]|" + K, "i") },
                at = function(t) { var e = P.createElement("div"); try { return t(e) } catch (t) { return !1 } finally { e = null } },
                rt = at(function(t) { return t.appendChild(P.createComment("")), !t.getElementsByTagName("*").length }),
                lt = at(function(t) { return t.innerHTML = "<a href='#'></a>", t.firstChild && void 0 !== t.firstChild.getAttribute && "#" === t.firstChild.getAttribute("href") }),
                ht = at(function(t) { t.innerHTML = "<select></select>"; var e = typeof t.lastChild.getAttribute("multiple"); return "boolean" !== e && "string" !== e }),
                ct = at(function(t) { return t.innerHTML = "<div class='hidden e'></div><div class='hidden'></div>", !(!t.getElementsByClassName || !t.getElementsByClassName("e").length) && (t.lastChild.className = "e", 2 === t.getElementsByClassName("e").length) }),
                ut = at(function(t) { t.id = S + 0, t.innerHTML = "<a name='" + S + "'></a><div name='" + S + "'></div>", W.insertBefore(t, W.firstChild); var e = P.getElementsByName && P.getElementsByName(S).length === 2 + P.getElementsByName(S + 0).length; return b = !P.getElementById(S), W.removeChild(t), e });
            try { A.call(W.childNodes, 0)[0].nodeType } catch (t) { A = function(t) { for (var e, i = []; e = this[t]; t++) i.push(e); return i } } i.matches = function(t, e) { return i(t, null, null, e) }, i.matchesSelector = function(t, e) { return i(e, null, null, [t]).length > 0 }, _ = i.getText = function(t) {
                var e, i = "",
                    n = 0,
                    s = t.nodeType;
                if (s) { if (1 === s || 9 === s || 11 === s) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) i += _(t) } else if (3 === s || 4 === s) return t.nodeValue } else
                    for (; e = t[n]; n++) i += _(e);
                return i
            }, w = i.isXML = function(t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, x = i.contains = W.contains ? function(t, e) {
                var i = 9 === t.nodeType ? t.documentElement : t,
                    n = e && e.parentNode;
                return t === n || !!(n && 1 === n.nodeType && i.contains && i.contains(n))
            } : W.compareDocumentPosition ? function(t, e) { return e && !!(16 & t.compareDocumentPosition(e)) } : function(t, e) {
                for (; e = e.parentNode;)
                    if (e === t) return !0;
                return !1
            }, i.attr = function(t, e) { var i, n = w(t); return n || (e = e.toLowerCase()), (i = y.attrHandle[e]) ? i(t) : n || ht ? t.getAttribute(e) : (i = t.getAttributeNode(e), i ? "boolean" == typeof t[e] ? t[e] ? e : null : i.specified ? i.value : null : null) }, y = i.selectors = {
                cacheLength: 50,
                createPseudo: N,
                match: ot,
                attrHandle: lt ? {} : { href: function(t) { return t.getAttribute("href", 2) }, type: function(t) { return t.getAttribute("type") } },
                find: { ID: b ? function(t, e, i) { if (void 0 !== e.getElementById && !i) { var n = e.getElementById(t); return n && n.parentNode ? [n] : [] } } : function(t, e, i) { if (void 0 !== e.getElementById && !i) { var n = e.getElementById(t); return n ? n.id === t || void 0 !== n.getAttributeNode && n.getAttributeNode("id").value === t ? [n] : void 0 : [] } }, TAG: rt ? function(t, e) { if (void 0 !== e.getElementsByTagName) return e.getElementsByTagName(t) } : function(t, e) { var i = e.getElementsByTagName(t); if ("*" === t) { for (var n, s = [], o = 0; n = i[o]; o++) 1 === n.nodeType && s.push(n); return s } return i }, NAME: ut && function(t, e) { if (void 0 !== e.getElementsByName) return e.getElementsByName(name) }, CLASS: ct && function(t, e, i) { if (void 0 !== e.getElementsByClassName && !i) return e.getElementsByClassName(t) } },
                relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                preFilter: { ATTR: function(t) { return t[1] = t[1].replace(st, ""), t[3] = (t[4] || t[5] || "").replace(st, ""), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function(t) { return t[1] = t[1].toLowerCase(), "nth" === t[1] ? (t[2] || i.error(t[0]), t[3] = +(t[3] ? t[4] + (t[5] || 1) : 2 * ("even" === t[2] || "odd" === t[2])), t[4] = +(t[6] + t[7] || "odd" === t[2])) : t[2] && i.error(t[0]), t }, PSEUDO: function(t) { var e, i; return ot.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[3] : (e = t[4]) && (J.test(e) && (i = r(e, !0)) && (i = e.indexOf(")", e.length - i) - e.length) && (e = e.slice(0, i), t[0] = t[0].slice(0, i)), t[2] = e), t.slice(0, 3)) } },
                filter: {
                    ID: b ? function(t) {
                        return t = t.replace(st, ""),
                            function(e) { return e.getAttribute("id") === t }
                    } : function(t) {
                        return t = t.replace(st, ""),
                            function(e) { var i = void 0 !== e.getAttributeNode && e.getAttributeNode("id"); return i && i.value === t }
                    },
                    TAG: function(t) { return "*" === t ? function() { return !0 } : (t = t.replace(st, "").toLowerCase(), function(e) { return e.nodeName && e.nodeName.toLowerCase() === t }) },
                    CLASS: function(t) { var e = j[S][t + " "]; return e || (e = new RegExp("(^|" + $ + ")" + t + "(" + $ + "|$)")) && j(t, function(t) { return e.test(t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                    ATTR: function(t, e, n) { return function(s, o) { var a = i.attr(s, t); return null == a ? "!=" === e : !e || (a += "", "=" === e ? a === n : "!=" === e ? a !== n : "^=" === e ? n && 0 === a.indexOf(n) : "*=" === e ? n && a.indexOf(n) > -1 : "$=" === e ? n && a.substr(a.length - n.length) === n : "~=" === e ? (" " + a + " ").indexOf(n) > -1 : "|=" === e && (a === n || a.substr(0, n.length + 1) === n + "-")) } },
                    CHILD: function(t, e, i, n) {
                        return "nth" === t ? function(t) {
                            var e, s, o = t.parentNode;
                            if (1 === i && 0 === n) return !0;
                            if (o)
                                for (s = 0, e = o.firstChild; e && (1 !== e.nodeType || (s++, t !== e)); e = e.nextSibling);
                            return (s -= n) === i || s % i == 0 && s / i >= 0
                        } : function(e) {
                            var i = e;
                            switch (t) {
                                case "only":
                                case "first":
                                    for (; i = i.previousSibling;)
                                        if (1 === i.nodeType) return !1;
                                    if ("first" === t) return !0;
                                    i = e;
                                case "last":
                                    for (; i = i.nextSibling;)
                                        if (1 === i.nodeType) return !1;
                                    return !0
                            }
                        }
                    },
                    PSEUDO: function(t, e) { var n, s = y.pseudos[t] || y.setFilters[t.toLowerCase()] || i.error("unsupported pseudo: " + t); return s[S] ? s(e) : s.length > 1 ? (n = [t, t, "", e], y.setFilters.hasOwnProperty(t.toLowerCase()) ? N(function(t, i) { for (var n, o = s(t, e), a = o.length; a--;) n = L.call(t, o[a]), t[n] = !(i[n] = o[a]) }) : function(t) { return s(t, 0, n) }) : s }
                },
                pseudos: {
                    not: N(function(t) {
                        var e = [],
                            i = [],
                            n = C(t.replace(V, "$1"));
                        return n[S] ? N(function(t, e, i, s) { for (var o, a = n(t, null, s, []), r = t.length; r--;)(o = a[r]) && (t[r] = !(e[r] = o)) }) : function(t, s, o) { return e[0] = t, n(e, null, o, i), !i.pop() }
                    }),
                    has: N(function(t) { return function(e) { return i(t, e).length > 0 } }),
                    contains: N(function(t) { return function(e) { return (e.textContent || e.innerText || _(e)).indexOf(t) > -1 } }),
                    enabled: function(t) { return !1 === t.disabled },
                    disabled: function(t) { return !0 === t.disabled },
                    checked: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                    selected: function(t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                    parent: function(t) { return !y.pseudos.empty(t) },
                    empty: function(t) {
                        var e;
                        for (t = t.firstChild; t;) {
                            if (t.nodeName > "@" || 3 === (e = t.nodeType) || 4 === e) return !1;
                            t = t.nextSibling
                        }
                        return !0
                    },
                    header: function(t) { return it.test(t.nodeName) },
                    text: function(t) { var e, i; return "input" === t.nodeName.toLowerCase() && "text" === (e = t.type) && (null == (i = t.getAttribute("type")) || i.toLowerCase() === e) },
                    radio: n("radio"),
                    checkbox: n("checkbox"),
                    file: n("file"),
                    password: n("password"),
                    image: n("image"),
                    submit: s("submit"),
                    reset: s("reset"),
                    button: function(t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                    input: function(t) { return nt.test(t.nodeName) },
                    focus: function(t) { var e = t.ownerDocument; return t === e.activeElement && (!e.hasFocus || e.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                    active: function(t) { return t === t.ownerDocument.activeElement },
                    first: o(function() { return [0] }),
                    last: o(function(t, e) { return [e - 1] }),
                    eq: o(function(t, e, i) { return [i < 0 ? i + e : i] }),
                    even: o(function(t, e) { for (var i = 0; i < e; i += 2) t.push(i); return t }),
                    odd: o(function(t, e) { for (var i = 1; i < e; i += 2) t.push(i); return t }),
                    lt: o(function(t, e, i) { for (var n = i < 0 ? i + e : i; --n >= 0;) t.push(n); return t }),
                    gt: o(function(t, e, i) { for (var n = i < 0 ? i + e : i; ++n < e;) t.push(n); return t })
                }
            }, k = W.compareDocumentPosition ? function(t, e) { return t === e ? (T = !0, 0) : (t.compareDocumentPosition && e.compareDocumentPosition ? 4 & t.compareDocumentPosition(e) : t.compareDocumentPosition) ? -1 : 1 } : function(t, e) {
                if (t === e) return T = !0, 0;
                if (t.sourceIndex && e.sourceIndex) return t.sourceIndex - e.sourceIndex;
                var i, n, s = [],
                    o = [],
                    r = t.parentNode,
                    l = e.parentNode,
                    h = r;
                if (r === l) return a(t, e);
                if (!r) return -1;
                if (!l) return 1;
                for (; h;) s.unshift(h), h = h.parentNode;
                for (h = l; h;) o.unshift(h), h = h.parentNode;
                i = s.length, n = o.length;
                for (var c = 0; c < i && c < n; c++)
                    if (s[c] !== o[c]) return a(s[c], o[c]);
                return c === i ? a(t, o[c], -1) : a(s[c], e, 1)
            }, [0, 0].sort(k), D = !T, i.uniqueSort = function(t) {
                var e, i = [],
                    n = 1,
                    s = 0;
                if (T = D, t.sort(k), T) { for (; e = t[n]; n++) e === t[n - 1] && (s = i.push(n)); for (; s--;) t.splice(i[s], 1) }
                return t
            }, i.error = function(t) { throw new Error("Syntax error, unrecognized expression: " + t) }, C = i.compile = function(t, e) {
                var i, n = [],
                    s = [],
                    o = B[S][t + " "];
                if (!o) {
                    for (e || (e = r(t)), i = e.length; i--;) o = d(e[i]), o[S] ? n.push(o) : s.push(o);
                    o = B(t, p(s, n))
                }
                return o
            }, P.querySelectorAll && function() {
                var t, e = g,
                    n = /'|\\/g,
                    s = /\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,
                    o = [":focus"],
                    a = [":active"],
                    l = W.matchesSelector || W.mozMatchesSelector || W.webkitMatchesSelector || W.oMatchesSelector || W.msMatchesSelector;
                at(function(t) { t.innerHTML = "<select><option selected=''></option></select>", t.querySelectorAll("[selected]").length || o.push("\\[" + $ + "*(?:checked|disabled|ismap|multiple|readonly|selected|value)"), t.querySelectorAll(":checked").length || o.push(":checked") }), at(function(t) { t.innerHTML = "<p test=''></p>", t.querySelectorAll("[test^='']").length && o.push("[*^$]=" + $ + "*(?:\"\"|'')"), t.innerHTML = "<input type='hidden'/>", t.querySelectorAll(":enabled").length || o.push(":enabled", ":disabled") }), o = new RegExp(o.join("|")), g = function(t, i, s, a, l) {
                    if (!a && !l && !o.test(t)) {
                        var h, c, u = !0,
                            d = S,
                            p = i,
                            f = 9 === i.nodeType && t;
                        if (1 === i.nodeType && "object" !== i.nodeName.toLowerCase()) {
                            for (h = r(t), (u = i.getAttribute("id")) ? d = u.replace(n, "\\$&") : i.setAttribute("id", d), d = "[id='" + d + "'] ", c = h.length; c--;) h[c] = d + h[c].join("");
                            p = et.test(t) && i.parentNode || i, f = h.join(",")
                        }
                        if (f) try { return M.apply(s, A.call(p.querySelectorAll(f), 0)), s } catch (t) {} finally { u || i.removeAttribute("id") }
                    }
                    return e(t, i, s, a, l)
                }, l && (at(function(e) { t = l.call(e, "div"); try { l.call(e, "[test!='']:sizzle"), a.push("!=", U) } catch (t) {} }), a = new RegExp(a.join("|")), i.matchesSelector = function(e, n) {
                    if (n = n.replace(s, "='$1']"), !w(e) && !a.test(n) && !o.test(n)) try { var r = l.call(e, n); if (r || t || e.document && 11 !== e.document.nodeType) return r } catch (t) {}
                    return i(n, null, null, [e]).length > 0
                })
            }(), y.pseudos.nth = y.pseudos.eq, y.filters = m.prototype = y.pseudos, y.setFilters = new m, i.attr = G.attr, G.find = i, G.expr = i.selectors, G.expr[":"] = G.expr.pseudos, G.unique = i.uniqueSort, G.text = i.getText, G.isXMLDoc = i.isXML, G.contains = i.contains
        }(t);
    var Ht = /Until$/,
        Mt = /^(?:parents|prev(?:Until|All))/,
        At = /^.[^:#\[\.,]*$/,
        Lt = G.expr.match.needsContext,
        Nt = { children: !0, contents: !0, next: !0, prev: !0 };
    G.fn.extend({
        find: function(t) {
            var e, i, n, s, o, a, r = this;
            if ("string" != typeof t) return G(t).filter(function() {
                for (e = 0, i = r.length; e < i; e++)
                    if (G.contains(r[e], this)) return !0
            });
            for (a = this.pushStack("", "find", t), e = 0, i = this.length; e < i; e++)
                if (n = a.length, G.find(t, this[e], a), e > 0)
                    for (s = n; s < a.length; s++)
                        for (o = 0; o < n; o++)
                            if (a[o] === a[s]) { a.splice(s--, 1); break }
            return a
        },
        has: function(t) {
            var e, i = G(t, this),
                n = i.length;
            return this.filter(function() {
                for (e = 0; e < n; e++)
                    if (G.contains(this, i[e])) return !0
            })
        },
        not: function(t) { return this.pushStack(h(this, t, !1), "not", t) },
        filter: function(t) { return this.pushStack(h(this, t, !0), "filter", t) },
        is: function(t) { return !!t && ("string" == typeof t ? Lt.test(t) ? G(t, this.context).index(this[0]) >= 0 : G.filter(t, this).length > 0 : this.filter(t).length > 0) },
        closest: function(t, e) {
            for (var i, n = 0, s = this.length, o = [], a = Lt.test(t) || "string" != typeof t ? G(t, e || this.context) : 0; n < s; n++)
                for (i = this[n]; i && i.ownerDocument && i !== e && 11 !== i.nodeType;) { if (a ? a.index(i) > -1 : G.find.matchesSelector(i, t)) { o.push(i); break } i = i.parentNode }
            return o = o.length > 1 ? G.unique(o) : o, this.pushStack(o, "closest", t)
        },
        index: function(t) { return t ? "string" == typeof t ? G.inArray(this[0], G(t)) : G.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.prevAll().length : -1 },
        add: function(t, e) {
            var i = "string" == typeof t ? G(t, e) : G.makeArray(t && t.nodeType ? [t] : t),
                n = G.merge(this.get(), i);
            return this.pushStack(r(i[0]) || r(n[0]) ? n : G.unique(n))
        },
        addBack: function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
    }), G.fn.andSelf = G.fn.addBack, G.each({ parent: function(t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function(t) { return G.dir(t, "parentNode") }, parentsUntil: function(t, e, i) { return G.dir(t, "parentNode", i) }, next: function(t) { return l(t, "nextSibling") }, prev: function(t) { return l(t, "previousSibling") }, nextAll: function(t) { return G.dir(t, "nextSibling") }, prevAll: function(t) { return G.dir(t, "previousSibling") }, nextUntil: function(t, e, i) { return G.dir(t, "nextSibling", i) }, prevUntil: function(t, e, i) { return G.dir(t, "previousSibling", i) }, siblings: function(t) { return G.sibling((t.parentNode || {}).firstChild, t) }, children: function(t) { return G.sibling(t.firstChild) }, contents: function(t) { return G.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : G.merge([], t.childNodes) } }, function(t, e) { G.fn[t] = function(i, n) { var s = G.map(this, e, i); return Ht.test(t) || (n = i), n && "string" == typeof n && (s = G.filter(n, s)), s = this.length > 1 && !Nt[t] ? G.unique(s) : s, this.length > 1 && Mt.test(t) && (s = s.reverse()), this.pushStack(s, t, U.call(arguments).join(",")) } }), G.extend({ filter: function(t, e, i) { return i && (t = ":not(" + t + ")"), 1 === e.length ? G.find.matchesSelector(e[0], t) ? [e[0]] : [] : G.find.matches(t, e) }, dir: function(t, i, n) { for (var s = [], o = t[i]; o && 9 !== o.nodeType && (n === e || 1 !== o.nodeType || !G(o).is(n));) 1 === o.nodeType && s.push(o), o = o[i]; return s }, sibling: function(t, e) { for (var i = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && i.push(t); return i } });
    var Ft = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        jt = / jQuery\d+="(?:null|\d+)"/g,
        Rt = /^\s+/,
        Bt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        $t = /<([\w:]+)/,
        qt = /<tbody/i,
        Yt = /<|&#?\w+;/,
        Xt = /<(?:script|style|link)/i,
        Ut = /<(?:script|object|embed|option|style)/i,
        Kt = new RegExp("<(?:" + Ft + ")[\\s/>]", "i"),
        Vt = /^(?:checkbox|radio)$/,
        Zt = /checked\s*(?:[^=]|=\s*.checked.)/i,
        Qt = /\/(java|ecma)script/i,
        Gt = /^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,
        Jt = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], area: [1, "<map>", "</map>"], _default: [0, "", ""] },
        te = c(R),
        ee = te.appendChild(R.createElement("div"));
    Jt.optgroup = Jt.option, Jt.tbody = Jt.tfoot = Jt.colgroup = Jt.caption = Jt.thead, Jt.th = Jt.td, G.support.htmlSerialize || (Jt._default = [1, "X<div>", "</div>"]), G.fn.extend({
            text: function(t) { return G.access(this, function(t) { return t === e ? G.text(this) : this.empty().append((this[0] && this[0].ownerDocument || R).createTextNode(t)) }, null, t, arguments.length) },
            wrapAll: function(t) {
                if (G.isFunction(t)) return this.each(function(e) { G(this).wrapAll(t.call(this, e)) });
                if (this[0]) {
                    var e = G(t, this[0].ownerDocument).eq(0).clone(!0);
                    this[0].parentNode && e.insertBefore(this[0]), e.map(function() { for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild; return t }).append(this)
                }
                return this
            },
            wrapInner: function(t) {
                return G.isFunction(t) ? this.each(function(e) { G(this).wrapInner(t.call(this, e)) }) : this.each(function() {
                    var e = G(this),
                        i = e.contents();
                    i.length ? i.wrapAll(t) : e.append(t)
                })
            },
            wrap: function(t) { var e = G.isFunction(t); return this.each(function(i) { G(this).wrapAll(e ? t.call(this, i) : t) }) },
            unwrap: function() { return this.parent().each(function() { G.nodeName(this, "body") || G(this).replaceWith(this.childNodes) }).end() },
            append: function() { return this.domManip(arguments, !0, function(t) { 1 !== this.nodeType && 11 !== this.nodeType || this.appendChild(t) }) },
            prepend: function() { return this.domManip(arguments, !0, function(t) { 1 !== this.nodeType && 11 !== this.nodeType || this.insertBefore(t, this.firstChild) }) },
            before: function() { if (!r(this[0])) return this.domManip(arguments, !1, function(t) { this.parentNode.insertBefore(t, this) }); if (arguments.length) { var t = G.clean(arguments); return this.pushStack(G.merge(t, this), "before", this.selector) } },
            after: function() { if (!r(this[0])) return this.domManip(arguments, !1, function(t) { this.parentNode.insertBefore(t, this.nextSibling) }); if (arguments.length) { var t = G.clean(arguments); return this.pushStack(G.merge(this, t), "after", this.selector) } },
            remove: function(t, e) { for (var i, n = 0; null != (i = this[n]); n++) t && !G.filter(t, [i]).length || (e || 1 !== i.nodeType || (G.cleanData(i.getElementsByTagName("*")), G.cleanData([i])), i.parentNode && i.parentNode.removeChild(i)); return this },
            empty: function() {
                for (var t, e = 0; null != (t = this[e]); e++)
                    for (1 === t.nodeType && G.cleanData(t.getElementsByTagName("*")); t.firstChild;) t.removeChild(t.firstChild);
                return this
            },
            clone: function(t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function() { return G.clone(this, t, e) }) },
            html: function(t) {
                return G.access(this, function(t) {
                    var i = this[0] || {},
                        n = 0,
                        s = this.length;
                    if (t === e) return 1 === i.nodeType ? i.innerHTML.replace(jt, "") : e;
                    if ("string" == typeof t && !Xt.test(t) && (G.support.htmlSerialize || !Kt.test(t)) && (G.support.leadingWhitespace || !Rt.test(t)) && !Jt[($t.exec(t) || ["", ""])[1].toLowerCase()]) {
                        t = t.replace(Bt, "<$1></$2>");
                        try {
                            for (; n < s; n++) i = this[n] || {}, 1 === i.nodeType && (G.cleanData(i.getElementsByTagName("*")), i.innerHTML = t);
                            i = 0
                        } catch (t) {}
                    }
                    i && this.empty().append(t)
                }, null, t, arguments.length)
            },
            replaceWith: function(t) {
                return r(this[0]) ? this.length ? this.pushStack(G(G.isFunction(t) ? t() : t), "replaceWith", t) : this : G.isFunction(t) ? this.each(function(e) {
                    var i = G(this),
                        n = i.html();
                    i.replaceWith(t.call(this, e, n))
                }) : ("string" != typeof t && (t = G(t).detach()), this.each(function() {
                    var e = this.nextSibling,
                        i = this.parentNode;
                    G(this).remove(), e ? G(e).before(t) : G(i).append(t)
                }))
            },
            detach: function(t) { return this.remove(t, !0) },
            domManip: function(t, i, n) {
                t = [].concat.apply([], t);
                var s, o, a, r, l = 0,
                    h = t[0],
                    c = [],
                    d = this.length;
                if (!G.support.checkClone && d > 1 && "string" == typeof h && Zt.test(h)) return this.each(function() { G(this).domManip(t, i, n) });
                if (G.isFunction(h)) return this.each(function(s) {
                    var o = G(this);
                    t[0] = h.call(this, s, i ? o.html() : e), o.domManip(t, i, n)
                });
                if (this[0]) {
                    if (s = G.buildFragment(t, this, c), a = s.fragment, o = a.firstChild, 1 === a.childNodes.length && (a = o), o)
                        for (i = i && G.nodeName(o, "tr"), r = s.cacheable || d - 1; l < d; l++) n.call(i && G.nodeName(this[l], "table") ? u(this[l], "tbody") : this[l], l === r ? a : G.clone(a, !0, !0));
                    a = o = null, c.length && G.each(c, function(t, e) { e.src ? G.ajax ? G.ajax({ url: e.src, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 }) : G.error("no ajax") : G.globalEval((e.text || e.textContent || e.innerHTML || "").replace(Gt, "")), e.parentNode && e.parentNode.removeChild(e) })
                }
                return this
            }
        }), G.buildFragment = function(t, i, n) { var s, o, a, r = t[0]; return i = i || R, i = !i.nodeType && i[0] || i, i = i.ownerDocument || i, !(1 === t.length && "string" == typeof r && r.length < 512 && i === R && "<" === r.charAt(0)) || Ut.test(r) || !G.support.checkClone && Zt.test(r) || !G.support.html5Clone && Kt.test(r) || (o = !0, s = G.fragments[r], a = s !== e), s || (s = i.createDocumentFragment(), G.clean(t, i, s, n), o && (G.fragments[r] = a && s)), { fragment: s, cacheable: o } }, G.fragments = {}, G.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(t, e) {
            G.fn[t] = function(i) {
                var n, s = 0,
                    o = [],
                    a = G(i),
                    r = a.length,
                    l = 1 === this.length && this[0].parentNode;
                if ((null == l || l && 11 === l.nodeType && 1 === l.childNodes.length) && 1 === r) return a[e](this[0]), this;
                for (; s < r; s++) n = (s > 0 ? this.clone(!0) : this).get(), G(a[s])[e](n), o = o.concat(n);
                return this.pushStack(o, t, a.selector)
            }
        }), G.extend({
            clone: function(t, e, i) {
                var n, s, o, a;
                if (G.support.html5Clone || G.isXMLDoc(t) || !Kt.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML, ee.removeChild(a = ee.firstChild)), !(G.support.noCloneEvent && G.support.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || G.isXMLDoc(t)))
                    for (p(t, a), n = f(t), s = f(a), o = 0; n[o]; ++o) s[o] && p(n[o], s[o]);
                if (e && (d(t, a), i))
                    for (n = f(t), s = f(a), o = 0; n[o]; ++o) d(n[o], s[o]);
                return n = s = null, a
            },
            clean: function(t, e, i, n) {
                var s, o, a, r, l, h, u, d, p, f, m, v = e === R && te,
                    b = [];
                for (e && void 0 !== e.createDocumentFragment || (e = R), s = 0; null != (a = t[s]); s++)
                    if ("number" == typeof a && (a += ""), a) {
                        if ("string" == typeof a)
                            if (Yt.test(a)) {
                                for (v = v || c(e), u = e.createElement("div"), v.appendChild(u), a = a.replace(Bt, "<$1></$2>"), r = ($t.exec(a) || ["", ""])[1].toLowerCase(), l = Jt[r] || Jt._default, h = l[0], u.innerHTML = l[1] + a + l[2]; h--;) u = u.lastChild;
                                if (!G.support.tbody)
                                    for (d = qt.test(a), p = "table" !== r || d ? "<table>" !== l[1] || d ? [] : u.childNodes : u.firstChild && u.firstChild.childNodes, o = p.length - 1; o >= 0; --o) G.nodeName(p[o], "tbody") && !p[o].childNodes.length && p[o].parentNode.removeChild(p[o]);
                                !G.support.leadingWhitespace && Rt.test(a) && u.insertBefore(e.createTextNode(Rt.exec(a)[0]), u.firstChild), a = u.childNodes, u.parentNode.removeChild(u)
                            } else a = e.createTextNode(a);
                        a.nodeType ? b.push(a) : G.merge(b, a)
                    }
                if (u && (a = u = v = null), !G.support.appendChecked)
                    for (s = 0; null != (a = b[s]); s++) G.nodeName(a, "input") ? g(a) : void 0 !== a.getElementsByTagName && G.grep(a.getElementsByTagName("input"), g);
                if (i)
                    for (f = function(t) { if (!t.type || Qt.test(t.type)) return n ? n.push(t.parentNode ? t.parentNode.removeChild(t) : t) : i.appendChild(t) }, s = 0; null != (a = b[s]); s++) G.nodeName(a, "script") && f(a) || (i.appendChild(a), void 0 !== a.getElementsByTagName && (m = G.grep(G.merge([], a.getElementsByTagName("script")), f), b.splice.apply(b, [s + 1, 0].concat(m)), s += m.length));
                return b
            },
            cleanData: function(t, e) {
                for (var i, n, s, o, a = 0, r = G.expando, l = G.cache, h = G.support.deleteExpando, c = G.event.special; null != (s = t[a]); a++)
                    if ((e || G.acceptData(s)) && (n = s[r], i = n && l[n])) {
                        if (i.events)
                            for (o in i.events) c[o] ? G.event.remove(s, o) : G.removeEvent(s, o, i.handle);
                        l[n] && (delete l[n], h ? delete s[r] : s.removeAttribute ? s.removeAttribute(r) : s[r] = null, G.deletedIds.push(n))
                    }
            }
        }),
        function() {
            var t, e;
            G.uaMatch = function(t) { t = t.toLowerCase(); var e = /(chrome)[ \/]([\w.]+)/.exec(t) || /(webkit)[ \/]([\w.]+)/.exec(t) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(t) || /(msie) ([\w.]+)/.exec(t) || t.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(t) || []; return { browser: e[1] || "", version: e[2] || "0" } }, t = G.uaMatch($.userAgent), e = {}, t.browser && (e[t.browser] = !0, e.version = t.version), e.chrome ? e.webkit = !0 : e.webkit && (e.safari = !0), G.browser = e, G.sub = function() {
                function t(e, i) { return new t.fn.init(e, i) } G.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function(i, n) { return n && n instanceof G && !(n instanceof t) && (n = t(n)), G.fn.init.call(this, i, n, e) }, t.fn.init.prototype = t.fn;
                var e = t(R);
                return t
            }
        }();
    var ie, ne, se, oe = /alpha\([^)]*\)/i,
        ae = /opacity=([^)]*)/,
        re = /^(top|right|bottom|left)$/,
        le = /^(none|table(?!-c[ea]).+)/,
        he = /^margin/,
        ce = new RegExp("^(" + J + ")(.*)$", "i"),
        ue = new RegExp("^(" + J + ")(?!px)[a-z%]+$", "i"),
        de = new RegExp("^([-+])=(" + J + ")", "i"),
        pe = { BODY: "block" },
        fe = { position: "absolute", visibility: "hidden", display: "block" },
        ge = { letterSpacing: 0, fontWeight: 400 },
        me = ["Top", "Right", "Bottom", "Left"],
        ve = ["Webkit", "O", "Moz", "ms"],
        be = G.fn.toggle;
    G.fn.extend({
        css: function(t, i) { return G.access(this, function(t, i, n) { return n !== e ? G.style(t, i, n) : G.css(t, i) }, t, i, arguments.length > 1) },
        show: function() { return b(this, !0) },
        hide: function() { return b(this) },
        toggle: function(t, e) {
            var i = "boolean" == typeof t;
            return G.isFunction(t) && G.isFunction(e) ? be.apply(this, arguments) : this.each(function() {
                (i ? t : v(this)) ? G(this).show(): G(this).hide()
            })
        }
    }), G.extend({
        cssHooks: { opacity: { get: function(t, e) { if (e) { var i = ie(t, "opacity"); return "" === i ? "1" : i } } } },
        cssNumber: { fillOpacity: !0, fontWeight: !0, lineHeight: !0, opacity: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { float: G.support.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(t, i, n, s) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var o, a, r, l = G.camelCase(i),
                    h = t.style;
                if (i = G.cssProps[l] || (G.cssProps[l] = m(h, l)), r = G.cssHooks[i] || G.cssHooks[l], n === e) return r && "get" in r && (o = r.get(t, !1, s)) !== e ? o : h[i];
                if (!(a = typeof n, "string" === a && (o = de.exec(n)) && (n = (o[1] + 1) * o[2] + parseFloat(G.css(t, i)), a = "number"), null == n || "number" === a && isNaN(n) || ("number" !== a || G.cssNumber[l] || (n += "px"), r && "set" in r && (n = r.set(t, n, s)) === e))) try { h[i] = n } catch (t) {}
            }
        },
        css: function(t, i, n, s) { var o, a, r, l = G.camelCase(i); return i = G.cssProps[l] || (G.cssProps[l] = m(t.style, l)), r = G.cssHooks[i] || G.cssHooks[l], r && "get" in r && (o = r.get(t, !0, s)), o === e && (o = ie(t, i)), "normal" === o && i in ge && (o = ge[i]), n || s !== e ? (a = parseFloat(o), n || G.isNumeric(a) ? a || 0 : o) : o },
        swap: function(t, e, i) {
            var n, s, o = {};
            for (s in e) o[s] = t.style[s], t.style[s] = e[s];
            n = i.call(t);
            for (s in e) t.style[s] = o[s];
            return n
        }
    }), t.getComputedStyle ? ie = function(e, i) {
        var n, s, o, a, r = t.getComputedStyle(e, null),
            l = e.style;
        return r && (n = r.getPropertyValue(i) || r[i], "" !== n || G.contains(e.ownerDocument, e) || (n = G.style(e, i)), ue.test(n) && he.test(i) && (s = l.width, o = l.minWidth, a = l.maxWidth, l.minWidth = l.maxWidth = l.width = n, n = r.width, l.width = s, l.minWidth = o, l.maxWidth = a)), n
    } : R.documentElement.currentStyle && (ie = function(t, e) {
        var i, n, s = t.currentStyle && t.currentStyle[e],
            o = t.style;
        return null == s && o && o[e] && (s = o[e]), ue.test(s) && !re.test(e) && (i = o.left, n = t.runtimeStyle && t.runtimeStyle.left, n && (t.runtimeStyle.left = t.currentStyle.left), o.left = "fontSize" === e ? "1em" : s, s = o.pixelLeft + "px", o.left = i, n && (t.runtimeStyle.left = n)), "" === s ? "auto" : s
    }), G.each(["height", "width"], function(t, e) { G.cssHooks[e] = { get: function(t, i, n) { if (i) return 0 === t.offsetWidth && le.test(ie(t, "display")) ? G.swap(t, fe, function() { return w(t, e, n) }) : w(t, e, n) }, set: function(t, i, n) { return y(t, i, n ? _(t, e, n, G.support.boxSizing && "border-box" === G.css(t, "boxSizing")) : 0) } } }), G.support.opacity || (G.cssHooks.opacity = {
        get: function(t, e) { return ae.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : "" },
        set: function(t, e) {
            var i = t.style,
                n = t.currentStyle,
                s = G.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = n && n.filter || i.filter || "";
            i.zoom = 1, e >= 1 && "" === G.trim(o.replace(oe, "")) && i.removeAttribute && (i.removeAttribute("filter"), n && !n.filter) || (i.filter = oe.test(o) ? o.replace(oe, s) : o + " " + s)
        }
    }), G(function() { G.support.reliableMarginRight || (G.cssHooks.marginRight = { get: function(t, e) { return G.swap(t, { display: "inline-block" }, function() { if (e) return ie(t, "marginRight") }) } }), !G.support.pixelPosition && G.fn.position && G.each(["top", "left"], function(t, e) { G.cssHooks[e] = { get: function(t, i) { if (i) { var n = ie(t, e); return ue.test(n) ? G(t).position()[e] + "px" : n } } } }) }), G.expr && G.expr.filters && (G.expr.filters.hidden = function(t) { return 0 === t.offsetWidth && 0 === t.offsetHeight || !G.support.reliableHiddenOffsets && "none" === (t.style && t.style.display || ie(t, "display")) }, G.expr.filters.visible = function(t) { return !G.expr.filters.hidden(t) }), G.each({ margin: "", padding: "", border: "Width" }, function(t, e) {
        G.cssHooks[t + e] = {
            expand: function(i) {
                var n, s = "string" == typeof i ? i.split(" ") : [i],
                    o = {};
                for (n = 0; n < 4; n++) o[t + me[n] + e] = s[n] || s[n - 2] || s[0];
                return o
            }
        }, he.test(t) || (G.cssHooks[t + e].set = y)
    });
    var ye = /%20/g,
        _e = /\[\]$/,
        we = /\r?\n/g,
        xe = /^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,
        Ce = /^(?:select|textarea)/i;
    G.fn.extend({ serialize: function() { return G.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { return this.elements ? G.makeArray(this.elements) : this }).filter(function() { return this.name && !this.disabled && (this.checked || Ce.test(this.nodeName) || xe.test(this.type)) }).map(function(t, e) { var i = G(this).val(); return null == i ? null : G.isArray(i) ? G.map(i, function(t, i) { return { name: e.name, value: t.replace(we, "\r\n") } }) : { name: e.name, value: i.replace(we, "\r\n") } }).get() } }), G.param = function(t, i) {
        var n, s = [],
            o = function(t, e) { e = G.isFunction(e) ? e() : null == e ? "" : e, s[s.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e) };
        if (i === e && (i = G.ajaxSettings && G.ajaxSettings.traditional), G.isArray(t) || t.jquery && !G.isPlainObject(t)) G.each(t, function() { o(this.name, this.value) });
        else
            for (n in t) C(n, t[n], i, o);
        return s.join("&").replace(ye, "+")
    };
    var ke, Te, ze = /#.*$/,
        De = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Se = /^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,
        Ie = /^(?:GET|HEAD)$/,
        Pe = /^\/\//,
        We = /\?/,
        Oe = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
        Ee = /([?&])_=[^&]*/,
        He = /^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
        Me = G.fn.load,
        Ae = {},
        Le = {},
        Ne = ["*/"] + ["*"];
    try { Te = B.href } catch (t) { Te = R.createElement("a"), Te.href = "", Te = Te.href } ke = He.exec(Te.toLowerCase()) || [], G.fn.load = function(t, i, n) {
        if ("string" != typeof t && Me) return Me.apply(this, arguments);
        if (!this.length) return this;
        var s, o, a, r = this,
            l = t.indexOf(" ");
        return l >= 0 && (s = t.slice(l, t.length), t = t.slice(0, l)), G.isFunction(i) ? (n = i, i = e) : i && "object" == typeof i && (o = "POST"), G.ajax({ url: t, type: o, dataType: "html", data: i, complete: function(t, e) { n && r.each(n, a || [t.responseText, e, t]) } }).done(function(t) { a = arguments, r.html(s ? G("<div>").append(t.replace(Oe, "")).find(s) : t) }), this
    }, G.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "), function(t, e) { G.fn[e] = function(t) { return this.on(e, t) } }), G.each(["get", "post"], function(t, i) { G[i] = function(t, n, s, o) { return G.isFunction(n) && (o = o || s, s = n, n = e), G.ajax({ type: i, url: t, data: n, success: s, dataType: o }) } }), G.extend({
        getScript: function(t, i) { return G.get(t, e, i, "script") },
        getJSON: function(t, e, i) { return G.get(t, e, i, "json") },
        ajaxSetup: function(t, e) { return e ? z(t, G.ajaxSettings) : (e = t, t = G.ajaxSettings), z(t, e), t },
        ajaxSettings: { url: Te, isLocal: Se.test(ke[1]), global: !0, type: "GET", contentType: "application/x-www-form-urlencoded; charset=UTF-8", processData: !0, async: !0, accepts: { xml: "application/xml, text/xml", html: "text/html", text: "text/plain", json: "application/json, text/javascript", "*": Ne }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText" }, converters: { "* text": t.String, "text html": !0, "text json": G.parseJSON, "text xml": G.parseXML }, flatOptions: { context: !0, url: !0 } },
        ajaxPrefilter: k(Ae),
        ajaxTransport: k(Le),
        ajax: function(t, i) {
            function n(t, i, n, a) {
                var h, u, b, y, w, C = i;
                2 !== _ && (_ = 2, l && clearTimeout(l), r = e, o = a || "", x.readyState = t > 0 ? 4 : 0, n && (y = D(d, x, n)), t >= 200 && t < 300 || 304 === t ? (d.ifModified && (w = x.getResponseHeader("Last-Modified"), w && (G.lastModified[s] = w), (w = x.getResponseHeader("Etag")) && (G.etag[s] = w)), 304 === t ? (C = "notmodified", h = !0) : (h = S(d, y), C = h.state, u = h.data, b = h.error, h = !b)) : (b = C, C && !t || (C = "error", t < 0 && (t = 0))), x.status = t, x.statusText = (i || C) + "", h ? g.resolveWith(p, [u, C, x]) : g.rejectWith(p, [x, C, b]), x.statusCode(v), v = e, c && f.trigger("ajax" + (h ? "Success" : "Error"), [x, d, h ? u : b]), m.fireWith(p, [x, C]), c && (f.trigger("ajaxComplete", [x, d]), --G.active || G.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (i = t, t = e), i = i || {};
            var s, o, a, r, l, h, c, u, d = G.ajaxSetup({}, i),
                p = d.context || d,
                f = p !== d && (p.nodeType || p instanceof G) ? G(p) : G.event,
                g = G.Deferred(),
                m = G.Callbacks("once memory"),
                v = d.statusCode || {},
                b = {},
                y = {},
                _ = 0,
                w = "canceled",
                x = {
                    readyState: 0,
                    setRequestHeader: function(t, e) {
                        if (!_) {
                            var i = t.toLowerCase();
                            t = y[i] = y[i] || t, b[t] = e
                        }
                        return this
                    },
                    getAllResponseHeaders: function() { return 2 === _ ? o : null },
                    getResponseHeader: function(t) {
                        var i;
                        if (2 === _) {
                            if (!a)
                                for (a = {}; i = De.exec(o);) a[i[1].toLowerCase()] = i[2];
                            i = a[t.toLowerCase()]
                        }
                        return i === e ? null : i
                    },
                    overrideMimeType: function(t) { return _ || (d.mimeType = t), this },
                    abort: function(t) { return t = t || w, r && r.abort(t), n(0, t), this }
                };
            if (g.promise(x), x.success = x.done, x.error = x.fail, x.complete = m.add, x.statusCode = function(t) {
                    if (t) {
                        var e;
                        if (_ < 2)
                            for (e in t) v[e] = [v[e], t[e]];
                        else e = t[x.status], x.always(e)
                    }
                    return this
                }, d.url = ((t || d.url) + "").replace(ze, "").replace(Pe, ke[1] + "//"), d.dataTypes = G.trim(d.dataType || "*").toLowerCase().split(et), null == d.crossDomain && (h = He.exec(d.url.toLowerCase()), d.crossDomain = !(!h || h[1] === ke[1] && h[2] === ke[2] && (h[3] || ("http:" === h[1] ? 80 : 443)) == (ke[3] || ("http:" === ke[1] ? 80 : 443)))), d.data && d.processData && "string" != typeof d.data && (d.data = G.param(d.data, d.traditional)), T(Ae, d, i, x), 2 === _) return x;
            if (c = d.global, d.type = d.type.toUpperCase(), d.hasContent = !Ie.test(d.type), c && 0 == G.active++ && G.event.trigger("ajaxStart"), !d.hasContent && (d.data && (d.url += (We.test(d.url) ? "&" : "?") + d.data, delete d.data), s = d.url, !1 === d.cache)) {
                var C = G.now(),
                    k = d.url.replace(Ee, "$1_=" + C);
                d.url = k + (k === d.url ? (We.test(d.url) ? "&" : "?") + "_=" + C : "")
            }(d.data && d.hasContent && !1 !== d.contentType || i.contentType) && x.setRequestHeader("Content-Type", d.contentType), d.ifModified && (s = s || d.url, G.lastModified[s] && x.setRequestHeader("If-Modified-Since", G.lastModified[s]), G.etag[s] && x.setRequestHeader("If-None-Match", G.etag[s])), x.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Ne + "; q=0.01" : "") : d.accepts["*"]);
            for (u in d.headers) x.setRequestHeader(u, d.headers[u]);
            if (d.beforeSend && (!1 === d.beforeSend.call(p, x, d) || 2 === _)) return x.abort();
            w = "abort";
            for (u in { success: 1, error: 1, complete: 1 }) x[u](d[u]);
            if (r = T(Le, d, i, x)) {
                x.readyState = 1, c && f.trigger("ajaxSend", [x, d]), d.async && d.timeout > 0 && (l = setTimeout(function() { x.abort("timeout") }, d.timeout));
                try { _ = 1, r.send(b, n) } catch (t) {
                    if (!(_ < 2)) throw t;
                    n(-1, t)
                }
            } else n(-1, "No Transport");
            return x
        },
        active: 0,
        lastModified: {},
        etag: {}
    });
    var Fe = [],
        je = /\?/,
        Re = /(=)\?(?=&|$)|\?\?/,
        Be = G.now();
    G.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var t = Fe.pop() || G.expando + "_" + Be++; return this[t] = !0, t } }), G.ajaxPrefilter("json jsonp", function(i, n, s) {
        var o, a, r, l = i.data,
            h = i.url,
            c = !1 !== i.jsonp,
            u = c && Re.test(h),
            d = c && !u && "string" == typeof l && !(i.contentType || "").indexOf("application/x-www-form-urlencoded") && Re.test(l);
        if ("jsonp" === i.dataTypes[0] || u || d) return o = i.jsonpCallback = G.isFunction(i.jsonpCallback) ? i.jsonpCallback() : i.jsonpCallback, a = t[o], u ? i.url = h.replace(Re, "$1" + o) : d ? i.data = l.replace(Re, "$1" + o) : c && (i.url += (je.test(h) ? "&" : "?") + i.jsonp + "=" + o), i.converters["script json"] = function() { return r || G.error(o + " was not called"), r[0] }, i.dataTypes[0] = "json", t[o] = function() { r = arguments }, s.always(function() { t[o] = a, i[o] && (i.jsonpCallback = n.jsonpCallback, Fe.push(o)), r && G.isFunction(a) && a(r[0]), r = a = e }), "script"
    }), G.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /javascript|ecmascript/ }, converters: { "text script": function(t) { return G.globalEval(t), t } } }), G.ajaxPrefilter("script", function(t) { t.cache === e && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1) }), G.ajaxTransport("script", function(t) {
        if (t.crossDomain) {
            var i, n = R.head || R.getElementsByTagName("head")[0] || R.documentElement;
            return {
                send: function(s, o) {
                    i = R.createElement("script"), i.async = "async", t.scriptCharset && (i.charset = t.scriptCharset), i.src = t.url, i.onload = i.onreadystatechange = function(t, s) {
                        (s || !i.readyState || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = null, n && i.parentNode && n.removeChild(i), i = e, s || o(200, "success"))
                    }, n.insertBefore(i, n.firstChild)
                },
                abort: function() { i && i.onload(0, 1) }
            }
        }
    });
    var $e, qe = !!t.ActiveXObject && function() { for (var t in $e) $e[t](0, 1) },
        Ye = 0;
    G.ajaxSettings.xhr = t.ActiveXObject ? function() { return !this.isLocal && I() || P() } : I,
        function(t) { G.extend(G.support, { ajax: !!t, cors: !!t && "withCredentials" in t }) }(G.ajaxSettings.xhr()), G.support.ajax && G.ajaxTransport(function(i) {
            if (!i.crossDomain || G.support.cors) {
                var n;
                return {
                    send: function(s, o) {
                        var a, r, l = i.xhr();
                        if (i.username ? l.open(i.type, i.url, i.async, i.username, i.password) : l.open(i.type, i.url, i.async), i.xhrFields)
                            for (r in i.xhrFields) l[r] = i.xhrFields[r];
                        i.mimeType && l.overrideMimeType && l.overrideMimeType(i.mimeType), i.crossDomain || s["X-Requested-With"] || (s["X-Requested-With"] = "XMLHttpRequest");
                        try { for (r in s) l.setRequestHeader(r, s[r]) } catch (t) {} l.send(i.hasContent && i.data || null), n = function(t, s) {
                            var r, h, c, u, d;
                            try {
                                if (n && (s || 4 === l.readyState))
                                    if (n = e, a && (l.onreadystatechange = G.noop, qe && delete $e[a]), s) 4 !== l.readyState && l.abort();
                                    else { r = l.status, c = l.getAllResponseHeaders(), u = {}, d = l.responseXML, d && d.documentElement && (u.xml = d); try { u.text = l.responseText } catch (t) {} try { h = l.statusText } catch (t) { h = "" } r || !i.isLocal || i.crossDomain ? 1223 === r && (r = 204) : r = u.text ? 200 : 404 }
                            } catch (t) { s || o(-1, t) } u && o(r, h, u, c)
                        }, i.async ? 4 === l.readyState ? setTimeout(n, 0) : (a = ++Ye, qe && ($e || ($e = {}, G(t).unload(qe)), $e[a] = n), l.onreadystatechange = n) : n()
                    },
                    abort: function() { n && n(0, 1) }
                }
            }
        });
    var Xe, Ue, Ke = /^(?:toggle|show|hide)$/,
        Ve = new RegExp("^(?:([-+])=|)(" + J + ")([a-z%]*)$", "i"),
        Ze = /queueHooks$/,
        Qe = [M],
        Ge = {
            "*": [function(t, e) {
                var i, n, s = this.createTween(t, e),
                    o = Ve.exec(e),
                    a = s.cur(),
                    r = +a || 0,
                    l = 1,
                    h = 20;
                if (o) {
                    if (i = +o[2], "px" !== (n = o[3] || (G.cssNumber[t] ? "" : "px")) && r) {
                        r = G.css(s.elem, t, !0) || i || 1;
                        do { l = l || ".5", r /= l, G.style(s.elem, t, r + n) } while (l !== (l = s.cur() / a) && 1 !== l && --h)
                    }
                    s.unit = n, s.start = r, s.end = o[1] ? r + (o[1] + 1) * i : i
                }
                return s
            }]
        };
    G.Animation = G.extend(E, { tweener: function(t, e) { G.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" "); for (var i, n = 0, s = t.length; n < s; n++) i = t[n], Ge[i] = Ge[i] || [], Ge[i].unshift(e) }, prefilter: function(t, e) { e ? Qe.unshift(t) : Qe.push(t) } }), G.Tween = A, A.prototype = { constructor: A, init: function(t, e, i, n, s, o) { this.elem = t, this.prop = i, this.easing = s || "swing", this.options = e, this.start = this.now = this.cur(), this.end = n, this.unit = o || (G.cssNumber[i] ? "" : "px") }, cur: function() { var t = A.propHooks[this.prop]; return t && t.get ? t.get(this) : A.propHooks._default.get(this) }, run: function(t) { var e, i = A.propHooks[this.prop]; return this.options.duration ? this.pos = e = G.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), i && i.set ? i.set(this) : A.propHooks._default.set(this), this } }, A.prototype.init.prototype = A.prototype, A.propHooks = { _default: { get: function(t) { var e; return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = G.css(t.elem, t.prop, !1, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop] }, set: function(t) { G.fx.step[t.prop] ? G.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[G.cssProps[t.prop]] || G.cssHooks[t.prop]) ? G.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now } } }, A.propHooks.scrollTop = A.propHooks.scrollLeft = { set: function(t) { t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now) } }, G.each(["toggle", "show", "hide"], function(t, e) {
        var i = G.fn[e];
        G.fn[e] = function(n, s, o) { return null == n || "boolean" == typeof n || !t && G.isFunction(n) && G.isFunction(s) ? i.apply(this, arguments) : this.animate(L(e, !0), n, s, o) }
    }), G.fn.extend({
        fadeTo: function(t, e, i, n) { return this.filter(v).css("opacity", 0).show().end().animate({ opacity: e }, t, i, n) },
        animate: function(t, e, i, n) {
            var s = G.isEmptyObject(t),
                o = G.speed(e, i, n),
                a = function() {
                    var e = E(this, G.extend({}, t), o);
                    s && e.stop(!0)
                };
            return s || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
        },
        stop: function(t, i, n) {
            var s = function(t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = i, i = t, t = e), i && !1 !== t && this.queue(t || "fx", []), this.each(function() {
                var e = !0,
                    i = null != t && t + "queueHooks",
                    o = G.timers,
                    a = G._data(this);
                if (i) a[i] && a[i].stop && s(a[i]);
                else
                    for (i in a) a[i] && a[i].stop && Ze.test(i) && s(a[i]);
                for (i = o.length; i--;) o[i].elem !== this || null != t && o[i].queue !== t || (o[i].anim.stop(n), e = !1, o.splice(i, 1));
                !e && n || G.dequeue(this, t)
            })
        }
    }), G.each({ slideDown: L("show"), slideUp: L("hide"), slideToggle: L("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(t, e) { G.fn[t] = function(t, i, n) { return this.animate(e, t, i, n) } }), G.speed = function(t, e, i) { var n = t && "object" == typeof t ? G.extend({}, t) : { complete: i || !i && e || G.isFunction(t) && t, duration: t, easing: i && e || e && !G.isFunction(e) && e }; return n.duration = G.fx.off ? 0 : "number" == typeof n.duration ? n.duration : n.duration in G.fx.speeds ? G.fx.speeds[n.duration] : G.fx.speeds._default, null != n.queue && !0 !== n.queue || (n.queue = "fx"), n.old = n.complete, n.complete = function() { G.isFunction(n.old) && n.old.call(this), n.queue && G.dequeue(this, n.queue) }, n }, G.easing = { linear: function(t) { return t }, swing: function(t) { return .5 - Math.cos(t * Math.PI) / 2 } }, G.timers = [], G.fx = A.prototype.init, G.fx.tick = function() {
        var t, i = G.timers,
            n = 0;
        for (Xe = G.now(); n < i.length; n++)(t = i[n])() || i[n] !== t || i.splice(n--, 1);
        i.length || G.fx.stop(), Xe = e
    }, G.fx.timer = function(t) { t() && G.timers.push(t) && !Ue && (Ue = setInterval(G.fx.tick, G.fx.interval)) }, G.fx.interval = 13, G.fx.stop = function() { clearInterval(Ue), Ue = null }, G.fx.speeds = { slow: 600, fast: 200, _default: 400 }, G.fx.step = {}, G.expr && G.expr.filters && (G.expr.filters.animated = function(t) { return G.grep(G.timers, function(e) { return t === e.elem }).length });
    var Je = /^(?:body|html)$/i;
    G.fn.offset = function(t) {
        if (arguments.length) return t === e ? this : this.each(function(e) { G.offset.setOffset(this, t, e) });
        var i, n, s, o, a, r, l, h = { top: 0, left: 0 },
            c = this[0],
            u = c && c.ownerDocument;
        if (u) return (n = u.body) === c ? G.offset.bodyOffset(c) : (i = u.documentElement, G.contains(i, c) ? (void 0 !== c.getBoundingClientRect && (h = c.getBoundingClientRect()), s = N(u), o = i.clientTop || n.clientTop || 0, a = i.clientLeft || n.clientLeft || 0, r = s.pageYOffset || i.scrollTop, l = s.pageXOffset || i.scrollLeft, { top: h.top + r - o, left: h.left + l - a }) : h)
    }, G.offset = {
        bodyOffset: function(t) {
            var e = t.offsetTop,
                i = t.offsetLeft;
            return G.support.doesNotIncludeMarginInBodyOffset && (e += parseFloat(G.css(t, "marginTop")) || 0, i += parseFloat(G.css(t, "marginLeft")) || 0), { top: e, left: i }
        },
        setOffset: function(t, e, i) {
            var n = G.css(t, "position");
            "static" === n && (t.style.position = "relative");
            var s, o, a = G(t),
                r = a.offset(),
                l = G.css(t, "top"),
                h = G.css(t, "left"),
                c = ("absolute" === n || "fixed" === n) && G.inArray("auto", [l, h]) > -1,
                u = {},
                d = {};
            c ? (d = a.position(), s = d.top, o = d.left) : (s = parseFloat(l) || 0, o = parseFloat(h) || 0), G.isFunction(e) && (e = e.call(t, i, r)), null != e.top && (u.top = e.top - r.top + s), null != e.left && (u.left = e.left - r.left + o), "using" in e ? e.using.call(t, u) : a.css(u)
        }
    }, G.fn.extend({
        position: function() {
            if (this[0]) {
                var t = this[0],
                    e = this.offsetParent(),
                    i = this.offset(),
                    n = Je.test(e[0].nodeName) ? { top: 0, left: 0 } : e.offset();
                return i.top -= parseFloat(G.css(t, "marginTop")) || 0, i.left -= parseFloat(G.css(t, "marginLeft")) || 0, n.top += parseFloat(G.css(e[0], "borderTopWidth")) || 0, n.left += parseFloat(G.css(e[0], "borderLeftWidth")) || 0, { top: i.top - n.top, left: i.left - n.left }
            }
        },
        offsetParent: function() { return this.map(function() { for (var t = this.offsetParent || R.body; t && !Je.test(t.nodeName) && "static" === G.css(t, "position");) t = t.offsetParent; return t || R.body }) }
    }), G.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t, i) {
        var n = /Y/.test(i);
        G.fn[t] = function(s) {
            return G.access(this, function(t, s, o) {
                var a = N(t);
                if (o === e) return a ? i in a ? a[i] : a.document.documentElement[s] : t[s];
                a ? a.scrollTo(n ? G(a).scrollLeft() : o, n ? o : G(a).scrollTop()) : t[s] = o
            }, t, s, arguments.length, null)
        }
    }), G.each({ Height: "height", Width: "width" }, function(t, i) {
        G.each({ padding: "inner" + t, content: i, "": "outer" + t }, function(n, s) {
            G.fn[s] = function(s, o) {
                var a = arguments.length && (n || "boolean" != typeof s),
                    r = n || (!0 === s || !0 === o ? "margin" : "border");
                return G.access(this, function(i, n, s) { var o; return G.isWindow(i) ? i.document.documentElement["client" + t] : 9 === i.nodeType ? (o = i.documentElement, Math.max(i.body["scroll" + t], o["scroll" + t], i.body["offset" + t], o["offset" + t], o["client" + t])) : s === e ? G.css(i, n, s, r) : G.style(i, n, s, r) }, i, a ? s : e, a, null)
            }
        })
    }), t.jQuery = t.$ = G, "function" == typeof define && define.amd && define.amd.jQuery && define("jquery", [], function() { return G })
}(window),
function(t) { "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery) }(function(t) {
    function e(t) {
        for (var e = t.css("visibility");
            "inherit" === e;) t = t.parent(), e = t.css("visibility");
        return "hidden" !== e
    }

    function i(t) {
        for (var e, i; t.length && t[0] !== document;) {
            if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
            t = t.parent()
        }
        return 0
    }

    function n() { this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = { closeText: "Done", prevText: "Prev", nextText: "Next", currentText: "Today", monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"], weekHeader: "Wk", dateFormat: "mm/dd/yy", firstDay: 0, isRTL: !1, showMonthAfterYear: !1, yearSuffix: "" }, this._defaults = { showOn: "focus", showAnim: "fadeIn", showOptions: {}, defaultDate: null, appendText: "", buttonText: "...", buttonImage: "", buttonImageOnly: !1, hideIfNoPrevNext: !1, navigationAsDateFormat: !1, gotoCurrent: !1, changeMonth: !1, changeYear: !1, yearRange: "c-10:c+10", showOtherMonths: !1, selectOtherMonths: !1, showWeek: !1, calculateWeek: this.iso8601Week, shortYearCutoff: "+10", minDate: null, maxDate: null, duration: "fast", beforeShowDay: null, beforeShow: null, onSelect: null, onChangeMonthYear: null, onClose: null, numberOfMonths: 1, showCurrentAtPos: 0, stepMonths: 1, stepBigMonths: 12, altField: "", altFormat: "", constrainInput: !0, showButtonPanel: !1, autoSize: !1, disabled: !1 }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = s(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) }

    function s(e) { var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a"; return e.on("mouseout", i, function() { t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover") }).on("mouseover", i, o) }

    function o() {
        t.datepicker._isDisabledDatepicker(g.inline ? g.dpDiv.parent()[0] : g.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function a(e, i) { t.extend(e, i); for (var n in i) null == i[n] && (e[n] = i[n]); return e }

    function r(t) {
        return function() {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }
    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var l = 0,
        h = Array.prototype.slice;
    t.cleanData = function(e) {
            return function(i) {
                var n, s, o;
                for (o = 0; null != (s = i[o]); o++) try {
                    (n = t._data(s, "events")) && n.remove && t(s).triggerHandler("remove")
                } catch (t) {} e(i)
            }
        }(t.cleanData), t.widget = function(e, i, n) {
            var s, o, a, r = {},
                l = e.split(".")[0];
            e = e.split(".")[1];
            var h = l + "-" + e;
            return n || (n = i, i = t.Widget), t.isArray(n) && (n = t.extend.apply(null, [{}].concat(n))), t.expr[":"][h.toLowerCase()] = function(e) { return !!t.data(e, h) }, t[l] = t[l] || {}, s = t[l][e], o = t[l][e] = function(t, e) { return this._createWidget ? void(arguments.length && this._createWidget(t, e)) : new o(t, e) }, t.extend(o, s, { version: n.version, _proto: t.extend({}, n), _childConstructors: [] }), a = new i, a.options = t.widget.extend({}, a.options), t.each(n, function(e, n) {
                return t.isFunction(n) ? void(r[e] = function() {
                    function t() { return i.prototype[e].apply(this, arguments) }

                    function s(t) { return i.prototype[e].apply(this, t) }
                    return function() {
                        var e, i = this._super,
                            o = this._superApply;
                        return this._super = t, this._superApply = s, e = n.apply(this, arguments), this._super = i, this._superApply = o, e
                    }
                }()) : void(r[e] = n)
            }), o.prototype = t.widget.extend(a, { widgetEventPrefix: s ? a.widgetEventPrefix || e : e }, r, { constructor: o, namespace: l, widgetName: e, widgetFullName: h }), s ? (t.each(s._childConstructors, function(e, i) {
                var n = i.prototype;
                t.widget(n.namespace + "." + n.widgetName, o, i._proto)
            }), delete s._childConstructors) : i._childConstructors.push(o), t.widget.bridge(e, o), o
        }, t.widget.extend = function(e) {
            for (var i, n, s = h.call(arguments, 1), o = 0, a = s.length; a > o; o++)
                for (i in s[o]) n = s[o][i], s[o].hasOwnProperty(i) && void 0 !== n && (e[i] = t.isPlainObject(n) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], n) : t.widget.extend({}, n) : n);
            return e
        }, t.widget.bridge = function(e, i) {
            var n = i.prototype.widgetFullName || e;
            t.fn[e] = function(s) {
                var o = "string" == typeof s,
                    a = h.call(arguments, 1),
                    r = this;
                return o ? this.length || "instance" !== s ? this.each(function() { var i, o = t.data(this, n); return "instance" === s ? (r = o, !1) : o ? t.isFunction(o[s]) && "_" !== s.charAt(0) ? (i = o[s].apply(o, a), i !== o && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0) : t.error("no such method '" + s + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + s + "'") }) : r = void 0 : (a.length && (s = t.widget.extend.apply(null, [s].concat(a))), this.each(function() {
                    var e = t.data(this, n);
                    e ? (e.option(s || {}), e._init && e._init()) : t.data(this, n, new i(s, this))
                })), r
            }
        }, t.Widget = function() {}, t.Widget._childConstructors = [], t.Widget.prototype = {
            widgetName: "widget",
            widgetEventPrefix: "",
            defaultElement: "<div>",
            options: { classes: {}, disabled: !1, create: null },
            _createWidget: function(e, i) { i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = l++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, { remove: function(t) { t.target === i && this.destroy() } }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init() },
            _getCreateOptions: function() { return {} },
            _getCreateEventData: t.noop,
            _create: t.noop,
            _init: t.noop,
            destroy: function() {
                var e = this;
                this._destroy(), t.each(this.classesElementLookup, function(t, i) { e._removeClass(i, t) }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
            },
            _destroy: t.noop,
            widget: function() { return this.element },
            option: function(e, i) {
                var n, s, o, a = e;
                if (0 === arguments.length) return t.widget.extend({}, this.options);
                if ("string" == typeof e)
                    if (a = {}, n = e.split("."), e = n.shift(), n.length) {
                        for (s = a[e] = t.widget.extend({}, this.options[e]), o = 0; n.length - 1 > o; o++) s[n[o]] = s[n[o]] || {}, s = s[n[o]];
                        if (e = n.pop(), 1 === arguments.length) return void 0 === s[e] ? null : s[e];
                        s[e] = i
                    } else {
                        if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                        a[e] = i
                    }
                return this._setOptions(a), this
            },
            _setOptions: function(t) { var e; for (e in t) this._setOption(e, t[e]); return this },
            _setOption: function(t, e) { return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this },
            _setOptionClasses: function(e) { var i, n, s; for (i in e) s = this.classesElementLookup[i], e[i] !== this.options.classes[i] && s && s.length && (n = t(s.get()), this._removeClass(s, i), n.addClass(this._classes({ element: n, keys: i, classes: e, add: !0 }))) },
            _setOptionDisabled: function(t) { this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus")) },
            enable: function() { return this._setOptions({ disabled: !1 }) },
            disable: function() { return this._setOptions({ disabled: !0 }) },
            _classes: function(e) {
                function i(i, o) { var a, r; for (r = 0; i.length > r; r++) a = s.classesElementLookup[i[r]] || t(), a = t(e.add ? t.unique(a.get().concat(e.element.get())) : a.not(e.element).get()), s.classesElementLookup[i[r]] = a, n.push(i[r]), o && e.classes[i[r]] && n.push(e.classes[i[r]]) }
                var n = [],
                    s = this;
                return e = t.extend({ element: this.element, classes: this.options.classes || {} }, e), this._on(e.element, { remove: "_untrackClassesElement" }), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), n.join(" ")
            },
            _untrackClassesElement: function(e) {
                var i = this;
                t.each(i.classesElementLookup, function(n, s) {-1 !== t.inArray(e.target, s) && (i.classesElementLookup[n] = t(s.not(e.target).get())) })
            },
            _removeClass: function(t, e, i) { return this._toggleClass(t, e, i, !1) },
            _addClass: function(t, e, i) { return this._toggleClass(t, e, i, !0) },
            _toggleClass: function(t, e, i, n) {
                n = "boolean" == typeof n ? n : i;
                var s = "string" == typeof t || null === t,
                    o = { extra: s ? e : i, keys: s ? t : e, element: s ? this.element : t, add: n };
                return o.element.toggleClass(this._classes(o), n), this
            },
            _on: function(e, i, n) {
                var s, o = this;
                "boolean" != typeof e && (n = i, i = e, e = !1), n ? (i = s = t(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, s = this.widget()), t.each(n, function(n, a) {
                    function r() { return e || !0 !== o.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? o[a] : a).apply(o, arguments) : void 0 }
                    "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                    var l = n.match(/^([\w:-]*)\s*(.*)$/),
                        h = l[1] + o.eventNamespace,
                        c = l[2];
                    c ? s.on(h, c, r) : i.on(h, r)
                })
            },
            _off: function(e, i) { i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get()) },
            _delay: function(t, e) {
                function i() { return ("string" == typeof t ? n[t] : t).apply(n, arguments) }
                var n = this;
                return setTimeout(i, e || 0)
            },
            _hoverable: function(e) { this.hoverable = this.hoverable.add(e), this._on(e, { mouseenter: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-hover") }, mouseleave: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-hover") } }) },
            _focusable: function(e) { this.focusable = this.focusable.add(e), this._on(e, { focusin: function(e) { this._addClass(t(e.currentTarget), null, "ui-state-focus") }, focusout: function(e) { this._removeClass(t(e.currentTarget), null, "ui-state-focus") } }) },
            _trigger: function(e, i, n) {
                var s, o, a = this.options[e];
                if (n = n || {}, i = t.Event(i), i.type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], o = i.originalEvent)
                    for (s in o) s in i || (i[s] = o[s]);
                return this.element.trigger(i, n), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(n)) || i.isDefaultPrevented())
            }
        }, t.each({ show: "fadeIn", hide: "fadeOut" }, function(e, i) {
            t.Widget.prototype["_" + e] = function(n, s, o) {
                "string" == typeof s && (s = { effect: s });
                var a, r = s ? !0 === s || "number" == typeof s ? i : s.effect || i : e;
                s = s || {}, "number" == typeof s && (s = { duration: s }), a = !t.isEmptyObject(s), s.complete = o, s.delay && n.delay(s.delay), a && t.effects && t.effects.effect[r] ? n[e](s) : r !== e && n[r] ? n[r](s.duration, s.easing, o) : n.queue(function(i) { t(this)[e](), o && o.call(n[0]), i() })
            }
        }), t.widget,
        function() {
            function e(t, e, i) { return [parseFloat(t[0]) * (u.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (u.test(t[1]) ? i / 100 : 1)] }

            function i(e, i) { return parseInt(t.css(e, i), 10) || 0 }

            function n(e) { var i = e[0]; return 9 === i.nodeType ? { width: e.width(), height: e.height(), offset: { top: 0, left: 0 } } : t.isWindow(i) ? { width: e.width(), height: e.height(), offset: { top: e.scrollTop(), left: e.scrollLeft() } } : i.preventDefault ? { width: 0, height: 0, offset: { top: i.pageY, left: i.pageX } } : { width: e.outerWidth(), height: e.outerHeight(), offset: e.offset() } }
            var s, o = Math.max,
                a = Math.abs,
                r = /left|center|right/,
                l = /top|center|bottom/,
                h = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                u = /%$/,
                d = t.fn.position;
            t.position = {
                scrollbarWidth: function() {
                    if (void 0 !== s) return s;
                    var e, i, n = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                        o = n.children()[0];
                    return t("body").append(n), e = o.offsetWidth, n.css("overflow", "scroll"), i = o.offsetWidth, e === i && (i = n[0].clientWidth), n.remove(), s = e - i
                },
                getScrollInfo: function(e) {
                    var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                        n = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                        s = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                    return { width: "scroll" === n || "auto" === n && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0, height: s ? t.position.scrollbarWidth() : 0 }
                },
                getWithinInfo: function(e) {
                    var i = t(e || window),
                        n = t.isWindow(i[0]),
                        s = !!i[0] && 9 === i[0].nodeType;
                    return { element: i, isWindow: n, isDocument: s, offset: n || s ? { left: 0, top: 0 } : t(e).offset(), scrollLeft: i.scrollLeft(), scrollTop: i.scrollTop(), width: i.outerWidth(), height: i.outerHeight() }
                }
            }, t.fn.position = function(s) {
                if (!s || !s.of) return d.apply(this, arguments);
                s = t.extend({}, s);
                var u, p, f, g, m, v, b = t(s.of),
                    y = t.position.getWithinInfo(s.within),
                    _ = t.position.getScrollInfo(y),
                    w = (s.collision || "flip").split(" "),
                    x = {};
                return v = n(b), b[0].preventDefault && (s.at = "left top"), p = v.width, f = v.height, g = v.offset, m = t.extend({}, g), t.each(["my", "at"], function() {
                    var t, e, i = (s[this] || "").split(" ");
                    1 === i.length && (i = r.test(i[0]) ? i.concat(["center"]) : l.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = r.test(i[0]) ? i[0] : "center", i[1] = l.test(i[1]) ? i[1] : "center", t = h.exec(i[0]), e = h.exec(i[1]), x[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                }), 1 === w.length && (w[1] = w[0]), "right" === s.at[0] ? m.left += p : "center" === s.at[0] && (m.left += p / 2), "bottom" === s.at[1] ? m.top += f : "center" === s.at[1] && (m.top += f / 2), u = e(x.at, p, f), m.left += u[0], m.top += u[1], this.each(function() {
                    var n, r, l = t(this),
                        h = l.outerWidth(),
                        c = l.outerHeight(),
                        d = i(this, "marginLeft"),
                        v = i(this, "marginTop"),
                        C = h + d + i(this, "marginRight") + _.width,
                        k = c + v + i(this, "marginBottom") + _.height,
                        T = t.extend({}, m),
                        z = e(x.my, l.outerWidth(), l.outerHeight());
                    "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= c : "center" === s.my[1] && (T.top -= c / 2), T.left += z[0], T.top += z[1], n = { marginLeft: d, marginTop: v }, t.each(["left", "top"], function(e, i) { t.ui.position[w[e]] && t.ui.position[w[e]][i](T, { targetWidth: p, targetHeight: f, elemWidth: h, elemHeight: c, collisionPosition: n, collisionWidth: C, collisionHeight: k, offset: [u[0] + z[0], u[1] + z[1]], my: s.my, at: s.at, within: y, elem: l }) }), s.using && (r = function(t) {
                        var e = g.left - T.left,
                            i = e + p - h,
                            n = g.top - T.top,
                            r = n + f - c,
                            u = { target: { element: b, left: g.left, top: g.top, width: p, height: f }, element: { element: l, left: T.left, top: T.top, width: h, height: c }, horizontal: 0 > i ? "left" : e > 0 ? "right" : "center", vertical: 0 > r ? "top" : n > 0 ? "bottom" : "middle" };
                        h > p && p > a(e + i) && (u.horizontal = "center"), c > f && f > a(n + r) && (u.vertical = "middle"), u.important = o(a(e), a(i)) > o(a(n), a(r)) ? "horizontal" : "vertical", s.using.call(this, t, u)
                    }), l.offset(t.extend(T, { using: r }))
                })
            }, t.ui.position = {
                fit: {
                    left: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollLeft : n.offset.left,
                            a = n.width,
                            r = t.left - e.collisionPosition.marginLeft,
                            l = s - r,
                            h = r + e.collisionWidth - a - s;
                        e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - s, t.left += l - i) : t.left = h > 0 && 0 >= l ? s : l > h ? s + a - e.collisionWidth : s : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                    },
                    top: function(t, e) {
                        var i, n = e.within,
                            s = n.isWindow ? n.scrollTop : n.offset.top,
                            a = e.within.height,
                            r = t.top - e.collisionPosition.marginTop,
                            l = s - r,
                            h = r + e.collisionHeight - a - s;
                        e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - s, t.top += l - i) : t.top = h > 0 && 0 >= l ? s : l > h ? s + a - e.collisionHeight : s : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                    }
                },
                flip: {
                    left: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.left + s.scrollLeft,
                            r = s.width,
                            l = s.isWindow ? s.scrollLeft : s.offset.left,
                            h = t.left - e.collisionPosition.marginLeft,
                            c = h - l,
                            u = h + e.collisionWidth - r - l,
                            d = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                            p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                            f = -2 * e.offset[0];
                        0 > c ? (0 > (i = t.left + d + p + f + e.collisionWidth - r - o) || a(c) > i) && (t.left += d + p + f) : u > 0 && ((n = t.left - e.collisionPosition.marginLeft + d + p + f - l) > 0 || u > a(n)) && (t.left += d + p + f)
                    },
                    top: function(t, e) {
                        var i, n, s = e.within,
                            o = s.offset.top + s.scrollTop,
                            r = s.height,
                            l = s.isWindow ? s.scrollTop : s.offset.top,
                            h = t.top - e.collisionPosition.marginTop,
                            c = h - l,
                            u = h + e.collisionHeight - r - l,
                            d = "top" === e.my[1],
                            p = d ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                            f = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                            g = -2 * e.offset[1];
                        0 > c ? (0 > (n = t.top + p + f + g + e.collisionHeight - r - o) || a(c) > n) && (t.top += p + f + g) : u > 0 && ((i = t.top - e.collisionPosition.marginTop + p + f + g - l) > 0 || u > a(i)) && (t.top += p + f + g)
                    }
                },
                flipfit: { left: function() { t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments) }, top: function() { t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments) } }
            }
        }(), t.ui.position, t.extend(t.expr[":"], { data: t.expr.createPseudo ? t.expr.createPseudo(function(e) { return function(i) { return !!t.data(i, e) } }) : function(e, i, n) { return !!t.data(e, n[3]) } }), t.fn.extend({ disableSelection: function() { var t = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown"; return function() { return this.on(t + ".ui-disableSelection", function(t) { t.preventDefault() }) } }(), enableSelection: function() { return this.off(".ui-disableSelection") } });
    var c = "ui-effects-",
        u = "ui-effects-style",
        d = "ui-effects-animated",
        p = t;
    t.effects = { effect: {} },
        function(t, e) {
            function i(t, e, i) { var n = c[e.type] || {}; return null == t ? i || !e.def ? null : e.def : (t = n.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : n.mod ? (t + n.mod) % n.mod : 0 > t ? 0 : t > n.max ? n.max : t) }

            function n(i) {
                var n = l(),
                    s = n._rgba = [];
                return i = i.toLowerCase(), p(r, function(t, o) {
                    var a, r = o.re.exec(i),
                        l = r && o.parse(r),
                        c = o.space || "rgba";
                    return l ? (a = n[c](l), n[h[c].cache] = a[h[c].cache], s = n._rgba = a._rgba, !1) : e
                }), s.length ? ("0,0,0,0" === s.join() && t.extend(s, o.transparent), n) : o[i]
            }

            function s(t, e, i) { return i = (i + 1) % 1, 1 > 6 * i ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t }
            var o, a = /^([\-+])=\s*(\d+\.?\d*)/,
                r = [{ re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [t[1], t[2], t[3], t[4]] } }, { re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, parse: function(t) { return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]] } }, { re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function(t) { return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] } }, { re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function(t) { return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)] } }, { re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/, space: "hsla", parse: function(t) { return [t[1], t[2] / 100, t[3] / 100, t[4]] } }],
                l = t.Color = function(e, i, n, s) { return new t.Color.fn.parse(e, i, n, s) },
                h = { rgba: { props: { red: { idx: 0, type: "byte" }, green: { idx: 1, type: "byte" }, blue: { idx: 2, type: "byte" } } }, hsla: { props: { hue: { idx: 0, type: "degrees" }, saturation: { idx: 1, type: "percent" }, lightness: { idx: 2, type: "percent" } } } },
                c = { byte: { floor: !0, max: 255 }, percent: { max: 1 }, degrees: { mod: 360, floor: !0 } },
                u = l.support = {},
                d = t("<p>")[0],
                p = t.each;
            d.style.cssText = "background-color:rgba(1,1,1,.5)", u.rgba = d.style.backgroundColor.indexOf("rgba") > -1, p(h, function(t, e) { e.cache = "_" + t, e.props.alpha = { idx: 3, type: "percent", def: 1 } }), l.fn = t.extend(l.prototype, {
                parse: function(s, a, r, c) {
                    if (s === e) return this._rgba = [null, null, null, null], this;
                    (s.jquery || s.nodeType) && (s = t(s).css(a), a = e);
                    var u = this,
                        d = t.type(s),
                        f = this._rgba = [];
                    return a !== e && (s = [s, a, r, c], d = "array"), "string" === d ? this.parse(n(s) || o._default) : "array" === d ? (p(h.rgba.props, function(t, e) { f[e.idx] = i(s[e.idx], e) }), this) : "object" === d ? (s instanceof l ? p(h, function(t, e) { s[e.cache] && (u[e.cache] = s[e.cache].slice()) }) : p(h, function(e, n) {
                        var o = n.cache;
                        p(n.props, function(t, e) {
                            if (!u[o] && n.to) {
                                if ("alpha" === t || null == s[t]) return;
                                u[o] = n.to(u._rgba)
                            }
                            u[o][e.idx] = i(s[t], e, !0)
                        }), u[o] && 0 > t.inArray(null, u[o].slice(0, 3)) && (u[o][3] = 1, n.from && (u._rgba = n.from(u[o])))
                    }), this) : e
                },
                is: function(t) {
                    var i = l(t),
                        n = !0,
                        s = this;
                    return p(h, function(t, o) { var a, r = i[o.cache]; return r && (a = s[o.cache] || o.to && o.to(s._rgba) || [], p(o.props, function(t, i) { return null != r[i.idx] ? n = r[i.idx] === a[i.idx] : e })), n }), n
                },
                _space: function() {
                    var t = [],
                        e = this;
                    return p(h, function(i, n) { e[n.cache] && t.push(i) }), t.pop()
                },
                transition: function(t, e) {
                    var n = l(t),
                        s = n._space(),
                        o = h[s],
                        a = 0 === this.alpha() ? l("transparent") : this,
                        r = a[o.cache] || o.to(a._rgba),
                        u = r.slice();
                    return n = n[o.cache], p(o.props, function(t, s) {
                        var o = s.idx,
                            a = r[o],
                            l = n[o],
                            h = c[s.type] || {};
                        null !== l && (null === a ? u[o] = l : (h.mod && (l - a > h.mod / 2 ? a += h.mod : a - l > h.mod / 2 && (a -= h.mod)), u[o] = i((l - a) * e + a, s)))
                    }), this[s](u)
                },
                blend: function(e) {
                    if (1 === this._rgba[3]) return this;
                    var i = this._rgba.slice(),
                        n = i.pop(),
                        s = l(e)._rgba;
                    return l(t.map(i, function(t, e) { return (1 - n) * s[e] + n * t }))
                },
                toRgbaString: function() {
                    var e = "rgba(",
                        i = t.map(this._rgba, function(t, e) { return null == t ? e > 2 ? 1 : 0 : t });
                    return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
                },
                toHslaString: function() {
                    var e = "hsla(",
                        i = t.map(this.hsla(), function(t, e) { return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t });
                    return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
                },
                toHexString: function(e) {
                    var i = this._rgba.slice(),
                        n = i.pop();
                    return e && i.push(~~(255 * n)), "#" + t.map(i, function(t) { return t = (t || 0).toString(16), 1 === t.length ? "0" + t : t }).join("")
                },
                toString: function() { return 0 === this._rgba[3] ? "transparent" : this.toRgbaString() }
            }), l.fn.parse.prototype = l.fn, h.hsla.to = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e, i, n = t[0] / 255,
                    s = t[1] / 255,
                    o = t[2] / 255,
                    a = t[3],
                    r = Math.max(n, s, o),
                    l = Math.min(n, s, o),
                    h = r - l,
                    c = r + l,
                    u = .5 * c;
                return e = l === r ? 0 : n === r ? 60 * (s - o) / h + 360 : s === r ? 60 * (o - n) / h + 120 : 60 * (n - s) / h + 240, i = 0 === h ? 0 : .5 >= u ? h / c : h / (2 - c), [Math.round(e) % 360, i, u, null == a ? 1 : a]
            }, h.hsla.from = function(t) {
                if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
                var e = t[0] / 360,
                    i = t[1],
                    n = t[2],
                    o = t[3],
                    a = .5 >= n ? n * (1 + i) : n + i - n * i,
                    r = 2 * n - a;
                return [Math.round(255 * s(r, a, e + 1 / 3)), Math.round(255 * s(r, a, e)), Math.round(255 * s(r, a, e - 1 / 3)), o]
            }, p(h, function(n, s) {
                var o = s.props,
                    r = s.cache,
                    h = s.to,
                    c = s.from;
                l.fn[n] = function(n) {
                    if (h && !this[r] && (this[r] = h(this._rgba)), n === e) return this[r].slice();
                    var s, a = t.type(n),
                        u = "array" === a || "object" === a ? n : arguments,
                        d = this[r].slice();
                    return p(o, function(t, e) {
                        var n = u["object" === a ? t : e.idx];
                        null == n && (n = d[e.idx]), d[e.idx] = i(n, e)
                    }), c ? (s = l(c(d)), s[r] = d, s) : l(d)
                }, p(o, function(e, i) {
                    l.fn[e] || (l.fn[e] = function(s) {
                        var o, r = t.type(s),
                            l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : n,
                            h = this[l](),
                            c = h[i.idx];
                        return "undefined" === r ? c : ("function" === r && (s = s.call(this, c), r = t.type(s)), null == s && i.empty ? this : ("string" === r && (o = a.exec(s)) && (s = c + parseFloat(o[2]) * ("+" === o[1] ? 1 : -1)), h[i.idx] = s, this[l](h)))
                    })
                })
            }), l.hook = function(e) {
                var i = e.split(" ");
                p(i, function(e, i) {
                    t.cssHooks[i] = {
                        set: function(e, s) {
                            var o, a, r = "";
                            if ("transparent" !== s && ("string" !== t.type(s) || (o = n(s)))) {
                                if (s = l(o || s), !u.rgba && 1 !== s._rgba[3]) {
                                    for (a = "backgroundColor" === i ? e.parentNode : e;
                                        ("" === r || "transparent" === r) && a && a.style;) try { r = t.css(a, "backgroundColor"), a = a.parentNode } catch (t) {} s = s.blend(r && "transparent" !== r ? r : "_default")
                                }
                                s = s.toRgbaString()
                            }
                            try { e.style[i] = s } catch (t) {}
                        }
                    }, t.fx.step[i] = function(e) { e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos)) }
                })
            }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = { expand: function(t) { var e = {}; return p(["Top", "Right", "Bottom", "Left"], function(i, n) { e["border" + n + "Color"] = t }), e } }, o = t.Color.names = { aqua: "#00ffff", black: "#000000", blue: "#0000ff", fuchsia: "#ff00ff", gray: "#808080", green: "#008000", lime: "#00ff00", maroon: "#800000", navy: "#000080", olive: "#808000", purple: "#800080", red: "#ff0000", silver: "#c0c0c0", teal: "#008080", white: "#ffffff", yellow: "#ffff00", transparent: [null, null, null, 0], _default: "#ffffff" }
        }(p),
        function() {
            function e(e) {
                var i, n, s = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                    o = {};
                if (s && s.length && s[0] && s[s[0]])
                    for (n = s.length; n--;) i = s[n], "string" == typeof s[i] && (o[t.camelCase(i)] = s[i]);
                else
                    for (i in s) "string" == typeof s[i] && (o[i] = s[i]);
                return o
            }

            function i(e, i) { var n, o, a = {}; for (n in i) o = i[n], e[n] !== o && (s[n] || (t.fx.step[n] || !isNaN(parseFloat(o))) && (a[n] = o)); return a }
            var n = ["add", "remove", "toggle"],
                s = { border: 1, borderBottom: 1, borderColor: 1, borderLeft: 1, borderRight: 1, borderTop: 1, borderWidth: 1, margin: 1, padding: 1 };
            t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function(e, i) {
                t.fx.step[i] = function(t) {
                    ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (p.style(t.elem, i, t.end), t.setAttr = !0)
                }
            }), t.fn.addBack || (t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.effects.animateClass = function(s, o, a, r) {
                var l = t.speed(o, a, r);
                return this.queue(function() {
                    var o, a = t(this),
                        r = a.attr("class") || "",
                        h = l.children ? a.find("*").addBack() : a;
                    h = h.map(function() { return { el: t(this), start: e(this) } }), o = function() { t.each(n, function(t, e) { s[e] && a[e + "Class"](s[e]) }) }, o(), h = h.map(function() { return this.end = e(this.el[0]), this.diff = i(this.start, this.end), this }), a.attr("class", r), h = h.map(function() {
                        var e = this,
                            i = t.Deferred(),
                            n = t.extend({}, l, { queue: !1, complete: function() { i.resolve(e) } });
                        return this.el.animate(this.diff, n), i.promise()
                    }), t.when.apply(t, h.get()).done(function() {
                        o(), t.each(arguments, function() {
                            var e = this.el;
                            t.each(this.diff, function(t) { e.css(t, "") })
                        }), l.complete.call(a[0])
                    })
                })
            }, t.fn.extend({ addClass: function(e) { return function(i, n, s, o) { return n ? t.effects.animateClass.call(this, { add: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.addClass), removeClass: function(e) { return function(i, n, s, o) { return arguments.length > 1 ? t.effects.animateClass.call(this, { remove: i }, n, s, o) : e.apply(this, arguments) } }(t.fn.removeClass), toggleClass: function(e) { return function(i, n, s, o, a) { return "boolean" == typeof n || void 0 === n ? s ? t.effects.animateClass.call(this, n ? { add: i } : { remove: i }, s, o, a) : e.apply(this, arguments) : t.effects.animateClass.call(this, { toggle: i }, n, s, o) } }(t.fn.toggleClass), switchClass: function(e, i, n, s, o) { return t.effects.animateClass.call(this, { add: i, remove: e }, n, s, o) } })
        }(),
        function() {
            function e(e, i, n, s) { return t.isPlainObject(e) && (i = e, e = e.effect), e = { effect: e }, null == i && (i = {}), t.isFunction(i) && (s = i, n = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (s = n, n = i, i = {}), t.isFunction(n) && (s = n, n = null), i && t.extend(e, i), n = n || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof n ? n : n in t.fx.speeds ? t.fx.speeds[n] : t.fx.speeds._default, e.complete = s || i.complete, e }

            function i(e) { return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect)) }

            function n(t, e) {
                var i = e.outerWidth(),
                    n = e.outerHeight(),
                    s = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                    o = s.exec(t) || ["", 0, i, n, 0];
                return { top: parseFloat(o[1]) || 0, right: "auto" === o[2] ? i : parseFloat(o[2]), bottom: "auto" === o[3] ? n : parseFloat(o[3]), left: parseFloat(o[4]) || 0 }
            }
            t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = function(e) { return function(i) { return !!t(i).data(d) || e(i) } }(t.expr.filters.animated)), !1 !== t.uiBackCompat && t.extend(t.effects, {
                save: function(t, e) { for (var i = 0, n = e.length; n > i; i++) null !== e[i] && t.data(c + e[i], t[0].style[e[i]]) },
                restore: function(t, e) { for (var i, n = 0, s = e.length; s > n; n++) null !== e[n] && (i = t.data(c + e[n]), t.css(e[n], i)) },
                setMode: function(t, e) { return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e },
                createWrapper: function(e) {
                    if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                    var i = { width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float") },
                        n = t("<div></div>").addClass("ui-effects-wrapper").css({ fontSize: "100%", background: "transparent", border: "none", margin: 0, padding: 0 }),
                        s = { width: e.width(), height: e.height() },
                        o = document.activeElement;
                    try { o.id } catch (t) { o = document.body }
                    return e.wrap(n), (e[0] === o || t.contains(e[0], o)) && t(o).trigger("focus"), n = e.parent(), "static" === e.css("position") ? (n.css({ position: "relative" }), e.css({ position: "relative" })) : (t.extend(i, { position: e.css("position"), zIndex: e.css("z-index") }), t.each(["top", "left", "bottom", "right"], function(t, n) { i[n] = e.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto") }), e.css({ position: "relative", top: 0, left: 0, right: "auto", bottom: "auto" })), e.css(s), n.css(i).show()
                },
                removeWrapper: function(e) { var i = document.activeElement; return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e }
            }), t.extend(t.effects, {
                version: "1.12.1",
                define: function(e, i, n) { return n || (n = i, i = "effect"), t.effects.effect[e] = n, t.effects.effect[e].mode = i, n },
                scaledDimensions: function(t, e, i) {
                    if (0 === e) return { height: 0, width: 0, outerHeight: 0, outerWidth: 0 };
                    var n = "horizontal" !== i ? (e || 100) / 100 : 1,
                        s = "vertical" !== i ? (e || 100) / 100 : 1;
                    return { height: t.height() * s, width: t.width() * n, outerHeight: t.outerHeight() * s, outerWidth: t.outerWidth() * n }
                },
                clipToBox: function(t) { return { width: t.clip.right - t.clip.left, height: t.clip.bottom - t.clip.top, left: t.clip.left, top: t.clip.top } },
                unshift: function(t, e, i) {
                    var n = t.queue();
                    e > 1 && n.splice.apply(n, [1, 0].concat(n.splice(e, i))), t.dequeue()
                },
                saveStyle: function(t) { t.data(u, t[0].style.cssText) },
                restoreStyle: function(t) { t[0].style.cssText = t.data(u) || "", t.removeData(u) },
                mode: function(t, e) { var i = t.is(":hidden"); return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e },
                getBaseline: function(t, e) {
                    var i, n;
                    switch (t[0]) {
                        case "top":
                            i = 0;
                            break;
                        case "middle":
                            i = .5;
                            break;
                        case "bottom":
                            i = 1;
                            break;
                        default:
                            i = t[0] / e.height
                    }
                    switch (t[1]) {
                        case "left":
                            n = 0;
                            break;
                        case "center":
                            n = .5;
                            break;
                        case "right":
                            n = 1;
                            break;
                        default:
                            n = t[1] / e.width
                    }
                    return { x: n, y: i }
                },
                createPlaceholder: function(e) {
                    var i, n = e.css("position"),
                        s = e.position();
                    return e.css({ marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(n) && (n = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({ display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block", visibility: "hidden", marginTop: e.css("marginTop"), marginBottom: e.css("marginBottom"), marginLeft: e.css("marginLeft"), marginRight: e.css("marginRight"), float: e.css("float") }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(c + "placeholder", i)), e.css({ position: n, left: s.left, top: s.top }), i
                },
                removePlaceholder: function(t) {
                    var e = c + "placeholder",
                        i = t.data(e);
                    i && (i.remove(), t.removeData(e))
                },
                cleanUp: function(e) { t.effects.restoreStyle(e), t.effects.removePlaceholder(e) },
                setTransition: function(e, i, n, s) {
                    return s = s || {}, t.each(i, function(t, i) {
                        var o = e.cssUnit(i);
                        o[0] > 0 && (s[i] = o[0] * n + o[1])
                    }), s
                }
            }), t.fn.extend({
                effect: function() {
                    function i(e) {
                        function i() { r.removeData(d), t.effects.cleanUp(r), "hide" === n.mode && r.hide(), a() }

                        function a() { t.isFunction(l) && l.call(r[0]), t.isFunction(e) && e() }
                        var r = t(this);
                        n.mode = c.shift(), !1 === t.uiBackCompat || o ? "none" === n.mode ? (r[h](), a()) : s.call(r[0], n, i) : (r.is(":hidden") ? "hide" === h : "show" === h) ? (r[h](), a()) : s.call(r[0], n, a)
                    }
                    var n = e.apply(this, arguments),
                        s = t.effects.effect[n.effect],
                        o = s.mode,
                        a = n.queue,
                        r = a || "fx",
                        l = n.complete,
                        h = n.mode,
                        c = [],
                        u = function(e) {
                            var i = t(this),
                                n = t.effects.mode(i, h) || o;
                            i.data(d, !0), c.push(n), o && ("show" === n || n === o && "hide" === n) && i.show(), o && "none" === n || t.effects.saveStyle(i), t.isFunction(e) && e()
                        };
                    return t.fx.off || !s ? h ? this[h](n.duration, l) : this.each(function() { l && l.call(this) }) : !1 === a ? this.each(u).each(i) : this.queue(r, u).queue(r, i)
                },
                show: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "show", this.effect.call(this, s) } }(t.fn.show),
                hide: function(t) { return function(n) { if (i(n)) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "hide", this.effect.call(this, s) } }(t.fn.hide),
                toggle: function(t) { return function(n) { if (i(n) || "boolean" == typeof n) return t.apply(this, arguments); var s = e.apply(this, arguments); return s.mode = "toggle", this.effect.call(this, s) } }(t.fn.toggle),
                cssUnit: function(e) {
                    var i = this.css(e),
                        n = [];
                    return t.each(["em", "px", "%", "pt"], function(t, e) { i.indexOf(e) > 0 && (n = [parseFloat(i), e]) }), n
                },
                cssClip: function(t) { return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : n(this.css("clip"), this) },
                transfer: function(e, i) {
                    var n = t(this),
                        s = t(e.to),
                        o = "fixed" === s.css("position"),
                        a = t("body"),
                        r = o ? a.scrollTop() : 0,
                        l = o ? a.scrollLeft() : 0,
                        h = s.offset(),
                        c = { top: h.top - r, left: h.left - l, height: s.innerHeight(), width: s.innerWidth() },
                        u = n.offset(),
                        d = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({ top: u.top - r, left: u.left - l, height: n.innerHeight(), width: n.innerWidth(), position: o ? "fixed" : "absolute" }).animate(c, e.duration, e.easing, function() { d.remove(), t.isFunction(i) && i() })
                }
            }), t.fx.step.clip = function(e) { e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = n(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({ top: e.pos * (e.end.top - e.start.top) + e.start.top, right: e.pos * (e.end.right - e.start.right) + e.start.right, bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom, left: e.pos * (e.end.left - e.start.left) + e.start.left }) }
        }(),
        function() {
            var e = {};
            t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function(t, i) { e[i] = function(e) { return Math.pow(e, t + 2) } }), t.extend(e, {
                Sine: function(t) { return 1 - Math.cos(t * Math.PI / 2) },
                Circ: function(t) { return 1 - Math.sqrt(1 - t * t) },
                Elastic: function(t) { return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15) },
                Back: function(t) { return t * t * (3 * t - 2) },
                Bounce: function(t) {
                    for (var e, i = 4;
                        ((e = Math.pow(2, --i)) - 1) / 11 > t;);
                    return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
                }
            }), t.each(e, function(e, i) { t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function(t) { return 1 - i(1 - t) }, t.easing["easeInOut" + e] = function(t) { return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2 } })
        }();
    t.effects;
    t.effects.define("blind", "hide", function(e, i) {
        var n = { up: ["bottom", "top"], vertical: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], horizontal: ["right", "left"], right: ["left", "right"] },
            s = t(this),
            o = e.direction || "up",
            a = s.cssClip(),
            r = { clip: t.extend({}, a) },
            l = t.effects.createPlaceholder(s);
        r.clip[n[o][0]] = r.clip[n[o][1]], "show" === e.mode && (s.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), s.animate(r, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("bounce", function(e, i) {
        var n, s, o, a = t(this),
            r = e.mode,
            l = "hide" === r,
            h = "show" === r,
            c = e.direction || "up",
            u = e.distance,
            d = e.times || 5,
            p = 2 * d + (h || l ? 1 : 0),
            f = e.duration / p,
            g = e.easing,
            m = "up" === c || "down" === c ? "top" : "left",
            v = "up" === c || "left" === c,
            b = 0,
            y = a.queue().length;
        for (t.effects.createPlaceholder(a), o = a.css(m), u || (u = a["top" === m ? "outerHeight" : "outerWidth"]() / 3), h && (s = { opacity: 1 }, s[m] = o, a.css("opacity", 0).css(m, v ? 2 * -u : 2 * u).animate(s, f, g)), l && (u /= Math.pow(2, d - 1)), s = {}, s[m] = o; d > b; b++) n = {}, n[m] = (v ? "-=" : "+=") + u, a.animate(n, f, g).animate(s, f, g), u = l ? 2 * u : u / 2;
        l && (n = { opacity: 0 }, n[m] = (v ? "-=" : "+=") + u, a.animate(n, f, g)), a.queue(i), t.effects.unshift(a, y, p + 1)
    }), t.effects.define("clip", "hide", function(e, i) {
        var n, s = {},
            o = t(this),
            a = e.direction || "vertical",
            r = "both" === a,
            l = r || "horizontal" === a,
            h = r || "vertical" === a;
        n = o.cssClip(), s.clip = { top: h ? (n.bottom - n.top) / 2 : n.top, right: l ? (n.right - n.left) / 2 : n.right, bottom: h ? (n.bottom - n.top) / 2 : n.bottom, left: l ? (n.right - n.left) / 2 : n.left }, t.effects.createPlaceholder(o), "show" === e.mode && (o.cssClip(s.clip), s.clip = n), o.animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("drop", "hide", function(e, i) {
        var n, s = t(this),
            o = e.mode,
            a = "show" === o,
            r = e.direction || "left",
            l = "up" === r || "down" === r ? "top" : "left",
            h = "up" === r || "left" === r ? "-=" : "+=",
            c = "+=" === h ? "-=" : "+=",
            u = { opacity: 0 };
        t.effects.createPlaceholder(s), n = e.distance || s["top" === l ? "outerHeight" : "outerWidth"](!0) / 2, u[l] = h + n, a && (s.css(u), u[l] = c + n, u.opacity = 1), s.animate(u, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("explode", "hide", function(e, i) {
        function n() { y.push(this), y.length === u * d && s() }

        function s() { p.css({ visibility: "visible" }), t(y).remove(), i() }
        var o, a, r, l, h, c, u = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3,
            d = u,
            p = t(this),
            f = e.mode,
            g = "show" === f,
            m = p.show().css("visibility", "hidden").offset(),
            v = Math.ceil(p.outerWidth() / d),
            b = Math.ceil(p.outerHeight() / u),
            y = [];
        for (o = 0; u > o; o++)
            for (l = m.top + o * b, c = o - (u - 1) / 2, a = 0; d > a; a++) r = m.left + a * v, h = a - (d - 1) / 2, p.clone().appendTo("body").wrap("<div></div>").css({ position: "absolute", visibility: "visible", left: -a * v, top: -o * b }).parent().addClass("ui-effects-explode").css({ position: "absolute", overflow: "hidden", width: v, height: b, left: r + (g ? h * v : 0), top: l + (g ? c * b : 0), opacity: g ? 0 : 1 }).animate({ left: r + (g ? 0 : h * v), top: l + (g ? 0 : c * b), opacity: g ? 1 : 0 }, e.duration || 500, e.easing, n)
    }), t.effects.define("fade", "toggle", function(e, i) {
        var n = "show" === e.mode;
        t(this).css("opacity", n ? 0 : 1).animate({ opacity: n ? 1 : 0 }, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("fold", "hide", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = "show" === s,
            a = "hide" === s,
            r = e.size || 15,
            l = /([0-9]+)%/.exec(r),
            h = !!e.horizFirst,
            c = h ? ["right", "bottom"] : ["bottom", "right"],
            u = e.duration / 2,
            d = t.effects.createPlaceholder(n),
            p = n.cssClip(),
            f = { clip: t.extend({}, p) },
            g = { clip: t.extend({}, p) },
            m = [p[c[0]], p[c[1]]],
            v = n.queue().length;
        l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), f.clip[c[0]] = r, g.clip[c[0]] = r, g.clip[c[1]] = 0, o && (n.cssClip(g.clip), d && d.css(t.effects.clipToBox(g)), g.clip = p), n.queue(function(i) { d && d.animate(t.effects.clipToBox(f), u, e.easing).animate(t.effects.clipToBox(g), u, e.easing), i() }).animate(f, u, e.easing).animate(g, u, e.easing).queue(i), t.effects.unshift(n, v, 4)
    }), t.effects.define("highlight", "show", function(e, i) {
        var n = t(this),
            s = { backgroundColor: n.css("backgroundColor") };
        "hide" === e.mode && (s.opacity = 0), t.effects.saveStyle(n), n.css({ backgroundImage: "none", backgroundColor: e.color || "#ffff99" }).animate(s, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    }), t.effects.define("size", function(e, i) {
        var n, s, o, a = t(this),
            r = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"],
            c = e.mode,
            u = "effect" !== c,
            d = e.scale || "both",
            p = e.origin || ["middle", "center"],
            f = a.css("position"),
            g = a.position(),
            m = t.effects.scaledDimensions(a),
            v = e.from || m,
            b = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (o = v, v = b, b = o), s = { from: { y: v.height / m.height, x: v.width / m.width }, to: { y: b.height / m.height, x: b.width / m.width } }, ("box" === d || "both" === d) && (s.from.y !== s.to.y && (v = t.effects.setTransition(a, l, s.from.y, v), b = t.effects.setTransition(a, l, s.to.y, b)), s.from.x !== s.to.x && (v = t.effects.setTransition(a, h, s.from.x, v), b = t.effects.setTransition(a, h, s.to.x, b))), ("content" === d || "both" === d) && s.from.y !== s.to.y && (v = t.effects.setTransition(a, r, s.from.y, v), b = t.effects.setTransition(a, r, s.to.y, b)), p && (n = t.effects.getBaseline(p, m), v.top = (m.outerHeight - v.outerHeight) * n.y + g.top, v.left = (m.outerWidth - v.outerWidth) * n.x + g.left, b.top = (m.outerHeight - b.outerHeight) * n.y + g.top, b.left = (m.outerWidth - b.outerWidth) * n.x + g.left), a.css(v), ("content" === d || "both" === d) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function() {
            var i = t(this),
                n = t.effects.scaledDimensions(i),
                o = { height: n.height * s.from.y, width: n.width * s.from.x, outerHeight: n.outerHeight * s.from.y, outerWidth: n.outerWidth * s.from.x },
                a = { height: n.height * s.to.y, width: n.width * s.to.x, outerHeight: n.height * s.to.y, outerWidth: n.width * s.to.x };
            s.from.y !== s.to.y && (o = t.effects.setTransition(i, l, s.from.y, o), a = t.effects.setTransition(i, l, s.to.y, a)), s.from.x !== s.to.x && (o = t.effects.setTransition(i, h, s.from.x, o), a = t.effects.setTransition(i, h, s.to.x, a)), u && t.effects.saveStyle(i), i.css(o), i.animate(a, e.duration, e.easing, function() { u && t.effects.restoreStyle(i) })
        })), a.animate(b, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: function() {
                var e = a.offset();
                0 === b.opacity && a.css("opacity", v.opacity), u || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
            }
        })
    }), t.effects.define("scale", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== s ? 0 : 100),
            a = t.extend(!0, { from: t.effects.scaledDimensions(n), to: t.effects.scaledDimensions(n, o, e.direction || "both"), origin: e.origin || ["middle", "center"] }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
    }), t.effects.define("puff", "hide", function(e, i) {
        var n = t.extend(!0, {}, e, { fade: !0, percent: parseInt(e.percent, 10) || 150 });
        t.effects.effect.scale.call(this, n, i)
    }), t.effects.define("pulsate", "show", function(e, i) {
        var n = t(this),
            s = e.mode,
            o = "show" === s,
            a = "hide" === s,
            r = o || a,
            l = 2 * (e.times || 5) + (r ? 1 : 0),
            h = e.duration / l,
            c = 0,
            u = 1,
            d = n.queue().length;
        for ((o || !n.is(":visible")) && (n.css("opacity", 0).show(), c = 1); l > u; u++) n.animate({ opacity: c }, h, e.easing), c = 1 - c;
        n.animate({ opacity: c }, h, e.easing), n.queue(i), t.effects.unshift(n, d, l + 1)
    }), t.effects.define("shake", function(e, i) {
        var n = 1,
            s = t(this),
            o = e.direction || "left",
            a = e.distance || 20,
            r = e.times || 3,
            l = 2 * r + 1,
            h = Math.round(e.duration / l),
            c = "up" === o || "down" === o ? "top" : "left",
            u = "up" === o || "left" === o,
            d = {},
            p = {},
            f = {},
            g = s.queue().length;
        for (t.effects.createPlaceholder(s), d[c] = (u ? "-=" : "+=") + a, p[c] = (u ? "+=" : "-=") + 2 * a, f[c] = (u ? "-=" : "+=") + 2 * a, s.animate(d, h, e.easing); r > n; n++) s.animate(p, h, e.easing).animate(f, h, e.easing);
        s.animate(p, h, e.easing).animate(d, h / 2, e.easing).queue(i), t.effects.unshift(s, g, l + 1)
    }), t.effects.define("slide", "show", function(e, i) {
        var n, s, o = t(this),
            a = { up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"] },
            r = e.mode,
            l = e.direction || "left",
            h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l,
            u = e.distance || o["top" === h ? "outerHeight" : "outerWidth"](!0),
            d = {};
        t.effects.createPlaceholder(o), n = o.cssClip(), s = o.position()[h], d[h] = (c ? -1 : 1) * u + s, d.clip = o.cssClip(), d.clip[a[l][1]] = d.clip[a[l][0]], "show" === r && (o.cssClip(d.clip), o.css(h, d[h]), d.clip = n, d[h] = s), o.animate(d, { queue: !1, duration: e.duration, easing: e.easing, complete: i })
    });
    !1 !== t.uiBackCompat && t.effects.define("transfer", function(e, i) { t(this).transfer(e, i) }), t.ui.focusable = function(i, n) { var s, o, a, r, l, h = i.nodeName.toLowerCase(); return "area" === h ? (s = i.parentNode, o = s.name, !(!i.href || !o || "map" !== s.nodeName.toLowerCase()) && (a = t("img[usemap='#" + o + "']"), a.length > 0 && a.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(h) ? (r = !i.disabled) && (l = t(i).closest("fieldset")[0]) && (r = !l.disabled) : r = "a" === h ? i.href || n : n, r && t(i).is(":visible") && e(t(i))) }, t.extend(t.expr[":"], { focusable: function(e) { return t.ui.focusable(e, null != t.attr(e, "tabindex")) } }), t.ui.focusable, t.fn.form = function() { return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form) }, t.ui.formResetMixin = {
        _formResetHandler: function() {
            var e = t(this);
            setTimeout(function() {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function() { this.refresh() })
            })
        },
        _bindFormResetHandler: function() {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        },
        _unbindFormResetHandler: function() {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function(e, i) {
        function n(e, i, n, o) { return t.each(s, function() { i -= parseFloat(t.css(e, "padding" + this)) || 0, n && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), o && (i -= parseFloat(t.css(e, "margin" + this)) || 0) }), i }
        var s = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            o = i.toLowerCase(),
            a = { innerWidth: t.fn.innerWidth, innerHeight: t.fn.innerHeight, outerWidth: t.fn.outerWidth, outerHeight: t.fn.outerHeight };
        t.fn["inner" + i] = function(e) { return void 0 === e ? a["inner" + i].call(this) : this.each(function() { t(this).css(o, n(this, e) + "px") }) }, t.fn["outer" + i] = function(e, s) { return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function() { t(this).css(o, n(this, e, !0, s) + "px") }) }
    }), t.fn.addBack = function(t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }), t.ui.keyCode = { BACKSPACE: 8, COMMA: 188, DELETE: 46, DOWN: 40, END: 35, ENTER: 13, ESCAPE: 27, HOME: 36, LEFT: 37, PAGE_DOWN: 34, PAGE_UP: 33, PERIOD: 190, RIGHT: 39, SPACE: 32, TAB: 9, UP: 38 }, t.ui.escapeSelector = function() { var t = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g; return function(e) { return e.replace(t, "\\$1") } }(), t.fn.labels = function() { var e, i, n, s, o; return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (s = this.eq(0).parents("label"), n = this.attr("id"), n && (e = this.eq(0).parents().last(), o = e.add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(n) + "']", s = s.add(o.find(i).addBack(i))), this.pushStack(s)) }, t.fn.scrollParent = function(e) {
        var i = this.css("position"),
            n = "absolute" === i,
            s = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            o = this.parents().filter(function() { var e = t(this); return (!n || "static" !== e.css("position")) && s.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x")) }).eq(0);
        return "fixed" !== i && o.length ? o : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function(e) {
            var i = t.attr(e, "tabindex"),
                n = null != i;
            return (!n || i >= 0) && t.ui.focusable(e, n)
        }
    }), t.fn.extend({ uniqueId: function() { var t = 0; return function() { return this.each(function() { this.id || (this.id = "ui-id-" + ++t) }) } }(), removeUniqueId: function() { return this.each(function() { /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id") }) } }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: { active: 0, animate: {}, classes: { "ui-accordion-header": "ui-corner-top", "ui-accordion-header-collapsed": "ui-corner-all", "ui-accordion-content": "ui-corner-bottom" }, collapsible: !1, event: "click", header: "> li > :first-child, > :not(li):even", heightStyle: "auto", icons: { activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e" }, activate: null, beforeActivate: null },
        hideProps: { borderTopWidth: "hide", borderBottomWidth: "hide", paddingTop: "hide", paddingBottom: "hide", height: "hide" },
        showProps: { borderTopWidth: "show", borderBottomWidth: "show", paddingTop: "show", paddingBottom: "show", height: "show" },
        _create: function() {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function() { return { header: this.active, panel: this.active.length ? this.active.next() : t() } },
        _createIcons: function() {
            var e, i, n = this.options.icons;
            n && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + n.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, n.header)._addClass(i, null, n.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function() { this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove() },
        _destroy: function() {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void("icons" === t && (this._destroyIcons(), e && this._createIcons()))) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t) },
        _keydown: function(e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode,
                    n = this.headers.length,
                    s = this.headers.index(e.target),
                    o = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        o = this.headers[(s + 1) % n];
                        break;
                    case i.LEFT:
                    case i.UP:
                        o = this.headers[(s - 1 + n) % n];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        o = this.headers[0];
                        break;
                    case i.END:
                        o = this.headers[n - 1]
                }
                o && (t(e.target).attr("tabIndex", -1), t(o).attr("tabIndex", 0), t(o).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function(e) { e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus") },
        refresh: function() {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function() {
            var t = this.headers,
                e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function() {
            var e, i = this.options,
                n = i.heightStyle,
                s = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function() {
                var e = t(this),
                    i = e.uniqueId().attr("id"),
                    n = e.next(),
                    s = n.uniqueId().attr("id");
                e.attr("aria-controls", s), n.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }).next().attr({ "aria-hidden": "true" }).hide(), this.active.length ? this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }).next().attr({ "aria-hidden": "false" }) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === n ? (e = s.height(), this.element.siblings(":visible").each(function() {
                var i = t(this),
                    n = i.css("position");
                "absolute" !== n && "fixed" !== n && (e -= i.outerHeight(!0))
            }), this.headers.each(function() { e -= t(this).outerHeight(!0) }), this.headers.next().each(function() { t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === n && (e = 0, this.headers.next().each(function() {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function(e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return "number" == typeof e ? this.headers.eq(e) : t() },
        _setupEvents: function(e) {
            var i = { keydown: "_keydown" };
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), { keydown: "_panelKeyDown" }), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function(e) {
            var i, n, s = this.options,
                o = this.active,
                a = t(e.currentTarget),
                r = a[0] === o[0],
                l = r && s.collapsible,
                h = l ? t() : a.next(),
                c = o.next(),
                u = { oldHeader: o, oldPanel: c, newHeader: l ? t() : a, newPanel: h };
            e.preventDefault(), r && !s.collapsible || !1 === this._trigger("beforeActivate", e, u) || (s.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(u), this._removeClass(o, "ui-accordion-header-active", "ui-state-active"), s.icons && (i = o.children(".ui-accordion-header-icon"), this._removeClass(i, null, s.icons.activeHeader)._addClass(i, null, s.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), s.icons && (n = a.children(".ui-accordion-header-icon"), this._removeClass(n, null, s.icons.header)._addClass(n, null, s.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function(e) {
            var i = e.newPanel,
                n = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = n, this.options.animate ? this._animate(i, n, e) : (n.hide(), i.show(), this._toggleComplete(e)), n.attr({ "aria-hidden": "true" }), n.prev().attr({ "aria-selected": "false", "aria-expanded": "false" }), i.length && n.length ? n.prev().attr({ tabIndex: -1, "aria-expanded": "false" }) : i.length && this.headers.filter(function() { return 0 === parseInt(t(this).attr("tabIndex"), 10) }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _animate: function(t, e, i) {
            var n, s, o, a = this,
                r = 0,
                l = t.css("box-sizing"),
                h = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {},
                u = h && c.down || c,
                d = function() { a._toggleComplete(i) };
            return "number" == typeof u && (o = u), "string" == typeof u && (s = u), s = s || u.easing || c.easing, o = o || u.duration || c.duration, e.length ? t.length ? (n = t.show().outerHeight(), e.animate(this.hideProps, { duration: o, easing: s, step: function(t, e) { e.now = Math.round(t) } }), void t.hide().animate(this.showProps, { duration: o, easing: s, complete: d, step: function(t, i) { i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(n - e.outerHeight() - r), r = 0) } })) : e.animate(this.hideProps, o, s, d) : t.animate(this.showProps, o, s, d)
        },
        _toggleComplete: function(t) {
            var e = t.oldPanel,
                i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.ui.safeActiveElement = function(t) { var e; try { e = t.activeElement } catch (i) { e = t.body } return e || (e = t.body), e.nodeName || (e = t.body), e }, t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: { icons: { submenu: "ui-icon-caret-1-e" }, items: "> *", menus: "ul", position: { my: "left top", at: "right top" }, role: "menu", blur: null, focus: null, select: null },
        _create: function() {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({ role: this.options.role, tabIndex: 0 }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function(t) { t.preventDefault() },
                "click .ui-menu-item": function(e) {
                    var i = t(e.target),
                        n = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && n.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                },
                "mouseenter .ui-menu-item": function(e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"),
                            n = t(e.currentTarget);
                        i[0] === n[0] && (this._removeClass(n.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, n))
                    }
                },
                mouseleave: "collapseAll",
                "mouseleave .ui-menu": "collapseAll",
                focus: function(t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                },
                blur: function(e) { this._delay(function() {!t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e) }) },
                keydown: "_keydown"
            }), this.refresh(), this._on(this.document, { click: function(t) { this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1 } })
        },
        _destroy: function() {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled"),
                i = e.children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), i.children().each(function() {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function(e) {
            var i, n, s, o, a = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, n = this.previousFilter || "", o = !1, s = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), s === n ? o = !0 : s = n + s, i = this._filterMenuItems(s), i = o && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i, i.length || (s = String.fromCharCode(e.keyCode), i = this._filterMenuItems(s)), i.length ? (this.focus(e, i), this.previousFilter = s, this.filterTimer = this._delay(function() { delete this.previousFilter }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function(t) { this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t)) },
        refresh: function() {
            var e, i, n, s, o, a = this,
                r = this.options.icons.submenu,
                l = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), n = l.filter(":not(.ui-menu)").hide().attr({ role: this.options.role, "aria-hidden": "true", "aria-expanded": "false" }).each(function() {
                var e = t(this),
                    i = e.prev(),
                    n = t("<span>").data("ui-menu-submenu-caret", !0);
                a._addClass(n, "ui-menu-icon", "ui-icon " + r), i.attr("aria-haspopup", "true").prepend(n), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(n, "ui-menu", "ui-widget ui-widget-content ui-front"), e = l.add(this.element), i = e.find(this.options.items), i.not(".ui-menu-item").each(function() {
                var e = t(this);
                a._isDivider(e) && a._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), s = i.not(".ui-menu-item, .ui-menu-divider"), o = s.children().not(".ui-menu").uniqueId().attr({ tabIndex: -1, role: this._itemRole() }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), i.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function() { return { menu: "menuitem", listbox: "option" }[this.options.role] },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t) },
        focus: function(t, e) {
            var i, n, s;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), n = this.active.children(".ui-menu-item-wrapper"), this._addClass(n, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", n.attr("id")), s = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function() { this._close() }, this.delay), i = e.children(".ui-menu"), i.length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, { item: e })
        },
        _scrollIntoView: function(e) {
            var i, n, s, o, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, n = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, s = e.offset().top - this.activeMenu.offset().top - i - n, o = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > s ? this.activeMenu.scrollTop(o + s) : s + r > a && this.activeMenu.scrollTop(o + s - a + r))
        },
        blur: function(t, e) { e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, { item: this.active }), this.active = null) },
        _startOpening: function(t) { clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function() { this._close(), this._open(t) }, this.delay)) },
        _open: function(e) {
            var i = t.extend({ of: this.active }, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function(e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function() {
                var n = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                n.length || (n = this.element), this._close(n), this.blur(e), this._removeClass(n.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = n
            }, this.delay)
        },
        _close: function(t) { t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false") },
        _closeOnDocumentClick: function(e) { return !t(e.target).closest(".ui-menu").length },
        _isDivider: function(t) { return !/[^\-\u2014\u2013\s]/.test(t.text()) },
        collapse: function(t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function(t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function() { this.focus(t, e) }))
        },
        next: function(t) { this._move("next", "first", t) },
        previous: function(t) { this._move("prev", "last", t) },
        isFirstItem: function() { return this.active && !this.active.prevAll(".ui-menu-item").length },
        isLastItem: function() { return this.active && !this.active.nextAll(".ui-menu-item").length },
        _move: function(t, e, i) {
            var n;
            this.active && (n = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), n && n.length && this.active || (n = this.activeMenu.find(this.options.items)[e]()), this.focus(i, n)
        },
        nextPage: function(e) { var i, n, s; return this.active ? void(this.isLastItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.nextAll(".ui-menu-item").each(function() { return i = t(this), 0 > i.offset().top - n - s }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e) },
        previousPage: function(e) { var i, n, s; return this.active ? void(this.isFirstItem() || (this._hasScroll() ? (n = this.active.offset().top, s = this.element.height(), this.active.prevAll(".ui-menu-item").each(function() { return i = t(this), i.offset().top - n + s > 0 }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e) },
        _hasScroll: function() { return this.element.outerHeight() < this.element.prop("scrollHeight") },
        select: function(e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = { item: this.active };
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function(e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"),
                n = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function() { return n.test(t.trim(t(this).children(".ui-menu-item-wrapper").text())) })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: { appendTo: null, autoFocus: !1, delay: 300, minLength: 1, position: { my: "left top", at: "left bottom", collision: "none" }, source: null, change: null, close: null, focus: null, open: null, response: null, search: null, select: null },
        requestIndex: 0,
        pending: 0,
        _create: function() {
            var e, i, n, s = this.element[0].nodeName.toLowerCase(),
                o = "textarea" === s,
                a = "input" === s;
            this.isMultiLine = o || !a && this._isContentEditable(this.element), this.valueMethod = this.element[o || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function(s) {
                    if (this.element.prop("readOnly")) return e = !0, n = !0, void(i = !0);
                    e = !1, n = !1, i = !1;
                    var o = t.ui.keyCode;
                    switch (s.keyCode) {
                        case o.PAGE_UP:
                            e = !0, this._move("previousPage", s);
                            break;
                        case o.PAGE_DOWN:
                            e = !0, this._move("nextPage", s);
                            break;
                        case o.UP:
                            e = !0, this._keyEvent("previous", s);
                            break;
                        case o.DOWN:
                            e = !0, this._keyEvent("next", s);
                            break;
                        case o.ENTER:
                            this.menu.active && (e = !0, s.preventDefault(), this.menu.select(s));
                            break;
                        case o.TAB:
                            this.menu.active && this.menu.select(s);
                            break;
                        case o.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(s), s.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(s)
                    }
                },
                keypress: function(n) {
                    if (e) return e = !1, void((!this.isMultiLine || this.menu.element.is(":visible")) && n.preventDefault());
                    if (!i) {
                        var s = t.ui.keyCode;
                        switch (n.keyCode) {
                            case s.PAGE_UP:
                                this._move("previousPage", n);
                                break;
                            case s.PAGE_DOWN:
                                this._move("nextPage", n);
                                break;
                            case s.UP:
                                this._keyEvent("previous", n);
                                break;
                            case s.DOWN:
                                this._keyEvent("next", n)
                        }
                    }
                },
                input: function(t) { return n ? (n = !1, void t.preventDefault()) : void this._searchTimeout(t) },
                focus: function() { this.selectedItem = null, this.previous = this._value() },
                blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t)) }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({ role: null }).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function(e) { e.preventDefault(), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus") }) },
                menufocus: function(e, i) { var n, s; return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function() { t(e.target).trigger(e.originalEvent) })) : (s = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, { item: s }) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(s.value), void((n = i.item.attr("aria-label") || s.value) && t.trim(n).length && (this.liveRegion.children().hide(), t("<div>").text(n).appendTo(this.liveRegion)))) },
                menuselect: function(e, i) {
                    var n = i.item.data("ui-autocomplete-item"),
                        s = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = s, this._delay(function() { this.previous = s, this.selectedItem = n })), !1 !== this._trigger("select", e, { item: n }) && this._value(n.value), this.term = this._value(), this.close(e), this.selectedItem = n
                }
            }), this.liveRegion = t("<div>", { role: "status", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } })
        },
        _destroy: function() { clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove() },
        _setOption: function(t, e) { this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort() },
        _isEventTargetInWidget: function(e) { var i = this.menu.element[0]; return e.target === this.element[0] || e.target === i || t.contains(i, e.target) },
        _closeOnClickOutside: function(t) { this._isEventTargetInWidget(t) || this.close() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _initSource: function() {
            var e, i, n = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function(i, n) { n(t.ui.autocomplete.filter(e, i.term)) }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function(e, s) { n.xhr && n.xhr.abort(), n.xhr = t.ajax({ url: i, data: e, dataType: "json", success: function(t) { s(t) }, error: function() { s([]) } }) }) : this.source = this.options.source
        },
        _searchTimeout: function(t) {
            clearTimeout(this.searching), this.searching = this._delay(function() {
                var e = this.term === this._value(),
                    i = this.menu.element.is(":visible"),
                    n = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !n) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function(t, e) { return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0 },
        _search: function(t) { this.pending++, this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({ term: t }, this._response()) },
        _response: function() { var e = ++this.requestIndex; return t.proxy(function(t) { e === this.requestIndex && this.__response(t), --this.pending || this._removeClass("ui-autocomplete-loading") }, this) },
        __response: function(t) { t && (t = this._normalize(t)), this._trigger("response", null, { content: t }), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close() },
        close: function(t) { this.cancelSearch = !0, this._close(t) },
        _close: function(t) { this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t)) },
        _change: function(t) { this.previous !== this._value() && this._trigger("change", t, { item: this.selectedItem }) },
        _normalize: function(e) { return e.length && e[0].label && e[0].value ? e : t.map(e, function(e) { return "string" == typeof e ? { label: e, value: e } : t.extend({}, e, { label: e.label || e.value, value: e.value || e.label }) }) },
        _suggest: function(e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({ of: this.element }, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, { mousedown: "_closeOnClickOutside" })
        },
        _resizeMenu: function() {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(e, i) {
            var n = this;
            t.each(i, function(t, i) { n._renderItemData(e, i) })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-autocomplete-item", e) },
        _renderItem: function(e, i) { return t("<li>").append(t("<div>").text(i.label)).appendTo(e) },
        _move: function(t, e) { return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e) },
        widget: function() { return this.menu.element },
        _value: function() { return this.valueMethod.apply(this.element, arguments) },
        _keyEvent: function(t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function(t) { if (!t.length) return !1; var e = t.prop("contentEditable"); return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e }
    }), t.extend(t.ui.autocomplete, { escapeRegex: function(t) { return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&") }, filter: function(e, i) { var n = RegExp(t.ui.autocomplete.escapeRegex(i), "i"); return t.grep(e, function(t) { return n.test(t.label || t.value || t) }) } }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: { messages: { noResults: "No search results.", results: function(t) { return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate." } } },
        __response: function(e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var f = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: { direction: "horizontal", disabled: null, onlyVisible: !0, items: { button: "input[type=button], input[type=submit], input[type=reset], button, a", controlgroupLabel: ".ui-controlgroup-label", checkboxradio: "input[type='checkbox'], input[type='radio']", selectmenu: "select", spinner: ".ui-spinner-input" } },
        _create: function() { this._enhance() },
        _enhance: function() { this.element.attr("role", "toolbar"), this.refresh() },
        _destroy: function() { this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap() },
        _initWidgets: function() {
            var e = this,
                i = [];
            t.each(this.options.items, function(n, s) {
                var o, a = {};
                return s ? "controlgroupLabel" === n ? (o = e.element.find(s), o.each(function() {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(o, null, "ui-widget ui-widget-content ui-state-default"), void(i = i.concat(o.get()))) : void(t.fn[n] && (a = e["_" + n + "Options"] ? e["_" + n + "Options"]("middle") : { classes: {} }, e.element.find(s).each(function() {
                    var s = t(this),
                        o = s[n]("instance"),
                        r = t.widget.extend({}, a);
                    if ("button" !== n || !s.parent(".ui-spinner").length) {
                        o || (o = s[n]()[n]("instance")), o && (r.classes = e._resolveClassesValues(r.classes, o)), s[n](r);
                        var l = s[n]("widget");
                        t.data(l[0], "ui-controlgroup-data", o || s[n]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function(e) {
            this.childWidgets.each(function() {
                var i = t(this),
                    n = i.data("ui-controlgroup-data");
                n && n[e] && n[e]()
            })
        },
        _updateCornerClass: function(t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function(t, e) {
            var i = "vertical" === this.options.direction,
                n = { classes: {} };
            return n.classes[e] = { middle: "", first: "ui-corner-" + (i ? "top" : "left"), last: "ui-corner-" + (i ? "bottom" : "right"), only: "ui-corner-all" }[t], n
        },
        _spinnerOptions: function(t) { var e = this._buildSimpleOptions(t, "ui-spinner"); return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e },
        _buttonOptions: function(t) { return this._buildSimpleOptions(t, "ui-button") },
        _checkboxradioOptions: function(t) { return this._buildSimpleOptions(t, "ui-checkboxradio-label") },
        _selectmenuOptions: function(t) { var e = "vertical" === this.options.direction; return { width: !!e && "auto", classes: { middle: { "ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": "" }, first: { "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"), "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left") }, last: { "ui-selectmenu-button-open": e ? "" : "ui-corner-tr", "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right") }, only: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" } }[t] } },
        _resolveClassesValues: function(e, i) {
            var n = {};
            return t.each(e, function(s) {
                var o = i.options.classes[s] || "";
                o = t.trim(o.replace(f, "")), n[s] = (o + " " + e[s]).replace(/\s+/g, " ")
            }), n
        },
        _setOption: function(t, e) { return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh() },
        refresh: function() {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function(t, n) {
                var s = e[n]().data("ui-controlgroup-data");
                if (s && i["_" + s.widgetName + "Options"]) {
                    var o = i["_" + s.widgetName + "Options"](1 === e.length ? "only" : n);
                    o.classes = i._resolveClassesValues(o.classes, s), s.element[s.widgetName](o)
                } else i._updateCornerClass(e[n](), n)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: { disabled: null, label: null, icon: !0, classes: { "ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all" } },
        _getCreateOptions: function() {
            var e, i, n = this,
                s = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function() { n.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML }), this.originalLabel && (s.label = this.originalLabel), e = this.element[0].disabled, null != e && (s.disabled = e), s
        },
        _create: function() {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({ change: "_toggleClasses", focus: function() { this._addClass(this.label, null, "ui-state-focus ui-visual-focus") }, blur: function() { this._removeClass(this.label, null, "ui-state-focus ui-visual-focus") } })
        },
        _readType: function() {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function() { this._updateIcon(this.element[0].checked) },
        widget: function() { return this.label },
        _getRadioGroup: function() {
            var e, i = this.element[0].name,
                n = "input[name='" + t.ui.escapeSelector(i) + "']";
            return i ? (e = this.form.length ? t(this.form[0].elements).filter(n) : t(n).filter(function() { return 0 === t(this).form().length }), e.not(this.element)) : t([])
        },
        _toggleClasses: function() {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function() {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function() { this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove()) },
        _setOption: function(t, e) { return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void(this.element[0].disabled = e)) : void this.refresh()) : void 0 },
        _updateIcon: function(e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function() {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function() {
            var t = this.element[0].checked,
                e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({ disabled: e })
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: { classes: { "ui-button": "ui-corner-all" }, disabled: null, icon: null, iconPosition: "beginning", label: null, showLabel: !0 },
        _getCreateOptions: function() { var t, e = this._super() || {}; return this.isInput = this.element.is("input"), t = this.element[0].disabled, null != t && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e },
        _create: function() {!this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({ keyup: function(e) { e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click")) } }) },
        _enhance: function() { this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip()) },
        _updateTooltip: function() { this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label) },
        _updateIcon: function(e, i) {
            var n = "iconPosition" !== e,
                s = n ? this.options.iconPosition : i,
                o = "top" === s || "bottom" === s;
            this.icon ? n && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), n && this._addClass(this.icon, null, i), this._attachIcon(s), o ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(s))
        },
        _destroy: function() { this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title") },
        _attachIconSpace: function(t) { this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace) },
        _attachIcon: function(t) { this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon) },
        _setOptions: function(t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function(t, e) { "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur()) },
        refresh: function() {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({ disabled: t }), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, { options: { text: !0, icons: { primary: null, secondary: null } }, _create: function() { this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super() }, _setOption: function(t, e) { return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments)) } }), t.fn.button = function(e) { return function() { return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? e.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({ icon: !1 }) : this.checkboxradio.apply(this, arguments)) } }(t.fn.button), t.fn.buttonset = function() { return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = { button: arguments[0].items }), this.controlgroup.apply(this, arguments)) }), t.ui.button, t.extend(t.ui, { datepicker: { version: "1.12.1" } });
    var g;
    t.extend(n.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function() { return this.dpDiv },
        setDefaults: function(t) { return a(this._defaults, t || {}), this },
        _attachDatepicker: function(e, i) {
            var n, s, o;
            n = e.nodeName.toLowerCase(), s = "div" === n || "span" === n, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), o = this._newInst(t(e), s), o.settings = t.extend({}, i || {}), "input" === n ? this._connectDatepicker(e, o) : s && this._inlineDatepicker(e, o)
        },
        _newInst: function(e, i) { return { id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"), input: e, selectedDay: 0, selectedMonth: 0, selectedYear: 0, drawMonth: 0, drawYear: 0, inline: i, dpDiv: i ? s(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv } },
        _connectDatepicker: function(e, i) {
            var n = t(e);
            i.append = t([]), i.trigger = t([]), n.hasClass(this.markerClassName) || (this._attachments(n, i), n.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function(e, i) {
            var n, s, o, a = this._get(i, "appendText"),
                r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), n = this._get(i, "showOn"), ("focus" === n || "both" === n) && e.on("focus", this._showDatepicker), ("button" === n || "both" === n) && (s = this._get(i, "buttonText"), o = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({ src: o, alt: s, title: s }) : t("<button type='button'></button>").addClass(this._triggerClass).html(o ? t("<img/>").attr({ src: o, alt: s, title: s }) : s)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function() { return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1 }))
        },
        _autoSize: function(t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, n, s, o = new Date(2009, 11, 20),
                    a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function(t) { for (i = 0, n = 0, s = 0; t.length > s; s++) t[s].length > i && (i = t[s].length, n = s); return n }, o.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), o.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - o.getDay())), t.input.attr("size", this._formatDate(t, o).length)
            }
        },
        _inlineDatepicker: function(e, i) {
            var n = t(e);
            n.hasClass(this.markerClassName) || (n.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function(e, i, n, s, o) { var r, l, h, c, u, d = this._dialogInst; return d || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), d = this._dialogInst = this._newInst(this._dialogInput, !1), d.settings = {}, t.data(this._dialogInput[0], "datepicker", d)), a(d.settings, s || {}), i = i && i.constructor === Date ? this._formatDate(d, i) : i, this._dialogInput.val(i), this._pos = o ? o.length ? o : [o.pageX, o.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, u = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + u]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), d.settings.onSelect = n, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", d), this },
        _destroyDatepicker: function(e) {
            var i, n = t(e),
                s = t.data(e, "datepicker");
            n.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (s.append.remove(), s.trigger.remove(), n.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && n.removeClass(this.markerClassName).empty(), g === s && (g = null))
        },
        _enableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !1, o.trigger.filter("button").each(function() { this.disabled = !1 }).end().filter("img").css({ opacity: "1.0", cursor: "" })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().removeClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }))
        },
        _disableDatepicker: function(e) {
            var i, n, s = t(e),
                o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), "input" === i ? (e.disabled = !0, o.trigger.filter("button").each(function() { this.disabled = !0 }).end().filter("img").css({ opacity: "0.5", cursor: "default" })) : ("div" === i || "span" === i) && (n = s.children("." + this._inlineClass), n.children().addClass("ui-state-disabled"), n.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function(t) { return t === e ? null : t }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function(t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++)
                if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function(e) { try { return t.data(e, "datepicker") } catch (t) { throw "Missing instance data for this datepicker" } },
        _optionDatepicker: function(e, i, n) { var s, o, r, l, h = this._getInst(e); return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (s = i || {}, "string" == typeof i && (s = {}, s[i] = n), void(h && (this._curInst === h && this._hideDatepicker(), o = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), a(h.settings, s), null !== r && void 0 !== s.dateFormat && void 0 === s.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== s.dateFormat && void 0 === s.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in s && (s.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, o), this._updateAlternate(h), this._updateDatepicker(h)))) },
        _changeDatepicker: function(t, e, i) { this._optionDatepicker(t, e, i) },
        _refreshDatepicker: function(t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function(t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function(t, e) { var i = this._getInst(t); return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null },
        _doKeyDown: function(e) {
            var i, n, s, o = t.datepicker._getInst(e.target),
                a = !0,
                r = o.dpDiv.is(".ui-datepicker-rtl");
            if (o._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return s = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", o.dpDiv), s[0] && t.datepicker._selectDay(e.target, o.selectedMonth, o.selectedYear, s[0]), i = t.datepicker._get(o, "onSelect"), i ? (n = t.datepicker._formatDate(o), i.apply(o.input ? o.input[0] : null, [n, o])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(o, "stepBigMonths") : -t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(o, "stepBigMonths") : +t.datepicker._get(o, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function(e) { var i, n, s = t.datepicker._getInst(e.target); return t.datepicker._get(s, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(s, "dateFormat")), n = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > n || !i || i.indexOf(n) > -1) : void 0 },
        _doKeyUp: function(e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try { t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i)) } catch (t) {}
            return !0
        },
        _showDatepicker: function(e) {
            if (e = e.target || e, "input" !== e.nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), !t.datepicker._isDisabledDatepicker(e) && t.datepicker._lastInput !== e) {
                var n, s, o, r, l, h, c;
                n = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== n && (t.datepicker._curInst.dpDiv.stop(!0, !0), n && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), s = t.datepicker._get(n, "beforeShow"), !1 !== (o = s ? s.apply(e, [e, n]) : {}) && (a(n.settings, o), n.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(n), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), r = !1, t(e).parents().each(function() { return !(r |= "fixed" === t(this).css("position")) }), l = { left: t.datepicker._pos[0], top: t.datepicker._pos[1] }, t.datepicker._pos = null, n.dpDiv.empty(), n.dpDiv.css({ position: "absolute", display: "block", top: "-1000px" }), t.datepicker._updateDatepicker(n), l = t.datepicker._checkOffset(n, l, r), n.dpDiv.css({ position: t.datepicker._inDialog && t.blockUI ? "static" : r ? "fixed" : "absolute", display: "none", left: l.left + "px", top: l.top + "px" }), n.inline || (h = t.datepicker._get(n, "showAnim"), c = t.datepicker._get(n, "duration"), n.dpDiv.css("z-index", i(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[h] ? n.dpDiv.show(h, t.datepicker._get(n, "showOptions"), c) : n.dpDiv[h || "show"](h ? c : null), t.datepicker._shouldFocusInput(n) && n.input.trigger("focus"), t.datepicker._curInst = n))
            }
        },
        _updateDatepicker: function(e) {
            this.maxRows = 4, g = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, n = this._getNumberOfMonths(e),
                s = n[1],
                a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && o.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), s > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + s).css("width", 17 * s + "em"), e.dpDiv[(1 !== n[0] || 1 !== n[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function() { i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null }, 0))
        },
        _shouldFocusInput: function(t) { return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus") },
        _checkOffset: function(e, i, n) {
            var s = e.dpDiv.outerWidth(),
                o = e.dpDiv.outerHeight(),
                a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (n ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (n ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? s - a : 0, i.left -= n && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= n && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + s > l && l > s ? Math.abs(i.left + s - l) : 0), i.top -= Math.min(i.top, i.top + o > h && h > o ? Math.abs(o + r) : 0), i
        },
        _findPos: function(e) { for (var i, n = this._getInst(e), s = this._get(n, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[s ? "previousSibling" : "nextSibling"]; return i = t(e).offset(), [i.left, i.top] },
        _hideDatepicker: function(e) {
            var i, n, s, o, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), n = this._get(a, "duration"), s = function() { t.datepicker._tidyDialog(a) }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), n, s) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? n : null, s), i || s(),
                this._datepickerShowing = !1, o = this._get(a, "onClose"), o && o.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({ position: "absolute", left: "0", top: "-100px" }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function(t) { t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar") },
        _checkExternalClick: function(e) {
            if (t.datepicker._curInst) {
                var i = t(e.target),
                    n = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== n) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            this._isDisabledDatepicker(s[0]) || (this._adjustInstDate(o, i + ("M" === n ? this._get(o, "showCurrentAtPos") : 0), n), this._updateDatepicker(o))
        },
        _gotoToday: function(e) {
            var i, n = t(e),
                s = this._getInst(n[0]);
            this._get(s, "gotoCurrent") && s.currentDay ? (s.selectedDay = s.currentDay, s.drawMonth = s.selectedMonth = s.currentMonth, s.drawYear = s.selectedYear = s.currentYear) : (i = new Date, s.selectedDay = i.getDate(), s.drawMonth = s.selectedMonth = i.getMonth(), s.drawYear = s.selectedYear = i.getFullYear()), this._notifyChange(s), this._adjustDate(n)
        },
        _selectMonthYear: function(e, i, n) {
            var s = t(e),
                o = this._getInst(s[0]);
            o["selected" + ("M" === n ? "Month" : "Year")] = o["draw" + ("M" === n ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(o), this._adjustDate(s)
        },
        _selectDay: function(e, i, n, s) {
            var o, a = t(e);
            t(s).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || (o = this._getInst(a[0]), o.selectedDay = o.currentDay = t("a", s).html(), o.selectedMonth = o.currentMonth = i, o.selectedYear = o.currentYear = n, this._selectDate(e, this._formatDate(o, o.currentDay, o.currentMonth, o.currentYear)))
        },
        _clearDate: function(e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function(e, i) {
            var n, s = t(e),
                o = this._getInst(s[0]);
            i = null != i ? i : this._formatDate(o), o.input && o.input.val(i), this._updateAlternate(o), n = this._get(o, "onSelect"), n ? n.apply(o.input ? o.input[0] : null, [i, o]) : o.input && o.input.trigger("change"), o.inline ? this._updateDatepicker(o) : (this._hideDatepicker(), this._lastInput = o.input[0], "object" != typeof o.input[0] && o.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function(e) {
            var i, n, s, o = this._get(e, "altField");
            o && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), n = this._getDate(e), s = this.formatDate(i, n, this._getFormatConfig(e)), t(o).val(s))
        },
        noWeekends: function(t) { var e = t.getDay(); return [e > 0 && 6 > e, ""] },
        iso8601Week: function(t) { var e, i = new Date(t.getTime()); return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1 },
        parseDate: function(e, i, n) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var s, o, a, r, l = 0,
                h = (n ? n.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                u = (n ? n.dayNamesShort : null) || this._defaults.dayNamesShort,
                d = (n ? n.dayNames : null) || this._defaults.dayNames,
                p = (n ? n.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (n ? n.monthNames : null) || this._defaults.monthNames,
                g = -1,
                m = -1,
                v = -1,
                b = -1,
                y = !1,
                _ = function(t) { var i = e.length > s + 1 && e.charAt(s + 1) === t; return i && s++, i },
                w = function(t) {
                    var e = _(t),
                        n = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        s = "y" === t ? n : 1,
                        o = RegExp("^\\d{" + s + "," + n + "}"),
                        a = i.substring(l).match(o);
                    if (!a) throw "Missing number at position " + l;
                    return l += a[0].length, parseInt(a[0], 10)
                },
                x = function(e, n, s) {
                    var o = -1,
                        a = t.map(_(e) ? s : n, function(t, e) {
                            return [
                                [e, t]
                            ]
                        }).sort(function(t, e) { return -(t[1].length - e[1].length) });
                    if (t.each(a, function(t, e) { var n = e[1]; return i.substr(l, n.length).toLowerCase() === n.toLowerCase() ? (o = e[0], l += n.length, !1) : void 0 }), -1 !== o) return o + 1;
                    throw "Unknown name at position " + l
                },
                C = function() {
                    if (i.charAt(l) !== e.charAt(s)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (s = 0; e.length > s; s++)
                if (y) "'" !== e.charAt(s) || _("'") ? C() : y = !1;
                else switch (e.charAt(s)) {
                    case "d":
                        v = w("d");
                        break;
                    case "D":
                        x("D", u, d);
                        break;
                    case "o":
                        b = w("o");
                        break;
                    case "m":
                        m = w("m");
                        break;
                    case "M":
                        m = x("M", p, f);
                        break;
                    case "y":
                        g = w("y");
                        break;
                    case "@":
                        r = new Date(w("@")), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "!":
                        r = new Date((w("!") - this._ticksTo1970) / 1e4), g = r.getFullYear(), m = r.getMonth() + 1, v = r.getDate();
                        break;
                    case "'":
                        _("'") ? C() : y = !0;
                        break;
                    default:
                        C()
                }
            if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === g ? g = (new Date).getFullYear() : 100 > g && (g += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= g ? 0 : -100)), b > -1)
                for (m = 1, v = b; !((o = this._getDaysInMonth(g, m - 1)) >= v);) m++, v -= o;
            if (r = this._daylightSavingAdjust(new Date(g, m - 1, v)), r.getFullYear() !== g || r.getMonth() + 1 !== m || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function(t, e, i) {
            if (!e) return "";
            var n, s = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                o = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames,
                l = function(e) { var i = t.length > n + 1 && t.charAt(n + 1) === e; return i && n++, i },
                h = function(t, e, i) {
                    var n = "" + e;
                    if (l(t))
                        for (; i > n.length;) n = "0" + n;
                    return n
                },
                c = function(t, e, i, n) { return l(t) ? n[e] : i[e] },
                u = "",
                d = !1;
            if (e)
                for (n = 0; t.length > n; n++)
                    if (d) "'" !== t.charAt(n) || l("'") ? u += t.charAt(n) : d = !1;
                    else switch (t.charAt(n)) {
                        case "d":
                            u += h("d", e.getDate(), 2);
                            break;
                        case "D":
                            u += c("D", e.getDay(), s, o);
                            break;
                        case "o":
                            u += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                            break;
                        case "m":
                            u += h("m", e.getMonth() + 1, 2);
                            break;
                        case "M":
                            u += c("M", e.getMonth(), a, r);
                            break;
                        case "y":
                            u += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                            break;
                        case "@":
                            u += e.getTime();
                            break;
                        case "!":
                            u += 1e4 * e.getTime() + this._ticksTo1970;
                            break;
                        case "'":
                            l("'") ? u += "'" : d = !0;
                            break;
                        default:
                            u += t.charAt(n)
                    }
            return u
        },
        _possibleChars: function(t) {
            var e, i = "",
                n = !1,
                s = function(i) { var n = t.length > e + 1 && t.charAt(e + 1) === i; return n && e++, n };
            for (e = 0; t.length > e; e++)
                if (n) "'" !== t.charAt(e) || s("'") ? i += t.charAt(e) : n = !1;
                else switch (t.charAt(e)) {
                    case "d":
                    case "m":
                    case "y":
                    case "@":
                        i += "0123456789";
                        break;
                    case "D":
                    case "M":
                        return null;
                    case "'":
                        s("'") ? i += "'" : n = !0;
                        break;
                    default:
                        i += t.charAt(e)
                }
            return i
        },
        _get: function(t, e) { return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e] },
        _setDateFromField: function(t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"),
                    n = t.lastVal = t.input ? t.input.val() : null,
                    s = this._getDefaultDate(t),
                    o = s,
                    a = this._getFormatConfig(t);
                try { o = this.parseDate(i, n, a) || s } catch (t) { n = e ? "" : n } t.selectedDay = o.getDate(), t.drawMonth = t.selectedMonth = o.getMonth(), t.drawYear = t.selectedYear = o.getFullYear(), t.currentDay = n ? o.getDate() : 0, t.currentMonth = n ? o.getMonth() : 0, t.currentYear = n ? o.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function(t) { return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date)) },
        _determineDate: function(e, i, n) {
            var s = null == i || "" === i ? n : "string" == typeof i ? function(i) {
                try { return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e)) } catch (t) {}
                for (var n = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, s = n.getFullYear(), o = n.getMonth(), a = n.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            a += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            a += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o));
                            break;
                        case "y":
                        case "Y":
                            s += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(s, o))
                    }
                    l = r.exec(i)
                }
                return new Date(s, o, a)
            }(i) : "number" == typeof i ? isNaN(i) ? n : function(t) { var e = new Date; return e.setDate(e.getDate() + t), e }(i) : new Date(i.getTime());
            return s = s && "Invalid Date" == "" + s ? n : s, s && (s.setHours(0), s.setMinutes(0), s.setSeconds(0), s.setMilliseconds(0)), this._daylightSavingAdjust(s)
        },
        _daylightSavingAdjust: function(t) { return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null },
        _setDate: function(t, e, i) {
            var n = !e,
                s = t.selectedMonth,
                o = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), s === t.selectedMonth && o === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(n ? "" : this._formatDate(t))
        },
        _getDate: function(t) { return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)) },
        _attachHandlers: function(e) {
            var i = this._get(e, "stepMonths"),
                n = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function() {
                var e = { prev: function() { t.datepicker._adjustDate(n, -i, "M") }, next: function() { t.datepicker._adjustDate(n, +i, "M") }, hide: function() { t.datepicker._hideDatepicker() }, today: function() { t.datepicker._gotoToday(n) }, selectDay: function() { return t.datepicker._selectDay(n, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1 }, selectMonth: function() { return t.datepicker._selectMonthYear(n, this, "M"), !1 }, selectYear: function() { return t.datepicker._selectMonthYear(n, this, "Y"), !1 } };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function(t) {
            var e, i, n, s, o, a, r, l, h, c, u, d, p, f, g, m, v, b, y, _, w, x, C, k, T, z, D, S, I, P, W, O, E, H, M, A, L, N, F, j = new Date,
                R = this._daylightSavingAdjust(new Date(j.getFullYear(), j.getMonth(), j.getDate())),
                B = this._get(t, "isRTL"),
                $ = this._get(t, "showButtonPanel"),
                q = this._get(t, "hideIfNoPrevNext"),
                Y = this._get(t, "navigationAsDateFormat"),
                X = this._getNumberOfMonths(t),
                U = this._get(t, "showCurrentAtPos"),
                K = this._get(t, "stepMonths"),
                V = 1 !== X[0] || 1 !== X[1],
                Z = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Q = this._getMinMaxDate(t, "min"),
                G = this._getMinMaxDate(t, "max"),
                J = t.drawMonth - U,
                tt = t.drawYear;
            if (0 > J && (J += 12, tt--), G)
                for (e = this._daylightSavingAdjust(new Date(G.getFullYear(), G.getMonth() - X[0] * X[1] + 1, G.getDate())), e = Q && Q > e ? Q : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) 0 > --J && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = Y ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - K, 1)), this._getFormatConfig(t)) : i, n = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>" : q ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "e" : "w") + "'>" + i + "</span></a>", s = this._get(t, "nextText"), s = Y ? this.formatDate(s, this._daylightSavingAdjust(new Date(tt, J + K, 1)), this._getFormatConfig(t)) : s, o = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>" : q ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + s + "'><span class='ui-icon ui-icon-circle-triangle-" + (B ? "w" : "e") + "'>" + s + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? Z : R, a = Y ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = $ ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (B ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (B ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, u = this._get(t, "showWeek"), d = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), g = this._get(t, "monthNamesShort"), m = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), b = this._get(t, "selectOtherMonths"), y = this._getDefaultDate(t), _ = "", x = 0; X[0] > x; x++) {
                for (C = "", this.maxRows = 4, k = 0; X[1] > k; k++) {
                    if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), z = " ui-corner-all", D = "", V) {
                        if (D += "<div class='ui-datepicker-group", X[1] > 1) switch (k) {
                            case 0:
                                D += " ui-datepicker-group-first", z = " ui-corner-" + (B ? "right" : "left");
                                break;
                            case X[1] - 1:
                                D += " ui-datepicker-group-last", z = " ui-corner-" + (B ? "left" : "right");
                                break;
                            default:
                                D += " ui-datepicker-group-middle", z = ""
                        }
                        D += "'>"
                    }
                    for (D += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + z + "'>" + (/all|left/.test(z) && 0 === x ? B ? o : n : "") + (/all|right/.test(z) && 0 === x ? B ? n : o : "") + this._generateMonthYearHeader(t, J, tt, Q, G, x > 0 || k > 0, f, g) + "</div><table class='ui-datepicker-calendar'><thead><tr>", S = u ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", w = 0; 7 > w; w++) I = (w + c) % 7, S += "<th scope='col'" + ((w + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + d[I] + "'>" + p[I] + "</span></th>";
                    for (D += S + "</tr></thead><tbody>", P = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, P)), W = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, O = Math.ceil((W + P) / 7), E = V && this.maxRows > O ? this.maxRows : O, this.maxRows = E, H = this._daylightSavingAdjust(new Date(tt, J, 1 - W)), M = 0; E > M; M++) {
                        for (D += "<tr>", A = u ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(H) + "</td>" : "", w = 0; 7 > w; w++) L = m ? m.apply(t.input ? t.input[0] : null, [H]) : [!0, ""], N = H.getMonth() !== J, F = N && !b || !L[0] || Q && Q > H || G && H > G, A += "<td class='" + ((w + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + (N ? " ui-datepicker-other-month" : "") + (H.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || y.getTime() === H.getTime() && y.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + (N && !v ? "" : " " + L[1] + (H.getTime() === Z.getTime() ? " " + this._currentClass : "") + (H.getTime() === R.getTime() ? " ui-datepicker-today" : "")) + "'" + (N && !v || !L[2] ? "" : " title='" + L[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + H.getMonth() + "' data-year='" + H.getFullYear() + "'") + ">" + (N && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + H.getDate() + "</span>" : "<a class='ui-state-default" + (H.getTime() === R.getTime() ? " ui-state-highlight" : "") + (H.getTime() === Z.getTime() ? " ui-state-active" : "") + (N ? " ui-priority-secondary" : "") + "' href='#'>" + H.getDate() + "</a>") + "</td>", H.setDate(H.getDate() + 1), H = this._daylightSavingAdjust(H);
                        D += A + "</tr>"
                    }
                    J++, J > 11 && (J = 0, tt++), D += "</tbody></table>" + (V ? "</div>" + (X[0] > 0 && k === X[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : ""), C += D
                }
                _ += C
            }
            return _ += h, t._keyEvent = !1, _
        },
        _generateMonthYearHeader: function(t, e, i, n, s, o, a, r) {
            var l, h, c, u, d, p, f, g, m = this._get(t, "changeMonth"),
                v = this._get(t, "changeYear"),
                b = this._get(t, "showMonthAfterYear"),
                y = "<div class='ui-datepicker-title'>",
                _ = "";
            if (o || !m) _ += "<span class='ui-datepicker-month'>" + a[e] + "</span>";
            else {
                for (l = n && n.getFullYear() === i, h = s && s.getFullYear() === i, _ += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++)(!l || c >= n.getMonth()) && (!h || s.getMonth() >= c) && (_ += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                _ += "</select>"
            }
            if (b || (y += _ + (!o && m && v ? "" : "&#xa0;")), !t.yearshtml)
                if (t.yearshtml = "", o || !v) y += "<span class='ui-datepicker-year'>" + i + "</span>";
                else {
                    for (u = this._get(t, "yearRange").split(":"), d = (new Date).getFullYear(), p = function(t) { var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? d + parseInt(t, 10) : parseInt(t, 10); return isNaN(e) ? d : e }, f = p(u[0]), g = Math.max(f, p(u[1] || "")), f = n ? Math.max(f, n.getFullYear()) : f, g = s ? Math.min(g, s.getFullYear()) : g, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; g >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                    t.yearshtml += "</select>", y += t.yearshtml, t.yearshtml = null
                }
            return y += this._get(t, "yearSuffix"), b && (y += (!o && m && v ? "" : "&#xa0;") + _), y += "</div>"
        },
        _adjustInstDate: function(t, e, i) {
            var n = t.selectedYear + ("Y" === i ? e : 0),
                s = t.selectedMonth + ("M" === i ? e : 0),
                o = Math.min(t.selectedDay, this._getDaysInMonth(n, s)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(n, s, o)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function(t, e) {
            var i = this._getMinMaxDate(t, "min"),
                n = this._getMinMaxDate(t, "max"),
                s = i && i > e ? i : e;
            return n && s > n ? n : s
        },
        _notifyChange: function(t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function(t) { var e = this._get(t, "numberOfMonths"); return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e },
        _getMinMaxDate: function(t, e) { return this._determineDate(t, this._get(t, e + "Date"), null) },
        _getDaysInMonth: function(t, e) { return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate() },
        _getFirstDayOfMonth: function(t, e) { return new Date(t, e, 1).getDay() },
        _canAdjustMonth: function(t, e, i, n) {
            var s = this._getNumberOfMonths(t),
                o = this._daylightSavingAdjust(new Date(i, n + (0 > e ? e : s[0] * s[1]), 1));
            return 0 > e && o.setDate(this._getDaysInMonth(o.getFullYear(), o.getMonth())), this._isInRange(t, o)
        },
        _isInRange: function(t, e) {
            var i, n, s = this._getMinMaxDate(t, "min"),
                o = this._getMinMaxDate(t, "max"),
                a = null,
                r = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), n = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += n), i[1].match(/[+\-].*/) && (r += n)), (!s || e.getTime() >= s.getTime()) && (!o || e.getTime() <= o.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function(t) { var e = this._get(t, "shortYearCutoff"); return e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10), { shortYearCutoff: e, dayNamesShort: this._get(t, "dayNamesShort"), dayNames: this._get(t, "dayNames"), monthNamesShort: this._get(t, "monthNamesShort"), monthNames: this._get(t, "monthNames") } },
        _formatDate: function(t, e, i, n) { e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear); var s = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(n, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay)); return this.formatDate(this._get(t, "dateFormat"), s, this._getFormatConfig(t)) }
    }), t.fn.datepicker = function(e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function() { "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e) }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new n, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var m = !1;
    t(document).on("mouseup", function() { m = !1 }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: { cancel: "input, textarea, button, select, option", distance: 1, delay: 0 },
        _mouseInit: function() {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function(t) { return e._mouseDown(t) }).on("click." + this.widgetName, function(i) { return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0 }), this.started = !1
        },
        _mouseDestroy: function() { this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate) },
        _mouseDown: function(e) {
            if (!m) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this,
                    n = 1 === e.which,
                    s = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(n && !s && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() { i.mouseDelayMet = !0 }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(t) { return i._mouseMove(t) }, this._mouseUpDelegate = function(t) { return i._mouseUp(t) }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), m = !0, !0))
            }
        },
        _mouseMove: function(e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which)
                    if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0;
                    else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function(e) { this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, m = !1, e.preventDefault() },
        _mouseDistanceMet: function(t) { return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance },
        _mouseDelayMet: function() { return this.mouseDelayMet },
        _mouseStart: function() {},
        _mouseDrag: function() {},
        _mouseStop: function() {},
        _mouseCapture: function() { return !0 }
    }), t.ui.plugin = {
        add: function(e, i, n) { var s, o = t.ui[e].prototype; for (s in n) o.plugins[s] = o.plugins[s] || [], o.plugins[s].push([i, n[s]]) },
        call: function(t, e, i, n) {
            var s, o = t.plugins[e];
            if (o && (n || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType))
                for (s = 0; o.length > s; s++) t.options[o[s][0]] && o[s][1].apply(t.element, i)
        }
    }, t.ui.safeBlur = function(e) { e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur") }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: { addClasses: !0, appendTo: "parent", axis: !1, connectToSortable: !1, containment: !1, cursor: "auto", cursorAt: !1, grid: !1, handle: !1, helper: "original", iframeFix: !1, opacity: !1, refreshPositions: !1, revert: !1, revertDuration: 500, scope: "default", scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, snap: !1, snapMode: "both", snapTolerance: 20, stack: !1, zIndex: !1, drag: null, start: null, stop: null },
        _create: function() { "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit() },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName()) },
        _destroy: function() { return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy()) },
        _mouseCapture: function(e) { var i = this.options; return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0)) },
        _blockFrames: function(e) { this.iframeBlocks = this.document.find(e).map(function() { var e = t(this); return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _blurActiveElement: function(e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function(e) { var i = this.options; return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() { return "fixed" === t(this).css("position") }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0) },
        _refreshOffsets: function(t) { this.offset = { top: this.positionAbs.top - this.margins.top, left: this.positionAbs.left - this.margins.left, scroll: !1, parent: this._getParentOffset(), relative: this._getRelativeOffset() }, this.offset.click = { left: t.pageX - this.offset.left, top: t.pageY - this.offset.top } },
        _mouseDrag: function(e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var n = this._uiHash();
                if (!1 === this._trigger("drag", e, n)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = n.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function(e) {
            var i = this,
                n = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (n = t.ui.ddmanager.drop(this, e)), this.dropped && (n = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !n || "valid" === this.options.revert && n || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, n) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {!1 !== i._trigger("stop", e) && i._clear() }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function(e) { return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e) },
        cancel: function() { return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", { target: this.element[0] })) : this._clear(), this },
        _getHandle: function(e) { return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length },
        _setHandleClassName: function() { this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle") },
        _removeHandleClassName: function() { this._removeClass(this.handleElement, "ui-draggable-handle") },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper),
                s = n ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return s.parents("body").length || s.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), n && s[0] === this.element[0] && this._setPositionRelative(), s[0] === this.element[0] || /(fixed|absolute)/.test(s.css("position")) || s.css("position", "absolute"), s
        },
        _setPositionRelative: function() { /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative") },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _isRootNode: function(t) { return /(html|body)/i.test(t.tagName) || t === this.document[0] },
        _getParentOffset: function() {
            var e = this.offsetParent.offset(),
                i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) }
        },
        _getRelativeOffset: function() {
            if ("relative" !== this.cssPosition) return { top: 0, left: 0 };
            var t = this.element.position(),
                e = this._isRootNode(this.scrollParent[0]);
            return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft()) }
        },
        _cacheMargins: function() { this.margins = { left: parseInt(this.element.css("marginLeft"), 10) || 0, top: parseInt(this.element.css("marginTop"), 10) || 0, right: parseInt(this.element.css("marginRight"), 10) || 0, bottom: parseInt(this.element.css("marginBottom"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() {
            var e, i, n, s = this.options,
                o = this.document[0];
            return this.relativeContainer = null, s.containment ? "window" === s.containment ? void(this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === s.containment ? void(this.containment = [0, 0, t(o).width() - this.helperProportions.width - this.margins.left, (t(o).height() || o.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : s.containment.constructor === Array ? void(this.containment = s.containment) : ("parent" === s.containment && (s.containment = this.helper[0].parentNode), i = t(s.containment), void((n = i[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(n.scrollWidth, n.offsetWidth) : n.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(n.scrollHeight, n.offsetHeight) : n.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
        },
        _convertPositionTo: function(t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1,
                n = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : n ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : n ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function(t, e) {
            var i, n, s, o, a = this.options,
                r = this._isRootNode(this.scrollParent[0]),
                l = t.pageX,
                h = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = { top: this.scrollParent.scrollTop(), left: this.scrollParent.scrollLeft() }), e && (this.containment && (this.relativeContainer ? (n = this.relativeContainer.offset(), i = [this.containment[0] + n.left, this.containment[1] + n.top, this.containment[2] + n.left, this.containment[3] + n.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (s = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? s - this.offset.click.top >= i[1] || s - this.offset.click.top > i[3] ? s : s - this.offset.click.top >= i[1] ? s - a.grid[1] : s + a.grid[1] : s, o = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? o - this.offset.click.left >= i[0] || o - this.offset.click.left > i[2] ? o : o - this.offset.click.left >= i[0] ? o - a.grid[0] : o + a.grid[0] : o), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), { top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top), left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left) }
        },
        _clear: function() { this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy() },
        _trigger: function(e, i, n) { return n = n || this._uiHash(), t.ui.plugin.call(this, e, [i, n, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), n.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, n) },
        plugins: {},
        _uiHash: function() { return { helper: this.helper, position: this.position, originalPosition: this.originalPosition, offset: this.positionAbs } }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function(e, i, n) {
            var s = t.extend({}, i, { item: n.element });
            n.sortables = [], t(n.options.connectToSortable).each(function() {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (n.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, s))
            })
        },
        stop: function(e, i, n) {
            var s = t.extend({}, i, { item: n.element });
            n.cancelHelperRemoval = !1, t.each(n.sortables, function() {
                var t = this;
                t.isOver ? (t.isOver = 0, n.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = { position: t.placeholder.css("position"), top: t.placeholder.css("top"), left: t.placeholder.css("left") }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, s))
            })
        },
        drag: function(e, i, n) {
            t.each(n.sortables, function() {
                var s = !1,
                    o = this;
                o.positionAbs = n.positionAbs, o.helperProportions = n.helperProportions, o.offset.click = n.offset.click, o._intersectsWith(o.containerCache) && (s = !0, t.each(n.sortables, function() { return this.positionAbs = n.positionAbs, this.helperProportions = n.helperProportions, this.offset.click = n.offset.click, this !== o && this._intersectsWith(this.containerCache) && t.contains(o.element[0], this.element[0]) && (s = !1), s })), s ? (o.isOver || (o.isOver = 1, n._parent = i.helper.parent(), o.currentItem = i.helper.appendTo(o.element).data("ui-sortable-item", !0), o.options._helper = o.options.helper, o.options.helper = function() { return i.helper[0] }, e.target = o.currentItem[0], o._mouseCapture(e, !0), o._mouseStart(e, !0, !0), o.offset.click.top = n.offset.click.top, o.offset.click.left = n.offset.click.left, o.offset.parent.left -= n.offset.parent.left - o.offset.parent.left, o.offset.parent.top -= n.offset.parent.top - o.offset.parent.top, n._trigger("toSortable", e), n.dropped = o.element, t.each(n.sortables, function() { this.refreshPositions() }), n.currentItem = n.element, o.fromOutside = n), o.currentItem && (o._mouseDrag(e), i.position = o.position)) : o.isOver && (o.isOver = 0, o.cancelHelperRemoval = !0, o.options._revert = o.options.revert, o.options.revert = !1, o._trigger("out", e, o._uiHash(o)), o._mouseStop(e, !0), o.options.revert = o.options._revert, o.options.helper = o.options._helper, o.placeholder && o.placeholder.remove(), i.helper.appendTo(n._parent), n._refreshOffsets(e), i.position = n._generatePosition(e, !0), n._trigger("fromSortable", e), n.dropped = !1, t.each(n.sortables, function() { this.refreshPositions() }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function(e, i, n) {
            var s = t("body"),
                o = n.options;
            s.css("cursor") && (o._cursor = s.css("cursor")), s.css("cursor", o.cursor)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._cursor && t("body").css("cursor", s._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("opacity") && (o._opacity = s.css("opacity")), s.css("opacity", o.opacity)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._opacity && t(i.helper).css("opacity", s._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function(t, e, i) { i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset()) },
        drag: function(e, i, n) {
            var s = n.options,
                o = !1,
                a = n.scrollParentNotHidden[0],
                r = n.document[0];
            a !== r && "HTML" !== a.tagName ? (s.axis && "x" === s.axis || (n.overflowOffset.top + a.offsetHeight - e.pageY < s.scrollSensitivity ? a.scrollTop = o = a.scrollTop + s.scrollSpeed : e.pageY - n.overflowOffset.top < s.scrollSensitivity && (a.scrollTop = o = a.scrollTop - s.scrollSpeed)), s.axis && "y" === s.axis || (n.overflowOffset.left + a.offsetWidth - e.pageX < s.scrollSensitivity ? a.scrollLeft = o = a.scrollLeft + s.scrollSpeed : e.pageX - n.overflowOffset.left < s.scrollSensitivity && (a.scrollLeft = o = a.scrollLeft - s.scrollSpeed))) : (s.axis && "x" === s.axis || (e.pageY - t(r).scrollTop() < s.scrollSensitivity ? o = t(r).scrollTop(t(r).scrollTop() - s.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < s.scrollSensitivity && (o = t(r).scrollTop(t(r).scrollTop() + s.scrollSpeed))), s.axis && "y" === s.axis || (e.pageX - t(r).scrollLeft() < s.scrollSensitivity ? o = t(r).scrollLeft(t(r).scrollLeft() - s.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < s.scrollSensitivity && (o = t(r).scrollLeft(t(r).scrollLeft() + s.scrollSpeed)))), !1 !== o && t.ui.ddmanager && !s.dropBehaviour && t.ui.ddmanager.prepareOffsets(n, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function(e, i, n) {
            var s = n.options;
            n.snapElements = [], t(s.snap.constructor !== String ? s.snap.items || ":data(ui-draggable)" : s.snap).each(function() {
                var e = t(this),
                    i = e.offset();
                this !== n.element[0] && n.snapElements.push({ item: this, width: e.outerWidth(), height: e.outerHeight(), top: i.top, left: i.left })
            })
        },
        drag: function(e, i, n) {
            var s, o, a, r, l, h, c, u, d, p, f = n.options,
                g = f.snapTolerance,
                m = i.offset.left,
                v = m + n.helperProportions.width,
                b = i.offset.top,
                y = b + n.helperProportions.height;
            for (d = n.snapElements.length - 1; d >= 0; d--) l = n.snapElements[d].left - n.margins.left, h = l + n.snapElements[d].width, c = n.snapElements[d].top - n.margins.top, u = c + n.snapElements[d].height, l - g > v || m > h + g || c - g > y || b > u + g || !t.contains(n.snapElements[d].item.ownerDocument, n.snapElements[d].item) ? (n.snapElements[d].snapping && n.options.snap.release && n.options.snap.release.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = !1) : ("inner" !== f.snapMode && (s = g >= Math.abs(c - y), o = g >= Math.abs(u - b), a = g >= Math.abs(l - v), r = g >= Math.abs(h - m), s && (i.position.top = n._convertPositionTo("relative", { top: c - n.helperProportions.height, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: u, left: 0 }).top), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l - n.helperProportions.width }).left), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: h }).left)), p = s || o || a || r, "outer" !== f.snapMode && (s = g >= Math.abs(c - b), o = g >= Math.abs(u - y), a = g >= Math.abs(l - m), r = g >= Math.abs(h - v), s && (i.position.top = n._convertPositionTo("relative", { top: c, left: 0 }).top), o && (i.position.top = n._convertPositionTo("relative", { top: u - n.helperProportions.height, left: 0 }).top), a && (i.position.left = n._convertPositionTo("relative", { top: 0, left: l }).left), r && (i.position.left = n._convertPositionTo("relative", { top: 0, left: h - n.helperProportions.width }).left)), !n.snapElements[d].snapping && (s || o || a || r || p) && n.options.snap.snap && n.options.snap.snap.call(n.element, e, t.extend(n._uiHash(), { snapItem: n.snapElements[d].item })), n.snapElements[d].snapping = s || o || a || r || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function(e, i, n) {
            var s, o = n.options,
                a = t.makeArray(t(o.stack)).sort(function(e, i) { return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0) });
            a.length && (s = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function(e) { t(this).css("zIndex", s + e) }), this.css("zIndex", s + a.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function(e, i, n) {
            var s = t(i.helper),
                o = n.options;
            s.css("zIndex") && (o._zIndex = s.css("zIndex")), s.css("zIndex", o.zIndex)
        },
        stop: function(e, i, n) {
            var s = n.options;
            s._zIndex && t(i.helper).css("zIndex", s._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: { alsoResize: !1, animate: !1, animateDuration: "slow", animateEasing: "swing", aspectRatio: !1, autoHide: !1, classes: { "ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se" }, containment: !1, ghost: !1, grid: !1, handles: "e,s,se", helper: !1, maxHeight: null, maxWidth: null, minHeight: 10, minWidth: 10, zIndex: 90, resize: null, start: null, stop: null },
        _num: function(t) { return parseFloat(t) || 0 },
        _isNumber: function(t) { return !isNaN(parseFloat(t)) },
        _hasScroll: function(e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var n = i && "left" === i ? "scrollLeft" : "scrollTop",
                s = !1;
            return e[n] > 0 || (e[n] = 1, s = e[n] > 0, e[n] = 0, s)
        },
        _create: function() {
            var e, i = this.options,
                n = this;
            this._addClass("ui-resizable"), t.extend(this, { _aspectRatio: !!i.aspectRatio, aspectRatio: i.aspectRatio, originalElement: this.element, _proportionallyResizeElements: [], _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({ position: this.element.css("position"), width: this.element.outerWidth(), height: this.element.outerHeight(), top: this.element.css("top"), left: this.element.css("left") })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = { marginTop: this.originalElement.css("marginTop"), marginRight: this.originalElement.css("marginRight"), marginBottom: this.originalElement.css("marginBottom"), marginLeft: this.originalElement.css("marginLeft") }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({ position: "static", zoom: 1, display: "block" })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function() { i.disabled || (n._removeClass("ui-resizable-autohide"), n._handles.show()) }).on("mouseleave", function() { i.disabled || n.resizing || (n._addClass("ui-resizable-autohide"), n._handles.hide()) }), this._mouseInit()
        },
        _destroy: function() { this._mouseDestroy(); var e, i = function(e) { t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove() }; return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({ position: e.css("position"), width: e.outerWidth(), height: e.outerHeight(), top: e.css("top"), left: e.css("left") }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this },
        _setOption: function(t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function() {
            var e, i, n, s, o, a = this.options,
                r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? { n: ".ui-resizable-n", e: ".ui-resizable-e", s: ".ui-resizable-s", w: ".ui-resizable-w", se: ".ui-resizable-se", sw: ".ui-resizable-sw", ne: ".ui-resizable-ne", nw: ".ui-resizable-nw" } : "e,s,se"), this._handles = t(), this.handles.constructor === String)
                for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), n = this.handles.split(","), this.handles = {}, i = 0; n.length > i; i++) e = t.trim(n[i]), s = "ui-resizable-" + e, o = t("<div>"), this._addClass(o, "ui-resizable-handle " + s), o.css({ zIndex: a.zIndex }), this.handles[e] = ".ui-resizable-" + e, this.element.append(o);
            this._renderAxis = function(e) {
                var i, n, s, o;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], { mousedown: r._mouseDown })), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (n = t(this.handles[i], this.element), o = /sw|ne|nw|se|n|s/.test(i) ? n.outerHeight() : n.outerWidth(), s = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(s, o), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function() { r.resizing || (this.className && (o = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = o && o[1] ? o[1] : "se") }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function() { this._handles.remove() },
        _mouseCapture: function(e) { var i, n, s = !1; for (i in this.handles)((n = t(this.handles[i])[0]) === e.target || t.contains(n, e.target)) && (s = !0); return !this.options.disabled && s },
        _mouseStart: function(e) {
            var i, n, s, o = this.options,
                a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), n = this._num(this.helper.css("top")), o.containment && (i += t(o.containment).scrollLeft() || 0, n += t(o.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = { left: i, top: n }, this.size = this._helper ? { width: this.helper.width(), height: this.helper.height() } : { width: a.width(), height: a.height() }, this.originalSize = this._helper ? { width: a.outerWidth(), height: a.outerHeight() } : { width: a.width(), height: a.height() }, this.sizeDiff = { width: a.outerWidth() - a.width(), height: a.outerHeight() - a.height() }, this.originalPosition = { left: i, top: n }, this.originalMousePosition = { left: e.pageX, top: e.pageY }, this.aspectRatio = "number" == typeof o.aspectRatio ? o.aspectRatio : this.originalSize.width / this.originalSize.height || 1, s = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === s ? this.axis + "-resize" : s), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s = this.originalMousePosition,
                o = this.axis,
                a = e.pageX - s.left || 0,
                r = e.pageY - s.top || 0,
                l = this._change[o];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), n = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(n) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function(e) {
            this.resizing = !1;
            var i, n, s, o, a, r, l, h = this.options,
                c = this;
            return this._helper && (i = this._proportionallyResizeElements, n = i.length && /textarea/i.test(i[0].nodeName), s = n && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, o = n ? 0 : c.sizeDiff.width, a = { width: c.helper.width() - o, height: c.helper.height() - s }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, { top: l, left: r })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function() { this.prevPosition = { top: this.position.top, left: this.position.left }, this.prevSize = { width: this.size.width, height: this.size.height } },
        _applyChanges: function() { var t = {}; return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t },
        _updateVirtualBoundaries: function(t) {
            var e, i, n, s, o, a = this.options;
            o = { minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0, maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0, minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0, maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0 }, (this._aspectRatio || t) && (e = o.minHeight * this.aspectRatio, n = o.minWidth / this.aspectRatio, i = o.maxHeight * this.aspectRatio, s = o.maxWidth / this.aspectRatio, e > o.minWidth && (o.minWidth = e), n > o.minHeight && (o.minHeight = n), o.maxWidth > i && (o.maxWidth = i), o.maxHeight > s && (o.maxHeight = s)), this._vBoundaries = o
        },
        _updateCache: function(t) { this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width) },
        _updateRatio: function(t) {
            var e = this.position,
                i = this.size,
                n = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === n && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === n && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function(t) {
            var e = this._vBoundaries,
                i = this.axis,
                n = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                s = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                o = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height,
                h = /sw|nw|w/.test(i),
                c = /nw|ne|n/.test(i);
            return o && (t.width = e.minWidth), a && (t.height = e.minHeight), n && (t.width = e.maxWidth), s && (t.height = e.maxHeight), o && h && (t.left = r - e.minWidth), n && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), s && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function(t) { for (var e = 0, i = [], n = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], s = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(n[e]) || 0, i[e] += parseFloat(s[e]) || 0; return { height: i[0] + i[2], width: i[1] + i[3] } },
        _proportionallyResize: function() {
            if (this._proportionallyResizeElements.length)
                for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({ height: i.height() - this.outerDimensions.height || 0, width: i.width() - this.outerDimensions.width || 0 })
        },
        _renderProxy: function() {
            var e = this.element,
                i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({ width: this.element.outerWidth(), height: this.element.outerHeight(), position: "absolute", left: this.elementOffset.left + "px", top: this.elementOffset.top + "px", zIndex: ++i.zIndex }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: { e: function(t, e) { return { width: this.originalSize.width + e } }, w: function(t, e) { var i = this.originalSize; return { left: this.originalPosition.left + e, width: i.width - e } }, n: function(t, e, i) { var n = this.originalSize; return { top: this.originalPosition.top + i, height: n.height - i } }, s: function(t, e, i) { return { height: this.originalSize.height + i } }, se: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, sw: function(e, i, n) { return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, n])) }, ne: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, n])) }, nw: function(e, i, n) { return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, n])) } },
        _propagate: function(e, i) { t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui()) },
        plugins: {},
        ui: function() { return { originalElement: this.originalElement, element: this.element, helper: this.helper, position: this.position, size: this.size, originalSize: this.originalSize, originalPosition: this.originalPosition } }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function(e) {
            var i = t(this).resizable("instance"),
                n = i.options,
                s = i._proportionallyResizeElements,
                o = s.length && /textarea/i.test(s[0].nodeName),
                a = o && i._hasScroll(s[0], "left") ? 0 : i.sizeDiff.height,
                r = o ? 0 : i.sizeDiff.width,
                l = { width: i.size.width - r, height: i.size.height - a },
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? { top: c, left: h } : {}), {
                duration: n.animateDuration,
                easing: n.animateEasing,
                step: function() {
                    var n = { width: parseFloat(i.element.css("width")), height: parseFloat(i.element.css("height")), top: parseFloat(i.element.css("top")), left: parseFloat(i.element.css("left")) };
                    s && s.length && t(s[0]).css({ width: n.width, height: n.height }), i._updateCache(n), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function() {
            var e, i, n, s, o, a, r, l = t(this).resizable("instance"),
                h = l.options,
                c = l.element,
                u = h.containment,
                d = u instanceof t ? u.get(0) : /parent/.test(u) ? c.parent().get(0) : u;
            d && (l.containerElement = t(d), /document/.test(u) || u === document ? (l.containerOffset = { left: 0, top: 0 }, l.containerPosition = { left: 0, top: 0 }, l.parentData = { element: t(document), left: 0, top: 0, width: t(document).width(), height: t(document).height() || document.body.parentNode.scrollHeight }) : (e = t(d), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function(t, n) { i[t] = l._num(e.css("padding" + n)) }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = { height: e.innerHeight() - i[3], width: e.innerWidth() - i[1] }, n = l.containerOffset, s = l.containerSize.height, o = l.containerSize.width, a = l._hasScroll(d, "left") ? d.scrollWidth : o, r = l._hasScroll(d) ? d.scrollHeight : s, l.parentData = { element: d, left: n.left, top: n.top, width: a, height: r }))
        },
        resize: function(e) {
            var i, n, s, o, a = t(this).resizable("instance"),
                r = a.options,
                l = a.containerOffset,
                h = a.position,
                c = a._aspectRatio || e.shiftKey,
                u = { top: 0, left: 0 },
                d = a.containerElement,
                p = !0;
            d[0] !== document && /static/.test(d.css("position")) && (u = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - u.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), s = a.containerElement.get(0) === a.element.parent().get(0), o = /relative|absolute/.test(a.containerElement.css("position")), s && o ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - u.left : a.offset.left - l.left)), n = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - u.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), n + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - n, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
        },
        stop: function() {
            var e = t(this).resizable("instance"),
                i = e.options,
                n = e.containerOffset,
                s = e.containerPosition,
                o = e.containerElement,
                a = t(e.helper),
                r = a.offset(),
                l = a.outerWidth() - e.sizeDiff.width,
                h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(o.css("position")) && t(this).css({ left: r.left - s.left - n.left, width: l, height: h }), e._helper && !i.animate && /static/.test(o.css("position")) && t(this).css({ left: r.left - s.left - n.left, width: l, height: h })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.options;
            t(i.alsoResize).each(function() {
                var e = t(this);
                e.data("ui-resizable-alsoresize", { width: parseFloat(e.width()), height: parseFloat(e.height()), left: parseFloat(e.css("left")), top: parseFloat(e.css("top")) })
            })
        },
        resize: function(e, i) {
            var n = t(this).resizable("instance"),
                s = n.options,
                o = n.originalSize,
                a = n.originalPosition,
                r = { height: n.size.height - o.height || 0, width: n.size.width - o.width || 0, top: n.position.top - a.top || 0, left: n.position.left - a.left || 0 };
            t(s.alsoResize).each(function() {
                var e = t(this),
                    n = t(this).data("ui-resizable-alsoresize"),
                    s = {},
                    o = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(o, function(t, e) {
                    var i = (n[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (s[e] = i || null)
                }), e.css(s)
            })
        },
        stop: function() { t(this).removeData("ui-resizable-alsoresize") }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function() {
            var e = t(this).resizable("instance"),
                i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({ opacity: .25, display: "block", position: "relative", height: i.height, width: i.width, margin: 0, left: 0, top: 0 }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        },
        resize: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({ position: "relative", height: e.size.height, width: e.size.width })
        },
        stop: function() {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function() {
            var e, i = t(this).resizable("instance"),
                n = i.options,
                s = i.size,
                o = i.originalSize,
                a = i.originalPosition,
                r = i.axis,
                l = "number" == typeof n.grid ? [n.grid, n.grid] : n.grid,
                h = l[0] || 1,
                c = l[1] || 1,
                u = Math.round((s.width - o.width) / h) * h,
                d = Math.round((s.height - o.height) / c) * c,
                p = o.width + u,
                f = o.height + d,
                g = n.maxWidth && p > n.maxWidth,
                m = n.maxHeight && f > n.maxHeight,
                v = n.minWidth && n.minWidth > p,
                b = n.minHeight && n.minHeight > f;
            n.grid = l, v && (p += h), b && (f += c), g && (p -= h), m && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - d) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - u) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - d) : (f = c - e.height, i.size.height = f, i.position.top = a.top + o.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - u) : (p = h - e.width, i.size.width = p, i.position.left = a.left + o.width - p))
        }
    }), t.ui.resizable, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: { "ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all" },
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center",
                at: "center",
                of: window,
                collision: "fit",
                using: function(e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: { buttons: !0, height: !0, maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0, width: !0 },
        resizableRelatedOptions: { maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0 },
        _create: function() { this.originalCss = { display: this.element[0].style.display, width: this.element[0].style.width, minHeight: this.element[0].style.minHeight, maxHeight: this.element[0].style.maxHeight, height: this.element[0].style.height }, this.originalPosition = { parent: this.element.parent(), index: this.element.parent().children().index(this.element) }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus() },
        _init: function() { this.options.autoOpen && this.open() },
        _appendTo: function() { var e = this.options.appendTo; return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0) },
        _destroy: function() {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), t = e.parent.children().eq(e.index), t.length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function() { return this.uiDialog },
        disable: t.noop,
        enable: t.noop,
        close: function(e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function() { i._trigger("close", e) }))
        },
        isOpen: function() { return this._isOpen },
        moveToTop: function() { this._moveToTop() },
        _moveToTop: function(e, i) {
            var n = !1,
                s = this.uiDialog.siblings(".ui-front:visible").map(function() { return +t(this).css("z-index") }).get(),
                o = Math.max.apply(null, s);
            return o >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", o + 1), n = !0), n && !i && this._trigger("focus", e), n
        },
        open: function() { var e = this; return this._isOpen ? void(this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function() { e._focusTabbable(), e._trigger("focus") }), this._makeFocusTarget(), void this._trigger("open")) },
        _focusTabbable: function() {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function(e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }
            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function() {
            this.uiDialog = t("<div>").hide().attr({ tabIndex: -1, role: "dialog" }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function(e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(),
                        void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"),
                            n = i.filter(":first"),
                            s = i.filter(":last");
                        e.target !== s[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== n[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function() { s.trigger("focus") }), e.preventDefault()) : (this._delay(function() { n.trigger("focus") }), e.preventDefault())
                    }
                },
                mousedown: function(t) { this._moveToTop(t) && this._focusTabbable() }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({ "aria-describedby": this.element.uniqueId().attr("id") })
        },
        _createTitlebar: function() {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, { mousedown: function(e) { t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus") } }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({ label: t("<a>").text(this.options.closeText).html(), icon: "ui-icon-closethick", showLabel: !1 }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, { click: function(t) { t.preventDefault(), this.close(t) } }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({ "aria-labelledby": e.attr("id") })
        },
        _title: function(t) { this.options.title ? t.text(this.options.title) : t.html("&#160;") },
        _createButtonPane: function() { this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons() },
        _createButtons: function() {
            var e = this,
                i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function(i, n) {
                var s, o;
                n = t.isFunction(n) ? { click: n, text: i } : n, n = t.extend({ type: "button" }, n), s = n.click, o = { icon: n.icon, iconPosition: n.iconPosition, showLabel: n.showLabel, icons: n.icons, text: n.text }, delete n.click, delete n.icon, delete n.iconPosition, delete n.showLabel, delete n.icons, "boolean" == typeof n.text && delete n.text, t("<button></button>", n).button(o).appendTo(e.uiButtonSet).on("click", function() { s.apply(e.element[0], arguments) })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function() {
            function e(t) { return { position: t.position, offset: t.offset } }
            var i = this,
                n = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function(n, s) { i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", n, e(s)) },
                drag: function(t, n) { i._trigger("drag", t, e(n)) },
                stop: function(s, o) {
                    var a = o.offset.left - i.document.scrollLeft(),
                        r = o.offset.top - i.document.scrollTop();
                    n.position = { my: "left top", at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r, of: i.window }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", s, e(o))
                }
            })
        },
        _makeResizable: function() {
            function e(t) { return { originalPosition: t.originalPosition, originalSize: t.originalSize, position: t.position, size: t.size } }
            var i = this,
                n = this.options,
                s = n.resizable,
                o = this.uiDialog.css("position"),
                a = "string" == typeof s ? s : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: n.maxWidth,
                maxHeight: n.maxHeight,
                minWidth: n.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function(n, s) { i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", n, e(s)) },
                resize: function(t, n) { i._trigger("resize", t, e(n)) },
                stop: function(s, o) {
                    var a = i.uiDialog.offset(),
                        r = a.left - i.document.scrollLeft(),
                        l = a.top - i.document.scrollTop();
                    n.height = i.uiDialog.height(), n.width = i.uiDialog.width(), n.position = { my: "left top", at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l, of: i.window }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", s, e(o))
                }
            }).css("position", o)
        },
        _trackFocus: function() { this._on(this.widget(), { focusin: function(e) { this._makeFocusTarget(), this._focusedElement = t(e.target) } }) },
        _makeFocusTarget: function() { this._untrackInstance(), this._trackingInstances().unshift(this) },
        _untrackInstance: function() {
            var e = this._trackingInstances(),
                i = t.inArray(this, e); - 1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function() { var t = this.document.data("ui-dialog-instances"); return t || (t = [], this.document.data("ui-dialog-instances", t)), t },
        _minHeight: function() { var t = this.options; return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height) },
        _position: function() {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function(e) {
            var i = this,
                n = !1,
                s = {};
            t.each(e, function(t, e) { i._setOption(t, e), t in i.sizeRelatedOptions && (n = !0), t in i.resizableRelatedOptions && (s[t] = e) }), n && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", s)
        },
        _setOption: function(e, i) { var n, s, o = this.uiDialog; "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({ label: t("<a>").text("" + this.options.closeText).html() }), "draggable" === e && (n = o.is(":data(ui-draggable)"), n && !i && o.draggable("destroy"), !n && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && (s = o.is(":data(ui-resizable)"), s && !i && o.resizable("destroy"), s && "string" == typeof i && o.resizable("option", "handles", i), s || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title"))) },
        _size: function() {
            var t, e, i, n = this.options;
            this.element.show().css({ width: "auto", minHeight: 0, maxHeight: "none", height: 0 }), n.minWidth > n.width && (n.width = n.minWidth), t = this.uiDialog.css({ height: "auto", width: n.width }).outerHeight(), e = Math.max(0, n.minHeight - t), i = "number" == typeof n.maxHeight ? Math.max(0, n.maxHeight - t) : "none", "auto" === n.height ? this.element.css({ minHeight: e, maxHeight: i, height: "auto" }) : this.element.height(Math.max(0, n.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function() { this.iframeBlocks = this.document.find("iframe").map(function() { var e = t(this); return t("<div>").css({ position: "absolute", width: e.outerWidth(), height: e.outerHeight() }).appendTo(e.parent()).offset(e.offset())[0] }) },
        _unblockFrames: function() { this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks) },
        _allowInteraction: function(e) { return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length },
        _createOverlay: function() {
            if (this.options.modal) {
                var e = !0;
                this._delay(function() { e = !1 }), this.document.data("ui-dialog-overlays") || this._on(this.document, { focusin: function(t) { e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable()) } }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, { mousedown: "_keepFocus" }), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function() {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, { options: { dialogClass: "" }, _createWrapper: function() { this._super(), this.uiDialog.addClass(this.options.dialogClass) }, _setOption: function(t, e) { "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments) } }), t.ui.dialog, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: { accept: "*", addClasses: !0, greedy: !1, scope: "default", tolerance: "intersect", activate: null, deactivate: null, drop: null, out: null, over: null },
        _create: function() {
            var e, i = this.options,
                n = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(n) ? n : function(t) { return t.is(n) }, this.proportions = function() { return arguments.length ? void(e = arguments[0]) : e || (e = { width: this.element[0].offsetWidth, height: this.element[0].offsetHeight }) }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function(e) { t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this) },
        _splice: function(t) { for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1) },
        _destroy: function() {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function(e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function(t) { return t.is(i) };
            else if ("scope" === e) {
                var n = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(n), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function(e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function(e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function(e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function(e, i) {
            var n = i || t.ui.ddmanager.current,
                s = !1;
            return !(!n || (n.currentItem || n.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function() { var i = t(this).droppable("instance"); return i.options.greedy && !i.options.disabled && i.options.scope === n.options.scope && i.accept.call(i.element[0], n.currentItem || n.element) && v(n, t.extend(i, { offset: i.element.offset() }), i.options.tolerance, e) ? (s = !0, !1) : void 0 }), !s && (!!this.accept.call(this.element[0], n.currentItem || n.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(n)), this.element)))
        },
        ui: function(t) { return { draggable: t.currentItem || t.element, helper: t.helper, position: t.position, offset: t.positionAbs } },
        _addHoverClass: function() { this._addClass("ui-droppable-hover") },
        _removeHoverClass: function() { this._removeClass("ui-droppable-hover") },
        _addActiveClass: function() { this._addClass("ui-droppable-active") },
        _removeActiveClass: function() { this._removeClass("ui-droppable-active") }
    });
    var v = t.ui.intersect = function() {
        function t(t, e, i) { return t >= e && e + i > t }
        return function(e, i, n, s) {
            if (!i.offset) return !1;
            var o = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top,
                r = o + e.helperProportions.width,
                l = a + e.helperProportions.height,
                h = i.offset.left,
                c = i.offset.top,
                u = h + i.proportions().width,
                d = c + i.proportions().height;
            switch (n) {
                case "fit":
                    return o >= h && u >= r && a >= c && d >= l;
                case "intersect":
                    return o + e.helperProportions.width / 2 > h && u > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && d > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(s.pageY, c, i.proportions().height) && t(s.pageX, h, i.proportions().width);
                case "touch":
                    return (a >= c && d >= a || l >= c && d >= l || c > a && l > d) && (o >= h && u >= o || r >= h && u >= r || h > o && r > u);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null,
        droppables: { default: [] },
        prepareOffsets: function(e, i) {
            var n, s, o = t.ui.ddmanager.droppables[e.options.scope] || [],
                a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (n = 0; o.length > n; n++)
                if (!(o[n].options.disabled || e && !o[n].accept.call(o[n].element[0], e.currentItem || e.element))) {
                    for (s = 0; r.length > s; s++)
                        if (r[s] === o[n].element[0]) { o[n].proportions().height = 0; continue t }
                    o[n].visible = "none" !== o[n].element.css("display"), o[n].visible && ("mousedown" === a && o[n]._activate.call(o[n], i), o[n].offset = o[n].element.offset(), o[n].proportions({ width: o[n].element[0].offsetWidth, height: o[n].element[0].offsetHeight }))
                }
        },
        drop: function(e, i) { var n = !1; return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function() { this.options && (!this.options.disabled && this.visible && v(e, this, this.options.tolerance, i) && (n = this._drop.call(this, i) || n), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i))) }), n },
        dragStart: function(e, i) { e.element.parentsUntil("body").on("scroll.droppable", function() { e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }) },
        drag: function(e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function() {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var n, s, o, a = v(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (s = this.options.scope, o = this.element.parents(":data(ui-droppable)").filter(function() { return t(this).droppable("instance").options.scope === s }), o.length && (n = t(o[0]).droppable("instance"), n.greedyChild = "isover" === r)), n && "isover" === r && (n.isover = !1, n.isout = !0, n._out.call(n, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), n && "isout" === r && (n.isout = !1, n.isover = !0, n._over.call(n, i)))
                }
            })
        },
        dragStop: function(e, i) { e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i) }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, { options: { hoverClass: !1, activeClass: !1 }, _addActiveClass: function() { this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass) }, _removeActiveClass: function() { this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass) }, _addHoverClass: function() { this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass) }, _removeHoverClass: function() { this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass) } }), t.ui.droppable, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: { classes: { "ui-progressbar": "ui-corner-all", "ui-progressbar-value": "ui-corner-left", "ui-progressbar-complete": "ui-corner-right" }, max: 100, value: 0, change: null, complete: null },
        min: 0,
        _create: function() { this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({ role: "progressbar", "aria-valuemin": this.min }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue() },
        _destroy: function() { this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove() },
        value: function(t) { return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue()) },
        _constrainedValue: function(t) { return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t)) },
        _setOptions: function(t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function(t, e) { "max" === t && (e = Math.max(this.min, e)), this._super(t, e) },
        _setOptionDisabled: function(t) { this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _percentage: function() { return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min) },
        _refreshValue: function() {
            var e = this.options.value,
                i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({ "aria-valuemax": this.options.max, "aria-valuenow": e }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: { appendTo: "body", autoRefresh: !0, distance: 0, filter: "*", tolerance: "touch", selected: null, selecting: null, start: null, stop: null, unselected: null, unselecting: null },
        _create: function() {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function() {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function() {
                    var i = t(this),
                        n = i.offset(),
                        s = { left: n.left - e.elementPos.left, top: n.top - e.elementPos.top };
                    t.data(this, "selectable-item", { element: this, $element: i, left: s.left, top: s.top, right: s.left + i.outerWidth(), bottom: s.top + i.outerHeight(), startselected: !1, selected: i.hasClass("ui-selected"), selecting: i.hasClass("ui-selecting"), unselecting: i.hasClass("ui-unselecting") })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function() { this.selectees.removeData("selectable-item"), this._mouseDestroy() },
        _mouseStart: function(e) {
            var i = this,
                n = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(n.filter, this.element[0]), this._trigger("start", e), t(n.appendTo).append(this.helper), this.helper.css({ left: e.pageX, top: e.pageY, width: 0, height: 0 }), n.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function() {
                var n = t.data(this, "selectable-item");
                n.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(n.$element, "ui-selected"), n.selected = !1, i._addClass(n.$element, "ui-unselecting"), n.unselecting = !0, i._trigger("unselecting", e, { unselecting: n.element }))
            }), t(e.target).parents().addBack().each(function() { var n, s = t.data(this, "selectable-item"); return s ? (n = !e.metaKey && !e.ctrlKey || !s.$element.hasClass("ui-selected"), i._removeClass(s.$element, n ? "ui-unselecting" : "ui-selected")._addClass(s.$element, n ? "ui-selecting" : "ui-unselecting"), s.unselecting = !n, s.selecting = n, s.selected = n, n ? i._trigger("selecting", e, { selecting: s.element }) : i._trigger("unselecting", e, { unselecting: s.element }), !1) : void 0 }))
        },
        _mouseDrag: function(e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, n = this,
                    s = this.options,
                    o = this.opos[0],
                    a = this.opos[1],
                    r = e.pageX,
                    l = e.pageY;
                return o > r && (i = r, r = o, o = i), a > l && (i = l, l = a, a = i), this.helper.css({ left: o, top: a, width: r - o, height: l - a }), this.selectees.each(function() {
                    var i = t.data(this, "selectable-item"),
                        h = !1,
                        c = {};
                    i && i.element !== n.element[0] && (c.left = i.left + n.elementPos.left, c.right = i.right + n.elementPos.left, c.top = i.top + n.elementPos.top, c.bottom = i.bottom + n.elementPos.top, "touch" === s.tolerance ? h = !(c.left > r || o > c.right || c.top > l || a > c.bottom) : "fit" === s.tolerance && (h = c.left > o && r > c.right && c.top > a && l > c.bottom), h ? (i.selected && (n._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (n._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (n._addClass(i.$element, "ui-selecting"), i.selecting = !0, n._trigger("selecting", e, { selecting: i.element }))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, n._addClass(i.$element, "ui-selected"), i.selected = !0) : (n._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), n._trigger("unselecting", e, { unselecting: i.element }))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (n._removeClass(i.$element, "ui-selected"), i.selected = !1, n._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, n._trigger("unselecting", e, { unselecting: i.element })))))
                }), !1
            }
        },
        _mouseStop: function(e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-unselecting"), n.unselecting = !1, n.startselected = !1, i._trigger("unselected", e, { unselected: n.element })
            }), t(".ui-selecting", this.element[0]).each(function() {
                var n = t.data(this, "selectable-item");
                i._removeClass(n.$element, "ui-selecting")._addClass(n.$element, "ui-selected"), n.selecting = !1, n.selected = !0, n.startselected = !0, i._trigger("selected", e, { selected: n.element })
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: { appendTo: null, classes: { "ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all" }, disabled: null, icons: { button: "ui-icon-triangle-1-s" }, position: { my: "left top", at: "left bottom", collision: "none" }, width: !1, change: null, close: null, focus: null, open: null, select: null },
        _create: function() {
            var e = this.element.uniqueId().attr("id");
            this.ids = { element: e, button: e + "-button", menu: e + "-menu" }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function() {
            var e, i = this,
                n = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, { click: function(t) { this.button.focus(), t.preventDefault() } }), this.element.hide(), this.button = t("<span>", { tabindex: this.options.disabled ? -1 : 0, id: this.ids.button, role: "combobox", "aria-expanded": "false", "aria-autocomplete": "list", "aria-owns": this.ids.menu, "aria-haspopup": "true", title: this.element.attr("title") }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(n).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function() { i._rendered || i._refreshMenu() })
        },
        _drawMenu: function() {
            var e = this;
            this.menu = t("<ul>", { "aria-hidden": "true", "aria-labelledby": this.ids.button, id: this.ids.menu }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: { "ui-menu": "ui-corner-bottom" },
                role: "listbox",
                select: function(t, i) { t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t) },
                focus: function(t, i) {
                    var n = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && n.index !== e.focusIndex && (e._trigger("focus", t, { item: n }), e.isOpen || e._select(n, t)), e.focusIndex = n.index, e.button.attr("aria-activedescendant", e.menuItems.eq(n.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function() { return !1 }, this.menuInstance._isDivider = function() { return !1 }
        },
        refresh: function() { this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton() },
        _refreshMenu: function() {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function(t) { this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t))) },
        _position: function() { this.menuWrap.position(t.extend({ of: this.button }, this.options.position)) },
        close: function(t) { this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t)) },
        widget: function() { return this.button },
        menuWidget: function() { return this.menu },
        _renderButtonItem: function(e) { var i = t("<span>"); return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i },
        _renderMenu: function(e, i) {
            var n = this,
                s = "";
            t.each(i, function(i, o) {
                var a;
                o.optgroup !== s && (a = t("<li>", { text: o.optgroup }), n._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (o.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), s = o.optgroup), n._renderItemData(e, o)
            })
        },
        _renderItemData: function(t, e) { return this._renderItem(t, e).data("ui-selectmenu-item", e) },
        _renderItem: function(e, i) {
            var n = t("<li>"),
                s = t("<div>", { title: i.element.attr("title") });
            return i.disabled && this._addClass(n, null, "ui-state-disabled"), this._setText(s, i.label), n.append(s).appendTo(e)
        },
        _setText: function(t, e) { e ? t.text(e) : t.html("&#160;") },
        _move: function(t, e) {
            var i, n, s = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), s += ":not(.ui-state-disabled)"), n = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](s).eq(-1) : i[t + "All"](s).eq(0), n.length && this.menuInstance.focus(e, n)
        },
        _getSelectedItem: function() { return this.menuItems.eq(this.element[0].selectedIndex).parent("li") },
        _toggle: function(t) { this[this.isOpen ? "close" : "open"](t) },
        _setSelection: function() {
            var t;
            this.range && (window.getSelection ? (t = window.getSelection(), t.removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: { mousedown: function(e) { this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e)) } },
        _buttonEvents: {
            mousedown: function() {
                var t;
                window.getSelection ? (t = window.getSelection(), t.rangeCount && (this.range = t.getRangeAt(0))) : this.range = document.selection.createRange()
            },
            click: function(t) { this._setSelection(), this._toggle(t) },
            keydown: function(e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function(t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function(t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, { item: t }), t.index !== i && this._trigger("change", e, { item: t }), this.close(e)
        },
        _setAria: function(t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({ "aria-labelledby": e, "aria-activedescendant": e }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function(t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function(t) { this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0) },
        _appendTo: function() { var e = this.options.appendTo; return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e },
        _toggleAttr: function() { this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen) },
        _resizeButton: function() { var t = this.options.width; return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t)) },
        _resizeMenu: function() { this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1)) },
        _getCreateOptions: function() { var t = this._super(); return t.disabled = this.element.prop("disabled"), t },
        _parseOptions: function(e) {
            var i = this,
                n = [];
            e.each(function(e, s) { n.push(i._parseOption(t(s), e)) }), this.items = n
        },
        _parseOption: function(t, e) { var i = t.parent("optgroup"); return { element: t, index: e, value: t.val(), label: t.text(), optgroup: i.attr("label") || "", disabled: i.prop("disabled") || t.prop("disabled") } },
        _destroy: function() { this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element) }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: { animate: !1, classes: { "ui-slider": "ui-corner-all", "ui-slider-handle": "ui-corner-all", "ui-slider-range": "ui-corner-all ui-widget-header" }, distance: 0, max: 100, min: 0, orientation: "horizontal", range: !1, step: 1, value: 0, values: null, change: null, slide: null, start: null, stop: null },
        numPages: 5,
        _create: function() { this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1 },
        _refresh: function() { this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue() },
        _createHandles: function() {
            var e, i, n = this.options,
                s = this.element.find(".ui-slider-handle"),
                o = [];
            for (i = n.values && n.values.length || 1, s.length > i && (s.slice(i).remove(), s = s.slice(0, i)), e = s.length; i > e; e++) o.push("<span tabindex='0'></span>");
            this.handles = s.add(t(o.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function(e) { t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0) })
        },
        _createRange: function() {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({ left: "", bottom: "" })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function() { this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles) },
        _destroy: function() { this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy() },
        _mouseCapture: function(e) {
            var i, n, s, o, a, r, l, h = this,
                c = this.options;
            return !c.disabled && (this.elementSize = { width: this.element.outerWidth(), height: this.element.outerHeight() }, this.elementOffset = this.element.offset(), i = { x: e.pageX, y: e.pageY }, n = this._normValueFromMouse(i), s = this._valueMax() - this._valueMin() + 1, this.handles.each(function(e) {
                var i = Math.abs(n - h.values(e));
                (s > i || s === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (s = i, o = t(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(o, null, "ui-state-active"), o.trigger("focus"), r = o.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? { left: 0, top: 0 } : { left: e.pageX - r.left - o.width() / 2, top: e.pageY - r.top - o.height() / 2 - (parseInt(o.css("borderTopWidth"), 10) || 0) - (parseInt(o.css("borderBottomWidth"), 10) || 0) + (parseInt(o.css("marginTop"), 10) || 0) }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, n), this._animateOff = !0, !0))
        },
        _mouseStart: function() { return !0 },
        _mouseDrag: function(t) {
            var e = { x: t.pageX, y: t.pageY },
                i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function(t) { return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1 },
        _detectOrientation: function() { this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal" },
        _normValueFromMouse: function(t) { var e, i, n, s, o; return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), n = i / e, n > 1 && (n = 1), 0 > n && (n = 0), "vertical" === this.orientation && (n = 1 - n), s = this._valueMax() - this._valueMin(), o = this._valueMin() + n * s, this._trimAlignValue(o) },
        _uiHash: function(t, e, i) { var n = { handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value() }; return this._hasMultipleValues() && (n.value = void 0 !== e ? e : this.values(t), n.values = i || this.values()), n },
        _hasMultipleValues: function() { return this.options.values && this.options.values.length },
        _start: function(t, e) { return this._trigger("start", t, this._uiHash(e)) },
        _slide: function(t, e, i) {
            var n, s = this.value(),
                o = this.values();
            this._hasMultipleValues() && (n = this.values(e ? 0 : 1), s = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(n, i) : Math.max(n, i)), o[e] = i), i !== s && !1 !== this._trigger("slide", t, this._uiHash(e, i, o)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i))
        },
        _stop: function(t, e) { this._trigger("stop", t, this._uiHash(e)) },
        _change: function(t, e) { this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e))) },
        value: function(t) { return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value() },
        values: function(e, i) {
            var n, s, o;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (n = this.options.values, s = arguments[0], o = 0; n.length > o; o += 1) n[o] = this._trimAlignValue(s[o]), this._change(null, o);
            this._refreshValue()
        },
        _setOption: function(e, i) {
            var n, s = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (s = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), n = s - 1; n >= 0; n--) this._change(null, n);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(null, "ui-state-disabled", !!t) },
        _value: function() { var t = this.options.value; return t = this._trimAlignValue(t) },
        _values: function(t) { var e, i, n; if (arguments.length) return e = this.options.values[t], e = this._trimAlignValue(e); if (this._hasMultipleValues()) { for (i = this.options.values.slice(), n = 0; i.length > n; n += 1) i[n] = this._trimAlignValue(i[n]); return i } return [] },
        _trimAlignValue: function(t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1,
                i = (t - this._valueMin()) % e,
                n = t - i;
            return 2 * Math.abs(i) >= e && (n += i > 0 ? e : -e), parseFloat(n.toFixed(5))
        },
        _calculateNewMax: function() {
            var t = this.options.max,
                e = this._valueMin(),
                i = this.options.step;
            t = Math.round((t - e) / i) * i + e, t > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function() { return this.options.min },
        _valueMax: function() { return this.max },
        _refreshRange: function(t) { "vertical" === t && this.range.css({ width: "", left: "" }), "horizontal" === t && this.range.css({ height: "", bottom: "" }) },
        _refreshValue: function() {
            var e, i, n, s, o, a = this.options.range,
                r = this.options,
                l = this,
                h = !this._animateOff && r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function(n) { i = (l.values(n) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({ left: i + "%" }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({ width: i - e + "%" }, { queue: !1, duration: r.animate })) : (0 === n && l.range.stop(1, 1)[h ? "animate" : "css"]({ bottom: i + "%" }, r.animate), 1 === n && l.range[h ? "animate" : "css"]({ height: i - e + "%" }, { queue: !1, duration: r.animate }))), e = i }) : (n = this.value(), s = this._valueMin(), o = this._valueMax(), i = o !== s ? (n - s) / (o - s) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: i + "%" }, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ width: 100 - i + "%" }, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: i + "%" }, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({ height: 100 - i + "%" }, r.animate))
        },
        _handleEvents: {
            keydown: function(e) {
                var i, n, s, o = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, o))) return
                }
                switch (s = this.options.step, i = n = this._hasMultipleValues() ? this.values(o) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        n = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        n = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        n = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        n = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        n = this._trimAlignValue(i + s);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        n = this._trimAlignValue(i - s)
                }
                this._slide(e, o, n)
            },
            keyup: function(e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: { appendTo: "parent", axis: !1, connectWith: !1, containment: !1, cursor: "auto", cursorAt: !1, dropOnEmpty: !0, forcePlaceholderSize: !1, forceHelperSize: !1, grid: !1, handle: !1, helper: "original", items: "> *", opacity: !1, placeholder: !1, revert: !1, scroll: !0, scrollSensitivity: 20, scrollSpeed: 20, scope: "default", tolerance: "intersect", zIndex: 1e3, activate: null, beforeStop: null, change: null, deactivate: null, out: null, over: null, receive: null, remove: null, sort: null, start: null, stop: null, update: null },
        _isOverAxis: function(t, e, i) { return t >= e && e + i > t },
        _isFloating: function(t) { return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display")) },
        _create: function() { this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0 },
        _setOption: function(t, e) { this._super(t, e), "handle" === t && this._setHandleClassName() },
        _setHandleClassName: function() {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function() { e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle") })
        },
        _destroy: function() { this._mouseDestroy(); for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item"); return this },
        _mouseCapture: function(e, i) {
            var n = null,
                s = !1,
                o = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function() { return t.data(this, o.widgetName + "-item") === o ? (n = t(this), !1) : void 0 }), t.data(e.target, o.widgetName + "-item") === o && (n = t(e.target)), !!n && (!(this.options.handle && !i && (t(this.options.handle, n).find("*").addBack().each(function() { this === e.target && (s = !0) }), !s)) && (this.currentItem = n, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function(e, i, n) {
            var s, o, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = { top: this.offset.top - this.margins.top, left: this.offset.left - this.margins.left }, t.extend(this.offset, { click: { left: e.pageX - this.offset.left, top: e.pageY - this.offset.top }, parent: this._getParentOffset(), relative: this._getRelativeOffset() }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = { prev: this.currentItem.prev()[0], parent: this.currentItem.parent()[0] }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (o = this.document.find("body"), this.storedCursor = o.css("cursor"), o.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(o)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !n)
                for (s = this.containers.length - 1; s >= 0; s--) this.containers[s]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function(e) {
            var i, n, s, o, a = this.options,
                r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--)
                if (n = this.items[i], s = n.item[0], (o = this._intersectsWithPointer(n)) && n.instance === this.currentContainer && s !== this.currentItem[0] && this.placeholder[1 === o ? "next" : "prev"]()[0] !== s && !t.contains(this.placeholder[0], s) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], s))) {
                    if (this.direction = 1 === o ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(n)) break;
                    this._rearrange(e, n), this._trigger("change", e, this._uiHash());
                    break
                }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function(e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var n = this,
                        s = this.placeholder.offset(),
                        o = this.options.axis,
                        a = {};
                    o && "x" !== o || (a.left = s.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), o && "y" !== o || (a.top = s.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function() { n._clear(e) })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function() { if (this.dragging) { this._mouseUp(new t.Event("mouseup", { target: null })), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show(); for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0) } return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, { helper: null, dragging: !1, reverting: !1, _noFinalSort: null }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this },
        serialize: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, t(i).each(function() {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && n.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !n.length && e.key && n.push(e.key + "="), n.join("&")
        },
        toArray: function(e) {
            var i = this._getItemsAsjQuery(e && e.connected),
                n = [];
            return e = e || {}, i.each(function() { n.push(t(e.item || this).attr(e.attribute || "id") || "") }), n
        },
        _intersectsWith: function(t) {
            var e = this.positionAbs.left,
                i = e + this.helperProportions.width,
                n = this.positionAbs.top,
                s = n + this.helperProportions.height,
                o = t.left,
                a = o + t.width,
                r = t.top,
                l = r + t.height,
                h = this.offset.click.top,
                c = this.offset.click.left,
                u = "x" === this.options.axis || n + h > r && l > n + h,
                d = "y" === this.options.axis || e + c > o && a > e + c,
                p = u && d;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > o && a > i - this.helperProportions.width / 2 && n + this.helperProportions.height / 2 > r && l > s - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function(t) {
            var e, i, n = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                s = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !(!n || !s) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function(t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                n = this._getDragVerticalDirection(),
                s = this._getDragHorizontalDirection();
            return this.floating && s ? "right" === s && i || "left" === s && !i : n && ("down" === n && e || "up" === n && !e)
        },
        _getDragVerticalDirection: function() { var t = this.positionAbs.top - this.lastPositionAbs.top; return 0 !== t && (t > 0 ? "down" : "up") },
        _getDragHorizontalDirection: function() { var t = this.positionAbs.left - this.lastPositionAbs.left; return 0 !== t && (t > 0 ? "right" : "left") },
        refresh: function(t) { return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this },
        _connectWith: function() { var t = this.options; return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith },
        _getItemsAsjQuery: function(e) {
            function i() { r.push(this) }
            var n, s, o, a, r = [],
                l = [],
                h = this._connectWith();
            if (h && e)
                for (n = h.length - 1; n >= 0; n--)
                    for (o = t(h[n], this.document[0]), s = o.length - 1; s >= 0; s--)(a = t.data(o[s], this.widgetFullName)) && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, { options: this.options, item: this.currentItem }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), n = l.length - 1; n >= 0; n--) l[n][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function() {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function(t) {
                for (var i = 0; e.length > i; i++)
                    if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function(e) {
            this.items = [], this.containers = [this];
            var i, n, s, o, a, r, l, h, c = this.items,
                u = [
                    [t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, { item: this.currentItem }) : t(this.options.items, this.element), this]
                ],
                d = this._connectWith();
            if (d && this.ready)
                for (i = d.length - 1; i >= 0; i--)
                    for (s = t(d[i], this.document[0]), n = s.length - 1; n >= 0; n--)(o = t.data(s[n], this.widgetFullName)) && o !== this && !o.options.disabled && (u.push([t.isFunction(o.options.items) ? o.options.items.call(o.element[0], e, { item: this.currentItem }) : t(o.options.items, o.element), o]), this.containers.push(o));
            for (i = u.length - 1; i >= 0; i--)
                for (a = u[i][1], r = u[i][0], n = 0, h = r.length; h > n; n++) l = t(r[n]), l.data(this.widgetName + "-item", a), c.push({ item: l, instance: a, width: 0, height: 0, left: 0, top: 0 })
        },
        refreshPositions: function(e) {
            this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset());
            var i, n, s, o;
            for (i = this.items.length - 1; i >= 0; i--) n = this.items[i], n.instance !== this.currentContainer && this.currentContainer && n.item[0] !== this.currentItem[0] || (s = this.options.toleranceElement ? t(this.options.toleranceElement, n.item) : n.item, e || (n.width = s.outerWidth(), n.height = s.outerHeight()), o = s.offset(), n.left = o.left, n.top = o.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this);
            else
                for (i = this.containers.length - 1; i >= 0; i--) o = this.containers[i].element.offset(), this.containers[i].containerCache.left = o.left, this.containers[i].containerCache.top = o.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function(e) {
            e = e || this;
            var i, n = e.options;
            n.placeholder && n.placeholder.constructor !== String || (i = n.placeholder, n.placeholder = {
                element: function() {
                    var n = e.currentItem[0].nodeName.toLowerCase(),
                        s = t("<" + n + ">", e.document[0]);
                    return e._addClass(s, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(s, "ui-sortable-helper"), "tbody" === n ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(s)) : "tr" === n ? e._createTrPlaceholder(e.currentItem, s) : "img" === n && s.attr("src", e.currentItem.attr("src")), i || s.css("visibility", "hidden"), s
                },
                update: function(t, s) {
                    (!i || n.forcePlaceholderSize) && (s.height() || s.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), s.width() || s.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(n.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), n.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function(e, i) {
            var n = this;
            e.children().each(function() { t("<td>&#160;</td>", n.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i) })
        },
        _contactContainers: function(e) {
            var i, n, s, o, a, r, l, h, c, u, d = null,
                p = null;
            for (i = this.containers.length - 1; i >= 0; i--)
                if (!t.contains(this.currentItem[0], this.containers[i].element[0]))
                    if (this._intersectsWith(this.containers[i].containerCache)) {
                        if (d && t.contains(this.containers[i].element[0], d.element[0])) continue;
                        d = this.containers[i], p = i
                    } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (d)
                if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1);
                else {
                    for (s = 1e4, o = null, c = d.floating || this._isFloating(this.currentItem), a = c ? "left" : "top", r = c ? "width" : "height", u = c ? "pageX" : "pageY", n = this.items.length - 1; n >= 0; n--) t.contains(this.containers[p].element[0], this.items[n].item[0]) && this.items[n].item[0] !== this.currentItem[0] && (l = this.items[n].item.offset()[a], h = !1, e[u] - l > this.items[n][r] / 2 && (h = !0), s > Math.abs(e[u] - l) && (s = Math.abs(e[u] - l), o = this.items[n], this.direction = h ? "up" : "down"));
                    if (!o && !this.options.dropOnEmpty) return;
                    if (this.currentContainer === this.containers[p]) return void(this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                    o ? this._rearrange(e, o, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
                }
        },
        _createHelper: function(e) {
            var i = this.options,
                n = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return n.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(n[0]), n[0] === this.currentItem[0] && (this._storedCSS = { width: this.currentItem[0].style.width, height: this.currentItem[0].style.height, position: this.currentItem.css("position"), top: this.currentItem.css("top"), left: this.currentItem.css("left") }), (!n[0].style.width || i.forceHelperSize) && n.width(this.currentItem.width()), (!n[0].style.height || i.forceHelperSize) && n.height(this.currentItem.height()), n
        },
        _adjustOffsetFromHelper: function(e) { "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = { left: +e[0], top: +e[1] || 0 }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top) },
        _getParentOffset: function() { this.offsetParent = this.helper.offsetParent(); var e = this.offsetParent.offset(); return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = { top: 0, left: 0 }), { top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0), left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0) } },
        _getRelativeOffset: function() { if ("relative" === this.cssPosition) { var t = this.currentItem.position(); return { top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(), left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft() } } return { top: 0, left: 0 } },
        _cacheMargins: function() { this.margins = { left: parseInt(this.currentItem.css("marginLeft"), 10) || 0, top: parseInt(this.currentItem.css("marginTop"), 10) || 0 } },
        _cacheHelperProportions: function() { this.helperProportions = { width: this.helper.outerWidth(), height: this.helper.outerHeight() } },
        _setContainment: function() { var e, i, n, s = this.options; "parent" === s.containment && (s.containment = this.helper[0].parentNode), ("document" === s.containment || "window" === s.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === s.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === s.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(s.containment) || (e = t(s.containment)[0], i = t(s.containment).offset(), n = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (n ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (n ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top]) },
        _convertPositionTo: function(e, i) {
            i || (i = this.position);
            var n = "absolute" === e ? 1 : -1,
                s = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                o = /(html|body)/i.test(s[0].tagName);
            return { top: i.top + this.offset.relative.top * n + this.offset.parent.top * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : o ? 0 : s.scrollTop()) * n, left: i.left + this.offset.relative.left * n + this.offset.parent.left * n - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : o ? 0 : s.scrollLeft()) * n }
        },
        _generatePosition: function(e) {
            var i, n, s = this.options,
                o = e.pageX,
                a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (o = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (o = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), s.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / s.grid[1]) * s.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - s.grid[1] : i + s.grid[1] : i, n = this.originalPageX + Math.round((o - this.originalPageX) / s.grid[0]) * s.grid[0], o = this.containment ? n - this.offset.click.left >= this.containment[0] && n - this.offset.click.left <= this.containment[2] ? n : n - this.offset.click.left >= this.containment[0] ? n - s.grid[0] : n + s.grid[0] : n)), { top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()), left: o - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft()) }
        },
        _rearrange: function(t, e, i, n) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var s = this.counter;
            this._delay(function() { s === this.counter && this.refreshPositions(!n) })
        },
        _clear: function(t, e) {
            function i(t, e, i) { return function(n) { i._trigger(t, n, e._uiHash(e)) } } this.reverting = !1;
            var n, s = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (n in this._storedCSS)("auto" === this._storedCSS[n] || "static" === this._storedCSS[n]) && (this._storedCSS[n] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && s.push(function(t) { this._trigger("receive", t, this._uiHash(this.fromOutside)) }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || s.push(function(t) { this._trigger("update", t, this._uiHash()) }), this !== this.currentContainer && (e || (s.push(function(t) { this._trigger("remove", t, this._uiHash()) }), s.push(function(t) { return function(e) { t._trigger("receive", e, this._uiHash(this)) } }.call(this, this.currentContainer)), s.push(function(t) { return function(e) { t._trigger("update", e, this._uiHash(this)) } }.call(this, this.currentContainer)))), n = this.containers.length - 1; n >= 0; n--) e || s.push(i("deactivate", this, this.containers[n])), this.containers[n].containerCache.over && (s.push(i("out", this, this.containers[n])), this.containers[n].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (n = 0; s.length > n; n++) s[n].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function() {!1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel() },
        _uiHash: function(e) { var i = e || this; return { helper: i.helper, placeholder: i.placeholder || t([]), position: i.position, originalPosition: i.originalPosition, offset: i.positionAbs, item: i.currentItem, sender: e ? e.element : null } }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: { classes: { "ui-spinner": "ui-corner-all", "ui-spinner-down": "ui-corner-br", "ui-spinner-up": "ui-corner-tr" }, culture: null, icons: { down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n" }, incremental: !0, max: null, min: null, numberFormat: null, page: 10, step: 1, change: null, spin: null, start: null, stop: null },
        _create: function() { this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, { beforeunload: function() { this.element.removeAttr("autocomplete") } }) },
        _getCreateOptions: function() {
            var e = this._super(),
                i = this.element;
            return t.each(["min", "max", "step"], function(t, n) {
                var s = i.attr(n);
                null != s && s.length && (e[n] = s)
            }), e
        },
        _events: {
            keydown: function(t) { this._start(t) && this._keydown(t) && t.preventDefault() },
            keyup: "_stop",
            focus: function() { this.previous = this.element.val() },
            blur: function(t) { return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void(this.previous !== this.element.val() && this._trigger("change", t))) },
            mousewheel: function(t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function() { this.spinning && this._stop(t) }, 100), t.preventDefault()
                }
            },
            "mousedown .ui-spinner-button": function(e) {
                function i() { this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = n, this._delay(function() { this.previous = n })) }
                var n;
                n = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function() { delete this.cancelBlur, i.call(this) }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            },
            "mouseup .ui-spinner-button": "_stop",
            "mouseenter .ui-spinner-button": function(e) { return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0 },
            "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>") },
        _draw: function() { this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({ classes: { "ui-button": "" } }), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({ icon: this.options.icons.up, showLabel: !1 }), this.buttons.last().button({ icon: this.options.icons.down, showLabel: !1 }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height()) },
        _keydown: function(e) {
            var i = this.options,
                n = t.ui.keyCode;
            switch (e.keyCode) {
                case n.UP:
                    return this._repeat(null, 1, e), !0;
                case n.DOWN:
                    return this._repeat(null, -1, e), !0;
                case n.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case n.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function(t) { return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0) },
        _repeat: function(t, e, i) { t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function() { this._repeat(40, e, i) }, t), this._spin(e * this.options.step, i) },
        _spin: function(t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, { value: i }) || (this._value(i), this.counter++)
        },
        _increment: function(e) { var i = this.options.incremental; return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1 },
        _precision: function() { var t = this._precisionOf(this.options.step); return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t },
        _precisionOf: function(t) {
            var e = "" + t,
                i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function(t) { var e, i, n = this.options; return e = null !== n.min ? n.min : 0, i = t - e, i = Math.round(i / n.step) * n.step, t = e + i, t = parseFloat(t.toFixed(this._precision())), null !== n.max && t > n.max ? n.max : null !== n.min && n.min > t ? n.min : t },
        _stop: function(t) { this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t)) },
        _setOption: function(t, e) { var i, n, s; return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (n = this.buttons.first().find(".ui-icon"), this._removeClass(n, null, this.options.icons.up), this._addClass(n, null, e.up), s = this.buttons.last().find(".ui-icon"), this._removeClass(s, null, this.options.icons.down), this._addClass(s, null, e.down)), void this._super(t, e)) },
        _setOptionDisabled: function(t) { this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable") },
        _setOptions: r(function(t) { this._super(t) }),
        _parse: function(t) { return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t },
        _format: function(t) { return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t },
        _refresh: function() { this.element.attr({ "aria-valuemin": this.options.min, "aria-valuemax": this.options.max, "aria-valuenow": this._parse(this.element.val()) }) },
        isValid: function() { var t = this.value(); return null !== t && t === this._adjustValue(t) },
        _value: function(t, e) { var i; "" !== t && null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i)), this.element.val(t), this._refresh() },
        _destroy: function() { this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element) },
        stepUp: r(function(t) { this._stepUp(t) }),
        _stepUp: function(t) { this._start() && (this._spin((t || 1) * this.options.step), this._stop()) },
        stepDown: r(function(t) { this._stepDown(t) }),
        _stepDown: function(t) { this._start() && (this._spin((t || 1) * -this.options.step), this._stop()) },
        pageUp: r(function(t) { this._stepUp((t || 1) * this.options.page) }),
        pageDown: r(function(t) { this._stepDown((t || 1) * this.options.page) }),
        value: function(t) { return arguments.length ? void r(this._value).call(this, t) : this._parse(this.element.val()) },
        widget: function() { return this.uiSpinner }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, { _enhance: function() { this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml()) }, _uiSpinnerHtml: function() { return "<span>" }, _buttonHtml: function() { return "<a></a><a></a>" } }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: { active: null, classes: { "ui-tabs": "ui-corner-all", "ui-tabs-nav": "ui-corner-all", "ui-tabs-panel": "ui-corner-bottom", "ui-tabs-tab": "ui-corner-top" }, collapsible: !1, event: "click", heightStyle: "content", hide: null, show: null, activate: null, beforeActivate: null, beforeLoad: null, load: null },
        _isLocal: function() {
            var t = /#.*$/;
            return function(e) {
                var i, n;
                i = e.href.replace(t, ""), n = location.href.replace(t, "");
                try { i = decodeURIComponent(i) } catch (t) {}
                try { n = decodeURIComponent(n) } catch (t) {}
                return e.hash.length > 1 && i === n
            }
        }(),
        _create: function() {
            var e = this,
                i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function(t) { return e.tabs.index(t) }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function() {
            var e = this.options.active,
                i = this.options.collapsible,
                n = location.hash.substring(1);
            return null === e && (n && this.tabs.each(function(i, s) { return t(s).attr("aria-controls") === n ? (e = i, !1) : void 0 }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && -1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function() { return { tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t() } },
        _tabKeydown: function(e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"),
                n = this.tabs.index(i),
                s = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        n++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        s = !1, n--;
                        break;
                    case t.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(n !== this.options.active && n);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, s), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function() { this.option("active", n) }, this.delay))
            }
        },
        _panelKeydown: function(e) { this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus")) },
        _handlePageNav: function(e) { return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0 },
        _findNextTab: function(e, i) { for (var n = this.tabs.length - 1; - 1 !== t.inArray(function() { return e > n && (e = 0), 0 > e && (e = n), e }(), this.options.disabled);) e = i ? e + 1 : e - 1; return e },
        _focusNextTab: function(t, e) { return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t },
        _setOption: function(t, e) { return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void("heightStyle" === t && this._setupHeightStyle(e))) },
        _sanitizeSelector: function(t) { return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : "" },
        refresh: function() {
            var e = this.options,
                i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function(t) { return i.index(t) }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function() { this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({ "aria-selected": "false", "aria-expanded": "false", tabIndex: -1 }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({ "aria-hidden": "true" }), this.active.length ? (this.active.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({ "aria-hidden": "false" })) : this.tabs.eq(0).attr("tabIndex", 0) },
        _processTabs: function() {
            var e = this,
                i = this.tabs,
                n = this.anchors,
                s = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function(e) { t(this).is(".ui-state-disabled") && e.preventDefault() }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function() { t(this).closest("li").is(".ui-state-disabled") && this.blur() }), this.tabs = this.tablist.find("> li:has(a[href])").attr({ role: "tab", tabIndex: -1 }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function() { return t("a", this)[0] }).attr({ role: "presentation", tabIndex: -1 }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function(i, n) {
                var s, o, a, r = t(n).uniqueId().attr("id"),
                    l = t(n).closest("li"),
                    h = l.attr("aria-controls");
                e._isLocal(n) ? (s = n.hash, a = s.substring(1), o = e.element.find(e._sanitizeSelector(s))) : (a = l.attr("aria-controls") || t({}).uniqueId()[0].id, s = "#" + a, o = e.element.find(s), o.length || (o = e._createPanel(a), o.insertAfter(e.panels[i - 1] || e.tablist)), o.attr("aria-live", "polite")), o.length && (e.panels = e.panels.add(o)), h && l.data("ui-tabs-aria-controls", h), l.attr({ "aria-controls": a, "aria-labelledby": r }), o.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(s.not(this.panels)))
        },
        _getList: function() { return this.tablist || this.element.find("ol, ul").eq(0) },
        _createPanel: function(e) { return t("<div>").attr("id", e).data("ui-tabs-destroy", !0) },
        _setOptionDisabled: function(e) {
            var i, n, s;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), s = 0; n = this.tabs[s]; s++) i = t(n), !0 === e || -1 !== t.inArray(s, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function(e) {
            var i = {};
            e && t.each(e.split(" "), function(t, e) { i[e] = "_eventHandler" }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, { click: function(t) { t.preventDefault() } }), this._on(this.anchors, i), this._on(this.tabs, { keydown: "_tabKeydown" }), this._on(this.panels, { keydown: "_panelKeydown" }), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function(e) {
            var i, n = this.element.parent();
            "fill" === e ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function() {
                var e = t(this),
                    n = e.css("position");
                "absolute" !== n && "fixed" !== n && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function() { i -= t(this).outerHeight(!0) }), this.panels.each(function() { t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height())) }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function() { i = Math.max(i, t(this).height("").height()) }).height(i))
        },
        _eventHandler: function(e) {
            var i = this.options,
                n = this.active,
                s = t(e.currentTarget),
                o = s.closest("li"),
                a = o[0] === n[0],
                r = a && i.collapsible,
                l = r ? t() : this._getPanelForTab(o),
                h = n.length ? this._getPanelForTab(n) : t(),
                c = { oldTab: n, oldPanel: h, newTab: r ? t() : o, newPanel: l };
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || !1 === this._trigger("beforeActivate", e, c) || (i.active = !r && this.tabs.index(o), this.active = a ? t() : o, this.xhr && this.xhr.abort(), h.length || l.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(o), e), this._toggle(e, c))
        },
        _toggle: function(e, i) {
            function n() { o.running = !1, o._trigger("activate", e, i) }

            function s() { o._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && o.options.show ? o._show(a, o.options.show, n) : (a.show(), n()) }
            var o = this,
                a = i.newPanel,
                r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function() { o._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), s() }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), s()), r.attr("aria-hidden", "true"), i.oldTab.attr({ "aria-selected": "false", "aria-expanded": "false" }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function() { return 0 === t(this).attr("tabIndex") }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({ "aria-selected": "true", "aria-expanded": "true", tabIndex: 0 })
        },
        _activate: function(e) {
            var i, n = this._findActive(e);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({ target: i, currentTarget: i, preventDefault: t.noop }))
        },
        _findActive: function(e) { return !1 === e ? t() : this.tabs.eq(e) },
        _getIndex: function(e) { return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e },
        _destroy: function() {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function() { t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded") }), this.tabs.each(function() {
                var e = t(this),
                    i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function(e) { var i = this.options.disabled;!1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function(t) { return t !== e ? t : null }) : t.map(this.tabs, function(t, i) { return i !== e ? i : null })), this._setOptionDisabled(i)) },
        disable: function(e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0;
                else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function(e, i) {
            e = this._getIndex(e);
            var n = this,
                s = this.tabs.eq(e),
                o = s.find(".ui-tabs-anchor"),
                a = this._getPanelForTab(s),
                r = { tab: s, panel: a },
                l = function(t, e) { "abort" === e && n.panels.stop(!1, !0), n._removeClass(s, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === n.xhr && delete n.xhr };
            this._isLocal(o[0]) || (this.xhr = t.ajax(this._ajaxSettings(o, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(s, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function(t, e, s) { setTimeout(function() { a.html(t), n._trigger("load", i, r), l(s, e) }, 1) }).fail(function(t, e) { setTimeout(function() { l(t, e) }, 1) })))
        },
        _ajaxSettings: function(e, i, n) { var s = this; return { url: e.attr("href").replace(/#.*$/, ""), beforeSend: function(e, o) { return s._trigger("beforeLoad", i, t.extend({ jqXHR: e, ajaxSettings: o }, n)) } } },
        _getPanelForTab: function(e) { var i = t(e).attr("aria-controls"); return this.element.find(this._sanitizeSelector("#" + i)) }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, { _processTabs: function() { this._superApply(arguments), this._addClass(this.tabs, "ui-tab") } }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1",
        options: { classes: { "ui-tooltip": "ui-corner-all ui-widget-shadow" }, content: function() { var e = t(this).attr("title") || ""; return t("<a>").text(e).html() }, hide: !0, items: "[title]:not([disabled])", position: { my: "left top+15", at: "left bottom", collision: "flipfit flip" }, show: !0, track: !1, close: null, open: null },
        _addDescribedBy: function(e, i) {
            var n = (e.attr("aria-describedby") || "").split(/\s+/);
            n.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(n.join(" ")))
        },
        _removeDescribedBy: function(e) {
            var i = e.data("ui-tooltip-id"),
                n = (e.attr("aria-describedby") || "").split(/\s+/),
                s = t.inArray(i, n); - 1 !== s && n.splice(s, 1), e.removeData("ui-tooltip-id"), n = t.trim(n.join(" ")), n ? e.attr("aria-describedby", n) : e.removeAttr("aria-describedby")
        },
        _create: function() { this._on({ mouseover: "open", focusin: "open" }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({ role: "log", "aria-live": "assertive", "aria-relevant": "additions" }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([]) },
        _setOption: function(e, i) {
            var n = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function(t, e) { n._updateContent(e.element) })
        },
        _setOptionDisabled: function(t) { this[t ? "_disable" : "_enable"]() },
        _disable: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur");
                s.target = s.currentTarget = n.element[0], e.close(s, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function() { var e = t(this); return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0 }))
        },
        _enable: function() {
            this.disabledTitles.each(function() {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        },
        open: function(e) {
            var i = this,
                n = t(e ? e.target : this.element).closest(this.options.items);
            n.length && !n.data("ui-tooltip-id") && (n.attr("title") && n.data("ui-tooltip-title", n.attr("title")), n.data("ui-tooltip-open", !0), e && "mouseover" === e.type && n.parents().each(function() {
                var e, n = t(this);
                n.data("ui-tooltip-open") && (e = t.Event("blur"), e.target = e.currentTarget = this, i.close(e, !0)), n.attr("title") && (n.uniqueId(), i.parents[this.id] = { element: this, title: n.attr("title") }, n.attr("title", ""))
            }), this._registerCloseHandlers(e, n), this._updateContent(n, e))
        },
        _updateContent: function(t, e) {
            var i, n = this.options.content,
                s = this,
                o = e ? e.type : null;
            return "string" == typeof n || n.nodeType || n.jquery ? this._open(e, t, n) : void((i = n.call(t[0], function(i) { s._delay(function() { t.data("ui-tooltip-open") && (e && (e.type = o), this._open(e, t, i)) }) })) && this._open(e, t, i))
        },
        _open: function(e, i, n) {
            function s(t) { h.of = t, a.is(":hidden") || a.position(h) }
            var o, a, r, l, h = t.extend({}, this.options.position);
            if (n) {
                if (o = this._find(i)) return void o.tooltip.find(".ui-tooltip-content").html(n);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), o = this._tooltip(i), a = o.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(n), this.liveRegion.children().hide(), l = t("<div>").html(a.find(".ui-tooltip-content").html()), l.removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, { mousemove: s }), s(e)) : a.position(t.extend({ of: i }, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function() { a.is(":visible") && (s(h.of), clearInterval(r)) }, t.fx.interval)), this._trigger("open", e, { tooltip: a })
            }
        },
        _registerCloseHandlers: function(e, i) {
            var n = {
                keyup: function(e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var n = t.Event(e);
                        n.currentTarget = i[0], this.close(n, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (n.remove = function() { this._removeTooltip(this._find(i).tooltip) }), e && "mouseover" !== e.type || (n.mouseleave = "close"), e && "focusin" !== e.type || (n.focusout = "close"), this._on(!0, i, n)
        },
        close: function(e) {
            var i, n = this,
                s = t(e ? e.currentTarget : this.element),
                o = this._find(s);
            return o ? (i = o.tooltip, void(o.closing || (clearInterval(this.delayedShow), s.data("ui-tooltip-title") && !s.attr("title") && s.attr("title", s.data("ui-tooltip-title")), this._removeDescribedBy(s), o.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function() { n._removeTooltip(t(this)) }), s.removeData("ui-tooltip-open"), this._off(s, "mouseleave focusout keyup"), s[0] !== this.element[0] && this._off(s, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function(e, i) { t(i.element).attr("title", i.title), delete n.parents[e] }), o.closing = !0, this._trigger("close", e, { tooltip: i }), o.hiding || (o.closing = !1)))) : void s.removeData("ui-tooltip-open")
        },
        _tooltip: function(e) {
            var i = t("<div>").attr("role", "tooltip"),
                n = t("<div>").appendTo(i),
                s = i.uniqueId().attr("id");
            return this._addClass(n, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[s] = { element: e, tooltip: i }
        },
        _find: function(t) { var e = t.data("ui-tooltip-id"); return e ? this.tooltips[e] : null },
        _removeTooltip: function(t) { t.remove(), delete this.tooltips[t.attr("id")] },
        _appendTo: function(t) { var e = t.closest(".ui-front, dialog"); return e.length || (e = this.document[0].body), e },
        _destroy: function() {
            var e = this;
            t.each(this.tooltips, function(i, n) {
                var s = t.Event("blur"),
                    o = n.element;
                s.target = s.currentTarget = o[0], e.close(s, !0), t("#" + i).remove(), o.data("ui-tooltip-title") && (o.attr("title") || o.attr("title", o.data("ui-tooltip-title")), o.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, { options: { tooltipClass: null }, _tooltip: function() { var t = this._superApply(arguments); return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t } }), t.ui.tooltip
}), eval(function(t, e, i, n, s, o) {
        if (s = function(t) { return (t < 62 ? "" : s(parseInt(t / 62))) + ((t %= 62) > 35 ? String.fromCharCode(t + 29) : t.toString(36)) }, !"".replace(/^/, String)) {
            for (; i--;) o[s(i)] = n[i] || s(i);
            n = [function(t) { return o[t] }], s = function() { return "\\w+" }, i = 1
        }
        for (; i--;) n[i] && (t = t.replace(new RegExp("\\b" + s(i) + "\\b", "g"), n[i]));
        return t
    }("h.i['1a']=h.i['z'];h.O(h.i,{y:'D',z:9(x,t,b,c,d){6 h.i[h.i.y](x,t,b,c,d)},17:9(x,t,b,c,d){6 c*(t/=d)*t+b},D:9(x,t,b,c,d){6-c*(t/=d)*(t-2)+b},13:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t+b;6-c/2*((--t)*(t-2)-1)+b},X:9(x,t,b,c,d){6 c*(t/=d)*t*t+b},U:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t+1)+b},R:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t+b;6 c/2*((t-=2)*t*t+2)+b},N:9(x,t,b,c,d){6 c*(t/=d)*t*t*t+b},M:9(x,t,b,c,d){6-c*((t=t/d-1)*t*t*t-1)+b},L:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t+b;6-c/2*((t-=2)*t*t*t-2)+b},K:9(x,t,b,c,d){6 c*(t/=d)*t*t*t*t+b},J:9(x,t,b,c,d){6 c*((t=t/d-1)*t*t*t*t+1)+b},I:9(x,t,b,c,d){e((t/=d/2)<1)6 c/2*t*t*t*t*t+b;6 c/2*((t-=2)*t*t*t*t+2)+b},G:9(x,t,b,c,d){6-c*8.C(t/d*(8.g/2))+c+b},15:9(x,t,b,c,d){6 c*8.n(t/d*(8.g/2))+b},12:9(x,t,b,c,d){6-c/2*(8.C(8.g*t/d)-1)+b},Z:9(x,t,b,c,d){6(t==0)?b:c*8.j(2,10*(t/d-1))+b},Y:9(x,t,b,c,d){6(t==d)?b+c:c*(-8.j(2,-10*t/d)+1)+b},W:9(x,t,b,c,d){e(t==0)6 b;e(t==d)6 b+c;e((t/=d/2)<1)6 c/2*8.j(2,10*(t-1))+b;6 c/2*(-8.j(2,-10*--t)+2)+b},V:9(x,t,b,c,d){6-c*(8.o(1-(t/=d)*t)-1)+b},S:9(x,t,b,c,d){6 c*8.o(1-(t=t/d-1)*t)+b},Q:9(x,t,b,c,d){e((t/=d/2)<1)6-c/2*(8.o(1-t*t)-1)+b;6 c/2*(8.o(1-(t-=2)*t)+1)+b},P:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6-(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b},H:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d)==1)6 b+c;e(!p)p=d*.3;e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);6 a*8.j(2,-10*t)*8.n((t*d-s)*(2*8.g)/p)+c+b},T:9(x,t,b,c,d){f s=1.l;f p=0;f a=c;e(t==0)6 b;e((t/=d/2)==2)6 b+c;e(!p)p=d*(.3*1.5);e(a<8.w(c)){a=c;f s=p/4}m f s=p/(2*8.g)*8.r(c/a);e(t<1)6-.5*(a*8.j(2,10*(t-=1))*8.n((t*d-s)*(2*8.g)/p))+b;6 a*8.j(2,-10*(t-=1))*8.n((t*d-s)*(2*8.g)/p)*.5+c+b},F:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*(t/=d)*t*((s+1)*t-s)+b},E:9(x,t,b,c,d,s){e(s==u)s=1.l;6 c*((t=t/d-1)*t*((s+1)*t+s)+1)+b},16:9(x,t,b,c,d,s){e(s==u)s=1.l;e((t/=d/2)<1)6 c/2*(t*t*(((s*=(1.B))+1)*t-s))+b;6 c/2*((t-=2)*t*(((s*=(1.B))+1)*t+s)+2)+b},A:9(x,t,b,c,d){6 c-h.i.v(x,d-t,0,c,d)+b},v:9(x,t,b,c,d){e((t/=d)<(1/2.k)){6 c*(7.q*t*t)+b}m e(t<(2/2.k)){6 c*(7.q*(t-=(1.5/2.k))*t+.k)+b}m e(t<(2.5/2.k)){6 c*(7.q*(t-=(2.14/2.k))*t+.11)+b}m{6 c*(7.q*(t-=(2.18/2.k))*t+.19)+b}},1b:9(x,t,b,c,d){e(t<d/2)6 h.i.A(x,t*2,0,c,d)*.5+b;6 h.i.v(x,t*2-d,0,c,d)*.5+c*.5+b}});", 0, 74, "||||||return||Math|function|||||if|var|PI|jQuery|easing|pow|75|70158|else|sin|sqrt||5625|asin|||undefined|easeOutBounce|abs||def|swing|easeInBounce|525|cos|easeOutQuad|easeOutBack|easeInBack|easeInSine|easeOutElastic|easeInOutQuint|easeOutQuint|easeInQuint|easeInOutQuart|easeOutQuart|easeInQuart|extend|easeInElastic|easeInOutCirc|easeInOutCubic|easeOutCirc|easeInOutElastic|easeOutCubic|easeInCirc|easeInOutExpo|easeInCubic|easeOutExpo|easeInExpo||9375|easeInOutSine|easeInOutQuad|25|easeOutSine|easeInOutBack|easeInQuad|625|984375|jswing|easeInOutBounce".split("|"), 0, {})),
    function(t) {
        var e, i, n, s, o, a, r, l, h, c, u, d, p, f = 0,
            g = {},
            m = [],
            v = 0,
            b = {},
            y = [],
            _ = null,
            w = new Image,
            x = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
            C = /[^\.]\.(swf)\s*$/i,
            k = 1,
            T = 0,
            z = "",
            D = !1,
            S = t.extend(t("<div/>")[0], { prop: 0 }),
            I = t.browser.msie && t.browser.version < 7 && !window.XMLHttpRequest,
            P = function() { i.hide(), w.onerror = w.onload = null, _ && _.abort(), e.empty() },
            W = function() {
                if (!1 === g.onError(m, f, g)) return i.hide(), void(D = !1);
                g.titleShow = !1, g.width = "auto", g.height = "auto", e.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), E()
            },
            O = function() {
                var n, s, o, r, l, h, c = m[f];
                if (P(), g = t.extend({}, t.fn.fancybox.defaults, void 0 === t(c).data("fancybox") ? g : t(c).data("fancybox")), !1 === (h = g.onStart(m, f, g))) return void(D = !1);
                if ("object" == typeof h && (g = t.extend(g, h)), o = g.title || (c.nodeName ? t(c).attr("title") : c.title) || "", c.nodeName && !g.orig && (g.orig = t(c).children("img:first").length ? t(c).children("img:first") : t(c)), "" === o && g.orig && g.titleFromAlt && (o = g.orig.attr("alt")), n = g.href || (c.nodeName ? t(c).attr("href") : c.href) || null, (/^(?:javascript)/i.test(n) || "#" == n) && (n = null), g.type ? (s = g.type, n || (n = g.content)) : g.content ? s = "html" : n && (s = n.match(x) ? "image" : n.match(C) ? "swf" : t(c).hasClass("iframe") ? "iframe" : 0 === n.indexOf("#") ? "inline" : "ajax"), !s) return void W();
                switch ("inline" == s && (c = n.substr(n.indexOf("#")), s = t(c).length > 0 ? "inline" : "ajax"), g.type = s, g.href = n, g.title = o, g.autoDimensions && ("html" == g.type || "inline" == g.type || "ajax" == g.type ? (g.width = "auto", g.height = "auto") : g.autoDimensions = !1), g.modal && (g.overlayShow = !0, g.hideOnOverlayClick = !1, g.hideOnContentClick = !1, g.enableEscapeButton = !1, g.showCloseButton = !1), g.padding = parseInt(g.padding, 10), g.margin = parseInt(g.margin, 10), e.css("padding", g.padding + g.margin), t(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() { t(this).replaceWith(a.children()) }), s) {
                    case "html":
                        e.html(g.content), E();
                        break;
                    case "inline":
                        if (!0 === t(c).parent().is("#fancybox-content")) return void(D = !1);
                        t('<div class="fancybox-inline-tmp" />').hide().insertBefore(t(c)).bind("fancybox-cleanup", function() { t(this).replaceWith(a.children()) }).bind("fancybox-cancel", function() { t(this).replaceWith(e.children()) }), t(c).appendTo(e), E();
                        break;
                    case "image":
                        D = !1, t.fancybox.showActivity(), w = new Image, w.onerror = function() { W() }, w.onload = function() { D = !0, w.onerror = w.onload = null, H() }, w.src = n;
                        break;
                    case "swf":
                        g.scrolling = "no", r = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + g.width + '" height="' + g.height + '"><param name="movie" value="' + n + '"></param>', l = "", t.each(g.swf, function(t, e) { r += '<param name="' + t + '" value="' + e + '"></param>', l += " " + t + '="' + e + '"' }), r += '<embed src="' + n + '" type="application/x-shockwave-flash" width="' + g.width + '" height="' + g.height + '"' + l + "></embed></object>", e.html(r), E();
                        break;
                    case "ajax":
                        D = !1, t.fancybox.showActivity(), g.ajax.win = g.ajax.success, _ = t.ajax(t.extend({}, g.ajax, { url: n, data: g.ajax.data || {}, error: function(t, e, i) { t.status > 0 && W() }, success: function(t, s, o) { if (200 == ("object" == typeof o ? o : _).status) { if ("function" == typeof g.ajax.win) { if (!1 === (h = g.ajax.win(n, t, s, o))) return void i.hide(); "string" != typeof h && "object" != typeof h || (t = h) } e.html(t), E() } } }));
                        break;
                    case "iframe":
                        M()
                }
            },
            E = function() {
                var i = g.width,
                    n = g.height;
                i = i.toString().indexOf("%") > -1 ? parseInt((t(window).width() - 2 * g.margin) * parseFloat(i) / 100, 10) + "px" : "auto" == i ? "auto" : i + "px", n = n.toString().indexOf("%") > -1 ? parseInt((t(window).height() - 2 * g.margin) * parseFloat(n) / 100, 10) + "px" : "auto" == n ? "auto" : n + "px", e.wrapInner('<div style="width:' + i + ";height:" + n + ";overflow: " + ("auto" == g.scrolling ? "auto" : "yes" == g.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>'), g.width = e.width(), g.height = e.height(), M()
            },
            H = function() { g.width = w.width, g.height = w.height, t("<img />").attr({ id: "fancybox-img", src: w.src, alt: g.title }).appendTo(e), M() },
            M = function() {
                var o, u;
                return i.hide(), s.is(":visible") && !1 === b.onCleanup(y, v, b) ? (t.event.trigger("fancybox-cancel"), void(D = !1)) : (D = !0, t(a.add(n)).unbind(), t(window).unbind("resize.fb scroll.fb"), t(document).unbind("keydown.fb"), s.is(":visible") && "outside" !== b.titlePosition && s.css("height", s.height()), y = m, v = f, b = g, b.overlayShow ? (n.css({ "background-color": b.overlayColor, opacity: b.overlayOpacity, cursor: b.hideOnOverlayClick ? "pointer" : "auto", height: t(document).height() }), n.is(":visible") || (I && t("select:not(#fancybox-tmp select)").filter(function() { return "hidden" !== this.style.visibility }).css({ visibility: "hidden" }).one("fancybox-cleanup", function() { this.style.visibility = "inherit" }), n.show())) : n.hide(), p = $(), L(), s.is(":visible") ? (t(r.add(h).add(c)).hide(), o = s.position(), d = { top: o.top, left: o.left, width: s.width(), height: s.height() }, u = d.width == p.width && d.height == p.height, void a.fadeTo(b.changeFade, .3, function() {
                    var i = function() { a.html(e.contents()).fadeTo(b.changeFade, 1, F) };
                    t.event.trigger("fancybox-change"), a.empty().removeAttr("filter").css({ "border-width": b.padding, width: p.width - 2 * b.padding, height: g.autoDimensions ? "auto" : p.height - T - 2 * b.padding }), u ? i() : (S.prop = 0, t(S).animate({ prop: 1 }, { duration: b.changeSpeed, easing: b.easingChange, step: R, complete: i }))
                })) : (s.removeAttr("style"), a.css("border-width", b.padding), "elastic" == b.transitionIn ? (d = Y(), a.html(e.contents()), s.show(), b.opacity && (p.opacity = 0), S.prop = 0, void t(S).animate({ prop: 1 }, { duration: b.speedIn, easing: b.easingIn, step: R, complete: F })) : ("inside" == b.titlePosition && T > 0 && l.show(), a.css({ width: p.width - 2 * b.padding, height: g.autoDimensions ? "auto" : p.height - T - 2 * b.padding }).html(e.contents()), void s.css(p).fadeIn("none" == b.transitionIn ? 0 : b.speedIn, F))))
            },
            A = function(t) { return !(!t || !t.length) && ("float" == b.titlePosition ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + t + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + b.titlePosition + '">' + t + "</div>") },
            L = function() {
                if (z = b.title || "", T = 0, l.empty().removeAttr("style").removeClass(), !1 === b.titleShow) return void l.hide();
                if (!(z = t.isFunction(b.titleFormat) ? b.titleFormat(z, y, v, b) : A(z)) || "" === z) return void l.hide();
                switch (l.addClass("fancybox-title-" + b.titlePosition).html(z).appendTo("body").show(), b.titlePosition) {
                    case "inside":
                        l.css({ width: p.width - 2 * b.padding, marginLeft: b.padding, marginRight: b.padding }), T = l.outerHeight(!0), l.appendTo(o), p.height += T;
                        break;
                    case "over":
                        l.css({ marginLeft: b.padding, width: p.width - 2 * b.padding, bottom: b.padding }).appendTo(o);
                        break;
                    case "float":
                        l.css("left", -1 * parseInt((l.width() - p.width - 40) / 2, 10)).appendTo(s);
                        break;
                    default:
                        l.css({ width: p.width - 2 * b.padding, paddingLeft: b.padding, paddingRight: b.padding }).appendTo(s)
                }
                l.hide()
            },
            N = function() {
                if ((b.enableEscapeButton || b.enableKeyboardNav) && t(document).bind("keydown.fb", function(e) { 27 == e.keyCode && b.enableEscapeButton ? (e.preventDefault(), t.fancybox.close()) : 37 != e.keyCode && 39 != e.keyCode || !b.enableKeyboardNav || "INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || "SELECT" === e.target.tagName || (e.preventDefault(), t.fancybox[37 == e.keyCode ? "prev" : "next"]()) }), !b.showNavArrows) return h.hide(), void c.hide();
                (b.cyclic && y.length > 1 || 0 !== v) && h.show(), (b.cyclic && y.length > 1 || v != y.length - 1) && c.show()
            },
            F = function() { t.support.opacity || (a.get(0).style.removeAttribute("filter"), s.get(0).style.removeAttribute("filter")), g.autoDimensions && a.css("height", "auto"), s.css("height", "auto"), z && z.length && l.show(), b.showCloseButton && r.show(), N(), b.hideOnContentClick && a.bind("click", t.fancybox.close), b.hideOnOverlayClick && n.bind("click", t.fancybox.close), t(window).bind("resize.fb", t.fancybox.resize), b.centerOnScroll && t(window).bind("scroll.fb", t.fancybox.center), "iframe" == b.type && t('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (t.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + g.scrolling + '" src="' + b.href + '"></iframe>').appendTo(a), s.show(), D = !1, t.fancybox.center(), b.onComplete(y, v, b), j() },
            j = function() {
                var t, e;
                y.length - 1 > v && void 0 !== (t = y[v + 1].href) && t.match(x) && (e = new Image, e.src = t), v > 0 && void 0 !== (t = y[v - 1].href) && t.match(x) && (e = new Image, e.src = t)
            },
            R = function(t) {
                var e = { width: parseInt(d.width + (p.width - d.width) * t, 10), height: parseInt(d.height + (p.height - d.height) * t, 10), top: parseInt(d.top + (p.top - d.top) * t, 10), left: parseInt(d.left + (p.left - d.left) * t, 10) };
                void 0 !== p.opacity && (e.opacity = t < .5 ? .5 : t), s.css(e), a.css({ width: e.width - 2 * b.padding, height: e.height - T * t - 2 * b.padding })
            },
            B = function() { return [t(window).width() - 2 * b.margin, t(window).height() - 2 * b.margin, t(document).scrollLeft() + b.margin, t(document).scrollTop() + b.margin] },
            $ = function() {
                var t, e = B(),
                    i = {},
                    n = b.autoScale,
                    s = 2 * b.padding;
                return b.width.toString().indexOf("%") > -1 ? i.width = parseInt(e[0] * parseFloat(b.width) / 100, 10) : i.width = b.width + s, b.height.toString().indexOf("%") > -1 ? i.height = parseInt(e[1] * parseFloat(b.height) / 100, 10) : i.height = b.height + s, n && (i.width > e[0] || i.height > e[1]) && ("image" == g.type || "swf" == g.type ? (t = b.width / b.height, i.width > e[0] && (i.width = e[0], i.height = parseInt((i.width - s) / t + s, 10)), i.height > e[1] && (i.height = e[1], i.width = parseInt((i.height - s) * t + s, 10))) : (i.width = Math.min(i.width, e[0]), i.height = Math.min(i.height, e[1]))), i.top = parseInt(Math.max(e[3] - 20, e[3] + .5 * (e[1] - i.height - 40)), 10), i.left = parseInt(Math.max(e[2] - 20, e[2] + .5 * (e[0] - i.width - 40)), 10), i
            },
            q = function(t) { var e = t.offset(); return e.top += parseInt(t.css("paddingTop"), 10) || 0, e.left += parseInt(t.css("paddingLeft"), 10) || 0, e.top += parseInt(t.css("border-top-width"), 10) || 0, e.left += parseInt(t.css("border-left-width"), 10) || 0, e.width = t.width(), e.height = t.height(), e },
            Y = function() {
                var e, i, n = !!g.orig && t(g.orig),
                    s = {};
                return n && n.length ? (e = q(n), s = { width: e.width + 2 * b.padding, height: e.height + 2 * b.padding, top: e.top - b.padding - 20, left: e.left - b.padding - 20 }) : (i = B(), s = { width: 2 * b.padding, height: 2 * b.padding, top: parseInt(i[3] + .5 * i[1], 10), left: parseInt(i[2] + .5 * i[0], 10) }), s
            },
            X = function() {
                if (!i.is(":visible")) return void clearInterval(u);
                t("div", i).css("top", -40 * k + "px"), k = (k + 1) % 12
            };
        t.fn.fancybox = function(e) {
            return t(this).length ? (t(this).data("fancybox", t.extend({}, e, t.metadata ? t(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(e) {
                if (e.preventDefault(), !D) {
                    D = !0, t(this).blur(), m = [], f = 0;
                    var i = t(this).attr("rel") || "";
                    i && "" != i && "nofollow" !== i ? (m = t("a[rel=" + i + "], area[rel=" + i + "]"), f = m.index(this)) : m.push(this), O()
                }
            }), this) : this
        }, t.fancybox = function(e) {
            var i;
            if (!D) {
                if (D = !0, i = void 0 !== arguments[1] ? arguments[1] : {}, m = [], f = parseInt(i.index, 10) || 0, t.isArray(e)) {
                    for (var n = 0, s = e.length; n < s; n++) "object" == typeof e[n] ? t(e[n]).data("fancybox", t.extend({}, i, e[n])) : e[n] = t({}).data("fancybox", t.extend({ content: e[n] }, i));
                    m = jQuery.merge(m, e)
                } else "object" == typeof e ? t(e).data("fancybox", t.extend({}, i, e)) : e = t({}).data("fancybox", t.extend({ content: e }, i)), m.push(e);
                (f > m.length || f < 0) && (f = 0), O()
            }
        }, t.fancybox.showActivity = function() { clearInterval(u), i.show(), u = setInterval(X, 66) }, t.fancybox.hideActivity = function() { i.hide() }, t.fancybox.next = function() { return t.fancybox.pos(v + 1) }, t.fancybox.prev = function() { return t.fancybox.pos(v - 1) }, t.fancybox.pos = function(t) { D || (t = parseInt(t), m = y, t > -1 && t < y.length ? (f = t, O()) : b.cyclic && y.length > 1 && (f = t >= y.length ? 0 : y.length - 1, O())) }, t.fancybox.cancel = function() { D || (D = !0, t.event.trigger("fancybox-cancel"), P(), g.onCancel(m, f, g), D = !1) }, t.fancybox.close = function() {
            function e() { n.fadeOut("fast"), l.empty().hide(), s.hide(), t.event.trigger("fancybox-cleanup"), a.empty(), b.onClosed(y, v, b), y = g = [], v = f = 0, b = g = {}, D = !1 }
            if (!D && !s.is(":hidden")) {
                if (D = !0, b && !1 === b.onCleanup(y, v, b)) return void(D = !1);
                if (P(), t(r.add(h).add(c)).hide(), t(a.add(n)).unbind(), t(window).unbind("resize.fb scroll.fb"), t(document).unbind("keydown.fb"), a.find("iframe").attr("src", I && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"), "inside" !== b.titlePosition && l.empty(), s.stop(), "elastic" == b.transitionOut) {
                    d = Y();
                    var i = s.position();
                    p = { top: i.top, left: i.left, width: s.width(), height: s.height() }, b.opacity && (p.opacity = 1), l.empty().hide(), S.prop = 1, t(S).animate({ prop: 0 }, { duration: b.speedOut, easing: b.easingOut, step: R, complete: e })
                } else s.fadeOut("none" == b.transitionOut ? 0 : b.speedOut, e)
            }
        }, t.fancybox.resize = function() { n.is(":visible") && n.css("height", t(document).height()), t.fancybox.center(!0) }, t.fancybox.center = function() {
            var t, e;
            D || (e = !0 === arguments[0] ? 1 : 0, t = B(), !e && (s.width() > t[0] || s.height() > t[1]) || s.stop().animate({ top: parseInt(Math.max(t[3] - 20, t[3] + .5 * (t[1] - a.height() - 40) - b.padding)), left: parseInt(Math.max(t[2] - 20, t[2] + .5 * (t[0] - a.width() - 40) - b.padding)) }, "number" == typeof arguments[0] ? arguments[0] : 200))
        }, t.fancybox.init = function() { t("#fancybox-wrap").length || (t("body").append(e = t('<div id="fancybox-tmp"></div>'), i = t('<div id="fancybox-loading"><div></div></div>'), n = t('<div id="fancybox-overlay"></div>'), s = t('<div id="fancybox-wrap"></div>')), o = t('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(s), o.append(a = t('<div id="fancybox-content"></div>'), r = t('<a id="fancybox-close"></a>'), l = t('<div id="fancybox-title"></div>'), h = t('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), c = t('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), r.click(t.fancybox.close), i.click(t.fancybox.cancel), h.click(function(e) { e.preventDefault(), t.fancybox.prev() }), c.click(function(e) { e.preventDefault(), t.fancybox.next() }), t.fn.mousewheel && s.bind("mousewheel.fb", function(e, i) { D ? e.preventDefault() : 0 != t(e.target).get(0).clientHeight && t(e.target).get(0).scrollHeight !== t(e.target).get(0).clientHeight || (e.preventDefault(), t.fancybox[i > 0 ? "prev" : "next"]()) }), t.support.opacity || s.addClass("fancybox-ie"), I && (i.addClass("fancybox-ie6"), s.addClass("fancybox-ie6"), t('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(o))) }, t.fn.fancybox.defaults = { padding: 10, margin: 40, opacity: !1, modal: !1, cyclic: !1, scrolling: "auto", width: 560, height: 340, autoScale: !0, autoDimensions: !0, centerOnScroll: !1, ajax: {}, swf: { wmode: "transparent" }, hideOnOverlayClick: !0, hideOnContentClick: !1, overlayShow: !0, overlayOpacity: .7, overlayColor: "#777", titleShow: !0, titlePosition: "float", titleFormat: null, titleFromAlt: !1, transitionIn: "fade", transitionOut: "fade", speedIn: 300, speedOut: 300, changeSpeed: 300, changeFade: "fast", easingIn: "swing", easingOut: "swing", showCloseButton: !0, showNavArrows: !0, enableEscapeButton: !0, enableKeyboardNav: !0, onStart: function() {}, onCancel: function() {}, onComplete: function() {}, onCleanup: function() {}, onClosed: function() {}, onError: function() {} }, t(document).ready(function() { t.fancybox.init() })
    }(jQuery),
    function(t) {
        var e, i, n, s, o, a, r, l, h, c, u, d, p, f = 0,
            g = {},
            m = [],
            v = 0,
            b = {},
            y = [],
            _ = null,
            w = new Image,
            x = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i,
            C = /[^\.]\.(swf)\s*$/i,
            k = 1,
            T = 0,
            z = "",
            D = !1,
            S = t.extend(t("<div/>")[0], { prop: 0 }),
            I = t.browser.msie && t.browser.version < 7 && !window.XMLHttpRequest,
            P = function() { i.hide(), w.onerror = w.onload = null, _ && _.abort(), e.empty() },
            W = function() {!1 === g.onError(m, f, g) ? (i.hide(), D = !1) : (g.titleShow = !1, g.width = "auto", g.height = "auto", e.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), E()) },
            O = function() {
                var n, s, o, r, l, h, c = m[f];
                if (P(), g = t.extend({}, t.fn.fancybox.defaults, void 0 === t(c).data("fancybox") ? g : t(c).data("fancybox")), !1 === (h = g.onStart(m, f, g))) D = !1;
                else if ("object" == typeof h && (g = t.extend(g, h)), o = g.title || (c.nodeName ? t(c).attr("title") : c.title) || "", c.nodeName && !g.orig && (g.orig = t(c).children("img:first").length ? t(c).children("img:first") : t(c)), "" === o && g.orig && g.titleFromAlt && (o = g.orig.attr("alt")), n = g.href || (c.nodeName ? t(c).attr("href") : c.href) || null, (/^(?:javascript)/i.test(n) || "#" == n) && (n = null), g.type ? (s = g.type, n || (n = g.content)) : g.content ? s = "html" : n && (s = n.match(x) ? "image" : n.match(C) ? "swf" : t(c).hasClass("iframe") ? "iframe" : 0 === n.indexOf("#") ? "inline" : "ajax"), s) switch ("inline" == s && (c = n.substr(n.indexOf("#")), s = t(c).length > 0 ? "inline" : "ajax"), g.type = s, g.href = n, g.title = o, g.autoDimensions && ("html" == g.type || "inline" == g.type || "ajax" == g.type ? (g.width = "auto", g.height = "auto") : g.autoDimensions = !1), g.modal && (g.overlayShow = !0, g.hideOnOverlayClick = !1, g.hideOnContentClick = !1, g.enableEscapeButton = !1, g.showCloseButton = !1), g.padding = parseInt(g.padding, 10), g.margin = parseInt(g.margin, 10), e.css("padding", g.padding + g.margin), t(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() { t(this).replaceWith(a.children()) }), s) {
                    case "html":
                        e.html(g.content), E();
                        break;
                    case "inline":
                        if (!0 === t(c).parent().is("#fancybox-content")) { D = !1; break } t('<div class="fancybox-inline-tmp" />').hide().insertBefore(t(c)).bind("fancybox-cleanup", function() { t(this).replaceWith(a.children()) }).bind("fancybox-cancel", function() { t(this).replaceWith(e.children()) }), t(c).appendTo(e), E();
                        break;
                    case "image":
                        D = !1, t.fancybox.showActivity(), w = new Image, w.onerror = function() { W() }, w.onload = function() { D = !0, w.onerror = w.onload = null, g.width = w.width, g.height = w.height, t("<img />").attr({ id: "fancybox-img", src: w.src, alt: g.title }).appendTo(e), H() }, w.src = n;
                        break;
                    case "swf":
                        g.scrolling = "no", r = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + g.width + '" height="' + g.height + '"><param name="movie" value="' + n + '"></param>', l = "", t.each(g.swf, function(t, e) { r += '<param name="' + t + '" value="' + e + '"></param>', l += " " + t + '="' + e + '"' }), r += '<embed src="' + n + '" type="application/x-shockwave-flash" width="' + g.width + '" height="' + g.height + '"' + l + "></embed></object>", e.html(r), E();
                        break;
                    case "ajax":
                        D = !1, t.fancybox.showActivity(), g.ajax.win = g.ajax.success, _ = t.ajax(t.extend({}, g.ajax, { url: n, data: g.ajax.data || {}, error: function(t) { t.status > 0 && W() }, success: function(t, s, o) { if (200 == ("object" == typeof o ? o : _).status) { if ("function" == typeof g.ajax.win) { if (!1 === (h = g.ajax.win(n, t, s, o))) return void i.hide(); "string" != typeof h && "object" != typeof h || (t = h) } e.html(t), E() } } }));
                        break;
                    case "iframe":
                        H()
                } else W()
            },
            E = function() {
                var i = g.width,
                    n = g.height;
                i = i.toString().indexOf("%") > -1 ? parseInt((t(window).width() - 2 * g.margin) * parseFloat(i) / 100, 10) + "px" : "auto" == i ? "auto" : i + "px", n = n.toString().indexOf("%") > -1 ? parseInt((t(window).height() - 2 * g.margin) * parseFloat(n) / 100, 10) + "px" : "auto" == n ? "auto" : n + "px", e.wrapInner('<div style="width:' + i + ";height:" + n + ";overflow: " + ("auto" == g.scrolling ? "auto" : "yes" == g.scrolling ? "scroll" : "hidden") + ';position:relative;"></div>'), g.width = e.width(), g.height = e.height(), H()
            },
            H = function() {
                var u, _;
                if (i.hide(), s.is(":visible") && !1 === b.onCleanup(y, v, b)) t.event.trigger("fancybox-cancel"), D = !1;
                else {
                    if (D = !0, t(a.add(n)).unbind(), t(window).unbind("resize.fb scroll.fb"), t(document).unbind("keydown.fb"), s.is(":visible") && "outside" !== b.titlePosition && s.css("height", s.height()), y = m, v = f, b = g, b.overlayShow ? (n.css({ "background-color": b.overlayColor, opacity: b.overlayOpacity, cursor: b.hideOnOverlayClick ? "pointer" : "auto", height: t(document).height() }), n.is(":visible") || (I && t("select:not(#fancybox-tmp select)").filter(function() { return "hidden" !== this.style.visibility }).css({ visibility: "hidden" }).one("fancybox-cleanup", function() { this.style.visibility = "inherit" }), n.show())) : n.hide(), p = F(), z = b.title || "", T = 0, l.empty().removeAttr("style").removeClass(), !1 !== b.titleShow && (u = t.isFunction(b.titleFormat) ? b.titleFormat(z, y, v, b) : !(!z || !z.length) && ("float" == b.titlePosition ? '<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + z + '</td><td id="fancybox-title-float-right"></td></tr></table>' : '<div id="fancybox-title-' + b.titlePosition + '">' + z + "</div>"), (z = u) && "" !== z)) switch (l.addClass("fancybox-title-" + b.titlePosition).html(z).appendTo("body").show(), b.titlePosition) {
                        case "inside":
                            l.css({ width: p.width - 2 * b.padding, marginLeft: b.padding, marginRight: b.padding }), T = l.outerHeight(!0), l.appendTo(o), p.height += T;
                            break;
                        case "over":
                            l.css({ marginLeft: b.padding, width: p.width - 2 * b.padding, bottom: b.padding }).appendTo(o);
                            break;
                        case "float":
                            l.css("left", -1 * parseInt((l.width() - p.width - 40) / 2, 10)).appendTo(s);
                            break;
                        default:
                            l.css({ width: p.width - 2 * b.padding, paddingLeft: b.padding, paddingRight: b.padding }).appendTo(s)
                    }
                    l.hide(), s.is(":visible") ? (t(r.add(h).add(c)).hide(), u = s.position(), d = { top: u.top, left: u.left, width: s.width(), height: s.height() }, _ = d.width == p.width && d.height == p.height, a.fadeTo(b.changeFade, .3, function() {
                        var i = function() { a.html(e.contents()).fadeTo(b.changeFade, 1, A) };
                        t.event.trigger("fancybox-change"), a.empty().removeAttr("filter").css({ "border-width": b.padding, width: p.width - 2 * b.padding, height: g.autoDimensions ? "auto" : p.height - T - 2 * b.padding }), _ ? i() : (S.prop = 0, t(S).animate({ prop: 1 }, { duration: b.changeSpeed, easing: b.easingChange, step: L, complete: i }))
                    })) : (s.removeAttr("style"), a.css("border-width", b.padding), "elastic" == b.transitionIn ? (d = j(), a.html(e.contents()), s.show(), b.opacity && (p.opacity = 0), S.prop = 0, t(S).animate({ prop: 1 }, { duration: b.speedIn, easing: b.easingIn, step: L, complete: A })) : ("inside" == b.titlePosition && T > 0 && l.show(), a.css({ width: p.width - 2 * b.padding, height: g.autoDimensions ? "auto" : p.height - T - 2 * b.padding }).html(e.contents()), s.css(p).fadeIn("none" == b.transitionIn ? 0 : b.speedIn, A)))
                }
            },
            M = function() {
                (b.enableEscapeButton || b.enableKeyboardNav) && t(document).bind("keydown.fb", function(e) { 27 == e.keyCode && b.enableEscapeButton ? (e.preventDefault(), t.fancybox.close()) : 37 != e.keyCode && 39 != e.keyCode || !b.enableKeyboardNav || "INPUT" === e.target.tagName || "TEXTAREA" === e.target.tagName || "SELECT" === e.target.tagName || (e.preventDefault(), t.fancybox[37 == e.keyCode ? "prev" : "next"]()) }), b.showNavArrows ? ((b.cyclic && y.length > 1 || 0 !== v) && h.show(), (b.cyclic && y.length > 1 || v != y.length - 1) && c.show()) : (h.hide(), c.hide())
            },
            A = function() {
                t.support.opacity || (a.get(0).style.removeAttribute("filter"), s.get(0).style.removeAttribute("filter")), g.autoDimensions && a.css("height", "auto"), s.css("height", "auto"), z && z.length && l.show(), b.showCloseButton && r.show(), M(), b.hideOnContentClick && a.bind("click", t.fancybox.close), b.hideOnOverlayClick && n.bind("click", t.fancybox.close), t(window).bind("resize.fb", t.fancybox.resize), b.centerOnScroll && t(window).bind("scroll.fb", t.fancybox.center), "iframe" == b.type && t('<iframe id="fancybox-frame" name="fancybox-frame' + (new Date).getTime() + '" frameborder="0" hspace="0" ' + (t.browser.msie ? 'allowtransparency="true""' : "") + ' scrolling="' + g.scrolling + '" src="' + b.href + '"></iframe>').appendTo(a), s.show(), D = !1, t.fancybox.center(), b.onComplete(y, v, b);
                var e, i;
                y.length - 1 > v && void 0 !== (e = y[v + 1].href) && e.match(x) && (i = new Image, i.src = e), v > 0 && void 0 !== (e = y[v - 1].href) && e.match(x) && (i = new Image, i.src = e)
            },
            L = function(t) {
                var e = { width: parseInt(d.width + (p.width - d.width) * t, 10), height: parseInt(d.height + (p.height - d.height) * t, 10), top: parseInt(d.top + (p.top - d.top) * t, 10), left: parseInt(d.left + (p.left - d.left) * t, 10) };
                void 0 !== p.opacity && (e.opacity = t < .5 ? .5 : t), s.css(e), a.css({ width: e.width - 2 * b.padding, height: e.height - T * t - 2 * b.padding })
            },
            N = function() { return [t(window).width() - 2 * b.margin, t(window).height() - 2 * b.margin, t(document).scrollLeft() + b.margin, t(document).scrollTop() + b.margin] },
            F = function() {
                var t = N(),
                    e = {},
                    i = b.autoScale,
                    n = 2 * b.padding;
                return e.width = b.width.toString().indexOf("%") > -1 ? parseInt(t[0] * parseFloat(b.width) / 100, 10) : b.width + n, e.height = b.height.toString().indexOf("%") > -1 ? parseInt(t[1] * parseFloat(b.height) / 100, 10) : b.height + n, i && (e.width > t[0] || e.height > t[1]) && ("image" == g.type || "swf" == g.type ? (i = b.width / b.height, e.width > t[0] && (e.width = t[0], e.height = parseInt((e.width - n) / i + n, 10)), e.height > t[1] && (e.height = t[1], e.width = parseInt((e.height - n) * i + n, 10))) : (e.width = Math.min(e.width, t[0]), e.height = Math.min(e.height, t[1]))), e.top = parseInt(Math.max(t[3] - 20, t[3] + .5 * (t[1] - e.height - 40)), 10), e.left = parseInt(Math.max(t[2] - 20, t[2] + .5 * (t[0] - e.width - 40)), 10), e
            },
            j = function() {
                var e = !!g.orig && t(g.orig),
                    i = {};
                return e && e.length ? (i = e.offset(), i.top += parseInt(e.css("paddingTop"), 10) || 0, i.left += parseInt(e.css("paddingLeft"), 10) || 0, i.top += parseInt(e.css("border-top-width"), 10) || 0, i.left += parseInt(e.css("border-left-width"), 10) || 0, i.width = e.width(), i.height = e.height(), i = { width: i.width + 2 * b.padding, height: i.height + 2 * b.padding, top: i.top - b.padding - 20, left: i.left - b.padding - 20 }) : (e = N(), i = { width: 2 * b.padding, height: 2 * b.padding, top: parseInt(e[3] + .5 * e[1], 10), left: parseInt(e[2] + .5 * e[0], 10) }), i
            },
            R = function() { i.is(":visible") ? (t("div", i).css("top", -40 * k + "px"), k = (k + 1) % 12) : clearInterval(u) };
        t.fn.fancybox = function(e) { return t(this).length ? (t(this).data("fancybox", t.extend({}, e, t.metadata ? t(this).metadata() : {})).unbind("click.fb").bind("click.fb", function(e) { e.preventDefault(), D || (D = !0, t(this).blur(), m = [], f = 0, e = t(this).attr("rel") || "", e && "" != e && "nofollow" !== e ? (m = t("a[rel=" + e + "], area[rel=" + e + "]"), f = m.index(this)) : m.push(this), O()) }), this) : this }, t.fancybox = function(e, i) {
            var n;
            if (!D) {
                if (D = !0, n = void 0 !== i ? i : {}, m = [], f = parseInt(n.index, 10) || 0, t.isArray(e)) {
                    for (var s = 0, o = e.length; s < o; s++) "object" == typeof e[s] ? t(e[s]).data("fancybox", t.extend({}, n, e[s])) : e[s] = t({}).data("fancybox", t.extend({ content: e[s] }, n));
                    m = jQuery.merge(m, e)
                } else "object" == typeof e ? t(e).data("fancybox", t.extend({}, n, e)) : e = t({}).data("fancybox", t.extend({ content: e }, n)), m.push(e);
                (f > m.length || f < 0) && (f = 0), O()
            }
        }, t.fancybox.showActivity = function() { clearInterval(u), i.show(), u = setInterval(R, 66) }, t.fancybox.hideActivity = function() { i.hide() }, t.fancybox.next = function() { return t.fancybox.pos(v + 1) }, t.fancybox.prev = function() { return t.fancybox.pos(v - 1) }, t.fancybox.pos = function(t) { D || (t = parseInt(t), m = y, t > -1 && t < y.length ? (f = t, O()) : b.cyclic && y.length > 1 && (f = t >= y.length ? 0 : y.length - 1, O())) }, t.fancybox.cancel = function() { D || (D = !0, t.event.trigger("fancybox-cancel"), P(), g.onCancel(m, f, g), D = !1) }, t.fancybox.close = function() {
            function e() { n.fadeOut("fast"), l.empty().hide(), s.hide(), t.event.trigger("fancybox-cleanup"), a.empty(), b.onClosed(y, v, b), y = g = [], v = f = 0, b = g = {}, D = !1 }
            if (!D && !s.is(":hidden"))
                if (D = !0, b && !1 === b.onCleanup(y, v, b)) D = !1;
                else if (P(), t(r.add(h).add(c)).hide(), t(a.add(n)).unbind(), t(window).unbind("resize.fb scroll.fb"), t(document).unbind("keydown.fb"), a.find("iframe").attr("src", I && /^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank"), "inside" !== b.titlePosition && l.empty(), s.stop(), "elastic" == b.transitionOut) {
                d = j();
                var i = s.position();
                p = { top: i.top, left: i.left, width: s.width(), height: s.height() }, b.opacity && (p.opacity = 1), l.empty().hide(), S.prop = 1, t(S).animate({ prop: 0 }, { duration: b.speedOut, easing: b.easingOut, step: L, complete: e })
            } else s.fadeOut("none" == b.transitionOut ? 0 : b.speedOut, e)
        }, t.fancybox.resize = function() { n.is(":visible") && n.css("height", t(document).height()), t.fancybox.center(!0) }, t.fancybox.center = function(t) {
            var e, i;
            D || (i = !0 === t ? 1 : 0, e = N(), !i && (s.width() > e[0] || s.height() > e[1]) || s.stop().animate({ top: parseInt(Math.max(e[3] - 20, e[3] + .5 * (e[1] - a.height() - 40) - b.padding)), left: parseInt(Math.max(e[2] - 20, e[2] + .5 * (e[0] - a.width() - 40) - b.padding)) }, "number" == typeof t ? t : 200))
        }, t.fancybox.init = function() { t("#fancybox-wrap").length || (t("body").append(e = t('<div id="fancybox-tmp"></div>'), i = t('<div id="fancybox-loading"><div></div></div>'), n = t('<div id="fancybox-overlay"></div>'), s = t('<div id="fancybox-wrap"></div>')), o = t('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(s), o.append(a = t('<div id="fancybox-content"></div>'), r = t('<a id="fancybox-close"></a>'), l = t('<div id="fancybox-title"></div>'), h = t('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), c = t('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), r.click(t.fancybox.close), i.click(t.fancybox.cancel), h.click(function(e) { e.preventDefault(), t.fancybox.prev() }), c.click(function(e) { e.preventDefault(), t.fancybox.next() }), t.fn.mousewheel && s.bind("mousewheel.fb", function(e, i) { D ? e.preventDefault() : 0 != t(e.target).get(0).clientHeight && t(e.target).get(0).scrollHeight !== t(e.target).get(0).clientHeight || (e.preventDefault(), t.fancybox[i > 0 ? "prev" : "next"]()) }), t.support.opacity || s.addClass("fancybox-ie"), I && (i.addClass("fancybox-ie6"), s.addClass("fancybox-ie6"), t('<iframe id="fancybox-hide-sel-frame" src="' + (/^https/i.test(window.location.href || "") ? "javascript:void(false)" : "about:blank") + '" scrolling="no" border="0" frameborder="0" tabindex="-1"></iframe>').prependTo(o))) }, t.fn.fancybox.defaults = { padding: 10, margin: 40, opacity: !1, modal: !1, cyclic: !1, scrolling: "auto", width: 560, height: 340, autoScale: !0, autoDimensions: !0, centerOnScroll: !1, ajax: {}, swf: { wmode: "transparent" }, hideOnOverlayClick: !0, hideOnContentClick: !1, overlayShow: !0, overlayOpacity: .7, overlayColor: "#777", titleShow: !0, titlePosition: "float", titleFormat: null, titleFromAlt: !1, transitionIn: "fade", transitionOut: "fade", speedIn: 300, speedOut: 300, changeSpeed: 300, changeFade: "fast", easingIn: "swing", easingOut: "swing", showCloseButton: !0, showNavArrows: !0, enableEscapeButton: !0, enableKeyboardNav: !0, onStart: function() {}, onCancel: function() {}, onComplete: function() {}, onCleanup: function() {}, onClosed: function() {}, onError: function() {} }, t(document).ready(function() { t.fancybox.init() })
    }(jQuery),
    function(t) { "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], t) : t("undefined" != typeof module && module.exports ? require("jquery") : jQuery) }(function(t) {
        "use strict";

        function e(e) {
            return !e || void 0 !== e.allowPageScroll || void 0 === e.swipe && void 0 === e.swipeStatus || (e.allowPageScroll = h), void 0 !== e.click && void 0 === e.tap && (e.tap = e.click), e || (e = {}), e = t.extend({}, t.fn.swipe.defaults, e), this.each(function() {
                var n = t(this),
                    s = n.data(D);
                s || (s = new i(this, e), n.data(D, s))
            })
        }

        function i(e, i) {
            function S(e) {
                if (!(ht() || t(e.target).closest(i.excludedElements, Yt).length > 0)) {
                    var n = e.originalEvent ? e.originalEvent : e;
                    if (!n.pointerType || "mouse" != n.pointerType || 0 != i.fallbackToMouseEvents) {
                        var s, o = n.touches,
                            a = o ? o[0] : n;
                        return Xt = _, o ? Ut = o.length : !1 !== i.preventDefaultEvents && e.preventDefault(), Mt = 0, At = null, Lt = null, $t = null, Nt = 0, Ft = 0, jt = 0, Rt = 1, Bt = 0, qt = mt(), rt(), ut(0, a), !o || Ut === i.fingers || i.fingers === b || $() ? (Vt = Tt(), 2 == Ut && (ut(1, o[1]), Ft = jt = yt(Kt[0].start, Kt[1].start)), (i.swipeStatus || i.pinchStatus) && (s = M(n, Xt))) : s = !1, !1 === s ? (Xt = C, M(n, Xt), s) : (i.hold && (ee = setTimeout(t.proxy(function() { Yt.trigger("hold", [n.target]), i.hold && (s = i.hold.call(Yt, n, n.target)) }, this), i.longTapThreshold)), ct(!0), null)
                    }
                }
            }

            function I(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                if (Xt !== x && Xt !== C && !lt()) {
                    var n, s = e.touches,
                        o = s ? s[0] : e,
                        a = dt(o);
                    if (Zt = Tt(), s && (Ut = s.length), i.hold && clearTimeout(ee), Xt = w, 2 == Ut && (0 == Ft ? (ut(1, s[1]), Ft = jt = yt(Kt[0].start, Kt[1].start)) : (dt(s[1]), jt = yt(Kt[0].end, Kt[1].end), $t = wt(Kt[0].end, Kt[1].end)), Rt = _t(Ft, jt), Bt = Math.abs(Ft - jt)), Ut === i.fingers || i.fingers === b || !s || $()) {
                        if (At = kt(a.start, a.end), Lt = kt(a.last, a.end), R(t, Lt), Mt = xt(a.start, a.end), Nt = bt(), ft(At, Mt), n = M(e, Xt), !i.triggerOnTouchEnd || i.triggerOnTouchLeave) {
                            var r = !0;
                            if (i.triggerOnTouchLeave) {
                                var l = zt(this);
                                r = Dt(a.end, l)
                            }!i.triggerOnTouchEnd && r ? Xt = H(w) : i.triggerOnTouchLeave && !r && (Xt = H(x)), Xt != C && Xt != x || M(e, Xt)
                        }
                    } else Xt = C, M(e, Xt);
                    !1 === n && (Xt = C, M(e, Xt))
                }
            }

            function P(t) {
                var e = t.originalEvent ? t.originalEvent : t,
                    n = e.touches;
                if (n) { if (n.length && !lt()) return at(e), !0; if (n.length && lt()) return !0 }
                return lt() && (Ut = Gt), Zt = Tt(), Nt = bt(), N() || !L() ? (Xt = C, M(e, Xt)) : i.triggerOnTouchEnd || !1 === i.triggerOnTouchEnd && Xt === w ? (!1 !== i.preventDefaultEvents && !1 !== t.cancelable && t.preventDefault(), Xt = x, M(e, Xt)) : !i.triggerOnTouchEnd && Z() ? (Xt = x, A(e, Xt, p)) : Xt === w && (Xt = C, M(e, Xt)), ct(!1), null
            }

            function W() { Ut = 0, Zt = 0, Vt = 0, Ft = 0, jt = 0, Rt = 1, rt(), ct(!1) }

            function O(t) {
                var e = t.originalEvent ? t.originalEvent : t;
                i.triggerOnTouchLeave && (Xt = H(x), M(e, Xt))
            }

            function E() { Yt.unbind(Pt, S), Yt.unbind(Ht, W), Yt.unbind(Wt, I), Yt.unbind(Ot, P), Et && Yt.unbind(Et, O), ct(!1) }

            function H(t) {
                var e = t,
                    n = j(),
                    s = L(),
                    o = N();
                return !n || o ? e = C : !s || t != w || i.triggerOnTouchEnd && !i.triggerOnTouchLeave ? !s && t == x && i.triggerOnTouchLeave && (e = C) : e = x, e
            }

            function M(t, e) { var i, n = t.touches; return (U() || X()) && (i = A(t, e, u)), (q() || $()) && !1 !== i && (i = A(t, e, d)), st() && !1 !== i ? i = A(t, e, f) : ot() && !1 !== i ? i = A(t, e, g) : nt() && !1 !== i && (i = A(t, e, p)), e === C && W(t), e === x && (n ? n.length || W(t) : W(t)), i }

            function A(e, h, c) {
                var m;
                if (c == u) {
                    if (Yt.trigger("swipeStatus", [h, At || null, Mt || 0, Nt || 0, Ut, Kt, Lt]), i.swipeStatus && !1 === (m = i.swipeStatus.call(Yt, e, h, At || null, Mt || 0, Nt || 0, Ut, Kt, Lt))) return !1;
                    if (h == x && Y()) {
                        if (clearTimeout(te), clearTimeout(ee), Yt.trigger("swipe", [At, Mt, Nt, Ut, Kt, Lt]), i.swipe && !1 === (m = i.swipe.call(Yt, e, At, Mt, Nt, Ut, Kt, Lt))) return !1;
                        switch (At) {
                            case n:
                                Yt.trigger("swipeLeft", [At, Mt, Nt, Ut, Kt, Lt]), i.swipeLeft && (m = i.swipeLeft.call(Yt, e, At, Mt, Nt, Ut, Kt, Lt));
                                break;
                            case s:
                                Yt.trigger("swipeRight", [At, Mt, Nt, Ut, Kt, Lt]), i.swipeRight && (m = i.swipeRight.call(Yt, e, At, Mt, Nt, Ut, Kt, Lt));
                                break;
                            case o:
                                Yt.trigger("swipeUp", [At, Mt, Nt, Ut, Kt, Lt]), i.swipeUp && (m = i.swipeUp.call(Yt, e, At, Mt, Nt, Ut, Kt, Lt));
                                break;
                            case a:
                                Yt.trigger("swipeDown", [At, Mt, Nt, Ut, Kt, Lt]), i.swipeDown && (m = i.swipeDown.call(Yt, e, At, Mt, Nt, Ut, Kt, Lt))
                        }
                    }
                }
                if (c == d) {
                    if (Yt.trigger("pinchStatus", [h, $t || null, Bt || 0, Nt || 0, Ut, Rt, Kt]), i.pinchStatus && !1 === (m = i.pinchStatus.call(Yt, e, h, $t || null, Bt || 0, Nt || 0, Ut, Rt, Kt))) return !1;
                    if (h == x && B()) switch ($t) {
                        case r:
                            Yt.trigger("pinchIn", [$t || null, Bt || 0, Nt || 0, Ut, Rt, Kt]), i.pinchIn && (m = i.pinchIn.call(Yt, e, $t || null, Bt || 0, Nt || 0, Ut, Rt, Kt));
                            break;
                        case l:
                            Yt.trigger("pinchOut", [$t || null, Bt || 0, Nt || 0, Ut, Rt, Kt]), i.pinchOut && (m = i.pinchOut.call(Yt, e, $t || null, Bt || 0, Nt || 0, Ut, Rt, Kt))
                    }
                }
                return c == p ? h !== C && h !== x || (clearTimeout(te), clearTimeout(ee), Q() && !tt() ? (Jt = Tt(), te = setTimeout(t.proxy(function() { Jt = null, Yt.trigger("tap", [e.target]), i.tap && (m = i.tap.call(Yt, e, e.target)) }, this), i.doubleTapThreshold)) : (Jt = null, Yt.trigger("tap", [e.target]), i.tap && (m = i.tap.call(Yt, e, e.target)))) : c == f ? h !== C && h !== x || (clearTimeout(te), clearTimeout(ee), Jt = null, Yt.trigger("doubletap", [e.target]), i.doubleTap && (m = i.doubleTap.call(Yt, e, e.target))) : c == g && (h !== C && h !== x || (clearTimeout(te), Jt = null, Yt.trigger("longtap", [e.target]), i.longTap && (m = i.longTap.call(Yt, e, e.target)))), m
            }

            function L() { var t = !0; return null !== i.threshold && (t = Mt >= i.threshold), t }

            function N() { var t = !1; return null !== i.cancelThreshold && null !== At && (t = gt(At) - Mt >= i.cancelThreshold), t }

            function F() { return null === i.pinchThreshold || Bt >= i.pinchThreshold }

            function j() { return !(i.maxTimeThreshold && Nt >= i.maxTimeThreshold) }

            function R(t, e) {
                if (!1 !== i.preventDefaultEvents)
                    if (i.allowPageScroll === h) t.preventDefault();
                    else {
                        var r = i.allowPageScroll === c;
                        switch (e) {
                            case n:
                                (i.swipeLeft && r || !r && i.allowPageScroll != m) && t.preventDefault();
                                break;
                            case s:
                                (i.swipeRight && r || !r && i.allowPageScroll != m) && t.preventDefault();
                                break;
                            case o:
                                (i.swipeUp && r || !r && i.allowPageScroll != v) && t.preventDefault();
                                break;
                            case a:
                                (i.swipeDown && r || !r && i.allowPageScroll != v) && t.preventDefault()
                        }
                    }
            }

            function B() {
                var t = K(),
                    e = V(),
                    i = F();
                return t && e && i
            }

            function $() { return !!(i.pinchStatus || i.pinchIn || i.pinchOut) }

            function q() { return !(!B() || !$()) }

            function Y() {
                var t = j(),
                    e = L(),
                    i = K(),
                    n = V();
                return !N() && n && i && e && t
            }

            function X() { return !!(i.swipe || i.swipeStatus || i.swipeLeft || i.swipeRight || i.swipeUp || i.swipeDown) }

            function U() { return !(!Y() || !X()) }

            function K() { return Ut === i.fingers || i.fingers === b || !k }

            function V() { return 0 !== Kt[0].end.x }

            function Z() { return !!i.tap }

            function Q() { return !!i.doubleTap }

            function G() { return !!i.longTap }

            function J() { if (null == Jt) return !1; var t = Tt(); return Q() && t - Jt <= i.doubleTapThreshold }

            function tt() { return J() }

            function et() { return (1 === Ut || !k) && (isNaN(Mt) || Mt < i.threshold) }

            function it() { return Nt > i.longTapThreshold && Mt < y }

            function nt() { return !(!et() || !Z()) }

            function st() { return !(!J() || !Q()) }

            function ot() { return !(!it() || !G()) }

            function at(t) { Qt = Tt(), Gt = t.touches.length + 1 }

            function rt() { Qt = 0, Gt = 0 }

            function lt() { var t = !1; if (Qt) { Tt() - Qt <= i.fingerReleaseThreshold && (t = !0) } return t }

            function ht() { return !(!0 !== Yt.data(D + "_intouch")) }

            function ct(t) { Yt && (!0 === t ? (Yt.bind(Wt, I), Yt.bind(Ot, P), Et && Yt.bind(Et, O)) : (Yt.unbind(Wt, I, !1), Yt.unbind(Ot, P, !1), Et && Yt.unbind(Et, O, !1)), Yt.data(D + "_intouch", !0 === t)) }

            function ut(t, e) { var i = { start: { x: 0, y: 0 }, last: { x: 0, y: 0 }, end: { x: 0, y: 0 } }; return i.start.x = i.last.x = i.end.x = e.pageX || e.clientX, i.start.y = i.last.y = i.end.y = e.pageY || e.clientY, Kt[t] = i, i }

            function dt(t) {
                var e = void 0 !== t.identifier ? t.identifier : 0,
                    i = pt(e);
                return null === i && (i = ut(e, t)), i.last.x = i.end.x, i.last.y = i.end.y, i.end.x = t.pageX || t.clientX, i.end.y = t.pageY || t.clientY, i
            }

            function pt(t) { return Kt[t] || null }

            function ft(t, e) { t != h && (e = Math.max(e, gt(t)), qt[t].distance = e) }

            function gt(t) { if (qt[t]) return qt[t].distance }

            function mt() { var t = {}; return t[n] = vt(n), t[s] = vt(s), t[o] = vt(o), t[a] = vt(a), t }

            function vt(t) { return { direction: t, distance: 0 } }

            function bt() { return Zt - Vt }

            function yt(t, e) {
                var i = Math.abs(t.x - e.x),
                    n = Math.abs(t.y - e.y);
                return Math.round(Math.sqrt(i * i + n * n))
            }

            function _t(t, e) { return (e / t * 1).toFixed(2) }

            function wt() { return Rt < 1 ? l : r }

            function xt(t, e) { return Math.round(Math.sqrt(Math.pow(e.x - t.x, 2) + Math.pow(e.y - t.y, 2))) }

            function Ct(t, e) {
                var i = t.x - e.x,
                    n = e.y - t.y,
                    s = Math.atan2(n, i),
                    o = Math.round(180 * s / Math.PI);
                return o < 0 && (o = 360 - Math.abs(o)), o
            }

            function kt(t, e) { if (St(t, e)) return h; var i = Ct(t, e); return i <= 45 && i >= 0 ? n : i <= 360 && i >= 315 ? n : i >= 135 && i <= 225 ? s : i > 45 && i < 135 ? a : o }

            function Tt() { return (new Date).getTime() }

            function zt(e) { e = t(e); var i = e.offset(); return { left: i.left, right: i.left + e.outerWidth(), top: i.top, bottom: i.top + e.outerHeight() } }

            function Dt(t, e) { return t.x > e.left && t.x < e.right && t.y > e.top && t.y < e.bottom }

            function St(t, e) { return t.x == e.x && t.y == e.y }
            var i = t.extend({}, i),
                It = k || z || !i.fallbackToMouseEvents,
                Pt = It ? z ? T ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
                Wt = It ? z ? T ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
                Ot = It ? z ? T ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
                Et = It ? z ? "mouseleave" : null : "mouseleave",
                Ht = z ? T ? "MSPointerCancel" : "pointercancel" : "touchcancel",
                Mt = 0,
                At = null,
                Lt = null,
                Nt = 0,
                Ft = 0,
                jt = 0,
                Rt = 1,
                Bt = 0,
                $t = 0,
                qt = null,
                Yt = t(e),
                Xt = "start",
                Ut = 0,
                Kt = {},
                Vt = 0,
                Zt = 0,
                Qt = 0,
                Gt = 0,
                Jt = 0,
                te = null,
                ee = null;
            try { Yt.bind(Pt, S), Yt.bind(Ht, W) } catch (e) { t.error("events not supported " + Pt + "," + Ht + " on jQuery.swipe") } this.enable = function() { return this.disable(), Yt.bind(Pt, S), Yt.bind(Ht, W), Yt }, this.disable = function() { return E(), Yt }, this.destroy = function() { E(), Yt.data(D, null), Yt = null }, this.option = function(e, n) {
                if ("object" == typeof e) i = t.extend(i, e);
                else if (void 0 !== i[e]) {
                    if (void 0 === n) return i[e];
                    i[e] = n
                } else {
                    if (!e) return i;
                    t.error("Option " + e + " does not exist on jQuery.swipe.options")
                }
                return null
            }
        }
        var n = "left",
            s = "right",
            o = "up",
            a = "down",
            r = "in",
            l = "out",
            h = "none",
            c = "auto",
            u = "swipe",
            d = "pinch",
            p = "tap",
            f = "doubletap",
            g = "longtap",
            m = "horizontal",
            v = "vertical",
            b = "all",
            y = 10,
            _ = "start",
            w = "move",
            x = "end",
            C = "cancel",
            k = "ontouchstart" in window,
            T = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled && !k,
            z = (window.navigator.pointerEnabled || window.navigator.msPointerEnabled) && !k,
            D = "TouchSwipe",
            S = { fingers: 1, threshold: 75, cancelThreshold: null, pinchThreshold: 20, maxTimeThreshold: null, fingerReleaseThreshold: 250, longTapThreshold: 500, doubleTapThreshold: 200, swipe: null, swipeLeft: null, swipeRight: null, swipeUp: null, swipeDown: null, swipeStatus: null, pinchIn: null, pinchOut: null, pinchStatus: null, click: null, tap: null, doubleTap: null, longTap: null, hold: null, triggerOnTouchEnd: !0, triggerOnTouchLeave: !1, allowPageScroll: "auto", fallbackToMouseEvents: !0, excludedElements: ".noSwipe", preventDefaultEvents: !0 };
        t.fn.swipe = function(i) {
            var n = t(this),
                s = n.data(D);
            if (s && "string" == typeof i) {
                if (s[i]) return s[i].apply(s, Array.prototype.slice.call(arguments, 1));
                t.error("Method " + i + " does not exist on jQuery.swipe")
            } else if (s && "object" == typeof i) s.option.apply(s, arguments);
            else if (!(s || "object" != typeof i && i)) return e.apply(this, arguments);
            return n
        }, t.fn.swipe.version = "1.6.18", t.fn.swipe.defaults = S, t.fn.swipe.phases = { PHASE_START: _, PHASE_MOVE: w, PHASE_END: x, PHASE_CANCEL: C }, t.fn.swipe.directions = { LEFT: n, RIGHT: s, UP: o, DOWN: a, IN: r, OUT: l }, t.fn.swipe.pageScroll = { NONE: h, HORIZONTAL: m, VERTICAL: v, AUTO: c }, t.fn.swipe.fingers = { ONE: 1, TWO: 2, THREE: 3, FOUR: 4, FIVE: 5, ALL: b }
    }),
    function(t) {
        function e(e) {
            var i = e || window.event,
                n = [].slice.call(arguments, 1),
                s = 0,
                o = 0,
                a = 0;
            return e = t.event.fix(i), e.type = "mousewheel", e.wheelDelta && (s = e.wheelDelta / 120), e.detail && (s = -e.detail / 3), a = s, void 0 !== i.axis && i.axis === i.HORIZONTAL_AXIS && (a = 0, o = -1 * s), void 0 !== i.wheelDeltaY && (a = i.wheelDeltaY / 120), void 0 !== i.wheelDeltaX && (o = -1 * i.wheelDeltaX / 120), n.unshift(e, s, o, a), t.event.handle.apply(this, n)
        }
        var i = ["DOMMouseScroll", "mousewheel"];
        t.event.special.mousewheel = {
            setup: function() {
                if (this.addEventListener)
                    for (var t = i.length; t;) this.addEventListener(i[--t], e, !1);
                else this.onmousewheel = e
            },
            teardown: function() {
                if (this.removeEventListener)
                    for (var t = i.length; t;) this.removeEventListener(i[--t], e, !1);
                else this.onmousewheel = null
            }
        }, t.fn.extend({ mousewheel: function(t) { return t ? this.bind("mousewheel", t) : this.trigger("mousewheel") }, unmousewheel: function(t) { return this.unbind("mousewheel", t) } })
    }(jQuery),
    function(t, e, i, n) {
        function s(e, i) { this.settings = null, this.options = t.extend({}, s.Defaults, i), this.$element = t(e), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = { time: null, target: null, pointer: null, stage: { start: null, current: null }, direction: null }, this._states = { current: {}, tags: { initializing: ["busy"], animating: ["busy"], dragging: ["interacting"] } }, t.each(["onResize", "onThrottledResize"], t.proxy(function(e, i) { this._handlers[i] = t.proxy(this[i], this) }, this)), t.each(s.Plugins, t.proxy(function(t, e) { this._plugins[t.charAt(0).toLowerCase() + t.slice(1)] = new e(this) }, this)), t.each(s.Workers, t.proxy(function(e, i) { this._pipe.push({ filter: i.filter, run: t.proxy(i.run, this) }) }, this)), this.setup(), this.initialize() } s.Defaults = { items: 3, loop: !1, center: !1, rewind: !1, mouseDrag: !0, touchDrag: !0, pullDrag: !0, freeDrag: !1, margin: 0, stagePadding: 0, merge: !1, mergeFit: !0, autoWidth: !1, startPosition: 0, rtl: !1, smartSpeed: 250, fluidSpeed: !1, dragEndSpeed: !1, responsive: {}, responsiveRefreshRate: 200, responsiveBaseElement: e, fallbackEasing: "swing", info: !1, nestedItemSelector: !1, itemElement: "div", stageElement: "div", refreshClass: "owl-refresh", loadedClass: "owl-loaded", loadingClass: "owl-loading", rtlClass: "owl-rtl", responsiveClass: "owl-responsive", dragClass: "owl-drag", itemClass: "owl-item", stageClass: "owl-stage", stageOuterClass: "owl-stage-outer", grabClass: "owl-grab" }, s.Width = { Default: "default", Inner: "inner", Outer: "outer" }, s.Type = { Event: "event", State: "state" }, s.Plugins = {}, s.Workers = [{ filter: ["width", "settings"], run: function() { this._width = this.$element.width() } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = this._items && this._items[this.relative(this._current)] } }, { filter: ["items", "settings"], run: function() { this.$stage.children(".cloned").remove() } }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this.settings.margin || "",
                    i = !this.settings.autoWidth,
                    n = this.settings.rtl,
                    s = { width: "auto", "margin-left": n ? e : "", "margin-right": n ? "" : e };
                !i && this.$stage.children().css(s), t.css = s
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
                    i = null,
                    n = this._items.length,
                    s = !this.settings.autoWidth,
                    o = [];
                for (t.items = { merge: !1, width: e }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, t.items.merge = i > 1 || t.items.merge, o[n] = s ? e * i : this._items[n].width();
                this._widths = o
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var e = [],
                    i = this._items,
                    n = this.settings,
                    s = Math.max(2 * n.items, 4),
                    o = 2 * Math.ceil(i.length / 2),
                    a = n.loop && i.length ? n.rewind ? s : Math.max(s, o) : 0,
                    r = "",
                    l = "";
                for (a /= 2; a--;) e.push(this.normalize(e.length / 2, !0)), r += i[e[e.length - 1]][0].outerHTML, e.push(this.normalize(i.length - 1 - (e.length - 1) / 2, !0)), l = i[e[e.length - 1]][0].outerHTML + l;
                this._clones = e, t(r).addClass("cloned").appendTo(this.$stage), t(l).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var t = this.settings.rtl ? 1 : -1, e = this._clones.length + this._items.length, i = -1, n = 0, s = 0, o = []; ++i < e;) n = o[i - 1] || 0, s = this._widths[this.relative(i)] + this.settings.margin, o.push(n + s * t);
                this._coordinates = o
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var t = this.settings.stagePadding,
                    e = this._coordinates,
                    i = { width: Math.ceil(Math.abs(e[e.length - 1])) + 2 * t, "padding-left": t || "", "padding-right": t || "" };
                this.$stage.css(i)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(t) {
                var e = this._coordinates.length,
                    i = !this.settings.autoWidth,
                    n = this.$stage.children();
                if (i && t.items.merge)
                    for (; e--;) t.css.width = this._widths[this.relative(e)], n.eq(e).css(t.css);
                else i && (t.css.width = t.items.width, n.css(t.css))
            }
        }, { filter: ["items"], run: function() { this._coordinates.length < 1 && this.$stage.removeAttr("style") } }, { filter: ["width", "items", "settings"], run: function(t) { t.current = t.current ? this.$stage.children().index(t.current) : 0, t.current = Math.max(this.minimum(), Math.min(this.maximum(), t.current)), this.reset(t.current) } }, { filter: ["position"], run: function() { this.animate(this.coordinates(this._current)) } }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var t, e, i, n, s = this.settings.rtl ? 1 : -1,
                    o = 2 * this.settings.stagePadding,
                    a = this.coordinates(this.current()) + o,
                    r = a + this.width() * s,
                    l = [];
                for (i = 0, n = this._coordinates.length; i < n; i++) t = this._coordinates[i - 1] || 0, e = Math.abs(this._coordinates[i]) + o * s, (this.op(t, "<=", a) && this.op(t, ">", r) || this.op(e, "<", a) && this.op(e, ">", r)) && l.push(i);
                this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.settings.center && (this.$stage.children(".center").removeClass("center"), this.$stage.children().eq(this.current()).addClass("center"))
            }
        }], s.prototype.initialize = function() {
            if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
                var e, i, s;
                e = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, s = this.$element.children(i).width(), e.length && s <= 0 && this.preloadAutoWidthImages(e)
            }
            this.$element.addClass(this.options.loadingClass), this.$stage = t("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
        }, s.prototype.setup = function() {
            var e = this.viewport(),
                i = this.options.responsive,
                n = -1,
                s = null;
            i ? (t.each(i, function(t) { t <= e && t > n && (n = Number(t)) }), s = t.extend({}, this.options, i[n]), "function" == typeof s.stagePadding && (s.stagePadding = s.stagePadding()), delete s.responsive, s.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : s = t.extend({}, this.options), this.trigger("change", { property: { name: "settings", value: s } }), this._breakpoint = n, this.settings = s, this.invalidate("settings"), this.trigger("changed", { property: { name: "settings", value: this.settings } })
        }, s.prototype.optionsLogic = function() { this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1) }, s.prototype.prepare = function(e) { var i = this.trigger("prepare", { content: e }); return i.data || (i.data = t("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(e)), this.trigger("prepared", { content: i.data }), i.data }, s.prototype.update = function() {
            for (var e = 0, i = this._pipe.length, n = t.proxy(function(t) { return this[t] }, this._invalidated), s = {}; e < i;)(this._invalidated.all || t.grep(this._pipe[e].filter, n).length > 0) && this._pipe[e].run(s), e++;
            this._invalidated = {}, !this.is("valid") && this.enter("valid")
        }, s.prototype.width = function(t) {
            switch (t = t || s.Width.Default) {
                case s.Width.Inner:
                case s.Width.Outer:
                    return this._width;
                default:
                    return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }, s.prototype.refresh = function() { this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed") }, s.prototype.onThrottledResize = function() { e.clearTimeout(this.resizeTimer), this.resizeTimer = e.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate) }, s.prototype.onResize = function() { return !!this._items.length && this._width !== this.$element.width() && !!this.$element.is(":visible") && (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) }, s.prototype.registerEventHandlers = function() { t.support.transition && this.$stage.on(t.support.transition.end + ".owl.core", t.proxy(this.onTransitionEnd, this)), !1 !== this.settings.responsive && this.on(e, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function() { return !1 })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", t.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", t.proxy(this.onDragEnd, this))) }, s.prototype.onDragStart = function(e) {
            var n = null;
            3 !== e.which && (t.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = { x: n[16 === n.length ? 12 : 4], y: n[16 === n.length ? 13 : 5] }) : (n = this.$stage.position(), n = { x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left, y: n.top }), this.is("animating") && (t.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === e.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = t(e.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(e), t(i).on("mouseup.owl.core touchend.owl.core", t.proxy(this.onDragEnd, this)), t(i).one("mousemove.owl.core touchmove.owl.core", t.proxy(function(e) {
                var n = this.difference(this._drag.pointer, this.pointer(e));
                t(i).on("mousemove.owl.core touchmove.owl.core", t.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (e.preventDefault(), this.enter("dragging"), this.trigger("drag"))
            }, this)))
        }, s.prototype.onDragMove = function(t) {
            var e = null,
                i = null,
                n = null,
                s = this.difference(this._drag.pointer, this.pointer(t)),
                o = this.difference(this._drag.stage.start, s);
            this.is("dragging") && (t.preventDefault(), this.settings.loop ? (e = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - e, o.x = ((o.x - e) % i + i) % i + e) : (e = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * s.x / 5 : 0, o.x = Math.max(Math.min(o.x, e + n), i + n)), this._drag.stage.current = o, this.animate(o.x))
        }, s.prototype.onDragEnd = function(e) {
            var n = this.difference(this._drag.pointer, this.pointer(e)),
                s = this._drag.stage.current,
                o = n.x > 0 ^ this.settings.rtl ? "left" : "right";
            t(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(s.x, 0 !== n.x ? o : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = o, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() { return !1 })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
        }, s.prototype.closest = function(e, i) {
            var n = -1,
                s = this.width(),
                o = this.coordinates();
            return this.settings.freeDrag || t.each(o, t.proxy(function(t, a) { return "left" === i && e > a - 30 && e < a + 30 ? n = t : "right" === i && e > a - s - 30 && e < a - s + 30 ? n = t + 1 : this.op(e, "<", a) && this.op(e, ">", o[t + 1] || a - s) && (n = "left" === i ? t + 1 : t), -1 === n }, this)), this.settings.loop || (this.op(e, ">", o[this.minimum()]) ? n = e = this.minimum() : this.op(e, "<", o[this.maximum()]) && (n = e = this.maximum())), n
        }, s.prototype.animate = function(e) {
            var i = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), t.support.transform3d && t.support.transition ? this.$stage.css({ transform: "translate3d(" + e + "px,0px,0px)", transition: this.speed() / 1e3 + "s" }) : i ? this.$stage.animate({ left: e + "px" }, this.speed(), this.settings.fallbackEasing, t.proxy(this.onTransitionEnd, this)) : this.$stage.css({ left: e + "px" })
        }, s.prototype.is = function(t) { return this._states.current[t] && this._states.current[t] > 0 }, s.prototype.current = function(t) {
            if (t === n) return this._current;
            if (0 === this._items.length) return n;
            if (t = this.normalize(t), this._current !== t) {
                var e = this.trigger("change", { property: { name: "position", value: t } });
                e.data !== n && (t = this.normalize(e.data)), this._current = t, this.invalidate("position"), this.trigger("changed", { property: { name: "position", value: this._current } })
            }
            return this._current
        }, s.prototype.invalidate = function(e) { return "string" === t.type(e) && (this._invalidated[e] = !0, this.is("valid") && this.leave("valid")), t.map(this._invalidated, function(t, e) { return e }) }, s.prototype.reset = function(t) {
            (t = this.normalize(t)) !== n && (this._speed = 0, this._current = t, this.suppress(["translate", "translated"]), this.animate(this.coordinates(t)), this.release(["translate", "translated"]))
        }, s.prototype.normalize = function(t, e) {
            var i = this._items.length,
                s = e ? 0 : this._clones.length;
            return !this.isNumeric(t) || i < 1 ? t = n : (t < 0 || t >= i + s) && (t = ((t - s / 2) % i + i) % i + s / 2), t
        }, s.prototype.relative = function(t) { return t -= this._clones.length / 2, this.normalize(t, !0) }, s.prototype.maximum = function(t) {
            var e, i, n, s = this.settings,
                o = this._coordinates.length;
            if (s.loop) o = this._clones.length / 2 + this._items.length - 1;
            else if (s.autoWidth || s.merge) {
                for (e = this._items.length, i = this._items[--e].width(), n = this.$element.width(); e-- && !((i += this._items[e].width() + this.settings.margin) > n););
                o = e + 1
            } else o = s.center ? this._items.length - 1 : this._items.length - s.items;
            return t && (o -= this._clones.length / 2), Math.max(o, 0)
        }, s.prototype.minimum = function(t) { return t ? 0 : this._clones.length / 2 }, s.prototype.items = function(t) { return t === n ? this._items.slice() : (t = this.normalize(t, !0), this._items[t]) }, s.prototype.mergers = function(t) { return t === n ? this._mergers.slice() : (t = this.normalize(t, !0), this._mergers[t]) }, s.prototype.clones = function(e) {
            var i = this._clones.length / 2,
                s = i + this._items.length,
                o = function(t) { return t % 2 == 0 ? s + t / 2 : i - (t + 1) / 2 };
            return e === n ? t.map(this._clones, function(t, e) { return o(e) }) : t.map(this._clones, function(t, i) { return t === e ? o(i) : null })
        }, s.prototype.speed = function(t) { return t !== n && (this._speed = t), this._speed }, s.prototype.coordinates = function(e) {
            var i, s = 1,
                o = e - 1;
            return e === n ? t.map(this._coordinates, t.proxy(function(t, e) { return this.coordinates(e) }, this)) : (this.settings.center ? (this.settings.rtl && (s = -1, o = e + 1), i = this._coordinates[e], i += (this.width() - i + (this._coordinates[o] || 0)) / 2 * s) : i = this._coordinates[o] || 0, i = Math.ceil(i))
        }, s.prototype.duration = function(t, e, i) { return 0 === i ? 0 : Math.min(Math.max(Math.abs(e - t), 1), 6) * Math.abs(i || this.settings.smartSpeed) }, s.prototype.to = function(t, e) {
            var i = this.current(),
                n = null,
                s = t - this.relative(i),
                o = (s > 0) - (s < 0),
                a = this._items.length,
                r = this.minimum(),
                l = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(s) > a / 2 && (s += -1 * o * a), t = i + s, (n = ((t - r) % a + a) % a + r) !== t && n - s <= l && n - s > 0 && (i = n - s, t = n, this.reset(i))) : this.settings.rewind ? (l += 1, t = (t % l + l) % l) : t = Math.max(r, Math.min(l, t)), this.speed(this.duration(i, t, e)), this.current(t), this.$element.is(":visible") && this.update()
        }, s.prototype.next = function(t) { t = t || !1, this.to(this.relative(this.current()) + 1, t) }, s.prototype.prev = function(t) { t = t || !1, this.to(this.relative(this.current()) - 1, t) }, s.prototype.onTransitionEnd = function(t) {
            if (t !== n && (t.stopPropagation(), (t.target || t.srcElement || t.originalTarget) !== this.$stage.get(0))) return !1;
            this.leave("animating"), this.trigger("translated")
        }, s.prototype.viewport = function() { var n; return this.options.responsiveBaseElement !== e ? n = t(this.options.responsiveBaseElement).width() : e.innerWidth ? n = e.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n }, s.prototype.replace = function(e) { this.$stage.empty(), this._items = [], e && (e = e instanceof jQuery ? e : t(e)), this.settings.nestedItemSelector && (e = e.find("." + this.settings.nestedItemSelector)), e.filter(function() { return 1 === this.nodeType }).each(t.proxy(function(t, e) { e = this.prepare(e), this.$stage.append(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1) }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items") }, s.prototype.add = function(e, i) {
            var s = this.relative(this._current);
            i = i === n ? this._items.length : this.normalize(i, !0), e = e instanceof jQuery ? e : t(e), this.trigger("add", { content: e, position: i }), e = this.prepare(e), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(e), 0 !== this._items.length && this._items[i - 1].after(e), this._items.push(e), this._mergers.push(1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(e), this._items.splice(i, 0, e), this._mergers.splice(i, 0, 1 * e.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[s] && this.reset(this._items[s].index()), this.invalidate("items"), this.trigger("added", { content: e, position: i })
        }, s.prototype.remove = function(t) {
            (t = this.normalize(t, !0)) !== n && (this.trigger("remove", { content: this._items[t], position: t }), this._items[t].remove(), this._items.splice(t, 1), this._mergers.splice(t, 1), this.invalidate("items"), this.trigger("removed", { content: null, position: t }))
        }, s.prototype.preloadAutoWidthImages = function(e) { e.each(t.proxy(function(e, i) { this.enter("pre-loading"), i = t(i), t(new Image).one("load", t.proxy(function(t) { i.attr("src", t.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh() }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina")) }, this)) }, s.prototype.destroy = function() {
            this.$element.off(".owl.core"), this.$stage.off(".owl.core"), t(i).off(".owl.core"), !1 !== this.settings.responsive && (e.clearTimeout(this.resizeTimer), this.off(e, "resize", this._handlers.onThrottledResize));
            for (var n in this._plugins) this._plugins[n].destroy();
            this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
        }, s.prototype.op = function(t, e, i) {
            var n = this.settings.rtl;
            switch (e) {
                case "<":
                    return n ? t > i : t < i;
                case ">":
                    return n ? t < i : t > i;
                case ">=":
                    return n ? t <= i : t >= i;
                case "<=":
                    return n ? t >= i : t <= i
            }
        }, s.prototype.on = function(t, e, i, n) { t.addEventListener ? t.addEventListener(e, i, n) : t.attachEvent && t.attachEvent("on" + e, i) }, s.prototype.off = function(t, e, i, n) { t.removeEventListener ? t.removeEventListener(e, i, n) : t.detachEvent && t.detachEvent("on" + e, i) }, s.prototype.trigger = function(e, i, n, o, a) {
            var r = { item: { count: this._items.length, index: this.current() } },
                l = t.camelCase(t.grep(["on", e, n], function(t) { return t }).join("-").toLowerCase()),
                h = t.Event([e, "owl", n || "carousel"].join(".").toLowerCase(), t.extend({ relatedTarget: this }, r, i));
            return this._supress[e] || (t.each(this._plugins, function(t, e) { e.onTrigger && e.onTrigger(h) }), this.register({ type: s.Type.Event, name: e }), this.$element.trigger(h), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, h)), h
        }, s.prototype.enter = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { this._states.current[e] === n && (this._states.current[e] = 0), this._states.current[e]++ }, this)) }, s.prototype.leave = function(e) { t.each([e].concat(this._states.tags[e] || []), t.proxy(function(t, e) { this._states.current[e]-- }, this)) }, s.prototype.register = function(e) {
            if (e.type === s.Type.Event) {
                if (t.event.special[e.name] || (t.event.special[e.name] = {}), !t.event.special[e.name].owl) {
                    var i = t.event.special[e.name]._default;
                    t.event.special[e.name]._default = function(t) { return !i || !i.apply || t.namespace && -1 !== t.namespace.indexOf("owl") ? t.namespace && t.namespace.indexOf("owl") > -1 : i.apply(this, arguments) }, t.event.special[e.name].owl = !0
                }
            } else e.type === s.Type.State && (this._states.tags[e.name] ? this._states.tags[e.name] = this._states.tags[e.name].concat(e.tags) : this._states.tags[e.name] = e.tags, this._states.tags[e.name] = t.grep(this._states.tags[e.name], t.proxy(function(i, n) { return t.inArray(i, this._states.tags[e.name]) === n }, this)))
        }, s.prototype.suppress = function(e) { t.each(e, t.proxy(function(t, e) { this._supress[e] = !0 }, this)) }, s.prototype.release = function(e) { t.each(e, t.proxy(function(t, e) { delete this._supress[e] }, this)) }, s.prototype.pointer = function(t) { var i = { x: null, y: null }; return t = t.originalEvent || t || e.event, t = t.touches && t.touches.length ? t.touches[0] : t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, t.pageX ? (i.x = t.pageX, i.y = t.pageY) : (i.x = t.clientX, i.y = t.clientY), i }, s.prototype.isNumeric = function(t) { return !isNaN(parseFloat(t)) }, s.prototype.difference = function(t, e) { return { x: t.x - e.x, y: t.y - e.y } }, t.fn.owlCarousel = function(e) {
            var i = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var n = t(this),
                    o = n.data("owl.carousel");
                o || (o = new s(this, "object" == typeof e && e), n.data("owl.carousel", o), t.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(e, i) { o.register({ type: s.Type.Event, name: i }), o.$element.on(i + ".owl.carousel.core", t.proxy(function(t) { t.namespace && t.relatedTarget !== this && (this.suppress([i]), o[i].apply(this, [].slice.call(arguments, 1)), this.release([i])) }, o)) })), "string" == typeof e && "_" !== e.charAt(0) && o[e].apply(o, i)
            })
        }, t.fn.owlCarousel.Constructor = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) { this._core = e, this._interval = null, this._visible = null, this._handlers = { "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoRefresh && this.watch() }, this) }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        s.Defaults = { autoRefresh: !0, autoRefreshInterval: 500 }, s.prototype.watch = function() { this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = e.setInterval(t.proxy(this.refresh, this), this._core.settings.autoRefreshInterval)) }, s.prototype.refresh = function() { this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh()) }, s.prototype.destroy = function() {
            var t, i;
            e.clearInterval(this._interval);
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.AutoRefresh = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._loaded = [], this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": t.proxy(function(e) {
                    if (e.namespace && this._core.settings && this._core.settings.lazyLoad && (e.property && "position" == e.property.name || "initialized" == e.type))
                        for (var i = this._core.settings, n = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * n || 0, o = (e.property && void 0 !== e.property.value ? e.property.value : this._core.current()) + s, a = this._core.clones().length, r = t.proxy(function(t, e) { this.load(e) }, this); s++ < n;) this.load(a / 2 + this._core.relative(o)), a && t.each(this._core.clones(this._core.relative(o)), r), o++
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers)
        };
        s.Defaults = { lazyLoad: !1 }, s.prototype.load = function(i) {
            var n = this._core.$stage.children().eq(i),
                s = n && n.find(".owl-lazy");
            !s || t.inArray(n.get(0), this._loaded) > -1 || (s.each(t.proxy(function(i, n) {
                var s, o = t(n),
                    a = e.devicePixelRatio > 1 && o.attr("data-src-retina") || o.attr("data-src");
                this._core.trigger("load", { element: o, url: a }, "lazy"), o.is("img") ? o.one("load.owl.lazy", t.proxy(function() { o.css("opacity", 1), this._core.trigger("loaded", { element: o, url: a }, "lazy") }, this)).attr("src", a) : (s = new Image, s.onload = t.proxy(function() { o.css({ "background-image": 'url("' + a + '")', opacity: "1" }), this._core.trigger("loaded", { element: o, url: a }, "lazy") }, this), s.src = a)
            }, this)), this._loaded.push(n.get(0)))
        }, s.prototype.destroy = function() { var t, e; for (t in this.handlers) this._core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Lazy = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) { this._core = e, this._handlers = { "initialized.owl.carousel refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && this.update() }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && "position" == t.property.name && this.update() }, this), "loaded.owl.lazy": t.proxy(function(t) { t.namespace && this._core.settings.autoHeight && t.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update() }, this) }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers) };
        s.Defaults = { autoHeight: !1, autoHeightClass: "owl-height" }, s.prototype.update = function() {
            var e = this._core._current,
                i = e + this._core.settings.items,
                n = this._core.$stage.children().toArray().slice(e, i),
                s = [],
                o = 0;
            t.each(n, function(e, i) { s.push(t(i).height()) }), o = Math.max.apply(null, s), this._core.$stage.parent().height(o).addClass(this._core.settings.autoHeightClass)
        }, s.prototype.destroy = function() { var t, e; for (t in this._handlers) this._core.$element.off(t, this._handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.AutoHeight = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) {
            this._core = e, this._videos = {}, this._playing = null, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.register({ type: "state", name: "playing", tags: ["interacting"] }) }, this),
                "resize.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.video && this.isInFullScreen() && t.preventDefault() }, this),
                "refreshed.owl.carousel": t.proxy(function(t) {
                    t.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" === t.property.name && this._playing && this.stop() }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find(".owl-video");
                        i.length && (i.css("display", "none"), this.fetch(i, t(e.content)))
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", t.proxy(function(t) { this.play(t) }, this))
        };
        s.Defaults = { video: !1, videoHeight: !1, videoWidth: !1 }, s.prototype.fetch = function(t, e) {
            var i = function() { return t.attr("data-vimeo-id") ? "vimeo" : t.attr("data-vzaar-id") ? "vzaar" : "youtube" }(),
                n = t.attr("data-vimeo-id") || t.attr("data-youtube-id") || t.attr("data-vzaar-id"),
                s = t.attr("data-width") || this._core.settings.videoWidth,
                o = t.attr("data-height") || this._core.settings.videoHeight,
                a = t.attr("href");
            if (!a) throw new Error("Missing video URL.");
            if (n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube";
            else if (n[3].indexOf("vimeo") > -1) i = "vimeo";
            else {
                if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
                i = "vzaar"
            }
            n = n[6], this._videos[a] = { type: i, id: n, width: s, height: o }, e.attr("data-video", a), this.thumbnail(t, this._videos[a])
        }, s.prototype.thumbnail = function(e, i) {
            var n, s, o, a = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
                r = e.find("img"),
                l = "src",
                h = "",
                c = this._core.settings,
                u = function(t) { s = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + h + '" ' + l + '="' + t + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + t + ')"></div>', e.after(n), e.after(s) };
            if (e.wrap('<div class="owl-video-wrapper"' + a + "></div>"), this._core.settings.lazyLoad && (l = "data-src", h = "owl-lazy"), r.length) return u(r.attr(l)), r.remove(), !1;
            "youtube" === i.type ? (o = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", u(o)) : "vimeo" === i.type ? t.ajax({ type: "GET", url: "//vimeo.com/api/v2/video/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t[0].thumbnail_large, u(o) } }) : "vzaar" === i.type && t.ajax({ type: "GET", url: "//vzaar.com/api/videos/" + i.id + ".json", jsonp: "callback", dataType: "jsonp", success: function(t) { o = t.framegrab_url, u(o) } })
        }, s.prototype.stop = function() { this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video") }, s.prototype.play = function(e) {
            var i, n = t(e.target),
                s = n.closest("." + this._core.settings.itemClass),
                o = this._videos[s.attr("data-video")],
                a = o.width || "100%",
                r = o.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), s = this._core.items(this._core.relative(s.index())), this._core.reset(s.index()), "youtube" === o.type ? i = '<iframe width="' + a + '" height="' + r + '" src="//www.youtube.com/embed/' + o.id + "?autoplay=1&rel=0&v=" + o.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === o.type ? i = '<iframe src="//player.vimeo.com/video/' + o.id + '?autoplay=1" width="' + a + '" height="' + r + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === o.type && (i = '<iframe frameborder="0"height="' + r + '"width="' + a + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + o.id + '/player?autoplay=true"></iframe>'), t('<div class="owl-video-frame">' + i + "</div>").insertAfter(s.find(".owl-video")), this._playing = s.addClass("owl-video-playing"))
        }, s.prototype.isInFullScreen = function() { var e = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement; return e && t(e).parent().hasClass("owl-video-frame") }, s.prototype.destroy = function() {
            var t, e;
            this._core.$element.off("click.owl.video");
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Video = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) { this.core = e, this.core.options = t.extend({}, s.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = { "change.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && (this.previous = this.core.current(), this.next = t.property.value) }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": t.proxy(function(t) { t.namespace && (this.swapping = "translated" == t.type) }, this), "translate.owl.carousel": t.proxy(function(t) { t.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap() }, this) }, this.core.$element.on(this.handlers) };
        s.Defaults = { animateOut: !1, animateIn: !1 }, s.prototype.swap = function() {
            if (1 === this.core.settings.items && t.support.animation && t.support.transition) {
                this.core.speed(0);
                var e, i = t.proxy(this.clear, this),
                    n = this.core.$stage.children().eq(this.previous),
                    s = this.core.$stage.children().eq(this.next),
                    o = this.core.settings.animateIn,
                    a = this.core.settings.animateOut;
                this.core.current() !== this.previous && (a && (e = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(t.support.animation.end, i).css({ left: e + "px" }).addClass("animated owl-animated-out").addClass(a)), o && s.one(t.support.animation.end, i).addClass("animated owl-animated-in").addClass(o))
            }
        }, s.prototype.clear = function(e) { t(e.target).css({ left: "" }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd() }, s.prototype.destroy = function() { var t, e; for (t in this.handlers) this.core.$element.off(t, this.handlers[t]); for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null) }, t.fn.owlCarousel.Constructor.Plugins.Animate = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        var s = function(e) { this._core = e, this._timeout = null, this._paused = !1, this._handlers = { "changed.owl.carousel": t.proxy(function(t) { t.namespace && "settings" === t.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : t.namespace && "position" === t.property.name && this._core.settings.autoplay && this._setAutoPlayInterval() }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.autoplay && this.play() }, this), "play.owl.autoplay": t.proxy(function(t, e, i) { t.namespace && this.play(e, i) }, this), "stop.owl.autoplay": t.proxy(function(t) { t.namespace && this.stop() }, this), "mouseover.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "mouseleave.owl.autoplay": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play() }, this), "touchstart.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause() }, this), "touchend.owl.core": t.proxy(function() { this._core.settings.autoplayHoverPause && this.play() }, this) }, this._core.$element.on(this._handlers), this._core.options = t.extend({}, s.Defaults, this._core.options) };
        s.Defaults = { autoplay: !1, autoplayTimeout: 5e3, autoplayHoverPause: !1, autoplaySpeed: !1 }, s.prototype.play = function(t, e) { this._paused = !1, this._core.is("rotating") || (this._core.enter("rotating"), this._setAutoPlayInterval()) }, s.prototype._getNextTimeout = function(n, s) { return this._timeout && e.clearTimeout(this._timeout), e.setTimeout(t.proxy(function() { this._paused || this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(s || this._core.settings.autoplaySpeed) }, this), n || this._core.settings.autoplayTimeout) }, s.prototype._setAutoPlayInterval = function() { this._timeout = this._getNextTimeout() }, s.prototype.stop = function() { this._core.is("rotating") && (e.clearTimeout(this._timeout), this._core.leave("rotating")) }, s.prototype.pause = function() { this._core.is("rotating") && (this._paused = !0) }, s.prototype.destroy = function() {
            var t, e;
            this.stop();
            for (t in this._handlers) this._core.$element.off(t, this._handlers[t]);
            for (e in Object.getOwnPropertyNames(this)) "function" != typeof this[e] && (this[e] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.autoplay = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var s = function(e) { this._core = e, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = { next: this._core.next, prev: this._core.prev, to: this._core.to }, this._handlers = { "prepared.owl.carousel": t.proxy(function(e) { e.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + t(e.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>") }, this), "added.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 0, this._templates.pop()) }, this), "remove.owl.carousel": t.proxy(function(t) { t.namespace && this._core.settings.dotsData && this._templates.splice(t.position, 1) }, this), "changed.owl.carousel": t.proxy(function(t) { t.namespace && "position" == t.property.name && this.draw() }, this), "initialized.owl.carousel": t.proxy(function(t) { t.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation")) }, this), "refreshed.owl.carousel": t.proxy(function(t) { t.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation")) }, this) }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers) };
        s.Defaults = { nav: !1, navText: ["prev", "next"], navSpeed: !1, navElement: "div", navContainer: !1, navContainerClass: "owl-nav", navClass: ["owl-prev", "owl-next"], slideBy: 1, dotClass: "owl-dot", dotsClass: "owl-dots", dots: !0, dotsEach: !1, dotsData: !1, dotsSpeed: !1, dotsContainer: !1 }, s.prototype.initialize = function() {
            var e, i = this._core.settings;
            this._controls.$relative = (i.navContainer ? t(i.navContainer) : t("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = t("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", t.proxy(function(t) { this.prev(i.navSpeed) }, this)), this._controls.$next = t("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", t.proxy(function(t) { this.next(i.navSpeed) }, this)), i.dotsData || (this._templates = [t("<div>").addClass(i.dotClass).append(t("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? t(i.dotsContainer) : t("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "div", t.proxy(function(e) {
                var n = t(e.target).parent().is(this._controls.$absolute) ? t(e.target).index() : t(e.target).parent().index();
                e.preventDefault(), this.to(n, i.dotsSpeed)
            }, this));
            for (e in this._overrides) this._core[e] = t.proxy(this[e], this)
        }, s.prototype.destroy = function() { var t, e, i, n; for (t in this._handlers) this.$element.off(t, this._handlers[t]); for (e in this._controls) this._controls[e].remove(); for (n in this.overides) this._core[n] = this._overrides[n]; for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null) }, s.prototype.update = function() {
            var t, e, i, n = this._core.clones().length / 2,
                s = n + this._core.items().length,
                o = this._core.maximum(!0),
                a = this._core.settings,
                r = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
            if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy)
                for (this._pages = [], t = n, e = 0, i = 0; t < s; t++) {
                    if (e >= r || 0 === e) {
                        if (this._pages.push({ start: Math.min(o, t - n), end: t - n + r - 1 }), Math.min(o, t - n) === o) break;
                        e = 0, ++i
                    }
                    e += this._core.mergers(this._core.relative(t))
                }
        }, s.prototype.draw = function() {
            var e, i = this._core.settings,
                n = this._core.items().length <= i.items,
                s = this._core.relative(this._core.current()),
                o = i.loop || i.rewind;
            this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !o && s <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !o && s >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (e = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== e ? this._controls.$absolute.html(this._templates.join("")) : e > 0 ? this._controls.$absolute.append(new Array(e + 1).join(this._templates[0])) : e < 0 && this._controls.$absolute.children().slice(e).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(t.inArray(this.current(), this._pages)).addClass("active"))
        }, s.prototype.onTrigger = function(e) {
            var i = this._core.settings;
            e.page = { index: t.inArray(this.current(), this._pages), count: this._pages.length, size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items) }
        }, s.prototype.current = function() { var e = this._core.relative(this._core.current()); return t.grep(this._pages, t.proxy(function(t, i) { return t.start <= e && t.end >= e }, this)).pop() }, s.prototype.getPosition = function(e) { var i, n, s = this._core.settings; return "page" == s.slideBy ? (i = t.inArray(this.current(), this._pages), n = this._pages.length, e ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, e ? i += s.slideBy : i -= s.slideBy), i }, s.prototype.next = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!0), e) }, s.prototype.prev = function(e) { t.proxy(this._overrides.to, this._core)(this.getPosition(!1), e) }, s.prototype.to = function(e, i, n) { var s;!n && this._pages.length ? (s = this._pages.length, t.proxy(this._overrides.to, this._core)(this._pages[(e % s + s) % s].start, i)) : t.proxy(this._overrides.to, this._core)(e, i) }, t.fn.owlCarousel.Constructor.Plugins.Navigation = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        "use strict";
        var s = function(i) {
            this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
                "initialized.owl.carousel": t.proxy(function(i) { i.namespace && "URLHash" === this._core.settings.startPosition && t(e).trigger("hashchange.owl.navigation") }, this),
                "prepared.owl.carousel": t.proxy(function(e) {
                    if (e.namespace) {
                        var i = t(e.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!i) return;
                        this._hashes[i] = e.content
                    }
                }, this),
                "changed.owl.carousel": t.proxy(function(i) {
                    if (i.namespace && "position" === i.property.name) {
                        var n = this._core.items(this._core.relative(this._core.current())),
                            s = t.map(this._hashes, function(t, e) { return t === n ? e : null }).join();
                        if (!s || e.location.hash.slice(1) === s) return;
                        e.location.hash = s
                    }
                }, this)
            }, this._core.options = t.extend({}, s.Defaults, this._core.options), this.$element.on(this._handlers), t(e).on("hashchange.owl.navigation", t.proxy(function(t) {
                var i = e.location.hash.substring(1),
                    n = this._core.$stage.children(),
                    s = this._hashes[i] && n.index(this._hashes[i]);
                void 0 !== s && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
            }, this))
        };
        s.Defaults = { URLhashListener: !1 }, s.prototype.destroy = function() {
            var i, n;
            t(e).off("hashchange.owl.navigation");
            for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
            for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
        }, t.fn.owlCarousel.Constructor.Plugins.Hash = s
    }(window.Zepto || window.jQuery, window, document),
    function(t, e, i, n) {
        function s(e, i) {
            var s = !1,
                o = e.charAt(0).toUpperCase() + e.slice(1);
            return t.each((e + " " + r.join(o + " ") + o).split(" "), function(t, e) { if (a[e] !== n) return s = !i || e, !1 }), s
        }

        function o(t) { return s(t, !0) }
        var a = t("<support>").get(0).style,
            r = "Webkit Moz O ms".split(" "),
            l = { transition: { end: { WebkitTransition: "webkitTransitionEnd", MozTransition: "transitionend", OTransition: "oTransitionEnd", transition: "transitionend" } }, animation: { end: { WebkitAnimation: "webkitAnimationEnd", MozAnimation: "animationend", OAnimation: "oAnimationEnd", animation: "animationend" } } },
            h = { csstransforms: function() { return !!s("transform") }, csstransforms3d: function() { return !!s("perspective") }, csstransitions: function() { return !!s("transition") }, cssanimations: function() { return !!s("animation") } };
        h.csstransitions() && (t.support.transition = new String(o("transition")), t.support.transition.end = l.transition.end[t.support.transition]), h.cssanimations() && (t.support.animation = new String(o("animation")), t.support.animation.end = l.animation.end[t.support.animation]), h.csstransforms() && (t.support.transform = new String(o("transform")), t.support.transform3d = h.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document), "function" != typeof Object.create && (Object.create = function(t) {
        function e() {}
        return e.prototype = t, new e
    }),
    function(t, e, i, n) {
        var s = {
            init: function(e, i) {
                var n = this;
                n.elem = i, n.$elem = t(i), n.imageSrc = n.$elem.data("zoom-image") ? n.$elem.data("zoom-image") : n.$elem.attr("src"), n.options = t.extend({}, t.fn.elevateZoom.options, e), n.options.tint && (n.options.lensColour = "none", n.options.lensOpacity = "1"), "inner" == n.options.zoomType && (n.options.showLens = !1), n.$elem.parent().removeAttr("title").removeAttr("alt"), n.zoomImage = n.imageSrc, n.refresh(1), t("#" + n.options.gallery + " a").click(function(e) { return n.options.galleryActiveClass && (t("#" + n.options.gallery + " a").removeClass(n.options.galleryActiveClass), t(this).addClass(n.options.galleryActiveClass)), e.preventDefault(), t(this).data("zoom-image") ? n.zoomImagePre = t(this).data("zoom-image") : n.zoomImagePre = t(this).data("image"), n.swaptheimage(t(this).data("image"), n.zoomImagePre), !1 })
            },
            refresh: function(t) {
                var e = this;
                setTimeout(function() { e.fetch(e.imageSrc) }, t || e.options.refresh)
            },
            fetch: function(t) {
                var e = this,
                    i = new Image;
                i.onload = function() { e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem) }, i.src = t
            },
            startZoom: function() {
                var e = this;
                if (e.nzWidth = e.$elem.width(), e.nzHeight = e.$elem.height(), e.isWindowActive = !1, e.isLensActive = !1, e.isTintActive = !1, e.overWindow = !1, e.options.imageCrossfade && (e.zoomWrap = e.$elem.wrap('<div style="height:' + e.nzHeight + "px;width:" + e.nzWidth + 'px;" class="zoomWrapper" />'), e.$elem.css("position", "absolute")), e.zoomLock = 1, e.scrollingLock = !1, e.changeBgSize = !1, e.currentZoomLevel = e.options.zoomLevel, e.nzOffset = e.$elem.offset(), e.widthRatio = e.largeWidth / e.currentZoomLevel / e.nzWidth, e.heightRatio = e.largeHeight / e.currentZoomLevel / e.nzHeight, "window" == e.options.zoomType && (e.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(e.options.zoomWindowBgColour) + ";width: " + String(e.options.zoomWindowWidth) + "px;height: " + String(e.options.zoomWindowHeight) + "px;float: left;background-size: " + e.largeWidth / e.currentZoomLevel + "px " + e.largeHeight / e.currentZoomLevel + "px;display: none;z-index:100;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == e.options.zoomType) {
                    var i = e.$elem.css("border-left-width");
                    e.zoomWindowStyle = "overflow: hidden;margin-left: " + String(i) + ";margin-top: " + String(i) + ";background-position: 0px 0px;width: " + String(e.nzWidth) + "px;height: " + String(e.nzHeight) + "px;px;float: left;display: none;cursor:" + e.options.cursor + ";px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
                }
                "window" == e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.lensStyle = "background-position: 0px 0px;width: " + String(e.options.zoomWindowWidth / e.widthRatio) + "px;height: " + String(e.options.zoomWindowHeight / e.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + e.options.lensOpacity + ";filter: alpha(opacity = " + 100 * e.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + e.options.lensColour + ";cursor:" + e.options.cursor + ";border: " + e.options.lensBorderSize + "px solid " + e.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), e.tintStyle = "display: block;position: absolute;background-color: " + e.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + e.nzWidth + "px;height: " + e.nzHeight + "px;", e.lensRound = "", "lens" == e.options.zoomType && (e.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";width:" + String(e.options.lensSize) + "px;height:" + String(e.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == e.options.lensShape && (e.lensRound = "border-top-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-top-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;"), e.zoomContainer = t('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + e.nzOffset.left + "px;top:" + e.nzOffset.top + "px;height:" + e.nzHeight + "px;width:" + e.nzWidth + 'px;"></div>'), t("body").append(e.zoomContainer), e.options.containLensZoom && "lens" == e.options.zoomType && e.zoomContainer.css("overflow", "hidden"), "inner" != e.options.zoomType && (e.zoomLens = t("<div class='zoomLens' style='" + e.lensStyle + e.lensRound + "'>&nbsp;</div>").appendTo(e.zoomContainer).click(function() { e.$elem.trigger("click") }), e.options.tint && (e.tintContainer = t("<div/>").addClass("tintContainer"), e.zoomTint = t("<div class='zoomTint' style='" + e.tintStyle + "'></div>"), e.zoomLens.wrap(e.tintContainer), e.zoomTintcss = e.zoomLens.after(e.zoomTint), e.zoomTintImage = t('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + e.nzWidth + "px; height: " + e.nzHeight + 'px;" src="' + e.imageSrc + '">').appendTo(e.zoomLens).click(function() { e.$elem.trigger("click") }))), isNaN(e.options.zoomWindowPosition) ? e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function() { e.$elem.trigger("click") }) : e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click(function() { e.$elem.trigger("click") }), e.zoomWindowContainer = t("<div/>").addClass("zoomWindowContainer").css("width", e.options.zoomWindowWidth), e.zoomWindow.wrap(e.zoomWindowContainer), "lens" == e.options.zoomType && e.zoomLens.css({ backgroundImage: "url('" + e.imageSrc + "')" }), "window" == e.options.zoomType && e.zoomWindow.css({ backgroundImage: "url('" + e.imageSrc + "')" }), "inner" == e.options.zoomType && e.zoomWindow.css({ backgroundImage: "url('" + e.imageSrc + "')" }), e.$elem.bind("touchmove", function(t) {
                    t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomContainer.bind("touchmove", function(t) {
                    "inner" == e.options.zoomType && e.showHideWindow("show"), t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomContainer.bind("touchend", function(t) { e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide") }), e.$elem.bind("touchend", function(t) { e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide") }), e.options.showLens && (e.zoomLens.bind("touchmove", function(t) {
                    t.preventDefault();
                    var i = t.originalEvent.touches[0] || t.originalEvent.changedTouches[0];
                    e.setPosition(i)
                }), e.zoomLens.bind("touchend", function(t) { e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide") })), e.$elem.bind("mousemove", function(t) { 0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), e.zoomContainer.bind("mousemove", function(t) { 0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), "inner" != e.options.zoomType && e.zoomLens.bind("mousemove", function(t) { e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), e.options.tint && "inner" != e.options.zoomType && e.zoomTint.bind("mousemove", function(t) { e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), "inner" == e.options.zoomType && e.zoomWindow.bind("mousemove", function(t) { e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY }), e.zoomContainer.add(e.$elem).mouseenter(function() { 0 == e.overWindow && e.setElements("show") }).mouseleave(function() { e.scrollLock || (e.setElements("hide"), e.options.onDestroy(e.$elem)) }), "inner" != e.options.zoomType && e.zoomWindow.mouseenter(function() { e.overWindow = !0, e.setElements("hide") }).mouseleave(function() { e.overWindow = !1 }), e.options.zoomLevel, e.options.minZoomLevel ? e.minZoomLevel = e.options.minZoomLevel : e.minZoomLevel = 2 * e.options.scrollZoomIncrement, e.options.scrollZoom && e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function(i) { e.scrollLock = !0, clearTimeout(t.data(this, "timer")), t.data(this, "timer", setTimeout(function() { e.scrollLock = !1 }, 250)); var n = i.originalEvent.wheelDelta || -1 * i.originalEvent.detail; return i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), n / 120 > 0 ? e.currentZoomLevel >= e.minZoomLevel && e.changeZoomLevel(e.currentZoomLevel - e.options.scrollZoomIncrement) : e.options.maxZoomLevel ? e.currentZoomLevel <= e.options.maxZoomLevel && e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement) : e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement), !1 })
            },
            setElements: function(t) { var e = this; if (!e.options.zoomEnabled) return !1; "show" == t && e.isWindowSet && ("inner" == e.options.zoomType && e.showHideWindow("show"), "window" == e.options.zoomType && e.showHideWindow("show"), e.options.showLens && e.showHideLens("show"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("show")), "hide" == t && ("window" == e.options.zoomType && e.showHideWindow("hide"), e.options.tint || e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && e.showHideTint("hide")) },
            setPosition: function(t) { var e = this; return !!e.options.zoomEnabled && (e.nzHeight = e.$elem.height(), e.nzWidth = e.$elem.width(), e.nzOffset = e.$elem.offset(), e.options.tint && "inner" != e.options.zoomType && (e.zoomTint.css({ top: 0 }), e.zoomTint.css({ left: 0 })), e.options.responsive && !e.options.scrollZoom && e.options.showLens && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.largeWidth < e.options.zoomWindowWidth ? lensWidth = e.nzWidth : lensWidth = e.options.zoomWindowWidth / e.widthRatio, e.widthRatio = e.largeWidth / e.nzWidth, e.heightRatio = e.largeHeight / e.nzHeight, "lens" != e.options.zoomType && (e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? lensHeight = e.nzHeight : lensHeight = String(e.options.zoomWindowHeight / e.heightRatio), e.nzWidth < e.options.zoomWindowHeight / e.heightRatio ? lensWidth = e.nzWidth : lensWidth = String(e.options.zoomWindowWidth / e.widthRatio), e.zoomLens.css("width", lensWidth), e.zoomLens.css("height", lensHeight), e.options.tint && (e.zoomTintImage.css("width", e.nzWidth), e.zoomTintImage.css("height", e.nzHeight))), "lens" == e.options.zoomType && e.zoomLens.css({ width: String(e.options.lensSize) + "px", height: String(e.options.lensSize) + "px" })), e.zoomContainer.css({ top: e.nzOffset.top }), e.zoomContainer.css({ left: e.nzOffset.left }), e.mouseLeft = parseInt(t.pageX - e.nzOffset.left), e.mouseTop = parseInt(t.pageY - e.nzOffset.top), "window" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.zoomLens.height() / 2, e.Eboppos = e.mouseTop > e.nzHeight - e.zoomLens.height() / 2 - 2 * e.options.lensBorderSize, e.Eloppos = e.mouseLeft < 0 + e.zoomLens.width() / 2, e.Eroppos = e.mouseLeft > e.nzWidth - e.zoomLens.width() / 2 - 2 * e.options.lensBorderSize), "inner" == e.options.zoomType && (e.Etoppos = e.mouseTop < e.nzHeight / 2 / e.heightRatio, e.Eboppos = e.mouseTop > e.nzHeight - e.nzHeight / 2 / e.heightRatio, e.Eloppos = e.mouseLeft < 0 + e.nzWidth / 2 / e.widthRatio, e.Eroppos = e.mouseLeft > e.nzWidth - e.nzWidth / 2 / e.widthRatio - 2 * e.options.lensBorderSize), e.mouseLeft < 0 || e.mouseTop < 0 || e.mouseLeft > e.nzWidth || e.mouseTop > e.nzHeight ? void e.setElements("hide") : (e.options.showLens && (e.lensLeftPos = String(Math.floor(e.mouseLeft - e.zoomLens.width() / 2)), e.lensTopPos = String(Math.floor(e.mouseTop - e.zoomLens.height() / 2))), e.Etoppos && (e.lensTopPos = 0), e.Eloppos && (e.windowLeftPos = 0, e.lensLeftPos = 0, e.tintpos = 0), "window" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), "inner" == e.options.zoomType && (e.Eboppos && (e.lensTopPos = Math.max(e.nzHeight - 2 * e.options.lensBorderSize, 0)), e.Eroppos && (e.lensLeftPos = e.nzWidth - e.nzWidth - 2 * e.options.lensBorderSize)), "lens" == e.options.zoomType && (e.windowLeftPos = String(-1 * ((t.pageX - e.nzOffset.left) * e.widthRatio - e.zoomLens.width() / 2)), e.windowTopPos = String(-1 * ((t.pageY - e.nzOffset.top) * e.heightRatio - e.zoomLens.height() / 2)), e.zoomLens.css({ backgroundPosition: e.windowLeftPos + "px " + e.windowTopPos + "px" }), e.changeBgSize && (e.nzHeight > e.nzWidth ? ("lens" == e.options.zoomType && e.zoomLens.css({ "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px" }), e.zoomWindow.css({ "background-size": e.largeWidth / e.newvalueheight + "px " + e.largeHeight / e.newvalueheight + "px" })) : ("lens" == e.options.zoomType && e.zoomLens.css({ "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px" }), e.zoomWindow.css({ "background-size": e.largeWidth / e.newvaluewidth + "px " + e.largeHeight / e.newvaluewidth + "px" })), e.changeBgSize = !1), e.setWindowPostition(t)), e.options.tint && "inner" != e.options.zoomType && e.setTintPosition(t), "window" == e.options.zoomType && e.setWindowPostition(t), "inner" == e.options.zoomType && e.setWindowPostition(t), e.options.showLens && (e.fullwidth && "lens" != e.options.zoomType && (e.lensLeftPos = 0), e.zoomLens.css({ left: e.lensLeftPos + "px", top: e.lensTopPos + "px" })), void 0)) },
            showHideWindow: function(t) { var e = this; "show" == t && (e.isWindowActive || (e.options.zoomWindowFadeIn ? e.zoomWindow.stop(!0, !0, !1).fadeIn(e.options.zoomWindowFadeIn) : e.zoomWindow.show(), e.isWindowActive = !0)), "hide" == t && e.isWindowActive && (e.options.zoomWindowFadeOut ? e.zoomWindow.stop(!0, !0).fadeOut(e.options.zoomWindowFadeOut, function() { e.loop && (clearInterval(e.loop), e.loop = !1) }) : e.zoomWindow.hide(), e.isWindowActive = !1) },
            showHideLens: function(t) { var e = this; "show" == t && (e.isLensActive || (e.options.lensFadeIn ? e.zoomLens.stop(!0, !0, !1).fadeIn(e.options.lensFadeIn) : e.zoomLens.show(), e.isLensActive = !0)), "hide" == t && e.isLensActive && (e.options.lensFadeOut ? e.zoomLens.stop(!0, !0).fadeOut(e.options.lensFadeOut) : e.zoomLens.hide(), e.isLensActive = !1) },
            showHideTint: function(t) { var e = this; "show" == t && (e.isTintActive || (e.options.zoomTintFadeIn ? e.zoomTint.css({ opacity: e.options.tintOpacity }).animate().stop(!0, !0).fadeIn("slow") : (e.zoomTint.css({ opacity: e.options.tintOpacity }).animate(), e.zoomTint.show()), e.isTintActive = !0)), "hide" == t && e.isTintActive && (e.options.zoomTintFadeOut ? e.zoomTint.stop(!0, !0).fadeOut(e.options.zoomTintFadeOut) : e.zoomTint.hide(), e.isTintActive = !1) },
            setLensPostition: function(t) {},
            setWindowPostition: function(e) {
                var i = this;
                if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = t("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(),
                    i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left;
                else switch (i.options.zoomWindowPosition) {
                    case 1:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = +i.nzWidth;
                        break;
                    case 2:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = i.nzWidth);
                        break;
                    case 3:
                        i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = i.nzWidth;
                        break;
                    case 4:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth;
                        break;
                    case 5:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                        break;
                    case 6:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                        break;
                    case 7:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = 0;
                        break;
                    case 8:
                        i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 9:
                        i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 10:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize));
                        break;
                    case 11:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 12:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                        break;
                    case 13:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = 0;
                        break;
                    case 14:
                        i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                        break;
                    case 15:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                        break;
                    case 16:
                        i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth;
                        break;
                    default:
                        i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = i.nzWidth
                }
                i.isWindowSet = !0, i.windowOffsetTop = i.windowOffsetTop + i.options.zoomWindowOffety, i.windowOffsetLeft = i.windowOffsetLeft + i.options.zoomWindowOffetx, i.zoomWindow.css({ top: i.windowOffsetTop }), i.zoomWindow.css({ left: i.windowOffsetLeft }), "inner" == i.options.zoomType && (i.zoomWindow.css({ top: 0 }), i.zoomWindow.css({ left: 0 })), i.windowLeftPos = String(-1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2)), i.windowTopPos = String(-1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2)), i.Etoppos && (i.windowTopPos = 0), i.Eloppos && (i.windowLeftPos = 0), i.Eboppos && (i.windowTopPos = -1 * (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height())), i.Eroppos && (i.windowLeftPos = -1 * (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width())), i.fullheight && (i.windowTopPos = 0), i.fullwidth && (i.windowLeftPos = 0), "window" != i.options.zoomType && "inner" != i.options.zoomType || (1 == i.zoomLock && (i.widthRatio <= 1 && (i.windowLeftPos = 0), i.heightRatio <= 1 && (i.windowTopPos = 0)), "window" == i.options.zoomType && (i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0)), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function() { i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount, i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount, i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = -1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2), i.yp = -1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2), i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" != i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" }), i.scrollingLock = !1, i.loop = !1) : Math.round(Math.abs(i.xp - i.windowLeftPos) + Math.abs(i.yp - i.windowTopPos)) < 1 ? (clearInterval(i.loop), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" }), i.loop = !1) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" != i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.xp + "px " + i.yp + "px" })) }, 16))) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" }), i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })) : ("lens" == i.options.zoomType && i.zoomLens.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({ "background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px" }) : i.zoomWindow.css({ "background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px" })), i.changeBgSize = !1), i.zoomWindow.css({ backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px" })))
            },
            setTintPosition: function(t) {
                var e = this;
                e.nzOffset = e.$elem.offset(), e.tintpos = String(-1 * (t.pageX - e.nzOffset.left - e.zoomLens.width() / 2)), e.tintposy = String(-1 * (t.pageY - e.nzOffset.top - e.zoomLens.height() / 2)), e.Etoppos && (e.tintposy = 0), e.Eloppos && (e.tintpos = 0), e.Eboppos && (e.tintposy = -1 * (e.nzHeight - e.zoomLens.height() - 2 * e.options.lensBorderSize)), e.Eroppos && (e.tintpos = -1 * (e.nzWidth - e.zoomLens.width() - 2 * e.options.lensBorderSize)), e.options.tint && (e.fullheight && (e.tintposy = 0), e.fullwidth && (e.tintpos = 0), e.zoomTintImage.css({ left: e.tintpos + "px" }), e.zoomTintImage.css({ top: e.tintposy + "px" }))
            },
            swaptheimage: function(e, i) {
                var n = this,
                    s = new Image;
                n.options.loadingIcon && (n.spinner = t("<div style=\"background: url('" + n.options.loadingIcon + "') no-repeat center;height:" + n.nzHeight + "px;width:" + n.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), n.$elem.after(n.spinner)), n.options.onImageSwap(n.$elem), s.onload = function() { n.largeWidth = s.width, n.largeHeight = s.height, n.zoomImage = i, n.zoomWindow.css({ "background-size": n.largeWidth + "px " + n.largeHeight + "px" }), n.swapAction(e, i) }, s.src = i
            },
            swapAction: function(e, i) {
                var n = this,
                    s = new Image;
                if (s.onload = function() { n.nzHeight = s.height, n.nzWidth = s.width, n.options.onImageSwapComplete(n.$elem), n.doneCallback() }, s.src = e, n.currentZoomLevel = n.options.zoomLevel, n.options.maxZoomLevel = !1, "lens" == n.options.zoomType && n.zoomLens.css({ backgroundImage: "url('" + i + "')" }), "window" == n.options.zoomType && n.zoomWindow.css({ backgroundImage: "url('" + i + "')" }), "inner" == n.options.zoomType && n.zoomWindow.css({ backgroundImage: "url('" + i + "')" }), n.currentImage = i, n.options.imageCrossfade) {
                    var o = n.$elem,
                        a = o.clone();
                    if (n.$elem.attr("src", e), n.$elem.after(a), a.stop(!0).fadeOut(n.options.imageCrossfade, function() { t(this).remove() }), n.$elem.width("auto").removeAttr("width"), n.$elem.height("auto").removeAttr("height"), o.fadeIn(n.options.imageCrossfade), n.options.tint && "inner" != n.options.zoomType) {
                        var r = n.zoomTintImage,
                            l = r.clone();
                        n.zoomTintImage.attr("src", i), n.zoomTintImage.after(l), l.stop(!0).fadeOut(n.options.imageCrossfade, function() { t(this).remove() }), r.fadeIn(n.options.imageCrossfade), n.zoomTint.css({ height: n.$elem.height() }), n.zoomTint.css({ width: n.$elem.width() })
                    }
                    n.zoomContainer.css("height", n.$elem.height()), n.zoomContainer.css("width", n.$elem.width()), "inner" == n.options.zoomType && (n.options.constrainType || (n.zoomWrap.parent().css("height", n.$elem.height()), n.zoomWrap.parent().css("width", n.$elem.width()), n.zoomWindow.css("height", n.$elem.height()), n.zoomWindow.css("width", n.$elem.width()))), n.options.imageCrossfade && (n.zoomWrap.css("height", n.$elem.height()), n.zoomWrap.css("width", n.$elem.width()))
                } else n.$elem.attr("src", e), n.options.tint && (n.zoomTintImage.attr("src", i), n.zoomTintImage.attr("height", n.$elem.height()), n.zoomTintImage.css({ height: n.$elem.height() }), n.zoomTint.css({ height: n.$elem.height() })), n.zoomContainer.css("height", n.$elem.height()), n.zoomContainer.css("width", n.$elem.width()), n.options.imageCrossfade && (n.zoomWrap.css("height", n.$elem.height()), n.zoomWrap.css("width", n.$elem.width()));
                n.options.constrainType && ("height" == n.options.constrainType && (n.zoomContainer.css("height", n.options.constrainSize), n.zoomContainer.css("width", "auto"), n.options.imageCrossfade ? (n.zoomWrap.css("height", n.options.constrainSize), n.zoomWrap.css("width", "auto"), n.constwidth = n.zoomWrap.width()) : (n.$elem.css("height", n.options.constrainSize), n.$elem.css("width", "auto"), n.constwidth = n.$elem.width()), "inner" == n.options.zoomType && (n.zoomWrap.parent().css("height", n.options.constrainSize), n.zoomWrap.parent().css("width", n.constwidth), n.zoomWindow.css("height", n.options.constrainSize), n.zoomWindow.css("width", n.constwidth)), n.options.tint && (n.tintContainer.css("height", n.options.constrainSize), n.tintContainer.css("width", n.constwidth), n.zoomTint.css("height", n.options.constrainSize), n.zoomTint.css("width", n.constwidth), n.zoomTintImage.css("height", n.options.constrainSize), n.zoomTintImage.css("width", n.constwidth))), "width" == n.options.constrainType && (n.zoomContainer.css("height", "auto"), n.zoomContainer.css("width", n.options.constrainSize), n.options.imageCrossfade ? (n.zoomWrap.css("height", "auto"), n.zoomWrap.css("width", n.options.constrainSize), n.constheight = n.zoomWrap.height()) : (n.$elem.css("height", "auto"), n.$elem.css("width", n.options.constrainSize), n.constheight = n.$elem.height()), "inner" == n.options.zoomType && (n.zoomWrap.parent().css("height", n.constheight), n.zoomWrap.parent().css("width", n.options.constrainSize), n.zoomWindow.css("height", n.constheight), n.zoomWindow.css("width", n.options.constrainSize)), n.options.tint && (n.tintContainer.css("height", n.constheight), n.tintContainer.css("width", n.options.constrainSize), n.zoomTint.css("height", n.constheight), n.zoomTint.css("width", n.options.constrainSize), n.zoomTintImage.css("height", n.constheight), n.zoomTintImage.css("width", n.options.constrainSize))))
            },
            doneCallback: function() {
                var t = this;
                t.options.loadingIcon && t.spinner.hide(), t.nzOffset = t.$elem.offset(), t.nzWidth = t.$elem.width(), t.nzHeight = t.$elem.height(), t.currentZoomLevel = t.options.zoomLevel, t.widthRatio = t.largeWidth / t.nzWidth, t.heightRatio = t.largeHeight / t.nzHeight, "window" == t.options.zoomType && (t.nzHeight < t.options.zoomWindowWidth / t.widthRatio ? lensHeight = t.nzHeight : lensHeight = String(t.options.zoomWindowHeight / t.heightRatio), t.options.zoomWindowWidth < t.options.zoomWindowWidth ? lensWidth = t.nzWidth : lensWidth = t.options.zoomWindowWidth / t.widthRatio, t.zoomLens && (t.zoomLens.css("width", lensWidth), t.zoomLens.css("height", lensHeight)))
            },
            getCurrentImage: function() { return this.zoomImage },
            getGalleryList: function() {
                var e = this;
                return e.gallerylist = [], e.options.gallery ? t("#" + e.options.gallery + " a").each(function() {
                    var i = "";
                    t(this).data("zoom-image") ? i = t(this).data("zoom-image") : t(this).data("image") && (i = t(this).data("image")), i == e.zoomImage ? e.gallerylist.unshift({ href: "" + i, title: t(this).find("img").attr("title") }) : e.gallerylist.push({ href: "" + i, title: t(this).find("img").attr("title") })
                }) : e.gallerylist.push({ href: "" + e.zoomImage, title: t(this).find("img").attr("title") }), e.gallerylist
            },
            changeZoomLevel: function(t) {
                var e = this;
                e.scrollingLock = !0, e.newvalue = parseFloat(t).toFixed(2), newvalue = parseFloat(t).toFixed(2), maxheightnewvalue = e.largeHeight / (e.options.zoomWindowHeight / e.nzHeight * e.nzHeight), maxwidthtnewvalue = e.largeWidth / (e.options.zoomWindowWidth / e.nzWidth * e.nzWidth), "inner" != e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / maxheightnewvalue / e.nzHeight, e.newvalueheight = maxheightnewvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / maxwidthtnewvalue / e.nzWidth, e.newvaluewidth = maxwidthtnewvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1), "lens" == e.options.zoomType && (maxheightnewvalue <= newvalue ? (e.fullwidth = !0, e.newvaluewidth = maxheightnewvalue) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1))), "inner" == e.options.zoomType && (maxheightnewvalue = parseFloat(e.largeHeight / e.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(e.largeWidth / e.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !0) : (e.heightRatio = e.largeHeight / newvalue / e.nzHeight, newvalue > maxheightnewvalue ? e.newvalueheight = maxheightnewvalue : e.newvalueheight = newvalue, e.fullheight = !1), maxwidthtnewvalue <= newvalue ? (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, newvalue > maxwidthtnewvalue ? e.newvaluewidth = maxwidthtnewvalue : e.newvaluewidth = newvalue, e.fullwidth = !0) : (e.widthRatio = e.largeWidth / newvalue / e.nzWidth, e.newvaluewidth = newvalue, e.fullwidth = !1)), scrcontinue = !1, "inner" == e.options.zoomType && (e.nzWidth >= e.nzHeight && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0)), e.nzHeight > e.nzWidth && (e.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, e.fullheight = !0, e.fullwidth = !0))), "inner" != e.options.zoomType && (scrcontinue = !0), scrcontinue && (e.zoomLock = 0, e.changeZoom = !0, e.options.zoomWindowHeight / e.heightRatio <= e.nzHeight && (e.currentZoomLevel = e.newvalueheight, "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({ height: String(e.options.zoomWindowHeight / e.heightRatio) + "px" })), "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)), e.options.zoomWindowWidth / e.widthRatio <= e.nzWidth && ("inner" != e.options.zoomType && e.newvaluewidth > e.newvalueheight && (e.currentZoomLevel = e.newvaluewidth), "lens" != e.options.zoomType && "inner" != e.options.zoomType && (e.changeBgSize = !0, e.zoomLens.css({ width: String(e.options.zoomWindowWidth / e.widthRatio) + "px" })), "lens" != e.options.zoomType && "inner" != e.options.zoomType || (e.changeBgSize = !0)), "inner" == e.options.zoomType && (e.changeBgSize = !0, e.nzWidth > e.nzHeight && (e.currentZoomLevel = e.newvaluewidth), e.nzHeight > e.nzWidth && (e.currentZoomLevel = e.newvaluewidth))), e.setPosition(e.currentLoc)
            },
            closeAll: function() { self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide() },
            changeState: function(t) { var e = this; "enable" == t && (e.options.zoomEnabled = !0), "disable" == t && (e.options.zoomEnabled = !1) }
        };
        t.fn.elevateZoom = function(e) {
            return this.each(function() {
                var i = Object.create(s);
                i.init(e, this), t.data(this, "elevateZoom", i)
            })
        }, t.fn.elevateZoom.options = { zoomActivation: "hover", zoomEnabled: !0, preloading: 1, zoomLevel: 1, scrollZoom: !1, scrollZoomIncrement: .1, minZoomLevel: !1, maxZoomLevel: !1, easing: !1, easingAmount: 12, lensSize: 200, zoomWindowWidth: 400, zoomWindowHeight: 400, zoomWindowOffetx: 0, zoomWindowOffety: 0, zoomWindowPosition: 1, zoomWindowBgColour: "#fff", lensFadeIn: !1, lensFadeOut: !1, debug: !1, zoomWindowFadeIn: !1, zoomWindowFadeOut: !1, zoomWindowAlwaysShow: !1, zoomTintFadeIn: !1, zoomTintFadeOut: !1, borderSize: 4, showLens: !0, borderColour: "#888", lensBorderSize: 1, lensBorderColour: "#000", lensShape: "square", zoomType: "window", containLensZoom: !1, lensColour: "white", lensOpacity: .4, lenszoom: !1, tint: !1, tintColour: "#333", tintOpacity: .4, gallery: !1, galleryActiveClass: "zoomGalleryActive", imageCrossfade: !1, constrainType: !1, constrainSize: !1, loadingIcon: !1, cursor: "default", responsive: !0, onComplete: t.noop, onDestroy: function() {}, onZoomedImageLoaded: function() {}, onImageSwap: t.noop, onImageSwapComplete: t.noop }
    }(jQuery, window, document),
    function(t) {
        t(document).ready(function() {
            t(window).on("load", function() {
                t('.plus').on('click', function() {
                    var current = parseInt($(this).parent().find('input').val());
                    var max = parseInt($(this).parent().find('input').attr('max'));
                    var count = 0;
                    if (current < max) {
                        count = current + 1;
                        $(this).parent().find('input').removeClass('warn');
                        $(this).parent().find('input').val(count);
                    } else {
                        $(this).parent().find('input').addClass('warn');
                    }
                });
                t('.minus').on('click', function() {
                	var current = parseInt($(this).parent().find('input').val());
                    var count = 0;
                    if (current > 0) {
                        count = current - 1;
                        $(this).parent().find('input').removeClass('warn');
                        $(this).parent().find('input').val(count);
                    } else {
                        $(this).parent().find('input').addClass('warn');
                    }
                });
                 t("#toprod").find(".owl-item.active").last().addClass("last"), 
                 t("#slider .owl-carousel").owlCarousel({ loop: !0, margin: 0, items: 1, autoplay: !0 }), 
                 t("#inner-slider .owl-carousel").owlCarousel({ loop: !0, margin: 0, items: 1, autoplay: !0 }), 
                 t("#partners .owl-carousel").owlCarousel({ loop: !0, margin: 0, autoplay: !0, responsive: { 0: { items: 3 }, 481: { items: 4 }, 769: { items: 6 }, 1121: { items: 7 }, 1441: { items: 8 } } }), 
                 t("#superprice .owl-carousel").owlCarousel({ loop: !0, margin: 0, items: 1, autoplay: !0 }),
                  t("#feedbacks .owl-carousel").owlCarousel({ loop: !0, margin: 0, autoplay: !0, responsive: { 0: { items: 1 }, 1025: { items: 2 } } }), 
                  t(".gotop").click(function() { return t("html, body").animate({ scrollTop: 0 }, 800), !1 }), 
                  t(".weight li").on("click", function() { 
                    t(".weight li").removeClass("active"), t(this).addClass("active") }), 
                  t(".color li").on("click", function() { t(".color li span").removeClass("active"), 
                    t(this).find("span").addClass("active") }), t(".addfeed button").on("click", function() { 
                        t(".feedback-form").slideDown() }), t("body").width() <= 1024 ? (
                        t("#menu-block").appendTo(".header-top"), 
                        t("#header .logo").prependTo(".header-bottom"), 
                        t(".header-bottom").prepend('<div class="hamburger"></div>'), 
                        t("#header").find(".hamburger").on("click", function() { t(".header-top").addClass("show") }), 
                        t(".header-top").swipe({ swipeLeft: function() { 
                            t(".header-top").removeClass("show") } }), t(document).mouseup(function(e) {
                    var i = t(".header-top");
                    i.is(e.target) || 0 !== i.has(e.target).length || t(".header-top").removeClass("show")
                }), t("#main>ul .expanded").on("click", function() {
                 t("#main>ul").find("a").hide(), 
                 t(this).children("ul").show(), 
                 t(this).children("ul").find("a").show()
                }),
                t("#menu-block").find("li.expanded").children("a").attr("href", "#"), 
                t("#menu-block>ul>li.expanded>a").on("click", function() { 
                    t(this).parent().children("ul").slideToggle() }), 
                t("#menu-block>ul>li.expanded li.expanded>a").on("click", function() {
                    if (t(this).hasClass("title")) 
                        t(this).removeClass("title"), 
                    t(this).find("span").first().remove(), 
                    t(this).find("span").contents().unwrap(), 
                    t(this).parent().parent().children("li").show(), 
                    t(this).parent().children("ul").hide(), 
                    t(this).parent().parent().parent().children("a").show();
                    else {
                        t(this).parent().parent().children("li").hide(), 
                        t(this).parent().show(), t(this).parent().children("ul").show(), 
                        t(this).parent().parent().parent().children("a").hide();
                        var e = t(this).text();
                        t(this).addClass("title").html("<span>Назад</span><span>" + e + "</span>")
                    }
                })) : (t("#img_01").elevateZoom({ gallery: "gal1", cursor: "pointer", galleryActiveClass: "active", imageCrossfade: !0, loadingIcon: "http://www.elevateweb.co.uk/spinner.gif" }), t("#img_01").bind("click", function(e) { var i = t("#img_01").data("elevateZoom"); return t.fancybox(i.getGalleryList()), !1 }))
            }), t(".filter-row form").prepend('<p id="sliderz"><label>Цена</label></p>'), t(".filter-row form").find("#sliderz").append('<div id="slider-range"></div>'), t(".filter-row form").find("#sliderz").append('<h1 id="prices">5000 сум - 500000 сум</h1>'), t(".filter-row form").append('<p><label>Рекомендованные</label><input type="checkbox" id="recommend"></p>'), t(".filter-row form").find('input[type="submit"]').appendTo(".filter-row form"), t(".filter-row form").find("#recommend").click(function() { t(this).is(":checked") ? t(".filter-row form p:nth-child(5) input").val("1") : t(".filter-row form p:nth-child(5) input").val("0") });
            var e = {
                range: !0,
                min: 5e3,
                max: 5e5,
                step: 5e3,
                values: [0, 5e5],
                slide: function(e, i) {
                    var n = i.values[0],
                        s = i.values[1];
                    t(".filter-row #id_min").val(n), t(".filter-row #id_max").val(s), t(".filter-row form").find("#prices").text(n + " сум - " + s + " сум")
                }
            };
            t(".filter-row").find("#slider-range").slider(e), t(".filter-row").find("#slider-range").slider("values", 0), t(".filter-row").find("#slider-range").slider("values", 1), t(".sorting select").change(function() {
                var e = t(this).val();
                t(".filter-row #id_order_by").find('option[value="' + e + '"]').attr("selected", ""), t("#filter").find('input[type="submit"]').trigger("click")
            })
        })
    }(jQuery);