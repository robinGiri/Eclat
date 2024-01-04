const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
class UserService {
  select = {
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
  };

  async save(data) {
    try {
      const user = await prisma.user.create({
        data: data,
        select: this.select,
      });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }
  }
  async getUserByFilter(filter = {}) {
    const user = await prisma.user.findUnique({
      where: filter,
      select: this.select,
    });
    return user;
  }
  async getUserById(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: this.select,
    });
    return user;
  }

  async getAllUsers() {
    try {
      const user = await prisma.user.findMany({
        select: this.select,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async updateUser(email, data) {
    try {
      const user = await prisma.user.update({
        where: { email: email },
        data: data,
        select: this.select,
      });
      return user;
    } catch (error) {
      throw error;
    }
  }

  async logout(email) {
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
}

const userService = new UserService();

module.exports = userService;
