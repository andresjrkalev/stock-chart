import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { IState } from '../../interface/state/state';

import App from './App';
import {getStocks} from "./action";

const mapStateToProps = ({ app: { stocks }}: IState) => ({
    stocks
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    getStocks: () => getStocks(dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
