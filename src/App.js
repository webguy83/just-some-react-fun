import './App.css';
import { useState } from 'react';
import Title from './components/Title';
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([]);

  function addEvent(event) {
    setEvents((prevEvents) => {
      return [...prevEvents, event];
    });
    setShowModal(false);
  }

  const handleClick = (id) => {
    const updatedEvents = (prevEvents) => prevEvents.filter((evt) => evt.id !== id);
    setEvents(updatedEvents);
  };

  function showOrHideEvents() {
    setShowEvents(!showEvents);
  }

  function displayEventsButton(isShown) {
    return isShown ? 'Show' : 'Hide';
  }

  function openModal() {
    setShowModal(true);
  }

  return (
    <div className="App">
      <Title title="get rekt lol" />
      <Title title="hippy" />
      <button onClick={showOrHideEvents}>{displayEventsButton(showEvents)} Events</button>

      <ul>{showEvents && <EventList events={events} eventClick={handleClick} />}</ul>
      <button onClick={openModal}>Show the damn modal</button>
      {showModal && (
        <Modal>
          <NewEventForm addEvent={addEvent} />
        </Modal>
      )}
    </div>
  );
}

export default App;
