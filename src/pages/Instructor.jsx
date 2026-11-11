import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { INSTRUCTOR, COURSE } from '../data/course.js'

export default function Instructor() {
  return (
    <>
      <PageHeader
        title="Instructor"
        intro="Meet the instructor behind the course."
      />
      <section className="section">
        <div className="container">
          <div className="card instructor-wrap">
            <img className="instructor-photo" src={INSTRUCTOR.photo} alt={INSTRUCTOR.name} />
            <div>
              <h2 style={{ marginTop: 0 }}>{INSTRUCTOR.name}</h2>
              <p><span className="pill">{INSTRUCTOR.role}</span></p>
              <p className="lead">{INSTRUCTOR.bio}</p>
              <p>
                He teaches {COURSE.title} ({COURSE.duration}), covering freelancing,
                lead generation, Reddit marketing, B2B lead generation, AI tools and
                automation, SEO and digital marketing, and client hunting and communication.
              </p>
            </div>
          </div>
        </div>
      </section>
      <PrevNext prev={{ to: '/curriculum', label: 'Curriculum' }} next={{ to: '/pricing', label: 'Fee & Admissions' }} />
    </>
  )
}
