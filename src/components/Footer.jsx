import { Link } from 'react-router-dom'
import { ACADEMY, COURSE } from '../data/course.js'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{ACADEMY.name}</h3>
            <p>{ACADEMY.tagline}</p>
            <p>
              Main course: {COURSE.title} — {COURSE.duration}, {COURSE.fee} {COURSE.feeNote}.
            </p>
          </div>
          <div>
            <h4>Pages</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/courses">Courses</Link></li>
              <li><Link to="/curriculum">Curriculum</Link></li>
              <li><Link to="/instructor">Instructor</Link></li>
            </ul>
          </div>
          <div>
            <h4>Admissions</h4>
            <ul>
              <li><Link to="/pricing">Fee &amp; Admissions</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
              <li><Link to="/contact">Contact / Enrol</Link></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          © {new Date().getFullYear()} {ACADEMY.name}. {ACADEMY.tagline}
        </div>
      </div>
    </footer>
  )
}
