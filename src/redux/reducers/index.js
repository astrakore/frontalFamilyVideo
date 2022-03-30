import {combineReducers} from 'redux';

import credenciales from './datosLogin-reducer';
import search from './busquedaFilms-reducer';

const rootReducer = combineReducers({
    credenciales,
    search
});

export default rootReducer;