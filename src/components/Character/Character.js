import {Link, Outlet} from "react-router-dom";

const Character = ({item}) => {
    // console.log(item)
    const {
        name, status, image, location: {name: locationName}
    } = item
    return (
        <div>
            <img src={image} alt={"hero"} style={{height:'150px', width:'150px'}}/>
            <Link to={`${item.id}`}>
                <div>{name}</div>
            </Link>
            <div>{status}</div>
            <div>Last known location:{locationName}</div>
            <hr/>

        </div>
    )
};

export {Character};