import { useMemo, useState } from 'react'
import PageHeader, { PrevNext } from '../components/PageHeader.jsx'
import { ACADEMY, COURSE, CONTACT } from '../data/course.js'

export default function Contact() {
  const [name, setName] = useState('')
  const [interest, setInterest] = useState(COURSE.title)
  const [message, setMessage] = useState('')
  const [copied, setCopied] = useState(false)

  const enquiryText = useMemo(() => {
    const lines = [
      `Hello ${ACADEMY.name},`,
      `I would like to enquire about: ${interest}`,
      `Course: ${COURSE.title} — ${COURSE.duration}, ${COURSE.fee} ${COURSE.feeNote}`,
      `Name: ${name || '[Your name]'}`,
      message ? `Message: ${message}` : 'Message: [Your message]',
    ]
    return lines.join('\n')
  }, [name, interest, message])

  const whatsappUrl = CONTACT.whatsappNumber
    ? `https://wa.me/${CONTACT.whatsappNumber}?text=${encodeURIComponent(enquiryText)}`
    : ''
  const mailtoUrl = CONTACT.email
    ? `mailto:${CONTACT.email}?subject=${encodeURIComponent(`Enquiry: ${COURSE.title}`)}&body=${encodeURIComponent(enquiryText)}`
    : ''

  const copyText = async () => {
    try {
      await navigator.clipboard.writeText(enquiryText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      // Clipboard may be unavailable — the text is shown below to copy manually.
      setCopied(false)
    }
  }

  return (
    <>
      <PageHeader
        title="Contact / Enrol"
        intro={`Enquire about ${COURSE.title} (${COURSE.duration}, ${COURSE.fee} ${COURSE.feeNote}). Fill in the form, then send it via WhatsApp or email — or copy the text and send it yourself.`}
      />
      <section className="section">
        <div className="container">
          {!CONTACT.whatsappNumber && !CONTACT.email ? (
            <div className="notice">
              <strong>Contact details not added yet.</strong> The WhatsApp and email
              buttons below are disabled until a number / email is added in{' '}
              <code>src/data/course.js</code> — see the <code>CONTACT</code> section
              marked <code>TODO: add your WhatsApp number</code>. You can still fill
              in the form and copy the enquiry text.
            </div>
          ) : null}

          <form
            className="form"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="name">Your name</label>
            <input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Muhammad Irfan"
              autoComplete="name"
            />

            <label htmlFor="interest">I am interested in</label>
            <select id="interest" value={interest} onChange={(e) => setInterest(e.target.value)}>
              <option value={COURSE.title}>{COURSE.title}</option>
              <option value="General enquiry">General enquiry</option>
            </select>

            <label htmlFor="message">Your message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="e.g. When does the next batch start?"
            />

            <div className="form-actions">
              {whatsappUrl ? (
                <a className="btn" href={whatsappUrl} target="_blank" rel="noreferrer">
                  Send via WhatsApp
                </a>
              ) : (
                <button className="btn" type="button" disabled title="Add your WhatsApp number in src/data/course.js first">
                  Send via WhatsApp
                </button>
              )}
              {mailtoUrl ? (
                <a className="btn ghost" href={mailtoUrl}>
                  Send via Email
                </a>
              ) : (
                <button className="btn ghost" type="button" disabled title="Add your email in src/data/course.js first">
                  Send via Email
                </button>
              )}
              <button className="btn ghost" type="button" onClick={copyText}>
                {copied ? 'Copied ✓' : 'Copy enquiry text'}
              </button>
            </div>

            <div className="result-box" aria-live="polite">
              <strong>Your enquiry text:</strong>
              <pre style={{ whiteSpace: 'pre-wrap', margin: '8px 0 0', fontFamily: 'inherit' }}>
                {enquiryText}
              </pre>
              {whatsappUrl ? (
                <p style={{ marginBottom: 0 }}>
                  WhatsApp link: <a href={whatsappUrl} target="_blank" rel="noreferrer">{whatsappUrl}</a>
                </p>
              ) : null}
              {mailtoUrl ? (
                <p style={{ marginBottom: 0 }}>
                  Email link: <a href={mailtoUrl}>{mailtoUrl}</a>
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </section>
      <PrevNext prev={{ to: '/faq', label: 'FAQ' }} />
    </>
  )
}
