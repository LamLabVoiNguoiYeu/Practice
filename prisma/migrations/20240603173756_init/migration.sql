/*
  Warnings:

  - You are about to drop the column `content` on the `Booking` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `Booking` table. All the data in the column will be lost.
  - Added the required column `hostId` to the `Booking` table without a default value. This is not possible if the table is not empty.
  - Added the required column `content` to the `Review` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Booking" DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "hostId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Booking" ADD CONSTRAINT "Booking_hostId_fkey" FOREIGN KEY ("hostId") REFERENCES "Host"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
