import Map from '../assets/Map.svg'

export default function Card(props){
    let notLast
    if (props.location === 'Norway') notLast = false;
    else notLast = true;
    return (
    <div>
        <div className='card'>
        <img src={props.imageUrl} alt="" className='card--image'/>
        <div className="card--content">
            <span className='card--location'>
            <img src={Map} alt="" className='card--map'/>
                <p className="card--country">{props.location}</p>
            <a className='card--viewMap' href={props.googleMapsUrl}>View on Google Maps</a>
        </span>
        <h1 className="card--title">{props.title}</h1>
        <h3 className="card--duration">{props.startDate} - {props.endDate}</h3>
        <p className="card--description">{props.description}</p>
        </div>
    </div>
        {notLast && <div className="card--line"></div>}
    </div>
    )
}