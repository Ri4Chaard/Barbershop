import React from "react";
import "../styles/menu.css";
import { Link } from "react-router-dom";
import { Container } from "../components/UI/container/Container";
import { LinkButton } from "../components/UI/button/LinkButton";
import { paths } from "../router";

export const Menu = () => {
    return (
        <div className="menu">
            <Container>
                <div className="menu__content">
                    {paths.map((path) => (
                        <Link key={path.path} to={path.path}>
                            <LinkButton>{path.name}</LinkButton>
                        </Link>
                    ))}
                </div>
            </Container>
        </div>
    );
};
