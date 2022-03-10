import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {

  constructor(private elRef:ElementRef,private renderer:Renderer2) { }

  @Input() unhight:string='orange';
  @Input() highlight:string;

  @Input("appBetterHighlight") defaultColor:string;

  @HostBinding('style.backgroundColor') bgcolor:string='orange';

  @HostListener("mouseenter") changeToBlue(eventData:Event){
  //  this.renderer.setStyle(this.elRef.nativeElement,"background-color","blue")
  this.bgcolor=this.highlight;
  }
  @HostListener("mouseleave") changeToRed(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,"background-color","red")
    this.bgcolor=this.unhight;
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.renderer.addClass(this.elRef.nativeElement,"odd")
  }

}
