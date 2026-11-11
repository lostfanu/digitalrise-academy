import { useMemo, useState } from 'react'
import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { COURSE, TOPICS, PHASES } from '../data/course.js'

export default function Curriculum() {
  const [query, setQuery] = useState('')
  const [phase, setPhase] = useState('all')

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return TOPICS.filter((topic) => {
      const matchesPhase = phase === 'all' || topic.phase === Number(phase)
      const matchesQuery =
        !q || topic.title.toLowerCase().includes(q) || topic.summary.toLowerCase().includes(q)
      return matchesPhase && matchesQuery
    })
  }, [query, phase])

  return (
    <>
      <PageHeader
        title="Curriculum"
        intro={`${COURSE.title} — ${COURSE.duration}, ${COURSE.schedule}, ${COURSE.hoursPerDay}, ${COURSE.approach}. Search the topics or filter by phase.`}
      />
      <section className="section">
        <div className="container">
          <p className="eyebrow">3-phase roadmap</p>
          <h2>Foundations → Specialist Skills → Client Ready</h2>
          <div className="roadmap">
            {PHASES.map((p, i) => (
              <div className="card roadmap-step" key={p.id}>
                <div className="step-no">{i + 1}</div>
                <h3>Phase {p.id}: {p.name}</h3>
                <p>{p.description}</p>
                <p>
                  <strong>{TOPICS.filter((t) => t.phase === p.id).length} topic(s):</strong>{' '}
                  {TOPICS.filter((t) => t.phase === p.id).map((t) => t.title).join(', ')}
                </p>
              </div>
            ))}
          </div>

          <div className="filters" role="search">
            <input
              type="search"
              placeholder="Search topics, e.g. Reddit, SEO, Fiverr…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              aria-label="Search curriculum topics"
            />
            <button type="button" className={`filter-btn${phase === 'all' ? ' active' : ''}`} onClick={() => setPhase('all')}>
              All phases
            </button>
            {PHASES.map((p) => (
              <button
                key={p.id}
                type="button"
                className={`filter-btn${phase === String(p.id) ? ' active' : ''}`}
                onClick={() => setPhase(String(p.id))}
              >
                Phase {p.id}: {p.name}
              </button>
            ))}
          </div>

          <p aria-live="polite">
            Showing {filtered.length} of {TOPICS.length} topics
            {query ? ` for “${query}”` : ''}
            {phase !== 'all' ? ` in Phase ${phase}` : ''}.
          </p>

          {filtered.length === 0 ? (
            <div className="card">
              <h3>No topics match</h3>
              <p>Try a different search term, or choose “All phases”.</p>
            </div>
          ) : (
            <ul className="topic-list">
              {filtered.map((topic) => (
                <li key={topic.id}>
                  <h3>{topic.title}</h3>
                  <p>{topic.summary}</p>
                  <div className="topic-meta">
                    <span className="pill phase-badge">Phase {topic.phase}</span>
                    <span className="pill">{PHASES.find((p) => p.id === topic.phase)?.name}</span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
      <PrevNext prev={{ to: '/courses', label: 'Courses' }} next={{ to: '/instructor', label: 'Instructor' }} />
    </>
  )
}
