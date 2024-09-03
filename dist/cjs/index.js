'use strict';

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');

const Button = ({ buttonRef, ...restProps }) => {
    const [isFocused, setIsFocused] = react.useState(false);
    const btnRef = buttonRef || react.useRef(null);
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
    react.useEffect(() => {
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
    return (jsxRuntime.jsx("button", { ...restProps, ref: btnRef, onFocus: onFocus, onBlur: onBlur }));
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
