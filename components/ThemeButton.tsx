'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import { FiMoon } from 'react-icons/fi'
import { BsSun } from 'react-icons/bs'

export default function ThemeButton() {
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  return (
    <button
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
      {resolvedTheme === 'dark' ? <BsSun size={30} /> : <FiMoon size={30} />}
    </button>
  )
}
