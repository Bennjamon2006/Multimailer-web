import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import Router from "./components/Router";
import "./assets/Collonse.ttf";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Router />
      </Layout>
    </BrowserRouter>
  );
}

export default App;
