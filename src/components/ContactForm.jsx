import { useState } from 'react'
import { site } from '../data/site'

const empty = { name: '', email: '', message: '', 'bot-field': '' }

function encode(data) {
  return new URLSearchParams(data).toString()
}

export default function ContactForm() {
  const [fields, setFields] = useState(empty)
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  function update(event) {
    const { name, value } = event.target
    setFields((current) => ({ ...current, [name]: value }))
  }

  async function onSubmit(event) {
    event.preventDefault()
    if (!fields.name.trim() || !fields.email.trim() || !fields.message.trim()) {
      setError('Please complete all fields before sending.')
      setStatus('idle')
      return
    }

    setError('')
    setStatus('sending')

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode({
          'form-name': 'contact',
          name: fields.name.trim(),
          email: fields.email.trim(),
          message: fields.message.trim(),
          'bot-field': fields['bot-field'],
        }),
      })

      if (!response.ok) {
        throw new Error('Request failed')
      }

      setStatus('sent')
      setFields(empty)
    } catch {
      setStatus('idle')
      setError(
        'The message could not be sent from this session. Email me directly instead.',
      )
    }
  }

  if (status === 'sent') {
    return (
      <div className="card p-6 sm:p-7" role="status">
        <p className="display text-2xl text-ink">Message sent.</p>
        <p className="mt-3 text-muted">
          Thank you. I will get back to you by email.
        </p>
        <button
          type="button"
          className="btn btn-secondary mt-6"
          onClick={() => setStatus('idle')}
        >
          Send another
        </button>
      </div>
    )
  }

  return (
    <form
      className="card p-6 sm:p-7"
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={onSubmit}
      noValidate
    >
      <input type="hidden" name="form-name" value="contact" />
      <p className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          Do not fill this out
          <input
            name="bot-field"
            tabIndex={-1}
            autoComplete="off"
            value={fields['bot-field']}
            onChange={update}
          />
        </label>
      </p>
      <p className="text-sm text-muted">
        This sends a message through the site. You can also email me at{' '}
        <a className="text-ink underline-offset-2 hover:text-accent" href={`mailto:${site.email}`}>
          {site.email}
        </a>
        .
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
      <button
        type="submit"
        className="btn btn-primary mt-5 w-full sm:w-auto"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? 'Sending…' : 'Send message'}
      </button>
    </form>
  )
}
