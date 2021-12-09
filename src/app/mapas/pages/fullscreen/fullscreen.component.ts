import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';



@Component({
  selector: 'app-fullscreen',
  templateUrl: './fullscreen.component.html',
  styles: [
    `
    #mapas{
      height:100%;
      width: 100%;
    }
     `
  ]
})
export class FullscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    var map = new mapboxgl.Map({
    container: 'mapas',
    style: 'mapbox://styles/mapbox/streets-v11',
    center:[-68.00794009827207,10.460875818648743],
    zoom:18
    });
  }

}
