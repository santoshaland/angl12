import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  GetData()
  {
    return this.http.get("http://localhost:4000/student/");
  }

  AddData(stud)
  {
    return this.http.post("http://localhost:4000/student/",stud);
  }

}
