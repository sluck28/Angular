import { Component, OnInit } from '@angular/core';

@Component({

  /**Agregar cajas en el archivo ts in line **/
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
/** template:/*"<p>Hola</p>"
  /**Para hacer cambios sin utilizar el css **/
  styleUrls: ['./empleado.component.css']
 
})
export class EmpleadoComponent implements OnInit {
  
  /**interpolacion dinamica en ts */    
  /**Propiedades */
  nombre="Juan";
  apellido="Alvarado";
  /**Para hacer las propiedades privadas para que no sean modificadas desde otra clase */
   edad=15;
  empresa="Microsoft";
  /**Usamos un metood get para acceder a los datos privados */
 /* getEdad(){
    return this.edad;
  }*/


  constructor() { }

  ngOnInit(): void {
  }

}
