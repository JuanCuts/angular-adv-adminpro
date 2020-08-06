import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu:Array<Object> = [
    {
      titulo: 'Dashboard',
      icono: 'mdi mdi-gauge',
      submenu: [
        {titulo: 'Main', url: '/'},
        {titulo: 'ProgressBar', url: 'progress'},
        {titulo: 'Graficas', url: 'grafica1'},
      ]
    }
  ];

  constructor() { }
}
