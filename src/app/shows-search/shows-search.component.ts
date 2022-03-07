import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-shows-search',
    templateUrl: './shows-search.component.html',
    styleUrls: ['./shows-search.component.scss'],
})
export class ShowsSearchComponent implements OnInit {
    constructor() {}

    ngOnInit(): void {}

    searchShow() {
        console.log('Searched Clicked!');
    }
}
