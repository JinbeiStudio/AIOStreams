import { settings, useSetting } from './settings';

/** Whether the pages take Apple TV's look, as chosen in the theme settings. */
export function useTvosStyle(): boolean {
  return useSetting(settings.theme.interfaceStyle)[0] === 'tvos';
}

/** Marks the document before anything draws, so screens outside the session (who's watching) take the look too. */
export function markTvosStyle(): void {
  // Windows draws the glass thinner than a Mac, so its styles are marked to thicken it.
  if (/Windows/.test(navigator.userAgent))
    document.documentElement.dataset.os = 'windows';
  if (settings.theme.interfaceStyle.read() === 'tvos')
    document.documentElement.dataset.tvosBuild = '';
  else delete document.documentElement.dataset.tvosBuild;
}

/** tvOS asks who's watching each time it opens, as the app does when its own setting asks it to. */
export function asksWho(): boolean {
  return (
    settings.account.askWho.read() ||
    settings.theme.interfaceStyle.read() === 'tvos'
  );
}
