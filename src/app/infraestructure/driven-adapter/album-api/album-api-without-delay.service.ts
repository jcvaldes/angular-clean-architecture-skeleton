import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../../../domain/models/Album/album';
import { AlbumGateway } from '../../../domain/models/Album/gateway/album-gateway';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AlbumApiServiceWithoutDelay extends AlbumGateway {
  private _url = 'https://jsonplaceholder.typicode.com/albums/';
  constructor(private http: HttpClient) {
    super();
  }
  getById(id: String): Observable<Album> {
    return this.http.get<Album>(this._url + id);
  }
  getAll(): Observable<Album[]> {
    return this.http.get<Array<Album>>(this._url);
  }
  saveNew(_alb: Album): Observable<void> {
    throw new Error('Method not implemented.');
  }
}
