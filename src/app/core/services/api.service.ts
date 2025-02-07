import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IHttpParams } from '../interfaces/params.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = environment.basetApi;

  constructor(private httpClient: HttpClient) { }

  get<T>(path: string, params?: IHttpParams): Observable<T> {
    const httpParams = this.createHttpParams(params);
    return this.httpClient.get<T>(`${this.baseUrl}/${path}`, { params: httpParams });
  }

  post<T>(path: string, data: unknown): Observable<T> {
    return this.httpClient.post<T>(`${this.baseUrl}/${path}`, data);
  }

  put<T>(path: string, data: unknown): Observable<T> {
    return this.httpClient.put<T>(`${this.baseUrl}/${path}`, data);
  }

  delete<T>(path: string, params?: IHttpParams): Observable<T> {
    const httpParams = this.createHttpParams(params);
    return this.httpClient.delete<T>(`${this.baseUrl}/${path}`, { params: httpParams });
  }

  private createHttpParams(params?: IHttpParams): HttpParams {
    let httpParams = new HttpParams();
    if (params) {
      for (const key in params) {
        if (Object.prototype.hasOwnProperty.call(params, key)) {
          const value = params[key];
          if (Array.isArray(value)) {
            value.forEach(item => {
              httpParams = httpParams.append(key, item);
            });
          } else {
            httpParams = httpParams.set(key, value);
          }
        }
      }
    }
    return httpParams;
  }
}
