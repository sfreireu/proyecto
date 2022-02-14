import React, { useState } from "react";

const Login = () => {
 
    return ( 
        <form>
          <div className="row">
            <h1 style={{color: 'black'}}>Login</h1>
              <div>
                  <label>Usuario</label>
                  <input 
                      className="u-full-width" 
                      type="text" 
                  />
              </div>

              <div>
                  <label>Contraseña</label>
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
 
export default Login;