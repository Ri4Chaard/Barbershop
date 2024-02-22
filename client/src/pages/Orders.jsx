import React, { useContext, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/UI/button/LinkButton";
import { AddOrder } from "../components/modals/AddOrder";

export const Orders = () => {
    const { order } = useContext(Context);
    const { client } = useContext(Context);
    const { service } = useContext(Context);
    const { subsection } = useContext(Context);

    const [selectedRow, setSelectedRow] = useState(null);
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
                                    <th>Ціна</th>
                                    <th>Адреса філії</th>
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
                                            selectedRow == ord.id
                                                ? setSelectedRow(null)
                                                : setSelectedRow(ord.id);
                                        }}
                                    >
                                        <td>{ord.pib}</td>
                                        <td>{ord.name}</td>
                                        <td>{ord.price}</td>
                                        <td>{ord.adress}</td>
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
                        <AddOrder />
                        <LinkButton>Редагувати</LinkButton>
                    </div>
                </div>
            </Container>
        </div>
    );
};
