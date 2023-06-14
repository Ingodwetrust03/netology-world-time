import React, {memo, useState} from "react";
import City from "../models";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";

interface Props {
    onAddNewCity: (city: City) => void;
}

const AddCityForm = memo(({onAddNewCity}: Props) => {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(customParseFormat)

    const [city, setValue] = useState(
        {
            name: "",
            timeZone: "",
        }
    );


    const getValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {name, value} = e.target;
        setValue({...city, [name]: value});
    }


    const addNewCity = (e) => {
        e.preventDefault();

        const newCity: City = {
            id: Math.floor(Math.random() * (100 - 1 + 1) + 1),
            name: city.name,
            timeZone: city.timeZone,
            cityDate: dayjs().tz(city.timeZone)
        }

        onAddNewCity(newCity);
        setValue({
            name: "",
            timeZone: "",
        })

    }

    return (
        <form onSubmit={addNewCity}>
            <div className="input-group mb-3">
                <input type="text" className="form-control w-25" placeholder="Название"
                       name="name"  value={city.name} onChange={getValue}/>
                <input type="text" className="form-control w-50" placeholder="Временная зона в формате страна/город на англ"
                       name="timeZone"  value={city.timeZone} onChange={getValue}/>
                    <button className="btn btn-outline-secondary" type="submit" id="addCity">Добавить</button>
            </div>
        </form>
    )
})

export default  AddCityForm