import React from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

import './Alquilar.css';

const Alquilar = (props) => {

    let navigate = useNavigate();

    const alquilar = async () => {
        
        let body = {
            
            precio: 5,
            peliculaId: props.id,
            usuarioId: props.idUser,
            fechaPedido: "en tus sueños",
            fechaPedido: "nunca jamás"
        }

        let config = {
            headers: { Authorization: `Bearer ${props.token}` }
        };

        try {

            let res = await axios.post("https://astrakorevideoclub.herokuapp.com/orders",body,config);

            if(res){
                console.log(res);
                navigate("/");
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="designRent" onClick={()=>alquilar()}>Alquilar</div>
    )
}

export default Alquilar;