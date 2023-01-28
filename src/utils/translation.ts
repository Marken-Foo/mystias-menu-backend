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
