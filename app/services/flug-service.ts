import {Injectable, Inject } from 'angular2/core';
import { Http, URLSearchParams, Headers } from 'angular2/http';
import { ReplaySubject } from 'rxjs/subject/ReplaySubject';

@Injectable()
export class FlugService {

    constructor(
        @Inject('BASE_URL') private baseUrl: string,
        private http: Http) {
    }

    public fluege = new ReplaySubject(1);

    public save(flug) {
        
        var url = this.baseUrl + "/api/flug";
        var headers = new Headers();
        headers.set('Content-Type', 'text/json');
        
        return this.http
                    .post(url, JSON.stringify(flug), { headers: headers });
                    //.subscribe()
        
    }

    public getById(id) {
        
        var url = this.baseUrl + "/api/flug";
        var params = new URLSearchParams();
        params.set('flugNummer', id);
        
        return this.http
                    .get(url, { search: params })
                    .map(resp => resp.json());
        
    }

    public find(von, nach) {

        var url = this.baseUrl + "/api/flug";

        var params = new URLSearchParams();
        params.set('abflugOrt', von);
        params.set('zielOrt', nach);
        
        this.http
                .get(url, { search: params })
                .map(response => response.json())
                .subscribe(
                    (fluege) => {
                        
                        this.fluege.next(fluege);
                    },
                    (err) => {
                        console.error(err);
                    }
                );

    }

}