// src/context/LangContext.jsx
import { createContext, useContext, useState, useEffect } from 'react'

const LangContext = createContext()

export function LangProvider({ children }) {
  // ✅ غيرنا من 'en' إلى 'ar'
  const [lang, setLang] = useState('ar')  // العربية هي الافتراضية
  const isAr = lang === 'ar'

  function toggle() {
    setLang(l => l === 'en' ? 'ar' : 'en')
  }

  // تغيير اتجاه الصفحة (RTL/LTR) بناءً على اللغة
  useEffect(() => {
    document.documentElement.dir = isAr ? 'rtl' : 'ltr'
    document.documentElement.lang = lang
  }, [lang, isAr])

  return (
    <LangContext.Provider value={{ lang, isAr, toggle }}>
      {children}
    </LangContext.Provider>
  )
}

export const useLang = () => useContext(LangContext)