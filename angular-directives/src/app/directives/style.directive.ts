import {
  Directive,
  ElementRef,
  Renderer2,
  HostListener,
  Input,
  HostBinding
} from '@angular/core';

@Directive({ selector: '[appStyle]' })
export class StyleDirective {
  constructor(private el: ElementRef, private r: Renderer2) {}

  @Input('appStyle') color: string = 'blue';
  @Input() dStyles: {
    fontStyle?: string;
    border?: string;
    borderRadius?: string;
  };

  @HostBinding('style.color') elColor = null;
  @HostListener('click', ['$event.target'])
  onClick(event: Event) {
    console.log(event);
  }

  @HostListener('mouseenter') onEnter() {
    this.elColor = this.color;
    // this.r.setStyle(this.el.nativeElement, 'color', this.color);
    // this.r.setStyle(this.el.nativeElement, 'fontStyle', this.dStyles.fontStyle);
    // this.r.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);
  }

  @HostListener('mouseleave') onLeave() {
    this.elColor = null;
    // this.r.setStyle(this.el.nativeElement, 'color', null);
    // this.r.setStyle(this.el.nativeElement, 'fontStyle', null);
    // this.r.setStyle(this.el.nativeElement, 'border', null);
    // this.r.setStyle(this.el.nativeElement, 'borderRadius', null);
  }
}
