import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Service } from './service';

@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.html',
  styleUrls: ['./aboutme.css']
})
export class AboutMe implements OnInit {
  personalInfo: String[];
  error: false;

  constructor(
    private router: Router,
    private service: Service) { }

  getAboutMe(): void {
    this.service
      .getAboutMe()
      .then(personalInfo => {
        this.personalInfo = personalInfo;
        console.log(personalInfo);
      })
      .catch(error => this.error = error);
  }

  ngOnInit(): void {
    // this.getAboutMe();
  }
}
