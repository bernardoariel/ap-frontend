import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'colores'
})
export class ColoresPipe implements PipeTransform {

  transform( valor: string): string {


    return valor.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  }


}
