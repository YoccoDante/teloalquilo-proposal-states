import React, { useState } from 'react'
import StarRating from './StarRating'
import StateMenu from './StateMenu'

interface FilterBarProps{
  setRate:React.Dispatch<React.SetStateAction<number>>,
  setNameFilter:React.Dispatch<React.SetStateAction<string|null>>,
  stateFilter:string|null,
  setStateFilter: React.Dispatch<React.SetStateAction<string|null>>
}

function FilterBar({setRate,setNameFilter,stateFilter,setStateFilter}:FilterBarProps) {
  return (
    <div className='filterBar'>
      <StarRating rate={0} setRate={setRate}/>
      <span>Nombre:</span>
      <input type='text' onChange={(e) => setNameFilter(e.target.value)}/>
      <span>estados:</span>
      <StateMenu setStateFilter={setStateFilter} stateFilter={stateFilter}/>
    </div>
  )
}

export default FilterBar
