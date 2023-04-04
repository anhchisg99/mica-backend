import {v2 as cloudinary} from 'cloudinary'
import { CloudinaryStorage } from 'multer-storage-cloudinary';
import multer from 'multer';

// const app = express();
// Configuration 
cloudinary.config({
    cloud_name: "dzo1tqhjz",
    api_key: "924279883175895",
    api_secret: "KQI6ffIcNLkWtFlETOvt0b0jZS8"
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'test',
        format: async (req, file) => 'png', // supports promises as well
        public_id: (req, file) => 'computed-filename-using-request',
    },
});

const parser = multer({ storage: storage });

export default parser