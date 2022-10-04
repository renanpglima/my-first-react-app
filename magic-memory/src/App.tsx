import './App.css';
import {useEffect, useState} from 'react';
import SingleCard from './components/SingleCard';
import React from 'react';
import { useCallback } from 'react';

export interface Card {
  id:number,
  src: string;
  matched: boolean;
}

const cardImages:Card[] = [
  {id: 0, 'src': "/img/helmet-1.png", matched: false},
  {id: 0, "src": "/img/potion-1.png", matched: false},
  {id: 0, "src": "/img/ring-1.png", matched: false},
  {id: 0, "src": "/img/scroll-1.png", matched: false},
  {id: 0, "src": "/img/shield-1.png", matched: false},
  {id: 0, "src": "/img/sword-1.png", matched: false}
]

const App = () => {

  const [cards, setCards] = useState<Card[]>([])
  const [turns, setTurns] = useState<number>(0)
  const [choiceOne, setChoiceOne] = useState<Card | null>(null)
  const [choiceTwo, setChoiceTwo] = useState<Card | null>(null)
  const [disabled, setDisabled] = useState<boolean>(false)


  const shuffleCards = () : void => {
    const shuffledCards:Card[] =  [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    resetCards()
    setTurns(0)
  }

  const handleChoice = (card:Card) : void => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetCards = useCallback(() : void => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns+1)
    setDisabled(false)
  }, [turns])

  useEffect(() => {

    if (choiceOne && choiceTwo){
      setDisabled(true)
      if (choiceOne.src === choiceTwo.src && 
        choiceOne.id !== choiceTwo.id){
        choiceOne.matched = true
        choiceTwo.matched = true
      }
      
      setTimeout (() => resetCards() , 1000)
    } 
  }, [choiceTwo, choiceOne, resetCards])

  return (
    <div className="App">
      <h1>Magic Match</h1>

      <button onClick={shuffleCards}>New Game</button>

      <div className='card-grid'>
        {cards.map( card => (
          <SingleCard 
          key={card.id} 
          card={card}
          handleChoice = {handleChoice}
          flipped = {card === choiceOne || card === choiceTwo || card.matched}
          disabled = {disabled}
          />))}
      </div>

      <div>
        <p>Turns: {turns}</p>
      </div>
    </div>
  );
};

export default App;
