import Layout from "./layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./global/main.css";
import Home from "./pages/Home";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

export default App;
