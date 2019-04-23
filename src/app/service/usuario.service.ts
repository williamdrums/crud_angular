
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../model/usuario.model';

@Injectable()
export class UsuarioService {

    constructor(private http: HttpClient) { }

    baseUrl: string = 'http://localhost:3000/usuarios';

    getUsuarios() {
        return this.http.get<Usuario[]>(this.baseUrl);
    }

    getUsuarioById(id: number) {
        return this.http.get<Usuario>(this.baseUrl + '/' + id);
    }

    adicionarUsuario(usu: Usuario) {
        return this.http.post(this.baseUrl, usu);
    }

    atualizarUsuario(usu: Usuario) {
        return this.http.put(this.baseUrl + '/' + usu.id, usu);
    }

    deletarUsuario(id: number) {
        return this.http.delete(this.baseUrl + '/' + id);
    }


}