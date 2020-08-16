/** @format */

/**
 * Takes a string and reassigns the value depending on the content
 * @param pathname - The pathname
 */
function ifPathnameIsIndex(pathname: string | null | undefined): string {
  if (pathname !== '/') {
    // eslint-disable-next-line no-param-reassign
    pathname = `/${pathname || ''}`
  }

  return pathname
}

export default ifPathnameIsIndex
