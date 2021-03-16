import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents, getFilteredEvents } from "../../dummy-data"
import { useRouter } from 'next/router'
export default function AllEventsPage() {
    const router = useRouter()
    const events = getAllEvents()
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
