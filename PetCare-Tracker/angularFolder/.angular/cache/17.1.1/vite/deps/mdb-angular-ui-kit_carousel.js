import {
  CommonModule,
  NgForOf,
  NgIf
} from "./chunk-YX3563TO.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  NgModule,
  Output,
  setClassMetadata,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryRefresh,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtext
} from "./chunk-2V5SS7FU.js";
import {
  Subject,
  fromEvent,
  take,
  takeUntil
} from "./chunk-WSA2QMXP.js";
import "./chunk-J4B6MK7R.js";

// node_modules/@angular/cdk/fesm2022/coercion.mjs
function coerceBooleanProperty(value) {
  return value != null && `${value}` !== "false";
}

// node_modules/mdb-angular-ui-kit/fesm2022/mdb-angular-ui-kit-carousel.mjs
var _c0 = ["*"];
function MdbCarouselComponent_div_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 7);
    ɵɵlistener("click", function MdbCarouselComponent_div_1_button_1_Template_button_click_0_listener() {
      const restoredCtx = ɵɵrestoreView(_r7);
      const i_r5 = restoredCtx.index;
      const ctx_r6 = ɵɵnextContext(2);
      return ɵɵresetView(ctx_r6.to(i_r5));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r3 = ɵɵnextContext(2);
    ɵɵclassProp("active", i_r5 === ctx_r3.activeSlide);
    ɵɵattribute("aria-current", i_r5 === ctx_r3.activeSlide);
  }
}
function MdbCarouselComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 5);
    ɵɵtemplate(1, MdbCarouselComponent_div_1_button_1_Template, 1, 3, "button", 6);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngForOf", ctx_r0.items);
  }
}
function MdbCarouselComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 8);
    ɵɵlistener("click", function MdbCarouselComponent_button_4_Template_button_click_0_listener() {
      ɵɵrestoreView(_r9);
      const ctx_r8 = ɵɵnextContext();
      return ɵɵresetView(ctx_r8.prev());
    });
    ɵɵelement(1, "span", 9);
    ɵɵelementStart(2, "span", 10);
    ɵɵtext(3, "Previous");
    ɵɵelementEnd()();
  }
}
function MdbCarouselComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "button", 11);
    ɵɵlistener("click", function MdbCarouselComponent_button_5_Template_button_click_0_listener() {
      ɵɵrestoreView(_r11);
      const ctx_r10 = ɵɵnextContext();
      return ɵɵresetView(ctx_r10.next());
    });
    ɵɵelement(1, "span", 12);
    ɵɵelementStart(2, "span", 10);
    ɵɵtext(3, "Next");
    ɵɵelementEnd()();
  }
}
var MdbCarouselItemComponent = class _MdbCarouselItemComponent {
  _elementRef;
  interval = null;
  carouselItem = true;
  active = false;
  next = false;
  prev = false;
  start = false;
  end = false;
  get host() {
    return this._elementRef.nativeElement;
  }
  constructor(_elementRef) {
    this._elementRef = _elementRef;
  }
  static ɵfac = function MdbCarouselItemComponent_Factory(t) {
    return new (t || _MdbCarouselItemComponent)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MdbCarouselItemComponent,
    selectors: [["mdb-carousel-item"]],
    hostVars: 12,
    hostBindings: function MdbCarouselItemComponent_HostBindings(rf, ctx) {
      if (rf & 2) {
        ɵɵclassProp("carousel-item", ctx.carouselItem)("active", ctx.active)("carousel-item-next", ctx.next)("carousel-item-prev", ctx.prev)("carousel-item-start", ctx.start)("carousel-item-end", ctx.end);
      }
    },
    inputs: {
      interval: "interval"
    },
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MdbCarouselItemComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MdbCarouselItemComponent, [{
    type: Component,
    args: [{
      selector: "mdb-carousel-item",
      template: "<ng-content></ng-content>"
    }]
  }], () => [{
    type: ElementRef
  }], {
    interval: [{
      type: Input
    }],
    carouselItem: [{
      type: HostBinding,
      args: ["class.carousel-item"]
    }],
    active: [{
      type: HostBinding,
      args: ["class.active"]
    }],
    next: [{
      type: HostBinding,
      args: ["class.carousel-item-next"]
    }],
    prev: [{
      type: HostBinding,
      args: ["class.carousel-item-prev"]
    }],
    start: [{
      type: HostBinding,
      args: ["class.carousel-item-start"]
    }],
    end: [{
      type: HostBinding,
      args: ["class.carousel-item-end"]
    }]
  });
})();
var Direction;
(function(Direction2) {
  Direction2[Direction2["UNKNOWN"] = 0] = "UNKNOWN";
  Direction2[Direction2["NEXT"] = 1] = "NEXT";
  Direction2[Direction2["PREV"] = 2] = "PREV";
})(Direction || (Direction = {}));
var MdbCarouselComponent = class _MdbCarouselComponent {
  _elementRef;
  _cdRef;
  _items;
  get items() {
    return this._items && this._items.toArray();
  }
  animation = "slide";
  get controls() {
    return this._controls;
  }
  set controls(value) {
    this._controls = coerceBooleanProperty(value);
  }
  _controls = false;
  get dark() {
    return this._dark;
  }
  set dark(value) {
    this._dark = coerceBooleanProperty(value);
  }
  _dark = false;
  get indicators() {
    return this._indicators;
  }
  set indicators(value) {
    this._indicators = coerceBooleanProperty(value);
  }
  _indicators = false;
  get ride() {
    return this._ride;
  }
  set ride(value) {
    this._ride = coerceBooleanProperty(value);
  }
  _ride = true;
  get interval() {
    return this._interval;
  }
  set interval(value) {
    this._interval = value;
    if (this.items) {
      this._restartInterval();
    }
  }
  _interval = 5e3;
  keyboard = true;
  pause = true;
  wrap = true;
  slide = new EventEmitter();
  slideChange = new EventEmitter();
  get activeSlide() {
    return this._activeSlide;
  }
  set activeSlide(index) {
    if (this.items.length && this._activeSlide !== index) {
      this._activeSlide = index;
      this._restartInterval();
    }
  }
  _activeSlide = 0;
  _lastInterval;
  _isPlaying = false;
  _isSliding = false;
  _destroy$ = new Subject();
  onMouseEnter() {
    if (this.pause && this._isPlaying) {
      this.stop();
    }
  }
  onMouseLeave() {
    if (this.pause && !this._isPlaying) {
      this.play();
    }
  }
  display = true;
  constructor(_elementRef, _cdRef) {
    this._elementRef = _elementRef;
    this._cdRef = _cdRef;
  }
  ngAfterViewInit() {
    Promise.resolve().then(() => {
      this._setActiveSlide(this._activeSlide);
      if (this.interval > 0 && this.ride) {
        this.play();
      }
      this._cdRef.markForCheck();
    });
    if (this.keyboard) {
      fromEvent(this._elementRef.nativeElement, "keydown").pipe(takeUntil(this._destroy$)).subscribe((event) => {
        if (event.key === "ArrowRight") {
          this.next();
        } else if (event.key === "ArrowLeft") {
          this.prev();
        }
      });
    }
  }
  ngOnDestroy() {
    this._destroy$.next();
    this._destroy$.complete();
  }
  _setActiveSlide(index) {
    const currentSlide = this.items[this._activeSlide];
    currentSlide.active = false;
    const newSlide = this.items[index];
    newSlide.active = true;
    this._activeSlide = index;
  }
  _restartInterval() {
    this._resetInterval();
    const activeElement = this.items[this.activeSlide];
    const interval = activeElement.interval ? activeElement.interval : this.interval;
    if (!isNaN(interval) && interval > 0) {
      this._lastInterval = setInterval(() => {
        const nInterval = +interval;
        if (this._isPlaying && !isNaN(nInterval) && nInterval > 0) {
          this.next();
          this._cdRef.markForCheck();
        } else {
          this.stop();
        }
      }, interval);
    }
  }
  _resetInterval() {
    if (this._lastInterval) {
      clearInterval(this._lastInterval);
      this._lastInterval = null;
    }
  }
  play() {
    if (!this._isPlaying) {
      this._isPlaying = true;
      this._restartInterval();
    }
  }
  stop() {
    if (this._isPlaying) {
      this._isPlaying = false;
      this._resetInterval();
    }
  }
  to(index) {
    if (index > this.items.length - 1 || index < 0) {
      return;
    }
    if (this.activeSlide === index) {
      this.stop();
      this.play();
      return;
    }
    const direction = index > this.activeSlide ? Direction.NEXT : Direction.PREV;
    this._animateSlides(direction, this.activeSlide, index);
    this.activeSlide = index;
  }
  next() {
    if (!this._isSliding) {
      this._slide(Direction.NEXT);
    }
  }
  prev() {
    if (!this._isSliding) {
      this._slide(Direction.PREV);
    }
  }
  _slide(direction) {
    const isFirst = this._activeSlide === 0;
    const isLast = this._activeSlide === this.items.length - 1;
    if (!this.wrap) {
      if (direction === Direction.NEXT && isLast || direction === Direction.PREV && isFirst) {
        return;
      }
    }
    const newSlideIndex = this._getNewSlideIndex(direction);
    this._animateSlides(direction, this.activeSlide, newSlideIndex);
    this.activeSlide = newSlideIndex;
    this.slide.emit();
  }
  _animateSlides(direction, currentIndex, nextIndex) {
    const currentItem = this.items[currentIndex];
    const nextItem = this.items[nextIndex];
    const currentEl = currentItem.host;
    const nextEl = nextItem.host;
    this._isSliding = true;
    if (this._isPlaying) {
      this.stop();
    }
    if (direction === Direction.NEXT) {
      nextItem.next = true;
      setTimeout(() => {
        this._reflow(nextEl);
        currentItem.start = true;
        nextItem.start = true;
        this._cdRef.markForCheck();
      }, 0);
      const transitionDuration = 600;
      fromEvent(currentEl, "transitionend").pipe(take(1)).subscribe(() => {
        nextItem.next = false;
        nextItem.start = false;
        nextItem.active = true;
        currentItem.active = false;
        currentItem.start = false;
        currentItem.next = false;
        this.slideChange.emit();
        this._isSliding = false;
      });
      this._emulateTransitionEnd(currentEl, transitionDuration);
    } else if (direction === Direction.PREV) {
      nextItem.prev = true;
      setTimeout(() => {
        this._reflow(nextEl);
        currentItem.end = true;
        nextItem.end = true;
        this._cdRef.markForCheck();
      }, 0);
      const transitionDuration = 600;
      fromEvent(currentEl, "transitionend").pipe(take(1)).subscribe(() => {
        nextItem.prev = false;
        nextItem.end = false;
        nextItem.active = true;
        currentItem.active = false;
        currentItem.end = false;
        currentItem.prev = false;
        this.slideChange.emit();
        this._isSliding = false;
      });
      this._emulateTransitionEnd(currentEl, transitionDuration);
    }
    if (!this._isPlaying && this.interval > 0) {
      this.play();
    }
  }
  _reflow(element) {
    return element.offsetHeight;
  }
  _emulateTransitionEnd(element, duration) {
    let eventEmitted = false;
    const durationPadding = 5;
    const emulatedDuration = duration + durationPadding;
    fromEvent(element, "transitionend").pipe(take(1)).subscribe(() => {
      eventEmitted = true;
    });
    setTimeout(() => {
      if (!eventEmitted) {
        element.dispatchEvent(new Event("transitionend"));
      }
    }, emulatedDuration);
  }
  _getNewSlideIndex(direction) {
    let newSlideIndex;
    if (direction === Direction.NEXT) {
      newSlideIndex = this._getNextSlideIndex();
    }
    if (direction === Direction.PREV) {
      newSlideIndex = this._getPrevSlideIndex();
    }
    return newSlideIndex;
  }
  _getNextSlideIndex() {
    const isLast = this._activeSlide === this.items.length - 1;
    if (!isLast) {
      return this._activeSlide + 1;
    } else if (this.wrap && isLast) {
      return 0;
    } else {
      return this._activeSlide;
    }
  }
  _getPrevSlideIndex() {
    const isFirst = this._activeSlide === 0;
    if (!isFirst) {
      return this._activeSlide - 1;
    } else if (this.wrap && isFirst) {
      return this.items.length - 1;
    } else {
      return this._activeSlide;
    }
  }
  static ngAcceptInputType_controls;
  static ngAcceptInputType_dark;
  static ngAcceptInputType_indicators;
  static ngAcceptInputType_ride;
  static ɵfac = function MdbCarouselComponent_Factory(t) {
    return new (t || _MdbCarouselComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _MdbCarouselComponent,
    selectors: [["mdb-carousel"]],
    contentQueries: function MdbCarouselComponent_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, MdbCarouselItemComponent, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx._items = _t);
      }
    },
    hostVars: 2,
    hostBindings: function MdbCarouselComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("mouseenter", function MdbCarouselComponent_mouseenter_HostBindingHandler() {
          return ctx.onMouseEnter();
        })("mouseleave", function MdbCarouselComponent_mouseleave_HostBindingHandler() {
          return ctx.onMouseLeave();
        });
      }
      if (rf & 2) {
        ɵɵclassProp("d-block", ctx.display);
      }
    },
    inputs: {
      animation: "animation",
      controls: "controls",
      dark: "dark",
      indicators: "indicators",
      ride: "ride",
      interval: "interval",
      keyboard: "keyboard",
      pause: "pause",
      wrap: "wrap"
    },
    outputs: {
      slide: "slide",
      slideChange: "slideChange"
    },
    ngContentSelectors: _c0,
    decls: 6,
    vars: 7,
    consts: [[1, "carousel", "slide"], ["class", "carousel-indicators", 4, "ngIf"], [1, "carousel-inner"], ["class", "carousel-control-prev", "type", "button", 3, "click", 4, "ngIf"], ["class", "carousel-control-next", "type", "button", 3, "click", 4, "ngIf"], [1, "carousel-indicators"], ["type", "button", 3, "active", "click", 4, "ngFor", "ngForOf"], ["type", "button", 3, "click"], ["type", "button", 1, "carousel-control-prev", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-prev-icon"], [1, "visually-hidden"], ["type", "button", 1, "carousel-control-next", 3, "click"], ["aria-hidden", "true", 1, "carousel-control-next-icon"]],
    template: function MdbCarouselComponent_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵelementStart(0, "div", 0);
        ɵɵtemplate(1, MdbCarouselComponent_div_1_Template, 2, 1, "div", 1);
        ɵɵelementStart(2, "div", 2);
        ɵɵprojection(3);
        ɵɵelementEnd();
        ɵɵtemplate(4, MdbCarouselComponent_button_4_Template, 4, 0, "button", 3)(5, MdbCarouselComponent_button_5_Template, 4, 0, "button", 4);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassProp("carousel-fade", ctx.animation === "fade")("carousel-dark", ctx.dark);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.indicators);
        ɵɵadvance(3);
        ɵɵproperty("ngIf", ctx.controls);
        ɵɵadvance();
        ɵɵproperty("ngIf", ctx.controls);
      }
    },
    dependencies: [NgForOf, NgIf],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MdbCarouselComponent, [{
    type: Component,
    args: [{
      selector: "mdb-carousel",
      changeDetection: ChangeDetectionStrategy.OnPush,
      template: `<div
  class="carousel slide"
  [class.carousel-fade]="animation === 'fade'"
  [class.carousel-dark]="dark"
>
  <div class="carousel-indicators" *ngIf="indicators">
    <button
      *ngFor="let item of items; let i = index"
      type="button"
      [class.active]="i === activeSlide"
      [attr.aria-current]="i === activeSlide"
      (click)="to(i)"
    ></button>
  </div>

  <div class="carousel-inner">
    <ng-content></ng-content>
  </div>

  <button *ngIf="controls" class="carousel-control-prev" type="button" (click)="prev()">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button *ngIf="controls" class="carousel-control-next" type="button" (click)="next()">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
`
    }]
  }], () => [{
    type: ElementRef
  }, {
    type: ChangeDetectorRef
  }], {
    _items: [{
      type: ContentChildren,
      args: [MdbCarouselItemComponent]
    }],
    animation: [{
      type: Input
    }],
    controls: [{
      type: Input
    }],
    dark: [{
      type: Input
    }],
    indicators: [{
      type: Input
    }],
    ride: [{
      type: Input
    }],
    interval: [{
      type: Input
    }],
    keyboard: [{
      type: Input
    }],
    pause: [{
      type: Input
    }],
    wrap: [{
      type: Input
    }],
    slide: [{
      type: Output
    }],
    slideChange: [{
      type: Output
    }],
    onMouseEnter: [{
      type: HostListener,
      args: ["mouseenter"]
    }],
    onMouseLeave: [{
      type: HostListener,
      args: ["mouseleave"]
    }],
    display: [{
      type: HostBinding,
      args: ["class.d-block"]
    }]
  });
})();
var MdbCarouselModule = class _MdbCarouselModule {
  static ɵfac = function MdbCarouselModule_Factory(t) {
    return new (t || _MdbCarouselModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _MdbCarouselModule,
    declarations: [MdbCarouselComponent, MdbCarouselItemComponent],
    imports: [CommonModule],
    exports: [MdbCarouselComponent, MdbCarouselItemComponent]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MdbCarouselModule, [{
    type: NgModule,
    args: [{
      declarations: [MdbCarouselComponent, MdbCarouselItemComponent],
      exports: [MdbCarouselComponent, MdbCarouselItemComponent],
      imports: [CommonModule]
    }]
  }], null, null);
})();
export {
  MdbCarouselComponent,
  MdbCarouselItemComponent,
  MdbCarouselModule
};
//# sourceMappingURL=mdb-angular-ui-kit_carousel.js.map
