import { IApp } from "../state/app";

export interface IAppProps extends IApp {
    getStocks: () => void;
}
