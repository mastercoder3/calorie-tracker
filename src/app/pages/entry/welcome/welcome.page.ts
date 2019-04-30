import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  lang: any;
  constructor(private router:Router, public translate: TranslateService) {
    this.translate.setDefaultLang(this.lang);
    this.translate.use(this.lang);
   }
  ngOnInit() {
  }

  switchLanguage(){
    this.translate.use(this.lang);
  }
  
  login() {
   
  }

  step1() {
   
  }
}
