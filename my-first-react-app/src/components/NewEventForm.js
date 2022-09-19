import { useState } from 'react'
import './NewEventForm.css'


export default function NewEventForm({addNewEvent}) {
  const [title, setTitle] = useState('')
  const [date, setDate] = useState('')  
  const [location, setLocation] = useState('Recife')

  const onSubmitForm = () => {
      const event = {
        title: title,
        date: date,
        location: location,
        id: Math.floor(Math.random() * 100000)
      }

      addNewEvent(event)
      resetForm()

  }

  const resetForm = () => {
    setTitle('')
    setDate('')
    setLocation('')
  }

  return (
    <form className='event-form' onSubmit={onSubmitForm}>
        <label>
            <span>Event Title:</span>
            <input type='text' onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label>
            <span>Event Date:</span>
            <input type='date' onChange={(e) => setDate(e.target.value)}></input>
        </label>
        <label>
            <span>Location:</span>
            <select onChange={(e) => setLocation(e.target.value)}>
              <option value='recife'>Recife</option>
              <option value='camaragibe'>Camaragibe</option>
              <option value='sao-paulo'>São Paulo</option>
              <option value='rio-de-janeiro'>Rio de Janeiro</option>
            </select>
        </label>
        <button>submit</button>
    </form>
  )
}
