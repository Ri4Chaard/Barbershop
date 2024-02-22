import { $host } from "./index";

export const fetchSubsection = async () => {
    const { data } = await $host.get("api/subsection");
    return data;
};
