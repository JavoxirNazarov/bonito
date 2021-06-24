import {makeGetRequest} from '../../dataManagment/srvConn';
import {getStocks} from '../reducers/stocks-reducer';

export function getStocksThunk() {
  return (dispatch) => {
    const currentDate = new Date();

    let YYYY = currentDate.getFullYear();
    let MM = currentDate.getMonth() + 1;
    let DD = currentDate.getDate();

    const senDate = [
      YYYY,
      (MM > 9 ? '' : '0') + MM,
      (DD > 9 ? '' : '0') + DD,
    ].join('');

    makeGetRequest(`promo/${senDate}`).then((res) => {
      if (res) dispatch(getStocks(res));
    });
  };
}
