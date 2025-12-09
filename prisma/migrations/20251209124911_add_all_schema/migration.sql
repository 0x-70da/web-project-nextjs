/*
  Warnings:

  - You are about to drop the column `message_content` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `receiver_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `sender_id` on the `Message` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `User` table. All the data in the column will be lost.
  - The `role` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `content` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `recipientId` to the `Message` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Message` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('USER', 'ADMIN');

-- DropIndex
DROP INDEX "User_email_key";

-- AlterTable
ALTER TABLE "Message" DROP COLUMN "message_content",
DROP COLUMN "receiver_id",
DROP COLUMN "sender_id",
ADD COLUMN     "content" TEXT NOT NULL,
ADD COLUMN     "recipientId" INTEGER NOT NULL,
ADD COLUMN     "senderId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "email",
ADD COLUMN     "blocked" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'USER';

-- CreateTable
CREATE TABLE "Activity" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "details" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Activity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockedUser" (
    "id" SERIAL NOT NULL,
    "reason" TEXT,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "BlockedUser_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_senderId_fkey" FOREIGN KEY ("senderId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Message" ADD CONSTRAINT "Message_recipientId_fkey" FOREIGN KEY ("recipientId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Activity" ADD CONSTRAINT "Activity_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockedUser" ADD CONSTRAINT "BlockedUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
