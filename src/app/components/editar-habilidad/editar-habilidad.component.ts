import { Component, OnInit } from '@angular/core';
import { MisSkill } from '../../interfaces/mis-skill';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import { Router, ActivatedRoute } from '@angular/router';
import { MisSkillService } from 'src/app/services/mis-skill.service';

@Component({
  selector: 'app-editar-habilidad',
  templateUrl: './editar-habilidad.component.html',
  styleUrls: ['./editar-habilidad.component.css']
})
export class EditarHabilidadComponent implements OnInit {
  misDatos!: MisSkill;
  miFormulario: FormGroup = new FormGroup({
    "nombre": new FormControl(''),
    "descripcion": new FormControl(''),
    "porcentaje": new FormControl('')
  })
  constructor(
    private misSkillService:MisSkillService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params
    this.misSkillService.getSkillxId(id).subscribe(
      (miSkill)=>{
        this.misDatos = miSkill
        this.miFormulario = this.fb.group({
          nombre:[this.misDatos.nombre,[Validators.required,Validators.minLength(2)]],
          descripcion:[this.misDatos.descripcion,[Validators.required,Validators.minLength(3)]],
          porcentaje:[this.misDatos.porcentaje,[Validators.required]]
        })
      }
    )
  }

  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }

    this.misDatos.nombre = this.miFormulario.controls['nombre'].value
    this.misDatos.descripcion = this.miFormulario.controls['descripcion'].value
    this.misDatos.porcentaje = this.miFormulario.controls['porcentaje'].value
    this.update();
  }


  update():void{

    this.misSkillService.update(this.misDatos)
    .subscribe(
      (educacion)=>{
        console.log('aaa',educacion)
        // this.router.navigate(['/clientes'])
        console.log(`HABILIDAD: ${educacion.nombre} actualizado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate(['/'])

        // this.editarPerfil();
    })
  }

}
