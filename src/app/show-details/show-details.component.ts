import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, switchMap } from 'rxjs';
import { ShowInfo } from '../domain/show-info';
import { ShowsService } from '../shows.service';

@Component({
    selector: 'app-show-details',
    templateUrl: './show-details.component.html',
    styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent implements OnInit {
    show: ShowInfo | null = null;
    cast: { image: string; name: string }[] = [];
    episodes: string[] = [];

    constructor(
        private path: ActivatedRoute,
        private showService: ShowsService
    ) {}

    ngOnInit(): void {
        this.path.paramMap
            .pipe(
                filter((data) => data.has('id')),
                map((data) => +data.get('id')!),
                switchMap((id) =>
                    this.showService.getShowInfo(id).pipe(
                        map((show, id) => ({
                            show,
                            id,
                        }))
                    )
                )
            )
            .subscribe({
                next: ({ id, show }) => {
                    this.show = show;
                    show._embedded.cast.map((person: any) => {
                        this.cast.push({
                            image: person.person.image.medium,
                            name: person.person.name,
                        });
                    });

                    show._embedded.episodes.map((episode: any) => {
                        this.episodes.push(
                            `S${episode.season}E${episode.number} ${episode.name}`
                        );
                    });
                },
            });
    }
}
