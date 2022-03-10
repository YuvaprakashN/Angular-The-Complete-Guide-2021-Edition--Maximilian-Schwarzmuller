import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]',
})
export class UnlessDirective {
  @Input('appUnless') set unless(contition: boolean) {
    if (!contition) this.viewContainerref.createEmbeddedView(this.templateRef);
    else this.viewContainerref.clear();
  }
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerref: ViewContainerRef
  ) {}
}
