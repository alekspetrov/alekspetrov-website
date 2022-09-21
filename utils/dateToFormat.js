// Converts Date to XX/XX/XX format
export function formatDate(date, hasYear = true) {
  const d = date ? new Date(date) : Date.now()

  let options = {
    // month: 'short',
    // day: 'numeric',
  }

  if (hasYear) options = { ...options, year: 'numeric' }

  return new Intl.DateTimeFormat('en-En', options).format(d)
}
