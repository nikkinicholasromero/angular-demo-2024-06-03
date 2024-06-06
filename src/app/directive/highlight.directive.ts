import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
  standalone: true,
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input()
  appHighlight: string = '';

  constructor(private el: ElementRef) {
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.highlight(this.appHighlight);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.highlight('');
  }

  highlight(color: string): void {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
