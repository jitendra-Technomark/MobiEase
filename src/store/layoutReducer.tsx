import { createSlice } from '@reduxjs/toolkit'

// theme config import
import themeConfig from '@/configs/themeConfig'

const initialState = {
  darkMode: themeConfig.layout.darkMode,
  isRTL: themeConfig.layout.isRTL,
}

export const layoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    // handle dark mode
    handleDarkMode: (state, action) => {
      state.darkMode = action.payload
      if (typeof window !== 'undefined') {
        window?.localStorage.setItem('darkMode', action.payload)
      }
    },
    // handle rtl
    handleRtl: (state, action) => {
      state.isRTL = action.payload
      if (typeof window !== 'undefined') {
        window?.localStorage.setItem('direction', JSON.stringify(action.payload))
      }
    },
  },
})

export const { handleDarkMode } = layoutSlice.actions

export default layoutSlice.reducer
