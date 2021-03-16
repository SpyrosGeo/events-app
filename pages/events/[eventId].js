import { useRouter} from 'next/router'
import { Fragment } from 'react'
import {getEventById} from '../../dummy-data'

import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import ErrorAlert from '../../components/ui/error-alert'

export default function EventDetailPage() {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId)
    if (!event) {
        return <ErrorAlert>
            <p>No Event Found</p>
        </ErrorAlert>
    }
    
    const { title,id,description,location,date, image} = event
    return (
      <Fragment>
          <EventSummary title={title}/>
          <EventLogistics date={date} address={location} image={image} imageAlt={title}/>
          <EventContent>
              <p>{description}</p>
          </EventContent>

    </Fragment>
    )
}
