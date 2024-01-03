/*
  Warnings:

  - You are about to drop the column `isCurrentSeason` on the `season` table. All the data in the column will be lost.
  - The primary key for the `setting` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `createdAt` on the `setting` table. All the data in the column will be lost.
  - You are about to drop the column `name` on the `setting` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `setting` table. All the data in the column will be lost.
  - Added the required column `id` to the `Setting` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Setting_name_key` ON `setting`;

-- AlterTable
ALTER TABLE `season` DROP COLUMN `isCurrentSeason`;

-- AlterTable
ALTER TABLE `setting` DROP PRIMARY KEY,
    DROP COLUMN `createdAt`,
    DROP COLUMN `name`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `currentSeason` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);
