import React, { useState } from "react";
import classes from "./Modal.module.css";
import { LinkButton } from "../UI/button/LinkButton";

export const Modal = ({ children, btnText }) => {
    const rootClasses = [classes.modal];
    const [visible, setVisible] = useState(false);
    if (visible) {
        rootClasses.push(classes.active);
    }
    return (
        <>
            <LinkButton onClick={() => setVisible(!visible)}>
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
