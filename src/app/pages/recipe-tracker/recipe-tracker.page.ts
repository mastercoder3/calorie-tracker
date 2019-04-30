import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-recipe-tracker',
  templateUrl: './recipe-tracker.page.html',
  styleUrls: ['./recipe-tracker.page.scss'],
})
export class RecipeTrackerPage implements OnInit {
  lang: any;
  constructor(private router:Router, public translate: TranslateService) { 
    
    if(localStorage.getItem('language')) {
      this.lang=localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
  }

  ngOnInit() {
  }
  goback(){
    let x: Array<string> = JSON.parse(localStorage.getItem('last'))
    x.pop();
    localStorage.setItem('last', JSON.stringify(x));
    this.router.navigate([x[x.length - 1]]);
  }
}
