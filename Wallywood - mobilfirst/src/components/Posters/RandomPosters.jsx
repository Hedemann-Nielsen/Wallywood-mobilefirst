import React,  { useEffect, useState } from "react"
import axios from "axios";

import style from "./Posters.module.scss";
import { Link } from "react-router-dom";


export const RandomPosters = () => {
    const [apiData, setApiData] = useState([]);

    const getData = async () => {
        const result = await axios.get("http://localhost:3000/posters?sort_key=random&limit=2&attributes=id,image,slug,name,description")
        setApiData(result.data)
    }

    useEffect(() => {
        getData();
    }, [setApiData])
  return (
    <>
    <h2 className="text-2xl ml-5">Udvalgte plakater</h2>
    {apiData && apiData.map(item => {
        return (
            <figure key={item.id} className={style.randomPosters}>
                <img src={item.image} alt={item.name} />
                <figcaption>
                    <h3 className="text-xl font-bold">{item.name}</h3>
                    <p dangerouslySetInnerHTML={{ __html: item.description}}></p>
                    <Link 
                        to={item.slug} >
                        <button>læs mere</button>
                    </Link>
                </figcaption>
            </figure>
        )
    })}
    </>
    )

    
}



