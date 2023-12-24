function slugify(data) {
  let small = data.toLowerCase();
  let slug = small.replaceAll(" ", "-");
  return slug;
}

const deleteFile = (path) => {
  if (fs.existsSync(path)) {
    fs.unlinkSync(path);
    return true;
  } else {
    return false;
  }
};

const OrderMapper = (data) => {};
module.exports = { slugify, deleteFile };
