import {useEffect, useState} from "react";
import {getAllEpisodes} from "../../service/axios.service";

const Episode = () => {
    const [episodes, setEpisodes] = useState([]);
    console.log(episodes)

    useEffect(() => {
        getAllEpisodes.then(({data}) => setEpisodes([...data.results]))
    }, [])
    return (
        <div>
            {
                episodes.map((val) =>
                    <div key={val.id}>
                        <div>{val.episode}</div>
                        <div>{val.name}</div>
                        <div>{val.air_name}</div>
                        <hr/>
                    </div>
                )
            }
        </div>
    )
};

export {Episode};