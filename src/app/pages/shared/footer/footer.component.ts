import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../../modal/modal.component';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {

  constructor(public modalController: ModalController, private helper:HelperService, private router: Router) { }

  ngOnInit() {}
  openModal(){
    this.helper.presentModal()
  }

  addRecipe(){
    this.router.navigate(['/add-recipes']);
  }
  home(){
    this.router.navigate(['/calorie-tracker']);
  }

  weightTracker(){
    this.router.navigate(['weight-tracker']);
  }
}


