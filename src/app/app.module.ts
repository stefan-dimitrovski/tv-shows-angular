import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowsSearchComponent } from './shows-search/shows-search.component';
import { GenrePipe } from './genre.pipe';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsListComponent } from './shows-list/shows-list.component';
import { ShowCastComponent } from './show-details/show-cast/show-cast.component';
import { ShowEpisodesComponent } from './show-details/show-episodes/show-episodes.component';

@NgModule({
    declarations: [AppComponent, ShowsSearchComponent, GenrePipe, ShowDetailsComponent, ShowsListComponent, ShowCastComponent, ShowEpisodesComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        NgbModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
