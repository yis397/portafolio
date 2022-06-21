import { Component, OnInit } from '@angular/core';

interface IWork{
  nombre:string,
  icono:string,
}
@Component({
  selector: 'app-yo',
  templateUrl: './yo.component.html',
  styleUrls: ['./yo.component.scss']
})
export class YoComponent implements OnInit {
  
  list:IWork[]=[{nombre:"php",icono:"fa-brands fa-php"},
  {nombre:"Javascript",icono:"fa-brands fa-js"},
  {nombre:"React",icono:"fa-brands fa-react"},
  {nombre:"Angular",icono:"fa-brands fa-angular"},
  {nombre:"Vuejs",icono:"fa-brands fa-vuejs"},
  {nombre:"Unity",icono:"fa-brands fa-unity"},
  {nombre:"Node",icono:"fa-brands fa-node"},
  {nombre:"Boostrap",icono:"fa-brands fa-bootstrap"},
  {nombre:"Sass",icono:"fa-brands fa-sass"},
  {nombre:"Css",icono:"fa-brands fa-css3-alt"},
  {nombre:"Flutter",icono:"flutter"},
  {nombre:"Next",icono:"next"},
  {nombre:"Native",icono:"react"},
  {nombre:"Graphql",icono:"graphql"},
  
];
  constructor() { }
  
  ngOnInit(): void {
  }

}
