import { useEffect, useState } from "react"

//style
import './TripList.css'

export default function TripList() {
  
    const[trips, setTrip] = useState([]);
    const[url, setURL] = useState('http://localhost:3000/trips')

    console.log(trips);

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setTrip(json))
    }, [url])
  
    return (
        <div className="trip-list">
            <h1>Trip List</h1>
            <ul>
            {trips.map((trip) => (
                <li key={trip.id}>
                    <h3>{trip.title}</h3>
                    <p>{trip.price}</p>
                    <p>{trip.reg}</p>
                </li>
            ))}
            </ul>
            <div className="filters">
                <button onClick={() => {
                    setURL('http://localhost:3000/trips?reg=Nordeste')
                }}> Nordeste </button>
                <button onClick={() => {
                    setURL('http://localhost:3000/trips')
                }}> All </button>
            </div>
        </div>
    )
}
