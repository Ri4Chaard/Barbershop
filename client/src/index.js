import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles/nullstyle.css";
import "./styles/App.css";
import ClientStore from "./store/ClientStore";
import OrderStore from "./store/OrderStore";
import ServiceStore from "./store/ServiceStore";
import SubsectionStore from "./store/SubsectionStore";

export const Context = createContext(null);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <Context.Provider
            value={{
                client: new ClientStore(),
                service: new ServiceStore(),
                subsection: new SubsectionStore(),
                order: new OrderStore(),
            }}
        >
            <App />
        </Context.Provider>
    </React.StrictMode>
);
