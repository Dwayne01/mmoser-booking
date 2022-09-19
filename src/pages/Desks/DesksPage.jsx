import React from "react"
import { useEffect, useState } from "react"
import { fetchAllBookings, fetchAllDesks } from "../../api/desk"
import DeskCard from "./components/DeskCard"

export default function DesksPage() {
  const [desks, setDesks] = useState([])
  const [bookings, setBookings] = useState([])

  

  useEffect(() => {
    handleFetch()
    handleBookings()
  }, [])

  const handleFetch = async () => {
    let res = await fetchAllDesks();
    setDesks(res)
  } 


  const handleBookings = async () => {
    let res = await fetchAllBookings();
    setBookings(res)
  } 


  let newDesks = desks.map(desk => {
    let newDesk = bookings.filter(booking => booking.deskId === desk.id)
    return { ...desk, bookings: newDesk }
  });

  const onBookClick = () => {
    window.location.href = '/book'
  }

  return <div>
    {newDesks.map(desk => <DeskCard key={desk.id} desk={desk} bookings={desk.bookings} onBookClick={onBookClick} />)}
  </div>
}