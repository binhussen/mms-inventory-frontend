import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Form } from 'src/app/mms-common/models/form';
import profileForm from './profile.form';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private router: Router) { }
  form!: Form;
  ngOnInit(): void {
    this.form = profileForm;
  }
onClose(){
  this.router.navigate(['admin/dashboard']);
}
onSubmit(event: any) {
  console.log(event);
}
}
