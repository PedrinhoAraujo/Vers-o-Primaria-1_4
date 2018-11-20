import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { ConsultaComponent } from './consulta/consulta.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
    },
    {
    path: 'registration',
    component: RegistrationComponent
    },
    {
    path: 'consulta',
    component: ConsultaComponent
    }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
