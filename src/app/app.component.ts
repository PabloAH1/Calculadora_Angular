import { Component, ViewChild } from '@angular/core';
import { CalcularComponent } from './calcular/calcular.component';
//import { Operacion } from './calcular/interfaces/calcular.interfaces';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'calculadora';
  dato1:number=0;
  dato2:number=0;
  tipoOperacion:string="";
  //operacion:Operacion={
  //  dato1:0,
  //  dato2:0
  //}

  operar(operacion:string):void{
    this.tipoOperacion=operacion;
  }
}
