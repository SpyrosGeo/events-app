import EventList from "../../components/events/event-list"
import EventsSearch from "../../components/events/events-search"
import { getAllEvents } from "../../dummy-data"

export default function AllEventsPage() {
    const events = getAllEvents()
    return (
        <div>
            <EventsSearch/>
            <EventList items={events} />
        </div>
    )
}
