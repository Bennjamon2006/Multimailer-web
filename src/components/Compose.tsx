import ContactList from "./ContactList";
import MailComposer from "./MailComposer";
import "../styles/Compose.css";
import ComposeProvider from "../contexts/Compose/provider";

export default function Compose() {
  return (
    <div className="compose">
      <header>
        <h1>Crear mensaje</h1>
      </header>
      <main>
        <ComposeProvider>
          <ContactList />
          <MailComposer />
        </ComposeProvider>
      </main>
    </div>
  );
}
