import { $host } from "./index";

export const createOrder = async (
    dateOfRecord,
    clientId,
    serviceId,
    subsectionId
) => {
    const { data } = await $host.post(
        "api/order/create",
        dateOfRecord,
        clientId,
        serviceId,
        subsectionId
    );
    return data;
};

export const deleteOrder = async (id) => {
    const { data } = await $host.post("api/order/delete", id);
    return data;
};

export const editOrder = async (
    id,
    price,
    dateOfRecord,
    clientId,
    serviceId,
    subsectionId
) => {
    const { data } = await $host.post(
        "api/order/edit",
        id,
        price,
        dateOfRecord,
        clientId,
        serviceId,
        subsectionId
    );
};

export const fetchOrder = async () => {
    const { data } = await $host.get("api/order");
    return data;
};
