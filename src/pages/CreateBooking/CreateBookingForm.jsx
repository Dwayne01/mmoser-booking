import { useState } from 'react'
import { FormControl } from 'baseui/form-control'
import { TimePicker } from 'baseui/timepicker'
import { Select } from "baseui/select"
import { DisplayMedium } from 'baseui/typography'

export default function CreateBookingForm({ desks, deskId, start, end, onChange, onSubmit }) {
  return (
    <div>
      <DisplayMedium>Create Booking</DisplayMedium>
      <Select
        options={desks.map(desk => ({ label: desk.name, id: desk.id }))}
        value={deskId}
        placeholder="Desk"
        onChange={params => onChange('deskId', params.value)}
      />
      <FormControl label="Start">
        <TimePicker
          value={start}
          onChange={date => onChange('start', date)}
        />
      </FormControl>
      <FormControl label="End">
        <TimePicker
          value={end}
          onChange={date => onChange('end', date)}
        />
      </FormControl>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  )
}
