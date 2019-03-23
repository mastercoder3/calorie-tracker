import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calorie-tracker', pathMatch: 'full' },
  { path: 'weight-tracker', loadChildren: './pages/weight-tracker/weight-tracker.module#WeightTrackerPageModule' },
  { path: 'profile-setting', loadChildren: './pages/profile-setting/profile-setting.module#ProfileSettingPageModule' },
  { path: 'recipe-tracker', loadChildren: './pages/recipe-tracker/recipe-tracker.module#RecipeTrackerPageModule' },
 { path: 'calorie-tracker', loadChildren: './pages/calorie-tracker/calorie-tracker.module#CalorieTrackerPageModule' },
 { path: 'add-recipes', loadChildren: './pages/add-recipes/add-recipes.module#AddRecipesPageModule' },
 { path: 'recipes', loadChildren: './pages/recipes/recipes.module#RecipesPageModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
