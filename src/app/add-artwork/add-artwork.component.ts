import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {SvgService} from '../svg.service';

@Component({
  selector: 'app-add-artwork',
  templateUrl: './add-artwork.component.html',
  styleUrls: ['./add-artwork.component.css', '../app.component.css']
})
export class AddArtworkComponent implements OnInit {
  counter: number[] = new Array(4);
  @Input() artWorkArea: any;
  @Output() done = new EventEmitter<any>();
  constructor(private svgService: SvgService, private serializer: XMLSerializer) { }

  ngOnInit() {
    for(let i = 0; i < this.counter.length; i++) {
      this.counter[i] = i + 1;
    }
  }

  addArtwork(count) {
    let image = document.getElementById('artwork-number-' + count);
    let canvas = document.createElement('canvas');
    let context = canvas.getContext('2d');
    canvas.width = 500;
    canvas.height = 500;
    context.drawImage((image as CanvasImageSource), 0, 0);
    let url = canvas.toDataURL();
    if(this.artWorkArea === 'front-right') {
      this.svgService.setImageFront('right', url);
    } else if(this.artWorkArea === 'front-left') {
      this.svgService.setImageFront('left', url);
    } else if(this.artWorkArea === 'back-center') {
      this.svgService.setImageBack(url);
    } else if(this.artWorkArea === 'left-sleeve') {
      this.svgService.setImageLeftSleeve(url);
    } else if(this.artWorkArea === 'right-sleeve') {
      this.svgService.setImageRightSleeve(url);
    }
  }

  exit() {
    this.done.emit(true);
  }
}
