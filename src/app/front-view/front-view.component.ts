import {Component, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-front-view',
  templateUrl: './front-view.component.html',
  styleUrls: ['./front-view.component.css', '../app.component.css']
})
export class FrontViewComponent implements OnInit, OnDestroy {
  selected = false;
  side: string;
  option: string;

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.option = '';
    if(this.svgService.frontSvg) {
      document.getElementById('Layer_1').parentNode.replaceChild(this.svgService.frontSvg, document.getElementById('Layer_1'));
    }
  }

  ngOnDestroy() {
    this.svgService.frontSvg = document.getElementById('Layer_1');
    this.exitSelect();

  }

  openText() {
    this.option = 'text';
  }

  selectRight() {
    this.selected = true;
    this.side = 'right';
    document.getElementById('top-right-box-outside').classList.add('active-path');
    document.getElementById('top-right-box-inside').classList.add('active-path');
  }

  selectLeft() {
    this.selected = true;
    this.side = 'left';
    document.getElementById('top-left-box-outside').classList.add('active-path');
    document.getElementById('top-left-box-inside').classList.add('active-path');
  }

  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        var file = <FileReader>event.target;
        let imageUrl = file.result;
        this.svgService.setImageFront(this.side, imageUrl);
        this.exitSelect();
      }
    }
  }

  exitSelect() {
    this.selected = false;
    if(this.side === 'right') {
      document.getElementById('top-right-box-outside').classList.remove('active-path');
      document.getElementById('top-right-box-inside').classList.remove('active-path');
    } else if(this.side === 'left') {
      document.getElementById('top-left-box-outside').classList.remove('active-path');
      document.getElementById('top-left-box-inside').classList.remove('active-path');
    }
    this.side = '';
  }

}
