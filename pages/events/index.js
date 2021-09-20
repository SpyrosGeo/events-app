import Head from 'next/head'
import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents  } from "../../helpers/api-util"
import { useRouter } from 'next/router'
export default function AllEventsPage({events}) {
    const router = useRouter()
    const handleFindEvents = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }

    return (
        <div>
            <Head>
                <title>Events</title>
                <meta name="description" content="Find a lot of great events..."/>
            </Head>
            <EventsSearch onSearch={handleFindEvents} />
            <EventList items={events} />
        </div>
    )
}
export async function getStaticProps(){
const events = await getAllEvents()
return {
    props:{
        events
    },
    revalidate:60
}
}