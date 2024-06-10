/*
  Warnings:

  - Added the required column `content` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `Host` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0,
ADD COLUMN     "title" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Host" ADD COLUMN     "role" "Role" NOT NULL;
