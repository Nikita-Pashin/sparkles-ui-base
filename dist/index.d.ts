import { FC } from 'react';

type ButtonProps = {
    buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
} & JSX.IntrinsicElements['button'];
declare const Button: FC<ButtonProps>;

export { Button };
