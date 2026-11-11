import { Link } from 'react-router-dom'
import { ACADEMY, COURSE, TOPICS, PHASES, INSTRUCTOR } from '../data/course.js'

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="tagline">{ACADEMY.tagline}</p>
          <h1>
            Build Your Digital Skills. <span>Start Your Freelancing Journey.</span>
          </h1>
          <p>
            {ACADEMY.name} offers {COURSE.title} — {COURSE.duration}, {COURSE.fee} {COURSE.feeNote}.
            Learn freelancing, marketing and AI tools with a practical, hands-on approach.
          </p>
          <div className="hero-actions">
            <Link className="btn" to="/courses">View the Course</Link>
            <Link className="btn secondary" to="/contact">Enrol Now</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">At a glance</p>
          <h2>{COURSE.title}</h2>
          <p className="lead">
            {COURSE.schedule} · {COURSE.hoursPerDay} · {COURSE.approach}
          </p>
          <div className="grid cols-3" style={{ marginTop: 24 }}>
            <div className="card"><div className="stat">{COURSE.duration}</div><div className="stat-label">Course duration</div></div>
            <div className="card"><div className="stat">{COURSE.fee}</div><div className="stat-label">Fee {COURSE.feeNote}</div></div>
            <div className="card"><div className="stat">{TOPICS.length} topics</div><div className="stat-label">Across 3 phases</div></div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">What you will learn</p>
          <h2>Seven topics, one practical course</h2>
          <div className="grid cols-3">
            {TOPICS.map((topic) => (
              <div className="card" key={topic.id}>
                <span className="pill">Phase {topic.phase}</span>
                <h3 style={{ marginTop: 10 }}>{topic.title}</h3>
                <p>{topic.summary}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link to="/curriculum">See the full curriculum →</Link>
          </p>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <p className="eyebrow">Learning roadmap</p>
          <h2>Foundations → Specialist Skills → Client Ready</h2>
          <div className="roadmap">
            {PHASES.map((phase, i) => (
              <div className="card roadmap-step" key={phase.id}>
                <div className="step-no">{i + 1}</div>
                <h3>Phase {phase.id}: {phase.name}</h3>
                <p>{phase.description}</p>
                <p>
                  {TOPICS.filter((t) => t.phase === phase.id).map((t) => t.title).join(' · ')}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="card instructor-wrap">
            <img className="instructor-photo" src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} />
            <div>
              <p className="eyebrow">Your instructor</p>
              <h2 style={{ marginTop: 6 }}>{INSTRUCTOR.name}</h2>
              <p className="lead">{INSTRUCTOR.bio}</p>
              <p><Link to="/instructor">Meet the instructor →</Link></p>
            </div>
          </div>
          <div style={{ marginTop: 24 }}>
            <Link className="btn" to="/pricing">Fee &amp; Admissions</Link>
            {' '}
            <Link className="btn ghost" to="/faq">Read the FAQ</Link>
          </div>
        </div>
      </section>
    </>
  )
}
