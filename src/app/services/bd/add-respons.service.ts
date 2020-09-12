import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import APIS from 'src/app/globals';

@Injectable({
  providedIn: 'root'
})
export class AddResponsService {

  constructor(private http: HttpClient) {
  }

  // lib: string, desc: string, response: string, typeid: string
  addCategorie(data): Observable<any> {
    return this.http.post<any>(APIS.api_postCategorie, data);
  }

  login(credentials): Observable<any> {
    return this.http.post<any>(APIS.api_login, credentials);
  }
}
