/**
 * Takes a string and reassigns the value depending on the content
 *
 * @param {string} pathname - The pathname
 * @returns {string} The pathname with '/' prepended or just /
 */
function ifPathnameIsIndex(pathname: string | null | undefined): string {
  if (pathname !== '/') {
    // eslint-disable-next-line no-param-reassign
    pathname = `/${pathname || ''}`
  }

  return pathname
}

export default ifPathnameIsIndex
