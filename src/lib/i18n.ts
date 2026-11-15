import { copy } from '../data/copy';
import { cleanPath, pathFor, resolvePath, site, type Lang, type PageKey } from '../data/site';

export const langs = site.languages;

/** Locale prefix used in URLs (Norwegian sits at the root). */
export const langPrefix: Record<Lang, string> = { nb: '', en: '/en', el: '/el' };

export function langOf(pathname: string): Lang {
  return resolvePath(cleanPath(pathname)).lang;
}

export function pageOf(pathname: string): PageKey {
  return resolvePath(cleanPath(pathname)).key;
}

/** The same page in every language — used by hreflang and the switchers. */
export function alternates(pathname: string): Record<Lang, string> {
  const { key } = resolvePath(cleanPath(pathname));
  return {
    nb: pathFor('nb', key),
    en: pathFor('en', key),
    el: pathFor('el', key),
  };
}

export function href(lang: Lang, key: PageKey): string {
  return pathFor(lang, key);
}

export function t(lang: Lang) {
  return copy[lang];
}

export function isActive(pathname: string, target: string): boolean {
  const current = cleanPath(pathname);
  if (target === '/' || target === '/en' || target === '/el') return current === target;
  return current === target || current.startsWith(`${target}/`);
}
