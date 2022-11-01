import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MiExperiencia } from '../interfaces/mi-experiencia';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class MiExperienciaService {
  miUrl:string = 'http://localhost:8080/'
  // miUrl:string = environment.URL
  private urlEndPoint:string =  this.miUrl + 'trabajo';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getTrabajos(): Observable<MiExperiencia[]>{

    return this.http.get(this.urlEndPoint).pipe(
      map(response=> response as MiExperiencia[])
    )
  }
  getTrabajo(id: number): Observable<any>{
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  delete(id: number | undefined): Observable<MiExperiencia> | undefined{
    if(id===undefined) return
    return this.http.delete<MiExperiencia>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})
  }
  update(trabajo: MiExperiencia): Observable<MiExperiencia>{
    console.log('recibiendo en el servicio',trabajo)

    return this.http.put<MiExperiencia>(`${this.urlEndPoint}/${trabajo.id}`, trabajo ,{headers:this.httpHeaders});
  }
  create(trabajo:MiExperiencia): Observable<MiExperiencia>{
    console.log(trabajo)
    console.log(this.urlEndPoint)
    return this.http.post<MiExperiencia>(this.urlEndPoint,trabajo,{headers:this.httpHeaders})
  }
}
