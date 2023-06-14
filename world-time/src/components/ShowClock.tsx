import City from "../models";

interface Props  {
    city: City,
    onDeleteCity: (city: City) => void
}


 const ShowClock = ({city, onDeleteCity}: Props) => {

    return (
            <li className="cityClock">
                <h3>{city.name}</h3>
                <div className="clock">
                    <button type="button" className="btn-close" aria-label="Close" onClick={() => onDeleteCity(city)}></button>
                    {city.cityDate.hour()} : {city.cityDate.minute()} : {city.cityDate.second()}
                </div>
            </li>
    )
}

export default  ShowClock
