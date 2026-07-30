/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Gpu` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Gpu_nome_key" ON "Gpu"("nome");
