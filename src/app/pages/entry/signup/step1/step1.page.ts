import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.page.html',
  styleUrls: ['./step1.page.scss'],
})
export class Step1Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  ActionBtn() {

  }
  step2() {
    this.router.navigate(['/step2']);
  }
}
