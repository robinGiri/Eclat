// services/setting.service.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SettingService {
  // Create Setting
  async createOrUpdateSetting(currentSeasonId) {
    try {
      // Check if there is existing data
      const existingSetting = await prisma.setting.findFirst();

      if (existingSetting) {
        // If data exists, update it
        const updatedSetting = await prisma.setting.update({
          where: { id: existingSetting.id },
          data: {
            currentSeason: parseInt(currentSeasonId),
          },
        });

        return updatedSetting;
      } else {
        // If no data exists, create a new row
        const createdSetting = await prisma.setting.create({
          data: {
            currentSeason: parseInt(currentSeasonId),
          },
        });

        return createdSetting;
      }
    } catch (error) {
      throw error;
    }
  }

  // Read Setting
  async getSetting() {
    try {
      const setting = await prisma.setting.findFirst();
      return setting;
    } catch (error) {
      throw error;
    }
  }
}

const settingService = new SettingService();
module.exports = settingService;
