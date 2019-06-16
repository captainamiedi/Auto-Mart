// eslint-disable-next-line import/no-unresolved
//import multer from 'multer';
// import cloudinary from 'cloudinary';

export const responseMsg = (res, status, message, data) => res.status(status).json({
  status,
  message,
  data,
});

export const carResponseMsg = (res, status, message, car) => res.status(status).json({
  status,
  message,
  car,
});

export const userResponseMsg = (res, status, message, user) => res.status(status).json({
  status,
  message,
  user,
});

export const orderResponseMsg = (res, status, message, order) => res.status(status).json({
  status,
  message,
  order,
});


// const storage = multer.diskStorage({
//   filename: (req, file, next) => {
//     next(null, `${file.originalname}`);
//   },
// });

// const fileFilter = (req, file, next) => {
//   const image = file.mimetype === 'image/jpeg' || file.mimetype === 'image/png';
//   if (!file) {
//     next();
//   }
//   if (image) {
//     next(null, true);
//   } else {
//     const error = new Error('file type not supported');
//     error.status = 400;
//     next(error, false);
//   }
// };

// export const upload = multer({ storage, limits: 1024 * 1024 * 5, fileFilter });

// export const profileImg = multer({ storage, limits: 1024 * 1024 * 2, fileFilter });

// export const cloudinaryData = {
//   cloud_name: process.env.CLOUDINARY_NAME,
//   api_key: process.env.CLOUDINARY_API_KEY,
//   api_secret: process.env.CLOUDINARY_API_SECRET,
// };
