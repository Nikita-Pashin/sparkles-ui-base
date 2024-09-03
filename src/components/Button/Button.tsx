import { FC, useEffect, useRef, useState } from "react";

type ButtonProps = {
  buttonRef?: React.MutableRefObject<HTMLButtonElement | null>;
} & JSX.IntrinsicElements['button'];

export const Button: FC<ButtonProps> = ({ buttonRef, ...restProps }) => {
  const [isFocused, setIsFocused] = useState(false); 
  const btnRef = buttonRef || useRef<HTMLButtonElement | null>(null);

  const toggleFocused = () => {
    setIsFocused((prev) => !prev);
  };

  const onFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    toggleFocused();
    restProps.onFocus?.(event);
  }

  const onBlur = (event: React.FocusEvent<HTMLButtonElement>) => {
    toggleFocused();
    restProps.onBlur?.(event);
  }

  useEffect(() => {
    const clickOnButton = () => {
      if (!btnRef.current) {
        return;
      }
      
      if (!isFocused) {
        return;
      }

      btnRef.current.click();
    };

    window.addEventListener('keypress', clickOnButton);

    return () => {
      window.removeEventListener('keypress', clickOnButton);
    };
  }, []);

  return (
    <button
      {...restProps}
      ref={btnRef}
      onFocus={onFocus}
      onBlur={onBlur}
      data-testid="button"
    />
  );
};