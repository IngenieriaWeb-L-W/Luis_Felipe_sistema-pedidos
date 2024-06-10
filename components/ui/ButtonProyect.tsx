import React from "react";
import classNames from "classnames";

const ButtonProyect = ({ children, onClick, variant = "default", size = "md", classnames }) => {
    const baseStyle = "font-bold rounded focus:outline-none focus:ring-2 focus:ring-offset-2";

    const variantStyles = {
        default: "bg-blue-500 hover:bg-blue-700 text-white",
        outline: "bg-transparent border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white",
        ghost: "bg-transparent text-blue-500 hover:bg-blue-100",
    };

    const sizeStyles = {
        sm: "py-1 px-2 text-sm",
        md: "py-2 px-4",
        lg: "py-3 px-6 text-lg",
        icon: "p-2", // Size for icon-only buttons
    };

    const classes = classNames(
        baseStyle,
        variantStyles[variant],
        sizeStyles[size],
        classnames
    );

    return (
        <button className= {classes} onClick={onClick} >
        {children}
        </button>
    );
};

export default ButtonProyect;