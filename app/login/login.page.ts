import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  //Variables
  form = {
    txbUsuario: "",
    txbPassword: ""
  }

  ngOnInit() {
  }

  volver()
  {
    this.router.navigateByUrl('/home')
  }

  iniciarSesion()
  {
    if ( this.form.txbUsuario == "mama" )
    {
      this.router.navigateByUrl( "/panel-padre" )
    }
    else
    {
      alert( "No se reconoce el Usuario" )
    }
  }

}
