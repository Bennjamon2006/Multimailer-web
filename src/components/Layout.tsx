import { Link } from "react-router-dom";
import "../styles/Layout.css";

export default function Layout({ children }: { children: React.ReactElement }) {
  return (
    <div className="layout">
      <header>
        <div className="title">
          <Link to="/">Multimailer</Link>
        </div>

        <nav>
          <ul>
            <li>
              <Link to="/about">Sobre nosotros</Link>
            </li>
            <li>
              <Link to="/contact">Contacto</Link>
            </li>
            <li>
              <Link to="/join">Únete</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>&copy; 2024 Multimailer. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
