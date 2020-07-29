import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent implements OnInit{
  
  @Input('valor') public progreso:number = 20;
  @Input('btnClass') public btnClass:string = 'btn-primary';

  @Output('valor') public valorSalida:EventEmitter<number> = new EventEmitter();
  
  public get getProcentaje():string{
    return `${this.progreso}%`;
  }

  constructor() { }

  ngOnInit(): void {
    this.btnClass = `btn ${this.btnClass}`;
  }
  
  cambiarValor( valor:number){
    if(this.progreso >= 100 && valor >= 0){
      this.valorSalida.emit(100);
      return this.progreso = 100;
    }
    if(this.progreso <= 0 && valor <= 0){
      this.valorSalida.emit(0);
      return this.progreso = 0;
    }
    this.progreso = this.progreso + valor;
    this.valorSalida.emit(this.progreso);
  }

  onChange(nuevovalor:number){
    if(nuevovalor >= 100) this.progreso = 100;
    else if(nuevovalor <= 0) this.progreso = 0;
    else this.progreso = nuevovalor;

    console.log('progreso', this.progreso);

    this.valorSalida.emit(this.progreso);
  }
}
