import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonServiceService } from '../../services/person-service.service';

@Component({
  selector: 'app-person-action',
  templateUrl: './person-action.component.html',
  styleUrls: ['./person-action.component.css']
})
export class PersonActionComponent implements OnInit {

  // Variavel que define a acao do componente
  action: string = '';
  // Variavel que captura o idPerson para realizar o update
  idPerson: number = 0;

  // Declarando formulário de adição de pessoas (person)
  personForm = this.fb.group({
    nomePerson: ['', [Validators.required]],
    sobrenomePerson: ['', [Validators.required]],
    nacionalidadePerson: ['', [Validators.required]],
    emailPerson: ['', [Validators.required, Validators.email]],
    telefonePerson: ['', [Validators.required]],
    cepPerson: ['', [Validators.required]],
    estadoPerson: ['', [Validators.required]],
    cidadePerson: ['', [Validators.required]],
    logradouroPerson: ['', [Validators.required]],
    numeroPerson: ['', [Validators.required]]
  });

  constructor(private fb: FormBuilder,
    private personService: PersonServiceService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    // Capturando o idPerson vindo da rota
    this.route.params.subscribe(async params => {
      this.idPerson = params['idPerson'];

      if (this.idPerson) {
        this.action = 'Editar';
        this.getPersonEspecifica();
      } else {
        this.action = 'Cadastrar';
      }
    });
  }

  // Metodo que captura uma pessoa especifica caso a acao seja editar
  getPersonEspecifica() {
    this.personService.getPersonEspecifica(this.idPerson).subscribe((ret: any) => {
      this.personForm.controls['nomePerson'].setValue(ret.nome);
      this.personForm.controls['sobrenomePerson'].setValue(ret.sobrenome);
      this.personForm.controls['nacionalidadePerson'].setValue(ret.nacionalidade);
      this.personForm.controls['emailPerson'].setValue(ret.email);
      this.personForm.controls['telefonePerson'].setValue(ret.telefone);
      this.personForm.controls['cepPerson'].setValue(ret.cep);
      this.personForm.controls['estadoPerson'].setValue(ret.estado);
      this.personForm.controls['cidadePerson'].setValue(ret.cidade);
      this.personForm.controls['logradouroPerson'].setValue(ret.logradouro);
      this.personForm.controls['numeroPerson'].setValue(ret.numero);
    }, (err: any) => {
      alert('Algum erro ocorreu, verifique seu acesso com a internet.');
      console.error(err);
    });
  }

  getEndereco() {
    this.personService.getEndereco(this.personForm.controls['cepPerson'].value || '').subscribe((retViaCep: any) => {
      this.personForm.controls['estadoPerson'].setValue(retViaCep.uf);
      this.personForm.controls['cidadePerson'].setValue(retViaCep.localidade);
      this.personForm.controls['logradouroPerson'].setValue(retViaCep.logradouro);
    }, (err: any) => {
      this.personForm.controls['cepPerson'].setValue('');
      this.personForm.controls['estadoPerson'].setValue('');
      this.personForm.controls['cidadePerson'].setValue('');
      this.personForm.controls['logradouroPerson'].setValue('');
      this.personForm.controls['cepPerson'].touched;

      alert('Insira um cep valido');
    });
  }

  saveForm() {
    console.log(this.personForm.value);
    // Se houver um id, edita, se nao houver, cadastra.
    if (this.idPerson) {
      this.personService.updatePerson(this.personForm.value, this.idPerson).subscribe((ret: any) => {
        this.router.navigate(['/crud/person']);
      }, (err: any) => {
        alert('Algum erro ocorreu, verifique seu acesso com a internet.');
        console.error(err);
      });
    } else {
      this.personService.cadPerson(this.personForm.value).subscribe((ret: any) => {
        this.router.navigate(['/crud/person']);
      }, (err: any) => {
        alert('Algum erro ocorreu, verifique seu acesso com a internet.');
        console.error(err);
      });
    }

  }

}
