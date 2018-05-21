export const randomIntegerInRange = (min, max) =>
  Math.floor(Math.random() * (max - min + 1)) + min

export const average = (...nums) => {
  console.log('average', nums)
  return [...nums].reduce((acc, val) => acc + val, 0) / nums.length
}

export const round = (n, decimals = 0) =>
  Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
