import Link from 'next/link'
export default function EventItem({event}) {

    const {title,image,date,location,id } = event;
    const humanReadableDate = new Date(date).toLocaleDateString('en-Us',{
        day:'numeric',
        month:'long',
        year:'numeric',
    })
    const formattedAddress = location.replace(', ','\n');
    const exploreLink = `/events/${id}`
    return (
        <li>
            <img src={"/"+image} alt={title} />
            <div>
                <div>
                    <h2>{title}</h2>
                    <div>
                        <time>{humanReadableDate}</time>
                    </div>
                    <div>
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div>
                    <Link href={exploreLink}>Explore Event</Link>
                </div>
            </div>
        </li>
    )
}
