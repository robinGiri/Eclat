-- AlterTable
ALTER TABLE `shipping` MODIFY `status` ENUM('ordered', 'shipping', 'delivered') NOT NULL DEFAULT 'ordered';
