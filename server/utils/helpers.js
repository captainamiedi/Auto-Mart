

export const responseMsg = (res, status, message, data) => res.status(status).json({
  status,
  message,
  data,
});

export const carResponseMsg = (res, status, message, data) => res.status(status).json({
  status,
  message,
  data,
});

export const userResponseMsg = (res, status, message, data) => res.status(status).json({
  status,
  message,
  data,
});

export const orderResponseMsg = (res, status, message, data) => res.status(status).json({
  status,
  message,
  data,
});

export const flagResponseMsg = (res, status, message, order) => res.status(status).json({
  status,
  message,
  order,
});
