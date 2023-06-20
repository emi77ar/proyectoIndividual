import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from './Detail.module.css';

const Detail = ()=>{
    const {id} = useParams();
    const [game, setGame] = useState({});

    
    useEffect(()=>{
        axios.get(`http://localhost:3001/videogames/${id}`)
        .then(({data})=>{
            if(data.name){
                setGame(data)
            }else{
                return;
        }
    });

    
        return setGame({});

    },[id]);




return(
    <div className={style.contenedor} >
        <h1>{game.name}</h1>
    </div>
)


}

export default Detail;