import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { UsuarioService } from '../service/usuario.service';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private rota: Router, private usuService: UsuarioService) { }

  addForm: FormGroup;


  ngOnInit() {

    this.addForm = this.formBuilder.group({
      id: "",
      email: ['', Validators.required],
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required]
    });
  }

  onSubmit() {
    this.usuService.adicionarUsuario(this.addForm.value)
      .subscribe(dado => {
        this.rota.navigate(['lista-usuario']);
      });
  }

}
