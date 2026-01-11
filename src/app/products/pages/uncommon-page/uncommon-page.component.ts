import { Component } from '@angular/core';
import { rejects } from 'assert';
import { resolve } from 'path';
import { interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n select
  public name: string = 'Adriana';
  public gender: 'male' | 'female' = 'female';
  public invitationMap = {
    'male': 'invitarlo',
    'female': 'invitarla'
  }

  changerClient():void{
    this.name = 'Martin'
    this.gender = 'male'
  }

  //i18n plural

  public clients: string[] = ['Maria', 'Pedro', 'Fernando', 'Hernando', 'Eduardo', 'Melissa'];
  clientsMap = {
    '=0': 'No tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift()
  }

  //keyValue pipe
  public person = {
    nombre: 'Fernando',
    edad: 36,
    direccion:' Moron, BsAs'
  }

  //Async Pipe

  public promiseValue: Promise<string> = new Promise((resolve, reject)=>{
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
    }, 3500);
  })


}
