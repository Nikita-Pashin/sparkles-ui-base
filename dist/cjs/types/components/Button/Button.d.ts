import { FC } from "react";
type ButtonProps = {
    buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
} & JSX.IntrinsicElements['button'];
export declare const Button: FC<ButtonProps>;
export {};
