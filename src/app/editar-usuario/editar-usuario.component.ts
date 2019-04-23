import { Component, OnInit } from '@angular/core';
import { Usuario } from '../model/usuario.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';
import { first } from "rxjs/operators";

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {

  usuario: Usuario;
  editForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private rota: Router, private usurioService: UsuarioService) { }

  ngOnInit() {
    let usuId = localStorage.getItem("editarUsuarioId");
    if (!usuId) {
      alert("Ação Invalida")
      this.rota.navigate(['lista-usuario']);
       return;
    }

    this.editForm = this.formBuilder.group({
      id: "",
      email: ['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required]
    });

    this.usurioService.getUsuarioById(+usuId)
      .subscribe(dado => {
        this.editForm.setValue(dado);
      });
  }
  onSubmit() {
    this.usurioService.atualizarUsuario(this.editForm.value)
      .pipe(first()) //operador de filtro first retorna o primeiro valor de uma sequencia
      //pipe vincula o operadores a ele
      .subscribe(dado => {
        this.rota.navigate(['lista-usuario']);
      },
        error => {
          alert(error);
        });
  }

}
