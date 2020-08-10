import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  public tituloVariable:string = '';
  private titleSuscribe$:Subscription;

  constructor(private router:Router) {
  }

  ngOnInit(): void {
    this.getDataRuta();
  }

  ngOnDestroy(){
    this.titleSuscribe$.unsubscribe();
  }

  getDataRuta(){
    this.titleSuscribe$ = this.router.events
    .pipe(
      filter( data=> data instanceof ActivationEnd),
      filter( (data:ActivationEnd) => data.snapshot.firstChild == null),
      map( (data:ActivationEnd) => data.snapshot.data)
    ).subscribe(({titulo})=>{
      this.tituloVariable = titulo;
      document.title = `AdminPro - ${titulo}`;
    });
  }

}
