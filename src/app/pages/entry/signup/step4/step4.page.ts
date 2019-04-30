import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
})
export class Step4Page implements OnInit {
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
  step1() {
    this.router.navigate(['step1']);
  }
  step2() {
    this.router.navigate(['step2']);
  }

  step3() {
    this.router.navigate(['step3']);
  }
  step5() {
    this.router.navigate(['step5']);
  }

}
