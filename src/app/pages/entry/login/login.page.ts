import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { Http, RequestOptions,Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  lang: any;
  constructor(private router: Router, public translate: TranslateService, private http: Http) {
    if(localStorage.getItem('language')) {
      this.lang=localStorage.getItem('language')
      this.translate.setDefaultLang(this.lang);
      this.translate.use(this.lang);
    }
   }

  ngOnInit() {
    // this.getCountries().subscribe(res =>{
    //   console.log(res);
    // });
  }
  forgotpass() {
    this.router.navigate(['forgotpass']);
  }

  // getCountries(){
  //   let myHeaders = new Headers();
  //   myHeaders.append('Content-Type', 'application/json');
  //   let options = new RequestOptions({ headers: myHeaders });
  //   //callrequest
  //   return this.http.post('http://nutrioo.com/api/v4/users',{
  //     email: 'jdbhatti320@gmail.com',
  //     password: '123456',
  //     name: "junaid",
  //     sleep_hours: 8,
  //     program_id: 1
  //   }, options);
  // }

  // extractData(res){
  //   let body = res.json();
  //   return body;
  // }

}
