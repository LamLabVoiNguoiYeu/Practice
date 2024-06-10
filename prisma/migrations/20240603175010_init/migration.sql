/*
  Warnings:

  - Added the required column `password` to the `Host` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Host" ADD COLUMN     "password" TEXT NOT NULL;
