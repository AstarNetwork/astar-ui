var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { defineComponent, openBlock, createElementBlock, renderSlot, toRefs, normalizeClass, ref, watchEffect, createElementVNode, normalizeStyle, toDisplayString, pushScopeId, popScopeId } from "vue";
var index_vue_vue_type_style_index_0_scoped_true_lang$1 = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  emits: ["click"],
  setup(__props) {
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("button", {
        class: "my-button",
        onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click", $event))
      }, [
        renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ]);
    };
  }
});
var TestButton = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-5102a2ab"]]);
const ButtonPlugin = {
  install(app) {
    app.component("my-button", TestButton);
  }
};
var index_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$9 = {};
const _hoisted_1$8 = { class: "my-foo" };
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("div", _hoisted_1$8, " Foo Astar ");
}
var Foo = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9], ["__scopeId", "data-v-21e6b128"]]);
const FooPlugin = {
  install(app) {
    app.component("my-foo", Foo);
  }
};
var Text_vue_vue_type_style_index_0_scoped_true_lang = "";
var EnumType;
(function(EnumType2) {
  EnumType2[EnumType2["H1"] = 0] = "H1";
  EnumType2[EnumType2["H2"] = 1] = "H2";
  EnumType2[EnumType2["H3"] = 2] = "H3";
  EnumType2[EnumType2["H4"] = 3] = "H4";
  EnumType2[EnumType2["H5"] = 4] = "H5";
  EnumType2[EnumType2["H6"] = 5] = "H6";
  EnumType2[EnumType2["H7"] = 6] = "H7";
})(EnumType || (EnumType = {}));
const _sfc_main$8 = defineComponent({
  name: "Text",
  props: {
    type: {
      required: true,
      type: Object,
      default: "H1"
    }
  },
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(`text_${_ctx.type}`)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
var Text = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-e7c95fbe"]]);
const TextPlugin = {
  install(app) {
    app.component("astar-text", Text);
  }
};
var SimpleModal_vue_vue_type_style_index_0_scoped_true_lang = "";
const fadeInClass = "fade-in";
const fadeOutClass = "fade-out";
const zoomInClass = "zoom-in";
const _sfc_main$7 = defineComponent({
  name: "SimpleModal",
  props: {
    show: {
      type: Boolean,
      default: false
    },
    title: {
      type: String
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    },
    isAnimation: {
      type: Boolean,
      default: false
    }
  },
  emits: ["close"],
  setup(props, { emit }) {
    const isShow = ref(props.show);
    const fadeClass = ref(props.isAnimation ? fadeInClass : "");
    watchEffect(() => {
      if (isShow.value !== props.show) {
        isShow.value = props.show;
      }
    });
    const close = (e) => {
      const openClass = `modal show${props.isAnimation ? " " + fadeInClass : ""}`;
      if (e.target.className === openClass || e.target.className === "close") {
        if (props.isAnimation) {
          fadeClass.value = fadeOutClass;
          const animatedDuration = 200;
          setTimeout(() => {
            emit("close");
            fadeClass.value = fadeInClass;
          }, animatedDuration);
          return;
        } else {
          emit("close");
        }
      }
    };
    return __spreadProps(__spreadValues({}, toRefs(props)), {
      isShow,
      close,
      fadeClass,
      zoomInClass
    });
  }
});
const _hoisted_1$7 = { class: "title" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`modal ${_ctx.isShow ? "show" : ""} ${_ctx.fadeClass}`),
    onClick: _cache[1] || (_cache[1] = (...args) => _ctx.close && _ctx.close(...args))
  }, [
    createElementVNode("div", {
      class: normalizeClass(["modal-content", _ctx.isAnimation && _ctx.zoomInClass]),
      style: normalizeStyle(`width: ${_ctx.width}px; height: ${_ctx.height}px;`)
    }, [
      createElementVNode("span", {
        class: "close",
        onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
      }, "\xD7"),
      createElementVNode("div", _hoisted_1$7, toDisplayString(_ctx.title), 1),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6)
  ], 2);
}
var SimpleModal = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-79f4d578"]]);
const ModalsPlugin = {
  install(app) {
    app.component("astar-simple-modal", SimpleModal);
  }
};
var IconCloseBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent({
  name: "IconCloseBtn",
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _hoisted_1$6 = { type: "button" };
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$6, " \xD7 ");
}
var IconCloseBtn = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-6d08595c"]]);
var IconCopyBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  name: "IconCopyBtn",
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-03b4d7e4"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { type: "button" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("svg", {
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    "stroke-linecap": "round",
    "stroke-linejoin": "round",
    "stroke-width": "2",
    d: "M8 7v8a2 2 0 002 2h6M8 7V5a2 2 0 012-2h4.586a1 1 0 01.707.293l4.414 4.414a1 1 0 01.293.707V15a2 2 0 01-2 2h-2M8 7H6a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2v-2"
  })
], -1));
const _hoisted_3$2 = [
  _hoisted_2$3
];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$5, _hoisted_3$2);
}
var IconCopyBtn = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-03b4d7e4"]]);
var IconShareBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent({
  name: "IconShareBtn",
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-4c791d2f"), n = n(), popScopeId(), n);
const _hoisted_1$4 = { type: "button" };
const _hoisted_2$2 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
  viewBox: "0 0 24 22",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg",
  stroke: "currentColor"
}, [
  /* @__PURE__ */ createElementVNode("path", {
    d: "M21 12V22H0V3H12V5H2V20H19V12H21ZM24 0H13.012L17.047 4L10.07 11.07L12.898 13.898L19.875 6.828L24 11V0Z",
    fill: "currentColor"
  })
], -1));
const _hoisted_3$1 = [
  _hoisted_2$2
];
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$4, _hoisted_3$1);
}
var IconShareBtn = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-4c791d2f"]]);
const IconButtonsPlugin = {
  install(app) {
    app.component("astar-icon-close-btn", IconCloseBtn);
    app.component("astar-icon-copy-btn", IconCopyBtn);
    app.component("astar-icon-share-btn", IconShareBtn);
  }
};
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent({
  name: "Header",
  props: {
    title: {
      type: String
    }
  },
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _hoisted_1$3 = { class: "header" };
const _hoisted_2$1 = { class: "header-left" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "header-right" };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$1, [
      _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.title), 1)) : (openBlock(), createElementBlock("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "left", {}, void 0, true)
      ]))
    ]),
    createElementVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-672b02e9"]]);
const HeaderPlugin = {
  install(app) {
    app.component("astar-header", Header);
  }
};
var ActionBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$2 = defineComponent({
  name: "ActionBtn",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _hoisted_1$2 = ["disabled"];
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "button",
    style: normalizeStyle(`width: ${_ctx.width}px; height: ${_ctx.height}px;`),
    disabled: _ctx.disabled
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 12, _hoisted_1$2);
}
var ActionBtn = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2], ["__scopeId", "data-v-7e509d33"]]);
var Button_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$1 = defineComponent({
  name: "Button",
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    width: {
      type: Number
    },
    height: {
      type: Number
    }
  },
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _hoisted_1$1 = ["disabled"];
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "button",
    style: normalizeStyle(`width: ${_ctx.width}px; height: ${_ctx.height}px;`),
    disabled: _ctx.disabled
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 12, _hoisted_1$1);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1], ["__scopeId", "data-v-6cbde29f"]]);
var SideNav_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main = defineComponent({
  name: "SideNav",
  props: {
    title: {
      type: String
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _hoisted_1 = { class: "fa" };
const _hoisted_2 = { class: "title" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    type: "button",
    class: normalizeClass(_ctx.selected ? "selected" : "")
  }, [
    createElementVNode("i", _hoisted_1, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ]),
    createElementVNode("span", _hoisted_2, toDisplayString(_ctx.title), 1)
  ], 2);
}
var SideNav = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-f78a116a"]]);
const ButtonsPlugin = {
  install(app) {
    app.component("astar-action-btn", ActionBtn);
    app.component("astar-button", Button);
    app.component("astar-side-nav", SideNav);
  }
};
const AstarUIPlugin = {
  install(app) {
    var _a, _b, _c, _d, _e, _f, _g;
    (_a = ButtonPlugin.install) == null ? void 0 : _a.call(ButtonPlugin, app);
    (_b = FooPlugin.install) == null ? void 0 : _b.call(FooPlugin, app);
    (_c = TextPlugin.install) == null ? void 0 : _c.call(TextPlugin, app);
    (_d = ModalsPlugin.install) == null ? void 0 : _d.call(ModalsPlugin, app);
    (_e = IconButtonsPlugin.install) == null ? void 0 : _e.call(IconButtonsPlugin, app);
    (_f = HeaderPlugin.install) == null ? void 0 : _f.call(HeaderPlugin, app);
    (_g = ButtonsPlugin.install) == null ? void 0 : _g.call(ButtonsPlugin, app);
  }
};
export { ActionBtn, Button, ButtonPlugin, ButtonsPlugin, Foo, FooPlugin, Header, HeaderPlugin, IconButtonsPlugin, IconCloseBtn, IconCopyBtn, IconShareBtn, ModalsPlugin, SideNav, SimpleModal, TestButton, Text, TextPlugin, AstarUIPlugin as default };
