import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.page.html',
  styleUrls: ['./step2.page.scss'],
})
export class Step2Page implements OnInit {
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
    this.router.navigate(['/step1']);
  }
  step2(){

  }
  step3() {
    this.router.navigate(['/step3']);
  }

}
