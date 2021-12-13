import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proship-icon',
  templateUrl: './proship-icon.component.svg',
  styleUrls: ['./proship-icon.component.css'],
})
export class ProshipIconComponent implements OnInit {
  @Input() thickness = 3;

  viewPortSize = 32;
  path: string;
  constructor() {}

  ngOnInit() {
    const radius = this.thickness / 2;
    const midLength = this.viewPortSize / 2;
    const sqrtTwo = Math.sqrt(2);
    const y1 = (sqrtTwo * midLength - radius) / sqrtTwo;
    const x1 = midLength - y1;
    const gap = this.thickness * 2.5;
    this.path = `
      M ${this.viewPortSize / 2},${this.thickness * sqrtTwo}
      L ${this.thickness * sqrtTwo},${this.viewPortSize / 2}
      L ${this.thickness / sqrtTwo + midLength},${
      this.viewPortSize - this.thickness / sqrtTwo
    }
      L ${this.viewPortSize / 2},${this.viewPortSize}
      L ${x1},${this.viewPortSize - y1}
      A ${radius},${radius} 0 0,1 ${x1},${y1}
      L ${y1},${x1}
      A ${radius},${radius} 0 0,1 ${this.viewPortSize - y1},${x1}
      L ${this.viewPortSize - x1},${y1}
      A ${radius},${radius} 0 0,1 ${this.viewPortSize - x1},${
      this.viewPortSize - y1
    }
      L ${midLength + gap / sqrtTwo},${this.viewPortSize - gap / sqrtTwo}
      A ${radius},${radius} 0 0,1 ${
      midLength + (gap - this.thickness) / sqrtTwo
    },${this.viewPortSize - (gap + this.thickness) / sqrtTwo}
      L ${this.viewPortSize - this.thickness * sqrtTwo},${this.viewPortSize / 2}
      Z`;
  }
}
