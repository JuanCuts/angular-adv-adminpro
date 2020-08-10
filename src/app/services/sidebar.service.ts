import { Injectable } from '@angular/core';


export interface Menu {
  titulo:string,
  icono:string,
  submenu:Array<Submenu>,
}

export interface Submenu {
  titulo:string,
  url:string,
}

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu:Array<Menu> = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/dashboard'},
        {titulo: 'Graficas', url: 'grafica1'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Promesas', url: 'promesas'},
        {titulo: 'rxjs', url: 'rxjs'},
      ]
    }
  ];

  constructor() { }
}
