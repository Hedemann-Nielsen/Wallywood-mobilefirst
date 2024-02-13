import { useEffect, useState } from "react"
import axios from "axios";

import style from "./Posters.module.scss";

export const RandomPosters = () => {
    const [apiData, setApiData] = useState([]);

    const getData = async() => {
        const result = await axios.get("http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,image,slug,name,description")
        console.log(result.data)
        setApiData(result.data)
    }

    useEffect(() => {
        getData();

    }, [setApiData])
  return (
    <>
    <h2>Udvalgte plakater</h2>
    {apiData && apiData.map(item => {
        return (
            <figure key={item.id} className={style.randomPosers}>
                <img src={item.image} alt={item.name} />
                <figcaption>
                    <h3>{item.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.description}}></p>
                    <button>læs mere</button>
                </figcaption>
            </figure>
        )
    })}
    </>
    )

    
}



