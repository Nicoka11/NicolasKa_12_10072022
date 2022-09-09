import Layout from "@src/layout/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@src/pages/Home";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <BrowserRouter>
          <Routes>
            <Route path="/:id" element={<Home />} />
          </Routes>
        </BrowserRouter>
      </Layout>
    </QueryClientProvider>
  );
}

export default App;
