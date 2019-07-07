import {Component, OnInit} from '@angular/core';
import {SvgService} from './svg.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  areas = ['Body', 'Sleeves', 'Rib 1', 'Rib 2', 'Pockets', 'Buttons'];
  showColors: any;
  selectedPart: any;
  selectedView: string = 'color-view';
  reviewPageToggle: any;

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.reviewPageToggle = false;
  }

  openColors(area: string) {
    this.showColors = true;
    this.selectedPart = area;
  }

  selectView(view: string) {
    this.selectedView = view;
  }

  restart() {
    if(confirm("Are you sure you want to restart?")) {
      window.location.reload();
    }
  }

  toggleReview() {
    this.reviewPageToggle = true;
    this.selectedView = '';
  }

  hideFrontView(): boolean {
    return !(this.selectedView === 'color-view'
      || this.selectedView === 'front-view'
      || this.reviewPageToggle);
  }

  hideBackView(): boolean {
    return !(this.selectedView === 'back-view'
      || this.reviewPageToggle === true);
  }

  hideLeftSleeve(): boolean {
    return !(this.selectedView === 'left-view'
      || this.reviewPageToggle === true);
  }

  hideRightSleeve(): boolean {
    return !(this.selectedView === 'right-view'
      || this.reviewPageToggle === true);
  }

  hideInner(): boolean {
    return !(this.selectedView === 'inner-view'
      || this.reviewPageToggle === true);
  }

}
