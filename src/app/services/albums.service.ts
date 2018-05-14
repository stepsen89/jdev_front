import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';
import { environment } from '../../environments/environment';

@Injectable()
export class AlbumsService {

  API_URL = environment.apiUrl + '/albums';
  
  constructor(private httpClient: HttpClient) { }

    // get albums of single user
  getAlbums(id: number): Promise<any> {
    const options = {
      withCredentials: true
    };
    return this.httpClient.get(`${this.API_URL}/${id}`,  options)
    .toPromise()
  }
  
}
