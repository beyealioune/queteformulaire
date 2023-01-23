import { Component } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  user: User = new User("", "", "","" )
 

 
  onSubmit(): void {
    // form submitted
    console.log(this.user);
  
  

}};


export class User {
  firstname: string;
 lastname: string;
  email: string;
  password: string;

  constructor(firstname: string, lastname: string, email: string, password: string) {
      this.firstname = firstname;
      this.lastname = lastname
      this.email = email
      this.password = password
  }
  
}