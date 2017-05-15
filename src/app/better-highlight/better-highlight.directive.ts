import {Directive, ElementRef, HostListener, OnInit, Renderer} from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer) {}

  ngOnInit() {
    // this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseenter') mouseover(enentData: Event) {
    this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
  }

  @HostListener('mouseleave') mouseleave(enentData: Event) {
    this.renderer.setElementStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
  }

}
