import data from '../data/sample.json';

type ProgramType = 'movie' | 'series';

interface MediaImages {
    'Poster Art': {
        url: string;
        width: number;
        height: number;
    };
}

interface MediaItem {
    title: string;
    description: string;
    programType: ProgramType;
    images: MediaImages;
    releaseYear: number;
}

export function fetchMovies(): Promise<MediaItem[]> {
    return new Promise<MediaItem[]>(resolve => {
        setTimeout(() => {
            const movies = data.entries.filter(item => item.programType === 'movie');
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