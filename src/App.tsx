import Layout from "@src/layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@src/pages/Home";

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
