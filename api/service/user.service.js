const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
class UserService {
  include = { Cart: true };

  async save(data) {
    try {
      const user = await prisma.user.create({
        data: data,
        include: this.include,
      });
      return user;
    } catch (e) {
      console.log(e);
      throw e;
    }

    return user;
  }
  async getUserByFilter(filter = {}) {
    const user = await prisma.user.findUnique({
      where: filter,
      include: this.include,
    });
    return user;
  }
  async getUserById(userId) {
    const user = await prisma.user.findUnique({
      where: { id: userId },
      include: this.include,
    });
    return user;
  }

  async getAllUsers() {
    const user = await prisma.user.findMany();
    return user;
  }

  async updateUser(email, data) {
    try {
      const user = await prisma.user.update({
        where: { email: email },
        data: data,
        include: this.include,
      });
      return user;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  async logout(email) {
    await prisma.user.update({
      where: { email: email },
      data: { token: null },
      include: this.include,
    });
    return;
  }
}

const userService = new UserService();

module.exports = userService;
