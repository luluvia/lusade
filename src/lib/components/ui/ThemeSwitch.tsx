'use client'

import { faMoon, faSun } from '@awesome.me/kit-92eb028db2/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Switch from '@radix-ui/react-switch'
import React, { useState, useEffect } from 'react'

const ThemeSwitch = () => {
  const [isDark, setIsDark] = useState(false)

  useEffect(() => {
    // Check initial theme preference
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const savedTheme = localStorage.getItem('theme')

    if (savedTheme === 'dark' || (!savedTheme && darkModeMediaQuery.matches)) {
      setIsDark(true)
      document.documentElement.classList.add('dark')
    } else {
      setIsDark(false)
      document.documentElement.classList.remove('dark')
    }

    // Listen for system theme changes
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setIsDark(e.matches)
        document.documentElement.classList.toggle('dark', e.matches)
      }
    }

    darkModeMediaQuery.addEventListener('change', handleChange)
    return () => darkModeMediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = (checked: boolean) => {
    setIsDark(checked)
    document.documentElement.classList.toggle('dark', checked)
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  return (
    <Switch.Root
      checked={isDark}
      onCheckedChange={toggleTheme}
      className="w-16 h-8 bg-gray-300 dark:bg-gray-700 rounded-full relative"
    >
      <Switch.Thumb className="block w-7 h-7 rounded-full bg-white transition-transform duration-200 translate-x-0.5 data-[state=checked]:translate-x-[32px]">
        {isDark ? (
          <FontAwesomeIcon icon={faMoon} className="h-5 w-5 text-gray-900 relative top-1" />
        ) : (
          <FontAwesomeIcon icon={faSun} className="h-5 w-5 text-gray-900 relative top-1" />
        )}
      </Switch.Thumb>
    </Switch.Root>
  )
}

export default ThemeSwitch
