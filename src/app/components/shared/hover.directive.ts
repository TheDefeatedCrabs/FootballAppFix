import { Directive, ElementRef, Renderer, Input, HostListener, } from '@angular/core';


@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

   @Input()
  hoverClass: string;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer
  ) { }

  @HostListener('mouseover') mouseover() {
    this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, true);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseout') mouseout() {
    this.renderer.setElementClass(this.elementRef.nativeElement, this.hoverClass, false);
    this.renderer.setElementStyle(this.elementRef.nativeElement, 'backgroundColor', 'white');
  }


}
