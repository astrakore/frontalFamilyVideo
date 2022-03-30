import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import { MOVIE_DETAIL } from '../../redux/types';
import {raiz} from '../../utiles';
import './Movies.css';

const Movies = (props) => {

    const [films, setFilms] = useState([]);
    let navigate = useNavigate();

    useEffect(()=>{
        traePelis();
    },[]);

    //useEffect custom para el hook films

    useEffect(()=>{
        console.log("vaya, , films ha cambiado, ", films);
    },[films]);

    const traePelis = async () => {

        try {

            let res = await axios.get("https://astrakorevideoclub.herokuapp.com/peliculas");

            //Una vez han venido los datos del backend, nosotros, lo siguiente que haremos para que no se pierdan
            //será setear esos datos en el hook, haciendo que las peliculas estén disponibles 
            //para los return del componente.

            setTimeout(()=>{
                setFilms(res.data.results);
            },2000);

        } catch (error) {
            console.log(error);
        }
    };

    const escogePelicula = (pelicula) => {
        
        console.log(pelicula);
        //Guardamos la pelicula escogida en redux
        props.dispatch({type:MOVIE_DETAIL, payload: pelicula});


        //Redirigimos a movieDetail con navigate
        navigate("/moviedetail");
    }
 
        return(
            <div className="designRooster">

                {
                    //Voy a mapear las películas
                    films.map(pelicula => {
                        
                        return (
                            
                            <div className="cardPelicula" key={pelicula.id} onClick={()=>escogePelicula(pelicula)}>
                                <img className="fotoCard" src={raiz + pelicula.poster_path} alt={pelicula.title}/>
                                <p>{pelicula.overview}</p>
                            </div>
                            
                        )
                    })
                }
                
            </div>
        )
}

export default connect((state) => ({
    films: state.search.peliculas
}))(Movies);