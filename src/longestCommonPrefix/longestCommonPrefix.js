const longestCommonPrefix = (strs) => {
  if (strs.length === 0) return ''

  let prefix = strs[0]
  let i = 1

  while (i < strs.length) {
    while (strs[i].indexOf(prefix) != 0) {
      console.log(strs[i].indexOf(prefix))
      prefix = prefix.slice(0, prefix.length - 1)
    }
    i++
  }

  return prefix
}

const result = longestCommonPrefix(['flower', 'flow', 'flight'])
console.log('result:', result)

// flower
// flow
// flight
