const lengthOfLongestSubstring = (s) => {
  let aPointer = 0
  let bPointer = 0
  let max = 0
  let hash = {}
  let hashLength = 0
  let length = s.length

  while (bPointer < length) {
    const current = s[bPointer]
    if (!hash[current]) {
      hash[s[bPointer]] = true
      hashLength++
      max = Math.max(hashLength, max)
      bPointer++
    } else {
      delete hash[s[aPointer]]
      hashLength--
      aPointer++
    }
  }
  console.log(hashLength)
  return max
}

console.log(lengthOfLongestSubstring('abcd'))
