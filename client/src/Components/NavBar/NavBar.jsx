import style from './NavBar.module.css';
import React from 'react';
class Nav extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <div className={style.contenedor}>
            <input type="text"  /><label>BUSCAR</label>

        </div>
    )
}

}

export default Nav;
