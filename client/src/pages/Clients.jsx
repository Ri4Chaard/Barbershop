import React, { useContext, useState } from "react";
import "../styles/clients.css";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { LinkButton } from "../components/UI/button/LinkButton";
import { Link } from "react-router-dom";
import AddUser from "../components/modals/AddUser";

export const Clients = () => {
    const { client } = useContext(Context);

    const [selectedRow, setSelectedRow] = useState(null);
    return (
        <div className="clients">
            <Container>
                <div className="clients__content">
                    <div className="clients__table">
                        <h1>Клієнти</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>ПІБ</th>
                                    <th>Телефон</th>
                                    <th>Стать</th>
                                    <th>Кількість відвідувань</th>
                                </tr>
                                {client.clients.map((cl) => (
                                    <tr
                                        key={cl.id}
                                        style={
                                            selectedRow == cl.id
                                                ? { backgroundColor: "yellow" }
                                                : {}
                                        }
                                        onClick={() => {
                                            selectedRow == cl.id
                                                ? setSelectedRow(null)
                                                : setSelectedRow(cl.id);
                                        }}
                                    >
                                        <td>{cl.pib}</td>
                                        <td>{cl.phone}</td>
                                        <td>{cl.gender}</td>
                                        <td>{cl.numOfVisists}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="clients__buttons">
                        <Link key="/menu" to="/menu">
                            <LinkButton>Назад</LinkButton>
                        </Link>
                        <AddUser />
                        <LinkButton>Редагувати</LinkButton>
                    </div>
                </div>
            </Container>
        </div>
    );
};
