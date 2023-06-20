import style from './NavBar.module.css';
import React from 'react';
import { Link } from 'react-router-dom';
class Nav extends React.Component{
    constructor(props){
        super(props)
    }
render(){
    return(
        <div className={style.contenedor}>
            <input type="text"  /><label>BUSCAR</label>
            <div className={style.paginas} >
        <Link>
        <h1 >1</h1>
        </Link>
        <Link>
        <h1>2</h1>
        </Link>
        
        <Link>
        <h1>3</h1>
        </Link>
        <Link>
        <h1>4</h1>
        </Link>
        
        <Link>
        <h1>5</h1>
        </Link>
        <Link>
        <h1>6</h1>
        </Link>
       
        <Link>
        <h1>7</h1>
        </Link>
        <Link>
        <h1>8</h1>
        </Link>
    </div>

        </div>
    )
}

}

export default Nav;
