/**
 * Takes a string, finds the first character with `String.charAt(0)`,
 * capitalizes the character with `String.toUpperCase`,
 * then returns the rest of the original string with `String.slice(1)`
 *
 * @param {string} s string - A normal string
 * @returns {string} The string but capitalized
 */
const capitalizeString = (s: string): string =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`

export default capitalizeString
