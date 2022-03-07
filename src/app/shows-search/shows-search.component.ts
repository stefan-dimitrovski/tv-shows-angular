import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ShowsService } from '../shows.service';

@Component({
    selector: 'app-shows-search',
    templateUrl: './shows-search.component.html',
    styleUrls: ['./shows-search.component.scss'],
})
export class ShowsSearchComponent implements OnInit {
    showForm = new FormControl('');

    constructor(private showService: ShowsService) {}

    ngOnInit(): void {}

    searchShow() {
        this.showService
            .getShowsBySearchTerm(this.showForm.value)
            .subscribe((data) => console.log(data));
        this.showForm.reset();
    }
}
