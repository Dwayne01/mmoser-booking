import DeskCard from "./components/DeskCard"

export default function DesksPage() {
  const desks = [
    {
      "id": 1,
      "name": "Desk A",
      "image": "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=9870&q=80"
    },
    {
      "id": 2,
      "name": "Desk B",
      "image": "https://images.unsplash.com/photo-1476365518243-f738bf58443d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      "id": 3,
      "name": "Desk C",
      "image": "https://images.unsplash.com/photo-1486946255434-2466348c2166?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    },
    {
      "id": 4,
      "name": "Desk D",
      "image": "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
    },
    {
      "id": 5,
      "name": "Desk E",
      "image": "https://images.unsplash.com/photo-1542546068979-b6affb46ea8f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
    }
  ]
  return <div>
    {desks.map(desk => <DeskCard desk={desk} bookings={[{ start: new Date('10:30am').valueOf(), end: new Date('11:00am').valueOf() }]} status='available' />)}
  </div>
}