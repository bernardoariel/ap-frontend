import { Component, OnInit } from '@angular/core';
import { MiPorfolio } from '../../interfaces/mi-porfolio';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { MisPorfolioService } from 'src/app/services/mis-porfolio.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-porfolio',
  templateUrl: './editar-porfolio.component.html',
  styleUrls: ['./editar-porfolio.component.css']
})
export class EditarPorfolioComponent implements OnInit {

  misDatos!: MiPorfolio;
  miFormulario: FormGroup = new FormGroup({
    "nombre": new FormControl(''),
    "descripcion": new FormControl(''),
    "fecha": new FormControl(''),
    "imagen": new FormControl(''),
    "frontUrl": new FormControl(''),
    "backUrl": new FormControl(''),
    "demoUrl": new FormControl('')
  })

  constructor(
    private miPorfolioService:MisPorfolioService,
    private fb: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params
    this.miPorfolioService.getPorfolioxId(id).subscribe(
      (miPorfolio)=>{
        console.log(miPorfolio)
        this.misDatos = miPorfolio
        this.miFormulario = this.fb.group({
          nombre:[this.misDatos.nombre,[Validators.required,Validators.minLength(3)]],
          descripcion:[this.misDatos.descripcion,[Validators.required,Validators.minLength(3)]],
          fecha:[this.misDatos.fecha,[Validators.required,Validators.minLength(3)]],
          imagen:[this.misDatos.imagen,[Validators.required,Validators.minLength(3)]],
          frontUrl:[this.misDatos.frontUrl,[Validators.required,Validators.minLength(3)]],
          backUrl:[this.misDatos.backUrl,[Validators.required,Validators.minLength(3)]],
          demoUrl:[this.misDatos.demoUrl,[Validators.required,Validators.minLength(3)]]
        })
      }
    )
  }
  guardar(){

    if(this.miFormulario.invalid){
      this.miFormulario.markAllAsTouched()
      // return
    }
    this.misDatos.nombre = this.miFormulario.controls['nombre'].value
    this.misDatos.descripcion = this.miFormulario.controls['descripcion'].value
    this.misDatos.fecha = this.miFormulario.controls['fecha'].value
    this.misDatos.imagen = this.miFormulario.controls['imagen'].value
    this.misDatos.frontUrl = this.miFormulario.controls['frontUrl'].value
    this.misDatos.backUrl = this.miFormulario.controls['backUrl'].value
    this.misDatos.demoUrl = this.miFormulario.controls['demoUrl'].value
    this.update();
  }

  update():void{
    console.log('uisdfajll')
    this.miPorfolioService.update(this.misDatos)
    .subscribe(
      (educacion)=>{
        console.log('aaa',educacion)
        // this.router.navigate(['/clientes'])
        console.log(`TRABAJOS ${educacion.nombre} actualizado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate([''])

        // this.editarPerfil();
    })
  }

}
