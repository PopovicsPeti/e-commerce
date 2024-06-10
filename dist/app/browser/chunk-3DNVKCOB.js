import {
  $ as x,
  Ab as Rt,
  Ba as P,
  C as rt,
  Ca as l,
  F as k,
  Fc as Vt,
  Gc as Ht,
  Hb as A,
  Ia as pt,
  J as at,
  Ja as mt,
  Ka as ft,
  Kc as jt,
  La as ut,
  O as lt,
  Oa as _t,
  S as f,
  T as z,
  Ta as gt,
  Tb as xt,
  Ua as Y,
  Va as vt,
  Vb as Ft,
  W as V,
  Wa as O,
  Xa as It,
  Xb as Dt,
  Z as C,
  a as v,
  aa as H,
  ac as N,
  ba as c,
  ca as w,
  cb as g,
  d as R,
  db as M,
  dc as Pt,
  e as et,
  ea as ct,
  ed as Ut,
  f as it,
  g as ot,
  hc as Ot,
  hd as $,
  ib as B,
  ja as F,
  jd as Yt,
  ka as D,
  l as W,
  lb as T,
  oa as ht,
  ob as yt,
  oc as Mt,
  pb as bt,
  pc as Nt,
  q as y,
  qa as j,
  qb as Z,
  r as nt,
  rc as Lt,
  sa as q,
  sb as Ct,
  ta as U,
  tb as wt,
  tc as kt,
  u as b,
  ua as p,
  ub as St,
  uc as Q,
  vb as Tt,
  vc as K,
  wb as Et,
  xa as dt,
  ya as S,
  yb as E,
  z as st,
  zb as At,
  zc as zt,
} from "./chunk-ILZMJO4D.js";
var Ee = (() => {
  var s;
  let m = class m {
    constructor() {
      et(this, s, void 0);
      it(this, s, ft({})),
        (this.cart = R(this, s).asReadonly()),
        (this.totalInCart = Dt(() => {
          let e = Object.values(this.cart());
          return e.length ? e.reduce((i, o) => i + o, 0) : 0;
        }));
    }
    addItem(e) {
      this.updateCount(e, 1);
    }
    removeItem(e) {
      this.updateCount(e, -1);
    }
    empty() {
      R(this, s).set({});
    }
    updateCount(e, i) {
      let o = this.cart(),
        n = v({}, o);
      if ((e in n || (n[e] = 0), i === 1)) {
        (n[e] = ++n[e]), R(this, s).set(n);
        return;
      }
      if (n[e] === 0) {
        console.warn("No match. Skipping...");
        return;
      }
      n[e]--, n[e] || delete n[e], R(this, s).set(n);
    }
  };
  (s = new WeakMap()),
    (m.ɵfac = function (i) {
      return new (i || m)();
    }),
    (m.ɵprov = V({ token: m, factory: m.ɵfac, providedIn: "root" }));
  let r = m;
  return r;
})();
var ie = ["*"],
  G;
function oe() {
  if (G === void 0 && ((G = null), typeof window < "u")) {
    let r = window;
    r.trustedTypes !== void 0 &&
      (G = r.trustedTypes.createPolicy("angular#components", {
        createHTML: (s) => s,
      }));
  }
  return G;
}
function L(r) {
  return oe()?.createHTML(r) || r;
}
function Bt(r) {
  return Error(`Unable to find icon with the name "${r}"`);
}
function ne() {
  return Error(
    "Could not find HttpClient provider for use with Angular Material icons. Please include the HttpClientModule from @angular/common/http in your app imports.",
  );
}
function $t(r) {
  return Error(
    `The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${r}".`,
  );
}
function Gt(r) {
  return Error(
    `The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${r}".`,
  );
}
var u = class {
    constructor(s, m, t) {
      (this.url = s), (this.svgText = m), (this.options = t);
    }
  },
  se = (() => {
    let s = class s {
      constructor(t, e, i, o) {
        (this._httpClient = t),
          (this._sanitizer = e),
          (this._errorHandler = o),
          (this._svgIconConfigs = new Map()),
          (this._iconSetConfigs = new Map()),
          (this._cachedIconsByUrl = new Map()),
          (this._inProgressUrlFetches = new Map()),
          (this._fontCssClassesByAlias = new Map()),
          (this._resolvers = []),
          (this._defaultFontSetClass = ["material-icons", "mat-ligature-font"]),
          (this._document = i);
      }
      addSvgIcon(t, e, i) {
        return this.addSvgIconInNamespace("", t, e, i);
      }
      addSvgIconLiteral(t, e, i) {
        return this.addSvgIconLiteralInNamespace("", t, e, i);
      }
      addSvgIconInNamespace(t, e, i, o) {
        return this._addSvgIconConfig(t, e, new u(i, null, o));
      }
      addSvgIconResolver(t) {
        return this._resolvers.push(t), this;
      }
      addSvgIconLiteralInNamespace(t, e, i, o) {
        let n = this._sanitizer.sanitize(S.HTML, i);
        if (!n) throw Gt(i);
        let a = L(n);
        return this._addSvgIconConfig(t, e, new u("", a, o));
      }
      addSvgIconSet(t, e) {
        return this.addSvgIconSetInNamespace("", t, e);
      }
      addSvgIconSetLiteral(t, e) {
        return this.addSvgIconSetLiteralInNamespace("", t, e);
      }
      addSvgIconSetInNamespace(t, e, i) {
        return this._addSvgIconSetConfig(t, new u(e, null, i));
      }
      addSvgIconSetLiteralInNamespace(t, e, i) {
        let o = this._sanitizer.sanitize(S.HTML, e);
        if (!o) throw Gt(e);
        let n = L(o);
        return this._addSvgIconSetConfig(t, new u("", n, i));
      }
      registerFontClassAlias(t, e = t) {
        return this._fontCssClassesByAlias.set(t, e), this;
      }
      classNameForFontAlias(t) {
        return this._fontCssClassesByAlias.get(t) || t;
      }
      setDefaultFontSetClass(...t) {
        return (this._defaultFontSetClass = t), this;
      }
      getDefaultFontSetClass() {
        return this._defaultFontSetClass;
      }
      getSvgIconFromUrl(t) {
        let e = this._sanitizer.sanitize(S.RESOURCE_URL, t);
        if (!e) throw $t(t);
        let i = this._cachedIconsByUrl.get(e);
        return i
          ? y(X(i))
          : this._loadSvgIconFromConfig(new u(t, null)).pipe(
              z((o) => this._cachedIconsByUrl.set(e, o)),
              b((o) => X(o)),
            );
      }
      getNamedSvgIcon(t, e = "") {
        let i = Xt(e, t),
          o = this._svgIconConfigs.get(i);
        if (o) return this._getSvgFromConfig(o);
        if (((o = this._getIconConfigFromResolvers(e, t)), o))
          return this._svgIconConfigs.set(i, o), this._getSvgFromConfig(o);
        let n = this._iconSetConfigs.get(e);
        return n ? this._getSvgFromIconSetConfigs(t, n) : nt(Bt(i));
      }
      ngOnDestroy() {
        (this._resolvers = []),
          this._svgIconConfigs.clear(),
          this._iconSetConfigs.clear(),
          this._cachedIconsByUrl.clear();
      }
      _getSvgFromConfig(t) {
        return t.svgText
          ? y(X(this._svgElementFromConfig(t)))
          : this._loadSvgIconFromConfig(t).pipe(b((e) => X(e)));
      }
      _getSvgFromIconSetConfigs(t, e) {
        let i = this._extractIconWithNameFromAnySet(t, e);
        if (i) return y(i);
        let o = e
          .filter((n) => !n.svgText)
          .map((n) =>
            this._loadSvgIconSetFromConfig(n).pipe(
              rt((a) => {
                let _ = `Loading icon set URL: ${this._sanitizer.sanitize(S.RESOURCE_URL, n.url)} failed: ${a.message}`;
                return this._errorHandler.handleError(new Error(_)), y(null);
              }),
            ),
          );
        return st(o).pipe(
          b(() => {
            let n = this._extractIconWithNameFromAnySet(t, e);
            if (!n) throw Bt(t);
            return n;
          }),
        );
      }
      _extractIconWithNameFromAnySet(t, e) {
        for (let i = e.length - 1; i >= 0; i--) {
          let o = e[i];
          if (o.svgText && o.svgText.toString().indexOf(t) > -1) {
            let n = this._svgElementFromConfig(o),
              a = this._extractSvgIconFromSet(n, t, o.options);
            if (a) return a;
          }
        }
        return null;
      }
      _loadSvgIconFromConfig(t) {
        return this._fetchIcon(t).pipe(
          z((e) => (t.svgText = e)),
          b(() => this._svgElementFromConfig(t)),
        );
      }
      _loadSvgIconSetFromConfig(t) {
        return t.svgText
          ? y(null)
          : this._fetchIcon(t).pipe(z((e) => (t.svgText = e)));
      }
      _extractSvgIconFromSet(t, e, i) {
        let o = t.querySelector(`[id="${e}"]`);
        if (!o) return null;
        let n = o.cloneNode(!0);
        if ((n.removeAttribute("id"), n.nodeName.toLowerCase() === "svg"))
          return this._setSvgAttributes(n, i);
        if (n.nodeName.toLowerCase() === "symbol")
          return this._setSvgAttributes(this._toSvgElement(n), i);
        let a = this._svgElementFromString(L("<svg></svg>"));
        return a.appendChild(n), this._setSvgAttributes(a, i);
      }
      _svgElementFromString(t) {
        let e = this._document.createElement("DIV");
        e.innerHTML = t;
        let i = e.querySelector("svg");
        if (!i) throw Error("<svg> tag not found");
        return i;
      }
      _toSvgElement(t) {
        let e = this._svgElementFromString(L("<svg></svg>")),
          i = t.attributes;
        for (let o = 0; o < i.length; o++) {
          let { name: n, value: a } = i[o];
          n !== "id" && e.setAttribute(n, a);
        }
        for (let o = 0; o < t.childNodes.length; o++)
          t.childNodes[o].nodeType === this._document.ELEMENT_NODE &&
            e.appendChild(t.childNodes[o].cloneNode(!0));
        return e;
      }
      _setSvgAttributes(t, e) {
        return (
          t.setAttribute("fit", ""),
          t.setAttribute("height", "100%"),
          t.setAttribute("width", "100%"),
          t.setAttribute("preserveAspectRatio", "xMidYMid meet"),
          t.setAttribute("focusable", "false"),
          e && e.viewBox && t.setAttribute("viewBox", e.viewBox),
          t
        );
      }
      _fetchIcon(t) {
        let { url: e, options: i } = t,
          o = i?.withCredentials ?? !1;
        if (!this._httpClient) throw ne();
        if (e == null) throw Error(`Cannot fetch icon from URL "${e}".`);
        let n = this._sanitizer.sanitize(S.RESOURCE_URL, e);
        if (!n) throw $t(e);
        let a = this._inProgressUrlFetches.get(n);
        if (a) return a;
        let h = this._httpClient
          .get(n, { responseType: "text", withCredentials: o })
          .pipe(
            b((_) => L(_)),
            at(() => this._inProgressUrlFetches.delete(n)),
            lt(),
          );
        return this._inProgressUrlFetches.set(n, h), h;
      }
      _addSvgIconConfig(t, e, i) {
        return this._svgIconConfigs.set(Xt(t, e), i), this;
      }
      _addSvgIconSetConfig(t, e) {
        let i = this._iconSetConfigs.get(t);
        return i ? i.push(e) : this._iconSetConfigs.set(t, [e]), this;
      }
      _svgElementFromConfig(t) {
        if (!t.svgElement) {
          let e = this._svgElementFromString(t.svgText);
          this._setSvgAttributes(e, t.options), (t.svgElement = e);
        }
        return t.svgElement;
      }
      _getIconConfigFromResolvers(t, e) {
        for (let i = 0; i < this._resolvers.length; i++) {
          let o = this._resolvers[i](e, t);
          if (o) return re(o) ? new u(o.url, null, o.options) : new u(o, null);
        }
      }
    };
    (s.ɵfac = function (e) {
      return new (e || s)(x(Ot, 8), x(Mt), x(N, 8), x(j));
    }),
      (s.ɵprov = V({ token: s, factory: s.ɵfac, providedIn: "root" }));
    let r = s;
    return r;
  })();
function X(r) {
  return r.cloneNode(!0);
}
function Xt(r, s) {
  return r + ":" + s;
}
function re(r) {
  return !!(r.url && r.options);
}
var ae = new C("MAT_ICON_DEFAULT_OPTIONS"),
  le = new C("mat-icon-location", { providedIn: "root", factory: ce });
function ce() {
  let r = H(N),
    s = r ? r.location : null;
  return { getPathname: () => (s ? s.pathname + s.search : "") };
}
var Wt = [
    "clip-path",
    "color-profile",
    "src",
    "cursor",
    "fill",
    "filter",
    "marker",
    "marker-start",
    "marker-mid",
    "marker-end",
    "mask",
    "stroke",
  ],
  he = Wt.map((r) => `[${r}]`).join(", "),
  de = /^url\(['"]?#(.*?)['"]?\)$/,
  qt = (() => {
    let s = class s {
      get color() {
        return this._color || this._defaultColor;
      }
      set color(t) {
        this._color = t;
      }
      get svgIcon() {
        return this._svgIcon;
      }
      set svgIcon(t) {
        t !== this._svgIcon &&
          (t
            ? this._updateSvgIcon(t)
            : this._svgIcon && this._clearSvgElement(),
          (this._svgIcon = t));
      }
      get fontSet() {
        return this._fontSet;
      }
      set fontSet(t) {
        let e = this._cleanupFontValue(t);
        e !== this._fontSet &&
          ((this._fontSet = e), this._updateFontIconClasses());
      }
      get fontIcon() {
        return this._fontIcon;
      }
      set fontIcon(t) {
        let e = this._cleanupFontValue(t);
        e !== this._fontIcon &&
          ((this._fontIcon = e), this._updateFontIconClasses());
      }
      constructor(t, e, i, o, n, a) {
        (this._elementRef = t),
          (this._iconRegistry = e),
          (this._location = o),
          (this._errorHandler = n),
          (this.inline = !1),
          (this._previousFontSetClass = []),
          (this._currentIconFetch = ot.EMPTY),
          a &&
            (a.color && (this.color = this._defaultColor = a.color),
            a.fontSet && (this.fontSet = a.fontSet)),
          i || t.nativeElement.setAttribute("aria-hidden", "true");
      }
      _splitIconName(t) {
        if (!t) return ["", ""];
        let e = t.split(":");
        switch (e.length) {
          case 1:
            return ["", e[0]];
          case 2:
            return e;
          default:
            throw Error(`Invalid icon name: "${t}"`);
        }
      }
      ngOnInit() {
        this._updateFontIconClasses();
      }
      ngAfterViewChecked() {
        let t = this._elementsWithExternalReferences;
        if (t && t.size) {
          let e = this._location.getPathname();
          e !== this._previousPath &&
            ((this._previousPath = e), this._prependPathToReferences(e));
        }
      }
      ngOnDestroy() {
        this._currentIconFetch.unsubscribe(),
          this._elementsWithExternalReferences &&
            this._elementsWithExternalReferences.clear();
      }
      _usingFontIcon() {
        return !this.svgIcon;
      }
      _setSvgElement(t) {
        this._clearSvgElement();
        let e = this._location.getPathname();
        (this._previousPath = e),
          this._cacheChildrenWithExternalReferences(t),
          this._prependPathToReferences(e),
          this._elementRef.nativeElement.appendChild(t);
      }
      _clearSvgElement() {
        let t = this._elementRef.nativeElement,
          e = t.childNodes.length;
        for (
          this._elementsWithExternalReferences &&
          this._elementsWithExternalReferences.clear();
          e--;

        ) {
          let i = t.childNodes[e];
          (i.nodeType !== 1 || i.nodeName.toLowerCase() === "svg") &&
            i.remove();
        }
      }
      _updateFontIconClasses() {
        if (!this._usingFontIcon()) return;
        let t = this._elementRef.nativeElement,
          e = (
            this.fontSet
              ? this._iconRegistry
                  .classNameForFontAlias(this.fontSet)
                  .split(/ +/)
              : this._iconRegistry.getDefaultFontSetClass()
          ).filter((i) => i.length > 0);
        this._previousFontSetClass.forEach((i) => t.classList.remove(i)),
          e.forEach((i) => t.classList.add(i)),
          (this._previousFontSetClass = e),
          this.fontIcon !== this._previousFontIconClass &&
            !e.includes("mat-ligature-font") &&
            (this._previousFontIconClass &&
              t.classList.remove(this._previousFontIconClass),
            this.fontIcon && t.classList.add(this.fontIcon),
            (this._previousFontIconClass = this.fontIcon));
      }
      _cleanupFontValue(t) {
        return typeof t == "string" ? t.trim().split(" ")[0] : t;
      }
      _prependPathToReferences(t) {
        let e = this._elementsWithExternalReferences;
        e &&
          e.forEach((i, o) => {
            i.forEach((n) => {
              o.setAttribute(n.name, `url('${t}#${n.value}')`);
            });
          });
      }
      _cacheChildrenWithExternalReferences(t) {
        let e = t.querySelectorAll(he),
          i = (this._elementsWithExternalReferences =
            this._elementsWithExternalReferences || new Map());
        for (let o = 0; o < e.length; o++)
          Wt.forEach((n) => {
            let a = e[o],
              h = a.getAttribute(n),
              _ = h ? h.match(de) : null;
            if (_) {
              let I = i.get(a);
              I || ((I = []), i.set(a, I)), I.push({ name: n, value: _[1] });
            }
          });
      }
      _updateSvgIcon(t) {
        if (
          ((this._svgNamespace = null),
          (this._svgName = null),
          this._currentIconFetch.unsubscribe(),
          t)
        ) {
          let [e, i] = this._splitIconName(t);
          e && (this._svgNamespace = e),
            i && (this._svgName = i),
            (this._currentIconFetch = this._iconRegistry
              .getNamedSvgIcon(i, e)
              .pipe(k(1))
              .subscribe(
                (o) => this._setSvgElement(o),
                (o) => {
                  let n = `Error retrieving icon ${e}:${i}! ${o.message}`;
                  this._errorHandler.handleError(new Error(n));
                },
              ));
        }
      }
    };
    (s.ɵfac = function (e) {
      return new (e || s)(
        l(p),
        l(se),
        ht("aria-hidden"),
        l(le),
        l(j),
        l(ae, 8),
      );
    }),
      (s.ɵcmp = w({
        type: s,
        selectors: [["mat-icon"]],
        hostAttrs: ["role", "img", 1, "mat-icon", "notranslate"],
        hostVars: 10,
        hostBindings: function (e, i) {
          e & 2 &&
            (gt("data-mat-icon-type", i._usingFontIcon() ? "font" : "svg")(
              "data-mat-icon-name",
              i._svgName || i.fontIcon,
            )("data-mat-icon-namespace", i._svgNamespace || i.fontSet)(
              "fontIcon",
              i._usingFontIcon() ? i.fontIcon : null,
            ),
            It(i.color ? "mat-" + i.color : ""),
            O("mat-icon-inline", i.inline)(
              "mat-icon-no-color",
              i.color !== "primary" &&
                i.color !== "accent" &&
                i.color !== "warn",
            ));
        },
        inputs: {
          color: "color",
          inline: [c.HasDecoratorInputTransform, "inline", "inline", Ft],
          svgIcon: "svgIcon",
          fontSet: "fontSet",
          fontIcon: "fontIcon",
        },
        exportAs: ["matIcon"],
        standalone: !0,
        features: [_t, A],
        ngContentSelectors: ie,
        decls: 1,
        vars: 0,
        template: function (e, i) {
          e & 1 && (yt(), bt(0));
        },
        styles: [
          "mat-icon,mat-icon.mat-primary,mat-icon.mat-accent,mat-icon.mat-warn{color:var(--mat-icon-color)}.mat-icon{-webkit-user-select:none;user-select:none;background-repeat:no-repeat;display:inline-block;fill:currentColor;height:24px;width:24px;overflow:hidden}.mat-icon.mat-icon-inline{font-size:inherit;height:inherit;line-height:inherit;width:inherit}.mat-icon.mat-ligature-font[fontIcon]::before{content:attr(fontIcon)}[dir=rtl] .mat-icon-rtl-mirror{transform:scale(-1, 1)}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon{display:block}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon{margin:auto}",
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let r = s;
    return r;
  })();
var me = ["tooltip"],
  fe = 20;
var ue = new C("mat-tooltip-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    let r = H($);
    return () => r.scrollStrategies.reposition({ scrollThrottle: fe });
  },
});
function _e() {
  return { showDelay: 0, hideDelay: 0, touchendHideDelay: 1500 };
}
var ge = new C("mat-tooltip-default-options", {
  providedIn: "root",
  factory: _e,
});
var Zt = "tooltip-panel",
  Qt = Lt({ passive: !0 }),
  ve = 8,
  Ie = 8,
  ye = 24,
  be = 200,
  Kt = (() => {
    let s = class s {
      get position() {
        return this._position;
      }
      set position(t) {
        t !== this._position &&
          ((this._position = t),
          this._overlayRef &&
            (this._updatePosition(this._overlayRef),
            this._tooltipInstance?.show(0),
            this._overlayRef.updatePosition()));
      }
      get positionAtOrigin() {
        return this._positionAtOrigin;
      }
      set positionAtOrigin(t) {
        (this._positionAtOrigin = Q(t)),
          this._detach(),
          (this._overlayRef = null);
      }
      get disabled() {
        return this._disabled;
      }
      set disabled(t) {
        (this._disabled = Q(t)),
          this._disabled
            ? this.hide(0)
            : this._setupPointerEnterEventsIfNeeded();
      }
      get showDelay() {
        return this._showDelay;
      }
      set showDelay(t) {
        this._showDelay = K(t);
      }
      get hideDelay() {
        return this._hideDelay;
      }
      set hideDelay(t) {
        (this._hideDelay = K(t)),
          this._tooltipInstance &&
            (this._tooltipInstance._mouseLeaveHideDelay = this._hideDelay);
      }
      get message() {
        return this._message;
      }
      set message(t) {
        this._ariaDescriber.removeDescription(
          this._elementRef.nativeElement,
          this._message,
          "tooltip",
        ),
          (this._message = t != null ? String(t).trim() : ""),
          !this._message && this._isTooltipVisible()
            ? this.hide(0)
            : (this._setupPointerEnterEventsIfNeeded(),
              this._updateTooltipMessage(),
              this._ngZone.runOutsideAngular(() => {
                Promise.resolve().then(() => {
                  this._ariaDescriber.describe(
                    this._elementRef.nativeElement,
                    this.message,
                    "tooltip",
                  );
                });
              }));
      }
      get tooltipClass() {
        return this._tooltipClass;
      }
      set tooltipClass(t) {
        (this._tooltipClass = t),
          this._tooltipInstance && this._setTooltipClass(this._tooltipClass);
      }
      constructor(t, e, i, o, n, a, h, _, I, tt, d, Jt) {
        (this._overlay = t),
          (this._elementRef = e),
          (this._scrollDispatcher = i),
          (this._viewContainerRef = o),
          (this._ngZone = n),
          (this._platform = a),
          (this._ariaDescriber = h),
          (this._focusMonitor = _),
          (this._dir = tt),
          (this._defaultOptions = d),
          (this._position = "below"),
          (this._positionAtOrigin = !1),
          (this._disabled = !1),
          (this._viewInitialized = !1),
          (this._pointerExitEventsInitialized = !1),
          (this._tooltipComponent = Ce),
          (this._viewportMargin = 8),
          (this._cssClassPrefix = "mat-mdc"),
          (this.touchGestures = "auto"),
          (this._message = ""),
          (this._passiveListeners = []),
          (this._destroyed = new W()),
          (this._scrollStrategy = I),
          (this._document = Jt),
          d &&
            ((this._showDelay = d.showDelay),
            (this._hideDelay = d.hideDelay),
            d.position && (this.position = d.position),
            d.positionAtOrigin && (this.positionAtOrigin = d.positionAtOrigin),
            d.touchGestures && (this.touchGestures = d.touchGestures)),
          tt.change.pipe(f(this._destroyed)).subscribe(() => {
            this._overlayRef && this._updatePosition(this._overlayRef);
          }),
          (this._viewportMargin = ve);
      }
      ngAfterViewInit() {
        (this._viewInitialized = !0),
          this._setupPointerEnterEventsIfNeeded(),
          this._focusMonitor
            .monitor(this._elementRef)
            .pipe(f(this._destroyed))
            .subscribe((t) => {
              t
                ? t === "keyboard" && this._ngZone.run(() => this.show())
                : this._ngZone.run(() => this.hide(0));
            });
      }
      ngOnDestroy() {
        let t = this._elementRef.nativeElement;
        clearTimeout(this._touchstartTimeout),
          this._overlayRef &&
            (this._overlayRef.dispose(), (this._tooltipInstance = null)),
          this._passiveListeners.forEach(([e, i]) => {
            t.removeEventListener(e, i, Qt);
          }),
          (this._passiveListeners.length = 0),
          this._destroyed.next(),
          this._destroyed.complete(),
          this._ariaDescriber.removeDescription(t, this.message, "tooltip"),
          this._focusMonitor.stopMonitoring(t);
      }
      show(t = this.showDelay, e) {
        if (this.disabled || !this.message || this._isTooltipVisible()) {
          this._tooltipInstance?._cancelPendingAnimations();
          return;
        }
        let i = this._createOverlay(e);
        this._detach(),
          (this._portal =
            this._portal ||
            new jt(this._tooltipComponent, this._viewContainerRef));
        let o = (this._tooltipInstance = i.attach(this._portal).instance);
        (o._triggerElement = this._elementRef.nativeElement),
          (o._mouseLeaveHideDelay = this._hideDelay),
          o
            .afterHidden()
            .pipe(f(this._destroyed))
            .subscribe(() => this._detach()),
          this._setTooltipClass(this._tooltipClass),
          this._updateTooltipMessage(),
          o.show(t);
      }
      hide(t = this.hideDelay) {
        let e = this._tooltipInstance;
        e &&
          (e.isVisible()
            ? e.hide(t)
            : (e._cancelPendingAnimations(), this._detach()));
      }
      toggle(t) {
        this._isTooltipVisible() ? this.hide() : this.show(void 0, t);
      }
      _isTooltipVisible() {
        return !!this._tooltipInstance && this._tooltipInstance.isVisible();
      }
      _createOverlay(t) {
        if (this._overlayRef) {
          let o = this._overlayRef.getConfig().positionStrategy;
          if ((!this.positionAtOrigin || !t) && o._origin instanceof p)
            return this._overlayRef;
          this._detach();
        }
        let e = this._scrollDispatcher.getAncestorScrollContainers(
            this._elementRef,
          ),
          i = this._overlay
            .position()
            .flexibleConnectedTo(
              this.positionAtOrigin ? t || this._elementRef : this._elementRef,
            )
            .withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`)
            .withFlexibleDimensions(!1)
            .withViewportMargin(this._viewportMargin)
            .withScrollableContainers(e);
        return (
          i.positionChanges.pipe(f(this._destroyed)).subscribe((o) => {
            this._updateCurrentPositionClass(o.connectionPair),
              this._tooltipInstance &&
                o.scrollableViewProperties.isOverlayClipped &&
                this._tooltipInstance.isVisible() &&
                this._ngZone.run(() => this.hide(0));
          }),
          (this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: i,
            panelClass: `${this._cssClassPrefix}-${Zt}`,
            scrollStrategy: this._scrollStrategy(),
          })),
          this._updatePosition(this._overlayRef),
          this._overlayRef
            .detachments()
            .pipe(f(this._destroyed))
            .subscribe(() => this._detach()),
          this._overlayRef
            .outsidePointerEvents()
            .pipe(f(this._destroyed))
            .subscribe(() => this._tooltipInstance?._handleBodyInteraction()),
          this._overlayRef
            .keydownEvents()
            .pipe(f(this._destroyed))
            .subscribe((o) => {
              this._isTooltipVisible() &&
                o.keyCode === 27 &&
                !kt(o) &&
                (o.preventDefault(),
                o.stopPropagation(),
                this._ngZone.run(() => this.hide(0)));
            }),
          this._defaultOptions?.disableTooltipInteractivity &&
            this._overlayRef.addPanelClass(
              `${this._cssClassPrefix}-tooltip-panel-non-interactive`,
            ),
          this._overlayRef
        );
      }
      _detach() {
        this._overlayRef &&
          this._overlayRef.hasAttached() &&
          this._overlayRef.detach(),
          (this._tooltipInstance = null);
      }
      _updatePosition(t) {
        let e = t.getConfig().positionStrategy,
          i = this._getOrigin(),
          o = this._getOverlayPosition();
        e.withPositions([
          this._addOffset(v(v({}, i.main), o.main)),
          this._addOffset(v(v({}, i.fallback), o.fallback)),
        ]);
      }
      _addOffset(t) {
        let e = Ie,
          i = !this._dir || this._dir.value == "ltr";
        return (
          t.originY === "top"
            ? (t.offsetY = -e)
            : t.originY === "bottom"
              ? (t.offsetY = e)
              : t.originX === "start"
                ? (t.offsetX = i ? -e : e)
                : t.originX === "end" && (t.offsetX = i ? e : -e),
          t
        );
      }
      _getOrigin() {
        let t = !this._dir || this._dir.value == "ltr",
          e = this.position,
          i;
        e == "above" || e == "below"
          ? (i = {
              originX: "center",
              originY: e == "above" ? "top" : "bottom",
            })
          : e == "before" || (e == "left" && t) || (e == "right" && !t)
            ? (i = { originX: "start", originY: "center" })
            : (e == "after" || (e == "right" && t) || (e == "left" && !t)) &&
              (i = { originX: "end", originY: "center" });
        let { x: o, y: n } = this._invertPosition(i.originX, i.originY);
        return { main: i, fallback: { originX: o, originY: n } };
      }
      _getOverlayPosition() {
        let t = !this._dir || this._dir.value == "ltr",
          e = this.position,
          i;
        e == "above"
          ? (i = { overlayX: "center", overlayY: "bottom" })
          : e == "below"
            ? (i = { overlayX: "center", overlayY: "top" })
            : e == "before" || (e == "left" && t) || (e == "right" && !t)
              ? (i = { overlayX: "end", overlayY: "center" })
              : (e == "after" || (e == "right" && t) || (e == "left" && !t)) &&
                (i = { overlayX: "start", overlayY: "center" });
        let { x: o, y: n } = this._invertPosition(i.overlayX, i.overlayY);
        return { main: i, fallback: { overlayX: o, overlayY: n } };
      }
      _updateTooltipMessage() {
        this._tooltipInstance &&
          ((this._tooltipInstance.message = this.message),
          this._tooltipInstance._markForCheck(),
          this._ngZone.onMicrotaskEmpty
            .pipe(k(1), f(this._destroyed))
            .subscribe(() => {
              this._tooltipInstance && this._overlayRef.updatePosition();
            }));
      }
      _setTooltipClass(t) {
        this._tooltipInstance &&
          ((this._tooltipInstance.tooltipClass = t),
          this._tooltipInstance._markForCheck());
      }
      _invertPosition(t, e) {
        return (
          this.position === "above" || this.position === "below"
            ? e === "top"
              ? (e = "bottom")
              : e === "bottom" && (e = "top")
            : t === "end"
              ? (t = "start")
              : t === "start" && (t = "end"),
          { x: t, y: e }
        );
      }
      _updateCurrentPositionClass(t) {
        let { overlayY: e, originX: i, originY: o } = t,
          n;
        if (
          (e === "center"
            ? this._dir && this._dir.value === "rtl"
              ? (n = i === "end" ? "left" : "right")
              : (n = i === "start" ? "left" : "right")
            : (n = e === "bottom" && o === "top" ? "above" : "below"),
          n !== this._currentPosition)
        ) {
          let a = this._overlayRef;
          if (a) {
            let h = `${this._cssClassPrefix}-${Zt}-`;
            a.removePanelClass(h + this._currentPosition),
              a.addPanelClass(h + n);
          }
          this._currentPosition = n;
        }
      }
      _setupPointerEnterEventsIfNeeded() {
        this._disabled ||
          !this.message ||
          !this._viewInitialized ||
          this._passiveListeners.length ||
          (this._platformSupportsMouseEvents()
            ? this._passiveListeners.push([
                "mouseenter",
                (t) => {
                  this._setupPointerExitEventsIfNeeded();
                  let e;
                  t.x !== void 0 && t.y !== void 0 && (e = t),
                    this.show(void 0, e);
                },
              ])
            : this.touchGestures !== "off" &&
              (this._disableNativeGesturesIfNecessary(),
              this._passiveListeners.push([
                "touchstart",
                (t) => {
                  let e = t.targetTouches?.[0],
                    i = e ? { x: e.clientX, y: e.clientY } : void 0;
                  this._setupPointerExitEventsIfNeeded(),
                    clearTimeout(this._touchstartTimeout);
                  let o = 500;
                  this._touchstartTimeout = setTimeout(
                    () => this.show(void 0, i),
                    this._defaultOptions.touchLongPressShowDelay ?? o,
                  );
                },
              ])),
          this._addListeners(this._passiveListeners));
      }
      _setupPointerExitEventsIfNeeded() {
        if (this._pointerExitEventsInitialized) return;
        this._pointerExitEventsInitialized = !0;
        let t = [];
        if (this._platformSupportsMouseEvents())
          t.push(
            [
              "mouseleave",
              (e) => {
                let i = e.relatedTarget;
                (!i || !this._overlayRef?.overlayElement.contains(i)) &&
                  this.hide();
              },
            ],
            ["wheel", (e) => this._wheelListener(e)],
          );
        else if (this.touchGestures !== "off") {
          this._disableNativeGesturesIfNecessary();
          let e = () => {
            clearTimeout(this._touchstartTimeout),
              this.hide(this._defaultOptions.touchendHideDelay);
          };
          t.push(["touchend", e], ["touchcancel", e]);
        }
        this._addListeners(t), this._passiveListeners.push(...t);
      }
      _addListeners(t) {
        t.forEach(([e, i]) => {
          this._elementRef.nativeElement.addEventListener(e, i, Qt);
        });
      }
      _platformSupportsMouseEvents() {
        return !this._platform.IOS && !this._platform.ANDROID;
      }
      _wheelListener(t) {
        if (this._isTooltipVisible()) {
          let e = this._document.elementFromPoint(t.clientX, t.clientY),
            i = this._elementRef.nativeElement;
          e !== i && !i.contains(e) && this.hide();
        }
      }
      _disableNativeGesturesIfNecessary() {
        let t = this.touchGestures;
        if (t !== "off") {
          let e = this._elementRef.nativeElement,
            i = e.style;
          (t === "on" ||
            (e.nodeName !== "INPUT" && e.nodeName !== "TEXTAREA")) &&
            (i.userSelect =
              i.msUserSelect =
              i.webkitUserSelect =
              i.MozUserSelect =
                "none"),
            (t === "on" || !e.draggable) && (i.webkitUserDrag = "none"),
            (i.touchAction = "none"),
            (i.webkitTapHighlightColor = "transparent");
        }
      }
    };
    (s.ɵfac = function (e) {
      return new (e || s)(
        l($),
        l(p),
        l(Ut),
        l(mt),
        l(pt),
        l(Nt),
        l(zt),
        l(Vt),
        l(ue),
        l(Ht),
        l(ge, 8),
        l(N),
      );
    }),
      (s.ɵdir = ct({
        type: s,
        selectors: [["", "matTooltip", ""]],
        hostAttrs: [1, "mat-mdc-tooltip-trigger"],
        hostVars: 2,
        hostBindings: function (e, i) {
          e & 2 && O("mat-mdc-tooltip-disabled", i.disabled);
        },
        inputs: {
          position: [c.None, "matTooltipPosition", "position"],
          positionAtOrigin: [
            c.None,
            "matTooltipPositionAtOrigin",
            "positionAtOrigin",
          ],
          disabled: [c.None, "matTooltipDisabled", "disabled"],
          showDelay: [c.None, "matTooltipShowDelay", "showDelay"],
          hideDelay: [c.None, "matTooltipHideDelay", "hideDelay"],
          touchGestures: [c.None, "matTooltipTouchGestures", "touchGestures"],
          message: [c.None, "matTooltip", "message"],
          tooltipClass: [c.None, "matTooltipClass", "tooltipClass"],
        },
        exportAs: ["matTooltip"],
        standalone: !0,
      }));
    let r = s;
    return r;
  })(),
  Ce = (() => {
    let s = class s {
      constructor(t, e, i) {
        (this._changeDetectorRef = t),
          (this._elementRef = e),
          (this._isMultiline = !1),
          (this._closeOnInteraction = !1),
          (this._isVisible = !1),
          (this._onHide = new W()),
          (this._showAnimation = "mat-mdc-tooltip-show"),
          (this._hideAnimation = "mat-mdc-tooltip-hide"),
          (this._animationsDisabled = i === "NoopAnimations");
      }
      show(t) {
        this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId),
          (this._showTimeoutId = setTimeout(() => {
            this._toggleVisibility(!0), (this._showTimeoutId = void 0);
          }, t));
      }
      hide(t) {
        this._showTimeoutId != null && clearTimeout(this._showTimeoutId),
          (this._hideTimeoutId = setTimeout(() => {
            this._toggleVisibility(!1), (this._hideTimeoutId = void 0);
          }, t));
      }
      afterHidden() {
        return this._onHide;
      }
      isVisible() {
        return this._isVisible;
      }
      ngOnDestroy() {
        this._cancelPendingAnimations(),
          this._onHide.complete(),
          (this._triggerElement = null);
      }
      _handleBodyInteraction() {
        this._closeOnInteraction && this.hide(0);
      }
      _markForCheck() {
        this._changeDetectorRef.markForCheck();
      }
      _handleMouseLeave({ relatedTarget: t }) {
        (!t || !this._triggerElement.contains(t)) &&
          (this.isVisible()
            ? this.hide(this._mouseLeaveHideDelay)
            : this._finalizeAnimation(!1));
      }
      _onShow() {
        (this._isMultiline = this._isTooltipMultiline()), this._markForCheck();
      }
      _isTooltipMultiline() {
        let t = this._elementRef.nativeElement.getBoundingClientRect();
        return t.height > ye && t.width >= be;
      }
      _handleAnimationEnd({ animationName: t }) {
        (t === this._showAnimation || t === this._hideAnimation) &&
          this._finalizeAnimation(t === this._showAnimation);
      }
      _cancelPendingAnimations() {
        this._showTimeoutId != null && clearTimeout(this._showTimeoutId),
          this._hideTimeoutId != null && clearTimeout(this._hideTimeoutId),
          (this._showTimeoutId = this._hideTimeoutId = void 0);
      }
      _finalizeAnimation(t) {
        t
          ? (this._closeOnInteraction = !0)
          : this.isVisible() || this._onHide.next();
      }
      _toggleVisibility(t) {
        let e = this._tooltip.nativeElement,
          i = this._showAnimation,
          o = this._hideAnimation;
        if (
          (e.classList.remove(t ? o : i),
          e.classList.add(t ? i : o),
          (this._isVisible = t),
          t &&
            !this._animationsDisabled &&
            typeof getComputedStyle == "function")
        ) {
          let n = getComputedStyle(e);
          (n.getPropertyValue("animation-duration") === "0s" ||
            n.getPropertyValue("animation-name") === "none") &&
            (this._animationsDisabled = !0);
        }
        t && this._onShow(),
          this._animationsDisabled &&
            (e.classList.add("_mat-animation-noopable"),
            this._finalizeAnimation(t));
      }
    };
    (s.ɵfac = function (e) {
      return new (e || s)(l(xt), l(p), l(dt, 8));
    }),
      (s.ɵcmp = w({
        type: s,
        selectors: [["mat-tooltip-component"]],
        viewQuery: function (e, i) {
          if ((e & 1 && Ct(me, 7), e & 2)) {
            let o;
            wt((o = St())) && (i._tooltip = o.first);
          }
        },
        hostAttrs: ["aria-hidden", "true"],
        hostVars: 2,
        hostBindings: function (e, i) {
          e & 1 &&
            T("mouseleave", function (n) {
              return i._handleMouseLeave(n);
            }),
            e & 2 && vt("zoom", i.isVisible() ? 1 : null);
        },
        standalone: !0,
        features: [A],
        decls: 4,
        vars: 4,
        consts: [
          ["tooltip", ""],
          [
            1,
            "mdc-tooltip",
            "mdc-tooltip--shown",
            "mat-mdc-tooltip",
            3,
            "animationend",
            "ngClass",
          ],
          [1, "mdc-tooltip__surface", "mdc-tooltip__surface-animation"],
        ],
        template: function (e, i) {
          if (e & 1) {
            let o = B();
            g(0, "div", 1, 0),
              T("animationend", function (a) {
                return F(o), D(i._handleAnimationEnd(a));
              }),
              g(2, "div", 2),
              E(3),
              M()();
          }
          e & 2 &&
            (O("mdc-tooltip--multiline", i._isMultiline),
            Y("ngClass", i.tooltipClass),
            P(3),
            At(i.message));
        },
        dependencies: [Pt],
        styles: [
          '.mdc-tooltip__surface{word-break:break-all;word-break:var(--mdc-tooltip-word-break, normal);overflow-wrap:anywhere}.mdc-tooltip--showing-transition .mdc-tooltip__surface-animation{transition:opacity 150ms 0ms cubic-bezier(0, 0, 0.2, 1),transform 150ms 0ms cubic-bezier(0, 0, 0.2, 1)}.mdc-tooltip--hide-transition .mdc-tooltip__surface-animation{transition:opacity 75ms 0ms cubic-bezier(0.4, 0, 1, 1)}.mdc-tooltip{position:fixed;display:none;z-index:9}.mdc-tooltip-wrapper--rich{position:relative}.mdc-tooltip--shown,.mdc-tooltip--showing,.mdc-tooltip--hide{display:inline-flex}.mdc-tooltip--shown.mdc-tooltip--rich,.mdc-tooltip--showing.mdc-tooltip--rich,.mdc-tooltip--hide.mdc-tooltip--rich{display:inline-block;left:-320px;position:absolute}.mdc-tooltip__surface{line-height:16px;padding:4px 8px;min-width:40px;max-width:200px;min-height:24px;max-height:40vh;box-sizing:border-box;overflow:hidden;text-align:center}.mdc-tooltip__surface::before{position:absolute;box-sizing:border-box;width:100%;height:100%;top:0;left:0;border:1px solid rgba(0,0,0,0);border-radius:inherit;content:"";pointer-events:none}@media screen and (forced-colors: active){.mdc-tooltip__surface::before{border-color:CanvasText}}.mdc-tooltip--rich .mdc-tooltip__surface{align-items:flex-start;display:flex;flex-direction:column;min-height:24px;min-width:40px;max-width:320px;position:relative}.mdc-tooltip--multiline .mdc-tooltip__surface{text-align:left}[dir=rtl] .mdc-tooltip--multiline .mdc-tooltip__surface,.mdc-tooltip--multiline .mdc-tooltip__surface[dir=rtl]{text-align:right}.mdc-tooltip__surface .mdc-tooltip__title{margin:0 8px}.mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(200px - 2*8px);margin:8px;text-align:left}[dir=rtl] .mdc-tooltip__surface .mdc-tooltip__content,.mdc-tooltip__surface .mdc-tooltip__content[dir=rtl]{text-align:right}.mdc-tooltip--rich .mdc-tooltip__surface .mdc-tooltip__content{max-width:calc(320px - 2*8px);align-self:stretch}.mdc-tooltip__surface .mdc-tooltip__content-link{text-decoration:none}.mdc-tooltip--rich-actions,.mdc-tooltip__content,.mdc-tooltip__title{z-index:1}.mdc-tooltip__surface-animation{opacity:0;transform:scale(0.8);will-change:transform,opacity}.mdc-tooltip--shown .mdc-tooltip__surface-animation{transform:scale(1);opacity:1}.mdc-tooltip--hide .mdc-tooltip__surface-animation{transform:scale(1)}.mdc-tooltip__caret-surface-top,.mdc-tooltip__caret-surface-bottom{position:absolute;height:24px;width:24px;transform:rotate(35deg) skewY(20deg) scaleX(0.9396926208)}.mdc-tooltip__caret-surface-top .mdc-elevation-overlay,.mdc-tooltip__caret-surface-bottom .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-tooltip__caret-surface-bottom{box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);outline:1px solid rgba(0,0,0,0);z-index:-1}@media screen and (forced-colors: active){.mdc-tooltip__caret-surface-bottom{outline-color:CanvasText}}.mat-mdc-tooltip .mdc-tooltip__surface{background-color:var(--mdc-plain-tooltip-container-color)}.mat-mdc-tooltip .mdc-tooltip__surface{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__caret-surface-top,.mat-mdc-tooltip .mdc-tooltip__caret-surface-bottom{border-radius:var(--mdc-plain-tooltip-container-shape)}.mat-mdc-tooltip .mdc-tooltip__surface{color:var(--mdc-plain-tooltip-supporting-text-color)}.mat-mdc-tooltip .mdc-tooltip__surface{font-family:var(--mdc-plain-tooltip-supporting-text-font);line-height:var(--mdc-plain-tooltip-supporting-text-line-height);font-size:var(--mdc-plain-tooltip-supporting-text-size);font-weight:var(--mdc-plain-tooltip-supporting-text-weight);letter-spacing:var(--mdc-plain-tooltip-supporting-text-tracking)}.mat-mdc-tooltip{position:relative;transform:scale(0)}.mat-mdc-tooltip::before{content:"";top:0;right:0;bottom:0;left:0;z-index:-1;position:absolute}.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before{top:-8px}.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before{bottom:-8px}.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before{left:-8px}.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before{right:-8px}.mat-mdc-tooltip._mat-animation-noopable{animation:none;transform:scale(1)}.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive{pointer-events:none}@keyframes mat-mdc-tooltip-show{0%{opacity:0;transform:scale(0.8)}100%{opacity:1;transform:scale(1)}}@keyframes mat-mdc-tooltip-hide{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(0.8)}}.mat-mdc-tooltip-show{animation:mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards}.mat-mdc-tooltip-hide{animation:mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards}',
        ],
        encapsulation: 2,
        changeDetection: 0,
      }));
    let r = s;
    return r;
  })();
var we = ["addBtn"],
  Si = (() => {
    let s = class s {
      constructor() {
        (this.count = U.required()),
          (this.available = U.required()),
          (this.productName = U.required()),
          (this.increment = q()),
          (this.decrement = q()),
          (this.addBtn = ut.required("addBtn", { read: p }));
      }
      focusAddBtn() {
        this.addBtn().nativeElement.focus();
      }
    };
    (s.ɵfac = function (e) {
      return new (e || s)();
    }),
      (s.ɵcmp = w({
        type: s,
        selectors: [["app-cart-count-controls"]],
        viewQuery: function (e, i) {
          e & 1 && Tt(i.addBtn, we, 5, p), e & 2 && Et();
        },
        inputs: {
          count: [c.SignalBased, "count"],
          available: [c.SignalBased, "available"],
          productName: [c.SignalBased, "productName"],
        },
        outputs: { increment: "increment", decrement: "decrement" },
        exportAs: ["countControls"],
        standalone: !0,
        features: [A],
        decls: 8,
        vars: 6,
        consts: [
          ["addBtn", ""],
          ["color", "accent", "mat-icon-button", "", 3, "click", "matTooltip"],
          [
            "color",
            "accent",
            "mat-icon-button",
            "",
            3,
            "click",
            "disabled",
            "matTooltip",
          ],
        ],
        template: function (e, i) {
          if (e & 1) {
            let o = B();
            g(0, "button", 1),
              T("click", function () {
                return F(o), D(i.decrement.emit());
              }),
              g(1, "mat-icon"),
              E(2, "remove"),
              M()(),
              E(3),
              g(4, "button", 2, 0),
              T("click", function () {
                return F(o), D(i.increment.emit());
              }),
              g(6, "mat-icon"),
              E(7, "add"),
              M()();
          }
          e & 2 &&
            (Z("matTooltip", "Remove ", i.productName(), " from cart"),
            P(3),
            Rt(
              " ",
              i.count(),
              `
`,
            ),
            P(),
            Z("matTooltip", "Add ", i.productName(), " to cart"),
            Y("disabled", !!i.available() && i.count() >= i.available()));
        },
        dependencies: [Yt, Kt, qt],
        styles: ["[_nghost-%COMP%]{display:flex;align-items:center;gap:10px}"],
        changeDetection: 0,
      }));
    let r = s;
    return r;
  })();
export { Ee as a, qt as b, Kt as c, Si as d };
