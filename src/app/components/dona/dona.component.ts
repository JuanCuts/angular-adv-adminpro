import { Component, OnInit, Input } from '@angular/core';
import { DonaInterface } from './dona';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})

export class DonaComponent implements OnInit {

  @Input('dona') public dona:DonaInterface = {
    title: 'Titulo',
    labels: ['Label 1', 'Label 2', 'Label 3'],
    data: [[350, 450, 100]],
    colors: [{backgroundColor:['#6857e6', '#009fee', '#f02059']}]
  };

  constructor() { }
  
  ngOnInit(): void {
    // console.log('dona', this.dona);
  }
}
