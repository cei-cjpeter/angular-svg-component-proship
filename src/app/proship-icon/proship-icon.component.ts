import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-proship-icon',
  templateUrl: './proship-icon.component.svg',
  styleUrls: ['./proship-icon.component.css'],
})
export class ProshipIconComponent implements OnInit {
  @Input() thickness = 5;

  viewPortSize = 32;
  path: string;
  constructor() {}

  ngOnInit() {
    const radius = this.thickness / 2;
    const midLength = this.viewPortSize / 2;
    const sqrtTwo = Math.sqrt(2);
    const y1 = (sqrtTwo * midLength - radius) / sqrtTwo;
    const x1 = midLength - y1;
    console.log(x1, y1);
    this.path = `
      M ${this.viewPortSize / 2},${this.thickness}
      L ${this.thickness},${this.viewPortSize / 2}
      L 18,${this.viewPortSize - this.thickness / 2}
      L ${this.viewPortSize / 2},${this.viewPortSize}
      L ${x1},${this.viewPortSize - y1}
      A ${radius},${radius} 0 0,1 ${x1},${y1}
      L ${y1},${x1}
      A ${radius},${radius} 0 0,1 ${this.viewPortSize - y1},${x1}
      L ${this.viewPortSize - x1},${y1}
      A ${radius},${radius} 0 0,1 ${this.viewPortSize - x1},${
      this.viewPortSize - y1
    }
      L 21.5,26.5
      A ${radius / 2},${radius / 2} 0 0,1 20,24
      L ${this.viewPortSize - this.thickness},${this.viewPortSize / 2}
      Z`;
  }
}
