import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'calorie-tracker', pathMatch: 'full' },
  { path: 'weight-tracker', loadChildren: './pages/weight-tracker/weight-tracker.module#WeightTrackerPageModule' },
  { path: 'profile-setting', loadChildren: './pages/profile-setting/profile-setting.module#ProfileSettingPageModule' },
  { path: 'recipe-tracker', loadChildren: './pages/recipe-tracker/recipe-tracker.module#RecipeTrackerPageModule' },
 { path: 'calorie-tracker', loadChildren: './pages/calorie-tracker/calorie-tracker.module#CalorieTrackerPageModule' },
 { path: 'add-recipes', loadChildren: './pages/add-recipes/add-recipes.module#AddRecipesPageModule' },
 { path: 'recipes', loadChildren: './pages/recipes/recipes.module#RecipesPageModule' },
 { path: 'nutrient', loadChildren: './pages/nutrient/nutrient.module#NutrientPageModule'},
 { path: 'welcome', loadChildren: './pages/entry/welcome/welcome.module#WelcomePageModule'},
  { path: 'step1', loadChildren: './pages/entry/signup/step1/step1.module#Step1PageModule' },
  { path: 'step2', loadChildren: './pages/entry/signup/step2/step2.module#Step2PageModule' },
  { path: 'step3', loadChildren: './pages/entry/signup/step3/step3.module#Step3PageModule' },
  { path: 'step4', loadChildren: './pages/entry/signup/step4/step4.module#Step4PageModule' },
  { path: 'step5', loadChildren: './pages/entry/signup/step5/step5.module#Step5PageModule' },
  { path: 'login', loadChildren: './pages/entry/login/login.module#LoginPageModule' },
  { path: 'forgotpass', loadChildren: './pages/entry/login/forgotpass/forgotpass.module#ForgotpassPageModule' }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
