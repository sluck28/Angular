import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EmpleadoComponent } from './empleado/empleado.component';
import { HorarioComponent } from './horario/horario.component';
import { Menu_navegacionComponent } from './menu_navegacion/menu_navegacion.component';

@NgModule({
  declarations: [			
    AppComponent,
      EmpleadosComponent,
      EmpleadoComponent,
      HorarioComponent,
      Menu_navegacionComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
