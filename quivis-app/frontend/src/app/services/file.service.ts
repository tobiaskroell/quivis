import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  POST_ROUTE = 'http://localhost:3000/files';
  numEntries: number = 0;

  constructor(private http: HttpClient, private router: Router) {
  }

  getFile(id: number): Observable<any> {
    const url = `${this.POST_ROUTE}/${id}`;
    return this.http.get(url);
  }

  getFiles(): Observable<any> {
    return this.http.get(this.POST_ROUTE);
  }

  createFile(data: any): Observable<any> {
    return this.http.post(this.POST_ROUTE, data);
  }

  updateFile(id: number, data: any): Observable<any> {
    const url = `${this.POST_ROUTE}/${id}`;
    return this.http.put(url, data);
  }

  deleteFile(id: number): Observable<any> {
    const url = `${this.POST_ROUTE}/${id}`;
    return this.http.delete(url);
  }
}