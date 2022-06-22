import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:"devel",loadChildren:()=>import("./devel/devel.module").then(e=>e.DevelModule)},
  {path:"**",redirectTo:'devel'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
