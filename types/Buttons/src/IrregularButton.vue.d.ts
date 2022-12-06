declare const _default: import("vue").DefineComponent<{
    disabled: {
        type: BooleanConstructor;
        default: boolean;
    };
    width: {
        type: NumberConstructor;
    };
    height: {
        type: NumberConstructor;
    };
}, {
    [x: string & `on${string}`]: import("vue").Ref<((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined>;
    width: import("vue").Ref<number | undefined>;
    height: import("vue").Ref<number | undefined>;
    disabled: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    disabled?: unknown;
    width?: unknown;
    height?: unknown;
} & {
    disabled: boolean;
} & {
    width?: number | undefined;
    height?: number | undefined;
}>, {
    disabled: boolean;
}>;
export default _default;
//# sourceMappingURL=IrregularButton.vue.d.ts.map