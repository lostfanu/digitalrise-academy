import { Link } from 'react-router-dom'

export default function PageHeader({ title, intro, current }) {
  return (
    <div className="page-header">
      <div className="container">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <Link to="/">Home</Link> &nbsp;/&nbsp; <span>{current || title}</span>
        </nav>
        <h1>{title}</h1>
        {intro ? <p>{intro}</p> : null}
      </div>
    </div>
  )
}

export function PrevNext({ prev, next }) {
  return (
    <div className="container page-nav">
      {prev ? <Link to={prev.to}>← {prev.label}</Link> : <span />}
      {next ? <Link className="next" to={next.to}>{next.label} →</Link> : null}
    </div>
  )
}
