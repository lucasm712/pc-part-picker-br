/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Psu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Psu_nome_key" ON "Psu"("nome");
