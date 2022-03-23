import React from 'react';
import './Home.css';

const Home = () => {

    return(
        <div className="designHome">

            <div className="divSuperior">
                
                <div className="recuadro colorBlanco"></div>
                <div className="cuadro1 colorVerde">

                    <div>Family</div>
                    <div className="espacio1"></div>
                    
                </div>
                <div className="recuadro colorRojo"></div>

            </div>

            <div className="divInferior">

                <div className="recuadro colorRojo"></div>
                <div className="cuadro2 colorAmarillo">

                    <div>Video</div>
                    <div className="espacio2"></div>

                </div>
                <div className="recuadro colorNegro"></div>

            </div>
        
        </div>
    )

}

export default Home;