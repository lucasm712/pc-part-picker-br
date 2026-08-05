import Header from './Header.jsx'
import Hero from './Hero.jsx' 
import Montarpc from './montarPc.jsx'
import { useState, useEffect } from 'react';
import MotherboardList from './MotherboardList.jsx'
import CpuList from './CpuList.jsx';
import GpuList from './GpuList.jsx';
import { compatibilidadeCpuMb, compatibilidadeRamMb, ramCalculo, ramLimit, limiteSlotTotal } from './compatibilidade.js'
import RamList from './RamList.jsx'
import SsdsList from './SsdsList.jsx'
import PsuList from './PsuLimit.jsx'
function App() {
  const [mostrarLista, setMostrarLista] = useState(false);
  const [cpuSelecionada, setCpuSelecionada] = useState(null);
  const [etapa, setEtapa] = useState('cpu');
  const [placaSelecionada, setPlacaSelecionada] = useState(null);
  const [gpuSelecionada, setGpuSelecionada] = useState(null);
  const [ramsSelecionadas, setRamsSelecionadas] = useState([]);
  const [ssdsSelecionados, setSsdsSelecionados] = useState([]);
  const [psusSelecionada, setPsusSelecionada] = useState(null);


  function acionarMontador() {
    setMostrarLista(true);
  }

  function adicionarRam(ram) {
    const limiteSlots = placaSelecionada ? placaSelecionada.slots_de_memoria : 4;
    const existente = ramsSelecionadas.find(item => item.ram.id === ram.id);

    const totalPentesAtual = ramsSelecionadas.reduce(
      (total, item) => total + item.ram.pentes * item.quantidade,
      0
    );

    if (totalPentesAtual + ram.pentes > limiteSlots) return; // não deixa passar do limite de slots da mb

    if (existente) {
      setRamsSelecionadas(
        ramsSelecionadas.map(item =>
          item.ram.id === ram.id ? { ...item, quantidade: item.quantidade + 1 } : item
        )
      );
    } else {
      setRamsSelecionadas([...ramsSelecionadas, { ram, quantidade: 1 }]);
    }
  }

  function removerRam(ram) {
    const existente = ramsSelecionadas.find(item => item.ram.id === ram.id);
    if (!existente) return;

    if (existente.quantidade > 1) {
      setRamsSelecionadas(
        ramsSelecionadas.map(item =>
          item.ram.id === ram.id ? { ...item, quantidade: item.quantidade - 1 } : item
        )
      );
    } else {
      setRamsSelecionadas(ramsSelecionadas.filter(item => item.ram.id !== ram.id));
    }
  }

  const capacidadeTotalRam = ramsSelecionadas.reduce(
    (total, item) => total + ramCalculo(item.ram) * item.quantidade,
    0
  );

  const capacidadeOk = placaSelecionada
    ? ramLimit(placaSelecionada, capacidadeTotalRam)
    : false;

  const slotsOk = placaSelecionada
    ? limiteSlotTotal(placaSelecionada, ramsSelecionadas)
    : false;


const adicionarSsd = (ssd) => {
  const existente = ssdsSelecionados.find(item => item.ssds.id === ssd.id);

  if (existente) {
    setSsdsSelecionados(
      ssdsSelecionados.map(item =>
        item.ssds.id === ssd.id ? { ...item, quantidade: item.quantidade + 1 } : item
      )
    );
  } else {
    setSsdsSelecionados([...ssdsSelecionados, { ssds: ssd, quantidade: 1 }]);
  }
}
const removerSsd = (ssd) => {
  const existente = ssdsSelecionados.find(item => item.ssds.id === ssd.id);
  if (!existente) return;

  if (existente.quantidade > 1) {
    setSsdsSelecionados(
      ssdsSelecionados.map(item =>
        item.ssds.id === ssd.id ? { ...item, quantidade: item.quantidade - 1 } : item
      )
    );
  } else {
    setSsdsSelecionados(ssdsSelecionados.filter(item => item.ssds.id !== ssd.id));
  }
}
  return (
    <>
      <Header></Header>
      <Hero></Hero> 
      <Montarpc onClick={acionarMontador}/> 

      {mostrarLista && etapa === 'cpu' && ( 
         <CpuList 
          cpuSelecionada={cpuSelecionada}
          onSelecionar={setCpuSelecionada}
         />
      )}
      {cpuSelecionada && etapa === 'cpu' && ( 
        <> 
          <p>Você escolheu: {cpuSelecionada.nome}</p> 
          <button onClick={() => setEtapa('motherboard')}>Próximo</button>
        </>
      )}

      {etapa === 'motherboard' && (
        <MotherboardList 
          placaSelecionada={placaSelecionada}
          onSelecionar={setPlacaSelecionada}
        />
      )} 
      {placaSelecionada && etapa === 'motherboard' && (
        <>
          <p>Você escolheu: {placaSelecionada.nome}</p>
          {compatibilidadeCpuMb(cpuSelecionada, placaSelecionada) ? (
            <p>Compatível com a CPU selecionada.</p>
          ) : (
            <p>Incompatível com a CPU selecionada.</p>
          )}
          <button onClick={() => setEtapa('gpu')}>Próximo</button>
        </>
      )}

      {etapa === 'gpu' && (
        <GpuList 
          gpuSelecionada={gpuSelecionada}
          onSelecionar={setGpuSelecionada}
        />
      )}
      {gpuSelecionada && etapa === 'gpu' && (
        <>
          <p>Você escolheu: {gpuSelecionada.nome}</p>
          <button onClick={() => setEtapa('ram')}>Próximo</button> 
        </>
      )} 
     
      {etapa === 'ram' && (
       
        <RamList 
          ramsSelecionadas={ramsSelecionadas}
          onAdicionar={adicionarRam}
          onRemover={removerRam}
          placaSelecionada={placaSelecionada}
        /> 
      )} 
      {ramsSelecionadas.length > 0 && etapa === 'ram' && (
        <>
          <p>Você escolheu:</p>
          <ul>
            {ramsSelecionadas.map((item) => (
              <li key={item.ram.id}>
                {item.quantidade}x {item.ram.nome} - {compatibilidadeRamMb(item.ram, placaSelecionada) ? 'Compatível (tipo)' : 'Incompatível (tipo)'}
              </li>
            ))}
          </ul>
          <p>Capacidade total: {capacidadeTotalRam}GB {capacidadeOk ? '✅' : '❌ excede o máximo da motherboard'}</p>
          <p>Slots: {slotsOk ? '✅ dentro do limite' : '❌ excede os slots disponíveis'}</p>
         <button onClick={() => setEtapa('ssd')}>Próximo</button> 
        </>
      )} 
     {etapa === 'ssd' &&  (
        <SsdsList 
          ssdsSelecionados={ssdsSelecionados}
          onAdicionar={adicionarSsd}
          onRemover={removerSsd}
          placaSelecionada={placaSelecionada}
        />
      )} 
      {ssdsSelecionados.length > 0 && etapa === 'ssd' && (
        <>
          <p>Você escolheu:</p>
          <ul>
            {ssdsSelecionados.map((item) => (
              <li key={item.ssds.id}>
                {item.quantidade}x {item.ssds.nome}
              </li>
            ))} 
            </ul>  
            <alert> 
              <p>*IMPORTANTE* Certifique-se de que sua placa mae suporta o tipo e a quantidadede SSDs escolhidos </p>
            </alert> 
             <button onClick={() => setEtapa('psu')}>Próximo</button> 
        </>
        )}  
       {etapa === 'psu' && (
        <PsuList 
          psusSelecionada={psusSelecionada}
          onSelecionar={setPsusSelecionada}
        />
      )} 
      {psusSelecionada && etapa === 'psu' && (
        <>
          <p>Você escolheu: {psusSelecionada.nome}</p>
          <button onClick={() => setEtapa('final')}>Finalizar</button>
        </>
      )}
    </>
  );
}
export default App;