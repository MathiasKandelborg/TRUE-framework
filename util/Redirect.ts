import { useRouter } from 'next/router'
import { useEffect } from 'react'

/**
 * @param root0
 * @param root0.to
 */
export default function Redirect({ to }: { to: string }) {
  const router = useRouter()
  useEffect(() => {
    router.push(to).catch((e) => console.log(e))
  })

  return null
}
