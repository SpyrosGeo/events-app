// import Head from 'next/head'
import EventList from "../components/events/event-list"
// import {  getFeaturedEvents,  } from "../dummy-data"
import { getAllEvents } from "../helpers/api-util"
export default function Home({featuredEvents}) {
  // console.log(featuredEvents)
  return (
    <div>
     <EventList items={featuredEvents} />
    </div>

  )
}

export async function getStaticProps(){

  const featuredEvents = await getAllEvents()
  console.log(featuredEvents)
  return {
    props:{
      featuredEvents
    }
  }
}
