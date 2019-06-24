import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SvgService} from '../svg.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';
import {ReviewFormComponent} from '../review-form/review-form.component';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css', '../app.component.css']
})
export class ReviewComponent implements OnInit {
  public front: any;
  public back: any;
  public left: any;
  public right: any;

  public frontUrl: any;
  public backUrl: any;
  public leftUrl: any;
  public rightUrl: any;
  @Output() done = new EventEmitter<any>();

  constructor(private svgService: SvgService, private dialog: MatDialog) { }

  ngOnInit() {
    this.svgService.applyColors();
    if(this.svgService.frontSvg) {
      document.getElementById('Layer_1').parentNode.replaceChild(this.svgService.frontSvg, document.getElementById('Layer_1'));
    }
    if(this.svgService.backSvg) {
      document.getElementById('Back-SVG').parentNode.replaceChild(this.svgService.backSvg, document.getElementById('Back-SVG'));
    }
    if(this.svgService.leftSvg) {
      document.getElementById('Left-SVG').parentNode.replaceChild(this.svgService.leftSvg, document.getElementById('Left-SVG'));
    }
    if(this.svgService.rightSvg) {
      document.getElementById('Right-SVG').parentNode.replaceChild(this.svgService.rightSvg, document.getElementById('Right-SVG'));
    }
  }

  goBack() {
    this.done.emit(true);
  }

  finish() {

    if(this.svgService.frontImage === undefined) {
      this.svgService.createFrontImage();
    }
    if(this.svgService.backImage === undefined) {
      this.svgService.createBackImage();
    }
    if(this.svgService.leftImage === undefined) {
      this.svgService.createLeftSleeveImage();
    }
    if(this.svgService.rightImage === undefined) {
      this.svgService.createRightSleeveImage();
    }
    this.createFrontCanvas();
    this.createBackCanvas();
    this.createRightCanvas();
    this.createLeftCanvas();
    console.log(this.frontUrl);
    console.log(this.backUrl);
    console.log(this.leftUrl);
    console.log(this.rightUrl);

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      frontUrl: this.frontUrl,
      backUrl: this.backUrl,
      leftUrl: this.leftUrl,
      rightUrl: this.rightUrl
    }

    this.dialog.open(ReviewFormComponent, dialogConfig);
  }

  private createFrontCanvas() {
    this.front = document.createElement("Canvas");
    this.front.width = this.svgService.frontImage.width * 2;
    this.front.height = this.svgService.frontImage.height * 2;
    (this.front as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.frontImage, this.front.width / 2 - this.svgService.frontImage.width * 2 / 2,
      this.front.height / 2 - this.svgService.frontImage.height * 2 / 2);
    this.frontUrl = this.front.toDataURL();
  }

  private createBackCanvas() {
    this.back = document.createElement("canvas");
    this.back.width = this.svgService.backImage.width * 2;
    this.back.height = this.svgService.backImage.height * 2;
    (this.back as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.backImage, this.back.width / 2 - this.svgService.backImage.width * 2 / 2,
      this.back.height / 2 - this.svgService.backImage.height * 2 / 2);
    this.backUrl = this.back.toDataURL();
  }

  private createLeftCanvas() {
    this.left = document.createElement("canvas");
    this.left.width = this.svgService.leftImage.width * 2;
    this.left.height = this.svgService.leftImage.height * 2;
    (this.left as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.leftImage, this.left.width / 2 - this.svgService.leftImage.width * 2 / 2,
      this.left.height / 2 - this.svgService.leftImage.height * 2 / 2);
    this.leftUrl = this.left.toDataURL();
  }

  private createRightCanvas() {
    this.right = document.createElement("canvas");
    this.right.width = this.svgService.rightImage.width * 2;
    this.right.height = this.svgService.rightImage.height * 2;
    (this.right as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.rightImage, this.right.width / 2 - this.svgService.rightImage.width * 2 / 2,
      this.right.height / 2 - this.svgService.rightImage.height * 2 / 2);
    this.rightUrl = this.right.toDataURL();
  }
}
