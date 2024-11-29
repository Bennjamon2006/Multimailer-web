import { createContext } from "react";
import { Contact } from "../../types";

interface ComposeState {
  contacts: Contact[];
  subject: string;
  content: string;
  addContact(contact: Contact): void;
  removeContact(contact: Contact): void;
  changeSubject(subject: string): void;
  changeContent(content: string): void;
}

const ComposeContext = createContext<ComposeState>({
  contacts: [],
  subject: "",
  content: "",
  addContact: () => {},
  removeContact: () => {},
  changeSubject: () => {},
  changeContent: () => {},
});

export default ComposeContext;
