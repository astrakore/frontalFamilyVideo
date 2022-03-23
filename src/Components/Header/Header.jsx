import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT, MOVIES_TITLE } from '../../redux/types';
import './Header.css';
import { connect } from 'react-redux';
import axios from 'axios';

const Header = (props) => {

    let navigate = useNavigate();

    const [titulo, setTitulo] = useState("");

    useEffect(() => {
        
    })

    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    const logOut = () => {
        
        props.dispatch({ type: LOGOUT });

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    const manejador = (ev) => {
        setTitulo(ev.target.value);
    }

    const busquedaPorTitulo = async () => {
    
        //Axios que trae resultados....

        try {
            let resultados = await axios.get(`https://videostore-backend.herokuapp.com/films/custom?arg=${titulo}`);

            //Guardo en redux los resultados de las películas

            props.dispatch({type: MOVIES_TITLE, payload: resultados.data});

            setTimeout(()=>{
                navigate("/searchresults");
            },500);


        } catch (error) {
            console.log(error);
        }
    }

    if (!props.credentials?.token) {
        return(
            <div className="designHeader">
                <div className="section"></div>
                <div className="buscar"></div>
                <div className="section">
                    <div className="buttoncito" onClick={()=>navegar("/login")}>Acceder</div>
                    <div className="buttoncito" onClick={()=>navegar("/register")}>Registrarme</div>
                </div>
            </div>
        )
    }else{
        return(
            <div className="designHeader">
                <div className="section"></div>
                <div className="buscar"></div>
                <div className="section">
                    <div className="buttoncito" onClick={()=>navegar("/profile")}>Mi perfil</div>
                    <div className="buttoncito" onClick={()=>logOut()}>Logout</div>
                </div>
            </div>
        )
    }

}

export default connect((state) => ({
    credentials: state.credentials
}))(Header);