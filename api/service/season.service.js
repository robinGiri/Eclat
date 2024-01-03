// services/season.service.js
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

class SeasonService {
  // Create Season
  async createSeason(name) {
    try {
      const createdSeason = await prisma.season.create({
        data: {
          name,
        },
      });
      return createdSeason;
    } catch (error) {
      throw error;
    }
  }

  // Read all Seasons
  async getAllSeasons() {
    try {
      const seasons = await prisma.season.findMany();
      return seasons;
    } catch (error) {
      throw error;
    }
  }

  // Read Season by ID
  async getSeasonById(seasonId) {
    try {
      const season = await prisma.season.findUnique({
        where: { id: seasonId },
      });
      return season;
    } catch (error) {
      throw error;
    }
  }

  // Update Season
  async updateSeason(seasonId, updatedData) {
    try {
      const updatedSeason = await prisma.season.update({
        where: { id: seasonId },
        data: updatedData,
      });
      return updatedSeason;
    } catch (error) {
      throw error;
    }
  }

  // Delete Season by ID
  async deleteSeason(seasonId) {
    try {
      const deletedSeason = await prisma.season.delete({
        where: { id: seasonId },
      });
      return deletedSeason;
    } catch (error) {
      throw error;
    }
  }

  // this will set the current season
  async setCurrentSeason(seasonId) {
    try {
      // Find the current season and update isCurrent to false
      await prisma.season.updateMany({
        where: { isCurrentSeason: true },
        data: { isCurrentSeason: false },
      });

      // Set the specified season as the current season
      await prisma.season.update({
        where: { id: seasonId },
        data: { isCurrentSeason: true },
      });

      return { success: true, message: "Current season updated successfully." };
    } catch (error) {
      console.error(error);
      return { success: false, message: "Error updating current season." };
    }
  }

  // here we are gonna get the current season
  async getCurrentSeason() {
    try {
      // Find the season marked as current
      const currentSeason = await prisma.season.findFirst({
        where: { isCurrentSeason: true },
      });

      return currentSeason;
    } catch (error) {
      console.error(error);
      throw new Error("Error retrieving current season.");
    } finally {
      await prisma.$disconnect();
    }
  }
}

const seasonService = new SeasonService();

module.exports = seasonService;
