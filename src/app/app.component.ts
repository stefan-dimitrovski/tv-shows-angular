import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    isChecked = true;
    toggleControl = new FormControl(false);
    @HostBinding('class') className = '';

    constructor(
        private iconRegistry: MatIconRegistry,
        private sanitizer: DomSanitizer
    ) {
        this.iconRegistry.addSvgIcon(
            'sun',
            this.sanitizer.bypassSecurityTrustResourceUrl(
                '../assets/white-balance-sunny.svg'
            )
        );
        this.iconRegistry.addSvgIcon(
            'moon',
            this.sanitizer.bypassSecurityTrustResourceUrl(
                '../assets/moon-waning-crescent.svg'
            )
        );
    }

    ngOnInit(): void {
        this.toggleControl.valueChanges.subscribe((darkMode) => {
            const darkClassName = 'my-dark-theme';
            this.className = darkMode ? darkClassName : '';
        });
    }
}
