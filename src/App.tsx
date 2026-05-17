import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import { Navbar } from "./components/ui/navbar";
import { LivrosPage } from "./components/livros/livrosPage";
import { UsuarioPage } from "./components/usuarios/usuarioPage";
import { AutoresPage } from "./components/autores/autoresPage";
import { EmprestimosPage } from "./components/emprestimos/emprestimosPage";

export default function App() {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />

      <Navbar />

      <Routes>
        <Route path="/livros" element={<LivrosPage />} />
        <Route path="/usuarios" element={<UsuarioPage />} />
        <Route path="/autores" element={<AutoresPage />} />
        <Route path="/emprestimos" element={<EmprestimosPage />} />
      </Routes>
    </BrowserRouter>
  );
}
