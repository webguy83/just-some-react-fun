import './Title.css'

export default function Title({title}) {
    return <div className="title-block">
        <h1 className="title">{title}</h1>
        <br />
        <h2 className="subtitle">All the food you can eat mmmm</h2>
        <br />
    </div>
}