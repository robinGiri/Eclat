const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function createSeason(name) {
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

async function getAllSeasons() {
  try {
    const seasons = await prisma.season.findMany();
    return seasons;
  } catch (error) {
    throw error;
  }
}

async function getSeasonById(seasonId) {
  try {
    const season = await prisma.season.findUnique({
      where: { id: seasonId },
    });
    return season;
  } catch (error) {
    throw error;
  }
}

async function updateSeason(seasonId, updatedData) {
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

async function deleteSeason(seasonId) {
  try {
    const deletedSeason = await prisma.season.delete({
      where: { id: seasonId },
    });
    return deletedSeason;
  } catch (error) {
    throw error;
  }
}

async function setCurrentSeason(seasonId) {
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

async function getCurrentSeason() {
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

module.exports = {
  createSeason,
  getAllSeasons,
  getSeasonById,
  updateSeason,
  deleteSeason,
  setCurrentSeason,
  getCurrentSeason,
};
