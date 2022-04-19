declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
    isCloseIcon: {
        type: BooleanConstructor;
        require: boolean;
        default: boolean;
    };
    isClosing: {
        type: BooleanConstructor;
        required: false;
        default: boolean;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    close: (e: any) => void;
    zoomInClass: string;
    fadeInClass: string;
    fadeOutClass: string;
    width: import("vue").Ref<number | undefined>;
    height: import("vue").Ref<number | undefined>;
    title: import("vue").Ref<string | undefined>;
    onClose: import("vue").Ref<((...args: any[]) => any) | undefined>;
    show: import("vue").Ref<boolean>;
    isCloseIcon: import("vue").Ref<boolean>;
    isClosing: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show?: unknown;
    title?: unknown;
    width?: unknown;
    height?: unknown;
    isCloseIcon?: unknown;
    isClosing?: unknown;
} & {
    show: boolean;
    isCloseIcon: boolean;
    isClosing: boolean;
} & {
    width?: number | undefined;
    height?: number | undefined;
    title?: string | undefined;
}> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
    isCloseIcon: boolean;
    isClosing: boolean;
}>;
export default _default;
