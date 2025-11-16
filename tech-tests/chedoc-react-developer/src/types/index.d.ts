type ProgramType = 'movie' | 'series';

export interface MediaImages {
    'Poster Art': {
        url: string;
        width: number;
        height: number;
    };
}

export interface MediaItem {
    title: string;
    description: string;
    programType: ProgramType;
    images: MediaImages;
    releaseYear: number;
}