import { Component, OnInit } from '@angular/core';
import loginForm from './login.form';
import { Form } from '../../mms-common/models/form';
import { transition, trigger, useAnimation } from '@angular/animations';
import { fadeIn } from 'ng-animate';
import { AuthenticationService } from 'src/app/Auths/service/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [
    trigger('fadeIn', [
      transition(
        '* => *',
        useAnimation(fadeIn, {
          params: { timing: 1000, delay: 2000 },
        })
      ),
    ]),
  ],
})
export class LoginComponent implements OnInit {
  form!: Form;
  formComponent: any;
  constructor( private authicationService: AuthenticationService, private router: Router) {}

  ngOnInit(): void {
    this.form = loginForm;
  }

  onSubmit(event: any) {
    console.log(event);

    this.authicationService.login(event).subscribe(
      (authenticationResponse) => {
        this.authicationService.saveToken(authenticationResponse);
        this.router.navigate(['/']);
      },
      // error handler
      (error) => (
        console.log('incorrect credential')
          )
  );
  }
}
