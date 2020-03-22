const maxSubArray = require('./maxSubArray')

describe('maxSubArray()', () => {
  it('should return 6', () => {
    const result = maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
    expect(result).toBe(6)
  })
  it('should return 2', () => {
    const result = maxSubArray([1, 2])
    expect(result).toBe(3)
  })
  it('should return 2', () => {
    const result = maxSubArray([1, 2, -3])
    expect(result).toBe(3)
  })
  it('should return 2', () => {
    const result = maxSubArray([-3, 1, 2])
    expect(result).toBe(3)
  })
})
