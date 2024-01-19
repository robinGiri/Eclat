const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const userSelect = {
  id: true,
  name: true,
  email: true,
  role: true,
  address: true,
  phone: true,
  password: ture,
  image: true,
  token: true,
  forgetToken: true,
  Cart: { select: { id: true } },
};

async function save(data) {
  try {
    const user = await prisma.user.create({
      data: data,
      select: userSelect,
    });
    return user;
  } catch (e) {
    throw e;
  }
}

async function getUserByFilter(filter = {}) {
  const user = await prisma.user.findUnique({
    where: filter,
  });
  return user;
}

async function getUserById(userId) {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      address: true,
      phone: true,
      password: false,
      image: true,
      token: true,
      forgetToken: true,
      Cart: { select: { id: true } },
    },
  });
  return user;
}

async function getAllUsers() {
  try {
    const users = await prisma.user.findMany({
      select: userSelect,
    });
    return users;
  } catch (error) {
    throw error;
  }
}

async function updateUser(email, data) {
  try {
    console.log(data);
    const user = await prisma.user.update({
      where: { email: email },
      data: data,
    });
    return user;
  } catch (error) {
    throw error;
  }
}

async function logoutUser(email) {
  try {
    await prisma.user.update({
      where: { email: email },
      data: { token: null },
    });
    return;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  save,
  getUserByFilter,
  getUserById,
  getAllUsers,
  updateUser,
  logoutUser,
};
