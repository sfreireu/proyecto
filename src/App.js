import React, {Fragment} from 'react';
import './App.css';
import Header from "./componentes/Header";
import Login from "./componentes/Login";
import Formulario from "./componentes/Formulario";
import FormularioEmpleados from "./componentes/FormularioEmpleados";


function App() {

  return (
    <Fragment>
      <Header titulo = "Inventario de Vacunación de Empleados"/>
      <div className="container">
        <Login></Login>
      </div>
      <hr />
      <div className="container">
        <Formulario></Formulario>
      </div>
      <hr />
      <div className="container">
        <FormularioEmpleados></FormularioEmpleados>
      </div>
    </Fragment>
      );
  //return (<Funcion1 />);
}

export default App;
