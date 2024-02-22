import { makeAutoObservable } from "mobx";

export default class SubsectionStore {
    constructor() {
        this._subsections = [
            {
                id: 1,
                adress: "вул. Полунична, буд. 12",
            },
            {
                id: 2,
                adress: "вул. Миру, буд. 23",
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
