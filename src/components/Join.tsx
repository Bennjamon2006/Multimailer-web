import { Link } from "react-router-dom";
import "../styles/Join.css";

export default function Join() {
  return (
    <div className="join">
      <h1>Únete a Multimailer</h1>
      <p>
        Al estar en fase de prueba, Multimailer acepta un máximo de 100
        usuarios. Y tú puedes ser uno de ellos por una módica cantidad de $50.
        Si quieres usar nuestros servicios,{" "}
        <Link to="/contact">contacta con nosotros</Link> para gestionar el
        proceso de pago e inscripción.
      </p>

      <h2>Requisitos</h2>
      <p>
        Debido a la limitaciones de pago, por el momento, solo podemos ofrecer
        el uso de nuestros servicios a usuarios que se encuentren en Chile,
        adenán, tener una cuenta de Googñe, la cual se registrará en nuestros
        sistemas.
      </p>
    </div>
  );
}
