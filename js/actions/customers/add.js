import { ADD_CUSTOMER } from '../types';

export function addCustomer(customer) {
  return {
    type: ADD_CUSTOMER,
    payload: { customer }
  }
}
