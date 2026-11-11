import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { ACADEMY, COURSE } from '../data/course.js'

export default function About() {
  return (
    <>
      <PageHeader
        title={`About ${ACADEMY.name}`}
        intro={`${ACADEMY.tagline} — a digital skills training academy focused on practical freelancing and marketing skills.`}
      />
      <section className="section">
        <div className="container">
          <h2>What DigitalRise Academy is</h2>
          <p className="lead">
            {ACADEMY.name} is a digital skills training academy. Its main course is{' '}
            {COURSE.title}, running for {COURSE.duration} at {COURSE.fee} {COURSE.feeNote}.
          </p>
          <div className="grid cols-2" style={{ marginTop: 24 }}>
            <div className="card">
              <h3>Learning approach</h3>
              <p>
                {COURSE.schedule}, {COURSE.hoursPerDay}. The course is{' '}
                {COURSE.approach} — most of the time is spent doing practical work,
                not only listening to theory.
              </p>
            </div>
            <div className="card">
              <h3>Who it is for</h3>
              <p>
                People who want to start freelancing and learn the marketing skills
                that help them find and serve clients — including freelancing on
                Upwork and Fiverr, lead generation, Reddit marketing and AI tools.
              </p>
            </div>
          </div>
          <p style={{ marginTop: 24 }}>
            The course covers seven topics: Freelancing (Upwork &amp; Fiverr), Lead Generation,
            Reddit Marketing, B2B Lead Generation, AI Tools &amp; Automation, SEO &amp; Digital
            Marketing, and Client Hunting &amp; Communication.
          </p>
        </div>
      </section>
      <PrevNext prev={{ to: '/', label: 'Home' }} next={{ to: '/courses', label: 'Courses' }} />
    </>
  )
}
