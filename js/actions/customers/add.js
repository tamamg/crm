import { ADD_CUSTOMER_START, ADD_CUSTOMER_END } from '../types';
import { guid } from '../../services/guid';

export function addCustomer({ name, age, gender, imageUrl }) {
    return function (dispatch) {
      return new Promise((resolve, reject) => {
        let customer = { name, age, gender, imageUrl, id: guid() };
        dispatch({ type: ADD_CUSTOMER_END, payload: { customer }});
        resolve(customer);
      });
    };
}
