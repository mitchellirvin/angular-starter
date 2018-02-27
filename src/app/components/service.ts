import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

@Injectable()
export class Service {
  private url = 'http://localhost:8080/getAboutMe';  // URL to web api
  constructor(private http: Http) { }

  getAboutMe(): Promise<any> {
    return this.http
      .get(this.url)
      .toPromise()
      .then((response) => {
        return response.json();
      })
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }
}
