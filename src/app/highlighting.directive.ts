import { Directive,ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlighting]'
})
export class HighlightingDirective {

  // constructor() { }


  constructor(private elem:ElementRef){
    this.elem.nativeElement.style.textDecoration='backgroundcolor:blue';
  }

}
