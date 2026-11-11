import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ACADEMY } from '../data/course.js'

const LINKS = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/courses', label: 'Courses' },
  { to: '/curriculum', label: 'Curriculum' },
  { to: '/instructor', label: 'Instructor' },
  { to: '/pricing', label: 'Fee & Admissions' },
  { to: '/faq', label: 'FAQ' },
  { to: '/contact', label: 'Contact / Enrol' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link className="brand" to="/" onClick={() => setOpen(false)}>
          {ACADEMY.name}
          <span>{ACADEMY.tagline}</span>
        </Link>
        <button
          className="menu-btn"
          type="button"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕ Menu' : '☰ Menu'}
        </button>
        <nav aria-label="Main navigation">
          <ul className={`nav-links${open ? ' open' : ''}`}>
            {LINKS.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'active' : undefined)}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
