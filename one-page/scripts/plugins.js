function sm_format_twitter(e) {
    for (var t = [], i = 0; i < e.length; i++) {
        var n = e[i].user.screen_name, r = e[i].user.name, s = e[i].user.profile_image_url,
            a = e[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (e) {
                return '<a href="' + e + '" target="_blank">' + e + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function (e) {
                return e.charAt(0) + '<a href="https://twitter.com/' + e.substring(1) + '" target="_blank">' + e.substring(1) + "</a>"
            });
        t.push('<li><i class="icon-twitter"></i><a href="https://twitter.com/' + n + '" class="twitter-avatar" target="_blank"><img src="' + s + '" alt="' + r + '" title="' + r + '"></a><span>' + a + '</span><small><a href="https://twitter.com/' + n + "/statuses/" + e[i].id_str + '" target="_blank">' + relative_time(e[i].created_at) + "</a></small></li>")
    }
    return t.join("")
}

function sm_format_twitter2(e) {
    for (var t = [], i = 0; i < e.length; i++) {
        var n = e[i].user.screen_name,
            r = e[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (e) {
                return '<a href="' + e + '" target="_blank">' + e + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function (e) {
                return e.charAt(0) + '<a href="https://twitter.com/' + e.substring(1) + '" target="_blank">' + e.substring(1) + "</a>"
            });
        t.push('<div class="slide"><span>' + r + '</span><small><a href="https://twitter.com/' + n + "/statuses/" + e[i].id_str + '" target="_blank">' + relative_time(e[i].created_at) + "</a></small></div>")
    }
    return t.join("")
}

function sm_format_twitter3(e) {
    for (var t = [], i = 0; i < e.length; i++) {
        var n = e[i].user.screen_name,
            r = e[i].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function (e) {
                return '<a href="' + e + '" target="_blank">' + e + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function (e) {
                return e.charAt(0) + '<a href="https://twitter.com/' + e.substring(1) + '" target="_blank">' + e.substring(1) + "</a>"
            });
        t.push('<div class="slide"><div class="testi-content"><p>' + r + '</p><div class="testi-meta"><span><a href="https://twitter.com/' + n + "/statuses/" + e[i].id_str + '" target="_blank">' + relative_time(e[i].created_at) + "</a></span></div></div></div>")
    }
    return t.join("")
}

function relative_time(e) {
    var t = e.split(" ");
    e = t[1] + " " + t[2] + ", " + t[5] + " " + t[3];
    var i = Date.parse(e), n = arguments.length > 1 ? arguments[1] : new Date, r = parseInt((n.getTime() - i) / 1e3);
    return r += 60 * n.getTimezoneOffset(), 60 > r ? "less than a minute ago" : 120 > r ? "about a minute ago" : 3600 > r ? parseInt(r / 60).toString() + " minutes ago" : 7200 > r ? "about an hour ago" : 86400 > r ? "about " + parseInt(r / 3600).toString() + " hours ago" : 172800 > r ? "1 day ago" : parseInt(r / 86400).toString() + " days ago"
}

function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}

function uncamel(e) {
    return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase()
    })
}

function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}

function setFilter(e, t, i) {
    var n = uncamel(t), r = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[r + "filter"] = e[r + "filter"] || "", i = setUnit(i > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : i, jQuery.CSS.filters[t].unit), e[r + "filter"] += n + "(" + i + ") ", delete e[t]
}

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints, t = "ontouchstart" in document.createElement("div");
    return !(!e && !t)
}

function isTouchSupported() {
    var e = nAgt.msMaxTouchPoints, t = "ontouchstart" in document.createElement("div");
    return !(!e && !t)
}

jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
    def: "easeOutQuad",
    swing: function (e, t, i, n, r) {
        return jQuery.easing[jQuery.easing.def](e, t, i, n, r)
    },
    easeInQuad: function (e, t, i, n, r) {
        return n * (t /= r) * t + i
    },
    easeOutQuad: function (e, t, i, n, r) {
        return -n * (t /= r) * (t - 2) + i
    },
    easeInOutQuad: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
    },
    easeInCubic: function (e, t, i, n, r) {
        return n * (t /= r) * t * t + i
    },
    easeOutCubic: function (e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t + 1) + i
    },
    easeInOutCubic: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t + i : n / 2 * ((t -= 2) * t * t + 2) + i
    },
    easeInQuart: function (e, t, i, n, r) {
        return n * (t /= r) * t * t * t + i
    },
    easeOutQuart: function (e, t, i, n, r) {
        return -n * ((t = t / r - 1) * t * t * t - 1) + i
    },
    easeInOutQuart: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t + i : -n / 2 * ((t -= 2) * t * t * t - 2) + i
    },
    easeInQuint: function (e, t, i, n, r) {
        return n * (t /= r) * t * t * t * t + i
    },
    easeOutQuint: function (e, t, i, n, r) {
        return n * ((t = t / r - 1) * t * t * t * t + 1) + i
    },
    easeInOutQuint: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? n / 2 * t * t * t * t * t + i : n / 2 * ((t -= 2) * t * t * t * t + 2) + i
    },
    easeInSine: function (e, t, i, n, r) {
        return -n * Math.cos(t / r * (Math.PI / 2)) + n + i
    },
    easeOutSine: function (e, t, i, n, r) {
        return n * Math.sin(t / r * (Math.PI / 2)) + i
    },
    easeInOutSine: function (e, t, i, n, r) {
        return -n / 2 * (Math.cos(Math.PI * t / r) - 1) + i
    },
    easeInExpo: function (e, t, i, n, r) {
        return 0 == t ? i : n * Math.pow(2, 10 * (t / r - 1)) + i
    },
    easeOutExpo: function (e, t, i, n, r) {
        return t == r ? i + n : n * (-Math.pow(2, -10 * t / r) + 1) + i
    },
    easeInOutExpo: function (e, t, i, n, r) {
        return 0 == t ? i : t == r ? i + n : (t /= r / 2) < 1 ? n / 2 * Math.pow(2, 10 * (t - 1)) + i : n / 2 * (-Math.pow(2, -10 * --t) + 2) + i
    },
    easeInCirc: function (e, t, i, n, r) {
        return -n * (Math.sqrt(1 - (t /= r) * t) - 1) + i
    },
    easeOutCirc: function (e, t, i, n, r) {
        return n * Math.sqrt(1 - (t = t / r - 1) * t) + i
    },
    easeInOutCirc: function (e, t, i, n, r) {
        return (t /= r / 2) < 1 ? -n / 2 * (Math.sqrt(1 - t * t) - 1) + i : n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i
    },
    easeInElastic: function (e, t, i, n, r) {
        var s = 1.70158, a = 0, o = n;
        if (0 == t) return i;
        if (1 == (t /= r)) return i + n;
        if (a || (a = .3 * r), o < Math.abs(n)) {
            o = n;
            var s = a / 4
        } else var s = a / (2 * Math.PI) * Math.asin(n / o);
        return -(o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / a)) + i
    },
    easeOutElastic: function (e, t, i, n, r) {
        var s = 1.70158, a = 0, o = n;
        if (0 == t) return i;
        if (1 == (t /= r)) return i + n;
        if (a || (a = .3 * r), o < Math.abs(n)) {
            o = n;
            var s = a / 4
        } else var s = a / (2 * Math.PI) * Math.asin(n / o);
        return o * Math.pow(2, -10 * t) * Math.sin((t * r - s) * (2 * Math.PI) / a) + n + i
    },
    easeInOutElastic: function (e, t, i, n, r) {
        var s = 1.70158, a = 0, o = n;
        if (0 == t) return i;
        if (2 == (t /= r / 2)) return i + n;
        if (a || (a = r * (.3 * 1.5)), o < Math.abs(n)) {
            o = n;
            var s = a / 4
        } else var s = a / (2 * Math.PI) * Math.asin(n / o);
        return 1 > t ? -.5 * (o * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / a)) + i : o * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - s) * (2 * Math.PI) / a) * .5 + n + i
    },
    easeInBack: function (e, t, i, n, r, s) {
        return void 0 == s && (s = 1.70158), n * (t /= r) * t * ((s + 1) * t - s) + i
    },
    easeOutBack: function (e, t, i, n, r, s) {
        return void 0 == s && (s = 1.70158), n * ((t = t / r - 1) * t * ((s + 1) * t + s) + 1) + i
    },
    easeInOutBack: function (e, t, i, n, r, s) {
        return void 0 == s && (s = 1.70158), (t /= r / 2) < 1 ? n / 2 * (t * t * (((s *= 1.525) + 1) * t - s)) + i : n / 2 * ((t -= 2) * t * (((s *= 1.525) + 1) * t + s) + 2) + i
    },
    easeInBounce: function (e, t, i, n, r) {
        return n - jQuery.easing.easeOutBounce(e, r - t, 0, n, r) + i
    },
    easeOutBounce: function (e, t, i, n, r) {
        return (t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i : 2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i : 2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i : n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i
    },
    easeInOutBounce: function (e, t, i, n, r) {
        return r / 2 > t ? .5 * jQuery.easing.easeInBounce(e, 2 * t, 0, n, r) + i : .5 * jQuery.easing.easeOutBounce(e, 2 * t - r, 0, n, r) + .5 * n + i
    }
}), !function (e) {
    "use strict";
    e.fn.fitVids = function (t) {
        var i = {customSelector: null, ignore: null};
        if (!document.getElementById("fit-vids-style")) {
            var n = document.head || document.getElementsByTagName("head")[0],
                r = ".fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}",
                s = document.createElement("div");
            s.innerHTML = '<p>x</p><style id="fit-vids-style">' + r + "</style>", n.appendChild(s.childNodes[1])
        }
        return t && e.extend(i, t), this.each(function () {
            var t = ['iframe[src*="player.vimeo.com"]', 'iframe[src*="youtube.com"]', 'iframe[src*="youtube-nocookie.com"]', 'iframe[src*="kickstarter.com"][src*="video.html"]', "object", "embed"];
            i.customSelector && t.push(i.customSelector);
            var n = ".fitvidsignore";
            i.ignore && (n = n + ", " + i.ignore);
            var r = e(this).find(t.join(","));
            r = r.not("object object"), r = r.not(n), r.each(function (t) {
                var i = e(this);
                if (!(i.parents(n).length > 0 || "embed" === this.tagName.toLowerCase() && i.parent("object").length || i.parent(".fluid-width-video-wrapper").length)) {
                    i.css("height") || i.css("width") || !isNaN(i.attr("height")) && !isNaN(i.attr("width")) || (i.attr("height", 9), i.attr("width", 16));
                    var r = "object" === this.tagName.toLowerCase() || i.attr("height") && !isNaN(parseInt(i.attr("height"), 10)) ? parseInt(i.attr("height"), 10) : i.height(),
                        s = isNaN(parseInt(i.attr("width"), 10)) ? i.width() : parseInt(i.attr("width"), 10), a = r / s;
                    if (!i.attr("id")) {
                        var o = "fitvid" + t;
                        i.attr("id", o)
                    }
                    i.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * a + "%"), i.removeAttr("height").removeAttr("width")
                }
            })
        })
    }
}(window.jQuery || window.Zepto), !function (e, t) {
    "use strict";
    var i = function () {
        var i = {
            bcClass: "sf-breadcrumb",
            menuClass: "sf-js-enabled",
            anchorClass: "sf-with-ul",
            menuArrowClass: "sf-arrows"
        }, n = function () {
            var t = /^(?![\w\W]*Windows Phone)[\w\W]*(iPhone|iPad|iPod)/i.test(navigator.userAgent);
            return t && e("html").css("cursor", "pointer").on("click", e.noop), t
        }(), r = function () {
            var e = document.documentElement.style;
            return "behavior" in e && "fill" in e && /iemobile/i.test(navigator.userAgent)
        }(), s = function () {
            return !!t.PointerEvent
        }(), a = function (e, t, n) {
            var r, s = i.menuClass;
            t.cssArrows && (s += " " + i.menuArrowClass), r = n ? "addClass" : "removeClass", e[r](s)
        }, o = function (t, n) {
            return t.find("li." + n.pathClass).slice(0, n.pathLevels).addClass(n.hoverClass + " " + i.bcClass).filter(function () {
                return e(this).children(n.popUpSelector).hide().show().length
            }).removeClass(n.pathClass)
        }, l = function (e, t) {
            var n = t ? "addClass" : "removeClass";
            e.children("a")[n](i.anchorClass)
        }, u = function (e) {
            var t = e.css("ms-touch-action"), i = e.css("touch-action");
            i = i || t, i = "pan-y" === i ? "auto" : "pan-y", e.css({"ms-touch-action": i, "touch-action": i})
        }, c = function (e) {
            return e.closest("." + i.menuClass)
        }, d = function (e) {
            return c(e).data("sfOptions")
        }, h = function () {
            var t = e(this), i = d(t);
            clearTimeout(i.sfTimer), t.siblings().superfish("hide").end().superfish("show")
        }, p = function (t) {
            t.retainPath = e.inArray(this[0], t.$path) > -1, this.superfish("hide"), this.parents("." + t.hoverClass).length || (t.onIdle.call(c(this)), t.$path.length && e.proxy(h, t.$path)())
        }, f = function () {
            var t = e(this), i = d(t);
            n ? e.proxy(p, t, i)() : (clearTimeout(i.sfTimer), i.sfTimer = setTimeout(e.proxy(p, t, i), i.delay))
        }, m = function (t) {
            var i = e(this), n = d(i), r = i.siblings(t.data.popUpSelector);
            return n.onHandleTouch.call(r) === !1 ? this : void(r.length > 0 && r.is(":hidden") && (i.one("click.superfish", !1), "MSPointerDown" === t.type || "pointerdown" === t.type ? i.trigger("focus") : e.proxy(h, i.parent("li"))()))
        }, g = function (t, i) {
            var a = "li:has(" + i.popUpSelector + ")";
            e.fn.hoverIntent && !i.disableHI ? t.hoverIntent(h, f, a) : t.on("mouseenter.superfish", a, h).on("mouseleave.superfish", a, f);
            var o = "MSPointerDown.superfish";
            s && (o = "pointerdown.superfish"), n || (o += " touchend.superfish"), r && (o += " mousedown.superfish"), t.on("focusin.superfish", "li", h).on("focusout.superfish", "li", f).on(o, "a", i, m)
        };
        return {
            hide: function (t) {
                if (this.length) {
                    var i = this, n = d(i);
                    if (!n) return this;
                    var r = n.retainPath === !0 ? n.$path : "",
                        s = i.find("li." + n.hoverClass).add(this).not(r).removeClass(n.hoverClass).children(n.popUpSelector),
                        a = n.speedOut;
                    if (t && (s.show(), a = 0), n.retainPath = !1, n.onBeforeHide.call(s) === !1) return this;
                    s.stop(!0, !0).animate(n.animationOut, a, function () {
                        var t = e(this);
                        n.onHide.call(t)
                    })
                }
                return this
            }, show: function () {
                var e = d(this);
                if (!e) return this;
                var t = this.addClass(e.hoverClass), i = t.children(e.popUpSelector);
                return e.onBeforeShow.call(i) === !1 ? this : (i.stop(!0, !0).animate(e.animation, e.speed, function () {
                    e.onShow.call(i)
                }), this)
            }, destroy: function () {
                return this.each(function () {
                    var t, n = e(this), r = n.data("sfOptions");
                    return r ? (t = n.find(r.popUpSelector).parent("li"), clearTimeout(r.sfTimer), a(n, r), l(t), u(n), n.off(".superfish").off(".hoverIntent"), t.children(r.popUpSelector).attr("style", function (e, t) {
                        return t.replace(/display[^;]+;?/g, "")
                    }), r.$path.removeClass(r.hoverClass + " " + i.bcClass).addClass(r.pathClass), n.find("." + r.hoverClass).removeClass(r.hoverClass), r.onDestroy.call(n), void n.removeData("sfOptions")) : !1
                })
            }, init: function (t) {
                return this.each(function () {
                    var n = e(this);
                    if (n.data("sfOptions")) return !1;
                    var r = e.extend({}, e.fn.superfish.defaults, t), s = n.find(r.popUpSelector).parent("li");
                    r.$path = o(n, r), n.data("sfOptions", r), a(n, r, !0), l(s, !0), u(n), g(n, r), s.not("." + i.bcClass).superfish("hide", !0), r.onInit.call(this)
                })
            }
        }
    }();
    e.fn.superfish = function (t, n) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? e.error("Method " + t + " does not exist on jQuery.fn.superfish") : i.init.apply(this, arguments)
    }, e.fn.superfish.defaults = {
        popUpSelector: "ul,.sf-mega",
        hoverClass: "sfHover",
        pathClass: "overrideThisToUse",
        pathLevels: 1,
        delay: 800,
        animation: {opacity: "show"},
        animationOut: {opacity: "hide"},
        speed: "normal",
        speedOut: "fast",
        cssArrows: !0,
        disableHI: !1,
        onInit: e.noop,
        onBeforeShow: e.noop,
        onShow: e.noop,
        onBeforeHide: e.noop,
        onHide: e.noop,
        onIdle: e.noop,
        onDestroy: e.noop,
        onHandleTouch: e.noop
    }
}(jQuery, window), !function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : jQuery && !jQuery.fn.hoverIntent && e(jQuery)
}(function (e) {
    "use strict";
    var t, i, n = {interval: 100, sensitivity: 6, timeout: 0}, r = 0, s = function (e) {
        t = e.pageX, i = e.pageY
    }, a = function (e, n, r, o) {
        return Math.sqrt((r.pX - t) * (r.pX - t) + (r.pY - i) * (r.pY - i)) < o.sensitivity ? (n.off(r.event, s), delete r.timeoutId, r.isActive = !0, e.pageX = t, e.pageY = i, delete r.pX, delete r.pY, o.over.apply(n[0], [e])) : (r.pX = t, r.pY = i, r.timeoutId = setTimeout(function () {
            a(e, n, r, o)
        }, o.interval), void 0)
    }, o = function (e, t, i, n) {
        return delete t.data("hoverIntent")[i.id], n.apply(t[0], [e])
    };
    e.fn.hoverIntent = function (t, i, l) {
        var u = r++, c = e.extend({}, n);
        e.isPlainObject(t) ? (c = e.extend(c, t), e.isFunction(c.out) || (c.out = c.over)) : c = e.isFunction(i) ? e.extend(c, {
            over: t,
            out: i,
            selector: l
        }) : e.extend(c, {over: t, out: t, selector: i});
        var d = function (t) {
            var i = e.extend({}, t), n = e(this), r = n.data("hoverIntent");
            r || n.data("hoverIntent", r = {});
            var l = r[u];
            l || (r[u] = l = {id: u}), l.timeoutId && (l.timeoutId = clearTimeout(l.timeoutId));
            var d = l.event = "mousemove.hoverIntent.hoverIntent" + u;
            if ("mouseenter" === t.type) {
                if (l.isActive) return;
                l.pX = i.pageX, l.pY = i.pageY, n.off(d, s).on(d, s), l.timeoutId = setTimeout(function () {
                    a(i, n, l, c)
                }, c.interval)
            } else {
                if (!l.isActive) return;
                n.off(d, s), l.timeoutId = setTimeout(function () {
                    o(i, n, l, c.out)
                }, c.timeout)
            }
        };
        return this.on({"mouseenter.hoverIntent": d, "mouseleave.hoverIntent": d}, c.selector)
    }
}), !function (e, t, i) {
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = i : (e[t] = i, "function" == typeof define && define.amd && define(t, [], function () {
        return i
    }))
}(this, "jRespond", function (e, t, i) {
    "use strict";
    return function (e) {
        var t = [], n = [], r = e, s = "", a = "", o = 0, l = 100, u = 500, c = u, d = function () {
            var e = 0;
            return e = "number" != typeof window.innerWidth ? 0 !== document.documentElement.clientWidth ? document.documentElement.clientWidth : document.body.clientWidth : window.innerWidth
        }, h = function (e) {
            if (e.length === i) p(e); else for (var t = 0; t < e.length; t++) p(e[t])
        }, p = function (e) {
            var r = e.breakpoint, o = e.enter || i;
            t.push(e), n.push(!1), g(r) && (o !== i && o.call(null, {entering: s, exiting: a}), n[t.length - 1] = !0)
        }, f = function () {
            for (var e = [], r = [], o = 0; o < t.length; o++) {
                var l = t[o].breakpoint, u = t[o].enter || i, c = t[o].exit || i;
                "*" === l ? (u !== i && e.push(u), c !== i && r.push(c)) : g(l) ? (u === i || n[o] || e.push(u), n[o] = !0) : (c !== i && n[o] && r.push(c), n[o] = !1)
            }
            for (var d = {entering: s, exiting: a}, h = 0; h < r.length; h++) r[h].call(null, d);
            for (var p = 0; p < e.length; p++) e[p].call(null, d)
        }, m = function (e) {
            for (var t = !1, i = 0; i < r.length; i++) if (e >= r[i].enter && e <= r[i].exit) {
                t = !0;
                break
            }
            t && s !== r[i].label ? (a = s, s = r[i].label, f()) : t || "" === s || (s = "", f())
        }, g = function (e) {
            if ("object" == typeof e) {
                if (e.join().indexOf(s) >= 0) return !0
            } else {
                if ("*" === e) return !0;
                if ("string" == typeof e && s === e) return !0
            }
        }, v = function () {
            var e = d();
            e !== o ? (c = l, m(e)) : c = u, o = e, setTimeout(v, c)
        };
        return v(), {
            addFunc: function (e) {
                h(e)
            }, getBreakpoint: function () {
                return s
            }
        }
    }
}(this, this.document)), !function (e) {
    var t = 0;
    e.fn.scrolled = function (i, n) {
        "function" == typeof i && (n = i, i = 300);
        var r = "scrollTimer" + t++;
        this.scroll(function () {
            var t = e(this), s = t.data(r);
            s && clearTimeout(s), s = setTimeout(function () {
                t.removeData(r), n.call(t[0])
            }, i), t.data(r, s)
        })
    }
}(jQuery), !function (e) {
    e.fn.jflickrfeed = function (t, i) {
        t = e.extend(!0, {
            flickrbase: "https://api.flickr.com/services/feeds/",
            feedapi: "photos_public.gne",
            limit: 20,
            qstrings: {lang: "en-us", format: "json", jsoncallback: "?"},
            cleanDescription: !0,
            useTemplate: !0,
            itemTemplate: "",
            itemCallback: function () {
            }
        }, t);
        var n, r = t.flickrbase + t.feedapi + "?", s = !0;
        for (n in t.qstrings) s || (r += "&"), r += n + "=" + t.qstrings[n], s = !1;
        return e(this).each(function () {
            var n = e(this), s = this;
            e.getJSON(r, function (r) {
                e.each(r.items, function (e, i) {
                    var r, a, o, l;
                    if (e < t.limit) {
                        if (t.cleanDescription && (r = /<p>(.*?)<\/p>/g, a = i.description, r.test(a) && (i.description = a.match(r)[2], void 0 !== i.description && (i.description = i.description.replace("<p>", "").replace("</p>", "")))), i.image_s = i.media.m.replace("_m", "_s"), i.image_t = i.media.m.replace("_m", "_t"), i.image_m = i.media.m.replace("_m", "_m"), i.image = i.media.m.replace("_m", ""), i.image_b = i.media.m.replace("_m", "_b"), i.image_q = i.media.m.replace("_m", "_q"), delete i.media, t.useTemplate) {
                            l = t.itemTemplate;
                            for (o in i) r = new RegExp("{{" + o + "}}", "g"), l = l.replace(r, i[o]);
                            n.append(l)
                        }
                        t.itemCallback.call(s, i)
                    }
                }), e.isFunction(i) && i.call(s, r)
            })
        })
    }
}(jQuery), function () {
    var e;
    e = function () {
        function e(e, t) {
            var i, n;
            if (this.options = {
                    target: "instafeed",
                    get: "popular",
                    resolution: "thumbnail",
                    sortBy: "none",
                    links: !0,
                    mock: !1,
                    useHttp: !1
                }, "object" == typeof e) for (i in e) n = e[i], this.options[i] = n;
            this.context = null != t ? t : this, this.unique = this._genKey()
        }

        return e.prototype.hasNext = function () {
            return "string" == typeof this.context.nextUrl && this.context.nextUrl.length > 0
        }, e.prototype.next = function () {
            return this.hasNext() ? this.run(this.context.nextUrl) : !1
        }, e.prototype.run = function (t) {
            var i, n, r;
            if ("string" != typeof this.options.clientId && "string" != typeof this.options.accessToken) throw new Error("Missing clientId or accessToken.");
            if ("string" != typeof this.options.accessToken && "string" != typeof this.options.clientId) throw new Error("Missing clientId or accessToken.");
            return null != this.options.before && "function" == typeof this.options.before && this.options.before.call(this), "undefined" != typeof document && null !== document && (r = document.createElement("script"), r.id = "instafeed-fetcher", r.src = t || this._buildUrl(), i = document.getElementsByTagName("head"), i[0].appendChild(r), n = "instafeedCache" + this.unique, window[n] = new e(this.options, this), window[n].unique = this.unique), !0
        }, e.prototype.parse = function (e) {
            var t, i, n, r, s, a, o, l, u, c, d, h, p, f, m, g, v, y, b, w, _, T, x, C, S, E, P, I, k, j, A, D, M;
            if ("object" != typeof e) {
                if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "Invalid JSON data"), !1;
                throw new Error("Invalid JSON response")
            }
            if (200 !== e.meta.code) {
                if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, e.meta.error_message), !1;
                throw new Error("Error from Instagram: " + e.meta.error_message)
            }
            if (0 === e.data.length) {
                if (null != this.options.error && "function" == typeof this.options.error) return this.options.error.call(this, "No images were returned from Instagram"), !1;
                throw new Error("No images were returned from Instagram")
            }
            if (null != this.options.success && "function" == typeof this.options.success && this.options.success.call(this, e), this.context.nextUrl = "", null != e.pagination && (this.context.nextUrl = e.pagination.next_url), "none" !== this.options.sortBy) switch (A = "random" === this.options.sortBy ? ["", "random"] : this.options.sortBy.split("-"), j = "least" === A[0] ? !0 : !1, A[1]) {
                case"random":
                    e.data.sort(function () {
                        return .5 - Math.random()
                    });
                    break;
                case"recent":
                    e.data = this._sortBy(e.data, "created_time", j);
                    break;
                case"liked":
                    e.data = this._sortBy(e.data, "likes.count", j);
                    break;
                case"commented":
                    e.data = this._sortBy(e.data, "comments.count", j);
                    break;
                default:
                    throw new Error("Invalid option for sortBy: '" + this.options.sortBy + "'.")
            }
            if ("undefined" != typeof document && null !== document && this.options.mock === !1) {
                if (g = e.data, k = parseInt(this.options.limit, 10), null != this.options.limit && g.length > k && (g = g.slice(0, k)), o = document.createDocumentFragment(), null != this.options.filter && "function" == typeof this.options.filter && (g = this._filter(g, this.options.filter)), null != this.options.template && "string" == typeof this.options.template) {
                    for (u = "", f = "", w = "", M = document.createElement("div"), d = 0, S = g.length; S > d; d++) {
                        if (h = g[d], p = h.images[this.options.resolution], "object" != typeof p) throw a = "No image found for resolution: " + this.options.resolution + ".", new Error(a);
                        _ = p.width, y = p.height, b = "square", _ > y && (b = "landscape"), y > _ && (b = "portrait"), m = p.url, c = window.location.protocol.indexOf("http") >= 0, c && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), f = this._makeTemplate(this.options.template, {
                            model: h,
                            id: h.id,
                            link: h.link,
                            type: h.type,
                            image: m,
                            width: _,
                            height: y,
                            orientation: b,
                            caption: this._getObjectProperty(h, "caption.text"),
                            likes: h.likes.count,
                            comments: h.comments.count,
                            location: this._getObjectProperty(h, "location.name")
                        }), u += f
                    }
                    for (M.innerHTML = u, r = [], n = 0, i = M.childNodes.length; i > n;) r.push(M.childNodes[n]), n += 1;
                    for (x = 0, E = r.length; E > x; x++) I = r[x], o.appendChild(I)
                } else for (C = 0, P = g.length; P > C; C++) {
                    if (h = g[C], v = document.createElement("img"), p = h.images[this.options.resolution], "object" != typeof p) throw a = "No image found for resolution: " + this.options.resolution + ".", new Error(a);
                    m = p.url, c = window.location.protocol.indexOf("http") >= 0, c && !this.options.useHttp && (m = m.replace(/https?:\/\//, "//")), v.src = m, this.options.links === !0 ? (t = document.createElement("a"), t.href = h.link, t.appendChild(v), o.appendChild(t)) : o.appendChild(v)
                }
                if (D = this.options.target, "string" == typeof D && (D = document.getElementById(D)), null == D) throw a = 'No element with id="' + this.options.target + '" on page.', new Error(a);
                D.appendChild(o), l = document.getElementsByTagName("head")[0], l.removeChild(document.getElementById("instafeed-fetcher")), T = "instafeedCache" + this.unique, window[T] = void 0;
                try {
                    delete window[T]
                } catch (O) {
                    s = O
                }
            }
            return null != this.options.after && "function" == typeof this.options.after && this.options.after.call(this), !0
        }, e.prototype._buildUrl = function () {
            var e, t, i;
            switch (e = "https://api.instagram.com/v1", this.options.get) {
                case"popular":
                    t = "media/popular";
                    break;
                case"tagged":
                    if (!this.options.tagName) throw new Error("No tag name specified. Use the 'tagName' option.");
                    t = "tags/" + this.options.tagName + "/media/recent";
                    break;
                case"location":
                    if (!this.options.locationId) throw new Error("No location specified. Use the 'locationId' option.");
                    t = "locations/" + this.options.locationId + "/media/recent";
                    break;
                case"user":
                    if (!this.options.userId) throw new Error("No user specified. Use the 'userId' option.");
                    t = "users/" + this.options.userId + "/media/recent";
                    break;
                default:
                    throw new Error("Invalid option for get: '" + this.options.get + "'.")
            }
            return i = e + "/" + t, i += null != this.options.accessToken ? "?access_token=" + this.options.accessToken : "?client_id=" + this.options.clientId, null != this.options.limit && (i += "&count=" + this.options.limit), i += "&callback=instafeedCache" + this.unique + ".parse"
        }, e.prototype._genKey = function () {
            var e;
            return e = function () {
                return (65536 * (1 + Math.random()) | 0).toString(16).substring(1)
            }, "" + e() + e() + e() + e()
        }, e.prototype._makeTemplate = function (e, t) {
            var i, n, r, s, a;
            for (n = /(?:\{{2})([\w\[\]\.]+)(?:\}{2})/, i = e; n.test(i);) s = i.match(n)[1], a = null != (r = this._getObjectProperty(t, s)) ? r : "", i = i.replace(n, function () {
                return "" + a
            });
            return i
        }, e.prototype._getObjectProperty = function (e, t) {
            var i, n;
            for (t = t.replace(/\[(\w+)\]/g, ".$1"), n = t.split("."); n.length;) {
                if (i = n.shift(), !(null != e && i in e)) return null;
                e = e[i]
            }
            return e
        }, e.prototype._sortBy = function (e, t, i) {
            var n;
            return n = function (e, n) {
                var r, s;
                return r = this._getObjectProperty(e, t), s = this._getObjectProperty(n, t), i ? r > s ? 1 : -1 : s > r ? 1 : -1
            }, e.sort(n.bind(this)), e
        }, e.prototype._filter = function (e, t) {
            var i, n, r, s, a;
            for (i = [], n = function (e) {
                return t(e) ? i.push(e) : void 0
            }, r = 0, a = e.length; a > r; r++) s = e[r], n(s);
            return i
        }, e
    }(), function (e, t) {
        return "function" == typeof define && define.amd ? define([], t) : "object" == typeof module && module.exports ? module.exports = t() : e.Instafeed = t()
    }(this, function () {
        return e
    })
}.call(this), !function (e, t, i, n) {
    "use strict";
    e.jribbble = {};
    var r = null, s = "https://api.dribbble.com/v1",
        a = ["animated", "attachments", "debuts", "playoffs", "rebounds", "teams"], o = {
            token: "Jribbble: Missing Dribbble access token. Set one with $.jribbble.accessToken = YOUR_ACCESS_TOKEN. If you do not have an access token, you must register a new application at https://dribbble.com/account/applications/new",
            singular: function (e) {
                return e.substr(0, e.length - 1)
            },
            idRequired: function (e) {
                return "Jribbble: You have to provide a " + this.singular(e) + ' ID. ex: $.jribbble.%@("1234").'.replace(/%@/g, e)
            },
            subResource: function (e) {
                return "Jribbble: You have to provide a " + this.singular(e) + ' ID to get %@. ex: $.jribbble.%@("1234").%@()'.replace(/%@/g, e)
            },
            shotId: function (e) {
                return "Jribbble: You have to provide a shot ID to get %@. ex: " + ' $.jribbble.shots("1234").%@()'.replace(/%@/g, e)
            },
            commentLikes: 'Jribbble: You have to provide a comment ID to get likes. ex:  $.jribbble.shots("1234").comments("456").likes()'
        }, l = function (e, t) {
            if (e && "object" != typeof e) return e;
            throw new Error(o.idRequired(t))
        }, u = function (e) {
            var t = {};
            return e.forEach(function (e) {
                t[e] = f.call(this, e)
            }.bind(this)), t
        }, c = function (t) {
            var i = e.param(t);
            return i ? "?" + i : ""
        }, d = function (e) {
            if (0 !== e.length) {
                var t = e[0], i = typeof t, n = {};
                if ("number" === i || "string" === i) {
                    var r = a.indexOf(t);
                    r > -1 ? n.list = t : n.resource = t
                } else "object" === i && (n = t);
                return n
            }
        }, h = function () {
            var t = e.extend({}, e.Deferred()), i = function () {
                return this.methods = [], this.response = null, this.flushed = !1, this.add = function (e) {
                    this.flushed ? e(this.scope) : this.methods.push(e)
                }, this.flush = function (e) {
                    if (!this.flushed) {
                        for (this.scope = e, this.flushed = !0; this.methods[0];) this.methods.shift()(e);
                        return e
                    }
                }, this
            };
            return t.queue = new i, t.url = s, t.get = function () {
                return r ? (e.ajax({
                    type: "GET", url: this.url, beforeSend: function (e) {
                        e.setRequestHeader("Authorization", "Bearer " + r)
                    }, success: function (e) {
                        this.resolve(e)
                    }.bind(this), error: function (e) {
                        this.reject(e)
                    }.bind(this)
                }), this) : (console.error(o.token), !1)
            }, t
        }, p = function (t) {
            return function (i) {
                return e.extend(this, h()), this.queue.add(function (e) {
                    e.url += "/" + t + "/" + i
                }), setTimeout(function () {
                    this.queue.flush(this).get()
                }.bind(this)), this
            }
        }, f = function (e) {
            return function (t) {
                return this.queue.add(function (i) {
                    i.url += "/" + e + "/" + c(t || {})
                }), this
            }
        };
    e.jribbble.shots = function (t, i) {
        var n = d([].slice.call(arguments)) || {}, r = i || {}, s = function (t) {
            return function (i, n) {
                var r = d([].slice.call(arguments)) || {}, s = n || {};
                return this.queue.add(function (i) {
                    if (!i.shotId) throw new Error(o.shotId(t));
                    i.url += "/" + t + "/", r.resource && (i.url += r.resource, delete r.resource), i.url += c(e.extend(r, s))
                }), this
            }
        }, a = function () {
            return e.extend(this, h()), this.url += "/shots/", this.queue.add(function (t) {
                n.resource && (t.shotId = n.resource, t.url += n.resource, delete n.resource), t.url += c(e.extend(n, r))
            }), setTimeout(function () {
                this.queue.flush(this).get()
            }.bind(this)), this
        };
        return a.prototype.attachments = s("attachments"), a.prototype.buckets = s("buckets"), a.prototype.likes = s("likes"), a.prototype.projects = s("projects"), a.prototype.rebounds = s("rebounds"), a.prototype.comments = function (t, i) {
            var n = d([].slice.call(arguments)) || {}, r = i || {};
            return this.queue.add(function (t) {
                if (!t.shotId) throw new Error(o.shotId("comments"));
                t.url += "/comments/", n.resource && (t.commentId = n.resource, t.url += n.resource + "/", delete n.resource), t.url += c(e.extend(n, r))
            }), this.likes = function (e) {
                var t = e || {};
                return this.queue.add(function (e) {
                    if (!e.commentId) throw new Error(o.commentLikes);
                    e.url += "likes/" + c(t)
                }), this
            }, this
        }, new a
    }, e.jribbble.teams = function (e) {
        var t = "teams", i = l(e, t), n = p.call(this, t);
        return n.prototype = u.call(this, ["members", "shots"]), new n(i)
    }, e.jribbble.users = function (e) {
        var t = "users", i = l(e, t), n = p.call(this, t);
        return n.prototype = u.call(this, ["buckets", "followers", "following", "likes", "projects", "shots", "teams"]), n.prototype.isFollowing = function (e) {
            return this.queue.add(function (t) {
                t.url += "/following/" + e
            }), this
        }, new n(i)
    }, e.jribbble.buckets = function (e) {
        var t = "buckets", i = l(e, t), n = p.call(this, t);
        return n.prototype = u.call(this, ["shots"]), new n(i)
    }, e.jribbble.projects = function (e) {
        var t = "projects", i = l(e, t), n = p.call(this, t);
        return n.prototype = u.call(this, ["shots"]), new n(i)
    }, e.jribbble.setToken = function (e) {
        return r = e, this
    }
}(jQuery, window, document);
var ytp = ytp || {}, getYTPVideoID = function (e) {
    var t, i;
    return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), i = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = i ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], i = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, i = t ? null : e), {
        videoID: t,
        playlistID: i
    }
};
!function (jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.1.5",
        build: "6570",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            fadeOnStartTime: 1500,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            mobileFallbackImage: null,
            gaTrack: !0,
            optimizeDisplay: !0,
            remember_last_time: !1,
            playOnlyIfVisible: !1,
            anchor: "center,center",
            onReady: function (e) {
            },
            onError: function (e, t) {
            }
        },
        controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"},
        controlBar: null,
        locationProtocol: "https:",
        filters: {
            grayscale: {value: 0, unit: "%"},
            hue_rotate: {value: 0, unit: "deg"},
            invert: {value: 0, unit: "%"},
            opacity: {value: 0, unit: "%"},
            saturate: {value: 0, unit: "%"},
            sepia: {value: 0, unit: "%"},
            brightness: {value: 0, unit: "%"},
            contrast: {value: 0, unit: "%"},
            blur: {value: 0, unit: "px"}
        },
        buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = 0, YTPlayer.filters = jQuery.mbYTPlayer.filters, YTPlayer.filtersEnabled = !0, YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(), $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && 0 === property.vol && (property.vol = 1, property.mute = !0), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), "true" == YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function () {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.opt.realfullscreen = isIframe() ? !1 : YTPlayer.opt.realfullscreen, $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime());
                var playerID = "iframe_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0, YTPlayer.videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1, YTPlayer.playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3";
                var start_from_last = 0;
                jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))), YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last, jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID));
                var playerVars = {
                    modestbranding: 1,
                    autoplay: 0,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations,
                    playsinline: jQuery.browser.mobile ? 1 : 0
                };
                if (document.createElement("video").canPlayType && jQuery.extend(playerVars, {html5: 1}), jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (this.opt.opacity = 1), YTPlayer.isPlayer = "self" == YTPlayer.opt.containment, YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = YTPlayer.opt.containment.is("body"), YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"), YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    }), YTPlayer.opt.containment.width("100%"), YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper), YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    })), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    YTPlayer.isPlayer || $YTPlayer.hide(), YTPlayer.overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay"), YTPlayer.isPlayer && YTPlayer.overlay.on("click", function () {
                        $YTPlayer.YTPTogglePlay()
                    }), YTPlayer.wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + YTPlayer.id), YTPlayer.wrapper.css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    });
                    var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox");
                    if (playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), YTPlayer.wrapper.append(playerBox), playerBox.css({opacity: 1}), playerBox.after(YTPlayer.overlay), YTPlayer.opt.containment.children().not("script, style").each(function () {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({boxSizing: "border-box"}), YTPlayer.wrapper.css({
                            position: "fixed",
                            top: 0,
                            left: 0,
                            zIndex: 0
                        }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(YTPlayer.wrapper), YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function () {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function () {
                            YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100); else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && jQuery("body").one("touchstart", function () {
                        YTPlayer.player.playVideo()
                    }), jQuery.mbBrowser.mobile && YTPlayer.opt.mobileFallbackImage && YTPlayer.wrapper.css({
                        backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                        backgroundPosition: "center center",
                        backgroundSize: "cover",
                        backgroundRepeat: "no-repeat",
                        opacity: 1
                    }), jQuery(document).on("YTAPIReady", function () {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? !!YTPlayer.isBackground : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
                            YTPlayer.isInit || (YTPlayer.isInit = !0, new YT.Player(playerID, {
                                videoId: YTPlayer.videoID.toString(),
                                playerVars: playerVars,
                                events: {
                                    onReady: function (e) {
                                        YTPlayer.player = e.target, YTPlayer.isReady || (YTPlayer.isReady = !YTPlayer.isPlayer || YTPlayer.opt.autoPlay, YTPlayer.playerEl = YTPlayer.player.getIframe(), jQuery(YTPlayer.playerEl).unselectable(), $YTPlayer.optimizeDisplay(), jQuery(window).off("resize.YTP_" + YTPlayer.id).on("resize.YTP_" + YTPlayer.id, function () {
                                            $YTPlayer.optimizeDisplay()
                                        }), YTPlayer.opt.remember_last_time && jQuery(window).on("unload.YTP_" + YTPlayer.id, function () {
                                            var e = YTPlayer.player.getCurrentTime();
                                            jQuery.mbCookie.set("YTPlayer_start_from" + YTPlayer.videoID, e, 0)
                                        }), jQuery.mbYTPlayer.checkForState(YTPlayer))
                                    }, onStateChange: function (event) {
                                        if ("function" == typeof event.target.getPlayerState) {
                                            var state = event.target.getPlayerState();
                                            if (YTPlayer.preventTrigger) return void(YTPlayer.preventTrigger = !1);
                                            YTPlayer.state = state;
                                            var eventType;
                                            switch (state) {
                                                case-1:
                                                    eventType = "YTPUnstarted";
                                                    break;
                                                case 0:
                                                    eventType = "YTPRealEnd";
                                                    break;
                                                case 1:
                                                    eventType = "YTPPlay", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                    break;
                                                case 2:
                                                    eventType = "YTPPause", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 3:
                                                    YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 5:
                                                    eventType = "YTPCued"
                                            }
                                            var YTPEvent = jQuery.Event(eventType);
                                            YTPEvent.time = YTPlayer.currentTime, YTPlayer.preventTrigger || jQuery(YTPlayer).trigger(YTPEvent)
                                        }
                                    }, onPlaybackQualityChange: function (e) {
                                        var t = e.target.getPlaybackQuality(), i = jQuery.Event("YTPQualityChange");
                                        i.quality = t, jQuery(YTPlayer).trigger(i)
                                    }, onError: function (e) {
                                        150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                    }
                                }
                            }))
                        }))
                    }), $YTPlayer.off("YTPTime.mask"), jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        isOnScreen: function (e) {
            var t = e.wrapper, i = $(window).scrollTop(), n = i + $(window).height(), r = t.offset().top,
                s = r + t.height() / 2;
            return n >= s && r >= i
        },
        getDataFromAPI: function (e) {
            if (e.videoData = jQuery.mbStorage.get("YTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
                    if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                        var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                        e.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        }), e.opt.backgroundUrl = t
                    }
                }), e.videoData) setTimeout(function () {
                e.opt.ratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio, e.dataReceived = !0;
                var t = jQuery.Event("YTPChanged");
                t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t);
                var i = jQuery.Event("YTPData");
                i.prop = {};
                for (var n in e.videoData) i.prop[n] = e.videoData[n];
                jQuery(e).trigger(i)
            }, e.opt.fadeOnStartTime), e.hasData = !0; else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (t) {
                function i(t) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? 16 / 9 : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YTPlayer_data_" + e.videoID, e.videoData)
                }

                e.dataReceived = !0;
                var n = jQuery.Event("YTPChanged");
                n.time = e.currentTime, n.videoId = e.videoID, jQuery(e).trigger(n), i(t.items[0].snippet), e.hasData = !0;
                var r = jQuery.Event("YTPData");
                r.prop = {};
                for (var s in e.videoData) r.prop[s] = e.videoData[s];
                jQuery(e).trigger(r)
            }); else {
                if (setTimeout(function () {
                        var t = jQuery.Event("YTPChanged");
                        t.time = e.currentTime, t.videoId = e.videoID, jQuery(e).trigger(t)
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/maxresdefault.jpg";
                    t && e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }), e.opt.backgroundUrl = t
                }
                e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }
            e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function () {
            jQuery.mbStorage.remove()
        },
        getVideoData: function () {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function () {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function (e) {
            var t = this.get(0);
            t.player.setPlaybackQuality(e)
        },
        playlist: function (e, t, i) {
            var n = this, r = n.get(0);
            return r.isPlayList = !0, t && (e = jQuery.shuffle(e)), r.videoID || (r.videos = e, r.videoCounter = 0, r.videoLength = e.length, jQuery(r).data("property", e[0]), jQuery(r).mb_YTPlayer()), "function" == typeof i && jQuery(r).one("YTPChanged", function () {
                i(r)
            }), jQuery(r).on("YTPEnd", function () {
                jQuery(r).playNext()
            }), this
        },
        playNext: function () {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playPrev: function () {
            var e = this.get(0);
            return e.checkForStartAt && (clearInterval(e.checkForStartAt), clearInterval(e.getState)), e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).YTPChangeMovie(e.videos[e.videoCounter]), this
        },
        playIndex: function (e) {
            var t = this.get(0);
            return e -= 1, t.checkForStartAt && (clearInterval(t.checkForStartAt), clearInterval(t.getState)), t.videoCounter = e, t.videoCounter >= t.videoLength - 1 && (t.videoCounter = t.videoLength - 1), jQuery(t).YTPChangeMovie(t.videos[t.videoCounter]), this
        },
        changeMovie: function (e) {
            var t = this, i = t.get(0);
            i.opt.startAt = 0, i.opt.stopAt = 0, i.opt.mask = !1, i.opt.mute = !0, i.hasData = !1, i.hasChanged = !0, i.player.loopTime = void 0, e && jQuery.extend(i.opt, e), i.videoID = getYTPVideoID(i.opt.videoURL).videoID, "true" == i.opt.loop && (i.opt.loop = 9999), jQuery(i.playerEl).CSSAnimate({opacity: 0}, i.opt.fadeOnStartTime, function () {
                var e = jQuery.Event("YTPChangeMovie");
                e.time = i.currentTime, e.videoId = i.videoID, jQuery(i).trigger(e), jQuery(i).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + i.videoID), 1, i.opt.quality), jQuery(i).optimizeDisplay(), jQuery.mbYTPlayer.checkForState(i), jQuery.mbYTPlayer.getDataFromAPI(i)
            }), jQuery.mbYTPlayer.applyMask(i)
        },
        getPlayer: function () {
            return jQuery(this).get(0).player
        },
        playerDestroy: function () {
            var e = this.get(0);
            return ytp.YTAPIReady = !0, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null, e.isReady = !1, e.wrapper.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this
        },
        fullscreen: function (real) {
            function hideMouse() {
                YTPlayer.overlay.css({cursor: "none"})
            }

            function RunPrefixMethod(e, t) {
                for (var i, n, r = ["webkit", "moz", "ms", "o", ""], s = 0; s < r.length && !e[i];) {
                    if (i = t, "" == r[s] && (i = i.substr(0, 1).toLowerCase() + i.substr(1)), i = r[s] + i, n = typeof e[i], "undefined" != n) return r = [r[s]], "function" == n ? e[i]() : e[i];
                    s++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }

            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"),
                videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("YTPFullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), clearTimeout(YTPlayer.hideCursor), YTPlayer.overlay.css({cursor: "auto"}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, YTPlayer.opt.fadeOnStartTime), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (e) {
                YTPlayer.overlay.css({cursor: "auto"}), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }), hideMouse(), real ? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("YTPFullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                videoWrapper.CSSAnimate({opacity: 1}, 2 * YTPlayer.opt.fadeOnStartTime), videoWrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 2 * YTPlayer.opt.fadeOnStartTime), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
        },
        toggleLoops: function () {
            var e = this.get(0), t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this
        },
        play: function () {
            var e = this.get(0);
            if (!e.isReady) return this;
            e.player.playVideo(), jQuery(e.playerEl).css({opacity: 1}), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, e.opt.fadeOnStartTime);
            var t = jQuery("#controlBar_" + e.id), i = t.find(".mb_YTPPlaypause");
            return i.html(jQuery.mbYTPlayer.controls.pause), e.state = 1, e.orig_background = jQuery(e).css("background-image"), this
        },
        togglePlay: function (e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this
        },
        stop: function () {
            var e = this.get(0), t = jQuery("#controlBar_" + e.id), i = t.find(".mb_YTPPlaypause");
            return i.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this
        },
        pause: function () {
            var e = this.get(0);
            return e.player.pauseVideo(), e.state = 2, this
        },
        seekTo: function (e) {
            var t = this.get(0);
            return t.player.seekTo(e, !0), this
        },
        setVolume: function (e) {
            var t = this.get(0);
            return t.player.length ? (e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this) : void 0
        },
        toggleVolume: function () {
            var e = this.get(0);
            return e ? e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1) : void 0
        },
        mute: function () {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0);
                var t = jQuery("#controlBar_" + e.id), i = t.find(".mb_YTPMuteUnmute");
                i.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var n = jQuery.Event("YTPMuted");
                return n.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(n), this
            }
        },
        unmute: function () {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                var t = jQuery("#controlBar_" + e.id), i = t.find(".mb_YTPMuteUnmute");
                i.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var n = jQuery.Event("YTPUnmuted");
                return n.time = e.currentTime, e.preventTrigger || jQuery(e).trigger(n), this
            }
        },
        applyFilter: function (e, t) {
            return this.each(function () {
                var i = this;
                i.filters[e].value = t, i.filtersEnabled && jQuery(i).YTPEnableFilters()
            })
        },
        applyFilters: function (e) {
            return this.each(function () {
                var t = this;
                if (!t.isReady) return void jQuery(t).on("YTPReady", function () {
                    jQuery(t).YTPApplyFilters(e)
                });
                for (var i in e) jQuery(t).YTPApplyFilter(i, e[i]);
                jQuery(t).trigger("YTPFiltersApplied")
            })
        },
        toggleFilter: function (e, t) {
            return this.each(function () {
                var i = this;
                i.filters[e].value ? i.filters[e].value = 0 : i.filters[e].value = t, i.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function (e) {
            return this.each(function () {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled)
            })
        },
        disableFilters: function () {
            return this.each(function () {
                var e = this, t = jQuery(e.playerEl);
                t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1
            })
        },
        enableFilters: function () {
            return this.each(function () {
                var e = this, t = jQuery(e.playerEl), i = "";
                for (var n in e.filters) e.filters[n].value && (i += n.replace("_", "-") + "(" + e.filters[n].value + e.filters[n].unit + ") ");
                t.css("-webkit-filter", i), t.css("filter", i), e.filtersEnabled = !0
            })
        },
        removeFilter: function (e, t) {
            return this.each(function () {
                var i = this;
                if ("function" == typeof e && (t = e, e = null), e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e); else for (var n in i.filters) jQuery(this).YTPApplyFilter(n, 0), "function" == typeof t && t(n)
            })
        },
        getFilters: function () {
            var e = this.get(0);
            return e.filters
        },
        addMask: function (e) {
            var t = this.get(0);
            e || (e = t.actualMask);
            var i = jQuery("<img/>").attr("src", e).on("load", function () {
                t.overlay.CSSAnimate({opacity: 0}, t.opt.fadeOnStartTime, function () {
                    t.hasMask = !0, i.remove(), t.overlay.css({
                        backgroundImage: "url(" + e + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }), t.overlay.CSSAnimate({opacity: 1}, t.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function () {
            var e = this.get(0);
            return e.overlay.CSSAnimate({opacity: 0}, e.opt.fadeOnStartTime, function () {
                e.hasMask = !1, e.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }), e.overlay.CSSAnimate({opacity: 1}, e.opt.fadeOnStartTime)
            }), this
        },
        applyMask: function (e) {
            var t = jQuery(e);
            if (t.off("YTPTime.mask"), e.opt.mask) if ("string" == typeof e.opt.mask) t.YTPAddMask(e.opt.mask), e.actualMask = e.opt.mask; else if ("object" == typeof e.opt.mask) {
                for (var i in e.opt.mask) e.opt.mask[i] && jQuery("<img/>").attr("src", e.opt.mask[i]);
                e.opt.mask[0] && t.YTPAddMask(e.opt.mask[0]), t.on("YTPTime.mask", function (i) {
                    for (var n in e.opt.mask) i.time == n && (e.opt.mask[n] ? (t.YTPAddMask(e.opt.mask[n]), e.actualMask = e.opt.mask[n]) : t.YTPRemoveMask())
                })
            }
            return this
        },
        toggleMask: function () {
            var e = this.get(0), t = $(e);
            return e.hasMask ? t.YTPRemoveMask() : t.YTPAddMask(), this
        },
        manageProgress: function () {
            var e = this.get(0), t = jQuery("#controlBar_" + e.id), i = t.find(".mb_YTPProgress"),
                n = t.find(".mb_YTPLoaded"), r = t.find(".mb_YTPseekbar"), s = i.outerWidth(),
                a = Math.floor(e.player.getCurrentTime()), o = Math.floor(e.player.getDuration()), l = a * s / o, u = 0,
                c = 100 * e.player.getVideoLoadedFraction();
            return n.css({left: u, width: c + "%"}), r.css({left: 0, width: l}), {totalTime: o, currentTime: a}
        },
        buildControls: function (YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar = jQuery("<div/>").addClass("buttonBar"),
                    playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                        1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                    }),
                    MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                        0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                    }), volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display: "inline-block"});
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime"), vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                        window.open(vURL, "viewOnYT")
                    }),
                    onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                        jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                    }),
                    progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
                        timeBar.css({width: e.clientX - timeBar.offset().left}), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0});
                        var t = Math.floor(YTPlayer.player.getDuration());
                        YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0})
                    }), loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"),
                    timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function (e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function (YTPlayer) {
            clearInterval(YTPlayer.getState);
            var interval = (YTPlayer.opt.showControls, 10);
            return jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
                var prog = jQuery(YTPlayer).YTPManageProgress(), $YTPlayer = jQuery(YTPlayer), data = YTPlayer.opt,
                    startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
                YTPlayer.start_from_last = null;
                var stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.currentTime != prog.currentTime) {
                    var YTPEvent = jQuery.Event("YTPTime");
                    YTPEvent.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(YTPEvent)
                }
                if (YTPlayer.currentTime = prog.currentTime, YTPlayer.totalTime = YTPlayer.player.getDuration(), 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, YTPlayer.player.playVideo()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.opt.playOnlyIfVisible && 1 == YTPlayer.state) {
                    var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer);
                    isOnScreen ? YTPlayer.player.playVideo() : $YTPlayer.YTPPause()
                }
                if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                    if (YTPlayer.isEnded) return;
                    if (YTPlayer.isEnded = !0, setTimeout(function () {
                            YTPlayer.isEnded = !1
                        }, 1e3), YTPlayer.isPlayList) {
                        if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) {
                            YTPlayer.player.loopTime = void 0, clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.currentTime, void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                    } else if (!data.loop || data.loop > 0 && YTPlayer.player.loopTime === data.loop - 1) return YTPlayer.player.loopTime = void 0, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), void YTPlayer.wrapper.CSSAnimate({opacity: 0}, YTPlayer.opt.fadeOnStartTime, function () {
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                        var e = jQuery.Event("YTPEnd");
                        e.time = YTPlayer.currentTime, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground ? YTPlayer.orig_background && jQuery(YTPlayer).css("background-image", YTPlayer.orig_background) : YTPlayer.opt.backgroundUrl && YTPlayer.isPlayer && (YTPlayer.opt.backgroundUrl = YTPlayer.opt.backgroundUrl || YTPlayer.orig_background, YTPlayer.opt.containment.css({
                            background: "url(" + YTPlayer.opt.backgroundUrl + ") center center",
                            backgroundSize: "cover"
                        }))
                    });
                    YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1, startAt = startAt || 1, YTPlayer.preventTrigger = !0, YTPlayer.state = 2, jQuery(YTPlayer).YTPPause(), YTPlayer.player.seekTo(startAt, !0), YTPlayer.player.playVideo()
                }
            }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function (e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e)) return void jQuery(e).YTPPlayerDestroy();
            if (e.preventTrigger = !0, e.state = 2, e.player.playVideo(), jQuery(e).YTPPause(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.controlBar = !1, e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.overlay) if (e.opt.addRaster) {
                var i = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? i + " retina" : i)
            } else e.overlay.removeClass(function (e, t) {
                var i = t.split(" "), n = [];
                return jQuery.each(i, function (e, t) {
                    /raster.*/.test(t) && n.push(t)
                }), n.push("retina"), n.join(" ")
            });
            var n = e.start_from_last ? e.start_from_last : e.opt.startAt ? e.opt.startAt : 1;
            e.start_from_last = null, e.player.playVideo(), e.player.seekTo(n, !0), clearInterval(e.checkForStartAt), jQuery(e).YTPMute(), e.checkForStartAt = setInterval(function () {
                var i = e.player.getVideoLoadedFraction() >= n / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= n && i) {
                    clearInterval(e.checkForStartAt), "function" == typeof e.opt.onReady && e.opt.onReady(e), e.isReady = !0;
                    var r = jQuery.Event("YTPReady");
                    if (r.time = e.currentTime, jQuery(e).trigger(r), e.preventTrigger = !0, e.state = 2, jQuery(e).YTPPause(), e.opt.mute || jQuery(e).YTPUnmute(), e.preventTrigger = !1, e.opt.autoPlay) {
                        var s = jQuery.Event("YTPStart");
                        s.time = e.currentTime, jQuery(e).trigger(s), t.YTPPlay(), "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (e.safariPlay = setInterval(function () {
                            1 != e.state ? t.YTPPlay() : clearInterval(e.safariPlay)
                        }, 10))
                    } else setTimeout(function () {
                        e.player.pauseVideo(), e.player.seekTo(n, !0), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({opacity: 1}, e.opt.fadeOnStartTime), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, e.opt.fadeOnStartTime))
                    }, 150), e.controlBar.length && e.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                    e.isPlayer && !e.opt.autoPlay && e.loading && e.loading.length && (e.loading.html("Ready"), setTimeout(function () {
                        e.loading.fadeOut()
                    }, 100)), e.controlBar && e.controlBar.length && e.controlBar.slideDown(1e3)
                } else "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery.mbBrowser.fullVersion && jQuery.mbBrowser.versionCompare(jQuery.mbBrowser.fullVersion, "10.1") < 0 && (e.player.playVideo(), n >= 0 && e.player.seekTo(n, !0))
            }, 100)
        },
        getTime: function () {
            var e = this.get(0);
            return jQuery.mbYTPlayer.formatTime(e.currentTime)
        },
        getTotalTime: function (e) {
            var t = this.get(0);
            return jQuery.mbYTPlayer.formatTime(t.totalTime)
        },
        formatTime: function (e) {
            var t = Math.floor(e / 60), i = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= i ? "0" + i : i)
        },
        setAnchor: function (e) {
            var t = this;
            t.optimizeDisplay(e)
        },
        getAnchor: function () {
            var e = this.get(0);
            return e.opt.anchor
        }
    }, jQuery.fn.optimizeDisplay = function (anchor) {
        var YTPlayer = this.get(0), vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor, YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",");
        if (YTPlayer.opt.optimizeDisplay) {
            var el = YTPlayer.wrapper, iframe = jQuery(YTPlayer.playerEl),
                abundance = YTPlayer.isPlayer ? 0 : .1 * iframe.height(), win = {};
            win.width = el.outerWidth(), win.height = el.outerHeight() + abundance, YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio), vid.width = win.width, vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio), vid.marginTop = Math.ceil(-((vid.height - win.height) / 2)), vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            lowest && (vid.height = win.height, vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio), vid.marginTop = 0, vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2)));
            for (var a in YTPAlign) if (YTPAlign.hasOwnProperty(a)) {
                var al = YTPAlign[a].replace(/ /g, "");
                switch (al) {
                    case"top":
                        vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                        break;
                    case"bottom":
                        vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                        break;
                    case"left":
                        vid.marginLeft = 0;
                        break;
                    case"right":
                        vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                        break;
                    default:
                        vid.width > win.width && (vid.marginLeft = -((vid.width - win.width) / 2))
                }
            }
        } else vid.width = "100%", vid.height = "100%", vid.marginTop = 0, vid.marginLeft = 0;
        jQuery(YTPlayer.playerEl).css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }, jQuery.shuffle = function (e) {
        for (var t = e.slice(), i = t.length, n = i; n--;) {
            var r = parseInt(Math.random() * i), s = t[n];
            t[n] = t[r], t[r] = s
        }
        return t
    }, jQuery.fn.unselectable = function () {
        return this.each(function () {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters, jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime, jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime, jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask, jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask, jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask, jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor, jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function () {
    var e = (document.body || document.documentElement).style;
    return void 0 !== e.transition || void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.MsTransition || void 0 !== e.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {min: 0, max: 100, unit: "px"},
        brightness: {min: 0, max: 400, unit: "%"},
        contrast: {min: 0, max: 400, unit: "%"},
        grayscale: {min: 0, max: 100, unit: "%"},
        hueRotate: {min: 0, max: 360, unit: "deg"},
        invert: {min: 0, max: 100, unit: "%"},
        saturate: {min: 0, max: 400, unit: "%"},
        sepia: {min: 0, max: 100, unit: "%"}
    },
    normalizeCss: function (e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"), jQuery.CSS.sfx = "";
        for (var i in t) {
            if ("transform" === i && (t[jQuery.CSS.sfx + "transform"] = t[i], delete t[i]), "transform-origin" === i && (t[jQuery.CSS.sfx + "transform-origin"] = e[i], delete t[i]), "filter" !== i || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[i], delete t[i]), "blur" === i && setFilter(t, "blur", e[i]), "brightness" === i && setFilter(t, "brightness", e[i]), "contrast" === i && setFilter(t, "contrast", e[i]), "grayscale" === i && setFilter(t, "grayscale", e[i]), "hueRotate" === i && setFilter(t, "hueRotate", e[i]), "invert" === i && setFilter(t, "invert", e[i]), "saturate" === i && setFilter(t, "saturate", e[i]), "sepia" === i && setFilter(t, "sepia", e[i]), "x" === i) {
                var n = jQuery.CSS.sfx + "transform";
                t[n] = t[n] || "", t[n] += " translateX(" + setUnit(e[i], "px") + ")", delete t[i]
            }
            "y" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " translateY(" + setUnit(e[i], "px") + ")", delete t[i]), "z" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " translateZ(" + setUnit(e[i], "px") + ")", delete t[i]), "rotate" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " rotate(" + setUnit(e[i], "deg") + ")", delete t[i]), "rotateX" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " rotateX(" + setUnit(e[i], "deg") + ")", delete t[i]), "rotateY" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " rotateY(" + setUnit(e[i], "deg") + ")", delete t[i]), "rotateZ" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " rotateZ(" + setUnit(e[i], "deg") + ")", delete t[i]), "scale" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " scale(" + setUnit(e[i], "") + ")", delete t[i]), "scaleX" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " scaleX(" + setUnit(e[i], "") + ")", delete t[i]), "scaleY" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " scaleY(" + setUnit(e[i], "") + ")", delete t[i]), "scaleZ" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " scaleZ(" + setUnit(e[i], "") + ")", delete t[i]), "skew" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " skew(" + setUnit(e[i], "deg") + ")", delete t[i]), "skewX" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " skewX(" + setUnit(e[i], "deg") + ")", delete t[i]), "skewY" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " skewY(" + setUnit(e[i], "deg") + ")", delete t[i]), "perspective" === i && (n = jQuery.CSS.sfx + "transform", t[n] = t[n] || "", t[n] += " perspective(" + setUnit(e[i], "px") + ")", delete t[i])
        }
        return t
    },
    getProp: function (e) {
        var t, i = [];
        for (t in e) 0 > i.indexOf(t) && i.push(uncamel(t));
        return i.join(",")
    },
    animate: function (e, t, i, n, r) {
        return this.each(function () {
            function s() {
                a.called = !0, a.CSSAIsRunning = !1, o.off(jQuery.CSS.transitionEnd + "." + a.id), clearTimeout(a.timeout), o.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof r && r.apply(a), "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null)
            }

            var a = this, o = jQuery(this);
            a.id = a.id || "CSSA_" + (new Date).getTime();
            var l = l || {type: "noEvent"};
            if (a.CSSAIsRunning && a.eventType == l.type && !jQuery.browser.msie && 9 >= jQuery.browser.version) a.CSSqueue = function () {
                o.CSSAnimate(e, t, i, n, r)
            }; else if (a.CSSqueue = null, a.eventType = l.type, 0 !== o.length && e) {
                if (e = jQuery.normalizeCss(e), a.CSSAIsRunning = !0, "function" == typeof t && (r = t, t = jQuery.fx.speeds._default), "function" == typeof i && (n = i, i = 0), "string" == typeof i && (r = i, i = 0), "function" == typeof n && (r = n, n = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t) for (var u in jQuery.fx.speeds) {
                    if (t == u) {
                        t = jQuery.fx.speeds[u];
                        break
                    }
                    t = jQuery.fx.speeds._default
                }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof r && (n = r, r = null), jQuery.support.CSStransition) {
                    var c = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    c[n] && (n = c[n]), o.off(jQuery.CSS.transitionEnd + "." + a.id), c = jQuery.CSS.getProp(e);
                    var d = {};
                    jQuery.extend(d, e), d[jQuery.CSS.sfx + "transition-property"] = c, d[jQuery.CSS.sfx + "transition-duration"] = t + "ms", d[jQuery.CSS.sfx + "transition-delay"] = i + "ms", d[jQuery.CSS.sfx + "transition-timing-function"] = n, setTimeout(function () {
                        o.one(jQuery.CSS.transitionEnd + "." + a.id, s), o.css(d)
                    }, 1), a.timeout = setTimeout(function () {
                        a.called || !r ? (a.called = !1, a.CSSAIsRunning = !1) : (o.css(jQuery.CSS.sfx + "transition", ""), r.apply(a), a.CSSAIsRunning = !1, "function" == typeof a.CSSqueue && (a.CSSqueue(), a.CSSqueue = null))
                    }, t + i + 10)
                } else {
                    for (c in e) "transform" === c && delete e[c], "filter" === c && delete e[c], "transform-origin" === c && delete e[c], "auto" === e[c] && delete e[c], "x" === c && (l = e[c], u = "left", e[u] = l, delete e[c]), "y" === c && (l = e[c], u = "top", e[u] = l, delete e[c]), "-ms-transform" !== c && "-ms-filter" !== c || delete e[c];
                    o.delay(i).animate(e, t, r)
                }
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
    return this.each(function () {
        var t = jQuery(this), i = jQuery.normalizeCss(e);
        t.css(i)
    })
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
    var e = {version: "Unknown version", name: "Unknown OS"};
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3, end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, t) {
    if ("stringstring" != typeof e + typeof t) return !1;
    for (var i = e.split("."), n = t.split("."), r = 0, s = Math.max(i.length, n.length); s > r; r++) {
        if (i[r] && !n[r] && 0 < parseInt(i[r]) || parseInt(i[r]) > parseInt(n[r])) return 1;
        if (n[r] && !i[r] && 0 < parseInt(n[r]) || parseInt(i[r]) < parseInt(n[r])) return -1
    }
    return 0
};
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.androidStock = !1, jQuery.browser.msie = !1, jQuery.browser.edge = !1, jQuery.browser.ua = nAgt;
var getOS = function () {
    var e = {version: "Unknown version", name: "Unknown OS"};
    return -1 != navigator.appVersion.indexOf("Win") && (e.name = "Windows"), -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (e.name = "Mac"), -1 != navigator.appVersion.indexOf("Linux") && (e.name = "Linux"), /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (e.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1], e.version = e.version.replace(/_/g, ".").substring(0, 5)), /Windows/.test(nAgt) && (e.version = "Unknown.Unknown"), /Windows NT 5.1/.test(nAgt) && (e.version = "5.1"), /Windows NT 6.0/.test(nAgt) && (e.version = "6.0"), /Windows NT 6.1/.test(nAgt) && (e.version = "6.1"), /Windows NT 6.2/.test(nAgt) && (e.version = "6.2"), /Windows NT 10.0/.test(nAgt) && (e.version = "10.0"), /Linux/.test(nAgt) && /Linux/.test(nAgt) && (e.version = "Unknown.Unknown"), e.name = e.name.toLowerCase(), e.major_version = "Unknown", e.minor_version = "Unknown", "Unknown.Unknown" != e.version && (e.major_version = parseFloat(e.version.split(".")[0]), e.minor_version = parseFloat(e.version.split(".")[1])), e
};
jQuery.browser.os = getOS(), jQuery.browser.hasTouch = isTouchSupported(), jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3, end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0, jQuery.browser.name = "Microsoft Edge", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"), jQuery.browser.webkit = !0, jQuery.browser.androidStock = !0, jQuery.browser.name = "androidStock", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion, jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(), jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), jQuery.mbBrowser = jQuery.browser, jQuery.browser.versionCompare = function (e, t) {
    if ("stringstring" != typeof e + typeof t) return !1;
    for (var i = e.split("."), n = t.split("."), r = 0, s = Math.max(i.length, n.length); s > r; r++) {
        if (i[r] && !n[r] && 0 < parseInt(i[r]) || parseInt(i[r]) > parseInt(n[r])) return 1;
        if (n[r] && !i[r] && 0 < parseInt(n[r]) || parseInt(i[r]) < parseInt(n[r])) return -1
    }
    return 0
}, function (e) {
    e.simpleSlider = {
        defaults: {initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1},
        events: {
            start: e.browser.mobile ? "touchstart" : "mousedown",
            end: e.browser.mobile ? "touchend" : "mouseup",
            move: e.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function (t) {
            return this.each(function () {
                var i = this, n = e(i);
                n.addClass("simpleSlider"), i.opt = {}, e.extend(i.opt, e.simpleSlider.defaults, t), e.extend(i.opt, n.data());
                var r = "h" == i.opt.orientation ? "horizontal" : "vertical";
                r = e("<div/>").addClass("level").addClass(r), n.prepend(r), i.level = r, n.css({cursor: "default"}), "auto" == i.opt.scale && (i.opt.scale = e(i).outerWidth()), n.updateSliderVal(), i.opt.readonly || (n.on(e.simpleSlider.events.start, function (t) {
                    e.browser.mobile && (t = t.changedTouches[0]), i.canSlide = !0, n.updateSliderVal(t), "h" == i.opt.orientation ? n.css({cursor: "col-resize"}) : n.css({cursor: "row-resize"}), e.browser.mobile || (t.preventDefault(), t.stopPropagation())
                }), e(document).on(e.simpleSlider.events.move, function (t) {
                    e.browser.mobile && (t = t.changedTouches[0]), i.canSlide && (e(document).css({cursor: "default"}), n.updateSliderVal(t), e.browser.mobile || (t.preventDefault(), t.stopPropagation()))
                }).on(e.simpleSlider.events.end, function () {
                    e(document).css({cursor: "auto"}), i.canSlide = !1, n.css({cursor: "auto"})
                }))
            })
        },
        updateSliderVal: function (t) {
            var i = this.get(0);
            if (i.opt) {
                i.opt.initialval = "number" == typeof i.opt.initialval ? i.opt.initialval : i.opt.initialval(i);
                var n = e(i).outerWidth(), r = e(i).outerHeight();
                i.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof t ? t * n / i.opt.scale : i.opt.initialval * n / i.opt.scale, i.y = "object" == typeof t ? t.clientY + document.body.scrollTop - this.offset().top : "number" == typeof t ? (i.opt.scale - i.opt.initialval - t) * r / i.opt.scale : i.opt.initialval * r / i.opt.scale, i.y = this.outerHeight() - i.y, i.scaleX = i.x * i.opt.scale / n, i.scaleY = i.y * i.opt.scale / r, i.outOfRangeX = i.scaleX > i.opt.scale ? i.scaleX - i.opt.scale : 0 > i.scaleX ? i.scaleX : 0, i.outOfRangeY = i.scaleY > i.opt.scale ? i.scaleY - i.opt.scale : 0 > i.scaleY ? i.scaleY : 0, i.outOfRange = "h" == i.opt.orientation ? i.outOfRangeX : i.outOfRangeY, i.value = "undefined" != typeof t ? "h" == i.opt.orientation ? i.x >= this.outerWidth() ? i.opt.scale : 0 >= i.x ? 0 : i.scaleX : i.y >= this.outerHeight() ? i.opt.scale : 0 >= i.y ? 0 : i.scaleY : "h" == i.opt.orientation ? i.scaleX : i.scaleY, "h" == i.opt.orientation ? i.level.width(Math.floor(100 * i.x / n) + "%") : i.level.height(Math.floor(100 * i.y / r)), "function" == typeof i.opt.callback && i.opt.callback(i)
            }
        }
    }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery), function (e) {
    e.mbCookie = {
        set: function (e, t, i, n) {
            "object" == typeof t && (t = JSON.stringify(t)), n = n ? "; domain=" + n : "";
            var r = new Date, s = "";
            i > 0 && (r.setTime(r.getTime() + 864e5 * i), s = "; expires=" + r.toGMTString()), document.cookie = e + "=" + t + s + "; path=/" + n
        }, get: function (e) {
            e += "=";
            for (var t = document.cookie.split(";"), i = 0; i < t.length; i++) {
                for (var n = t[i]; " " == n.charAt(0);) n = n.substring(1, n.length);
                if (0 == n.indexOf(e)) try {
                    return JSON.parse(n.substring(e.length, n.length))
                } catch (r) {
                    return n.substring(e.length, n.length)
                }
            }
            return null
        }, remove: function (t) {
            e.mbCookie.set(t, "", -1)
        }
    }, e.mbStorage = {
        set: function (e, t) {
            "object" == typeof t && (t = JSON.stringify(t)), localStorage.setItem(e, t)
        }, get: function (e) {
            if (!localStorage[e]) return null;
            try {
                return JSON.parse(localStorage[e])
            } catch (t) {
                return localStorage[e]
            }
        }, remove: function (e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery), !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    function t(e) {
        return o.raw ? e : encodeURIComponent(e)
    }

    function i(e) {
        return o.raw ? e : decodeURIComponent(e)
    }

    function n(e) {
        return t(o.json ? JSON.stringify(e) : String(e))
    }

    function r(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(a, " ")), o.json ? JSON.parse(e) : e
        } catch (t) {
        }
    }

    function s(t, i) {
        var n = o.raw ? t : r(t);
        return e.isFunction(i) ? i(n) : n
    }

    var a = /\+/g, o = e.cookie = function (r, a, l) {
        if (arguments.length > 1 && !e.isFunction(a)) {
            if (l = e.extend({}, o.defaults, l), "number" == typeof l.expires) {
                var u = l.expires, c = l.expires = new Date;
                c.setMilliseconds(c.getMilliseconds() + 864e5 * u)
            }
            return document.cookie = [t(r), "=", n(a), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
        }
        for (var d = r ? void 0 : {}, h = document.cookie ? document.cookie.split("; ") : [], p = 0, f = h.length; f > p; p++) {
            var m = h[p].split("="), g = i(m.shift()), v = m.join("=");
            if (r === g) {
                d = s(v, a);
                break
            }
            r || void 0 === (v = s(v)) || (d[g] = v)
        }
        return d
    };
    o.defaults = {}, e.removeCookie = function (t, i) {
        return e.cookie(t, "", e.extend({}, i, {expires: -1})), !e.cookie(t)
    }
}), !function (e, t) {
    "function" == typeof define && define.amd ? define(["jquery"], function (e) {
        return t(e)
    }) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(this, function (e) {
    var t = function (e, t) {
        var i, n = document.createElement("canvas");
        e.appendChild(n), "object" == typeof G_vmlCanvasManager && G_vmlCanvasManager.initElement(n);
        var r = n.getContext("2d");
        n.width = n.height = t.size;
        var s = 1;
        window.devicePixelRatio > 1 && (s = window.devicePixelRatio, n.style.width = n.style.height = [t.size, "px"].join(""), n.width = n.height = t.size * s, r.scale(s, s)), r.translate(t.size / 2, t.size / 2), r.rotate((-.5 + t.rotate / 180) * Math.PI);
        var a = (t.size - t.lineWidth) / 2;
        t.scaleColor && t.scaleLength && (a -= t.scaleLength + 2), Date.now = Date.now || function () {
            return +new Date
        };
        var o = function (e, t, i) {
            i = Math.min(Math.max(-1, i || 0), 1);
            var n = 0 >= i ? !0 : !1;
            r.beginPath(), r.arc(0, 0, a, 0, 2 * Math.PI * i, n), r.strokeStyle = e, r.lineWidth = t, r.stroke()
        }, l = function () {
            var e, i;
            r.lineWidth = 1, r.fillStyle = t.scaleColor, r.save();
            for (var n = 24; n > 0; --n) n % 6 === 0 ? (i = t.scaleLength, e = 0) : (i = .6 * t.scaleLength, e = t.scaleLength - i), r.fillRect(-t.size / 2 + e, 0, i, 1), r.rotate(Math.PI / 12);
            r.restore()
        }, u = function () {
            return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (e) {
                window.setTimeout(e, 1e3 / 60)
            }
        }(), c = function () {
            t.scaleColor && l(), t.trackColor && o(t.trackColor, t.trackWidth || t.lineWidth, 1)
        };
        this.getCanvas = function () {
            return n
        }, this.getCtx = function () {
            return r
        }, this.clear = function () {
            r.clearRect(t.size / -2, t.size / -2, t.size, t.size)
        }, this.draw = function (e) {
            t.scaleColor || t.trackColor ? r.getImageData && r.putImageData ? i ? r.putImageData(i, 0, 0) : (c(), i = r.getImageData(0, 0, t.size * s, t.size * s)) : (this.clear(), c()) : this.clear(), r.lineCap = t.lineCap;
            var n;
            n = "function" == typeof t.barColor ? t.barColor(e) : t.barColor, o(n, t.lineWidth, e / 100)
        }.bind(this), this.animate = function (e, i) {
            var n = Date.now();
            t.onStart(e, i);
            var r = function () {
                var s = Math.min(Date.now() - n, t.animate.duration),
                    a = t.easing(this, s, e, i - e, t.animate.duration);
                this.draw(a), t.onStep(e, i, a), s >= t.animate.duration ? t.onStop(e, i) : u(r)
            }.bind(this);
            u(r)
        }.bind(this)
    }, i = function (e, i) {
        var n = {
            barColor: "#ef1e25",
            trackColor: "#f9f9f9",
            scaleColor: "#dfe0e0",
            scaleLength: 5,
            lineCap: "round",
            lineWidth: 3,
            trackWidth: void 0,
            size: 110,
            rotate: 0,
            animate: {duration: 1e3, enabled: !0},
            easing: function (e, t, i, n, r) {
                return t /= r / 2, 1 > t ? n / 2 * t * t + i : -n / 2 * (--t * (t - 2) - 1) + i
            },
            onStart: function (e, t) {
            },
            onStep: function (e, t, i) {
            },
            onStop: function (e, t) {
            }
        };
        if ("undefined" != typeof t) n.renderer = t; else {
            if ("undefined" == typeof SVGRenderer) throw new Error("Please load either the SVG- or the CanvasRenderer");
            n.renderer = SVGRenderer
        }
        var r = {}, s = 0, a = function () {
            this.el = e, this.options = r;
            for (var t in n) n.hasOwnProperty(t) && (r[t] = i && "undefined" != typeof i[t] ? i[t] : n[t], "function" == typeof r[t] && (r[t] = r[t].bind(this)));
            "string" == typeof r.easing && "undefined" != typeof jQuery && jQuery.isFunction(jQuery.easing[r.easing]) ? r.easing = jQuery.easing[r.easing] : r.easing = n.easing, "number" == typeof r.animate && (r.animate = {
                duration: r.animate,
                enabled: !0
            }), "boolean" != typeof r.animate || r.animate || (r.animate = {
                duration: 1e3,
                enabled: r.animate
            }), this.renderer = new r.renderer(e, r), this.renderer.draw(s), e.dataset && e.dataset.percent ? this.update(parseFloat(e.dataset.percent)) : e.getAttribute && e.getAttribute("data-percent") && this.update(parseFloat(e.getAttribute("data-percent")))
        }.bind(this);
        this.update = function (e) {
            return e = parseFloat(e), r.animate.enabled ? this.renderer.animate(s, e) : this.renderer.draw(e), s = e, this
        }.bind(this), this.disableAnimation = function () {
            return r.animate.enabled = !1, this
        }, this.enableAnimation = function () {
            return r.animate.enabled = !0, this
        }, a()
    };
    e.fn.easyPieChart = function (t) {
        return this.each(function () {
            var n;
            e.data(this, "easyPieChart") || (n = e.extend({}, t, e(this).data()), e.data(this, "easyPieChart", new i(this, n)))
        })
    }
}), function (e) {
    e.fn.appear = function (t, i) {
        var n = e.extend({data: void 0, one: !0, accX: 0, accY: 0}, i);
        return this.each(function () {
            var i = e(this);
            if (i.appeared = !1, !t) return void i.trigger("appear", n.data);
            var r = e(window), s = function () {
                if (!i.is(":visible")) return void(i.appeared = !1);
                var e = r.scrollLeft(), t = r.scrollTop(), s = i.offset(), a = s.left, o = s.top, l = n.accX,
                    u = n.accY, c = i.height(), d = r.height(), h = i.width(), p = r.width();
                o + c + u >= t && t + d + u >= o && a + h + l >= e && e + p + l >= a ? i.appeared || i.trigger("appear", n.data) : i.appeared = !1
            }, a = function () {
                if (i.appeared = !0, n.one) {
                    r.unbind("scroll", s);
                    var a = e.inArray(s, e.fn.appear.checks);
                    a >= 0 && e.fn.appear.checks.splice(a, 1)
                }
                t.apply(this, arguments)
            };
            n.one ? i.one("appear", n.data, a) : i.bind("appear", n.data, a), r.scroll(s), e.fn.appear.checks.push(s), s()
        })
    }, e.extend(e.fn.appear, {
        checks: [], timeout: null, checkAll: function () {
            var t = e.fn.appear.checks.length;
            if (t > 0) for (; t--;) e.fn.appear.checks[t]()
        }, run: function () {
            e.fn.appear.timeout && clearTimeout(e.fn.appear.timeout), e.fn.appear.timeout = setTimeout(e.fn.appear.checkAll, 20)
        }
    }), e.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function (t, i) {
        var n = e.fn[i];
        n && (e.fn[i] = function () {
            var t = n.apply(this, arguments);
            return e.fn.appear.run(), t
        })
    })
}(jQuery), !function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    "use strict";
    var t = !1;
    e(window).on("load", function () {
        t = !0
    });
    var i = "animsition", n = {
        init: function (r) {
            r = e.extend({
                inClass: "fade-in",
                outClass: "fade-out",
                inDuration: 1500,
                outDuration: 800,
                linkElement: ".animsition-link",
                loading: !0,
                loadingParentElement: "body",
                loadingClass: "animsition-loading",
                loadingInner: "",
                timeout: !1,
                timeoutCountdown: 5e3,
                onLoadEvent: !0,
                browser: ["animation-duration", "-webkit-animation-duration"],
                overlay: !1,
                overlayClass: "animsition-overlay-slide",
                overlayParentElement: "body",
                transition: function (e) {
                    window.location.href = e
                }
            }, r), n.settings = {
                timer: !1,
                data: {
                    inClass: "animsition-in-class",
                    inDuration: "animsition-in-duration",
                    outClass: "animsition-out-class",
                    outDuration: "animsition-out-duration",
                    overlay: "animsition-overlay"
                },
                events: {
                    inStart: "animsition.inStart",
                    inEnd: "animsition.inEnd",
                    outStart: "animsition.outStart",
                    outEnd: "animsition.outEnd"
                }
            };
            var s = n.supportCheck.call(this, r);
            if (!s && r.browser.length > 0 && (!s || !this.length)) return "console" in window || (window.console = {}, window.console.log = function (e) {
                return e
            }), this.length || console.log("Animsition: Element does not exist on page."), s || console.log("Animsition: Does not support this browser."), n.destroy.call(this);
            var a = n.optionCheck.call(this, r);
            return a && e("." + r.overlayClass).length <= 0 && n.addOverlay.call(this, r), r.loading && e("." + r.loadingClass).length <= 0 && n.addLoading.call(this, r), this.each(function () {
                var s = this, a = e(this), o = e(window), l = e(document), u = a.data(i);
                u || (r = e.extend({}, r), a.data(i, {options: r}), r.timeout && n.addTimer.call(s), r.onLoadEvent && (t ? (n.settings.timer && clearTimeout(n.settings.timer), n["in"].call(s)) : o.on("load." + i, function () {
                    n.settings.timer && clearTimeout(n.settings.timer), n["in"].call(s)
                })), o.on("pageshow." + i, function (e) {
                    e.originalEvent.persisted && n["in"].call(s)
                }), o.on("unload." + i, function () {
                }), l.on("click." + i, r.linkElement, function (t) {
                    t.preventDefault();
                    var i = e(this), r = i.attr("href");
                    2 === t.which || t.metaKey || t.shiftKey || -1 !== navigator.platform.toUpperCase().indexOf("WIN") && t.ctrlKey ? window.open(r, "_blank") : n.out.call(s, i, r)
                }))
            })
        }, addOverlay: function (t) {
            e(t.overlayParentElement).prepend('<div class="' + t.overlayClass + '"></div>')
        }, addLoading: function (t) {
            e(t.loadingParentElement).append('<div class="' + t.loadingClass + '">' + t.loadingInner + "</div>")
        }, removeLoading: function () {
            var t = e(this), n = t.data(i).options, r = e(n.loadingParentElement).children("." + n.loadingClass);
            r.fadeOut().remove()
        }, addTimer: function () {
            var t = this, r = e(this), s = r.data(i).options;
            n.settings.timer = setTimeout(function () {
                n["in"].call(t), e(window).off("load." + i)
            }, s.timeoutCountdown)
        }, supportCheck: function (t) {
            var i = e(this), n = t.browser, r = n.length, s = !1;
            0 === r && (s = !0);
            for (var a = 0; r > a; a++) if ("string" == typeof i.css(n[a])) {
                s = !0;
                break
            }
            return s
        }, optionCheck: function (t) {
            var i, r = e(this);
            return i = t.overlay || r.data(n.settings.data.overlay) ? !0 : !1
        }, animationCheck: function (t, n, r) {
            var s = e(this), a = s.data(i).options, o = typeof t, l = !n && "number" === o,
                u = n && "string" === o && t.length > 0;
            return l || u ? t = t : n && r ? t = a.inClass : !n && r ? t = a.inDuration : n && !r ? t = a.outClass : n || r || (t = a.outDuration), t
        }, "in": function () {
            var t = this, r = e(this), s = r.data(i).options, a = r.data(n.settings.data.inDuration),
                o = r.data(n.settings.data.inClass), l = n.animationCheck.call(t, a, !1, !0),
                u = n.animationCheck.call(t, o, !0, !0), c = n.optionCheck.call(t, s), d = r.data(i).outClass;
            s.loading && n.removeLoading.call(t), d && r.removeClass(d), c ? n.inOverlay.call(t, u, l) : n.inDefault.call(t, u, l)
        }, inDefault: function (t, i) {
            var r = e(this);
            r.css({"animation-duration": i + "ms"}).addClass(t).trigger(n.settings.events.inStart).animateCallback(function () {
                r.removeClass(t).css({opacity: 1}).trigger(n.settings.events.inEnd)
            })
        }, inOverlay: function (t, r) {
            var s = e(this), a = s.data(i).options;
            s.css({opacity: 1}).trigger(n.settings.events.inStart), e(a.overlayParentElement).children("." + a.overlayClass).css({"animation-duration": r + "ms"}).addClass(t).animateCallback(function () {
                s.trigger(n.settings.events.inEnd)
            })
        }, out: function (t, r) {
            var s = this, a = e(this), o = a.data(i).options, l = t.data(n.settings.data.outClass),
                u = a.data(n.settings.data.outClass), c = t.data(n.settings.data.outDuration),
                d = a.data(n.settings.data.outDuration), h = l ? l : u, p = c ? c : d,
                f = n.animationCheck.call(s, h, !0, !1), m = n.animationCheck.call(s, p, !1, !1),
                g = n.optionCheck.call(s, o);
            a.data(i).outClass = f, g ? n.outOverlay.call(s, f, m, r) : n.outDefault.call(s, f, m, r)
        }, outDefault: function (t, r, s) {
            var a = e(this), o = a.data(i).options;
            a.css({"animation-duration": r + 1 + "ms"}).addClass(t).trigger(n.settings.events.outStart).animateCallback(function () {
                a.trigger(n.settings.events.outEnd), o.transition(s)
            })
        }, outOverlay: function (t, r, s) {
            var a = this, o = e(this), l = o.data(i).options, u = o.data(n.settings.data.inClass),
                c = n.animationCheck.call(a, u, !0, !0);
            e(l.overlayParentElement).children("." + l.overlayClass).css({"animation-duration": r + 1 + "ms"}).removeClass(c).addClass(t).trigger(n.settings.events.outStart).animateCallback(function () {
                o.trigger(n.settings.events.outEnd), l.transition(s)
            })
        }, destroy: function () {
            return this.each(function () {
                var t = e(this);
                e(window).off("." + i), t.css({opacity: 1}).removeData(i)
            })
        }
    };
    e.fn.animateCallback = function (t) {
        var i = "animationend webkitAnimationEnd";
        return this.each(function () {
            var n = e(this);
            n.on(i, function () {
                return n.off(i), t.call(this)
            })
        })
    }, e.fn.animsition = function (t) {
        return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? void e.error("Method " + t + " does not exist on jQuery." + i) : n.init.apply(this, arguments)
    }
}), !function (e, t, i) {
    "use strict";

    function n(i) {
        if (r = t.documentElement, s = t.body, W(), oe = this, i = i || {}, he = i.constants || {}, i.easing) for (var n in i.easing) U[n] = i.easing[n];
        be = i.edgeStrategy || "set", ce = {
            beforerender: i.beforerender,
            render: i.render,
            keyframe: i.keyframe
        }, de = i.forceHeight !== !1, de && (ze = i.scale || 1), pe = i.mobileDeceleration || C, me = i.smoothScrolling !== !1, ge = i.smoothScrollingDuration || E, ve = {targetTop: oe.getScrollTop()}, $e = (i.mobileCheck || function () {
            return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || e.opera)
        })(), $e ? (ue = t.getElementById(i.skrollrBody || S), ue && ae(), G(), je(r, [y, _], [b])) : je(r, [y, w], [b]), oe.refresh(), Te(e, "resize orientationchange", function () {
            var e = r.clientWidth, t = r.clientHeight;
            (t !== He || e !== Be) && (He = t, Be = e, Re = !0)
        });
        var a = q();
        return function o() {
            Z(), _e = a(o)
        }(), oe
    }

    var r, s, a = {
            get: function () {
                return oe
            }, init: function (e) {
                return oe || new n(e)
            }, VERSION: "0.6.29"
        }, o = Object.prototype.hasOwnProperty, l = e.Math, u = e.getComputedStyle, c = "touchstart", d = "touchmove",
        h = "touchcancel", p = "touchend", f = "skrollable", m = f + "-before", g = f + "-between", v = f + "-after",
        y = "skrollr", b = "no-" + y, w = y + "-desktop", _ = y + "-mobile", T = "linear", x = 1e3, C = .004,
        S = "skrollr-body", E = 200, P = "start", I = "end", k = "center", j = "bottom", A = "___skrollable_id",
        D = /^(?:input|textarea|button|select)$/i, M = /^\s+|\s+$/g,
        O = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
        Y = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi, z = /^(@?[a-z\-]+)\[(\w+)\]$/, Q = /-([a-z0-9_])/g,
        L = function (e, t) {
            return t.toUpperCase()
        }, N = /[\-+]?[\d]*\.?[\d]+/g, B = /\{\?\}/g, H = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
        R = /[a-z\-]+-gradient/g, F = "", $ = "", W = function () {
            var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
            if (u) {
                var t = u(s, null);
                for (var i in t) if (F = i.match(e) || +i == i && t[i].match(e)) break;
                if (!F) return void(F = $ = "");
                F = F[0], "-" === F.slice(0, 1) ? ($ = F, F = {
                    "-webkit-": "webkit",
                    "-moz-": "Moz",
                    "-ms-": "ms",
                    "-o-": "O"
                }[F]) : $ = "-" + F.toLowerCase() + "-"
            }
        }, q = function () {
            var t = e.requestAnimationFrame || e[F.toLowerCase() + "RequestAnimationFrame"], i = Me();
            return ($e || !t) && (t = function (t) {
                var n = Me() - i, r = l.max(0, 1e3 / 60 - n);
                return e.setTimeout(function () {
                    i = Me(), t()
                }, r)
            }), t
        }, V = function () {
            var t = e.cancelAnimationFrame || e[F.toLowerCase() + "CancelAnimationFrame"];
            return ($e || !t) && (t = function (t) {
                return e.clearTimeout(t)
            }), t
        }, U = {
            begin: function () {
                return 0
            }, end: function () {
                return 1
            }, linear: function (e) {
                return e
            }, quadratic: function (e) {
                return e * e
            }, cubic: function (e) {
                return e * e * e
            }, swing: function (e) {
                return -l.cos(e * l.PI) / 2 + .5
            }, sqrt: function (e) {
                return l.sqrt(e)
            }, outCubic: function (e) {
                return l.pow(e - 1, 3) + 1
            }, bounce: function (e) {
                var t;
                if (.5083 >= e) t = 3; else if (.8489 >= e) t = 9; else if (.96208 >= e) t = 27; else {
                    if (!(.99981 >= e)) return 1;
                    t = 91
                }
                return 1 - l.abs(3 * l.cos(e * t * 1.028) / t)
            }
        };
    n.prototype.refresh = function (e) {
        var n, r, s = !1;
        for (e === i ? (s = !0, le = [], Fe = 0, e = t.getElementsByTagName("*")) : e.length === i && (e = [e]), n = 0, r = e.length; r > n; n++) {
            var a = e[n], o = a, l = [], u = me, c = be, d = !1;
            if (s && A in a && delete a[A], a.attributes) {
                for (var h = 0, p = a.attributes.length; p > h; h++) {
                    var m = a.attributes[h];
                    if ("data-anchor-target" !== m.name) if ("data-smooth-scrolling" !== m.name) if ("data-edge-strategy" !== m.name) if ("data-emit-events" !== m.name) {
                        var g = m.name.match(O);
                        if (null !== g) {
                            var v = {props: m.value, element: a, eventType: m.name.replace(Q, L)};
                            l.push(v);
                            var y = g[1];
                            y && (v.constant = y.substr(1));
                            var b = g[2];
                            /p$/.test(b) ? (v.isPercentage = !0, v.offset = (0 | b.slice(0, -1)) / 100) : v.offset = 0 | b;
                            var w = g[3], _ = g[4] || w;
                            w && w !== P && w !== I ? (v.mode = "relative", v.anchors = [w, _]) : (v.mode = "absolute", w === I ? v.isEnd = !0 : v.isPercentage || (v.offset = v.offset * ze))
                        }
                    } else d = !0; else c = m.value; else u = "off" !== m.value; else if (o = t.querySelector(m.value), null === o) throw'Unable to find anchor target "' + m.value + '"'
                }
                if (l.length) {
                    var T, x, C;
                    !s && A in a ? (C = a[A], T = le[C].styleAttr, x = le[C].classAttr) : (C = a[A] = Fe++, T = a.style.cssText, x = ke(a)), le[C] = {
                        element: a,
                        styleAttr: T,
                        classAttr: x,
                        anchorTarget: o,
                        keyFrames: l,
                        smoothScrolling: u,
                        edgeStrategy: c,
                        emitEvents: d,
                        lastFrameIndex: -1
                    }, je(a, [f], [])
                }
            }
        }
        for (Ee(), n = 0, r = e.length; r > n; n++) {
            var S = le[e[n][A]];
            S !== i && (J(S), te(S))
        }
        return oe
    }, n.prototype.relativeToAbsolute = function (e, t, i) {
        var n = r.clientHeight, s = e.getBoundingClientRect(), a = s.top, o = s.bottom - s.top;
        return t === j ? a -= n : t === k && (a -= n / 2), i === j ? a += o : i === k && (a += o / 2), a += oe.getScrollTop(), a + .5 | 0
    }, n.prototype.animateTo = function (e, t) {
        t = t || {};
        var n = Me(), r = oe.getScrollTop(), s = t.duration === i ? x : t.duration;
        return fe = {
            startTop: r,
            topDiff: e - r,
            targetTop: e,
            duration: s,
            startTime: n,
            endTime: n + s,
            easing: U[t.easing || T],
            done: t.done
        }, fe.topDiff || (fe.done && fe.done.call(oe, !1), fe = i), oe
    }, n.prototype.stopAnimateTo = function () {
        fe && fe.done && fe.done.call(oe, !0), fe = i
    }, n.prototype.isAnimatingTo = function () {
        return !!fe
    }, n.prototype.isMobile = function () {
        return $e
    }, n.prototype.setScrollTop = function (t, i) {
        return ye = i === !0, $e ? We = l.min(l.max(t, 0), Ye) : e.scrollTo(0, t), oe
    }, n.prototype.getScrollTop = function () {
        return $e ? We : e.pageYOffset || r.scrollTop || s.scrollTop || 0
    }, n.prototype.getMaxScrollTop = function () {
        return Ye
    }, n.prototype.on = function (e, t) {
        return ce[e] = t, oe
    }, n.prototype.off = function (e) {
        return delete ce[e], oe
    }, n.prototype.destroy = function () {
        var e = V();
        e(_e), Ce(), je(r, [b], [y, w, _]);
        for (var t = 0, n = le.length; n > t; t++) se(le[t].element);
        r.style.overflow = s.style.overflow = "", r.style.height = s.style.height = "", ue && a.setStyle(ue, "transform", "none"), oe = i, ue = i, ce = i, de = i, Ye = 0, ze = 1, he = i, pe = i, Qe = "down", Le = -1, Be = 0, He = 0, Re = !1, fe = i, me = i, ge = i, ve = i, ye = i, Fe = 0, be = i, $e = !1, We = 0, we = i
    };
    var G = function () {
        var n, a, o, u, f, m, g, v, y, b, w, _;
        Te(r, [c, d, h, p].join(" "), function (e) {
            var r = e.changedTouches[0];
            for (u = e.target; 3 === u.nodeType;) u = u.parentNode;
            switch (f = r.clientY, m = r.clientX, b = e.timeStamp, D.test(u.tagName) || e.preventDefault(), e.type) {
                case c:
                    n && n.blur(), oe.stopAnimateTo(), n = u, a = g = f, o = m, y = b;
                    break;
                case d:
                    D.test(u.tagName) && t.activeElement !== u && e.preventDefault(), v = f - g, _ = b - w, oe.setScrollTop(We - v, !0), g = f, w = b;
                    break;
                default:
                case h:
                case p:
                    var s = a - f, T = o - m, x = T * T + s * s;
                    if (49 > x) {
                        if (!D.test(n.tagName)) {
                            n.focus();
                            var C = t.createEvent("MouseEvents");
                            C.initMouseEvent("click", !0, !0, e.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null), n.dispatchEvent(C)
                        }
                        return
                    }
                    n = i;
                    var S = v / _;
                    S = l.max(l.min(S, 3), -3);
                    var E = l.abs(S / pe), P = S * E + .5 * pe * E * E, I = oe.getScrollTop() - P, k = 0;
                    I > Ye ? (k = (Ye - I) / P, I = Ye) : 0 > I && (k = -I / P, I = 0), E *= 1 - k, oe.animateTo(I + .5 | 0, {
                        easing: "outCubic",
                        duration: E
                    })
            }
        }), e.scrollTo(0, 0), r.style.overflow = s.style.overflow = "hidden"
    }, X = function () {
        var e, t, i, n, s, a, o, u, c, d, h, p = r.clientHeight, f = Pe();
        for (u = 0, c = le.length; c > u; u++) for (e = le[u], t = e.element, i = e.anchorTarget, n = e.keyFrames, s = 0, a = n.length; a > s; s++) o = n[s], d = o.offset, h = f[o.constant] || 0, o.frame = d, o.isPercentage && (d *= p, o.frame = d), "relative" === o.mode && (se(t), o.frame = oe.relativeToAbsolute(i, o.anchors[0], o.anchors[1]) - d, se(t, !0)), o.frame += h, de && !o.isEnd && o.frame > Ye && (Ye = o.frame);
        for (Ye = l.max(Ye, Ie()), u = 0, c = le.length; c > u; u++) {
            for (e = le[u], n = e.keyFrames, s = 0, a = n.length; a > s; s++) o = n[s], h = f[o.constant] || 0, o.isEnd && (o.frame = Ye - o.offset + h);
            e.keyFrames.sort(Oe)
        }
    }, K = function (e, t) {
        for (var i = 0, n = le.length; n > i; i++) {
            var r, s, l = le[i], u = l.element, c = l.smoothScrolling ? e : t, d = l.keyFrames, h = d.length, p = d[0],
                y = d[d.length - 1], b = c < p.frame, w = c > y.frame, _ = b ? p : y, T = l.emitEvents,
                x = l.lastFrameIndex;
            if (b || w) {
                if (b && -1 === l.edge || w && 1 === l.edge) continue;
                switch (b ? (je(u, [m], [v, g]), T && x > -1 && (Se(u, p.eventType, Qe), l.lastFrameIndex = -1)) : (je(u, [v], [m, g]), T && h > x && (Se(u, y.eventType, Qe), l.lastFrameIndex = h)), l.edge = b ? -1 : 1, l.edgeStrategy) {
                    case"reset":
                        se(u);
                        continue;
                    case"ease":
                        c = _.frame;
                        break;
                    default:
                    case"set":
                        var C = _.props;
                        for (r in C) o.call(C, r) && (s = re(C[r].value), 0 === r.indexOf("@") ? u.setAttribute(r.substr(1), s) : a.setStyle(u, r, s));
                        continue
                }
            } else 0 !== l.edge && (je(u, [f, g], [m, v]), l.edge = 0);
            for (var S = 0; h - 1 > S; S++) if (c >= d[S].frame && c <= d[S + 1].frame) {
                var E = d[S], P = d[S + 1];
                for (r in E.props) if (o.call(E.props, r)) {
                    var I = (c - E.frame) / (P.frame - E.frame);
                    I = E.props[r].easing(I), s = ne(E.props[r].value, P.props[r].value, I), s = re(s), 0 === r.indexOf("@") ? u.setAttribute(r.substr(1), s) : a.setStyle(u, r, s)
                }
                T && x !== S && ("down" === Qe ? Se(u, E.eventType, Qe) : Se(u, P.eventType, Qe), l.lastFrameIndex = S);
                break
            }
        }
    }, Z = function () {
        Re && (Re = !1, Ee());
        var e, t, n = oe.getScrollTop(), r = Me();
        if (fe) r >= fe.endTime ? (n = fe.targetTop, e = fe.done, fe = i) : (t = fe.easing((r - fe.startTime) / fe.duration), n = fe.startTop + t * fe.topDiff | 0), oe.setScrollTop(n, !0); else if (!ye) {
            var s = ve.targetTop - n;
            s && (ve = {
                startTop: Le,
                topDiff: n - Le,
                targetTop: n,
                startTime: Ne,
                endTime: Ne + ge
            }), r <= ve.endTime && (t = U.sqrt((r - ve.startTime) / ge), n = ve.startTop + t * ve.topDiff | 0)
        }
        if (ye || Le !== n) {
            Qe = n > Le ? "down" : Le > n ? "up" : Qe, ye = !1;
            var o = {curTop: n, lastTop: Le, maxTop: Ye, direction: Qe},
                l = ce.beforerender && ce.beforerender.call(oe, o);
            l !== !1 && (K(n, oe.getScrollTop()), $e && ue && a.setStyle(ue, "transform", "translate(0, " + -We + "px) " + we), Le = n, ce.render && ce.render.call(oe, o)), e && e.call(oe, !1)
        }
        Ne = r
    }, J = function (e) {
        for (var t = 0, i = e.keyFrames.length; i > t; t++) {
            for (var n, r, s, a, o = e.keyFrames[t], l = {}; null !== (a = Y.exec(o.props));) s = a[1], r = a[2], n = s.match(z), null !== n ? (s = n[1], n = n[2]) : n = T, r = r.indexOf("!") ? ee(r) : [r.slice(1)], l[s] = {
                value: r,
                easing: U[n]
            };
            o.props = l
        }
    }, ee = function (e) {
        var t = [];
        return H.lastIndex = 0, e = e.replace(H, function (e) {
            return e.replace(N, function (e) {
                return e / 255 * 100 + "%"
            })
        }), $ && (R.lastIndex = 0, e = e.replace(R, function (e) {
            return $ + e
        })), e = e.replace(N, function (e) {
            return t.push(+e), "{?}"
        }), t.unshift(e), t
    }, te = function (e) {
        var t, i, n = {};
        for (t = 0, i = e.keyFrames.length; i > t; t++) ie(e.keyFrames[t], n);
        for (n = {}, t = e.keyFrames.length - 1; t >= 0; t--) ie(e.keyFrames[t], n)
    }, ie = function (e, t) {
        var i;
        for (i in t) o.call(e.props, i) || (e.props[i] = t[i]);
        for (i in e.props) t[i] = e.props[i]
    }, ne = function (e, t, i) {
        var n, r = e.length;
        if (r !== t.length) throw"Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
        var s = [e[0]];
        for (n = 1; r > n; n++) s[n] = e[n] + (t[n] - e[n]) * i;
        return s
    }, re = function (e) {
        var t = 1;
        return B.lastIndex = 0, e[0].replace(B, function () {
            return e[t++]
        })
    }, se = function (e, t) {
        e = [].concat(e);
        for (var i, n, r = 0, s = e.length; s > r; r++) n = e[r], i = le[n[A]], i && (t ? (n.style.cssText = i.dirtyStyleAttr, je(n, i.dirtyClassAttr)) : (i.dirtyStyleAttr = n.style.cssText, i.dirtyClassAttr = ke(n), n.style.cssText = i.styleAttr, je(n, i.classAttr)))
    }, ae = function () {
        we = "translateZ(0)", a.setStyle(ue, "transform", we);
        var e = u(ue), t = e.getPropertyValue("transform"), i = e.getPropertyValue($ + "transform"),
            n = t && "none" !== t || i && "none" !== i;
        n || (we = "")
    };
    a.setStyle = function (e, t, i) {
        var n = e.style;
        if (t = t.replace(Q, L).replace("-", ""), "zIndex" === t) isNaN(i) ? n[t] = i : n[t] = "" + (0 | i); else if ("float" === t) n.styleFloat = n.cssFloat = i; else try {
            F && (n[F + t.slice(0, 1).toUpperCase() + t.slice(1)] = i), n[t] = i
        } catch (r) {
        }
    };
    var oe, le, ue, ce, de, he, pe, fe, me, ge, ve, ye, be, we, _e, Te = a.addEvent = function (t, i, n) {
        var r = function (t) {
            return t = t || e.event, t.target || (t.target = t.srcElement), t.preventDefault || (t.preventDefault = function () {
                t.returnValue = !1, t.defaultPrevented = !0
            }), n.call(this, t)
        };
        i = i.split(" ");
        for (var s, a = 0, o = i.length; o > a; a++) s = i[a], t.addEventListener ? t.addEventListener(s, n, !1) : t.attachEvent("on" + s, r), qe.push({
            element: t,
            name: s,
            listener: n
        })
    }, xe = a.removeEvent = function (e, t, i) {
        t = t.split(" ");
        for (var n = 0, r = t.length; r > n; n++) e.removeEventListener ? e.removeEventListener(t[n], i, !1) : e.detachEvent("on" + t[n], i)
    }, Ce = function () {
        for (var e, t = 0, i = qe.length; i > t; t++) e = qe[t], xe(e.element, e.name, e.listener);
        qe = []
    }, Se = function (e, t, i) {
        ce.keyframe && ce.keyframe.call(oe, e, t, i)
    }, Ee = function () {
        var e = oe.getScrollTop();
        Ye = 0, de && !$e && (s.style.height = ""), X(), de && !$e && (s.style.height = Ye + r.clientHeight + "px"), $e ? oe.setScrollTop(l.min(oe.getScrollTop(), Ye)) : oe.setScrollTop(e, !0), ye = !0
    }, Pe = function () {
        var e, t, i = r.clientHeight, n = {};
        for (e in he) t = he[e], "function" == typeof t ? t = t.call(oe) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * i), n[e] = t;
        return n
    }, Ie = function () {
        var e, t = 0;
        return ue && (t = l.max(ue.offsetHeight, ue.scrollHeight)), e = l.max(t, s.scrollHeight, s.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight), e - r.clientHeight
    }, ke = function (t) {
        var i = "className";
        return e.SVGElement && t instanceof e.SVGElement && (t = t[i], i = "baseVal"), t[i]
    }, je = function (t, n, r) {
        var s = "className";
        if (e.SVGElement && t instanceof e.SVGElement && (t = t[s], s = "baseVal"), r === i) return void(t[s] = n);
        for (var a = t[s], o = 0, l = r.length; l > o; o++) a = De(a).replace(De(r[o]), " ");
        a = Ae(a);
        for (var u = 0, c = n.length; c > u; u++) -1 === De(a).indexOf(De(n[u])) && (a += " " + n[u]);
        t[s] = Ae(a)
    }, Ae = function (e) {
        return e.replace(M, "")
    }, De = function (e) {
        return " " + e + " "
    }, Me = Date.now || function () {
        return +new Date
    }, Oe = function (e, t) {
        return e.frame - t.frame
    }, Ye = 0, ze = 1, Qe = "down", Le = -1, Ne = Me(), Be = 0, He = 0, Re = !1, Fe = 0, $e = !1, We = 0, qe = [];
    "function" == typeof define && define.amd ? define([], function () {
        return a
    }) : "undefined" != typeof module && module.exports ? module.exports = a : e.skrollr = a
}(window, document), function () {
    var e = !1;
    window.JQClass = function () {
    }, JQClass.classes = {}, JQClass.extend = function t(i) {
        function n() {
            !e && this._init && this._init.apply(this, arguments)
        }

        var r = this.prototype;
        e = !0;
        var s = new this;
        e = !1;
        for (var a in i) s[a] = "function" == typeof i[a] && "function" == typeof r[a] ? function (e, t) {
            return function () {
                var i = this._super;
                this._super = function (t) {
                    return r[e].apply(this, t)
                };
                var n = t.apply(this, arguments);
                return this._super = i, n
            }
        }(a, i[a]) : i[a];
        return n.prototype = s, n.prototype.constructor = n, n.extend = t, n
    }
}(), function ($) {
    function camelCase(e) {
        return e.replace(/-([a-z])/g, function (e, t) {
            return t.toUpperCase()
        })
    }

    JQClass.classes.JQPlugin = JQClass.extend({
        name: "plugin",
        defaultOptions: {},
        regionalOptions: {},
        _getters: [],
        _getMarker: function () {
            return "is-" + this.name
        },
        _init: function () {
            $.extend(this.defaultOptions, this.regionalOptions && this.regionalOptions[""] || {});
            var e = camelCase(this.name);
            $[e] = this, $.fn[e] = function (t) {
                var i = Array.prototype.slice.call(arguments, 1);
                return $[e]._isNotChained(t, i) ? $[e][t].apply($[e], [this[0]].concat(i)) : this.each(function () {
                    if ("string" == typeof t) {
                        if ("_" === t[0] || !$[e][t]) throw"Unknown method: " + t;
                        $[e][t].apply($[e], [this].concat(i))
                    } else $[e]._attach(this, t)
                })
            }
        },
        setDefaults: function (e) {
            $.extend(this.defaultOptions, e || {})
        },
        _isNotChained: function (e, t) {
            return "option" === e && (0 === t.length || 1 === t.length && "string" == typeof t[0]) ? !0 : $.inArray(e, this._getters) > -1
        },
        _attach: function (e, t) {
            if (e = $(e), !e.hasClass(this._getMarker())) {
                e.addClass(this._getMarker()), t = $.extend({}, this.defaultOptions, this._getMetadata(e), t || {});
                var i = $.extend({name: this.name, elem: e, options: t}, this._instSettings(e, t));
                e.data(this.name, i), this._postAttach(e, i), this.option(e, t)
            }
        },
        _instSettings: function (e, t) {
            return {}
        },
        _postAttach: function (e, t) {
        },
        _getMetadata: function (d) {
            try {
                var f = d.data(this.name.toLowerCase()) || "";
                f = f.replace(/'/g, '"'), f = f.replace(/([a-zA-Z0-9]+):/g, function (e, t, i) {
                    var n = f.substring(0, i).match(/"/g);
                    return n && n.length % 2 !== 0 ? t + ":" : '"' + t + '":'
                }), f = $.parseJSON("{" + f + "}");
                for (var g in f) {
                    var h = f[g];
                    "string" == typeof h && h.match(/^new Date\((.*)\)$/) && (f[g] = eval(h))
                }
                return f
            } catch (e) {
                return {}
            }
        },
        _getInst: function (e) {
            return $(e).data(this.name) || {}
        },
        option: function (e, t, i) {
            e = $(e);
            var n = e.data(this.name);
            if (!t || "string" == typeof t && null == i) {
                var r = (n || {}).options;
                return r && t ? r[t] : r
            }
            if (e.hasClass(this._getMarker())) {
                var r = t || {};
                "string" == typeof t && (r = {}, r[t] = i), this._optionsChanged(e, n, r), $.extend(n.options, r)
            }
        },
        _optionsChanged: function (e, t, i) {
        },
        destroy: function (e) {
            e = $(e), e.hasClass(this._getMarker()) && (this._preDestroy(e, this._getInst(e)), e.removeData(this.name).removeClass(this._getMarker()))
        },
        _preDestroy: function (e, t) {
        }
    }), $.JQPlugin = {
        createPlugin: function (e, t) {
            "object" == typeof e && (t = e, e = "JQPlugin"), e = camelCase(e);
            var i = camelCase(t.name);
            JQClass.classes[i] = JQClass.classes[e].extend(t), new JQClass.classes[i]
        }
    }
}(jQuery), !function (e) {
    "use strict";
    var t = "countdown", i = 0, n = 1, r = 2, s = 3, a = 4, o = 5, l = 6;
    e.JQPlugin.createPlugin({
        name: t,
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
        _rtlClass: t + "-rtl",
        _sectionClass: t + "-section",
        _amountClass: t + "-amount",
        _periodClass: t + "-period",
        _rowClass: t + "-row",
        _holdingClass: t + "-holding",
        _showClass: t + "-show",
        _descrClass: t + "-descr",
        _timerElems: [],
        _init: function () {
            function t(e) {
                var o = 1e12 > e ? r ? window.performance.now() + window.performance.timing.navigationStart : n() : e || n();
                o - a >= 1e3 && (i._updateElems(), a = o), s(t)
            }

            var i = this;
            this._super(), this._serverSyncs = [];
            var n = "function" == typeof Date.now ? Date.now : function () {
                    return (new Date).getTime()
                }, r = window.performance && "function" == typeof window.performance.now,
                s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || null,
                a = 0;
            !s || e.noRequestAnimationFrame ? (e.noRequestAnimationFrame = null, e.countdown._timer = setInterval(function () {
                i._updateElems()
            }, 1e3)) : (a = window.animationStartTime || window.webkitAnimationStartTime || window.mozAnimationStartTime || window.oAnimationStartTime || window.msAnimationStartTime || n(), s(t))
        },
        UTCDate: function (e, t, i, n, r, s, a, o) {
            "object" == typeof t && t instanceof Date && (o = t.getMilliseconds(), a = t.getSeconds(), s = t.getMinutes(), r = t.getHours(), n = t.getDate(), i = t.getMonth(), t = t.getFullYear());
            var l = new Date;
            return l.setUTCFullYear(t), l.setUTCDate(1), l.setUTCMonth(i || 0), l.setUTCDate(n || 1), l.setUTCHours(r || 0), l.setUTCMinutes((s || 0) - (Math.abs(e) < 30 ? 60 * e : e)), l.setUTCSeconds(a || 0), l.setUTCMilliseconds(o || 0), l
        },
        periodsToSeconds: function (e) {
            return 31557600 * e[0] + 2629800 * e[1] + 604800 * e[2] + 86400 * e[3] + 3600 * e[4] + 60 * e[5] + e[6]
        },
        resync: function () {
            var t = this;
            e("." + this._getMarker()).each(function () {
                var i = e.data(this, t.name);
                if (i.options.serverSync) {
                    for (var n = null, r = 0; r < t._serverSyncs.length; r++) if (t._serverSyncs[r][0] === i.options.serverSync) {
                        n = t._serverSyncs[r];
                        break
                    }
                    if (t._eqNull(n[2])) {
                        var s = e.isFunction(i.options.serverSync) ? i.options.serverSync.apply(this, []) : null;
                        n[2] = (s ? (new Date).getTime() - s.getTime() : 0) - n[1]
                    }
                    i._since && i._since.setMilliseconds(i._since.getMilliseconds() + n[2]), i._until.setMilliseconds(i._until.getMilliseconds() + n[2])
                }
            });
            for (var i = 0; i < t._serverSyncs.length; i++) t._eqNull(t._serverSyncs[i][2]) || (t._serverSyncs[i][1] += t._serverSyncs[i][2], delete t._serverSyncs[i][2])
        },
        _instSettings: function (e, t) {
            return {_periods: [0, 0, 0, 0, 0, 0, 0]}
        },
        _addElem: function (e) {
            this._hasElem(e) || this._timerElems.push(e)
        },
        _hasElem: function (t) {
            return e.inArray(t, this._timerElems) > -1
        },
        _removeElem: function (t) {
            this._timerElems = e.map(this._timerElems, function (e) {
                return e === t ? null : e
            })
        },
        _updateElems: function () {
            for (var e = this._timerElems.length - 1; e >= 0; e--) this._updateCountdown(this._timerElems[e])
        },
        _optionsChanged: function (t, i, n) {
            n.layout && (n.layout = n.layout.replace(/&lt;/g, "<").replace(/&gt;/g, ">")), this._resetExtraLabels(i.options, n);
            var r = i.options.timezone !== n.timezone;
            e.extend(i.options, n), this._adjustSettings(t, i, !this._eqNull(n.until) || !this._eqNull(n.since) || r);
            var s = new Date;
            (i._since && i._since < s || i._until && i._until > s) && this._addElem(t[0]), this._updateCountdown(t, i)
        },
        _updateCountdown: function (t, i) {
            if (t = t.jquery ? t : e(t), i = i || this._getInst(t)) {
                if (t.html(this._generateHTML(i)).toggleClass(this._rtlClass, i.options.isRTL), "pause" !== i._hold && e.isFunction(i.options.onTick)) {
                    var n = "lap" !== i._hold ? i._periods : this._calculatePeriods(i, i._show, i.options.significant, new Date);
                    1 !== i.options.tickInterval && this.periodsToSeconds(n) % i.options.tickInterval !== 0 || i.options.onTick.apply(t[0], [n])
                }
                var r = "pause" !== i._hold && (i._since ? i._now.getTime() < i._since.getTime() : i._now.getTime() >= i._until.getTime());
                if (r && !i._expiring) {
                    if (i._expiring = !0, this._hasElem(t[0]) || i.options.alwaysExpire) {
                        if (this._removeElem(t[0]), e.isFunction(i.options.onExpiry) && i.options.onExpiry.apply(t[0], []), i.options.expiryText) {
                            var s = i.options.layout;
                            i.options.layout = i.options.expiryText, this._updateCountdown(t[0], i), i.options.layout = s
                        }
                        i.options.expiryUrl && (window.location = i.options.expiryUrl)
                    }
                    i._expiring = !1
                } else "pause" === i._hold && this._removeElem(t[0])
            }
        },
        _resetExtraLabels: function (e, t) {
            var i = null;
            for (i in t) i.match(/[Ll]abels[02-9]|compactLabels1/) && (e[i] = t[i]);
            for (i in e) i.match(/[Ll]abels[02-9]|compactLabels1/) && "undefined" == typeof t[i] && (e[i] = null)
        },
        _eqNull: function (e) {
            return "undefined" == typeof e || null === e
        },
        _adjustSettings: function (t, i, n) {
            for (var r = null, s = 0; s < this._serverSyncs.length; s++) if (this._serverSyncs[s][0] === i.options.serverSync) {
                r = this._serverSyncs[s][1];
                break
            }
            var a = null, o = null;
            if (this._eqNull(r)) {
                var l = e.isFunction(i.options.serverSync) ? i.options.serverSync.apply(t[0], []) : null;
                a = new Date, o = l ? a.getTime() - l.getTime() : 0, this._serverSyncs.push([i.options.serverSync, o])
            } else a = new Date, o = i.options.serverSync ? r : 0;
            var u = i.options.timezone;
            u = this._eqNull(u) ? -a.getTimezoneOffset() : u, (n || !n && this._eqNull(i._until) && this._eqNull(i._since)) && (i._since = i.options.since, this._eqNull(i._since) || (i._since = this.UTCDate(u, this._determineTime(i._since, null)), i._since && o && i._since.setMilliseconds(i._since.getMilliseconds() + o)), i._until = this.UTCDate(u, this._determineTime(i.options.until, a)), o && i._until.setMilliseconds(i._until.getMilliseconds() + o)), i._show = this._determineShow(i)
        },
        _preDestroy: function (e, t) {
            this._removeElem(e[0]), e.empty()
        },
        pause: function (e) {
            this._hold(e, "pause")
        },
        lap: function (e) {
            this._hold(e, "lap")
        },
        resume: function (e) {
            this._hold(e, null)
        },
        toggle: function (t) {
            var i = e.data(t, this.name) || {};
            this[i._hold ? "resume" : "pause"](t)
        },
        toggleLap: function (t) {
            var i = e.data(t, this.name) || {};
            this[i._hold ? "resume" : "lap"](t)
        },
        _hold: function (t, i) {
            var n = e.data(t, this.name);
            if (n) {
                if ("pause" === n._hold && !i) {
                    n._periods = n._savePeriods;
                    var r = n._since ? "-" : "+";
                    n[n._since ? "_since" : "_until"] = this._determineTime(r + n._periods[0] + "y" + r + n._periods[1] + "o" + r + n._periods[2] + "w" + r + n._periods[3] + "d" + r + n._periods[4] + "h" + r + n._periods[5] + "m" + r + n._periods[6] + "s"), this._addElem(t)
                }
                n._hold = i, n._savePeriods = "pause" === i ? n._periods : null, e.data(t, this.name, n), this._updateCountdown(t, n)
            }
        },
        getTimes: function (t) {
            var i = e.data(t, this.name);
            return i ? "pause" === i._hold ? i._savePeriods : i._hold ? this._calculatePeriods(i, i._show, i.options.significant, new Date) : i._periods : null
        },
        _determineTime: function (e, t) {
            var i = this, n = function (e) {
                var t = new Date;
                return t.setTime(t.getTime() + 1e3 * e), t
            }, r = function (e) {
                e = e.toLowerCase();
                for (var t = new Date, n = t.getFullYear(), r = t.getMonth(), s = t.getDate(), a = t.getHours(), o = t.getMinutes(), l = t.getSeconds(), u = /([+-]?[0-9]+)\s*(s|m|h|d|w|o|y)?/g, c = u.exec(e); c;) {
                    switch (c[2] || "s") {
                        case"s":
                            l += parseInt(c[1], 10);
                            break;
                        case"m":
                            o += parseInt(c[1], 10);
                            break;
                        case"h":
                            a += parseInt(c[1], 10);
                            break;
                        case"d":
                            s += parseInt(c[1], 10);
                            break;
                        case"w":
                            s += 7 * parseInt(c[1], 10);
                            break;
                        case"o":
                            r += parseInt(c[1], 10), s = Math.min(s, i._getDaysInMonth(n, r));
                            break;
                        case"y":
                            n += parseInt(c[1], 10), s = Math.min(s, i._getDaysInMonth(n, r))
                    }
                    c = u.exec(e)
                }
                return new Date(n, r, s, a, o, l, 0)
            }, s = this._eqNull(e) ? t : "string" == typeof e ? r(e) : "number" == typeof e ? n(e) : e;
            return s && s.setMilliseconds(0), s
        },
        _getDaysInMonth: function (e, t) {
            return 32 - new Date(e, t, 32).getDate()
        },
        _normalLabels: function (e) {
            return e
        },
        _generateHTML: function (t) {
            var u = this;
            t._periods = t._hold ? t._periods : this._calculatePeriods(t, t._show, t.options.significant, new Date);
            var c = !1, d = 0, h = t.options.significant, p = e.extend({}, t._show), f = null;
            for (f = i; l >= f; f++) c = c || "?" === t._show[f] && t._periods[f] > 0, p[f] = "?" !== t._show[f] || c ? t._show[f] : null, d += p[f] ? 1 : 0, h -= t._periods[f] > 0 ? 1 : 0;
            var m = [!1, !1, !1, !1, !1, !1, !1];
            for (f = l; f >= i; f--) t._show[f] && (t._periods[f] ? m[f] = !0 : (m[f] = h > 0, h--));
            var g = t.options.compact ? t.options.compactLabels : t.options.labels,
                v = t.options.whichLabels || this._normalLabels, y = function (e) {
                    var i = t.options["compactLabels" + v(t._periods[e])];
                    return p[e] ? u._translateDigits(t, t._periods[e]) + (i ? i[e] : g[e]) + " " : ""
                }, b = t.options.padZeroes ? 2 : 1, w = function (e) {
                    var i = t.options["labels" + v(t._periods[e])];
                    return !t.options.significant && p[e] || t.options.significant && m[e] ? '<span class="' + u._sectionClass + '"><span class="' + u._amountClass + '">' + u._minDigits(t, t._periods[e], b) + '</span><span class="' + u._periodClass + '">' + (i ? i[e] : g[e]) + "</span></span>" : ""
                };
            return t.options.layout ? this._buildLayout(t, p, t.options.layout, t.options.compact, t.options.significant, m) : (t.options.compact ? '<span class="' + this._rowClass + " " + this._amountClass + (t._hold ? " " + this._holdingClass : "") + '">' + y(i) + y(n) + y(r) + y(s) + (p[a] ? this._minDigits(t, t._periods[a], 2) : "") + (p[o] ? (p[a] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[o], 2) : "") + (p[l] ? (p[a] || p[o] ? t.options.timeSeparator : "") + this._minDigits(t, t._periods[l], 2) : "") : '<span class="' + this._rowClass + " " + this._showClass + (t.options.significant || d) + (t._hold ? " " + this._holdingClass : "") + '">' + w(i) + w(n) + w(r) + w(s) + w(a) + w(o) + w(l)) + "</span>" + (t.options.description ? '<span class="' + this._rowClass + " " + this._descrClass + '">' + t.options.description + "</span>" : "")
        },
        _buildLayout: function (t, u, c, d, h, p) {
            for (var f = t.options[d ? "compactLabels" : "labels"], m = t.options.whichLabels || this._normalLabels, g = function (e) {
                return (t.options[(d ? "compactLabels" : "labels") + m(t._periods[e])] || f)[e]
            }, v = function (e, i) {
                return t.options.digits[Math.floor(e / i) % 10]
            }, y = {
                desc: t.options.description,
                sep: t.options.timeSeparator,
                yl: g(i),
                yn: this._minDigits(t, t._periods[i], 1),
                ynn: this._minDigits(t, t._periods[i], 2),
                ynnn: this._minDigits(t, t._periods[i], 3),
                y1: v(t._periods[i], 1),
                y10: v(t._periods[i], 10),
                y100: v(t._periods[i], 100),
                y1000: v(t._periods[i], 1e3),
                ol: g(n),
                on: this._minDigits(t, t._periods[n], 1),
                onn: this._minDigits(t, t._periods[n], 2),
                onnn: this._minDigits(t, t._periods[n], 3),
                o1: v(t._periods[n], 1),
                o10: v(t._periods[n], 10),
                o100: v(t._periods[n], 100),
                o1000: v(t._periods[n], 1e3),
                wl: g(r),
                wn: this._minDigits(t, t._periods[r], 1),
                wnn: this._minDigits(t, t._periods[r], 2),
                wnnn: this._minDigits(t, t._periods[r], 3),
                w1: v(t._periods[r], 1),
                w10: v(t._periods[r], 10),
                w100: v(t._periods[r], 100),
                w1000: v(t._periods[r], 1e3),
                dl: g(s),
                dn: this._minDigits(t, t._periods[s], 1),
                dnn: this._minDigits(t, t._periods[s], 2),
                dnnn: this._minDigits(t, t._periods[s], 3),
                d1: v(t._periods[s], 1),
                d10: v(t._periods[s], 10),
                d100: v(t._periods[s], 100),
                d1000: v(t._periods[s], 1e3),
                hl: g(a),
                hn: this._minDigits(t, t._periods[a], 1),
                hnn: this._minDigits(t, t._periods[a], 2),
                hnnn: this._minDigits(t, t._periods[a], 3),
                h1: v(t._periods[a], 1),
                h10: v(t._periods[a], 10),
                h100: v(t._periods[a], 100),
                h1000: v(t._periods[a], 1e3),
                ml: g(o),
                mn: this._minDigits(t, t._periods[o], 1),
                mnn: this._minDigits(t, t._periods[o], 2),
                mnnn: this._minDigits(t, t._periods[o], 3),
                m1: v(t._periods[o], 1),
                m10: v(t._periods[o], 10),
                m100: v(t._periods[o], 100),
                m1000: v(t._periods[o], 1e3),
                sl: g(l),
                sn: this._minDigits(t, t._periods[l], 1),
                snn: this._minDigits(t, t._periods[l], 2),
                snnn: this._minDigits(t, t._periods[l], 3),
                s1: v(t._periods[l], 1),
                s10: v(t._periods[l], 10),
                s100: v(t._periods[l], 100),
                s1000: v(t._periods[l], 1e3)
            }, b = c, w = i; l >= w; w++) {
                var _ = "yowdhms".charAt(w), T = new RegExp("\\{" + _ + "<\\}([\\s\\S]*)\\{" + _ + ">\\}", "g");
                b = b.replace(T, !h && u[w] || h && p[w] ? "$1" : "")
            }
            return e.each(y, function (e, t) {
                var i = new RegExp("\\{" + e + "\\}", "g");
                b = b.replace(i, t)
            }), b
        },
        _minDigits: function (e, t, i) {
            return t = "" + t, t.length >= i ? this._translateDigits(e, t) : (t = "0000000000" + t, this._translateDigits(e, t.substr(t.length - i)))
        },
        _translateDigits: function (e, t) {
            return ("" + t).replace(/[0-9]/g, function (t) {
                return e.options.digits[t]
            })
        },
        _determineShow: function (e) {
            var t = e.options.format, u = [];
            return u[i] = t.match("y") ? "?" : t.match("Y") ? "!" : null, u[n] = t.match("o") ? "?" : t.match("O") ? "!" : null, u[r] = t.match("w") ? "?" : t.match("W") ? "!" : null, u[s] = t.match("d") ? "?" : t.match("D") ? "!" : null, u[a] = t.match("h") ? "?" : t.match("H") ? "!" : null, u[o] = t.match("m") ? "?" : t.match("M") ? "!" : null, u[l] = t.match("s") ? "?" : t.match("S") ? "!" : null, u
        },
        _calculatePeriods: function (e, t, u, c) {
            e._now = c, e._now.setMilliseconds(0);
            var d = new Date(e._now.getTime());
            e._since ? c.getTime() < e._since.getTime() ? e._now = c = d : c = e._since : (d.setTime(e._until.getTime()), c.getTime() > e._until.getTime() && (e._now = c = d));
            var h = [0, 0, 0, 0, 0, 0, 0];
            if (t[i] || t[n]) {
                var p = this._getDaysInMonth(c.getFullYear(), c.getMonth()),
                    f = this._getDaysInMonth(d.getFullYear(), d.getMonth()),
                    m = d.getDate() === c.getDate() || d.getDate() >= Math.min(p, f) && c.getDate() >= Math.min(p, f),
                    g = function (e) {
                        return 60 * (60 * e.getHours() + e.getMinutes()) + e.getSeconds()
                    },
                    v = Math.max(0, 12 * (d.getFullYear() - c.getFullYear()) + d.getMonth() - c.getMonth() + (d.getDate() < c.getDate() && !m || m && g(d) < g(c) ? -1 : 0));
                h[i] = t[i] ? Math.floor(v / 12) : 0, h[n] = t[n] ? v - 12 * h[i] : 0, c = new Date(c.getTime());
                var y = c.getDate() === p, b = this._getDaysInMonth(c.getFullYear() + h[i], c.getMonth() + h[n]);
                c.getDate() > b && c.setDate(b), c.setFullYear(c.getFullYear() + h[i]), c.setMonth(c.getMonth() + h[n]), y && c.setDate(b)
            }
            var w = Math.floor((d.getTime() - c.getTime()) / 1e3), _ = null, T = function (e, i) {
                h[e] = t[e] ? Math.floor(w / i) : 0, w -= h[e] * i
            };
            if (T(r, 604800), T(s, 86400), T(a, 3600), T(o, 60), T(l, 1), w > 0 && !e._since) {
                var x = [1, 12, 4.3482, 7, 24, 60, 60], C = l, S = 1;
                for (_ = l; _ >= i; _--) t[_] && (h[C] >= S && (h[C] = 0, w = 1), w > 0 && (h[_]++, w = 0, C = _, S = 1)), S *= x[_]
            }
            if (u) for (_ = i; l >= _; _++) u && h[_] ? u-- : u || (h[_] = 0);
            return h
        }
    })
}(jQuery), function (e) {
    function t(e, t) {
        return e.toFixed(t.decimals)
    }

    e.fn.countTo = function (t) {
        return t = t || {}, e(this).each(function () {
            function i() {
                c += a, u++, n(c), "function" == typeof r.onUpdate && r.onUpdate.call(o, c), u >= s && (l.removeData("countTo"), clearInterval(d.interval), c = r.to, "function" == typeof r.onComplete && r.onComplete.call(o, c))
            }

            function n(e) {
                var t = r.formatter.call(o, e, r);
                l.text(t)
            }

            var r = e.extend({}, e.fn.countTo.defaults, {
                    from: e(this).data("from"),
                    to: e(this).data("to"),
                    speed: e(this).data("speed"),
                    refreshInterval: e(this).data("refresh-interval"),
                    decimals: e(this).data("decimals")
                }, t), s = Math.ceil(r.speed / r.refreshInterval), a = (r.to - r.from) / s, o = this, l = e(this), u = 0,
                c = r.from, d = l.data("countTo") || {};
            l.data("countTo", d), d.interval && clearInterval(d.interval), d.interval = setInterval(i, r.refreshInterval), n(c)
        })
    }, e.fn.countTo.defaults = {
        from: 0,
        to: 0,
        speed: 1e3,
        refreshInterval: 100,
        decimals: 0,
        formatter: t,
        onUpdate: null,
        onComplete: null
    }
}(jQuery), !function (e, t, i, n) {
    function r(t, i) {
        this.settings = null, this.options = e.extend({}, r.Defaults, i), this.$element = e(t), this._handlers = {}, this._plugins = {}, this._supress = {}, this._current = null, this._speed = null, this._coordinates = [], this._breakpoint = null, this._width = null, this._items = [], this._clones = [], this._mergers = [], this._widths = [], this._invalidated = {}, this._pipe = [], this._drag = {
            time: null,
            target: null,
            pointer: null,
            stage: {start: null, current: null},
            direction: null
        }, this._states = {
            current: {},
            tags: {initializing: ["busy"], animating: ["busy"], dragging: ["interacting"]}
        }, e.each(["onResize", "onThrottledResize"], e.proxy(function (t, i) {
            this._handlers[i] = e.proxy(this[i], this)
        }, this)), e.each(r.Plugins, e.proxy(function (e, t) {
            this._plugins[e.charAt(0).toLowerCase() + e.slice(1)] = new t(this)
        }, this)), e.each(r.Workers, e.proxy(function (t, i) {
            this._pipe.push({filter: i.filter, run: e.proxy(i.run, this)})
        }, this)), this.setup(), this.initialize()
    }

    r.Defaults = {
        items: 3,
        loop: !1,
        center: !1,
        rewind: !1,
        mouseDrag: !0,
        touchDrag: !0,
        pullDrag: !0,
        freeDrag: !1,
        margin: 0,
        stagePadding: 0,
        merge: !1,
        mergeFit: !0,
        autoWidth: !1,
        startPosition: 0,
        rtl: !1,
        smartSpeed: 250,
        fluidSpeed: !1,
        dragEndSpeed: !1,
        responsive: {},
        responsiveRefreshRate: 200,
        responsiveBaseElement: t,
        fallbackEasing: "swing",
        info: !1,
        nestedItemSelector: !1,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab"
    }, r.Width = {Default: "default", Inner: "inner", Outer: "outer"}, r.Type = {
        Event: "event",
        State: "state"
    }, r.Plugins = {}, r.Workers = [{
        filter: ["width", "settings"], run: function () {
            this._width = this.$element.width()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            e.current = this._items && this._items[this.relative(this._current)]
        }
    }, {
        filter: ["items", "settings"], run: function () {
            this.$stage.children(".cloned").remove()
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            var t = this.settings.margin || "", i = !this.settings.autoWidth, n = this.settings.rtl,
                r = {width: "auto", "margin-left": n ? t : "", "margin-right": n ? "" : t};
            !i && this.$stage.children().css(r), e.css = r
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            var t = (this.width() / this.settings.items).toFixed(3) - this.settings.margin, i = null,
                n = this._items.length, r = !this.settings.autoWidth, s = [];
            for (e.items = {
                merge: !1,
                width: t
            }; n--;) i = this._mergers[n], i = this.settings.mergeFit && Math.min(i, this.settings.items) || i, e.items.merge = i > 1 || e.items.merge, s[n] = r ? t * i : this._items[n].width();
            this._widths = s
        }
    }, {
        filter: ["items", "settings"], run: function () {
            var t = [], i = this._items, n = this.settings, r = Math.max(2 * n.items, 4),
                s = 2 * Math.ceil(i.length / 2), a = n.loop && i.length ? n.rewind ? r : Math.max(r, s) : 0, o = "",
                l = "";
            for (a /= 2; a > 0;) t.push(this.normalize(t.length / 2, !0)), o += i[t[t.length - 1]][0].outerHTML, t.push(this.normalize(i.length - 1 - (t.length - 1) / 2, !0)), l = i[t[t.length - 1]][0].outerHTML + l, a -= 1;
            this._clones = t, e(o).addClass("cloned").appendTo(this.$stage), e(l).addClass("cloned").prependTo(this.$stage)
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            for (var e = this.settings.rtl ? 1 : -1, t = this._clones.length + this._items.length, i = -1, n = 0, r = 0, s = []; ++i < t;) n = s[i - 1] || 0, r = this._widths[this.relative(i)] + this.settings.margin, s.push(n + r * e);
            this._coordinates = s
        }
    }, {
        filter: ["width", "items", "settings"], run: function () {
            var e = this.settings.stagePadding, t = this._coordinates, i = {
                width: Math.ceil(Math.abs(t[t.length - 1])) + 2 * e,
                "padding-left": e || "",
                "padding-right": e || ""
            };
            this.$stage.css(i)
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            var t = this._coordinates.length, i = !this.settings.autoWidth, n = this.$stage.children();
            if (i && e.items.merge) for (; t--;) e.css.width = this._widths[this.relative(t)], n.eq(t).css(e.css); else i && (e.css.width = e.items.width, n.css(e.css))
        }
    }, {
        filter: ["items"], run: function () {
            this._coordinates.length < 1 && this.$stage.removeAttr("style")
        }
    }, {
        filter: ["width", "items", "settings"], run: function (e) {
            e.current = e.current ? this.$stage.children().index(e.current) : 0, e.current = Math.max(this.minimum(), Math.min(this.maximum(), e.current)), this.reset(e.current)
        }
    }, {
        filter: ["position"], run: function () {
            this.animate(this.coordinates(this._current))
        }
    }, {
        filter: ["width", "position", "items", "settings"], run: function () {
            var e, t, i, n, r = this.settings.rtl ? 1 : -1, s = 2 * this.settings.stagePadding,
                a = this.coordinates(this.current()) + s, o = a + this.width() * r, l = [];
            for (i = 0, n = this._coordinates.length; n > i; i++) e = this._coordinates[i - 1] || 0, t = Math.abs(this._coordinates[i]) + s * r, (this.op(e, "<=", a) && this.op(e, ">", o) || this.op(t, "<", a) && this.op(t, ">", o)) && l.push(i);
            this.$stage.children(".active").removeClass("active"), this.$stage.children(":eq(" + l.join("), :eq(") + ")").addClass("active"), this.$stage.children(".center").removeClass("center"), this.settings.center && this.$stage.children().eq(this.current()).addClass("center")
        }
    }], r.prototype.initialize = function () {
        if (this.enter("initializing"), this.trigger("initialize"), this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl), this.settings.autoWidth && !this.is("pre-loading")) {
            var t, i, r;
            t = this.$element.find("img"), i = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : n, r = this.$element.children(i).width(), t.length && 0 >= r && this.preloadAutoWidthImages(t)
        }
        this.$element.addClass(this.options.loadingClass), this.$stage = e("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'), this.$element.append(this.$stage.parent()), this.replace(this.$element.children().not(this.$stage.parent())), this.$element.is(":visible") ? this.refresh() : this.invalidate("width"), this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass), this.registerEventHandlers(), this.leave("initializing"), this.trigger("initialized")
    }, r.prototype.setup = function () {
        var t = this.viewport(), i = this.options.responsive, n = -1, r = null;
        i ? (e.each(i, function (e) {
            t >= e && e > n && (n = Number(e))
        }), r = e.extend({}, this.options, i[n]), "function" == typeof r.stagePadding && (r.stagePadding = r.stagePadding()), delete r.responsive, r.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s", "g"), "$1" + n))) : r = e.extend({}, this.options), this.trigger("change", {
            property: {
                name: "settings",
                value: r
            }
        }), this._breakpoint = n, this.settings = r, this.invalidate("settings"), this.trigger("changed", {
            property: {
                name: "settings",
                value: this.settings
            }
        })
    }, r.prototype.optionsLogic = function () {
        this.settings.autoWidth && (this.settings.stagePadding = !1, this.settings.merge = !1)
    }, r.prototype.prepare = function (t) {
        var i = this.trigger("prepare", {content: t});
        return i.data || (i.data = e("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(t)), this.trigger("prepared", {content: i.data}), i.data
    }, r.prototype.update = function () {
        for (var t = 0, i = this._pipe.length, n = e.proxy(function (e) {
            return this[e]
        }, this._invalidated), r = {}; i > t;) (this._invalidated.all || e.grep(this._pipe[t].filter, n).length > 0) && this._pipe[t].run(r), t++;
        this._invalidated = {}, !this.is("valid") && this.enter("valid")
    }, r.prototype.width = function (e) {
        switch (e = e || r.Width.Default) {
            case r.Width.Inner:
            case r.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
        }
    }, r.prototype.refresh = function () {
        this.enter("refreshing"), this.trigger("refresh"), this.setup(), this.optionsLogic(), this.$element.addClass(this.options.refreshClass), this.update(), this.$element.removeClass(this.options.refreshClass), this.leave("refreshing"), this.trigger("refreshed")
    }, r.prototype.onThrottledResize = function () {
        t.clearTimeout(this.resizeTimer), this.resizeTimer = t.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
    }, r.prototype.onResize = function () {
        return this._items.length ? this._width === this.$element.width() ? !1 : this.$element.is(":visible") ? (this.enter("resizing"), this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"), !1) : (this.invalidate("width"), this.refresh(), this.leave("resizing"), void this.trigger("resized"))) : !1 : !1
    }, r.prototype.registerEventHandlers = function () {
        e.support.transition && this.$stage.on(e.support.transition.end + ".owl.core", e.proxy(this.onTransitionEnd, this)), this.settings.responsive !== !1 && this.on(t, "resize", this._handlers.onThrottledResize), this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass), this.$stage.on("mousedown.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("dragstart.owl.core selectstart.owl.core", function () {
            return !1
        })), this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", e.proxy(this.onDragStart, this)), this.$stage.on("touchcancel.owl.core", e.proxy(this.onDragEnd, this)))
    }, r.prototype.onDragStart = function (t) {
        var n = null;
        3 !== t.which && (e.support.transform ? (n = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","), n = {
            x: n[16 === n.length ? 12 : 4],
            y: n[16 === n.length ? 13 : 5]
        }) : (n = this.$stage.position(), n = {
            x: this.settings.rtl ? n.left + this.$stage.width() - this.width() + this.settings.margin : n.left,
            y: n.top
        }), this.is("animating") && (e.support.transform ? this.animate(n.x) : this.$stage.stop(), this.invalidate("position")), this.$element.toggleClass(this.options.grabClass, "mousedown" === t.type), this.speed(0), this._drag.time = (new Date).getTime(), this._drag.target = e(t.target), this._drag.stage.start = n, this._drag.stage.current = n, this._drag.pointer = this.pointer(t), e(i).on("mouseup.owl.core touchend.owl.core", e.proxy(this.onDragEnd, this)), e(i).one("mousemove.owl.core touchmove.owl.core", e.proxy(function (t) {
            var n = this.difference(this._drag.pointer, this.pointer(t));
            e(i).on("mousemove.owl.core touchmove.owl.core", e.proxy(this.onDragMove, this)), Math.abs(n.x) < Math.abs(n.y) && this.is("valid") || (t.preventDefault(), this.enter("dragging"), this.trigger("drag"))
        }, this)))
    }, r.prototype.onDragMove = function (e) {
        var t = null, i = null, n = null, r = this.difference(this._drag.pointer, this.pointer(e)),
            s = this.difference(this._drag.stage.start, r);
        this.is("dragging") && (e.preventDefault(), this.settings.loop ? (t = this.coordinates(this.minimum()), i = this.coordinates(this.maximum() + 1) - t, s.x = ((s.x - t) % i + i) % i + t) : (t = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()), i = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()), n = this.settings.pullDrag ? -1 * r.x / 5 : 0, s.x = Math.max(Math.min(s.x, t + n), i + n)), this._drag.stage.current = s, this.animate(s.x))
    }, r.prototype.onDragEnd = function (t) {
        var n = this.difference(this._drag.pointer, this.pointer(t)), r = this._drag.stage.current,
            s = n.x > 0 ^ this.settings.rtl ? "left" : "right";
        e(i).off(".owl.core"), this.$element.removeClass(this.options.grabClass), (0 !== n.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed), this.current(this.closest(r.x, 0 !== n.x ? s : this._drag.direction)), this.invalidate("position"), this.update(), this._drag.direction = s, (Math.abs(n.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function () {
            return !1
        })), this.is("dragging") && (this.leave("dragging"), this.trigger("dragged"))
    }, r.prototype.closest = function (t, i) {
        var n = -1, r = 30, s = this.width(), a = this.coordinates();
        return this.settings.freeDrag || e.each(a, e.proxy(function (e, o) {
            return "left" === i && t > o - r && o + r > t ? n = e : "right" === i && t > o - s - r && o - s + r > t ? n = e + 1 : this.op(t, "<", o) && this.op(t, ">", a[e + 1] || o - s) && (n = "left" === i ? e + 1 : e), -1 === n
        }, this)), this.settings.loop || (this.op(t, ">", a[this.minimum()]) ? n = t = this.minimum() : this.op(t, "<", a[this.maximum()]) && (n = t = this.maximum())), n
    }, r.prototype.animate = function (t) {
        var i = this.speed() > 0;
        this.is("animating") && this.onTransitionEnd(), i && (this.enter("animating"), this.trigger("translate")), e.support.transform3d && e.support.transition ? this.$stage.css({
            transform: "translate3d(" + t + "px,0px,0px)",
            transition: this.speed() / 1e3 + "s"
        }) : i ? this.$stage.animate({left: t + "px"}, this.speed(), this.settings.fallbackEasing, e.proxy(this.onTransitionEnd, this)) : this.$stage.css({left: t + "px"})
    }, r.prototype.is = function (e) {
        return this._states.current[e] && this._states.current[e] > 0
    }, r.prototype.current = function (e) {
        if (e === n) return this._current;
        if (0 === this._items.length) return n;
        if (e = this.normalize(e), this._current !== e) {
            var t = this.trigger("change", {property: {name: "position", value: e}});
            t.data !== n && (e = this.normalize(t.data)), this._current = e, this.invalidate("position"), this.trigger("changed", {
                property: {
                    name: "position",
                    value: this._current
                }
            })
        }
        return this._current
    }, r.prototype.invalidate = function (t) {
        return "string" === e.type(t) && (this._invalidated[t] = !0, this.is("valid") && this.leave("valid")), e.map(this._invalidated, function (e, t) {
            return t
        })
    }, r.prototype.reset = function (e) {
        e = this.normalize(e), e !== n && (this._speed = 0, this._current = e, this.suppress(["translate", "translated"]), this.animate(this.coordinates(e)), this.release(["translate", "translated"]))
    }, r.prototype.normalize = function (e, t) {
        var i = this._items.length, r = t ? 0 : this._clones.length;
        return !this.isNumeric(e) || 1 > i ? e = n : (0 > e || e >= i + r) && (e = ((e - r / 2) % i + i) % i + r / 2), e
    }, r.prototype.relative = function (e) {
        return e -= this._clones.length / 2, this.normalize(e, !0)
    }, r.prototype.maximum = function (e) {
        var t, i, n, r = this.settings, s = this._coordinates.length;
        if (r.loop) s = this._clones.length / 2 + this._items.length - 1; else if (r.autoWidth || r.merge) {
            if (t = this._items.length) for (i = this._items[--t].width(), n = this.$element.width(); t-- && (i += this._items[t].width() + this.settings.margin, !(i > n));) ;
            s = t + 1
        } else s = r.center ? this._items.length - 1 : this._items.length - r.items;
        return e && (s -= this._clones.length / 2), Math.max(s, 0)
    }, r.prototype.minimum = function (e) {
        return e ? 0 : this._clones.length / 2
    }, r.prototype.items = function (e) {
        return e === n ? this._items.slice() : (e = this.normalize(e, !0), this._items[e])
    }, r.prototype.mergers = function (e) {
        return e === n ? this._mergers.slice() : (e = this.normalize(e, !0), this._mergers[e])
    }, r.prototype.clones = function (t) {
        var i = this._clones.length / 2, r = i + this._items.length, s = function (e) {
            return e % 2 === 0 ? r + e / 2 : i - (e + 1) / 2
        };
        return t === n ? e.map(this._clones, function (e, t) {
            return s(t)
        }) : e.map(this._clones, function (e, i) {
            return e === t ? s(i) : null
        })
    }, r.prototype.speed = function (e) {
        return e !== n && (this._speed = e), this._speed
    }, r.prototype.coordinates = function (t) {
        var i, r = 1, s = t - 1;
        return t === n ? e.map(this._coordinates, e.proxy(function (e, t) {
            return this.coordinates(t)
        }, this)) : (this.settings.center ? (this.settings.rtl && (r = -1, s = t + 1), i = this._coordinates[t], i += (this.width() - i + (this._coordinates[s] || 0)) / 2 * r) : i = this._coordinates[s] || 0, i = Math.ceil(i))
    }, r.prototype.duration = function (e, t, i) {
        return 0 === i ? 0 : Math.min(Math.max(Math.abs(t - e), 1), 6) * Math.abs(i || this.settings.smartSpeed)
    }, r.prototype.to = function (e, t) {
        var i = this.current(), n = null, r = e - this.relative(i), s = (r > 0) - (0 > r), a = this._items.length,
            o = this.minimum(), l = this.maximum();
        this.settings.loop ? (!this.settings.rewind && Math.abs(r) > a / 2 && (r += -1 * s * a), e = i + r, n = ((e - o) % a + a) % a + o, n !== e && l >= n - r && n - r > 0 && (i = n - r, e = n, this.reset(i))) : this.settings.rewind ? (l += 1, e = (e % l + l) % l) : e = Math.max(o, Math.min(l, e)), this.speed(this.duration(i, e, t)), this.current(e), this.$element.is(":visible") && this.update()
    }, r.prototype.next = function (e) {
        e = e || !1, this.to(this.relative(this.current()) + 1, e)
    }, r.prototype.prev = function (e) {
        e = e || !1, this.to(this.relative(this.current()) - 1, e)
    }, r.prototype.onTransitionEnd = function (e) {
        return e !== n && (e.stopPropagation(), (e.target || e.srcElement || e.originalTarget) !== this.$stage.get(0)) ? !1 : (this.leave("animating"), void this.trigger("translated"))
    }, r.prototype.viewport = function () {
        var n;
        return this.options.responsiveBaseElement !== t ? n = e(this.options.responsiveBaseElement).width() : t.innerWidth ? n = t.innerWidth : i.documentElement && i.documentElement.clientWidth ? n = i.documentElement.clientWidth : console.warn("Can not detect viewport width."), n
    }, r.prototype.replace = function (t) {
        this.$stage.empty(), this._items = [], t && (t = t instanceof jQuery ? t : e(t)), this.settings.nestedItemSelector && (t = t.find("." + this.settings.nestedItemSelector)), t.filter(function () {
            return 1 === this.nodeType
        }).each(e.proxy(function (e, t) {
            t = this.prepare(t), this.$stage.append(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
        }, this)), this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0), this.invalidate("items")
    }, r.prototype.add = function (t, i) {
        var r = this.relative(this._current);
        i = i === n ? this._items.length : this.normalize(i, !0), t = t instanceof jQuery ? t : e(t), this.trigger("add", {
            content: t,
            position: i
        }), t = this.prepare(t), 0 === this._items.length || i === this._items.length ? (0 === this._items.length && this.$stage.append(t), 0 !== this._items.length && this._items[i - 1].after(t), this._items.push(t), this._mergers.push(1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[i].before(t), this._items.splice(i, 0, t), this._mergers.splice(i, 0, 1 * t.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)), this._items[r] && this.reset(this._items[r].index()), this.invalidate("items"), this.trigger("added", {
            content: t,
            position: i
        })
    }, r.prototype.remove = function (e) {
        e = this.normalize(e, !0), e !== n && (this.trigger("remove", {
            content: this._items[e],
            position: e
        }), this._items[e].remove(), this._items.splice(e, 1), this._mergers.splice(e, 1), this.invalidate("items"), this.trigger("removed", {
            content: null,
            position: e
        }))
    }, r.prototype.preloadAutoWidthImages = function (t) {
        t.each(e.proxy(function (t, i) {
            this.enter("pre-loading"), i = e(i), e(new Image).one("load", e.proxy(function (e) {
                i.attr("src", e.target.src), i.css("opacity", 1), this.leave("pre-loading"), !this.is("pre-loading") && !this.is("initializing") && this.refresh()
            }, this)).attr("src", i.attr("src") || i.attr("data-src") || i.attr("data-src-retina"))
        }, this))
    }, r.prototype.destroy = function () {
        this.$element.off(".owl.core"), this.$stage.off(".owl.core"), e(i).off(".owl.core"), this.settings.responsive !== !1 && (t.clearTimeout(this.resizeTimer), this.off(t, "resize", this._handlers.onThrottledResize));
        for (var n in this._plugins) this._plugins[n].destroy();
        this.$stage.children(".cloned").remove(), this.$stage.unwrap(), this.$stage.children().contents().unwrap(), this.$stage.children().unwrap(), this.$stage.remove(), this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s", "g"), "")).removeData("owl.carousel")
    }, r.prototype.op = function (e, t, i) {
        var n = this.settings.rtl;
        switch (t) {
            case"<":
                return n ? e > i : i > e;
            case">":
                return n ? i > e : e > i;
            case">=":
                return n ? i >= e : e >= i;
            case"<=":
                return n ? e >= i : i >= e
        }
    }, r.prototype.on = function (e, t, i, n) {
        e.addEventListener ? e.addEventListener(t, i, n) : e.attachEvent && e.attachEvent("on" + t, i)
    }, r.prototype.off = function (e, t, i, n) {
        e.removeEventListener ? e.removeEventListener(t, i, n) : e.detachEvent && e.detachEvent("on" + t, i)
    }, r.prototype.trigger = function (t, i, n, s, a) {
        var o = {item: {count: this._items.length, index: this.current()}},
            l = e.camelCase(e.grep(["on", t, n], function (e) {
                return e
            }).join("-").toLowerCase()),
            u = e.Event([t, "owl", n || "carousel"].join(".").toLowerCase(), e.extend({relatedTarget: this}, o, i));
        return this._supress[t] || (e.each(this._plugins, function (e, t) {
            t.onTrigger && t.onTrigger(u)
        }), this.register({
            type: r.Type.Event,
            name: t
        }), this.$element.trigger(u), this.settings && "function" == typeof this.settings[l] && this.settings[l].call(this, u)), u
    }, r.prototype.enter = function (t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
            this._states.current[t] === n && (this._states.current[t] = 0), this._states.current[t]++
        }, this))
    }, r.prototype.leave = function (t) {
        e.each([t].concat(this._states.tags[t] || []), e.proxy(function (e, t) {
            this._states.current[t]--
        }, this))
    }, r.prototype.register = function (t) {
        if (t.type === r.Type.Event) {
            if (e.event.special[t.name] || (e.event.special[t.name] = {}), !e.event.special[t.name].owl) {
                var i = e.event.special[t.name]._default;
                e.event.special[t.name]._default = function (e) {
                    return !i || !i.apply || e.namespace && -1 !== e.namespace.indexOf("owl") ? e.namespace && e.namespace.indexOf("owl") > -1 : i.apply(this, arguments)
                }, e.event.special[t.name].owl = !0
            }
        } else t.type === r.Type.State && (this._states.tags[t.name] ? this._states.tags[t.name] = this._states.tags[t.name].concat(t.tags) : this._states.tags[t.name] = t.tags, this._states.tags[t.name] = e.grep(this._states.tags[t.name], e.proxy(function (i, n) {
            return e.inArray(i, this._states.tags[t.name]) === n
        }, this)))
    }, r.prototype.suppress = function (t) {
        e.each(t, e.proxy(function (e, t) {
            this._supress[t] = !0
        }, this))
    }, r.prototype.release = function (t) {
        e.each(t, e.proxy(function (e, t) {
            delete this._supress[t]
        }, this))
    }, r.prototype.pointer = function (e) {
        var i = {x: null, y: null};
        return e = e.originalEvent || e || t.event, e = e.touches && e.touches.length ? e.touches[0] : e.changedTouches && e.changedTouches.length ? e.changedTouches[0] : e, e.pageX ? (i.x = e.pageX, i.y = e.pageY) : (i.x = e.clientX, i.y = e.clientY), i
    }, r.prototype.isNumeric = function (e) {
        return !isNaN(parseFloat(e))
    }, r.prototype.difference = function (e, t) {
        return {x: e.x - t.x, y: e.y - t.y}
    }, e.fn.owlCarousel = function (t) {
        var i = Array.prototype.slice.call(arguments, 1);
        return this.each(function () {
            var n = e(this), s = n.data("owl.carousel");
            s || (s = new r(this, "object" == typeof t && t), n.data("owl.carousel", s), e.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function (t, i) {
                s.register({
                    type: r.Type.Event,
                    name: i
                }), s.$element.on(i + ".owl.carousel.core", e.proxy(function (e) {
                    e.namespace && e.relatedTarget !== this && (this.suppress([i]), s[i].apply(this, [].slice.call(arguments, 1)), this.release([i]))
                }, s))
            })), "string" == typeof t && "_" !== t.charAt(0) && s[t].apply(s, i)
        })
    }, e.fn.owlCarousel.Constructor = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var r = function (t) {
        this._core = t, this._interval = null, this._visible = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoRefresh && this.watch()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoRefresh: !0, autoRefreshInterval: 500}, r.prototype.watch = function () {
        this._interval || (this._visible = this._core.$element.is(":visible"), this._interval = t.setInterval(e.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
    }, r.prototype.refresh = function () {
        this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible, this._core.$element.toggleClass("owl-hidden", !this._visible), this._visible && this._core.invalidate("width") && this._core.refresh())
    }, r.prototype.destroy = function () {
        var e, i;
        t.clearInterval(this._interval);
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoRefresh = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var r = function (t) {
        this._core = t, this._loaded = [], this._handlers = {
            "initialized.owl.carousel change.owl.carousel resized.owl.carousel": e.proxy(function (t) {
                if (t.namespace && this._core.settings && this._core.settings.lazyLoad && (t.property && "position" == t.property.name || "initialized" == t.type)) for (var i = this._core.settings, r = i.center && Math.ceil(i.items / 2) || i.items, s = i.center && -1 * r || 0, a = (t.property && t.property.value !== n ? t.property.value : this._core.current()) + s, o = this._core.clones().length, l = e.proxy(function (e, t) {
                    this.load(t)
                }, this); s++ < r;) this.load(o / 2 + this._core.relative(a)), o && e.each(this._core.clones(this._core.relative(a)), l), a++
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {lazyLoad: !1}, r.prototype.load = function (i) {
        var n = this._core.$stage.children().eq(i), r = n && n.find(".owl-lazy");
        !r || e.inArray(n.get(0), this._loaded) > -1 || (r.each(e.proxy(function (i, n) {
            var r, s = e(n), a = t.devicePixelRatio > 1 && s.attr("data-src-retina") || s.attr("data-src");
            this._core.trigger("load", {
                element: s,
                url: a
            }, "lazy"), s.is("img") ? s.one("load.owl.lazy", e.proxy(function () {
                s.css("opacity", 1), this._core.trigger("loaded", {element: s, url: a}, "lazy")
            }, this)).attr("src", a) : (r = new Image, r.onload = e.proxy(function () {
                s.css({"background-image": 'url("' + a + '")', opacity: "1"}), this._core.trigger("loaded", {
                    element: s,
                    url: a
                }, "lazy")
            }, this), r.src = a)
        }, this)), this._loaded.push(n.get(0)))
    }, r.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this._core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Lazy = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var r = function (t) {
        this._core = t, this._handlers = {
            "initialized.owl.carousel refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && this.update()
            }, this), "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && "position" == e.property.name && this.update()
            }, this), "loaded.owl.lazy": e.proxy(function (e) {
                e.namespace && this._core.settings.autoHeight && e.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers)
    };
    r.Defaults = {autoHeight: !1, autoHeightClass: "owl-height"}, r.prototype.update = function () {
        var t = this._core._current, i = t + this._core.settings.items,
            n = this._core.$stage.children().toArray().slice(t, i), r = [], s = 0;
        e.each(n, function (t, i) {
            r.push(e(i).height())
        }), s = Math.max.apply(null, r), this._core.$stage.parent().height(s).addClass(this._core.settings.autoHeightClass)
    }, r.prototype.destroy = function () {
        var e, t;
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.AutoHeight = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var r = function (t) {
        this._core = t, this._videos = {}, this._playing = null, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.register({type: "state", name: "playing", tags: ["interacting"]})
            }, this), "resize.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.video && this.isInFullScreen() && e.preventDefault()
            }, this), "refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
            }, this), "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" === e.property.name && this._playing && this.stop()
            }, this), "prepared.owl.carousel": e.proxy(function (t) {
                if (t.namespace) {
                    var i = e(t.content).find(".owl-video");
                    i.length && (i.css("display", "none"), this.fetch(i, e(t.content)))
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this._core.$element.on(this._handlers), this._core.$element.on("click.owl.video", ".owl-video-play-icon", e.proxy(function (e) {
            this.play(e)
        }, this))
    };
    r.Defaults = {video: !1, videoHeight: !1, videoWidth: !1}, r.prototype.fetch = function (e, t) {
        var i = function () {
                return e.attr("data-vimeo-id") ? "vimeo" : e.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }(), n = e.attr("data-vimeo-id") || e.attr("data-youtube-id") || e.attr("data-vzaar-id"),
            r = e.attr("data-width") || this._core.settings.videoWidth,
            s = e.attr("data-height") || this._core.settings.videoHeight, a = e.attr("href");
        if (!a) throw new Error("Missing video URL.");
        if (n = a.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/), n[3].indexOf("youtu") > -1) i = "youtube"; else if (n[3].indexOf("vimeo") > -1) i = "vimeo"; else {
            if (!(n[3].indexOf("vzaar") > -1)) throw new Error("Video URL not supported.");
            i = "vzaar"
        }
        n = n[6], this._videos[a] = {
            type: i,
            id: n,
            width: r,
            height: s
        }, t.attr("data-video", a), this.thumbnail(e, this._videos[a])
    }, r.prototype.thumbnail = function (t, i) {
        var n, r, s, a = i.width && i.height ? 'style="width:' + i.width + "px;height:" + i.height + 'px;"' : "",
            o = t.find("img"), l = "src", u = "", c = this._core.settings, d = function (e) {
                r = '<div class="owl-video-play-icon"></div>', n = c.lazyLoad ? '<div class="owl-video-tn ' + u + '" ' + l + '="' + e + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + e + ')"></div>', t.after(n), t.after(r)
            };
        return t.wrap('<div class="owl-video-wrapper"' + a + "></div>"), this._core.settings.lazyLoad && (l = "data-src", u = "owl-lazy"), o.length ? (d(o.attr(l)), o.remove(), !1) : void("youtube" === i.type ? (s = "//img.youtube.com/vi/" + i.id + "/hqdefault.jpg", d(s)) : "vimeo" === i.type ? e.ajax({
            type: "GET",
            url: "//vimeo.com/api/v2/video/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                s = e[0].thumbnail_large, d(s)
            }
        }) : "vzaar" === i.type && e.ajax({
            type: "GET",
            url: "//vzaar.com/api/videos/" + i.id + ".json",
            jsonp: "callback",
            dataType: "jsonp",
            success: function (e) {
                s = e.framegrab_url, d(s)
            }
        }))
    }, r.prototype.stop = function () {
        this._core.trigger("stop", null, "video"), this._playing.find(".owl-video-frame").remove(), this._playing.removeClass("owl-video-playing"), this._playing = null, this._core.leave("playing"), this._core.trigger("stopped", null, "video")
    }, r.prototype.play = function (t) {
        var i, n = e(t.target), r = n.closest("." + this._core.settings.itemClass),
            s = this._videos[r.attr("data-video")], a = s.width || "100%", o = s.height || this._core.$stage.height();
        this._playing || (this._core.enter("playing"), this._core.trigger("play", null, "video"), r = this._core.items(this._core.relative(r.index())), this._core.reset(r.index()), "youtube" === s.type ? i = '<iframe width="' + a + '" height="' + o + '" src="//www.youtube.com/embed/' + s.id + "?autoplay=1&rel=0&v=" + s.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === s.type ? i = '<iframe src="//player.vimeo.com/video/' + s.id + '?autoplay=1" width="' + a + '" height="' + o + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === s.type && (i = '<iframe frameborder="0"height="' + o + '"width="' + a + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + s.id + '/player?autoplay=true"></iframe>'), e('<div class="owl-video-frame">' + i + "</div>").insertAfter(r.find(".owl-video")), this._playing = r.addClass("owl-video-playing"))
    }, r.prototype.isInFullScreen = function () {
        var t = i.fullscreenElement || i.mozFullScreenElement || i.webkitFullscreenElement;
        return t && e(t).parent().hasClass("owl-video-frame")
    }, r.prototype.destroy = function () {
        var e, t;
        this._core.$element.off("click.owl.video");
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Video = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var r = function (t) {
        this.core = t, this.core.options = e.extend({}, r.Defaults, this.core.options), this.swapping = !0, this.previous = n, this.next = n, this.handlers = {
            "change.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" == e.property.name && (this.previous = this.core.current(), this.next = e.property.value)
            }, this), "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": e.proxy(function (e) {
                e.namespace && (this.swapping = "translated" == e.type)
            }, this), "translate.owl.carousel": e.proxy(function (e) {
                e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
            }, this)
        }, this.core.$element.on(this.handlers)
    };
    r.Defaults = {animateOut: !1, animateIn: !1}, r.prototype.swap = function () {
        if (1 === this.core.settings.items && e.support.animation && e.support.transition) {
            this.core.speed(0);
            var t, i = e.proxy(this.clear, this), n = this.core.$stage.children().eq(this.previous),
                r = this.core.$stage.children().eq(this.next), s = this.core.settings.animateIn,
                a = this.core.settings.animateOut;
            this.core.current() !== this.previous && (a && (t = this.core.coordinates(this.previous) - this.core.coordinates(this.next), n.one(e.support.animation.end, i).css({left: t + "px"}).addClass("animated owl-animated-out").addClass(a)), s && r.one(e.support.animation.end, i).addClass("animated owl-animated-in").addClass(s))
        }
    }, r.prototype.clear = function (t) {
        e(t.target).css({left: ""}).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut), this.core.onTransitionEnd()
    }, r.prototype.destroy = function () {
        var e, t;
        for (e in this.handlers) this.core.$element.off(e, this.handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Animate = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    var r = function (t) {
        this._core = t, this._call = null, this._time = 0, this._timeout = 0, this._paused = !0, this._handlers = {
            "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "settings" === e.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : e.namespace && "position" === e.property.name && this._paused && (this._time = 0)
            }, this), "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.autoplay && this.play()
            }, this), "play.owl.autoplay": e.proxy(function (e, t, i) {
                e.namespace && this.play(t, i)
            }, this), "stop.owl.autoplay": e.proxy(function (e) {
                e.namespace && this.stop()
            }, this), "mouseover.owl.autoplay": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "mouseleave.owl.autoplay": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
            }, this), "touchstart.owl.core": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
            }, this), "touchend.owl.core": e.proxy(function () {
                this._core.settings.autoplayHoverPause && this.play()
            }, this)
        }, this._core.$element.on(this._handlers), this._core.options = e.extend({}, r.Defaults, this._core.options)
    };
    r.Defaults = {
        autoplay: !1,
        autoplayTimeout: 5e3,
        autoplayHoverPause: !1,
        autoplaySpeed: !1
    }, r.prototype._next = function (n) {
        this._call = t.setTimeout(e.proxy(this._next, this, n), this._timeout * (Math.round(this.read() / this._timeout) + 1) - this.read()), this._core.is("busy") || this._core.is("interacting") || i.hidden || this._core.next(n || this._core.settings.autoplaySpeed)
    }, r.prototype.read = function () {
        return (new Date).getTime() - this._time
    }, r.prototype.play = function (i, n) {
        var r;
        this._core.is("rotating") || this._core.enter("rotating"), i = i || this._core.settings.autoplayTimeout, r = Math.min(this._time % (this._timeout || i), i), this._paused ? (this._time = this.read(), this._paused = !1) : t.clearTimeout(this._call), this._time += this.read() % i - r, this._timeout = i, this._call = t.setTimeout(e.proxy(this._next, this, n), i - r)
    }, r.prototype.stop = function () {
        this._core.is("rotating") && (this._time = 0, this._paused = !0, t.clearTimeout(this._call), this._core.leave("rotating"))
    }, r.prototype.pause = function () {
        this._core.is("rotating") && !this._paused && (this._time = this.read(), this._paused = !0, t.clearTimeout(this._call))
    }, r.prototype.destroy = function () {
        var e, t;
        this.stop();
        for (e in this._handlers) this._core.$element.off(e, this._handlers[e]);
        for (t in Object.getOwnPropertyNames(this)) "function" != typeof this[t] && (this[t] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.autoplay = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    "use strict";
    var r = function (t) {
        this._core = t, this._initialized = !1, this._pages = [], this._controls = {}, this._templates = [], this.$element = this._core.$element, this._overrides = {
            next: this._core.next,
            prev: this._core.prev,
            to: this._core.to
        }, this._handlers = {
            "prepared.owl.carousel": e.proxy(function (t) {
                t.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + e(t.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
            }, this), "added.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 0, this._templates.pop())
            }, this), "remove.owl.carousel": e.proxy(function (e) {
                e.namespace && this._core.settings.dotsData && this._templates.splice(e.position, 1)
            }, this), "changed.owl.carousel": e.proxy(function (e) {
                e.namespace && "position" == e.property.name && this.draw()
            }, this), "initialized.owl.carousel": e.proxy(function (e) {
                e.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"), this.initialize(), this.update(), this.draw(), this._initialized = !0, this._core.trigger("initialized", null, "navigation"))
            }, this), "refreshed.owl.carousel": e.proxy(function (e) {
                e.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"), this.update(), this.draw(), this._core.trigger("refreshed", null, "navigation"))
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers)
    };
    r.Defaults = {
        nav: !1,
        navText: ['<span aria-label="prev">&#x2039;</span>', '<span aria-label="next">&#x203a;</span>'],
        navSpeed: !1,
        navElement: 'button role="presentation"',
        navContainer: !1,
        navContainerClass: "owl-nav",
        navClass: ["owl-prev", "owl-next"],
        slideBy: 1,
        dotClass: "owl-dot",
        dotsClass: "owl-dots",
        dots: !0,
        dotsEach: !1,
        dotsData: !1,
        dotsSpeed: !1,
        dotsContainer: !1
    }, r.prototype.initialize = function () {
        var t, i = this._core.settings;
        this._controls.$relative = (i.navContainer ? e(i.navContainer) : e("<div>").addClass(i.navContainerClass).appendTo(this.$element)).addClass("disabled"), this._controls.$previous = e("<" + i.navElement + ">").addClass(i.navClass[0]).html(i.navText[0]).prependTo(this._controls.$relative).on("click", e.proxy(function (e) {
            this.prev(i.navSpeed)
        }, this)), this._controls.$next = e("<" + i.navElement + ">").addClass(i.navClass[1]).html(i.navText[1]).appendTo(this._controls.$relative).on("click", e.proxy(function (e) {
            this.next(i.navSpeed)
        }, this)), i.dotsData || (this._templates = [e("<button>").addClass(i.dotClass).append(e("<span>")).prop("outerHTML")]), this._controls.$absolute = (i.dotsContainer ? e(i.dotsContainer) : e("<div>").addClass(i.dotsClass).appendTo(this.$element)).addClass("disabled"), this._controls.$absolute.on("click", "button", e.proxy(function (t) {
            var n = e(t.target).parent().is(this._controls.$absolute) ? e(t.target).index() : e(t.target).parent().index();
            t.preventDefault(), this.to(n, i.dotsSpeed)
        }, this));
        for (t in this._overrides) this._core[t] = e.proxy(this[t], this)
    }, r.prototype.destroy = function () {
        var e, t, i, n;
        for (e in this._handlers) this.$element.off(e, this._handlers[e]);
        for (t in this._controls) "$relative" === t && settings.navContainer ? this._controls[t].html("") : this._controls[t].remove();
        for (n in this.overides) this._core[n] = this._overrides[n];
        for (i in Object.getOwnPropertyNames(this)) "function" != typeof this[i] && (this[i] = null)
    }, r.prototype.update = function () {
        var e, t, i, n = this._core.clones().length / 2, r = n + this._core.items().length, s = this._core.maximum(!0),
            a = this._core.settings, o = a.center || a.autoWidth || a.dotsData ? 1 : a.dotsEach || a.items;
        if ("page" !== a.slideBy && (a.slideBy = Math.min(a.slideBy, a.items)), a.dots || "page" == a.slideBy) for (this._pages = [], e = n, t = 0, i = 0; r > e; e++) {
            if (t >= o || 0 === t) {
                if (this._pages.push({start: Math.min(s, e - n), end: e - n + o - 1}), Math.min(s, e - n) === s) break;
                t = 0, ++i
            }
            t += this._core.mergers(this._core.relative(e))
        }
    }, r.prototype.draw = function () {
        var t, i = this._core.settings, n = this._core.items().length <= i.items,
            r = this._core.relative(this._core.current()), s = i.loop || i.rewind;
        this._controls.$relative.toggleClass("disabled", !i.nav || n), i.nav && (this._controls.$previous.toggleClass("disabled", !s && r <= this._core.minimum(!0)), this._controls.$next.toggleClass("disabled", !s && r >= this._core.maximum(!0))), this._controls.$absolute.toggleClass("disabled", !i.dots || n), i.dots && (t = this._pages.length - this._controls.$absolute.children().length, i.dotsData && 0 !== t ? this._controls.$absolute.html(this._templates.join("")) : t > 0 ? this._controls.$absolute.append(new Array(t + 1).join(this._templates[0])) : 0 > t && this._controls.$absolute.children().slice(t).remove(), this._controls.$absolute.find(".active").removeClass("active"), this._controls.$absolute.children().eq(e.inArray(this.current(), this._pages)).addClass("active"))
    }, r.prototype.onTrigger = function (t) {
        var i = this._core.settings;
        t.page = {
            index: e.inArray(this.current(), this._pages),
            count: this._pages.length,
            size: i && (i.center || i.autoWidth || i.dotsData ? 1 : i.dotsEach || i.items)
        }
    }, r.prototype.current = function () {
        var t = this._core.relative(this._core.current());
        return e.grep(this._pages, e.proxy(function (e, i) {
            return e.start <= t && e.end >= t
        }, this)).pop()
    }, r.prototype.getPosition = function (t) {
        var i, n, r = this._core.settings;
        return "page" == r.slideBy ? (i = e.inArray(this.current(), this._pages), n = this._pages.length, t ? ++i : --i, i = this._pages[(i % n + n) % n].start) : (i = this._core.relative(this._core.current()), n = this._core.items().length, t ? i += r.slideBy : i -= r.slideBy), i
    }, r.prototype.next = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!0), t)
    }, r.prototype.prev = function (t) {
        e.proxy(this._overrides.to, this._core)(this.getPosition(!1), t)
    }, r.prototype.to = function (t, i, n) {
        var r;
        !n && this._pages.length ? (r = this._pages.length, e.proxy(this._overrides.to, this._core)(this._pages[(t % r + r) % r].start, i)) : e.proxy(this._overrides.to, this._core)(t, i)
    }, e.fn.owlCarousel.Constructor.Plugins.Navigation = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    "use strict";
    var r = function (i) {
        this._core = i, this._hashes = {}, this.$element = this._core.$element, this._handlers = {
            "initialized.owl.carousel": e.proxy(function (i) {
                i.namespace && "URLHash" === this._core.settings.startPosition && e(t).trigger("hashchange.owl.navigation")
            }, this), "prepared.owl.carousel": e.proxy(function (t) {
                if (t.namespace) {
                    var i = e(t.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                    if (!i) return;
                    this._hashes[i] = t.content
                }
            }, this), "changed.owl.carousel": e.proxy(function (i) {
                if (i.namespace && "position" === i.property.name) {
                    var n = this._core.items(this._core.relative(this._core.current())),
                        r = e.map(this._hashes, function (e, t) {
                            return e === n ? t : null
                        }).join();
                    if (!r || t.location.hash.slice(1) === r) return;
                    t.location.hash = r
                }
            }, this)
        }, this._core.options = e.extend({}, r.Defaults, this._core.options), this.$element.on(this._handlers), e(t).on("hashchange.owl.navigation", e.proxy(function (e) {
            var i = t.location.hash.substring(1), r = this._core.$stage.children(),
                s = this._hashes[i] && r.index(this._hashes[i]);
            s !== n && s !== this._core.current() && this._core.to(this._core.relative(s), !1, !0)
        }, this))
    };
    r.Defaults = {URLhashListener: !1}, r.prototype.destroy = function () {
        var i, n;
        e(t).off("hashchange.owl.navigation");
        for (i in this._handlers) this._core.$element.off(i, this._handlers[i]);
        for (n in Object.getOwnPropertyNames(this)) "function" != typeof this[n] && (this[n] = null)
    }, e.fn.owlCarousel.Constructor.Plugins.Hash = r
}(window.Zepto || window.jQuery, window, document), function (e, t, i, n) {
    function r(t, i) {
        var r = !1, s = t.charAt(0).toUpperCase() + t.slice(1);
        return e.each((t + " " + o.join(s + " ") + s).split(" "), function (e, t) {
            return a[t] !== n ? (r = i ? t : !0, !1) : void 0
        }), r
    }

    function s(e) {
        return r(e, !0)
    }

    var a = e("<support>").get(0).style, o = "Webkit Moz O ms".split(" "), l = {
        transition: {
            end: {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd",
                transition: "transitionend"
            }
        },
        animation: {
            end: {
                WebkitAnimation: "webkitAnimationEnd",
                MozAnimation: "animationend",
                OAnimation: "oAnimationEnd",
                animation: "animationend"
            }
        }
    }, u = {
        csstransforms: function () {
            return !!r("transform")
        }, csstransforms3d: function () {
            return !!r("perspective")
        }, csstransitions: function () {
            return !!r("transition")
        }, cssanimations: function () {
            return !!r("animation")
        }
    };
    u.csstransitions() && (e.support.transition = new String(s("transition")), e.support.transition.end = l.transition.end[e.support.transition]), u.cssanimations() && (e.support.animation = new String(s("animation")), e.support.animation.end = l.animation.end[e.support.animation]), u.csstransforms() && (e.support.transform = new String(s("transform")), e.support.transform3d = u.csstransforms3d())
}(window.Zepto || window.jQuery, window, document), !function (e) {
    "use strict";

    function t(t, i) {
        this.element = e(t), this.settings = e.extend({}, n, i), this._defaults = n, this._init()
    }

    var i = "Morphext", n = {animation: "bounceIn", separator: ",", speed: 2e3, complete: e.noop};
    t.prototype = {
        _init: function () {
            var t = this;
            this.phrases = [], this.element.addClass("morphext"), e.each(this.element.text().split(this.settings.separator), function (i, n) {
                t.phrases.push(e.trim(n))
            }), this.index = -1, this.animate(), this.start()
        }, animate: function () {
            this.index = ++this.index % this.phrases.length, this.element[0].innerHTML = '<span class="animated ' + this.settings.animation + '">' + this.phrases[this.index] + "</span>", e.isFunction(this.settings.complete) && this.settings.complete.call(this)
        }, start: function () {
            var e = this;
            this._interval = setInterval(function () {
                e.animate()
            }, this.settings.speed)
        }, stop: function () {
            this._interval = clearInterval(this._interval)
        }
    }, e.fn[i] = function (n) {
        return this.each(function () {
            e.data(this, "plugin_" + i) || e.data(this, "plugin_" + i, new t(this, n))
        })
    }
}(jQuery), !function (e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function (e, t) {
    "use strict";

    function i(i, s, o) {
        function l(e, t, n) {
            var r, s = "$()." + i + '("' + t + '")';
            return e.each(function (e, l) {
                var u = o.data(l, i);
                if (!u) return void a(i + " not initialized. Cannot call methods, i.e. " + s);
                var c = u[t];
                if (!c || "_" == t.charAt(0)) return void a(s + " is not a valid method");
                var d = c.apply(u, n);
                r = void 0 === r ? d : r
            }), void 0 !== r ? r : e
        }

        function u(e, t) {
            e.each(function (e, n) {
                var r = o.data(n, i);
                r ? (r.option(t), r._init()) : (r = new s(n, t), o.data(n, i, r))
            })
        }

        o = o || t || e.jQuery, o && (s.prototype.option || (s.prototype.option = function (e) {
            o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e))
        }), o.fn[i] = function (e) {
            if ("string" == typeof e) {
                var t = r.call(arguments, 1);
                return l(this, e, t)
            }
            return u(this, e), this
        }, n(o))
    }

    function n(e) {
        !e || e && e.bridget || (e.bridget = i)
    }

    var r = Array.prototype.slice, s = e.console, a = "undefined" == typeof s ? function () {
    } : function (e) {
        s.error(e)
    };
    return n(t || e.jQuery), i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {
    }

    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
                var s = i[r], a = n && n[s];
                a && (this.off(e, s), delete n[s]), s.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("get-size/get-size", [], function () {
        return t()
    }) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function () {
    "use strict";

    function e(e) {
        var t = parseFloat(e), i = -1 == e.indexOf("%") && !isNaN(t);
        return i && t
    }

    function t() {
    }

    function i() {
        for (var e = {
            width: 0,
            height: 0,
            innerWidth: 0,
            innerHeight: 0,
            outerWidth: 0,
            outerHeight: 0
        }, t = 0; u > t; t++) {
            var i = l[t];
            e[i] = 0
        }
        return e
    }

    function n(e) {
        var t = getComputedStyle(e);
        return t || o("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See http://bit.ly/getsizebug1"), t
    }

    function r() {
        if (!c) {
            c = !0;
            var t = document.createElement("div");
            t.style.width = "200px", t.style.padding = "1px 2px 3px 4px", t.style.borderStyle = "solid", t.style.borderWidth = "1px 2px 3px 4px", t.style.boxSizing = "border-box";
            var i = document.body || document.documentElement;
            i.appendChild(t);
            var r = n(t);
            s.isBoxSizeOuter = a = 200 == e(r.width), i.removeChild(t)
        }
    }

    function s(t) {
        if (r(), "string" == typeof t && (t = document.querySelector(t)), t && "object" == typeof t && t.nodeType) {
            var s = n(t);
            if ("none" == s.display) return i();
            var o = {};
            o.width = t.offsetWidth, o.height = t.offsetHeight;
            for (var c = o.isBorderBox = "border-box" == s.boxSizing, d = 0; u > d; d++) {
                var h = l[d], p = s[h], f = parseFloat(p);
                o[h] = isNaN(f) ? 0 : f
            }
            var m = o.paddingLeft + o.paddingRight, g = o.paddingTop + o.paddingBottom,
                v = o.marginLeft + o.marginRight, y = o.marginTop + o.marginBottom,
                b = o.borderLeftWidth + o.borderRightWidth, w = o.borderTopWidth + o.borderBottomWidth, _ = c && a,
                T = e(s.width);
            T !== !1 && (o.width = T + (_ ? 0 : m + b));
            var x = e(s.height);
            return x !== !1 && (o.height = x + (_ ? 0 : g + w)), o.innerWidth = o.width - (m + b), o.innerHeight = o.height - (g + w), o.outerWidth = o.width + v, o.outerHeight = o.height + y, o
        }
    }

    var a, o = "undefined" == typeof console ? t : function (e) {
            console.error(e)
        },
        l = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        u = l.length, c = !1;
    return s
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
    "use strict";
    var e = function () {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var n = t[i], r = n + "MatchesSelector";
            if (e[r]) return r
        }
    }();
    return function (t, i) {
        return t[e](i)
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function (e, t) {
    var i = {};
    i.extend = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }, i.modulo = function (e, t) {
        return (e % t + t) % t
    }, i.makeArray = function (e) {
        var t = [];
        if (Array.isArray(e)) t = e; else if (e && "object" == typeof e && "number" == typeof e.length) for (var i = 0; i < e.length; i++) t.push(e[i]); else t.push(e);
        return t
    }, i.removeFrom = function (e, t) {
        var i = e.indexOf(t);
        -1 != i && e.splice(i, 1)
    }, i.getParent = function (e, i) {
        for (; e.parentNode && e != document.body;) if (e = e.parentNode, t(e, i)) return e
    }, i.getQueryElement = function (e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, i.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.filterFindElements = function (e, n) {
        e = i.makeArray(e);
        var r = [];
        return e.forEach(function (e) {
            if (e instanceof HTMLElement) {
                if (!n) return void r.push(e);
                t(e, n) && r.push(e);
                for (var i = e.querySelectorAll(n), s = 0; s < i.length; s++) r.push(i[s])
            }
        }), r
    }, i.debounceMethod = function (e, t, i) {
        var n = e.prototype[t], r = t + "Timeout";
        e.prototype[t] = function () {
            var e = this[r];
            e && clearTimeout(e);
            var t = arguments, s = this;
            this[r] = setTimeout(function () {
                n.apply(s, t), delete s[r]
            }, i || 100)
        }
    }, i.docReady = function (e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, i.toDashed = function (e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, i) {
            return t + "-" + i
        }).toLowerCase()
    };
    var n = e.console;
    return i.htmlInit = function (t, r) {
        i.docReady(function () {
            var s = i.toDashed(r), a = "data-" + s, o = document.querySelectorAll("[" + a + "]"),
                l = document.querySelectorAll(".js-" + s), u = i.makeArray(o).concat(i.makeArray(l)),
                c = a + "-options", d = e.jQuery;
            u.forEach(function (e) {
                var i, s = e.getAttribute(a) || e.getAttribute(c);
                try {
                    i = s && JSON.parse(s)
                } catch (o) {
                    return void(n && n.error("Error parsing " + a + " on " + e.className + ": " + o))
                }
                var l = new t(e, i);
                d && d.data(e, r, l)
            })
        })
    }, i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function (e, t) {
    "use strict";

    function i(e) {
        for (var t in e) return !1;
        return t = null, !0
    }

    function n(e, t) {
        e && (this.element = e, this.layout = t, this.position = {x: 0, y: 0}, this._create())
    }

    function r(e) {
        return e.replace(/([A-Z])/g, function (e) {
            return "-" + e.toLowerCase()
        })
    }

    var s = document.documentElement.style, a = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        o = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        l = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[a], u = {
            transform: o,
            transition: a,
            transitionDuration: a + "Duration",
            transitionProperty: a + "Property",
            transitionDelay: a + "Delay"
        }, c = n.prototype = Object.create(e.prototype);
    c.constructor = n, c._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, c.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, c.getSize = function () {
        this.size = t(this.element)
    }, c.css = function (e) {
        var t = this.element.style;
        for (var i in e) {
            var n = u[i] || i;
            t[n] = e[i]
        }
    }, c.getPosition = function () {
        var e = getComputedStyle(this.element), t = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), n = e[t ? "left" : "right"], r = e[i ? "top" : "bottom"],
            s = this.layout.size, a = -1 != n.indexOf("%") ? parseFloat(n) / 100 * s.width : parseInt(n, 10),
            o = -1 != r.indexOf("%") ? parseFloat(r) / 100 * s.height : parseInt(r, 10);
        a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, a -= t ? s.paddingLeft : s.paddingRight, o -= i ? s.paddingTop : s.paddingBottom, this.position.x = a, this.position.y = o
    }, c.layoutPosition = function () {
        var e = this.layout.size, t = {}, i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"), r = i ? "paddingLeft" : "paddingRight", s = i ? "left" : "right",
            a = i ? "right" : "left", o = this.position.x + e[r];
        t[s] = this.getXValue(o), t[a] = "";
        var l = n ? "paddingTop" : "paddingBottom", u = n ? "top" : "bottom", c = n ? "bottom" : "top",
            d = this.position.y + e[l];
        t[u] = this.getYValue(d), t[c] = "", this.css(t), this.emitEvent("layout", [this])
    }, c.getXValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, c.getYValue = function (e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, c._transitionTo = function (e, t) {
        this.getPosition();
        var i = this.position.x, n = this.position.y, r = parseInt(e, 10), s = parseInt(t, 10),
            a = r === this.position.x && s === this.position.y;
        if (this.setPosition(e, t), a && !this.isTransitioning) return void this.layoutPosition();
        var o = e - i, l = t - n, u = {};
        u.transform = this.getTranslate(o, l), this.transition({
            to: u,
            onTransitionEnd: {transform: this.layoutPosition},
            isCleaning: !0
        })
    }, c.getTranslate = function (e, t) {
        var i = this.layout._getOption("originLeft"), n = this.layout._getOption("originTop");
        return e = i ? e : -e, t = n ? t : -t, "translate3d(" + e + "px, " + t + "px, 0)"
    }, c.goTo = function (e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, c.moveTo = c._transitionTo, c.setPosition = function (e, t) {
        this.position.x = parseInt(e, 10), this.position.y = parseInt(t, 10)
    }, c._nonTransition = function (e) {
        this.css(e.to), e.isCleaning && this._removeStyles(e.to);
        for (var t in e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, c.transition = function (e) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
        var t = this._transn;
        for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
        for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
        if (e.from) {
            this.css(e.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
    };
    var d = "opacity," + r(o);
    c.enableTransition = function () {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: d,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(l, this, !1)
        }
    }, c.onwebkitTransitionEnd = function (e) {
        this.ontransitionend(e)
    }, c.onotransitionend = function (e) {
        this.ontransitionend(e)
    };
    var h = {"-webkit-transform": "transform"};
    c.ontransitionend = function (e) {
        if (e.target === this.element) {
            var t = this._transn, n = h[e.propertyName] || e.propertyName;
            if (delete t.ingProperties[n], i(t.ingProperties) && this.disableTransition(), n in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[n]), n in t.onEnd) {
                var r = t.onEnd[n];
                r.call(this), delete t.onEnd[n]
            }
            this.emitEvent("transitionEnd", [this])
        }
    }, c.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(l, this, !1), this.isTransitioning = !1
    }, c._removeStyles = function (e) {
        var t = {};
        for (var i in e) t[i] = "";
        this.css(t)
    };
    var p = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return c.removeTransitionStyles = function () {
        this.css(p)
    }, c.stagger = function (e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, c.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, c.remove = function () {
        return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, c.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var e = this.layout.options, t = {}, i = this.getHideRevealTransitionEndProperty("visibleStyle");
        t[i] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, c.getHideRevealTransitionEndProperty = function (e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var i in t) return i
    }, c.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var e = this.layout.options, t = {}, i = this.getHideRevealTransitionEndProperty("hiddenStyle");
        t[i] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, c.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, c.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, n
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, n, r, s) {
        return t(e, i, n, r, s)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function (e, t, i, n, r) {
    "use strict";

    function s(e, t) {
        var i = n.getQueryElement(e);
        if (!i) return void(l && l.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
        this.element = i, u && (this.$element = u(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
        var r = ++d;
        this.element.outlayerGUID = r, h[r] = this, this._create();
        var s = this._getOption("initLayout");
        s && this.layout()
    }

    function a(e) {
        function t() {
            e.apply(this, arguments)
        }

        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }

    function o(e) {
        if ("number" == typeof e) return e;
        var t = e.match(/(^\d*\.?\d*)(\w*)/), i = t && t[1], n = t && t[2];
        if (!i.length) return 0;
        i = parseFloat(i);
        var r = f[n] || 1;
        return i * r
    }

    var l = e.console, u = e.jQuery, c = function () {
    }, d = 0, h = {};
    s.namespace = "outlayer", s.Item = r, s.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var p = s.prototype;
    n.extend(p, t.prototype), p.option = function (e) {
        n.extend(this.options, e)
    }, p._getOption = function (e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, s.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, p._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle);
        var e = this._getOption("resize");
        e && this.bindResize()
    }, p.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, p._itemize = function (e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], r = 0; r < t.length; r++) {
            var s = t[r], a = new i(s, this);
            n.push(a)
        }
        return n
    }, p._filterFindItemElements = function (e) {
        return n.filterFindElements(e, this.options.itemSelector)
    }, p.getItemElements = function () {
        return this.items.map(function (e) {
            return e.element
        })
    }, p.layout = function () {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"), t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, p._init = p.layout, p._resetLayout = function () {
        this.getSize()
    }, p.getSize = function () {
        this.size = i(this.element)
    }, p._getMeasurement = function (e, t) {
        var n, r = this.options[e];
        r ? ("string" == typeof r ? n = this.element.querySelector(r) : r instanceof HTMLElement && (n = r), this[e] = n ? i(n)[t] : r) : this[e] = 0
    }, p.layoutItems = function (e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, p._getItemsForLayout = function (e) {
        return e.filter(function (e) {
            return !e.isIgnored
        })
    }, p._layoutItems = function (e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var i = [];
            e.forEach(function (e) {
                var n = this._getItemLayoutPosition(e);
                n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, p._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, p._processLayoutQueue = function (e) {
        this.updateStagger(), e.forEach(function (e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, p.updateStagger = function () {
        var e = this.options.stagger;
        return null === e || void 0 === e ? void(this.stagger = 0) : (this.stagger = o(e), this.stagger)
    }, p._positionItem = function (e, t, i, n, r) {
        n ? e.goTo(t, i) : (e.stagger(r * this.stagger), e.moveTo(t, i))
    }, p._postLayout = function () {
        this.resizeContainer()
    }, p.resizeContainer = function () {
        var e = this._getOption("resizeContainer");
        if (e) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, p._getContainerSize = c, p._setContainerMeasure = function (e, t) {
        if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, p._emitCompleteOnItems = function (e, t) {
        function i() {
            r.dispatchEvent(e + "Complete", null, [t])
        }

        function n() {
            a++, a == s && i()
        }

        var r = this, s = t.length;
        if (!t || !s) return void i();
        var a = 0;
        t.forEach(function (t) {
            t.once(e, n)
        })
    }, p.dispatchEvent = function (e, t, i) {
        var n = t ? [t].concat(i) : i;
        if (this.emitEvent(e, n), u) if (this.$element = this.$element || u(this.element), t) {
            var r = u.Event(t);
            r.type = e, this.$element.trigger(r, i)
        } else this.$element.trigger(e, i)
    }, p.ignore = function (e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, p.unignore = function (e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, p.stamp = function (e) {
        e = this._find(e), e && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, p.unstamp = function (e) {
        e = this._find(e), e && e.forEach(function (e) {
            n.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, p._find = function (e) {
        return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)) : void 0
    }, p._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, p._getBoundingRect = function () {
        var e = this.element.getBoundingClientRect(), t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, p._manageStamp = c, p._getElementOffset = function (e) {
        var t = e.getBoundingClientRect(), n = this._boundingRect, r = i(e), s = {
            left: t.left - n.left - r.marginLeft,
            top: t.top - n.top - r.marginTop,
            right: n.right - t.right - r.marginRight,
            bottom: n.bottom - t.bottom - r.marginBottom
        };
        return s
    }, p.handleEvent = n.handleEvent, p.bindResize = function () {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, p.unbindResize = function () {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, p.onresize = function () {
        this.resize()
    }, n.debounceMethod(s, "onresize", 100), p.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, p.needsResizeLayout = function () {
        var e = i(this.element), t = this.size && e;
        return t && e.innerWidth !== this.size.innerWidth
    }, p.addItems = function (e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, p.appended = function (e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, p.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
        }
    }, p.reveal = function (e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, i) {
                e.stagger(i * t), e.reveal()
            })
        }
    }, p.hide = function (e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function (e, i) {
                e.stagger(i * t), e.hide()
            })
        }
    }, p.revealItemElements = function (e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, p.hideItemElements = function (e) {
        var t = this.getItems(e);
        this.hide(t)
    }, p.getItem = function (e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i
        }
    }, p.getItems = function (e) {
        e = n.makeArray(e);
        var t = [];
        return e.forEach(function (e) {
            var i = this.getItem(e);
            i && t.push(i)
        }, this), t
    }, p.remove = function (e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function (e) {
            e.remove(), n.removeFrom(this.items, e)
        }, this)
    }, p.destroy = function () {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function (e) {
            e.destroy()
        }), this.unbindResize();
        var t = this.element.outlayerGUID;
        delete h[t], delete this.element.outlayerGUID, u && u.removeData(this.element, this.constructor.namespace)
    }, s.data = function (e) {
        e = n.getQueryElement(e);
        var t = e && e.outlayerGUID;
        return t && h[t]
    }, s.create = function (e, t) {
        var i = a(s);
        return i.defaults = n.extend({}, s.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, s.compatOptions), i.namespace = e, i.data = s.data, i.Item = a(r), n.htmlInit(i, e), u && u.bridget && u.bridget(e, i), i
    };
    var f = {ms: 1, s: 1e3};
    return s.Item = r, s
}), function (e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.Item = t(e.Outlayer))
}(window, function (e) {
    "use strict";

    function t() {
        e.Item.apply(this, arguments)
    }

    var i = t.prototype = Object.create(e.Item.prototype), n = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++, n.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var e = this.layout.options.getSortData, t = this.layout._sorters;
            for (var i in e) {
                var n = t[i];
                this.sortData[i] = n(this.element, this)
            }
        }
    };
    var r = i.destroy;
    return i.destroy = function () {
        r.apply(this, arguments), this.css({display: ""})
    }, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], t) : "object" == typeof module && module.exports ? module.exports = t(require("get-size"), require("outlayer")) : (e.Isotope = e.Isotope || {}, e.Isotope.LayoutMode = t(e.getSize, e.Outlayer))
}(window, function (e, t) {
    "use strict";

    function i(e) {
        this.isotope = e, e && (this.options = e.options[this.namespace], this.element = e.element, this.items = e.filteredItems, this.size = e.size)
    }

    var n = i.prototype,
        r = ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"];
    return r.forEach(function (e) {
        n[e] = function () {
            return t.prototype[e].apply(this.isotope, arguments)
        }
    }), n.needsVerticalResizeLayout = function () {
        var t = e(this.isotope.element), i = this.isotope.size && t;
        return i && t.innerHeight != this.isotope.size.innerHeight
    }, n._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, n.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, n.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, n.getSegmentSize = function (e, t) {
        var i = e + t, n = "outer" + t;
        if (this._getMeasurement(i, n), !this[i]) {
            var r = this.getFirstItemSize();
            this[i] = r && r[n] || this.isotope.size["inner" + t]
        }
    }, n.getFirstItemSize = function () {
        var t = this.isotope.filteredItems[0];
        return t && t.element && e(t.element)
    }, n.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, n.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (e, t) {
        function r() {
            i.apply(this, arguments)
        }

        return r.prototype = Object.create(n), r.prototype.constructor = r, t && (r.options = t), r.prototype.namespace = e, i.modes[e] = r, r
    }, i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function (e, t) {
    var i = e.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0], i = e && e.element;
            this.columnWidth = i && t(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter, r = this.containerWidth + this.gutter, s = r / n, a = n - r % n,
            o = a && 1 > a ? "round" : "floor";
        s = Math[o](s), this.cols = Math.max(s, 1)
    }, n.getContainerWidth = function () {
        var e = this._getOption("fitWidth"), i = e ? this.element.parentNode : this.element, n = t(i);
        this.containerWidth = n && n.innerWidth
    }, n._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth, i = t && 1 > t ? "round" : "ceil",
            n = Math[i](e.size.outerWidth / this.columnWidth);
        n = Math.min(n, this.cols);
        for (var r = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[r](n, e), a = {
            x: this.columnWidth * s.col,
            y: s.y
        }, o = s.y + e.size.outerHeight, l = n + s.col, u = s.col; l > u; u++) this.colYs[u] = o;
        return a
    }, n._getTopColPosition = function (e) {
        var t = this._getTopColGroup(e), i = Math.min.apply(Math, t);
        return {col: t.indexOf(i), y: i}
    }, n._getTopColGroup = function (e) {
        if (2 > e) return this.colYs;
        for (var t = [], i = this.cols + 1 - e, n = 0; i > n; n++) t[n] = this._getColGroupY(n, e);
        return t
    }, n._getColGroupY = function (e, t) {
        if (2 > t) return this.colYs[e];
        var i = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function (e, t) {
        var i = this.horizontalColIndex % this.cols, n = e > 1 && i + e > this.cols;
        i = n ? 0 : i;
        var r = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = r ? i + e : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, e)}
    }, n._manageStamp = function (e) {
        var i = t(e), n = this._getElementOffset(e), r = this._getOption("originLeft"), s = r ? n.left : n.right,
            a = s + i.outerWidth, o = Math.floor(s / this.columnWidth);
        o = Math.max(0, o);
        var l = Math.floor(a / this.columnWidth);
        l -= a % this.columnWidth ? 0 : 1, l = Math.min(this.cols - 1, l);
        for (var u = this._getOption("originTop"), c = (u ? n.top : n.bottom) + i.outerHeight, d = o; l >= d; d++) this.colYs[d] = Math.max(c, this.colYs[d])
    }, n._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {height: this.maxY};
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, n._getContainerFitWidth = function () {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function () {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode"), require("masonry-layout")) : t(e.Isotope.LayoutMode, e.Masonry)
}(window, function (e, t) {
    "use strict";
    var i = e.create("masonry"), n = i.prototype, r = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
    for (var s in t.prototype) r[s] || (n[s] = t.prototype[s]);
    var a = n.measureColumns;
    n.measureColumns = function () {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var o = n._getOption;
    return n._getOption = function (e) {
        return "fitWidth" == e ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : o.apply(this.isotope, arguments)
    }, i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], t) : "object" == typeof exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function (e) {
    "use strict";
    var t = e.create("fitRows"), i = t.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = e.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && t + this.x > i && (this.x = 0, this.y = this.maxY);
        var n = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + e.size.outerHeight), this.x += t, n
    }, i._getContainerSize = function () {
        return {height: this.maxY}
    }, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], t) : "object" == typeof module && module.exports ? module.exports = t(require("../layout-mode")) : t(e.Isotope.LayoutMode)
}(window, function (e) {
    "use strict";
    var t = e.create("vertical", {horizontalAlignment: 0}), i = t.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (e) {
        e.getSize();
        var t = (this.isotope.size.innerWidth - e.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += e.size.outerHeight, {x: t, y: i}
    }, i._getContainerSize = function () {
        return {height: this.y}
    }, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, n, r, s, a, o) {
        return t(e, i, n, r, s, a, o)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : e.Isotope = t(e, e.Outlayer, e.getSize, e.matchesSelector, e.fizzyUIUtils, e.Isotope.Item, e.Isotope.LayoutMode)
}(window, function (e, t, i, n, r, s, a) {
    function o(e, t) {
        return function (i, n) {
            for (var r = 0; r < e.length; r++) {
                var s = e[r], a = i.sortData[s], o = n.sortData[s];
                if (a > o || o > a) {
                    var l = void 0 !== t[s] ? t[s] : t, u = l ? 1 : -1;
                    return (a > o ? 1 : -1) * u
                }
            }
            return 0
        }
    }

    var l = e.jQuery, u = String.prototype.trim ? function (e) {
        return e.trim()
    } : function (e) {
        return e.replace(/^\s+|\s+$/g, "")
    }, c = t.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    c.Item = s, c.LayoutMode = a;
    var d = c.prototype;
    d._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), t.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var e in a.modes) this._initLayoutMode(e)
    }, d.reloadItems = function () {
        this.itemGUID = 0, t.prototype.reloadItems.call(this)
    }, d._itemize = function () {
        for (var e = t.prototype._itemize.apply(this, arguments), i = 0; i < e.length; i++) {
            var n = e[i];
            n.id = this.itemGUID++
        }
        return this._updateItemsSortData(e), e
    }, d._initLayoutMode = function (e) {
        var t = a.modes[e], i = this.options[e] || {};
        this.options[e] = t.options ? r.extend(t.options, i) : i, this.modes[e] = new t(this)
    }, d.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, d._layout = function () {
        var e = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, e), this._isLayoutInited = !0
    }, d.arrange = function (e) {
        this.option(e), this._getIsInstant();
        var t = this._filter(this.items);
        this.filteredItems = t.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [t]) : this._hideReveal(t), this._sort(), this._layout()
    }, d._init = d.arrange, d._hideReveal = function (e) {
        this.reveal(e.needReveal), this.hide(e.needHide)
    }, d._getIsInstant = function () {
        var e = this._getOption("layoutInstant"), t = void 0 !== e ? e : !this._isLayoutInited;
        return this._isInstant = t, t
    }, d._bindArrangeComplete = function () {
        function e() {
            t && i && n && r.dispatchEvent("arrangeComplete", null, [r.filteredItems])
        }

        var t, i, n, r = this;
        this.once("layoutComplete", function () {
            t = !0, e()
        }), this.once("hideComplete", function () {
            i = !0, e()
        }), this.once("revealComplete", function () {
            n = !0, e()
        })
    }, d._filter = function (e) {
        var t = this.options.filter;
        t = t || "*";
        for (var i = [], n = [], r = [], s = this._getFilterTest(t), a = 0; a < e.length; a++) {
            var o = e[a];
            if (!o.isIgnored) {
                var l = s(o);
                l && i.push(o), l && o.isHidden ? n.push(o) : l || o.isHidden || r.push(o)
            }
        }
        return {matches: i, needReveal: n, needHide: r}
    }, d._getFilterTest = function (e) {
        return l && this.options.isJQueryFiltering ? function (t) {
            return l(t.element).is(e)
        } : "function" == typeof e ? function (t) {
            return e(t.element)
        } : function (t) {
            return n(t.element, e)
        }
    }, d.updateSortData = function (e) {
        var t;
        e ? (e = r.makeArray(e), t = this.getItems(e)) : t = this.items, this._getSorters(), this._updateItemsSortData(t)
    }, d._getSorters = function () {
        var e = this.options.getSortData;
        for (var t in e) {
            var i = e[t];
            this._sorters[t] = h(i)
        }
    }, d._updateItemsSortData = function (e) {
        for (var t = e && e.length, i = 0; t && t > i; i++) {
            var n = e[i];
            n.updateSortData()
        }
    };
    var h = function () {
        function e(e) {
            if ("string" != typeof e) return e;
            var i = u(e).split(" "), n = i[0], r = n.match(/^\[(.+)\]$/), s = r && r[1], a = t(s, n),
                o = c.sortDataParsers[i[1]];
            return e = o ? function (e) {
                return e && o(a(e))
            } : function (e) {
                return e && a(e)
            }
        }

        function t(e, t) {
            return e ? function (t) {
                return t.getAttribute(e)
            } : function (e) {
                var i = e.querySelector(t);
                return i && i.textContent
            }
        }

        return e
    }();
    c.sortDataParsers = {
        parseInt: function (e) {
            return parseInt(e, 10)
        }, parseFloat: function (e) {
            return parseFloat(e)
        }
    }, d._sort = function () {
        if (this.options.sortBy) {
            var e = r.makeArray(this.options.sortBy);
            this._getIsSameSortBy(e) || (this.sortHistory = e.concat(this.sortHistory));
            var t = o(this.sortHistory, this.options.sortAscending);
            this.filteredItems.sort(t)
        }
    }, d._getIsSameSortBy = function (e) {
        for (var t = 0; t < e.length; t++) if (e[t] != this.sortHistory[t]) return !1;
        return !0
    }, d._mode = function () {
        var e = this.options.layoutMode, t = this.modes[e];
        if (!t) throw new Error("No layout mode: " + e);
        return t.options = this.options[e], t
    }, d._resetLayout = function () {
        t.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, d._getItemLayoutPosition = function (e) {
        return this._mode()._getItemLayoutPosition(e)
    }, d._manageStamp = function (e) {
        this._mode()._manageStamp(e)
    }, d._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, d.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, d.appended = function (e) {
        var t = this.addItems(e);
        if (t.length) {
            var i = this._filterRevealAdded(t);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, d.prepended = function (e) {
        var t = this._itemize(e);
        if (t.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(t);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = t.concat(this.items)
        }
    }, d._filterRevealAdded = function (e) {
        var t = this._filter(e);
        return this.hide(t.needHide), this.reveal(t.matches), this.layoutItems(t.matches, !0), t.matches
    }, d.insert = function (e) {
        var t = this.addItems(e);
        if (t.length) {
            var i, n, r = t.length;
            for (i = 0; r > i; i++) n = t[i], this.element.appendChild(n.element);
            var s = this._filter(t).matches;
            for (i = 0; r > i; i++) t[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; r > i; i++) delete t[i].isLayoutInstant;
            this.reveal(s)
        }
    };
    var p = d.remove;
    return d.remove = function (e) {
        e = r.makeArray(e);
        var t = this.getItems(e);
        p.call(this, e);
        for (var i = t && t.length, n = 0; i && i > n; n++) {
            var s = t[n];
            r.removeFrom(this.filteredItems, s)
        }
    }, d.shuffle = function () {
        for (var e = 0; e < this.items.length; e++) {
            var t = this.items[e];
            t.sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, d._noTransition = function (e, t) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var n = e.apply(this, t);
        return this.options.transitionDuration = i, n
    }, d.getFilteredItemElements = function () {
        return this.filteredItems.map(function (e) {
            return e.element
        })
    }, c
}), !function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {
    }

    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
                var s = i[r], a = n && n[s];
                a && (this.off(e, s), delete n[s]), s.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? u.call(e) : [e]
    }

    function r(e, t, s) {
        if (!(this instanceof r)) return new r(e, t, s);
        var a = e;
        return "string" == typeof e && (a = document.querySelectorAll(e)), a ? (this.elements = n(a), this.options = i({}, this.options), "function" == typeof t ? s = t : i(this.options, t), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (a || e))
    }

    function s(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var o = e.jQuery, l = e.console, u = Array.prototype.slice;
    r.prototype = Object.create(t.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, r.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && c[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var r = i[n];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var a = s[n];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var c = {1: !0, 9: !0, 11: !0};
    return r.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var r = n && n[2];
            r && this.addBackground(r, e), n = i.exec(t.backgroundImage)
        }
    }, r.prototype.addImage = function (e) {
        var t = new s(e);
        this.images.push(t)
    }, r.prototype.addBackground = function (e, t) {
        var i = new a(e, t);
        this.images.push(i)
    }, r.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }

        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, r.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
    }, r.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, s.prototype = Object.create(t.prototype), s.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, s.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, s.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, s.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, s.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, s.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype = Object.create(s.prototype), a.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, r.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (o = t, o.fn.imagesLoaded = function (e, t) {
            var i = new r(this, e, t);
            return i.jqDeferred.promise(o(this))
        })
    }, r.makeJQueryPlugin(), r
}), !function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Swiper = t()
}(this, function () {
    "use strict";

    function e(e, t) {
        var n = [], r = 0;
        if (e && !t && e instanceof i) return e;
        if (e) if ("string" == typeof e) {
            var s, a, o = e.trim();
            if (o.indexOf("<") >= 0 && o.indexOf(">") >= 0) {
                var l = "div";
                for (0 === o.indexOf("<li") && (l = "ul"), 0 === o.indexOf("<tr") && (l = "tbody"), 0 !== o.indexOf("<td") && 0 !== o.indexOf("<th") || (l = "tr"), 0 === o.indexOf("<tbody") && (l = "table"), 0 === o.indexOf("<option") && (l = "select"), (a = document.createElement(l)).innerHTML = o, r = 0; r < a.childNodes.length; r += 1) n.push(a.childNodes[r])
            } else for (s = t || "#" !== e[0] || e.match(/[ .<>:~]/) ? (t || document).querySelectorAll(e.trim()) : [document.getElementById(e.trim().split("#")[1])], r = 0; r < s.length; r += 1) s[r] && n.push(s[r])
        } else if (e.nodeType || e === window || e === document) n.push(e); else if (e.length > 0 && e[0].nodeType) for (r = 0; r < e.length; r += 1) n.push(e[r]);
        return new i(n)
    }

    function t(e) {
        for (var t = [], i = 0; i < e.length; i += 1) -1 === t.indexOf(e[i]) && t.push(e[i]);
        return t
    }

    var i = function (e) {
        for (var t = 0; t < e.length; t += 1) this[t] = e[t];
        return this.length = e.length, this
    };
    e.fn = i.prototype, e.Class = i, e.Dom7 = i, "resize scroll".split(" ");
    var n = {
        addClass: function (e) {
            if (void 0 === e) return this;
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.add(t[i]);
            return this
        }, removeClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.remove(t[i]);
            return this
        }, hasClass: function (e) {
            return !!this[0] && this[0].classList.contains(e)
        }, toggleClass: function (e) {
            for (var t = e.split(" "), i = 0; i < t.length; i += 1) for (var n = 0; n < this.length; n += 1) void 0 !== this[n].classList && this[n].classList.toggle(t[i]);
            return this
        }, attr: function (e, t) {
            var i = arguments;
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for (var n = 0; n < this.length; n += 1) if (2 === i.length) this[n].setAttribute(e, t); else for (var r in e) this[n][r] = e[r], this[n].setAttribute(r, e[r]);
            return this
        }, removeAttr: function (e) {
            for (var t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
            return this
        }, data: function (e, t) {
            var i;
            if (void 0 !== t) {
                for (var n = 0; n < this.length; n += 1) (i = this[n]).dom7ElementDataStorage || (i.dom7ElementDataStorage = {}), i.dom7ElementDataStorage[e] = t;
                return this
            }
            if (i = this[0]) {
                if (i.dom7ElementDataStorage && e in i.dom7ElementDataStorage) return i.dom7ElementDataStorage[e];
                var r = i.getAttribute("data-" + e);
                return r || void 0
            }
        }, transform: function (e) {
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransform = e, i.transform = e
            }
            return this
        }, transition: function (e) {
            "string" != typeof e && (e += "ms");
            for (var t = 0; t < this.length; t += 1) {
                var i = this[t].style;
                i.webkitTransitionDuration = e, i.transitionDuration = e
            }
            return this
        }, on: function () {
            function t(t) {
                var i = t.target;
                if (i) {
                    var n = t.target.dom7EventData || [];
                    if (n.unshift(t), e(i).is(o)) l.apply(i, n); else for (var r = e(i).parents(), s = 0; s < r.length; s += 1) e(r[s]).is(o) && l.apply(r[s], n)
                }
            }

            function i(e) {
                var t = e && e.target ? e.target.dom7EventData || [] : [];
                t.unshift(e), l.apply(this, t)
            }

            for (var n = [], r = arguments.length; r--;) n[r] = arguments[r];
            var s, a = n[0], o = n[1], l = n[2], u = n[3];
            "function" == typeof n[1] && (a = (s = n)[0], l = s[1], u = s[2], o = void 0), u || (u = !1);
            for (var c, d = a.split(" "), h = 0; h < this.length; h += 1) {
                var p = this[h];
                if (o) for (c = 0; c < d.length; c += 1) p.dom7LiveListeners || (p.dom7LiveListeners = []), p.dom7LiveListeners.push({
                    type: a,
                    listener: l,
                    proxyListener: t
                }), p.addEventListener(d[c], t, u); else for (c = 0; c < d.length; c += 1) p.dom7Listeners || (p.dom7Listeners = []), p.dom7Listeners.push({
                    type: a,
                    listener: l,
                    proxyListener: i
                }), p.addEventListener(d[c], i, u)
            }
            return this
        }, off: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            var i, n = e[0], r = e[1], s = e[2], a = e[3];
            "function" == typeof e[1] && (n = (i = e)[0], s = i[1], a = i[2], r = void 0), a || (a = !1);
            for (var o = n.split(" "), l = 0; l < o.length; l += 1) for (var u = 0; u < this.length; u += 1) {
                var c = this[u];
                if (r) {
                    if (c.dom7LiveListeners) for (var d = 0; d < c.dom7LiveListeners.length; d += 1) s ? c.dom7LiveListeners[d].listener === s && c.removeEventListener(o[l], c.dom7LiveListeners[d].proxyListener, a) : c.dom7LiveListeners[d].type === o[l] && c.removeEventListener(o[l], c.dom7LiveListeners[d].proxyListener, a)
                } else if (c.dom7Listeners) for (var h = 0; h < c.dom7Listeners.length; h += 1) s ? c.dom7Listeners[h].listener === s && c.removeEventListener(o[l], c.dom7Listeners[h].proxyListener, a) : c.dom7Listeners[h].type === o[l] && c.removeEventListener(o[l], c.dom7Listeners[h].proxyListener, a)
            }
            return this
        }, trigger: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = e[0].split(" "), n = e[1], r = 0; r < i.length; r += 1) for (var s = 0; s < this.length; s += 1) {
                var a = void 0;
                try {
                    a = new window.CustomEvent(i[r], {detail: n, bubbles: !0, cancelable: !0})
                } catch (e) {
                    (a = document.createEvent("Event")).initEvent(i[r], !0, !0), a.detail = n
                }
                this[s].dom7EventData = e.filter(function (e, t) {
                    return t > 0
                }), this[s].dispatchEvent(a), this[s].dom7EventData = [], delete this[s].dom7EventData
            }
            return this
        }, transitionEnd: function (e) {
            function t(s) {
                if (s.target === this) for (e.call(this, s), i = 0; i < n.length; i += 1) r.off(n[i], t)
            }

            var i, n = ["webkitTransitionEnd", "transitionend"], r = this;
            if (e) for (i = 0; i < n.length; i += 1) r.on(n[i], t);
            return this
        }, outerWidth: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                }
                return this[0].offsetWidth
            }
            return null
        }, outerHeight: function (e) {
            if (this.length > 0) {
                if (e) {
                    var t = this.styles();
                    return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                }
                return this[0].offsetHeight
            }
            return null
        }, offset: function () {
            if (this.length > 0) {
                var e = this[0], t = e.getBoundingClientRect(), i = document.body, n = e.clientTop || i.clientTop || 0,
                    r = e.clientLeft || i.clientLeft || 0, s = e === window ? window.scrollY : e.scrollTop,
                    a = e === window ? window.scrollX : e.scrollLeft;
                return {top: t.top + s - n, left: t.left + a - r}
            }
            return null
        }, css: function (e, t) {
            var i;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for (i = 0; i < this.length; i += 1) for (var n in e) this[i].style[n] = e[n];
                    return this
                }
                if (this[0]) return window.getComputedStyle(this[0], null).getPropertyValue(e)
            }
            if (2 === arguments.length && "string" == typeof e) {
                for (i = 0; i < this.length; i += 1) this[i].style[e] = t;
                return this
            }
            return this
        }, each: function (e) {
            if (!e) return this;
            for (var t = 0; t < this.length; t += 1) if (!1 === e.call(this[t], t, this[t])) return this;
            return this
        }, html: function (e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : void 0;
            for (var t = 0; t < this.length; t += 1) this[t].innerHTML = e;
            return this
        }, text: function (e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for (var t = 0; t < this.length; t += 1) this[t].textContent = e;
            return this
        }, is: function (t) {
            var n, r, s = this[0];
            if (!s || void 0 === t) return !1;
            if ("string" == typeof t) {
                if (s.matches) return s.matches(t);
                if (s.webkitMatchesSelector) return s.webkitMatchesSelector(t);
                if (s.msMatchesSelector) return s.msMatchesSelector(t);
                for (n = e(t), r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
                return !1
            }
            if (t === document) return s === document;
            if (t === window) return s === window;
            if (t.nodeType || t instanceof i) {
                for (n = t.nodeType ? [t] : t, r = 0; r < n.length; r += 1) if (n[r] === s) return !0;
                return !1
            }
            return !1
        }, index: function () {
            var e, t = this[0];
            if (t) {
                for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                return e
            }
        }, eq: function (e) {
            if (void 0 === e) return this;
            var t, n = this.length;
            return new i(e > n - 1 ? [] : 0 > e ? (t = n + e) < 0 ? [] : [this[t]] : [this[e]])
        }, append: function () {
            for (var e, t = [], n = arguments.length; n--;) t[n] = arguments[n];
            for (var r = 0; r < t.length; r += 1) {
                e = t[r];
                for (var s = 0; s < this.length; s += 1) if ("string" == typeof e) {
                    var a = document.createElement("div");
                    for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                } else if (e instanceof i) for (var o = 0; o < e.length; o += 1) this[s].appendChild(e[o]); else this[s].appendChild(e)
            }
            return this
        }, prepend: function (e) {
            var t, n;
            for (t = 0; t < this.length; t += 1) if ("string" == typeof e) {
                var r = document.createElement("div");
                for (r.innerHTML = e, n = r.childNodes.length - 1; n >= 0; n -= 1) this[t].insertBefore(r.childNodes[n], this[t].childNodes[0])
            } else if (e instanceof i) for (n = 0; n < e.length; n += 1) this[t].insertBefore(e[n], this[t].childNodes[0]); else this[t].insertBefore(e, this[t].childNodes[0]);
            return this
        }, next: function (t) {
            return new i(this.length > 0 ? t ? this[0].nextElementSibling && e(this[0].nextElementSibling).is(t) ? [this[0].nextElementSibling] : [] : this[0].nextElementSibling ? [this[0].nextElementSibling] : [] : [])
        }, nextAll: function (t) {
            var n = [], r = this[0];
            if (!r) return new i([]);
            for (; r.nextElementSibling;) {
                var s = r.nextElementSibling;
                t ? e(s).is(t) && n.push(s) : n.push(s), r = s
            }
            return new i(n)
        }, prev: function (t) {
            if (this.length > 0) {
                var n = this[0];
                return new i(t ? n.previousElementSibling && e(n.previousElementSibling).is(t) ? [n.previousElementSibling] : [] : n.previousElementSibling ? [n.previousElementSibling] : [])
            }
            return new i([])
        }, prevAll: function (t) {
            var n = [], r = this[0];
            if (!r) return new i([]);
            for (; r.previousElementSibling;) {
                var s = r.previousElementSibling;
                t ? e(s).is(t) && n.push(s) : n.push(s), r = s
            }
            return new i(n)
        }, parent: function (i) {
            for (var n = [], r = 0; r < this.length; r += 1) null !== this[r].parentNode && (i ? e(this[r].parentNode).is(i) && n.push(this[r].parentNode) : n.push(this[r].parentNode));
            return e(t(n))
        }, parents: function (i) {
            for (var n = [], r = 0; r < this.length; r += 1) for (var s = this[r].parentNode; s;) i ? e(s).is(i) && n.push(s) : n.push(s), s = s.parentNode;
            return e(t(n))
        }, closest: function (e) {
            var t = this;
            return void 0 === e ? new i([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
        }, find: function (e) {
            for (var t = [], n = 0; n < this.length; n += 1) for (var r = this[n].querySelectorAll(e), s = 0; s < r.length; s += 1) t.push(r[s]);
            return new i(t)
        }, children: function (n) {
            for (var r = [], s = 0; s < this.length; s += 1) for (var a = this[s].childNodes, o = 0; o < a.length; o += 1) n ? 1 === a[o].nodeType && e(a[o]).is(n) && r.push(a[o]) : 1 === a[o].nodeType && r.push(a[o]);
            return new i(t(r))
        }, remove: function () {
            for (var e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this
        }, add: function () {
            for (var t = [], i = arguments.length; i--;) t[i] = arguments[i];
            var n, r;
            for (n = 0; n < t.length; n += 1) {
                var s = e(t[n]);
                for (r = 0; r < s.length; r += 1) this[this.length] = s[r], this.length += 1
            }
            return this
        }, styles: function () {
            return this[0] ? window.getComputedStyle(this[0], null) : {}
        }
    };
    Object.keys(n).forEach(function (t) {
        e.fn[t] = n[t]
    });
    var r, s, a, o = "undefined" == typeof window ? {
        navigator: {userAgent: ""},
        location: {},
        history: {},
        addEventListener: function () {
        },
        removeEventListener: function () {
        },
        getComputedStyle: function () {
            return {}
        },
        Image: function () {
        },
        Date: function () {
        },
        screen: {}
    } : window, l = {
        deleteProps: function (e) {
            var t = e;
            Object.keys(t).forEach(function (e) {
                try {
                    t[e] = null
                } catch (e) {
                }
                try {
                    delete t[e]
                } catch (e) {
                }
            })
        }, nextTick: function (e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }, now: function () {
            return Date.now()
        }, getTranslate: function (e, t) {
            var i, n, r;
            void 0 === t && (t = "x");
            var s = o.getComputedStyle(e, null);
            return o.WebKitCSSMatrix ? ((n = s.transform || s.webkitTransform).split(",").length > 6 && (n = n.split(", ").map(function (e) {
                return e.replace(",", ".")
            }).join(", ")), r = new o.WebKitCSSMatrix("none" === n ? "" : n)) : i = (r = s.MozTransform || s.OTransform || s.MsTransform || s.msTransform || s.transform || s.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (n = o.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (n = o.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), n || 0
        }, parseUrlQuery: function (e) {
            var t, i, n, r, s = {}, a = e || o.location.href;
            if ("string" == typeof a && a.length) for (r = (i = (a = a.indexOf("?") > -1 ? a.replace(/\S*\?/, "") : "").split("&").filter(function (e) {
                return "" !== e
            })).length, t = 0; r > t; t += 1) n = i[t].replace(/#\S+/g, "").split("="), s[decodeURIComponent(n[0])] = void 0 === n[1] ? void 0 : decodeURIComponent(n[1]) || "";
            return s
        }, isObject: function (e) {
            return "object" == typeof e && null !== e && e.constructor && e.constructor === Object
        }, extend: function () {
            for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
            for (var i = Object(e[0]), n = 1; n < e.length; n += 1) {
                var r = e[n];
                if (void 0 !== r && null !== r) for (var s = Object.keys(Object(r)), a = 0, o = s.length; o > a; a += 1) {
                    var u = s[a], c = Object.getOwnPropertyDescriptor(r, u);
                    void 0 !== c && c.enumerable && (l.isObject(i[u]) && l.isObject(r[u]) ? l.extend(i[u], r[u]) : !l.isObject(i[u]) && l.isObject(r[u]) ? (i[u] = {}, l.extend(i[u], r[u])) : i[u] = r[u])
                }
            }
            return i
        }
    }, u = "undefined" == typeof document ? {
        addEventListener: function () {
        }, removeEventListener: function () {
        }, activeElement: {
            blur: function () {
            }, nodeName: ""
        }, querySelector: function () {
            return {}
        }, querySelectorAll: function () {
            return []
        }, createElement: function () {
            return {
                style: {}, setAttribute: function () {
                }, getElementsByTagName: function () {
                    return []
                }
            }
        }, location: {hash: ""}
    } : document, c = (a = u.createElement("div"), {
        touch: o.Modernizr && !0 === o.Modernizr.touch || !!("ontouchstart" in o || o.DocumentTouch && u instanceof o.DocumentTouch),
        pointerEvents: !(!o.navigator.pointerEnabled && !o.PointerEvent),
        prefixedPointerEvents: !!o.navigator.msPointerEnabled,
        transition: (s = a.style, "transition" in s || "webkitTransition" in s || "MozTransition" in s),
        transforms3d: o.Modernizr && !0 === o.Modernizr.csstransforms3d || (r = a.style, "webkitPerspective" in r || "MozPerspective" in r || "OPerspective" in r || "MsPerspective" in r || "perspective" in r),
        flexbox: function () {
            for (var e = a.style, t = "alignItems webkitAlignItems webkitBoxAlign msFlexAlign mozBoxAlign webkitFlexDirection msFlexDirection mozBoxDirection mozBoxOrient webkitBoxDirection webkitBoxOrient".split(" "), i = 0; i < t.length; i += 1) if (t[i] in e) return !0;
            return !1
        }(),
        observer: "MutationObserver" in o || "WebkitMutationObserver" in o,
        passiveListener: function () {
            var e = !1;
            try {
                var t = Object.defineProperty({}, "passive", {
                    get: function () {
                        e = !0
                    }
                });
                o.addEventListener("testPassiveListener", null, t)
            } catch (e) {
            }
            return e
        }(),
        gestures: "ongesturestart" in o
    }), d = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.params = e, t.eventsListeners = {}, t.params && t.params.on && Object.keys(t.params.on).forEach(function (e) {
            t.on(e, t.params.on[e])
        })
    }, h = {components: {configurable: !0}};
    d.prototype.on = function (e, t) {
        var i = this;
        return "function" != typeof t ? i : (e.split(" ").forEach(function (e) {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e].push(t)
        }), i)
    }, d.prototype.once = function (e, t) {
        var i = this;
        return "function" != typeof t ? i : i.on(e, function n() {
            for (var r = [], s = arguments.length; s--;) r[s] = arguments[s];
            t.apply(i, r), i.off(e, n)
        })
    }, d.prototype.off = function (e, t) {
        var i = this;
        return e.split(" ").forEach(function (e) {
            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e].forEach(function (n, r) {
                n === t && i.eventsListeners[e].splice(r, 1)
            })
        }), i
    }, d.prototype.emit = function () {
        for (var e = [], t = arguments.length; t--;) e[t] = arguments[t];
        var i, n, r, s = this;
        return s.eventsListeners ? ("string" == typeof e[0] || Array.isArray(e[0]) ? (i = e[0], n = e.slice(1, e.length), r = s) : (i = e[0].events, n = e[0].data, r = e[0].context || s), (Array.isArray(i) ? i : i.split(" ")).forEach(function (e) {
            if (s.eventsListeners[e]) {
                var t = [];
                s.eventsListeners[e].forEach(function (e) {
                    t.push(e)
                }), t.forEach(function (e) {
                    e.apply(r, n)
                })
            }
        }), s) : s
    }, d.prototype.useModulesParams = function (e) {
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i];
            n.params && l.extend(e, n.params)
        })
    }, d.prototype.useModules = function (e) {
        void 0 === e && (e = {});
        var t = this;
        t.modules && Object.keys(t.modules).forEach(function (i) {
            var n = t.modules[i], r = e[i] || {};
            n.instance && Object.keys(n.instance).forEach(function (e) {
                var i = n.instance[e];
                t[e] = "function" == typeof i ? i.bind(t) : i
            }), n.on && t.on && Object.keys(n.on).forEach(function (e) {
                t.on(e, n.on[e])
            }), n.create && n.create.bind(t)(r)
        })
    }, h.components.set = function (e) {
        this.use && this.use(e)
    }, d.installModule = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var n = this;
        n.prototype.modules || (n.prototype.modules = {});
        var r = e.name || Object.keys(n.prototype.modules).length + "_" + l.now();
        return n.prototype.modules[r] = e, e.proto && Object.keys(e.proto).forEach(function (t) {
            n.prototype[t] = e.proto[t]
        }), e["static"] && Object.keys(e["static"]).forEach(function (t) {
            n[t] = e["static"][t]
        }), e.install && e.install.apply(n, t), n
    }, d.use = function (e) {
        for (var t = [], i = arguments.length - 1; i-- > 0;) t[i] = arguments[i + 1];
        var n = this;
        return Array.isArray(e) ? (e.forEach(function (e) {
            return n.installModule(e)
        }), n) : n.installModule.apply(n, [e].concat(t))
    }, Object.defineProperties(d, h);
    var p = {
            updateSize: function () {
                var e, t, i = this.$el;
                e = void 0 !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left"), 10) - parseInt(i.css("padding-right"), 10), t = t - parseInt(i.css("padding-top"), 10) - parseInt(i.css("padding-bottom"), 10), l.extend(this, {
                    width: e,
                    height: t,
                    size: this.isHorizontal() ? e : t
                }))
            }, updateSlides: function () {
                var e = this.params, t = this.$wrapperEl, i = this.size, n = this.rtl, r = this.wrongRTL,
                    s = t.children("." + this.params.slideClass),
                    a = this.virtual && e.virtual.enabled ? this.virtual.slides.length : s.length, o = [], u = [], d = [],
                    h = e.slidesOffsetBefore;
                "function" == typeof h && (h = e.slidesOffsetBefore.call(this));
                var p = e.slidesOffsetAfter;
                "function" == typeof p && (p = e.slidesOffsetAfter.call(this));
                var f = a, m = this.snapGrid.length, g = this.snapGrid.length, v = e.spaceBetween, y = -h, b = 0, w = 0;
                if (void 0 !== i) {
                    var _, T;
                    "string" == typeof v && v.indexOf("%") >= 0 && (v = parseFloat(v.replace("%", "")) / 100 * i), this.virtualSize = -v, n ? s.css({
                        marginLeft: "",
                        marginTop: ""
                    }) : s.css({
                        marginRight: "",
                        marginBottom: ""
                    }), e.slidesPerColumn > 1 && (_ = Math.floor(a / e.slidesPerColumn) === a / this.params.slidesPerColumn ? a : Math.ceil(a / e.slidesPerColumn) * e.slidesPerColumn, "auto" !== e.slidesPerView && "row" === e.slidesPerColumnFill && (_ = Math.max(_, e.slidesPerView * e.slidesPerColumn)));
                    for (var x, C = e.slidesPerColumn, S = _ / C, E = S - (e.slidesPerColumn * S - a), P = 0; a > P; P += 1) {
                        T = 0;
                        var I = s.eq(P);
                        if (e.slidesPerColumn > 1) {
                            var k = void 0, j = void 0, A = void 0;
                            "column" === e.slidesPerColumnFill ? (A = P - (j = Math.floor(P / C)) * C, (j > E || j === E && A === C - 1) && (A += 1) >= C && (A = 0, j += 1), k = j + A * _ / C, I.css({
                                "-webkit-box-ordinal-group": k,
                                "-moz-box-ordinal-group": k,
                                "-ms-flex-order": k,
                                "-webkit-order": k,
                                order: k
                            })) : j = P - (A = Math.floor(P / S)) * S, I.css("margin-" + (this.isHorizontal() ? "top" : "left"), 0 !== A && e.spaceBetween && e.spaceBetween + "px").attr("data-swiper-column", j).attr("data-swiper-row", A)
                        }
                        "none" !== I.css("display") && ("auto" === e.slidesPerView ? (T = this.isHorizontal() ? I.outerWidth(!0) : I.outerHeight(!0), e.roundLengths && (T = Math.floor(T))) : (T = (i - (e.slidesPerView - 1) * v) / e.slidesPerView, e.roundLengths && (T = Math.floor(T)), s[P] && (this.isHorizontal() ? s[P].style.width = T + "px" : s[P].style.height = T + "px")), s[P] && (s[P].swiperSlideSize = T), d.push(T), e.centeredSlides ? (y = y + T / 2 + b / 2 + v, 0 === b && 0 !== P && (y = y - i / 2 - v), 0 === P && (y = y - i / 2 - v), Math.abs(y) < .001 && (y = 0), w % e.slidesPerGroup == 0 && o.push(y), u.push(y)) : (w % e.slidesPerGroup == 0 && o.push(y), u.push(y), y = y + T + v), this.virtualSize += T + v, b = T, w += 1)
                    }
                    if (this.virtualSize = Math.max(this.virtualSize, i) + p, n && r && ("slide" === e.effect || "coverflow" === e.effect) && t.css({width: this.virtualSize + e.spaceBetween + "px"}), c.flexbox && !e.setWrapperSize || (this.isHorizontal() ? t.css({width: this.virtualSize + e.spaceBetween + "px"}) : t.css({height: this.virtualSize + e.spaceBetween + "px"})), e.slidesPerColumn > 1 && (this.virtualSize = (T + e.spaceBetween) * _, this.virtualSize = Math.ceil(this.virtualSize / e.slidesPerColumn) - e.spaceBetween, this.isHorizontal() ? t.css({width: this.virtualSize + e.spaceBetween + "px"}) : t.css({height: this.virtualSize + e.spaceBetween + "px"}), e.centeredSlides)) {
                        x = [];
                        for (var D = 0; D < o.length; D += 1) o[D] < this.virtualSize + o[0] && x.push(o[D]);
                        o = x
                    }
                    if (!e.centeredSlides) {
                        x = [];
                        for (var M = 0; M < o.length; M += 1) o[M] <= this.virtualSize - i && x.push(o[M]);
                        o = x, Math.floor(this.virtualSize - i) - Math.floor(o[o.length - 1]) > 1 && o.push(this.virtualSize - i)
                    }
                    0 === o.length && (o = [0]), 0 !== e.spaceBetween && (this.isHorizontal() ? n ? s.css({marginLeft: v + "px"}) : s.css({marginRight: v + "px"}) : s.css({marginBottom: v + "px"})), l.extend(this, {
                        slides: s,
                        snapGrid: o,
                        slidesGrid: u,
                        slidesSizesGrid: d
                    }), a !== f && this.emit("slidesLengthChange"), o.length !== m && (this.params.watchOverflow && this.checkOverflow(), this.emit("snapGridLengthChange")), u.length !== g && this.emit("slidesGridLengthChange"), (e.watchSlidesProgress || e.watchSlidesVisibility) && this.updateSlidesOffset()
                }
            }, updateAutoHeight: function () {
                var e, t = [], i = 0;
                if ("auto" !== this.params.slidesPerView && this.params.slidesPerView > 1) for (e = 0; e < Math.ceil(this.params.slidesPerView); e += 1) {
                    var n = this.activeIndex + e;
                    if (n > this.slides.length) break;
                    t.push(this.slides.eq(n)[0])
                } else t.push(this.slides.eq(this.activeIndex)[0]);
                for (e = 0; e < t.length; e += 1) if (void 0 !== t[e]) {
                    var r = t[e].offsetHeight;
                    i = r > i ? r : i
                }
                i && this.$wrapperEl.css("height", i + "px")
            }, updateSlidesOffset: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
            }, updateSlidesProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this.params, i = this.slides, n = this.rtl;
                if (0 !== i.length) {
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    var r = -e;
                    n && (r = e), i.removeClass(t.slideVisibleClass);
                    for (var s = 0; s < i.length; s += 1) {
                        var a = i[s],
                            o = (r + (t.centeredSlides ? this.minTranslate() : 0) - a.swiperSlideOffset) / (a.swiperSlideSize + t.spaceBetween);
                        if (t.watchSlidesVisibility) {
                            var l = -(r - a.swiperSlideOffset), u = l + this.slidesSizesGrid[s];
                            (l >= 0 && l < this.size || u > 0 && u <= this.size || 0 >= l && u >= this.size) && i.eq(s).addClass(t.slideVisibleClass)
                        }
                        a.progress = n ? -o : o
                    }
                }
            }, updateProgress: function (e) {
                void 0 === e && (e = this.translate || 0);
                var t = this.params, i = this.maxTranslate() - this.minTranslate(), n = this.progress, r = this.isBeginning,
                    s = this.isEnd, a = r, o = s;
                0 === i ? (n = 0, r = !0, s = !0) : (r = (n = (e - this.minTranslate()) / i) <= 0, s = n >= 1), l.extend(this, {
                    progress: n,
                    isBeginning: r,
                    isEnd: s
                }), (t.watchSlidesProgress || t.watchSlidesVisibility) && this.updateSlidesProgress(e), r && !a && this.emit("reachBeginning toEdge"), s && !o && this.emit("reachEnd toEdge"), (a && !r || o && !s) && this.emit("fromEdge"), this.emit("progress", n)
            }, updateSlidesClasses: function () {
                var e, t = this.slides, i = this.params, n = this.$wrapperEl, r = this.activeIndex, s = this.realIndex,
                    a = this.virtual && i.virtual.enabled;
                t.removeClass(i.slideActiveClass + " " + i.slideNextClass + " " + i.slidePrevClass + " " + i.slideDuplicateActiveClass + " " + i.slideDuplicateNextClass + " " + i.slideDuplicatePrevClass), (e = a ? this.$wrapperEl.find("." + i.slideClass + '[data-swiper-slide-index="' + r + '"]') : t.eq(r)).addClass(i.slideActiveClass), i.loop && (e.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + s + '"]').addClass(i.slideDuplicateActiveClass));
                var o = e.nextAll("." + i.slideClass).eq(0).addClass(i.slideNextClass);
                i.loop && 0 === o.length && (o = t.eq(0)).addClass(i.slideNextClass);
                var l = e.prevAll("." + i.slideClass).eq(0).addClass(i.slidePrevClass);
                i.loop && 0 === l.length && (l = t.eq(-1)).addClass(i.slidePrevClass), i.loop && (o.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + o.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicateNextClass), l.hasClass(i.slideDuplicateClass) ? n.children("." + i.slideClass + ":not(." + i.slideDuplicateClass + ')[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass) : n.children("." + i.slideClass + "." + i.slideDuplicateClass + '[data-swiper-slide-index="' + l.attr("data-swiper-slide-index") + '"]').addClass(i.slideDuplicatePrevClass))
            }, updateActiveIndex: function (e) {
                var t, i = this.rtl ? this.translate : -this.translate, n = this.slidesGrid, r = this.snapGrid,
                    s = this.params, a = this.activeIndex, o = this.realIndex, u = this.snapIndex, c = e;
                if (void 0 === c) {
                    for (var d = 0; d < n.length; d += 1) void 0 !== n[d + 1] ? i >= n[d] && i < n[d + 1] - (n[d + 1] - n[d]) / 2 ? c = d : i >= n[d] && i < n[d + 1] && (c = d + 1) : i >= n[d] && (c = d);
                    s.normalizeSlideIndex && (0 > c || void 0 === c) && (c = 0)
                }
                if ((t = r.indexOf(i) >= 0 ? r.indexOf(i) : Math.floor(c / s.slidesPerGroup)) >= r.length && (t = r.length - 1), c !== a) {
                    var h = parseInt(this.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                    l.extend(this, {
                        snapIndex: t,
                        realIndex: h,
                        previousIndex: a,
                        activeIndex: c
                    }), this.emit("activeIndexChange"), this.emit("snapIndexChange"), o !== h && this.emit("realIndexChange"), this.emit("slideChange")
                } else t !== u && (this.snapIndex = t, this.emit("snapIndexChange"))
            }, updateClickedSlide: function (t) {
                var i = this.params, n = e(t.target).closest("." + i.slideClass)[0], r = !1;
                if (n) for (var s = 0; s < this.slides.length; s += 1) this.slides[s] === n && (r = !0);
                return n && r ? (this.clickedSlide = n, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(e(n).attr("data-swiper-slide-index"), 10) : this.clickedIndex = e(n).index(), i.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide(), void 0) : (this.clickedSlide = void 0, void(this.clickedIndex = void 0))
            }
        }, f = {
            getTranslate: function (e) {
                void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                var t = this.params, i = this.rtl, n = this.translate, r = this.$wrapperEl;
                if (t.virtualTranslate) return i ? -n : n;
                var s = l.getTranslate(r[0], e);
                return i && (s = -s), s || 0
            }, setTranslate: function (e, t) {
                var i = this.rtl, n = this.params, r = this.$wrapperEl, s = this.progress, a = 0, o = 0;
                this.isHorizontal() ? a = i ? -e : e : o = e, n.roundLengths && (a = Math.floor(a), o = Math.floor(o)), n.virtualTranslate || (c.transforms3d ? r.transform("translate3d(" + a + "px, " + o + "px, 0px)") : r.transform("translate(" + a + "px, " + o + "px)")), this.translate = this.isHorizontal() ? a : o;
                var l = this.maxTranslate() - this.minTranslate();
                (0 === l ? 0 : (e - this.minTranslate()) / l) !== s && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
            }, minTranslate: function () {
                return -this.snapGrid[0]
            }, maxTranslate: function () {
                return -this.snapGrid[this.snapGrid.length - 1]
            }
        }, m = {
            setTransition: function (e, t) {
                this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
            }, transitionStart: function (e) {
                void 0 === e && (e = !0);
                var t = this.activeIndex, i = this.params, n = this.previousIndex;
                i.autoHeight && this.updateAutoHeight(), this.emit("transitionStart"), e && t !== n && (this.emit("slideChangeTransitionStart"), t > n ? this.emit("slideNextTransitionStart") : this.emit("slidePrevTransitionStart"))
            }, transitionEnd: function (e) {
                void 0 === e && (e = !0);
                var t = this.activeIndex, i = this.previousIndex;
                this.animating = !1, this.setTransition(0), this.emit("transitionEnd"), e && t !== i && (this.emit("slideChangeTransitionEnd"), t > i ? this.emit("slideNextTransitionEnd") : this.emit("slidePrevTransitionEnd"))
            }
        }, g = {
            slideTo: function (e, t, i, n) {
                void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0);
                var r = this, s = e;
                0 > s && (s = 0);
                var a = r.params, o = r.snapGrid, l = r.slidesGrid, u = r.previousIndex, d = r.activeIndex, h = r.rtl,
                    p = r.$wrapperEl, f = Math.floor(s / a.slidesPerGroup);
                f >= o.length && (f = o.length - 1), (d || a.initialSlide || 0) === (u || 0) && i && r.emit("beforeSlideChangeStart");
                var m = -o[f];
                if (r.updateProgress(m), a.normalizeSlideIndex) for (var g = 0; g < l.length; g += 1) -Math.floor(100 * m) >= Math.floor(100 * l[g]) && (s = g);
                if (r.initialized) {
                    if (!r.allowSlideNext && m < r.translate && m < r.minTranslate()) return !1;
                    if (!r.allowSlidePrev && m > r.translate && m > r.maxTranslate() && (d || 0) !== s) return !1
                }
                return h && -m === r.translate || !h && m === r.translate ? (r.updateActiveIndex(s), a.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== a.effect && r.setTranslate(m), !1) : (0 !== t && c.transition ? (r.setTransition(t), r.setTranslate(m), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i), r.animating || (r.animating = !0, p.transitionEnd(function () {
                    r && !r.destroyed && r.transitionEnd(i)
                }))) : (r.setTransition(0), r.setTranslate(m), r.updateActiveIndex(s), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i), r.transitionEnd(i)), !0)
            }, slideNext: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this.params, r = this.animating;
                return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)) : this.slideTo(this.activeIndex + n.slidesPerGroup, e, t, i)
            }, slidePrev: function (e, t, i) {
                void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                var n = this.params, r = this.animating;
                return n.loop ? !r && (this.loopFix(), this._clientLeft = this.$wrapperEl[0].clientLeft, this.slideTo(this.activeIndex - 1, e, t, i)) : this.slideTo(this.activeIndex - 1, e, t, i)
            }, slideReset: function (e, t, i) {
                return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
            }, slideToClickedSlide: function () {
                var t, i = this, n = i.params, r = i.$wrapperEl,
                    s = "auto" === n.slidesPerView ? i.slidesPerViewDynamic() : n.slidesPerView, a = i.clickedIndex;
                if (n.loop) {
                    if (i.animating) return;
                    t = parseInt(e(i.clickedSlide).attr("data-swiper-slide-index"), 10), n.centeredSlides ? a < i.loopedSlides - s / 2 || a > i.slides.length - i.loopedSlides + s / 2 ? (i.loopFix(), a = r.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
                        i.slideTo(a)
                    })) : i.slideTo(a) : a > i.slides.length - s ? (i.loopFix(), a = r.children("." + n.slideClass + '[data-swiper-slide-index="' + t + '"]:not(.' + n.slideDuplicateClass + ")").eq(0).index(), l.nextTick(function () {
                        i.slideTo(a)
                    })) : i.slideTo(a)
                } else i.slideTo(a)
            }
        }, v = {
            loopCreate: function () {
                var t = this, i = t.params, n = t.$wrapperEl;
                n.children("." + i.slideClass + "." + i.slideDuplicateClass).remove();
                var r = n.children("." + i.slideClass);
                if (i.loopFillGroupWithBlank) {
                    var s = i.slidesPerGroup - r.length % i.slidesPerGroup;
                    if (s !== i.slidesPerGroup) {
                        for (var a = 0; s > a; a += 1) {
                            var o = e(u.createElement("div")).addClass(i.slideClass + " " + i.slideBlankClass);
                            n.append(o)
                        }
                        r = n.children("." + i.slideClass)
                    }
                }
                "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), t.loopedSlides = parseInt(i.loopedSlides || i.slidesPerView, 10), t.loopedSlides += i.loopAdditionalSlides, t.loopedSlides > r.length && (t.loopedSlides = r.length);
                var l = [], c = [];
                r.each(function (i, n) {
                    var s = e(n);
                    i < t.loopedSlides && c.push(n), i < r.length && i >= r.length - t.loopedSlides && l.push(n), s.attr("data-swiper-slide-index", i)
                });
                for (var d = 0; d < c.length; d += 1) n.append(e(c[d].cloneNode(!0)).addClass(i.slideDuplicateClass));
                for (var h = l.length - 1; h >= 0; h -= 1) n.prepend(e(l[h].cloneNode(!0)).addClass(i.slideDuplicateClass))
            }, loopFix: function () {
                var e, t = this.params, i = this.activeIndex, n = this.slides, r = this.loopedSlides,
                    s = this.allowSlidePrev, a = this.allowSlideNext;
                this.allowSlidePrev = !0, this.allowSlideNext = !0, r > i ? (e = n.length - 3 * r + i, e += r, this.slideTo(e, 0, !1, !0)) : ("auto" === t.slidesPerView && i >= 2 * r || i > n.length - 2 * t.slidesPerView) && (e = -n.length + i + r, e += r, this.slideTo(e, 0, !1, !0)), this.allowSlidePrev = s, this.allowSlideNext = a
            }, loopDestroy: function () {
                var e = this.$wrapperEl, t = this.params, i = this.slides;
                e.children("." + t.slideClass + "." + t.slideDuplicateClass).remove(), i.removeAttr("data-swiper-slide-index")
            }
        }, y = {
            setGrabCursor: function (e) {
                if (!c.touch && this.params.simulateTouch) {
                    var t = this.el;
                    t.style.cursor = "move", t.style.cursor = e ? "-webkit-grabbing" : "-webkit-grab", t.style.cursor = e ? "-moz-grabbin" : "-moz-grab", t.style.cursor = e ? "grabbing" : "grab"
                }
            }, unsetGrabCursor: function () {
                c.touch || (this.el.style.cursor = "")
            }
        }, b = {
            appendSlide: function (e) {
                var t = this.$wrapperEl, i = this.params;
                if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e) for (var n = 0; n < e.length; n += 1) e[n] && t.append(e[n]); else t.append(e);
                i.loop && this.loopCreate(), i.observer && c.observer || this.update()
            }, prependSlide: function (e) {
                var t = this.params, i = this.$wrapperEl, n = this.activeIndex;
                t.loop && this.loopDestroy();
                var r = n + 1;
                if ("object" == typeof e && "length" in e) {
                    for (var s = 0; s < e.length; s += 1) e[s] && i.prepend(e[s]);
                    r = n + e.length
                } else i.prepend(e);
                t.loop && this.loopCreate(), t.observer && c.observer || this.update(), this.slideTo(r, 0, !1)
            }, removeSlide: function (e) {
                var t = this.params, i = this.$wrapperEl, n = this.activeIndex;
                t.loop && (this.loopDestroy(), this.slides = i.children("." + t.slideClass));
                var r, s = n;
                if ("object" == typeof e && "length" in e) {
                    for (var a = 0; a < e.length; a += 1) r = e[a], this.slides[r] && this.slides.eq(r).remove(), s > r && (s -= 1);
                    s = Math.max(s, 0)
                } else r = e, this.slides[r] && this.slides.eq(r).remove(), s > r && (s -= 1), s = Math.max(s, 0);
                t.loop && this.loopCreate(), t.observer && c.observer || this.update(), t.loop ? this.slideTo(s + this.loopedSlides, 0, !1) : this.slideTo(s, 0, !1)
            }, removeAllSlides: function () {
                for (var e = [], t = 0; t < this.slides.length; t += 1) e.push(t);
                this.removeSlide(e)
            }
        }, w = function () {
            var e = o.navigator.userAgent, t = {
                    ios: !1,
                    android: !1,
                    androidChrome: !1,
                    desktop: !1,
                    windows: !1,
                    iphone: !1,
                    ipod: !1,
                    ipad: !1,
                    cordova: o.cordova || o.phonegap,
                    phonegap: o.cordova || o.phonegap
                }, i = e.match(/(Windows Phone);?[\s\/]+([\d.]+)?/), n = e.match(/(Android);?[\s\/]+([\d.]+)?/),
                r = e.match(/(iPad).*OS\s([\d_]+)/), s = e.match(/(iPod)(.*OS\s([\d_]+))?/),
                a = !r && e.match(/(iPhone\sOS|iOS)\s([\d_]+)/);
            if (i && (t.os = "windows", t.osVersion = i[2], t.windows = !0), n && !i && (t.os = "android", t.osVersion = n[2], t.android = !0, t.androidChrome = e.toLowerCase().indexOf("chrome") >= 0), (r || a || s) && (t.os = "ios", t.ios = !0), a && !s && (t.osVersion = a[2].replace(/_/g, "."), t.iphone = !0), r && (t.osVersion = r[2].replace(/_/g, "."), t.ipad = !0), s && (t.osVersion = s[3] ? s[3].replace(/_/g, ".") : null, t.iphone = !0), t.ios && t.osVersion && e.indexOf("Version/") >= 0 && "10" === t.osVersion.split(".")[0] && (t.osVersion = e.toLowerCase().split("version/")[1].split(" ")[0]), t.desktop = !(t.os || t.android || t.webView), t.webView = (a || r || s) && e.match(/.*AppleWebKit(?!.*Safari)/i), t.os && "ios" === t.os) {
                var l = t.osVersion.split("."), c = u.querySelector('meta[name="viewport"]');
                t.minimalUi = !t.webView && (s || a) && (1 * l[0] == 7 ? 1 * l[1] >= 1 : 1 * l[0] > 7) && c && c.getAttribute("content").indexOf("minimal-ui") >= 0
            }
            return t.pixelRatio = o.devicePixelRatio || 1, t
        }(), _ = function (t) {
            var i = this.touchEventsData, n = this.params, r = this.touches, s = t;
            if (s.originalEvent && (s = s.originalEvent), i.isTouchEvent = "touchstart" === s.type, (i.isTouchEvent || !("which" in s) || 3 !== s.which) && (!i.isTouched || !i.isMoved)) if (n.noSwiping && e(s.target).closest("." + n.noSwipingClass)[0]) this.allowClick = !0; else if (!n.swipeHandler || e(s).closest(n.swipeHandler)[0]) {
                r.currentX = "touchstart" === s.type ? s.targetTouches[0].pageX : s.pageX, r.currentY = "touchstart" === s.type ? s.targetTouches[0].pageY : s.pageY;
                var a = r.currentX, o = r.currentY;
                if (!(w.ios && !w.cordova && n.iOSEdgeSwipeDetection && a <= n.iOSEdgeSwipeThreshold && a >= window.screen.width - n.iOSEdgeSwipeThreshold)) {
                    if (l.extend(i, {
                            isTouched: !0,
                            isMoved: !1,
                            allowTouchCallbacks: !0,
                            isScrolling: void 0,
                            startMoving: void 0
                        }), r.startX = a, r.startY = o, i.touchStartTime = l.now(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, n.threshold > 0 && (i.allowThresholdMove = !1), "touchstart" !== s.type) {
                        var c = !0;
                        e(s.target).is(i.formElements) && (c = !1), u.activeElement && e(u.activeElement).is(i.formElements) && u.activeElement.blur(), c && this.allowTouchMove && s.preventDefault()
                    }
                    this.emit("touchStart", s)
                }
            }
        }, T = function (t) {
            var i = this.touchEventsData, n = this.params, r = this.touches, s = this.rtl, a = t;
            if (a.originalEvent && (a = a.originalEvent), !i.isTouchEvent || "mousemove" !== a.type) {
                var o = "touchmove" === a.type ? a.targetTouches[0].pageX : a.pageX,
                    c = "touchmove" === a.type ? a.targetTouches[0].pageY : a.pageY;
                if (a.preventedByNestedSwiper) return r.startX = o, void(r.startY = c);
                if (!this.allowTouchMove) return this.allowClick = !1, void(i.isTouched && (l.extend(r, {
                    startX: o,
                    startY: c,
                    currentX: o,
                    currentY: c
                }), i.touchStartTime = l.now()));
                if (i.isTouchEvent && n.touchReleaseOnEdges && !n.loop) if (this.isVertical()) {
                    if (c < r.startY && this.translate <= this.maxTranslate() || c > r.startY && this.translate >= this.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
                } else if (o < r.startX && this.translate <= this.maxTranslate() || o > r.startX && this.translate >= this.minTranslate()) return;
                if (i.isTouchEvent && u.activeElement && a.target === u.activeElement && e(a.target).is(i.formElements)) return i.isMoved = !0, void(this.allowClick = !1);
                if (i.allowTouchCallbacks && this.emit("touchMove", a), !(a.targetTouches && a.targetTouches.length > 1)) {
                    r.currentX = o, r.currentY = c;
                    var d, h = r.currentX - r.startX, p = r.currentY - r.startY;
                    if (void 0 === i.isScrolling && (this.isHorizontal() && r.currentY === r.startY || this.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : h * h + p * p >= 25 && (d = 180 * Math.atan2(Math.abs(p), Math.abs(h)) / Math.PI, i.isScrolling = this.isHorizontal() ? d > n.touchAngle : 90 - d > n.touchAngle)), i.isScrolling && this.emit("touchMoveOpposite", a), "undefined" == typeof startMoving && (r.currentX === r.startX && r.currentY === r.startY || (i.startMoving = !0)), i.isTouched) if (i.isScrolling) i.isTouched = !1; else if (i.startMoving) {
                        this.allowClick = !1, a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation(), i.isMoved || (n.loop && this.loopFix(), i.startTranslate = this.getTranslate(), this.setTransition(0), this.animating && this.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !n.grabCursor || !0 !== this.allowSlideNext && !0 !== this.allowSlidePrev || this.setGrabCursor(!0), this.emit("sliderFirstMove", a)), this.emit("sliderMove", a), i.isMoved = !0;
                        var f = this.isHorizontal() ? h : p;
                        r.diff = f, f *= n.touchRatio, s && (f = -f), this.swipeDirection = f > 0 ? "prev" : "next", i.currentTranslate = f + i.startTranslate;
                        var m = !0, g = n.resistanceRatio;
                        if (n.touchReleaseOnEdges && (g = 0), f > 0 && i.currentTranslate > this.minTranslate() ? (m = !1, n.resistance && (i.currentTranslate = this.minTranslate() - 1 + Math.pow(-this.minTranslate() + i.startTranslate + f, g))) : 0 > f && i.currentTranslate < this.maxTranslate() && (m = !1, n.resistance && (i.currentTranslate = this.maxTranslate() + 1 - Math.pow(this.maxTranslate() - i.startTranslate - f, g))), m && (a.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), n.threshold > 0) {
                            if (!(Math.abs(f) > n.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
                            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, void(r.diff = this.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
                        }
                        n.followFinger && ((n.freeMode || n.watchSlidesProgress || n.watchSlidesVisibility) && (this.updateActiveIndex(), this.updateSlidesClasses()), n.freeMode && (0 === i.velocities.length && i.velocities.push({
                            position: r[this.isHorizontal() ? "startX" : "startY"],
                            time: i.touchStartTime
                        }), i.velocities.push({
                            position: r[this.isHorizontal() ? "currentX" : "currentY"],
                            time: l.now()
                        })), this.updateProgress(i.currentTranslate), this.setTranslate(i.currentTranslate))
                    }
                }
            }
        }, x = function (e) {
            var t = this, i = t.touchEventsData, n = t.params, r = t.touches, s = t.rtl, a = t.$wrapperEl, o = t.slidesGrid,
                u = t.snapGrid, c = e;
            if (c.originalEvent && (c = c.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", c), i.allowTouchCallbacks = !1, i.isTouched) {
                n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
                var d, h = l.now(), p = h - i.touchStartTime;
                if (t.allowClick && (t.updateClickedSlide(c), t.emit("tap", c), 300 > p && h - i.lastClickTime > 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), i.clickTimeout = l.nextTick(function () {
                        t && !t.destroyed && t.emit("click", c)
                    }, 300)), 300 > p && h - i.lastClickTime < 300 && (i.clickTimeout && clearTimeout(i.clickTimeout), t.emit("doubleTap", c))), i.lastClickTime = l.now(), l.nextTick(function () {
                        t.destroyed || (t.allowClick = !0)
                    }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === r.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, void(i.isMoved = !1);
                if (i.isTouched = !1, i.isMoved = !1, d = n.followFinger ? s ? t.translate : -t.translate : -i.currentTranslate, n.freeMode) {
                    if (d < -t.minTranslate()) return void t.slideTo(t.activeIndex);
                    if (d > -t.maxTranslate()) return void(t.slides.length < u.length ? t.slideTo(u.length - 1) : t.slideTo(t.slides.length - 1));
                    if (n.freeModeMomentum) {
                        if (i.velocities.length > 1) {
                            var f = i.velocities.pop(), m = i.velocities.pop(), g = f.position - m.position,
                                v = f.time - m.time;
                            t.velocity = g / v, t.velocity /= 2, Math.abs(t.velocity) < n.freeModeMinimumVelocity && (t.velocity = 0), (v > 150 || l.now() - f.time > 300) && (t.velocity = 0)
                        } else t.velocity = 0;
                        t.velocity *= n.freeModeMomentumVelocityRatio, i.velocities.length = 0;
                        var y = 1e3 * n.freeModeMomentumRatio, b = t.velocity * y, w = t.translate + b;
                        s && (w = -w);
                        var _, T = !1, x = 20 * Math.abs(t.velocity) * n.freeModeMomentumBounceRatio;
                        if (w < t.maxTranslate()) n.freeModeMomentumBounce ? (w + t.maxTranslate() < -x && (w = t.maxTranslate() - x), _ = t.maxTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.maxTranslate(); else if (w > t.minTranslate()) n.freeModeMomentumBounce ? (w - t.minTranslate() > x && (w = t.minTranslate() + x), _ = t.minTranslate(), T = !0, i.allowMomentumBounce = !0) : w = t.minTranslate(); else if (n.freeModeSticky) {
                            for (var C, S = 0; S < u.length; S += 1) if (u[S] > -w) {
                                C = S;
                                break
                            }
                            w = -(w = Math.abs(u[C] - w) < Math.abs(u[C - 1] - w) || "next" === t.swipeDirection ? u[C] : u[C - 1])
                        }
                        if (0 !== t.velocity) y = s ? Math.abs((-w - t.translate) / t.velocity) : Math.abs((w - t.translate) / t.velocity); else if (n.freeModeSticky) return void t.slideReset();
                        n.freeModeMomentumBounce && T ? (t.updateProgress(_), t.setTransition(y), t.setTranslate(w), t.transitionStart(), t.animating = !0, a.transitionEnd(function () {
                            t && !t.destroyed && i.allowMomentumBounce && (t.emit("momentumBounce"), t.setTransition(n.speed), t.setTranslate(_), a.transitionEnd(function () {
                                t && !t.destroyed && t.transitionEnd()
                            }))
                        })) : t.velocity ? (t.updateProgress(w), t.setTransition(y), t.setTranslate(w), t.transitionStart(), t.animating || (t.animating = !0, a.transitionEnd(function () {
                            t && !t.destroyed && t.transitionEnd()
                        }))) : t.updateProgress(w), t.updateActiveIndex(), t.updateSlidesClasses()
                    }
                    (!n.freeModeMomentum || p >= n.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                } else {
                    for (var E = 0, P = t.slidesSizesGrid[0], I = 0; I < o.length; I += n.slidesPerGroup) void 0 !== o[I + n.slidesPerGroup] ? d >= o[I] && d < o[I + n.slidesPerGroup] && (E = I, P = o[I + n.slidesPerGroup] - o[I]) : d >= o[I] && (E = I, P = o[o.length - 1] - o[o.length - 2]);
                    var k = (d - o[E]) / P;
                    if (p > n.longSwipesMs) {
                        if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && (k >= n.longSwipesRatio ? t.slideTo(E + n.slidesPerGroup) : t.slideTo(E)), "prev" === t.swipeDirection && (k > 1 - n.longSwipesRatio ? t.slideTo(E + n.slidesPerGroup) : t.slideTo(E))
                    } else {
                        if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                        "next" === t.swipeDirection && t.slideTo(E + n.slidesPerGroup), "prev" === t.swipeDirection && t.slideTo(E)
                    }
                }
            }
        }, C = function () {
            var e = this.params, t = this.el;
            if (!t || 0 !== t.offsetWidth) {
                e.breakpoints && this.setBreakpoint();
                var i = this.allowSlideNext, n = this.allowSlidePrev;
                if (this.allowSlideNext = !0, this.allowSlidePrev = !0, this.updateSize(), this.updateSlides(), e.freeMode) {
                    var r = Math.min(Math.max(this.translate, this.maxTranslate()), this.minTranslate());
                    this.setTranslate(r), this.updateActiveIndex(), this.updateSlidesClasses(), e.autoHeight && this.updateAutoHeight()
                } else this.updateSlidesClasses(), ("auto" === e.slidesPerView || e.slidesPerView > 1) && this.isEnd && !this.params.centeredSlides ? this.slideTo(this.slides.length - 1, 0, !1, !0) : this.slideTo(this.activeIndex, 0, !1, !0);
                this.allowSlidePrev = n, this.allowSlideNext = i
            }
        }, S = function (e) {
            this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
        }, E = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "container",
            initialSlide: 0,
            speed: 300,
            iOSEdgeSwipeDetection: !1,
            iOSEdgeSwipeThreshold: 20,
            freeMode: !1,
            freeModeMomentum: !0,
            freeModeMomentumRatio: 1,
            freeModeMomentumBounce: !0,
            freeModeMomentumBounceRatio: 1,
            freeModeMomentumVelocityRatio: 1,
            freeModeSticky: !1,
            freeModeMinimumVelocity: .02,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerColumn: 1,
            slidesPerColumnFill: "column",
            slidesPerGroup: 1,
            centeredSlides: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            watchOverflow: !1,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !0,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            watchSlidesVisibility: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopFillGroupWithBlank: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            passiveListeners: !0,
            containerModifierClass: "swiper-container-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0
        }, P = {
            update: p,
            translate: f,
            transition: m,
            slide: g,
            loop: v,
            grabCursor: y,
            manipulation: b,
            events: {
                attachEvents: function () {
                    var e = this.params, t = this.touchEvents, i = this.el, n = this.wrapperEl;
                    this.onTouchStart = _.bind(this), this.onTouchMove = T.bind(this), this.onTouchEnd = x.bind(this), this.onClick = S.bind(this);
                    var r = "container" === e.touchEventsTarget ? i : n, s = !!e.nested;
                    if (c.pointerEvents || c.prefixedPointerEvents) r.addEventListener(t.start, this.onTouchStart, !1), (c.touch ? r : u).addEventListener(t.move, this.onTouchMove, s), (c.touch ? r : u).addEventListener(t.end, this.onTouchEnd, !1); else {
                        if (c.touch) {
                            var a = !("touchstart" !== t.start || !c.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.addEventListener(t.start, this.onTouchStart, a), r.addEventListener(t.move, this.onTouchMove, c.passiveListener ? {
                                passive: !1,
                                capture: s
                            } : s), r.addEventListener(t.end, this.onTouchEnd, a)
                        }
                        (e.simulateTouch && !w.ios && !w.android || e.simulateTouch && !c.touch && w.ios) && (r.addEventListener("mousedown", this.onTouchStart, !1), u.addEventListener("mousemove", this.onTouchMove, s), u.addEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (e.preventClicks || e.preventClicksPropagation) && r.addEventListener("click", this.onClick, !0), this.on("resize observerUpdate", C)
                }, detachEvents: function () {
                    var e = this.params, t = this.touchEvents, i = this.el, n = this.wrapperEl,
                        r = "container" === e.touchEventsTarget ? i : n, s = !!e.nested;
                    if (c.pointerEvents || c.prefixedPointerEvents) r.removeEventListener(t.start, this.onTouchStart, !1), (c.touch ? r : u).removeEventListener(t.move, this.onTouchMove, s), (c.touch ? r : u).removeEventListener(t.end, this.onTouchEnd, !1); else {
                        if (c.touch) {
                            var a = !("onTouchStart" !== t.start || !c.passiveListener || !e.passiveListeners) && {
                                passive: !0,
                                capture: !1
                            };
                            r.removeEventListener(t.start, this.onTouchStart, a), r.removeEventListener(t.move, this.onTouchMove, s), r.removeEventListener(t.end, this.onTouchEnd, a)
                        }
                        (e.simulateTouch && !w.ios && !w.android || e.simulateTouch && !c.touch && w.ios) && (r.removeEventListener("mousedown", this.onTouchStart, !1), u.removeEventListener("mousemove", this.onTouchMove, s), u.removeEventListener("mouseup", this.onTouchEnd, !1))
                    }
                    (e.preventClicks || e.preventClicksPropagation) && r.removeEventListener("click", this.onClick, !0), this.off("resize observerUpdate", C)
                }
            },
            breakpoints: {
                setBreakpoint: function () {
                    var e = this.activeIndex, t = this.loopedSlides;
                    void 0 === t && (t = 0);
                    var i = this.params, n = i.breakpoints;
                    if (n && (!n || 0 !== Object.keys(n).length)) {
                        var r = this.getBreakpoint(n);
                        if (r && this.currentBreakpoint !== r) {
                            var s = r in n ? n[r] : this.originalParams, a = i.loop && s.slidesPerView !== i.slidesPerView;
                            l.extend(this.params, s), l.extend(this, {
                                allowTouchMove: this.params.allowTouchMove,
                                allowSlideNext: this.params.allowSlideNext,
                                allowSlidePrev: this.params.allowSlidePrev
                            }), this.currentBreakpoint = r, a && (this.loopDestroy(), this.loopCreate(), this.updateSlides(), this.slideTo(e - t + this.loopedSlides, 0, !1)), this.emit("breakpoint", s)
                        }
                    }
                }, getBreakpoint: function (e) {
                    if (e) {
                        var t = !1, i = [];
                        Object.keys(e).forEach(function (e) {
                            i.push(e)
                        }), i.sort(function (e, t) {
                            return parseInt(e, 10) - parseInt(t, 10)
                        });
                        for (var n = 0; n < i.length; n += 1) {
                            var r = i[n];
                            r >= o.innerWidth && !t && (t = r)
                        }
                        return t || "max"
                    }
                }
            },
            checkOverflow: {
                checkOverflow: function () {
                    var e = this.isLocked;
                    this.isLocked = 1 === this.snapGrid.length, this.allowTouchMove = !this.isLocked, e && e !== this.isLocked && (this.isEnd = !1, this.navigation.update())
                }
            },
            classes: {
                addClasses: function () {
                    var e = this.classNames, t = this.params, i = this.rtl, n = this.$el, r = [];
                    r.push(t.direction), t.freeMode && r.push("free-mode"), c.flexbox || r.push("no-flexbox"), t.autoHeight && r.push("autoheight"), i && r.push("rtl"), t.slidesPerColumn > 1 && r.push("multirow"), w.android && r.push("android"), w.ios && r.push("ios"), (c.pointerEvents || c.prefixedPointerEvents) && r.push("wp8-" + t.direction), r.forEach(function (i) {
                        e.push(t.containerModifierClass + i)
                    }), n.addClass(e.join(" "))
                }, removeClasses: function () {
                    var e = this.$el, t = this.classNames;
                    e.removeClass(t.join(" "))
                }
            },
            images: {
                loadImage: function (e, t, i, n, r, s) {
                    function a() {
                        s && s()
                    }

                    var l;
                    e.complete && r ? a() : t ? ((l = new o.Image).onload = a, l.onerror = a, n && (l.sizes = n), i && (l.srcset = i), t && (l.src = t)) : a()
                }, preloadImages: function () {
                    function e() {
                        void 0 !== t && null !== t && t && !t.destroyed && (void 0 !== t.imagesLoaded && (t.imagesLoaded += 1), t.imagesLoaded === t.imagesToLoad.length && (t.params.updateOnImagesReady && t.update(), t.emit("imagesReady")))
                    }

                    var t = this;
                    t.imagesToLoad = t.$el.find("img");
                    for (var i = 0; i < t.imagesToLoad.length; i += 1) {
                        var n = t.imagesToLoad[i];
                        t.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, e)
                    }
                }
            }
        }, I = {}, k = function (t) {
            function i() {
                for (var n, r, s, a = [], o = arguments.length; o--;) a[o] = arguments[o];
                1 === a.length && a[0].constructor && a[0].constructor === Object ? r = a[0] : (n = (s = a)[0], r = s[1]), r || (r = {}), r = l.extend({}, r), n && !r.el && (r.el = n), t.call(this, r), Object.keys(P).forEach(function (e) {
                    Object.keys(P[e]).forEach(function (t) {
                        i.prototype[t] || (i.prototype[t] = P[e][t])
                    })
                });
                var u = this;
                void 0 === u.modules && (u.modules = {}), Object.keys(u.modules).forEach(function (e) {
                    var t = u.modules[e];
                    if (t.params) {
                        var i = Object.keys(t.params)[0], n = t.params[i];
                        if ("object" != typeof n) return;
                        if (!(i in r && "enabled" in n)) return;
                        !0 === r[i] && (r[i] = {enabled: !0}), "object" != typeof r[i] || "enabled" in r[i] || (r[i].enabled = !0), r[i] || (r[i] = {enabled: !1})
                    }
                });
                var d = l.extend({}, E);
                u.useModulesParams(d), u.params = l.extend({}, d, I, r), u.originalParams = l.extend({}, u.params), u.passedParams = l.extend({}, r);
                var h = e(u.params.el);
                if (n = h[0]) {
                    if (h.length > 1) {
                        var p = [];
                        return h.each(function (e, t) {
                            var n = l.extend({}, r, {el: t});
                            p.push(new i(n))
                        }), p
                    }
                    n.swiper = u, h.data("swiper", u);
                    var f, m, g = h.children("." + u.params.wrapperClass);
                    return l.extend(u, {
                        $el: h,
                        el: n,
                        $wrapperEl: g,
                        wrapperEl: g[0],
                        classNames: [],
                        slides: e(),
                        slidesGrid: [],
                        snapGrid: [],
                        slidesSizesGrid: [],
                        isHorizontal: function () {
                            return "horizontal" === u.params.direction
                        },
                        isVertical: function () {
                            return "vertical" === u.params.direction
                        },
                        rtl: "horizontal" === u.params.direction && ("rtl" === n.dir.toLowerCase() || "rtl" === h.css("direction")),
                        wrongRTL: "-webkit-box" === g.css("display"),
                        activeIndex: 0,
                        realIndex: 0,
                        isBeginning: !0,
                        isEnd: !1,
                        translate: 0,
                        progress: 0,
                        velocity: 0,
                        animating: !1,
                        allowSlideNext: u.params.allowSlideNext,
                        allowSlidePrev: u.params.allowSlidePrev,
                        touchEvents: (f = ["touchstart", "touchmove", "touchend"], m = ["mousedown", "mousemove", "mouseup"], c.pointerEvents ? m = ["pointerdown", "pointermove", "pointerup"] : c.prefixedPointerEvents && (m = ["MSPointerDown", "MSPointerMove", "MSPointerUp"]), {
                            start: c.touch || !u.params.simulateTouch ? f[0] : m[0],
                            move: c.touch || !u.params.simulateTouch ? f[1] : m[1],
                            end: c.touch || !u.params.simulateTouch ? f[2] : m[2]
                        }),
                        touchEventsData: {
                            isTouched: void 0,
                            isMoved: void 0,
                            allowTouchCallbacks: void 0,
                            touchStartTime: void 0,
                            isScrolling: void 0,
                            currentTranslate: void 0,
                            startTranslate: void 0,
                            allowThresholdMove: void 0,
                            formElements: "input, select, option, textarea, button, video",
                            lastClickTime: l.now(),
                            clickTimeout: void 0,
                            velocities: [],
                            allowMomentumBounce: void 0,
                            isTouchEvent: void 0,
                            startMoving: void 0
                        },
                        allowClick: !0,
                        allowTouchMove: u.params.allowTouchMove,
                        touches: {startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0},
                        imagesToLoad: [],
                        imagesLoaded: 0
                    }), u.useModules(), u.params.init && u.init(), u
                }
            }

            t && (i.__proto__ = t), i.prototype = Object.create(t && t.prototype), i.prototype.constructor = i;
            var n = {
                extendedDefaults: {configurable: !0},
                defaults: {configurable: !0},
                Class: {configurable: !0},
                $: {configurable: !0}
            };
            return i.prototype.slidesPerViewDynamic = function () {
                var e = this.params, t = this.slides, i = this.slidesGrid, n = this.size, r = this.activeIndex, s = 1;
                if (e.centeredSlides) {
                    for (var a, o = t[r].swiperSlideSize, l = r + 1; l < t.length; l += 1) t[l] && !a && (s += 1, (o += t[l].swiperSlideSize) > n && (a = !0));
                    for (var u = r - 1; u >= 0; u -= 1) t[u] && !a && (s += 1, (o += t[u].swiperSlideSize) > n && (a = !0))
                } else for (var c = r + 1; c < t.length; c += 1) i[c] - i[r] < n && (s += 1);
                return s
            }, i.prototype.update = function () {
                function e() {
                    var e = t.rtl ? -1 * t.translate : t.translate,
                        i = Math.min(Math.max(e, t.maxTranslate()), t.minTranslate());
                    t.setTranslate(i), t.updateActiveIndex(), t.updateSlidesClasses()
                }

                var t = this;
                t && !t.destroyed && (t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), t.params.freeMode ? (e(), t.params.autoHeight && t.updateAutoHeight()) : (("auto" === t.params.slidesPerView || t.params.slidesPerView > 1) && t.isEnd && !t.params.centeredSlides ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0)) || e(), t.emit("update"))
            }, i.prototype.init = function () {
                this.initialized || (this.emit("beforeInit"), this.params.breakpoints && this.setBreakpoint(), this.addClasses(), this.params.loop && this.loopCreate(), this.updateSize(), this.updateSlides(), this.params.watchOverflow && this.checkOverflow(), this.params.grabCursor && this.setGrabCursor(), this.params.preloadImages && this.preloadImages(), this.params.loop ? this.slideTo(this.params.initialSlide + this.loopedSlides, 0, this.params.runCallbacksOnInit) : this.slideTo(this.params.initialSlide, 0, this.params.runCallbacksOnInit), this.attachEvents(), this.initialized = !0, this.emit("init"))
            }, i.prototype.destroy = function (e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                var i = this, n = i.params, r = i.$el, s = i.$wrapperEl, a = i.slides;
                i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), r.removeAttr("style"), s.removeAttr("style"), a && a.length && a.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index").removeAttr("data-swiper-column").removeAttr("data-swiper-row")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(function (e) {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, i.$el.data("swiper", null), l.deleteProps(i)), i.destroyed = !0
            }, i.extendDefaults = function (e) {
                l.extend(I, e)
            }, n.extendedDefaults.get = function () {
                return I
            }, n.defaults.get = function () {
                return E
            }, n.Class.get = function () {
                return t
            }, n.$.get = function () {
                return e
            }, Object.defineProperties(i, n), i
        }(d), j = {name: "device", proto: {device: w}, "static": {device: w}},
        A = {name: "support", proto: {support: c}, "static": {support: c}}, D = function () {
            return {
                isSafari: (e = o.navigator.userAgent.toLowerCase(), e.indexOf("safari") >= 0 && e.indexOf("chrome") < 0 && e.indexOf("android") < 0),
                isUiWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(o.navigator.userAgent)
            };
            var e
        }(), M = {name: "browser", proto: {browser: D}, "static": {browser: D}}, O = {
            name: "resize", create: function () {
                var e = this;
                l.extend(e, {
                    resize: {
                        resizeHandler: function () {
                            e && !e.destroyed && e.initialized && (e.emit("beforeResize"), e.emit("resize"))
                        }, orientationChangeHandler: function () {
                            e && !e.destroyed && e.initialized && e.emit("orientationchange")
                        }
                    }
                })
            }, on: {
                init: function () {
                    o.addEventListener("resize", this.resize.resizeHandler), o.addEventListener("orientationchange", this.resize.orientationChangeHandler)
                }, destroy: function () {
                    o.removeEventListener("resize", this.resize.resizeHandler), o.removeEventListener("orientationchange", this.resize.orientationChangeHandler)
                }
            }
        }, Y = {
            func: o.MutationObserver || o.WebkitMutationObserver, attach: function (e, t) {
                void 0 === t && (t = {});
                var i = this, n = new (0, Y.func)(function (e) {
                    e.forEach(function (e) {
                        i.emit("observerUpdate", e)
                    })
                });
                n.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), i.observer.observers.push(n)
            }, init: function () {
                if (c.observer && this.params.observer) {
                    if (this.params.observeParents) for (var e = this.$el.parents(), t = 0; t < e.length; t += 1) this.observer.attach(e[t]);
                    this.observer.attach(this.$el[0], {childList: !1}), this.observer.attach(this.$wrapperEl[0], {attributes: !1})
                }
            }, destroy: function () {
                this.observer.observers.forEach(function (e) {
                    e.disconnect()
                }), this.observer.observers = []
            }
        }, z = {
            name: "observer", params: {observer: !1, observeParents: !1}, create: function () {
                l.extend(this, {
                    observer: {
                        init: Y.init.bind(this),
                        attach: Y.attach.bind(this),
                        destroy: Y.destroy.bind(this),
                        observers: []
                    }
                })
            }, on: {
                init: function () {
                    this.observer.init()
                }, destroy: function () {
                    this.observer.destroy()
                }
            }
        }, Q = {
            update: function (e) {
                function t() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load()
                }

                var i = this, n = i.params, r = n.slidesPerView, s = n.slidesPerGroup, a = n.centeredSlides, o = i.virtual,
                    u = o.from, c = o.to, d = o.slides, h = o.slidesGrid, p = o.renderSlide, f = o.offset;
                i.updateActiveIndex();
                var m, g, v, y = i.activeIndex || 0;
                m = i.rtl && i.isHorizontal() ? "right" : i.isHorizontal() ? "left" : "top", a ? (g = Math.floor(r / 2) + s, v = Math.floor(r / 2) + s) : (g = r + (s - 1), v = s);
                var b = Math.max((y || 0) - v, 0), w = Math.min((y || 0) + g, d.length - 1),
                    _ = (i.slidesGrid[b] || 0) - (i.slidesGrid[0] || 0);
                if (l.extend(i.virtual, {
                        from: b,
                        to: w,
                        offset: _,
                        slidesGrid: i.slidesGrid
                    }), u === b && c === w && !e) return i.slidesGrid !== h && _ !== f && i.slides.css(m, _ + "px"), void i.updateProgress();
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: _,
                    from: b,
                    to: w,
                    slides: function () {
                        for (var e = [], t = b; w >= t; t += 1) e.push(d[t]);
                        return e
                    }()
                }), void t();
                var T = [], x = [];
                if (e) i.$wrapperEl.find("." + i.params.slideClass).remove(); else for (var C = u; c >= C; C += 1) (b > C || C > w) && i.$wrapperEl.find("." + i.params.slideClass + '[data-swiper-slide-index="' + C + '"]').remove();
                for (var S = 0; S < d.length; S += 1) S >= b && w >= S && (void 0 === c || e ? x.push(S) : (S > c && x.push(S), u > S && T.push(S)));
                x.forEach(function (e) {
                    i.$wrapperEl.append(p(d[e], e))
                }), T.sort(function (e, t) {
                    return t > e
                }).forEach(function (e) {
                    i.$wrapperEl.prepend(p(d[e], e))
                }), i.$wrapperEl.children(".swiper-slide").css(m, _ + "px"), t()
            }, renderSlide: function (t, i) {
                var n = this.params.virtual;
                if (n.cache && this.virtual.cache[i]) return this.virtual.cache[i];
                var r = e(n.renderSlide ? n.renderSlide.call(this, t, i) : '<div class="' + this.params.slideClass + '" data-swiper-slide-index="' + i + '">' + t + "</div>");
                return r.attr("data-swiper-slide-index") || r.attr("data-swiper-slide-index", i), n.cache && (this.virtual.cache[i] = r), r
            }, appendSlide: function (e) {
                this.virtual.slides.push(e), this.virtual.update(!0)
            }, prependSlide: function (e) {
                if (this.virtual.slides.unshift(e), this.params.virtual.cache) {
                    var t = this.virtual.cache, i = {};
                    Object.keys(t).forEach(function (e) {
                        i[e + 1] = t[e]
                    }), this.virtual.cache = i
                }
                this.virtual.update(!0), this.slideNext(0)
            }
        }, L = {
            name: "virtual",
            params: {virtual: {enabled: !1, slides: [], cache: !0, renderSlide: null, renderExternal: null}},
            create: function () {
                l.extend(this, {
                    virtual: {
                        update: Q.update.bind(this),
                        appendSlide: Q.appendSlide.bind(this),
                        prependSlide: Q.prependSlide.bind(this),
                        renderSlide: Q.renderSlide.bind(this),
                        slides: this.params.virtual.slides,
                        cache: {}
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if (this.params.virtual.enabled) {
                        this.classNames.push(this.params.containerModifierClass + "virtual");
                        var e = {watchSlidesProgress: !0};
                        l.extend(this.params, e), l.extend(this.originalParams, e), this.virtual.update()
                    }
                }, setTranslate: function () {
                    this.params.virtual.enabled && this.virtual.update()
                }
            }
        }, N = {
            handle: function (e) {
                var t = e;
                t.originalEvent && (t = t.originalEvent);
                var i = t.keyCode || t.charCode;
                if (!this.allowSlideNext && (this.isHorizontal() && 39 === i || this.isVertical() && 40 === i)) return !1;
                if (!this.allowSlidePrev && (this.isHorizontal() && 37 === i || this.isVertical() && 38 === i)) return !1;
                if (!(t.shiftKey || t.altKey || t.ctrlKey || t.metaKey || u.activeElement && u.activeElement.nodeName && ("input" === u.activeElement.nodeName.toLowerCase() || "textarea" === u.activeElement.nodeName.toLowerCase()))) {
                    if (this.params.keyboard.onlyInViewport && (37 === i || 39 === i || 38 === i || 40 === i)) {
                        var n = !1;
                        if (this.$el.parents("." + this.params.slideClass).length > 0 && 0 === this.$el.parents("." + this.params.slideActiveClass).length) return;
                        var r = o.pageXOffset, s = o.pageYOffset, a = o.innerWidth, l = o.innerHeight,
                            c = this.$el.offset();
                        this.rtl && (c.left -= this.$el[0].scrollLeft);
                        for (var d = [[c.left, c.top], [c.left + this.width, c.top], [c.left, c.top + this.height], [c.left + this.width, c.top + this.height]], h = 0; h < d.length; h += 1) {
                            var p = d[h];
                            p[0] >= r && p[0] <= r + a && p[1] >= s && p[1] <= s + l && (n = !0)
                        }
                        if (!n) return
                    }
                    this.isHorizontal() ? (37 !== i && 39 !== i || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), (39 === i && !this.rtl || 37 === i && this.rtl) && this.slideNext(), (37 === i && !this.rtl || 39 === i && this.rtl) && this.slidePrev()) : (38 !== i && 40 !== i || (t.preventDefault ? t.preventDefault() : t.returnValue = !1), 40 === i && this.slideNext(), 38 === i && this.slidePrev()), this.emit("keyPress", i)
                }
            }, enable: function () {
                this.keyboard.enabled || (e(u).on("keydown", this.keyboard.handle), this.keyboard.enabled = !0)
            }, disable: function () {
                this.keyboard.enabled && (e(u).off("keydown", this.keyboard.handle), this.keyboard.enabled = !1)
            }
        }, B = {
            name: "keyboard", params: {keyboard: {enabled: !1, onlyInViewport: !0}}, create: function () {
                l.extend(this, {
                    keyboard: {
                        enabled: !1,
                        enable: N.enable.bind(this),
                        disable: N.disable.bind(this),
                        handle: N.handle.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.keyboard.enabled && this.keyboard.enable()
                }, destroy: function () {
                    this.keyboard.enabled && this.keyboard.disable()
                }
            }
        }, H = {
            lastScrollTime: l.now(),
            event: o.navigator.userAgent.indexOf("firefox") > -1 ? "DOMMouseScroll" : function () {
                var e = "onwheel" in u;
                if (!e) {
                    var t = u.createElement("div");
                    t.setAttribute("onwheel", "return;"), e = "function" == typeof t.onwheel
                }
                return !e && u.implementation && u.implementation.hasFeature && !0 !== u.implementation.hasFeature("", "") && (e = u.implementation.hasFeature("Events.wheel", "3.0")), e
            }() ? "wheel" : "mousewheel",
            normalize: function (e) {
                var t = 0, i = 0, n = 0, r = 0;
                return "detail" in e && (i = e.detail), "wheelDelta" in e && (i = -e.wheelDelta / 120), "wheelDeltaY" in e && (i = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = i, i = 0), n = 10 * t, r = 10 * i, "deltaY" in e && (r = e.deltaY), "deltaX" in e && (n = e.deltaX), (n || r) && e.deltaMode && (1 === e.deltaMode ? (n *= 40, r *= 40) : (n *= 800, r *= 800)), n && !t && (t = 1 > n ? -1 : 1), r && !i && (i = 1 > r ? -1 : 1), {
                    spinX: t,
                    spinY: i,
                    pixelX: n,
                    pixelY: r
                }
            },
            handle: function (e) {
                var t = e, i = this, n = i.params.mousewheel;
                t.originalEvent && (t = t.originalEvent);
                var r = 0, s = i.rtl ? -1 : 1, a = H.normalize(t);
                if (n.forceToAxis) if (i.isHorizontal()) {
                    if (!(Math.abs(a.pixelX) > Math.abs(a.pixelY))) return !0;
                    r = a.pixelX * s
                } else {
                    if (!(Math.abs(a.pixelY) > Math.abs(a.pixelX))) return !0;
                    r = a.pixelY
                } else r = Math.abs(a.pixelX) > Math.abs(a.pixelY) ? -a.pixelX * s : -a.pixelY;
                if (0 === r) return !0;
                if (n.invert && (r = -r), i.params.freeMode) {
                    var u = i.getTranslate() + r * n.sensitivity, c = i.isBeginning, d = i.isEnd;
                    if (u >= i.minTranslate() && (u = i.minTranslate()), u <= i.maxTranslate() && (u = i.maxTranslate()), i.setTransition(0), i.setTranslate(u), i.updateProgress(), i.updateActiveIndex(), i.updateSlidesClasses(), (!c && i.isBeginning || !d && i.isEnd) && i.updateSlidesClasses(), i.params.freeModeSticky && (clearTimeout(i.mousewheel.timeout), i.mousewheel.timeout = l.nextTick(function () {
                            i.slideReset()
                        }, 300)), i.emit("scroll", t), i.params.autoplay && i.params.autoplayDisableOnInteraction && i.stopAutoplay(), 0 === u || u === i.maxTranslate()) return !0
                } else {
                    if (l.now() - i.mousewheel.lastScrollTime > 60) if (0 > r) if (i.isEnd && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slideNext(), i.emit("scroll", t); else if (i.isBeginning && !i.params.loop || i.animating) {
                        if (n.releaseOnEdges) return !0
                    } else i.slidePrev(), i.emit("scroll", t);
                    i.mousewheel.lastScrollTime = (new o.Date).getTime()
                }
                return t.preventDefault ? t.preventDefault() : t.returnValue = !1, !1
            },
            enable: function () {
                if (!H.event) return !1;
                if (this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.on(H.event, this.mousewheel.handle), this.mousewheel.enabled = !0, !0
            },
            disable: function () {
                if (!H.event) return !1;
                if (!this.mousewheel.enabled) return !1;
                var t = this.$el;
                return "container" !== this.params.mousewheel.eventsTarged && (t = e(this.params.mousewheel.eventsTarged)), t.off(H.event, this.mousewheel.handle), this.mousewheel.enabled = !1, !0
            }
        }, R = {
            update: function () {
                var e = this.params.navigation;
                if (!this.params.loop) {
                    var t = this.navigation, i = t.$nextEl, n = t.$prevEl;
                    n && n.length > 0 && (this.isBeginning ? n.addClass(e.disabledClass) : n.removeClass(e.disabledClass), n[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass)), i && i.length > 0 && (this.isEnd ? i.addClass(e.disabledClass) : i.removeClass(e.disabledClass), i[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](e.lockClass))
                }
            }, init: function () {
                var t, i, n = this, r = n.params.navigation;
                (r.nextEl || r.prevEl) && (r.nextEl && (t = e(r.nextEl), n.params.uniqueNavElements && "string" == typeof r.nextEl && t.length > 1 && 1 === n.$el.find(r.nextEl).length && (t = n.$el.find(r.nextEl))), r.prevEl && (i = e(r.prevEl), n.params.uniqueNavElements && "string" == typeof r.prevEl && i.length > 1 && 1 === n.$el.find(r.prevEl).length && (i = n.$el.find(r.prevEl))), t && t.length > 0 && t.on("click", function (e) {
                    e.preventDefault(), n.isEnd && !n.params.loop || n.slideNext()
                }), i && i.length > 0 && i.on("click", function (e) {
                    e.preventDefault(), n.isBeginning && !n.params.loop || n.slidePrev()
                }), l.extend(n.navigation, {$nextEl: t, nextEl: t && t[0], $prevEl: i, prevEl: i && i[0]}))
            }, destroy: function () {
                var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                t && t.length && (t.off("click"), t.removeClass(this.params.navigation.disabledClass)), i && i.length && (i.off("click"), i.removeClass(this.params.navigation.disabledClass))
            }
        }, F = {
            update: function () {
                var t = this.rtl, i = this.params.pagination;
                if (i.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var n,
                        r = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        s = this.pagination.$el,
                        a = this.params.loop ? Math.ceil((r - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length;
                    if (this.params.loop ? ((n = Math.ceil((this.activeIndex - this.loopedSlides) / this.params.slidesPerGroup)) > r - 1 - 2 * this.loopedSlides && (n -= r - 2 * this.loopedSlides), n > a - 1 && (n -= a), 0 > n && "bullets" !== this.params.paginationType && (n = a + n)) : n = void 0 !== this.snapIndex ? this.snapIndex : this.activeIndex || 0, "bullets" === i.type && this.pagination.bullets && this.pagination.bullets.length > 0) {
                        var o = this.pagination.bullets;
                        if (i.dynamicBullets && (this.pagination.bulletSize = o.eq(0)[this.isHorizontal() ? "outerWidth" : "outerHeight"](!0), s.css(this.isHorizontal() ? "width" : "height", 5 * this.pagination.bulletSize + "px")), o.removeClass(i.bulletActiveClass + " " + i.bulletActiveClass + "-next " + i.bulletActiveClass + "-next-next " + i.bulletActiveClass + "-prev " + i.bulletActiveClass + "-prev-prev"), s.length > 1) o.each(function (t, r) {
                            var s = e(r);
                            s.index() === n && (s.addClass(i.bulletActiveClass), i.dynamicBullets && (s.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), s.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next")))
                        }); else {
                            var l = o.eq(n);
                            l.addClass(i.bulletActiveClass), i.dynamicBullets && (l.prev().addClass(i.bulletActiveClass + "-prev").prev().addClass(i.bulletActiveClass + "-prev-prev"), l.next().addClass(i.bulletActiveClass + "-next").next().addClass(i.bulletActiveClass + "-next-next"))
                        }
                        if (i.dynamicBullets) {
                            var u = Math.min(o.length, 5),
                                c = (this.pagination.bulletSize * u - this.pagination.bulletSize) / 2 - n * this.pagination.bulletSize,
                                d = t ? "right" : "left";
                            o.css(this.isHorizontal() ? d : "top", c + "px")
                        }
                    }
                    if ("fraction" === i.type && (s.find("." + i.currentClass).text(n + 1), s.find("." + i.totalClass).text(a)), "progressbar" === i.type) {
                        var h = (n + 1) / a, p = h, f = 1;
                        this.isHorizontal() || (f = h, p = 1), s.find("." + i.progressbarFillClass).transform("translate3d(0,0,0) scaleX(" + p + ") scaleY(" + f + ")").transition(this.params.speed)
                    }
                    "custom" === i.type && i.renderCustom ? (s.html(i.renderCustom(this, n + 1, a)), this.emit("paginationRender", this, s[0])) : this.emit("paginationUpdate", this, s[0]), s[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](i.lockClass)
                }
            }, render: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.virtual && this.params.virtual.enabled ? this.virtual.slides.length : this.slides.length,
                        i = this.pagination.$el, n = "";
                    if ("bullets" === e.type) {
                        for (var r = this.params.loop ? Math.ceil((t - 2 * this.loopedSlides) / this.params.slidesPerGroup) : this.snapGrid.length, s = 0; r > s; s += 1) n += e.renderBullet ? e.renderBullet.call(this, s, e.bulletClass) : "<" + e.bulletElement + ' class="' + e.bulletClass + '"></' + e.bulletElement + ">";
                        i.html(n), this.pagination.bullets = i.find("." + e.bulletClass)
                    }
                    "fraction" === e.type && (n = e.renderFraction ? e.renderFraction.call(this, e.currentClass, e.totalClass) : '<span class="' + e.currentClass + '"></span> / <span class="' + e.totalClass + '"></span>', i.html(n)), "progressbar" === e.type && (n = e.renderProgressbar ? e.renderProgressbar.call(this, e.progressbarFillClass) : '<span class="' + e.progressbarFillClass + '"></span>', i.html(n)), "custom" !== e.type && this.emit("paginationRender", this.pagination.$el[0])
                }
            }, init: function () {
                var t = this, i = t.params.pagination;
                if (i.el) {
                    var n = e(i.el);
                    0 !== n.length && (t.params.uniqueNavElements && "string" == typeof i.el && n.length > 1 && 1 === t.$el.find(i.el).length && (n = t.$el.find(i.el)), "bullets" === i.type && i.clickable && n.addClass(i.clickableClass), n.addClass(i.modifierClass + i.type), "bullets" === i.type && i.dynamicBullets && n.addClass("" + i.modifierClass + i.type + "-dynamic"), i.clickable && n.on("click", "." + i.bulletClass, function (i) {
                        i.preventDefault();
                        var n = e(this).index() * t.params.slidesPerGroup;
                        t.params.loop && (n += t.loopedSlides), t.slideTo(n)
                    }), l.extend(t.pagination, {$el: n, el: n[0]}))
                }
            }, destroy: function () {
                var e = this.params.pagination;
                if (e.el && this.pagination.el && this.pagination.$el && 0 !== this.pagination.$el.length) {
                    var t = this.pagination.$el;
                    t.removeClass(e.hiddenClass), t.removeClass(e.modifierClass + e.type), this.pagination.bullets && this.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && t.off("click", "." + e.bulletClass)
                }
            }
        }, $ = {
            setTranslate: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar, t = this.rtl, i = this.progress, n = e.dragSize, r = e.trackSize, s = e.$dragEl,
                        a = e.$el, o = this.params.scrollbar, l = n, u = (r - n) * i;
                    t && this.isHorizontal() ? (u = -u) > 0 ? (l = n - u, u = 0) : -u + n > r && (l = r + u) : 0 > u ? (l = n + u, u = 0) : u + n > r && (l = r - u), this.isHorizontal() ? (c.transforms3d ? s.transform("translate3d(" + u + "px, 0, 0)") : s.transform("translateX(" + u + "px)"), s[0].style.width = l + "px") : (c.transforms3d ? s.transform("translate3d(0px, " + u + "px, 0)") : s.transform("translateY(" + u + "px)"), s[0].style.height = l + "px"), o.hide && (clearTimeout(this.scrollbar.timeout), a[0].style.opacity = 1, this.scrollbar.timeout = setTimeout(function () {
                        a[0].style.opacity = 0, a.transition(400)
                    }, 1e3))
                }
            }, setTransition: function (e) {
                this.params.scrollbar.el && this.scrollbar.el && this.scrollbar.$dragEl.transition(e)
            }, updateSize: function () {
                if (this.params.scrollbar.el && this.scrollbar.el) {
                    var e = this.scrollbar, t = e.$dragEl, i = e.$el;
                    t[0].style.width = "", t[0].style.height = "";
                    var n, r = this.isHorizontal() ? i[0].offsetWidth : i[0].offsetHeight, s = this.size / this.virtualSize,
                        a = s * (r / this.size);
                    n = "auto" === this.params.scrollbar.dragSize ? r * s : parseInt(this.params.scrollbar.dragSize, 10), this.isHorizontal() ? t[0].style.width = n + "px" : t[0].style.height = n + "px", i[0].style.display = s >= 1 ? "none" : "", this.params.scrollbarHide && (i[0].style.opacity = 0), l.extend(e, {
                        trackSize: r,
                        divider: s,
                        moveDivider: a,
                        dragSize: n
                    }), e.$el[this.params.watchOverflow && this.isLocked ? "addClass" : "removeClass"](this.params.scrollbar.lockClass)
                }
            }, setDragPosition: function (e) {
                var t, i = this.scrollbar, n = i.$el, r = i.dragSize, s = i.trackSize;
                t = ((this.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX || e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY || e.clientY) - n.offset()[this.isHorizontal() ? "left" : "top"] - r / 2) / (s - r), t = Math.max(Math.min(t, 1), 0), this.rtl && (t = 1 - t);
                var a = this.minTranslate() + (this.maxTranslate() - this.minTranslate()) * t;
                this.updateProgress(a), this.setTranslate(a), this.updateActiveIndex(), this.updateSlidesClasses()
            }, onDragStart: function (e) {
                var t = this.params.scrollbar, i = this.scrollbar, n = this.$wrapperEl, r = i.$el, s = i.$dragEl;
                this.scrollbar.isTouched = !0, e.preventDefault(), e.stopPropagation(), n.transition(100), s.transition(100), i.setDragPosition(e), clearTimeout(this.scrollbar.dragTimeout), r.transition(0), t.hide && r.css("opacity", 1), this.emit("scrollbarDragStart", e)
            }, onDragMove: function (e) {
                var t = this.scrollbar, i = this.$wrapperEl, n = t.$el, r = t.$dragEl;
                this.scrollbar.isTouched && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, t.setDragPosition(e), i.transition(0), n.transition(0), r.transition(0), this.emit("scrollbarDragMove", e))
            }, onDragEnd: function (e) {
                var t = this.params.scrollbar, i = this.scrollbar.$el;
                this.scrollbar.isTouched && (this.scrollbar.isTouched = !1, t.hide && (clearTimeout(this.scrollbar.dragTimeout), this.scrollbar.dragTimeout = l.nextTick(function () {
                    i.css("opacity", 0), i.transition(400)
                }, 1e3)), this.emit("scrollbarDragEnd", e), t.snapOnRelease && this.slideReset())
            }, enableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar.$el, i = c.touch ? t[0] : document;
                    t.on(this.scrollbar.dragEvents.start, this.scrollbar.onDragStart), e(i).on(this.scrollbar.dragEvents.move, this.scrollbar.onDragMove), e(i).on(this.scrollbar.dragEvents.end, this.scrollbar.onDragEnd)
                }
            }, disableDraggable: function () {
                if (this.params.scrollbar.el) {
                    var t = this.scrollbar.$el, i = c.touch ? t[0] : document;
                    t.off(this.scrollbar.dragEvents.start), e(i).off(this.scrollbar.dragEvents.move), e(i).off(this.scrollbar.dragEvents.end)
                }
            }, init: function () {
                var t = this;
                if (t.params.scrollbar.el) {
                    var i = t.scrollbar, n = t.$el, r = t.touchEvents, s = t.params.scrollbar, a = e(s.el);
                    t.params.uniqueNavElements && "string" == typeof s.el && a.length > 1 && 1 === n.find(s.el).length && (a = n.find(s.el));
                    var o = a.find(".swiper-scrollbar-drag");
                    0 === o.length && (o = e('<div class="swiper-scrollbar-drag"></div>'), a.append(o)), t.scrollbar.dragEvents = !1 !== t.params.simulateTouch || c.touch ? r : {
                        start: "mousedown",
                        move: "mousemove",
                        end: "mouseup"
                    }, l.extend(i, {$el: a, el: a[0], $dragEl: o, dragEl: o[0]}), s.draggable && i.enableDraggable()
                }
            }, destroy: function () {
                this.scrollbar.disableDraggable()
            }
        }, W = {
            setTransform: function (t, i) {
                var n = this.rtl, r = e(t), s = n ? -1 : 1, a = r.attr("data-swiper-parallax") || "0",
                    o = r.attr("data-swiper-parallax-x"), l = r.attr("data-swiper-parallax-y"),
                    u = r.attr("data-swiper-parallax-scale"), c = r.attr("data-swiper-parallax-opacity");
                if (o || l ? (o = o || "0", l = l || "0") : this.isHorizontal() ? (o = a, l = "0") : (l = a, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * s + "%" : o * i * s + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", void 0 !== c && null !== c) {
                    var d = c - (c - 1) * (1 - Math.abs(i));
                    r[0].style.opacity = d
                }
                if (void 0 === u || null === u) r.transform("translate3d(" + o + ", " + l + ", 0px)"); else {
                    var h = u - (u - 1) * (1 - Math.abs(i));
                    r.transform("translate3d(" + o + ", " + l + ", 0px) scale(" + h + ")")
                }
            }, setTranslate: function () {
                var t = this, i = t.$el, n = t.slides, r = t.progress, s = t.snapGrid;
                i.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, i) {
                    t.parallax.setTransform(i, r)
                }), n.each(function (i, n) {
                    var a = n.progress;
                    t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (a += Math.ceil(i / 2) - r * (s.length - 1)), a = Math.min(Math.max(a, -1), 1), e(n).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (e, i) {
                        t.parallax.setTransform(i, a)
                    })
                })
            }, setTransition: function (t) {
                void 0 === t && (t = this.params.speed), this.$el.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y]").each(function (i, n) {
                    var r = e(n), s = parseInt(r.attr("data-swiper-parallax-duration"), 10) || t;
                    0 === t && (s = 0), r.transition(s)
                })
            }
        }, q = {
            getDistanceBetweenTouches: function (e) {
                if (e.targetTouches.length < 2) return 1;
                var t = e.targetTouches[0].pageX, i = e.targetTouches[0].pageY, n = e.targetTouches[1].pageX,
                    r = e.targetTouches[1].pageY;
                return Math.sqrt(Math.pow(n - t, 2) + Math.pow(r - i, 2))
            }, onGestureStart: function (t) {
                var i = this.params.zoom, n = this.zoom, r = n.gesture;
                if (n.fakeGestureTouched = !1, n.fakeGestureMoved = !1, !c.gestures) {
                    if ("touchstart" !== t.type || "touchstart" === t.type && t.targetTouches.length < 2) return;
                    n.fakeGestureTouched = !0, r.scaleStart = q.getDistanceBetweenTouches(t)
                }
                r.$slideEl && r.$slideEl.length || (r.$slideEl = e(this), 0 === r.$slideEl.length && (r.$slideEl = this.slides.eq(this.activeIndex)), r.$imageEl = r.$slideEl.find("img, svg, canvas"), r.$imageWrapEl = r.$imageEl.parent("." + i.containerClass), r.maxRatio = r.$imageWrapEl.attr("data-swiper-zoom") || i.maxRatio, 0 !== r.$imageWrapEl.length) ? (r.$imageEl.transition(0), this.zoom.isScaling = !0) : r.$imageEl = void 0
            }, onGestureChange: function (e) {
                var t = this.params.zoom, i = this.zoom, n = i.gesture;
                if (!c.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    i.fakeGestureMoved = !0, n.scaleMove = q.getDistanceBetweenTouches(e)
                }
                n.$imageEl && 0 !== n.$imageEl.length && (c.gestures ? this.zoom.scale = e.scale * i.currentScale : i.scale = n.scaleMove / n.scaleStart * i.currentScale, i.scale > n.maxRatio && (i.scale = n.maxRatio - 1 + Math.pow(i.scale - n.maxRatio + 1, .5)), i.scale < t.minRatio && (i.scale = t.minRatio + 1 - Math.pow(t.minRatio - i.scale + 1, .5)), n.$imageEl.transform("translate3d(0,0,0) scale(" + i.scale + ")"))
            }, onGestureEnd: function (e) {
                var t = this.params.zoom, i = this.zoom, n = i.gesture;
                if (!c.gestures) {
                    if (!i.fakeGestureTouched || !i.fakeGestureMoved) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !w.android) return;
                    i.fakeGestureTouched = !1, i.fakeGestureMoved = !1
                }
                n.$imageEl && 0 !== n.$imageEl.length && (i.scale = Math.max(Math.min(i.scale, n.maxRatio), t.minRatio), n.$imageEl.transition(this.params.speed).transform("translate3d(0,0,0) scale(" + i.scale + ")"), i.currentScale = i.scale, i.isScaling = !1, 1 === i.scale && (n.$slideEl = void 0))
            }, onTouchStart: function (e) {
                var t = this.zoom, i = t.gesture, n = t.image;
                i.$imageEl && 0 !== i.$imageEl.length && (n.isTouched || (w.android && e.preventDefault(), n.isTouched = !0, n.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
            }, onTouchMove: function (e) {
                var t = this.zoom, i = t.gesture, n = t.image, r = t.velocity;
                if (i.$imageEl && 0 !== i.$imageEl.length && (this.allowClick = !1, n.isTouched && i.$slideEl)) {
                    n.isMoved || (n.width = i.$imageEl[0].offsetWidth, n.height = i.$imageEl[0].offsetHeight, n.startX = l.getTranslate(i.$imageWrapEl[0], "x") || 0, n.startY = l.getTranslate(i.$imageWrapEl[0], "y") || 0, i.slideWidth = i.$slideEl[0].offsetWidth, i.slideHeight = i.$slideEl[0].offsetHeight, i.$imageWrapEl.transition(0), this.rtl && (n.startX = -n.startX), this.rtl && (n.startY = -n.startY));
                    var s = n.width * t.scale, a = n.height * t.scale;
                    if (!(s < i.slideWidth && a < i.slideHeight)) {
                        if (n.minX = Math.min(i.slideWidth / 2 - s / 2, 0), n.maxX = -n.minX, n.minY = Math.min(i.slideHeight / 2 - a / 2, 0), n.maxY = -n.minY, n.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, n.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !n.isMoved && !t.isScaling) {
                            if (this.isHorizontal() && (Math.floor(n.minX) === Math.floor(n.startX) && n.touchesCurrent.x < n.touchesStart.x || Math.floor(n.maxX) === Math.floor(n.startX) && n.touchesCurrent.x > n.touchesStart.x)) return void(n.isTouched = !1);
                            if (!this.isHorizontal() && (Math.floor(n.minY) === Math.floor(n.startY) && n.touchesCurrent.y < n.touchesStart.y || Math.floor(n.maxY) === Math.floor(n.startY) && n.touchesCurrent.y > n.touchesStart.y)) return void(n.isTouched = !1)
                        }
                        e.preventDefault(), e.stopPropagation(), n.isMoved = !0, n.currentX = n.touchesCurrent.x - n.touchesStart.x + n.startX, n.currentY = n.touchesCurrent.y - n.touchesStart.y + n.startY, n.currentX < n.minX && (n.currentX = n.minX + 1 - Math.pow(n.minX - n.currentX + 1, .8)), n.currentX > n.maxX && (n.currentX = n.maxX - 1 + Math.pow(n.currentX - n.maxX + 1, .8)), n.currentY < n.minY && (n.currentY = n.minY + 1 - Math.pow(n.minY - n.currentY + 1, .8)), n.currentY > n.maxY && (n.currentY = n.maxY - 1 + Math.pow(n.currentY - n.maxY + 1, .8)), r.prevPositionX || (r.prevPositionX = n.touchesCurrent.x), r.prevPositionY || (r.prevPositionY = n.touchesCurrent.y), r.prevTime || (r.prevTime = Date.now()), r.x = (n.touchesCurrent.x - r.prevPositionX) / (Date.now() - r.prevTime) / 2, r.y = (n.touchesCurrent.y - r.prevPositionY) / (Date.now() - r.prevTime) / 2, Math.abs(n.touchesCurrent.x - r.prevPositionX) < 2 && (r.x = 0), Math.abs(n.touchesCurrent.y - r.prevPositionY) < 2 && (r.y = 0), r.prevPositionX = n.touchesCurrent.x, r.prevPositionY = n.touchesCurrent.y, r.prevTime = Date.now(), i.$imageWrapEl.transform("translate3d(" + n.currentX + "px, " + n.currentY + "px,0)")
                    }
                }
            }, onTouchEnd: function () {
                var e = this.zoom, t = e.gesture, i = e.image, n = e.velocity;
                if (t.$imageEl && 0 !== t.$imageEl.length) {
                    if (!i.isTouched || !i.isMoved) return i.isTouched = !1, void(i.isMoved = !1);
                    i.isTouched = !1, i.isMoved = !1;
                    var r = 300, s = 300, a = n.x * r, o = i.currentX + a, l = n.y * s, u = i.currentY + l;
                    0 !== n.x && (r = Math.abs((o - i.currentX) / n.x)), 0 !== n.y && (s = Math.abs((u - i.currentY) / n.y));
                    var c = Math.max(r, s);
                    i.currentX = o, i.currentY = u;
                    var d = i.width * e.scale, h = i.height * e.scale;
                    i.minX = Math.min(t.slideWidth / 2 - d / 2, 0), i.maxX = -i.minX, i.minY = Math.min(t.slideHeight / 2 - h / 2, 0), i.maxY = -i.minY, i.currentX = Math.max(Math.min(i.currentX, i.maxX), i.minX), i.currentY = Math.max(Math.min(i.currentY, i.maxY), i.minY), t.$imageWrapEl.transition(c).transform("translate3d(" + i.currentX + "px, " + i.currentY + "px,0)")
                }
            }, onTransitionEnd: function () {
                var e = this.zoom, t = e.gesture;
                t.$slideEl && this.previousIndex !== this.activeIndex && (t.$imageEl.transform("translate3d(0,0,0) scale(1)"), t.$imageWrapEl.transform("translate3d(0,0,0)"), t.$slideEl = void 0, t.$imageEl = void 0, t.$imageWrapEl = void 0, e.scale = 1, e.currentScale = 1)
            }, toggle: function (e) {
                var t = this.zoom;
                t.scale && 1 !== t.scale ? t.out() : t["in"](e)
            }, "in": function (t) {
                var i, n, r, s, a, o, l, u, c, d, h, p, f, m, g, v, y = this.zoom, b = this.params.zoom, w = y.gesture,
                    _ = y.image;
                w.$slideEl || (w.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), w.$imageEl = w.$slideEl.find("img, svg, canvas"), w.$imageWrapEl = w.$imageEl.parent("." + b.containerClass)), w.$imageEl && 0 !== w.$imageEl.length && (w.$slideEl.addClass("" + b.zoomedSlideClass), void 0 === _.touchesStart.x && t ? (i = "touchend" === t.type ? t.changedTouches[0].pageX : t.pageX, n = "touchend" === t.type ? t.changedTouches[0].pageY : t.pageY) : (i = _.touchesStart.x, n = _.touchesStart.y), y.scale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, y.currentScale = w.$imageWrapEl.attr("data-swiper-zoom") || b.maxRatio, t ? (g = w.$slideEl[0].offsetWidth, v = w.$slideEl[0].offsetHeight, r = w.$slideEl.offset().left + g / 2 - i, s = w.$slideEl.offset().top + v / 2 - n, l = w.$imageEl[0].offsetWidth, u = w.$imageEl[0].offsetHeight, c = l * y.scale, d = u * y.scale, f = -(h = Math.min(g / 2 - c / 2, 0)), m = -(p = Math.min(v / 2 - d / 2, 0)), a = r * y.scale, o = s * y.scale, h > a && (a = h), a > f && (a = f), p > o && (o = p), o > m && (o = m)) : (a = 0, o = 0), w.$imageWrapEl.transition(300).transform("translate3d(" + a + "px, " + o + "px,0)"), w.$imageEl.transition(300).transform("translate3d(0,0,0) scale(" + y.scale + ")"))
            }, out: function () {
                var t = this.zoom, i = this.params.zoom, n = t.gesture;
                n.$slideEl || (n.$slideEl = this.clickedSlide ? e(this.clickedSlide) : this.slides.eq(this.activeIndex), n.$imageEl = n.$slideEl.find("img, svg, canvas"), n.$imageWrapEl = n.$imageEl.parent("." + i.containerClass)), n.$imageEl && 0 !== n.$imageEl.length && (t.scale = 1, t.currentScale = 1, n.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), n.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), n.$slideEl.removeClass("" + i.zoomedSlideClass), n.$slideEl = void 0)
            }, enable: function () {
                var t = this, i = t.zoom;
                if (!i.enabled) {
                    i.enabled = !0;
                    var n = t.slides,
                        r = !("touchstart" !== t.touchEvents.start || !c.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    c.gestures ? (n.on("gesturestart", i.onGestureStart, r), n.on("gesturechange", i.onGestureChange, r), n.on("gestureend", i.onGestureEnd, r)) : "touchstart" === t.touchEvents.start && (n.on(t.touchEvents.start, i.onGestureStart, r), n.on(t.touchEvents.move, i.onGestureChange, r), n.on(t.touchEvents.end, i.onGestureEnd, r)), t.slides.each(function (n, r) {
                        var s = e(r);
                        s.find("." + t.params.zoom.containerClass).length > 0 && s.on(t.touchEvents.move, i.onTouchMove)
                    })
                }
            }, disable: function () {
                var t = this, i = t.zoom;
                if (i.enabled) {
                    t.zoom.enabled = !1;
                    var n = t.slides,
                        r = !("touchstart" !== t.touchEvents.start || !c.passiveListener || !t.params.passiveListeners) && {
                            passive: !0,
                            capture: !1
                        };
                    c.gestures ? (n.off("gesturestart", i.onGestureStart, r), n.off("gesturechange", i.onGestureChange, r), n.off("gestureend", i.onGestureEnd, r)) : "touchstart" === t.touchEvents.start && (n.off(t.touchEvents.start, i.onGestureStart, r), n.off(t.touchEvents.move, i.onGestureChange, r), n.off(t.touchEvents.end, i.onGestureEnd, r)), t.slides.each(function (n, r) {
                        var s = e(r);
                        s.find("." + t.params.zoom.containerClass).length > 0 && s.off(t.touchEvents.move, i.onTouchMove)
                    })
                }
            }
        }, V = {
            loadInSlide: function (t, i) {
                void 0 === i && (i = !0);
                var n = this, r = n.params.lazy;
                if (void 0 !== t && 0 !== n.slides.length) {
                    var s = n.virtual && n.params.virtual.enabled ? n.$wrapperEl.children("." + n.params.slideClass + '[data-swiper-slide-index="' + t + '"]') : n.slides.eq(t),
                        a = s.find("." + r.elementClass + ":not(." + r.loadedClass + "):not(." + r.loadingClass + ")");
                    !s.hasClass(r.elementClass) || s.hasClass(r.loadedClass) || s.hasClass(r.loadingClass) || (a = a.add(s[0])), 0 !== a.length && a.each(function (t, a) {
                        var o = e(a);
                        o.addClass(r.loadingClass);
                        var l = o.attr("data-background"), u = o.attr("data-src"), c = o.attr("data-srcset"),
                            d = o.attr("data-sizes");
                        n.loadImage(o[0], u || l, c, d, !1, function () {
                            if (void 0 !== n && null !== n && n && (!n || n.params) && !n.destroyed) {
                                if (l ? (o.css("background-image", 'url("' + l + '")'), o.removeAttr("data-background")) : (c && (o.attr("srcset", c), o.removeAttr("data-srcset")), d && (o.attr("sizes", d), o.removeAttr("data-sizes")), u && (o.attr("src", u), o.removeAttr("data-src"))), o.addClass(r.loadedClass).removeClass(r.loadingClass), s.find("." + r.preloaderClass).remove(), n.params.loop && i) {
                                    var e = s.attr("data-swiper-slide-index");
                                    if (s.hasClass(n.params.slideDuplicateClass)) {
                                        var t = n.$wrapperEl.children('[data-swiper-slide-index="' + e + '"]:not(.' + n.params.slideDuplicateClass + ")");
                                        n.lazy.loadInSlide(t.index(), !1)
                                    } else {
                                        var a = n.$wrapperEl.children("." + n.params.slideDuplicateClass + '[data-swiper-slide-index="' + e + '"]');
                                        n.lazy.loadInSlide(a.index(), !1)
                                    }
                                }
                                n.emit("lazyImageReady", s[0], o[0])
                            }
                        }), n.emit("lazyImageLoad", s[0], o[0])
                    })
                }
            }, load: function () {
                function t(e) {
                    if (l) {
                        if (r.children("." + s.slideClass + '[data-swiper-slide-index="' + e + '"]').length) return !0
                    } else if (a[e]) return !0;
                    return !1
                }

                function i(t) {
                    return l ? e(t).attr("data-swiper-slide-index") : e(t).index()
                }

                var n = this, r = n.$wrapperEl, s = n.params, a = n.slides, o = n.activeIndex,
                    l = n.virtual && s.virtual.enabled, u = s.lazy, c = s.slidesPerView;
                if ("auto" === c && (c = 0), n.lazy.initialImageLoaded || (n.lazy.initialImageLoaded = !0), n.params.watchSlidesVisibility) r.children("." + s.slideVisibleClass).each(function (t, i) {
                    var r = l ? e(i).attr("data-swiper-slide-index") : e(i).index();
                    n.lazy.loadInSlide(r)
                }); else if (c > 1) for (var d = o; o + c > d; d += 1) t(d) && n.lazy.loadInSlide(d); else n.lazy.loadInSlide(o);
                if (u.loadPrevNext) if (c > 1 || u.loadPrevNextAmount && u.loadPrevNextAmount > 1) {
                    for (var h = u.loadPrevNextAmount, p = c, f = Math.min(o + p + Math.max(h, p), a.length), m = Math.max(o - Math.max(p, h), 0), g = o + c; f > g; g += 1) t(g) && n.lazy.loadInSlide(g);
                    for (var v = m; o > v; v += 1) t(v) && n.lazy.loadInSlide(v)
                } else {
                    var y = r.children("." + s.slideNextClass);
                    y.length > 0 && n.lazy.loadInSlide(i(y));
                    var b = r.children("." + s.slidePrevClass);
                    b.length > 0 && n.lazy.loadInSlide(i(b))
                }
            }
        }, U = {
            LinearSpline: function (e, t) {
                var i, n, r, s, a, o = function (e, t) {
                    for (n = -1, i = e.length; i - n > 1;) e[r = i + n >> 1] <= t ? n = r : i = r;
                    return i
                };
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function (e) {
                    return e ? (a = o(this.x, e), s = a - 1, (e - this.x[s]) * (this.y[a] - this.y[s]) / (this.x[a] - this.x[s]) + this.y[s]) : 0
                }, this
            }, getInterpolateFunction: function (e) {
                this.controller.spline || (this.controller.spline = this.params.loop ? new U.LinearSpline(this.slidesGrid, e.slidesGrid) : new U.LinearSpline(this.snapGrid, e.snapGrid))
            }, setTranslate: function (e, t) {
                function i(e) {
                    var t = e.rtl && "horizontal" === e.params.direction ? -s.translate : s.translate;
                    "slide" === s.params.controller.by && (s.controller.getInterpolateFunction(e), r = -s.controller.spline.interpolate(-t)), r && "container" !== s.params.controller.by || (n = (e.maxTranslate() - e.minTranslate()) / (s.maxTranslate() - s.minTranslate()), r = (t - s.minTranslate()) * n + e.minTranslate()), s.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, s), e.updateActiveIndex(), e.updateSlidesClasses()
                }

                var n, r, s = this, a = s.controller.control;
                if (Array.isArray(a)) for (var o = 0; o < a.length; o += 1) a[o] !== t && a[o] instanceof k && i(a[o]); else a instanceof k && t !== a && i(a)
            }, setTransition: function (e, t) {
                function i(t) {
                    t.setTransition(e, r), 0 !== e && (t.transitionStart(), t.$wrapperEl.transitionEnd(function () {
                        s && (t.params.loop && "slide" === r.params.controller.by && t.loopFix(), t.transitionEnd())
                    }))
                }

                var n, r = this, s = r.controller.control;
                if (Array.isArray(s)) for (n = 0; n < s.length; n += 1) s[n] !== t && s[n] instanceof k && i(s[n]); else s instanceof k && t !== s && i(s)
            }
        }, G = {
            makeElFocusable: function (e) {
                return e.attr("tabIndex", "0"), e
            }, addElRole: function (e, t) {
                return e.attr("role", t), e
            }, addElLabel: function (e, t) {
                return e.attr("aria-label", t), e
            }, disableEl: function (e) {
                return e.attr("aria-disabled", !0), e
            }, enableEl: function (e) {
                return e.attr("aria-disabled", !1), e
            }, onEnterKey: function (t) {
                var i = this.params.a11y;
                if (13 === t.keyCode) {
                    var n = e(t.target);
                    this.navigation && this.navigation.$nextEl && n.is(this.navigation.$nextEl) && (this.isEnd && !this.params.loop || this.slideNext(), this.isEnd ? this.a11y.notify(i.lastSlideMessage) : this.a11y.notify(i.nextSlideMessage)), this.navigation && this.navigation.$prevEl && n.is(this.navigation.$prevEl) && (this.isBeginning && !this.params.loop || this.slidePrev(), this.isBeginning ? this.a11y.notify(i.firstSlideMessage) : this.a11y.notify(i.prevSlideMessage)), this.pagination && n.is("." + this.params.pagination.bulletClass) && n[0].click()
                }
            }, notify: function (e) {
                var t = this.a11y.liveRegion;
                0 !== t.length && (t.html(""), t.html(e))
            }, updateNavigation: function () {
                if (!this.params.loop) {
                    var e = this.navigation, t = e.$nextEl, i = e.$prevEl;
                    i && i.length > 0 && (this.isBeginning ? this.a11y.disableEl(i) : this.a11y.enableEl(i)), t && t.length > 0 && (this.isEnd ? this.a11y.disableEl(t) : this.a11y.enableEl(t))
                }
            }, updatePagination: function () {
                var t = this, i = t.params.a11y;
                t.pagination && t.params.pagination.clickable && t.pagination.bullets && t.pagination.bullets.length && t.pagination.bullets.each(function (n, r) {
                    var s = e(r);
                    t.a11y.makeElFocusable(s), t.a11y.addElRole(s, "button"), t.a11y.addElLabel(s, i.paginationBulletMessage.replace(/{{index}}/, s.index() + 1))
                })
            }, init: function () {
                this.$el.append(this.a11y.liveRegion);
                var e, t, i = this.params.a11y;
                this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && (this.a11y.makeElFocusable(e), this.a11y.addElRole(e, "button"), this.a11y.addElLabel(e, i.nextSlideMessage), e.on("keydown", this.a11y.onEnterKey)), t && (this.a11y.makeElFocusable(t), this.a11y.addElRole(t, "button"), this.a11y.addElLabel(t, i.prevSlideMessage), t.on("keydown", this.a11y.onEnterKey)), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.on("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }, destroy: function () {
                var e, t;
                this.a11y.liveRegion && this.a11y.liveRegion.length > 0 && this.a11y.liveRegion.remove(), this.navigation && this.navigation.$nextEl && (e = this.navigation.$nextEl), this.navigation && this.navigation.$prevEl && (t = this.navigation.$prevEl), e && e.off("keydown", this.a11y.onEnterKey), t && t.off("keydown", this.a11y.onEnterKey), this.pagination && this.params.pagination.clickable && this.pagination.bullets && this.pagination.bullets.length && this.pagination.$el.off("keydown", "." + this.params.pagination.bulletClass, this.a11y.onEnterKey)
            }
        }, X = {
            init: function () {
                if (this.params.history) {
                    if (!o.history || !o.history.pushState) return this.params.history.enabled = !1, void(this.params.hashNavigation.enabled = !0);
                    var e = this.history;
                    e.initialized = !0, e.paths = X.getPathValues(), (e.paths.key || e.paths.value) && (e.scrollToSlide(0, e.paths.value, this.params.runCallbacksOnInit), this.params.history.replaceState || o.addEventListener("popstate", this.history.setHistoryPopState))
                }
            }, destroy: function () {
                this.params.history.replaceState || o.removeEventListener("popstate", this.history.setHistoryPopState)
            }, setHistoryPopState: function () {
                this.history.paths = X.getPathValues(), this.history.scrollToSlide(this.params.speed, this.history.paths.value, !1)
            }, getPathValues: function () {
                var e = o.location.pathname.slice(1).split("/").filter(function (e) {
                    return "" !== e
                }), t = e.length;
                return {key: e[t - 2], value: e[t - 1]}
            }, setHistory: function (e, t) {
                if (this.history.initialized && this.params.history.enabled) {
                    var i = this.slides.eq(t), n = X.slugify(i.attr("data-history"));
                    o.location.pathname.includes(e) || (n = e + "/" + n);
                    var r = o.history.state;
                    r && r.value === n || (this.params.history.replaceState ? o.history.replaceState({value: n}, null, n) : o.history.pushState({value: n}, null, n))
                }
            }, slugify: function (e) {
                return e.toString().toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            }, scrollToSlide: function (e, t, i) {
                if (t) for (var n = 0, r = this.slides.length; r > n; n += 1) {
                    var s = this.slides.eq(n);
                    if (X.slugify(s.attr("data-history")) === t && !s.hasClass(this.params.slideDuplicateClass)) {
                        var a = s.index();
                        this.slideTo(a, e, i)
                    }
                } else this.slideTo(0, e, i)
            }
        }, K = {
            onHashCange: function () {
                var e = u.location.hash.replace("#", "");
                e !== this.slides.eq(this.activeIndex).attr("data-hash") && this.slideTo(this.$wrapperEl.children("." + this.params.slideClass + '[data-hash="' + e + '"]').index())
            }, setHash: function () {
                if (this.hashNavigation.initialized && this.params.hashNavigation.enabled) if (this.params.hashNavigation.replaceState && o.history && o.history.replaceState) o.history.replaceState(null, null, "#" + this.slides.eq(this.activeIndex).attr("data-hash") || ""); else {
                    var e = this.slides.eq(this.activeIndex), t = e.attr("data-hash") || e.attr("data-history");
                    u.location.hash = t || ""
                }
            }, init: function () {
                if (!(!this.params.hashNavigation.enabled || this.params.history && this.params.history.enabled)) {
                    this.hashNavigation.initialized = !0;
                    var t = u.location.hash.replace("#", "");
                    if (t) for (var i = 0, n = this.slides.length; n > i; i += 1) {
                        var r = this.slides.eq(i);
                        if ((r.attr("data-hash") || r.attr("data-history")) === t && !r.hasClass(this.params.slideDuplicateClass)) {
                            var s = r.index();
                            this.slideTo(s, 0, this.params.runCallbacksOnInit, !0)
                        }
                    }
                    this.params.hashNavigation.watchState && e(o).on("hashchange", this.hashNavigation.onHashCange)
                }
            }, destroy: function () {
                this.params.hashNavigation.watchState && e(o).off("hashchange", this.hashNavigation.onHashCange)
            }
        }, Z = {
            run: function () {
                var e = this, t = e.slides.eq(e.activeIndex), i = e.params.autoplay.delay;
                t.attr("data-swiper-autoplay") && (i = t.attr("data-swiper-autoplay") || e.params.autoplay.delay), e.autoplay.timeout = l.nextTick(function () {
                    e.params.autoplay.reverseDirection ? e.params.loop ? (e.loopFix(), e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.isBeginning ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(e.slides.length - 1, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slidePrev(e.params.speed, !0, !0), e.emit("autoplay")) : e.params.loop ? (e.loopFix(), e.slideNext(e.params.speed, !0, !0), e.emit("autoplay")) : e.isEnd ? e.params.autoplay.stopOnLastSlide ? e.autoplay.stop() : (e.slideTo(0, e.params.speed, !0, !0), e.emit("autoplay")) : (e.slideNext(e.params.speed, !0, !0), e.emit("autoplay"))
                }, i)
            }, start: function () {
                return void 0 === this.autoplay.timeout && !this.autoplay.running && (this.autoplay.running = !0, this.emit("autoplayStart"), this.autoplay.run(), !0)
            }, stop: function () {
                return !!this.autoplay.running && void 0 !== this.autoplay.timeout && (this.autoplay.timeout && (clearTimeout(this.autoplay.timeout), this.autoplay.timeout = void 0), this.autoplay.running = !1, this.emit("autoplayStop"), !0)
            }, pause: function (e) {
                var t = this;
                t.autoplay.running && (t.autoplay.paused || (t.autoplay.timeout && clearTimeout(t.autoplay.timeout), t.autoplay.paused = !0, 0 !== e && t.params.autoplay.waitForTransition ? t.$wrapperEl.transitionEnd(function () {
                    t && !t.destroyed && (t.autoplay.paused = !1, t.autoplay.running ? t.autoplay.run() : t.autoplay.stop())
                }) : (t.autoplay.paused = !1, t.autoplay.run())))
            }
        }, J = {
            setTranslate: function () {
                for (var e = this.slides, t = 0; t < e.length; t += 1) {
                    var i = this.slides.eq(t), n = -i[0].swiperSlideOffset;
                    this.params.virtualTranslate || (n -= this.translate);
                    var r = 0;
                    this.isHorizontal() || (r = n, n = 0);
                    var s = this.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(i[0].progress), 0) : 1 + Math.min(Math.max(i[0].progress, -1), 0);
                    i.css({opacity: s}).transform("translate3d(" + n + "px, " + r + "px, 0px)")
                }
            }, setTransition: function (e) {
                var t = this, i = t.slides, n = t.$wrapperEl;
                if (i.transition(e), t.params.virtualTranslate && 0 !== e) {
                    var r = !1;
                    i.transitionEnd(function () {
                        if (!r && t && !t.destroyed) {
                            r = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) n.trigger(e[i])
                        }
                    })
                }
            }
        }, ee = {
            setTranslate: function () {
                var t, i = this.$el, n = this.$wrapperEl, r = this.slides, s = this.width, a = this.height, o = this.rtl,
                    l = this.size, u = this.params.cubeEffect, c = this.isHorizontal(),
                    d = this.virtual && this.params.virtual.enabled, h = 0;
                u.shadow && (c ? (0 === (t = n.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), n.append(t)), t.css({height: s + "px"})) : 0 === (t = i.find(".swiper-cube-shadow")).length && (t = e('<div class="swiper-cube-shadow"></div>'), i.append(t)));
                for (var p = 0; p < r.length; p += 1) {
                    var f = r.eq(p), m = p;
                    d && (m = parseInt(f.attr("data-swiper-slide-index"), 10));
                    var g = 90 * m, v = Math.floor(g / 360);
                    o && (g = -g, v = Math.floor(-g / 360));
                    var y = Math.max(Math.min(f[0].progress, 1), -1), b = 0, w = 0, _ = 0;
                    m % 4 == 0 ? (b = 4 * -v * l, _ = 0) : (m - 1) % 4 == 0 ? (b = 0, _ = 4 * -v * l) : (m - 2) % 4 == 0 ? (b = l + 4 * v * l, _ = l) : (m - 3) % 4 == 0 && (b = -l, _ = 3 * l + 4 * l * v), o && (b = -b), c || (w = b, b = 0);
                    var T = "rotateX(" + (c ? 0 : -g) + "deg) rotateY(" + (c ? g : 0) + "deg) translate3d(" + b + "px, " + w + "px, " + _ + "px)";
                    if (1 >= y && y > -1 && (h = 90 * m + 90 * y, o && (h = 90 * -m - 90 * y)), f.transform(T), u.slideShadows) {
                        var x = c ? f.find(".swiper-slide-shadow-left") : f.find(".swiper-slide-shadow-top"),
                            C = c ? f.find(".swiper-slide-shadow-right") : f.find(".swiper-slide-shadow-bottom");
                        0 === x.length && (x = e('<div class="swiper-slide-shadow-' + (c ? "left" : "top") + '"></div>'), f.append(x)), 0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (c ? "right" : "bottom") + '"></div>'), f.append(C)), x.length && (x[0].style.opacity = Math.max(-y, 0)), C.length && (C[0].style.opacity = Math.max(y, 0))
                    }
                }
                if (n.css({
                        "-webkit-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-moz-transform-origin": "50% 50% -" + l / 2 + "px",
                        "-ms-transform-origin": "50% 50% -" + l / 2 + "px",
                        "transform-origin": "50% 50% -" + l / 2 + "px"
                    }), u.shadow) if (c) t.transform("translate3d(0px, " + (s / 2 + u.shadowOffset) + "px, " + -s / 2 + "px) rotateX(90deg) rotateZ(0deg) scale(" + u.shadowScale + ")"); else {
                    var S = Math.abs(h) - 90 * Math.floor(Math.abs(h) / 90),
                        E = 1.5 - (Math.sin(2 * S * Math.PI / 360) / 2 + Math.cos(2 * S * Math.PI / 360) / 2),
                        P = u.shadowScale, I = u.shadowScale / E, k = u.shadowOffset;
                    t.transform("scale3d(" + P + ", 1, " + I + ") translate3d(0px, " + (a / 2 + k) + "px, " + -a / 2 / I + "px) rotateX(-90deg)")
                }
                var j = D.isSafari || D.isUiWebView ? -l / 2 : 0;
                n.transform("translate3d(0px,0," + j + "px) rotateX(" + (this.isHorizontal() ? 0 : h) + "deg) rotateY(" + (this.isHorizontal() ? -h : 0) + "deg)")
            }, setTransition: function (e) {
                var t = this.$el;
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), this.params.cubeEffect.shadow && !this.isHorizontal() && t.find(".swiper-cube-shadow").transition(e)
            }
        }, te = {
            setTranslate: function () {
                for (var t = this.slides, i = 0; i < t.length; i += 1) {
                    var n = t.eq(i), r = n[0].progress;
                    this.params.flipEffect.limitRotation && (r = Math.max(Math.min(n[0].progress, 1), -1));
                    var s = -180 * r, a = 0, o = -n[0].swiperSlideOffset, l = 0;
                    if (this.isHorizontal() ? this.rtl && (s = -s) : (l = o, o = 0, a = -s, s = 0), n[0].style.zIndex = -Math.abs(Math.round(r)) + t.length, this.params.flipEffect.slideShadows) {
                        var u = this.isHorizontal() ? n.find(".swiper-slide-shadow-left") : n.find(".swiper-slide-shadow-top"),
                            c = this.isHorizontal() ? n.find(".swiper-slide-shadow-right") : n.find(".swiper-slide-shadow-bottom");
                        0 === u.length && (u = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "left" : "top") + '"></div>'), n.append(u)), 0 === c.length && (c = e('<div class="swiper-slide-shadow-' + (this.isHorizontal() ? "right" : "bottom") + '"></div>'), n.append(c)), u.length && (u[0].style.opacity = Math.max(-r, 0)), c.length && (c[0].style.opacity = Math.max(r, 0))
                    }
                    n.transform("translate3d(" + o + "px, " + l + "px, 0px) rotateX(" + a + "deg) rotateY(" + s + "deg)")
                }
            }, setTransition: function (e) {
                var t = this, i = t.slides, n = t.activeIndex, r = t.$wrapperEl;
                if (i.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.virtualTranslate && 0 !== e) {
                    var s = !1;
                    i.eq(n).transitionEnd(function () {
                        if (!s && t && !t.destroyed) {
                            s = !0, t.animating = !1;
                            for (var e = ["webkitTransitionEnd", "transitionend"], i = 0; i < e.length; i += 1) r.trigger(e[i])
                        }
                    })
                }
            }
        }, ie = {
            setTranslate: function () {
                for (var t = this.width, i = this.height, n = this.slides, r = this.$wrapperEl, s = this.slidesSizesGrid, a = this.params.coverflowEffect, o = this.isHorizontal(), l = this.translate, u = o ? t / 2 - l : i / 2 - l, d = o ? a.rotate : -a.rotate, h = a.depth, p = 0, f = n.length; f > p; p += 1) {
                    var m = n.eq(p), g = s[p], v = (u - m[0].swiperSlideOffset - g / 2) / g * a.modifier, y = o ? d * v : 0,
                        b = o ? 0 : d * v, w = -h * Math.abs(v), _ = o ? 0 : a.stretch * v, T = o ? a.stretch * v : 0;
                    Math.abs(T) < .001 && (T = 0), Math.abs(_) < .001 && (_ = 0), Math.abs(w) < .001 && (w = 0), Math.abs(y) < .001 && (y = 0), Math.abs(b) < .001 && (b = 0);
                    var x = "translate3d(" + T + "px," + _ + "px," + w + "px)  rotateX(" + b + "deg) rotateY(" + y + "deg)";
                    if (m.transform(x), m[0].style.zIndex = 1 - Math.abs(Math.round(v)), a.slideShadows) {
                        var C = o ? m.find(".swiper-slide-shadow-left") : m.find(".swiper-slide-shadow-top"),
                            S = o ? m.find(".swiper-slide-shadow-right") : m.find(".swiper-slide-shadow-bottom");
                        0 === C.length && (C = e('<div class="swiper-slide-shadow-' + (o ? "left" : "top") + '"></div>'), m.append(C)), 0 === S.length && (S = e('<div class="swiper-slide-shadow-' + (o ? "right" : "bottom") + '"></div>'), m.append(S)), C.length && (C[0].style.opacity = v > 0 ? v : 0), S.length && (S[0].style.opacity = -v > 0 ? -v : 0)
                    }
                }
                (c.pointerEvents || c.prefixedPointerEvents) && (r[0].style.perspectiveOrigin = u + "px 50%")
            }, setTransition: function (e) {
                this.slides.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
            }
        }, ne = [j, A, M, O, z, L, B, {
            name: "mousewheel",
            params: {
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarged: "container"
                }
            },
            create: function () {
                l.extend(this, {
                    mousewheel: {
                        enabled: !1,
                        enable: H.enable.bind(this),
                        disable: H.disable.bind(this),
                        handle: H.handle.bind(this),
                        lastScrollTime: l.now()
                    }
                })
            },
            on: {
                init: function () {
                    this.params.mousewheel.enabled && this.mousewheel.enable()
                }, destroy: function () {
                    this.mousewheel.enabled && this.mousewheel.disable()
                }
            }
        }, {
            name: "navigation",
            params: {
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            },
            create: function () {
                l.extend(this, {
                    navigation: {
                        init: R.init.bind(this),
                        update: R.update.bind(this),
                        destroy: R.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.navigation.init(), this.navigation.update()
                }, toEdge: function () {
                    this.navigation.update()
                }, fromEdge: function () {
                    this.navigation.update()
                }, destroy: function () {
                    this.navigation.destroy()
                }, click: function (t) {
                    var i = this.navigation, n = i.$nextEl, r = i.$prevEl;
                    !this.params.navigation.hideOnClick || e(t.target).is(r) || e(t.target).is(n) || (n && n.toggleClass(this.params.navigation.hiddenClass), r && r.toggleClass(this.params.navigation.hiddenClass))
                }
            }
        }, {
            name: "pagination",
            params: {
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    type: "bullets",
                    dynamicBullets: !1,
                    bulletClass: "swiper-pagination-bullet",
                    bulletActiveClass: "swiper-pagination-bullet-active",
                    modifierClass: "swiper-pagination-",
                    currentClass: "swiper-pagination-current",
                    totalClass: "swiper-pagination-total",
                    hiddenClass: "swiper-pagination-hidden",
                    progressbarFillClass: "swiper-pagination-progressbar-fill",
                    clickableClass: "swiper-pagination-clickable",
                    lockClass: "swiper-pagination-lock"
                }
            },
            create: function () {
                l.extend(this, {
                    pagination: {
                        init: F.init.bind(this),
                        render: F.render.bind(this),
                        update: F.update.bind(this),
                        destroy: F.destroy.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.pagination.init(), this.pagination.render(), this.pagination.update()
                }, activeIndexChange: function () {
                    this.params.loop ? this.pagination.update() : void 0 === this.snapIndex && this.pagination.update()
                }, snapIndexChange: function () {
                    this.params.loop || this.pagination.update()
                }, slidesLengthChange: function () {
                    this.params.loop && (this.pagination.render(), this.pagination.update())
                }, snapGridLengthChange: function () {
                    this.params.loop || (this.pagination.render(), this.pagination.update())
                }, destroy: function () {
                    this.pagination.destroy()
                }, click: function (t) {
                    this.params.pagination.el && this.params.pagination.hideOnClick && this.pagination.$el.length > 0 && !e(t.target).hasClass(this.params.pagination.bulletClass) && this.pagination.$el.toggleClass(this.params.pagination.hiddenClass)
                }
            }
        }, {
            name: "scrollbar",
            params: {
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock"
                }
            },
            create: function () {
                l.extend(this, {
                    scrollbar: {
                        init: $.init.bind(this),
                        destroy: $.destroy.bind(this),
                        updateSize: $.updateSize.bind(this),
                        setTranslate: $.setTranslate.bind(this),
                        setTransition: $.setTransition.bind(this),
                        enableDraggable: $.enableDraggable.bind(this),
                        disableDraggable: $.disableDraggable.bind(this),
                        setDragPosition: $.setDragPosition.bind(this),
                        onDragStart: $.onDragStart.bind(this),
                        onDragMove: $.onDragMove.bind(this),
                        onDragEnd: $.onDragEnd.bind(this),
                        isTouched: !1,
                        timeout: null,
                        dragTimeout: null
                    }
                })
            },
            on: {
                init: function () {
                    this.scrollbar.init(), this.scrollbar.updateSize(), this.scrollbar.setTranslate()
                }, update: function () {
                    this.scrollbar.updateSize()
                }, resize: function () {
                    this.scrollbar.updateSize()
                }, observerUpdate: function () {
                    this.scrollbar.updateSize()
                }, setTranslate: function () {
                    this.scrollbar.setTranslate()
                }, setTransition: function (e) {
                    this.scrollbar.setTransition(e)
                }, destroy: function () {
                    this.scrollbar.destroy()
                }
            }
        }, {
            name: "parallax", params: {parallax: {enabled: !1}}, create: function () {
                l.extend(this, {
                    parallax: {
                        setTransform: W.setTransform.bind(this),
                        setTranslate: W.setTranslate.bind(this),
                        setTransition: W.setTransition.bind(this)
                    }
                })
            }, on: {
                beforeInit: function () {
                    this.params.watchSlidesProgress = !0
                }, init: function () {
                    this.params.parallax && this.parallax.setTranslate()
                }, setTranslate: function () {
                    this.params.parallax && this.parallax.setTranslate()
                }, setTransition: function (e) {
                    this.params.parallax && this.parallax.setTransition(e)
                }
            }
        }, {
            name: "zoom",
            params: {
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            },
            create: function () {
                var e = this, t = {
                    enabled: !1,
                    scale: 1,
                    currentScale: 1,
                    isScaling: !1,
                    gesture: {
                        $slideEl: void 0,
                        slideWidth: void 0,
                        slideHeight: void 0,
                        $imageEl: void 0,
                        $imageWrapEl: void 0,
                        maxRatio: 3
                    },
                    image: {
                        isTouched: void 0,
                        isMoved: void 0,
                        currentX: void 0,
                        currentY: void 0,
                        minX: void 0,
                        minY: void 0,
                        maxX: void 0,
                        maxY: void 0,
                        width: void 0,
                        height: void 0,
                        startX: void 0,
                        startY: void 0,
                        touchesStart: {},
                        touchesCurrent: {}
                    },
                    velocity: {x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0}
                };
                "onGestureStart onGestureChange onGestureEnd onTouchStart onTouchMove onTouchEnd onTransitionEnd toggle enable disable in out".split(" ").forEach(function (i) {
                    t[i] = q[i].bind(e)
                }), l.extend(e, {zoom: t})
            },
            on: {
                init: function () {
                    this.params.zoom.enabled && this.zoom.enable()
                }, destroy: function () {
                    this.zoom.disable()
                }, touchStart: function (e) {
                    this.zoom.enabled && this.zoom.onTouchStart(e)
                }, touchEnd: function (e) {
                    this.zoom.enabled && this.zoom.onTouchEnd(e)
                }, doubleTap: function (e) {
                    this.params.zoom.enabled && this.zoom.enabled && this.params.zoom.toggle && this.zoom.toggle(e)
                }, transitionEnd: function () {
                    this.zoom.enabled && this.params.zoom.enabled && this.zoom.onTransitionEnd()
                }
            }
        }, {
            name: "lazy",
            params: {
                lazy: {
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            },
            create: function () {
                l.extend(this, {
                    lazy: {
                        initialImageLoaded: !1,
                        load: V.load.bind(this),
                        loadInSlide: V.loadInSlide.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    this.params.lazy.enabled && this.params.preloadImages && (this.params.preloadImages = !1)
                }, init: function () {
                    this.params.lazy.enabled && !this.params.loop && 0 === this.params.initialSlide && this.lazy.load()
                }, scroll: function () {
                    this.params.freeMode && !this.params.freeModeSticky && this.lazy.load()
                }, resize: function () {
                    this.params.lazy.enabled && this.lazy.load()
                }, scrollbarDragMove: function () {
                    this.params.lazy.enabled && this.lazy.load()
                }, transitionStart: function () {
                    this.params.lazy.enabled && (this.params.lazy.loadOnTransitionStart || !this.params.lazy.loadOnTransitionStart && !this.lazy.initialImageLoaded) && this.lazy.load()
                }, transitionEnd: function () {
                    this.params.lazy.enabled && !this.params.lazy.loadOnTransitionStart && this.lazy.load()
                }
            }
        }, {
            name: "controller", params: {controller: {control: void 0, inverse: !1, by: "slide"}}, create: function () {
                l.extend(this, {
                    controller: {
                        control: this.params.controller.control,
                        getInterpolateFunction: U.getInterpolateFunction.bind(this),
                        setTranslate: U.setTranslate.bind(this),
                        setTransition: U.setTransition.bind(this)
                    }
                })
            }, on: {
                update: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                }, resize: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline)
                }, observerUpdate: function () {
                    this.controller.control && this.controller.spline && (this.controller.spline = void 0, delete this.controller.spline);
                }, setTranslate: function (e, t) {
                    this.controller.control && this.controller.setTranslate(e, t)
                }, setTransition: function (e, t) {
                    this.controller.control && this.controller.setTransition(e, t)
                }
            }
        }, {
            name: "a11y",
            params: {
                a11y: {
                    enabled: !1,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}"
                }
            },
            create: function () {
                var t = this;
                l.extend(t, {a11y: {liveRegion: e('<span class="' + t.params.a11y.notificationClass + '" aria-live="assertive" aria-atomic="true"></span>')}}), Object.keys(G).forEach(function (e) {
                    t.a11y[e] = G[e].bind(t)
                })
            },
            on: {
                init: function () {
                    this.params.a11y.enabled && (this.a11y.init(), this.a11y.updateNavigation())
                }, toEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                }, fromEdge: function () {
                    this.params.a11y.enabled && this.a11y.updateNavigation()
                }, paginationUpdate: function () {
                    this.params.a11y.enabled && this.a11y.updatePagination()
                }, destroy: function () {
                    this.params.a11y.enabled && this.a11y.destroy()
                }
            }
        }, {
            name: "history", params: {history: {enabled: !1, replaceState: !1, key: "slides"}}, create: function () {
                l.extend(this, {
                    history: {
                        init: X.init.bind(this),
                        setHistory: X.setHistory.bind(this),
                        setHistoryPopState: X.setHistoryPopState.bind(this),
                        scrollToSlide: X.scrollToSlide.bind(this),
                        destroy: X.destroy.bind(this)
                    }
                })
            }, on: {
                init: function () {
                    this.params.history.enabled && this.history.init()
                }, destroy: function () {
                    this.params.history.enabled && this.history.destroy()
                }, transitionEnd: function () {
                    this.history.initialized && this.history.setHistory(this.params.history.key, this.activeIndex)
                }
            }
        }, {
            name: "hash-navigation",
            params: {hashNavigation: {enabled: !1, replaceState: !1, watchState: !1}},
            create: function () {
                l.extend(this, {
                    hashNavigation: {
                        initialized: !1,
                        init: K.init.bind(this),
                        destroy: K.destroy.bind(this),
                        setHash: K.setHash.bind(this),
                        onHashCange: K.onHashCange.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.init()
                }, destroy: function () {
                    this.params.hashNavigation.enabled && this.hashNavigation.destroy()
                }, transitionEnd: function () {
                    this.hashNavigation.initialized && this.hashNavigation.setHash()
                }
            }
        }, {
            name: "autoplay",
            params: {
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1
                }
            },
            create: function () {
                l.extend(this, {
                    autoplay: {
                        running: !1,
                        paused: !1,
                        run: Z.run.bind(this),
                        start: Z.start.bind(this),
                        stop: Z.stop.bind(this),
                        pause: Z.pause.bind(this)
                    }
                })
            },
            on: {
                init: function () {
                    this.params.autoplay.enabled && this.autoplay.start()
                }, beforeTransitionStart: function (e, t) {
                    this.autoplay.running && (t || !this.params.autoplay.disableOnInteraction ? this.autoplay.pause(e) : this.autoplay.stop())
                }, sliderFirstMove: function () {
                    this.autoplay.running && (this.params.autoplay.disableOnInteraction ? this.autoplay.stop() : this.autoplay.pause())
                }, destroy: function () {
                    this.autoplay.running && this.autoplay.stop()
                }
            }
        }, {
            name: "effect-fade", params: {fadeEffect: {crossFade: !1}}, create: function () {
                l.extend(this, {
                    fadeEffect: {
                        setTranslate: J.setTranslate.bind(this),
                        setTransition: J.setTransition.bind(this)
                    }
                })
            }, on: {
                beforeInit: function () {
                    if ("fade" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "fade");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e)
                    }
                }, setTranslate: function () {
                    "fade" === this.params.effect && this.fadeEffect.setTranslate()
                }, setTransition: function (e) {
                    "fade" === this.params.effect && this.fadeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-cube",
            params: {cubeEffect: {slideShadows: !0, shadow: !0, shadowOffset: 20, shadowScale: .94}},
            create: function () {
                l.extend(this, {
                    cubeEffect: {
                        setTranslate: ee.setTranslate.bind(this),
                        setTransition: ee.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    if ("cube" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "cube"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            resistanceRatio: 0,
                            spaceBetween: 0,
                            centeredSlides: !1,
                            virtualTranslate: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e)
                    }
                }, setTranslate: function () {
                    "cube" === this.params.effect && this.cubeEffect.setTranslate()
                }, setTransition: function (e) {
                    "cube" === this.params.effect && this.cubeEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-flip", params: {flipEffect: {slideShadows: !0, limitRotation: !0}}, create: function () {
                l.extend(this, {
                    flipEffect: {
                        setTranslate: te.setTranslate.bind(this),
                        setTransition: te.setTransition.bind(this)
                    }
                })
            }, on: {
                beforeInit: function () {
                    if ("flip" === this.params.effect) {
                        this.classNames.push(this.params.containerModifierClass + "flip"), this.classNames.push(this.params.containerModifierClass + "3d");
                        var e = {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            watchSlidesProgress: !0,
                            spaceBetween: 0,
                            virtualTranslate: !0
                        };
                        l.extend(this.params, e), l.extend(this.originalParams, e)
                    }
                }, setTranslate: function () {
                    "flip" === this.params.effect && this.flipEffect.setTranslate()
                }, setTransition: function (e) {
                    "flip" === this.params.effect && this.flipEffect.setTransition(e)
                }
            }
        }, {
            name: "effect-coverflow",
            params: {coverflowEffect: {rotate: 50, stretch: 0, depth: 100, modifier: 1, slideShadows: !0}},
            create: function () {
                l.extend(this, {
                    coverflowEffect: {
                        setTranslate: ie.setTranslate.bind(this),
                        setTransition: ie.setTransition.bind(this)
                    }
                })
            },
            on: {
                beforeInit: function () {
                    "coverflow" === this.params.effect && (this.classNames.push(this.params.containerModifierClass + "coverflow"), this.classNames.push(this.params.containerModifierClass + "3d"), this.params.watchSlidesProgress = !0, this.originalParams.watchSlidesProgress = !0)
                }, setTranslate: function () {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTranslate()
                }, setTransition: function (e) {
                    "coverflow" === this.params.effect && this.coverflowEffect.setTransition(e)
                }
            }
        }];
    return void 0 === k.use && (k.use = k.Class.use, k.installModule = k.Class.installModule), k.use(ne), k
}), function (e, t) {
    function i(e) {
        return "string" == typeof e
    }

    function n(e) {
        var t = T.call(arguments, 1);
        return function () {
            return e.apply(this, t.concat(T.call(arguments)))
        }
    }

    function r(e) {
        return e.replace(y, "$2")
    }

    function s(e) {
        return e.replace(/(?:^[^?#]*\?([^#]*).*$)?.*/, "$1")
    }

    function a(t, n, r, s, a) {
        var o, l, d, p, f;
        return s !== u ? (d = r.match(t ? y : /^([^#?]*)\??([^#]*)(#?.*)/), f = d[3] || "", 2 === a && i(s) ? l = s.replace(t ? v : M, "") : (p = h(d[2]), s = i(s) ? h[t ? k : I](s) : s, l = 2 === a ? s : 1 === a ? e.extend({}, s, p) : e.extend({}, p, s), l = c(l), t && (l = l.replace(b, x))), o = d[1] + (t ? _ : l || !d[1] ? "?" : "") + l + f) : o = n(r !== u ? r : location.href), o
    }

    function o(e, t, n) {
        return t === u || "boolean" == typeof t ? (n = t, t = C[e ? k : I]()) : t = i(t) ? t.replace(e ? v : M, "") : t, h(t, n)
    }

    function l(t, n, r, s) {
        return i(r) || "object" == typeof r || (s = r, r = n, n = u), this.each(function () {
            var i = e(this), a = n || g()[(this.nodeName || "").toLowerCase()] || "", o = a && i.attr(a) || "";
            i.attr(a, C[t](o, r, s))
        })
    }

    var u, c, d, h, p, f, m, g, v, y, b, w, _, T = Array.prototype.slice, x = decodeURIComponent, C = e.param,
        S = e.bbq = e.bbq || {}, E = e.event.special, P = "hashchange", I = "querystring", k = "fragment",
        j = "elemUrlAttr", A = "href", D = "src", M = /^.*\?|#.*$/g, O = {};
    C[I] = n(a, 0, s), C[k] = d = n(a, 1, r), C.sorted = c = function (t, i) {
        var n = [], r = {};
        return e.each(C(t, i).split("&"), function (e, t) {
            var i = t.replace(/(?:%5B|=).*$/, ""), s = r[i];
            s || (s = r[i] = [], n.push(i)), s.push(t)
        }), e.map(n.sort(), function (e) {
            return r[e]
        }).join("&")
    }, d.noEscape = function (t) {
        t = t || "";
        var i = e.map(t.split(""), encodeURIComponent);
        b = new RegExp(i.join("|"), "g")
    }, d.noEscape(",/"), d.ajaxCrawlable = function (e) {
        return e !== u && (e ? (v = /^.*(?:#!|#)/, y = /^([^#]*)(?:#!|#)?(.*)$/, _ = "#!") : (v = /^.*#/, y = /^([^#]*)#?(.*)$/, _ = "#"), w = !!e), w
    }, d.ajaxCrawlable(0), e.deparam = h = function (t, i) {
        var n = {}, r = {"true": !0, "false": !1, "null": null};
        return e.each(t.replace(/\+/g, " ").split("&"), function (t, s) {
            var a, o = s.split("="), l = x(o[0]), c = n, d = 0, h = l.split("]["), p = h.length - 1;
            if (/\[/.test(h[0]) && /\]$/.test(h[p]) ? (h[p] = h[p].replace(/\]$/, ""), h = h.shift().split("[").concat(h), p = h.length - 1) : p = 0, 2 === o.length) if (a = x(o[1]), i && (a = a && !isNaN(a) ? +a : "undefined" === a ? u : r[a] !== u ? r[a] : a), p) for (; p >= d; d++) l = "" === h[d] ? c.length : h[d], c = c[l] = p > d ? c[l] || (h[d + 1] && isNaN(h[d + 1]) ? {} : []) : a; else e.isArray(n[l]) ? n[l].push(a) : n[l] !== u ? n[l] = [n[l], a] : n[l] = a; else l && (n[l] = i ? u : "")
        }), n
    }, h[I] = n(o, 0), h[k] = p = n(o, 1), e[j] || (e[j] = function (t) {
        return e.extend(O, t)
    })({
        a: A,
        base: A,
        iframe: D,
        img: D,
        input: D,
        form: "action",
        link: A,
        script: D
    }), g = e[j], e.fn[I] = n(l, I), e.fn[k] = n(l, k), S.pushState = f = function (e, t) {
        i(e) && /^#/.test(e) && t === u && (t = 2);
        var n = e !== u, r = d(location.href, n ? e : {}, n ? t : 2);
        location.href = r
    }, S.getState = m = function (e, t) {
        return e === u || "boolean" == typeof e ? p(e) : p(t)[e]
    }, S.removeState = function (t) {
        var i = {};
        t !== u && (i = m(), e.each(e.isArray(t) ? t : arguments, function (e, t) {
            delete i[t]
        })), f(i, 2)
    }, E[P] = e.extend(E[P], {
        add: function (t) {
            function i(e) {
                var t = e[k] = d();
                e.getState = function (e, i) {
                    return e === u || "boolean" == typeof e ? h(t, e) : h(t, i)[e]
                }, n.apply(this, arguments)
            }

            var n;
            return e.isFunction(t) ? (n = t, i) : (n = t.handler, void(t.handler = i))
        }
    })
}(jQuery, this), function (e, t, i) {
    "$:nomunge";

    function n(e) {
        return e = e || location.href, "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }

    var r, s = "hashchange", a = document, o = e.event.special, l = a.documentMode,
        u = "on" + s in t && (l === i || l > 7);
    e.fn[s] = function (e) {
        return e ? this.bind(s, e) : this.trigger(s)
    }, e.fn[s].delay = 50, o[s] = e.extend(o[s], {
        setup: function () {
            return u ? !1 : void e(r.start)
        }, teardown: function () {
            return u ? !1 : void e(r.stop)
        }
    }), r = function () {
        function r() {
            var i = n(), a = p(c);
            i !== c ? (h(c = i, a), e(t).trigger(s)) : a !== c && (location.href = location.href.replace(/#.*/, "") + a), o = setTimeout(r, e.fn[s].delay)
        }

        var o, l = {}, c = n(), d = function (e) {
            return e
        }, h = d, p = d;
        return l.start = function () {
            o || r()
        }, l.stop = function () {
            o && clearTimeout(o), o = i
        }, "Microsoft Internet Explorer" === navigator.appName && !u && function () {
            var t, i;
            l.start = function () {
                t || (i = e.fn[s].src, i = i && i + n(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function () {
                    i || h(n()), r()
                }).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, a.onpropertychange = function () {
                    try {
                        "title" === event.propertyName && (t.document.title = a.title)
                    } catch (e) {
                    }
                })
            }, l.stop = d, p = function () {
                return n(t.location.href)
            }, h = function (i, n) {
                var r = t.document, o = e.fn[s].domain;
                i !== n && (r.title = a.title, r.open(), o && r.write('<script>document.domain="' + o + '"</script>'), r.close(), t.location.hash = i)
            }
        }(), l
    }()
}(jQuery, this), !function (e) {
    e.fn.scwStickySidebar = function (t) {
        function i(t, i) {
            var r = n(t, i);
            r || (console.log("TSS: Body width smaller than options.minWidth. Init is delayed."), e(document).on("scroll." + t.namespace, function (t, i) {
                return function (r) {
                    var s = n(t, i);
                    s && e(this).unbind(r)
                }
            }(t, i)), e(window).on("resize." + t.namespace, function (t, i) {
                return function (r) {
                    var s = n(t, i);
                    s && e(this).unbind(r)
                }
            }(t, i)))
        }

        function n(t, i) {
            return t.initialized === !0 || !(e("body").width() < t.minWidth) && (r(t, i), !0)
        }

        function r(t, i) {
            t.initialized = !0;
            var n = e("#scw-sticky-sidebar-stylesheet-" + t.namespace);
            0 === n.length && e("head").append(e('<style id="scw-sticky-sidebar-stylesheet-' + t.namespace + '">.scwStickySidebar:after {content: ""; display: table; clear: both;}</style>')), i.each(function () {
                function i() {
                    r.fixedScrollTop = 0, r.sidebar.css({"min-height": "1px"}), r.stickySidebar.css({
                        position: "static",
                        width: "",
                        transform: "none"
                    })
                }

                function n(t) {
                    var i = t.height();
                    return t.children().each(function () {
                        i = Math.max(i, e(this).height())
                    }), i
                }

                var r = {};
                if (r.sidebar = e(this), r.options = t || {}, r.container = e(r.options.containerSelector), 0 == r.container.length && (r.container = r.sidebar.parent()), r.sidebar.parents().css("-webkit-transform", "none"), r.sidebar.css({
                        position: r.options.defaultPosition,
                        overflow: "visible",
                        "-webkit-box-sizing": "border-box",
                        "-moz-box-sizing": "border-box",
                        "box-sizing": "border-box"
                    }), r.stickySidebar = r.sidebar.find(".scwStickySidebar"), 0 == r.stickySidebar.length) {
                    var a = /(?:text|application)\/(?:x-)?(?:javascript|ecmascript)/i;
                    r.sidebar.find("script").filter(function (e, t) {
                        return 0 === t.type.length || t.type.match(a)
                    }).remove(), r.stickySidebar = e("<div>").addClass("scwStickySidebar").append(r.sidebar.children()), r.sidebar.append(r.stickySidebar)
                }
                r.marginBottom = parseInt(r.sidebar.css("margin-bottom")), r.paddingTop = parseInt(r.sidebar.css("padding-top")), r.paddingBottom = parseInt(r.sidebar.css("padding-bottom"));
                var o = r.stickySidebar.offset().top, l = r.stickySidebar.outerHeight();
                r.stickySidebar.css("padding-top", 1), r.stickySidebar.css("padding-bottom", 1), o -= r.stickySidebar.offset().top, l = r.stickySidebar.outerHeight() - l - o, 0 == o ? (r.stickySidebar.css("padding-top", 0), r.stickySidebarPaddingTop = 0) : r.stickySidebarPaddingTop = 1, 0 == l ? (r.stickySidebar.css("padding-bottom", 0), r.stickySidebarPaddingBottom = 0) : r.stickySidebarPaddingBottom = 1, r.previousScrollTop = null, r.fixedScrollTop = 0, i(), r.onScroll = function (r) {
                    if (r.stickySidebar.is(":visible")) {
                        if (e("body").width() < r.options.minWidth) return void i();
                        if (r.options.disableOnResponsiveLayouts) {
                            var a = r.sidebar.outerWidth("none" == r.sidebar.css("float"));
                            if (a + 50 > r.container.width()) return void i()
                        }
                        var o = e(document).scrollTop(), l = "static";
                        if (o >= r.sidebar.offset().top + (r.paddingTop - r.options.additionalMarginTop)) {
                            var u, c = r.paddingTop + t.additionalMarginTop,
                                d = r.paddingBottom + r.marginBottom + t.additionalMarginBottom,
                                h = r.sidebar.offset().top, p = r.sidebar.offset().top + n(r.container),
                                f = 0 + t.additionalMarginTop,
                                m = r.stickySidebar.outerHeight() + c + d < e(window).height();
                            u = m ? f + r.stickySidebar.outerHeight() : e(window).height() - r.marginBottom - r.paddingBottom - t.additionalMarginBottom;
                            var g = h - o + r.paddingTop, v = p - o - r.paddingBottom - r.marginBottom,
                                y = r.stickySidebar.offset().top - o, b = r.previousScrollTop - o;
                            "fixed" == r.stickySidebar.css("position") && "modern" == r.options.sidebarBehavior && (y += b), "stick-to-top" == r.options.sidebarBehavior && (y = t.additionalMarginTop), "stick-to-bottom" == r.options.sidebarBehavior && (y = u - r.stickySidebar.outerHeight()), y = b > 0 ? Math.min(y, f) : Math.max(y, u - r.stickySidebar.outerHeight()), y = Math.max(y, g), y = Math.min(y, v - r.stickySidebar.outerHeight());
                            var w = r.container.height() == r.stickySidebar.outerHeight();
                            l = !w && y == f || !w && y == u - r.stickySidebar.outerHeight() ? "fixed" : o + y - r.sidebar.offset().top - r.paddingTop <= t.additionalMarginTop ? "static" : "absolute"
                        }
                        if ("fixed" == l) {
                            var _ = e(document).scrollLeft();
                            r.stickySidebar.css({
                                position: "fixed",
                                width: s(r.stickySidebar) + "px",
                                transform: "translateY(" + y + "px)",
                                left: r.sidebar.offset().left + parseInt(r.sidebar.css("padding-left")) - _ + "px",
                                top: "0px"
                            })
                        } else if ("absolute" == l) {
                            var T = {};
                            "absolute" != r.stickySidebar.css("position") && (T.position = "absolute", T.transform = "translateY(" + (o + y - r.sidebar.offset().top - r.stickySidebarPaddingTop - r.stickySidebarPaddingBottom) + "px)", T.top = "0px"), T.width = s(r.stickySidebar) + "px", T.left = "", r.stickySidebar.css(T)
                        } else "static" == l && i();
                        "static" != l && 1 == r.options.updateSidebarHeight && r.sidebar.css({"min-height": r.stickySidebar.outerHeight() + r.stickySidebar.offset().top - r.sidebar.offset().top + r.paddingBottom}), r.previousScrollTop = o
                    }
                }, r.onScroll(r), e(document).on("scroll." + r.options.namespace, function (e) {
                    return function () {
                        e.onScroll(e)
                    }
                }(r)), e(window).on("resize." + r.options.namespace, function (e) {
                    return function () {
                        e.stickySidebar.css({position: "static"}), e.onScroll(e)
                    }
                }(r)), "undefined" != typeof ResizeSensor && new ResizeSensor(r.stickySidebar[0], function (e) {
                    return function () {
                        e.onScroll(e)
                    }
                }(r))
            })
        }

        function s(e) {
            var t;
            try {
                t = e[0].getBoundingClientRect().width
            } catch (e) {
            }
            return "undefined" == typeof t && (t = e.width()), t
        }

        var a = {
            containerSelector: "",
            additionalMarginTop: 0,
            additionalMarginBottom: 0,
            updateSidebarHeight: !0,
            minWidth: 0,
            disableOnResponsiveLayouts: !0,
            sidebarBehavior: "modern",
            defaultPosition: "relative",
            namespace: "TSS"
        };
        return t = e.extend(a, t), t.additionalMarginTop = parseInt(t.additionalMarginTop) || 0, t.additionalMarginBottom = parseInt(t.additionalMarginBottom) || 0, i(t, this), this
    }
}(jQuery), !function () {
    var e = function (t, i) {
        function n() {
            this.q = [], this.add = function (e) {
                this.q.push(e)
            };
            var e, t;
            this.call = function () {
                for (e = 0, t = this.q.length; t > e; e++) this.q[e].call()
            }
        }

        function r(e, t) {
            return e.currentStyle ? e.currentStyle[t] : window.getComputedStyle ? window.getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
        }

        function s(e, t) {
            if (e.resizedAttached) {
                if (e.resizedAttached) return void e.resizedAttached.add(t)
            } else e.resizedAttached = new n, e.resizedAttached.add(t);
            e.resizeSensor = document.createElement("div"), e.resizeSensor.className = "resize-sensor";
            var i = "position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",
                s = "position: absolute; left: 0; top: 0; transition: 0s;";
            e.resizeSensor.style.cssText = i, e.resizeSensor.innerHTML = '<div class="resize-sensor-expand" style="' + i + '"><div style="' + s + '"></div></div><div class="resize-sensor-shrink" style="' + i + '"><div style="' + s + ' width: 200%; height: 200%"></div></div>', e.appendChild(e.resizeSensor), {
                fixed: 1,
                absolute: 1
            }[r(e, "position")] || (e.style.position = "relative");
            var a, o, l = e.resizeSensor.childNodes[0], u = l.childNodes[0], c = e.resizeSensor.childNodes[1],
                d = (c.childNodes[0], function () {
                    u.style.width = l.offsetWidth + 10 + "px", u.style.height = l.offsetHeight + 10 + "px", l.scrollLeft = l.scrollWidth, l.scrollTop = l.scrollHeight, c.scrollLeft = c.scrollWidth, c.scrollTop = c.scrollHeight, a = e.offsetWidth, o = e.offsetHeight
                });
            d();
            var h = function () {
                e.resizedAttached && e.resizedAttached.call()
            }, p = function (e, t, i) {
                e.attachEvent ? e.attachEvent("on" + t, i) : e.addEventListener(t, i)
            }, f = function () {
                e.offsetWidth == a && e.offsetHeight == o || h(), d()
            };
            p(l, "scroll", f), p(c, "scroll", f)
        }

        var a = Object.prototype.toString.call(t),
            o = "[object Array]" === a || "[object NodeList]" === a || "[object HTMLCollection]" === a || "undefined" != typeof jQuery && t instanceof jQuery || "undefined" != typeof Elements && t instanceof Elements;
        if (o) for (var l = 0, u = t.length; u > l; l++) s(t[l], i); else s(t, i);
        this.detach = function () {
            if (o) for (var i = 0, n = t.length; n > i; i++) e.detach(t[i]); else e.detach(t)
        }
    };
    e.detach = function (e) {
        e.resizeSensor && (e.removeChild(e.resizeSensor), delete e.resizeSensor, delete e.resizedAttached)
    }, "undefined" != typeof module && "undefined" != typeof module.exports ? module.exports = e : window.ResizeSensor = e
}(), !function (e, t) {
    function i(e, t, i) {
        var n = d[t.type] || {};
        return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : n.max < e ? n.max : e)
    }

    function n(t) {
        var i = u(), n = i._rgba = [];
        return t = t.toLowerCase(), f(l, function (e, r) {
            var s, a = r.re.exec(t), o = a && r.parse(a), l = r.space || "rgba";
            return o ? (s = i[l](o), i[c[l].cache] = s[c[l].cache], n = i._rgba = s._rgba, !1) : void 0
        }), n.length ? ("0,0,0,0" === n.join() && e.extend(n, s.transparent), i) : s[t]
    }

    function r(e, t, i) {
        return i = (i + 1) % 1, 1 > 6 * i ? e + (t - e) * i * 6 : 1 > 2 * i ? t : 2 > 3 * i ? e + (t - e) * (2 / 3 - i) * 6 : e
    }

    var s,
        a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
        o = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
            re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [e[1], e[2], e[3], e[4]]
            }
        }, {
            re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            parse: function (e) {
                return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
            }
        }, {
            re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
            }
        }, {
            re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
            }
        }, {
            re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
            space: "hsla",
            parse: function (e) {
                return [e[1], e[2] / 100, e[3] / 100, e[4]]
            }
        }], u = e.Color = function (t, i, n, r) {
            return new e.Color.fn.parse(t, i, n, r)
        }, c = {
            rgba: {props: {red: {idx: 0, type: "byte"}, green: {idx: 1, type: "byte"}, blue: {idx: 2, type: "byte"}}},
            hsla: {
                props: {
                    hue: {idx: 0, type: "degrees"},
                    saturation: {idx: 1, type: "percent"},
                    lightness: {idx: 2, type: "percent"}
                }
            }
        }, d = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, h = u.support = {},
        p = e("<p>")[0], f = e.each;
    p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (e, t) {
        t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
    }), u.fn = e.extend(u.prototype, {
        parse: function (r, a, o, l) {
            if (r === t) return this._rgba = [null, null, null, null], this;
            (r.jquery || r.nodeType) && (r = e(r).css(a), a = t);
            var d = this, h = e.type(r), p = this._rgba = [];
            return a !== t && (r = [r, a, o, l], h = "array"), "string" === h ? this.parse(n(r) || s._default) : "array" === h ? (f(c.rgba.props, function (e, t) {
                p[t.idx] = i(r[t.idx], t)
            }), this) : "object" === h ? (r instanceof u ? f(c, function (e, t) {
                r[t.cache] && (d[t.cache] = r[t.cache].slice())
            }) : f(c, function (t, n) {
                var s = n.cache;
                f(n.props, function (e, t) {
                    if (!d[s] && n.to) {
                        if ("alpha" === e || null == r[e]) return;
                        d[s] = n.to(d._rgba)
                    }
                    d[s][t.idx] = i(r[e], t, !0)
                }), d[s] && e.inArray(null, d[s].slice(0, 3)) < 0 && (d[s][3] = 1, n.from && (d._rgba = n.from(d[s])))
            }), this) : void 0
        }, is: function (e) {
            var t = u(e), i = !0, n = this;
            return f(c, function (e, r) {
                var s, a = t[r.cache];
                return a && (s = n[r.cache] || r.to && r.to(n._rgba) || [], f(r.props, function (e, t) {
                    return null != a[t.idx] ? i = a[t.idx] === s[t.idx] : void 0
                })), i
            }), i
        }, _space: function () {
            var e = [], t = this;
            return f(c, function (i, n) {
                t[n.cache] && e.push(i)
            }), e.pop()
        }, transition: function (e, t) {
            var n = u(e), r = n._space(), s = c[r], a = 0 === this.alpha() ? u("transparent") : this,
                o = a[s.cache] || s.to(a._rgba), l = o.slice();
            return n = n[s.cache], f(s.props, function (e, r) {
                var s = r.idx, a = o[s], u = n[s], c = d[r.type] || {};
                null !== u && (null === a ? l[s] = u : (c.mod && (u - a > c.mod / 2 ? a += c.mod : a - u > c.mod / 2 && (a -= c.mod)), l[s] = i((u - a) * t + a, r)))
            }), this[r](l)
        }, blend: function (t) {
            if (1 === this._rgba[3]) return this;
            var i = this._rgba.slice(), n = i.pop(), r = u(t)._rgba;
            return u(e.map(i, function (e, t) {
                return (1 - n) * r[t] + n * e
            }))
        }, toRgbaString: function () {
            var t = "rgba(", i = e.map(this._rgba, function (e, t) {
                return null == e ? t > 2 ? 1 : 0 : e
            });
            return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
        }, toHslaString: function () {
            var t = "hsla(", i = e.map(this.hsla(), function (e, t) {
                return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
            });
            return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
        }, toHexString: function (t) {
            var i = this._rgba.slice(), n = i.pop();
            return t && i.push(~~(255 * n)), "#" + e.map(i, function (e) {
                return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
            }).join("")
        }, toString: function () {
            return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
        }
    }), u.fn.parse.prototype = u.fn, c.hsla.to = function (e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
        var t, i, n = e[0] / 255, r = e[1] / 255, s = e[2] / 255, a = e[3], o = Math.max(n, r, s),
            l = Math.min(n, r, s), u = o - l, c = o + l, d = .5 * c;
        return t = l === o ? 0 : n === o ? 60 * (r - s) / u + 360 : r === o ? 60 * (s - n) / u + 120 : 60 * (n - r) / u + 240, i = 0 === u ? 0 : .5 >= d ? u / c : u / (2 - c), [Math.round(t) % 360, i, d, null == a ? 1 : a]
    }, c.hsla.from = function (e) {
        if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
        var t = e[0] / 360, i = e[1], n = e[2], s = e[3], a = .5 >= n ? n * (1 + i) : n + i - n * i, o = 2 * n - a;
        return [Math.round(255 * r(o, a, t + 1 / 3)), Math.round(255 * r(o, a, t)), Math.round(255 * r(o, a, t - 1 / 3)), s]
    }, f(c, function (n, r) {
        var s = r.props, a = r.cache, l = r.to, c = r.from;
        u.fn[n] = function (n) {
            if (l && !this[a] && (this[a] = l(this._rgba)), n === t) return this[a].slice();
            var r, o = e.type(n), d = "array" === o || "object" === o ? n : arguments, h = this[a].slice();
            return f(s, function (e, t) {
                var n = d["object" === o ? e : t.idx];
                null == n && (n = h[t.idx]), h[t.idx] = i(n, t)
            }), c ? (r = u(c(h)), r[a] = h, r) : u(h)
        }, f(s, function (t, i) {
            u.fn[t] || (u.fn[t] = function (r) {
                var s, a = e.type(r), l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n, u = this[l](), c = u[i.idx];
                return "undefined" === a ? c : ("function" === a && (r = r.call(this, c), a = e.type(r)), null == r && i.empty ? this : ("string" === a && (s = o.exec(r), s && (r = c + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), u[i.idx] = r, this[l](u)))
            })
        })
    }), u.hook = function (t) {
        var i = t.split(" ");
        f(i, function (t, i) {
            e.cssHooks[i] = {
                set: function (t, r) {
                    var s, a, o = "";
                    if ("transparent" !== r && ("string" !== e.type(r) || (s = n(r)))) {
                        if (r = u(s || r), !h.rgba && 1 !== r._rgba[3]) {
                            for (a = "backgroundColor" === i ? t.parentNode : t; ("" === o || "transparent" === o) && a && a.style;) try {
                                o = e.css(a, "backgroundColor"), a = a.parentNode
                            } catch (l) {
                            }
                            r = r.blend(o && "transparent" !== o ? o : "_default")
                        }
                        r = r.toRgbaString()
                    }
                    try {
                        t.style[i] = r
                    } catch (l) {
                    }
                }
            }, e.fx.step[i] = function (t) {
                t.colorInit || (t.start = u(t.elem, i), t.end = u(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
            }
        })
    }, u.hook(a), e.cssHooks.borderColor = {
        expand: function (e) {
            var t = {};
            return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                t["border" + n + "Color"] = e
            }), t
        }
    }, s = e.Color.names = {
        aqua: "#00ffff",
        black: "#000000",
        blue: "#0000ff",
        fuchsia: "#ff00ff",
        gray: "#808080",
        green: "#008000",
        lime: "#00ff00",
        maroon: "#800000",
        navy: "#000080",
        olive: "#808000",
        purple: "#800080",
        red: "#ff0000",
        silver: "#c0c0c0",
        teal: "#008080",
        white: "#ffffff",
        yellow: "#ffff00",
        transparent: [null, null, null, 0],
        _default: "#ffffff"
    }
}(jQuery), !function (e) {
    e(["jquery"], function (e) {
        return function () {
            function t(e, t, i) {
                return f({type: _.error, iconClass: m().iconClasses.error, message: e, optionsOverride: i, title: t})
            }

            function i(t, i) {
                return t || (t = m()), v = e("#" + t.containerId), v.length ? v : (i && (v = d(t)), v)
            }

            function n(e, t, i) {
                return f({type: _.info, iconClass: m().iconClasses.info, message: e, optionsOverride: i, title: t})
            }

            function r(e) {
                y = e
            }

            function s(e, t, i) {
                return f({
                    type: _.success,
                    iconClass: m().iconClasses.success,
                    message: e,
                    optionsOverride: i,
                    title: t
                })
            }

            function a(e, t, i) {
                return f({
                    type: _.warning,
                    iconClass: m().iconClasses.warning,
                    message: e,
                    optionsOverride: i,
                    title: t
                })
            }

            function o(e, t) {
                var n = m();
                v || i(n), c(e, n, t) || u(n)
            }

            function l(t) {
                var n = m();
                return v || i(n), t && 0 === e(":focus", t).length ? void g(t) : void(v.children().length && v.remove())
            }

            function u(t) {
                for (var i = v.children(), n = i.length - 1; n >= 0; n--) c(e(i[n]), t)
            }

            function c(t, i, n) {
                var r = n && n.force ? n.force : !1;
                return t && (r || 0 === e(":focus", t).length) ? (t[i.hideMethod]({
                    duration: i.hideDuration,
                    easing: i.hideEasing,
                    complete: function () {
                        g(t)
                    }
                }), !0) : !1
            }

            function d(t) {
                return v = e("<div/>").attr("id", t.containerId).addClass(t.positionClass), v.appendTo(e(t.target)), v
            }

            function h() {
                return {
                    tapToDismiss: !0,
                    toastClass: "toast",
                    containerId: "toast-container",
                    debug: !1,
                    showMethod: "fadeIn",
                    showDuration: 300,
                    showEasing: "swing",
                    onShown: void 0,
                    hideMethod: "fadeOut",
                    hideDuration: 1e3,
                    hideEasing: "swing",
                    onHidden: void 0,
                    closeMethod: !1,
                    closeDuration: !1,
                    closeEasing: !1,
                    closeOnHover: !0,
                    extendedTimeOut: 1e3,
                    iconClasses: {
                        error: "toast-error",
                        info: "toast-info",
                        success: "toast-success",
                        warning: "toast-warning"
                    },
                    iconClass: "toast-info",
                    positionClass: "toast-top-right",
                    timeOut: 5e3,
                    titleClass: "toast-title",
                    messageClass: "toast-message",
                    escapeHtml: !1,
                    target: "body",
                    closeHtml: '<button type="button">&times;</button>',
                    closeClass: "toast-close-button",
                    newestOnTop: !0,
                    preventDuplicates: !1,
                    progressBar: !1,
                    progressClass: "toast-progress",
                    rtl: !1
                }
            }

            function p(e) {
                y && y(e)
            }

            function f(t) {
                function n(e) {
                    return null == e && (e = ""), e.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/'/g, "&#39;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
                }

                function r() {
                    l(), c(), d(), h(), f(), y(), u(), s()
                }

                function s() {
                    var e = "";
                    switch (t.iconClass) {
                        case"toast-success":
                        case"toast-info":
                            e = "polite";
                            break;
                        default:
                            e = "assertive"
                    }
                    k.attr("aria-live", e)
                }

                function a() {
                    E.closeOnHover && k.hover(C, x), !E.onclick && E.tapToDismiss && k.click(T), E.closeButton && M && M.click(function (e) {
                        e.stopPropagation ? e.stopPropagation() : void 0 !== e.cancelBubble && e.cancelBubble !== !0 && (e.cancelBubble = !0), E.onCloseClick && E.onCloseClick(e), T(!0)
                    }), E.onclick && k.click(function (e) {
                        E.onclick(e), T()
                    })
                }

                function o() {
                    k.hide(), k[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing,
                        complete: E.onShown
                    }), E.timeOut > 0 && (I = setTimeout(T, E.timeOut), O.maxHideTime = parseFloat(E.timeOut), O.hideEta = (new Date).getTime() + O.maxHideTime, E.progressBar && (O.intervalId = setInterval(S, 10)))
                }

                function l() {
                    t.iconClass && k.addClass(E.toastClass).addClass(P)
                }

                function u() {
                    E.newestOnTop ? v.prepend(k) : v.append(k)
                }

                function c() {
                    if (t.title) {
                        var e = t.title;
                        E.escapeHtml && (e = n(t.title)), j.append(e).addClass(E.titleClass), k.append(j)
                    }
                }

                function d() {
                    if (t.message) {
                        var e = t.message;
                        E.escapeHtml && (e = n(t.message)), A.append(e).addClass(E.messageClass), k.append(A)
                    }
                }

                function h() {
                    E.closeButton && (M.addClass(E.closeClass).attr("role", "button"), k.prepend(M))
                }

                function f() {
                    E.progressBar && (D.addClass(E.progressClass), k.prepend(D))
                }

                function y() {
                    E.rtl && k.addClass("rtl")
                }

                function _(e, t) {
                    if (e.preventDuplicates) {
                        if (t.message === b) return !0;
                        b = t.message
                    }
                    return !1
                }

                function T(t) {
                    var i = t && E.closeMethod !== !1 ? E.closeMethod : E.hideMethod,
                        n = t && E.closeDuration !== !1 ? E.closeDuration : E.hideDuration,
                        r = t && E.closeEasing !== !1 ? E.closeEasing : E.hideEasing;
                    return !e(":focus", k).length || t ? (clearTimeout(O.intervalId), k[i]({
                        duration: n,
                        easing: r,
                        complete: function () {
                            g(k), clearTimeout(I), E.onHidden && "hidden" !== Y.state && E.onHidden(), Y.state = "hidden", Y.endTime = new Date, p(Y)
                        }
                    })) : void 0
                }

                function x() {
                    (E.timeOut > 0 || E.extendedTimeOut > 0) && (I = setTimeout(T, E.extendedTimeOut), O.maxHideTime = parseFloat(E.extendedTimeOut), O.hideEta = (new Date).getTime() + O.maxHideTime)
                }

                function C() {
                    clearTimeout(I), O.hideEta = 0, k.stop(!0, !0)[E.showMethod]({
                        duration: E.showDuration,
                        easing: E.showEasing
                    })
                }

                function S() {
                    var e = (O.hideEta - (new Date).getTime()) / O.maxHideTime * 100;
                    D.width(e + "%")
                }

                var E = m(), P = t.iconClass || E.iconClass;
                if ("undefined" != typeof t.optionsOverride && (E = e.extend(E, t.optionsOverride), P = t.optionsOverride.iconClass || P), !_(E, t)) {
                    w++, v = i(E, !0);
                    var I = null, k = e("<div/>"), j = e("<div/>"), A = e("<div/>"), D = e("<div/>"),
                        M = e(E.closeHtml), O = {intervalId: null, hideEta: null, maxHideTime: null},
                        Y = {toastId: w, state: "visible", startTime: new Date, options: E, map: t};
                    return r(), o(), a(), p(Y), E.debug && console && console.log(Y), k
                }
            }

            function m() {
                return e.extend({}, h(), T.options)
            }

            function g(e) {
                v || (v = i()), e.is(":visible") || (e.remove(), e = null, 0 === v.children().length && (v.remove(), b = void 0))
            }

            var v, y, b, w = 0, _ = {error: "error", info: "info", success: "success", warning: "warning"}, T = {
                clear: o,
                remove: l,
                error: t,
                getContainer: i,
                info: n,
                options: {},
                subscribe: r,
                success: s,
                version: "2.1.4",
                warning: a
            };
            return T
        }()
    })
}("function" == typeof define && define.amd ? define : function (e, t) {
    "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) : window.toastr = t(window.jQuery)
}), !function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";

    function t(t) {
        var i = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(i))
    }

    function i(t) {
        var i = t.target, n = e(i);
        if (!n.is("[type=submit],[type=image]")) {
            var r = n.closest("[type=submit]");
            if (0 === r.length) return;
            i = r[0]
        }
        var s = this;
        if (s.clk = i, "image" == i.type) if (void 0 !== t.offsetX) s.clk_x = t.offsetX, s.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var a = n.offset();
            s.clk_x = t.pageX - a.left, s.clk_y = t.pageY - a.top
        } else s.clk_x = t.pageX - i.offsetLeft, s.clk_y = t.pageY - i.offsetTop;
        setTimeout(function () {
            s.clk = s.clk_x = s.clk_y = null
        }, 100)
    }

    function n() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var r = {};
    r.fileapi = void 0 !== e("<input type='file'/>").get(0).files, r.formdata = void 0 !== window.FormData;
    var s = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!s) return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function i(i) {
            var n, r, s = e.param(i, t.traditional).split("&"), a = s.length, o = [];
            for (n = 0; a > n; n++) s[n] = s[n].replace(/\+/g, " "), r = s[n].split("="), o.push([decodeURIComponent(r[0]), decodeURIComponent(r[1])]);
            return o
        }

        function a(n) {
            for (var r = new FormData, s = 0; s < n.length; s++) r.append(n[s].name, n[s].value);
            if (t.extraData) {
                var a = i(t.extraData);
                for (s = 0; s < a.length; s++) a[s] && r.append(a[s][0], a[s][1])
            }
            t.data = null;
            var o = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: l || "POST"
            });
            t.uploadProgress && (o.xhr = function () {
                var i = e.ajaxSettings.xhr();
                return i.upload && i.upload.addEventListener("progress", function (e) {
                    var i = 0, n = e.loaded || e.position, r = e.total;
                    e.lengthComputable && (i = Math.ceil(n / r * 100)), t.uploadProgress(e, n, r, i)
                }, !1), i
            }), o.data = null;
            var u = o.beforeSend;
            return o.beforeSend = function (e, i) {
                i.data = t.formData ? t.formData : r, u && u.call(this, e, i)
            }, e.ajax(o)
        }

        function o(i) {
            function r(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (i) {
                    n("cannot get iframe.contentWindow document: " + i)
                }
                if (t) return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (i) {
                    n("cannot get iframe.contentDocument: " + i), t = e.document
                }
                return t
            }

            function a() {
                function t() {
                    try {
                        var e = r(v).readyState;
                        n("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50);
                    } catch (i) {
                        n("Server abort: ", i, " (", i.name, ")"), o(E), T && clearTimeout(T), T = void 0
                    }
                }

                var i = d.attr2("target"), s = d.attr2("action"), a = "multipart/form-data",
                    u = d.attr("enctype") || d.attr("encoding") || a;
                x.setAttribute("target", f), (!l || /post/i.test(l)) && x.setAttribute("method", "POST"), s != h.url && x.setAttribute("action", h.url), h.skipEncodingOverride || l && !/post/i.test(l) || d.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), h.timeout && (T = setTimeout(function () {
                    _ = !0, o(S)
                }, h.timeout));
                var c = [];
                try {
                    if (h.extraData) for (var p in h.extraData) h.extraData.hasOwnProperty(p) && c.push(e.isPlainObject(h.extraData[p]) && h.extraData[p].hasOwnProperty("name") && h.extraData[p].hasOwnProperty("value") ? e('<input type="hidden" name="' + h.extraData[p].name + '">').val(h.extraData[p].value).appendTo(x)[0] : e('<input type="hidden" name="' + p + '">').val(h.extraData[p]).appendTo(x)[0]);
                    h.iframeTarget || g.appendTo("body"), v.attachEvent ? v.attachEvent("onload", o) : v.addEventListener("load", o, !1), setTimeout(t, 15);
                    try {
                        x.submit()
                    } catch (m) {
                        var y = document.createElement("form").submit;
                        y.apply(x)
                    }
                } finally {
                    x.setAttribute("action", s), x.setAttribute("enctype", u), i ? x.setAttribute("target", i) : d.removeAttr("target"), e(c).remove()
                }
            }

            function o(t) {
                if (!y.aborted && !A) {
                    if (j = r(v), j || (n("cannot access response document"), t = E), t === S && y) return y.abort("timeout"), void C.reject(y, "timeout");
                    if (t == E && y) return y.abort("server abort"), void C.reject(y, "error", "server abort");
                    if (j && j.location.href != h.iframeSrc || _) {
                        v.detachEvent ? v.detachEvent("onload", o) : v.removeEventListener("load", o, !1);
                        var i, s = "success";
                        try {
                            if (_) throw"timeout";
                            var a = "xml" == h.dataType || j.XMLDocument || e.isXMLDoc(j);
                            if (n("isXml=" + a), !a && window.opera && (null === j.body || !j.body.innerHTML) && --D) return n("requeing onLoad callback, DOM not available"), void setTimeout(o, 250);
                            var l = j.body ? j.body : j.documentElement;
                            y.responseText = l ? l.innerHTML : null, y.responseXML = j.XMLDocument ? j.XMLDocument : j, a && (h.dataType = "xml"), y.getResponseHeader = function (e) {
                                var t = {"content-type": h.dataType};
                                return t[e.toLowerCase()]
                            }, l && (y.status = Number(l.getAttribute("status")) || y.status, y.statusText = l.getAttribute("statusText") || y.statusText);
                            var u = (h.dataType || "").toLowerCase(), c = /(json|script|text)/.test(u);
                            if (c || h.textarea) {
                                var d = j.getElementsByTagName("textarea")[0];
                                if (d) y.responseText = d.value, y.status = Number(d.getAttribute("status")) || y.status, y.statusText = d.getAttribute("statusText") || y.statusText; else if (c) {
                                    var f = j.getElementsByTagName("pre")[0], m = j.getElementsByTagName("body")[0];
                                    f ? y.responseText = f.textContent ? f.textContent : f.innerText : m && (y.responseText = m.textContent ? m.textContent : m.innerText)
                                }
                            } else "xml" == u && !y.responseXML && y.responseText && (y.responseXML = M(y.responseText));
                            try {
                                k = Y(y, u, h)
                            } catch (b) {
                                s = "parsererror", y.error = i = b || s
                            }
                        } catch (b) {
                            n("error caught: ", b), s = "error", y.error = i = b || s
                        }
                        y.aborted && (n("upload aborted"), s = null), y.status && (s = y.status >= 200 && y.status < 300 || 304 === y.status ? "success" : "error"), "success" === s ? (h.success && h.success.call(h.context, k, "success", y), C.resolve(y.responseText, "success", y), p && e.event.trigger("ajaxSuccess", [y, h])) : s && (void 0 === i && (i = y.statusText), h.error && h.error.call(h.context, y, s, i), C.reject(y, "error", i), p && e.event.trigger("ajaxError", [y, h, i])), p && e.event.trigger("ajaxComplete", [y, h]), p && !--e.active && e.event.trigger("ajaxStop"), h.complete && h.complete.call(h.context, y, s), A = !0, h.timeout && clearTimeout(T), setTimeout(function () {
                            h.iframeTarget ? g.attr("src", h.iframeSrc) : g.remove(), y.responseXML = null
                        }, 100)
                    }
                }
            }

            var u, c, h, p, f, g, v, y, b, w, _, T, x = d[0], C = e.Deferred();
            if (C.abort = function (e) {
                    y.abort(e)
                }, i) for (c = 0; c < m.length; c++) u = e(m[c]), s ? u.prop("disabled", !1) : u.removeAttr("disabled");
            if (h = e.extend(!0, {}, e.ajaxSettings, t), h.context = h.context || h, f = "jqFormIO" + (new Date).getTime(), h.iframeTarget ? (g = e(h.iframeTarget), w = g.attr2("name"), w ? f = w : g.attr2("name", f)) : (g = e('<iframe name="' + f + '" src="' + h.iframeSrc + '" />'), g.css({
                    position: "absolute",
                    top: "-1000px",
                    left: "-1000px"
                })), v = g[0], y = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (t) {
                        var i = "timeout" === t ? "timeout" : "aborted";
                        n("aborting upload... " + i), this.aborted = 1;
                        try {
                            v.contentWindow.document.execCommand && v.contentWindow.document.execCommand("Stop")
                        } catch (r) {
                        }
                        g.attr("src", h.iframeSrc), y.error = i, h.error && h.error.call(h.context, y, i, t), p && e.event.trigger("ajaxError", [y, h, i]), h.complete && h.complete.call(h.context, y, i)
                    }
                }, p = h.global, p && 0 === e.active++ && e.event.trigger("ajaxStart"), p && e.event.trigger("ajaxSend", [y, h]), h.beforeSend && h.beforeSend.call(h.context, y, h) === !1) return h.global && e.active--, C.reject(), C;
            if (y.aborted) return C.reject(), C;
            b = x.clk, b && (w = b.name, w && !b.disabled && (h.extraData = h.extraData || {}, h.extraData[w] = b.value, "image" == b.type && (h.extraData[w + ".x"] = x.clk_x, h.extraData[w + ".y"] = x.clk_y)));
            var S = 1, E = 2, P = e("meta[name=csrf-token]").attr("content"),
                I = e("meta[name=csrf-param]").attr("content");
            I && P && (h.extraData = h.extraData || {}, h.extraData[I] = P), h.forceSync ? a() : setTimeout(a, 10);
            var k, j, A, D = 50, M = e.parseXML || function (e, t) {
                return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
            }, O = e.parseJSON || function (e) {
                return window.eval("(" + e + ")")
            }, Y = function (t, i, n) {
                var r = t.getResponseHeader("content-type") || "", s = "xml" === i || !i && r.indexOf("xml") >= 0,
                    a = s ? t.responseXML : t.responseText;
                return s && "parsererror" === a.documentElement.nodeName && e.error && e.error("parsererror"), n && n.dataFilter && (a = n.dataFilter(a, i)), "string" == typeof a && ("json" === i || !i && r.indexOf("json") >= 0 ? a = O(a) : ("script" === i || !i && r.indexOf("javascript") >= 0) && e.globalEval(a)), a
            };
            return C
        }

        if (!this.length) return n("ajaxSubmit: skipping submit process - no element selected"), this;
        var l, u, c, d = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), l = t.type || this.attr2("method"), u = t.url || this.attr2("action"), c = "string" == typeof u ? e.trim(u) : "", c = c || window.location.href || "", c && (c = (c.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: c,
            success: e.ajaxSettings.success,
            type: l || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var h = {};
        if (this.trigger("form-pre-serialize", [this, t, h]), h.veto) return n("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1) return n("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var p = t.traditional;
        void 0 === p && (p = e.ajaxSettings.traditional);
        var f, m = [], g = this.formToArray(t.semantic, m);
        if (t.data && (t.extraData = t.data, f = e.param(t.data, p)), t.beforeSubmit && t.beforeSubmit(g, this, t) === !1) return n("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [g, this, t, h]), h.veto) return n("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var v = e.param(g, p);
        f && (v = v ? v + "&" + f : f), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + v, t.data = null) : t.data = v;
        var y = [];
        if (t.resetForm && y.push(function () {
                d.resetForm()
            }), t.clearForm && y.push(function () {
                d.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var b = t.success || function () {
            };
            y.push(function (i) {
                var n = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[n](i).each(b, arguments)
            })
        } else t.success && y.push(t.success);
        if (t.success = function (e, i, n) {
                for (var r = t.context || this, s = 0, a = y.length; a > s; s++) y[s].apply(r, [e, i, n || d, d])
            }, t.error) {
            var w = t.error;
            t.error = function (e, i, n) {
                var r = t.context || this;
                w.apply(r, [e, i, n, d])
            }
        }
        if (t.complete) {
            var _ = t.complete;
            t.complete = function (e, i) {
                var n = t.context || this;
                _.apply(n, [e, i, d])
            }
        }
        var T = e("input[type=file]:enabled", this).filter(function () {
                return "" !== e(this).val()
            }), x = T.length > 0, C = "multipart/form-data", S = d.attr("enctype") == C || d.attr("encoding") == C,
            E = r.fileapi && r.formdata;
        n("fileAPI :" + E);
        var P, I = (x || S) && !E;
        t.iframe !== !1 && (t.iframe || I) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
            P = o(g)
        }) : P = o(g) : P = (x || S) && E ? a(g) : e.ajax(t), d.removeData("jqxhr").data("jqxhr", P);
        for (var k = 0; k < m.length; k++) m[k] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (r) {
        if (r = r || {}, r.delegation = r.delegation && e.isFunction(e.fn.on), !r.delegation && 0 === this.length) {
            var s = {s: this.selector, c: this.context};
            return !e.isReady && s.s ? (n("DOM not ready, queuing ajaxForm"), e(function () {
                e(s.s, s.c).ajaxForm(r)
            }), this) : (n("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return r.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, i).on("submit.form-plugin", this.selector, r, t).on("click.form-plugin", this.selector, r, i), this) : this.ajaxFormUnbind().bind("submit.form-plugin", r, t).bind("click.form-plugin", r, i)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, i) {
        var n = [];
        if (0 === this.length) return n;
        var s, a = this[0], o = this.attr("id"), l = t ? a.getElementsByTagName("*") : a.elements;
        if (l && !/MSIE [678]/.test(navigator.userAgent) && (l = e(l).get()), o && (s = e(':input[form="' + o + '"]').get(), s.length && (l = (l || []).concat(s))), !l || !l.length) return n;
        var u, c, d, h, p, f, m;
        for (u = 0, f = l.length; f > u; u++) if (p = l[u], d = p.name, d && !p.disabled) if (t && a.clk && "image" == p.type) a.clk == p && (n.push({
            name: d,
            value: e(p).val(),
            type: p.type
        }), n.push({name: d + ".x", value: a.clk_x}, {
            name: d + ".y",
            value: a.clk_y
        })); else if (h = e.fieldValue(p, !0), h && h.constructor == Array) for (i && i.push(p), c = 0, m = h.length; m > c; c++) n.push({
            name: d,
            value: h[c]
        }); else if (r.fileapi && "file" == p.type) {
            i && i.push(p);
            var g = p.files;
            if (g.length) for (c = 0; c < g.length; c++) n.push({
                name: d,
                value: g[c],
                type: p.type
            }); else n.push({name: d, value: "", type: p.type})
        } else null !== h && "undefined" != typeof h && (i && i.push(p), n.push({
            name: d,
            value: h,
            type: p.type,
            required: p.required
        }));
        if (!t && a.clk) {
            var v = e(a.clk), y = v[0];
            d = y.name, d && !y.disabled && "image" == y.type && (n.push({
                name: d,
                value: v.val()
            }), n.push({name: d + ".x", value: a.clk_x}, {name: d + ".y", value: a.clk_y}))
        }
        return n
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var i = [];
        return this.each(function () {
            var n = this.name;
            if (n) {
                var r = e.fieldValue(this, t);
                if (r && r.constructor == Array) for (var s = 0, a = r.length; a > s; s++) i.push({
                    name: n,
                    value: r[s]
                }); else null !== r && "undefined" != typeof r && i.push({name: this.name, value: r})
            }
        }), e.param(i)
    }, e.fn.fieldValue = function (t) {
        for (var i = [], n = 0, r = this.length; r > n; n++) {
            var s = this[n], a = e.fieldValue(s, t);
            null === a || "undefined" == typeof a || a.constructor == Array && !a.length || (a.constructor == Array ? e.merge(i, a) : i.push(a))
        }
        return i
    }, e.fieldValue = function (t, i) {
        var n = t.name, r = t.type, s = t.tagName.toLowerCase();
        if (void 0 === i && (i = !0), i && (!n || t.disabled || "reset" == r || "button" == r || ("checkbox" == r || "radio" == r) && !t.checked || ("submit" == r || "image" == r) && t.form && t.form.clk != t || "select" == s && -1 == t.selectedIndex)) return null;
        if ("select" == s) {
            var a = t.selectedIndex;
            if (0 > a) return null;
            for (var o = [], l = t.options, u = "select-one" == r, c = u ? a + 1 : l.length, d = u ? a : 0; c > d; d++) {
                var h = l[d];
                if (h.selected) {
                    var p = h.value;
                    if (p || (p = h.attributes && h.attributes.value && !h.attributes.value.specified ? h.text : h.value), u) return p;
                    o.push(p)
                }
            }
            return o
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var i = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var n = this.type, r = this.tagName.toLowerCase();
            i.test(n) || "textarea" == r ? this.value = "" : "checkbox" == n || "radio" == n ? this.checked = !1 : "select" == r ? this.selectedIndex = -1 : "file" == n ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(n) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var i = this.type;
            if ("checkbox" == i || "radio" == i) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var n = e(this).parent("select");
                t && n[0] && "select-one" == n[0].type && n.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
}), !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (e) {
    var t, i, n, r, s, a, o = "Close", l = "BeforeClose", u = "AfterClose", c = "BeforeAppend", d = "MarkupParse",
        h = "Open", p = "Change", f = "mfp", m = "." + f, g = "mfp-ready", v = "mfp-removing", y = "mfp-prevent-close",
        b = function () {
        }, w = !!window.jQuery, _ = e(window), T = function (e, i) {
            t.ev.on(f + e + m, i)
        }, x = function (t, i, n, r) {
            var s = document.createElement("div");
            return s.className = "mfp-" + t, n && (s.innerHTML = n), r ? i && i.appendChild(s) : (s = e(s), i && s.appendTo(i)), s
        }, C = function (i, n) {
            t.ev.triggerHandler(f + i, n), t.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), t.st.callbacks[i] && t.st.callbacks[i].apply(t, e.isArray(n) ? n : [n]))
        }, S = function (i) {
            return i === a && t.currTemplate.closeBtn || (t.currTemplate.closeBtn = e(t.st.closeMarkup.replace("%title%", t.st.tClose)), a = i), t.currTemplate.closeBtn
        }, E = function () {
            e.magnificPopup.instance || (t = new b, t.init(), e.magnificPopup.instance = t)
        }, P = function () {
            var e = document.createElement("p").style, t = ["ms", "O", "Moz", "Webkit"];
            if (void 0 !== e.transition) return !0;
            for (; t.length;) if (t.pop() + "Transition" in e) return !0;
            return !1
        };
    b.prototype = {
        constructor: b, init: function () {
            var i = navigator.appVersion;
            t.isLowIE = t.isIE8 = document.all && !document.addEventListener, t.isAndroid = /android/gi.test(i), t.isIOS = /iphone|ipad|ipod/gi.test(i), t.supportsTransition = P(), t.probablyMobile = t.isAndroid || t.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), n = e(document), t.popupsCache = {}
        }, open: function (i) {
            var r;
            if (i.isObj === !1) {
                t.items = i.items.toArray(), t.index = 0;
                var a, o = i.items;
                for (r = 0; r < o.length; r++) if (a = o[r], a.parsed && (a = a.el[0]), a === i.el[0]) {
                    t.index = r;
                    break
                }
            } else t.items = e.isArray(i.items) ? i.items : [i.items], t.index = i.index || 0;
            if (t.isOpen) return void t.updateItemHTML();
            t.types = [], s = "", i.mainEl && i.mainEl.length ? t.ev = i.mainEl.eq(0) : t.ev = n, i.key ? (t.popupsCache[i.key] || (t.popupsCache[i.key] = {}), t.currTemplate = t.popupsCache[i.key]) : t.currTemplate = {}, t.st = e.extend(!0, {}, e.magnificPopup.defaults, i), t.fixedContentPos = "auto" === t.st.fixedContentPos ? !t.probablyMobile : t.st.fixedContentPos, t.st.modal && (t.st.closeOnContentClick = !1, t.st.closeOnBgClick = !1, t.st.showCloseBtn = !1, t.st.enableEscapeKey = !1), t.bgOverlay || (t.bgOverlay = x("bg").on("click" + m, function () {
                t.close()
            }), t.wrap = x("wrap").attr("tabindex", -1).on("click" + m, function (e) {
                t._checkIfClose(e.target) && t.close()
            }), t.container = x("container", t.wrap)), t.contentContainer = x("content"), t.st.preloader && (t.preloader = x("preloader", t.container, t.st.tLoading));
            var l = e.magnificPopup.modules;
            for (r = 0; r < l.length; r++) {
                var u = l[r];
                u = u.charAt(0).toUpperCase() + u.slice(1), t["init" + u].call(t)
            }
            C("BeforeOpen"), t.st.showCloseBtn && (t.st.closeBtnInside ? (T(d, function (e, t, i, n) {
                i.close_replaceWith = S(n.type)
            }), s += " mfp-close-btn-in") : t.wrap.append(S())), t.st.alignTop && (s += " mfp-align-top"), t.fixedContentPos ? t.wrap.css({
                overflow: t.st.overflowY,
                overflowX: "hidden",
                overflowY: t.st.overflowY
            }) : t.wrap.css({
                top: _.scrollTop(),
                position: "absolute"
            }), (t.st.fixedBgPos === !1 || "auto" === t.st.fixedBgPos && !t.fixedContentPos) && t.bgOverlay.css({
                height: n.height(),
                position: "absolute"
            }), t.st.enableEscapeKey && n.on("keyup" + m, function (e) {
                27 === e.keyCode && t.close()
            }), _.on("resize" + m, function () {
                t.updateSize()
            }), t.st.closeOnContentClick || (s += " mfp-auto-cursor"), s && t.wrap.addClass(s);
            var c = t.wH = _.height(), p = {};
            if (t.fixedContentPos && t._hasScrollBar(c)) {
                var f = t._getScrollbarSize();
                f && (p.marginRight = f)
            }
            t.fixedContentPos && (t.isIE7 ? e("body, html").css("overflow", "hidden") : p.overflow = "hidden");
            var v = t.st.mainClass;
            return t.isIE7 && (v += " mfp-ie7"), v && t._addClassToMFP(v), t.updateItemHTML(), C("BuildControls"), e("html").css(p), t.bgOverlay.add(t.wrap).prependTo(t.st.prependTo || e(document.body)), t._lastFocusedEl = document.activeElement, setTimeout(function () {
                t.content ? (t._addClassToMFP(g), t._setFocus()) : t.bgOverlay.addClass(g), n.on("focusin" + m, t._onFocusIn)
            }, 16), t.isOpen = !0, t.updateSize(c), C(h), i
        }, close: function () {
            t.isOpen && (C(l), t.isOpen = !1, t.st.removalDelay && !t.isLowIE && t.supportsTransition ? (t._addClassToMFP(v), setTimeout(function () {
                t._close()
            }, t.st.removalDelay)) : t._close())
        }, _close: function () {
            C(o);
            var i = v + " " + g + " ";
            if (t.bgOverlay.detach(), t.wrap.detach(), t.container.empty(), t.st.mainClass && (i += t.st.mainClass + " "), t._removeClassFromMFP(i), t.fixedContentPos) {
                var r = {marginRight: ""};
                t.isIE7 ? e("body, html").css("overflow", "") : r.overflow = "", e("html").css(r)
            }
            n.off("keyup" + m + " focusin" + m), t.ev.off(m), t.wrap.attr("class", "mfp-wrap").removeAttr("style"), t.bgOverlay.attr("class", "mfp-bg"), t.container.attr("class", "mfp-container"), !t.st.showCloseBtn || t.st.closeBtnInside && t.currTemplate[t.currItem.type] !== !0 || t.currTemplate.closeBtn && t.currTemplate.closeBtn.detach(), t.st.autoFocusLast && t._lastFocusedEl && e(t._lastFocusedEl).focus(), t.currItem = null, t.content = null, t.currTemplate = null, t.prevHeight = 0, C(u)
        }, updateSize: function (e) {
            if (t.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, n = window.innerHeight * i;
                t.wrap.css("height", n), t.wH = n
            } else t.wH = e || _.height();
            t.fixedContentPos || t.wrap.css("height", t.wH), C("Resize")
        }, updateItemHTML: function () {
            var i = t.items[t.index];
            t.contentContainer.detach(), t.content && t.content.detach(), i.parsed || (i = t.parseEl(t.index));
            var n = i.type;
            if (C("BeforeChange", [t.currItem ? t.currItem.type : "", n]), t.currItem = i, !t.currTemplate[n]) {
                var s = t.st[n] ? t.st[n].markup : !1;
                C("FirstMarkupParse", s), s ? t.currTemplate[n] = e(s) : t.currTemplate[n] = !0
            }
            r && r !== i.type && t.container.removeClass("mfp-" + r + "-holder");
            var a = t["get" + n.charAt(0).toUpperCase() + n.slice(1)](i, t.currTemplate[n]);
            t.appendContent(a, n), i.preloaded = !0, C(p, i), r = i.type, t.container.prepend(t.contentContainer), C("AfterChange")
        }, appendContent: function (e, i) {
            t.content = e, e ? t.st.showCloseBtn && t.st.closeBtnInside && t.currTemplate[i] === !0 ? t.content.find(".mfp-close").length || t.content.append(S()) : t.content = e : t.content = "", C(c), t.container.addClass("mfp-" + i + "-holder"), t.contentContainer.append(t.content)
        }, parseEl: function (i) {
            var n, r = t.items[i];
            if (r.tagName ? r = {el: e(r)} : (n = r.type, r = {data: r, src: r.src}), r.el) {
                for (var s = t.types, a = 0; a < s.length; a++) if (r.el.hasClass("mfp-" + s[a])) {
                    n = s[a];
                    break
                }
                r.src = r.el.attr("data-mfp-src"), r.src || (r.src = r.el.attr("href"))
            }
            return r.type = n || t.st.type || "inline", r.index = i, r.parsed = !0, t.items[i] = r, C("ElementParse", r), t.items[i]
        }, addGroup: function (e, i) {
            var n = function (n) {
                n.mfpEl = this, t._openClick(n, e, i)
            };
            i || (i = {});
            var r = "click.magnificPopup";
            i.mainEl = e, i.items ? (i.isObj = !0, e.off(r).on(r, n)) : (i.isObj = !1, i.delegate ? e.off(r).on(r, i.delegate, n) : (i.items = e, e.off(r).on(r, n)))
        }, _openClick: function (i, n, r) {
            var s = void 0 !== r.midClick ? r.midClick : e.magnificPopup.defaults.midClick;
            if (s || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var a = void 0 !== r.disableOn ? r.disableOn : e.magnificPopup.defaults.disableOn;
                if (a) if (e.isFunction(a)) {
                    if (!a.call(t)) return !0
                } else if (_.width() < a) return !0;
                i.type && (i.preventDefault(), t.isOpen && i.stopPropagation()), r.el = e(i.mfpEl), r.delegate && (r.items = n.find(r.delegate)), t.open(r)
            }
        }, updateStatus: function (e, n) {
            if (t.preloader) {
                i !== e && t.container.removeClass("mfp-s-" + i), n || "loading" !== e || (n = t.st.tLoading);
                var r = {status: e, text: n};
                C("UpdateStatus", r), e = r.status, n = r.text, t.preloader.html(n), t.preloader.find("a").on("click", function (e) {
                    e.stopImmediatePropagation()
                }), t.container.addClass("mfp-s-" + e), i = e
            }
        }, _checkIfClose: function (i) {
            if (!e(i).hasClass(y)) {
                var n = t.st.closeOnContentClick, r = t.st.closeOnBgClick;
                if (n && r) return !0;
                if (!t.content || e(i).hasClass("mfp-close") || t.preloader && i === t.preloader[0]) return !0;
                if (i === t.content[0] || e.contains(t.content[0], i)) {
                    if (n) return !0
                } else if (r && e.contains(document, i)) return !0;
                return !1
            }
        }, _addClassToMFP: function (e) {
            t.bgOverlay.addClass(e), t.wrap.addClass(e)
        }, _removeClassFromMFP: function (e) {
            this.bgOverlay.removeClass(e), t.wrap.removeClass(e)
        }, _hasScrollBar: function (e) {
            return (t.isIE7 ? n.height() : document.body.scrollHeight) > (e || _.height())
        }, _setFocus: function () {
            (t.st.focus ? t.content.find(t.st.focus).eq(0) : t.wrap).focus()
        }, _onFocusIn: function (i) {
            return i.target === t.wrap[0] || e.contains(t.wrap[0], i.target) ? void 0 : (t._setFocus(), !1)
        }, _parseMarkup: function (t, i, n) {
            var r;
            n.data && (i = e.extend(n.data, i)), C(d, [t, i, n]), e.each(i, function (i, n) {
                if (void 0 === n || n === !1) return !0;
                if (r = i.split("_"), r.length > 1) {
                    var s = t.find(m + "-" + r[0]);
                    if (s.length > 0) {
                        var a = r[1];
                        "replaceWith" === a ? s[0] !== n[0] && s.replaceWith(n) : "img" === a ? s.is("img") ? s.attr("src", n) : s.replaceWith(e("<img>").attr("src", n).attr("class", s.attr("class"))) : s.attr(r[1], n)
                    }
                } else t.find(m + "-" + i).html(n)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === t.scrollbarSize) {
                var e = document.createElement("div");
                e.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(e), t.scrollbarSize = e.offsetWidth - e.clientWidth, document.body.removeChild(e)
            }
            return t.scrollbarSize
        }
    }, e.magnificPopup = {
        instance: null,
        proto: b.prototype,
        modules: [],
        open: function (t, i) {
            return E(), t = t ? e.extend(!0, {}, t) : {}, t.isObj = !0, t.index = i || 0, this.instance.open(t)
        },
        close: function () {
            return e.magnificPopup.instance && e.magnificPopup.instance.close()
        },
        registerModule: function (t, i) {
            i.options && (e.magnificPopup.defaults[t] = i.options), e.extend(this.proto, i.proto), this.modules.push(t)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, e.fn.magnificPopup = function (i) {
        E();
        var n = e(this);
        if ("string" == typeof i) if ("open" === i) {
            var r, s = w ? n.data("magnificPopup") : n[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
            s.items ? r = s.items[a] : (r = n, s.delegate && (r = r.find(s.delegate)), r = r.eq(a)), t._openClick({mfpEl: r}, n, s)
        } else t.isOpen && t[i].apply(t, Array.prototype.slice.call(arguments, 1)); else i = e.extend(!0, {}, i), w ? n.data("magnificPopup", i) : n[0].magnificPopup = i, t.addGroup(n, i);
        return n
    };
    var I, k, j, A = "inline", D = function () {
        j && (k.after(j.addClass(I)).detach(), j = null)
    };
    e.magnificPopup.registerModule(A, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                t.types.push(A), T(o + "." + A, function () {
                    D()
                })
            }, getInline: function (i, n) {
                if (D(), i.src) {
                    var r = t.st.inline, s = e(i.src);
                    if (s.length) {
                        var a = s[0].parentNode;
                        a && a.tagName && (k || (I = r.hiddenClass, k = x(I), I = "mfp-" + I), j = s.after(k).detach().removeClass(I)), t.updateStatus("ready")
                    } else t.updateStatus("error", r.tNotFound), s = e("<div>");
                    return i.inlineElement = s, s
                }
                return t.updateStatus("ready"), t._parseMarkup(n, {}, i), n
            }
        }
    });
    var M, O = "ajax", Y = function () {
        M && e(document.body).removeClass(M)
    }, z = function () {
        Y(), t.req && t.req.abort()
    };
    e.magnificPopup.registerModule(O, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                t.types.push(O), M = t.st.ajax.cursor, T(o + "." + O, z), T("BeforeChange." + O, z)
            }, getAjax: function (i) {
                M && e(document.body).addClass(M), t.updateStatus("loading");
                var n = e.extend({
                    url: i.src, success: function (n, r, s) {
                        var a = {data: n, xhr: s};
                        C("ParseAjax", a), t.appendContent(e(a.data), O), i.finished = !0, Y(), t._setFocus(), setTimeout(function () {
                            t.wrap.addClass(g)
                        }, 16), t.updateStatus("ready"), C("AjaxContentAdded")
                    }, error: function () {
                        Y(), i.finished = i.loadError = !0, t.updateStatus("error", t.st.ajax.tError.replace("%url%", i.src))
                    }
                }, t.st.ajax.settings);
                return t.req = e.ajax(n), ""
            }
        }
    });
    var Q, L = function (i) {
        if (i.data && void 0 !== i.data.title) return i.data.title;
        var n = t.st.image.titleSrc;
        if (n) {
            if (e.isFunction(n)) return n.call(t, i);
            if (i.el) return i.el.attr(n) || ""
        }
        return ""
    };
    e.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var i = t.st.image, n = ".image";
                t.types.push("image"), T(h + n, function () {
                    "image" === t.currItem.type && i.cursor && e(document.body).addClass(i.cursor)
                }), T(o + n, function () {
                    i.cursor && e(document.body).removeClass(i.cursor), _.off("resize" + m)
                }), T("Resize" + n, t.resizeImage), t.isLowIE && T("AfterChange", t.resizeImage)
            }, resizeImage: function () {
                var e = t.currItem;
                if (e && e.img && t.st.image.verticalFit) {
                    var i = 0;
                    t.isLowIE && (i = parseInt(e.img.css("padding-top"), 10) + parseInt(e.img.css("padding-bottom"), 10)), e.img.css("max-height", t.wH - i)
                }
            }, _onImageHasSize: function (e) {
                e.img && (e.hasSize = !0, Q && clearInterval(Q), e.isCheckingImgSize = !1, C("ImageHasSize", e), e.imgHidden && (t.content && t.content.removeClass("mfp-loading"), e.imgHidden = !1))
            }, findImageSize: function (e) {
                var i = 0, n = e.img[0], r = function (s) {
                    Q && clearInterval(Q), Q = setInterval(function () {
                        return n.naturalWidth > 0 ? void t._onImageHasSize(e) : (i > 200 && clearInterval(Q), i++, void(3 === i ? r(10) : 40 === i ? r(50) : 100 === i && r(500)))
                    }, s)
                };
                r(1)
            }, getImage: function (i, n) {
                var r = 0, s = function () {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, C("ImageLoadComplete")) : (r++, 200 > r ? setTimeout(s, 100) : a()))
                }, a = function () {
                    i && (i.img.off(".mfploader"), i === t.currItem && (t._onImageHasSize(i), t.updateStatus("error", o.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                }, o = t.st.image, l = n.find(".mfp-img");
                if (l.length) {
                    var u = document.createElement("img");
                    u.className = "mfp-img", i.el && i.el.find("img").length && (u.alt = i.el.find("img").attr("alt")), i.img = e(u).on("load.mfploader", s).on("error.mfploader", a), u.src = i.src, l.is("img") && (i.img = i.img.clone()), u = i.img[0], u.naturalWidth > 0 ? i.hasSize = !0 : u.width || (i.hasSize = !1)
                }
                return t._parseMarkup(n, {
                    title: L(i),
                    img_replaceWith: i.img
                }, i), t.resizeImage(), i.hasSize ? (Q && clearInterval(Q), i.loadError ? (n.addClass("mfp-loading"), t.updateStatus("error", o.tError.replace("%url%", i.src))) : (n.removeClass("mfp-loading"), t.updateStatus("ready")), n) : (t.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, n.addClass("mfp-loading"), t.findImageSize(i)), n)
            }
        }
    });
    var N, B = function () {
        return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
    };
    e.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1,
            easing: "ease-in-out",
            duration: 300,
            opener: function (e) {
                return e.is("img") ? e : e.find("img")
            }
        }, proto: {
            initZoom: function () {
                var e, i = t.st.zoom, n = ".zoom";
                if (i.enabled && t.supportsTransition) {
                    var r, s, a = i.duration, u = function (e) {
                        var t = e.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            n = "all " + i.duration / 1e3 + "s " + i.easing, r = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, s = "transition";
                        return r["-webkit-" + s] = r["-moz-" + s] = r["-o-" + s] = r[s] = n, t.css(r), t
                    }, c = function () {
                        t.content.css("visibility", "visible")
                    };
                    T("BuildControls" + n, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(r), t.content.css("visibility", "hidden"), e = t._getItemToZoom(), !e) return void c();
                            s = u(e), s.css(t._getOffset()), t.wrap.append(s), r = setTimeout(function () {
                                s.css(t._getOffset(!0)), r = setTimeout(function () {
                                    c(), setTimeout(function () {
                                        s.remove(), e = s = null, C("ZoomAnimationEnded")
                                    }, 16)
                                }, a)
                            }, 16)
                        }
                    }), T(l + n, function () {
                        if (t._allowZoom()) {
                            if (clearTimeout(r), t.st.removalDelay = a, !e) {
                                if (e = t._getItemToZoom(), !e) return;
                                s = u(e)
                            }
                            s.css(t._getOffset(!0)), t.wrap.append(s), t.content.css("visibility", "hidden"), setTimeout(function () {
                                s.css(t._getOffset())
                            }, 16)
                        }
                    }), T(o + n, function () {
                        t._allowZoom() && (c(), s && s.remove(), e = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === t.currItem.type
            }, _getItemToZoom: function () {
                return t.currItem.hasSize ? t.currItem.img : !1
            }, _getOffset: function (i) {
                var n;
                n = i ? t.currItem.img : t.st.zoom.opener(t.currItem.el || t.currItem);
                var r = n.offset(), s = parseInt(n.css("padding-top"), 10), a = parseInt(n.css("padding-bottom"), 10);
                r.top -= e(window).scrollTop() - s;
                var o = {width: n.width(), height: (w ? n.innerHeight() : n[0].offsetHeight) - a - s};
                return B() ? o["-moz-transform"] = o.transform = "translate(" + r.left + "px," + r.top + "px)" : (o.left = r.left, o.top = r.top), o
            }
        }
    });
    var H = "iframe", R = "//about:blank", F = function (e) {
        if (t.currTemplate[H]) {
            var i = t.currTemplate[H].find("iframe");
            i.length && (e || (i[0].src = R), t.isIE8 && i.css("display", e ? "block" : "none"))
        }
    };
    e.magnificPopup.registerModule(H, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                t.types.push(H), T("BeforeChange", function (e, t, i) {
                    t !== i && (t === H ? F() : i === H && F(!0))
                }), T(o + "." + H, function () {
                    F()
                })
            }, getIframe: function (i, n) {
                var r = i.src, s = t.st.iframe;
                e.each(s.patterns, function () {
                    return r.indexOf(this.index) > -1 ? (this.id && (r = "string" == typeof this.id ? r.substr(r.lastIndexOf(this.id) + this.id.length, r.length) : this.id.call(this, r)), r = this.src.replace("%id%", r), !1) : void 0
                });
                var a = {};
                return s.srcAction && (a[s.srcAction] = r), t._parseMarkup(n, a, i), t.updateStatus("ready"), n
            }
        }
    });
    var $ = function (e) {
        var i = t.items.length;
        return e > i - 1 ? e - i : 0 > e ? i + e : e
    }, W = function (e, t, i) {
        return e.replace(/%curr%/gi, t + 1).replace(/%total%/gi, i)
    };
    e.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var i = t.st.gallery, r = ".mfp-gallery";
                return t.direction = !0, i && i.enabled ? (s += " mfp-gallery", T(h + r, function () {
                    i.navigateByImgClick && t.wrap.on("click" + r, ".mfp-img", function () {
                        return t.items.length > 1 ? (t.next(), !1) : void 0
                    }), n.on("keydown" + r, function (e) {
                        37 === e.keyCode ? t.prev() : 39 === e.keyCode && t.next()
                    })
                }), T("UpdateStatus" + r, function (e, i) {
                    i.text && (i.text = W(i.text, t.currItem.index, t.items.length))
                }), T(d + r, function (e, n, r, s) {
                    var a = t.items.length;
                    r.counter = a > 1 ? W(i.tCounter, s.index, a) : ""
                }), T("BuildControls" + r, function () {
                    if (t.items.length > 1 && i.arrows && !t.arrowLeft) {
                        var n = i.arrowMarkup,
                            r = t.arrowLeft = e(n.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(y),
                            s = t.arrowRight = e(n.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(y);
                        r.click(function () {
                            t.prev()
                        }), s.click(function () {
                            t.next()
                        }), t.container.append(r.add(s))
                    }
                }), T(p + r, function () {
                    t._preloadTimeout && clearTimeout(t._preloadTimeout), t._preloadTimeout = setTimeout(function () {
                        t.preloadNearbyImages(), t._preloadTimeout = null
                    }, 16)
                }), void T(o + r, function () {
                    n.off(r), t.wrap.off("click" + r), t.arrowRight = t.arrowLeft = null
                })) : !1
            }, next: function () {
                t.direction = !0, t.index = $(t.index + 1), t.updateItemHTML()
            }, prev: function () {
                t.direction = !1, t.index = $(t.index - 1), t.updateItemHTML()
            }, goTo: function (e) {
                t.direction = e >= t.index, t.index = e, t.updateItemHTML()
            }, preloadNearbyImages: function () {
                var e, i = t.st.gallery.preload, n = Math.min(i[0], t.items.length), r = Math.min(i[1], t.items.length);
                for (e = 1; e <= (t.direction ? r : n); e++) t._preloadItem(t.index + e);
                for (e = 1; e <= (t.direction ? n : r); e++) t._preloadItem(t.index - e)
            }, _preloadItem: function (i) {
                if (i = $(i), !t.items[i].preloaded) {
                    var n = t.items[i];
                    n.parsed || (n = t.parseEl(i)), C("LazyLoad", n), "image" === n.type && (n.img = e('<img class="mfp-img" />').on("load.mfploader", function () {
                        n.hasSize = !0
                    }).on("error.mfploader", function () {
                        n.hasSize = !0, n.loadError = !0, C("LazyLoadError", n)
                    }).attr("src", n.src)), n.preloaded = !0;
                }
            }
        }
    });
    var q = "retina";
    e.magnificPopup.registerModule(q, {
        options: {
            replaceSrc: function (e) {
                return e.src.replace(/\.\w+$/, function (e) {
                    return "@2x" + e
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var e = t.st.retina, i = e.ratio;
                    i = isNaN(i) ? i() : i, i > 1 && (T("ImageHasSize." + q, function (e, t) {
                        t.img.css({"max-width": t.img[0].naturalWidth / i, width: "100%"})
                    }), T("ElementParse." + q, function (t, n) {
                        n.src = e.replaceSrc(n, i)
                    }))
                }
            }
        }
    }), E()
}), function (e) {
    var t = !0;
    e.flexslider = function (i, n) {
        var r = e(i);
        r.vars = e.extend({}, e.flexslider.defaults, n);
        var s, a = r.vars.namespace, o = window.navigator && window.navigator.msPointerEnabled && window.MSGesture,
            l = ("ontouchstart" in window || o || window.DocumentTouch && document instanceof DocumentTouch) && r.vars.touch,
            u = "click touchend MSPointerUp keyup", c = "", d = "vertical" === r.vars.direction, h = r.vars.reverse,
            p = r.vars.itemWidth > 0, f = "fade" === r.vars.animation, m = "" !== r.vars.asNavFor, g = {};
        e.data(i, "flexslider", r), g = {
            init: function () {
                r.animating = !1, r.currentSlide = parseInt(r.vars.startAt ? r.vars.startAt : 0, 10), isNaN(r.currentSlide) && (r.currentSlide = 0), r.animatingTo = r.currentSlide, r.atEnd = 0 === r.currentSlide || r.currentSlide === r.last, r.containerSelector = r.vars.selector.substr(0, r.vars.selector.search(" ")), r.slides = e(r.vars.selector, r), r.container = e(r.containerSelector, r), r.count = r.slides.length, r.syncExists = e(r.vars.sync).length > 0, "slide" === r.vars.animation && (r.vars.animation = "swing"), r.prop = d ? "top" : "marginLeft", r.args = {}, r.manualPause = !1, r.stopped = !1, r.started = !1, r.startTimeout = null, r.transitions = !r.vars.video && !f && r.vars.useCSS && function () {
                    var e = document.createElement("div"),
                        t = ["perspectiveProperty", "WebkitPerspective", "MozPerspective", "OPerspective", "msPerspective"];
                    for (var i in t) if (void 0 !== e.style[t[i]]) return r.pfx = t[i].replace("Perspective", "").toLowerCase(), r.prop = "-" + r.pfx + "-transform", !0;
                    return !1
                }(), r.ensureAnimationEnd = "", "" !== r.vars.controlsContainer && (r.controlsContainer = e(r.vars.controlsContainer).length > 0 && e(r.vars.controlsContainer)), "" !== r.vars.manualControls && (r.manualControls = e(r.vars.manualControls).length > 0 && e(r.vars.manualControls)), "" !== r.vars.customDirectionNav && (r.customDirectionNav = 2 === e(r.vars.customDirectionNav).length && e(r.vars.customDirectionNav)), r.vars.randomize && (r.slides.sort(function () {
                    return Math.round(Math.random()) - .5
                }), r.container.empty().append(r.slides)), r.doMath(), r.setup("init"), r.vars.controlNav && g.controlNav.setup(), r.vars.directionNav && g.directionNav.setup(), r.vars.keyboard && (1 === e(r.containerSelector).length || r.vars.multipleKeyboard) && e(document).bind("keyup", function (e) {
                    var t = e.keyCode;
                    if (!r.animating && (39 === t || 37 === t)) {
                        var i = 39 === t ? r.getTarget("next") : 37 === t ? r.getTarget("prev") : !1;
                        r.flexAnimate(i, r.vars.pauseOnAction)
                    }
                }), r.vars.mousewheel && r.bind("mousewheel", function (e, t, i, n) {
                    e.preventDefault();
                    var s = 0 > t ? r.getTarget("next") : r.getTarget("prev");
                    r.flexAnimate(s, r.vars.pauseOnAction)
                }), r.vars.pausePlay && g.pausePlay.setup(), r.vars.slideshow && r.vars.pauseInvisible && g.pauseInvisible.init(), r.vars.slideshow && (r.vars.pauseOnHover && r.hover(function () {
                    r.manualPlay || r.manualPause || r.pause()
                }, function () {
                    r.manualPause || r.manualPlay || r.stopped || r.play()
                }), r.vars.pauseInvisible && g.pauseInvisible.isHidden() || (r.vars.initDelay > 0 ? r.startTimeout = setTimeout(r.play, r.vars.initDelay) : r.play())), m && g.asNav.setup(), l && r.vars.touch && g.touch(), (!f || f && r.vars.smoothHeight) && e(window).on("resize orientationchange focus", g.resize), r.find("img").attr("draggable", "false"), setTimeout(function () {
                    r.vars.start(r)
                }, 200)
            }, asNav: {
                setup: function () {
                    r.asNav = !0, r.animatingTo = Math.floor(r.currentSlide / r.move), r.currentItem = r.currentSlide, r.slides.removeClass(a + "active-slide").eq(r.currentItem).addClass(a + "active-slide"), o ? (i._slider = r, r.slides.each(function () {
                        var t = this;
                        t._gesture = new MSGesture, t._gesture.target = t, t.addEventListener("MSPointerDown", function (e) {
                            e.preventDefault(), e.currentTarget._gesture && e.currentTarget._gesture.addPointer(e.pointerId)
                        }, !1), t.addEventListener("MSGestureTap", function (t) {
                            t.preventDefault();
                            var i = e(this), n = i.index();
                            e(r.vars.asNavFor).data("flexslider").animating || i.hasClass("active") || (r.direction = r.currentItem < n ? "next" : "prev", r.flexAnimate(n, r.vars.pauseOnAction, !1, !0, !0))
                        })
                    })) : r.slides.on(u, function (t) {
                        t.preventDefault();
                        var i = e(this), n = i.index(), s = i.offset().left - e(r).scrollLeft();
                        0 >= s && i.hasClass(a + "active-slide") ? r.flexAnimate(r.getTarget("prev"), !0) : e(r.vars.asNavFor).data("flexslider").animating || i.hasClass(a + "active-slide") || (r.direction = r.currentItem < n ? "next" : "prev", r.flexAnimate(n, r.vars.pauseOnAction, !1, !0, !0))
                    })
                }
            }, controlNav: {
                setup: function () {
                    r.manualControls ? g.controlNav.setupManual() : g.controlNav.setupPaging()
                }, setupPaging: function () {
                    var t, i, n = "thumbnails" === r.vars.controlNav ? "control-thumbs" : "control-paging", s = 1;
                    if (r.controlNavScaffold = e('<ol class="' + a + "control-nav " + a + n + '"></ol>'), r.pagingCount > 1) for (var o = 0; o < r.pagingCount; o++) {
                        i = r.slides.eq(o), void 0 === i.attr("data-thumb-alt") && i.attr("data-thumb-alt", "");
                        var l = "" !== i.attr("data-thumb-alt") ? l = ' alt="' + i.attr("data-thumb-alt") + '"' : "";
                        if (t = "thumbnails" === r.vars.controlNav ? '<img src="' + i.attr("data-thumb") + '"' + l + "/>" : '<a href="#">' + s + "</a>", "thumbnails" === r.vars.controlNav && !0 === r.vars.thumbCaptions) {
                            var d = i.attr("data-thumbcaption");
                            "" !== d && void 0 !== d && (t += '<span class="' + a + 'caption">' + d + "</span>")
                        }
                        r.controlNavScaffold.append("<li>" + t + "</li>"), s++
                    }
                    r.controlsContainer ? e(r.controlsContainer).append(r.controlNavScaffold) : r.append(r.controlNavScaffold), g.controlNav.set(), g.controlNav.active(), r.controlNavScaffold.delegate("a, img", u, function (t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var i = e(this), n = r.controlNav.index(i);
                            i.hasClass(a + "active") || (r.direction = n > r.currentSlide ? "next" : "prev", r.flexAnimate(n, r.vars.pauseOnAction))
                        }
                        "" === c && (c = t.type), g.setToClearWatchedEvent()
                    })
                }, setupManual: function () {
                    r.controlNav = r.manualControls, g.controlNav.active(), r.controlNav.bind(u, function (t) {
                        if (t.preventDefault(), "" === c || c === t.type) {
                            var i = e(this), n = r.controlNav.index(i);
                            i.hasClass(a + "active") || (n > r.currentSlide ? r.direction = "next" : r.direction = "prev", r.flexAnimate(n, r.vars.pauseOnAction))
                        }
                        "" === c && (c = t.type), g.setToClearWatchedEvent()
                    })
                }, set: function () {
                    var t = "thumbnails" === r.vars.controlNav ? "img" : "a";
                    r.controlNav = e("." + a + "control-nav li " + t, r.controlsContainer ? r.controlsContainer : r)
                }, active: function () {
                    r.controlNav.removeClass(a + "active").eq(r.animatingTo).addClass(a + "active")
                }, update: function (t, i) {
                    r.pagingCount > 1 && "add" === t ? r.controlNavScaffold.append(e('<li><a href="#">' + r.count + "</a></li>")) : 1 === r.pagingCount ? r.controlNavScaffold.find("li").remove() : r.controlNav.eq(i).closest("li").remove(), g.controlNav.set(), r.pagingCount > 1 && r.pagingCount !== r.controlNav.length ? r.update(i, t) : g.controlNav.active()
                }
            }, directionNav: {
                setup: function () {
                    var t = e('<ul class="' + a + 'direction-nav"><li class="' + a + 'nav-prev"><a class="' + a + 'prev" href="#">' + r.vars.prevText + '</a></li><li class="' + a + 'nav-next"><a class="' + a + 'next" href="#">' + r.vars.nextText + "</a></li></ul>");
                    r.customDirectionNav ? r.directionNav = r.customDirectionNav : r.controlsContainer ? (e(r.controlsContainer).append(t), r.directionNav = e("." + a + "direction-nav li a", r.controlsContainer)) : (r.append(t), r.directionNav = e("." + a + "direction-nav li a", r)), g.directionNav.update(), r.directionNav.bind(u, function (t) {
                        t.preventDefault();
                        var i;
                        ("" === c || c === t.type) && (i = e(this).hasClass(a + "next") ? r.getTarget("next") : r.getTarget("prev"), r.flexAnimate(i, r.vars.pauseOnAction)), "" === c && (c = t.type), g.setToClearWatchedEvent()
                    })
                }, update: function () {
                    var e = a + "disabled";
                    1 === r.pagingCount ? r.directionNav.addClass(e).attr("tabindex", "-1") : r.vars.animationLoop ? r.directionNav.removeClass(e).removeAttr("tabindex") : 0 === r.animatingTo ? r.directionNav.removeClass(e).filter("." + a + "prev").addClass(e).attr("tabindex", "-1") : r.animatingTo === r.last ? r.directionNav.removeClass(e).filter("." + a + "next").addClass(e).attr("tabindex", "-1") : r.directionNav.removeClass(e).removeAttr("tabindex")
                }
            }, pausePlay: {
                setup: function () {
                    var t = e('<div class="' + a + 'pauseplay"><a href="#"></a></div>');
                    r.controlsContainer ? (r.controlsContainer.append(t), r.pausePlay = e("." + a + "pauseplay a", r.controlsContainer)) : (r.append(t), r.pausePlay = e("." + a + "pauseplay a", r)), g.pausePlay.update(r.vars.slideshow ? a + "pause" : a + "play"), r.pausePlay.bind(u, function (t) {
                        t.preventDefault(), ("" === c || c === t.type) && (e(this).hasClass(a + "pause") ? (r.manualPause = !0, r.manualPlay = !1, r.pause()) : (r.manualPause = !1, r.manualPlay = !0, r.play())), "" === c && (c = t.type), g.setToClearWatchedEvent()
                    })
                }, update: function (e) {
                    "play" === e ? r.pausePlay.removeClass(a + "pause").addClass(a + "play").html(r.vars.playText) : r.pausePlay.removeClass(a + "play").addClass(a + "pause").html(r.vars.pauseText)
                }
            }, touch: function () {
                function e(e) {
                    e.stopPropagation(), r.animating ? e.preventDefault() : (r.pause(), i._gesture.addPointer(e.pointerId), T = 0, u = d ? r.h : r.w, m = Number(new Date), l = p && h && r.animatingTo === r.last ? 0 : p && h ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : p && r.currentSlide === r.last ? r.limit : p ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : h ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u)
                }

                function t(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        var n = -e.translationX, r = -e.translationY;
                        return T += d ? r : n, c = T, b = d ? Math.abs(T) < Math.abs(-n) : Math.abs(T) < Math.abs(-r), e.detail === e.MSGESTURE_FLAG_INERTIA ? void setImmediate(function () {
                            i._gesture.stop()
                        }) : void((!b || Number(new Date) - m > 500) && (e.preventDefault(), !f && t.transitions && (t.vars.animationLoop || (c = T / (0 === t.currentSlide && 0 > T || t.currentSlide === t.last && T > 0 ? Math.abs(T) / u + 2 : 1)), t.setProps(l + c, "setTouch"))))
                    }
                }

                function n(e) {
                    e.stopPropagation();
                    var t = e.target._slider;
                    if (t) {
                        if (t.animatingTo === t.currentSlide && !b && null !== c) {
                            var i = h ? -c : c, n = i > 0 ? t.getTarget("next") : t.getTarget("prev");
                            t.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(i) > 50 || Math.abs(i) > u / 2) ? t.flexAnimate(n, t.vars.pauseOnAction) : f || t.flexAnimate(t.currentSlide, t.vars.pauseOnAction, !0)
                        }
                        s = null, a = null, c = null, l = null, T = 0
                    }
                }

                var s, a, l, u, c, m, g, v, y, b = !1, w = 0, _ = 0, T = 0;
                o ? (i.style.msTouchAction = "none", i._gesture = new MSGesture, i._gesture.target = i, i.addEventListener("MSPointerDown", e, !1), i._slider = r, i.addEventListener("MSGestureChange", t, !1), i.addEventListener("MSGestureEnd", n, !1)) : (g = function (e) {
                    r.animating ? e.preventDefault() : (window.navigator.msPointerEnabled || 1 === e.touches.length) && (r.pause(), u = d ? r.h : r.w, m = Number(new Date), w = e.touches[0].pageX, _ = e.touches[0].pageY, l = p && h && r.animatingTo === r.last ? 0 : p && h ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : p && r.currentSlide === r.last ? r.limit : p ? (r.itemW + r.vars.itemMargin) * r.move * r.currentSlide : h ? (r.last - r.currentSlide + r.cloneOffset) * u : (r.currentSlide + r.cloneOffset) * u, s = d ? _ : w, a = d ? w : _, i.addEventListener("touchmove", v, !1), i.addEventListener("touchend", y, !1))
                }, v = function (e) {
                    w = e.touches[0].pageX, _ = e.touches[0].pageY, c = d ? s - _ : s - w, b = d ? Math.abs(c) < Math.abs(w - a) : Math.abs(c) < Math.abs(_ - a);
                    var t = 500;
                    (!b || Number(new Date) - m > t) && (e.preventDefault(), !f && r.transitions && (r.vars.animationLoop || (c /= 0 === r.currentSlide && 0 > c || r.currentSlide === r.last && c > 0 ? Math.abs(c) / u + 2 : 1), r.setProps(l + c, "setTouch")))
                }, y = function (e) {
                    if (i.removeEventListener("touchmove", v, !1), r.animatingTo === r.currentSlide && !b && null !== c) {
                        var t = h ? -c : c, n = t > 0 ? r.getTarget("next") : r.getTarget("prev");
                        r.canAdvance(n) && (Number(new Date) - m < 550 && Math.abs(t) > 50 || Math.abs(t) > u / 2) ? r.flexAnimate(n, r.vars.pauseOnAction) : f || r.flexAnimate(r.currentSlide, r.vars.pauseOnAction, !0)
                    }
                    i.removeEventListener("touchend", y, !1), s = null, a = null, c = null, l = null
                }, i.addEventListener("touchstart", g, !1))
            }, resize: function () {
                !r.animating && r.is(":visible") && (p || r.doMath(), f ? g.smoothHeight() : p ? (r.slides.width(r.computedW), r.update(r.pagingCount), r.setProps()) : d ? (r.viewport.height(r.h), r.setProps(r.h, "setTotal")) : (r.vars.smoothHeight && g.smoothHeight(), r.newSlides.width(r.computedW), r.setProps(r.computedW, "setTotal")))
            }, smoothHeight: function (e) {
                if (!d || f) {
                    var t = f ? r : r.viewport;
                    e ? t.animate({height: r.slides.eq(r.animatingTo).innerHeight()}, e) : t.innerHeight(r.slides.eq(r.animatingTo).innerHeight())
                }
            }, sync: function (t) {
                var i = e(r.vars.sync).data("flexslider"), n = r.animatingTo;
                switch (t) {
                    case"animate":
                        i.flexAnimate(n, r.vars.pauseOnAction, !1, !0);
                        break;
                    case"play":
                        i.playing || i.asNav || i.play();
                        break;
                    case"pause":
                        i.pause()
                }
            }, uniqueID: function (t) {
                return t.filter("[id]").add(t.find("[id]")).each(function () {
                    var t = e(this);
                    t.attr("id", t.attr("id") + "_clone")
                }), t
            }, pauseInvisible: {
                visProp: null, init: function () {
                    var e = g.pauseInvisible.getHiddenProp();
                    if (e) {
                        var t = e.replace(/[H|h]idden/, "") + "visibilitychange";
                        document.addEventListener(t, function () {
                            g.pauseInvisible.isHidden() ? r.startTimeout ? clearTimeout(r.startTimeout) : r.pause() : r.started ? r.play() : r.vars.initDelay > 0 ? setTimeout(r.play, r.vars.initDelay) : r.play()
                        })
                    }
                }, isHidden: function () {
                    var e = g.pauseInvisible.getHiddenProp();
                    return e ? document[e] : !1
                }, getHiddenProp: function () {
                    var e = ["webkit", "moz", "ms", "o"];
                    if ("hidden" in document) return "hidden";
                    for (var t = 0; t < e.length; t++) if (e[t] + "Hidden" in document) return e[t] + "Hidden";
                    return null
                }
            }, setToClearWatchedEvent: function () {
                clearTimeout(s), s = setTimeout(function () {
                    c = ""
                }, 3e3)
            }
        }, r.flexAnimate = function (t, i, n, s, o) {
            if (r.vars.animationLoop || t === r.currentSlide || (r.direction = t > r.currentSlide ? "next" : "prev"), m && 1 === r.pagingCount && (r.direction = r.currentItem < t ? "next" : "prev"), !r.animating && (r.canAdvance(t, o) || n) && r.is(":visible")) {
                if (m && s) {
                    var u = e(r.vars.asNavFor).data("flexslider");
                    if (r.atEnd = 0 === t || t === r.count - 1, u.flexAnimate(t, !0, !1, !0, o), r.direction = r.currentItem < t ? "next" : "prev", u.direction = r.direction, Math.ceil((t + 1) / r.visible) - 1 === r.currentSlide || 0 === t) return r.currentItem = t, r.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), !1;
                    r.currentItem = t, r.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), t = Math.floor(t / r.visible)
                }
                if (r.animating = !0, r.animatingTo = t, i && r.pause(), r.vars.before(r), r.syncExists && !o && g.sync("animate"), r.vars.controlNav && g.controlNav.active(), p || r.slides.removeClass(a + "active-slide").eq(t).addClass(a + "active-slide"), r.atEnd = 0 === t || t === r.last, r.vars.directionNav && g.directionNav.update(), t === r.last && (r.vars.end(r), r.vars.animationLoop || r.pause()), f) l ? (r.slides.eq(r.currentSlide).css({
                    opacity: 0,
                    zIndex: 1
                }), r.slides.eq(t).css({
                    opacity: 1,
                    zIndex: 2
                }), r.wrapup(b)) : (r.slides.eq(r.currentSlide).css({zIndex: 1}).animate({opacity: 0}, r.vars.animationSpeed, r.vars.easing), r.slides.eq(t).css({zIndex: 2}).animate({opacity: 1}, r.vars.animationSpeed, r.vars.easing, r.wrapup)); else {
                    var c, v, y, b = d ? r.slides.filter(":first").height() : r.computedW;
                    p ? (c = r.vars.itemMargin, y = (r.itemW + c) * r.move * r.animatingTo, v = y > r.limit && 1 !== r.visible ? r.limit : y) : v = 0 === r.currentSlide && t === r.count - 1 && r.vars.animationLoop && "next" !== r.direction ? h ? (r.count + r.cloneOffset) * b : 0 : r.currentSlide === r.last && 0 === t && r.vars.animationLoop && "prev" !== r.direction ? h ? 0 : (r.count + 1) * b : h ? (r.count - 1 - t + r.cloneOffset) * b : (t + r.cloneOffset) * b, r.setProps(v, "", r.vars.animationSpeed), r.transitions ? (r.vars.animationLoop && r.atEnd || (r.animating = !1, r.currentSlide = r.animatingTo), r.container.unbind("webkitTransitionEnd transitionend"), r.container.bind("webkitTransitionEnd transitionend", function () {
                        clearTimeout(r.ensureAnimationEnd), r.wrapup(b)
                    }), clearTimeout(r.ensureAnimationEnd), r.ensureAnimationEnd = setTimeout(function () {
                        r.wrapup(b)
                    }, r.vars.animationSpeed + 100)) : r.container.animate(r.args, r.vars.animationSpeed, r.vars.easing, function () {
                        r.wrapup(b)
                    })
                }
                r.vars.smoothHeight && g.smoothHeight(r.vars.animationSpeed)
            }
        }, r.wrapup = function (e) {
            f || p || (0 === r.currentSlide && r.animatingTo === r.last && r.vars.animationLoop ? r.setProps(e, "jumpEnd") : r.currentSlide === r.last && 0 === r.animatingTo && r.vars.animationLoop && r.setProps(e, "jumpStart")), r.animating = !1, r.currentSlide = r.animatingTo, r.vars.after(r)
        }, r.animateSlides = function () {
            !r.animating && t && r.flexAnimate(r.getTarget("next"))
        }, r.pause = function () {
            clearInterval(r.animatedSlides), r.animatedSlides = null, r.playing = !1, r.vars.pausePlay && g.pausePlay.update("play"), r.syncExists && g.sync("pause")
        }, r.play = function () {
            r.playing && clearInterval(r.animatedSlides), r.animatedSlides = r.animatedSlides || setInterval(r.animateSlides, r.vars.slideshowSpeed), r.started = r.playing = !0, r.vars.pausePlay && g.pausePlay.update("pause"), r.syncExists && g.sync("play")
        }, r.stop = function () {
            r.pause(), r.stopped = !0
        }, r.canAdvance = function (e, t) {
            var i = m ? r.pagingCount - 1 : r.last;
            return t ? !0 : m && r.currentItem === r.count - 1 && 0 === e && "prev" === r.direction ? !0 : m && 0 === r.currentItem && e === r.pagingCount - 1 && "next" !== r.direction ? !1 : e !== r.currentSlide || m ? r.vars.animationLoop ? !0 : r.atEnd && 0 === r.currentSlide && e === i && "next" !== r.direction ? !1 : r.atEnd && r.currentSlide === i && 0 === e && "next" === r.direction ? !1 : !0 : !1
        }, r.getTarget = function (e) {
            return r.direction = e, "next" === e ? r.currentSlide === r.last ? 0 : r.currentSlide + 1 : 0 === r.currentSlide ? r.last : r.currentSlide - 1
        }, r.setProps = function (e, t, i) {
            var n = function () {
                var i = e ? e : (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo, n = function () {
                    if (p) return "setTouch" === t ? e : h && r.animatingTo === r.last ? 0 : h ? r.limit - (r.itemW + r.vars.itemMargin) * r.move * r.animatingTo : r.animatingTo === r.last ? r.limit : i;
                    switch (t) {
                        case"setTotal":
                            return h ? (r.count - 1 - r.currentSlide + r.cloneOffset) * e : (r.currentSlide + r.cloneOffset) * e;
                        case"setTouch":
                            return h ? e : e;
                        case"jumpEnd":
                            return h ? e : r.count * e;
                        case"jumpStart":
                            return h ? r.count * e : e;
                        default:
                            return e
                    }
                }();
                return -1 * n + "px"
            }();
            r.transitions && (n = d ? "translate3d(0," + n + ",0)" : "translate3d(" + n + ",0,0)", i = void 0 !== i ? i / 1e3 + "s" : "0s", r.container.css("-" + r.pfx + "-transition-duration", i), r.container.css("transition-duration", i)), r.args[r.prop] = n, (r.transitions || void 0 === i) && r.container.css(r.args), r.container.css("transform", n)
        }, r.setup = function (t) {
            if (f) r.slides.css({
                width: "100%",
                "float": "left",
                marginRight: "-100%",
                position: "relative"
            }), "init" === t && (l ? r.slides.css({
                opacity: 0,
                display: "block",
                webkitTransition: "opacity " + r.vars.animationSpeed / 1e3 + "s ease",
                zIndex: 1
            }).eq(r.currentSlide).css({opacity: 1, zIndex: 2}) : 0 == r.vars.fadeFirstSlide ? r.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(r.currentSlide).css({zIndex: 2}).css({opacity: 1}) : r.slides.css({
                opacity: 0,
                display: "block",
                zIndex: 1
            }).eq(r.currentSlide).css({zIndex: 2}).animate({opacity: 1}, r.vars.animationSpeed, r.vars.easing)), r.vars.smoothHeight && g.smoothHeight(); else {
                var i, n;
                "init" === t && (r.viewport = e('<div class="' + a + 'viewport"></div>').css({
                    overflow: "hidden",
                    position: "relative"
                }).appendTo(r).append(r.container), r.cloneCount = 0, r.cloneOffset = 0, h && (n = e.makeArray(r.slides).reverse(), r.slides = e(n), r.container.empty().append(r.slides))), r.vars.animationLoop && !p && (r.cloneCount = 2, r.cloneOffset = 1, "init" !== t && r.container.find(".clone").remove(), r.container.append(g.uniqueID(r.slides.first().clone().addClass("clone")).attr("aria-hidden", "true")).prepend(g.uniqueID(r.slides.last().clone().addClass("clone")).attr("aria-hidden", "true"))), r.newSlides = e(r.vars.selector, r), i = h ? r.count - 1 - r.currentSlide + r.cloneOffset : r.currentSlide + r.cloneOffset, d && !p ? (r.container.height(200 * (r.count + r.cloneCount) + "%").css("position", "absolute").width("100%"), setTimeout(function () {
                    r.newSlides.css({display: "block"}), r.doMath(), r.viewport.height(r.h), r.setProps(i * r.h, "init")
                }, "init" === t ? 100 : 0)) : (r.container.width(200 * (r.count + r.cloneCount) + "%"), r.setProps(i * r.computedW, "init"), setTimeout(function () {
                    r.doMath(), r.newSlides.css({
                        width: r.computedW,
                        marginRight: r.computedM,
                        "float": "left",
                        display: "block"
                    }), r.vars.smoothHeight && g.smoothHeight()
                }, "init" === t ? 100 : 0))
            }
            p || r.slides.removeClass(a + "active-slide").eq(r.currentSlide).addClass(a + "active-slide"), r.vars.init(r)
        }, r.doMath = function () {
            var e = r.slides.first(), t = r.vars.itemMargin, i = r.vars.minItems, n = r.vars.maxItems;
            r.w = void 0 === r.viewport ? r.width() : r.viewport.width(), r.h = e.height(), r.boxPadding = e.outerWidth() - e.width(), p ? (r.itemT = r.vars.itemWidth + t, r.itemM = t, r.minW = i ? i * r.itemT : r.w, r.maxW = n ? n * r.itemT - t : r.w, r.itemW = r.minW > r.w ? (r.w - t * (i - 1)) / i : r.maxW < r.w ? (r.w - t * (n - 1)) / n : r.vars.itemWidth > r.w ? r.w : r.vars.itemWidth, r.visible = Math.floor(r.w / r.itemW), r.move = r.vars.move > 0 && r.vars.move < r.visible ? r.vars.move : r.visible, r.pagingCount = Math.ceil((r.count - r.visible) / r.move + 1), r.last = r.pagingCount - 1, r.limit = 1 === r.pagingCount ? 0 : r.vars.itemWidth > r.w ? r.itemW * (r.count - 1) + t * (r.count - 1) : (r.itemW + t) * r.count - r.w - t) : (r.itemW = r.w, r.itemM = t, r.pagingCount = r.count, r.last = r.count - 1), r.computedW = r.itemW - r.boxPadding, r.computedM = r.itemM
        }, r.update = function (e, t) {
            r.doMath(), p || (e < r.currentSlide ? r.currentSlide += 1 : e <= r.currentSlide && 0 !== e && (r.currentSlide -= 1), r.animatingTo = r.currentSlide), r.vars.controlNav && !r.manualControls && ("add" === t && !p || r.pagingCount > r.controlNav.length ? g.controlNav.update("add") : ("remove" === t && !p || r.pagingCount < r.controlNav.length) && (p && r.currentSlide > r.last && (r.currentSlide -= 1, r.animatingTo -= 1), g.controlNav.update("remove", r.last))), r.vars.directionNav && g.directionNav.update()
        }, r.addSlide = function (t, i) {
            var n = e(t);
            r.count += 1, r.last = r.count - 1, d && h ? void 0 !== i ? r.slides.eq(r.count - i).after(n) : r.container.prepend(n) : void 0 !== i ? r.slides.eq(i).before(n) : r.container.append(n), r.update(i, "add"), r.slides = e(r.vars.selector + ":not(.clone)", r), r.setup(), r.vars.added(r)
        }, r.removeSlide = function (t) {
            var i = isNaN(t) ? r.slides.index(e(t)) : t;
            r.count -= 1, r.last = r.count - 1, isNaN(t) ? e(t, r.slides).remove() : d && h ? r.slides.eq(r.last).remove() : r.slides.eq(t).remove(), r.doMath(), r.update(i, "remove"), r.slides = e(r.vars.selector + ":not(.clone)", r), r.setup(), r.vars.removed(r)
        }, g.init()
    }, e(window).blur(function (e) {
        t = !1
    }).focus(function (e) {
        t = !0
    }), e.flexslider.defaults = {
        namespace: "flex-",
        selector: ".slides > li",
        animation: "fade",
        easing: "swing",
        direction: "horizontal",
        reverse: !1,
        animationLoop: !0,
        smoothHeight: !1,
        startAt: 0,
        slideshow: !0,
        slideshowSpeed: 7e3,
        animationSpeed: 600,
        initDelay: 0,
        randomize: !1,
        fadeFirstSlide: !0,
        thumbCaptions: !1,
        pauseOnAction: !0,
        pauseOnHover: !1,
        pauseInvisible: !0,
        useCSS: !0,
        touch: !0,
        video: !1,
        controlNav: !0,
        directionNav: !0,
        prevText: "Previous",
        nextText: "Next",
        keyboard: !0,
        multipleKeyboard: !1,
        mousewheel: !1,
        pausePlay: !1,
        pauseText: "Pause",
        playText: "Play",
        controlsContainer: "",
        manualControls: "",
        customDirectionNav: "",
        sync: "",
        asNavFor: "",
        itemWidth: 0,
        itemMargin: 0,
        minItems: 1,
        maxItems: 0,
        move: 0,
        allowOneSlide: !0,
        start: function () {
        },
        before: function () {
        },
        after: function () {
        },
        end: function () {
        },
        added: function () {
        },
        removed: function () {
        },
        init: function () {
        }
    }, e.fn.flexslider = function (t) {
        if (void 0 === t && (t = {}), "object" == typeof t) return this.each(function () {
            var i = e(this), n = t.selector ? t.selector : ".slides > li", r = i.find(n);
            1 === r.length && t.allowOneSlide === !1 || 0 === r.length ? (r.fadeIn(400), t.start && t.start(i)) : void 0 === i.data("flexslider") && new e.flexslider(this, t)
        });
        var i = e(this).data("flexslider");
        switch (t) {
            case"play":
                i.play();
                break;
            case"pause":
                i.pause();
                break;
            case"stop":
                i.stop();
                break;
            case"next":
                i.flexAnimate(i.getTarget("next"), !0);
                break;
            case"prev":
            case"previous":
                i.flexAnimate(i.getTarget("prev"), !0);
                break;
            default:
                "number" == typeof t && i.flexAnimate(t, !0)
        }
    }
}(jQuery), function (e) {
    e.fn.pajinate = function (t) {
        function i(i) {
            new_page = parseInt(u.data(m)) - 1, 1 == e(i).siblings(".active").prev(".page_link").length ? (a(i, new_page), r(new_page)) : t.wrap_around && r(f - 1)
        }

        function n(i) {
            new_page = parseInt(u.data(m)) + 1, 1 == e(i).siblings(".active").next(".page_link").length ? (s(i, new_page), r(new_page)) : t.wrap_around && r(0)
        }

        function r(e) {
            e = parseInt(e, 10);
            var i = parseInt(u.data(g));
            start_from = e * i, end_on = start_from + i;
            var n = h.hide().slice(start_from, end_on);
            n.fadeIn(700), d.find(t.nav_panel_id).children(".page_link[longdesc=" + e + "]").addClass("active " + b).siblings(".active").removeClass("active " + b), u.data(m, e);
            var r = parseInt(u.data(m) + 1), s = c.children().size(), a = Math.ceil(s / t.items_per_page);
            d.find(t.nav_info_id).html(t.nav_label_info.replace("{0}", start_from + 1).replace("{1}", start_from + n.length).replace("{2}", h.length).replace("{3}", r).replace("{4}", a)), o(), l(), "undefined" != typeof t.onPageDisplayed && t.onPageDisplayed.call(this, e + 1)
        }

        function s(i, n) {
            var r = n, s = e(i).siblings(".active");
            "none" == s.siblings(".page_link[longdesc=" + r + "]").css("display") && p.each(function () {
                e(this).children(".page_link").hide().slice(parseInt(r - t.num_page_links_to_display + 1), r + 1).show()
            })
        }

        function a(i, n) {
            var r = n, s = e(i).siblings(".active");
            "none" == s.siblings(".page_link[longdesc=" + r + "]").css("display") && p.each(function () {
                e(this).children(".page_link").hide().slice(r, r + parseInt(t.num_page_links_to_display)).show()
            })
        }

        function o() {
        }

        function l() {
            p.children(".last").hasClass("active") ? p.children(".next_link").add(".last_link").addClass("no_more " + w) : p.children(".next_link").add(".last_link").removeClass("no_more " + w), p.children(".first").hasClass("active") ? p.children(".previous_link").add(".first_link").addClass("no_more " + w) : p.children(".previous_link").add(".first_link").removeClass("no_more " + w)
        }

        var u, c, d, h, p, f, m = "current_page", g = "items_per_page", v = {
                item_container_id: ".content",
                items_per_page: 10,
                nav_panel_id: ".page_navigation",
                nav_info_id: ".info_text",
                num_page_links_to_display: 20,
                start_page: 0,
                wrap_around: !1,
                nav_label_first: "First",
                nav_label_prev: "Prev",
                nav_label_next: "Next",
                nav_label_last: "Last",
                nav_order: ["first", "prev", "num", "next", "last"],
                nav_label_info: "Showing {0}-{1} of {2} results",
                show_first_last: !0,
                abort_on_small_lists: !1,
                jquery_ui: !1,
                jquery_ui_active: "ui-state-highlight",
                jquery_ui_default: "ui-state-default",
                jquery_ui_disabled: "ui-state-disabled"
            }, t = e.extend(v, t), y = t.jquery_ui ? t.jquery_ui_default : "", b = t.jquery_ui ? t.jquery_ui_active : "",
            w = t.jquery_ui ? t.jquery_ui_disabled : "";
        return this.each(function () {
            if (d = e(this), c = e(this).find(t.item_container_id), h = d.find(t.item_container_id).children(), t.abort_on_small_lists && t.items_per_page >= h.size()) return d;
            u = d, u.data(m, 0), u.data(g, t.items_per_page);
            for (var v = c.children().size(), w = Math.ceil(v / t.items_per_page), _ = '<li class="page-item disabled ellipse more"><a class="page-link" href="#">...</a></li>', T = '<li class="page-item disabled ellipse less"><a class="page-link" href="#">...</a></li>', x = t.show_first_last ? '<li class="page-item first_link ' + y + '"><a class="page-link" href="#">' + t.nav_label_first + "</a></li>" : "", C = t.show_first_last ? '<li class="page-item last_link ' + y + '"><a class="page-link" href="#">' + t.nav_label_last + "</a></li>" : "", S = "", E = 0; E < t.nav_order.length; E++) switch (t.nav_order[E]) {
                case"first":
                    S += x;
                    break;
                case"last":
                    S += C;
                    break;
                case"next":
                    S += '<li class="page-item next_link ' + y + '"><a class="page-link" href="#">' + t.nav_label_next + "</a></li>";
                    break;
                case"prev":
                    S += '<li class="page-item previous_link ' + y + '"><a class="page-link" href="#">' + t.nav_label_prev + "</a></li>";
                    break;
                case"num":
                    S += T;
                    for (var P = 0; w > P;) S += '<li class="page-item page_link ' + y + '" longdesc="' + P + '"><a class="page-link" href="#">' + (P + 1) + "</a></li>", P++;
                    S += _
            }
            p = d.find(t.nav_panel_id), p.html(S).each(function () {
                e(this).find(".page_link:first").addClass("first"), e(this).find(".page_link:last").addClass("last")
            }), p.children(".ellipse").hide(), p.find(".previous_link").next().next().addClass("active " + b), h.hide(), h.slice(0, u.data(g)).show(), f = d.find(t.nav_panel_id + ":first").children(".page_link").size(), t.num_page_links_to_display = Math.min(t.num_page_links_to_display, f), p.children(".page_link").hide(), p.each(function () {
                e(this).children(".page_link").slice(0, t.num_page_links_to_display).show()
            }), d.find(".first_link").click(function (t) {
                t.preventDefault(), a(e(this), 0), r(0)
            }), d.find(".last_link").click(function (t) {
                t.preventDefault();
                var i = f - 1;
                s(e(this), i), r(i)
            }), d.find(".previous_link").click(function (t) {
                t.preventDefault(), i(e(this))
            }), d.find(".next_link").click(function (t) {
                t.preventDefault(), n(e(this))
            }), d.find(".page_link").click(function (t) {
                t.preventDefault(), r(e(this).attr("longdesc"))
            }), r(parseInt(t.start_page)), o(), t.wrap_around || l()
        })
    }
}(jQuery), !function (e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function (e, t) {
    "use strict";

    function i(i, s, o) {
        function l(e, t, n) {
            var r, s = "$()." + i + '("' + t + '")';
            return e.each(function (e, l) {
                var u = o.data(l, i);
                if (!u) return void a(i + " not initialized. Cannot call methods, i.e. " + s);
                var c = u[t];
                if (!c || "_" == t.charAt(0)) return void a(s + " is not a valid method");
                var d = c.apply(u, n);
                r = void 0 === r ? d : r
            }), void 0 !== r ? r : e
        }

        function u(e, t) {
            e.each(function (e, n) {
                var r = o.data(n, i);
                r ? (r.option(t), r._init()) : (r = new s(n, t), o.data(n, i, r))
            })
        }

        o = o || t || e.jQuery, o && (s.prototype.option || (s.prototype.option = function (e) {
            o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e))
        }), o.fn[i] = function (e) {
            if ("string" == typeof e) {
                var t = r.call(arguments, 1);
                return l(this, e, t)
            }
            return u(this, e), this
        }, n(o))
    }

    function n(e) {
        !e || e && e.bridget || (e.bridget = i)
    }

    var r = Array.prototype.slice, s = e.console, a = "undefined" == typeof s ? function () {
    } : function (e) {
        s.error(e)
    };
    return n(t || e.jQuery), i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function () {
    function e() {
    }

    var t = e.prototype;
    return t.on = function (e, t) {
        if (e && t) {
            var i = this._events = this._events || {}, n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function (e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {}, n = i[e] = i[e] || {};
            return n[t] = !0, this
        }
    }, t.off = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function (e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], r = 0; r < i.length; r++) {
                var s = i[r], a = n && n[s];
                a && (this.off(e, s), delete n[s]), s.apply(this, t)
            }
            return this
        }
    }, t.allOff = function () {
        delete this._events, delete this._onceEvents
    }, e
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function () {
    "use strict";
    var e = function () {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var n = t[i], r = n + "MatchesSelector";
            if (e[r]) return r
        }
    }();
    return function (t, i) {
        return t[e](i)
    }
}), function (e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function (e, t) {
    var i = {};
    i.extend = function (e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }, i.modulo = function (e, t) {
        return (e % t + t) % t
    }, i.makeArray = function (e) {
        var t = [];
        if (Array.isArray(e)) t = e; else if (e && "object" == typeof e && "number" == typeof e.length) for (var i = 0; i < e.length; i++) t.push(e[i]); else t.push(e);
        return t
    }, i.removeFrom = function (e, t) {
        var i = e.indexOf(t);
        -1 != i && e.splice(i, 1)
    }, i.getParent = function (e, i) {
        for (; e.parentNode && e != document.body;) if (e = e.parentNode, t(e, i)) return e
    }, i.getQueryElement = function (e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, i.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.filterFindElements = function (e, n) {
        e = i.makeArray(e);
        var r = [];
        return e.forEach(function (e) {
            if (e instanceof HTMLElement) {
                if (!n) return void r.push(e);
                t(e, n) && r.push(e);
                for (var i = e.querySelectorAll(n), s = 0; s < i.length; s++) r.push(i[s])
            }
        }), r
    }, i.debounceMethod = function (e, t, i) {
        var n = e.prototype[t], r = t + "Timeout";
        e.prototype[t] = function () {
            var e = this[r];
            e && clearTimeout(e);
            var t = arguments, s = this;
            this[r] = setTimeout(function () {
                n.apply(s, t), delete s[r]
            }, i || 100)
        }
    }, i.docReady = function (e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, i.toDashed = function (e) {
        return e.replace(/(.)([A-Z])/g, function (e, t, i) {
            return t + "-" + i
        }).toLowerCase()
    };
    var n = e.console;
    return i.htmlInit = function (t, r) {
        i.docReady(function () {
            var s = i.toDashed(r), a = "data-" + s, o = document.querySelectorAll("[" + a + "]"),
                l = document.querySelectorAll(".js-" + s), u = i.makeArray(o).concat(i.makeArray(l)),
                c = a + "-options", d = e.jQuery;
            u.forEach(function (e) {
                var i, s = e.getAttribute(a) || e.getAttribute(c);
                try {
                    i = s && JSON.parse(s)
                } catch (o) {
                    return void(n && n.error("Error parsing " + a + " on " + e.className + ": " + o))
                }
                var l = new t(e, i);
                d && d.data(e, r, l);
            })
        })
    }, i
}), function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/core", ["ev-emitter/ev-emitter", "fizzy-ui-utils/utils"], function (i, n) {
        return t(e, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("fizzy-ui-utils")) : e.InfiniteScroll = t(e, e.EvEmitter, e.fizzyUIUtils)
}(window, function (e, t, i) {
    function n(e, t) {
        var a = i.getQueryElement(e);
        if (!a) return void console.error("Bad element for InfiniteScroll: " + (a || e));
        if (e = a, e.infiniteScrollGUID) {
            var o = s[e.infiniteScrollGUID];
            return o.option(t), o
        }
        this.element = e, this.options = i.extend({}, n.defaults), this.option(t), r && (this.$element = r(this.element)), this.create()
    }

    var r = e.jQuery, s = {};
    n.defaults = {}, n.create = {}, n.destroy = {};
    var a = n.prototype;
    i.extend(a, t.prototype);
    var o = 0;
    a.create = function () {
        var e = this.guid = ++o;
        if (this.element.infiniteScrollGUID = e, s[e] = this, this.pageIndex = 1, this.loadCount = 0, this.updateGetPath(), !this.getPath) return void console.error("Disabling InfiniteScroll");
        this.updateGetAbsolutePath(), this.log("initialized", [this.element.className]), this.callOnInit();
        for (var t in n.create) n.create[t].call(this)
    }, a.option = function (e) {
        i.extend(this.options, e)
    }, a.callOnInit = function () {
        var e = this.options.onInit;
        e && e.call(this, this)
    }, a.dispatchEvent = function (e, t, i) {
        this.log(e, i);
        var n = t ? [t].concat(i) : i;
        if (this.emitEvent(e, n), r && this.$element) {
            e += ".infiniteScroll";
            var s = e;
            if (t) {
                var a = r.Event(t);
                a.type = e, s = a
            }
            this.$element.trigger(s, i)
        }
    };
    var l = {
        initialized: function (e) {
            return "on " + e
        }, request: function (e) {
            return "URL: " + e
        }, load: function (e, t) {
            return (e.title || "") + ". URL: " + t
        }, error: function (e, t) {
            return e + ". URL: " + t
        }, append: function (e, t, i) {
            return i.length + " items. URL: " + t
        }, last: function (e, t) {
            return "URL: " + t
        }, history: function (e, t) {
            return "URL: " + t
        }, pageIndex: function (e, t) {
            return "current page determined to be: " + e + " from " + t
        }
    };
    a.log = function (e, t) {
        if (this.options.debug) {
            var i = "[InfiniteScroll] " + e, n = l[e];
            n && (i += ". " + n.apply(this, t)), console.log(i)
        }
    }, a.updateMeasurements = function () {
        this.windowHeight = e.innerHeight;
        var t = this.element.getBoundingClientRect();
        this.top = t.top + e.pageYOffset
    }, a.updateScroller = function () {
        var t = this.options.elementScroll;
        if (!t) return void(this.scroller = e);
        if (this.scroller = t === !0 ? this.element : i.getQueryElement(t), !this.scroller) throw"Unable to find elementScroll: " + t
    }, a.updateGetPath = function () {
        var e = this.options.path;
        if (!e) return void console.error("InfiniteScroll path option required. Set as: " + e);
        var t = typeof e;
        if ("function" == t) return void(this.getPath = e);
        var i = "string" == t && e.match("{{#}}");
        return i ? void this.updateGetPathTemplate(e) : void this.updateGetPathSelector(e)
    }, a.updateGetPathTemplate = function (e) {
        this.getPath = function () {
            var t = this.pageIndex + 1;
            return e.replace("{{#}}", t)
        }.bind(this);
        var t = e.replace("{{#}}", "(\\d\\d?\\d?)"), i = new RegExp(t), n = location.href.match(i);
        n && (this.pageIndex = parseInt(n[1], 10), this.log("pageIndex", this.pageIndex, "template string"))
    };
    var u = [/^(.*?\/?page\/?)(\d\d?\d?)(.*?$)/, /^(.*?\/?\?page=)(\d\d?\d?)(.*?$)/, /(.*?)(\d\d?\d?)(?!.*\d)(.*?$)/];
    return a.updateGetPathSelector = function (e) {
        var t = document.querySelector(e);
        if (!t) return void console.error("Bad InfiniteScroll path option. Next link not found: " + e);
        for (var i, n, r = t.getAttribute("href"), s = 0; r && s < u.length; s++) {
            n = u[s];
            var a = r.match(n);
            if (a) {
                i = a.slice(1);
                break
            }
        }
        return i ? (this.isPathSelector = !0, this.getPath = function () {
            var e = this.pageIndex + 1;
            return i[0] + e + i[2]
        }.bind(this), this.pageIndex = parseInt(i[1], 10) - 1, void this.log("pageIndex", [this.pageIndex, "next link"])) : void console.error("InfiniteScroll unable to parse next link href: " + r)
    }, a.updateGetAbsolutePath = function () {
        var e = this.getPath(), t = e.match(/^http/) || e.match(/^\//);
        if (t) return void(this.getAbsolutePath = this.getPath);
        var i = location.pathname, n = i.substring(0, i.lastIndexOf("/"));
        this.getAbsolutePath = function () {
            return n + "/" + this.getPath()
        }
    }, n.create.hideNav = function () {
        var e = i.getQueryElement(this.options.hideNav);
        e && (e.style.display = "none", this.nav = e)
    }, n.destroy.hideNav = function () {
        this.nav && (this.nav.style.display = "")
    }, a.destroy = function () {
        this.allOff();
        for (var e in n.destroy) n.destroy[e].call(this);
        delete this.element.infiniteScrollGUID, delete s[this.guid]
    }, n.throttle = function (e, t) {
        t = t || 200;
        var i, n;
        return function () {
            var r = +new Date, s = arguments, a = function () {
                i = r, e.apply(this, s)
            }.bind(this);
            i && i + t > r ? (clearTimeout(n), n = setTimeout(a, t)) : a()
        }
    }, n.data = function (e) {
        e = i.getQueryElement(e);
        var t = e && e.infiniteScrollGUID;
        return t && s[t]
    }, n.setJQuery = function (e) {
        r = e
    }, i.htmlInit(n, "infinite-scroll"), r && r.bridget && r.bridget("infiniteScroll", n), n
}), function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/page-load", ["./core"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core")) : t(e, e.InfiniteScroll)
}(window, function (e, t) {
    function i(e) {
        for (var t = document.createDocumentFragment(), i = 0; e && i < e.length; i++) t.appendChild(e[i]);
        return t
    }

    function n(e) {
        for (var t = e.querySelectorAll("script"), i = 0; i < t.length; i++) {
            var n = t[i], s = document.createElement("script");
            r(n, s), n.parentNode.replaceChild(s, n)
        }
    }

    function r(e, t) {
        for (var i = e.attributes, n = 0; n < i.length; n++) {
            var r = i[n];
            t.setAttribute(r.name, r.value)
        }
    }

    function s(e, t, i, n) {
        var r = new XMLHttpRequest;
        r.open("GET", e, !0), r.responseType = t || "", r.setRequestHeader("X-Requested-With", "XMLHttpRequest"), r.onload = function () {
            if (200 == r.status) i(r.response); else {
                var e = new Error(r.statusText);
                n(e)
            }
        }, r.onerror = function () {
            var t = new Error("Network error requesting " + e);
            n(t)
        }, r.send()
    }

    var a = t.prototype;
    return t.defaults.loadOnScroll = !0, t.defaults.checkLastPage = !0, t.defaults.responseType = "document", t.create.pageLoad = function () {
        this.canLoad = !0, this.on("scrollThreshold", this.onScrollThresholdLoad), this.on("load", this.checkLastPage), this.options.outlayer && this.on("append", this.onAppendOutlayer)
    }, a.onScrollThresholdLoad = function () {
        this.options.loadOnScroll && this.loadNextPage()
    }, a.loadNextPage = function () {
        if (!this.isLoading && this.canLoad) {
            var e = this.getAbsolutePath();
            this.isLoading = !0;
            var t = function (t) {
                this.onPageLoad(t, e)
            }.bind(this), i = function (t) {
                this.onPageError(t, e)
            }.bind(this);
            s(e, this.options.responseType, t, i), this.dispatchEvent("request", null, [e])
        }
    }, a.onPageLoad = function (e, t) {
        return this.options.append || (this.isLoading = !1), this.pageIndex++, this.loadCount++, this.dispatchEvent("load", null, [e, t]), this.appendNextPage(e, t), e
    }, a.appendNextPage = function (e, t) {
        var n = this.options.append, r = "document" == this.options.responseType;
        if (r && n) {
            var s = e.querySelectorAll(n), a = i(s), o = function () {
                this.appendItems(s, a), this.isLoading = !1, this.dispatchEvent("append", null, [e, t, s])
            }.bind(this);
            this.options.outlayer ? this.appendOutlayerItems(a, o) : o()
        }
    }, a.appendItems = function (e, t) {
        e && e.length && (t = t || i(e), n(t), this.element.appendChild(t))
    }, a.appendOutlayerItems = function (i, n) {
        var r = t.imagesLoaded || e.imagesLoaded;
        return r ? void r(i, n) : (console.error("[InfiniteScroll] imagesLoaded required for outlayer option"), void(this.isLoading = !1))
    }, a.onAppendOutlayer = function (e, t, i) {
        this.options.outlayer.appended(i)
    }, a.checkLastPage = function (e, t) {
        var i = this.options.checkLastPage;
        if (i) {
            var n = this.options.path;
            if ("function" == typeof n) {
                var r = this.getPath();
                if (!r) return void this.lastPageReached(e, t)
            }
            var s;
            if ("string" == typeof i ? s = i : this.isPathSelector && (s = n), s && e.querySelector) {
                var a = e.querySelector(s);
                a || this.lastPageReached(e, t)
            }
        }
    }, a.lastPageReached = function (e, t) {
        this.canLoad = !1, this.dispatchEvent("last", null, [e, t])
    }, a.onPageError = function (e, t) {
        return this.isLoading = !1, this.canLoad = !1, this.dispatchEvent("error", null, [e, t]), e
    }, t.create.prefill = function () {
        if (this.options.prefill) {
            var e = this.options.append;
            if (!e) return void console.error("append option required for prefill. Set as :" + e);
            this.updateMeasurements(), this.updateScroller(), this.isPrefilling = !0, this.on("append", this.prefill), this.once("error", this.stopPrefill), this.once("last", this.stopPrefill), this.prefill()
        }
    }, a.prefill = function () {
        var e = this.getPrefillDistance();
        this.isPrefilling = e >= 0, this.isPrefilling ? (this.log("prefill"), this.loadNextPage()) : this.stopPrefill()
    }, a.getPrefillDistance = function () {
        return this.options.elementScroll ? this.scroller.clientHeight - this.scroller.scrollHeight : this.windowHeight - this.element.clientHeight
    }, a.stopPrefill = function () {
        console.log("stopping prefill"), this.off("append", this.prefill)
    }, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/scroll-watch", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return t(e, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, i) {
    var n = t.prototype;
    return t.defaults.scrollThreshold = 400, t.create.scrollWatch = function () {
        this.pageScrollHandler = this.onPageScroll.bind(this), this.resizeHandler = this.onResize.bind(this);
        var e = this.options.scrollThreshold, t = e || 0 === e;
        t && this.enableScrollWatch()
    }, t.destroy.scrollWatch = function () {
        this.disableScrollWatch()
    }, n.enableScrollWatch = function () {
        this.isScrollWatching || (this.isScrollWatching = !0, this.updateMeasurements(), this.updateScroller(), this.on("last", this.disableScrollWatch), this.bindScrollWatchEvents(!0))
    }, n.disableScrollWatch = function () {
        this.isScrollWatching && (this.bindScrollWatchEvents(!1), delete this.isScrollWatching)
    }, n.bindScrollWatchEvents = function (t) {
        var i = t ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.pageScrollHandler), e[i]("resize", this.resizeHandler)
    }, n.onPageScroll = t.throttle(function () {
        var e = this.getBottomDistance();
        e <= this.options.scrollThreshold && this.dispatchEvent("scrollThreshold")
    }), n.getBottomDistance = function () {
        return this.options.elementScroll ? this.getElementBottomDistance() : this.getWindowBottomDistance()
    }, n.getWindowBottomDistance = function () {
        var t = this.top + this.element.clientHeight, i = e.pageYOffset + this.windowHeight;
        return t - i
    }, n.getElementBottomDistance = function () {
        var e = this.scroller.scrollHeight, t = this.scroller.scrollTop + this.scroller.clientHeight;
        return e - t
    }, n.onResize = function () {
        this.updateMeasurements()
    }, i.debounceMethod(t, "onResize", 150), t
}), function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/history", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return t(e, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, i) {
    var n = t.prototype;
    t.defaults.history = "replace";
    var r = document.createElement("a");
    return t.create.history = function () {
        if (this.options.history) {
            r.href = this.getAbsolutePath();
            var e = r.origin || r.protocol + "//" + r.host, t = e == location.origin;
            return t ? void(this.options.append ? this.createHistoryAppend() : this.createHistoryPageLoad()) : void console.error("[InfiniteScroll] cannot set history with different origin: " + r.origin + " on " + location.origin + " . History behavior disabled.")
        }
    }, n.createHistoryAppend = function () {
        this.updateMeasurements(), this.updateScroller(), this.scrollPages = [{
            top: 0,
            path: location.href,
            title: document.title
        }], this.scrollPageIndex = 0, this.scrollHistoryHandler = this.onScrollHistory.bind(this), this.unloadHandler = this.onUnload.bind(this), this.scroller.addEventListener("scroll", this.scrollHistoryHandler), this.on("append", this.onAppendHistory), this.bindHistoryAppendEvents(!0)
    }, n.bindHistoryAppendEvents = function (t) {
        var i = t ? "addEventListener" : "removeEventListener";
        this.scroller[i]("scroll", this.scrollHistoryHandler), e[i]("unload", this.unloadHandler)
    }, n.createHistoryPageLoad = function () {
        this.on("load", this.onPageLoadHistory)
    }, t.destroy.history = n.destroyHistory = function () {
        var e = this.options.history && this.options.append;
        e && this.bindHistoryAppendEvents(!1)
    }, n.onAppendHistory = function (e, t, i) {
        var n = i[0], s = this.getElementScrollY(n);
        r.href = t, this.scrollPages.push({top: s, path: r.href, title: e.title})
    }, n.getElementScrollY = function (e) {
        return this.options.elementScroll ? this.getElementElementScrollY(e) : this.getElementWindowScrollY(e)
    }, n.getElementWindowScrollY = function (t) {
        var i = t.getBoundingClientRect();
        return i.top + e.pageYOffset
    }, n.getElementElementScrollY = function (e) {
        return e.offsetTop - this.top
    }, n.onScrollHistory = function () {
        for (var e, t, i = this.getScrollViewY(), n = 0; n < this.scrollPages.length; n++) {
            var r = this.scrollPages[n];
            if (r.top >= i) break;
            e = n, t = r
        }
        e != this.scrollPageIndex && (this.scrollPageIndex = e, this.setHistory(t.title, t.path))
    }, i.debounceMethod(t, "onScrollHistory", 150), n.getScrollViewY = function () {
        return this.options.elementScroll ? this.scroller.scrollTop + this.scroller.clientHeight / 2 : e.pageYOffset + this.windowHeight / 2
    }, n.setHistory = function (e, t) {
        var i = this.options.history, n = i && history[i + "State"];
        n && (history[i + "State"](null, e, t), this.options.historyTitle && (document.title = e), this.dispatchEvent("history", null, [e, t]))
    }, n.onUnload = function () {
        var t = this.scrollPageIndex;
        if (0 !== t) {
            var i = this.scrollPages[t], n = e.pageYOffset - i.top + this.top;
            this.destroyHistory(), scrollTo(0, n)
        }
    }, n.onPageLoadHistory = function (e, t) {
        this.setHistory(e.title, t)
    }, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/button", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return t(e, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, i) {
    function n(e, t) {
        this.element = e, this.infScroll = t, this.clickHandler = this.onClick.bind(this), this.element.addEventListener("click", this.clickHandler), t.on("request", this.disable.bind(this)), t.on("load", this.enable.bind(this)), t.on("error", this.hide.bind(this)), t.on("last", this.hide.bind(this))
    }

    return t.create.button = function () {
        var e = i.getQueryElement(this.options.button);
        return e ? void(this.button = new n(e, this)) : void 0
    }, t.destroy.button = function () {
        this.button && this.button.destroy()
    }, n.prototype.onClick = function (e) {
        e.preventDefault(), this.infScroll.loadNextPage()
    }, n.prototype.enable = function () {
        this.element.removeAttribute("disabled")
    }, n.prototype.disable = function () {
        this.element.disabled = "disabled"
    }, n.prototype.hide = function () {
        this.element.style.display = "none"
    }, n.prototype.destroy = function () {
        this.element.removeEventListener("click", this.clickHandler)
    }, t.Button = n, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define("infinite-scroll/js/status", ["./core", "fizzy-ui-utils/utils"], function (i, n) {
        return t(e, i, n)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("./core"), require("fizzy-ui-utils")) : t(e, e.InfiniteScroll, e.fizzyUIUtils)
}(window, function (e, t, i) {
    function n(e) {
        s(e, "none")
    }

    function r(e) {
        s(e, "block")
    }

    function s(e, t) {
        e && (e.style.display = t)
    }

    var a = t.prototype;
    return t.create.status = function () {
        var e = i.getQueryElement(this.options.status);
        e && (this.statusElement = e, this.statusEventElements = {
            request: e.querySelector(".infinite-scroll-request"),
            error: e.querySelector(".infinite-scroll-error"),
            last: e.querySelector(".infinite-scroll-last")
        }, this.on("request", this.showRequestStatus), this.on("error", this.showErrorStatus), this.on("last", this.showLastStatus), this.bindHideStatus("on"))
    }, a.bindHideStatus = function (e) {
        var t = this.options.append ? "append" : "load";
        this[e](t, this.hideAllStatus)
    }, a.showRequestStatus = function () {
        this.showStatus("request")
    }, a.showErrorStatus = function () {
        this.showStatus("error")
    }, a.showLastStatus = function () {
        this.showStatus("last"), this.bindHideStatus("off")
    }, a.showStatus = function (e) {
        r(this.statusElement), this.hideStatusEventElements();
        var t = this.statusEventElements[e];
        r(t)
    }, a.hideAllStatus = function () {
        n(this.statusElement), this.hideStatusEventElements()
    }, a.hideStatusEventElements = function () {
        for (var e in this.statusEventElements) {
            var t = this.statusEventElements[e];
            n(t)
        }
    }, t
}), function (e, t) {
    "function" == typeof define && define.amd ? define(["infinite-scroll/js/core", "infinite-scroll/js/page-load", "infinite-scroll/js/scroll-watch", "infinite-scroll/js/history", "infinite-scroll/js/button", "infinite-scroll/js/status"], t) : "object" == typeof module && module.exports && (module.exports = t(require("./core"), require("./page-load"), require("./scroll-watch"), require("./history"), require("./button"), require("./status")))
}(window, function (e) {
    return e
}), function (e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("imagesloaded/imagesloaded", ["ev-emitter/ev-emitter"], function (i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function (e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e) {
        if (Array.isArray(e)) return e;
        var t = "object" == typeof e && "number" == typeof e.length;
        return t ? u.call(e) : [e]
    }

    function r(e, t, s) {
        if (!(this instanceof r)) return new r(e, t, s);
        var a = e;
        return "string" == typeof e && (a = document.querySelectorAll(e)), a ? (this.elements = n(a), this.options = i({}, this.options), "function" == typeof t ? s = t : i(this.options, t), s && this.on("always", s), this.getImages(), o && (this.jqDeferred = new o.Deferred), void setTimeout(this.check.bind(this))) : void l.error("Bad element for imagesLoaded " + (a || e))
    }

    function s(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }

    var o = e.jQuery, l = e.console, u = Array.prototype.slice;
    r.prototype = Object.create(t.prototype), r.prototype.options = {}, r.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, r.prototype.addElementImages = function (e) {
        "IMG" == e.nodeName && this.addImage(e), this.options.background === !0 && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && c[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var r = i[n];
                this.addImage(r)
            }
            if ("string" == typeof this.options.background) {
                var s = e.querySelectorAll(this.options.background);
                for (n = 0; n < s.length; n++) {
                    var a = s[n];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var c = {1: !0, 9: !0, 11: !0};
    return r.prototype.addElementBackgroundImages = function (e) {
        var t = getComputedStyle(e);
        if (t) for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
            var r = n && n[2];
            r && this.addBackground(r, e), n = i.exec(t.backgroundImage)
        }
    }, r.prototype.addImage = function (e) {
        var t = new s(e);
        this.images.push(t)
    }, r.prototype.addBackground = function (e, t) {
        var i = new a(e, t);
        this.images.push(i)
    }, r.prototype.check = function () {
        function e(e, i, n) {
            setTimeout(function () {
                t.progress(e, i, n)
            })
        }

        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, r.prototype.progress = function (e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && l && l.log("progress: " + i, e, t)
    }, r.prototype.complete = function () {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, s.prototype = Object.create(t.prototype), s.prototype.check = function () {
        var e = this.getIsImageComplete();
        return e ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, s.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, s.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, s.prototype.handleEvent = function (e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, s.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, s.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, s.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype = Object.create(s.prototype), a.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url;
        var e = this.getIsImageComplete();
        e && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function (e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, r.makeJQueryPlugin = function (t) {
        t = t || e.jQuery, t && (o = t, o.fn.imagesLoaded = function (e, t) {
            var i = new r(this, e, t);
            return i.jqDeferred.promise(o(this))
        })
    }, r.makeJQueryPlugin(), r
}), function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function (e) {
    e.ui = e.ui || {}, e.ui.version = "1.12.1";
    var t = 0, i = Array.prototype.slice;
    e.cleanData = function (t) {
        return function (i) {
            var n, r, s;
            for (s = 0; null != (r = i[s]); s++) try {
                n = e._data(r, "events"), n && n.remove && e(r).triggerHandler("remove")
            } catch (a) {
            }
            t(i)
        }
    }(e.cleanData), e.widget = function (t, i, n) {
        var r, s, a, o = {}, l = t.split(".")[0];
        t = t.split(".")[1];
        var u = l + "-" + t;
        return n || (n = i, i = e.Widget), e.isArray(n) && (n = e.extend.apply(null, [{}].concat(n))), e.expr[":"][u.toLowerCase()] = function (t) {
            return !!e.data(t, u)
        }, e[l] = e[l] || {}, r = e[l][t], s = e[l][t] = function (e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new s(e, t)
        }, e.extend(s, r, {
            version: n.version,
            _proto: e.extend({}, n),
            _childConstructors: []
        }), a = new i, a.options = e.widget.extend({}, a.options), e.each(n, function (t, n) {
            return e.isFunction(n) ? void(o[t] = function () {
                function e() {
                    return i.prototype[t].apply(this, arguments)
                }

                function r(e) {
                    return i.prototype[t].apply(this, e)
                }

                return function () {
                    var t, i = this._super, s = this._superApply;
                    return this._super = e, this._superApply = r, t = n.apply(this, arguments), this._super = i, this._superApply = s, t
                }
            }()) : void(o[t] = n)
        }), s.prototype = e.widget.extend(a, {widgetEventPrefix: r ? a.widgetEventPrefix || t : t}, o, {
            constructor: s,
            namespace: l,
            widgetName: t,
            widgetFullName: u
        }), r ? (e.each(r._childConstructors, function (t, i) {
            var n = i.prototype;
            e.widget(n.namespace + "." + n.widgetName, s, i._proto)
        }), delete r._childConstructors) : i._childConstructors.push(s), e.widget.bridge(t, s), s
    }, e.widget.extend = function (t) {
        for (var n, r, s = i.call(arguments, 1), a = 0, o = s.length; o > a; a++) for (n in s[a]) r = s[a][n], s[a].hasOwnProperty(n) && void 0 !== r && (t[n] = e.isPlainObject(r) ? e.isPlainObject(t[n]) ? e.widget.extend({}, t[n], r) : e.widget.extend({}, r) : r);
        return t
    }, e.widget.bridge = function (t, n) {
        var r = n.prototype.widgetFullName || t;
        e.fn[t] = function (s) {
            var a = "string" == typeof s, o = i.call(arguments, 1), l = this;
            return a ? this.length || "instance" !== s ? this.each(function () {
                var i, n = e.data(this, r);
                return "instance" === s ? (l = n, !1) : n ? e.isFunction(n[s]) && "_" !== s.charAt(0) ? (i = n[s].apply(n, o), i !== n && void 0 !== i ? (l = i && i.jquery ? l.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + s + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + s + "'")
            }) : l = void 0 : (o.length && (s = e.widget.extend.apply(null, [s].concat(o))), this.each(function () {
                var t = e.data(this, r);
                t ? (t.option(s || {}), t._init && t._init()) : e.data(this, r, new n(s, this))
            })), l
        }
    }, e.Widget = function () {
    }, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (i, n) {
            n = e(n || this.defaultElement || this)[0], this.element = e(n), this.uuid = t++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), this.classesElementLookup = {}, n !== this && (e.data(n, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (e) {
                    e.target === n && this.destroy()
                }
            }), this.document = e(n.style ? n.ownerDocument : n.document || n), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), i), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function () {
            var t = this;
            this._destroy(), e.each(this.classesElementLookup, function (e, i) {
                t._removeClass(i, e)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: e.noop,
        widget: function () {
            return this.element
        },
        option: function (t, i) {
            var n, r, s, a = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t) if (a = {}, n = t.split("."), t = n.shift(), n.length) {
                for (r = a[t] = e.widget.extend({}, this.options[t]), s = 0; n.length - 1 > s; s++) r[n[s]] = r[n[s]] || {}, r = r[n[s]];
                if (t = n.pop(), 1 === arguments.length) return void 0 === r[t] ? null : r[t];
                r[t] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                a[t] = i
            }
            return this._setOptions(a), this
        },
        _setOptions: function (e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function (e, t) {
            return "classes" === e && this._setOptionClasses(t), this.options[e] = t, "disabled" === e && this._setOptionDisabled(t), this
        },
        _setOptionClasses: function (t) {
            var i, n, r;
            for (i in t) r = this.classesElementLookup[i], t[i] !== this.options.classes[i] && r && r.length && (n = e(r.get()), this._removeClass(r, i), n.addClass(this._classes({
                element: n,
                keys: i,
                classes: t,
                add: !0
            })))
        },
        _setOptionDisabled: function (e) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!e), e && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (t) {
            function i(i, s) {
                var a, o;
                for (o = 0; i.length > o; o++) a = r.classesElementLookup[i[o]] || e(), a = e(t.add ? e.unique(a.get().concat(t.element.get())) : a.not(t.element).get()), r.classesElementLookup[i[o]] = a, n.push(i[o]), s && t.classes[i[o]] && n.push(t.classes[i[o]])
            }

            var n = [], r = this;
            return t = e.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, t), this._on(t.element, {remove: "_untrackClassesElement"}), t.keys && i(t.keys.match(/\S+/g) || [], !0), t.extra && i(t.extra.match(/\S+/g) || []), n.join(" ")
        },
        _untrackClassesElement: function (t) {
            var i = this;
            e.each(i.classesElementLookup, function (n, r) {
                -1 !== e.inArray(t.target, r) && (i.classesElementLookup[n] = e(r.not(t.target).get()))
            })
        },
        _removeClass: function (e, t, i) {
            return this._toggleClass(e, t, i, !1)
        },
        _addClass: function (e, t, i) {
            return this._toggleClass(e, t, i, !0)
        },
        _toggleClass: function (e, t, i, n) {
            n = "boolean" == typeof n ? n : i;
            var r = "string" == typeof e || null === e,
                s = {extra: r ? t : i, keys: r ? e : t, element: r ? this.element : e, add: n};
            return s.element.toggleClass(this._classes(s), n), this
        },
        _on: function (t, i, n) {
            var r, s = this;
            "boolean" != typeof t && (n = i, i = t, t = !1), n ? (i = r = e(i), this.bindings = this.bindings.add(i)) : (n = i, i = this.element, r = this.widget()), e.each(n, function (n, a) {
                function o() {
                    return t || s.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? s[a] : a).apply(s, arguments) : void 0
                }

                "string" != typeof a && (o.guid = a.guid = a.guid || o.guid || e.guid++);
                var l = n.match(/^([\w:-]*)\s*(.*)$/), u = l[1] + s.eventNamespace, c = l[2];
                c ? r.on(u, c, o) : i.on(u, o)
            })
        },
        _off: function (t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.off(i).off(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function (e, t) {
            function i() {
                return ("string" == typeof e ? n[e] : e).apply(n, arguments)
            }

            var n = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function (t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function (t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function (t) {
                    this._addClass(e(t.currentTarget), null, "ui-state-focus")
                }, focusout: function (t) {
                    this._removeClass(e(t.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (t, i, n) {
            var r, s, a = this.options[t];
            if (n = n || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], s = i.originalEvent) for (r in s) r in i || (i[r] = s[r]);
            return this.element.trigger(i, n), !(e.isFunction(a) && a.apply(this.element[0], [i].concat(n)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({show: "fadeIn", hide: "fadeOut"}, function (t, i) {
        e.Widget.prototype["_" + t] = function (n, r, s) {
            "string" == typeof r && (r = {effect: r});
            var a, o = r ? r === !0 || "number" == typeof r ? i : r.effect || i : t;
            r = r || {}, "number" == typeof r && (r = {duration: r}), a = !e.isEmptyObject(r), r.complete = s, r.delay && n.delay(r.delay), a && e.effects && e.effects.effect[o] ? n[t](r) : o !== t && n[o] ? n[o](r.duration, r.easing, s) : n.queue(function (i) {
                e(this)[t](), s && s.call(n[0]), i()
            })
        }
    }), e.widget, e.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, e.fn.extend({
        uniqueId: function () {
            var e = 0;
            return function () {
                return this.each(function () {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.ui.escapeSelector = function () {
        var e = /([!"#$%&'()*+,.\/:;<=>?@[\]^`{|}~])/g;
        return function (t) {
            return t.replace(e, "\\$1")
        }
    }(), e.ui.safeActiveElement = function (e) {
        var t;
        try {
            t = e.activeElement
        } catch (i) {
            t = e.body
        }
        return t || (t = e.body), t.nodeName || (t = e.body), t
    }, e.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: function () {
            var e = /#.*$/;
            return function (t) {
                var i, n;
                i = t.href.replace(e, ""), n = location.href.replace(e, "");
                try {
                    i = decodeURIComponent(i)
                } catch (r) {
                }
                try {
                    n = decodeURIComponent(n)
                } catch (r) {
                }
                return t.hash.length > 1 && i === n
            }
        }(),
        _create: function () {
            var t = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), e.isArray(i.disabled) && (i.disabled = e.unique(i.disabled.concat(e.map(this.tabs.filter(".ui-state-disabled"), function (e) {
                return t.tabs.index(e)
            }))).sort()), this.active = this.options.active !== !1 && this.anchors.length ? this._findActive(i.active) : e(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var t = this.options.active, i = this.options.collapsible, n = location.hash.substring(1);
            return null === t && (n && this.tabs.each(function (i, r) {
                return e(r).attr("aria-controls") === n ? (t = i, !1) : void 0
            }), null === t && (t = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === t || -1 === t) && (t = this.tabs.length ? 0 : !1)), t !== !1 && (t = this.tabs.index(this.tabs.eq(t)), -1 === t && (t = i ? !1 : 0)), !i && t === !1 && this.anchors.length && (t = 0), t
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : e()}
        },
        _tabKeydown: function (t) {
            var i = e(e.ui.safeActiveElement(this.document[0])).closest("li"), n = this.tabs.index(i), r = !0;
            if (!this._handlePageNav(t)) {
                switch (t.keyCode) {
                    case e.ui.keyCode.RIGHT:
                    case e.ui.keyCode.DOWN:
                        n++;
                        break;
                    case e.ui.keyCode.UP:
                    case e.ui.keyCode.LEFT:
                        r = !1, n--;
                        break;
                    case e.ui.keyCode.END:
                        n = this.anchors.length - 1;
                        break;
                    case e.ui.keyCode.HOME:
                        n = 0;
                        break;
                    case e.ui.keyCode.SPACE:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(n);
                    case e.ui.keyCode.ENTER:
                        return t.preventDefault(), clearTimeout(this.activating), void this._activate(n === this.options.active ? !1 : n);
                    default:
                        return
                }
                t.preventDefault(), clearTimeout(this.activating), n = this._focusNextTab(n, r), t.ctrlKey || t.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(n).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", n)
                }, this.delay))
            }
        },
        _panelKeydown: function (t) {
            this._handlePageNav(t) || t.ctrlKey && t.keyCode === e.ui.keyCode.UP && (t.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (t) {
            return t.altKey && t.keyCode === e.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : t.altKey && t.keyCode === e.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (t, i) {
            function n() {
                return t > r && (t = 0), 0 > t && (t = r), t
            }

            for (var r = this.tabs.length - 1; -1 !== e.inArray(n(), this.options.disabled);) t = i ? t + 1 : t - 1;
            return t
        },
        _focusNextTab: function (e, t) {
            return e = this._findNextTab(e, t), this.tabs.eq(e).trigger("focus"), e
        },
        _setOption: function (e, t) {
            return "active" === e ? void this._activate(t) : (this._super(e, t), "collapsible" === e && (this._toggleClass("ui-tabs-collapsible", null, t), t || this.options.active !== !1 || this._activate(0)), "event" === e && this._setupEvents(t), void("heightStyle" === e && this._setupHeightStyle(t)))
        },
        _sanitizeSelector: function (e) {
            return e ? e.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var t = this.options, i = this.tablist.children(":has(a[href])");
            t.disabled = e.map(i.filter(".ui-state-disabled"), function (e) {
                return i.index(e)
            }), this._processTabs(), t.active !== !1 && this.anchors.length ? this.active.length && !e.contains(this.tablist[0], this.active[0]) ? this.tabs.length === t.disabled.length ? (t.active = !1, this.active = e()) : this._activate(this._findNextTab(Math.max(0, t.active - 1), !1)) : t.active = this.tabs.index(this.active) : (t.active = !1, this.active = e()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var t = this, i = this.tabs, n = this.anchors, r = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (t) {
                e(this).is(".ui-state-disabled") && t.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                e(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return e("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = e(), this.anchors.each(function (i, n) {
                var r, s, a, o = e(n).uniqueId().attr("id"), l = e(n).closest("li"), u = l.attr("aria-controls");
                t._isLocal(n) ? (r = n.hash, a = r.substring(1), s = t.element.find(t._sanitizeSelector(r))) : (a = l.attr("aria-controls") || e({}).uniqueId()[0].id, r = "#" + a, s = t.element.find(r), s.length || (s = t._createPanel(a), s.insertAfter(t.panels[i - 1] || t.tablist)), s.attr("aria-live", "polite")), s.length && (t.panels = t.panels.add(s)), u && l.data("ui-tabs-aria-controls", u), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": o
                }), s.attr("aria-labelledby", o)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(n.not(this.anchors)), this._off(r.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (t) {
            return e("<div>").attr("id", t).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (t) {
            var i, n, r;
            for (e.isArray(t) && (t.length ? t.length === this.anchors.length && (t = !0) : t = !1), r = 0; n = this.tabs[r]; r++) i = e(n), t === !0 || -1 !== e.inArray(r, t) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = t, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, t === !0)
        },
        _setupEvents: function (t) {
            var i = {};
            t && e.each(t.split(" "), function (e, t) {
                i[t] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (e) {
                    e.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (t) {
            var i, n = this.element.parent();
            "fill" === t ? (i = n.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var t = e(this), n = t.css("position");
                "absolute" !== n && "fixed" !== n && (i -= t.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= e(this).outerHeight(!0)
            }), this.panels.each(function () {
                e(this).height(Math.max(0, i - e(this).innerHeight() + e(this).height()))
            }).css("overflow", "auto")) : "auto" === t && (i = 0, this.panels.each(function () {
                i = Math.max(i, e(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (t) {
            var i = this.options, n = this.active, r = e(t.currentTarget), s = r.closest("li"), a = s[0] === n[0],
                o = a && i.collapsible, l = o ? e() : this._getPanelForTab(s),
                u = n.length ? this._getPanelForTab(n) : e(),
                c = {oldTab: n, oldPanel: u, newTab: o ? e() : s, newPanel: l};
            t.preventDefault(), s.hasClass("ui-state-disabled") || s.hasClass("ui-tabs-loading") || this.running || a && !i.collapsible || this._trigger("beforeActivate", t, c) === !1 || (i.active = o ? !1 : this.tabs.index(s), this.active = a ? e() : s, this.xhr && this.xhr.abort(), u.length || l.length || e.error("jQuery UI Tabs: Mismatching fragment identifier."), l.length && this.load(this.tabs.index(s), t), this._toggle(t, c))
        },
        _toggle: function (t, i) {
            function n() {
                s.running = !1, s._trigger("activate", t, i)
            }

            function r() {
                s._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && s.options.show ? s._show(a, s.options.show, n) : (a.show(), n())
            }

            var s = this, a = i.newPanel, o = i.oldPanel;
            this.running = !0, o.length && this.options.hide ? this._hide(o, this.options.hide, function () {
                s._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o.hide(), r()), o.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && o.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                return 0 === e(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (t) {
            var i, n = this._findActive(t);
            n[0] !== this.active[0] && (n.length || (n = this.active), i = n.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: e.noop
            }))
        },
        _findActive: function (t) {
            return t === !1 ? e() : this.tabs.eq(t)
        },
        _getIndex: function (t) {
            return "string" == typeof t && (t = this.anchors.index(this.anchors.filter("[href$='" + e.ui.escapeSelector(t) + "']"))), t
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                e.data(this, "ui-tabs-destroy") ? e(this).remove() : e(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var t = e(this), i = t.data("ui-tabs-aria-controls");
                i ? t.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : t.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (t) {
            var i = this.options.disabled;
            i !== !1 && (void 0 === t ? i = !1 : (t = this._getIndex(t), i = e.isArray(i) ? e.map(i, function (e) {
                return e !== t ? e : null
            }) : e.map(this.tabs, function (e, i) {
                return i !== t ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function (t) {
            var i = this.options.disabled;
            if (i !== !0) {
                if (void 0 === t) i = !0; else {
                    if (t = this._getIndex(t), -1 !== e.inArray(t, i)) return;
                    i = e.isArray(i) ? e.merge([t], i).sort() : [t]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function (t, i) {
            t = this._getIndex(t);
            var n = this, r = this.tabs.eq(t), s = r.find(".ui-tabs-anchor"), a = this._getPanelForTab(r),
                o = {tab: r, panel: a}, l = function (e, t) {
                    "abort" === t && n.panels.stop(!1, !0), n._removeClass(r, "ui-tabs-loading"), a.removeAttr("aria-busy"), e === n.xhr && delete n.xhr
                };
            this._isLocal(s[0]) || (this.xhr = e.ajax(this._ajaxSettings(s, i, o)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(r, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (e, t, r) {
                setTimeout(function () {
                    a.html(e), n._trigger("load", i, o), l(r, t)
                }, 1)
            }).fail(function (e, t) {
                setTimeout(function () {
                    l(e, t)
                }, 1)
            })))
        },
        _ajaxSettings: function (t, i, n) {
            var r = this;
            return {
                url: t.attr("href").replace(/#.*$/, ""), beforeSend: function (t, s) {
                    return r._trigger("beforeLoad", i, e.extend({jqXHR: t, ajaxSettings: s}, n))
                }
            }
        },
        _getPanelForTab: function (t) {
            var i = e(t).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), e.uiBackCompat !== !1 && e.widget("ui.tabs", e.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), e.ui.tabs;
    var n = "ui-effects-", r = "ui-effects-style", s = "ui-effects-animated", a = e;
    e.effects = {effect: {}}, function (e, t) {
        function i(e, t, i) {
            var n = d[t.type] || {};
            return null == e ? i || !t.def ? null : t.def : (e = n.floor ? ~~e : parseFloat(e), isNaN(e) ? t.def : n.mod ? (e + n.mod) % n.mod : 0 > e ? 0 : e > n.max ? n.max : e)
        }

        function n(i) {
            var n = u(), r = n._rgba = [];
            return i = i.toLowerCase(), f(l, function (e, s) {
                var a, o = s.re.exec(i), l = o && s.parse(o), u = s.space || "rgba";
                return l ? (a = n[u](l), n[c[u].cache] = a[c[u].cache], r = n._rgba = a._rgba, !1) : t
            }), r.length ? ("0,0,0,0" === r.join() && e.extend(r, s.transparent), n) : s[i]
        }

        function r(e, t, i) {
            return i = (i + 1) % 1, 1 > 6 * i ? e + 6 * (t - e) * i : 1 > 2 * i ? t : 2 > 3 * i ? e + 6 * (t - e) * (2 / 3 - i) : e
        }

        var s,
            a = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",
            o = /^([\-+])=\s*(\d+\.?\d*)/, l = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [e[1], e[2], e[3], e[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (e) {
                    return [2.55 * e[1], 2.55 * e[2], 2.55 * e[3], e[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (e) {
                    return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (e) {
                    return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (e) {
                    return [e[1], e[2] / 100, e[3] / 100, e[4]]
                }
            }], u = e.Color = function (t, i, n, r) {
                return new e.Color.fn.parse(t, i, n, r)
            }, c = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, d = {"byte": {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, h = u.support = {},
            p = e("<p>")[0], f = e.each;
        p.style.cssText = "background-color:rgba(1,1,1,.5)", h.rgba = p.style.backgroundColor.indexOf("rgba") > -1, f(c, function (e, t) {
            t.cache = "_" + e, t.props.alpha = {idx: 3, type: "percent", def: 1}
        }), u.fn = e.extend(u.prototype, {
            parse: function (r, a, o, l) {
                if (r === t) return this._rgba = [null, null, null, null], this;
                (r.jquery || r.nodeType) && (r = e(r).css(a), a = t);
                var d = this, h = e.type(r), p = this._rgba = [];
                return a !== t && (r = [r, a, o, l], h = "array"), "string" === h ? this.parse(n(r) || s._default) : "array" === h ? (f(c.rgba.props, function (e, t) {
                    p[t.idx] = i(r[t.idx], t)
                }), this) : "object" === h ? (r instanceof u ? f(c, function (e, t) {
                    r[t.cache] && (d[t.cache] = r[t.cache].slice())
                }) : f(c, function (t, n) {
                    var s = n.cache;
                    f(n.props, function (e, t) {
                        if (!d[s] && n.to) {
                            if ("alpha" === e || null == r[e]) return;
                            d[s] = n.to(d._rgba)
                        }
                        d[s][t.idx] = i(r[e], t, !0)
                    }), d[s] && 0 > e.inArray(null, d[s].slice(0, 3)) && (d[s][3] = 1, n.from && (d._rgba = n.from(d[s])))
                }), this) : t
            }, is: function (e) {
                var i = u(e), n = !0, r = this;
                return f(c, function (e, s) {
                    var a, o = i[s.cache];
                    return o && (a = r[s.cache] || s.to && s.to(r._rgba) || [], f(s.props, function (e, i) {
                        return null != o[i.idx] ? n = o[i.idx] === a[i.idx] : t
                    })), n
                }), n
            }, _space: function () {
                var e = [], t = this;
                return f(c, function (i, n) {
                    t[n.cache] && e.push(i)
                }), e.pop()
            }, transition: function (e, t) {
                var n = u(e), r = n._space(), s = c[r], a = 0 === this.alpha() ? u("transparent") : this,
                    o = a[s.cache] || s.to(a._rgba), l = o.slice();
                return n = n[s.cache], f(s.props, function (e, r) {
                    var s = r.idx, a = o[s], u = n[s], c = d[r.type] || {};
                    null !== u && (null === a ? l[s] = u : (c.mod && (u - a > c.mod / 2 ? a += c.mod : a - u > c.mod / 2 && (a -= c.mod)), l[s] = i((u - a) * t + a, r)))
                }), this[r](l)
            }, blend: function (t) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), n = i.pop(), r = u(t)._rgba;
                return u(e.map(i, function (e, t) {
                    return (1 - n) * r[t] + n * e
                }))
            }, toRgbaString: function () {
                var t = "rgba(", i = e.map(this._rgba, function (e, t) {
                    return null == e ? t > 2 ? 1 : 0 : e
                });
                return 1 === i[3] && (i.pop(), t = "rgb("), t + i.join() + ")"
            }, toHslaString: function () {
                var t = "hsla(", i = e.map(this.hsla(), function (e, t) {
                    return null == e && (e = t > 2 ? 1 : 0), t && 3 > t && (e = Math.round(100 * e) + "%"), e
                });
                return 1 === i[3] && (i.pop(), t = "hsl("), t + i.join() + ")"
            }, toHexString: function (t) {
                var i = this._rgba.slice(), n = i.pop();
                return t && i.push(~~(255 * n)), "#" + e.map(i, function (e) {
                    return e = (e || 0).toString(16), 1 === e.length ? "0" + e : e
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), u.fn.parse.prototype = u.fn, c.hsla.to = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t, i, n = e[0] / 255, r = e[1] / 255, s = e[2] / 255, a = e[3], o = Math.max(n, r, s),
                l = Math.min(n, r, s), u = o - l, c = o + l, d = .5 * c;
            return t = l === o ? 0 : n === o ? 60 * (r - s) / u + 360 : r === o ? 60 * (s - n) / u + 120 : 60 * (n - r) / u + 240, i = 0 === u ? 0 : .5 >= d ? u / c : u / (2 - c), [Math.round(t) % 360, i, d, null == a ? 1 : a]
        }, c.hsla.from = function (e) {
            if (null == e[0] || null == e[1] || null == e[2]) return [null, null, null, e[3]];
            var t = e[0] / 360, i = e[1], n = e[2], s = e[3], a = .5 >= n ? n * (1 + i) : n + i - n * i, o = 2 * n - a;
            return [Math.round(255 * r(o, a, t + 1 / 3)), Math.round(255 * r(o, a, t)), Math.round(255 * r(o, a, t - 1 / 3)), s]
        }, f(c, function (n, r) {
            var s = r.props, a = r.cache, l = r.to, c = r.from;
            u.fn[n] = function (n) {
                if (l && !this[a] && (this[a] = l(this._rgba)), n === t) return this[a].slice();
                var r, o = e.type(n), d = "array" === o || "object" === o ? n : arguments, h = this[a].slice();
                return f(s, function (e, t) {
                    var n = d["object" === o ? e : t.idx];
                    null == n && (n = h[t.idx]), h[t.idx] = i(n, t)
                }), c ? (r = u(c(h)), r[a] = h, r) : u(h)
            }, f(s, function (t, i) {
                u.fn[t] || (u.fn[t] = function (r) {
                    var s, a = e.type(r), l = "alpha" === t ? this._hsla ? "hsla" : "rgba" : n, u = this[l](),
                        c = u[i.idx];
                    return "undefined" === a ? c : ("function" === a && (r = r.call(this, c), a = e.type(r)), null == r && i.empty ? this : ("string" === a && (s = o.exec(r), s && (r = c + parseFloat(s[2]) * ("+" === s[1] ? 1 : -1))), u[i.idx] = r, this[l](u)))
                })
            })
        }), u.hook = function (t) {
            var i = t.split(" ");
            f(i, function (t, i) {
                e.cssHooks[i] = {
                    set: function (t, r) {
                        var s, a, o = "";
                        if ("transparent" !== r && ("string" !== e.type(r) || (s = n(r)))) {
                            if (r = u(s || r), !h.rgba && 1 !== r._rgba[3]) {
                                for (a = "backgroundColor" === i ? t.parentNode : t; ("" === o || "transparent" === o) && a && a.style;) try {
                                    o = e.css(a, "backgroundColor"), a = a.parentNode
                                } catch (l) {
                                }
                                r = r.blend(o && "transparent" !== o ? o : "_default")
                            }
                            r = r.toRgbaString()
                        }
                        try {
                            t.style[i] = r
                        } catch (l) {
                        }
                    }
                }, e.fx.step[i] = function (t) {
                    t.colorInit || (t.start = u(t.elem, i), t.end = u(t.end), t.colorInit = !0), e.cssHooks[i].set(t.elem, t.start.transition(t.end, t.pos))
                }
            })
        }, u.hook(a), e.cssHooks.borderColor = {
            expand: function (e) {
                var t = {};
                return f(["Top", "Right", "Bottom", "Left"], function (i, n) {
                    t["border" + n + "Color"] = e
                }), t
            }
        }, s = e.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(a), function () {
        function t(t) {
            var i, n,
                r = t.ownerDocument.defaultView ? t.ownerDocument.defaultView.getComputedStyle(t, null) : t.currentStyle,
                s = {};
            if (r && r.length && r[0] && r[r[0]]) for (n = r.length; n--;) i = r[n], "string" == typeof r[i] && (s[e.camelCase(i)] = r[i]); else for (i in r) "string" == typeof r[i] && (s[i] = r[i]);
            return s
        }

        function i(t, i) {
            var n, s, a = {};
            for (n in i) s = i[n], t[n] !== s && (r[n] || (e.fx.step[n] || !isNaN(parseFloat(s))) && (a[n] = s));
            return a
        }

        var n = ["add", "remove", "toggle"], r = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        e.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (t, i) {
            e.fx.step[i] = function (e) {
                ("none" !== e.end && !e.setAttr || 1 === e.pos && !e.setAttr) && (a.style(e.elem, i, e.end), e.setAttr = !0)
            }
        }), e.fn.addBack || (e.fn.addBack = function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }), e.effects.animateClass = function (r, s, a, o) {
            var l = e.speed(s, a, o);
            return this.queue(function () {
                var s, a = e(this), o = a.attr("class") || "", u = l.children ? a.find("*").addBack() : a;
                u = u.map(function () {
                    var i = e(this);
                    return {el: i, start: t(this)}
                }), s = function () {
                    e.each(n, function (e, t) {
                        r[t] && a[t + "Class"](r[t])
                    })
                }, s(), u = u.map(function () {
                    return this.end = t(this.el[0]), this.diff = i(this.start, this.end), this
                }), a.attr("class", o), u = u.map(function () {
                    var t = this, i = e.Deferred(), n = e.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(t)
                        }
                    });
                    return this.el.animate(this.diff, n), i.promise()
                }), e.when.apply(e, u.get()).done(function () {
                    s(), e.each(arguments, function () {
                        var t = this.el;
                        e.each(this.diff, function (e) {
                            t.css(e, "")
                        })
                    }), l.complete.call(a[0])
                })
            })
        }, e.fn.extend({
            addClass: function (t) {
                return function (i, n, r, s) {
                    return n ? e.effects.animateClass.call(this, {add: i}, n, r, s) : t.apply(this, arguments)
                }
            }(e.fn.addClass), removeClass: function (t) {
                return function (i, n, r, s) {
                    return arguments.length > 1 ? e.effects.animateClass.call(this, {remove: i}, n, r, s) : t.apply(this, arguments)
                }
            }(e.fn.removeClass), toggleClass: function (t) {
                return function (i, n, r, s, a) {
                    return "boolean" == typeof n || void 0 === n ? r ? e.effects.animateClass.call(this, n ? {add: i} : {remove: i}, r, s, a) : t.apply(this, arguments) : e.effects.animateClass.call(this, {toggle: i}, n, r, s)
                }
            }(e.fn.toggleClass), switchClass: function (t, i, n, r, s) {
                return e.effects.animateClass.call(this, {add: i, remove: t}, n, r, s)
            }
        })
    }(), function () {
        function t(t, i, n, r) {
            return e.isPlainObject(t) && (i = t, t = t.effect), t = {effect: t}, null == i && (i = {}), e.isFunction(i) && (r = i, n = null, i = {}), ("number" == typeof i || e.fx.speeds[i]) && (r = n, n = i, i = {}), e.isFunction(n) && (r = n, n = null), i && e.extend(t, i), n = n || i.duration, t.duration = e.fx.off ? 0 : "number" == typeof n ? n : n in e.fx.speeds ? e.fx.speeds[n] : e.fx.speeds._default, t.complete = r || i.complete, t
        }

        function i(t) {
            return !t || "number" == typeof t || e.fx.speeds[t] ? !0 : "string" != typeof t || e.effects.effect[t] ? e.isFunction(t) ? !0 : "object" != typeof t || t.effect ? !1 : !0 : !0
        }

        function a(e, t) {
            var i = t.outerWidth(), n = t.outerHeight(),
                r = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/,
                s = r.exec(e) || ["", 0, i, n, 0];
            return {
                top: parseFloat(s[1]) || 0,
                right: "auto" === s[2] ? i : parseFloat(s[2]),
                bottom: "auto" === s[3] ? n : parseFloat(s[3]),
                left: parseFloat(s[4]) || 0
            }
        }

        e.expr && e.expr.filters && e.expr.filters.animated && (e.expr.filters.animated = function (t) {
            return function (i) {
                return !!e(i).data(s) || t(i)
            }
        }(e.expr.filters.animated)), e.uiBackCompat !== !1 && e.extend(e.effects, {
            save: function (e, t) {
                for (var i = 0, r = t.length; r > i; i++) null !== t[i] && e.data(n + t[i], e[0].style[t[i]])
            }, restore: function (e, t) {
                for (var i, r = 0, s = t.length; s > r; r++) null !== t[r] && (i = e.data(n + t[r]), e.css(t[r], i))
            }, setMode: function (e, t) {
                return "toggle" === t && (t = e.is(":hidden") ? "show" : "hide"), t
            }, createWrapper: function (t) {
                if (t.parent().is(".ui-effects-wrapper")) return t.parent();
                var i = {width: t.outerWidth(!0), height: t.outerHeight(!0), "float": t.css("float")},
                    n = e("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), r = {width: t.width(), height: t.height()}, s = document.activeElement;
                try {
                    s.id
                } catch (a) {
                    s = document.body
                }
                return t.wrap(n), (t[0] === s || e.contains(t[0], s)) && e(s).trigger("focus"), n = t.parent(), "static" === t.css("position") ? (n.css({position: "relative"}), t.css({position: "relative"})) : (e.extend(i, {
                    position: t.css("position"),
                    zIndex: t.css("z-index")
                }), e.each(["top", "left", "bottom", "right"], function (e, n) {
                    i[n] = t.css(n), isNaN(parseInt(i[n], 10)) && (i[n] = "auto")
                }), t.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), t.css(r), n.css(i).show()
            }, removeWrapper: function (t) {
                var i = document.activeElement;
                return t.parent().is(".ui-effects-wrapper") && (t.parent().replaceWith(t), (t[0] === i || e.contains(t[0], i)) && e(i).trigger("focus")), t
            }
        }), e.extend(e.effects, {
            version: "1.12.1", define: function (t, i, n) {
                return n || (n = i, i = "effect"), e.effects.effect[t] = n, e.effects.effect[t].mode = i, n
            }, scaledDimensions: function (e, t, i) {
                if (0 === t) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var n = "horizontal" !== i ? (t || 100) / 100 : 1, r = "vertical" !== i ? (t || 100) / 100 : 1;
                return {
                    height: e.height() * r,
                    width: e.width() * n,
                    outerHeight: e.outerHeight() * r,
                    outerWidth: e.outerWidth() * n
                }
            }, clipToBox: function (e) {
                return {
                    width: e.clip.right - e.clip.left,
                    height: e.clip.bottom - e.clip.top,
                    left: e.clip.left,
                    top: e.clip.top
                }
            }, unshift: function (e, t, i) {
                var n = e.queue();
                t > 1 && n.splice.apply(n, [1, 0].concat(n.splice(t, i))), e.dequeue()
            }, saveStyle: function (e) {
                e.data(r, e[0].style.cssText)
            }, restoreStyle: function (e) {
                e[0].style.cssText = e.data(r) || "", e.removeData(r)
            }, mode: function (e, t) {
                var i = e.is(":hidden");
                return "toggle" === t && (t = i ? "show" : "hide"), (i ? "hide" === t : "show" === t) && (t = "none"), t
            }, getBaseline: function (e, t) {
                var i, n;
                switch (e[0]) {
                    case"top":
                        i = 0;
                        break;
                    case"middle":
                        i = .5;
                        break;
                    case"bottom":
                        i = 1;
                        break;
                    default:
                        i = e[0] / t.height
                }
                switch (e[1]) {
                    case"left":
                        n = 0;
                        break;
                    case"center":
                        n = .5;
                        break;
                    case"right":
                        n = 1;
                        break;
                    default:
                        n = e[1] / t.width
                }
                return {x: n, y: i}
            }, createPlaceholder: function (t) {
                var i, r = t.css("position"), s = t.position();
                return t.css({
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()), /^(static|relative)/.test(r) && (r = "absolute", i = e("<" + t[0].nodeName + ">").insertAfter(t).css({
                    display: /^(inline|ruby)/.test(t.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: t.css("marginTop"),
                    marginBottom: t.css("marginBottom"),
                    marginLeft: t.css("marginLeft"),
                    marginRight: t.css("marginRight"),
                    "float": t.css("float")
                }).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).addClass("ui-effects-placeholder"), t.data(n + "placeholder", i)), t.css({
                    position: r,
                    left: s.left,
                    top: s.top
                }), i
            }, removePlaceholder: function (e) {
                var t = n + "placeholder", i = e.data(t);
                i && (i.remove(), e.removeData(t))
            }, cleanUp: function (t) {
                e.effects.restoreStyle(t), e.effects.removePlaceholder(t)
            }, setTransition: function (t, i, n, r) {
                return r = r || {}, e.each(i, function (e, i) {
                    var s = t.cssUnit(i);
                    s[0] > 0 && (r[i] = s[0] * n + s[1])
                }), r
            }
        }), e.fn.extend({
            effect: function () {
                function i(t) {
                    function i() {
                        l.removeData(s), e.effects.cleanUp(l), "hide" === n.mode && l.hide(), o()
                    }

                    function o() {
                        e.isFunction(u) && u.call(l[0]), e.isFunction(t) && t()
                    }

                    var l = e(this);
                    n.mode = d.shift(), e.uiBackCompat === !1 || a ? "none" === n.mode ? (l[c](), o()) : r.call(l[0], n, i) : (l.is(":hidden") ? "hide" === c : "show" === c) ? (l[c](), o()) : r.call(l[0], n, o)
                }

                var n = t.apply(this, arguments), r = e.effects.effect[n.effect], a = r.mode, o = n.queue,
                    l = o || "fx", u = n.complete, c = n.mode, d = [], h = function (t) {
                        var i = e(this), n = e.effects.mode(i, c) || a;
                        i.data(s, !0), d.push(n), a && ("show" === n || n === a && "hide" === n) && i.show(), a && "none" === n || e.effects.saveStyle(i), e.isFunction(t) && t()
                    };
                return e.fx.off || !r ? c ? this[c](n.duration, u) : this.each(function () {
                    u && u.call(this)
                }) : o === !1 ? this.each(h).each(i) : this.queue(l, h).queue(l, i)
            }, show: function (e) {
                return function (n) {
                    if (i(n)) return e.apply(this, arguments);
                    var r = t.apply(this, arguments);
                    return r.mode = "show", this.effect.call(this, r)
                }
            }(e.fn.show), hide: function (e) {
                return function (n) {
                    if (i(n)) return e.apply(this, arguments);
                    var r = t.apply(this, arguments);
                    return r.mode = "hide", this.effect.call(this, r)
                }
            }(e.fn.hide), toggle: function (e) {
                return function (n) {
                    if (i(n) || "boolean" == typeof n) return e.apply(this, arguments);
                    var r = t.apply(this, arguments);
                    return r.mode = "toggle", this.effect.call(this, r)
                }
            }(e.fn.toggle), cssUnit: function (t) {
                var i = this.css(t), n = [];
                return e.each(["em", "px", "%", "pt"], function (e, t) {
                    i.indexOf(t) > 0 && (n = [parseFloat(i), t])
                }), n
            }, cssClip: function (e) {
                return e ? this.css("clip", "rect(" + e.top + "px " + e.right + "px " + e.bottom + "px " + e.left + "px)") : a(this.css("clip"), this)
            }, transfer: function (t, i) {
                var n = e(this), r = e(t.to), s = "fixed" === r.css("position"), a = e("body"),
                    o = s ? a.scrollTop() : 0, l = s ? a.scrollLeft() : 0, u = r.offset(),
                    c = {top: u.top - o, left: u.left - l, height: r.innerHeight(), width: r.innerWidth()},
                    d = n.offset(),
                    h = e("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(t.className).css({
                        top: d.top - o,
                        left: d.left - l,
                        height: n.innerHeight(),
                        width: n.innerWidth(),
                        position: s ? "fixed" : "absolute"
                    }).animate(c, t.duration, t.easing, function () {
                        h.remove(), e.isFunction(i) && i()
                    })
            }
        }), e.fx.step.clip = function (t) {
            t.clipInit || (t.start = e(t.elem).cssClip(), "string" == typeof t.end && (t.end = a(t.end, t.elem)), t.clipInit = !0), e(t.elem).cssClip({
                top: t.pos * (t.end.top - t.start.top) + t.start.top,
                right: t.pos * (t.end.right - t.start.right) + t.start.right,
                bottom: t.pos * (t.end.bottom - t.start.bottom) + t.start.bottom,
                left: t.pos * (t.end.left - t.start.left) + t.start.left
            })
        }
    }(), function () {
        var t = {};
        e.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (e, i) {
            t[i] = function (t) {
                return Math.pow(t, e + 2)
            }
        }), e.extend(t, {
            Sine: function (e) {
                return 1 - Math.cos(e * Math.PI / 2)
            }, Circ: function (e) {
                return 1 - Math.sqrt(1 - e * e)
            }, Elastic: function (e) {
                return 0 === e || 1 === e ? e : -Math.pow(2, 8 * (e - 1)) * Math.sin((80 * (e - 1) - 7.5) * Math.PI / 15)
            }, Back: function (e) {
                return e * e * (3 * e - 2)
            }, Bounce: function (e) {
                for (var t, i = 4; ((t = Math.pow(2, --i)) - 1) / 11 > e;) ;
                return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * t - 2) / 22 - e, 2)
            }
        }), e.each(t, function (t, i) {
            e.easing["easeIn" + t] = i, e.easing["easeOut" + t] = function (e) {
                return 1 - i(1 - e)
            }, e.easing["easeInOut" + t] = function (e) {
                return .5 > e ? i(2 * e) / 2 : 1 - i(-2 * e + 2) / 2
            }
        })
    }(), e.effects, e.effects.define("fade", "toggle", function (t, i) {
        var n = "show" === t.mode;
        e(this).css("opacity", n ? 0 : 1).animate({opacity: n ? 1 : 0}, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    }), e.effects.define("slide", "show", function (t, i) {
        var n, r, s = e(this),
            a = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            o = t.mode, l = t.direction || "left", u = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l, d = t.distance || s["top" === u ? "outerHeight" : "outerWidth"](!0), h = {};
        e.effects.createPlaceholder(s), n = s.cssClip(), r = s.position()[u], h[u] = (c ? -1 : 1) * d + r, h.clip = s.cssClip(), h.clip[a[l][1]] = h.clip[a[l][0]], "show" === o && (s.cssClip(h.clip), s.css(u, h[u]), h.clip = n, h[u] = r), s.animate(h, {
            queue: !1,
            duration: t.duration,
            easing: t.easing,
            complete: i
        })
    })
}), function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : e.Popper = t()
}(this, function () {
    "use strict";

    function e(e) {
        return e && "[object Function]" === {}.toString.call(e)
    }

    function t(e, t) {
        if (1 !== e.nodeType) return [];
        var i = window.getComputedStyle(e, null);
        return t ? i[t] : i
    }

    function i(e) {
        return "HTML" === e.nodeName ? e : e.parentNode || e.host
    }

    function n(e) {
        if (!e || -1 !== ["HTML", "BODY", "#document"].indexOf(e.nodeName)) return window.document.body;
        var r = t(e), s = r.overflow, a = r.overflowX, o = r.overflowY;
        return /(auto|scroll)/.test(s + o + a) ? e : n(i(e))
    }

    function r(e) {
        var i = e && e.offsetParent, n = i && i.nodeName;
        return n && "BODY" !== n && "HTML" !== n ? -1 !== ["TD", "TABLE"].indexOf(i.nodeName) && "static" === t(i, "position") ? r(i) : i : window.document.documentElement
    }

    function s(e) {
        var t = e.nodeName;
        return "BODY" !== t && ("HTML" === t || r(e.firstElementChild) === e)
    }

    function a(e) {
        return null === e.parentNode ? e : a(e.parentNode)
    }

    function o(e, t) {
        if (!(e && e.nodeType && t && t.nodeType)) return window.document.documentElement;
        var i = e.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_FOLLOWING, n = i ? e : t, l = i ? t : e,
            u = document.createRange();
        u.setStart(n, 0), u.setEnd(l, 0);
        var c = u.commonAncestorContainer;
        if (e !== c && t !== c || n.contains(l)) return s(c) ? c : r(c);
        var d = a(e);
        return d.host ? o(d.host, t) : o(e, a(t).host)
    }

    function l(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : "top",
            i = "top" === t ? "scrollTop" : "scrollLeft", n = e.nodeName;
        if ("BODY" === n || "HTML" === n) {
            var r = window.document.documentElement, s = window.document.scrollingElement || r;
            return s[i]
        }
        return e[i]
    }

    function u(e, t) {
        var i = 2 < arguments.length && void 0 !== arguments[2] && arguments[2], n = l(t, "top"), r = l(t, "left"),
            s = i ? -1 : 1;
        return e.top += n * s, e.bottom += n * s, e.left += r * s, e.right += r * s, e
    }

    function c(e, t) {
        var i = "x" === t ? "Left" : "Top", n = "Left" == i ? "Right" : "Bottom";
        return +e["border" + i + "Width"].split("px")[0] + +e["border" + n + "Width"].split("px")[0]
    }

    function d(e, t, i, n) {
        return U(t["offset" + e], t["scroll" + e], i["client" + e], i["offset" + e], i["scroll" + e], re() ? i["offset" + e] + n["margin" + ("Height" === e ? "Top" : "Left")] + n["margin" + ("Height" === e ? "Bottom" : "Right")] : 0)
    }

    function h() {
        var e = window.document.body, t = window.document.documentElement, i = re() && window.getComputedStyle(t);
        return {height: d("Height", e, t, i), width: d("Width", e, t, i)}
    }

    function p(e) {
        return le({}, e, {right: e.left + e.width, bottom: e.top + e.height})
    }

    function f(e) {
        var i = {};
        if (re()) try {
            i = e.getBoundingClientRect();
            var n = l(e, "top"), r = l(e, "left");
            i.top += n, i.left += r, i.bottom += n, i.right += r
        } catch (e) {
        } else i = e.getBoundingClientRect();
        var s = {left: i.left, top: i.top, width: i.right - i.left, height: i.bottom - i.top},
            a = "HTML" === e.nodeName ? h() : {}, o = a.width || e.clientWidth || s.right - s.left,
            u = a.height || e.clientHeight || s.bottom - s.top, d = e.offsetWidth - o, f = e.offsetHeight - u;
        if (d || f) {
            var m = t(e);
            d -= c(m, "x"), f -= c(m, "y"), s.width -= d, s.height -= f
        }
        return p(s)
    }

    function m(e, i) {
        var r = re(), s = "HTML" === i.nodeName, a = f(e), o = f(i), l = n(e), c = t(i),
            d = +c.borderTopWidth.split("px")[0], h = +c.borderLeftWidth.split("px")[0],
            m = p({top: a.top - o.top - d, left: a.left - o.left - h, width: a.width, height: a.height});
        if (m.marginTop = 0, m.marginLeft = 0, !r && s) {
            var g = +c.marginTop.split("px")[0], v = +c.marginLeft.split("px")[0];
            m.top -= d - g, m.bottom -= d - g, m.left -= h - v, m.right -= h - v, m.marginTop = g, m.marginLeft = v
        }
        return (r ? i.contains(l) : i === l && "BODY" !== l.nodeName) && (m = u(m, i)), m
    }

    function g(e) {
        var t = window.document.documentElement, i = m(e, t), n = U(t.clientWidth, window.innerWidth || 0),
            r = U(t.clientHeight, window.innerHeight || 0), s = l(t), a = l(t, "left"),
            o = {top: s - i.top + i.marginTop, left: a - i.left + i.marginLeft, width: n, height: r};
        return p(o)
    }

    function v(e) {
        var n = e.nodeName;
        return "BODY" === n || "HTML" === n ? !1 : "fixed" === t(e, "position") || v(i(e))
    }

    function y(e, t, r, s) {
        var a = {top: 0, left: 0}, l = o(e, t);
        if ("viewport" === s) a = g(l); else {
            var u;
            "scrollParent" === s ? (u = n(i(e)), "BODY" === u.nodeName && (u = window.document.documentElement)) : u = "window" === s ? window.document.documentElement : s;
            var c = m(u, l);
            if ("HTML" !== u.nodeName || v(l)) a = c; else {
                var d = h(), p = d.height, f = d.width;
                a.top += c.top - c.marginTop, a.bottom = p + c.top, a.left += c.left - c.marginLeft, a.right = f + c.left
            }
        }
        return a.left += r, a.top += r, a.right -= r, a.bottom -= r, a
    }

    function b(e) {
        var t = e.width, i = e.height;
        return t * i
    }

    function w(e, t, i, n, r) {
        var s = 5 < arguments.length && void 0 !== arguments[5] ? arguments[5] : 0;
        if (-1 === e.indexOf("auto")) return e;
        var a = y(i, n, s, r), o = {
            top: {width: a.width, height: t.top - a.top},
            right: {width: a.right - t.right, height: a.height},
            bottom: {width: a.width, height: a.bottom - t.bottom},
            left: {width: t.left - a.left, height: a.height}
        }, l = Object.keys(o).map(function (e) {
            return le({key: e}, o[e], {area: b(o[e])})
        }).sort(function (e, t) {
            return t.area - e.area
        }), u = l.filter(function (e) {
            var t = e.width, n = e.height;
            return t >= i.clientWidth && n >= i.clientHeight
        }), c = 0 < u.length ? u[0].key : l[0].key, d = e.split("-")[1];
        return c + (d ? "-" + d : "")
    }

    function _(e, t, i) {
        var n = o(t, i);
        return m(i, n)
    }

    function T(e) {
        var t = window.getComputedStyle(e), i = parseFloat(t.marginTop) + parseFloat(t.marginBottom),
            n = parseFloat(t.marginLeft) + parseFloat(t.marginRight),
            r = {width: e.offsetWidth + n, height: e.offsetHeight + i};
        return r
    }

    function x(e) {
        var t = {left: "right", right: "left", bottom: "top", top: "bottom"};
        return e.replace(/left|right|bottom|top/g, function (e) {
            return t[e]
        })
    }

    function C(e, t, i) {
        i = i.split("-")[0];
        var n = T(e), r = {width: n.width, height: n.height}, s = -1 !== ["right", "left"].indexOf(i),
            a = s ? "top" : "left", o = s ? "left" : "top", l = s ? "height" : "width", u = s ? "width" : "height";
        return r[a] = t[a] + t[l] / 2 - n[l] / 2, r[o] = i === o ? t[o] - n[u] : t[x(o)], r
    }

    function S(e, t) {
        return Array.prototype.find ? e.find(t) : e.filter(t)[0]
    }

    function E(e, t, i) {
        if (Array.prototype.findIndex) return e.findIndex(function (e) {
            return e[t] === i
        });
        var n = S(e, function (e) {
            return e[t] === i
        });
        return e.indexOf(n)
    }

    function P(t, i, n) {
        var r = void 0 === n ? t : t.slice(0, E(t, "name", n));
        return r.forEach(function (t) {
            t["function"] && console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
            var n = t["function"] || t.fn;
            t.enabled && e(n) && (i.offsets.popper = p(i.offsets.popper), i.offsets.reference = p(i.offsets.reference), i = n(i, t))
        }), i
    }

    function I() {
        if (!this.state.isDestroyed) {
            var e = {instance: this, styles: {}, arrowStyles: {}, attributes: {}, flipped: !1, offsets: {}};
            e.offsets.reference = _(this.state, this.popper, this.reference), e.placement = w(this.options.placement, e.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding), e.originalPlacement = e.placement, e.offsets.popper = C(this.popper, e.offsets.reference, e.placement), e.offsets.popper.position = "absolute", e = P(this.modifiers, e), this.state.isCreated ? this.options.onUpdate(e) : (this.state.isCreated = !0, this.options.onCreate(e))
        }
    }

    function k(e, t) {
        return e.some(function (e) {
            var i = e.name, n = e.enabled;
            return n && i === t
        })
    }

    function j(e) {
        for (var t = [!1, "ms", "Webkit", "Moz", "O"], i = e.charAt(0).toUpperCase() + e.slice(1), n = 0; n < t.length - 1; n++) {
            var r = t[n], s = r ? "" + r + i : e;
            if ("undefined" != typeof window.document.body.style[s]) return s
        }
        return null
    }

    function A() {
        return this.state.isDestroyed = !0, k(this.modifiers, "applyStyle") && (this.popper.removeAttribute("x-placement"), this.popper.style.left = "", this.popper.style.position = "", this.popper.style.top = "", this.popper.style[j("transform")] = ""), this.disableEventListeners(), this.options.removeOnDestroy && this.popper.parentNode.removeChild(this.popper), this
    }

    function D(e, t, i, r) {
        var s = "BODY" === e.nodeName, a = s ? window : e;
        a.addEventListener(t, i, {passive: !0}), s || D(n(a.parentNode), t, i, r), r.push(a)
    }

    function M(e, t, i, r) {
        i.updateBound = r, window.addEventListener("resize", i.updateBound, {passive: !0});
        var s = n(e);
        return D(s, "scroll", i.updateBound, i.scrollParents), i.scrollElement = s, i.eventsEnabled = !0, i
    }

    function O() {
        this.state.eventsEnabled || (this.state = M(this.reference, this.options, this.state, this.scheduleUpdate))
    }

    function Y(e, t) {
        return window.removeEventListener("resize", t.updateBound), t.scrollParents.forEach(function (e) {
            e.removeEventListener("scroll", t.updateBound)
        }), t.updateBound = null, t.scrollParents = [], t.scrollElement = null, t.eventsEnabled = !1, t
    }

    function z() {
        this.state.eventsEnabled && (window.cancelAnimationFrame(this.scheduleUpdate), this.state = Y(this.reference, this.state))
    }

    function Q(e) {
        return "" !== e && !isNaN(parseFloat(e)) && isFinite(e)
    }

    function L(e, t) {
        Object.keys(t).forEach(function (i) {
            var n = "";
            -1 !== ["width", "height", "top", "right", "bottom", "left"].indexOf(i) && Q(t[i]) && (n = "px"), e.style[i] = t[i] + n
        })
    }

    function N(e, t) {
        Object.keys(t).forEach(function (i) {
            var n = t[i];
            !1 === n ? e.removeAttribute(i) : e.setAttribute(i, t[i])
        })
    }

    function B(e, t, i) {
        var n = S(e, function (e) {
            var i = e.name;
            return i === t
        }), r = !!n && e.some(function (e) {
            return e.name === i && e.enabled && e.order < n.order
        });
        if (!r) {
            var s = "`" + t + "`";
            console.warn("`" + i + "` modifier is required by " + s + " modifier in order to work, be sure to include it before " + s + "!")
        }
        return r
    }

    function H(e) {
        return "end" === e ? "start" : "start" === e ? "end" : e
    }

    function R(e) {
        var t = 1 < arguments.length && void 0 !== arguments[1] && arguments[1], i = ce.indexOf(e),
            n = ce.slice(i + 1).concat(ce.slice(0, i));
        return t ? n.reverse() : n
    }

    function F(e, t, i, n) {
        var r = e.match(/((?:\-|\+)?\d*\.?\d*)(.*)/), s = +r[1], a = r[2];
        if (!s) return e;
        if (0 === a.indexOf("%")) {
            var o;
            switch (a) {
                case"%p":
                    o = i;
                    break;
                case"%":
                case"%r":
                default:
                    o = n
            }
            var l = p(o);
            return l[t] / 100 * s
        }
        if ("vh" === a || "vw" === a) {
            var u;
            return u = "vh" === a ? U(document.documentElement.clientHeight, window.innerHeight || 0) : U(document.documentElement.clientWidth, window.innerWidth || 0), u / 100 * s
        }
        return s
    }

    function $(e, t, i, n) {
        var r = [0, 0], s = -1 !== ["right", "left"].indexOf(n), a = e.split(/(\+|\-)/).map(function (e) {
            return e.trim()
        }), o = a.indexOf(S(a, function (e) {
            return -1 !== e.search(/,|\s/)
        }));
        a[o] && -1 === a[o].indexOf(",") && console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
        var l = /\s*,\s*|\s+/,
            u = -1 === o ? [a] : [a.slice(0, o).concat([a[o].split(l)[0]]), [a[o].split(l)[1]].concat(a.slice(o + 1))];
        return u = u.map(function (e, n) {
            var r = (1 === n ? !s : s) ? "height" : "width", a = !1;
            return e.reduce(function (e, t) {
                return "" === e[e.length - 1] && -1 !== ["+", "-"].indexOf(t) ? (e[e.length - 1] = t, a = !0, e) : a ? (e[e.length - 1] += t, a = !1, e) : e.concat(t)
            }, []).map(function (e) {
                return F(e, r, t, i)
            })
        }), u.forEach(function (e, t) {
            e.forEach(function (i, n) {
                Q(i) && (r[t] += i * ("-" === e[n - 1] ? -1 : 1))
            })
        }), r
    }

    function W(e, t) {
        var i, n = t.offset, r = e.placement, s = e.offsets, a = s.popper, o = s.reference, l = r.split("-")[0];
        return i = Q(+n) ? [+n, 0] : $(n, a, o, l), "left" === l ? (a.top += i[0], a.left -= i[1]) : "right" === l ? (a.top += i[0], a.left += i[1]) : "top" === l ? (a.left += i[0], a.top -= i[1]) : "bottom" === l && (a.left += i[0], a.top += i[1]), e.popper = a, e
    }

    for (var q = Math.min, V = Math.floor, U = Math.max, G = ["native code", "[object MutationObserverConstructor]"], X = function (e) {
        return G.some(function (t) {
            return -1 < (e || "").toString().indexOf(t)
        })
    }, K = "undefined" != typeof window, Z = ["Edge", "Trident", "Firefox"], J = 0, ee = 0; ee < Z.length; ee += 1) if (K && 0 <= navigator.userAgent.indexOf(Z[ee])) {
        J = 1;
        break
    }
    var te, ie = K && X(window.MutationObserver), ne = ie ? function (e) {
            var t = !1, i = 0, n = document.createElement("span"), r = new MutationObserver(function () {
                e(), t = !1
            });
            return r.observe(n, {attributes: !0}), function () {
                t || (t = !0, n.setAttribute("x-index", i), ++i)
            }
        } : function (e) {
            var t = !1;
            return function () {
                t || (t = !0, setTimeout(function () {
                    t = !1, e()
                }, J))
            }
        }, re = function () {
            return void 0 == te && (te = -1 !== navigator.appVersion.indexOf("MSIE 10")), te
        }, se = function (e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }, ae = function () {
            function e(e, t) {
                for (var i, n = 0; n < t.length; n++) i = t[n], i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }

            return function (t, i, n) {
                return i && e(t.prototype, i), n && e(t, n), t
            }
        }(), oe = function (e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }, le = Object.assign || function (e) {
            for (var t, i = 1; i < arguments.length; i++) for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
        },
        ue = ["auto-start", "auto", "auto-end", "top-start", "top", "top-end", "right-start", "right", "right-end", "bottom-end", "bottom", "bottom-start", "left-end", "left", "left-start"],
        ce = ue.slice(3), de = {FLIP: "flip", CLOCKWISE: "clockwise", COUNTERCLOCKWISE: "counterclockwise"},
        he = function () {
            function t(i, n) {
                var r = this, s = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                se(this, t), this.scheduleUpdate = function () {
                    return requestAnimationFrame(r.update)
                }, this.update = ne(this.update.bind(this)), this.options = le({}, t.Defaults, s), this.state = {
                    isDestroyed: !1,
                    isCreated: !1,
                    scrollParents: []
                }, this.reference = i.jquery ? i[0] : i, this.popper = n.jquery ? n[0] : n, this.options.modifiers = {}, Object.keys(le({}, t.Defaults.modifiers, s.modifiers)).forEach(function (e) {
                    r.options.modifiers[e] = le({}, t.Defaults.modifiers[e] || {}, s.modifiers ? s.modifiers[e] : {})
                }), this.modifiers = Object.keys(this.options.modifiers).map(function (e) {
                    return le({name: e}, r.options.modifiers[e])
                }).sort(function (e, t) {
                    return e.order - t.order
                }), this.modifiers.forEach(function (t) {
                    t.enabled && e(t.onLoad) && t.onLoad(r.reference, r.popper, r.options, t, r.state)
                }), this.update();
                var a = this.options.eventsEnabled;
                a && this.enableEventListeners(), this.state.eventsEnabled = a
            }

            return ae(t, [{
                key: "update", value: function () {
                    return I.call(this)
                }
            }, {
                key: "destroy", value: function () {
                    return A.call(this)
                }
            }, {
                key: "enableEventListeners", value: function () {
                    return O.call(this)
                }
            }, {
                key: "disableEventListeners", value: function () {
                    return z.call(this)
                }
            }]), t
        }();
    return he.Utils = ("undefined" == typeof window ? global : window).PopperUtils, he.placements = ue, he.Defaults = {
        placement: "bottom",
        eventsEnabled: !0,
        removeOnDestroy: !1,
        onCreate: function () {
        },
        onUpdate: function () {
        },
        modifiers: {
            shift: {
                order: 100, enabled: !0, fn: function (e) {
                    var t = e.placement, i = t.split("-")[0], n = t.split("-")[1];
                    if (n) {
                        var r = e.offsets, s = r.reference, a = r.popper, o = -1 !== ["bottom", "top"].indexOf(i),
                            l = o ? "left" : "top", u = o ? "width" : "height",
                            c = {start: oe({}, l, s[l]), end: oe({}, l, s[l] + s[u] - a[u])};
                        e.offsets.popper = le({}, a, c[n])
                    }
                    return e
                }
            },
            offset: {order: 200, enabled: !0, fn: W, offset: 0},
            preventOverflow: {
                order: 300, enabled: !0, fn: function (e, t) {
                    var i = t.boundariesElement || r(e.instance.popper);
                    e.instance.reference === i && (i = r(i));
                    var n = y(e.instance.popper, e.instance.reference, t.padding, i);
                    t.boundaries = n;
                    var s = t.priority, a = e.offsets.popper, o = {
                        primary: function (e) {
                            var i = a[e];
                            return a[e] < n[e] && !t.escapeWithReference && (i = U(a[e], n[e])), oe({}, e, i)
                        }, secondary: function (e) {
                            var i = "right" === e ? "left" : "top", r = a[i];
                            return a[e] > n[e] && !t.escapeWithReference && (r = q(a[i], n[e] - ("right" === e ? a.width : a.height))), oe({}, i, r)
                        }
                    };
                    return s.forEach(function (e) {
                        var t = -1 === ["left", "top"].indexOf(e) ? "secondary" : "primary";
                        a = le({}, a, o[t](e))
                    }), e.offsets.popper = a, e
                }, priority: ["left", "right", "top", "bottom"], padding: 5, boundariesElement: "scrollParent"
            },
            keepTogether: {
                order: 400, enabled: !0, fn: function (e) {
                    var t = e.offsets, i = t.popper, n = t.reference, r = e.placement.split("-")[0], s = V,
                        a = -1 !== ["top", "bottom"].indexOf(r), o = a ? "right" : "bottom", l = a ? "left" : "top",
                        u = a ? "width" : "height";
                    return i[o] < s(n[l]) && (e.offsets.popper[l] = s(n[l]) - i[u]), i[l] > s(n[o]) && (e.offsets.popper[l] = s(n[o])), e
                }
            },
            arrow: {
                order: 500, enabled: !0, fn: function (e, i) {
                    if (!B(e.instance.modifiers, "arrow", "keepTogether")) return e;
                    var n = i.element;
                    if ("string" == typeof n) {
                        if (n = e.instance.popper.querySelector(n), !n) return e
                    } else if (!e.instance.popper.contains(n)) return console.warn("WARNING: `arrow.element` must be child of its popper element!"), e;
                    var r = e.placement.split("-")[0], s = e.offsets, a = s.popper, o = s.reference,
                        l = -1 !== ["left", "right"].indexOf(r), u = l ? "height" : "width", c = l ? "Top" : "Left",
                        d = c.toLowerCase(), h = l ? "left" : "top", f = l ? "bottom" : "right", m = T(n)[u];
                    o[f] - m < a[d] && (e.offsets.popper[d] -= a[d] - (o[f] - m)), o[d] + m > a[f] && (e.offsets.popper[d] += o[d] + m - a[f]);
                    var g = o[d] + o[u] / 2 - m / 2, v = t(e.instance.popper, "margin" + c).replace("px", ""),
                        y = g - p(e.offsets.popper)[d] - v;
                    return y = U(q(a[u] - m, y), 0), e.arrowElement = n, e.offsets.arrow = {}, e.offsets.arrow[d] = Math.round(y), e.offsets.arrow[h] = "", e
                }, element: "[x-arrow]"
            },
            flip: {
                order: 600, enabled: !0, fn: function (e, t) {
                    if (k(e.instance.modifiers, "inner")) return e;
                    if (e.flipped && e.placement === e.originalPlacement) return e;
                    var i = y(e.instance.popper, e.instance.reference, t.padding, t.boundariesElement),
                        n = e.placement.split("-")[0], r = x(n), s = e.placement.split("-")[1] || "", a = [];
                    switch (t.behavior) {
                        case de.FLIP:
                            a = [n, r];
                            break;
                        case de.CLOCKWISE:
                            a = R(n);
                            break;
                        case de.COUNTERCLOCKWISE:
                            a = R(n, !0);
                            break;
                        default:
                            a = t.behavior
                    }
                    return a.forEach(function (o, l) {
                        if (n !== o || a.length === l + 1) return e;
                        n = e.placement.split("-")[0], r = x(n);
                        var u = e.offsets.popper, c = e.offsets.reference, d = V,
                            h = "left" === n && d(u.right) > d(c.left) || "right" === n && d(u.left) < d(c.right) || "top" === n && d(u.bottom) > d(c.top) || "bottom" === n && d(u.top) < d(c.bottom),
                            p = d(u.left) < d(i.left), f = d(u.right) > d(i.right), m = d(u.top) < d(i.top),
                            g = d(u.bottom) > d(i.bottom),
                            v = "left" === n && p || "right" === n && f || "top" === n && m || "bottom" === n && g,
                            y = -1 !== ["top", "bottom"].indexOf(n),
                            b = !!t.flipVariations && (y && "start" === s && p || y && "end" === s && f || !y && "start" === s && m || !y && "end" === s && g);
                        (h || v || b) && (e.flipped = !0, (h || v) && (n = a[l + 1]), b && (s = H(s)), e.placement = n + (s ? "-" + s : ""), e.offsets.popper = le({}, e.offsets.popper, C(e.instance.popper, e.offsets.reference, e.placement)), e = P(e.instance.modifiers, e, "flip"))
                    }), e
                }, behavior: "flip", padding: 5, boundariesElement: "viewport"
            },
            inner: {
                order: 700, enabled: !1, fn: function (e) {
                    var t = e.placement, i = t.split("-")[0], n = e.offsets, r = n.popper, s = n.reference,
                        a = -1 !== ["left", "right"].indexOf(i), o = -1 === ["top", "left"].indexOf(i);
                    return r[a ? "left" : "top"] = s[i] - (o ? r[a ? "width" : "height"] : 0), e.placement = x(t), e.offsets.popper = p(r), e
                }
            },
            hide: {
                order: 800, enabled: !0, fn: function (e) {
                    if (!B(e.instance.modifiers, "hide", "preventOverflow")) return e;
                    var t = e.offsets.reference, i = S(e.instance.modifiers, function (e) {
                        return "preventOverflow" === e.name
                    }).boundaries;
                    if (t.bottom < i.top || t.left > i.right || t.top > i.bottom || t.right < i.left) {
                        if (!0 === e.hide) return e;
                        e.hide = !0, e.attributes["x-out-of-boundaries"] = ""
                    } else {
                        if (!1 === e.hide) return e;
                        e.hide = !1, e.attributes["x-out-of-boundaries"] = !1
                    }
                    return e
                }
            },
            computeStyle: {
                order: 850, enabled: !0, fn: function (e, t) {
                    var i = t.x, n = t.y, s = e.offsets.popper, a = S(e.instance.modifiers, function (e) {
                        return "applyStyle" === e.name
                    }).gpuAcceleration;
                    void 0 !== a && console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
                    var o, l, u = void 0 === a ? t.gpuAcceleration : a, c = r(e.instance.popper), d = f(c),
                        h = {position: s.position},
                        p = {left: V(s.left), top: V(s.top), bottom: V(s.bottom), right: V(s.right)},
                        m = "bottom" === i ? "top" : "bottom", g = "right" === n ? "left" : "right", v = j("transform");
                    if (l = "bottom" == m ? -d.height + p.bottom : p.top, o = "right" == g ? -d.width + p.right : p.left, u && v) h[v] = "translate3d(" + o + "px, " + l + "px, 0)", h[m] = 0, h[g] = 0, h.willChange = "transform"; else {
                        var y = "bottom" == m ? -1 : 1, b = "right" == g ? -1 : 1;
                        h[m] = l * y, h[g] = o * b, h.willChange = m + ", " + g
                    }
                    var w = {"x-placement": e.placement};
                    return e.attributes = le({}, w, e.attributes), e.styles = le({}, h, e.styles), e.arrowStyles = le({}, e.offsets.arrow, e.arrowStyles), e
                }, gpuAcceleration: !0, x: "bottom", y: "right"
            },
            applyStyle: {
                order: 900, enabled: !0, fn: function (e) {
                    return L(e.instance.popper, e.styles), N(e.instance.popper, e.attributes), e.arrowElement && Object.keys(e.arrowStyles).length && L(e.arrowElement, e.arrowStyles), e
                }, onLoad: function (e, t, i, n, r) {
                    var s = _(r, t, e),
                        a = w(i.placement, s, t, e, i.modifiers.flip.boundariesElement, i.modifiers.flip.padding);
                    return t.setAttribute("x-placement", a), L(t, {position: "absolute"}), i
                }, gpuAcceleration: void 0
            }
        }
    }, he
}), !function (e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports, require("jquery"), require("popper.js")) : "function" == typeof define && define.amd ? define(["exports", "jquery", "popper.js"], t) : t(e.bootstrap = {}, e.jQuery, e.Popper)
}(this, function (e, t, i) {
    "use strict";

    function n(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function r(e, t, i) {
        return t && n(e.prototype, t), i && n(e, i), e
    }

    function s() {
        return (s = Object.assign || function (e) {
            for (var t = 1; t < arguments.length; t++) {
                var i = arguments[t];
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
            }
            return e
        }).apply(this, arguments)
    }

    t = t && t.hasOwnProperty("default") ? t["default"] : t, i = i && i.hasOwnProperty("default") ? i["default"] : i;
    var a = function (e) {
        function t(e) {
            return {}.toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase()
        }

        function i(t) {
            var i = this, n = !1;
            return e(this).one(r.TRANSITION_END, function () {
                n = !0
            }), setTimeout(function () {
                n || r.triggerTransitionEnd(i)
            }, t), this
        }

        var n = !1, r = {
            TRANSITION_END: "bsTransitionEnd", getUID: function (e) {
                do e += ~~(1e6 * Math.random()); while (document.getElementById(e));
                return e
            }, getSelectorFromElement: function (e) {
                var t = e.getAttribute("data-target");
                t && "#" !== t || (t = e.getAttribute("href") || ""), "#" === t.charAt(0) && (t = function (e) {
                    return e = "function" == typeof i.escapeSelector ? i.escapeSelector(e).substr(1) : e.replace(/(:|\.|\[|\]|,|=|@)/g, "\\$1")
                }(t));
                try {
                    return i(document).find(t).length > 0 ? t : null
                } catch (i) {
                    return null
                }
            }, reflow: function (e) {
                return e.offsetHeight
            }, triggerTransitionEnd: function (t) {
                e(t).trigger(n.end)
            }, supportsTransitionEnd: function () {
                return Boolean(n)
            }, isElement: function (e) {
                return (e[0] || e).nodeType
            }, typeCheckConfig: function (e, i, n) {
                for (var s in n) if (Object.prototype.hasOwnProperty.call(n, s)) {
                    var a = n[s], o = i[s], l = o && r.isElement(o) ? "element" : t(o);
                    if (!new RegExp(a).test(l)) throw new Error(e.toUpperCase() + ': Option "' + s + '" provided type "' + l + '" but expected type "' + a + '".')
                }
            }
        };
        return n = !window.QUnit && {end: "transitionend"}, e.fn.emulateTransitionEnd = i, r.supportsTransitionEnd() && (e.event.special[r.TRANSITION_END] = {
            bindType: n.end,
            delegateType: n.end,
            handle: function (t) {
                return e(t.target).is(this) ? t.handleObj.handler.apply(this, arguments) : void 0
            }
        }), r
    }(t), o = function (e) {
        var t = "alert", i = "bs.alert", n = "." + i, s = e.fn[t],
            o = {CLOSE: "close" + n, CLOSED: "closed" + n, CLICK_DATA_API: "click" + n + ".data-api"}, l = "alert",
            u = "fade", c = "show", d = function () {
                function t(e) {
                    this._element = e
                }

                var n = t.prototype;
                return n.close = function (e) {
                    e = e || this._element;
                    var t = this._getRootElement(e);
                    this._triggerCloseEvent(t).isDefaultPrevented() || this._removeElement(t)
                }, n.dispose = function () {
                    e.removeData(this._element, i), this._element = null
                }, n._getRootElement = function (t) {
                    var i = a.getSelectorFromElement(t), n = !1;
                    return i && (n = e(i)[0]), n || (n = e(t).closest("." + l)[0]), n
                }, n._triggerCloseEvent = function (t) {
                    var i = e.Event(o.CLOSE);
                    return e(t).trigger(i), i
                }, n._removeElement = function (t) {
                    var i = this;
                    e(t).removeClass(c), a.supportsTransitionEnd() && e(t).hasClass(u) ? e(t).one(a.TRANSITION_END, function (e) {
                        return i._destroyElement(t, e)
                    }).emulateTransitionEnd(150) : this._destroyElement(t)
                }, n._destroyElement = function (t) {
                    e(t).detach().trigger(o.CLOSED).remove()
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = e(this), s = r.data(i);
                        s || (s = new t(this), r.data(i, s)), "close" === n && s[n](this)
                    })
                }, t._handleDismiss = function (e) {
                    return function (t) {
                        t && t.preventDefault(), e.close(this)
                    }
                }, r(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }]), t
            }();
        return e(document).on(o.CLICK_DATA_API, '[data-dismiss="alert"]', d._handleDismiss(new d)), e.fn[t] = d._jQueryInterface, e.fn[t].Constructor = d, e.fn[t].noConflict = function () {
            return e.fn[t] = s, d._jQueryInterface
        }, d
    }(t), l = function (e) {
        var t = "button", i = "bs.button", n = "." + i, s = ".data-api", a = e.fn[t], o = "active", l = "btn",
            u = "focus", c = '[data-toggle^="button"]', d = '[data-toggle="buttons"]', h = "input", p = ".active",
            f = ".btn", m = {CLICK_DATA_API: "click" + n + s, FOCUS_BLUR_DATA_API: "focus" + n + s + " blur" + n + s},
            g = function () {
                function t(e) {
                    this._element = e
                }

                var n = t.prototype;
                return n.toggle = function () {
                    var t = !0, i = !0, n = e(this._element).closest(d)[0];
                    if (n) {
                        var r = e(this._element).find(h)[0];
                        if (r) {
                            if ("radio" === r.type) if (r.checked && e(this._element).hasClass(o)) t = !1; else {
                                var s = e(n).find(p)[0];
                                s && e(s).removeClass(o)
                            }
                            if (t) {
                                if (r.hasAttribute("disabled") || n.hasAttribute("disabled") || r.classList.contains("disabled") || n.classList.contains("disabled")) return;
                                r.checked = !e(this._element).hasClass(o), e(r).trigger("change")
                            }
                            r.focus(), i = !1
                        }
                    }
                    i && this._element.setAttribute("aria-pressed", !e(this._element).hasClass(o)), t && e(this._element).toggleClass(o)
                }, n.dispose = function () {
                    e.removeData(this._element, i), this._element = null
                }, t._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = e(this).data(i);
                        r || (r = new t(this), e(this).data(i, r)), "toggle" === n && r[n]()
                    })
                }, r(t, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }]), t
            }();
        return e(document).on(m.CLICK_DATA_API, c, function (t) {
            t.preventDefault();
            var i = t.target;
            e(i).hasClass(l) || (i = e(i).closest(f)), g._jQueryInterface.call(e(i), "toggle")
        }).on(m.FOCUS_BLUR_DATA_API, c, function (t) {
            var i = e(t.target).closest(f)[0];
            e(i).toggleClass(u, /^focus(in)?$/.test(t.type))
        }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = a, g._jQueryInterface
        }, g
    }(t), u = function (e) {
        var t = "carousel", i = "bs.carousel", n = "." + i, o = e.fn[t],
            l = {interval: 5e3, keyboard: !0, slide: !1, pause: "hover", wrap: !0}, u = {
                interval: "(number|boolean)",
                keyboard: "boolean",
                slide: "(boolean|string)",
                pause: "(string|boolean)",
                wrap: "boolean"
            }, c = "next", d = "prev", h = "left", p = "right", f = {
                SLIDE: "slide" + n,
                SLID: "slid" + n,
                KEYDOWN: "keydown" + n,
                MOUSEENTER: "mouseenter" + n,
                MOUSELEAVE: "mouseleave" + n,
                TOUCHEND: "touchend" + n,
                LOAD_DATA_API: "load" + n + ".data-api",
                CLICK_DATA_API: "click" + n + ".data-api"
            }, m = "carousel", g = "active", v = "slide", y = "carousel-item-right", b = "carousel-item-left",
            w = "carousel-item-next", _ = "carousel-item-prev", T = {
                ACTIVE: ".active",
                ACTIVE_ITEM: ".active.carousel-item",
                ITEM: ".carousel-item",
                NEXT_PREV: ".carousel-item-next, .carousel-item-prev",
                INDICATORS: ".carousel-indicators",
                DATA_SLIDE: "[data-slide], [data-slide-to]",
                DATA_RIDE: '[data-ride="carousel"]'
            }, x = function () {
                function o(t, i) {
                    this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this._config = this._getConfig(i), this._element = e(t)[0], this._indicatorsElement = e(this._element).find(T.INDICATORS)[0], this._addEventListeners()
                }

                var x = o.prototype;
                return x.next = function () {
                    this._isSliding || this._slide(c)
                }, x.nextWhenVisible = function () {
                    !document.hidden && e(this._element).is(":visible") && "hidden" !== e(this._element).css("visibility") && this.next()
                }, x.prev = function () {
                    this._isSliding || this._slide(d)
                }, x.pause = function (t) {
                    t || (this._isPaused = !0), e(this._element).find(T.NEXT_PREV)[0] && a.supportsTransitionEnd() && (a.triggerTransitionEnd(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
                }, x.cycle = function (e) {
                    e || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
                }, x.to = function (t) {
                    var i = this;
                    this._activeElement = e(this._element).find(T.ACTIVE_ITEM)[0];
                    var n = this._getItemIndex(this._activeElement);
                    if (!(t > this._items.length - 1 || 0 > t)) if (this._isSliding) e(this._element).one(f.SLID, function () {
                        return i.to(t)
                    }); else {
                        if (n === t) return this.pause(), void this.cycle();
                        var r = t > n ? c : d;
                        this._slide(r, this._items[t])
                    }
                }, x.dispose = function () {
                    e(this._element).off(n), e.removeData(this._element, i), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
                }, x._getConfig = function (e) {
                    return e = s({}, l, e), a.typeCheckConfig(t, e, u), e
                }, x._addEventListeners = function () {
                    var t = this;
                    this._config.keyboard && e(this._element).on(f.KEYDOWN, function (e) {
                        return t._keydown(e)
                    }), "hover" === this._config.pause && (e(this._element).on(f.MOUSEENTER, function (e) {
                        return t.pause(e)
                    }).on(f.MOUSELEAVE, function (e) {
                        return t.cycle(e)
                    }), "ontouchstart" in document.documentElement && e(this._element).on(f.TOUCHEND, function () {
                        t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout(function (e) {
                            return t.cycle(e)
                        }, 500 + t._config.interval)
                    }))
                }, x._keydown = function (e) {
                    if (!/input|textarea/i.test(e.target.tagName)) switch (e.which) {
                        case 37:
                            e.preventDefault(), this.prev();
                            break;
                        case 39:
                            e.preventDefault(), this.next();
                            break;
                        default:
                            return
                    }
                }, x._getItemIndex = function (t) {
                    return this._items = e.makeArray(e(t).parent().find(T.ITEM)), this._items.indexOf(t)
                }, x._getItemByDirection = function (e, t) {
                    var i = e === c, n = e === d, r = this._getItemIndex(t), s = this._items.length - 1;
                    if ((n && 0 === r || i && r === s) && !this._config.wrap) return t;
                    var a = (r + (e === d ? -1 : 1)) % this._items.length;
                    return -1 === a ? this._items[this._items.length - 1] : this._items[a]
                }, x._triggerSlideEvent = function (t, i) {
                    var n = this._getItemIndex(t), r = this._getItemIndex(e(this._element).find(T.ACTIVE_ITEM)[0]),
                        s = e.Event(f.SLIDE, {relatedTarget: t, direction: i, from: r, to: n});
                    return e(this._element).trigger(s), s
                }, x._setActiveIndicatorElement = function (t) {
                    if (this._indicatorsElement) {
                        e(this._indicatorsElement).find(T.ACTIVE).removeClass(g);
                        var i = this._indicatorsElement.children[this._getItemIndex(t)];
                        i && e(i).addClass(g)
                    }
                }, x._slide = function (t, i) {
                    var n, r, s, o = this, l = e(this._element).find(T.ACTIVE_ITEM)[0], u = this._getItemIndex(l),
                        d = i || l && this._getItemByDirection(t, l), m = this._getItemIndex(d),
                        x = Boolean(this._interval);
                    if (t === c ? (n = b, r = w, s = h) : (n = y, r = _, s = p), d && e(d).hasClass(g)) this._isSliding = !1; else if (!this._triggerSlideEvent(d, s).isDefaultPrevented() && l && d) {
                        this._isSliding = !0, x && this.pause(), this._setActiveIndicatorElement(d);
                        var C = e.Event(f.SLID, {relatedTarget: d, direction: s, from: u, to: m});
                        a.supportsTransitionEnd() && e(this._element).hasClass(v) ? (e(d).addClass(r), a.reflow(d), e(l).addClass(n), e(d).addClass(n), e(l).one(a.TRANSITION_END, function () {
                            e(d).removeClass(n + " " + r).addClass(g), e(l).removeClass(g + " " + r + " " + n), o._isSliding = !1, setTimeout(function () {
                                return e(o._element).trigger(C)
                            }, 0)
                        }).emulateTransitionEnd(600)) : (e(l).removeClass(g), e(d).addClass(g), this._isSliding = !1, e(this._element).trigger(C)), x && this.cycle()
                    }
                }, o._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data(i), r = s({}, l, e(this).data());
                        "object" == typeof t && (r = s({}, r, t));
                        var a = "string" == typeof t ? t : r.slide;
                        if (n || (n = new o(this, r), e(this).data(i, n)), "number" == typeof t) n.to(t); else if ("string" == typeof a) {
                            if ("undefined" == typeof n[a]) throw new Error('No method named "' + a + '"');
                            n[a]()
                        } else r.interval && (n.pause(), n.cycle())
                    })
                }, o._dataApiClickHandler = function (t) {
                    var n = a.getSelectorFromElement(this);
                    if (n) {
                        var r = e(n)[0];
                        if (r && e(r).hasClass(m)) {
                            var l = s({}, e(r).data(), e(this).data()), u = this.getAttribute("data-slide-to");
                            u && (l.interval = !1), o._jQueryInterface.call(e(r), l), u && e(r).data(i).to(u), t.preventDefault()
                        }
                    }
                }, r(o, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }]), o
            }();
        return e(document).on(f.CLICK_DATA_API, T.DATA_SLIDE, x._dataApiClickHandler), e(window).on(f.LOAD_DATA_API, function () {
            e(T.DATA_RIDE).each(function () {
                var t = e(this);
                x._jQueryInterface.call(t, t.data())
            })
        }), e.fn[t] = x._jQueryInterface, e.fn[t].Constructor = x, e.fn[t].noConflict = function () {
            return e.fn[t] = o, x._jQueryInterface
        }, x
    }(t), c = function (e) {
        var t = "collapse", i = "bs.collapse", n = "." + i, o = e.fn[t], l = {toggle: !0, parent: ""},
            u = {toggle: "boolean", parent: "(string|element)"}, c = {
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                CLICK_DATA_API: "click" + n + ".data-api"
            }, d = "show", h = "collapse", p = "collapsing", f = "collapsed", m = "width", g = "height",
            v = {ACTIVES: ".show, .collapsing", DATA_TOGGLE: '[data-toggle="collapse"]'}, y = function () {
                function n(t, i) {
                    this._isTransitioning = !1, this._element = t, this._config = this._getConfig(i), this._triggerArray = e.makeArray(e('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]'));
                    for (var n = e(v.DATA_TOGGLE), r = 0; r < n.length; r++) {
                        var s = n[r], o = a.getSelectorFromElement(s);
                        null !== o && e(o).filter(t).length > 0 && this._triggerArray.push(s)
                    }
                    this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle()
                }

                var o = n.prototype;
                return o.toggle = function () {
                    e(this._element).hasClass(d) ? this.hide() : this.show()
                }, o.show = function () {
                    var t = this;
                    if (!this._isTransitioning && !e(this._element).hasClass(d)) {
                        var r, s;
                        if (this._parent && ((r = e.makeArray(e(this._parent).children().children(v.ACTIVES))).length || (r = null)), !(r && (s = e(r).data(i)) && s._isTransitioning)) {
                            var o = e.Event(c.SHOW);
                            if (e(this._element).trigger(o), !o.isDefaultPrevented()) {
                                r && (n._jQueryInterface.call(e(r), "hide"), s || e(r).data(i, null));
                                var l = this._getDimension();
                                e(this._element).removeClass(h).addClass(p), this._element.style[l] = 0, this._triggerArray.length && e(this._triggerArray).removeClass(f).attr("aria-expanded", !0), this.setTransitioning(!0);
                                var u = function () {
                                    e(t._element).removeClass(p).addClass(h).addClass(d), t._element.style[l] = "", t.setTransitioning(!1), e(t._element).trigger(c.SHOWN)
                                };
                                if (a.supportsTransitionEnd()) {
                                    var m = "scroll" + (l[0].toUpperCase() + l.slice(1));
                                    e(this._element).one(a.TRANSITION_END, u).emulateTransitionEnd(600), this._element.style[l] = this._element[m] + "px"
                                } else u()
                            }
                        }
                    }
                }, o.hide = function () {
                    var t = this;
                    if (!this._isTransitioning && e(this._element).hasClass(d)) {
                        var i = e.Event(c.HIDE);
                        if (e(this._element).trigger(i), !i.isDefaultPrevented()) {
                            var n = this._getDimension();
                            if (this._element.style[n] = this._element.getBoundingClientRect()[n] + "px", a.reflow(this._element), e(this._element).addClass(p).removeClass(h).removeClass(d), this._triggerArray.length) for (var r = 0; r < this._triggerArray.length; r++) {
                                var s = this._triggerArray[r], o = a.getSelectorFromElement(s);
                                null !== o && (e(o).hasClass(d) || e(s).addClass(f).attr("aria-expanded", !1))
                            }
                            this.setTransitioning(!0);
                            var l = function () {
                                t.setTransitioning(!1), e(t._element).removeClass(p).addClass(h).trigger(c.HIDDEN)
                            };
                            this._element.style[n] = "", a.supportsTransitionEnd() ? e(this._element).one(a.TRANSITION_END, l).emulateTransitionEnd(600) : l()
                        }
                    }
                }, o.setTransitioning = function (e) {
                    this._isTransitioning = e
                }, o.dispose = function () {
                    e.removeData(this._element, i), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
                }, o._getConfig = function (e) {
                    return e = s({}, l, e), e.toggle = Boolean(e.toggle), a.typeCheckConfig(t, e, u), e
                }, o._getDimension = function () {
                    return e(this._element).hasClass(m) ? m : g
                }, o._getParent = function () {
                    var t = this, i = null;
                    a.isElement(this._config.parent) ? (i = this._config.parent, "undefined" != typeof this._config.parent.jquery && (i = this._config.parent[0])) : i = e(this._config.parent)[0];
                    var r = '[data-toggle="collapse"][data-parent="' + this._config.parent + '"]';
                    return e(i).find(r).each(function (e, i) {
                        t._addAriaAndCollapsedClass(n._getTargetFromElement(i), [i])
                    }), i
                }, o._addAriaAndCollapsedClass = function (t, i) {
                    if (t) {
                        var n = e(t).hasClass(d);
                        i.length && e(i).toggleClass(f, !n).attr("aria-expanded", n)
                    }
                }, n._getTargetFromElement = function (t) {
                    var i = a.getSelectorFromElement(t);
                    return i ? e(i)[0] : null
                }, n._jQueryInterface = function (t) {
                    return this.each(function () {
                        var r = e(this), a = r.data(i), o = s({}, l, r.data(), "object" == typeof t && t);
                        if (!a && o.toggle && /show|hide/.test(t) && (o.toggle = !1), a || (a = new n(this, o), r.data(i, a)), "string" == typeof t) {
                            if ("undefined" == typeof a[t]) throw new Error('No method named "' + t + '"');
                            a[t]()
                        }
                    })
                }, r(n, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }]), n
            }();
        return e(document).on(c.CLICK_DATA_API, v.DATA_TOGGLE, function (t) {
            "A" === t.currentTarget.tagName && t.preventDefault();
            var n = e(this), r = a.getSelectorFromElement(this);
            e(r).each(function () {
                var t = e(this), r = t.data(i) ? "toggle" : n.data();
                y._jQueryInterface.call(t, r)
            })
        }), e.fn[t] = y._jQueryInterface, e.fn[t].Constructor = y, e.fn[t].noConflict = function () {
            return e.fn[t] = o, y._jQueryInterface
        }, y
    }(t), d = function (e) {
        var t = "dropdown", n = "bs.dropdown", o = "." + n, l = ".data-api", u = e.fn[t], c = new RegExp("38|40|27"),
            d = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                CLICK: "click" + o,
                CLICK_DATA_API: "click" + o + l,
                KEYDOWN_DATA_API: "keydown" + o + l,
                KEYUP_DATA_API: "keyup" + o + l
            }, h = "disabled", p = "show", f = "dropup", m = "dropright", g = "dropleft", v = "dropdown-menu-right",
            y = "dropdown-menu-left", b = "position-static", w = '[data-toggle="dropdown"]', _ = ".dropdown form",
            T = ".dropdown-menu", x = ".navbar-nav", C = ".dropdown-menu .dropdown-item:not(.disabled)",
            S = "top-start", E = "top-end", P = "bottom-start", I = "bottom-end", k = "right-start", j = "left-start",
            A = {offset: 0, flip: !0, boundary: "scrollParent"},
            D = {offset: "(number|string|function)", flip: "boolean", boundary: "(string|element)"}, M = function () {
                function l(e, t) {
                    this._element = e, this._popper = null, this._config = this._getConfig(t), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._addEventListeners()
                }

                var u = l.prototype;
                return u.toggle = function () {
                    if (!this._element.disabled && !e(this._element).hasClass(h)) {
                        var t = l._getParentFromElement(this._element), n = e(this._menu).hasClass(p);
                        if (l._clearMenus(), !n) {
                            var r = {relatedTarget: this._element}, s = e.Event(d.SHOW, r);
                            if (e(t).trigger(s), !s.isDefaultPrevented()) {
                                if (!this._inNavbar) {
                                    if ("undefined" == typeof i) throw new Error("Bootstrap dropdown require Popper.js (https://popper.js.org)");
                                    var a = this._element;
                                    e(t).hasClass(f) && (e(this._menu).hasClass(y) || e(this._menu).hasClass(v)) && (a = t), "scrollParent" !== this._config.boundary && e(t).addClass(b), this._popper = new i(a, this._menu, this._getPopperConfig())
                                }
                                "ontouchstart" in document.documentElement && !e(t).closest(x).length && e("body").children().on("mouseover", null, e.noop), this._element.focus(), this._element.setAttribute("aria-expanded", !0), e(this._menu).toggleClass(p), e(t).toggleClass(p).trigger(e.Event(d.SHOWN, r))
                            }
                        }
                    }
                }, u.dispose = function () {
                    e.removeData(this._element, n), e(this._element).off(o), this._element = null, this._menu = null, null !== this._popper && (this._popper.destroy(), this._popper = null)
                }, u.update = function () {
                    this._inNavbar = this._detectNavbar(), null !== this._popper && this._popper.scheduleUpdate()
                }, u._addEventListeners = function () {
                    var t = this;
                    e(this._element).on(d.CLICK, function (e) {
                        e.preventDefault(), e.stopPropagation(), t.toggle()
                    })
                }, u._getConfig = function (i) {
                    return i = s({}, this.constructor.Default, e(this._element).data(), i), a.typeCheckConfig(t, i, this.constructor.DefaultType), i
                }, u._getMenuElement = function () {
                    if (!this._menu) {
                        var t = l._getParentFromElement(this._element);
                        this._menu = e(t).find(T)[0]
                    }
                    return this._menu
                }, u._getPlacement = function () {
                    var t = e(this._element).parent(), i = P;
                    return t.hasClass(f) ? (i = S, e(this._menu).hasClass(v) && (i = E)) : t.hasClass(m) ? i = k : t.hasClass(g) ? i = j : e(this._menu).hasClass(v) && (i = I), i
                }, u._detectNavbar = function () {
                    return e(this._element).closest(".navbar").length > 0
                }, u._getPopperConfig = function () {
                    var e = this, t = {};
                    return "function" == typeof this._config.offset ? t.fn = function (t) {
                        return t.offsets = s({}, t.offsets, e._config.offset(t.offsets) || {}), t
                    } : t.offset = this._config.offset, {
                        placement: this._getPlacement(),
                        modifiers: {
                            offset: t,
                            flip: {enabled: this._config.flip},
                            preventOverflow: {boundariesElement: this._config.boundary}
                        }
                    }
                }, l._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data(n);
                        if (i || (i = new l(this, "object" == typeof t ? t : null), e(this).data(n, i)), "string" == typeof t) {
                            if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, l._clearMenus = function (t) {
                    if (!t || 3 !== t.which && ("keyup" !== t.type || 9 === t.which)) for (var i = e.makeArray(e(w)), r = 0; r < i.length; r++) {
                        var s = l._getParentFromElement(i[r]), a = e(i[r]).data(n), o = {relatedTarget: i[r]};
                        if (a) {
                            var u = a._menu;
                            if (e(s).hasClass(p) && !(t && ("click" === t.type && /input|textarea/i.test(t.target.tagName) || "keyup" === t.type && 9 === t.which) && e.contains(s, t.target))) {
                                var c = e.Event(d.HIDE, o);
                                e(s).trigger(c), c.isDefaultPrevented() || ("ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), i[r].setAttribute("aria-expanded", "false"), e(u).removeClass(p), e(s).removeClass(p).trigger(e.Event(d.HIDDEN, o)))
                            }
                        }
                    }
                }, l._getParentFromElement = function (t) {
                    var i, n = a.getSelectorFromElement(t);
                    return n && (i = e(n)[0]), i || t.parentNode
                }, l._dataApiKeydownHandler = function (t) {
                    if ((/input|textarea/i.test(t.target.tagName) ? !(32 === t.which || 27 !== t.which && (40 !== t.which && 38 !== t.which || e(t.target).closest(T).length)) : c.test(t.which)) && (t.preventDefault(), t.stopPropagation(), !this.disabled && !e(this).hasClass(h))) {
                        var i = l._getParentFromElement(this), n = e(i).hasClass(p);
                        if ((n || 27 === t.which && 32 === t.which) && (!n || 27 !== t.which && 32 !== t.which)) {
                            var r = e(i).find(C).get();
                            if (r.length) {
                                var s = r.indexOf(t.target);
                                38 === t.which && s > 0 && s--, 40 === t.which && s < r.length - 1 && s++, 0 > s && (s = 0), r[s].focus()
                            }
                        } else {
                            if (27 === t.which) {
                                var a = e(i).find(w)[0];
                                e(a).trigger("focus")
                            }
                            e(this).trigger("click")
                        }
                    }
                }, r(l, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return A
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return D
                    }
                }]), l
            }();
        return e(document).on(d.KEYDOWN_DATA_API, w, M._dataApiKeydownHandler).on(d.KEYDOWN_DATA_API, T, M._dataApiKeydownHandler).on(d.CLICK_DATA_API + " " + d.KEYUP_DATA_API, M._clearMenus).on(d.CLICK_DATA_API, w, function (t) {
            t.preventDefault(), t.stopPropagation(), M._jQueryInterface.call(e(this), "toggle")
        }).on(d.CLICK_DATA_API, _, function (e) {
            e.stopPropagation()
        }), e.fn[t] = M._jQueryInterface, e.fn[t].Constructor = M, e.fn[t].noConflict = function () {
            return e.fn[t] = u, M._jQueryInterface
        }, M
    }(t), h = function (e) {
        var t = "modal", i = "bs.modal", n = "." + i, o = e.fn.modal,
            l = {backdrop: !0, keyboard: !0, focus: !0, show: !0},
            u = {backdrop: "(boolean|string)", keyboard: "boolean", focus: "boolean", show: "boolean"}, c = {
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                FOCUSIN: "focusin" + n,
                RESIZE: "resize" + n,
                CLICK_DISMISS: "click.dismiss" + n,
                KEYDOWN_DISMISS: "keydown.dismiss" + n,
                MOUSEUP_DISMISS: "mouseup.dismiss" + n,
                MOUSEDOWN_DISMISS: "mousedown.dismiss" + n,
                CLICK_DATA_API: "click" + n + ".data-api"
            }, d = "modal-scrollbar-measure", h = "modal-backdrop", p = "modal-open", f = "fade", m = "show", g = {
                DIALOG: ".modal-dialog",
                DATA_TOGGLE: '[data-toggle="modal"]',
                DATA_DISMISS: '[data-dismiss="modal"]',
                FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
                STICKY_CONTENT: ".sticky-top",
                NAVBAR_TOGGLER: ".navbar-toggler"
            }, v = function () {
                function o(t, i) {
                    this._config = this._getConfig(i), this._element = t, this._dialog = e(t).find(g.DIALOG)[0], this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._originalBodyPadding = 0, this._scrollbarWidth = 0
                }

                var v = o.prototype;
                return v.toggle = function (e) {
                    return this._isShown ? this.hide() : this.show(e)
                }, v.show = function (t) {
                    var i = this;
                    if (!this._isTransitioning && !this._isShown) {
                        a.supportsTransitionEnd() && e(this._element).hasClass(f) && (this._isTransitioning = !0);
                        var n = e.Event(c.SHOW, {relatedTarget: t});
                        e(this._element).trigger(n), this._isShown || n.isDefaultPrevented() || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), e(document.body).addClass(p), this._setEscapeEvent(), this._setResizeEvent(), e(this._element).on(c.CLICK_DISMISS, g.DATA_DISMISS, function (e) {
                            return i.hide(e)
                        }), e(this._dialog).on(c.MOUSEDOWN_DISMISS, function () {
                            e(i._element).one(c.MOUSEUP_DISMISS, function (t) {
                                e(t.target).is(i._element) && (i._ignoreBackdropClick = !0)
                            })
                        }), this._showBackdrop(function () {
                            return i._showElement(t)
                        }))
                    }
                }, v.hide = function (t) {
                    var i = this;
                    if (t && t.preventDefault(), !this._isTransitioning && this._isShown) {
                        var n = e.Event(c.HIDE);
                        if (e(this._element).trigger(n), this._isShown && !n.isDefaultPrevented()) {
                            this._isShown = !1;
                            var r = a.supportsTransitionEnd() && e(this._element).hasClass(f);
                            r && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), e(document).off(c.FOCUSIN), e(this._element).removeClass(m), e(this._element).off(c.CLICK_DISMISS), e(this._dialog).off(c.MOUSEDOWN_DISMISS), r ? e(this._element).one(a.TRANSITION_END, function (e) {
                                return i._hideModal(e)
                            }).emulateTransitionEnd(300) : this._hideModal()
                        }
                    }
                }, v.dispose = function () {
                    e.removeData(this._element, i), e(window, document, this._element, this._backdrop).off(n), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._scrollbarWidth = null
                }, v.handleUpdate = function () {
                    this._adjustDialog()
                }, v._getConfig = function (e) {
                    return e = s({}, l, e), a.typeCheckConfig(t, e, u), e
                }, v._showElement = function (t) {
                    var i = this, n = a.supportsTransitionEnd() && e(this._element).hasClass(f);
                    this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.scrollTop = 0, n && a.reflow(this._element), e(this._element).addClass(m), this._config.focus && this._enforceFocus();
                    var r = e.Event(c.SHOWN, {relatedTarget: t}), s = function () {
                        i._config.focus && i._element.focus(), i._isTransitioning = !1, e(i._element).trigger(r)
                    };
                    n ? e(this._dialog).one(a.TRANSITION_END, s).emulateTransitionEnd(300) : s()
                }, v._enforceFocus = function () {
                    var t = this;
                    e(document).off(c.FOCUSIN).on(c.FOCUSIN, function (i) {
                        document === i.target || t._element === i.target || e(t._element).has(i.target).length || t._element.focus()
                    })
                }, v._setEscapeEvent = function () {
                    var t = this;
                    this._isShown && this._config.keyboard ? e(this._element).on(c.KEYDOWN_DISMISS, function (e) {
                        27 === e.which && (e.preventDefault(), t.hide())
                    }) : this._isShown || e(this._element).off(c.KEYDOWN_DISMISS)
                }, v._setResizeEvent = function () {
                    var t = this;
                    this._isShown ? e(window).on(c.RESIZE, function (e) {
                        return t.handleUpdate(e)
                    }) : e(window).off(c.RESIZE)
                }, v._hideModal = function () {
                    var t = this;
                    this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._isTransitioning = !1, this._showBackdrop(function () {
                        e(document.body).removeClass(p), t._resetAdjustments(), t._resetScrollbar(), e(t._element).trigger(c.HIDDEN)
                    })
                }, v._removeBackdrop = function () {
                    this._backdrop && (e(this._backdrop).remove(), this._backdrop = null)
                }, v._showBackdrop = function (t) {
                    var i = this, n = e(this._element).hasClass(f) ? f : "";
                    if (this._isShown && this._config.backdrop) {
                        var r = a.supportsTransitionEnd() && n;
                        if (this._backdrop = document.createElement("div"), this._backdrop.className = h, n && e(this._backdrop).addClass(n), e(this._backdrop).appendTo(document.body), e(this._element).on(c.CLICK_DISMISS, function (e) {
                                i._ignoreBackdropClick ? i._ignoreBackdropClick = !1 : e.target === e.currentTarget && ("static" === i._config.backdrop ? i._element.focus() : i.hide())
                            }), r && a.reflow(this._backdrop), e(this._backdrop).addClass(m), !t) return;
                        if (!r) return void t();
                        e(this._backdrop).one(a.TRANSITION_END, t).emulateTransitionEnd(150)
                    } else if (!this._isShown && this._backdrop) {
                        e(this._backdrop).removeClass(m);
                        var s = function () {
                            i._removeBackdrop(), t && t()
                        };
                        a.supportsTransitionEnd() && e(this._element).hasClass(f) ? e(this._backdrop).one(a.TRANSITION_END, s).emulateTransitionEnd(150) : s()
                    } else t && t()
                }, v._adjustDialog = function () {
                    var e = this._element.scrollHeight > document.documentElement.clientHeight;
                    !this._isBodyOverflowing && e && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !e && (this._element.style.paddingRight = this._scrollbarWidth + "px")
                }, v._resetAdjustments = function () {
                    this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
                }, v._checkScrollbar = function () {
                    var e = document.body.getBoundingClientRect();
                    this._isBodyOverflowing = e.left + e.right < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
                }, v._setScrollbar = function () {
                    var t = this;
                    if (this._isBodyOverflowing) {
                        e(g.FIXED_CONTENT).each(function (i, n) {
                            var r = e(n)[0].style.paddingRight, s = e(n).css("padding-right");
                            e(n).data("padding-right", r).css("padding-right", parseFloat(s) + t._scrollbarWidth + "px")
                        }), e(g.STICKY_CONTENT).each(function (i, n) {
                            var r = e(n)[0].style.marginRight, s = e(n).css("margin-right");
                            e(n).data("margin-right", r).css("margin-right", parseFloat(s) - t._scrollbarWidth + "px")
                        }), e(g.NAVBAR_TOGGLER).each(function (i, n) {
                            var r = e(n)[0].style.marginRight, s = e(n).css("margin-right");
                            e(n).data("margin-right", r).css("margin-right", parseFloat(s) + t._scrollbarWidth + "px")
                        });
                        var i = document.body.style.paddingRight, n = e("body").css("padding-right");
                        e("body").data("padding-right", i).css("padding-right", parseFloat(n) + this._scrollbarWidth + "px")
                    }
                }, v._resetScrollbar = function () {
                    e(g.FIXED_CONTENT).each(function (t, i) {
                        var n = e(i).data("padding-right");
                        "undefined" != typeof n && e(i).css("padding-right", n).removeData("padding-right")
                    }), e(g.STICKY_CONTENT + ", " + g.NAVBAR_TOGGLER).each(function (t, i) {
                        var n = e(i).data("margin-right");
                        "undefined" != typeof n && e(i).css("margin-right", n).removeData("margin-right")
                    });
                    var t = e("body").data("padding-right");
                    "undefined" != typeof t && e("body").css("padding-right", t).removeData("padding-right")
                }, v._getScrollbarWidth = function () {
                    var e = document.createElement("div");
                    e.className = d, document.body.appendChild(e);
                    var t = e.getBoundingClientRect().width - e.clientWidth;
                    return document.body.removeChild(e), t
                }, o._jQueryInterface = function (t, n) {
                    return this.each(function () {
                        var r = e(this).data(i), a = s({}, o.Default, e(this).data(), "object" == typeof t && t);
                        if (r || (r = new o(this, a), e(this).data(i, r)), "string" == typeof t) {
                            if ("undefined" == typeof r[t]) throw new Error('No method named "' + t + '"');
                            r[t](n)
                        } else a.show && r.show(n)
                    })
                }, r(o, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }]), o
            }();
        return e(document).on(c.CLICK_DATA_API, g.DATA_TOGGLE, function (t) {
            var n, r = this, o = a.getSelectorFromElement(this);
            o && (n = e(o)[0]);
            var l = e(n).data(i) ? "toggle" : s({}, e(n).data(), e(this).data());
            "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault();
            var u = e(n).one(c.SHOW, function (t) {
                t.isDefaultPrevented() || u.one(c.HIDDEN, function () {
                    e(r).is(":visible") && r.focus()
                })
            });
            v._jQueryInterface.call(e(n), l, this)
        }), e.fn.modal = v._jQueryInterface, e.fn.modal.Constructor = v, e.fn.modal.noConflict = function () {
            return e.fn.modal = o, v._jQueryInterface
        }, v
    }(t), p = function (e) {
        var t = "tooltip", n = "bs.tooltip", o = "." + n, l = e.fn[t], u = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
            c = {
                animation: "boolean",
                template: "string",
                title: "(string|element|function)",
                trigger: "string",
                delay: "(number|object)",
                html: "boolean",
                selector: "(string|boolean)",
                placement: "(string|function)",
                offset: "(number|string)",
                container: "(string|element|boolean)",
                fallbackPlacement: "(string|array)",
                boundary: "(string|element)"
            }, d = {AUTO: "auto", TOP: "top", RIGHT: "right", BOTTOM: "bottom", LEFT: "left"}, h = {
                animation: !0,
                template: '<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',
                trigger: "hover focus",
                title: "",
                delay: 0,
                html: !1,
                selector: !1,
                placement: "top",
                offset: 0,
                container: !1,
                fallbackPlacement: "flip",
                boundary: "scrollParent"
            }, p = "show", f = "out", m = {
                HIDE: "hide" + o,
                HIDDEN: "hidden" + o,
                SHOW: "show" + o,
                SHOWN: "shown" + o,
                INSERTED: "inserted" + o,
                CLICK: "click" + o,
                FOCUSIN: "focusin" + o,
                FOCUSOUT: "focusout" + o,
                MOUSEENTER: "mouseenter" + o,
                MOUSELEAVE: "mouseleave" + o
            }, g = "fade", v = "show", y = ".tooltip-inner", b = ".arrow", w = "hover", _ = "focus", T = "click",
            x = "manual", C = function () {
                function l(e, t) {
                    if ("undefined" == typeof i) throw new Error("Bootstrap tooltips require Popper.js (https://popper.js.org)");
                    this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = e, this.config = this._getConfig(t), this.tip = null, this._setListeners()
                }

                var C = l.prototype;
                return C.enable = function () {
                    this._isEnabled = !0
                }, C.disable = function () {
                    this._isEnabled = !1
                }, C.toggleEnabled = function () {
                    this._isEnabled = !this._isEnabled
                }, C.toggle = function (t) {
                    if (this._isEnabled) if (t) {
                        var i = this.constructor.DATA_KEY, n = e(t.currentTarget).data(i);
                        n || (n = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(i, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (e(this.getTipElement()).hasClass(v)) return void this._leave(null, this);
                        this._enter(null, this)
                    }
                }, C.dispose = function () {
                    clearTimeout(this._timeout), e.removeData(this.element, this.constructor.DATA_KEY), e(this.element).off(this.constructor.EVENT_KEY), e(this.element).closest(".modal").off("hide.bs.modal"), this.tip && e(this.tip).remove(), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, null !== this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
                }, C.show = function () {
                    var t = this;
                    if ("none" === e(this.element).css("display")) throw new Error("Please use show on visible elements");
                    var n = e.Event(this.constructor.Event.SHOW);
                    if (this.isWithContent() && this._isEnabled) {
                        e(this.element).trigger(n);
                        var r = e.contains(this.element.ownerDocument.documentElement, this.element);
                        if (n.isDefaultPrevented() || !r) return;
                        var s = this.getTipElement(), o = a.getUID(this.constructor.NAME);
                        s.setAttribute("id", o), this.element.setAttribute("aria-describedby", o), this.setContent(), this.config.animation && e(s).addClass(g);
                        var u = "function" == typeof this.config.placement ? this.config.placement.call(this, s, this.element) : this.config.placement,
                            c = this._getAttachment(u);
                        this.addAttachmentClass(c);
                        var d = !1 === this.config.container ? document.body : e(this.config.container);
                        e(s).data(this.constructor.DATA_KEY, this), e.contains(this.element.ownerDocument.documentElement, this.tip) || e(s).appendTo(d), e(this.element).trigger(this.constructor.Event.INSERTED), this._popper = new i(this.element, s, {
                            placement: c,
                            modifiers: {
                                offset: {offset: this.config.offset},
                                flip: {behavior: this.config.fallbackPlacement},
                                arrow: {element: b},
                                preventOverflow: {boundariesElement: this.config.boundary}
                            },
                            onCreate: function (e) {
                                e.originalPlacement !== e.placement && t._handlePopperPlacementChange(e)
                            },
                            onUpdate: function (e) {
                                t._handlePopperPlacementChange(e)
                            }
                        }), e(s).addClass(v), "ontouchstart" in document.documentElement && e("body").children().on("mouseover", null, e.noop);
                        var h = function () {
                            t.config.animation && t._fixTransition();
                            var i = t._hoverState;
                            t._hoverState = null, e(t.element).trigger(t.constructor.Event.SHOWN), i === f && t._leave(null, t)
                        };
                        a.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(this.tip).one(a.TRANSITION_END, h).emulateTransitionEnd(l._TRANSITION_DURATION) : h()
                    }
                }, C.hide = function (t) {
                    var i = this, n = this.getTipElement(), r = e.Event(this.constructor.Event.HIDE), s = function () {
                        i._hoverState !== p && n.parentNode && n.parentNode.removeChild(n), i._cleanTipClass(), i.element.removeAttribute("aria-describedby"), e(i.element).trigger(i.constructor.Event.HIDDEN), null !== i._popper && i._popper.destroy(), t && t()
                    };
                    e(this.element).trigger(r), r.isDefaultPrevented() || (e(n).removeClass(v), "ontouchstart" in document.documentElement && e("body").children().off("mouseover", null, e.noop), this._activeTrigger[T] = !1, this._activeTrigger[_] = !1, this._activeTrigger[w] = !1, a.supportsTransitionEnd() && e(this.tip).hasClass(g) ? e(n).one(a.TRANSITION_END, s).emulateTransitionEnd(150) : s(), this._hoverState = "")
                }, C.update = function () {
                    null !== this._popper && this._popper.scheduleUpdate()
                }, C.isWithContent = function () {
                    return Boolean(this.getTitle())
                }, C.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-tooltip-" + t)
                }, C.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, C.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(y), this.getTitle()), t.removeClass(g + " " + v)
                }, C.setElementContent = function (t, i) {
                    var n = this.config.html;
                    "object" == typeof i && (i.nodeType || i.jquery) ? n ? e(i).parent().is(t) || t.empty().append(i) : t.text(e(i).text()) : t[n ? "html" : "text"](i)
                }, C.getTitle = function () {
                    var e = this.element.getAttribute("data-original-title");
                    return e || (e = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), e
                }, C._getAttachment = function (e) {
                    return d[e.toUpperCase()]
                }, C._setListeners = function () {
                    var t = this;
                    this.config.trigger.split(" ").forEach(function (i) {
                        if ("click" === i) e(t.element).on(t.constructor.Event.CLICK, t.config.selector, function (e) {
                            return t.toggle(e)
                        }); else if (i !== x) {
                            var n = i === w ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                                r = i === w ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                            e(t.element).on(n, t.config.selector, function (e) {
                                return t._enter(e)
                            }).on(r, t.config.selector, function (e) {
                                return t._leave(e)
                            })
                        }
                        e(t.element).closest(".modal").on("hide.bs.modal", function () {
                            return t.hide()
                        })
                    }), this.config.selector ? this.config = s({}, this.config, {
                        trigger: "manual",
                        selector: ""
                    }) : this._fixTitle()
                }, C._fixTitle = function () {
                    var e = typeof this.element.getAttribute("data-original-title");
                    (this.element.getAttribute("title") || "string" !== e) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
                }, C._enter = function (t, i) {
                    var n = this.constructor.DATA_KEY;
                    (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusin" === t.type ? _ : w] = !0), e(i.getTipElement()).hasClass(v) || i._hoverState === p ? i._hoverState = p : (clearTimeout(i._timeout), i._hoverState = p, i.config.delay && i.config.delay.show ? i._timeout = setTimeout(function () {
                        i._hoverState === p && i.show()
                    }, i.config.delay.show) : i.show())
                }, C._leave = function (t, i) {
                    var n = this.constructor.DATA_KEY;
                    (i = i || e(t.currentTarget).data(n)) || (i = new this.constructor(t.currentTarget, this._getDelegateConfig()), e(t.currentTarget).data(n, i)), t && (i._activeTrigger["focusout" === t.type ? _ : w] = !1), i._isWithActiveTrigger() || (clearTimeout(i._timeout), i._hoverState = f, i.config.delay && i.config.delay.hide ? i._timeout = setTimeout(function () {
                        i._hoverState === f && i.hide()
                    }, i.config.delay.hide) : i.hide())
                }, C._isWithActiveTrigger = function () {
                    for (var e in this._activeTrigger) if (this._activeTrigger[e]) return !0;
                    return !1
                }, C._getConfig = function (i) {
                    return "number" == typeof(i = s({}, this.constructor.Default, e(this.element).data(), i)).delay && (i.delay = {
                        show: i.delay,
                        hide: i.delay
                    }), "number" == typeof i.title && (i.title = i.title.toString()), "number" == typeof i.content && (i.content = i.content.toString()), a.typeCheckConfig(t, i, this.constructor.DefaultType), i
                }, C._getDelegateConfig = function () {
                    var e = {};
                    if (this.config) for (var t in this.config) this.constructor.Default[t] !== this.config[t] && (e[t] = this.config[t]);
                    return e
                }, C._cleanTipClass = function () {
                    var t = e(this.getTipElement()), i = t.attr("class").match(u);
                    null !== i && i.length > 0 && t.removeClass(i.join(""))
                }, C._handlePopperPlacementChange = function (e) {
                    this._cleanTipClass(), this.addAttachmentClass(this._getAttachment(e.placement))
                }, C._fixTransition = function () {
                    var t = this.getTipElement(), i = this.config.animation;
                    null === t.getAttribute("x-placement") && (e(t).removeClass(g), this.config.animation = !1, this.hide(), this.show(), this.config.animation = i)
                }, l._jQueryInterface = function (t) {
                    return this.each(function () {
                        var i = e(this).data(n), r = "object" == typeof t && t;
                        if ((i || !/dispose|hide/.test(t)) && (i || (i = new l(this, r), e(this).data(n, i)), "string" == typeof t)) {
                            if ("undefined" == typeof i[t]) throw new Error('No method named "' + t + '"');
                            i[t]()
                        }
                    })
                }, r(l, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return h
                    }
                }, {
                    key: "NAME", get: function () {
                        return t
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return n
                    }
                }, {
                    key: "Event", get: function () {
                        return m
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return o
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return c
                    }
                }]), l
            }();
        return e.fn[t] = C._jQueryInterface, e.fn[t].Constructor = C, e.fn[t].noConflict = function () {
            return e.fn[t] = l, C._jQueryInterface
        }, C
    }(t), f = function (e) {
        var t = "popover", i = "bs.popover", n = "." + i, a = e.fn[t], o = new RegExp("(^|\\s)bs-popover\\S+", "g"),
            l = s({}, p.Default, {
                placement: "right",
                trigger: "click",
                content: "",
                template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
            }), u = s({}, p.DefaultType, {content: "(string|element|function)"}), c = "fade", d = "show",
            h = ".popover-header", f = ".popover-body", m = {
                HIDE: "hide" + n,
                HIDDEN: "hidden" + n,
                SHOW: "show" + n,
                SHOWN: "shown" + n,
                INSERTED: "inserted" + n,
                CLICK: "click" + n,
                FOCUSIN: "focusin" + n,
                FOCUSOUT: "focusout" + n,
                MOUSEENTER: "mouseenter" + n,
                MOUSELEAVE: "mouseleave" + n
            }, g = function (s) {
                function a() {
                    return s.apply(this, arguments) || this
                }

                !function (e, t) {
                    e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e.__proto__ = t
                }(a, s);
                var p = a.prototype;
                return p.isWithContent = function () {
                    return this.getTitle() || this._getContent()
                }, p.addAttachmentClass = function (t) {
                    e(this.getTipElement()).addClass("bs-popover-" + t)
                }, p.getTipElement = function () {
                    return this.tip = this.tip || e(this.config.template)[0], this.tip
                }, p.setContent = function () {
                    var t = e(this.getTipElement());
                    this.setElementContent(t.find(h), this.getTitle());
                    var i = this._getContent();
                    "function" == typeof i && (i = i.call(this.element)), this.setElementContent(t.find(f), i), t.removeClass(c + " " + d)
                }, p._getContent = function () {
                    return this.element.getAttribute("data-content") || this.config.content
                }, p._cleanTipClass = function () {
                    var t = e(this.getTipElement()), i = t.attr("class").match(o);
                    null !== i && i.length > 0 && t.removeClass(i.join(""))
                }, a._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data(i), r = "object" == typeof t ? t : null;
                        if ((n || !/destroy|hide/.test(t)) && (n || (n = new a(this, r), e(this).data(i, n)), "string" == typeof t)) {
                            if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, r(a, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }, {
                    key: "NAME", get: function () {
                        return t
                    }
                }, {
                    key: "DATA_KEY", get: function () {
                        return i
                    }
                }, {
                    key: "Event", get: function () {
                        return m
                    }
                }, {
                    key: "EVENT_KEY", get: function () {
                        return n
                    }
                }, {
                    key: "DefaultType", get: function () {
                        return u
                    }
                }]), a
            }(p);
        return e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = a, g._jQueryInterface
        }, g
    }(t), m = function (e) {
        var t = "scrollspy", i = "bs.scrollspy", n = "." + i, o = e.fn[t], l = {offset: 10, method: "auto", target: ""},
            u = {offset: "number", method: "string", target: "(string|element)"},
            c = {ACTIVATE: "activate" + n, SCROLL: "scroll" + n, LOAD_DATA_API: "load" + n + ".data-api"},
            d = "dropdown-item", h = "active", p = {
                DATA_SPY: '[data-spy="scroll"]',
                ACTIVE: ".active",
                NAV_LIST_GROUP: ".nav, .list-group",
                NAV_LINKS: ".nav-link",
                NAV_ITEMS: ".nav-item",
                LIST_ITEMS: ".list-group-item",
                DROPDOWN: ".dropdown",
                DROPDOWN_ITEMS: ".dropdown-item",
                DROPDOWN_TOGGLE: ".dropdown-toggle"
            }, f = "offset", m = "position", g = function () {
                function o(t, i) {
                    var n = this;
                    this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(i), this._selector = this._config.target + " " + p.NAV_LINKS + "," + this._config.target + " " + p.LIST_ITEMS + "," + this._config.target + " " + p.DROPDOWN_ITEMS, this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, e(this._scrollElement).on(c.SCROLL, function (e) {
                        return n._process(e)
                    }), this.refresh(), this._process()
                }

                var g = o.prototype;
                return g.refresh = function () {
                    var t = this, i = this._scrollElement !== this._scrollElement.window ? m : f,
                        n = "auto" === this._config.method ? i : this._config.method,
                        r = n === m ? this._getScrollTop() : 0;
                    this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), e.makeArray(e(this._selector)).map(function (t) {
                        var i, s = a.getSelectorFromElement(t);
                        if (s && (i = e(s)[0]), i) {
                            var o = i.getBoundingClientRect();
                            if (o.width || o.height) return [e(i)[n]().top + r, s]
                        }
                        return null
                    }).filter(function (e) {
                        return e
                    }).sort(function (e, t) {
                        return e[0] - t[0]
                    }).forEach(function (e) {
                        t._offsets.push(e[0]), t._targets.push(e[1])
                    })
                }, g.dispose = function () {
                    e.removeData(this._element, i), e(this._scrollElement).off(n), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
                }, g._getConfig = function (i) {
                    if ("string" != typeof(i = s({}, l, i)).target) {
                        var n = e(i.target).attr("id");
                        n || (n = a.getUID(t), e(i.target).attr("id", n)), i.target = "#" + n
                    }
                    return a.typeCheckConfig(t, i, u), i
                }, g._getScrollTop = function () {
                    return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
                }, g._getScrollHeight = function () {
                    return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
                }, g._getOffsetHeight = function () {
                    return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
                }, g._process = function () {
                    var e = this._getScrollTop() + this._config.offset, t = this._getScrollHeight(),
                        i = this._config.offset + t - this._getOffsetHeight();
                    if (this._scrollHeight !== t && this.refresh(), e >= i) {
                        var n = this._targets[this._targets.length - 1];
                        this._activeTarget !== n && this._activate(n)
                    } else {
                        if (this._activeTarget && e < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                        for (var r = this._offsets.length; r--;) this._activeTarget !== this._targets[r] && e >= this._offsets[r] && ("undefined" == typeof this._offsets[r + 1] || e < this._offsets[r + 1]) && this._activate(this._targets[r])
                    }
                }, g._activate = function (t) {
                    this._activeTarget = t, this._clear();
                    var i = this._selector.split(",");
                    i = i.map(function (e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    });
                    var n = e(i.join(","));
                    n.hasClass(d) ? (n.closest(p.DROPDOWN).find(p.DROPDOWN_TOGGLE).addClass(h), n.addClass(h)) : (n.addClass(h), n.parents(p.NAV_LIST_GROUP).prev(p.NAV_LINKS + ", " + p.LIST_ITEMS).addClass(h), n.parents(p.NAV_LIST_GROUP).prev(p.NAV_ITEMS).children(p.NAV_LINKS).addClass(h)), e(this._scrollElement).trigger(c.ACTIVATE, {relatedTarget: t})
                }, g._clear = function () {
                    e(this._selector).filter(p.ACTIVE).removeClass(h)
                }, o._jQueryInterface = function (t) {
                    return this.each(function () {
                        var n = e(this).data(i);
                        if (n || (n = new o(this, "object" == typeof t && t), e(this).data(i, n)), "string" == typeof t) {
                            if ("undefined" == typeof n[t]) throw new Error('No method named "' + t + '"');
                            n[t]()
                        }
                    })
                }, r(o, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }, {
                    key: "Default", get: function () {
                        return l
                    }
                }]), o
            }();
        return e(window).on(c.LOAD_DATA_API, function () {
            for (var t = e.makeArray(e(p.DATA_SPY)), i = t.length; i--;) {
                var n = e(t[i]);
                g._jQueryInterface.call(n, n.data())
            }
        }), e.fn[t] = g._jQueryInterface, e.fn[t].Constructor = g, e.fn[t].noConflict = function () {
            return e.fn[t] = o, g._jQueryInterface
        }, g
    }(t), g = function (e) {
        var t = "bs.tab", i = "." + t, n = e.fn.tab, s = {
                HIDE: "hide" + i,
                HIDDEN: "hidden" + i,
                SHOW: "show" + i,
                SHOWN: "shown" + i,
                CLICK_DATA_API: "click.bs.tab.data-api"
            }, o = "dropdown-menu", l = "active", u = "disabled", c = "fade", d = "show", h = ".dropdown",
            p = ".nav, .list-group", f = ".active", m = "> li > .active",
            g = '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', v = ".dropdown-toggle",
            y = "> .dropdown-menu .active", b = function () {
                function i(e) {
                    this._element = e
                }

                var n = i.prototype;
                return n.show = function () {
                    var t = this;
                    if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && e(this._element).hasClass(l) || e(this._element).hasClass(u))) {
                        var i, n, r = e(this._element).closest(p)[0], o = a.getSelectorFromElement(this._element);
                        if (r) {
                            var c = "UL" === r.nodeName ? m : f;
                            n = (n = e.makeArray(e(r).find(c)))[n.length - 1]
                        }
                        var d = e.Event(s.HIDE, {relatedTarget: this._element}), h = e.Event(s.SHOW, {relatedTarget: n});
                        if (n && e(n).trigger(d), e(this._element).trigger(h), !h.isDefaultPrevented() && !d.isDefaultPrevented()) {
                            o && (i = e(o)[0]), this._activate(this._element, r);
                            var g = function () {
                                var i = e.Event(s.HIDDEN, {relatedTarget: t._element}),
                                    r = e.Event(s.SHOWN, {relatedTarget: n});
                                e(n).trigger(i), e(t._element).trigger(r)
                            };
                            i ? this._activate(i, i.parentNode, g) : g()
                        }
                    }
                }, n.dispose = function () {
                    e.removeData(this._element, t), this._element = null
                }, n._activate = function (t, i, n) {
                    var r = this, s = ("UL" === i.nodeName ? e(i).find(m) : e(i).children(f))[0],
                        o = n && a.supportsTransitionEnd() && s && e(s).hasClass(c), l = function () {
                            return r._transitionComplete(t, s, n)
                        };
                    s && o ? e(s).one(a.TRANSITION_END, l).emulateTransitionEnd(150) : l()
                }, n._transitionComplete = function (t, i, n) {
                    if (i) {
                        e(i).removeClass(d + " " + l);
                        var r = e(i.parentNode).find(y)[0];
                        r && e(r).removeClass(l), "tab" === i.getAttribute("role") && i.setAttribute("aria-selected", !1)
                    }
                    if (e(t).addClass(l), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), a.reflow(t), e(t).addClass(d), t.parentNode && e(t.parentNode).hasClass(o)) {
                        var s = e(t).closest(h)[0];
                        s && e(s).find(v).addClass(l), t.setAttribute("aria-expanded", !0)
                    }
                    n && n()
                }, i._jQueryInterface = function (n) {
                    return this.each(function () {
                        var r = e(this), s = r.data(t);
                        if (s || (s = new i(this), r.data(t, s)), "string" == typeof n) {
                            if ("undefined" == typeof s[n]) throw new Error('No method named "' + n + '"');
                            s[n]()
                        }
                    })
                }, r(i, null, [{
                    key: "VERSION", get: function () {
                        return "4.0.0-beta.3"
                    }
                }]), i
            }();
        return e(document).on(s.CLICK_DATA_API, g, function (t) {
            t.preventDefault(), b._jQueryInterface.call(e(this), "show")
        }), e.fn.tab = b._jQueryInterface, e.fn.tab.Constructor = b, e.fn.tab.noConflict = function () {
            return e.fn.tab = n, b._jQueryInterface
        }, b
    }(t);
    !function (e) {
        if ("undefined" == typeof e) throw new Error("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");
        var t = e.fn.jquery.split(" ")[0].split(".");
        if (t[0] < 2 && t[1] < 9 || 1 === t[0] && 9 === t[1] && t[2] < 1 || t[0] >= 4) throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")
    }(t), e.Util = a, e.Alert = o, e.Button = l, e.Carousel = u, e.Collapse = c, e.Dropdown = d, e.Modal = h, e.Popover = f, e.Scrollspy = m, e.Tab = g, e.Tooltip = p, Object.defineProperty(e, "__esModule", {value: !0})
}), !function (e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : "object" == typeof module && module.exports ? module.exports = e(require("jquery")) : e(jQuery)
}(function (e) {
    e.extend(e.fn, {
        validate: function (t) {
            if (!this.length) return void(t && t.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var i = e.data(this[0], "validator");
            return i ? i : (this.attr("novalidate", "novalidate"), i = new e.validator(t, this[0]), e.data(this[0], "validator", i), i.settings.onsubmit && (this.on("click.validate", ":submit", function (t) {
                i.submitButton = t.currentTarget, e(this).hasClass("cancel") && (i.cancelSubmit = !0), void 0 !== e(this).attr("formnovalidate") && (i.cancelSubmit = !0)
            }), this.on("submit.validate", function (t) {
                function n() {
                    var n, r;
                    return i.submitButton && (i.settings.submitHandler || i.formSubmitted) && (n = e("<input type='hidden'/>").attr("name", i.submitButton.name).val(e(i.submitButton).val()).appendTo(i.currentForm)), !i.settings.submitHandler || (r = i.settings.submitHandler.call(i, i.currentForm, t), n && n.remove(), void 0 !== r && r)
                }

                return i.settings.debug && t.preventDefault(), i.cancelSubmit ? (i.cancelSubmit = !1, n()) : i.form() ? i.pendingRequest ? (i.formSubmitted = !0, !1) : n() : (i.focusInvalid(), !1)
            })), i)
        }, valid: function () {
            var t, i, n;
            return e(this[0]).is("form") ? t = this.validate().form() : (n = [], t = !0, i = e(this[0].form).validate(), this.each(function () {
                t = i.element(this) && t, t || (n = n.concat(i.errorList))
            }), i.errorList = n), t
        }, rules: function (t, i) {
            var n, r, s, a, o, l, u = this[0];
            if (null != u && (!u.form && u.hasAttribute("contenteditable") && (u.form = this.closest("form")[0], u.name = this.attr("name")), null != u.form)) {
                if (t) switch (n = e.data(u.form, "validator").settings, r = n.rules, s = e.validator.staticRules(u), t) {
                    case"add":
                        e.extend(s, e.validator.normalizeRule(i)), delete s.messages, r[u.name] = s, i.messages && (n.messages[u.name] = e.extend(n.messages[u.name], i.messages));
                        break;
                    case"remove":
                        return i ? (l = {}, e.each(i.split(/\s/), function (e, t) {
                            l[t] = s[t], delete s[t]
                        }), l) : (delete r[u.name], s)
                }
                return a = e.validator.normalizeRules(e.extend({}, e.validator.classRules(u), e.validator.attributeRules(u), e.validator.dataRules(u), e.validator.staticRules(u)), u), a.required && (o = a.required, delete a.required, a = e.extend({required: o}, a)), a.remote && (o = a.remote, delete a.remote, a = e.extend(a, {remote: o})), a
            }
        }
    }), e.extend(e.expr.pseudos || e.expr[":"], {
        blank: function (t) {
            return !e.trim("" + e(t).val())
        }, filled: function (t) {
            var i = e(t).val();
            return null !== i && !!e.trim("" + i)
        }, unchecked: function (t) {
            return !e(t).prop("checked")
        }
    }), e.validator = function (t, i) {
        this.settings = e.extend(!0, {}, e.validator.defaults, t), this.currentForm = i, this.init()
    }, e.validator.format = function (t, i) {
        return 1 === arguments.length ? function () {
            var i = e.makeArray(arguments);
            return i.unshift(t), e.validator.format.apply(this, i)
        } : void 0 === i ? t : (arguments.length > 2 && i.constructor !== Array && (i = e.makeArray(arguments).slice(1)), i.constructor !== Array && (i = [i]), e.each(i, function (e, i) {
            t = t.replace(new RegExp("\\{" + e + "\\}", "g"), function () {
                return i
            })
        }), t)
    }, e.extend(e.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            pendingClass: "pending",
            validClass: "valid",
            errorElement: "label",
            focusCleanup: !1,
            focusInvalid: !0,
            errorContainer: e([]),
            errorLabelContainer: e([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (e) {
                this.lastActive = e, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, e, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(e)))
            },
            onfocusout: function (e) {
                this.checkable(e) || !(e.name in this.submitted) && this.optional(e) || this.element(e)
            },
            onkeyup: function (t, i) {
                var n = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
                9 === i.which && "" === this.elementValue(t) || -1 !== e.inArray(i.keyCode, n) || (t.name in this.submitted || t.name in this.invalid) && this.element(t)
            },
            onclick: function (e) {
                e.name in this.submitted ? this.element(e) : e.parentNode.name in this.submitted && this.element(e.parentNode)
            },
            highlight: function (t, i, n) {
                "radio" === t.type ? this.findByName(t.name).addClass(i).removeClass(n) : e(t).addClass(i).removeClass(n)
            },
            unhighlight: function (t, i, n) {
                "radio" === t.type ? this.findByName(t.name).removeClass(i).addClass(n) : e(t).removeClass(i).addClass(n)
            }
        },
        setDefaults: function (t) {
            e.extend(e.validator.defaults, t)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            equalTo: "Please enter the same value again.",
            maxlength: e.validator.format("Please enter no more than {0} characters."),
            minlength: e.validator.format("Please enter at least {0} characters."),
            rangelength: e.validator.format("Please enter a value between {0} and {1} characters long."),
            range: e.validator.format("Please enter a value between {0} and {1}."),
            max: e.validator.format("Please enter a value less than or equal to {0}."),
            min: e.validator.format("Please enter a value greater than or equal to {0}."),
            step: e.validator.format("Please enter a multiple of {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function t(t) {
                    !this.form && this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = e(this).attr("name"));
                    var i = e.data(this.form, "validator"), n = "on" + t.type.replace(/^validate/, ""), r = i.settings;
                    r[n] && !e(this).is(r.ignore) && r[n].call(i, this, t)
                }

                this.labelContainer = e(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || e(this.currentForm), this.containers = e(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var i, n = this.groups = {};
                e.each(this.settings.groups, function (t, i) {
                    "string" == typeof i && (i = i.split(/\s/)), e.each(i, function (e, i) {
                        n[i] = t
                    })
                }), i = this.settings.rules, e.each(i, function (t, n) {
                    i[t] = e.validator.normalizeRule(n)
                }), e(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable], [type='button']", t).on("click.validate", "select, option, [type='radio'], [type='checkbox']", t), this.settings.invalidHandler && e(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), e.extend(this.submitted, this.errorMap), this.invalid = e.extend({}, this.errorMap), this.valid() || e(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var e = 0, t = this.currentElements = this.elements(); t[e]; e++) this.check(t[e]);
                return this.valid()
            }, element: function (t) {
                var i, n, r = this.clean(t), s = this.validationTargetFor(r), a = this, o = !0;
                return void 0 === s ? delete this.invalid[r.name] : (this.prepareElement(s), this.currentElements = e(s), n = this.groups[s.name], n && e.each(this.groups, function (e, t) {
                    t === n && e !== s.name && (r = a.validationTargetFor(a.clean(a.findByName(e))), r && r.name in a.invalid && (a.currentElements.push(r), o = a.check(r) && o))
                }), i = this.check(s) !== !1, o = o && i, i ? this.invalid[s.name] = !1 : this.invalid[s.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), e(t).attr("aria-invalid", !i)), o
            }, showErrors: function (t) {
                if (t) {
                    var i = this;
                    e.extend(this.errorMap, t), this.errorList = e.map(this.errorMap, function (e, t) {
                        return {message: e, element: i.findByName(t)[0]}
                    }), this.successList = e.grep(this.successList, function (e) {
                        return !(e.name in t)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                e.fn.resetForm && e(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
                var t = this.elements().removeData("previousValue").removeAttr("aria-invalid");
                this.resetElements(t)
            }, resetElements: function (e) {
                var t;
                if (this.settings.unhighlight) for (t = 0; e[t]; t++) this.settings.unhighlight.call(this, e[t], this.settings.errorClass, ""), this.findByName(e[t].name).removeClass(this.settings.validClass); else e.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (e) {
                var t, i = 0;
                for (t in e) void 0 !== e[t] && null !== e[t] && e[t] !== !1 && i++;
                return i
            }, hideErrors: function () {
                this.hideThese(this.toHide)
            }, hideThese: function (e) {
                e.not(this.containers).text(""), this.addWrapper(e).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid) try {
                    e(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (t) {
                }
            }, findLastActive: function () {
                var t = this.lastActive;
                return t && 1 === e.grep(this.errorList, function (e) {
                    return e.element.name === t.name
                }).length && t
            }, elements: function () {
                var t = this, i = {};
                return e(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
                    var n = this.name || e(this).attr("name");
                    return !n && t.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = e(this).closest("form")[0], this.name = n), !(n in i || !t.objectLength(e(this).rules()) || (i[n] = !0, 0))
                })
            }, clean: function (t) {
                return e(t)[0]
            }, errors: function () {
                var t = this.settings.errorClass.split(" ").join(".");
                return e(this.settings.errorElement + "." + t, this.errorContext)
            }, resetInternals: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = e([]), this.toHide = e([])
            }, reset: function () {
                this.resetInternals(), this.currentElements = e([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (e) {
                this.reset(), this.toHide = this.errorsFor(e)
            }, elementValue: function (t) {
                var i, n, r = e(t), s = t.type;
                return "radio" === s || "checkbox" === s ? this.findByName(t.name).filter(":checked").val() : "number" === s && "undefined" != typeof t.validity ? t.validity.badInput ? "NaN" : r.val() : (i = t.hasAttribute("contenteditable") ? r.text() : r.val(), "file" === s ? "C:\\fakepath\\" === i.substr(0, 12) ? i.substr(12) : (n = i.lastIndexOf("/"), n >= 0 ? i.substr(n + 1) : (n = i.lastIndexOf("\\"), n >= 0 ? i.substr(n + 1) : i)) : "string" == typeof i ? i.replace(/\r/g, "") : i)
            }, check: function (t) {
                t = this.validationTargetFor(this.clean(t));
                var i, n, r, s, a = e(t).rules(), o = e.map(a, function (e, t) {
                    return t
                }).length, l = !1, u = this.elementValue(t);
                if ("function" == typeof a.normalizer ? s = a.normalizer : "function" == typeof this.settings.normalizer && (s = this.settings.normalizer), s) {
                    if (u = s.call(t, u), "string" != typeof u) throw new TypeError("The normalizer should return a string value.");
                    delete a.normalizer
                }
                for (n in a) {
                    r = {method: n, parameters: a[n]};
                    try {
                        if (i = e.validator.methods[n].call(this, u, t, r.parameters), "dependency-mismatch" === i && 1 === o) {
                            l = !0;
                            continue
                        }
                        if (l = !1, "pending" === i) return void(this.toHide = this.toHide.not(this.errorsFor(t)));
                        if (!i) return this.formatAndAdd(t, r), !1
                    } catch (c) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method.", c), c instanceof TypeError && (c.message += ".  Exception occurred when checking element " + t.id + ", check the '" + r.method + "' method."), c
                    }
                }
                return l ? void 0 : (this.objectLength(a) && this.successList.push(t), !0)
            }, customDataMessage: function (t, i) {
                return e(t).data("msg" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()) || e(t).data("msg")
            }, customMessage: function (e, t) {
                var i = this.settings.messages[e];
                return i && (i.constructor === String ? i : i[t])
            }, findDefined: function () {
                for (var e = 0; e < arguments.length; e++) if (void 0 !== arguments[e]) return arguments[e]
            }, defaultMessage: function (t, i) {
                "string" == typeof i && (i = {method: i});
                var n = this.findDefined(this.customMessage(t.name, i.method), this.customDataMessage(t, i.method), !this.settings.ignoreTitle && t.title || void 0, e.validator.messages[i.method], "<strong>Warning: No message defined for " + t.name + "</strong>"),
                    r = /\$?\{(\d+)\}/g;
                return "function" == typeof n ? n = n.call(this, i.parameters, t) : r.test(n) && (n = e.validator.format(n.replace(r, "{$1}"), i.parameters)), n
            }, formatAndAdd: function (e, t) {
                var i = this.defaultMessage(e, t);
                this.errorList.push({
                    message: i,
                    element: e,
                    method: t.method
                }), this.errorMap[e.name] = i, this.submitted[e.name] = i
            }, addWrapper: function (e) {
                return this.settings.wrapper && (e = e.add(e.parent(this.settings.wrapper))), e
            }, defaultShowErrors: function () {
                var e, t, i;
                for (e = 0; this.errorList[e]; e++) i = this.errorList[e], this.settings.highlight && this.settings.highlight.call(this, i.element, this.settings.errorClass, this.settings.validClass), this.showLabel(i.element, i.message);
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success) for (e = 0; this.successList[e]; e++) this.showLabel(this.successList[e]);
                if (this.settings.unhighlight) for (e = 0, t = this.validElements(); t[e]; e++) this.settings.unhighlight.call(this, t[e], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return e(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (t, i) {
                var n, r, s, a, o = this.errorsFor(t), l = this.idOrName(t), u = e(t).attr("aria-describedby");
                o.length ? (o.removeClass(this.settings.validClass).addClass(this.settings.errorClass), o.html(i)) : (o = e("<" + this.settings.errorElement + ">").attr("id", l + "-error").addClass(this.settings.errorClass).html(i || ""), n = o, this.settings.wrapper && (n = o.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(n) : this.settings.errorPlacement ? this.settings.errorPlacement.call(this, n, e(t)) : n.insertAfter(t), o.is("label") ? o.attr("for", l) : 0 === o.parents("label[for='" + this.escapeCssMeta(l) + "']").length && (s = o.attr("id"), u ? u.match(new RegExp("\\b" + this.escapeCssMeta(s) + "\\b")) || (u += " " + s) : u = s, e(t).attr("aria-describedby", u), r = this.groups[t.name], r && (a = this, e.each(a.groups, function (t, i) {
                    i === r && e("[name='" + a.escapeCssMeta(t) + "']", a.currentForm).attr("aria-describedby", o.attr("id"))
                })))), !i && this.settings.success && (o.text(""), "string" == typeof this.settings.success ? o.addClass(this.settings.success) : this.settings.success(o, t)), this.toShow = this.toShow.add(o)
            }, errorsFor: function (t) {
                var i = this.escapeCssMeta(this.idOrName(t)), n = e(t).attr("aria-describedby"),
                    r = "label[for='" + i + "'], label[for='" + i + "'] *";
                return n && (r = r + ", #" + this.escapeCssMeta(n).replace(/\s+/g, ", #")), this.errors().filter(r)
            }, escapeCssMeta: function (e) {
                return e.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
            }, idOrName: function (e) {
                return this.groups[e.name] || (this.checkable(e) ? e.name : e.id || e.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name)), e(t).not(this.settings.ignore)[0]
            }, checkable: function (e) {
                return /radio|checkbox/i.test(e.type)
            }, findByName: function (t) {
                return e(this.currentForm).find("[name='" + this.escapeCssMeta(t) + "']")
            }, getLength: function (t, i) {
                switch (i.nodeName.toLowerCase()) {
                    case"select":
                        return e("option:selected", i).length;
                    case"input":
                        if (this.checkable(i)) return this.findByName(i.name).filter(":checked").length
                }
                return t.length
            }, depend: function (e, t) {
                return !this.dependTypes[typeof e] || this.dependTypes[typeof e](e, t)
            }, dependTypes: {
                "boolean": function (e) {
                    return e
                }, string: function (t, i) {
                    return !!e(t, i.form).length
                }, "function": function (e, t) {
                    return e(t)
                }
            }, optional: function (t) {
                var i = this.elementValue(t);
                return !e.validator.methods.required.call(this, i, t) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, e(t).addClass(this.settings.pendingClass), this.pending[t.name] = !0)
            }, stopRequest: function (t, i) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[t.name], e(t).removeClass(this.settings.pendingClass), i && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (e(this.currentForm).submit(), this.submitButton && e("input:hidden[name='" + this.submitButton.name + "']", this.currentForm).remove(), this.formSubmitted = !1) : !i && 0 === this.pendingRequest && this.formSubmitted && (e(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (t, i) {
                return i = "string" == typeof i && i || "remote", e.data(t, "previousValue") || e.data(t, "previousValue", {
                    old: null,
                    valid: !0,
                    message: this.defaultMessage(t, {method: i})
                })
            }, destroy: function () {
                this.resetForm(), e(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (t, i) {
            t.constructor === String ? this.classRuleSettings[t] = i : e.extend(this.classRuleSettings, t)
        },
        classRules: function (t) {
            var i = {}, n = e(t).attr("class");
            return n && e.each(n.split(" "), function () {
                this in e.validator.classRuleSettings && e.extend(i, e.validator.classRuleSettings[this])
            }), i
        },
        normalizeAttributeRule: function (e, t, i, n) {
            /min|max|step/.test(i) && (null === t || /number|range|text/.test(t)) && (n = Number(n), isNaN(n) && (n = void 0)), n || 0 === n ? e[i] = n : t === i && "range" !== t && (e[i] = !0)
        },
        attributeRules: function (t) {
            var i, n, r = {}, s = e(t), a = t.getAttribute("type");
            for (i in e.validator.methods) "required" === i ? (n = t.getAttribute(i), "" === n && (n = !0), n = !!n) : n = s.attr(i), this.normalizeAttributeRule(r, a, i, n);
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (t) {
            var i, n, r = {}, s = e(t), a = t.getAttribute("type");
            for (i in e.validator.methods) n = s.data("rule" + i.charAt(0).toUpperCase() + i.substring(1).toLowerCase()), this.normalizeAttributeRule(r, a, i, n);
            return r
        },
        staticRules: function (t) {
            var i = {}, n = e.data(t.form, "validator");
            return n.settings.rules && (i = e.validator.normalizeRule(n.settings.rules[t.name]) || {}), i
        },
        normalizeRules: function (t, i) {
            return e.each(t, function (n, r) {
                if (r === !1) return void delete t[n];
                if (r.param || r.depends) {
                    var s = !0;
                    switch (typeof r.depends) {
                        case"string":
                            s = !!e(r.depends, i.form).length;
                            break;
                        case"function":
                            s = r.depends.call(i, i)
                    }
                    s ? t[n] = void 0 === r.param || r.param : (e.data(i.form, "validator").resetElements(e(i)), delete t[n])
                }
            }), e.each(t, function (n, r) {
                t[n] = e.isFunction(r) && "normalizer" !== n ? r(i) : r
            }), e.each(["minlength", "maxlength"], function () {
                t[this] && (t[this] = Number(t[this]))
            }), e.each(["rangelength", "range"], function () {
                var i;
                t[this] && (e.isArray(t[this]) ? t[this] = [Number(t[this][0]), Number(t[this][1])] : "string" == typeof t[this] && (i = t[this].replace(/[\[\]]/g, "").split(/[\s,]+/), t[this] = [Number(i[0]), Number(i[1])]))
            }), e.validator.autoCreateRanges && (null != t.min && null != t.max && (t.range = [t.min, t.max], delete t.min, delete t.max), null != t.minlength && null != t.maxlength && (t.rangelength = [t.minlength, t.maxlength], delete t.minlength, delete t.maxlength)), t
        },
        normalizeRule: function (t) {
            if ("string" == typeof t) {
                var i = {};
                e.each(t.split(/\s/), function () {
                    i[this] = !0
                }), t = i
            }
            return t
        },
        addMethod: function (t, i, n) {
            e.validator.methods[t] = i, e.validator.messages[t] = void 0 !== n ? n : e.validator.messages[t], i.length < 3 && e.validator.addClassRules(t, e.validator.normalizeRule(t))
        },
        methods: {
            required: function (t, i, n) {
                if (!this.depend(n, i)) return "dependency-mismatch";
                if ("select" === i.nodeName.toLowerCase()) {
                    var r = e(i).val();
                    return r && r.length > 0
                }
                return this.checkable(i) ? this.getLength(t, i) > 0 : t.length > 0
            }, email: function (e, t) {
                return this.optional(t) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            }, url: function (e, t) {
                return this.optional(t) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(e)
            }, date: function (e, t) {
                return this.optional(t) || !/Invalid|NaN/.test(new Date(e).toString())
            }, dateISO: function (e, t) {
                return this.optional(t) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(e)
            }, number: function (e, t) {
                return this.optional(t) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(e)
            }, digits: function (e, t) {
                return this.optional(t) || /^\d+$/.test(e)
            }, minlength: function (t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r >= n
            }, maxlength: function (t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || n >= r
            }, rangelength: function (t, i, n) {
                var r = e.isArray(t) ? t.length : this.getLength(t, i);
                return this.optional(i) || r >= n[0] && r <= n[1]
            }, min: function (e, t, i) {
                return this.optional(t) || e >= i
            }, max: function (e, t, i) {
                return this.optional(t) || i >= e
            }, range: function (e, t, i) {
                return this.optional(t) || e >= i[0] && e <= i[1]
            }, step: function (t, i, n) {
                var r, s = e(i).attr("type"), a = "Step attribute on input type " + s + " is not supported.",
                    o = ["text", "number", "range"], l = new RegExp("\\b" + s + "\\b"), u = s && !l.test(o.join()),
                    c = function (e) {
                        var t = ("" + e).match(/(?:\.(\d+))?$/);
                        return t && t[1] ? t[1].length : 0
                    }, d = function (e) {
                        return Math.round(e * Math.pow(10, r))
                    }, h = !0;
                if (u) throw new Error(a);
                return r = c(n), (c(t) > r || d(t) % d(n) !== 0) && (h = !1), this.optional(i) || h
            }, equalTo: function (t, i, n) {
                var r = e(n);
                return this.settings.onfocusout && r.not(".validate-equalTo-blur").length && r.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
                    e(i).valid()
                }), t === r.val()
            }, remote: function (t, i, n, r) {
                if (this.optional(i)) return "dependency-mismatch";
                r = "string" == typeof r && r || "remote";
                var s, a, o, l = this.previousValue(i, r);
                return this.settings.messages[i.name] || (this.settings.messages[i.name] = {}), l.originalMessage = l.originalMessage || this.settings.messages[i.name][r], this.settings.messages[i.name][r] = l.message, n = "string" == typeof n && {url: n} || n, o = e.param(e.extend({data: t}, n.data)), l.old === o ? l.valid : (l.old = o, s = this, this.startRequest(i), a = {}, a[i.name] = t, e.ajax(e.extend(!0, {
                    mode: "abort",
                    port: "validate" + i.name,
                    dataType: "json",
                    data: a,
                    context: s.currentForm,
                    success: function (e) {
                        var n, a, o, u = e === !0 || "true" === e;
                        s.settings.messages[i.name][r] = l.originalMessage, u ? (o = s.formSubmitted, s.resetInternals(), s.toHide = s.errorsFor(i), s.formSubmitted = o, s.successList.push(i), s.invalid[i.name] = !1, s.showErrors()) : (n = {}, a = e || s.defaultMessage(i, {
                            method: r,
                            parameters: t
                        }), n[i.name] = l.message = a, s.invalid[i.name] = !0, s.showErrors(n)), l.valid = u, s.stopRequest(i, u)
                    }
                }, n)), "pending")
            }
        }
    });
    var t, i = {};
    return e.ajaxPrefilter ? e.ajaxPrefilter(function (e, t, n) {
        var r = e.port;
        "abort" === e.mode && (i[r] && i[r].abort(), i[r] = n)
    }) : (t = e.ajax, e.ajax = function (n) {
        var r = ("mode" in n ? n : e.ajaxSettings).mode, s = ("port" in n ? n : e.ajaxSettings).port;
        return "abort" === r ? (i[s] && i[s].abort(), i[s] = t.apply(this, arguments), i[s]) : t.apply(this, arguments)
    }), e
});