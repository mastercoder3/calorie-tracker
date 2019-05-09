import { Component, OnInit } from '@angular/core';
import { HelperService } from 'src/app/services/helper.service';
import { AlertController } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-calorie-tracker',
  templateUrl: './calorie-tracker.page.html',
  styleUrls: ['./calorie-tracker.page.scss'],
})
export class CalorieTrackerPage implements OnInit {

  glasses =[
    '41',
    '42',
    '42',
    '42',
    '42',
    '42',
    '42',
    '42'
  ];
  previousUrl;
  lang: any;
  constructor(private helper: HelperService,
     public alertController: AlertController, private router: Router, public translate: TranslateService) {
      if(localStorage.getItem('language')) {
        this.lang=localStorage.getItem('language')
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
      }
      else{
        this.lang = 'en';
        this.translate.setDefaultLang(this.lang);
        this.translate.use(this.lang);
      }
       localStorage.removeItem('last');
      this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      )
      .subscribe(e => {
        this.previousUrl = e;
        let x = [];
        if(!localStorage.getItem('last'))          
          x.push(this.previousUrl.url);
        else{
          x = JSON.parse(localStorage.getItem('last'))
          x.push(this.previousUrl.url);
        }
          localStorage.setItem('last',JSON.stringify(x));       
      });
      }

  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Add Weight',
      cssClass: 'alertBoxClass',
      inputs: [
        {
          name: 'name1',
          type: 'text',
          placeholder: 'Enter Weight'
        }],
        buttons: [
          {
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
              console.log('Confirm Cancel');
            }
          }, {
            text: 'Ok',
            handler: () => {
              console.log('Confirm Ok');
            }
          }
        ]
    });

    await alert.present();
  }
  addGlass(val:number){
    if(this.glasses[val-1] === '41'){
      this.glasses[val-1] = '40';
      if(this.glasses.length !== val)
        this.glasses[val]='41';
    }
    else if(this.glasses[val-1] === '42' || this.glasses[val-1] === '40'){
      //do nothing
    }

  }

  addWeight(){
    this.helper.presentModal1();
  }
  ClickTORecipeTracker(){
    this.router.navigate(['/dashboard/recipe-tracker']);
  }
  ClickTORecipe(){
    this.router.navigate(['/dashboard/recipes']);
  }
}
