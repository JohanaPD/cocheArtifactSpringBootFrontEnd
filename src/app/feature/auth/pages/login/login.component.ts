import {Component} from '@angular/core';
import {Router, RouterLink} from "@angular/router";
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {AppBaseComponent} from "../../../../core/utils/AppBaseComponent";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    RouterLink,
    ReactiveFormsModule,
    NgClass
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent extends AppBaseComponent {

  public loginForm: FormGroup;

  constructor(private router: Router,
              private fb: FormBuilder) {

    super();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required , Validators.minLength(6)]]
    });

  }

  public signIn(): void {
    if (this.loginForm.valid) {
      alert("todo ok")

    } else {
      alert("Error en Formulario");
      //borrar en despliegue
      console.log(this.getAllErrors(this.loginForm));
    }


  };

    public userRecord(): void {
      this.router.navigateByUrl("authentication/record")
    }


  public getErrorForm(field: string): string {
    let message;
    if (this.isTouchedField(this.loginForm, field)) {
      if(this.loginForm.get(field).hasError('required')) {
            message = "El campo es requerido";
      }else if(this.loginForm.get(field).hasError('email')) {
        message = "El formato del mail no es correcto";
      }

    }
    return message;

  }

}
