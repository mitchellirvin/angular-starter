import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'welcome',
  templateUrl: './welcome.html',
  styleUrls: ['./welcome.css']
})
export class Welcome implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
    // init
  }
}
