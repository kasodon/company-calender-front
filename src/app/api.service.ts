import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


export interface set {
  statutory_meeting: number;
  annual_general_meeting: number;
  board_of_directors: number;
  annual_returns: number;
}

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  private SERVER_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) { }

  public fetchData(a: any, b: any){  
		return this.httpClient.post<any>(`${this.SERVER_URL}/company`, {
      "company_type": a,
      "date_incorporated": b
    });  
	} 
}
