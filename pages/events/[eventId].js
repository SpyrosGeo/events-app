import { useRouter} from 'next/router'
import { Fragment } from 'react'
import {getEventById,getAllEvents} from '../../helpers/api-util'

import EventSummary from '../../components/event-detail/event-summary'
import EventContent from '../../components/event-detail/event-content'
import EventLogistics from '../../components/event-detail/event-logistics'
import ErrorAlert from '../../components/ui/error-alert'

export default function EventDetailPage({event}) {
    // const router = useRouter()
    // const eventId = router.query.eventId

    // const event = getEventById(eventId)
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
//dont forget for dynamic pages we need getStaticPaths
export async function getStaticProps(context){
    const eventId = context.params.eventId
    const event = await getEventById(eventId)

    return {
        props:{
            event
        }
    }
}
export async function getStaticPaths(){
    const events = await getAllEvents()
    const paths = events.map(event=>({params:{eventId:event.id}}))
    return {
        paths,
        fallback:false //false shows the 404 page
    }
}

