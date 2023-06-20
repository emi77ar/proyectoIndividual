import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({background_image,id,name})=>{

    return(
        <div className={style.contenedor}>

            <img className={style.image} src={background_image} />
            <h2>{name}</h2>
            <Link to={`/videogames/${id}`}  >
            <h2>{id}</h2>            
        
            </Link>
            </div>
    )

}

export default Card;