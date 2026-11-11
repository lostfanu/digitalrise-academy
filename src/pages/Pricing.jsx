import { Link } from 'react-router-dom'
import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { COURSE, TOPICS } from '../data/course.js'

export default function Pricing() {
  return (
    <>
      <PageHeader
        title="Fee & Admissions"
        intro="One course, one clear fee. No other fees are listed here."
      />
      <section className="section">
        <div className="container">
          <div className="grid cols-2">
            <div className="card">
              <p className="eyebrow">Main course</p>
              <h2 style={{ marginTop: 6 }}>{COURSE.title}</h2>
              <div className="stat">{COURSE.fee}</div>
              <div className="stat-label">{COURSE.feeNote}</div>
              <p style={{ marginTop: 16 }}>
                <strong>Duration:</strong> {COURSE.duration}<br />
                <strong>Schedule:</strong> {COURSE.schedule}, {COURSE.hoursPerDay}<br />
                <strong>Approach:</strong> {COURSE.approach}
              </p>
              <div className="hero-actions">
                <Link className="btn" to="/contact">Enrol Now</Link>
                <Link className="btn ghost" to="/faq">Read the FAQ</Link>
              </div>
            </div>
            <div className="card">
              <h3>What is included in the course</h3>
              <p>The course covers these {TOPICS.length} topics:</p>
              <ul>
                {TOPICS.map((topic) => (
                  <li key={topic.id}>{topic.title}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="card" style={{ marginTop: 18 }}>
            <h3>How to enrol</h3>
            <p>
              1. Read the <Link to="/curriculum">curriculum</Link> and the{' '}
              <Link to="/faq">FAQ</Link>. 2. Go to the{' '}
              <Link to="/contact">Contact / Enrol page</Link> and send an enquiry.
              3. The academy will reply with the next steps.
            </p>
          </div>
        </div>
      </section>
      <PrevNext prev={{ to: '/instructor', label: 'Instructor' }} next={{ to: '/faq', label: 'FAQ' }} />
    </>
  )
}
