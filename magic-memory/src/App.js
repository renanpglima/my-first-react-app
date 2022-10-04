import './App.css';
import {useEffect, useState} from 'react';
import SingleCard from './components/SingleCard';

const cardImages = [
  {'src': "/img/helmet-1.png", matched: false},
  {"src": "/img/potion-1.png", matched: false},
  {"src": "/img/ring-1.png", matched: false},
  {"src": "/img/scroll-1.png", matched: false},
  {"src": "/img/shield-1.png", matched: false},
  {"src": "/img/sword-1.png", matched: false}
]

function App() {

  const [cards, setCards] = useState([])
  const [turns, setTurns] = useState(0)
  const [choiceOne, setChoiceOne] = useState(null)
  const [choiceTwo, setChoiceTwo] = useState(null)
  const [disabled, setDisabled] = useState(false)


  const shuffleCards = () => {
    const shuffledCards =  [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({...card, id: Math.random()}))
    setCards(shuffledCards)
    resetCards()
    setTurns(0)
  }

  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card)
  }

  const resetCards = () => {
    setChoiceOne(null)
    setChoiceTwo(null)
    setTurns(turns+1)
    setDisabled(false)
  }

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
  }, [choiceTwo, choiceOne])

  

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
}

export default App;
