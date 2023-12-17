const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
class UserService {
  async save(data) {
    const user = await prisma.user.create({ data: data });
    return user;
  }
  async getUserByFilter(filter = {}) {
    const user = await prisma.user.findUnique({ where: filter });
    return user;
  }
  async getAllUser() {
    const users = await prisma.user.findMany();
    return users;
  }
  async updateUser(email, data) {
    const user = await prisma.user.update({
      where: { email: email },
      data: data,
    });
    console.log(user);
    return user;
  }
  async logout(email) {
    await prisma.user.update({
      where: { email: email },
      data: { token: null },
    });
    return;
  }
}

const userService = new UserService();

module.exports = userService;
