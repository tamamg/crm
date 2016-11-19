import { DELETE_CUSTOMER } from '../types';

export function deleteCustomer(id) {
  return function (dispatch) {
    return new Promise((resolve, reject) => {
      dispatch({ type: DELETE_CUSTOMER, payload: { id }});
      resolve();
    });
  };
}
