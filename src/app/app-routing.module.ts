import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginComponent, LoginViaPasswordComponent } from './_auth';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'loginviapassword',
    component:LoginViaPasswordComponent
  },
 
  {path:'pages', loadChildren:()=> import ('./_pages/pages.module').then(m => m.PagesModule)}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
