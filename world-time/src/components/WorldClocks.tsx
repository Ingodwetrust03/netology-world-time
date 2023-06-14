import City from "../models";
import CitiesShown from "./CitiesShown";
import AddCityForm from "./AddCityForm";
import ShowClock from "./ShowClock";


interface Props {
    citiesList: City[],
    onDeleteCity: (city: City) => void,
    onAddNewCity: (city: City) => void
}

const WorldClocks = ({citiesList, onDeleteCity, onAddNewCity}: Props) => {

    return (
        <>
            <ul className="city-list">
                {citiesList.map((elem, i) => (
                    <CitiesShown
                        key={i}
                        city={elem}/>
                ))}
            </ul>

            <AddCityForm onAddNewCity={onAddNewCity}/>

            <ul className="cityClocks">
                {citiesList.map((city, index) => (
                    <ShowClock
                        key={index}
                        city={city}
                        onDeleteCity={onDeleteCity}/>
                ))}
            </ul>
        </>
    )
}

export default  WorldClocks