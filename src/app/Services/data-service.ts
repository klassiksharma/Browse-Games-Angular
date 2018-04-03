import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {
  }

  // url = 'https://www.reddit.com/.json'

  getData(url): Observable<any> {
    console.log('http')
     return this.http.get(url);
    // return this.http.get('assets/input_user_story_1.txt');
  }

}
