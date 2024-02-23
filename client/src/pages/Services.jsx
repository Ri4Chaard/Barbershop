import React, { useContext, useEffect, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/UI/button/LinkButton";
import { fetchService } from "../http/serviceAPI";
import { observer } from "mobx-react-lite";
import { EditService } from "../components/modals/EditService";
import { AddService } from "../components/modals/AddService";

export const Services = observer(() => {
    const { service } = useContext(Context);

    const [selectedRow, setSelectedRow] = useState(null);
    const [selectedService, setSelectedService] = useState("");

    useEffect(() => {
        fetchService().then((data) => service.setServices(data));
    }, []);

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
                                            if (selectedRow == serv.id) {
                                                setSelectedRow(null);
                                                setSelectedService("");
                                            } else {
                                                setSelectedRow(serv.id);
                                                setSelectedService(serv);
                                            }
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
                        <AddService />
                        <EditService service={selectedService} />
                    </div>
                </div>
            </Container>
        </div>
    );
});
