import style from './Card.module.css';

const Card = ({background_image,id,name})=>{

    return(
        <div className={style.contenedor}>

            <img className={style.image} src={background_image} />
            <h2>{name}</h2>
            <h2>{id}</h2>            
        </div>
    )

}

export default Card;