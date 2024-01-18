const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const wishlistSelect = {
  id: true,
  userId: true,
  productId: true,
  quantity: true,
  Product: { select: { id: true, name: true, price: true } },
};

async function add(data) {
  try {
    const { userId, productId } = data;
    const existingWishlistItem = await getByUserIDAndProductID(
      userId,
      productId
    );

    if (existingWishlistItem.length > 0) {
      const error = new Error("Already in wishlist");
      error.statusCode = 409;
      throw error;
    }

    const wish = await prisma.wishlist.create({
      data: data,
      select: wishlistSelect,
    });

    return wish;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getByUserID(userId) {
  try {
    const wishlist = await prisma.wishlist.findMany({
      where: {
        userId: userId,
      },
      include: {
        Product: true,
      },
    });
    return wishlist;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function getByUserIDAndProductID(userId, productId) {
  try {
    const wishlist = await prisma.wishlist.findMany({
      where: {
        userId: userId,
        productId: productId,
      },
      include: {
        Product: true,
      },
    });
    return wishlist;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function deleteById(id) {
  try {
    await prisma.wishlist.delete({
      where: {
        id: id,
      },
    });
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function deleteAll() {
  try {
    await prisma.wishlist.deleteMany({});
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function deleteAllByUserID(userId) {
  try {
    await prisma.wishlist.deleteMany({
      where: {
        userId: userId,
      },
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
}

module.exports = {
  add,
  getByUserID,
  getByUserIDAndProductID,
  deleteById,
  deleteAll,
  deleteAllByUserID,
};
