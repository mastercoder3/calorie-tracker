import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  lang: any = 'en';
  constructor(private router:Router, public translate: TranslateService) {
   
    if(localStorage.getItem('language')) {
      this.lang=localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
    else{
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
   }
  ngOnInit() {
  }

 
  
  login() {
    this.router.navigate(['login']);

  }

  step1() {
   this.router.navigate(['step1']);
  }
}
