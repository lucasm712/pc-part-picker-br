import { useState, useEffect } from 'react';

function GpuList({ gpuSelecionada, onSelecionar }) { 
    const [gpus, setGpus] = useState([]); 
    useEffect(function() { 
        async function carregarGpus() { 
            try { 
                const response = await fetch('http://localhost:3000/api/gpus');
                const data = await response.json(); 
                setGpus(data);
            } 
        catch (error) {
            console.error('Erro ao carregar as GPUs:', error);
        }
    }  
    carregarGpus(); 
}, []);


   function renderGpus(gpu) { 
 const selecionada = gpuSelecionada?.id === gpu.id;

    return <li 
    
    key={gpu.id} 
     onClick={() => onSelecionar(gpu)}
     style={{ cursor: 'pointer', fontWeight: selecionada ? 'bold' : 'normal' }} 
     > 
      <div className="item-card">
      <div className="item-imagem-placeholder"></div>
      {gpu.nome} - R$ {gpu.preco}
   </div>
    </li>     
   } 

   return ( 
  <ul>
  {gpus.map(renderGpus)}
   </ul> 
   ); 
}
   export default GpuList;