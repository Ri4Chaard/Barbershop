import React, { useContext, useEffect, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/UI/button/LinkButton";
import { AddOrder } from "../components/modals/AddOrder";
import { deleteOrder, fetchOrder } from "../http/orderAPI";
import { fetchClient } from "../http/clientAPI";
import { fetchSubsection } from "../http/subsectionAPI";
import { fetchService } from "../http/serviceAPI";
import { observer } from "mobx-react-lite";
import { EditOrder } from "../components/modals/EditOrder";

export const Orders = observer(() => {
    const { order } = useContext(Context);
    const { client } = useContext(Context);
    const { service } = useContext(Context);
    const { subsection } = useContext(Context);

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedOrder, setSelectedOrder] = useState("");

    useEffect(() => {
        fetchOrder().then((data) => order.setOrders(data));
        fetchClient().then((data) => client.setClients(data));
        fetchSubsection().then((data) => subsection.setSubsections(data));
        fetchService().then((data) => service.setServices(data));
    }, []);

    const deleteSelectedOrder = () => {
        deleteOrder({ id: selectedOrder.id }).then((data) => {
            setSelectedOrder("");
        });
        window.location.reload();
    };

    return (
        <div className="infoTable">
            <Container>
                <div className="infoTable__content">
                    <div className="infoTable__table">
                        <h1>Замовлення</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>ПІБ</th>
                                    <th>Назва послуги</th>
                                    <th>Адреса філії</th>
                                    <th>Ціна грн.</th>
                                    <th>Дата запису</th>
                                </tr>
                                {order.orders.map((ord) => (
                                    <tr
                                        key={ord.id}
                                        style={
                                            selectedRow == ord.id
                                                ? { backgroundColor: "yellow" }
                                                : {}
                                        }
                                        onClick={() => {
                                            if (selectedRow == ord.id) {
                                                setSelectedRow(null);
                                                setSelectedOrder("");
                                            } else {
                                                setSelectedRow(ord.id);
                                                setSelectedOrder(ord);
                                            }
                                        }}
                                    >
                                        <td>{ord.clientName}</td>
                                        <td>{ord.serviceName}</td>
                                        <td>{ord.subsectionName}</td>
                                        <td>{ord.price}</td>
                                        <td>{ord.dateOfRecord}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="infoTable__buttons">
                        <Link key="/menu" to="/menu">
                            <LinkButton>Назад</LinkButton>
                        </Link>
                        <AddOrder
                            clients={client.clients}
                            services={service.services}
                            subsections={subsection.subsections}
                        />
                        <LinkButton
                            onClick={deleteSelectedOrder}
                            disabled={selectedOrder ? false : true}
                            style={
                                selectedOrder
                                    ? {}
                                    : { opacity: "0.7", zIndex: 0 }
                            }
                        >
                            Видалити
                        </LinkButton>
                        <EditOrder
                            clients={client.clients}
                            services={service.services}
                            subsections={subsection.subsections}
                            order={selectedOrder}
                        />
                    </div>
                </div>
            </Container>
        </div>
    );
});
