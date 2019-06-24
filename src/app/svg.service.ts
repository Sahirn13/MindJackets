import { Injectable } from '@angular/core';
import {text} from '@angular/core/src/render3';

@Injectable()
export class SvgService {
  public colorMap = new Map();
  public frontRight: any;
  public frontLeft: any;
  public backImg: any;
  public leftSleeveImage: any;
  public rightSleeveImage: any;

  public frontSvg: any;
  public backSvg: any;
  public leftSvg: any;
  public rightSvg: any;
  public innerSvg: any;

  public frontImage: any;
  public backImage: any;
  public rightImage: any;
  public leftImage: any;
  public innerImage: any;

  constructor(private serializer: XMLSerializer) {}

  setColors(classname: string, color: string) {
    this.colorMap.set(classname, color);
    this.applyColors();
  }

  createFrontImage() {
    let img = document.createElement('img');
    let xml = this.serializer.serializeToString(document.getElementById('Layer_1'));
    img.src = this.convertToB64(xml);
    img.height = document.getElementById('Layer_1').clientHeight / 2;
    img.width = document.getElementById('Layer_1').clientWidth / 2;
    this.frontImage = img;
  }

  createBackImage() {
    let img = document.createElement('img');
    let xml = this.serializer.serializeToString(document.getElementById('Back-SVG'));
    img.src = this.convertToB64(xml);
    img.height = document.getElementById('Back-SVG').clientHeight / 2;
    img.width = document.getElementById('Back-SVG').clientWidth / 2;
    this.backImage = img;
  }

  createRightSleeveImage() {
    let img = document.createElement('img');
    let xml = this.serializer.serializeToString(document.getElementById('Right-SVG'));
    img.src = this.convertToB64(xml);
    img.height = document.getElementById('Right-SVG').clientHeight / 2;
    img.width = document.getElementById('Right-SVG').clientWidth / 2;
    this.rightImage = img;
  }

  createLeftSleeveImage() {
    let img = document.createElement('img');
    let xml = this.serializer.serializeToString(document.getElementById('Left-SVG'));
    img.src = this.convertToB64(xml);
    img.height = document.getElementById('Left-SVG').clientHeight / 2;
    img.width = document.getElementById('Left-SVG').clientWidth / 2;
    this.leftImage = img;
  }

  convertToB64(item: string): string {
    let svg64 = btoa(item);
    let b64Start = 'data:image/svg+xml;base64,';
    let image64 = b64Start + svg64;
    return image64;
  }

  applyColors() {
    let colorMapKeys = Array.from(this.colorMap.keys());
    for (let classname of colorMapKeys) {
      let elements: any = document.getElementsByClassName(classname);
      for (let element of elements) {
        element.style.fill = this.colorMap.get(classname);
      }
    }
  }

  setImageFront(side: any, imageUrl: any) {
    if(side === 'right') {
      this.frontRight = imageUrl;
    } else if(side === 'left') {
      this.frontLeft = imageUrl;
    }
    this.applyImageFront();
  }

  private applyImageFront() {
    if(this.frontRight) {
      let rightElement = this.createImageElement('front-right-image');
      rightElement.setAttribute('x', '323.6');
      rightElement.setAttribute('y', '153.1');
      rightElement.children[0].setAttribute('href', this.frontRight);
      if(document.getElementById('front-right-text')) {
        document.getElementById('front-right-parent').replaceChild(rightElement,
          document.getElementById('front-right-text'));
      } else if(document.getElementById('front-right-image')) {
        document.getElementById('front-right-parent').replaceChild(rightElement,
          document.getElementById('front-right-image'));
      } else {
        document.getElementById('front-right-parent').appendChild(rightElement);
      }
    }
    if(this.frontLeft) {
      let leftElement = this.createImageElement('front-left-image');
      leftElement.setAttribute('x', '147.6');
      leftElement.setAttribute('y', '153.1');
      leftElement.children[0].setAttribute('href', this.frontLeft);
      if(document.getElementById('front-left-text')) {
        document.getElementById('front-left-parent').replaceChild(leftElement,
          document.getElementById('front-left-text'));
      } else if(document.getElementById('front-left-image')) {
        document.getElementById('front-left-parent').replaceChild(leftElement,
          document.getElementById('front-left-image'));
      } else {
        document.getElementById('front-left-parent').appendChild(leftElement);
      }
    }

    //For creating front png
    this.createFrontImage();
  }

  setText(side: any) {
    if(side === 'front-right') {
      let rightElement = this.createTextElement('front-right-text');
      rightElement.setAttribute('x', '380');
      rightElement.setAttribute('y', '220');
      if(document.getElementById('front-right-image')) {
        document.getElementById('front-right-parent').replaceChild(rightElement,
          document.getElementById('front-right-image'));
      } else if(document.getElementById('front-right-artwork')) {
        document.getElementById('front-right-parent').replaceChild(rightElement,
          document.getElementById('front-right-artwork'));
      } else {
        document.getElementById('front-right-parent').appendChild(rightElement);
      }
    } else if(side === 'front-left') {
        let leftElement = this.createTextElement('front-left-text');
        leftElement.setAttribute('x', '200');
        leftElement.setAttribute('y', '220');
        if(document.getElementById('front-left-image')) {
          document.getElementById('front-left-parent').replaceChild(leftElement,
            document.getElementById('front-left-image'));
        } else if(document.getElementById('front-left-artwork')) {
          document.getElementById('front-left-parent').replaceChild(leftElement,
            document.getElementById('front-left-artwork'));
        } else {
          document.getElementById('front-left-parent').appendChild(leftElement);
        }
    } else if(side === 'left-sleeve') {
      let leftSleeveElement = this.createTextElement('left-sleeve-text');
      leftSleeveElement.setAttribute('x', '185');
      leftSleeveElement.setAttribute('y', '215');
      if(document.getElementById('left-sleeve-image')) {
        document.getElementById('left-sleeve-parent').replaceChild(leftSleeveElement,
          document.getElementById('left-sleeve-image'));
      } else if(document.getElementById('left-sleeve-artwork')) {
        document.getElementById('left-sleeve-parent').replaceChild(leftSleeveElement,
          document.getElementById('left-sleeve-artwork'));
      } else {
        document.getElementById('left-sleeve-parent').appendChild(leftSleeveElement);
      }
    } else if(side === 'right-sleeve') {
      let rightSleeveElement = this.createTextElement('right-sleeve-text');
      rightSleeveElement.setAttribute('x', '50');
      rightSleeveElement.setAttribute('y', '215');
      if(document.getElementById('right-sleeve-image')) {
        document.getElementById('right-sleeve-parent').replaceChild(rightSleeveElement,
          document.getElementById('right-sleeve-image'));
      } else if(document.getElementById('right-sleeve-artwork')) {
        document.getElementById('right-sleeve-parent').replaceChild(rightSleeveElement,
          document.getElementById('right-sleeve-artwork'));
      } else {
        document.getElementById('right-sleeve-parent').appendChild(rightSleeveElement);
      }
    }
  }

  setImageBack(imageUrl: any) {
    this.backImg = imageUrl;
    let newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('height', '166');
    newElement.setAttribute('width', '267.9');
    newElement.setAttribute('viewBox', '0 0 256 256');
    newElement.setAttribute('id', 'back-center-image');
    newElement.setAttribute('x', '155.8');
    newElement.setAttribute('y', '204.3');
    let imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imageElement.setAttribute('height', '256');
    imageElement.setAttribute('width', '256');
    imageElement.setAttribute('x', '0');
    imageElement.setAttribute('y', '0');
    imageElement.setAttribute('href', this.backImg);
    newElement.appendChild(imageElement);
    if(document.getElementById('back-center-image')) {
      document.getElementById('back-center-parent-id').replaceChild(newElement, document.getElementById('back-center-image'));
    } else {
      document.getElementById('back-center-parent-id').appendChild(newElement);
    }


    //For creating back png
    this.createBackImage();
  }

  setImageLeftSleeve(imageUrl: any) {
    this.leftSleeveImage = imageUrl;
    let newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('height', '139');
    newElement.setAttribute('width', '80');
    newElement.setAttribute('viewBox', '0 0 256 256');
    newElement.setAttribute('id', 'left-sleeve-image');
    newElement.setAttribute('x', '146.5');
    newElement.setAttribute('y', '131.8');
    let imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imageElement.setAttribute('height', '256');
    imageElement.setAttribute('width', '256');
    imageElement.setAttribute('x', '0');
    imageElement.setAttribute('y', '0');
    imageElement.setAttribute('href', this.leftSleeveImage);
    newElement.appendChild(imageElement);
    if(document.getElementById('left-sleeve-text')) {
      document.getElementById('left-sleeve-parent').replaceChild(newElement,
        document.getElementById('left-sleeve-text'));
    } else if(document.getElementById('left-sleeve-image')) {
      document.getElementById('left-sleeve-parent').replaceChild(newElement,
        document.getElementById('left-sleeve-image'));
    } else {
      document.getElementById('left-sleeve-parent').appendChild(newElement);
    }

    //Create left sleeve png
    this.createLeftSleeveImage();
  }

  setImageRightSleeve(imageUrl: any) {
    this.rightSleeveImage = imageUrl;
    let newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('height', '139');
    newElement.setAttribute('width', '80');
    newElement.setAttribute('viewBox', '0 0 256 256');
    newElement.setAttribute('id', 'right-sleeve-image');
    newElement.setAttribute('x', '12.3');
    newElement.setAttribute('y', '131.5');
    let imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imageElement.setAttribute('height', '256');
    imageElement.setAttribute('width', '256');
    imageElement.setAttribute('x', '0');
    imageElement.setAttribute('y', '0');
    imageElement.setAttribute('href', this.rightSleeveImage);
    newElement.appendChild(imageElement);
    if(document.getElementById('right-sleeve-text')) {
      document.getElementById('right-sleeve-parent').replaceChild(newElement,
        document.getElementById('right-sleeve-text'));
    } else if(document.getElementById('right-sleeve-image')) {
      document.getElementById('right-sleeve-parent').replaceChild(newElement,
        document.getElementById('right-sleeve-image'));
    } else {
      document.getElementById('right-sleeve-parent').appendChild(newElement);
    }

    //Create right sleeve png
    this.createRightSleeveImage();
  }

  private createImageElement(id: string): any {
    let newElement = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    newElement.setAttribute('height', '108');
    newElement.setAttribute('width', '107.2');
    newElement.setAttribute('viewBox', '0 0 256 256');
    newElement.setAttribute('id', id);
    let imageElement = document.createElementNS('http://www.w3.org/2000/svg', 'image');
    imageElement.setAttribute('height', '256');
    imageElement.setAttribute('width', '256');
    newElement.appendChild(imageElement);
    return newElement;
  }

  private createTextElement(id: string): any {
    let textElement = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    textElement.setAttribute('id', id);
    return textElement;
  }
}
