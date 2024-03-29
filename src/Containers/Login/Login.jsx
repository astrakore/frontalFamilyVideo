import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

//REDUX...
import { connect } from 'react-redux';
import { LOGIN } from '../../redux/types';

import './Login.css';

const Login = (props) => {

    let navigate = useNavigate();

    //1 - HOOKS ----------------------------------------------------------------------------------------------
    const [datosUsuario, setDatosUsuario] = useState({correo: "", password: ""});
    const [msgError, setMsgError] = useState("");
    const [msgError2, setMsgError2] = useState("");



    //Funciones handlers
    const rellenarDatos = (e) => {
        //Funcion handler que setea los datos en el hook...[e.target.name] obtiene 
        //el nombre de la propiedad a cambiar, e.target.value tiene el valor..ambos
        //obtienen los datos del evento, que es el hecho de escribir en un input en concreto
        setDatosUsuario({...datosUsuario, [e.target.name]: e.target.value})
    };

    //Funciones locales

    const login = async () => {

        try {

            //Me invento las credenciales
            let body = {
                 correo: datosUsuario.correo,
                 password: datosUsuario.password
            }

            let resultado = await axios.post("https://astrakorevideoclub.herokuapp.com/usuarios/login",body);
            
            if(resultado.data === "Usuario o contraseña inválido"){
                setMsgError2("Usuario o contraseña inválido")
            
            }else{

                props.dispatch({type:LOGIN, payload: resultado.data});

                setTimeout(()=>{
                    navigate("/movies");
                },1500);
            }

        } catch (error) {

            console.log(error)

        }

    };

    //2 - RENDER ----------------------------------------------------------------------------------------------

    return(
        <div className="designLogin">
            <div className="loginForm">
                Accede a tu cuenta
                <div className="designFormulario">
                    <input className="inputcito" type="email" name="correo" id="correo" title="correo" placeholder="Correo Electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="inputcito" type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e);}}/>
                    {msgError}
                    {msgError2}
                </div>
                <div className="loginButton" onClick={()=>login()}>Acceder</div>
            </div>
        </div>
    )
};

export default connect((state)=>({
    credentials: state.credentials
}))(Login);