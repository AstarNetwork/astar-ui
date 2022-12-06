declare const _default: import("vue").DefineComponent<{
    connectionType: {
        type: StringConstructor;
        default: string;
        required: true;
    };
    version: {
        type: StringConstructor;
        default: string;
    };
}, {
    capitalize: (str: string) => string;
}, unknown, {}, {
    getDotClass(connectionType: string): "orange" | "green" | "red" | undefined;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, Record<string, any>, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<{
    connectionType?: unknown;
    version?: unknown;
} & {
    connectionType: string;
    version: string;
} & {}>, {
    connectionType: string;
    version: string;
}>;
export default _default;
//# sourceMappingURL=ConnectionIndicator.vue.d.ts.map