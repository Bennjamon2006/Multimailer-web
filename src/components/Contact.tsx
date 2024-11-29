import { Contact as IContact } from "../types";
import "../styles/Contact.css";
import { useContext, useEffect, useState } from "react";
import ComposeContext from "../contexts/Compose/context";

export default function Contact({ contact }: { contact: IContact }) {
  const { name, email, photo } = contact;

  const [selected, setSelected] = useState(true);
  const { addContact, removeContact, contacts } = useContext(ComposeContext);

  const handleToggle = () => {
    setSelected(!selected);
  };

  useEffect(() => {
    if (selected && !contacts.includes(contact)) {
      addContact(contact);
    } else if (!selected && contacts.includes(contact)) {
      removeContact(contact);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div className="contact" onClick={handleToggle}>
      <div className="state">
        <input type="checkbox" checked={selected} onChange={() => {}} />
        <span className="checkmark"></span>
      </div>
      <div className="photo">
        <img src={photo} alt={name} />
      </div>
      <div className="info">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}
