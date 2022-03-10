import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective {

  constructor(private elementRef:ElementRef) { }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.elementRef.nativeElement.style.color='red'
    this.elementRef.nativeElement.style.backgroundColor='blue'
  }

}
