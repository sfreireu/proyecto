import React, { useState } from "react";
import { FormGroup , FormControlLabel , Checkbox } from '@material-ui/core';

const FormularioEmpleados = () => {

    return ( 
        <form>
          <div className="row">
            <h1 style={{color: 'black'}}>Información</h1>
              <div>
                  <label>Fecha Nacimiento</label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                  />
              </div>
                
              <div>
                  <label>Dirección</label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                  />
              </div>
            
            <div>
                <label>Teléfono</label>
                <input 
                    className="u-full-width" 
                    type="text"
                />
            </div>

              <div>
                  <label>Estado de Vacunación</label>
                  <FormGroup>
                  <FormControlLabel control={<Checkbox />} label="Vacunado" />
                  <FormControlLabel control={<Checkbox />} label="No Vacunado" />
                  </FormGroup>
              </div>
              
              <div>
                  <label>Tipo de Vacuna</label>
                  <select 
                      className="u-full-width"
                  >
                      <option value="">Seleccionar</option>
                      <option value="1">Sputnik</option>
                      <option value="2">AstraZeneca</option>
                      <option value="3">Pfizer</option>
                      <option value="4">Jhonson&Jhonson</option>
                  </select>
              </div>
              
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
 
export default FormularioEmpleados;