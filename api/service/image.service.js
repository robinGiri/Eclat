const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class ImageService{

    async save(fileName, productID) {
        try {
          const res = await prisma.Image.create({
                data : {
                    url : fileName,
                    productId : productID
                }
          });
          console.log(res);
        } catch (error) {
          console.error("Error saving image:", error.message);
        }
      }
}
module.exports = new ImageService()