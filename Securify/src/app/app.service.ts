import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private getApiUrl = 'https://www.virustotal.com/api/v3/urls/';
  private apiKey = 'e3ad97f721def9a07837946de8463ffa31d4c17f9aa62ab57cacb5ad3d60da83';

  constructor(private http: HttpClient) { }

  public getReport(id: string): Observable<any[]> {
    
    const headers = new HttpHeaders()
      .set('accept', 'application/json')
      .set('x-apikey', this.apiKey)

    return this.http.get<any[]>(this.getApiUrl + id, { 'headers': headers });
  }
}
