import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { Language, getTranslation, formatMessage } from '@/lib/i18n'
import { useKV } from '@github/spark/hooks'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string, params?: Record<string, any>) => any
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useKV<Language>('user-language', 'en')
  
  const t = (key: string, params?: Record<string, any>) => {
    const translation = getTranslation(language || 'en', key)
    
    if (params && typeof translation === 'string') {
      return formatMessage(translation, params)
    }
    
    return translation
  }

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
  }

  return (
    <LanguageContext.Provider value={{ language: language || 'en', setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
