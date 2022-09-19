import './App.css';
import {useState} from 'react'
import Title from './components/Title'
import EventList from './components/EventList'
import Modal from './components/Modal';

function App() {

  const [showModal, setShowModal] = useState (false)

  const [showEvents, setShowEvents] = useState (true)

  const[events, setEvent] = useState([
    {title:'Evento 1', id:1},
    {title:'Evento 2', id:2},
    {title:'Evento 3', id:3}
  ])

  return (
    <div className="App">
      <Title title = "Title 1" subtitle="Subtitle 1"/>
      
      {showEvents && (<button onClick={() => {setShowEvents(false)}}>hide events</button>)}
      
      {!showEvents && (<button onClick={() => {setShowEvents(true)}}>show events</button>)}
      
      {showEvents && <EventList events = {events} setEvent={setEvent}/>}

      {showModal && 
        <Modal handleClose={() => setShowModal(false)} isSaleModal={true}>
          <h2>Título do Modal</h2>
          <p>Loren Ipsum et ceterat asd Loren Ipsum et ceterat asd 
            Loren Ipsum et ceterat asdLoren Ipsum et ceterat asd Loren 
            Ipsum et ceterat asd</p>
        </Modal> 
      }

      <div>
        <button onClick={() => setShowModal(true)}>Show Modal</button>
      </div>

      

    </div>
  );
}

export default App;
