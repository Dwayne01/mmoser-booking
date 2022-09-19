import { useState } from 'react'
import { TimePicker } from 'baseui/timepicker'

export default function CreateBookingPage({ startTime, endTime, onChange }) {

  return (
    <div>
      Create Booking Page
      <FormControl label="StartTime"
      >

      </FormControl>
      <TimePicker
        value={startTime}
        onChange={date => onChange({ startTime: date })}
      />
      <FormControl label="EndTime"      >
        <TimePicker
          value={endTime}
          onChange={date => onChange({ endTime: date })}
        />
      </FormControl>
    </div>
  )
}
