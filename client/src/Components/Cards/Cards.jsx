import style from './Cards.module.css'
import Card from '../Card/Card';

export default function Cards({videogames}){
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