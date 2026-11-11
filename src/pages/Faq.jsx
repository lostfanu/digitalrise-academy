import { useState } from 'react'
import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { FAQS } from '../data/course.js'

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0)
  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        intro="Answers about the course, fee, schedule and enrolment — based only on the academy's confirmed details."
      />
      <section className="section">
        <div className="container">
          {FAQS.map((faq, i) => {
            const open = openIndex === i
            return (
              <div className="faq-item" key={faq.q}>
                <button
                  type="button"
                  aria-expanded={open}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <span aria-hidden="true">{open ? '−' : '+'}</span>
                </button>
                {open ? <p className="answer">{faq.a}</p> : null}
              </div>
            )
          })}
        </div>
      </section>
      <PrevNext prev={{ to: '/pricing', label: 'Fee & Admissions' }} next={{ to: '/contact', label: 'Contact / Enrol' }} />
    </>
  )
}
