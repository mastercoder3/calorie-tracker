import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recipe-tracker',
  templateUrl: './recipe-tracker.page.html',
  styleUrls: ['./recipe-tracker.page.scss'],
})
export class RecipeTrackerPage implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goback(){
    let x: Array<string> = JSON.parse(localStorage.getItem('last'))
    x.pop();
    localStorage.setItem('last', JSON.stringify(x));
    this.router.navigate([x[x.length - 1]]);
  }
}
