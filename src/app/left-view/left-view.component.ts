import {Component, OnDestroy, OnInit} from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-left-view',
  templateUrl: './left-view.component.html',
  styleUrls: ['./left-view.component.css', '../app.component.css']
})
export class LeftViewComponent implements OnInit, OnDestroy {
  public optionSelected;

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.optionSelected = '';
    if(this.svgService.leftSvg) {
      document.getElementById('Left-SVG').parentNode.replaceChild(this.svgService.leftSvg, document.getElementById('Left-SVG'));
    }
  }

  ngOnDestroy() {
    this.svgService.leftSvg = document.getElementById('Left-SVG');
  }

  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        var file = <FileReader>event.target;
        let imageUrl = file.result;
        this.svgService.setImageLeftSleeve(imageUrl);
      }
    }
  }

}
