import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaPg } from '@prisma/adapter-pg'

import express from 'express' 
  const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
  const prisma = new PrismaClient({ adapter })

  const app = express()
app.use(express.json()) 



async function getCpuData (req,res) {

    let cpuData = await prisma.cpu.findMany()
    res.json(cpuData)

}
app.get('/api/cpus', getCpuData) 

async function getMotherboardData (req,res) { 
    let mbData = await prisma.motherboard.findMany() 
    res.json(mbData)
}
app.get('/api/motherboards', getMotherboardData)

async function getGpuData(req,res) {
    let gpuData = await prisma.gpu.findMany() 
    res.json(gpuData) 
} 
 app.get('/api/gpus', getGpuData) 

async function getRamData(req,res) { 
    let ramData = await prisma.ram.findMany() 
    res.json(ramData)
}
app.get('/api/rams', getRamData) 

async function getCoolerData(req,res) {
     let coolerData = await prisma.cpuCooler.findMany() 
     res.json(coolerData)
}
app.get('/api/coolers', getCoolerData) 

async function getSsdData(req, res) {
    let ssdData = await prisma.ssd.findMany()
    res.json(ssdData)
}
app.get('/api/ssds', getSsdData)

async function getPsuData(req, res) {
    let psuData = await prisma.psu.findMany()
    res.json(psuData)
}
app.get('/api/psus', getPsuData)

async function getCaseData(req, res) {
    let caseData = await prisma.case.findMany()
    res.json(caseData)
}
app.get('/api/cases', getCaseData)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
}) 