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
  async deleteImageByUrl(imageUrl) {
    try {
      const deletedImage = await prisma.image.delete({
        where: { url: imageUrl },
      });

      return deletedImage;
    } catch (error) {
      throw error;
    }
  }
  async findImageByUrl(imageUrl) {
    try {
      const image = await prisma.image.findUnique({
        where: { url: imageUrl },
      });

      return image;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new ImageService();
