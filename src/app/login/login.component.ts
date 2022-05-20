import { Component, OnInit } from '@angular/core';
import {AppConfig} from "../model/app-config";
import {Subscription} from "rxjs";
import {AppConfigService} from "../service/app-config.service";
import {AuthService} from "../service/auth/auth.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginDto} from "../model/LoginDto";
import {TokenService} from "../service/token.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup
  submitted = false;
  config: AppConfig;
  loginForm: LoginDto;
  subscription: Subscription;


  constructor(public configService: AppConfigService,
              private authService: AuthService,
              private fb: FormBuilder,
              private tokenService: TokenService,
              private router: Router){ }

  ngOnInit(): void {
    this.initForm()
    this.config = this.configService.config;
    this.subscription = this.configService.configUpdate$.subscribe(config => {
      this.config = config;
    });

  }
  initForm(){
    this.form = this.fb.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

  onSubmit() {
    this.submitted = true;

    if (!this.form.invalid){
      const dataForm = this.form.getRawValue()
      console.log(dataForm)
      console.log(this.form.invalid)
      this.authService.login(dataForm).subscribe(data =>{
        this.tokenService.setToken(data.token)
        this.tokenService.setName(data.name)
        this.tokenService.setIdKey(data.id)
        this.router.navigate(['/'])
      })
    }
  }
}
