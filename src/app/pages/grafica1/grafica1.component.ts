import { Component, OnInit } from '@angular/core';
import { DonaInterface } from '../../components/dona/dona';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {

  public dona1:DonaInterface = {
    title: 'Compra',
    labels: ['PS5', 'Camiseta XS', 'Zapatos 9'],
    data: [[350, 450, 100]],
    colors: [{backgroundColor:['#6857e6', '#009fee', '#f02059']}]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
