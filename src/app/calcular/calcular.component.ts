import { Component, Input } from '@angular/core';
//import { Operacion } from '../calcular/interfaces/calcular.interfaces';

@Component({
  selector: 'app-calcular',
  templateUrl: './calcular.component.html',
  styleUrls: ['./calcular.component.css']
})
export class CalcularComponent {
  resultado:number=0;

  @Input() dato1: number=0;
  @Input() dato2: number=0;
  @Input() tipoOperacion: string="";

  constructor() { }

sumar(){
  this.resultado= this.dato1+this.dato2
}
restar(){
  this.resultado= this.dato1-this.dato2
}
multiplicar(){
  this.resultado= this.dato1*this.dato2
}
dividir(){
  this.resultado= this.dato1/this.dato2
}
limpiar(){
  this.dato1=0;
  this.dato2=0;
}
}
