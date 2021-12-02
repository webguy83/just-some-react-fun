import {card} from './EventList.module.css'

export default function EventList({events, eventClick}) {
    return events.map((e) => {
        return (
          <li key={e.id} className={card}>
            {e.title} <button onClick={() => eventClick(e.id)}>Booger Click</button>
          </li>
        );
      });
}
