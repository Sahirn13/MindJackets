import { Component, OnInit } from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-right',
  templateUrl: './right.component.html',
  styleUrls: ['./right.component.css', '../app.component.css']
})
export class RightComponent implements OnInit {

  constructor(private svgService:SvgService) { }

  ngOnInit() {
    this.svgService.applyColors();
  }

}
