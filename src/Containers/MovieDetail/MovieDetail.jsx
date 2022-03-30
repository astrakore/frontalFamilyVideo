import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import Alquilar from '../../Components/Alquilar/Alquilar';
import {raiz} from '../../utiles';

import './MovieDetail.css';

const MovieDetail = (props) => {

    let navigate = useNavigate();

    useEffect(()=> {

        if(props.search?.title === undefined){
            navigate("/");
        }
    });

        return(
            <div className='designFilm'>
                <div className="filmDetailHalf1">
                    <div className="dataFilm">{props.search?.title}</div>
                    <div className="dataFilm">{props.search?.overview}</div>
                    <div className="dataFilm">
                        {
                            props.credenciales.token && <Alquilar id={props.search.id} token={props.credenciales.token} idUser={props.credenciales.usuario.id}/>
                        }
                    </div>
                </div>
                <div className="filmDetailHalf2">
                    <img className="cartel" src={raiz + props.search.poster_path} alt={props.search.title}/></div>    
            </div>
        )
   
}

export default connect((state) => ({
    credenciales: state.credenciales,
    search : state.search.film
}))(MovieDetail);