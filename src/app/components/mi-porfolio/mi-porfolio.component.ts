import { Component, OnInit } from '@angular/core';
import { MisPorfolioService } from 'src/app/services/mis-porfolio.service';
import { MiPorfolio } from '../../interfaces/mi-porfolio';
import Swal from 'sweetalert2';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-mi-porfolio',
  templateUrl: './mi-porfolio.component.html',
  styleUrls: ['./mi-porfolio.component.css']
})
export class MiPorfolioComponent implements OnInit {

  misProyectos!: MiPorfolio[];
  bndLogin: boolean = false;
  constructor(private miPorfolioService:MisPorfolioService,private miLogin: LoginService) { }

  ngOnInit(): void {
    this.miPorfolioService.getPorfolio().subscribe(
      (proyecto)=>{
        this.misProyectos = proyecto
        console.log(proyecto)
      }
    )
    this.bndLogin = this.miLogin.logueado()
  }

  eliminarPorfolio(porfolio:MiPorfolio){

     Swal.fire({
      title: 'Está seguro de eliminar un Porfolio?',
      text: `Referencia: ${porfolio.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.miPorfolioService.delete(porfolio.id)?.subscribe(
          response =>{
            this.misProyectos = this.misProyectos.filter(tra => tra !== porfolio )
            Swal.fire(
              'Porfolio Eliminado!',
              `Porfolio: ${porfolio.nombre} eliminado con éxito.`,
              'success'
            )
          }
        )

      }
    })


  }

  abrirLink(id: number,tipo:string){

    this.miPorfolioService.getPorfolioxId(id).subscribe(
      (miPorfolio)=>{
      console.log(miPorfolio)
        switch (tipo) {
          case 'demo':
            window.open(miPorfolio?.demourl , "_blank");
            break;
          case 'backend':
            window.open(miPorfolio?.backend , "_blank");
            break;
          case 'backend':
            window.open(miPorfolio?.backend , "_blank");
            break;
        }


      }
    )



   /* window.open(proyectoxId?.demoUrl , "_blank");
    console.log('proyectoxId:', proyectoxId?.demoUrl) */

  }
}
