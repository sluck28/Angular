import { Component } from '@angular/core';

/**Aqui seleccionamos los componentes a llamar y las hojas de estilo */

@Component({
  selector: 'app-raiz',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/**Aqui se pueden agregar componentes para despues llamarlos en nuestro app.component.ts */
export class AppComponent {
  title = 'angular';
  saludo="Hola aqui aprendiendo angular :)";
}



