//its the helper function that will upload the images
const multer = require("multer");
const fs = require("fs");

const myStorage = multer.diskStorage({
  //here we set the destination
  destination: (req, file, cb) => {
    let path = "./public/uploads/";
    if (!fs.existsSync(path)) {
      fs.mkdirSync(path);
    }
    cb(null, path);
  },
  //here we set the filename
  filename: (req, file, cb) => {
    let ext = file.originalname.split(".").pop();
    let name = Date.now() + "." + ext;
    cb(null, name);
  },
});
//here we filter the data only certain type of image can be uploaded
const imageFilter = (req, file, cb) => {
  let allowed = ["jpg", "jpeg", "png", "gif", "bmp", "webp", "svg"];
  let ext = file.originalname.split(".").pop();
  if (allowed.includes(ext.toLowerCase())) {
    cb(null, true);
  } else {
    cb({ code: 400, msg: "Image type not supported" }, null);
  }
};
const uploader = multer({
  storage: myStorage,
  fileFilter: imageFilter,
});

module.exports = uploader;
