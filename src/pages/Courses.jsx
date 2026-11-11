import { Link } from 'react-router-dom'
import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { COURSE, TOPICS } from '../data/course.js'

export default function Courses() {
  return (
    <>
      <PageHeader
        title="Courses"
        intro="One main course, taught practically over 3 months."
      />
      <section className="section">
        <div className="container">
          <div className="card">
            <p className="eyebrow">Main course</p>
            <h2 style={{ marginTop: 6 }}>{COURSE.title}</h2>
            <p className="lead">
              Duration: {COURSE.duration} · Fee: {COURSE.fee} {COURSE.feeNote} ·{' '}
              {COURSE.schedule}, {COURSE.hoursPerDay} · {COURSE.approach}
            </p>
            <div className="grid cols-2" style={{ marginTop: 20 }}>
              {TOPICS.map((topic) => (
                <div key={topic.id}>
                  <strong>{topic.title}</strong>
                  <p style={{ margin: '4px 0 0', color: '#5b6b82' }}>{topic.summary}</p>
                </div>
              ))}
            </div>
            <div className="hero-actions" style={{ marginTop: 26 }}>
              <Link className="btn" to="/curriculum">Full Curriculum</Link>
              <Link className="btn ghost" to="/pricing">Fee &amp; Admissions</Link>
              <Link className="btn ghost" to="/contact">Enrol Now</Link>
            </div>
          </div>
        </div>
      </section>
      <PrevNext prev={{ to: '/about', label: 'About' }} next={{ to: '/curriculum', label: 'Curriculum' }} />
    </>
  )
}
