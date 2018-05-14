import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class PhotosService {

  API_URL = environment.apiUrl + '/photos';

  constructor(private httpClient: HttpClient) { }
  
  getPhotos(id): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`, options)
    .toPromise()
  }
}