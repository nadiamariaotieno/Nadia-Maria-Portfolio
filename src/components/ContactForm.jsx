import { useState } from 'react'
import { site } from '../data/site'

const empty = { name: '', email: '', message: '' }

export default function ContactForm() {
  const [fields, setFields] = useState(empty)
  const [error, setError] = useState('')

  function update(event) {
    setFields((current) => ({ ...current, [event.target.name]: event.target.value }))
  }

  function onSubmit(event) {
    event.preventDefault()
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError('Please complete all fields before opening your email client.')
      return
    }
    setError('')
    const subject = encodeURIComponent(`Portfolio inquiry from ${fields.name.trim()}`)
    const body = encodeURIComponent(
      `${fields.message.trim()}\n\nFrom: ${fields.name.trim()} <${fields.email.trim()}>`,
    )
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
  }

  return (
    <form className="card p-6 sm:p-7" onSubmit={onSubmit} noValidate>
      <p className="text-sm text-muted">
        This form does not send messages from the website. It opens your email
        client with the details filled in.
      </p>
      <div className="mt-5 grid gap-4">
        <label className="grid gap-1.5 text-sm font-medium">
          Name
          <input
            className="min-h-11 rounded-xl border border-line bg-bg px-3 text-base text-ink"
            name="name"
            autoComplete="name"
            value={fields.name}
            onChange={update}
            required
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Email
          <input
            className="min-h-11 rounded-xl border border-line bg-bg px-3 text-base text-ink"
            type="email"
            name="email"
            autoComplete="email"
            value={fields.email}
            onChange={update}
            required
          />
        </label>
        <label className="grid gap-1.5 text-sm font-medium">
          Message
          <textarea
            className="min-h-32 rounded-xl border border-line bg-bg px-3 py-3 text-base text-ink"
            name="message"
            value={fields.message}
            onChange={update}
            required
          />
        </label>
      </div>
      {error ? (
        <p className="mt-3 text-sm text-danger" role="alert">
          {error}
        </p>
      ) : null}
      <button type="submit" className="btn btn-primary mt-5 w-full sm:w-auto">
        Open email draft
      </button>
    </form>
  )
}
