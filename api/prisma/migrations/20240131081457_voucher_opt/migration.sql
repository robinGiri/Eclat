-- DropForeignKey
ALTER TABLE `order` DROP FOREIGN KEY `Order_voucherId_fkey`;

-- AlterTable
ALTER TABLE `order` MODIFY `voucherId` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Order` ADD CONSTRAINT `Order_voucherId_fkey` FOREIGN KEY (`voucherId`) REFERENCES `Voucher`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
