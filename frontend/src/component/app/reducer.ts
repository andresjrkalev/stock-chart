import { ACTION_GET_STOCK } from '../../common/constants';
import { IAction } from '../../interface/action';
import { IApp } from '../../interface/state/app';

const initialState: IApp = {
    stocks: []
};

export default (state = initialState, { type, stock }: IAction) => {
    if (type === ACTION_GET_STOCK) {
        return { ...state, stocks: [...state.stocks, stock] };
    } else {
        return state;
    }
};
