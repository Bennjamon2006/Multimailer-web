import { useContext } from "react";
import ComposeContext from "../contexts/Compose/context";
import "../styles/MailComposer.css";
import Button from "./Button";
import useComposse from "../hooks/useComposse";

export default function MailComposer() {
  const { subject, changeSubject, content, changeContent, contacts } =
    useContext(ComposeContext);
  const { loading, error, send, state, restart } = useComposse();

  const disabled =
    loading ||
    (subject.trim() === "" && content.trim() === "") ||
    contacts.length === 0;

  const handleSubjectChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    changeSubject(event.target.value);
  };

  const handleContentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    changeContent(event.target.value);
  };

  const handleSubmit = (event: React.MouseEvent) => {
    event.preventDefault();
    send(subject, content, contacts);
  };

  const handleRestart = () => {
    restart();
    changeSubject("");
    changeContent("");
  };

  return (
    <div className="mail-composer">
      <input
        type="text"
        placeholder="Asunto..."
        value={subject}
        onChange={handleSubjectChange}
      />
      <textarea
        placeholder="Escribe tu correo electrónico aquí..."
        value={content}
        onChange={handleContentChange}
      />
      <div className="controls">
        <Button
          theme="primary"
          buttonType="button"
          type="submit"
          onClick={handleSubmit}
          disabled={disabled}
        >
          Enviar
        </Button>
        <Button theme="light" buttonType="link" to="/">
          Cancelar
        </Button>
      </div>

      <div className={`loading ${loading || state ? "visible" : ""}`}>
        {loading ? (
          <div className="loading-container">
            <div className="loading-spinner"></div>
            Enviando correo...
          </div>
        ) : state ? (
          <div className="success-message">
            <p>
              Correo enviado con éxito! El mensaje ha sido enviado a los
              contactos seleccionados.
            </p>
            <div className="control">
              <Button theme="primary" buttonType="link" to="/">
                Volver al inicio
              </Button>
              <Button theme="light" buttonType="button" onClick={handleRestart}>
                Crear nuevo mensaje
              </Button>
            </div>
          </div>
        ) : (
          error && (
            <div className="error-message">
              Error al enviar el correo: {error}
              <div className="control">
                <Button theme="primary" buttonType="link" to="/">
                  Volver al inicio
                </Button>
                <Button
                  theme="light"
                  buttonType="button"
                  onClick={handleSubmit}
                >
                  Reintentar
                </Button>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}
