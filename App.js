import React from 'react';
import PlaceNavigator from './navigation/PlaceNavigator';
import { Provider } from 'react-redux'

import store from './store'

import { init } from './db';

init()
  .then(() => console.log("Base de Datos Inicializada"))
  .catch((err) =>{
    console.log("Conexion a la base de datos fallida")
    console.log(err.message)
  })


export default function App() {
  return (<Provider store={store}><PlaceNavigator /></Provider>);
}
