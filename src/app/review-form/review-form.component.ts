import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FormControl, FormControlName, FormGroup} from '@angular/forms';
import {ReviewFormService} from './review-form.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  private formGroup: FormGroup;
  private data: any;

  constructor(private dialogRef: MatDialogRef<ReviewFormComponent>, private reviewFormService: ReviewFormService,
              @Inject(MAT_DIALOG_DATA) data) {

    this.data = data;
  }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      email: new FormControl(),
      number: new FormControl()
    });
  }

  send() {
    const json = {
      name: this.formGroup.value.name,
      email: this.formGroup.value.email,
      number: this.formGroup.value.number,
      frontUrl: this.data.frontUrl,
      backUrl: this.data.backUrl,
      leftUrl: this.data.leftUrl,
      rightUrl: this.data.rightUrl,
      innerUrl: this.data.innerUrl
    };
    this.reviewFormService.postData('https://jacketsemailer.herokuapp.com/sendmail', json).subscribe(
      data => {
        console.log('email sent');
      }
    );
    this.close();
  }

  close() {
    this.dialogRef.close();
  }

}
