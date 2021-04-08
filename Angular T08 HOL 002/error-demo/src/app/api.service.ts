import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private SERVER = 'http://server.com/api/products';

  constructor(private httpClient: HttpClient) {}

  public fetchData() {
    return this.httpClient.get(this.SERVER);
  }
}
