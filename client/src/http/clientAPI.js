import { $host } from "./index";

export const createClient = async (pib, phone, gender) => {
    const { data } = await $host.post("api/client/create", pib, phone, gender);
    return data;
};

export const fetchClient = async () => {
    const { data } = await $host.get("api/client");
    return data;
};
