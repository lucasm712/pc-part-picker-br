import { useState, useEffect } from 'react';

function SsdsList({ ssdsSelecionados, onAdicionar, onRemover, placaSelecionada }) { 
    const [ssds, setSsds] = useState([]); 

    useEffect(function() { 
        async function carregarSsds() { 
            try { 
                const response = await fetch('http://localhost:3000/api/ssds');
                const data = await response.json(); 
                setSsds(data);
            } 
            catch (error) {
                console.error('Erro ao carregar os SSDs:', error);
            }
        }  
        carregarSsds(); 
    }, []);


function formatarTamanho(tamanho) {
  if (tamanho >= 1000) {
    return `${tamanho / 1000}TB`; 
  }
  return `${tamanho}GB`; // 
}


    function renderSsds(ssd) {
        const item = ssdsSelecionados.find(i => i.ssds.id === ssd.id);
        const quantidade = item ? item.quantidade : 0;

        return (
            <li key={ssd.id}>
                {ssd.nome} - {ssd.tipoSsd} - {formatarTamanho(ssd.tamanho)} - R$ {ssd.preco}
                <button onClick={() => onRemover(ssd)} disabled={quantidade === 0}> - </button>
                <span> {quantidade} </span>
                <button onClick={() => onAdicionar(ssd)}> + </button>
            </li>
        )
    }

    return ( 
        <ul>
            {ssds.map(renderSsds)}
        </ul> 
    ); 

    
}
export default SsdsList;