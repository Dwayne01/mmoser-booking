import { useState, useEffect } from 'react'
import CreateBookingForm from './CreateBookingForm'

export default function CreateBookingPage() {
  const desks = [] // TODO
  const [form, setForm] = useState({
    deskId: 1,
    start: new Date(),
    end: new Date(),
  })

  const handleChange = (key, value) => setForm(prev => ({ ...prev, [key]: value }))

  const handleSubmit = () => {
    // TODO
    console.log('submit')
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