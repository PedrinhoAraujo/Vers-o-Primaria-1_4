import { Component, OnInit } from '@angular/core';
import { NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

class Registration {
  constructor(
    public CPF: string = '',
    public Nome: string = '',
    public END: string = '',    
    public email: string = '',
    public Matricula: string ='',
    public Perfil: string ='',
    public Telefone: String = '',  
    public password: string = '',
    
  ) {}
}

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  // It maintains list of Registrations
  registrations: Registration[] = [];
  // It maintains registration Model
  regModel: Registration;
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
    this.registrations.push(new Registration('84962810430', 'Mauro Costa', 'Rua Suave ', 'johan@gmail.com', '01239151', '10','999713583'));
    this.registrations.push(new Registration('84962820304', 'Andresa Costa', 'Rua Rock ', 'johan@gmail.com', '01239151', '10','999713583'));
    this.registrations.push(new Registration('84962247568', 'Keytyane Barros', 'Rua Suave ', 'johan@gmail.com', '01239151', '10','999713583'));
  }

  ngOnInit() {}

  // This method associate to New Button.
  onNew() {
    // Initiate new registration.
    this.regModel = new Registration();
    // Change submitType to 'Save'.
    this.submitType = 'Salvar';
    // display registration entry section.
    this.showNew = true;
  }

  // This method associate to Save Button.
  onSave() {
    if (this.submitType === 'Salvar') {
      // Push registration model object into registration list.
      this.registrations.push(this.regModel);
    } else {
      // Update the existing properties values based on model.
      this.registrations[this.selectedRow].CPF = this.regModel.CPF;
      this.registrations[this.selectedRow].Nome = this.regModel.Nome;
      this.registrations[this.selectedRow].END = this.regModel.END;
      this.registrations[this.selectedRow].email = this.regModel.email;
      this.registrations[this.selectedRow].Matricula = this.regModel.Matricula;
      this.registrations[this.selectedRow].Perfil = this.regModel.Perfil;
      this.registrations[this.selectedRow].Telefone = this.regModel.Telefone;
      this.registrations[this.selectedRow].password = this.regModel.password;
      
    }
    // Hide registration entry section.
    this.showNew = false;
  }

  // This method associate to Edit Button.
  onEdit(index: number) {
    // Assign selected table row index.
    this.selectedRow = index;
    // Initiate new registration.
    this.regModel = new Registration();
    // Retrieve selected registration from list and assign to model.
    this.regModel = Object.assign({}, this.registrations[this.selectedRow]);
    // Change submitType to Update.
    this.submitType = 'Atualizar';
    // Display registration entry section.
    this.showNew = true;
  }

  // This method associate to Delete Button.
  onDelete(index: number) {
    // Delete the corresponding registration entry from the list.
    this.registrations.splice(index, 1);
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
