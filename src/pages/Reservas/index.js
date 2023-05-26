import React from 'react';
import { useSelector } from 'react-redux';
import { MdDelete } from 'react-icons/md';

import './style.css';

const Reservas = () => {
  const reserves = useSelector(state => state.reserve)

  return (
    <div>
      <h1 className='title'>Você solicitou {reserves.length} reserva</h1>

      {reserves.map(reserve => (
        <div key={reserve.id} className="reservas">
          <img src={reserve.image} alt={reserve.title} />
          <strong>{reserve.title}</strong>
          <span>Quantidade: 2</span>
          <button type='button' onClick={() => {}}>
            <MdDelete size={20} color='#191919'/>
          </button>
        </div>
      ))}

      <footer>
        <button type='button'>Solicitar Reservas</button>
      </footer>
    </div>
  )
}

export default Reservas