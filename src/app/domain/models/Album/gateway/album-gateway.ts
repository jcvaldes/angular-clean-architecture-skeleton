import { Observable } from 'rxjs';
import { Album } from '../album';
// Estamos diciendo QUE QUEREMOS
export abstract class AlbumGateway {
  abstract getById(id: String): Observable<Album>;
  abstract getAll(): Observable<Album[]>;
  abstract saveNew(_alb: Album): Observable<void>;
}
