import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // const promesa = new Promise((res, reject)=>{
    //   if(false) res('Hola mundo');
    // });
    
    // promesa.then(res=>{
    //   console.log('res', res);
    // }).catch((reject)=>{
    //   reject('Algo salio mal');
    // });

    // console.log('Fin del init');

    this.getUsuarios()
    .then(console.log);
  }

  getUsuarios(){
    return new Promise(res => {
      fetch('https://reqres.in/api/users')
      .then(res => res.json())
      .then(body => res(body.data));
    });
  }

}
