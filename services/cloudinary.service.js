const cloudinary = require("cloudinary").v2;
const dotenv = require("dotenv");

dotenv.config({ path: "./.env" });

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
  shorten: true,
});

const uploadImage = async (file) => {
  try {
    const image = await cloudinary.uploader.upload(file, {
      unique_filename: true,
      use_filename: true,
      faces: true,
      transformation: [{ crop: "limit" }],
    });
    return image.secure_url;
  } catch (err) {
    throw err;
  }
};

module.exports = { uploadImage };
