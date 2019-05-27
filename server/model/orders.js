import moment from 'moment';
import uuid from 'uuid';


class Order {
    /**
     * class constructor
     * @param {object} data
     */
    constructor() {
      this.order = [];  
    }

    /**
   * 
   * @returns {object} order object
   */
  create(data) {
    const newOrder = {
      id: uuid.v4(),
      status: data.status || '',
      price: data.price || '',
      model: data.model || '',
      manufacturer: data.manufacturer,
      state: data.state,
      email: data.email,
      createdDate: moment.now(),
      modifiedDate: moment.now(),
    };
    this.order.push(newOrder);
    return newOrder;
  }
}
export default new Order();