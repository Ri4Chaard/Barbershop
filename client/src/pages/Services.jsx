import React, { useContext, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/UI/button/LinkButton";

export const Services = () => {
    const { service } = useContext(Context);

    const [selectedRow, setSelectedRow] = useState(null);
    return (
        <div className="infoTable">
            <Container>
                <div className="infoTable__content">
                    <div className="infoTable__table">
                        <h1>Послуги</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Назва послуги</th>
                                    <th>Ціна</th>
                                </tr>
                                {service.services.map((serv) => (
                                    <tr
                                        key={serv.id}
                                        style={
                                            selectedRow == serv.id
                                                ? { backgroundColor: "yellow" }
                                                : {}
                                        }
                                        onClick={() => {
                                            selectedRow == serv.id
                                                ? setSelectedRow(null)
                                                : setSelectedRow(serv.id);
                                        }}
                                    >
                                        <td style={{ textAlign: "center" }}>
                                            {serv.name}
                                        </td>
                                        <td>{`${serv.price} грн.`}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="infoTable__buttons">
                        <Link key="/menu" to="/menu">
                            <LinkButton>Назад</LinkButton>
                        </Link>
                        <LinkButton>Редагувати</LinkButton>
                    </div>
                </div>
            </Container>
        </div>
    );
};
