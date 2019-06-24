import { Component, OnInit } from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-left',
  templateUrl: './left.component.html',
  styleUrls: ['./left.component.css', '../app.component.css']
})
export class LeftComponent implements OnInit {

  constructor(private svgService:SvgService) { }

  ngOnInit() {
    this.svgService.applyColors();
  }

}
