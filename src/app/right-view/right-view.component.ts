import {Component, OnDestroy, OnInit} from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-right-view',
  templateUrl: './right-view.component.html',
  styleUrls: ['./right-view.component.css', '../app.component.css']
})
export class RightViewComponent implements OnInit, OnDestroy {
  public optionSelected;

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.optionSelected = '';
    if(this.svgService.rightSvg) {
      document.getElementById('Right-SVG').parentNode.replaceChild(this.svgService.rightSvg, document.getElementById('Right-SVG'));
    }
  }

  ngOnDestroy() {
    this.svgService.rightSvg = document.getElementById('Right-SVG');
  }

  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        var file = <FileReader>event.target;
        let imageUrl = file.result;
        this.svgService.setImageRightSleeve(imageUrl);
      }
    }
  }

}
