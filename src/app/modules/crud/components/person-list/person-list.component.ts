import { Component, OnInit } from '@angular/core';
import { PersonServiceService } from '../../services/person-service.service';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  styleUrls: ['./person-list.component.css']
})
export class PersonListComponent implements OnInit {

  objPerson: any;

  constructor(private personService: PersonServiceService) { }

  ngOnInit(): void {
    this.getPerson();
  }

  getPerson() {
    this.personService.getPerson().subscribe((ret: any) => {
      this.objPerson = ret;
    });
  }

  deletePerson(id: number) {
    this.personService.deletePerson(id).subscribe((ret: any) => {
      this.getPerson();
    }, (err: any) => {
      alert('Algum erro ocorreu, verifique seu acesso com a internet.');
      console.error(err);
    });
  }

}
