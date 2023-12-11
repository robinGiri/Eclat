const multer = require("multer");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadPath = "./public/uploads/";
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: (req, file, cb) => {
    const randomFileName = uuidv4(); 
    const ext = file.originalname.split(".").pop();
    const fullFileName = `${randomFileName}.${ext}`;
    cb(null, fullFileName);
  },
});

const uploader = multer({ storage: storage });
module.exports = uploader;