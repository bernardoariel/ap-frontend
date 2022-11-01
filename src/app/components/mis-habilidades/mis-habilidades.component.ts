import { Component, OnInit } from '@angular/core';
import { MisSkill } from 'src/app/interfaces/mis-skill';
import { LoginService } from 'src/app/services/login.service';
import { MisSkillService } from 'src/app/services/mis-skill.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mis-habilidades',
  templateUrl: './mis-habilidades.component.html',
  styleUrls: ['./mis-habilidades.component.css']
})
export class MisHabilidadesComponent implements OnInit {

  misHabilidades!: MisSkill[]
  color:string = '';
  bndLogin: boolean = false;
  constructor(private misSkillService: MisSkillService,private miLogin: LoginService) { }

  ngOnInit(): void {
    this.misSkillService.getSkill().subscribe(
      (skill)=>{
        console.log("HABILIDAD",skill)
        this.misHabilidades = skill
      }
    )
    this.bndLogin = this.miLogin.logueado()
  }
  eliminarSkill(skill:MisSkill){

    Swal.fire({
      title: 'Está seguro de eliminar una Habilidad?',
      text: `Referencia: ${skill.nombre}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, Eliminar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.misSkillService.delete(skill.id)?.subscribe(
          response =>{
            this.misHabilidades = this.misHabilidades.filter(tra => tra !== skill )
            Swal.fire(
              'Habilidad Eliminada!',
              `Habilidad: ${skill.nombre} eliminada con éxito.`,
              'success'
            )
          }
        )

      }
    })

  }

}
