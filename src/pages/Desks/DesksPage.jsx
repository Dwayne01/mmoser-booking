import DeskCard from "./components/DeskCard"

export default function DesksPage() {
  const desks = []
  return <div>
    {desks.map(desk => <DeskCard desk={desk} bookings={[]} status='available' />)}
  </div>
}