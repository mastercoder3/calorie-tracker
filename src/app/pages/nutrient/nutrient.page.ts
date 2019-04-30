import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nutrient',
  templateUrl: './nutrient.page.html',
  styleUrls: ['./nutrient.page.scss'],
})
export class NutrientPage implements OnInit {
  lang: any;
  constructor(public translate: TranslateService) { 
    
    if(localStorage.getItem('language')) {
      this.lang=localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
  }

  ngOnInit() {
  }

}
