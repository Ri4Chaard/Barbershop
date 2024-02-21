import { makeAutoObservable } from "mobx";

//client mistake

export default class ClientStore {
    constructor() {
        this._clients = [
            {
                id: 1,
                pib: "Половніков Ярослав Валентинович",
                phone: "0689694882",
                gender: "чоловік",
                numOfVisists: 0,
            },
            {
                id: 2,
                pib: "Лактіонов Артем Сергійович",
                phone: "0505304549",
                gender: "чоловік",
                numOfVisists: 0,
            },
        ];
        makeAutoObservable(this);
    }
    setClients(clients) {
        this._clients = clients;
    }
    get clients() {
        return this._clients;
    }
}
