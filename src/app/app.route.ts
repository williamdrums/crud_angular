
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { EditarUsuarioComponent } from './editar-usuario/editar-usuario.component';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';


const _rotas: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'add-usuario', component: AddUsuarioComponent},
    { path: 'lista-usuario', component: ListaUsuarioComponent },
    { path: 'editar-usuario', component: EditarUsuarioComponent },
    { path: '', component: LoginComponent }
];
export const rotas = RouterModule.forRoot(_rotas);