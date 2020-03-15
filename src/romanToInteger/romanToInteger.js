// copied from https://leetcode.com/problems/roman-to-integer/

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

const chunk = (arr) => {
  let result = [arr[0]]

  for (let i = 1; i < arr.length; i = i + 2) {
    result.push([arr[i], arr[i + 1]])
  }

  return result
}

const perform = (accumulator, currentValue, idx) => {
  return accumulator < currentValue
    ? currentValue - accumulator
    : currentValue + accumulator
}

const __romanToInt = (s) => {
  switch (s) {
    case 'I':
      return 1
    case 'V':
      return 5
    case 'X':
      return 10
    case 'L':
      return 50
    case 'C':
      return 100
    case 'D':
      return 500
    case 'M':
      return 1000
    default:
      if (s.length % 2 === 00) {
        if (Array.isArray(s)) s = s.join('')

        return s
          .split('')
          .map(romanToInt)
          .reduce(perform, 0)
      } else {
        const chunks = chunk(s.split(''))
        const result = chunks.map(romanToInt).reduce(perform, 0)

        return result
      }
  }
}

var romanToInt = function(s) {
  const romanValue = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  }

  let sum = 0
  let prev = 0
  Object.values(s).forEach((val) => {
    if (val < prev) {
      sum += romanValue[val]
    } else {
      sum -= romanValue[val]
    }
    prev = val
  })

  return sum
}

let ans = romanToInt('IV')
ans
