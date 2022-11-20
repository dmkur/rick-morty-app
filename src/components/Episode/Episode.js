import {useEffect, useState} from "react";
import {getAllEpisodes} from "../../service/axios.service";
import {useSearchParams} from "react-router-dom";

const Episode = () => {
    const [episodes, setEpisodes] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');


    useEffect(() => {
        getAllEpisodes({page: query.get('page')}).then(({data: {results, info}}) => {
            setEpisodes([...results])
            setPrev(info.prev)
            setNext(info.next)
        })
    }, [query])

    function prevPage() {
        const prev = Number(query.get("page")) - 1;
        setQuery({page: `${prev}`})
    }

    function nextPage() {
        const next = Number(query.get("page")) + 1;
        setQuery({page: `${next}`})
    }

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
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    )
};

export {Episode};