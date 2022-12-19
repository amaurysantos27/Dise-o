import React, { forwardRef } from "react";

// eslint-disable-next-line react/display-name
export const ComponentToPrint = forwardRef((_, ref) => {
  return (
    <div ref={ref}>
      <div> SOLICITUD PRESTAMOS DE EQUIPOS TECNOLOGICOS </div>

      <div>
        <h1 style={{ color: "white", background: "#174379", textAlign: "center", fontSize: "20px" }}>Datos Del Solicitante</h1 >
        <form>
          <div>
            <label>Nombre del Solicitante</label>
            <input type="text" />
          </div>

          <div>
            <label>Matricula o cedula</label>
            <input type="text" />
          </div>

          <div >

            <label>
              <input type="radio" name="radio" />
              <span>Estudiante</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Docente</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Administrativo</span>
            </label>
          </div>

        </form>
        <h2 style={{ color: "white", background: "#174379", textAlign: "center", fontSize: "20px" }}>EQUIPOS A SOLICITAR</h2 >
        <form>
          <div >
            <label>
              <input type="radio" name="radio" />
              <span>Proyector</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Portátil</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Extensión</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Extensión</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Regleta</span>
            </label>
            <label>
              <input type="radio" name="radio" />
              <span>Bocina</span>
            </label>

            <label>
              <input type="radio" name="radio" />
              <span>Equipos de Sonido</span>
            </label>

            <label>Otro</label>
            <input type="text" />

          </div>

        </form>
      </div>

    </div>
  );
});

