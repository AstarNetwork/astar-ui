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
import { defineComponent, toRefs, openBlock, createElementBlock, normalizeClass, renderSlot, createElementVNode, ref, watchEffect, resolveComponent, normalizeStyle, createVNode, createCommentVNode, toDisplayString, pushScopeId, popScopeId } from "vue";
var Text_vue_vue_type_style_index_0_scoped_true_lang = "";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
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
const _sfc_main$a = defineComponent({
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
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass(`text_${_ctx.type}`)
  }, [
    renderSlot(_ctx.$slots, "default", {}, void 0, true)
  ], 2);
}
var Text = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a], ["__scopeId", "data-v-e7c95fbe"]]);
const TextPlugin = {
  install(app) {
    app.component("astar-text", Text);
  }
};
const _sfc_main$9 = {};
const _hoisted_1$9 = {
  width: "24",
  height: "24",
  viewBox: "0 0 24 24",
  fill: "none",
  xmlns: "http://www.w3.org/2000/svg"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("path", {
  d: "M12.9399 11.9995L18.4666 6.47281C18.5758 6.34527 18.6329 6.18122 18.6264 6.01344C18.6199 5.84565 18.5504 5.68649 18.4317 5.56776C18.3129 5.44903 18.1538 5.37948 17.986 5.373C17.8182 5.36652 17.6541 5.42359 17.5266 5.53281L11.9999 11.0595L6.47327 5.52614C6.34774 5.4006 6.17748 5.33008 5.99994 5.33008C5.82241 5.33008 5.65214 5.4006 5.52661 5.52614C5.40107 5.65168 5.33055 5.82194 5.33055 5.99947C5.33055 6.17701 5.40107 6.34727 5.52661 6.47281L11.0599 11.9995L5.52661 17.5261C5.45682 17.5859 5.40014 17.6594 5.36012 17.7422C5.32011 17.8249 5.29762 17.915 5.29408 18.0068C5.29053 18.0986 5.306 18.1901 5.33952 18.2757C5.37303 18.3612 5.42387 18.4389 5.48884 18.5039C5.55381 18.5689 5.63151 18.6197 5.71706 18.6532C5.80261 18.6867 5.89416 18.7022 5.98598 18.6987C6.07779 18.6951 6.16788 18.6726 6.25059 18.6326C6.3333 18.5926 6.40684 18.5359 6.46661 18.4661L11.9999 12.9395L17.5266 18.4661C17.6541 18.5754 17.8182 18.6324 17.986 18.6259C18.1538 18.6195 18.3129 18.5499 18.4317 18.4312C18.5504 18.3125 18.6199 18.1533 18.6264 17.9855C18.6329 17.8177 18.5758 17.6537 18.4666 17.5261L12.9399 11.9995Z",
  fill: "#B1B7C1"
}, null, -1);
const _hoisted_3$3 = [
  _hoisted_2$6
];
function _sfc_render$9(_ctx, _cache) {
  return openBlock(), createElementBlock("svg", _hoisted_1$9, _hoisted_3$3);
}
var IconClose = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
var SimpleModal_vue_vue_type_style_index_0_scoped_true_lang = "";
const fadeInClass = "fade-in";
const fadeOutClass = "fade-out";
const zoomInClass = "zoom-in";
const _sfc_main$8 = defineComponent({
  components: { IconClose },
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
    },
    isCloseIcon: {
      type: Boolean,
      require: false,
      default: true
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
      console.log("e.target.className", e.target.className);
      if (!props.isCloseIcon)
        return;
      const openClass = `modal show${props.isAnimation ? " " + fadeInClass : ""}`;
      if (e.target.className === openClass || e.target.className.baseVal === "" || e.target.className === "column--close") {
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
const _hoisted_1$8 = {
  key: 0,
  class: "row--close"
};
const _hoisted_2$5 = { class: "column--close" };
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_IconClose = resolveComponent("IconClose");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(`modal ${_ctx.isShow ? "show" : ""} ${_ctx.fadeClass}`),
    onClick: _cache[0] || (_cache[0] = (...args) => _ctx.close && _ctx.close(...args))
  }, [
    createElementVNode("div", {
      class: normalizeClass(["modal-content", _ctx.isAnimation && _ctx.zoomInClass]),
      style: normalizeStyle(`width: ${_ctx.width}px; height: ${_ctx.height}px;`)
    }, [
      _ctx.isCloseIcon ? (openBlock(), createElementBlock("div", _hoisted_1$8, [
        createElementVNode("div", _hoisted_2$5, [
          createVNode(_component_IconClose)
        ])
      ])) : createCommentVNode("", true),
      createElementVNode("div", {
        class: normalizeClass(["title", !_ctx.isCloseIcon && "title--no-close-icon"])
      }, toDisplayString(_ctx.title), 3),
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6)
  ], 2);
}
var SimpleModal = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8], ["__scopeId", "data-v-0985a889"]]);
const ModalsPlugin = {
  install(app) {
    app.component("astar-simple-modal", SimpleModal);
  }
};
var IconCloseBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$7 = defineComponent({
  name: "IconCloseBtn",
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _hoisted_1$7 = { type: "button" };
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$7, " \xD7 ");
}
var IconCloseBtn = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7], ["__scopeId", "data-v-6d08595c"]]);
var IconCopyBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$6 = defineComponent({
  name: "IconCopyBtn",
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _withScopeId$1 = (n) => (pushScopeId("data-v-03b4d7e4"), n = n(), popScopeId(), n);
const _hoisted_1$6 = { type: "button" };
const _hoisted_2$4 = /* @__PURE__ */ _withScopeId$1(() => /* @__PURE__ */ createElementVNode("svg", {
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
  _hoisted_2$4
];
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$6, _hoisted_3$2);
}
var IconCopyBtn = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6], ["__scopeId", "data-v-03b4d7e4"]]);
var IconShareBtn_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$5 = defineComponent({
  name: "IconShareBtn",
  setup(props) {
    return __spreadValues({}, toRefs(props));
  }
});
const _withScopeId = (n) => (pushScopeId("data-v-4c791d2f"), n = n(), popScopeId(), n);
const _hoisted_1$5 = { type: "button" };
const _hoisted_2$3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createElementVNode("svg", {
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
  _hoisted_2$3
];
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", _hoisted_1$5, _hoisted_3$1);
}
var IconShareBtn = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5], ["__scopeId", "data-v-4c791d2f"]]);
const IconButtonsPlugin = {
  install(app) {
    app.component("astar-icon-close-btn", IconCloseBtn);
    app.component("astar-icon-copy-btn", IconCopyBtn);
    app.component("astar-icon-share-btn", IconShareBtn);
  }
};
var Header_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$4 = defineComponent({
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
const _hoisted_1$4 = { class: "header" };
const _hoisted_2$2 = { class: "header-left" };
const _hoisted_3 = { key: 0 };
const _hoisted_4 = { key: 1 };
const _hoisted_5 = { class: "header-right" };
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$4, [
    createElementVNode("div", _hoisted_2$2, [
      _ctx.title ? (openBlock(), createElementBlock("div", _hoisted_3, toDisplayString(_ctx.title), 1)) : (openBlock(), createElementBlock("div", _hoisted_4, [
        renderSlot(_ctx.$slots, "left", {}, void 0, true)
      ]))
    ]),
    createElementVNode("div", _hoisted_5, [
      renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ])
  ]);
}
var Header = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4], ["__scopeId", "data-v-672b02e9"]]);
var ConnectionIndicator_vue_vue_type_style_index_0_scoped_true_lang = "";
const _sfc_main$3 = defineComponent({
  props: {
    connectionType: {
      type: String,
      default: "connected",
      required: true
    },
    version: {
      type: String,
      default: "0.0.0"
    }
  },
  setup() {
    const capitalize = (str) => {
      if (typeof str !== "string" || !str)
        return str;
      return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    };
    return {
      capitalize
    };
  },
  methods: {
    getDotClass(connectionType) {
      if (connectionType === "connecting") {
        return "orange";
      } else if (connectionType === "connected") {
        return "green";
      } else if (connectionType === "offline") {
        return "red";
      }
    }
  }
});
const _hoisted_1$3 = { class: "wrapper--indicator" };
const _hoisted_2$1 = { key: 0 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", {
      class: normalizeClass(["dot", _ctx.getDotClass(_ctx.connectionType)])
    }, null, 2),
    createElementVNode("div", {
      class: normalizeClass(["txt--status", _ctx.getDotClass(_ctx.connectionType)])
    }, [
      createElementVNode("div", null, [
        createElementVNode("span", null, toDisplayString(_ctx.capitalize(_ctx.connectionType)), 1)
      ]),
      _ctx.connectionType === "connected" ? (openBlock(), createElementBlock("div", _hoisted_2$1, [
        createElementVNode("span", null, " v" + toDisplayString(_ctx.version), 1)
      ])) : createCommentVNode("", true)
    ], 2)
  ]);
}
var ConnectionIndicator = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3], ["__scopeId", "data-v-7663861b"]]);
const HeaderPlugin = {
  install(app) {
    app.component("astar-header", Header);
    app.component("astar-connection-indicator", ConnectionIndicator);
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
    var _a, _b, _c, _d, _e;
    (_a = TextPlugin.install) == null ? void 0 : _a.call(TextPlugin, app);
    (_b = ModalsPlugin.install) == null ? void 0 : _b.call(ModalsPlugin, app);
    (_c = IconButtonsPlugin.install) == null ? void 0 : _c.call(IconButtonsPlugin, app);
    (_d = HeaderPlugin.install) == null ? void 0 : _d.call(HeaderPlugin, app);
    (_e = ButtonsPlugin.install) == null ? void 0 : _e.call(ButtonsPlugin, app);
  }
};
export { ActionBtn, Button, ButtonsPlugin, ConnectionIndicator, Header, HeaderPlugin, IconButtonsPlugin, IconCloseBtn, IconCopyBtn, IconShareBtn, ModalsPlugin, SideNav, SimpleModal, Text, TextPlugin, AstarUIPlugin as default };
