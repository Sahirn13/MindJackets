import {Component, OnInit, Input, Output, EventEmitter, OnDestroy} from '@angular/core';
import {fontList} from './add-text.constants';
import {SvgService} from '../svg.service';
import {colorList} from '../color-picker/color-picker.constants';

@Component({
  selector: 'app-add-text',
  templateUrl: './add-text.component.html',
  styleUrls: ['./add-text.component.css', '../app.component.css']
})
export class AddTextComponent implements OnInit, OnDestroy {
  public fonts = fontList.list.sort();
  public colors = colorList.list;
  public userText;
  public selectedFont;
  public fontSize;
  public el;
  public fontColor;
  @Input() textArea: string;
  @Output() done = new EventEmitter<any>();

  constructor(private svgService: SvgService) { }

  ngOnInit() {
    this.svgService.setText(this.textArea);
    this.el = document.getElementById(this.textArea + '-text');
    this.fontSize = '40';
    this.el.setAttribute('font-size', this.fontSize);
    this.selectedFont = this.fonts[0];
    this.el.setAttribute('style', 'font-family: ' + this.selectedFont + ';');
    this.el.setAttribute('text-anchor', 'middle');
  }


  ngOnDestroy() {
    if(this.textArea.includes('front')) {
      this.svgService.createFrontImage();
    } else if(this.textArea.includes('back')) {
      this.svgService.createBackImage();
    } else if(this.textArea.includes('left-sleeve')) {
      this.svgService.createLeftSleeveImage();
    } else {
      this.svgService.createRightSleeveImage();
    }
  }

  changeText($event) {
    this.el.textContent = this.userText;
  }

  changeFont($event: any, font: any) {
    if($event.isUserInput) {
      this.selectedFont = $event.source.value;
      this.el.setAttribute('style', 'font-family: ' + this.selectedFont + ';');
    }
  }

  increaseSize() {
    this.fontSize++;
    this.el.setAttribute('font-size', this.fontSize);
  }

  reduceSize() {
    this.fontSize--;
    this.el.setAttribute('font-size', this.fontSize);
  }

  setFontColor(color: any) {
    this.fontColor = color;
    this.el.setAttribute('fill', this.fontColor);
  }

  clear() {
    this.userText = '';
    this.el.textContent = this.userText;
  }

  exit() {
    this.done.emit(true);
  }

}
