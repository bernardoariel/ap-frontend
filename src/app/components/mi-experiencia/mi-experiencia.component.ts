import { Component, OnInit } from '@angular/core';
import { MiExperiencia } from 'src/app/interfaces/mi-experiencia';
import { MiExperienciaService } from '../../services/mi-experiencia.service';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-mi-experiencia',
  templateUrl: './mi-experiencia.component.html',
  styleUrls: ['./mi-experiencia.component.css']
})
export class MiExperienciaComponent implements OnInit {

  miTrabajo: MiExperiencia[] =[];
  bndLogin:boolean = false;
  constructor(private miExperienciaService: MiExperienciaService,private miLogin: LoginService) { }

  ngOnInit(): void {
    this.miExperienciaService.getTrabajos().subscribe(
      (trabajo)=>{
        this.miTrabajo = trabajo
        console.log(this.miTrabajo)

      }
    )
    this.bndLogin = this.miLogin.logueado()
  }

  eliminarTrabajo(trabajo:MiExperiencia){

    Swal.fire({
      title: 'Está seguro de eliminar un Trabajo?',
      text: `Referencia: ${trabajo.titulo} - ${trabajo.institution}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miExperienciaService.delete(trabajo.id)?.subscribe(
          response =>{
            this.miTrabajo = this.miTrabajo.filter(tra => tra !== trabajo )
            Swal.fire(
              'Trabajo Eliminado!',
              `Trabajo: ${trabajo.titulo} - ${trabajo.institution} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })
  }

}
