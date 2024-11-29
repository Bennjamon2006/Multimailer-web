import { useState } from "react";
import { Contact } from "../../types";
import ComposeContext from "./context";

export default function ComposeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [subject, setSubject] = useState("");
  const [content, setContent] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);

  const addContact = (contact: Contact) => {
    setContacts((contacts) => [...contacts, contact]);
  };

  const removeContact = (contact: Contact) => {
    setContacts(contacts.filter((c) => c !== contact));
  };

  const changeSubject = (newSubject: string) => {
    setSubject(newSubject);
  };

  const changeContent = (newContent: string) => {
    setContent(newContent);
  };

  return (
    <ComposeContext.Provider
      value={{
        subject,
        content,
        contacts,
        addContact,
        removeContact,
        changeSubject,
        changeContent,
      }}
    >
      {children}
    </ComposeContext.Provider>
  );
}
