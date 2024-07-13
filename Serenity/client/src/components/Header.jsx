import React from 'react'
import "/src/styles/Header.css"
import { Link } from "react-router-dom";



export default function Header() {
  return (
    <>
    <div className="headerBody">

      <h3>Serenity medi-clinic</h3>

        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
          <li><Link to="/About">About</Link></li>
          <li><Link to="/Prices">Prices</Link></li>
        </ul>
    </div>

    </>
  )
}
