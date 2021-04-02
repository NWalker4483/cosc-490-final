import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  response: string = "Blah Message";
  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

  registerForm = this.formBuilder.group({
    voterId: "12345",
    registrarId: "12345",
    firstName: "Nile",
    lastName: "Walker"
  });

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn('Your registration has been submitted', this.registerForm.value);
    this.api.registerVoter(this.registerForm.value).subscribe((data) => {this.response = data.toString()})
    this.registerForm.reset();
  }
}
