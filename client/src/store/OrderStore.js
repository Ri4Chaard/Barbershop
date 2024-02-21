import { makeAutoObservable } from "mobx";

export default class OrderStore {
    constructor() {
        this._orders = [
            {
                id: 1,
                price: 120,
                dateOfRecord: "21.02.2024",
            },
            {
                id: 2,
                price: 100,
                dateOfRecord: "21.02.2024",
            },
        ];
        makeAutoObservable(this);
    }
    setOrders(orders) {
        this._orders = orders;
    }
    get orders() {
        return this._orders;
    }
}
