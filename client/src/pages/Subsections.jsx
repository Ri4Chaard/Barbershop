import React, { useContext, useEffect, useState } from "react";
import { Container } from "../components/UI/container/Container";
import { Context } from "..";
import { Link } from "react-router-dom";
import { LinkButton } from "../components/UI/button/LinkButton";
import { fetchSubsection } from "../http/subsectionAPI";
import { observer } from "mobx-react-lite";

export const Subsections = observer(() => {
    const { subsection } = useContext(Context);

    useEffect(() => {
        fetchSubsection().then((data) => subsection.setSubsections(data));
    }, []);

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
                                            {subs.address}
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
});
