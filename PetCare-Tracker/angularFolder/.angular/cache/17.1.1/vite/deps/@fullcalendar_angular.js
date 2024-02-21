import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet
} from "./chunk-PV4IVX34.js";
import {
  Calendar,
  CustomRenderingStore
} from "./chunk-5FBHQ4PB.js";
import {
  ChangeDetectorRef,
  Component,
  ContentChild,
  ElementRef,
  Input,
  NgModule,
  ViewChild,
  ViewEncapsulation$1,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵqueryRefresh,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-CO3PTTUU.js";
import {
  __spreadValues
} from "./chunk-J4B6MK7R.js";

// node_modules/@fullcalendar/angular/fesm2020/fullcalendar-angular.mjs
var _c0 = ["*"];
var _c1 = ["rootEl"];
var _c2 = (a0) => ({
  $implicit: a0
});
function TransportContainerComponent_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "div", 1, 2);
    ɵɵelementContainer(2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r0.elClasses || "")("ngStyle", ctx_r0.elStyle || null);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r0.template)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c2, ctx_r0.renderProps));
  }
}
function TransportContainerComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 1, 2);
    ɵɵelementContainer(2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r1.elClasses || "")("ngStyle", ctx_r1.elStyle || null);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r1.template)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c2, ctx_r1.renderProps));
  }
}
function TransportContainerComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 1, 2);
    ɵɵelementContainer(2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r2.elClasses || "")("ngStyle", ctx_r2.elStyle || null);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r2.template)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c2, ctx_r2.renderProps));
  }
}
function TransportContainerComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "tr", 1, 2);
    ɵɵelementContainer(2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r3.elClasses || "")("ngStyle", ctx_r3.elStyle || null);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r3.template)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c2, ctx_r3.renderProps));
  }
}
function TransportContainerComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "th", 1, 2);
    ɵɵelementContainer(2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r4 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r4.elClasses || "")("ngStyle", ctx_r4.elStyle || null);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r4.template)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c2, ctx_r4.renderProps));
  }
}
function TransportContainerComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "td", 1, 2);
    ɵɵelementContainer(2, 3);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r5 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r5.elClasses || "")("ngStyle", ctx_r5.elStyle || null);
    ɵɵadvance(2);
    ɵɵproperty("ngTemplateOutlet", ctx_r5.template)("ngTemplateOutletContext", ɵɵpureFunction1(4, _c2, ctx_r5.renderProps));
  }
}
var _c3 = ["dayHeaderContent"];
var _c4 = ["dayCellContent"];
var _c5 = ["weekNumberContent"];
var _c6 = ["nowIndicatorContent"];
var _c7 = ["eventContent"];
var _c8 = ["slotLaneContent"];
var _c9 = ["slotLabelContent"];
var _c10 = ["allDayContent"];
var _c11 = ["moreLinkContent"];
var _c12 = ["noEventsContent"];
var _c13 = ["resourceAreaHeaderContent"];
var _c14 = ["resourceGroupLabelContent"];
var _c15 = ["resourceLabelContent"];
var _c16 = ["resourceLaneContent"];
var _c17 = ["resourceGroupLaneContent"];
function FullCalendarComponent_transport_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "transport-container", 1);
  }
  if (rf & 2) {
    const customRendering_r1 = ctx.$implicit;
    const ctx_r0 = ɵɵnextContext();
    ɵɵproperty("inPlaceOf", customRendering_r1.containerEl)("reportEl", customRendering_r1.reportNewContainerEl)("elTag", customRendering_r1.elTag)("elClasses", customRendering_r1.elClasses)("elStyle", customRendering_r1.elStyle)("elAttrs", customRendering_r1.elAttrs)("template", ctx_r0.templateMap[customRendering_r1.generatorName])("renderProps", customRendering_r1.renderProps);
  }
}
var OPTION_IS_DEEP = {
  headerToolbar: true,
  footerToolbar: true,
  events: true,
  eventSources: true,
  resources: true
};
var OPTION_INPUT_NAMES = ["events", "eventSources", "resources"];
var hasOwnProperty = Object.prototype.hasOwnProperty;
function deepCopy(input) {
  if (Array.isArray(input)) {
    return input.map(deepCopy);
  } else if (input instanceof Date) {
    return new Date(input.valueOf());
  } else if (typeof input === "object" && input) {
    return mapHash(input, deepCopy);
  } else {
    return input;
  }
}
function mapHash(input, func) {
  const output = {};
  for (const key in input) {
    if (hasOwnProperty.call(input, key)) {
      output[key] = func(input[key], key);
    }
  }
  return output;
}
function deepEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a == "object" && typeof b == "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!deepEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length)
      return false;
    for (i = length; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
        return false;
    for (i = length; i-- !== 0; ) {
      var key = keys[i];
      if (!deepEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
var dummyContainer$1 = typeof document !== "undefined" ? document.createDocumentFragment() : null;
var OffscreenFragmentComponent = class {
  constructor(element) {
    this.element = element;
  }
  ngAfterViewInit() {
    if (dummyContainer$1) {
      dummyContainer$1.appendChild(this.element.nativeElement);
    }
  }
  // invoked BEFORE component removed from DOM
  ngOnDestroy() {
    if (dummyContainer$1) {
      dummyContainer$1.removeChild(this.element.nativeElement);
    }
  }
};
OffscreenFragmentComponent.ɵfac = function OffscreenFragmentComponent_Factory(t) {
  return new (t || OffscreenFragmentComponent)(ɵɵdirectiveInject(ElementRef));
};
OffscreenFragmentComponent.ɵcmp = ɵɵdefineComponent({
  type: OffscreenFragmentComponent,
  selectors: [["offscreen-fragment"]],
  ngContentSelectors: _c0,
  decls: 1,
  vars: 0,
  template: function OffscreenFragmentComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵprojectionDef();
      ɵɵprojection(0);
    }
  },
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OffscreenFragmentComponent, [{
    type: Component,
    args: [{
      selector: "offscreen-fragment",
      template: "<ng-content></ng-content>",
      encapsulation: ViewEncapsulation$1.None
    }]
  }], function() {
    return [{
      type: ElementRef
    }];
  }, null);
})();
var dummyContainer = typeof document !== "undefined" ? document.createDocumentFragment() : null;
var TransportContainerComponent = class {
  ngAfterViewInit() {
    const rootEl = this.rootElRef?.nativeElement;
    replaceEl(rootEl, this.inPlaceOf);
    applyElAttrs(rootEl, void 0, this.elAttrs);
    this.inPlaceOf.style.display = "none";
    this.reportEl(rootEl);
  }
  ngOnChanges(changes) {
    const rootEl = this.rootElRef?.nativeElement;
    if (rootEl) {
      if (this.inPlaceOf.parentNode !== dummyContainer) {
        replaceEl(rootEl, this.inPlaceOf);
        applyElAttrs(rootEl, void 0, this.elAttrs);
        this.reportEl(rootEl);
      } else {
        const elAttrsChange = changes["elAttrs"];
        if (elAttrsChange) {
          applyElAttrs(rootEl, elAttrsChange.previousValue, elAttrsChange.currentValue);
        }
      }
    }
  }
  // invoked BEFORE component removed from DOM
  ngOnDestroy() {
    if (
      // protect against Preact recreating and rerooting inPlaceOf element
      this.inPlaceOf.parentNode === dummyContainer && dummyContainer
    ) {
      dummyContainer.removeChild(this.inPlaceOf);
    }
    this.reportEl(null);
  }
};
TransportContainerComponent.ɵfac = function TransportContainerComponent_Factory(t) {
  return new (t || TransportContainerComponent)();
};
TransportContainerComponent.ɵcmp = ɵɵdefineComponent({
  type: TransportContainerComponent,
  selectors: [["transport-container"]],
  viewQuery: function TransportContainerComponent_Query(rf, ctx) {
    if (rf & 1) {
      ɵɵviewQuery(_c1, 5);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.rootElRef = _t.first);
    }
  },
  inputs: {
    inPlaceOf: "inPlaceOf",
    reportEl: "reportEl",
    elTag: "elTag",
    elClasses: "elClasses",
    elStyle: "elStyle",
    elAttrs: "elAttrs",
    template: "template",
    renderProps: "renderProps"
  },
  features: [ɵɵNgOnChangesFeature],
  decls: 6,
  vars: 6,
  consts: [[3, "ngIf"], [3, "ngClass", "ngStyle"], ["rootEl", ""], [3, "ngTemplateOutlet", "ngTemplateOutletContext"]],
  template: function TransportContainerComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵtemplate(0, TransportContainerComponent_ng_template_0_Template, 3, 6, "ng-template", 0)(1, TransportContainerComponent_ng_template_1_Template, 3, 6, "ng-template", 0)(2, TransportContainerComponent_ng_template_2_Template, 3, 6, "ng-template", 0)(3, TransportContainerComponent_ng_template_3_Template, 3, 6, "ng-template", 0)(4, TransportContainerComponent_ng_template_4_Template, 3, 6, "ng-template", 0)(5, TransportContainerComponent_ng_template_5_Template, 3, 6, "ng-template", 0);
    }
    if (rf & 2) {
      ɵɵproperty("ngIf", ctx.elTag == "div");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.elTag == "span");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.elTag == "a");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.elTag == "tr");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.elTag == "th");
      ɵɵadvance();
      ɵɵproperty("ngIf", ctx.elTag == "td");
    }
  },
  dependencies: [NgIf, NgClass, NgStyle, NgTemplateOutlet],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TransportContainerComponent, [{
    type: Component,
    args: [{
      selector: "transport-container",
      encapsulation: ViewEncapsulation$1.None,
      template: `<ng-template [ngIf]="elTag == 'div'">
  <div #rootEl [ngClass]="elClasses || ''" [ngStyle]="elStyle || null">
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: renderProps }"
    ></ng-container>
  </div>
</ng-template>
<ng-template [ngIf]="elTag == 'span'">
  <span #rootEl [ngClass]="elClasses || ''" [ngStyle]="elStyle || null">
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: renderProps }"
    ></ng-container>
  </span>
</ng-template>
<ng-template [ngIf]="elTag == 'a'">
  <a #rootEl [ngClass]="elClasses || ''" [ngStyle]="elStyle || null">
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: renderProps }"
    ></ng-container>
  </a>
</ng-template>
<ng-template [ngIf]="elTag == 'tr'">
  <tr #rootEl [ngClass]="elClasses || ''" [ngStyle]="elStyle || null">
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: renderProps }"
    ></ng-container>
  </tr>
</ng-template>
<ng-template [ngIf]="elTag == 'th'">
  <th #rootEl [ngClass]="elClasses || ''" [ngStyle]="elStyle || null">
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: renderProps }"
    ></ng-container>
  </th>
</ng-template>
<ng-template [ngIf]="elTag == 'td'">
  <td #rootEl [ngClass]="elClasses || ''" [ngStyle]="elStyle || null">
    <ng-container
      [ngTemplateOutlet]="template"
      [ngTemplateOutletContext]="{ $implicit: renderProps }"
    ></ng-container>
  </td>
</ng-template>
`
    }]
  }], null, {
    inPlaceOf: [{
      type: Input
    }],
    reportEl: [{
      type: Input
    }],
    elTag: [{
      type: Input
    }],
    elClasses: [{
      type: Input
    }],
    elStyle: [{
      type: Input
    }],
    elAttrs: [{
      type: Input
    }],
    template: [{
      type: Input
    }],
    renderProps: [{
      type: Input
    }],
    rootElRef: [{
      type: ViewChild,
      args: ["rootEl"]
    }]
  });
})();
function replaceEl(subject, inPlaceOf) {
  inPlaceOf.parentNode?.insertBefore(subject, inPlaceOf.nextSibling);
  if (dummyContainer) {
    dummyContainer.appendChild(inPlaceOf);
  }
}
function applyElAttrs(el, previousAttrs = {}, currentAttrs = {}) {
  for (const attrName in previousAttrs) {
    if (!(attrName in currentAttrs)) {
      el[attrName] = null;
    }
  }
  for (const attrName in currentAttrs) {
    el[attrName] = currentAttrs[attrName];
  }
}
var FullCalendarComponent = class {
  constructor(element, changeDetector) {
    this.element = element;
    this.calendar = null;
    this.optionSnapshot = {};
    this.customRenderingMap = /* @__PURE__ */ new Map();
    this.templateMap = {};
    const customRenderingStore = new CustomRenderingStore();
    customRenderingStore.subscribe((customRenderingMap) => {
      this.customRenderingMap = customRenderingMap;
      this.customRenderingArray = void 0;
      changeDetector.detectChanges();
    });
    this.handleCustomRendering = customRenderingStore.handle.bind(customRenderingStore);
    this.templateMap = this;
  }
  ngAfterViewInit() {
    const {
      deepChangeDetection
    } = this;
    const options = __spreadValues(__spreadValues({}, this.options), this.buildInputOptions());
    this.optionSnapshot = mapHash(options, (optionVal, optionName) => deepChangeDetection && OPTION_IS_DEEP[optionName] ? deepCopy(optionVal) : optionVal);
    const calendarEl = this.element.nativeElement;
    const calendar = this.calendar = new Calendar(calendarEl, __spreadValues(__spreadValues({}, options), this.buildExtraOptions()));
    const ionContent = calendarEl.closest("ion-content");
    if (ionContent && ionContent.componentOnReady) {
      ionContent.componentOnReady().then(() => {
        window.requestAnimationFrame(() => {
          calendar.render();
        });
      });
    } else {
      calendar.render();
    }
  }
  /*
  allows us to manually detect complex input changes, internal mutations to certain options.
  called before ngOnChanges. called much more often than ngOnChanges.
  */
  ngDoCheck() {
    if (this.calendar) {
      const {
        deepChangeDetection,
        optionSnapshot
      } = this;
      const newOptions = __spreadValues(__spreadValues({}, this.options), this.buildInputOptions());
      const newProcessedOptions = {};
      const changedOptionNames = [];
      for (const optionName in newOptions) {
        if (newOptions.hasOwnProperty(optionName)) {
          let optionVal = newOptions[optionName];
          if (deepChangeDetection && OPTION_IS_DEEP[optionName]) {
            if (!deepEqual(optionSnapshot[optionName], optionVal)) {
              optionSnapshot[optionName] = deepCopy(optionVal);
              changedOptionNames.push(optionName);
            }
          } else {
            if (optionSnapshot[optionName] !== optionVal) {
              optionSnapshot[optionName] = optionVal;
              changedOptionNames.push(optionName);
            }
          }
          newProcessedOptions[optionName] = optionVal;
        }
      }
      const oldOptionNames = Object.keys(optionSnapshot);
      for (const optionName of oldOptionNames) {
        if (!(optionName in newOptions)) {
          delete optionSnapshot[optionName];
          changedOptionNames.push(optionName);
        }
      }
      if (changedOptionNames.length) {
        this.calendar.pauseRendering();
        this.calendar.resetOptions(__spreadValues(__spreadValues({}, newProcessedOptions), this.buildExtraOptions()), changedOptionNames);
      }
    }
  }
  ngAfterContentChecked() {
    if (this.calendar) {
      this.calendar.resumeRendering();
    }
  }
  ngOnDestroy() {
    if (this.calendar) {
      this.calendar.destroy();
      this.calendar = null;
    }
  }
  get customRenderings() {
    return this.customRenderingArray || (this.customRenderingArray = [...this.customRenderingMap.values()]);
  }
  getApi() {
    return this.calendar;
  }
  buildInputOptions() {
    const options = {};
    for (const inputName of OPTION_INPUT_NAMES) {
      const inputValue = this[inputName];
      if (inputValue != null) {
        options[inputName] = inputValue;
      }
    }
    return options;
  }
  buildExtraOptions() {
    return {
      handleCustomRendering: this.handleCustomRendering,
      customRenderingMetaMap: this.templateMap,
      customRenderingReplaces: true
    };
  }
  // for `trackBy` in loop
  trackCustomRendering(index, customRendering) {
    return customRendering.id;
  }
};
FullCalendarComponent.ɵfac = function FullCalendarComponent_Factory(t) {
  return new (t || FullCalendarComponent)(ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(ChangeDetectorRef));
};
FullCalendarComponent.ɵcmp = ɵɵdefineComponent({
  type: FullCalendarComponent,
  selectors: [["full-calendar"]],
  contentQueries: function FullCalendarComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      ɵɵcontentQuery(dirIndex, _c3, 7);
      ɵɵcontentQuery(dirIndex, _c4, 7);
      ɵɵcontentQuery(dirIndex, _c5, 7);
      ɵɵcontentQuery(dirIndex, _c6, 7);
      ɵɵcontentQuery(dirIndex, _c7, 7);
      ɵɵcontentQuery(dirIndex, _c8, 7);
      ɵɵcontentQuery(dirIndex, _c9, 7);
      ɵɵcontentQuery(dirIndex, _c10, 7);
      ɵɵcontentQuery(dirIndex, _c11, 7);
      ɵɵcontentQuery(dirIndex, _c12, 7);
      ɵɵcontentQuery(dirIndex, _c13, 7);
      ɵɵcontentQuery(dirIndex, _c14, 7);
      ɵɵcontentQuery(dirIndex, _c15, 7);
      ɵɵcontentQuery(dirIndex, _c16, 7);
      ɵɵcontentQuery(dirIndex, _c17, 7);
    }
    if (rf & 2) {
      let _t;
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayHeaderContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.dayCellContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.weekNumberContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.nowIndicatorContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.eventContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slotLaneContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.slotLabelContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.allDayContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.moreLinkContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.noEventsContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resourceAreaHeaderContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resourceGroupLabelContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resourceLabelContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resourceLaneContent = _t.first);
      ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.resourceGroupLaneContent = _t.first);
    }
  },
  inputs: {
    options: "options",
    deepChangeDetection: "deepChangeDetection",
    events: "events",
    eventSources: "eventSources",
    resources: "resources"
  },
  decls: 2,
  vars: 2,
  consts: [[3, "inPlaceOf", "reportEl", "elTag", "elClasses", "elStyle", "elAttrs", "template", "renderProps", 4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "inPlaceOf", "reportEl", "elTag", "elClasses", "elStyle", "elAttrs", "template", "renderProps"]],
  template: function FullCalendarComponent_Template(rf, ctx) {
    if (rf & 1) {
      ɵɵelementStart(0, "offscreen-fragment");
      ɵɵtemplate(1, FullCalendarComponent_transport_container_1_Template, 1, 8, "transport-container", 0);
      ɵɵelementEnd();
    }
    if (rf & 2) {
      ɵɵadvance();
      ɵɵproperty("ngForOf", ctx.customRenderings)("ngForTrackBy", ctx.trackCustomRendering);
    }
  },
  dependencies: [OffscreenFragmentComponent, TransportContainerComponent, NgForOf],
  encapsulation: 2
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullCalendarComponent, [{
    type: Component,
    args: [{
      selector: "full-calendar",
      encapsulation: ViewEncapsulation$1.None,
      template: '<offscreen-fragment>\n  <transport-container *ngFor="let customRendering of customRenderings; trackBy:trackCustomRendering"\n    [inPlaceOf]="customRendering.containerEl"\n    [reportEl]="customRendering.reportNewContainerEl"\n    [elTag]="customRendering.elTag"\n    [elClasses]="customRendering.elClasses"\n    [elStyle]="customRendering.elStyle"\n    [elAttrs]="customRendering.elAttrs"\n    [template]="templateMap[customRendering.generatorName]!"\n    [renderProps]="customRendering.renderProps"\n  ></transport-container>\n</offscreen-fragment>\n'
    }]
  }], function() {
    return [{
      type: ElementRef
    }, {
      type: ChangeDetectorRef
    }];
  }, {
    options: [{
      type: Input
    }],
    deepChangeDetection: [{
      type: Input
    }],
    events: [{
      type: Input
    }],
    eventSources: [{
      type: Input
    }],
    resources: [{
      type: Input
    }],
    dayHeaderContent: [{
      type: ContentChild,
      args: ["dayHeaderContent", {
        static: true
      }]
    }],
    dayCellContent: [{
      type: ContentChild,
      args: ["dayCellContent", {
        static: true
      }]
    }],
    weekNumberContent: [{
      type: ContentChild,
      args: ["weekNumberContent", {
        static: true
      }]
    }],
    nowIndicatorContent: [{
      type: ContentChild,
      args: ["nowIndicatorContent", {
        static: true
      }]
    }],
    eventContent: [{
      type: ContentChild,
      args: ["eventContent", {
        static: true
      }]
    }],
    slotLaneContent: [{
      type: ContentChild,
      args: ["slotLaneContent", {
        static: true
      }]
    }],
    slotLabelContent: [{
      type: ContentChild,
      args: ["slotLabelContent", {
        static: true
      }]
    }],
    allDayContent: [{
      type: ContentChild,
      args: ["allDayContent", {
        static: true
      }]
    }],
    moreLinkContent: [{
      type: ContentChild,
      args: ["moreLinkContent", {
        static: true
      }]
    }],
    noEventsContent: [{
      type: ContentChild,
      args: ["noEventsContent", {
        static: true
      }]
    }],
    resourceAreaHeaderContent: [{
      type: ContentChild,
      args: ["resourceAreaHeaderContent", {
        static: true
      }]
    }],
    resourceGroupLabelContent: [{
      type: ContentChild,
      args: ["resourceGroupLabelContent", {
        static: true
      }]
    }],
    resourceLabelContent: [{
      type: ContentChild,
      args: ["resourceLabelContent", {
        static: true
      }]
    }],
    resourceLaneContent: [{
      type: ContentChild,
      args: ["resourceLaneContent", {
        static: true
      }]
    }],
    resourceGroupLaneContent: [{
      type: ContentChild,
      args: ["resourceGroupLaneContent", {
        static: true
      }]
    }]
  });
})();
var FullCalendarModule = class {
};
FullCalendarModule.ɵfac = function FullCalendarModule_Factory(t) {
  return new (t || FullCalendarModule)();
};
FullCalendarModule.ɵmod = ɵɵdefineNgModule({
  type: FullCalendarModule,
  declarations: [FullCalendarComponent, OffscreenFragmentComponent, TransportContainerComponent],
  imports: [CommonModule],
  exports: [FullCalendarComponent]
});
FullCalendarModule.ɵinj = ɵɵdefineInjector({
  imports: [[CommonModule]]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FullCalendarModule, [{
    type: NgModule,
    args: [{
      declarations: [FullCalendarComponent, OffscreenFragmentComponent, TransportContainerComponent],
      imports: [CommonModule],
      exports: [FullCalendarComponent]
    }]
  }], null, null);
})();
export {
  FullCalendarComponent,
  FullCalendarModule
};
//# sourceMappingURL=@fullcalendar_angular.js.map
