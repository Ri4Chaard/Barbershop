import { makeAutoObservable } from "mobx";

export default class SubsectionStore {
    constructor() {
        this._subsections = [
            {
                id: 1,
                adress: "вул. Полунична, б. 12",
            },
            {
                id: 2,
                adress: "вул. Миру, б.23",
            },
        ];
        makeAutoObservable(this);
    }
    setSubsections(subsections) {
        this._subsections = subsections;
    }
    get subsections() {
        return this._subsections;
    }
}
