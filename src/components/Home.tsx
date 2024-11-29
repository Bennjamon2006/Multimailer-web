import { Link } from "react-router-dom";
import useIsLogged from "../hooks/useIsLogged";
import "../styles/Home.css";
import Button from "./Button";
import { API_URL } from "../constants";

export default function Home() {
  const { isLogged, isLoading, error } = useIsLogged();

  return (
    <div className="home">
      <div className="home-title">
        <h1>Bienvenido a Multimailer</h1>
      </div>
      <p className="description">
        Escribe, filtra y envía tus correos electrónicos a tus clientes con unos
        pocos clicks. Fácil, seguro y confiable.{" "}
        <Link to="/about">Saber más</Link>
      </p>

      <div className="info">
        {isLoading ? (
          "Verificando sesión"
        ) : error ? (
          "Hubo un error al verificar la sesión."
        ) : isLogged ? (
          <Button buttonType="link" theme="primary" to="/compose">
            Crear mensaje
          </Button>
        ) : (
          <Button buttonType="link" to={`${API_URL}/login`} theme="light">
            Inicia sesión
          </Button>
        )}
      </div>
    </div>
  );
}
