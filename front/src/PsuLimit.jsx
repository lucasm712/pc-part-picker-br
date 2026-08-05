import { useState, useEffect } from 'react';

function PsuList({ psuSelecionado, onSelecionar }) { 
    const [psus, setPsus] = useState([]); 
    useEffect(function() { 
        async function carregarPsus() { 
            try { 
                const response = await fetch('http://localhost:3000/api/psus');
                const data = await response.json(); 
                setPsus(data);
            } 
        catch (error) {
            console.error('Erro ao carregar fontes:', error);
        }
    }  
    carregarPsus(); 
}, []);


   function renderPsus(psu) { 
 const selecionado = psuSelecionado?.id === psu.id;

    return <li 
    
    key={psu.id} 
     onClick={() => onSelecionar(psu)}
     style={{ cursor: 'pointer', fontWeight: selecionado ? 'bold' : 'normal' }} 
     > 
      {psu.nome} - R$ {psu.preco}
    </li>     
   } 

   return ( 
  <ul>
  {psus.map(renderPsus)}
   </ul> 
   ); 
}
   export default PsuList;