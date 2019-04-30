import { Component, OnInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { Router } from '@angular/router';
import { HelperService } from 'src/app/services/helper.service';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-weight-tracker',
  templateUrl: './weight-tracker.page.html',
  styleUrls: ['./weight-tracker.page.scss'],
})
export class WeightTrackerPage implements OnInit {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;

  selector: string = "weight";
  barChart: any;
  doughnutChart: any;
  lang: any;
  constructor(private router: Router, private helper: HelperService,public alertController: AlertController, public translate: TranslateService) {
    
    if(localStorage.getItem('language')) {
      this.lang=localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
   }

  ngOnInit() {
    this.ChangeGraph(this.selector);
  }

  changeSwitchCase(val){
    this.selector = val;
    this.ChangeGraph(this.selector);
  }
    ChangeGraph(selector){
    this.selector=selector;
    if(selector=='weight')
    {
      setTimeout(()=>{
        this.barChart = new Chart(this.barCanvas.nativeElement, {
          type: 'line',
          data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
            defaultColor: '#8d028a',
            datasets: [
              {
                label: 'KG',
                data: [80, 81, 81, 82, 82, 83, 84, 83.5],
                backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
                  'rgba(255, 206, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(153, 102, 255, 0.2)',
                  'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                  'rgba(255,99,132,1)',
                  'rgba(54, 162, 235, 1)',
                  'rgba(255, 206, 86, 1)',
                  'rgba(75, 192, 192, 1)',
                  'rgba(153, 102, 255, 1)',
                  'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1,
                pointRadius: 3,
                pointBackgroundColor: 'white',
                fill: false,
                pointHoverBackgroundColor: '#8d028a',
                showLines: false
              }
            ]
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    fontColor: '#8d028a',
                    beginAtZero: false,
                    fontStyle: 'bold'
                  }
                }
              ],
              xAxes: [
                {
                  ticks: {
                    fontColor: '#8d028a',
                    fontStyle: 'bold'
                  }
                }
              ]
            },
            scaleLabel: { display: true },
            elements: {
              line: {
                tension: 0 // disables bezier curves
              }
            },
            legend: {
              display: false
            }
          }
        });
       }, 100)
      }
      else if(selector=='nutrition'){
        setTimeout(()=>{
          this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
            type: 'doughnut',
            data: {
              labels: [],
              datasets: [
                {
                  label: '# of Votes',
                  data: [50, 20, 30],
                  backgroundColor: [
                    '#3ca2ff',
                    '#ffd52c',
                    '#ff4f37',
                  ],
                  hoverBackgroundColor: [
                    '#3ca2ff',
                    '#36A2EB',
                    '#FFCE56',
                  ]
                }
              ]
            }
          });
        }, 100)
  
      }
    }

    openSettings(){
      this.router.navigate(['/dashboard/profile-setting']);
    }

    openModal(){
      this.helper.presentModal1();
    }
    goback(){
      let x: Array<string> = JSON.parse(localStorage.getItem('last'))
      x.pop();
      localStorage.setItem('last', JSON.stringify(x));
      this.router.navigate([x[x.length - 1]]);
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
}
  


