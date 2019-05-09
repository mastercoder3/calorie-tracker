import { Injectable } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../pages/modal/modal.component';
import { AddWeightComponent } from '../pages/add-weight/add-weight.component';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class HelperService {
Mymodal;

  weightHistory: BehaviorSubject<Array<any>>;
  constructor( public modalController: ModalController) {
    if(localStorage.getItem('myWeight')){
      this.weightHistory = new BehaviorSubject<Array<any>>(JSON.parse(localStorage.getItem('myWeight')));
    }
    else
    this.weightHistory = new BehaviorSubject<Array<any>>([]);

   }

   setWeight(val){
     this.weightHistory.next(val);
   }

   getWeight(){
     return this.weightHistory.asObservable();
   }

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
