import { Component, OnInit } from '@angular/core';
import { MiExperiencia } from 'src/app/interfaces/mi-experiencia';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MiExperienciaService } from 'src/app/services/mi-experiencia.service';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  misDatos!: MiExperiencia;
  miFormulario: FormGroup = new FormGroup({
    "titulo": new FormControl(''),
    "institution": new FormControl(''),
    "descripcion": new FormControl(''),
    "imagen": new FormControl(''),
    "startDate": new FormControl(''),
    "endDate": new FormControl(''),
  })

  constructor( private miTrabajoServicio:MiExperienciaService,
     private fb: FormBuilder,
     private router: Router,
     private activatedRoute: ActivatedRoute) { }


  ngOnInit(): void {

    const { id } =this.activatedRoute.snapshot.params
    // console.log(id)
    this.miTrabajoServicio.getTrabajo(id).subscribe(
      (miperfil)=>{
        this.misDatos = miperfil
        this.miFormulario = this.fb.group({
          titulo:[this.misDatos.titulo,[Validators.required,Validators.minLength(3)]],
          institution:[this.misDatos.institution,[Validators.required,Validators.minLength(3)]],
          descripcion:[this.misDatos.descripcion,[Validators.required,Validators.minLength(3)]],
          imagen:[this.misDatos.imagen,[Validators.required,Validators.minLength(3)]],
          startDate:[this.misDatos.startDate,[Validators.required]],
          endDate:[this.misDatos.endDate,[Validators.required]],

        })
      }
    )

  }

  guardar(){
    console.log('entro')
    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      return
    }
    this.misDatos.titulo = this.miFormulario.controls['titulo'].value
    this.misDatos.institution = this.miFormulario.controls['institution'].value
    this.misDatos.descripcion = this.miFormulario.controls['descripcion'].value
    this.misDatos.imagen = this.miFormulario.controls['imagen'].value
    this.misDatos.startDate = this.miFormulario.controls['startDate'].value
    this.misDatos.endDate = this.miFormulario.controls['endDate'].value
    this.update();
  }

  update():void{

    this.miTrabajoServicio.update(this.misDatos)
    .subscribe(
      (trabajo)=>{
        console.log('aaa',trabajo)
        // this.router.navigate(['/clientes'])
        console.log(`Trabajo ${trabajo.titulo} actualizado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate([''])

        // this.editarPerfil();
    })
  }
}
