import { ADD_CUSTOMER_START, ADD_CUSTOMER_END, DELETE_CUSTOMER } from '../actions/types';
import { Customer } from '../models/customer';
import { guid } from '../services/guid';

let defaultState = {
  list: [
    new Customer().parse({ id: guid(), name: 'Gilad', age: 34, birthday: '7/12/1982', gender: 'male', imageUrl: 'http://gdpit.com/avatars_pictures/comics-creatures/cocr10.jpg'}),
    new Customer().parse({ id: guid(), name: 'Ronen', age: 500, birthday: '7/12/23', gender: 'female', imageUrl: 'http://gdpit.com/avatars_pictures/comics-creatures/cocr102.jpg'})
  ]
};

export function customers(state = defaultState, { type, payload }) {
  switch (type) {
    case ADD_CUSTOMER_START:
      return {...state, isNewCustomerLoading: true };
    case ADD_CUSTOMER_END:
      return {...state, isNewCustomerLoading: false, list: [ ...state.list, new Customer().parse(payload.customer) ] };
    case DELETE_CUSTOMER:
      let index = state.list.findIndex((x) => x.id === payload.id);
      return {...state, list: [ ...state.list.slice(0, index),  state.list.slice(index + 1) ] };
    default:
      return state;
  }
}
