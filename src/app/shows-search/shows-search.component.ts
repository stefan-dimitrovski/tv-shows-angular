import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Show } from '../domain/show';
import { ShowsService } from '../shows.service';

@Component({
    selector: 'app-shows-search',
    templateUrl: './shows-search.component.html',
    styleUrls: ['./shows-search.component.scss'],
})
export class ShowsSearchComponent {
    showForm = new FormControl('');
    shows: Show[] = [];
    isLoading = false;

    constructor(private showService: ShowsService) {}

    searchShow() {
        this.isLoading = !this.isLoading;
        this.shows = [];
        this.showService
            .getShowsBySearchTerm(this.showForm.value)
            .subscribe((data) => {
                console.log(data);
                this.isLoading = !this.isLoading;
                this.shows = data;
            });
        this.showForm.reset();
    }
}
