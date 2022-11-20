import {useLocation} from "react-router-dom";

const SingleCharacter = () => {
    const {state} = useLocation();
    console.log(state)
    const {image, name, status, gender, location:{name:Lname}} = state

    return (
        <div>
            <div><img src={image} alt={"hero"}/></div>
            <div>{name}</div>
            <div>{status}</div>
            <div>{gender}</div>
            <div>{Lname}</div>
        </div>
    )

};

export {SingleCharacter};