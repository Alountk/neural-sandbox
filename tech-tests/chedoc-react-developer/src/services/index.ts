import data from '../data/sample.json';
import type { MediaItem } from '../types';

export function fetchMovies(): Promise<MediaItem[]> {
    return new Promise<MediaItem[]>(resolve => {
        setTimeout(() => {
            const movies = data.entries.filter(item => item.programType === 'movie');
            console.log({ movies });
            resolve(movies as MediaItem[]);
        }, 500);
    });
}

export function fetchShows(): Promise<MediaItem[]> {
    return new Promise<MediaItem[]>(resolve => {
        setTimeout(() => {
            const shows = data.entries.filter(item => item.programType === 'series');
            resolve(shows as MediaItem[]);
        }, 500);
    });
}