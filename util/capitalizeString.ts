/** @format */

/**
 * Takes a string, finds the first character with `String.charAt(0)`,
 * capitalizes the character with `String.toUpperCase`,
 * then returns the rest of the original string with `String.slice(1)`
 * @param s string - A normal string
 */
const capitalizeString = (s: string) =>
  `${s.charAt(0).toUpperCase()}${s.slice(1)}`

export default capitalizeString
