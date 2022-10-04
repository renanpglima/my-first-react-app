import React from 'react'
import './SingleCard.css'
import {Card} from '../App'

interface Props {
  card: Card;
  handleChoice: Function;
  flipped: boolean;
  disabled:boolean;
}

export default function SingleCard({ card , handleChoice, flipped, disabled}:Props) : JSX.Element{

  const handleClick = () => {
    if (!disabled) handleChoice(card)
  }

  return (
    <div className='card'>
        <div className={flipped ? "flipped" : ""}>
            <img className='front' src={card.src} alt='card front'/>
            <img 
              className='back' 
              src='/img/cover.png' 
              alt='card back'
              onClick={handleClick}
            />
        </div>
    </div>
  )
}
