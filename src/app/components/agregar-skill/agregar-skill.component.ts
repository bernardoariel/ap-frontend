import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MisSkillService } from '../../services/mis-skill.service';
import { Router } from '@angular/router';
import { MisSkill } from 'src/app/interfaces/mis-skill';

@Component({
  selector: 'app-agregar-skill',
  templateUrl: './agregar-skill.component.html',
  styleUrls: ['./agregar-skill.component.css']
})
export class AgregarSkillComponent implements OnInit {

  miFormulario!: FormGroup;
  constructor(
    private miSkillService:MisSkillService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.miFormulario = this.fb.group({
      nombre:[''],
      descripcion:[''],
      porcentaje:[]
    })
   }

  ngOnInit(): void {
  }

  guardarSkill():void{

    const skill:MisSkill = {
      nombre: this.miFormulario.get('nombre')?.value,
      porcentaje: this.miFormulario.get('porcentaje')?.value,
      descripcion: this.miFormulario.get('descripcion')?.value,

    }
    this.miSkillService.create(skill).subscribe((skill)=>{
      console.log(`Esta Habilidad${skill.nombre} ha sido agregado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate(['/'])
      })
  }
}
