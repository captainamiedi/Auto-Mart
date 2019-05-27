import orderModel from '../model/orders';

const order = {
    /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} order object 
   */
  create(req, res) {
    if (!req.body.status && !req.body.price && !req.body.model 
        && !req.body.maunfacturer && !req.body.state 
        && !req.body.email) {
      return res.status(400).json({'message': 'All fields are required'});
    }
    const order = orderModel.create(req.body);
    return res.status(201).json(order);
  },
  /**
   * 
   * @param {object} req 
   * @param {object} res
   * @returns {object} order object
   */
  getOne(req, res) {
    const order = orderModel.findOne(req.params.id);
    return res.status(200).json(order);
  },
};

export default order;