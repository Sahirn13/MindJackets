import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {colorList} from './color-picker.constants';
import {ActivatedRoute} from '@angular/router';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css', '../app.component.css']
})
export class ColorPickerComponent implements OnInit {
  colors = colorList.list;
  selectedColor: string;
  @Input() part: string;

  constructor(private svgService:SvgService) { }

  ngOnInit() {
  }

  colorSelected(color: any) {
    this.selectedColor = color;
    let className: string;
    if(this.part === 'inner') {
      className = 'inner-jacket-body';
    } else {
      className = 'jacket-' + this.part;
      className = className.toLowerCase().replace(' ', '-');
      if(this.part.toLowerCase() === 'pockets' || this.part.toLowerCase() === 'ribs') {
        className = className.slice(0, -1);
      }
    }
    this.svgService.setColors(className, color);
    if(this.svgService.frontSvg) {
      document.getElementById('Layer_1').parentNode.replaceChild(this.svgService.frontSvg, document.getElementById('Layer_1'));
    }
    if(this.svgService.backSvg) {
      document.getElementById('Back-SVG').parentNode.replaceChild(this.svgService.backSvg, document.getElementById('Back-SVG'));
    }
    if(this.svgService.leftSvg) {
      document.getElementById('Left-SVG').parentNode.replaceChild(this.svgService.leftSvg, document.getElementById('Left-SVG'));
    }
    if(this.svgService.rightSvg) {
      document.getElementById('Right-SVG').parentNode.replaceChild(this.svgService.rightSvg, document.getElementById('Right-SVG'));
    }
    if(this.svgService.innerSvg) {
        document.getElementById('Inner-SVG').parentNode.replaceChild(this.svgService.innerSvg, document.getElementById('Inner-SVG'));
    }
  }

}
