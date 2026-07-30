/*
  Warnings:

  - A unique constraint covering the columns `[nome]` on the table `Case` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Case_nome_key" ON "Case"("nome");
