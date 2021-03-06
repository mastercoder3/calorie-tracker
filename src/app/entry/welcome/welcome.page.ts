import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  lang:any;

  constructor(public translate: TranslateService) { }

  ngOnInit() {
  }

  switchLanguage() {
    localStorage.setItem('language',this.lang);
    this.translate.use(this.lang);
  }
}
