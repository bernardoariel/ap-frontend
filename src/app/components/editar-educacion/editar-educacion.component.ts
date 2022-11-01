import { Component, OnInit } from '@angular/core';
import { MiExperiencia } from 'src/app/interfaces/mi-experiencia';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MiEducuacionService } from 'src/app/services/mi-educuacion.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-educacion',
  templateUrl: './editar-educacion.component.html',
  styleUrls: ['./editar-educacion.component.css']
})
export class EditarEducacionComponent implements OnInit {

  misDatos!: MiExperiencia;
  miFormulario: FormGroup = new FormGroup({
    "titulo": new FormControl(''),
    "institution": new FormControl(''),
    "descripcion": new FormControl(''),
    "imagen": new FormControl(''),
    "startDate": new FormControl(''),
    "endDate": new FormControl(''),
  })

  constructor(
    private miEducuacionService:MiEducuacionService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params
    this.miEducuacionService.getEducacionxId(id).subscribe(
      (miEducacion)=>{
        console.log(miEducacion)
        this.misDatos = miEducacion
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
    console.log('uisdfajll')
    this.miEducuacionService.update(this.misDatos)
    .subscribe(
      (educacion)=>{
        console.log('aaa',educacion)
        // this.router.navigate(['/clientes'])
        console.log(`Educacion ${educacion.titulo} actualizado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate([''])

        // this.editarPerfil();
    })
  }

}
