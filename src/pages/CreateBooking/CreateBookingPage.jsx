import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { fetchAllDesks, makeBookings } from '../../api/desk'
import CreateBookingForm from './CreateBookingForm'

export default function CreateBookingPage() {

  const params = useParams()

  console.log(params)
  
  const [desks, setDesks] = useState([])
  const [form, setForm] = useState({
    deskId: 1,
    start: new Date(),
    end: new Date(),
  })
  

  const handleChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = async() => {
    if (form.deskId.length) {
      await makeBookings({start: new Date(form.start).valueOf(), end: new Date(form.end).valueOf(), deskId: form.deskId[0].id });
      window.location.href = '/'
    }
  }


  useEffect(() => {
    handleFetch()
  }, [])

  const handleFetch = async () => {
    let res = await fetchAllDesks();
    setDesks(res)
  } 


  return (
    <CreateBookingForm
      desks={desks}
      deskId={form.deskId}
      start={form.start}
      end={form.end}
      onChange={handleChange}
      onSubmit={handleSubmit} />
  )
}