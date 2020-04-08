import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-skills',
  templateUrl: './profile-skills.component.html',
  styleUrls: ['./profile-skills.component.css']
})
export class ProfileSkillsComponent implements OnInit {

  frontEnd = ['Angular', 'JavaScript', 'Html'];
  backEnd = ['Java', 'Spring', 'Spring Web Services', 'Hibernate'];
  databases = ['Oracle', 'SQL'];
  constructor() { }

  ngOnInit() {
  }

}
