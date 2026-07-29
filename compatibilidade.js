
import { PrismaClient } from '@prisma/client'
 import { PrismaPg } from '@prisma/adapter-pg'
  

  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })


async function main() {
  
  const allUsers = await prisma.user.findMany()
  console.log(allUsers)
}

function compatibilidadeCpuMb (cpu, motherboard) { 
    let cpuCompativel = cpu.socketId === motherboard.socketId;
    return cpuCompativel
}

function compatibilidadeRamMb (ram,motherboard) {
    let ramCompativel = ram.tipo === motherboard.ramTipo;
    return ramCompativel 
}
   
function ramCalculo (ram) { 
let ramCalculo = ram.tamanho * ram.pentes; 
    return ramCalculo   
} 
function ramLimit (motherboard,ramCalculo) {
     let ramLimit = motherboard.Maximo_de_ram >= ramCalculo;
     return ramLimit
}
function limiteSlot (motherboard,ram) {
    let slotLimite = motherboard.slots_de_memoria >= ram.pentes; 
    return slotLimite
} 
