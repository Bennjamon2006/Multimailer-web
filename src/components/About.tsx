import { Link } from "react-router-dom";
import { API_URL } from "../constants";
import "../styles/About.css";

export default function About() {
  return (
    <div className="about">
      <section>
        <h1>Acerca de Multimailer</h1>
        <p>
          Multimailer es un software diseñado para enviar correos electrónicos a
          varias direcciones de manera rápida y eficiente. La interfaz de
          usuario simple y la simplificidad de uso hacen que sea fácil de usar
          para todos los usuarios.
        </p>
      </section>

      <section>
        <h2>Guia de Uso</h2>

        <p>
          Multimailer está en proceso de prueba y está abierta a un máximo de
          100 usuarios ¡<Link to="/join">Únete</Link> y no pierdas la
          oportunidad de ser uno de los primeros en probar una herramienta que
          aspira a ser un poderoso aliado para tus negocios!
        </p>

        <p>Puedes usar Multimailer con estos sencillos pasos:</p>

        <ol>
          <li>
            Ve a la <Link to="/">página principal</Link> e{" "}
            <Link to={`${API_URL}/login`}>inicia sesión</Link> con tu cuenta de
            Google.
            <br />
            <span className="note">
              <b>Nota:</b> En estos momentos, Multimailer solo está disponible
              para usuarios de Google.
            </span>
          </li>
          <li>
            Una vez inicias sesión, ve a{" "}
            <Link to="/compose">Crear mensaje</Link>.
          </li>
          <li>
            Dentro de la ventana de creación de mensaje, podrás ver tu lista de
            contactos con sus respectivos correos electrónicos, en la cual
            puedes administrar quienes recibirán el mensaje. Por defecto estarán
            seleccionados todos los contactos. Sin embargo, puedes quitar o
            agregar contactos a tu lista según sea necesario.
          </li>
          <li>
            Luego de seleccionar tus contactos y completar el asunto y el
            contenido del mensaje, haz clic en el botón "Enviar" para enviar el
            mensaje a todos los contactos seleccionados.
          </li>
        </ol>
      </section>

      <section>
        <h2>Contáctanos</h2>
        <p>
          Si tienes alguna pregunta o necesitas ayuda, no dudes en contactar al
          desarrollador En <Link to="/contact">esta página</Link> puedes
          encontrar los medios de contacto. Junto con los horarios de atención
          al cliente. Estaremos atentos a cualquier consulta o sugerencia que
          puedas tener.
        </p>
      </section>

      <section>
        <h2>Privacidad y uso de datos</h2>

        <p>
          Al manipular datos y permisos sensibles de los usuarios, como los
          contactos o el envío de correos electrónicos, Multimailer se
          compromete a resgatar la privacidad de nuestros usuarios. Las
          credenciales de acceso a Google son cifradas y no se almacenan en
          nuestros sistemas ni se comparten con terceros.
        </p>
      </section>
    </div>
  );
}
