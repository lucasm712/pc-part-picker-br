import { useState, useEffect } from 'react';

function CpuList({ cpuSelecionada, onSelecionar }) { 
    const [cpus, setCpus] = useState([]); 
    useEffect(function() { 
        async function carregarCpus() { 
            try { 
                const response = await fetch('http://localhost:3000/api/cpus');
                const data = await response.json(); 
                setCpus(data);
            } 
        catch (error) {
            console.error('Erro ao carregar os processadores:', error);
        }
    }  
    carregarCpus(); 
}, []);


   function renderCpus(cpu) { 
 const selecionada = cpuSelecionada?.id === cpu.id;

    return <li 
    
    key={cpu.id} 
     onClick={() => onSelecionar(cpu)}
     style={{ cursor: 'pointer', fontWeight: selecionada ? 'bold' : 'normal' }} 
     > 
    <div className="item-card">
    <div className="item-imagem-placeholder"></div>

      {cpu.nome} - R$ {cpu.preco} 
      </div>
    </li>     
   } 

   return ( 
  <ul>
  {cpus.map(renderCpus)}
   </ul> 
   ); 
}
   export default CpuList;