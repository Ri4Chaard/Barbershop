import React, { useEffect, useState } from "react";
import { Modal } from "./Modal";
import { LinkButton } from "../UI/button/LinkButton";
import { editOrder } from "../../http/orderAPI";

export const EditOrder = ({ clients, services, subsections, order }) => {
    const [orderId, setOrderId] = useState("");
    const [clientPib, setClientPib] = useState("");
    const [serviceName, setServiceName] = useState("");
    const [subsectionAdress, setSubsectionAdress] = useState("");
    const [date, setDate] = useState("");
    const [visible, setVisible] = useState(false);

    const editOrderInfo = () => {
        editOrder({
            id: orderId,
            price: order.price,
            dateOfRecord: date,
            clientId: clientPib,
            serviceId: serviceName,
            subsectionId: subsectionAdress,
        }).then((data) => {
            setOrderId("");
            setClientPib("");
            setServiceName("");
            setSubsectionAdress("");
            setDate("");
        });
        setVisible(false);
    };

    useEffect(() => {
        if (order) {
            setOrderId(order.id);
            setClientPib(order.clientId);
            setServiceName(order.serviceId);
            setSubsectionAdress(order.subsectionId);
            setDate(order.dateOfRecord);
        } else {
            setOrderId("");
            setClientPib("");
            setServiceName("");
            setSubsectionAdress("");
            setDate("");
        }
    }, [order]);

    return (
        <Modal
            visible={visible}
            setVisible={setVisible}
            btnText="Редагувати"
            disabled={order ? false : true}
        >
            <div>
                <h2>Замовлення</h2>
                <form>
                    <p>ПІБ</p>
                    <select
                        name="pib"
                        value={clientPib}
                        onChange={(e) => setClientPib(e.target.value)}
                    >
                        {clients.map((client) => (
                            <option key={client.id} value={client.id}>
                                {client.pib}
                            </option>
                        ))}
                    </select>
                    <p>Назва послуги</p>
                    <select
                        name="service"
                        value={serviceName}
                        onChange={(e) => setServiceName(e.target.value)}
                    >
                        {services.map((service) => (
                            <option key={service.id} value={service.id}>
                                {service.name}
                            </option>
                        ))}
                    </select>
                    <p>Адреса філії</p>
                    <select
                        name="subsection"
                        value={subsectionAdress}
                        onChange={(e) => setSubsectionAdress(e.target.value)}
                    >
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
                        value={date}
                        onChange={(e) => {
                            setDate(e.target.value);
                        }}
                    />
                    <LinkButton onClick={editOrderInfo}>Зберегти</LinkButton>
                </form>
            </div>
        </Modal>
    );
};
