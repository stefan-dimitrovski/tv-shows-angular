import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShowsSearchComponent } from './shows-search/shows-search.component';

const routes: Routes = [
    { path: 'search', component: ShowsSearchComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full' },
    { path: '**', redirectTo: 'search' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
