import { Component, OnInit, OnChanges, Input } from '@angular/core';

import { AlbumsService } from '../../services/albums.service';
import { PhotosService } from '../../services/photos.service';

@Component({
  selector: 'app-albums-list',
  templateUrl: './albums-list.component.html',
  styleUrls: ['./albums-list.component.css']
})
export class AlbumsListComponent implements OnChanges {
  @Input() selectedU: any;

  selected: any;
  albums: Array<any>;
  photos: any;
  id: number;
  albumId: any;
  album: any;
  selectedAlbum: string;

  constructor(
    private albumsService: AlbumsService,
    private photosService: PhotosService
  ) { }
  
  ngOnChanges() {
    this.id = this.selectedU.id;
    this.albumsService.getAlbums(this.id)
    .then((albums) => {
      this.albums = albums;
    })
  }
  
  onSelect(){
    this.albumId = this.selected.id;
    this.selectedAlbum = this.selected.title;
    this.photosService.getPhotos(this.albumId)
    .then((photos) => {
      this.photos = photos;
    })
  }
}


