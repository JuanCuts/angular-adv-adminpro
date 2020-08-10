import { Component, OnInit } from '@angular/core';
import { SidebarService } from 'src/app/services/sidebar.service';

export interface Menu {
  titulo:string,
  icono:string,
  submenu:Array<Submenu>,
}

export interface Submenu {
  titulo:string,
  url:string,
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
  ]
})
export class SidebarComponent implements OnInit {

  public menuItems:Array<Menu> = [];

  constructor(private sidebarServices:SidebarService) { }

  ngOnInit(): void {
    this.menuItems = this.sidebarServices.menu;
  }

}
