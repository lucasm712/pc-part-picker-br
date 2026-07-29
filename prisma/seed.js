 import { PrismaClient } from '@prisma/client'
 import { PrismaPg } from '@prisma/adapter-pg'
  
const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
const prisma = new PrismaClient({ adapter })

async function main() {
  
  const am4 = await prisma.socket.upsert({
    where: { nome: 'AM4' },
    update: {},
    create: { nome: 'AM4' },
  });

  const am5 = await prisma.socket.upsert({
    where: { nome: 'AM5' },
    update: {},
    create: { nome: 'AM5' },
  });

  const socketMap = {
    AM4: am4.id,
    AM5: am5.id,
  };

  
  const cpusRyzen5 = [
    { nome: 'Ryzen 5 5500', socket: 'AM4', preco: 544.90, wtts: 65, graficoIntegrado: false },
    { nome: 'Ryzen 5 5600GT', socket: 'AM4', preco: 989.00, wtts: 65, graficoIntegrado: true },
    { nome: 'Ryzen 5 7600X', socket: 'AM5', preco: 999.99, wtts: 105, graficoIntegrado: false },
    { nome: 'Ryzen 5 5600XT', socket: 'AM4', preco: 1299.99, wtts: 65, graficoIntegrado: false },
    { nome: 'Ryzen 5 4500', socket: 'AM4', preco: 580.16, wtts: 65, graficoIntegrado: false },
    { nome: 'Ryzen 5 7600', socket: 'AM5', preco: 1676.90, wtts: 65, graficoIntegrado: false },
    { nome: 'Ryzen 5 8600G', socket: 'AM5', preco: 1316.60, wtts: 65, graficoIntegrado: true },
    { nome: 'Ryzen 5 8500G', socket: 'AM5', preco: 799.00, wtts: 65, graficoIntegrado: true },
    { nome: 'Ryzen 5 9600X', socket: 'AM5', preco: 1666.22, wtts: 65, graficoIntegrado: false },
  ];
const cpusRyzen9 = [
  { nome: 'Ryzen 9 7900X', socket: 'AM5', preco: 1899.99, wtts: 170, graficoIntegrado: true },
  { nome: 'Ryzen 9 9950X3D', socket: 'AM5', preco: 4199.99, wtts: 170, graficoIntegrado: true },
  { nome: 'Ryzen 9 9900X3D', socket: 'AM5', preco: 3599.99, wtts: 120, graficoIntegrado: true },
  { nome: 'Ryzen 9 7950X3D', socket: 'AM5', preco: 4242.03, wtts: 120, graficoIntegrado: true },
  { nome: 'Ryzen 9 5900XT', socket: 'AM4', preco: 2710.90, wtts: 105, graficoIntegrado: false },
  { nome: 'Ryzen 9 9900X', socket: 'AM5', preco: 3660.90, wtts: 120, graficoIntegrado: true },
  { nome: 'Ryzen 9 9950X', socket: 'AM5', preco: 4499.63, wtts: 170, graficoIntegrado: true },
]; 

const cpusRyzen7 = [
  { nome: 'Ryzen 7 5700G', socket: 'AM4', preco: 1199.99, wtts: 65, graficoIntegrado: true },
  { nome: 'Ryzen 7 7700X', socket: 'AM5', preco: 1519.99, wtts: 105, graficoIntegrado: true },
  { nome: 'Ryzen 7 8700G', socket: 'AM5', preco: 1599.99, wtts: 65, graficoIntegrado: true },
  { nome: 'Ryzen 7 7800X3D', socket: 'AM5', preco: 1989.90, wtts: 120, graficoIntegrado: true },
  { nome: 'Ryzen 7 9700X', socket: 'AM5', preco: 3571.24, wtts: 65, graficoIntegrado: true },
  { nome: 'Ryzen 7 5700', socket: 'AM4', preco: 849.99, wtts: 65, graficoIntegrado: false },
  { nome: 'Ryzen 7 5700X', socket: 'AM4', preco: 1299.99, wtts: 65, graficoIntegrado: false },
  { nome: 'Ryzen 7 5800XT', socket: 'AM4', preco: 1599.99, wtts: 105, graficoIntegrado: false },
];

const todasCpus = [...cpusRyzen5, ...cpusRyzen7, ...cpusRyzen9];

  for (const cpu of todasCpus) {
    await prisma.cpu.upsert({
      where: { nome: cpu.nome },
      update: {
        preco: cpu.preco,
        wtts: cpu.wtts,
        graficoIntegrado: cpu.graficoIntegrado,
      },
      create: {
        nome: cpu.nome,
        socketId: socketMap[cpu.socket],
        preco: cpu.preco,
        wtts: cpu.wtts,
        graficoIntegrado: cpu.graficoIntegrado, 
      },
    });
  }

  console.log(`Seed concluído! ${todasCpus.length} CPUs processadas.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());