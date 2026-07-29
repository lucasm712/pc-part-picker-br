/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Motherboard` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Motherboard_nome_key" ON "Motherboard"("nome");
