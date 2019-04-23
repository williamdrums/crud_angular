import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  submetido: boolean = false;
  loginInvalido: boolean = false;


  constructor(private formBuild: FormBuilder, private rota: Router) { }

  onSubmit() {
    this.submetido = true;
    // if (this.loginForm.invalid) {
    //   return;
    // }
    if (this.loginForm.controls.email.value == 'williandrums@gmail.com' && this.loginForm.controls.senha.value == '12345') {
      this.rota.navigate(['lista-usuario']);

    } else {
      this.loginInvalido = true;
    }

  }

  ngOnInit() {
    this.loginForm = this.formBuild.group({
      email: ['', Validators.required],
      senha: ['', Validators.required]
    });
  }

}
