import { Injectable } from '@angular/core';
import { Usuario } from './usuario';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private usuarioAutenticado: boolean = false;
  

  constructor(private router: Router) { }

  fazerLogin(usuario: Usuario){
      
    if(usuario.nome === 'usuario@quality.com' && usuario.senha === 'usuario'){

      this.usuarioAutenticado = true;
     
      this.router.navigate(['/consulta']);      
    }
    if(usuario.nome ==='admin@quality.com' && usuario.senha === 'admin'){
      this.usuarioAutenticado = true;
     
      this.router.navigate(['/registration']);
    } 
    
    else{     
      alert('Dados Invalidos!!')
      this.usuarioAutenticado=false;
      
    } 

     

  }


}
