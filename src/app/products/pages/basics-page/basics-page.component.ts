import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-pages',
  templateUrl: './basics-page.component.html',
  styleUrl: './basics-page.component.css'
})
export class BasicsPagesComponent {
  public nameLower: string = 'adriana';
  public nameUpper: string = 'ADRIANA';
  public fullName: string = 'aDriAnA aLLegRA';

  public customDare: Date = new Date()

}
