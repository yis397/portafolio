import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InicioComponent } from './pages/inicio/inicio.component';
import { YoComponent } from './pages/yo/yo.component';
import { WorksComponent } from './pages/works/works.component';

const routes: Routes = [
  {path:"",component:HomeComponent,
  children:[
    {path:"inicio",component:InicioComponent},
    {path:"yo",component:YoComponent},
    {path:"works",component:WorksComponent},
    {path:"**",redirectTo:"inicio"},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DevelRoutingModule { }
