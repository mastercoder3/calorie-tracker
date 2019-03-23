import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-weight',
  templateUrl: './add-weight.component.html',
  styleUrls: ['./add-weight.component.scss'],
})
export class AddWeightComponent implements OnInit {

  constructor(private modall: ModalController) { }

  ngOnInit() {}

  async closeModal(){
    const modal = await this.modall.getTop();
    modal.dismiss();
  }

  async close(){
    await this.closeModal();
  }



}
