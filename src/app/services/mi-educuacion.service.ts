import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MiExperiencia } from '../interfaces/mi-experiencia';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class MiEducuacionService {
  // miUrl:string = 'http://localhost:8080/'
  miUrl:string = environment.URL
  private urlEndPoint:string =  this.miUrl + 'educacion';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getEducacion(): Observable<MiExperiencia[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response=> response as MiExperiencia[])
    )
  }
  delete(id: number | undefined): Observable<MiExperiencia> | undefined{
    if(id===undefined) return
    return this.http.delete<MiExperiencia>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})
  }
  getEducacionxId(id: number): Observable<any>{
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }
  update(educacion: MiExperiencia): Observable<MiExperiencia>{
    console.log('recibiendo en el servicio',educacion)

    return this.http.put<MiExperiencia>(`${this.urlEndPoint}/${educacion.id}`, educacion ,{headers:this.httpHeaders});
  }

  create(educacion:MiExperiencia): Observable<MiExperiencia>{
    console.log(educacion)
    console.log(this.urlEndPoint)
    return this.http.post<MiExperiencia>(this.urlEndPoint,educacion,{headers:this.httpHeaders})
  }

}
