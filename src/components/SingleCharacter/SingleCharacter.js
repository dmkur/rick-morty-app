import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSingleCharacter} from "../../service/axios.service";

const SingleCharacter = () => {
    const {id} = useParams();
    const [character, setCharacter] = useState({});
    console.log(character, "STATE-INFO")


    useEffect(() => {
            getSingleCharacter(id).then(({data}) => {
                const users = JSON.stringify(data)
                setCharacter(JSON.parse(users))
            })
        }, [id])


    return (
        <div>
            <div><img src={character.image} alt={"hero"}/></div>
            <div>{character.name}</div>
            <div>{character.status}</div>
            <div>{character.gender}</div>
            <div>{character.location.name}</div>
        </div>
    )

};

export {SingleCharacter};