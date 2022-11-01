import { Component, OnInit } from '@angular/core';
import { MiPerfilService } from '../../services/mi-perfil.service';
import { MiPerfil } from '../../interfaces/mi-perfil';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-mi-perfil',
  templateUrl: './mi-perfil.component.html',
  styleUrls: ['./mi-perfil.component.css']
})
export class MiPerfilComponent implements OnInit {

  misDatos!: MiPerfil ;
  bndLogin: boolean = false;
  constructor(
    private miPerfilService: MiPerfilService,
    private miLogin: LoginService) { }

  ngOnInit(): void {
    this.miPerfilService.getCliente(1).subscribe(
      (datosService)=>{
        console.log("aaaaaaaaaaaaaa",datosService)
        this.misDatos = datosService
      }
    )

    this.bndLogin = this.miLogin.logueado()
    console.log('mi-perfil->',this.miLogin.logueado())
  }


}
