import { Component, OnInit } from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.css', '../app.component.css']
})
export class BackComponent implements OnInit {

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.svgService.applyColors();
  }

}
