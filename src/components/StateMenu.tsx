import React, { useState } from 'react';
import { States } from '../models/usersModel'

interface StateMenuprops {
    stateFilter:string|null,
    setStateFilter: React.Dispatch<React.SetStateAction<string|null>>
}

function StateMenu({setStateFilter, stateFilter}:StateMenuprops) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItemStyle = {
    padding: '10px 20px',
    cursor: 'pointer',
  };

  const buttonStyle = {
    width:'200px',
    height:'40px',
    padding: '10px 20px',
    backgroundColor: '#007BFF',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    fontSize: '16px',
    cursor: 'pointer',
    outline: 'none',
  };
  const handleClick = (state:string|null) => {
    setStateFilter(state)
    setIsOpen(false)
  }

  return (
    <div style={{position:'relative'}}>
      <button style={buttonStyle} onClick={() => setIsOpen(!isOpen)}>
        {stateFilter? stateFilter : 'Seleccionar estado' }
      </button>

      <ul style={{
        position:'absolute',
        top:'20px',
        display: isOpen ? 'block' : 'none',
        listStyle: 'none',
        backgroundColor: '#f9f9f9',
        border: '1px solid #ccc',
        width: '200px'}}>
        <li onClick={() => handleClick(null)} style={menuItemStyle}>
          ninguno
        </li>
        <li onClick={() => handleClick(States.CON_VIVIENDA)} style={menuItemStyle}>
          {States.CON_VIVIENDA}
        </li>
        <li onClick={() => handleClick(States.SIN_VIVIENDA)} style={menuItemStyle}>
          {States.SIN_VIVIENDA}
        </li>
        <li onClick={() => handleClick(States.BUSCANDO_VIVIENDA)} style={menuItemStyle}>
          {States.BUSCANDO_VIVIENDA}
        </li>
        <li onClick={() => handleClick(States.ME_MUDARE_PRONTO)} style={menuItemStyle}>
          {States.ME_MUDARE_PRONTO}
        </li>
      </ul>
    </div>
  );
}

export default StateMenu;