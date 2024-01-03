-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_seasonId_fkey`;

-- AlterTable
ALTER TABLE `product` MODIFY `seasonId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_seasonId_fkey` FOREIGN KEY (`seasonId`) REFERENCES `Season`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
