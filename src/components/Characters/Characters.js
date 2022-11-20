import {useEffect, useState} from "react";
import {getAllCharacters} from "../../service/axios.service";
import {Character} from "../Character/Character";
import {Outlet, useSearchParams} from "react-router-dom";

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [query, setQuery] = useSearchParams({page: '1'});
    const [next, setNext] = useState('');
    const [prev, setPrev] = useState('');

    useEffect(() => {
        getAllCharacters({page: query.get('page'), count: 10}).then(({data: {results, info}}) => {
            setCharacters([...results])
            setNext(info.next)
            setPrev(info.prev)
        })
    }, [query])

    function prevPage() {
        const prev = Number(query.get('page')) - 1
        setQuery({page: `${prev}`})
    }

    function nextPage() {
        const next = Number(query.get('page')) + 1;
        setQuery({page: `${next}`})
    }

    return (
        <div>
            <Outlet/>
            {
                characters.map(val => <Character
                    key={val.id}
                    item={val}
                />)
            }
            <button onClick={prevPage} disabled={!prev}>prev</button>
            <button onClick={nextPage} disabled={!next}>next</button>
        </div>
    )
};

export {Characters};