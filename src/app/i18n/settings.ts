export const defaultLocale = "en-US";
export const locales = [defaultLocale, "pt-BR"];
export const defaultNS = "common";

export function getOptions(lang = defaultLocale, ns = defaultNS) {
  return {
    supportedLngs: locales,
    fallbackLng: defaultLocale,
    lng: lang,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
