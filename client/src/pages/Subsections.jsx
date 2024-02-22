import React, { useContext, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/UI/button/LinkButton";

export const Subsections = () => {
    const { subsection } = useContext(Context);

    return (
        <div className="infoTable">
            <Container>
                <div className="infoTable__content">
                    <div className="infoTable__table">
                        <h1>Філії</h1>
                        <table>
                            <tbody>
                                <tr>
                                    <th>Адреса філії</th>
                                </tr>
                                {subsection.subsections.map((subs) => (
                                    <tr key={subs.id}>
                                        <td style={{ textAlign: "center" }}>
                                            {subs.adress}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className="infoTable__buttons">
                        <Link key="/menu" to="/menu">
                            <LinkButton>Назад</LinkButton>
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    );
};
