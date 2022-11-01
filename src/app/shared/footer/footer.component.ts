import { Component, OnInit } from '@angular/core';
import { MiPerfilService } from '../../services/mi-perfil.service';
import { MiPerfil } from '../../interfaces/mi-perfil';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  currentTime: any = new Date();
  anio:any = this.currentTime.getFullYear()
  misDatos!: MiPerfil;
  constructor(private miPerfilService:MiPerfilService) { }

  ngOnInit(): void {
    this.miPerfilService.getCliente(1).subscribe(
      (yo)=>{
        this.misDatos = yo
      }
    )
  }

}
