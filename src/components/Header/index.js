import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import './style.css'

const Header = () => {
  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo do projeto" />
      </Link>

      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>3 reservas</span>
        </div>
      </Link>
    </header>
  )
}

export default Header