import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {
lang: any;
kg=true;
cm = true;
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
  step3(){
    this.router.navigate(['step3']);
  }
  step4() {
    this.router.navigate(['step4']);
  }

  convertKg(){
    if(this.kg){
      this.kg = false;
    }
    else{
      this.kg = true;
    }
  }

  convertCm(){
    if(this.cm){
      this.cm = false;
    }
    else{
      this.cm = true;
    }
  }

  step3part2() {
    
  }
}
