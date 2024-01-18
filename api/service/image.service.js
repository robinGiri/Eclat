const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ImageService {
  async saveImage(fileName, imageData) {
    try {
      const image = await prisma.Image.create({
        data: {
          url: fileName,
          imageData,
        },
      });
      return image;
    } catch (error) {
      throw error;
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
