-- CreateTable
CREATE TABLE `Product` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `category` VARCHAR(191) NULL,
    `brands` VARCHAR(191) NULL,
    `price` DOUBLE NULL,
    `discount` DOUBLE NULL,
    `afterdiscount` DOUBLE NULL,
    `seller` VARCHAR(191) NULL,
    `isFeatured` BOOLEAN NOT NULL,
    `tags` VARCHAR(191) NULL,
    `stock` INTEGER NULL,
    `image` VARCHAR(191) NULL,
    `status` VARCHAR(191) NULL,
    `viewCount` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
