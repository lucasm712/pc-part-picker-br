/*
  Warnings:

  - You are about to drop the column `grafico integrado` on the `Cpu` table. All the data in the column will be lost.
  - You are about to drop the column `Maximo de ram` on the `Motherboard` table. All the data in the column will be lost.
  - You are about to drop the column `slots de memoria` on the `Motherboard` table. All the data in the column will be lost.
  - You are about to drop the `ssd` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[nome]` on the table `Cpu` will be added. If there are existing duplicate values, this will fail.
  - Changed the type of `tipoRam` on the `Motherboard` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `seloEficiencia` on the `Psu` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "SeloEficiencia" AS ENUM ('SEM_SELO', 'PLUS_80_WHITE', 'PLUS_80_BRONZE', 'PLUS_80_SILVER', 'PLUS_80_GOLD', 'PLUS_80_PLATINUM', 'PLUS_80_TITANIUM');

-- AlterTable
ALTER TABLE "Cpu" DROP COLUMN "grafico integrado",
ADD COLUMN     "grafico_integrado" BOOLEAN;

-- AlterTable
ALTER TABLE "Motherboard" DROP COLUMN "Maximo de ram",
DROP COLUMN "slots de memoria",
ADD COLUMN     "Maximo_de_ram" INTEGER,
ADD COLUMN     "slots_de_memoria" INTEGER,
DROP COLUMN "tipoRam",
ADD COLUMN     "tipoRam" "TipoRam" NOT NULL;

-- AlterTable
ALTER TABLE "Psu" DROP COLUMN "seloEficiencia",
ADD COLUMN     "seloEficiencia" "SeloEficiencia" NOT NULL;

-- DropTable
DROP TABLE "ssd";

-- DropEnum
DROP TYPE "seloEficiencia";

-- CreateTable
CREATE TABLE "Ssd" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tamanho" INTEGER NOT NULL,
    "tipoSsd" "TipoSsd" NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Ssd_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cpu_nome_key" ON "Cpu"("nome");
