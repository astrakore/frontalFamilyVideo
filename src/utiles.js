export const checkError = (type,value) => {

    switch(type) {

        case 'correo' :

            if (! /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/.test(value) ) {
                
                return "Introduce un e-mail válido";
            }else{
                return "ok";
            };
        
        case 'nombre': 

            if (! /[a-z]/gi.test(value) ) {
                return "Introduce un nombre válido";
            }else{
                return "ok";
            };
        
        case 'telefono':

            if (! /[\d()+-]/g.test(value) ) {
                return "Introduce un telefono válido";
            }else{
                return "ok";
            };

        default:
            return "ok";
        
    }
};

export const raiz = "https://image.tmdb.org/t/p/w185";