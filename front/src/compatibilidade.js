
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