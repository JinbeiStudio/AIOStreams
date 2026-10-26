/* eslint-disable lingui/no-unlocalized-strings -- the tvOS style's words go through tr() (./i18n), which this rule doesn't know */
import { i18n } from '@lingui/core';

/*
 * The tvOS style's own words, in the language chosen in the app's settings.
 * Kept here rather than in the app's catalogs, which every update regenerates.
 * A missing translation shows the English.
 */
const FR: Record<string, string> = {
  // Add a profile
  'Add your profile': 'Ajouter votre profil',
  'Type the address you were given to open your profile.':
    'Saisissez l’adresse reçue pour ouvrir votre profil.',
  'Profile address': 'Adresse du profil',
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
  'Continue watching': 'Continuer',
  'Next up': 'Épisode suivant',
  Upcoming: 'Bientôt disponible',
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
  Resume: 'Continuer',
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

/*
 * Catalog names. The server sends the catalogs' own names ("Trakt Trending"); the key is that name as a slug
 * ("trakt-trending"), and the table gives the words shown in English and in French. A catalog that is not
 * listed shows the server's name. Movies, shows and anime share the same words; the tag next to the name says which is which.
 */
const CATALOGS: Record<string, [string, string]> = {
  'latest-digital-release': ['New releases', 'Nouveautés'],
  'trakt-trending': ['Trending', 'Tendances'],
  'tmdb-popular': ['Popular', 'Populaires'],
  'latest-airing': ['New releases', 'Nouveautés'],
  'crunchyroll-latest': ['New releases', 'Nouveautés'],
  'anilist-trending': ['Trending', 'Tendances'],
  seasonal: ['Seasonal', 'De saison'],
  'tmdb-by-year': ['By year', 'Par année'],
  'tmdb-by-language': ['By language', 'Par langue'],
  'tvdb-genres': ['By genre', 'Par genre'],
  'tvdb-collections': ['Collections', 'Sagas et collections'],
  'trending-kids': ['For kids', 'Pour les enfants'],
  'mal-airing-now': ['New episodes', 'Nouveaux épisodes'],
  'anidb-latest-ended': ['Recently finished', 'Récemment terminés'],
  'mal-top-series': ['Best series', 'Meilleures séries'],
  'mal-top-movies': ['Best movies', 'Meilleurs films'],
  'mal-top-all-time': ['Best of all time', 'Les meilleurs de tous les temps'],
  'mal-genres': ['By genre', 'Par genre'],
  'netflix-latest': ['New on Netflix', 'Nouveautés Netflix'],
  'amazon-prime-latest': ['New on Prime Video', 'Nouveautés Prime Video'],
  'apple-plus-latest': ['New on Apple TV+', 'Nouveautés Apple TV+'],
  'disney-plus-latest': ['New on Disney+', 'Nouveautés Disney+'],
  'paramount-plus-latest': ['New on Paramount+', 'Nouveautés Paramount+'],
  'hbo-max-latest': ['New on HBO Max', 'Nouveautés HBO Max'],
  'hulu-latest': ['New on Hulu', 'Nouveautés Hulu'],
  action: ['Action', 'Action'],
  animated: ['Animation', 'Animation'],
  comedy: ['Comedy', 'Comédie'],
  crime: ['Crime', 'Policier'],
  drama: ['Drama', 'Drame'],
  horror: ['Horror', 'Horreur'],
  'sci-fi': ['Sci-fi', 'Science-fiction'],
  thriller: ['Thriller', 'Thriller'],
  'top-documentaries': ['Documentaries', 'Documentaires'],
  'history-and-war': ['History & war', 'Histoire et guerre'],
  'must-see-modern-horror': ['Modern horror to see', 'Horreur moderne à voir'],
  'must-see-mindfuck': ['Mind-bending', 'Qui retournent le cerveau'],
  'top-nature': ['Nature', 'Nature'],
  'top-reality-tv': ['Reality TV', 'Télé-réalité'],
  'top-standup-comedy': ['Comedy – Stand-up', 'Comédie – Stand-up'],
};

/** "Apple+  Latest" -> "apple-plus-latest". */
function catalogKey(name: string): string {
  return name
    .normalize('NFKD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/\+/g, ' plus ')
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

/** A catalog's name in the app's language, or the server's own when it is not in the table. */
export function catalogName(name: string | null | undefined): string {
  if (!name) return '';
  const entry = CATALOGS[catalogKey(name)];
  if (!entry) return name;
  return (i18n.locale ?? '').split('-')[0] === 'fr' ? entry[1] : entry[0];
}

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
