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