export interface TranslatableText {
  zh: string;
  en: string;
}

export interface TranslatedName {
  name: string;
  defaultName: string;
}

export interface Translator {
  (text: TranslatableText): string;
}

export const getDefault = (text: TranslatableText): string => text.zh;
export const getZh = (text: TranslatableText): string => text.zh;
export const getEn = (text: TranslatableText): string =>
  text.en || getDefault(text);

export const TRANSLATORS: { [lang: string]: Translator | undefined } = {
  en: getEn,
  zh: getZh,
};

export const getTranslator = (lang?: string): Translator => {
  if (lang === undefined) return getDefault;
  const translator = TRANSLATORS[lang];
  if (translator === undefined) return getDefault;
  return translator;
};
