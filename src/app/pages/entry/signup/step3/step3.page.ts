import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.page.html',
  styleUrls: ['./step3.page.scss'],
})
export class Step3Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  step1() {
   this.router.navigate(['step1']);
  }
  step2() {
    this.router.navigate(['step2']);
  }
  
  step4() {
    this.router.navigate(['step4']);
  }

  step3part2() {
    
  }
}
