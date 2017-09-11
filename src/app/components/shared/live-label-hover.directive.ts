import { Directive, ElementRef, Renderer2, HostListener, } from '@angular/core';

@Directive({
  selector: '[appLiveLabelHover]'
})

export class LiveLabelHoverDirective {
  private labelSpan;

  constructor(
    public elementRef: ElementRef,
    private renderer: Renderer2
  ) { }

  @HostListener('mouseover') mouseover() {
    if (this.isLiveMatchElement()) {
        this.labelSpan = this.renderer.createElement('h4');
        const labelText = this.renderer.createText('Live!');
        this.renderer.appendChild(this.labelSpan, labelText);
        this.renderer.addClass(this.labelSpan, 'blinking');
        this.renderer.appendChild(this.elementRef.nativeElement, this.labelSpan);
      }
  }

  @HostListener('mouseout') mouseout() {
    if (this.isLiveMatchElement()) {
      this.renderer.removeChild(this.elementRef.nativeElement, this.labelSpan);
    }
  }

  isLiveMatchElement(): boolean {
    return this.elementRef.nativeElement.children[4].innerText !== 'Pending' &&
      this.elementRef.nativeElement.children[4].innerText !== 'Full-Time' &&
      this.elementRef.nativeElement.children[4].innerText !== 'Abandoned' &&
      this.elementRef.nativeElement.children[4].innerText !== 'Postponed';
  }

}
