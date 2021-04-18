import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Creds } from '../state/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form: FormGroup;

  constructor(private readonly fb: FormBuilder, private readonly router: Router, private readonly authService: AuthService,) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this.fb.group({
      email: ['test@email.com', [ Validators.required, Validators.email ]],
      password: ['test', [ Validators.required ]]
    });
  }

  handleSubmit() {
    if (this.form.valid) {
      this.authService.login(this.form.value as Creds)
        .subscribe({
          next: () => {
            this.router.navigate(['/']);
          },
          error: () => {

          }
        })
    }
  }

}
