import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
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

    constructor(private showService: ShowsService) {}

    ngOnInit(): void {
        this.showForm.valueChanges
            .pipe(
                debounceTime(450),
                filter((value) => value),
                distinctUntilChanged(),
                switchMap((searchTerm) => {
                    this.isLoading = !this.isLoading;
                    this.nothingFound = false;
                    this.shows = [];
                    return this.showService.getShowsBySearchTerm(searchTerm);
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

    searchShow() {
        this.showForm.reset();
    }
}
