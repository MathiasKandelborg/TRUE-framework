import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * Uses Next.js useRouter to 'push' to a new route
 *
 * @param {string} to Route to redirect to
 * @returns {void} Void
 */
export default function Redirect(to: string): void {
  const router = useRouter()

  useEffect(() => {
    router.push(to).catch((e) => console.error(e))
  })
}
