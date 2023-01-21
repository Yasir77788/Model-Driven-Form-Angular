import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  form = new FormGroup({ username: new FormControl ('', Validators.required), 
	password: new FormControl ('', Validators.required) }); 
	login(){ console.log(this.form.value); // prints form values in json format 
}
 

  constructor() { }

  ngOnInit(): void {
  }

}
