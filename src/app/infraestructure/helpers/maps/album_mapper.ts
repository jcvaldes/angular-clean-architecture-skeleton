import { Mapper } from './common/maps';
import { Album } from './../../../domain/models/Album/album';

export class AlbumMapper extends Mapper<Album> {
  fromMap(obj: any): Album {
    const result: Album = {
      userId: obj.userId,
      id: obj.id,
      title: obj.title,
    };
    return result;
  }
}
