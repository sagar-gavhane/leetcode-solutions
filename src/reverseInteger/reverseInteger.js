const reverseIntegerOne = (x) => {
  console.countReset('loop')
  let numberInString = x ? '' + x : ''
  let i = 0
  let j = numberInString.length - 1
  let store = []

  while (i <= j) {
    console.count('loop')
    store[i] = numberInString[j]
    store[j] = numberInString[i]
    i++
    j--
  }

  return store.join('')
}

const reverseIntegerTwo = (x) => {
  return x
    .split('')
    .reverse()
    .join('')
}

console.time('reverseIntegerOne')
reverseIntegerOne('abc')
console.timeEnd('reverseIntegerOne')

console.time('reverseIntegerOne')
reverseIntegerTwo('abc')
console.timeEnd('reverseIntegerOne')

// 123
// i j
// j21

// 1234
// 4  1
// 4321
