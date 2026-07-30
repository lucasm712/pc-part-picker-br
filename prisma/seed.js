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

  const lga1700 = await prisma.socket.upsert({
  where: { nome: 'LGA1700' },
  update: {},
  create: { nome: 'LGA1700' },
});
  const lga1851 = await prisma.socket.upsert({
  where: { nome: 'LGA1851' },
  update: {},
  create: { nome: 'LGA1851' },
});

const socketMap = {
    AM4: am4.id,
    AM5: am5.id, 
    LGA1700: lga1700.id, 
    LGA1851: lga1851.id,
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

const cpusIntel = [
  { nome: 'Core i3-12100F', socket: 'LGA1700', preco: 599.99, wtts: 58, graficoIntegrado: false },
  { nome: 'Core i5-12400F', socket: 'LGA1700', preco: 915.37, wtts: 65, graficoIntegrado: false },
  { nome: 'Core i5-14400F', socket: 'LGA1700', preco: 1214.18, wtts: 65, graficoIntegrado: false },
  { nome: 'Core i5-14600K', socket: 'LGA1700', preco: 1799.99, wtts: 125, graficoIntegrado: true },
  { nome: 'Core i5-14600KF', socket: 'LGA1700', preco: 1699.99, wtts: 125, graficoIntegrado: false },
  { nome: 'Core i7-12700KF', socket: 'LGA1700', preco: 1999.99, wtts: 125, graficoIntegrado: false },
  { nome: 'Core i7-14700K', socket: 'LGA1700', preco: 2799.99, wtts: 125, graficoIntegrado: true },
  { nome: 'Core i7-14700KF', socket: 'LGA1700', preco: 2249.99, wtts: 125, graficoIntegrado: false },
  { nome: 'Core i9-14900K', socket: 'LGA1700', preco: 2999.99, wtts: 125, graficoIntegrado: true },
  { nome: 'Core i9-14900KF', socket: 'LGA1700', preco: 2999.99, wtts: 125, graficoIntegrado: false }, 
  { nome: 'Core i5-12400', socket: 'LGA1700', preco: 1523.92, wtts: 65, graficoIntegrado: true },
  { nome: 'Core i5-12600KF', socket: 'LGA1700', preco: 1359.57, wtts: 125, graficoIntegrado: false },
  { nome: 'Core i5-14400', socket: 'LGA1700', preco: 1499.00, wtts: 65, graficoIntegrado: true },
  { nome: 'Core i7-14700F', socket: 'LGA1700', preco: 2599.99, wtts: 65, graficoIntegrado: false },
  { nome: 'Core i9-12900F', socket: 'LGA1700', preco: 1999.99, wtts: 65, graficoIntegrado: false },
  { nome: 'Core i9-12900KF', socket: 'LGA1700', preco: 2599.99, wtts: 125, graficoIntegrado: false },
  { nome: 'Core i3-14100F', socket: 'LGA1700', preco: 699.99, wtts: 60, graficoIntegrado: false },
  { nome: 'Core i5-12600K', socket: 'LGA1700', preco: 2693.25, wtts: 125, graficoIntegrado: true },
  { nome: 'Core i7-12700', socket: 'LGA1700', preco: 2129.90, wtts: 65, graficoIntegrado: true },
  { nome: 'Core i7-12700F', socket: 'LGA1700', preco: 2158.15, wtts: 65, graficoIntegrado: false },
  { nome: 'Core i7-12700K', socket: 'LGA1700', preco: 2681.71, wtts: 125, graficoIntegrado: true }, 
  { nome: 'Core Ultra 5 225', socket: 'LGA1851', preco: 1499.99, wtts: 65, graficoIntegrado: true },
  { nome: 'Core Ultra 5 225F', socket: 'LGA1851', preco: 569.99, wtts: 65, graficoIntegrado: false },
  { nome: 'Core Ultra 5 245K', socket: 'LGA1851', preco: 799.99, wtts: 125, graficoIntegrado: true },
  { nome: 'Core Ultra 5 245KF', socket: 'LGA1851', preco: 699.99, wtts: 125, graficoIntegrado: false },
  { nome: 'Core Ultra 7 265K', socket: 'LGA1851', preco: 2299.99, wtts: 125, graficoIntegrado: true },
  { nome: 'Core Ultra 7 265KF', socket: 'LGA1851', preco: 1999.99, wtts: 125, graficoIntegrado: false },
  { nome: 'Core Ultra 9 285K', socket: 'LGA1851', preco: 3999.99, wtts: 125, graficoIntegrado: true },
  { nome: 'Core Ultra 9 285', socket: 'LGA1851', preco: 2999.99, wtts: 65, graficoIntegrado: true },
];


const todasCpus = [...cpusRyzen5, ...cpusRyzen7, ...cpusRyzen9, ...cpusIntel];

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

  console.log(`Seed concluído ${todasCpus.length} CPUs processadas.`);

 
const motherboardsAM4 = [
    { nome: 'MSI A520M-A PRO', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 399.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
    { nome: 'ASRock A520M-HVS', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 379.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
    { nome: 'ASUS Prime A520M-E', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 409.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
    { nome: 'ASUS TUF Gaming A520M-Plus II', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 579.00, Maximo_de_ram: 128, slots_de_memoria: 2 },
    { nome: 'Husky Nexus B450', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 349.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
    { nome: 'Gigabyte B550M K', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 549.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
    { nome: 'ASRock B550M-HDV', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 579.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
    { nome: 'MSI B550M Pro-VDH', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 699.00, Maximo_de_ram: 128, slots_de_memoria: 2 },
    { nome: 'Gigabyte B550M K Ultra Durable', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'mATX', preco: 725.00, Maximo_de_ram: 128, slots_de_memoria: 2 },
    { nome: 'Gigabyte B550 Aorus Elite AX V2', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'ATX', preco: 1419.00, Maximo_de_ram: 128, slots_de_memoria: 4 },
    { nome: 'MSI MPG B550 Gaming Plus', socket: 'AM4', tipoRam: 'DDR4', formFactor: 'ATX', preco: 1199.00, Maximo_de_ram: 128, slots_de_memoria: 4 },
  ];

const motherboardsLGA1700 = [
  { nome: 'Gigabyte H610M K', socket: 'LGA1700', tipoRam: 'DDR4', formFactor: 'mATX', preco: 440.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
  { nome: 'MSI Pro B760M-E', socket: 'LGA1700', tipoRam: 'DDR4', formFactor: 'mATX', preco: 769.00, Maximo_de_ram: 128, slots_de_memoria: 4 },
  { nome: 'ASUS Prime H610M-E D4', socket: 'LGA1700', tipoRam: 'DDR4', formFactor: 'mATX', preco: 765.00, Maximo_de_ram: 64, slots_de_memoria: 2 },
  { nome: 'Gigabyte B760M DS3H DDR5', socket: 'LGA1700', tipoRam: 'DDR5', formFactor: 'mATX', preco: 1170.00, Maximo_de_ram: 256, slots_de_memoria: 4 },
  { nome: 'MSI Pro B760M-A DDR5', socket: 'LGA1700', tipoRam: 'DDR5', formFactor: 'mATX', preco: 849.00, Maximo_de_ram: 256, slots_de_memoria: 4 },
];

const motherboardsLGA1851 = [
  { nome: 'Gigabyte B860M Aorus Elite', socket: 'LGA1851', tipoRam: 'DDR5', formFactor: 'mATX', preco: 1729.00, Maximo_de_ram: 256, slots_de_memoria: 4 },
  { nome: 'Gigabyte B860M Aorus Elite WiFi6E Ice', socket: 'LGA1851', tipoRam: 'DDR5', formFactor: 'mATX', preco: 1799.00, Maximo_de_ram: 256, slots_de_memoria: 4 },
  { nome: 'ASUS B860M AYW Gaming', socket: 'LGA1851', tipoRam: 'DDR5', formFactor: 'mATX', preco: 1419.00, Maximo_de_ram: 256, slots_de_memoria: 4 },
];

const motherboardsAM5 = [
  { nome: 'Gigabyte B650M Gaming Rev.1.0', socket: 'AM5', tipoRam: 'DDR5', formFactor: 'mATX', preco: 999.00, Maximo_de_ram: 128, slots_de_memoria: 4 },
  { nome: 'ASUS Prime A620M-E', socket: 'AM5', tipoRam: 'DDR5', formFactor: 'mATX', preco: 775.00, Maximo_de_ram: 128, slots_de_memoria: 2 },
  { nome: 'MSI Pro B840M-B', socket: 'AM5', tipoRam: 'DDR5', formFactor: 'mATX', preco: 850.00, Maximo_de_ram: 128, slots_de_memoria: 2 },
  { nome: 'MSI MAG B650 Tomahawk', socket: 'AM5', tipoRam: 'DDR5', formFactor: 'ATX', preco: 1800.00, Maximo_de_ram: 256, slots_de_memoria: 4 },
  { nome: 'Gigabyte B650M Aorus Elite AX', socket: 'AM5', tipoRam: 'DDR5', formFactor: 'mATX', preco: 1480.00, Maximo_de_ram: 128, slots_de_memoria: 4 },
];

  const todasMotherboards = [...motherboardsAM4, ...motherboardsLGA1700, ...motherboardsLGA1851,...motherboardsAM5];

  for (const motherboard of todasMotherboards) {
    await prisma.motherboard.upsert({
      where: { nome: motherboard.nome },
      update: {
        preco: motherboard.preco,
        tipoRam: motherboard.tipoRam,
        formFactor: motherboard.formFactor,
        Maximo_de_ram: motherboard.Maximo_de_ram,
        slots_de_memoria: motherboard.slots_de_memoria,
      },
      create: {
        nome: motherboard.nome,
        socketId: socketMap[motherboard.socket],
        tipoRam: motherboard.tipoRam,
        formFactor: motherboard.formFactor,
        preco: motherboard.preco,
        Maximo_de_ram: motherboard.Maximo_de_ram,
        slots_de_memoria: motherboard.slots_de_memoria,
      },
    });
  }

  console.log(`Seed concluído: ${todasMotherboards.length} motherboards processadas.`);

const ramsDDR4 = [
  { nome: 'Corsair Vengeance RGB Pro 2666MHz 8GB', tipo: 'DDR4', tamanho: 8, pentes: 2, preco: 1326.00 },
  { nome: 'Kingston Fury Beast 3200MHz 16GB', tipo: 'DDR4', tamanho: 16, pentes: 1, preco: 1221.00 },
  { nome: 'Husky Impulse 3200MHz 16GB', tipo: 'DDR4', tamanho: 16, pentes: 1, preco: 669.99 },
  { nome: 'Husky Impulse 3200MHz 8GB', tipo: 'DDR4', tamanho: 8, pentes: 1, preco: 379.00 },
  { nome: 'Kingston Fury Beast 3200MHz 8GB', tipo: 'DDR4', tamanho: 8, pentes: 1, preco: 629.00 },
  { nome: 'Kingston Fury Beast RGB 3600MHz 8GB', tipo: 'DDR4', tamanho: 8, pentes: 1, preco: 845.00 },
]; 

const ramsDDR5 = [
  { nome: 'Kingston Fury Beast 5600MHz 16GB', tipo: 'DDR5', tamanho: 16, pentes: 1, preco: 1800.00 },
  { nome: 'Corsair Vengeance 6000MHz 16GB', tipo: 'DDR5', tamanho: 16, pentes: 2, preco: 3500.00 },
  { nome: 'Kingston Fury Beast 5600MHz 8GB', tipo: 'DDR5', tamanho: 8, pentes: 1, preco: 1400.00 },
];
const todasRams = [...ramsDDR4, ...ramsDDR5];

for (const ram of todasRams) {
  await prisma.ram.upsert({
    where: { nome: ram.nome },
    update: {
      preco: ram.preco,
      tipo: ram.tipo,
      tamanho: ram.tamanho,
      pentes: ram.pentes,
    },
    create: {
      nome: ram.nome,
      tipo: ram.tipo,
      tamanho: ram.tamanho,
      pentes: ram.pentes,
      preco: ram.preco,
    }, 
    
  }); 
  } 
   console.log(`Seed concluído: ${todasRams.length} ram processadas.`); 

   const gpus = [
  { nome: 'Gigabyte RX 7600 Gaming OC 8GB', tdp: 165, memoria: 8, preco: 1599.00 },
  { nome: 'ASUS RTX 5050 Dual OC 8GB', tdp: 130, memoria: 8, preco: 1959.00 },
  { nome: 'ASRock Arc B580 Challenger OC 12GB', tdp: 190, memoria: 12, preco: 1969.00 },
  { nome: 'MSI RTX 5060 Shadow 2X OC 8GB', tdp: 145, memoria: 8, preco: 2300.00 },
  { nome: 'ASRock RX 9060 XT CL16GO 16GB', tdp: 182, memoria: 16, preco: 2800.00 },
  { nome: 'ASUS RTX 5060 Ti 16GB', tdp: 180, memoria: 16, preco: 4299.00 },
  { nome: 'RTX 5070 Infinity 3 12GB', tdp: 250, memoria: 12, preco: 4699.00 },
  { nome: 'ASUS Prime RTX 9070 XT OC Edition 16GB', tdp: 304, memoria: 16, preco: 4800.00 },
  { nome: 'Powercolor Reaper RX 9070 XT', tdp: 304, memoria: 16, preco: 4200.00 },
  { nome: 'MSI RTX 5070 Ti 16GB', tdp: 300, memoria: 16, preco: 7784.00 },
  { nome: 'MSI RTX 5080 Gaming Trio OC 16GB', tdp: 360, memoria: 16, preco: 12500.00 },
  { nome: 'MSI RTX 5080 Shadow 16GB', tdp: 360, memoria: 16, preco: 13599.00 },
  { nome: 'ASUS ROG Astral RTX 5090 White 32GB', tdp: 575, memoria: 32, preco: 26999.00 },
  { nome: 'ASUS ROG Astral RTX 5090 32GB', tdp: 575, memoria: 32, preco: 28699.00 },
]; 

for (const gpu of gpus) {
  await prisma.gpu.upsert({
    where: { nome: gpu.nome },
    update: {
      tdp: gpu.tdp,
      memoria: gpu.memoria,
      preco: gpu.preco,
    },
    create: {
      nome: gpu.nome,
      tdp: gpu.tdp,
      memoria: gpu.memoria,
      preco: gpu.preco,
    },
  });
}
 console.log(`Seed concluído: ${gpus.length} GPUs processadas.`); 

}



main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect()); 

