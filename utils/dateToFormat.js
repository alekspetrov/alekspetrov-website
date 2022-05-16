export function foramatDate(dateString, hasYear = false, fullName = false) {
  const monthNames = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  const date = new Date(dateString)
  const day = date.getDate()
  const year = date.getFullYear()
  const monthIndex = date.getMonth()
  const monthName = monthNames[monthIndex]

  return hasYear
    ? `${fullName ? monthName : monthName.substr(0, 3)} ${day}, ${year}`
    : `${monthName} ${day}`
}
