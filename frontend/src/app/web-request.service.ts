import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})





export class WebRequestService {
  ROOT_URL: string = 'http://localhost:3000'
  constructor(private http: HttpClient) { }

  getData(dir: string) {
    return this.http.get(`${this.ROOT_URL}/${dir}`);
  }

  postData(dir: string, data: {}) {
    return this.http.post(`${this.ROOT_URL}/${dir}`, data);
  }

  putData(dir: string, data: {}) {
    return this.http.put(`${this.ROOT_URL}/${dir}`, data);
  }
  

  deleteData(dir: string) {
    return this.http.delete(`${this.ROOT_URL}/${dir}`)
  }













  //tests (delete)
  testGet() {
    console.log("web-request service log: someone subscribed to testGet method");
    return this.http.get('http://localhost:3000');
  }
  testJson(testid: number) {
    console.log("web-request service log: someone subscribed to testJson method");
    return this.http.get(`http://localhost:3000/${testid}`, { responseType: 'text' });
  }


  testPost() {
    console.log("web-request service log: someone subscribed to testPost method");
    return this.http.post('http://localhost:3000', 'test');
  }
  //end test
}
