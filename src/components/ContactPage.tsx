import { contact } from "../constants";
import "../styles/ContactPage.css";

export default function ConactPage() {
  return (
    <div className="contact-page">
      <h1>Contacto</h1>
      <p>
        En caso de cualquier consulta o sugerencia, no dudes en contactar al
        desarrollador a través de cualquiera de los siguientes medios:
      </p>
      <ul>
        <li>
          <label>Nombre: </label>
          <span>{contact.name}</span>
        </li>
        <li>
          <label>Email: </label>
          <a href={`mailto:${contact.email}`}>{contact.email}</a>
        </li>
        <li>
          <label>Teléfono: </label>
          <span>{contact.phone}</span>
        </li>
        <li>
          <label>Instagram: </label>
          <a href={contact.instagram.link}>@{contact.instagram.username}</a>
        </li>
        <li>
          <label>Facebook: </label>
          <a href={contact.facebook.link}>{contact.facebook.username}</a>
        </li>
        <li>
          <label>Discord: </label>
          <span>{contact.discord}</span>
        </li>
      </ul>

      <h2>Horario de Atención</h2>

      <p>
        Estamos al pendiente de atenderte en el siguiente horario:
        <br />
        <strong>Lunes a Viernes: 11:00 AM - 19:00 PM hora Chile</strong>
        <br />
        <strong>Sábados y Domingos: 10:00 AM - 17:00 PM hora Chile</strong>
      </p>
    </div>
  );
}
