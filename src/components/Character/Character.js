const Character = ({item}) => {
    // console.log(item)
    const {
        name, status, image, location: {name: locationName}
    } = item
    return (
        <div>
            <img src={image} alt={"hero"} style={{height:'150px', width:'150px'}}/>
            <div>{name}</div>
            <div>{status}</div>
            <div>Last known location:{locationName}</div>
            <hr/>
        </div>
    )
};

export {Character};