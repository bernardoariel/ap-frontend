import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MiPerfilService } from 'src/app/services/mi-perfil.service';
import { MiPerfil } from '../../interfaces/mi-perfil';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  misDatos!: MiPerfil;
  miFormulario: FormGroup = new FormGroup({
    "nombre": new FormControl(''),
    "apellido": new FormControl(''),
    "mensaje": new FormControl(''),
    "foto": new FormControl(''),
  })

  constructor( private perfilService:MiPerfilService, private fb: FormBuilder,private router: Router) { }

  ngOnInit(): void {

    this.perfilService.getCliente(1).subscribe(
      (miperfil)=>{
        this.misDatos = miperfil
        this.miFormulario = this.fb.group({
          nombre:[this.misDatos.nombre,[Validators.required,Validators.minLength(3)]],
          apellido:[this.misDatos.apellido,[Validators.required,Validators.minLength(3)]],
          mensaje:[this.misDatos.mensaje,[Validators.required,Validators.minLength(3)]],
          foto:[this.misDatos.foto,[Validators.required,Validators.minLength(3)]],
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
    this.misDatos.apellido = this.miFormulario.controls['apellido'].value
    this.misDatos.mensaje = this.miFormulario.controls['mensaje'].value
    this.misDatos.foto = this.miFormulario.controls['foto'].value
    this.update();
  }

  campoEsValido(campo:string){
    return this.miFormulario.controls[campo].errors && this.miFormulario.controls[campo].touched;
  }

  update():void{
    this.perfilService.update(this.misDatos)
    .subscribe(
      (usuario)=>{
        console.log('aaa',usuario)
        // this.router.navigate(['/clientes'])
        console.log(`Usuario ${usuario.nombre} actualizado con éxito`)
        // swal.fire('Cliente Actualizado ', `Cliente ${cliente.nombre} actualizado con éxito`, 'success')
        this.router.navigate([''])

        // this.editarPerfil();
    })
  }
}
