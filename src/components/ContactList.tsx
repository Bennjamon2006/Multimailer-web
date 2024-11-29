import useContacts from "../hooks/useContacts";
import "../styles/ContactList.css";
import Contact from "./Contact";

export default function ContactList() {
  const { contacts, loading, error } = useContacts();

  if (loading) {
    return <p>Cargando contactos...</p>;
  }

  if (error) {
    return <p>Error al cargar los contactos: {error}</p>;
  }

  return (
    <div className="contact-list">
      <header>
        <h1>Contactos</h1>
      </header>

      <div className="list">
        {contacts.map((contact) => (
          <Contact key={contact.email} contact={contact} />
        ))}
      </div>
    </div>
  );
}
