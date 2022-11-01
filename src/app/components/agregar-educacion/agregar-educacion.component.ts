import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MiExperiencia } from '../../interfaces/mi-experiencia';
import { MiEducuacionService } from '../../services/mi-educuacion.service';

@Component({
  selector: 'app-agregar-educacion',
  templateUrl: './agregar-educacion.component.html',
  styleUrls: ['./agregar-educacion.component.css']
})
export class AgregarEducacionComponent implements OnInit {

  miFormulario!: FormGroup;
  constructor(
    private miEducacionService:MiEducuacionService,
    private fb: FormBuilder,
    private router: Router) {
      this.miFormulario = this.fb.group({
        titulo:[''],
        institution:[''],
        descripcion:[''],
        imagen:[''],
        startDate:[''],
        endDate:[''],
      })
     }

  ngOnInit(): void {
  }
  guardarEducacion():void{

    const educacion:MiExperiencia = {
      titulo:this.miFormulario.get('titulo')?.value,
      institution:this.miFormulario.get('institution')?.value,
      descripcion:this.miFormulario.get('descripcion')?.value,
      imagen:this.miFormulario.get('imagen')?.value,
      startDate:this.miFormulario.get('startDate')?.value,
      endDate:this.miFormulario.get('endDate')?.value,
    }
    this.miEducacionService.create(educacion).subscribe((educacion)=>{
      console.log(`La educacion ${educacion.titulo} ha sido agregado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate(['/'])
      })
  }


}
