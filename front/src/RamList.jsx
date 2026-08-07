import { useState, useEffect } from 'react';

function RamList({ ramsSelecionadas, onAdicionar, onRemover, placaSelecionada }) { 
    const [rams, setRams] = useState([]); 

    useEffect(function() { 
        async function carregarRams() { 
            try { 
                const response = await fetch('http://localhost:3000/api/rams');
                const data = await response.json(); 
                setRams(data);
            } 
            catch (error) {
                console.error('Erro ao carregar as memórias RAM:', error);
            }
        }  
        carregarRams(); 
    }, []);

    function renderRams(ram) {
        const item = ramsSelecionadas.find(i => i.ram.id === ram.id);
        const quantidade = item ? item.quantidade : 0;

        return (
            <li key={ram.id}>
               <div className="item-card">
               <div className="item-imagem-placeholder"></div>
               
                {ram.nome} - {ram.tipo} - {ram.tamanho}GB - {ram.pentes}x - R$ {ram.preco}
                <button onClick={() => onRemover(ram)} disabled={quantidade === 0}> - </button>
                <span> {quantidade} </span>
                <button onClick={() => onAdicionar(ram)}> + </button>
                
                
                </div>
                
            </li>
        )
    }

    return ( 
        <ul>
            {rams.map(renderRams)}
        </ul> 
    ); 
}
export default RamList;