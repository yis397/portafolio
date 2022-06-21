import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevelRoutingModule } from './devel-routing.module';
import { InicioComponent } from './pages/inicio/inicio.component';
import { HomeComponent } from './pages/home/home.component';
import { YoComponent } from './pages/yo/yo.component';
import { WorksComponent } from './pages/works/works.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    InicioComponent,
    HomeComponent,
    YoComponent,
    WorksComponent,
  ],
  imports: [
    DevelRoutingModule,
    CommonModule,CarouselModule
  ]
})
export class DevelModule { }
