// services/setting.service.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SettingService {
  // Read Setting
  async getSetting() {
    try {
      const setting = await prisma.setting.findFirst();
      return setting;
    } catch (error) {
      throw error;
    }
  }

  // Update Setting
  async updateSetting(updatedData) {
    try {
      const updatedSetting = await prisma.setting.update({
        where: { id: 1 }, // Assuming there's only one setting row
        data: updatedData,
      });

      return updatedSetting;
    } catch (error) {
      throw error;
    }
  }
}

const settingService = new SettingService();
module.exports = settingService;
