import React, { useState } from "react";
import classes from "./Modal.module.css";
import { Modal } from "./Modal";
import { LinkButton } from "../UI/button/LinkButton";
import { createService } from "../../http/serviceAPI";

export const AddService = () => {
    const [serviceName, setServiceName] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [visible, setVisible] = useState(false);

    const addNewService = () => {
        createService({
            name: serviceName,
            price: servicePrice,
        }).then(() => {
            setServiceName("");
            setServicePrice("");
        });
        setVisible(false);
    };

    return (
        <Modal visible={visible} setVisible={setVisible} btnText="Додати">
            <div>
                {/* <h2></h2> */}
                <form>
                    <input
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                        className={classes.textInput}
                        type="text"
                        placeholder="Назва послуги"
                    />
                    <input
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                        className={classes.textInput}
                        type="text"
                        placeholder="Ціна"
                    />

                    <LinkButton onClick={addNewService}>Додати</LinkButton>
                </form>
            </div>
        </Modal>
    );
};
