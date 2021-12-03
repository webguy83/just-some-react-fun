import './NewEventForm.css';
import {useState} from 'react'

export default function NewEventForm({addEvent}) {
    const [location, setLocation] = useState("noobsville");
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");

    function resetForm() {
        setTitle("");
        setDate("");
        setLocation('noobsville')
    }

    function submit(e) {
        e.preventDefault();

        const evt = {
            title,
            date,
            location,
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
            <label>
                <span>Event location:</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="noobsville">Noobsville</option>
                    <option value="cuntsVulle">CuntsVulle</option>
                    <option value="ogerVille">OgerVille</option>
                </select>
            </label>
            <button>Submit</button><br />
            <p onClick={resetForm}>Reset</p>
        </form>
    )
}
