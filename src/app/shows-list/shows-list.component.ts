import { Component, Input, OnInit } from '@angular/core';
import { Show } from '../domain/show';

@Component({
    selector: 'app-shows-list',
    templateUrl: './shows-list.component.html',
    styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent implements OnInit {
    @Input() shows: Show[] = [];
    @Input() errorMsg = '';
    @Input() nothingFound = false;

    constructor() {}

    ngOnInit(): void {}
}
