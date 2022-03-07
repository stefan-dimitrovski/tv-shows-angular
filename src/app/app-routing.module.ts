import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowDetailsComponent } from './show-details/show-details.component';
import { ShowsSearchComponent } from './shows-search/shows-search.component';

const routes: Routes = [
    { path: 'search', component: ShowsSearchComponent },
    { path: 'details/:id', component: ShowDetailsComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: '**', redirectTo: 'search' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
