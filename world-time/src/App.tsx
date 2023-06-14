import './App.css'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import timezone from "dayjs/plugin/timezone";
import customParseFormat from "dayjs/plugin/customParseFormat";
import City from "./models";
import {useCallback, useEffect, useState} from "react";
import WorldClocks from "./components/WorldClocks";


function App() {
    dayjs.extend(utc)
    dayjs.extend(timezone)
    dayjs.extend(customParseFormat)


    const localDate = new Date();

    const citiesArray: City[] = [
        {
            id: Math.floor(Math.random() * (100 - 1 + 1) + 1),
            name: "Moscow",
            timeZone: "Europe/Moscow",
            cityDate: dayjs().tz("Europe/Moscow")
        }
    ]

    const [cities, setCities] = useState(citiesArray);

    useEffect(() => {
        const timerCurrentSecs = setInterval(() => {
            setCities((prevState) => {
                return [...prevState.filter((el) => el.cityDate = dayjs(localDate).tz(`${el.timeZone}`)) ]
            })
        }, 1000);

        return () => {
            clearInterval(timerCurrentSecs);
        }
    }, [citiesArray]);


    const addNewCity = useCallback((city: City) => {
        setCities( (prevState) => {
            return [...prevState, city]
        });
    }, [])

    const deleteElement = useCallback((city: City) => {
        setCities((prevState) => {
            return [...prevState.filter((el) => el.id !== city.id)]
        })
    }, [])



  return (
        <WorldClocks  citiesList={cities} onAddNewCity={addNewCity} onDeleteCity={deleteElement} />

  )
}

export default App
