import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { rotas } from './app.route';
import { UsuarioService } from './service/usuario.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomMaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ListaUsuarioComponent,
    EditarUsuarioComponent,
    AddUsuarioComponent
    
    

  ],
  imports: [
    BrowserModule,
    rotas,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CustomMaterialModule
   

  ],
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
