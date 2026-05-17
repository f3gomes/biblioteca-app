import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <header
      className="
        bg-white
        border-b
        border-slate-200
        shadow-sm
      "
    >
      <div
        className="
          mx-auto
          px-6
          h-16
          flex items-center justify-between
        "
      >
        <h1 className="font-bold text-xl text-black!">📚 Biblioteca</h1>

        <nav className="flex gap-6">
          <Link to="/livros">Livros</Link>
          <Link to="/usuarios">Usuários</Link>
          <Link to="/autores">Autores</Link>
          <Link to="/emprestimos">Empréstimos</Link>
        </nav>
      </div>
    </header>
  );
}
