import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../pages/modal/modal.component';
import { AddWeightComponent } from '../pages/add-weight/add-weight.component';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
Mymodal
  constructor( public modalController: ModalController) { }

  async presentModal() {
    this.Mymodal = await this.modalController.create({
      component: ModalComponent,
      componentProps: { value: 123 }
    });
  
    return await this.Mymodal.present();
  }

  async presentModal1() {
    this.Mymodal = await this.modalController.create({
      component: AddWeightComponent,
      componentProps: { value: 123 }
    });
  
    return await this.Mymodal.present();
  }

  closeModal(){
    this.Mymodal.dismiss()
  }
}
