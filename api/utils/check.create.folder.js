const fs = require("fs");

const checkandcreate = async (path) => {
  // Check if the directory exists
  if (fs.existsSync(path)) {
    return;
  } else {
    // If the directory doesn't exist, create it
    fs.mkdir(path, { recursive: true }, (err) => {
      if (err) {
        console.error(`Error creating directory: ${err.message}`);
      } else {
        return;
      }
    });
  }
};

module.exports = { checkandcreate };
