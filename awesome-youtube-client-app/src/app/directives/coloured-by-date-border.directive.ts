import { Directive, ElementRef, Input, OnInit } from '@angular/core';

import { Colour } from './dateColoursEnum.model';

@Directive({
  selector: '[appColouredByDateBorder]',
  standalone: true,
})
export class ColouredByDateBorderDirective implements OnInit {
  today = new Date();
  borderStyleParams = '10px solid ';

  @Input() appColouredByDateBorder = '';

  constructor(public elem: ElementRef) {}

  ngOnInit(): string {
    this.elem.nativeElement.style.borderBottom = `${this.borderStyleParams + this.getColor()}`;
    return this.elem.nativeElement.style.borderBottom;
  }

  getDifferenceInTime(dateOne: Date, dateTwo: string) {
    return Math.round(
      (dateOne.getTime() - new Date(dateTwo).getTime()) / (1000 * 3600 * 24)
    );
  }

  getColor(): string {
    const timeDifference = this.getDifferenceInTime(
      this.today,
      this.appColouredByDateBorder
    );
    if (timeDifference >= 180) {
      return Colour.RED;
    }
    if (timeDifference >= 30) {
      return Colour.YELLOW;
    }
    if (timeDifference >= 7) {
      return Colour.GREEN;
    }
    return Colour.BLUE;
  }
}
