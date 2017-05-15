import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  constructor(private elRef: ElementRef, private renderer: Renderer) {
  }

  ngOnInit() {
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseenter') mouseover(enentData: Event) {
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave(enentData: Event) {
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.backgroundColor = 'transparent';
  }

}
