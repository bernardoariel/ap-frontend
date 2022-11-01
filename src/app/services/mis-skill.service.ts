import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MisSkill } from '../interfaces/mis-skill';

@Injectable({
  providedIn: 'root'
})
export class MisSkillService {
  miUrl:string = 'http://localhost:8080/'
  // miUrl:string = environment.URL
  private urlEndPoint:string = this.miUrl + 'habilidad';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }

  getSkill(): Observable<MisSkill[]>{
    return this.http.get(this.urlEndPoint).pipe(
      map(response => response as MisSkill[])
    )
  }

  delete(id: number | undefined): Observable<MisSkill> | undefined{
    if(id===undefined)return
    return this.http.delete<MisSkill>(`${this.urlEndPoint}/${id}`,{headers:this.httpHeaders})
  }

  getSkillxId(id: number): Observable<any>{
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  update(trabajo: MisSkill): Observable<MisSkill>{
    console.log('recibiendo en el servicio',trabajo)

    return this.http.put<MisSkill>(`${this.urlEndPoint}/${trabajo.id}`, trabajo ,{headers:this.httpHeaders});
  }
  create(skill:MisSkill): Observable<MisSkill>{
    console.log(skill)
    console.log(this.urlEndPoint)
    return this.http.post<MisSkill>(this.urlEndPoint,skill,{headers:this.httpHeaders})
  }
}
