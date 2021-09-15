import { Dispatch } from 'redux';

import {ACTION_GET_STOCK, EVENT_DATA} from '../../common/constants';
import {io} from "socket.io-client";
import {IStock} from "../../interface/stock";

export const getStocks = (dispatch: Dispatch) => {
    io("http://localhost:3001").on(EVENT_DATA, (stock: IStock) => {
        dispatch({
            type: ACTION_GET_STOCK,
            stock
        })
    });
};
