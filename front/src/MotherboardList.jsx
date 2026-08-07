import { useState, useEffect } from 'react';

function MotherboardList({ placaSelecionada, onSelecionar }) { 
    const [motherboards, setMotherboards] = useState([]); 
    useEffect(function() { 
        async function carregarPlacas() { 
            try { 
                const response = await fetch('http://localhost:3000/api/motherboards');
                const data = await response.json(); 
                setMotherboards(data);
            } 
        catch (error) {
            console.error('Erro ao carregar as placas-mãe:', error);
        }
    }  
    carregarPlacas(); 
}, []);


   function renderMotherboards(motherboard) { 
 const selecionada = placaSelecionada?.id === motherboard.id;

    return <li 
    
    key={motherboard.id} 
     onClick={() => onSelecionar(motherboard)}
     style={{ cursor: 'pointer', fontWeight: selecionada ? 'bold' : 'normal' }} 
     > 
     <div className="item-card">
     <div className="item-imagem-placeholder"></div>
     
      {motherboard.nome} - R$ {motherboard.preco} 
      </div>
    </li>     
   } 

   return ( 
  <ul>
  {motherboards.map(renderMotherboards)}
   </ul> 
   ); 
}
   export default MotherboardList;