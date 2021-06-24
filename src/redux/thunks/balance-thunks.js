import {makeGetRequest} from '../../dataManagment/srvConn';
import {getBalance} from '../reducers/balance-reducer';

export function getBalanceThunk(user) {
  return (dispatch) => {
    makeGetRequest(`cashbackbalance/${user.uid}`).then((res) => {
      if (res) dispatch(getBalance(res));
    });
  };
}
