const isPalindrome = (x) => {
  let i = 0
  let j = x.length - 1
  let copy = ('' + x).split('')

  while (i <= j) {
    const temp = copy[i]
    copy[i] = copy[j]
    copy[j] = temp
    i++
    j--
  }

  return copy.join('') === x
}

console.log(isPalindrome('121'))
