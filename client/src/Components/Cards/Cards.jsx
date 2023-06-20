import style from './Cards.module.css'
import Card from '../Card/Card';
import { Link } from 'react-router-dom';

export default function Cards({videogames}){
    
    for(let i = 0; i>15;i++){

    }
    
    return(
        <div className={style.contenedor} >
  
        
        {videogames.map((game)=>{
            return(
                <Card 
                    id={game.id}
                    background_image={game.background_image}
                    name={game.name}


                />

            )
        })}

        </div>
    )
}