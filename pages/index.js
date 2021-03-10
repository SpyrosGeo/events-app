// import Head from 'next/head'
import EventList from "../components/events/event-list"
import { getAllEvents,  } from "../dummy-data"
export default function Home() {
  const featuredEvents = getAllEvents()
  return (
    <div>
     <EventList items={featuredEvents} />
    </div>

  )
}
