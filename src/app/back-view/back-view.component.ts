import {Component, OnDestroy, OnInit} from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-back-view',
  templateUrl: './back-view.component.html',
  styleUrls: ['./back-view.component.css', '../app.component.css']
})
export class BackViewComponent implements OnInit, OnDestroy {
  public areaToEdit;

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.areaToEdit = '';
    if(this.svgService.backSvg) {
      document.getElementById('Back-SVG').parentNode.replaceChild(this.svgService.backSvg, document.getElementById('Back-SVG'));
    }
  }

  ngOnDestroy() {
    this.svgService.backSvg = document.getElementById('Back-SVG');
  }

  uploadImage(event) {
    if (event.target.files && event.target.files[0]) {
      var reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (event) => {
        var file = <FileReader>event.target;
        let imageUrl = file.result;
        this.svgService.setImageBack(imageUrl);
      }
    }
  }

  outlineBox(areaToEdit) {
    this.areaToEdit = areaToEdit;
    if(this.areaToEdit === 'center') {
      document.getElementById('back-center-box-outside').classList.add('active-path');
      document.getElementById('back-center-box-inside').classList.add('active-path');
    } else if(this.areaToEdit === 'top') {
      document.getElementById('back-top-box-outside').classList.add('active-path');
      document.getElementById('back-top-box-inside').classList.add('active-path');
    } else if(this.areaToEdit === 'bottom') {
      document.getElementById('back-bottom-box-outside').classList.add('active-path');
      document.getElementById('back-bottom-box-inside').classList.add('active-path');
    }

  }

  clearAreaToEdit() {
    if(this.areaToEdit === 'center') {
      document.getElementById('back-center-box-outside').classList.remove('active-path');
      document.getElementById('back-center-box-inside').classList.remove('active-path');
    } else if(this.areaToEdit === 'top') {
      document.getElementById('back-top-box-outside').classList.remove('active-path');
      document.getElementById('back-top-box-inside').classList.remove('active-path');
    } else if(this.areaToEdit === 'bottom') {
      document.getElementById('back-bottom-box-outside').classList.remove('active-path');
      document.getElementById('back-bottom-box-inside').classList.remove('active-path');
    }
    this.areaToEdit = '';
  }

}
