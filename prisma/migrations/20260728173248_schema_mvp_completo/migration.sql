/*
  Warnings:

  - Added the required column `memoria` to the `Gpu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tamanho` to the `Ram` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TipoSsd" AS ENUM ('NVME_M2', 'SATA_M2', 'SATA_2_5');

-- CreateEnum
CREATE TYPE "seloEficiencia" AS ENUM ('SEM_SELO', 'PLUS_80_WHITE', 'PLUS_80_BRONZE', 'PLUS_80_SILVER', 'PLUS_80_GOLD', 'PLUS_80_PLATINUM', 'PLUS_80_TITANIUM');

-- AlterTable
ALTER TABLE "Gpu" ADD COLUMN     "memoria" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Ram" ADD COLUMN     "pentes" INTEGER NOT NULL DEFAULT 1,
ADD COLUMN     "tamanho" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "CpuCooler" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "CpuCooler_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ssd" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "tipoSsd" "TipoSsd" NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "ssd_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Psu" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "wtts" INTEGER NOT NULL,
    "seloEficiencia" "seloEficiencia" NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Psu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Case" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Case_pkey" PRIMARY KEY ("id")
);
