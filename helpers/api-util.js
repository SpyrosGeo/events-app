const URL = 'https://nextjs-course-f51b0-default-rtdb.europe-west1.firebasedatabase.app/events.json'
export async function getAllEvents() {
    const response = await fetch(URL)
    const data = await response.json()

    const events = [];
    for (const key in data) {
        events.push({
            id: key,
            ...data[key]
        })
    }
    return events;
}
export async function getFeaturedEvents() {
    const allEvents =  await getAllEvents();
    return allEvents.filter((event) => event.isFeatured);
}