import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cidade } from '../Models/Cidade';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  urlBase = "https://localhost:5001/api/v1/consultas/";
  constructor(private http: HttpClient) { }

  getCidadeFromName(url: string, cidade: string): Observable<Cidade> {
    return this.http.get<Cidade>(this.urlBase + url, { params: { cidade: cidade } });
  }

  getCidadesFromDate_Name(url: string, cidade: string, dataInicio: Date, dataFim: Date): Observable<Cidade[]> {
    var httpParams = new HttpParams({
      fromObject: {
        cidade: cidade,
        dataInicio: dataInicio.toISOString(),
        dataFim: dataFim.toISOString()
      }
    });
    return this.http.get<Cidade[]>(this.urlBase + url, { params: httpParams });
  }

  getCidadesFromDate(url: string, dataInicio: Date, dataFim: Date): Observable<Cidade[]> {
    var httpParams = new HttpParams({
      fromObject: {
        dataInicio: dataInicio.toISOString(),
        dataFim: dataFim.toISOString()
      }
    });
    return this.http.get<Cidade[]>(this.urlBase + url, { params: httpParams });
  }

  getTodasCidades(url: string): Observable<Cidade[]> {
    return this.http.get<Cidade[]>(this.urlBase + url);
  }
}
