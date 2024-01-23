const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function saveImage(fileName, productId) {
  try {
    const image = await prisma.image.create({
      data: {
        url: fileName,
        productId: productId,
      },
    });
    return image;
  } catch (error) {
    throw error;
  }
}

async function deleteImageByUrl(imageUrl) {
  try {
    const deletedImage = await prisma.image.delete({
      where: { url: imageUrl },
    });
    return deletedImage;
  } catch (error) {
    throw error;
  }
}

async function findImageByUrl(imageUrl) {
  try {
    const image = await prisma.image.findUnique({
      where: { url: imageUrl },
    });
    return image;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  saveImage,
  deleteImageByUrl,
  findImageByUrl,
};
