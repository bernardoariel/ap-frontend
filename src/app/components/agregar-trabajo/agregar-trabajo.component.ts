import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { MiExperienciaService } from '../../services/mi-experiencia.service';
import { Router } from '@angular/router';
import { MiExperiencia } from '../../interfaces/mi-experiencia';

@Component({
  selector: 'app-agregar-trabajo',
  templateUrl: './agregar-trabajo.component.html',
  styleUrls: ['./agregar-trabajo.component.css']
})
export class AgregarTrabajoComponent implements OnInit {
  miFormulario!: FormGroup;

  constructor(
    private miTrabajoServicio:MiExperienciaService,
    private fb: FormBuilder,
    private router: Router){
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
  guardarTrabajo():void{
    const trabajo:MiExperiencia = {
      titulo:this.miFormulario.get('titulo')?.value,
      institution:this.miFormulario.get('institution')?.value,
      descripcion:this.miFormulario.get('descripcion')?.value,
      imagen:this.miFormulario.get('imagen')?.value,
      startDate:this.miFormulario.get('startDate')?.value,
      endDate:this.miFormulario.get('endDate')?.value,
    }
    this.miTrabajoServicio.create(trabajo).subscribe((trabajo)=>{
      console.log(`El trabajo ${trabajo.titulo} ha sido agregado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate(['/'])
    })

  }


}

