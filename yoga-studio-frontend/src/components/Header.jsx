import { Link } from 'react-router-dom'
import './Header.css'

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <h1>🧘 Serenity Yoga</h1>
        </div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/classes">Aulas</Link>
          <Link to="/schedule">Horários</Link>
          <Link to="/memberships">Planos</Link>
          <Link to="/instructors">Instrutores</Link>
        </nav>
        <div className="header-actions">
          <button className="btn-login">Login</button>
          <button className="btn-signup">Cadastro</button>
        </div>
      </div>
    </header>
  )
}
