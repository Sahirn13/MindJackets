import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ReviewFormService {

  constructor(private http: HttpClient) {}

  postData(url, data) {
    console.log("posting data");
    return this.http.post(url, data);
  }

}
