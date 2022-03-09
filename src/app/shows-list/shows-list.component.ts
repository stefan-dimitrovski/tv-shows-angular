import { Component, OnInit } from '@angular/core';
import { Show } from '../domain/show';

@Component({
    selector: 'app-shows-list',
    templateUrl: './shows-list.component.html',
    styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
    shows: Show[] = [];
    errorMsg = '';
    nothingFound = false;
    
    constructor() {}

    ngOnInit(): void {}
}
