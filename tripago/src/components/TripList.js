import { useState } from "react"
import useFetch from "../hooks/useFetch";

//style
import './TripList.css'

export default function TripList() {
    const[url, setURL] = useState('http://localhost:3000/trips')
    const {data: trips, isPending} = useFetch(url)

    console.log(trips)
  
    return (
        <div className="trip-list">
            <h1>Trip List</h1>
            {isPending && (<div>Loading...</div>)}
            <ul>
            {trips && trips.map((trip) => (
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
