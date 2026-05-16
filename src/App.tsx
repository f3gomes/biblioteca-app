import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/ui/navbar";
import { LivrosPage } from "./components/livros/livrosPage";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Navbar />

      <Routes>
        <Route path="/livros" element={<LivrosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
