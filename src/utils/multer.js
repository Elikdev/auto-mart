import multer, { diskStorage } from "multer";
// Multer config
export default multer({
  storage: diskStorage({}), // using cloudinary to store files
  fileFilter: (req, file, cb) => {
      if (
        file.mimetype === "image/png" ||
        file.mimetype === "image/jpg" ||
        file.mimetype === "image/jpeg"
      ) {
        // check file type to be png, jpeg, or jpg or mp4
        cb(null, true);
      } else {
        cb(null, false); // else fails
      }
  },
});