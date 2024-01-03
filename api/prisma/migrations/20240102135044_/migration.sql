/*
  Warnings:

  - You are about to drop the column `createdAt` on the `season` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `season` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `season` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    MODIFY `name` VARCHAR(191) NULL;
