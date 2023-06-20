import axios from 'axios';

export const buscarPorId = ()=>{

}

export const filterCards = (gender)=>{
    return {type: "FILTER_CARDS", payload: gender}
}

export const orderCards = (name)=>{
    return {type: "ORDER_NAME", payload: name}
}
export const orderCardsRating = (rating)=>{
    return {type: "ORDER_RATINGS", payload: rating}
}