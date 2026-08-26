export type ShortLang = "ru" | "en";

// i18next may report a full locale tag (e.g. "en-US") before the user
// picks a language explicitly, so normalize it for use in asset paths.
export function getShortLang(language: string): ShortLang {
  return language.toLowerCase().startsWith("ru") ? "ru" : "en";
}
