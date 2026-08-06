
export function compatibilidadeCpuMb (cpu, motherboard) { 
    let cpuCompativel = cpu.socketId === motherboard.socketId;
    return cpuCompativel
}

export function compatibilidadeRamMb (ram,motherboard) {
    let ramCompativel = ram.tipo === motherboard.tipoRam;
    return ramCompativel 
}
   
export function ramCalculo (ram) { 
let ramCalculo = ram.tamanho * ram.pentes; 
    return ramCalculo   
} 
export function ramLimit (motherboard,ramCalculo) {
     let ramLimit = motherboard.Maximo_de_ram >= ramCalculo;
     return ramLimit
}
export function limiteSlot (motherboard,ram) {
    let slotLimite = motherboard.slots_de_memoria >= ram.pentes; 
    return slotLimite
} 

export function limiteSlotTotal(motherboard, ramsSelecionadas) {
    const totalPentes = ramsSelecionadas.reduce(
        (total, item) => total + (item.ram.pentes * item.quantidade), 
        0
    );
    return motherboard.slots_de_memoria >= totalPentes;
} 

export function consumoTotal(cpu, gpu) {
  const tdpCpu = cpu?.wtts || 0;
  const tdpGpu = gpu?.tdp || 0;
  return tdpCpu + tdpGpu;
} 

export function psuSuficiente(psu, consumo) {
  
  const consumoComMargem = consumo * 1.2;
  return psu.wtts >= consumoComMargem;
} 

export function precoTotal({ cpu, motherboard, gpu, rams, ssds, psu }) {
  const precoCpu = cpu?.preco ? Number(cpu.preco) : 0;
  const precoMb = motherboard?.preco ? Number(motherboard.preco) : 0;
  const precoGpu = gpu?.preco ? Number(gpu.preco) : 0;
  const precoPsu = psu?.preco ? Number(psu.preco) : 0;

  const precoRams = rams.reduce(
    (total, item) => total + (Number(item.ram.preco) || 0) * item.quantidade,
    0
  );

  const precoSsds = ssds.reduce(
    (total, item) => total + (Number(item.ssds.preco) || 0) * item.quantidade,
    0
  );

  return precoCpu + precoMb + precoGpu + precoPsu + precoRams + precoSsds;
}