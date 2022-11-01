import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { MisPorfolioService } from 'src/app/services/mis-porfolio.service';
import { MiPerfilService } from 'src/app/services/mi-perfil.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  btnVolver:boolean = false;
  constructor(private router: Router , private miPerfilService: MiPerfilService) { }

  ngOnInit(): void {
    if(window.location.href.includes('login')){
      this.btnVolver = true
    }else{
      this.btnVolver = false
    }
    let token = sessionStorage.getItem('token')
    if(token){
      this.router.navigate(['/'])
    }

  }


  loginUser(value:any){

    let { email , password } = value;

    this.miPerfilService.getCliente(1).subscribe(
      (user)=>{


        if (user.email=== email && user.pass===password ){

          sessionStorage.setItem('token','1l2o3g4u5e6a7d8o');

          (sessionStorage.getItem('error')) ? sessionStorage.removeItem('error') : null

          this.router.navigate(['/'])

        }else{
          sessionStorage.setItem('error','El usuario y/o contraseña no es valido');
          // this.router.navigate(['/login'])
        }
      }
    )



  }
}
