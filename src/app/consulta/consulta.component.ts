import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Consulta {
  constructor(
    public Id: string = '',
    public Titulo: string = '',
    public Descricao: string = '',    
    public DataPrevista: string = '',
    public Status: string ='',    
    public password: string = '',
    
  ) {}
}

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})

export class ConsultaComponent implements OnInit {
  // It maintains list of Registrations
  consultas: Consulta [] = [];
  // It maintains registration Model
  regModel: Consulta;
  // It maintains registration form display status. By default it will be false.
  showNew: Boolean = false;
  // It will be either 'Save' or 'Update' based on operation.
  submitType: string = 'Salvar';
  // It maintains table row index based on selection.
  selectedRow: number;
  // It maintains Array of countries.
 // countries: string[] = ['US', 'UK', 'India', 'UAE'];
  constructor() {
    // Add default registration data.
    this.consultas.push(new Consulta('10', 'Acesso a Pasta', 'Liberação de pasta da Qualidade ', '15/11/2018', 'Andamento'));
    this.consultas.push(new Consulta('20', 'Acesso a Net', 'Liberação de acesso a internet ', '10/11/2018', 'Atraso'));
    this.consultas.push(new Consulta('10', 'Atualização de software', 'Atualização do pacote Oficce ', '14/11/2018', 'Concluido'));
  }

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Consulta();
    // Change submitType to 'Save'.
    this.submitType = 'Salvar';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Salvar') {
      // Push registration model object into registration list.
      this.consultas.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.consultas[this.selectedRow].Id = this.regModel.Id;
      this.consultas[this.selectedRow].Titulo = this.regModel.Titulo;
      this.consultas[this.selectedRow].Descricao = this.regModel.Descricao;
      this.consultas[this.selectedRow].DataPrevista = this.regModel.DataPrevista;
      this.consultas[this.selectedRow].Status = this.regModel.Status;      
      this.consultas[this.selectedRow].password = this.regModel.password;
      
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Consulta();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.consultas[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Atualizar';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.consultas.splice(index, 1);
  }

  // This method associate toCancel Button.
  onCancel() {
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Bootstrap dropdown selection change.
 // onChangeCountry(country: string) {
    // Assign corresponding selected country to model.
  //  this.regModel.country = country;
 // }

}
