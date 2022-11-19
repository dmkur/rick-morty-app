import {useEffect, useState} from "react";
import {getAllLocations} from "../../service/axios.service";

const Location = () => {
    const [locations, setLocations] = useState([]);
    console.log(locations)

    useEffect(() => {
        getAllLocations.then(({data}) => setLocations([...data.results]))
    }, [])
    return (
        <div>
            {
                locations.map((val) =>
                    <div key={val.id}>
                        <div>{val.name}</div>
                        <div>{val.dimension}</div>
                        <div>{val.type}</div>
                        <hr/>
                    </div>
                )
            }
        </div>
    )
};

export {Location};