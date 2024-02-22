import { makeAutoObservable } from "mobx";

export default class SubsectionStore {
    constructor() {
        this._subsections = [];
        makeAutoObservable(this);
    }
    setSubsections(subsections) {
        this._subsections = subsections;
    }
    get subsections() {
        return this._subsections;
    }
}
