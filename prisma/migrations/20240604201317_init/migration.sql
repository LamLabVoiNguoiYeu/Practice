/*
  Warnings:

  - You are about to drop the column `refresh_tokem` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "refresh_tokem",
ADD COLUMN     "refresh_toke" TEXT;
