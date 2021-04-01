import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {


  constructor(private api: ApiService, private formBuilder: FormBuilder) { }

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
    this.api.registerVoter(this.registerForm.value).subscribe((data) => {console.log(data)})
    this.registerForm.reset();
  }
}
