declare const _default: import("vue").DefineComponent<{
    show: {
        type: BooleanConstructor;
        default: boolean;
    };
    title: {
        type: StringConstructor;
    };
}, {
    isShow: import("vue").Ref<boolean>;
    close: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, "close"[], "close", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    show?: unknown;
    title?: unknown;
} & {
    show: boolean;
} & {
    title?: string | undefined;
}> & {
    onClose?: ((...args: any[]) => any) | undefined;
}, {
    show: boolean;
}>;
export default _default;
