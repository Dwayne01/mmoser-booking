import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";

export default function DeskCard({ desk, bookings, status, onBookClick }) {
  return (
    <Card
      headerImage={desk.image}
      title={desk.name}
      overrides={{
        HeaderImage: {
          style: ({ $theme }) => ({
            height: '400px',
            width: '100%',
            objectFit: 'cover',
            objectPosition: 'center'
          })
        }
      }}>
      <StyledBody>
        <b>Status: {status}</b>
        <br />
        <b>Today's Bookings</b>:
        {bookings.map(booking => <BookingItem key={booking.id} booking={booking} />)}
      </StyledBody>
      <StyledAction>
        <Button
          onClick={onBookClick}
          overrides={{
            BaseButton: { style: { width: "100%" } }
          }}
        >
          Book Now
        </Button>
      </StyledAction>
    </Card>
  );
}

function BookingItem({ booking }) {
  return <div>
    {formatTS(booking.start)} - {formatTS(booking.end)}
  </div>
}

function formatTS(ts) {
  const date = new Date(ts)
  return date.getHours() + ':' + date.getMinutes()
}