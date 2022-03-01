const typograph = (text) => {
  const arr = text.split(' ')
  const res = arr.reduce((acc, item, idx) => {
    const prevIdx = idx - 1

    if (item.length < 3) {
      acc[prevIdx] = acc[prevIdx]?.trim() + '\xa0'
    }

    acc.push(item + ' ')

    return acc
  }, [])

  return res.join('')
}

export { typograph }
