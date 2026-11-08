import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'bn';

/** A label with a required English text and an optional Bangla text (falls back to English). */
export interface Label {
  en: string;
  bn?: string;
}

interface I18nValue {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: (label: Label) => string;
}

const I18nContext = createContext<I18nValue | null>(null);
const STORAGE_KEY = 'sikkha-board:lang';

function readInitialLang(): Lang {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === 'en' || saved === 'bn') return saved;
  } catch {
    /* storage unavailable: fall through to default */
  }
  return 'en';
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* ignore */
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const value = useMemo<I18nValue>(
    () => ({ lang, setLang, t: (label) => (lang === 'bn' && label.bn ? label.bn : label.en) }),
    [lang, setLang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nValue {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used inside <I18nProvider>');
  return ctx;
}
