import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
import { LinkButton } from "../UI/button/LinkButton";
import { Modal } from "./Modal";
import { editClient } from "../../http/clientAPI";

const EditClient = ({ client }) => {
    const [clientId, setClientId] = useState("");
    const [clientPib, setClientPib] = useState("");
    const [clientPhone, setClientPhone] = useState("");
    const [clientGender, setClientGender] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (client) {
            setClientId(client.id);
            setClientPib(client.pib);
            setClientPhone(client.phone);
        } else {
            setClientId("");
            setClientPib("");
            setClientPhone("");
        }
    }, [client]);

    const editClientInfo = (e) => {
        editClient({
            id: clientId,
            pib: clientPib,
            phone: clientPhone,
            gender: clientGender,
        }).then((data) => {
            setClientId("");
            setClientPib("");
            setClientPhone("");
            setClientGender("");
        });
        setVisible(false);
    };

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            btnText="Редагувати"
            disabled={client ? false : true}
        >
            <form>
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
                        id="maleEdit"
                        type="radio"
                        name="gender"
                        onChange={() => setClientGender("чоловік")}
                    />
                    <label htmlFor="maleEdit">Чоловік</label>
                </div>
                <div className={classes.radioInput}>
                    <input
                        id="femaleEdit"
                        type="radio"
                        name="gender"
                        onChange={() => setClientGender("жінка")}
                    />
                    <label htmlFor="femaleEdit">Жінка</label>
                </div>
                <LinkButton onClick={editClientInfo}>Редагувати</LinkButton>
            </form>
        </Modal>
    );
};

export default EditClient;
