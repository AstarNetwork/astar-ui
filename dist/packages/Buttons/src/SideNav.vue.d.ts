declare const _default: import("vue").DefineComponent<{
    title: {
        type: StringConstructor;
    };
    selected: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    [x: string & `on${string}`]: import("vue").Ref<((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined>;
    title: import("vue").Ref<string | undefined>;
    selected: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    title?: unknown;
    selected?: unknown;
} & {
    selected: boolean;
} & {
    title?: string | undefined;
}>, {
    selected: boolean;
}>;
export default _default;
