import { makeAutoObservable } from "mobx";

export default class ServiceStore {
    constructor() {
        this._services = [
            {
                id: 1,
                name: "Каре",
                price: 120,
            },
            {
                id: 2,
                name: "Кроп",
                price: 100,
            },
        ];
        makeAutoObservable(this);
    }
    setServices(services) {
        this._services = services;
    }
    get services() {
        return this._services;
    }
}
