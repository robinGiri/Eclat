/*
  Warnings:

  - A unique constraint covering the columns `[userID,productId]` on the table `Customization` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE `Customization` DROP FOREIGN KEY `Customization_productId_fkey`;

-- DropForeignKey
ALTER TABLE `Customization` DROP FOREIGN KEY `Customization_userID_fkey`;

-- AlterTable
ALTER TABLE `Customization` MODIFY `productId` INTEGER NULL,
    MODIFY `userID` INTEGER NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Customization_userID_productId_key` ON `Customization`(`userID`, `productId`);

-- AddForeignKey
ALTER TABLE `Customization` ADD CONSTRAINT `Customization_productId_fkey` FOREIGN KEY (`productId`) REFERENCES `Product`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Customization` ADD CONSTRAINT `Customization_userID_fkey` FOREIGN KEY (`userID`) REFERENCES `User`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
