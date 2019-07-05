import { config, uploader } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: 'captainamiedi',
    api_key: '186765843778837',
    api_secret: 'UzSVnCYjK4saIDizI9Dkh1-euUg',
  });
  next();
};

export { cloudinaryConfig, uploader };