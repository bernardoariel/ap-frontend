import { Component, OnInit, Output , EventEmitter } from '@angular/core';

//Importamos todo lo necesario para construir el formulario
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  logeado = true;
  loginForm: FormGroup = new FormGroup({})
  @Output() loginAction: EventEmitter<{}> = new EventEmitter<{}>()
  constructor(
    private formBuilder:FormBuilder) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group({
      email:['',Validators.compose([Validators.required, Validators.email])],
      password: ['', Validators.required]
    })

  }

  get email(){
    return this.loginForm.get('email')
  }

  get password(){
    return this.loginForm.get('password')
  }

  //Submit del formulario de Login

  loginUser(){
    console.table(this.loginForm.value)
    if(this.loginForm.valid){
     // console.table(this.loginForm.value)
      this.loginAction.emit(this.loginForm.value)
      console.log(this.loginAction.emit(this.loginForm.value))
      //TODO Peticion a authService

     // this.loginForm.reset()

    }
  }
  errorDatos(): boolean{
    let error = sessionStorage.getItem('error')
    if(error){
      return true
    }else{
      return false
    }
  }

}
