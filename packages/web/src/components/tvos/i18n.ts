/* eslint-disable lingui/no-unlocalized-strings -- the tvOS style's words go through tr() (./i18n), which this rule doesn't know */
import { i18n } from '@lingui/core';

/*
 * The tvOS style's own words, in the language chosen in the app's settings.
 * Kept here rather than in the app's catalogs, which every update regenerates.
 * A missing translation shows the English.
 */
const FR: Record<string, string> = {
  // Sidebar and pages
  Home: 'Accueil',
  Discover: 'Découvrir',
  Search: 'Rechercher',
  Library: 'Bibliothèque',
  Calendar: 'Calendrier',
  History: 'Historique',
  Settings: 'Réglages',
  Playlists: 'Playlists',
  'Watch party': 'Séance partagée',
  'Watch together': 'Regarder ensemble',
  Downloads: 'Téléchargements',
  // Home
  'Continue watching': 'Reprendre',
  'Next up': 'À suivre',
  Upcoming: 'Bientôt',
  'See all': 'Tout voir',
  'No catalogs: add some in your AIOStreams configuration.':
    'Aucun catalogue : ajoutez-en dans votre configuration AIOStreams.',
  '{time} left': 'Reste {time}',
  // Kinds and tags
  All: 'Tout',
  Movies: 'Films',
  Shows: 'Séries',
  Series: 'Séries',
  Anime: 'Anime',
  Movie: 'Film',
  'TV Show': 'Série',
  Unwatched: 'Non vus',
  '{n} title': '{n} titre',
  '{n} titles': '{n} titres',
  // Buttons
  Play: 'Lecture',
  Resume: 'Reprendre',
  Versions: 'Versions',
  Details: 'Détails',
  Next: 'Suivant',
  'Add to favourites': 'Ajouter aux favoris',
  'Remove from favourites': 'Retirer des favoris',
  Favourite: 'Favori',
  'Play from the start': 'Lire depuis le début',
  'Play from beginning': 'Lire depuis le début',
  'Mark watched': 'Marquer comme vu',
  'Mark unwatched': 'Marquer comme non vu',
  'Marked unwatched': 'Marqué comme non vu',
  'Random episode': 'Épisode au hasard',
  'Play on another device': 'Lire sur un autre appareil',
  'Add to playlist': 'Ajouter à une playlist',
  'Resume following': 'Suivre à nouveau',
  'Drop show': 'Abandonner la série',
  Watched: 'Vu',
  Info: 'Infos',
  'Try again': 'Réessayer',
  Remove: 'Retirer',
  'Clear all': 'Tout effacer',
  Open: 'Ouvrir',
  Loading: 'Chargement',
  // Detail page
  'In this collection': 'Dans cette collection',
  'Cast & Crew': 'Distribution et équipe',
  Related: 'Similaires',
  About: 'À propos',
  Genres: 'Genres',
  Released: 'Sortie',
  'First aired': 'Première diffusion',
  Studios: 'Studios',
  Airs: 'Diffusion',
  Country: 'Pays',
  Rated: 'Classification',
  Score: 'Note',
  'Episode {n}': 'Épisode {n}',
  'Airs {when}': 'Diffusé {when}',
  // Errors and empty pages
  'Check the connection to your server, then try again.':
    'Vérifiez la connexion à votre serveur, puis réessayez.',
  "This title didn't load": "Ce titre n'a pas pu être chargé",
  "This person didn't load": "Cette personne n'a pas pu être chargée",
  "This catalog didn't load": "Ce catalogue n'a pas pu être chargé",
  "Your favourites didn't load": "Vos favoris n'ont pas pu être chargés",
  "Your history didn't load": "Votre historique n'a pas pu être chargé",
  'Nothing in your favourites yet: add a title with ♡ on its page.':
    'Aucun favori pour le moment : ajoutez un titre avec ♡ sur sa page.',
  'Nothing watched yet': 'Rien de regardé pour le moment',
  "This server can't list what you've watched.":
    'Ce serveur ne peut pas lister ce que vous avez regardé.',
  // History
  Today: "Aujourd'hui",
  Yesterday: 'Hier',
  Earlier: 'Plus tôt',
  Everyone: 'Tout le monde',
  'Now playing': 'En cours de lecture',
  Paused: 'En pause',
  'Removed from history': "Retiré de l'historique",
  'Remove from history': "Retirer de l'historique",
  '{n} movie': '{n} film',
  '{n} movies': '{n} films',
  '{n} episode': '{n} épisode',
  '{n} episodes': '{n} épisodes',
  '{n} in progress': '{n} en cours',
  '{n} favourite': '{n} favori',
  '{n} favourites': '{n} favoris',
  // Person
  'Born {date}': 'Né(e) le {date}',
  'Died {date}': 'Décédé(e) le {date}',
  // Search
  People: 'Personnes',
  Results: 'Résultats',
  Recent: 'Récentes',
  'Listening…': 'Écoute…',
  'Movies, shows and people': 'Films, séries et personnes',
  'No results for “{term}”': 'Aucun résultat pour « {term} »',
  // Theme setting
  Interface: 'Interface',
  "Apple TV's look, or the app's own pages. Kept on this device.":
    "L'apparence de l'Apple TV, ou les pages de l'app. Gardé sur cet appareil.",
};

/** `text` in the chosen language, with `{name}` filled from `vars`. */
export function tr(
  text: string,
  vars?: Record<string, string | number>
): string {
  const language = (i18n.locale ?? '').split('-')[0];
  let out = (language === 'fr' && FR[text]) || text;
  if (vars)
    for (const [name, value] of Object.entries(vars))
      out = out.replaceAll(`{${name}}`, String(value));
  return out;
}

/** A count's words, singular or plural: `count(3, '{n} movie', '{n} movies')`. */
export function count(n: number, one: string, other: string): string {
  return tr(n === 1 ? one : other, { n });
}
