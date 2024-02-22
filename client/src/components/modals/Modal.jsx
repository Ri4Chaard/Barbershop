import React, { useState } from "react";
import classes from "./Modal.module.css";
import { LinkButton } from "../UI/button/LinkButton";

export const Modal = ({ children, btnText, disabled, visible, setVisible }) => {
    const rootClasses = [classes.modal];
    if (visible) {
        rootClasses.push(classes.active);
    }
    return (
        <>
            <LinkButton
                disabled={disabled}
                onClick={() => setVisible(!visible)}
                style={disabled ? { opacity: "0.7" } : {}}
            >
                {btnText}
            </LinkButton>
            <div
                className={rootClasses.join(" ")}
                onClick={() => setVisible(false)}
            >
                <div
                    className={classes.modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    {children}
                </div>
            </div>
        </>
    );
};
