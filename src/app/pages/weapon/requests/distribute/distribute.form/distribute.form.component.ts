import { HttpClient } from '@angular/common/http';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatStepper } from '@angular/material/stepper';
import { concat, Observable, zip } from 'rxjs';
import { catchError, concatAll, mergeMap, tap } from 'rxjs/operators';
import { Form } from 'src/app/mms-common/models/form';
import { FormComponent } from 'src/app/mms-common/organisms/form/form.component';
import { ActionType } from 'src/app/mms-common/organisms/table/table.component';
import distributeForm from '../../../inventory/forms/distribute.form';

interface Steps {
  isCompleted: boolean;
  submitUrl: string;
  submitFunction: (formData: any) => Observable<any>;
  response: any;
}
@Component({
  selector: 'app-distribute.form',
  templateUrl: './distribute.form.component.html',
  styleUrls: ['./distribute.form.component.scss'],
})
export class DistributeFormComponent implements OnInit {
  userRegistrationForm: Form = distributeForm.userForm;
  distributeForm: Form = distributeForm.distributeForm;
  data: any;
  constructor(
    @Inject(MAT_DIALOG_DATA) public inputData: any,
    private dialogRef: MatDialogRef<DistributeFormComponent>,
    private http: HttpClient
  ) {
    console.log('inputData', inputData);
    this.data = inputData;
  }

  ngOnInit(): void {}

  onSubmit(formData: any) {
    console.log(formData);
  }

  submitDistributeForm(value: any) {}

  isCompleted(form: FormGroup) {
    return form ? form.valid : false;
  }
}
