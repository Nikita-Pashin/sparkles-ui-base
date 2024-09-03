declare const _default: {
    title: string;
    component: import("react").FC<{
        buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
    } & import("react").ClassAttributes<HTMLButtonElement> & import("react").ButtonHTMLAttributes<HTMLButtonElement>>;
    parameters: {
        layout: string;
    };
    tags: string[];
    argTypes: {
        title: {
            description: string;
            control: {
                type: string;
            };
        };
        children: {
            description: string;
            control: {
                type: string;
            };
        };
    };
};
export default _default;
export declare const ButtonOne: {
    args: {
        title: string;
        children: string;
    };
};
export declare const ButtonTwo: {
    args: {
        title: string;
        children: string;
    };
};
