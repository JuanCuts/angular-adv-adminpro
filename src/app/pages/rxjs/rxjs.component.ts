import { Component, OnInit } from '@angular/core';
import { Observable, interval, Subscription } from 'rxjs';
import { retry, take, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
})
export class RxjsComponent implements OnInit {

  public intervalSubs:Subscription;

  constructor() {
    // this.retornaObservable()
    // .pipe(
    //   retry(1)
    // )
    // .subscribe(req => console.log('sum', req), err=>console.log('err', err), ()=>console.log('Completado'));
    this.intervalSubs = this.retornaInterval().subscribe(console.log);
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void{
    this.intervalSubs.unsubscribe();
  }

  retornaObservable(): Observable<number>{
    let i = 0;
    return new Observable<number> ( observer => {
      const intervalo = setInterval(()=>{
        i++;
        observer.next(i);
        if( i === 2){
          i = 0;
          observer.error(0);
        }
        if( i === 5){
          clearInterval(intervalo);
          observer.complete();
        }
      }, 1000)
    });
  }

  retornaInterval(): Observable<number>{
    return interval(100)
    .pipe(
      take(10),
      map(valor => valor + 1),
      filter((data)=> data % 2 == 0),
      );
  }

  

}
