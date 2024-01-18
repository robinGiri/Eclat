const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const reviewSelect = {
  id: true,
  userId: true,
  productId: true,
  rating: true,
  comment: true,
  createdAt: true,
};

async function add(data) {
  try {
    const reviewModel = await prisma.review.create({
      data: data,
      select: reviewSelect,
    });
    return reviewModel;
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function getByUserID(userId) {
  try {
    const reviews = await prisma.review.findMany({
      where: {
        userId: userId,
      },
      select: reviewSelect,
    });
    return reviews;
  } catch (e) {
    console.log(e);
    throw e;
  }
}

async function deleteById(id) {
  try {
    await prisma.review.delete({
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
    await prisma.review.deleteMany({});
  } catch (e) {
    console.error(e);
    throw e;
  }
}

async function deleteAllByUserID(userId) {
  try {
    await prisma.review.deleteMany({
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
  deleteById,
  deleteAll,
  deleteAllByUserID,
};
