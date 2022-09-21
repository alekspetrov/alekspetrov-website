// Converts Date to XX/XX/XX format
export function formatDate(date, options) {
  const d = date ? new Date(date) : Date.now()

  let defaultOptions = {
    year: 'numeric',
    ...options,
  }

  return new Intl.DateTimeFormat('en-En', defaultOptions).format(d)
}
