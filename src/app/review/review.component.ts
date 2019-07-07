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
  public inner: any;

  public frontUrl: any;
  public backUrl: any;
  public leftUrl: any;
  public rightUrl: any;
  public innerUrl: any;
  @Output() done = new EventEmitter<any>();

  constructor(private svgService: SvgService, private dialog: MatDialog) { }

  ngOnInit() {
    this.front = document.createElement("canvas");
    this.back = document.createElement("canvas");
    this.left = document.createElement("canvas");
    this.right = document.createElement("canvas");
    this.inner = document.createElement("canvas");

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
    if(this.svgService.innerSvg) {
      document.getElementById('Inner-SVG').parentNode.replaceChild(this.svgService.innerSvg, document.getElementById('Inner-SVG'));
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
    if(this.svgService.innerImage === undefined) {
      this.svgService.createInnerImage();
    }
    //this.createFrontCanvas();
    //this.createBackCanvas();
    //this.createRightCanvas();
    //this.createLeftCanvas();
    //this.createInnerCanvas();
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      frontUrl: this.svgService.frontImage.src,
      backUrl: this.svgService.backImage.src,
      leftUrl: this.svgService.leftImage.src,
      rightUrl: this.svgService.rightImage.src,
      innerUrl: this.svgService.innerImage.src
    }
    this.dialog.open(ReviewFormComponent, dialogConfig);
  }

  private createFrontCanvas() {
    this.front.width = this.svgService.frontImage.width * 2;
    this.front.height = this.svgService.frontImage.height * 2;
    (this.front as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.frontImage, this.front.width / 2 - this.svgService.frontImage.width * 2 / 2,
      this.front.height / 2 - this.svgService.frontImage.height * 2 / 2);
    this.frontUrl = this.front.toDataURL();
  }

  private createBackCanvas() {
    this.back.width = this.svgService.backImage.width * 2;
    this.back.height = this.svgService.backImage.height * 2;
    (this.back as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.backImage, this.back.width / 2 - this.svgService.backImage.width * 2 / 2,
      this.back.height / 2 - this.svgService.backImage.height * 2 / 2);
    this.backUrl = this.back.toDataURL();
  }

  private createLeftCanvas() {
    this.left.width = this.svgService.leftImage.width * 2;
    this.left.height = this.svgService.leftImage.height * 2;
    (this.left as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.leftImage, this.left.width / 2 - this.svgService.leftImage.width * 2 / 2,
      this.left.height / 2 - this.svgService.leftImage.height * 2 / 2);
    this.leftUrl = this.left.toDataURL();
  }

  private createRightCanvas() {
    this.right.width = this.svgService.rightImage.width * 2;
    this.right.height = this.svgService.rightImage.height * 2;
    (this.right as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.rightImage, this.right.width / 2 - this.svgService.rightImage.width * 2 / 2,
      this.right.height / 2 - this.svgService.rightImage.height * 2 / 2);
    this.rightUrl = this.right.toDataURL();
  }

  /*
  private createInnerCanvas() {
    this.inner.width = this.svgService.innerImage.width * 2;
    this.inner.height = this.svgService.innerImage.height * 2;
    (this.inner as HTMLCanvasElement).getContext('2d').drawImage(this.svgService.innerImage, this.inner.width / 2 - this.svgService.innerImage.width * 2 / 2,
        this.inner.height / 2 - this.svgService.innerImage.height * 2 / 2);
    this.innerUrl = this.inner.toDataURL();
    console.log(this.svgService.innerImage.src);
  }
  */
}
