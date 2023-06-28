"use client"
import { Locale } from "@/graphql/generated";
import { PropsWithChildren, createContext, useEffect, useState } from "react";

type LanguageContextProps = {
  lang: string;
  locale: Locale;
};

interface LanguageContextProviderProps extends PropsWithChildren {
  lang: string;
}

export const LanguageContext = createContext<LanguageContextProps>(
  {} as LanguageContextProps
);

export const LanguageContextProvider = ({
  lang: initialLang,
  children,
}: LanguageContextProviderProps) => {
  const [lang, setLang] = useState(initialLang);
  const [locale, setLocale] = useState<Locale>(Locale.En);

  useEffect(() => {
    setLocale(lang.split("-")[0] as Locale);
  }, [lang]);

  return (
    <LanguageContext.Provider
      value={{
        lang,
        locale,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};
