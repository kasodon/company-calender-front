import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private SERVER_URL = "https://company-calender.herokuapp.com";

  constructor(private httpClient: HttpClient) { }

  public fetchData(a: any, b: any){  
		return this.httpClient.post(`${this.SERVER_URL}/company`, {
      "company_type": a,
      "date_incorporated": b
    });  
	} 
}
