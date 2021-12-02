import './NewEventForm.css';
import {useState} from 'react'

export default function NewEventForm({addEvent}) {
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    function resetForm() {
        setTitle("");
        setDate("")
    }

    function submit(e) {
        e.preventDefault();

        const evt = {
            title,
            date,
            id: Math.floor(Math.random() * 100000)
        }
        addEvent(evt);
        resetForm();
    }

    return (
        <form className="new-event-form" onSubmit={submit}>
            <label>
                <span>Event Title:</span>
                <input type="text" onChange={(e) => setTitle(e.target.value)} value={title} />
            </label>
            <label>
                <span>Event Date:</span>
                <input type="date" onChange={(e) => setDate(e.target.value)} value={date} />
            </label>
            <button>Submit</button><br />
            <p onClick={resetForm}>Reset</p>
        </form>
    )
}
