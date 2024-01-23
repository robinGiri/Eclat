/*
  Warnings:

  - Made the column `voucherId` on table `order` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `user` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_voucherId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `voucherId` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `product` MODIFY `description` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `image` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_voucherId_fkey` FOREIGN KEY (`voucherId`) REFERENCES `Voucher`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
