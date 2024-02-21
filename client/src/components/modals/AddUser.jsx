import React, { useState } from "react";
import classes from "./Modal.module.css";
import { LinkButton } from "../UI/button/LinkButton";

const AddUser = () => {
    const [newClient, setNewClient] = useState({
        pib: "",
        phone: "",
        gender: "",
    });
    const addNewClient = (e) => {
        e.preventDefault();
        console.log(newClient);
        setNewClient({ pib: "", phone: "", gender: "" });
    };

    const rootClasses = [classes.modal];
    const [visible, setVisible] = useState(false);
    if (visible) {
        rootClasses.push(classes.active);
    }

    return (
        <>
            <LinkButton onClick={() => setVisible(!visible)}>Додати</LinkButton>
            <div
                className={rootClasses.join(" ")}
                onClick={() => setVisible(false)}
            >
                <div
                    className={classes.modalContent}
                    onClick={(e) => e.stopPropagation()}
                >
                    <form action="#">
                        <input
                            value={newClient.pib}
                            onChange={(e) =>
                                setNewClient({
                                    ...newClient,
                                    pib: e.target.value,
                                })
                            }
                            className={classes.textInput}
                            type="text"
                            placeholder="ПІБ"
                        />
                        <input
                            value={newClient.phone}
                            onChange={(e) =>
                                setNewClient({
                                    ...newClient,
                                    phone: e.target.value,
                                })
                            }
                            className={classes.textInput}
                            type="text"
                            placeholder="Номер телефону"
                        />
                        <div className={classes.radioInput}>
                            <input
                                id="male"
                                type="radio"
                                name="gender"
                                onChange={() =>
                                    setNewClient({
                                        ...newClient,
                                        gender: "Чоловік",
                                    })
                                }
                            />
                            <label htmlFor="male">Чоловік</label>
                        </div>
                        <div className={classes.radioInput}>
                            <input
                                id="female"
                                type="radio"
                                name="gender"
                                onChange={() =>
                                    setNewClient({
                                        ...newClient,
                                        gender: "Жінка",
                                    })
                                }
                            />
                            <label htmlFor="female">Жінка</label>
                        </div>
                        <LinkButton onClick={addNewClient}>Додати</LinkButton>
                    </form>
                </div>
            </div>
        </>
    );
};

export default AddUser;
