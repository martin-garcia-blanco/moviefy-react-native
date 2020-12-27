import {
  PHOTO_BASE_URL_LOW_QUALITY,
  PHOTO_BASE_URL_HIGH_QUALITY,
} from './constants';

export function addPhotoUrl(photo, quality) {
  return quality === 'low'
    ? `${PHOTO_BASE_URL_LOW_QUALITY}${photo}`
    : `${PHOTO_BASE_URL_HIGH_QUALITY}${photo}`;
}

export function directorExtractor(movie) {
  const director = movie.credits.crew.find((element) => {
    return element.job === 'Director';
  });
  if (director) return director.name;
  return undefined;
}
