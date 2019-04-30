import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step4',
  templateUrl: './step4.page.html',
  styleUrls: ['./step4.page.scss'],
})
export class Step4Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  step1() {
    this.router.navigate(['step1']);
  }
  step2() {
    this.router.navigate(['step2']);
  }

  step3() {
    this.router.navigate(['step3']);
  }
  step5() {
    this.router.navigate(['step5']);
  }

}
