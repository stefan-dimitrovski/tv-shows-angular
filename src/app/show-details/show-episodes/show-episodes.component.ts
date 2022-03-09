import { Component, Input } from '@angular/core';
import { ShowEpisode } from 'src/app/domain/show-episode';

@Component({
    selector: 'app-show-episodes',
    templateUrl: './show-episodes.component.html',
    styleUrls: ['./show-episodes.component.scss'],
})
export class ShowEpisodesComponent {
    @Input() episodes: ShowEpisode[] = [];
}
