import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  // Mostrar-Ocultar-Contraseña
  showPassword = false;
  passwordToggleIcon = 'eye';
/** *****************************/

  constructor(private router: Router) { }
ngOnInit() {
  }
  /** mostrar-ocultar-password**/
  togglePassword(): void
  {
    this.showPassword = !this.showPassword;
      if (this.passwordToggleIcon =='eye')
      {
      this.passwordToggleIcon = 'eye-off';
      }
      else 
      {
      this.passwordToggleIcon = 'eye';
      }
  }

  

}
