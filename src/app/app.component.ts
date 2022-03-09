import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const DARKTHEME_ICON = `
<svg style="width:24px;height:24px" viewBox="0 0 24 24">
<path fill="currentColor" d="M12,18V6A6,6 0 0,1 18,12A6,6 0 0,1 12,18M20,15.31L23.31,12L20,8.69V4H15.31L12,0.69L8.69,4H4V8.69L0.69,12L4,15.31V20H8.69L12,23.31L15.31,20H20V15.31Z" />
</svg>
`;

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isChecked = true;
    darkTheme = new FormControl(false);

    constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
        iconRegistry.addSvgIconLiteral(
            'moon',
            sanitizer.bypassSecurityTrustHtml(DARKTHEME_ICON)
        );
    }

    ngOnInit(): void {
        this.darkTheme.valueChanges.subscribe((value) =>
            console.log(value ? 'Dark Theme' : 'Light Theme')
        );
    }
}
