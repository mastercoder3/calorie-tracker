import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-step5',
  templateUrl: './step5.page.html',
  styleUrls: ['./step5.page.scss'],
})
export class Step5Page implements OnInit {
  lang: any;
  constructor(private router: Router, public translate: TranslateService) { 
    if(localStorage.getItem('language')) {
      this.lang=localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
  }

  ngOnInit() {
  }
  login() {
  }

  step1(){
    this.router.navigate(['step1']);
  }

  step2(){
    this.router.navigate(['step1']);
  }

  step3(){
    this.router.navigate(['step1']);
  }

  step4(){
    this.router.navigate(['step1']);
  }
}
