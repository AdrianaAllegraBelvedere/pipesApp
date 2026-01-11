import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly'
})

export class canFly implements PipeTransform {
  transform(value: boolean) {
    return (value) ? 'Puede volar' : 'No puede volar';
  }
}
