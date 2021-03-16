import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
export default function FilteredEventsPage() {
    const router = useRouter()
    const filteredData = router.query.slug;
    if (!filteredData) {
        return <p className="center">Loading...</p>
    }
    const filteredYear = filteredData[0]
    const filteredMonth = filteredData[1]
    const numYear = +filteredYear
    const numMonth = +filteredMonth
    //check for valid parameteres
    if (isNaN(numYear) || isNaN(numMonth) || numYear > 2030 || numYear < 2021 || numMonth < 1 || numMonth > 12) {
        return <p>Invalid filter. Please adjust your values</p>
    }
    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })
    if(!filteredEvents || filteredEvents.length===0) {
        return <p className="center">No Events found</p>
    }
    return (
        <div>
            <h1>Filetered Events</h1>
        </div>
    )
}
