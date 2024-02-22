import React, { useEffect, useState } from "react";
import classes from "./Modal.module.css";
import { Modal } from "./Modal";
import { editService } from "../../http/serviceAPI";
import { LinkButton } from "../UI/button/LinkButton";

export const EditService = ({ service }) => {
    const [serviceId, setServiceId] = useState("");
    const [servicePrice, setServicePrice] = useState("");
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        if (service) {
            setServiceId(service.id);
            setServicePrice(service.price);
        } else {
            setServiceId("");
            setServicePrice("");
        }
    }, [service]);

    const editServiceInfo = () => {
        editService({
            id: serviceId,
            price: servicePrice,
        }).then((data) => {
            setServiceId("");
            setServicePrice("");
        });
        setVisible(false);
    };

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            btnText="Редагувати"
            disabled={service ? false : true}
        >
            <div>
                <h2>{service.name}</h2>
                <form>
                    <input
                        value={servicePrice}
                        onChange={(e) => setServicePrice(e.target.value)}
                        className={classes.textInput}
                        type="text"
                        placeholder="Ціна"
                    />

                    <LinkButton onClick={editServiceInfo}>
                        Редагувати
                    </LinkButton>
                </form>
            </div>
        </Modal>
    );
};
