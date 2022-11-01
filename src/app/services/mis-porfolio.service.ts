import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MiPorfolio } from '../interfaces/mi-porfolio';

@Injectable({
  providedIn: 'root'
})
export class MisPorfolioService {
  miUrl:string = 'http://localhost:8080/'
  // miUrl:string = environment.URL
  private urlEndPoint:string =  this.miUrl + 'porfolio';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})

  constructor(private http: HttpClient) { }

  getPorfolio(): Observable<MiPorfolio[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as MiPorfolio[])
    )
  }

  delete(id: number | undefined): Observable<MiPorfolio> | undefined{
    if(id===undefined) return
    return this.http.delete<MiPorfolio>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})
  }

  getPorfolioxId(id: number): Observable<any>{
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  update(trabajo: MiPorfolio): Observable<MiPorfolio>{
    console.log('recibiendo en el servicio',trabajo)

    return this.http.put<MiPorfolio>(`${this.urlEndPoint}/${trabajo.id}`, trabajo ,{headers:this.httpHeaders});
  }

  create(porfolio:MiPorfolio): Observable<MiPorfolio>{
    console.log(porfolio)
    console.log(this.urlEndPoint)
    return this.http.post<MiPorfolio>(this.urlEndPoint,porfolio,{headers:this.httpHeaders})
  }


}
