import EventItem from "./EventItem/EventItem"
import data from '../../data/events.json'

const events = data._embedded.events;
console.log(data);
const Events = () => {
    const eventsComponent = events.map((eventItem) =>(
    <EventItem 
    key={eventItem.id}
    name={eventItem.name}    
    info={eventItem.info}
    image={eventItem.images[0].url}
    /> 
    ));
  return (
    <>
    <div>Events</div>
    {eventsComponent}
    </>
  )
}

export default Events