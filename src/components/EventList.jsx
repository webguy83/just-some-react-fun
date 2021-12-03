import {card} from './EventList.module.css'

export default function EventList({events, eventClick}) {
    return events.map((e) => {
        return (
          <li key={e.id} className={card}>
            {e.title} {e.location} <button onClick={() => eventClick(e.id)}>Booger Click</button>
          </li>
        );
      });
}
