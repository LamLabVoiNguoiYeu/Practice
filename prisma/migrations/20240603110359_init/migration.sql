/*
  Warnings:

  - You are about to drop the column `rating` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `hostId` to the `Accommodation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Accommodation" ADD COLUMN     "hostId" TEXT NOT NULL,
ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "rating";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "rating" DOUBLE PRECISION NOT NULL DEFAULT 0;

-- AddForeignKey
ALTER TABLE "Accommodation" ADD CONSTRAINT "Accommodation_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
