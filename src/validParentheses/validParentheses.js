const validParentheses = (expression) => {
  if (!expression) return true
  if (expression.length % 2 !== 0) return false

  let rightExp = [')', '}', ']']

  if (rightExp.includes(expression[0])) return false

  let stack = []
  let leftExp = ['(', '{', '[']

  for (let i = 0; i < expression.length; i++) {
    if (leftExp.includes(expression[i])) {
      stack.push(expression[i])
      continue
    }

    if (rightExp.includes(expression[i])) {
      if (stack.length === 0) return false

      const lastItem = stack[stack.length - 1]

      if (leftExp.indexOf(lastItem) === rightExp.indexOf(expression[i])) {
        stack.pop()
      } else {
        stack.push(expression[i])
      }
    }
  }

  return !stack.length
}

export default validParentheses
