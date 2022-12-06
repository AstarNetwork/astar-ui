declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
        default: string;
    };
    isClosing: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    animation: import("vue").Ref<string>;
    slideOutClass: string;
    slideInClass: string;
    closeHandler: (e: any) => void;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    show: import("vue").Ref<boolean>;
    title: import("vue").Ref<string>;
    isClosing: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show?: unknown;
    title?: unknown;
    isClosing?: unknown;
} & {
    show: boolean;
    title: string;
    isClosing: boolean;
} & {}> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    title: string;
    isClosing: boolean;
}>;
export default _default;
//# sourceMappingURL=ModalDrawer.vue.d.ts.map