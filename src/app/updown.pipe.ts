import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'updown'
})
export class UpdownPipe implements PipeTransform {

  transform(value: any): number {
    
    return null;
  }

}
