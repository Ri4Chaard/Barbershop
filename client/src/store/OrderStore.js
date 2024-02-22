import { makeAutoObservable } from "mobx";

export default class OrderStore {
    constructor() {
        this._orders = [
            {
                id: 1,
                pib: "Половніков Ярослав Валентинович",
                name: "Каре",
                price: 120,
                adress: "вул. Полунична, буд. 12",
                dateOfRecord: "21.02.2024",
            },
            {
                id: 2,
                pib: "Лактіонов Артем Сергійович",
                name: "Кроп",
                price: 100,
                adress: "вул. Миру, буд. 23",
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
