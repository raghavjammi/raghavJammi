import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-contact',
  templateUrl: './profile-contact.component.html',
  styleUrls: ['./profile-contact.component.css']
})
export class ProfileContactComponent implements OnInit {
  name:string = ""; 
  email:string = "";
  comments:string = "";
  output:string = "";
  constructor() {
   
   }

  ngOnInit() {
  }
  
  // name = "";

  submit() {
    this.output = 'Dear '+ this.name + ' ,your details submitted successfully';
    alert(this.output);
    this.name = this.email = this.comments = this.output = '';
  }
}