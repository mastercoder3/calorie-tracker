import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-recipes',
  templateUrl: './add-recipes.page.html',
  styleUrls: ['./add-recipes.page.scss'],
})
export class AddRecipesPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  Recipe(){
    this.router.navigate(['/recipe-tracker']);
}
goback(){
  let x: Array<string> = JSON.parse(localStorage.getItem('last'))
  x.pop();
  localStorage.setItem('last', JSON.stringify(x));
  this.router.navigate([x[x.length - 1]]);
}
}
