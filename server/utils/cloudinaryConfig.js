import { config, uploader } from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
const cloudinaryConfig = (req, res, next) => {
  config({
    cloud_name: '',
    api_key: '',
    api_secret: '',
  });
  next();
};

export { cloudinaryConfig, uploader };
