import './App.css';
import {useState} from 'react'
import Title from './components/Title'
import EventList from './components/EventList'
import Modal from './components/Modal';
import EventForm from './components/NewEventForm';

function App() {

  const [showModal, setShowModal] = useState (false)

  const [showEvents, setShowEvents] = useState (true)

  const[events, setEvent] = useState([])

  const addNewEvent = (event) => {
    setEvent( (prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  return (
    <div className="App">
      <Title title = "My Events" subtitle="This is a list of events that I need to do asap!"/>
      
      {showEvents && (<button onClick={() => {setShowEvents(false)}}>hide events</button>)}
      
      {!showEvents && (<button onClick={() => {setShowEvents(true)}}>show events</button>)}
      
      {showEvents && <EventList events = {events} setEvent={setEvent}/>}

      {showModal && 
        <Modal>
          <EventForm addNewEvent={addNewEvent}/>
        </Modal> 
      }

      <div>
        <button onClick={() => setShowModal(true)}>Add new Event</button>
      </div>

      

    </div>
  );
}

export default App;
