import { ShowCast } from './show-cast';
import { ShowEpisode } from './show-episode';

export interface ShowInfo {
    id: number;
    url: string;
    name: string;
    language: string;
    genres: string[];
    status: string;
    premiered: string;
    officialSite: string;
    image: { medium: string };
    summary: string;
    _embedded: { episodes: ShowEpisode[]; cast: ShowCast[] };
}
