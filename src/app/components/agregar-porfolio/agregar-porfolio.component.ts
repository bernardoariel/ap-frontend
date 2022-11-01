import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MisPorfolioService } from '../../services/mis-porfolio.service';
import { Router } from '@angular/router';
import { MiPorfolio } from '../../interfaces/mi-porfolio';

@Component({
  selector: 'app-agregar-porfolio',
  templateUrl: './agregar-porfolio.component.html',
  styleUrls: ['./agregar-porfolio.component.css']
})
export class AgregarPorfolioComponent implements OnInit {

  miFormulario!: FormGroup;
  constructor(
    private miPorfolioService:MisPorfolioService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.miFormulario = this.fb.group({
      nombre:[''],
      descripcion:[''],
      fecha:[''],
      imagen:[''],
      frontUrl:[''],
      backUrl:[''],
      demoUrl:['']
    })
  }

  guardarPorfolio():void{

    const porfolio:MiPorfolio = {
      nombre:this.miFormulario.get('nombre')?.value,
      descripcion:this.miFormulario.get('descripcion')?.value,
      fecha:this.miFormulario.get('fecha')?.value,
      imagen:this.miFormulario.get('imagen')?.value,
      frontUrl:this.miFormulario.get('frontUrl')?.value,
      backUrl:this.miFormulario.get('backUrl')?.value,
      demoUrl:this.miFormulario.get('demoUrl')?.value,

    }
    this.miPorfolioService.create(porfolio).subscribe((educacion)=>{
      console.log(educacion)
      console.log(`La educacion ${porfolio.nombre} ha sido agregado con éxito`)
      //  swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
         this.router.navigate(['/'])
      })
  }

  ngOnInit(): void {
  }


}
