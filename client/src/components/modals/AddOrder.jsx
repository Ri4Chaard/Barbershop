import React, { useState } from "react";
import { Modal } from "./Modal";
import { LinkButton } from "../UI/button/LinkButton";
import { createOrder } from "../../http/orderAPI";

export const AddOrder = ({ clients, services, subsections, orders }) => {
    const [visible, setVisible] = useState(false);

    const [clientPib, setClientPib] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [subsectionAdress, setSubsectionAdress] = useState("");
    const [date, setDate] = useState("");

    const addOrder = () => {
        createOrder({
            dateOfRecord: date,
            clientId: clientPib,
            serviceId: serviceName,
            subsectionId: subsectionAdress,
        }).then((data) => {
            setDate("");
            setServiceName("");
            setSubsectionAdress("");
            setClientPib("");
        });
        setVisible(false);
    };

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            btnText="Додати замовлення"
        >
            <div>
                <h2>Замовлення</h2>
                <form>
                    <p>ПІБ</p>
                    <select
                        name="pib"
                        onChange={(e) => setClientPib(e.target.value)}
                    >
                        <option value={null} selected>
                            ---
                        </option>
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.pib}
                            </option>
                        ))}
                    </select>
                    <p>Назва послуги</p>
                    <select
                        name="service"
                        onChange={(e) => setServiceName(e.target.value)}
                    >
                        <option value={null} selected>
                            ---
                        </option>
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <p>Адреса філії</p>
                    <select
                        name="subsection"
                        onChange={(e) => setSubsectionAdress(e.target.value)}
                    >
                        <option value={null} selected>
                            ---
                        </option>
                        {subsections.map((subsection) => (
                            <option key={subsection.id} value={subsection.id}>
                                {subsection.address}
                            </option>
                        ))}
                    </select>
                    <p>Дата запису</p>
                    <input
                        className="date"
                        type="datetime-local"
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                    <LinkButton onClick={addOrder}>Додати</LinkButton>
                </form>
            </div>
        </Modal>
    );
};
