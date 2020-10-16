/**
 * Scroll window to top if `window !== 'undefined'`
 */
export default function handleExitComplete(): void {
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
