import {
  Card,
  StyledBody,
  StyledAction
} from "baseui/card";
import { Button } from "baseui/button";

export default function DeskCard({ desk, bookings, onBookClick }) {



  const handleGetStatus = () => {
    let now = Date.now();

    let fiveMinutes = 5 * 60 * 1000
    
    let res = bookings.find(booking => now >=  booking.start - fiveMinutes && now <= booking.end  )
  

    if (!res) return 'Available';

    let fiveMinutesToTime = res.start - fiveMinutes
  

    if (now >= res.start) {
      return 'Booked'
    }else if(now >= res.end){
      return 'Availables'
    } else if(now >= fiveMinutesToTime && now <= res.start ) {
      return 'Pending'
    }

  }

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
        <b>Status: {handleGetStatus()}</b>
        <br />
        <b>Today's Bookings</b>:
        {bookings.map(booking => <BookingItem key={booking.id} booking={booking} />)}
      </StyledBody>
      <StyledAction>
        <Button
          onClick={() => onBookClick(desk)}
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