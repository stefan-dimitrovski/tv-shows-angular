import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import {
    debounceTime,
    distinctUntilChanged,
    filter,
    map,
    switchMap,
} from 'rxjs';
import { Show } from '../domain/show';
import { ShowsService } from '../shows.service';

@Component({
    selector: 'app-shows-search',
    templateUrl: './shows-search.component.html',
    styleUrls: ['./shows-search.component.scss'],
})
export class ShowsSearchComponent implements OnInit {
    showForm = new FormControl('');
    shows: Show[] = [];
    isLoading = false;
    errorMsg = '';
    nothingFound = false;

    constructor(
        private showService: ShowsService,
        private router: Router,
        private route: ActivatedRoute
    ) {}

    ngOnInit(): void {
        this.showForm.valueChanges
            .pipe(
                debounceTime(450),
                distinctUntilChanged(),
                filter((value) => value)
            )
            .subscribe((data) => this.setShowSearch(data));

        this.route.paramMap
            .pipe(
                filter((data) => data.has('term')),
                map((data) => data.get('term')!),
                switchMap((term) => {
                    this.isLoading = !this.isLoading;
                    this.nothingFound = false;
                    this.shows = [];
                    this.showForm.setValue(term);
                    return this.showService.getShowsBySearchTerm(term);
                })
            )
            .subscribe({
                next: (data) => {
                    this.isLoading = !this.isLoading;
                    if (data.length === 0) {
                        this.nothingFound = true;
                        this.errorMsg = 'No shows found!';
                    } else {
                        this.nothingFound = false;
                        this.shows = data;
                    }
                },
                error: (error) => {
                    this.isLoading = !this.isLoading;
                    this.errorMsg =
                        'Unable to contact server, please try again later';
                },
            });
    }

    setShowSearch(term: string) {
        this.router.navigate([`/search/${term}`]);
    }

    searchShow() {
        this.showForm.reset();
    }
}
