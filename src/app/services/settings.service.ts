import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  private linktheme:Element = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme') || `./assets/css/colors/default.css`;
    this.linktheme.setAttribute('href', url);
  }

  changeTheme(theme:string){
    const url = `./assets/css/colors/${theme}.css`;
    this.linktheme.setAttribute('href', url);
    localStorage.setItem('theme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme(){
    let btnTheme:string, btnThemeUrl:string;
    let links:NodeListOf<Element> = document.querySelectorAll('.selector');
    links.forEach( elem => {
      elem.classList.remove('working');
      btnTheme = elem.getAttribute('data-theme');
      btnThemeUrl =  `./assets/css/colors/${btnTheme}.css`;
      if(btnThemeUrl === this.linktheme.getAttribute('href')) elem.classList.add('working');
    })
  }
}
