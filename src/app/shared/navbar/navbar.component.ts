import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  token: string | null = null;
  bndLogin:boolean = false;


  labelBoton:string = ''
  iconoBoton:string = '';
  constructor(
    private router: Router,
    public miLogin: LoginService,
    private route: ActivatedRoute ) { }
  ngOnInit(): void {
    this.bndLogin = this.miLogin.logueado()

    if(!this.bndLogin){
       this.labelBoton = 'Ingresar'
       this.iconoBoton ='fa fa-sign-in'
      }else{
      this.labelBoton = 'Salir'
      this.iconoBoton ='fa fa-sign-out'

    }

  }
  accion(){
    console.log('accion')
    if(!this.bndLogin){
      this.router.navigate(['/login'])
     }else{
     this.logout()

   }
  }
  logout(){
    sessionStorage.removeItem('token')
    this.router.navigate(['/redirect'])
  }

  abrirLink(url: string){
    window.open(url, "_blank");
}
}
