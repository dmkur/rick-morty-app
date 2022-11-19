import {useEffect, useState} from "react";
import {getAllCharacters} from "../../service/axios.service";
import {Character} from "../Character/Character";

const Characters = () => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        getAllCharacters.then(({data}) => setCharacters([...data.results]))
    }, [])

  return (
      <div>
          {
              characters.map(val => <Character
                  key={val.id}
                  item={val}
              />)
          }
      </div>
  )
};

export {Characters};