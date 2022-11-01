import { Component, OnInit } from '@angular/core';
import { MiExperiencia } from 'src/app/interfaces/mi-experiencia';
import { LoginService } from 'src/app/services/login.service';
import { MiEducuacionService } from 'src/app/services/mi-educuacion.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-mi-educacion',
  templateUrl: './mi-educacion.component.html',
  styleUrls: ['./mi-educacion.component.css']
})
export class MiEducacionComponent implements OnInit {


  miEducacion: MiExperiencia[] = [];
  bndLogin: boolean = false;
  constructor(private miEducacionService:MiEducuacionService,private miLogin: LoginService) { }

  ngOnInit(): void {
    this.miEducacionService.getEducacion().subscribe(
      (educacion)=>{
        this.miEducacion = educacion
        console.log(educacion)
      }
    )
    this.bndLogin = this.miLogin.logueado()
  }

  /* Eliminar una educacion */
  eliminarEducacion(educacion:MiExperiencia){
    console.log(educacion)

      /* Hacemos una alerta */
      Swal.fire({
        title: 'Está seguro de eliminar una Educacion?',
        text: `Referencia: ${educacion.titulo} - ${educacion.institution}`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, Eliminar!'
      }).then((result) => {
        if (result.isConfirmed) {
       this.miEducacionService.delete(educacion.id)?.subscribe(
            response =>{
              this.miEducacion = this.miEducacion.filter(tra => tra !== educacion )
              Swal.fire(
                'Educación Eliminada!',
                `Educación: ${educacion.titulo} - ${educacion.institution} eliminada con éxito.`,
                'success'
              )
            }
          )

        }
      })

    }
}
