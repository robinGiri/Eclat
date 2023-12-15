const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ImageService {
  async saveSingle(fileName, productID) {
    try {
      const res = await prisma.Image.create({
        data: {
          url: fileName,
          productId: productID,
        },
      });
      console.log(res);
    } catch (error) {
      console.error("Error saving image:", error.message);
    }
  }
  async saveMultiple(files, productID) {
    let data = [];

    try {
      //map the multiple file
      files.map((file) => {
        const filename = file;
        data.push({ url: filename, productId: productID });
      });

      //call once and create the bulk file
      const res = await prisma.Image.createMany({
        data: data,
      });
      data = [];
      console.log(res);
    } catch (error) {
      console.error("Error saving image:", error.message);
    }
  }
}

module.exports = new ImageService();
