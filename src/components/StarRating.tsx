import React, { useEffect, useState } from 'react'

interface StarRatingProps {
    readOnly?:boolean
    rate:number,
    setRate?: React.Dispatch<React.SetStateAction<number>>
}

function StarRating({readOnly = false, rate, setRate}:StarRatingProps) {
  const star = '\u2605'
  const emptyStar = '\u2606'
  const halfFilledStar = '\u272C';
  const [ board, setBoard ] = useState(new Array(5).fill(emptyStar))
  const [ index, setIndex ] = useState(5)
  const handlePickStar = (index:number) => {
    if (readOnly) return
    if (setRate) {
        setRate(index+1)
    }
    setIndex(index+1)
    const newBoard = new Array(5).fill(star)
    newBoard.forEach((elem, indx) => {
      if (indx > index) {
        newBoard[indx] = emptyStar
    }})
    setBoard(newBoard)
  }
  useEffect(() => {
    if (readOnly) {
        const fullStars = Math.floor(rate);
        const halfStar = rate % 1 !== 0;
        const newBoard = new Array(5).fill(star)
        newBoard.forEach((elem, indx) => {
        if (indx >= fullStars && indx < fullStars + (halfStar ? 1 : 0)) {
            newBoard[indx] = halfFilledStar
        }
        if (indx >= fullStars + (halfStar ? 1 : 0)) {
            newBoard[indx] = emptyStar
        }
        })
        setBoard(newBoard)
    }
  },[rate, readOnly])
  return (
    <div style={{fontSize:'36px'}}>
      {board.map((item, index) =>
        <span key={'star'+index}
        style={{cursor:readOnly? 'inherit':'pointer', color:'gold'}}
        onClick={() => handlePickStar(index)}
        >{item}</span>
        )}
    </div>
  )
}

export default StarRating