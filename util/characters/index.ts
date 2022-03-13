/*
 * We are doing this because we want to ensure the characters
 * we want are displayed as they should.
 *
 * **_Stuff_** tends to escape things and you might use some library that also escapes strings
 * This is a security feature and a good one at that.
 * Let's work with it!
 *
 */

const lpar = String.fromCharCode(40)
const rpar = String.fromCharCode(41)

export { lpar, rpar }
