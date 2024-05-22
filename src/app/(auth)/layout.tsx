'use client'

import useDarkMode from '@/hooks/useDarkMode'

export default function AuthLayout({ children }: any) {
  const [isDark] = useDarkMode()
  return (
    <>
      <div className={`app-warp light`}>{children}</div>
    </>
  )
}
