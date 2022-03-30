import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {checkError} from "../../utiles";

import './Register.css';

const Register = () => {

    let navigate = useNavigate();

    //Hooks

    const [datosUsuario, setDatosUsuario] = useState({
        nombre: "",
        apellidos: "",
        fecha: "",
        correo: "",
        dni: "",
        password: "",
        password2: "",
        telefono: "", 
        cuenta: ""
    });

    const [msgError, setMsgError] = useState("");

    //useEffect

    useEffect(()=>{
    //se ejecuta la primera vez que se ejecuta tan solamente
    },[]);

    useEffect(()=>{
    //se ejecuta cada vez que se actualiza CUALQUIER HOOK  
    })

    //Handler (manejador)
    const rellenarDatos = (e) => {
        setDatosUsuario({...datosUsuario, 
            [e.target.name]: e.target.value})
    };


//Funciones locales del componente

    const registrame = async () => {

        //Array de distintos campos

        setMsgError("");
        let error = "";

        let arrayCampos = Object.entries(datosUsuario);
    
        // //1 comprobación de errores antes de enviar al backend

        if(datosUsuario.password !== datosUsuario.password2){

            return (setMsgError("Los dos password deben coincidir"));

        }else{
            setMsgError("");
        }

        for(let elemento of arrayCampos){
            error = checkError(elemento[0],elemento[1]);

            if(error !== "ok"){
                setMsgError(error);
                return;
            };
        };

        console.log("todo ha ido bien")

        //2construimos el body

        let body = {
            nombre: datosUsuario.nombre,
            apellidos: datosUsuario.apellidos,
            fecha: datosUsuario.fecha,
            correo: datosUsuario.correo,
            dni: datosUsuario.dni,
            password: datosUsuario.password,
            telefono: parseInt(datosUsuario.telefono),
            cuenta: datosUsuario.cuenta
        }

        //3 envio de axios

        try {
        
            let resultado = await axios.post("https://astrakorevideoclub.herokuapp.com/usuarios", body);
            console.log(resultado);
            
                setTimeout(()=>{
                    navigate("/login");
                },1000);
        
        } catch (error) {
            console.log(error);
        }

    }

    return(
        <div className='designRegister'>
             
            <div className="cardRegister">
                <div className="upCardRegister">Formulario de Registro</div>
                <div className="middleCardRegister">
                    <input className="superInput" type="text" name="nombre" id="nombre" title="nombre" placeholder="Nombre" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="text" name="apellidos" id="apellidos" title="apellidos" placeholder="Apellidos" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="text" name="fecha" id="fecha" title="fecha" placeholder="Edad" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="email" name="correo" id="correo" title="correo" placeholder="Correo electrónico" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="text" name="dni" id="dni" title="dni" placeholder="Documento Nacional de Identidad" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="password" name="password" id="password" title="password" placeholder="Contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="password" name="password2" id="password2" title="password2" placeholder="Repite la contraseña" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="text" name="telefono" id="telefono" title="telefono" placeholder="Teléfono" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                    <input className="superInput" type="text" name="cuenta" id="cuenta" title="cuenta" placeholder="Número de cuenta" autoComplete="off" onChange={(e)=>{rellenarDatos(e)}}/>
                </div>
                <div className="bottomCardRegister">
                    {msgError}
                    <div className="botonRegistro" onClick={()=>registrame()}>
                        Registrar
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Register;