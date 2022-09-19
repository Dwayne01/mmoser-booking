import { useState, useEffect } from 'react'

const INIT = {
  startTime: new Date(),
  endTime: new Date(),
}
export default function CreateBookingController() {
  const [value, setValue] = useState(INIT)

  const handleChange = () => console.log()

  return (
    <div>
      CreateBookingController
      <CreateBookingPage value={value} onChange={handleChange} />
    </div>
  )
}