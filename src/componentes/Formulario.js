import React, { useState } from "react";
//import { TextField  } from '@material-ui/core';

const Formulario = () => {

    const [cedula, setCedula] = useState("");

    const cedulaChange = (e) => {
    setCedula(e.target.value);
    };

    const validate_ci = (cedula) => 
    {
        if (cedula.length === 10) 
        {
          let digito_region = cedula.substring(0, 2);
    
          if (digito_region >= 1 && digito_region <= 24) 
          {
            let ultimo_digito = cedula.substring(9, 10);
            let pares =
              parseInt(cedula.substring(1, 2)) +
              parseInt(cedula.substring(3, 4)) +
              parseInt(cedula.substring(5, 6)) +
              parseInt(cedula.substring(7, 8));
            let numero1 = cedula.substring(0, 1);
            numero1 = numero1 * 2;
            if (numero1 > 9) 
            {
              numero1 = numero1 - 9;
            }
            let numero3 = cedula.substring(2, 3);
            numero3 = numero3 * 2;
            if (numero3 > 9) 
            {
              numero3 = numero3 - 9;
            }
            let numero5 = cedula.substring(4, 5);
            numero5 = numero5 * 2;
            if (numero5 > 9) 
            {
              numero5 = numero5 - 9;
            }
            let numero7 = cedula.substring(6, 7);
            numero7 = numero7 * 2;
            if (numero7 > 9) 
            {
              numero7 = numero7 - 9;
            }
            let numero9 = cedula.substring(8, 9);
            numero9 = numero9 * 2;
            if (numero9 > 9) 
            {
              numero9 = numero9 - 9;
            }
            let impares = numero1 + numero3 + numero5 + numero7 + numero9;
    
            //Suma total
            let suma_total = pares + impares;
            let primer_digito_suma = String(suma_total).substring(0, 1);
            let decena = (parseInt(primer_digito_suma) + 1) * 10;
            let digito_validador = decena - suma_total;
            if (digito_validador === 10) digito_validador = 0;
            if (digito_validador === ultimo_digito) 
            {
              return true;
            } 
            else 
            {
              return false;
            }
          } 
          else 
          {
            return false;
          }
        } 
        else 
        {
          return false;
        }
      };
      //let isCI = validate_ci(cedula);

    
    return ( 
        <form>
          <div className="row">
            <h1 style={{color: 'black'}}>Registro Empleados</h1>
              <div>
                  <label>Nombres</label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                  />
              </div>

              <div>
                  <label>Apellidos</label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                  />
              </div>

              {/* <div className="u-full-width">
                <TextField
                  size="large"
                  variant="outlined"
                  className="u-full-width"
                  label="Cédula de Identidad"
                  value={cedula}
                  onChange={cedulaChange}
                />
              </div>
              {cedula && (
                <div className="ms-6 mb-6">
                  <div className={isCI ? "text-success" : "text-danger"}>
                    <small>Cédula válida</small>
                  </div>
                </div>
              )} */}
            
            <div>
            <label>Cédula</label>
            <input 
                className="u-full-width" 
                type="text"
                value={cedula}
                onChange={cedulaChange} 
            />
        </div>

              <div>
                  <label>Correo</label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                  />
              </div>

              <hr/>

              <div>
                  <input 
                      type="submit" 
                      value="Registrar" 
                      className="button-primary u-full-width" 
                  />
              </div>
          </div>
  </form>
     );
}
 
export default Formulario;