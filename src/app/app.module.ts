import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalcularModule } from './calcular/calcular.module';
import { MostrarResultadoComponent } from './mostrar-resultado/mostrar-resultado.component';
import { MostrarResultadoModule } from './mostrar-resultado/mostrar-resultado.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MostrarResultadoModule,
    CalcularModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
