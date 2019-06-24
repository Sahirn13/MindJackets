import { Component, OnInit } from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-inside',
  templateUrl: './inside.component.html',
  styleUrls: ['./inside.component.css', '../app.component.css']
})
export class InsideComponent implements OnInit {

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.svgService.applyColors()
  }

}
