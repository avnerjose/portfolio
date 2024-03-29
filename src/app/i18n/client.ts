import i18next from "i18next";
import resourcesToBackend from "i18next-resources-to-backend";
import {
  initReactI18next,
  useTranslation as useTranslationOrg,
} from "react-i18next";
import { getOptions } from "./settings";

i18next
  .use(initReactI18next)
  .use(
    resourcesToBackend(
      (language: string, namespace: string) =>
        import(`./locales/${language}/${namespace}.json`)
    )
  )
  .init(getOptions());

export function useTranslation(lang: string, ns?: string, options?: any) {
  if (i18next.resolvedLanguage !== lang) i18next.changeLanguage(lang);
  return useTranslationOrg(ns, options);
}
