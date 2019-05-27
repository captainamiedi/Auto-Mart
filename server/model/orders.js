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

  /**
   * 
   * @param {uuid} id
   * @returns {object} order object
   */
  findOne(id) {
    return this.order.find(order => order.id === id);
  }
  /**
   * 
   * @param {uuid} id
   * @param {object} data 
   */
  // update(id, data) {
  //   const order = this.findOne(id);
  //   const index = this.reflections.indexOf(reflection);
  //   this.reflections[index].success = data['success'] || reflection.success;
  //   this.reflections[index].lowPoint = data['lowPoint'] || reflection.lowPoint;
  //   this.reflections[index].takeAway = data['takeAway'] || reflection.takeAway;
  //   this.reflections[index].modifiedDate = moment.now()
  //   return this.reflections[index];
  // }
}
export default new Order();