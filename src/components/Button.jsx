export default function Button({
  href,
  children,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `btn ${variant === 'secondary' ? 'btn-secondary' : 'btn-primary'} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
