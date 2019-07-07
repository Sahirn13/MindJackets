import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    })
};

@Injectable()
export class ReviewFormService {

  constructor(private http: HttpClient) {}

  postData(url, data) {
    console.log('posting data');
    return this.http.post(url, data, httpOptions);
  }

}
