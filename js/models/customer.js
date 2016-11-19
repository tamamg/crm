import Immutable from 'immutable';
import { guid } from '../services/guid';

var CustomerFields = Immutable.Record({
  id: null,
  name: null,
  age: 0,
  birthday: null,
  gender: 'male',
  imageUrl: null
});


export class Customer extends CustomerFields {
  constructor(fields = {}) {
    super(Object.assign({ id: guid() }, fields));
  }
  parse(data) {
    if (!data) {
      return this;
    }

    var fields = {};

    [
      'id', 'name', 'age', 'birthday', 'gender', 'imageUrl'
    ].forEach(field =>
      fields[field] = (data[field] !== undefined) ? data[field] : this.get(field)
    );


    var newCustomer = new Customer(fields);
    return Immutable.is(this, newCustomer) ? this : newCustomer;
  }
}
