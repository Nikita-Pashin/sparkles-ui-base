import { jsx } from 'react/jsx-runtime';
import { useState, useRef, useEffect } from 'react';

const Button = ({ buttonRef, ...restProps }) => {
    const [isFocused, setIsFocused] = useState(false);
    const btnRef = buttonRef || useRef(null);
    const toggleFocused = () => {
        setIsFocused((prev) => !prev);
    };
    const onFocus = (event) => {
        toggleFocused();
        restProps.onFocus?.(event);
    };
    const onBlur = (event) => {
        toggleFocused();
        restProps.onBlur?.(event);
    };
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
    return (jsx("button", { ...restProps, ref: btnRef, onFocus: onFocus, onBlur: onBlur }));
};

export { Button };
//# sourceMappingURL=index.js.map
