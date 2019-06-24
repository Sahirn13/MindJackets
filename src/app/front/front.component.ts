import { Component, OnInit } from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.css', '../app.component.css']
})
export class FrontComponent implements OnInit {

  constructor(private svgService:SvgService) { }

  ngOnInit() {
    this.svgService.applyColors();
  }

}
