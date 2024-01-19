/*
  Warnings:

  - Added the required column `customization` to the `Customization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Customization` ADD COLUMN `customization` VARCHAR(191) NOT NULL;
