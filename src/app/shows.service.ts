import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Show } from './domain/show';
import { ShowInfo } from './domain/show-info';

@Injectable({
    providedIn: 'root',
})
export class ShowsService {
    constructor(private http: HttpClient) {}

    getShowsBySearchTerm(searchTerm: string): Observable<Show[]> {
        return this.http
            .get<Show[]>(`${environment.server}?q=${searchTerm}`)
            .pipe(delay(450));
    }

    getShowInfo(id: number): Observable<ShowInfo> {
        return this.http.get<ShowInfo>(
            `${environment.server}/${id}?embed[]=episodes&embed[]=cast`
        );
    }
}
