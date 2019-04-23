import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-lista-usuario',
  templateUrl: './lista-usuario.component.html',
  styleUrls: ['./lista-usuario.component.css']
})
export class ListaUsuarioComponent implements OnInit {

  usuarios: Usuario[];

  constructor(private rota: Router, private usuService: UsuarioService) { }

  ngOnInit() {
    this.usuService.getUsuarios()
      .subscribe(dados => {
        this.usuarios = dados;
      });
  }

  deletarUsuario(usu: Usuario): void {
    this.usuService.deletarUsuario(usu.id)
      .subscribe(dados => {
        this.usuarios = this.usuarios.filter(u => u !== usu);
      })
  };

  editarUsuario(usu: Usuario): void {
    //localStorage um banco temporario no navegador
    localStorage.removeItem("editarUsuarioId");
    localStorage.setItem("editarUsuarioId", usu.id.toString());
    this.rota.navigate(['editar-usuario']);
  };

  adicionarUsuario(): void {
    this.rota.navigate(['add-usuario']);
  };

}
