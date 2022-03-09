import { Component, Input } from '@angular/core';
import { ShowCast } from 'src/app/domain/show-cast';

@Component({
    selector: 'app-show-cast',
    templateUrl: './show-cast.component.html',
    styleUrls: ['./show-cast.component.scss'],
})
export class ShowCastComponent {
    @Input() cast: ShowCast[] = [];
}
