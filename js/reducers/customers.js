import { ADD_CUSTOMER, DELETE_CUSTOMER } from '../actions/types';
import Immutable, { List } from 'immutable';
import { Customer } from '../models/customer';

let defaultState =  [
  new Customer().parse({ name: 'Gilad', age: 34, birthday: '7/12/1982', gender: 'male' }),
  new Customer().parse({ name: 'Ronen', age: 500, birthday: '7/12/23', gender: 'female' })
];


export function customers(state = defaultState, { type, payload }) {
  switch (type) {
    case ADD_CUSTOMER:
      return [ ...state, new Customer().parse(payload.customer) ];
    case DELETE_CUSTOMER:
      let index = state.findIndex((x) => x.id === payload.id);
      return [ ...state.slice(0, index),  ...state.slice(index + 1) ];
    default:
      return state;
  }
}
