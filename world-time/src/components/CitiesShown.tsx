import City from "../models";

interface Props {
    city: City,
}

const CitiesShown = ({city}: Props) => {

    return (
         <li>{city.name}</li>
    )

}

export default  CitiesShown

