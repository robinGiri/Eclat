/*
  Warnings:

  - You are about to alter the column `paymentmethod` on the `purchase` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Enum(EnumId(1))`.
  - Added the required column `token` to the `Purchase` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `purchase` ADD COLUMN `amount` DOUBLE NULL,
    ADD COLUMN `token` VARCHAR(191) NOT NULL,
    MODIFY `paymentmethod` ENUM('khalti', 'esewa', 'cashondelivery') NULL;

-- CreateTable
CREATE TABLE `Shipping` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `OrderId` INTEGER NULL,
    `status` ENUM('ordered', 'shipping', 'delivered') NOT NULL,
    `purchaseId` INTEGER NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Shipping` ADD CONSTRAINT `Shipping_OrderId_fkey` FOREIGN KEY (`OrderId`) REFERENCES `Order`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Shipping` ADD CONSTRAINT `Shipping_purchaseId_fkey` FOREIGN KEY (`purchaseId`) REFERENCES `Purchase`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
