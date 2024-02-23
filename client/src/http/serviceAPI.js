import { $host } from "./index";

export const createService = async (name, price) => {
    const { data } = await $host.post("api/service/create", name, price);
    return data;
};

export const deleteService = async (id) => {
    const { data } = await $host.post("api/service/delete", id);
    return data;
};

export const editService = async (id, name, price) => {
    const { data } = await $host.post("api/service/edit", id, name, price);
};

export const fetchService = async () => {
    const { data } = await $host.get("api/service");
    return data;
};
