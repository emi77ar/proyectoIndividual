import style from './Cards.module.css'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function Cards(){
    

    const allVideogames = useSelector(state=>state.allVideogames)



    
    return(
        <div className={style.contenedor} >


        {allVideogames.map((game)=>{
            return(
                <Card 
                    id={game.id}
                    background_image={game.background_image}
                    name={game.name}
                    genres={game.genres?.map((genre)=>genre.name).join(", ")}


                />

            )
        })}
       
         
        </div>
        
    )
}