import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { MiPerfil } from '../interfaces/mi-perfil';

@Injectable({
  providedIn: 'root'
})
export class MiPerfilService {
  // miUrl:string = 'http://localhost:8080/'
  miUrl:string = environment.URL
  private urlEndPoint:string =  this.miUrl + 'perfil';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private http: HttpClient) { }


  getCliente(id: number): Observable<any>{
    console.log(id)
    return this.http.get(`${this.urlEndPoint}/${id}`)
  }

  update(usuario: MiPerfil): Observable<MiPerfil>{
    console.log('recibiendo en el servicio',usuario)

    return this.http.put<MiPerfil>(`${this.urlEndPoint}/${usuario.id}`, usuario ,{headers:this.httpHeaders});
  }

}

