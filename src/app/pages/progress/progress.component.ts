import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public progreso:number = 20;
  public get getProcentaje():string{
    return `${this.progreso}%`;
  }

  constructor() { }

  ngOnInit(): void {
  }

  cambiarValor( valor:number){
    if(this.progreso >= 100 && valor >= 0) return this.progreso = 100;
    if(this.progreso <= 0 && valor <= 0) return this.progreso = 0;
    this.progreso = this.progreso + valor;
  }

}
