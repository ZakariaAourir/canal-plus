import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 


@Injectable()
export class FakeService {
    constructor(private http: HttpClient) { }

   data() {
    return this.http.get<any>(`http://localhost:4200/data`);
   }

   updateData(payload, id) {
    return this.http.put<any>(`http://localhost:4200/update/`+id, payload);
   }
}