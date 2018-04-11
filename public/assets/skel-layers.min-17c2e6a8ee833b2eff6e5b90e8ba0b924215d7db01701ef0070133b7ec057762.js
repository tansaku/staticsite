/* skel-layers.js v2.0.2 | (c) n33 | getskel.com | MIT licensed */

(function (e) {
    typeof define == "function" && define.amd ? define(["jquery", "skel"], e) : e(jQuery, skel)
})(function (e, t) {
    var n = "config", r = "cache", i = "setTimeout", s = "_skel_layers_translateOrigin", o = "_skel_layers_resetForms", u = "trigger", f = "position", l = "_skel_layers_translate", c = "visibleWrapper", h = "_skel_layers_promote", p = "skel-layers-moved", d = "_skel_layers_demote", v = "$element", m = "moveToVisibleWrapper", g = "_skel_layers_resume", y = "moveToHiddenWrapper", b = "exclusiveLayer", w = "exclusive", E = "_skel_layers_cssNumericValue", S = "center", x = "css", T = "right", N = "bottom", C = "prototype", k = "skel-layers-css-values", L = "width", A = "_skel_layers_init", O = "_skel_layers_suspend", M = "left", _ = "_skel_layers_doTranslate", D = "overflow-x", P = "layers", H = "wrapper", B = "speed", j = "skel-layers-layer-z-index", F = "showstart", I = "hidestart", q = "transform", R = "iterate", U = "children", z = "_height", W = "transition", X = "skel-layers-css", V = null, $ = "hiddenWrapper", J = "scrollTop", K = "parent", Q = "length", G = ".skel-layers-fixed:not(.skel-layers-moved)", Y = !1, Z = "hideend", et = "showend", tt = "height", nt = "auto", rt = "deviceType", it = "resetForms", st = "unlockView", ot = "top", ut = "touchstart.lock click.lock scroll.lock", at = "skel-layers-handled", ft = "recalcW", lt = "element", ct = "hidden", ht = "_width", pt = !0, dt = '<div id="skel-layers-placeholder-', vt = "data", mt = "_skel_layers_uncss", gt = "_skel_layers_fadeOut", yt = "_skel_layers_recss", bt = "-webkit-", wt = "_skel_layers_fadeIn", Et = "100%", St = "blur", xt = "padding-bottom", Tt = "skel-layers-exclusiveVisible", Nt = "originalEvent", Ct = "easing", kt = "lockView", Lt = "useActive", At = "animation", Ot = "isInitialized", Mt = "-webkit-tap-highlight-color", _t = "skel-layers-layer-position", Dt = "z-index", Pt = "skel-layers-layer-index", Ht = "animations", Bt = "animate", jt = "#skel-layers-placeholder-", Ft = "skel_layers_hiddenWrapper", It = "_skel_layers_initializeCell", qt = "append", Rt = "resize.lock scroll.lock", Ut = "find", zt = "registerLocation", Wt = "hasClass", Xt = "undefined", Vt = "orientationchange.lock", $t = "positions", Jt = "breakpoints", Kt = "stopPropagation", Qt = "touchPosX", Gt = "touchPosY", Yt = "hide", Zt = "-moz-", en = "_skel_layers_expandCell", tn = "preventDefault", nn = "canUseProperty", rn = "_skel_layers_hasParent", sn = "backface-visibility", on = "attr", un = "events", an = "window", fn = "-webkit-transition", ln = "addClass", cn = "recalcH", hn = "visible", pn = "-ms-", dn = "absolute", vn = "none", mn = "-moz-transition", gn = "_skel_layers_xcss", yn = "-o-", bn = "-ms-transition", wn = "opacity", En = "removeClass", Sn = "rgba(0,0,0,0)", xn = "show", Tn = "-o-transition", Nn = "cell-size", Cn = "ios", kn = "object", Ln = "states", An = "getArray", On = "appendTo", Mn = "s ", _n = "perspective", Dn = "x", Pn = "mode", Hn = "fixed", Bn = "overflow-y", jn = "px", Fn = "-", In = "touches", qn = "isVisible", Rn = "*", Un = "side", zn = "opacity ", Wn = "relative", Xn = "body", Vn = "htmlbody", $n = "#", Jn = "html";
    t.registerPlugin(P, function (e) {
        function lr(e, t, r) {
            var i, s, o = this;
            this.id = e, this.index = r, this[un] = {}, this[n] = {
                breakpoints: V,
                states: V,
                position: V,
                side: V,
                animation: vn,
                orientation: vn,
                width: nt,
                height: nt,
                maxWidth: Et,
                maxHeight: Et,
                zIndex: this.index,
                html: "",
                hidden: Y,
                exclusive: V,
                resetScroll: pt,
                resetForms: pt,
                swipeToHide: pt,
                clickToHide: Y
            }, fr._.extend(this[n], t), this[n][w] === V && (this[n][w] = this[n][ct]), this[lt] = fr._.newDiv(this[n][Jn]), this[lt].id = e, this[lt]._layer = this, this[v] = V, this[Qt] = V, this[Gt] = V, this[hn] = Y, s = fr._.newElement(this.id, this[lt], Ft, 1), s.onAttach = function () {
                var e = this[kn]._layer;
                e[Ot]() || e.init(), e.resume()
            }, s.onDetach = function () {
                var e = this[kn]._layer;
                e.suspend()
            }, o[n][Ln] && o[n][Ln] != fr._.sd ? (fr._.cacheElement(s), i = fr._[An](o[n][Ln]), fr._[R](i, function (e) {
                fr._.addCachedElementToState(i[e], s)
            })) : o[n][Jt] ? (fr._.cacheElement(s), i = fr._[An](o[n][Jt]), fr._[R](i, function (e) {
                fr._.addCachedElementToBreakpoint(i[e], s)
            })) : fr._.attachElement(s)
        }

        var fr;
        return typeof e == Xt ? Y : (e.fn[d] = function () {
            var t, n;
            if (this[Q] > 1) {
                for (t = 0; t < this[Q]; t++)e(this[t])[d]();
                return e(this)
            }
            return n = e(this), n[x](Dt, n[vt](j))[vt](j, ""), n
        }, e.fn[en] = function () {
            var t = e(this), n = t[K](), r = 12;
            n[U]().each(function () {
                var t = e(this), n = t[on]("class");
                n && n.match(/(\s+|^)([0-9]+)u(\s+|$)/) && (r -= parseInt(RegExp.$2))
            }), r > 0 && (t[It](), t[x](L, (t[vt](Nn) + r) / 12 * 100 + "%"))
        }, e.fn[rn] = function () {
            return e(this).parents()[Q] > 0
        }, e.fn[It] = function () {
            var t = e(this);
            t[on]("class").match(/(\s+|^)([0-9]+)u(\s+|$)/) && t[vt](Nn, parseInt(RegExp.$2))
        }, e.fn[h] = function (t) {
            var r, i, s;
            if (this[Q] > 1) {
                for (r = 0; r < this[Q]; r++)e(this[r])[h](t);
                return e(this)
            }
            return i = e(this), isNaN(s = parseInt(i[vt](Pt))) && (s = 0), i[vt](j, i[x](Dt))[x](Dt, fr[n].baseZIndex + s + (t ? t : 1)), i
        }, e.fn[o] = function () {
            var t = e(this);
            return e(this)[Ut]("form").each(function () {
                this.reset()
            }), t
        }, e.fn[gn] = function (t, n) {
            return e(this)[x](t, n)[x](Zt + t, Zt + n)[x](bt + t, bt + n)[x](yn + t, yn + n)[x](pn + t, pn + n)
        }, e.fn._skel_layers_xcssProperty = function (t, n) {
            return e(this)[x](t, n)[x](Zt + t, n)[x](bt + t, n)[x](yn + t, n)[x](pn + t, n)
        }, e.fn._skel_layers_xcssValue = function (t, n) {
            return e(this)[x](t, n)[x](t, Zt + n)[x](t, bt + n)[x](t, yn + n)[x](t, pn + n)
        }, e.fn[mt] = function () {
            var n = e(this), r = n[vt](X), i = {};
            if (!r || n[vt](k))return n;
            t[R](r, function (e) {
                var t = n[x](r[e]);
                t && (i[r[e]] = t, n[x](r[e], ""))
            }), n[vt](k, i)
        }, e.fn[yt] = function () {
            var n = e(this), r = n[vt](k);
            if (!r)return n;
            t[R](r, function (e) {
                n[x](e, r[e])
            }), n.removeData(k)
        }, lr[C][Ht] = {
            none: {
                show: function (e) {
                    var t = e[n], r = e[v];
                    r[J](0)[h](t.zIndex)[xn](), t[it] && r[o](), t[w] && fr[kt](Dn), e[m](), e[u](F), e[u](et)
                }, hide: function (e) {
                    var t = e[n], r = e[v];
                    r[Ut](Rn)[u](St, [pt]), t[w] && fr[st](Dn), e[y](), r[d]()[Yt](), e[u](I), e[u](Z)
                }
            }, fade: {
                show: function (e) {
                    var t = e[n], r = e[v];
                    r[J](0)[h](t.zIndex)[x](wn, 0)[xn](), t[it] && r[o](), t[w] && fr[kt](Dn), e[m](), e[u](F), window[i](function () {
                        r[wt](function () {
                            e[u](et)
                        })
                    }, 50)
                }, hide: function (e) {
                    var t = e[n], r = e[v];
                    r[Ut](Rn)[u](St, [pt]), e[u](I), r[gt](function () {
                        t[w] && fr[st](Dn), e[y](), r[d]()[Yt](), e[u](Z)
                    })
                }
            }, overlayX: {
                show: function (e) {
                    var t = e[n], r = e[v];
                    r[J](0)[h](t.zIndex)[x](t[Un], Fn + fr[ft](t[ht]) + jn)[xn](), t[it] && r[o](), t[w] && fr[kt](Dn), e[m](), e[u](F), window[i](function () {
                        r[l]((t[Un] == T ? Fn : "") + fr[ft](t[ht]), 0), window[i](function () {
                            e[u](et)
                        }, fr[n][B])
                    }, 50)
                }, hide: function (e) {
                    var t = e[n], r = e[v];
                    r[Ut](Rn)[u](St, [pt]), e[u](I), r[s](), window[i](function () {
                        t[w] && fr[st](Dn), e[y](), r[d]()[Yt](), e[u](Z)
                    }, fr[n][B] + 50)
                }
            }, overlayY: {
                show: function (e) {
                    var t = e[n], r = e[v];
                    r[J](0)[h](t.zIndex)[x](t[Un], Fn + fr[ft](t[z]) + jn)[xn](), t[it] && r[o](), t[w] && fr[kt]("y"), e[m](), e[u](F), window[i](function () {
                        r[l](0, (t[Un] == N ? Fn : "") + fr[ft](t[z])), window[i](function () {
                            e[u](et)
                        }, fr[n][B])
                    }, 50)
                }, hide: function (e) {
                    var t = e[n], r = e[v];
                    r[Ut](Rn)[u](St, [pt]), e[u](I), r[s](), window[i](function () {
                        t[w] && fr[st]("y"), e[y](), r[d]()[Yt](), e[u](Z)
                    }, fr[n][B] + 50)
                }
            }, pushX: {
                show: function (e) {
                    var t = e[n], s = e[v], a = fr[r][H].add(fr[r][c][U]());
                    s[J](0)[x](t[Un], Fn + fr[ft](t[ht]) + jn)[xn](), t[it] && s[o](), a[h](), t[w] && fr[kt](Dn), e[m](), e[u](F), window[i](function () {
                        s.add(a)[l]((t[Un] == T ? Fn : "") + fr[ft](t[ht]), 0), window[i](function () {
                            e[u](et)
                        }, fr[n][B])
                    }, 50)
                }, hide: function (e) {
                    var t = e[n], o = e[v], a = fr[r][H].add(fr[r][c][U]());
                    o[Ut](Rn)[u](St, [pt]), e[u](I), o.add(a)[s](), window[i](function () {
                        t[w] && fr[st](Dn), o[Yt](), e[y](), a[d](), e[u](Z)
                    }, fr[n][B] + 50)
                }
            }, pushY: {
                show: function (e) {
                    var t = e[n], s = e[v], a = fr[r][H].add(fr[r][c][U]());
                    s[J](0)[x](t[Un], Fn + fr[cn](t[z]) + jn)[xn](), t[it] && s[o](), t[w] && fr[kt]("y"), e[m](), e[u](F), window[i](function () {
                        s.add(a)[l](0, (t[Un] == N ? Fn : "") + fr[cn](t[z])), window[i](function () {
                            e[u](et)
                        }, fr[n][B])
                    }, 50)
                }, hide: function (e) {
                    var t = e[n], o = e[v], a = fr[r][H].add(fr[r][c][U]());
                    o[Ut](Rn)[u](St, [pt]), e[u](I), o.add(a)[s](), window[i](function () {
                        t[w] && fr[st]("y"), o[Yt](), e[y](), e[u](Z)
                    }, fr[n][B] + 50)
                }
            }, revealX: {
                show: function (e) {
                    var t = e[n], s = e[v], a = fr[r][H].add(fr[r][c][U]());
                    s[J](0)[xn](), t[it] && s[o](), a[h](), t[w] && fr[kt](Dn), e[m](), e[u](F), window[i](function () {
                        a[l]((t[Un] == T ? Fn : "") + fr[ft](t[ht]), 0), window[i](function () {
                            e[u](et)
                        }, fr[n][B])
                    }, 50)
                }, hide: function (e) {
                    var t = e[n], o = e[v], a = fr[r][H].add(fr[r][c][U]());
                    o[Ut](Rn)[u](St, [pt]), e[u](I), a[s](), window[i](function () {
                        t[w] && fr[st](Dn), o[Yt](), a[d](), e[y](), e[u](Z)
                    }, fr[n][B] + 50)
                }
            }
        }, lr[C][$t] = {
            "top-left": {v: ot, h: M, side: M},
            "top-right": {v: ot, h: T, side: T},
            top: {v: ot, h: S, side: ot},
            "top-center": {v: ot, h: S, side: ot},
            "bottom-left": {v: N, h: M, side: M},
            "bottom-right": {v: N, h: T, side: T},
            bottom: {v: N, h: S, side: N},
            "bottom-center": {v: N, h: S, side: N},
            left: {v: S, h: M, side: M},
            "center-left": {v: S, h: M, side: M},
            right: {v: S, h: T, side: T},
            "center-right": {v: S, h: T, side: T},
            center: {v: S, h: S, side: Y},
            "center-center": {v: S, h: S, side: Y}
        }, lr[C].on = function (e, t) {
            this[un][e] || (this[un][e] = []), this[un][e].push(t)
        }, lr[C][u] = function (e) {
            var t;
            if (!this[un][e] || this[un][e][Q] == 0)return;
            t = this, fr._[R](this[un][e], function (n) {
                t[un][e][n]()
            })
        }, lr[C][xn] = function () {
            var e, t, s, o, a;
            if (this[hn]) {
                fr[r][c][qt](this[lt]);
                return
            }
            e = this, t = this[n], s = fr._[Lt](t[At]), o = this[v], o[x]("max-width", "")[x]("max-height", "")[x](L, "")[x](tt, ""), t[ht] = fr._[Lt](t[L]), t[z] = fr._[Lt](t[tt]), t[ht] == nt && (t[ht] = o.outerWidth() + 1), t[z] == nt && (t[z] = o.outerHeight() + 1);
            if (t.maxWidth != Et || t[L] == nt)t[ht] = fr[ft](t[ht]), t._maxWidth = fr[ft](fr._[Lt](t.maxWidth)), t[ht] = Math.min(t[ht], t._maxWidth);
            if (t.maxHeight != Et || t[tt] == nt)t[z] = fr[cn](t[z]), t._maxHeight = fr[cn](fr._[Lt](t.maxHeight)), t[z] = Math.min(t[z], t._maxHeight);
            o[x](L, t[ht])[x](tt, t[z]), fr._.vars[rt] == Cn && (t[z] == Et && !t[ct] && o[x](tt, "-webkit-calc(" + t[z] + " + 70px)"), o.on(St, "input,select,textarea", function (t, n) {
                if (n)return;
                window[i](function () {
                    fr[r][$][qt](e[lt]), window[i](function () {
                        fr[r][c][qt](e[lt])
                    }, 500)
                }, 500)
            })), a = this[$t][t[f]], o[ln]("skel-layer-" + t[f])[vt](_t, t[f]);
            switch (a.v) {
                case ot:
                    o[x](ot, 0);
                    break;
                case N:
                    o[x](N, 0);
                    break;
                case S:
                    o[x](ot, "50%")[x]("margin-top", Fn + fr.getHalf(t[z]))
            }
            switch (a.h) {
                case M:
                    o[x](M, 0);
                    break;
                case T:
                    o[x](T, 0);
                    break;
                case S:
                    o[x](M, "50%")[x]("margin-left", Fn + fr.getHalf(t[ht]))
            }
            this[Ht][s][xn](this), t[w] && (fr[r][Xn][ln](Tt), fr[r][b] = this), this[hn] = pt, this[u](xn)
        }, lr[C][Yt] = function () {
            var e, t;
            if (!this[hn]) {
                fr[r][$][qt](this[lt]);
                return
            }
            e = this[n], t = fr._[Lt](e[At]), t in this[Ht] || (t = vn), this[Ht][t][Yt](this), e[w] && fr[r][b] === this && (fr[r][Xn][En](Tt), fr[r][b] = V), this[u](Yt), this[hn] = Y
        }, lr[C].init = function () {
            var t = this[n], r = e(this[lt]), s = this;
            r[A](), r[Ut](Rn).each(function () {
                fr.parseInit(e(this))
            }), r[ln]("skel-layer")[vt](Pt, this.index)[x](Dt, fr[n].baseZIndex)[x](f, Hn)[x]("-ms-overflow-style", "-ms-autohiding-scrollbar")[x]("-webkit-overflow-scrolling", "touch")[Yt]();
            switch (t.orientation) {
                case"vertical":
                    r[x](Bn, nt)[x](D, ct);
                    break;
                case"horizontal":
                    r[x](D, nt)[x](Bn, ct);
                    break;
                case vn:
                default:
            }
            if (!t[f] || !(t[f]in this[$t]))t[f] = "top-left";
            t[Un] || (t[Un] = this[$t][t[f]][Un]);
            if (!t[At] || typeof t[At] !== kn && !(t[At]in this[Ht]))t[At] = vn;
            t.clickToHide && r[Ut]("a")[x](Mt, Sn).on("click.skel-layers", function (t) {
                var r, o, u = e(this);
                if (u[Wt]("skel-layers-ignore"))return;
                t[tn](), t[Kt](), s[Yt]();
                if (u[Wt]("skel-layers-ignoreHref"))return;
                r = u[on]("href"), o = u[on]("target"), typeof r !== Xt && r != "" && window[i](function () {
                    o == "_blank" && fr._.vars[rt] != "wp" ? window.open(r) : window.location.href = r
                }, fr[n][B] + 10)
            }), r.on("touchstart", function (e) {
                s[Qt] = e[Nt][In][0].pageX, s[Gt] = e[Nt][In][0].pageY
            }).on("touchmove", function (e) {
                var n, i, o, u, a, f, l;
                if (s[Qt] === V || s[Gt] === V)return;
                n = s[Qt] - e[Nt][In][0].pageX, i = s[Gt] - e[Nt][In][0].pageY, o = r.outerHeight(), u = r.get(0).scrollHeight - r[J]();
                if (t[ct] && t.swipeToHide) {
                    a = Y, f = 20, l = 50;
                    switch (t[Un]) {
                        case M:
                            a = i < f && i > -1 * f && n > l;
                            break;
                        case T:
                            a = i < f && i > -1 * f && n < -1 * l;
                            break;
                        case ot:
                            a = n < f && n > -1 * f && i > l;
                            break;
                        case N:
                            a = n < f && n > -1 * f && i < -1 * l
                    }
                    if (a)return s[Qt] = V, s[Gt] = V, s[Yt](), Y
                }
                if (r[J]() == 0 && i < 0 || u > o - 2 && u < o + 2 && i > 0)return Y
            }), this[v] = r
        }, lr[C][Ot] = function () {
            return this[v] !== V
        }, lr[C][qn] = function () {
            return this[v].is(":visible")
        }, lr[C][m] = function () {
            fr[r][c][qt](this[v])
        }, lr[C][y] = function () {
            if (!this[v][rn]())return;
            fr[r][$][qt](this[v])
        }, lr[C].resume = function (t) {
            if (!this[Ot]())return;
            this[v][Ut](Rn).each(function () {
                fr.parseResume(e(this))
            }), this[n][ct] || this[xn](t)
        }, lr[C].suspend = function () {
            if (!this[Ot]())return;
            this[v][s](), this[v][Ut](Rn).each(function () {
                fr.parseSuspend(e(this))
            }), this[hn] && this[Yt]()
        }, fr = {
            cache: {
                visibleWrapper: V,
                body: V,
                exclusiveLayer: V,
                document: V,
                html: V,
                htmlbody: V,
                hiddenWrapper: V,
                layers: {},
                parent: V,
                window: V,
                wrapper: V
            },
            config: {baseZIndex: 1e4, layers: {}, mode: f, speed: 500, easing: "ease", wrap: pt},
            layerIndex: 1,
            create: function (t, i, s) {
                var o, u;
                if (t in fr[r][P])return;
                if (f in i) {
                    if (!i[Jn] && (o = e($n + t))[Q] == 0)return;
                    return fr[n].wrap || (fr[n].wrap = pt, fr.initWrappers()), u = new lr(t, i, fr.layerIndex++), fr[r][P][t] = u, o && (o[U]()[On](u[lt]), o.remove()), s || fr._.updateState(), u
                }
                return
            },
            destroy: function (i) {
                if (i in fr[r][P]) {
                    var s = fr[r][P][i];
                    return s.suspend(), s[n][Ln] && s[n][Ln] != fr._.sd && (a = fr._[An](s[n][Ln]), fr._[R](a, function (e) {
                        fr._.removeCachedElementFromState(a[e], i)
                    })), s[n][Jt] && (a = fr._[An](s[n][Jt]), fr._[R](a, function (e) {
                        fr._.removeCachedElementFromBreakpoint(a[e], i)
                    })), e(s[lt]).remove(), delete fr[r][P][i], t.uncacheElement(i), pt
                }
                return
            },
            get: function (e) {
                if (e in fr[r][P])return fr[r][P][e];
                return
            },
            hide: function (e) {
                fr[r][P][e][Yt]()
            },
            show: function (e) {
                fr[r][P][e][xn]()
            },
            toggle: function (e) {
                var t = fr[r][P][e];
                t[qn]() ? t[Yt]() : t[xn]()
            },
            getBaseFontSize: function () {
                return fr._.vars.IEVersion < 9 ? 16.5 : parseFloat(getComputedStyle(fr[r][Xn].get(0)).fontSize)
            },
            getHalf: function (e) {
                var t = parseInt(e);
                return typeof e == "string" && e.charAt(e[Q] - 1) == "%" ? Math.floor(t / 2) + "%" : Math.floor(t / 2) + jn
            },
            lockView: function (e) {
                e == Dn && fr[r][Vn][x](D, ct), fr[n][Pn] != q && t.vars[rt] == Cn && fr[r][K][x](tt, fr[r].document[tt]()), fr[r][H].on(ut, function (e) {
                    e[tn](), e[Kt](), fr[r][b] && fr[r][b][Yt]()
                }), fr[r][an].on(Vt, function (e) {
                    fr[r][b] && fr[r][b][Yt]()
                }), fr._.vars.isMobile || window[i](function () {
                    fr[r][an].on(Rt, function (e) {
                        fr[r][b] && fr[r][b][Yt]()
                    })
                }, fr[n][B] + 50)
            },
            parseInit: function (t) {
                var n, s, o = t.get(0), u = t[on]("data-action"), a = t[on]("data-args"), f, l;
                u && a && (a = a.split(","));
                switch (u) {
                    case"toggleLayer":
                    case"layerToggle":
                        t[x](Mt, Sn)[x]("cursor", "pointer").on("touchend click", function (t) {
                            var n = e(this);
                            t[tn](), t[Kt]();
                            if (n[vt](at) === pt)return;
                            n[vt](at, pt), window[i](function () {
                                n.removeData(at)
                            }, 500);
                            if (fr[r][b])return fr[r][b][Yt](), Y;
                            var s = fr[r][P][a[0]];
                            s[qn]() ? s[Yt]() : s[xn]()
                        });
                        break;
                    case"navList":
                        f = e($n + a[0]), n = f[Ut]("a"), s = [], n.each(function () {
                            var t = e(this), n, r;
                            n = Math.max(0, t.parents("li")[Q] - 1), r = t[on]("href"), s.push('<a class="link depth-' + n + '"' + (typeof r !== Xt && r != "" ? ' href="' + r + '"' : "") + '><span class="indent-' + n + '"></span>' + t.text() + "</a>")
                        }), s[Q] > 0 && t[Jn]("<nav>" + s.join("") + "</nav>");
                        break;
                    case"copyText":
                        f = e($n + a[0]), t[Jn](f.text());
                        break;
                    case"copyHTML":
                        f = e($n + a[0]), t[Jn](f[Jn]());
                        break;
                    case"moveElementContents":
                        f = e($n + a[0]), o[g] = function () {
                            f[U]().each(function () {
                                var n = e(this);
                                if (n[Wt](p))return;
                                t[qt](n), n[ln](p), n[mt]()
                            })
                        }, o[O] = function () {
                            t[U]().each(function () {
                                var t = e(this);
                                if (!t[Wt](p))return;
                                f[qt](t), t[En](p), fr.refresh(t), t[yt]()
                            })
                        }, o[g]();
                        break;
                    case"moveElement":
                        f = e($n + a[0]), o[g] = function () {
                            if (f[Wt](p))return;
                            e(dt + f[on]("id") + '" />').insertBefore(f), t[qt](f), f[ln](p), f[mt]()
                        }, o[O] = function () {
                            if (!f[Wt](p))return;
                            e(jt + f[on]("id")).replaceWith(f), f[En](p), fr.refresh(f), f[yt]()
                        }, o[g]();
                        break;
                    case"moveCell":
                        f = e($n + a[0]), l = e($n + a[1]), o[g] = function () {
                            e(dt + f[on]("id") + '" />').insertBefore(f), t[qt](f), f[x](L, nt), l && l[en]()
                        }, o[O] = function () {
                            e(jt + f[on]("id")).replaceWith(f), f[x](L, ""), l && l[x](L, "")
                        }, o[g]();
                        break;
                    default:
                }
            },
            parseResume: function (e) {
                var t = e.get(0);
                t[g] && t[g]()
            },
            parseSuspend: function (e) {
                var t = e.get(0);
                t[O] && t[O]()
            },
            recalc: function (e, t) {
                var n = fr._.parseMeasurement(e), r;
                switch (n[1]) {
                    case"%":
                        r = Math.floor(t * (n[0] / 100));
                        break;
                    case"em":
                        r = fr.getBaseFontSize() * n[0];
                        break;
                    default:
                    case jn:
                        r = n[0]
                }
                return r
            },
            recalcH: function (t) {
                return fr.recalc(t, e(window)[tt]())
            },
            recalcW: function (t) {
                return fr.recalc(t, e(window)[L]())
            },
            refresh: function (t) {
                var n;
                t ? n = t.filter(G) : n = e(G), n[A](pt)[On](fr[r][c])
            },
            unlockView: function (e) {
                e == Dn && fr[r][Vn][x](D, ""), fr[n][Pn] != q && t.vars[rt] == Cn && fr[r][K][x](tt, ""), fr[r][H].off(ut), fr[r][an].off(Vt), fr._.vars.isMobile || fr[r][an].off(Rt)
            },
            init: function () {
                n in fr[n] && (fr._.extend(fr[n], fr[n][n]), delete fr[n][n]), fr._[R](fr[n], function (e) {
                    fr[n][e] && typeof fr[n][e] == kn && f in fr[n][e] && (fr[n][P][e] = fr[n][e], delete fr[n][e])
                }), typeof fr[n][Pn] == "function" && (fr[n][Pn] = fr[n][Pn]()), fr[n][Pn] == q && (!fr._[nn](q) || !fr._[nn](W)) && (fr[n][Pn] = f), fr[n][Pn] == f && !fr._[nn](W) && (fr[n][Pn] = Bt), fr._.vars[rt] == "wp" && (fr[n][Pn] = Bt), fr[r][an] = e(window), e(function () {
                    fr.initAnimation(), fr.initObjects(), fr[n].wrap && fr.initWrappers(), fr.initLayers(), fr.initIncludes(), fr._.updateState()
                })
            },
            initIncludes: function () {
                e(".skel-layers-include").each(function () {
                    fr.parseInit(e(this))
                })
            },
            initLayers: function () {
                fr._[R](fr[n][P], function (e) {
                    fr.create(e, fr[n][P][e], pt)
                })
            },
            initObjects: function () {
                fr[r].document = e(document), fr[r][Jn] = e(Jn), fr[r][Xn] = e(Xn), fr[r][Vn] = e("html,body")
            },
            initAnimation: function () {
                fr[n][Pn] == Bt ? (e.fn[wt] = function (t) {
                    e(this).fadeTo(fr[n][B], 1, t)
                }, e.fn[gt] = function (t) {
                    e(this).fadeTo(fr[n][B], 0, t)
                }) : (e.fn[wt] = function (t) {
                    e(this)[x](wn, 1), t && window[i](t, fr[n][B] + 50)
                }, e.fn[gt] = function (t) {
                    e(this)[x](wn, 0), t && window[i](t, fr[n][B] + 50)
                });
                if (fr[n][Pn] == q)e.fn[s] = function () {
                    return e(this)[l](0, 0)
                }, e.fn[l] = function (t, n) {
                    return e(this)[x](q, "translate(" + t + "px, " + n + "px)")
                }, e.fn[A] = function () {
                    return e(this)[x](sn, ct)[x](_n, "500")[gn](W, "transform " + fr[n][B] / 1e3 + Mn + fr[n][Ct] + "," + zn + fr[n][B] / 1e3 + Mn + fr[n][Ct])[vt](X, [sn, _n, mn, fn, Tn, bn, W])
                }; else {
                    var o = [];
                    fr[n][Pn] == Bt ? (fr[r][an].resize(function () {
                        if (fr[n][B] != 0) {
                            var e = fr[n][B];
                            fr[n][B] = 0, window[i](function () {
                                fr[n][B] = e, o = []
                            }, 0)
                        }
                    }), fr[n][Ct].substr(0, 4) == "ease" ? (fr[n][Ct] = "swing", fr[n][B] = fr[n][B] * .65) : fr[n][Ct] = "linear", e.fn[_] = function (t, r) {
                        e(this)[Bt](t, fr[n][B], fr[n][Ct], r)
                    }, e.fn[A] = function (t) {
                        return e(this)[x](f, t ? Hn : dn)[vt](X, [f])
                    }) : (fr[r][an].resize(function () {
                        window[i](function () {
                            o = []
                        }, 0)
                    }), e.fn[_] = function (t, r) {
                        var s = e(this);
                        fr._[R](t, function (e) {
                            s[x](e, t[e])
                        }), window[i](r, fr[n][B])
                    }, e.fn[A] = function (t) {
                        return e(this)[x](W, "top " + fr[n][B] / 1e3 + Mn + fr[n][Ct] + "," + "right " + fr[n][B] / 1e3 + Mn + fr[n][Ct] + "," + "bottom " + fr[n][B] / 1e3 + Mn + fr[n][Ct] + "," + "left " + fr[n][B] / 1e3 + Mn + fr[n][Ct] + "," + zn + fr[n][B] / 1e3 + Mn + fr[n][Ct])[x](f, t ? Hn : dn)[vt](X, [mn, fn, Tn, bn, W, f])
                    }), e[E] = function (e) {
                        return e && e.slice(-1) == "%" ? e : parseInt(e)
                    }, e.fn[s] = function () {
                        for (var t = 0; t < this[Q]; t++) {
                            var n = this[t], i = e(n);
                            o[n.id] && i[_](o[n.id], function () {
                                fr._[R](o[n.id], function (e) {
                                    i[x](e, o[n.id][e])
                                }), fr[r][K][x](D, ""), fr[r][H][x](L, nt)[x](xt, 0)
                            })
                        }
                        return e(this)
                    }, e.fn[l] = function (n, i) {
                        var s, u, l, c;
                        n = parseInt(n), i = parseInt(i), n != 0 ? ((t.vars[rt] == Cn ? fr[r][K] : fr[r][Xn])[x](D, ct), fr[r][H][x](L, fr[r][an][L]())) : l = function () {
                            (t.vars[rt] == Cn ? fr[r][K] : fr[r][Xn])[x](D, ""), fr[r][H][x](L, nt)
                        }, i < 0 ? fr[r][H][x](xt, Math.abs(i)) : c = function () {
                            fr[r][H][x](xt, 0)
                        };
                        for (s = 0; s < this[Q]; s++) {
                            var h = this[s], p = e(h), d;
                            if (!o[h.id])if (d = lr[C][$t][p[vt](_t)]) {
                                o[h.id] = {};
                                switch (d.v) {
                                    case S:
                                    case ot:
                                        o[h.id][ot] = e[E](h.style[ot]);
                                        break;
                                    case N:
                                        o[h.id][N] = e[E](h.style[N])
                                }
                                switch (d.h) {
                                    case S:
                                    case M:
                                        o[h.id][M] = e[E](h.style[M]);
                                        break;
                                    case T:
                                        o[h.id][T] = e[E](h.style[T])
                                }
                            } else d = p[f](), o[h.id] = {top: d[ot], left: d[M]};
                            a = {}, fr._[R](o[h.id], function (e) {
                                var t;
                                switch (e) {
                                    case ot:
                                        t = fr[cn](o[h.id][e]) + i;
                                        break;
                                    case N:
                                        t = fr[cn](o[h.id][e]) - i;
                                        break;
                                    case M:
                                        t = fr[ft](o[h.id][e]) + n;
                                        break;
                                    case T:
                                        t = fr[ft](o[h.id][e]) - n
                                }
                                a[e] = t
                            }), p[_](a, function () {
                                l && l(), c && c()
                            })
                        }
                        return e(this)
                    }
                }
            },
            initWrappers: function () {
                fr[n][Pn] != q ? (fr[r][Xn].wrapInner('<div id="skel-layers-parent" />'), fr[r][K] = e("#skel-layers-parent"), fr[r][K][x](f, dn)[x](M, 0)[x](ot, 0)[x]("min-height", Et)[x](L, Et)) : fr[r][K] = fr[r][Xn], fr[r][K].wrapInner('<div id="skel-layers-wrapper" />'), fr[r][H] = e("#skel-layers-wrapper"), fr[r][H][x](f, Wn)[x](M, 0)[x](T, 0)[x](ot, 0)[A](), fr[r][$] = e('<div id="skel-layers-hiddenWrapper" />')[On](fr[r][K]), fr[r][$][x](tt, Et), fr[r][c] = e('<div id="skel-layers-visibleWrapper" />')[On](fr[r][K]), fr[r][c][x](f, Wn), fr._[zt](Ft, fr[r][$][0]), fr._[zt]("skel_layers_visibleWrapper", fr[r][c][0]), fr._[zt]("skel_layers_wrapper", fr[r][H][0]), e("[autofocus]").focus(), fr.refresh()
            }
        }, fr)
    }(jQuery))
});
