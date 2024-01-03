-- AlterTable
ALTER TABLE `season` ADD COLUMN `isCurrentSeason` BOOLEAN NOT NULL DEFAULT false;

-- CreateTable
CREATE TABLE `Setting` (
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Setting_name_key`(`name`),
    PRIMARY KEY (`name`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
