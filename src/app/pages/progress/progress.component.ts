import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.css']
})
export class ProgressComponent implements OnInit {

  public progreso1:number = 25;
  public get getProcentaje1():string{
    return `${this.progreso1}%`;
  }
  public progreso2:number = 35;
  public get getProcentaje2():string{
    return `${this.progreso2}%`;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
