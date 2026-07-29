-- CreateEnum
CREATE TYPE "TipoRam" AS ENUM ('DDR4', 'DDR5');

-- CreateTable
CREATE TABLE "Socket" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Socket_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cpu" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "socketId" INTEGER NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "wtts" INTEGER,
    "grafico integrado" BOOLEAN,

    CONSTRAINT "Cpu_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Motherboard" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "socketId" INTEGER NOT NULL,
    "tipoRam" TEXT NOT NULL,
    "formFactor" TEXT,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Maximo de ram" INTEGER,
    "slots de memoria" INTEGER,

    CONSTRAINT "Motherboard_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Ram" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "tipo" "TipoRam" NOT NULL,

    CONSTRAINT "Ram_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Gpu" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "tdp" INTEGER NOT NULL,
    "preco" DECIMAL(65,30),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Gpu_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Socket_nome_key" ON "Socket"("nome");

-- AddForeignKey
ALTER TABLE "Cpu" ADD CONSTRAINT "Cpu_socketId_fkey" FOREIGN KEY ("socketId") REFERENCES "Socket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Motherboard" ADD CONSTRAINT "Motherboard_socketId_fkey" FOREIGN KEY ("socketId") REFERENCES "Socket"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
