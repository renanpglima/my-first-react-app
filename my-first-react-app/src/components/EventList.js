import React from 'react'
import styles from './EventList.module.css'

export default function EventList({events, setEvent}) {
    
    const handleClick = (id) => {
        setEvent((prevEvents) => {
            return prevEvents.filter((event) => {
                return event.id !== id
            })
        })
    } 

    return (
    events.map((event, index) => (
        <div className={styles.card} key={event.id}>
            <h2>{index} - {event.title}</h2>
            <p>{event.location} - {event.date}</p>
            <button onClick={() => handleClick(event.id)}>remove event</button>
        </div> 
        )
    )
  )
}
