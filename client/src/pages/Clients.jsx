import React, { useContext, useEffect, useState } from "react";
import "../styles/clients.css";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { LinkButton } from "../components/UI/button/LinkButton";
import { Link } from "react-router-dom";
import { observer } from "mobx-react-lite";
import { deleteClient, fetchClient } from "../http/clientAPI";
import AddClient from "../components/modals/AddClient";
import EditClient from "../components/modals/EditClient";

export const Clients = observer(() => {
    const { client } = useContext(Context);

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedClient, setSelectedClient] = useState("");

    useEffect(() => {
        fetchClient().then((data) => client.setClients(data));
    }, []);

    console.log(selectedClient.id);

    const deleteSelectedClient = () => {
        deleteClient({ id: selectedClient.id }).then((data) => {
            setSelectedClient("");
        });
        window.location.reload();
    };

    return (
        <div className="infoTable">
            <Container>
                <div className="infoTable__content">
                    <div className="infoTable__table">
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
                                            if (selectedRow == cl.id) {
                                                setSelectedRow(null);
                                                setSelectedClient("");
                                            } else {
                                                setSelectedRow(cl.id);
                                                setSelectedClient(cl);
                                            }
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
                    <div className="infoTable__buttons">
                        <Link key="/menu" to="/menu">
                            <LinkButton>Назад</LinkButton>
                        </Link>
                        <AddClient />
                        <LinkButton
                            onClick={deleteSelectedClient}
                            disabled={selectedClient ? false : true}
                            style={
                                selectedClient
                                    ? {}
                                    : { opacity: "0.7", zIndex: 0 }
                            }
                        >
                            Видалити
                        </LinkButton>
                        <EditClient client={selectedClient} />
                    </div>
                </div>
            </Container>
        </div>
    );
});
