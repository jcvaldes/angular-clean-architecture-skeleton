import { Album } from './../../../domain/models/Album/album';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { GetAlbumUseCases } from '../../../domain/usecase/get-album-use-case';

@Component({
  selector: 'app-album-card',
  templateUrl: './album-card.component.html',
  styleUrls: ['./album-card.component.scss'],
})
export class AlbumCardComponent implements OnInit {
  private response$: any;
  datos: Album;
  constructor(private _getAlbumUseCase: GetAlbumUseCases) {}
  ngOnInit(): void {
    this.response$ = this._getAlbumUseCase.getAlbumById('12');
    this.response$.subscribe((data: Album) => {
      this.datos = data;
    });
  }
}
