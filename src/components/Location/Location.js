import {useEffect, useState} from "react";
import {getAllLocations} from "../../service/axios.service";
import {useSearchParams} from "react-router-dom";

const Location = () => {
    const [locations, setLocations] = useState([]);
    const [prev, setPrev] = useState('');
    const [next, setNext] = useState('');
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        getAllLocations({page: query.get("page")}).then(({data: {results, info}}) => {
            setLocations([...results])
            setPrev(info.prev)
            setNext(info.next)
        })
    }, [query])

    function prevPage() {
        const prev = Number(query.get("page"))-1;
        setQuery({page: `${prev}`})
    }
    function nextPage() {
        const next = Number(query.get("page"))+1;
        setQuery({page: `${next}`})
    }

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
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
        </div>
    )
};

export {Location};