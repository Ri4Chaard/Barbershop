import { makeAutoObservable } from "mobx";

//client mistake

export default class ClientStore {
    constructor() {
        this._clients = [];
        makeAutoObservable(this);
    }
    setClients(clients) {
        this._clients = clients;
    }
    get clients() {
        return this._clients;
    }
}
