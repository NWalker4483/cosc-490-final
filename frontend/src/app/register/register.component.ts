import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    voterId: "",
    registrarId: "",
    firstName: "",
    lastName: ""
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your order has been submitted', this.registerForm.value);
    this.registerForm.reset();
  }

}
