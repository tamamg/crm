import { DELETE_CUSTOMER } from '../types';

export function deleteCustomer(id) {
  return {
    type: DELETE_CUSTOMER,
    payload: { id }
  }
}
