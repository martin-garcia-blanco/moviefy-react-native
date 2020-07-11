import { PHOTO_BASE_URL } from './constants';

export function addPhotoUrl(photo) {
  return `${PHOTO_BASE_URL}${photo}`;
}

export function directorExtractor(movie) {
  const director = movie.credits.crew.find((element) => {
    return element.job === 'Director';
  });
  if (director) return director.name;
  return undefined;
}
