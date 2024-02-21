import { Clients } from "../pages/Clients";
import { Menu } from "../pages/Menu";
import { Orders } from "../pages/Orders";
import { Services } from "../pages/Services";
import { Subsections } from "../pages/Subsections";

export const routes = [
    { path: "/menu", element: <Menu /> },
    { path: "/clients", element: <Clients /> },
    { path: "/services", element: <Services /> },
    { path: "/subsections", element: <Subsections /> },
    { path: "/orders", element: <Orders /> },
];

export const paths = [
    { path: "/clients", name: "Клієнти" },
    { path: "/services", name: "Послуги" },
    { path: "/subsections", name: "Філії" },
    { path: "/orders", name: "Замовлення" },
];
