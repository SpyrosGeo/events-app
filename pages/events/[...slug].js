import { useRouter } from 'next/router'
import { Fragment } from 'react';
import EventList from '../../components/events/event-list';
import ResultsTitle from '../../components/events/results-title';
import Button from '../../components/ui/button';
import ErrorAlert from '../../components/ui/error-alert';
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
        return (
            <Fragment>
                <ErrorAlert>
                <p className="">Invalid filter. Please adjust your values</p>
                </ErrorAlert>
                <div className="center">

                <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
            )
    }
    const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth })
    if (!filteredEvents || filteredEvents.length === 0) {
        return (
            <Fragment>
                <ErrorAlert>
                <p className="">No Events found</p>
                </ErrorAlert>
                <div className="center">
                <Button link="/events">Show All Events</Button>
                </div>
            </Fragment>
        ) 
    }

    const date = new Date(numYear, numMonth - 1)
    return (
        <Fragment>
            <ResultsTitle date={date} />
            <EventList items={filteredEvents} />
        </Fragment>
    )
}
