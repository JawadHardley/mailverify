/*!
 * Tabler v1.0.0-beta20 (https://tabler.io)
 * @version 1.0.0-beta20
 * @link https://tabler.io
 * Copyright 2018-2023 The Tabler Authors
 * Copyright 2018-2023 codecalm.net Paweł Kuna
 * Licensed under MIT (https://github.com/tabler/tabler/blob/master/LICENSE)
 */
!(function (t) {
    "function" == typeof define && define.amd ? define(t) : t();
})(function () {
    "use strict";
    var t = new Map();
    function e(e) {
        var s = t.get(e);
        s && s.destroy();
    }
    function s(e) {
        var s = t.get(e);
        s && s.update();
    }
    var i = null;
    "undefined" == typeof window
        ? (((i = function (t) {
              return t;
          }).destroy = function (t) {
              return t;
          }),
          (i.update = function (t) {
              return t;
          }))
        : (((i = function (e, s) {
              return (
                  e &&
                      Array.prototype.forEach.call(
                          e.length ? e : [e],
                          function (e) {
                              return (function (e) {
                                  if (
                                      e &&
                                      e.nodeName &&
                                      "TEXTAREA" === e.nodeName &&
                                      !t.has(e)
                                  ) {
                                      var s,
                                          i = null,
                                          n = window.getComputedStyle(e),
                                          r =
                                              ((s = e.value),
                                              function () {
                                                  a({
                                                      testForHeightReduction:
                                                          "" === s ||
                                                          !e.value.startsWith(
                                                              s
                                                          ),
                                                      restoreTextAlign: null,
                                                  }),
                                                      (s = e.value);
                                              }),
                                          o = function (s) {
                                              e.removeEventListener(
                                                  "autosize:destroy",
                                                  o
                                              ),
                                                  e.removeEventListener(
                                                      "autosize:update",
                                                      l
                                                  ),
                                                  e.removeEventListener(
                                                      "input",
                                                      r
                                                  ),
                                                  window.removeEventListener(
                                                      "resize",
                                                      l
                                                  ),
                                                  Object.keys(s).forEach(
                                                      function (t) {
                                                          return (e.style[t] =
                                                              s[t]);
                                                      }
                                                  ),
                                                  t.delete(e);
                                          }.bind(e, {
                                              height: e.style.height,
                                              resize: e.style.resize,
                                              textAlign: e.style.textAlign,
                                              overflowY: e.style.overflowY,
                                              overflowX: e.style.overflowX,
                                              wordWrap: e.style.wordWrap,
                                          });
                                      e.addEventListener("autosize:destroy", o),
                                          e.addEventListener(
                                              "autosize:update",
                                              l
                                          ),
                                          e.addEventListener("input", r),
                                          window.addEventListener("resize", l),
                                          (e.style.overflowX = "hidden"),
                                          (e.style.wordWrap = "break-word"),
                                          t.set(e, { destroy: o, update: l }),
                                          l();
                                  }
                                  function a(t) {
                                      var s,
                                          r,
                                          o = t.restoreTextAlign,
                                          l = void 0 === o ? null : o,
                                          u = t.testForHeightReduction,
                                          h = void 0 === u || u,
                                          c = n.overflowY;
                                      if (
                                          0 !== e.scrollHeight &&
                                          ("vertical" === n.resize
                                              ? (e.style.resize = "none")
                                              : "both" === n.resize &&
                                                (e.style.resize = "horizontal"),
                                          h &&
                                              ((s = (function (t) {
                                                  for (
                                                      var e = [];
                                                      t &&
                                                      t.parentNode &&
                                                      t.parentNode instanceof
                                                          Element;

                                                  )
                                                      t.parentNode.scrollTop &&
                                                          e.push([
                                                              t.parentNode,
                                                              t.parentNode
                                                                  .scrollTop,
                                                          ]),
                                                          (t = t.parentNode);
                                                  return function () {
                                                      return e.forEach(
                                                          function (t) {
                                                              var e = t[0],
                                                                  s = t[1];
                                                              (e.style.scrollBehavior =
                                                                  "auto"),
                                                                  (e.scrollTop =
                                                                      s),
                                                                  (e.style.scrollBehavior =
                                                                      null);
                                                          }
                                                      );
                                                  };
                                              })(e)),
                                              (e.style.height = "")),
                                          (r =
                                              "content-box" === n.boxSizing
                                                  ? e.scrollHeight -
                                                    (parseFloat(n.paddingTop) +
                                                        parseFloat(
                                                            n.paddingBottom
                                                        ))
                                                  : e.scrollHeight +
                                                    parseFloat(
                                                        n.borderTopWidth
                                                    ) +
                                                    parseFloat(
                                                        n.borderBottomWidth
                                                    )),
                                          "none" !== n.maxHeight &&
                                          r > parseFloat(n.maxHeight)
                                              ? ("hidden" === n.overflowY &&
                                                    (e.style.overflow =
                                                        "scroll"),
                                                (r = parseFloat(n.maxHeight)))
                                              : "hidden" !== n.overflowY &&
                                                (e.style.overflow = "hidden"),
                                          (e.style.height = r + "px"),
                                          l && (e.style.textAlign = l),
                                          s && s(),
                                          i !== r &&
                                              (e.dispatchEvent(
                                                  new Event(
                                                      "autosize:resized",
                                                      { bubbles: !0 }
                                                  )
                                              ),
                                              (i = r)),
                                          c !== n.overflow && !l)
                                      ) {
                                          var d = n.textAlign;
                                          "hidden" === n.overflow &&
                                              (e.style.textAlign =
                                                  "start" === d
                                                      ? "end"
                                                      : "start"),
                                              a({
                                                  restoreTextAlign: d,
                                                  testForHeightReduction: !0,
                                              });
                                      }
                                  }
                                  function l() {
                                      a({
                                          testForHeightReduction: !0,
                                          restoreTextAlign: null,
                                      });
                                  }
                              })(e);
                          }
                      ),
                  e
              );
          }).destroy = function (t) {
              return (
                  t && Array.prototype.forEach.call(t.length ? t : [t], e), t
              );
          }),
          (i.update = function (t) {
              return (
                  t && Array.prototype.forEach.call(t.length ? t : [t], s), t
              );
          }));
    var n = i,
        r = document.querySelectorAll('[data-bs-toggle="autosize"]');
    function o(t, e) {
        if (null == t) return {};
        var s,
            i,
            n = {},
            r = Object.keys(t);
        for (i = 0; i < r.length; i++)
            (s = r[i]), e.indexOf(s) >= 0 || (n[s] = t[s]);
        return n;
    }
    function a(t) {
        let e =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return new a.InputMask(t, e);
    }
    r.length &&
        r.forEach(function (t) {
            n(t);
        });
    class l {
        constructor(t) {
            Object.assign(
                this,
                { inserted: "", rawInserted: "", skip: !1, tailShift: 0 },
                t
            );
        }
        aggregate(t) {
            return (
                (this.rawInserted += t.rawInserted),
                (this.skip = this.skip || t.skip),
                (this.inserted += t.inserted),
                (this.tailShift += t.tailShift),
                this
            );
        }
        get offset() {
            return this.tailShift + this.inserted.length;
        }
    }
    function u(t) {
        return "string" == typeof t || t instanceof String;
    }
    a.ChangeDetails = l;
    const h = "NONE",
        c = "LEFT",
        d = "FORCE_LEFT",
        p = "RIGHT",
        f = "FORCE_RIGHT";
    function g(t) {
        return t.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
    }
    function m(t) {
        return Array.isArray(t) ? t : [t, new l()];
    }
    function _(t, e) {
        if (e === t) return !0;
        var s,
            i = Array.isArray(e),
            n = Array.isArray(t);
        if (i && n) {
            if (e.length != t.length) return !1;
            for (s = 0; s < e.length; s++) if (!_(e[s], t[s])) return !1;
            return !0;
        }
        if (i != n) return !1;
        if (e && t && "object" == typeof e && "object" == typeof t) {
            var r = e instanceof Date,
                o = t instanceof Date;
            if (r && o) return e.getTime() == t.getTime();
            if (r != o) return !1;
            var a = e instanceof RegExp,
                l = t instanceof RegExp;
            if (a && l) return e.toString() == t.toString();
            if (a != l) return !1;
            var u = Object.keys(e);
            for (s = 0; s < u.length; s++)
                if (!Object.prototype.hasOwnProperty.call(t, u[s])) return !1;
            for (s = 0; s < u.length; s++) if (!_(t[u[s]], e[u[s]])) return !1;
            return !0;
        }
        return (
            !(!e || !t || "function" != typeof e || "function" != typeof t) &&
            e.toString() === t.toString()
        );
    }
    class v {
        constructor(t, e, s, i) {
            for (
                this.value = t,
                    this.cursorPos = e,
                    this.oldValue = s,
                    this.oldSelection = i;
                this.value.slice(0, this.startChangePos) !==
                this.oldValue.slice(0, this.startChangePos);

            )
                --this.oldSelection.start;
        }
        get startChangePos() {
            return Math.min(this.cursorPos, this.oldSelection.start);
        }
        get insertedCount() {
            return this.cursorPos - this.startChangePos;
        }
        get inserted() {
            return this.value.substr(this.startChangePos, this.insertedCount);
        }
        get removedCount() {
            return Math.max(
                this.oldSelection.end - this.startChangePos ||
                    this.oldValue.length - this.value.length,
                0
            );
        }
        get removed() {
            return this.oldValue.substr(this.startChangePos, this.removedCount);
        }
        get head() {
            return this.value.substring(0, this.startChangePos);
        }
        get tail() {
            return this.value.substring(
                this.startChangePos + this.insertedCount
            );
        }
        get removeDirection() {
            return !this.removedCount || this.insertedCount
                ? h
                : (this.oldSelection.end !== this.cursorPos &&
                      this.oldSelection.start !== this.cursorPos) ||
                  this.oldSelection.end !== this.oldSelection.start
                ? c
                : p;
        }
    }
    class b {
        constructor() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0,
                s = arguments.length > 2 ? arguments[2] : void 0;
            (this.value = t), (this.from = e), (this.stop = s);
        }
        toString() {
            return this.value;
        }
        extend(t) {
            this.value += String(t);
        }
        appendTo(t) {
            return t
                .append(this.toString(), { tail: !0 })
                .aggregate(t._appendPlaceholder());
        }
        get state() {
            return { value: this.value, from: this.from, stop: this.stop };
        }
        set state(t) {
            Object.assign(this, t);
        }
        unshift(t) {
            if (!this.value.length || (null != t && this.from >= t)) return "";
            const e = this.value[0];
            return (this.value = this.value.slice(1)), e;
        }
        shift() {
            if (!this.value.length) return "";
            const t = this.value[this.value.length - 1];
            return (this.value = this.value.slice(0, -1)), t;
        }
    }
    class k {
        constructor(t) {
            (this._value = ""),
                this._update(Object.assign({}, k.DEFAULTS, t)),
                (this.isInitialized = !0);
        }
        updateOptions(t) {
            Object.keys(t).length &&
                this.withValueRefresh(this._update.bind(this, t));
        }
        _update(t) {
            Object.assign(this, t);
        }
        get state() {
            return { _value: this.value };
        }
        set state(t) {
            this._value = t._value;
        }
        reset() {
            this._value = "";
        }
        get value() {
            return this._value;
        }
        set value(t) {
            this.resolve(t);
        }
        resolve(t) {
            return (
                this.reset(),
                this.append(t, { input: !0 }, ""),
                this.doCommit(),
                this.value
            );
        }
        get unmaskedValue() {
            return this.value;
        }
        set unmaskedValue(t) {
            this.reset(), this.append(t, {}, ""), this.doCommit();
        }
        get typedValue() {
            return this.doParse(this.value);
        }
        set typedValue(t) {
            this.value = this.doFormat(t);
        }
        get rawInputValue() {
            return this.extractInput(0, this.value.length, { raw: !0 });
        }
        set rawInputValue(t) {
            this.reset(), this.append(t, { raw: !0 }, ""), this.doCommit();
        }
        get displayValue() {
            return this.value;
        }
        get isComplete() {
            return !0;
        }
        get isFilled() {
            return this.isComplete;
        }
        nearestInputPos(t, e) {
            return t;
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            return Math.min(this.value.length, e - t);
        }
        extractInput() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            return this.value.slice(t, e);
        }
        extractTail() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            return new b(this.extractInput(t, e), t);
        }
        appendTail(t) {
            return u(t) && (t = new b(String(t))), t.appendTo(this);
        }
        _appendCharRaw(t) {
            return t
                ? ((this._value += t), new l({ inserted: t, rawInserted: t }))
                : new l();
        }
        _appendChar(t) {
            let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                s = arguments.length > 2 ? arguments[2] : void 0;
            const i = this.state;
            let n;
            if (
                (([t, n] = m(this.doPrepare(t, e))),
                (n = n.aggregate(this._appendCharRaw(t, e))),
                n.inserted)
            ) {
                let t,
                    r = !1 !== this.doValidate(e);
                if (r && null != s) {
                    const e = this.state;
                    !0 === this.overwrite &&
                        ((t = s.state),
                        s.unshift(this.value.length - n.tailShift));
                    let i = this.appendTail(s);
                    (r = i.rawInserted === s.toString()),
                        (r && i.inserted) ||
                            "shift" !== this.overwrite ||
                            ((this.state = e),
                            (t = s.state),
                            s.shift(),
                            (i = this.appendTail(s)),
                            (r = i.rawInserted === s.toString())),
                        r && i.inserted && (this.state = e);
                }
                r || ((n = new l()), (this.state = i), s && t && (s.state = t));
            }
            return n;
        }
        _appendPlaceholder() {
            return new l();
        }
        _appendEager() {
            return new l();
        }
        append(t, e, s) {
            if (!u(t)) throw new Error("value should be string");
            const i = new l(),
                n = u(s) ? new b(String(s)) : s;
            null != e && e.tail && (e._beforeTailState = this.state);
            for (let s = 0; s < t.length; ++s) {
                const r = this._appendChar(t[s], e, n);
                if (!r.rawInserted && !this.doSkipInvalid(t[s], e, n)) break;
                i.aggregate(r);
            }
            return (
                null != n && (i.tailShift += this.appendTail(n).tailShift),
                (!0 === this.eager || "append" === this.eager) &&
                    null != e &&
                    e.input &&
                    t &&
                    i.aggregate(this._appendEager()),
                i
            );
        }
        remove() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            return (
                (this._value = this.value.slice(0, t) + this.value.slice(e)),
                new l()
            );
        }
        withValueRefresh(t) {
            if (this._refreshing || !this.isInitialized) return t();
            this._refreshing = !0;
            const e = this.rawInputValue,
                s = this.value,
                i = t();
            return (
                (this.rawInputValue = e),
                this.value &&
                    this.value !== s &&
                    0 === s.indexOf(this.value) &&
                    this.append(s.slice(this.value.length), {}, ""),
                delete this._refreshing,
                i
            );
        }
        runIsolated(t) {
            if (this._isolated || !this.isInitialized) return t(this);
            this._isolated = !0;
            const e = this.state,
                s = t(this);
            return (this.state = e), delete this._isolated, s;
        }
        doSkipInvalid(t) {
            return this.skipInvalid;
        }
        doPrepare(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            return this.prepare ? this.prepare(t, this, e) : t;
        }
        doValidate(t) {
            return (
                (!this.validate || this.validate(this.value, this, t)) &&
                (!this.parent || this.parent.doValidate(t))
            );
        }
        doCommit() {
            this.commit && this.commit(this.value, this);
        }
        doFormat(t) {
            return this.format ? this.format(t, this) : t;
        }
        doParse(t) {
            return this.parse ? this.parse(t, this) : t;
        }
        splice(t, e, s, i) {
            let n =
                arguments.length > 4 && void 0 !== arguments[4]
                    ? arguments[4]
                    : { input: !0 };
            const r = t + e,
                o = this.extractTail(r),
                a = !0 === this.eager || "remove" === this.eager;
            let u;
            a &&
                ((i = (function (t) {
                    switch (t) {
                        case c:
                            return d;
                        case p:
                            return f;
                        default:
                            return t;
                    }
                })(i)),
                (u = this.extractInput(0, r, { raw: !0 })));
            let g = t;
            const m = new l();
            if (
                (i !== h &&
                    ((g = this.nearestInputPos(
                        t,
                        e > 1 && 0 !== t && !a ? h : i
                    )),
                    (m.tailShift = g - t)),
                m.aggregate(this.remove(g)),
                a && i !== h && u === this.rawInputValue)
            )
                if (i === d) {
                    let t;
                    for (
                        ;
                        u === this.rawInputValue && (t = this.value.length);

                    )
                        m.aggregate(new l({ tailShift: -1 })).aggregate(
                            this.remove(t - 1)
                        );
                } else i === f && o.unshift();
            return m.aggregate(this.append(s, n, o));
        }
        maskEquals(t) {
            return this.mask === t;
        }
        typedValueEquals(t) {
            const e = this.typedValue;
            return (
                t === e ||
                (k.EMPTY_VALUES.includes(t) && k.EMPTY_VALUES.includes(e)) ||
                this.doFormat(t) === this.doFormat(this.typedValue)
            );
        }
    }
    function y(t) {
        if (null == t) throw new Error("mask property should be defined");
        return t instanceof RegExp
            ? a.MaskedRegExp
            : u(t)
            ? a.MaskedPattern
            : t instanceof Date || t === Date
            ? a.MaskedDate
            : t instanceof Number || "number" == typeof t || t === Number
            ? a.MaskedNumber
            : Array.isArray(t) || t === Array
            ? a.MaskedDynamic
            : a.Masked && t.prototype instanceof a.Masked
            ? t
            : t instanceof a.Masked
            ? t.constructor
            : t instanceof Function
            ? a.MaskedFunction
            : (console.warn("Mask not found for mask", t), a.Masked);
    }
    function A(t) {
        if (a.Masked && t instanceof a.Masked) return t;
        const e = (t = Object.assign({}, t)).mask;
        if (a.Masked && e instanceof a.Masked) return e;
        const s = y(e);
        if (!s)
            throw new Error(
                "Masked class is not found for provided mask, appropriate module needs to be import manually before creating mask."
            );
        return new s(t);
    }
    (k.DEFAULTS = { format: String, parse: (t) => t, skipInvalid: !0 }),
        (k.EMPTY_VALUES = [void 0, null, ""]),
        (a.Masked = k),
        (a.createMask = A);
    const w = [
            "parent",
            "isOptional",
            "placeholderChar",
            "displayChar",
            "lazy",
            "eager",
        ],
        E = {
            0: /\d/,
            a: /[\u0041-\u005A\u0061-\u007A\u00AA\u00B5\u00BA\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0\u08A2-\u08AC\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097F\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C33\u0C35-\u0C39\u0C3D\u0C58\u0C59\u0C60\u0C61\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D60\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F4\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191C\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19C1-\u19C7\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FCC\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA697\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA78E\uA790-\uA793\uA7A0-\uA7AA\uA7F8-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA80-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uABC0-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/,
            "*": /./,
        };
    class C {
        constructor(t) {
            const {
                    parent: e,
                    isOptional: s,
                    placeholderChar: i,
                    displayChar: n,
                    lazy: r,
                    eager: a,
                } = t,
                l = o(t, w);
            (this.masked = A(l)),
                Object.assign(this, {
                    parent: e,
                    isOptional: s,
                    placeholderChar: i,
                    displayChar: n,
                    lazy: r,
                    eager: a,
                });
        }
        reset() {
            (this.isFilled = !1), this.masked.reset();
        }
        remove() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            return 0 === t && e >= 1
                ? ((this.isFilled = !1), this.masked.remove(t, e))
                : new l();
        }
        get value() {
            return (
                this.masked.value ||
                (this.isFilled && !this.isOptional ? this.placeholderChar : "")
            );
        }
        get unmaskedValue() {
            return this.masked.unmaskedValue;
        }
        get displayValue() {
            return (this.masked.value && this.displayChar) || this.value;
        }
        get isComplete() {
            return Boolean(this.masked.value) || this.isOptional;
        }
        _appendChar(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            if (this.isFilled) return new l();
            const s = this.masked.state,
                i = this.masked._appendChar(t, e);
            return (
                i.inserted &&
                    !1 === this.doValidate(e) &&
                    ((i.inserted = i.rawInserted = ""),
                    (this.masked.state = s)),
                i.inserted ||
                    this.isOptional ||
                    this.lazy ||
                    e.input ||
                    (i.inserted = this.placeholderChar),
                (i.skip = !i.inserted && !this.isOptional),
                (this.isFilled = Boolean(i.inserted)),
                i
            );
        }
        append() {
            return this.masked.append(...arguments);
        }
        _appendPlaceholder() {
            const t = new l();
            return (
                this.isFilled ||
                    this.isOptional ||
                    ((this.isFilled = !0), (t.inserted = this.placeholderChar)),
                t
            );
        }
        _appendEager() {
            return new l();
        }
        extractTail() {
            return this.masked.extractTail(...arguments);
        }
        appendTail() {
            return this.masked.appendTail(...arguments);
        }
        extractInput() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0;
            return this.masked.extractInput(t, e, s);
        }
        nearestInputPos(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : h;
            const s = this.value.length,
                i = Math.min(Math.max(t, 0), s);
            switch (e) {
                case c:
                case d:
                    return this.isComplete ? i : 0;
                case p:
                case f:
                    return this.isComplete ? i : s;
                default:
                    return i;
            }
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            return this.value.slice(t, e).length;
        }
        doValidate() {
            return (
                this.masked.doValidate(...arguments) &&
                (!this.parent || this.parent.doValidate(...arguments))
            );
        }
        doCommit() {
            this.masked.doCommit();
        }
        get state() {
            return { masked: this.masked.state, isFilled: this.isFilled };
        }
        set state(t) {
            (this.masked.state = t.masked), (this.isFilled = t.isFilled);
        }
    }
    class x {
        constructor(t) {
            Object.assign(this, t), (this._value = ""), (this.isFixed = !0);
        }
        get value() {
            return this._value;
        }
        get unmaskedValue() {
            return this.isUnmasking ? this.value : "";
        }
        get displayValue() {
            return this.value;
        }
        reset() {
            (this._isRawInput = !1), (this._value = "");
        }
        remove() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this._value.length;
            return (
                (this._value = this._value.slice(0, t) + this._value.slice(e)),
                this._value || (this._isRawInput = !1),
                new l()
            );
        }
        nearestInputPos(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : h;
            const s = this._value.length;
            switch (e) {
                case c:
                case d:
                    return 0;
                default:
                    return s;
            }
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this._value.length;
            return this._isRawInput ? e - t : 0;
        }
        extractInput() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this._value.length;
            return (
                ((arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : {}
                ).raw &&
                    this._isRawInput &&
                    this._value.slice(t, e)) ||
                ""
            );
        }
        get isComplete() {
            return !0;
        }
        get isFilled() {
            return Boolean(this._value);
        }
        _appendChar(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            const s = new l();
            if (this.isFilled) return s;
            const i = !0 === this.eager || "append" === this.eager,
                n =
                    this.char === t &&
                    (this.isUnmasking || e.input || e.raw) &&
                    (!e.raw || !i) &&
                    !e.tail;
            return (
                n && (s.rawInserted = this.char),
                (this._value = s.inserted = this.char),
                (this._isRawInput = n && (e.raw || e.input)),
                s
            );
        }
        _appendEager() {
            return this._appendChar(this.char, { tail: !0 });
        }
        _appendPlaceholder() {
            const t = new l();
            return this.isFilled || (this._value = t.inserted = this.char), t;
        }
        extractTail() {
            return (
                (arguments.length > 1 && void 0 !== arguments[1]) ||
                    this.value.length,
                new b("")
            );
        }
        appendTail(t) {
            return u(t) && (t = new b(String(t))), t.appendTo(this);
        }
        append(t, e, s) {
            const i = this._appendChar(t[0], e);
            return (
                null != s && (i.tailShift += this.appendTail(s).tailShift), i
            );
        }
        doCommit() {}
        get state() {
            return { _value: this._value, _isRawInput: this._isRawInput };
        }
        set state(t) {
            Object.assign(this, t);
        }
    }
    const S = ["chunks"];
    class F {
        constructor() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : [],
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : 0;
            (this.chunks = t), (this.from = e);
        }
        toString() {
            return this.chunks.map(String).join("");
        }
        extend(t) {
            if (!String(t)) return;
            u(t) && (t = new b(String(t)));
            const e = this.chunks[this.chunks.length - 1],
                s =
                    e &&
                    (e.stop === t.stop || null == t.stop) &&
                    t.from === e.from + e.toString().length;
            if (t instanceof b)
                s ? e.extend(t.toString()) : this.chunks.push(t);
            else if (t instanceof F) {
                if (null == t.stop) {
                    let e;
                    for (; t.chunks.length && null == t.chunks[0].stop; )
                        (e = t.chunks.shift()),
                            (e.from += t.from),
                            this.extend(e);
                }
                t.toString() && ((t.stop = t.blockIndex), this.chunks.push(t));
            }
        }
        appendTo(t) {
            if (!(t instanceof a.MaskedPattern)) {
                return new b(this.toString()).appendTo(t);
            }
            const e = new l();
            for (let s = 0; s < this.chunks.length && !e.skip; ++s) {
                const i = this.chunks[s],
                    n = t._mapPosToBlock(t.value.length),
                    r = i.stop;
                let o;
                if (null != r && (!n || n.index <= r)) {
                    if (i instanceof F || t._stops.indexOf(r) >= 0) {
                        const s = t._appendPlaceholder(r);
                        e.aggregate(s);
                    }
                    o = i instanceof F && t._blocks[r];
                }
                if (o) {
                    const s = o.appendTail(i);
                    (s.skip = !1), e.aggregate(s), (t._value += s.inserted);
                    const n = i.toString().slice(s.rawInserted.length);
                    n && e.aggregate(t.append(n, { tail: !0 }));
                } else e.aggregate(t.append(i.toString(), { tail: !0 }));
            }
            return e;
        }
        get state() {
            return {
                chunks: this.chunks.map((t) => t.state),
                from: this.from,
                stop: this.stop,
                blockIndex: this.blockIndex,
            };
        }
        set state(t) {
            const { chunks: e } = t,
                s = o(t, S);
            Object.assign(this, s),
                (this.chunks = e.map((t) => {
                    const e = "chunks" in t ? new F() : new b();
                    return (e.state = t), e;
                }));
        }
        unshift(t) {
            if (!this.chunks.length || (null != t && this.from >= t)) return "";
            const e = null != t ? t - this.from : t;
            let s = 0;
            for (; s < this.chunks.length; ) {
                const t = this.chunks[s],
                    i = t.unshift(e);
                if (t.toString()) {
                    if (!i) break;
                    ++s;
                } else this.chunks.splice(s, 1);
                if (i) return i;
            }
            return "";
        }
        shift() {
            if (!this.chunks.length) return "";
            let t = this.chunks.length - 1;
            for (; 0 <= t; ) {
                const e = this.chunks[t],
                    s = e.shift();
                if (e.toString()) {
                    if (!s) break;
                    --t;
                } else this.chunks.splice(t, 1);
                if (s) return s;
            }
            return "";
        }
    }
    class T {
        constructor(t, e) {
            (this.masked = t), (this._log = []);
            const { offset: s, index: i } =
                t._mapPosToBlock(e) ||
                (e < 0
                    ? { index: 0, offset: 0 }
                    : { index: this.masked._blocks.length, offset: 0 });
            (this.offset = s), (this.index = i), (this.ok = !1);
        }
        get block() {
            return this.masked._blocks[this.index];
        }
        get pos() {
            return this.masked._blockStartPos(this.index) + this.offset;
        }
        get state() {
            return { index: this.index, offset: this.offset, ok: this.ok };
        }
        set state(t) {
            Object.assign(this, t);
        }
        pushState() {
            this._log.push(this.state);
        }
        popState() {
            const t = this._log.pop();
            return (this.state = t), t;
        }
        bindBlock() {
            this.block ||
                (this.index < 0 && ((this.index = 0), (this.offset = 0)),
                this.index >= this.masked._blocks.length &&
                    ((this.index = this.masked._blocks.length - 1),
                    (this.offset = this.block.value.length)));
        }
        _pushLeft(t) {
            for (
                this.pushState(), this.bindBlock();
                0 <= this.index;
                --this.index,
                    this.offset =
                        (null === (e = this.block) || void 0 === e
                            ? void 0
                            : e.value.length) || 0
            ) {
                var e;
                if (t()) return (this.ok = !0);
            }
            return (this.ok = !1);
        }
        _pushRight(t) {
            for (
                this.pushState(), this.bindBlock();
                this.index < this.masked._blocks.length;
                ++this.index, this.offset = 0
            )
                if (t()) return (this.ok = !0);
            return (this.ok = !1);
        }
        pushLeftBeforeFilled() {
            return this._pushLeft(() => {
                if (!this.block.isFixed && this.block.value)
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            d
                        )),
                        0 !== this.offset || void 0
                    );
            });
        }
        pushLeftBeforeInput() {
            return this._pushLeft(() => {
                if (!this.block.isFixed)
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            c
                        )),
                        !0
                    );
            });
        }
        pushLeftBeforeRequired() {
            return this._pushLeft(() => {
                if (
                    !(
                        this.block.isFixed ||
                        (this.block.isOptional && !this.block.value)
                    )
                )
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            c
                        )),
                        !0
                    );
            });
        }
        pushRightBeforeFilled() {
            return this._pushRight(() => {
                if (!this.block.isFixed && this.block.value)
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            f
                        )),
                        this.offset !== this.block.value.length || void 0
                    );
            });
        }
        pushRightBeforeInput() {
            return this._pushRight(() => {
                if (!this.block.isFixed)
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            h
                        )),
                        !0
                    );
            });
        }
        pushRightBeforeRequired() {
            return this._pushRight(() => {
                if (
                    !(
                        this.block.isFixed ||
                        (this.block.isOptional && !this.block.value)
                    )
                )
                    return (
                        (this.offset = this.block.nearestInputPos(
                            this.offset,
                            h
                        )),
                        !0
                    );
            });
        }
    }
    a.MaskedRegExp = class extends k {
        _update(t) {
            t.mask && (t.validate = (e) => e.search(t.mask) >= 0),
                super._update(t);
        }
    };
    const D = ["_blocks"];
    class O extends k {
        constructor() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
            (t.definitions = Object.assign({}, E, t.definitions)),
                super(Object.assign({}, O.DEFAULTS, t));
        }
        _update() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
            (t.definitions = Object.assign(
                {},
                this.definitions,
                t.definitions
            )),
                super._update(t),
                this._rebuildMask();
        }
        _rebuildMask() {
            const t = this.definitions;
            (this._blocks = []), (this._stops = []), (this._maskedBlocks = {});
            let e = this.mask;
            if (!e || !t) return;
            let s = !1,
                i = !1;
            for (let o = 0; o < e.length; ++o) {
                var n, r;
                if (this.blocks) {
                    const t = e.slice(o),
                        s = Object.keys(this.blocks).filter(
                            (e) => 0 === t.indexOf(e)
                        );
                    s.sort((t, e) => e.length - t.length);
                    const i = s[0];
                    if (i) {
                        const t = A(
                            Object.assign(
                                {
                                    parent: this,
                                    lazy: this.lazy,
                                    eager: this.eager,
                                    placeholderChar: this.placeholderChar,
                                    displayChar: this.displayChar,
                                    overwrite: this.overwrite,
                                },
                                this.blocks[i]
                            )
                        );
                        t &&
                            (this._blocks.push(t),
                            this._maskedBlocks[i] ||
                                (this._maskedBlocks[i] = []),
                            this._maskedBlocks[i].push(
                                this._blocks.length - 1
                            )),
                            (o += i.length - 1);
                        continue;
                    }
                }
                let l = e[o],
                    u = l in t;
                if (l === O.STOP_CHAR) {
                    this._stops.push(this._blocks.length);
                    continue;
                }
                if ("{" === l || "}" === l) {
                    s = !s;
                    continue;
                }
                if ("[" === l || "]" === l) {
                    i = !i;
                    continue;
                }
                if (l === O.ESCAPE_CHAR) {
                    if ((++o, (l = e[o]), !l)) break;
                    u = !1;
                }
                const h =
                        null === (n = t[l]) ||
                        void 0 === n ||
                        !n.mask ||
                        (null === (r = t[l]) || void 0 === r
                            ? void 0
                            : r.mask.prototype) instanceof a.Masked
                            ? { mask: t[l] }
                            : t[l],
                    c = u
                        ? new C(
                              Object.assign(
                                  {
                                      parent: this,
                                      isOptional: i,
                                      lazy: this.lazy,
                                      eager: this.eager,
                                      placeholderChar: this.placeholderChar,
                                      displayChar: this.displayChar,
                                  },
                                  h
                              )
                          )
                        : new x({ char: l, eager: this.eager, isUnmasking: s });
                this._blocks.push(c);
            }
        }
        get state() {
            return Object.assign({}, super.state, {
                _blocks: this._blocks.map((t) => t.state),
            });
        }
        set state(t) {
            const { _blocks: e } = t,
                s = o(t, D);
            this._blocks.forEach((t, s) => (t.state = e[s])), (super.state = s);
        }
        reset() {
            super.reset(), this._blocks.forEach((t) => t.reset());
        }
        get isComplete() {
            return this._blocks.every((t) => t.isComplete);
        }
        get isFilled() {
            return this._blocks.every((t) => t.isFilled);
        }
        get isFixed() {
            return this._blocks.every((t) => t.isFixed);
        }
        get isOptional() {
            return this._blocks.every((t) => t.isOptional);
        }
        doCommit() {
            this._blocks.forEach((t) => t.doCommit()), super.doCommit();
        }
        get unmaskedValue() {
            return this._blocks.reduce((t, e) => t + e.unmaskedValue, "");
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t;
        }
        get value() {
            return this._blocks.reduce((t, e) => t + e.value, "");
        }
        set value(t) {
            super.value = t;
        }
        get displayValue() {
            return this._blocks.reduce((t, e) => t + e.displayValue, "");
        }
        appendTail(t) {
            return super.appendTail(t).aggregate(this._appendPlaceholder());
        }
        _appendEager() {
            var t;
            const e = new l();
            let s =
                null === (t = this._mapPosToBlock(this.value.length)) ||
                void 0 === t
                    ? void 0
                    : t.index;
            if (null == s) return e;
            this._blocks[s].isFilled && ++s;
            for (let t = s; t < this._blocks.length; ++t) {
                const s = this._blocks[t]._appendEager();
                if (!s.inserted) break;
                e.aggregate(s);
            }
            return e;
        }
        _appendCharRaw(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            const s = this._mapPosToBlock(this.value.length),
                i = new l();
            if (!s) return i;
            for (let o = s.index; ; ++o) {
                var n, r;
                const s = this._blocks[o];
                if (!s) break;
                const a = s._appendChar(
                        t,
                        Object.assign({}, e, {
                            _beforeTailState:
                                null === (n = e._beforeTailState) ||
                                void 0 === n ||
                                null === (r = n._blocks) ||
                                void 0 === r
                                    ? void 0
                                    : r[o],
                        })
                    ),
                    l = a.skip;
                if ((i.aggregate(a), l || a.rawInserted)) break;
            }
            return i;
        }
        extractTail() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            const s = new F();
            return (
                t === e ||
                    this._forEachBlocksInRange(t, e, (t, e, i, n) => {
                        const r = t.extractTail(i, n);
                        (r.stop = this._findStopBefore(e)),
                            (r.from = this._blockStartPos(e)),
                            r instanceof F && (r.blockIndex = e),
                            s.extend(r);
                    }),
                s
            );
        }
        extractInput() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                s =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : {};
            if (t === e) return "";
            let i = "";
            return (
                this._forEachBlocksInRange(t, e, (t, e, n, r) => {
                    i += t.extractInput(n, r, s);
                }),
                i
            );
        }
        _findStopBefore(t) {
            let e;
            for (let s = 0; s < this._stops.length; ++s) {
                const i = this._stops[s];
                if (!(i <= t)) break;
                e = i;
            }
            return e;
        }
        _appendPlaceholder(t) {
            const e = new l();
            if (this.lazy && null == t) return e;
            const s = this._mapPosToBlock(this.value.length);
            if (!s) return e;
            const i = s.index,
                n = null != t ? t : this._blocks.length;
            return (
                this._blocks.slice(i, n).forEach((s) => {
                    if (!s.lazy || null != t) {
                        const t = null != s._blocks ? [s._blocks.length] : [],
                            i = s._appendPlaceholder(...t);
                        (this._value += i.inserted), e.aggregate(i);
                    }
                }),
                e
            );
        }
        _mapPosToBlock(t) {
            let e = "";
            for (let s = 0; s < this._blocks.length; ++s) {
                const i = this._blocks[s],
                    n = e.length;
                if (((e += i.value), t <= e.length))
                    return { index: s, offset: t - n };
            }
        }
        _blockStartPos(t) {
            return this._blocks
                .slice(0, t)
                .reduce((t, e) => t + e.value.length, 0);
        }
        _forEachBlocksInRange(t) {
            let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0;
            const i = this._mapPosToBlock(t);
            if (i) {
                const t = this._mapPosToBlock(e),
                    n = t && i.index === t.index,
                    r = i.offset,
                    o = t && n ? t.offset : this._blocks[i.index].value.length;
                if ((s(this._blocks[i.index], i.index, r, o), t && !n)) {
                    for (let e = i.index + 1; e < t.index; ++e)
                        s(this._blocks[e], e, 0, this._blocks[e].value.length);
                    s(this._blocks[t.index], t.index, 0, t.offset);
                }
            }
        }
        remove() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            const s = super.remove(t, e);
            return (
                this._forEachBlocksInRange(t, e, (t, e, i, n) => {
                    s.aggregate(t.remove(i, n));
                }),
                s
            );
        }
        nearestInputPos(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : h;
            if (!this._blocks.length) return 0;
            const s = new T(this, t);
            if (e === h)
                return s.pushRightBeforeInput()
                    ? s.pos
                    : (s.popState(),
                      s.pushLeftBeforeInput() ? s.pos : this.value.length);
            if (e === c || e === d) {
                if (e === c) {
                    if ((s.pushRightBeforeFilled(), s.ok && s.pos === t))
                        return t;
                    s.popState();
                }
                if (
                    (s.pushLeftBeforeInput(),
                    s.pushLeftBeforeRequired(),
                    s.pushLeftBeforeFilled(),
                    e === c)
                ) {
                    if (
                        (s.pushRightBeforeInput(),
                        s.pushRightBeforeRequired(),
                        s.ok && s.pos <= t)
                    )
                        return s.pos;
                    if ((s.popState(), s.ok && s.pos <= t)) return s.pos;
                    s.popState();
                }
                return s.ok
                    ? s.pos
                    : e === d
                    ? 0
                    : (s.popState(),
                      s.ok ? s.pos : (s.popState(), s.ok ? s.pos : 0));
            }
            return e === p || e === f
                ? (s.pushRightBeforeInput(),
                  s.pushRightBeforeRequired(),
                  s.pushRightBeforeFilled()
                      ? s.pos
                      : e === f
                      ? this.value.length
                      : (s.popState(),
                        s.ok
                            ? s.pos
                            : (s.popState(),
                              s.ok ? s.pos : this.nearestInputPos(t, c))))
                : t;
        }
        totalInputPositions() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                s = 0;
            return (
                this._forEachBlocksInRange(t, e, (t, e, i, n) => {
                    s += t.totalInputPositions(i, n);
                }),
                s
            );
        }
        maskedBlock(t) {
            return this.maskedBlocks(t)[0];
        }
        maskedBlocks(t) {
            const e = this._maskedBlocks[t];
            return e ? e.map((t) => this._blocks[t]) : [];
        }
    }
    (O.DEFAULTS = { lazy: !0, placeholderChar: "_" }),
        (O.STOP_CHAR = "`"),
        (O.ESCAPE_CHAR = "\\"),
        (O.InputDefinition = C),
        (O.FixedDefinition = x),
        (a.MaskedPattern = O);
    class I extends O {
        get _matchFrom() {
            return this.maxLength - String(this.from).length;
        }
        _update(t) {
            t = Object.assign(
                {
                    to: this.to || 0,
                    from: this.from || 0,
                    maxLength: this.maxLength || 0,
                },
                t
            );
            let e = String(t.to).length;
            null != t.maxLength && (e = Math.max(e, t.maxLength)),
                (t.maxLength = e);
            const s = String(t.from).padStart(e, "0"),
                i = String(t.to).padStart(e, "0");
            let n = 0;
            for (; n < i.length && i[n] === s[n]; ) ++n;
            (t.mask = i.slice(0, n).replace(/0/g, "\\0") + "0".repeat(e - n)),
                super._update(t);
        }
        get isComplete() {
            return super.isComplete && Boolean(this.value);
        }
        boundaries(t) {
            let e = "",
                s = "";
            const [, i, n] = t.match(/^(\D*)(\d*)(\D*)/) || [];
            return (
                n &&
                    ((e = "0".repeat(i.length) + n),
                    (s = "9".repeat(i.length) + n)),
                (e = e.padEnd(this.maxLength, "0")),
                (s = s.padEnd(this.maxLength, "9")),
                [e, s]
            );
        }
        doPrepare(t) {
            let e,
                s =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {};
            if (
                (([t, e] = m(super.doPrepare(t.replace(/\D/g, ""), s))),
                !this.autofix || !t)
            )
                return t;
            const i = String(this.from).padStart(this.maxLength, "0"),
                n = String(this.to).padStart(this.maxLength, "0");
            let r = this.value + t;
            if (r.length > this.maxLength) return "";
            const [o, a] = this.boundaries(r);
            return Number(a) < this.from
                ? i[r.length - 1]
                : Number(o) > this.to
                ? "pad" === this.autofix && r.length < this.maxLength
                    ? ["", e.aggregate(this.append(i[r.length - 1] + t, s))]
                    : n[r.length - 1]
                : t;
        }
        doValidate() {
            const t = this.value;
            if (-1 === t.search(/[^0]/) && t.length <= this._matchFrom)
                return !0;
            const [e, s] = this.boundaries(t);
            return (
                this.from <= Number(s) &&
                Number(e) <= this.to &&
                super.doValidate(...arguments)
            );
        }
    }
    a.MaskedRange = I;
    class B extends O {
        constructor(t) {
            super(Object.assign({}, B.DEFAULTS, t));
        }
        _update(t) {
            t.mask === Date && delete t.mask, t.pattern && (t.mask = t.pattern);
            const e = t.blocks;
            (t.blocks = Object.assign({}, B.GET_DEFAULT_BLOCKS())),
                t.min && (t.blocks.Y.from = t.min.getFullYear()),
                t.max && (t.blocks.Y.to = t.max.getFullYear()),
                t.min &&
                    t.max &&
                    t.blocks.Y.from === t.blocks.Y.to &&
                    ((t.blocks.m.from = t.min.getMonth() + 1),
                    (t.blocks.m.to = t.max.getMonth() + 1),
                    t.blocks.m.from === t.blocks.m.to &&
                        ((t.blocks.d.from = t.min.getDate()),
                        (t.blocks.d.to = t.max.getDate()))),
                Object.assign(t.blocks, this.blocks, e),
                Object.keys(t.blocks).forEach((e) => {
                    const s = t.blocks[e];
                    !("autofix" in s) &&
                        "autofix" in t &&
                        (s.autofix = t.autofix);
                }),
                super._update(t);
        }
        doValidate() {
            const t = this.date;
            return (
                super.doValidate(...arguments) &&
                (!this.isComplete ||
                    (this.isDateExist(this.value) &&
                        null != t &&
                        (null == this.min || this.min <= t) &&
                        (null == this.max || t <= this.max)))
            );
        }
        isDateExist(t) {
            return this.format(this.parse(t, this), this).indexOf(t) >= 0;
        }
        get date() {
            return this.typedValue;
        }
        set date(t) {
            this.typedValue = t;
        }
        get typedValue() {
            return this.isComplete ? super.typedValue : null;
        }
        set typedValue(t) {
            super.typedValue = t;
        }
        maskEquals(t) {
            return t === Date || super.maskEquals(t);
        }
    }
    (B.DEFAULTS = {
        pattern: "d{.}`m{.}`Y",
        format: (t) => {
            if (!t) return "";
            return [
                String(t.getDate()).padStart(2, "0"),
                String(t.getMonth() + 1).padStart(2, "0"),
                t.getFullYear(),
            ].join(".");
        },
        parse: (t) => {
            const [e, s, i] = t.split(".");
            return new Date(i, s - 1, e);
        },
    }),
        (B.GET_DEFAULT_BLOCKS = () => ({
            d: { mask: I, from: 1, to: 31, maxLength: 2 },
            m: { mask: I, from: 1, to: 12, maxLength: 2 },
            Y: { mask: I, from: 1900, to: 9999 },
        })),
        (a.MaskedDate = B);
    class M {
        get selectionStart() {
            let t;
            try {
                t = this._unsafeSelectionStart;
            } catch (t) {}
            return null != t ? t : this.value.length;
        }
        get selectionEnd() {
            let t;
            try {
                t = this._unsafeSelectionEnd;
            } catch (t) {}
            return null != t ? t : this.value.length;
        }
        select(t, e) {
            if (
                null != t &&
                null != e &&
                (t !== this.selectionStart || e !== this.selectionEnd)
            )
                try {
                    this._unsafeSelect(t, e);
                } catch (t) {}
        }
        _unsafeSelect(t, e) {}
        get isActive() {
            return !1;
        }
        bindEvents(t) {}
        unbindEvents() {}
    }
    a.MaskElement = M;
    class P extends M {
        constructor(t) {
            super(), (this.input = t), (this._handlers = {});
        }
        get rootElement() {
            var t, e, s;
            return null !==
                (t =
                    null === (e = (s = this.input).getRootNode) || void 0 === e
                        ? void 0
                        : e.call(s)) && void 0 !== t
                ? t
                : document;
        }
        get isActive() {
            return this.input === this.rootElement.activeElement;
        }
        get _unsafeSelectionStart() {
            return this.input.selectionStart;
        }
        get _unsafeSelectionEnd() {
            return this.input.selectionEnd;
        }
        _unsafeSelect(t, e) {
            this.input.setSelectionRange(t, e);
        }
        get value() {
            return this.input.value;
        }
        set value(t) {
            this.input.value = t;
        }
        bindEvents(t) {
            Object.keys(t).forEach((e) =>
                this._toggleEventHandler(P.EVENTS_MAP[e], t[e])
            );
        }
        unbindEvents() {
            Object.keys(this._handlers).forEach((t) =>
                this._toggleEventHandler(t)
            );
        }
        _toggleEventHandler(t, e) {
            this._handlers[t] &&
                (this.input.removeEventListener(t, this._handlers[t]),
                delete this._handlers[t]),
                e &&
                    (this.input.addEventListener(t, e),
                    (this._handlers[t] = e));
        }
    }
    (P.EVENTS_MAP = {
        selectionChange: "keydown",
        input: "input",
        drop: "drop",
        click: "click",
        focus: "focus",
        commit: "blur",
    }),
        (a.HTMLMaskElement = P);
    class L extends P {
        get _unsafeSelectionStart() {
            const t = this.rootElement,
                e = t.getSelection && t.getSelection(),
                s = e && e.anchorOffset,
                i = e && e.focusOffset;
            return null == i || null == s || s < i ? s : i;
        }
        get _unsafeSelectionEnd() {
            const t = this.rootElement,
                e = t.getSelection && t.getSelection(),
                s = e && e.anchorOffset,
                i = e && e.focusOffset;
            return null == i || null == s || s > i ? s : i;
        }
        _unsafeSelect(t, e) {
            if (!this.rootElement.createRange) return;
            const s = this.rootElement.createRange();
            s.setStart(this.input.firstChild || this.input, t),
                s.setEnd(this.input.lastChild || this.input, e);
            const i = this.rootElement,
                n = i.getSelection && i.getSelection();
            n && (n.removeAllRanges(), n.addRange(s));
        }
        get value() {
            return this.input.textContent;
        }
        set value(t) {
            this.input.textContent = t;
        }
    }
    a.HTMLContenteditableMaskElement = L;
    const V = ["mask"];
    a.InputMask = class {
        constructor(t, e) {
            (this.el =
                t instanceof M
                    ? t
                    : t.isContentEditable &&
                      "INPUT" !== t.tagName &&
                      "TEXTAREA" !== t.tagName
                    ? new L(t)
                    : new P(t)),
                (this.masked = A(e)),
                (this._listeners = {}),
                (this._value = ""),
                (this._unmaskedValue = ""),
                (this._saveSelection = this._saveSelection.bind(this)),
                (this._onInput = this._onInput.bind(this)),
                (this._onChange = this._onChange.bind(this)),
                (this._onDrop = this._onDrop.bind(this)),
                (this._onFocus = this._onFocus.bind(this)),
                (this._onClick = this._onClick.bind(this)),
                (this.alignCursor = this.alignCursor.bind(this)),
                (this.alignCursorFriendly =
                    this.alignCursorFriendly.bind(this)),
                this._bindEvents(),
                this.updateValue(),
                this._onChange();
        }
        get mask() {
            return this.masked.mask;
        }
        maskEquals(t) {
            var e;
            return (
                null == t ||
                (null === (e = this.masked) || void 0 === e
                    ? void 0
                    : e.maskEquals(t))
            );
        }
        set mask(t) {
            if (this.maskEquals(t)) return;
            if (!(t instanceof a.Masked) && this.masked.constructor === y(t))
                return void this.masked.updateOptions({ mask: t });
            const e = A({ mask: t });
            (e.unmaskedValue = this.masked.unmaskedValue), (this.masked = e);
        }
        get value() {
            return this._value;
        }
        set value(t) {
            this.value !== t &&
                ((this.masked.value = t),
                this.updateControl(),
                this.alignCursor());
        }
        get unmaskedValue() {
            return this._unmaskedValue;
        }
        set unmaskedValue(t) {
            this.unmaskedValue !== t &&
                ((this.masked.unmaskedValue = t),
                this.updateControl(),
                this.alignCursor());
        }
        get typedValue() {
            return this.masked.typedValue;
        }
        set typedValue(t) {
            this.masked.typedValueEquals(t) ||
                ((this.masked.typedValue = t),
                this.updateControl(),
                this.alignCursor());
        }
        get displayValue() {
            return this.masked.displayValue;
        }
        _bindEvents() {
            this.el.bindEvents({
                selectionChange: this._saveSelection,
                input: this._onInput,
                drop: this._onDrop,
                click: this._onClick,
                focus: this._onFocus,
                commit: this._onChange,
            });
        }
        _unbindEvents() {
            this.el && this.el.unbindEvents();
        }
        _fireEvent(t) {
            for (
                var e = arguments.length,
                    s = new Array(e > 1 ? e - 1 : 0),
                    i = 1;
                i < e;
                i++
            )
                s[i - 1] = arguments[i];
            const n = this._listeners[t];
            n && n.forEach((t) => t(...s));
        }
        get selectionStart() {
            return this._cursorChanging
                ? this._changingCursorPos
                : this.el.selectionStart;
        }
        get cursorPos() {
            return this._cursorChanging
                ? this._changingCursorPos
                : this.el.selectionEnd;
        }
        set cursorPos(t) {
            this.el &&
                this.el.isActive &&
                (this.el.select(t, t), this._saveSelection());
        }
        _saveSelection() {
            this.displayValue !== this.el.value &&
                console.warn(
                    "Element value was changed outside of mask. Syncronize mask using `mask.updateValue()` to work properly."
                ),
                (this._selection = {
                    start: this.selectionStart,
                    end: this.cursorPos,
                });
        }
        updateValue() {
            (this.masked.value = this.el.value),
                (this._value = this.masked.value);
        }
        updateControl() {
            const t = this.masked.unmaskedValue,
                e = this.masked.value,
                s = this.displayValue,
                i = this.unmaskedValue !== t || this.value !== e;
            (this._unmaskedValue = t),
                (this._value = e),
                this.el.value !== s && (this.el.value = s),
                i && this._fireChangeEvents();
        }
        updateOptions(t) {
            const { mask: e } = t,
                s = o(t, V),
                i = !this.maskEquals(e),
                n = !_(this.masked, s);
            i && (this.mask = e),
                n && this.masked.updateOptions(s),
                (i || n) && this.updateControl();
        }
        updateCursor(t) {
            null != t && ((this.cursorPos = t), this._delayUpdateCursor(t));
        }
        _delayUpdateCursor(t) {
            this._abortUpdateCursor(),
                (this._changingCursorPos = t),
                (this._cursorChanging = setTimeout(() => {
                    this.el &&
                        ((this.cursorPos = this._changingCursorPos),
                        this._abortUpdateCursor());
                }, 10));
        }
        _fireChangeEvents() {
            this._fireEvent("accept", this._inputEvent),
                this.masked.isComplete &&
                    this._fireEvent("complete", this._inputEvent);
        }
        _abortUpdateCursor() {
            this._cursorChanging &&
                (clearTimeout(this._cursorChanging),
                delete this._cursorChanging);
        }
        alignCursor() {
            this.cursorPos = this.masked.nearestInputPos(
                this.masked.nearestInputPos(this.cursorPos, c)
            );
        }
        alignCursorFriendly() {
            this.selectionStart === this.cursorPos && this.alignCursor();
        }
        on(t, e) {
            return (
                this._listeners[t] || (this._listeners[t] = []),
                this._listeners[t].push(e),
                this
            );
        }
        off(t, e) {
            if (!this._listeners[t]) return this;
            if (!e) return delete this._listeners[t], this;
            const s = this._listeners[t].indexOf(e);
            return s >= 0 && this._listeners[t].splice(s, 1), this;
        }
        _onInput(t) {
            if (
                ((this._inputEvent = t),
                this._abortUpdateCursor(),
                !this._selection)
            )
                return this.updateValue();
            const e = new v(
                    this.el.value,
                    this.cursorPos,
                    this.displayValue,
                    this._selection
                ),
                s = this.masked.rawInputValue,
                i = this.masked.splice(
                    e.startChangePos,
                    e.removed.length,
                    e.inserted,
                    e.removeDirection,
                    { input: !0, raw: !0 }
                ).offset,
                n = s === this.masked.rawInputValue ? e.removeDirection : h;
            let r = this.masked.nearestInputPos(e.startChangePos + i, n);
            n !== h && (r = this.masked.nearestInputPos(r, h)),
                this.updateControl(),
                this.updateCursor(r),
                delete this._inputEvent;
        }
        _onChange() {
            this.displayValue !== this.el.value && this.updateValue(),
                this.masked.doCommit(),
                this.updateControl(),
                this._saveSelection();
        }
        _onDrop(t) {
            t.preventDefault(), t.stopPropagation();
        }
        _onFocus(t) {
            this.alignCursorFriendly();
        }
        _onClick(t) {
            this.alignCursorFriendly();
        }
        destroy() {
            this._unbindEvents(), (this._listeners.length = 0), delete this.el;
        }
    };
    a.MaskedEnum = class extends O {
        _update(t) {
            t.enum && (t.mask = "*".repeat(t.enum[0].length)), super._update(t);
        }
        doValidate() {
            return (
                this.enum.some((t) => t.indexOf(this.unmaskedValue) >= 0) &&
                super.doValidate(...arguments)
            );
        }
    };
    class N extends k {
        constructor(t) {
            super(Object.assign({}, N.DEFAULTS, t));
        }
        _update(t) {
            super._update(t), this._updateRegExps();
        }
        _updateRegExps() {
            let t = "^" + (this.allowNegative ? "[+|\\-]?" : ""),
                e =
                    (this.scale
                        ? "("
                              .concat(g(this.radix), "\\d{0,")
                              .concat(this.scale, "})?")
                        : "") + "$";
            (this._numberRegExp = new RegExp(t + "\\d*" + e)),
                (this._mapToRadixRegExp = new RegExp(
                    "[".concat(this.mapToRadix.map(g).join(""), "]"),
                    "g"
                )),
                (this._thousandsSeparatorRegExp = new RegExp(
                    g(this.thousandsSeparator),
                    "g"
                ));
        }
        _removeThousandsSeparators(t) {
            return t.replace(this._thousandsSeparatorRegExp, "");
        }
        _insertThousandsSeparators(t) {
            const e = t.split(this.radix);
            return (
                (e[0] = e[0].replace(
                    /\B(?=(\d{3})+(?!\d))/g,
                    this.thousandsSeparator
                )),
                e.join(this.radix)
            );
        }
        doPrepare(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            t = this._removeThousandsSeparators(
                this.scale &&
                    this.mapToRadix.length &&
                    ((e.input && e.raw) || (!e.input && !e.raw))
                    ? t.replace(this._mapToRadixRegExp, this.radix)
                    : t
            );
            const [s, i] = m(super.doPrepare(t, e));
            return t && !s && (i.skip = !0), [s, i];
        }
        _separatorsCount(t) {
            let e =
                    arguments.length > 1 &&
                    void 0 !== arguments[1] &&
                    arguments[1],
                s = 0;
            for (let i = 0; i < t; ++i)
                this._value.indexOf(this.thousandsSeparator, i) === i &&
                    (++s, e && (t += this.thousandsSeparator.length));
            return s;
        }
        _separatorsCountFromSlice() {
            let t =
                arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : this._value;
            return this._separatorsCount(
                this._removeThousandsSeparators(t).length,
                !0
            );
        }
        extractInput() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length,
                s = arguments.length > 2 ? arguments[2] : void 0;
            return (
                ([t, e] = this._adjustRangeWithSeparators(t, e)),
                this._removeThousandsSeparators(super.extractInput(t, e, s))
            );
        }
        _appendCharRaw(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            if (!this.thousandsSeparator) return super._appendCharRaw(t, e);
            const s =
                    e.tail && e._beforeTailState
                        ? e._beforeTailState._value
                        : this._value,
                i = this._separatorsCountFromSlice(s);
            this._value = this._removeThousandsSeparators(this.value);
            const n = super._appendCharRaw(t, e);
            this._value = this._insertThousandsSeparators(this._value);
            const r =
                    e.tail && e._beforeTailState
                        ? e._beforeTailState._value
                        : this._value,
                o = this._separatorsCountFromSlice(r);
            return (
                (n.tailShift += (o - i) * this.thousandsSeparator.length),
                (n.skip = !n.rawInserted && t === this.thousandsSeparator),
                n
            );
        }
        _findSeparatorAround(t) {
            if (this.thousandsSeparator) {
                const e = t - this.thousandsSeparator.length + 1,
                    s = this.value.indexOf(this.thousandsSeparator, e);
                if (s <= t) return s;
            }
            return -1;
        }
        _adjustRangeWithSeparators(t, e) {
            const s = this._findSeparatorAround(t);
            s >= 0 && (t = s);
            const i = this._findSeparatorAround(e);
            return i >= 0 && (e = i + this.thousandsSeparator.length), [t, e];
        }
        remove() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : 0,
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : this.value.length;
            [t, e] = this._adjustRangeWithSeparators(t, e);
            const s = this.value.slice(0, t),
                i = this.value.slice(e),
                n = this._separatorsCount(s.length);
            this._value = this._insertThousandsSeparators(
                this._removeThousandsSeparators(s + i)
            );
            const r = this._separatorsCountFromSlice(s);
            return new l({
                tailShift: (r - n) * this.thousandsSeparator.length,
            });
        }
        nearestInputPos(t, e) {
            if (!this.thousandsSeparator) return t;
            switch (e) {
                case h:
                case c:
                case d: {
                    const s = this._findSeparatorAround(t - 1);
                    if (s >= 0) {
                        const i = s + this.thousandsSeparator.length;
                        if (t < i || this.value.length <= i || e === d)
                            return s;
                    }
                    break;
                }
                case p:
                case f: {
                    const e = this._findSeparatorAround(t);
                    if (e >= 0) return e + this.thousandsSeparator.length;
                }
            }
            return t;
        }
        doValidate(t) {
            let e = Boolean(
                this._removeThousandsSeparators(this.value).match(
                    this._numberRegExp
                )
            );
            if (e) {
                const t = this.number;
                e =
                    e &&
                    !isNaN(t) &&
                    (null == this.min ||
                        this.min >= 0 ||
                        this.min <= this.number) &&
                    (null == this.max ||
                        this.max <= 0 ||
                        this.number <= this.max);
            }
            return e && super.doValidate(t);
        }
        doCommit() {
            if (this.value) {
                const t = this.number;
                let e = t;
                null != this.min && (e = Math.max(e, this.min)),
                    null != this.max && (e = Math.min(e, this.max)),
                    e !== t && (this.unmaskedValue = this.doFormat(e));
                let s = this.value;
                this.normalizeZeros && (s = this._normalizeZeros(s)),
                    this.padFractionalZeros &&
                        this.scale > 0 &&
                        (s = this._padFractionalZeros(s)),
                    (this._value = s);
            }
            super.doCommit();
        }
        _normalizeZeros(t) {
            const e = this._removeThousandsSeparators(t).split(this.radix);
            return (
                (e[0] = e[0].replace(/^(\D*)(0*)(\d*)/, (t, e, s, i) => e + i)),
                t.length && !/\d$/.test(e[0]) && (e[0] = e[0] + "0"),
                e.length > 1 &&
                    ((e[1] = e[1].replace(/0*$/, "")),
                    e[1].length || (e.length = 1)),
                this._insertThousandsSeparators(e.join(this.radix))
            );
        }
        _padFractionalZeros(t) {
            if (!t) return t;
            const e = t.split(this.radix);
            return (
                e.length < 2 && e.push(""),
                (e[1] = e[1].padEnd(this.scale, "0")),
                e.join(this.radix)
            );
        }
        doSkipInvalid(t) {
            let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                s = arguments.length > 2 ? arguments[2] : void 0;
            const i =
                0 === this.scale &&
                t !== this.thousandsSeparator &&
                (t === this.radix ||
                    t === N.UNMASKED_RADIX ||
                    this.mapToRadix.includes(t));
            return super.doSkipInvalid(t, e, s) && !i;
        }
        get unmaskedValue() {
            return this._removeThousandsSeparators(
                this._normalizeZeros(this.value)
            ).replace(this.radix, N.UNMASKED_RADIX);
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t;
        }
        get typedValue() {
            return this.doParse(this.unmaskedValue);
        }
        set typedValue(t) {
            this.rawInputValue = this.doFormat(t).replace(
                N.UNMASKED_RADIX,
                this.radix
            );
        }
        get number() {
            return this.typedValue;
        }
        set number(t) {
            this.typedValue = t;
        }
        get allowNegative() {
            return (
                this.signed ||
                (null != this.min && this.min < 0) ||
                (null != this.max && this.max < 0)
            );
        }
        typedValueEquals(t) {
            return (
                (super.typedValueEquals(t) ||
                    (N.EMPTY_VALUES.includes(t) &&
                        N.EMPTY_VALUES.includes(this.typedValue))) &&
                !(0 === t && "" === this.value)
            );
        }
    }
    (N.UNMASKED_RADIX = "."),
        (N.DEFAULTS = {
            radix: ",",
            thousandsSeparator: "",
            mapToRadix: [N.UNMASKED_RADIX],
            scale: 2,
            signed: !1,
            normalizeZeros: !0,
            padFractionalZeros: !1,
            parse: Number,
            format: (t) =>
                t.toLocaleString("en-US", {
                    useGrouping: !1,
                    maximumFractionDigits: 20,
                }),
        }),
        (N.EMPTY_VALUES = [...k.EMPTY_VALUES, 0]),
        (a.MaskedNumber = N);
    a.MaskedFunction = class extends k {
        _update(t) {
            t.mask && (t.validate = t.mask), super._update(t);
        }
    };
    const j = ["compiledMasks", "currentMaskRef", "currentMask"],
        $ = ["mask"];
    class R extends k {
        constructor(t) {
            super(Object.assign({}, R.DEFAULTS, t)), (this.currentMask = null);
        }
        _update(t) {
            super._update(t),
                "mask" in t &&
                    (this.compiledMasks = Array.isArray(t.mask)
                        ? t.mask.map((t) => A(t))
                        : []);
        }
        _appendCharRaw(t) {
            let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
            const s = this._applyDispatch(t, e);
            return (
                this.currentMask &&
                    s.aggregate(
                        this.currentMask._appendChar(
                            t,
                            this.currentMaskFlags(e)
                        )
                    ),
                s
            );
        }
        _applyDispatch() {
            let t =
                    arguments.length > 0 && void 0 !== arguments[0]
                        ? arguments[0]
                        : "",
                e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                s =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "";
            const i =
                    e.tail && null != e._beforeTailState
                        ? e._beforeTailState._value
                        : this.value,
                n = this.rawInputValue,
                r =
                    e.tail && null != e._beforeTailState
                        ? e._beforeTailState._rawInputValue
                        : n,
                o = n.slice(r.length),
                a = this.currentMask,
                u = new l(),
                h = null == a ? void 0 : a.state;
            if (
                ((this.currentMask = this.doDispatch(
                    t,
                    Object.assign({}, e),
                    s
                )),
                this.currentMask)
            )
                if (this.currentMask !== a) {
                    if ((this.currentMask.reset(), r)) {
                        const t = this.currentMask.append(r, { raw: !0 });
                        u.tailShift = t.inserted.length - i.length;
                    }
                    o &&
                        (u.tailShift += this.currentMask.append(o, {
                            raw: !0,
                            tail: !0,
                        }).tailShift);
                } else this.currentMask.state = h;
            return u;
        }
        _appendPlaceholder() {
            const t = this._applyDispatch(...arguments);
            return (
                this.currentMask &&
                    t.aggregate(this.currentMask._appendPlaceholder()),
                t
            );
        }
        _appendEager() {
            const t = this._applyDispatch(...arguments);
            return (
                this.currentMask &&
                    t.aggregate(this.currentMask._appendEager()),
                t
            );
        }
        appendTail(t) {
            const e = new l();
            return (
                t && e.aggregate(this._applyDispatch("", {}, t)),
                e.aggregate(
                    this.currentMask
                        ? this.currentMask.appendTail(t)
                        : super.appendTail(t)
                )
            );
        }
        currentMaskFlags(t) {
            var e, s;
            return Object.assign({}, t, {
                _beforeTailState:
                    ((null === (e = t._beforeTailState) || void 0 === e
                        ? void 0
                        : e.currentMaskRef) === this.currentMask &&
                        (null === (s = t._beforeTailState) || void 0 === s
                            ? void 0
                            : s.currentMask)) ||
                    t._beforeTailState,
            });
        }
        doDispatch(t) {
            let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                s =
                    arguments.length > 2 && void 0 !== arguments[2]
                        ? arguments[2]
                        : "";
            return this.dispatch(t, this, e, s);
        }
        doValidate(t) {
            return (
                super.doValidate(t) &&
                (!this.currentMask ||
                    this.currentMask.doValidate(this.currentMaskFlags(t)))
            );
        }
        doPrepare(t) {
            let e =
                    arguments.length > 1 && void 0 !== arguments[1]
                        ? arguments[1]
                        : {},
                [s, i] = m(super.doPrepare(t, e));
            if (this.currentMask) {
                let t;
                ([s, t] = m(super.doPrepare(s, this.currentMaskFlags(e)))),
                    (i = i.aggregate(t));
            }
            return [s, i];
        }
        reset() {
            var t;
            null === (t = this.currentMask) || void 0 === t || t.reset(),
                this.compiledMasks.forEach((t) => t.reset());
        }
        get value() {
            return this.currentMask ? this.currentMask.value : "";
        }
        set value(t) {
            super.value = t;
        }
        get unmaskedValue() {
            return this.currentMask ? this.currentMask.unmaskedValue : "";
        }
        set unmaskedValue(t) {
            super.unmaskedValue = t;
        }
        get typedValue() {
            return this.currentMask ? this.currentMask.typedValue : "";
        }
        set typedValue(t) {
            let e = String(t);
            this.currentMask &&
                ((this.currentMask.typedValue = t),
                (e = this.currentMask.unmaskedValue)),
                (this.unmaskedValue = e);
        }
        get displayValue() {
            return this.currentMask ? this.currentMask.displayValue : "";
        }
        get isComplete() {
            var t;
            return Boolean(
                null === (t = this.currentMask) || void 0 === t
                    ? void 0
                    : t.isComplete
            );
        }
        get isFilled() {
            var t;
            return Boolean(
                null === (t = this.currentMask) || void 0 === t
                    ? void 0
                    : t.isFilled
            );
        }
        remove() {
            const t = new l();
            return (
                this.currentMask &&
                    t
                        .aggregate(this.currentMask.remove(...arguments))
                        .aggregate(this._applyDispatch()),
                t
            );
        }
        get state() {
            var t;
            return Object.assign({}, super.state, {
                _rawInputValue: this.rawInputValue,
                compiledMasks: this.compiledMasks.map((t) => t.state),
                currentMaskRef: this.currentMask,
                currentMask:
                    null === (t = this.currentMask) || void 0 === t
                        ? void 0
                        : t.state,
            });
        }
        set state(t) {
            const { compiledMasks: e, currentMaskRef: s, currentMask: i } = t,
                n = o(t, j);
            this.compiledMasks.forEach((t, s) => (t.state = e[s])),
                null != s &&
                    ((this.currentMask = s), (this.currentMask.state = i)),
                (super.state = n);
        }
        extractInput() {
            return this.currentMask
                ? this.currentMask.extractInput(...arguments)
                : "";
        }
        extractTail() {
            return this.currentMask
                ? this.currentMask.extractTail(...arguments)
                : super.extractTail(...arguments);
        }
        doCommit() {
            this.currentMask && this.currentMask.doCommit(), super.doCommit();
        }
        nearestInputPos() {
            return this.currentMask
                ? this.currentMask.nearestInputPos(...arguments)
                : super.nearestInputPos(...arguments);
        }
        get overwrite() {
            return this.currentMask
                ? this.currentMask.overwrite
                : super.overwrite;
        }
        set overwrite(t) {
            console.warn(
                '"overwrite" option is not available in dynamic mask, use this option in siblings'
            );
        }
        get eager() {
            return this.currentMask ? this.currentMask.eager : super.eager;
        }
        set eager(t) {
            console.warn(
                '"eager" option is not available in dynamic mask, use this option in siblings'
            );
        }
        get skipInvalid() {
            return this.currentMask
                ? this.currentMask.skipInvalid
                : super.skipInvalid;
        }
        set skipInvalid(t) {
            (this.isInitialized || t !== k.DEFAULTS.skipInvalid) &&
                console.warn(
                    '"skipInvalid" option is not available in dynamic mask, use this option in siblings'
                );
        }
        maskEquals(t) {
            return (
                Array.isArray(t) &&
                this.compiledMasks.every((e, s) => {
                    if (!t[s]) return;
                    const i = t[s],
                        { mask: n } = i;
                    return _(e, o(i, $)) && e.maskEquals(n);
                })
            );
        }
        typedValueEquals(t) {
            var e;
            return Boolean(
                null === (e = this.currentMask) || void 0 === e
                    ? void 0
                    : e.typedValueEquals(t)
            );
        }
    }
    (R.DEFAULTS = {
        dispatch: (t, e, s, i) => {
            if (!e.compiledMasks.length) return;
            const n = e.rawInputValue,
                r = e.compiledMasks.map((r, o) => {
                    const a = e.currentMask === r,
                        l = a
                            ? r.value.length
                            : r.nearestInputPos(r.value.length, d);
                    return (
                        r.rawInputValue !== n
                            ? (r.reset(), r.append(n, { raw: !0 }))
                            : a || r.remove(l),
                        r.append(t, e.currentMaskFlags(s)),
                        r.appendTail(i),
                        {
                            index: o,
                            weight: r.rawInputValue.length,
                            totalInputPositions: r.totalInputPositions(
                                0,
                                Math.max(
                                    l,
                                    r.nearestInputPos(r.value.length, d)
                                )
                            ),
                        }
                    );
                });
            return (
                r.sort(
                    (t, e) =>
                        e.weight - t.weight ||
                        e.totalInputPositions - t.totalInputPositions
                ),
                e.compiledMasks[r[0].index]
            );
        },
    }),
        (a.MaskedDynamic = R);
    const z = {
        MASKED: "value",
        UNMASKED: "unmaskedValue",
        TYPED: "typedValue",
    };
    function H(t) {
        let e =
                arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : z.MASKED,
            s =
                arguments.length > 2 && void 0 !== arguments[2]
                    ? arguments[2]
                    : z.MASKED;
        const i = A(t);
        return (t) => i.runIsolated((i) => ((i[e] = t), i[s]));
    }
    (a.PIPE_TYPE = z),
        (a.createPipe = H),
        (a.pipe = function (t) {
            for (
                var e = arguments.length,
                    s = new Array(e > 1 ? e - 1 : 0),
                    i = 1;
                i < e;
                i++
            )
                s[i - 1] = arguments[i];
            return H(...s)(t);
        });
    try {
        globalThis.IMask = a;
    } catch (t) {}
    [].slice.call(document.querySelectorAll("[data-mask]")).map(function (t) {
        return new a(t, {
            mask: t.dataset.mask,
            lazy: "true" === t.dataset["mask-visible"],
        });
    });
    var q = "top",
        W = "bottom",
        U = "right",
        Y = "left",
        K = "auto",
        X = [q, W, U, Y],
        Q = "start",
        Z = "end",
        G = "clippingParents",
        J = "viewport",
        tt = "popper",
        et = "reference",
        st = X.reduce(function (t, e) {
            return t.concat([e + "-" + Q, e + "-" + Z]);
        }, []),
        it = [].concat(X, [K]).reduce(function (t, e) {
            return t.concat([e, e + "-" + Q, e + "-" + Z]);
        }, []),
        nt = "beforeRead",
        rt = "read",
        ot = "afterRead",
        at = "beforeMain",
        lt = "main",
        ut = "afterMain",
        ht = "beforeWrite",
        ct = "write",
        dt = "afterWrite",
        pt = [nt, rt, ot, at, lt, ut, ht, ct, dt];
    function ft(t) {
        return t ? (t.nodeName || "").toLowerCase() : null;
    }
    function gt(t) {
        if (null == t) return window;
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return (e && e.defaultView) || window;
        }
        return t;
    }
    function mt(t) {
        return t instanceof gt(t).Element || t instanceof Element;
    }
    function _t(t) {
        return t instanceof gt(t).HTMLElement || t instanceof HTMLElement;
    }
    function vt(t) {
        return (
            "undefined" != typeof ShadowRoot &&
            (t instanceof gt(t).ShadowRoot || t instanceof ShadowRoot)
        );
    }
    var bt = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function (t) {
            var e = t.state;
            Object.keys(e.elements).forEach(function (t) {
                var s = e.styles[t] || {},
                    i = e.attributes[t] || {},
                    n = e.elements[t];
                _t(n) &&
                    ft(n) &&
                    (Object.assign(n.style, s),
                    Object.keys(i).forEach(function (t) {
                        var e = i[t];
                        !1 === e
                            ? n.removeAttribute(t)
                            : n.setAttribute(t, !0 === e ? "" : e);
                    }));
            });
        },
        effect: function (t) {
            var e = t.state,
                s = {
                    popper: {
                        position: e.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0",
                    },
                    arrow: { position: "absolute" },
                    reference: {},
                };
            return (
                Object.assign(e.elements.popper.style, s.popper),
                (e.styles = s),
                e.elements.arrow &&
                    Object.assign(e.elements.arrow.style, s.arrow),
                function () {
                    Object.keys(e.elements).forEach(function (t) {
                        var i = e.elements[t],
                            n = e.attributes[t] || {},
                            r = Object.keys(
                                e.styles.hasOwnProperty(t) ? e.styles[t] : s[t]
                            ).reduce(function (t, e) {
                                return (t[e] = ""), t;
                            }, {});
                        _t(i) &&
                            ft(i) &&
                            (Object.assign(i.style, r),
                            Object.keys(n).forEach(function (t) {
                                i.removeAttribute(t);
                            }));
                    });
                }
            );
        },
        requires: ["computeStyles"],
    };
    function kt(t) {
        return t.split("-")[0];
    }
    var yt = Math.max,
        At = Math.min,
        wt = Math.round;
    function Et() {
        var t = navigator.userAgentData;
        return null != t && t.brands && Array.isArray(t.brands)
            ? t.brands
                  .map(function (t) {
                      return t.brand + "/" + t.version;
                  })
                  .join(" ")
            : navigator.userAgent;
    }
    function Ct() {
        return !/^((?!chrome|android).)*safari/i.test(Et());
    }
    function xt(t, e, s) {
        void 0 === e && (e = !1), void 0 === s && (s = !1);
        var i = t.getBoundingClientRect(),
            n = 1,
            r = 1;
        e &&
            _t(t) &&
            ((n = (t.offsetWidth > 0 && wt(i.width) / t.offsetWidth) || 1),
            (r = (t.offsetHeight > 0 && wt(i.height) / t.offsetHeight) || 1));
        var o = (mt(t) ? gt(t) : window).visualViewport,
            a = !Ct() && s,
            l = (i.left + (a && o ? o.offsetLeft : 0)) / n,
            u = (i.top + (a && o ? o.offsetTop : 0)) / r,
            h = i.width / n,
            c = i.height / r;
        return {
            width: h,
            height: c,
            top: u,
            right: l + h,
            bottom: u + c,
            left: l,
            x: l,
            y: u,
        };
    }
    function St(t) {
        var e = xt(t),
            s = t.offsetWidth,
            i = t.offsetHeight;
        return (
            Math.abs(e.width - s) <= 1 && (s = e.width),
            Math.abs(e.height - i) <= 1 && (i = e.height),
            { x: t.offsetLeft, y: t.offsetTop, width: s, height: i }
        );
    }
    function Ft(t, e) {
        var s = e.getRootNode && e.getRootNode();
        if (t.contains(e)) return !0;
        if (s && vt(s)) {
            var i = e;
            do {
                if (i && t.isSameNode(i)) return !0;
                i = i.parentNode || i.host;
            } while (i);
        }
        return !1;
    }
    function Tt(t) {
        return gt(t).getComputedStyle(t);
    }
    function Dt(t) {
        return ["table", "td", "th"].indexOf(ft(t)) >= 0;
    }
    function Ot(t) {
        return (
            (mt(t) ? t.ownerDocument : t.document) || window.document
        ).documentElement;
    }
    function It(t) {
        return "html" === ft(t)
            ? t
            : t.assignedSlot ||
                  t.parentNode ||
                  (vt(t) ? t.host : null) ||
                  Ot(t);
    }
    function Bt(t) {
        return _t(t) && "fixed" !== Tt(t).position ? t.offsetParent : null;
    }
    function Mt(t) {
        for (
            var e = gt(t), s = Bt(t);
            s && Dt(s) && "static" === Tt(s).position;

        )
            s = Bt(s);
        return s &&
            ("html" === ft(s) ||
                ("body" === ft(s) && "static" === Tt(s).position))
            ? e
            : s ||
                  (function (t) {
                      var e = /firefox/i.test(Et());
                      if (
                          /Trident/i.test(Et()) &&
                          _t(t) &&
                          "fixed" === Tt(t).position
                      )
                          return null;
                      var s = It(t);
                      for (
                          vt(s) && (s = s.host);
                          _t(s) && ["html", "body"].indexOf(ft(s)) < 0;

                      ) {
                          var i = Tt(s);
                          if (
                              "none" !== i.transform ||
                              "none" !== i.perspective ||
                              "paint" === i.contain ||
                              -1 !==
                                  ["transform", "perspective"].indexOf(
                                      i.willChange
                                  ) ||
                              (e && "filter" === i.willChange) ||
                              (e && i.filter && "none" !== i.filter)
                          )
                              return s;
                          s = s.parentNode;
                      }
                      return null;
                  })(t) ||
                  e;
    }
    function Pt(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y";
    }
    function Lt(t, e, s) {
        return yt(t, At(e, s));
    }
    function Vt(t) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t);
    }
    function Nt(t, e) {
        return e.reduce(function (e, s) {
            return (e[s] = t), e;
        }, {});
    }
    var jt = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e,
                s = t.state,
                i = t.name,
                n = t.options,
                r = s.elements.arrow,
                o = s.modifiersData.popperOffsets,
                a = kt(s.placement),
                l = Pt(a),
                u = [Y, U].indexOf(a) >= 0 ? "height" : "width";
            if (r && o) {
                var h = (function (t, e) {
                        return Vt(
                            "number" !=
                                typeof (t =
                                    "function" == typeof t
                                        ? t(
                                              Object.assign({}, e.rects, {
                                                  placement: e.placement,
                                              })
                                          )
                                        : t)
                                ? t
                                : Nt(t, X)
                        );
                    })(n.padding, s),
                    c = St(r),
                    d = "y" === l ? q : Y,
                    p = "y" === l ? W : U,
                    f =
                        s.rects.reference[u] +
                        s.rects.reference[l] -
                        o[l] -
                        s.rects.popper[u],
                    g = o[l] - s.rects.reference[l],
                    m = Mt(r),
                    _ = m
                        ? "y" === l
                            ? m.clientHeight || 0
                            : m.clientWidth || 0
                        : 0,
                    v = f / 2 - g / 2,
                    b = h[d],
                    k = _ - c[u] - h[p],
                    y = _ / 2 - c[u] / 2 + v,
                    A = Lt(b, y, k),
                    w = l;
                s.modifiersData[i] =
                    (((e = {})[w] = A), (e.centerOffset = A - y), e);
            }
        },
        effect: function (t) {
            var e = t.state,
                s = t.options.element,
                i = void 0 === s ? "[data-popper-arrow]" : s;
            null != i &&
                ("string" != typeof i ||
                    (i = e.elements.popper.querySelector(i))) &&
                Ft(e.elements.popper, i) &&
                (e.elements.arrow = i);
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"],
    };
    function $t(t) {
        return t.split("-")[1];
    }
    var Rt = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
    function zt(t) {
        var e,
            s = t.popper,
            i = t.popperRect,
            n = t.placement,
            r = t.variation,
            o = t.offsets,
            a = t.position,
            l = t.gpuAcceleration,
            u = t.adaptive,
            h = t.roundOffsets,
            c = t.isFixed,
            d = o.x,
            p = void 0 === d ? 0 : d,
            f = o.y,
            g = void 0 === f ? 0 : f,
            m = "function" == typeof h ? h({ x: p, y: g }) : { x: p, y: g };
        (p = m.x), (g = m.y);
        var _ = o.hasOwnProperty("x"),
            v = o.hasOwnProperty("y"),
            b = Y,
            k = q,
            y = window;
        if (u) {
            var A = Mt(s),
                w = "clientHeight",
                E = "clientWidth";
            if (
                (A === gt(s) &&
                    "static" !== Tt((A = Ot(s))).position &&
                    "absolute" === a &&
                    ((w = "scrollHeight"), (E = "scrollWidth")),
                n === q || ((n === Y || n === U) && r === Z))
            )
                (k = W),
                    (g -=
                        (c && A === y && y.visualViewport
                            ? y.visualViewport.height
                            : A[w]) - i.height),
                    (g *= l ? 1 : -1);
            if (n === Y || ((n === q || n === W) && r === Z))
                (b = U),
                    (p -=
                        (c && A === y && y.visualViewport
                            ? y.visualViewport.width
                            : A[E]) - i.width),
                    (p *= l ? 1 : -1);
        }
        var C,
            x = Object.assign({ position: a }, u && Rt),
            S =
                !0 === h
                    ? (function (t, e) {
                          var s = t.x,
                              i = t.y,
                              n = e.devicePixelRatio || 1;
                          return {
                              x: wt(s * n) / n || 0,
                              y: wt(i * n) / n || 0,
                          };
                      })({ x: p, y: g }, gt(s))
                    : { x: p, y: g };
        return (
            (p = S.x),
            (g = S.y),
            l
                ? Object.assign(
                      {},
                      x,
                      (((C = {})[k] = v ? "0" : ""),
                      (C[b] = _ ? "0" : ""),
                      (C.transform =
                          (y.devicePixelRatio || 1) <= 1
                              ? "translate(" + p + "px, " + g + "px)"
                              : "translate3d(" + p + "px, " + g + "px, 0)"),
                      C)
                  )
                : Object.assign(
                      {},
                      x,
                      (((e = {})[k] = v ? g + "px" : ""),
                      (e[b] = _ ? p + "px" : ""),
                      (e.transform = ""),
                      e)
                  )
        );
    }
    var Ht = {
            name: "computeStyles",
            enabled: !0,
            phase: "beforeWrite",
            fn: function (t) {
                var e = t.state,
                    s = t.options,
                    i = s.gpuAcceleration,
                    n = void 0 === i || i,
                    r = s.adaptive,
                    o = void 0 === r || r,
                    a = s.roundOffsets,
                    l = void 0 === a || a,
                    u = {
                        placement: kt(e.placement),
                        variation: $t(e.placement),
                        popper: e.elements.popper,
                        popperRect: e.rects.popper,
                        gpuAcceleration: n,
                        isFixed: "fixed" === e.options.strategy,
                    };
                null != e.modifiersData.popperOffsets &&
                    (e.styles.popper = Object.assign(
                        {},
                        e.styles.popper,
                        zt(
                            Object.assign({}, u, {
                                offsets: e.modifiersData.popperOffsets,
                                position: e.options.strategy,
                                adaptive: o,
                                roundOffsets: l,
                            })
                        )
                    )),
                    null != e.modifiersData.arrow &&
                        (e.styles.arrow = Object.assign(
                            {},
                            e.styles.arrow,
                            zt(
                                Object.assign({}, u, {
                                    offsets: e.modifiersData.arrow,
                                    position: "absolute",
                                    adaptive: !1,
                                    roundOffsets: l,
                                })
                            )
                        )),
                    (e.attributes.popper = Object.assign(
                        {},
                        e.attributes.popper,
                        { "data-popper-placement": e.placement }
                    ));
            },
            data: {},
        },
        qt = { passive: !0 };
    var Wt = {
            name: "eventListeners",
            enabled: !0,
            phase: "write",
            fn: function () {},
            effect: function (t) {
                var e = t.state,
                    s = t.instance,
                    i = t.options,
                    n = i.scroll,
                    r = void 0 === n || n,
                    o = i.resize,
                    a = void 0 === o || o,
                    l = gt(e.elements.popper),
                    u = [].concat(
                        e.scrollParents.reference,
                        e.scrollParents.popper
                    );
                return (
                    r &&
                        u.forEach(function (t) {
                            t.addEventListener("scroll", s.update, qt);
                        }),
                    a && l.addEventListener("resize", s.update, qt),
                    function () {
                        r &&
                            u.forEach(function (t) {
                                t.removeEventListener("scroll", s.update, qt);
                            }),
                            a && l.removeEventListener("resize", s.update, qt);
                    }
                );
            },
            data: {},
        },
        Ut = { left: "right", right: "left", bottom: "top", top: "bottom" };
    function Yt(t) {
        return t.replace(/left|right|bottom|top/g, function (t) {
            return Ut[t];
        });
    }
    var Kt = { start: "end", end: "start" };
    function Xt(t) {
        return t.replace(/start|end/g, function (t) {
            return Kt[t];
        });
    }
    function Qt(t) {
        var e = gt(t);
        return { scrollLeft: e.pageXOffset, scrollTop: e.pageYOffset };
    }
    function Zt(t) {
        return xt(Ot(t)).left + Qt(t).scrollLeft;
    }
    function Gt(t) {
        var e = Tt(t),
            s = e.overflow,
            i = e.overflowX,
            n = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(s + n + i);
    }
    function Jt(t) {
        return ["html", "body", "#document"].indexOf(ft(t)) >= 0
            ? t.ownerDocument.body
            : _t(t) && Gt(t)
            ? t
            : Jt(It(t));
    }
    function te(t, e) {
        var s;
        void 0 === e && (e = []);
        var i = Jt(t),
            n = i === (null == (s = t.ownerDocument) ? void 0 : s.body),
            r = gt(i),
            o = n ? [r].concat(r.visualViewport || [], Gt(i) ? i : []) : i,
            a = e.concat(o);
        return n ? a : a.concat(te(It(o)));
    }
    function ee(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height,
        });
    }
    function se(t, e, s) {
        return e === J
            ? ee(
                  (function (t, e) {
                      var s = gt(t),
                          i = Ot(t),
                          n = s.visualViewport,
                          r = i.clientWidth,
                          o = i.clientHeight,
                          a = 0,
                          l = 0;
                      if (n) {
                          (r = n.width), (o = n.height);
                          var u = Ct();
                          (u || (!u && "fixed" === e)) &&
                              ((a = n.offsetLeft), (l = n.offsetTop));
                      }
                      return { width: r, height: o, x: a + Zt(t), y: l };
                  })(t, s)
              )
            : mt(e)
            ? (function (t, e) {
                  var s = xt(t, !1, "fixed" === e);
                  return (
                      (s.top = s.top + t.clientTop),
                      (s.left = s.left + t.clientLeft),
                      (s.bottom = s.top + t.clientHeight),
                      (s.right = s.left + t.clientWidth),
                      (s.width = t.clientWidth),
                      (s.height = t.clientHeight),
                      (s.x = s.left),
                      (s.y = s.top),
                      s
                  );
              })(e, s)
            : ee(
                  (function (t) {
                      var e,
                          s = Ot(t),
                          i = Qt(t),
                          n = null == (e = t.ownerDocument) ? void 0 : e.body,
                          r = yt(
                              s.scrollWidth,
                              s.clientWidth,
                              n ? n.scrollWidth : 0,
                              n ? n.clientWidth : 0
                          ),
                          o = yt(
                              s.scrollHeight,
                              s.clientHeight,
                              n ? n.scrollHeight : 0,
                              n ? n.clientHeight : 0
                          ),
                          a = -i.scrollLeft + Zt(t),
                          l = -i.scrollTop;
                      return (
                          "rtl" === Tt(n || s).direction &&
                              (a +=
                                  yt(s.clientWidth, n ? n.clientWidth : 0) - r),
                          { width: r, height: o, x: a, y: l }
                      );
                  })(Ot(t))
              );
    }
    function ie(t, e, s, i) {
        var n =
                "clippingParents" === e
                    ? (function (t) {
                          var e = te(It(t)),
                              s =
                                  ["absolute", "fixed"].indexOf(
                                      Tt(t).position
                                  ) >= 0 && _t(t)
                                      ? Mt(t)
                                      : t;
                          return mt(s)
                              ? e.filter(function (t) {
                                    return (
                                        mt(t) && Ft(t, s) && "body" !== ft(t)
                                    );
                                })
                              : [];
                      })(t)
                    : [].concat(e),
            r = [].concat(n, [s]),
            o = r[0],
            a = r.reduce(function (e, s) {
                var n = se(t, s, i);
                return (
                    (e.top = yt(n.top, e.top)),
                    (e.right = At(n.right, e.right)),
                    (e.bottom = At(n.bottom, e.bottom)),
                    (e.left = yt(n.left, e.left)),
                    e
                );
            }, se(t, o, i));
        return (
            (a.width = a.right - a.left),
            (a.height = a.bottom - a.top),
            (a.x = a.left),
            (a.y = a.top),
            a
        );
    }
    function ne(t) {
        var e,
            s = t.reference,
            i = t.element,
            n = t.placement,
            r = n ? kt(n) : null,
            o = n ? $t(n) : null,
            a = s.x + s.width / 2 - i.width / 2,
            l = s.y + s.height / 2 - i.height / 2;
        switch (r) {
            case q:
                e = { x: a, y: s.y - i.height };
                break;
            case W:
                e = { x: a, y: s.y + s.height };
                break;
            case U:
                e = { x: s.x + s.width, y: l };
                break;
            case Y:
                e = { x: s.x - i.width, y: l };
                break;
            default:
                e = { x: s.x, y: s.y };
        }
        var u = r ? Pt(r) : null;
        if (null != u) {
            var h = "y" === u ? "height" : "width";
            switch (o) {
                case Q:
                    e[u] = e[u] - (s[h] / 2 - i[h] / 2);
                    break;
                case Z:
                    e[u] = e[u] + (s[h] / 2 - i[h] / 2);
            }
        }
        return e;
    }
    function re(t, e) {
        void 0 === e && (e = {});
        var s = e,
            i = s.placement,
            n = void 0 === i ? t.placement : i,
            r = s.strategy,
            o = void 0 === r ? t.strategy : r,
            a = s.boundary,
            l = void 0 === a ? G : a,
            u = s.rootBoundary,
            h = void 0 === u ? J : u,
            c = s.elementContext,
            d = void 0 === c ? tt : c,
            p = s.altBoundary,
            f = void 0 !== p && p,
            g = s.padding,
            m = void 0 === g ? 0 : g,
            _ = Vt("number" != typeof m ? m : Nt(m, X)),
            v = d === tt ? et : tt,
            b = t.rects.popper,
            k = t.elements[f ? v : d],
            y = ie(
                mt(k) ? k : k.contextElement || Ot(t.elements.popper),
                l,
                h,
                o
            ),
            A = xt(t.elements.reference),
            w = ne({
                reference: A,
                element: b,
                strategy: "absolute",
                placement: n,
            }),
            E = ee(Object.assign({}, b, w)),
            C = d === tt ? E : A,
            x = {
                top: y.top - C.top + _.top,
                bottom: C.bottom - y.bottom + _.bottom,
                left: y.left - C.left + _.left,
                right: C.right - y.right + _.right,
            },
            S = t.modifiersData.offset;
        if (d === tt && S) {
            var F = S[n];
            Object.keys(x).forEach(function (t) {
                var e = [U, W].indexOf(t) >= 0 ? 1 : -1,
                    s = [q, W].indexOf(t) >= 0 ? "y" : "x";
                x[t] += F[s] * e;
            });
        }
        return x;
    }
    function oe(t, e) {
        void 0 === e && (e = {});
        var s = e,
            i = s.placement,
            n = s.boundary,
            r = s.rootBoundary,
            o = s.padding,
            a = s.flipVariations,
            l = s.allowedAutoPlacements,
            u = void 0 === l ? it : l,
            h = $t(i),
            c = h
                ? a
                    ? st
                    : st.filter(function (t) {
                          return $t(t) === h;
                      })
                : X,
            d = c.filter(function (t) {
                return u.indexOf(t) >= 0;
            });
        0 === d.length && (d = c);
        var p = d.reduce(function (e, s) {
            return (
                (e[s] = re(t, {
                    placement: s,
                    boundary: n,
                    rootBoundary: r,
                    padding: o,
                })[kt(s)]),
                e
            );
        }, {});
        return Object.keys(p).sort(function (t, e) {
            return p[t] - p[e];
        });
    }
    var ae = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                s = t.options,
                i = t.name;
            if (!e.modifiersData[i]._skip) {
                for (
                    var n = s.mainAxis,
                        r = void 0 === n || n,
                        o = s.altAxis,
                        a = void 0 === o || o,
                        l = s.fallbackPlacements,
                        u = s.padding,
                        h = s.boundary,
                        c = s.rootBoundary,
                        d = s.altBoundary,
                        p = s.flipVariations,
                        f = void 0 === p || p,
                        g = s.allowedAutoPlacements,
                        m = e.options.placement,
                        _ = kt(m),
                        v =
                            l ||
                            (_ === m || !f
                                ? [Yt(m)]
                                : (function (t) {
                                      if (kt(t) === K) return [];
                                      var e = Yt(t);
                                      return [Xt(t), e, Xt(e)];
                                  })(m)),
                        b = [m].concat(v).reduce(function (t, s) {
                            return t.concat(
                                kt(s) === K
                                    ? oe(e, {
                                          placement: s,
                                          boundary: h,
                                          rootBoundary: c,
                                          padding: u,
                                          flipVariations: f,
                                          allowedAutoPlacements: g,
                                      })
                                    : s
                            );
                        }, []),
                        k = e.rects.reference,
                        y = e.rects.popper,
                        A = new Map(),
                        w = !0,
                        E = b[0],
                        C = 0;
                    C < b.length;
                    C++
                ) {
                    var x = b[C],
                        S = kt(x),
                        F = $t(x) === Q,
                        T = [q, W].indexOf(S) >= 0,
                        D = T ? "width" : "height",
                        O = re(e, {
                            placement: x,
                            boundary: h,
                            rootBoundary: c,
                            altBoundary: d,
                            padding: u,
                        }),
                        I = T ? (F ? U : Y) : F ? W : q;
                    k[D] > y[D] && (I = Yt(I));
                    var B = Yt(I),
                        M = [];
                    if (
                        (r && M.push(O[S] <= 0),
                        a && M.push(O[I] <= 0, O[B] <= 0),
                        M.every(function (t) {
                            return t;
                        }))
                    ) {
                        (E = x), (w = !1);
                        break;
                    }
                    A.set(x, M);
                }
                if (w)
                    for (
                        var P = function (t) {
                                var e = b.find(function (e) {
                                    var s = A.get(e);
                                    if (s)
                                        return s
                                            .slice(0, t)
                                            .every(function (t) {
                                                return t;
                                            });
                                });
                                if (e) return (E = e), "break";
                            },
                            L = f ? 3 : 1;
                        L > 0;
                        L--
                    ) {
                        if ("break" === P(L)) break;
                    }
                e.placement !== E &&
                    ((e.modifiersData[i]._skip = !0),
                    (e.placement = E),
                    (e.reset = !0));
            }
        },
        requiresIfExists: ["offset"],
        data: { _skip: !1 },
    };
    function le(t, e, s) {
        return (
            void 0 === s && (s = { x: 0, y: 0 }),
            {
                top: t.top - e.height - s.y,
                right: t.right - e.width + s.x,
                bottom: t.bottom - e.height + s.y,
                left: t.left - e.width - s.x,
            }
        );
    }
    function ue(t) {
        return [q, U, W, Y].some(function (e) {
            return t[e] >= 0;
        });
    }
    var he = {
        name: "hide",
        enabled: !0,
        phase: "main",
        requiresIfExists: ["preventOverflow"],
        fn: function (t) {
            var e = t.state,
                s = t.name,
                i = e.rects.reference,
                n = e.rects.popper,
                r = e.modifiersData.preventOverflow,
                o = re(e, { elementContext: "reference" }),
                a = re(e, { altBoundary: !0 }),
                l = le(o, i),
                u = le(a, n, r),
                h = ue(l),
                c = ue(u);
            (e.modifiersData[s] = {
                referenceClippingOffsets: l,
                popperEscapeOffsets: u,
                isReferenceHidden: h,
                hasPopperEscaped: c,
            }),
                (e.attributes.popper = Object.assign({}, e.attributes.popper, {
                    "data-popper-reference-hidden": h,
                    "data-popper-escaped": c,
                }));
        },
    };
    var ce = {
        name: "offset",
        enabled: !0,
        phase: "main",
        requires: ["popperOffsets"],
        fn: function (t) {
            var e = t.state,
                s = t.options,
                i = t.name,
                n = s.offset,
                r = void 0 === n ? [0, 0] : n,
                o = it.reduce(function (t, s) {
                    return (
                        (t[s] = (function (t, e, s) {
                            var i = kt(t),
                                n = [Y, q].indexOf(i) >= 0 ? -1 : 1,
                                r =
                                    "function" == typeof s
                                        ? s(
                                              Object.assign({}, e, {
                                                  placement: t,
                                              })
                                          )
                                        : s,
                                o = r[0],
                                a = r[1];
                            return (
                                (o = o || 0),
                                (a = (a || 0) * n),
                                [Y, U].indexOf(i) >= 0
                                    ? { x: a, y: o }
                                    : { x: o, y: a }
                            );
                        })(s, e.rects, r)),
                        t
                    );
                }, {}),
                a = o[e.placement],
                l = a.x,
                u = a.y;
            null != e.modifiersData.popperOffsets &&
                ((e.modifiersData.popperOffsets.x += l),
                (e.modifiersData.popperOffsets.y += u)),
                (e.modifiersData[i] = o);
        },
    };
    var de = {
        name: "popperOffsets",
        enabled: !0,
        phase: "read",
        fn: function (t) {
            var e = t.state,
                s = t.name;
            e.modifiersData[s] = ne({
                reference: e.rects.reference,
                element: e.rects.popper,
                strategy: "absolute",
                placement: e.placement,
            });
        },
        data: {},
    };
    var pe = {
        name: "preventOverflow",
        enabled: !0,
        phase: "main",
        fn: function (t) {
            var e = t.state,
                s = t.options,
                i = t.name,
                n = s.mainAxis,
                r = void 0 === n || n,
                o = s.altAxis,
                a = void 0 !== o && o,
                l = s.boundary,
                u = s.rootBoundary,
                h = s.altBoundary,
                c = s.padding,
                d = s.tether,
                p = void 0 === d || d,
                f = s.tetherOffset,
                g = void 0 === f ? 0 : f,
                m = re(e, {
                    boundary: l,
                    rootBoundary: u,
                    padding: c,
                    altBoundary: h,
                }),
                _ = kt(e.placement),
                v = $t(e.placement),
                b = !v,
                k = Pt(_),
                y = "x" === k ? "y" : "x",
                A = e.modifiersData.popperOffsets,
                w = e.rects.reference,
                E = e.rects.popper,
                C =
                    "function" == typeof g
                        ? g(
                              Object.assign({}, e.rects, {
                                  placement: e.placement,
                              })
                          )
                        : g,
                x =
                    "number" == typeof C
                        ? { mainAxis: C, altAxis: C }
                        : Object.assign({ mainAxis: 0, altAxis: 0 }, C),
                S = e.modifiersData.offset
                    ? e.modifiersData.offset[e.placement]
                    : null,
                F = { x: 0, y: 0 };
            if (A) {
                if (r) {
                    var T,
                        D = "y" === k ? q : Y,
                        O = "y" === k ? W : U,
                        I = "y" === k ? "height" : "width",
                        B = A[k],
                        M = B + m[D],
                        P = B - m[O],
                        L = p ? -E[I] / 2 : 0,
                        V = v === Q ? w[I] : E[I],
                        N = v === Q ? -E[I] : -w[I],
                        j = e.elements.arrow,
                        $ = p && j ? St(j) : { width: 0, height: 0 },
                        R = e.modifiersData["arrow#persistent"]
                            ? e.modifiersData["arrow#persistent"].padding
                            : { top: 0, right: 0, bottom: 0, left: 0 },
                        z = R[D],
                        H = R[O],
                        K = Lt(0, w[I], $[I]),
                        X = b
                            ? w[I] / 2 - L - K - z - x.mainAxis
                            : V - K - z - x.mainAxis,
                        Z = b
                            ? -w[I] / 2 + L + K + H + x.mainAxis
                            : N + K + H + x.mainAxis,
                        G = e.elements.arrow && Mt(e.elements.arrow),
                        J = G
                            ? "y" === k
                                ? G.clientTop || 0
                                : G.clientLeft || 0
                            : 0,
                        tt = null != (T = null == S ? void 0 : S[k]) ? T : 0,
                        et = B + Z - tt,
                        st = Lt(
                            p ? At(M, B + X - tt - J) : M,
                            B,
                            p ? yt(P, et) : P
                        );
                    (A[k] = st), (F[k] = st - B);
                }
                if (a) {
                    var it,
                        nt = "x" === k ? q : Y,
                        rt = "x" === k ? W : U,
                        ot = A[y],
                        at = "y" === y ? "height" : "width",
                        lt = ot + m[nt],
                        ut = ot - m[rt],
                        ht = -1 !== [q, Y].indexOf(_),
                        ct = null != (it = null == S ? void 0 : S[y]) ? it : 0,
                        dt = ht ? lt : ot - w[at] - E[at] - ct + x.altAxis,
                        pt = ht ? ot + w[at] + E[at] - ct - x.altAxis : ut,
                        ft =
                            p && ht
                                ? (function (t, e, s) {
                                      var i = Lt(t, e, s);
                                      return i > s ? s : i;
                                  })(dt, ot, pt)
                                : Lt(p ? dt : lt, ot, p ? pt : ut);
                    (A[y] = ft), (F[y] = ft - ot);
                }
                e.modifiersData[i] = F;
            }
        },
        requiresIfExists: ["offset"],
    };
    function fe(t, e, s) {
        void 0 === s && (s = !1);
        var i,
            n,
            r = _t(e),
            o =
                _t(e) &&
                (function (t) {
                    var e = t.getBoundingClientRect(),
                        s = wt(e.width) / t.offsetWidth || 1,
                        i = wt(e.height) / t.offsetHeight || 1;
                    return 1 !== s || 1 !== i;
                })(e),
            a = Ot(e),
            l = xt(t, o, s),
            u = { scrollLeft: 0, scrollTop: 0 },
            h = { x: 0, y: 0 };
        return (
            (r || (!r && !s)) &&
                (("body" !== ft(e) || Gt(a)) &&
                    (u =
                        (i = e) !== gt(i) && _t(i)
                            ? {
                                  scrollLeft: (n = i).scrollLeft,
                                  scrollTop: n.scrollTop,
                              }
                            : Qt(i)),
                _t(e)
                    ? (((h = xt(e, !0)).x += e.clientLeft),
                      (h.y += e.clientTop))
                    : a && (h.x = Zt(a))),
            {
                x: l.left + u.scrollLeft - h.x,
                y: l.top + u.scrollTop - h.y,
                width: l.width,
                height: l.height,
            }
        );
    }
    function ge(t) {
        var e = new Map(),
            s = new Set(),
            i = [];
        function n(t) {
            s.add(t.name),
                []
                    .concat(t.requires || [], t.requiresIfExists || [])
                    .forEach(function (t) {
                        if (!s.has(t)) {
                            var i = e.get(t);
                            i && n(i);
                        }
                    }),
                i.push(t);
        }
        return (
            t.forEach(function (t) {
                e.set(t.name, t);
            }),
            t.forEach(function (t) {
                s.has(t.name) || n(t);
            }),
            i
        );
    }
    var me = { placement: "bottom", modifiers: [], strategy: "absolute" };
    function _e() {
        for (var t = arguments.length, e = new Array(t), s = 0; s < t; s++)
            e[s] = arguments[s];
        return !e.some(function (t) {
            return !(t && "function" == typeof t.getBoundingClientRect);
        });
    }
    function ve(t) {
        void 0 === t && (t = {});
        var e = t,
            s = e.defaultModifiers,
            i = void 0 === s ? [] : s,
            n = e.defaultOptions,
            r = void 0 === n ? me : n;
        return function (t, e, s) {
            void 0 === s && (s = r);
            var n,
                o,
                a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, me, r),
                    modifiersData: {},
                    elements: { reference: t, popper: e },
                    attributes: {},
                    styles: {},
                },
                l = [],
                u = !1,
                h = {
                    state: a,
                    setOptions: function (s) {
                        var n = "function" == typeof s ? s(a.options) : s;
                        c(),
                            (a.options = Object.assign({}, r, a.options, n)),
                            (a.scrollParents = {
                                reference: mt(t)
                                    ? te(t)
                                    : t.contextElement
                                    ? te(t.contextElement)
                                    : [],
                                popper: te(e),
                            });
                        var o,
                            u,
                            d = (function (t) {
                                var e = ge(t);
                                return pt.reduce(function (t, s) {
                                    return t.concat(
                                        e.filter(function (t) {
                                            return t.phase === s;
                                        })
                                    );
                                }, []);
                            })(
                                ((o = [].concat(i, a.options.modifiers)),
                                (u = o.reduce(function (t, e) {
                                    var s = t[e.name];
                                    return (
                                        (t[e.name] = s
                                            ? Object.assign({}, s, e, {
                                                  options: Object.assign(
                                                      {},
                                                      s.options,
                                                      e.options
                                                  ),
                                                  data: Object.assign(
                                                      {},
                                                      s.data,
                                                      e.data
                                                  ),
                                              })
                                            : e),
                                        t
                                    );
                                }, {})),
                                Object.keys(u).map(function (t) {
                                    return u[t];
                                }))
                            );
                        return (
                            (a.orderedModifiers = d.filter(function (t) {
                                return t.enabled;
                            })),
                            a.orderedModifiers.forEach(function (t) {
                                var e = t.name,
                                    s = t.options,
                                    i = void 0 === s ? {} : s,
                                    n = t.effect;
                                if ("function" == typeof n) {
                                    var r = n({
                                            state: a,
                                            name: e,
                                            instance: h,
                                            options: i,
                                        }),
                                        o = function () {};
                                    l.push(r || o);
                                }
                            }),
                            h.update()
                        );
                    },
                    forceUpdate: function () {
                        if (!u) {
                            var t = a.elements,
                                e = t.reference,
                                s = t.popper;
                            if (_e(e, s)) {
                                (a.rects = {
                                    reference: fe(
                                        e,
                                        Mt(s),
                                        "fixed" === a.options.strategy
                                    ),
                                    popper: St(s),
                                }),
                                    (a.reset = !1),
                                    (a.placement = a.options.placement),
                                    a.orderedModifiers.forEach(function (t) {
                                        return (a.modifiersData[t.name] =
                                            Object.assign({}, t.data));
                                    });
                                for (
                                    var i = 0;
                                    i < a.orderedModifiers.length;
                                    i++
                                )
                                    if (!0 !== a.reset) {
                                        var n = a.orderedModifiers[i],
                                            r = n.fn,
                                            o = n.options,
                                            l = void 0 === o ? {} : o,
                                            c = n.name;
                                        "function" == typeof r &&
                                            (a =
                                                r({
                                                    state: a,
                                                    options: l,
                                                    name: c,
                                                    instance: h,
                                                }) || a);
                                    } else (a.reset = !1), (i = -1);
                            }
                        }
                    },
                    update:
                        ((n = function () {
                            return new Promise(function (t) {
                                h.forceUpdate(), t(a);
                            });
                        }),
                        function () {
                            return (
                                o ||
                                    (o = new Promise(function (t) {
                                        Promise.resolve().then(function () {
                                            (o = void 0), t(n());
                                        });
                                    })),
                                o
                            );
                        }),
                    destroy: function () {
                        c(), (u = !0);
                    },
                };
            if (!_e(t, e)) return h;
            function c() {
                l.forEach(function (t) {
                    return t();
                }),
                    (l = []);
            }
            return (
                h.setOptions(s).then(function (t) {
                    !u && s.onFirstUpdate && s.onFirstUpdate(t);
                }),
                h
            );
        };
    }
    var be = ve(),
        ke = ve({ defaultModifiers: [Wt, de, Ht, bt] }),
        ye = ve({ defaultModifiers: [Wt, de, Ht, bt, ce, ae, pe, jt, he] }),
        Ae = Object.freeze({
            __proto__: null,
            popperGenerator: ve,
            detectOverflow: re,
            createPopperBase: be,
            createPopper: ye,
            createPopperLite: ke,
            top: q,
            bottom: W,
            right: U,
            left: Y,
            auto: K,
            basePlacements: X,
            start: Q,
            end: Z,
            clippingParents: G,
            viewport: J,
            popper: tt,
            reference: et,
            variationPlacements: st,
            placements: it,
            beforeRead: nt,
            read: rt,
            afterRead: ot,
            beforeMain: at,
            main: lt,
            afterMain: ut,
            beforeWrite: ht,
            write: ct,
            afterWrite: dt,
            modifierPhases: pt,
            applyStyles: bt,
            arrow: jt,
            computeStyles: Ht,
            eventListeners: Wt,
            flip: ae,
            hide: he,
            offset: ce,
            popperOffsets: de,
            preventOverflow: pe,
        });
    /*!
     * Bootstrap v5.3.1 (https://getbootstrap.com/)
     * Copyright 2011-2023 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
     * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
     */
    const we = new Map(),
        Ee = {
            set(t, e, s) {
                we.has(t) || we.set(t, new Map());
                const i = we.get(t);
                i.has(e) || 0 === i.size
                    ? i.set(e, s)
                    : console.error(
                          `Bootstrap doesn't allow more than one instance per element. Bound instance: ${
                              Array.from(i.keys())[0]
                          }.`
                      );
            },
            get: (t, e) => (we.has(t) && we.get(t).get(e)) || null,
            remove(t, e) {
                if (!we.has(t)) return;
                const s = we.get(t);
                s.delete(e), 0 === s.size && we.delete(t);
            },
        },
        Ce = "transitionend",
        xe = (t) => (
            t &&
                window.CSS &&
                window.CSS.escape &&
                (t = t.replace(/#([^\s"#']+)/g, (t, e) => `#${CSS.escape(e)}`)),
            t
        ),
        Se = (t) => {
            t.dispatchEvent(new Event(Ce));
        },
        Fe = (t) =>
            !(!t || "object" != typeof t) &&
            (void 0 !== t.jquery && (t = t[0]), void 0 !== t.nodeType),
        Te = (t) =>
            Fe(t)
                ? t.jquery
                    ? t[0]
                    : t
                : "string" == typeof t && t.length > 0
                ? document.querySelector(xe(t))
                : null,
        De = (t) => {
            if (!Fe(t) || 0 === t.getClientRects().length) return !1;
            const e =
                    "visible" ===
                    getComputedStyle(t).getPropertyValue("visibility"),
                s = t.closest("details:not([open])");
            if (!s) return e;
            if (s !== t) {
                const e = t.closest("summary");
                if (e && e.parentNode !== s) return !1;
                if (null === e) return !1;
            }
            return e;
        },
        Oe = (t) =>
            !t ||
            t.nodeType !== Node.ELEMENT_NODE ||
            !!t.classList.contains("disabled") ||
            (void 0 !== t.disabled
                ? t.disabled
                : t.hasAttribute("disabled") &&
                  "false" !== t.getAttribute("disabled")),
        Ie = (t) => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof t.getRootNode) {
                const e = t.getRootNode();
                return e instanceof ShadowRoot ? e : null;
            }
            return t instanceof ShadowRoot
                ? t
                : t.parentNode
                ? Ie(t.parentNode)
                : null;
        },
        Be = () => {},
        Me = (t) => {
            t.offsetHeight;
        },
        Pe = () =>
            window.jQuery && !document.body.hasAttribute("data-bs-no-jquery")
                ? window.jQuery
                : null,
        Le = [],
        Ve = () => "rtl" === document.documentElement.dir,
        Ne = (t) => {
            var e;
            (e = () => {
                const e = Pe();
                if (e) {
                    const s = t.NAME,
                        i = e.fn[s];
                    (e.fn[s] = t.jQueryInterface),
                        (e.fn[s].Constructor = t),
                        (e.fn[s].noConflict = () => (
                            (e.fn[s] = i), t.jQueryInterface
                        ));
                }
            }),
                "loading" === document.readyState
                    ? (Le.length ||
                          document.addEventListener("DOMContentLoaded", () => {
                              for (const t of Le) t();
                          }),
                      Le.push(e))
                    : e();
        },
        je = (t, e = [], s = t) => ("function" == typeof t ? t(...e) : s),
        $e = (t, e, s = !0) => {
            if (!s) return void je(t);
            const i =
                ((t) => {
                    if (!t) return 0;
                    let { transitionDuration: e, transitionDelay: s } =
                        window.getComputedStyle(t);
                    const i = Number.parseFloat(e),
                        n = Number.parseFloat(s);
                    return i || n
                        ? ((e = e.split(",")[0]),
                          (s = s.split(",")[0]),
                          1e3 * (Number.parseFloat(e) + Number.parseFloat(s)))
                        : 0;
                })(e) + 5;
            let n = !1;
            const r = ({ target: s }) => {
                s === e && ((n = !0), e.removeEventListener(Ce, r), je(t));
            };
            e.addEventListener(Ce, r),
                setTimeout(() => {
                    n || Se(e);
                }, i);
        },
        Re = (t, e, s, i) => {
            const n = t.length;
            let r = t.indexOf(e);
            return -1 === r
                ? !s && i
                    ? t[n - 1]
                    : t[0]
                : ((r += s ? 1 : -1),
                  i && (r = (r + n) % n),
                  t[Math.max(0, Math.min(r, n - 1))]);
        },
        ze = /[^.]*(?=\..*)\.|.*/,
        He = /\..*/,
        qe = /::\d+$/,
        We = {};
    let Ue = 1;
    const Ye = { mouseenter: "mouseover", mouseleave: "mouseout" },
        Ke = new Set([
            "click",
            "dblclick",
            "mouseup",
            "mousedown",
            "contextmenu",
            "mousewheel",
            "DOMMouseScroll",
            "mouseover",
            "mouseout",
            "mousemove",
            "selectstart",
            "selectend",
            "keydown",
            "keypress",
            "keyup",
            "orientationchange",
            "touchstart",
            "touchmove",
            "touchend",
            "touchcancel",
            "pointerdown",
            "pointermove",
            "pointerup",
            "pointerleave",
            "pointercancel",
            "gesturestart",
            "gesturechange",
            "gestureend",
            "focus",
            "blur",
            "change",
            "reset",
            "select",
            "submit",
            "focusin",
            "focusout",
            "load",
            "unload",
            "beforeunload",
            "resize",
            "move",
            "DOMContentLoaded",
            "readystatechange",
            "error",
            "abort",
            "scroll",
        ]);
    function Xe(t, e) {
        return (e && `${e}::${Ue++}`) || t.uidEvent || Ue++;
    }
    function Qe(t) {
        const e = Xe(t);
        return (t.uidEvent = e), (We[e] = We[e] || {}), We[e];
    }
    function Ze(t, e, s = null) {
        return Object.values(t).find(
            (t) => t.callable === e && t.delegationSelector === s
        );
    }
    function Ge(t, e, s) {
        const i = "string" == typeof e,
            n = i ? s : e || s;
        let r = ss(t);
        return Ke.has(r) || (r = t), [i, n, r];
    }
    function Je(t, e, s, i, n) {
        if ("string" != typeof e || !t) return;
        let [r, o, a] = Ge(e, s, i);
        if (e in Ye) {
            const t = (t) =>
                function (e) {
                    if (
                        !e.relatedTarget ||
                        (e.relatedTarget !== e.delegateTarget &&
                            !e.delegateTarget.contains(e.relatedTarget))
                    )
                        return t.call(this, e);
                };
            o = t(o);
        }
        const l = Qe(t),
            u = l[a] || (l[a] = {}),
            h = Ze(u, o, r ? s : null);
        if (h) return void (h.oneOff = h.oneOff && n);
        const c = Xe(o, e.replace(ze, "")),
            d = r
                ? (function (t, e, s) {
                      return function i(n) {
                          const r = t.querySelectorAll(e);
                          for (
                              let { target: o } = n;
                              o && o !== this;
                              o = o.parentNode
                          )
                              for (const a of r)
                                  if (a === o)
                                      return (
                                          ns(n, { delegateTarget: o }),
                                          i.oneOff && is.off(t, n.type, e, s),
                                          s.apply(o, [n])
                                      );
                      };
                  })(t, s, o)
                : (function (t, e) {
                      return function s(i) {
                          return (
                              ns(i, { delegateTarget: t }),
                              s.oneOff && is.off(t, i.type, e),
                              e.apply(t, [i])
                          );
                      };
                  })(t, o);
        (d.delegationSelector = r ? s : null),
            (d.callable = o),
            (d.oneOff = n),
            (d.uidEvent = c),
            (u[c] = d),
            t.addEventListener(a, d, r);
    }
    function ts(t, e, s, i, n) {
        const r = Ze(e[s], i, n);
        r && (t.removeEventListener(s, r, Boolean(n)), delete e[s][r.uidEvent]);
    }
    function es(t, e, s, i) {
        const n = e[s] || {};
        for (const [r, o] of Object.entries(n))
            r.includes(i) && ts(t, e, s, o.callable, o.delegationSelector);
    }
    function ss(t) {
        return (t = t.replace(He, "")), Ye[t] || t;
    }
    const is = {
        on(t, e, s, i) {
            Je(t, e, s, i, !1);
        },
        one(t, e, s, i) {
            Je(t, e, s, i, !0);
        },
        off(t, e, s, i) {
            if ("string" != typeof e || !t) return;
            const [n, r, o] = Ge(e, s, i),
                a = o !== e,
                l = Qe(t),
                u = l[o] || {},
                h = e.startsWith(".");
            if (void 0 === r) {
                if (h) for (const s of Object.keys(l)) es(t, l, s, e.slice(1));
                for (const [s, i] of Object.entries(u)) {
                    const n = s.replace(qe, "");
                    (a && !e.includes(n)) ||
                        ts(t, l, o, i.callable, i.delegationSelector);
                }
            } else {
                if (!Object.keys(u).length) return;
                ts(t, l, o, r, n ? s : null);
            }
        },
        trigger(t, e, s) {
            if ("string" != typeof e || !t) return null;
            const i = Pe();
            let n = null,
                r = !0,
                o = !0,
                a = !1;
            e !== ss(e) &&
                i &&
                ((n = i.Event(e, s)),
                i(t).trigger(n),
                (r = !n.isPropagationStopped()),
                (o = !n.isImmediatePropagationStopped()),
                (a = n.isDefaultPrevented()));
            const l = ns(new Event(e, { bubbles: r, cancelable: !0 }), s);
            return (
                a && l.preventDefault(),
                o && t.dispatchEvent(l),
                l.defaultPrevented && n && n.preventDefault(),
                l
            );
        },
    };
    function ns(t, e = {}) {
        for (const [s, i] of Object.entries(e))
            try {
                t[s] = i;
            } catch (e) {
                Object.defineProperty(t, s, { configurable: !0, get: () => i });
            }
        return t;
    }
    function rs(t) {
        if ("true" === t) return !0;
        if ("false" === t) return !1;
        if (t === Number(t).toString()) return Number(t);
        if ("" === t || "null" === t) return null;
        if ("string" != typeof t) return t;
        try {
            return JSON.parse(decodeURIComponent(t));
        } catch (e) {
            return t;
        }
    }
    function os(t) {
        return t.replace(/[A-Z]/g, (t) => `-${t.toLowerCase()}`);
    }
    const as = {
        setDataAttribute(t, e, s) {
            t.setAttribute(`data-bs-${os(e)}`, s);
        },
        removeDataAttribute(t, e) {
            t.removeAttribute(`data-bs-${os(e)}`);
        },
        getDataAttributes(t) {
            if (!t) return {};
            const e = {},
                s = Object.keys(t.dataset).filter(
                    (t) => t.startsWith("bs") && !t.startsWith("bsConfig")
                );
            for (const i of s) {
                let s = i.replace(/^bs/, "");
                (s = s.charAt(0).toLowerCase() + s.slice(1, s.length)),
                    (e[s] = rs(t.dataset[i]));
            }
            return e;
        },
        getDataAttribute: (t, e) => rs(t.getAttribute(`data-bs-${os(e)}`)),
    };
    class ls {
        static get Default() {
            return {};
        }
        static get DefaultType() {
            return {};
        }
        static get NAME() {
            throw new Error(
                'You have to implement the static method "NAME", for each component!'
            );
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        _configAfterMerge(t) {
            return t;
        }
        _mergeConfigObj(t, e) {
            const s = Fe(e) ? as.getDataAttribute(e, "config") : {};
            return {
                ...this.constructor.Default,
                ...("object" == typeof s ? s : {}),
                ...(Fe(e) ? as.getDataAttributes(e) : {}),
                ...("object" == typeof t ? t : {}),
            };
        }
        _typeCheckConfig(t, e = this.constructor.DefaultType) {
            for (const [i, n] of Object.entries(e)) {
                const e = t[i],
                    r = Fe(e)
                        ? "element"
                        : null == (s = e)
                        ? `${s}`
                        : Object.prototype.toString
                              .call(s)
                              .match(/\s([a-z]+)/i)[1]
                              .toLowerCase();
                if (!new RegExp(n).test(r))
                    throw new TypeError(
                        `${this.constructor.NAME.toUpperCase()}: Option "${i}" provided type "${r}" but expected type "${n}".`
                    );
            }
            var s;
        }
    }
    class us extends ls {
        constructor(t, e) {
            super(),
                (t = Te(t)) &&
                    ((this._element = t),
                    (this._config = this._getConfig(e)),
                    Ee.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
            Ee.remove(this._element, this.constructor.DATA_KEY),
                is.off(this._element, this.constructor.EVENT_KEY);
            for (const t of Object.getOwnPropertyNames(this)) this[t] = null;
        }
        _queueCallback(t, e, s = !0) {
            $e(t, e, s);
        }
        _getConfig(t) {
            return (
                (t = this._mergeConfigObj(t, this._element)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        static getInstance(t) {
            return Ee.get(Te(t), this.DATA_KEY);
        }
        static getOrCreateInstance(t, e = {}) {
            return (
                this.getInstance(t) ||
                new this(t, "object" == typeof e ? e : null)
            );
        }
        static get VERSION() {
            return "5.3.1";
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`;
        }
        static eventName(t) {
            return `${t}${this.EVENT_KEY}`;
        }
    }
    const hs = (t) => {
            let e = t.getAttribute("data-bs-target");
            if (!e || "#" === e) {
                let s = t.getAttribute("href");
                if (!s || (!s.includes("#") && !s.startsWith("."))) return null;
                s.includes("#") &&
                    !s.startsWith("#") &&
                    (s = `#${s.split("#")[1]}`),
                    (e = s && "#" !== s ? s.trim() : null);
            }
            return xe(e);
        },
        cs = {
            find: (t, e = document.documentElement) =>
                [].concat(...Element.prototype.querySelectorAll.call(e, t)),
            findOne: (t, e = document.documentElement) =>
                Element.prototype.querySelector.call(e, t),
            children: (t, e) =>
                [].concat(...t.children).filter((t) => t.matches(e)),
            parents(t, e) {
                const s = [];
                let i = t.parentNode.closest(e);
                for (; i; ) s.push(i), (i = i.parentNode.closest(e));
                return s;
            },
            prev(t, e) {
                let s = t.previousElementSibling;
                for (; s; ) {
                    if (s.matches(e)) return [s];
                    s = s.previousElementSibling;
                }
                return [];
            },
            next(t, e) {
                let s = t.nextElementSibling;
                for (; s; ) {
                    if (s.matches(e)) return [s];
                    s = s.nextElementSibling;
                }
                return [];
            },
            focusableChildren(t) {
                const e = [
                    "a",
                    "button",
                    "input",
                    "textarea",
                    "select",
                    "details",
                    "[tabindex]",
                    '[contenteditable="true"]',
                ]
                    .map((t) => `${t}:not([tabindex^="-"])`)
                    .join(",");
                return this.find(e, t).filter((t) => !Oe(t) && De(t));
            },
            getSelectorFromElement(t) {
                const e = hs(t);
                return e && cs.findOne(e) ? e : null;
            },
            getElementFromSelector(t) {
                const e = hs(t);
                return e ? cs.findOne(e) : null;
            },
            getMultipleElementsFromSelector(t) {
                const e = hs(t);
                return e ? cs.find(e) : [];
            },
        },
        ds = (t, e = "hide") => {
            const s = `click.dismiss${t.EVENT_KEY}`,
                i = t.NAME;
            is.on(document, s, `[data-bs-dismiss="${i}"]`, function (s) {
                if (
                    (["A", "AREA"].includes(this.tagName) && s.preventDefault(),
                    Oe(this))
                )
                    return;
                const n =
                    cs.getElementFromSelector(this) || this.closest(`.${i}`);
                t.getOrCreateInstance(n)[e]();
            });
        },
        ps = ".bs.alert",
        fs = `close${ps}`,
        gs = `closed${ps}`;
    class ms extends us {
        static get NAME() {
            return "alert";
        }
        close() {
            if (is.trigger(this._element, fs).defaultPrevented) return;
            this._element.classList.remove("show");
            const t = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, t);
        }
        _destroyElement() {
            this._element.remove(),
                is.trigger(this._element, gs),
                this.dispose();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ms.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    ds(ms, "close"), Ne(ms);
    const _s = '[data-bs-toggle="button"]';
    class vs extends us {
        static get NAME() {
            return "button";
        }
        toggle() {
            this._element.setAttribute(
                "aria-pressed",
                this._element.classList.toggle("active")
            );
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = vs.getOrCreateInstance(this);
                "toggle" === t && e[t]();
            });
        }
    }
    is.on(document, "click.bs.button.data-api", _s, (t) => {
        t.preventDefault();
        const e = t.target.closest(_s);
        vs.getOrCreateInstance(e).toggle();
    }),
        Ne(vs);
    const bs = ".bs.swipe",
        ks = `touchstart${bs}`,
        ys = `touchmove${bs}`,
        As = `touchend${bs}`,
        ws = `pointerdown${bs}`,
        Es = `pointerup${bs}`,
        Cs = { endCallback: null, leftCallback: null, rightCallback: null },
        xs = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)",
        };
    class Ss extends ls {
        constructor(t, e) {
            super(),
                (this._element = t),
                t &&
                    Ss.isSupported() &&
                    ((this._config = this._getConfig(e)),
                    (this._deltaX = 0),
                    (this._supportPointerEvents = Boolean(window.PointerEvent)),
                    this._initEvents());
        }
        static get Default() {
            return Cs;
        }
        static get DefaultType() {
            return xs;
        }
        static get NAME() {
            return "swipe";
        }
        dispose() {
            is.off(this._element, bs);
        }
        _start(t) {
            this._supportPointerEvents
                ? this._eventIsPointerPenTouch(t) && (this._deltaX = t.clientX)
                : (this._deltaX = t.touches[0].clientX);
        }
        _end(t) {
            this._eventIsPointerPenTouch(t) &&
                (this._deltaX = t.clientX - this._deltaX),
                this._handleSwipe(),
                je(this._config.endCallback);
        }
        _move(t) {
            this._deltaX =
                t.touches && t.touches.length > 1
                    ? 0
                    : t.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
            const t = Math.abs(this._deltaX);
            if (t <= 40) return;
            const e = t / this._deltaX;
            (this._deltaX = 0),
                e &&
                    je(
                        e > 0
                            ? this._config.rightCallback
                            : this._config.leftCallback
                    );
        }
        _initEvents() {
            this._supportPointerEvents
                ? (is.on(this._element, ws, (t) => this._start(t)),
                  is.on(this._element, Es, (t) => this._end(t)),
                  this._element.classList.add("pointer-event"))
                : (is.on(this._element, ks, (t) => this._start(t)),
                  is.on(this._element, ys, (t) => this._move(t)),
                  is.on(this._element, As, (t) => this._end(t)));
        }
        _eventIsPointerPenTouch(t) {
            return (
                this._supportPointerEvents &&
                ("pen" === t.pointerType || "touch" === t.pointerType)
            );
        }
        static isSupported() {
            return (
                "ontouchstart" in document.documentElement ||
                navigator.maxTouchPoints > 0
            );
        }
    }
    const Fs = ".bs.carousel",
        Ts = ".data-api",
        Ds = "next",
        Os = "prev",
        Is = "left",
        Bs = "right",
        Ms = `slide${Fs}`,
        Ps = `slid${Fs}`,
        Ls = `keydown${Fs}`,
        Vs = `mouseenter${Fs}`,
        Ns = `mouseleave${Fs}`,
        js = `dragstart${Fs}`,
        $s = `load${Fs}${Ts}`,
        Rs = `click${Fs}${Ts}`,
        zs = "carousel",
        Hs = "active",
        qs = ".active",
        Ws = ".carousel-item",
        Us = qs + Ws,
        Ys = { ArrowLeft: Bs, ArrowRight: Is },
        Ks = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0,
        },
        Xs = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean",
        };
    class Qs extends us {
        constructor(t, e) {
            super(t, e),
                (this._interval = null),
                (this._activeElement = null),
                (this._isSliding = !1),
                (this.touchTimeout = null),
                (this._swipeHelper = null),
                (this._indicatorsElement = cs.findOne(
                    ".carousel-indicators",
                    this._element
                )),
                this._addEventListeners(),
                this._config.ride === zs && this.cycle();
        }
        static get Default() {
            return Ks;
        }
        static get DefaultType() {
            return Xs;
        }
        static get NAME() {
            return "carousel";
        }
        next() {
            this._slide(Ds);
        }
        nextWhenVisible() {
            !document.hidden && De(this._element) && this.next();
        }
        prev() {
            this._slide(Os);
        }
        pause() {
            this._isSliding && Se(this._element), this._clearInterval();
        }
        cycle() {
            this._clearInterval(),
                this._updateInterval(),
                (this._interval = setInterval(
                    () => this.nextWhenVisible(),
                    this._config.interval
                ));
        }
        _maybeEnableCycle() {
            this._config.ride &&
                (this._isSliding
                    ? is.one(this._element, Ps, () => this.cycle())
                    : this.cycle());
        }
        to(t) {
            const e = this._getItems();
            if (t > e.length - 1 || t < 0) return;
            if (this._isSliding)
                return void is.one(this._element, Ps, () => this.to(t));
            const s = this._getItemIndex(this._getActive());
            if (s === t) return;
            const i = t > s ? Ds : Os;
            this._slide(i, e[t]);
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(t) {
            return (t.defaultInterval = t.interval), t;
        }
        _addEventListeners() {
            this._config.keyboard &&
                is.on(this._element, Ls, (t) => this._keydown(t)),
                "hover" === this._config.pause &&
                    (is.on(this._element, Vs, () => this.pause()),
                    is.on(this._element, Ns, () => this._maybeEnableCycle())),
                this._config.touch &&
                    Ss.isSupported() &&
                    this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
            for (const t of cs.find(".carousel-item img", this._element))
                is.on(t, js, (t) => t.preventDefault());
            const t = {
                leftCallback: () => this._slide(this._directionToOrder(Is)),
                rightCallback: () => this._slide(this._directionToOrder(Bs)),
                endCallback: () => {
                    "hover" === this._config.pause &&
                        (this.pause(),
                        this.touchTimeout && clearTimeout(this.touchTimeout),
                        (this.touchTimeout = setTimeout(
                            () => this._maybeEnableCycle(),
                            500 + this._config.interval
                        )));
                },
            };
            this._swipeHelper = new Ss(this._element, t);
        }
        _keydown(t) {
            if (/input|textarea/i.test(t.target.tagName)) return;
            const e = Ys[t.key];
            e && (t.preventDefault(), this._slide(this._directionToOrder(e)));
        }
        _getItemIndex(t) {
            return this._getItems().indexOf(t);
        }
        _setActiveIndicatorElement(t) {
            if (!this._indicatorsElement) return;
            const e = cs.findOne(qs, this._indicatorsElement);
            e.classList.remove(Hs), e.removeAttribute("aria-current");
            const s = cs.findOne(
                `[data-bs-slide-to="${t}"]`,
                this._indicatorsElement
            );
            s && (s.classList.add(Hs), s.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
            const t = this._activeElement || this._getActive();
            if (!t) return;
            const e = Number.parseInt(t.getAttribute("data-bs-interval"), 10);
            this._config.interval = e || this._config.defaultInterval;
        }
        _slide(t, e = null) {
            if (this._isSliding) return;
            const s = this._getActive(),
                i = t === Ds,
                n = e || Re(this._getItems(), s, i, this._config.wrap);
            if (n === s) return;
            const r = this._getItemIndex(n),
                o = (e) =>
                    is.trigger(this._element, e, {
                        relatedTarget: n,
                        direction: this._orderToDirection(t),
                        from: this._getItemIndex(s),
                        to: r,
                    });
            if (o(Ms).defaultPrevented) return;
            if (!s || !n) return;
            const a = Boolean(this._interval);
            this.pause(),
                (this._isSliding = !0),
                this._setActiveIndicatorElement(r),
                (this._activeElement = n);
            const l = i ? "carousel-item-start" : "carousel-item-end",
                u = i ? "carousel-item-next" : "carousel-item-prev";
            n.classList.add(u), Me(n), s.classList.add(l), n.classList.add(l);
            this._queueCallback(
                () => {
                    n.classList.remove(l, u),
                        n.classList.add(Hs),
                        s.classList.remove(Hs, u, l),
                        (this._isSliding = !1),
                        o(Ps);
                },
                s,
                this._isAnimated()
            ),
                a && this.cycle();
        }
        _isAnimated() {
            return this._element.classList.contains("slide");
        }
        _getActive() {
            return cs.findOne(Us, this._element);
        }
        _getItems() {
            return cs.find(Ws, this._element);
        }
        _clearInterval() {
            this._interval &&
                (clearInterval(this._interval), (this._interval = null));
        }
        _directionToOrder(t) {
            return Ve() ? (t === Is ? Os : Ds) : t === Is ? Ds : Os;
        }
        _orderToDirection(t) {
            return Ve() ? (t === Os ? Is : Bs) : t === Os ? Bs : Is;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Qs.getOrCreateInstance(this, t);
                if ("number" != typeof t) {
                    if ("string" == typeof t) {
                        if (
                            void 0 === e[t] ||
                            t.startsWith("_") ||
                            "constructor" === t
                        )
                            throw new TypeError(`No method named "${t}"`);
                        e[t]();
                    }
                } else e.to(t);
            });
        }
    }
    is.on(document, Rs, "[data-bs-slide], [data-bs-slide-to]", function (t) {
        const e = cs.getElementFromSelector(this);
        if (!e || !e.classList.contains(zs)) return;
        t.preventDefault();
        const s = Qs.getOrCreateInstance(e),
            i = this.getAttribute("data-bs-slide-to");
        return i
            ? (s.to(i), void s._maybeEnableCycle())
            : "next" === as.getDataAttribute(this, "slide")
            ? (s.next(), void s._maybeEnableCycle())
            : (s.prev(), void s._maybeEnableCycle());
    }),
        is.on(window, $s, () => {
            const t = cs.find('[data-bs-ride="carousel"]');
            for (const e of t) Qs.getOrCreateInstance(e);
        }),
        Ne(Qs);
    const Zs = ".bs.collapse",
        Gs = `show${Zs}`,
        Js = `shown${Zs}`,
        ti = `hide${Zs}`,
        ei = `hidden${Zs}`,
        si = `click${Zs}.data-api`,
        ii = "show",
        ni = "collapse",
        ri = "collapsing",
        oi = `:scope .${ni} .${ni}`,
        ai = '[data-bs-toggle="collapse"]',
        li = { parent: null, toggle: !0 },
        ui = { parent: "(null|element)", toggle: "boolean" };
    class hi extends us {
        constructor(t, e) {
            super(t, e),
                (this._isTransitioning = !1),
                (this._triggerArray = []);
            const s = cs.find(ai);
            for (const t of s) {
                const e = cs.getSelectorFromElement(t),
                    s = cs.find(e).filter((t) => t === this._element);
                null !== e && s.length && this._triggerArray.push(t);
            }
            this._initializeChildren(),
                this._config.parent ||
                    this._addAriaAndCollapsedClass(
                        this._triggerArray,
                        this._isShown()
                    ),
                this._config.toggle && this.toggle();
        }
        static get Default() {
            return li;
        }
        static get DefaultType() {
            return ui;
        }
        static get NAME() {
            return "collapse";
        }
        toggle() {
            this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let t = [];
            if (
                (this._config.parent &&
                    (t = this._getFirstLevelChildren(
                        ".collapse.show, .collapse.collapsing"
                    )
                        .filter((t) => t !== this._element)
                        .map((t) => hi.getOrCreateInstance(t, { toggle: !1 }))),
                t.length && t[0]._isTransitioning)
            )
                return;
            if (is.trigger(this._element, Gs).defaultPrevented) return;
            for (const e of t) e.hide();
            const e = this._getDimension();
            this._element.classList.remove(ni),
                this._element.classList.add(ri),
                (this._element.style[e] = 0),
                this._addAriaAndCollapsedClass(this._triggerArray, !0),
                (this._isTransitioning = !0);
            const s = `scroll${e[0].toUpperCase() + e.slice(1)}`;
            this._queueCallback(
                () => {
                    (this._isTransitioning = !1),
                        this._element.classList.remove(ri),
                        this._element.classList.add(ni, ii),
                        (this._element.style[e] = ""),
                        is.trigger(this._element, Js);
                },
                this._element,
                !0
            ),
                (this._element.style[e] = `${this._element[s]}px`);
        }
        hide() {
            if (this._isTransitioning || !this._isShown()) return;
            if (is.trigger(this._element, ti).defaultPrevented) return;
            const t = this._getDimension();
            (this._element.style[t] = `${
                this._element.getBoundingClientRect()[t]
            }px`),
                Me(this._element),
                this._element.classList.add(ri),
                this._element.classList.remove(ni, ii);
            for (const t of this._triggerArray) {
                const e = cs.getElementFromSelector(t);
                e &&
                    !this._isShown(e) &&
                    this._addAriaAndCollapsedClass([t], !1);
            }
            this._isTransitioning = !0;
            (this._element.style[t] = ""),
                this._queueCallback(
                    () => {
                        (this._isTransitioning = !1),
                            this._element.classList.remove(ri),
                            this._element.classList.add(ni),
                            is.trigger(this._element, ei);
                    },
                    this._element,
                    !0
                );
        }
        _isShown(t = this._element) {
            return t.classList.contains(ii);
        }
        _configAfterMerge(t) {
            return (t.toggle = Boolean(t.toggle)), (t.parent = Te(t.parent)), t;
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal")
                ? "width"
                : "height";
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            const t = this._getFirstLevelChildren(ai);
            for (const e of t) {
                const t = cs.getElementFromSelector(e);
                t && this._addAriaAndCollapsedClass([e], this._isShown(t));
            }
        }
        _getFirstLevelChildren(t) {
            const e = cs.find(oi, this._config.parent);
            return cs
                .find(t, this._config.parent)
                .filter((t) => !e.includes(t));
        }
        _addAriaAndCollapsedClass(t, e) {
            if (t.length)
                for (const s of t)
                    s.classList.toggle("collapsed", !e),
                        s.setAttribute("aria-expanded", e);
        }
        static jQueryInterface(t) {
            const e = {};
            return (
                "string" == typeof t && /show|hide/.test(t) && (e.toggle = !1),
                this.each(function () {
                    const s = hi.getOrCreateInstance(this, e);
                    if ("string" == typeof t) {
                        if (void 0 === s[t])
                            throw new TypeError(`No method named "${t}"`);
                        s[t]();
                    }
                })
            );
        }
    }
    is.on(document, si, ai, function (t) {
        ("A" === t.target.tagName ||
            (t.delegateTarget && "A" === t.delegateTarget.tagName)) &&
            t.preventDefault();
        for (const t of cs.getMultipleElementsFromSelector(this))
            hi.getOrCreateInstance(t, { toggle: !1 }).toggle();
    }),
        Ne(hi);
    const ci = "dropdown",
        di = ".bs.dropdown",
        pi = ".data-api",
        fi = "ArrowUp",
        gi = "ArrowDown",
        mi = `hide${di}`,
        _i = `hidden${di}`,
        vi = `show${di}`,
        bi = `shown${di}`,
        ki = `click${di}${pi}`,
        yi = `keydown${di}${pi}`,
        Ai = `keyup${di}${pi}`,
        wi = "show",
        Ei = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        Ci = `${Ei}.${wi}`,
        xi = ".dropdown-menu",
        Si = Ve() ? "top-end" : "top-start",
        Fi = Ve() ? "top-start" : "top-end",
        Ti = Ve() ? "bottom-end" : "bottom-start",
        Di = Ve() ? "bottom-start" : "bottom-end",
        Oi = Ve() ? "left-start" : "right-start",
        Ii = Ve() ? "right-start" : "left-start",
        Bi = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle",
        },
        Mi = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)",
        };
    class Pi extends us {
        constructor(t, e) {
            super(t, e),
                (this._popper = null),
                (this._parent = this._element.parentNode),
                (this._menu =
                    cs.next(this._element, xi)[0] ||
                    cs.prev(this._element, xi)[0] ||
                    cs.findOne(xi, this._parent)),
                (this._inNavbar = this._detectNavbar());
        }
        static get Default() {
            return Bi;
        }
        static get DefaultType() {
            return Mi;
        }
        static get NAME() {
            return ci;
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show();
        }
        show() {
            if (Oe(this._element) || this._isShown()) return;
            const t = { relatedTarget: this._element };
            if (!is.trigger(this._element, vi, t).defaultPrevented) {
                if (
                    (this._createPopper(),
                    "ontouchstart" in document.documentElement &&
                        !this._parent.closest(".navbar-nav"))
                )
                    for (const t of [].concat(...document.body.children))
                        is.on(t, "mouseover", Be);
                this._element.focus(),
                    this._element.setAttribute("aria-expanded", !0),
                    this._menu.classList.add(wi),
                    this._element.classList.add(wi),
                    is.trigger(this._element, bi, t);
            }
        }
        hide() {
            if (Oe(this._element) || !this._isShown()) return;
            const t = { relatedTarget: this._element };
            this._completeHide(t);
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
            (this._inNavbar = this._detectNavbar()),
                this._popper && this._popper.update();
        }
        _completeHide(t) {
            if (!is.trigger(this._element, mi, t).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (const t of [].concat(...document.body.children))
                        is.off(t, "mouseover", Be);
                this._popper && this._popper.destroy(),
                    this._menu.classList.remove(wi),
                    this._element.classList.remove(wi),
                    this._element.setAttribute("aria-expanded", "false"),
                    as.removeDataAttribute(this._menu, "popper"),
                    is.trigger(this._element, _i, t);
            }
        }
        _getConfig(t) {
            if (
                "object" == typeof (t = super._getConfig(t)).reference &&
                !Fe(t.reference) &&
                "function" != typeof t.reference.getBoundingClientRect
            )
                throw new TypeError(
                    `${ci.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`
                );
            return t;
        }
        _createPopper() {
            if (void 0 === Ae)
                throw new TypeError(
                    "Bootstrap's dropdowns require Popper (https://popper.js.org)"
                );
            let t = this._element;
            "parent" === this._config.reference
                ? (t = this._parent)
                : Fe(this._config.reference)
                ? (t = Te(this._config.reference))
                : "object" == typeof this._config.reference &&
                  (t = this._config.reference);
            const e = this._getPopperConfig();
            this._popper = ye(t, this._menu, e);
        }
        _isShown() {
            return this._menu.classList.contains(wi);
        }
        _getPlacement() {
            const t = this._parent;
            if (t.classList.contains("dropend")) return Oi;
            if (t.classList.contains("dropstart")) return Ii;
            if (t.classList.contains("dropup-center")) return "top";
            if (t.classList.contains("dropdown-center")) return "bottom";
            const e =
                "end" ===
                getComputedStyle(this._menu)
                    .getPropertyValue("--bs-position")
                    .trim();
            return t.classList.contains("dropup") ? (e ? Fi : Si) : e ? Di : Ti;
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar");
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _getPopperConfig() {
            const t = {
                placement: this._getPlacement(),
                modifiers: [
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                ],
            };
            return (
                (this._inNavbar || "static" === this._config.display) &&
                    (as.setDataAttribute(this._menu, "popper", "static"),
                    (t.modifiers = [{ name: "applyStyles", enabled: !1 }])),
                { ...t, ...je(this._config.popperConfig, [t]) }
            );
        }
        _selectMenuItem({ key: t, target: e }) {
            const s = cs
                .find(
                    ".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",
                    this._menu
                )
                .filter((t) => De(t));
            s.length && Re(s, e, t === gi, !s.includes(e)).focus();
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Pi.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
        static clearMenus(t) {
            if (2 === t.button || ("keyup" === t.type && "Tab" !== t.key))
                return;
            const e = cs.find(Ci);
            for (const s of e) {
                const e = Pi.getInstance(s);
                if (!e || !1 === e._config.autoClose) continue;
                const i = t.composedPath(),
                    n = i.includes(e._menu);
                if (
                    i.includes(e._element) ||
                    ("inside" === e._config.autoClose && !n) ||
                    ("outside" === e._config.autoClose && n)
                )
                    continue;
                if (
                    e._menu.contains(t.target) &&
                    (("keyup" === t.type && "Tab" === t.key) ||
                        /input|select|option|textarea|form/i.test(
                            t.target.tagName
                        ))
                )
                    continue;
                const r = { relatedTarget: e._element };
                "click" === t.type && (r.clickEvent = t), e._completeHide(r);
            }
        }
        static dataApiKeydownHandler(t) {
            const e = /input|textarea/i.test(t.target.tagName),
                s = "Escape" === t.key,
                i = [fi, gi].includes(t.key);
            if (!i && !s) return;
            if (e && !s) return;
            t.preventDefault();
            const n = this.matches(Ei)
                    ? this
                    : cs.prev(this, Ei)[0] ||
                      cs.next(this, Ei)[0] ||
                      cs.findOne(Ei, t.delegateTarget.parentNode),
                r = Pi.getOrCreateInstance(n);
            if (i)
                return t.stopPropagation(), r.show(), void r._selectMenuItem(t);
            r._isShown() && (t.stopPropagation(), r.hide(), n.focus());
        }
    }
    is.on(document, yi, Ei, Pi.dataApiKeydownHandler),
        is.on(document, yi, xi, Pi.dataApiKeydownHandler),
        is.on(document, ki, Pi.clearMenus),
        is.on(document, Ai, Pi.clearMenus),
        is.on(document, ki, Ei, function (t) {
            t.preventDefault(), Pi.getOrCreateInstance(this).toggle();
        }),
        Ne(Pi);
    const Li = "backdrop",
        Vi = "show",
        Ni = `mousedown.bs.${Li}`,
        ji = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body",
        },
        $i = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)",
        };
    class Ri extends ls {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isAppended = !1),
                (this._element = null);
        }
        static get Default() {
            return ji;
        }
        static get DefaultType() {
            return $i;
        }
        static get NAME() {
            return Li;
        }
        show(t) {
            if (!this._config.isVisible) return void je(t);
            this._append();
            const e = this._getElement();
            this._config.isAnimated && Me(e),
                e.classList.add(Vi),
                this._emulateAnimation(() => {
                    je(t);
                });
        }
        hide(t) {
            this._config.isVisible
                ? (this._getElement().classList.remove(Vi),
                  this._emulateAnimation(() => {
                      this.dispose(), je(t);
                  }))
                : je(t);
        }
        dispose() {
            this._isAppended &&
                (is.off(this._element, Ni),
                this._element.remove(),
                (this._isAppended = !1));
        }
        _getElement() {
            if (!this._element) {
                const t = document.createElement("div");
                (t.className = this._config.className),
                    this._config.isAnimated && t.classList.add("fade"),
                    (this._element = t);
            }
            return this._element;
        }
        _configAfterMerge(t) {
            return (t.rootElement = Te(t.rootElement)), t;
        }
        _append() {
            if (this._isAppended) return;
            const t = this._getElement();
            this._config.rootElement.append(t),
                is.on(t, Ni, () => {
                    je(this._config.clickCallback);
                }),
                (this._isAppended = !0);
        }
        _emulateAnimation(t) {
            $e(t, this._getElement(), this._config.isAnimated);
        }
    }
    const zi = ".bs.focustrap",
        Hi = `focusin${zi}`,
        qi = `keydown.tab${zi}`,
        Wi = "backward",
        Ui = { autofocus: !0, trapElement: null },
        Yi = { autofocus: "boolean", trapElement: "element" };
    class Ki extends ls {
        constructor(t) {
            super(),
                (this._config = this._getConfig(t)),
                (this._isActive = !1),
                (this._lastTabNavDirection = null);
        }
        static get Default() {
            return Ui;
        }
        static get DefaultType() {
            return Yi;
        }
        static get NAME() {
            return "focustrap";
        }
        activate() {
            this._isActive ||
                (this._config.autofocus && this._config.trapElement.focus(),
                is.off(document, zi),
                is.on(document, Hi, (t) => this._handleFocusin(t)),
                is.on(document, qi, (t) => this._handleKeydown(t)),
                (this._isActive = !0));
        }
        deactivate() {
            this._isActive && ((this._isActive = !1), is.off(document, zi));
        }
        _handleFocusin(t) {
            const { trapElement: e } = this._config;
            if (t.target === document || t.target === e || e.contains(t.target))
                return;
            const s = cs.focusableChildren(e);
            0 === s.length
                ? e.focus()
                : this._lastTabNavDirection === Wi
                ? s[s.length - 1].focus()
                : s[0].focus();
        }
        _handleKeydown(t) {
            "Tab" === t.key &&
                (this._lastTabNavDirection = t.shiftKey ? Wi : "forward");
        }
    }
    const Xi = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        Qi = ".sticky-top",
        Zi = "padding-right",
        Gi = "margin-right";
    class Ji {
        constructor() {
            this._element = document.body;
        }
        getWidth() {
            const t = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - t);
        }
        hide() {
            const t = this.getWidth();
            this._disableOverFlow(),
                this._setElementAttributes(this._element, Zi, (e) => e + t),
                this._setElementAttributes(Xi, Zi, (e) => e + t),
                this._setElementAttributes(Qi, Gi, (e) => e - t);
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"),
                this._resetElementAttributes(this._element, Zi),
                this._resetElementAttributes(Xi, Zi),
                this._resetElementAttributes(Qi, Gi);
        }
        isOverflowing() {
            return this.getWidth() > 0;
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"),
                (this._element.style.overflow = "hidden");
        }
        _setElementAttributes(t, e, s) {
            const i = this.getWidth();
            this._applyManipulationCallback(t, (t) => {
                if (
                    t !== this._element &&
                    window.innerWidth > t.clientWidth + i
                )
                    return;
                this._saveInitialAttribute(t, e);
                const n = window.getComputedStyle(t).getPropertyValue(e);
                t.style.setProperty(e, `${s(Number.parseFloat(n))}px`);
            });
        }
        _saveInitialAttribute(t, e) {
            const s = t.style.getPropertyValue(e);
            s && as.setDataAttribute(t, e, s);
        }
        _resetElementAttributes(t, e) {
            this._applyManipulationCallback(t, (t) => {
                const s = as.getDataAttribute(t, e);
                null !== s
                    ? (as.removeDataAttribute(t, e), t.style.setProperty(e, s))
                    : t.style.removeProperty(e);
            });
        }
        _applyManipulationCallback(t, e) {
            if (Fe(t)) e(t);
            else for (const s of cs.find(t, this._element)) e(s);
        }
    }
    const tn = ".bs.modal",
        en = `hide${tn}`,
        sn = `hidePrevented${tn}`,
        nn = `hidden${tn}`,
        rn = `show${tn}`,
        on = `shown${tn}`,
        an = `resize${tn}`,
        ln = `click.dismiss${tn}`,
        un = `mousedown.dismiss${tn}`,
        hn = `keydown.dismiss${tn}`,
        cn = `click${tn}.data-api`,
        dn = "modal-open",
        pn = "show",
        fn = "modal-static",
        gn = { backdrop: !0, focus: !0, keyboard: !0 },
        mn = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean",
        };
    class _n extends us {
        constructor(t, e) {
            super(t, e),
                (this._dialog = cs.findOne(".modal-dialog", this._element)),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                (this._isShown = !1),
                (this._isTransitioning = !1),
                (this._scrollBar = new Ji()),
                this._addEventListeners();
        }
        static get Default() {
            return gn;
        }
        static get DefaultType() {
            return mn;
        }
        static get NAME() {
            return "modal";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            if (this._isShown || this._isTransitioning) return;
            is.trigger(this._element, rn, { relatedTarget: t })
                .defaultPrevented ||
                ((this._isShown = !0),
                (this._isTransitioning = !0),
                this._scrollBar.hide(),
                document.body.classList.add(dn),
                this._adjustDialog(),
                this._backdrop.show(() => this._showElement(t)));
        }
        hide() {
            if (!this._isShown || this._isTransitioning) return;
            is.trigger(this._element, en).defaultPrevented ||
                ((this._isShown = !1),
                (this._isTransitioning = !0),
                this._focustrap.deactivate(),
                this._element.classList.remove(pn),
                this._queueCallback(
                    () => this._hideModal(),
                    this._element,
                    this._isAnimated()
                ));
        }
        dispose() {
            is.off(window, tn),
                is.off(this._dialog, tn),
                this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        handleUpdate() {
            this._adjustDialog();
        }
        _initializeBackDrop() {
            return new Ri({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated(),
            });
        }
        _initializeFocusTrap() {
            return new Ki({ trapElement: this._element });
        }
        _showElement(t) {
            document.body.contains(this._element) ||
                document.body.append(this._element),
                (this._element.style.display = "block"),
                this._element.removeAttribute("aria-hidden"),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                (this._element.scrollTop = 0);
            const e = cs.findOne(".modal-body", this._dialog);
            e && (e.scrollTop = 0),
                Me(this._element),
                this._element.classList.add(pn);
            this._queueCallback(
                () => {
                    this._config.focus && this._focustrap.activate(),
                        (this._isTransitioning = !1),
                        is.trigger(this._element, on, { relatedTarget: t });
                },
                this._dialog,
                this._isAnimated()
            );
        }
        _addEventListeners() {
            is.on(this._element, hn, (t) => {
                "Escape" === t.key &&
                    (this._config.keyboard
                        ? this.hide()
                        : this._triggerBackdropTransition());
            }),
                is.on(window, an, () => {
                    this._isShown &&
                        !this._isTransitioning &&
                        this._adjustDialog();
                }),
                is.on(this._element, un, (t) => {
                    is.one(this._element, ln, (e) => {
                        this._element === t.target &&
                            this._element === e.target &&
                            ("static" !== this._config.backdrop
                                ? this._config.backdrop && this.hide()
                                : this._triggerBackdropTransition());
                    });
                });
        }
        _hideModal() {
            (this._element.style.display = "none"),
                this._element.setAttribute("aria-hidden", !0),
                this._element.removeAttribute("aria-modal"),
                this._element.removeAttribute("role"),
                (this._isTransitioning = !1),
                this._backdrop.hide(() => {
                    document.body.classList.remove(dn),
                        this._resetAdjustments(),
                        this._scrollBar.reset(),
                        is.trigger(this._element, nn);
                });
        }
        _isAnimated() {
            return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
            if (is.trigger(this._element, sn).defaultPrevented) return;
            const t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                e = this._element.style.overflowY;
            "hidden" === e ||
                this._element.classList.contains(fn) ||
                (t || (this._element.style.overflowY = "hidden"),
                this._element.classList.add(fn),
                this._queueCallback(() => {
                    this._element.classList.remove(fn),
                        this._queueCallback(() => {
                            this._element.style.overflowY = e;
                        }, this._dialog);
                }, this._dialog),
                this._element.focus());
        }
        _adjustDialog() {
            const t =
                    this._element.scrollHeight >
                    document.documentElement.clientHeight,
                e = this._scrollBar.getWidth(),
                s = e > 0;
            if (s && !t) {
                const t = Ve() ? "paddingLeft" : "paddingRight";
                this._element.style[t] = `${e}px`;
            }
            if (!s && t) {
                const t = Ve() ? "paddingRight" : "paddingLeft";
                this._element.style[t] = `${e}px`;
            }
        }
        _resetAdjustments() {
            (this._element.style.paddingLeft = ""),
                (this._element.style.paddingRight = "");
        }
        static jQueryInterface(t, e) {
            return this.each(function () {
                const s = _n.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === s[t])
                        throw new TypeError(`No method named "${t}"`);
                    s[t](e);
                }
            });
        }
    }
    is.on(document, cn, '[data-bs-toggle="modal"]', function (t) {
        const e = cs.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            is.one(e, rn, (t) => {
                t.defaultPrevented ||
                    is.one(e, nn, () => {
                        De(this) && this.focus();
                    });
            });
        const s = cs.findOne(".modal.show");
        s && _n.getInstance(s).hide();
        _n.getOrCreateInstance(e).toggle(this);
    }),
        ds(_n),
        Ne(_n);
    const vn = ".bs.offcanvas",
        bn = ".data-api",
        kn = `load${vn}${bn}`,
        yn = "show",
        An = "showing",
        wn = "hiding",
        En = ".offcanvas.show",
        Cn = `show${vn}`,
        xn = `shown${vn}`,
        Sn = `hide${vn}`,
        Fn = `hidePrevented${vn}`,
        Tn = `hidden${vn}`,
        Dn = `resize${vn}`,
        On = `click${vn}${bn}`,
        In = `keydown.dismiss${vn}`,
        Bn = { backdrop: !0, keyboard: !0, scroll: !1 },
        Mn = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean",
        };
    class Pn extends us {
        constructor(t, e) {
            super(t, e),
                (this._isShown = !1),
                (this._backdrop = this._initializeBackDrop()),
                (this._focustrap = this._initializeFocusTrap()),
                this._addEventListeners();
        }
        static get Default() {
            return Bn;
        }
        static get DefaultType() {
            return Mn;
        }
        static get NAME() {
            return "offcanvas";
        }
        toggle(t) {
            return this._isShown ? this.hide() : this.show(t);
        }
        show(t) {
            if (this._isShown) return;
            if (
                is.trigger(this._element, Cn, { relatedTarget: t })
                    .defaultPrevented
            )
                return;
            (this._isShown = !0),
                this._backdrop.show(),
                this._config.scroll || new Ji().hide(),
                this._element.setAttribute("aria-modal", !0),
                this._element.setAttribute("role", "dialog"),
                this._element.classList.add(An);
            this._queueCallback(
                () => {
                    (this._config.scroll && !this._config.backdrop) ||
                        this._focustrap.activate(),
                        this._element.classList.add(yn),
                        this._element.classList.remove(An),
                        is.trigger(this._element, xn, { relatedTarget: t });
                },
                this._element,
                !0
            );
        }
        hide() {
            if (!this._isShown) return;
            if (is.trigger(this._element, Sn).defaultPrevented) return;
            this._focustrap.deactivate(),
                this._element.blur(),
                (this._isShown = !1),
                this._element.classList.add(wn),
                this._backdrop.hide();
            this._queueCallback(
                () => {
                    this._element.classList.remove(yn, wn),
                        this._element.removeAttribute("aria-modal"),
                        this._element.removeAttribute("role"),
                        this._config.scroll || new Ji().reset(),
                        is.trigger(this._element, Tn);
                },
                this._element,
                !0
            );
        }
        dispose() {
            this._backdrop.dispose(),
                this._focustrap.deactivate(),
                super.dispose();
        }
        _initializeBackDrop() {
            const t = Boolean(this._config.backdrop);
            return new Ri({
                className: "offcanvas-backdrop",
                isVisible: t,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: t
                    ? () => {
                          "static" !== this._config.backdrop
                              ? this.hide()
                              : is.trigger(this._element, Fn);
                      }
                    : null,
            });
        }
        _initializeFocusTrap() {
            return new Ki({ trapElement: this._element });
        }
        _addEventListeners() {
            is.on(this._element, In, (t) => {
                "Escape" === t.key &&
                    (this._config.keyboard
                        ? this.hide()
                        : is.trigger(this._element, Fn));
            });
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Pn.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    is.on(document, On, '[data-bs-toggle="offcanvas"]', function (t) {
        const e = cs.getElementFromSelector(this);
        if (
            (["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            Oe(this))
        )
            return;
        is.one(e, Tn, () => {
            De(this) && this.focus();
        });
        const s = cs.findOne(En);
        s && s !== e && Pn.getInstance(s).hide();
        Pn.getOrCreateInstance(e).toggle(this);
    }),
        is.on(window, kn, () => {
            for (const t of cs.find(En)) Pn.getOrCreateInstance(t).show();
        }),
        is.on(window, Dn, () => {
            for (const t of cs.find(
                "[aria-modal][class*=show][class*=offcanvas-]"
            ))
                "fixed" !== getComputedStyle(t).position &&
                    Pn.getOrCreateInstance(t).hide();
        }),
        ds(Pn),
        Ne(Pn);
    const Ln = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: [],
        },
        Vn = new Set([
            "background",
            "cite",
            "href",
            "itemtype",
            "longdesc",
            "poster",
            "src",
            "xlink:href",
        ]),
        Nn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i,
        jn = (t, e) => {
            const s = t.nodeName.toLowerCase();
            return e.includes(s)
                ? !Vn.has(s) || Boolean(Nn.test(t.nodeValue))
                : e.filter((t) => t instanceof RegExp).some((t) => t.test(s));
        };
    const $n = {
            allowList: Ln,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>",
        },
        Rn = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string",
        },
        zn = {
            entry: "(string|element|function|null)",
            selector: "(string|element)",
        };
    class Hn extends ls {
        constructor(t) {
            super(), (this._config = this._getConfig(t));
        }
        static get Default() {
            return $n;
        }
        static get DefaultType() {
            return Rn;
        }
        static get NAME() {
            return "TemplateFactory";
        }
        getContent() {
            return Object.values(this._config.content)
                .map((t) => this._resolvePossibleFunction(t))
                .filter(Boolean);
        }
        hasContent() {
            return this.getContent().length > 0;
        }
        changeContent(t) {
            return (
                this._checkContent(t),
                (this._config.content = { ...this._config.content, ...t }),
                this
            );
        }
        toHtml() {
            const t = document.createElement("div");
            t.innerHTML = this._maybeSanitize(this._config.template);
            for (const [e, s] of Object.entries(this._config.content))
                this._setContent(t, s, e);
            const e = t.children[0],
                s = this._resolvePossibleFunction(this._config.extraClass);
            return s && e.classList.add(...s.split(" ")), e;
        }
        _typeCheckConfig(t) {
            super._typeCheckConfig(t), this._checkContent(t.content);
        }
        _checkContent(t) {
            for (const [e, s] of Object.entries(t))
                super._typeCheckConfig({ selector: e, entry: s }, zn);
        }
        _setContent(t, e, s) {
            const i = cs.findOne(s, t);
            i &&
                ((e = this._resolvePossibleFunction(e))
                    ? Fe(e)
                        ? this._putElementInTemplate(Te(e), i)
                        : this._config.html
                        ? (i.innerHTML = this._maybeSanitize(e))
                        : (i.textContent = e)
                    : i.remove());
        }
        _maybeSanitize(t) {
            return this._config.sanitize
                ? (function (t, e, s) {
                      if (!t.length) return t;
                      if (s && "function" == typeof s) return s(t);
                      const i = new window.DOMParser().parseFromString(
                              t,
                              "text/html"
                          ),
                          n = [].concat(...i.body.querySelectorAll("*"));
                      for (const t of n) {
                          const s = t.nodeName.toLowerCase();
                          if (!Object.keys(e).includes(s)) {
                              t.remove();
                              continue;
                          }
                          const i = [].concat(...t.attributes),
                              n = [].concat(e["*"] || [], e[s] || []);
                          for (const e of i)
                              jn(e, n) || t.removeAttribute(e.nodeName);
                      }
                      return i.body.innerHTML;
                  })(t, this._config.allowList, this._config.sanitizeFn)
                : t;
        }
        _resolvePossibleFunction(t) {
            return je(t, [this]);
        }
        _putElementInTemplate(t, e) {
            if (this._config.html) return (e.innerHTML = ""), void e.append(t);
            e.textContent = t.textContent;
        }
    }
    const qn = new Set(["sanitize", "allowList", "sanitizeFn"]),
        Wn = "fade",
        Un = "show",
        Yn = ".modal",
        Kn = "hide.bs.modal",
        Xn = "hover",
        Qn = "focus",
        Zn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: Ve() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: Ve() ? "right" : "left",
        },
        Gn = {
            allowList: Ln,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 6],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template:
                '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus",
        },
        Jn = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
        };
    class tr extends us {
        constructor(t, e) {
            if (void 0 === Ae)
                throw new TypeError(
                    "Bootstrap's tooltips require Popper (https://popper.js.org)"
                );
            super(t, e),
                (this._isEnabled = !0),
                (this._timeout = 0),
                (this._isHovered = null),
                (this._activeTrigger = {}),
                (this._popper = null),
                (this._templateFactory = null),
                (this._newContent = null),
                (this.tip = null),
                this._setListeners(),
                this._config.selector || this._fixTitle();
        }
        static get Default() {
            return Gn;
        }
        static get DefaultType() {
            return Jn;
        }
        static get NAME() {
            return "tooltip";
        }
        enable() {
            this._isEnabled = !0;
        }
        disable() {
            this._isEnabled = !1;
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled;
        }
        toggle() {
            this._isEnabled &&
                ((this._activeTrigger.click = !this._activeTrigger.click),
                this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
            clearTimeout(this._timeout),
                is.off(this._element.closest(Yn), Kn, this._hideModalHandler),
                this._element.getAttribute("data-bs-original-title") &&
                    this._element.setAttribute(
                        "title",
                        this._element.getAttribute("data-bs-original-title")
                    ),
                this._disposePopper(),
                super.dispose();
        }
        show() {
            if ("none" === this._element.style.display)
                throw new Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            const t = is.trigger(
                    this._element,
                    this.constructor.eventName("show")
                ),
                e = (
                    Ie(this._element) ||
                    this._element.ownerDocument.documentElement
                ).contains(this._element);
            if (t.defaultPrevented || !e) return;
            this._disposePopper();
            const s = this._getTipElement();
            this._element.setAttribute(
                "aria-describedby",
                s.getAttribute("id")
            );
            const { container: i } = this._config;
            if (
                (this._element.ownerDocument.documentElement.contains(
                    this.tip
                ) ||
                    (i.append(s),
                    is.trigger(
                        this._element,
                        this.constructor.eventName("inserted")
                    )),
                (this._popper = this._createPopper(s)),
                s.classList.add(Un),
                "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children))
                    is.on(t, "mouseover", Be);
            this._queueCallback(
                () => {
                    is.trigger(
                        this._element,
                        this.constructor.eventName("shown")
                    ),
                        !1 === this._isHovered && this._leave(),
                        (this._isHovered = !1);
                },
                this.tip,
                this._isAnimated()
            );
        }
        hide() {
            if (!this._isShown()) return;
            if (
                is.trigger(this._element, this.constructor.eventName("hide"))
                    .defaultPrevented
            )
                return;
            if (
                (this._getTipElement().classList.remove(Un),
                "ontouchstart" in document.documentElement)
            )
                for (const t of [].concat(...document.body.children))
                    is.off(t, "mouseover", Be);
            (this._activeTrigger.click = !1),
                (this._activeTrigger[Qn] = !1),
                (this._activeTrigger[Xn] = !1),
                (this._isHovered = null);
            this._queueCallback(
                () => {
                    this._isWithActiveTrigger() ||
                        (this._isHovered || this._disposePopper(),
                        this._element.removeAttribute("aria-describedby"),
                        is.trigger(
                            this._element,
                            this.constructor.eventName("hidden")
                        ));
                },
                this.tip,
                this._isAnimated()
            );
        }
        update() {
            this._popper && this._popper.update();
        }
        _isWithContent() {
            return Boolean(this._getTitle());
        }
        _getTipElement() {
            return (
                this.tip ||
                    (this.tip = this._createTipElement(
                        this._newContent || this._getContentForTemplate()
                    )),
                this.tip
            );
        }
        _createTipElement(t) {
            const e = this._getTemplateFactory(t).toHtml();
            if (!e) return null;
            e.classList.remove(Wn, Un),
                e.classList.add(`bs-${this.constructor.NAME}-auto`);
            const s = ((t) => {
                do {
                    t += Math.floor(1e6 * Math.random());
                } while (document.getElementById(t));
                return t;
            })(this.constructor.NAME).toString();
            return (
                e.setAttribute("id", s),
                this._isAnimated() && e.classList.add(Wn),
                e
            );
        }
        setContent(t) {
            (this._newContent = t),
                this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(t) {
            return (
                this._templateFactory
                    ? this._templateFactory.changeContent(t)
                    : (this._templateFactory = new Hn({
                          ...this._config,
                          content: t,
                          extraClass: this._resolvePossibleFunction(
                              this._config.customClass
                          ),
                      })),
                this._templateFactory
            );
        }
        _getContentForTemplate() {
            return { ".tooltip-inner": this._getTitle() };
        }
        _getTitle() {
            return (
                this._resolvePossibleFunction(this._config.title) ||
                this._element.getAttribute("data-bs-original-title")
            );
        }
        _initializeOnDelegatedTarget(t) {
            return this.constructor.getOrCreateInstance(
                t.delegateTarget,
                this._getDelegateConfig()
            );
        }
        _isAnimated() {
            return (
                this._config.animation ||
                (this.tip && this.tip.classList.contains(Wn))
            );
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(Un);
        }
        _createPopper(t) {
            const e = je(this._config.placement, [this, t, this._element]),
                s = Zn[e.toUpperCase()];
            return ye(this._element, t, this._getPopperConfig(s));
        }
        _getOffset() {
            const { offset: t } = this._config;
            return "string" == typeof t
                ? t.split(",").map((t) => Number.parseInt(t, 10))
                : "function" == typeof t
                ? (e) => t(e, this._element)
                : t;
        }
        _resolvePossibleFunction(t) {
            return je(t, [this._element]);
        }
        _getPopperConfig(t) {
            const e = {
                placement: t,
                modifiers: [
                    {
                        name: "flip",
                        options: {
                            fallbackPlacements: this._config.fallbackPlacements,
                        },
                    },
                    { name: "offset", options: { offset: this._getOffset() } },
                    {
                        name: "preventOverflow",
                        options: { boundary: this._config.boundary },
                    },
                    {
                        name: "arrow",
                        options: { element: `.${this.constructor.NAME}-arrow` },
                    },
                    {
                        name: "preSetPlacement",
                        enabled: !0,
                        phase: "beforeMain",
                        fn: (t) => {
                            this._getTipElement().setAttribute(
                                "data-popper-placement",
                                t.state.placement
                            );
                        },
                    },
                ],
            };
            return { ...e, ...je(this._config.popperConfig, [e]) };
        }
        _setListeners() {
            const t = this._config.trigger.split(" ");
            for (const e of t)
                if ("click" === e)
                    is.on(
                        this._element,
                        this.constructor.eventName("click"),
                        this._config.selector,
                        (t) => {
                            this._initializeOnDelegatedTarget(t).toggle();
                        }
                    );
                else if ("manual" !== e) {
                    const t =
                            e === Xn
                                ? this.constructor.eventName("mouseenter")
                                : this.constructor.eventName("focusin"),
                        s =
                            e === Xn
                                ? this.constructor.eventName("mouseleave")
                                : this.constructor.eventName("focusout");
                    is.on(this._element, t, this._config.selector, (t) => {
                        const e = this._initializeOnDelegatedTarget(t);
                        (e._activeTrigger["focusin" === t.type ? Qn : Xn] = !0),
                            e._enter();
                    }),
                        is.on(this._element, s, this._config.selector, (t) => {
                            const e = this._initializeOnDelegatedTarget(t);
                            (e._activeTrigger["focusout" === t.type ? Qn : Xn] =
                                e._element.contains(t.relatedTarget)),
                                e._leave();
                        });
                }
            (this._hideModalHandler = () => {
                this._element && this.hide();
            }),
                is.on(this._element.closest(Yn), Kn, this._hideModalHandler);
        }
        _fixTitle() {
            const t = this._element.getAttribute("title");
            t &&
                (this._element.getAttribute("aria-label") ||
                    this._element.textContent.trim() ||
                    this._element.setAttribute("aria-label", t),
                this._element.setAttribute("data-bs-original-title", t),
                this._element.removeAttribute("title"));
        }
        _enter() {
            this._isShown() || this._isHovered
                ? (this._isHovered = !0)
                : ((this._isHovered = !0),
                  this._setTimeout(() => {
                      this._isHovered && this.show();
                  }, this._config.delay.show));
        }
        _leave() {
            this._isWithActiveTrigger() ||
                ((this._isHovered = !1),
                this._setTimeout(() => {
                    this._isHovered || this.hide();
                }, this._config.delay.hide));
        }
        _setTimeout(t, e) {
            clearTimeout(this._timeout), (this._timeout = setTimeout(t, e));
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(t) {
            const e = as.getDataAttributes(this._element);
            for (const t of Object.keys(e)) qn.has(t) && delete e[t];
            return (
                (t = { ...e, ...("object" == typeof t && t ? t : {}) }),
                (t = this._mergeConfigObj(t)),
                (t = this._configAfterMerge(t)),
                this._typeCheckConfig(t),
                t
            );
        }
        _configAfterMerge(t) {
            return (
                (t.container =
                    !1 === t.container ? document.body : Te(t.container)),
                "number" == typeof t.delay &&
                    (t.delay = { show: t.delay, hide: t.delay }),
                "number" == typeof t.title && (t.title = t.title.toString()),
                "number" == typeof t.content &&
                    (t.content = t.content.toString()),
                t
            );
        }
        _getDelegateConfig() {
            const t = {};
            for (const [e, s] of Object.entries(this._config))
                this.constructor.Default[e] !== s && (t[e] = s);
            return (t.selector = !1), (t.trigger = "manual"), t;
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), (this._popper = null)),
                this.tip && (this.tip.remove(), (this.tip = null));
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = tr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    Ne(tr);
    const er = {
            ...tr.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template:
                '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click",
        },
        sr = { ...tr.DefaultType, content: "(null|string|element|function)" };
    class ir extends tr {
        static get Default() {
            return er;
        }
        static get DefaultType() {
            return sr;
        }
        static get NAME() {
            return "popover";
        }
        _isWithContent() {
            return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent(),
            };
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = ir.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    Ne(ir);
    const nr = ".bs.scrollspy",
        rr = `activate${nr}`,
        or = `click${nr}`,
        ar = `load${nr}.data-api`,
        lr = "active",
        ur = "[href]",
        hr = ".nav-link",
        cr = `${hr}, .nav-item > ${hr}, .list-group-item`,
        dr = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null,
            threshold: [0.1, 0.5, 1],
        },
        pr = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element",
            threshold: "array",
        };
    class fr extends us {
        constructor(t, e) {
            super(t, e),
                (this._targetLinks = new Map()),
                (this._observableSections = new Map()),
                (this._rootElement =
                    "visible" === getComputedStyle(this._element).overflowY
                        ? null
                        : this._element),
                (this._activeTarget = null),
                (this._observer = null),
                (this._previousScrollData = {
                    visibleEntryTop: 0,
                    parentScrollTop: 0,
                }),
                this.refresh();
        }
        static get Default() {
            return dr;
        }
        static get DefaultType() {
            return pr;
        }
        static get NAME() {
            return "scrollspy";
        }
        refresh() {
            this._initializeTargetsAndObservables(),
                this._maybeEnableSmoothScroll(),
                this._observer
                    ? this._observer.disconnect()
                    : (this._observer = this._getNewObserver());
            for (const t of this._observableSections.values())
                this._observer.observe(t);
        }
        dispose() {
            this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(t) {
            return (
                (t.target = Te(t.target) || document.body),
                (t.rootMargin = t.offset
                    ? `${t.offset}px 0px -30%`
                    : t.rootMargin),
                "string" == typeof t.threshold &&
                    (t.threshold = t.threshold
                        .split(",")
                        .map((t) => Number.parseFloat(t))),
                t
            );
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll &&
                (is.off(this._config.target, or),
                is.on(this._config.target, or, ur, (t) => {
                    const e = this._observableSections.get(t.target.hash);
                    if (e) {
                        t.preventDefault();
                        const s = this._rootElement || window,
                            i = e.offsetTop - this._element.offsetTop;
                        if (s.scrollTo)
                            return void s.scrollTo({
                                top: i,
                                behavior: "smooth",
                            });
                        s.scrollTop = i;
                    }
                }));
        }
        _getNewObserver() {
            const t = {
                root: this._rootElement,
                threshold: this._config.threshold,
                rootMargin: this._config.rootMargin,
            };
            return new IntersectionObserver(
                (t) => this._observerCallback(t),
                t
            );
        }
        _observerCallback(t) {
            const e = (t) => this._targetLinks.get(`#${t.target.id}`),
                s = (t) => {
                    (this._previousScrollData.visibleEntryTop =
                        t.target.offsetTop),
                        this._process(e(t));
                },
                i = (this._rootElement || document.documentElement).scrollTop,
                n = i >= this._previousScrollData.parentScrollTop;
            this._previousScrollData.parentScrollTop = i;
            for (const r of t) {
                if (!r.isIntersecting) {
                    (this._activeTarget = null), this._clearActiveClass(e(r));
                    continue;
                }
                const t =
                    r.target.offsetTop >=
                    this._previousScrollData.visibleEntryTop;
                if (n && t) {
                    if ((s(r), !i)) return;
                } else n || t || s(r);
            }
        }
        _initializeTargetsAndObservables() {
            (this._targetLinks = new Map()),
                (this._observableSections = new Map());
            const t = cs.find(ur, this._config.target);
            for (const e of t) {
                if (!e.hash || Oe(e)) continue;
                const t = cs.findOne(decodeURI(e.hash), this._element);
                De(t) &&
                    (this._targetLinks.set(decodeURI(e.hash), e),
                    this._observableSections.set(e.hash, t));
            }
        }
        _process(t) {
            this._activeTarget !== t &&
                (this._clearActiveClass(this._config.target),
                (this._activeTarget = t),
                t.classList.add(lr),
                this._activateParents(t),
                is.trigger(this._element, rr, { relatedTarget: t }));
        }
        _activateParents(t) {
            if (t.classList.contains("dropdown-item"))
                cs.findOne(
                    ".dropdown-toggle",
                    t.closest(".dropdown")
                ).classList.add(lr);
            else
                for (const e of cs.parents(t, ".nav, .list-group"))
                    for (const t of cs.prev(e, cr)) t.classList.add(lr);
        }
        _clearActiveClass(t) {
            t.classList.remove(lr);
            const e = cs.find(`${ur}.${lr}`, t);
            for (const t of e) t.classList.remove(lr);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = fr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    is.on(window, ar, () => {
        for (const t of cs.find('[data-bs-spy="scroll"]'))
            fr.getOrCreateInstance(t);
    }),
        Ne(fr);
    const gr = ".bs.tab",
        mr = `hide${gr}`,
        _r = `hidden${gr}`,
        vr = `show${gr}`,
        br = `shown${gr}`,
        kr = `click${gr}`,
        yr = `keydown${gr}`,
        Ar = `load${gr}`,
        wr = "ArrowLeft",
        Er = "ArrowRight",
        Cr = "ArrowUp",
        xr = "ArrowDown",
        Sr = "Home",
        Fr = "End",
        Tr = "active",
        Dr = "fade",
        Or = "show",
        Ir = ":not(.dropdown-toggle)",
        Br =
            '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        Mr = `${`.nav-link${Ir}, .list-group-item${Ir}, [role="tab"]${Ir}`}, ${Br}`,
        Pr = `.${Tr}[data-bs-toggle="tab"], .${Tr}[data-bs-toggle="pill"], .${Tr}[data-bs-toggle="list"]`;
    class Lr extends us {
        constructor(t) {
            super(t),
                (this._parent = this._element.closest(
                    '.list-group, .nav, [role="tablist"]'
                )),
                this._parent &&
                    (this._setInitialAttributes(
                        this._parent,
                        this._getChildren()
                    ),
                    is.on(this._element, yr, (t) => this._keydown(t)));
        }
        static get NAME() {
            return "tab";
        }
        show() {
            const t = this._element;
            if (this._elemIsActive(t)) return;
            const e = this._getActiveElem(),
                s = e ? is.trigger(e, mr, { relatedTarget: t }) : null;
            is.trigger(t, vr, { relatedTarget: e }).defaultPrevented ||
                (s && s.defaultPrevented) ||
                (this._deactivate(e, t), this._activate(t, e));
        }
        _activate(t, e) {
            if (!t) return;
            t.classList.add(Tr), this._activate(cs.getElementFromSelector(t));
            this._queueCallback(
                () => {
                    "tab" === t.getAttribute("role")
                        ? (t.removeAttribute("tabindex"),
                          t.setAttribute("aria-selected", !0),
                          this._toggleDropDown(t, !0),
                          is.trigger(t, br, { relatedTarget: e }))
                        : t.classList.add(Or);
                },
                t,
                t.classList.contains(Dr)
            );
        }
        _deactivate(t, e) {
            if (!t) return;
            t.classList.remove(Tr),
                t.blur(),
                this._deactivate(cs.getElementFromSelector(t));
            this._queueCallback(
                () => {
                    "tab" === t.getAttribute("role")
                        ? (t.setAttribute("aria-selected", !1),
                          t.setAttribute("tabindex", "-1"),
                          this._toggleDropDown(t, !1),
                          is.trigger(t, _r, { relatedTarget: e }))
                        : t.classList.remove(Or);
                },
                t,
                t.classList.contains(Dr)
            );
        }
        _keydown(t) {
            if (![wr, Er, Cr, xr, Sr, Fr].includes(t.key)) return;
            t.stopPropagation(), t.preventDefault();
            const e = this._getChildren().filter((t) => !Oe(t));
            let s;
            if ([Sr, Fr].includes(t.key))
                s = e[t.key === Sr ? 0 : e.length - 1];
            else {
                const i = [Er, xr].includes(t.key);
                s = Re(e, t.target, i, !0);
            }
            s &&
                (s.focus({ preventScroll: !0 }),
                Lr.getOrCreateInstance(s).show());
        }
        _getChildren() {
            return cs.find(Mr, this._parent);
        }
        _getActiveElem() {
            return (
                this._getChildren().find((t) => this._elemIsActive(t)) || null
            );
        }
        _setInitialAttributes(t, e) {
            this._setAttributeIfNotExists(t, "role", "tablist");
            for (const t of e) this._setInitialAttributesOnChild(t);
        }
        _setInitialAttributesOnChild(t) {
            t = this._getInnerElement(t);
            const e = this._elemIsActive(t),
                s = this._getOuterElement(t);
            t.setAttribute("aria-selected", e),
                s !== t &&
                    this._setAttributeIfNotExists(s, "role", "presentation"),
                e || t.setAttribute("tabindex", "-1"),
                this._setAttributeIfNotExists(t, "role", "tab"),
                this._setInitialAttributesOnTargetPanel(t);
        }
        _setInitialAttributesOnTargetPanel(t) {
            const e = cs.getElementFromSelector(t);
            e &&
                (this._setAttributeIfNotExists(e, "role", "tabpanel"),
                t.id &&
                    this._setAttributeIfNotExists(
                        e,
                        "aria-labelledby",
                        `${t.id}`
                    ));
        }
        _toggleDropDown(t, e) {
            const s = this._getOuterElement(t);
            if (!s.classList.contains("dropdown")) return;
            const i = (t, i) => {
                const n = cs.findOne(t, s);
                n && n.classList.toggle(i, e);
            };
            i(".dropdown-toggle", Tr),
                i(".dropdown-menu", Or),
                s.setAttribute("aria-expanded", e);
        }
        _setAttributeIfNotExists(t, e, s) {
            t.hasAttribute(e) || t.setAttribute(e, s);
        }
        _elemIsActive(t) {
            return t.classList.contains(Tr);
        }
        _getInnerElement(t) {
            return t.matches(Mr) ? t : cs.findOne(Mr, t);
        }
        _getOuterElement(t) {
            return t.closest(".nav-item, .list-group-item") || t;
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Lr.getOrCreateInstance(this);
                if ("string" == typeof t) {
                    if (
                        void 0 === e[t] ||
                        t.startsWith("_") ||
                        "constructor" === t
                    )
                        throw new TypeError(`No method named "${t}"`);
                    e[t]();
                }
            });
        }
    }
    is.on(document, kr, Br, function (t) {
        ["A", "AREA"].includes(this.tagName) && t.preventDefault(),
            Oe(this) || Lr.getOrCreateInstance(this).show();
    }),
        is.on(window, Ar, () => {
            for (const t of cs.find(Pr)) Lr.getOrCreateInstance(t);
        }),
        Ne(Lr);
    const Vr = ".bs.toast",
        Nr = `mouseover${Vr}`,
        jr = `mouseout${Vr}`,
        $r = `focusin${Vr}`,
        Rr = `focusout${Vr}`,
        zr = `hide${Vr}`,
        Hr = `hidden${Vr}`,
        qr = `show${Vr}`,
        Wr = `shown${Vr}`,
        Ur = "hide",
        Yr = "show",
        Kr = "showing",
        Xr = { animation: "boolean", autohide: "boolean", delay: "number" },
        Qr = { animation: !0, autohide: !0, delay: 5e3 };
    class Zr extends us {
        constructor(t, e) {
            super(t, e),
                (this._timeout = null),
                (this._hasMouseInteraction = !1),
                (this._hasKeyboardInteraction = !1),
                this._setListeners();
        }
        static get Default() {
            return Qr;
        }
        static get DefaultType() {
            return Xr;
        }
        static get NAME() {
            return "toast";
        }
        show() {
            if (is.trigger(this._element, qr).defaultPrevented) return;
            this._clearTimeout(),
                this._config.animation && this._element.classList.add("fade");
            this._element.classList.remove(Ur),
                Me(this._element),
                this._element.classList.add(Yr, Kr),
                this._queueCallback(
                    () => {
                        this._element.classList.remove(Kr),
                            is.trigger(this._element, Wr),
                            this._maybeScheduleHide();
                    },
                    this._element,
                    this._config.animation
                );
        }
        hide() {
            if (!this.isShown()) return;
            if (is.trigger(this._element, zr).defaultPrevented) return;
            this._element.classList.add(Kr),
                this._queueCallback(
                    () => {
                        this._element.classList.add(Ur),
                            this._element.classList.remove(Kr, Yr),
                            is.trigger(this._element, Hr);
                    },
                    this._element,
                    this._config.animation
                );
        }
        dispose() {
            this._clearTimeout(),
                this.isShown() && this._element.classList.remove(Yr),
                super.dispose();
        }
        isShown() {
            return this._element.classList.contains(Yr);
        }
        _maybeScheduleHide() {
            this._config.autohide &&
                (this._hasMouseInteraction ||
                    this._hasKeyboardInteraction ||
                    (this._timeout = setTimeout(() => {
                        this.hide();
                    }, this._config.delay)));
        }
        _onInteraction(t, e) {
            switch (t.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = e;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = e;
            }
            if (e) return void this._clearTimeout();
            const s = t.relatedTarget;
            this._element === s ||
                this._element.contains(s) ||
                this._maybeScheduleHide();
        }
        _setListeners() {
            is.on(this._element, Nr, (t) => this._onInteraction(t, !0)),
                is.on(this._element, jr, (t) => this._onInteraction(t, !1)),
                is.on(this._element, $r, (t) => this._onInteraction(t, !0)),
                is.on(this._element, Rr, (t) => this._onInteraction(t, !1));
        }
        _clearTimeout() {
            clearTimeout(this._timeout), (this._timeout = null);
        }
        static jQueryInterface(t) {
            return this.each(function () {
                const e = Zr.getOrCreateInstance(this, t);
                if ("string" == typeof t) {
                    if (void 0 === e[t])
                        throw new TypeError(`No method named "${t}"`);
                    e[t](this);
                }
            });
        }
    }
    ds(Zr), Ne(Zr);
    var Gr = Object.freeze({
        __proto__: null,
        Alert: ms,
        Button: vs,
        Carousel: Qs,
        Collapse: hi,
        Dropdown: Pi,
        Modal: _n,
        Offcanvas: Pn,
        Popover: ir,
        ScrollSpy: fr,
        Tab: Lr,
        Toast: Zr,
        Tooltip: tr,
    });
    [].slice
        .call(document.querySelectorAll('[data-bs-toggle="dropdown"]'))
        .map(function (t) {
            var e = {
                boundary:
                    "viewport" === t.getAttribute("data-bs-boundary")
                        ? document.querySelector(".btn")
                        : "clippingParents",
            };
            return new Pi(t, e);
        }),
        [].slice
            .call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
            .map(function (t) {
                var e,
                    s,
                    i = {
                        delay: { show: 50, hide: 50 },
                        html:
                            null !==
                                (e =
                                    "true" ===
                                    t.getAttribute("data-bs-html")) &&
                            void 0 !== e &&
                            e,
                        placement:
                            null !==
                                (s = t.getAttribute("data-bs-placement")) &&
                            void 0 !== s
                                ? s
                                : "auto",
                    };
                return new tr(t, i);
            }),
        [].slice
            .call(document.querySelectorAll('[data-bs-toggle="popover"]'))
            .map(function (t) {
                var e,
                    s,
                    i = {
                        delay: { show: 50, hide: 50 },
                        html:
                            null !==
                                (e =
                                    "true" ===
                                    t.getAttribute("data-bs-html")) &&
                            void 0 !== e &&
                            e,
                        placement:
                            null !==
                                (s = t.getAttribute("data-bs-placement")) &&
                            void 0 !== s
                                ? s
                                : "auto",
                    };
                return new ir(t, i);
            }),
        [].slice
            .call(document.querySelectorAll('[data-bs-toggle="switch-icon"]'))
            .map(function (t) {
                t.addEventListener("click", function (e) {
                    e.stopPropagation(), t.classList.toggle("active");
                });
            });
    var Jr;
    (Jr = window.location.hash) &&
        [].slice
            .call(document.querySelectorAll('[data-bs-toggle="tab"]'))
            .filter(function (t) {
                return t.hash === Jr;
            })
            .map(function (t) {
                new Lr(t).show();
            }),
        [].slice
            .call(document.querySelectorAll('[data-bs-toggle="toast"]'))
            .map(function (t) {
                return new Zr(t);
            });
    var to = "tblr-",
        eo = function (t, e) {
            var s = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(t);
            return s
                ? "rgba("
                      .concat(parseInt(s[1], 16), ", ")
                      .concat(parseInt(s[2], 16), ", ")
                      .concat(parseInt(s[3], 16), ", ")
                      .concat(e, ")")
                : null;
        },
        so = Object.freeze({
            __proto__: null,
            prefix: to,
            hexToRgba: eo,
            getColor: function (t) {
                var e =
                        arguments.length > 1 && void 0 !== arguments[1]
                            ? arguments[1]
                            : 1,
                    s = getComputedStyle(document.body)
                        .getPropertyValue("--".concat(to).concat(t))
                        .trim();
                return 1 !== e ? eo(s, e) : s;
            },
        });
    (globalThis.bootstrap = Gr), (globalThis.tabler = so);
});
