(() => {
    var __webpack_modules__ = {
        784: module => {
            !function(e, t) {
                if (true) module.exports = t(); else ;
            }(window, (function() {
                return function(e) {
                    var t = {};
                    function n(o) {
                        if (t[o]) return t[o].exports;
                        var i = t[o] = {
                            i: o,
                            l: !1,
                            exports: {}
                        };
                        return e[o].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
                    }
                    return n.m = e, n.c = t, n.d = function(e, t, o) {
                        n.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: o
                        });
                    }, n.r = function(e) {
                        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        });
                    }, n.t = function(e, t) {
                        if (1 & t && (e = n(e)), 8 & t) return e;
                        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
                        var o = Object.create(null);
                        if (n.r(o), Object.defineProperty(o, "default", {
                            enumerable: !0,
                            value: e
                        }), 2 & t && "string" != typeof e) for (var i in e) n.d(o, i, function(t) {
                            return e[t];
                        }.bind(null, i));
                        return o;
                    }, n.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default;
                        } : function() {
                            return e;
                        };
                        return n.d(t, "a", t), t;
                    }, n.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t);
                    }, n.p = "", n(n.s = 0);
                }([ function(e, t, n) {
                    "use strict";
                    n.r(t);
                    var o, i = "fslightbox-", r = "".concat(i, "styles"), s = "".concat(i, "cursor-grabbing"), a = "".concat(i, "full-dimension"), c = "".concat(i, "flex-centered"), l = "".concat(i, "open"), u = "".concat(i, "transform-transition"), d = "".concat(i, "absoluted"), f = "".concat(i, "slide-btn"), p = "".concat(f, "-container"), h = "".concat(i, "fade-in"), m = "".concat(i, "fade-out"), g = h + "-strong", v = m + "-strong", b = "".concat(i, "opacity-"), x = "".concat(b, "1"), y = "".concat(i, "source");
                    function w(e) {
                        return (w = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                            return typeof e;
                        } : function(e) {
                            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                        })(e);
                    }
                    function S(e) {
                        var t = e.stageIndexes, n = e.core.stageManager, o = e.props.sources.length - 1;
                        n.getPreviousSlideIndex = function() {
                            return 0 === t.current ? o : t.current - 1;
                        }, n.getNextSlideIndex = function() {
                            return t.current === o ? 0 : t.current + 1;
                        }, n.updateStageIndexes = 0 === o ? function() {} : 1 === o ? function() {
                            0 === t.current ? (t.next = 1, delete t.previous) : (t.previous = 0, delete t.next);
                        } : function() {
                            t.previous = n.getPreviousSlideIndex(), t.next = n.getNextSlideIndex();
                        }, n.i = o <= 2 ? function() {
                            return !0;
                        } : function(e) {
                            var n = t.current;
                            if (0 === n && e === o || n === o && 0 === e) return !0;
                            var i = n - e;
                            return -1 === i || 0 === i || 1 === i;
                        };
                    }
                    "object" === ("undefined" == typeof document ? "undefined" : w(document)) && ((o = document.createElement("style")).className = r, 
                    o.appendChild(document.createTextNode(".fslightbox-absoluted{position:absolute;top:0;left:0}.fslightbox-fade-in{animation:fslightbox-fade-in .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out{animation:fslightbox-fade-out .3s ease}.fslightbox-fade-in-strong{animation:fslightbox-fade-in-strong .3s cubic-bezier(0,0,.7,1)}.fslightbox-fade-out-strong{animation:fslightbox-fade-out-strong .3s ease}@keyframes fslightbox-fade-in{from{opacity:.65}to{opacity:1}}@keyframes fslightbox-fade-out{from{opacity:.35}to{opacity:0}}@keyframes fslightbox-fade-in-strong{from{opacity:.3}to{opacity:1}}@keyframes fslightbox-fade-out-strong{from{opacity:1}to{opacity:0}}.fslightbox-cursor-grabbing{cursor:grabbing}.fslightbox-full-dimension{width:100%;height:100%}.fslightbox-open{overflow:hidden;height:100%}.fslightbox-flex-centered{display:flex;justify-content:center;align-items:center}.fslightbox-opacity-0{opacity:0!important}.fslightbox-opacity-1{opacity:1!important}.fslightbox-scrollbarfix{padding-right:17px}.fslightbox-transform-transition{transition:transform .3s}.fslightbox-container{font-family:Arial,sans-serif;position:fixed;top:0;left:0;background:linear-gradient(rgba(30,30,30,.9),#000 1810%);touch-action:pinch-zoom;z-index:1000000000;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;-webkit-tap-highlight-color:transparent}.fslightbox-container *{box-sizing:border-box}.fslightbox-svg-path{transition:fill .15s ease;fill:#ddd}.fslightbox-nav{height:45px;width:100%;position:absolute;top:0;left:0}.fslightbox-slide-number-container{display:flex;justify-content:center;align-items:center;position:relative;height:100%;font-size:15px;color:#d7d7d7;z-index:0;max-width:55px;text-align:left}.fslightbox-slide-number-container .fslightbox-flex-centered{height:100%}.fslightbox-slash{display:block;margin:0 5px;width:1px;height:12px;transform:rotate(15deg);background:#fff}.fslightbox-toolbar{position:absolute;z-index:3;right:0;top:0;height:100%;display:flex;background:rgba(35,35,35,.65)}.fslightbox-toolbar-button{height:100%;width:45px;cursor:pointer}.fslightbox-toolbar-button:hover .fslightbox-svg-path{fill:#fff}.fslightbox-slide-btn-container{display:flex;align-items:center;padding:12px 12px 12px 6px;position:absolute;top:50%;cursor:pointer;z-index:3;transform:translateY(-50%)}@media (min-width:476px){.fslightbox-slide-btn-container{padding:22px 22px 22px 6px}}@media (min-width:768px){.fslightbox-slide-btn-container{padding:30px 30px 30px 6px}}.fslightbox-slide-btn-container:hover .fslightbox-svg-path{fill:#f1f1f1}.fslightbox-slide-btn{padding:9px;font-size:26px;background:rgba(35,35,35,.65)}@media (min-width:768px){.fslightbox-slide-btn{padding:10px}}@media (min-width:1600px){.fslightbox-slide-btn{padding:11px}}.fslightbox-slide-btn-container-previous{left:0}@media (max-width:475.99px){.fslightbox-slide-btn-container-previous{padding-left:3px}}.fslightbox-slide-btn-container-next{right:0;padding-left:12px;padding-right:3px}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-left:22px}}@media (min-width:768px){.fslightbox-slide-btn-container-next{padding-left:30px}}@media (min-width:476px){.fslightbox-slide-btn-container-next{padding-right:6px}}.fslightbox-down-event-detector{position:absolute;z-index:1}.fslightbox-slide-swiping-hoverer{z-index:4}.fslightbox-invalid-file-wrapper{font-size:22px;color:#eaebeb;margin:auto}.fslightbox-video{object-fit:cover}.fslightbox-youtube-iframe{border:0}.fslightboxl{display:block;margin:auto;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:67px;height:67px}.fslightboxl div{box-sizing:border-box;display:block;position:absolute;width:54px;height:54px;margin:6px;border:5px solid;border-color:#999 transparent transparent transparent;border-radius:50%;animation:fslightboxl 1.2s cubic-bezier(.5,0,.5,1) infinite}.fslightboxl div:nth-child(1){animation-delay:-.45s}.fslightboxl div:nth-child(2){animation-delay:-.3s}.fslightboxl div:nth-child(3){animation-delay:-.15s}@keyframes fslightboxl{0%{transform:rotate(0)}100%{transform:rotate(360deg)}}.fslightbox-source{position:relative;z-index:2;opacity:0}")), 
                    document.head.appendChild(o));
                    function L(e) {
                        var t, n = e.props, o = 0, i = {};
                        this.getSourceTypeFromLocalStorageByUrl = function(e) {
                            return t[e] ? t[e] : r(e);
                        }, this.handleReceivedSourceTypeForUrl = function(e, n) {
                            if (!1 === i[n] && (o--, "invalid" !== e ? i[n] = e : delete i[n], 0 === o)) {
                                !function(e, t) {
                                    for (var n in t) e[n] = t[n];
                                }(t, i);
                                try {
                                    localStorage.setItem("fslightbox-types", JSON.stringify(t));
                                } catch (e) {}
                            }
                        };
                        var r = function(e) {
                            o++, i[e] = !1;
                        };
                        if (n.disableLocalStorage) this.getSourceTypeFromLocalStorageByUrl = function() {}, 
                        this.handleReceivedSourceTypeForUrl = function() {}; else {
                            try {
                                t = JSON.parse(localStorage.getItem("fslightbox-types"));
                            } catch (e) {}
                            t || (t = {}, this.getSourceTypeFromLocalStorageByUrl = r);
                        }
                    }
                    function A(e, t, n, o) {
                        var i = e.data, r = e.elements.sources, s = n / o, a = 0;
                        this.adjustSize = function() {
                            if ((a = i.maxSourceWidth / s) < i.maxSourceHeight) return n < i.maxSourceWidth && (a = o), 
                            c();
                            a = o > i.maxSourceHeight ? i.maxSourceHeight : o, c();
                        };
                        var c = function() {
                            r[t].style.width = a * s + "px", r[t].style.height = a + "px";
                        };
                    }
                    function C(e, t) {
                        var n = this, o = e.collections.sourceSizers, i = e.elements, r = i.sourceAnimationWrappers, s = i.sources, a = e.isl, c = e.resolve;
                        function l(e, n) {
                            o[t] = c(A, [ t, e, n ]), o[t].adjustSize();
                        }
                        this.runActions = function(e, o) {
                            a[t] = !0, s[t].classList.add(x), r[t].classList.add(g), r[t].removeChild(r[t].firstChild), 
                            l(e, o), n.runActions = l;
                        };
                    }
                    function E(e, t) {
                        var n, o = this, i = e.elements.sources, r = e.props, s = (0, e.resolve)(C, [ t ]);
                        this.handleImageLoad = function(e) {
                            var t = e.target, n = t.naturalWidth, o = t.naturalHeight;
                            s.runActions(n, o);
                        }, this.handleVideoLoad = function(e) {
                            var t = e.target, o = t.videoWidth, i = t.videoHeight;
                            n = !0, s.runActions(o, i);
                        }, this.handleNotMetaDatedVideoLoad = function() {
                            n || o.handleYoutubeLoad();
                        }, this.handleYoutubeLoad = function() {
                            var e = 1920, t = 1080;
                            r.maxYoutubeDimensions && (e = r.maxYoutubeDimensions.width, t = r.maxYoutubeDimensions.height), 
                            s.runActions(e, t);
                        }, this.handleCustomLoad = function() {
                            var e = i[t], n = e.offsetWidth, r = e.offsetHeight;
                            n && r ? s.runActions(n, r) : setTimeout(o.handleCustomLoad);
                        };
                    }
                    function F(e, t, n) {
                        var o = e.elements.sources, i = e.props.customClasses, r = i[t] ? i[t] : "";
                        o[t].className = n + " " + r;
                    }
                    function I(e, t) {
                        var n = e.elements.sources, o = e.props.customAttributes;
                        for (var i in o[t]) n[t].setAttribute(i, o[t][i]);
                    }
                    function T(e, t) {
                        var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, r = o.sourceAnimationWrappers, s = e.props.sources;
                        i[t] = document.createElement("img"), F(e, t, y), i[t].src = s[t], i[t].onload = n[t].handleImageLoad, 
                        I(e, t), r[t].appendChild(i[t]);
                    }
                    function N(e, t) {
                        var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, r = o.sourceAnimationWrappers, s = e.props, a = s.sources, c = s.videosPosters;
                        i[t] = document.createElement("video"), F(e, t, y), i[t].src = a[t], i[t].onloadedmetadata = function(e) {
                            n[t].handleVideoLoad(e);
                        }, i[t].controls = !0, I(e, t), c[t] && (i[t].poster = c[t]);
                        var l = document.createElement("source");
                        l.src = a[t], i[t].appendChild(l), setTimeout(n[t].handleNotMetaDatedVideoLoad, 3e3), 
                        r[t].appendChild(i[t]);
                    }
                    function z(e, t) {
                        var n = e.collections.sourceLoadHandlers, o = e.elements, r = o.sources, s = o.sourceAnimationWrappers, a = e.props.sources;
                        r[t] = document.createElement("iframe"), F(e, t, "".concat(y, " ").concat(i, "youtube-iframe"));
                        var c = a[t], l = c.split("?")[1];
                        r[t].src = "https://www.youtube.com/embed/".concat(c.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/)[2], "?").concat(l || ""), 
                        r[t].allowFullscreen = !0, I(e, t), s[t].appendChild(r[t]), n[t].handleYoutubeLoad();
                    }
                    function P(e, t) {
                        var n = e.collections.sourceLoadHandlers, o = e.elements, i = o.sources, r = o.sourceAnimationWrappers, s = e.props.sources;
                        i[t] = s[t], F(e, t, "".concat(i[t].className, " ").concat(y)), r[t].appendChild(i[t]), 
                        n[t].handleCustomLoad();
                    }
                    function k(e, t) {
                        var n = e.elements, o = n.sources, r = n.sourceAnimationWrappers;
                        e.props.sources;
                        o[t] = document.createElement("div"), o[t].className = "".concat(i, "invalid-file-wrapper ").concat(c), 
                        o[t].innerHTML = "Invalid source", r[t].classList.add(g), r[t].removeChild(r[t].firstChild), 
                        r[t].appendChild(o[t]);
                    }
                    function H(e) {
                        var t = e.collections, n = t.sourceLoadHandlers, o = t.sourcesRenderFunctions, i = e.core.sourceDisplayFacade, r = e.resolve;
                        this.runActionsForSourceTypeAndIndex = function(t, s) {
                            var a;
                            switch ("invalid" !== t && (n[s] = r(E, [ s ])), t) {
                              case "image":
                                a = T;
                                break;

                              case "video":
                                a = N;
                                break;

                              case "youtube":
                                a = z;
                                break;

                              case "custom":
                                a = P;
                                break;

                              default:
                                a = k;
                            }
                            o[s] = function() {
                                return a(e, s);
                            }, i.displaySourcesWhichShouldBeDisplayed();
                        };
                    }
                    function W() {
                        var e, t, n, o = {
                            isUrlYoutubeOne: function(e) {
                                var t = document.createElement("a");
                                return t.href = e, "www.youtube.com" === t.hostname || "youtu.be" === t.hostname;
                            },
                            getTypeFromResponseContentType: function(e) {
                                return e.slice(0, e.indexOf("/"));
                            }
                        };
                        function i() {
                            if (4 !== n.readyState) {
                                if (2 === n.readyState) {
                                    var e;
                                    switch (o.getTypeFromResponseContentType(n.getResponseHeader("content-type"))) {
                                      case "image":
                                        e = "image";
                                        break;

                                      case "video":
                                        e = "video";
                                        break;

                                      default:
                                        e = "invalid";
                                    }
                                    n.onreadystatechange = null, n.abort(), t(e);
                                }
                            } else t("invalid");
                        }
                        this.setUrlToCheck = function(t) {
                            e = t;
                        }, this.getSourceType = function(r) {
                            if (o.isUrlYoutubeOne(e)) return r("youtube");
                            t = r, (n = new XMLHttpRequest).onreadystatechange = i, n.open("GET", e, !0), n.send();
                        };
                    }
                    function R(e, t, n) {
                        var o = e.props, i = o.types, r = o.type, s = o.sources, a = e.resolve;
                        this.getTypeSetByClientForIndex = function(e) {
                            var t;
                            return i && i[e] ? t = i[e] : r && (t = r), t;
                        }, this.retrieveTypeWithXhrForIndex = function(e) {
                            var o = a(W);
                            o.setUrlToCheck(s[e]), o.getSourceType((function(o) {
                                t.handleReceivedSourceTypeForUrl(o, s[e]), n.runActionsForSourceTypeAndIndex(o, e);
                            }));
                        };
                    }
                    function D(e, t) {
                        var n = e.core.stageManager, o = e.elements, i = o.smw, r = o.sourceWrappersContainer, s = e.props, l = 0, f = document.createElement("div");
                        function p(e) {
                            f.style.transform = "translateX(".concat(e + l, "px)"), l = 0;
                        }
                        function h() {
                            return (1 + s.slideDistance) * innerWidth;
                        }
                        f.className = "".concat(d, " ").concat(a, " ").concat(c), f.s = function() {
                            f.style.display = "flex";
                        }, f.h = function() {
                            f.style.display = "none";
                        }, f.a = function() {
                            f.classList.add(u);
                        }, f.d = function() {
                            f.classList.remove(u);
                        }, f.n = function() {
                            f.style.removeProperty("transform");
                        }, f.v = function(e) {
                            return l = e, f;
                        }, f.ne = function() {
                            p(-h());
                        }, f.z = function() {
                            p(0);
                        }, f.p = function() {
                            p(h());
                        }, n.i(t) || f.h(), i[t] = f, r.appendChild(f), function(e, t) {
                            var n = e.elements, o = n.smw, i = n.sourceAnimationWrappers, r = document.createElement("div"), s = document.createElement("div");
                            s.className = "fslightboxl";
                            for (var a = 0; a < 3; a++) {
                                var c = document.createElement("div");
                                s.appendChild(c);
                            }
                            r.appendChild(s), o[t].appendChild(r), i[t] = r;
                        }(e, t);
                    }
                    function O(e, t, n, o) {
                        var r = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        r.setAttributeNS(null, "width", t), r.setAttributeNS(null, "height", t), r.setAttributeNS(null, "viewBox", n);
                        var s = document.createElementNS("http://www.w3.org/2000/svg", "path");
                        return s.setAttributeNS(null, "class", "".concat(i, "svg-path")), s.setAttributeNS(null, "d", o), 
                        r.appendChild(s), e.appendChild(r), r;
                    }
                    function M(e, t) {
                        var n = document.createElement("div");
                        return n.className = "".concat(i, "toolbar-button ").concat(c), n.title = t, e.appendChild(n), 
                        n;
                    }
                    function j(e, t) {
                        var n = document.createElement("div");
                        n.className = "".concat(i, "toolbar"), t.appendChild(n), function(e, t) {
                            var n = e.componentsServices, o = e.data, i = e.fs, r = "M4.5 11H3v4h4v-1.5H4.5V11zM3 7h1.5V4.5H7V3H3v4zm10.5 6.5H11V15h4v-4h-1.5v2.5zM11 3v1.5h2.5V7H15V3h-4z", s = M(t);
                            s.title = "Enter fullscreen";
                            var a = O(s, "20px", "0 0 18 18", r);
                            n.ofs = function() {
                                o.ifs = !0, s.title = "Exit fullscreen", a.setAttributeNS(null, "width", "24px"), 
                                a.setAttributeNS(null, "height", "24px"), a.setAttributeNS(null, "viewBox", "0 0 950 1024"), 
                                a.firstChild.setAttributeNS(null, "d", "M682 342h128v84h-212v-212h84v128zM598 810v-212h212v84h-128v128h-84zM342 342v-128h84v212h-212v-84h128zM214 682v-84h212v212h-84v-128h-128z");
                            }, n.xfs = function() {
                                o.ifs = !1, s.title = "Enter fullscreen", a.setAttributeNS(null, "width", "20px"), 
                                a.setAttributeNS(null, "height", "20px"), a.setAttributeNS(null, "viewBox", "0 0 18 18"), 
                                a.firstChild.setAttributeNS(null, "d", r);
                            }, s.onclick = i.t;
                        }(e, n), function(e, t) {
                            var n = M(t, "Close");
                            n.onclick = e.core.lightboxCloser.closeLightbox, O(n, "20px", "0 0 24 24", "M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z");
                        }(e, n);
                    }
                    function X(e) {
                        var t = e.props.sources, n = e.elements.container, o = document.createElement("div");
                        o.className = "".concat(i, "nav"), n.appendChild(o), j(e, o), t.length > 1 && function(e, t) {
                            var n = e.componentsServices, o = e.props.sources, r = (e.stageIndexes, document.createElement("div"));
                            r.className = "".concat(i, "slide-number-container");
                            var s = document.createElement("div");
                            s.className = c;
                            var a = document.createElement("span");
                            n.setSlideNumber = function(e) {
                                return a.innerHTML = e;
                            };
                            var l = document.createElement("span");
                            l.className = "".concat(i, "slash");
                            var u = document.createElement("div");
                            u.innerHTML = o.length, r.appendChild(s), s.appendChild(a), s.appendChild(l), s.appendChild(u), 
                            t.appendChild(r), setTimeout((function() {
                                s.offsetWidth > 55 && (r.style.justifyContent = "flex-start");
                            }));
                        }(e, o);
                    }
                    function B(e, t, n, o) {
                        var i = e.elements.container, r = n.charAt(0).toUpperCase() + n.slice(1), s = document.createElement("div");
                        s.className = "".concat(p, " ").concat(p, "-").concat(n), s.title = "".concat(r, " slide"), 
                        s.onclick = t, function(e, t) {
                            var n = document.createElement("div");
                            n.className = "".concat(f, " ").concat(c), O(n, "20px", "0 0 20 20", t), e.appendChild(n);
                        }(s, o), i.appendChild(s);
                    }
                    function U(e) {
                        var t = e.core, n = t.lightboxCloser, o = t.slideChangeFacade, i = e.fs;
                        this.listener = function(e) {
                            switch (e.key) {
                              case "Escape":
                                n.closeLightbox();
                                break;

                              case "ArrowLeft":
                                o.changeToPrevious();
                                break;

                              case "ArrowRight":
                                o.changeToNext();
                                break;

                              case "F11":
                                e.preventDefault(), i.t();
                            }
                        };
                    }
                    function q(e) {
                        var t = e.elements, n = e.sourcePointerProps, o = e.stageIndexes;
                        function i(e, o) {
                            t.smw[e].v(n.swipedX)[o]();
                        }
                        this.runActionsForEvent = function(e) {
                            var r, a, c;
                            t.container.contains(t.slideSwipingHoverer) || t.container.appendChild(t.slideSwipingHoverer), 
                            r = t.container, a = s, (c = r.classList).contains(a) || c.add(a), n.swipedX = e.screenX - n.downScreenX;
                            var l = o.previous, u = o.next;
                            i(o.current, "z"), void 0 !== l && n.swipedX > 0 ? i(l, "ne") : void 0 !== u && n.swipedX < 0 && i(u, "p");
                        };
                    }
                    function V(e) {
                        var t = e.props.sources, n = e.resolve, o = e.sourcePointerProps, i = n(q);
                        1 === t.length ? this.listener = function() {
                            o.swipedX = 1;
                        } : this.listener = function(e) {
                            o.isPointering && i.runActionsForEvent(e);
                        };
                    }
                    function _(e) {
                        var t = e.core.slideIndexChanger, n = e.elements.smw, o = e.stageIndexes, i = e.sws;
                        function r(e) {
                            var t = n[o.current];
                            t.a(), t[e]();
                        }
                        function s(e, t) {
                            void 0 !== e && (n[e].s(), n[e][t]());
                        }
                        this.runPositiveSwipedXActions = function() {
                            var e = o.previous;
                            if (void 0 === e) r("z"); else {
                                r("p");
                                var n = o.next;
                                t.changeTo(e);
                                var a = o.previous;
                                i.d(a), i.b(n), r("z"), s(a, "ne");
                            }
                        }, this.runNegativeSwipedXActions = function() {
                            var e = o.next;
                            if (void 0 === e) r("z"); else {
                                r("ne");
                                var n = o.previous;
                                t.changeTo(e);
                                var a = o.next;
                                i.d(a), i.b(n), r("z"), s(a, "p");
                            }
                        };
                    }
                    function Y(e, t) {
                        e.contains(t) && e.removeChild(t);
                    }
                    function J(e) {
                        var t = e.core.lightboxCloser, n = e.elements, o = e.resolve, i = e.sourcePointerProps, r = o(_);
                        this.runNoSwipeActions = function() {
                            Y(n.container, n.slideSwipingHoverer), i.isSourceDownEventTarget || t.closeLightbox(), 
                            i.isPointering = !1;
                        }, this.runActions = function() {
                            i.swipedX > 0 ? r.runPositiveSwipedXActions() : r.runNegativeSwipedXActions(), Y(n.container, n.slideSwipingHoverer), 
                            n.container.classList.remove(s), i.isPointering = !1;
                        };
                    }
                    function G(e) {
                        var t = e.resolve, n = e.sourcePointerProps, o = t(J);
                        this.listener = function() {
                            n.isPointering && (n.swipedX ? o.runActions() : o.runNoSwipeActions());
                        };
                    }
                    function $(e) {
                        var t = this, n = e.core, o = n.eventsDispatcher, i = n.globalEventsController, r = n.scrollbarRecompensor, s = e.data, a = e.elements, c = e.fs, u = e.props, d = e.sourcePointerProps;
                        this.isLightboxFadingOut = !1, this.runActions = function() {
                            t.isLightboxFadingOut = !0, a.container.classList.add(v), i.removeListeners(), u.exitFullscreenOnClose && s.ifs && c.x(), 
                            setTimeout((function() {
                                t.isLightboxFadingOut = !1, d.isPointering = !1, a.container.classList.remove(v), 
                                document.documentElement.classList.remove(l), r.removeRecompense(), document.body.removeChild(a.container), 
                                o.dispatch("onClose");
                            }), 270);
                        };
                    }
                    function K(e, t) {
                        var n = e.classList;
                        n.contains(t) && n.remove(t);
                    }
                    function Q(e) {
                        var t, n, o;
                        n = (t = e).core.eventsDispatcher, o = t.props, n.dispatch = function(e) {
                            o[e] && o[e]();
                        }, function(e) {
                            var t = e.componentsServices, n = e.data, o = e.fs, i = [ "fullscreenchange", "webkitfullscreenchange", "mozfullscreenchange", "MSFullscreenChange" ];
                            function r(e) {
                                for (var t = 0; t < i.length; t++) document[e](i[t], s);
                            }
                            function s() {
                                document.fullscreenElement || document.webkitIsFullScreen || document.mozFullScreen || document.msFullscreenElement ? t.ofs() : t.xfs();
                            }
                            o.o = function() {
                                t.ofs();
                                var e = document.documentElement;
                                e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen ? e.webkitRequestFullscreen() : e.msRequestFullscreen && e.msRequestFullscreen();
                            }, o.x = function() {
                                t.xfs(), document.exitFullscreen ? document.exitFullscreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen && document.msExitFullscreen();
                            }, o.t = function() {
                                n.ifs ? o.x() : o.o();
                            }, o.l = function() {
                                r("addEventListener");
                            }, o.q = function() {
                                r("removeEventListener");
                            };
                        }(e), function(e) {
                            var t = e.core, n = t.globalEventsController, o = t.windowResizeActioner, i = e.fs, r = e.resolve, s = r(U), a = r(V), c = r(G);
                            n.attachListeners = function() {
                                document.addEventListener("pointermove", a.listener), document.addEventListener("pointerup", c.listener), 
                                addEventListener("resize", o.runActions), document.addEventListener("keydown", s.listener), 
                                i.l();
                            }, n.removeListeners = function() {
                                document.removeEventListener("pointermove", a.listener), document.removeEventListener("pointerup", c.listener), 
                                removeEventListener("resize", o.runActions), document.removeEventListener("keydown", s.listener), 
                                i.q();
                            };
                        }(e), function(e) {
                            var t = e.core.lightboxCloser, n = (0, e.resolve)($);
                            t.closeLightbox = function() {
                                n.isLightboxFadingOut || n.runActions();
                            };
                        }(e), function(e) {
                            var t = e.data, n = e.core.scrollbarRecompensor;
                            function o() {
                                document.body.offsetHeight > innerHeight && (document.body.style.marginRight = t.scrollbarWidth + "px");
                            }
                            n.addRecompense = function() {
                                "complete" === document.readyState ? o() : addEventListener("load", (function() {
                                    o(), n.addRecompense = o;
                                }));
                            }, n.removeRecompense = function() {
                                document.body.style.removeProperty("margin-right");
                            };
                        }(e), function(e) {
                            var t = e.core, n = t.slideChangeFacade, o = t.slideIndexChanger, i = t.stageManager;
                            e.props.sources.length > 1 ? (n.changeToPrevious = function() {
                                o.jumpTo(i.getPreviousSlideIndex());
                            }, n.changeToNext = function() {
                                o.jumpTo(i.getNextSlideIndex());
                            }) : (n.changeToPrevious = function() {}, n.changeToNext = function() {});
                        }(e), function(e) {
                            var t = e.componentsServices, n = e.core, o = n.slideIndexChanger, i = n.sourceDisplayFacade, r = n.stageManager, s = e.elements, a = s.smw, c = s.sourceAnimationWrappers, l = e.isl, u = e.stageIndexes, d = e.sws;
                            o.changeTo = function(e) {
                                u.current = e, r.updateStageIndexes(), t.setSlideNumber(e + 1), i.displaySourcesWhichShouldBeDisplayed();
                            }, o.jumpTo = function(e) {
                                var t = u.previous, n = u.current, i = u.next, s = l[n], f = l[e];
                                o.changeTo(e);
                                for (var p = 0; p < a.length; p++) a[p].d();
                                d.d(n), d.c(), requestAnimationFrame((function() {
                                    requestAnimationFrame((function() {
                                        var e = u.previous, o = u.next;
                                        function p() {
                                            r.i(n) ? n === u.previous ? a[n].ne() : n === u.next && a[n].p() : (a[n].h(), a[n].n());
                                        }
                                        s && c[n].classList.add(m), f && c[u.current].classList.add(h), d.a(), void 0 !== e && e !== n && a[e].ne(), 
                                        a[u.current].n(), void 0 !== o && o !== n && a[o].p(), d.b(t), d.b(i), l[n] ? setTimeout(p, 260) : p();
                                    }));
                                }));
                            };
                        }(e), function(e) {
                            var t = e.core.sourcesPointerDown, n = e.elements, o = n.smw, i = n.sources, r = e.sourcePointerProps, s = e.stageIndexes;
                            t.listener = function(e) {
                                "VIDEO" !== e.target.tagName && e.preventDefault(), r.isPointering = !0, r.downScreenX = e.screenX, 
                                r.swipedX = 0;
                                var t = i[s.current];
                                t && t.contains(e.target) ? r.isSourceDownEventTarget = !0 : r.isSourceDownEventTarget = !1;
                                for (var n = 0; n < o.length; n++) o[n].d();
                            };
                        }(e), function(e) {
                            var t = e.collections.sourcesRenderFunctions, n = e.core.sourceDisplayFacade, o = e.props, i = e.stageIndexes;
                            function r(e) {
                                t[e] && (t[e](), delete t[e]);
                            }
                            n.displaySourcesWhichShouldBeDisplayed = function() {
                                if (o.loadOnlyCurrentSource) r(i.current); else for (var e in i) r(i[e]);
                            };
                        }(e), function(e) {
                            var t = e.core.stageManager, n = e.elements, o = n.smw, i = n.sourceAnimationWrappers, r = e.isl, s = e.stageIndexes, a = e.sws;
                            a.a = function() {
                                for (var e in s) o[s[e]].s();
                            }, a.b = function(e) {
                                void 0 === e || t.i(e) || (o[e].h(), o[e].n());
                            }, a.c = function() {
                                for (var e in s) a.d(s[e]);
                            }, a.d = function(e) {
                                if (r[e]) {
                                    var t = i[e];
                                    K(t, g), K(t, h), K(t, m);
                                }
                            };
                        }(e), function(e) {
                            var t = e.collections.sourceSizers, n = e.core.windowResizeActioner, o = e.data, i = e.elements.smw, r = e.stageIndexes;
                            n.runActions = function() {
                                innerWidth < 992 ? o.maxSourceWidth = innerWidth : o.maxSourceWidth = .9 * innerWidth, 
                                o.maxSourceHeight = .9 * innerHeight;
                                for (var e = 0; e < i.length; e++) i[e].d(), t[e] && t[e].adjustSize();
                                var n = r.previous, s = r.next;
                                void 0 !== n && i[n].ne(), void 0 !== s && i[s].p();
                            };
                        }(e);
                    }
                    function Z(e) {
                        var t = e.componentsServices, n = e.core, o = n.eventsDispatcher, r = n.globalEventsController, s = n.scrollbarRecompensor, c = n.sourceDisplayFacade, u = n.stageManager, f = n.windowResizeActioner, p = e.data, h = e.elements, m = (e.props, 
                        e.stageIndexes), v = e.sws;
                        function b() {
                            var t, n;
                            p.i = !0, p.scrollbarWidth = function() {
                                var e = document.createElement("div"), t = e.style, n = document.createElement("div");
                                t.visibility = "hidden", t.width = "100px", t.msOverflowStyle = "scrollbar", t.overflow = "scroll", 
                                n.style.width = "100%", document.body.appendChild(e);
                                var o = e.offsetWidth;
                                e.appendChild(n);
                                var i = n.offsetWidth;
                                return document.body.removeChild(e), o - i;
                            }(), Q(e), h.container = document.createElement("div"), h.container.className = "".concat(i, "container ").concat(a, " ").concat(g), 
                            function(e) {
                                var t = e.elements;
                                t.slideSwipingHoverer = document.createElement("div"), t.slideSwipingHoverer.className = "".concat(i, "slide-swiping-hoverer ").concat(a, " ").concat(d);
                            }(e), X(e), function(e) {
                                var t = e.core.sourcesPointerDown, n = e.elements, o = e.props.sources, i = document.createElement("div");
                                i.className = "".concat(d, " ").concat(a), n.container.appendChild(i), i.addEventListener("pointerdown", t.listener), 
                                n.sourceWrappersContainer = i;
                                for (var r = 0; r < o.length; r++) D(e, r);
                            }(e), e.props.sources.length > 1 && (n = (t = e).core.slideChangeFacade, B(t, n.changeToPrevious, "previous", "M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788S18.707,9.212,18.271,9.212z"), 
                            B(t, n.changeToNext, "next", "M1.729,9.212h14.656l-4.184-4.184c-0.307-0.306-0.307-0.801,0-1.107c0.305-0.306,0.801-0.306,1.106,0l5.481,5.482c0.018,0.014,0.037,0.019,0.053,0.034c0.181,0.181,0.242,0.425,0.209,0.66c-0.004,0.038-0.012,0.071-0.021,0.109c-0.028,0.098-0.075,0.188-0.143,0.271c-0.021,0.026-0.021,0.061-0.045,0.085c-0.015,0.016-0.034,0.02-0.051,0.033l-5.483,5.483c-0.306,0.307-0.802,0.307-1.106,0c-0.307-0.305-0.307-0.801,0-1.105l4.184-4.185H1.729c-0.436,0-0.788-0.353-0.788-0.788S1.293,9.212,1.729,9.212z")), 
                            function(e) {
                                for (var t = e.props.sources, n = e.resolve, o = n(L), i = n(H), r = n(R, [ o, i ]), s = 0; s < t.length; s++) if ("string" == typeof t[s]) {
                                    var a = r.getTypeSetByClientForIndex(s);
                                    if (a) i.runActionsForSourceTypeAndIndex(a, s); else {
                                        var c = o.getSourceTypeFromLocalStorageByUrl(t[s]);
                                        c ? i.runActionsForSourceTypeAndIndex(c, s) : r.retrieveTypeWithXhrForIndex(s);
                                    }
                                } else i.runActionsForSourceTypeAndIndex("custom", s);
                            }(e), o.dispatch("onInit");
                        }
                        e.open = function() {
                            var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, i = m.previous, a = m.current, d = m.next;
                            m.current = n, p.i || S(e), u.updateStageIndexes(), p.i ? (v.c(), v.a(), v.b(i), 
                            v.b(a), v.b(d), o.dispatch("onShow")) : b(), c.displaySourcesWhichShouldBeDisplayed(), 
                            t.setSlideNumber(n + 1), document.body.appendChild(h.container), document.documentElement.classList.add(l), 
                            s.addRecompense(), r.attachListeners(), f.runActions(), h.smw[m.current].n(), o.dispatch("onOpen");
                        };
                    }
                    function ee(e, t, n) {
                        return (ee = te() ? Reflect.construct.bind() : function(e, t, n) {
                            var o = [ null ];
                            o.push.apply(o, t);
                            var i = new (Function.bind.apply(e, o));
                            return n && ne(i, n.prototype), i;
                        }).apply(null, arguments);
                    }
                    function te() {
                        if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                        if (Reflect.construct.sham) return !1;
                        if ("function" == typeof Proxy) return !0;
                        try {
                            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), 
                            !0;
                        } catch (e) {
                            return !1;
                        }
                    }
                    function ne(e, t) {
                        return (ne = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                            return e.__proto__ = t, e;
                        })(e, t);
                    }
                    function oe(e) {
                        return function(e) {
                            if (Array.isArray(e)) return ie(e);
                        }(e) || function(e) {
                            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e);
                        }(e) || function(e, t) {
                            if (!e) return;
                            if ("string" == typeof e) return ie(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            "Object" === n && e.constructor && (n = e.constructor.name);
                            if ("Map" === n || "Set" === n) return Array.from(e);
                            if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return ie(e, t);
                        }(e) || function() {
                            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                        }();
                    }
                    function ie(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, o = new Array(t); n < t; n++) o[n] = e[n];
                        return o;
                    }
                    function re() {
                        for (var e = document.getElementsByTagName("a"), t = function(t) {
                            if (!e[t].hasAttribute("data-fslightbox")) return "continue";
                            var n = e[t].hasAttribute("data-href") ? e[t].getAttribute("data-href") : e[t].getAttribute("href");
                            if (!n) return console.warn('The "data-fslightbox" attribute was set without the "href" attribute.'), 
                            "continue";
                            var o = e[t].getAttribute("data-fslightbox");
                            fsLightboxInstances[o] || (fsLightboxInstances[o] = new FsLightbox);
                            var i = null;
                            "#" === n.charAt(0) ? (i = document.getElementById(n.substring(1)).cloneNode(!0)).removeAttribute("id") : i = n, 
                            fsLightboxInstances[o].props.sources.push(i), fsLightboxInstances[o].elements.a.push(e[t]);
                            var r = fsLightboxInstances[o].props.sources.length - 1;
                            e[t].onclick = function(e) {
                                e.preventDefault(), fsLightboxInstances[o].open(r);
                            }, d("types", "data-type"), d("videosPosters", "data-video-poster"), d("customClasses", "data-class"), 
                            d("customClasses", "data-custom-class");
                            for (var s = [ "href", "data-fslightbox", "data-href", "data-type", "data-video-poster", "data-class", "data-custom-class" ], a = e[t].attributes, c = fsLightboxInstances[o].props.customAttributes, l = 0; l < a.length; l++) if (-1 === s.indexOf(a[l].name) && "data-" === a[l].name.substr(0, 5)) {
                                c[r] || (c[r] = {});
                                var u = a[l].name.substr(5);
                                c[r][u] = a[l].value;
                            }
                            function d(n, i) {
                                e[t].hasAttribute(i) && (fsLightboxInstances[o].props[n][r] = e[t].getAttribute(i));
                            }
                        }, n = 0; n < e.length; n++) t(n);
                        var o = Object.keys(fsLightboxInstances);
                        window.fsLightbox = fsLightboxInstances[o[o.length - 1]];
                    }
                    window.FsLightbox = function() {
                        var e = this;
                        this.props = {
                            sources: [],
                            customAttributes: [],
                            customClasses: [],
                            types: [],
                            videosPosters: [],
                            slideDistance: .3
                        }, this.data = {
                            isFullscreenOpen: !1,
                            maxSourceWidth: 0,
                            maxSourceHeight: 0,
                            scrollbarWidth: 0
                        }, this.isl = [], this.sourcePointerProps = {
                            downScreenX: null,
                            isPointering: !1,
                            isSourceDownEventTarget: !1,
                            swipedX: 0
                        }, this.stageIndexes = {}, this.elements = {
                            a: [],
                            container: null,
                            slideSwipingHoverer: null,
                            smw: [],
                            sourceWrappersContainer: null,
                            sources: [],
                            sourceAnimationWrappers: []
                        }, this.componentsServices = {
                            setSlideNumber: function() {}
                        }, this.resolve = function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return n.unshift(e), ee(t, oe(n));
                        }, this.collections = {
                            sourceLoadHandlers: [],
                            sourcesRenderFunctions: [],
                            sourceSizers: []
                        }, this.core = {
                            eventsDispatcher: {},
                            globalEventsController: {},
                            lightboxCloser: {},
                            lightboxUpdater: {},
                            scrollbarRecompensor: {},
                            slideChangeFacade: {},
                            slideIndexChanger: {},
                            sourcesPointerDown: {},
                            sourceDisplayFacade: {},
                            stageManager: {},
                            windowResizeActioner: {}
                        }, this.fs = {}, this.sws = {}, Z(this), this.close = function() {
                            return e.core.lightboxCloser.closeLightbox();
                        };
                    }, window.fsLightboxInstances = {}, re(), window.refreshFsLightbox = function() {
                        for (var e in fsLightboxInstances) {
                            var t = fsLightboxInstances[e].props;
                            fsLightboxInstances[e] = new FsLightbox, fsLightboxInstances[e].props = t, fsLightboxInstances[e].props.sources = [], 
                            fsLightboxInstances[e].elements.a = [];
                        }
                        re();
                    };
                } ]);
            }));
        },
        24: function(module) {
            !function(n, t) {
                true ? module.exports = t() : 0;
            }(0, (function() {
                "use strict";
                function n() {
                    return n = Object.assign || function(n) {
                        for (var t = 1; t < arguments.length; t++) {
                            var e = arguments[t];
                            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (n[i] = e[i]);
                        }
                        return n;
                    }, n.apply(this, arguments);
                }
                var t = "undefined" != typeof window, e = t && !("onscroll" in window) || "undefined" != typeof navigator && /(gle|ing|ro)bot|crawl|spider/i.test(navigator.userAgent), i = t && "IntersectionObserver" in window, o = t && "classList" in document.createElement("p"), a = t && window.devicePixelRatio > 1, r = {
                    elements_selector: ".lazy",
                    container: e || t ? document : null,
                    threshold: 300,
                    thresholds: null,
                    data_src: "src",
                    data_srcset: "srcset",
                    data_sizes: "sizes",
                    data_bg: "bg",
                    data_bg_hidpi: "bg-hidpi",
                    data_bg_multi: "bg-multi",
                    data_bg_multi_hidpi: "bg-multi-hidpi",
                    data_bg_set: "bg-set",
                    data_poster: "poster",
                    class_applied: "applied",
                    class_loading: "loading",
                    class_loaded: "loaded",
                    class_error: "error",
                    class_entered: "entered",
                    class_exited: "exited",
                    unobserve_completed: !0,
                    unobserve_entered: !1,
                    cancel_on_exit: !0,
                    callback_enter: null,
                    callback_exit: null,
                    callback_applied: null,
                    callback_loading: null,
                    callback_loaded: null,
                    callback_error: null,
                    callback_finish: null,
                    callback_cancel: null,
                    use_native: !1,
                    restore_on_error: !1
                }, c = function(t) {
                    return n({}, r, t);
                }, l = function(n, t) {
                    var e, i = "LazyLoad::Initialized", o = new n(t);
                    try {
                        e = new CustomEvent(i, {
                            detail: {
                                instance: o
                            }
                        });
                    } catch (n) {
                        (e = document.createEvent("CustomEvent")).initCustomEvent(i, !1, !1, {
                            instance: o
                        });
                    }
                    window.dispatchEvent(e);
                }, u = "src", s = "srcset", d = "sizes", f = "poster", _ = "llOriginalAttrs", g = "data", v = "loading", b = "loaded", p = "applied", m = "error", h = "native", E = "data-", I = "ll-status", y = function(n, t) {
                    return n.getAttribute(E + t);
                }, k = function(n) {
                    return y(n, I);
                }, w = function(n, t) {
                    return function(n, t, e) {
                        var i = "data-ll-status";
                        null !== e ? n.setAttribute(i, e) : n.removeAttribute(i);
                    }(n, 0, t);
                }, A = function(n) {
                    return w(n, null);
                }, L = function(n) {
                    return null === k(n);
                }, O = function(n) {
                    return k(n) === h;
                }, x = [ v, b, p, m ], C = function(n, t, e, i) {
                    n && "function" == typeof n && (void 0 === i ? void 0 === e ? n(t) : n(t, e) : n(t, e, i));
                }, N = function(n, t) {
                    o ? n.classList.add(t) : n.className += (n.className ? " " : "") + t;
                }, M = function(n, t) {
                    o ? n.classList.remove(t) : n.className = n.className.replace(new RegExp("(^|\\s+)" + t + "(\\s+|$)"), " ").replace(/^\s+/, "").replace(/\s+$/, "");
                }, z = function(n) {
                    return n.llTempImage;
                }, T = function(n, t) {
                    if (t) {
                        var e = t._observer;
                        e && e.unobserve(n);
                    }
                }, R = function(n, t) {
                    n && (n.loadingCount += t);
                }, G = function(n, t) {
                    n && (n.toLoadCount = t);
                }, j = function(n) {
                    for (var t, e = [], i = 0; t = n.children[i]; i += 1) "SOURCE" === t.tagName && e.push(t);
                    return e;
                }, D = function(n, t) {
                    var e = n.parentNode;
                    e && "PICTURE" === e.tagName && j(e).forEach(t);
                }, H = function(n, t) {
                    j(n).forEach(t);
                }, V = [ u ], F = [ u, f ], B = [ u, s, d ], J = [ g ], P = function(n) {
                    return !!n[_];
                }, S = function(n) {
                    return n[_];
                }, U = function(n) {
                    return delete n[_];
                }, $ = function(n, t) {
                    if (!P(n)) {
                        var e = {};
                        t.forEach((function(t) {
                            e[t] = n.getAttribute(t);
                        })), n[_] = e;
                    }
                }, q = function(n, t) {
                    if (P(n)) {
                        var e = S(n);
                        t.forEach((function(t) {
                            !function(n, t, e) {
                                e ? n.setAttribute(t, e) : n.removeAttribute(t);
                            }(n, t, e[t]);
                        }));
                    }
                }, K = function(n, t, e) {
                    N(n, t.class_applied), w(n, p), e && (t.unobserve_completed && T(n, t), C(t.callback_applied, n, e));
                }, Q = function(n, t, e) {
                    N(n, t.class_loading), w(n, v), e && (R(e, 1), C(t.callback_loading, n, e));
                }, W = function(n, t, e) {
                    e && n.setAttribute(t, e);
                }, X = function(n, t) {
                    W(n, d, y(n, t.data_sizes)), W(n, s, y(n, t.data_srcset)), W(n, u, y(n, t.data_src));
                }, Y = {
                    IMG: function(n, t) {
                        D(n, (function(n) {
                            $(n, B), X(n, t);
                        })), $(n, B), X(n, t);
                    },
                    IFRAME: function(n, t) {
                        $(n, V), W(n, u, y(n, t.data_src));
                    },
                    VIDEO: function(n, t) {
                        H(n, (function(n) {
                            $(n, V), W(n, u, y(n, t.data_src));
                        })), $(n, F), W(n, f, y(n, t.data_poster)), W(n, u, y(n, t.data_src)), n.load();
                    },
                    OBJECT: function(n, t) {
                        $(n, J), W(n, g, y(n, t.data_src));
                    }
                }, Z = [ "IMG", "IFRAME", "VIDEO", "OBJECT" ], nn = function(n, t) {
                    !t || function(n) {
                        return n.loadingCount > 0;
                    }(t) || function(n) {
                        return n.toLoadCount > 0;
                    }(t) || C(n.callback_finish, t);
                }, tn = function(n, t, e) {
                    n.addEventListener(t, e), n.llEvLisnrs[t] = e;
                }, en = function(n, t, e) {
                    n.removeEventListener(t, e);
                }, on = function(n) {
                    return !!n.llEvLisnrs;
                }, an = function(n) {
                    if (on(n)) {
                        var t = n.llEvLisnrs;
                        for (var e in t) {
                            var i = t[e];
                            en(n, e, i);
                        }
                        delete n.llEvLisnrs;
                    }
                }, rn = function(n, t, e) {
                    !function(n) {
                        delete n.llTempImage;
                    }(n), R(e, -1), function(n) {
                        n && (n.toLoadCount -= 1);
                    }(e), M(n, t.class_loading), t.unobserve_completed && T(n, e);
                }, cn = function(n, t, e) {
                    var i = z(n) || n;
                    on(i) || function(n, t, e) {
                        on(n) || (n.llEvLisnrs = {});
                        var i = "VIDEO" === n.tagName ? "loadeddata" : "load";
                        tn(n, i, t), tn(n, "error", e);
                    }(i, (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_loaded), w(t, b), C(e.callback_loaded, t, i), o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }), (function(o) {
                        !function(n, t, e, i) {
                            var o = O(t);
                            rn(t, e, i), N(t, e.class_error), w(t, m), C(e.callback_error, t, i), e.restore_on_error && q(t, B), 
                            o || nn(e, i);
                        }(0, n, t, e), an(i);
                    }));
                }, ln = function(n, t, e) {
                    !function(n) {
                        return Z.indexOf(n.tagName) > -1;
                    }(n) ? function(n, t, e) {
                        !function(n) {
                            n.llTempImage = document.createElement("IMG");
                        }(n), cn(n, t, e), function(n) {
                            P(n) || (n[_] = {
                                backgroundImage: n.style.backgroundImage
                            });
                        }(n), function(n, t, e) {
                            var i = y(n, t.data_bg), o = y(n, t.data_bg_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = 'url("'.concat(r, '")'), z(n).setAttribute(u, r), 
                            Q(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_multi), o = y(n, t.data_bg_multi_hidpi), r = a && o ? o : i;
                            r && (n.style.backgroundImage = r, K(n, t, e));
                        }(n, t, e), function(n, t, e) {
                            var i = y(n, t.data_bg_set);
                            if (i) {
                                var o = i.split("|"), a = o.map((function(n) {
                                    return "image-set(".concat(n, ")");
                                }));
                                n.style.backgroundImage = a.join(), "" === n.style.backgroundImage && (a = o.map((function(n) {
                                    return "-webkit-image-set(".concat(n, ")");
                                })), n.style.backgroundImage = a.join()), K(n, t, e);
                            }
                        }(n, t, e);
                    }(n, t, e) : function(n, t, e) {
                        cn(n, t, e), function(n, t, e) {
                            var i = Y[n.tagName];
                            i && (i(n, t), Q(n, t, e));
                        }(n, t, e);
                    }(n, t, e);
                }, un = function(n) {
                    n.removeAttribute(u), n.removeAttribute(s), n.removeAttribute(d);
                }, sn = function(n) {
                    D(n, (function(n) {
                        q(n, B);
                    })), q(n, B);
                }, dn = {
                    IMG: sn,
                    IFRAME: function(n) {
                        q(n, V);
                    },
                    VIDEO: function(n) {
                        H(n, (function(n) {
                            q(n, V);
                        })), q(n, F), n.load();
                    },
                    OBJECT: function(n) {
                        q(n, J);
                    }
                }, fn = function(n, t) {
                    (function(n) {
                        var t = dn[n.tagName];
                        t ? t(n) : function(n) {
                            if (P(n)) {
                                var t = S(n);
                                n.style.backgroundImage = t.backgroundImage;
                            }
                        }(n);
                    })(n), function(n, t) {
                        L(n) || O(n) || (M(n, t.class_entered), M(n, t.class_exited), M(n, t.class_applied), 
                        M(n, t.class_loading), M(n, t.class_loaded), M(n, t.class_error));
                    }(n, t), A(n), U(n);
                }, _n = [ "IMG", "IFRAME", "VIDEO" ], gn = function(n) {
                    return n.use_native && "loading" in HTMLImageElement.prototype;
                }, vn = function(n, t, e) {
                    n.forEach((function(n) {
                        return function(n) {
                            return n.isIntersecting || n.intersectionRatio > 0;
                        }(n) ? function(n, t, e, i) {
                            var o = function(n) {
                                return x.indexOf(k(n)) >= 0;
                            }(n);
                            w(n, "entered"), N(n, e.class_entered), M(n, e.class_exited), function(n, t, e) {
                                t.unobserve_entered && T(n, e);
                            }(n, e, i), C(e.callback_enter, n, t, i), o || ln(n, e, i);
                        }(n.target, n, t, e) : function(n, t, e, i) {
                            L(n) || (N(n, e.class_exited), function(n, t, e, i) {
                                e.cancel_on_exit && function(n) {
                                    return k(n) === v;
                                }(n) && "IMG" === n.tagName && (an(n), function(n) {
                                    D(n, (function(n) {
                                        un(n);
                                    })), un(n);
                                }(n), sn(n), M(n, e.class_loading), R(i, -1), A(n), C(e.callback_cancel, n, t, i));
                            }(n, t, e, i), C(e.callback_exit, n, t, i));
                        }(n.target, n, t, e);
                    }));
                }, bn = function(n) {
                    return Array.prototype.slice.call(n);
                }, pn = function(n) {
                    return n.container.querySelectorAll(n.elements_selector);
                }, mn = function(n) {
                    return function(n) {
                        return k(n) === m;
                    }(n);
                }, hn = function(n, t) {
                    return function(n) {
                        return bn(n).filter(L);
                    }(n || pn(t));
                }, En = function(n, e) {
                    var o = c(n);
                    this._settings = o, this.loadingCount = 0, function(n, t) {
                        i && !gn(n) && (t._observer = new IntersectionObserver((function(e) {
                            vn(e, n, t);
                        }), function(n) {
                            return {
                                root: n.container === document ? null : n.container,
                                rootMargin: n.thresholds || n.threshold + "px"
                            };
                        }(n)));
                    }(o, this), function(n, e) {
                        t && (e._onlineHandler = function() {
                            !function(n, t) {
                                var e;
                                (e = pn(n), bn(e).filter(mn)).forEach((function(t) {
                                    M(t, n.class_error), A(t);
                                })), t.update();
                            }(n, e);
                        }, window.addEventListener("online", e._onlineHandler));
                    }(o, this), this.update(e);
                };
                return En.prototype = {
                    update: function(n) {
                        var t, o, a = this._settings, r = hn(n, a);
                        G(this, r.length), !e && i ? gn(a) ? function(n, t, e) {
                            n.forEach((function(n) {
                                -1 !== _n.indexOf(n.tagName) && function(n, t, e) {
                                    n.setAttribute("loading", "lazy"), cn(n, t, e), function(n, t) {
                                        var e = Y[n.tagName];
                                        e && e(n, t);
                                    }(n, t), w(n, h);
                                }(n, t, e);
                            })), G(e, 0);
                        }(r, a, this) : (o = r, function(n) {
                            n.disconnect();
                        }(t = this._observer), function(n, t) {
                            t.forEach((function(t) {
                                n.observe(t);
                            }));
                        }(t, o)) : this.loadAll(r);
                    },
                    destroy: function() {
                        this._observer && this._observer.disconnect(), t && window.removeEventListener("online", this._onlineHandler), 
                        pn(this._settings).forEach((function(n) {
                            U(n);
                        })), delete this._observer, delete this._settings, delete this._onlineHandler, delete this.loadingCount, 
                        delete this.toLoadCount;
                    },
                    loadAll: function(n) {
                        var t = this, e = this._settings;
                        hn(n, e).forEach((function(n) {
                            T(n, t), ln(n, e, t);
                        }));
                    },
                    restoreAll: function() {
                        var n = this._settings;
                        pn(n).forEach((function(t) {
                            fn(t, n);
                        }));
                    }
                }, En.load = function(n, t) {
                    var e = c(t);
                    ln(n, e);
                }, En.resetStatus = function(n) {
                    A(n);
                }, t && function(n, t) {
                    if (t) if (t.length) for (var e, i = 0; e = t[i]; i += 1) l(n, e); else l(n, t);
                }(En, window.lazyLoadOptions), En;
            }));
        }
    };
    var __webpack_module_cache__ = {};
    function __webpack_require__(moduleId) {
        var cachedModule = __webpack_module_cache__[moduleId];
        if (cachedModule !== void 0) return cachedModule.exports;
        var module = __webpack_module_cache__[moduleId] = {
            exports: {}
        };
        __webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        return module.exports;
    }
    (() => {
        "use strict";
        const flsModules = {};
        function isWebp() {
            function testWebP(callback) {
                let webP = new Image;
                webP.onload = webP.onerror = function() {
                    callback(webP.height == 2);
                };
                webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
            }
            testWebP((function(support) {
                let className = support === true ? "webp" : "no-webp";
                document.documentElement.classList.add(className);
            }));
        }
        let bodyLockStatus = true;
        let bodyLockToggle = (delay = 500) => {
            if (document.documentElement.classList.contains("lock")) bodyUnlock(delay); else bodyLock(delay);
        };
        let bodyUnlock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                setTimeout((() => {
                    for (let index = 0; index < lock_padding.length; index++) {
                        const el = lock_padding[index];
                        el.style.paddingRight = "0px";
                    }
                    body.style.paddingRight = "0px";
                    document.documentElement.classList.remove("lock");
                }), delay);
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        let bodyLock = (delay = 500) => {
            let body = document.querySelector("body");
            if (bodyLockStatus) {
                let lock_padding = document.querySelectorAll("[data-lp]");
                for (let index = 0; index < lock_padding.length; index++) {
                    const el = lock_padding[index];
                    el.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                }
                body.style.paddingRight = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
                document.documentElement.classList.add("lock");
                bodyLockStatus = false;
                setTimeout((function() {
                    bodyLockStatus = true;
                }), delay);
            }
        };
        function menuInit() {
            if (document.querySelector(".icon-menu")) {
                document.addEventListener("click", (function(e) {
                    if (bodyLockStatus && e.target.closest(".icon-menu")) {
                        bodyLockToggle();
                        document.documentElement.classList.toggle("menu-open");
                        document.querySelector(".menu__body").classList.toggle("active");
                    }
                }));
                document.querySelector(".menu__body").addEventListener("click", (function(e) {
                    if (e.target.closest(".menu__body a") && document.documentElement.classList.contains("menu-open")) menuClose();
                }));
            }
        }
        function menuClose() {
            bodyUnlock();
            document.documentElement.classList.remove("menu-open");
            document.querySelector(".menu__body").classList.remove("active");
        }
        function FLS(message) {
            setTimeout((() => {
                if (window.FLS) console.log(message);
            }), 0);
        }
        class Popup {
            constructor(options) {
                let config = {
                    logging: true,
                    init: true,
                    attributeOpenButton: "data-popup",
                    attributeCloseButton: "data-close",
                    fixElementSelector: "[data-lp]",
                    youtubeAttribute: "data-popup-youtube",
                    youtubePlaceAttribute: "data-popup-youtube-place",
                    setAutoplayYoutube: true,
                    classes: {
                        popup: "popup",
                        popupContent: "popup__content",
                        popupActive: "popup_show",
                        bodyActive: "popup-show"
                    },
                    focusCatch: true,
                    closeEsc: true,
                    bodyLock: true,
                    hashSettings: {
                        location: true,
                        goHash: true
                    },
                    on: {
                        beforeOpen: function() {},
                        afterOpen: function() {},
                        beforeClose: function() {},
                        afterClose: function() {}
                    }
                };
                this.youTubeCode;
                this.isOpen = false;
                this.targetOpen = {
                    selector: false,
                    element: false
                };
                this.previousOpen = {
                    selector: false,
                    element: false
                };
                this.lastClosed = {
                    selector: false,
                    element: false
                };
                this._dataValue = false;
                this.hash = false;
                this._reopen = false;
                this._selectorOpen = false;
                this.lastFocusEl = false;
                this._focusEl = [ "a[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "button:not([disabled]):not([aria-hidden])", "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "area[href]", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])' ];
                this.options = {
                    ...config,
                    ...options,
                    classes: {
                        ...config.classes,
                        ...options?.classes
                    },
                    hashSettings: {
                        ...config.hashSettings,
                        ...options?.hashSettings
                    },
                    on: {
                        ...config.on,
                        ...options?.on
                    }
                };
                this.bodyLock = false;
                this.options.init ? this.initPopups() : null;
            }
            initPopups() {
                this.popupLogging(`Проснулся`);
                this.eventsPopup();
            }
            eventsPopup() {
                document.addEventListener("click", function(e) {
                    const buttonOpen = e.target.closest(`[${this.options.attributeOpenButton}]`);
                    if (buttonOpen) {
                        e.preventDefault();
                        this._dataValue = buttonOpen.getAttribute(this.options.attributeOpenButton) ? buttonOpen.getAttribute(this.options.attributeOpenButton) : "error";
                        this.youTubeCode = buttonOpen.getAttribute(this.options.youtubeAttribute) ? buttonOpen.getAttribute(this.options.youtubeAttribute) : null;
                        if (this._dataValue !== "error") {
                            if (!this.isOpen) this.lastFocusEl = buttonOpen;
                            this.targetOpen.selector = `${this._dataValue}`;
                            this._selectorOpen = true;
                            this.open();
                            return;
                        } else this.popupLogging(`Ой ой, не заполнен атрибут у ${buttonOpen.classList}`);
                        return;
                    }
                    const buttonClose = e.target.closest(`[${this.options.attributeCloseButton}]`);
                    if (buttonClose || !e.target.closest(`.${this.options.classes.popupContent}`) && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                }.bind(this));
                document.addEventListener("keydown", function(e) {
                    if (this.options.closeEsc && e.which == 27 && e.code === "Escape" && this.isOpen) {
                        e.preventDefault();
                        this.close();
                        return;
                    }
                    if (this.options.focusCatch && e.which == 9 && this.isOpen) {
                        this._focusCatch(e);
                        return;
                    }
                }.bind(this));
                if (this.options.hashSettings.goHash) {
                    window.addEventListener("hashchange", function() {
                        if (window.location.hash) this._openToHash(); else this.close(this.targetOpen.selector);
                    }.bind(this));
                    window.addEventListener("load", function() {
                        if (window.location.hash) this._openToHash();
                    }.bind(this));
                }
            }
            open(selectorValue) {
                if (bodyLockStatus) {
                    this.bodyLock = document.documentElement.classList.contains("lock") && !this.isOpen ? true : false;
                    if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") {
                        this.targetOpen.selector = selectorValue;
                        this._selectorOpen = true;
                    }
                    if (this.isOpen) {
                        this._reopen = true;
                        this.close();
                    }
                    if (!this._selectorOpen) this.targetOpen.selector = this.lastClosed.selector;
                    if (!this._reopen) this.previousActiveElement = document.activeElement;
                    this.targetOpen.element = document.querySelector(this.targetOpen.selector);
                    if (this.targetOpen.element) {
                        if (this.youTubeCode) {
                            const codeVideo = this.youTubeCode;
                            const urlVideo = `https://www.youtube.com/embed/${codeVideo}?rel=0&showinfo=0&autoplay=1`;
                            const iframe = document.createElement("iframe");
                            iframe.setAttribute("allowfullscreen", "");
                            const autoplay = this.options.setAutoplayYoutube ? "autoplay;" : "";
                            iframe.setAttribute("allow", `${autoplay}; encrypted-media`);
                            iframe.setAttribute("src", urlVideo);
                            if (!this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) {
                                this.targetOpen.element.querySelector(".popup__text").setAttribute(`${this.options.youtubePlaceAttribute}`, "");
                            }
                            this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).appendChild(iframe);
                        }
                        if (this.options.hashSettings.location) {
                            this._getHash();
                            this._setHash();
                        }
                        this.options.on.beforeOpen(this);
                        document.dispatchEvent(new CustomEvent("beforePopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.targetOpen.element.classList.add(this.options.classes.popupActive);
                        document.documentElement.classList.add(this.options.classes.bodyActive);
                        if (!this._reopen) !this.bodyLock ? bodyLock() : null; else this._reopen = false;
                        this.targetOpen.element.setAttribute("aria-hidden", "false");
                        this.previousOpen.selector = this.targetOpen.selector;
                        this.previousOpen.element = this.targetOpen.element;
                        this._selectorOpen = false;
                        this.isOpen = true;
                        setTimeout((() => {
                            this._focusTrap();
                        }), 50);
                        this.options.on.afterOpen(this);
                        document.dispatchEvent(new CustomEvent("afterPopupOpen", {
                            detail: {
                                popup: this
                            }
                        }));
                        this.popupLogging(`Открыл попап`);
                    } else this.popupLogging(`Ой ой, такого попапа нет.Проверьте корректность ввода. `);
                }
            }
            close(selectorValue) {
                if (selectorValue && typeof selectorValue === "string" && selectorValue.trim() !== "") this.previousOpen.selector = selectorValue;
                if (!this.isOpen || !bodyLockStatus) return;
                this.options.on.beforeClose(this);
                document.dispatchEvent(new CustomEvent("beforePopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                if (this.youTubeCode) if (this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`)) this.targetOpen.element.querySelector(`[${this.options.youtubePlaceAttribute}]`).innerHTML = "";
                this.previousOpen.element.classList.remove(this.options.classes.popupActive);
                this.previousOpen.element.setAttribute("aria-hidden", "true");
                if (!this._reopen) {
                    document.documentElement.classList.remove(this.options.classes.bodyActive);
                    !this.bodyLock ? bodyUnlock() : null;
                    this.isOpen = false;
                }
                this._removeHash();
                if (this._selectorOpen) {
                    this.lastClosed.selector = this.previousOpen.selector;
                    this.lastClosed.element = this.previousOpen.element;
                }
                this.options.on.afterClose(this);
                document.dispatchEvent(new CustomEvent("afterPopupClose", {
                    detail: {
                        popup: this
                    }
                }));
                setTimeout((() => {
                    this._focusTrap();
                }), 50);
                this.popupLogging(`Закрыл попап`);
            }
            _getHash() {
                if (this.options.hashSettings.location) this.hash = this.targetOpen.selector.includes("#") ? this.targetOpen.selector : this.targetOpen.selector.replace(".", "#");
            }
            _openToHash() {
                let classInHash = document.querySelector(`.${window.location.hash.replace("#", "")}`) ? `.${window.location.hash.replace("#", "")}` : document.querySelector(`${window.location.hash}`) ? `${window.location.hash}` : null;
                const buttons = document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) ? document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash}"]`) : document.querySelector(`[${this.options.attributeOpenButton} = "${classInHash.replace(".", "#")}"]`);
                if (buttons && classInHash) this.open(classInHash);
            }
            _setHash() {
                history.pushState("", "", this.hash);
            }
            _removeHash() {
                history.pushState("", "", window.location.href.split("#")[0]);
            }
            _focusCatch(e) {
                const focusable = this.targetOpen.element.querySelectorAll(this._focusEl);
                const focusArray = Array.prototype.slice.call(focusable);
                const focusedIndex = focusArray.indexOf(document.activeElement);
                if (e.shiftKey && focusedIndex === 0) {
                    focusArray[focusArray.length - 1].focus();
                    e.preventDefault();
                }
                if (!e.shiftKey && focusedIndex === focusArray.length - 1) {
                    focusArray[0].focus();
                    e.preventDefault();
                }
            }
            _focusTrap() {
                const focusable = this.previousOpen.element.querySelectorAll(this._focusEl);
                if (!this.isOpen && this.lastFocusEl) this.lastFocusEl.focus(); else focusable[0].focus();
            }
            popupLogging(message) {
                this.options.logging ? FLS(`[Попапос]: ${message}`) : null;
            }
        }
        flsModules.popup = new Popup({});
        let gotoblock_gotoBlock = (targetBlock, noHeader = false, speed = 500, offsetTop = 0) => {
            const targetBlockElement = document.querySelector(targetBlock);
            if (targetBlockElement) {
                let headerItem = "";
                let headerItemHeight = 0;
                if (noHeader) {
                    headerItem = "header.header";
                    headerItemHeight = document.querySelector(headerItem).offsetHeight;
                }
                let options = {
                    speedAsDuration: true,
                    speed,
                    header: headerItem,
                    offset: offsetTop,
                    easing: "easeOutQuad"
                };
                document.documentElement.classList.contains("menu-open") ? menuClose() : null;
                if (typeof SmoothScroll !== "undefined") (new SmoothScroll).animateScroll(targetBlockElement, "", options); else {
                    let targetBlockElementPosition = targetBlockElement.getBoundingClientRect().top + scrollY;
                    targetBlockElementPosition = headerItemHeight ? targetBlockElementPosition - headerItemHeight : targetBlockElementPosition;
                    targetBlockElementPosition = offsetTop ? targetBlockElementPosition - offsetTop : targetBlockElementPosition;
                    window.scrollTo({
                        top: targetBlockElementPosition,
                        behavior: "smooth"
                    });
                }
                FLS(`[gotoBlock]: Юхуу...едем к ${targetBlock}`);
            } else FLS(`[gotoBlock]: Ой ой..Такого блока нет на странице: ${targetBlock}`);
        };
        function formFieldsInit(options = {
            viewPass: false
        }) {
            const formFields = document.querySelectorAll("input[placeholder],textarea[placeholder]");
            if (formFields.length) formFields.forEach((formField => {
                if (!formField.hasAttribute("data-placeholder-nohide")) formField.dataset.placeholder = formField.placeholder;
            }));
            document.body.addEventListener("focusin", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = "";
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.add("_form-focus");
                        targetElement.parentElement.classList.add("_form-focus");
                    }
                    formValidate.removeError(targetElement);
                }
            }));
            document.body.addEventListener("focusout", (function(e) {
                const targetElement = e.target;
                if (targetElement.tagName === "INPUT" || targetElement.tagName === "TEXTAREA") {
                    if (targetElement.dataset.placeholder) targetElement.placeholder = targetElement.dataset.placeholder;
                    if (!targetElement.hasAttribute("data-no-focus-classes")) {
                        targetElement.classList.remove("_form-focus");
                        targetElement.parentElement.classList.remove("_form-focus");
                    }
                    if (targetElement.hasAttribute("data-validate")) formValidate.validateInput(targetElement);
                }
            }));
            if (options.viewPass) document.addEventListener("click", (function(e) {
                let targetElement = e.target;
                if (targetElement.closest('[class*="__viewpass"]')) {
                    let inputType = targetElement.classList.contains("_viewpass-active") ? "password" : "text";
                    targetElement.parentElement.querySelector("input").setAttribute("type", inputType);
                    targetElement.classList.toggle("_viewpass-active");
                }
            }));
        }
        let formValidate = {
            getErrors(form) {
                let error = 0;
                let formRequiredItems = form.querySelectorAll("*[data-required]");
                if (formRequiredItems.length) formRequiredItems.forEach((formRequiredItem => {
                    if ((formRequiredItem.offsetParent !== null || formRequiredItem.tagName === "SELECT") && !formRequiredItem.disabled) error += this.validateInput(formRequiredItem);
                }));
                return error;
            },
            validateInput(formRequiredItem) {
                let error = 0;
                if (formRequiredItem.dataset.required === "email") {
                    formRequiredItem.value = formRequiredItem.value.replace(" ", "");
                    if (this.emailTest(formRequiredItem)) {
                        this.addError(formRequiredItem);
                        error++;
                    } else this.removeError(formRequiredItem);
                } else if (formRequiredItem.type === "checkbox" && !formRequiredItem.checked) {
                    this.addError(formRequiredItem);
                    error++;
                } else if (!formRequiredItem.value.trim()) {
                    this.addError(formRequiredItem);
                    error++;
                } else this.removeError(formRequiredItem);
                return error;
            },
            addError(formRequiredItem) {
                formRequiredItem.classList.add("_form-error");
                formRequiredItem.parentElement.classList.add("_form-error");
                let inputError = formRequiredItem.parentElement.querySelector(".form__error");
                if (inputError) formRequiredItem.parentElement.removeChild(inputError);
                if (formRequiredItem.dataset.error) formRequiredItem.parentElement.insertAdjacentHTML("beforeend", `<div class="form__error">${formRequiredItem.dataset.error}</div>`);
            },
            removeError(formRequiredItem) {
                formRequiredItem.classList.remove("_form-error");
                formRequiredItem.parentElement.classList.remove("_form-error");
                if (formRequiredItem.parentElement.querySelector(".form__error")) formRequiredItem.parentElement.removeChild(formRequiredItem.parentElement.querySelector(".form__error"));
            },
            formClean(form) {
                form.reset();
                setTimeout((() => {
                    let inputs = form.querySelectorAll("input,textarea");
                    for (let index = 0; index < inputs.length; index++) {
                        const el = inputs[index];
                        el.parentElement.classList.remove("_form-focus");
                        el.classList.remove("_form-focus");
                        formValidate.removeError(el);
                    }
                    let checkboxes = form.querySelectorAll(".checkbox__input");
                    if (checkboxes.length > 0) for (let index = 0; index < checkboxes.length; index++) {
                        const checkbox = checkboxes[index];
                        checkbox.checked = false;
                    }
                    if (flsModules.select) {
                        let selects = form.querySelectorAll(".select");
                        if (selects.length) for (let index = 0; index < selects.length; index++) {
                            const select = selects[index].querySelector("select");
                            flsModules.select.selectBuild(select);
                        }
                    }
                }), 0);
            },
            emailTest(formRequiredItem) {
                return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(formRequiredItem.value);
            }
        };
        function formSubmit(options = {
            validate: true
        }) {
            const forms = document.forms;
            if (forms.length) for (const form of forms) {
                form.addEventListener("submit", (function(e) {
                    const form = e.target;
                    formSubmitAction(form, e);
                    console.log("gg");
                }));
                form.addEventListener("reset", (function(e) {
                    const form = e.target;
                    formValidate.formClean(form);
                }));
            }
            async function formSubmitAction(form, e) {
                const error = !form.hasAttribute("data-no-validate") ? formValidate.getErrors(form) : 0;
                if (error === 0) {
                    const ajax = form.hasAttribute("data-ajax");
                    if (ajax) {
                        e.preventDefault();
                        const formAction = form.getAttribute("action") ? form.getAttribute("action").trim() : "#";
                        const formMethod = form.getAttribute("method") ? form.getAttribute("method").trim() : "GET";
                        const formData = new FormData(form);
                        form.classList.add("_sending");
                        const response = await fetch(formAction, {
                            method: formMethod,
                            body: formData
                        });
                        if (response.ok) {
                            let responseResult = await response.json();
                            form.classList.remove("_sending");
                            formSent(form, responseResult);
                        } else {
                            alert("Ошибка");
                            form.classList.remove("_sending");
                        }
                    } else if (form.hasAttribute("data-dev")) {
                        e.preventDefault();
                        formSent(form);
                    }
                } else {
                    e.preventDefault();
                    const formError = form.querySelector("._form-error");
                    if (formError && form.hasAttribute("data-goto-error")) gotoblock_gotoBlock(formError, true, 1e3);
                }
            }
            function formSent(form, responseResult = ``) {
                document.dispatchEvent(new CustomEvent("formSent", {
                    detail: {
                        form
                    }
                }));
                setTimeout((() => {
                    if (flsModules.popup) {
                        const popup = form.dataset.popupMessage;
                        popup ? flsModules.popup.open(popup) : null;
                    }
                }), 0);
                formValidate.formClean(form);
                formLogging(`Форма отправлена!`);
            }
            function formLogging(message) {
                FLS(`[Формы]: ${message}`);
            }
        }
        function initSliders() {
            if (document.querySelector(".swiper-hero")) new Swiper(".swiper-hero", {
                direction: "horizontal",
                observer: true,
                observeParents: true,
                direction: "horizontal",
                slidesPerView: 1,
                speed: 800,
                loop: true,
                effect: "fade",
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: false
                },
                navigation: {
                    nextEl: ".swiper-hero .slider-arrow__next"
                },
                on: {
                    transitionStart: function() {
                        var nextButton = document.querySelector(".swiper-hero .slider-arrow__next");
                        nextButton.disabled = true;
                    },
                    transitionEnd: function() {
                        var nextButton = document.querySelector(".swiper-hero .slider-arrow__next");
                        nextButton.disabled = false;
                    }
                }
            });
            if (document.querySelector(".slider-projects")) new Swiper(".slider-projects", {
                direction: "horizontal",
                slidesPerView: 1,
                spaceBetween: 45,
                observer: true,
                observer: true,
                observeParents: true,
                speed: 800,
                loop: true,
                watchOverflow: true,
                navigation: {
                    nextEl: ".projects .slider-arrow__next",
                    prevEl: ".projects .slider-arrow__prev"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 25
                    },
                    600: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    991.98: {
                        slidesPerView: 2,
                        spaceBetween: 60
                    }
                },
                autoplay: {
                    delay: 3e3,
                    disableOnInteraction: false
                }
            });
            if (document.querySelector(".slider-services")) new Swiper(".slider-services", {
                direction: "horizontal",
                slidesPerView: 1,
                spaceBetween: 45,
                observer: true,
                observer: true,
                observeParents: true,
                speed: 800,
                loop: true,
                watchOverflow: true,
                navigation: {
                    nextEl: ".services .slider-arrow__next",
                    prevEl: ".services .slider-arrow__prev"
                },
                breakpoints: {
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 45
                    },
                    610: {
                        slidesPerView: 2,
                        spaceBetween: 75
                    },
                    991.98: {
                        slidesPerView: 3,
                        spaceBetween: 29
                    },
                    1200: {
                        slidesPerView: 4,
                        spaceBetween: 40
                    }
                },
                autoplay: {
                    delay: 3500,
                    disableOnInteraction: false
                }
            });
            let swiperInstance = null;
            function setupClassesForSwiper(enable, sliderType) {
                const sliderContainer = document.querySelector(`.${sliderType}`);
                if (!sliderContainer) return;
                const sliderSlides = sliderContainer.querySelectorAll(`.${sliderType}__slide`);
                const sliderProgressbar = sliderContainer.querySelector(`.${sliderType}__progressbar`);
                const sliderBody = sliderContainer.querySelector(`.${sliderType}__body`);
                if (enable) {
                    sliderContainer.classList.add("swiper-container");
                    sliderSlides.forEach((slide => slide.classList.add("swiper-slide")));
                    sliderProgressbar.classList.add("swiper-pagination");
                    sliderBody.classList.add("swiper-wrapper");
                } else {
                    sliderContainer.classList.remove("swiper-container");
                    sliderSlides.forEach((slide => slide.classList.remove("swiper-slide")));
                    sliderProgressbar.classList.remove("swiper-pagination");
                    sliderBody.classList.remove("swiper-wrapper");
                }
            }
            function enableSlider() {
                if (document.querySelector(".slider-steps")) {
                    setupClassesForSwiper(true, "slider-steps");
                    swiperInstance = new Swiper(".slider-steps", {
                        slidesPerView: 1,
                        spaceBetween: 20,
                        loop: true,
                        direction: "horizontal",
                        speed: 800,
                        pagination: {
                            el: ".slider-steps__progressbar",
                            type: "progressbar"
                        },
                        autoplay: {
                            delay: 3e3,
                            disableOnInteraction: false
                        }
                    });
                }
                if (document.querySelector(".slider-team")) {
                    setupClassesForSwiper(true, "slider-team");
                    swiperInstance = new Swiper(".slider-team", {
                        slidesPerView: 1.2,
                        spaceBetween: 20,
                        loop: true,
                        direction: "horizontal",
                        speed: 800,
                        pagination: {
                            el: ".slider-team__progressbar",
                            type: "progressbar"
                        },
                        breakpoints: {
                            991: {},
                            767: {
                                slidesPerView: 3.2
                            },
                            479.98: {
                                slidesPerView: 2.2
                            }
                        },
                        autoplay: {
                            delay: 3e3,
                            disableOnInteraction: false
                        }
                    });
                }
            }
            function disableSlider(sliderType) {
                if (swiperInstance) {
                    swiperInstance.destroy(true, true);
                    swiperInstance = null;
                    setupClassesForSwiper(false, sliderType);
                }
            }
            const matchMediaQuery1 = window.matchMedia("(max-width: 767.98px)");
            const matchMediaQuery2 = window.matchMedia("(max-width: 991.98px)");
            function handleMatchMediaChange(e) {
                if (matchMediaQuery1.matches) {
                    if (document.querySelector(".slider-steps")) enableSlider("slider-steps");
                } else if (document.querySelector(".slider-steps")) disableSlider("slider-steps");
                if (matchMediaQuery2.matches) {
                    if (document.querySelector(".slider-team")) enableSlider("slider-team");
                } else if (document.querySelector(".slider-team")) disableSlider("slider-team");
            }
            handleMatchMediaChange(matchMediaQuery1);
            handleMatchMediaChange(matchMediaQuery2);
            matchMediaQuery1.addListener(handleMatchMediaChange);
            matchMediaQuery2.addListener(handleMatchMediaChange);
        }
        window.addEventListener("DOMContentLoaded", (function(e) {
            initSliders();
        }));
        var lazyload_min = __webpack_require__(24);
        new lazyload_min({
            elements_selector: "[data-src],[data-srcset]",
            class_loaded: "_lazy-loaded",
            use_native: true
        });
        let addWindowScrollEvent = false;
        function headerScroll() {
            addWindowScrollEvent = true;
            const header = document.querySelector("header.header");
            const headerShow = header.hasAttribute("data-scroll-show");
            const headerShowTimer = header.dataset.scrollShow ? header.dataset.scrollShow : 500;
            const startPoint = header.dataset.scroll ? header.dataset.scroll : 1;
            let scrollDirection = 0;
            let timer;
            document.addEventListener("windowScroll", (function(e) {
                const scrollTop = window.scrollY;
                clearTimeout(timer);
                if (scrollTop >= startPoint) {
                    !header.classList.contains("_header-scroll") ? header.classList.add("_header-scroll") : null;
                    if (headerShow) {
                        if (scrollTop > scrollDirection) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null; else !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        timer = setTimeout((() => {
                            !header.classList.contains("_header-show") ? header.classList.add("_header-show") : null;
                        }), headerShowTimer);
                    }
                } else {
                    header.classList.contains("_header-scroll") ? header.classList.remove("_header-scroll") : null;
                    if (headerShow) header.classList.contains("_header-show") ? header.classList.remove("_header-show") : null;
                }
                scrollDirection = scrollTop <= 0 ? 0 : scrollTop;
            }));
        }
        setTimeout((() => {
            if (addWindowScrollEvent) {
                let windowScroll = new Event("windowScroll");
                window.addEventListener("scroll", (function(e) {
                    document.dispatchEvent(windowScroll);
                }));
            }
        }), 0);
        __webpack_require__(784);
        function DynamicAdapt(type) {
            this.type = type;
        }
        DynamicAdapt.prototype.init = function() {
            const _this = this;
            this.оbjects = [];
            this.daClassname = "_dynamic_adapt_";
            this.nodes = document.querySelectorAll("[data-da]");
            for (let i = 0; i < this.nodes.length; i++) {
                const node = this.nodes[i];
                const data = node.dataset.da.trim();
                const dataArray = data.split(",");
                const оbject = {};
                оbject.element = node;
                оbject.parent = node.parentNode;
                оbject.destination = document.querySelector(dataArray[0].trim());
                оbject.breakpoint = dataArray[1] ? dataArray[1].trim() : "767";
                оbject.place = dataArray[2] ? dataArray[2].trim() : "last";
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.оbjects.push(оbject);
            }
            this.arraySort(this.оbjects);
            this.mediaQueries = Array.prototype.map.call(this.оbjects, (function(item) {
                return "(" + this.type + "-width: " + item.breakpoint + "px)," + item.breakpoint;
            }), this);
            this.mediaQueries = Array.prototype.filter.call(this.mediaQueries, (function(item, index, self) {
                return Array.prototype.indexOf.call(self, item) === index;
            }));
            for (let i = 0; i < this.mediaQueries.length; i++) {
                const media = this.mediaQueries[i];
                const mediaSplit = String.prototype.split.call(media, ",");
                const matchMedia = window.matchMedia(mediaSplit[0]);
                const mediaBreakpoint = mediaSplit[1];
                const оbjectsFilter = Array.prototype.filter.call(this.оbjects, (function(item) {
                    return item.breakpoint === mediaBreakpoint;
                }));
                matchMedia.addListener((function() {
                    _this.mediaHandler(matchMedia, оbjectsFilter);
                }));
                this.mediaHandler(matchMedia, оbjectsFilter);
            }
        };
        DynamicAdapt.prototype.mediaHandler = function(matchMedia, оbjects) {
            if (matchMedia.matches) for (let i = 0; i < оbjects.length; i++) {
                const оbject = оbjects[i];
                оbject.index = this.indexInParent(оbject.parent, оbject.element);
                this.moveTo(оbject.place, оbject.element, оbject.destination);
            } else for (let i = оbjects.length - 1; i >= 0; i--) {
                const оbject = оbjects[i];
                if (оbject.element.classList.contains(this.daClassname)) this.moveBack(оbject.parent, оbject.element, оbject.index);
            }
        };
        DynamicAdapt.prototype.moveTo = function(place, element, destination) {
            element.classList.add(this.daClassname);
            if (place === "last" || place >= destination.children.length) {
                destination.insertAdjacentElement("beforeend", element);
                return;
            }
            if (place === "first") {
                destination.insertAdjacentElement("afterbegin", element);
                return;
            }
            destination.children[place].insertAdjacentElement("beforebegin", element);
        };
        DynamicAdapt.prototype.moveBack = function(parent, element, index) {
            element.classList.remove(this.daClassname);
            if (parent.children[index] !== void 0) parent.children[index].insertAdjacentElement("beforebegin", element); else parent.insertAdjacentElement("beforeend", element);
        };
        DynamicAdapt.prototype.indexInParent = function(parent, element) {
            const array = Array.prototype.slice.call(parent.children);
            return Array.prototype.indexOf.call(array, element);
        };
        DynamicAdapt.prototype.arraySort = function(arr) {
            if (this.type === "min") Array.prototype.sort.call(arr, (function(a, b) {
                if (a.breakpoint === b.breakpoint) {
                    if (a.place === b.place) return 0;
                    if (a.place === "first" || b.place === "last") return -1;
                    if (a.place === "last" || b.place === "first") return 1;
                    return a.place - b.place;
                }
                return a.breakpoint - b.breakpoint;
            })); else {
                Array.prototype.sort.call(arr, (function(a, b) {
                    if (a.breakpoint === b.breakpoint) {
                        if (a.place === b.place) return 0;
                        if (a.place === "first" || b.place === "last") return 1;
                        if (a.place === "last" || b.place === "first") return -1;
                        return b.place - a.place;
                    }
                    return b.breakpoint - a.breakpoint;
                }));
                return;
            }
        };
        const da = new DynamicAdapt("max");
        da.init();
        function map(n) {
            if (document.getElementById("wrapMap")) ymaps.ready(initMap);
            async function initMap() {
                await ymaps.ready;
                var myMap = new ymaps.Map("wrapMap", {
                    controls: [ "zoomControl", "typeSelector", "fullscreenControl" ],
                    center: [ 55.9042, 40.898894 ],
                    zoom: 10
                });
                let myPlacemark = new ymaps.Placemark([ 55.9042, 40.898894 ], {}, {
                    balloonContentBody: "Москва, Николоямская 40с1",
                    balloonContentFooter: "+ 7(495) 507-54 - 90",
                    hasBalloon: true,
                    iconLayout: "default#imageWithContent",
                    iconImageHref: "img/icons/location.svg",
                    iconImageSize: [ 40, 51 ],
                    iconImageOffset: [ -20, -20 ],
                    iconContentOffset: [ 0, 0 ]
                });
                myMap.geoObjects.add(myPlacemark);
                myMap.events.add("click", (function() {
                    console.log("click on the map");
                    myMap.behaviors.enable("scrollZoom");
                    myMap.behaviors.enable("drag");
                }));
                document.addEventListener("scroll", (function() {
                    console.log("scroll on the page");
                    myMap.behaviors.disable("scrollZoom");
                    myMap.behaviors.disable("drag");
                }));
            }
        }
        map();
        function updateStepsCounter(stepNumber) {
            const stepsCounter = document.getElementById("stepsCounter");
            stepsCounter.textContent = `Вопрос ${stepNumber} / 6`;
        }
        function updateButtonVisibility() {
            const currentStep = document.querySelector(".form-brief__step:not(._hidden)");
            const prevButton = document.querySelector(".left-nav-button");
            const nextButton = document.querySelector(".right-nav-button");
            const stepNumber = currentStep.getAttribute("data-form-step");
            updateStepsCounter(stepNumber);
            prevButton.classList.toggle("_hidden", stepNumber === "1");
            nextButton.classList.toggle("_hidden", stepNumber === "6");
        }
        function showPreviousStep() {
            const currentStep = document.querySelector(".form-brief__step:not(._hidden)");
            if (currentStep.previousElementSibling && currentStep.previousElementSibling.classList.contains("form-brief__step")) {
                currentStep.classList.add("_hidden");
                currentStep.previousElementSibling.classList.remove("_hidden");
            }
            updateButtonVisibility();
        }
        function showNextStep() {
            const currentStep = document.querySelector(".form-brief__step:not(._hidden)");
            if (currentStep.nextElementSibling && currentStep.nextElementSibling.classList.contains("form-brief__step")) {
                currentStep.classList.add("_hidden");
                currentStep.nextElementSibling.classList.remove("_hidden");
            }
            updateButtonVisibility();
        }
        function handleImageClick(targetElement) {
            const radioInput = targetElement.closest(".step-2__image").previousElementSibling;
            radioInput.checked = true;
            document.querySelectorAll(".step-2__image").forEach((function(img) {
                img.classList.remove("_selected");
            }));
            targetElement.closest(".step-2__image").classList.add("_selected");
        }
        function documentActions(e) {
            const targetElement = e.target;
            console.log("click on:", targetElement);
            if (targetElement.classList.contains("videos__play-btn-img")) {
                const videoContainer = targetElement.closest(".videos__body");
                if (!videoContainer.classList.contains("_playing")) {
                    const video = videoContainer.querySelector(".videos__video");
                    const videoSrc = video.getAttribute("data-video-src");
                    video.innerHTML = `<source src="${videoSrc}" type="video/mp4">`;
                    video.controls = true;
                    video.load();
                    video.play();
                    videoContainer.classList.add("_playing");
                } else console.log("Видео уже воспроизводится.");
            }
            if (targetElement.classList.contains("_prev") || targetElement.classList.contains("left-nav-button")) showPreviousStep(); else if (targetElement.classList.contains("right-nav-button")) showNextStep(); else if (targetElement.closest(".step-2__image")) handleImageClick(targetElement); else if (targetElement.classList.contains("step-6__submit")) e.preventDefault();
        }
        window.onload = function() {
            console.log("window.onload");
            document.addEventListener("click", documentActions);
        };
        window["FLS"] = true;
        isWebp();
        menuInit();
        formFieldsInit({
            viewPass: false
        });
        formSubmit();
        headerScroll();
    })();
})();