import { Component, Input } from '@angular/core';
import { Show } from '../domain/show';

@Component({
    selector: 'app-shows-list',
    templateUrl: './shows-list.component.html',
    styleUrls: ['./shows-list.component.scss'],
})
export class ShowsListComponent {
    @Input() shows: Show[] = [];
    @Input() errorMsg = '';
    @Input() nothingFound = false;
}
