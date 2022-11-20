import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {getSingleCharacter} from "../../service/axios.service";

const SingleCharacter = () => {
    const [single, setSingle] = useState({});

    const {id} = useParams();

    useEffect(() => {
        getSingleCharacter(id).then(({data}) => {
            setSingle(data)
        })
    }, [])


    return (
        <div>
            <div>
                <img src={single.image} alt={'hero'}/>
            </div>
            <div>{single.name}</div>
            <div>{single.status}</div>
            <div>{single.species}</div>
            <div>{single.gender}</div>
            {/*<div>{single.location.name}</div>*/}
            <div>All episodes</div>
        </div>
    )
};

export {SingleCharacter};