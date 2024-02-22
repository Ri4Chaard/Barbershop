import React, { useState } from "react";
import classes from "./Modal.module.css";
import { LinkButton } from "../UI/button/LinkButton";
import { Modal } from "./Modal";
import { createClient } from "../../http/clientAPI";

const AddUser = () => {
    const [clientPib, setClientPib] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientGender, setClientGender] = useState("");

    console.log(clientPib);
    const addNewClient = () => {
        createClient({
            pib: clientPib,
            phone: clientPhone,
            gender: clientGender,
        }).then((data) => {
            setClientPib("");
            setClientPhone("");
            setClientGender("");
        });
    };

    return (
        <Modal btnText="Додати">
            <form action="#">
                <input
                    value={clientPib}
                    onChange={(e) => setClientPib(e.target.value)}
                    className={classes.textInput}
                    type="text"
                    placeholder="ПІБ"
                />
                <input
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className={classes.textInput}
                    type="text"
                    placeholder="Номер телефону"
                />
                <div className={classes.radioInput}>
                    <input
                        id="male"
                        type="radio"
                        name="gender"
                        onChange={() => setClientGender("чоловік")}
                    />
                    <label htmlFor="male">Чоловік</label>
                </div>
                <div className={classes.radioInput}>
                    <input
                        id="female"
                        type="radio"
                        name="gender"
                        onChange={() => setClientGender("жінка")}
                    />
                    <label htmlFor="female">Жінка</label>
                </div>
                <LinkButton onClick={addNewClient}>Додати</LinkButton>
            </form>
        </Modal>
    );
};

export default AddUser;
