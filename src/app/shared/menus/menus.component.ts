import { Component, OnInit } from '@angular/core';

interface MenuItem{
  ruta:string,
  nombre:string
}
@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styles: [
    ` 
    li {
      cursor:pointer;
    }
    `
  ]
})
export class MenusComponent {

  menuItems:MenuItem[]=[
    {
      ruta:'/mapas/fullscreen',
      nombre:'Fullscreen'
    },
    {
      ruta:'/mapas/zoomRange',
      nombre:'Zoom Range'
    },
    {
      ruta:'/mapas/marcadores',
      nombre:'Marcadores'
    },
    {
      ruta:'/mapas/propiedades',
      nombre:'Propiedades'
    }
  ]

  

}
