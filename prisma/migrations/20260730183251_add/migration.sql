/*
  Warnings:

  - Added the required column `tipo` to the `CpuCooler` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoCooler" AS ENUM ('AIR', 'WATER');

-- AlterTable
ALTER TABLE "CpuCooler" ADD COLUMN     "tipo" "TipoCooler" NOT NULL;
