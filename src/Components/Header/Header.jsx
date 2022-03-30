import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { LOGOUT } from '../../redux/types';
import './Header.css';
import { connect } from 'react-redux';

const Header = (props) => {

    let navigate = useNavigate();

    useEffect(() => {
        
    })

    const navegar = (lugar) => {

        setTimeout(() => {
            navigate(lugar);
        }, 200);

    }

    const logOut = () => {
        
        props.dispatch({type: LOGOUT});

        setTimeout(() => {
            navigate("/");
        }, 1500);
    }

    if (!props.credenciales?.token) {
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
    credenciales: state.credenciales
}))(Header);