import {Component, OnDestroy, OnInit} from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-inner-view',
  templateUrl: './inner-view.component.html',
  styleUrls: ['./inner-view.component.css']
})
export class InnerViewComponent implements OnInit, OnDestroy {

  constructor(private svgService: SvgService) { }

  ngOnInit() {
      if(this.svgService.innerSvg) {
          document.getElementById('Inner-SVG').parentNode.replaceChild(this.svgService.innerSvg, document.getElementById('Inner-SVG'));
      }
  }

  ngOnDestroy() {
      this.svgService.innerSvg = document.getElementById('Inner-SVG');
  }

}
