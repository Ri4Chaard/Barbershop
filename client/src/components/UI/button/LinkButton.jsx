import React from "react";
import cl from "./LinkButton.module.css";

export const LinkButton = ({ children, ...props }) => {
    return (
        <button className={cl.linkBtn} {...props}>
            {children}
        </button>
    );
};
