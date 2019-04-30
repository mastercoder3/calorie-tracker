import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';


@Component({
  selector: 'app-profile-setting',
  templateUrl: './profile-setting.page.html',
  styleUrls: ['./profile-setting.page.scss'],
})
export class ProfileSettingPage implements OnInit {

  isOpen: boolean = false;
  isOpen1: Array<boolean>=[ false, false, false, false, false, false, false, false, false, false, false, false];
  index: number;
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

  doSomethingOnOpen(val){
    if(this.index !== val)
      this.isOpen1[this.index-1]=false;
    this.isOpen1[val-1]=true;
    this.index = val;
  }

  doSomethingOnClose(val){
    this.isOpen1[val-1]=false;
  }
  goback(){
    let x: Array<string> = JSON.parse(localStorage.getItem('last'))
    x.pop();
    localStorage.setItem('last', JSON.stringify(x));
    this.router.navigate([x[x.length - 1]]);
  }
}
