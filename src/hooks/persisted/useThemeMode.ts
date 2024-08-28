import React from 'react'
import {create} from 'zustand'
import {useMediaQuery} from '@mui/material'
import {persist, createJSONStorage} from 'zustand/middleware'

type ThemeState = {
  modePrivate: 'light' | 'dark' | 'system'
  setThemeMode: (mode: 'light' | 'dark' | 'system') => void
}

const useStorageStateHook = create<ThemeState>()(
  persist(
    set => ({
      modePrivate: 'light',
      setThemeMode: mode => set(() => ({modePrivate: mode})),
    }),
    {
      name: 'nms-theme',
      storage: createJSONStorage(() => window.localStorage),
    },
  ),
)

const availableModes = ['system', 'dark', 'light']

const useThemeMode = () => {
  const {modePrivate, setThemeMode} = useStorageStateHook()
  const prefersLightMode = useMediaQuery('(prefers-color-scheme: light)')

  // Theme mode can be one of available modes
  const themeMode = React.useMemo(
    () => (modePrivate === null || !availableModes.includes(modePrivate) ? 'system' : modePrivate),
    [modePrivate],
  )

  // palette type is either 'light' or 'dark'
  const paletteType = React.useMemo(() => {
    if (themeMode === 'system') {
      return prefersLightMode ? 'light' : 'dark'
    }
    return themeMode
  }, [prefersLightMode, themeMode])

  // toggle between light and dark
  const toggleMode = React.useCallback(() => {
    if (themeMode === 'light') setThemeMode('dark')
    else setThemeMode('light')
  }, [setThemeMode, themeMode])

  return {
    paletteType,
    themeMode,
    setThemeMode,
    toggleMode,
    availableModes,
  }
}

export default useThemeMode
